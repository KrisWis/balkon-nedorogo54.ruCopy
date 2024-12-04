(() => {
  function e(t) {
    return (
      (e =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      e(t)
    );
  }
  var t = function () {
    (this.serverUrl = "https://whitesaas.com"),
      (this.staticServerUrl = "https://cdn.envybox.io"),
      (this.whiteSaasCode = window.whitesaas_code),
      (this.localStoragePrefix = "WhiteSaas_");
  };
  (t.prototype.init = function () {
    if (this.frameCheck()) {
      if ("object" === e(document.EW))
        return void console.log("zOnly one instance of EnvyWidget can be run");
      document.EW = this;
    } else {
      if ("object" === e(window.top.EW))
        return void console.log("Only one instance of EnvyWidget can be run");
      window.top.EW = this;
    }
    window.whitesaas_code || this.parseCode(),
      !window.whitesaas_code && (this.whiteSaasCode = window.whitesaas_code),
      this.removeOldValuesFromLocalStorage(),
      this.initSettings(),
      this.whiteSaasCode
        ? this.checkBot()
          ? console.log("bot")
          : (document.referrer &&
              "" != document.referrer &&
              !this.getLocalStorageItem("WhiteSaas_referrer") &&
              this.setLocalStorageItem(
                "WhiteSaas_referrer",
                document.referrer,
                60
              ),
            this.loadSettings(this))
        : console.log("whiteSaasCode required");
  }),
    (t.prototype.frameCheck = function () {
      try {
        return (
          window != window.top ||
          document != top.document ||
          window.location != top.location
        );
      } catch (e) {
        return !0;
      }
    }),
    (t.prototype.initSettings = function () {
      "object" === e(window.WBK_Settings) &&
        (window.WBK_Settings.serverUrl &&
          (this.serverUrl = window.WBK_Settings.serverUrl),
        window.WBK_Settings.staticServerUrl &&
          (this.staticServerUrl = window.WBK_Settings.staticServerUrl),
        window.WBK_Settings.whiteSaasCode &&
          (this.whiteSaasCode = window.WBK_Settings.whiteSaasCode));
    }),
    (t.prototype.loadSettings = function (e, t) {
      var o = e,
        n = o.serverUrl + "/api?";
      try {
        JSON.stringify ||
          void 0 === JSON.encode ||
          (JSON.stringify = JSON.encode),
          JSON.parse || void 0 === JSON.decode || (JSON.parse = JSON.decode);
      } catch (e) {}
      o.jsonp(n + o.getLoadParams(t), function (e) {
        o.scriptInit(e);
      });
    }),
    (t.prototype.scriptInit = function (t) {
      var o = t.Settings.widgetUrl;
      this.getScript(o, function () {
        var o = { whiteSaasCode: this.whiteSaasCode };
        "object" === e(window.WBK_Settings) &&
          jWS.extend(o, window.WBK_Settings),
          jWS().WBK(o, t);
      });
    }),
    (t.prototype.getLoadParams = function (e) {
      var t,
        o = "";
      document.URL && (o = encodeURIComponent(document.URL));
      try {
        t = navigator.platform;
      } catch (e) {}
      var n = this.getLocalStorageItem("WhiteSaas_referrer"),
        r = {
          action: "load",
          code: this.whiteSaasCode,
          url: o,
          referrer: n ? encodeURIComponent(n) : "",
          cookie: this.getAllCookies(),
          visit_count: this.getVisitCount(),
          visitorId:
            !!this.getCookie("WhiteCallback_visitorId") &&
            this.getCookie("WhiteCallback_visitorId"),
          platform: t,
          quizId: window.quizId ? window.quizId : null,
        };
      return this.param(r);
    }),
    (t.prototype.param = function (e) {
      var t = "";
      for (var o in e)
        e.hasOwnProperty(o) &&
          ("" != t && (t += "&"), (t += o + "=" + encodeURIComponent(e[o])));
      return t;
    }),
    (t.prototype.getCookie = function (e) {
      return new RegExp("(?:; )?" + e + "=([^;]*);?").test(document.cookie)
        ? decodeURIComponent(RegExp.$1)
        : null;
    }),
    (t.prototype.jsonp = function (e, t) {
      var o = "jsonp_callback_" + Math.round(1e5 * Math.random());
      window[o] = function (e) {
        delete window[o], document.body.removeChild(n), t(e);
      };
      var n = document.createElement("script");
      (n.src = e + (e.indexOf("?") >= 0 ? "&" : "?") + "callback=" + o),
        document.body.appendChild(n);
    }),
    (t.prototype.getScript = function (e, t) {
      var o = document.createElement("script");
      (o.onload = t),
        (o.src = e),
        (o.charset = "utf-8"),
        document.body.appendChild(o);
    }),
    (t.prototype.getAllCookies = function () {
      for (
        var e = document.cookie.split("; "), t = [], o = 0;
        o < e.length;
        o++
      )
        if ("string" == typeof e[o])
          if (
            0 === e[o].search(/WhiteCallback_openedpage/) ||
            0 === e[o].search(/sw_openedpage/)
          );
          else {
            var n = e[o];
            t.push(n.substring(0, 64));
          }
      return t.join("; ");
    }),
    (t.prototype.getVisitCount = function () {
      return parseInt(this.getStorage("ws_visit_count"))
        ? parseInt(this.getStorage("ws_visit_count"))
        : 0;
    }),
    (t.prototype.checkBot = function () {
      if (/mtproxy\.yandex\.net/.test(document.URL)) return !0;
      try {
        if (/webvisor\.com/.test(window.parent.location.hostname)) return !0;
      } catch (e) {}
      return !1;
    }),
    (t.prototype.parseQuery = function (e) {
      var t = new Object();
      if (!e) return t;
      for (var o = e.split(/[;&]/), n = 0; n < o.length; n++) {
        var r = o[n].split("=");
        if (r && 2 === r.length) {
          var i = unescape(r[0]),
            a = unescape(r[1]);
          (a = a.replace(/\+/g, " ")), (t[i] = a);
        }
      }
      return t;
    }),
    (t.prototype.parseCode = function () {
      for (
        var e = document.getElementsByTagName("script"), t = e.length;
        t--;
        t >= 0
      )
        if (!window.whitesaas_code) {
          var o = e[t];
          if (void 0 === o.src) continue;
          var n = o.src.replace(/^[^\?]+\??/, ""),
            r = this.parseQuery(n);
          r.wcb_code
            ? ((window.whitesaas_no_maps = null !== o.getAttribute("nomaps")),
              (window.whitesaas_no_cookie_page =
                null !== o.getAttribute("nopagesettings") ||
                null !== r.nopagesettings),
              (window.whitesaas_code = r.wcb_code))
            : r.cbk_code &&
              ((window.whitesaas_no_maps = null !== o.getAttribute("nomaps")),
              (window.whitesaas_no_cookie_page =
                null !== o.getAttribute("nopagesettings") ||
                null !== r.nopagesettings),
              (window.whitesaas_code = r.cbk_code));
        }
    }),
    (t.prototype.getJSON = function (e, t, o, n) {
      t && (e = e + "?" + this.objectToUrl(t));
      var r = new XMLHttpRequest();
      (r.onload = function () {
        var e = null;
        if (r.response) {
          e = r.response;
          var i = new RegExp("^" + t.callback + "\\(");
          (e = (e = e.replace(i, "")).replace(/.{2}$/, "")),
            (e = JSON.parse(e));
        }
        o && "function" == typeof o && o(e),
          200 !== r.status && n && "function" == typeof n && n(e);
      }),
        r.open("GET", e, !0),
        r.send();
    }),
    (t.prototype.setCookie = function (e, t, o, n, r, i) {
      if (!e || !t) return !1;
      n || (n = "/");
      var a = e + "=" + encodeURIComponent(t);
      return (
        o && (a += "; expires=" + o.toGMTString()),
        n && (a += "; path=" + n),
        r && (a += "; domain=" + r),
        i && (a += "; secure"),
        (document.cookie = a),
        !0
      );
    }),
    (t.prototype.getStorage = function (e) {
      return this.isLocalStorageNameSupported()
        ? localStorage.getItem(e)
        : this.getCookie(e);
    }),
    (t.prototype.isLocalStorageNameSupported = function () {
      var e = "test_localstorage";
      try {
        return (
          window.localStorage.setItem(e, 1),
          window.localStorage.removeItem(e),
          !0
        );
      } catch (e) {
        return !1;
      }
    }),
    (t.prototype.objectToUrl = function (e) {
      var t = "";
      for (var o in e)
        e.hasOwnProperty(o) &&
          e[o] &&
          ("" != t && (t += "&"), (t += o + "=" + encodeURIComponent(e[o])));
      return t;
    }),
    (t.prototype.removeOldValuesFromLocalStorage = function () {
      var e = new RegExp("^" + this.localStoragePrefix, "i");
      for (var t in localStorage)
        e.exec(t) &&
          this.getLocalStorageItem(t.replace(this.localStoragePrefix, ""));
    }),
    (t.prototype.getLocalStorageItem = function (e) {
      var t = JSON.parse(localStorage.getItem(this.localStoragePrefix + e));
      return t
        ? t.expiration < new Date().getTime()
          ? (localStorage.removeItem(this.localStoragePrefix + e), null)
          : t.value
        : null;
    }),
    (t.prototype.setLocalStorageItem = function (e, t, o) {
      var n = { value: t, expiration: new Date().getTime() + 60 * o * 1e3 };
      localStorage.setItem(this.localStoragePrefix + e, JSON.stringify(n));
    });
  var o = new t();
  "loading" !== document.readyState
    ? o.init()
    : document.addEventListener("DOMContentLoaded", function () {
        o.init();
      });
})();
