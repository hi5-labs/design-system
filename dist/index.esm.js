import * as s from "react";
import Ee, { forwardRef as fa, createElement as on, useLayoutEffect as Wl, useState as Gl, useEffect as pa } from "react";
import * as ir from "react-dom";
import Hl from "react-dom";
var Vt = { exports: {} }, Rt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Co;
function zl() {
  if (Co) return Rt;
  Co = 1;
  var e = Ee, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(c, d, u) {
    var f, p = {}, h = null, g = null;
    u !== void 0 && (h = "" + u), d.key !== void 0 && (h = "" + d.key), d.ref !== void 0 && (g = d.ref);
    for (f in d) n.call(d, f) && !a.hasOwnProperty(f) && (p[f] = d[f]);
    if (c && c.defaultProps) for (f in d = c.defaultProps, d) p[f] === void 0 && (p[f] = d[f]);
    return { $$typeof: t, type: c, key: h, ref: g, props: p, _owner: o.current };
  }
  return Rt.Fragment = r, Rt.jsx = i, Rt.jsxs = i, Rt;
}
var Et = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var So;
function Ul() {
  return So || (So = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Ee, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), b = Symbol.iterator, m = "@@iterator";
    function v(x) {
      if (x === null || typeof x != "object")
        return null;
      var N = b && x[b] || x[m];
      return typeof N == "function" ? N : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(x) {
      {
        for (var N = arguments.length, A = new Array(N > 1 ? N - 1 : 0), $ = 1; $ < N; $++)
          A[$ - 1] = arguments[$];
        C("error", x, A);
      }
    }
    function C(x, N, A) {
      {
        var $ = w.ReactDebugCurrentFrame, J = $.getStackAddendum();
        J !== "" && (N += "%s", A = A.concat([J]));
        var te = A.map(function(q) {
          return String(q);
        });
        te.unshift("Warning: " + N), Function.prototype.apply.call(console[x], console, te);
      }
    }
    var S = !1, E = !1, k = !1, _ = !1, I = !1, W;
    W = Symbol.for("react.module.reference");
    function V(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === n || x === a || I || x === o || x === u || x === f || _ || x === g || S || E || k || typeof x == "object" && x !== null && (x.$$typeof === h || x.$$typeof === p || x.$$typeof === i || x.$$typeof === c || x.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === W || x.getModuleId !== void 0));
    }
    function z(x, N, A) {
      var $ = x.displayName;
      if ($)
        return $;
      var J = N.displayName || N.name || "";
      return J !== "" ? A + "(" + J + ")" : A;
    }
    function O(x) {
      return x.displayName || "Context";
    }
    function B(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case c:
            var N = x;
            return O(N) + ".Consumer";
          case i:
            var A = x;
            return O(A._context) + ".Provider";
          case d:
            return z(x, x.render, "ForwardRef");
          case p:
            var $ = x.displayName || null;
            return $ !== null ? $ : B(x.type) || "Memo";
          case h: {
            var J = x, te = J._payload, q = J._init;
            try {
              return B(q(te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, K = 0, L, H, j, P, ee, Q, pe;
    function xe() {
    }
    xe.__reactDisabledLog = !0;
    function me() {
      {
        if (K === 0) {
          L = console.log, H = console.info, j = console.warn, P = console.error, ee = console.group, Q = console.groupCollapsed, pe = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: xe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        K++;
      }
    }
    function Se() {
      {
        if (K--, K === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, x, {
              value: L
            }),
            info: F({}, x, {
              value: H
            }),
            warn: F({}, x, {
              value: j
            }),
            error: F({}, x, {
              value: P
            }),
            group: F({}, x, {
              value: ee
            }),
            groupCollapsed: F({}, x, {
              value: Q
            }),
            groupEnd: F({}, x, {
              value: pe
            })
          });
        }
        K < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = w.ReactCurrentDispatcher, M;
    function X(x, N, A) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (J) {
            var $ = J.stack.trim().match(/\n( *(at )?)/);
            M = $ && $[1] || "";
          }
        return `
` + M + x;
      }
    }
    var ce = !1, Z;
    {
      var re = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new re();
    }
    function oe(x, N) {
      if (!x || ce)
        return "";
      {
        var A = Z.get(x);
        if (A !== void 0)
          return A;
      }
      var $;
      ce = !0;
      var J = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var te;
      te = le.current, le.current = null, me();
      try {
        if (N) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (he) {
              $ = he;
            }
            Reflect.construct(x, [], q);
          } else {
            try {
              q.call();
            } catch (he) {
              $ = he;
            }
            x.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (he) {
            $ = he;
          }
          x();
        }
      } catch (he) {
        if (he && $ && typeof he.stack == "string") {
          for (var Y = he.stack.split(`
`), de = $.stack.split(`
`), ae = Y.length - 1, se = de.length - 1; ae >= 1 && se >= 0 && Y[ae] !== de[se]; )
            se--;
          for (; ae >= 1 && se >= 0; ae--, se--)
            if (Y[ae] !== de[se]) {
              if (ae !== 1 || se !== 1)
                do
                  if (ae--, se--, se < 0 || Y[ae] !== de[se]) {
                    var ye = `
` + Y[ae].replace(" at new ", " at ");
                    return x.displayName && ye.includes("<anonymous>") && (ye = ye.replace("<anonymous>", x.displayName)), typeof x == "function" && Z.set(x, ye), ye;
                  }
                while (ae >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        ce = !1, le.current = te, Se(), Error.prepareStackTrace = J;
      }
      var lt = x ? x.displayName || x.name : "", Je = lt ? X(lt) : "";
      return typeof x == "function" && Z.set(x, Je), Je;
    }
    function ge(x, N, A) {
      return oe(x, !1);
    }
    function Le(x) {
      var N = x.prototype;
      return !!(N && N.isReactComponent);
    }
    function We(x, N, A) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return oe(x, Le(x));
      if (typeof x == "string")
        return X(x);
      switch (x) {
        case u:
          return X("Suspense");
        case f:
          return X("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case d:
            return ge(x.render);
          case p:
            return We(x.type, N, A);
          case h: {
            var $ = x, J = $._payload, te = $._init;
            try {
              return We(te(J), N, A);
            } catch {
            }
          }
        }
      return "";
    }
    var Fe = Object.prototype.hasOwnProperty, it = {}, co = w.ReactDebugCurrentFrame;
    function Bt(x) {
      if (x) {
        var N = x._owner, A = We(x.type, x._source, N ? N.type : null);
        co.setExtraStackFrame(A);
      } else
        co.setExtraStackFrame(null);
    }
    function yl(x, N, A, $, J) {
      {
        var te = Function.call.bind(Fe);
        for (var q in x)
          if (te(x, q)) {
            var Y = void 0;
            try {
              if (typeof x[q] != "function") {
                var de = Error(($ || "React class") + ": " + A + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              Y = x[q](N, q, $, A, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ae) {
              Y = ae;
            }
            Y && !(Y instanceof Error) && (Bt(J), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", A, q, typeof Y), Bt(null)), Y instanceof Error && !(Y.message in it) && (it[Y.message] = !0, Bt(J), y("Failed %s type: %s", A, Y.message), Bt(null));
          }
      }
    }
    var wl = Array.isArray;
    function $r(x) {
      return wl(x);
    }
    function Cl(x) {
      {
        var N = typeof Symbol == "function" && Symbol.toStringTag, A = N && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return A;
      }
    }
    function Sl(x) {
      try {
        return lo(x), !1;
      } catch {
        return !0;
      }
    }
    function lo(x) {
      return "" + x;
    }
    function uo(x) {
      if (Sl(x))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cl(x)), lo(x);
    }
    var fo = w.ReactCurrentOwner, Rl = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, po, mo;
    function El(x) {
      if (Fe.call(x, "ref")) {
        var N = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function Nl(x) {
      if (Fe.call(x, "key")) {
        var N = Object.getOwnPropertyDescriptor(x, "key").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function _l(x, N) {
      typeof x.ref == "string" && fo.current;
    }
    function Pl(x, N) {
      {
        var A = function() {
          po || (po = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        A.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: A,
          configurable: !0
        });
      }
    }
    function Tl(x, N) {
      {
        var A = function() {
          mo || (mo = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        A.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: A,
          configurable: !0
        });
      }
    }
    var Al = function(x, N, A, $, J, te, q) {
      var Y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: x,
        key: N,
        ref: A,
        props: q,
        // Record the component responsible for creating this element.
        _owner: te
      };
      return Y._store = {}, Object.defineProperty(Y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.defineProperty(Y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: J
      }), Object.freeze && (Object.freeze(Y.props), Object.freeze(Y)), Y;
    };
    function Ml(x, N, A, $, J) {
      {
        var te, q = {}, Y = null, de = null;
        A !== void 0 && (uo(A), Y = "" + A), Nl(N) && (uo(N.key), Y = "" + N.key), El(N) && (de = N.ref, _l(N, J));
        for (te in N)
          Fe.call(N, te) && !Rl.hasOwnProperty(te) && (q[te] = N[te]);
        if (x && x.defaultProps) {
          var ae = x.defaultProps;
          for (te in ae)
            q[te] === void 0 && (q[te] = ae[te]);
        }
        if (Y || de) {
          var se = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          Y && Pl(q, se), de && Tl(q, se);
        }
        return Al(x, Y, de, J, $, fo.current, q);
      }
    }
    var Br = w.ReactCurrentOwner, go = w.ReactDebugCurrentFrame;
    function ct(x) {
      if (x) {
        var N = x._owner, A = We(x.type, x._source, N ? N.type : null);
        go.setExtraStackFrame(A);
      } else
        go.setExtraStackFrame(null);
    }
    var Vr;
    Vr = !1;
    function Wr(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function ho() {
      {
        if (Br.current) {
          var x = B(Br.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function kl(x) {
      return "";
    }
    var vo = {};
    function Il(x) {
      {
        var N = ho();
        if (!N) {
          var A = typeof x == "string" ? x : x.displayName || x.name;
          A && (N = `

Check the top-level render call using <` + A + ">.");
        }
        return N;
      }
    }
    function bo(x, N) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var A = Il(N);
        if (vo[A])
          return;
        vo[A] = !0;
        var $ = "";
        x && x._owner && x._owner !== Br.current && ($ = " It was passed a child from " + B(x._owner.type) + "."), ct(x), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', A, $), ct(null);
      }
    }
    function xo(x, N) {
      {
        if (typeof x != "object")
          return;
        if ($r(x))
          for (var A = 0; A < x.length; A++) {
            var $ = x[A];
            Wr($) && bo($, N);
          }
        else if (Wr(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var J = v(x);
          if (typeof J == "function" && J !== x.entries)
            for (var te = J.call(x), q; !(q = te.next()).done; )
              Wr(q.value) && bo(q.value, N);
        }
      }
    }
    function Ol(x) {
      {
        var N = x.type;
        if (N == null || typeof N == "string")
          return;
        var A;
        if (typeof N == "function")
          A = N.propTypes;
        else if (typeof N == "object" && (N.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        N.$$typeof === p))
          A = N.propTypes;
        else
          return;
        if (A) {
          var $ = B(N);
          yl(A, x.props, "prop", $, x);
        } else if (N.PropTypes !== void 0 && !Vr) {
          Vr = !0;
          var J = B(N);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", J || "Unknown");
        }
        typeof N.getDefaultProps == "function" && !N.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jl(x) {
      {
        for (var N = Object.keys(x.props), A = 0; A < N.length; A++) {
          var $ = N[A];
          if ($ !== "children" && $ !== "key") {
            ct(x), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), ct(null);
            break;
          }
        }
        x.ref !== null && (ct(x), y("Invalid attribute `ref` supplied to `React.Fragment`."), ct(null));
      }
    }
    var yo = {};
    function wo(x, N, A, $, J, te) {
      {
        var q = V(x);
        if (!q) {
          var Y = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (Y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = kl();
          de ? Y += de : Y += ho();
          var ae;
          x === null ? ae = "null" : $r(x) ? ae = "array" : x !== void 0 && x.$$typeof === t ? (ae = "<" + (B(x.type) || "Unknown") + " />", Y = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof x, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, Y);
        }
        var se = Ml(x, N, A, J, te);
        if (se == null)
          return se;
        if (q) {
          var ye = N.children;
          if (ye !== void 0)
            if ($)
              if ($r(ye)) {
                for (var lt = 0; lt < ye.length; lt++)
                  xo(ye[lt], x);
                Object.freeze && Object.freeze(ye);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xo(ye, x);
        }
        if (Fe.call(N, "key")) {
          var Je = B(x), he = Object.keys(N).filter(function(Vl) {
            return Vl !== "key";
          }), Gr = he.length > 0 ? "{key: someKey, " + he.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!yo[Je + Gr]) {
            var Bl = he.length > 0 ? "{" + he.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Gr, Je, Bl, Je), yo[Je + Gr] = !0;
          }
        }
        return x === n ? jl(se) : Ol(se), se;
      }
    }
    function Dl(x, N, A) {
      return wo(x, N, A, !0);
    }
    function Ll(x, N, A) {
      return wo(x, N, A, !1);
    }
    var Fl = Ll, $l = Dl;
    Et.Fragment = n, Et.jsx = Fl, Et.jsxs = $l;
  })()), Et;
}
var Ro;
function Kl() {
  return Ro || (Ro = 1, process.env.NODE_ENV === "production" ? Vt.exports = zl() : Vt.exports = Ul()), Vt.exports;
}
var l = Kl();
function Eo(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function cr(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const a = Eo(o, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const a = n[o];
          typeof a == "function" ? a() : Eo(e[o], null);
        }
      };
  };
}
function U(...e) {
  return s.useCallback(cr(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  const t = /* @__PURE__ */ Yl(e), r = s.forwardRef((n, o) => {
    const { children: a, ...i } = n, c = s.Children.toArray(a), d = c.find(Xl);
    if (d) {
      const u = d.props.children, f = c.map((p) => p === d ? s.Children.count(u) > 1 ? s.Children.only(null) : s.isValidElement(u) ? u.props.children : null : p);
      return /* @__PURE__ */ l.jsx(t, { ...i, ref: o, children: s.isValidElement(u) ? s.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ l.jsx(t, { ...i, ref: o, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
var ot = /* @__PURE__ */ Qe("Slot");
// @__NO_SIDE_EFFECTS__
function Yl(e) {
  const t = s.forwardRef((r, n) => {
    const { children: o, ...a } = r;
    if (s.isValidElement(o)) {
      const i = Jl(o), c = Zl(a, o.props);
      return o.type !== s.Fragment && (c.ref = n ? cr(n, i) : i), s.cloneElement(o, c);
    }
    return s.Children.count(o) > 1 ? s.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ma = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function ql(e) {
  const t = ({ children: r }) => /* @__PURE__ */ l.jsx(l.Fragment, { children: r });
  return t.displayName = `${e}.Slottable`, t.__radixId = ma, t;
}
function Xl(e) {
  return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ma;
}
function Zl(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? o && a ? r[n] = (...c) => {
      const d = a(...c);
      return o(...c), d;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...a } : n === "className" && (r[n] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Jl(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function ga(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = ga(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ha() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = ga(e)) && (n && (n += " "), n += t);
  return n;
}
const No = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, _o = ha, qe = (e, t) => (r) => {
  var n;
  if (t?.variants == null) return _o(e, r?.class, r?.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((u) => {
    const f = r?.[u], p = a?.[u];
    if (f === null) return null;
    const h = No(f) || No(p);
    return o[u][h];
  }), c = r && Object.entries(r).reduce((u, f) => {
    let [p, h] = f;
    return h === void 0 || (u[p] = h), u;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, f) => {
    let { class: p, className: h, ...g } = f;
    return Object.entries(g).every((b) => {
      let [m, v] = b;
      return Array.isArray(v) ? v.includes({
        ...a,
        ...c
      }[m]) : {
        ...a,
        ...c
      }[m] === v;
    }) ? [
      ...u,
      p,
      h
    ] : u;
  }, []);
  return _o(e, i, d, r?.class, r?.className);
}, Cn = "-", Ql = (e) => {
  const t = td(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const c = i.split(Cn);
      return c[0] === "" && c.length !== 1 && c.shift(), va(c, t) || ed(i);
    },
    getConflictingClassGroupIds: (i, c) => {
      const d = r[i] || [];
      return c && n[i] ? [...d, ...n[i]] : d;
    }
  };
}, va = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? va(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Cn);
  return t.validators.find(({
    validator: i
  }) => i(a))?.classGroupId;
}, Po = /^\[(.+)\]$/, ed = (e) => {
  if (Po.test(e)) {
    const t = Po.exec(e)[1], r = t?.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, td = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return nd(Object.entries(e.classGroups), r).forEach(([a, i]) => {
    an(i, n, a, t);
  }), n;
}, an = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : To(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (rd(o)) {
        an(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      an(i, To(t, a), r, n);
    });
  });
}, To = (e, t) => {
  let r = e;
  return t.split(Cn).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, rd = (e) => e.isThemeGetter, nd = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([i, c]) => [t + i, c])) : a);
  return [r, o];
}) : e, od = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (a, i) => {
    r.set(a, i), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let i = r.get(a);
      if (i !== void 0)
        return i;
      if ((i = n.get(a)) !== void 0)
        return o(a, i), i;
    },
    set(a, i) {
      r.has(a) ? r.set(a, i) : o(a, i);
    }
  };
}, ba = "!", ad = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], a = t.length, i = (c) => {
    const d = [];
    let u = 0, f = 0, p;
    for (let v = 0; v < c.length; v++) {
      let w = c[v];
      if (u === 0) {
        if (w === o && (n || c.slice(v, v + a) === t)) {
          d.push(c.slice(f, v)), f = v + a;
          continue;
        }
        if (w === "/") {
          p = v;
          continue;
        }
      }
      w === "[" ? u++ : w === "]" && u--;
    }
    const h = d.length === 0 ? c : c.substring(f), g = h.startsWith(ba), b = g ? h.substring(1) : h, m = p && p > f ? p - f : void 0;
    return {
      modifiers: d,
      hasImportantModifier: g,
      baseClassName: b,
      maybePostfixModifierPosition: m
    };
  };
  return r ? (c) => r({
    className: c,
    parseClassName: i
  }) : i;
}, sd = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, id = (e) => ({
  cache: od(e.cacheSize),
  parseClassName: ad(e),
  ...Ql(e)
}), cd = /\s+/, ld = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, a = [], i = e.trim().split(cd);
  let c = "";
  for (let d = i.length - 1; d >= 0; d -= 1) {
    const u = i[d], {
      modifiers: f,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: g
    } = r(u);
    let b = !!g, m = n(b ? h.substring(0, g) : h);
    if (!m) {
      if (!b) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (m = n(h), !m) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      b = !1;
    }
    const v = sd(f).join(":"), w = p ? v + ba : v, y = w + m;
    if (a.includes(y))
      continue;
    a.push(y);
    const C = o(m, b);
    for (let S = 0; S < C.length; ++S) {
      const E = C[S];
      a.push(w + E);
    }
    c = u + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function dd() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = xa(t)) && (n && (n += " "), n += r);
  return n;
}
const xa = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = xa(e[n])) && (r && (r += " "), r += t);
  return r;
};
function ud(e, ...t) {
  let r, n, o, a = i;
  function i(d) {
    const u = t.reduce((f, p) => p(f), e());
    return r = id(u), n = r.cache.get, o = r.cache.set, a = c, c(d);
  }
  function c(d) {
    const u = n(d);
    if (u)
      return u;
    const f = ld(d, r);
    return o(d, f), f;
  }
  return function() {
    return a(dd.apply(null, arguments));
  };
}
const ne = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, ya = /^\[(?:([a-z-]+):)?(.+)\]$/i, fd = /^\d+\/\d+$/, pd = /* @__PURE__ */ new Set(["px", "full", "screen"]), md = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gd = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, hd = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, vd = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, bd = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, $e = (e) => pt(e) || pd.has(e) || fd.test(e), Ge = (e) => bt(e, "length", Nd), pt = (e) => !!e && !Number.isNaN(Number(e)), Hr = (e) => bt(e, "number", pt), Nt = (e) => !!e && Number.isInteger(Number(e)), xd = (e) => e.endsWith("%") && pt(e.slice(0, -1)), G = (e) => ya.test(e), He = (e) => md.test(e), yd = /* @__PURE__ */ new Set(["length", "size", "percentage"]), wd = (e) => bt(e, yd, wa), Cd = (e) => bt(e, "position", wa), Sd = /* @__PURE__ */ new Set(["image", "url"]), Rd = (e) => bt(e, Sd, Pd), Ed = (e) => bt(e, "", _d), _t = () => !0, bt = (e, t, r) => {
  const n = ya.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, Nd = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  gd.test(e) && !hd.test(e)
), wa = () => !1, _d = (e) => vd.test(e), Pd = (e) => bd.test(e), Td = () => {
  const e = ne("colors"), t = ne("spacing"), r = ne("blur"), n = ne("brightness"), o = ne("borderColor"), a = ne("borderRadius"), i = ne("borderSpacing"), c = ne("borderWidth"), d = ne("contrast"), u = ne("grayscale"), f = ne("hueRotate"), p = ne("invert"), h = ne("gap"), g = ne("gradientColorStops"), b = ne("gradientColorStopPositions"), m = ne("inset"), v = ne("margin"), w = ne("opacity"), y = ne("padding"), C = ne("saturate"), S = ne("scale"), E = ne("sepia"), k = ne("skew"), _ = ne("space"), I = ne("translate"), W = () => ["auto", "contain", "none"], V = () => ["auto", "hidden", "clip", "visible", "scroll"], z = () => ["auto", G, t], O = () => [G, t], B = () => ["", $e, Ge], F = () => ["auto", pt, G], K = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], L = () => ["solid", "dashed", "dotted", "double", "none"], H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], j = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], P = () => ["", "0", G], ee = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Q = () => [pt, G];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [_t],
      spacing: [$e, Ge],
      blur: ["none", "", He, G],
      brightness: Q(),
      borderColor: [e],
      borderRadius: ["none", "", "full", He, G],
      borderSpacing: O(),
      borderWidth: B(),
      contrast: Q(),
      grayscale: P(),
      hueRotate: Q(),
      invert: P(),
      gap: O(),
      gradientColorStops: [e],
      gradientColorStopPositions: [xd, Ge],
      inset: z(),
      margin: z(),
      opacity: Q(),
      padding: O(),
      saturate: Q(),
      scale: Q(),
      sepia: P(),
      skew: Q(),
      space: O(),
      translate: O()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", G]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [He]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ee()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ee()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...K(), G]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: V()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": V()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": V()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: W()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": W()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": W()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Nt, G]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: z()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", G]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: P()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: P()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Nt, G]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [_t]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Nt, G]
        }, G]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [_t]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Nt, G]
        }, G]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", G]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", G]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...j()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...j(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...j(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [v]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [v]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [v]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [v]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [v]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [v]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [v]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [v]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [v]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [_]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [_]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [G, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [G, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [He]
        }, He]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [G, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", He, Ge]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Hr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [_t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", G]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", pt, Hr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", $e, G]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", G]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", G]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [w]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [w]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...L(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", $e, Ge]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", $e, G]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: O()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", G]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [w]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...K(), Cd]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", wd]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Rd]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [b]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [g]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [c]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [c]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [c]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [c]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [c]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [c]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [c]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [c]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [c]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [w]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...L(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [c]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [c]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [w]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: L()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...L()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [$e, G]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [$e, Ge]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: B()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [w]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [$e, Ge]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", He, Ed]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [_t]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [w]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...H(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": H()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", He, G]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [E]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [w]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [E]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", G]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Q()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", G]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Q()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", G]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [S]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [S]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [S]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Nt, G]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [I]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [I]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [k]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [k]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", G]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": O()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": O()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": O()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": O()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": O()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": O()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": O()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": O()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": O()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": O()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": O()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": O()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": O()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": O()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": O()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": O()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": O()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": O()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", G]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [$e, Ge, Hr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Ad = /* @__PURE__ */ ud(Td);
function R(...e) {
  return Ad(ha(e));
}
function kb(e) {
  return e >= 0.9 ? "rgba(224, 255, 232, 1)" : e < 0.9 && e >= 0.5 ? "rgba(255, 248, 214, 1)" : e < 0.5 && e >= 0.4 ? "rgba(255, 237, 214, 1)" : "rgba(255, 218, 214, 1)";
}
function Ib(e) {
  return e >= 0.9 ? "rgba(48, 95, 56, 1)" : e < 0.9 && e >= 0.5 ? "rgba(241, 216, 51, 1)" : e < 0.5 && e >= 0.4 ? "rgba(230, 152, 51, 1)" : "rgba(138, 48, 32, 1)";
}
const Ob = (e) => {
  const t = parseFloat(e.replace("%", ""));
  return isNaN(t) ? "rgba(180, 180, 180, 1)" : t >= 90 ? "rgba(40, 167, 69, 1)" : t >= 50 ? "rgba(234, 179, 8, 1)" : t >= 40 ? "rgba(249, 115, 22, 1)" : "rgba(239, 68, 68, 1)";
};
function Md(e) {
  if (!e || e === "N/A")
    return "N/A";
  const [t, r] = e.split(" ");
  if (!t || !r)
    return "N/A";
  const [n, o, a] = t.split("-").map(Number), [i, c, d] = r.split(":").map(Number), u = new Date(n, o - 1, a, i, c, d), f = /* @__PURE__ */ new Date(), p = f.getTime() - u.getTime(), h = Math.floor(p / 1e3), g = Math.floor(h / 60), b = Math.floor(g / 60);
  if (g < 1) return "Just now";
  if (g < 60) return `${g} min${g === 1 ? "" : "s"} ago`;
  if (b < 24) return `${b} hour${b === 1 ? "" : "s"} ago`;
  const m = new Date(f);
  if (m.setDate(f.getDate() - 1), u.getDate() === m.getDate() && u.getMonth() === m.getMonth() && u.getFullYear() === m.getFullYear())
    return "Yesterday";
  const w = { month: "long", day: "numeric" };
  return u.getFullYear() !== f.getFullYear() && (w.year = "numeric"), u.toLocaleDateString("en-US", w);
}
const kd = {
  education: 0.15,
  priorEmployment: 0.15,
  projectMatch: {
    experience: 0.2,
    seniority: 0.15,
    topRequirements: 0.2
  },
  skills: 0.1,
  upworkExperience: 0.05
};
function jb(e, t = kd) {
  const r = e.education.confidence_score * t.education, n = e.prior_employment.confidence_score * t.priorEmployment, o = e.project_match.experience_match.score * t.projectMatch.experience, a = e.project_match.seniority_match.score * t.projectMatch.seniority, c = e.project_match.top_requirements_match.reduce(
    (h, g) => h + g.match_score,
    0
  ) / e.project_match.top_requirements_match.length * t.projectMatch.topRequirements, u = e.skills.reduce(
    (h, g) => h + g.confidence_score,
    0
  ) / e.skills.length * t.skills, f = e.upwork_experience.confidence_score * t.upworkExperience, p = r + n + o + a + c + u + f;
  return Math.min(Math.max(p, 0), 1);
}
const Id = qe(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90",
        destructive: "bg-red-500 text-gray-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90",
        outline: "border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",
        ghost: "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50",
        link: "text-gray-900 underline-offset-4 hover:underline dark:text-gray-50"
      },
      size: {
        default: "h-12 pl-4 pr-4 rounded-[30px]",
        sm: "h-8 pl-4 pr-4 rounded-[20px]",
        lg: "h-14 pl-6 pr-6 rounded-[40px]",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ca = s.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...o }, a) => {
    const i = n ? ot : "button";
    return /* @__PURE__ */ l.jsx(
      i,
      {
        className: R(Id({ variant: t, size: r, className: e })),
        ref: a,
        ...o
      }
    );
  }
);
Ca.displayName = "Button";
function Od(e, t) {
  const r = s.createContext(t), n = (a) => {
    const { children: i, ...c } = a, d = s.useMemo(() => c, Object.values(c));
    return /* @__PURE__ */ l.jsx(r.Provider, { value: d, children: i });
  };
  n.displayName = e + "Provider";
  function o(a) {
    const i = s.useContext(r);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [n, o];
}
function ue(e, t = []) {
  let r = [];
  function n(a, i) {
    const c = s.createContext(i), d = r.length;
    r = [...r, i];
    const u = (p) => {
      const { scope: h, children: g, ...b } = p, m = h?.[e]?.[d] || c, v = s.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ l.jsx(m.Provider, { value: v, children: g });
    };
    u.displayName = a + "Provider";
    function f(p, h) {
      const g = h?.[e]?.[d] || c, b = s.useContext(g);
      if (b) return b;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [u, f];
  }
  const o = () => {
    const a = r.map((i) => s.createContext(i));
    return function(c) {
      const d = c?.[e] || a;
      return s.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: d } }),
        [c, d]
      );
    };
  };
  return o.scopeName = e, [n, jd(o, ...t)];
}
function jd(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = n.reduce((c, { useScope: d, scopeName: u }) => {
        const p = d(a)[`__scope${u}`];
        return { ...c, ...p };
      }, {});
      return s.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function T(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e?.(o), r === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var ie = globalThis?.document ? s.useLayoutEffect : () => {
}, Dd = s[" useInsertionEffect ".trim().toString()] || ie;
function Oe({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, a, i] = Ld({
    defaultProp: t,
    onChange: r
  }), c = e !== void 0, d = c ? e : o;
  {
    const f = s.useRef(e !== void 0);
    s.useEffect(() => {
      const p = f.current;
      p !== c && console.warn(
        `${n} is changing from ${p ? "controlled" : "uncontrolled"} to ${c ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = c;
    }, [c, n]);
  }
  const u = s.useCallback(
    (f) => {
      if (c) {
        const p = Fd(f) ? f(e) : f;
        p !== e && i.current?.(p);
      } else
        a(f);
    },
    [c, e, a, i]
  );
  return [d, u];
}
function Ld({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = s.useState(e), o = s.useRef(r), a = s.useRef(t);
  return Dd(() => {
    a.current = t;
  }, [t]), s.useEffect(() => {
    o.current !== r && (a.current?.(r), o.current = r);
  }, [r, o]), [r, n, a];
}
function Fd(e) {
  return typeof e == "function";
}
function lr(e) {
  const t = s.useRef({ value: e, previous: e });
  return s.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function dr(e) {
  const [t, r] = s.useState(void 0);
  return ie(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let i, c;
        if ("borderBoxSize" in a) {
          const d = a.borderBoxSize, u = Array.isArray(d) ? d[0] : d;
          i = u.inlineSize, c = u.blockSize;
        } else
          i = e.offsetWidth, c = e.offsetHeight;
        r({ width: i, height: c });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
function $d(e, t) {
  return s.useReducer((r, n) => t[r][n] ?? r, e);
}
var Ce = (e) => {
  const { present: t, children: r } = e, n = Bd(t), o = typeof r == "function" ? r({ present: n.isPresent }) : s.Children.only(r), a = U(n.ref, Vd(o));
  return typeof r == "function" || n.isPresent ? s.cloneElement(o, { ref: a }) : null;
};
Ce.displayName = "Presence";
function Bd(e) {
  const [t, r] = s.useState(), n = s.useRef(null), o = s.useRef(e), a = s.useRef("none"), i = e ? "mounted" : "unmounted", [c, d] = $d(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return s.useEffect(() => {
    const u = Wt(n.current);
    a.current = c === "mounted" ? u : "none";
  }, [c]), ie(() => {
    const u = n.current, f = o.current;
    if (f !== e) {
      const h = a.current, g = Wt(u);
      e ? d("MOUNT") : g === "none" || u?.display === "none" ? d("UNMOUNT") : d(f && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, d]), ie(() => {
    if (t) {
      let u;
      const f = t.ownerDocument.defaultView ?? window, p = (g) => {
        const m = Wt(n.current).includes(CSS.escape(g.animationName));
        if (g.target === t && m && (d("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, h = (g) => {
        g.target === t && (a.current = Wt(n.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        f.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      d("ANIMATION_END");
  }, [t, d]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: s.useCallback((u) => {
      n.current = u ? getComputedStyle(u) : null, r(u);
    }, [])
  };
}
function Wt(e) {
  return e?.animationName || "none";
}
function Vd(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Wd = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], D = Wd.reduce((e, t) => {
  const r = /* @__PURE__ */ Qe(`Primitive.${t}`), n = s.forwardRef((o, a) => {
    const { asChild: i, ...c } = o, d = i ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l.jsx(d, { ...c, ref: a });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Sa(e, t) {
  e && ir.flushSync(() => e.dispatchEvent(t));
}
var ur = "Checkbox", [Gd] = ue(ur), [Hd, Sn] = Gd(ur);
function zd(e) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: n,
    defaultChecked: o,
    disabled: a,
    form: i,
    name: c,
    onCheckedChange: d,
    required: u,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: p
  } = e, [h, g] = Oe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: d,
    caller: ur
  }), [b, m] = s.useState(null), [v, w] = s.useState(null), y = s.useRef(!1), C = b ? !!i || !!b.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), S = {
    checked: h,
    disabled: a,
    setChecked: g,
    control: b,
    setControl: m,
    name: c,
    form: i,
    value: f,
    hasConsumerStoppedPropagationRef: y,
    required: u,
    defaultChecked: Ue(o) ? !1 : o,
    isFormControl: C,
    bubbleInput: v,
    setBubbleInput: w
  };
  return /* @__PURE__ */ l.jsx(
    Hd,
    {
      scope: t,
      ...S,
      children: Ud(p) ? p(S) : n
    }
  );
}
var Ra = "CheckboxTrigger", Ea = s.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: r, ...n }, o) => {
    const {
      control: a,
      value: i,
      disabled: c,
      checked: d,
      required: u,
      setControl: f,
      setChecked: p,
      hasConsumerStoppedPropagationRef: h,
      isFormControl: g,
      bubbleInput: b
    } = Sn(Ra, e), m = U(o, f), v = s.useRef(d);
    return s.useEffect(() => {
      const w = a?.form;
      if (w) {
        const y = () => p(v.current);
        return w.addEventListener("reset", y), () => w.removeEventListener("reset", y);
      }
    }, [a, p]), /* @__PURE__ */ l.jsx(
      D.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Ue(d) ? "mixed" : d,
        "aria-required": u,
        "data-state": Aa(d),
        "data-disabled": c ? "" : void 0,
        disabled: c,
        value: i,
        ...n,
        ref: m,
        onKeyDown: T(t, (w) => {
          w.key === "Enter" && w.preventDefault();
        }),
        onClick: T(r, (w) => {
          p((y) => Ue(y) ? !0 : !y), b && g && (h.current = w.isPropagationStopped(), h.current || w.stopPropagation());
        })
      }
    );
  }
);
Ea.displayName = Ra;
var Rn = s.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: r,
      name: n,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: c,
      value: d,
      onCheckedChange: u,
      form: f,
      ...p
    } = e;
    return /* @__PURE__ */ l.jsx(
      zd,
      {
        __scopeCheckbox: r,
        checked: o,
        defaultChecked: a,
        disabled: c,
        required: i,
        onCheckedChange: u,
        name: n,
        form: f,
        value: d,
        internal_do_not_use_render: ({ isFormControl: h }) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            Ea,
            {
              ...p,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          h && /* @__PURE__ */ l.jsx(
            Ta,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
Rn.displayName = ur;
var Na = "CheckboxIndicator", _a = s.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, a = Sn(Na, r);
    return /* @__PURE__ */ l.jsx(
      Ce,
      {
        present: n || Ue(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ l.jsx(
          D.span,
          {
            "data-state": Aa(a.checked),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
_a.displayName = Na;
var Pa = "CheckboxBubbleInput", Ta = s.forwardRef(
  ({ __scopeCheckbox: e, ...t }, r) => {
    const {
      control: n,
      hasConsumerStoppedPropagationRef: o,
      checked: a,
      defaultChecked: i,
      required: c,
      disabled: d,
      name: u,
      value: f,
      form: p,
      bubbleInput: h,
      setBubbleInput: g
    } = Sn(Pa, e), b = U(r, g), m = lr(a), v = dr(n);
    s.useEffect(() => {
      const y = h;
      if (!y) return;
      const C = window.HTMLInputElement.prototype, E = Object.getOwnPropertyDescriptor(
        C,
        "checked"
      ).set, k = !o.current;
      if (m !== a && E) {
        const _ = new Event("click", { bubbles: k });
        y.indeterminate = Ue(a), E.call(y, Ue(a) ? !1 : a), y.dispatchEvent(_);
      }
    }, [h, m, a, o]);
    const w = s.useRef(Ue(a) ? !1 : a);
    return /* @__PURE__ */ l.jsx(
      D.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i ?? w.current,
        required: c,
        disabled: d,
        name: u,
        value: f,
        form: p,
        ...t,
        tabIndex: -1,
        ref: b,
        style: {
          ...t.style,
          ...v,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
Ta.displayName = Pa;
function Ud(e) {
  return typeof e == "function";
}
function Ue(e) {
  return e === "indeterminate";
}
function Aa(e) {
  return Ue(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kd = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ma = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Yd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qd = fa(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: a,
    iconNode: i,
    ...c
  }, d) => on(
    "svg",
    {
      ref: d,
      ...Yd,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Ma("lucide", o),
      ...c
    },
    [
      ...i.map(([u, f]) => on(u, f)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = (e, t) => {
  const r = fa(
    ({ className: n, ...o }, a) => on(qd, {
      ref: a,
      iconNode: t,
      className: Ma(`lucide-${Kd(e)}`, n),
      ...o
    })
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const En = xt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ka = xt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xd = xt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zd = xt("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ia = xt("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oa = xt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Jd = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  Rn,
  {
    ref: r,
    className: R(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx(
      _a,
      {
        className: R("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ l.jsx(En, { className: "h-4 w-4" })
      }
    )
  }
));
Jd.displayName = Rn.displayName;
function Nn(e) {
  const t = e + "CollectionProvider", [r, n] = ue(t), [o, a] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (m) => {
    const { scope: v, children: w } = m, y = Ee.useRef(null), C = Ee.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ l.jsx(o, { scope: v, itemMap: C, collectionRef: y, children: w });
  };
  i.displayName = t;
  const c = e + "CollectionSlot", d = /* @__PURE__ */ Qe(c), u = Ee.forwardRef(
    (m, v) => {
      const { scope: w, children: y } = m, C = a(c, w), S = U(v, C.collectionRef);
      return /* @__PURE__ */ l.jsx(d, { ref: S, children: y });
    }
  );
  u.displayName = c;
  const f = e + "CollectionItemSlot", p = "data-radix-collection-item", h = /* @__PURE__ */ Qe(f), g = Ee.forwardRef(
    (m, v) => {
      const { scope: w, children: y, ...C } = m, S = Ee.useRef(null), E = U(v, S), k = a(f, w);
      return Ee.useEffect(() => (k.itemMap.set(S, { ref: S, ...C }), () => void k.itemMap.delete(S))), /* @__PURE__ */ l.jsx(h, { [p]: "", ref: E, children: y });
    }
  );
  g.displayName = f;
  function b(m) {
    const v = a(e + "CollectionConsumer", m);
    return Ee.useCallback(() => {
      const y = v.collectionRef.current;
      if (!y) return [];
      const C = Array.from(y.querySelectorAll(`[${p}]`));
      return Array.from(v.itemMap.values()).sort(
        (k, _) => C.indexOf(k.ref.current) - C.indexOf(_.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: i, Slot: u, ItemSlot: g },
    b,
    n
  ];
}
var Qd = s[" useId ".trim().toString()] || (() => {
}), eu = 0;
function Ne(e) {
  const [t, r] = s.useState(Qd());
  return ie(() => {
    r((n) => n ?? String(eu++));
  }, [e]), t ? `radix-${t}` : "";
}
function _e(e) {
  const t = s.useRef(e);
  return s.useEffect(() => {
    t.current = e;
  }), s.useMemo(() => (...r) => t.current?.(...r), []);
}
var tu = s.createContext(void 0);
function fr(e) {
  const t = s.useContext(tu);
  return e || t || "ltr";
}
var zr = "rovingFocusGroup.onEntryFocus", ru = { bubbles: !1, cancelable: !0 }, jt = "RovingFocusGroup", [sn, ja, nu] = Nn(jt), [ou, pr] = ue(
  jt,
  [nu]
), [au, su] = ou(jt), Da = s.forwardRef(
  (e, t) => /* @__PURE__ */ l.jsx(sn.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(sn.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(iu, { ...e, ref: t }) }) })
);
Da.displayName = jt;
var iu = s.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: o = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: c,
    onCurrentTabStopIdChange: d,
    onEntryFocus: u,
    preventScrollOnEntryFocus: f = !1,
    ...p
  } = e, h = s.useRef(null), g = U(t, h), b = fr(a), [m, v] = Oe({
    prop: i,
    defaultProp: c ?? null,
    onChange: d,
    caller: jt
  }), [w, y] = s.useState(!1), C = _e(u), S = ja(r), E = s.useRef(!1), [k, _] = s.useState(0);
  return s.useEffect(() => {
    const I = h.current;
    if (I)
      return I.addEventListener(zr, C), () => I.removeEventListener(zr, C);
  }, [C]), /* @__PURE__ */ l.jsx(
    au,
    {
      scope: r,
      orientation: n,
      dir: b,
      loop: o,
      currentTabStopId: m,
      onItemFocus: s.useCallback(
        (I) => v(I),
        [v]
      ),
      onItemShiftTab: s.useCallback(() => y(!0), []),
      onFocusableItemAdd: s.useCallback(
        () => _((I) => I + 1),
        []
      ),
      onFocusableItemRemove: s.useCallback(
        () => _((I) => I - 1),
        []
      ),
      children: /* @__PURE__ */ l.jsx(
        D.div,
        {
          tabIndex: w || k === 0 ? -1 : 0,
          "data-orientation": n,
          ...p,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: T(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: T(e.onFocus, (I) => {
            const W = !E.current;
            if (I.target === I.currentTarget && W && !w) {
              const V = new CustomEvent(zr, ru);
              if (I.currentTarget.dispatchEvent(V), !V.defaultPrevented) {
                const z = S().filter((L) => L.focusable), O = z.find((L) => L.active), B = z.find((L) => L.id === m), K = [O, B, ...z].filter(
                  Boolean
                ).map((L) => L.ref.current);
                $a(K, f);
              }
            }
            E.current = !1;
          }),
          onBlur: T(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), La = "RovingFocusGroupItem", Fa = s.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: a,
      children: i,
      ...c
    } = e, d = Ne(), u = a || d, f = su(La, r), p = f.currentTabStopId === u, h = ja(r), { onFocusableItemAdd: g, onFocusableItemRemove: b, currentTabStopId: m } = f;
    return s.useEffect(() => {
      if (n)
        return g(), () => b();
    }, [n, g, b]), /* @__PURE__ */ l.jsx(
      sn.ItemSlot,
      {
        scope: r,
        id: u,
        focusable: n,
        active: o,
        children: /* @__PURE__ */ l.jsx(
          D.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": f.orientation,
            ...c,
            ref: t,
            onMouseDown: T(e.onMouseDown, (v) => {
              n ? f.onItemFocus(u) : v.preventDefault();
            }),
            onFocus: T(e.onFocus, () => f.onItemFocus(u)),
            onKeyDown: T(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const w = du(v, f.orientation, f.dir);
              if (w !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let C = h().filter((S) => S.focusable).map((S) => S.ref.current);
                if (w === "last") C.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && C.reverse();
                  const S = C.indexOf(v.currentTarget);
                  C = f.loop ? uu(C, S + 1) : C.slice(S + 1);
                }
                setTimeout(() => $a(C));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: p, hasTabStop: m != null }) : i
          }
        )
      }
    );
  }
);
Fa.displayName = La;
var cu = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function lu(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function du(e, t, r) {
  const n = lu(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return cu[n];
}
function $a(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function uu(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Ba = Da, Va = Fa, _n = "Radio", [fu, Wa] = ue(_n), [pu, mu] = fu(_n), Ga = s.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: r,
      name: n,
      checked: o = !1,
      required: a,
      disabled: i,
      value: c = "on",
      onCheck: d,
      form: u,
      ...f
    } = e, [p, h] = s.useState(null), g = U(t, (v) => h(v)), b = s.useRef(!1), m = p ? u || !!p.closest("form") : !0;
    return /* @__PURE__ */ l.jsxs(pu, { scope: r, checked: o, disabled: i, children: [
      /* @__PURE__ */ l.jsx(
        D.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Ka(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: c,
          ...f,
          ref: g,
          onClick: T(e.onClick, (v) => {
            o || d?.(), m && (b.current = v.isPropagationStopped(), b.current || v.stopPropagation());
          })
        }
      ),
      m && /* @__PURE__ */ l.jsx(
        Ua,
        {
          control: p,
          bubbles: !b.current,
          name: n,
          value: c,
          checked: o,
          required: a,
          disabled: i,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Ga.displayName = _n;
var Ha = "RadioIndicator", za = s.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...o } = e, a = mu(Ha, r);
    return /* @__PURE__ */ l.jsx(Ce, { present: n || a.checked, children: /* @__PURE__ */ l.jsx(
      D.span,
      {
        "data-state": Ka(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
za.displayName = Ha;
var gu = "RadioBubbleInput", Ua = s.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, a) => {
    const i = s.useRef(null), c = U(i, a), d = lr(r), u = dr(t);
    return s.useEffect(() => {
      const f = i.current;
      if (!f) return;
      const p = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (d !== r && g) {
        const b = new Event("click", { bubbles: n });
        g.call(f, r), f.dispatchEvent(b);
      }
    }, [d, r, n]), /* @__PURE__ */ l.jsx(
      D.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: r,
        ...o,
        tabIndex: -1,
        ref: c,
        style: {
          ...o.style,
          ...u,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Ua.displayName = gu;
function Ka(e) {
  return e ? "checked" : "unchecked";
}
var hu = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], mr = "RadioGroup", [vu] = ue(mr, [
  pr,
  Wa
]), Ya = pr(), qa = Wa(), [bu, xu] = vu(mr), Xa = s.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: r,
      name: n,
      defaultValue: o,
      value: a,
      required: i = !1,
      disabled: c = !1,
      orientation: d,
      dir: u,
      loop: f = !0,
      onValueChange: p,
      ...h
    } = e, g = Ya(r), b = fr(u), [m, v] = Oe({
      prop: a,
      defaultProp: o ?? null,
      onChange: p,
      caller: mr
    });
    return /* @__PURE__ */ l.jsx(
      bu,
      {
        scope: r,
        name: n,
        required: i,
        disabled: c,
        value: m,
        onValueChange: v,
        children: /* @__PURE__ */ l.jsx(
          Ba,
          {
            asChild: !0,
            ...g,
            orientation: d,
            dir: b,
            loop: f,
            children: /* @__PURE__ */ l.jsx(
              D.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": d,
                "data-disabled": c ? "" : void 0,
                dir: b,
                ...h,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
Xa.displayName = mr;
var Za = "RadioGroupItem", Ja = s.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...o } = e, a = xu(Za, r), i = a.disabled || n, c = Ya(r), d = qa(r), u = s.useRef(null), f = U(t, u), p = a.value === o.value, h = s.useRef(!1);
    return s.useEffect(() => {
      const g = (m) => {
        hu.includes(m.key) && (h.current = !0);
      }, b = () => h.current = !1;
      return document.addEventListener("keydown", g), document.addEventListener("keyup", b), () => {
        document.removeEventListener("keydown", g), document.removeEventListener("keyup", b);
      };
    }, []), /* @__PURE__ */ l.jsx(
      Va,
      {
        asChild: !0,
        ...c,
        focusable: !i,
        active: p,
        children: /* @__PURE__ */ l.jsx(
          Ga,
          {
            disabled: i,
            required: a.required,
            checked: p,
            ...d,
            ...o,
            name: a.name,
            ref: f,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: T((g) => {
              g.key === "Enter" && g.preventDefault();
            }),
            onFocus: T(o.onFocus, () => {
              h.current && u.current?.click();
            })
          }
        )
      }
    );
  }
);
Ja.displayName = Za;
var yu = "RadioGroupIndicator", Qa = s.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, o = qa(r);
    return /* @__PURE__ */ l.jsx(za, { ...o, ...n, ref: t });
  }
);
Qa.displayName = yu;
var es = Xa, ts = Ja, wu = Qa;
const Cu = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  es,
  {
    className: R("grid gap-2", e),
    ...t,
    ref: r
  }
));
Cu.displayName = es.displayName;
const Su = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  ts,
  {
    ref: r,
    className: R(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx(wu, { className: "flex items-center justify-center", children: /* @__PURE__ */ l.jsx(Ia, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
Su.displayName = ts.displayName;
var gr = "Switch", [Ru] = ue(gr), [Eu, Nu] = Ru(gr), rs = s.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: r,
      name: n,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: c,
      value: d = "on",
      onCheckedChange: u,
      form: f,
      ...p
    } = e, [h, g] = s.useState(null), b = U(t, (C) => g(C)), m = s.useRef(!1), v = h ? f || !!h.closest("form") : !0, [w, y] = Oe({
      prop: o,
      defaultProp: a ?? !1,
      onChange: u,
      caller: gr
    });
    return /* @__PURE__ */ l.jsxs(Eu, { scope: r, checked: w, disabled: c, children: [
      /* @__PURE__ */ l.jsx(
        D.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": i,
          "data-state": ss(w),
          "data-disabled": c ? "" : void 0,
          disabled: c,
          value: d,
          ...p,
          ref: b,
          onClick: T(e.onClick, (C) => {
            y((S) => !S), v && (m.current = C.isPropagationStopped(), m.current || C.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ l.jsx(
        as,
        {
          control: h,
          bubbles: !m.current,
          name: n,
          value: d,
          checked: w,
          required: i,
          disabled: c,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
rs.displayName = gr;
var ns = "SwitchThumb", os = s.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, o = Nu(ns, r);
    return /* @__PURE__ */ l.jsx(
      D.span,
      {
        "data-state": ss(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
os.displayName = ns;
var _u = "SwitchBubbleInput", as = s.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, a) => {
    const i = s.useRef(null), c = U(i, a), d = lr(r), u = dr(t);
    return s.useEffect(() => {
      const f = i.current;
      if (!f) return;
      const p = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (d !== r && g) {
        const b = new Event("click", { bubbles: n });
        g.call(f, r), f.dispatchEvent(b);
      }
    }, [d, r, n]), /* @__PURE__ */ l.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: r,
        ...o,
        tabIndex: -1,
        ref: c,
        style: {
          ...o.style,
          ...u,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
as.displayName = _u;
function ss(e) {
  return e ? "checked" : "unchecked";
}
var is = rs, Pu = os;
const Tu = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  is,
  {
    className: R(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ l.jsx(
      Pu,
      {
        className: R(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Tu.displayName = is.displayName;
var Au = "Label", cs = s.forwardRef((e, t) => /* @__PURE__ */ l.jsx(
  D.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      r.target.closest("button, input, select, textarea") || (e.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
cs.displayName = Au;
var ls = cs;
const Mu = qe(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), ku = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  ls,
  {
    ref: r,
    className: R(Mu(), e),
    ...t
  }
));
ku.displayName = ls.displayName;
const Iu = qe(
  "border border-gray-900 rounded-md text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",
  {
    variants: {
      size: {
        default: "h-[44px] pl-4 pr-4",
        sm: "h-10 pl-3 pr-3",
        lg: "h-14 pl-4 pr-4"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
), ds = s.forwardRef(
  ({ className: e, size: t, ...r }, n) => /* @__PURE__ */ l.jsx(
    "input",
    {
      ref: n,
      className: R(Iu({ size: t, className: e })),
      ...r
    }
  )
);
ds.displayName = "Input";
function Ao(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function Ou(e, t = globalThis?.document) {
  const r = _e(e);
  s.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var ju = "DismissableLayer", cn = "dismissableLayer.update", Du = "dismissableLayer.pointerDownOutside", Lu = "dismissableLayer.focusOutside", Mo, us = s.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Dt = s.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: c,
      ...d
    } = e, u = s.useContext(us), [f, p] = s.useState(null), h = f?.ownerDocument ?? globalThis?.document, [, g] = s.useState({}), b = U(t, (_) => p(_)), m = Array.from(u.layers), [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), w = m.indexOf(v), y = f ? m.indexOf(f) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, S = y >= w, E = Bu((_) => {
      const I = _.target, W = [...u.branches].some((V) => V.contains(I));
      !S || W || (o?.(_), i?.(_), _.defaultPrevented || c?.());
    }, h), k = Vu((_) => {
      const I = _.target;
      [...u.branches].some((V) => V.contains(I)) || (a?.(_), i?.(_), _.defaultPrevented || c?.());
    }, h);
    return Ou((_) => {
      y === u.layers.size - 1 && (n?.(_), !_.defaultPrevented && c && (_.preventDefault(), c()));
    }, h), s.useEffect(() => {
      if (f)
        return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Mo = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), ko(), () => {
          r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Mo);
        };
    }, [f, h, r, u]), s.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), ko());
    }, [f, u]), s.useEffect(() => {
      const _ = () => g({});
      return document.addEventListener(cn, _), () => document.removeEventListener(cn, _);
    }, []), /* @__PURE__ */ l.jsx(
      D.div,
      {
        ...d,
        ref: b,
        style: {
          pointerEvents: C ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: T(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: T(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: T(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
Dt.displayName = ju;
var Fu = "DismissableLayerBranch", $u = s.forwardRef((e, t) => {
  const r = s.useContext(us), n = s.useRef(null), o = U(t, n);
  return s.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ l.jsx(D.div, { ...e, ref: o });
});
$u.displayName = Fu;
function Bu(e, t = globalThis?.document) {
  const r = _e(e), n = s.useRef(!1), o = s.useRef(() => {
  });
  return s.useEffect(() => {
    const a = (c) => {
      if (c.target && !n.current) {
        let d = function() {
          fs(
            Du,
            r,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: c };
        c.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = d, t.addEventListener("click", o.current, { once: !0 })) : d();
      } else
        t.removeEventListener("click", o.current);
      n.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function Vu(e, t = globalThis?.document) {
  const r = _e(e), n = s.useRef(!1);
  return s.useEffect(() => {
    const o = (a) => {
      a.target && !n.current && fs(Lu, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function ko() {
  const e = new CustomEvent(cn);
  document.dispatchEvent(e);
}
function fs(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? Sa(o, a) : o.dispatchEvent(a);
}
var Ur = 0;
function Pn() {
  s.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Io()), document.body.insertAdjacentElement("beforeend", e[1] ?? Io()), Ur++, () => {
      Ur === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Ur--;
    };
  }, []);
}
function Io() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Kr = "focusScope.autoFocusOnMount", Yr = "focusScope.autoFocusOnUnmount", Oo = { bubbles: !1, cancelable: !0 }, Wu = "FocusScope", hr = s.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [c, d] = s.useState(null), u = _e(o), f = _e(a), p = s.useRef(null), h = U(t, (m) => d(m)), g = s.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  s.useEffect(() => {
    if (n) {
      let m = function(C) {
        if (g.paused || !c) return;
        const S = C.target;
        c.contains(S) ? p.current = S : ze(p.current, { select: !0 });
      }, v = function(C) {
        if (g.paused || !c) return;
        const S = C.relatedTarget;
        S !== null && (c.contains(S) || ze(p.current, { select: !0 }));
      }, w = function(C) {
        if (document.activeElement === document.body)
          for (const E of C)
            E.removedNodes.length > 0 && ze(c);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", v);
      const y = new MutationObserver(w);
      return c && y.observe(c, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", v), y.disconnect();
      };
    }
  }, [n, c, g.paused]), s.useEffect(() => {
    if (c) {
      Do.add(g);
      const m = document.activeElement;
      if (!c.contains(m)) {
        const w = new CustomEvent(Kr, Oo);
        c.addEventListener(Kr, u), c.dispatchEvent(w), w.defaultPrevented || (Gu(Yu(ps(c)), { select: !0 }), document.activeElement === m && ze(c));
      }
      return () => {
        c.removeEventListener(Kr, u), setTimeout(() => {
          const w = new CustomEvent(Yr, Oo);
          c.addEventListener(Yr, f), c.dispatchEvent(w), w.defaultPrevented || ze(m ?? document.body, { select: !0 }), c.removeEventListener(Yr, f), Do.remove(g);
        }, 0);
      };
    }
  }, [c, u, f, g]);
  const b = s.useCallback(
    (m) => {
      if (!r && !n || g.paused) return;
      const v = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, w = document.activeElement;
      if (v && w) {
        const y = m.currentTarget, [C, S] = Hu(y);
        C && S ? !m.shiftKey && w === S ? (m.preventDefault(), r && ze(C, { select: !0 })) : m.shiftKey && w === C && (m.preventDefault(), r && ze(S, { select: !0 })) : w === y && m.preventDefault();
      }
    },
    [r, n, g.paused]
  );
  return /* @__PURE__ */ l.jsx(D.div, { tabIndex: -1, ...i, ref: h, onKeyDown: b });
});
hr.displayName = Wu;
function Gu(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (ze(n, { select: t }), document.activeElement !== r) return;
}
function Hu(e) {
  const t = ps(e), r = jo(t, e), n = jo(t.reverse(), e);
  return [r, n];
}
function ps(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function jo(e, t) {
  for (const r of e)
    if (!zu(r, { upTo: t })) return r;
}
function zu(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Uu(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ze(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && Uu(e) && t && e.select();
  }
}
var Do = Ku();
function Ku() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && r?.pause(), e = Lo(e, t), e.unshift(t);
    },
    remove(t) {
      e = Lo(e, t), e[0]?.resume();
    }
  };
}
function Lo(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function Yu(e) {
  return e.filter((t) => t.tagName !== "A");
}
const qu = ["top", "right", "bottom", "left"], Ke = Math.min, ve = Math.max, Jt = Math.round, Gt = Math.floor, Ie = (e) => ({
  x: e,
  y: e
}), Xu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Zu = {
  start: "end",
  end: "start"
};
function ln(e, t, r) {
  return ve(e, Ke(t, r));
}
function Be(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ve(e) {
  return e.split("-")[0];
}
function yt(e) {
  return e.split("-")[1];
}
function Tn(e) {
  return e === "x" ? "y" : "x";
}
function An(e) {
  return e === "y" ? "height" : "width";
}
const Ju = /* @__PURE__ */ new Set(["top", "bottom"]);
function ke(e) {
  return Ju.has(Ve(e)) ? "y" : "x";
}
function Mn(e) {
  return Tn(ke(e));
}
function Qu(e, t, r) {
  r === void 0 && (r = !1);
  const n = yt(e), o = Mn(e), a = An(o);
  let i = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Qt(i)), [i, Qt(i)];
}
function ef(e) {
  const t = Qt(e);
  return [dn(e), t, dn(t)];
}
function dn(e) {
  return e.replace(/start|end/g, (t) => Zu[t]);
}
const Fo = ["left", "right"], $o = ["right", "left"], tf = ["top", "bottom"], rf = ["bottom", "top"];
function nf(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? $o : Fo : t ? Fo : $o;
    case "left":
    case "right":
      return t ? tf : rf;
    default:
      return [];
  }
}
function of(e, t, r, n) {
  const o = yt(e);
  let a = nf(Ve(e), r === "start", n);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(dn)))), a;
}
function Qt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Xu[t]);
}
function af(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ms(e) {
  return typeof e != "number" ? af(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function er(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: o
  } = e;
  return {
    width: n,
    height: o,
    top: r,
    left: t,
    right: t + n,
    bottom: r + o,
    x: t,
    y: r
  };
}
function Bo(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const a = ke(t), i = Mn(t), c = An(i), d = Ve(t), u = a === "y", f = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, h = n[c] / 2 - o[c] / 2;
  let g;
  switch (d) {
    case "top":
      g = {
        x: f,
        y: n.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: f,
        y: n.y + n.height
      };
      break;
    case "right":
      g = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      g = {
        x: n.x - o.width,
        y: p
      };
      break;
    default:
      g = {
        x: n.x,
        y: n.y
      };
  }
  switch (yt(t)) {
    case "start":
      g[i] -= h * (r && u ? -1 : 1);
      break;
    case "end":
      g[i] += h * (r && u ? -1 : 1);
      break;
  }
  return g;
}
const sf = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = r, c = a.filter(Boolean), d = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: p
  } = Bo(u, n, d), h = n, g = {}, b = 0;
  for (let m = 0; m < c.length; m++) {
    const {
      name: v,
      fn: w
    } = c[m], {
      x: y,
      y: C,
      data: S,
      reset: E
    } = await w({
      x: f,
      y: p,
      initialPlacement: n,
      placement: h,
      strategy: o,
      middlewareData: g,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = y ?? f, p = C ?? p, g = {
      ...g,
      [v]: {
        ...g[v],
        ...S
      }
    }, E && b <= 50 && (b++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (u = E.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: f,
      y: p
    } = Bo(u, h, d)), m = -1);
  }
  return {
    x: f,
    y: p,
    placement: h,
    strategy: o,
    middlewareData: g
  };
};
async function At(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: a,
    rects: i,
    elements: c,
    strategy: d
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: p = "floating",
    altBoundary: h = !1,
    padding: g = 0
  } = Be(t, e), b = ms(g), v = c[h ? p === "floating" ? "reference" : "floating" : p], w = er(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(v))) == null || r ? v : v.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(c.floating)),
    boundary: u,
    rootBoundary: f,
    strategy: d
  })), y = p === "floating" ? {
    x: n,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, C = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c.floating)), S = await (a.isElement == null ? void 0 : a.isElement(C)) ? await (a.getScale == null ? void 0 : a.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = er(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: y,
    offsetParent: C,
    strategy: d
  }) : y);
  return {
    top: (w.top - E.top + b.top) / S.y,
    bottom: (E.bottom - w.bottom + b.bottom) / S.y,
    left: (w.left - E.left + b.left) / S.x,
    right: (E.right - w.right + b.right) / S.x
  };
}
const cf = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: o,
      rects: a,
      platform: i,
      elements: c,
      middlewareData: d
    } = t, {
      element: u,
      padding: f = 0
    } = Be(e, t) || {};
    if (u == null)
      return {};
    const p = ms(f), h = {
      x: r,
      y: n
    }, g = Mn(o), b = An(g), m = await i.getDimensions(u), v = g === "y", w = v ? "top" : "left", y = v ? "bottom" : "right", C = v ? "clientHeight" : "clientWidth", S = a.reference[b] + a.reference[g] - h[g] - a.floating[b], E = h[g] - a.reference[g], k = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let _ = k ? k[C] : 0;
    (!_ || !await (i.isElement == null ? void 0 : i.isElement(k))) && (_ = c.floating[C] || a.floating[b]);
    const I = S / 2 - E / 2, W = _ / 2 - m[b] / 2 - 1, V = Ke(p[w], W), z = Ke(p[y], W), O = V, B = _ - m[b] - z, F = _ / 2 - m[b] / 2 + I, K = ln(O, F, B), L = !d.arrow && yt(o) != null && F !== K && a.reference[b] / 2 - (F < O ? V : z) - m[b] / 2 < 0, H = L ? F < O ? F - O : F - B : 0;
    return {
      [g]: h[g] + H,
      data: {
        [g]: K,
        centerOffset: F - K - H,
        ...L && {
          alignmentOffset: H
        }
      },
      reset: L
    };
  }
}), lf = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: c,
        platform: d,
        elements: u
      } = t, {
        mainAxis: f = !0,
        crossAxis: p = !0,
        fallbackPlacements: h,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: m = !0,
        ...v
      } = Be(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const w = Ve(o), y = ke(c), C = Ve(c) === c, S = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), E = h || (C || !m ? [Qt(c)] : ef(c)), k = b !== "none";
      !h && k && E.push(...of(c, m, b, S));
      const _ = [c, ...E], I = await At(t, v), W = [];
      let V = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (f && W.push(I[w]), p) {
        const F = Qu(o, i, S);
        W.push(I[F[0]], I[F[1]]);
      }
      if (V = [...V, {
        placement: o,
        overflows: W
      }], !W.every((F) => F <= 0)) {
        var z, O;
        const F = (((z = a.flip) == null ? void 0 : z.index) || 0) + 1, K = _[F];
        if (K && (!(p === "alignment" ? y !== ke(K) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        V.every((j) => ke(j.placement) === y ? j.overflows[0] > 0 : !0)))
          return {
            data: {
              index: F,
              overflows: V
            },
            reset: {
              placement: K
            }
          };
        let L = (O = V.filter((H) => H.overflows[0] <= 0).sort((H, j) => H.overflows[1] - j.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!L)
          switch (g) {
            case "bestFit": {
              var B;
              const H = (B = V.filter((j) => {
                if (k) {
                  const P = ke(j.placement);
                  return P === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  P === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter((P) => P > 0).reduce((P, ee) => P + ee, 0)]).sort((j, P) => j[1] - P[1])[0]) == null ? void 0 : B[0];
              H && (L = H);
              break;
            }
            case "initialPlacement":
              L = c;
              break;
          }
        if (o !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
};
function Vo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Wo(e) {
  return qu.some((t) => e[t] >= 0);
}
const df = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = Be(e, t);
      switch (n) {
        case "referenceHidden": {
          const a = await At(t, {
            ...o,
            elementContext: "reference"
          }), i = Vo(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Wo(i)
            }
          };
        }
        case "escaped": {
          const a = await At(t, {
            ...o,
            altBoundary: !0
          }), i = Vo(a, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Wo(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, gs = /* @__PURE__ */ new Set(["left", "top"]);
async function uf(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), i = Ve(r), c = yt(r), d = ke(r) === "y", u = gs.has(i) ? -1 : 1, f = a && d ? -1 : 1, p = Be(t, e);
  let {
    mainAxis: h,
    crossAxis: g,
    alignmentAxis: b
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return c && typeof b == "number" && (g = c === "end" ? b * -1 : b), d ? {
    x: g * f,
    y: h * u
  } : {
    x: h * u,
    y: g * f
  };
}
const ff = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: c
      } = t, d = await uf(t, e);
      return i === ((r = c.offset) == null ? void 0 : r.placement) && (n = c.arrow) != null && n.alignmentOffset ? {} : {
        x: o + d.x,
        y: a + d.y,
        data: {
          ...d,
          placement: i
        }
      };
    }
  };
}, pf = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: c = {
          fn: (v) => {
            let {
              x: w,
              y
            } = v;
            return {
              x: w,
              y
            };
          }
        },
        ...d
      } = Be(e, t), u = {
        x: r,
        y: n
      }, f = await At(t, d), p = ke(Ve(o)), h = Tn(p);
      let g = u[h], b = u[p];
      if (a) {
        const v = h === "y" ? "top" : "left", w = h === "y" ? "bottom" : "right", y = g + f[v], C = g - f[w];
        g = ln(y, g, C);
      }
      if (i) {
        const v = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", y = b + f[v], C = b - f[w];
        b = ln(y, b, C);
      }
      const m = c.fn({
        ...t,
        [h]: g,
        [p]: b
      });
      return {
        ...m,
        data: {
          x: m.x - r,
          y: m.y - n,
          enabled: {
            [h]: a,
            [p]: i
          }
        }
      };
    }
  };
}, mf = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: o,
        rects: a,
        middlewareData: i
      } = t, {
        offset: c = 0,
        mainAxis: d = !0,
        crossAxis: u = !0
      } = Be(e, t), f = {
        x: r,
        y: n
      }, p = ke(o), h = Tn(p);
      let g = f[h], b = f[p];
      const m = Be(c, t), v = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (d) {
        const C = h === "y" ? "height" : "width", S = a.reference[h] - a.floating[C] + v.mainAxis, E = a.reference[h] + a.reference[C] - v.mainAxis;
        g < S ? g = S : g > E && (g = E);
      }
      if (u) {
        var w, y;
        const C = h === "y" ? "width" : "height", S = gs.has(Ve(o)), E = a.reference[p] - a.floating[C] + (S && ((w = i.offset) == null ? void 0 : w[p]) || 0) + (S ? 0 : v.crossAxis), k = a.reference[p] + a.reference[C] + (S ? 0 : ((y = i.offset) == null ? void 0 : y[p]) || 0) - (S ? v.crossAxis : 0);
        b < E ? b = E : b > k && (b = k);
      }
      return {
        [h]: g,
        [p]: b
      };
    }
  };
}, gf = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        rects: a,
        platform: i,
        elements: c
      } = t, {
        apply: d = () => {
        },
        ...u
      } = Be(e, t), f = await At(t, u), p = Ve(o), h = yt(o), g = ke(o) === "y", {
        width: b,
        height: m
      } = a.floating;
      let v, w;
      p === "top" || p === "bottom" ? (v = p, w = h === (await (i.isRTL == null ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (w = p, v = h === "end" ? "top" : "bottom");
      const y = m - f.top - f.bottom, C = b - f.left - f.right, S = Ke(m - f[v], y), E = Ke(b - f[w], C), k = !t.middlewareData.shift;
      let _ = S, I = E;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (I = C), (n = t.middlewareData.shift) != null && n.enabled.y && (_ = y), k && !h) {
        const V = ve(f.left, 0), z = ve(f.right, 0), O = ve(f.top, 0), B = ve(f.bottom, 0);
        g ? I = b - 2 * (V !== 0 || z !== 0 ? V + z : ve(f.left, f.right)) : _ = m - 2 * (O !== 0 || B !== 0 ? O + B : ve(f.top, f.bottom));
      }
      await d({
        ...t,
        availableWidth: I,
        availableHeight: _
      });
      const W = await i.getDimensions(c.floating);
      return b !== W.width || m !== W.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function vr() {
  return typeof window < "u";
}
function wt(e) {
  return hs(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function be(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function De(e) {
  var t;
  return (t = (hs(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function hs(e) {
  return vr() ? e instanceof Node || e instanceof be(e).Node : !1;
}
function Pe(e) {
  return vr() ? e instanceof Element || e instanceof be(e).Element : !1;
}
function je(e) {
  return vr() ? e instanceof HTMLElement || e instanceof be(e).HTMLElement : !1;
}
function Go(e) {
  return !vr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof be(e).ShadowRoot;
}
const hf = /* @__PURE__ */ new Set(["inline", "contents"]);
function Lt(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = Te(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !hf.has(o);
}
const vf = /* @__PURE__ */ new Set(["table", "td", "th"]);
function bf(e) {
  return vf.has(wt(e));
}
const xf = [":popover-open", ":modal"];
function br(e) {
  return xf.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const yf = ["transform", "translate", "scale", "rotate", "perspective"], wf = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Cf = ["paint", "layout", "strict", "content"];
function kn(e) {
  const t = In(), r = Pe(e) ? Te(e) : e;
  return yf.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || wf.some((n) => (r.willChange || "").includes(n)) || Cf.some((n) => (r.contain || "").includes(n));
}
function Sf(e) {
  let t = Ye(e);
  for (; je(t) && !ht(t); ) {
    if (kn(t))
      return t;
    if (br(t))
      return null;
    t = Ye(t);
  }
  return null;
}
function In() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Rf = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ht(e) {
  return Rf.has(wt(e));
}
function Te(e) {
  return be(e).getComputedStyle(e);
}
function xr(e) {
  return Pe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ye(e) {
  if (wt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Go(e) && e.host || // Fallback.
    De(e)
  );
  return Go(t) ? t.host : t;
}
function vs(e) {
  const t = Ye(e);
  return ht(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : je(t) && Lt(t) ? t : vs(t);
}
function Mt(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = vs(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = be(o);
  if (a) {
    const c = un(i);
    return t.concat(i, i.visualViewport || [], Lt(o) ? o : [], c && r ? Mt(c) : []);
  }
  return t.concat(o, Mt(o, [], r));
}
function un(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function bs(e) {
  const t = Te(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = je(e), a = o ? e.offsetWidth : r, i = o ? e.offsetHeight : n, c = Jt(r) !== a || Jt(n) !== i;
  return c && (r = a, n = i), {
    width: r,
    height: n,
    $: c
  };
}
function On(e) {
  return Pe(e) ? e : e.contextElement;
}
function mt(e) {
  const t = On(e);
  if (!je(t))
    return Ie(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = bs(t);
  let i = (a ? Jt(r.width) : r.width) / n, c = (a ? Jt(r.height) : r.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: i,
    y: c
  };
}
const Ef = /* @__PURE__ */ Ie(0);
function xs(e) {
  const t = be(e);
  return !In() || !t.visualViewport ? Ef : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Nf(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== be(e) ? !1 : t;
}
function et(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), a = On(e);
  let i = Ie(1);
  t && (n ? Pe(n) && (i = mt(n)) : i = mt(e));
  const c = Nf(a, r, n) ? xs(a) : Ie(0);
  let d = (o.left + c.x) / i.x, u = (o.top + c.y) / i.y, f = o.width / i.x, p = o.height / i.y;
  if (a) {
    const h = be(a), g = n && Pe(n) ? be(n) : n;
    let b = h, m = un(b);
    for (; m && n && g !== b; ) {
      const v = mt(m), w = m.getBoundingClientRect(), y = Te(m), C = w.left + (m.clientLeft + parseFloat(y.paddingLeft)) * v.x, S = w.top + (m.clientTop + parseFloat(y.paddingTop)) * v.y;
      d *= v.x, u *= v.y, f *= v.x, p *= v.y, d += C, u += S, b = be(m), m = un(b);
    }
  }
  return er({
    width: f,
    height: p,
    x: d,
    y: u
  });
}
function yr(e, t) {
  const r = xr(e).scrollLeft;
  return t ? t.left + r : et(De(e)).left + r;
}
function ys(e, t) {
  const r = e.getBoundingClientRect(), n = r.left + t.scrollLeft - yr(e, r), o = r.top + t.scrollTop;
  return {
    x: n,
    y: o
  };
}
function _f(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const a = o === "fixed", i = De(n), c = t ? br(t.floating) : !1;
  if (n === i || c && a)
    return r;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ie(1);
  const f = Ie(0), p = je(n);
  if ((p || !p && !a) && ((wt(n) !== "body" || Lt(i)) && (d = xr(n)), je(n))) {
    const g = et(n);
    u = mt(n), f.x = g.x + n.clientLeft, f.y = g.y + n.clientTop;
  }
  const h = i && !p && !a ? ys(i, d) : Ie(0);
  return {
    width: r.width * u.x,
    height: r.height * u.y,
    x: r.x * u.x - d.scrollLeft * u.x + f.x + h.x,
    y: r.y * u.y - d.scrollTop * u.y + f.y + h.y
  };
}
function Pf(e) {
  return Array.from(e.getClientRects());
}
function Tf(e) {
  const t = De(e), r = xr(e), n = e.ownerDocument.body, o = ve(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = ve(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + yr(e);
  const c = -r.scrollTop;
  return Te(n).direction === "rtl" && (i += ve(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: c
  };
}
const Ho = 25;
function Af(e, t) {
  const r = be(e), n = De(e), o = r.visualViewport;
  let a = n.clientWidth, i = n.clientHeight, c = 0, d = 0;
  if (o) {
    a = o.width, i = o.height;
    const f = In();
    (!f || f && t === "fixed") && (c = o.offsetLeft, d = o.offsetTop);
  }
  const u = yr(n);
  if (u <= 0) {
    const f = n.ownerDocument, p = f.body, h = getComputedStyle(p), g = f.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, b = Math.abs(n.clientWidth - p.clientWidth - g);
    b <= Ho && (a -= b);
  } else u <= Ho && (a += u);
  return {
    width: a,
    height: i,
    x: c,
    y: d
  };
}
const Mf = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function kf(e, t) {
  const r = et(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, a = je(e) ? mt(e) : Ie(1), i = e.clientWidth * a.x, c = e.clientHeight * a.y, d = o * a.x, u = n * a.y;
  return {
    width: i,
    height: c,
    x: d,
    y: u
  };
}
function zo(e, t, r) {
  let n;
  if (t === "viewport")
    n = Af(e, r);
  else if (t === "document")
    n = Tf(De(e));
  else if (Pe(t))
    n = kf(t, r);
  else {
    const o = xs(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return er(n);
}
function ws(e, t) {
  const r = Ye(e);
  return r === t || !Pe(r) || ht(r) ? !1 : Te(r).position === "fixed" || ws(r, t);
}
function If(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = Mt(e, [], !1).filter((c) => Pe(c) && wt(c) !== "body"), o = null;
  const a = Te(e).position === "fixed";
  let i = a ? Ye(e) : e;
  for (; Pe(i) && !ht(i); ) {
    const c = Te(i), d = kn(i);
    !d && c.position === "fixed" && (o = null), (a ? !d && !o : !d && c.position === "static" && !!o && Mf.has(o.position) || Lt(i) && !d && ws(e, i)) ? n = n.filter((f) => f !== i) : o = c, i = Ye(i);
  }
  return t.set(e, n), n;
}
function Of(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const i = [...r === "clippingAncestors" ? br(t) ? [] : If(t, this._c) : [].concat(r), n], c = i[0], d = i.reduce((u, f) => {
    const p = zo(t, f, o);
    return u.top = ve(p.top, u.top), u.right = Ke(p.right, u.right), u.bottom = Ke(p.bottom, u.bottom), u.left = ve(p.left, u.left), u;
  }, zo(t, c, o));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function jf(e) {
  const {
    width: t,
    height: r
  } = bs(e);
  return {
    width: t,
    height: r
  };
}
function Df(e, t, r) {
  const n = je(t), o = De(t), a = r === "fixed", i = et(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = Ie(0);
  function u() {
    d.x = yr(o);
  }
  if (n || !n && !a)
    if ((wt(t) !== "body" || Lt(o)) && (c = xr(t)), n) {
      const g = et(t, !0, a, t);
      d.x = g.x + t.clientLeft, d.y = g.y + t.clientTop;
    } else o && u();
  a && !n && o && u();
  const f = o && !n && !a ? ys(o, c) : Ie(0), p = i.left + c.scrollLeft - d.x - f.x, h = i.top + c.scrollTop - d.y - f.y;
  return {
    x: p,
    y: h,
    width: i.width,
    height: i.height
  };
}
function qr(e) {
  return Te(e).position === "static";
}
function Uo(e, t) {
  if (!je(e) || Te(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return De(e) === r && (r = r.ownerDocument.body), r;
}
function Cs(e, t) {
  const r = be(e);
  if (br(e))
    return r;
  if (!je(e)) {
    let o = Ye(e);
    for (; o && !ht(o); ) {
      if (Pe(o) && !qr(o))
        return o;
      o = Ye(o);
    }
    return r;
  }
  let n = Uo(e, t);
  for (; n && bf(n) && qr(n); )
    n = Uo(n, t);
  return n && ht(n) && qr(n) && !kn(n) ? r : n || Sf(e) || r;
}
const Lf = async function(e) {
  const t = this.getOffsetParent || Cs, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: Df(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Ff(e) {
  return Te(e).direction === "rtl";
}
const $f = {
  convertOffsetParentRelativeRectToViewportRelativeRect: _f,
  getDocumentElement: De,
  getClippingRect: Of,
  getOffsetParent: Cs,
  getElementRects: Lf,
  getClientRects: Pf,
  getDimensions: jf,
  getScale: mt,
  isElement: Pe,
  isRTL: Ff
};
function Ss(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Bf(e, t) {
  let r = null, n;
  const o = De(e);
  function a() {
    var c;
    clearTimeout(n), (c = r) == null || c.disconnect(), r = null;
  }
  function i(c, d) {
    c === void 0 && (c = !1), d === void 0 && (d = 1), a();
    const u = e.getBoundingClientRect(), {
      left: f,
      top: p,
      width: h,
      height: g
    } = u;
    if (c || t(), !h || !g)
      return;
    const b = Gt(p), m = Gt(o.clientWidth - (f + h)), v = Gt(o.clientHeight - (p + g)), w = Gt(f), C = {
      rootMargin: -b + "px " + -m + "px " + -v + "px " + -w + "px",
      threshold: ve(0, Ke(1, d)) || 1
    };
    let S = !0;
    function E(k) {
      const _ = k[0].intersectionRatio;
      if (_ !== d) {
        if (!S)
          return i();
        _ ? i(!1, _) : n = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      _ === 1 && !Ss(u, e.getBoundingClientRect()) && i(), S = !1;
    }
    try {
      r = new IntersectionObserver(E, {
        ...C,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(E, C);
    }
    r.observe(e);
  }
  return i(!0), a;
}
function Vf(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = n, u = On(e), f = o || a ? [...u ? Mt(u) : [], ...Mt(t)] : [];
  f.forEach((w) => {
    o && w.addEventListener("scroll", r, {
      passive: !0
    }), a && w.addEventListener("resize", r);
  });
  const p = u && c ? Bf(u, r) : null;
  let h = -1, g = null;
  i && (g = new ResizeObserver((w) => {
    let [y] = w;
    y && y.target === u && g && (g.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var C;
      (C = g) == null || C.observe(t);
    })), r();
  }), u && !d && g.observe(u), g.observe(t));
  let b, m = d ? et(e) : null;
  d && v();
  function v() {
    const w = et(e);
    m && !Ss(m, w) && r(), m = w, b = requestAnimationFrame(v);
  }
  return r(), () => {
    var w;
    f.forEach((y) => {
      o && y.removeEventListener("scroll", r), a && y.removeEventListener("resize", r);
    }), p?.(), (w = g) == null || w.disconnect(), g = null, d && cancelAnimationFrame(b);
  };
}
const Wf = ff, Gf = pf, Hf = lf, zf = gf, Uf = df, Ko = cf, Kf = mf, Yf = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: $f,
    ...r
  }, a = {
    ...o.platform,
    _c: n
  };
  return sf(e, t, {
    ...o,
    platform: a
  });
};
var qf = typeof document < "u", Xf = function() {
}, qt = qf ? Wl : Xf;
function tr(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!tr(e[n], t[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const a = o[n];
      if (!(a === "_owner" && e.$$typeof) && !tr(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Rs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Yo(e, t) {
  const r = Rs(e);
  return Math.round(t * r) / r;
}
function Xr(e) {
  const t = s.useRef(e);
  return qt(() => {
    t.current = e;
  }), t;
}
function Zf(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: c = !0,
    whileElementsMounted: d,
    open: u
  } = e, [f, p] = s.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, g] = s.useState(n);
  tr(h, n) || g(n);
  const [b, m] = s.useState(null), [v, w] = s.useState(null), y = s.useCallback((j) => {
    j !== k.current && (k.current = j, m(j));
  }, []), C = s.useCallback((j) => {
    j !== _.current && (_.current = j, w(j));
  }, []), S = a || b, E = i || v, k = s.useRef(null), _ = s.useRef(null), I = s.useRef(f), W = d != null, V = Xr(d), z = Xr(o), O = Xr(u), B = s.useCallback(() => {
    if (!k.current || !_.current)
      return;
    const j = {
      placement: t,
      strategy: r,
      middleware: h
    };
    z.current && (j.platform = z.current), Yf(k.current, _.current, j).then((P) => {
      const ee = {
        ...P,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: O.current !== !1
      };
      F.current && !tr(I.current, ee) && (I.current = ee, ir.flushSync(() => {
        p(ee);
      }));
    });
  }, [h, t, r, z, O]);
  qt(() => {
    u === !1 && I.current.isPositioned && (I.current.isPositioned = !1, p((j) => ({
      ...j,
      isPositioned: !1
    })));
  }, [u]);
  const F = s.useRef(!1);
  qt(() => (F.current = !0, () => {
    F.current = !1;
  }), []), qt(() => {
    if (S && (k.current = S), E && (_.current = E), S && E) {
      if (V.current)
        return V.current(S, E, B);
      B();
    }
  }, [S, E, B, V, W]);
  const K = s.useMemo(() => ({
    reference: k,
    floating: _,
    setReference: y,
    setFloating: C
  }), [y, C]), L = s.useMemo(() => ({
    reference: S,
    floating: E
  }), [S, E]), H = s.useMemo(() => {
    const j = {
      position: r,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return j;
    const P = Yo(L.floating, f.x), ee = Yo(L.floating, f.y);
    return c ? {
      ...j,
      transform: "translate(" + P + "px, " + ee + "px)",
      ...Rs(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: P,
      top: ee
    };
  }, [r, c, L.floating, f.x, f.y]);
  return s.useMemo(() => ({
    ...f,
    update: B,
    refs: K,
    elements: L,
    floatingStyles: H
  }), [f, B, K, L, H]);
}
const Jf = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: n,
        padding: o
      } = typeof e == "function" ? e(r) : e;
      return n && t(n) ? n.current != null ? Ko({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? Ko({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, Qf = (e, t) => ({
  ...Wf(e),
  options: [e, t]
}), ep = (e, t) => ({
  ...Gf(e),
  options: [e, t]
}), tp = (e, t) => ({
  ...Kf(e),
  options: [e, t]
}), rp = (e, t) => ({
  ...Hf(e),
  options: [e, t]
}), np = (e, t) => ({
  ...zf(e),
  options: [e, t]
}), op = (e, t) => ({
  ...Uf(e),
  options: [e, t]
}), ap = (e, t) => ({
  ...Jf(e),
  options: [e, t]
});
var sp = "Arrow", Es = s.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ l.jsx(
    D.svg,
    {
      ...a,
      ref: t,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ l.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Es.displayName = sp;
var ip = Es, jn = "Popper", [Ns, Ct] = ue(jn), [cp, _s] = Ns(jn), Ps = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = s.useState(null);
  return /* @__PURE__ */ l.jsx(cp, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
Ps.displayName = jn;
var Ts = "PopperAnchor", As = s.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, a = _s(Ts, r), i = s.useRef(null), c = U(t, i), d = s.useRef(null);
    return s.useEffect(() => {
      const u = d.current;
      d.current = n?.current || i.current, u !== d.current && a.onAnchorChange(d.current);
    }), n ? null : /* @__PURE__ */ l.jsx(D.div, { ...o, ref: c });
  }
);
As.displayName = Ts;
var Dn = "PopperContent", [lp, dp] = Ns(Dn), Ms = s.forwardRef(
  (e, t) => {
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: c = 0,
      avoidCollisions: d = !0,
      collisionBoundary: u = [],
      collisionPadding: f = 0,
      sticky: p = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: b,
      ...m
    } = e, v = _s(Dn, r), [w, y] = s.useState(null), C = U(t, (M) => y(M)), [S, E] = s.useState(null), k = dr(S), _ = k?.width ?? 0, I = k?.height ?? 0, W = n + (a !== "center" ? "-" + a : ""), V = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, z = Array.isArray(u) ? u : [u], O = z.length > 0, B = {
      padding: V,
      boundary: z.filter(fp),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: O
    }, { refs: F, floatingStyles: K, placement: L, isPositioned: H, middlewareData: j } = Zf({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: W,
      whileElementsMounted: (...M) => Vf(...M, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        Qf({ mainAxis: o + I, alignmentAxis: i }),
        d && ep({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? tp() : void 0,
          ...B
        }),
        d && rp({ ...B }),
        np({
          ...B,
          apply: ({ elements: M, rects: X, availableWidth: ce, availableHeight: Z }) => {
            const { width: re, height: oe } = X.reference, ge = M.floating.style;
            ge.setProperty("--radix-popper-available-width", `${ce}px`), ge.setProperty("--radix-popper-available-height", `${Z}px`), ge.setProperty("--radix-popper-anchor-width", `${re}px`), ge.setProperty("--radix-popper-anchor-height", `${oe}px`);
          }
        }),
        S && ap({ element: S, padding: c }),
        pp({ arrowWidth: _, arrowHeight: I }),
        h && op({ strategy: "referenceHidden", ...B })
      ]
    }), [P, ee] = Os(L), Q = _e(b);
    ie(() => {
      H && Q?.();
    }, [H, Q]);
    const pe = j.arrow?.x, xe = j.arrow?.y, me = j.arrow?.centerOffset !== 0, [Se, le] = s.useState();
    return ie(() => {
      w && le(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: H ? K.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Se,
          "--radix-popper-transform-origin": [
            j.transformOrigin?.x,
            j.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...j.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ l.jsx(
          lp,
          {
            scope: r,
            placedSide: P,
            onArrowChange: E,
            arrowX: pe,
            arrowY: xe,
            shouldHideArrow: me,
            children: /* @__PURE__ */ l.jsx(
              D.div,
              {
                "data-side": P,
                "data-align": ee,
                ...m,
                ref: C,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: H ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Ms.displayName = Dn;
var ks = "PopperArrow", up = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Is = s.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, a = dp(ks, n), i = up[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ l.jsx(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ l.jsx(
          ip,
          {
            ...o,
            ref: r,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Is.displayName = ks;
function fp(e) {
  return e !== null;
}
var pp = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: r, rects: n, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, c = i ? 0 : e.arrowWidth, d = i ? 0 : e.arrowHeight, [u, f] = Os(r), p = { start: "0%", center: "50%", end: "100%" }[f], h = (o.arrow?.x ?? 0) + c / 2, g = (o.arrow?.y ?? 0) + d / 2;
    let b = "", m = "";
    return u === "bottom" ? (b = i ? p : `${h}px`, m = `${-d}px`) : u === "top" ? (b = i ? p : `${h}px`, m = `${n.floating.height + d}px`) : u === "right" ? (b = `${-d}px`, m = i ? p : `${g}px`) : u === "left" && (b = `${n.floating.width + d}px`, m = i ? p : `${g}px`), { data: { x: b, y: m } };
  }
});
function Os(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var Ln = Ps, Fn = As, $n = Ms, Bn = Is, mp = "Portal", wr = s.forwardRef((e, t) => {
  const { container: r, ...n } = e, [o, a] = s.useState(!1);
  ie(() => a(!0), []);
  const i = r || o && globalThis?.document?.body;
  return i ? Hl.createPortal(/* @__PURE__ */ l.jsx(D.div, { ...n, ref: t }), i) : null;
});
wr.displayName = mp;
var js = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), gp = "VisuallyHidden", Ds = s.forwardRef(
  (e, t) => /* @__PURE__ */ l.jsx(
    D.span,
    {
      ...e,
      ref: t,
      style: { ...js, ...e.style }
    }
  )
);
Ds.displayName = gp;
var hp = Ds, vp = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, dt = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap(), zt = {}, Zr = 0, Ls = function(e) {
  return e && (e.host || Ls(e.parentNode));
}, bp = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Ls(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, xp = function(e, t, r, n) {
  var o = bp(t, Array.isArray(e) ? e : [e]);
  zt[r] || (zt[r] = /* @__PURE__ */ new WeakMap());
  var a = zt[r], i = [], c = /* @__PURE__ */ new Set(), d = new Set(o), u = function(p) {
    !p || c.has(p) || (c.add(p), u(p.parentNode));
  };
  o.forEach(u);
  var f = function(p) {
    !p || d.has(p) || Array.prototype.forEach.call(p.children, function(h) {
      if (c.has(h))
        f(h);
      else
        try {
          var g = h.getAttribute(n), b = g !== null && g !== "false", m = (dt.get(h) || 0) + 1, v = (a.get(h) || 0) + 1;
          dt.set(h, m), a.set(h, v), i.push(h), m === 1 && b && Ht.set(h, !0), v === 1 && h.setAttribute(r, "true"), b || h.setAttribute(n, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", h, w);
        }
    });
  };
  return f(t), c.clear(), Zr++, function() {
    i.forEach(function(p) {
      var h = dt.get(p) - 1, g = a.get(p) - 1;
      dt.set(p, h), a.set(p, g), h || (Ht.has(p) || p.removeAttribute(n), Ht.delete(p)), g || p.removeAttribute(r);
    }), Zr--, Zr || (dt = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap(), zt = {});
  };
}, Vn = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = vp(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), xp(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, Me = function() {
  return Me = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Me.apply(this, arguments);
};
function Fs(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function yp(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Xt = "right-scroll-bar-position", Zt = "width-before-scroll-bar", wp = "with-scroll-bars-hidden", Cp = "--removed-body-scroll-bar-size";
function Jr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Sp(e, t) {
  var r = Gl(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var Rp = typeof window < "u" ? s.useLayoutEffect : s.useEffect, qo = /* @__PURE__ */ new WeakMap();
function Ep(e, t) {
  var r = Sp(null, function(n) {
    return e.forEach(function(o) {
      return Jr(o, n);
    });
  });
  return Rp(function() {
    var n = qo.get(r);
    if (n) {
      var o = new Set(n), a = new Set(e), i = r.current;
      o.forEach(function(c) {
        a.has(c) || Jr(c, null);
      }), a.forEach(function(c) {
        o.has(c) || Jr(c, i);
      });
    }
    qo.set(r, e);
  }, [e]), r;
}
function Np(e) {
  return e;
}
function _p(e, t) {
  t === void 0 && (t = Np);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, n);
      return r.push(i), function() {
        r = r.filter(function(c) {
          return c !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (n = !0; r.length; ) {
        var i = r;
        r = [], i.forEach(a);
      }
      r = {
        push: function(c) {
          return a(c);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(a) {
      n = !0;
      var i = [];
      if (r.length) {
        var c = r;
        r = [], c.forEach(a), i = r;
      }
      var d = function() {
        var f = i;
        i = [], f.forEach(a);
      }, u = function() {
        return Promise.resolve().then(d);
      };
      u(), r = {
        push: function(f) {
          i.push(f), u();
        },
        filter: function(f) {
          return i = i.filter(f), r;
        }
      };
    }
  };
  return o;
}
function Pp(e) {
  e === void 0 && (e = {});
  var t = _p(null);
  return t.options = Me({ async: !0, ssr: !1 }, e), t;
}
var $s = function(e) {
  var t = e.sideCar, r = Fs(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return s.createElement(n, Me({}, r));
};
$s.isSideCarExport = !0;
function Tp(e, t) {
  return e.useMedium(t), $s;
}
var Bs = Pp(), Qr = function() {
}, Cr = s.forwardRef(function(e, t) {
  var r = s.useRef(null), n = s.useState({
    onScrollCapture: Qr,
    onWheelCapture: Qr,
    onTouchMoveCapture: Qr
  }), o = n[0], a = n[1], i = e.forwardProps, c = e.children, d = e.className, u = e.removeScrollBar, f = e.enabled, p = e.shards, h = e.sideCar, g = e.noRelative, b = e.noIsolation, m = e.inert, v = e.allowPinchZoom, w = e.as, y = w === void 0 ? "div" : w, C = e.gapMode, S = Fs(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = h, k = Ep([r, t]), _ = Me(Me({}, S), o);
  return s.createElement(
    s.Fragment,
    null,
    f && s.createElement(E, { sideCar: Bs, removeScrollBar: u, shards: p, noRelative: g, noIsolation: b, inert: m, setCallbacks: a, allowPinchZoom: !!v, lockRef: r, gapMode: C }),
    i ? s.cloneElement(s.Children.only(c), Me(Me({}, _), { ref: k })) : s.createElement(y, Me({}, _, { className: d, ref: k }), c)
  );
});
Cr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Cr.classNames = {
  fullWidth: Zt,
  zeroRight: Xt
};
var Ap = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Mp() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ap();
  return t && e.setAttribute("nonce", t), e;
}
function kp(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ip(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Op = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = Mp()) && (kp(t, r), Ip(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, jp = function() {
  var e = Op();
  return function(t, r) {
    s.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Vs = function() {
  var e = jp(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, Dp = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, en = function(e) {
  return parseInt(e || "", 10) || 0;
}, Lp = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [en(r), en(n), en(o)];
}, Fp = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Dp;
  var t = Lp(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, $p = Vs(), gt = "data-scroll-locked", Bp = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, c = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(wp, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(c, "px ").concat(n, `;
  }
  body[`).concat(gt, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(c, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Xt, ` {
    right: `).concat(c, "px ").concat(n, `;
  }
  
  .`).concat(Zt, ` {
    margin-right: `).concat(c, "px ").concat(n, `;
  }
  
  .`).concat(Xt, " .").concat(Xt, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Zt, " .").concat(Zt, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(gt, `] {
    `).concat(Cp, ": ").concat(c, `px;
  }
`);
}, Xo = function() {
  var e = parseInt(document.body.getAttribute(gt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Vp = function() {
  s.useEffect(function() {
    return document.body.setAttribute(gt, (Xo() + 1).toString()), function() {
      var e = Xo() - 1;
      e <= 0 ? document.body.removeAttribute(gt) : document.body.setAttribute(gt, e.toString());
    };
  }, []);
}, Wp = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  Vp();
  var a = s.useMemo(function() {
    return Fp(o);
  }, [o]);
  return s.createElement($p, { styles: Bp(a, !t, o, r ? "" : "!important") });
}, fn = !1;
if (typeof window < "u")
  try {
    var Ut = Object.defineProperty({}, "passive", {
      get: function() {
        return fn = !0, !0;
      }
    });
    window.addEventListener("test", Ut, Ut), window.removeEventListener("test", Ut, Ut);
  } catch {
    fn = !1;
  }
var ut = fn ? { passive: !1 } : !1, Gp = function(e) {
  return e.tagName === "TEXTAREA";
}, Ws = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Gp(e) && r[t] === "visible")
  );
}, Hp = function(e) {
  return Ws(e, "overflowY");
}, zp = function(e) {
  return Ws(e, "overflowX");
}, Zo = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Gs(e, n);
    if (o) {
      var a = Hs(e, n), i = a[1], c = a[2];
      if (i > c)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, Up = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, Kp = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Gs = function(e, t) {
  return e === "v" ? Hp(t) : zp(t);
}, Hs = function(e, t) {
  return e === "v" ? Up(t) : Kp(t);
}, Yp = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, qp = function(e, t, r, n, o) {
  var a = Yp(e, window.getComputedStyle(t).direction), i = a * n, c = r.target, d = t.contains(c), u = !1, f = i > 0, p = 0, h = 0;
  do {
    if (!c)
      break;
    var g = Hs(e, c), b = g[0], m = g[1], v = g[2], w = m - v - a * b;
    (b || w) && Gs(e, c) && (p += w, h += b);
    var y = c.parentNode;
    c = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !d && c !== document.body || // self content
    d && (t.contains(c) || t === c)
  );
  return (f && Math.abs(p) < 1 || !f && Math.abs(h) < 1) && (u = !0), u;
}, Kt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Jo = function(e) {
  return [e.deltaX, e.deltaY];
}, Qo = function(e) {
  return e && "current" in e ? e.current : e;
}, Xp = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Zp = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Jp = 0, ft = [];
function Qp(e) {
  var t = s.useRef([]), r = s.useRef([0, 0]), n = s.useRef(), o = s.useState(Jp++)[0], a = s.useState(Vs)[0], i = s.useRef(e);
  s.useEffect(function() {
    i.current = e;
  }, [e]), s.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = yp([e.lockRef.current], (e.shards || []).map(Qo), !0).filter(Boolean);
      return m.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = s.useCallback(function(m, v) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !i.current.allowPinchZoom;
    var w = Kt(m), y = r.current, C = "deltaX" in m ? m.deltaX : y[0] - w[0], S = "deltaY" in m ? m.deltaY : y[1] - w[1], E, k = m.target, _ = Math.abs(C) > Math.abs(S) ? "h" : "v";
    if ("touches" in m && _ === "h" && k.type === "range")
      return !1;
    var I = Zo(_, k);
    if (!I)
      return !0;
    if (I ? E = _ : (E = _ === "v" ? "h" : "v", I = Zo(_, k)), !I)
      return !1;
    if (!n.current && "changedTouches" in m && (C || S) && (n.current = E), !E)
      return !0;
    var W = n.current || E;
    return qp(W, v, m, W === "h" ? C : S);
  }, []), d = s.useCallback(function(m) {
    var v = m;
    if (!(!ft.length || ft[ft.length - 1] !== a)) {
      var w = "deltaY" in v ? Jo(v) : Kt(v), y = t.current.filter(function(E) {
        return E.name === v.type && (E.target === v.target || v.target === E.shadowParent) && Xp(E.delta, w);
      })[0];
      if (y && y.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!y) {
        var C = (i.current.shards || []).map(Qo).filter(Boolean).filter(function(E) {
          return E.contains(v.target);
        }), S = C.length > 0 ? c(v, C[0]) : !i.current.noIsolation;
        S && v.cancelable && v.preventDefault();
      }
    }
  }, []), u = s.useCallback(function(m, v, w, y) {
    var C = { name: m, delta: v, target: w, should: y, shadowParent: em(w) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== C;
      });
    }, 1);
  }, []), f = s.useCallback(function(m) {
    r.current = Kt(m), n.current = void 0;
  }, []), p = s.useCallback(function(m) {
    u(m.type, Jo(m), m.target, c(m, e.lockRef.current));
  }, []), h = s.useCallback(function(m) {
    u(m.type, Kt(m), m.target, c(m, e.lockRef.current));
  }, []);
  s.useEffect(function() {
    return ft.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", d, ut), document.addEventListener("touchmove", d, ut), document.addEventListener("touchstart", f, ut), function() {
      ft = ft.filter(function(m) {
        return m !== a;
      }), document.removeEventListener("wheel", d, ut), document.removeEventListener("touchmove", d, ut), document.removeEventListener("touchstart", f, ut);
    };
  }, []);
  var g = e.removeScrollBar, b = e.inert;
  return s.createElement(
    s.Fragment,
    null,
    b ? s.createElement(a, { styles: Zp(o) }) : null,
    g ? s.createElement(Wp, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function em(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const tm = Tp(Bs, Qp);
var Sr = s.forwardRef(function(e, t) {
  return s.createElement(Cr, Me({}, e, { ref: t, sideCar: tm }));
});
Sr.classNames = Cr.classNames;
var rm = [" ", "Enter", "ArrowUp", "ArrowDown"], nm = [" ", "Enter"], tt = "Select", [Rr, Er, om] = Nn(tt), [St] = ue(tt, [
  om,
  Ct
]), Nr = Ct(), [am, Xe] = St(tt), [sm, im] = St(tt), zs = (e) => {
  const {
    __scopeSelect: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    value: i,
    defaultValue: c,
    onValueChange: d,
    dir: u,
    name: f,
    autoComplete: p,
    disabled: h,
    required: g,
    form: b
  } = e, m = Nr(t), [v, w] = s.useState(null), [y, C] = s.useState(null), [S, E] = s.useState(!1), k = fr(u), [_, I] = Oe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: a,
    caller: tt
  }), [W, V] = Oe({
    prop: i,
    defaultProp: c,
    onChange: d,
    caller: tt
  }), z = s.useRef(null), O = v ? b || !!v.closest("form") : !0, [B, F] = s.useState(/* @__PURE__ */ new Set()), K = Array.from(B).map((L) => L.props.value).join(";");
  return /* @__PURE__ */ l.jsx(Ln, { ...m, children: /* @__PURE__ */ l.jsxs(
    am,
    {
      required: g,
      scope: t,
      trigger: v,
      onTriggerChange: w,
      valueNode: y,
      onValueNodeChange: C,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: E,
      contentId: Ne(),
      value: W,
      onValueChange: V,
      open: _,
      onOpenChange: I,
      dir: k,
      triggerPointerDownPosRef: z,
      disabled: h,
      children: [
        /* @__PURE__ */ l.jsx(Rr.Provider, { scope: t, children: /* @__PURE__ */ l.jsx(
          sm,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: s.useCallback((L) => {
              F((H) => new Set(H).add(L));
            }, []),
            onNativeOptionRemove: s.useCallback((L) => {
              F((H) => {
                const j = new Set(H);
                return j.delete(L), j;
              });
            }, []),
            children: r
          }
        ) }),
        O ? /* @__PURE__ */ l.jsxs(
          hi,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: f,
            autoComplete: p,
            value: W,
            onChange: (L) => V(L.target.value),
            disabled: h,
            form: b,
            children: [
              W === void 0 ? /* @__PURE__ */ l.jsx("option", { value: "" }) : null,
              Array.from(B)
            ]
          },
          K
        ) : null
      ]
    }
  ) });
};
zs.displayName = tt;
var Us = "SelectTrigger", Ks = s.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e, a = Nr(r), i = Xe(Us, r), c = i.disabled || n, d = U(t, i.onTriggerChange), u = Er(r), f = s.useRef("touch"), [p, h, g] = bi((m) => {
      const v = u().filter((C) => !C.disabled), w = v.find((C) => C.value === i.value), y = xi(v, m, w);
      y !== void 0 && i.onValueChange(y.value);
    }), b = (m) => {
      c || (i.onOpenChange(!0), g()), m && (i.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ l.jsx(Fn, { asChild: !0, ...a, children: /* @__PURE__ */ l.jsx(
      D.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: c,
        "data-disabled": c ? "" : void 0,
        "data-placeholder": vi(i.value) ? "" : void 0,
        ...o,
        ref: d,
        onClick: T(o.onClick, (m) => {
          m.currentTarget.focus(), f.current !== "mouse" && b(m);
        }),
        onPointerDown: T(o.onPointerDown, (m) => {
          f.current = m.pointerType;
          const v = m.target;
          v.hasPointerCapture(m.pointerId) && v.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (b(m), m.preventDefault());
        }),
        onKeyDown: T(o.onKeyDown, (m) => {
          const v = p.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && h(m.key), !(v && m.key === " ") && rm.includes(m.key) && (b(), m.preventDefault());
        })
      }
    ) });
  }
);
Ks.displayName = Us;
var Ys = "SelectValue", qs = s.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, children: a, placeholder: i = "", ...c } = e, d = Xe(Ys, r), { onValueNodeHasChildrenChange: u } = d, f = a !== void 0, p = U(t, d.onValueNodeChange);
    return ie(() => {
      u(f);
    }, [u, f]), /* @__PURE__ */ l.jsx(
      D.span,
      {
        ...c,
        ref: p,
        style: { pointerEvents: "none" },
        children: vi(d.value) ? /* @__PURE__ */ l.jsx(l.Fragment, { children: i }) : a
      }
    );
  }
);
qs.displayName = Ys;
var cm = "SelectIcon", Xs = s.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return /* @__PURE__ */ l.jsx(D.span, { "aria-hidden": !0, ...o, ref: t, children: n || "▼" });
  }
);
Xs.displayName = cm;
var lm = "SelectPortal", Zs = (e) => /* @__PURE__ */ l.jsx(wr, { asChild: !0, ...e });
Zs.displayName = lm;
var rt = "SelectContent", Js = s.forwardRef(
  (e, t) => {
    const r = Xe(rt, e.__scopeSelect), [n, o] = s.useState();
    if (ie(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const a = n;
      return a ? ir.createPortal(
        /* @__PURE__ */ l.jsx(Qs, { scope: e.__scopeSelect, children: /* @__PURE__ */ l.jsx(Rr.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ l.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ l.jsx(ei, { ...e, ref: t });
  }
);
Js.displayName = rt;
var Re = 10, [Qs, Ze] = St(rt), dm = "SelectContentImpl", um = /* @__PURE__ */ Qe("SelectContent.RemoveScroll"), ei = s.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      position: n = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: c,
      sideOffset: d,
      align: u,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: h,
      collisionPadding: g,
      sticky: b,
      hideWhenDetached: m,
      avoidCollisions: v,
      //
      ...w
    } = e, y = Xe(rt, r), [C, S] = s.useState(null), [E, k] = s.useState(null), _ = U(t, (M) => S(M)), [I, W] = s.useState(null), [V, z] = s.useState(
      null
    ), O = Er(r), [B, F] = s.useState(!1), K = s.useRef(!1);
    s.useEffect(() => {
      if (C) return Vn(C);
    }, [C]), Pn();
    const L = s.useCallback(
      (M) => {
        const [X, ...ce] = O().map((oe) => oe.ref.current), [Z] = ce.slice(-1), re = document.activeElement;
        for (const oe of M)
          if (oe === re || (oe?.scrollIntoView({ block: "nearest" }), oe === X && E && (E.scrollTop = 0), oe === Z && E && (E.scrollTop = E.scrollHeight), oe?.focus(), document.activeElement !== re)) return;
      },
      [O, E]
    ), H = s.useCallback(
      () => L([I, C]),
      [L, I, C]
    );
    s.useEffect(() => {
      B && H();
    }, [B, H]);
    const { onOpenChange: j, triggerPointerDownPosRef: P } = y;
    s.useEffect(() => {
      if (C) {
        let M = { x: 0, y: 0 };
        const X = (Z) => {
          M = {
            x: Math.abs(Math.round(Z.pageX) - (P.current?.x ?? 0)),
            y: Math.abs(Math.round(Z.pageY) - (P.current?.y ?? 0))
          };
        }, ce = (Z) => {
          M.x <= 10 && M.y <= 10 ? Z.preventDefault() : C.contains(Z.target) || j(!1), document.removeEventListener("pointermove", X), P.current = null;
        };
        return P.current !== null && (document.addEventListener("pointermove", X), document.addEventListener("pointerup", ce, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", X), document.removeEventListener("pointerup", ce, { capture: !0 });
        };
      }
    }, [C, j, P]), s.useEffect(() => {
      const M = () => j(!1);
      return window.addEventListener("blur", M), window.addEventListener("resize", M), () => {
        window.removeEventListener("blur", M), window.removeEventListener("resize", M);
      };
    }, [j]);
    const [ee, Q] = bi((M) => {
      const X = O().filter((re) => !re.disabled), ce = X.find((re) => re.ref.current === document.activeElement), Z = xi(X, M, ce);
      Z && setTimeout(() => Z.ref.current.focus());
    }), pe = s.useCallback(
      (M, X, ce) => {
        const Z = !K.current && !ce;
        (y.value !== void 0 && y.value === X || Z) && (W(M), Z && (K.current = !0));
      },
      [y.value]
    ), xe = s.useCallback(() => C?.focus(), [C]), me = s.useCallback(
      (M, X, ce) => {
        const Z = !K.current && !ce;
        (y.value !== void 0 && y.value === X || Z) && z(M);
      },
      [y.value]
    ), Se = n === "popper" ? pn : ti, le = Se === pn ? {
      side: c,
      sideOffset: d,
      align: u,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: h,
      collisionPadding: g,
      sticky: b,
      hideWhenDetached: m,
      avoidCollisions: v
    } : {};
    return /* @__PURE__ */ l.jsx(
      Qs,
      {
        scope: r,
        content: C,
        viewport: E,
        onViewportChange: k,
        itemRefCallback: pe,
        selectedItem: I,
        onItemLeave: xe,
        itemTextRefCallback: me,
        focusSelectedItem: H,
        selectedItemText: V,
        position: n,
        isPositioned: B,
        searchRef: ee,
        children: /* @__PURE__ */ l.jsx(Sr, { as: um, allowPinchZoom: !0, children: /* @__PURE__ */ l.jsx(
          hr,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (M) => {
              M.preventDefault();
            },
            onUnmountAutoFocus: T(o, (M) => {
              y.trigger?.focus({ preventScroll: !0 }), M.preventDefault();
            }),
            children: /* @__PURE__ */ l.jsx(
              Dt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (M) => M.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ l.jsx(
                  Se,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (M) => M.preventDefault(),
                    ...w,
                    ...le,
                    onPlaced: () => F(!0),
                    ref: _,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: T(w.onKeyDown, (M) => {
                      const X = M.ctrlKey || M.altKey || M.metaKey;
                      if (M.key === "Tab" && M.preventDefault(), !X && M.key.length === 1 && Q(M.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(M.key)) {
                        let Z = O().filter((re) => !re.disabled).map((re) => re.ref.current);
                        if (["ArrowUp", "End"].includes(M.key) && (Z = Z.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(M.key)) {
                          const re = M.target, oe = Z.indexOf(re);
                          Z = Z.slice(oe + 1);
                        }
                        setTimeout(() => L(Z)), M.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
ei.displayName = dm;
var fm = "SelectItemAlignedPosition", ti = s.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = e, a = Xe(rt, r), i = Ze(rt, r), [c, d] = s.useState(null), [u, f] = s.useState(null), p = U(t, (_) => f(_)), h = Er(r), g = s.useRef(!1), b = s.useRef(!0), { viewport: m, selectedItem: v, selectedItemText: w, focusSelectedItem: y } = i, C = s.useCallback(() => {
    if (a.trigger && a.valueNode && c && u && m && v && w) {
      const _ = a.trigger.getBoundingClientRect(), I = u.getBoundingClientRect(), W = a.valueNode.getBoundingClientRect(), V = w.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const re = V.left - I.left, oe = W.left - re, ge = _.left - oe, Le = _.width + ge, We = Math.max(Le, I.width), Fe = window.innerWidth - Re, it = Ao(oe, [
          Re,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Re, Fe - We)
        ]);
        c.style.minWidth = Le + "px", c.style.left = it + "px";
      } else {
        const re = I.right - V.right, oe = window.innerWidth - W.right - re, ge = window.innerWidth - _.right - oe, Le = _.width + ge, We = Math.max(Le, I.width), Fe = window.innerWidth - Re, it = Ao(oe, [
          Re,
          Math.max(Re, Fe - We)
        ]);
        c.style.minWidth = Le + "px", c.style.right = it + "px";
      }
      const z = h(), O = window.innerHeight - Re * 2, B = m.scrollHeight, F = window.getComputedStyle(u), K = parseInt(F.borderTopWidth, 10), L = parseInt(F.paddingTop, 10), H = parseInt(F.borderBottomWidth, 10), j = parseInt(F.paddingBottom, 10), P = K + L + B + j + H, ee = Math.min(v.offsetHeight * 5, P), Q = window.getComputedStyle(m), pe = parseInt(Q.paddingTop, 10), xe = parseInt(Q.paddingBottom, 10), me = _.top + _.height / 2 - Re, Se = O - me, le = v.offsetHeight / 2, M = v.offsetTop + le, X = K + L + M, ce = P - X;
      if (X <= me) {
        const re = z.length > 0 && v === z[z.length - 1].ref.current;
        c.style.bottom = "0px";
        const oe = u.clientHeight - m.offsetTop - m.offsetHeight, ge = Math.max(
          Se,
          le + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (re ? xe : 0) + oe + H
        ), Le = X + ge;
        c.style.height = Le + "px";
      } else {
        const re = z.length > 0 && v === z[0].ref.current;
        c.style.top = "0px";
        const ge = Math.max(
          me,
          K + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (re ? pe : 0) + le
        ) + ce;
        c.style.height = ge + "px", m.scrollTop = X - me + m.offsetTop;
      }
      c.style.margin = `${Re}px 0`, c.style.minHeight = ee + "px", c.style.maxHeight = O + "px", n?.(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    h,
    a.trigger,
    a.valueNode,
    c,
    u,
    m,
    v,
    w,
    a.dir,
    n
  ]);
  ie(() => C(), [C]);
  const [S, E] = s.useState();
  ie(() => {
    u && E(window.getComputedStyle(u).zIndex);
  }, [u]);
  const k = s.useCallback(
    (_) => {
      _ && b.current === !0 && (C(), y?.(), b.current = !1);
    },
    [C, y]
  );
  return /* @__PURE__ */ l.jsx(
    mm,
    {
      scope: r,
      contentWrapper: c,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: k,
      children: /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: d,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ l.jsx(
            D.div,
            {
              ...o,
              ref: p,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
ti.displayName = fm;
var pm = "SelectPopperPosition", pn = s.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = Re,
    ...a
  } = e, i = Nr(r);
  return /* @__PURE__ */ l.jsx(
    $n,
    {
      ...i,
      ...a,
      ref: t,
      align: n,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
pn.displayName = pm;
var [mm, Wn] = St(rt, {}), mn = "SelectViewport", ri = s.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e, a = Ze(mn, r), i = Wn(mn, r), c = U(t, a.onViewportChange), d = s.useRef(0);
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: n
        }
      ),
      /* @__PURE__ */ l.jsx(Rr.Slot, { scope: r, children: /* @__PURE__ */ l.jsx(
        D.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: c,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: T(o.onScroll, (u) => {
            const f = u.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: h } = i;
            if (h?.current && p) {
              const g = Math.abs(d.current - f.scrollTop);
              if (g > 0) {
                const b = window.innerHeight - Re * 2, m = parseFloat(p.style.minHeight), v = parseFloat(p.style.height), w = Math.max(m, v);
                if (w < b) {
                  const y = w + g, C = Math.min(b, y), S = y - C;
                  p.style.height = C + "px", p.style.bottom === "0px" && (f.scrollTop = S > 0 ? S : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            d.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
ri.displayName = mn;
var ni = "SelectGroup", [gm, hm] = St(ni), oi = s.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = Ne();
    return /* @__PURE__ */ l.jsx(gm, { scope: r, id: o, children: /* @__PURE__ */ l.jsx(D.div, { role: "group", "aria-labelledby": o, ...n, ref: t }) });
  }
);
oi.displayName = ni;
var ai = "SelectLabel", si = s.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = hm(ai, r);
    return /* @__PURE__ */ l.jsx(D.div, { id: o.id, ...n, ref: t });
  }
);
si.displayName = ai;
var rr = "SelectItem", [vm, ii] = St(rr), ci = s.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, c = Xe(rr, r), d = Ze(rr, r), u = c.value === n, [f, p] = s.useState(a ?? ""), [h, g] = s.useState(!1), b = U(
      t,
      (y) => d.itemRefCallback?.(y, n, o)
    ), m = Ne(), v = s.useRef("touch"), w = () => {
      o || (c.onValueChange(n), c.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ l.jsx(
      vm,
      {
        scope: r,
        value: n,
        disabled: o,
        textId: m,
        isSelected: u,
        onItemTextChange: s.useCallback((y) => {
          p((C) => C || (y?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ l.jsx(
          Rr.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ l.jsx(
              D.div,
              {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": u && h,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: b,
                onFocus: T(i.onFocus, () => g(!0)),
                onBlur: T(i.onBlur, () => g(!1)),
                onClick: T(i.onClick, () => {
                  v.current !== "mouse" && w();
                }),
                onPointerUp: T(i.onPointerUp, () => {
                  v.current === "mouse" && w();
                }),
                onPointerDown: T(i.onPointerDown, (y) => {
                  v.current = y.pointerType;
                }),
                onPointerMove: T(i.onPointerMove, (y) => {
                  v.current = y.pointerType, o ? d.onItemLeave?.() : v.current === "mouse" && y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: T(i.onPointerLeave, (y) => {
                  y.currentTarget === document.activeElement && d.onItemLeave?.();
                }),
                onKeyDown: T(i.onKeyDown, (y) => {
                  d.searchRef?.current !== "" && y.key === " " || (nm.includes(y.key) && w(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
ci.displayName = rr;
var Pt = "SelectItemText", li = s.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...a } = e, i = Xe(Pt, r), c = Ze(Pt, r), d = ii(Pt, r), u = im(Pt, r), [f, p] = s.useState(null), h = U(
      t,
      (w) => p(w),
      d.onItemTextChange,
      (w) => c.itemTextRefCallback?.(w, d.value, d.disabled)
    ), g = f?.textContent, b = s.useMemo(
      () => /* @__PURE__ */ l.jsx("option", { value: d.value, disabled: d.disabled, children: g }, d.value),
      [d.disabled, d.value, g]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: v } = u;
    return ie(() => (m(b), () => v(b)), [m, v, b]), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(D.span, { id: d.textId, ...a, ref: h }),
      d.isSelected && i.valueNode && !i.valueNodeHasChildren ? ir.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
li.displayName = Pt;
var di = "SelectItemIndicator", ui = s.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return ii(di, r).isSelected ? /* @__PURE__ */ l.jsx(D.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
ui.displayName = di;
var gn = "SelectScrollUpButton", fi = s.forwardRef((e, t) => {
  const r = Ze(gn, e.__scopeSelect), n = Wn(gn, e.__scopeSelect), [o, a] = s.useState(!1), i = U(t, n.onScrollButtonChange);
  return ie(() => {
    if (r.viewport && r.isPositioned) {
      let c = function() {
        const u = d.scrollTop > 0;
        a(u);
      };
      const d = r.viewport;
      return c(), d.addEventListener("scroll", c), () => d.removeEventListener("scroll", c);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ l.jsx(
    mi,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: c, selectedItem: d } = r;
        c && d && (c.scrollTop = c.scrollTop - d.offsetHeight);
      }
    }
  ) : null;
});
fi.displayName = gn;
var hn = "SelectScrollDownButton", pi = s.forwardRef((e, t) => {
  const r = Ze(hn, e.__scopeSelect), n = Wn(hn, e.__scopeSelect), [o, a] = s.useState(!1), i = U(t, n.onScrollButtonChange);
  return ie(() => {
    if (r.viewport && r.isPositioned) {
      let c = function() {
        const u = d.scrollHeight - d.clientHeight, f = Math.ceil(d.scrollTop) < u;
        a(f);
      };
      const d = r.viewport;
      return c(), d.addEventListener("scroll", c), () => d.removeEventListener("scroll", c);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ l.jsx(
    mi,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: c, selectedItem: d } = r;
        c && d && (c.scrollTop = c.scrollTop + d.offsetHeight);
      }
    }
  ) : null;
});
pi.displayName = hn;
var mi = s.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = e, a = Ze("SelectScrollButton", r), i = s.useRef(null), c = Er(r), d = s.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return s.useEffect(() => () => d(), [d]), ie(() => {
    c().find((f) => f.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [c]), /* @__PURE__ */ l.jsx(
    D.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: T(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerMove: T(o.onPointerMove, () => {
        a.onItemLeave?.(), i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerLeave: T(o.onPointerLeave, () => {
        d();
      })
    }
  );
}), bm = "SelectSeparator", gi = s.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ l.jsx(D.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
gi.displayName = bm;
var vn = "SelectArrow", xm = s.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = Nr(r), a = Xe(vn, r), i = Ze(vn, r);
    return a.open && i.position === "popper" ? /* @__PURE__ */ l.jsx(Bn, { ...o, ...n, ref: t }) : null;
  }
);
xm.displayName = vn;
var ym = "SelectBubbleInput", hi = s.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, n) => {
    const o = s.useRef(null), a = U(n, o), i = lr(t);
    return s.useEffect(() => {
      const c = o.current;
      if (!c) return;
      const d = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        d,
        "value"
      ).set;
      if (i !== t && f) {
        const p = new Event("change", { bubbles: !0 });
        f.call(c, t), c.dispatchEvent(p);
      }
    }, [i, t]), /* @__PURE__ */ l.jsx(
      D.select,
      {
        ...r,
        style: { ...js, ...r.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
hi.displayName = ym;
function vi(e) {
  return e === "" || e === void 0;
}
function bi(e) {
  const t = _e(e), r = s.useRef(""), n = s.useRef(0), o = s.useCallback(
    (i) => {
      const c = r.current + i;
      t(c), (function d(u) {
        r.current = u, window.clearTimeout(n.current), u !== "" && (n.current = window.setTimeout(() => d(""), 1e3));
      })(c);
    },
    [t]
  ), a = s.useCallback(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return s.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a];
}
function xi(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = wm(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((u) => u !== r));
  const d = i.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return d !== r ? d : void 0;
}
function wm(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Cm = zs, yi = Ks, Sm = qs, Rm = Xs, Em = Zs, wi = Js, Nm = ri, _m = oi, Ci = si, Si = ci, Pm = li, Tm = ui, Ri = fi, Ei = pi, Ni = gi;
const Db = Cm, Lb = _m, Fb = Sm, Am = qe(
  "flex w-full items-center justify-between rounded-md border border-gray-900 bg-white text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus:ring-gray-300",
  {
    variants: {
      size: {
        default: "h-[44px] px-3 py-2",
        sm: "h-10 px-3 text-sm",
        lg: "h-14 px-4 text-base"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
), Mm = s.forwardRef(({ className: e, children: t, size: r, ...n }, o) => /* @__PURE__ */ l.jsxs(
  yi,
  {
    ref: o,
    className: R(Am({ size: r, className: e })),
    ...n,
    children: [
      t,
      /* @__PURE__ */ l.jsx(Rm, { asChild: !0, children: /* @__PURE__ */ l.jsx(ka, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Mm.displayName = yi.displayName;
const _i = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  Ri,
  {
    ref: r,
    className: R("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ l.jsx(Zd, { className: "h-4 w-4" })
  }
));
_i.displayName = Ri.displayName;
const Pi = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  Ei,
  {
    ref: r,
    className: R("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ l.jsx(ka, { className: "h-4 w-4" })
  }
));
Pi.displayName = Ei.displayName;
const km = s.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, o) => /* @__PURE__ */ l.jsx(Em, { children: /* @__PURE__ */ l.jsxs(
  wi,
  {
    ref: o,
    className: R(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white text-gray-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...n,
    children: [
      /* @__PURE__ */ l.jsx(_i, {}),
      /* @__PURE__ */ l.jsx(
        Nm,
        {
          className: R(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ l.jsx(Pi, {})
    ]
  }
) }));
km.displayName = wi.displayName;
const Im = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  Ci,
  {
    ref: r,
    className: R("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
Im.displayName = Ci.displayName;
const Om = s.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ l.jsxs(
  Si,
  {
    ref: n,
    className: R(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Tm, { children: /* @__PURE__ */ l.jsx(En, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ l.jsx(Pm, { children: t })
    ]
  }
));
Om.displayName = Si.displayName;
const jm = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  Ni,
  {
    ref: r,
    className: R("-mx-1 my-1 h-px bg-gray-100 dark:bg-gray-800", e),
    ...t
  }
));
jm.displayName = Ni.displayName;
const Dm = s.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
    "textarea",
    {
      className: R(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...t
    }
  )
);
Dm.displayName = "Textarea";
const $b = ({
  label: e,
  htmlFor: t,
  required: r = !1,
  optional: n = !1,
  children: o,
  className: a = ""
}) => /* @__PURE__ */ l.jsxs("div", { className: a, children: [
  /* @__PURE__ */ l.jsxs("label", { htmlFor: t, className: "block mb-2 font-normal text-base text-gray-700", children: [
    e,
    r && /* @__PURE__ */ l.jsx("span", { className: "text-red-500", children: " *" }),
    n && /* @__PURE__ */ l.jsx("span", { className: "text-gray-500 text-xs ml-1", children: "(Optional)" })
  ] }),
  o
] }), Lm = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: r,
    className: R(
      "rounded-lg bg-white mx-auto shadow p-6 border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 sm:flex-row sm:items-center rounded-xl shadow-sm w-full rounded-[24px]",
      e
    ),
    ...t
  }
));
Lm.displayName = "Card";
const Fm = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: r,
    className: R("flex flex-col space-y-1.5 p-3", e),
    ...t
  }
));
Fm.displayName = "CardHeader";
const $m = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: r,
    className: R(
      e
    ),
    ...t
  }
));
$m.displayName = "CardTitle";
const Bm = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: r,
    className: R("text-base text-gray-500 dark:text-gray-400", e),
    ...t
  }
));
Bm.displayName = "CardDescription";
const Vm = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx("div", { ref: r, className: R("", e), ...t }));
Vm.displayName = "CardContent";
const Wm = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: r,
    className: R("flex items-center", e),
    ...t
  }
));
Wm.displayName = "CardFooter";
var Gm = "Separator", ea = "horizontal", Hm = ["horizontal", "vertical"], Ti = s.forwardRef((e, t) => {
  const { decorative: r, orientation: n = ea, ...o } = e, a = zm(n) ? n : ea, c = r ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ l.jsx(
    D.div,
    {
      "data-orientation": a,
      ...c,
      ...o,
      ref: t
    }
  );
});
Ti.displayName = Gm;
function zm(e) {
  return Hm.includes(e);
}
var Ai = Ti;
const Mi = s.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...n }, o) => /* @__PURE__ */ l.jsx(
    Ai,
    {
      ref: o,
      decorative: r,
      orientation: t,
      className: R(
        "shrink-0 bg-gray-200 dark:bg-gray-800",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...n
    }
  )
);
Mi.displayName = Ai.displayName;
var _r = "Collapsible", [Um] = ue(_r), [Km, Gn] = Um(_r), ki = s.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: r,
      open: n,
      defaultOpen: o,
      disabled: a,
      onOpenChange: i,
      ...c
    } = e, [d, u] = Oe({
      prop: n,
      defaultProp: o ?? !1,
      onChange: i,
      caller: _r
    });
    return /* @__PURE__ */ l.jsx(
      Km,
      {
        scope: r,
        disabled: a,
        contentId: Ne(),
        open: d,
        onOpenToggle: s.useCallback(() => u((f) => !f), [u]),
        children: /* @__PURE__ */ l.jsx(
          D.div,
          {
            "data-state": zn(d),
            "data-disabled": a ? "" : void 0,
            ...c,
            ref: t
          }
        )
      }
    );
  }
);
ki.displayName = _r;
var Ii = "CollapsibleTrigger", Ym = s.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: r, ...n } = e, o = Gn(Ii, r);
    return /* @__PURE__ */ l.jsx(
      D.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": zn(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...n,
        ref: t,
        onClick: T(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Ym.displayName = Ii;
var Hn = "CollapsibleContent", qm = s.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = Gn(Hn, e.__scopeCollapsible);
    return /* @__PURE__ */ l.jsx(Ce, { present: r || o.open, children: ({ present: a }) => /* @__PURE__ */ l.jsx(Xm, { ...n, ref: t, present: a }) });
  }
);
qm.displayName = Hn;
var Xm = s.forwardRef((e, t) => {
  const { __scopeCollapsible: r, present: n, children: o, ...a } = e, i = Gn(Hn, r), [c, d] = s.useState(n), u = s.useRef(null), f = U(t, u), p = s.useRef(0), h = p.current, g = s.useRef(0), b = g.current, m = i.open || c, v = s.useRef(m), w = s.useRef(void 0);
  return s.useEffect(() => {
    const y = requestAnimationFrame(() => v.current = !1);
    return () => cancelAnimationFrame(y);
  }, []), ie(() => {
    const y = u.current;
    if (y) {
      w.current = w.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const C = y.getBoundingClientRect();
      p.current = C.height, g.current = C.width, v.current || (y.style.transitionDuration = w.current.transitionDuration, y.style.animationName = w.current.animationName), d(n);
    }
  }, [i.open, n]), /* @__PURE__ */ l.jsx(
    D.div,
    {
      "data-state": zn(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !m,
      ...a,
      ref: f,
      style: {
        "--radix-collapsible-content-height": h ? `${h}px` : void 0,
        "--radix-collapsible-content-width": b ? `${b}px` : void 0,
        ...e.style
      },
      children: m && o
    }
  );
});
function zn(e) {
  return e ? "open" : "closed";
}
var Zm = ki;
const Bb = Zm, Jm = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: r,
    className: R(
      "mx-auto mb-8",
      e
    ),
    ...t
  }
));
Jm.displayName = "HeaderSection";
const Qm = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: r,
    className: R(
      "w-[calc(100%+2rem)] md:w-[calc(100%+1rem)] md:w-full m-[0_-1rem] md:mx-auto  rounded-lg bg-white shadow p-4 md:p-6 border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 sm:flex-row sm:items-center shadow-sm",
      e
    ),
    ...t
  }
));
Qm.displayName = "ContentSection";
const eg = s.forwardRef(({ ...e }, t) => /* @__PURE__ */ l.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
eg.displayName = "Breadcrumb";
const tg = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "ol",
  {
    ref: r,
    className: R(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-gray-500 sm:gap-2.5 dark:text-gray-400",
      e
    ),
    ...t
  }
));
tg.displayName = "BreadcrumbList";
const rg = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "li",
  {
    ref: r,
    className: R("inline-flex items-center gap-1.5", e),
    ...t
  }
));
rg.displayName = "BreadcrumbItem";
const ng = s.forwardRef(({ asChild: e, className: t, ...r }, n) => {
  const o = e ? ot : "a";
  return /* @__PURE__ */ l.jsx(
    o,
    {
      ref: n,
      className: R("transition-colors hover:text-gray-950 dark:hover:text-gray-50", t),
      ...r
    }
  );
});
ng.displayName = "BreadcrumbLink";
const og = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "span",
  {
    ref: r,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: R("font-normal text-gray-950 dark:text-gray-50", e),
    ...t
  }
));
og.displayName = "BreadcrumbPage";
var bn = ["Enter", " "], ag = ["ArrowDown", "PageUp", "Home"], Oi = ["ArrowUp", "PageDown", "End"], sg = [...ag, ...Oi], ig = {
  ltr: [...bn, "ArrowRight"],
  rtl: [...bn, "ArrowLeft"]
}, cg = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Ft = "Menu", [kt, lg, dg] = Nn(Ft), [at, ji] = ue(Ft, [
  dg,
  Ct,
  pr
]), Pr = Ct(), Di = pr(), [ug, st] = at(Ft), [fg, $t] = at(Ft), Li = (e) => {
  const { __scopeMenu: t, open: r = !1, children: n, dir: o, onOpenChange: a, modal: i = !0 } = e, c = Pr(t), [d, u] = s.useState(null), f = s.useRef(!1), p = _e(a), h = fr(o);
  return s.useEffect(() => {
    const g = () => {
      f.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, b = () => f.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), /* @__PURE__ */ l.jsx(Ln, { ...c, children: /* @__PURE__ */ l.jsx(
    ug,
    {
      scope: t,
      open: r,
      onOpenChange: p,
      content: d,
      onContentChange: u,
      children: /* @__PURE__ */ l.jsx(
        fg,
        {
          scope: t,
          onClose: s.useCallback(() => p(!1), [p]),
          isUsingKeyboardRef: f,
          dir: h,
          modal: i,
          children: n
        }
      )
    }
  ) });
};
Li.displayName = Ft;
var pg = "MenuAnchor", Un = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = Pr(r);
    return /* @__PURE__ */ l.jsx(Fn, { ...o, ...n, ref: t });
  }
);
Un.displayName = pg;
var Kn = "MenuPortal", [mg, Fi] = at(Kn, {
  forceMount: void 0
}), $i = (e) => {
  const { __scopeMenu: t, forceMount: r, children: n, container: o } = e, a = st(Kn, t);
  return /* @__PURE__ */ l.jsx(mg, { scope: t, forceMount: r, children: /* @__PURE__ */ l.jsx(Ce, { present: r || a.open, children: /* @__PURE__ */ l.jsx(wr, { asChild: !0, container: o, children: n }) }) });
};
$i.displayName = Kn;
var we = "MenuContent", [gg, Yn] = at(we), Bi = s.forwardRef(
  (e, t) => {
    const r = Fi(we, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = st(we, e.__scopeMenu), i = $t(we, e.__scopeMenu);
    return /* @__PURE__ */ l.jsx(kt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(Ce, { present: n || a.open, children: /* @__PURE__ */ l.jsx(kt.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ l.jsx(hg, { ...o, ref: t }) : /* @__PURE__ */ l.jsx(vg, { ...o, ref: t }) }) }) });
  }
), hg = s.forwardRef(
  (e, t) => {
    const r = st(we, e.__scopeMenu), n = s.useRef(null), o = U(t, n);
    return s.useEffect(() => {
      const a = n.current;
      if (a) return Vn(a);
    }, []), /* @__PURE__ */ l.jsx(
      qn,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: T(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }
), vg = s.forwardRef((e, t) => {
  const r = st(we, e.__scopeMenu);
  return /* @__PURE__ */ l.jsx(
    qn,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}), bg = /* @__PURE__ */ Qe("MenuContent.ScrollLock"), qn = s.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: r,
      loop: n = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: c,
      onEntryFocus: d,
      onEscapeKeyDown: u,
      onPointerDownOutside: f,
      onFocusOutside: p,
      onInteractOutside: h,
      onDismiss: g,
      disableOutsideScroll: b,
      ...m
    } = e, v = st(we, r), w = $t(we, r), y = Pr(r), C = Di(r), S = lg(r), [E, k] = s.useState(null), _ = s.useRef(null), I = U(t, _, v.onContentChange), W = s.useRef(0), V = s.useRef(""), z = s.useRef(0), O = s.useRef(null), B = s.useRef("right"), F = s.useRef(0), K = b ? Sr : s.Fragment, L = b ? { as: bg, allowPinchZoom: !0 } : void 0, H = (P) => {
      const ee = V.current + P, Q = S().filter((M) => !M.disabled), pe = document.activeElement, xe = Q.find((M) => M.ref.current === pe)?.textValue, me = Q.map((M) => M.textValue), Se = Ag(me, ee, xe), le = Q.find((M) => M.textValue === Se)?.ref.current;
      (function M(X) {
        V.current = X, window.clearTimeout(W.current), X !== "" && (W.current = window.setTimeout(() => M(""), 1e3));
      })(ee), le && setTimeout(() => le.focus());
    };
    s.useEffect(() => () => window.clearTimeout(W.current), []), Pn();
    const j = s.useCallback((P) => B.current === O.current?.side && kg(P, O.current?.area), []);
    return /* @__PURE__ */ l.jsx(
      gg,
      {
        scope: r,
        searchRef: V,
        onItemEnter: s.useCallback(
          (P) => {
            j(P) && P.preventDefault();
          },
          [j]
        ),
        onItemLeave: s.useCallback(
          (P) => {
            j(P) || (_.current?.focus(), k(null));
          },
          [j]
        ),
        onTriggerLeave: s.useCallback(
          (P) => {
            j(P) && P.preventDefault();
          },
          [j]
        ),
        pointerGraceTimerRef: z,
        onPointerGraceIntentChange: s.useCallback((P) => {
          O.current = P;
        }, []),
        children: /* @__PURE__ */ l.jsx(K, { ...L, children: /* @__PURE__ */ l.jsx(
          hr,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: T(a, (P) => {
              P.preventDefault(), _.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ l.jsx(
              Dt,
              {
                asChild: !0,
                disableOutsidePointerEvents: c,
                onEscapeKeyDown: u,
                onPointerDownOutside: f,
                onFocusOutside: p,
                onInteractOutside: h,
                onDismiss: g,
                children: /* @__PURE__ */ l.jsx(
                  Ba,
                  {
                    asChild: !0,
                    ...C,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: n,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: k,
                    onEntryFocus: T(d, (P) => {
                      w.isUsingKeyboardRef.current || P.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ l.jsx(
                      $n,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": rc(v.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...y,
                        ...m,
                        ref: I,
                        style: { outline: "none", ...m.style },
                        onKeyDown: T(m.onKeyDown, (P) => {
                          const Q = P.target.closest("[data-radix-menu-content]") === P.currentTarget, pe = P.ctrlKey || P.altKey || P.metaKey, xe = P.key.length === 1;
                          Q && (P.key === "Tab" && P.preventDefault(), !pe && xe && H(P.key));
                          const me = _.current;
                          if (P.target !== me || !sg.includes(P.key)) return;
                          P.preventDefault();
                          const le = S().filter((M) => !M.disabled).map((M) => M.ref.current);
                          Oi.includes(P.key) && le.reverse(), Pg(le);
                        }),
                        onBlur: T(e.onBlur, (P) => {
                          P.currentTarget.contains(P.target) || (window.clearTimeout(W.current), V.current = "");
                        }),
                        onPointerMove: T(
                          e.onPointerMove,
                          It((P) => {
                            const ee = P.target, Q = F.current !== P.clientX;
                            if (P.currentTarget.contains(ee) && Q) {
                              const pe = P.clientX > F.current ? "right" : "left";
                              B.current = pe, F.current = P.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Bi.displayName = we;
var xg = "MenuGroup", Xn = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ l.jsx(D.div, { role: "group", ...n, ref: t });
  }
);
Xn.displayName = xg;
var yg = "MenuLabel", Vi = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ l.jsx(D.div, { ...n, ref: t });
  }
);
Vi.displayName = yg;
var nr = "MenuItem", ta = "menu.itemSelect", Tr = s.forwardRef(
  (e, t) => {
    const { disabled: r = !1, onSelect: n, ...o } = e, a = s.useRef(null), i = $t(nr, e.__scopeMenu), c = Yn(nr, e.__scopeMenu), d = U(t, a), u = s.useRef(!1), f = () => {
      const p = a.current;
      if (!r && p) {
        const h = new CustomEvent(ta, { bubbles: !0, cancelable: !0 });
        p.addEventListener(ta, (g) => n?.(g), { once: !0 }), Sa(p, h), h.defaultPrevented ? u.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ l.jsx(
      Wi,
      {
        ...o,
        ref: d,
        disabled: r,
        onClick: T(e.onClick, f),
        onPointerDown: (p) => {
          e.onPointerDown?.(p), u.current = !0;
        },
        onPointerUp: T(e.onPointerUp, (p) => {
          u.current || p.currentTarget?.click();
        }),
        onKeyDown: T(e.onKeyDown, (p) => {
          const h = c.searchRef.current !== "";
          r || h && p.key === " " || bn.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }
);
Tr.displayName = nr;
var Wi = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, disabled: n = !1, textValue: o, ...a } = e, i = Yn(nr, r), c = Di(r), d = s.useRef(null), u = U(t, d), [f, p] = s.useState(!1), [h, g] = s.useState("");
    return s.useEffect(() => {
      const b = d.current;
      b && g((b.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ l.jsx(
      kt.ItemSlot,
      {
        scope: r,
        disabled: n,
        textValue: o ?? h,
        children: /* @__PURE__ */ l.jsx(Va, { asChild: !0, ...c, focusable: !n, children: /* @__PURE__ */ l.jsx(
          D.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": n || void 0,
            "data-disabled": n ? "" : void 0,
            ...a,
            ref: u,
            onPointerMove: T(
              e.onPointerMove,
              It((b) => {
                n ? i.onItemLeave(b) : (i.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: T(
              e.onPointerLeave,
              It((b) => i.onItemLeave(b))
            ),
            onFocus: T(e.onFocus, () => p(!0)),
            onBlur: T(e.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }
), wg = "MenuCheckboxItem", Gi = s.forwardRef(
  (e, t) => {
    const { checked: r = !1, onCheckedChange: n, ...o } = e;
    return /* @__PURE__ */ l.jsx(Yi, { scope: e.__scopeMenu, checked: r, children: /* @__PURE__ */ l.jsx(
      Tr,
      {
        role: "menuitemcheckbox",
        "aria-checked": or(r) ? "mixed" : r,
        ...o,
        ref: t,
        "data-state": Jn(r),
        onSelect: T(
          o.onSelect,
          () => n?.(or(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Gi.displayName = wg;
var Hi = "MenuRadioGroup", [Cg, Sg] = at(
  Hi,
  { value: void 0, onValueChange: () => {
  } }
), zi = s.forwardRef(
  (e, t) => {
    const { value: r, onValueChange: n, ...o } = e, a = _e(n);
    return /* @__PURE__ */ l.jsx(Cg, { scope: e.__scopeMenu, value: r, onValueChange: a, children: /* @__PURE__ */ l.jsx(Xn, { ...o, ref: t }) });
  }
);
zi.displayName = Hi;
var Ui = "MenuRadioItem", Ki = s.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, o = Sg(Ui, e.__scopeMenu), a = r === o.value;
    return /* @__PURE__ */ l.jsx(Yi, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ l.jsx(
      Tr,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...n,
        ref: t,
        "data-state": Jn(a),
        onSelect: T(
          n.onSelect,
          () => o.onValueChange?.(r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ki.displayName = Ui;
var Zn = "MenuItemIndicator", [Yi, Rg] = at(
  Zn,
  { checked: !1 }
), qi = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, forceMount: n, ...o } = e, a = Rg(Zn, r);
    return /* @__PURE__ */ l.jsx(
      Ce,
      {
        present: n || or(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ l.jsx(
          D.span,
          {
            ...o,
            ref: t,
            "data-state": Jn(a.checked)
          }
        )
      }
    );
  }
);
qi.displayName = Zn;
var Eg = "MenuSeparator", Xi = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ l.jsx(
      D.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...n,
        ref: t
      }
    );
  }
);
Xi.displayName = Eg;
var Ng = "MenuArrow", Zi = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, o = Pr(r);
    return /* @__PURE__ */ l.jsx(Bn, { ...o, ...n, ref: t });
  }
);
Zi.displayName = Ng;
var _g = "MenuSub", [Vb, Ji] = at(_g), Tt = "MenuSubTrigger", Qi = s.forwardRef(
  (e, t) => {
    const r = st(Tt, e.__scopeMenu), n = $t(Tt, e.__scopeMenu), o = Ji(Tt, e.__scopeMenu), a = Yn(Tt, e.__scopeMenu), i = s.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: d } = a, u = { __scopeMenu: e.__scopeMenu }, f = s.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return s.useEffect(() => f, [f]), s.useEffect(() => {
      const p = c.current;
      return () => {
        window.clearTimeout(p), d(null);
      };
    }, [c, d]), /* @__PURE__ */ l.jsx(Un, { asChild: !0, ...u, children: /* @__PURE__ */ l.jsx(
      Wi,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": o.contentId,
        "data-state": rc(r.open),
        ...e,
        ref: cr(t, o.onTriggerChange),
        onClick: (p) => {
          e.onClick?.(p), !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: T(
          e.onPointerMove,
          It((p) => {
            a.onItemEnter(p), !p.defaultPrevented && !e.disabled && !r.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              r.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: T(
          e.onPointerLeave,
          It((p) => {
            f();
            const h = r.content?.getBoundingClientRect();
            if (h) {
              const g = r.content?.dataset.side, b = g === "right", m = b ? -5 : 5, v = h[b ? "left" : "right"], w = h[b ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: p.clientX + m, y: p.clientY },
                  { x: v, y: h.top },
                  { x: w, y: h.top },
                  { x: w, y: h.bottom },
                  { x: v, y: h.bottom }
                ],
                side: g
              }), window.clearTimeout(c.current), c.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(p), p.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: T(e.onKeyDown, (p) => {
          const h = a.searchRef.current !== "";
          e.disabled || h && p.key === " " || ig[n.dir].includes(p.key) && (r.onOpenChange(!0), r.content?.focus(), p.preventDefault());
        })
      }
    ) });
  }
);
Qi.displayName = Tt;
var ec = "MenuSubContent", tc = s.forwardRef(
  (e, t) => {
    const r = Fi(we, e.__scopeMenu), { forceMount: n = r.forceMount, ...o } = e, a = st(we, e.__scopeMenu), i = $t(we, e.__scopeMenu), c = Ji(ec, e.__scopeMenu), d = s.useRef(null), u = U(t, d);
    return /* @__PURE__ */ l.jsx(kt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(Ce, { present: n || a.open, children: /* @__PURE__ */ l.jsx(kt.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(
      qn,
      {
        id: c.contentId,
        "aria-labelledby": c.triggerId,
        ...o,
        ref: u,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          i.isUsingKeyboardRef.current && d.current?.focus(), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: T(e.onFocusOutside, (f) => {
          f.target !== c.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: T(e.onEscapeKeyDown, (f) => {
          i.onClose(), f.preventDefault();
        }),
        onKeyDown: T(e.onKeyDown, (f) => {
          const p = f.currentTarget.contains(f.target), h = cg[i.dir].includes(f.key);
          p && h && (a.onOpenChange(!1), c.trigger?.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
tc.displayName = ec;
function rc(e) {
  return e ? "open" : "closed";
}
function or(e) {
  return e === "indeterminate";
}
function Jn(e) {
  return or(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Pg(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t)) return;
}
function Tg(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
function Ag(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = Tg(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((u) => u !== r));
  const d = i.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return d !== r ? d : void 0;
}
function Mg(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const c = t[a], d = t[i], u = c.x, f = c.y, p = d.x, h = d.y;
    f > n != h > n && r < (p - u) * (n - f) / (h - f) + u && (o = !o);
  }
  return o;
}
function kg(e, t) {
  if (!t) return !1;
  const r = { x: e.clientX, y: e.clientY };
  return Mg(r, t);
}
function It(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Ig = Li, Og = Un, jg = $i, Dg = Bi, Lg = Xn, Fg = Vi, $g = Tr, Bg = Gi, Vg = zi, Wg = Ki, Gg = qi, Hg = Xi, zg = Zi, Ug = Qi, Kg = tc, Ar = "DropdownMenu", [Yg] = ue(
  Ar,
  [ji]
), fe = ji(), [qg, nc] = Yg(Ar), oc = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: r,
    dir: n,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: c = !0
  } = e, d = fe(t), u = s.useRef(null), [f, p] = Oe({
    prop: o,
    defaultProp: a ?? !1,
    onChange: i,
    caller: Ar
  });
  return /* @__PURE__ */ l.jsx(
    qg,
    {
      scope: t,
      triggerId: Ne(),
      triggerRef: u,
      contentId: Ne(),
      open: f,
      onOpenChange: p,
      onOpenToggle: s.useCallback(() => p((h) => !h), [p]),
      modal: c,
      children: /* @__PURE__ */ l.jsx(Ig, { ...d, open: f, onOpenChange: p, dir: n, modal: c, children: r })
    }
  );
};
oc.displayName = Ar;
var ac = "DropdownMenuTrigger", Xg = s.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, disabled: n = !1, ...o } = e, a = nc(ac, r), i = fe(r);
    return /* @__PURE__ */ l.jsx(Og, { asChild: !0, ...i, children: /* @__PURE__ */ l.jsx(
      D.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": n ? "" : void 0,
        disabled: n,
        ...o,
        ref: cr(t, a.triggerRef),
        onPointerDown: T(e.onPointerDown, (c) => {
          !n && c.button === 0 && c.ctrlKey === !1 && (a.onOpenToggle(), a.open || c.preventDefault());
        }),
        onKeyDown: T(e.onKeyDown, (c) => {
          n || (["Enter", " "].includes(c.key) && a.onOpenToggle(), c.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(c.key) && c.preventDefault());
        })
      }
    ) });
  }
);
Xg.displayName = ac;
var Zg = "DropdownMenuPortal", sc = (e) => {
  const { __scopeDropdownMenu: t, ...r } = e, n = fe(t);
  return /* @__PURE__ */ l.jsx(jg, { ...n, ...r });
};
sc.displayName = Zg;
var ic = "DropdownMenuContent", cc = s.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = nc(ic, r), a = fe(r), i = s.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      Dg,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...n,
        ref: t,
        onCloseAutoFocus: T(e.onCloseAutoFocus, (c) => {
          i.current || o.triggerRef.current?.focus(), i.current = !1, c.preventDefault();
        }),
        onInteractOutside: T(e.onInteractOutside, (c) => {
          const d = c.detail.originalEvent, u = d.button === 0 && d.ctrlKey === !0, f = d.button === 2 || u;
          (!o.modal || f) && (i.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
cc.displayName = ic;
var Jg = "DropdownMenuGroup", Qg = s.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = fe(r);
    return /* @__PURE__ */ l.jsx(Lg, { ...o, ...n, ref: t });
  }
);
Qg.displayName = Jg;
var eh = "DropdownMenuLabel", lc = s.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = fe(r);
    return /* @__PURE__ */ l.jsx(Fg, { ...o, ...n, ref: t });
  }
);
lc.displayName = eh;
var th = "DropdownMenuItem", dc = s.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = fe(r);
    return /* @__PURE__ */ l.jsx($g, { ...o, ...n, ref: t });
  }
);
dc.displayName = th;
var rh = "DropdownMenuCheckboxItem", uc = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = fe(r);
  return /* @__PURE__ */ l.jsx(Bg, { ...o, ...n, ref: t });
});
uc.displayName = rh;
var nh = "DropdownMenuRadioGroup", oh = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = fe(r);
  return /* @__PURE__ */ l.jsx(Vg, { ...o, ...n, ref: t });
});
oh.displayName = nh;
var ah = "DropdownMenuRadioItem", fc = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = fe(r);
  return /* @__PURE__ */ l.jsx(Wg, { ...o, ...n, ref: t });
});
fc.displayName = ah;
var sh = "DropdownMenuItemIndicator", pc = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = fe(r);
  return /* @__PURE__ */ l.jsx(Gg, { ...o, ...n, ref: t });
});
pc.displayName = sh;
var ih = "DropdownMenuSeparator", mc = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = fe(r);
  return /* @__PURE__ */ l.jsx(Hg, { ...o, ...n, ref: t });
});
mc.displayName = ih;
var ch = "DropdownMenuArrow", lh = s.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, o = fe(r);
    return /* @__PURE__ */ l.jsx(zg, { ...o, ...n, ref: t });
  }
);
lh.displayName = ch;
var dh = "DropdownMenuSubTrigger", gc = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = fe(r);
  return /* @__PURE__ */ l.jsx(Ug, { ...o, ...n, ref: t });
});
gc.displayName = dh;
var uh = "DropdownMenuSubContent", hc = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, o = fe(r);
  return /* @__PURE__ */ l.jsx(
    Kg,
    {
      ...o,
      ...n,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
hc.displayName = uh;
var fh = oc, ph = sc, vc = cc, bc = lc, xc = dc, yc = uc, wc = fc, Cc = pc, Sc = mc, Rc = gc, Ec = hc;
const Wb = fh, mh = s.forwardRef(({ className: e, inset: t, children: r, ...n }, o) => /* @__PURE__ */ l.jsxs(
  Rc,
  {
    ref: o,
    className: R(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-gray-100 data-[state=open]:bg-gray-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus:bg-gray-800 dark:data-[state=open]:bg-gray-800",
      t && "pl-8",
      e
    ),
    ...n,
    children: [
      r,
      /* @__PURE__ */ l.jsx(Xd, { className: "ml-auto" })
    ]
  }
));
mh.displayName = Rc.displayName;
const gh = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  Ec,
  {
    ref: r,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
      e
    ),
    ...t
  }
));
gh.displayName = Ec.displayName;
const hh = s.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ l.jsx(ph, { children: /* @__PURE__ */ l.jsx(
  vc,
  {
    ref: n,
    sideOffset: t,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
      e
    ),
    ...r
  }
) }));
hh.displayName = vc.displayName;
const vh = s.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ l.jsx(
  xc,
  {
    ref: n,
    className: R(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus:bg-gray-800 dark:focus:text-gray-50",
      t && "pl-8",
      e
    ),
    ...r
  }
));
vh.displayName = xc.displayName;
const bh = s.forwardRef(({ className: e, children: t, checked: r, ...n }, o) => /* @__PURE__ */ l.jsxs(
  yc,
  {
    ref: o,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-50",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Cc, { children: /* @__PURE__ */ l.jsx(En, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
bh.displayName = yc.displayName;
const xh = s.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ l.jsxs(
  wc,
  {
    ref: n,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Cc, { children: /* @__PURE__ */ l.jsx(Ia, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
xh.displayName = wc.displayName;
const yh = s.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ l.jsx(
  bc,
  {
    ref: n,
    className: R(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...r
  }
));
yh.displayName = bc.displayName;
const wh = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  Sc,
  {
    ref: r,
    className: R("-mx-1 my-1 h-px bg-gray-100 dark:bg-gray-800", e),
    ...t
  }
));
wh.displayName = Sc.displayName;
const tn = 768;
function Ch() {
  const [e, t] = s.useState(void 0);
  return s.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${tn - 1}px)`), n = () => {
      t(window.innerWidth < tn);
    };
    return r.addEventListener("change", n), t(window.innerWidth < tn), () => r.removeEventListener("change", n);
  }, []), !!e;
}
var Mr = "Dialog", [Nc] = ue(Mr), [Sh, Ae] = Nc(Mr), _c = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, c = s.useRef(null), d = s.useRef(null), [u, f] = Oe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Mr
  });
  return /* @__PURE__ */ l.jsx(
    Sh,
    {
      scope: t,
      triggerRef: c,
      contentRef: d,
      contentId: Ne(),
      titleId: Ne(),
      descriptionId: Ne(),
      open: u,
      onOpenChange: f,
      onOpenToggle: s.useCallback(() => f((p) => !p), [f]),
      modal: i,
      children: r
    }
  );
};
_c.displayName = Mr;
var Pc = "DialogTrigger", Rh = s.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ae(Pc, r), a = U(t, o.triggerRef);
    return /* @__PURE__ */ l.jsx(
      D.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": to(o.open),
        ...n,
        ref: a,
        onClick: T(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Rh.displayName = Pc;
var Qn = "DialogPortal", [Eh, Tc] = Nc(Qn, {
  forceMount: void 0
}), Ac = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, a = Ae(Qn, t);
  return /* @__PURE__ */ l.jsx(Eh, { scope: t, forceMount: r, children: s.Children.map(n, (i) => /* @__PURE__ */ l.jsx(Ce, { present: r || a.open, children: /* @__PURE__ */ l.jsx(wr, { asChild: !0, container: o, children: i }) })) });
};
Ac.displayName = Qn;
var ar = "DialogOverlay", Mc = s.forwardRef(
  (e, t) => {
    const r = Tc(ar, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = Ae(ar, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ l.jsx(Ce, { present: n || a.open, children: /* @__PURE__ */ l.jsx(_h, { ...o, ref: t }) }) : null;
  }
);
Mc.displayName = ar;
var Nh = /* @__PURE__ */ Qe("DialogOverlay.RemoveScroll"), _h = s.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ae(ar, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ l.jsx(Sr, { as: Nh, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ l.jsx(
        D.div,
        {
          "data-state": to(o.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), nt = "DialogContent", kc = s.forwardRef(
  (e, t) => {
    const r = Tc(nt, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = Ae(nt, e.__scopeDialog);
    return /* @__PURE__ */ l.jsx(Ce, { present: n || a.open, children: a.modal ? /* @__PURE__ */ l.jsx(Ph, { ...o, ref: t }) : /* @__PURE__ */ l.jsx(Th, { ...o, ref: t }) });
  }
);
kc.displayName = nt;
var Ph = s.forwardRef(
  (e, t) => {
    const r = Ae(nt, e.__scopeDialog), n = s.useRef(null), o = U(t, r.contentRef, n);
    return s.useEffect(() => {
      const a = n.current;
      if (a) return Vn(a);
    }, []), /* @__PURE__ */ l.jsx(
      Ic,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: T(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: T(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || c) && a.preventDefault();
        }),
        onFocusOutside: T(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), Th = s.forwardRef(
  (e, t) => {
    const r = Ae(nt, e.__scopeDialog), n = s.useRef(!1), o = s.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      Ic,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (n.current || r.triggerRef.current?.focus(), a.preventDefault()), n.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (n.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          r.triggerRef.current?.contains(i) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), Ic = s.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, c = Ae(nt, r), d = s.useRef(null), u = U(t, d);
    return Pn(), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        hr,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ l.jsx(
            Dt,
            {
              role: "dialog",
              id: c.contentId,
              "aria-describedby": c.descriptionId,
              "aria-labelledby": c.titleId,
              "data-state": to(c.open),
              ...i,
              ref: u,
              onDismiss: () => c.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(Ah, { titleId: c.titleId }),
        /* @__PURE__ */ l.jsx(kh, { contentRef: d, descriptionId: c.descriptionId })
      ] })
    ] });
  }
), eo = "DialogTitle", Oc = s.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ae(eo, r);
    return /* @__PURE__ */ l.jsx(D.h2, { id: o.titleId, ...n, ref: t });
  }
);
Oc.displayName = eo;
var jc = "DialogDescription", Dc = s.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ae(jc, r);
    return /* @__PURE__ */ l.jsx(D.p, { id: o.descriptionId, ...n, ref: t });
  }
);
Dc.displayName = jc;
var Lc = "DialogClose", Fc = s.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = Ae(Lc, r);
    return /* @__PURE__ */ l.jsx(
      D.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: T(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Fc.displayName = Lc;
function to(e) {
  return e ? "open" : "closed";
}
var $c = "DialogTitleWarning", [Gb, Bc] = Od($c, {
  contentName: nt,
  titleName: eo,
  docsSlug: "dialog"
}), Ah = ({ titleId: e }) => {
  const t = Bc($c), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return s.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, Mh = "DialogDescriptionWarning", kh = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Bc(Mh).contentName}}.`;
  return s.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, Vc = _c, Wc = Ac, kr = Mc, Ir = kc, Or = Oc, jr = Dc, Gc = Fc;
const Ih = Vc, Oh = Wc, Hc = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  kr,
  {
    className: R(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
Hc.displayName = kr.displayName;
const jh = qe(
  "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-gray-950",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), zc = s.forwardRef(({ side: e = "right", className: t, children: r, ...n }, o) => /* @__PURE__ */ l.jsxs(Oh, { children: [
  /* @__PURE__ */ l.jsx(Hc, {}),
  /* @__PURE__ */ l.jsxs(
    Ir,
    {
      ref: o,
      className: R(jh({ side: e }), t),
      ...n,
      children: [
        r,
        /* @__PURE__ */ l.jsxs(Gc, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 dark:ring-offset-gray-950 dark:focus:ring-gray-300 dark:data-[state=open]:bg-gray-800", children: [
          /* @__PURE__ */ l.jsx(Oa, { className: "h-4 w-4" }),
          /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
zc.displayName = Ir.displayName;
const Dh = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  Or,
  {
    ref: r,
    className: R("text-lg font-semibold text-gray-950 dark:text-gray-50", e),
    ...t
  }
));
Dh.displayName = Or.displayName;
const Lh = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  jr,
  {
    ref: r,
    className: R("text-sm text-gray-500 dark:text-gray-400", e),
    ...t
  }
));
Lh.displayName = jr.displayName;
function ra({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: R("animate-pulse rounded-md bg-gray-100 dark:bg-gray-800", e),
      ...t
    }
  );
}
var [Dr] = ue("Tooltip", [
  Ct
]), Lr = Ct(), Uc = "TooltipProvider", Fh = 700, xn = "tooltip.open", [$h, ro] = Dr(Uc), Kc = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = Fh,
    skipDelayDuration: n = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, i = s.useRef(!0), c = s.useRef(!1), d = s.useRef(0);
  return s.useEffect(() => {
    const u = d.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ l.jsx(
    $h,
    {
      scope: t,
      isOpenDelayedRef: i,
      delayDuration: r,
      onOpen: s.useCallback(() => {
        window.clearTimeout(d.current), i.current = !1;
      }, []),
      onClose: s.useCallback(() => {
        window.clearTimeout(d.current), d.current = window.setTimeout(
          () => i.current = !0,
          n
        );
      }, [n]),
      isPointerInTransitRef: c,
      onPointerInTransitChange: s.useCallback((u) => {
        c.current = u;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
Kc.displayName = Uc;
var Ot = "Tooltip", [Bh, Fr] = Dr(Ot), Yc = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: c
  } = e, d = ro(Ot, e.__scopeTooltip), u = Lr(t), [f, p] = s.useState(null), h = Ne(), g = s.useRef(0), b = i ?? d.disableHoverableContent, m = c ?? d.delayDuration, v = s.useRef(!1), [w, y] = Oe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: (_) => {
      _ ? (d.onOpen(), document.dispatchEvent(new CustomEvent(xn))) : d.onClose(), a?.(_);
    },
    caller: Ot
  }), C = s.useMemo(() => w ? v.current ? "delayed-open" : "instant-open" : "closed", [w]), S = s.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, v.current = !1, y(!0);
  }, [y]), E = s.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, y(!1);
  }, [y]), k = s.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      v.current = !0, y(!0), g.current = 0;
    }, m);
  }, [m, y]);
  return s.useEffect(() => () => {
    g.current && (window.clearTimeout(g.current), g.current = 0);
  }, []), /* @__PURE__ */ l.jsx(Ln, { ...u, children: /* @__PURE__ */ l.jsx(
    Bh,
    {
      scope: t,
      contentId: h,
      open: w,
      stateAttribute: C,
      trigger: f,
      onTriggerChange: p,
      onTriggerEnter: s.useCallback(() => {
        d.isOpenDelayedRef.current ? k() : S();
      }, [d.isOpenDelayedRef, k, S]),
      onTriggerLeave: s.useCallback(() => {
        b ? E() : (window.clearTimeout(g.current), g.current = 0);
      }, [E, b]),
      onOpen: S,
      onClose: E,
      disableHoverableContent: b,
      children: r
    }
  ) });
};
Yc.displayName = Ot;
var yn = "TooltipTrigger", qc = s.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = Fr(yn, r), a = ro(yn, r), i = Lr(r), c = s.useRef(null), d = U(t, c, o.onTriggerChange), u = s.useRef(!1), f = s.useRef(!1), p = s.useCallback(() => u.current = !1, []);
    return s.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ l.jsx(Fn, { asChild: !0, ...i, children: /* @__PURE__ */ l.jsx(
      D.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...n,
        ref: d,
        onPointerMove: T(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !f.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: T(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: T(e.onPointerDown, () => {
          o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: T(e.onFocus, () => {
          u.current || o.onOpen();
        }),
        onBlur: T(e.onBlur, o.onClose),
        onClick: T(e.onClick, o.onClose)
      }
    ) });
  }
);
qc.displayName = yn;
var Vh = "TooltipPortal", [Hb, Wh] = Dr(Vh, {
  forceMount: void 0
}), vt = "TooltipContent", Xc = s.forwardRef(
  (e, t) => {
    const r = Wh(vt, e.__scopeTooltip), { forceMount: n = r.forceMount, side: o = "top", ...a } = e, i = Fr(vt, e.__scopeTooltip);
    return /* @__PURE__ */ l.jsx(Ce, { present: n || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ l.jsx(Zc, { side: o, ...a, ref: t }) : /* @__PURE__ */ l.jsx(Gh, { side: o, ...a, ref: t }) });
  }
), Gh = s.forwardRef((e, t) => {
  const r = Fr(vt, e.__scopeTooltip), n = ro(vt, e.__scopeTooltip), o = s.useRef(null), a = U(t, o), [i, c] = s.useState(null), { trigger: d, onClose: u } = r, f = o.current, { onPointerInTransitChange: p } = n, h = s.useCallback(() => {
    c(null), p(!1);
  }, [p]), g = s.useCallback(
    (b, m) => {
      const v = b.currentTarget, w = { x: b.clientX, y: b.clientY }, y = Yh(w, v.getBoundingClientRect()), C = qh(w, y), S = Xh(m.getBoundingClientRect()), E = Jh([...C, ...S]);
      c(E), p(!0);
    },
    [p]
  );
  return s.useEffect(() => () => h(), [h]), s.useEffect(() => {
    if (d && f) {
      const b = (v) => g(v, f), m = (v) => g(v, d);
      return d.addEventListener("pointerleave", b), f.addEventListener("pointerleave", m), () => {
        d.removeEventListener("pointerleave", b), f.removeEventListener("pointerleave", m);
      };
    }
  }, [d, f, g, h]), s.useEffect(() => {
    if (i) {
      const b = (m) => {
        const v = m.target, w = { x: m.clientX, y: m.clientY }, y = d?.contains(v) || f?.contains(v), C = !Zh(w, i);
        y ? h() : C && (h(), u());
      };
      return document.addEventListener("pointermove", b), () => document.removeEventListener("pointermove", b);
    }
  }, [d, f, i, u, h]), /* @__PURE__ */ l.jsx(Zc, { ...e, ref: a });
}), [Hh, zh] = Dr(Ot, { isInside: !1 }), Uh = /* @__PURE__ */ ql("TooltipContent"), Zc = s.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...c
    } = e, d = Fr(vt, r), u = Lr(r), { onClose: f } = d;
    return s.useEffect(() => (document.addEventListener(xn, f), () => document.removeEventListener(xn, f)), [f]), s.useEffect(() => {
      if (d.trigger) {
        const p = (h) => {
          h.target?.contains(d.trigger) && f();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [d.trigger, f]), /* @__PURE__ */ l.jsx(
      Dt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ l.jsxs(
          $n,
          {
            "data-state": d.stateAttribute,
            ...u,
            ...c,
            ref: t,
            style: {
              ...c.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ l.jsx(Uh, { children: n }),
              /* @__PURE__ */ l.jsx(Hh, { scope: r, isInside: !0, children: /* @__PURE__ */ l.jsx(hp, { id: d.contentId, role: "tooltip", children: o || n }) })
            ]
          }
        )
      }
    );
  }
);
Xc.displayName = vt;
var Jc = "TooltipArrow", Kh = s.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = Lr(r);
    return zh(
      Jc,
      r
    ).isInside ? null : /* @__PURE__ */ l.jsx(Bn, { ...o, ...n, ref: t });
  }
);
Kh.displayName = Jc;
function Yh(e, t) {
  const r = Math.abs(t.top - e.y), n = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(r, n, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case r:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function qh(e, t, r = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push(
        { x: e.x - r, y: e.y + r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "bottom":
      n.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x + r, y: e.y - r }
      );
      break;
    case "left":
      n.push(
        { x: e.x + r, y: e.y - r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "right":
      n.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x - r, y: e.y + r }
      );
      break;
  }
  return n;
}
function Xh(e) {
  const { top: t, right: r, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: o, y: n }
  ];
}
function Zh(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const c = t[a], d = t[i], u = c.x, f = c.y, p = d.x, h = d.y;
    f > n != h > n && r < (p - u) * (n - f) / (h - f) + u && (o = !o);
  }
  return o;
}
function Jh(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), Qh(t);
}
function Qh(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], i = t[t.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const o = e[n];
    for (; r.length >= 2; ) {
      const a = r[r.length - 1], i = r[r.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) r.pop();
      else break;
    }
    r.push(o);
  }
  return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r);
}
var ev = Kc, tv = Yc, rv = qc, Qc = Xc;
const nv = ev, ov = tv, av = rv, el = s.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ l.jsx(
  Qc,
  {
    ref: n,
    sideOffset: t,
    className: R(
      "z-50 overflow-hidden rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-950 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
      e
    ),
    ...r
  }
));
el.displayName = Qc.displayName;
const sv = "sidebar:state", iv = 3600 * 24 * 7, cv = "16rem", lv = "18rem", dv = "4rem", uv = "b", tl = s.createContext(null);
function no() {
  const e = s.useContext(tl);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
const fv = s.forwardRef(
  ({
    defaultOpen: e = !0,
    open: t,
    onOpenChange: r,
    className: n,
    style: o,
    children: a,
    ...i
  }, c) => {
    const d = Ch(), [u, f] = s.useState(!1), [p, h] = s.useState(e), g = t ?? p, b = s.useCallback(
      (y) => {
        const C = typeof y == "function" ? y(g) : y;
        r ? r(C) : h(C), document.cookie = `${sv}=${C}; path=/; max-age=${iv}`;
      },
      [r, g]
    ), m = s.useCallback(() => d ? f((y) => !y) : b((y) => !y), [d, b, f]);
    s.useEffect(() => {
      const y = (C) => {
        C.key === uv && (C.metaKey || C.ctrlKey) && (C.preventDefault(), m());
      };
      return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
    }, [m]);
    const v = g ? "expanded" : "collapsed", w = s.useMemo(
      () => ({
        state: v,
        open: g,
        setOpen: b,
        isMobile: d,
        openMobile: u,
        setOpenMobile: f,
        toggleSidebar: m
      }),
      [v, g, b, d, u, f, m]
    );
    return /* @__PURE__ */ l.jsx(tl.Provider, { value: w, children: /* @__PURE__ */ l.jsx(nv, { delayDuration: 0, children: /* @__PURE__ */ l.jsx(
      "div",
      {
        style: {
          "--sidebar-width": cv,
          "--sidebar-width-icon": dv,
          ...o
        },
        className: R(
          "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
          n
        ),
        ref: c,
        ...i,
        children: a
      }
    ) }) });
  }
);
fv.displayName = "SidebarProvider";
const pv = s.forwardRef(
  ({
    side: e = "left",
    variant: t = "sidebar",
    collapsible: r = "offcanvas",
    className: n,
    children: o,
    ...a
  }, i) => {
    const { isMobile: c, state: d, openMobile: u, setOpenMobile: f } = no();
    return r === "none" ? /* @__PURE__ */ l.jsx(
      "div",
      {
        className: R(
          "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
          n
        ),
        ref: i,
        ...a,
        children: o
      }
    ) : c ? /* @__PURE__ */ l.jsx(Ih, { open: u, onOpenChange: f, ...a, children: /* @__PURE__ */ l.jsx(
      zc,
      {
        "data-sidebar": "sidebar",
        "data-mobile": "true",
        className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
        style: {
          "--sidebar-width": lv
        },
        side: e,
        children: /* @__PURE__ */ l.jsx("div", { className: "flex h-full w-full flex-col", children: o })
      }
    ) }) : /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: i,
        className: "group peer hidden md:block text-sidebar-foreground",
        "data-state": d,
        "data-collapsible": d === "collapsed" ? r : "",
        "data-variant": t,
        "data-side": e,
        children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: R(
                "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
                "group-data-[collapsible=offcanvas]:w-0",
                "group-data-[side=right]:rotate-180",
                t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
              )
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: R(
                "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
                e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                // Adjust the padding for floating and inset variants.
                t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
                n
              ),
              ...a,
              children: /* @__PURE__ */ l.jsx(
                "div",
                {
                  "data-sidebar": "sidebar",
                  className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                  children: o
                }
              )
            }
          )
        ]
      }
    );
  }
);
pv.displayName = "Sidebar";
const mv = s.forwardRef(({ className: e, onClick: t, ...r }, n) => {
  const { toggleSidebar: o } = no();
  return /* @__PURE__ */ l.jsxs(
    Ca,
    {
      ref: n,
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      className: R("h-7 w-7 toggle-btn hidden", e),
      onClick: (a) => {
        t?.(a), o();
      },
      ...r,
      children: [
        /* @__PURE__ */ l.jsx("svg", { className: "fill-icon-toggle", width: "16", height: "14", viewBox: "0 0 16 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ l.jsx("path", { d: "M14 1.00003H16V13H14V1.00003ZM0 8.00003H8.586L4.293 12.293L5.707 13.707L12.414 7.00003L5.707 0.29303L4.293 1.70703L8.586 6.00003H0V8.00003Z" }) }),
        /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
});
mv.displayName = "SidebarTrigger";
const gv = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "button",
  {
    ref: r,
    "data-sidebar": "rail",
    "aria-label": "Toggle Sidebar",
    tabIndex: -1,
    onClick: () => {
    },
    title: "Sidebar disabled",
    className: R(
      "pointer-events-none opacity-50",
      e
    ),
    ...t
  }
));
gv.displayName = "SidebarRail";
const hv = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "main",
  {
    ref: r,
    className: R(
      "relative flex min-h-svh flex-1 flex-col dark:bg-gray-950",
      "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow pl-0 md:pl-4",
      e
    ),
    ...t
  }
));
hv.displayName = "SidebarInset";
const vv = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  ds,
  {
    ref: r,
    "data-sidebar": "input",
    className: R(
      "h-8 w-full bg-white shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring dark:bg-gray-950",
      e
    ),
    ...t
  }
));
vv.displayName = "SidebarInput";
const bv = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: r,
    "data-sidebar": "header",
    className: R("flex flex-col gap-2 p-2", e),
    ...t
  }
));
bv.displayName = "SidebarHeader";
const xv = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: r,
    "data-sidebar": "footer",
    className: R("flex flex-col gap-2 p-2", e),
    ...t
  }
));
xv.displayName = "SidebarFooter";
const yv = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  Mi,
  {
    ref: r,
    "data-sidebar": "separator",
    className: R("mx-2 w-auto bg-sidebar-border", e),
    ...t
  }
));
yv.displayName = "SidebarSeparator";
const wv = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: r,
    "data-sidebar": "content",
    className: R(
      "flex min-h-0 flex-1 flex-col gap-8 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      e
    ),
    ...t
  }
));
wv.displayName = "SidebarContent";
const Cv = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: r,
    "data-sidebar": "group",
    className: R("relative flex w-full min-w-0 flex-col p-2", e),
    ...t
  }
));
Cv.displayName = "SidebarGroup";
const Sv = s.forwardRef(({ className: e, asChild: t = !1, ...r }, n) => {
  const o = t ? ot : "div";
  return /* @__PURE__ */ l.jsx(
    o,
    {
      ref: n,
      "data-sidebar": "group-label",
      className: R(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...r
    }
  );
});
Sv.displayName = "SidebarGroupLabel";
const Rv = s.forwardRef(({ className: e, asChild: t = !1, ...r }, n) => {
  const o = t ? ot : "button";
  return /* @__PURE__ */ l.jsx(
    o,
    {
      ref: n,
      "data-sidebar": "group-action",
      className: R(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...r
    }
  );
});
Rv.displayName = "SidebarGroupAction";
const Ev = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: r,
    "data-sidebar": "group-content",
    className: R("w-full text-sm", e),
    ...t
  }
));
Ev.displayName = "SidebarGroupContent";
const Nv = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "ul",
  {
    ref: r,
    "data-sidebar": "menu",
    className: R("flex w-full min-w-0 flex-col gap-1", e),
    ...t
  }
));
Nv.displayName = "SidebarMenu";
const _v = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "li",
  {
    ref: r,
    "data-sidebar": "menu-item",
    className: R("group/menu-item relative pl-[7px]", e),
    ...t
  }
));
_v.displayName = "SidebarMenuItem";
const Pv = qe(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-white shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))] dark:bg-gray-950"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Tv = s.forwardRef(
  ({
    asChild: e = !1,
    isActive: t = !1,
    variant: r = "default",
    size: n = "default",
    tooltip: o,
    className: a,
    ...i
  }, c) => {
    const d = e ? ot : "button", { isMobile: u, state: f } = no(), p = /* @__PURE__ */ l.jsx(
      d,
      {
        ref: c,
        "data-sidebar": "menu-button",
        "data-size": n,
        "data-active": t,
        className: R(Pv({ variant: r, size: n }), a),
        ...i
      }
    );
    return o ? (typeof o == "string" && (o = {
      children: o
    }), /* @__PURE__ */ l.jsxs(ov, { children: [
      /* @__PURE__ */ l.jsx(av, { asChild: !0, children: p }),
      /* @__PURE__ */ l.jsx(
        el,
        {
          side: "right",
          align: "center",
          hidden: f !== "collapsed" || u,
          ...o
        }
      )
    ] })) : p;
  }
);
Tv.displayName = "SidebarMenuButton";
const Av = s.forwardRef(({ className: e, asChild: t = !1, showOnHover: r = !1, ...n }, o) => {
  const a = t ? ot : "button";
  return /* @__PURE__ */ l.jsx(
    a,
    {
      ref: o,
      "data-sidebar": "menu-action",
      className: R(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        r && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        e
      ),
      ...n
    }
  );
});
Av.displayName = "SidebarMenuAction";
const Mv = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: r,
    "data-sidebar": "menu-badge",
    className: R(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      e
    ),
    ...t
  }
));
Mv.displayName = "SidebarMenuBadge";
const kv = s.forwardRef(({ className: e, showIcon: t = !1, ...r }, n) => {
  const o = s.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: n,
      "data-sidebar": "menu-skeleton",
      className: R("rounded-md h-8 flex gap-2 px-2 items-center", e),
      ...r,
      children: [
        t && /* @__PURE__ */ l.jsx(
          ra,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ l.jsx(
          ra,
          {
            className: "h-4 flex-1 max-w-[--skeleton-width]",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": o
            }
          }
        )
      ]
    }
  );
});
kv.displayName = "SidebarMenuSkeleton";
const Iv = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "ul",
  {
    ref: r,
    "data-sidebar": "menu-sub",
    className: R(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      e
    ),
    ...t
  }
));
Iv.displayName = "SidebarMenuSub";
const Ov = s.forwardRef(({ ...e }, t) => /* @__PURE__ */ l.jsx("li", { ref: t, ...e }));
Ov.displayName = "SidebarMenuSubItem";
const jv = s.forwardRef(({ asChild: e = !1, size: t = "md", isActive: r, className: n, ...o }, a) => {
  const i = e ? ot : "a";
  return /* @__PURE__ */ l.jsx(
    i,
    {
      ref: a,
      "data-sidebar": "menu-sub-button",
      "data-size": t,
      "data-active": r,
      className: R(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        t === "sm" && "text-xs",
        t === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        n
      ),
      ...o
    }
  );
});
jv.displayName = "SidebarMenuSubButton";
const Dv = qe(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Lv = s.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    role: "alert",
    className: R(Dv({ variant: t }), e),
    ...r
  }
));
Lv.displayName = "Alert";
const Fv = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "h5",
  {
    ref: r,
    className: R("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
Fv.displayName = "AlertTitle";
const $v = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: r,
    className: R("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
$v.displayName = "AlertDescription";
const Bv = qe(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function zb({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ l.jsx("div", { className: R(Bv({ variant: t }), e), ...r });
}
var oo = "Progress", ao = 100, [Vv] = ue(oo), [Wv, Gv] = Vv(oo), rl = s.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: n = null,
      max: o,
      getValueLabel: a = Hv,
      ...i
    } = e;
    (o || o === 0) && !na(o) && console.error(zv(`${o}`, "Progress"));
    const c = na(o) ? o : ao;
    n !== null && !oa(n, c) && console.error(Uv(`${n}`, "Progress"));
    const d = oa(n, c) ? n : null, u = sr(d) ? a(d, c) : void 0;
    return /* @__PURE__ */ l.jsx(Wv, { scope: r, value: d, max: c, children: /* @__PURE__ */ l.jsx(
      D.div,
      {
        "aria-valuemax": c,
        "aria-valuemin": 0,
        "aria-valuenow": sr(d) ? d : void 0,
        "aria-valuetext": u,
        role: "progressbar",
        "data-state": al(d, c),
        "data-value": d ?? void 0,
        "data-max": c,
        ...i,
        ref: t
      }
    ) });
  }
);
rl.displayName = oo;
var nl = "ProgressIndicator", ol = s.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...n } = e, o = Gv(nl, r);
    return /* @__PURE__ */ l.jsx(
      D.div,
      {
        "data-state": al(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...n,
        ref: t
      }
    );
  }
);
ol.displayName = nl;
function Hv(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function al(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function sr(e) {
  return typeof e == "number";
}
function na(e) {
  return sr(e) && !isNaN(e) && e > 0;
}
function oa(e, t) {
  return sr(e) && !isNaN(e) && e <= t && e >= 0;
}
function zv(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ao}\`.`;
}
function Uv(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ao} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var sl = rl, Kv = ol;
const il = s.forwardRef(({ className: e, value: t, ...r }, n) => /* @__PURE__ */ l.jsx(
  sl,
  {
    ref: n,
    className: R(
      "relative h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800",
      e
    ),
    ...r,
    children: /* @__PURE__ */ l.jsx(
      Kv,
      {
        className: "h-full w-full flex-1 bg-gray-900 transition-all dark:bg-gray-50",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
il.displayName = sl.displayName;
const Ub = ({ userId: e, resolvedUserId: t }) => e === t ? null : /* @__PURE__ */ l.jsx("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4", children: /* @__PURE__ */ l.jsxs("div", { className: "flex", children: [
  /* @__PURE__ */ l.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ l.jsx("svg", { className: "h-5 w-5 text-yellow-400", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ l.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }) }),
  /* @__PURE__ */ l.jsx("div", { className: "ml-3", children: /* @__PURE__ */ l.jsxs("p", { className: "text-sm text-yellow-700", children: [
    "You are currently viewing data as user ID ",
    t,
    " (your ID is ",
    e,
    ")"
  ] }) })
] }) }), Kb = Vc, Yv = Wc, cl = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  kr,
  {
    ref: r,
    className: R(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
cl.displayName = kr.displayName;
const qv = s.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ l.jsxs(Yv, { children: [
  /* @__PURE__ */ l.jsx(cl, {}),
  /* @__PURE__ */ l.jsxs(
    Ir,
    {
      ref: n,
      className: R(
        "dialog fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-gray-800 dark:bg-gray-950",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ l.jsxs(Gc, { className: "close absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500 dark:ring-offset-gray-950 dark:focus:ring-gray-300 dark:data-[state=open]:bg-gray-800 dark:data-[state=open]:text-gray-400", children: [
          /* @__PURE__ */ l.jsx(Oa, { className: "h-4 w-4" }),
          /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
qv.displayName = Ir.displayName;
const Xv = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  Or,
  {
    ref: r,
    className: R(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Xv.displayName = Or.displayName;
const Zv = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  jr,
  {
    ref: r,
    className: R("text-sm text-gray-500 dark:text-gray-400", e),
    ...t
  }
));
Zv.displayName = jr.displayName;
function Yb({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx("h1", { className: R("scroll-m-20 text-4xl font-heading mb-2", e), ...t });
}
function qb({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx("h2", { className: R("scroll-m-20 text-3xl font-heading mb-2", e), ...t });
}
function Xb({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx("h3", { className: R("scroll-m-20 text-2xl font-heading mb-2 tracking-tight", e), ...t });
}
function Zb({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx("h4", { className: R("scroll-m-20 text-xl mb-2 tracking-tight", e), ...t });
}
function Jb({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx("h5", { className: R("scroll-m-20 text-lg mb-2 tracking-tight", e), ...t });
}
function Qb({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx("h6", { className: R("scroll-m-20 text-base mb-2 tracking-tight", e), ...t });
}
function ex({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx("p", { className: R("leading-7 font-sans [&:not(:first-child)]:mt-3", e), ...t });
}
function tx({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx("span", { className: R("font-sans", e), ...t });
}
function rx({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx("blockquote", { className: R("mt-6 font-sans border-l-2 pl-6 italic text-muted-foreground", e), ...t });
}
function nx({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx("code", { className: R("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm", e), ...t });
}
function ox({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx("p", { className: R("text-xl font-sans text-muted-foreground", e), ...t });
}
function ax({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx("div", { className: R("text-lg font-sans font-semibold", e), ...t });
}
function sx({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx("p", { className: R("text-sm font-sans text-muted-foreground", e), ...t });
}
function ix({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx("small", { className: R("text-sm font-sans leading-none", e), ...t });
}
function cx({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx("ul", { className: R("my-6 ml-6 font-sans list-disc [&>li]:mt-2", e), ...t });
}
function lx({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx("li", { className: R("mt-2 font-sans", e), ...t });
}
const Jv = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ l.jsx(
  "table",
  {
    ref: r,
    className: R("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Jv.displayName = "Table";
const Qv = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx("thead", { ref: r, className: R("[&_tr]:border-b", e), ...t }));
Qv.displayName = "TableHeader";
const eb = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "tbody",
  {
    ref: r,
    className: R("[&_tr:last-child]:border-0", e),
    ...t
  }
));
eb.displayName = "TableBody";
const tb = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "tfoot",
  {
    ref: r,
    className: R(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      e
    ),
    ...t
  }
));
tb.displayName = "TableFooter";
const rb = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "tr",
  {
    ref: r,
    className: R(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
rb.displayName = "TableRow";
const nb = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "th",
  {
    ref: r,
    className: R(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
nb.displayName = "TableHead";
const ob = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "td",
  {
    ref: r,
    className: R("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
ob.displayName = "TableCell";
const ab = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  "caption",
  {
    ref: r,
    className: R("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
ab.displayName = "TableCaption";
var Yt = { exports: {} }, rn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa;
function sb() {
  if (aa) return rn;
  aa = 1;
  var e = Ee;
  function t(p, h) {
    return p === h && (p !== 0 || 1 / p === 1 / h) || p !== p && h !== h;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, a = e.useLayoutEffect, i = e.useDebugValue;
  function c(p, h) {
    var g = h(), b = n({ inst: { value: g, getSnapshot: h } }), m = b[0].inst, v = b[1];
    return a(
      function() {
        m.value = g, m.getSnapshot = h, d(m) && v({ inst: m });
      },
      [p, g, h]
    ), o(
      function() {
        return d(m) && v({ inst: m }), p(function() {
          d(m) && v({ inst: m });
        });
      },
      [p]
    ), i(g), g;
  }
  function d(p) {
    var h = p.getSnapshot;
    p = p.value;
    try {
      var g = h();
      return !r(p, g);
    } catch {
      return !0;
    }
  }
  function u(p, h) {
    return h();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : c;
  return rn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, rn;
}
var nn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sa;
function ib() {
  return sa || (sa = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(g, b) {
      return g === b && (g !== 0 || 1 / g === 1 / b) || g !== g && b !== b;
    }
    function t(g, b) {
      f || o.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var m = b();
      if (!p) {
        var v = b();
        a(m, v) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), p = !0);
      }
      v = i({
        inst: { value: m, getSnapshot: b }
      });
      var w = v[0].inst, y = v[1];
      return d(
        function() {
          w.value = m, w.getSnapshot = b, r(w) && y({ inst: w });
        },
        [g, m, b]
      ), c(
        function() {
          return r(w) && y({ inst: w }), g(function() {
            r(w) && y({ inst: w });
          });
        },
        [g]
      ), u(m), m;
    }
    function r(g) {
      var b = g.getSnapshot;
      g = g.value;
      try {
        var m = b();
        return !a(g, m);
      } catch {
        return !0;
      }
    }
    function n(g, b) {
      return b();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = Ee, a = typeof Object.is == "function" ? Object.is : e, i = o.useState, c = o.useEffect, d = o.useLayoutEffect, u = o.useDebugValue, f = !1, p = !1, h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    nn.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), nn;
}
var ia;
function cb() {
  return ia || (ia = 1, process.env.NODE_ENV === "production" ? Yt.exports = sb() : Yt.exports = ib()), Yt.exports;
}
var lb = cb();
function db() {
  return lb.useSyncExternalStore(
    ub,
    () => !0,
    () => !1
  );
}
function ub() {
  return () => {
  };
}
var so = "Avatar", [fb] = ue(so), [pb, ll] = fb(so), dl = s.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, ...n } = e, [o, a] = s.useState("idle");
    return /* @__PURE__ */ l.jsx(
      pb,
      {
        scope: r,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ l.jsx(D.span, { ...n, ref: t })
      }
    );
  }
);
dl.displayName = so;
var ul = "AvatarImage", fl = s.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, src: n, onLoadingStatusChange: o = () => {
    }, ...a } = e, i = ll(ul, r), c = mb(n, a), d = _e((u) => {
      o(u), i.onImageLoadingStatusChange(u);
    });
    return ie(() => {
      c !== "idle" && d(c);
    }, [c, d]), c === "loaded" ? /* @__PURE__ */ l.jsx(D.img, { ...a, ref: t, src: n }) : null;
  }
);
fl.displayName = ul;
var pl = "AvatarFallback", ml = s.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, delayMs: n, ...o } = e, a = ll(pl, r), [i, c] = s.useState(n === void 0);
    return s.useEffect(() => {
      if (n !== void 0) {
        const d = window.setTimeout(() => c(!0), n);
        return () => window.clearTimeout(d);
      }
    }, [n]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ l.jsx(D.span, { ...o, ref: t }) : null;
  }
);
ml.displayName = pl;
function ca(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function mb(e, { referrerPolicy: t, crossOrigin: r }) {
  const n = db(), o = s.useRef(null), a = n ? (o.current || (o.current = new window.Image()), o.current) : null, [i, c] = s.useState(
    () => ca(a, e)
  );
  return ie(() => {
    c(ca(a, e));
  }, [a, e]), ie(() => {
    const d = (p) => () => {
      c(p);
    };
    if (!a) return;
    const u = d("loaded"), f = d("error");
    return a.addEventListener("load", u), a.addEventListener("error", f), t && (a.referrerPolicy = t), typeof r == "string" && (a.crossOrigin = r), () => {
      a.removeEventListener("load", u), a.removeEventListener("error", f);
    };
  }, [a, r, t]), i;
}
var gl = dl, hl = fl, vl = ml;
const gb = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  gl,
  {
    ref: r,
    className: R(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
gb.displayName = gl.displayName;
const hb = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  hl,
  {
    ref: r,
    className: R("aspect-square h-full w-full", e),
    ...t
  }
));
hb.displayName = hl.displayName;
const vb = s.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  vl,
  {
    ref: r,
    className: R(
      "flex h-full w-full items-center justify-center rounded-full dark:bg-gray-800",
      e
    ),
    ...t
  }
));
vb.displayName = vl.displayName;
const dx = ({
  score: e,
  label: t = "Confidence Score",
  timestamp: r,
  className: n
}) => /* @__PURE__ */ l.jsxs("div", { className: R(
  "relative flex items-center justify-between pl-2 pr-2 border border-gray-400 mr-0 md:mr-2 h-[40px] md:h-[52px] mt-2 md:mt-0",
  n
), children: [
  /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "absolute top-0 left-0 h-full bg-[#D3FF4E]",
      style: { width: `${e}%` }
    }
  ),
  /* @__PURE__ */ l.jsxs("div", { className: "relative z-[1]", children: [
    /* @__PURE__ */ l.jsx("p", { className: "font-medium text-[13px] w-full text-left leading-5 gray-600", children: t }),
    r && /* @__PURE__ */ l.jsxs("p", { className: "text-[12px] w-full text-left font-thin leading-4", children: [
      "Scanned: ",
      Md(r)
    ] })
  ] }),
  /* @__PURE__ */ l.jsx("div", { className: "relative z-[1]", children: /* @__PURE__ */ l.jsxs("div", { className: "text-2xl md:[font-size:1.65rem] font-bold font-sans", children: [
    e,
    "%"
  ] }) })
] }), ux = ({ score: e, className: t = "" }) => /* @__PURE__ */ l.jsxs("div", { children: [
  /* @__PURE__ */ l.jsxs("div", { className: "text-md font-medium text-right", style: { fontFamily: "Montserrat, sans-serif" }, children: [
    Math.round(e * 100),
    "%"
  ] }),
  /* @__PURE__ */ l.jsx(il, { value: Math.round(e * 100), className: "w-[100px]" })
] }), bb = {
  sm: "w-4 h-4",
  default: "w-8 h-8",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
  "2xl": "w-24 h-24"
}, xb = {
  default: "text-foreground",
  primary: "text-primary",
  secondary: "text-secondary",
  muted: "text-muted-foreground",
  white: "text-white"
}, fx = ({
  size: e = "default",
  variant: t = "default",
  animated: r = !1,
  className: n,
  "aria-label": o = "Logo",
  ...a
}) => /* @__PURE__ */ l.jsxs(
  "svg",
  {
    className: R(
      bb[e],
      xb[t],
      r && "animate-spin",
      n
    ),
    viewBox: "0 0 34 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": o,
    role: "img",
    ...a,
    children: [
      /* @__PURE__ */ l.jsx(
        "path",
        {
          d: "M17.0745 0.333374L22.7405 3.69369L17.2884 13.3941L11.6225 10.0338L17.0745 0.333374Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ l.jsx(
        "path",
        {
          d: "M33.6666 12.8777L32.3064 19.4515L21.6406 17.1226L23.0008 10.5489L33.6666 12.8777Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ l.jsx(
        "path",
        {
          d: "M27.1795 32.9642L20.6729 33.6667L19.5331 22.527L26.0397 21.8245L27.1795 32.9642Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ l.jsx(
        "path",
        {
          d: "M6.57831 32.8335L3.91725 26.6939L13.8786 22.138L16.5397 28.2776L6.57831 32.8335Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ l.jsx(
        "path",
        {
          d: "M0.333313 12.6665L5.19531 8.16956L12.4916 16.4936L7.62959 20.9905L0.333313 12.6665Z",
          fill: "currentColor"
        }
      )
    ]
  }
);
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var la;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(la || (la = {}));
function da(e, t) {
  throw new Error(t);
}
var ua;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(ua || (ua = {}));
const bl = ["post", "put", "patch", "delete"];
new Set(bl);
const yb = ["get", ...bl];
new Set(yb);
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const wb = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (wb.displayName = "DataRouter");
const Cb = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (Cb.displayName = "DataRouterState");
const Sb = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (Sb.displayName = "Await");
const Rb = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (Rb.displayName = "Navigation");
const io = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (io.displayName = "Location");
const Eb = /* @__PURE__ */ s.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Eb.displayName = "Route");
const Nb = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (Nb.displayName = "RouteError");
function _b() {
  return s.useContext(io) != null;
}
function Pb() {
  return _b() || (process.env.NODE_ENV !== "production" ? da(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : da()), s.useContext(io).location;
}
new Promise(() => {
});
const xl = (e, t) => {
  typeof window < "u" && window.gtag && window.gtag("config", process.env.REACT_APP_GA_MEASUREMENT_ID, {
    page_path: e,
    page_title: t || document.title
  });
}, Tb = (e, t) => {
  typeof window < "u" && window.gtag && window.gtag("event", e, t);
}, wn = (e) => {
  typeof window < "u" && window.gtag && window.gtag("event", "user_engagement", {
    engagement_time_msec: e
  });
}, px = () => {
  const e = Pb();
  pa(() => {
    xl(e.pathname);
  }, [e]);
}, mx = () => {
  pa(() => {
    let e = Date.now();
    const t = () => {
      if (document.hidden) {
        const n = Date.now() - e;
        wn(n);
      } else
        e = Date.now();
    }, r = () => {
      const n = Date.now() - e;
      wn(n);
    };
    return document.addEventListener("visibilitychange", t), window.addEventListener("beforeunload", r), () => {
      document.removeEventListener("visibilitychange", t), window.removeEventListener("beforeunload", r);
    };
  }, []);
}, gx = () => ({
  trackEvent: Tb,
  trackPageView: xl,
  trackUserEngagement: wn
});
export {
  Lv as Alert,
  gb as Avatar,
  zb as Badge,
  rx as Blockquote,
  eg as Breadcrumb,
  Ca as Button,
  Lm as Card,
  Jd as Checkbox,
  Bb as Collapsible,
  Qm as ContentSection,
  kd as DEFAULT_WEIGHTS,
  Kb as Dialog,
  Wb as DropdownMenu,
  $b as FieldGroup,
  Yb as H1,
  qb as H2,
  Xb as H3,
  Zb as H4,
  Jb as H5,
  Qb as H6,
  Jm as HeaderSection,
  nx as InlineCode,
  ds as Input,
  ku as Label,
  ax as Large,
  ox as Lead,
  cx as List,
  lx as ListItem,
  fx as Logo,
  fx as LogoDefault,
  sx as Muted,
  ex as P,
  il as Progress,
  Cu as RadioGroup,
  dx as ScoreWidget,
  ux as ScoreWidgetMini,
  Db as Select,
  km as SelectContent,
  Lb as SelectGroup,
  Om as SelectItem,
  Im as SelectLabel,
  Pi as SelectScrollDownButton,
  _i as SelectScrollUpButton,
  jm as SelectSeparator,
  Mm as SelectTrigger,
  Fb as SelectValue,
  Mi as Separator,
  Ih as Sheet,
  pv as Sidebar,
  ra as Skeleton,
  ix as Small,
  tx as Span,
  Tu as Switch,
  Jv as Table,
  eb as TableBody,
  ab as TableCaption,
  ob as TableCell,
  tb as TableFooter,
  nb as TableHead,
  Qv as TableHeader,
  rb as TableRow,
  Dm as Textarea,
  ov as Tooltip,
  Ub as UserWarning,
  jb as calculateOverallScore,
  R as cn,
  Md as formatTimeAgo,
  kb as getColorForScore,
  Ib as getColorForTotalScore,
  Ob as getStatusColor,
  gx as useAnalytics,
  mx as useEngagementTracking,
  Ch as useIsMobile,
  px as usePageTracking
};
