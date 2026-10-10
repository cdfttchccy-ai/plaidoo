import fs from "fs";
import path from "path";
import vm from "vm";
import { fileURLToPath } from "url";

const root = path.dirname(fileURLToPath(import.meta.url));
const context = { console };
context.window = context;
vm.createContext(context);

for (const file of ["js/catalog.js", "js/logic.js"]) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  vm.runInContext(source, context, { filename: file });
}

const catalog = context.PLAIDOO_CATALOG;
const { buildPack } = context.PlaidooLogic;
let failed = 0;

let passed = 0;

function assert(condition, message) {
  if (!condition) {
    failed += 1;
    console.error("FAIL", message);
    return;
  }
  passed += 1;
}

const allowedArticles = new Set([
  "L216-1",
  "L216-2",
  "L216-3",
  "L216-6",
  "L216-7",
  "L221-15",
  "L221-18",
  "L221-19",
  "L221-21",
  "L221-24",
  "L221-28",
  "L217-bloc",
  "L215-1",
  "L215-1-1",
  "D215-1",
  "L241-4",
  "note-ancien-L216-4",
]);

assert(catalog.reasons.length === 9, "neuf motifs");
assert(new Set(catalog.reasons.map((reason) => reason.id)).size === 9, "identifiants uniques");

const expectedCodes = ["13.1", "13.2", "13.3", "13.6", "13.7", "4855", "4853", "4841", "4860"];
expectedCodes.forEach((code) => {
  assert(catalog.reasons.some((reason) => reason.code === code), "code " + code);
});

catalog.reasons.forEach((reason) => {
  catalog.carriers.forEach((carrier) => {
    [false, true].forEach((subscription) => {
      const pack = buildPack(catalog, reason.id, carrier.id, subscription);
      const label = reason.id + " / " + carrier.id + " / abo=" + subscription;
      assert(pack.ok, label + " ok");
      assert(pack.checklist.length >= 4, label + " checklist");
      assert(pack.articles.length >= 1, label + " articles");
      assert(pack.letter.includes("[NOM DE LA BOUTIQUE]"), label + " placeholder boutique");
      assert(pack.letter.includes("[N° COMMANDE]"), label + " placeholder commande");
      assert(pack.letter.includes("[MONTANT]"), label + " placeholder montant");
      assert(pack.letter.includes(carrier.label), label + " transporteur dans la lettre");
      assert(pack.letter.includes(reason.code), label + " code dans la lettre");
      assert(pack.letter.includes("pas un conseil juridique"), label + " mention");
      pack.articles.forEach((article) => {
        assert(allowedArticles.has(article.id), label + " article autorisé " + article.id);
        assert(article.text && article.source && article.confidence, label + " source " + article.id);
      });
      pack.checklist.forEach((item) => {
        assert(item.title && item.text, label + " pièce vide");
      });
    });
  });
});

const colissimo = buildPack(catalog, "visa-13-1", "colissimo", false);
assert(colissimo.checklist.some((item) => item.decisive && /SIGNATURE|attestation/i.test(item.text)), "Colissimo preuve décisive");
assert(colissimo.articles.some((article) => article.id === "L216-2"), "non reçu cite L216-2");
assert(colissimo.articles.some((article) => article.id === "L221-15"), "non reçu cite L221-15");
assert(!colissimo.articles.some((article) => article.id === "L215-1-1"), "sans abonnement, pas L215-1-1");

const relay = buildPack(catalog, "mc-4855", "mondial-relay", false);
assert(/Connect/.test(relay.checklist.map((item) => item.text).join(" ")), "Mondial Relay Connect");

const chrono = buildPack(catalog, "visa-13-1", "chronopost", true);
assert(/Chronotrace/.test(chrono.letter + chrono.checklist.map((item) => item.text).join(" ")), "Chronopost Chronotrace");
assert(chrono.articles.some((article) => article.id === "L215-1-1"), "abonnement ajoute L215-1-1");
assert(chrono.checklist.some((item) => /résilier votre contrat/i.test(item.text) || /Cycle d'abonnement/.test(item.title)), "pièce abonnement");

const autre = buildPack(catalog, "visa-13-1", "autre", false);
assert(!/WSDL|API Documents/.test(autre.checklist.map((item) => item.text).join(" ")), "autre transporteur sans API inventée");

const described = buildPack(catalog, "visa-13-3", "colissimo", false);
assert(described.articles.some((article) => article.id === "L217-bloc"), "13.3 cite le bloc conformité");
assert(described.warnings.some((warning) => /réparation ou le remplacement/.test(warning.text)), "alerte conformité");

const umbrella = buildPack(catalog, "mc-4853", "colissimo", false);
assert(umbrella.warnings.some((warning) => /4853/.test(warning.text) && /parapluie|large/i.test(warning.title + warning.text)), "4853 signalé comme large");
const mcSentence = "Dans le guide marchand Mastercard (Chargeback Guide Merchant Edition) du 13 mai 2025, les cas « non reçu », « non conforme » et « abonnement » sont regroupés sous le code 4853, mais certains prestataires (dont Stripe) affichent encore les anciens codes : fiez-vous au récit du litige.";
for (const id of ["mc-4855", "mc-4853", "mc-4841"]) {
  const reason = catalog.reasons.find((item) => item.id === id);
  assert(reason.stripe.includes(mcSentence), id + " phrase Mastercard 13 mai 2025");
  assert(reason.cites.some((cite) => cite.url === "https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/documents/chargeback-guide.pdf"), id + " lien guide Mastercard");
  assert(reason.cites.some((cite) => cite.url === "https://docs.stripe.com/disputes/categories"), id + " lien categories Stripe");
}
assert(!/prévoit de retirer|retirer à terme|susceptible d'être basculé|basculé vers/.test(JSON.stringify(catalog)), "plus de retrait annoncé des codes");
const mcSource = catalog.sources.find((source) => /Chargeback Guide/.test(source.title));
assert(mcSource && mcSource.note.includes("13 mai 2025") && mcSource.note.includes("4853"), "note source Mastercard");
assert(fs.readFileSync(path.join(root, "js", "outil.js"), "utf8").includes("pack.reason.cites"), "outil affiche les liens sources");

const recurring = buildPack(catalog, "visa-13-2", "autre", false);
assert(recurring.warnings.some((warning) => /pas un abonnement/.test(warning.title)), "13.2 sans abonnement prévient");
assert(recurring.articles.some((article) => article.id === "D215-1"), "13.2 cite D215-1");

const credit = buildPack(catalog, "mc-4860", "chronopost", false);
assert(credit.articles.some((article) => article.id === "L221-24"), "4860 cite L221-24");

const cancelled = buildPack(catalog, "visa-13-7", "mondial-relay", false);
assert(cancelled.articles.some((article) => article.id === "L221-21"), "13.7 cite L221-21");
assert(cancelled.articles.some((article) => article.id === "L221-28"), "13.7 cite L221-28");

assert(buildPack(catalog, "inconnu", "colissimo", false).ok === false, "motif inconnu rejeté");
assert(buildPack(catalog, "visa-13-1", "dhl-invente", false).ok === false, "transporteur inconnu rejeté");

const countBase = "https://abacus.jasoncameron.dev";
const countNamespace = "plaidoo-cdfttchccy";
const countKeys = ["index", "outil", "lettre-generee"];
const formAction = "https://formsubmit.co/c0b7e8091d90e4e34fab6ebe7dbb1ce9";
const banned = [/XMLHttpRequest/, /localStorage/, /sessionStorage/, /gtag\s*\(/, /google-analytics/, /googletagmanager/, /doubleclick/, /facebook\.net/, /hotjar/, /segment\.com/, /mixpanel/, /hits\.sh/];
const emailLike = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i;

for (const file of fs.readdirSync(path.join(root, "js"))) {
  const source = fs.readFileSync(path.join(root, "js", file), "utf8");
  banned.forEach((pattern) => {
    assert(!pattern.test(source), file + " sans " + pattern);
  });
  assert(!emailLike.test(source), file + " sans adresse e-mail");
  if (file !== "count.js") {
    assert(!/fetch\s*\(/.test(source), file + " sans fetch");
    assert(!/sendBeacon/.test(source), file + " sans sendBeacon");
    assert(!source.includes("abacus.jasoncameron.dev"), file + " sans compteur");
  }
}
const countJs = fs.readFileSync(path.join(root, "js/count.js"), "utf8");
assert(countJs.includes("keepalive"), "compteur keepalive");
assert(countJs.includes("AbortController") && countJs.includes("4000"), "compteur avec delai court");
assert(countJs.includes("sendBeacon"), "repli sendBeacon");
countKeys.forEach((key) => {
  assert(countJs.includes(countBase + "/hit/" + countNamespace + "/") || countJs.includes(countNamespace), "compteur " + key);
});
assert(countJs.includes(countBase + "/hit/") && countJs.includes('"' + countNamespace + '"'), "seul Abacus est autorise");
assert(!/hits\.sh|counterapi\.dev|countapi\.xyz/.test(countJs), "pas d'autre compteur");

function externalSrcs(html) {
  return [...html.matchAll(/\bsrc="(https?:\/\/[^"]+)"/g)].map((match) => match[1]);
}

const pages = ["index.html", "outil.html", "sources.html", "merci.html", "a-propos.html", "mentions-legales.html", "confidentialite.html", "plan-du-site.html"];
for (const file of pages) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  assert(!/<script[^>]+src="https?:/i.test(html), file + " sans script externe");
  assert(html.includes("Ceci n'est pas un conseil juridique"), file + " disclaimer visible");
  assert(!emailLike.test(html), file + " sans adresse e-mail");
  assert(externalSrcs(html).length === 0, file + " sans image externe");
  assert(html.includes(">Plan du site</a>"), file + " lien plan du site");
  assert(html.includes('href="sitemap.xml"'), file + " lien sitemap");
  if (file !== "index.html") {
    assert(!/<form\b/i.test(html), file + " sans formulaire");
  }
}

const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
assert((index.match(/<form\b/gi) || []).length === 1, "un seul formulaire");
assert(index.includes('action="' + formAction + '"'), "action FormSubmit masquee");
assert(index.includes('method="POST"'), "formulaire en POST");
assert(index.includes('name="_subject"') && index.includes("Plaidoo - liste d'attente"), "sujet");
assert(index.includes('name="_captcha" value="true"'), "captcha laisse actif");
assert(!/name="_captcha"\s+value="false"/i.test(index), "captcha non desactive");
assert(index.includes('name="_next" value="https://cdfttchccy-ai.github.io/plaidoo/merci.html"'), "page de remerciement");
assert(index.includes('name="_template" value="table"'), "modele de courriel");
assert(index.includes('name="_honey"'), "pot de miel");
assert(/type="email"[^>]*required|required[^>]*type="email"/i.test(index), "e-mail obligatoire");
assert(index.includes('name="message"'), "message facultatif");
assert(index.includes("suppression"), "demande de suppression");
assert(index.includes("formsubmit.co"), "mention FormSubmit");
assert(!index.includes("ouvre bientôt"), "avis d'ouverture retire");
assert(index.includes("outil.html"), "lien vers l'outil");
assert(!/Installer gratuitement sur Shopify/.test(index), "pas de faux bouton d'installation");
assert(index.includes('src="js/count.js"') && index.includes('data-counter="index"'), "compteur de la presentation");

const css = fs.readFileSync(path.join(root, "css/site.css"), "utf8");
assert(/\.honey\s*\{[^}]*display:\s*none/.test(css), "honeypot masque par CSS");

const outilHtml = fs.readFileSync(path.join(root, "outil.html"), "utf8");
assert(outilHtml.includes('src="js/count.js"') && outilHtml.includes('data-counter="outil"'), "compteur de l'outil");

const sources = fs.readFileSync(path.join(root, "sources.html"), "utf8");
assert(sources.includes("abacus.jasoncameron.dev"), "compteur cite dans les sources");
countKeys.forEach((key) => {
  assert(sources.includes(countBase + "/get/" + countNamespace + "/" + key), "lecture " + key);
});
assert(sources.includes("adresse IP"), "mention de l'adresse IP recue");

const merci = fs.readFileSync(path.join(root, "merci.html"), "utf8");
assert(merci.includes('href="outil.html"'), "merci renvoie a l'outil");

const propos = fs.readFileSync(path.join(root, "a-propos.html"), "utf8");
assert(propos.includes("accès anticipé"), "accès anticipé");
assert(propos.includes("France"), "produit en France");

const mentions = fs.readFileSync(path.join(root, "mentions-legales.html"), "utf8");
assert(mentions.includes("article 1-1, II"), "anonymat LCEN en vigueur");
assert(mentions.includes("88 Colin P. Kelly Jr. St."), "adresse GitHub");
assert(mentions.includes("GitHub, Inc."), "hébergeur");
assert(mentions.includes("index.html#liste"), "contact par le formulaire");
assert(!mentions.includes("À COMPLÉTER") && !mentions.includes("[À COMPLÉTER]"), "pas de placeholder");

const privacy = fs.readFileSync(path.join(root, "confidentialite.html"), "utf8");
assert(privacy.includes("formsubmit.co"), "FormSubmit dans la confidentialité");
assert(privacy.includes("Abacus") && privacy.includes("abacus.jasoncameron.dev"), "compteur dans la confidentialité");
assert(privacy.includes("CNIL"), "réclamation CNIL");
assert(privacy.includes("suppression"), "suppression par le formulaire");
assert(/ne dépose pas de cookie|aucun cookie|sans cookie/i.test(privacy), "absence de cookie");
assert(privacy.includes("Fly.io") && privacy.includes("iad"), "région Fly observée pour Abacus");
assert(privacy.includes("États-Unis"), "Abacus ou GitHub hors UE");
assert(privacy.includes("GitHub Pages") && privacy.includes("GitHub, Inc."), "hébergement GitHub Pages");
assert(privacy.includes("Data Privacy Framework"), "garantie GitHub citée");
assert(privacy.includes("ne publie pas de pays"), "pays FormSubmit non publié");
assert(privacy.includes("journaux de serveur"), "journaux GitHub");

const falsePrivacy = /ne contacte aucun serveur|n'envoie aucune donnée|rien n'est envoyé|aucune donnée ne quitte|n'envoie rien/i;
function walkTexts(dir, acc) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".git") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkTexts(full, acc);
    else if (/\.(html|js|md)$/.test(entry.name) && entry.name !== "check_logic.mjs") acc.push(full);
  }
  return acc;
}
for (const full of walkTexts(root, [])) {
  const rel = path.relative(root, full);
  const source = fs.readFileSync(full, "utf8");
  assert(!falsePrivacy.test(source), rel + " sans affirmation fausse sur l'absence d'envoi");
}

for (const file of pages) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  assert(!html.includes("À COMPLÉTER"), file + " sans placeholder");
  assert(!/note de positionnement|démonstration|maquette/i.test(html), file + " sans wording interne");
  assert(html.includes('rel="canonical" href="https://cdfttchccy-ai.github.io/plaidoo/'), file + " canonical absolue");
  assert((html.match(/rel="canonical"/g) || []).length === 1, file + " une seule canonical");
  assert(!/noindex/i.test(html), file + " sans noindex");
  assert(html.includes('href="guides/index.html"'), file + " lien guides");
}
const siteVerification = '<meta name="google-site-verification" content="98Vk93TaFL3eHMyYadHBB7qfbmCop3VCib1PfrkewMw" />';
assert(index.includes(siteVerification), "jeton Search Console");
assert(!index.includes("<!-- google-site-verification -->"), "marqueur remplace");
for (const file of pages) {
  assert(fs.readFileSync(path.join(root, file), "utf8").includes(siteVerification), file + " jeton Search Console");
}
for (const file of fs.readdirSync(path.join(root, "guides")).filter((name) => name.endsWith(".html"))) {
  assert(fs.readFileSync(path.join(root, "guides", file), "utf8").includes(siteVerification), "guides/" + file + " jeton Search Console");
}

const guideFiles = fs.readdirSync(path.join(root, "guides")).filter((name) => name.endsWith(".html")).sort();
const sourceSlugs = fs.readdirSync(path.join(root, "guides", "src"))
  .filter((name) => name.endsWith(".md"))
  .map((name) => {
    const raw = fs.readFileSync(path.join(root, "guides", "src", name), "utf8");
    const slug = raw.match(/^slug:\s*(\S+)/m);
    return (slug ? slug[1] : name.replace(/\.md$/, "")) + ".html";
  });
const expectedGuides = ["index.html", ...sourceSlugs].sort();
const requiredGuides = [
  "colis-point-relais-non-retire-litige.html",
  "droit-retractation-litige-bancaire.html",
  "frais-litige-shopify-payments.html",
  "litige-abonnement-shopify-subscriptions.html",
  "litige-colis-non-recu-shopify.html",
  "litige-vetement-taille-retour.html",
  "litige-mastercard-4841-abonnement.html",
  "litige-mastercard-4853.html",
  "litige-mastercard-4855.html",
  "litige-mastercard-4860.html",
  "litige-visa-13-1.html",
  "litige-visa-13-2-abonnement-annule.html",
  "litige-visa-13-6-credit-non-traite.html",
  "litige-visa-13-7-commande-annulee.html",
  "modele-reponse-litige-chargeback.html",
  "preuve-livraison-colissimo-litige.html",
  "produit-non-conforme-chargeback.html",
  "stripe-litige-frais-20-euros.html",
  "enquete-ou-retrofacturation-shopify.html",
  "libelle-releve-bancaire-shopify-payments.html",
  "litige-paypal-shopify-payments-france.html",
  "programme-ndrp-shopify-payments.html",
  "protection-marchands-paypal-article-non-recu.html",
  "repondre-litige-stripe-dashboard.html",
];
const noToolCta = [
  "libelle-releve-bancaire-shopify-payments.html",
  "litige-paypal-shopify-payments-france.html",
  "programme-ndrp-shopify-payments.html",
  "protection-marchands-paypal-article-non-recu.html",
];
assert(guideFiles.length === expectedGuides.length && expectedGuides.every((name) => guideFiles.includes(name)), "guides generes et index");
requiredGuides.forEach((name) => assert(guideFiles.includes(name), "guide present " + name));
for (const file of guideFiles) {
  const html = fs.readFileSync(path.join(root, "guides", file), "utf8");
  assert(!/<script[^>]+src="https?:/i.test(html), "guides/" + file + " sans script externe");
  assert(!/<script\b/i.test(html), "guides/" + file + " sans script");
  assert(!/<form\b/i.test(html), "guides/" + file + " sans formulaire");
  assert(!emailLike.test(html), "guides/" + file + " sans adresse e-mail");
  assert(externalSrcs(html).length === 0, "guides/" + file + " sans ressource externe");
  assert(html.includes("Information générale, pas un conseil juridique"), "guides/" + file + " notice");
  assert(html.includes("Ceci n'est pas un conseil juridique"), "guides/" + file + " disclaimer");
  assert(/Mis à jour le \d{1,2} [a-zéû]+ \d{4}/.test(html), "guides/" + file + " date");
  assert(html.includes('rel="canonical" href="https://cdfttchccy-ai.github.io/plaidoo/guides/' + file + '"'), "guides/" + file + " canonical");
  assert(html.includes('property="og:title"'), "guides/" + file + " og");
  assert(html.includes('name="description"'), "guides/" + file + " description");
  assert(html.includes('href="../outil.html"'), "guides/" + file + " lien outil");
  if (file !== "index.html" && noToolCta.includes(file)) {
    assert(!html.includes("Ouvrir l'outil gratuit"), "guides/" + file + " sans bouton outil");
    assert(!html.includes("https://cdfttchccy-ai.github.io/plaidoo/outil.html"), "guides/" + file + " sans encart outil");
    const raw = fs.readFileSync(path.join(root, "guides", "src", file.replace(/\.html$/, ".md")), "utf8");
    assert(/^priority:\s*P3\s*$/m.test(raw), "guides/" + file + " priority P3");
  } else if (file !== "index.html") {
    assert(html.includes("Ouvrir l'outil gratuit"), "guides/" + file + " bouton outil");
  }
  assert(!/prévoit de retirer|retirer à terme|susceptible d'être basculé|codes seront retirés/i.test(html), "guides/" + file + " sans retrait des codes");
  assert(html.includes('href="../sitemap.xml"') && html.includes(">Plan du site</a>"), "guides/" + file + " plan du site");
  assert(!html.includes("À COMPLÉTER"), "guides/" + file + " sans placeholder");
  assert(!/Payer maintenant|Ajouter au panier|checkout/i.test(html.replace(/Shopify Checkout/g, "")), "guides/" + file + " sans paiement");
  assert(!/noindex/i.test(html), "guides/" + file + " sans noindex");
  banned.forEach((pattern) => {
    assert(!pattern.test(html), "guides/" + file + " sans " + pattern);
  });
}
assert(!index.includes("prix indicatifs"), "tarifs plus indicatifs");
assert(index.includes("Tarifs prévisionnels à l'ouverture"), "tarifs prévisionnels");
assert(!/checkout|Ajouter au panier|Payer maintenant/i.test(index), "pas de paiement");

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const robots = fs.readFileSync(path.join(root, "robots.txt"), "utf8");
assert(sitemap.charCodeAt(0) !== 0xFEFF, "sitemap sans BOM");
assert(sitemap.endsWith("</urlset>\n"), "sitemap termine par un saut de ligne");
assert(!sitemap.endsWith("</urlset>\n\n"), "sitemap sans ligne vide finale");
const sitemapUrls = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => match[1]);
assert(sitemapUrls.length === 8 + expectedGuides.length, "sitemap compte les pages et le plan");
sitemapUrls.forEach((block) => {
  const loc = block.match(/<loc>([^<]+)<\/loc>/);
  const lastmod = block.match(/<lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod>/);
  assert(loc && loc[1].startsWith("https://cdfttchccy-ai.github.io/plaidoo/"), "sitemap url absolue");
  assert(lastmod, "sitemap lastmod " + (loc ? loc[1] : ""));
});
for (const page of ["outil.html", "a-propos.html", "sources.html", "mentions-legales.html", "confidentialite.html", "merci.html", "plan-du-site.html"]) {
  assert(sitemap.includes(page), "sitemap " + page);
}
const plan = fs.readFileSync(path.join(root, "plan-du-site.html"), "utf8");
for (const file of expectedGuides) {
  assert(sitemap.includes("https://cdfttchccy-ai.github.io/plaidoo/guides/" + file), "sitemap guides/" + file);
  if (file !== "index.html") {
    assert(plan.includes("guides/" + file), "plan du site " + file);
  }
  if (file !== "index.html") {
    const raw = fs.readFileSync(path.join(root, "guides", "src", file.replace(/\.html$/, ".md")), "utf8");
    const date = raw.match(/^date:\s*(\d{4}-\d{2}-\d{2})/m);
    assert(date && sitemap.includes(`<loc>https://cdfttchccy-ai.github.io/plaidoo/guides/${file}</loc>\n    <lastmod>${date[1]}</lastmod>`), "lastmod frontmatter " + file);
  }
}
assert(robots.includes("Sitemap: https://cdfttchccy-ai.github.io/plaidoo/sitemap.xml"), "robots pointe le sitemap absolu");

function channel(hex, index) {
  const value = parseInt(hex.slice(1 + index * 2, 3 + index * 2), 16) / 255;
  return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}
function luminance(hex) {
  return 0.2126 * channel(hex, 0) + 0.7152 * channel(hex, 1) + 0.0722 * channel(hex, 2);
}
function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}
[
  ["#1B2A4A", "#f3efe4"],
  ["#3E4C66", "#f3efe4"],
  ["#047857", "#f3efe4"],
  ["#F7F4EE", "#1B2A4A"],
  ["#10B981", "#121C33"],
  ["#f6f1e7", "#121C33"],
].forEach(([fg, bg]) => {
  const ratio = contrast(fg, bg);
  assert(ratio >= 4.5, "contraste " + fg + " sur " + bg + " = " + ratio.toFixed(2));
});

for (const file of ["logo.svg", "logo-icon.svg", "favicon.svg"]) {
  const svg = fs.readFileSync(path.join(root, file), "utf8");
  assert(!/<image\b|base64/i.test(svg), file + " sans image embarquee");
  assert(svg.includes("#1B2A4A"), file + " navy");
  assert(svg.includes("#10B981"), file + " vert");
}
assert(fs.readFileSync(path.join(root, "logo.svg"), "utf8").includes('aria-label="Plaidoo"'), "wordmark du logo");
const pngSizes = {
  "favicon-32.png": [32, 32],
  "favicon-192.png": [192, 192],
  "favicon-512.png": [512, 512],
  "apple-touch-icon.png": [180, 180],
  "og.png": [1200, 630],
};
for (const [file, [width, height]] of Object.entries(pngSizes)) {
  const bytes = fs.readFileSync(path.join(root, file));
  assert(bytes[0] === 0x89 && bytes[1] === 0x50, file + " png");
  assert(bytes.readUInt32BE(16) === width && bytes.readUInt32BE(20) === height, file + " " + width + "x" + height);
}
assert(index.includes('alt="Plaidoo"'), "logo avec alternative");
assert(index.includes("favicon-192.png") && index.includes("favicon-512.png"), "favicon 192 et 512");
assert(!/#1b4332/i.test(css), "ancienne couleur retiree");

const outilJs = fs.readFileSync(path.join(root, "js/outil.js"), "utf8");
assert(outilJs.includes("Ceci n'est pas un conseil juridique"), "disclaimer a cote du dossier");
assert(outilJs.includes('PlaidooCount.hit("lettre-generee")'), "compteur lettre-generee");
assert(outilJs.includes("countGeneratedLetter"), "evenement au clic");
assert(!/localStorage|sessionStorage/.test(outilJs), "lettre sans identifiant stocke");

if (failed) {
  console.error(failed + " échec(s)");
  process.exit(1);
}
console.log(passed + " contrôles passés.");
