---
title: "Stripe litige : frais de 20 € et comment les limiter"
meta_description: "Stripe France facture 20 € par litige reçu et 20 € si vous répondez, remboursés seulement si vous gagnez. Calcul, règles et moyens de limiter les frais."
slug: stripe-litige-frais-20-euros
date: 2026-10-09
---

Information générale, pas un conseil juridique.

# Stripe litige : frais de 20 € et comment les limiter

> Tarifs et règles vérifiés le 9 octobre 2026 sur la page tarifs Stripe France et la documentation Stripe, listées en fin d'article. Ils peuvent changer, et votre contrat Stripe peut prévoir d'autres conditions : vérifiez votre propre tableau de bord avant d'agir. Les articles de loi cités le sont via Service-Public.fr et n'ont pas été relus sur Légifrance.

Vous encaissez avec Stripe et un client conteste un paiement par carte auprès de sa banque. Combien cela coûte-t-il, quand récupère-t-on ces frais, et comment en payer moins ? Voici les montants publiés par Stripe pour la France et les règles qui les accompagnent.

## Combien coûte un litige Stripe en France ?

La page tarifs de Stripe France, consultée le 9 octobre 2026, indique dans la rubrique « Gestion des litiges » :

| Frais | Montant | Remboursé si vous gagnez ? |
|---|---|---|
| **Frais de litige reçus** | **20,00 €** « pour chaque litige que vous recevez » | Non, sauf disposition contraire de votre contrat (voir ci-dessous) |
| **Frais de réfutation de litige** | **20,00 €** « pour chaque litige auquel vous répondez manuellement » | **Oui** : « Ces frais vous sont remboursés pour les litiges remportés. Ils ne vous sont pas remboursés pour les litiges perdus. » |
| Smart Disputes (option) | « 30 % du montant contesté pour chaque litige que vous remportez » | Pas de frais Smart Disputes si le litige est perdu ; « les frais de litige reçus s'appliquent toujours » |

La page ajoute que, « dans de rares cas, des frais de réseau s'appliquent également ».

La documentation Stripe « Respond to disputes » confirme la logique : si vous contestez, un « dispute countered fee » s'ajoute au « dispute received fee ». Stripe rembourse le premier si vous gagnez, mais « unless otherwise stated in your Stripe contract, we never return the dispute received fee ».

**Conclusion chiffrée, uniquement à partir de ces montants publiés :**

- litige reçu et non contesté : 20 € de frais, plus le montant contesté ;
- litige contesté manuellement et perdu : 20 € + 20 € = 40 € de frais, plus le montant ;
- litige contesté manuellement et gagné : 20 € restent à votre charge, et les 20 € de réfutation vous sont rendus.

Le titre de cet article est donc exact sur le montant de base (20 €). Mais répondre manuellement engage 20 € de plus, rendus seulement en cas de victoire.

## Cas particuliers documentés par Stripe

- **Litiges de conformité Visa ou Mastercard** (« compliance disputes ») : si vous les contestez, Stripe prélève **500 USD (ou l'équivalent local)** en plus des frais de litige. Ce montant est remboursé si vous gagnez.
- **Enquêtes (« inquiries »)** : une phase préalable au litige formel, que Stripe dit utilisée surtout par American Express et Discover. Selon Stripe, Visa et Mastercard ne l'utilisent plus. Pendant cette phase, vous pouvez clore le dossier **sans frais de litige**, soit avec des preuves satisfaisantes, soit avec un remboursement intégral.

## Si vous vendez sur Shopify avec Shopify Payments

Shopify publie sa propre grille pour Shopify Payments : **15 EUR en France** par rétrofacturation, remboursés si vous gagnez (Centre d'aide Shopify, tableau « Frais de rétrofacturation par pays »). Si votre boutique Shopify encaisse via Shopify Payments, c'est donc cette grille qui figure dans votre admin. Vérifiez dans vos relevés quel prestataire facture vos litiges.

## Faut-il contester ? Une décision au cas par cas

Puisque la réfutation manuelle coûte 20 € de plus, rendus seulement si vous gagnez, posez-vous trois questions avant de répondre :

1. **La réclamation du client est-elle fondée ?** Stripe conseille de vérifier sa validité et, sinon, de rassembler les preuves pour la réfuter.
2. **Pouvez-vous régler à l'amiable ?** Stripe suggère de convaincre le client de retirer son litige si vous résolvez sa plainte, par exemple avec un avoir ou un article de remplacement.
3. **Avez-vous les bonnes preuves ?** Pour « produit non reçu » (Visa 13.1) : suivi et preuve de remise. Pour « non conforme » (Visa 13.3) : fiche produit archivée, photos, échanges.

Stripe précise aussi que vous n'avez **qu'une seule occasion** de soumettre votre réponse. Elle est transmise immédiatement à la banque et ne peut plus être modifiée. Le délai est « usually 7 to 21 days, depending on the card network ». Sans réponse avant l'échéance, le litige est perdu automatiquement. L'examen par la banque peut prendre jusqu'à 3 mois, selon Stripe.

## Comment limiter les frais de litige

### 1. Traiter les signaux avant le litige

Stripe décrit les **alertes de fraude précoce** (« early fraud warnings »), issues de signalements des banques sur les réseaux Visa, Mastercard et JCB. Selon l'analyse de Stripe, le point optimal pour rembourser un paiement signalé se situe autour des paiements d'un montant **inférieur ou égal à vos frais de litige**. Stripe ajoute qu'un remboursement ne change rien à l'alerte elle-même. C'est une analyse de Stripe, à adapter à votre situation.

### 2. Être joignable et répondre vite

Stripe rappelle, pour plusieurs motifs, que le client est censé contacter le marchand avant d'ouvrir un litige. Des coordonnées visibles et des réponses rapides vous donnent l'occasion de régler le problème avant la banque.

### 3. Rembourser vite quand le client y a droit

En France, le consommateur dispose en général d'un délai minimum de 14 jours pour se rétracter d'un achat à distance. Le vendeur doit le rembourser au plus tard 14 jours après avoir été informé, sous réserve de la récupération des biens (Service-Public, fiche F10485). Un remboursement tardif nourrit les litiges « crédit non traité » (Visa 13.6).

### 4. Livrer avec une preuve

Pour les commandes de valeur, une remise contre signature ou code donne une preuve plus solide qu'un simple suivi. Visa recommande de mettre en balance le coût d'une preuve de livraison et la valeur de la marchandise.

### 5. Rendre la résiliation simple pour les abonnements

Pour le motif « abonnement annulé » (Visa 13.2), Stripe liste comme preuves la politique d'annulation acceptée, les journaux de demandes d'annulation et l'usage après la date. Côté droit français, Service-Public présente la résiliation « en 3 clics » des contrats conclus par voie électronique (actualité A16599, signalée comme ancienne). À faire vérifier par un professionnel du droit.

## FAQ

**Les frais de litige Stripe sont-ils de 20 € en France ?**
Oui, selon la page tarifs Stripe France consultée le 9 octobre 2026 : 20,00 € par litige reçu. Il faut ajouter 20,00 € de frais de réfutation si vous répondez manuellement.

**Les 20 € sont-ils remboursés si je gagne ?**
Les frais de réfutation, oui. Les frais de litige reçus, non, sauf disposition contraire de votre contrat Stripe, selon la documentation Stripe.

**Combien coûte au maximum un litige perdu ?**
Avec les montants publiés : 40 € de frais (20 € + 20 €) si vous avez répondu manuellement, plus le montant contesté. Des frais de réseau peuvent s'appliquer dans de rares cas, et 500 USD pour un litige de conformité contesté.

**Smart Disputes est-il moins cher ?**
Selon Stripe : 30 % du montant contesté si vous gagnez, rien de plus si vous perdez, et les frais de litige reçus s'appliquent toujours. Faites le calcul selon vos paniers.

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

## Sources (consultées le 9 octobre 2026)

- Stripe, tarifs France : https://stripe.com/fr/pricing
- Stripe, « Respond to disputes » : https://docs.stripe.com/disputes/responding
- Stripe, « How disputes work » : https://docs.stripe.com/disputes/how-disputes-work
- Stripe, « Dispute reason codes and defense requirements » : https://docs.stripe.com/disputes/reason-codes-defense-requirements
- Shopify, « Répondre aux rétrofacturations et aux enquêtes » : https://help.shopify.com/fr/manual/payments/chargebacks/chargeback-process
- Visa, « Dispute Management Guidelines for Visa Merchants » (juin 2024) : https://usa.visa.com/dam/VCOM/global/support-legal/documents/merchants-dispute-management-guidelines.pdf
- Service-Public.fr, F10485 : https://www.service-public.fr/particuliers/vosdroits/F10485
- Service-Public.fr, A16599 : https://www.service-public.fr/particuliers/actualites/A16599

Information générale, pas un conseil juridique.
