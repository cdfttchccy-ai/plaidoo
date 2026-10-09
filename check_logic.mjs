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

const hitIndex = "https://hits.sh/cdfttchccy-ai.github.io/plaidoo/index.svg";
const hitOutil = "https://hits.sh/cdfttchccy-ai.github.io/plaidoo/outil.svg";
const hitLetter = "https://hits.sh/cdfttchccy-ai.github.io/plaidoo/lettre-generee.svg";
const formAction = "https://formsubmit.co/c0b7e8091d90e4e34fab6ebe7dbb1ce9";
const banned = [/fetch\s*\(/, /XMLHttpRequest/, /sendBeacon/, /localStorage/, /sessionStorage/, /gtag\s*\(/, /google-analytics/, /googletagmanager/, /doubleclick/, /facebook\.net/, /hotjar/, /segment\.com/, /mixpanel/];
const emailLike = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i;

for (const file of fs.readdirSync(path.join(root, "js"))) {
  const source = fs.readFileSync(path.join(root, "js", file), "utf8");
  banned.forEach((pattern) => {
    assert(!pattern.test(source), file + " sans " + pattern);
  });
  assert(!emailLike.test(source), file + " sans adresse e-mail");
  if (file !== "outil.js") {
    assert(!source.includes("hits.sh"), file + " sans compteur");
  }
}

function externalSrcs(html) {
  return [...html.matchAll(/\bsrc="(https?:\/\/[^"]+)"/g)].map((match) => match[1]);
}

const pages = ["index.html", "outil.html", "sources.html", "merci.html", "a-propos.html", "mentions-legales.html", "confidentialite.html"];
for (const file of pages) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  assert(!/<script[^>]+src="https?:/i.test(html), file + " sans script externe");
  assert(html.includes("Ceci n'est pas un conseil juridique"), file + " disclaimer visible");
  assert(!emailLike.test(html), file + " sans adresse e-mail");
  const srcs = externalSrcs(html);
  const allowed = file === "index.html" ? [hitIndex] : file === "outil.html" ? [hitOutil] : [];
  assert(srcs.length === allowed.length && srcs.every((src, i) => src === allowed[i]), file + " compteur exact");
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
assert(index.includes(hitIndex), "compteur de la presentation");

const css = fs.readFileSync(path.join(root, "css/site.css"), "utf8");
assert(/\.honey\s*\{[^}]*display:\s*none/.test(css), "honeypot masque par CSS");

const outilHtml = fs.readFileSync(path.join(root, "outil.html"), "utf8");
assert(outilHtml.includes(hitOutil), "compteur de l'outil");

const sources = fs.readFileSync(path.join(root, "sources.html"), "utf8");
assert(sources.includes("hits.sh"), "compteur cite dans les sources");
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
assert(privacy.includes("hits.sh"), "compteur dans la confidentialité");
assert(privacy.includes("CNIL"), "réclamation CNIL");
assert(privacy.includes("suppression"), "suppression par le formulaire");
assert(/ne dépose pas de cookie|aucun cookie|sans cookie/i.test(privacy), "absence de cookie");

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
  "frais-litige-shopify-payments.html",
  "litige-colis-non-recu-shopify.html",
  "litige-visa-13-1.html",
  "litige-visa-13-2-abonnement-annule.html",
  "litige-visa-13-6-credit-non-traite.html",
  "litige-visa-13-7-commande-annulee.html",
  "modele-reponse-litige-chargeback.html",
  "preuve-livraison-colissimo-litige.html",
  "produit-non-conforme-chargeback.html",
  "stripe-litige-frais-20-euros.html",
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
  assert(!html.includes("À COMPLÉTER"), "guides/" + file + " sans placeholder");
  assert(!/Payer maintenant|Ajouter au panier|checkout/i.test(html), "guides/" + file + " sans paiement");
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
for (const page of ["outil.html", "a-propos.html", "sources.html", "mentions-legales.html", "confidentialite.html", "merci.html"]) {
  assert(sitemap.includes(page), "sitemap " + page);
}
for (const file of expectedGuides) {
  assert(sitemap.includes("https://cdfttchccy-ai.github.io/plaidoo/guides/" + file), "sitemap guides/" + file);
}
assert(robots.includes("Sitemap: https://cdfttchccy-ai.github.io/plaidoo/sitemap.xml"), "robots pointe le sitemap absolu");

const outilJs = fs.readFileSync(path.join(root, "js/outil.js"), "utf8");
assert(outilJs.includes("Ceci n'est pas un conseil juridique"), "disclaimer a cote du dossier");
assert(outilJs.includes(hitLetter), "compteur lettre-generee");
assert(outilJs.includes("countGeneratedLetter"), "evenement au clic");
assert(!/localStorage|sessionStorage/.test(outilJs), "lettre sans identifiant stocke");

if (failed) {
  console.error(failed + " échec(s)");
  process.exit(1);
}
console.log(passed + " contrôles passés.");
