---
title: "Litige Visa 13.1 : répondre à « marchandise non reçue »"
meta_description: "Code Visa 13.1 sur Shopify Payments ou Stripe : ce que Visa attend, les preuves à fournir, les délais et comment éviter ce litige."
slug: litige-visa-13-1
date: 2026-10-09
---

Information générale, pas un conseil juridique.

# Litige Visa 13.1 : répondre à « marchandise non reçue »

> Sources officielles consultées le 9 octobre 2026, listées en fin d'article. Les règles peuvent changer et varier selon votre région ou votre prestataire de paiement : vérifiez-les avant d'agir. Les articles de loi cités le sont via Service-Public.fr et n'ont pas été relus sur Légifrance.

Votre interface Shopify Payments ou Stripe affiche un litige avec le code **Visa 13.1**. Ce code correspond au motif « Merchandise/Services Not Received » : le client affirme ne pas avoir reçu sa commande. Voici ce que Visa, Shopify et Stripe disent de ce motif, et comment construire une réponse.

## Que signifie le code Visa 13.1 ?

Le guide de Visa destiné aux marchands (« Dispute Management Guidelines for Visa Merchants », édition de juin 2024) définit la condition 13.1 ainsi : le titulaire de la carte affirme que la marchandise ou les services commandés n'ont pas été reçus à la date prévue, ou que la marchandise n'était pas disponible au retrait.

Visa cite trois causes fréquentes :

- la marchandise n'a pas été livrée et reçue à la date, à l'heure ou au lieu convenus ;
- la marchandise n'était pas disponible au retrait au lieu ou à la date convenus ;
- les services n'étaient pas disponibles ou n'ont pas été fournis.

Chez Mastercard, le motif voisin est le code **4855** (« Goods or Services Not Provided »), d'après la documentation Stripe sur les codes de motif. Le guide marchand Mastercard du 13 mai 2025 range ce cas sous le 4853 : voir le [guide Mastercard 4855](https://cdfttchccy-ai.github.io/plaidoo/guides/litige-mastercard-4855.html).

Ce guide Visa est publié sur le site américain de Visa. Les règles applicables à votre transaction peuvent dépendre de votre région et de votre prestataire : en cas de doute, renseignez-vous auprès de lui.

## Ce que Visa attend comme réponse

Le guide Visa liste plusieurs situations, chacune avec le document à fournir. Les plus utiles pour un e-commerçant :

1. **La marchandise a été livrée ou retirée à la date ou au lieu convenus.** Fournir une documentation prouvant que le titulaire de la carte, ou une personne autorisée, a reçu la marchandise comme convenu.
2. **La date de livraison prévue n'est pas encore passée.** Fournir la documentation de la date de livraison annoncée.
3. **Le client a annulé avant la date prévue.** Montrer que vous pouviez livrer et que le client a annulé avant la livraison.
4. **Un remboursement a déjà été effectué.** Fournir le justificatif avec le montant et la date.
5. **Le client ne conteste plus.** Fournir un courrier ou un e-mail où il le dit.

Visa est aussi clair sur le cas inverse : si la marchandise n'a pas été livrée, la consigne est d'**accepter le litige**.

## Les preuves à rassembler

Les listes de Shopify et de Stripe pour le motif « produit non reçu » se recoupent.

**Shopify** (page « Répondre aux rétrofacturations et aux enquêtes ») demande, pour un produit physique :

- informations de suivi : transporteur, numéro, statut ;
- confirmation de livraison, « idéalement avec une signature ou une photo » ;
- vérification que l'adresse de livraison correspond à celle donnée au paiement ;
- notifications de livraison envoyées par le transporteur.

**Stripe** (« Dispute reason codes and defense requirements ») mentionne pour le code 13.1 :

- le suivi, la confirmation du transporteur ou un reçu de livraison signé ;
- les échanges avec le client ;
- vos conditions de livraison et de remboursement, y compris leur acceptation au paiement.

Stripe rappelle que le client est censé signaler le problème au marchand avant d'ouvrir un litige.

À noter : avec Shopify Payments, une partie des données est ajoutée automatiquement (détails de la commande, adresses, suivi, PDF de suivi). La réponse est soumise à l'échéance même sans action de votre part. Ajoutez ce que vous seul possédez : échanges avec le client, preuve de remise du transporteur si elle manque, politique d'expédition.

## Délais et soumission

- **Shopify Payments** : vous disposez d'un « temps limité, généralement de 7 à 21 jours ». L'examen peut prendre « jusqu'à 75 jours » après la soumission. La décision est finale, sans appel.
- **Stripe** : la fenêtre est « usually 7 to 21 days, depending on the card network ». Sans réponse avant l'échéance, le litige est perdu automatiquement. Stripe précise aussi que vous n'avez qu'**une seule occasion** de soumettre : impossible de modifier la réponse ou d'ajouter des fichiers ensuite.

Dans les deux cas, la date limite exacte s'affiche dans votre interface : c'est elle qui fait foi.

## Construire la réponse : un ordre simple

Shopify recommande de mettre la preuve la plus forte en premier, car l'agent qui examine le dossier peut n'y consacrer que quelques minutes :

1. **Preuve directe de remise** : signature, code de retrait ou capture du suivi montrant « livré » à l'adresse de la commande.
2. **Reconnaissance par le client** : message où il parle du produit ou confirme l'adresse.
3. **Conditions acceptées** : politique d'expédition affichée au paiement.
4. **Contexte** : historique de commandes, vérifications d'adresse.

Décrivez chaque pièce en une phrase précise, et préférez des captures d'écran à des liens.

## Ce que dit le droit français

Service-Public.fr (fiche F10037) indique que, lorsque la livraison est faite par le transporteur proposé par le vendeur, « le vendeur est seul responsable de la bonne exécution de la commande ». Sans date convenue, le vendeur doit livrer au plus tard 30 jours après la commande. Le transfert des risques n'intervient qu'à la prise de possession physique du bien par le consommateur ou un tiers désigné. La fiche cite notamment les articles L216-1 à L216-8 du Code de la consommation.

Autrement dit, si vous n'avez aucune preuve de remise, contester a peu de chances d'aboutir. Faites valider votre situation par un professionnel du droit si l'enjeu est important.

## Éviter le prochain 13.1

Les recommandations du guide Visa pour ce motif :

- **Prévenir par écrit en cas de retard**, avec la nouvelle date, et laisser le client annuler s'il le souhaite.
- **Peser le coût d'une preuve de livraison** au regard de la valeur de la marchandise. Une preuve de remise ou de retrait signée permet de contester si le client dit n'avoir rien reçu.
- **Envisager une assurance transport** contre la perte, le vol ou les dommages.

Shopify ajoute pour les commandes de grande valeur : exiger une signature à la livraison « renforce considérablement votre position ».

## FAQ

**Le statut « livré » du suivi suffit-il ?**
Visa demande de prouver que le titulaire ou une personne autorisée a reçu la marchandise. Une signature, un code de retrait ou une photo est plus solide qu'un simple statut. La banque reste libre de sa décision.

**Quelle est la différence entre Visa 13.1 et Mastercard 4855 ?**
Les deux couvrent la marchandise ou le service non fourni, d'après Stripe. Le détail du guide Mastercard est dans le [guide 4855](https://cdfttchccy-ai.github.io/plaidoo/guides/litige-mastercard-4855.html).

**Puis-je encore rembourser le client ?**
Avec Shopify Payments, la page d'aide en anglais indique qu'un paiement ne peut plus être remboursé via Shopify une fois la rétrofacturation lancée. Pendant une enquête, un remboursement intégral reste possible. Avec Stripe, vérifiez dans votre tableau de bord les options proposées pour votre litige.

**Combien coûte un litige ?**
En France : 15 EUR avec Shopify Payments, remboursés si vous gagnez. Avec Stripe : 20 € par litige reçu, plus 20 € si vous y répondez manuellement (ce second montant est remboursé si vous gagnez). Voir nos articles dédiés.

## Préparer votre dossier avec l'outil gratuit

Nous avons fait un **petit outil gratuit**, sans compte : [Plaidoo, quelles preuves pour ce motif ?](https://cdfttchccy-ai.github.io/plaidoo/outil.html). Il est pensé pour un e-commerçant en France qui répond à un litige Shopify Payments ou Stripe. Vous indiquez trois choses :

- le code de motif tel qu'il apparaît dans votre interface (Visa 13.1, 13.2, 13.3, 13.6, 13.7 ; Mastercard 4855, 4853, 4841, 4860) ;
- le transporteur (Colissimo, Mondial Relay, Chronopost ou autre) ;
- si la commande est un abonnement.

L'outil vous donne alors :

- une liste des preuves à rassembler ;
- des références du Code de la consommation, avec leur niveau de vérification ;
- un modèle de réponse à trous, à relire, puis à copier ou imprimer.

Le script tourne dans votre navigateur et ne contacte aucun serveur. L'outil ne soumet rien à votre place et ne couvre pas les litiges pour fraude, American Express ni PayPal. Il ne garantit aucun résultat : c'est la banque du client qui décide.

## Sources (consultées le 9 octobre 2026)

- Visa, « Dispute Management Guidelines for Visa Merchants » (juin 2024) : https://usa.visa.com/dam/VCOM/global/support-legal/documents/merchants-dispute-management-guidelines.pdf
- Stripe, « Dispute reason codes and defense requirements » : https://docs.stripe.com/disputes/reason-codes-defense-requirements
- Stripe, « Respond to disputes » : https://docs.stripe.com/disputes/responding
- Shopify, « Répondre aux rétrofacturations et aux enquêtes » : https://help.shopify.com/fr/manual/payments/chargebacks/chargeback-process
- Shopify (EN), « Managing chargebacks in the Shopify admin » : https://help.shopify.com/en/manual/payments/chargebacks/chargebacks-in-admin
- Shopify, « Résoudre une rétrofacturation » : https://help.shopify.com/fr/manual/payments/chargebacks/resolve-chargeback
- Stripe, tarifs France : https://stripe.com/fr/pricing
- Service-Public.fr, F10037 : https://www.service-public.fr/particuliers/vosdroits/F10037

Information générale, pas un conseil juridique.
