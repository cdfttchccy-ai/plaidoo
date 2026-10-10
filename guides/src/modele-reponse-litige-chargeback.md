---
title: "Modèle de réponse à un litige chargeback (à trous)"
meta_description: "Une trame de réponse à trous pour un litige chargeback Shopify Payments ou Stripe, construite sur les consignes de Shopify, Stripe et Visa."
slug: modele-reponse-litige-chargeback
date: 2026-10-09
---

Information générale, pas un conseil juridique.

# Modèle de réponse à un litige chargeback (à trous)

> Sources officielles consultées le 9 octobre 2026, listées en fin d'article. Ce modèle est une trame à adapter : il ne garantit aucun résultat, car la banque du client décide. Les règles peuvent changer et varier selon votre prestataire de paiement.

Vous avez reçu un litige (chargeback, ou rétrofacturation) sur Shopify Payments ou Stripe, et vous voulez répondre proprement. Ce guide propose une **trame de réponse à trous** construite à partir de ce que recommandent Shopify, Stripe et Visa, puis explique comment la remplir selon le motif.

## Avant d'écrire : faut-il contester ?

Le guide Visa pour les marchands (juin 2024) indique, pour plusieurs motifs, d'**accepter le litige** quand la réclamation du client est fondée : marchandise jamais livrée, remboursement dû mais pas encore fait. Stripe conseille aussi de vérifier si la réclamation est valide et si un règlement à l'amiable est possible, par exemple un avoir ou un article de remplacement. Le client peut alors retirer son litige.

Contester a un coût :

- Shopify Payments en France facture 15 EUR de frais par rétrofacturation, remboursés si vous gagnez.
- Stripe France facture 20 € par litige reçu, plus 20 € si vous répondez manuellement ; ces 20 € de réponse sont remboursés si vous gagnez.

Ces montants viennent des pages officielles citées en fin d'article.

## Les règles de forme qui comptent

- **Une seule chance chez Stripe.** Stripe précise que vous n'avez qu'une occasion de soumettre. Votre réponse et vos fichiers partent immédiatement à la banque et ne peuvent plus être modifiés.
- **Soumission automatique chez Shopify.** Avec Shopify Payments, la réponse part à la date d'échéance, même si vous n'ajoutez rien. Une partie des données de la commande est incluse automatiquement : produits, client, adresses, IP, suivi, remboursements, historique.
- **Le plus fort en premier.** Shopify rappelle qu'un agent bancaire peut ne passer que « quelques minutes » sur votre dossier. Il recommande l'ordre suivant : preuve directe, reconnaissance par le client, politiques, contexte.
- **Des descriptions précises.** Plutôt que « capture d'écran ci-jointe », écrivez ce que montre la pièce, avec la date et le montant.
- **Des captures plutôt que des liens.** Shopify recommande des captures des pages de suivi et des échanges plutôt que des liens externes.
- **Répondre point par point.** Pour le motif « non conforme », Visa recommande de traiter chacun des arguments du client.

## La trame à trous

Copiez la trame, remplacez chaque [crochet] et supprimez les blocs qui ne s'appliquent pas. N'affirmez rien que vos pièces ne prouvent pas.

> **Objet : Réponse au litige [référence du litige] — commande [n° de commande] du [date]**
>
> **1. Résumé**
> Le [date], [nom du client] a passé la commande [n°] pour un montant de [montant] €. Le litige est ouvert pour le motif [motif tel qu'affiché, ex. « produit non reçu » / Visa 13.1]. Nous contestons ce litige car [une phrase factuelle : le colis a été remis contre signature le (date) / le remboursement a été effectué le (date) / l'abonnement était actif à la date du prélèvement…].
>
> **2. Preuve principale**
> Pièce 1 : [description précise, ex. « Preuve de livraison du transporteur (nom), colis n° (…), remis le (date) à (adresse identique à celle de la commande) »].
>
> **3. Éléments venant du client**
> Pièce 2 : [ex. « E-mail du client du (date) confirmant (…) »] — ou : « Le client ne nous a pas contactés avant d'ouvrir ce litige ; nos coordonnées figurent sur (page) et nous aurions traité sa demande. »
>
> **4. Conditions acceptées**
> Pièce 3 : [politique d'expédition / de retour / d'abonnement / CGV], affichée [où et quand] et acceptée lors du paiement [comment].
>
> **5. Contexte**
> Pièce 4 : [historique de commandes, vérification d'adresse, échanges complémentaires].
>
> **6. Conclusion**
> Au vu de ces éléments, nous demandons que le litige soit résolu en notre faveur. [Si un remboursement partiel a déjà été fait : montant et date.]

## Comment remplir la trame selon le motif

**Produit non reçu (Visa 13.1, Mastercard 4855).** Pièce 1 : la confirmation de livraison, « idéalement avec une signature ou une photo » selon Shopify, et la concordance avec l'adresse de la commande. Visa demande de prouver que le titulaire ou une personne autorisée a reçu ou retiré la marchandise.

**Non conforme ou défectueux (Visa 13.3, Mastercard 4853).** Pièce 1 : la fiche produit au moment de l'achat et des photos avant expédition. Répondez à chaque argument. Attention : selon Visa, la politique de retour n'a pas d'incidence pour ce motif.

**Abonnement annulé (Visa 13.2, Mastercard 4841).** Pièce 1 : les conditions d'abonnement acceptées et l'absence de demande d'annulation à la date du prélèvement. Visa mentionne aussi la preuve que le client a utilisé le service après la date de retrait de son autorisation.

**Crédit non traité (Visa 13.6, Mastercard 4860).** Pièce 1 : le justificatif du remboursement (montant, date) ou la preuve qu'aucun crédit n'était dû.

**Commande annulée ou retournée (Visa 13.7).** Pièce 1 : la politique de retour ou d'annulation communiquée et acceptée lors de l'achat, et le fait que le client ne l'a pas suivie. En France, cette politique ne peut pas réduire le droit légal de rétractation du consommateur (voir notre guide Visa 13.7).

Les intitulés Mastercard sont ceux de la documentation Stripe ; la documentation officielle Mastercard n'a pas été consultée.

## Ce qu'il ne faut pas écrire

- Des faits non prouvés par une pièce jointe.
- Des accusations contre le client sans élément ; restez factuel.
- Des références juridiques que vous n'avez pas vérifiées. Si vous citez le Code de la consommation, vérifiez le texte sur Légifrance ou faites-vous conseiller.
- Une promesse de résultat à vous-même : Shopify et Stripe rappellent que la banque peut trancher en faveur du client même avec de bonnes preuves.

## FAQ

**Dans quelle langue répondre ?**
Nous n'avons pas trouvé de règle officielle sur ce point dans les pages consultées. Rédigez clairement ; si votre prestataire indique une langue, suivez-la.

**Puis-je joindre plusieurs fichiers pour une même preuve ?**
Chez Stripe, un seul fichier par type de preuve : combinez plusieurs documents en un seul PDF de plusieurs pages. Chez Shopify, suivez le formulaire de votre admin.

**Combien de temps pour répondre ?**
En général 7 à 21 jours, selon Shopify et Stripe. La date exacte s'affiche dans votre interface.

**Le modèle suffit-il ?**
Non. Il structure votre réponse ; ce sont vos preuves qui comptent, et la décision appartient à la banque.

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

- Shopify, « Répondre aux rétrofacturations et aux enquêtes » : https://help.shopify.com/fr/manual/payments/chargebacks/chargeback-process
- Stripe, « Respond to disputes » : https://docs.stripe.com/disputes/responding
- Stripe, « Dispute reason codes and defense requirements » : https://docs.stripe.com/disputes/reason-codes-defense-requirements
- Stripe, tarifs France : https://stripe.com/fr/pricing
- Visa, « Dispute Management Guidelines for Visa Merchants » (juin 2024) : https://usa.visa.com/dam/VCOM/global/support-legal/documents/merchants-dispute-management-guidelines.pdf
- Service-Public.fr, F10485 (rétractation) : https://www.service-public.fr/particuliers/vosdroits/F10485

Information générale, pas un conseil juridique.
