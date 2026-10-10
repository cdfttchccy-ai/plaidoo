/* Affiche le dossier. Le texte reste local. Copier ou imprimer envoie seulement le compteur lettre-generee. */
(function () {
  "use strict";

  var formHost = document.getElementById("outil-form");
  var output = document.getElementById("dossier");
  if (!formHost || !output || !window.PLAIDOO_CATALOG || !window.PlaidooLogic) return;

  var catalog = window.PLAIDOO_CATALOG;
  var state = { reasonId: "", carrierId: "", subscription: null };

  formHost.appendChild(buildForm());
  render();

  function buildForm() {
    var form = document.createElement("form");
    form.id = "dossier-form";
    form.setAttribute("action", "#");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var heading = document.getElementById("dossier-titre");
      if (heading) heading.focus();
    });

    form.appendChild(reasonFieldset("Visa"));
    form.appendChild(reasonFieldset("Mastercard"));
    form.appendChild(carrierFieldset());
    form.appendChild(subscriptionFieldset());

    var submit = document.createElement("button");
    submit.type = "submit";
    submit.className = "button button-primary";
    submit.textContent = "Afficher le dossier";
    form.appendChild(submit);

    var hint = document.createElement("p");
    hint.className = "fine-print";
    hint.textContent = "Le dossier se met à jour dans la page. Le texte n'est pas envoyé.";
    form.appendChild(hint);
    return form;
  }

  function reasonFieldset(network) {
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = network;
    fieldset.appendChild(legend);

    catalog.reasons.filter(function (reason) {
      return reason.network === network;
    }).forEach(function (reason) {
      fieldset.appendChild(choice({
        name: "reason",
        value: reason.id,
        badge: reason.code,
        title: reason.plain,
        meta: reason.official
      }, function () {
        state.reasonId = reason.id;
        render();
      }));
    });
    return fieldset;
  }

  function carrierFieldset() {
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = "Transporteur";
    fieldset.appendChild(legend);
    catalog.carriers.forEach(function (carrier) {
      fieldset.appendChild(choice({
        name: "carrier",
        value: carrier.id,
        title: carrier.label
      }, function () {
        state.carrierId = carrier.id;
        render();
      }));
    });
    return fieldset;
  }

  function subscriptionFieldset() {
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = "Abonnement";
    fieldset.appendChild(legend);
    [
      { value: "yes", title: "Oui, c'est un abonnement ou une box" },
      { value: "no", title: "Non, achat ponctuel" }
    ].forEach(function (option) {
      fieldset.appendChild(choice({
        name: "subscription",
        value: option.value,
        title: option.title
      }, function () {
        state.subscription = option.value === "yes";
        render();
      }));
    });
    return fieldset;
  }

  function choice(spec, onSelect) {
    var label = document.createElement("label");
    label.className = "choice";
    var input = document.createElement("input");
    input.type = "radio";
    input.name = spec.name;
    input.value = spec.value;
    input.addEventListener("change", onSelect);
    label.appendChild(input);
    var body = document.createElement("span");
    body.className = "choice-body";
    if (spec.badge) {
      var badge = document.createElement("span");
      badge.className = "code";
      badge.textContent = spec.badge;
      body.appendChild(badge);
    }
    var title = document.createElement("span");
    title.className = "choice-title";
    title.textContent = spec.title;
    body.appendChild(title);
    if (spec.meta) {
      var meta = document.createElement("span");
      meta.className = "choice-meta";
      meta.textContent = spec.meta;
      body.appendChild(meta);
    }
    label.appendChild(body);
    return label;
  }

  function legalNotice() {
    var note = document.createElement("p");
    note.className = "disclaimer disclaimer-banner";
    note.setAttribute("role", "note");
    var strong = document.createElement("strong");
    strong.textContent = "Ceci n'est pas un conseil juridique.";
    note.appendChild(strong);
    note.appendChild(document.createTextNode(" Information générale. Les textes sont des modèles à trous, à relire avant tout envoi."));
    return note;
  }

  function render() {
    output.replaceChildren();
    output.appendChild(legalNotice());
    if (!state.reasonId || !state.carrierId || state.subscription === null) {
      output.appendChild(emptyState());
      return;
    }
    var pack = window.PlaidooLogic.buildPack(
      catalog,
      state.reasonId,
      state.carrierId,
      state.subscription
    );
    if (!pack.ok) {
      var err = document.createElement("p");
      err.className = "warning";
      err.textContent = pack.error;
      output.appendChild(err);
      return;
    }
    output.appendChild(renderPack(pack));
  }

  function emptyState() {
    var box = document.createElement("div");
    box.className = "empty";
    var title = document.createElement("h2");
    title.id = "dossier-titre";
    title.tabIndex = -1;
    title.textContent = "Le dossier s'affichera ici";
    var text = document.createElement("p");
    text.textContent = "Choisissez un motif, le transporteur, puis dites si la commande est un abonnement. Trois réponses suffisent.";
    box.appendChild(title);
    box.appendChild(text);
    return box;
  }

  function renderPack(pack) {
    var root = document.createElement("div");
    var title = document.createElement("h2");
    title.id = "dossier-titre";
    title.tabIndex = -1;
    title.textContent = pack.reason.network + " " + pack.reason.code;
    root.appendChild(title);

    var plain = document.createElement("p");
    plain.className = "lead";
    plain.textContent = pack.reason.plain + ".";
    root.appendChild(plain);

    var official = document.createElement("p");
    official.className = "fine-print";
    official.textContent = "Intitulé réseau : " + pack.reason.official + ". " + pack.reason.stripe;
    root.appendChild(official);
    if (pack.reason.cites && pack.reason.cites.length) {
      var cites = document.createElement("p");
      cites.className = "fine-print";
      cites.appendChild(document.createTextNode("Sources de cette phrase : "));
      pack.reason.cites.forEach(function (item, index) {
        if (index) cites.appendChild(document.createTextNode(" · "));
        var link = document.createElement("a");
        link.href = item.url;
        link.rel = "noopener";
        link.textContent = item.label;
        cites.appendChild(link);
      });
      root.appendChild(cites);
    }

    pack.warnings.forEach(function (warning) {
      root.appendChild(callout(warning.title, warning.text));
    });

    root.appendChild(section("Preuves à rassembler", renderChecklist(pack.checklist)));
    root.appendChild(section("Articles à citer, avec prudence", renderArticles(pack.articles)));
    root.appendChild(section("Modèle de contestation", renderLetter(pack.letter)));
    return root;
  }

  function section(label, node) {
    var wrap = document.createElement("section");
    wrap.className = "dossier-block";
    var heading = document.createElement("h3");
    heading.textContent = label;
    wrap.appendChild(heading);
    wrap.appendChild(node);
    return wrap;
  }

  function callout(title, text) {
    var box = document.createElement("aside");
    box.className = "warning";
    var heading = document.createElement("h3");
    heading.textContent = title;
    var paragraph = document.createElement("p");
    paragraph.textContent = text;
    box.appendChild(heading);
    box.appendChild(paragraph);
    return box;
  }

  function renderChecklist(items) {
    var list = document.createElement("ul");
    list.className = "checklist";
    items.forEach(function (item, index) {
      var li = document.createElement("li");
      var id = "piece-" + index;
      var input = document.createElement("input");
      input.type = "checkbox";
      input.id = id;
      var label = document.createElement("label");
      label.setAttribute("for", id);
      var strong = document.createElement("strong");
      strong.textContent = item.title;
      label.appendChild(strong);
      if (item.decisive) {
        var flag = document.createElement("span");
        flag.className = "flag";
        flag.textContent = "Décisive";
        label.appendChild(flag);
      }
      var detail = document.createElement("span");
      detail.className = "check-detail";
      detail.textContent = item.text;
      label.appendChild(detail);
      li.appendChild(input);
      li.appendChild(label);
      list.appendChild(li);
    });
    return list;
  }

  function renderArticles(articles) {
    var list = document.createElement("ol");
    list.className = "articles";
    articles.forEach(function (article) {
      var li = document.createElement("li");
      var heading = document.createElement("h4");
      heading.textContent = article.id.replace("L217-bloc", "L. 217-3 à L. 217-20").replace("note-ancien-L216-4", "Ancien L. 216-4") + " — " + article.title;
      var text = document.createElement("p");
      text.textContent = article.text;
      var source = document.createElement("p");
      source.className = "fine-print";
      source.textContent = "Fiabilité : " + article.confidence + ". " + article.source;
      if (article.url) {
        source.appendChild(document.createTextNode(" "));
        var link = document.createElement("a");
        link.href = article.url;
        link.textContent = "Source";
        source.appendChild(link);
      }
      li.appendChild(heading);
      li.appendChild(text);
      li.appendChild(source);
      list.appendChild(li);
    });
    return list;
  }

  function renderLetter(letter) {
    var wrap = document.createElement("div");
    var actions = document.createElement("div");
    actions.className = "row-actions no-print";
    var copy = document.createElement("button");
    copy.type = "button";
    copy.className = "button";
    copy.textContent = "Copier le texte";
    var print = document.createElement("button");
    print.type = "button";
    print.className = "button";
    print.textContent = "Imprimer";
    var status = document.createElement("p");
    status.className = "fine-print";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    copy.addEventListener("click", function () {
      countGeneratedLetter();
      copyLetter(letter, status);
    });
    print.addEventListener("click", function () {
      countGeneratedLetter();
      window.print();
    });
    actions.appendChild(copy);
    actions.appendChild(print);
    actions.appendChild(status);

    var pre = document.createElement("pre");
    pre.id = "lettre";
    pre.className = "letter";
    pre.textContent = letter;
    wrap.appendChild(actions);
    wrap.appendChild(pre);
    return wrap;
  }

  function countGeneratedLetter() {
    try {
      if (window.PlaidooCount) window.PlaidooCount.hit("lettre-generee");
    } catch (error) {}
  }

  function copyLetter(letter, status) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(letter).then(function () {
        status.textContent = "Texte copié dans le presse-papiers de cet appareil.";
      }).catch(function () {
        fallbackCopy(letter, status);
      });
      return;
    }
    fallbackCopy(letter, status);
  }

  function fallbackCopy(letter, status) {
    var area = document.createElement("textarea");
    area.value = letter;
    area.setAttribute("readonly", "readonly");
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (error) {
      ok = false;
    }
    document.body.removeChild(area);
    status.textContent = ok
      ? "Texte copié dans le presse-papiers de cet appareil."
      : "La copie automatique a échoué. Sélectionnez le texte de la lettre à la main.";
  }
})();
