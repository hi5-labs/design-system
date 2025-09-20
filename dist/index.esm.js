import * as c from "react";
import ye, { useLayoutEffect as Hi, useState as zi, forwardRef as vo, createElement as kr } from "react";
import * as Kt from "react-dom";
import Ui from "react-dom";
function yo(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = yo(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function bo() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = yo(e)) && (n && (n += " "), n += t);
  return n;
}
const Kr = "-", Gi = (e) => {
  const t = Yi(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(Kr);
      return a[0] === "" && a.length !== 1 && a.shift(), xo(a, t) || Ki(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = r[i] || [];
      return a && n[i] ? [...l, ...n[i]] : l;
    }
  };
}, xo = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? xo(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Kr);
  return t.validators.find(({
    validator: i
  }) => i(s))?.classGroupId;
}, On = /^\[(.+)\]$/, Ki = (e) => {
  if (On.test(e)) {
    const t = On.exec(e)[1], r = t?.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Yi = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Xi(Object.entries(e.classGroups), r).forEach(([s, i]) => {
    Ir(i, n, s, t);
  }), n;
}, Ir = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : kn(t, o);
      s.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (qi(o)) {
        Ir(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      Ir(i, kn(t, s), r, n);
    });
  });
}, kn = (e, t) => {
  let r = e;
  return t.split(Kr).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, qi = (e) => e.isThemeGetter, Xi = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
  return [r, o];
}) : e, Zi = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (s, i) => {
    r.set(s, i), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let i = r.get(s);
      if (i !== void 0)
        return i;
      if ((i = n.get(s)) !== void 0)
        return o(s, i), i;
    },
    set(s, i) {
      r.has(s) ? r.set(s, i) : o(s, i);
    }
  };
}, wo = "!", Ji = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], s = t.length, i = (a) => {
    const l = [];
    let u = 0, d = 0, f;
    for (let y = 0; y < a.length; y++) {
      let x = a[y];
      if (u === 0) {
        if (x === o && (n || a.slice(y, y + s) === t)) {
          l.push(a.slice(d, y)), d = y + s;
          continue;
        }
        if (x === "/") {
          f = y;
          continue;
        }
      }
      x === "[" ? u++ : x === "]" && u--;
    }
    const h = l.length === 0 ? a : a.substring(d), m = h.startsWith(wo), b = m ? h.substring(1) : h, p = f && f > d ? f - d : void 0;
    return {
      modifiers: l,
      hasImportantModifier: m,
      baseClassName: b,
      maybePostfixModifierPosition: p
    };
  };
  return r ? (a) => r({
    className: a,
    parseClassName: i
  }) : i;
}, Qi = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, ec = (e) => ({
  cache: Zi(e.cacheSize),
  parseClassName: Ji(e),
  ...Gi(e)
}), tc = /\s+/, rc = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, s = [], i = e.trim().split(tc);
  let a = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const u = i[l], {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: m
    } = r(u);
    let b = !!m, p = n(b ? h.substring(0, m) : h);
    if (!p) {
      if (!b) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (p = n(h), !p) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      b = !1;
    }
    const y = Qi(d).join(":"), x = f ? y + wo : y, w = x + p;
    if (s.includes(w))
      continue;
    s.push(w);
    const C = o(p, b);
    for (let S = 0; S < C.length; ++S) {
      const R = C[S];
      s.push(x + R);
    }
    a = u + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function nc() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Co(t)) && (n && (n += " "), n += r);
  return n;
}
const Co = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Co(e[n])) && (r && (r += " "), r += t);
  return r;
};
function oc(e, ...t) {
  let r, n, o, s = i;
  function i(l) {
    const u = t.reduce((d, f) => f(d), e());
    return r = ec(u), n = r.cache.get, o = r.cache.set, s = a, a(l);
  }
  function a(l) {
    const u = n(l);
    if (u)
      return u;
    const d = rc(l, r);
    return o(l, d), d;
  }
  return function() {
    return s(nc.apply(null, arguments));
  };
}
const te = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, So = /^\[(?:([a-z-]+):)?(.+)\]$/i, sc = /^\d+\/\d+$/, ac = /* @__PURE__ */ new Set(["px", "full", "screen"]), ic = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, cc = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, lc = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, uc = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, dc = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, _e = (e) => at(e) || ac.has(e) || sc.test(e), Fe = (e) => ft(e, "length", bc), at = (e) => !!e && !Number.isNaN(Number(e)), yr = (e) => ft(e, "number", at), vt = (e) => !!e && Number.isInteger(Number(e)), fc = (e) => e.endsWith("%") && at(e.slice(0, -1)), B = (e) => So.test(e), $e = (e) => ic.test(e), pc = /* @__PURE__ */ new Set(["length", "size", "percentage"]), mc = (e) => ft(e, pc, Eo), gc = (e) => ft(e, "position", Eo), hc = /* @__PURE__ */ new Set(["image", "url"]), vc = (e) => ft(e, hc, wc), yc = (e) => ft(e, "", xc), yt = () => !0, ft = (e, t, r) => {
  const n = So.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, bc = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  cc.test(e) && !lc.test(e)
), Eo = () => !1, xc = (e) => uc.test(e), wc = (e) => dc.test(e), Cc = () => {
  const e = te("colors"), t = te("spacing"), r = te("blur"), n = te("brightness"), o = te("borderColor"), s = te("borderRadius"), i = te("borderSpacing"), a = te("borderWidth"), l = te("contrast"), u = te("grayscale"), d = te("hueRotate"), f = te("invert"), h = te("gap"), m = te("gradientColorStops"), b = te("gradientColorStopPositions"), p = te("inset"), y = te("margin"), x = te("opacity"), w = te("padding"), C = te("saturate"), S = te("scale"), R = te("sepia"), N = te("skew"), P = te("space"), A = te("translate"), V = () => ["auto", "contain", "none"], W = () => ["auto", "hidden", "clip", "visible", "scroll"], U = () => ["auto", B, t], _ = () => [B, t], $ = () => ["", _e, Fe], D = () => ["auto", at, B], G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], M = () => ["solid", "dashed", "dotted", "double", "none"], H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], K = () => ["", "0", B], oe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], se = () => [at, B];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [yt],
      spacing: [_e, Fe],
      blur: ["none", "", $e, B],
      brightness: se(),
      borderColor: [e],
      borderRadius: ["none", "", "full", $e, B],
      borderSpacing: _(),
      borderWidth: $(),
      contrast: se(),
      grayscale: K(),
      hueRotate: se(),
      invert: K(),
      gap: _(),
      gradientColorStops: [e],
      gradientColorStopPositions: [fc, Fe],
      inset: U(),
      margin: U(),
      opacity: se(),
      padding: _(),
      saturate: se(),
      scale: se(),
      sepia: K(),
      skew: se(),
      space: _(),
      translate: _()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", B]
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
        columns: [$e]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": oe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": oe()
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
        object: [...G(), B]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: W()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": W()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": W()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: V()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": V()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": V()
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
        inset: [p]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [p]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [p]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [p]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [p]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [p]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [p]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [p]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [p]
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
        z: ["auto", vt, B]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: U()
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
        flex: ["1", "auto", "initial", "none", B]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: K()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: K()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", vt, B]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [yt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", vt, B]
        }, B]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": D()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": D()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [yt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [vt, B]
        }, B]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": D()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": D()
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
        "auto-cols": ["auto", "min", "max", "fr", B]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", B]
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
        justify: ["normal", ...k()]
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
        content: ["normal", ...k(), "baseline"]
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
        "place-content": [...k(), "baseline"]
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
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [y]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [y]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [y]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [y]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [y]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [y]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [y]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [y]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [y]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [P]
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
        "space-y": [P]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", B, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [B, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [B, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [$e]
        }, $e]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [B, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [B, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [B, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [B, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", $e, Fe]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", yr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [yt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", B]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", at, yr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", _e, B]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", B]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", B]
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
        "placeholder-opacity": [x]
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
        "text-opacity": [x]
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
        decoration: [...M(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", _e, Fe]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", _e, B]
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
        indent: _()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", B]
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
        content: ["none", B]
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
        "bg-opacity": [x]
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
        bg: [...G(), gc]
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
        bg: ["auto", "cover", "contain", mc]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, vc]
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
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
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
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...M(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
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
        "divide-y": [a]
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
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: M()
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
        outline: ["", ...M()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [_e, B]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [_e, Fe]
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
        ring: $()
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
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [_e, Fe]
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
        shadow: ["", "inner", "none", $e, yc]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [yt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
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
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", $e, B]
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
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
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
        sepia: [R]
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
        "backdrop-contrast": [l]
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
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x]
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
        "backdrop-sepia": [R]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", B]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: se()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", B]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: se()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", B]
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
        rotate: [vt, B]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [A]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [A]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [N]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [N]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", B]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", B]
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
        "scroll-m": _()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": _()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": _()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": _()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": _()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": _()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": _()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": _()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": _()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": _()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": _()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": _()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": _()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": _()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": _()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": _()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": _()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": _()
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
        "will-change": ["auto", "scroll", "contents", "transform", B]
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
        stroke: [_e, Fe, yr]
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
}, Sc = /* @__PURE__ */ oc(Cc);
function O(...e) {
  return Sc(bo(e));
}
function cm(e) {
  return e >= 0.9 ? "rgba(224, 255, 232, 1)" : e < 0.9 && e >= 0.5 ? "rgba(255, 248, 214, 1)" : e < 0.5 && e >= 0.4 ? "rgba(255, 237, 214, 1)" : "rgba(255, 218, 214, 1)";
}
function lm(e) {
  return e >= 0.9 ? "rgba(48, 95, 56, 1)" : e < 0.9 && e >= 0.5 ? "rgba(241, 216, 51, 1)" : e < 0.5 && e >= 0.4 ? "rgba(230, 152, 51, 1)" : "rgba(138, 48, 32, 1)";
}
const um = (e) => {
  const t = parseFloat(e.replace("%", ""));
  return isNaN(t) ? "rgba(180, 180, 180, 1)" : t >= 90 ? "rgba(40, 167, 69, 1)" : t >= 50 ? "rgba(234, 179, 8, 1)" : t >= 40 ? "rgba(249, 115, 22, 1)" : "rgba(239, 68, 68, 1)";
};
function dm(e) {
  if (!e || e === "N/A")
    return "N/A";
  const [t, r] = e.split(" ");
  if (!t || !r)
    return "N/A";
  const [n, o, s] = t.split("-").map(Number), [i, a, l] = r.split(":").map(Number), u = new Date(n, o - 1, s, i, a, l), d = /* @__PURE__ */ new Date(), f = d.getTime() - u.getTime(), h = Math.floor(f / 1e3), m = Math.floor(h / 60), b = Math.floor(m / 60);
  if (m < 1) return "Just now";
  if (m < 60) return `${m} min${m === 1 ? "" : "s"} ago`;
  if (b < 24) return `${b} hour${b === 1 ? "" : "s"} ago`;
  const p = new Date(d);
  if (p.setDate(d.getDate() - 1), u.getDate() === p.getDate() && u.getMonth() === p.getMonth() && u.getFullYear() === p.getFullYear())
    return "Yesterday";
  const x = { month: "long", day: "numeric" };
  return u.getFullYear() !== d.getFullYear() && (x.year = "numeric"), u.toLocaleDateString("en-US", x);
}
const Ec = {
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
function fm(e, t = Ec) {
  const r = e.education.confidence_score * t.education, n = e.prior_employment.confidence_score * t.priorEmployment, o = e.project_match.experience_match.score * t.projectMatch.experience, s = e.project_match.seniority_match.score * t.projectMatch.seniority, a = e.project_match.top_requirements_match.reduce(
    (h, m) => h + m.match_score,
    0
  ) / e.project_match.top_requirements_match.length * t.projectMatch.topRequirements, u = e.skills.reduce(
    (h, m) => h + m.confidence_score,
    0
  ) / e.skills.length * t.skills, d = e.upwork_experience.confidence_score * t.upworkExperience, f = r + n + o + s + a + u + d;
  return Math.min(Math.max(f, 0), 1);
}
const br = 768;
function pm() {
  const [e, t] = c.useState(void 0);
  return c.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${br - 1}px)`), n = () => {
      t(window.innerWidth < br);
    };
    return r.addEventListener("change", n), t(window.innerWidth < br), () => r.removeEventListener("change", n);
  }, []), !!e;
}
var At = { exports: {} }, bt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function Rc() {
  if (In) return bt;
  In = 1;
  var e = ye, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, l, u) {
    var d, f = {}, h = null, m = null;
    u !== void 0 && (h = "" + u), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (d in l) n.call(l, d) && !s.hasOwnProperty(d) && (f[d] = l[d]);
    if (a && a.defaultProps) for (d in l = a.defaultProps, l) f[d] === void 0 && (f[d] = l[d]);
    return { $$typeof: t, type: a, key: h, ref: m, props: f, _owner: o.current };
  }
  return bt.Fragment = r, bt.jsx = i, bt.jsxs = i, bt;
}
var xt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mn;
function Pc() {
  return Mn || (Mn = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = ye, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), b = Symbol.iterator, p = "@@iterator";
    function y(v) {
      if (v === null || typeof v != "object")
        return null;
      var E = b && v[b] || v[p];
      return typeof E == "function" ? E : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(v) {
      {
        for (var E = arguments.length, T = new Array(E > 1 ? E - 1 : 0), j = 1; j < E; j++)
          T[j - 1] = arguments[j];
        C("error", v, T);
      }
    }
    function C(v, E, T) {
      {
        var j = x.ReactDebugCurrentFrame, Z = j.getStackAddendum();
        Z !== "" && (E += "%s", T = T.concat([Z]));
        var Q = T.map(function(Y) {
          return String(Y);
        });
        Q.unshift("Warning: " + E), Function.prototype.apply.call(console[v], console, Q);
      }
    }
    var S = !1, R = !1, N = !1, P = !1, A = !1, V;
    V = Symbol.for("react.module.reference");
    function W(v) {
      return !!(typeof v == "string" || typeof v == "function" || v === n || v === s || A || v === o || v === u || v === d || P || v === m || S || R || N || typeof v == "object" && v !== null && (v.$$typeof === h || v.$$typeof === f || v.$$typeof === i || v.$$typeof === a || v.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      v.$$typeof === V || v.getModuleId !== void 0));
    }
    function U(v, E, T) {
      var j = v.displayName;
      if (j)
        return j;
      var Z = E.displayName || E.name || "";
      return Z !== "" ? T + "(" + Z + ")" : T;
    }
    function _(v) {
      return v.displayName || "Context";
    }
    function $(v) {
      if (v == null)
        return null;
      if (typeof v.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof v == "function")
        return v.displayName || v.name || null;
      if (typeof v == "string")
        return v;
      switch (v) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case a:
            var E = v;
            return _(E) + ".Consumer";
          case i:
            var T = v;
            return _(T._context) + ".Provider";
          case l:
            return U(v, v.render, "ForwardRef");
          case f:
            var j = v.displayName || null;
            return j !== null ? j : $(v.type) || "Memo";
          case h: {
            var Z = v, Q = Z._payload, Y = Z._init;
            try {
              return $(Y(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, G = 0, M, H, k, K, oe, se, Me;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function Ce() {
      {
        if (G === 0) {
          M = console.log, H = console.info, k = console.warn, K = console.error, oe = console.group, se = console.groupCollapsed, Me = console.groupEnd;
          var v = {
            configurable: !0,
            enumerable: !0,
            value: je,
            writable: !0
          };
          Object.defineProperties(console, {
            info: v,
            log: v,
            warn: v,
            error: v,
            group: v,
            groupCollapsed: v,
            groupEnd: v
          });
        }
        G++;
      }
    }
    function De() {
      {
        if (G--, G === 0) {
          var v = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, v, {
              value: M
            }),
            info: D({}, v, {
              value: H
            }),
            warn: D({}, v, {
              value: k
            }),
            error: D({}, v, {
              value: K
            }),
            group: D({}, v, {
              value: oe
            }),
            groupCollapsed: D({}, v, {
              value: se
            }),
            groupEnd: D({}, v, {
              value: Me
            })
          });
        }
        G < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = x.ReactCurrentDispatcher, I;
    function J(v, E, T) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (Z) {
            var j = Z.stack.trim().match(/\n( *(at )?)/);
            I = j && j[1] || "";
          }
        return `
` + I + v;
      }
    }
    var ie = !1, X;
    {
      var ee = typeof WeakMap == "function" ? WeakMap : Map;
      X = new ee();
    }
    function re(v, E) {
      if (!v || ie)
        return "";
      {
        var T = X.get(v);
        if (T !== void 0)
          return T;
      }
      var j;
      ie = !0;
      var Z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = he.current, he.current = null, Ce();
      try {
        if (E) {
          var Y = function() {
            throw Error();
          };
          if (Object.defineProperty(Y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Y, []);
            } catch (de) {
              j = de;
            }
            Reflect.construct(v, [], Y);
          } else {
            try {
              Y.call();
            } catch (de) {
              j = de;
            }
            v.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            j = de;
          }
          v();
        }
      } catch (de) {
        if (de && j && typeof de.stack == "string") {
          for (var z = de.stack.split(`
`), le = j.stack.split(`
`), ne = z.length - 1, ae = le.length - 1; ne >= 1 && ae >= 0 && z[ne] !== le[ae]; )
            ae--;
          for (; ne >= 1 && ae >= 0; ne--, ae--)
            if (z[ne] !== le[ae]) {
              if (ne !== 1 || ae !== 1)
                do
                  if (ne--, ae--, ae < 0 || z[ne] !== le[ae]) {
                    var me = `
` + z[ne].replace(" at new ", " at ");
                    return v.displayName && me.includes("<anonymous>") && (me = me.replace("<anonymous>", v.displayName)), typeof v == "function" && X.set(v, me), me;
                  }
                while (ne >= 1 && ae >= 0);
              break;
            }
        }
      } finally {
        ie = !1, he.current = Q, De(), Error.prepareStackTrace = Z;
      }
      var rt = v ? v.displayName || v.name : "", Ye = rt ? J(rt) : "";
      return typeof v == "function" && X.set(v, Ye), Ye;
    }
    function ue(v, E, T) {
      return re(v, !1);
    }
    function Ne(v) {
      var E = v.prototype;
      return !!(E && E.isReactComponent);
    }
    function Le(v, E, T) {
      if (v == null)
        return "";
      if (typeof v == "function")
        return re(v, Ne(v));
      if (typeof v == "string")
        return J(v);
      switch (v) {
        case u:
          return J("Suspense");
        case d:
          return J("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case l:
            return ue(v.render);
          case f:
            return Le(v.type, E, T);
          case h: {
            var j = v, Z = j._payload, Q = j._init;
            try {
              return Le(Q(Z), E, T);
            } catch {
            }
          }
        }
      return "";
    }
    var Ae = Object.prototype.hasOwnProperty, et = {}, yn = x.ReactDebugCurrentFrame;
    function Nt(v) {
      if (v) {
        var E = v._owner, T = Le(v.type, v._source, E ? E.type : null);
        yn.setExtraStackFrame(T);
      } else
        yn.setExtraStackFrame(null);
    }
    function wi(v, E, T, j, Z) {
      {
        var Q = Function.call.bind(Ae);
        for (var Y in v)
          if (Q(v, Y)) {
            var z = void 0;
            try {
              if (typeof v[Y] != "function") {
                var le = Error((j || "React class") + ": " + T + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw le.name = "Invariant Violation", le;
              }
              z = v[Y](E, Y, j, T, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ne) {
              z = ne;
            }
            z && !(z instanceof Error) && (Nt(Z), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", T, Y, typeof z), Nt(null)), z instanceof Error && !(z.message in et) && (et[z.message] = !0, Nt(Z), w("Failed %s type: %s", T, z.message), Nt(null));
          }
      }
    }
    var Ci = Array.isArray;
    function pr(v) {
      return Ci(v);
    }
    function Si(v) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, T = E && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return T;
      }
    }
    function Ei(v) {
      try {
        return bn(v), !1;
      } catch {
        return !0;
      }
    }
    function bn(v) {
      return "" + v;
    }
    function xn(v) {
      if (Ei(v))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Si(v)), bn(v);
    }
    var wn = x.ReactCurrentOwner, Ri = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Cn, Sn;
    function Pi(v) {
      if (Ae.call(v, "ref")) {
        var E = Object.getOwnPropertyDescriptor(v, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return v.ref !== void 0;
    }
    function Ti(v) {
      if (Ae.call(v, "key")) {
        var E = Object.getOwnPropertyDescriptor(v, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return v.key !== void 0;
    }
    function Ni(v, E) {
      typeof v.ref == "string" && wn.current;
    }
    function Ai(v, E) {
      {
        var T = function() {
          Cn || (Cn = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        T.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: T,
          configurable: !0
        });
      }
    }
    function _i(v, E) {
      {
        var T = function() {
          Sn || (Sn = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        T.isReactWarning = !0, Object.defineProperty(v, "ref", {
          get: T,
          configurable: !0
        });
      }
    }
    var Oi = function(v, E, T, j, Z, Q, Y) {
      var z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: v,
        key: E,
        ref: T,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: Q
      };
      return z._store = {}, Object.defineProperty(z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
    };
    function ki(v, E, T, j, Z) {
      {
        var Q, Y = {}, z = null, le = null;
        T !== void 0 && (xn(T), z = "" + T), Ti(E) && (xn(E.key), z = "" + E.key), Pi(E) && (le = E.ref, Ni(E, Z));
        for (Q in E)
          Ae.call(E, Q) && !Ri.hasOwnProperty(Q) && (Y[Q] = E[Q]);
        if (v && v.defaultProps) {
          var ne = v.defaultProps;
          for (Q in ne)
            Y[Q] === void 0 && (Y[Q] = ne[Q]);
        }
        if (z || le) {
          var ae = typeof v == "function" ? v.displayName || v.name || "Unknown" : v;
          z && Ai(Y, ae), le && _i(Y, ae);
        }
        return Oi(v, z, le, Z, j, wn.current, Y);
      }
    }
    var mr = x.ReactCurrentOwner, En = x.ReactDebugCurrentFrame;
    function tt(v) {
      if (v) {
        var E = v._owner, T = Le(v.type, v._source, E ? E.type : null);
        En.setExtraStackFrame(T);
      } else
        En.setExtraStackFrame(null);
    }
    var gr;
    gr = !1;
    function hr(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }
    function Rn() {
      {
        if (mr.current) {
          var v = $(mr.current.type);
          if (v)
            return `

Check the render method of \`` + v + "`.";
        }
        return "";
      }
    }
    function Ii(v) {
      return "";
    }
    var Pn = {};
    function Mi(v) {
      {
        var E = Rn();
        if (!E) {
          var T = typeof v == "string" ? v : v.displayName || v.name;
          T && (E = `

Check the top-level render call using <` + T + ">.");
        }
        return E;
      }
    }
    function Tn(v, E) {
      {
        if (!v._store || v._store.validated || v.key != null)
          return;
        v._store.validated = !0;
        var T = Mi(E);
        if (Pn[T])
          return;
        Pn[T] = !0;
        var j = "";
        v && v._owner && v._owner !== mr.current && (j = " It was passed a child from " + $(v._owner.type) + "."), tt(v), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', T, j), tt(null);
      }
    }
    function Nn(v, E) {
      {
        if (typeof v != "object")
          return;
        if (pr(v))
          for (var T = 0; T < v.length; T++) {
            var j = v[T];
            hr(j) && Tn(j, E);
          }
        else if (hr(v))
          v._store && (v._store.validated = !0);
        else if (v) {
          var Z = y(v);
          if (typeof Z == "function" && Z !== v.entries)
            for (var Q = Z.call(v), Y; !(Y = Q.next()).done; )
              hr(Y.value) && Tn(Y.value, E);
        }
      }
    }
    function ji(v) {
      {
        var E = v.type;
        if (E == null || typeof E == "string")
          return;
        var T;
        if (typeof E == "function")
          T = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === f))
          T = E.propTypes;
        else
          return;
        if (T) {
          var j = $(E);
          wi(T, v.props, "prop", j, v);
        } else if (E.PropTypes !== void 0 && !gr) {
          gr = !0;
          var Z = $(E);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Di(v) {
      {
        for (var E = Object.keys(v.props), T = 0; T < E.length; T++) {
          var j = E[T];
          if (j !== "children" && j !== "key") {
            tt(v), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), tt(null);
            break;
          }
        }
        v.ref !== null && (tt(v), w("Invalid attribute `ref` supplied to `React.Fragment`."), tt(null));
      }
    }
    var An = {};
    function _n(v, E, T, j, Z, Q) {
      {
        var Y = W(v);
        if (!Y) {
          var z = "";
          (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var le = Ii();
          le ? z += le : z += Rn();
          var ne;
          v === null ? ne = "null" : pr(v) ? ne = "array" : v !== void 0 && v.$$typeof === t ? (ne = "<" + ($(v.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : ne = typeof v, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ne, z);
        }
        var ae = ki(v, E, T, Z, Q);
        if (ae == null)
          return ae;
        if (Y) {
          var me = E.children;
          if (me !== void 0)
            if (j)
              if (pr(me)) {
                for (var rt = 0; rt < me.length; rt++)
                  Nn(me[rt], v);
                Object.freeze && Object.freeze(me);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Nn(me, v);
        }
        if (Ae.call(E, "key")) {
          var Ye = $(v), de = Object.keys(E).filter(function(Vi) {
            return Vi !== "key";
          }), vr = de.length > 0 ? "{key: someKey, " + de.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!An[Ye + vr]) {
            var Wi = de.length > 0 ? "{" + de.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, vr, Ye, Wi, Ye), An[Ye + vr] = !0;
          }
        }
        return v === n ? Di(ae) : ji(ae), ae;
      }
    }
    function Li(v, E, T) {
      return _n(v, E, T, !0);
    }
    function Fi(v, E, T) {
      return _n(v, E, T, !1);
    }
    var $i = Fi, Bi = Li;
    xt.Fragment = n, xt.jsx = $i, xt.jsxs = Bi;
  })()), xt;
}
var jn;
function Tc() {
  return jn || (jn = 1, process.env.NODE_ENV === "production" ? At.exports = Rc() : At.exports = Pc()), At.exports;
}
var g = Tc();
function Dn(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ro(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const s = Dn(o, t);
      return !r && typeof s == "function" && (r = !0), s;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const s = n[o];
          typeof s == "function" ? s() : Dn(e[o], null);
        }
      };
  };
}
function q(...e) {
  return c.useCallback(Ro(...e), e);
}
// @__NO_SIDE_EFFECTS__
function lt(e) {
  const t = /* @__PURE__ */ Ac(e), r = c.forwardRef((n, o) => {
    const { children: s, ...i } = n, a = c.Children.toArray(s), l = a.find(Oc);
    if (l) {
      const u = l.props.children, d = a.map((f) => f === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ g.jsx(t, { ...i, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, d) : null });
    }
    return /* @__PURE__ */ g.jsx(t, { ...i, ref: o, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
var Nc = /* @__PURE__ */ lt("Slot");
// @__NO_SIDE_EFFECTS__
function Ac(e) {
  const t = c.forwardRef((r, n) => {
    const { children: o, ...s } = r;
    if (c.isValidElement(o)) {
      const i = Ic(o), a = kc(s, o.props);
      return o.type !== c.Fragment && (a.ref = n ? Ro(n, i) : i), c.cloneElement(o, a);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Po = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function _c(e) {
  const t = ({ children: r }) => /* @__PURE__ */ g.jsx(g.Fragment, { children: r });
  return t.displayName = `${e}.Slottable`, t.__radixId = Po, t;
}
function Oc(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Po;
}
function kc(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...a) => {
      const l = s(...a);
      return o(...a), l;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Ic(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const Ln = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Fn = bo, pt = (e, t) => (r) => {
  var n;
  if (t?.variants == null) return Fn(e, r?.class, r?.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((u) => {
    const d = r?.[u], f = s?.[u];
    if (d === null) return null;
    const h = Ln(d) || Ln(f);
    return o[u][h];
  }), a = r && Object.entries(r).reduce((u, d) => {
    let [f, h] = d;
    return h === void 0 || (u[f] = h), u;
  }, {}), l = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, d) => {
    let { class: f, className: h, ...m } = d;
    return Object.entries(m).every((b) => {
      let [p, y] = b;
      return Array.isArray(y) ? y.includes({
        ...s,
        ...a
      }[p]) : {
        ...s,
        ...a
      }[p] === y;
    }) ? [
      ...u,
      f,
      h
    ] : u;
  }, []);
  return Fn(e, i, l, r?.class, r?.className);
}, Mc = pt(
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
), jc = c.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...o }, s) => {
    const i = n ? Nc : "button";
    return /* @__PURE__ */ g.jsx(
      i,
      {
        className: O(Mc({ variant: t, size: r, className: e })),
        ref: s,
        ...o
      }
    );
  }
);
jc.displayName = "Button";
const Dc = pt(
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
), Lc = c.forwardRef(
  ({ className: e, size: t, ...r }, n) => /* @__PURE__ */ g.jsx(
    "input",
    {
      ref: n,
      className: O(Dc({ size: t, className: e })),
      ...r
    }
  )
);
Lc.displayName = "Input";
const Fc = c.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
    "textarea",
    {
      className: O(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...t
    }
  )
);
Fc.displayName = "Textarea";
function $n(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function F(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e?.(o), r === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function $c(e, t) {
  const r = c.createContext(t), n = (s) => {
    const { children: i, ...a } = s, l = c.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ g.jsx(r.Provider, { value: l, children: i });
  };
  n.displayName = e + "Provider";
  function o(s) {
    const i = c.useContext(r);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [n, o];
}
function ge(e, t = []) {
  let r = [];
  function n(s, i) {
    const a = c.createContext(i), l = r.length;
    r = [...r, i];
    const u = (f) => {
      const { scope: h, children: m, ...b } = f, p = h?.[e]?.[l] || a, y = c.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ g.jsx(p.Provider, { value: y, children: m });
    };
    u.displayName = s + "Provider";
    function d(f, h) {
      const m = h?.[e]?.[l] || a, b = c.useContext(m);
      if (b) return b;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [u, d];
  }
  const o = () => {
    const s = r.map((i) => c.createContext(i));
    return function(a) {
      const l = a?.[e] || s;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [n, Bc(o, ...t)];
}
function Bc(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = n.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(s)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function To(e) {
  const t = e + "CollectionProvider", [r, n] = ge(t), [o, s] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (p) => {
    const { scope: y, children: x } = p, w = ye.useRef(null), C = ye.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ g.jsx(o, { scope: y, itemMap: C, collectionRef: w, children: x });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ lt(a), u = ye.forwardRef(
    (p, y) => {
      const { scope: x, children: w } = p, C = s(a, x), S = q(y, C.collectionRef);
      return /* @__PURE__ */ g.jsx(l, { ref: S, children: w });
    }
  );
  u.displayName = a;
  const d = e + "CollectionItemSlot", f = "data-radix-collection-item", h = /* @__PURE__ */ lt(d), m = ye.forwardRef(
    (p, y) => {
      const { scope: x, children: w, ...C } = p, S = ye.useRef(null), R = q(y, S), N = s(d, x);
      return ye.useEffect(() => (N.itemMap.set(S, { ref: S, ...C }), () => void N.itemMap.delete(S))), /* @__PURE__ */ g.jsx(h, { [f]: "", ref: R, children: w });
    }
  );
  m.displayName = d;
  function b(p) {
    const y = s(e + "CollectionConsumer", p);
    return ye.useCallback(() => {
      const w = y.collectionRef.current;
      if (!w) return [];
      const C = Array.from(w.querySelectorAll(`[${f}]`));
      return Array.from(y.itemMap.values()).sort(
        (N, P) => C.indexOf(N.ref.current) - C.indexOf(P.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: i, Slot: u, ItemSlot: m },
    b,
    n
  ];
}
var Wc = c.createContext(void 0);
function Yr(e) {
  const t = c.useContext(Wc);
  return e || t || "ltr";
}
var Vc = [
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
], L = Vc.reduce((e, t) => {
  const r = /* @__PURE__ */ lt(`Primitive.${t}`), n = c.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ g.jsx(l, { ...a, ref: s });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Hc(e, t) {
  e && Kt.flushSync(() => e.dispatchEvent(t));
}
function Oe(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...r) => t.current?.(...r), []);
}
function zc(e, t = globalThis?.document) {
  const r = Oe(e);
  c.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var Uc = "DismissableLayer", Mr = "dismissableLayer.update", Gc = "dismissableLayer.pointerDownOutside", Kc = "dismissableLayer.focusOutside", Bn, No = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Yt = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, u = c.useContext(No), [d, f] = c.useState(null), h = d?.ownerDocument ?? globalThis?.document, [, m] = c.useState({}), b = q(t, (P) => f(P)), p = Array.from(u.layers), [y] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), x = p.indexOf(y), w = d ? p.indexOf(d) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, S = w >= x, R = Xc((P) => {
      const A = P.target, V = [...u.branches].some((W) => W.contains(A));
      !S || V || (o?.(P), i?.(P), P.defaultPrevented || a?.());
    }, h), N = Zc((P) => {
      const A = P.target;
      [...u.branches].some((W) => W.contains(A)) || (s?.(P), i?.(P), P.defaultPrevented || a?.());
    }, h);
    return zc((P) => {
      w === u.layers.size - 1 && (n?.(P), !P.defaultPrevented && a && (P.preventDefault(), a()));
    }, h), c.useEffect(() => {
      if (d)
        return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Bn = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Wn(), () => {
          r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Bn);
        };
    }, [d, h, r, u]), c.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Wn());
    }, [d, u]), c.useEffect(() => {
      const P = () => m({});
      return document.addEventListener(Mr, P), () => document.removeEventListener(Mr, P);
    }, []), /* @__PURE__ */ g.jsx(
      L.div,
      {
        ...l,
        ref: b,
        style: {
          pointerEvents: C ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: F(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: F(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: F(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }
);
Yt.displayName = Uc;
var Yc = "DismissableLayerBranch", qc = c.forwardRef((e, t) => {
  const r = c.useContext(No), n = c.useRef(null), o = q(t, n);
  return c.useEffect(() => {
    const s = n.current;
    if (s)
      return r.branches.add(s), () => {
        r.branches.delete(s);
      };
  }, [r.branches]), /* @__PURE__ */ g.jsx(L.div, { ...e, ref: o });
});
qc.displayName = Yc;
function Xc(e, t = globalThis?.document) {
  const r = Oe(e), n = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const s = (a) => {
      if (a.target && !n.current) {
        let l = function() {
          Ao(
            Gc,
            r,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      n.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function Zc(e, t = globalThis?.document) {
  const r = Oe(e), n = c.useRef(!1);
  return c.useEffect(() => {
    const o = (s) => {
      s.target && !n.current && Ao(Kc, r, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Wn() {
  const e = new CustomEvent(Mr);
  document.dispatchEvent(e);
}
function Ao(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? Hc(o, s) : o.dispatchEvent(s);
}
var xr = 0;
function _o() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Vn()), document.body.insertAdjacentElement("beforeend", e[1] ?? Vn()), xr++, () => {
      xr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), xr--;
    };
  }, []);
}
function Vn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var wr = "focusScope.autoFocusOnMount", Cr = "focusScope.autoFocusOnUnmount", Hn = { bubbles: !1, cancelable: !0 }, Jc = "FocusScope", qr = c.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = c.useState(null), u = Oe(o), d = Oe(s), f = c.useRef(null), h = q(t, (p) => l(p)), m = c.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  c.useEffect(() => {
    if (n) {
      let p = function(C) {
        if (m.paused || !a) return;
        const S = C.target;
        a.contains(S) ? f.current = S : Be(f.current, { select: !0 });
      }, y = function(C) {
        if (m.paused || !a) return;
        const S = C.relatedTarget;
        S !== null && (a.contains(S) || Be(f.current, { select: !0 }));
      }, x = function(C) {
        if (document.activeElement === document.body)
          for (const R of C)
            R.removedNodes.length > 0 && Be(a);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", y);
      const w = new MutationObserver(x);
      return a && w.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", y), w.disconnect();
      };
    }
  }, [n, a, m.paused]), c.useEffect(() => {
    if (a) {
      Un.add(m);
      const p = document.activeElement;
      if (!a.contains(p)) {
        const x = new CustomEvent(wr, Hn);
        a.addEventListener(wr, u), a.dispatchEvent(x), x.defaultPrevented || (Qc(ol(Oo(a)), { select: !0 }), document.activeElement === p && Be(a));
      }
      return () => {
        a.removeEventListener(wr, u), setTimeout(() => {
          const x = new CustomEvent(Cr, Hn);
          a.addEventListener(Cr, d), a.dispatchEvent(x), x.defaultPrevented || Be(p ?? document.body, { select: !0 }), a.removeEventListener(Cr, d), Un.remove(m);
        }, 0);
      };
    }
  }, [a, u, d, m]);
  const b = c.useCallback(
    (p) => {
      if (!r && !n || m.paused) return;
      const y = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, x = document.activeElement;
      if (y && x) {
        const w = p.currentTarget, [C, S] = el(w);
        C && S ? !p.shiftKey && x === S ? (p.preventDefault(), r && Be(C, { select: !0 })) : p.shiftKey && x === C && (p.preventDefault(), r && Be(S, { select: !0 })) : x === w && p.preventDefault();
      }
    },
    [r, n, m.paused]
  );
  return /* @__PURE__ */ g.jsx(L.div, { tabIndex: -1, ...i, ref: h, onKeyDown: b });
});
qr.displayName = Jc;
function Qc(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (Be(n, { select: t }), document.activeElement !== r) return;
}
function el(e) {
  const t = Oo(e), r = zn(t, e), n = zn(t.reverse(), e);
  return [r, n];
}
function Oo(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function zn(e, t) {
  for (const r of e)
    if (!tl(r, { upTo: t })) return r;
}
function tl(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function rl(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Be(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && rl(e) && t && e.select();
  }
}
var Un = nl();
function nl() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && r?.pause(), e = Gn(e, t), e.unshift(t);
    },
    remove(t) {
      e = Gn(e, t), e[0]?.resume();
    }
  };
}
function Gn(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function ol(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ce = globalThis?.document ? c.useLayoutEffect : () => {
}, sl = c[" useId ".trim().toString()] || (() => {
}), al = 0;
function We(e) {
  const [t, r] = c.useState(sl());
  return ce(() => {
    r((n) => n ?? String(al++));
  }, [e]), t ? `radix-${t}` : "";
}
const il = ["top", "right", "bottom", "left"], He = Math.min, fe = Math.max, Bt = Math.round, _t = Math.floor, Re = (e) => ({
  x: e,
  y: e
}), cl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ll = {
  start: "end",
  end: "start"
};
function jr(e, t, r) {
  return fe(e, He(t, r));
}
function ke(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ie(e) {
  return e.split("-")[0];
}
function mt(e) {
  return e.split("-")[1];
}
function Xr(e) {
  return e === "x" ? "y" : "x";
}
function Zr(e) {
  return e === "y" ? "height" : "width";
}
const ul = /* @__PURE__ */ new Set(["top", "bottom"]);
function Ee(e) {
  return ul.has(Ie(e)) ? "y" : "x";
}
function Jr(e) {
  return Xr(Ee(e));
}
function dl(e, t, r) {
  r === void 0 && (r = !1);
  const n = mt(e), o = Jr(e), s = Zr(o);
  let i = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Wt(i)), [i, Wt(i)];
}
function fl(e) {
  const t = Wt(e);
  return [Dr(e), t, Dr(t)];
}
function Dr(e) {
  return e.replace(/start|end/g, (t) => ll[t]);
}
const Kn = ["left", "right"], Yn = ["right", "left"], pl = ["top", "bottom"], ml = ["bottom", "top"];
function gl(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? Yn : Kn : t ? Kn : Yn;
    case "left":
    case "right":
      return t ? pl : ml;
    default:
      return [];
  }
}
function hl(e, t, r, n) {
  const o = mt(e);
  let s = gl(Ie(e), r === "start", n);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Dr)))), s;
}
function Wt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => cl[t]);
}
function vl(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ko(e) {
  return typeof e != "number" ? vl(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Vt(e) {
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
function qn(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const s = Ee(t), i = Jr(t), a = Zr(i), l = Ie(t), u = s === "y", d = n.x + n.width / 2 - o.width / 2, f = n.y + n.height / 2 - o.height / 2, h = n[a] / 2 - o[a] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: d,
        y: n.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      m = {
        x: n.x + n.width,
        y: f
      };
      break;
    case "left":
      m = {
        x: n.x - o.width,
        y: f
      };
      break;
    default:
      m = {
        x: n.x,
        y: n.y
      };
  }
  switch (mt(t)) {
    case "start":
      m[i] -= h * (r && u ? -1 : 1);
      break;
    case "end":
      m[i] += h * (r && u ? -1 : 1);
      break;
  }
  return m;
}
const yl = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = r, a = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = qn(u, n, l), h = n, m = {}, b = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: y,
      fn: x
    } = a[p], {
      x: w,
      y: C,
      data: S,
      reset: R
    } = await x({
      x: d,
      y: f,
      initialPlacement: n,
      placement: h,
      strategy: o,
      middlewareData: m,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = w ?? d, f = C ?? f, m = {
      ...m,
      [y]: {
        ...m[y],
        ...S
      }
    }, R && b <= 50 && (b++, typeof R == "object" && (R.placement && (h = R.placement), R.rects && (u = R.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : R.rects), {
      x: d,
      y: f
    } = qn(u, h, l)), p = -1);
  }
  return {
    x: d,
    y: f,
    placement: h,
    strategy: o,
    middlewareData: m
  };
};
async function Ct(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: s,
    rects: i,
    elements: a,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: m = 0
  } = ke(t, e), b = ko(m), y = a[h ? f === "floating" ? "reference" : "floating" : f], x = Vt(await s.getClippingRect({
    element: (r = await (s.isElement == null ? void 0 : s.isElement(y))) == null || r ? y : y.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), w = f === "floating" ? {
    x: n,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), S = await (s.isElement == null ? void 0 : s.isElement(C)) ? await (s.getScale == null ? void 0 : s.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = Vt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: C,
    strategy: l
  }) : w);
  return {
    top: (x.top - R.top + b.top) / S.y,
    bottom: (R.bottom - x.bottom + b.bottom) / S.y,
    left: (x.left - R.left + b.left) / S.x,
    right: (R.right - x.right + b.right) / S.x
  };
}
const bl = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: o,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: l
    } = t, {
      element: u,
      padding: d = 0
    } = ke(e, t) || {};
    if (u == null)
      return {};
    const f = ko(d), h = {
      x: r,
      y: n
    }, m = Jr(o), b = Zr(m), p = await i.getDimensions(u), y = m === "y", x = y ? "top" : "left", w = y ? "bottom" : "right", C = y ? "clientHeight" : "clientWidth", S = s.reference[b] + s.reference[m] - h[m] - s.floating[b], R = h[m] - s.reference[m], N = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let P = N ? N[C] : 0;
    (!P || !await (i.isElement == null ? void 0 : i.isElement(N))) && (P = a.floating[C] || s.floating[b]);
    const A = S / 2 - R / 2, V = P / 2 - p[b] / 2 - 1, W = He(f[x], V), U = He(f[w], V), _ = W, $ = P - p[b] - U, D = P / 2 - p[b] / 2 + A, G = jr(_, D, $), M = !l.arrow && mt(o) != null && D !== G && s.reference[b] / 2 - (D < _ ? W : U) - p[b] / 2 < 0, H = M ? D < _ ? D - _ : D - $ : 0;
    return {
      [m]: h[m] + H,
      data: {
        [m]: G,
        centerOffset: D - G - H,
        ...M && {
          alignmentOffset: H
        }
      },
      reset: M
    };
  }
}), xl = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: a,
        platform: l,
        elements: u
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: p = !0,
        ...y
      } = ke(e, t);
      if ((r = s.arrow) != null && r.alignmentOffset)
        return {};
      const x = Ie(o), w = Ee(a), C = Ie(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), R = h || (C || !p ? [Wt(a)] : fl(a)), N = b !== "none";
      !h && N && R.push(...hl(a, p, b, S));
      const P = [a, ...R], A = await Ct(t, y), V = [];
      let W = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (d && V.push(A[x]), f) {
        const D = dl(o, i, S);
        V.push(A[D[0]], A[D[1]]);
      }
      if (W = [...W, {
        placement: o,
        overflows: V
      }], !V.every((D) => D <= 0)) {
        var U, _;
        const D = (((U = s.flip) == null ? void 0 : U.index) || 0) + 1, G = P[D];
        if (G && (!(f === "alignment" ? w !== Ee(G) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        W.every((k) => Ee(k.placement) === w ? k.overflows[0] > 0 : !0)))
          return {
            data: {
              index: D,
              overflows: W
            },
            reset: {
              placement: G
            }
          };
        let M = (_ = W.filter((H) => H.overflows[0] <= 0).sort((H, k) => H.overflows[1] - k.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!M)
          switch (m) {
            case "bestFit": {
              var $;
              const H = ($ = W.filter((k) => {
                if (N) {
                  const K = Ee(k.placement);
                  return K === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  K === "y";
                }
                return !0;
              }).map((k) => [k.placement, k.overflows.filter((K) => K > 0).reduce((K, oe) => K + oe, 0)]).sort((k, K) => k[1] - K[1])[0]) == null ? void 0 : $[0];
              H && (M = H);
              break;
            }
            case "initialPlacement":
              M = a;
              break;
          }
        if (o !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
};
function Xn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Zn(e) {
  return il.some((t) => e[t] >= 0);
}
const wl = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = ke(e, t);
      switch (n) {
        case "referenceHidden": {
          const s = await Ct(t, {
            ...o,
            elementContext: "reference"
          }), i = Xn(s, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Zn(i)
            }
          };
        }
        case "escaped": {
          const s = await Ct(t, {
            ...o,
            altBoundary: !0
          }), i = Xn(s, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Zn(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Io = /* @__PURE__ */ new Set(["left", "top"]);
async function Cl(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), i = Ie(r), a = mt(r), l = Ee(r) === "y", u = Io.has(i) ? -1 : 1, d = s && l ? -1 : 1, f = ke(t, e);
  let {
    mainAxis: h,
    crossAxis: m,
    alignmentAxis: b
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return a && typeof b == "number" && (m = a === "end" ? b * -1 : b), l ? {
    x: m * d,
    y: h * u
  } : {
    x: h * u,
    y: m * d
  };
}
const Sl = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: a
      } = t, l = await Cl(t, e);
      return i === ((r = a.offset) == null ? void 0 : r.placement) && (n = a.arrow) != null && n.alignmentOffset ? {} : {
        x: o + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, El = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: a = {
          fn: (y) => {
            let {
              x,
              y: w
            } = y;
            return {
              x,
              y: w
            };
          }
        },
        ...l
      } = ke(e, t), u = {
        x: r,
        y: n
      }, d = await Ct(t, l), f = Ee(Ie(o)), h = Xr(f);
      let m = u[h], b = u[f];
      if (s) {
        const y = h === "y" ? "top" : "left", x = h === "y" ? "bottom" : "right", w = m + d[y], C = m - d[x];
        m = jr(w, m, C);
      }
      if (i) {
        const y = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", w = b + d[y], C = b - d[x];
        b = jr(w, b, C);
      }
      const p = a.fn({
        ...t,
        [h]: m,
        [f]: b
      });
      return {
        ...p,
        data: {
          x: p.x - r,
          y: p.y - n,
          enabled: {
            [h]: s,
            [f]: i
          }
        }
      };
    }
  };
}, Rl = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: o,
        rects: s,
        middlewareData: i
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = ke(e, t), d = {
        x: r,
        y: n
      }, f = Ee(o), h = Xr(f);
      let m = d[h], b = d[f];
      const p = ke(a, t), y = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (l) {
        const C = h === "y" ? "height" : "width", S = s.reference[h] - s.floating[C] + y.mainAxis, R = s.reference[h] + s.reference[C] - y.mainAxis;
        m < S ? m = S : m > R && (m = R);
      }
      if (u) {
        var x, w;
        const C = h === "y" ? "width" : "height", S = Io.has(Ie(o)), R = s.reference[f] - s.floating[C] + (S && ((x = i.offset) == null ? void 0 : x[f]) || 0) + (S ? 0 : y.crossAxis), N = s.reference[f] + s.reference[C] + (S ? 0 : ((w = i.offset) == null ? void 0 : w[f]) || 0) - (S ? y.crossAxis : 0);
        b < R ? b = R : b > N && (b = N);
      }
      return {
        [h]: m,
        [f]: b
      };
    }
  };
}, Pl = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        rects: s,
        platform: i,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...u
      } = ke(e, t), d = await Ct(t, u), f = Ie(o), h = mt(o), m = Ee(o) === "y", {
        width: b,
        height: p
      } = s.floating;
      let y, x;
      f === "top" || f === "bottom" ? (y = f, x = h === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (x = f, y = h === "end" ? "top" : "bottom");
      const w = p - d.top - d.bottom, C = b - d.left - d.right, S = He(p - d[y], w), R = He(b - d[x], C), N = !t.middlewareData.shift;
      let P = S, A = R;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (A = C), (n = t.middlewareData.shift) != null && n.enabled.y && (P = w), N && !h) {
        const W = fe(d.left, 0), U = fe(d.right, 0), _ = fe(d.top, 0), $ = fe(d.bottom, 0);
        m ? A = b - 2 * (W !== 0 || U !== 0 ? W + U : fe(d.left, d.right)) : P = p - 2 * (_ !== 0 || $ !== 0 ? _ + $ : fe(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: A,
        availableHeight: P
      });
      const V = await i.getDimensions(a.floating);
      return b !== V.width || p !== V.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function qt() {
  return typeof window < "u";
}
function gt(e) {
  return Mo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function pe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Te(e) {
  var t;
  return (t = (Mo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Mo(e) {
  return qt() ? e instanceof Node || e instanceof pe(e).Node : !1;
}
function be(e) {
  return qt() ? e instanceof Element || e instanceof pe(e).Element : !1;
}
function Pe(e) {
  return qt() ? e instanceof HTMLElement || e instanceof pe(e).HTMLElement : !1;
}
function Jn(e) {
  return !qt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof pe(e).ShadowRoot;
}
const Tl = /* @__PURE__ */ new Set(["inline", "contents"]);
function Rt(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = xe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !Tl.has(o);
}
const Nl = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Al(e) {
  return Nl.has(gt(e));
}
const _l = [":popover-open", ":modal"];
function Xt(e) {
  return _l.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Ol = ["transform", "translate", "scale", "rotate", "perspective"], kl = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Il = ["paint", "layout", "strict", "content"];
function Qr(e) {
  const t = en(), r = be(e) ? xe(e) : e;
  return Ol.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || kl.some((n) => (r.willChange || "").includes(n)) || Il.some((n) => (r.contain || "").includes(n));
}
function Ml(e) {
  let t = ze(e);
  for (; Pe(t) && !ut(t); ) {
    if (Qr(t))
      return t;
    if (Xt(t))
      return null;
    t = ze(t);
  }
  return null;
}
function en() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const jl = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ut(e) {
  return jl.has(gt(e));
}
function xe(e) {
  return pe(e).getComputedStyle(e);
}
function Zt(e) {
  return be(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ze(e) {
  if (gt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Jn(e) && e.host || // Fallback.
    Te(e)
  );
  return Jn(t) ? t.host : t;
}
function jo(e) {
  const t = ze(e);
  return ut(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Pe(t) && Rt(t) ? t : jo(t);
}
function St(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = jo(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = pe(o);
  if (s) {
    const a = Lr(i);
    return t.concat(i, i.visualViewport || [], Rt(o) ? o : [], a && r ? St(a) : []);
  }
  return t.concat(o, St(o, [], r));
}
function Lr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Do(e) {
  const t = xe(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = Pe(e), s = o ? e.offsetWidth : r, i = o ? e.offsetHeight : n, a = Bt(r) !== s || Bt(n) !== i;
  return a && (r = s, n = i), {
    width: r,
    height: n,
    $: a
  };
}
function tn(e) {
  return be(e) ? e : e.contextElement;
}
function it(e) {
  const t = tn(e);
  if (!Pe(t))
    return Re(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: s
  } = Do(t);
  let i = (s ? Bt(r.width) : r.width) / n, a = (s ? Bt(r.height) : r.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Dl = /* @__PURE__ */ Re(0);
function Lo(e) {
  const t = pe(e);
  return !en() || !t.visualViewport ? Dl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ll(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== pe(e) ? !1 : t;
}
function qe(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), s = tn(e);
  let i = Re(1);
  t && (n ? be(n) && (i = it(n)) : i = it(e));
  const a = Ll(s, r, n) ? Lo(s) : Re(0);
  let l = (o.left + a.x) / i.x, u = (o.top + a.y) / i.y, d = o.width / i.x, f = o.height / i.y;
  if (s) {
    const h = pe(s), m = n && be(n) ? pe(n) : n;
    let b = h, p = Lr(b);
    for (; p && n && m !== b; ) {
      const y = it(p), x = p.getBoundingClientRect(), w = xe(p), C = x.left + (p.clientLeft + parseFloat(w.paddingLeft)) * y.x, S = x.top + (p.clientTop + parseFloat(w.paddingTop)) * y.y;
      l *= y.x, u *= y.y, d *= y.x, f *= y.y, l += C, u += S, b = pe(p), p = Lr(b);
    }
  }
  return Vt({
    width: d,
    height: f,
    x: l,
    y: u
  });
}
function Jt(e, t) {
  const r = Zt(e).scrollLeft;
  return t ? t.left + r : qe(Te(e)).left + r;
}
function Fo(e, t) {
  const r = e.getBoundingClientRect(), n = r.left + t.scrollLeft - Jt(e, r), o = r.top + t.scrollTop;
  return {
    x: n,
    y: o
  };
}
function Fl(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const s = o === "fixed", i = Te(n), a = t ? Xt(t.floating) : !1;
  if (n === i || a && s)
    return r;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Re(1);
  const d = Re(0), f = Pe(n);
  if ((f || !f && !s) && ((gt(n) !== "body" || Rt(i)) && (l = Zt(n)), Pe(n))) {
    const m = qe(n);
    u = it(n), d.x = m.x + n.clientLeft, d.y = m.y + n.clientTop;
  }
  const h = i && !f && !s ? Fo(i, l) : Re(0);
  return {
    width: r.width * u.x,
    height: r.height * u.y,
    x: r.x * u.x - l.scrollLeft * u.x + d.x + h.x,
    y: r.y * u.y - l.scrollTop * u.y + d.y + h.y
  };
}
function $l(e) {
  return Array.from(e.getClientRects());
}
function Bl(e) {
  const t = Te(e), r = Zt(e), n = e.ownerDocument.body, o = fe(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = fe(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + Jt(e);
  const a = -r.scrollTop;
  return xe(n).direction === "rtl" && (i += fe(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
const Qn = 25;
function Wl(e, t) {
  const r = pe(e), n = Te(e), o = r.visualViewport;
  let s = n.clientWidth, i = n.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const d = en();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = Jt(n);
  if (u <= 0) {
    const d = n.ownerDocument, f = d.body, h = getComputedStyle(f), m = d.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, b = Math.abs(n.clientWidth - f.clientWidth - m);
    b <= Qn && (s -= b);
  } else u <= Qn && (s += u);
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
const Vl = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Hl(e, t) {
  const r = qe(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, s = Pe(e) ? it(e) : Re(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, u = n * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
function eo(e, t, r) {
  let n;
  if (t === "viewport")
    n = Wl(e, r);
  else if (t === "document")
    n = Bl(Te(e));
  else if (be(t))
    n = Hl(t, r);
  else {
    const o = Lo(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Vt(n);
}
function $o(e, t) {
  const r = ze(e);
  return r === t || !be(r) || ut(r) ? !1 : xe(r).position === "fixed" || $o(r, t);
}
function zl(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = St(e, [], !1).filter((a) => be(a) && gt(a) !== "body"), o = null;
  const s = xe(e).position === "fixed";
  let i = s ? ze(e) : e;
  for (; be(i) && !ut(i); ) {
    const a = xe(i), l = Qr(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && Vl.has(o.position) || Rt(i) && !l && $o(e, i)) ? n = n.filter((d) => d !== i) : o = a, i = ze(i);
  }
  return t.set(e, n), n;
}
function Ul(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const i = [...r === "clippingAncestors" ? Xt(t) ? [] : zl(t, this._c) : [].concat(r), n], a = i[0], l = i.reduce((u, d) => {
    const f = eo(t, d, o);
    return u.top = fe(f.top, u.top), u.right = He(f.right, u.right), u.bottom = He(f.bottom, u.bottom), u.left = fe(f.left, u.left), u;
  }, eo(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Gl(e) {
  const {
    width: t,
    height: r
  } = Do(e);
  return {
    width: t,
    height: r
  };
}
function Kl(e, t, r) {
  const n = Pe(t), o = Te(t), s = r === "fixed", i = qe(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Re(0);
  function u() {
    l.x = Jt(o);
  }
  if (n || !n && !s)
    if ((gt(t) !== "body" || Rt(o)) && (a = Zt(t)), n) {
      const m = qe(t, !0, s, t);
      l.x = m.x + t.clientLeft, l.y = m.y + t.clientTop;
    } else o && u();
  s && !n && o && u();
  const d = o && !n && !s ? Fo(o, a) : Re(0), f = i.left + a.scrollLeft - l.x - d.x, h = i.top + a.scrollTop - l.y - d.y;
  return {
    x: f,
    y: h,
    width: i.width,
    height: i.height
  };
}
function Sr(e) {
  return xe(e).position === "static";
}
function to(e, t) {
  if (!Pe(e) || xe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Te(e) === r && (r = r.ownerDocument.body), r;
}
function Bo(e, t) {
  const r = pe(e);
  if (Xt(e))
    return r;
  if (!Pe(e)) {
    let o = ze(e);
    for (; o && !ut(o); ) {
      if (be(o) && !Sr(o))
        return o;
      o = ze(o);
    }
    return r;
  }
  let n = to(e, t);
  for (; n && Al(n) && Sr(n); )
    n = to(n, t);
  return n && ut(n) && Sr(n) && !Qr(n) ? r : n || Ml(e) || r;
}
const Yl = async function(e) {
  const t = this.getOffsetParent || Bo, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: Kl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function ql(e) {
  return xe(e).direction === "rtl";
}
const Xl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Fl,
  getDocumentElement: Te,
  getClippingRect: Ul,
  getOffsetParent: Bo,
  getElementRects: Yl,
  getClientRects: $l,
  getDimensions: Gl,
  getScale: it,
  isElement: be,
  isRTL: ql
};
function Wo(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Zl(e, t) {
  let r = null, n;
  const o = Te(e);
  function s() {
    var a;
    clearTimeout(n), (a = r) == null || a.disconnect(), r = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const u = e.getBoundingClientRect(), {
      left: d,
      top: f,
      width: h,
      height: m
    } = u;
    if (a || t(), !h || !m)
      return;
    const b = _t(f), p = _t(o.clientWidth - (d + h)), y = _t(o.clientHeight - (f + m)), x = _t(d), C = {
      rootMargin: -b + "px " + -p + "px " + -y + "px " + -x + "px",
      threshold: fe(0, He(1, l)) || 1
    };
    let S = !0;
    function R(N) {
      const P = N[0].intersectionRatio;
      if (P !== l) {
        if (!S)
          return i();
        P ? i(!1, P) : n = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !Wo(u, e.getBoundingClientRect()) && i(), S = !1;
    }
    try {
      r = new IntersectionObserver(R, {
        ...C,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(R, C);
    }
    r.observe(e);
  }
  return i(!0), s;
}
function Jl(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, u = tn(e), d = o || s ? [...u ? St(u) : [], ...St(t)] : [];
  d.forEach((x) => {
    o && x.addEventListener("scroll", r, {
      passive: !0
    }), s && x.addEventListener("resize", r);
  });
  const f = u && a ? Zl(u, r) : null;
  let h = -1, m = null;
  i && (m = new ResizeObserver((x) => {
    let [w] = x;
    w && w.target === u && m && (m.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var C;
      (C = m) == null || C.observe(t);
    })), r();
  }), u && !l && m.observe(u), m.observe(t));
  let b, p = l ? qe(e) : null;
  l && y();
  function y() {
    const x = qe(e);
    p && !Wo(p, x) && r(), p = x, b = requestAnimationFrame(y);
  }
  return r(), () => {
    var x;
    d.forEach((w) => {
      o && w.removeEventListener("scroll", r), s && w.removeEventListener("resize", r);
    }), f?.(), (x = m) == null || x.disconnect(), m = null, l && cancelAnimationFrame(b);
  };
}
const Ql = Sl, eu = El, tu = xl, ru = Pl, nu = wl, ro = bl, ou = Rl, su = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: Xl,
    ...r
  }, s = {
    ...o.platform,
    _c: n
  };
  return yl(e, t, {
    ...o,
    platform: s
  });
};
var au = typeof document < "u", iu = function() {
}, Lt = au ? Hi : iu;
function Ht(e, t) {
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
        if (!Ht(e[n], t[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const s = o[n];
      if (!(s === "_owner" && e.$$typeof) && !Ht(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Vo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function no(e, t) {
  const r = Vo(e);
  return Math.round(t * r) / r;
}
function Er(e) {
  const t = c.useRef(e);
  return Lt(() => {
    t.current = e;
  }), t;
}
function cu(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: u
  } = e, [d, f] = c.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, m] = c.useState(n);
  Ht(h, n) || m(n);
  const [b, p] = c.useState(null), [y, x] = c.useState(null), w = c.useCallback((k) => {
    k !== N.current && (N.current = k, p(k));
  }, []), C = c.useCallback((k) => {
    k !== P.current && (P.current = k, x(k));
  }, []), S = s || b, R = i || y, N = c.useRef(null), P = c.useRef(null), A = c.useRef(d), V = l != null, W = Er(l), U = Er(o), _ = Er(u), $ = c.useCallback(() => {
    if (!N.current || !P.current)
      return;
    const k = {
      placement: t,
      strategy: r,
      middleware: h
    };
    U.current && (k.platform = U.current), su(N.current, P.current, k).then((K) => {
      const oe = {
        ...K,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: _.current !== !1
      };
      D.current && !Ht(A.current, oe) && (A.current = oe, Kt.flushSync(() => {
        f(oe);
      }));
    });
  }, [h, t, r, U, _]);
  Lt(() => {
    u === !1 && A.current.isPositioned && (A.current.isPositioned = !1, f((k) => ({
      ...k,
      isPositioned: !1
    })));
  }, [u]);
  const D = c.useRef(!1);
  Lt(() => (D.current = !0, () => {
    D.current = !1;
  }), []), Lt(() => {
    if (S && (N.current = S), R && (P.current = R), S && R) {
      if (W.current)
        return W.current(S, R, $);
      $();
    }
  }, [S, R, $, W, V]);
  const G = c.useMemo(() => ({
    reference: N,
    floating: P,
    setReference: w,
    setFloating: C
  }), [w, C]), M = c.useMemo(() => ({
    reference: S,
    floating: R
  }), [S, R]), H = c.useMemo(() => {
    const k = {
      position: r,
      left: 0,
      top: 0
    };
    if (!M.floating)
      return k;
    const K = no(M.floating, d.x), oe = no(M.floating, d.y);
    return a ? {
      ...k,
      transform: "translate(" + K + "px, " + oe + "px)",
      ...Vo(M.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: K,
      top: oe
    };
  }, [r, a, M.floating, d.x, d.y]);
  return c.useMemo(() => ({
    ...d,
    update: $,
    refs: G,
    elements: M,
    floatingStyles: H
  }), [d, $, G, M, H]);
}
const lu = (e) => {
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
      return n && t(n) ? n.current != null ? ro({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? ro({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, uu = (e, t) => ({
  ...Ql(e),
  options: [e, t]
}), du = (e, t) => ({
  ...eu(e),
  options: [e, t]
}), fu = (e, t) => ({
  ...ou(e),
  options: [e, t]
}), pu = (e, t) => ({
  ...tu(e),
  options: [e, t]
}), mu = (e, t) => ({
  ...ru(e),
  options: [e, t]
}), gu = (e, t) => ({
  ...nu(e),
  options: [e, t]
}), hu = (e, t) => ({
  ...lu(e),
  options: [e, t]
});
var vu = "Arrow", Ho = c.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ g.jsx(
    L.svg,
    {
      ...s,
      ref: t,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ g.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Ho.displayName = vu;
var yu = Ho;
function Qt(e) {
  const [t, r] = c.useState(void 0);
  return ce(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let i, a;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          i = u.inlineSize, a = u.blockSize;
        } else
          i = e.offsetWidth, a = e.offsetHeight;
        r({ width: i, height: a });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
var rn = "Popper", [zo, er] = ge(rn), [bu, Uo] = zo(rn), Go = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = c.useState(null);
  return /* @__PURE__ */ g.jsx(bu, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
Go.displayName = rn;
var Ko = "PopperAnchor", Yo = c.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, s = Uo(Ko, r), i = c.useRef(null), a = q(t, i), l = c.useRef(null);
    return c.useEffect(() => {
      const u = l.current;
      l.current = n?.current || i.current, u !== l.current && s.onAnchorChange(l.current);
    }), n ? null : /* @__PURE__ */ g.jsx(L.div, { ...o, ref: a });
  }
);
Yo.displayName = Ko;
var nn = "PopperContent", [xu, wu] = zo(nn), qo = c.forwardRef(
  (e, t) => {
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: d = 0,
      sticky: f = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: b,
      ...p
    } = e, y = Uo(nn, r), [x, w] = c.useState(null), C = q(t, (I) => w(I)), [S, R] = c.useState(null), N = Qt(S), P = N?.width ?? 0, A = N?.height ?? 0, V = n + (s !== "center" ? "-" + s : ""), W = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, U = Array.isArray(u) ? u : [u], _ = U.length > 0, $ = {
      padding: W,
      boundary: U.filter(Su),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: _
    }, { refs: D, floatingStyles: G, placement: M, isPositioned: H, middlewareData: k } = cu({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: V,
      whileElementsMounted: (...I) => Jl(...I, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        uu({ mainAxis: o + A, alignmentAxis: i }),
        l && du({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? fu() : void 0,
          ...$
        }),
        l && pu({ ...$ }),
        mu({
          ...$,
          apply: ({ elements: I, rects: J, availableWidth: ie, availableHeight: X }) => {
            const { width: ee, height: re } = J.reference, ue = I.floating.style;
            ue.setProperty("--radix-popper-available-width", `${ie}px`), ue.setProperty("--radix-popper-available-height", `${X}px`), ue.setProperty("--radix-popper-anchor-width", `${ee}px`), ue.setProperty("--radix-popper-anchor-height", `${re}px`);
          }
        }),
        S && hu({ element: S, padding: a }),
        Eu({ arrowWidth: P, arrowHeight: A }),
        h && gu({ strategy: "referenceHidden", ...$ })
      ]
    }), [K, oe] = Jo(M), se = Oe(b);
    ce(() => {
      H && se?.();
    }, [H, se]);
    const Me = k.arrow?.x, je = k.arrow?.y, Ce = k.arrow?.centerOffset !== 0, [De, he] = c.useState();
    return ce(() => {
      x && he(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ g.jsx(
      "div",
      {
        ref: D.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...G,
          transform: H ? G.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: De,
          "--radix-popper-transform-origin": [
            k.transformOrigin?.x,
            k.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...k.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ g.jsx(
          xu,
          {
            scope: r,
            placedSide: K,
            onArrowChange: R,
            arrowX: Me,
            arrowY: je,
            shouldHideArrow: Ce,
            children: /* @__PURE__ */ g.jsx(
              L.div,
              {
                "data-side": K,
                "data-align": oe,
                ...p,
                ref: C,
                style: {
                  ...p.style,
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
qo.displayName = nn;
var Xo = "PopperArrow", Cu = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Zo = c.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, s = wu(Xo, n), i = Cu[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ g.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ g.jsx(
          yu,
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
Zo.displayName = Xo;
function Su(e) {
  return e !== null;
}
var Eu = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: r, rects: n, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, d] = Jo(r), f = { start: "0%", center: "50%", end: "100%" }[d], h = (o.arrow?.x ?? 0) + a / 2, m = (o.arrow?.y ?? 0) + l / 2;
    let b = "", p = "";
    return u === "bottom" ? (b = i ? f : `${h}px`, p = `${-l}px`) : u === "top" ? (b = i ? f : `${h}px`, p = `${n.floating.height + l}px`) : u === "right" ? (b = `${-l}px`, p = i ? f : `${m}px`) : u === "left" && (b = `${n.floating.width + l}px`, p = i ? f : `${m}px`), { data: { x: b, y: p } };
  }
});
function Jo(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var Qo = Go, es = Yo, ts = qo, rs = Zo, Ru = "Portal", on = c.forwardRef((e, t) => {
  const { container: r, ...n } = e, [o, s] = c.useState(!1);
  ce(() => s(!0), []);
  const i = r || o && globalThis?.document?.body;
  return i ? Ui.createPortal(/* @__PURE__ */ g.jsx(L.div, { ...n, ref: t }), i) : null;
});
on.displayName = Ru;
var Pu = c[" useInsertionEffect ".trim().toString()] || ce;
function Ue({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, s, i] = Tu({
    defaultProp: t,
    onChange: r
  }), a = e !== void 0, l = a ? e : o;
  {
    const d = c.useRef(e !== void 0);
    c.useEffect(() => {
      const f = d.current;
      f !== a && console.warn(
        `${n} is changing from ${f ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = a;
    }, [a, n]);
  }
  const u = c.useCallback(
    (d) => {
      if (a) {
        const f = Nu(d) ? d(e) : d;
        f !== e && i.current?.(f);
      } else
        s(d);
    },
    [a, e, s, i]
  );
  return [l, u];
}
function Tu({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = c.useState(e), o = c.useRef(r), s = c.useRef(t);
  return Pu(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== r && (s.current?.(r), o.current = r);
  }, [r, o]), [r, n, s];
}
function Nu(e) {
  return typeof e == "function";
}
function tr(e) {
  const t = c.useRef({ value: e, previous: e });
  return c.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var ns = Object.freeze({
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
}), Au = "VisuallyHidden", os = c.forwardRef(
  (e, t) => /* @__PURE__ */ g.jsx(
    L.span,
    {
      ...e,
      ref: t,
      style: { ...ns, ...e.style }
    }
  )
);
os.displayName = Au;
var _u = os, Ou = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, nt = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), kt = {}, Rr = 0, ss = function(e) {
  return e && (e.host || ss(e.parentNode));
}, ku = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = ss(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, Iu = function(e, t, r, n) {
  var o = ku(t, Array.isArray(e) ? e : [e]);
  kt[r] || (kt[r] = /* @__PURE__ */ new WeakMap());
  var s = kt[r], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), u = function(f) {
    !f || a.has(f) || (a.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var d = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(h) {
      if (a.has(h))
        d(h);
      else
        try {
          var m = h.getAttribute(n), b = m !== null && m !== "false", p = (nt.get(h) || 0) + 1, y = (s.get(h) || 0) + 1;
          nt.set(h, p), s.set(h, y), i.push(h), p === 1 && b && Ot.set(h, !0), y === 1 && h.setAttribute(r, "true"), b || h.setAttribute(n, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", h, x);
        }
    });
  };
  return d(t), a.clear(), Rr++, function() {
    i.forEach(function(f) {
      var h = nt.get(f) - 1, m = s.get(f) - 1;
      nt.set(f, h), s.set(f, m), h || (Ot.has(f) || f.removeAttribute(n), Ot.delete(f)), m || f.removeAttribute(r);
    }), Rr--, Rr || (nt = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), kt = {});
  };
}, as = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = Ou(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), Iu(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, Se = function() {
  return Se = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, Se.apply(this, arguments);
};
function is(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function Mu(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, s; n < o; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Ft = "right-scroll-bar-position", $t = "width-before-scroll-bar", ju = "with-scroll-bars-hidden", Du = "--removed-body-scroll-bar-size";
function Pr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Lu(e, t) {
  var r = zi(function() {
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
var Fu = typeof window < "u" ? c.useLayoutEffect : c.useEffect, oo = /* @__PURE__ */ new WeakMap();
function $u(e, t) {
  var r = Lu(null, function(n) {
    return e.forEach(function(o) {
      return Pr(o, n);
    });
  });
  return Fu(function() {
    var n = oo.get(r);
    if (n) {
      var o = new Set(n), s = new Set(e), i = r.current;
      o.forEach(function(a) {
        s.has(a) || Pr(a, null);
      }), s.forEach(function(a) {
        o.has(a) || Pr(a, i);
      });
    }
    oo.set(r, e);
  }, [e]), r;
}
function Bu(e) {
  return e;
}
function Wu(e, t) {
  t === void 0 && (t = Bu);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(s) {
      var i = t(s, n);
      return r.push(i), function() {
        r = r.filter(function(a) {
          return a !== i;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (n = !0; r.length; ) {
        var i = r;
        r = [], i.forEach(s);
      }
      r = {
        push: function(a) {
          return s(a);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(s) {
      n = !0;
      var i = [];
      if (r.length) {
        var a = r;
        r = [], a.forEach(s), i = r;
      }
      var l = function() {
        var d = i;
        i = [], d.forEach(s);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), r = {
        push: function(d) {
          i.push(d), u();
        },
        filter: function(d) {
          return i = i.filter(d), r;
        }
      };
    }
  };
  return o;
}
function Vu(e) {
  e === void 0 && (e = {});
  var t = Wu(null);
  return t.options = Se({ async: !0, ssr: !1 }, e), t;
}
var cs = function(e) {
  var t = e.sideCar, r = is(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return c.createElement(n, Se({}, r));
};
cs.isSideCarExport = !0;
function Hu(e, t) {
  return e.useMedium(t), cs;
}
var ls = Vu(), Tr = function() {
}, rr = c.forwardRef(function(e, t) {
  var r = c.useRef(null), n = c.useState({
    onScrollCapture: Tr,
    onWheelCapture: Tr,
    onTouchMoveCapture: Tr
  }), o = n[0], s = n[1], i = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, h = e.sideCar, m = e.noRelative, b = e.noIsolation, p = e.inert, y = e.allowPinchZoom, x = e.as, w = x === void 0 ? "div" : x, C = e.gapMode, S = is(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = h, N = $u([r, t]), P = Se(Se({}, S), o);
  return c.createElement(
    c.Fragment,
    null,
    d && c.createElement(R, { sideCar: ls, removeScrollBar: u, shards: f, noRelative: m, noIsolation: b, inert: p, setCallbacks: s, allowPinchZoom: !!y, lockRef: r, gapMode: C }),
    i ? c.cloneElement(c.Children.only(a), Se(Se({}, P), { ref: N })) : c.createElement(w, Se({}, P, { className: l, ref: N }), a)
  );
});
rr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
rr.classNames = {
  fullWidth: $t,
  zeroRight: Ft
};
var zu = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Uu() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = zu();
  return t && e.setAttribute("nonce", t), e;
}
function Gu(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ku(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Yu = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = Uu()) && (Gu(t, r), Ku(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, qu = function() {
  var e = Yu();
  return function(t, r) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, us = function() {
  var e = qu(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, Xu = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Nr = function(e) {
  return parseInt(e || "", 10) || 0;
}, Zu = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Nr(r), Nr(n), Nr(o)];
}, Ju = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Xu;
  var t = Zu(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, Qu = us(), ct = "data-scroll-locked", ed = function(e, t, r, n) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(ju, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(a, "px ").concat(n, `;
  }
  body[`).concat(ct, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(a, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ft, ` {
    right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat($t, ` {
    margin-right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat(Ft, " .").concat(Ft, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat($t, " .").concat($t, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(ct, `] {
    `).concat(Du, ": ").concat(a, `px;
  }
`);
}, so = function() {
  var e = parseInt(document.body.getAttribute(ct) || "0", 10);
  return isFinite(e) ? e : 0;
}, td = function() {
  c.useEffect(function() {
    return document.body.setAttribute(ct, (so() + 1).toString()), function() {
      var e = so() - 1;
      e <= 0 ? document.body.removeAttribute(ct) : document.body.setAttribute(ct, e.toString());
    };
  }, []);
}, rd = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  td();
  var s = c.useMemo(function() {
    return Ju(o);
  }, [o]);
  return c.createElement(Qu, { styles: ed(s, !t, o, r ? "" : "!important") });
}, Fr = !1;
if (typeof window < "u")
  try {
    var It = Object.defineProperty({}, "passive", {
      get: function() {
        return Fr = !0, !0;
      }
    });
    window.addEventListener("test", It, It), window.removeEventListener("test", It, It);
  } catch {
    Fr = !1;
  }
var ot = Fr ? { passive: !1 } : !1, nd = function(e) {
  return e.tagName === "TEXTAREA";
}, ds = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !nd(e) && r[t] === "visible")
  );
}, od = function(e) {
  return ds(e, "overflowY");
}, sd = function(e) {
  return ds(e, "overflowX");
}, ao = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = fs(e, n);
    if (o) {
      var s = ps(e, n), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, ad = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, id = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, fs = function(e, t) {
  return e === "v" ? od(t) : sd(t);
}, ps = function(e, t) {
  return e === "v" ? ad(t) : id(t);
}, cd = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ld = function(e, t, r, n, o) {
  var s = cd(e, window.getComputedStyle(t).direction), i = s * n, a = r.target, l = t.contains(a), u = !1, d = i > 0, f = 0, h = 0;
  do {
    if (!a)
      break;
    var m = ps(e, a), b = m[0], p = m[1], y = m[2], x = p - y - s * b;
    (b || x) && fs(e, a) && (f += x, h += b);
    var w = a.parentNode;
    a = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(h) < 1) && (u = !0), u;
}, Mt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, io = function(e) {
  return [e.deltaX, e.deltaY];
}, co = function(e) {
  return e && "current" in e ? e.current : e;
}, ud = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, dd = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, fd = 0, st = [];
function pd(e) {
  var t = c.useRef([]), r = c.useRef([0, 0]), n = c.useRef(), o = c.useState(fd++)[0], s = c.useState(us)[0], i = c.useRef(e);
  c.useEffect(function() {
    i.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var p = Mu([e.lockRef.current], (e.shards || []).map(co), !0).filter(Boolean);
      return p.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), p.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = c.useCallback(function(p, y) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !i.current.allowPinchZoom;
    var x = Mt(p), w = r.current, C = "deltaX" in p ? p.deltaX : w[0] - x[0], S = "deltaY" in p ? p.deltaY : w[1] - x[1], R, N = p.target, P = Math.abs(C) > Math.abs(S) ? "h" : "v";
    if ("touches" in p && P === "h" && N.type === "range")
      return !1;
    var A = ao(P, N);
    if (!A)
      return !0;
    if (A ? R = P : (R = P === "v" ? "h" : "v", A = ao(P, N)), !A)
      return !1;
    if (!n.current && "changedTouches" in p && (C || S) && (n.current = R), !R)
      return !0;
    var V = n.current || R;
    return ld(V, y, p, V === "h" ? C : S);
  }, []), l = c.useCallback(function(p) {
    var y = p;
    if (!(!st.length || st[st.length - 1] !== s)) {
      var x = "deltaY" in y ? io(y) : Mt(y), w = t.current.filter(function(R) {
        return R.name === y.type && (R.target === y.target || y.target === R.shadowParent) && ud(R.delta, x);
      })[0];
      if (w && w.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!w) {
        var C = (i.current.shards || []).map(co).filter(Boolean).filter(function(R) {
          return R.contains(y.target);
        }), S = C.length > 0 ? a(y, C[0]) : !i.current.noIsolation;
        S && y.cancelable && y.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(p, y, x, w) {
    var C = { name: p, delta: y, target: x, should: w, shadowParent: md(x) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== C;
      });
    }, 1);
  }, []), d = c.useCallback(function(p) {
    r.current = Mt(p), n.current = void 0;
  }, []), f = c.useCallback(function(p) {
    u(p.type, io(p), p.target, a(p, e.lockRef.current));
  }, []), h = c.useCallback(function(p) {
    u(p.type, Mt(p), p.target, a(p, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return st.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", l, ot), document.addEventListener("touchmove", l, ot), document.addEventListener("touchstart", d, ot), function() {
      st = st.filter(function(p) {
        return p !== s;
      }), document.removeEventListener("wheel", l, ot), document.removeEventListener("touchmove", l, ot), document.removeEventListener("touchstart", d, ot);
    };
  }, []);
  var m = e.removeScrollBar, b = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    b ? c.createElement(s, { styles: dd(o) }) : null,
    m ? c.createElement(rd, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function md(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const gd = Hu(ls, pd);
var sn = c.forwardRef(function(e, t) {
  return c.createElement(rr, Se({}, e, { ref: t, sideCar: gd }));
});
sn.classNames = rr.classNames;
var hd = [" ", "Enter", "ArrowUp", "ArrowDown"], vd = [" ", "Enter"], Xe = "Select", [nr, or, yd] = To(Xe), [ht] = ge(Xe, [
  yd,
  er
]), sr = er(), [bd, Ge] = ht(Xe), [xd, wd] = ht(Xe), ms = (e) => {
  const {
    __scopeSelect: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: s,
    value: i,
    defaultValue: a,
    onValueChange: l,
    dir: u,
    name: d,
    autoComplete: f,
    disabled: h,
    required: m,
    form: b
  } = e, p = sr(t), [y, x] = c.useState(null), [w, C] = c.useState(null), [S, R] = c.useState(!1), N = Yr(u), [P, A] = Ue({
    prop: n,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Xe
  }), [V, W] = Ue({
    prop: i,
    defaultProp: a,
    onChange: l,
    caller: Xe
  }), U = c.useRef(null), _ = y ? b || !!y.closest("form") : !0, [$, D] = c.useState(/* @__PURE__ */ new Set()), G = Array.from($).map((M) => M.props.value).join(";");
  return /* @__PURE__ */ g.jsx(Qo, { ...p, children: /* @__PURE__ */ g.jsxs(
    bd,
    {
      required: m,
      scope: t,
      trigger: y,
      onTriggerChange: x,
      valueNode: w,
      onValueNodeChange: C,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: R,
      contentId: We(),
      value: V,
      onValueChange: W,
      open: P,
      onOpenChange: A,
      dir: N,
      triggerPointerDownPosRef: U,
      disabled: h,
      children: [
        /* @__PURE__ */ g.jsx(nr.Provider, { scope: t, children: /* @__PURE__ */ g.jsx(
          xd,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: c.useCallback((M) => {
              D((H) => new Set(H).add(M));
            }, []),
            onNativeOptionRemove: c.useCallback((M) => {
              D((H) => {
                const k = new Set(H);
                return k.delete(M), k;
              });
            }, []),
            children: r
          }
        ) }),
        _ ? /* @__PURE__ */ g.jsxs(
          Ls,
          {
            "aria-hidden": !0,
            required: m,
            tabIndex: -1,
            name: d,
            autoComplete: f,
            value: V,
            onChange: (M) => W(M.target.value),
            disabled: h,
            form: b,
            children: [
              V === void 0 ? /* @__PURE__ */ g.jsx("option", { value: "" }) : null,
              Array.from($)
            ]
          },
          G
        ) : null
      ]
    }
  ) });
};
ms.displayName = Xe;
var gs = "SelectTrigger", hs = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e, s = sr(r), i = Ge(gs, r), a = i.disabled || n, l = q(t, i.onTriggerChange), u = or(r), d = c.useRef("touch"), [f, h, m] = $s((p) => {
      const y = u().filter((C) => !C.disabled), x = y.find((C) => C.value === i.value), w = Bs(y, p, x);
      w !== void 0 && i.onValueChange(w.value);
    }), b = (p) => {
      a || (i.onOpenChange(!0), m()), p && (i.triggerPointerDownPosRef.current = {
        x: Math.round(p.pageX),
        y: Math.round(p.pageY)
      });
    };
    return /* @__PURE__ */ g.jsx(es, { asChild: !0, ...s, children: /* @__PURE__ */ g.jsx(
      L.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": Fs(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: F(o.onClick, (p) => {
          p.currentTarget.focus(), d.current !== "mouse" && b(p);
        }),
        onPointerDown: F(o.onPointerDown, (p) => {
          d.current = p.pointerType;
          const y = p.target;
          y.hasPointerCapture(p.pointerId) && y.releasePointerCapture(p.pointerId), p.button === 0 && p.ctrlKey === !1 && p.pointerType === "mouse" && (b(p), p.preventDefault());
        }),
        onKeyDown: F(o.onKeyDown, (p) => {
          const y = f.current !== "";
          !(p.ctrlKey || p.altKey || p.metaKey) && p.key.length === 1 && h(p.key), !(y && p.key === " ") && hd.includes(p.key) && (b(), p.preventDefault());
        })
      }
    ) });
  }
);
hs.displayName = gs;
var vs = "SelectValue", Cd = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, children: s, placeholder: i = "", ...a } = e, l = Ge(vs, r), { onValueNodeHasChildrenChange: u } = l, d = s !== void 0, f = q(t, l.onValueNodeChange);
    return ce(() => {
      u(d);
    }, [u, d]), /* @__PURE__ */ g.jsx(
      L.span,
      {
        ...a,
        ref: f,
        style: { pointerEvents: "none" },
        children: Fs(l.value) ? /* @__PURE__ */ g.jsx(g.Fragment, { children: i }) : s
      }
    );
  }
);
Cd.displayName = vs;
var Sd = "SelectIcon", ys = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return /* @__PURE__ */ g.jsx(L.span, { "aria-hidden": !0, ...o, ref: t, children: n || "▼" });
  }
);
ys.displayName = Sd;
var Ed = "SelectPortal", bs = (e) => /* @__PURE__ */ g.jsx(on, { asChild: !0, ...e });
bs.displayName = Ed;
var Ze = "SelectContent", xs = c.forwardRef(
  (e, t) => {
    const r = Ge(Ze, e.__scopeSelect), [n, o] = c.useState();
    if (ce(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const s = n;
      return s ? Kt.createPortal(
        /* @__PURE__ */ g.jsx(ws, { scope: e.__scopeSelect, children: /* @__PURE__ */ g.jsx(nr.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ g.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ g.jsx(Cs, { ...e, ref: t });
  }
);
xs.displayName = Ze;
var ve = 10, [ws, Ke] = ht(Ze), Rd = "SelectContentImpl", Pd = /* @__PURE__ */ lt("SelectContent.RemoveScroll"), Cs = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      position: n = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: a,
      sideOffset: l,
      align: u,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: m,
      sticky: b,
      hideWhenDetached: p,
      avoidCollisions: y,
      //
      ...x
    } = e, w = Ge(Ze, r), [C, S] = c.useState(null), [R, N] = c.useState(null), P = q(t, (I) => S(I)), [A, V] = c.useState(null), [W, U] = c.useState(
      null
    ), _ = or(r), [$, D] = c.useState(!1), G = c.useRef(!1);
    c.useEffect(() => {
      if (C) return as(C);
    }, [C]), _o();
    const M = c.useCallback(
      (I) => {
        const [J, ...ie] = _().map((re) => re.ref.current), [X] = ie.slice(-1), ee = document.activeElement;
        for (const re of I)
          if (re === ee || (re?.scrollIntoView({ block: "nearest" }), re === J && R && (R.scrollTop = 0), re === X && R && (R.scrollTop = R.scrollHeight), re?.focus(), document.activeElement !== ee)) return;
      },
      [_, R]
    ), H = c.useCallback(
      () => M([A, C]),
      [M, A, C]
    );
    c.useEffect(() => {
      $ && H();
    }, [$, H]);
    const { onOpenChange: k, triggerPointerDownPosRef: K } = w;
    c.useEffect(() => {
      if (C) {
        let I = { x: 0, y: 0 };
        const J = (X) => {
          I = {
            x: Math.abs(Math.round(X.pageX) - (K.current?.x ?? 0)),
            y: Math.abs(Math.round(X.pageY) - (K.current?.y ?? 0))
          };
        }, ie = (X) => {
          I.x <= 10 && I.y <= 10 ? X.preventDefault() : C.contains(X.target) || k(!1), document.removeEventListener("pointermove", J), K.current = null;
        };
        return K.current !== null && (document.addEventListener("pointermove", J), document.addEventListener("pointerup", ie, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", J), document.removeEventListener("pointerup", ie, { capture: !0 });
        };
      }
    }, [C, k, K]), c.useEffect(() => {
      const I = () => k(!1);
      return window.addEventListener("blur", I), window.addEventListener("resize", I), () => {
        window.removeEventListener("blur", I), window.removeEventListener("resize", I);
      };
    }, [k]);
    const [oe, se] = $s((I) => {
      const J = _().filter((ee) => !ee.disabled), ie = J.find((ee) => ee.ref.current === document.activeElement), X = Bs(J, I, ie);
      X && setTimeout(() => X.ref.current.focus());
    }), Me = c.useCallback(
      (I, J, ie) => {
        const X = !G.current && !ie;
        (w.value !== void 0 && w.value === J || X) && (V(I), X && (G.current = !0));
      },
      [w.value]
    ), je = c.useCallback(() => C?.focus(), [C]), Ce = c.useCallback(
      (I, J, ie) => {
        const X = !G.current && !ie;
        (w.value !== void 0 && w.value === J || X) && U(I);
      },
      [w.value]
    ), De = n === "popper" ? $r : Ss, he = De === $r ? {
      side: a,
      sideOffset: l,
      align: u,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: m,
      sticky: b,
      hideWhenDetached: p,
      avoidCollisions: y
    } : {};
    return /* @__PURE__ */ g.jsx(
      ws,
      {
        scope: r,
        content: C,
        viewport: R,
        onViewportChange: N,
        itemRefCallback: Me,
        selectedItem: A,
        onItemLeave: je,
        itemTextRefCallback: Ce,
        focusSelectedItem: H,
        selectedItemText: W,
        position: n,
        isPositioned: $,
        searchRef: oe,
        children: /* @__PURE__ */ g.jsx(sn, { as: Pd, allowPinchZoom: !0, children: /* @__PURE__ */ g.jsx(
          qr,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (I) => {
              I.preventDefault();
            },
            onUnmountAutoFocus: F(o, (I) => {
              w.trigger?.focus({ preventScroll: !0 }), I.preventDefault();
            }),
            children: /* @__PURE__ */ g.jsx(
              Yt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (I) => I.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ g.jsx(
                  De,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (I) => I.preventDefault(),
                    ...x,
                    ...he,
                    onPlaced: () => D(!0),
                    ref: P,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...x.style
                    },
                    onKeyDown: F(x.onKeyDown, (I) => {
                      const J = I.ctrlKey || I.altKey || I.metaKey;
                      if (I.key === "Tab" && I.preventDefault(), !J && I.key.length === 1 && se(I.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(I.key)) {
                        let X = _().filter((ee) => !ee.disabled).map((ee) => ee.ref.current);
                        if (["ArrowUp", "End"].includes(I.key) && (X = X.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(I.key)) {
                          const ee = I.target, re = X.indexOf(ee);
                          X = X.slice(re + 1);
                        }
                        setTimeout(() => M(X)), I.preventDefault();
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
Cs.displayName = Rd;
var Td = "SelectItemAlignedPosition", Ss = c.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = e, s = Ge(Ze, r), i = Ke(Ze, r), [a, l] = c.useState(null), [u, d] = c.useState(null), f = q(t, (P) => d(P)), h = or(r), m = c.useRef(!1), b = c.useRef(!0), { viewport: p, selectedItem: y, selectedItemText: x, focusSelectedItem: w } = i, C = c.useCallback(() => {
    if (s.trigger && s.valueNode && a && u && p && y && x) {
      const P = s.trigger.getBoundingClientRect(), A = u.getBoundingClientRect(), V = s.valueNode.getBoundingClientRect(), W = x.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const ee = W.left - A.left, re = V.left - ee, ue = P.left - re, Ne = P.width + ue, Le = Math.max(Ne, A.width), Ae = window.innerWidth - ve, et = $n(re, [
          ve,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(ve, Ae - Le)
        ]);
        a.style.minWidth = Ne + "px", a.style.left = et + "px";
      } else {
        const ee = A.right - W.right, re = window.innerWidth - V.right - ee, ue = window.innerWidth - P.right - re, Ne = P.width + ue, Le = Math.max(Ne, A.width), Ae = window.innerWidth - ve, et = $n(re, [
          ve,
          Math.max(ve, Ae - Le)
        ]);
        a.style.minWidth = Ne + "px", a.style.right = et + "px";
      }
      const U = h(), _ = window.innerHeight - ve * 2, $ = p.scrollHeight, D = window.getComputedStyle(u), G = parseInt(D.borderTopWidth, 10), M = parseInt(D.paddingTop, 10), H = parseInt(D.borderBottomWidth, 10), k = parseInt(D.paddingBottom, 10), K = G + M + $ + k + H, oe = Math.min(y.offsetHeight * 5, K), se = window.getComputedStyle(p), Me = parseInt(se.paddingTop, 10), je = parseInt(se.paddingBottom, 10), Ce = P.top + P.height / 2 - ve, De = _ - Ce, he = y.offsetHeight / 2, I = y.offsetTop + he, J = G + M + I, ie = K - J;
      if (J <= Ce) {
        const ee = U.length > 0 && y === U[U.length - 1].ref.current;
        a.style.bottom = "0px";
        const re = u.clientHeight - p.offsetTop - p.offsetHeight, ue = Math.max(
          De,
          he + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ee ? je : 0) + re + H
        ), Ne = J + ue;
        a.style.height = Ne + "px";
      } else {
        const ee = U.length > 0 && y === U[0].ref.current;
        a.style.top = "0px";
        const ue = Math.max(
          Ce,
          G + p.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ee ? Me : 0) + he
        ) + ie;
        a.style.height = ue + "px", p.scrollTop = J - Ce + p.offsetTop;
      }
      a.style.margin = `${ve}px 0`, a.style.minHeight = oe + "px", a.style.maxHeight = _ + "px", n?.(), requestAnimationFrame(() => m.current = !0);
    }
  }, [
    h,
    s.trigger,
    s.valueNode,
    a,
    u,
    p,
    y,
    x,
    s.dir,
    n
  ]);
  ce(() => C(), [C]);
  const [S, R] = c.useState();
  ce(() => {
    u && R(window.getComputedStyle(u).zIndex);
  }, [u]);
  const N = c.useCallback(
    (P) => {
      P && b.current === !0 && (C(), w?.(), b.current = !1);
    },
    [C, w]
  );
  return /* @__PURE__ */ g.jsx(
    Ad,
    {
      scope: r,
      contentWrapper: a,
      shouldExpandOnScrollRef: m,
      onScrollButtonChange: N,
      children: /* @__PURE__ */ g.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ g.jsx(
            L.div,
            {
              ...o,
              ref: f,
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
Ss.displayName = Td;
var Nd = "SelectPopperPosition", $r = c.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = ve,
    ...s
  } = e, i = sr(r);
  return /* @__PURE__ */ g.jsx(
    ts,
    {
      ...i,
      ...s,
      ref: t,
      align: n,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
$r.displayName = Nd;
var [Ad, an] = ht(Ze, {}), Br = "SelectViewport", Es = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e, s = Ke(Br, r), i = an(Br, r), a = q(t, s.onViewportChange), l = c.useRef(0);
    return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
      /* @__PURE__ */ g.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: n
        }
      ),
      /* @__PURE__ */ g.jsx(nr.Slot, { scope: r, children: /* @__PURE__ */ g.jsx(
        L.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: a,
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
          onScroll: F(o.onScroll, (u) => {
            const d = u.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: h } = i;
            if (h?.current && f) {
              const m = Math.abs(l.current - d.scrollTop);
              if (m > 0) {
                const b = window.innerHeight - ve * 2, p = parseFloat(f.style.minHeight), y = parseFloat(f.style.height), x = Math.max(p, y);
                if (x < b) {
                  const w = x + m, C = Math.min(b, w), S = w - C;
                  f.style.height = C + "px", f.style.bottom === "0px" && (d.scrollTop = S > 0 ? S : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = d.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Es.displayName = Br;
var Rs = "SelectGroup", [_d, Od] = ht(Rs), kd = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = We();
    return /* @__PURE__ */ g.jsx(_d, { scope: r, id: o, children: /* @__PURE__ */ g.jsx(L.div, { role: "group", "aria-labelledby": o, ...n, ref: t }) });
  }
);
kd.displayName = Rs;
var Ps = "SelectLabel", Ts = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = Od(Ps, r);
    return /* @__PURE__ */ g.jsx(L.div, { id: o.id, ...n, ref: t });
  }
);
Ts.displayName = Ps;
var zt = "SelectItem", [Id, Ns] = ht(zt), As = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = Ge(zt, r), l = Ke(zt, r), u = a.value === n, [d, f] = c.useState(s ?? ""), [h, m] = c.useState(!1), b = q(
      t,
      (w) => l.itemRefCallback?.(w, n, o)
    ), p = We(), y = c.useRef("touch"), x = () => {
      o || (a.onValueChange(n), a.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ g.jsx(
      Id,
      {
        scope: r,
        value: n,
        disabled: o,
        textId: p,
        isSelected: u,
        onItemTextChange: c.useCallback((w) => {
          f((C) => C || (w?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ g.jsx(
          nr.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ g.jsx(
              L.div,
              {
                role: "option",
                "aria-labelledby": p,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": u && h,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: b,
                onFocus: F(i.onFocus, () => m(!0)),
                onBlur: F(i.onBlur, () => m(!1)),
                onClick: F(i.onClick, () => {
                  y.current !== "mouse" && x();
                }),
                onPointerUp: F(i.onPointerUp, () => {
                  y.current === "mouse" && x();
                }),
                onPointerDown: F(i.onPointerDown, (w) => {
                  y.current = w.pointerType;
                }),
                onPointerMove: F(i.onPointerMove, (w) => {
                  y.current = w.pointerType, o ? l.onItemLeave?.() : y.current === "mouse" && w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: F(i.onPointerLeave, (w) => {
                  w.currentTarget === document.activeElement && l.onItemLeave?.();
                }),
                onKeyDown: F(i.onKeyDown, (w) => {
                  l.searchRef?.current !== "" && w.key === " " || (vd.includes(w.key) && x(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
As.displayName = zt;
var wt = "SelectItemText", _s = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...s } = e, i = Ge(wt, r), a = Ke(wt, r), l = Ns(wt, r), u = wd(wt, r), [d, f] = c.useState(null), h = q(
      t,
      (x) => f(x),
      l.onItemTextChange,
      (x) => a.itemTextRefCallback?.(x, l.value, l.disabled)
    ), m = d?.textContent, b = c.useMemo(
      () => /* @__PURE__ */ g.jsx("option", { value: l.value, disabled: l.disabled, children: m }, l.value),
      [l.disabled, l.value, m]
    ), { onNativeOptionAdd: p, onNativeOptionRemove: y } = u;
    return ce(() => (p(b), () => y(b)), [p, y, b]), /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
      /* @__PURE__ */ g.jsx(L.span, { id: l.textId, ...s, ref: h }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? Kt.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
_s.displayName = wt;
var Os = "SelectItemIndicator", ks = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return Ns(Os, r).isSelected ? /* @__PURE__ */ g.jsx(L.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
ks.displayName = Os;
var Wr = "SelectScrollUpButton", Is = c.forwardRef((e, t) => {
  const r = Ke(Wr, e.__scopeSelect), n = an(Wr, e.__scopeSelect), [o, s] = c.useState(!1), i = q(t, n.onScrollButtonChange);
  return ce(() => {
    if (r.viewport && r.isPositioned) {
      let a = function() {
        const u = l.scrollTop > 0;
        s(u);
      };
      const l = r.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ g.jsx(
    js,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = r;
        a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
Is.displayName = Wr;
var Vr = "SelectScrollDownButton", Ms = c.forwardRef((e, t) => {
  const r = Ke(Vr, e.__scopeSelect), n = an(Vr, e.__scopeSelect), [o, s] = c.useState(!1), i = q(t, n.onScrollButtonChange);
  return ce(() => {
    if (r.viewport && r.isPositioned) {
      let a = function() {
        const u = l.scrollHeight - l.clientHeight, d = Math.ceil(l.scrollTop) < u;
        s(d);
      };
      const l = r.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ g.jsx(
    js,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = r;
        a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
Ms.displayName = Vr;
var js = c.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = e, s = Ke("SelectScrollButton", r), i = c.useRef(null), a = or(r), l = c.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return c.useEffect(() => () => l(), [l]), ce(() => {
    a().find((d) => d.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ g.jsx(
    L.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: F(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerMove: F(o.onPointerMove, () => {
        s.onItemLeave?.(), i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerLeave: F(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), Md = "SelectSeparator", Ds = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ g.jsx(L.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
Ds.displayName = Md;
var Hr = "SelectArrow", jd = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = sr(r), s = Ge(Hr, r), i = Ke(Hr, r);
    return s.open && i.position === "popper" ? /* @__PURE__ */ g.jsx(rs, { ...o, ...n, ref: t }) : null;
  }
);
jd.displayName = Hr;
var Dd = "SelectBubbleInput", Ls = c.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, n) => {
    const o = c.useRef(null), s = q(n, o), i = tr(t);
    return c.useEffect(() => {
      const a = o.current;
      if (!a) return;
      const l = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== t && d) {
        const f = new Event("change", { bubbles: !0 });
        d.call(a, t), a.dispatchEvent(f);
      }
    }, [i, t]), /* @__PURE__ */ g.jsx(
      L.select,
      {
        ...r,
        style: { ...ns, ...r.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
Ls.displayName = Dd;
function Fs(e) {
  return e === "" || e === void 0;
}
function $s(e) {
  const t = Oe(e), r = c.useRef(""), n = c.useRef(0), o = c.useCallback(
    (i) => {
      const a = r.current + i;
      t(a), (function l(u) {
        r.current = u, window.clearTimeout(n.current), u !== "" && (n.current = window.setTimeout(() => l(""), 1e3));
      })(a);
    },
    [t]
  ), s = c.useCallback(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return c.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, s];
}
function Bs(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = r ? e.indexOf(r) : -1;
  let i = Ld(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== r));
  const l = i.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== r ? l : void 0;
}
function Ld(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Fd = ms, Ws = hs, $d = ys, Bd = bs, Vs = xs, Wd = Es, Hs = Ts, zs = As, Vd = _s, Hd = ks, Us = Is, Gs = Ms, Ks = Ds;
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zd = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ys = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ud = {
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
const Gd = vo(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: s,
    iconNode: i,
    ...a
  }, l) => kr(
    "svg",
    {
      ref: l,
      ...Ud,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Ys("lucide", o),
      ...a
    },
    [
      ...i.map(([u, d]) => kr(u, d)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pt = (e, t) => {
  const r = vo(
    ({ className: n, ...o }, s) => kr(Gd, {
      ref: s,
      iconNode: t,
      className: Ys(`lucide-${zd(e)}`, n),
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
const qs = Pt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = Pt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kd = Pt("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yd = Pt("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qd = Pt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), mm = Fd, Xd = pt(
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
), Zd = c.forwardRef(({ className: e, children: t, size: r, ...n }, o) => /* @__PURE__ */ g.jsxs(
  Ws,
  {
    ref: o,
    className: O(Xd({ size: r, className: e })),
    ...n,
    children: [
      t,
      /* @__PURE__ */ g.jsx($d, { asChild: !0, children: /* @__PURE__ */ g.jsx(Xs, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Zd.displayName = Ws.displayName;
const Zs = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  Us,
  {
    ref: r,
    className: O("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ g.jsx(Kd, { className: "h-4 w-4" })
  }
));
Zs.displayName = Us.displayName;
const Js = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  Gs,
  {
    ref: r,
    className: O("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ g.jsx(Xs, { className: "h-4 w-4" })
  }
));
Js.displayName = Gs.displayName;
const Jd = c.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, o) => /* @__PURE__ */ g.jsx(Bd, { children: /* @__PURE__ */ g.jsxs(
  Vs,
  {
    ref: o,
    className: O(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white text-gray-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...n,
    children: [
      /* @__PURE__ */ g.jsx(Zs, {}),
      /* @__PURE__ */ g.jsx(
        Wd,
        {
          className: O(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ g.jsx(Js, {})
    ]
  }
) }));
Jd.displayName = Vs.displayName;
const Qd = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  Hs,
  {
    ref: r,
    className: O("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
Qd.displayName = Hs.displayName;
const ef = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ g.jsxs(
  zs,
  {
    ref: n,
    className: O(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ g.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ g.jsx(Hd, { children: /* @__PURE__ */ g.jsx(qs, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ g.jsx(Vd, { children: t })
    ]
  }
));
ef.displayName = zs.displayName;
const tf = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  Ks,
  {
    ref: r,
    className: O("-mx-1 my-1 h-px bg-gray-100 dark:bg-gray-800", e),
    ...t
  }
));
tf.displayName = Ks.displayName;
var rf = "Label", Qs = c.forwardRef((e, t) => /* @__PURE__ */ g.jsx(
  L.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      r.target.closest("button, input, select, textarea") || (e.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
Qs.displayName = rf;
var ea = Qs;
const nf = pt(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), of = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  ea,
  {
    ref: r,
    className: O(nf(), e),
    ...t
  }
));
of.displayName = ea.displayName;
function sf(e, t) {
  return c.useReducer((r, n) => t[r][n] ?? r, e);
}
var Qe = (e) => {
  const { present: t, children: r } = e, n = af(t), o = typeof r == "function" ? r({ present: n.isPresent }) : c.Children.only(r), s = q(n.ref, cf(o));
  return typeof r == "function" || n.isPresent ? c.cloneElement(o, { ref: s }) : null;
};
Qe.displayName = "Presence";
function af(e) {
  const [t, r] = c.useState(), n = c.useRef(null), o = c.useRef(e), s = c.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = sf(i, {
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
  return c.useEffect(() => {
    const u = jt(n.current);
    s.current = a === "mounted" ? u : "none";
  }, [a]), ce(() => {
    const u = n.current, d = o.current;
    if (d !== e) {
      const h = s.current, m = jt(u);
      e ? l("MOUNT") : m === "none" || u?.display === "none" ? l("UNMOUNT") : l(d && h !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), ce(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, f = (m) => {
        const p = jt(n.current).includes(CSS.escape(m.animationName));
        if (m.target === t && p && (l("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, h = (m) => {
        m.target === t && (s.current = jt(n.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: c.useCallback((u) => {
      n.current = u ? getComputedStyle(u) : null, r(u);
    }, [])
  };
}
function jt(e) {
  return e?.animationName || "none";
}
function cf(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var ar = "Checkbox", [lf] = ge(ar), [uf, cn] = lf(ar);
function df(e) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: n,
    defaultChecked: o,
    disabled: s,
    form: i,
    name: a,
    onCheckedChange: l,
    required: u,
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = e, [h, m] = Ue({
    prop: r,
    defaultProp: o ?? !1,
    onChange: l,
    caller: ar
  }), [b, p] = c.useState(null), [y, x] = c.useState(null), w = c.useRef(!1), C = b ? !!i || !!b.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), S = {
    checked: h,
    disabled: s,
    setChecked: m,
    control: b,
    setControl: p,
    name: a,
    form: i,
    value: d,
    hasConsumerStoppedPropagationRef: w,
    required: u,
    defaultChecked: Ve(o) ? !1 : o,
    isFormControl: C,
    bubbleInput: y,
    setBubbleInput: x
  };
  return /* @__PURE__ */ g.jsx(
    uf,
    {
      scope: t,
      ...S,
      children: ff(f) ? f(S) : n
    }
  );
}
var ta = "CheckboxTrigger", ra = c.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: r, ...n }, o) => {
    const {
      control: s,
      value: i,
      disabled: a,
      checked: l,
      required: u,
      setControl: d,
      setChecked: f,
      hasConsumerStoppedPropagationRef: h,
      isFormControl: m,
      bubbleInput: b
    } = cn(ta, e), p = q(o, d), y = c.useRef(l);
    return c.useEffect(() => {
      const x = s?.form;
      if (x) {
        const w = () => f(y.current);
        return x.addEventListener("reset", w), () => x.removeEventListener("reset", w);
      }
    }, [s, f]), /* @__PURE__ */ g.jsx(
      L.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Ve(l) ? "mixed" : l,
        "aria-required": u,
        "data-state": ia(l),
        "data-disabled": a ? "" : void 0,
        disabled: a,
        value: i,
        ...n,
        ref: p,
        onKeyDown: F(t, (x) => {
          x.key === "Enter" && x.preventDefault();
        }),
        onClick: F(r, (x) => {
          f((w) => Ve(w) ? !0 : !w), b && m && (h.current = x.isPropagationStopped(), h.current || x.stopPropagation());
        })
      }
    );
  }
);
ra.displayName = ta;
var ln = c.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: r,
      name: n,
      checked: o,
      defaultChecked: s,
      required: i,
      disabled: a,
      value: l,
      onCheckedChange: u,
      form: d,
      ...f
    } = e;
    return /* @__PURE__ */ g.jsx(
      df,
      {
        __scopeCheckbox: r,
        checked: o,
        defaultChecked: s,
        disabled: a,
        required: i,
        onCheckedChange: u,
        name: n,
        form: d,
        value: l,
        internal_do_not_use_render: ({ isFormControl: h }) => /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
          /* @__PURE__ */ g.jsx(
            ra,
            {
              ...f,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          h && /* @__PURE__ */ g.jsx(
            aa,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
ln.displayName = ar;
var na = "CheckboxIndicator", oa = c.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, s = cn(na, r);
    return /* @__PURE__ */ g.jsx(
      Qe,
      {
        present: n || Ve(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ g.jsx(
          L.span,
          {
            "data-state": ia(s.checked),
            "data-disabled": s.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
oa.displayName = na;
var sa = "CheckboxBubbleInput", aa = c.forwardRef(
  ({ __scopeCheckbox: e, ...t }, r) => {
    const {
      control: n,
      hasConsumerStoppedPropagationRef: o,
      checked: s,
      defaultChecked: i,
      required: a,
      disabled: l,
      name: u,
      value: d,
      form: f,
      bubbleInput: h,
      setBubbleInput: m
    } = cn(sa, e), b = q(r, m), p = tr(s), y = Qt(n);
    c.useEffect(() => {
      const w = h;
      if (!w) return;
      const C = window.HTMLInputElement.prototype, R = Object.getOwnPropertyDescriptor(
        C,
        "checked"
      ).set, N = !o.current;
      if (p !== s && R) {
        const P = new Event("click", { bubbles: N });
        w.indeterminate = Ve(s), R.call(w, Ve(s) ? !1 : s), w.dispatchEvent(P);
      }
    }, [h, p, s, o]);
    const x = c.useRef(Ve(s) ? !1 : s);
    return /* @__PURE__ */ g.jsx(
      L.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i ?? x.current,
        required: a,
        disabled: l,
        name: u,
        value: d,
        form: f,
        ...t,
        tabIndex: -1,
        ref: b,
        style: {
          ...t.style,
          ...y,
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
aa.displayName = sa;
function ff(e) {
  return typeof e == "function";
}
function Ve(e) {
  return e === "indeterminate";
}
function ia(e) {
  return Ve(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const pf = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  ln,
  {
    ref: r,
    className: O(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ g.jsx(
      oa,
      {
        className: O("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ g.jsx(qs, { className: "h-4 w-4" })
      }
    )
  }
));
pf.displayName = ln.displayName;
var Ar = "rovingFocusGroup.onEntryFocus", mf = { bubbles: !1, cancelable: !0 }, Tt = "RovingFocusGroup", [zr, ca, gf] = To(Tt), [hf, la] = ge(
  Tt,
  [gf]
), [vf, yf] = hf(Tt), ua = c.forwardRef(
  (e, t) => /* @__PURE__ */ g.jsx(zr.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ g.jsx(zr.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ g.jsx(bf, { ...e, ref: t }) }) })
);
ua.displayName = Tt;
var bf = c.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: o = !1,
    dir: s,
    currentTabStopId: i,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: u,
    preventScrollOnEntryFocus: d = !1,
    ...f
  } = e, h = c.useRef(null), m = q(t, h), b = Yr(s), [p, y] = Ue({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: Tt
  }), [x, w] = c.useState(!1), C = Oe(u), S = ca(r), R = c.useRef(!1), [N, P] = c.useState(0);
  return c.useEffect(() => {
    const A = h.current;
    if (A)
      return A.addEventListener(Ar, C), () => A.removeEventListener(Ar, C);
  }, [C]), /* @__PURE__ */ g.jsx(
    vf,
    {
      scope: r,
      orientation: n,
      dir: b,
      loop: o,
      currentTabStopId: p,
      onItemFocus: c.useCallback(
        (A) => y(A),
        [y]
      ),
      onItemShiftTab: c.useCallback(() => w(!0), []),
      onFocusableItemAdd: c.useCallback(
        () => P((A) => A + 1),
        []
      ),
      onFocusableItemRemove: c.useCallback(
        () => P((A) => A - 1),
        []
      ),
      children: /* @__PURE__ */ g.jsx(
        L.div,
        {
          tabIndex: x || N === 0 ? -1 : 0,
          "data-orientation": n,
          ...f,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: F(e.onMouseDown, () => {
            R.current = !0;
          }),
          onFocus: F(e.onFocus, (A) => {
            const V = !R.current;
            if (A.target === A.currentTarget && V && !x) {
              const W = new CustomEvent(Ar, mf);
              if (A.currentTarget.dispatchEvent(W), !W.defaultPrevented) {
                const U = S().filter((M) => M.focusable), _ = U.find((M) => M.active), $ = U.find((M) => M.id === p), G = [_, $, ...U].filter(
                  Boolean
                ).map((M) => M.ref.current);
                pa(G, d);
              }
            }
            R.current = !1;
          }),
          onBlur: F(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), da = "RovingFocusGroupItem", fa = c.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, l = We(), u = s || l, d = yf(da, r), f = d.currentTabStopId === u, h = ca(r), { onFocusableItemAdd: m, onFocusableItemRemove: b, currentTabStopId: p } = d;
    return c.useEffect(() => {
      if (n)
        return m(), () => b();
    }, [n, m, b]), /* @__PURE__ */ g.jsx(
      zr.ItemSlot,
      {
        scope: r,
        id: u,
        focusable: n,
        active: o,
        children: /* @__PURE__ */ g.jsx(
          L.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": d.orientation,
            ...a,
            ref: t,
            onMouseDown: F(e.onMouseDown, (y) => {
              n ? d.onItemFocus(u) : y.preventDefault();
            }),
            onFocus: F(e.onFocus, () => d.onItemFocus(u)),
            onKeyDown: F(e.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const x = Cf(y, d.orientation, d.dir);
              if (x !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let C = h().filter((S) => S.focusable).map((S) => S.ref.current);
                if (x === "last") C.reverse();
                else if (x === "prev" || x === "next") {
                  x === "prev" && C.reverse();
                  const S = C.indexOf(y.currentTarget);
                  C = d.loop ? Sf(C, S + 1) : C.slice(S + 1);
                }
                setTimeout(() => pa(C));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: f, hasTabStop: p != null }) : i
          }
        )
      }
    );
  }
);
fa.displayName = da;
var xf = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function wf(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Cf(e, t, r) {
  const n = wf(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return xf[n];
}
function pa(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function Sf(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Ef = ua, Rf = fa, un = "Radio", [Pf, ma] = ge(un), [Tf, Nf] = Pf(un), ga = c.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: r,
      name: n,
      checked: o = !1,
      required: s,
      disabled: i,
      value: a = "on",
      onCheck: l,
      form: u,
      ...d
    } = e, [f, h] = c.useState(null), m = q(t, (y) => h(y)), b = c.useRef(!1), p = f ? u || !!f.closest("form") : !0;
    return /* @__PURE__ */ g.jsxs(Tf, { scope: r, checked: o, disabled: i, children: [
      /* @__PURE__ */ g.jsx(
        L.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": ba(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: a,
          ...d,
          ref: m,
          onClick: F(e.onClick, (y) => {
            o || l?.(), p && (b.current = y.isPropagationStopped(), b.current || y.stopPropagation());
          })
        }
      ),
      p && /* @__PURE__ */ g.jsx(
        ya,
        {
          control: f,
          bubbles: !b.current,
          name: n,
          value: a,
          checked: o,
          required: s,
          disabled: i,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
ga.displayName = un;
var ha = "RadioIndicator", va = c.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...o } = e, s = Nf(ha, r);
    return /* @__PURE__ */ g.jsx(Qe, { present: n || s.checked, children: /* @__PURE__ */ g.jsx(
      L.span,
      {
        "data-state": ba(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
va.displayName = ha;
var Af = "RadioBubbleInput", ya = c.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, s) => {
    const i = c.useRef(null), a = q(i, s), l = tr(r), u = Qt(t);
    return c.useEffect(() => {
      const d = i.current;
      if (!d) return;
      const f = window.HTMLInputElement.prototype, m = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (l !== r && m) {
        const b = new Event("click", { bubbles: n });
        m.call(d, r), d.dispatchEvent(b);
      }
    }, [l, r, n]), /* @__PURE__ */ g.jsx(
      L.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: r,
        ...o,
        tabIndex: -1,
        ref: a,
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
ya.displayName = Af;
function ba(e) {
  return e ? "checked" : "unchecked";
}
var _f = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], ir = "RadioGroup", [Of] = ge(ir, [
  la,
  ma
]), xa = la(), wa = ma(), [kf, If] = Of(ir), Ca = c.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: r,
      name: n,
      defaultValue: o,
      value: s,
      required: i = !1,
      disabled: a = !1,
      orientation: l,
      dir: u,
      loop: d = !0,
      onValueChange: f,
      ...h
    } = e, m = xa(r), b = Yr(u), [p, y] = Ue({
      prop: s,
      defaultProp: o ?? null,
      onChange: f,
      caller: ir
    });
    return /* @__PURE__ */ g.jsx(
      kf,
      {
        scope: r,
        name: n,
        required: i,
        disabled: a,
        value: p,
        onValueChange: y,
        children: /* @__PURE__ */ g.jsx(
          Ef,
          {
            asChild: !0,
            ...m,
            orientation: l,
            dir: b,
            loop: d,
            children: /* @__PURE__ */ g.jsx(
              L.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": l,
                "data-disabled": a ? "" : void 0,
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
Ca.displayName = ir;
var Sa = "RadioGroupItem", Ea = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...o } = e, s = If(Sa, r), i = s.disabled || n, a = xa(r), l = wa(r), u = c.useRef(null), d = q(t, u), f = s.value === o.value, h = c.useRef(!1);
    return c.useEffect(() => {
      const m = (p) => {
        _f.includes(p.key) && (h.current = !0);
      }, b = () => h.current = !1;
      return document.addEventListener("keydown", m), document.addEventListener("keyup", b), () => {
        document.removeEventListener("keydown", m), document.removeEventListener("keyup", b);
      };
    }, []), /* @__PURE__ */ g.jsx(
      Rf,
      {
        asChild: !0,
        ...a,
        focusable: !i,
        active: f,
        children: /* @__PURE__ */ g.jsx(
          ga,
          {
            disabled: i,
            required: s.required,
            checked: f,
            ...l,
            ...o,
            name: s.name,
            ref: d,
            onCheck: () => s.onValueChange(o.value),
            onKeyDown: F((m) => {
              m.key === "Enter" && m.preventDefault();
            }),
            onFocus: F(o.onFocus, () => {
              h.current && u.current?.click();
            })
          }
        )
      }
    );
  }
);
Ea.displayName = Sa;
var Mf = "RadioGroupIndicator", Ra = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, o = wa(r);
    return /* @__PURE__ */ g.jsx(va, { ...o, ...n, ref: t });
  }
);
Ra.displayName = Mf;
var Pa = Ca, Ta = Ea, jf = Ra;
const Df = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  Pa,
  {
    className: O("grid gap-2", e),
    ...t,
    ref: r
  }
));
Df.displayName = Pa.displayName;
const Lf = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  Ta,
  {
    ref: r,
    className: O(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ g.jsx(jf, { className: "flex items-center justify-center", children: /* @__PURE__ */ g.jsx(Yd, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
Lf.displayName = Ta.displayName;
var cr = "Switch", [Ff] = ge(cr), [$f, Bf] = Ff(cr), Na = c.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: r,
      name: n,
      checked: o,
      defaultChecked: s,
      required: i,
      disabled: a,
      value: l = "on",
      onCheckedChange: u,
      form: d,
      ...f
    } = e, [h, m] = c.useState(null), b = q(t, (C) => m(C)), p = c.useRef(!1), y = h ? d || !!h.closest("form") : !0, [x, w] = Ue({
      prop: o,
      defaultProp: s ?? !1,
      onChange: u,
      caller: cr
    });
    return /* @__PURE__ */ g.jsxs($f, { scope: r, checked: x, disabled: a, children: [
      /* @__PURE__ */ g.jsx(
        L.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": x,
          "aria-required": i,
          "data-state": ka(x),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: l,
          ...f,
          ref: b,
          onClick: F(e.onClick, (C) => {
            w((S) => !S), y && (p.current = C.isPropagationStopped(), p.current || C.stopPropagation());
          })
        }
      ),
      y && /* @__PURE__ */ g.jsx(
        Oa,
        {
          control: h,
          bubbles: !p.current,
          name: n,
          value: l,
          checked: x,
          required: i,
          disabled: a,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Na.displayName = cr;
var Aa = "SwitchThumb", _a = c.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, o = Bf(Aa, r);
    return /* @__PURE__ */ g.jsx(
      L.span,
      {
        "data-state": ka(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
_a.displayName = Aa;
var Wf = "SwitchBubbleInput", Oa = c.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, s) => {
    const i = c.useRef(null), a = q(i, s), l = tr(r), u = Qt(t);
    return c.useEffect(() => {
      const d = i.current;
      if (!d) return;
      const f = window.HTMLInputElement.prototype, m = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (l !== r && m) {
        const b = new Event("click", { bubbles: n });
        m.call(d, r), d.dispatchEvent(b);
      }
    }, [l, r, n]), /* @__PURE__ */ g.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: r,
        ...o,
        tabIndex: -1,
        ref: a,
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
Oa.displayName = Wf;
function ka(e) {
  return e ? "checked" : "unchecked";
}
var Ia = Na, Vf = _a;
const Hf = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  Ia,
  {
    className: O(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ g.jsx(
      Vf,
      {
        className: O(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Hf.displayName = Ia.displayName;
const zf = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  "div",
  {
    ref: r,
    className: O(
      "rounded-lg bg-white mx-auto shadow p-6 border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 sm:flex-row sm:items-center rounded-xl shadow-sm w-full rounded-[24px]",
      e
    ),
    ...t
  }
));
zf.displayName = "Card";
const Uf = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  "div",
  {
    ref: r,
    className: O("flex flex-col space-y-1.5 p-3", e),
    ...t
  }
));
Uf.displayName = "CardHeader";
const Gf = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  "div",
  {
    ref: r,
    className: O(
      e
    ),
    ...t
  }
));
Gf.displayName = "CardTitle";
const Kf = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  "div",
  {
    ref: r,
    className: O("text-base text-gray-500 dark:text-gray-400", e),
    ...t
  }
));
Kf.displayName = "CardDescription";
const Yf = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx("div", { ref: r, className: O("", e), ...t }));
Yf.displayName = "CardContent";
const qf = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  "div",
  {
    ref: r,
    className: O("flex items-center", e),
    ...t
  }
));
qf.displayName = "CardFooter";
var Xf = "Separator", lo = "horizontal", Zf = ["horizontal", "vertical"], Ma = c.forwardRef((e, t) => {
  const { decorative: r, orientation: n = lo, ...o } = e, s = Jf(n) ? n : lo, a = r ? { role: "none" } : { "aria-orientation": s === "vertical" ? s : void 0, role: "separator" };
  return /* @__PURE__ */ g.jsx(
    L.div,
    {
      "data-orientation": s,
      ...a,
      ...o,
      ref: t
    }
  );
});
Ma.displayName = Xf;
function Jf(e) {
  return Zf.includes(e);
}
var ja = Ma;
const Qf = c.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...n }, o) => /* @__PURE__ */ g.jsx(
    ja,
    {
      ref: o,
      decorative: r,
      orientation: t,
      className: O(
        "shrink-0 bg-gray-200 dark:bg-gray-800",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...n
    }
  )
);
Qf.displayName = ja.displayName;
var Dt = { exports: {} }, _r = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uo;
function ep() {
  if (uo) return _r;
  uo = 1;
  var e = ye;
  function t(f, h) {
    return f === h && (f !== 0 || 1 / f === 1 / h) || f !== f && h !== h;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, s = e.useLayoutEffect, i = e.useDebugValue;
  function a(f, h) {
    var m = h(), b = n({ inst: { value: m, getSnapshot: h } }), p = b[0].inst, y = b[1];
    return s(
      function() {
        p.value = m, p.getSnapshot = h, l(p) && y({ inst: p });
      },
      [f, m, h]
    ), o(
      function() {
        return l(p) && y({ inst: p }), f(function() {
          l(p) && y({ inst: p });
        });
      },
      [f]
    ), i(m), m;
  }
  function l(f) {
    var h = f.getSnapshot;
    f = f.value;
    try {
      var m = h();
      return !r(f, m);
    } catch {
      return !0;
    }
  }
  function u(f, h) {
    return h();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : a;
  return _r.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, _r;
}
var Or = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fo;
function tp() {
  return fo || (fo = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(m, b) {
      return m === b && (m !== 0 || 1 / m === 1 / b) || m !== m && b !== b;
    }
    function t(m, b) {
      d || o.startTransition === void 0 || (d = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var p = b();
      if (!f) {
        var y = b();
        s(p, y) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), f = !0);
      }
      y = i({
        inst: { value: p, getSnapshot: b }
      });
      var x = y[0].inst, w = y[1];
      return l(
        function() {
          x.value = p, x.getSnapshot = b, r(x) && w({ inst: x });
        },
        [m, p, b]
      ), a(
        function() {
          return r(x) && w({ inst: x }), m(function() {
            r(x) && w({ inst: x });
          });
        },
        [m]
      ), u(p), p;
    }
    function r(m) {
      var b = m.getSnapshot;
      m = m.value;
      try {
        var p = b();
        return !s(m, p);
      } catch {
        return !0;
      }
    }
    function n(m, b) {
      return b();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = ye, s = typeof Object.is == "function" ? Object.is : e, i = o.useState, a = o.useEffect, l = o.useLayoutEffect, u = o.useDebugValue, d = !1, f = !1, h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Or.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Or;
}
var po;
function rp() {
  return po || (po = 1, process.env.NODE_ENV === "production" ? Dt.exports = ep() : Dt.exports = tp()), Dt.exports;
}
var np = rp();
function op() {
  return np.useSyncExternalStore(
    sp,
    () => !0,
    () => !1
  );
}
function sp() {
  return () => {
  };
}
var dn = "Avatar", [ap] = ge(dn), [ip, Da] = ap(dn), La = c.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, ...n } = e, [o, s] = c.useState("idle");
    return /* @__PURE__ */ g.jsx(
      ip,
      {
        scope: r,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: s,
        children: /* @__PURE__ */ g.jsx(L.span, { ...n, ref: t })
      }
    );
  }
);
La.displayName = dn;
var Fa = "AvatarImage", $a = c.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, src: n, onLoadingStatusChange: o = () => {
    }, ...s } = e, i = Da(Fa, r), a = cp(n, s), l = Oe((u) => {
      o(u), i.onImageLoadingStatusChange(u);
    });
    return ce(() => {
      a !== "idle" && l(a);
    }, [a, l]), a === "loaded" ? /* @__PURE__ */ g.jsx(L.img, { ...s, ref: t, src: n }) : null;
  }
);
$a.displayName = Fa;
var Ba = "AvatarFallback", Wa = c.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, delayMs: n, ...o } = e, s = Da(Ba, r), [i, a] = c.useState(n === void 0);
    return c.useEffect(() => {
      if (n !== void 0) {
        const l = window.setTimeout(() => a(!0), n);
        return () => window.clearTimeout(l);
      }
    }, [n]), i && s.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ g.jsx(L.span, { ...o, ref: t }) : null;
  }
);
Wa.displayName = Ba;
function mo(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function cp(e, { referrerPolicy: t, crossOrigin: r }) {
  const n = op(), o = c.useRef(null), s = n ? (o.current || (o.current = new window.Image()), o.current) : null, [i, a] = c.useState(
    () => mo(s, e)
  );
  return ce(() => {
    a(mo(s, e));
  }, [s, e]), ce(() => {
    const l = (f) => () => {
      a(f);
    };
    if (!s) return;
    const u = l("loaded"), d = l("error");
    return s.addEventListener("load", u), s.addEventListener("error", d), t && (s.referrerPolicy = t), typeof r == "string" && (s.crossOrigin = r), () => {
      s.removeEventListener("load", u), s.removeEventListener("error", d);
    };
  }, [s, r, t]), i;
}
var Va = La, Ha = $a, za = Wa;
const lp = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  Va,
  {
    ref: r,
    className: O(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
lp.displayName = Va.displayName;
const up = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  Ha,
  {
    ref: r,
    className: O("aspect-square h-full w-full", e),
    ...t
  }
));
up.displayName = Ha.displayName;
const dp = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  za,
  {
    ref: r,
    className: O(
      "flex h-full w-full items-center justify-center rounded-full dark:bg-gray-800",
      e
    ),
    ...t
  }
));
dp.displayName = za.displayName;
const fp = pt(
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
function gm({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ g.jsx("div", { className: O(fp({ variant: t }), e), ...r });
}
const pp = pt(
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
), mp = c.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ g.jsx(
  "div",
  {
    ref: n,
    role: "alert",
    className: O(pp({ variant: t }), e),
    ...r
  }
));
mp.displayName = "Alert";
const gp = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  "h5",
  {
    ref: r,
    className: O("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
gp.displayName = "AlertTitle";
const hp = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  "div",
  {
    ref: r,
    className: O("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
hp.displayName = "AlertDescription";
var fn = "Progress", pn = 100, [vp] = ge(fn), [yp, bp] = vp(fn), Ua = c.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: n = null,
      max: o,
      getValueLabel: s = xp,
      ...i
    } = e;
    (o || o === 0) && !go(o) && console.error(wp(`${o}`, "Progress"));
    const a = go(o) ? o : pn;
    n !== null && !ho(n, a) && console.error(Cp(`${n}`, "Progress"));
    const l = ho(n, a) ? n : null, u = Ut(l) ? s(l, a) : void 0;
    return /* @__PURE__ */ g.jsx(yp, { scope: r, value: l, max: a, children: /* @__PURE__ */ g.jsx(
      L.div,
      {
        "aria-valuemax": a,
        "aria-valuemin": 0,
        "aria-valuenow": Ut(l) ? l : void 0,
        "aria-valuetext": u,
        role: "progressbar",
        "data-state": Ya(l, a),
        "data-value": l ?? void 0,
        "data-max": a,
        ...i,
        ref: t
      }
    ) });
  }
);
Ua.displayName = fn;
var Ga = "ProgressIndicator", Ka = c.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...n } = e, o = bp(Ga, r);
    return /* @__PURE__ */ g.jsx(
      L.div,
      {
        "data-state": Ya(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...n,
        ref: t
      }
    );
  }
);
Ka.displayName = Ga;
function xp(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Ya(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Ut(e) {
  return typeof e == "number";
}
function go(e) {
  return Ut(e) && !isNaN(e) && e > 0;
}
function ho(e, t) {
  return Ut(e) && !isNaN(e) && e <= t && e >= 0;
}
function wp(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${pn}\`.`;
}
function Cp(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${pn} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var qa = Ua, Sp = Ka;
const Ep = c.forwardRef(({ className: e, value: t, ...r }, n) => /* @__PURE__ */ g.jsx(
  qa,
  {
    ref: n,
    className: O(
      "relative h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800",
      e
    ),
    ...r,
    children: /* @__PURE__ */ g.jsx(
      Sp,
      {
        className: "h-full w-full flex-1 bg-gray-900 transition-all dark:bg-gray-50",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
Ep.displayName = qa.displayName;
var [lr] = ge("Tooltip", [
  er
]), ur = er(), Rp = "TooltipProvider", Ur = "tooltip.open", [hm, mn] = lr(Rp), Et = "Tooltip", [Pp, dr] = lr(Et), Xa = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: a
  } = e, l = mn(Et, e.__scopeTooltip), u = ur(t), [d, f] = c.useState(null), h = We(), m = c.useRef(0), b = i ?? l.disableHoverableContent, p = a ?? l.delayDuration, y = c.useRef(!1), [x, w] = Ue({
    prop: n,
    defaultProp: o ?? !1,
    onChange: (P) => {
      P ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Ur))) : l.onClose(), s?.(P);
    },
    caller: Et
  }), C = c.useMemo(() => x ? y.current ? "delayed-open" : "instant-open" : "closed", [x]), S = c.useCallback(() => {
    window.clearTimeout(m.current), m.current = 0, y.current = !1, w(!0);
  }, [w]), R = c.useCallback(() => {
    window.clearTimeout(m.current), m.current = 0, w(!1);
  }, [w]), N = c.useCallback(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      y.current = !0, w(!0), m.current = 0;
    }, p);
  }, [p, w]);
  return c.useEffect(() => () => {
    m.current && (window.clearTimeout(m.current), m.current = 0);
  }, []), /* @__PURE__ */ g.jsx(Qo, { ...u, children: /* @__PURE__ */ g.jsx(
    Pp,
    {
      scope: t,
      contentId: h,
      open: x,
      stateAttribute: C,
      trigger: d,
      onTriggerChange: f,
      onTriggerEnter: c.useCallback(() => {
        l.isOpenDelayedRef.current ? N() : S();
      }, [l.isOpenDelayedRef, N, S]),
      onTriggerLeave: c.useCallback(() => {
        b ? R() : (window.clearTimeout(m.current), m.current = 0);
      }, [R, b]),
      onOpen: S,
      onClose: R,
      disableHoverableContent: b,
      children: r
    }
  ) });
};
Xa.displayName = Et;
var Gr = "TooltipTrigger", Tp = c.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = dr(Gr, r), s = mn(Gr, r), i = ur(r), a = c.useRef(null), l = q(t, a, o.onTriggerChange), u = c.useRef(!1), d = c.useRef(!1), f = c.useCallback(() => u.current = !1, []);
    return c.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ g.jsx(es, { asChild: !0, ...i, children: /* @__PURE__ */ g.jsx(
      L.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...n,
        ref: l,
        onPointerMove: F(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !d.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: F(e.onPointerLeave, () => {
          o.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: F(e.onPointerDown, () => {
          o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: F(e.onFocus, () => {
          u.current || o.onOpen();
        }),
        onBlur: F(e.onBlur, o.onClose),
        onClick: F(e.onClick, o.onClose)
      }
    ) });
  }
);
Tp.displayName = Gr;
var Np = "TooltipPortal", [vm, Ap] = lr(Np, {
  forceMount: void 0
}), dt = "TooltipContent", Za = c.forwardRef(
  (e, t) => {
    const r = Ap(dt, e.__scopeTooltip), { forceMount: n = r.forceMount, side: o = "top", ...s } = e, i = dr(dt, e.__scopeTooltip);
    return /* @__PURE__ */ g.jsx(Qe, { present: n || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ g.jsx(Ja, { side: o, ...s, ref: t }) : /* @__PURE__ */ g.jsx(_p, { side: o, ...s, ref: t }) });
  }
), _p = c.forwardRef((e, t) => {
  const r = dr(dt, e.__scopeTooltip), n = mn(dt, e.__scopeTooltip), o = c.useRef(null), s = q(t, o), [i, a] = c.useState(null), { trigger: l, onClose: u } = r, d = o.current, { onPointerInTransitChange: f } = n, h = c.useCallback(() => {
    a(null), f(!1);
  }, [f]), m = c.useCallback(
    (b, p) => {
      const y = b.currentTarget, x = { x: b.clientX, y: b.clientY }, w = jp(x, y.getBoundingClientRect()), C = Dp(x, w), S = Lp(p.getBoundingClientRect()), R = $p([...C, ...S]);
      a(R), f(!0);
    },
    [f]
  );
  return c.useEffect(() => () => h(), [h]), c.useEffect(() => {
    if (l && d) {
      const b = (y) => m(y, d), p = (y) => m(y, l);
      return l.addEventListener("pointerleave", b), d.addEventListener("pointerleave", p), () => {
        l.removeEventListener("pointerleave", b), d.removeEventListener("pointerleave", p);
      };
    }
  }, [l, d, m, h]), c.useEffect(() => {
    if (i) {
      const b = (p) => {
        const y = p.target, x = { x: p.clientX, y: p.clientY }, w = l?.contains(y) || d?.contains(y), C = !Fp(x, i);
        w ? h() : C && (h(), u());
      };
      return document.addEventListener("pointermove", b), () => document.removeEventListener("pointermove", b);
    }
  }, [l, d, i, u, h]), /* @__PURE__ */ g.jsx(Ja, { ...e, ref: s });
}), [Op, kp] = lr(Et, { isInside: !1 }), Ip = /* @__PURE__ */ _c("TooltipContent"), Ja = c.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      ...a
    } = e, l = dr(dt, r), u = ur(r), { onClose: d } = l;
    return c.useEffect(() => (document.addEventListener(Ur, d), () => document.removeEventListener(Ur, d)), [d]), c.useEffect(() => {
      if (l.trigger) {
        const f = (h) => {
          h.target?.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ g.jsx(
      Yt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ g.jsxs(
          ts,
          {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
              ...a.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ g.jsx(Ip, { children: n }),
              /* @__PURE__ */ g.jsx(Op, { scope: r, isInside: !0, children: /* @__PURE__ */ g.jsx(_u, { id: l.contentId, role: "tooltip", children: o || n }) })
            ]
          }
        )
      }
    );
  }
);
Za.displayName = dt;
var Qa = "TooltipArrow", Mp = c.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = ur(r);
    return kp(
      Qa,
      r
    ).isInside ? null : /* @__PURE__ */ g.jsx(rs, { ...o, ...n, ref: t });
  }
);
Mp.displayName = Qa;
function jp(e, t) {
  const r = Math.abs(t.top - e.y), n = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(r, n, o, s)) {
    case s:
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
function Dp(e, t, r = 5) {
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
function Lp(e) {
  const { top: t, right: r, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: o, y: n }
  ];
}
function Fp(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s], l = t[i], u = a.x, d = a.y, f = l.x, h = l.y;
    d > n != h > n && r < (f - u) * (n - d) / (h - d) + u && (o = !o);
  }
  return o;
}
function $p(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), Bp(t);
}
function Bp(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const o = e[n];
    for (; r.length >= 2; ) {
      const s = r[r.length - 1], i = r[r.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) r.pop();
      else break;
    }
    r.push(o);
  }
  return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r);
}
var Wp = Xa, ei = Za;
const ym = Wp, Vp = c.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ g.jsx(
  ei,
  {
    ref: n,
    sideOffset: t,
    className: O(
      "z-50 overflow-hidden rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-950 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
      e
    ),
    ...r
  }
));
Vp.displayName = ei.displayName;
function bm({ className: e, ...t }) {
  return /* @__PURE__ */ g.jsx("h1", { className: O("scroll-m-20 text-4xl font-heading mb-2", e), ...t });
}
function xm({ className: e, ...t }) {
  return /* @__PURE__ */ g.jsx("h2", { className: O("scroll-m-20 text-3xl font-heading mb-2", e), ...t });
}
function wm({ className: e, ...t }) {
  return /* @__PURE__ */ g.jsx("h3", { className: O("scroll-m-20 text-2xl font-heading mb-2 tracking-tight", e), ...t });
}
function Cm({ className: e, ...t }) {
  return /* @__PURE__ */ g.jsx("h4", { className: O("scroll-m-20 text-xl mb-2 tracking-tight", e), ...t });
}
function Sm({ className: e, ...t }) {
  return /* @__PURE__ */ g.jsx("h5", { className: O("scroll-m-20 text-lg mb-2 tracking-tight", e), ...t });
}
function Em({ className: e, ...t }) {
  return /* @__PURE__ */ g.jsx("h6", { className: O("scroll-m-20 text-base mb-2 tracking-tight", e), ...t });
}
function Rm({ className: e, ...t }) {
  return /* @__PURE__ */ g.jsx("p", { className: O("leading-7 font-sans [&:not(:first-child)]:mt-3", e), ...t });
}
function Pm({ className: e, ...t }) {
  return /* @__PURE__ */ g.jsx("span", { className: O("font-sans", e), ...t });
}
function Tm({ className: e, ...t }) {
  return /* @__PURE__ */ g.jsx("blockquote", { className: O("mt-6 font-sans border-l-2 pl-6 italic text-muted-foreground", e), ...t });
}
function Nm({ className: e, ...t }) {
  return /* @__PURE__ */ g.jsx("code", { className: O("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm", e), ...t });
}
function Am({ className: e, ...t }) {
  return /* @__PURE__ */ g.jsx("p", { className: O("text-xl font-sans text-muted-foreground", e), ...t });
}
function _m({ className: e, ...t }) {
  return /* @__PURE__ */ g.jsx("div", { className: O("text-lg font-sans font-semibold", e), ...t });
}
function Om({ className: e, ...t }) {
  return /* @__PURE__ */ g.jsx("p", { className: O("text-sm font-sans text-muted-foreground", e), ...t });
}
function km({ className: e, ...t }) {
  return /* @__PURE__ */ g.jsx("small", { className: O("text-sm font-sans leading-none", e), ...t });
}
function Im({ className: e, ...t }) {
  return /* @__PURE__ */ g.jsx("ul", { className: O("my-6 ml-6 font-sans list-disc [&>li]:mt-2", e), ...t });
}
function Mm({ className: e, ...t }) {
  return /* @__PURE__ */ g.jsx("li", { className: O("mt-2 font-sans", e), ...t });
}
var fr = "Dialog", [ti] = ge(fr), [Hp, we] = ti(fr), ri = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = c.useRef(null), l = c.useRef(null), [u, d] = Ue({
    prop: n,
    defaultProp: o ?? !1,
    onChange: s,
    caller: fr
  });
  return /* @__PURE__ */ g.jsx(
    Hp,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: We(),
      titleId: We(),
      descriptionId: We(),
      open: u,
      onOpenChange: d,
      onOpenToggle: c.useCallback(() => d((f) => !f), [d]),
      modal: i,
      children: r
    }
  );
};
ri.displayName = fr;
var ni = "DialogTrigger", zp = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = we(ni, r), s = q(t, o.triggerRef);
    return /* @__PURE__ */ g.jsx(
      L.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": vn(o.open),
        ...n,
        ref: s,
        onClick: F(e.onClick, o.onOpenToggle)
      }
    );
  }
);
zp.displayName = ni;
var gn = "DialogPortal", [Up, oi] = ti(gn, {
  forceMount: void 0
}), si = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, s = we(gn, t);
  return /* @__PURE__ */ g.jsx(Up, { scope: t, forceMount: r, children: c.Children.map(n, (i) => /* @__PURE__ */ g.jsx(Qe, { present: r || s.open, children: /* @__PURE__ */ g.jsx(on, { asChild: !0, container: o, children: i }) })) });
};
si.displayName = gn;
var Gt = "DialogOverlay", ai = c.forwardRef(
  (e, t) => {
    const r = oi(Gt, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, s = we(Gt, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ g.jsx(Qe, { present: n || s.open, children: /* @__PURE__ */ g.jsx(Kp, { ...o, ref: t }) }) : null;
  }
);
ai.displayName = Gt;
var Gp = /* @__PURE__ */ lt("DialogOverlay.RemoveScroll"), Kp = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = we(Gt, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ g.jsx(sn, { as: Gp, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ g.jsx(
        L.div,
        {
          "data-state": vn(o.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), Je = "DialogContent", ii = c.forwardRef(
  (e, t) => {
    const r = oi(Je, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, s = we(Je, e.__scopeDialog);
    return /* @__PURE__ */ g.jsx(Qe, { present: n || s.open, children: s.modal ? /* @__PURE__ */ g.jsx(Yp, { ...o, ref: t }) : /* @__PURE__ */ g.jsx(qp, { ...o, ref: t }) });
  }
);
ii.displayName = Je;
var Yp = c.forwardRef(
  (e, t) => {
    const r = we(Je, e.__scopeDialog), n = c.useRef(null), o = q(t, r.contentRef, n);
    return c.useEffect(() => {
      const s = n.current;
      if (s) return as(s);
    }, []), /* @__PURE__ */ g.jsx(
      ci,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: F(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: F(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: F(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), qp = c.forwardRef(
  (e, t) => {
    const r = we(Je, e.__scopeDialog), n = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ g.jsx(
      ci,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), s.defaultPrevented || (n.current || r.triggerRef.current?.focus(), s.preventDefault()), n.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), s.defaultPrevented || (n.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = s.target;
          r.triggerRef.current?.contains(i) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), ci = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = we(Je, r), l = c.useRef(null), u = q(t, l);
    return _o(), /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
      /* @__PURE__ */ g.jsx(
        qr,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ g.jsx(
            Yt,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": vn(a.open),
              ...i,
              ref: u,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
        /* @__PURE__ */ g.jsx(Xp, { titleId: a.titleId }),
        /* @__PURE__ */ g.jsx(Jp, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), hn = "DialogTitle", li = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = we(hn, r);
    return /* @__PURE__ */ g.jsx(L.h2, { id: o.titleId, ...n, ref: t });
  }
);
li.displayName = hn;
var ui = "DialogDescription", di = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = we(ui, r);
    return /* @__PURE__ */ g.jsx(L.p, { id: o.descriptionId, ...n, ref: t });
  }
);
di.displayName = ui;
var fi = "DialogClose", pi = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = we(fi, r);
    return /* @__PURE__ */ g.jsx(
      L.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: F(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
pi.displayName = fi;
function vn(e) {
  return e ? "open" : "closed";
}
var mi = "DialogTitleWarning", [jm, gi] = $c(mi, {
  contentName: Je,
  titleName: hn,
  docsSlug: "dialog"
}), Xp = ({ titleId: e }) => {
  const t = gi(mi), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, Zp = "DialogDescriptionWarning", Jp = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${gi(Zp).contentName}}.`;
  return c.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, Qp = ri, em = si, hi = ai, vi = ii, yi = li, bi = di, tm = pi;
const Dm = Qp, rm = em, xi = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  hi,
  {
    ref: r,
    className: O(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
xi.displayName = hi.displayName;
const nm = c.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ g.jsxs(rm, { children: [
  /* @__PURE__ */ g.jsx(xi, {}),
  /* @__PURE__ */ g.jsxs(
    vi,
    {
      ref: n,
      className: O(
        "dialog fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-gray-800 dark:bg-gray-950",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ g.jsxs(tm, { className: "close absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500 dark:ring-offset-gray-950 dark:focus:ring-gray-300 dark:data-[state=open]:bg-gray-800 dark:data-[state=open]:text-gray-400", children: [
          /* @__PURE__ */ g.jsx(qd, { className: "h-4 w-4" }),
          /* @__PURE__ */ g.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
nm.displayName = vi.displayName;
const om = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  yi,
  {
    ref: r,
    className: O(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
om.displayName = yi.displayName;
const sm = c.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g.jsx(
  bi,
  {
    ref: r,
    className: O("text-sm text-gray-500 dark:text-gray-400", e),
    ...t
  }
));
sm.displayName = bi.displayName;
export {
  mp as Alert,
  lp as Avatar,
  gm as Badge,
  Tm as Blockquote,
  jc as Button,
  zf as Card,
  pf as Checkbox,
  Ec as DEFAULT_WEIGHTS,
  Dm as Dialog,
  bm as H1,
  xm as H2,
  wm as H3,
  Cm as H4,
  Sm as H5,
  Em as H6,
  Nm as InlineCode,
  Lc as Input,
  of as Label,
  _m as Large,
  Am as Lead,
  Im as List,
  Mm as ListItem,
  Om as Muted,
  Rm as P,
  Ep as Progress,
  Df as RadioGroup,
  mm as Select,
  Qf as Separator,
  km as Small,
  Pm as Span,
  Hf as Switch,
  Fc as Textarea,
  ym as Tooltip,
  fm as calculateOverallScore,
  O as cn,
  dm as formatTimeAgo,
  cm as getColorForScore,
  lm as getColorForTotalScore,
  um as getStatusColor,
  pm as useIsMobile
};
