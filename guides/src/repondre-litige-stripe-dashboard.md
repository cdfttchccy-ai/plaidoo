---
title: "Répondre à un litige Stripe depuis le Dashboard"
meta_description: "Litige Stripe : lire la réclamation, accepter ou contester, remplir le formulaire de réponse et joindre les bonnes pièces depuis le Dashboard, étape par étape."
slug: repondre-litige-stripe-dashboard
date: 2026-10-10
---

Information générale, pas un conseil juridique.

# Répondre à un litige Stripe depuis le Dashboard

> Sources officielles consultées les 9 et 10 octobre 2026, listées en fin d'article. Les règles peuvent changer et varier selon votre région ou votre prestataire de paiement : vérifiez-les avant d'agir. Les citations en anglais sont traduites par nos soins.

Un paiement Stripe est contesté. Vous recevez un e-mail, le litige apparaît dans le Dashboard, et un compte à rebours démarre. Ce guide suit la page officielle de Stripe « Respond to disputes » : où lire la réclamation, comment choisir entre accepter et contester, et comment remplir le formulaire sans gâcher votre unique envoi.

## 1. Repérer le litige et la date limite

Selon Stripe, vous êtes prévenu par e-mail, dans le Dashboard, par l'événement `charge.dispute.created` si votre intégration écoute les événements, et par notification push si vous y êtes abonné. La liste complète se trouve dans l'onglet **Disputes** (Litiges) du Dashboard.

Le délai de réponse est **limité, en général de 7 à 21 jours selon le réseau de cartes**. Sans réponse avant l'échéance, Stripe indique que vous **perdez automatiquement** le litige et ne pouvez pas récupérer les fonds.

## 2. Lire la catégorie et la réclamation

Chaque litige porte une **catégorie** (le champ `reason` de l'objet Dispute). Stripe recommande de commencer par ses consignes de réponse pour cette catégorie : elles indiquent quelles preuves rassembler.

Quand c'est possible, la page de détail du litige fournit **une copie de la soumission de la banque**, avec parfois la description du client. Stripe conseille d'y répondre point par point. Si ces fichiers sont disponibles, ils s'ouvrent via **Review the claim details** à l'étape 1 de la checklist.

Attention au numéro de motif : pour Mastercard, le guide officiel pour les marchands (édition du 13 mai 2025) regroupe les litiges clients sous le motif **4853 « Cardholder Dispute »**, alors que Stripe peut encore afficher 4855, 4841 ou 4860. Lisez le récit plutôt que le seul code.

## 3. Cas particuliers à repérer

- **Inquiry (demande d'information)** : elle apparaît comme un paiement contesté, mais Stripe la décrit comme une étape **avant** le litige formel. Y répondre peut éviter l'escalade. Si elle devient un litige, il faut **répondre à nouveau**. Stripe précise qu'**accepter** une inquiry ne la résout pas : il faut soumettre des preuves.
- **Litige de conformité Visa ou Mastercard** : si vous le contestez, Stripe prélève **500 USD** (ou l'équivalent local) en plus des frais de litige, remboursés si vous gagnez.
- **Fraude** : pour Visa 10.4, Stripe évalue automatiquement l'éligibilité à **Compelling Evidence 3.0** ; en cas de **transfert de responsabilité** lié à 3D Secure, Stripe fournit automatiquement une partie des preuves.

## 4. Contacter le client

La page de détail peut proposer d'**envoyer un e-mail au client**. Stripe le recommande : cela aide à comprendre la plainte, et parfois à obtenir le **retrait** du litige après une solution amiable (avoir, remplacement). Gardez une trace de tous les échanges : ils serviront de preuves.

## 5. Accepter ou contester

Stripe rappelle que la banque a **déjà remboursé** le client : répondre au litige est le seul moyen de tenter de récupérer les fonds. Avant de choisir, vérifiez si la réclamation est fondée.

- **Accept dispute** : vous indiquez à la banque que vous ne contestez pas.
- **Counter dispute** : un formulaire vous guide.

**Frais en France** (voir notre guide sur les frais Stripe) : 20 € par litige reçu, plus 20 € si vous contestez ; Stripe rembourse les frais de contestation si vous gagnez, mais pas, sauf contrat contraire, les frais de litige reçu. La banque peut mettre **jusqu'à 3 mois** à décider.

## 6. Remplir le formulaire de contestation

Stripe insiste : **vous n'avez qu'une seule soumission**. Après l'envoi, impossible de modifier ou d'ajouter un fichier.

1. **Page 1 — le contexte** : pourquoi le litige vous semble infondé, et le **type de produit** (physique, numérique, service). Stripe s'en sert pour proposer les preuves pertinentes.
2. **Page 2 — les preuves** : dans **Supporting Files**, téléversez les pièces et indiquez pour chacune le **type de preuve** qu'elle couvre. **Un seul fichier par type** : regroupez plusieurs documents en un PDF multipage.
3. **Les sections de contexte** (livraison, politique de remboursement, client, produit) : Stripe les préremplit quand l'intégration le permet ; complétez les champs vides.
4. **Envoi** : cochez la case reconnaissant que la réponse est définitive, puis soumettez. Stripe met les preuves au format attendu par la banque.

## Les limites techniques à respecter

Selon Stripe :

- **4,5 Mo** au total pour les fichiers ;
- **19 pages** au total pour les preuves d'un litige **Mastercard** ;
- pas de **fichiers audio ou vidéo**, pas de demande de **rappel**, pas de **liens** à cliquer (téléchargements, suivi de colis) : la banque ne consulte pas de contenu externe.

Conséquence pratique : faites des **captures d'écran** du suivi plutôt que de coller un lien, et mettez les pièces les plus fortes en premier.

## 7. Suivre la décision

Après l'envoi, le statut passe à **under review**. Stripe vous informe ensuite par e-mail, par l'événement `charge.dispute.closed` et dans le Dashboard :

- **won** : la banque vous donne raison et le montant vous revient ;
- **lost** : le remboursement au client est définitif.

La banque fournit parfois des explications, visibles via **View issuing bank response** dans les documents du litige.

Un même paiement peut avoir **plusieurs litiges** : Stripe conseille de répondre à chacun séparément.

## Check-list avant d'envoyer

- [ ] J'ai lu la réclamation de la banque et la catégorie.
- [ ] J'ai contacté le client et gardé les échanges.
- [ ] Chaque fichier correspond à un type de preuve, un seul fichier par type.
- [ ] Total sous 4,5 Mo (et 19 pages pour Mastercard).
- [ ] Aucun lien, aucun audio ni vidéo.
- [ ] Les pièces les plus fortes sont en tête.
- [ ] J'ai relu : l'envoi est définitif.

## FAQ

**Puis-je compléter ma réponse après l'envoi ?**
Non. Stripe transmet immédiatement la réponse et les fichiers, sans modification possible.

**Accepter une inquiry la clôt-elle ?**
Non, selon Stripe : il faut soumettre des preuves pour y répondre.

**Combien de temps pour la décision ?**
Jusqu'à 3 mois après la contestation, selon Stripe.

## Préparer votre dossier avec l'outil gratuit

Nous avons fait un **petit outil gratuit**, sans compte : [Plaidoo, quelles preuves pour ce motif ?](https://cdfttchccy-ai.github.io/plaidoo/outil.html). Il est pensé pour un e-commerçant en France qui répond à un litige Shopify Payments ou Stripe. Vous indiquez trois choses :

- le code de motif tel qu'il apparaît dans votre interface (Visa 13.1, 13.2, 13.3, 13.6, 13.7 ; Mastercard 4855, 4853, 4841, 4860) ;
- le transporteur (Colissimo, Mondial Relay, Chronopost ou autre) ;
- si la commande est un abonnement.

L'outil vous donne alors :

- une liste des preuves à rassembler ;
- des références du Code de la consommation, avec leur niveau de vérification ;
- un modèle de réponse à trous, à relire, puis à copier ou imprimer.

Le dossier est assemblé dans votre navigateur : son contenu n'est envoyé nulle part. Le site signale un compteur anonyme de visites et de lettres générées (service Abacus), décrit sur sa page Sources. L'outil ne soumet rien à votre place et ne couvre pas les litiges pour fraude, American Express ni PayPal. Il ne garantit aucun résultat : c'est la banque du client qui décide.

## Sources (consultées les 9 et 10 octobre 2026)

- Stripe, « Respond to disputes » : https://docs.stripe.com/disputes/responding
- Stripe, tarifs France : https://stripe.com/fr/pricing
- Stripe, « Dispute reason code categories » : https://docs.stripe.com/disputes/categories
- Stripe, « Dispute reason codes » : https://docs.stripe.com/disputes/reason-codes-defense-requirements
- Mastercard, « Chargeback Guide – Merchant Edition » (13 mai 2025) : https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/documents/chargeback-guide.pdf

Information générale, pas un conseil juridique.
