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

Les polices sont celles du système. Aucun service de polices tiers n'est appelé.

## Liste d'attente

Le formulaire poste vers l'alias FormSubmit, avec un pot de miel, le captcha laissé actif, et une redirection vers `merci.html`. Aucune adresse n'est écrite dans le dépôt. Les scripts ne contiennent ni `fetch`, ni stockage local. Le compteur est une image vers hits.sh.

## Contrôle

Node.js 18 ou plus récent :

```bash
node check_logic.mjs
```

Le script charge `js/catalog.js` et `js/logic.js`, puis vérifie les 9 motifs × 4 transporteurs × 2 positions d'abonnement. Il refuse un article hors liste, un traceur, un script externe, et une adresse e-mail dans les fichiers du site.
