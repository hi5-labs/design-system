import * as f from "react";
import te from "react";
var O = { exports: {} }, b = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W;
function ne() {
  if (W) return b;
  W = 1;
  var t = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function l(s, n, a) {
    var d = null;
    if (a !== void 0 && (d = "" + a), n.key !== void 0 && (d = "" + n.key), "key" in n) {
      a = {};
      for (var p in n)
        p !== "key" && (a[p] = n[p]);
    } else a = n;
    return n = a.ref, {
      $$typeof: t,
      type: s,
      key: d,
      ref: n !== void 0 ? n : null,
      props: a
    };
  }
  return b.Fragment = o, b.jsx = l, b.jsxs = l, b;
}
var v = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V;
function oe() {
  return V || (V = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case J:
          return "Profiler";
        case z:
          return "StrictMode";
        case X:
          return "Suspense";
        case H:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case U:
            return "Portal";
          case B:
            return e.displayName || "Context";
          case q:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case g:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function o(e) {
      return "" + e;
    }
    function l(e) {
      try {
        o(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var u = r.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), o(e);
      }
    }
    function s(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === g)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = A.A;
      return e === null ? null : e.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (C.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, r) {
      function u() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: u,
        configurable: !0
      });
    }
    function m() {
      var e = t(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function E(e, r, u, i, S, h) {
      var c = u.ref;
      return e = {
        $$typeof: N,
        type: e,
        key: r,
        props: u,
        _owner: i
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: h
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function T(e, r, u, i, S, h) {
      var c = r.children;
      if (c !== void 0)
        if (i)
          if (ee(c)) {
            for (i = 0; i < c.length; i++)
              R(c[i]);
            Object.freeze && Object.freeze(c);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else R(c);
      if (C.call(r, "key")) {
        c = t(e);
        var _ = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        i = 0 < _.length ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}", F[c + i] || (_ = 0 < _.length ? "{" + _.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          c,
          _,
          c
        ), F[c + i] = !0);
      }
      if (c = null, u !== void 0 && (l(u), c = "" + u), d(r) && (l(r.key), c = "" + r.key), "key" in r) {
        u = {};
        for (var x in r)
          x !== "key" && (u[x] = r[x]);
      } else u = r;
      return c && p(
        u,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), E(
        e,
        c,
        u,
        n(),
        S,
        h
      );
    }
    function R(e) {
      w(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === g && (e._payload.status === "fulfilled" ? w(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function w(e) {
      return typeof e == "object" && e !== null && e.$$typeof === N;
    }
    var y = te, N = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), B = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), A = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, ee = Array.isArray, P = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var I, Y = {}, $ = y.react_stack_bottom_frame.bind(
      y,
      a
    )(), D = P(s(a)), F = {};
    v.Fragment = k, v.jsx = function(e, r, u) {
      var i = 1e4 > A.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        u,
        !1,
        i ? Error("react-stack-top-frame") : $,
        i ? P(s(e)) : D
      );
    }, v.jsxs = function(e, r, u) {
      var i = 1e4 > A.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        u,
        !0,
        i ? Error("react-stack-top-frame") : $,
        i ? P(s(e)) : D
      );
    };
  })()), v;
}
var L;
function ae() {
  return L || (L = 1, process.env.NODE_ENV === "production" ? O.exports = ne() : O.exports = oe()), O.exports;
}
var j = ae();
function M(t, o) {
  if (typeof t == "function")
    return t(o);
  t != null && (t.current = o);
}
function le(...t) {
  return (o) => {
    let l = !1;
    const s = t.map((n) => {
      const a = M(n, o);
      return !l && typeof a == "function" && (l = !0), a;
    });
    if (l)
      return () => {
        for (let n = 0; n < s.length; n++) {
          const a = s[n];
          typeof a == "function" ? a() : M(t[n], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function se(t) {
  const o = /* @__PURE__ */ ie(t), l = f.forwardRef((s, n) => {
    const { children: a, ...d } = s, p = f.Children.toArray(a), m = p.find(fe);
    if (m) {
      const E = m.props.children, T = p.map((R) => R === m ? f.Children.count(E) > 1 ? f.Children.only(null) : f.isValidElement(E) ? E.props.children : null : R);
      return /* @__PURE__ */ j.jsx(o, { ...d, ref: n, children: f.isValidElement(E) ? f.cloneElement(E, void 0, T) : null });
    }
    return /* @__PURE__ */ j.jsx(o, { ...d, ref: n, children: a });
  });
  return l.displayName = `${t}.Slot`, l;
}
var ue = /* @__PURE__ */ se("Slot");
// @__NO_SIDE_EFFECTS__
function ie(t) {
  const o = f.forwardRef((l, s) => {
    const { children: n, ...a } = l;
    if (f.isValidElement(n)) {
      const d = pe(n), p = de(a, n.props);
      return n.type !== f.Fragment && (p.ref = s ? le(s, d) : d), f.cloneElement(n, p);
    }
    return f.Children.count(n) > 1 ? f.Children.only(null) : null;
  });
  return o.displayName = `${t}.SlotClone`, o;
}
var ce = Symbol("radix.slottable");
function fe(t) {
  return f.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === ce;
}
function de(t, o) {
  const l = { ...o };
  for (const s in o) {
    const n = t[s], a = o[s];
    /^on[A-Z]/.test(s) ? n && a ? l[s] = (...p) => {
      const m = a(...p);
      return n(...p), m;
    } : n && (l[s] = n) : s === "style" ? l[s] = { ...n, ...a } : s === "className" && (l[s] = [n, a].filter(Boolean).join(" "));
  }
  return { ...t, ...l };
}
function pe(t) {
  let o = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, l = o && "isReactWarning" in o && o.isReactWarning;
  return l ? t.ref : (o = Object.getOwnPropertyDescriptor(t, "ref")?.get, l = o && "isReactWarning" in o && o.isReactWarning, l ? t.props.ref : t.props.ref || t.ref);
}
const me = f.forwardRef(
  ({ className: t, variant: o, size: l, asChild: s = !1, ...n }, a) => {
    const d = s ? ue : "button";
    return /* @__PURE__ */ j.jsx(
      d,
      {
        className: "dd",
        ref: a,
        "data-testid": "button",
        ...n
      }
    );
  }
);
me.displayName = "Button";
export {
  me as Button
};
