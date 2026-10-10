---
title: "Litige Mastercard 4855 : marchandise non fournie, que répondre ?"
meta_description: "Code Mastercard 4855 (bien ou service non fourni) : ce qu'il recouvre, les preuves de livraison à fournir et le lien avec le motif 4853 du guide Mastercard."
slug: litige-mastercard-4855
date: 2026-10-10
---

Information générale, pas un conseil juridique.

# Litige Mastercard 4855 : marchandise non fournie, que répondre ?

> Sources officielles consultées les 9 et 10 octobre 2026, listées en fin d'article. Les règles peuvent changer et varier selon votre région ou votre prestataire de paiement : vérifiez-les avant d'agir. Le guide Mastercard cité est la « Chargeback Guide – Merchant Edition » du 13 mai 2025, en anglais ; les traductions sont les nôtres. Les textes de loi cités le sont via Service-Public.fr et n'ont pas été relus sur Légifrance.

Un client payé par carte Mastercard affirme n'avoir jamais reçu sa commande et conteste le paiement auprès de sa banque. Dans Stripe, ou dans le détail du litige côté Shopify Payments, le code affiché peut être **4855**. Voici ce que ce code recouvre, ce que le guide officiel de Mastercard demande comme preuves, et comment construire une réponse.

## 4855 ou 4853 : un point à connaître d'abord

Stripe, sur sa page « Dispute reason codes », décrit le 4855 comme « Goods or Services Not Provided » : le client dit ne pas avoir reçu les biens ou services payés. Cela vise un colis jamais livré, un service non rendu, un contenu numérique inaccessible, ou un voyage annulé non remboursé.

Le guide Mastercard pour les marchands (édition du 13 mai 2025) ne présente pas les choses ainsi. Nous n'y avons trouvé **aucune occurrence du code 4855**. La situation « Goods or Services Not Provided » y est une sous-catégorie du motif **4853 « Cardholder Dispute »**, qui regroupe aussi le produit défectueux, le remboursement non traité ou l'abonnement annulé.

Autre détail : la page Stripe des catégories range le 4855 sous l'intitulé « Transaction Did Not Complete », dans la catégorie « Product not received ». Les deux pages de Stripe ne donnent donc pas le même libellé.

Nous n'avons pas trouvé d'explication officielle à ces écarts. En pratique, ne vous fiez pas qu'au numéro : **lisez le récit du litige**. Si le client dit que le colis n'est pas arrivé, les règles et preuves ci-dessous s'appliquent, que le code affiché soit 4855 ou 4853.

## Ce que dit le guide Mastercard

Dans la section « Goods or Services Not Provided », la banque du porteur peut contester quand le client affirme à la fois avoir bien effectué la transaction et ne pas avoir reçu les biens ou services. Le guide cite aussi le cas d'un **colis vide** ou contenant des objets sans valeur.

Le guide liste des cas où ce litige **n'est pas disponible**, notamment :

- le client a pris possession de la marchandise puis l'a fait expédier par un tiers ;
- les biens sont **retenus en douane** faute de paiement des droits par le client ;
- le marchand a livré et le client a **refusé la livraison** ;
- le client a signé une **décharge** acceptant que la preuve d'expédition vaille livraison.

Ces exclusions relèvent des règles Mastercard. En France, le droit de la consommation peut aboutir à une autre conclusion (voir plus bas).

Sur les délais côté banque, le guide indique que, si aucune date de livraison n'a été annoncée, la banque doit en principe attendre 30 jours après la transaction avant de contester, sauf si elle apprend que le marchand ne livrera pas (par exemple, s'il a cessé son activité).

## Les preuves que Mastercard cite

Pour contester (« second presentment » au motif que les biens ont été fournis), le guide demande l'explication du marchand et la preuve que **le client, ou une personne autorisée par lui, a reçu la marchandise**. Exemples cités :

- des **photos** montrant les biens livrés à l'adresse indiquée par le client ;
- la preuve d'envoi d'un **code à usage unique** (QR code, code PIN) vers l'e-mail ou le téléphone du client, puis de son utilisation pour ouvrir une **boîte ou un casier** de livraison ;
- un **reçu signé** par la personne qui a retiré la marchandise ;
- un **bon de livraison signé** par la personne qui l'a reçue ;
- pour un service, la preuve qu'il a été fourni.

Si les biens ont été livrés **après** l'ouverture du litige, le guide accepte une preuve de cette livraison tardive.

## Les preuves listées par Shopify et Stripe

**Shopify** (catégorie « Produit non reçu ») demande, pour un produit physique :

- informations de suivi : transporteur, numéro, statut ;
- confirmation de livraison, « idéalement avec une signature ou une photo » ;
- vérification que l'adresse de livraison correspond à celle donnée au paiement ;
- notifications de livraison envoyées par le transporteur.

**Stripe** (code 4855) cite :

- la preuve d'expédition et de livraison : suivi, confirmation du transporteur, bon signé ;
- pour un bien numérique : journaux de connexion ou de téléchargement ;
- pour un service : rendez-vous, journaux de travail, confirmations ;
- les échanges avec le client ;
- vos conditions de livraison et de remboursement acceptées au paiement.

Stripe rappelle que c'est la banque du porteur, et non Stripe, qui décide de l'issue.

## Délais et frais côté marchand

Le guide Mastercard fixe des délais entre banques (par exemple, pour la plupart des transactions, 45 jours calendaires pour la « second presentment » de l'acquéreur). **Ce ne sont pas vos délais.** Votre délai est celui affiché par votre prestataire, toujours plus court :

- **Shopify Payments** : « généralement de 7 à 21 jours » pour répondre ; 15 EUR de frais en France, remboursés si vous gagnez.
- **Stripe** : en général 7 à 21 jours, une seule soumission possible ; 20 € par litige reçu, plus 20 € si vous répondez manuellement (ces derniers sont remboursés si vous gagnez).

Le guide Mastercard précise aussi qu'il ne prendra pas en compte, dans sa décision, des pièces de « second presentment » reçues au stade du pré-arbitrage ou de l'arbitrage. Mettez donc **tout** dans votre première réponse.

## Ce que dit le droit français

Service-Public.fr (fiche F10037) indique que, lorsque la livraison est faite par le transporteur proposé par le vendeur, « le vendeur est seul responsable de la bonne exécution de la commande ». Sans date convenue, le vendeur doit livrer au plus tard 30 jours après la commande. Le transfert des risques n'intervient qu'à la prise de possession physique du bien par le consommateur ou un tiers désigné. La fiche cite notamment les articles L216-1 à L216-8 du Code de la consommation.

Conséquence pratique : une décharge « preuve d'expédition = livraison », que Mastercard mentionne, peut se heurter à ces règles pour une vente à un consommateur en France. Une **preuve d'expédition seule** ne prouve pas la remise. Faites valider votre situation par un professionnel du droit si l'enjeu est important.

## Construire la réponse

1. **Preuve principale en premier** : la preuve de remise (signature, photo, code de casier utilisé, attestation du transporteur), pas seulement le suivi d'expédition.
2. **Concordance d'adresse** : l'adresse de livraison du suivi face à celle saisie au paiement.
3. **Chronologie** : date de commande, d'expédition, de livraison annoncée et réelle.
4. **Échanges** : messages du client, surtout s'il a confirmé la réception ou n'a jamais écrit avant le litige.

Décrivez chaque pièce en une phrase datée. Si vous n'avez **aucune preuve de remise**, rembourser est souvent plus cohérent que contester.

## Prévenir les litiges 4855

- Annoncez une date de livraison réaliste et prévenez par écrit en cas de retard.
- Pour les commandes de valeur, choisissez un envoi avec remise contre signature ; Shopify écrit qu'exiger une signature « renforce considérablement votre position ».
- Récupérez et archivez la preuve de remise dès la livraison, sans attendre un éventuel litige.
- Répondez vite aux messages « où est mon colis ? » : Stripe recommande de faciliter le contact client.

## FAQ

**Le code affiché est 4853 mais le client dit n'avoir rien reçu : quel guide suivre ?**
Celui-ci. Le guide Mastercard range ce cas sous 4853 ; ce qui compte, c'est le récit du litige.

**Le suivi indique « livré » sans signature : est-ce suffisant ?**
Rien ne le garantit. Mastercard cite des preuves de **réception** (signature, photo, code utilisé). Joignez tout ce que le transporteur peut fournir.

**Le colis est bloqué en douane : que faire ?**
Le guide Mastercard exclut ce litige quand les biens sont retenus faute de paiement des droits par le client. Documentez le blocage et ce que le client devait payer.

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

- Mastercard, « Chargeback Guide – Merchant Edition » (13 mai 2025), section « Cardholder Dispute Chargeback (Message Reason Code 4853/53/4850/4854) », sous-section « Goods or Services Not Provided » : https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/documents/chargeback-guide.pdf
- Stripe, « Dispute reason codes » : https://docs.stripe.com/disputes/reason-codes-defense-requirements
- Stripe, « Dispute reason code categories » : https://docs.stripe.com/disputes/categories
- Shopify, « Répondre aux rétrofacturations et aux enquêtes » : https://help.shopify.com/fr/manual/payments/chargebacks/chargeback-process
- Shopify, « Prévention des rétrofacturations et des enquêtes » : https://help.shopify.com/fr/manual/payments/chargebacks/preventing-chargebacks
- Service-Public.fr, F10037 : https://www.service-public.fr/particuliers/vosdroits/F10037

Information générale, pas un conseil juridique.
