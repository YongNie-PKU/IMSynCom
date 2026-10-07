"use strict";
var IMSynComBlocks = (() => {
  var e = Object.create,
    t = Object.defineProperty,
    n = Object.getOwnPropertyDescriptor,
    r = Object.getOwnPropertyNames,
    l = Object.getPrototypeOf,
    a = Object.prototype.hasOwnProperty,
    i = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    o = (i, o, u) => (
      (u = null != i ? e(l(i)) : {}),
      ((e, l, i, o) => {
        if ((l && "object" == typeof l) || "function" == typeof l)
          for (let u of r(l))
            !a.call(e, u) &&
              u !== i &&
              t(e, u, {
                get: () => l[u],
                enumerable: !(o = n(l, u)) || o.enumerable,
              });
        return e;
      })(
        !o && i && i.__esModule
          ? u
          : t(u, "default", { value: i, enumerable: !0 }),
        i,
      )
    ),
    u = i((e) => {
      var t = Symbol.for("react.transitional.element"),
        n = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        l = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        i = Symbol.for("react.consumer"),
        o = Symbol.for("react.context"),
        u = Symbol.for("react.forward_ref"),
        s = Symbol.for("react.suspense"),
        c = Symbol.for("react.memo"),
        d = Symbol.for("react.lazy"),
        f = Symbol.for("react.activity"),
        p = Symbol.iterator;
      var m = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        h = Object.assign,
        g = {};
      function v(e, t, n) {
        ((this.props = e),
          (this.context = t),
          (this.refs = g),
          (this.updater = n || m));
      }
      function y() {}
      function b(e, t, n) {
        ((this.props = e),
          (this.context = t),
          (this.refs = g),
          (this.updater = n || m));
      }
      ((v.prototype.isReactComponent = {}),
        (v.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (v.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (y.prototype = v.prototype));
      var k = (b.prototype = new y());
      ((k.constructor = b), h(k, v.prototype), (k.isPureReactComponent = !0));
      var x = Array.isArray;
      function w() {}
      var S = { H: null, A: null, T: null, S: null },
        N = Object.prototype.hasOwnProperty;
      function E(e, n, r) {
        var l = r.ref;
        return {
          $$typeof: t,
          type: e,
          key: n,
          ref: void 0 !== l ? l : null,
          props: r,
        };
      }
      function C(e) {
        return "object" == typeof e && null !== e && e.$$typeof === t;
      }
      var j = /\/+/g;
      function P(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })("" + e.key)
          : t.toString(36);
      }
      function z(e, r, l, a, i) {
        var o = typeof e;
        ("undefined" === o || "boolean" === o) && (e = null);
        var u = !1;
        if (null === e) u = !0;
        else
          switch (o) {
            case "bigint":
            case "string":
            case "number":
              u = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case t:
                case n:
                  u = !0;
                  break;
                case d:
                  return z((u = e._init)(e._payload), r, l, a, i);
              }
          }
        if (u)
          return (
            (i = i(e)),
            (u = "" === a ? "." + P(e, 0) : a),
            x(i)
              ? ((l = ""),
                null != u && (l = u.replace(j, "$&/") + "/"),
                z(i, r, l, "", function (e) {
                  return e;
                }))
              : null != i &&
                (C(i) &&
                  (i = (function (e, t) {
                    return E(e.type, t, e.props);
                  })(
                    i,
                    l +
                      (null == i.key || (e && e.key === i.key)
                        ? ""
                        : ("" + i.key).replace(j, "$&/") + "/") +
                      u,
                  )),
                r.push(i)),
            1
          );
        u = 0;
        var s = "" === a ? "." : a + ":";
        if (x(e))
          for (var c = 0; c < e.length; c++)
            u += z((a = e[c]), r, l, (o = s + P(a, c)), i);
        else if (
          ((c = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
          })(e)),
          "function" == typeof c)
        )
          for (e = c.call(e), c = 0; !(a = e.next()).done; )
            u += z((a = a.value), r, l, (o = s + P(a, c++)), i);
        else if ("object" === o) {
          if ("function" == typeof e.then)
            return z(
              (function (e) {
                switch (e.status) {
                  case "fulfilled":
                    return e.value;
                  case "rejected":
                    throw e.reason;
                  default:
                    switch (
                      ("string" == typeof e.status
                        ? e.then(w, w)
                        : ((e.status = "pending"),
                          e.then(
                            function (t) {
                              "pending" === e.status &&
                                ((e.status = "fulfilled"), (e.value = t));
                            },
                            function (t) {
                              "pending" === e.status &&
                                ((e.status = "rejected"), (e.reason = t));
                            },
                          )),
                      e.status)
                    ) {
                      case "fulfilled":
                        return e.value;
                      case "rejected":
                        throw e.reason;
                    }
                }
                throw e;
              })(e),
              r,
              l,
              a,
              i,
            );
          throw (
            (r = String(e)),
            Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === r
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : r) +
                "). If you meant to render a collection of children, use an array instead.",
            )
          );
        }
        return u;
      }
      function _(e, t, n) {
        if (null == e) return e;
        var r = [],
          l = 0;
        return (
          z(e, r, "", "", function (e) {
            return t.call(n, e, l++);
          }),
          r
        );
      }
      function T(e) {
        if (-1 === e._status) {
          var t = e._result;
          ((t = t()).then(
            function (t) {
              (0 === e._status || -1 === e._status) &&
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (0 === e._status || -1 === e._status) &&
                ((e._status = 2), (e._result = t));
            },
          ),
            -1 === e._status && ((e._status = 0), (e._result = t)));
        }
        if (1 === e._status) return e._result.default;
        throw e._result;
      }
      var L =
          "function" == typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" == typeof window &&
                  "function" == typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" == typeof e &&
                      null !== e &&
                      "string" == typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" == typeof process &&
                  "function" == typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              },
        O = {
          map: _,
          forEach: function (e, t, n) {
            _(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              _(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              _(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        };
      ((e.Activity = f),
        (e.Children = O),
        (e.Component = v),
        (e.Fragment = r),
        (e.Profiler = a),
        (e.PureComponent = b),
        (e.StrictMode = l),
        (e.Suspense = s),
        (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S),
        (e.__COMPILER_RUNTIME = {
          __proto__: null,
          c: function (e) {
            return S.H.useMemoCache(e);
          },
        }),
        (e.cache = function (e) {
          return function () {
            return e.apply(null, arguments);
          };
        }),
        (e.cacheSignal = function () {
          return null;
        }),
        (e.cloneElement = function (e, t, n) {
          if (null == e)
            throw Error(
              "The argument must be a React element, but you passed " + e + ".",
            );
          var r = h({}, e.props),
            l = e.key;
          if (null != t)
            for (a in (void 0 !== t.key && (l = "" + t.key), t))
              !N.call(t, a) ||
                "key" === a ||
                "__self" === a ||
                "__source" === a ||
                ("ref" === a && void 0 === t.ref) ||
                (r[a] = t[a]);
          var a = arguments.length - 2;
          if (1 === a) r.children = n;
          else if (1 < a) {
            for (var i = Array(a), o = 0; o < a; o++) i[o] = arguments[o + 2];
            r.children = i;
          }
          return E(e.type, l, r);
        }),
        (e.createContext = function (e) {
          return (
            ((e = {
              $$typeof: o,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = e),
            (e.Consumer = { $$typeof: i, _context: e }),
            e
          );
        }),
        (e.createElement = function (e, t, n) {
          var r,
            l = {},
            a = null;
          if (null != t)
            for (r in (void 0 !== t.key && (a = "" + t.key), t))
              N.call(t, r) &&
                "key" !== r &&
                "__self" !== r &&
                "__source" !== r &&
                (l[r] = t[r]);
          var i = arguments.length - 2;
          if (1 === i) l.children = n;
          else if (1 < i) {
            for (var o = Array(i), u = 0; u < i; u++) o[u] = arguments[u + 2];
            l.children = o;
          }
          if (e && e.defaultProps)
            for (r in (i = e.defaultProps)) void 0 === l[r] && (l[r] = i[r]);
          return E(e, a, l);
        }),
        (e.createRef = function () {
          return { current: null };
        }),
        (e.forwardRef = function (e) {
          return { $$typeof: u, render: e };
        }),
        (e.isValidElement = C),
        (e.lazy = function (e) {
          return {
            $$typeof: d,
            _payload: { _status: -1, _result: e },
            _init: T,
          };
        }),
        (e.memo = function (e, t) {
          return { $$typeof: c, type: e, compare: void 0 === t ? null : t };
        }),
        (e.startTransition = function (e) {
          var t = S.T,
            n = {};
          S.T = n;
          try {
            var r = e(),
              l = S.S;
            (null !== l && l(n, r),
              "object" == typeof r &&
                null !== r &&
                "function" == typeof r.then &&
                r.then(w, L));
          } catch (e) {
            L(e);
          } finally {
            (null !== t && null !== n.types && (t.types = n.types), (S.T = t));
          }
        }),
        (e.unstable_useCacheRefresh = function () {
          return S.H.useCacheRefresh();
        }),
        (e.use = function (e) {
          return S.H.use(e);
        }),
        (e.useActionState = function (e, t, n) {
          return S.H.useActionState(e, t, n);
        }),
        (e.useCallback = function (e, t) {
          return S.H.useCallback(e, t);
        }),
        (e.useContext = function (e) {
          return S.H.useContext(e);
        }),
        (e.useDebugValue = function () {}),
        (e.useDeferredValue = function (e, t) {
          return S.H.useDeferredValue(e, t);
        }),
        (e.useEffect = function (e, t) {
          return S.H.useEffect(e, t);
        }),
        (e.useEffectEvent = function (e) {
          return S.H.useEffectEvent(e);
        }),
        (e.useId = function () {
          return S.H.useId();
        }),
        (e.useImperativeHandle = function (e, t, n) {
          return S.H.useImperativeHandle(e, t, n);
        }),
        (e.useInsertionEffect = function (e, t) {
          return S.H.useInsertionEffect(e, t);
        }),
        (e.useLayoutEffect = function (e, t) {
          return S.H.useLayoutEffect(e, t);
        }),
        (e.useMemo = function (e, t) {
          return S.H.useMemo(e, t);
        }),
        (e.useOptimistic = function (e, t) {
          return S.H.useOptimistic(e, t);
        }),
        (e.useReducer = function (e, t, n) {
          return S.H.useReducer(e, t, n);
        }),
        (e.useRef = function (e) {
          return S.H.useRef(e);
        }),
        (e.useState = function (e) {
          return S.H.useState(e);
        }),
        (e.useSyncExternalStore = function (e, t, n) {
          return S.H.useSyncExternalStore(e, t, n);
        }),
        (e.useTransition = function () {
          return S.H.useTransition();
        }),
        (e.version = "19.2.6"));
    }),
    s = i((e, t) => {
      t.exports = u();
    }),
    c = i((e) => {
      function t(e, t) {
        var n = e.length;
        e.push(t);
        e: for (; 0 < n; ) {
          var r = (n - 1) >>> 1,
            a = e[r];
          if (!(0 < l(a, t))) break e;
          ((e[r] = t), (e[n] = a), (n = r));
        }
      }
      function n(e) {
        return 0 === e.length ? null : e[0];
      }
      function r(e) {
        if (0 === e.length) return null;
        var t = e[0],
          n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
            var o = 2 * (r + 1) - 1,
              u = e[o],
              s = o + 1,
              c = e[s];
            if (0 > l(u, n))
              s < a && 0 > l(c, u)
                ? ((e[r] = c), (e[s] = n), (r = s))
                : ((e[r] = u), (e[o] = n), (r = o));
            else {
              if (!(s < a && 0 > l(c, n))) break e;
              ((e[r] = c), (e[s] = n), (r = s));
            }
          }
        }
        return t;
      }
      function l(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      ((e.unstable_now = void 0),
        "object" == typeof performance && "function" == typeof performance.now
          ? ((a = performance),
            (e.unstable_now = function () {
              return a.now();
            }))
          : ((i = Date),
            (o = i.now()),
            (e.unstable_now = function () {
              return i.now() - o;
            })));
      var a,
        i,
        o,
        u = [],
        s = [],
        c = 1,
        d = null,
        f = 3,
        p = !1,
        m = !1,
        h = !1,
        g = !1,
        v = "function" == typeof setTimeout ? setTimeout : null,
        y = "function" == typeof clearTimeout ? clearTimeout : null,
        b = typeof setImmediate < "u" ? setImmediate : null;
      function k(e) {
        for (var l = n(s); null !== l; ) {
          if (null === l.callback) r(s);
          else {
            if (!(l.startTime <= e)) break;
            (r(s), (l.sortIndex = l.expirationTime), t(u, l));
          }
          l = n(s);
        }
      }
      function x(e) {
        if (((h = !1), k(e), !m))
          if (null !== n(u)) ((m = !0), E || ((E = !0), w()));
          else {
            var t = n(s);
            null !== t && T(x, t.startTime - e);
          }
      }
      var w,
        S,
        N,
        E = !1,
        C = -1,
        j = 5,
        P = -1;
      function z() {
        return !!g || !(e.unstable_now() - P < j);
      }
      function _() {
        if (((g = !1), E)) {
          var t = e.unstable_now();
          P = t;
          var l = !0;
          try {
            e: {
              ((m = !1), h && ((h = !1), y(C), (C = -1)), (p = !0));
              var a = f;
              try {
                t: {
                  for (
                    k(t), d = n(u);
                    null !== d && !(d.expirationTime > t && z());

                  ) {
                    var i = d.callback;
                    if ("function" == typeof i) {
                      ((d.callback = null), (f = d.priorityLevel));
                      var o = i(d.expirationTime <= t);
                      if (((t = e.unstable_now()), "function" == typeof o)) {
                        ((d.callback = o), k(t), (l = !0));
                        break t;
                      }
                      (d === n(u) && r(u), k(t));
                    } else r(u);
                    d = n(u);
                  }
                  if (null !== d) l = !0;
                  else {
                    var c = n(s);
                    (null !== c && T(x, c.startTime - t), (l = !1));
                  }
                }
                break e;
              } finally {
                ((d = null), (f = a), (p = !1));
              }
              l = void 0;
            }
          } finally {
            l ? w() : (E = !1);
          }
        }
      }
      function T(t, n) {
        C = v(function () {
          t(e.unstable_now());
        }, n);
      }
      ("function" == typeof b
        ? (w = function () {
            b(_);
          })
        : typeof MessageChannel < "u"
          ? ((S = new MessageChannel()),
            (N = S.port2),
            (S.port1.onmessage = _),
            (w = function () {
              N.postMessage(null);
            }))
          : (w = function () {
              v(_, 0);
            }),
        (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (e.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
              )
            : (j = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
          return f;
        }),
        (e.unstable_next = function (e) {
          switch (f) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = f;
          }
          var n = f;
          f = t;
          try {
            return e();
          } finally {
            f = n;
          }
        }),
        (e.unstable_requestPaint = function () {
          g = !0;
        }),
        (e.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = f;
          f = e;
          try {
            return t();
          } finally {
            f = n;
          }
        }),
        (e.unstable_scheduleCallback = function (r, l, a) {
          var i = e.unstable_now();
          switch (
            ("object" == typeof a && null !== a
              ? (a = "number" == typeof (a = a.delay) && 0 < a ? i + a : i)
              : (a = i),
            r)
          ) {
            case 1:
              var o = -1;
              break;
            case 2:
              o = 250;
              break;
            case 5:
              o = 1073741823;
              break;
            case 4:
              o = 1e4;
              break;
            default:
              o = 5e3;
          }
          return (
            (r = {
              id: c++,
              callback: l,
              priorityLevel: r,
              startTime: a,
              expirationTime: (o = a + o),
              sortIndex: -1,
            }),
            a > i
              ? ((r.sortIndex = a),
                t(s, r),
                null === n(u) &&
                  r === n(s) &&
                  (h ? (y(C), (C = -1)) : (h = !0), T(x, a - i)))
              : ((r.sortIndex = o),
                t(u, r),
                m || p || ((m = !0), E || ((E = !0), w()))),
            r
          );
        }),
        (e.unstable_shouldYield = z),
        (e.unstable_wrapCallback = function (e) {
          var t = f;
          return function () {
            var n = f;
            f = t;
            try {
              return e.apply(this, arguments);
            } finally {
              f = n;
            }
          };
        }));
    }),
    d = i((e, t) => {
      t.exports = c();
    }),
    f = i((e) => {
      var t = s();
      function n(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
          t += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var n = 2; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
        }
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      function r() {}
      var l = {
          d: {
            f: r,
            r: function () {
              throw Error(n(522));
            },
            D: r,
            C: r,
            L: r,
            m: r,
            X: r,
            S: r,
            M: r,
          },
          p: 0,
          findDOMNode: null,
        },
        a = Symbol.for("react.portal");
      var i = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      function o(e, t) {
        return "font" === e
          ? ""
          : "string" == typeof t
            ? "use-credentials" === t
              ? t
              : ""
            : void 0;
      }
      ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l),
        (e.createPortal = function (e, t) {
          var r =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!t || (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType))
            throw Error(n(299));
          return (function (e, t, n) {
            var r =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return {
              $$typeof: a,
              key: null == r ? null : "" + r,
              children: e,
              containerInfo: t,
              implementation: n,
            };
          })(e, t, null, r);
        }),
        (e.flushSync = function (e) {
          var t = i.T,
            n = l.p;
          try {
            if (((i.T = null), (l.p = 2), e)) return e();
          } finally {
            ((i.T = t), (l.p = n), l.d.f());
          }
        }),
        (e.preconnect = function (e, t) {
          "string" == typeof e &&
            (t
              ? (t =
                  "string" == typeof (t = t.crossOrigin)
                    ? "use-credentials" === t
                      ? t
                      : ""
                    : void 0)
              : (t = null),
            l.d.C(e, t));
        }),
        (e.prefetchDNS = function (e) {
          "string" == typeof e && l.d.D(e);
        }),
        (e.preinit = function (e, t) {
          if ("string" == typeof e && t && "string" == typeof t.as) {
            var n = t.as,
              r = o(n, t.crossOrigin),
              a = "string" == typeof t.integrity ? t.integrity : void 0,
              i = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
            "style" === n
              ? l.d.S(
                  e,
                  "string" == typeof t.precedence ? t.precedence : void 0,
                  { crossOrigin: r, integrity: a, fetchPriority: i },
                )
              : "script" === n &&
                l.d.X(e, {
                  crossOrigin: r,
                  integrity: a,
                  fetchPriority: i,
                  nonce: "string" == typeof t.nonce ? t.nonce : void 0,
                });
          }
        }),
        (e.preinitModule = function (e, t) {
          if ("string" == typeof e)
            if ("object" == typeof t && null !== t) {
              if (null == t.as || "script" === t.as) {
                var n = o(t.as, t.crossOrigin);
                l.d.M(e, {
                  crossOrigin: n,
                  integrity:
                    "string" == typeof t.integrity ? t.integrity : void 0,
                  nonce: "string" == typeof t.nonce ? t.nonce : void 0,
                });
              }
            } else null == t && l.d.M(e);
        }),
        (e.preload = function (e, t) {
          if (
            "string" == typeof e &&
            "object" == typeof t &&
            null !== t &&
            "string" == typeof t.as
          ) {
            var n = t.as,
              r = o(n, t.crossOrigin);
            l.d.L(e, n, {
              crossOrigin: r,
              integrity: "string" == typeof t.integrity ? t.integrity : void 0,
              nonce: "string" == typeof t.nonce ? t.nonce : void 0,
              type: "string" == typeof t.type ? t.type : void 0,
              fetchPriority:
                "string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
              referrerPolicy:
                "string" == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
              imageSrcSet:
                "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
              imageSizes:
                "string" == typeof t.imageSizes ? t.imageSizes : void 0,
              media: "string" == typeof t.media ? t.media : void 0,
            });
          }
        }),
        (e.preloadModule = function (e, t) {
          if ("string" == typeof e)
            if (t) {
              var n = o(t.as, t.crossOrigin);
              l.d.m(e, {
                as:
                  "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
                crossOrigin: n,
                integrity:
                  "string" == typeof t.integrity ? t.integrity : void 0,
              });
            } else l.d.m(e);
        }),
        (e.requestFormReset = function (e) {
          l.d.r(e);
        }),
        (e.unstable_batchedUpdates = function (e, t) {
          return e(t);
        }),
        (e.useFormState = function (e, t, n) {
          return i.H.useFormState(e, t, n);
        }),
        (e.useFormStatus = function () {
          return i.H.useHostTransitionStatus();
        }),
        (e.version = "19.2.6"));
    }),
    p = i((e, t) => {
      ((function e() {
        if (
          !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            "function" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (e) {
            console.error(e);
          }
      })(),
        (t.exports = f()));
    }),
    m = i((e) => {
      var t = d(),
        n = s(),
        r = p();
      function l(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
          t += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var n = 2; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
        }
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      function a(e) {
        return !(
          !e ||
          (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
        );
      }
      function i(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            (!!(4098 & (t = e).flags) && (n = t.return), (e = t.return));
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function o(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (
            (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
            null !== t)
          )
            return t.dehydrated;
        }
        return null;
      }
      function u(e) {
        if (31 === e.tag) {
          var t = e.memoizedState;
          if (
            (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
            null !== t)
          )
            return t.dehydrated;
        }
        return null;
      }
      function c(e) {
        if (i(e) !== e) throw Error(l(188));
      }
      function f(e) {
        var t = e.tag;
        if (5 === t || 26 === t || 27 === t || 6 === t) return e;
        for (e = e.child; null !== e; ) {
          if (null !== (t = f(e))) return t;
          e = e.sibling;
        }
        return null;
      }
      var m = Object.assign,
        h = Symbol.for("react.element"),
        g = Symbol.for("react.transitional.element"),
        v = Symbol.for("react.portal"),
        y = Symbol.for("react.fragment"),
        b = Symbol.for("react.strict_mode"),
        k = Symbol.for("react.profiler"),
        x = Symbol.for("react.consumer"),
        w = Symbol.for("react.context"),
        S = Symbol.for("react.forward_ref"),
        N = Symbol.for("react.suspense"),
        E = Symbol.for("react.suspense_list"),
        C = Symbol.for("react.memo"),
        j = Symbol.for("react.lazy"),
        P = Symbol.for("react.activity"),
        z = Symbol.for("react.memo_cache_sentinel"),
        _ = Symbol.iterator;
      function T(e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (_ && e[_]) || e["@@iterator"])
            ? e
            : null;
      }
      var L = Symbol.for("react.client.reference");
      function O(e) {
        if (null == e) return null;
        if ("function" == typeof e)
          return e.$$typeof === L ? null : e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case y:
            return "Fragment";
          case k:
            return "Profiler";
          case b:
            return "StrictMode";
          case N:
            return "Suspense";
          case E:
            return "SuspenseList";
          case P:
            return "Activity";
        }
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case v:
              return "Portal";
            case w:
              return e.displayName || "Context";
            case x:
              return (e._context.displayName || "Context") + ".Consumer";
            case S:
              var t = e.render;
              return (
                (e = e.displayName) ||
                  (e =
                    "" !== (e = t.displayName || t.name || "")
                      ? "ForwardRef(" + e + ")"
                      : "ForwardRef"),
                e
              );
            case C:
              return null !== (t = e.displayName || null)
                ? t
                : O(e.type) || "Memo";
            case j:
              ((t = e._payload), (e = e._init));
              try {
                return O(e(t));
              } catch {}
          }
        return null;
      }
      var M = Array.isArray,
        A = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        R = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        F = { pending: !1, data: null, method: null, action: null },
        D = [],
        I = -1;
      function $(e) {
        return { current: e };
      }
      function U(e) {
        0 > I || ((e.current = D[I]), (D[I] = null), I--);
      }
      function H(e, t) {
        (I++, (D[I] = e.current), (e.current = t));
      }
      var B,
        V,
        W = $(null),
        Q = $(null),
        q = $(null),
        K = $(null);
      function Y(e, t) {
        switch ((H(q, t), H(Q, e), H(W, null), t.nodeType)) {
          case 9:
          case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? yd(e) : 0;
            break;
          default:
            if (((e = t.tagName), (t = t.namespaceURI))) e = bd((t = yd(t)), e);
            else
              switch (e) {
                case "svg":
                  e = 1;
                  break;
                case "math":
                  e = 2;
                  break;
                default:
                  e = 0;
              }
        }
        (U(W), H(W, e));
      }
      function X() {
        (U(W), U(Q), U(q));
      }
      function G(e) {
        null !== e.memoizedState && H(K, e);
        var t = W.current,
          n = bd(t, e.type);
        t !== n && (H(Q, e), H(W, n));
      }
      function Z(e) {
        (Q.current === e && (U(W), U(Q)),
          K.current === e && (U(K), (ff._currentValue = F)));
      }
      function J(e) {
        if (void 0 === B)
          try {
            throw Error();
          } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            ((B = (t && t[1]) || ""),
              (V =
                -1 < e.stack.indexOf("\n    at")
                  ? " (<anonymous>)"
                  : -1 < e.stack.indexOf("@")
                    ? "@unknown:0:0"
                    : ""));
          }
        return "\n" + B + e + V;
      }
      var ee = !1;
      function te(e, t) {
        if (!e || ee) return "";
        ee = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var r = {
            DetermineComponentFrameRoot: function () {
              try {
                if (t) {
                  var n = function () {
                    throw Error();
                  };
                  if (
                    (Object.defineProperty(n.prototype, "props", {
                      set: function () {
                        throw Error();
                      },
                    }),
                    "object" == typeof Reflect && Reflect.construct)
                  ) {
                    try {
                      Reflect.construct(n, []);
                    } catch (e) {
                      var r = e;
                    }
                    Reflect.construct(e, [], n);
                  } else {
                    try {
                      n.call();
                    } catch (e) {
                      r = e;
                    }
                    e.call(n.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (e) {
                    r = e;
                  }
                  (n = e()) &&
                    "function" == typeof n.catch &&
                    n.catch(function () {});
                }
              } catch (e) {
                if (e && r && "string" == typeof e.stack)
                  return [e.stack, r.stack];
              }
              return [null, null];
            },
          };
          r.DetermineComponentFrameRoot.displayName =
            "DetermineComponentFrameRoot";
          var l = Object.getOwnPropertyDescriptor(
            r.DetermineComponentFrameRoot,
            "name",
          );
          l &&
            l.configurable &&
            Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
              value: "DetermineComponentFrameRoot",
            });
          var a = r.DetermineComponentFrameRoot(),
            i = a[0],
            o = a[1];
          if (i && o) {
            var u = i.split("\n"),
              s = o.split("\n");
            for (
              l = r = 0;
              r < u.length && !u[r].includes("DetermineComponentFrameRoot");

            )
              r++;
            for (
              ;
              l < s.length && !s[l].includes("DetermineComponentFrameRoot");

            )
              l++;
            if (r === u.length || l === s.length)
              for (
                r = u.length - 1, l = s.length - 1;
                1 <= r && 0 <= l && u[r] !== s[l];

              )
                l--;
            for (; 1 <= r && 0 <= l; r--, l--)
              if (u[r] !== s[l]) {
                if (1 !== r || 1 !== l)
                  do {
                    if ((r--, 0 > --l || u[r] !== s[l])) {
                      var c = "\n" + u[r].replace(" at new ", " at ");
                      return (
                        e.displayName &&
                          c.includes("<anonymous>") &&
                          (c = c.replace("<anonymous>", e.displayName)),
                        c
                      );
                    }
                  } while (1 <= r && 0 <= l);
                break;
              }
          }
        } finally {
          ((ee = !1), (Error.prepareStackTrace = n));
        }
        return (n = e ? e.displayName || e.name : "") ? J(n) : "";
      }
      function ne(e, t) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            return J(e.type);
          case 16:
            return J("Lazy");
          case 13:
            return e.child !== t && null !== t
              ? J("Suspense Fallback")
              : J("Suspense");
          case 19:
            return J("SuspenseList");
          case 0:
          case 15:
            return te(e.type, !1);
          case 11:
            return te(e.type.render, !1);
          case 1:
            return te(e.type, !0);
          case 31:
            return J("Activity");
          default:
            return "";
        }
      }
      function re(e) {
        try {
          var t = "",
            n = null;
          do {
            ((t += ne(e, n)), (n = e), (e = e.return));
          } while (e);
          return t;
        } catch (e) {
          return "\nError generating stack: " + e.message + "\n" + e.stack;
        }
      }
      var le = Object.prototype.hasOwnProperty,
        ae = t.unstable_scheduleCallback,
        ie = t.unstable_cancelCallback,
        oe = t.unstable_shouldYield,
        ue = t.unstable_requestPaint,
        se = t.unstable_now,
        ce = t.unstable_getCurrentPriorityLevel,
        de = t.unstable_ImmediatePriority,
        fe = t.unstable_UserBlockingPriority,
        pe = t.unstable_NormalPriority,
        me = t.unstable_LowPriority,
        he = t.unstable_IdlePriority,
        ge = t.log,
        ve = t.unstable_setDisableYieldValue,
        ye = null,
        be = null;
      function ke(e) {
        if (
          ("function" == typeof ge && ve(e),
          be && "function" == typeof be.setStrictMode)
        )
          try {
            be.setStrictMode(ye, e);
          } catch {}
      }
      var xe = Math.clz32
          ? Math.clz32
          : function (e) {
              return 0 == (e >>>= 0) ? 32 : (31 - ((we(e) / Se) | 0)) | 0;
            },
        we = Math.log,
        Se = Math.LN2;
      var Ne = 256,
        Ee = 262144,
        Ce = 4194304;
      function je(e) {
        var t = 42 & e;
        if (0 !== t) return t;
        switch (e & -e) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
            return 64;
          case 128:
            return 128;
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
            return 261888 & e;
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return 3932160 & e;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return 62914560 & e;
          case 67108864:
            return 67108864;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 0;
          default:
            return e;
        }
      }
      function Pe(e, t, n) {
        var r = e.pendingLanes;
        if (0 === r) return 0;
        var l = 0,
          a = e.suspendedLanes,
          i = e.pingedLanes;
        e = e.warmLanes;
        var o = 134217727 & r;
        return (
          0 !== o
            ? 0 !== (r = o & ~a)
              ? (l = je(r))
              : 0 !== (i &= o)
                ? (l = je(i))
                : n || (0 !== (n = o & ~e) && (l = je(n)))
            : 0 !== (o = r & ~a)
              ? (l = je(o))
              : 0 !== i
                ? (l = je(i))
                : n || (0 !== (n = r & ~e) && (l = je(n))),
          0 === l
            ? 0
            : 0 !== t &&
                t !== l &&
                0 === (t & a) &&
                ((a = l & -l) >= (n = t & -t) || (32 === a && 4194048 & n))
              ? t
              : l
        );
      }
      function ze(e, t) {
        return (
          0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
        );
      }
      function _e(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 4:
          case 8:
          case 64:
            return t + 250;
          case 16:
          case 32:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return t + 5e3;
          default:
            return -1;
        }
      }
      function Te() {
        var e = Ce;
        return (!(62914560 & (Ce <<= 1)) && (Ce = 4194304), e);
      }
      function Le(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function Oe(e, t) {
        ((e.pendingLanes |= t),
          268435456 !== t &&
            ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
      }
      function Me(e, t, n) {
        ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
        var r = 31 - xe(t);
        ((e.entangledLanes |= t),
          (e.entanglements[r] =
            1073741824 | e.entanglements[r] | (261930 & n)));
      }
      function Ae(e, t) {
        var n = (e.entangledLanes |= t);
        for (e = e.entanglements; n; ) {
          var r = 31 - xe(n),
            l = 1 << r;
          ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
        }
      }
      function Re(e, t) {
        var n = t & -t;
        return 0 !== ((n = 42 & n ? 1 : Fe(n)) & (e.suspendedLanes | t))
          ? 0
          : n;
      }
      function Fe(e) {
        switch (e) {
          case 2:
            e = 1;
            break;
          case 8:
            e = 4;
            break;
          case 32:
            e = 16;
            break;
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            e = 128;
            break;
          case 268435456:
            e = 134217728;
            break;
          default:
            e = 0;
        }
        return e;
      }
      function De(e) {
        return 2 < (e &= -e)
          ? 8 < e
            ? 134217727 & e
              ? 32
              : 268435456
            : 8
          : 2;
      }
      function Ie() {
        var e = R.p;
        return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Pf(e.type);
      }
      function $e(e, t) {
        var n = R.p;
        try {
          return ((R.p = e), t());
        } finally {
          R.p = n;
        }
      }
      var Ue = Math.random().toString(36).slice(2),
        He = "__reactFiber$" + Ue,
        Be = "__reactProps$" + Ue,
        Ve = "__reactContainer$" + Ue,
        We = "__reactEvents$" + Ue,
        Qe = "__reactListeners$" + Ue,
        qe = "__reactHandles$" + Ue,
        Ke = "__reactResources$" + Ue,
        Ye = "__reactMarker$" + Ue;
      function Xe(e) {
        (delete e[He], delete e[Be], delete e[We], delete e[Qe], delete e[qe]);
      }
      function Ge(e) {
        var t = e[He];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[Ve] || n[He])) {
            if (
              ((n = t.alternate),
              null !== t.child || (null !== n && null !== n.child))
            )
              for (e = Fd(e); null !== e; ) {
                if ((n = e[He])) return n;
                e = Fd(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function Ze(e) {
        if ((e = e[He] || e[Ve])) {
          var t = e.tag;
          if (
            5 === t ||
            6 === t ||
            13 === t ||
            31 === t ||
            26 === t ||
            27 === t ||
            3 === t
          )
            return e;
        }
        return null;
      }
      function Je(e) {
        var t = e.tag;
        if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
        throw Error(l(33));
      }
      function et(e) {
        var t = e[Ke];
        return (
          t ||
            (t = e[Ke] =
              { hoistableStyles: new Map(), hoistableScripts: new Map() }),
          t
        );
      }
      function tt(e) {
        e[Ye] = !0;
      }
      var nt = new Set(),
        rt = {};
      function lt(e, t) {
        (at(e, t), at(e + "Capture", t));
      }
      function at(e, t) {
        for (rt[e] = t, e = 0; e < t.length; e++) nt.add(t[e]);
      }
      var it = RegExp(
          "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
        ),
        ot = {},
        ut = {};
      function st(e, t, n) {
        if (
          (function (e) {
            return (
              !!le.call(ut, e) ||
              (!le.call(ot, e) &&
                (it.test(e) ? (ut[e] = !0) : ((ot[e] = !0), !1)))
            );
          })(t)
        )
          if (null === n) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case "undefined":
              case "function":
              case "symbol":
                return void e.removeAttribute(t);
              case "boolean":
                var r = t.toLowerCase().slice(0, 5);
                if ("data-" !== r && "aria-" !== r)
                  return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + n);
          }
      }
      function ct(e, t, n) {
        if (null === n) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
              return void e.removeAttribute(t);
          }
          e.setAttribute(t, "" + n);
        }
      }
      function dt(e, t, n, r) {
        if (null === r) e.removeAttribute(n);
        else {
          switch (typeof r) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
              return void e.removeAttribute(n);
          }
          e.setAttributeNS(t, n, "" + r);
        }
      }
      function ft(e) {
        switch (typeof e) {
          case "bigint":
          case "boolean":
          case "number":
          case "string":
          case "undefined":
          case "object":
            return e;
          default:
            return "";
        }
      }
      function pt(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          "input" === e.toLowerCase() &&
          ("checkbox" === t || "radio" === t)
        );
      }
      function mt(e) {
        if (!e._valueTracker) {
          var t = pt(e) ? "checked" : "value";
          e._valueTracker = (function (e, t, n) {
            var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
            if (
              !e.hasOwnProperty(t) &&
              typeof r < "u" &&
              "function" == typeof r.get &&
              "function" == typeof r.set
            ) {
              var l = r.get,
                a = r.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return l.call(this);
                  },
                  set: function (e) {
                    ((n = "" + e), a.call(this, e));
                  },
                }),
                Object.defineProperty(e, t, { enumerable: r.enumerable }),
                {
                  getValue: function () {
                    return n;
                  },
                  setValue: function (e) {
                    n = "" + e;
                  },
                  stopTracking: function () {
                    ((e._valueTracker = null), delete e[t]);
                  },
                }
              );
            }
          })(e, t, "" + e[t]);
        }
      }
      function ht(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = "";
        return (
          e && (r = pt(e) ? (e.checked ? "true" : "false") : e.value),
          (e = r) !== n && (t.setValue(e), !0)
        );
      }
      function gt(e) {
        if (typeof (e = e || (typeof document < "u" ? document : void 0)) > "u")
          return null;
        try {
          return e.activeElement || e.body;
        } catch {
          return e.body;
        }
      }
      var vt = /[\n"\\]/g;
      function yt(e) {
        return e.replace(vt, function (e) {
          return "\\" + e.charCodeAt(0).toString(16) + " ";
        });
      }
      function bt(e, t, n, r, l, a, i, o) {
        ((e.name = ""),
          null != i &&
          "function" != typeof i &&
          "symbol" != typeof i &&
          "boolean" != typeof i
            ? (e.type = i)
            : e.removeAttribute("type"),
          null != t
            ? "number" === i
              ? ((0 === t && "" === e.value) || e.value != t) &&
                (e.value = "" + ft(t))
              : e.value !== "" + ft(t) && (e.value = "" + ft(t))
            : ("submit" !== i && "reset" !== i) || e.removeAttribute("value"),
          null != t
            ? xt(e, i, ft(t))
            : null != n
              ? xt(e, i, ft(n))
              : null != r && e.removeAttribute("value"),
          null == l && null != a && (e.defaultChecked = !!a),
          null != l &&
            (e.checked = l && "function" != typeof l && "symbol" != typeof l),
          null != o &&
          "function" != typeof o &&
          "symbol" != typeof o &&
          "boolean" != typeof o
            ? (e.name = "" + ft(o))
            : e.removeAttribute("name"));
      }
      function kt(e, t, n, r, l, a, i, o) {
        if (
          (null != a &&
            "function" != typeof a &&
            "symbol" != typeof a &&
            "boolean" != typeof a &&
            (e.type = a),
          null != t || null != n)
        ) {
          if (("submit" === a || "reset" === a) && null == t) return void mt(e);
          ((n = null != n ? "" + ft(n) : ""),
            (t = null != t ? "" + ft(t) : n),
            o || t === e.value || (e.value = t),
            (e.defaultValue = t));
        }
        ((r = "function" != typeof (r = r ?? l) && "symbol" != typeof r && !!r),
          (e.checked = o ? e.checked : !!r),
          (e.defaultChecked = !!r),
          null != i &&
            "function" != typeof i &&
            "symbol" != typeof i &&
            "boolean" != typeof i &&
            (e.name = i),
          mt(e));
      }
      function xt(e, t, n) {
        ("number" === t && gt(e.ownerDocument) === e) ||
          e.defaultValue === "" + n ||
          (e.defaultValue = "" + n);
      }
      function wt(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
          for (n = 0; n < e.length; n++)
            ((l = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== l && (e[n].selected = l),
              l && r && (e[n].defaultSelected = !0));
        } else {
          for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n)
              return (
                (e[l].selected = !0),
                void (r && (e[l].defaultSelected = !0))
              );
            null !== t || e[l].disabled || (t = e[l]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function St(e, t, n) {
        null == t || ((t = "" + ft(t)) !== e.value && (e.value = t), null != n)
          ? (e.defaultValue = null != n ? "" + ft(n) : "")
          : e.defaultValue !== t && (e.defaultValue = t);
      }
      function Nt(e, t, n, r) {
        if (null == t) {
          if (null != r) {
            if (null != n) throw Error(l(92));
            if (M(r)) {
              if (1 < r.length) throw Error(l(93));
              r = r[0];
            }
            n = r;
          }
          (null == n && (n = ""), (t = n));
        }
        ((n = ft(t)),
          (e.defaultValue = n),
          (r = e.textContent) === n && "" !== r && null !== r && (e.value = r),
          mt(e));
      }
      function Et(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType)
            return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      var Ct = new Set(
        "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
          " ",
        ),
      );
      function jt(e, t, n) {
        var r = 0 === t.indexOf("--");
        null == n || "boolean" == typeof n || "" === n
          ? r
            ? e.setProperty(t, "")
            : "float" === t
              ? (e.cssFloat = "")
              : (e[t] = "")
          : r
            ? e.setProperty(t, n)
            : "number" != typeof n || 0 === n || Ct.has(t)
              ? "float" === t
                ? (e.cssFloat = n)
                : (e[t] = ("" + n).trim())
              : (e[t] = n + "px");
      }
      function Pt(e, t, n) {
        if (null != t && "object" != typeof t) throw Error(l(62));
        if (((e = e.style), null != n)) {
          for (var r in n)
            !n.hasOwnProperty(r) ||
              (null != t && t.hasOwnProperty(r)) ||
              (0 === r.indexOf("--")
                ? e.setProperty(r, "")
                : "float" === r
                  ? (e.cssFloat = "")
                  : (e[r] = ""));
          for (var a in t)
            ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && jt(e, a, r));
        } else for (var i in t) t.hasOwnProperty(i) && jt(e, i, t[i]);
      }
      function zt(e) {
        if (-1 === e.indexOf("-")) return !1;
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      var _t = new Map([
          ["acceptCharset", "accept-charset"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
          ["crossOrigin", "crossorigin"],
          ["accentHeight", "accent-height"],
          ["alignmentBaseline", "alignment-baseline"],
          ["arabicForm", "arabic-form"],
          ["baselineShift", "baseline-shift"],
          ["capHeight", "cap-height"],
          ["clipPath", "clip-path"],
          ["clipRule", "clip-rule"],
          ["colorInterpolation", "color-interpolation"],
          ["colorInterpolationFilters", "color-interpolation-filters"],
          ["colorProfile", "color-profile"],
          ["colorRendering", "color-rendering"],
          ["dominantBaseline", "dominant-baseline"],
          ["enableBackground", "enable-background"],
          ["fillOpacity", "fill-opacity"],
          ["fillRule", "fill-rule"],
          ["floodColor", "flood-color"],
          ["floodOpacity", "flood-opacity"],
          ["fontFamily", "font-family"],
          ["fontSize", "font-size"],
          ["fontSizeAdjust", "font-size-adjust"],
          ["fontStretch", "font-stretch"],
          ["fontStyle", "font-style"],
          ["fontVariant", "font-variant"],
          ["fontWeight", "font-weight"],
          ["glyphName", "glyph-name"],
          ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
          ["glyphOrientationVertical", "glyph-orientation-vertical"],
          ["horizAdvX", "horiz-adv-x"],
          ["horizOriginX", "horiz-origin-x"],
          ["imageRendering", "image-rendering"],
          ["letterSpacing", "letter-spacing"],
          ["lightingColor", "lighting-color"],
          ["markerEnd", "marker-end"],
          ["markerMid", "marker-mid"],
          ["markerStart", "marker-start"],
          ["overlinePosition", "overline-position"],
          ["overlineThickness", "overline-thickness"],
          ["paintOrder", "paint-order"],
          ["panose-1", "panose-1"],
          ["pointerEvents", "pointer-events"],
          ["renderingIntent", "rendering-intent"],
          ["shapeRendering", "shape-rendering"],
          ["stopColor", "stop-color"],
          ["stopOpacity", "stop-opacity"],
          ["strikethroughPosition", "strikethrough-position"],
          ["strikethroughThickness", "strikethrough-thickness"],
          ["strokeDasharray", "stroke-dasharray"],
          ["strokeDashoffset", "stroke-dashoffset"],
          ["strokeLinecap", "stroke-linecap"],
          ["strokeLinejoin", "stroke-linejoin"],
          ["strokeMiterlimit", "stroke-miterlimit"],
          ["strokeOpacity", "stroke-opacity"],
          ["strokeWidth", "stroke-width"],
          ["textAnchor", "text-anchor"],
          ["textDecoration", "text-decoration"],
          ["textRendering", "text-rendering"],
          ["transformOrigin", "transform-origin"],
          ["underlinePosition", "underline-position"],
          ["underlineThickness", "underline-thickness"],
          ["unicodeBidi", "unicode-bidi"],
          ["unicodeRange", "unicode-range"],
          ["unitsPerEm", "units-per-em"],
          ["vAlphabetic", "v-alphabetic"],
          ["vHanging", "v-hanging"],
          ["vIdeographic", "v-ideographic"],
          ["vMathematical", "v-mathematical"],
          ["vectorEffect", "vector-effect"],
          ["vertAdvY", "vert-adv-y"],
          ["vertOriginX", "vert-origin-x"],
          ["vertOriginY", "vert-origin-y"],
          ["wordSpacing", "word-spacing"],
          ["writingMode", "writing-mode"],
          ["xmlnsXlink", "xmlns:xlink"],
          ["xHeight", "x-height"],
        ]),
        Tt =
          /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
      function Lt(e) {
        return Tt.test("" + e)
          ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
          : e;
      }
      function Ot() {}
      var Mt = null;
      function At(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      var Rt = null,
        Ft = null;
      function Dt(e) {
        var t = Ze(e);
        if (t && (e = t.stateNode)) {
          var n = e[Be] || null;
          e: switch (((e = t.stateNode), t.type)) {
            case "input":
              if (
                (bt(
                  e,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                ),
                (t = n.name),
                "radio" === n.type && null != t)
              ) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll(
                    'input[name="' + yt("" + t) + '"][type="radio"]',
                  ),
                    t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var a = r[Be] || null;
                    if (!a) throw Error(l(90));
                    bt(
                      r,
                      a.value,
                      a.defaultValue,
                      a.defaultValue,
                      a.checked,
                      a.defaultChecked,
                      a.type,
                      a.name,
                    );
                  }
                }
                for (t = 0; t < n.length; t++)
                  (r = n[t]).form === e.form && ht(r);
              }
              break e;
            case "textarea":
              St(e, n.value, n.defaultValue);
              break e;
            case "select":
              null != (t = n.value) && wt(e, !!n.multiple, t, !1);
          }
        }
      }
      var It = !1;
      function $t(e, t, n) {
        if (It) return e(t, n);
        It = !0;
        try {
          return e(t);
        } finally {
          if (
            ((It = !1),
            (null !== Rt || null !== Ft) &&
              (ec(), Rt && ((t = Rt), (e = Ft), (Ft = Rt = null), Dt(t), e)))
          )
            for (t = 0; t < e.length; t++) Dt(e[t]);
        }
      }
      function Ut(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = n[Be] || null;
        if (null === r) return null;
        n = r[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            ((r = !r.disabled) ||
              (r = !(
                "button" === (e = e.type) ||
                "input" === e ||
                "select" === e ||
                "textarea" === e
              )),
              (e = !r));
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && "function" != typeof n) throw Error(l(231, t, typeof n));
        return n;
      }
      var Ht = !(
          typeof window > "u" ||
          typeof window.document > "u" ||
          typeof window.document.createElement > "u"
        ),
        Bt = !1;
      if (Ht)
        try {
          ((Vt = {}),
            Object.defineProperty(Vt, "passive", {
              get: function () {
                Bt = !0;
              },
            }),
            window.addEventListener("test", Vt, Vt),
            window.removeEventListener("test", Vt, Vt));
        } catch {
          Bt = !1;
        }
      var Vt,
        Wt = null,
        Qt = null,
        qt = null;
      function Kt() {
        if (qt) return qt;
        var e,
          t,
          n = Qt,
          r = n.length,
          l = "value" in Wt ? Wt.value : Wt.textContent,
          a = l.length;
        for (e = 0; e < r && n[e] === l[e]; e++);
        var i = r - e;
        for (t = 1; t <= i && n[r - t] === l[a - t]; t++);
        return (qt = l.slice(e, 1 < t ? 1 - t : void 0));
      }
      function Yt(e) {
        var t = e.keyCode;
        return (
          "charCode" in e
            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
            : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      function Xt() {
        return !0;
      }
      function Gt() {
        return !1;
      }
      function Zt(e) {
        function t(t, n, r, l, a) {
          for (var i in ((this._reactName = t),
          (this._targetInst = r),
          (this.type = n),
          (this.nativeEvent = l),
          (this.target = a),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(l) : l[i]));
          return (
            (this.isDefaultPrevented = (
              null != l.defaultPrevented
                ? l.defaultPrevented
                : !1 === l.returnValue
            )
              ? Xt
              : Gt),
            (this.isPropagationStopped = Gt),
            this
          );
        }
        return (
          m(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e &&
                (e.preventDefault
                  ? e.preventDefault()
                  : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                (this.isDefaultPrevented = Xt));
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e &&
                (e.stopPropagation
                  ? e.stopPropagation()
                  : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                (this.isPropagationStopped = Xt));
            },
            persist: function () {},
            isPersistent: Xt,
          }),
          t
        );
      }
      var Jt,
        en,
        tn,
        nn = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        rn = Zt(nn),
        ln = m({}, nn, { view: 0, detail: 0 }),
        an = Zt(ln),
        on = m({}, ln, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: yn,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return "movementX" in e
              ? e.movementX
              : (e !== tn &&
                  (tn && "mousemove" === e.type
                    ? ((Jt = e.screenX - tn.screenX),
                      (en = e.screenY - tn.screenY))
                    : (en = Jt = 0),
                  (tn = e)),
                Jt);
          },
          movementY: function (e) {
            return "movementY" in e ? e.movementY : en;
          },
        }),
        un = Zt(on),
        sn = Zt(m({}, on, { dataTransfer: 0 })),
        cn = Zt(m({}, ln, { relatedTarget: 0 })),
        dn = Zt(
          m({}, nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        ),
        fn = Zt(
          m({}, nn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
        ),
        pn = Zt(m({}, nn, { data: 0 })),
        mn = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified",
        },
        hn = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta",
        },
        gn = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        };
      function vn(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = gn[e]) && !!t[e];
      }
      function yn() {
        return vn;
      }
      var bn = Zt(
          m({}, ln, {
            key: function (e) {
              if (e.key) {
                var t = mn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = Yt(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? hn[e.keyCode] || "Unidentified"
                  : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: yn,
            charCode: function (e) {
              return "keypress" === e.type ? Yt(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? Yt(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
            },
          }),
        ),
        kn = Zt(
          m({}, on, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          }),
        ),
        xn = Zt(
          m({}, ln, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: yn,
          }),
        ),
        wn = Zt(
          m({}, nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        ),
        Sn = Zt(
          m({}, on, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
        ),
        Nn = Zt(m({}, nn, { newState: 0, oldState: 0 })),
        En = [9, 13, 27, 32],
        Cn = Ht && "CompositionEvent" in window,
        jn = null;
      Ht && "documentMode" in document && (jn = document.documentMode);
      var Pn = Ht && "TextEvent" in window && !jn,
        zn = Ht && (!Cn || (jn && 8 < jn && 11 >= jn)),
        _n = " ",
        Tn = !1;
      function Ln(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== En.indexOf(t.keyCode);
          case "keydown":
            return 229 !== t.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return !0;
          default:
            return !1;
        }
      }
      function On(e) {
        return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
      }
      var Mn = !1;
      var An = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
      function Rn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!An[e.type] : "textarea" === t;
      }
      function Fn(e, t, n, r) {
        (Rt ? (Ft ? Ft.push(r) : (Ft = [r])) : (Rt = r),
          0 < (t = ld(t, "onChange")).length &&
            ((n = new rn("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t })));
      }
      var Dn = null,
        In = null;
      function $n(e) {
        Xc(e, 0);
      }
      function Un(e) {
        if (ht(Je(e))) return e;
      }
      function Hn(e, t) {
        if ("change" === e) return t;
      }
      var Bn,
        Vn,
        Wn,
        Qn = !1;
      function qn() {
        Dn && (Dn.detachEvent("onpropertychange", Kn), (In = Dn = null));
      }
      function Kn(e) {
        if ("value" === e.propertyName && Un(In)) {
          var t = [];
          (Fn(t, In, e, At(e)), $t($n, t));
        }
      }
      function Yn(e, t, n) {
        "focusin" === e
          ? (qn(), (In = n), (Dn = t).attachEvent("onpropertychange", Kn))
          : "focusout" === e && qn();
      }
      function Xn(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
          return Un(In);
      }
      function Gn(e, t) {
        if ("click" === e) return Un(t);
      }
      function Zn(e, t) {
        if ("input" === e || "change" === e) return Un(t);
      }
      Ht &&
        (Ht
          ? ((Vn = "oninput" in document) ||
              ((Wn = document.createElement("div")).setAttribute(
                "oninput",
                "return;",
              ),
              (Vn = "function" == typeof Wn.oninput)),
            (Bn = Vn))
          : (Bn = !1),
        (Qn = Bn && (!document.documentMode || 9 < document.documentMode)));
      var Jn =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            };
      function er(e, t) {
        if (Jn(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
          var l = n[r];
          if (!le.call(t, l) || !Jn(e[l], t[l])) return !1;
        }
        return !0;
      }
      function tr(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function nr(e, t) {
        var n,
          r = tr(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
              return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = tr(r);
        }
      }
      function rr(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? rr(e, t.parentNode)
                : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function lr(e) {
        for (
          var t = gt(
            (e =
              null != e &&
              null != e.ownerDocument &&
              null != e.ownerDocument.defaultView
                ? e.ownerDocument.defaultView
                : window).document,
          );
          t instanceof e.HTMLIFrameElement;

        ) {
          try {
            var n = "string" == typeof t.contentWindow.location.href;
          } catch {
            n = !1;
          }
          if (!n) break;
          t = gt((e = t.contentWindow).document);
        }
        return t;
      }
      function ar(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (("input" === t &&
            ("text" === e.type ||
              "search" === e.type ||
              "tel" === e.type ||
              "url" === e.type ||
              "password" === e.type)) ||
            "textarea" === t ||
            "true" === e.contentEditable)
        );
      }
      var ir = Ht && "documentMode" in document && 11 >= document.documentMode,
        or = null,
        ur = null,
        sr = null,
        cr = !1;
      function dr(e, t, n) {
        var r =
          n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        cr ||
          null == or ||
          or !== gt(r) ||
          ("selectionStart" in (r = or) && ar(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                anchorNode: (r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              }),
          (sr && er(sr, r)) ||
            ((sr = r),
            0 < (r = ld(ur, "onSelect")).length &&
              ((t = new rn("onSelect", "select", null, t, n)),
              e.push({ event: t, listeners: r }),
              (t.target = or))));
      }
      function fr(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      var pr = {
          animationend: fr("Animation", "AnimationEnd"),
          animationiteration: fr("Animation", "AnimationIteration"),
          animationstart: fr("Animation", "AnimationStart"),
          transitionrun: fr("Transition", "TransitionRun"),
          transitionstart: fr("Transition", "TransitionStart"),
          transitioncancel: fr("Transition", "TransitionCancel"),
          transitionend: fr("Transition", "TransitionEnd"),
        },
        mr = {},
        hr = {};
      function gr(e) {
        if (mr[e]) return mr[e];
        if (!pr[e]) return e;
        var t,
          n = pr[e];
        for (t in n) if (n.hasOwnProperty(t) && t in hr) return (mr[e] = n[t]);
        return e;
      }
      Ht &&
        ((hr = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete pr.animationend.animation,
          delete pr.animationiteration.animation,
          delete pr.animationstart.animation),
        "TransitionEvent" in window || delete pr.transitionend.transition);
      var vr = gr("animationend"),
        yr = gr("animationiteration"),
        br = gr("animationstart"),
        kr = gr("transitionrun"),
        xr = gr("transitionstart"),
        wr = gr("transitioncancel"),
        Sr = gr("transitionend"),
        Nr = new Map(),
        Er =
          "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " ",
          );
      function Cr(e, t) {
        (Nr.set(e, t), lt(t, [e]));
      }
      Er.push("scrollEnd");
      var jr =
          "function" == typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" == typeof window &&
                  "function" == typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" == typeof e &&
                      null !== e &&
                      "string" == typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" == typeof process &&
                  "function" == typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              },
        Pr = [],
        zr = 0,
        _r = 0;
      function Tr() {
        for (var e = zr, t = (_r = zr = 0); t < e; ) {
          var n = Pr[t];
          Pr[t++] = null;
          var r = Pr[t];
          Pr[t++] = null;
          var l = Pr[t];
          Pr[t++] = null;
          var a = Pr[t];
          if (((Pr[t++] = null), null !== r && null !== l)) {
            var i = r.pending;
            (null === i ? (l.next = l) : ((l.next = i.next), (i.next = l)),
              (r.pending = l));
          }
          0 !== a && Ar(n, l, a);
        }
      }
      function Lr(e, t, n, r) {
        ((Pr[zr++] = e),
          (Pr[zr++] = t),
          (Pr[zr++] = n),
          (Pr[zr++] = r),
          (_r |= r),
          (e.lanes |= r),
          null !== (e = e.alternate) && (e.lanes |= r));
      }
      function Or(e, t, n, r) {
        return (Lr(e, t, n, r), Rr(e));
      }
      function Mr(e, t) {
        return (Lr(e, null, null, t), Rr(e));
      }
      function Ar(e, t, n) {
        e.lanes |= n;
        var r = e.alternate;
        null !== r && (r.lanes |= n);
        for (var l = !1, a = e.return; null !== a; )
          ((a.childLanes |= n),
            null !== (r = a.alternate) && (r.childLanes |= n),
            22 === a.tag &&
              (null === (e = a.stateNode) || 1 & e._visibility || (l = !0)),
            (e = a),
            (a = a.return));
        return 3 === e.tag
          ? ((a = e.stateNode),
            l &&
              null !== t &&
              ((l = 31 - xe(n)),
              null === (r = (e = a.hiddenUpdates)[l])
                ? (e[l] = [t])
                : r.push(t),
              (t.lane = 536870912 | n)),
            a)
          : null;
      }
      function Rr(e) {
        if (50 < Ws) throw ((Ws = 0), (Qs = null), Error(l(185)));
        for (var t = e.return; null !== t; ) t = (e = t).return;
        return 3 === e.tag ? e.stateNode : null;
      }
      var Fr = {};
      function Dr(e, t, n, r) {
        ((this.tag = e),
          (this.key = n),
          (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
              null),
          (this.index = 0),
          (this.refCleanup = this.ref = null),
          (this.pendingProps = t),
          (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
              null),
          (this.mode = r),
          (this.subtreeFlags = this.flags = 0),
          (this.deletions = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null));
      }
      function Ir(e, t, n, r) {
        return new Dr(e, t, n, r);
      }
      function $r(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function Ur(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = Ir(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
          (n.flags = 65011712 & e.flags),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies =
            null === t
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          (n.refCleanup = e.refCleanup),
          n
        );
      }
      function Hr(e, t) {
        e.flags &= 65011714;
        var n = e.alternate;
        return (
          null === n
            ? ((e.childLanes = 0),
              (e.lanes = t),
              (e.child = null),
              (e.subtreeFlags = 0),
              (e.memoizedProps = null),
              (e.memoizedState = null),
              (e.updateQueue = null),
              (e.dependencies = null),
              (e.stateNode = null))
            : ((e.childLanes = n.childLanes),
              (e.lanes = n.lanes),
              (e.child = n.child),
              (e.subtreeFlags = 0),
              (e.deletions = null),
              (e.memoizedProps = n.memoizedProps),
              (e.memoizedState = n.memoizedState),
              (e.updateQueue = n.updateQueue),
              (e.type = n.type),
              (t = n.dependencies),
              (e.dependencies =
                null === t
                  ? null
                  : { lanes: t.lanes, firstContext: t.firstContext })),
          e
        );
      }
      function Br(e, t, n, r, a, i) {
        var o = 0;
        if (((r = e), "function" == typeof e)) $r(e) && (o = 1);
        else if ("string" == typeof e)
          o = (function (e, t, n) {
            if (1 === n || null != t.itemProp) return !1;
            switch (e) {
              case "meta":
              case "title":
                return !0;
              case "style":
                if (
                  "string" != typeof t.precedence ||
                  "string" != typeof t.href ||
                  "" === t.href
                )
                  break;
                return !0;
              case "link":
                if (
                  "string" != typeof t.rel ||
                  "string" != typeof t.href ||
                  "" === t.href ||
                  t.onLoad ||
                  t.onError
                )
                  break;
                return (
                  "stylesheet" !== t.rel ||
                  ((e = t.disabled),
                  "string" == typeof t.precedence && null == e)
                );
              case "script":
                if (
                  t.async &&
                  "function" != typeof t.async &&
                  "symbol" != typeof t.async &&
                  !t.onLoad &&
                  !t.onError &&
                  t.src &&
                  "string" == typeof t.src
                )
                  return !0;
            }
            return !1;
          })(e, n, W.current)
            ? 26
            : "html" === e || "head" === e || "body" === e
              ? 27
              : 5;
        else
          e: switch (e) {
            case P:
              return (
                ((e = Ir(31, n, t, a)).elementType = P),
                (e.lanes = i),
                e
              );
            case y:
              return Vr(n.children, a, i, t);
            case b:
              ((o = 8), (a |= 24));
              break;
            case k:
              return (
                ((e = Ir(12, n, t, 2 | a)).elementType = k),
                (e.lanes = i),
                e
              );
            case N:
              return (
                ((e = Ir(13, n, t, a)).elementType = N),
                (e.lanes = i),
                e
              );
            case E:
              return (
                ((e = Ir(19, n, t, a)).elementType = E),
                (e.lanes = i),
                e
              );
            default:
              if ("object" == typeof e && null !== e)
                switch (e.$$typeof) {
                  case w:
                    o = 10;
                    break e;
                  case x:
                    o = 9;
                    break e;
                  case S:
                    o = 11;
                    break e;
                  case C:
                    o = 14;
                    break e;
                  case j:
                    ((o = 16), (r = null));
                    break e;
                }
              ((o = 29),
                (n = Error(l(130, null === e ? "null" : typeof e, ""))),
                (r = null));
          }
        return (
          ((t = Ir(o, n, t, a)).elementType = e),
          (t.type = r),
          (t.lanes = i),
          t
        );
      }
      function Vr(e, t, n, r) {
        return (((e = Ir(7, e, r, t)).lanes = n), e);
      }
      function Wr(e, t, n) {
        return (((e = Ir(6, e, null, t)).lanes = n), e);
      }
      function Qr(e) {
        var t = Ir(18, null, null, 0);
        return ((t.stateNode = e), t);
      }
      function qr(e, t, n) {
        return (
          ((t = Ir(4, null !== e.children ? e.children : [], e.key, t)).lanes =
            n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      var Kr = new WeakMap();
      function Yr(e, t) {
        if ("object" == typeof e && null !== e) {
          var n = Kr.get(e);
          return void 0 !== n
            ? n
            : ((t = { value: e, source: t, stack: re(t) }), Kr.set(e, t), t);
        }
        return { value: e, source: t, stack: re(t) };
      }
      var Xr = [],
        Gr = 0,
        Zr = null,
        Jr = 0,
        el = [],
        tl = 0,
        nl = null,
        rl = 1,
        ll = "";
      function al(e, t) {
        ((Xr[Gr++] = Jr), (Xr[Gr++] = Zr), (Zr = e), (Jr = t));
      }
      function il(e, t, n) {
        ((el[tl++] = rl), (el[tl++] = ll), (el[tl++] = nl), (nl = e));
        var r = rl;
        e = ll;
        var l = 32 - xe(r) - 1;
        ((r &= ~(1 << l)), (n += 1));
        var a = 32 - xe(t) + l;
        if (30 < a) {
          var i = l - (l % 5);
          ((a = (r & ((1 << i) - 1)).toString(32)),
            (r >>= i),
            (l -= i),
            (rl = (1 << (32 - xe(t) + l)) | (n << l) | r),
            (ll = a + e));
        } else ((rl = (1 << a) | (n << l) | r), (ll = e));
      }
      function ol(e) {
        null !== e.return && (al(e, 1), il(e, 1, 0));
      }
      function ul(e) {
        for (; e === Zr; )
          ((Zr = Xr[--Gr]), (Xr[Gr] = null), (Jr = Xr[--Gr]), (Xr[Gr] = null));
        for (; e === nl; )
          ((nl = el[--tl]),
            (el[tl] = null),
            (ll = el[--tl]),
            (el[tl] = null),
            (rl = el[--tl]),
            (el[tl] = null));
      }
      function sl(e, t) {
        ((el[tl++] = rl),
          (el[tl++] = ll),
          (el[tl++] = nl),
          (rl = t.id),
          (ll = t.overflow),
          (nl = e));
      }
      var cl = null,
        dl = null,
        fl = !1,
        pl = null,
        ml = !1,
        hl = Error(l(519));
      function gl(e) {
        throw (
          wl(
            Yr(
              Error(
                l(
                  418,
                  1 < arguments.length &&
                    void 0 !== arguments[1] &&
                    arguments[1]
                    ? "text"
                    : "HTML",
                  "",
                ),
              ),
              e,
            ),
          ),
          hl
        );
      }
      function vl(e) {
        var t = e.stateNode,
          n = e.type,
          r = e.memoizedProps;
        switch (((t[He] = e), (t[Be] = r), n)) {
          case "dialog":
            (Gc("cancel", t), Gc("close", t));
            break;
          case "iframe":
          case "object":
          case "embed":
            Gc("load", t);
            break;
          case "video":
          case "audio":
            for (n = 0; n < Kc.length; n++) Gc(Kc[n], t);
            break;
          case "source":
            Gc("error", t);
            break;
          case "img":
          case "image":
          case "link":
            (Gc("error", t), Gc("load", t));
            break;
          case "details":
            Gc("toggle", t);
            break;
          case "input":
            (Gc("invalid", t),
              kt(
                t,
                r.value,
                r.defaultValue,
                r.checked,
                r.defaultChecked,
                r.type,
                r.name,
                !0,
              ));
            break;
          case "select":
            Gc("invalid", t);
            break;
          case "textarea":
            (Gc("invalid", t), Nt(t, r.value, r.defaultValue, r.children));
        }
        (("string" != typeof (n = r.children) &&
          "number" != typeof n &&
          "bigint" != typeof n) ||
        t.textContent === "" + n ||
        !0 === r.suppressHydrationWarning ||
        cd(t.textContent, n)
          ? (null != r.popover && (Gc("beforetoggle", t), Gc("toggle", t)),
            null != r.onScroll && Gc("scroll", t),
            null != r.onScrollEnd && Gc("scrollend", t),
            null != r.onClick && (t.onclick = Ot),
            (t = !0))
          : (t = !1),
          t || gl(e, !0));
      }
      function yl(e) {
        for (cl = e.return; cl; )
          switch (cl.tag) {
            case 5:
            case 31:
            case 13:
              return void (ml = !1);
            case 27:
            case 3:
              return void (ml = !0);
            default:
              cl = cl.return;
          }
      }
      function bl(e) {
        if (e !== cl) return !1;
        if (!fl) return (yl(e), (fl = !0), !1);
        var t,
          n = e.tag;
        if (
          ((t = 3 !== n && 27 !== n) &&
            ((t = 5 === n) &&
              (t =
                !("form" !== (t = e.type) && "button" !== t) ||
                kd(e.type, e.memoizedProps)),
            (t = !t)),
          t && dl && gl(e),
          yl(e),
          13 === n)
        ) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(l(317));
          dl = Rd(e);
        } else if (31 === n) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(l(317));
          dl = Rd(e);
        } else
          27 === n
            ? ((n = dl),
              jd(e.type) ? ((e = Ad), (Ad = null), (dl = e)) : (dl = n))
            : (dl = cl ? Md(e.stateNode.nextSibling) : null);
        return !0;
      }
      function kl() {
        ((dl = cl = null), (fl = !1));
      }
      function xl() {
        var e = pl;
        return (
          null !== e &&
            (null === Ts ? (Ts = e) : Ts.push.apply(Ts, e), (pl = null)),
          e
        );
      }
      function wl(e) {
        null === pl ? (pl = [e]) : pl.push(e);
      }
      var Sl = $(null),
        Nl = null,
        El = null;
      function Cl(e, t, n) {
        (H(Sl, t._currentValue), (t._currentValue = n));
      }
      function jl(e) {
        ((e._currentValue = Sl.current), U(Sl));
      }
      function Pl(e, t, n) {
        for (; null !== e; ) {
          var r = e.alternate;
          if (
            ((e.childLanes & t) !== t
              ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
              : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
          )
            break;
          e = e.return;
        }
      }
      function zl(e, t, n, r) {
        var a = e.child;
        for (null !== a && (a.return = e); null !== a; ) {
          var i = a.dependencies;
          if (null !== i) {
            var o = a.child;
            i = i.firstContext;
            e: for (; null !== i; ) {
              var u = i;
              i = a;
              for (var s = 0; s < t.length; s++)
                if (u.context === t[s]) {
                  ((i.lanes |= n),
                    null !== (u = i.alternate) && (u.lanes |= n),
                    Pl(i.return, n, e),
                    r || (o = null));
                  break e;
                }
              i = u.next;
            }
          } else if (18 === a.tag) {
            if (null === (o = a.return)) throw Error(l(341));
            ((o.lanes |= n),
              null !== (i = o.alternate) && (i.lanes |= n),
              Pl(o, n, e),
              (o = null));
          } else o = a.child;
          if (null !== o) o.return = a;
          else
            for (o = a; null !== o; ) {
              if (o === e) {
                o = null;
                break;
              }
              if (null !== (a = o.sibling)) {
                ((a.return = o.return), (o = a));
                break;
              }
              o = o.return;
            }
          a = o;
        }
      }
      function _l(e, t, n, r) {
        e = null;
        for (var a = t, i = !1; null !== a; ) {
          if (!i)
            if (524288 & a.flags) i = !0;
            else if (262144 & a.flags) break;
          if (10 === a.tag) {
            var o = a.alternate;
            if (null === o) throw Error(l(387));
            if (null !== (o = o.memoizedProps)) {
              var u = a.type;
              Jn(a.pendingProps.value, o.value) ||
                (null !== e ? e.push(u) : (e = [u]));
            }
          } else if (a === K.current) {
            if (null === (o = a.alternate)) throw Error(l(387));
            o.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
              (null !== e ? e.push(ff) : (e = [ff]));
          }
          a = a.return;
        }
        (null !== e && zl(t, e, n, r), (t.flags |= 262144));
      }
      function Tl(e) {
        for (e = e.firstContext; null !== e; ) {
          if (!Jn(e.context._currentValue, e.memoizedValue)) return !0;
          e = e.next;
        }
        return !1;
      }
      function Ll(e) {
        ((Nl = e),
          (El = null),
          null !== (e = e.dependencies) && (e.firstContext = null));
      }
      function Ol(e) {
        return Al(Nl, e);
      }
      function Ml(e, t) {
        return (null === Nl && Ll(e), Al(e, t));
      }
      function Al(e, t) {
        var n = t._currentValue;
        if (((t = { context: t, memoizedValue: n, next: null }), null === El)) {
          if (null === e) throw Error(l(308));
          ((El = t),
            (e.dependencies = { lanes: 0, firstContext: t }),
            (e.flags |= 524288));
        } else El = El.next = t;
        return n;
      }
      var Rl =
          typeof AbortController < "u"
            ? AbortController
            : function () {
                var e = [],
                  t = (this.signal = {
                    aborted: !1,
                    addEventListener: function (t, n) {
                      e.push(n);
                    },
                  });
                this.abort = function () {
                  ((t.aborted = !0),
                    e.forEach(function (e) {
                      return e();
                    }));
                };
              },
        Fl = t.unstable_scheduleCallback,
        Dl = t.unstable_NormalPriority,
        Il = {
          $$typeof: w,
          Consumer: null,
          Provider: null,
          _currentValue: null,
          _currentValue2: null,
          _threadCount: 0,
        };
      function $l() {
        return { controller: new Rl(), data: new Map(), refCount: 0 };
      }
      function Ul(e) {
        (e.refCount--,
          0 === e.refCount &&
            Fl(Dl, function () {
              e.controller.abort();
            }));
      }
      var Hl = null,
        Bl = 0,
        Vl = 0,
        Wl = null;
      function Ql() {
        if (0 === --Bl && null !== Hl) {
          null !== Wl && (Wl.status = "fulfilled");
          var e = Hl;
          ((Hl = null), (Vl = 0), (Wl = null));
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
      }
      var ql = A.S;
      A.S = function (e, t) {
        ((Ms = se()),
          "object" == typeof t &&
            null !== t &&
            "function" == typeof t.then &&
            (function (e, t) {
              if (null === Hl) {
                var n = (Hl = []);
                ((Bl = 0),
                  (Vl = Wc()),
                  (Wl = {
                    status: "pending",
                    value: void 0,
                    then: function (e) {
                      n.push(e);
                    },
                  }));
              }
              (Bl++, t.then(Ql, Ql));
            })(0, t),
          null !== ql && ql(e, t));
      };
      var Kl = $(null);
      function Yl() {
        var e = Kl.current;
        return null !== e ? e : hs.pooledCache;
      }
      function Xl(e, t) {
        H(Kl, null === t ? Kl.current : t.pool);
      }
      function Gl() {
        var e = Yl();
        return null === e ? null : { parent: Il._currentValue, pool: e };
      }
      var Zl = Error(l(460)),
        Jl = Error(l(474)),
        ea = Error(l(542)),
        ta = { then: function () {} };
      function na(e) {
        return "fulfilled" === (e = e.status) || "rejected" === e;
      }
      function ra(e, t, n) {
        switch (
          (void 0 === (n = e[n])
            ? e.push(t)
            : n !== t && (t.then(Ot, Ot), (t = n)),
          t.status)
        ) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw (oa((e = t.reason)), e);
          default:
            if ("string" == typeof t.status) t.then(Ot, Ot);
            else {
              if (null !== (e = hs) && 100 < e.shellSuspendCounter)
                throw Error(l(482));
              (((e = t).status = "pending"),
                e.then(
                  function (e) {
                    if ("pending" === t.status) {
                      var n = t;
                      ((n.status = "fulfilled"), (n.value = e));
                    }
                  },
                  function (e) {
                    if ("pending" === t.status) {
                      var n = t;
                      ((n.status = "rejected"), (n.reason = e));
                    }
                  },
                ));
            }
            switch (t.status) {
              case "fulfilled":
                return t.value;
              case "rejected":
                throw (oa((e = t.reason)), e);
            }
            throw ((aa = t), Zl);
        }
      }
      function la(e) {
        try {
          return (0, e._init)(e._payload);
        } catch (e) {
          throw null !== e &&
            "object" == typeof e &&
            "function" == typeof e.then
            ? ((aa = e), Zl)
            : e;
        }
      }
      var aa = null;
      function ia() {
        if (null === aa) throw Error(l(459));
        var e = aa;
        return ((aa = null), e);
      }
      function oa(e) {
        if (e === Zl || e === ea) throw Error(l(483));
      }
      var ua = null,
        sa = 0;
      function ca(e) {
        var t = sa;
        return ((sa += 1), null === ua && (ua = []), ra(ua, e, t));
      }
      function da(e, t) {
        ((t = t.props.ref), (e.ref = void 0 !== t ? t : null));
      }
      function fa(e, t) {
        throw t.$$typeof === h
          ? Error(l(525))
          : ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
              ),
            ));
      }
      function pa(e) {
        function t(t, n) {
          if (e) {
            var r = t.deletions;
            null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) (t(n, r), (r = r.sibling));
          return null;
        }
        function r(e) {
          for (var t = new Map(); null !== e; )
            (null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
              (e = e.sibling));
          return t;
        }
        function a(e, t) {
          return (((e = Ur(e, t)).index = 0), (e.sibling = null), e);
        }
        function i(t, n, r) {
          return (
            (t.index = r),
            e
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.flags |= 67108866), n)
                  : r
                : ((t.flags |= 67108866), n)
              : ((t.flags |= 1048576), n)
          );
        }
        function o(t) {
          return (e && null === t.alternate && (t.flags |= 67108866), t);
        }
        function u(e, t, n, r) {
          return null === t || 6 !== t.tag
            ? (((t = Wr(n, e.mode, r)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function s(e, t, n, r) {
          var l = n.type;
          return l === y
            ? d(e, t, n.props.children, r, n.key)
            : null !== t &&
                (t.elementType === l ||
                  ("object" == typeof l &&
                    null !== l &&
                    l.$$typeof === j &&
                    la(l) === t.type))
              ? (da((t = a(t, n.props)), n), (t.return = e), t)
              : (da((t = Br(n.type, n.key, n.props, null, e.mode, r)), n),
                (t.return = e),
                t);
        }
        function c(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = qr(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
        }
        function d(e, t, n, r, l) {
          return null === t || 7 !== t.tag
            ? (((t = Vr(n, e.mode, r, l)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function f(e, t, n) {
          if (
            ("string" == typeof t && "" !== t) ||
            "number" == typeof t ||
            "bigint" == typeof t
          )
            return (((t = Wr("" + t, e.mode, n)).return = e), t);
          if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
              case g:
                return (
                  da((n = Br(t.type, t.key, t.props, null, e.mode, n)), t),
                  (n.return = e),
                  n
                );
              case v:
                return (((t = qr(t, e.mode, n)).return = e), t);
              case j:
                return f(e, (t = la(t)), n);
            }
            if (M(t) || T(t))
              return (((t = Vr(t, e.mode, n, null)).return = e), t);
            if ("function" == typeof t.then) return f(e, ca(t), n);
            if (t.$$typeof === w) return f(e, Ml(e, t), n);
            fa(e, t);
          }
          return null;
        }
        function p(e, t, n, r) {
          var l = null !== t ? t.key : null;
          if (
            ("string" == typeof n && "" !== n) ||
            "number" == typeof n ||
            "bigint" == typeof n
          )
            return null !== l ? null : u(e, t, "" + n, r);
          if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
              case g:
                return n.key === l ? s(e, t, n, r) : null;
              case v:
                return n.key === l ? c(e, t, n, r) : null;
              case j:
                return p(e, t, (n = la(n)), r);
            }
            if (M(n) || T(n)) return null !== l ? null : d(e, t, n, r, null);
            if ("function" == typeof n.then) return p(e, t, ca(n), r);
            if (n.$$typeof === w) return p(e, t, Ml(e, n), r);
            fa(e, n);
          }
          return null;
        }
        function m(e, t, n, r, l) {
          if (
            ("string" == typeof r && "" !== r) ||
            "number" == typeof r ||
            "bigint" == typeof r
          )
            return u(t, (e = e.get(n) || null), "" + r, l);
          if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
              case g:
                return s(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  l,
                );
              case v:
                return c(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  l,
                );
              case j:
                return m(e, t, n, (r = la(r)), l);
            }
            if (M(r) || T(r)) return d(t, (e = e.get(n) || null), r, l, null);
            if ("function" == typeof r.then) return m(e, t, n, ca(r), l);
            if (r.$$typeof === w) return m(e, t, n, Ml(t, r), l);
            fa(t, r);
          }
          return null;
        }
        function h(u, s, c, d) {
          if (
            ("object" == typeof c &&
              null !== c &&
              c.type === y &&
              null === c.key &&
              (c = c.props.children),
            "object" == typeof c && null !== c)
          ) {
            switch (c.$$typeof) {
              case g:
                e: {
                  for (var b = c.key; null !== s; ) {
                    if (s.key === b) {
                      if ((b = c.type) === y) {
                        if (7 === s.tag) {
                          (n(u, s.sibling),
                            ((d = a(s, c.props.children)).return = u),
                            (u = d));
                          break e;
                        }
                      } else if (
                        s.elementType === b ||
                        ("object" == typeof b &&
                          null !== b &&
                          b.$$typeof === j &&
                          la(b) === s.type)
                      ) {
                        (n(u, s.sibling),
                          da((d = a(s, c.props)), c),
                          (d.return = u),
                          (u = d));
                        break e;
                      }
                      n(u, s);
                      break;
                    }
                    (t(u, s), (s = s.sibling));
                  }
                  c.type === y
                    ? (((d = Vr(c.props.children, u.mode, d, c.key)).return =
                        u),
                      (u = d))
                    : (da((d = Br(c.type, c.key, c.props, null, u.mode, d)), c),
                      (d.return = u),
                      (u = d));
                }
                return o(u);
              case v:
                e: {
                  for (b = c.key; null !== s; ) {
                    if (s.key === b) {
                      if (
                        4 === s.tag &&
                        s.stateNode.containerInfo === c.containerInfo &&
                        s.stateNode.implementation === c.implementation
                      ) {
                        (n(u, s.sibling),
                          ((d = a(s, c.children || [])).return = u),
                          (u = d));
                        break e;
                      }
                      n(u, s);
                      break;
                    }
                    (t(u, s), (s = s.sibling));
                  }
                  (((d = qr(c, u.mode, d)).return = u), (u = d));
                }
                return o(u);
              case j:
                return h(u, s, (c = la(c)), d);
            }
            if (M(c))
              return (function (l, a, o, u) {
                for (
                  var s = null, c = null, d = a, h = (a = 0), g = null;
                  null !== d && h < o.length;
                  h++
                ) {
                  d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
                  var v = p(l, d, o[h], u);
                  if (null === v) {
                    null === d && (d = g);
                    break;
                  }
                  (e && d && null === v.alternate && t(l, d),
                    (a = i(v, a, h)),
                    null === c ? (s = v) : (c.sibling = v),
                    (c = v),
                    (d = g));
                }
                if (h === o.length) return (n(l, d), fl && al(l, h), s);
                if (null === d) {
                  for (; h < o.length; h++)
                    null !== (d = f(l, o[h], u)) &&
                      ((a = i(d, a, h)),
                      null === c ? (s = d) : (c.sibling = d),
                      (c = d));
                  return (fl && al(l, h), s);
                }
                for (d = r(d); h < o.length; h++)
                  null !== (g = m(d, l, h, o[h], u)) &&
                    (e &&
                      null !== g.alternate &&
                      d.delete(null === g.key ? h : g.key),
                    (a = i(g, a, h)),
                    null === c ? (s = g) : (c.sibling = g),
                    (c = g));
                return (
                  e &&
                    d.forEach(function (e) {
                      return t(l, e);
                    }),
                  fl && al(l, h),
                  s
                );
              })(u, s, c, d);
            if (T(c)) {
              if ("function" != typeof (b = T(c))) throw Error(l(150));
              return (function (a, o, u, s) {
                if (null == u) throw Error(l(151));
                for (
                  var c = null,
                    d = null,
                    h = o,
                    g = (o = 0),
                    v = null,
                    y = u.next();
                  null !== h && !y.done;
                  g++, y = u.next()
                ) {
                  h.index > g ? ((v = h), (h = null)) : (v = h.sibling);
                  var b = p(a, h, y.value, s);
                  if (null === b) {
                    null === h && (h = v);
                    break;
                  }
                  (e && h && null === b.alternate && t(a, h),
                    (o = i(b, o, g)),
                    null === d ? (c = b) : (d.sibling = b),
                    (d = b),
                    (h = v));
                }
                if (y.done) return (n(a, h), fl && al(a, g), c);
                if (null === h) {
                  for (; !y.done; g++, y = u.next())
                    null !== (y = f(a, y.value, s)) &&
                      ((o = i(y, o, g)),
                      null === d ? (c = y) : (d.sibling = y),
                      (d = y));
                  return (fl && al(a, g), c);
                }
                for (h = r(h); !y.done; g++, y = u.next())
                  null !== (y = m(h, a, g, y.value, s)) &&
                    (e &&
                      null !== y.alternate &&
                      h.delete(null === y.key ? g : y.key),
                    (o = i(y, o, g)),
                    null === d ? (c = y) : (d.sibling = y),
                    (d = y));
                return (
                  e &&
                    h.forEach(function (e) {
                      return t(a, e);
                    }),
                  fl && al(a, g),
                  c
                );
              })(u, s, (c = b.call(c)), d);
            }
            if ("function" == typeof c.then) return h(u, s, ca(c), d);
            if (c.$$typeof === w) return h(u, s, Ml(u, c), d);
            fa(u, c);
          }
          return ("string" == typeof c && "" !== c) ||
            "number" == typeof c ||
            "bigint" == typeof c
            ? ((c = "" + c),
              null !== s && 6 === s.tag
                ? (n(u, s.sibling), ((d = a(s, c)).return = u), (u = d))
                : (n(u, s), ((d = Wr(c, u.mode, d)).return = u), (u = d)),
              o(u))
            : n(u, s);
        }
        return function (e, t, n, r) {
          try {
            sa = 0;
            var l = h(e, t, n, r);
            return ((ua = null), l);
          } catch (t) {
            if (t === Zl || t === ea) throw t;
            var a = Ir(29, t, null, e.mode);
            return ((a.lanes = r), (a.return = e), a);
          }
        };
      }
      var ma = pa(!0),
        ha = pa(!1),
        ga = !1;
      function va(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, lanes: 0, hiddenCallbacks: null },
          callbacks: null,
        };
      }
      function ya(e, t) {
        ((e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              callbacks: null,
            }));
      }
      function ba(e) {
        return { lane: e, tag: 0, payload: null, callback: null, next: null };
      }
      function ka(e, t, n) {
        var r = e.updateQueue;
        if (null === r) return null;
        if (((r = r.shared), 2 & ms)) {
          var l = r.pending;
          return (
            null === l ? (t.next = t) : ((t.next = l.next), (l.next = t)),
            (r.pending = t),
            (t = Rr(e)),
            Ar(e, null, n),
            t
          );
        }
        return (Lr(e, r, t, n), Rr(e));
      }
      function xa(e, t, n) {
        if (null !== (t = t.updateQueue) && ((t = t.shared), 4194048 & n)) {
          var r = t.lanes;
          ((n |= r &= e.pendingLanes), (t.lanes = n), Ae(e, n));
        }
      }
      function wa(e, t) {
        var n = e.updateQueue,
          r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var l = null,
            a = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var i = {
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: null,
                next: null,
              };
              (null === a ? (l = a = i) : (a = a.next = i), (n = n.next));
            } while (null !== n);
            null === a ? (l = a = t) : (a = a.next = t);
          } else l = a = t;
          return (
            (n = {
              baseState: r.baseState,
              firstBaseUpdate: l,
              lastBaseUpdate: a,
              shared: r.shared,
              callbacks: r.callbacks,
            }),
            void (e.updateQueue = n)
          );
        }
        (null === (e = n.lastBaseUpdate)
          ? (n.firstBaseUpdate = t)
          : (e.next = t),
          (n.lastBaseUpdate = t));
      }
      var Sa = !1;
      function Na() {
        if (Sa) {
          if (null !== Wl) throw Wl;
        }
      }
      function Ea(e, t, n, r) {
        Sa = !1;
        var l = e.updateQueue;
        ga = !1;
        var a = l.firstBaseUpdate,
          i = l.lastBaseUpdate,
          o = l.shared.pending;
        if (null !== o) {
          l.shared.pending = null;
          var u = o,
            s = u.next;
          ((u.next = null), null === i ? (a = s) : (i.next = s), (i = u));
          var c = e.alternate;
          null !== c &&
            (o = (c = c.updateQueue).lastBaseUpdate) !== i &&
            (null === o ? (c.firstBaseUpdate = s) : (o.next = s),
            (c.lastBaseUpdate = u));
        }
        if (null !== a) {
          var d = l.baseState;
          for (i = 0, c = s = u = null, o = a; ; ) {
            var f = -536870913 & o.lane,
              p = f !== o.lane;
            if (p ? (vs & f) === f : (r & f) === f) {
              (0 !== f && f === Vl && (Sa = !0),
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: null,
                      next: null,
                    }));
              e: {
                var h = e,
                  g = o;
                f = t;
                var v = n;
                switch (g.tag) {
                  case 1:
                    if ("function" == typeof (h = g.payload)) {
                      d = h.call(v, d, f);
                      break e;
                    }
                    d = h;
                    break e;
                  case 3:
                    h.flags = (-65537 & h.flags) | 128;
                  case 0:
                    if (
                      null ==
                      (f =
                        "function" == typeof (h = g.payload)
                          ? h.call(v, d, f)
                          : h)
                    )
                      break e;
                    d = m({}, d, f);
                    break e;
                  case 2:
                    ga = !0;
                }
              }
              null !== (f = o.callback) &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                null === (p = l.callbacks) ? (l.callbacks = [f]) : p.push(f));
            } else
              ((p = {
                lane: f,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              }),
                null === c ? ((s = c = p), (u = d)) : (c = c.next = p),
                (i |= f));
            if (null === (o = o.next)) {
              if (null === (o = l.shared.pending)) break;
              ((o = (p = o).next),
                (p.next = null),
                (l.lastBaseUpdate = p),
                (l.shared.pending = null));
            }
          }
          (null === c && (u = d),
            (l.baseState = u),
            (l.firstBaseUpdate = s),
            (l.lastBaseUpdate = c),
            null === a && (l.shared.lanes = 0),
            (Es |= i),
            (e.lanes = i),
            (e.memoizedState = d));
        }
      }
      function Ca(e, t) {
        if ("function" != typeof e) throw Error(l(191, e));
        e.call(t);
      }
      function ja(e, t) {
        var n = e.callbacks;
        if (null !== n)
          for (e.callbacks = null, e = 0; e < n.length; e++) Ca(n[e], t);
      }
      var Pa = $(null),
        za = $(0);
      function _a(e, t) {
        (H(za, (e = Ss)), H(Pa, t), (Ss = e | t.baseLanes));
      }
      function Ta() {
        (H(za, Ss), H(Pa, Pa.current));
      }
      function La() {
        ((Ss = za.current), U(Pa), U(za));
      }
      var Oa = $(null),
        Ma = null;
      function Aa(e) {
        var t = e.alternate;
        (H($a, 1 & $a.current),
          H(Oa, e),
          null === Ma &&
            (null === t || null !== Pa.current || null !== t.memoizedState) &&
            (Ma = e));
      }
      function Ra(e) {
        (H($a, $a.current), H(Oa, e), null === Ma && (Ma = e));
      }
      function Fa(e) {
        22 === e.tag
          ? (H($a, $a.current), H(Oa, e), null === Ma && (Ma = e))
          : Da();
      }
      function Da() {
        (H($a, $a.current), H(Oa, Oa.current));
      }
      function Ia(e) {
        (U(Oa), Ma === e && (Ma = null), U($a));
      }
      var $a = $(0);
      function Ua(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || Ld(n) || Od(n)))
              return t;
          } else if (
            19 !== t.tag ||
            ("forwards" !== t.memoizedProps.revealOrder &&
              "backwards" !== t.memoizedProps.revealOrder &&
              "unstable_legacy-backwards" !== t.memoizedProps.revealOrder &&
              "together" !== t.memoizedProps.revealOrder)
          ) {
            if (null !== t.child) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
          } else if (128 & t.flags) return t;
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
        return null;
      }
      var Ha = 0,
        Ba = null,
        Va = null,
        Wa = null,
        Qa = !1,
        qa = !1,
        Ka = !1,
        Ya = 0,
        Xa = 0,
        Ga = null,
        Za = 0;
      function Ja() {
        throw Error(l(321));
      }
      function ei(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!Jn(e[n], t[n])) return !1;
        return !0;
      }
      function ti(e, t, n, r, l, a) {
        return (
          (Ha = a),
          (Ba = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (A.H = null === e || null === e.memoizedState ? vo : yo),
          (Ka = !1),
          (a = n(r, l)),
          (Ka = !1),
          qa && (a = ri(t, n, r, l)),
          ni(e),
          a
        );
      }
      function ni(e) {
        A.H = go;
        var t = null !== Va && null !== Va.next;
        if (
          ((Ha = 0), (Wa = Va = Ba = null), (Qa = !1), (Xa = 0), (Ga = null), t)
        )
          throw Error(l(300));
        null === e ||
          Mo ||
          (null !== (e = e.dependencies) && Tl(e) && (Mo = !0));
      }
      function ri(e, t, n, r) {
        Ba = e;
        var a = 0;
        do {
          if ((qa && (Ga = null), (Xa = 0), (qa = !1), 25 <= a))
            throw Error(l(301));
          if (((a += 1), (Wa = Va = null), null != e.updateQueue)) {
            var i = e.updateQueue;
            ((i.lastEffect = null),
              (i.events = null),
              (i.stores = null),
              null != i.memoCache && (i.memoCache.index = 0));
          }
          ((A.H = bo), (i = t(n, r)));
        } while (qa);
        return i;
      }
      function li() {
        var e = A.H,
          t = e.useState()[0];
        return (
          (t = "function" == typeof t.then ? ci(t) : t),
          (e = e.useState()[0]),
          (null !== Va ? Va.memoizedState : null) !== e && (Ba.flags |= 1024),
          t
        );
      }
      function ai() {
        var e = 0 !== Ya;
        return ((Ya = 0), e);
      }
      function ii(e, t, n) {
        ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
      }
      function oi(e) {
        if (Qa) {
          for (e = e.memoizedState; null !== e; ) {
            var t = e.queue;
            (null !== t && (t.pending = null), (e = e.next));
          }
          Qa = !1;
        }
        ((Ha = 0),
          (Wa = Va = Ba = null),
          (qa = !1),
          (Xa = Ya = 0),
          (Ga = null));
      }
      function ui() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          null === Wa ? (Ba.memoizedState = Wa = e) : (Wa = Wa.next = e),
          Wa
        );
      }
      function si() {
        if (null === Va) {
          var e = Ba.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = Va.next;
        var t = null === Wa ? Ba.memoizedState : Wa.next;
        if (null !== t) ((Wa = t), (Va = e));
        else {
          if (null === e)
            throw null === Ba.alternate ? Error(l(467)) : Error(l(310));
          ((e = {
            memoizedState: (Va = e).memoizedState,
            baseState: Va.baseState,
            baseQueue: Va.baseQueue,
            queue: Va.queue,
            next: null,
          }),
            null === Wa ? (Ba.memoizedState = Wa = e) : (Wa = Wa.next = e));
        }
        return Wa;
      }
      function ci(e) {
        var t = Xa;
        return (
          (Xa += 1),
          null === Ga && (Ga = []),
          (e = ra(Ga, e, t)),
          (t = Ba),
          null === (null === Wa ? t.memoizedState : Wa.next) &&
            ((t = t.alternate),
            (A.H = null === t || null === t.memoizedState ? vo : yo)),
          e
        );
      }
      function di(e) {
        if (null !== e && "object" == typeof e) {
          if ("function" == typeof e.then) return ci(e);
          if (e.$$typeof === w) return Ol(e);
        }
        throw Error(l(438, String(e)));
      }
      function fi(e) {
        var t = null,
          n = Ba.updateQueue;
        if ((null !== n && (t = n.memoCache), null == t)) {
          var r = Ba.alternate;
          null !== r &&
            null !== (r = r.updateQueue) &&
            null != (r = r.memoCache) &&
            (t = {
              data: r.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            });
        }
        if (
          (null == t && (t = { data: [], index: 0 }),
          null === n &&
            ((n = {
              lastEffect: null,
              events: null,
              stores: null,
              memoCache: null,
            }),
            (Ba.updateQueue = n)),
          (n.memoCache = t),
          void 0 === (n = t.data[t.index]))
        )
          for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = z;
        return (t.index++, n);
      }
      function pi(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function mi(e) {
        return hi(si(), Va, e);
      }
      function hi(e, t, n) {
        var r = e.queue;
        if (null === r) throw Error(l(311));
        r.lastRenderedReducer = n;
        var a = e.baseQueue,
          i = r.pending;
        if (null !== i) {
          if (null !== a) {
            var o = a.next;
            ((a.next = i.next), (i.next = o));
          }
          ((t.baseQueue = a = i), (r.pending = null));
        }
        if (((i = e.baseState), null === a)) e.memoizedState = i;
        else {
          var u = (o = null),
            s = null,
            c = (t = a.next),
            d = !1;
          do {
            var f = -536870913 & c.lane;
            if (f !== c.lane ? (vs & f) === f : (Ha & f) === f) {
              var p = c.revertLane;
              if (0 === p)
                (null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      revertLane: 0,
                      gesture: null,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  f === Vl && (d = !0));
              else {
                if ((Ha & p) === p) {
                  ((c = c.next), p === Vl && (d = !0));
                  continue;
                }
                ((f = {
                  lane: 0,
                  revertLane: c.revertLane,
                  gesture: null,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }),
                  null === s ? ((u = s = f), (o = i)) : (s = s.next = f),
                  (Ba.lanes |= p),
                  (Es |= p));
              }
              ((f = c.action),
                Ka && n(i, f),
                (i = c.hasEagerState ? c.eagerState : n(i, f)));
            } else
              ((p = {
                lane: f,
                revertLane: c.revertLane,
                gesture: c.gesture,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null,
              }),
                null === s ? ((u = s = p), (o = i)) : (s = s.next = p),
                (Ba.lanes |= f),
                (Es |= f));
            c = c.next;
          } while (null !== c && c !== t);
          if (
            (null === s ? (o = i) : (s.next = u),
            !Jn(i, e.memoizedState) && ((Mo = !0), d && null !== (n = Wl)))
          )
            throw n;
          ((e.memoizedState = i),
            (e.baseState = o),
            (e.baseQueue = s),
            (r.lastRenderedState = i));
        }
        return (null === a && (r.lanes = 0), [e.memoizedState, r.dispatch]);
      }
      function gi(e) {
        var t = si(),
          n = t.queue;
        if (null === n) throw Error(l(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          a = n.pending,
          i = t.memoizedState;
        if (null !== a) {
          n.pending = null;
          var o = (a = a.next);
          do {
            ((i = e(i, o.action)), (o = o.next));
          } while (o !== a);
          (Jn(i, t.memoizedState) || (Mo = !0),
            (t.memoizedState = i),
            null === t.baseQueue && (t.baseState = i),
            (n.lastRenderedState = i));
        }
        return [i, r];
      }
      function vi(e, t, n) {
        var r = Ba,
          a = si(),
          i = fl;
        if (i) {
          if (void 0 === n) throw Error(l(407));
          n = n();
        } else n = t();
        var o = !Jn((Va || a).memoizedState, n);
        if (
          (o && ((a.memoizedState = n), (Mo = !0)),
          (a = a.queue),
          Hi(ki.bind(null, r, a, e), [e]),
          a.getSnapshot !== t || o || (null !== Wa && 1 & Wa.memoizedState.tag))
        ) {
          if (
            ((r.flags |= 2048),
            Fi(9, { destroy: void 0 }, bi.bind(null, r, a, n, t), null),
            null === hs)
          )
            throw Error(l(349));
          i || 127 & Ha || yi(r, t, n);
        }
        return n;
      }
      function yi(e, t, n) {
        ((e.flags |= 16384),
          (e = { getSnapshot: t, value: n }),
          null === (t = Ba.updateQueue)
            ? ((t = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (Ba.updateQueue = t),
              (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e));
      }
      function bi(e, t, n, r) {
        ((t.value = n), (t.getSnapshot = r), xi(t) && wi(e));
      }
      function ki(e, t, n) {
        return n(function () {
          xi(t) && wi(e);
        });
      }
      function xi(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !Jn(e, n);
        } catch {
          return !0;
        }
      }
      function wi(e) {
        var t = Mr(e, 2);
        null !== t && Ys(t, e, 2);
      }
      function Si(e) {
        var t = ui();
        if ("function" == typeof e) {
          var n = e;
          if (((e = n()), Ka)) {
            ke(!0);
            try {
              n();
            } finally {
              ke(!1);
            }
          }
        }
        return (
          (t.memoizedState = t.baseState = e),
          (t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: pi,
            lastRenderedState: e,
          }),
          t
        );
      }
      function Ni(e, t, n, r) {
        return ((e.baseState = n), hi(e, Va, "function" == typeof r ? r : pi));
      }
      function Ei(e, t, n, r, a) {
        if (po(e)) throw Error(l(485));
        if (null !== (e = t.action)) {
          var i = {
            payload: a,
            action: e,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function (e) {
              i.listeners.push(e);
            },
          };
          (null !== A.T ? n(!0) : (i.isTransition = !1),
            r(i),
            null === (n = t.pending)
              ? ((i.next = t.pending = i), Ci(t, i))
              : ((i.next = n.next), (t.pending = n.next = i)));
        }
      }
      function Ci(e, t) {
        var n = t.action,
          r = t.payload,
          l = e.state;
        if (t.isTransition) {
          var a = A.T,
            i = {};
          A.T = i;
          try {
            var o = n(l, r),
              u = A.S;
            (null !== u && u(i, o), ji(e, t, o));
          } catch (n) {
            zi(e, t, n);
          } finally {
            (null !== a && null !== i.types && (a.types = i.types), (A.T = a));
          }
        } else
          try {
            ji(e, t, (a = n(l, r)));
          } catch (n) {
            zi(e, t, n);
          }
      }
      function ji(e, t, n) {
        null !== n && "object" == typeof n && "function" == typeof n.then
          ? n.then(
              function (n) {
                Pi(e, t, n);
              },
              function (n) {
                return zi(e, t, n);
              },
            )
          : Pi(e, t, n);
      }
      function Pi(e, t, n) {
        ((t.status = "fulfilled"),
          (t.value = n),
          _i(t),
          (e.state = n),
          null !== (t = e.pending) &&
            ((n = t.next) === t
              ? (e.pending = null)
              : ((n = n.next), (t.next = n), Ci(e, n))));
      }
      function zi(e, t, n) {
        var r = e.pending;
        if (((e.pending = null), null !== r)) {
          r = r.next;
          do {
            ((t.status = "rejected"), (t.reason = n), _i(t), (t = t.next));
          } while (t !== r);
        }
        e.action = null;
      }
      function _i(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
      function Ti(e, t) {
        return t;
      }
      function Li(e, t) {
        if (fl) {
          var n = hs.formState;
          if (null !== n) {
            e: {
              var r = Ba;
              if (fl) {
                if (dl) {
                  t: {
                    for (var l = dl, a = ml; 8 !== l.nodeType; ) {
                      if (!a) {
                        l = null;
                        break t;
                      }
                      if (null === (l = Md(l.nextSibling))) {
                        l = null;
                        break t;
                      }
                    }
                    l = "F!" === (a = l.data) || "F" === a ? l : null;
                  }
                  if (l) {
                    ((dl = Md(l.nextSibling)), (r = "F!" === l.data));
                    break e;
                  }
                }
                gl(r);
              }
              r = !1;
            }
            r && (t = n[0]);
          }
        }
        return (
          ((n = ui()).memoizedState = n.baseState = t),
          (r = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ti,
            lastRenderedState: t,
          }),
          (n.queue = r),
          (n = so.bind(null, Ba, r)),
          (r.dispatch = n),
          (r = Si(!1)),
          (a = fo.bind(null, Ba, !1, r.queue)),
          (l = { state: t, dispatch: null, action: e, pending: null }),
          ((r = ui()).queue = l),
          (n = Ei.bind(null, Ba, l, a, n)),
          (l.dispatch = n),
          (r.memoizedState = e),
          [t, n, !1]
        );
      }
      function Oi(e) {
        return Mi(si(), Va, e);
      }
      function Mi(e, t, n) {
        if (
          ((t = hi(e, t, Ti)[0]),
          (e = mi(pi)[0]),
          "object" == typeof t && null !== t && "function" == typeof t.then)
        )
          try {
            var r = ci(t);
          } catch (e) {
            throw e === Zl ? ea : e;
          }
        else r = t;
        var l = (t = si()).queue,
          a = l.dispatch;
        return (
          n !== t.memoizedState &&
            ((Ba.flags |= 2048),
            Fi(9, { destroy: void 0 }, Ai.bind(null, l, n), null)),
          [r, a, e]
        );
      }
      function Ai(e, t) {
        e.action = t;
      }
      function Ri(e) {
        var t = si(),
          n = Va;
        if (null !== n) return Mi(t, n, e);
        (si(), (t = t.memoizedState));
        var r = (n = si()).queue.dispatch;
        return ((n.memoizedState = e), [t, r, !1]);
      }
      function Fi(e, t, n, r) {
        return (
          (e = { tag: e, create: n, deps: r, inst: t, next: null }),
          null === (t = Ba.updateQueue) &&
            ((t = {
              lastEffect: null,
              events: null,
              stores: null,
              memoCache: null,
            }),
            (Ba.updateQueue = t)),
          null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }
      function Di() {
        return si().memoizedState;
      }
      function Ii(e, t, n, r) {
        var l = ui();
        ((Ba.flags |= e),
          (l.memoizedState = Fi(
            1 | t,
            { destroy: void 0 },
            n,
            void 0 === r ? null : r,
          )));
      }
      function $i(e, t, n, r) {
        var l = si();
        r = void 0 === r ? null : r;
        var a = l.memoizedState.inst;
        null !== Va && null !== r && ei(r, Va.memoizedState.deps)
          ? (l.memoizedState = Fi(t, a, n, r))
          : ((Ba.flags |= e), (l.memoizedState = Fi(1 | t, a, n, r)));
      }
      function Ui(e, t) {
        Ii(8390656, 8, e, t);
      }
      function Hi(e, t) {
        $i(2048, 8, e, t);
      }
      function Bi(e) {
        var t = si().memoizedState;
        return (
          (function (e) {
            Ba.flags |= 4;
            var t = Ba.updateQueue;
            if (null === t)
              ((t = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
                (Ba.updateQueue = t),
                (t.events = [e]));
            else {
              var n = t.events;
              null === n ? (t.events = [e]) : n.push(e);
            }
          })({ ref: t, nextImpl: e }),
          function () {
            if (2 & ms) throw Error(l(440));
            return t.impl.apply(void 0, arguments);
          }
        );
      }
      function Vi(e, t) {
        return $i(4, 2, e, t);
      }
      function Wi(e, t) {
        return $i(4, 4, e, t);
      }
      function Qi(e, t) {
        if ("function" == typeof t) {
          e = e();
          var n = t(e);
          return function () {
            "function" == typeof n ? n() : t(null);
          };
        }
        if (null != t)
          return (
            (e = e()),
            (t.current = e),
            function () {
              t.current = null;
            }
          );
      }
      function qi(e, t, n) {
        ((n = null != n ? n.concat([e]) : null),
          $i(4, 4, Qi.bind(null, t, e), n));
      }
      function Ki() {}
      function Yi(e, t) {
        var n = si();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== t && ei(t, r[1])
          ? r[0]
          : ((n.memoizedState = [e, t]), e);
      }
      function Xi(e, t) {
        var n = si();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        if (null !== t && ei(t, r[1])) return r[0];
        if (((r = e()), Ka)) {
          ke(!0);
          try {
            e();
          } finally {
            ke(!1);
          }
        }
        return ((n.memoizedState = [r, t]), r);
      }
      function Gi(e, t, n) {
        return void 0 === n || (1073741824 & Ha && !(261930 & vs))
          ? (e.memoizedState = t)
          : ((e.memoizedState = n), (e = Ks()), (Ba.lanes |= e), (Es |= e), n);
      }
      function Zi(e, t, n, r) {
        return Jn(n, t)
          ? n
          : null !== Pa.current
            ? ((e = Gi(e, n, r)), Jn(e, t) || (Mo = !0), e)
            : 42 & Ha && (!(1073741824 & Ha) || 261930 & vs)
              ? ((e = Ks()), (Ba.lanes |= e), (Es |= e), t)
              : ((Mo = !0), (e.memoizedState = n));
      }
      function Ji(e, t, n, r, l) {
        var a = R.p;
        R.p = 0 !== a && 8 > a ? a : 8;
        var i = A.T,
          o = {};
        ((A.T = o), fo(e, !1, t, n));
        try {
          var u = l(),
            s = A.S;
          if (
            (null !== s && s(o, u),
            null !== u && "object" == typeof u && "function" == typeof u.then)
          ) {
            var c = (function (e, t) {
              var n = [],
                r = {
                  status: "pending",
                  value: null,
                  reason: null,
                  then: function (e) {
                    n.push(e);
                  },
                };
              return (
                e.then(
                  function () {
                    ((r.status = "fulfilled"), (r.value = t));
                    for (var e = 0; e < n.length; e++) (0, n[e])(t);
                  },
                  function (e) {
                    for (
                      r.status = "rejected", r.reason = e, e = 0;
                      e < n.length;
                      e++
                    )
                      (0, n[e])(void 0);
                  },
                ),
                r
              );
            })(u, r);
            co(e, t, c, qs());
          } else co(e, t, r, qs());
        } catch (n) {
          co(
            e,
            t,
            { then: function () {}, status: "rejected", reason: n },
            qs(),
          );
        } finally {
          ((R.p = a),
            null !== i && null !== o.types && (i.types = o.types),
            (A.T = i));
        }
      }
      function eo() {}
      function to(e, t, n, r) {
        if (5 !== e.tag) throw Error(l(476));
        var a = no(e).queue;
        Ji(
          e,
          a,
          t,
          F,
          null === n
            ? eo
            : function () {
                return (ro(e), n(r));
              },
        );
      }
      function no(e) {
        var t = e.memoizedState;
        if (null !== t) return t;
        var n = {};
        return (
          ((t = {
            memoizedState: F,
            baseState: F,
            baseQueue: null,
            queue: {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: pi,
              lastRenderedState: F,
            },
            next: null,
          }).next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: pi,
              lastRenderedState: n,
            },
            next: null,
          }),
          (e.memoizedState = t),
          null !== (e = e.alternate) && (e.memoizedState = t),
          t
        );
      }
      function ro(e) {
        var t = no(e);
        (null === t.next && (t = e.alternate.memoizedState),
          co(e, t.next.queue, {}, qs()));
      }
      function lo() {
        return Ol(ff);
      }
      function ao() {
        return si().memoizedState;
      }
      function io() {
        return si().memoizedState;
      }
      function oo(e) {
        for (var t = e.return; null !== t; ) {
          switch (t.tag) {
            case 24:
            case 3:
              var n = qs(),
                r = ka(t, (e = ba(n)), n);
              return (
                null !== r && (Ys(r, t, n), xa(r, t, n)),
                (t = { cache: $l() }),
                void (e.payload = t)
              );
          }
          t = t.return;
        }
      }
      function uo(e, t, n) {
        var r = qs();
        ((n = {
          lane: r,
          revertLane: 0,
          gesture: null,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
          po(e)
            ? mo(t, n)
            : null !== (n = Or(e, t, n, r)) && (Ys(n, e, r), ho(n, t, r)));
      }
      function so(e, t, n) {
        co(e, t, n, qs());
      }
      function co(e, t, n, r) {
        var l = {
          lane: r,
          revertLane: 0,
          gesture: null,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
        if (po(e)) mo(t, l);
        else {
          var a = e.alternate;
          if (
            0 === e.lanes &&
            (null === a || 0 === a.lanes) &&
            null !== (a = t.lastRenderedReducer)
          )
            try {
              var i = t.lastRenderedState,
                o = a(i, n);
              if (((l.hasEagerState = !0), (l.eagerState = o), Jn(o, i)))
                return (Lr(e, t, l, 0), null === hs && Tr(), !1);
            } catch {}
          if (null !== (n = Or(e, t, l, r)))
            return (Ys(n, e, r), ho(n, t, r), !0);
        }
        return !1;
      }
      function fo(e, t, n, r) {
        if (
          ((r = {
            lane: 2,
            revertLane: Wc(),
            gesture: null,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
          po(e))
        ) {
          if (t) throw Error(l(479));
        } else null !== (t = Or(e, n, r, 2)) && Ys(t, e, 2);
      }
      function po(e) {
        var t = e.alternate;
        return e === Ba || (null !== t && t === Ba);
      }
      function mo(e, t) {
        qa = Qa = !0;
        var n = e.pending;
        (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
          (e.pending = t));
      }
      function ho(e, t, n) {
        if (4194048 & n) {
          var r = t.lanes;
          ((n |= r &= e.pendingLanes), (t.lanes = n), Ae(e, n));
        }
      }
      var go = {
        readContext: Ol,
        use: di,
        useCallback: Ja,
        useContext: Ja,
        useEffect: Ja,
        useImperativeHandle: Ja,
        useLayoutEffect: Ja,
        useInsertionEffect: Ja,
        useMemo: Ja,
        useReducer: Ja,
        useRef: Ja,
        useState: Ja,
        useDebugValue: Ja,
        useDeferredValue: Ja,
        useTransition: Ja,
        useSyncExternalStore: Ja,
        useId: Ja,
        useHostTransitionStatus: Ja,
        useFormState: Ja,
        useActionState: Ja,
        useOptimistic: Ja,
        useMemoCache: Ja,
        useCacheRefresh: Ja,
      };
      go.useEffectEvent = Ja;
      var vo = {
          readContext: Ol,
          use: di,
          useCallback: function (e, t) {
            return ((ui().memoizedState = [e, void 0 === t ? null : t]), e);
          },
          useContext: Ol,
          useEffect: Ui,
          useImperativeHandle: function (e, t, n) {
            ((n = null != n ? n.concat([e]) : null),
              Ii(4194308, 4, Qi.bind(null, t, e), n));
          },
          useLayoutEffect: function (e, t) {
            return Ii(4194308, 4, e, t);
          },
          useInsertionEffect: function (e, t) {
            Ii(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = ui();
            t = void 0 === t ? null : t;
            var r = e();
            if (Ka) {
              ke(!0);
              try {
                e();
              } finally {
                ke(!1);
              }
            }
            return ((n.memoizedState = [r, t]), r);
          },
          useReducer: function (e, t, n) {
            var r = ui();
            if (void 0 !== n) {
              var l = n(t);
              if (Ka) {
                ke(!0);
                try {
                  n(t);
                } finally {
                  ke(!1);
                }
              }
            } else l = t;
            return (
              (r.memoizedState = r.baseState = l),
              (e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: l,
              }),
              (r.queue = e),
              (e = e.dispatch = uo.bind(null, Ba, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function (e) {
            return ((e = { current: e }), (ui().memoizedState = e));
          },
          useState: function (e) {
            var t = (e = Si(e)).queue,
              n = so.bind(null, Ba, t);
            return ((t.dispatch = n), [e.memoizedState, n]);
          },
          useDebugValue: Ki,
          useDeferredValue: function (e, t) {
            return Gi(ui(), e, t);
          },
          useTransition: function () {
            var e = Si(!1);
            return (
              (e = Ji.bind(null, Ba, e.queue, !0, !1)),
              (ui().memoizedState = e),
              [!1, e]
            );
          },
          useSyncExternalStore: function (e, t, n) {
            var r = Ba,
              a = ui();
            if (fl) {
              if (void 0 === n) throw Error(l(407));
              n = n();
            } else {
              if (((n = t()), null === hs)) throw Error(l(349));
              127 & vs || yi(r, t, n);
            }
            a.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
              (a.queue = i),
              Ui(ki.bind(null, r, i, e), [e]),
              (r.flags |= 2048),
              Fi(9, { destroy: void 0 }, bi.bind(null, r, i, n, t), null),
              n
            );
          },
          useId: function () {
            var e = ui(),
              t = hs.identifierPrefix;
            if (fl) {
              var n = ll;
              ((t =
                "_" +
                t +
                "R_" +
                (n = (rl & ~(1 << (32 - xe(rl) - 1))).toString(32) + n)),
                0 < (n = Ya++) && (t += "H" + n.toString(32)),
                (t += "_"));
            } else t = "_" + t + "r_" + (n = Za++).toString(32) + "_";
            return (e.memoizedState = t);
          },
          useHostTransitionStatus: lo,
          useFormState: Li,
          useActionState: Li,
          useOptimistic: function (e) {
            var t = ui();
            t.memoizedState = t.baseState = e;
            var n = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: null,
              lastRenderedState: null,
            };
            return (
              (t.queue = n),
              (t = fo.bind(null, Ba, !0, n)),
              (n.dispatch = t),
              [e, t]
            );
          },
          useMemoCache: fi,
          useCacheRefresh: function () {
            return (ui().memoizedState = oo.bind(null, Ba));
          },
          useEffectEvent: function (e) {
            var t = ui(),
              n = { impl: e };
            return (
              (t.memoizedState = n),
              function () {
                if (2 & ms) throw Error(l(440));
                return n.impl.apply(void 0, arguments);
              }
            );
          },
        },
        yo = {
          readContext: Ol,
          use: di,
          useCallback: Yi,
          useContext: Ol,
          useEffect: Hi,
          useImperativeHandle: qi,
          useInsertionEffect: Vi,
          useLayoutEffect: Wi,
          useMemo: Xi,
          useReducer: mi,
          useRef: Di,
          useState: function () {
            return mi(pi);
          },
          useDebugValue: Ki,
          useDeferredValue: function (e, t) {
            return Zi(si(), Va.memoizedState, e, t);
          },
          useTransition: function () {
            var e = mi(pi)[0],
              t = si().memoizedState;
            return ["boolean" == typeof e ? e : ci(e), t];
          },
          useSyncExternalStore: vi,
          useId: ao,
          useHostTransitionStatus: lo,
          useFormState: Oi,
          useActionState: Oi,
          useOptimistic: function (e, t) {
            return Ni(si(), 0, e, t);
          },
          useMemoCache: fi,
          useCacheRefresh: io,
        };
      yo.useEffectEvent = Bi;
      var bo = {
        readContext: Ol,
        use: di,
        useCallback: Yi,
        useContext: Ol,
        useEffect: Hi,
        useImperativeHandle: qi,
        useInsertionEffect: Vi,
        useLayoutEffect: Wi,
        useMemo: Xi,
        useReducer: gi,
        useRef: Di,
        useState: function () {
          return gi(pi);
        },
        useDebugValue: Ki,
        useDeferredValue: function (e, t) {
          var n = si();
          return null === Va ? Gi(n, e, t) : Zi(n, Va.memoizedState, e, t);
        },
        useTransition: function () {
          var e = gi(pi)[0],
            t = si().memoizedState;
          return ["boolean" == typeof e ? e : ci(e), t];
        },
        useSyncExternalStore: vi,
        useId: ao,
        useHostTransitionStatus: lo,
        useFormState: Ri,
        useActionState: Ri,
        useOptimistic: function (e, t) {
          var n = si();
          return null !== Va
            ? Ni(n, 0, e, t)
            : ((n.baseState = e), [e, n.queue.dispatch]);
        },
        useMemoCache: fi,
        useCacheRefresh: io,
      };
      function ko(e, t, n, r) {
        ((n = null == (n = n(r, (t = e.memoizedState))) ? t : m({}, t, n)),
          (e.memoizedState = n),
          0 === e.lanes && (e.updateQueue.baseState = n));
      }
      bo.useEffectEvent = Bi;
      var xo = {
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var r = qs(),
            l = ba(r);
          ((l.payload = t),
            null != n && (l.callback = n),
            null !== (t = ka(e, l, r)) && (Ys(t, e, r), xa(t, e, r)));
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var r = qs(),
            l = ba(r);
          ((l.tag = 1),
            (l.payload = t),
            null != n && (l.callback = n),
            null !== (t = ka(e, l, r)) && (Ys(t, e, r), xa(t, e, r)));
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = qs(),
            r = ba(n);
          ((r.tag = 2),
            null != t && (r.callback = t),
            null !== (t = ka(e, r, n)) && (Ys(t, e, n), xa(t, e, n)));
        },
      };
      function wo(e, t, n, r, l, a, i) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, a, i)
          : !t.prototype ||
              !t.prototype.isPureReactComponent ||
              !er(n, r) ||
              !er(l, a);
      }
      function So(e, t, n, r) {
        ((e = t.state),
          "function" == typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(n, r),
          "function" == typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && xo.enqueueReplaceState(t, t.state, null));
      }
      function No(e, t) {
        var n = t;
        if ("ref" in t)
          for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
        if ((e = e.defaultProps))
          for (var l in (n === t && (n = m({}, n)), e))
            void 0 === n[l] && (n[l] = e[l]);
        return n;
      }
      function Eo(e) {
        jr(e);
      }
      function Co(e) {
        console.error(e);
      }
      function jo(e) {
        jr(e);
      }
      function Po(e, t) {
        try {
          (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
      }
      function zo(e, t, n) {
        try {
          (0, e.onCaughtError)(n.value, {
            componentStack: n.stack,
            errorBoundary: 1 === t.tag ? t.stateNode : null,
          });
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
      }
      function _o(e, t, n) {
        return (
          ((n = ba(n)).tag = 3),
          (n.payload = { element: null }),
          (n.callback = function () {
            Po(e, t);
          }),
          n
        );
      }
      function To(e) {
        return (((e = ba(e)).tag = 3), e);
      }
      function Lo(e, t, n, r) {
        var l = n.type.getDerivedStateFromError;
        if ("function" == typeof l) {
          var a = r.value;
          ((e.payload = function () {
            return l(a);
          }),
            (e.callback = function () {
              zo(t, n, r);
            }));
        }
        var i = n.stateNode;
        null !== i &&
          "function" == typeof i.componentDidCatch &&
          (e.callback = function () {
            (zo(t, n, r),
              "function" != typeof l &&
                (null === Fs ? (Fs = new Set([this])) : Fs.add(this)));
            var e = r.stack;
            this.componentDidCatch(r.value, {
              componentStack: null !== e ? e : "",
            });
          });
      }
      var Oo = Error(l(461)),
        Mo = !1;
      function Ao(e, t, n, r) {
        t.child = null === e ? ha(t, null, n, r) : ma(t, e.child, n, r);
      }
      function Ro(e, t, n, r, l) {
        n = n.render;
        var a = t.ref;
        if ("ref" in r) {
          var i = {};
          for (var o in r) "ref" !== o && (i[o] = r[o]);
        } else i = r;
        return (
          Ll(t),
          (r = ti(e, t, n, i, a, l)),
          (o = ai()),
          null === e || Mo
            ? (fl && o && ol(t), (t.flags |= 1), Ao(e, t, r, l), t.child)
            : (ii(e, t, l), au(e, t, l))
        );
      }
      function Fo(e, t, n, r, l) {
        if (null === e) {
          var a = n.type;
          return "function" != typeof a ||
            $r(a) ||
            void 0 !== a.defaultProps ||
            null !== n.compare
            ? (((e = Br(n.type, null, r, t, t.mode, l)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = a), Do(e, t, a, r, l));
        }
        if (((a = e.child), !iu(e, l))) {
          var i = a.memoizedProps;
          if ((n = null !== (n = n.compare) ? n : er)(i, r) && e.ref === t.ref)
            return au(e, t, l);
        }
        return (
          (t.flags |= 1),
          ((e = Ur(a, r)).ref = t.ref),
          (e.return = t),
          (t.child = e)
        );
      }
      function Do(e, t, n, r, l) {
        if (null !== e) {
          var a = e.memoizedProps;
          if (er(a, r) && e.ref === t.ref) {
            if (((Mo = !1), (t.pendingProps = r = a), !iu(e, l)))
              return ((t.lanes = e.lanes), au(e, t, l));
            131072 & e.flags && (Mo = !0);
          }
        }
        return Wo(e, t, n, r, l);
      }
      function Io(e, t, n, r) {
        var l = r.children,
          a = null !== e ? e.memoizedState : null;
        if (
          (null === e &&
            null === t.stateNode &&
            (t.stateNode = {
              _visibility: 1,
              _pendingMarkers: null,
              _retryCache: null,
              _transitions: null,
            }),
          "hidden" === r.mode)
        ) {
          if (128 & t.flags) {
            if (((a = null !== a ? a.baseLanes | n : n), null !== e)) {
              for (r = t.child = e.child, l = 0; null !== r; )
                ((l = l | r.lanes | r.childLanes), (r = r.sibling));
              r = l & ~a;
            } else ((r = 0), (t.child = null));
            return Uo(e, t, a, n, r);
          }
          if (!(536870912 & n))
            return (
              (r = t.lanes = 536870912),
              Uo(e, t, null !== a ? a.baseLanes | n : n, n, r)
            );
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            null !== e && Xl(0, null !== a ? a.cachePool : null),
            null !== a ? _a(t, a) : Ta(),
            Fa(t));
        } else
          null !== a
            ? (Xl(0, a.cachePool), _a(t, a), Da(), (t.memoizedState = null))
            : (null !== e && Xl(0, null), Ta(), Da());
        return (Ao(e, t, l, n), t.child);
      }
      function $o(e, t) {
        return (
          (null !== e && 22 === e.tag) ||
            null !== t.stateNode ||
            (t.stateNode = {
              _visibility: 1,
              _pendingMarkers: null,
              _retryCache: null,
              _transitions: null,
            }),
          t.sibling
        );
      }
      function Uo(e, t, n, r, l) {
        var a = Yl();
        return (
          (a = null === a ? null : { parent: Il._currentValue, pool: a }),
          (t.memoizedState = { baseLanes: n, cachePool: a }),
          null !== e && Xl(0, null),
          Ta(),
          Fa(t),
          null !== e && _l(e, t, r, !0),
          (t.childLanes = l),
          null
        );
      }
      function Ho(e, t) {
        return (
          ((t = eu({ mode: t.mode, children: t.children }, e.mode)).ref =
            e.ref),
          (e.child = t),
          (t.return = e),
          t
        );
      }
      function Bo(e, t, n) {
        return (
          ma(t, e.child, null, n),
          ((e = Ho(t, t.pendingProps)).flags |= 2),
          Ia(t),
          (t.memoizedState = null),
          e
        );
      }
      function Vo(e, t) {
        var n = t.ref;
        if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
        else {
          if ("function" != typeof n && "object" != typeof n)
            throw Error(l(284));
          (null === e || e.ref !== n) && (t.flags |= 4194816);
        }
      }
      function Wo(e, t, n, r, l) {
        return (
          Ll(t),
          (n = ti(e, t, n, r, void 0, l)),
          (r = ai()),
          null === e || Mo
            ? (fl && r && ol(t), (t.flags |= 1), Ao(e, t, n, l), t.child)
            : (ii(e, t, l), au(e, t, l))
        );
      }
      function Qo(e, t, n, r, l, a) {
        return (
          Ll(t),
          (t.updateQueue = null),
          (n = ri(t, r, n, l)),
          ni(e),
          (r = ai()),
          null === e || Mo
            ? (fl && r && ol(t), (t.flags |= 1), Ao(e, t, n, a), t.child)
            : (ii(e, t, a), au(e, t, a))
        );
      }
      function qo(e, t, n, r, l) {
        if ((Ll(t), null === t.stateNode)) {
          var a = Fr,
            i = n.contextType;
          ("object" == typeof i && null !== i && (a = Ol(i)),
            (a = new n(r, a)),
            (t.memoizedState =
              null !== a.state && void 0 !== a.state ? a.state : null),
            (a.updater = xo),
            (t.stateNode = a),
            (a._reactInternals = t),
            ((a = t.stateNode).props = r),
            (a.state = t.memoizedState),
            (a.refs = {}),
            va(t),
            (i = n.contextType),
            (a.context = "object" == typeof i && null !== i ? Ol(i) : Fr),
            (a.state = t.memoizedState),
            "function" == typeof (i = n.getDerivedStateFromProps) &&
              (ko(t, n, i, r), (a.state = t.memoizedState)),
            "function" == typeof n.getDerivedStateFromProps ||
              "function" == typeof a.getSnapshotBeforeUpdate ||
              ("function" != typeof a.UNSAFE_componentWillMount &&
                "function" != typeof a.componentWillMount) ||
              ((i = a.state),
              "function" == typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" == typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              i !== a.state && xo.enqueueReplaceState(a, a.state, null),
              Ea(t, r, a, l),
              Na(),
              (a.state = t.memoizedState)),
            "function" == typeof a.componentDidMount && (t.flags |= 4194308),
            (r = !0));
        } else if (null === e) {
          a = t.stateNode;
          var o = t.memoizedProps,
            u = No(n, o);
          a.props = u;
          var s = a.context,
            c = n.contextType;
          ((i = Fr), "object" == typeof c && null !== c && (i = Ol(c)));
          var d = n.getDerivedStateFromProps;
          ((c =
            "function" == typeof d ||
            "function" == typeof a.getSnapshotBeforeUpdate),
            (o = t.pendingProps !== o),
            c ||
              ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                "function" != typeof a.componentWillReceiveProps) ||
              ((o || s !== i) && So(t, a, r, i)),
            (ga = !1));
          var f = t.memoizedState;
          ((a.state = f),
            Ea(t, r, a, l),
            Na(),
            (s = t.memoizedState),
            o || f !== s || ga
              ? ("function" == typeof d &&
                  (ko(t, n, d, r), (s = t.memoizedState)),
                (u = ga || wo(t, n, u, r, f, s, i))
                  ? (c ||
                      ("function" != typeof a.UNSAFE_componentWillMount &&
                        "function" != typeof a.componentWillMount) ||
                      ("function" == typeof a.componentWillMount &&
                        a.componentWillMount(),
                      "function" == typeof a.UNSAFE_componentWillMount &&
                        a.UNSAFE_componentWillMount()),
                    "function" == typeof a.componentDidMount &&
                      (t.flags |= 4194308))
                  : ("function" == typeof a.componentDidMount &&
                      (t.flags |= 4194308),
                    (t.memoizedProps = r),
                    (t.memoizedState = s)),
                (a.props = r),
                (a.state = s),
                (a.context = i),
                (r = u))
              : ("function" == typeof a.componentDidMount &&
                  (t.flags |= 4194308),
                (r = !1)));
        } else {
          ((a = t.stateNode),
            ya(e, t),
            (c = No(n, (i = t.memoizedProps))),
            (a.props = c),
            (d = t.pendingProps),
            (f = a.context),
            (s = n.contextType),
            (u = Fr),
            "object" == typeof s && null !== s && (u = Ol(s)),
            (s =
              "function" == typeof (o = n.getDerivedStateFromProps) ||
              "function" == typeof a.getSnapshotBeforeUpdate) ||
              ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                "function" != typeof a.componentWillReceiveProps) ||
              ((i !== d || f !== u) && So(t, a, r, u)),
            (ga = !1),
            (f = t.memoizedState),
            (a.state = f),
            Ea(t, r, a, l),
            Na());
          var p = t.memoizedState;
          i !== d ||
          f !== p ||
          ga ||
          (null !== e && null !== e.dependencies && Tl(e.dependencies))
            ? ("function" == typeof o &&
                (ko(t, n, o, r), (p = t.memoizedState)),
              (c =
                ga ||
                wo(t, n, c, r, f, p, u) ||
                (null !== e && null !== e.dependencies && Tl(e.dependencies)))
                ? (s ||
                    ("function" != typeof a.UNSAFE_componentWillUpdate &&
                      "function" != typeof a.componentWillUpdate) ||
                    ("function" == typeof a.componentWillUpdate &&
                      a.componentWillUpdate(r, p, u),
                    "function" == typeof a.UNSAFE_componentWillUpdate &&
                      a.UNSAFE_componentWillUpdate(r, p, u)),
                  "function" == typeof a.componentDidUpdate && (t.flags |= 4),
                  "function" == typeof a.getSnapshotBeforeUpdate &&
                    (t.flags |= 1024))
                : ("function" != typeof a.componentDidUpdate ||
                    (i === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 4),
                  "function" != typeof a.getSnapshotBeforeUpdate ||
                    (i === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 1024),
                  (t.memoizedProps = r),
                  (t.memoizedState = p)),
              (a.props = r),
              (a.state = p),
              (a.context = u),
              (r = c))
            : ("function" != typeof a.componentDidUpdate ||
                (i === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 4),
              "function" != typeof a.getSnapshotBeforeUpdate ||
                (i === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 1024),
              (r = !1));
        }
        return (
          (a = r),
          Vo(e, t),
          (r = !!(128 & t.flags)),
          a || r
            ? ((a = t.stateNode),
              (n =
                r && "function" != typeof n.getDerivedStateFromError
                  ? null
                  : a.render()),
              (t.flags |= 1),
              null !== e && r
                ? ((t.child = ma(t, e.child, null, l)),
                  (t.child = ma(t, null, n, l)))
                : Ao(e, t, n, l),
              (t.memoizedState = a.state),
              (e = t.child))
            : (e = au(e, t, l)),
          e
        );
      }
      function Ko(e, t, n, r) {
        return (kl(), (t.flags |= 256), Ao(e, t, n, r), t.child);
      }
      var Yo = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null,
      };
      function Xo(e) {
        return { baseLanes: e, cachePool: Gl() };
      }
      function Go(e, t, n) {
        return ((e = null !== e ? e.childLanes & ~n : 0), t && (e |= Ps), e);
      }
      function Zo(e, t, n) {
        var r,
          a = t.pendingProps,
          i = !1,
          o = !!(128 & t.flags);
        if (
          ((r = o) ||
            (r =
              (null === e || null !== e.memoizedState) && !!(2 & $a.current)),
          r && ((i = !0), (t.flags &= -129)),
          (r = !!(32 & t.flags)),
          (t.flags &= -33),
          null === e)
        ) {
          if (fl) {
            if (
              (i ? Aa(t) : Da(),
              (e = dl)
                ? null !==
                    (e =
                      null !== (e = Td(e, ml)) && "&" !== e.data ? e : null) &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: null !== nl ? { id: rl, overflow: ll } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  ((n = Qr(e)).return = t),
                  (t.child = n),
                  (cl = t),
                  (dl = null))
                : (e = null),
              null === e)
            )
              throw gl(t);
            return (Od(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
          }
          var u = a.children;
          return (
            (a = a.fallback),
            i
              ? (Da(),
                (u = eu({ mode: "hidden", children: u }, (i = t.mode))),
                (a = Vr(a, i, n, null)),
                (u.return = t),
                (a.return = t),
                (u.sibling = a),
                (t.child = u),
                ((a = t.child).memoizedState = Xo(n)),
                (a.childLanes = Go(e, r, n)),
                (t.memoizedState = Yo),
                $o(null, a))
              : (Aa(t), Jo(t, u))
          );
        }
        var s = e.memoizedState;
        if (null !== s && null !== (u = s.dehydrated)) {
          if (o)
            256 & t.flags
              ? (Aa(t), (t.flags &= -257), (t = tu(e, t, n)))
              : null !== t.memoizedState
                ? (Da(), (t.child = e.child), (t.flags |= 128), (t = null))
                : (Da(),
                  (u = a.fallback),
                  (i = t.mode),
                  (a = eu({ mode: "visible", children: a.children }, i)),
                  ((u = Vr(u, i, n, null)).flags |= 2),
                  (a.return = t),
                  (u.return = t),
                  (a.sibling = u),
                  (t.child = a),
                  ma(t, e.child, null, n),
                  ((a = t.child).memoizedState = Xo(n)),
                  (a.childLanes = Go(e, r, n)),
                  (t.memoizedState = Yo),
                  (t = $o(null, a)));
          else if ((Aa(t), Od(u))) {
            if ((r = u.nextSibling && u.nextSibling.dataset)) var c = r.dgst;
            ((r = c),
              ((a = Error(l(419))).stack = ""),
              (a.digest = r),
              wl({ value: a, source: null, stack: null }),
              (t = tu(e, t, n)));
          } else if (
            (Mo || _l(e, t, n, !1), (r = 0 !== (n & e.childLanes)), Mo || r)
          ) {
            if (null !== (r = hs) && 0 !== (a = Re(r, n)) && a !== s.retryLane)
              throw ((s.retryLane = a), Mr(e, a), Ys(r, e, a), Oo);
            (Ld(u) || oc(), (t = tu(e, t, n)));
          } else
            Ld(u)
              ? ((t.flags |= 192), (t.child = e.child), (t = null))
              : ((e = s.treeContext),
                (dl = Md(u.nextSibling)),
                (cl = t),
                (fl = !0),
                (pl = null),
                (ml = !1),
                null !== e && sl(t, e),
                ((t = Jo(t, a.children)).flags |= 4096));
          return t;
        }
        return i
          ? (Da(),
            (u = a.fallback),
            (i = t.mode),
            (c = (s = e.child).sibling),
            ((a = Ur(s, {
              mode: "hidden",
              children: a.children,
            })).subtreeFlags = 65011712 & s.subtreeFlags),
            null !== c ? (u = Ur(c, u)) : ((u = Vr(u, i, n, null)).flags |= 2),
            (u.return = t),
            (a.return = t),
            (a.sibling = u),
            (t.child = a),
            $o(null, a),
            (a = t.child),
            null === (u = e.child.memoizedState)
              ? (u = Xo(n))
              : (null !== (i = u.cachePool)
                  ? ((s = Il._currentValue),
                    (i = i.parent !== s ? { parent: s, pool: s } : i))
                  : (i = Gl()),
                (u = { baseLanes: u.baseLanes | n, cachePool: i })),
            (a.memoizedState = u),
            (a.childLanes = Go(e, r, n)),
            (t.memoizedState = Yo),
            $o(e.child, a))
          : (Aa(t),
            (e = (n = e.child).sibling),
            ((n = Ur(n, { mode: "visible", children: a.children })).return = t),
            (n.sibling = null),
            null !== e &&
              (null === (r = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : r.push(e)),
            (t.child = n),
            (t.memoizedState = null),
            n);
      }
      function Jo(e, t) {
        return (
          ((t = eu({ mode: "visible", children: t }, e.mode)).return = e),
          (e.child = t)
        );
      }
      function eu(e, t) {
        return (((e = Ir(22, e, null, t)).lanes = 0), e);
      }
      function tu(e, t, n) {
        return (
          ma(t, e.child, null, n),
          ((e = Jo(t, t.pendingProps.children)).flags |= 2),
          (t.memoizedState = null),
          e
        );
      }
      function nu(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        (null !== r && (r.lanes |= t), Pl(e.return, t, n));
      }
      function ru(e, t, n, r, l, a) {
        var i = e.memoizedState;
        null === i
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: l,
              treeForkCount: a,
            })
          : ((i.isBackwards = t),
            (i.rendering = null),
            (i.renderingStartTime = 0),
            (i.last = r),
            (i.tail = n),
            (i.tailMode = l),
            (i.treeForkCount = a));
      }
      function lu(e, t, n) {
        var r = t.pendingProps,
          l = r.revealOrder,
          a = r.tail;
        r = r.children;
        var i = $a.current,
          o = !!(2 & i);
        if (
          (o ? ((i = (1 & i) | 2), (t.flags |= 128)) : (i &= 1),
          H($a, i),
          Ao(e, t, r, n),
          (r = fl ? Jr : 0),
          !o && null !== e && 128 & e.flags)
        )
          e: for (e = t.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && nu(e, n, t);
            else if (19 === e.tag) nu(e, n, t);
            else if (null !== e.child) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break e;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) break e;
              e = e.return;
            }
            ((e.sibling.return = e.return), (e = e.sibling));
          }
        switch (l) {
          case "forwards":
            for (n = t.child, l = null; null !== n; )
              (null !== (e = n.alternate) && null === Ua(e) && (l = n),
                (n = n.sibling));
            (null === (n = l)
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
              ru(t, !1, l, n, a, r));
            break;
          case "backwards":
          case "unstable_legacy-backwards":
            for (n = null, l = t.child, t.child = null; null !== l; ) {
              if (null !== (e = l.alternate) && null === Ua(e)) {
                t.child = l;
                break;
              }
              ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
            }
            ru(t, !0, n, null, a, r);
            break;
          case "together":
            ru(t, !1, null, null, void 0, r);
            break;
          default:
            t.memoizedState = null;
        }
        return t.child;
      }
      function au(e, t, n) {
        if (
          (null !== e && (t.dependencies = e.dependencies),
          (Es |= t.lanes),
          0 === (n & t.childLanes))
        ) {
          if (null === e) return null;
          if ((_l(e, t, n, !1), 0 === (n & t.childLanes))) return null;
        }
        if (null !== e && t.child !== e.child) throw Error(l(153));
        if (null !== t.child) {
          for (
            n = Ur((e = t.child), e.pendingProps), t.child = n, n.return = t;
            null !== e.sibling;

          )
            ((e = e.sibling),
              ((n = n.sibling = Ur(e, e.pendingProps)).return = t));
          n.sibling = null;
        }
        return t.child;
      }
      function iu(e, t) {
        return (
          0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !Tl(e))
        );
      }
      function ou(e, t, n) {
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps) Mo = !0;
          else {
            if (!(iu(e, n) || 128 & t.flags))
              return (
                (Mo = !1),
                (function (e, t, n) {
                  switch (t.tag) {
                    case 3:
                      (Y(t, t.stateNode.containerInfo),
                        Cl(0, Il, e.memoizedState.cache),
                        kl());
                      break;
                    case 27:
                    case 5:
                      G(t);
                      break;
                    case 4:
                      Y(t, t.stateNode.containerInfo);
                      break;
                    case 10:
                      Cl(0, t.type, t.memoizedProps.value);
                      break;
                    case 31:
                      if (null !== t.memoizedState)
                        return ((t.flags |= 128), Ra(t), null);
                      break;
                    case 13:
                      var r = t.memoizedState;
                      if (null !== r)
                        return null !== r.dehydrated
                          ? (Aa(t), (t.flags |= 128), null)
                          : 0 !== (n & t.child.childLanes)
                            ? Zo(e, t, n)
                            : (Aa(t),
                              null !== (e = au(e, t, n)) ? e.sibling : null);
                      Aa(t);
                      break;
                    case 19:
                      var l = !!(128 & e.flags);
                      if (
                        ((r = 0 !== (n & t.childLanes)) ||
                          (_l(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
                        l)
                      ) {
                        if (r) return lu(e, t, n);
                        t.flags |= 128;
                      }
                      if (
                        (null !== (l = t.memoizedState) &&
                          ((l.rendering = null),
                          (l.tail = null),
                          (l.lastEffect = null)),
                        H($a, $a.current),
                        r)
                      )
                        break;
                      return null;
                    case 22:
                      return ((t.lanes = 0), Io(e, t, n, t.pendingProps));
                    case 24:
                      Cl(0, Il, e.memoizedState.cache);
                  }
                  return au(e, t, n);
                })(e, t, n)
              );
            Mo = !!(131072 & e.flags);
          }
        else ((Mo = !1), fl && 1048576 & t.flags && il(t, Jr, t.index));
        switch (((t.lanes = 0), t.tag)) {
          case 16:
            e: {
              var r = t.pendingProps;
              if (
                ((e = la(t.elementType)), (t.type = e), "function" != typeof e)
              ) {
                if (null != e) {
                  var a = e.$$typeof;
                  if (a === S) {
                    ((t.tag = 11), (t = Ro(null, t, e, r, n)));
                    break e;
                  }
                  if (a === C) {
                    ((t.tag = 14), (t = Fo(null, t, e, r, n)));
                    break e;
                  }
                }
                throw ((t = O(e) || e), Error(l(306, t, "")));
              }
              $r(e)
                ? ((r = No(e, r)), (t.tag = 1), (t = qo(null, t, e, r, n)))
                : ((t.tag = 0), (t = Wo(null, t, e, r, n)));
            }
            return t;
          case 0:
            return Wo(e, t, t.type, t.pendingProps, n);
          case 1:
            return qo(e, t, (r = t.type), (a = No(r, t.pendingProps)), n);
          case 3:
            e: {
              if ((Y(t, t.stateNode.containerInfo), null === e))
                throw Error(l(387));
              r = t.pendingProps;
              var i = t.memoizedState;
              ((a = i.element), ya(e, t), Ea(t, r, null, n));
              var o = t.memoizedState;
              if (
                ((r = o.cache),
                Cl(0, Il, r),
                r !== i.cache && zl(t, [Il], n, !0),
                Na(),
                (r = o.element),
                i.isDehydrated)
              ) {
                if (
                  ((i = { element: r, isDehydrated: !1, cache: o.cache }),
                  (t.updateQueue.baseState = i),
                  (t.memoizedState = i),
                  256 & t.flags)
                ) {
                  t = Ko(e, t, r, n);
                  break e;
                }
                if (r !== a) {
                  (wl((a = Yr(Error(l(424)), t))), (t = Ko(e, t, r, n)));
                  break e;
                }
                for (
                  e =
                    9 === (e = t.stateNode.containerInfo).nodeType
                      ? e.body
                      : "HTML" === e.nodeName
                        ? e.ownerDocument.body
                        : e,
                    dl = Md(e.firstChild),
                    cl = t,
                    fl = !0,
                    pl = null,
                    ml = !0,
                    n = ha(t, null, r, n),
                    t.child = n;
                  n;

                )
                  ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
              } else {
                if ((kl(), r === a)) {
                  t = au(e, t, n);
                  break e;
                }
                Ao(e, t, r, n);
              }
              t = t.child;
            }
            return t;
          case 26:
            return (
              Vo(e, t),
              null === e
                ? (n = Qd(t.type, null, t.pendingProps, null))
                  ? (t.memoizedState = n)
                  : fl ||
                    ((n = t.type),
                    (e = t.pendingProps),
                    ((r = vd(q.current).createElement(n))[He] = t),
                    (r[Be] = e),
                    pd(r, n, e),
                    tt(r),
                    (t.stateNode = r))
                : (t.memoizedState = Qd(
                    t.type,
                    e.memoizedProps,
                    t.pendingProps,
                    e.memoizedState,
                  )),
              null
            );
          case 27:
            return (
              G(t),
              null === e &&
                fl &&
                ((r = t.stateNode = Dd(t.type, t.pendingProps, q.current)),
                (cl = t),
                (ml = !0),
                (a = dl),
                jd(t.type) ? ((Ad = a), (dl = Md(r.firstChild))) : (dl = a)),
              Ao(e, t, t.pendingProps.children, n),
              Vo(e, t),
              null === e && (t.flags |= 4194304),
              t.child
            );
          case 5:
            return (
              null === e &&
                fl &&
                ((a = r = dl) &&
                  ((r = (function (e, t, n, r) {
                    for (; 1 === e.nodeType; ) {
                      var l = n;
                      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                        if (
                          !r &&
                          ("INPUT" !== e.nodeName || "hidden" !== e.type)
                        )
                          break;
                      } else if (r) {
                        if (!e[Ye])
                          switch (t) {
                            case "meta":
                              if (!e.hasAttribute("itemprop")) break;
                              return e;
                            case "link":
                              if (
                                "stylesheet" === (a = e.getAttribute("rel")) &&
                                e.hasAttribute("data-precedence")
                              )
                                break;
                              if (
                                a !== l.rel ||
                                e.getAttribute("href") !==
                                  (null == l.href || "" === l.href
                                    ? null
                                    : l.href) ||
                                e.getAttribute("crossorigin") !==
                                  (null == l.crossOrigin
                                    ? null
                                    : l.crossOrigin) ||
                                e.getAttribute("title") !==
                                  (null == l.title ? null : l.title)
                              )
                                break;
                              return e;
                            case "style":
                              if (e.hasAttribute("data-precedence")) break;
                              return e;
                            case "script":
                              if (
                                ((a = e.getAttribute("src")) !==
                                  (null == l.src ? null : l.src) ||
                                  e.getAttribute("type") !==
                                    (null == l.type ? null : l.type) ||
                                  e.getAttribute("crossorigin") !==
                                    (null == l.crossOrigin
                                      ? null
                                      : l.crossOrigin)) &&
                                a &&
                                e.hasAttribute("async") &&
                                !e.hasAttribute("itemprop")
                              )
                                break;
                              return e;
                            default:
                              return e;
                          }
                      } else {
                        if ("input" !== t || "hidden" !== e.type) return e;
                        var a = null == l.name ? null : "" + l.name;
                        if ("hidden" === l.type && e.getAttribute("name") === a)
                          return e;
                      }
                      if (null === (e = Md(e.nextSibling))) break;
                    }
                    return null;
                  })(r, t.type, t.pendingProps, ml)),
                  null !== r
                    ? ((t.stateNode = r),
                      (cl = t),
                      (dl = Md(r.firstChild)),
                      (ml = !1),
                      (a = !0))
                    : (a = !1)),
                a || gl(t)),
              G(t),
              (a = t.type),
              (i = t.pendingProps),
              (o = null !== e ? e.memoizedProps : null),
              (r = i.children),
              kd(a, i) ? (r = null) : null !== o && kd(a, o) && (t.flags |= 32),
              null !== t.memoizedState &&
                ((a = ti(e, t, li, null, null, n)), (ff._currentValue = a)),
              Vo(e, t),
              Ao(e, t, r, n),
              t.child
            );
          case 6:
            return (
              null === e &&
                fl &&
                ((e = n = dl) &&
                  ((n = (function (e, t, n) {
                    if ("" === t) return null;
                    for (; 3 !== e.nodeType; )
                      if (
                        ((1 !== e.nodeType ||
                          "INPUT" !== e.nodeName ||
                          "hidden" !== e.type) &&
                          !n) ||
                        null === (e = Md(e.nextSibling))
                      )
                        return null;
                    return e;
                  })(n, t.pendingProps, ml)),
                  null !== n
                    ? ((t.stateNode = n), (cl = t), (dl = null), (e = !0))
                    : (e = !1)),
                e || gl(t)),
              null
            );
          case 13:
            return Zo(e, t, n);
          case 4:
            return (
              Y(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = ma(t, null, r, n)) : Ao(e, t, r, n),
              t.child
            );
          case 11:
            return Ro(e, t, t.type, t.pendingProps, n);
          case 7:
            return (Ao(e, t, t.pendingProps, n), t.child);
          case 8:
          case 12:
            return (Ao(e, t, t.pendingProps.children, n), t.child);
          case 10:
            return (
              (r = t.pendingProps),
              Cl(0, t.type, r.value),
              Ao(e, t, r.children, n),
              t.child
            );
          case 9:
            return (
              (a = t.type._context),
              (r = t.pendingProps.children),
              Ll(t),
              (r = r((a = Ol(a)))),
              (t.flags |= 1),
              Ao(e, t, r, n),
              t.child
            );
          case 14:
            return Fo(e, t, t.type, t.pendingProps, n);
          case 15:
            return Do(e, t, t.type, t.pendingProps, n);
          case 19:
            return lu(e, t, n);
          case 31:
            return (function (e, t, n) {
              var r = t.pendingProps,
                a = !!(128 & t.flags);
              if (((t.flags &= -129), null === e)) {
                if (fl) {
                  if ("hidden" === r.mode)
                    return ((e = Ho(t, r)), (t.lanes = 536870912), $o(null, e));
                  if (
                    (Ra(t),
                    (e = dl)
                      ? null !==
                          (e =
                            null !== (e = Td(e, ml)) && "&" === e.data
                              ? e
                              : null) &&
                        ((t.memoizedState = {
                          dehydrated: e,
                          treeContext:
                            null !== nl ? { id: rl, overflow: ll } : null,
                          retryLane: 536870912,
                          hydrationErrors: null,
                        }),
                        ((n = Qr(e)).return = t),
                        (t.child = n),
                        (cl = t),
                        (dl = null))
                      : (e = null),
                    null === e)
                  )
                    throw gl(t);
                  return ((t.lanes = 536870912), null);
                }
                return Ho(t, r);
              }
              var i = e.memoizedState;
              if (null !== i) {
                var o = i.dehydrated;
                if ((Ra(t), a))
                  if (256 & t.flags) ((t.flags &= -257), (t = Bo(e, t, n)));
                  else {
                    if (null === t.memoizedState) throw Error(l(558));
                    ((t.child = e.child), (t.flags |= 128), (t = null));
                  }
                else if (
                  (Mo || _l(e, t, n, !1),
                  (a = 0 !== (n & e.childLanes)),
                  Mo || a)
                ) {
                  if (
                    null !== (r = hs) &&
                    0 !== (o = Re(r, n)) &&
                    o !== i.retryLane
                  )
                    throw ((i.retryLane = o), Mr(e, o), Ys(r, e, o), Oo);
                  (oc(), (t = Bo(e, t, n)));
                } else
                  ((e = i.treeContext),
                    (dl = Md(o.nextSibling)),
                    (cl = t),
                    (fl = !0),
                    (pl = null),
                    (ml = !1),
                    null !== e && sl(t, e),
                    ((t = Ho(t, r)).flags |= 4096));
                return t;
              }
              return (
                ((e = Ur(e.child, { mode: r.mode, children: r.children })).ref =
                  t.ref),
                (t.child = e),
                (e.return = t),
                e
              );
            })(e, t, n);
          case 22:
            return Io(e, t, n, t.pendingProps);
          case 24:
            return (
              Ll(t),
              (r = Ol(Il)),
              null === e
                ? (null === (a = Yl()) &&
                    ((a = hs),
                    (i = $l()),
                    (a.pooledCache = i),
                    i.refCount++,
                    null !== i && (a.pooledCacheLanes |= n),
                    (a = i)),
                  (t.memoizedState = { parent: r, cache: a }),
                  va(t),
                  Cl(0, Il, a))
                : (0 !== (e.lanes & n) &&
                    (ya(e, t), Ea(t, null, null, n), Na()),
                  (a = e.memoizedState),
                  (i = t.memoizedState),
                  a.parent !== r
                    ? ((a = { parent: r, cache: r }),
                      (t.memoizedState = a),
                      0 === t.lanes &&
                        (t.memoizedState = t.updateQueue.baseState = a),
                      Cl(0, Il, r))
                    : ((r = i.cache),
                      Cl(0, Il, r),
                      r !== a.cache && zl(t, [Il], n, !0))),
              Ao(e, t, t.pendingProps.children, n),
              t.child
            );
          case 29:
            throw t.pendingProps;
        }
        throw Error(l(156, t.tag));
      }
      function uu(e) {
        e.flags |= 4;
      }
      function su(e, t, n, r, l) {
        if (((t = !!(32 & e.mode)) && (t = !1), t)) {
          if (((e.flags |= 16777216), (335544128 & l) === l))
            if (e.stateNode.complete) e.flags |= 8192;
            else {
              if (!lc()) throw ((aa = ta), Jl);
              e.flags |= 8192;
            }
        } else e.flags &= -16777217;
      }
      function cu(e, t) {
        if ("stylesheet" !== t.type || 4 & t.state.loading)
          e.flags &= -16777217;
        else if (((e.flags |= 16777216), !af(t))) {
          if (!lc()) throw ((aa = ta), Jl);
          e.flags |= 8192;
        }
      }
      function du(e, t) {
        (null !== t && (e.flags |= 4),
          16384 & e.flags &&
            ((t = 22 !== e.tag ? Te() : 536870912), (e.lanes |= t), (zs |= t)));
      }
      function fu(e, t) {
        if (!fl)
          switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var n = null; null !== t; )
                (null !== t.alternate && (n = t), (t = t.sibling));
              null === n ? (e.tail = null) : (n.sibling = null);
              break;
            case "collapsed":
              n = e.tail;
              for (var r = null; null !== n; )
                (null !== n.alternate && (r = n), (n = n.sibling));
              null === r
                ? t || null === e.tail
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
                : (r.sibling = null);
          }
      }
      function pu(e) {
        var t = null !== e.alternate && e.alternate.child === e.child,
          n = 0,
          r = 0;
        if (t)
          for (var l = e.child; null !== l; )
            ((n |= l.lanes | l.childLanes),
              (r |= 65011712 & l.subtreeFlags),
              (r |= 65011712 & l.flags),
              (l.return = e),
              (l = l.sibling));
        else
          for (l = e.child; null !== l; )
            ((n |= l.lanes | l.childLanes),
              (r |= l.subtreeFlags),
              (r |= l.flags),
              (l.return = e),
              (l = l.sibling));
        return ((e.subtreeFlags |= r), (e.childLanes = n), t);
      }
      function mu(e, t, n) {
        var r = t.pendingProps;
        switch ((ul(t), t.tag)) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
          case 1:
            return (pu(t), null);
          case 3:
            return (
              (n = t.stateNode),
              (r = null),
              null !== e && (r = e.memoizedState.cache),
              t.memoizedState.cache !== r && (t.flags |= 2048),
              jl(Il),
              X(),
              n.pendingContext &&
                ((n.context = n.pendingContext), (n.pendingContext = null)),
              (null === e || null === e.child) &&
                (bl(t)
                  ? uu(t)
                  : null === e ||
                    (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
                    ((t.flags |= 1024), xl())),
              pu(t),
              null
            );
          case 26:
            var a = t.type,
              i = t.memoizedState;
            return (
              null === e
                ? (uu(t),
                  null !== i ? (pu(t), cu(t, i)) : (pu(t), su(t, a, 0, 0, n)))
                : i
                  ? i !== e.memoizedState
                    ? (uu(t), pu(t), cu(t, i))
                    : (pu(t), (t.flags &= -16777217))
                  : ((e = e.memoizedProps) !== r && uu(t),
                    pu(t),
                    su(t, a, 0, 0, n)),
              null
            );
          case 27:
            if (
              (Z(t),
              (n = q.current),
              (a = t.type),
              null !== e && null != t.stateNode)
            )
              e.memoizedProps !== r && uu(t);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(l(166));
                return (pu(t), null);
              }
              ((e = W.current),
                bl(t) ? vl(t) : ((e = Dd(a, r, n)), (t.stateNode = e), uu(t)));
            }
            return (pu(t), null);
          case 5:
            if ((Z(t), (a = t.type), null !== e && null != t.stateNode))
              e.memoizedProps !== r && uu(t);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(l(166));
                return (pu(t), null);
              }
              if (((i = W.current), bl(t))) vl(t);
              else {
                var o = vd(q.current);
                switch (i) {
                  case 1:
                    i = o.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case 2:
                    i = o.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a,
                    );
                    break;
                  default:
                    switch (a) {
                      case "svg":
                        i = o.createElementNS("http://www.w3.org/2000/svg", a);
                        break;
                      case "math":
                        i = o.createElementNS(
                          "http://www.w3.org/1998/Math/MathML",
                          a,
                        );
                        break;
                      case "script":
                        (((i = o.createElement("div")).innerHTML =
                          "<script><\/script>"),
                          (i = i.removeChild(i.firstChild)));
                        break;
                      case "select":
                        ((i =
                          "string" == typeof r.is
                            ? o.createElement("select", { is: r.is })
                            : o.createElement("select")),
                          r.multiple
                            ? (i.multiple = !0)
                            : r.size && (i.size = r.size));
                        break;
                      default:
                        i =
                          "string" == typeof r.is
                            ? o.createElement(a, { is: r.is })
                            : o.createElement(a);
                    }
                }
                ((i[He] = t), (i[Be] = r));
                e: for (o = t.child; null !== o; ) {
                  if (5 === o.tag || 6 === o.tag) i.appendChild(o.stateNode);
                  else if (4 !== o.tag && 27 !== o.tag && null !== o.child) {
                    ((o.child.return = o), (o = o.child));
                    continue;
                  }
                  if (o === t) break e;
                  for (; null === o.sibling; ) {
                    if (null === o.return || o.return === t) break e;
                    o = o.return;
                  }
                  ((o.sibling.return = o.return), (o = o.sibling));
                }
                t.stateNode = i;
                e: switch ((pd(i, a, r), a)) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    r = !!r.autoFocus;
                    break e;
                  case "img":
                    r = !0;
                    break e;
                  default:
                    r = !1;
                }
                r && uu(t);
              }
            }
            return (
              pu(t),
              su(t, t.type, null === e || e.memoizedProps, t.pendingProps, n),
              null
            );
          case 6:
            if (e && null != t.stateNode) e.memoizedProps !== r && uu(t);
            else {
              if ("string" != typeof r && null === t.stateNode)
                throw Error(l(166));
              if (((e = q.current), bl(t))) {
                if (
                  ((e = t.stateNode),
                  (n = t.memoizedProps),
                  (r = null),
                  null !== (a = cl))
                )
                  switch (a.tag) {
                    case 27:
                    case 5:
                      r = a.memoizedProps;
                  }
                ((e[He] = t),
                  (e = !!(
                    e.nodeValue === n ||
                    (null !== r && !0 === r.suppressHydrationWarning) ||
                    cd(e.nodeValue, n)
                  )) || gl(t, !0));
              } else
                (((e = vd(e).createTextNode(r))[He] = t), (t.stateNode = e));
            }
            return (pu(t), null);
          case 31:
            if (
              ((n = t.memoizedState), null === e || null !== e.memoizedState)
            ) {
              if (((r = bl(t)), null !== n)) {
                if (null === e) {
                  if (!r) throw Error(l(318));
                  if (
                    !(e = null !== (e = t.memoizedState) ? e.dehydrated : null)
                  )
                    throw Error(l(557));
                  e[He] = t;
                } else
                  (kl(),
                    !(128 & t.flags) && (t.memoizedState = null),
                    (t.flags |= 4));
                (pu(t), (e = !1));
              } else
                ((n = xl()),
                  null !== e &&
                    null !== e.memoizedState &&
                    (e.memoizedState.hydrationErrors = n),
                  (e = !0));
              if (!e) return 256 & t.flags ? (Ia(t), t) : (Ia(t), null);
              if (128 & t.flags) throw Error(l(558));
            }
            return (pu(t), null);
          case 13:
            if (
              ((r = t.memoizedState),
              null === e ||
                (null !== e.memoizedState &&
                  null !== e.memoizedState.dehydrated))
            ) {
              if (((a = bl(t)), null !== r && null !== r.dehydrated)) {
                if (null === e) {
                  if (!a) throw Error(l(318));
                  if (
                    !(a = null !== (a = t.memoizedState) ? a.dehydrated : null)
                  )
                    throw Error(l(317));
                  a[He] = t;
                } else
                  (kl(),
                    !(128 & t.flags) && (t.memoizedState = null),
                    (t.flags |= 4));
                (pu(t), (a = !1));
              } else
                ((a = xl()),
                  null !== e &&
                    null !== e.memoizedState &&
                    (e.memoizedState.hydrationErrors = a),
                  (a = !0));
              if (!a) return 256 & t.flags ? (Ia(t), t) : (Ia(t), null);
            }
            return (
              Ia(t),
              128 & t.flags
                ? ((t.lanes = n), t)
                : ((n = null !== r),
                  (e = null !== e && null !== e.memoizedState),
                  n &&
                    ((a = null),
                    null !== (r = t.child).alternate &&
                      null !== r.alternate.memoizedState &&
                      null !== r.alternate.memoizedState.cachePool &&
                      (a = r.alternate.memoizedState.cachePool.pool),
                    (i = null),
                    null !== r.memoizedState &&
                      null !== r.memoizedState.cachePool &&
                      (i = r.memoizedState.cachePool.pool),
                    i !== a && (r.flags |= 2048)),
                  n !== e && n && (t.child.flags |= 8192),
                  du(t, t.updateQueue),
                  pu(t),
                  null)
            );
          case 4:
            return (
              X(),
              null === e && ed(t.stateNode.containerInfo),
              pu(t),
              null
            );
          case 10:
            return (jl(t.type), pu(t), null);
          case 19:
            if ((U($a), null === (r = t.memoizedState))) return (pu(t), null);
            if (((a = !!(128 & t.flags)), null === (i = r.rendering)))
              if (a) fu(r, !1);
              else {
                if (0 !== Ns || (null !== e && 128 & e.flags))
                  for (e = t.child; null !== e; ) {
                    if (null !== (i = Ua(e))) {
                      for (
                        t.flags |= 128,
                          fu(r, !1),
                          e = i.updateQueue,
                          t.updateQueue = e,
                          du(t, e),
                          t.subtreeFlags = 0,
                          e = n,
                          n = t.child;
                        null !== n;

                      )
                        (Hr(n, e), (n = n.sibling));
                      return (
                        H($a, (1 & $a.current) | 2),
                        fl && al(t, r.treeForkCount),
                        t.child
                      );
                    }
                    e = e.sibling;
                  }
                null !== r.tail &&
                  se() > As &&
                  ((t.flags |= 128), (a = !0), fu(r, !1), (t.lanes = 4194304));
              }
            else {
              if (!a)
                if (null !== (e = Ua(i))) {
                  if (
                    ((t.flags |= 128),
                    (a = !0),
                    (e = e.updateQueue),
                    (t.updateQueue = e),
                    du(t, e),
                    fu(r, !0),
                    null === r.tail &&
                      "hidden" === r.tailMode &&
                      !i.alternate &&
                      !fl)
                  )
                    return (pu(t), null);
                } else
                  2 * se() - r.renderingStartTime > As &&
                    536870912 !== n &&
                    ((t.flags |= 128),
                    (a = !0),
                    fu(r, !1),
                    (t.lanes = 4194304));
              r.isBackwards
                ? ((i.sibling = t.child), (t.child = i))
                : (null !== (e = r.last) ? (e.sibling = i) : (t.child = i),
                  (r.last = i));
            }
            return null !== r.tail
              ? ((e = r.tail),
                (r.rendering = e),
                (r.tail = e.sibling),
                (r.renderingStartTime = se()),
                (e.sibling = null),
                (n = $a.current),
                H($a, a ? (1 & n) | 2 : 1 & n),
                fl && al(t, r.treeForkCount),
                e)
              : (pu(t), null);
          case 22:
          case 23:
            return (
              Ia(t),
              La(),
              (r = null !== t.memoizedState),
              null !== e
                ? (null !== e.memoizedState) !== r && (t.flags |= 8192)
                : r && (t.flags |= 8192),
              r
                ? !!(536870912 & n) &&
                  !(128 & t.flags) &&
                  (pu(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                : pu(t),
              null !== (n = t.updateQueue) && du(t, n.retryQueue),
              (n = null),
              null !== e &&
                null !== e.memoizedState &&
                null !== e.memoizedState.cachePool &&
                (n = e.memoizedState.cachePool.pool),
              (r = null),
              null !== t.memoizedState &&
                null !== t.memoizedState.cachePool &&
                (r = t.memoizedState.cachePool.pool),
              r !== n && (t.flags |= 2048),
              null !== e && U(Kl),
              null
            );
          case 24:
            return (
              (n = null),
              null !== e && (n = e.memoizedState.cache),
              t.memoizedState.cache !== n && (t.flags |= 2048),
              jl(Il),
              pu(t),
              null
            );
          case 25:
          case 30:
            return null;
        }
        throw Error(l(156, t.tag));
      }
      function hu(e, t) {
        switch ((ul(t), t.tag)) {
          case 1:
            return 65536 & (e = t.flags)
              ? ((t.flags = (-65537 & e) | 128), t)
              : null;
          case 3:
            return (
              jl(Il),
              X(),
              65536 & (e = t.flags) && !(128 & e)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null
            );
          case 26:
          case 27:
          case 5:
            return (Z(t), null);
          case 31:
            if (null !== t.memoizedState) {
              if ((Ia(t), null === t.alternate)) throw Error(l(340));
              kl();
            }
            return 65536 & (e = t.flags)
              ? ((t.flags = (-65537 & e) | 128), t)
              : null;
          case 13:
            if (
              (Ia(t), null !== (e = t.memoizedState) && null !== e.dehydrated)
            ) {
              if (null === t.alternate) throw Error(l(340));
              kl();
            }
            return 65536 & (e = t.flags)
              ? ((t.flags = (-65537 & e) | 128), t)
              : null;
          case 19:
            return (U($a), null);
          case 4:
            return (X(), null);
          case 10:
            return (jl(t.type), null);
          case 22:
          case 23:
            return (
              Ia(t),
              La(),
              null !== e && U(Kl),
              65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
          case 24:
            return (jl(Il), null);
          default:
            return null;
        }
      }
      function gu(e, t) {
        switch ((ul(t), t.tag)) {
          case 3:
            (jl(Il), X());
            break;
          case 26:
          case 27:
          case 5:
            Z(t);
            break;
          case 4:
            X();
            break;
          case 31:
            null !== t.memoizedState && Ia(t);
            break;
          case 13:
            Ia(t);
            break;
          case 19:
            U($a);
            break;
          case 10:
            jl(t.type);
            break;
          case 22:
          case 23:
            (Ia(t), La(), null !== e && U(Kl));
            break;
          case 24:
            jl(Il);
        }
      }
      function vu(e, t) {
        try {
          var n = t.updateQueue,
            r = null !== n ? n.lastEffect : null;
          if (null !== r) {
            var l = r.next;
            n = l;
            do {
              if ((n.tag & e) === e) {
                r = void 0;
                var a = n.create,
                  i = n.inst;
                ((r = a()), (i.destroy = r));
              }
              n = n.next;
            } while (n !== l);
          }
        } catch (e) {
          Nc(t, t.return, e);
        }
      }
      function yu(e, t, n) {
        try {
          var r = t.updateQueue,
            l = null !== r ? r.lastEffect : null;
          if (null !== l) {
            var a = l.next;
            r = a;
            do {
              if ((r.tag & e) === e) {
                var i = r.inst,
                  o = i.destroy;
                if (void 0 !== o) {
                  ((i.destroy = void 0), (l = t));
                  var u = n,
                    s = o;
                  try {
                    s();
                  } catch (e) {
                    Nc(l, u, e);
                  }
                }
              }
              r = r.next;
            } while (r !== a);
          }
        } catch (e) {
          Nc(t, t.return, e);
        }
      }
      function bu(e) {
        var t = e.updateQueue;
        if (null !== t) {
          var n = e.stateNode;
          try {
            ja(t, n);
          } catch (t) {
            Nc(e, e.return, t);
          }
        }
      }
      function ku(e, t, n) {
        ((n.props = No(e.type, e.memoizedProps)), (n.state = e.memoizedState));
        try {
          n.componentWillUnmount();
        } catch (n) {
          Nc(e, t, n);
        }
      }
      function xu(e, t) {
        try {
          var n = e.ref;
          if (null !== n) {
            switch (e.tag) {
              case 26:
              case 27:
              case 5:
                var r = e.stateNode;
                break;
              default:
                r = e.stateNode;
            }
            "function" == typeof n ? (e.refCleanup = n(r)) : (n.current = r);
          }
        } catch (n) {
          Nc(e, t, n);
        }
      }
      function wu(e, t) {
        var n = e.ref,
          r = e.refCleanup;
        if (null !== n)
          if ("function" == typeof r)
            try {
              r();
            } catch (n) {
              Nc(e, t, n);
            } finally {
              ((e.refCleanup = null),
                null != (e = e.alternate) && (e.refCleanup = null));
            }
          else if ("function" == typeof n)
            try {
              n(null);
            } catch (n) {
              Nc(e, t, n);
            }
          else n.current = null;
      }
      function Su(e) {
        var t = e.type,
          n = e.memoizedProps,
          r = e.stateNode;
        try {
          e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              n.autoFocus && r.focus();
              break e;
            case "img":
              n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
          }
        } catch (t) {
          Nc(e, e.return, t);
        }
      }
      function Nu(e, t, n) {
        try {
          var r = e.stateNode;
          ((function (e, t, n, r) {
            switch (t) {
              case "div":
              case "span":
              case "svg":
              case "path":
              case "a":
              case "g":
              case "p":
              case "li":
                break;
              case "input":
                var a = null,
                  i = null,
                  o = null,
                  u = null,
                  s = null,
                  c = null,
                  d = null;
                for (m in n) {
                  var f = n[m];
                  if (n.hasOwnProperty(m) && null != f)
                    switch (m) {
                      case "checked":
                      case "value":
                        break;
                      case "defaultValue":
                        s = f;
                      default:
                        r.hasOwnProperty(m) || dd(e, t, m, null, r, f);
                    }
                }
                for (var p in r) {
                  var m = r[p];
                  if (
                    ((f = n[p]),
                    r.hasOwnProperty(p) && (null != m || null != f))
                  )
                    switch (p) {
                      case "type":
                        i = m;
                        break;
                      case "name":
                        a = m;
                        break;
                      case "checked":
                        c = m;
                        break;
                      case "defaultChecked":
                        d = m;
                        break;
                      case "value":
                        o = m;
                        break;
                      case "defaultValue":
                        u = m;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (null != m) throw Error(l(137, t));
                        break;
                      default:
                        m !== f && dd(e, t, p, m, r, f);
                    }
                }
                return void bt(e, o, u, s, c, d, i, a);
              case "select":
                for (i in ((m = o = u = p = null), n))
                  if (((s = n[i]), n.hasOwnProperty(i) && null != s))
                    switch (i) {
                      case "value":
                        break;
                      case "multiple":
                        m = s;
                      default:
                        r.hasOwnProperty(i) || dd(e, t, i, null, r, s);
                    }
                for (a in r)
                  if (
                    ((i = r[a]),
                    (s = n[a]),
                    r.hasOwnProperty(a) && (null != i || null != s))
                  )
                    switch (a) {
                      case "value":
                        p = i;
                        break;
                      case "defaultValue":
                        u = i;
                        break;
                      case "multiple":
                        o = i;
                      default:
                        i !== s && dd(e, t, a, i, r, s);
                    }
                return (
                  (t = u),
                  (n = o),
                  (r = m),
                  void (null != p
                    ? wt(e, !!n, p, !1)
                    : !!r != !!n &&
                      (null != t
                        ? wt(e, !!n, t, !0)
                        : wt(e, !!n, n ? [] : "", !1)))
                );
              case "textarea":
                for (u in ((m = p = null), n))
                  if (
                    ((a = n[u]),
                    n.hasOwnProperty(u) && null != a && !r.hasOwnProperty(u))
                  )
                    switch (u) {
                      case "value":
                      case "children":
                        break;
                      default:
                        dd(e, t, u, null, r, a);
                    }
                for (o in r)
                  if (
                    ((a = r[o]),
                    (i = n[o]),
                    r.hasOwnProperty(o) && (null != a || null != i))
                  )
                    switch (o) {
                      case "value":
                        p = a;
                        break;
                      case "defaultValue":
                        m = a;
                        break;
                      case "children":
                        break;
                      case "dangerouslySetInnerHTML":
                        if (null != a) throw Error(l(91));
                        break;
                      default:
                        a !== i && dd(e, t, o, a, r, i);
                    }
                return void St(e, p, m);
              case "option":
                for (var h in n)
                  ((p = n[h]),
                    n.hasOwnProperty(h) &&
                      null != p &&
                      !r.hasOwnProperty(h) &&
                      ("selected" === h
                        ? (e.selected = !1)
                        : dd(e, t, h, null, r, p)));
                for (s in r)
                  ((p = r[s]),
                    (m = n[s]),
                    r.hasOwnProperty(s) &&
                      p !== m &&
                      (null != p || null != m) &&
                      ("selected" === s
                        ? (e.selected =
                            p && "function" != typeof p && "symbol" != typeof p)
                        : dd(e, t, s, p, r, m)));
                return;
              case "img":
              case "link":
              case "area":
              case "base":
              case "br":
              case "col":
              case "embed":
              case "hr":
              case "keygen":
              case "meta":
              case "param":
              case "source":
              case "track":
              case "wbr":
              case "menuitem":
                for (var g in n)
                  ((p = n[g]),
                    n.hasOwnProperty(g) &&
                      null != p &&
                      !r.hasOwnProperty(g) &&
                      dd(e, t, g, null, r, p));
                for (c in r)
                  if (
                    ((p = r[c]),
                    (m = n[c]),
                    r.hasOwnProperty(c) && p !== m && (null != p || null != m))
                  )
                    switch (c) {
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (null != p) throw Error(l(137, t));
                        break;
                      default:
                        dd(e, t, c, p, r, m);
                    }
                return;
              default:
                if (zt(t)) {
                  for (var v in n)
                    ((p = n[v]),
                      n.hasOwnProperty(v) &&
                        void 0 !== p &&
                        !r.hasOwnProperty(v) &&
                        fd(e, t, v, void 0, r, p));
                  for (d in r)
                    ((p = r[d]),
                      (m = n[d]),
                      !r.hasOwnProperty(d) ||
                        p === m ||
                        (void 0 === p && void 0 === m) ||
                        fd(e, t, d, p, r, m));
                  return;
                }
            }
            for (var y in n)
              ((p = n[y]),
                n.hasOwnProperty(y) &&
                  null != p &&
                  !r.hasOwnProperty(y) &&
                  dd(e, t, y, null, r, p));
            for (f in r)
              ((p = r[f]),
                (m = n[f]),
                !r.hasOwnProperty(f) ||
                  p === m ||
                  (null == p && null == m) ||
                  dd(e, t, f, p, r, m));
          })(r, e.type, n, t),
            (r[Be] = t));
        } catch (t) {
          Nc(e, e.return, t);
        }
      }
      function Eu(e) {
        return (
          5 === e.tag ||
          3 === e.tag ||
          26 === e.tag ||
          (27 === e.tag && jd(e.type)) ||
          4 === e.tag
        );
      }
      function Cu(e) {
        e: for (;;) {
          for (; null === e.sibling; ) {
            if (null === e.return || Eu(e.return)) return null;
            e = e.return;
          }
          for (
            e.sibling.return = e.return, e = e.sibling;
            5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

          ) {
            if (
              (27 === e.tag && jd(e.type)) ||
              2 & e.flags ||
              null === e.child ||
              4 === e.tag
            )
              continue e;
            ((e.child.return = e), (e = e.child));
          }
          if (!(2 & e.flags)) return e.stateNode;
        }
      }
      function ju(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r)
          ((e = e.stateNode),
            t
              ? (9 === n.nodeType
                  ? n.body
                  : "HTML" === n.nodeName
                    ? n.ownerDocument.body
                    : n
                ).insertBefore(e, t)
              : ((t =
                  9 === n.nodeType
                    ? n.body
                    : "HTML" === n.nodeName
                      ? n.ownerDocument.body
                      : n).appendChild(e),
                null != (n = n._reactRootContainer) ||
                  null !== t.onclick ||
                  (t.onclick = Ot)));
        else if (
          4 !== r &&
          (27 === r && jd(e.type) && ((n = e.stateNode), (t = null)),
          null !== (e = e.child))
        )
          for (ju(e, t, n), e = e.sibling; null !== e; )
            (ju(e, t, n), (e = e.sibling));
      }
      function Pu(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r)
          ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
        else if (
          4 !== r &&
          (27 === r && jd(e.type) && (n = e.stateNode), null !== (e = e.child))
        )
          for (Pu(e, t, n), e = e.sibling; null !== e; )
            (Pu(e, t, n), (e = e.sibling));
      }
      function zu(e) {
        var t = e.stateNode,
          n = e.memoizedProps;
        try {
          for (var r = e.type, l = t.attributes; l.length; )
            t.removeAttributeNode(l[0]);
          (pd(t, r, n), (t[He] = e), (t[Be] = n));
        } catch (t) {
          Nc(e, e.return, t);
        }
      }
      var _u = !1,
        Tu = !1,
        Lu = !1,
        Ou = "function" == typeof WeakSet ? WeakSet : Set,
        Mu = null;
      function Au(e, t, n) {
        var r = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            (Yu(e, n), 4 & r && vu(5, n));
            break;
          case 1:
            if ((Yu(e, n), 4 & r))
              if (((e = n.stateNode), null === t))
                try {
                  e.componentDidMount();
                } catch (e) {
                  Nc(n, n.return, e);
                }
              else {
                var l = No(n.type, t.memoizedProps);
                t = t.memoizedState;
                try {
                  e.componentDidUpdate(
                    l,
                    t,
                    e.__reactInternalSnapshotBeforeUpdate,
                  );
                } catch (e) {
                  Nc(n, n.return, e);
                }
              }
            (64 & r && bu(n), 512 & r && xu(n, n.return));
            break;
          case 3:
            if ((Yu(e, n), 64 & r && null !== (e = n.updateQueue))) {
              if (((t = null), null !== n.child))
                switch (n.child.tag) {
                  case 27:
                  case 5:
                  case 1:
                    t = n.child.stateNode;
                }
              try {
                ja(e, t);
              } catch (e) {
                Nc(n, n.return, e);
              }
            }
            break;
          case 27:
            null === t && 4 & r && zu(n);
          case 26:
          case 5:
            (Yu(e, n),
              null === t && 4 & r && Su(n),
              512 & r && xu(n, n.return));
            break;
          case 12:
            Yu(e, n);
            break;
          case 31:
            (Yu(e, n), 4 & r && Uu(e, n));
            break;
          case 13:
            (Yu(e, n),
              4 & r && Hu(e, n),
              64 & r &&
                null !== (e = n.memoizedState) &&
                null !== (e = e.dehydrated) &&
                (function (e, t) {
                  var n = e.ownerDocument;
                  if ("$~" === e.data) e._reactRetry = t;
                  else if ("$?" !== e.data || "loading" !== n.readyState) t();
                  else {
                    var r = function () {
                      (t(), n.removeEventListener("DOMContentLoaded", r));
                    };
                    (n.addEventListener("DOMContentLoaded", r),
                      (e._reactRetry = r));
                  }
                })(e, (n = Pc.bind(null, n))));
            break;
          case 22:
            if (!(r = null !== n.memoizedState || _u)) {
              ((t = (null !== t && null !== t.memoizedState) || Tu), (l = _u));
              var a = Tu;
              ((_u = r),
                (Tu = t) && !a ? Gu(e, n, !!(8772 & n.subtreeFlags)) : Yu(e, n),
                (_u = l),
                (Tu = a));
            }
            break;
          case 30:
            break;
          default:
            Yu(e, n);
        }
      }
      function Ru(e) {
        var t = e.alternate;
        (null !== t && ((e.alternate = null), Ru(t)),
          (e.child = null),
          (e.deletions = null),
          (e.sibling = null),
          5 === e.tag && null !== (t = e.stateNode) && Xe(t),
          (e.stateNode = null),
          (e.return = null),
          (e.dependencies = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.stateNode = null),
          (e.updateQueue = null));
      }
      var Fu = null,
        Du = !1;
      function Iu(e, t, n) {
        for (n = n.child; null !== n; ) ($u(e, t, n), (n = n.sibling));
      }
      function $u(e, t, n) {
        if (be && "function" == typeof be.onCommitFiberUnmount)
          try {
            be.onCommitFiberUnmount(ye, n);
          } catch {}
        switch (n.tag) {
          case 26:
            (Tu || wu(n, t),
              Iu(e, t, n),
              n.memoizedState
                ? n.memoizedState.count--
                : n.stateNode && (n = n.stateNode).parentNode.removeChild(n));
            break;
          case 27:
            Tu || wu(n, t);
            var r = Fu,
              l = Du;
            (jd(n.type) && ((Fu = n.stateNode), (Du = !1)),
              Iu(e, t, n),
              Id(n.stateNode),
              (Fu = r),
              (Du = l));
            break;
          case 5:
            Tu || wu(n, t);
          case 6:
            if (
              ((r = Fu),
              (l = Du),
              (Fu = null),
              Iu(e, t, n),
              (Du = l),
              null !== (Fu = r))
            )
              if (Du)
                try {
                  (9 === Fu.nodeType
                    ? Fu.body
                    : "HTML" === Fu.nodeName
                      ? Fu.ownerDocument.body
                      : Fu
                  ).removeChild(n.stateNode);
                } catch (e) {
                  Nc(n, t, e);
                }
              else
                try {
                  Fu.removeChild(n.stateNode);
                } catch (e) {
                  Nc(n, t, e);
                }
            break;
          case 18:
            null !== Fu &&
              (Du
                ? (Pd(
                    9 === (e = Fu).nodeType
                      ? e.body
                      : "HTML" === e.nodeName
                        ? e.ownerDocument.body
                        : e,
                    n.stateNode,
                  ),
                  Qf(e))
                : Pd(Fu, n.stateNode));
            break;
          case 4:
            ((r = Fu),
              (l = Du),
              (Fu = n.stateNode.containerInfo),
              (Du = !0),
              Iu(e, t, n),
              (Fu = r),
              (Du = l));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            (yu(2, n, t), Tu || yu(4, n, t), Iu(e, t, n));
            break;
          case 1:
            (Tu ||
              (wu(n, t),
              "function" == typeof (r = n.stateNode).componentWillUnmount &&
                ku(n, t, r)),
              Iu(e, t, n));
            break;
          case 21:
            Iu(e, t, n);
            break;
          case 22:
            ((Tu = (r = Tu) || null !== n.memoizedState),
              Iu(e, t, n),
              (Tu = r));
            break;
          default:
            Iu(e, t, n);
        }
      }
      function Uu(e, t) {
        if (
          null === t.memoizedState &&
          null !== (e = t.alternate) &&
          null !== (e = e.memoizedState)
        ) {
          e = e.dehydrated;
          try {
            Qf(e);
          } catch (e) {
            Nc(t, t.return, e);
          }
        }
      }
      function Hu(e, t) {
        if (
          null === t.memoizedState &&
          null !== (e = t.alternate) &&
          null !== (e = e.memoizedState) &&
          null !== (e = e.dehydrated)
        )
          try {
            Qf(e);
          } catch (e) {
            Nc(t, t.return, e);
          }
      }
      function Bu(e, t) {
        var n = (function (e) {
          switch (e.tag) {
            case 31:
            case 13:
            case 19:
              var t = e.stateNode;
              return (null === t && (t = e.stateNode = new Ou()), t);
            case 22:
              return (
                null === (t = (e = e.stateNode)._retryCache) &&
                  (t = e._retryCache = new Ou()),
                t
              );
            default:
              throw Error(l(435, e.tag));
          }
        })(e);
        t.forEach(function (t) {
          if (!n.has(t)) {
            n.add(t);
            var r = zc.bind(null, e, t);
            t.then(r, r);
          }
        });
      }
      function Vu(e, t) {
        var n = t.deletions;
        if (null !== n)
          for (var r = 0; r < n.length; r++) {
            var a = n[r],
              i = e,
              o = t,
              u = o;
            e: for (; null !== u; ) {
              switch (u.tag) {
                case 27:
                  if (jd(u.type)) {
                    ((Fu = u.stateNode), (Du = !1));
                    break e;
                  }
                  break;
                case 5:
                  ((Fu = u.stateNode), (Du = !1));
                  break e;
                case 3:
                case 4:
                  ((Fu = u.stateNode.containerInfo), (Du = !0));
                  break e;
              }
              u = u.return;
            }
            if (null === Fu) throw Error(l(160));
            ($u(i, o, a),
              (Fu = null),
              (Du = !1),
              null !== (i = a.alternate) && (i.return = null),
              (a.return = null));
          }
        if (13886 & t.subtreeFlags)
          for (t = t.child; null !== t; ) (Qu(t, e), (t = t.sibling));
      }
      var Wu = null;
      function Qu(e, t) {
        var n = e.alternate,
          r = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Vu(t, e),
              qu(e),
              4 & r && (yu(3, e, e.return), vu(3, e), yu(5, e, e.return)));
            break;
          case 1:
            (Vu(t, e),
              qu(e),
              512 & r && (Tu || null === n || wu(n, n.return)),
              64 & r &&
                _u &&
                null !== (e = e.updateQueue) &&
                null !== (r = e.callbacks) &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = null === n ? r : n.concat(r))));
            break;
          case 26:
            var a = Wu;
            if (
              (Vu(t, e),
              qu(e),
              512 & r && (Tu || null === n || wu(n, n.return)),
              4 & r)
            ) {
              var i = null !== n ? n.memoizedState : null;
              if (((r = e.memoizedState), null === n))
                if (null === r)
                  if (null === e.stateNode) {
                    e: {
                      ((r = e.type),
                        (n = e.memoizedProps),
                        (a = a.ownerDocument || a));
                      t: switch (r) {
                        case "title":
                          ((!(i = a.getElementsByTagName("title")[0]) ||
                            i[Ye] ||
                            i[He] ||
                            "http://www.w3.org/2000/svg" === i.namespaceURI ||
                            i.hasAttribute("itemprop")) &&
                            ((i = a.createElement(r)),
                            a.head.insertBefore(
                              i,
                              a.querySelector("head > title"),
                            )),
                            pd(i, r, n),
                            (i[He] = e),
                            tt(i),
                            (r = i));
                          break e;
                        case "link":
                          var o = rf("link", "href", a).get(r + (n.href || ""));
                          if (o)
                            for (var u = 0; u < o.length; u++)
                              if (
                                (i = o[u]).getAttribute("href") ===
                                  (null == n.href || "" === n.href
                                    ? null
                                    : n.href) &&
                                i.getAttribute("rel") ===
                                  (null == n.rel ? null : n.rel) &&
                                i.getAttribute("title") ===
                                  (null == n.title ? null : n.title) &&
                                i.getAttribute("crossorigin") ===
                                  (null == n.crossOrigin ? null : n.crossOrigin)
                              ) {
                                o.splice(u, 1);
                                break t;
                              }
                          (pd((i = a.createElement(r)), r, n),
                            a.head.appendChild(i));
                          break;
                        case "meta":
                          if (
                            (o = rf("meta", "content", a).get(
                              r + (n.content || ""),
                            ))
                          )
                            for (u = 0; u < o.length; u++)
                              if (
                                (i = o[u]).getAttribute("content") ===
                                  (null == n.content ? null : "" + n.content) &&
                                i.getAttribute("name") ===
                                  (null == n.name ? null : n.name) &&
                                i.getAttribute("property") ===
                                  (null == n.property ? null : n.property) &&
                                i.getAttribute("http-equiv") ===
                                  (null == n.httpEquiv ? null : n.httpEquiv) &&
                                i.getAttribute("charset") ===
                                  (null == n.charSet ? null : n.charSet)
                              ) {
                                o.splice(u, 1);
                                break t;
                              }
                          (pd((i = a.createElement(r)), r, n),
                            a.head.appendChild(i));
                          break;
                        default:
                          throw Error(l(468, r));
                      }
                      ((i[He] = e), tt(i), (r = i));
                    }
                    e.stateNode = r;
                  } else lf(a, e.type, e.stateNode);
                else e.stateNode = Zd(a, r, e.memoizedProps);
              else
                i !== r
                  ? (null === i
                      ? null !== n.stateNode &&
                        (n = n.stateNode).parentNode.removeChild(n)
                      : i.count--,
                    null === r
                      ? lf(a, e.type, e.stateNode)
                      : Zd(a, r, e.memoizedProps))
                  : null === r &&
                    null !== e.stateNode &&
                    Nu(e, e.memoizedProps, n.memoizedProps);
            }
            break;
          case 27:
            (Vu(t, e),
              qu(e),
              512 & r && (Tu || null === n || wu(n, n.return)),
              null !== n && 4 & r && Nu(e, e.memoizedProps, n.memoizedProps));
            break;
          case 5:
            if (
              (Vu(t, e),
              qu(e),
              512 & r && (Tu || null === n || wu(n, n.return)),
              32 & e.flags)
            ) {
              a = e.stateNode;
              try {
                Et(a, "");
              } catch (t) {
                Nc(e, e.return, t);
              }
            }
            (4 & r &&
              null != e.stateNode &&
              Nu(e, (a = e.memoizedProps), null !== n ? n.memoizedProps : a),
              1024 & r && (Lu = !0));
            break;
          case 6:
            if ((Vu(t, e), qu(e), 4 & r)) {
              if (null === e.stateNode) throw Error(l(162));
              ((r = e.memoizedProps), (n = e.stateNode));
              try {
                n.nodeValue = r;
              } catch (t) {
                Nc(e, e.return, t);
              }
            }
            break;
          case 3:
            if (
              ((nf = null),
              (a = Wu),
              (Wu = Hd(t.containerInfo)),
              Vu(t, e),
              (Wu = a),
              qu(e),
              4 & r && null !== n && n.memoizedState.isDehydrated)
            )
              try {
                Qf(t.containerInfo);
              } catch (t) {
                Nc(e, e.return, t);
              }
            Lu && ((Lu = !1), Ku(e));
            break;
          case 4:
            ((r = Wu),
              (Wu = Hd(e.stateNode.containerInfo)),
              Vu(t, e),
              qu(e),
              (Wu = r));
            break;
          case 12:
          default:
            (Vu(t, e), qu(e));
            break;
          case 31:
          case 19:
            (Vu(t, e),
              qu(e),
              4 & r &&
                null !== (r = e.updateQueue) &&
                ((e.updateQueue = null), Bu(e, r)));
            break;
          case 13:
            (Vu(t, e),
              qu(e),
              8192 & e.child.flags &&
                (null !== e.memoizedState) !=
                  (null !== n && null !== n.memoizedState) &&
                (Os = se()),
              4 & r &&
                null !== (r = e.updateQueue) &&
                ((e.updateQueue = null), Bu(e, r)));
            break;
          case 22:
            a = null !== e.memoizedState;
            var s = null !== n && null !== n.memoizedState,
              c = _u,
              d = Tu;
            if (
              ((_u = c || a),
              (Tu = d || s),
              Vu(t, e),
              (Tu = d),
              (_u = c),
              qu(e),
              8192 & r)
            )
              e: for (
                t = e.stateNode,
                  t._visibility = a ? -2 & t._visibility : 1 | t._visibility,
                  a && (null === n || s || _u || Tu || Xu(e)),
                  n = null,
                  t = e;
                ;

              ) {
                if (5 === t.tag || 26 === t.tag) {
                  if (null === n) {
                    s = n = t;
                    try {
                      if (((i = s.stateNode), a))
                        "function" == typeof (o = i.style).setProperty
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none");
                      else {
                        u = s.stateNode;
                        var f = s.memoizedProps.style,
                          p =
                            null != f && f.hasOwnProperty("display")
                              ? f.display
                              : null;
                        u.style.display =
                          null == p || "boolean" == typeof p
                            ? ""
                            : ("" + p).trim();
                      }
                    } catch (e) {
                      Nc(s, s.return, e);
                    }
                  }
                } else if (6 === t.tag) {
                  if (null === n) {
                    s = t;
                    try {
                      s.stateNode.nodeValue = a ? "" : s.memoizedProps;
                    } catch (e) {
                      Nc(s, s.return, e);
                    }
                  }
                } else if (18 === t.tag) {
                  if (null === n) {
                    s = t;
                    try {
                      var m = s.stateNode;
                      a ? zd(m, !0) : zd(s.stateNode, !1);
                    } catch (e) {
                      Nc(s, s.return, e);
                    }
                  }
                } else if (
                  ((22 !== t.tag && 23 !== t.tag) ||
                    null === t.memoizedState ||
                    t === e) &&
                  null !== t.child
                ) {
                  ((t.child.return = t), (t = t.child));
                  continue;
                }
                if (t === e) break e;
                for (; null === t.sibling; ) {
                  if (null === t.return || t.return === e) break e;
                  (n === t && (n = null), (t = t.return));
                }
                (n === t && (n = null),
                  (t.sibling.return = t.return),
                  (t = t.sibling));
              }
            4 & r &&
              null !== (r = e.updateQueue) &&
              null !== (n = r.retryQueue) &&
              ((r.retryQueue = null), Bu(e, n));
          case 30:
          case 21:
        }
      }
      function qu(e) {
        var t = e.flags;
        if (2 & t) {
          try {
            for (var n, r = e.return; null !== r; ) {
              if (Eu(r)) {
                n = r;
                break;
              }
              r = r.return;
            }
            if (null == n) throw Error(l(160));
            switch (n.tag) {
              case 27:
                var a = n.stateNode;
                Pu(e, Cu(e), a);
                break;
              case 5:
                var i = n.stateNode;
                (32 & n.flags && (Et(i, ""), (n.flags &= -33)),
                  Pu(e, Cu(e), i));
                break;
              case 3:
              case 4:
                var o = n.stateNode.containerInfo;
                ju(e, Cu(e), o);
                break;
              default:
                throw Error(l(161));
            }
          } catch (t) {
            Nc(e, e.return, t);
          }
          e.flags &= -3;
        }
        4096 & t && (e.flags &= -4097);
      }
      function Ku(e) {
        if (1024 & e.subtreeFlags)
          for (e = e.child; null !== e; ) {
            var t = e;
            (Ku(t),
              5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
              (e = e.sibling));
          }
      }
      function Yu(e, t) {
        if (8772 & t.subtreeFlags)
          for (t = t.child; null !== t; )
            (Au(e, t.alternate, t), (t = t.sibling));
      }
      function Xu(e) {
        for (e = e.child; null !== e; ) {
          var t = e;
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              (yu(4, t, t.return), Xu(t));
              break;
            case 1:
              wu(t, t.return);
              var n = t.stateNode;
              ("function" == typeof n.componentWillUnmount &&
                ku(t, t.return, n),
                Xu(t));
              break;
            case 27:
              Id(t.stateNode);
            case 26:
            case 5:
              (wu(t, t.return), Xu(t));
              break;
            case 22:
              null === t.memoizedState && Xu(t);
              break;
            default:
              Xu(t);
          }
          e = e.sibling;
        }
      }
      function Gu(e, t, n) {
        for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t; ) {
          var r = t.alternate,
            l = e,
            a = t,
            i = a.flags;
          switch (a.tag) {
            case 0:
            case 11:
            case 15:
              (Gu(l, a, n), vu(4, a));
              break;
            case 1:
              if (
                (Gu(l, a, n),
                "function" == typeof (l = (r = a).stateNode).componentDidMount)
              )
                try {
                  l.componentDidMount();
                } catch (e) {
                  Nc(r, r.return, e);
                }
              if (null !== (l = (r = a).updateQueue)) {
                var o = r.stateNode;
                try {
                  var u = l.shared.hiddenCallbacks;
                  if (null !== u)
                    for (
                      l.shared.hiddenCallbacks = null, l = 0;
                      l < u.length;
                      l++
                    )
                      Ca(u[l], o);
                } catch (e) {
                  Nc(r, r.return, e);
                }
              }
              (n && 64 & i && bu(a), xu(a, a.return));
              break;
            case 27:
              zu(a);
            case 26:
            case 5:
              (Gu(l, a, n), n && null === r && 4 & i && Su(a), xu(a, a.return));
              break;
            case 12:
              Gu(l, a, n);
              break;
            case 31:
              (Gu(l, a, n), n && 4 & i && Uu(l, a));
              break;
            case 13:
              (Gu(l, a, n), n && 4 & i && Hu(l, a));
              break;
            case 22:
              (null === a.memoizedState && Gu(l, a, n), xu(a, a.return));
              break;
            case 30:
              break;
            default:
              Gu(l, a, n);
          }
          t = t.sibling;
        }
      }
      function Zu(e, t) {
        var n = null;
        (null !== e &&
          null !== e.memoizedState &&
          null !== e.memoizedState.cachePool &&
          (n = e.memoizedState.cachePool.pool),
          (e = null),
          null !== t.memoizedState &&
            null !== t.memoizedState.cachePool &&
            (e = t.memoizedState.cachePool.pool),
          e !== n && (null != e && e.refCount++, null != n && Ul(n)));
      }
      function Ju(e, t) {
        ((e = null),
          null !== t.alternate && (e = t.alternate.memoizedState.cache),
          (t = t.memoizedState.cache) !== e &&
            (t.refCount++, null != e && Ul(e)));
      }
      function es(e, t, n, r) {
        if (10256 & t.subtreeFlags)
          for (t = t.child; null !== t; ) (ts(e, t, n, r), (t = t.sibling));
      }
      function ts(e, t, n, r) {
        var l = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            (es(e, t, n, r), 2048 & l && vu(9, t));
            break;
          case 1:
          case 31:
          case 13:
          default:
            es(e, t, n, r);
            break;
          case 3:
            (es(e, t, n, r),
              2048 & l &&
                ((e = null),
                null !== t.alternate && (e = t.alternate.memoizedState.cache),
                (t = t.memoizedState.cache) !== e &&
                  (t.refCount++, null != e && Ul(e))));
            break;
          case 12:
            if (2048 & l) {
              (es(e, t, n, r), (e = t.stateNode));
              try {
                var a = t.memoizedProps,
                  i = a.id,
                  o = a.onPostCommit;
                "function" == typeof o &&
                  o(
                    i,
                    null === t.alternate ? "mount" : "update",
                    e.passiveEffectDuration,
                    -0,
                  );
              } catch (e) {
                Nc(t, t.return, e);
              }
            } else es(e, t, n, r);
            break;
          case 23:
            break;
          case 22:
            ((a = t.stateNode),
              (i = t.alternate),
              null !== t.memoizedState
                ? 2 & a._visibility
                  ? es(e, t, n, r)
                  : rs(e, t)
                : 2 & a._visibility
                  ? es(e, t, n, r)
                  : ((a._visibility |= 2),
                    ns(e, t, n, r, !!(10256 & t.subtreeFlags) || !1)),
              2048 & l && Zu(i, t));
            break;
          case 24:
            (es(e, t, n, r), 2048 & l && Ju(t.alternate, t));
        }
      }
      function ns(e, t, n, r, l) {
        for (
          l = l && (!!(10256 & t.subtreeFlags) || !1), t = t.child;
          null !== t;

        ) {
          var a = e,
            i = t,
            o = n,
            u = r,
            s = i.flags;
          switch (i.tag) {
            case 0:
            case 11:
            case 15:
              (ns(a, i, o, u, l), vu(8, i));
              break;
            case 23:
              break;
            case 22:
              var c = i.stateNode;
              (null !== i.memoizedState
                ? 2 & c._visibility
                  ? ns(a, i, o, u, l)
                  : rs(a, i)
                : ((c._visibility |= 2), ns(a, i, o, u, l)),
                l && 2048 & s && Zu(i.alternate, i));
              break;
            case 24:
              (ns(a, i, o, u, l), l && 2048 & s && Ju(i.alternate, i));
              break;
            default:
              ns(a, i, o, u, l);
          }
          t = t.sibling;
        }
      }
      function rs(e, t) {
        if (10256 & t.subtreeFlags)
          for (t = t.child; null !== t; ) {
            var n = e,
              r = t,
              l = r.flags;
            switch (r.tag) {
              case 22:
                (rs(n, r), 2048 & l && Zu(r.alternate, r));
                break;
              case 24:
                (rs(n, r), 2048 & l && Ju(r.alternate, r));
                break;
              default:
                rs(n, r);
            }
            t = t.sibling;
          }
      }
      var ls = 8192;
      function as(e, t, n) {
        if (e.subtreeFlags & ls)
          for (e = e.child; null !== e; ) (is(e, t, n), (e = e.sibling));
      }
      function is(e, t, n) {
        switch (e.tag) {
          case 26:
            (as(e, t, n),
              e.flags & ls &&
                null !== e.memoizedState &&
                (function (e, t, n, r) {
                  if (
                    !(
                      "stylesheet" !== n.type ||
                      ("string" == typeof r.media &&
                        !1 === matchMedia(r.media).matches) ||
                      4 & n.state.loading
                    )
                  ) {
                    if (null === n.instance) {
                      var l = qd(r.href),
                        a = t.querySelector(Kd(l));
                      if (a)
                        return (
                          null !== (t = a._p) &&
                            "object" == typeof t &&
                            "function" == typeof t.then &&
                            (e.count++, (e = uf.bind(e)), t.then(e, e)),
                          (n.state.loading |= 4),
                          (n.instance = a),
                          void tt(a)
                        );
                      ((a = t.ownerDocument || t),
                        (r = Yd(r)),
                        (l = $d.get(l)) && ef(r, l),
                        tt((a = a.createElement("link"))));
                      var i = a;
                      ((i._p = new Promise(function (e, t) {
                        ((i.onload = e), (i.onerror = t));
                      })),
                        pd(a, "link", r),
                        (n.instance = a));
                    }
                    (null === e.stylesheets && (e.stylesheets = new Map()),
                      e.stylesheets.set(n, t),
                      (t = n.state.preload) &&
                        !(3 & n.state.loading) &&
                        (e.count++,
                        (n = uf.bind(e)),
                        t.addEventListener("load", n),
                        t.addEventListener("error", n)));
                  }
                })(n, Wu, e.memoizedState, e.memoizedProps));
            break;
          case 5:
          default:
            as(e, t, n);
            break;
          case 3:
          case 4:
            var r = Wu;
            ((Wu = Hd(e.stateNode.containerInfo)), as(e, t, n), (Wu = r));
            break;
          case 22:
            null === e.memoizedState &&
              (null !== (r = e.alternate) && null !== r.memoizedState
                ? ((r = ls), (ls = 16777216), as(e, t, n), (ls = r))
                : as(e, t, n));
        }
      }
      function os(e) {
        var t = e.alternate;
        if (null !== t && null !== (e = t.child)) {
          t.child = null;
          do {
            ((t = e.sibling), (e.sibling = null), (e = t));
          } while (null !== e);
        }
      }
      function us(e) {
        var t = e.deletions;
        if (16 & e.flags) {
          if (null !== t)
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              ((Mu = r), ds(r, e));
            }
          os(e);
        }
        if (10256 & e.subtreeFlags)
          for (e = e.child; null !== e; ) (ss(e), (e = e.sibling));
      }
      function ss(e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            (us(e), 2048 & e.flags && yu(9, e, e.return));
            break;
          case 3:
          case 12:
          default:
            us(e);
            break;
          case 22:
            var t = e.stateNode;
            null !== e.memoizedState &&
            2 & t._visibility &&
            (null === e.return || 13 !== e.return.tag)
              ? ((t._visibility &= -3), cs(e))
              : us(e);
        }
      }
      function cs(e) {
        var t = e.deletions;
        if (16 & e.flags) {
          if (null !== t)
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              ((Mu = r), ds(r, e));
            }
          os(e);
        }
        for (e = e.child; null !== e; ) {
          switch ((t = e).tag) {
            case 0:
            case 11:
            case 15:
              (yu(8, t, t.return), cs(t));
              break;
            case 22:
              2 & (n = t.stateNode)._visibility &&
                ((n._visibility &= -3), cs(t));
              break;
            default:
              cs(t);
          }
          e = e.sibling;
        }
      }
      function ds(e, t) {
        for (; null !== Mu; ) {
          var n = Mu;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              yu(8, n, t);
              break;
            case 23:
            case 22:
              if (
                null !== n.memoizedState &&
                null !== n.memoizedState.cachePool
              ) {
                var r = n.memoizedState.cachePool.pool;
                null != r && r.refCount++;
              }
              break;
            case 24:
              Ul(n.memoizedState.cache);
          }
          if (null !== (r = n.child)) ((r.return = n), (Mu = r));
          else
            e: for (n = e; null !== Mu; ) {
              var l = (r = Mu).sibling,
                a = r.return;
              if ((Ru(r), r === n)) {
                Mu = null;
                break e;
              }
              if (null !== l) {
                ((l.return = a), (Mu = l));
                break e;
              }
              Mu = a;
            }
        }
      }
      var fs = {
          getCacheForType: function (e) {
            var t = Ol(Il),
              n = t.data.get(e);
            return (void 0 === n && ((n = e()), t.data.set(e, n)), n);
          },
          cacheSignal: function () {
            return Ol(Il).controller.signal;
          },
        },
        ps = "function" == typeof WeakMap ? WeakMap : Map,
        ms = 0,
        hs = null,
        gs = null,
        vs = 0,
        ys = 0,
        bs = null,
        ks = !1,
        xs = !1,
        ws = !1,
        Ss = 0,
        Ns = 0,
        Es = 0,
        Cs = 0,
        js = 0,
        Ps = 0,
        zs = 0,
        _s = null,
        Ts = null,
        Ls = !1,
        Os = 0,
        Ms = 0,
        As = 1 / 0,
        Rs = null,
        Fs = null,
        Ds = 0,
        Is = null,
        $s = null,
        Us = 0,
        Hs = 0,
        Bs = null,
        Vs = null,
        Ws = 0,
        Qs = null;
      function qs() {
        return 2 & ms && 0 !== vs ? vs & -vs : null !== A.T ? Wc() : Ie();
      }
      function Ks() {
        if (0 === Ps)
          if (536870912 & vs && !fl) Ps = 536870912;
          else {
            var e = Ee;
            (!(3932160 & (Ee <<= 1)) && (Ee = 262144), (Ps = e));
          }
        return (null !== (e = Oa.current) && (e.flags |= 32), Ps);
      }
      function Ys(e, t, n) {
        (((e === hs && (2 === ys || 9 === ys)) ||
          null !== e.cancelPendingCommit) &&
          (nc(e, 0), Js(e, vs, Ps, !1)),
          Oe(e, n),
          (!(2 & ms) || e !== hs) &&
            (e === hs &&
              (!(2 & ms) && (Cs |= n), 4 === Ns && Js(e, vs, Ps, !1)),
            Dc(e)));
      }
      function Xs(e, t, n) {
        if (6 & ms) throw Error(l(327));
        for (
          var r = (!n && !(127 & t) && 0 === (t & e.expiredLanes)) || ze(e, t),
            a = r
              ? (function (e, t) {
                  var n = ms;
                  ms |= 2;
                  var r = ac(),
                    a = ic();
                  hs !== e || vs !== t
                    ? ((Rs = null), (As = se() + 500), nc(e, t))
                    : (xs = ze(e, t));
                  e: for (;;)
                    try {
                      if (0 !== ys && null !== gs) {
                        t = gs;
                        var i = bs;
                        t: switch (ys) {
                          case 1:
                            ((ys = 0), (bs = null), pc(e, t, i, 1));
                            break;
                          case 2:
                          case 9:
                            if (na(i)) {
                              ((ys = 0), (bs = null), fc(t));
                              break;
                            }
                            ((t = function () {
                              ((2 !== ys && 9 !== ys) || hs !== e || (ys = 7),
                                Dc(e));
                            }),
                              i.then(t, t));
                            break e;
                          case 3:
                            ys = 7;
                            break e;
                          case 4:
                            ys = 5;
                            break e;
                          case 7:
                            na(i)
                              ? ((ys = 0), (bs = null), fc(t))
                              : ((ys = 0), (bs = null), pc(e, t, i, 7));
                            break;
                          case 5:
                            var o = null;
                            switch (gs.tag) {
                              case 26:
                                o = gs.memoizedState;
                              case 5:
                              case 27:
                                var u = gs;
                                if (o ? af(o) : u.stateNode.complete) {
                                  ((ys = 0), (bs = null));
                                  var s = u.sibling;
                                  if (null !== s) gs = s;
                                  else {
                                    var c = u.return;
                                    null !== c
                                      ? ((gs = c), mc(c))
                                      : (gs = null);
                                  }
                                  break t;
                                }
                            }
                            ((ys = 0), (bs = null), pc(e, t, i, 5));
                            break;
                          case 6:
                            ((ys = 0), (bs = null), pc(e, t, i, 6));
                            break;
                          case 8:
                            (tc(), (Ns = 6));
                            break e;
                          default:
                            throw Error(l(462));
                        }
                      }
                      cc();
                      break;
                    } catch (t) {
                      rc(e, t);
                    }
                  return (
                    (El = Nl = null),
                    (A.H = r),
                    (A.A = a),
                    (ms = n),
                    null !== gs ? 0 : ((hs = null), (vs = 0), Tr(), Ns)
                  );
                })(e, t)
              : uc(e, t, !0),
            i = r;
          ;

        ) {
          if (0 === a) {
            xs && !r && Js(e, t, 0, !1);
            break;
          }
          if (((n = e.current.alternate), !i || Zs(n))) {
            if (2 === a) {
              if (((i = t), e.errorRecoveryDisabledLanes & i)) var o = 0;
              else
                o =
                  0 !== (o = -536870913 & e.pendingLanes)
                    ? o
                    : 536870912 & o
                      ? 536870912
                      : 0;
              if (0 !== o) {
                t = o;
                e: {
                  var u = e;
                  a = _s;
                  var s = u.current.memoizedState.isDehydrated;
                  if (
                    (s && (nc(u, o).flags |= 256), 2 !== (o = uc(u, o, !1)))
                  ) {
                    if (ws && !s) {
                      ((u.errorRecoveryDisabledLanes |= i), (Cs |= i), (a = 4));
                      break e;
                    }
                    ((i = Ts),
                      (Ts = a),
                      null !== i &&
                        (null === Ts ? (Ts = i) : Ts.push.apply(Ts, i)));
                  }
                  a = o;
                }
                if (((i = !1), 2 !== a)) continue;
              }
            }
            if (1 === a) {
              (nc(e, 0), Js(e, t, 0, !0));
              break;
            }
            e: {
              switch (((r = e), (i = a))) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 4:
                  if ((4194048 & t) !== t) break;
                case 6:
                  Js(r, t, Ps, !ks);
                  break e;
                case 2:
                  Ts = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(l(329));
              }
              if ((62914560 & t) === t && 10 < (a = Os + 300 - se())) {
                if ((Js(r, t, Ps, !ks), 0 !== Pe(r, 0, !0))) break e;
                ((Us = t),
                  (r.timeoutHandle = wd(
                    Gs.bind(
                      null,
                      r,
                      n,
                      Ts,
                      Rs,
                      Ls,
                      t,
                      Ps,
                      Cs,
                      zs,
                      ks,
                      i,
                      "Throttled",
                      -0,
                      0,
                    ),
                    a,
                  )));
              } else Gs(r, n, Ts, Rs, Ls, t, Ps, Cs, zs, ks, i, null, -0, 0);
            }
            break;
          }
          ((a = uc(e, t, !1)), (i = !1));
        }
        Dc(e);
      }
      function Gs(e, t, n, r, l, a, i, o, u, s, c, d, f, p) {
        if (
          ((e.timeoutHandle = -1),
          8192 & (d = t.subtreeFlags) || !(16785408 & ~d))
        ) {
          is(
            t,
            a,
            (d = {
              stylesheets: null,
              count: 0,
              imgCount: 0,
              imgBytes: 0,
              suspenseyImages: [],
              waitingForImages: !0,
              waitingForViewTransition: !1,
              unsuspend: Ot,
            }),
          );
          var m =
            (62914560 & a) === a
              ? Os - se()
              : (4194048 & a) === a
                ? Ms - se()
                : 0;
          if (
            ((m = (function (e, t) {
              return (
                e.stylesheets && 0 === e.count && cf(e, e.stylesheets),
                0 < e.count || 0 < e.imgCount
                  ? function (n) {
                      var r = setTimeout(function () {
                        if (
                          (e.stylesheets && cf(e, e.stylesheets), e.unsuspend)
                        ) {
                          var t = e.unsuspend;
                          ((e.unsuspend = null), t());
                        }
                      }, 6e4 + t);
                      0 < e.imgBytes &&
                        0 === of &&
                        (of =
                          62500 *
                          (function () {
                            if (
                              "function" == typeof performance.getEntriesByType
                            ) {
                              for (
                                var e = 0,
                                  t = 0,
                                  n = performance.getEntriesByType("resource"),
                                  r = 0;
                                r < n.length;
                                r++
                              ) {
                                var l = n[r],
                                  a = l.transferSize,
                                  i = l.initiatorType,
                                  o = l.duration;
                                if (a && o && md(i)) {
                                  for (
                                    i = 0, o = l.responseEnd, r += 1;
                                    r < n.length;
                                    r++
                                  ) {
                                    var u = n[r],
                                      s = u.startTime;
                                    if (s > o) break;
                                    var c = u.transferSize,
                                      d = u.initiatorType;
                                    c &&
                                      md(d) &&
                                      (i +=
                                        c *
                                        ((u = u.responseEnd) < o
                                          ? 1
                                          : (o - s) / (u - s)));
                                  }
                                  if (
                                    (--r,
                                    (t += (8 * (a + i)) / (l.duration / 1e3)),
                                    10 < ++e)
                                  )
                                    break;
                                }
                              }
                              if (0 < e) return t / e / 1e6;
                            }
                            return navigator.connection &&
                              ((e = navigator.connection.downlink),
                              "number" == typeof e)
                              ? e
                              : 5;
                          })());
                      var l = setTimeout(
                        function () {
                          if (
                            ((e.waitingForImages = !1),
                            0 === e.count &&
                              (e.stylesheets && cf(e, e.stylesheets),
                              e.unsuspend))
                          ) {
                            var t = e.unsuspend;
                            ((e.unsuspend = null), t());
                          }
                        },
                        (e.imgBytes > of ? 50 : 800) + t,
                      );
                      return (
                        (e.unsuspend = n),
                        function () {
                          ((e.unsuspend = null),
                            clearTimeout(r),
                            clearTimeout(l));
                        }
                      );
                    }
                  : null
              );
            })(d, m)),
            null !== m)
          )
            return (
              (Us = a),
              (e.cancelPendingCommit = m(
                gc.bind(null, e, t, a, n, r, l, i, o, u, c, d, null, f, p),
              )),
              void Js(e, a, i, !s)
            );
        }
        gc(e, t, a, n, r, l, i, o, u);
      }
      function Zs(e) {
        for (var t = e; ; ) {
          var n = t.tag;
          if (
            (0 === n || 11 === n || 15 === n) &&
            16384 & t.flags &&
            null !== (n = t.updateQueue) &&
            null !== (n = n.stores)
          )
            for (var r = 0; r < n.length; r++) {
              var l = n[r],
                a = l.getSnapshot;
              l = l.value;
              try {
                if (!Jn(a(), l)) return !1;
              } catch {
                return !1;
              }
            }
          if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
            ((n.return = t), (t = n));
          else {
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return !0;
              t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
          }
        }
        return !0;
      }
      function Js(e, t, n, r) {
        ((t &= ~js),
          (t &= ~Cs),
          (e.suspendedLanes |= t),
          (e.pingedLanes &= ~t),
          r && (e.warmLanes |= t),
          (r = e.expirationTimes));
        for (var l = t; 0 < l; ) {
          var a = 31 - xe(l),
            i = 1 << a;
          ((r[a] = -1), (l &= ~i));
        }
        0 !== n && Me(e, n, t);
      }
      function ec() {
        return !!(6 & ms) || (Ic(0, !1), !1);
      }
      function tc() {
        if (null !== gs) {
          if (0 === ys) var e = gs.return;
          else
            ((El = Nl = null), oi((e = gs)), (ua = null), (sa = 0), (e = gs));
          for (; null !== e; ) (gu(e.alternate, e), (e = e.return));
          gs = null;
        }
      }
      function nc(e, t) {
        var n = e.timeoutHandle;
        (-1 !== n && ((e.timeoutHandle = -1), Sd(n)),
          null !== (n = e.cancelPendingCommit) &&
            ((e.cancelPendingCommit = null), n()),
          (Us = 0),
          tc(),
          (hs = e),
          (gs = n = Ur(e.current, null)),
          (vs = t),
          (ys = 0),
          (bs = null),
          (ks = !1),
          (xs = ze(e, t)),
          (ws = !1),
          (zs = Ps = js = Cs = Es = Ns = 0),
          (Ts = _s = null),
          (Ls = !1),
          8 & t && (t |= 32 & t));
        var r = e.entangledLanes;
        if (0 !== r)
          for (e = e.entanglements, r &= t; 0 < r; ) {
            var l = 31 - xe(r),
              a = 1 << l;
            ((t |= e[l]), (r &= ~a));
          }
        return ((Ss = t), Tr(), n);
      }
      function rc(e, t) {
        ((Ba = null),
          (A.H = go),
          t === Zl || t === ea
            ? ((t = ia()), (ys = 3))
            : t === Jl
              ? ((t = ia()), (ys = 4))
              : (ys =
                  t === Oo
                    ? 8
                    : null !== t &&
                        "object" == typeof t &&
                        "function" == typeof t.then
                      ? 6
                      : 1),
          (bs = t),
          null === gs && ((Ns = 1), Po(e, Yr(t, e.current))));
      }
      function lc() {
        var e = Oa.current;
        return (
          null === e ||
          ((4194048 & vs) === vs
            ? null === Ma
            : !!((62914560 & vs) === vs || 536870912 & vs) && e === Ma)
        );
      }
      function ac() {
        var e = A.H;
        return ((A.H = go), null === e ? go : e);
      }
      function ic() {
        var e = A.A;
        return ((A.A = fs), e);
      }
      function oc() {
        ((Ns = 4),
          ks || ((4194048 & vs) !== vs && null !== Oa.current) || (xs = !0),
          (!(134217727 & Es) && !(134217727 & Cs)) ||
            null === hs ||
            Js(hs, vs, Ps, !1));
      }
      function uc(e, t, n) {
        var r = ms;
        ms |= 2;
        var l = ac(),
          a = ic();
        ((hs !== e || vs !== t) && ((Rs = null), nc(e, t)), (t = !1));
        var i = Ns;
        e: for (;;)
          try {
            if (0 !== ys && null !== gs) {
              var o = gs,
                u = bs;
              switch (ys) {
                case 8:
                  (tc(), (i = 6));
                  break e;
                case 3:
                case 2:
                case 9:
                case 6:
                  null === Oa.current && (t = !0);
                  var s = ys;
                  if (((ys = 0), (bs = null), pc(e, o, u, s), n && xs)) {
                    i = 0;
                    break e;
                  }
                  break;
                default:
                  ((s = ys), (ys = 0), (bs = null), pc(e, o, u, s));
              }
            }
            (sc(), (i = Ns));
            break;
          } catch (t) {
            rc(e, t);
          }
        return (
          t && e.shellSuspendCounter++,
          (El = Nl = null),
          (ms = r),
          (A.H = l),
          (A.A = a),
          null === gs && ((hs = null), (vs = 0), Tr()),
          i
        );
      }
      function sc() {
        for (; null !== gs; ) dc(gs);
      }
      function cc() {
        for (; null !== gs && !oe(); ) dc(gs);
      }
      function dc(e) {
        var t = ou(e.alternate, e, Ss);
        ((e.memoizedProps = e.pendingProps), null === t ? mc(e) : (gs = t));
      }
      function fc(e) {
        var t = e,
          n = t.alternate;
        switch (t.tag) {
          case 15:
          case 0:
            t = Qo(n, t, t.pendingProps, t.type, void 0, vs);
            break;
          case 11:
            t = Qo(n, t, t.pendingProps, t.type.render, t.ref, vs);
            break;
          case 5:
            oi(t);
          default:
            (gu(n, t), (t = ou(n, (t = gs = Hr(t, Ss)), Ss)));
        }
        ((e.memoizedProps = e.pendingProps), null === t ? mc(e) : (gs = t));
      }
      function pc(e, t, n, r) {
        ((El = Nl = null), oi(t), (ua = null), (sa = 0));
        var a = t.return;
        try {
          if (
            (function (e, t, n, r, a) {
              if (
                ((n.flags |= 32768),
                null !== r &&
                  "object" == typeof r &&
                  "function" == typeof r.then)
              ) {
                if (
                  (null !== (t = n.alternate) && _l(t, n, a, !0),
                  null !== (n = Oa.current))
                ) {
                  switch (n.tag) {
                    case 31:
                    case 13:
                      return (
                        null === Ma
                          ? oc()
                          : null === n.alternate && 0 === Ns && (Ns = 3),
                        (n.flags &= -257),
                        (n.flags |= 65536),
                        (n.lanes = a),
                        r === ta
                          ? (n.flags |= 16384)
                          : (null === (t = n.updateQueue)
                              ? (n.updateQueue = new Set([r]))
                              : t.add(r),
                            Ec(e, r, a)),
                        !1
                      );
                    case 22:
                      return (
                        (n.flags |= 65536),
                        r === ta
                          ? (n.flags |= 16384)
                          : (null === (t = n.updateQueue)
                              ? ((t = {
                                  transitions: null,
                                  markerInstances: null,
                                  retryQueue: new Set([r]),
                                }),
                                (n.updateQueue = t))
                              : null === (n = t.retryQueue)
                                ? (t.retryQueue = new Set([r]))
                                : n.add(r),
                            Ec(e, r, a)),
                        !1
                      );
                  }
                  throw Error(l(435, n.tag));
                }
                return (Ec(e, r, a), oc(), !1);
              }
              if (fl)
                return (
                  null !== (t = Oa.current)
                    ? (!(65536 & t.flags) && (t.flags |= 256),
                      (t.flags |= 65536),
                      (t.lanes = a),
                      r !== hl && wl(Yr((e = Error(l(422), { cause: r })), n)))
                    : (r !== hl && wl(Yr((t = Error(l(423), { cause: r })), n)),
                      ((e = e.current.alternate).flags |= 65536),
                      (a &= -a),
                      (e.lanes |= a),
                      (r = Yr(r, n)),
                      wa(e, (a = _o(e.stateNode, r, a))),
                      4 !== Ns && (Ns = 2)),
                  !1
                );
              var i = Error(l(520), { cause: r });
              if (
                ((i = Yr(i, n)),
                null === _s ? (_s = [i]) : _s.push(i),
                4 !== Ns && (Ns = 2),
                null === t)
              )
                return !0;
              ((r = Yr(r, n)), (n = t));
              do {
                switch (n.tag) {
                  case 3:
                    return (
                      (n.flags |= 65536),
                      (e = a & -a),
                      (n.lanes |= e),
                      wa(n, (e = _o(n.stateNode, r, e))),
                      !1
                    );
                  case 1:
                    if (
                      ((t = n.type),
                      (i = n.stateNode),
                      !(
                        128 & n.flags ||
                        ("function" != typeof t.getDerivedStateFromError &&
                          (null === i ||
                            "function" != typeof i.componentDidCatch ||
                            (null !== Fs && Fs.has(i))))
                      ))
                    )
                      return (
                        (n.flags |= 65536),
                        (a &= -a),
                        (n.lanes |= a),
                        Lo((a = To(a)), e, n, r),
                        wa(n, a),
                        !1
                      );
                }
                n = n.return;
              } while (null !== n);
              return !1;
            })(e, a, t, n, vs)
          )
            return ((Ns = 1), Po(e, Yr(n, e.current)), void (gs = null));
        } catch (t) {
          if (null !== a) throw ((gs = a), t);
          return ((Ns = 1), Po(e, Yr(n, e.current)), void (gs = null));
        }
        32768 & t.flags
          ? (fl || 1 === r
              ? (e = !0)
              : xs || 536870912 & vs
                ? (e = !1)
                : ((ks = e = !0),
                  (2 === r || 9 === r || 3 === r || 6 === r) &&
                    null !== (r = Oa.current) &&
                    13 === r.tag &&
                    (r.flags |= 16384)),
            hc(t, e))
          : mc(t);
      }
      function mc(e) {
        var t = e;
        do {
          if (32768 & t.flags) return void hc(t, ks);
          e = t.return;
          var n = mu(t.alternate, t, Ss);
          if (null !== n) return void (gs = n);
          if (null !== (t = t.sibling)) return void (gs = t);
          gs = t = e;
        } while (null !== t);
        0 === Ns && (Ns = 5);
      }
      function hc(e, t) {
        do {
          var n = hu(e.alternate, e);
          if (null !== n) return ((n.flags &= 32767), void (gs = n));
          if (
            (null !== (n = e.return) &&
              ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
            !t && null !== (e = e.sibling))
          )
            return void (gs = e);
          gs = e = n;
        } while (null !== e);
        ((Ns = 6), (gs = null));
      }
      function gc(e, t, n, r, a, i, o, u, s) {
        e.cancelPendingCommit = null;
        do {
          xc();
        } while (0 !== Ds);
        if (6 & ms) throw Error(l(327));
        if (null !== t) {
          if (t === e.current) throw Error(l(177));
          if (
            ((i = t.lanes | t.childLanes),
            (function (e, t, n, r, l, a) {
              var i = e.pendingLanes;
              ((e.pendingLanes = n),
                (e.suspendedLanes = 0),
                (e.pingedLanes = 0),
                (e.warmLanes = 0),
                (e.expiredLanes &= n),
                (e.entangledLanes &= n),
                (e.errorRecoveryDisabledLanes &= n),
                (e.shellSuspendCounter = 0));
              var o = e.entanglements,
                u = e.expirationTimes,
                s = e.hiddenUpdates;
              for (n = i & ~n; 0 < n; ) {
                var c = 31 - xe(n),
                  d = 1 << c;
                ((o[c] = 0), (u[c] = -1));
                var f = s[c];
                if (null !== f)
                  for (s[c] = null, c = 0; c < f.length; c++) {
                    var p = f[c];
                    null !== p && (p.lane &= -536870913);
                  }
                n &= ~d;
              }
              (0 !== r && Me(e, r, 0),
                0 !== a &&
                  0 === l &&
                  0 !== e.tag &&
                  (e.suspendedLanes |= a & ~(i & ~t)));
            })(e, n, (i |= _r), o, u, s),
            e === hs && ((gs = hs = null), (vs = 0)),
            ($s = t),
            (Is = e),
            (Us = n),
            (Hs = i),
            (Bs = a),
            (Vs = r),
            10256 & t.subtreeFlags || 10256 & t.flags
              ? ((e.callbackNode = null),
                (e.callbackPriority = 0),
                (function (e, t) {
                  ae(e, t);
                })(pe, function () {
                  return (wc(), null);
                }))
              : ((e.callbackNode = null), (e.callbackPriority = 0)),
            (r = !!(13878 & t.flags)),
            13878 & t.subtreeFlags || r)
          ) {
            ((r = A.T),
              (A.T = null),
              (a = R.p),
              (R.p = 2),
              (o = ms),
              (ms |= 4));
            try {
              !(function (e, t) {
                if (((e = e.containerInfo), (hd = xf), ar((e = lr(e))))) {
                  if ("selectionStart" in e)
                    var n = { start: e.selectionStart, end: e.selectionEnd };
                  else
                    e: {
                      var r =
                        (n = ((n = e.ownerDocument) && n.defaultView) || window)
                          .getSelection && n.getSelection();
                      if (r && 0 !== r.rangeCount) {
                        n = r.anchorNode;
                        var a = r.anchorOffset,
                          i = r.focusNode;
                        r = r.focusOffset;
                        try {
                          (n.nodeType, i.nodeType);
                        } catch {
                          n = null;
                          break e;
                        }
                        var o = 0,
                          u = -1,
                          s = -1,
                          c = 0,
                          d = 0,
                          f = e,
                          p = null;
                        t: for (;;) {
                          for (
                            var m;
                            f !== n ||
                              (0 !== a && 3 !== f.nodeType) ||
                              (u = o + a),
                              f !== i ||
                                (0 !== r && 3 !== f.nodeType) ||
                                (s = o + r),
                              3 === f.nodeType && (o += f.nodeValue.length),
                              null !== (m = f.firstChild);

                          )
                            ((p = f), (f = m));
                          for (;;) {
                            if (f === e) break t;
                            if (
                              (p === n && ++c === a && (u = o),
                              p === i && ++d === r && (s = o),
                              null !== (m = f.nextSibling))
                            )
                              break;
                            p = (f = p).parentNode;
                          }
                          f = m;
                        }
                        n = -1 === u || -1 === s ? null : { start: u, end: s };
                      } else n = null;
                    }
                  n = n || { start: 0, end: 0 };
                } else n = null;
                for (
                  gd = { focusedElem: e, selectionRange: n }, xf = !1, Mu = t;
                  null !== Mu;

                )
                  if (
                    ((e = (t = Mu).child), 1028 & t.subtreeFlags && null !== e)
                  )
                    ((e.return = t), (Mu = e));
                  else
                    for (; null !== Mu; ) {
                      switch (
                        ((i = (t = Mu).alternate), (e = t.flags), t.tag)
                      ) {
                        case 0:
                          if (
                            4 & e &&
                            null !==
                              (e =
                                null !== (e = t.updateQueue) ? e.events : null)
                          )
                            for (n = 0; n < e.length; n++)
                              (a = e[n]).ref.impl = a.nextImpl;
                          break;
                        case 11:
                        case 15:
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                          break;
                        case 1:
                          if (1024 & e && null !== i) {
                            ((e = void 0),
                              (n = t),
                              (a = i.memoizedProps),
                              (i = i.memoizedState),
                              (r = n.stateNode));
                            try {
                              var h = No(n.type, a);
                              ((e = r.getSnapshotBeforeUpdate(h, i)),
                                (r.__reactInternalSnapshotBeforeUpdate = e));
                            } catch (e) {
                              Nc(n, n.return, e);
                            }
                          }
                          break;
                        case 3:
                          if (1024 & e)
                            if (
                              9 ===
                              (n = (e = t.stateNode.containerInfo).nodeType)
                            )
                              _d(e);
                            else if (1 === n)
                              switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                  _d(e);
                                  break;
                                default:
                                  e.textContent = "";
                              }
                          break;
                        default:
                          if (1024 & e) throw Error(l(163));
                      }
                      if (null !== (e = t.sibling)) {
                        ((e.return = t.return), (Mu = e));
                        break;
                      }
                      Mu = t.return;
                    }
              })(e, t);
            } finally {
              ((ms = o), (R.p = a), (A.T = r));
            }
          }
          ((Ds = 1), vc(), yc(), bc());
        }
      }
      function vc() {
        if (1 === Ds) {
          Ds = 0;
          var e = Is,
            t = $s,
            n = !!(13878 & t.flags);
          if (13878 & t.subtreeFlags || n) {
            ((n = A.T), (A.T = null));
            var r = R.p;
            R.p = 2;
            var l = ms;
            ms |= 4;
            try {
              Qu(t, e);
              var a = gd,
                i = lr(e.containerInfo),
                o = a.focusedElem,
                u = a.selectionRange;
              if (
                i !== o &&
                o &&
                o.ownerDocument &&
                rr(o.ownerDocument.documentElement, o)
              ) {
                if (null !== u && ar(o)) {
                  var s = u.start,
                    c = u.end;
                  if ((void 0 === c && (c = s), "selectionStart" in o))
                    ((o.selectionStart = s),
                      (o.selectionEnd = Math.min(c, o.value.length)));
                  else {
                    var d = o.ownerDocument || document,
                      f = (d && d.defaultView) || window;
                    if (f.getSelection) {
                      var p = f.getSelection(),
                        m = o.textContent.length,
                        h = Math.min(u.start, m),
                        g = void 0 === u.end ? h : Math.min(u.end, m);
                      !p.extend && h > g && ((i = g), (g = h), (h = i));
                      var v = nr(o, h),
                        y = nr(o, g);
                      if (
                        v &&
                        y &&
                        (1 !== p.rangeCount ||
                          p.anchorNode !== v.node ||
                          p.anchorOffset !== v.offset ||
                          p.focusNode !== y.node ||
                          p.focusOffset !== y.offset)
                      ) {
                        var b = d.createRange();
                        (b.setStart(v.node, v.offset),
                          p.removeAllRanges(),
                          h > g
                            ? (p.addRange(b), p.extend(y.node, y.offset))
                            : (b.setEnd(y.node, y.offset), p.addRange(b)));
                      }
                    }
                  }
                }
                for (d = [], p = o; (p = p.parentNode); )
                  1 === p.nodeType &&
                    d.push({
                      element: p,
                      left: p.scrollLeft,
                      top: p.scrollTop,
                    });
                for (
                  "function" == typeof o.focus && o.focus(), o = 0;
                  o < d.length;
                  o++
                ) {
                  var k = d[o];
                  ((k.element.scrollLeft = k.left),
                    (k.element.scrollTop = k.top));
                }
              }
              ((xf = !!hd), (gd = hd = null));
            } finally {
              ((ms = l), (R.p = r), (A.T = n));
            }
          }
          ((e.current = t), (Ds = 2));
        }
      }
      function yc() {
        if (2 === Ds) {
          Ds = 0;
          var e = Is,
            t = $s,
            n = !!(8772 & t.flags);
          if (8772 & t.subtreeFlags || n) {
            ((n = A.T), (A.T = null));
            var r = R.p;
            R.p = 2;
            var l = ms;
            ms |= 4;
            try {
              Au(e, t.alternate, t);
            } finally {
              ((ms = l), (R.p = r), (A.T = n));
            }
          }
          Ds = 3;
        }
      }
      function bc() {
        if (4 === Ds || 3 === Ds) {
          ((Ds = 0), ue());
          var e = Is,
            t = $s,
            n = Us,
            r = Vs;
          10256 & t.subtreeFlags || 10256 & t.flags
            ? (Ds = 5)
            : ((Ds = 0), ($s = Is = null), kc(e, e.pendingLanes));
          var l = e.pendingLanes;
          if (
            (0 === l && (Fs = null),
            De(n),
            (t = t.stateNode),
            be && "function" == typeof be.onCommitFiberRoot)
          )
            try {
              be.onCommitFiberRoot(ye, t, void 0, !(128 & ~t.current.flags));
            } catch {}
          if (null !== r) {
            ((t = A.T), (l = R.p), (R.p = 2), (A.T = null));
            try {
              for (var a = e.onRecoverableError, i = 0; i < r.length; i++) {
                var o = r[i];
                a(o.value, { componentStack: o.stack });
              }
            } finally {
              ((A.T = t), (R.p = l));
            }
          }
          (!!(3 & Us) && xc(),
            Dc(e),
            (l = e.pendingLanes),
            261930 & n && 42 & l
              ? e === Qs
                ? Ws++
                : ((Ws = 0), (Qs = e))
              : (Ws = 0),
            Ic(0, !1));
        }
      }
      function kc(e, t) {
        0 === (e.pooledCacheLanes &= t) &&
          null != (t = e.pooledCache) &&
          ((e.pooledCache = null), Ul(t));
      }
      function xc() {
        return (vc(), yc(), bc(), wc());
      }
      function wc() {
        if (5 !== Ds) return !1;
        var e = Is,
          t = Hs;
        Hs = 0;
        var n = De(Us),
          r = A.T,
          a = R.p;
        try {
          ((R.p = 32 > n ? 32 : n), (A.T = null), (n = Bs), (Bs = null));
          var i = Is,
            o = Us;
          if (((Ds = 0), ($s = Is = null), (Us = 0), 6 & ms))
            throw Error(l(331));
          var u = ms;
          if (
            ((ms |= 4),
            ss(i.current),
            ts(i, i.current, o, n),
            (ms = u),
            Ic(0, !1),
            be && "function" == typeof be.onPostCommitFiberRoot)
          )
            try {
              be.onPostCommitFiberRoot(ye, i);
            } catch {}
          return !0;
        } finally {
          ((R.p = a), (A.T = r), kc(e, t));
        }
      }
      function Sc(e, t, n) {
        ((t = Yr(n, t)),
          null !== (e = ka(e, (t = _o(e.stateNode, t, 2)), 2)) &&
            (Oe(e, 2), Dc(e)));
      }
      function Nc(e, t, n) {
        if (3 === e.tag) Sc(e, e, n);
        else
          for (; null !== t; ) {
            if (3 === t.tag) {
              Sc(t, e, n);
              break;
            }
            if (1 === t.tag) {
              var r = t.stateNode;
              if (
                "function" == typeof t.type.getDerivedStateFromError ||
                ("function" == typeof r.componentDidCatch &&
                  (null === Fs || !Fs.has(r)))
              ) {
                ((e = Yr(n, e)),
                  null !== (r = ka(t, (n = To(2)), 2)) &&
                    (Lo(n, r, t, e), Oe(r, 2), Dc(r)));
                break;
              }
            }
            t = t.return;
          }
      }
      function Ec(e, t, n) {
        var r = e.pingCache;
        if (null === r) {
          r = e.pingCache = new ps();
          var l = new Set();
          r.set(t, l);
        } else void 0 === (l = r.get(t)) && ((l = new Set()), r.set(t, l));
        l.has(n) ||
          ((ws = !0), l.add(n), (e = Cc.bind(null, e, t, n)), t.then(e, e));
      }
      function Cc(e, t, n) {
        var r = e.pingCache;
        (null !== r && r.delete(t),
          (e.pingedLanes |= e.suspendedLanes & n),
          (e.warmLanes &= ~n),
          hs === e &&
            (vs & n) === n &&
            (4 === Ns || (3 === Ns && (62914560 & vs) === vs && 300 > se() - Os)
              ? !(2 & ms) && nc(e, 0)
              : (js |= n),
            zs === vs && (zs = 0)),
          Dc(e));
      }
      function jc(e, t) {
        (0 === t && (t = Te()), null !== (e = Mr(e, t)) && (Oe(e, t), Dc(e)));
      }
      function Pc(e) {
        var t = e.memoizedState,
          n = 0;
        (null !== t && (n = t.retryLane), jc(e, n));
      }
      function zc(e, t) {
        var n = 0;
        switch (e.tag) {
          case 31:
          case 13:
            var r = e.stateNode,
              a = e.memoizedState;
            null !== a && (n = a.retryLane);
            break;
          case 19:
            r = e.stateNode;
            break;
          case 22:
            r = e.stateNode._retryCache;
            break;
          default:
            throw Error(l(314));
        }
        (null !== r && r.delete(t), jc(e, n));
      }
      var _c,
        Tc,
        Lc = null,
        Oc = null,
        Mc = !1,
        Ac = !1,
        Rc = !1,
        Fc = 0;
      function Dc(e) {
        (e !== Oc &&
          null === e.next &&
          (null === Oc ? (Lc = Oc = e) : (Oc = Oc.next = e)),
          (Ac = !0),
          Mc ||
            ((Mc = !0),
            Ed(function () {
              6 & ms ? ae(de, $c) : Uc();
            })));
      }
      function Ic(e, t) {
        if (!Rc && Ac) {
          Rc = !0;
          do {
            for (var n = !1, r = Lc; null !== r; ) {
              if (!t)
                if (0 !== e) {
                  var l = r.pendingLanes;
                  if (0 === l) var a = 0;
                  else {
                    var i = r.suspendedLanes,
                      o = r.pingedLanes;
                    ((a = (1 << (31 - xe(42 | e) + 1)) - 1),
                      (a =
                        201326741 & (a &= l & ~(i & ~o))
                          ? (201326741 & a) | 1
                          : a
                            ? 2 | a
                            : 0));
                  }
                  0 !== a && ((n = !0), Vc(r, a));
                } else
                  ((a = vs),
                    !(
                      3 &
                      (a = Pe(
                        r,
                        r === hs ? a : 0,
                        null !== r.cancelPendingCommit ||
                          -1 !== r.timeoutHandle,
                      ))
                    ) ||
                      ze(r, a) ||
                      ((n = !0), Vc(r, a)));
              r = r.next;
            }
          } while (n);
          Rc = !1;
        }
      }
      function $c() {
        Uc();
      }
      function Uc() {
        Ac = Mc = !1;
        var e = 0;
        0 !== Fc &&
          (function () {
            var e = window.event;
            return e && "popstate" === e.type
              ? e !== xd && ((xd = e), !0)
              : ((xd = null), !1);
          })() &&
          (e = Fc);
        for (var t = se(), n = null, r = Lc; null !== r; ) {
          var l = r.next,
            a = Hc(r, t);
          (0 === a
            ? ((r.next = null),
              null === n ? (Lc = l) : (n.next = l),
              null === l && (Oc = n))
            : ((n = r), (0 !== e || !!(3 & a)) && (Ac = !0)),
            (r = l));
        }
        ((0 !== Ds && 5 !== Ds) || Ic(e, !1), 0 !== Fc && (Fc = 0));
      }
      function Hc(e, t) {
        for (
          var n = e.suspendedLanes,
            r = e.pingedLanes,
            l = e.expirationTimes,
            a = -62914561 & e.pendingLanes;
          0 < a;

        ) {
          var i = 31 - xe(a),
            o = 1 << i,
            u = l[i];
          (-1 === u
            ? (0 === (o & n) || 0 !== (o & r)) && (l[i] = _e(o, t))
            : u <= t && (e.expiredLanes |= o),
            (a &= ~o));
        }
        if (
          ((n = vs),
          (n = Pe(
            e,
            e === (t = hs) ? n : 0,
            null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
          )),
          (r = e.callbackNode),
          0 === n ||
            (e === t && (2 === ys || 9 === ys)) ||
            null !== e.cancelPendingCommit)
        )
          return (
            null !== r && null !== r && ie(r),
            (e.callbackNode = null),
            (e.callbackPriority = 0)
          );
        if (!(3 & n) || ze(e, n)) {
          if ((t = n & -n) === e.callbackPriority) return t;
          switch ((null !== r && ie(r), De(n))) {
            case 2:
            case 8:
              n = fe;
              break;
            case 32:
            default:
              n = pe;
              break;
            case 268435456:
              n = he;
          }
          return (
            (r = Bc.bind(null, e)),
            (n = ae(n, r)),
            (e.callbackPriority = t),
            (e.callbackNode = n),
            t
          );
        }
        return (
          null !== r && null !== r && ie(r),
          (e.callbackPriority = 2),
          (e.callbackNode = null),
          2
        );
      }
      function Bc(e, t) {
        if (0 !== Ds && 5 !== Ds)
          return ((e.callbackNode = null), (e.callbackPriority = 0), null);
        var n = e.callbackNode;
        if (xc() && e.callbackNode !== n) return null;
        var r = vs;
        return 0 ===
          (r = Pe(
            e,
            e === hs ? r : 0,
            null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
          ))
          ? null
          : (Xs(e, r, t),
            Hc(e, se()),
            null != e.callbackNode && e.callbackNode === n
              ? Bc.bind(null, e)
              : null);
      }
      function Vc(e, t) {
        if (xc()) return null;
        Xs(e, t, !0);
      }
      function Wc() {
        if (0 === Fc) {
          var e = Vl;
          (0 === e && ((e = Ne), !(261888 & (Ne <<= 1)) && (Ne = 256)),
            (Fc = e));
        }
        return Fc;
      }
      function Qc(e) {
        return null == e || "symbol" == typeof e || "boolean" == typeof e
          ? null
          : "function" == typeof e
            ? e
            : Lt("" + e);
      }
      function qc(e, t) {
        var n = t.ownerDocument.createElement("input");
        return (
          (n.name = t.name),
          (n.value = t.value),
          e.id && n.setAttribute("form", e.id),
          t.parentNode.insertBefore(n, t),
          (e = new FormData(e)),
          n.parentNode.removeChild(n),
          e
        );
      }
      for (Tc = 0; Tc < Er.length; Tc++)
        Cr(
          (_c = Er[Tc]).toLowerCase(),
          "on" + (_c[0].toUpperCase() + _c.slice(1)),
        );
      (Cr(vr, "onAnimationEnd"),
        Cr(yr, "onAnimationIteration"),
        Cr(br, "onAnimationStart"),
        Cr("dblclick", "onDoubleClick"),
        Cr("focusin", "onFocus"),
        Cr("focusout", "onBlur"),
        Cr(kr, "onTransitionRun"),
        Cr(xr, "onTransitionStart"),
        Cr(wr, "onTransitionCancel"),
        Cr(Sr, "onTransitionEnd"),
        at("onMouseEnter", ["mouseout", "mouseover"]),
        at("onMouseLeave", ["mouseout", "mouseover"]),
        at("onPointerEnter", ["pointerout", "pointerover"]),
        at("onPointerLeave", ["pointerout", "pointerover"]),
        lt(
          "onChange",
          "change click focusin focusout input keydown keyup selectionchange".split(
            " ",
          ),
        ),
        lt(
          "onSelect",
          "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
            " ",
          ),
        ),
        lt("onBeforeInput", [
          "compositionend",
          "keypress",
          "textInput",
          "paste",
        ]),
        lt(
          "onCompositionEnd",
          "compositionend focusout keydown keypress keyup mousedown".split(" "),
        ),
        lt(
          "onCompositionStart",
          "compositionstart focusout keydown keypress keyup mousedown".split(
            " ",
          ),
        ),
        lt(
          "onCompositionUpdate",
          "compositionupdate focusout keydown keypress keyup mousedown".split(
            " ",
          ),
        ));
      var Kc =
          "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " ",
          ),
        Yc = new Set(
          "beforetoggle cancel close invalid load scroll scrollend toggle"
            .split(" ")
            .concat(Kc),
        );
      function Xc(e, t) {
        t = !!(4 & t);
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            l = r.event;
          r = r.listeners;
          e: {
            var a = void 0;
            if (t)
              for (var i = r.length - 1; 0 <= i; i--) {
                var o = r[i],
                  u = o.instance,
                  s = o.currentTarget;
                if (((o = o.listener), u !== a && l.isPropagationStopped()))
                  break e;
                ((a = o), (l.currentTarget = s));
                try {
                  a(l);
                } catch (e) {
                  jr(e);
                }
                ((l.currentTarget = null), (a = u));
              }
            else
              for (i = 0; i < r.length; i++) {
                if (
                  ((u = (o = r[i]).instance),
                  (s = o.currentTarget),
                  (o = o.listener),
                  u !== a && l.isPropagationStopped())
                )
                  break e;
                ((a = o), (l.currentTarget = s));
                try {
                  a(l);
                } catch (e) {
                  jr(e);
                }
                ((l.currentTarget = null), (a = u));
              }
          }
        }
      }
      function Gc(e, t) {
        var n = t[We];
        void 0 === n && (n = t[We] = new Set());
        var r = e + "__bubble";
        n.has(r) || (td(t, e, 2, !1), n.add(r));
      }
      function Zc(e, t, n) {
        var r = 0;
        (t && (r |= 4), td(n, e, r, t));
      }
      var Jc = "_reactListening" + Math.random().toString(36).slice(2);
      function ed(e) {
        if (!e[Jc]) {
          ((e[Jc] = !0),
            nt.forEach(function (t) {
              "selectionchange" !== t &&
                (Yc.has(t) || Zc(t, !1, e), Zc(t, !0, e));
            }));
          var t = 9 === e.nodeType ? e : e.ownerDocument;
          null === t || t[Jc] || ((t[Jc] = !0), Zc("selectionchange", !1, t));
        }
      }
      function td(e, t, n, r) {
        switch (Pf(t)) {
          case 2:
            var l = wf;
            break;
          case 8:
            l = Sf;
            break;
          default:
            l = Nf;
        }
        ((n = l.bind(null, t, n, e)),
          (l = void 0),
          !Bt ||
            ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
            (l = !0),
          r
            ? void 0 !== l
              ? e.addEventListener(t, n, { capture: !0, passive: l })
              : e.addEventListener(t, n, !0)
            : void 0 !== l
              ? e.addEventListener(t, n, { passive: l })
              : e.addEventListener(t, n, !1));
      }
      function nd(e, t, n, r, l) {
        var a = r;
        if (!(1 & t || 2 & t || null === r))
          e: for (;;) {
            if (null === r) return;
            var o = r.tag;
            if (3 === o || 4 === o) {
              var u = r.stateNode.containerInfo;
              if (u === l) break;
              if (4 === o)
                for (o = r.return; null !== o; ) {
                  var s = o.tag;
                  if ((3 === s || 4 === s) && o.stateNode.containerInfo === l)
                    return;
                  o = o.return;
                }
              for (; null !== u; ) {
                if (null === (o = Ge(u))) return;
                if (5 === (s = o.tag) || 6 === s || 26 === s || 27 === s) {
                  r = a = o;
                  continue e;
                }
                u = u.parentNode;
              }
            }
            r = r.return;
          }
        $t(function () {
          var r = a,
            l = At(n),
            o = [];
          e: {
            var u = Nr.get(e);
            if (void 0 !== u) {
              var s = rn,
                c = e;
              switch (e) {
                case "keypress":
                  if (0 === Yt(n)) break e;
                case "keydown":
                case "keyup":
                  s = bn;
                  break;
                case "focusin":
                  ((c = "focus"), (s = cn));
                  break;
                case "focusout":
                  ((c = "blur"), (s = cn));
                  break;
                case "beforeblur":
                case "afterblur":
                  s = cn;
                  break;
                case "click":
                  if (2 === n.button) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  s = un;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  s = sn;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  s = xn;
                  break;
                case vr:
                case yr:
                case br:
                  s = dn;
                  break;
                case Sr:
                  s = wn;
                  break;
                case "scroll":
                case "scrollend":
                  s = an;
                  break;
                case "wheel":
                  s = Sn;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  s = fn;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  s = kn;
                  break;
                case "toggle":
                case "beforetoggle":
                  s = Nn;
              }
              var d = !!(4 & t),
                f = !d && ("scroll" === e || "scrollend" === e),
                p = d ? (null !== u ? u + "Capture" : null) : u;
              d = [];
              for (var m, h = r; null !== h; ) {
                var g = h;
                if (
                  ((m = g.stateNode),
                  (5 !== (g = g.tag) && 26 !== g && 27 !== g) ||
                    null === m ||
                    null === p ||
                    (null != (g = Ut(h, p)) && d.push(rd(h, g, m))),
                  f)
                )
                  break;
                h = h.return;
              }
              0 < d.length &&
                ((u = new s(u, c, null, n, l)),
                o.push({ event: u, listeners: d }));
            }
          }
          if (!(7 & t)) {
            if (
              ((s = "mouseout" === e || "pointerout" === e),
              (!(u = "mouseover" === e || "pointerover" === e) ||
                n === Mt ||
                !(c = n.relatedTarget || n.fromElement) ||
                (!Ge(c) && !c[Ve])) &&
                (s || u) &&
                ((u =
                  l.window === l
                    ? l
                    : (u = l.ownerDocument)
                      ? u.defaultView || u.parentWindow
                      : window),
                s
                  ? ((s = r),
                    null !==
                      (c = (c = n.relatedTarget || n.toElement)
                        ? Ge(c)
                        : null) &&
                      ((f = i(c)),
                      (d = c.tag),
                      c !== f || (5 !== d && 27 !== d && 6 !== d)) &&
                      (c = null))
                  : ((s = null), (c = r)),
                s !== c))
            ) {
              if (
                ((d = un),
                (g = "onMouseLeave"),
                (p = "onMouseEnter"),
                (h = "mouse"),
                ("pointerout" === e || "pointerover" === e) &&
                  ((d = kn),
                  (g = "onPointerLeave"),
                  (p = "onPointerEnter"),
                  (h = "pointer")),
                (f = null == s ? u : Je(s)),
                (m = null == c ? u : Je(c)),
                ((u = new d(g, h + "leave", s, n, l)).target = f),
                (u.relatedTarget = m),
                (g = null),
                Ge(l) === r &&
                  (((d = new d(p, h + "enter", c, n, l)).target = m),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                s && c)
              )
                e: {
                  for (d = ad, h = c, m = 0, g = p = s; g; g = d(g)) m++;
                  g = 0;
                  for (var v = h; v; v = d(v)) g++;
                  for (; 0 < m - g; ) ((p = d(p)), m--);
                  for (; 0 < g - m; ) ((h = d(h)), g--);
                  for (; m--; ) {
                    if (p === h || (null !== h && p === h.alternate)) {
                      d = p;
                      break e;
                    }
                    ((p = d(p)), (h = d(h)));
                  }
                  d = null;
                }
              else d = null;
              (null !== s && id(o, u, s, d, !1),
                null !== c && null !== f && id(o, f, c, d, !0));
            }
            if (
              "select" ===
                (s =
                  (u = r ? Je(r) : window).nodeName &&
                  u.nodeName.toLowerCase()) ||
              ("input" === s && "file" === u.type)
            )
              var y = Hn;
            else if (Rn(u))
              if (Qn) y = Zn;
              else {
                y = Xn;
                var b = Yn;
              }
            else
              !(s = u.nodeName) ||
              "input" !== s.toLowerCase() ||
              ("checkbox" !== u.type && "radio" !== u.type)
                ? r && zt(r.elementType) && (y = Hn)
                : (y = Gn);
            switch (
              (y && (y = y(e, r))
                ? Fn(o, y, n, l)
                : (b && b(e, u, r),
                  "focusout" === e &&
                    r &&
                    "number" === u.type &&
                    null != r.memoizedProps.value &&
                    xt(u, "number", u.value)),
              (b = r ? Je(r) : window),
              e)
            ) {
              case "focusin":
                (Rn(b) || "true" === b.contentEditable) &&
                  ((or = b), (ur = r), (sr = null));
                break;
              case "focusout":
                sr = ur = or = null;
                break;
              case "mousedown":
                cr = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                ((cr = !1), dr(o, n, l));
                break;
              case "selectionchange":
                if (ir) break;
              case "keydown":
              case "keyup":
                dr(o, n, l);
            }
            var k;
            if (Cn)
              e: {
                switch (e) {
                  case "compositionstart":
                    var x = "onCompositionStart";
                    break e;
                  case "compositionend":
                    x = "onCompositionEnd";
                    break e;
                  case "compositionupdate":
                    x = "onCompositionUpdate";
                    break e;
                }
                x = void 0;
              }
            else
              Mn
                ? Ln(e, n) && (x = "onCompositionEnd")
                : "keydown" === e &&
                  229 === n.keyCode &&
                  (x = "onCompositionStart");
            (x &&
              (zn &&
                "ko" !== n.locale &&
                (Mn || "onCompositionStart" !== x
                  ? "onCompositionEnd" === x && Mn && (k = Kt())
                  : ((Qt = "value" in (Wt = l) ? Wt.value : Wt.textContent),
                    (Mn = !0))),
              0 < (b = ld(r, x)).length &&
                ((x = new pn(x, e, null, n, l)),
                o.push({ event: x, listeners: b }),
                k ? (x.data = k) : null !== (k = On(n)) && (x.data = k))),
              (k = Pn
                ? (function (e, t) {
                    switch (e) {
                      case "compositionend":
                        return On(t);
                      case "keypress":
                        return 32 !== t.which ? null : ((Tn = !0), _n);
                      case "textInput":
                        return (e = t.data) === _n && Tn ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if (Mn)
                      return "compositionend" === e || (!Cn && Ln(e, t))
                        ? ((e = Kt()), (qt = Qt = Wt = null), (Mn = !1), e)
                        : null;
                    switch (e) {
                      case "paste":
                      default:
                        return null;
                      case "keypress":
                        if (
                          !(t.ctrlKey || t.altKey || t.metaKey) ||
                          (t.ctrlKey && t.altKey)
                        ) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case "compositionend":
                        return zn && "ko" !== t.locale ? null : t.data;
                    }
                  })(e, n)) &&
                0 < (x = ld(r, "onBeforeInput")).length &&
                ((b = new pn("onBeforeInput", "beforeinput", null, n, l)),
                o.push({ event: b, listeners: x }),
                (b.data = k)),
              (function (e, t, n, r, l) {
                if ("submit" === t && n && n.stateNode === l) {
                  var a = Qc((l[Be] || null).action),
                    i = r.submitter;
                  i &&
                    null !==
                      (t = (t = i[Be] || null)
                        ? Qc(t.formAction)
                        : i.getAttribute("formAction")) &&
                    ((a = t), (i = null));
                  var o = new rn("action", "action", null, r, l);
                  e.push({
                    event: o,
                    listeners: [
                      {
                        instance: null,
                        listener: function () {
                          if (r.defaultPrevented) {
                            if (0 !== Fc) {
                              var e = i ? qc(l, i) : new FormData(l);
                              to(
                                n,
                                {
                                  pending: !0,
                                  data: e,
                                  method: l.method,
                                  action: a,
                                },
                                null,
                                e,
                              );
                            }
                          } else
                            "function" == typeof a &&
                              (o.preventDefault(),
                              (e = i ? qc(l, i) : new FormData(l)),
                              to(
                                n,
                                {
                                  pending: !0,
                                  data: e,
                                  method: l.method,
                                  action: a,
                                },
                                a,
                                e,
                              ));
                        },
                        currentTarget: l,
                      },
                    ],
                  });
                }
              })(o, e, r, n, l));
          }
          Xc(o, t);
        });
      }
      function rd(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function ld(e, t) {
        for (var n = t + "Capture", r = []; null !== e; ) {
          var l = e,
            a = l.stateNode;
          if (
            ((5 !== (l = l.tag) && 26 !== l && 27 !== l) ||
              null === a ||
              (null != (l = Ut(e, n)) && r.unshift(rd(e, l, a)),
              null != (l = Ut(e, t)) && r.push(rd(e, l, a))),
            3 === e.tag)
          )
            return r;
          e = e.return;
        }
        return [];
      }
      function ad(e) {
        if (null === e) return null;
        do {
          e = e.return;
        } while (e && 5 !== e.tag && 27 !== e.tag);
        return e || null;
      }
      function id(e, t, n, r, l) {
        for (var a = t._reactName, i = []; null !== n && n !== r; ) {
          var o = n,
            u = o.alternate,
            s = o.stateNode;
          if (((o = o.tag), null !== u && u === r)) break;
          ((5 !== o && 26 !== o && 27 !== o) ||
            null === s ||
            ((u = s),
            l
              ? null != (s = Ut(n, a)) && i.unshift(rd(n, s, u))
              : l || (null != (s = Ut(n, a)) && i.push(rd(n, s, u)))),
            (n = n.return));
        }
        0 !== i.length && e.push({ event: t, listeners: i });
      }
      var od = /\r\n?/g,
        ud = /\u0000|\uFFFD/g;
      function sd(e) {
        return ("string" == typeof e ? e : "" + e)
          .replace(od, "\n")
          .replace(ud, "");
      }
      function cd(e, t) {
        return ((t = sd(t)), sd(e) === t);
      }
      function dd(e, t, n, r, a, i) {
        switch (n) {
          case "children":
            "string" == typeof r
              ? "body" === t || ("textarea" === t && "" === r) || Et(e, r)
              : ("number" == typeof r || "bigint" == typeof r) &&
                "body" !== t &&
                Et(e, "" + r);
            break;
          case "className":
            ct(e, "class", r);
            break;
          case "tabIndex":
            ct(e, "tabindex", r);
            break;
          case "dir":
          case "role":
          case "viewBox":
          case "width":
          case "height":
            ct(e, n, r);
            break;
          case "style":
            Pt(e, r, i);
            break;
          case "data":
            if ("object" !== t) {
              ct(e, "data", r);
              break;
            }
          case "src":
          case "href":
            if ("" === r && ("a" !== t || "href" !== n)) {
              e.removeAttribute(n);
              break;
            }
            if (
              null == r ||
              "function" == typeof r ||
              "symbol" == typeof r ||
              "boolean" == typeof r
            ) {
              e.removeAttribute(n);
              break;
            }
            ((r = Lt("" + r)), e.setAttribute(n, r));
            break;
          case "action":
          case "formAction":
            if ("function" == typeof r) {
              e.setAttribute(
                n,
                "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
              );
              break;
            }
            if (
              ("function" == typeof i &&
                ("formAction" === n
                  ? ("input" !== t && dd(e, t, "name", a.name, a, null),
                    dd(e, t, "formEncType", a.formEncType, a, null),
                    dd(e, t, "formMethod", a.formMethod, a, null),
                    dd(e, t, "formTarget", a.formTarget, a, null))
                  : (dd(e, t, "encType", a.encType, a, null),
                    dd(e, t, "method", a.method, a, null),
                    dd(e, t, "target", a.target, a, null))),
              null == r || "symbol" == typeof r || "boolean" == typeof r)
            ) {
              e.removeAttribute(n);
              break;
            }
            ((r = Lt("" + r)), e.setAttribute(n, r));
            break;
          case "onClick":
            null != r && (e.onclick = Ot);
            break;
          case "onScroll":
            null != r && Gc("scroll", e);
            break;
          case "onScrollEnd":
            null != r && Gc("scrollend", e);
            break;
          case "dangerouslySetInnerHTML":
            if (null != r) {
              if ("object" != typeof r || !("__html" in r)) throw Error(l(61));
              if (null != (n = r.__html)) {
                if (null != a.children) throw Error(l(60));
                e.innerHTML = n;
              }
            }
            break;
          case "multiple":
            e.multiple = r && "function" != typeof r && "symbol" != typeof r;
            break;
          case "muted":
            e.muted = r && "function" != typeof r && "symbol" != typeof r;
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "ref":
          case "autoFocus":
            break;
          case "xlinkHref":
            if (
              null == r ||
              "function" == typeof r ||
              "boolean" == typeof r ||
              "symbol" == typeof r
            ) {
              e.removeAttribute("xlink:href");
              break;
            }
            ((n = Lt("" + r)),
              e.setAttributeNS(
                "http://www.w3.org/1999/xlink",
                "xlink:href",
                n,
              ));
            break;
          case "contentEditable":
          case "spellCheck":
          case "draggable":
          case "value":
          case "autoReverse":
          case "externalResourcesRequired":
          case "focusable":
          case "preserveAlpha":
            null != r && "function" != typeof r && "symbol" != typeof r
              ? e.setAttribute(n, "" + r)
              : e.removeAttribute(n);
            break;
          case "inert":
          case "allowFullScreen":
          case "async":
          case "autoPlay":
          case "controls":
          case "default":
          case "defer":
          case "disabled":
          case "disablePictureInPicture":
          case "disableRemotePlayback":
          case "formNoValidate":
          case "hidden":
          case "loop":
          case "noModule":
          case "noValidate":
          case "open":
          case "playsInline":
          case "readOnly":
          case "required":
          case "reversed":
          case "scoped":
          case "seamless":
          case "itemScope":
            r && "function" != typeof r && "symbol" != typeof r
              ? e.setAttribute(n, "")
              : e.removeAttribute(n);
            break;
          case "capture":
          case "download":
            !0 === r
              ? e.setAttribute(n, "")
              : !1 !== r &&
                  null != r &&
                  "function" != typeof r &&
                  "symbol" != typeof r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
            break;
          case "cols":
          case "rows":
          case "size":
          case "span":
            null != r &&
            "function" != typeof r &&
            "symbol" != typeof r &&
            !isNaN(r) &&
            1 <= r
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
            break;
          case "rowSpan":
          case "start":
            null == r ||
            "function" == typeof r ||
            "symbol" == typeof r ||
            isNaN(r)
              ? e.removeAttribute(n)
              : e.setAttribute(n, r);
            break;
          case "popover":
            (Gc("beforetoggle", e), Gc("toggle", e), st(e, "popover", r));
            break;
          case "xlinkActuate":
            dt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
            break;
          case "xlinkArcrole":
            dt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
            break;
          case "xlinkRole":
            dt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
            break;
          case "xlinkShow":
            dt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
            break;
          case "xlinkTitle":
            dt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
            break;
          case "xlinkType":
            dt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
            break;
          case "xmlBase":
            dt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
            break;
          case "xmlLang":
            dt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
            break;
          case "xmlSpace":
            dt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
            break;
          case "is":
            st(e, "is", r);
            break;
          case "innerText":
          case "textContent":
            break;
          default:
            (!(2 < n.length) ||
              ("o" !== n[0] && "O" !== n[0]) ||
              ("n" !== n[1] && "N" !== n[1])) &&
              st(e, (n = _t.get(n) || n), r);
        }
      }
      function fd(e, t, n, r, a, i) {
        switch (n) {
          case "style":
            Pt(e, r, i);
            break;
          case "dangerouslySetInnerHTML":
            if (null != r) {
              if ("object" != typeof r || !("__html" in r)) throw Error(l(61));
              if (null != (n = r.__html)) {
                if (null != a.children) throw Error(l(60));
                e.innerHTML = n;
              }
            }
            break;
          case "children":
            "string" == typeof r
              ? Et(e, r)
              : ("number" == typeof r || "bigint" == typeof r) && Et(e, "" + r);
            break;
          case "onScroll":
            null != r && Gc("scroll", e);
            break;
          case "onScrollEnd":
            null != r && Gc("scrollend", e);
            break;
          case "onClick":
            null != r && (e.onclick = Ot);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
          case "innerHTML":
          case "ref":
          case "innerText":
          case "textContent":
            break;
          default:
            rt.hasOwnProperty(n) ||
              ("o" !== n[0] ||
              "n" !== n[1] ||
              ((a = n.endsWith("Capture")),
              (t = n.slice(2, a ? n.length - 7 : void 0)),
              "function" ==
                typeof (i = null != (i = e[Be] || null) ? i[n] : null) &&
                e.removeEventListener(t, i, a),
              "function" != typeof r)
                ? n in e
                  ? (e[n] = r)
                  : !0 === r
                    ? e.setAttribute(n, "")
                    : st(e, n, r)
                : ("function" != typeof i &&
                    null !== i &&
                    (n in e
                      ? (e[n] = null)
                      : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, a)));
        }
      }
      function pd(e, t, n) {
        switch (t) {
          case "div":
          case "span":
          case "svg":
          case "path":
          case "a":
          case "g":
          case "p":
          case "li":
            break;
          case "img":
            (Gc("error", e), Gc("load", e));
            var r,
              a = !1,
              i = !1;
            for (r in n)
              if (n.hasOwnProperty(r)) {
                var o = n[r];
                if (null != o)
                  switch (r) {
                    case "src":
                      a = !0;
                      break;
                    case "srcSet":
                      i = !0;
                      break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(l(137, t));
                    default:
                      dd(e, t, r, o, n, null);
                  }
              }
            return (
              i && dd(e, t, "srcSet", n.srcSet, n, null),
              void (a && dd(e, t, "src", n.src, n, null))
            );
          case "input":
            Gc("invalid", e);
            var u = (r = o = i = null),
              s = null,
              c = null;
            for (a in n)
              if (n.hasOwnProperty(a)) {
                var d = n[a];
                if (null != d)
                  switch (a) {
                    case "name":
                      i = d;
                      break;
                    case "type":
                      o = d;
                      break;
                    case "checked":
                      s = d;
                      break;
                    case "defaultChecked":
                      c = d;
                      break;
                    case "value":
                      r = d;
                      break;
                    case "defaultValue":
                      u = d;
                      break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (null != d) throw Error(l(137, t));
                      break;
                    default:
                      dd(e, t, a, d, n, null);
                  }
              }
            return void kt(e, r, u, s, c, o, i, !1);
          case "select":
            for (i in (Gc("invalid", e), (a = o = r = null), n))
              if (n.hasOwnProperty(i) && null != (u = n[i]))
                switch (i) {
                  case "value":
                    r = u;
                    break;
                  case "defaultValue":
                    o = u;
                    break;
                  case "multiple":
                    a = u;
                  default:
                    dd(e, t, i, u, n, null);
                }
            return (
              (t = r),
              (n = o),
              (e.multiple = !!a),
              void (null != t
                ? wt(e, !!a, t, !1)
                : null != n && wt(e, !!a, n, !0))
            );
          case "textarea":
            for (o in (Gc("invalid", e), (r = i = a = null), n))
              if (n.hasOwnProperty(o) && null != (u = n[o]))
                switch (o) {
                  case "value":
                    a = u;
                    break;
                  case "defaultValue":
                    i = u;
                    break;
                  case "children":
                    r = u;
                    break;
                  case "dangerouslySetInnerHTML":
                    if (null != u) throw Error(l(91));
                    break;
                  default:
                    dd(e, t, o, u, n, null);
                }
            return void Nt(e, a, i, r);
          case "option":
            for (s in n)
              n.hasOwnProperty(s) &&
                null != (a = n[s]) &&
                ("selected" === s
                  ? (e.selected =
                      a && "function" != typeof a && "symbol" != typeof a)
                  : dd(e, t, s, a, n, null));
            return;
          case "dialog":
            (Gc("beforetoggle", e),
              Gc("toggle", e),
              Gc("cancel", e),
              Gc("close", e));
            break;
          case "iframe":
          case "object":
            Gc("load", e);
            break;
          case "video":
          case "audio":
            for (a = 0; a < Kc.length; a++) Gc(Kc[a], e);
            break;
          case "image":
            (Gc("error", e), Gc("load", e));
            break;
          case "details":
            Gc("toggle", e);
            break;
          case "embed":
          case "source":
          case "link":
            (Gc("error", e), Gc("load", e));
          case "area":
          case "base":
          case "br":
          case "col":
          case "hr":
          case "keygen":
          case "meta":
          case "param":
          case "track":
          case "wbr":
          case "menuitem":
            for (c in n)
              if (n.hasOwnProperty(c) && null != (a = n[c]))
                switch (c) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(l(137, t));
                  default:
                    dd(e, t, c, a, n, null);
                }
            return;
          default:
            if (zt(t)) {
              for (d in n)
                n.hasOwnProperty(d) &&
                  void 0 !== (a = n[d]) &&
                  fd(e, t, d, a, n, void 0);
              return;
            }
        }
        for (u in n)
          n.hasOwnProperty(u) && null != (a = n[u]) && dd(e, t, u, a, n, null);
      }
      function md(e) {
        switch (e) {
          case "css":
          case "script":
          case "font":
          case "img":
          case "image":
          case "input":
          case "link":
            return !0;
          default:
            return !1;
        }
      }
      var hd = null,
        gd = null;
      function vd(e) {
        return 9 === e.nodeType ? e : e.ownerDocument;
      }
      function yd(e) {
        switch (e) {
          case "http://www.w3.org/2000/svg":
            return 1;
          case "http://www.w3.org/1998/Math/MathML":
            return 2;
          default:
            return 0;
        }
      }
      function bd(e, t) {
        if (0 === e)
          switch (t) {
            case "svg":
              return 1;
            case "math":
              return 2;
            default:
              return 0;
          }
        return 1 === e && "foreignObject" === t ? 0 : e;
      }
      function kd(e, t) {
        return (
          "textarea" === e ||
          "noscript" === e ||
          "string" == typeof t.children ||
          "number" == typeof t.children ||
          "bigint" == typeof t.children ||
          ("object" == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var xd = null;
      var wd = "function" == typeof setTimeout ? setTimeout : void 0,
        Sd = "function" == typeof clearTimeout ? clearTimeout : void 0,
        Nd = "function" == typeof Promise ? Promise : void 0,
        Ed =
          "function" == typeof queueMicrotask
            ? queueMicrotask
            : typeof Nd < "u"
              ? function (e) {
                  return Nd.resolve(null).then(e).catch(Cd);
                }
              : wd;
      function Cd(e) {
        setTimeout(function () {
          throw e;
        });
      }
      function jd(e) {
        return "head" === e;
      }
      function Pd(e, t) {
        var n = t,
          r = 0;
        do {
          var l = n.nextSibling;
          if ((e.removeChild(n), l && 8 === l.nodeType))
            if ("/$" === (n = l.data) || "/&" === n) {
              if (0 === r) return (e.removeChild(l), void Qf(t));
              r--;
            } else if (
              "$" === n ||
              "$?" === n ||
              "$~" === n ||
              "$!" === n ||
              "&" === n
            )
              r++;
            else if ("html" === n) Id(e.ownerDocument.documentElement);
            else if ("head" === n) {
              Id((n = e.ownerDocument.head));
              for (var a = n.firstChild; a; ) {
                var i = a.nextSibling,
                  o = a.nodeName;
                (a[Ye] ||
                  "SCRIPT" === o ||
                  "STYLE" === o ||
                  ("LINK" === o && "stylesheet" === a.rel.toLowerCase()) ||
                  n.removeChild(a),
                  (a = i));
              }
            } else "body" === n && Id(e.ownerDocument.body);
          n = l;
        } while (n);
        Qf(t);
      }
      function zd(e, t) {
        var n = e;
        e = 0;
        do {
          var r = n.nextSibling;
          if (
            (1 === n.nodeType
              ? t
                ? ((n._stashedDisplay = n.style.display),
                  (n.style.display = "none"))
                : ((n.style.display = n._stashedDisplay || ""),
                  "" === n.getAttribute("style") && n.removeAttribute("style"))
              : 3 === n.nodeType &&
                (t
                  ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
                  : (n.nodeValue = n._stashedText || "")),
            r && 8 === r.nodeType)
          )
            if ("/$" === (n = r.data)) {
              if (0 === e) break;
              e--;
            } else ("$" !== n && "$?" !== n && "$~" !== n && "$!" !== n) || e++;
          n = r;
        } while (n);
      }
      function _d(e) {
        var t = e.firstChild;
        for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
          var n = t;
          switch (((t = t.nextSibling), n.nodeName)) {
            case "HTML":
            case "HEAD":
            case "BODY":
              (_d(n), Xe(n));
              continue;
            case "SCRIPT":
            case "STYLE":
              continue;
            case "LINK":
              if ("stylesheet" === n.rel.toLowerCase()) continue;
          }
          e.removeChild(n);
        }
      }
      function Td(e, t) {
        for (; 8 !== e.nodeType; )
          if (
            ((1 !== e.nodeType ||
              "INPUT" !== e.nodeName ||
              "hidden" !== e.type) &&
              !t) ||
            null === (e = Md(e.nextSibling))
          )
            return null;
        return e;
      }
      function Ld(e) {
        return "$?" === e.data || "$~" === e.data;
      }
      function Od(e) {
        return (
          "$!" === e.data ||
          ("$?" === e.data && "loading" !== e.ownerDocument.readyState)
        );
      }
      function Md(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
          if (8 === t) {
            if (
              "$" === (t = e.data) ||
              "$!" === t ||
              "$?" === t ||
              "$~" === t ||
              "&" === t ||
              "F!" === t ||
              "F" === t
            )
              break;
            if ("/$" === t || "/&" === t) return null;
          }
        }
        return e;
      }
      var Ad = null;
      function Rd(e) {
        e = e.nextSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ("/$" === n || "/&" === n) {
              if (0 === t) return Md(e.nextSibling);
              t--;
            } else
              ("$" !== n &&
                "$!" !== n &&
                "$?" !== n &&
                "$~" !== n &&
                "&" !== n) ||
                t++;
          }
          e = e.nextSibling;
        }
        return null;
      }
      function Fd(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if (
              "$" === n ||
              "$!" === n ||
              "$?" === n ||
              "$~" === n ||
              "&" === n
            ) {
              if (0 === t) return e;
              t--;
            } else ("/$" !== n && "/&" !== n) || t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      function Dd(e, t, n) {
        switch (((t = vd(n)), e)) {
          case "html":
            if (!(e = t.documentElement)) throw Error(l(452));
            return e;
          case "head":
            if (!(e = t.head)) throw Error(l(453));
            return e;
          case "body":
            if (!(e = t.body)) throw Error(l(454));
            return e;
          default:
            throw Error(l(451));
        }
      }
      function Id(e) {
        for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
        Xe(e);
      }
      var $d = new Map(),
        Ud = new Set();
      function Hd(e) {
        return "function" == typeof e.getRootNode
          ? e.getRootNode()
          : 9 === e.nodeType
            ? e
            : e.ownerDocument;
      }
      var Bd = R.d;
      R.d = {
        f: function () {
          var e = Bd.f(),
            t = ec();
          return e || t;
        },
        r: function (e) {
          var t = Ze(e);
          null !== t && 5 === t.tag && "form" === t.type ? ro(t) : Bd.r(e);
        },
        D: function (e) {
          (Bd.D(e), Wd("dns-prefetch", e, null));
        },
        C: function (e, t) {
          (Bd.C(e, t), Wd("preconnect", e, t));
        },
        L: function (e, t, n) {
          Bd.L(e, t, n);
          var r = Vd;
          if (r && e && t) {
            var l = 'link[rel="preload"][as="' + yt(t) + '"]';
            "image" === t && n && n.imageSrcSet
              ? ((l += '[imagesrcset="' + yt(n.imageSrcSet) + '"]'),
                "string" == typeof n.imageSizes &&
                  (l += '[imagesizes="' + yt(n.imageSizes) + '"]'))
              : (l += '[href="' + yt(e) + '"]');
            var a = l;
            switch (t) {
              case "style":
                a = qd(e);
                break;
              case "script":
                a = Xd(e);
            }
            $d.has(a) ||
              ((e = m(
                {
                  rel: "preload",
                  href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                  as: t,
                },
                n,
              )),
              $d.set(a, e),
              null !== r.querySelector(l) ||
                ("style" === t && r.querySelector(Kd(a))) ||
                ("script" === t && r.querySelector(Gd(a))) ||
                (pd((t = r.createElement("link")), "link", e),
                tt(t),
                r.head.appendChild(t)));
          }
        },
        m: function (e, t) {
          Bd.m(e, t);
          var n = Vd;
          if (n && e) {
            var r = t && "string" == typeof t.as ? t.as : "script",
              l =
                'link[rel="modulepreload"][as="' +
                yt(r) +
                '"][href="' +
                yt(e) +
                '"]',
              a = l;
            switch (r) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                a = Xd(e);
            }
            if (
              !$d.has(a) &&
              ((e = m({ rel: "modulepreload", href: e }, t)),
              $d.set(a, e),
              null === n.querySelector(l))
            ) {
              switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  if (n.querySelector(Gd(a))) return;
              }
              (pd((r = n.createElement("link")), "link", e),
                tt(r),
                n.head.appendChild(r));
            }
          }
        },
        X: function (e, t) {
          Bd.X(e, t);
          var n = Vd;
          if (n && e) {
            var r = et(n).hoistableScripts,
              l = Xd(e),
              a = r.get(l);
            a ||
              ((a = n.querySelector(Gd(l))) ||
                ((e = m({ src: e, async: !0 }, t)),
                (t = $d.get(l)) && tf(e, t),
                tt((a = n.createElement("script"))),
                pd(a, "link", e),
                n.head.appendChild(a)),
              (a = { type: "script", instance: a, count: 1, state: null }),
              r.set(l, a));
          }
        },
        S: function (e, t, n) {
          Bd.S(e, t, n);
          var r = Vd;
          if (r && e) {
            var l = et(r).hoistableStyles,
              a = qd(e);
            t = t || "default";
            var i = l.get(a);
            if (!i) {
              var o = { loading: 0, preload: null };
              if ((i = r.querySelector(Kd(a)))) o.loading = 5;
              else {
                ((e = m(
                  { rel: "stylesheet", href: e, "data-precedence": t },
                  n,
                )),
                  (n = $d.get(a)) && ef(e, n));
                var u = (i = r.createElement("link"));
                (tt(u),
                  pd(u, "link", e),
                  (u._p = new Promise(function (e, t) {
                    ((u.onload = e), (u.onerror = t));
                  })),
                  u.addEventListener("load", function () {
                    o.loading |= 1;
                  }),
                  u.addEventListener("error", function () {
                    o.loading |= 2;
                  }),
                  (o.loading |= 4),
                  Jd(i, t, r));
              }
              ((i = { type: "stylesheet", instance: i, count: 1, state: o }),
                l.set(a, i));
            }
          }
        },
        M: function (e, t) {
          Bd.M(e, t);
          var n = Vd;
          if (n && e) {
            var r = et(n).hoistableScripts,
              l = Xd(e),
              a = r.get(l);
            a ||
              ((a = n.querySelector(Gd(l))) ||
                ((e = m({ src: e, async: !0, type: "module" }, t)),
                (t = $d.get(l)) && tf(e, t),
                tt((a = n.createElement("script"))),
                pd(a, "link", e),
                n.head.appendChild(a)),
              (a = { type: "script", instance: a, count: 1, state: null }),
              r.set(l, a));
          }
        },
      };
      var Vd = typeof document > "u" ? null : document;
      function Wd(e, t, n) {
        var r = Vd;
        if (r && "string" == typeof t && t) {
          var l = yt(t);
          ((l = 'link[rel="' + e + '"][href="' + l + '"]'),
            "string" == typeof n && (l += '[crossorigin="' + n + '"]'),
            Ud.has(l) ||
              (Ud.add(l),
              (e = { rel: e, crossOrigin: n, href: t }),
              null === r.querySelector(l) &&
                (pd((t = r.createElement("link")), "link", e),
                tt(t),
                r.head.appendChild(t))));
        }
      }
      function Qd(e, t, n, r) {
        var a = (a = q.current) ? Hd(a) : null;
        if (!a) throw Error(l(446));
        switch (e) {
          case "meta":
          case "title":
            return null;
          case "style":
            return "string" == typeof n.precedence && "string" == typeof n.href
              ? ((t = qd(n.href)),
                (r = (n = et(a).hoistableStyles).get(t)) ||
                  ((r = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, r)),
                r)
              : { type: "void", instance: null, count: 0, state: null };
          case "link":
            if (
              "stylesheet" === n.rel &&
              "string" == typeof n.href &&
              "string" == typeof n.precedence
            ) {
              e = qd(n.href);
              var i = et(a).hoistableStyles,
                o = i.get(e);
              if (
                (o ||
                  ((a = a.ownerDocument || a),
                  (o = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: { loading: 0, preload: null },
                  }),
                  i.set(e, o),
                  (i = a.querySelector(Kd(e))) &&
                    !i._p &&
                    ((o.instance = i), (o.state.loading = 5)),
                  $d.has(e) ||
                    ((n = {
                      rel: "preload",
                      as: "style",
                      href: n.href,
                      crossOrigin: n.crossOrigin,
                      integrity: n.integrity,
                      media: n.media,
                      hrefLang: n.hrefLang,
                      referrerPolicy: n.referrerPolicy,
                    }),
                    $d.set(e, n),
                    i ||
                      (function (e, t, n, r) {
                        e.querySelector(
                          'link[rel="preload"][as="style"][' + t + "]",
                        )
                          ? (r.loading = 1)
                          : ((t = e.createElement("link")),
                            (r.preload = t),
                            t.addEventListener("load", function () {
                              return (r.loading |= 1);
                            }),
                            t.addEventListener("error", function () {
                              return (r.loading |= 2);
                            }),
                            pd(t, "link", n),
                            tt(t),
                            e.head.appendChild(t));
                      })(a, e, n, o.state))),
                t && null === r)
              )
                throw Error(l(528, ""));
              return o;
            }
            if (t && null !== r) throw Error(l(529, ""));
            return null;
          case "script":
            return (
              (t = n.async),
              "string" == typeof (n = n.src) &&
              t &&
              "function" != typeof t &&
              "symbol" != typeof t
                ? ((t = Xd(n)),
                  (r = (n = et(a).hoistableScripts).get(t)) ||
                    ((r = {
                      type: "script",
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    n.set(t, r)),
                  r)
                : { type: "void", instance: null, count: 0, state: null }
            );
          default:
            throw Error(l(444, e));
        }
      }
      function qd(e) {
        return 'href="' + yt(e) + '"';
      }
      function Kd(e) {
        return 'link[rel="stylesheet"][' + e + "]";
      }
      function Yd(e) {
        return m({}, e, { "data-precedence": e.precedence, precedence: null });
      }
      function Xd(e) {
        return '[src="' + yt(e) + '"]';
      }
      function Gd(e) {
        return "script[async]" + e;
      }
      function Zd(e, t, n) {
        if ((t.count++, null === t.instance))
          switch (t.type) {
            case "style":
              var r = e.querySelector('style[data-href~="' + yt(n.href) + '"]');
              if (r) return ((t.instance = r), tt(r), r);
              var a = m({}, n, {
                "data-href": n.href,
                "data-precedence": n.precedence,
                href: null,
                precedence: null,
              });
              return (
                tt((r = (e.ownerDocument || e).createElement("style"))),
                pd(r, "style", a),
                Jd(r, n.precedence, e),
                (t.instance = r)
              );
            case "stylesheet":
              a = qd(n.href);
              var i = e.querySelector(Kd(a));
              if (i)
                return ((t.state.loading |= 4), (t.instance = i), tt(i), i);
              ((r = Yd(n)),
                (a = $d.get(a)) && ef(r, a),
                tt((i = (e.ownerDocument || e).createElement("link"))));
              var o = i;
              return (
                (o._p = new Promise(function (e, t) {
                  ((o.onload = e), (o.onerror = t));
                })),
                pd(i, "link", r),
                (t.state.loading |= 4),
                Jd(i, n.precedence, e),
                (t.instance = i)
              );
            case "script":
              return (
                (i = Xd(n.src)),
                (a = e.querySelector(Gd(i)))
                  ? ((t.instance = a), tt(a), a)
                  : ((r = n),
                    (a = $d.get(i)) && tf((r = m({}, n)), a),
                    tt(
                      (a = (e = e.ownerDocument || e).createElement("script")),
                    ),
                    pd(a, "link", r),
                    e.head.appendChild(a),
                    (t.instance = a))
              );
            case "void":
              return null;
            default:
              throw Error(l(443, t.type));
          }
        else
          "stylesheet" === t.type &&
            !(4 & t.state.loading) &&
            ((r = t.instance), (t.state.loading |= 4), Jd(r, n.precedence, e));
        return t.instance;
      }
      function Jd(e, t, n) {
        for (
          var r = n.querySelectorAll(
              'link[rel="stylesheet"][data-precedence],style[data-precedence]',
            ),
            l = r.length ? r[r.length - 1] : null,
            a = l,
            i = 0;
          i < r.length;
          i++
        ) {
          var o = r[i];
          if (o.dataset.precedence === t) a = o;
          else if (a !== l) break;
        }
        a
          ? a.parentNode.insertBefore(e, a.nextSibling)
          : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
      }
      function ef(e, t) {
        (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
          null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
          null == e.title && (e.title = t.title));
      }
      function tf(e, t) {
        (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
          null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
          null == e.integrity && (e.integrity = t.integrity));
      }
      var nf = null;
      function rf(e, t, n) {
        if (null === nf) {
          var r = new Map(),
            l = (nf = new Map());
          l.set(n, r);
        } else (r = (l = nf).get(n)) || ((r = new Map()), l.set(n, r));
        if (r.has(e)) return r;
        for (
          r.set(e, null), n = n.getElementsByTagName(e), l = 0;
          l < n.length;
          l++
        ) {
          var a = n[l];
          if (
            !(
              a[Ye] ||
              a[He] ||
              ("link" === e && "stylesheet" === a.getAttribute("rel"))
            ) &&
            "http://www.w3.org/2000/svg" !== a.namespaceURI
          ) {
            var i = a.getAttribute(t) || "";
            i = e + i;
            var o = r.get(i);
            o ? o.push(a) : r.set(i, [a]);
          }
        }
        return r;
      }
      function lf(e, t, n) {
        (e = e.ownerDocument || e).head.insertBefore(
          n,
          "title" === t ? e.querySelector("head > title") : null,
        );
      }
      function af(e) {
        return !("stylesheet" === e.type && !(3 & e.state.loading));
      }
      var of = 0;
      function uf() {
        if (
          (this.count--,
          0 === this.count && (0 === this.imgCount || !this.waitingForImages))
        )
          if (this.stylesheets) cf(this, this.stylesheets);
          else if (this.unsuspend) {
            var e = this.unsuspend;
            ((this.unsuspend = null), e());
          }
      }
      var sf = null;
      function cf(e, t) {
        ((e.stylesheets = null),
          null !== e.unsuspend &&
            (e.count++,
            (sf = new Map()),
            t.forEach(df, e),
            (sf = null),
            uf.call(e)));
      }
      function df(e, t) {
        if (!(4 & t.state.loading)) {
          var n = sf.get(e);
          if (n) var r = n.get(null);
          else {
            ((n = new Map()), sf.set(e, n));
            for (
              var l = e.querySelectorAll(
                  "link[data-precedence],style[data-precedence]",
                ),
                a = 0;
              a < l.length;
              a++
            ) {
              var i = l[a];
              ("LINK" === i.nodeName ||
                "not all" !== i.getAttribute("media")) &&
                (n.set(i.dataset.precedence, i), (r = i));
            }
            r && n.set(null, r);
          }
          ((i = (l = t.instance).getAttribute("data-precedence")),
            (a = n.get(i) || r) === r && n.set(null, l),
            n.set(i, l),
            this.count++,
            (r = uf.bind(this)),
            l.addEventListener("load", r),
            l.addEventListener("error", r),
            a
              ? a.parentNode.insertBefore(l, a.nextSibling)
              : (e = 9 === e.nodeType ? e.head : e).insertBefore(
                  l,
                  e.firstChild,
                ),
            (t.state.loading |= 4));
        }
      }
      var ff = {
        $$typeof: w,
        Provider: null,
        Consumer: null,
        _currentValue: F,
        _currentValue2: F,
        _threadCount: 0,
      };
      function pf(e, t, n, r, l, a, i, o, u) {
        ((this.tag = 1),
          (this.containerInfo = e),
          (this.pingCache = this.current = this.pendingChildren = null),
          (this.timeoutHandle = -1),
          (this.callbackNode =
            this.next =
            this.pendingContext =
            this.context =
            this.cancelPendingCommit =
              null),
          (this.callbackPriority = 0),
          (this.expirationTimes = Le(-1)),
          (this.entangledLanes =
            this.shellSuspendCounter =
            this.errorRecoveryDisabledLanes =
            this.expiredLanes =
            this.warmLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
              0),
          (this.entanglements = Le(0)),
          (this.hiddenUpdates = Le(null)),
          (this.identifierPrefix = r),
          (this.onUncaughtError = l),
          (this.onCaughtError = a),
          (this.onRecoverableError = i),
          (this.pooledCache = null),
          (this.pooledCacheLanes = 0),
          (this.formState = u),
          (this.incompleteTransitions = new Map()));
      }
      function mf(e, t, n, r, l, a, i, o, u, s, c, d) {
        return (
          (e = new pf(e, t, n, i, u, s, c, d, o)),
          (t = 1),
          !0 === a && (t |= 24),
          (a = Ir(3, null, null, t)),
          (e.current = a),
          (a.stateNode = e),
          (t = $l()).refCount++,
          (e.pooledCache = t),
          t.refCount++,
          (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
          va(a),
          e
        );
      }
      function hf(e) {
        return e ? (e = Fr) : Fr;
      }
      function gf(e, t, n, r, l, a) {
        ((l = hf(l)),
          null === r.context ? (r.context = l) : (r.pendingContext = l),
          ((r = ba(t)).payload = { element: n }),
          null !== (a = void 0 === a ? null : a) && (r.callback = a),
          null !== (n = ka(e, r, t)) && (Ys(n, 0, t), xa(n, e, t)));
      }
      function vf(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t;
        }
      }
      function yf(e, t) {
        (vf(e, t), (e = e.alternate) && vf(e, t));
      }
      function bf(e) {
        if (13 === e.tag || 31 === e.tag) {
          var t = Mr(e, 67108864);
          (null !== t && Ys(t, 0, 67108864), yf(e, 67108864));
        }
      }
      function kf(e) {
        if (13 === e.tag || 31 === e.tag) {
          var t = qs(),
            n = Mr(e, (t = Fe(t)));
          (null !== n && Ys(n, 0, t), yf(e, t));
        }
      }
      var xf = !0;
      function wf(e, t, n, r) {
        var l = A.T;
        A.T = null;
        var a = R.p;
        try {
          ((R.p = 2), Nf(e, t, n, r));
        } finally {
          ((R.p = a), (A.T = l));
        }
      }
      function Sf(e, t, n, r) {
        var l = A.T;
        A.T = null;
        var a = R.p;
        try {
          ((R.p = 8), Nf(e, t, n, r));
        } finally {
          ((R.p = a), (A.T = l));
        }
      }
      function Nf(e, t, n, r) {
        if (xf) {
          var l = Ef(r);
          if (null === l) (nd(e, t, r, Cf, n), Ff(e, r));
          else if (
            (function (e, t, n, r, l) {
              switch (t) {
                case "focusin":
                  return ((_f = Df(_f, e, t, n, r, l)), !0);
                case "dragenter":
                  return ((Tf = Df(Tf, e, t, n, r, l)), !0);
                case "mouseover":
                  return ((Lf = Df(Lf, e, t, n, r, l)), !0);
                case "pointerover":
                  var a = l.pointerId;
                  return (Of.set(a, Df(Of.get(a) || null, e, t, n, r, l)), !0);
                case "gotpointercapture":
                  return (
                    (a = l.pointerId),
                    Mf.set(a, Df(Mf.get(a) || null, e, t, n, r, l)),
                    !0
                  );
              }
              return !1;
            })(l, e, t, n, r)
          )
            r.stopPropagation();
          else if ((Ff(e, r), 4 & t && -1 < Rf.indexOf(e))) {
            for (; null !== l; ) {
              var a = Ze(l);
              if (null !== a)
                switch (a.tag) {
                  case 3:
                    if ((a = a.stateNode).current.memoizedState.isDehydrated) {
                      var i = je(a.pendingLanes);
                      if (0 !== i) {
                        var o = a;
                        for (o.pendingLanes |= 2, o.entangledLanes |= 2; i; ) {
                          var u = 1 << (31 - xe(i));
                          ((o.entanglements[1] |= u), (i &= ~u));
                        }
                        (Dc(a), !(6 & ms) && ((As = se() + 500), Ic(0, !1)));
                      }
                    }
                    break;
                  case 31:
                  case 13:
                    (null !== (o = Mr(a, 2)) && Ys(o, 0, 2), ec(), yf(a, 2));
                }
              if ((null === (a = Ef(r)) && nd(e, t, r, Cf, n), a === l)) break;
              l = a;
            }
            null !== l && r.stopPropagation();
          } else nd(e, t, r, null, n);
        }
      }
      function Ef(e) {
        return jf((e = At(e)));
      }
      var Cf = null;
      function jf(e) {
        if (((Cf = null), null !== (e = Ge(e)))) {
          var t = i(e);
          if (null === t) e = null;
          else {
            var n = t.tag;
            if (13 === n) {
              if (null !== (e = o(t))) return e;
              e = null;
            } else if (31 === n) {
              if (null !== (e = u(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          }
        }
        return ((Cf = e), null);
      }
      function Pf(e) {
        switch (e) {
          case "beforetoggle":
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "toggle":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 2;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 8;
          case "message":
            switch (ce()) {
              case de:
                return 2;
              case fe:
                return 8;
              case pe:
              case me:
                return 32;
              case he:
                return 268435456;
              default:
                return 32;
            }
          default:
            return 32;
        }
      }
      var zf = !1,
        _f = null,
        Tf = null,
        Lf = null,
        Of = new Map(),
        Mf = new Map(),
        Af = [],
        Rf =
          "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
            " ",
          );
      function Ff(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            _f = null;
            break;
          case "dragenter":
          case "dragleave":
            Tf = null;
            break;
          case "mouseover":
          case "mouseout":
            Lf = null;
            break;
          case "pointerover":
          case "pointerout":
            Of.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Mf.delete(t.pointerId);
        }
      }
      function Df(e, t, n, r, l, a) {
        return null === e || e.nativeEvent !== a
          ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: a,
              targetContainers: [l],
            }),
            null !== t && null !== (t = Ze(t)) && bf(t),
            e)
          : ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
            null !== l && -1 === t.indexOf(l) && t.push(l),
            e);
      }
      function If(e) {
        var t = Ge(e.target);
        if (null !== t) {
          var n = i(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = o(n)))
                return (
                  (e.blockedOn = t),
                  void $e(e.priority, function () {
                    kf(n);
                  })
                );
            } else if (31 === t) {
              if (null !== (t = u(n)))
                return (
                  (e.blockedOn = t),
                  void $e(e.priority, function () {
                    kf(n);
                  })
                );
            } else if (
              3 === t &&
              n.stateNode.current.memoizedState.isDehydrated
            )
              return void (e.blockedOn =
                3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function $f(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Ef(e.nativeEvent);
          if (null !== n)
            return (null !== (t = Ze(n)) && bf(t), (e.blockedOn = n), !1);
          var r = new (n = e.nativeEvent).constructor(n.type, n);
          ((Mt = r), n.target.dispatchEvent(r), (Mt = null), t.shift());
        }
        return !0;
      }
      function Uf(e, t, n) {
        $f(e) && n.delete(t);
      }
      function Hf() {
        ((zf = !1),
          null !== _f && $f(_f) && (_f = null),
          null !== Tf && $f(Tf) && (Tf = null),
          null !== Lf && $f(Lf) && (Lf = null),
          Of.forEach(Uf),
          Mf.forEach(Uf));
      }
      function Bf(e, n) {
        e.blockedOn === n &&
          ((e.blockedOn = null),
          zf ||
            ((zf = !0),
            t.unstable_scheduleCallback(t.unstable_NormalPriority, Hf)));
      }
      var Vf = null;
      function Wf(e) {
        Vf !== e &&
          ((Vf = e),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
            Vf === e && (Vf = null);
            for (var t = 0; t < e.length; t += 3) {
              var n = e[t],
                r = e[t + 1],
                l = e[t + 2];
              if ("function" != typeof r) {
                if (null === jf(r || n)) continue;
                break;
              }
              var a = Ze(n);
              null !== a &&
                (e.splice(t, 3),
                (t -= 3),
                to(
                  a,
                  { pending: !0, data: l, method: n.method, action: r },
                  r,
                  l,
                ));
            }
          }));
      }
      function Qf(e) {
        function t(t) {
          return Bf(t, e);
        }
        (null !== _f && Bf(_f, e),
          null !== Tf && Bf(Tf, e),
          null !== Lf && Bf(Lf, e),
          Of.forEach(t),
          Mf.forEach(t));
        for (var n = 0; n < Af.length; n++) {
          var r = Af[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
        for (; 0 < Af.length && null === (n = Af[0]).blockedOn; )
          (If(n), null === n.blockedOn && Af.shift());
        if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
          for (r = 0; r < n.length; r += 3) {
            var l = n[r],
              a = n[r + 1],
              i = l[Be] || null;
            if ("function" == typeof a) i || Wf(n);
            else if (i) {
              var o = null;
              if (a && a.hasAttribute("formAction")) {
                if (((l = a), (i = a[Be] || null))) o = i.formAction;
                else if (null !== jf(l)) continue;
              } else o = i.action;
              ("function" == typeof o
                ? (n[r + 1] = o)
                : (n.splice(r, 3), (r -= 3)),
                Wf(n));
            }
          }
      }
      function qf() {
        function e(e) {
          e.canIntercept &&
            "react-transition" === e.info &&
            e.intercept({
              handler: function () {
                return new Promise(function (e) {
                  return (l = e);
                });
              },
              focusReset: "manual",
              scroll: "manual",
            });
        }
        function t() {
          (null !== l && (l(), (l = null)), r || setTimeout(n, 20));
        }
        function n() {
          if (!r && !navigation.transition) {
            var e = navigation.currentEntry;
            e &&
              null != e.url &&
              navigation.navigate(e.url, {
                state: e.getState(),
                info: "react-transition",
                history: "replace",
              });
          }
        }
        if ("object" == typeof navigation) {
          var r = !1,
            l = null;
          return (
            navigation.addEventListener("navigate", e),
            navigation.addEventListener("navigatesuccess", t),
            navigation.addEventListener("navigateerror", t),
            setTimeout(n, 100),
            function () {
              ((r = !0),
                navigation.removeEventListener("navigate", e),
                navigation.removeEventListener("navigatesuccess", t),
                navigation.removeEventListener("navigateerror", t),
                null !== l && (l(), (l = null)));
            }
          );
        }
      }
      function Kf(e) {
        this._internalRoot = e;
      }
      function Yf(e) {
        this._internalRoot = e;
      }
      ((Yf.prototype.render = Kf.prototype.render =
        function (e) {
          var t = this._internalRoot;
          if (null === t) throw Error(l(409));
          gf(t.current, qs(), e, t, null, null);
        }),
        (Yf.prototype.unmount = Kf.prototype.unmount =
          function () {
            var e = this._internalRoot;
            if (null !== e) {
              this._internalRoot = null;
              var t = e.containerInfo;
              (gf(e.current, 2, null, e, null, null), ec(), (t[Ve] = null));
            }
          }),
        (Yf.prototype.unstable_scheduleHydration = function (e) {
          if (e) {
            var t = Ie();
            e = { blockedOn: null, target: e, priority: t };
            for (
              var n = 0;
              n < Af.length && 0 !== t && t < Af[n].priority;
              n++
            );
            (Af.splice(n, 0, e), 0 === n && If(e));
          }
        }));
      var Xf = n.version;
      if ("19.2.6" !== Xf) throw Error(l(527, Xf, "19.2.6"));
      R.findDOMNode = function (e) {
        var t = e._reactInternals;
        if (void 0 === t)
          throw "function" == typeof e.render
            ? Error(l(188))
            : ((e = Object.keys(e).join(",")), Error(l(268, e)));
        return (
          (e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = i(e))) throw Error(l(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var a = n.return;
              if (null === a) break;
              var o = a.alternate;
              if (null === o) {
                if (null !== (r = a.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (a.child === o.child) {
                for (o = a.child; o; ) {
                  if (o === n) return (c(a), e);
                  if (o === r) return (c(a), t);
                  o = o.sibling;
                }
                throw Error(l(188));
              }
              if (n.return !== r.return) ((n = a), (r = o));
              else {
                for (var u = !1, s = a.child; s; ) {
                  if (s === n) {
                    ((u = !0), (n = a), (r = o));
                    break;
                  }
                  if (s === r) {
                    ((u = !0), (r = a), (n = o));
                    break;
                  }
                  s = s.sibling;
                }
                if (!u) {
                  for (s = o.child; s; ) {
                    if (s === n) {
                      ((u = !0), (n = o), (r = a));
                      break;
                    }
                    if (s === r) {
                      ((u = !0), (r = o), (n = a));
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!u) throw Error(l(189));
                }
              }
              if (n.alternate !== r) throw Error(l(190));
            }
            if (3 !== n.tag) throw Error(l(188));
            return n.stateNode.current === n ? e : t;
          })(t)),
          (e = null === (e = null !== e ? f(e) : null) ? null : e.stateNode)
        );
      };
      var Gf,
        Zf = {
          bundleType: 0,
          version: "19.2.6",
          rendererPackageName: "react-dom",
          currentDispatcherRef: A,
          reconcilerVersion: "19.2.6",
        };
      if (
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
        !(Gf = __REACT_DEVTOOLS_GLOBAL_HOOK__).isDisabled &&
        Gf.supportsFiber
      )
        try {
          ((ye = Gf.inject(Zf)), (be = Gf));
        } catch {}
      ((e.createRoot = function (e, t) {
        if (!a(e)) throw Error(l(299));
        var n = !1,
          r = "",
          i = Eo,
          o = Co,
          u = jo;
        return (
          null != t &&
            (!0 === t.unstable_strictMode && (n = !0),
            void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
            void 0 !== t.onUncaughtError && (i = t.onUncaughtError),
            void 0 !== t.onCaughtError && (o = t.onCaughtError),
            void 0 !== t.onRecoverableError && (u = t.onRecoverableError)),
          (t = mf(e, 1, !1, null, 0, n, r, null, i, o, u, qf)),
          (e[Ve] = t.current),
          ed(e),
          new Kf(t)
        );
      }),
        (e.hydrateRoot = function (e, t, n) {
          if (!a(e)) throw Error(l(299));
          var r = !1,
            i = "",
            o = Eo,
            u = Co,
            s = jo,
            c = null;
          return (
            null != n &&
              (!0 === n.unstable_strictMode && (r = !0),
              void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
              void 0 !== n.onUncaughtError && (o = n.onUncaughtError),
              void 0 !== n.onCaughtError && (u = n.onCaughtError),
              void 0 !== n.onRecoverableError && (s = n.onRecoverableError),
              void 0 !== n.formState && (c = n.formState)),
            ((t = mf(e, 1, !0, t, 0, r, i, c, o, u, s, qf)).context = hf(null)),
            (n = t.current),
            ((i = ba((r = Fe((r = qs()))))).callback = null),
            ka(n, i, r),
            (n = r),
            (t.current.lanes = n),
            Oe(t, n),
            Dc(t),
            (e[Ve] = t.current),
            ed(e),
            new Yf(t)
          );
        }),
        (e.version = "19.2.6"));
    }),
    h = i((e, t) => {
      ((function e() {
        if (
          !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            "function" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (e) {
            console.error(e);
          }
      })(),
        (t.exports = m()));
    }),
    g = i((e) => {
      var t = Symbol.for("react.transitional.element"),
        n = Symbol.for("react.fragment");
      function r(e, n, r) {
        var l = null;
        if (
          (void 0 !== r && (l = "" + r),
          void 0 !== n.key && (l = "" + n.key),
          "key" in n)
        )
          for (var a in ((r = {}), n)) "key" !== a && (r[a] = n[a]);
        else r = n;
        return (
          (n = r.ref),
          {
            $$typeof: t,
            type: e,
            key: l,
            ref: void 0 !== n ? n : null,
            props: r,
          }
        );
      }
      ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
    }),
    v = i((e, t) => {
      t.exports = g();
    }),
    y = o(s(), 1),
    b = o(h(), 1),
    k = o(s(), 1),
    x = o(v(), 1),
    w = [
      "#d86d5b",
      "#173f67",
      "#c49a45",
      "#73866b",
      "#4d8c8a",
      "#8d6d9f",
      "#b85c86",
      "#607d9d",
    ],
    S = [
      {
        id: "sp-a",
        name: "Species 1",
        color: w[0],
        x: 220,
        y: 180,
        r: 0.8,
        m: 0.08,
        K: 1,
        x0: 0.18,
        d: 0,
      },
      {
        id: "sp-b",
        name: "Species 2",
        color: w[1],
        x: 580,
        y: 125,
        r: 0.55,
        m: 0.05,
        K: 1.4,
        x0: 0.12,
        d: 0,
      },
      {
        id: "sp-c",
        name: "Species 3",
        color: w[2],
        x: 580,
        y: 295,
        r: 0.38,
        m: 0.04,
        K: 0.8,
        x0: 0.16,
        d: 0,
      },
    ],
    N = [
      { id: "sp-a-sp-b", source: "sp-a", target: "sp-b", value: 0.32 },
      { id: "sp-b-sp-a", source: "sp-b", target: "sp-a", value: -0.22 },
      { id: "sp-a-sp-c", source: "sp-a", target: "sp-c", value: -0.18 },
      { id: "sp-c-sp-a", source: "sp-c", target: "sp-a", value: -0.18 },
      { id: "sp-b-sp-c", source: "sp-b", target: "sp-c", value: 0.24 },
    ];
  function E(e, t, n) {
    return Math.max(t, Math.min(n, e));
  }
  function C(e) {
    return Number.isFinite(e)
      ? Math.abs(e) < 0.001 && 0 !== e
        ? e.toExponential(2)
        : Number(e.toFixed(3)).toString()
      : "—";
  }
  function j(e, t, n, r) {
    let l = Math.ceil(n / r),
      a = [0],
      i = [e.map((e) => e.x0)],
      o = e.map((e) => Math.max(0, e.x0)),
      u = null,
      s = new Map(e.map((e, t) => [e.id, t])),
      c = (n) =>
        e.map((e, r) => {
          let l = 0;
          for (let r of t)
            if (r.target === e.id) {
              let e = s.get(r.source);
              void 0 !== e && (l += r.value * n[e]);
            }
          return (
            n[r] * (e.r * (1 - n[r] + l) - e.m) +
            Math.max(0, e.d ?? 0)
          );
        });
    for (let e = 1; e <= l; e++) {
      let t = Math.min(r, n - (e - 1) * r),
        l = c(o),
        s = c(o.map((e, n) => e + (t * l[n]) / 2)),
        d = c(o.map((e, n) => e + (t * s[n]) / 2)),
        f = c(o.map((e, n) => e + t * d[n]));
      if (
        ((o = o.map((e, n) =>
          Math.max(0, e + (t / 6) * (l[n] + 2 * s[n] + 2 * d[n] + f[n])),
        )),
        o.some((e) => !Number.isFinite(e) || e > 1e3))
      ) {
        u = `The simulation diverged numerically at t ≈ ${C(e * r)}; reduce positive interaction strengths or shorten the simulation duration.`;
        break;
      }
      (a.push(Math.min(e * r, n)), i.push([...o]));
    }
    return { time: a, values: i, warning: u };
  }
  function P({ result: e, species: t }) {
    let n = 48,
      r = 18,
      l = 18,
      a = 38,
      i = Math.max(...e.time, 1),
      o = 1.08 * Math.max(1, ...e.values.flat()),
      u = (e) => n + (e / i) * (760 - n - r),
      s = (e) => 260 - a - (e / o) * (260 - l - a);
    return (0, x.jsxs)("svg", {
      className: "chart-svg",
      viewBox: "0 0 760 260",
      role: "img",
      "aria-label": "Species normalized density over time",
      children: [
        [0, 0.25, 0.5, 0.75, 1].map((e) =>
          (0, x.jsxs)(
            "g",
            {
              children: [
                (0, x.jsx)("line", {
                  x1: n,
                  y1: s(e * o),
                  x2: 760 - r,
                  y2: s(e * o),
                  className: "grid-line",
                }),
                (0, x.jsx)("text", {
                  x: n - 9,
                  y: s(e * o) + 4,
                  textAnchor: "end",
                  className: "axis-label",
                  children: C(e * o),
                }),
                (0, x.jsx)("line", {
                  x1: u(e * i),
                  y1: l,
                  x2: u(e * i),
                  y2: 260 - a,
                  className: "grid-line vertical",
                }),
                (0, x.jsx)("text", {
                  x: u(e * i),
                  y: 245,
                  textAnchor: "middle",
                  className: "axis-label",
                  children: C(e * i),
                }),
              ],
            },
            e,
          ),
        ),
        (0, x.jsx)("line", {
          x1: n,
          y1: 260 - a,
          x2: 760 - r,
          y2: 260 - a,
          className: "axis-line",
        }),
        (0, x.jsx)("line", {
          x1: n,
          y1: l,
          x2: n,
          y2: 260 - a,
          className: "axis-line",
        }),
        t.map((t, n) => {
          let r = e.time
            .map((t, r) => `${u(t)},${s(e.values[r][n])}`)
            .join(" ");
          return (0, x.jsx)(
            "polyline",
            {
              points: r,
              fill: "none",
              stroke: t.color,
              strokeWidth: "3",
              strokeLinejoin: "round",
              strokeLinecap: "round",
            },
            t.id,
          );
        }),
        (0, x.jsx)("text", {
          x: (n + 760 - r) / 2,
          y: 259,
          textAnchor: "middle",
          className: "axis-title",
          children: "Time t",
        }),
        (0, x.jsx)("text", {
          transform: `translate(14 ${(l + 260 - a) / 2}) rotate(-90)`,
          textAnchor: "middle",
          className: "axis-title",
          children: "Normalized Density xᵢ",
        }),
      ],
    });
  }
  function z({ species: e, values: t }) {
    let n = t.reduce((e, t) => e + Math.max(0, t), 0),
      r = -Math.PI / 2;
    return (0, x.jsxs)("svg", {
      className: "pie-svg",
      viewBox: "0 0 220 220",
      role: "img",
      "aria-label": "Endpoint species relative-abundance pie chart",
      children: [
        n <= 0
          ? (0, x.jsx)("circle", { cx: 110, cy: 110, r: 86, fill: "#edf1ef" })
          : e.map((e, l) => {
              let a = Math.max(0, t[l] ?? 0) / n,
                i = r,
                o = r + a * Math.PI * 2;
              if (((r = o), a >= 0.999999))
                return (0, x.jsx)(
                  "circle",
                  {
                    cx: 110,
                    cy: 110,
                    r: 86,
                    fill: e.color,
                    className: "pie-slice",
                  },
                  e.id,
                );
              let u = `M 110 110 L ${110 + 86 * Math.cos(i)} ${110 + 86 * Math.sin(i)} A 86 86 0 ${a > 0.5 ? 1 : 0} 1 ${110 + 86 * Math.cos(o)} ${110 + 86 * Math.sin(o)} Z`;
              return (0, x.jsx)(
                "path",
                { d: u, fill: e.color, className: "pie-slice" },
                e.id,
              );
            }),
        (0, x.jsx)("circle", {
          cx: 110,
          cy: 110,
          r: 86,
          fill: "none",
          className: "pie-outline",
        }),
      ],
    });
  }
  var _ = o(v(), 1),
    T = document.getElementById("root");
  if (!T) throw new Error("IMSynCom Blocks could not find its root element.");
  (0, b.createRoot)(T).render(
    (0, _.jsx)(y.default.StrictMode, {
      children: (0, _.jsx)(function () {
        let [e, t] = (0, k.useState)(S),
          [n, r] = (0, k.useState)(N),
          [l, a] = (0, k.useState)("sp-a"),
          [i, o] = (0, k.useState)(null),
          [u, s] = (0, k.useState)("select"),
          [c, d] = (0, k.useState)(null),
          [f, p] = (0, k.useState)(30),
          [m, h] = (0, k.useState)(0.03),
          [g, v] = (0, k.useState)(() => j(S, N, 30, 0.03)),
          [y, b] = (0, k.useState)("matrix"),
          [_, T] = (0, k.useState)(
            "The example model has been loaded. Drag species nodes or select the facilitation/inhibition tools to create edges.",
          ),
          L = (0, k.useRef)(null),
          O = (0, k.useRef)(null),
          M = e.find((e) => e.id === l) ?? e[0],
          A = n.find((e) => e.id === i) ?? null,
          R = (0, k.useMemo)(() => new Map(e.map((e, t) => [e.id, t])), [e]),
          F = M ? (R.get(M.id) ?? 0) + 1 : 1,
          D = A ? (R.get(A.target) ?? 0) + 1 : 1,
          I = A ? (R.get(A.source) ?? 0) + 1 : 1,
          $ = g.values[g.values.length - 1] ?? e.map((e) => e.x0),
          U = e.map((e, t) => e.K * $[t]),
          H = U.reduce((e, t) => e + t, 0),
          B = (0, k.useMemo)(() => {
            let t = [];
            return 0 === e.length
              ? [{ level: "warn", text: "Add at least one species." }]
              : (e.every((e) => 0 === e.x0 && 0 === (e.d ?? 0)) &&
                  t.push({
                    level: "warn",
                    text: "All species have zero initial density and immigration rate; the community will not grow.",
                  }),
                e.forEach((e) => {
                  (e.r <= e.m &&
                    t.push({
                      level: "warn",
                      text: `${e.name}   rᵢ ≤ mᵢ,  cannot maintain a positive equilibrium without facilitative effects.`,
                    }),
                    e.x0 < 0 &&
                      t.push({
                        level: "warn",
                        text: `${e.name}  has a negative initial density.`,
                      }),
                    e.K <= 0 &&
                      t.push({
                        level: "warn",
                        text: `${e.name}   Kᵢ  must be greater than 0.`,
                      }),
                    (!Number.isFinite(e.d) || e.d < 0) &&
                      t.push({
                        level: "warn",
                        text: `${e.name}   Dᵢ  must be nonnegative.`,
                      }));
                }),
                n.some(
                  (e) =>
                    e.value > 0.7 &&
                    n.some(
                      (t) =>
                        t.source === e.target &&
                        t.target === e.source &&
                        t.value > 0.7,
                    ),
                ) &&
                  t.push({
                    level: "warn",
                    text: "Strong bidirectional facilitation was detected; the model may exhibit unbounded growth.",
                  }),
                t.length ||
                  t.push({
                    level: "ok",
                    text: "The model structure and parameters passed validation and the simulation can be run.",
                  }),
                t);
          }, [e, n]),
          V = (e, n) => {
            t((t) => t.map((t) => (t.id === l ? { ...t, [e]: n } : t)));
          },
          W = () => {
            let t = j(e, n, f, m);
            (v(t),
              T(
                t.warning ??
                  "Simulation completed. Curves show xᵢ, and endpoint biomass was restored using Bᵢ = Kᵢxᵢ.",
              ));
          };
        return (0, x.jsxs)("main", {
          className: "app-shell",
          children: [
            (0, x.jsxs)("nav", {
              className: "platform-nav",
              "aria-label": "Platform navigation",
              children: [
                (0, x.jsx)("a", {
                  className: "home-tag",
                  href: "../index.html",
                  children: "← Back to IMSynCom Home",
                }),
                (0, x.jsx)("span", {
                  className: "platform-name",
                  children:
                    "Integrated Modeling Platform for Synthetic Microbial Communities",
                }),
              ],
            }),
            (0, x.jsxs)("header", {
              className: "model-header",
              children: [
                (0, x.jsxs)("div", {
                  className: "brand",
                  children: [
                    (0, x.jsx)("img", {
                      className: "brand-logo",
                      src: "./image/logo.png",
                      alt: "IMSynCom Logo",
                    }),
                    (0, x.jsxs)("div", {
                      className: "brand-copy",
                      children: [
                        (0, x.jsx)("span", {
                          className: "brand-platform",
                          children: "IMSynCom · Synthetic Microbial Community Simulation Platform",
                        }),
                        (0, x.jsxs)("h1", {
                          children: [
                            "gLV Graphical Community Modeler ",
                            (0, x.jsx)("span", {
                              className: "version",
                              children: "v1.4",
                            }),
                          ],
                        }),
                        (0, x.jsx)("p", {
                          className: "subtitle",
                          children:
                            "Visual Modeling and Dynamic Simulation of Generalized Lotka–Volterra Microbial Communities",
                        }),
                        (0, x.jsx)("div", {
                          className: "funding",
                          children: "Supported by the National Key R&D Program of China (2021YFA0910300)",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, x.jsxs)("div", {
                  className: "header-side",
                  children: [
                    (0, x.jsx)("div", {
                      className: "header-formula",
                      children: "dxᵢ/dt = xᵢ { rᵢ[1 − xᵢ + Σⱼ≠ᵢ aᵢⱼxⱼ] − mᵢ } + Dᵢ",
                    }),
                    (0, x.jsxs)("div", {
                      className: "header-status",
                      children: ["● ", _],
                    }),
                  ],
                }),
              ],
            }),
            (0, x.jsxs)("div", {
              className: "toolbar",
              children: [
                (0, x.jsxs)("div", {
                  className: "model-summary",
                  children: [
                    (0, x.jsx)("strong", { children: "Normalized Logistic gLV" }),
                    (0, x.jsx)("span", {
                      children:
                        "xᵢ = Bᵢ/Kᵢ · Graphical structure, parameter matrix, and dynamic results are synchronized",
                    }),
                  ],
                }),
                (0, x.jsxs)("div", {
                  className: "header-actions",
                  children: [
                    (0, x.jsx)("input", {
                      ref: O,
                      type: "file",
                      accept: ".json,application/json",
                      hidden: !0,
                      onChange: (e) => {
                        let n = e.target.files?.[0];
                        if (!n) return;
                        let l = new FileReader();
                        ((l.onload = () => {
                          try {
                            let e = JSON.parse(String(l.result));
                            if (
                              !Array.isArray(e.species) ||
                              !Array.isArray(e.edges)
                            )
                              throw new Error();
                            (t(e.species.map((q) => ({
                              ...q,
                              d: Number.isFinite(Number(q.d))
                                ? Math.max(0, Number(q.d))
                                : 0,
                            }))),
                              r(e.edges),
                              p(Number(e.duration) || 30),
                              h(Number(e.dt) || 0.03),
                              a(e.species[0]?.id ?? ""),
                              o(null),
                              T("Model configuration imported; run the simulation."));
                          } catch {
                            T(
                              "The file could not be read; import a JSON model exported by this tool.",
                            );
                          }
                        }),
                          l.readAsText(n),
                          (e.target.value = ""));
                      },
                    }),
                    (0, x.jsx)("button", {
                      className: "ghost-button",
                      onClick: () => {
                        let t = JSON.stringify(
                            {
                              model: "normalized-logistic-gLV",
                              version: "1.4",
                              species: e,
                              edges: n,
                              duration: f,
                              dt: m,
                            },
                            null,
                            2,
                          ),
                          r = new Blob([t], { type: "application/json" }),
                          l = URL.createObjectURL(r),
                          a = document.createElement("a");
                        ((a.href = l),
                          (a.download = "IMSynCom-Blocks-gLV-model.json"),
                          a.click(),
                          URL.revokeObjectURL(l));
                      },
                      children: "Export Model",
                    }),
                    (0, x.jsx)("button", {
                      className: "primary-button small",
                      onClick: W,
                      children: "▶Run Simulation",
                    }),
                  ],
                }),
              ],
            }),
            (0, x.jsxs)("div", {
              className: "workspace",
              children: [
                (0, x.jsxs)("aside", {
                  className: "left-panel",
                  children: [
                    (0, x.jsxs)("div", {
                      className: "panel-heading",
                      children: [
                        (0, x.jsxs)("div", {
                          children: [
                            (0, x.jsx)("span", {
                              className: "step",
                              children: "01",
                            }),
                            (0, x.jsx)("h2", { children: "Model Objects" }),
                          ],
                        }),
                        (0, x.jsx)("button", {
                          className: "icon-button",
                          onClick: () => {
                            if (e.length >= 8)
                              return void T(
                                "The current version supports up to 8 species to preserve canvas and equation readability.",
                              );
                            let n = e.length,
                              r = `sp-${Date.now()}`,
                              l = {
                                id: r,
                                name: `Species ${n + 1}`,
                                color: w[n % w.length],
                                x: 170 + ((140 * n) % 500),
                                y: 115 + ((83 * n) % 230),
                                r: 0.5,
                                m: 0.05,
                                K: 1,
                                x0: 0.1,
                                d: 0,
                              };
                            (t((e) => [...e, l]),
                              a(r),
                              o(null),
                              s("select"),
                              T(`${l.name} Added .`));
                          },
                          "aria-label": "Add Species",
                          children: "＋",
                        }),
                      ],
                    }),
                    (0, x.jsx)("div", {
                      className: "species-list",
                      children: e.map((e) =>
                        (0, x.jsxs)(
                          "button",
                          {
                            className:
                              "species-row " +
                              (l !== e.id || i ? "" : "active"),
                            onClick: () => {
                              (a(e.id), o(null));
                            },
                            children: [
                              (0, x.jsx)("span", {
                                className: "species-dot",
                                style: { background: e.color },
                              }),
                              (0, x.jsxs)("span", {
                                children: [
                                  (0, x.jsx)("strong", { children: e.name }),
                                  (0, x.jsxs)("small", {
                                    children: [
                                      "x₀ ",
                                      C(e.x0),
                                      " · r ",
                                      C(e.r),
                                      " · D ",
                                      C(e.d ?? 0),
                                    ],
                                  }),
                                ],
                              }),
                              (0, x.jsx)("span", {
                                className: "chevron",
                                children: "›",
                              }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                    }),
                    (0, x.jsx)("div", { className: "divider" }),
                    (0, x.jsx)("div", {
                      className: "section-title",
                      children: "Canvas Tools",
                    }),
                    (0, x.jsxs)("div", {
                      className: "tool-grid",
                      children: [
                        (0, x.jsxs)("button", {
                          className: "select" === u ? "tool active" : "tool",
                          "aria-pressed": "select" === u,
                          title:
                            "Drag species nodes to reposition them; click a node or arrow to edit parameters on the right",
                          onClick: () => {
                            (s("select"),
                              d(null),
                              T(
                                "Drag nodes to reposition them; click a node or arrow to edit parameters on the right.",
                              ));
                          },
                          children: [
                            (0, x.jsx)("span", {
                              className: "cursor-icon",
                              children: "↖",
                            }),
                            (0, x.jsx)("strong", {
                              children: "Select",
                            }),
                            (0, x.jsx)("small", {
                              children: "Drag nodes · Click to edit",
                            }),
                          ],
                        }),
                        (0, x.jsxs)("button", {
                          className:
                            "positive" === u
                              ? "tool positive active"
                              : "tool positive",
                          "aria-pressed": "positive" === u,
                          onClick: () => {
                            (s("positive"),
                              d(null),
                              T(
                                "Facilitation edge creation: First click the acting Species, , then click the affected Species.",
                              ));
                          },
                          children: [
                            (0, x.jsx)("span", {
                              className: "line-icon positive-line",
                              children: "→",
                            }),
                            (0, x.jsx)("strong", { children: "Facilitation" }),
                            (0, x.jsx)("small", { children: "aᵢⱼ > 0" }),
                          ],
                        }),
                        (0, x.jsxs)("button", {
                          className:
                            "negative" === u
                              ? "tool negative active"
                              : "tool negative",
                          "aria-pressed": "negative" === u,
                          onClick: () => {
                            (s("negative"),
                              d(null),
                              T(
                                "Inhibition edge creation: First click the acting Species, , then click the affected Species.",
                              ));
                          },
                          children: [
                            (0, x.jsx)("span", {
                              className: "line-icon negative-line",
                              children: "⊣",
                            }),
                            (0, x.jsx)("strong", { children: "Inhibition" }),
                            (0, x.jsx)("small", { children: "aᵢⱼ < 0" }),
                          ],
                        }),
                      ],
                    }),
                    (0, x.jsxs)("div", {
                      className: "mini-help",
                      children: [
                        (0, x.jsx)("span", { children: "Instructions" }),
                        (0, x.jsxs)("p", {
                          children: [
                            "Drag nodes to reposition them; click a node or arrow to modify parameters on the right.",
                          ],
                        }),
                        (0, x.jsxs)("p", {
                          children: [
                            (0, x.jsx)("strong", { children: "Facilitation / Inhibition: " }),
                            "Click the acting Species ",
                            (0, x.jsx)("strong", { children: "j" }),
                            "  and the affected Species ",
                            (0, x.jsx)("strong", { children: "i" }),
                            ", Generate ",
                            (0, x.jsx)("strong", { children: "j → i" }),
                            ", corresponding to ",
                            (0, x.jsxs)("strong", {
                              children: [
                                "a",
                                (0, x.jsx)("sub", { children: "ij" }),
                              ],
                            }),
                            ".",
                          ],
                        }),
                      ],
                    }),
                    (0, x.jsx)("button", {
                      className: "text-button",
                      onClick: () => {
                        (t((t) => {
                          let n = t.length,
                            r = Math.min(260, 70 + 28 * n),
                            l = Math.min(135, 0.58 * r);
                          return t.map((t, a) => {
                            let i =
                              (2 * Math.PI * a) / Math.max(n, 1) - Math.PI / 2;
                            return {
                              ...t,
                              x: 400 + r * Math.cos(i),
                              y: 210 + l * Math.sin(i),
                            };
                          });
                        }),
                          o(null),
                          d(null),
                          s("select"),
                          T("Automatically arranged according to the current number of species."));
                      },
                      children: "Auto Layout",
                    }),
                  ],
                }),
                (0, x.jsxs)("section", {
                  className: "center-column",
                  children: [
                    (0, x.jsxs)("div", {
                      className: "canvas-card",
                      children: [
                        (0, x.jsxs)("div", {
                          className: "card-header",
                          children: [
                            (0, x.jsxs)("div", {
                              children: [
                                (0, x.jsx)("span", {
                                  className: "step",
                                  children: "02",
                                }),
                                (0, x.jsx)("h2", { children: "Model Canvas" }),
                              ],
                            }),
                            (0, x.jsxs)("div", {
                              className: "canvas-header-actions",
                              children: [
                                (0, x.jsxs)("div", {
                                  className: "legend",
                                  children: [
                                    (0, x.jsxs)("span", {
                                      children: [
                                        (0, x.jsx)("i", {
                                          className: "legend-line green",
                                        }),
                                        "Facilitation",
                                      ],
                                    }),
                                    (0, x.jsxs)("span", {
                                      children: [
                                        (0, x.jsx)("i", {
                                          className: "legend-line red",
                                        }),
                                        "Inhibition",
                                      ],
                                    }),
                                    (0, x.jsxs)("span", {
                                      children: [
                                        (0, x.jsx)("i", {
                                          className: "legend-ring",
                                        }),
                                        "Select",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, x.jsx)("button", {
                                  className: "clear-canvas-button",
                                  onClick: () => {
                                    (t([]),
                                      r([]),
                                      a(""),
                                      o(null),
                                      d(null),
                                      s("select"),
                                      v({
                                        time: [0],
                                        values: [[]],
                                        warning: null,
                                      }),
                                      T("The canvas has been cleared. Click ‘+’ on the left to add species."));
                                  },
                                  title: "Delete all species and edges from the canvas",
                                  children: "Clear Canvas",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, x.jsxs)("svg", {
                          className: `model-canvas tool-${u}`,
                          viewBox: "0 0 800 420",
                          onMouseMove: (e) => {
                            if (!L.current) return;
                            let n = e.currentTarget.getBoundingClientRect(),
                              r = ((e.clientX - n.left) / n.width) * 800,
                              l = ((e.clientY - n.top) / n.height) * 420,
                              { id: a, dx: i, dy: o } = L.current;
                            t((e) =>
                              e.map((e) =>
                                e.id === a
                                  ? {
                                      ...e,
                                      x: E(r - i, 55, 745),
                                      y: E(l - o, 55, 365),
                                    }
                                  : e,
                              ),
                            );
                          },
                          onMouseUp: () => {
                            L.current = null;
                          },
                          onMouseLeave: () => {
                            L.current = null;
                          },
                          children: [
                            (0, x.jsxs)("defs", {
                              children: [
                                (0, x.jsx)("pattern", {
                                  id: "dot-grid",
                                  width: "24",
                                  height: "24",
                                  patternUnits: "userSpaceOnUse",
                                  children: (0, x.jsx)("circle", {
                                    cx: "2",
                                    cy: "2",
                                    r: "1.1",
                                    fill: "#ded6ca",
                                  }),
                                }),
                                (0, x.jsx)("marker", {
                                  id: "arrow-positive",
                                  markerWidth: "8",
                                  markerHeight: "8",
                                  refX: "7",
                                  refY: "4",
                                  orient: "auto",
                                  markerUnits: "strokeWidth",
                                  children: (0, x.jsx)("path", {
                                    d: "M0,0 L8,4 L0,8 Z",
                                    fill: "#173f67",
                                  }),
                                }),
                                (0, x.jsx)("marker", {
                                  id: "arrow-negative",
                                  markerWidth: "8",
                                  markerHeight: "8",
                                  refX: "6.5",
                                  refY: "4",
                                  orient: "auto",
                                  markerUnits: "strokeWidth",
                                  children: (0, x.jsx)("path", {
                                    d: "M6.5,0 L6.5,8 M0,4 L6.5,4",
                                    fill: "none",
                                    stroke: "#d86d5b",
                                    strokeWidth: "1.8",
                                  }),
                                }),
                              ],
                            }),
                            (0, x.jsx)("rect", {
                              width: "800",
                              height: "420",
                              fill: "url(#dot-grid)",
                              rx: "18",
                            }),
                            n.map((t) => {
                              let r = e.find((e) => e.id === t.source),
                                l = e.find((e) => e.id === t.target);
                              if (!r || !l) return null;
                              let a = l.x - r.x,
                                u = l.y - r.y,
                                c = Math.max(Math.hypot(a, u), 1),
                                d = a / c,
                                f = u / c,
                                p = n.some(
                                  (e) =>
                                    e.source === t.target &&
                                    e.target === t.source,
                                )
                                  ? 36
                                  : 0,
                                m = -f,
                                h = d,
                                g = r.x + 54 * d,
                                v = r.y + 54 * f,
                                y = l.x - 61 * d,
                                b = l.y - 61 * f,
                                k = (g + y) / 2 + m * p,
                                w = (v + b) / 2 + h * p,
                                S = `M ${g} ${v} Q ${k} ${w} ${y} ${b}`,
                                N = t.value > 0,
                                E = 1.7 + 3.2 * Math.min(Math.abs(t.value), 1);
                              return (0, x.jsxs)(
                                "g",
                                {
                                  className: "edge-group",
                                  onClick: (e) => {
                                    (e.stopPropagation(), o(t.id), s("select"));
                                  },
                                  children: [
                                    (0, x.jsx)("path", {
                                      d: S,
                                      className: "edge-hit",
                                    }),
                                    (0, x.jsx)("path", {
                                      d: S,
                                      fill: "none",
                                      stroke: N ? "#173f67" : "#d86d5b",
                                      strokeWidth: E,
                                      markerEnd: N
                                        ? "url(#arrow-positive)"
                                        : "url(#arrow-negative)",
                                      className:
                                        i === t.id ? "edge selected" : "edge",
                                    }),
                                    (0, x.jsxs)("g", {
                                      transform: `translate(${k} ${w})`,
                                      children: [
                                        (0, x.jsx)("rect", {
                                          x: "-24",
                                          y: "-12",
                                          width: "48",
                                          height: "24",
                                          rx: "12",
                                          className: "edge-label-bg",
                                        }),
                                        (0, x.jsx)("text", {
                                          textAnchor: "middle",
                                          y: "4",
                                          className: N
                                            ? "edge-label positive-text"
                                            : "edge-label negative-text",
                                          children: C(t.value),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                t.id,
                              );
                            }),
                            e.map((e) => {
                              let t = l === e.id && !i,
                                n = c === e.id;
                              return (0, x.jsxs)(
                                "g",
                                {
                                  transform: `translate(${e.x} ${e.y})`,
                                  className: "node-group",
                                  onMouseDown: (t) =>
                                    ((e, t) => {
                                      if ("select" !== u) return;
                                      let n = e.currentTarget.ownerSVGElement;
                                      if (!n) return;
                                      let r = n.getBoundingClientRect(),
                                        l =
                                          ((e.clientX - r.left) / r.width) *
                                          800,
                                        a =
                                          ((e.clientY - r.top) / r.height) *
                                          420;
                                      L.current = {
                                        id: t.id,
                                        dx: l - t.x,
                                        dy: a - t.y,
                                      };
                                    })(t, e),
                                  onClick: (t) => {
                                    (t.stopPropagation(),
                                      ((e) => {
                                        if ("select" === u)
                                          return (a(e), void o(null));
                                        if (!c)
                                          return (
                                            d(e),
                                            void T("Select a target species affected by the interaction.")
                                          );
                                        if (c === e)
                                          return (
                                            d(null),
                                            void T(
                                              "Intraspecific limitation is already represented by rᵢ(1−xᵢ); no self-edge is required.",
                                            )
                                          );
                                        let t = `${c}-${e}`,
                                          n = "positive" === u ? 0.25 : -0.25;
                                        (r((r) => {
                                          let l = r.find(
                                            (t) =>
                                              t.source === c && t.target === e,
                                          );
                                          return l
                                            ? r.map((e) =>
                                                e.id === l.id
                                                  ? { ...e, value: n }
                                                  : e,
                                              )
                                            : [
                                                ...r,
                                                {
                                                  id: t,
                                                  source: c,
                                                  target: e,
                                                  value: n,
                                                },
                                              ];
                                        }),
                                          o(t),
                                          d(null),
                                          s("select"),
                                          T(
                                            `Created ${n > 0 ? "Facilitation" : "Inhibition"}interaction.The arrow points from the acting species to the affected species.`,
                                          ));
                                      })(e.id));
                                  },
                                  children: [
                                    (t || n) &&
                                      (0, x.jsx)("circle", {
                                        r: "58",
                                        className: n
                                          ? "node-ring connecting"
                                          : "node-ring",
                                      }),
                                    (e.d ?? 0) > 0 &&
                                      (0, x.jsxs)("g", {
                                        className: "dispersal-glyph",
                                        children: [
                                          (0, x.jsx)("line", {
                                            x1: "0",
                                            y1: "-82",
                                            x2: "0",
                                            y2: "-54",
                                            markerEnd: "url(#arrow-positive)",
                                          }),
                                          (0, x.jsxs)("text", {
                                            x: "9",
                                            y: "-68",
                                            children: ["D=", C(e.d)],
                                          }),
                                        ],
                                      }),
                                    (0, x.jsx)("circle", {
                                      r: "49",
                                      fill: "white",
                                      stroke: e.color,
                                      strokeWidth: "4",
                                      className: "node-circle",
                                    }),
                                    (0, x.jsx)("circle", {
                                      cx: "-27",
                                      cy: "-28",
                                      r: "8",
                                      fill: e.color,
                                      opacity: ".18",
                                    }),
                                    (0, x.jsx)("circle", {
                                      cx: "27",
                                      cy: "24",
                                      r: "12",
                                      fill: e.color,
                                      opacity: ".12",
                                    }),
                                    (0, x.jsx)("circle", {
                                      cx: "29",
                                      cy: "-22",
                                      r: "4",
                                      fill: e.color,
                                      opacity: ".35",
                                    }),
                                    (0, x.jsx)("text", {
                                      textAnchor: "middle",
                                      y: "-3",
                                      className: "node-name",
                                      children: e.name,
                                    }),
                                    (0, x.jsxs)("text", {
                                      textAnchor: "middle",
                                      y: "18",
                                      className: "node-meta",
                                      children: ["x₀=", C(e.x0)],
                                    }),
                                  ],
                                },
                                e.id,
                              );
                            }),
                          ],
                        }),
                        (0, x.jsxs)("div", {
                          className: "canvas-status",
                          children: [
                            (0, x.jsx)("span", {
                              className:
                                "status-dot " +
                                ("select" !== u ? "active" : ""),
                            }),
                            _,
                          ],
                        }),
                      ],
                    }),
                    (0, x.jsxs)("div", {
                      className: "lower-grid",
                      children: [
                        (0, x.jsxs)("div", {
                          className: "model-card",
                          children: [
                            (0, x.jsxs)("div", {
                              className: "tab-header",
                              children: [
                                (0, x.jsx)("button", {
                                  className: "matrix" === y ? "active" : "",
                                  onClick: () => b("matrix"),
                                  children: "Interaction Matrix",
                                }),
                                (0, x.jsx)("button", {
                                  className: "equations" === y ? "active" : "",
                                  onClick: () => b("equations"),
                                  children: "Generated Equations",
                                }),
                              ],
                            }),
                            "matrix" === y
                              ? (0, x.jsxs)("div", {
                                  className: "matrix-wrap",
                                  children: [
                                    (0, x.jsxs)("div", {
                                      className: "matrix-note",
                                      children: [
                                        "a",
                                        (0, x.jsx)("sub", { children: "ij" }),
                                        ": Column species j → row species i; the diagonal is represented by the logistic term",
                                      ],
                                    }),
                                    (0, x.jsxs)("table", {
                                      className: "matrix-table",
                                      children: [
                                        (0, x.jsx)("thead", {
                                          children: (0, x.jsxs)("tr", {
                                            children: [
                                              (0, x.jsx)("th", {
                                                children: "Affected ↓ / Acting →",
                                              }),
                                              e.map((e) =>
                                                (0, x.jsx)(
                                                  "th",
                                                  {
                                                    children: e.name.replace(
                                                      "Species ",
                                                      "",
                                                    ),
                                                  },
                                                  e.id,
                                                ),
                                              ),
                                            ],
                                          }),
                                        }),
                                        (0, x.jsx)("tbody", {
                                          children: e.map((t) =>
                                            (0, x.jsxs)(
                                              "tr",
                                              {
                                                children: [
                                                  (0, x.jsx)("th", {
                                                    children: t.name,
                                                  }),
                                                  e.map((e) => {
                                                    if (t.id === e.id)
                                                      return (0, x.jsx)(
                                                        "td",
                                                        {
                                                          className: "diagonal",
                                                          children: "—",
                                                        },
                                                        e.id,
                                                      );
                                                    let r = n.find(
                                                      (n) =>
                                                        n.source === e.id &&
                                                        n.target === t.id,
                                                    );
                                                    return (0, x.jsx)(
                                                      "td",
                                                      {
                                                        className: r
                                                          ? r.value > 0
                                                            ? "positive-cell"
                                                            : "negative-cell"
                                                          : "",
                                                        children: r
                                                          ? C(r.value)
                                                          : "0",
                                                      },
                                                      e.id,
                                                    );
                                                  }),
                                                ],
                                              },
                                              t.id,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : (0, x.jsx)("div", {
                                  className: "equation-list",
                                  children: e.map((e, t) => {
                                    let r = n
                                      .filter((t) => t.target === e.id)
                                      .map((e) => {
                                        let t = R.get(e.source) ?? 0;
                                        return `${e.value >= 0 ? "+" : "−"} ${C(Math.abs(e.value))}x${t + 1}`;
                                      })
                                      .join(" ");
                                    return (0, x.jsxs)(
                                      "div",
                                      {
                                        className: "equation-row",
                                        children: [
                                          (0, x.jsx)("span", {
                                            style: { background: e.color },
                                            children: t + 1,
                                          }),
                                          (0, x.jsxs)("p", {
                                            children: [
                                              "dx",
                                              (0, x.jsx)("sub", {
                                                children: t + 1,
                                              }),
                                              "/dt = x",
                                              (0, x.jsx)("sub", {
                                                children: t + 1,
                                              }),
                                              "[",
                                              C(e.r),
                                              "(1−x",
                                              (0, x.jsx)("sub", {
                                                children: t + 1,
                                              }),
                                              " ",
                                              r,
                                              ") − ",
                                              C(e.m),
                                              "]",
                                              " + ",
                                              C(e.d ?? 0),
                                            ],
                                          }),
                                        ],
                                      },
                                      e.id,
                                    );
                                  }),
                                }),
                          ],
                        }),
                        (0, x.jsxs)("div", {
                          className: "check-card",
                          children: [
                            (0, x.jsx)("div", {
                              className: "card-header compact",
                              children: (0, x.jsxs)("div", {
                                children: [
                                  (0, x.jsx)("span", {
                                    className: "step",
                                    children: "Check",
                                  }),
                                  (0, x.jsx)("h2", { children: "Model Inspector" }),
                                ],
                              }),
                            }),
                            (0, x.jsx)("div", {
                              className: "check-list",
                              children: B.map((e, t) =>
                                (0, x.jsxs)(
                                  "div",
                                  {
                                    className: `check-item ${e.level}`,
                                    children: [
                                      (0, x.jsx)("span", {
                                        children: "ok" === e.level ? "✓" : "!",
                                      }),
                                      (0, x.jsx)("p", { children: e.text }),
                                    ],
                                  },
                                  t,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, x.jsxs)("aside", {
                  className: "right-panel",
                  children: [
                    (0, x.jsxs)("div", {
                      className: "panel-heading",
                      children: [
                        (0, x.jsxs)("div", {
                          children: [
                            (0, x.jsx)("span", {
                              className: "step",
                              children: "03",
                            }),
                            (0, x.jsx)("h2", {
                              children: A ? "Interaction Parameters" : "Species Parameters",
                            }),
                          ],
                        }),
                        M &&
                          !A &&
                          (0, x.jsx)("span", {
                            className: "color-chip",
                            style: { background: M.color },
                          }),
                      ],
                    }),
                    A
                      ? (0, x.jsxs)("div", {
                          className: "parameter-form",
                          children: [
                            (0, x.jsxs)("div", {
                              className: "relationship-title",
                              children: [
                                (0, x.jsx)("strong", {
                                  children: e.find((e) => e.id === A.source)
                                    ?.name,
                                }),
                                (0, x.jsx)("span", {
                                  className:
                                    A.value > 0
                                      ? "positive-arrow"
                                      : "negative-arrow",
                                  children: A.value > 0 ? "Facilitation →" : "Inhibition ⊣",
                                }),
                                (0, x.jsx)("strong", {
                                  children: e.find((e) => e.id === A.target)
                                    ?.name,
                                }),
                              ],
                            }),
                            (0, x.jsxs)("label", {
                              className: "field",
                              children: [
                                (0, x.jsxs)("span", {
                                  children: [
                                    (0, x.jsxs)("span", {
                                      className: "field-label",
                                      children: [
                                        "Interaction Strength ",
                                        (0, x.jsxs)("span", {
                                          className: "math-symbol",
                                          children: [
                                            "a",
                                            (0, x.jsxs)("sub", {
                                              children: [D, I],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, x.jsx)("em", { children: "dimensionless" }),
                                  ],
                                }),
                                (0, x.jsxs)("div", {
                                  className: "range-row",
                                  children: [
                                    (0, x.jsx)("input", {
                                      type: "range",
                                      min: "-1.5",
                                      max: "1.5",
                                      step: "0.01",
                                      value: A.value,
                                      onChange: (e) =>
                                        r((t) =>
                                          t.map((t) =>
                                            t.id === A.id
                                              ? {
                                                  ...t,
                                                  value: Number(e.target.value),
                                                }
                                              : t,
                                          ),
                                        ),
                                    }),
                                    (0, x.jsx)("input", {
                                      type: "number",
                                      min: "-2",
                                      max: "2",
                                      step: "0.01",
                                      value: A.value,
                                      onChange: (e) =>
                                        r((t) =>
                                          t.map((t) =>
                                            t.id === A.id
                                              ? {
                                                  ...t,
                                                  value: Number(e.target.value),
                                                }
                                              : t,
                                          ),
                                        ),
                                    }),
                                  ],
                                }),
                                (0, x.jsx)("small", {
                                  children:
                                    "Effect of one unit of normalized density of the acting species on the target species’ net growth rate.",
                                }),
                              ],
                            }),
                            (0, x.jsxs)("div", {
                              className: "sign-buttons",
                              children: [
                                (0, x.jsx)("button", {
                                  onClick: () =>
                                    r((e) =>
                                      e.map((e) =>
                                        e.id === A.id
                                          ? {
                                              ...e,
                                              value: Math.max(
                                                0.01,
                                                Math.abs(e.value),
                                              ),
                                            }
                                          : e,
                                      ),
                                    ),
                                  children: "Set as Facilitation",
                                }),
                                (0, x.jsx)("button", {
                                  onClick: () =>
                                    r((e) =>
                                      e.map((e) =>
                                        e.id === A.id
                                          ? {
                                              ...e,
                                              value: -Math.max(
                                                0.01,
                                                Math.abs(e.value),
                                              ),
                                            }
                                          : e,
                                      ),
                                    ),
                                  children: "Set as Inhibition",
                                }),
                              ],
                            }),
                            (0, x.jsx)("button", {
                              className: "danger-button",
                              onClick: () => {
                                (r((e) => e.filter((e) => e.id !== A.id)),
                                  o(null));
                              },
                              children: "Delete Edge",
                            }),
                          ],
                        })
                      : M
                        ? (0, x.jsxs)("div", {
                            className: "parameter-form",
                            children: [
                              (0, x.jsxs)("label", {
                                className: "field",
                                children: [
                                  (0, x.jsx)("span", { children: "Species Name" }),
                                  (0, x.jsx)("input", {
                                    type: "text",
                                    value: M.name,
                                    onChange: (e) => V("name", e.target.value),
                                  }),
                                ],
                              }),
                              (0, x.jsxs)("label", {
                                className: "field",
                                children: [
                                  (0, x.jsxs)("span", {
                                    children: [
                                      (0, x.jsxs)("span", {
                                        className: "field-label",
                                        children: [
                                          "External Immigration Rate ",
                                          (0, x.jsxs)("span", {
                                            className: "math-symbol",
                                            children: [
                                              "D",
                                              (0, x.jsx)("sub", {
                                                children: F,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, x.jsx)("em", {
                                        children: "normalized biomass·time⁻¹",
                                      }),
                                    ],
                                  }),
                                  (0, x.jsxs)("div", {
                                    className: "range-row",
                                    children: [
                                      (0, x.jsx)("input", {
                                        type: "range",
                                        min: "0",
                                        max: "0.01",
                                        step: "0.000001",
                                        value: M.d ?? 0,
                                        onChange: (e) =>
                                          V("d", Math.max(0, Number(e.target.value))),
                                      }),
                                      (0, x.jsx)("input", {
                                        type: "number",
                                        min: "0",
                                        step: "0.000001",
                                        value: M.d ?? 0,
                                        onChange: (e) =>
                                          V("d", Math.max(0, Number(e.target.value))),
                                      }),
                                    ],
                                  }),
                                  (0, x.jsxs)("small", {
                                    children: [
                                      "Continuous additive input from an external species pool to species ",
                                      F,
                                      "; immigration is disabled when D = 0.",
                                    ],
                                  }),
                                ],
                              }),
                              (0, x.jsxs)("label", {
                                className: "field",
                                children: [
                                  (0, x.jsxs)("span", {
                                    children: [
                                      (0, x.jsxs)("span", {
                                        className: "field-label",
                                        children: [
                                          "Initial Normalized Density ",
                                          (0, x.jsxs)("span", {
                                            className: "math-symbol",
                                            children: [
                                              "x",
                                              (0, x.jsx)("sub", {
                                                children: F,
                                              }),
                                              "(0)",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, x.jsxs)("em", {
                                        children: [
                                          "relative to K",
                                          (0, x.jsx)("sub", { children: F }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, x.jsxs)("div", {
                                    className: "range-row",
                                    children: [
                                      (0, x.jsx)("input", {
                                        type: "range",
                                        min: "0",
                                        max: "2",
                                        step: "0.01",
                                        value: M.x0,
                                        onChange: (e) =>
                                          V("x0", Number(e.target.value)),
                                      }),
                                      (0, x.jsx)("input", {
                                        type: "number",
                                        min: "0",
                                        step: "0.01",
                                        value: M.x0,
                                        onChange: (e) =>
                                          V("x0", Number(e.target.value)),
                                      }),
                                    ],
                                  }),
                                  (0, x.jsxs)("small", {
                                    children: [
                                      "x",
                                      (0, x.jsx)("sub", { children: F }),
                                      "(0)=B",
                                      (0, x.jsx)("sub", { children: F }),
                                      "(0)/K",
                                      (0, x.jsx)("sub", { children: F }),
                                      ", not community relative abundance.",
                                    ],
                                  }),
                                ],
                              }),
                              (0, x.jsxs)("label", {
                                className: "field",
                                children: [
                                  (0, x.jsxs)("span", {
                                    children: [
                                      (0, x.jsxs)("span", {
                                        className: "field-label",
                                        children: [
                                          "Intrinsic Growth Rate ",
                                          (0, x.jsxs)("span", {
                                            className: "math-symbol",
                                            children: [
                                              "r",
                                              (0, x.jsx)("sub", {
                                                children: F,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, x.jsx)("em", { children: "time⁻¹" }),
                                    ],
                                  }),
                                  (0, x.jsxs)("div", {
                                    className: "range-row",
                                    children: [
                                      (0, x.jsx)("input", {
                                        type: "range",
                                        min: "0",
                                        max: "2",
                                        step: "0.01",
                                        value: M.r,
                                        onChange: (e) =>
                                          V("r", Number(e.target.value)),
                                      }),
                                      (0, x.jsx)("input", {
                                        type: "number",
                                        min: "0",
                                        step: "0.01",
                                        value: M.r,
                                        onChange: (e) =>
                                          V("r", Number(e.target.value)),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, x.jsxs)("label", {
                                className: "field",
                                children: [
                                  (0, x.jsxs)("span", {
                                    children: [
                                      (0, x.jsxs)("span", {
                                        className: "field-label",
                                        children: [
                                          "Mortality / Loss Rate ",
                                          (0, x.jsxs)("span", {
                                            className: "math-symbol",
                                            children: [
                                              "m",
                                              (0, x.jsx)("sub", {
                                                children: F,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, x.jsx)("em", { children: "time⁻¹" }),
                                    ],
                                  }),
                                  (0, x.jsxs)("div", {
                                    className: "range-row",
                                    children: [
                                      (0, x.jsx)("input", {
                                        type: "range",
                                        min: "0",
                                        max: "1",
                                        step: "0.01",
                                        value: M.m,
                                        onChange: (e) =>
                                          V("m", Number(e.target.value)),
                                      }),
                                      (0, x.jsx)("input", {
                                        type: "number",
                                        min: "0",
                                        step: "0.01",
                                        value: M.m,
                                        onChange: (e) =>
                                          V("m", Number(e.target.value)),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, x.jsxs)("label", {
                                className: "field",
                                children: [
                                  (0, x.jsxs)("span", {
                                    children: [
                                      (0, x.jsxs)("span", {
                                        className: "field-label",
                                        children: [
                                          "Actual Carrying Capacity ",
                                          (0, x.jsxs)("span", {
                                            className: "math-symbol",
                                            children: [
                                              "K",
                                              (0, x.jsx)("sub", {
                                                children: F,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, x.jsx)("em", {
                                        children: "conversion scale",
                                      }),
                                    ],
                                  }),
                                  (0, x.jsxs)("div", {
                                    className: "range-row",
                                    children: [
                                      (0, x.jsx)("input", {
                                        type: "range",
                                        min: "0.1",
                                        max: "5",
                                        step: "0.1",
                                        value: M.K,
                                        onChange: (e) =>
                                          V("K", Number(e.target.value)),
                                      }),
                                      (0, x.jsx)("input", {
                                        type: "number",
                                        min: "0.01",
                                        step: "0.1",
                                        value: M.K,
                                        onChange: (e) =>
                                          V("K", Number(e.target.value)),
                                      }),
                                    ],
                                  }),
                                  (0, x.jsxs)("small", {
                                    children: [
                                      "K",
                                      (0, x.jsx)("sub", { children: F }),
                                      " does not explicitly enter the normalized equation and is used only to convert B",
                                      (0, x.jsx)("sub", { children: F }),
                                      "=K",
                                      (0, x.jsx)("sub", { children: F }),
                                      "x",
                                      (0, x.jsx)("sub", { children: F }),
                                      " and relative abundance.",
                                    ],
                                  }),
                                ],
                              }),
                              (0, x.jsxs)("label", {
                                className: "color-field",
                                children: [
                                  (0, x.jsx)("span", { children: "Node Color" }),
                                  (0, x.jsx)("input", {
                                    type: "color",
                                    value: M.color,
                                    onChange: (e) => V("color", e.target.value),
                                  }),
                                ],
                              }),
                              (0, x.jsx)("button", {
                                className: "danger-button",
                                disabled: e.length <= 1,
                                onClick: () => {
                                  !M ||
                                    e.length <= 1 ||
                                    (t((e) => e.filter((e) => e.id !== M.id)),
                                    r((e) =>
                                      e.filter(
                                        (e) =>
                                          e.source !== M.id &&
                                          e.target !== M.id,
                                      ),
                                    ),
                                    a(e.find((e) => e.id !== M.id)?.id ?? ""),
                                    o(null));
                                },
                                children: "Delete Species",
                              }),
                            ],
                          })
                        : null,
                    (0, x.jsx)("div", { className: "divider" }),
                    (0, x.jsx)("div", {
                      className: "section-title",
                      children: "Simulation Settings",
                    }),
                    (0, x.jsxs)("div", {
                      className: "two-fields",
                      children: [
                        (0, x.jsxs)("label", {
                          className: "field",
                          children: [
                            (0, x.jsx)("span", { children: "Simulation Duration t" }),
                            (0, x.jsx)("input", {
                              type: "number",
                              min: "0.1",
                              max: "500",
                              step: "1",
                              value: f,
                              onChange: (e) => p(Number(e.target.value)),
                            }),
                          ],
                        }),
                        (0, x.jsxs)("label", {
                          className: "field",
                          children: [
                            (0, x.jsx)("span", { children: "Time Step Δt" }),
                            (0, x.jsx)("input", {
                              type: "number",
                              min: "0.001",
                              max: "0.2",
                              step: "0.01",
                              value: m,
                              onChange: (e) => h(Number(e.target.value)),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, x.jsxs)("button", {
                      className: "primary-button full",
                      onClick: W,
                      children: [
                        (0, x.jsx)("span", { children: "▶" }),
                        "Run Community Simulation",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, x.jsxs)("section", {
              className: "results-section",
              children: [
                (0, x.jsxs)("div", {
                  className: "results-heading",
                  children: [
                    (0, x.jsxs)("div", {
                      children: [
                        (0, x.jsx)("span", {
                          className: "step",
                          children: "04",
                        }),
                        (0, x.jsx)("h2", { children: "Simulation Results" }),
                        (0, x.jsx)("p", {
                          children:
                            "Curves show normalized density; endpoint composition uses restored actual biomass.",
                        }),
                      ],
                    }),
                    (0, x.jsx)("div", {
                      className: "result-legend",
                      children: e.map((e) =>
                        (0, x.jsxs)(
                          "span",
                          {
                            children: [
                              (0, x.jsx)("i", {
                                style: { background: e.color },
                              }),
                              e.name,
                            ],
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, x.jsxs)("div", {
                  className: "results-grid",
                  children: [
                    (0, x.jsxs)("article", {
                      className: "result-card chart-card",
                      children: [
                        (0, x.jsxs)("div", {
                          className: "result-title",
                          children: [
                            (0, x.jsx)("h3", { children: "Community Dynamics" }),
                            (0, x.jsxs)("span", {
                              children: [
                                "x",
                                (0, x.jsx)("sub", { children: "i" }),
                                " = B",
                                (0, x.jsx)("sub", { children: "i" }),
                                "/K",
                                (0, x.jsx)("sub", { children: "i" }),
                              ],
                            }),
                          ],
                        }),
                        (0, x.jsx)(P, { result: g, species: e }),
                        g.warning &&
                          (0, x.jsxs)("div", {
                            className: "simulation-warning",
                            children: ["! ", g.warning],
                          }),
                      ],
                    }),
                    (0, x.jsxs)("article", {
                      className: "result-card endpoint-card",
                      children: [
                        (0, x.jsxs)("div", {
                          className: "result-title",
                          children: [
                            (0, x.jsx)("h3", {
                              children: "Endpoint Biomass and Relative Abundance",
                            }),
                            (0, x.jsxs)("span", {
                              children: [
                                "B",
                                (0, x.jsx)("sub", { children: "i" }),
                                " = K",
                                (0, x.jsx)("sub", { children: "i" }),
                                "x",
                                (0, x.jsx)("sub", { children: "i" }),
                              ],
                            }),
                          ],
                        }),
                        (0, x.jsxs)("div", {
                          className: "endpoint-pie",
                          children: [
                            (0, x.jsx)(z, { species: e, values: U }),
                            (0, x.jsx)("div", {
                              className: "pie-legend",
                              children: e.map((e, t) => {
                                let n = H > 0 ? (U[t] / H) * 100 : 0;
                                return (0, x.jsxs)(
                                  "div",
                                  {
                                    className: "pie-legend-row",
                                    children: [
                                      (0, x.jsx)("span", {
                                        className: "species-dot",
                                        style: { background: e.color },
                                      }),
                                      (0, x.jsxs)("span", {
                                        children: [
                                          (0, x.jsx)("strong", {
                                            children: e.name,
                                          }),
                                          (0, x.jsxs)("small", {
                                            children: ["B = ", C(U[t])],
                                          }),
                                        ],
                                      }),
                                      (0, x.jsxs)("b", {
                                        children: [C(n), "%"],
                                      }),
                                    ],
                                  },
                                  e.id,
                                );
                              }),
                            }),
                          ],
                        }),
                        (0, x.jsxs)("div", {
                          className: "endpoint-note",
                          children: [
                            "Relative Abundance p",
                            (0, x.jsx)("sub", { children: "i" }),
                            " = K",
                            (0, x.jsx)("sub", { children: "i" }),
                            "x",
                            (0, x.jsx)("sub", { children: "i" }),
                            " / Σ",
                            (0, x.jsx)("sub", { children: "j" }),
                            "K",
                            (0, x.jsx)("sub", { children: "j" }),
                            "x",
                            (0, x.jsx)("sub", { children: "j" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, x.jsxs)("footer", {
              children: [
                (0, x.jsx)("span", {
                  children:
                    "IMSynCom · Integrated Modeling Platform for Synthetic Microbial Communities",
                }),
                (0, x.jsx)("span", {
                  children: "Normalized variables, matrix orientation, and output conversion remain consistent throughout the workflow",
                }),
              ],
            }),
          ],
        });
      }, {}),
    }),
  );
})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
