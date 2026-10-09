/* Liste des sources, rendue depuis le catalogue. */
(function () {
  "use strict";

  var host = document.getElementById("liste-sources");
  if (!host || !window.PLAIDOO_CATALOG) return;
  var list = document.createElement("ol");
  list.className = "source-list";
  window.PLAIDOO_CATALOG.sources.forEach(function (source) {
    var item = document.createElement("li");
    var title = document.createElement("h2");
    if (source.url) {
      var link = document.createElement("a");
      link.href = source.url;
      link.textContent = source.title;
      title.appendChild(link);
    } else {
      title.textContent = source.title;
    }
    var note = document.createElement("p");
    note.textContent = source.note;
    item.appendChild(title);
    item.appendChild(note);
    list.appendChild(item);
  });
  host.appendChild(list);
})();
