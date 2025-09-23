import * as z from "react";
import rr from "react";
var me = { exports: {} }, se = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Fr() {
  if (Je) return se;
  Je = 1;
  var r = rr, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(c, f, g) {
    var b, h = {}, C = null, O = null;
    g !== void 0 && (C = "" + g), f.key !== void 0 && (C = "" + f.key), f.ref !== void 0 && (O = f.ref);
    for (b in f) n.call(f, b) && !s.hasOwnProperty(b) && (h[b] = f[b]);
    if (c && c.defaultProps) for (b in f = c.defaultProps, f) h[b] === void 0 && (h[b] = f[b]);
    return { $$typeof: t, type: c, key: C, ref: O, props: h, _owner: i.current };
  }
  return se.Fragment = o, se.jsx = u, se.jsxs = u, se;
}
var ie = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Nr() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && (function() {
    var r = rr, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), j = Symbol.iterator, S = "@@iterator";
    function w(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = j && e[j] || e[S];
      return typeof a == "function" ? a : null;
    }
    var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), d = 1; d < a; d++)
          l[d - 1] = arguments[d];
        U("error", e, l);
      }
    }
    function U(e, a, l) {
      {
        var d = k.ReactDebugCurrentFrame, y = d.getStackAddendum();
        y !== "" && (a += "%s", l = l.concat([y]));
        var E = l.map(function(m) {
          return String(m);
        });
        E.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, E);
      }
    }
    var W = !1, q = !1, ue = !1, de = !1, fe = !1, K;
    K = Symbol.for("react.module.reference");
    function re(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === s || fe || e === i || e === g || e === b || de || e === O || W || q || ue || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === h || e.$$typeof === u || e.$$typeof === c || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === K || e.getModuleId !== void 0));
    }
    function te(e, a, l) {
      var d = e.displayName;
      if (d)
        return d;
      var y = a.displayName || a.name || "";
      return y !== "" ? l + "(" + y + ")" : l;
    }
    function R(e) {
      return e.displayName || "Context";
    }
    function V(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case o:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case g:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var a = e;
            return R(a) + ".Consumer";
          case u:
            var l = e;
            return R(l._context) + ".Provider";
          case f:
            return te(e, e.render, "ForwardRef");
          case h:
            var d = e.displayName || null;
            return d !== null ? d : V(e.type) || "Memo";
          case C: {
            var y = e, E = y._payload, m = y._init;
            try {
              return V(m(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, D = 0, B, oe, X, G, ne, F, Oe;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function cr() {
      {
        if (D === 0) {
          B = console.log, oe = console.info, X = console.warn, G = console.error, ne = console.group, F = console.groupCollapsed, Oe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: je,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function ur() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: B
            }),
            info: M({}, e, {
              value: oe
            }),
            warn: M({}, e, {
              value: X
            }),
            error: M({}, e, {
              value: G
            }),
            group: M({}, e, {
              value: ne
            }),
            groupCollapsed: M({}, e, {
              value: F
            }),
            groupEnd: M({}, e, {
              value: Oe
            })
          });
        }
        D < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = k.ReactCurrentDispatcher, ye;
    function pe(e, a, l) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (y) {
            var d = y.stack.trim().match(/\n( *(at )?)/);
            ye = d && d[1] || "";
          }
        return `
` + ye + e;
      }
    }
    var xe = !1, ge;
    {
      var dr = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new dr();
    }
    function Ae(e, a) {
      if (!e || xe)
        return "";
      {
        var l = ge.get(e);
        if (l !== void 0)
          return l;
      }
      var d;
      xe = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = he.current, he.current = null, cr();
      try {
        if (a) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (I) {
              d = I;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (I) {
              d = I;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            d = I;
          }
          e();
        }
      } catch (I) {
        if (I && d && typeof I.stack == "string") {
          for (var v = I.stack.split(`
`), A = d.stack.split(`
`), P = v.length - 1, T = A.length - 1; P >= 1 && T >= 0 && v[P] !== A[T]; )
            T--;
          for (; P >= 1 && T >= 0; P--, T--)
            if (v[P] !== A[T]) {
              if (P !== 1 || T !== 1)
                do
                  if (P--, T--, T < 0 || v[P] !== A[T]) {
                    var N = `
` + v[P].replace(" at new ", " at ");
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && ge.set(e, N), N;
                  }
                while (P >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        xe = !1, he.current = E, ur(), Error.prepareStackTrace = y;
      }
      var Z = e ? e.displayName || e.name : "", J = Z ? pe(Z) : "";
      return typeof e == "function" && ge.set(e, J), J;
    }
    function fr(e, a, l) {
      return Ae(e, !1);
    }
    function pr(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function be(e, a, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ae(e, pr(e));
      if (typeof e == "string")
        return pe(e);
      switch (e) {
        case g:
          return pe("Suspense");
        case b:
          return pe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return fr(e.render);
          case h:
            return be(e.type, a, l);
          case C: {
            var d = e, y = d._payload, E = d._init;
            try {
              return be(E(y), a, l);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, ze = {}, Ie = k.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var a = e._owner, l = be(e.type, e._source, a ? a.type : null);
        Ie.setExtraStackFrame(l);
      } else
        Ie.setExtraStackFrame(null);
    }
    function gr(e, a, l, d, y) {
      {
        var E = Function.call.bind(ae);
        for (var m in e)
          if (E(e, m)) {
            var v = void 0;
            try {
              if (typeof e[m] != "function") {
                var A = Error((d || "React class") + ": " + l + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              v = e[m](a, m, d, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (P) {
              v = P;
            }
            v && !(v instanceof Error) && (ve(y), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", l, m, typeof v), ve(null)), v instanceof Error && !(v.message in ze) && (ze[v.message] = !0, ve(y), x("Failed %s type: %s", l, v.message), ve(null));
          }
      }
    }
    var br = Array.isArray;
    function we(e) {
      return br(e);
    }
    function vr(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, l = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function mr(e) {
      try {
        return Me(e), !1;
      } catch {
        return !0;
      }
    }
    function Me(e) {
      return "" + e;
    }
    function Fe(e) {
      if (mr(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vr(e)), Me(e);
    }
    var Ne = k.ReactCurrentOwner, hr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ve, We;
    function yr(e) {
      if (ae.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function xr(e) {
      if (ae.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function wr(e, a) {
      typeof e.ref == "string" && Ne.current;
    }
    function Rr(e, a) {
      {
        var l = function() {
          Ve || (Ve = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function Er(e, a) {
      {
        var l = function() {
          We || (We = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var Cr = function(e, a, l, d, y, E, m) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: l,
        props: m,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function _r(e, a, l, d, y) {
      {
        var E, m = {}, v = null, A = null;
        l !== void 0 && (Fe(l), v = "" + l), xr(a) && (Fe(a.key), v = "" + a.key), yr(a) && (A = a.ref, wr(a, y));
        for (E in a)
          ae.call(a, E) && !hr.hasOwnProperty(E) && (m[E] = a[E]);
        if (e && e.defaultProps) {
          var P = e.defaultProps;
          for (E in P)
            m[E] === void 0 && (m[E] = P[E]);
        }
        if (v || A) {
          var T = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && Rr(m, T), A && Er(m, T);
        }
        return Cr(e, v, A, y, d, Ne.current, m);
      }
    }
    var Re = k.ReactCurrentOwner, $e = k.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var a = e._owner, l = be(e.type, e._source, a ? a.type : null);
        $e.setExtraStackFrame(l);
      } else
        $e.setExtraStackFrame(null);
    }
    var Ee;
    Ee = !1;
    function Ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function De() {
      {
        if (Re.current) {
          var e = V(Re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function kr(e) {
      return "";
    }
    var Ge = {};
    function Sr(e) {
      {
        var a = De();
        if (!a) {
          var l = typeof e == "string" ? e : e.displayName || e.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function Le(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var l = Sr(a);
        if (Ge[l])
          return;
        Ge[l] = !0;
        var d = "";
        e && e._owner && e._owner !== Re.current && (d = " It was passed a child from " + V(e._owner.type) + "."), H(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, d), H(null);
      }
    }
    function Ye(e, a) {
      {
        if (typeof e != "object")
          return;
        if (we(e))
          for (var l = 0; l < e.length; l++) {
            var d = e[l];
            Ce(d) && Le(d, a);
          }
        else if (Ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var y = w(e);
          if (typeof y == "function" && y !== e.entries)
            for (var E = y.call(e), m; !(m = E.next()).done; )
              Ce(m.value) && Le(m.value, a);
        }
      }
    }
    function Pr(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var l;
        if (typeof a == "function")
          l = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === h))
          l = a.propTypes;
        else
          return;
        if (l) {
          var d = V(a);
          gr(l, e.props, "prop", d, e);
        } else if (a.PropTypes !== void 0 && !Ee) {
          Ee = !0;
          var y = V(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tr(e) {
      {
        for (var a = Object.keys(e.props), l = 0; l < a.length; l++) {
          var d = a[l];
          if (d !== "children" && d !== "key") {
            H(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), H(null);
            break;
          }
        }
        e.ref !== null && (H(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
      }
    }
    var Ue = {};
    function Be(e, a, l, d, y, E) {
      {
        var m = re(e);
        if (!m) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = kr();
          A ? v += A : v += De();
          var P;
          e === null ? P = "null" : we(e) ? P = "array" : e !== void 0 && e.$$typeof === t ? (P = "<" + (V(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : P = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", P, v);
        }
        var T = _r(e, a, l, y, E);
        if (T == null)
          return T;
        if (m) {
          var N = a.children;
          if (N !== void 0)
            if (d)
              if (we(N)) {
                for (var Z = 0; Z < N.length; Z++)
                  Ye(N[Z], e);
                Object.freeze && Object.freeze(N);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(N, e);
        }
        if (ae.call(a, "key")) {
          var J = V(e), I = Object.keys(a).filter(function(Mr) {
            return Mr !== "key";
          }), _e = I.length > 0 ? "{key: someKey, " + I.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ue[J + _e]) {
            var Ir = I.length > 0 ? "{" + I.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _e, J, Ir, J), Ue[J + _e] = !0;
          }
        }
        return e === n ? Tr(T) : Pr(T), T;
      }
    }
    function Or(e, a, l) {
      return Be(e, a, l, !0);
    }
    function jr(e, a, l) {
      return Be(e, a, l, !1);
    }
    var Ar = jr, zr = Or;
    ie.Fragment = n, ie.jsx = Ar, ie.jsxs = zr;
  })()), ie;
}
var Ke;
function Vr() {
  return Ke || (Ke = 1, process.env.NODE_ENV === "production" ? me.exports = Fr() : me.exports = Nr()), me.exports;
}
var Se = Vr();
function Xe(r, t) {
  if (typeof r == "function")
    return r(t);
  r != null && (r.current = t);
}
function Wr(...r) {
  return (t) => {
    let o = !1;
    const n = r.map((i) => {
      const s = Xe(i, t);
      return !o && typeof s == "function" && (o = !0), s;
    });
    if (o)
      return () => {
        for (let i = 0; i < n.length; i++) {
          const s = n[i];
          typeof s == "function" ? s() : Xe(r[i], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function $r(r) {
  const t = /* @__PURE__ */ Gr(r), o = z.forwardRef((n, i) => {
    const { children: s, ...u } = n, c = z.Children.toArray(s), f = c.find(Yr);
    if (f) {
      const g = f.props.children, b = c.map((h) => h === f ? z.Children.count(g) > 1 ? z.Children.only(null) : z.isValidElement(g) ? g.props.children : null : h);
      return /* @__PURE__ */ Se.jsx(t, { ...u, ref: i, children: z.isValidElement(g) ? z.cloneElement(g, void 0, b) : null });
    }
    return /* @__PURE__ */ Se.jsx(t, { ...u, ref: i, children: s });
  });
  return o.displayName = `${r}.Slot`, o;
}
var Dr = /* @__PURE__ */ $r("Slot");
// @__NO_SIDE_EFFECTS__
function Gr(r) {
  const t = z.forwardRef((o, n) => {
    const { children: i, ...s } = o;
    if (z.isValidElement(i)) {
      const u = Br(i), c = Ur(s, i.props);
      return i.type !== z.Fragment && (c.ref = n ? Wr(n, u) : u), z.cloneElement(i, c);
    }
    return z.Children.count(i) > 1 ? z.Children.only(null) : null;
  });
  return t.displayName = `${r}.SlotClone`, t;
}
var Lr = Symbol("radix.slottable");
function Yr(r) {
  return z.isValidElement(r) && typeof r.type == "function" && "__radixId" in r.type && r.type.__radixId === Lr;
}
function Ur(r, t) {
  const o = { ...t };
  for (const n in t) {
    const i = r[n], s = t[n];
    /^on[A-Z]/.test(n) ? i && s ? o[n] = (...c) => {
      const f = s(...c);
      return i(...c), f;
    } : i && (o[n] = i) : n === "style" ? o[n] = { ...i, ...s } : n === "className" && (o[n] = [i, s].filter(Boolean).join(" "));
  }
  return { ...r, ...o };
}
function Br(r) {
  let t = Object.getOwnPropertyDescriptor(r.props, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning;
  return o ? r.ref : (t = Object.getOwnPropertyDescriptor(r, "ref")?.get, o = t && "isReactWarning" in t && t.isReactWarning, o ? r.props.ref : r.props.ref || r.ref);
}
function tr(r) {
  var t, o, n = "";
  if (typeof r == "string" || typeof r == "number") n += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var i = r.length;
    for (t = 0; t < i; t++) r[t] && (o = tr(r[t])) && (n && (n += " "), n += o);
  } else for (o in r) r[o] && (n && (n += " "), n += o);
  return n;
}
function or() {
  for (var r, t, o = 0, n = "", i = arguments.length; o < i; o++) (r = arguments[o]) && (t = tr(r)) && (n && (n += " "), n += t);
  return n;
}
const He = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, Ze = or, Jr = (r, t) => (o) => {
  var n;
  if (t?.variants == null) return Ze(r, o?.class, o?.className);
  const { variants: i, defaultVariants: s } = t, u = Object.keys(i).map((g) => {
    const b = o?.[g], h = s?.[g];
    if (b === null) return null;
    const C = He(b) || He(h);
    return i[g][C];
  }), c = o && Object.entries(o).reduce((g, b) => {
    let [h, C] = b;
    return C === void 0 || (g[h] = C), g;
  }, {}), f = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((g, b) => {
    let { class: h, className: C, ...O } = b;
    return Object.entries(O).every((j) => {
      let [S, w] = j;
      return Array.isArray(w) ? w.includes({
        ...s,
        ...c
      }[S]) : {
        ...s,
        ...c
      }[S] === w;
    }) ? [
      ...g,
      h,
      C
    ] : g;
  }, []);
  return Ze(r, u, f, o?.class, o?.className);
}, Te = "-", qr = (r) => {
  const t = Xr(r), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: n
  } = r;
  return {
    getClassGroupId: (u) => {
      const c = u.split(Te);
      return c[0] === "" && c.length !== 1 && c.shift(), nr(c, t) || Kr(u);
    },
    getConflictingClassGroupIds: (u, c) => {
      const f = o[u] || [];
      return c && n[u] ? [...f, ...n[u]] : f;
    }
  };
}, nr = (r, t) => {
  if (r.length === 0)
    return t.classGroupId;
  const o = r[0], n = t.nextPart.get(o), i = n ? nr(r.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const s = r.join(Te);
  return t.validators.find(({
    validator: u
  }) => u(s))?.classGroupId;
}, Qe = /^\[(.+)\]$/, Kr = (r) => {
  if (Qe.test(r)) {
    const t = Qe.exec(r)[1], o = t?.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, Xr = (r) => {
  const {
    theme: t,
    prefix: o
  } = r, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Zr(Object.entries(r.classGroups), o).forEach(([s, u]) => {
    Pe(u, n, s, t);
  }), n;
}, Pe = (r, t, o, n) => {
  r.forEach((i) => {
    if (typeof i == "string") {
      const s = i === "" ? t : er(t, i);
      s.classGroupId = o;
      return;
    }
    if (typeof i == "function") {
      if (Hr(i)) {
        Pe(i(n), t, o, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: o
      });
      return;
    }
    Object.entries(i).forEach(([s, u]) => {
      Pe(u, er(t, s), o, n);
    });
  });
}, er = (r, t) => {
  let o = r;
  return t.split(Te).forEach((n) => {
    o.nextPart.has(n) || o.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(n);
  }), o;
}, Hr = (r) => r.isThemeGetter, Zr = (r, t) => t ? r.map(([o, n]) => {
  const i = n.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([u, c]) => [t + u, c])) : s);
  return [o, i];
}) : r, Qr = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const i = (s, u) => {
    o.set(s, u), t++, t > r && (t = 0, n = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let u = o.get(s);
      if (u !== void 0)
        return u;
      if ((u = n.get(s)) !== void 0)
        return i(s, u), u;
    },
    set(s, u) {
      o.has(s) ? o.set(s, u) : i(s, u);
    }
  };
}, ar = "!", et = (r) => {
  const {
    separator: t,
    experimentalParseClassName: o
  } = r, n = t.length === 1, i = t[0], s = t.length, u = (c) => {
    const f = [];
    let g = 0, b = 0, h;
    for (let w = 0; w < c.length; w++) {
      let k = c[w];
      if (g === 0) {
        if (k === i && (n || c.slice(w, w + s) === t)) {
          f.push(c.slice(b, w)), b = w + s;
          continue;
        }
        if (k === "/") {
          h = w;
          continue;
        }
      }
      k === "[" ? g++ : k === "]" && g--;
    }
    const C = f.length === 0 ? c : c.substring(b), O = C.startsWith(ar), j = O ? C.substring(1) : C, S = h && h > b ? h - b : void 0;
    return {
      modifiers: f,
      hasImportantModifier: O,
      baseClassName: j,
      maybePostfixModifierPosition: S
    };
  };
  return o ? (c) => o({
    className: c,
    parseClassName: u
  }) : u;
}, rt = (r) => {
  if (r.length <= 1)
    return r;
  const t = [];
  let o = [];
  return r.forEach((n) => {
    n[0] === "[" ? (t.push(...o.sort(), n), o = []) : o.push(n);
  }), t.push(...o.sort()), t;
}, tt = (r) => ({
  cache: Qr(r.cacheSize),
  parseClassName: et(r),
  ...qr(r)
}), ot = /\s+/, nt = (r, t) => {
  const {
    parseClassName: o,
    getClassGroupId: n,
    getConflictingClassGroupIds: i
  } = t, s = [], u = r.trim().split(ot);
  let c = "";
  for (let f = u.length - 1; f >= 0; f -= 1) {
    const g = u[f], {
      modifiers: b,
      hasImportantModifier: h,
      baseClassName: C,
      maybePostfixModifierPosition: O
    } = o(g);
    let j = !!O, S = n(j ? C.substring(0, O) : C);
    if (!S) {
      if (!j) {
        c = g + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (S = n(C), !S) {
        c = g + (c.length > 0 ? " " + c : c);
        continue;
      }
      j = !1;
    }
    const w = rt(b).join(":"), k = h ? w + ar : w, x = k + S;
    if (s.includes(x))
      continue;
    s.push(x);
    const U = i(S, j);
    for (let W = 0; W < U.length; ++W) {
      const q = U[W];
      s.push(k + q);
    }
    c = g + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function at() {
  let r = 0, t, o, n = "";
  for (; r < arguments.length; )
    (t = arguments[r++]) && (o = sr(t)) && (n && (n += " "), n += o);
  return n;
}
const sr = (r) => {
  if (typeof r == "string")
    return r;
  let t, o = "";
  for (let n = 0; n < r.length; n++)
    r[n] && (t = sr(r[n])) && (o && (o += " "), o += t);
  return o;
};
function st(r, ...t) {
  let o, n, i, s = u;
  function u(f) {
    const g = t.reduce((b, h) => h(b), r());
    return o = tt(g), n = o.cache.get, i = o.cache.set, s = c, c(f);
  }
  function c(f) {
    const g = n(f);
    if (g)
      return g;
    const b = nt(f, o);
    return i(f, b), b;
  }
  return function() {
    return s(at.apply(null, arguments));
  };
}
const _ = (r) => {
  const t = (o) => o[r] || [];
  return t.isThemeGetter = !0, t;
}, ir = /^\[(?:([a-z-]+):)?(.+)\]$/i, it = /^\d+\/\d+$/, lt = /* @__PURE__ */ new Set(["px", "full", "screen"]), ct = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ut = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, dt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ft = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, pt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, $ = (r) => Q(r) || lt.has(r) || it.test(r), L = (r) => ee(r, "length", wt), Q = (r) => !!r && !Number.isNaN(Number(r)), ke = (r) => ee(r, "number", Q), le = (r) => !!r && Number.isInteger(Number(r)), gt = (r) => r.endsWith("%") && Q(r.slice(0, -1)), p = (r) => ir.test(r), Y = (r) => ct.test(r), bt = /* @__PURE__ */ new Set(["length", "size", "percentage"]), vt = (r) => ee(r, bt, lr), mt = (r) => ee(r, "position", lr), ht = /* @__PURE__ */ new Set(["image", "url"]), yt = (r) => ee(r, ht, Et), xt = (r) => ee(r, "", Rt), ce = () => !0, ee = (r, t, o) => {
  const n = ir.exec(r);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : o(n[2]) : !1;
}, wt = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ut.test(r) && !dt.test(r)
), lr = () => !1, Rt = (r) => ft.test(r), Et = (r) => pt.test(r), Ct = () => {
  const r = _("colors"), t = _("spacing"), o = _("blur"), n = _("brightness"), i = _("borderColor"), s = _("borderRadius"), u = _("borderSpacing"), c = _("borderWidth"), f = _("contrast"), g = _("grayscale"), b = _("hueRotate"), h = _("invert"), C = _("gap"), O = _("gradientColorStops"), j = _("gradientColorStopPositions"), S = _("inset"), w = _("margin"), k = _("opacity"), x = _("padding"), U = _("saturate"), W = _("scale"), q = _("sepia"), ue = _("skew"), de = _("space"), fe = _("translate"), K = () => ["auto", "contain", "none"], re = () => ["auto", "hidden", "clip", "visible", "scroll"], te = () => ["auto", p, t], R = () => [p, t], V = () => ["", $, L], M = () => ["auto", Q, p], D = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], B = () => ["solid", "dashed", "dotted", "double", "none"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], X = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", p], ne = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => [Q, p];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ce],
      spacing: [$, L],
      blur: ["none", "", Y, p],
      brightness: F(),
      borderColor: [r],
      borderRadius: ["none", "", "full", Y, p],
      borderSpacing: R(),
      borderWidth: V(),
      contrast: F(),
      grayscale: G(),
      hueRotate: F(),
      invert: G(),
      gap: R(),
      gradientColorStops: [r],
      gradientColorStopPositions: [gt, L],
      inset: te(),
      margin: te(),
      opacity: F(),
      padding: R(),
      saturate: F(),
      scale: F(),
      sepia: G(),
      skew: F(),
      space: R(),
      translate: R()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", p]
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
        columns: [Y]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ne()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ne()
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
        object: [...D(), p]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: re()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": re()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": re()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: K()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": K()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": K()
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
        inset: [S]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [S]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [S]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [S]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [S]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [S]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [S]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [S]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [S]
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
        z: ["auto", le, p]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: te()
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
        flex: ["1", "auto", "initial", "none", p]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: G()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: G()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", le, p]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ce]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", le, p]
        }, p]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": M()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": M()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ce]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [le, p]
        }, p]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": M()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": M()
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
        "auto-cols": ["auto", "min", "max", "fr", p]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", p]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [C]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [C]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [C]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...X()]
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
        content: ["normal", ...X(), "baseline"]
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
        "place-content": [...X(), "baseline"]
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
        p: [x]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [x]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [x]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [x]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [x]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [x]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [x]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [x]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [x]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [de]
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
        "space-y": [de]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", p, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [p, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [p, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Y]
        }, Y]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [p, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [p, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [p, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [p, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Y, L]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ke]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ce]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", p]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Q, ke]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", $, p]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", p]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", p]
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
        placeholder: [r]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [k]
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
        text: [r]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [k]
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
        decoration: [...B(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", $, L]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", $, p]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [r]
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
        indent: R()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", p]
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
        content: ["none", p]
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
        "bg-opacity": [k]
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
        bg: [...D(), mt]
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
        bg: ["auto", "cover", "contain", vt]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, yt]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [r]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [j]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [j]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [j]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [O]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [O]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [O]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
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
        "border-opacity": [k]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...B(), "hidden"]
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
        "divide-opacity": [k]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: B()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [i]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...B()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [$, p]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [$, L]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: V()
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
        ring: [r]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [k]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [$, L]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [r]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Y, xt]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ce]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [k]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...oe(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": oe()
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
        blur: [o]
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
        contrast: [f]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Y, p]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [g]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [b]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [h]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [U]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [q]
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
        "backdrop-blur": [o]
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
        "backdrop-contrast": [f]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [g]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [b]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [h]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [k]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [U]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [q]
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
        "border-spacing": [u]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [u]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [u]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", p]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: F()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", p]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: F()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", p]
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
        scale: [W]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [W]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [W]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [le, p]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [fe]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [fe]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ue]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ue]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", p]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", r]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", p]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [r]
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
        "scroll-m": R()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
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
        "will-change": ["auto", "scroll", "contents", "transform", p]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [r, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [$, L, ke]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [r, "none"]
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
}, _t = /* @__PURE__ */ st(Ct);
function kt(...r) {
  return _t(or(r));
}
const St = Jr(
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
), Pt = z.forwardRef(
  ({ className: r, variant: t, size: o, asChild: n = !1, ...i }, s) => {
    const u = n ? Dr : "button";
    return /* @__PURE__ */ Se.jsx(
      u,
      {
        className: kt(St({ variant: t, size: o, className: r })),
        ref: s,
        ...i
      }
    );
  }
);
Pt.displayName = "Button";
export {
  Pt as Button
};
