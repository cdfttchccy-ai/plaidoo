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

const banned = [/fetch\s*\(/, /XMLHttpRequest/, /sendBeacon/, /localStorage/, /sessionStorage/, /gtag\s*\(/, /google-analytics/, /googletagmanager/];
for (const file of fs.readdirSync(path.join(root, "js"))) {
  const source = fs.readFileSync(path.join(root, "js", file), "utf8");
  banned.forEach((pattern) => {
    assert(!pattern.test(source), file + " sans " + pattern);
  });
}

for (const file of ["index.html", "outil.html", "sources.html"]) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  assert(!/src="https?:/.test(html), file + " sans script externe");
  assert(!/<form\b/i.test(html), file + " sans formulaire");
  assert(html.includes("Ceci n'est pas un conseil juridique"), file + " disclaimer visible");
}

const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
assert(index.includes("aucune donnée n'est enregistrée"), "liste d'attente non ouverte");
assert(!/type="email"/i.test(index), "pas de champ e-mail");
assert(!/Me prévenir/.test(index), "pas de bouton d'inscription");
assert(index.includes("outil.html"), "lien vers l'outil");
assert(!/Installer gratuitement sur Shopify/.test(index), "pas de faux bouton d'installation");

const outilJs = fs.readFileSync(path.join(root, "js/outil.js"), "utf8");
assert(outilJs.includes("Ceci n'est pas un conseil juridique"), "disclaimer à côté du dossier");

if (failed) {
  console.error(failed + " échec(s)");
  process.exit(1);
}
console.log(passed + " contrôles passés.");
