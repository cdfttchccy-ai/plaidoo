/* Compteurs Abacus. L'échec reste silencieux et ne bloque ni la page, ni copier, ni imprimer. */
(function () {
  "use strict";

  var namespace = "plaidoo-cdfttchccy";
  var timeoutMs = 4000;

  function clear(timer) {
    if (timer) clearTimeout(timer);
  }

  function send(url, keepalive) {
    var opts = { method: "GET", mode: "cors", cache: "no-store" };
    if (keepalive) opts.keepalive = true;
    var timer = null;
    if (typeof AbortController === "function") {
      var controller = new AbortController();
      opts.signal = controller.signal;
      timer = setTimeout(function () {
        try { controller.abort(); } catch (error) {}
      }, timeoutMs);
    }
    fetch(url, opts).then(function () { clear(timer); }, function () { clear(timer); });
  }

  function hit(key) {
    if (!/^[A-Za-z0-9_.-]{3,64}$/.test(key || "")) return;
    var url = "https://abacus.jasoncameron.dev/hit/" + namespace + "/" + key;
    try {
      send(url, true);
    } catch (error) {
      try {
        send(url, false);
      } catch (again) {
        try {
          if (navigator.sendBeacon) navigator.sendBeacon(url);
        } catch (beaconError) {}
      }
    }
  }

  var current = document.currentScript && document.currentScript.getAttribute("data-counter");
  if (current) hit(current);
  window.PlaidooCount = { hit: hit };
})();
