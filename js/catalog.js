/* Données de l'outil Plaidoo. Textes juridiques paraphrasés, numéros sourcés.
   Rien ici n'est un conseil juridique. */
(function (root) {
  "use strict";

  var articles = {
    "L216-1": {
      id: "L216-1",
      title: "Date de délivrance",
      text: "Le professionnel délivre le bien ou fournit le service à la date ou dans le délai indiqué. À défaut d'indication ou d'accord, il le fait sans retard injustifié et au plus tard trente jours après la conclusion du contrat. La délivrance d'un bien est le transfert de la possession physique ou du contrôle du bien.",
      source: "Extrait de l'article L. 216-1 en vigueur depuis le 1er octobre 2021 (ordonnance n° 2021-1247), relevé via l'index Légifrance le 9 octobre 2026. La page HTML directe a renvoyé un contrôle d'accès. Même délai de 30 jours sur Service-Public, fiche F10037, vérifiée le 5 septembre 2025.",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032226968",
      confidence: "extrait-index"
    },
    "L216-2": {
      id: "L216-2",
      title: "Risque jusqu'à la prise de possession",
      text: "Lorsque la livraison est faite par le transporteur proposé par le professionnel, les risques de perte ou d'endommagement sont transférés au consommateur au moment où il prend physiquement possession du bien. Sans preuve de cette possession, le vendeur supporte la perte.",
      source: "Numéro et sens donnés par la fiche de l'Institut national de la consommation (janvier 2022) commentant l'ordonnance n° 2021-1247, pour les contrats conclus à compter du 1er janvier 2022. Le texte intégral actuel n'a pas été recopié depuis Légifrance (accès refusé le 9 octobre 2026). Service-Public, fiche F10037, dit la même règle sans rappeler le numéro d'alinéa.",
      url: "https://www.inc-conso.fr/sites/default/files/pdf/vi-delivrance-fourniture-transfert-risque_0.pdf",
      confidence: "secondaire"
    },
    "L216-3": {
      id: "L216-3",
      title: "Transporteur choisi par le client",
      text: "Lorsque le consommateur confie le bien à un transporteur autre que celui proposé par le professionnel, le risque de perte ou d'endommagement est transféré au consommateur lors de la remise du bien à ce transporteur.",
      source: "Texte relevé le 9 octobre 2026 sur une reproduction Base LEGI (LibreJustice) et confirmé dans son sens par la fiche INC de janvier 2022. Légifrance direct non relu.",
      url: "https://librejustice.fr/norm/fr/code-de-la-consommation/l216-3",
      confidence: "secondaire"
    },
    "L216-6": {
      id: "L216-6",
      title: "Retard ou absence de délivrance",
      text: "Si le professionnel ne délivre pas à la date prévue, le consommateur peut suspendre le paiement ou résoudre le contrat après une mise en demeure d'exécuter dans un délai supplémentaire raisonnable. La résolution peut être immédiate si le professionnel refuse de livrer, ou si la date était une condition essentielle.",
      source: "Sens donné par la fiche INC (janvier 2022) et par Service-Public, fiche F10037, vérifiée le 5 septembre 2025, qui renvoie aux articles L. 216-1 à L. 216-8. Texte intégral non recopié depuis Légifrance.",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F10037",
      confidence: "paraphrase-officielle"
    },
    "L216-7": {
      id: "L216-7",
      title: "Remboursement après résolution pour retard",
      text: "Lorsque le contrat est résolu pour non-respect de la date de livraison, le professionnel rembourse la totalité des sommes versées, au plus tard dans les quatorze jours suivant la dénonciation.",
      source: "Fiche INC, janvier 2022. Service-Public (F10037) confirme le remboursement sous 14 jours et cite l'article L. 241-4 pour les majorations de retard.",
      url: "https://www.inc-conso.fr/sites/default/files/pdf/vi-delivrance-fourniture-transfert-risque_0.pdf",
      confidence: "secondaire"
    },
    "L221-15": {
      id: "L221-15",
      title: "Responsabilité du vendeur à distance",
      text: "Pour une livraison réalisée par le transporteur qu'il propose, le vendeur est seul responsable de la bonne exécution. S'il ne prouve pas que le client a le bien, il supporte la perte. Il peut s'exonérer s'il prouve que l'inexécution vient du consommateur, d'un tiers imprévisible et insurmontable, ou d'un cas de force majeure.",
      source: "Service-Public, fiche F10037, vérifiée le 5 septembre 2025, qui vise l'article L. 221-15 au titre « Responsabilité du vendeur ». Texte intégral de l'article non recopié depuis Légifrance.",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F10037",
      confidence: "paraphrase-officielle"
    },
    "L221-18": {
      id: "L221-18",
      title: "Délai de rétractation",
      text: "Pour un achat à distance, le consommateur dispose d'un délai minimum de 14 jours calendaires pour se rétracter, sans avoir à motiver sa décision. Le professionnel peut accorder un délai plus long.",
      source: "Service-Public, fiche F10485, vérifiée le 1er janvier 2026, qui renvoie aux articles L. 221-18 à L. 221-28 pour la durée et le point de départ.",
      url: "https://www.service-public.fr/particuliers/vosdroits/F10485",
      confidence: "paraphrase-officielle"
    },
    "L221-19": {
      id: "L221-19",
      title: "Point de départ du délai",
      text: "Pour un bien, le délai court à compter du lendemain de la réception. Pour plusieurs biens livrés séparément, à compter du lendemain de la réception du dernier. Pour un service, à compter du lendemain de la conclusion du contrat.",
      source: "Service-Public, fiche F10485 (décompte) et fiche F10037, qui nomme expressément l'article L. 221-19 parmi les articles L. 221-18 à L. 221-28. Texte intégral non recopié depuis Légifrance.",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F10037",
      confidence: "paraphrase-officielle"
    },
    "L221-21": {
      id: "L221-21",
      title: "Comment la rétractation s'exerce",
      text: "Avant la fin du délai, le consommateur envoie le formulaire type ou un autre écrit. Le simple renvoi du colis, ou le refus de le prendre, ne suffit pas. Le professionnel ne peut pas exiger une lettre recommandée.",
      source: "Service-Public, fiche F10485, vérifiée le 1er janvier 2026, qui vise l'article L. 221-21 pour l'exercice du droit.",
      url: "https://www.service-public.fr/particuliers/vosdroits/F10485",
      confidence: "paraphrase-officielle"
    },
    "L221-24": {
      id: "L221-24",
      title: "Remboursement après rétractation",
      text: "Le vendeur rembourse toutes les sommes versées, frais de livraison inclus, au plus tard quatorze jours après avoir été informé de la rétractation. Pour une vente de biens, il peut différer le remboursement jusqu'à la récupération des biens ou jusqu'à la preuve de leur expédition. Le remboursement se fait par le même moyen de paiement, sauf accord du consommateur.",
      source: "Service-Public, fiche F10485, vérifiée le 1er janvier 2026, qui vise l'article L. 221-24.",
      url: "https://www.service-public.fr/particuliers/vosdroits/F10485",
      confidence: "paraphrase-officielle"
    },
    "L221-28": {
      id: "L221-28",
      title: "Exceptions à la rétractation",
      text: "Le droit de rétractation ne s'applique pas, notamment, aux biens nettement personnalisés, aux biens descellés ne pouvant être renvoyés pour des raisons d'hygiène ou de santé, aux contenus numériques dont l'exécution a commencé avec l'accord du consommateur et sa renonciation expresse, ni aux journaux ou magazines hors abonnement.",
      source: "Service-Public, fiche F10485, vérifiée le 1er janvier 2026, qui vise l'article L. 221-28 pour les exceptions. La liste de la fiche est plus longue : ne citer une exception que si elle correspond au bien vendu.",
      url: "https://www.service-public.fr/particuliers/vosdroits/F10485",
      confidence: "paraphrase-officielle"
    },
    "L217-bloc": {
      id: "L217-bloc",
      title: "Garantie légale de conformité",
      text: "Le vendeur professionnel répond des défauts de conformité qui apparaissent dans les deux ans à compter de la délivrance. La présomption que le défaut existait déjà à la délivrance est de 24 mois pour un bien neuf ou reconditionné, et de 12 mois pour un bien d'occasion. Le consommateur choisit d'abord la réparation ou le remplacement. La réduction du prix ou la résolution viennent ensuite, si la réparation ou le remplacement est impossible, trop lent (au-delà d'un mois selon Service-Public) ou source d'un inconvénient majeur.",
      source: "Service-Public, fiche F11094, vérifiée le 17 août 2026, qui renvoie aux articles L. 217-3 à L. 217-20. Les numéros d'alinéas à l'intérieur de ce bloc n'ont pas été relus sur Légifrance : ne pas inventer un numéro plus fin.",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11094",
      confidence: "paraphrase-officielle"
    },
    "L215-1": {
      id: "L215-1",
      title: "Reconduction tacite",
      text: "Pour un contrat de prestation de services à durée déterminée avec reconduction tacite, le prestataire informe le consommateur, au plus tôt trois mois et au plus tard un mois avant le terme, de la possibilité de ne pas reconduire. La date limite figure dans un encadré apparent.",
      source: "Extrait du chapitre Légifrance « Reconduction et modalités de résiliation » (articles L. 215-1 à L. 215-5), relevé le 9 octobre 2026. Page HTML directe non rouverte (contrôle d'accès).",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032221235/2023-10-08/",
      confidence: "extrait-index"
    },
    "L215-1-1": {
      id: "L215-1-1",
      title: "Résiliation en ligne",
      text: "Si le contrat a été conclu en ligne, ou si le professionnel offre à la date de la résiliation la possibilité de conclure des contrats en ligne, le consommateur doit pouvoir résilier par cette voie. Le professionnel met à disposition une fonctionnalité gratuite, confirme la réception de la notification, et indique sur un support durable la date de fin et les effets de la résiliation. Ces dispositions s'appliquent aux contrats en cours depuis le 1er juin 2023.",
      source: "Extrait de l'article L. 215-1-1 relevé le 9 octobre 2026 sur l'index Légifrance (même chapitre). La page directe a renvoyé un contrôle Cloudflare. Service-Public, actualité A16599, mise à jour le 14 septembre 2023, décrit les trois étapes sans citer ce numéro d'article : la fonctionnalité « résilier votre contrat », une page récapitulative, puis « notification de la résiliation ».",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032221235/2023-10-08/?anchor=LEGIARTI000032226974",
      confidence: "extrait-index"
    },
    "D215-1": {
      id: "D215-1",
      title: "Présentation du bouton résilier",
      text: "La fonctionnalité est présentée sous la mention « résilier votre contrat », ou une formule analogue sans ambiguïté, en caractères lisibles. Elle est directement et facilement accessible depuis l'interface où le consommateur peut conclure un contrat en ligne. Le professionnel n'impose pas, au stade de la notification, la création d'un espace personnel.",
      source: "Texte de l'article D. 215-1 créé par le décret n° 2023-417 du 31 mai 2023, repris à l'identique par deux bases juridiques secondaires consultées le 9 octobre 2026 (Doctrine, Loilà). Légifrance non ouvert sur cet article. Les articles D. 215-2 et D. 215-3, cités par la note de positionnement, n'ont pas été relus mot à mot : ne pas les citer comme si leur texte avait été vérifié.",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047604998",
      confidence: "secondaire"
    },
    "L241-4": {
      id: "L241-4",
      title: "Majoration si le remboursement tarde",
      text: "En cas de retard de remboursement après l'annulation d'une commande non livrée, Service-Public indique des majorations de 10 %, 20 % puis 50 % selon le palier de retard, et vise l'article L. 241-4.",
      source: "Service-Public, fiche F10037, vérifiée le 5 septembre 2025. Ne pas confondre avec les majorations propres à la rétractation, que la fiche F10485 rattache aux articles L. 242-1 à L. 242-4.",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F10037",
      confidence: "paraphrase-officielle"
    }
  };

  var noteAncienArticle = {
    id: "note-ancien-L216-4",
    title: "Ne pas citer l'ancien article L. 216-4",
    text: "Jusqu'au 1er octobre 2021, l'article L. 216-4 disait que le risque passe au consommateur à la prise de possession physique. Depuis l'ordonnance n° 2021-1247, ce numéro vise la remise de la notice, des instructions d'installation et, s'il y a lieu, du contrat de garantie commerciale (fiche INC). Pour un contrat conclu à compter du 1er janvier 2022, citer L. 216-2 pour le risque, pas L. 216-4.",
    source: "Version historique L. 216-4 affichée par Légifrance comme en vigueur du 1er juillet 2016 au 1er octobre 2021. Nouvelle affectation du numéro : fiche INC, janvier 2022.",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032226960/2020-09-14",
    confidence: "piege-numerotation"
  };

  var carriers = [
    {
      id: "colissimo",
      label: "Colissimo",
      letterHint: "La pièce utile est l'attestation de livraison ou la signature, pas la seule page « livré ».",
      pod: {
        title: "Attestation ou signature Colissimo",
        text: "Dans l'espace client Colissimo, récupérer la preuve de livraison signée ou l'attestation de livraison. L'API Documents de Colissimo (contrat d'interface v0.0.5, 5 février 2021) prévoit les types SIGNATURE et DELIVERY_CERTIFICATE, avec les identifiants du compte du marchand. Les conditions d'accès actuelles n'ont pas été revérifiées. Le statut « livré » du suivi n'est pas cette preuve."
      }
    },
    {
      id: "mondial-relay",
      label: "Mondial Relay",
      letterHint: "Joindre le PDF de signature ou de bordereau exporté de Connect. Le suivi « Livré » ne suffit pas.",
      pod: {
        title: "Preuve Connect Mondial Relay",
        text: "Exporter depuis le portail Connect la signature, ou le PDF du bordereau pour une livraison à domicile. Le suivi WSI2_TracingColisDetaille peut indiquer l'étape « Livré », mais aucune méthode d'API de téléchargement de la preuve n'a été trouvée dans les documents lus : prévoir un dépôt manuel du PDF."
      }
    },
    {
      id: "chronopost",
      label: "Chronopost",
      letterHint: "Joindre le PDF de preuve obtenu dans l'espace client ou Chronotrace.",
      pod: {
        title: "Preuve Chronopost (espace client ou Chronotrace)",
        text: "Pour un expéditeur professionnel, la copie PDF du bordereau se demande dans « Mes envois » ou Chronotrace. Chronopost indique qu'elle est disponible au plus tôt le lendemain pour les expéditions France. En point relais, la signature numérisée fait foi. Aucune API publique actuelle n'a été retenue : ne pas s'appuyer sur un WSDL non confirmé par Chronopost."
      }
    },
    {
      id: "autre",
      label: "Autre transporteur",
      letterHint: "Joindre le document du transporteur qui identifie le réceptionnaire, la date et l'adresse. Ne pas citer une API qui n'a pas été vérifiée.",
      pod: {
        title: "Preuve de remise de l'autre transporteur",
        text: "Demander au transporteur le bordereau, la signature ou l'attestation de remise : nom du réceptionnaire, date, heure et adresse. Une capture du suivi en ligne, sans ces éléments, est une pièce faible."
      }
    }
  ];

  var families = {
    not_received: {
      needsPod: true,
      warnings: ["preuve-remise", "suivi-insuffisant"],
      articles: ["L216-1", "L216-2", "L216-3", "L216-6", "L216-7", "L221-15", "L241-4"],
      notes: ["note-ancien-L216-4"],
      checklist: [
        {
          id: "commande",
          title: "Commande et paiement",
          text: "Référence de commande, date, montant, lignes de produits, nom du client et adresse de livraison enregistrée au moment de l'achat."
        },
        {
          id: "suivi",
          title: "Numéro de suivi",
          text: "Numéro de colis, date d'expédition et capture du suivi. Utile, mais ce n'est pas la preuve de remise physique."
        },
        {
          id: "adresse",
          title: "Adresse identique",
          text: "L'adresse figurant sur la preuve de remise doit être celle de la commande, ou celle d'un point relais choisi par le client et indiqué sur la commande."
        },
        {
          id: "echanges",
          title: "Échanges avec le client",
          text: "Messages où le client dit ne pas avoir reçu le colis, et vos réponses (enquête transporteur, renvoi, offre de remboursement)."
        },
        {
          id: "cgv",
          title: "Conditions de livraison",
          text: "Extrait des CGV ou de la fiche de commande indiquant le délai et le transporteur proposé par la boutique."
        }
      ],
      letter: [
        "Le client conteste ne pas avoir reçu la commande. Le transporteur a été proposé par la boutique.",
        "Nous joignons la preuve de remise physique (signature ou attestation), et non le seul numéro de suivi. Cette pièce indique la date de remise, l'adresse et, lorsqu'elle existe, l'identité du réceptionnaire.",
        "Pour un contrat conclu à compter du 1er janvier 2022, le risque de perte reste sur le vendeur jusqu'à la prise de possession physique lorsque le transporteur est celui qu'il propose (article L. 216-2 selon la fiche de l'Institut national de la consommation ; article L. 221-15 selon Service-Public). Nous demandons qu'il soit tenu compte de la preuve de remise jointe.",
        "Si cette preuve manque, le dossier est faible : nous le savons, et nous ne demandons pas à la banque de suppléer une pièce absente."
      ]
    },
    not_as_described: {
      needsPod: false,
      warnings: ["code-large-4853", "conformite-dabord"],
      articles: ["L217-bloc", "L221-18", "L221-28", "L221-15"],
      notes: [],
      checklist: [
        {
          id: "fiche",
          title: "Fiche produit au jour de la commande",
          text: "Capture ou archive de la page : titre, description, photos, matière, dimensions, couleur. Datée, ou identifiable comme celle vue par le client."
        },
        {
          id: "recu",
          title: "Preuve que le bien est arrivé",
          text: "Sans preuve de réception, le litige ressemble à un « non reçu ». Joindre la remise, puis traiter à part le défaut allégué."
        },
        {
          id: "sav",
          title: "Offre de réparation ou de remplacement",
          text: "Écrit proposant la réparation ou le remplacement, date de la demande du client, et suite donnée. La garantie légale passe par là avant une résolution du contrat (Service-Public, articles L. 217-3 à L. 217-20)."
        },
        {
          id: "photos",
          title: "Constat du défaut",
          text: "Photos envoyées par le client, ou constat de votre côté. Si vous n'avez rien reçu, le dire, et indiquer la date à laquelle vous avez demandé ces éléments."
        },
        {
          id: "retour",
          title: "Politique de retour communiquée",
          text: "CGV et information sur la garantie, remises avant l'achat. Si vous refusez un retour, le motif précis (délai dépassé, exception de l'article L. 221-28, bien conforme)."
        },
        {
          id: "echanges",
          title: "Fil de conversation",
          text: "Tous les messages du client et les vôtres, dans l'ordre, sans en retirer ceux qui vous sont défavorables."
        }
      ],
      letter: [
        "Le client conteste la conformité du bien ou sa conformité à la description. Nous joignons la fiche produit telle qu'elle était présentée, la preuve de livraison, et les échanges du service après-vente.",
        "Nous avons proposé, le [DATE DE L'OFFRE SAV], la réparation ou le remplacement, conformément à l'ordre des recours décrit par Service-Public au titre des articles L. 217-3 à L. 217-20. Suite donnée par le client : [RÉPONSE DU CLIENT OU « aucune »].",
        "Si une exception au droit de rétractation est invoquée (bien personnalisé, descellé pour hygiène, etc.), elle est jointe avec la preuve que le client en a été informé avant de commander. Sinon, cette phrase est à supprimer."
      ]
    },
    recurring: {
      needsPod: false,
      warnings: ["abonnement-code"],
      articles: ["L215-1-1", "D215-1", "L215-1", "L221-18", "L221-19", "L221-24"],
      notes: [],
      checklist: [
        {
          id: "accord",
          title: "Accord d'abonnement",
          text: "Page ou case montrant que le client a accepté un prélèvement récurrent : prix, périodicité, date de début, et lien vers les conditions."
        },
        {
          id: "parcours",
          title: "Parcours « résilier votre contrat »",
          text: "Capture du bouton accessible sans créer un compte au moment de la résiliation, de la page récapitulative et de l'accusé de réception. Depuis le 1er juin 2023, l'article L. 215-1-1 et l'article D. 215-1 encadrent cette fonctionnalité lorsque le contrat se conclut en ligne."
        },
        {
          id: "demande",
          title: "Demande de résiliation, ou son absence",
          text: "Date, canal et contenu de la demande. Si aucune demande n'existe avant le prélèvement contesté, le journal qui le montre."
        },
        {
          id: "effet",
          title: "Date d'effet et prélèvement contesté",
          text: "Date à laquelle l'abonnement devait s'arrêter, date du prélèvement contesté, et ce qui a été fourni pendant ce cycle (box expédiée ou accès ouvert)."
        },
        {
          id: "usage",
          title: "Usage après la date annoncée",
          text: "Si le service a continué d'être utilisé après la résiliation alléguée : dates de connexion, de téléchargement ou de commande. Ne rien inventer si vous n'avez pas ce journal."
        },
        {
          id: "info",
          title: "Information avant l'échéance",
          text: "Si le contrat se reconduit tacitement, copie de l'information envoyée entre trois mois et un mois avant le terme (article L. 215-1)."
        }
      ],
      letter: [
        "Le prélèvement contesté correspond à un abonnement. Le client l'a accepté le [DATE D'INSCRIPTION], aux conditions jointes.",
        "Demande de résiliation reçue le [DATE DE LA DEMANDE OU « aucune demande avant le prélèvement »], par [CANAL]. Accusé envoyé le [DATE DE L'ACCUSÉ]. Date de fin communiquée : [DATE DE FIN].",
        "Le prélèvement du [DATE DU PRÉLÈVEMENT] correspond au cycle pendant lequel [LA BOX A ÉTÉ REMISE / L'ACCÈS ÉTAIT OUVERT / RIEN N'A ÉTÉ FOURNI — garder une seule formule].",
        "La fonctionnalité de résiliation en ligne est décrite par les pièces jointes (mention « résilier votre contrat » ou formule équivalente, accès direct, accusé). Si cette fonctionnalité n'existait pas, ne pas l'affirmer : le dire clairement, le dossier est alors plus faible."
      ]
    },
    credit: {
      needsPod: false,
      warnings: ["remboursement-preuve"],
      articles: ["L221-24", "L221-21", "L216-7", "L241-4"],
      notes: [],
      checklist: [
        {
          id: "politique",
          title: "Politique de remboursement acceptée",
          text: "Extrait des CGV vu avant le paiement, et la case ou la page qui montre que le client a pu en prendre connaissance."
        },
        {
          id: "demande-remb",
          title: "Demande du client",
          text: "Date et texte de la demande de remboursement ou de la rétractation. Un colis renvoyé sans écrit ne suffit pas à prouver une rétractation (article L. 221-21, selon Service-Public)."
        },
        {
          id: "retour-recu",
          title: "Retour reçu, ou non",
          text: "Si un retour était attendu : preuve de réception à l'entrepôt, date et état du colis. Si le bien n'est pas revenu, le dire."
        },
        {
          id: "credit-emis",
          title: "Crédit déjà passé, ou refus motivé",
          text: "Si le remboursement a été émis : date, montant, moyen de paiement, référence de l'opération. S'il a été refusé : le motif écrit, envoyé au client avant le litige."
        },
        {
          id: "delai",
          title: "Délai de quatorze jours",
          text: "Après une rétractation, le remboursement est dû au plus tard quatorze jours après l'information du vendeur, avec la possibilité de l'attendre jusqu'au retour du bien (article L. 221-24). Après une résolution pour non-livraison, le délai de quatorze jours est celui de l'article L. 216-7 selon la fiche INC."
        }
      ],
      letter: [
        "Le client soutient qu'un remboursement promis n'a pas été porté sur sa carte.",
        "Demande reçue le [DATE]. Bien retourné le [DATE OU « non retourné »], reçu dans nos locaux le [DATE OU « non reçu »].",
        "Remboursement : [ÉMIS LE … RÉFÉRENCE … MONTANT … / REFUSÉ LE … MOTIF …]. Le moyen de paiement utilisé pour le remboursement est [LE MÊME QUE L'ACHAT / UN AUTRE, AVEC L'ACCORD DU CLIENT].",
        "Si aucun remboursement n'a été émis et qu'aucun motif écrit n'a été envoyé, ce modèle ne compense pas l'absence de pièce : envisager d'accepter le litige ou de rembourser."
      ]
    },
    cancelled: {
      needsPod: false,
      warnings: ["annulation-ecrite"],
      articles: ["L221-18", "L221-19", "L221-21", "L221-24", "L221-28"],
      notes: [],
      checklist: [
        {
          id: "info-retract",
          title: "Information sur la rétractation",
          text: "Preuve que le délai de 14 jours, le formulaire ou les modalités, et les exceptions éventuelles ont été communiqués avant la commande."
        },
        {
          id: "ecrit",
          title: "Écrit du client",
          text: "La déclaration de rétractation ou d'annulation, datée. Conserver aussi la preuve qu'aucun écrit n'est arrivé, si c'est le cas. Le renvoi seul ne vaut pas rétractation."
        },
        {
          id: "reception",
          title: "Date de réception du bien",
          text: "Elle fait partir le délai le lendemain (Service-Public, article L. 221-19). La joindre via la preuve de remise."
        },
        {
          id: "exception",
          title: "Exception, seulement si elle s'applique",
          text: "Bien nettement personnalisé, descellé pour hygiène, contenu numérique déjà exécuté avec renonciation, etc. (article L. 221-28). Joindre la caractéristique du produit et l'information préalable. Ne pas l'invoquer pour un choix de couleur dans une gamme standard."
        },
        {
          id: "remb",
          title: "État du remboursement",
          text: "Même pièces que pour un avoir non reçu : date, montant, référence, ou refus motivé."
        }
      ],
      letter: [
        "Le client soutient avoir annulé la commande ou renvoyé le bien, alors que le débit a été maintenu.",
        "Écrit d'annulation ou de rétractation : [DATE ET CANAL, OU « aucun écrit reçu »]. Réception du bien par le client : [DATE]. Réception du retour par la boutique : [DATE OU « retour non reçu »].",
        "Le délai de rétractation de 14 jours courait jusqu'au [DATE LIMITE]. Décision prise : [REMBOURSEMENT ÉMIS / REFUS, MOTIF].",
        "Toute exception au droit de rétractation invoquée est jointe. Si aucune exception ne s'applique, supprimer ce membre de phrase."
      ]
    }
  };

  var warnings = {
    "preuve-remise": {
      title: "Sans preuve de remise, le dossier est faible",
      text: "Le numéro de suivi ne montre pas que le client a le bien. Quand le transporteur est le vôtre, Service-Public indique que vous supportez la perte tant que vous ne prouvez pas la possession. Dans ce cas, accepter le litige ou rembourser est souvent plus sain que d'envoyer un dossier creux. C'est la banque du client qui décide, pas cet outil."
    },
    "suivi-insuffisant": {
      title: "« Livré » n'est pas une signature",
      text: "Le suivi transporteur et la preuve de remise sont deux pièces différentes. La seconde est celle qui compte pour un motif « non reçu »."
    },
    "code-large-4853": {
      title: "Le code 4853 est plus large que « non conforme »",
      text: "Stripe, sur sa page des preuves par motif, présente 4853 comme « Defective or Not As Described ». Le guide Mastercard et la page Stripe des catégories décrivent aussi 4853 comme le motif parapluie « Cardholder Dispute », qui peut couvrir un bien non fourni, un avoir, ou un abonnement, lorsque l'acquéreur n'utilise pas 4855, 4860 ou 4841. Lisez le récit du litige. S'il dit que le colis n'est pas arrivé, reprenez la checklist « non reçu »."
    },
    "conformite-dabord": {
      title: "Proposer d'abord réparation ou remplacement",
      text: "Un refus sec de remboursement, sans avoir proposé la réparation ou le remplacement, cadre mal avec la garantie légale telle que Service-Public la résume. Si vous ne l'avez pas fait, le modèle doit le dire, ou le dossier est faible."
    },
    "abonnement-code": {
      title: "Ce motif vise un prélèvement récurrent",
      text: "Visa 13.2 et Mastercard 4841 portent sur une transaction récurrente annulée, ou, pour 4841 chez Stripe, aussi sur certains biens numériques. Si la commande n'est pas un abonnement, vérifiez le code avant d'envoyer ce texte."
    },
    "remboursement-preuve": {
      title: "Le dossier tient sur l'opération de crédit",
      text: "Sans référence de remboursement, ou sans refus écrit envoyé au client, la banque n'a que l'affirmation du porteur. Ne pas inventer une référence."
    },
    "annulation-ecrite": {
      title: "Une annulation se prouve par un écrit",
      text: "Service-Public indique que le simple renvoi du colis ne vaut pas rétractation. À l'inverse, si l'écrit est dans le délai et qu'aucun remboursement n'est parti, le dossier marchand est faible."
    },
    "pas-abonnement": {
      title: "Vous avez indiqué « pas un abonnement »",
      text: "Le motif choisi est pourtant celui d'un prélèvement récurrent. Confirmez le code sur l'interface Shopify ou Stripe avant de copier ce modèle."
    },
    "abonnement-ajoute": {
      title: "Abonnement coché",
      text: "Des pièces sur la résiliation ont été ajoutées. Si ce débit n'est qu'un achat ponctuel, décochez « abonnement » pour ne pas mélanger les arguments."
    }
  };

  var subscriptionExtra = {
    checklist: [
      {
        id: "cycle",
        title: "Cycle d'abonnement contesté",
        text: "Isoler le prélèvement ou la box en cause : date, contenu expédié ou accès ouvert, et lien avec la commande Shopify ou le paiement Stripe."
      },
      {
        id: "resiliation-abo",
        title: "Résiliation séparée de la rétractation",
        text: "La rétractation de 14 jours et la résiliation d'un abonnement déjà en cours ne se prouvent pas de la même façon. Joindre la pièce qui correspond au récit du client."
      }
    ],
    articles: ["L215-1-1", "D215-1"],
    letter: "Cette commande est rattachée à un abonnement. Pièces jointes sur la résiliation : [CAPTURE DU PARCOURS], demande du [DATE], fin d'accès ou dernière box le [DATE]."
  };

  var reasons = [
    {
      id: "visa-13-1",
      network: "Visa",
      code: "13.1",
      official: "Merchandise/Services Not Received",
      plain: "Le client dit qu'il n'a pas reçu la commande",
      family: "not_received",
      stripe: "Stripe décrit le 13.1 ainsi : le porteur affirme que la marchandise ou le service commandé n'est pas arrivé à la date prévue, ou n'était pas disponible au retrait."
    },
    {
      id: "visa-13-2",
      network: "Visa",
      code: "13.2",
      official: "Cancelled Recurring Transaction",
      plain: "Le client dit avoir arrêté un abonnement, mais un prélèvement est passé",
      family: "recurring",
      stripe: "Stripe décrit le 13.2 comme un débit récurrent après annulation de l'abonnement ou de l'accord de paiement."
    },
    {
      id: "visa-13-3",
      network: "Visa",
      code: "13.3",
      official: "Not as Described or Defective Merchandise/Services",
      plain: "Le client dit que le produit n'est pas conforme, ou pas celui qui était décrit",
      family: "not_as_described",
      stripe: "Stripe décrit le 13.3 comme un bien ou un service matériellement différent de l'annonce, endommagé, défectueux, ou en deçà de ce que la description permettait d'attendre."
    },
    {
      id: "visa-13-6",
      network: "Visa",
      code: "13.6",
      official: "Credit Not Processed",
      plain: "Le client dit qu'un remboursement promis n'a pas été versé",
      family: "credit",
      stripe: "Stripe décrit le 13.6 comme un avoir ou un remboursement dû, non émis ou mal traité, alors qu'un retour ou une annulation a eu lieu."
    },
    {
      id: "visa-13-7",
      network: "Visa",
      code: "13.7",
      official: "Cancelled Merchandise/Services",
      plain: "Le client dit avoir annulé ou renvoyé, mais le débit est resté",
      family: "cancelled",
      stripe: "Stripe décrit le 13.7 comme une annulation de biens ou de services alors que le débit a quand même été fait. Visa, dans ses lignes directrices de juin 2024, titre cette condition « Cancelled Merchandise/Services »."
    },
    {
      id: "mc-4855",
      network: "Mastercard",
      code: "4855",
      official: "Goods or Services Not Provided",
      plain: "Le client dit qu'il n'a pas reçu le bien ou la prestation",
      family: "not_received",
      stripe: "Stripe, page des preuves par motif, décrit le 4855 comme un bien ou un service payé et non fourni. Des guides d'acquéreur indiquent que Mastercard prévoit de retirer à terme les codes 4841, 4855 et 4860 au profit du 4853. Le code peut donc encore apparaître tel quel sur Shopify ou Stripe."
    },
    {
      id: "mc-4853",
      network: "Mastercard",
      code: "4853",
      official: "Cardholder Dispute — souvent « non conforme »",
      plain: "Le client conteste le bien reçu : défaut, ou différence avec la description",
      family: "not_as_described",
      stripe: "Sur la page Stripe des preuves, 4853 est présenté comme « Defective or Not As Described ». Le guide Mastercard des marchands titre pourtant un motif « Cardholder Dispute » sous le code 4853. Lire l'avertissement affiché avec la checklist."
    },
    {
      id: "mc-4841",
      network: "Mastercard",
      code: "4841",
      official: "Canceled Recurring or Digital Goods Transactions",
      plain: "Le client dit avoir résilié un abonnement, ou conteste un bien numérique récurrent",
      family: "recurring",
      stripe: "Stripe décrit le 4841 comme un abonnement ou un bien numérique facturé après annulation, ou comme un débit récurrent non accepté. Le code est susceptible d'être basculé vers 4853 par Mastercard ; il apparaît encore chez les acquéreurs."
    },
    {
      id: "mc-4860",
      network: "Mastercard",
      code: "4860",
      official: "Credit Not Processed",
      plain: "Le client dit qu'un avoir n'a pas été passé sur sa carte",
      family: "credit",
      stripe: "Stripe décrit le 4860 comme un remboursement attendu et non traité : retour, annulation, débit en double qui devait être annulé, ou réservation annulée selon la politique affichée."
    }
  ];

  var sources = [
    {
      title: "Visa — Dispute Management Guidelines for Visa Merchants, juin 2024",
      url: "https://usa.visa.com/content/dam/VCOM/global/support-legal/documents/merchants-dispute-management-guidelines.pdf",
      note: "Sommaire consulté le 9 octobre 2026. Titres confirmés : 13.1 Merchandise/Services Not Received, 13.2 Cancelled Recurring Transaction, 13.3 Not as Described or Defective Merchandise/Services, 13.6 Credit Not Processed, 13.7 Cancelled Merchandise/Services. Le corps détaillé de chaque condition n'a pas été extrait du PDF : les phrases explicatives viennent de Stripe, pas d'une citation des Visa Core Rules."
    },
    {
      title: "Visa Core Rules — sommaire des Dispute Conditions 13.1 à 13.7",
      url: "https://usa.visa.com/dam/VCOM/download/about-visa/visa-rules-public.pdf",
      note: "Sommaire consulté le 9 octobre 2026. Même intitulé des conditions. Les numéros de page du sommaire (autour des pages 744 à 777) n'ont pas été relus dans le corps du document."
    },
    {
      title: "Stripe — preuves selon le motif",
      url: "https://docs.stripe.com/disputes/reason-codes-defense-requirements",
      note: "Page lue le 9 octobre 2026. Descriptions en langage courant des codes 13.1, 13.2, 13.3, 13.6, 13.7, 4855, 4853, 4841 et 4860 utilisées dans l'outil. Stripe rappelle que la banque du porteur décide."
    },
    {
      title: "Stripe — catégories et codes Mastercard",
      url: "https://docs.stripe.com/disputes/categories",
      note: "Consultée le 9 octobre 2026. Elle range 4860 en « credit not processed », 4841 en « subscription canceled », 4855 en « product not received », et place sous 4853 plusieurs sous-motifs, dont le défaut, le bien non fourni, l'avoir et l'abonnement."
    },
    {
      title: "Mastercard — Chargeback Guide, Merchant Edition",
      url: "https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/documents/chargeback-guide.pdf",
      note: "Sommaire consulté le 9 octobre 2026 : section « Cardholder Dispute Chargeback (Message Reason Code 4853/53/4850/4854) ». Le détail des anciens codes intra-européens 4855 et 4860 figure dans des éditions plus anciennes du guide, pas comme titre principal de cette édition."
    },
    {
      title: "Service-Public — livraison à distance (F10037)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F10037",
      note: "Vérifié le 5 septembre 2025 par la DILA. Articles cités par la fiche : L. 216-1 à L. 216-8, L. 221-15, L. 221-19, L. 241-4."
    },
    {
      title: "Service-Public — rétractation (F10485)",
      url: "https://www.service-public.fr/particuliers/vosdroits/F10485",
      note: "Vérifié le 1er janvier 2026. Articles cités par la fiche : L. 221-18 à L. 221-28, et nommément L. 221-20, L. 221-21, L. 221-23, L. 221-24, L. 221-25, L. 221-26, L. 221-27, L. 221-28, L. 242-1 à L. 242-4."
    },
    {
      title: "Service-Public — garantie légale de conformité (F11094)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11094",
      note: "Vérifié le 17 août 2026. Renvoie aux articles L. 217-3 à L. 217-20 sans détailler chaque numéro. Durée de 2 ans, présomption de 24 mois (neuf et reconditionné) ou 12 mois (occasion)."
    },
    {
      title: "Service-Public — résiliation en 3 clics (A16599)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A16599",
      note: "Publié le 7 juin 2023, mis à jour le 14 septembre 2023. La page elle-même signale qu'il s'agit d'un article ancien. Elle décrit les trois clics et cite la loi n° 2022-1158 et le décret n° 2023-417, pas le numéro L. 215-1-1."
    },
    {
      title: "INC — délivrance et transfert des risques, janvier 2022",
      url: "https://www.inc-conso.fr/sites/default/files/pdf/vi-delivrance-fourniture-transfert-risque_0.pdf",
      note: "Fiche de l'Institut national de la consommation. C'est elle qui place le transfert des risques à la possession physique à l'article L. 216-2, et le transporteur choisi par le client à l'article L. 216-3, après l'ordonnance n° 2021-1247."
    },
    {
      title: "Légifrance — ancien article L. 216-4 (jusqu'au 1er octobre 2021)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032226960/2020-09-14",
      note: "Version historique lue via l'index le 9 octobre 2026. Ne plus l'utiliser comme numéro actuel du transfert des risques."
    },
    {
      title: "Colissimo — API Documents v0.0.5",
      url: "https://www.colissimo.entreprise.laposte.fr/sites/default/files/2021-04/WS-Documents_FR.pdf",
      note: "Document de février 2021 cité par la spec du 9 octobre 2026. Types SIGNATURE et DELIVERY_CERTIFICATE. Conditions d'accès actuelles non revérifiées pour cette maquette."
    },
    {
      title: "Mondial Relay — suivi et manuel Connect",
      url: "https://www.mondialrelay.fr/media/52494/fr-documentation-utilisateur-connect-vdef.pdf",
      note: "La preuve de livraison est décrite dans l'interface Connect. L'API de suivi WSI2_TracingColisDetaille ne contient pas, dans les documents lus, de fichier de signature."
    },
    {
      title: "Chronopost — obtenir la preuve de livraison",
      url: "https://www.chronopost.fr/fr/faq/expediteur/comment-obtenir-la-preuve-de-livraison-de-mon-colis",
      note: "Page officielle citée par la spec du 9 octobre 2026 : espace client ou Chronotrace, PDF au plus tôt le lendemain pour la France."
    },
    {
      title: "Shopify — résoudre un chargeback",
      url: "https://help.shopify.com/en/manual/payments/chargebacks/resolve-chargeback",
      note: "Cité par la note de positionnement du 9 octobre 2026 : envoi automatique des données de commande, délai en général de 7 à 21 jours, PSP tiers hors Shopify. Page non rouverte pour cette maquette."
    },
    {
      title: "Note de positionnement Plaidoo",
      url: "",
      note: "Brouillon interne du 9 octobre 2026. Il fixe le ton, le nom et les phrases de la page. Il ne remplace pas les sources ci-dessus pour un numéro d'article ou un code de réseau."
    }
  ];

  root.PLAIDOO_CATALOG = {
    articles: articles,
    noteAncienArticle: noteAncienArticle,
    carriers: carriers,
    families: families,
    warnings: warnings,
    subscriptionExtra: subscriptionExtra,
    reasons: reasons,
    sources: sources
  };
})(window);
