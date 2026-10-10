---
title: "Colis en point relais non retiré : que faire en litige ?"
meta_description: "Colis Mondial Relay ou autre point relais non retiré puis retourné, et le client ouvre un litige : motif concerné, preuves utiles et règles françaises de livraison."
slug: colis-point-relais-non-retire-litige
date: 2026-10-10
---

Information générale, pas un conseil juridique.

# Colis en point relais non retiré : que faire en litige ?

> Sources officielles consultées les 9 et 10 octobre 2026, listées en fin d'article. Les règles peuvent changer et varier selon votre région ou votre prestataire de paiement : vérifiez-les avant d'agir. Le guide Mastercard cité est la « Chargeback Guide – Merchant Edition » du 13 mai 2025, en anglais ; les traductions sont les nôtres. Les textes de loi cités le sont via Service-Public.fr et n'ont pas été relus sur Légifrance.

Le colis est arrivé en point relais, le client ne l'a pas retiré, il vous est revenu… et quelques semaines plus tard, le client conteste le paiement en disant n'avoir rien reçu. Voici comment les règles des réseaux et le droit français s'appliquent, avec prudence : aucun texte officiel consulté ne traite ce cas précis de bout en bout.

## Quel motif de litige ?

Le client dit ne pas avoir reçu sa commande. Le litige relève donc en général de la famille « produit non reçu » :

- **Visa 13.1** « Merchandise/Services Not Received » ;
- **Mastercard** : le guide pour les marchands (édition du 13 mai 2025) range ce cas sous le motif **4853 « Cardholder Dispute »**, sous-section « Goods or Services Not Provided ». Stripe peut afficher le code **4855** ; nous n'avons trouvé aucune occurrence de ce code dans le guide officiel.

Si le client dit avoir **annulé** ou demandé un remboursement, le litige peut aussi arriver sous un motif « crédit non traité » (Visa 13.6 ou 13.7, Mastercard 4853 « Refund Not Processed », affiché 4860 chez Stripe). Lisez le récit du litige.

## Ce que disent Visa et Mastercard sur le retrait

Le guide Visa (juin 2024) mentionne explicitement le retrait. Pour 13.1, le client affirme que la marchandise n'a pas été reçue à la date prévue, **ou n'était pas disponible au retrait**. Parmi les causes : marchandise non disponible au retrait à l'endroit ou à la date convenus.

Réponse prévue par Visa : la marchandise a été livrée **ou retirée** à la date ou à l'endroit convenus, avec une documentation prouvant que le client, ou une personne autorisée, l'a reçue. Visa cite comme preuve de livraison ou de **retrait** une certification du transporteur que la marchandise a été retirée et signée par le client.

Le guide Mastercard, lui, exclut ce litige quand le marchand a livré et que **le client a refusé la livraison**. Il cite parmi les preuves de réception l'envoi d'un **code à usage unique** au client, puis son utilisation pour ouvrir un **casier** de livraison, ou un **reçu signé** par la personne qui a retiré la marchandise.

Dans notre cas, le colis **n'a pas été retiré**. Vous n'aurez donc ni signature ni code utilisé. Ce que vous pouvez montrer, c'est que le colis **était disponible** au point convenu, que le client en a été averti, et qu'il vous est revenu. Aucun des deux guides ne dit explicitement que cela suffit à gagner. Formulez votre réponse comme un exposé des faits, pas comme une certitude.

## Ce que dit Mondial Relay sur la garde des colis

Selon la FAQ de Mondial Relay (consultée le 10 octobre 2026) :

- en France, le destinataire a **5 jours calendaires** (dimanches et jours fériés inclus) pour retirer son colis en Point Relais ou en Locker ;
- ce délai **ne peut pas être prolongé** ;
- passé ce délai, le colis est **retourné automatiquement à l'expéditeur**.

Les délais varient selon les pays et peuvent évoluer. Les conditions de votre contrat professionnel avec le transporteur peuvent aussi différer de la FAQ grand public : vérifiez-les. Nous n'avons pas consulté de documentation officielle équivalente pour les autres réseaux de points relais.

## Les preuves à rassembler

- **Le choix du client** : capture de la commande montrant la livraison en point relais et le relais choisi.
- **Le suivi complet** : mise à disposition au relais (date), fin du délai de garde, retour à l'expéditeur.
- **Les avis envoyés au client** par le transporteur ou par vous (e-mail ou SMS de mise à disposition), si vous pouvez les obtenir.
- **La réception du retour** chez vous, avec la date.
- **Vos échanges** avec le client après le retour : proposition de réexpédition ou de remboursement.
- **Le remboursement**, si vous l'avez fait (montant et date).

Shopify, pour la catégorie « Produit non reçu », demande notamment les informations de suivi (transporteur, numéro, statut) et les notifications de livraison envoyées par le transporteur.

## Délais et frais côté marchand

Le guide Mastercard fixe des délais entre banques (par exemple, pour la plupart des transactions, 45 jours calendaires pour la « second presentment » de l'acquéreur). **Ce ne sont pas vos délais.** Votre délai est celui affiché par votre prestataire, toujours plus court :

- **Shopify Payments** : « généralement de 7 à 21 jours » pour répondre ; 15 EUR de frais en France, remboursés si vous gagnez.
- **Stripe** : en général 7 à 21 jours, une seule soumission possible ; 20 € par litige reçu, plus 20 € si vous répondez manuellement (ces derniers sont remboursés si vous gagnez).

Le guide Mastercard précise aussi qu'il ne prendra pas en compte, dans sa décision, des pièces de « second presentment » reçues au stade du pré-arbitrage ou de l'arbitrage. Mettez donc **tout** dans votre première réponse.

## Ce que dit le droit français

Service-Public.fr (fiche F10037) apporte plusieurs repères :

- le vendeur doit respecter le **mode de livraison prévu au contrat**, la fiche citant en exemple la livraison en point relais ;
- quand la livraison est faite par le transporteur proposé par le vendeur, « le vendeur est seul responsable de la bonne exécution de la commande » ;
- le vendeur doit s'assurer que le client possède bien le produit ; à défaut de preuve, il supporte le risque de perte ;
- le transfert des risques n'intervient qu'à la **prise de possession physique** du bien par le consommateur ou un tiers désigné.

Par ailleurs, Service-Public (fiche F10485) précise que, pour exercer le droit de rétractation, le **refus de prendre livraison** ou le simple renvoi du bien sans déclaration **ne suffisent pas**.

Ces textes ne disent pas, à eux seuls, ce que vous devez au client dont le colis non retiré vous est revenu : remboursement, réexpédition, déduction des frais de retour. Le client n'a jamais pris possession du bien, et vous l'avez récupéré. Faites valider votre politique sur ce point par un professionnel du droit.

## Construire la réponse

1. **Les faits, dans l'ordre** : commande avec relais choisi, mise à disposition, délai de garde expiré, retour reçu.
2. **Ce que vous avez proposé** après le retour : réexpédition, remboursement.
3. **L'état actuel** : si vous avez remboursé, la preuve en tête de dossier.

En pratique, si vous avez récupéré le colis et ne l'avez pas remboursé, contester est délicat : vous avez la marchandise **et** l'argent. Rembourser, éventuellement selon votre politique affichée pour les colis non retirés, est souvent plus cohérent.

## Prévenir ces litiges

- **Afficher au paiement** ce qui se passe si le colis n'est pas retiré : retour, remboursement, éventuels frais. À faire valider juridiquement.
- **Prévenir le client** vous-même à la mise à disposition et avant la fin du délai de garde, en plus des avis du transporteur.
- **Contacter le client dès le retour** du colis, par écrit, avec deux options : réexpédition ou remboursement.
- **Rembourser vite** si le client le demande : un litige coûte des frais (15 EUR chez Shopify Payments en France, 20 € chez Stripe).

## FAQ

**Le client dit que le relais était fermé : que faire ?**
Visa cite parmi les causes de 13.1 une marchandise non disponible au retrait à l'endroit ou à la date convenus. Si le relais était réellement indisponible, le client a un argument. Vérifiez auprès du transporteur.

**Puis-je déduire les frais de retour du remboursement ?**
Aucune source officielle consultée ne le prévoit clairement pour un colis non retiré. Faites valider ce point.

**Le colis est toujours au relais : que répondre ?**
Visa prévoit une réponse quand la date de livraison n'est pas encore passée. Indiquez que le colis est disponible et jusqu'à quand, preuves à l'appui.

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

- Visa, « Dispute Management Guidelines for Visa Merchants » (juin 2024), condition 13.1 : https://usa.visa.com/dam/VCOM/global/support-legal/documents/merchants-dispute-management-guidelines.pdf
- Mastercard, « Chargeback Guide – Merchant Edition » (13 mai 2025), sous-section « Goods or Services Not Provided » : https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/documents/chargeback-guide.pdf
- Mondial Relay, FAQ « Combien de jours ai-je pour retirer mon colis en Locker ou Point Relais ? » : https://www.mondialrelay.fr/faq/recevoir-un-colis/combien-de-jours-ai-je-pour-retirer-mon-colis-en-locker-ou-point-relais/
- Shopify, « Répondre aux rétrofacturations et aux enquêtes » : https://help.shopify.com/fr/manual/payments/chargebacks/chargeback-process
- Service-Public.fr, F10037 : https://www.service-public.fr/particuliers/vosdroits/F10037
- Service-Public.fr, F10485 : https://www.service-public.fr/particuliers/vosdroits/F10485

Information générale, pas un conseil juridique.
