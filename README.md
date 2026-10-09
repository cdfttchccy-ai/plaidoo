# Plaidoo — maquette statique

Page de présentation et outil gratuit, en français, pour préparer un dossier de litige commercial (Shopify Payments ou Stripe). Aucun domaine personnalisé. Aucun traceur. La liste d'attente n'est pas ouverte : aucune donnée n'est enregistrée.

Le nom, le ton et les phrases de la page viennent de la note de positionnement du 9 octobre 2026. Les codes de réseau et les articles du code de la consommation sont ceux vérifiés dans `js/catalog.js`, avec le degré de confiance indiqué sur chaque fiche. Ce n'est pas un conseil juridique.

## Voir la maquette

Depuis ce dossier :

```bash
python3 -m http.server 8765
```

Puis ouvrir [http://127.0.0.1:8765/](http://127.0.0.1:8765/).

- `index.html` — présentation, comparatif, tarifs indicatifs, foire aux questions, liste d'attente non ouverte
- `outil.html` — motif, transporteur, abonnement, checklist, articles, modèle à copier ou à imprimer
- `sources.html` — pages consultées

Aucun outil de construction n'est nécessaire. Les fichiers HTML, CSS et JavaScript sont servis tels quels. Les polices sont celles du système, pour que la page reste lisible hors ligne.

Les scripts sont classiques, pas des modules. Ouvrir `index.html` directement dans le navigateur fonctionne aussi. Préférer le serveur local ci-dessus pour coller au mode d'aperçu testé.

## Liste d'attente

La liste n'est pas ouverte. La page affiche « La liste d'attente ouvre bientôt, aucune donnée n'est enregistrée » et ne propose pas de formulaire. Aucune adresse n'est demandée. Le script ne contient ni `fetch`, ni stockage local.

## Contrôle de la logique

Node.js 18 ou plus récent :

```bash
node check_logic.mjs
```

Le script charge `js/catalog.js` et `js/logic.js`, puis vérifie les 9 motifs × 4 transporteurs × 2 positions d'abonnement. Il refuse un article hors liste, une requête réseau dans les scripts, et un script externe dans les pages.

## Périmètre

L'outil couvre Visa 13.1, 13.2, 13.3, 13.6, 13.7 et Mastercard 4855, 4853, 4841, 4860. Le 4853 est traité comme « non conforme » au sens de la page Stripe des preuves, avec un avertissement : Mastercard et la page des catégories Stripe en font aussi un motif plus large.
