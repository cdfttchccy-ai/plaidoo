# Plaidoo

Site statique en français pour préparer un dossier de litige commercial (Shopify Payments ou Stripe). Aucun domaine personnalisé. L'accès anticipé et l'outil sont gratuits. Les tarifs payants sont prévisionnels.

Ce n'est pas un conseil juridique. Les codes de réseau et les articles du code de la consommation sont ceux cités dans `js/catalog.js`, avec le degré de confiance indiqué sur chaque fiche.

## Pages

Depuis ce dossier :

```bash
python3 -m http.server 8765
```

Puis ouvrir [http://127.0.0.1:8765/](http://127.0.0.1:8765/).

- `index.html` — présentation, comparatif, tarifs prévisionnels, liste d'attente
- `outil.html` — motif, transporteur, abonnement, checklist, articles, modèle
- `a-propos.html` — produit fait en France, en accès anticipé
- `sources.html` — sources juridiques et compteur anonyme
- `mentions-legales.html` — éditeur et hébergeur
- `confidentialite.html` — formulaire, compteur, droits
- `merci.html` — accusé de la liste d'attente
- `plan-du-site.html` — liste des pages
- `guides/index.html` — liste des notes
- `guides/*.html` — une page par article

Les polices sont celles du système. Aucun service de polices tiers n'est appelé.

## Guides

Les sources sont des fichiers Markdown dans `guides/src/`. Chaque fichier commence par un frontmatter (`title`, `meta_description`, `slug`, `date`). Le HTML est généré puis commité : GitHub Pages sert ces fichiers tels quels, sans étape de build.

```bash
node scripts/build-guides.mjs
```

Le script écrit `guides/index.html`, `guides/<slug>.html`, et ajoute ces adresses à `sitemap.xml`. Chaque page affiche la mention « Information générale, pas un conseil juridique » et la date « Mis à jour le », prise du frontmatter (sinon le 9 octobre 2026).

Pour ajouter un guide :

1. Créer `guides/src/<slug>.md` avec le frontmatter, puis le texte. Garder les liens vers les sources. Ne pas inventer de chiffre, d'avis ou de client.
2. Lancer `node scripts/build-guides.mjs`.
3. Committer le Markdown, le HTML généré et `sitemap.xml`.

## Search Console

Chaque page a une canonical absolue vers `https://cdfttchccy-ai.github.io/plaidoo/…`. Le fichier `sitemap.xml` est à la racine du site de projet et ne contient que des URL absolues. `robots.txt` y pointe.

Google ne lit un robots.txt qu'à la racine de l'hôte, `https://cdfttchccy-ai.github.io/robots.txt`. Ce dépôt ne publie pas cette adresse. Le sitemap se déclare donc dans la Search Console, sur une propriété de type préfixe d'URL `https://cdfttchccy-ai.github.io/plaidoo/`.

Chaque page HTML porte dans le `<head>` la balise `google-site-verification` fournie par la Search Console. La laisser en place après la validation.

## Liste d'attente

Le formulaire poste vers l'alias FormSubmit, avec un pot de miel, le captcha laissé actif, et une redirection vers `merci.html`. Aucune adresse n'est écrite dans le dépôt. Les scripts ne stockent rien dans le navigateur.

## Compteurs

hits.sh ne répondait plus le 10 octobre 2026 (aucun octet après plus de 10 secondes). Derniers totaux connus le 9 octobre 2026 vers 16:05, heure de Paris : présentation 10, outil 7, lettres générées 2.

Les compteurs sont maintenant ceux d'Abacus, sans compte. L'incrément est une requête GET vers `/hit`, avec un délai court. La lecture publique n'incrémente pas :

- présentation : https://abacus.jasoncameron.dev/get/plaidoo-cdfttchccy/index
- outil : https://abacus.jasoncameron.dev/get/plaidoo-cdfttchccy/outil
- lettres générées : https://abacus.jasoncameron.dev/get/plaidoo-cdfttchccy/lettre-generee

Les nouveaux compteurs partent de 0. Abacus a été retenu parce qu'il ne demande pas de compte, ne dépose pas de cookie, autorise la lecture depuis le navigateur, et sépare la lecture de l'incrément. counterapi.dev exige un compte depuis la version 2, et sa version 1 est fermée.

## Contrôle

Node.js 18 ou plus récent :

```bash
node check_logic.mjs
```

Le script charge `js/catalog.js` et `js/logic.js`, puis vérifie les 9 motifs × 4 transporteurs × 2 positions d'abonnement. Il refuse un article hors liste, un traceur, un script externe, et une adresse e-mail dans les fichiers du site. Il vérifie aussi la notice, la date et le lien vers l'outil sur chaque page de `guides/`.
