!(function (e) {
  "use strict";
  var r = 0;
  function t() {
    var e;
    e =
      "https://cdn.iubenda.com/cookie_solution/iubenda_cs/1.44.8/core-" +
      _iub.csConfiguration.lang +
      ".js";
    var o = document.querySelector('script[src="' + e + '"]');
    if (!o) {
      o = document.createElement("script");
      var c = document.querySelector("script");
      (o.src = e),
        o.addEventListener("error", function () {
          ++r < 5 && (o.parentNode.removeChild(o), setTimeout(t, 10));
        }),
        c.parentNode.insertBefore(o, c);
    }
  }
  _iub.invTcfC = Date.now() - 31104e6;
  (_iub.csConfigLegacy = !1),
    (_iub.GVL2 = _iub.GVL2 || 180),
    t(),
    (e.loadCore = t),
    Object.defineProperty(e, "__esModule", { value: !0 });
})({});
