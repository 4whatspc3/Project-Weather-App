/*! For license information please see app.bundle.js.LICENSE.txt */
(() => {
  "use strict";
  var t = {
      890: (t, n, e) => {
        e.d(n, { Z: () => c });
        var r = e(537),
          o = e.n(r),
          a = e(645),
          i = e.n(a)()(o());
        i.push([
          t.id,
          "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);",
        ]),
          i.push([
            t.id,
            '/*code here*/\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  font-family: "Roboto", system-ui, "Segoe UI", Helvetica, Arial, sans-serif,\n    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  background: rgb(34, 193, 195);\n  background: linear-gradient(\n    0deg,\n    rgba(34, 193, 195, 1) 0%,\n    rgba(86, 142, 191, 1) 100%\n  );\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 40px;\n  padding: 10px;\n  background-color: #00000080;\n  color: #fff;\n  border-radius: 10px;\n}\n\n.search-box {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n\nform input,\nform button {\n  padding: 15px 20px;\n  border: 1px solid #000000;\n  border-radius: 5px;\n  background-color: #e5e5ff;\n}\n\nform button {\n  padding: 15px 10px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #e5e5ff;\n  background: rgb(34, 193, 195);\n  background: linear-gradient(\n    0deg,\n    rgba(34, 193, 195, 1) 0%,\n    rgba(86, 142, 191, 1) 50%\n  );\n}\n\nform button:hover {\n  background: rgb(34, 193, 195);\n  background: linear-gradient(\n    180deg,\n    rgba(34, 193, 195, 1) 0%,\n    rgba(86, 142, 191, 1) 100%\n  );\n}\n\nform input:focus {\n  padding: 7px 10px;\n}\n\n.currentWeather {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n}\n\n.forecastContainer {\n  display: flex;\n  justify-content: left;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n',
            "",
            {
              version: 3,
              sources: ["webpack://./src/styles/style.css"],
              names: [],
              mappings:
                "AAAA,YAAY;AACZ;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAIA;;EAEE,YAAY;EACZ;4DAC0D;AAC5D;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,6BAA6B;EAC7B;;;;GAIC;AACH;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,2BAA2B;EAC3B,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,yBAAyB;AAC3B;;AAEA;;EAEE,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,6BAA6B;EAC7B;;;;GAIC;AACH;;AAEA;EACE,6BAA6B;EAC7B;;;;GAIC;AACH;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,SAAS;EACT,eAAe;AACjB",
              sourcesContent: [
                '/*code here*/\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");\n\nhtml,\nbody {\n  height: 100%;\n  font-family: "Roboto", system-ui, "Segoe UI", Helvetica, Arial, sans-serif,\n    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  background: rgb(34, 193, 195);\n  background: linear-gradient(\n    0deg,\n    rgba(34, 193, 195, 1) 0%,\n    rgba(86, 142, 191, 1) 100%\n  );\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 40px;\n  padding: 10px;\n  background-color: #00000080;\n  color: #fff;\n  border-radius: 10px;\n}\n\n.search-box {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n\nform input,\nform button {\n  padding: 15px 20px;\n  border: 1px solid #000000;\n  border-radius: 5px;\n  background-color: #e5e5ff;\n}\n\nform button {\n  padding: 15px 10px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #e5e5ff;\n  background: rgb(34, 193, 195);\n  background: linear-gradient(\n    0deg,\n    rgba(34, 193, 195, 1) 0%,\n    rgba(86, 142, 191, 1) 50%\n  );\n}\n\nform button:hover {\n  background: rgb(34, 193, 195);\n  background: linear-gradient(\n    180deg,\n    rgba(34, 193, 195, 1) 0%,\n    rgba(86, 142, 191, 1) 100%\n  );\n}\n\nform input:focus {\n  padding: 7px 10px;\n}\n\n.currentWeather {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n}\n\n.forecastContainer {\n  display: flex;\n  justify-content: left;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n',
              ],
              sourceRoot: "",
            },
          ]);
        const c = i;
      },
      526: (t, n, e) => {
        e.d(n, { Z: () => c });
        var r = e(537),
          o = e.n(r),
          a = e(645),
          i = e.n(a)()(o());
        i.push([
          t.id,
          ".mainInfo {\n  flex: 1;\n  max-width: 300px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 20px;\n}\n\n.locationData {\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.currentWeather .cloudsData {\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.currentWeather .temp-info {\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n}\n\n.currentWeather .temp-info p:first-child {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.currentWeather .tempData {\n  font-size: 8rem;\n  font-weight: bold;\n}\n\n.mainButton {\n  flex: 1;\n  padding-top: 6%;\n  max-width: 100px;\n}\n\n.btnTemp {\n  border: 1px solid #000000;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  font-size: 24px;\n  font-weight: bold;\n  text-align: center;\n  color: #e5e5ff;\n  background: rgb(34, 193, 195);\n  background: linear-gradient(\n    0deg,\n    rgba(34, 193, 195, 1) 0%,\n    rgba(86, 142, 191, 1) 50%\n  );\n  z-index: 1;\n}\n\n.btnTemp:hover {\n  background: rgb(34, 193, 195);\n  background: linear-gradient(\n    180deg,\n    rgba(34, 193, 195, 1) 0%,\n    rgba(86, 142, 191, 1) 100%\n  );\n}\n\n.minorInfo {\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 40px;\n}\n\n.currentWeather .date-time-info p {\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.currentWeather .feels-info,\n.currentWeather .chanceOfRain-info,\n.currentWeather .humidity-info,\n.currentWeather .windSpeed-info {\n  font-size: 16px;\n  font-weight: 400;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/styles/style_CW.css"],
            names: [],
            mappings:
              "AAAA;EACE,OAAO;EACP,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,2BAA2B;EAC3B,SAAS;AACX;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,OAAO;EACP,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;EACd,6BAA6B;EAC7B;;;;GAIC;EACD,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B;;;;GAIC;AACH;;AAEA;EACE,OAAO;EACP,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,2BAA2B;EAC3B,SAAS;AACX;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;;;;EAIE,eAAe;EACf,gBAAgB;AAClB",
            sourcesContent: [
              ".mainInfo {\n  flex: 1;\n  max-width: 300px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 20px;\n}\n\n.locationData {\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.currentWeather .cloudsData {\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.currentWeather .temp-info {\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n}\n\n.currentWeather .temp-info p:first-child {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.currentWeather .tempData {\n  font-size: 8rem;\n  font-weight: bold;\n}\n\n.mainButton {\n  flex: 1;\n  padding-top: 6%;\n  max-width: 100px;\n}\n\n.btnTemp {\n  border: 1px solid #000000;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  font-size: 24px;\n  font-weight: bold;\n  text-align: center;\n  color: #e5e5ff;\n  background: rgb(34, 193, 195);\n  background: linear-gradient(\n    0deg,\n    rgba(34, 193, 195, 1) 0%,\n    rgba(86, 142, 191, 1) 50%\n  );\n  z-index: 1;\n}\n\n.btnTemp:hover {\n  background: rgb(34, 193, 195);\n  background: linear-gradient(\n    180deg,\n    rgba(34, 193, 195, 1) 0%,\n    rgba(86, 142, 191, 1) 100%\n  );\n}\n\n.minorInfo {\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 40px;\n}\n\n.currentWeather .date-time-info p {\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.currentWeather .feels-info,\n.currentWeather .chanceOfRain-info,\n.currentWeather .humidity-info,\n.currentWeather .windSpeed-info {\n  font-size: 16px;\n  font-weight: 400;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const c = i;
      },
      485: (t, n, e) => {
        e.d(n, { Z: () => c });
        var r = e(537),
          o = e.n(r),
          a = e(645),
          i = e.n(a)()(o());
        i.push([
          t.id,
          ".forecastContainer > div {\n  border: 1px solid #000000;\n  border-radius: 10px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n}\n\n.forecastContainer .date-time-info p {\n  font-size: 14px;\n  font-weight: 300;\n}\n\n.forecastContainer .cloudsData {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.forecastContainer .chanceOfRain-info p,\n.forecastContainer .temp-info p {\n  text-align: center;\n}\n\n.forecastContainer .chanceOfRain-info p:first-child {\n  font-size: 14px;\n  font-weight: 300;\n}\n\n.forecastContainer .temp-info p:first-child {\n  font-size: 14px;\n  font-weight: 300;\n}\n\n.forecastContainer .tempData {\n  font-size: 18px;\n  font-weight: bold;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/styles/style_FW.css"],
            names: [],
            mappings:
              "AAAA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB",
            sourcesContent: [
              ".forecastContainer > div {\n  border: 1px solid #000000;\n  border-radius: 10px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n}\n\n.forecastContainer .date-time-info p {\n  font-size: 14px;\n  font-weight: 300;\n}\n\n.forecastContainer .cloudsData {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.forecastContainer .chanceOfRain-info p,\n.forecastContainer .temp-info p {\n  text-align: center;\n}\n\n.forecastContainer .chanceOfRain-info p:first-child {\n  font-size: 14px;\n  font-weight: 300;\n}\n\n.forecastContainer .temp-info p:first-child {\n  font-size: 14px;\n  font-weight: 300;\n}\n\n.forecastContainer .tempData {\n  font-size: 18px;\n  font-weight: bold;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const c = i;
      },
      645: (t) => {
        t.exports = function (t) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var e = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (e += "@supports (".concat(n[4], ") {")),
                  n[2] && (e += "@media ".concat(n[2], " {")),
                  r &&
                    (e += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {",
                    )),
                  (e += t(n)),
                  r && (e += "}"),
                  n[2] && (e += "}"),
                  n[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (n.i = function (t, e, r, o, a) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0];
                  null != u && (i[u] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var f = [].concat(t[s]);
                (r && i[f[0]]) ||
                  (void 0 !== a &&
                    (void 0 === f[5] ||
                      (f[1] = "@layer"
                        .concat(f[5].length > 0 ? " ".concat(f[5]) : "", " {")
                        .concat(f[1], "}")),
                    (f[5] = a)),
                  e &&
                    (f[2]
                      ? ((f[1] = "@media "
                          .concat(f[2], " {")
                          .concat(f[1], "}")),
                        (f[2] = e))
                      : (f[2] = e)),
                  o &&
                    (f[4]
                      ? ((f[1] = "@supports ("
                          .concat(f[4], ") {")
                          .concat(f[1], "}")),
                        (f[4] = o))
                      : (f[4] = "".concat(o))),
                  n.push(f));
              }
            }),
            n
          );
        };
      },
      537: (t) => {
        t.exports = function (t) {
          var n = t[1],
            e = t[3];
          if (!e) return n;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r,
                ),
              a = "/*# ".concat(o, " */");
            return [n].concat([a]).join("\n");
          }
          return [n].join("\n");
        };
      },
      379: (t) => {
        var n = [];
        function e(t) {
          for (var e = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === t) {
              e = r;
              break;
            }
          return e;
        }
        function r(t, r) {
          for (var a = {}, i = [], c = 0; c < t.length; c++) {
            var u = t[c],
              s = r.base ? u[0] + r.base : u[0],
              f = a[s] || 0,
              l = "".concat(s, " ").concat(f);
            a[s] = f + 1;
            var p = e(l),
              d = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== p) n[p].references++, n[p].updater(d);
            else {
              var h = o(d, r);
              (r.byIndex = c),
                n.splice(c, 0, { identifier: l, updater: h, references: 1 });
            }
            i.push(l);
          }
          return i;
        }
        function o(t, n) {
          var e = n.domAPI(n);
          return (
            e.update(t),
            function (n) {
              if (n) {
                if (
                  n.css === t.css &&
                  n.media === t.media &&
                  n.sourceMap === t.sourceMap &&
                  n.supports === t.supports &&
                  n.layer === t.layer
                )
                  return;
                e.update((t = n));
              } else e.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var a = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var i = 0; i < a.length; i++) {
              var c = e(a[i]);
              n[c].references--;
            }
            for (var u = r(t, o), s = 0; s < a.length; s++) {
              var f = e(a[s]);
              0 === n[f].references && (n[f].updater(), n.splice(f, 1));
            }
            a = u;
          };
        };
      },
      569: (t) => {
        var n = {};
        t.exports = function (t, e) {
          var r = (function (t) {
            if (void 0 === n[t]) {
              var e = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (t) {
                  e = null;
                }
              n[t] = e;
            }
            return n[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(e);
        };
      },
      216: (t) => {
        t.exports = function (t) {
          var n = document.createElement("style");
          return t.setAttributes(n, t.attributes), t.insert(n, t.options), n;
        };
      },
      565: (t, n, e) => {
        t.exports = function (t) {
          var n = e.nc;
          n && t.setAttribute("nonce", n);
        };
      },
      795: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = t.insertStyleElement(t);
          return {
            update: function (e) {
              !(function (t, n, e) {
                var r = "";
                e.supports && (r += "@supports (".concat(e.supports, ") {")),
                  e.media && (r += "@media ".concat(e.media, " {"));
                var o = void 0 !== e.layer;
                o &&
                  (r += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {",
                  )),
                  (r += e.css),
                  o && (r += "}"),
                  e.media && (r += "}"),
                  e.supports && (r += "}");
                var a = e.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  n.styleTagTransform(r, t, n.options);
              })(n, t, e);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(n);
            },
          };
        };
      },
      589: (t) => {
        t.exports = function (t, n) {
          if (n.styleSheet) n.styleSheet.cssText = t;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    n = {};
  function e(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var a = (n[r] = { id: r, exports: {} });
    return t[r](a, a.exports, e), a.exports;
  }
  (e.n = (t) => {
    var n = t && t.__esModule ? () => t.default : () => t;
    return e.d(n, { a: n }), n;
  }),
    (e.d = (t, n) => {
      for (var r in n)
        e.o(n, r) &&
          !e.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
    }),
    (e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
    (e.nc = void 0),
    (() => {
      var t = e(379),
        n = e.n(t),
        r = e(795),
        o = e.n(r),
        a = e(569),
        i = e.n(a),
        c = e(565),
        u = e.n(c),
        s = e(216),
        f = e.n(s),
        l = e(589),
        p = e.n(l),
        d = e(890),
        h = {};
      (h.styleTagTransform = p()),
        (h.setAttributes = u()),
        (h.insert = i().bind(null, "head")),
        (h.domAPI = o()),
        (h.insertStyleElement = f()),
        n()(d.Z, h),
        d.Z && d.Z.locals && d.Z.locals;
      var A = e(526),
        m = {};
      (m.styleTagTransform = p()),
        (m.setAttributes = u()),
        (m.insert = i().bind(null, "head")),
        (m.domAPI = o()),
        (m.insertStyleElement = f()),
        n()(A.Z, m),
        A.Z && A.Z.locals && A.Z.locals;
      var y = e(485),
        v = {};
      (v.styleTagTransform = p()),
        (v.setAttributes = u()),
        (v.insert = i().bind(null, "head")),
        (v.domAPI = o()),
        (v.insertStyleElement = f()),
        n()(y.Z, v),
        y.Z && y.Z.locals && y.Z.locals;
      const g = function () {
          var t = document.createElement("div");
          t.className = "temp-info";
          var n = document.createElement("p");
          n.textContent = "Temperature";
          var e = document.createElement("p");
          return (e.className = "tempData"), t.append(n, e), { tempInfo: t };
        },
        E = function () {
          var t = document.createElement("div");
          t.className = "feels-info";
          var n = document.createElement("p");
          n.textContent = "Feels Like";
          var e = document.createElement("p");
          return (e.className = "feelsData"), t.append(n, e), { feelsInfo: t };
        },
        b = function () {
          var t = document.createElement("div");
          t.className = "humidity-info";
          var n = document.createElement("p");
          n.textContent = "Humidity";
          var e = document.createElement("p");
          return (
            (e.className = "humidityData"), t.append(n, e), { humidityInfo: t }
          );
        },
        x = function () {
          var t = document.createElement("div");
          t.className = "windSpeed-info";
          var n = document.createElement("p");
          n.textContent = "Wind Speed (km/h)";
          var e = document.createElement("p");
          return (
            (e.className = "windSpeedData"),
            t.append(n, e),
            { windSpeedInfo: t }
          );
        },
        w = function () {
          var t = document.createElement("div");
          t.className = "chanceOfRain-info";
          var n = document.createElement("p");
          n.textContent = "Chance of Rain (%)";
          var e = document.createElement("p");
          return (
            (e.className = "chanceOfRain"),
            t.append(n, e),
            { chanceOfRainInfo: t }
          );
        },
        C = function () {
          var t = document.createElement("div");
          t.className = "clouds-info";
          var n = document.createElement("p");
          return (n.className = "cloudsData"), t.append(n), { cloudsInfo: t };
        },
        B = function () {
          var t = document.createElement("div");
          t.className = "location-info";
          var n = document.createElement("p");
          return (
            (n.className = "locationData"), t.append(n), { locationInfo: t }
          );
        },
        S = function () {
          var t = document.createElement("div");
          t.className = "date-time-info";
          var n = document.createElement("p");
          n.textContent = "Date and time :";
          var e = document.createElement("p");
          return (
            (e.className = "dateTimeData"), t.append(n, e), { dateTimeInfo: t }
          );
        };
      function L(t) {
        return (
          (L =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          L(t)
        );
      }
      function I() {
        I = function () {
          return n;
        };
        var t,
          n = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, n, e) {
              t[n] = e.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function s(t, n, e) {
          return (
            Object.defineProperty(t, n, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[n]
          );
        }
        try {
          s({}, "");
        } catch (t) {
          s = function (t, n, e) {
            return (t[n] = e);
          };
        }
        function f(t, n, e, r) {
          var a = n && n.prototype instanceof y ? n : y,
            i = Object.create(a.prototype),
            c = new N(r || []);
          return o(i, "_invoke", { value: S(t, e, c) }), i;
        }
        function l(t, n, e) {
          try {
            return { type: "normal", arg: t.call(n, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        n.wrap = f;
        var p = "suspendedStart",
          d = "suspendedYield",
          h = "executing",
          A = "completed",
          m = {};
        function y() {}
        function v() {}
        function g() {}
        var E = {};
        s(E, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          x = b && b(b(T([])));
        x && x !== e && r.call(x, i) && (E = x);
        var w = (g.prototype = y.prototype = Object.create(E));
        function C(t) {
          ["next", "throw", "return"].forEach(function (n) {
            s(t, n, function (t) {
              return this._invoke(n, t);
            });
          });
        }
        function B(t, n) {
          function e(o, a, i, c) {
            var u = l(t[o], t, a);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == L(f) && r.call(f, "__await")
                ? n.resolve(f.__await).then(
                    function (t) {
                      e("next", t, i, c);
                    },
                    function (t) {
                      e("throw", t, i, c);
                    },
                  )
                : n.resolve(f).then(
                    function (t) {
                      (s.value = t), i(s);
                    },
                    function (t) {
                      return e("throw", t, i, c);
                    },
                  );
            }
            c(u.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new n(function (n, o) {
                  e(t, r, n, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function S(n, e, r) {
          var o = p;
          return function (a, i) {
            if (o === h) throw new Error("Generator is already running");
            if (o === A) {
              if ("throw" === a) throw i;
              return { value: t, done: !0 };
            }
            for (r.method = a, r.arg = i; ; ) {
              var c = r.delegate;
              if (c) {
                var u = k(c, r);
                if (u) {
                  if (u === m) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === p) throw ((o = A), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = h;
              var s = l(n, e, r);
              if ("normal" === s.type) {
                if (((o = r.done ? A : d), s.arg === m)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((o = A), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function k(n, e) {
          var r = e.method,
            o = n.iterator[r];
          if (o === t)
            return (
              (e.delegate = null),
              ("throw" === r &&
                n.iterator.return &&
                ((e.method = "return"),
                (e.arg = t),
                k(n, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              m
            );
          var a = l(o, n.iterator, e.arg);
          if ("throw" === a.type)
            return (
              (e.method = "throw"), (e.arg = a.arg), (e.delegate = null), m
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((e[n.resultName] = i.value),
                (e.next = n.nextLoc),
                "return" !== e.method && ((e.method = "next"), (e.arg = t)),
                (e.delegate = null),
                m)
              : i
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              m);
        }
        function j(t) {
          var n = { tryLoc: t[0] };
          1 in t && (n.catchLoc = t[1]),
            2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])),
            this.tryEntries.push(n);
        }
        function O(t) {
          var n = t.completion || {};
          (n.type = "normal"), delete n.arg, (t.completion = n);
        }
        function N(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(j, this),
            this.reset(!0);
        }
        function T(n) {
          if (n || "" === n) {
            var e = n[i];
            if (e) return e.call(n);
            if ("function" == typeof n.next) return n;
            if (!isNaN(n.length)) {
              var o = -1,
                a = function e() {
                  for (; ++o < n.length; )
                    if (r.call(n, o)) return (e.value = n[o]), (e.done = !1), e;
                  return (e.value = t), (e.done = !0), e;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(L(n) + " is not iterable");
        }
        return (
          (v.prototype = g),
          o(w, "constructor", { value: g, configurable: !0 }),
          o(g, "constructor", { value: v, configurable: !0 }),
          (v.displayName = s(g, u, "GeneratorFunction")),
          (n.isGeneratorFunction = function (t) {
            var n = "function" == typeof t && t.constructor;
            return (
              !!n &&
              (n === v || "GeneratorFunction" === (n.displayName || n.name))
            );
          }),
          (n.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), s(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (n.awrap = function (t) {
            return { __await: t };
          }),
          C(B.prototype),
          s(B.prototype, c, function () {
            return this;
          }),
          (n.AsyncIterator = B),
          (n.async = function (t, e, r, o, a) {
            void 0 === a && (a = Promise);
            var i = new B(f(t, e, r, o), a);
            return n.isGeneratorFunction(e)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          C(w),
          s(w, u, "Generator"),
          s(w, i, function () {
            return this;
          }),
          s(w, "toString", function () {
            return "[object Generator]";
          }),
          (n.keys = function (t) {
            var n = Object(t),
              e = [];
            for (var r in n) e.push(r);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in n) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (n.values = T),
          (N.prototype = {
            constructor: N,
            reset: function (n) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(O),
                !n)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (n) {
              if (this.done) throw n;
              var e = this;
              function o(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = n),
                  (e.next = r),
                  o && ((e.method = "next"), (e.arg = t)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = r.call(i, "catchLoc"),
                    s = r.call(i, "finallyLoc");
                  if (u && s) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, n) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var o = this.tryEntries[e];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= n &&
                n <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = n),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), m)
                  : this.complete(i)
              );
            },
            complete: function (t, n) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && n && (this.next = n),
                m
              );
            },
            finish: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.finallyLoc === t)
                  return this.complete(e.completion, e.afterLoc), O(e), m;
              }
            },
            catch: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.tryLoc === t) {
                  var r = e.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    O(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (n, e, r) {
              return (
                (this.delegate = { iterator: T(n), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                m
              );
            },
          }),
          n
        );
      }
      function k(t, n, e, r, o, a, i) {
        try {
          var c = t[a](i),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? n(u) : Promise.resolve(u).then(r, o);
      }
      const j = (function () {
          var t,
            n =
              ((t = I().mark(function t(n) {
                var e, r;
                return I().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            fetch(
                              "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/".concat(
                                n,
                                "?key=5MQCH64U6D4N39X9Y56XRU7NE",
                              ),
                              { mode: "cors" },
                            )
                          );
                        case 3:
                          return (e = t.sent), (t.next = 6), e.json();
                        case 6:
                          return (r = t.sent), t.abrupt("return", r);
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(0)),
                            console.log("something went wrong =/");
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 10]],
                );
              })),
              function () {
                var n = this,
                  e = arguments;
                return new Promise(function (r, o) {
                  var a = t.apply(n, e);
                  function i(t) {
                    k(a, r, o, i, c, "next", t);
                  }
                  function c(t) {
                    k(a, r, o, i, c, "throw", t);
                  }
                  i(void 0);
                });
              });
          return function (t) {
            return n.apply(this, arguments);
          };
        })(),
        O = function () {
          var t = document.createElement("div");
          t.className = "date-time-info";
          var n = document.createElement("p");
          return (
            (n.className = "dateTimeDataFW"), t.append(n), { dateTimeInfoFW: t }
          );
        };
      function N(t) {
        return (
          (N =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          N(t)
        );
      }
      function T() {
        T = function () {
          return n;
        };
        var t,
          n = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, n, e) {
              t[n] = e.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function s(t, n, e) {
          return (
            Object.defineProperty(t, n, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[n]
          );
        }
        try {
          s({}, "");
        } catch (t) {
          s = function (t, n, e) {
            return (t[n] = e);
          };
        }
        function f(t, n, e, r) {
          var a = n && n.prototype instanceof y ? n : y,
            i = Object.create(a.prototype),
            c = new j(r || []);
          return o(i, "_invoke", { value: S(t, e, c) }), i;
        }
        function l(t, n, e) {
          try {
            return { type: "normal", arg: t.call(n, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        n.wrap = f;
        var p = "suspendedStart",
          d = "suspendedYield",
          h = "executing",
          A = "completed",
          m = {};
        function y() {}
        function v() {}
        function g() {}
        var E = {};
        s(E, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          x = b && b(b(O([])));
        x && x !== e && r.call(x, i) && (E = x);
        var w = (g.prototype = y.prototype = Object.create(E));
        function C(t) {
          ["next", "throw", "return"].forEach(function (n) {
            s(t, n, function (t) {
              return this._invoke(n, t);
            });
          });
        }
        function B(t, n) {
          function e(o, a, i, c) {
            var u = l(t[o], t, a);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == N(f) && r.call(f, "__await")
                ? n.resolve(f.__await).then(
                    function (t) {
                      e("next", t, i, c);
                    },
                    function (t) {
                      e("throw", t, i, c);
                    },
                  )
                : n.resolve(f).then(
                    function (t) {
                      (s.value = t), i(s);
                    },
                    function (t) {
                      return e("throw", t, i, c);
                    },
                  );
            }
            c(u.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new n(function (n, o) {
                  e(t, r, n, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function S(n, e, r) {
          var o = p;
          return function (a, i) {
            if (o === h) throw new Error("Generator is already running");
            if (o === A) {
              if ("throw" === a) throw i;
              return { value: t, done: !0 };
            }
            for (r.method = a, r.arg = i; ; ) {
              var c = r.delegate;
              if (c) {
                var u = L(c, r);
                if (u) {
                  if (u === m) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === p) throw ((o = A), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = h;
              var s = l(n, e, r);
              if ("normal" === s.type) {
                if (((o = r.done ? A : d), s.arg === m)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((o = A), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function L(n, e) {
          var r = e.method,
            o = n.iterator[r];
          if (o === t)
            return (
              (e.delegate = null),
              ("throw" === r &&
                n.iterator.return &&
                ((e.method = "return"),
                (e.arg = t),
                L(n, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              m
            );
          var a = l(o, n.iterator, e.arg);
          if ("throw" === a.type)
            return (
              (e.method = "throw"), (e.arg = a.arg), (e.delegate = null), m
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((e[n.resultName] = i.value),
                (e.next = n.nextLoc),
                "return" !== e.method && ((e.method = "next"), (e.arg = t)),
                (e.delegate = null),
                m)
              : i
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              m);
        }
        function I(t) {
          var n = { tryLoc: t[0] };
          1 in t && (n.catchLoc = t[1]),
            2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])),
            this.tryEntries.push(n);
        }
        function k(t) {
          var n = t.completion || {};
          (n.type = "normal"), delete n.arg, (t.completion = n);
        }
        function j(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(I, this),
            this.reset(!0);
        }
        function O(n) {
          if (n || "" === n) {
            var e = n[i];
            if (e) return e.call(n);
            if ("function" == typeof n.next) return n;
            if (!isNaN(n.length)) {
              var o = -1,
                a = function e() {
                  for (; ++o < n.length; )
                    if (r.call(n, o)) return (e.value = n[o]), (e.done = !1), e;
                  return (e.value = t), (e.done = !0), e;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(N(n) + " is not iterable");
        }
        return (
          (v.prototype = g),
          o(w, "constructor", { value: g, configurable: !0 }),
          o(g, "constructor", { value: v, configurable: !0 }),
          (v.displayName = s(g, u, "GeneratorFunction")),
          (n.isGeneratorFunction = function (t) {
            var n = "function" == typeof t && t.constructor;
            return (
              !!n &&
              (n === v || "GeneratorFunction" === (n.displayName || n.name))
            );
          }),
          (n.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), s(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (n.awrap = function (t) {
            return { __await: t };
          }),
          C(B.prototype),
          s(B.prototype, c, function () {
            return this;
          }),
          (n.AsyncIterator = B),
          (n.async = function (t, e, r, o, a) {
            void 0 === a && (a = Promise);
            var i = new B(f(t, e, r, o), a);
            return n.isGeneratorFunction(e)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          C(w),
          s(w, u, "Generator"),
          s(w, i, function () {
            return this;
          }),
          s(w, "toString", function () {
            return "[object Generator]";
          }),
          (n.keys = function (t) {
            var n = Object(t),
              e = [];
            for (var r in n) e.push(r);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in n) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (n.values = O),
          (j.prototype = {
            constructor: j,
            reset: function (n) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(k),
                !n)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (n) {
              if (this.done) throw n;
              var e = this;
              function o(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = n),
                  (e.next = r),
                  o && ((e.method = "next"), (e.arg = t)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = r.call(i, "catchLoc"),
                    s = r.call(i, "finallyLoc");
                  if (u && s) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, n) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var o = this.tryEntries[e];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= n &&
                n <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = n),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), m)
                  : this.complete(i)
              );
            },
            complete: function (t, n) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && n && (this.next = n),
                m
              );
            },
            finish: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.finallyLoc === t)
                  return this.complete(e.completion, e.afterLoc), k(e), m;
              }
            },
            catch: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.tryLoc === t) {
                  var r = e.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    k(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (n, e, r) {
              return (
                (this.delegate = { iterator: O(n), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                m
              );
            },
          }),
          n
        );
      }
      function W(t, n, e, r, o, a, i) {
        try {
          var c = t[a](i),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? n(u) : Promise.resolve(u).then(r, o);
      }
      const D = (function () {
        var t,
          n =
            ((t = T().mark(function t(n) {
              var e, r;
              return T().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          fetch(
                            "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/".concat(
                              n,
                              "?key=5MQCH64U6D4N39X9Y56XRU7NE&iconSet=icons2",
                            ),
                            { mode: "cors" },
                          )
                        );
                      case 3:
                        return (e = t.sent), (t.next = 6), e.json();
                      case 6:
                        return (r = t.sent), t.abrupt("return", r);
                      case 10:
                        (t.prev = 10),
                          (t.t0 = t.catch(0)),
                          console.log("something went wrong =/");
                      case 13:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 10]],
              );
            })),
            function () {
              var n = this,
                e = arguments;
              return new Promise(function (r, o) {
                var a = t.apply(n, e);
                function i(t) {
                  W(a, r, o, i, c, "next", t);
                }
                function c(t) {
                  W(a, r, o, i, c, "throw", t);
                }
                i(void 0);
              });
            });
        return function (t) {
          return n.apply(this, arguments);
        };
      })();
      function _(t) {
        return (
          (_ =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          _(t)
        );
      }
      function F() {
        F = function () {
          return n;
        };
        var t,
          n = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, n, e) {
              t[n] = e.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function s(t, n, e) {
          return (
            Object.defineProperty(t, n, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[n]
          );
        }
        try {
          s({}, "");
        } catch (t) {
          s = function (t, n, e) {
            return (t[n] = e);
          };
        }
        function f(t, n, e, r) {
          var a = n && n.prototype instanceof y ? n : y,
            i = Object.create(a.prototype),
            c = new j(r || []);
          return o(i, "_invoke", { value: S(t, e, c) }), i;
        }
        function l(t, n, e) {
          try {
            return { type: "normal", arg: t.call(n, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        n.wrap = f;
        var p = "suspendedStart",
          d = "suspendedYield",
          h = "executing",
          A = "completed",
          m = {};
        function y() {}
        function v() {}
        function g() {}
        var E = {};
        s(E, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          x = b && b(b(O([])));
        x && x !== e && r.call(x, i) && (E = x);
        var w = (g.prototype = y.prototype = Object.create(E));
        function C(t) {
          ["next", "throw", "return"].forEach(function (n) {
            s(t, n, function (t) {
              return this._invoke(n, t);
            });
          });
        }
        function B(t, n) {
          function e(o, a, i, c) {
            var u = l(t[o], t, a);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == _(f) && r.call(f, "__await")
                ? n.resolve(f.__await).then(
                    function (t) {
                      e("next", t, i, c);
                    },
                    function (t) {
                      e("throw", t, i, c);
                    },
                  )
                : n.resolve(f).then(
                    function (t) {
                      (s.value = t), i(s);
                    },
                    function (t) {
                      return e("throw", t, i, c);
                    },
                  );
            }
            c(u.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new n(function (n, o) {
                  e(t, r, n, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function S(n, e, r) {
          var o = p;
          return function (a, i) {
            if (o === h) throw new Error("Generator is already running");
            if (o === A) {
              if ("throw" === a) throw i;
              return { value: t, done: !0 };
            }
            for (r.method = a, r.arg = i; ; ) {
              var c = r.delegate;
              if (c) {
                var u = L(c, r);
                if (u) {
                  if (u === m) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === p) throw ((o = A), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = h;
              var s = l(n, e, r);
              if ("normal" === s.type) {
                if (((o = r.done ? A : d), s.arg === m)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((o = A), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function L(n, e) {
          var r = e.method,
            o = n.iterator[r];
          if (o === t)
            return (
              (e.delegate = null),
              ("throw" === r &&
                n.iterator.return &&
                ((e.method = "return"),
                (e.arg = t),
                L(n, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              m
            );
          var a = l(o, n.iterator, e.arg);
          if ("throw" === a.type)
            return (
              (e.method = "throw"), (e.arg = a.arg), (e.delegate = null), m
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((e[n.resultName] = i.value),
                (e.next = n.nextLoc),
                "return" !== e.method && ((e.method = "next"), (e.arg = t)),
                (e.delegate = null),
                m)
              : i
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              m);
        }
        function I(t) {
          var n = { tryLoc: t[0] };
          1 in t && (n.catchLoc = t[1]),
            2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])),
            this.tryEntries.push(n);
        }
        function k(t) {
          var n = t.completion || {};
          (n.type = "normal"), delete n.arg, (t.completion = n);
        }
        function j(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(I, this),
            this.reset(!0);
        }
        function O(n) {
          if (n || "" === n) {
            var e = n[i];
            if (e) return e.call(n);
            if ("function" == typeof n.next) return n;
            if (!isNaN(n.length)) {
              var o = -1,
                a = function e() {
                  for (; ++o < n.length; )
                    if (r.call(n, o)) return (e.value = n[o]), (e.done = !1), e;
                  return (e.value = t), (e.done = !0), e;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(_(n) + " is not iterable");
        }
        return (
          (v.prototype = g),
          o(w, "constructor", { value: g, configurable: !0 }),
          o(g, "constructor", { value: v, configurable: !0 }),
          (v.displayName = s(g, u, "GeneratorFunction")),
          (n.isGeneratorFunction = function (t) {
            var n = "function" == typeof t && t.constructor;
            return (
              !!n &&
              (n === v || "GeneratorFunction" === (n.displayName || n.name))
            );
          }),
          (n.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), s(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (n.awrap = function (t) {
            return { __await: t };
          }),
          C(B.prototype),
          s(B.prototype, c, function () {
            return this;
          }),
          (n.AsyncIterator = B),
          (n.async = function (t, e, r, o, a) {
            void 0 === a && (a = Promise);
            var i = new B(f(t, e, r, o), a);
            return n.isGeneratorFunction(e)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          C(w),
          s(w, u, "Generator"),
          s(w, i, function () {
            return this;
          }),
          s(w, "toString", function () {
            return "[object Generator]";
          }),
          (n.keys = function (t) {
            var n = Object(t),
              e = [];
            for (var r in n) e.push(r);
            return (
              e.reverse(),
              function t() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in n) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (n.values = O),
          (j.prototype = {
            constructor: j,
            reset: function (n) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(k),
                !n)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (n) {
              if (this.done) throw n;
              var e = this;
              function o(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = n),
                  (e.next = r),
                  o && ((e.method = "next"), (e.arg = t)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = r.call(i, "catchLoc"),
                    s = r.call(i, "finallyLoc");
                  if (u && s) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, n) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var o = this.tryEntries[e];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= n &&
                n <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = n),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), m)
                  : this.complete(i)
              );
            },
            complete: function (t, n) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && n && (this.next = n),
                m
              );
            },
            finish: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.finallyLoc === t)
                  return this.complete(e.completion, e.afterLoc), k(e), m;
              }
            },
            catch: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.tryLoc === t) {
                  var r = e.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    k(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (n, e, r) {
              return (
                (this.delegate = { iterator: O(n), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                m
              );
            },
          }),
          n
        );
      }
      function P(t, n, e, r, o, a, i) {
        try {
          var c = t[a](i),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? n(u) : Promise.resolve(u).then(r, o);
      }
      function z(t) {
        return function () {
          var n = this,
            e = arguments;
          return new Promise(function (r, o) {
            var a = t.apply(n, e);
            function i(t) {
              P(a, r, o, i, c, "next", t);
            }
            function c(t) {
              P(a, r, o, i, c, "throw", t);
            }
            i(void 0);
          });
        };
      }
      var R,
        G,
        q,
        Z,
        U =
          ((R = {
            tempInfo: g().tempInfo,
            feelsInfo: E().feelsInfo,
            humidityInfo: b().humidityInfo,
            windSpeedInfo: x().windSpeedInfo,
            chanceOfRainInfo: w().chanceOfRainInfo,
            cloudsInfo: C().cloudsInfo,
            locationInfo: B().locationInfo,
            dateTimeInfo: S().dateTimeInfo,
          }),
          {
            locationInfo: (G = R.locationInfo),
            cloudsInfo: (q = R.cloudsInfo),
            tempInfo: (Z = R.tempInfo),
            dateTimeInfo: R.dateTimeInfo,
            feelsInfo: R.feelsInfo,
            chanceOfRainInfo: R.chanceOfRainInfo,
            humidityInfo: R.humidityInfo,
            windSpeedInfo: R.windSpeedInfo,
            getWeather: function (t, n) {
              "tempData" === t.className &&
                (function (t, n) {
                  t.textContent = n.currentConditions.temp;
                })(t, n),
                "feelsData" === t.className &&
                  (function (t, n) {
                    t.textContent = n.currentConditions.feelslike;
                  })(t, n),
                "chanceOfRain" === t.className &&
                  (function (t, n) {
                    t.textContent = n.days[0].precipprob;
                  })(t, n),
                "humidityData" === t.className &&
                  (function (t, n) {
                    t.textContent = n.currentConditions.humidity;
                  })(t, n),
                "windSpeedData" === t.className &&
                  (function (t, n) {
                    t.textContent = n.currentConditions.windspeed;
                  })(t, n),
                "cloudsData" === t.className &&
                  (function (t, n) {
                    t.textContent = n.currentConditions.conditions;
                  })(t, n),
                "locationData" === t.className &&
                  (function (t, n) {
                    t.textContent = n.resolvedAddress;
                  })(t, n),
                "dateTimeData" === t.className &&
                  (function (t, n) {
                    t.textContent = n.days[0].datetime;
                  })(t, n);
            },
            getForecast: function (t, n, e) {
              "tempData" === t.className &&
                (function (t, n, e) {
                  t.textContent =
                    0 === e ? n.currentConditions.temp : n.days[e].temp;
                })(t, n, e),
                "chanceOfRain" === t.className &&
                  (function (t, n, e) {
                    t.textContent = n.days[e].precipprob;
                  })(t, n, e),
                "cloudsDataFW" === t.className &&
                  (function (t, n, e) {
                    0 === e
                      ? (t.setAttribute(
                          "src",
                          "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/refs/heads/main/PNG/2nd%20Set%20-%20Monochrome/".concat(
                            n.currentConditions.icon,
                            ".png",
                          ),
                        ),
                        (t.alt = n.currentConditions.icon))
                      : (t.setAttribute(
                          "src",
                          "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/refs/heads/main/PNG/2nd%20Set%20-%20Monochrome/".concat(
                            n.days[e].icon,
                            ".png",
                          ),
                        ),
                        (t.alt = n.days[e].icon));
                  })(t, n, e),
                "dateTimeDataFW" === t.className &&
                  (function (t, n, e) {
                    t.textContent = n.days[e].datetime;
                  })(t, n, e);
            },
            displayData: (function () {
              var t = z(
                F().mark(function t(n, e) {
                  var r;
                  return F().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), j(n);
                        case 2:
                          (r = t.sent),
                            Object.values(e).forEach(function (t) {
                              if ("function" != typeof t)
                                if (t === G || t === q || t === Z) {
                                  document.querySelector(".mainInfo").append(t);
                                  var n = document.querySelector(
                                    ".".concat(t.lastElementChild.className),
                                  );
                                  e.getWeather(n, r);
                                } else {
                                  document
                                    .querySelector(".minorInfo")
                                    .append(t);
                                  var o = document.querySelector(
                                    ".".concat(t.lastElementChild.className),
                                  );
                                  e.getWeather(o, r);
                                }
                            });
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              );
              return function (n, e) {
                return t.apply(this, arguments);
              };
            })(),
            passForecastDatA: (function () {
              var t = z(
                F().mark(function t(n, e) {
                  var r, o, a, i, c;
                  return F().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (r = [
                              ".tempData",
                              ".chanceOfRain",
                              ".cloudsDataFW",
                              ".dateTimeDataFW",
                            ]),
                            (t.next = 3),
                            D(n)
                          );
                        case 3:
                          for (o = t.sent, a = 0; a < r.length; a++)
                            for (i = 0; i < 7; i++)
                              (c = document.querySelector(
                                '.forecastContainer \n          [data-block-number="'
                                  .concat(i, '"] ')
                                  .concat(r[a]),
                              )),
                                e.getForecast(c, o, i);
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              );
              return function (n, e) {
                return t.apply(this, arguments);
              };
            })(),
            bundleForecastElements: function () {
              for (
                var t = function () {
                    var t,
                      e,
                      r,
                      o =
                        ((t = g().tempInfo),
                        (e = w().chanceOfRainInfo),
                        (r = (function () {
                          var t = document.createElement("div");
                          t.className = "clouds-info-fw";
                          var n = document.createElement("img");
                          return (
                            (n.className = "cloudsDataFW"),
                            t.append(n),
                            { cloudsInfoFW: t }
                          );
                        })().cloudsInfoFW),
                        {
                          dateTimeInfoFW: O().dateTimeInfoFW,
                          cloudsInfoFW: r,
                          chanceOfRainInfo: e,
                          tempInfo: t,
                        });
                    !(function (t) {
                      var n = document.querySelector(".forecastContainer"),
                        e = document.createElement("div");
                      e.setAttribute("data-block-number", "".concat(t)),
                        n.appendChild(e);
                    })(n);
                    var a = document.querySelector(
                      '[data-block-number="'.concat(n, '"]'),
                    );
                    Object.values(o).forEach(function (t) {
                      a.append(t);
                    });
                  },
                  n = 0;
                n < 7;
                n++
              )
                t();
            },
            convertTemp: function () {
              var t = document.querySelector(".btnTemp"),
                n = function (t) {
                  var n = ((Number(t.textContent) - 32) / 1.8).toFixed(1);
                  return (t.textContent = n), t.textContent;
                },
                e = function (t) {
                  var n = (1.8 * Number(t.textContent) + 32).toFixed(1);
                  return (t.textContent = n), t.textContent;
                };
              t.addEventListener("click", function () {
                if ("°F" === t.textContent) {
                  t.textContent = "°C";
                  var r = document.querySelector(".currentWeather .tempData");
                  n(r);
                  for (var o = 0; o < 7; o++) {
                    var a = document.querySelector(
                      '.forecastContainer \n            [data-block-number="'.concat(
                        o,
                        '"] .tempData',
                      ),
                    );
                    n(a);
                  }
                } else {
                  t.textContent = "°F";
                  var i = document.querySelector(".currentWeather .tempData");
                  e(i);
                  for (var c = 0; c < 7; c++) {
                    var u = document.querySelector(
                      '.forecastContainer \n            [data-block-number="'.concat(
                        c,
                        '"] .tempData',
                      ),
                    );
                    e(u);
                  }
                }
              });
            },
          });
      U.displayData("salvador, br", U),
        U.bundleForecastElements(),
        U.passForecastDatA("salvador, br", U);
      var Y = document.querySelector("form"),
        M = document.querySelector("#search");
      Y.addEventListener("submit", function (t) {
        U.displayData(M.value, U),
          U.passForecastDatA(M.value, U),
          t.preventDefault();
      }),
        U.convertTemp();
    })();
})();
//# sourceMappingURL=app.bundle.js.map
