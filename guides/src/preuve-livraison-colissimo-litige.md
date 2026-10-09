---
title: "Preuve de livraison Colissimo : l'obtenir pour un litige"
meta_description: "Où trouver la preuve de livraison Colissimo (signature, code, attestation) et comment l'utiliser pour répondre à un litige « colis non reçu »."
slug: preuve-livraison-colissimo-litige
date: 2026-10-09
---

Information générale, pas un conseil juridique.

# Preuve de livraison Colissimo : l'obtenir pour un litige

> Sources officielles consultées le 9 octobre 2026, listées en fin d'article. Plusieurs documents Colissimo cités datent de 2020-2021 : la procédure actuelle et les conditions de **votre** contrat peuvent être différentes, à vérifier auprès de Colissimo. Les articles de loi cités le sont via Service-Public.fr et n'ont pas été relus sur Légifrance.

Un client conteste un paiement en affirmant n'avoir jamais reçu son Colissimo. Pour répondre au litige (Visa 13.1, Mastercard 4855, « produit non reçu » chez Shopify), la pièce la plus forte est la **preuve de livraison**. Voici ce que disent les documents de La Poste et de Colissimo sur cette preuve, et comment l'utiliser.

## Preuve de dépôt et preuve de livraison : ne pas confondre

- **La preuve de dépôt** atteste, selon l'aide en ligne de La Poste, « de la prise en charge de votre colis par la Poste ». Elle montre que vous avez expédié, pas que le client a reçu.
- **La preuve de livraison** (ou « preuve de distribution ») montre la remise au destinataire. C'est elle que demandent les réseaux de cartes : Visa veut une documentation prouvant que le titulaire de la carte ou une personne autorisée a reçu la marchandise.

Shopify liste parmi les preuves d'un litige « produit non reçu » la « confirmation de livraison : preuve de livraison, idéalement avec une signature ou une photo ».

## Avec ou sans signature : ce qui change

Sur sa page grand public « Comment envoyer un Colissimo contre signature ? », La Poste indique que, **par défaut, un Colissimo est envoyé sans signature** et déposé dans la boîte aux lettres si ses dimensions le permettent. La même page affirme qu'« avec une signature, la preuve de livraison est incontestable ». C'est la formulation de La Poste ; la banque du client reste libre de sa décision.

Les conditions générales du **Contrat Facilité Colissimo Entreprise** (édition du 8 décembre 2020, « Janvier 2021 ») détaillent les deux cas. Elles précisent elles-mêmes qu'elles sont communiquées « à titre d'information » et ne remplacent pas votre contrat :

- **Sans signature (boîte aux lettres)** : « aucune signature n'est recueillie, ni requise ».
- **Contre signature** : la signature numérisée du destinataire, ou d'une personne attachée à son service, demeurant avec lui ou spécialement mandatée, « ainsi que sa reproduction font preuve de livraison du colis ». Le texte précise aussi que la signature « n'est pas systématiquement mise à disposition du Client ».
- **Code confidentiel** : quand la remise se fait contre un code transmis au destinataire par SMS ou e-mail, « la concordance des codes fait preuve de livraison du colis et vaut signature ». En consigne Pickup, la saisie du code de retrait vaut signature.

Conséquence pratique : pour un colis livré sans signature, vous aurez au mieux le suivi « livré », qui est une preuve plus faible. Le choix du mode de livraison se fait **avant** l'envoi.

## Où récupérer la preuve de livraison

### Dans l'Outil de Suivi Colis (Colissimo Box)

Le guide d'utilisation de l'Outil de Suivi Colis (version de novembre 2020) décrit le parcours suivant :

1. Se connecter à l'espace Colissimo Box et ouvrir l'Outil de Suivi Colis.
2. Rechercher l'envoi (numéro de colis, période, nom du destinataire…).
3. Ouvrir la **fiche colis**. Elle contient l'historique, la **preuve de livraison** (« s'il s'agit d'un colis livré contre signature ») et des documents téléchargeables comme l'**attestation de livraison**.
4. Si besoin, cliquer sur **« Déposer une demande »** pour signaler un incident : contestation de livraison, colis non livré, **demande de POD (preuve de livraison)**… Un numéro de dossier est alors communiqué.

Le guide indique que l'historique couvre les 12 derniers mois et que les demandes se suivent dans l'onglet « Service clients ». Ce guide est ancien : l'interface et les intitulés ont pu changer, à vérifier dans votre espace ou auprès de Colissimo.

### Par l'API Documents (pour les intégrations)

Le contrat d'interface « API Documents » de Colissimo (version 0.0.5 du 5 février 2021) permet de « consulter les documents associés à un colis ». Les types listés incluent `SIGNATURE` (preuve de livraison) et `DELIVERY_CERTIFICATE` (attestation de livraison). L'accès se fait avec les identifiants du compte. Les conditions d'accès actuelles n'ont pas été revérifiées : renseignez-vous auprès de Colissimo avant de développer quoi que ce soit.

### Si vous n'êtes pas client entreprise

Les démarches ci-dessus concernent les comptes professionnels Colissimo. Pour un envoi déposé au guichet sans contrat, gardez la preuve de dépôt : La Poste la juge « indispensable pour toute demande auprès du Service Clients ». Contactez ensuite le service clients par les canaux indiqués sur laposte.fr. Nous n'avons pas vérifié quels documents de livraison sont alors disponibles.

## Utiliser la preuve dans votre réponse au litige

1. **Vérifiez d'abord ce qui est déjà inclus.** Avec Shopify Payments, la réponse contient automatiquement un PDF de suivi, qui peut inclure la photo de livraison pour certains transporteurs. Shopify conseille d'ajouter la signature du transporteur « si elle ne figure pas déjà dans le PDF de suivi ».
2. **Mettez la preuve en tête du dossier**, avec une description précise : « Preuve de livraison Colissimo, colis n° […], remis contre signature le [date] à [adresse identique à celle de la commande] ».
3. **Montrez la concordance d'adresse.** Shopify demande de démontrer que l'article a été envoyé à l'adresse fournie au paiement.
4. **Préférez une capture ou un PDF** à un lien vers la page de suivi : Shopify recommande des captures plutôt que des liens externes.
5. **Ajoutez les échanges avec le client**, en particulier s'il a confirmé son adresse ou parlé du produit.

Respectez la date limite : « généralement de 7 à 21 jours » selon Shopify, et « usually 7 to 21 days » selon Stripe, qui n'autorise qu'une seule soumission.

## Pourquoi c'est à vous de prouver

Service-Public.fr (fiche F10037) indique que, lorsque la livraison est faite par le transporteur proposé par le vendeur, « le vendeur est seul responsable de la bonne exécution de la commande ». S'il n'a pas la preuve que le consommateur possède le produit et que celui-ci conteste l'avoir reçu, le vendeur « prend à sa charge les risques de la perte du produit ». La fiche cite les articles L216-1 à L216-8 et L221-15 du Code de la consommation.

## FAQ

**Le suivi « livré » suffit-il ?**
C'est une preuve, mais plus faible qu'une signature ou un code de retrait. Le guide Visa recommande, pour éviter ce litige, une preuve de livraison ou de retrait signée.

**Je ne trouve pas de signature dans la fiche colis : pourquoi ?**
Selon le guide OSC, la preuve de livraison y figure pour un colis livré contre signature. Les CGV de 2020 précisent aussi que la signature n'est pas systématiquement mise à disposition. Faites une « demande de POD » ou interrogez le service clients Colissimo, selon votre contrat.

**La preuve de dépôt sert-elle dans un litige ?**
Elle prouve l'expédition, pas la réception. Joignez-la en contexte, pas comme preuve principale.

**Faut-il passer tous mes envois contre signature ?**
C'est un arbitrage coût/risque. Visa invite à comparer le coût de la preuve de livraison à la valeur de la marchandise.

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

- La Poste, « A quoi sert la preuve de dépôt d'un Colissimo ? » : https://aide.laposte.fr/contenu/a-quoi-sert-la-preuve-de-depot-d-un-colissimo
- La Poste, « Comment envoyer un Colissimo contre signature ? » : https://www.laposte.fr/envoyer/comment-envoyer-colissimo-contre-signature
- Colissimo Entreprise, « Outil de Suivi Colis — Guide d'utilisation » (novembre 2020) : https://www.colissimo.entreprise.laposte.fr/sites/default/files/2021-10/guide-utilisation-osc_FR.pdf
- Colissimo Entreprise, « Contrat Facilité — Conditions générales » (édition du 08/12/2020) : https://www.colissimo.entreprise.laposte.fr/sites/default/files/2021-03/cgv-contrat-facilite.pdf
- Colissimo Entreprise, « Contrat d'interface API Documents » v0.0.5 (05/02/2021) : https://www.colissimo.entreprise.laposte.fr/sites/default/files/2021-04/WS-Documents_FR.pdf
- Shopify, « Répondre aux rétrofacturations et aux enquêtes » : https://help.shopify.com/fr/manual/payments/chargebacks/chargeback-process
- Stripe, « Respond to disputes » : https://docs.stripe.com/disputes/responding
- Visa, « Dispute Management Guidelines for Visa Merchants » (juin 2024) : https://usa.visa.com/dam/VCOM/global/support-legal/documents/merchants-dispute-management-guidelines.pdf
- Service-Public.fr, F10037 : https://www.service-public.fr/particuliers/vosdroits/F10037

Information générale, pas un conseil juridique.
