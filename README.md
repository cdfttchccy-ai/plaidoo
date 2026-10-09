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

`index.html` contient le commentaire `<!-- google-site-verification -->` dans le `<head>`. Le remplacer par la balise `<meta name="google-site-verification" content="…">` fournie par la Search Console. Ne pas inventer de jeton. Laisser la balise en place après la validation.

## Liste d'attente

Le formulaire poste vers l'alias FormSubmit, avec un pot de miel, le captcha laissé actif, et une redirection vers `merci.html`. Aucune adresse n'est écrite dans le dépôt. Les scripts ne contiennent ni `fetch`, ni stockage local. Le compteur est une image vers hits.sh.

## Contrôle

Node.js 18 ou plus récent :

```bash
node check_logic.mjs
```

Le script charge `js/catalog.js` et `js/logic.js`, puis vérifie les 9 motifs × 4 transporteurs × 2 positions d'abonnement. Il refuse un article hors liste, un traceur, un script externe, et une adresse e-mail dans les fichiers du site. Il vérifie aussi la notice, la date et le lien vers l'outil sur chaque page de `guides/`.
