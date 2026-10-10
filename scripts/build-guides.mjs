import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "guides", "src");
const outDir = path.join(root, "guides");
const site = "https://cdfttchccy-ai.github.io/plaidoo";
const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

function escapeText(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(value) {
  return escapeText(value).replace(/"/g, "&quot;");
}

function inline(src) {
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|`([^`]+)`|\*\*([^*]+)\*\*|\*([^*]+)\*|((?:https?:\/\/)[^\s)<]+)/g;
  let last = 0;
  let match;
  const parts = [];
  while ((match = re.exec(src))) {
    parts.push(escapeText(src.slice(last, match.index)));
    if (match[1] !== undefined) {
      parts.push(`<a href="${escapeAttr(match[2])}">${inline(match[1])}</a>`);
    } else if (match[3] !== undefined) {
      parts.push(`<code>${escapeText(match[3])}</code>`);
    } else if (match[4] !== undefined) {
      parts.push(`<strong>${inline(match[4])}</strong>`);
    } else if (match[5] !== undefined) {
      parts.push(`<em>${inline(match[5])}</em>`);
    } else {
      const raw = match[6];
      const url = raw.replace(/[.,;:]+$/, "");
      parts.push(`<a href="${escapeAttr(url)}">${escapeText(url)}</a>${escapeText(raw.slice(url.length))}`);
    }
    last = match.index + match[0].length;
  }
  parts.push(escapeText(src.slice(last)));
  return parts.join("");
}

function isBlockStart(line) {
  return /^(#{1,3} |> |- |\d+\. |\|)/.test(line);
}

function table(rows) {
  const cells = rows.map((row) => row.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim()));
  const head = cells[0];
  const body = cells.slice(2);
  const thead = `<tr>${head.map((cell) => `<th scope="col">${inline(cell)}</th>`).join("")}</tr>`;
  const tbody = body.map((row) => `<tr>${row.map((cell) => `<td>${inline(cell)}</td>`).join("")}</tr>`).join("");
  return `<div class="table-wrap"><table><thead>${thead}</thead><tbody>${tbody}</tbody></table></div>`;
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").trim().split("\n");
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }
    if (line.startsWith("|")) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        rows.push(lines[i]);
        i += 1;
      }
      out.push(table(rows));
      continue;
    }
    if (line === ">" || line.startsWith("> ")) {
      const paragraphs = [];
      let current = [];
      while (i < lines.length && (lines[i] === ">" || lines[i].startsWith("> "))) {
        const text = lines[i] === ">" ? "" : lines[i].slice(2);
        if (!text.trim()) {
          if (current.length) paragraphs.push(current.join(" "));
          current = [];
        } else {
          current.push(text.trim());
        }
        i += 1;
      }
      if (current.length) paragraphs.push(current.join(" "));
      out.push(`<blockquote>${paragraphs.map((paragraph) => `<p>${inline(paragraph)}</p>`).join("")}</blockquote>`);
      continue;
    }
    if (line.startsWith("### ")) {
      out.push(`<h3>${inline(line.slice(4))}</h3>`);
      i += 1;
      continue;
    }
    if (line.startsWith("## ")) {
      out.push(`<h2>${inline(line.slice(3))}</h2>`);
      i += 1;
      continue;
    }
    if (line.startsWith("# ")) {
      out.push(`<h1>${inline(line.slice(2))}</h1>`);
      i += 1;
      continue;
    }
    if (line.startsWith("- ")) {
      const items = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(`<li>${inline(lines[i].slice(2))}</li>`);
        i += 1;
      }
      out.push(`<ul>${items.join("")}</ul>`);
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(`<li>${inline(lines[i].replace(/^\d+\. /, ""))}</li>`);
        i += 1;
      }
      out.push(`<ol>${items.join("")}</ol>`);
      continue;
    }
    const para = [];
    while (i < lines.length && lines[i].trim() && !isBlockStart(lines[i])) {
      para.push(lines[i].trim());
      i += 1;
    }
    out.push(`<p>${inline(para.join(" "))}</p>`);
  }
  return out.join("\n");
}

function parseFile(file) {
  const raw = fs.readFileSync(file, "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error("frontmatter manquant: " + file);
  const fm = {};
  for (const line of match[1].split("\n")) {
    const cut = line.indexOf(":");
    const key = line.slice(0, cut).trim();
    let value = line.slice(cut + 1).trim();
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    fm[key] = value;
  }
  if (!fm.slug) fm.slug = path.basename(file, ".md");
  if (!fm.date) fm.date = "2026-10-09";
  if (!fm.title) throw new Error("titre manquant: " + file);
  if (!fm.meta_description) throw new Error("meta_description manquante: " + file);
  return { ...fm, html: markdownToHtml(match[2]) };
}

function frenchDate(iso) {
  const [year, month, day] = iso.split("-").map(Number);
  if (!year || !month || !day) return "9 octobre 2026";
  return `${day} ${months[month - 1]} ${year}`;
}

function chrome(title, description, canonicalPath, main) {
  const canonical = `${site}${canonicalPath}`;
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta name="google-site-verification" content="98Vk93TaFL3eHMyYadHBB7qfbmCop3VCib1PfrkewMw" />
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeText(title)}</title>
  <meta name="description" content="${escapeAttr(description)}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:title" content="${escapeAttr(title)}">
  <meta property="og:description" content="${escapeAttr(description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${site}/og.png">
  <meta property="og:locale" content="fr_FR">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeAttr(title)}">
  <meta name="twitter:description" content="${escapeAttr(description)}">
  <meta name="twitter:image" content="${site}/og.png">
  <link rel="icon" href="../favicon.svg" type="image/svg+xml">
  <link rel="icon" href="../favicon-32.png" type="image/png" sizes="32x32">
  <link rel="icon" href="../favicon-192.png" type="image/png" sizes="192x192">
  <link rel="icon" href="../favicon-512.png" type="image/png" sizes="512x512">
  <link rel="apple-touch-icon" href="../apple-touch-icon.png">
  <link rel="stylesheet" href="../css/site.css">
</head>
<body>
  <a class="skip" href="#contenu">Aller au contenu</a>
  <header class="site-header">
    <div class="wrap header-inner">
      <a class="brand" href="../index.html"><img class="logo" src="../logo.svg" alt="Plaidoo" width="156" height="53"></a>
      <nav class="nav-links" aria-label="Principal">
        <a href="../index.html">Présentation</a>
        <a href="../outil.html">Outil</a>
        <a href="../index.html#tarifs">Tarifs</a>
        <a href="index.html">Guides</a>
        <a href="../a-propos.html">À propos</a>
      </nav>
      <details class="nav-drawer">
        <summary>Menu</summary>
        <nav aria-label="Menu mobile">
          <a href="../index.html">Présentation</a>
          <a href="../outil.html">Outil</a>
          <a href="../index.html#tarifs">Tarifs</a>
          <a href="index.html">Guides</a>
          <a href="../a-propos.html">À propos</a>
          <a href="../sources.html">Sources</a>
        </nav>
      </details>
    </div>
  </header>
  <main id="contenu" class="wrap band article">
${main}
  </main>
  <footer class="site-footer">
    <div class="wrap">
      <p class="footer-logo"><a href="../index.html"><img class="logo logo-footer" src="../logo.svg" alt="Plaidoo" width="132" height="45"></a></p>
      <p>Ceci n'est pas un conseil juridique. Plaidoo ne garantit aucun résultat.</p>
      <p><a href="../index.html">Présentation</a> · <a href="../outil.html">Outil</a> · <a href="index.html">Guides</a> · <a href="../sources.html">Sources</a></p>
      <p><a href="../mentions-legales.html">Mentions légales</a> · <a href="../confidentialite.html">Confidentialité</a> · <a href="../index.html#liste">Contact</a> · <a href="../sitemap.xml">Plan du site</a></p>
    </div>
  </footer>
</body>
</html>
`;
}

const guides = fs.readdirSync(srcDir)
  .filter((name) => name.endsWith(".md"))
  .map((name) => parseFile(path.join(srcDir, name)))
  .sort((a, b) => a.slug.localeCompare(b.slug, "fr"));

const cards = guides.map((guide) => `        <article class="panel">
          <p class="eyebrow">Mis à jour le ${frenchDate(guide.date)}</p>
          <h2><a href="${guide.slug}.html">${escapeText(guide.title)}</a></h2>
          <p>${escapeText(guide.meta_description)}</p>
        </article>`).join("\n");

const latestGuideDate = guides.reduce((max, guide) => (guide.date > max ? guide.date : max), "2026-10-09");

const indexHtml = chrome(
  "Guides — Plaidoo",
  "Notes sur les litiges Shopify Payments et Stripe : frais, colis, point relais, Visa, Mastercard, rétractation, abonnements, taille et retour, Colissimo, modèle de réponse. Information générale.",
  "/guides/index.html",
  `    <p class="eyebrow">Guides</p>
    <h1>Comprendre un litige, sans promesse de gain.</h1>
    <p class="disclaimer disclaimer-banner" role="note"><strong>Information générale, pas un conseil juridique.</strong> Ceci n'est pas un conseil juridique. Les règles citées peuvent changer.</p>
    <p class="fine-print">Mis à jour le ${frenchDate(latestGuideDate)}.</p>
    <p class="lead">Dix-huit notes rédigées à partir de pages officielles consultées les 9 et 10 octobre 2026. Elles ne remplacent pas votre contrat ni une relecture juridique.</p>
    <div class="guide-list">
${cards}
    </div>
    <p><a class="button button-primary" href="../outil.html">Ouvrir l'outil gratuit</a></p>`
);
fs.writeFileSync(path.join(outDir, "index.html"), indexHtml);

for (const guide of guides) {
  const updated = frenchDate(guide.date);
  const page = chrome(
    `${guide.title} — Plaidoo`,
    guide.meta_description,
    `/guides/${guide.slug}.html`,
    `    <p class="eyebrow"><a href="index.html">Guides</a></p>
    <p class="disclaimer disclaimer-banner" role="note"><strong>Information générale, pas un conseil juridique.</strong> Ceci n'est pas un conseil juridique.</p>
    <p class="fine-print">Mis à jour le ${updated}.</p>
    <article>
${guide.html}
    </article>
    <p><a class="button button-primary" href="../outil.html">Ouvrir l'outil gratuit</a></p>
    <p><a href="index.html">Tous les guides</a></p>`
  );
  fs.writeFileSync(path.join(outDir, `${guide.slug}.html`), page);
}

const staticLastmod = [
  ["", "2026-10-10"],
  ["outil.html", "2026-10-10"],
  ["a-propos.html", "2026-10-10"],
  ["sources.html", "2026-10-10"],
  ["mentions-legales.html", "2026-10-10"],
  ["confidentialite.html", "2026-10-10"],
  ["merci.html", "2026-10-10"],
  ["plan-du-site.html", "2026-10-10"],
  ["guides/index.html", "2026-10-10"],
];

function urlEntry(locPath, lastmod) {
  const loc = locPath ? `${site}/${locPath}` : `${site}/`;
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
}

const entries = [
  ...staticLastmod.map(([locPath, lastmod]) => urlEntry(locPath, lastmod)),
  ...guides.map((guide) => urlEntry(`guides/${guide.slug}.html`, guide.date)),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);
console.log(guides.length + " guides écrits.");
