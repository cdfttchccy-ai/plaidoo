---
title: "Libellé du relevé bancaire Shopify : éviter « non reconnu »"
meta_description: "Shopify Payments : régler le nom affiché sur le relevé de carte du client (2 à 19 caractères) et le téléphone pour limiter les litiges « paiement non reconnu »."
slug: libelle-releve-bancaire-shopify-payments
date: 2026-10-10
priority: P3
---

Information générale, pas un conseil juridique.

# Libellé du relevé bancaire Shopify : éviter « non reconnu »

> Sources officielles consultées les 9 et 10 octobre 2026, listées en fin d'article. Les règles peuvent changer et varier selon votre région ou votre prestataire de paiement : vérifiez-les avant d'agir. Les citations en anglais sont traduites par nos soins.

Un client regarde son relevé de carte, voit un libellé qu'il ne reconnaît pas, et appelle sa banque. Résultat possible : une contestation, alors que l'achat était bien le sien. Le **nom affiché sur le relevé** du client est l'un des réglages les plus simples pour limiter ce scénario. Ce guide explique où le régler dans Shopify Payments et ce que recommandent Shopify et Stripe.

## Deux libellés à ne pas confondre

La page Shopify « Configuration de Shopify Payments » distingue :

1. **Le nom du relevé de versement** : comment **vos versements** apparaissent sur **votre** relevé bancaire. Par défaut : `Shopify`. Il compte **5 à 22 caractères**, en caractères latins, sans `<`, `>`, `'` ni `"`. Votre banque peut ne pas l'utiliser.
2. **Le nom sur le relevé du client** : ce que **vos clients** voient sur le relevé de leur **carte**. C'est celui qui compte pour les litiges « non reconnu ».

## Les règles du nom sur le relevé du client

Selon Shopify, avec Shopify Payments, ce nom doit :

- comporter **entre 2 et 19 caractères** ;
- inclure **le nom de votre boutique**, **le nom de votre entité juridique**, votre **nom commercial** ou votre **URL**.

Si vous ne le modifiez pas à la configuration, **Shopify en définit un** qui respecte ces exigences. Si le nom que vous choisissez est jugé insuffisant, Shopify le **met à jour** à votre place et vous prévient par e-mail, pour éviter des suspensions liées à un nom invalide.

Shopify ajoute que la banque ou le réseau de carte du client peut **ajouter des informations publiques** au libellé : cette décision appartient à chaque banque.

## Où le modifier

D'après Shopify, sur ordinateur :

1. **Paramètres > Paiements**.
2. Dans la section Shopify Payments, cliquez sur **Gérer**.
3. Dans **Relevé de facturation du client** : remplissez **Nom du relevé** et **Numéro de téléphone**.
4. Cliquez sur **Enregistrer**.

Shopify indique que vous **devez ajouter votre numéro de téléphone**, pour que les clients puissent vous appeler en cas de problème. Un client qui vous joint directement a une raison de moins d'appeler sa banque.

## Choisir un bon libellé

Stripe, qui documente la prévention des litiges, recommande un nom **reconnaissable** : le **domaine de votre site** ou le **nom de votre entreprise**, pour que le client identifie facilement son achat. En pratique :

- reprenez le **nom visible** sur votre site et dans vos e-mails de confirmation ;
- si votre marque diffère de votre raison sociale, privilégiez **celle que le client connaît** (dans les limites des règles Shopify ci-dessus) ;
- testez la lecture **en 19 caractères** : coupez proprement plutôt que de laisser une abréviation obscure ;
- utilisez un **numéro de téléphone** réellement joignable.

Stripe conseille aussi de **ne pas mélanger plusieurs activités** sur un même compte, pour garder un libellé et un contact propres à chaque activité. Sur Shopify, cela revient à éviter qu'une seule boutique serve plusieurs marques très différentes.

## Les autres réflexes contre « non reconnu »

- **Confirmation de commande** claire, avec le nom de la boutique et le montant.
- **Contact facile à trouver** sur le site, comme le recommande Stripe.
- **E-mails d'expédition** réguliers.
- **Abonnements** : rappeler avant chaque échéance qui va prélever et combien.

## Ce que ce guide ne couvre pas

Les litiges « non reconnu » sont souvent rangés par les réseaux du côté **fraude** ou proche de la fraude. Stripe classe par exemple les motifs Mastercard 4863 « Cardholder Does Not Recognize — Potential Fraud » et Amex 127 dans sa catégorie « Unrecognized ». Ce guide traite uniquement de la **prévention** ; pour répondre à un tel litige, suivez les consignes de Shopify ou de Stripe pour votre motif.

## FAQ

**Le libellé est-il modifiable après la configuration ?**
Oui. Shopify indique que vous pouvez le mettre à jour à tout moment, qu'il ait été défini par vous ou par Shopify.

**Pourquoi mon client voit-il d'autres mentions sur son relevé ?**
Selon Shopify, la banque ou le réseau de carte peut ajouter des informations publiques. Vous ne contrôlez pas cette partie.

**Changer le nom du relevé de versement aide-t-il contre les litiges ?**
Non : il ne concerne que l'affichage de vos versements sur votre propre relevé.

## Sources (consultées le 10 octobre 2026)

- Shopify, « Configuration de Shopify Payments » (sections « Modifier le nom de votre relevé de versement » et « Modifier le nom sur le relevé du client ») : https://help.shopify.com/fr/manual/payments/shopify-payments/configuring-shopify-payments
- Stripe, « Dispute prevention best practices » : https://docs.stripe.com/disputes/prevention/best-practices
- Stripe, « Dispute categories » : https://docs.stripe.com/disputes/categories

Information générale, pas un conseil juridique.
