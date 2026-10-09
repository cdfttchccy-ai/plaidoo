/* Liste d'attente non ouverte : aucun envoi, aucun stockage.
   La page ne contient pas de formulaire. Si un formulaire réapparaît, il ne part pas. */
(function () {
  "use strict";

  var forms = document.querySelectorAll("form");
  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = form.querySelector("[data-waitlist-status]");
      if (status) {
        status.textContent = "La liste d'attente ouvre bientôt, aucune donnée n'est enregistrée.";
      }
    });
  });
})();
