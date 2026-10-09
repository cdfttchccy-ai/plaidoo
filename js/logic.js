/* Assemble checklist, articles and letter from the catalog. No network. */
(function (root) {
  "use strict";

  function findById(list, id) {
    for (var i = 0; i < list.length; i += 1) {
      if (list[i].id === id) return list[i];
    }
    return null;
  }

  function cloneItem(item) {
    return {
      id: item.id,
      title: item.title,
      text: item.text,
      decisive: Boolean(item.decisive)
    };
  }

  function uniquePush(list, value) {
    if (list.indexOf(value) === -1) list.push(value);
  }

  function buildPack(catalog, reasonId, carrierId, subscription) {
    if (!catalog) {
      return { ok: false, error: "Catalogue absent." };
    }
    var reason = findById(catalog.reasons, reasonId);
    var carrier = findById(catalog.carriers, carrierId);
    if (!reason || !carrier) {
      return { ok: false, error: "Motif ou transporteur inconnu." };
    }
    var family = catalog.families[reason.family];
    if (!family) {
      return { ok: false, error: "Famille de motif inconnue." };
    }

    var checklist = family.checklist.map(cloneItem);
    if (family.needsPod) {
      checklist.unshift({
        id: "pod-" + carrier.id,
        title: carrier.pod.title,
        text: carrier.pod.text,
        decisive: true
      });
    } else {
      checklist.push({
        id: "carrier-context-" + carrier.id,
        title: "Transporteur : " + carrier.label,
        text: carrier.letterHint + " " + carrier.pod.text,
        decisive: false
      });
    }

    var articleIds = family.articles.slice();
    var warningIds = family.warnings.slice();

    if (subscription) {
      catalog.subscriptionExtra.checklist.forEach(function (item) {
        checklist.push(cloneItem(item));
      });
      catalog.subscriptionExtra.articles.forEach(function (id) {
        uniquePush(articleIds, id);
      });
      if (reason.family !== "recurring") {
        warningIds.push("abonnement-ajoute");
      }
    } else if (reason.family === "recurring") {
      warningIds.push("pas-abonnement");
    }

    var articles = [];
    articleIds.forEach(function (id) {
      var article = catalog.articles[id];
      if (article) articles.push(article);
    });
    (family.notes || []).forEach(function (id) {
      if (id === "note-ancien-L216-4") articles.push(catalog.noteAncienArticle);
    });

    var warnings = warningIds.map(function (id) {
      return catalog.warnings[id];
    }).filter(Boolean);

    var letter = buildLetter(reason, carrier, family, checklist, subscription, catalog);

    return {
      ok: true,
      reason: reason,
      carrier: carrier,
      subscription: Boolean(subscription),
      checklist: checklist,
      articles: articles,
      warnings: warnings,
      letter: letter
    };
  }

  function buildLetter(reason, carrier, family, checklist, subscription, catalog) {
    var lines = [];
    lines.push("Objet : contestation du litige [RÉFÉRENCE DU LITIGE] — " + reason.network + " " + reason.code + " — commande [N° COMMANDE]");
    lines.push("");
    lines.push("Madame, Monsieur,");
    lines.push("");
    lines.push("Je soussigné(e) [PRÉNOM ET NOM], pour la boutique [NOM DE LA BOUTIQUE] ([URL DE LA BOUTIQUE]), conteste le litige ouvert le [DATE D'OUVERTURE] sur la transaction de [MONTANT] [DEVISE].");
    lines.push("");
    lines.push("Commande [N° COMMANDE] du [DATE DE COMMANDE], au nom de [NOM DU CLIENT], e-mail [E-MAIL DU CLIENT].");
    lines.push("Motif indiqué par le réseau : " + reason.network + " " + reason.code + " — " + reason.official + ".");
    lines.push("En langage clair : " + reason.plain + ".");
    lines.push("");
    family.letter.forEach(function (paragraph) {
      lines.push(paragraph);
      lines.push("");
    });
    lines.push("Transporteur : " + carrier.label + ". Numéro de suivi : [N° DE SUIVI]. " + carrier.letterHint);
    lines.push("");
    if (subscription) {
      lines.push(catalog.subscriptionExtra.letter);
      lines.push("");
    }
    lines.push("Pièces que nous joignons, ou que nous devrions joindre :");
    checklist.forEach(function (item) {
      var mark = item.decisive ? " (pièce décisive)" : "";
      lines.push("– " + item.title + mark);
    });
    lines.push("");
    lines.push("Articles du code de la consommation mentionnés seulement s'ils correspondent aux faits : voir la liste produite avec ce modèle. Les numéros marqués comme non relus sur Légifrance ne doivent pas être présentés comme une citation officielle certifiée.");
    lines.push("");
    lines.push("La décision appartient à la banque du client. Ce texte est un modèle à trous. Ce n'est pas un conseil juridique. Chez Stripe, une réponse envoyée ne se modifie en principe plus : relire avant de coller ce texte dans l'interface du prestataire de paiement.");
    lines.push("");
    lines.push("Fait à [VILLE], le [DATE].");
    lines.push("[PRÉNOM ET NOM]");
    lines.push("[FONCTION]");
    return lines.join("\n");
  }

  root.PlaidooLogic = { buildPack: buildPack };
})(window);
