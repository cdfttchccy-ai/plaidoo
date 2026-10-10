---
title: "Litige Mastercard 4860 : remboursement non traité"
meta_description: "Code Mastercard 4860 (crédit non traité) : ce que dit le guide Mastercard, les preuves de remboursement à fournir et les délais de remboursement en France."
slug: litige-mastercard-4860
date: 2026-10-10
---

Information générale, pas un conseil juridique.

# Litige Mastercard 4860 : remboursement non traité

> Sources officielles consultées les 9 et 10 octobre 2026, listées en fin d'article. Les règles peuvent changer et varier selon votre région ou votre prestataire de paiement : vérifiez-les avant d'agir. Le guide Mastercard cité est la « Chargeback Guide – Merchant Edition » du 13 mai 2025, en anglais ; les traductions sont les nôtres. Les textes de loi cités le sont via Service-Public.fr et n'ont pas été relus sur Légifrance.

Un client payé par Mastercard affirme qu'un remboursement lui était dû et qu'il ne l'a pas reçu. Il conteste le paiement auprès de sa banque, et le code affiché est **4860**. Bonne nouvelle : c'est souvent le motif le plus facile à documenter, si le remboursement a réellement été fait.

## 4860 : ce que disent Stripe et Mastercard

Stripe, sur sa page « Dispute reason codes », décrit le 4860 comme « Credit Not Processed ». Le client estime avoir droit à un remboursement ou un avoir qui n'a jamais été traité. Stripe cite :

- un retour accepté mais **non remboursé** ;
- une commande ou un service **annulé** pour lequel le client attendait un crédit ;
- un **débit en double** dont l'un devait être remboursé ;
- une réservation annulée selon la politique affichée, sans remboursement.

Le guide Mastercard pour les marchands (édition du 13 mai 2025) ne mentionne **pas le code 4860** : nous n'y avons trouvé aucune occurrence. La situation y figure sous le motif **4853 « Cardholder Dispute »**, sous-section « Refund Not Processed ». La page Stripe des catégories liste d'ailleurs « Credit Not Processed » à la fois sous 4860 et sous 4853.

En pratique, **lisez le récit du litige** : s'il porte sur un remboursement attendu, ce guide s'applique, quel que soit le numéro.

## Ce que dit le guide Mastercard

Selon la sous-section « Refund Not Processed », la banque du porteur peut contester quand le client affirme qu'une de ces situations s'est produite :

- le marchand a **accepté** de rembourser et ne l'a pas fait ;
- le marchand n'a **pas présenté sa politique de remboursement** au moment de l'achat et refuse un retour ou une annulation ;
- le marchand **n'a pas répondu** au retour ou à l'annulation ;
- le marchand a remboursé un **montant réduit** sans l'avoir annoncé ;
- le marchand n'a pas émis un crédit de **TVA**.

Le guide pose une règle sur la transparence : un marchand qui refuse les retours « par simple changement d'avis », ou qui applique des conditions particulières (frais de restockage, avoir en magasin), doit **les annoncer au moment de la transaction**. À défaut, selon Mastercard, il doit accepter le retour et rembourser. À l'inverse, si la politique a été présentée à l'achat, le client doit la respecter.

Le guide exclut aussi de ce motif le non-remboursement des **frais de livraison** pour un retour par simple changement d'avis.

Côté délais bancaires, le guide indique que la banque conteste en principe entre 15 et 120 jours après la date du justificatif de crédit, de l'annulation du service ou du retour des biens. Elle peut le faire immédiatement dans certains cas, par exemple si le marchand lui-même conseille au client de passer par un litige.

## Les preuves que Mastercard cite

Le guide prévoit deux contestations principales.

**1. Aucun remboursement n'était dû.** L'explication du marchand sur la raison du non-remboursement. Si vous invoquez des conditions particulières acceptées par le client, **joignez ces conditions**. Pour une vente en ligne, le guide cite l'exemple d'une **capture de la case « j'accepte »** cochée par le client, avec les conditions applicables.

**2. Le remboursement a déjà été fait.** Si le remboursement est passé sur la carte Mastercard du client, le guide ne demande pas de document particulier côté acquéreur. S'il a été fait **par un autre moyen** (virement, avoir…), il faut une preuve probante du remboursement.

Le guide exige que le remboursement soit documenté dès la « second presentment », et non plus tard, au stade du pré-arbitrage ou de l'arbitrage.

## Les preuves listées par Shopify et Stripe

**Shopify** (catégorie « Crédit non traité ») cite trois scénarios courants : vous avez accepté un remboursement mais il n'a pas été traité ; un retour a été reçu mais le crédit n'a pas été émis ; le remboursement a été émis mais n'apparaît pas encore. Les preuves :

- l'**enregistrement de la transaction de remboursement** : horodatage, montant, numéro de confirmation ;
- un relevé montrant quand le remboursement a été traité et qu'il correspond au montant contesté ;
- votre **politique de remboursement** acceptée au paiement ;
- les **échanges** où vous avez expliqué le statut du remboursement ;
- le **suivi du retour**, si le litige porte sur un retour.

**Stripe** (code 4860) cite la preuve de remboursement, la politique de remboursement acceptée, la preuve que le client n'a pas respecté les conditions de retour ou d'annulation, les échanges et les journaux de transaction.

## Délais et frais côté marchand

Le guide Mastercard fixe des délais entre banques (par exemple, pour la plupart des transactions, 45 jours calendaires pour la « second presentment » de l'acquéreur). **Ce ne sont pas vos délais.** Votre délai est celui affiché par votre prestataire, toujours plus court :

- **Shopify Payments** : « généralement de 7 à 21 jours » pour répondre ; 15 EUR de frais en France, remboursés si vous gagnez.
- **Stripe** : en général 7 à 21 jours, une seule soumission possible ; 20 € par litige reçu, plus 20 € si vous répondez manuellement (ces derniers sont remboursés si vous gagnez).

Le guide Mastercard précise aussi qu'il ne prendra pas en compte, dans sa décision, des pièces de « second presentment » reçues au stade du pré-arbitrage ou de l'arbitrage. Mettez donc **tout** dans votre première réponse.

## Si vous devez réellement de l'argent au client

Shopify écrit que si vous devez un remboursement, vous pouvez l'émettre depuis l'admin, au risque de perdre la rétrofacturation. Mais la page d'aide Shopify en anglais (« Managing chargebacks in the Shopify admin ») indique qu'un paiement « can't be refunded through Shopify after a chargeback process has been started ». Vérifiez dans votre admin ce qui est proposé pour votre litige, et contactez l'assistance Shopify en cas de doute. Évitez surtout de rembourser **deux fois** (une fois par le litige, une fois par vous).

## Ce que dit le droit français sur les délais de remboursement

Service-Public (fiche F10485) indique qu'en cas de rétractation après un achat à distance, le vendeur doit rembourser « au plus tard dans les 14 jours » suivant la date où il a été informé de la décision, sauf retard justifié. Pour une vente de biens, il peut différer le remboursement jusqu'à la récupération des biens, ou jusqu'à ce que le client fournisse une preuve d'expédition. Le remboursement se fait par le même moyen de paiement que l'achat, sauf accord du client. En cas de retard, les sommes dues sont majorées.

Pour un produit non conforme remboursé au titre de la garantie légale de conformité, Service-Public (fiche F11094) indique aussi un remboursement au plus tard 14 jours après que le vendeur a été informé de la décision du client.

Attention : une politique « pas de remboursement » ou « avoir uniquement », même valable au regard des règles Mastercard, risque de se heurter à ces droits légaux du consommateur. Faites valider votre situation par un professionnel du droit.

## Construire la réponse

- **Si vous avez remboursé** : en tête, la capture de la transaction de remboursement (montant, date, référence), puis le lien avec la commande contestée. Si le crédit tarde à apparaître sur le relevé, dites-le en une phrase.
- **Si aucun crédit n'était dû** : la politique présentée à l'achat (capture de la case cochée), l'état du retour (non reçu, hors délai, hors conditions) et les échanges. Restez factuel.

## Prévenir les litiges 4860

- **Rembourser vite** et confirmer par écrit, avec montant et date. Stripe recommande d'honorer rapidement vos politiques écrites.
- **Afficher la politique de retour avant l'achat** : c'est la condition centrale du guide Mastercard.
- **Suivre les retours** pour savoir quand l'article est revenu.
- **Répondre à chaque demande de retour** : le guide cite l'absence de réponse du marchand comme motif de litige.

## FAQ

**J'ai remboursé, mais le client a quand même ouvert un litige : que faire ?**
Fournissez le justificatif du remboursement avec montant et date. La banque décide.

**Le client n'a jamais renvoyé l'article : dois-je rembourser ?**
Pour une rétractation, Service-Public indique que le vendeur peut différer le remboursement jusqu'à la récupération des biens ou une preuve d'expédition. Joignez le suivi du retour, ou son absence.

**J'ai déduit les frais de port du remboursement : est-ce un problème ?**
Le guide Mastercard exclut de ce litige les frais de livraison non remboursés pour un retour par simple changement d'avis. Le droit français peut imposer d'autres règles : faites vérifier ce point.

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

- Mastercard, « Chargeback Guide – Merchant Edition » (13 mai 2025), section « Cardholder Dispute Chargeback (Message Reason Code 4853/53/4850/4854) », sous-section « Refund Not Processed » : https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/documents/chargeback-guide.pdf
- Stripe, « Dispute reason codes » : https://docs.stripe.com/disputes/reason-codes-defense-requirements
- Stripe, « Dispute reason code categories » : https://docs.stripe.com/disputes/categories
- Shopify, « Répondre aux rétrofacturations et aux enquêtes » : https://help.shopify.com/fr/manual/payments/chargebacks/chargeback-process
- Shopify, « Résoudre une rétrofacturation » : https://help.shopify.com/fr/manual/payments/chargebacks/resolve-chargeback
- Shopify (EN), « Managing chargebacks in the Shopify admin » : https://help.shopify.com/en/manual/payments/chargebacks/chargebacks-in-admin
- Service-Public.fr, F10485 : https://www.service-public.fr/particuliers/vosdroits/F10485
- Service-Public.fr, F11094 : https://www.service-public.fr/particuliers/vosdroits/F11094

Information générale, pas un conseil juridique.
