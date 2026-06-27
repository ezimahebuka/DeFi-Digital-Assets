function Y0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const i = Object.getOwnPropertyDescriptor(r, s);
          i &&
            Object.defineProperty(
              e,
              s,
              i.get ? i : { enumerable: !0, get: () => r[s] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function X0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var yp = { exports: {} },
  Ki = {},
  xp = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var to = Symbol.for("react.element"),
  G0 = Symbol.for("react.portal"),
  Q0 = Symbol.for("react.fragment"),
  J0 = Symbol.for("react.strict_mode"),
  Z0 = Symbol.for("react.profiler"),
  e2 = Symbol.for("react.provider"),
  t2 = Symbol.for("react.context"),
  n2 = Symbol.for("react.forward_ref"),
  r2 = Symbol.for("react.suspense"),
  s2 = Symbol.for("react.memo"),
  o2 = Symbol.for("react.lazy"),
  qd = Symbol.iterator;
function i2(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (qd && e[qd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var jp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  bp = Object.assign,
  Sp = {};
function Qr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Sp),
    (this.updater = n || jp));
}
Qr.prototype.isReactComponent = {};
Qr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Qr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Cp() {}
Cp.prototype = Qr.prototype;
function ou(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Sp),
    (this.updater = n || jp));
}
var iu = (ou.prototype = new Cp());
iu.constructor = ou;
bp(iu, Qr.prototype);
iu.isPureReactComponent = !0;
var Kd = Array.isArray,
  Pp = Object.prototype.hasOwnProperty,
  au = { current: null },
  kp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Np(e, t, n) {
  var r,
    s = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Pp.call(t, r) && !kp.hasOwnProperty(r) && (s[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) s.children = n;
  else if (1 < l) {
    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
    s.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) s[r] === void 0 && (s[r] = l[r]);
  return {
    $$typeof: to,
    type: e,
    key: i,
    ref: a,
    props: s,
    _owner: au.current,
  };
}
function a2(e, t) {
  return {
    $$typeof: to,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function lu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === to;
}
function l2(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Yd = /\/+/g;
function qa(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? l2("" + e.key)
    : t.toString(36);
}
function Fo(e, t, n, r, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case to:
          case G0:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (s = s(a)),
      (e = r === "" ? "." + qa(a, 0) : r),
      Kd(s)
        ? ((n = ""),
          e != null && (n = e.replace(Yd, "$&/") + "/"),
          Fo(s, t, n, "", function (u) {
            return u;
          }))
        : s != null &&
          (lu(s) &&
            (s = a2(
              s,
              n +
                (!s.key || (a && a.key === s.key)
                  ? ""
                  : ("" + s.key).replace(Yd, "$&/") + "/") +
                e,
            )),
          t.push(s)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Kd(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var c = r + qa(i, l);
      a += Fo(i, t, n, c, s);
    }
  else if (((c = i2(e)), typeof c == "function"))
    for (e = c.call(e), l = 0; !(i = e.next()).done; )
      ((i = i.value), (c = r + qa(i, l++)), (a += Fo(i, t, n, c, s)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return a;
}
function yo(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    Fo(e, r, "", "", function (i) {
      return t.call(n, i, s++);
    }),
    r
  );
}
function c2(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Fe = { current: null },
  $o = { transition: null },
  u2 = {
    ReactCurrentDispatcher: Fe,
    ReactCurrentBatchConfig: $o,
    ReactCurrentOwner: au,
  };
V.Children = {
  map: yo,
  forEach: function (e, t, n) {
    yo(
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
      yo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      yo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!lu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
V.Component = Qr;
V.Fragment = Q0;
V.Profiler = Z0;
V.PureComponent = ou;
V.StrictMode = J0;
V.Suspense = r2;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = u2;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = bp({}, e.props),
    s = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = au.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (c in t)
      Pp.call(t, c) &&
        !kp.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    l = Array(c);
    for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: to, type: e.type, key: s, ref: i, props: r, _owner: a };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: t2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: e2, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = Np;
V.createFactory = function (e) {
  var t = Np.bind(null, e);
  return ((t.type = e), t);
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: n2, render: e };
};
V.isValidElement = lu;
V.lazy = function (e) {
  return { $$typeof: o2, _payload: { _status: -1, _result: e }, _init: c2 };
};
V.memo = function (e, t) {
  return { $$typeof: s2, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = $o.transition;
  $o.transition = {};
  try {
    e();
  } finally {
    $o.transition = t;
  }
};
V.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
V.useCallback = function (e, t) {
  return Fe.current.useCallback(e, t);
};
V.useContext = function (e) {
  return Fe.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return Fe.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return Fe.current.useEffect(e, t);
};
V.useId = function () {
  return Fe.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return Fe.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return Fe.current.useRef(e);
};
V.useState = function (e) {
  return Fe.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return Fe.current.useTransition();
};
V.version = "18.2.0";
xp.exports = V;
var b = xp.exports;
const Kt = X0(b),
  d2 = Y0({ __proto__: null, default: Kt }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var f2 = b,
  h2 = Symbol.for("react.element"),
  p2 = Symbol.for("react.fragment"),
  m2 = Object.prototype.hasOwnProperty,
  g2 = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  v2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ep(e, t, n) {
  var r,
    s = {},
    i = null,
    a = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref));
  for (r in t) m2.call(t, r) && !v2.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: h2,
    type: e,
    key: i,
    ref: a,
    props: s,
    _owner: g2.current,
  };
}
Ki.Fragment = p2;
Ki.jsx = Ep;
Ki.jsxs = Ep;
yp.exports = Ki;
var o = yp.exports,
  Il = {},
  Rp = { exports: {} },
  st = {},
  Tp = { exports: {} },
  Ap = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, I) {
    var H = A.length;
    A.push(I);
    e: for (; 0 < H; ) {
      var q = (H - 1) >>> 1,
        te = A[q];
      if (0 < s(te, I)) ((A[q] = I), (A[H] = te), (H = q));
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var I = A[0],
      H = A.pop();
    if (H !== I) {
      A[0] = H;
      e: for (var q = 0, te = A.length, Tt = te >>> 1; q < Tt; ) {
        var He = 2 * (q + 1) - 1,
          rn = A[He],
          $t = He + 1,
          pr = A[$t];
        if (0 > s(rn, H))
          $t < te && 0 > s(pr, rn)
            ? ((A[q] = pr), (A[$t] = H), (q = $t))
            : ((A[q] = rn), (A[He] = H), (q = He));
        else if ($t < te && 0 > s(pr, H)) ((A[q] = pr), (A[$t] = H), (q = $t));
        else break e;
      }
    }
    return I;
  }
  function s(A, I) {
    var H = A.sortIndex - I.sortIndex;
    return H !== 0 ? H : A.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var c = [],
    u = [],
    d = 1,
    f = null,
    p = 3,
    y = !1,
    g = !1,
    x = !1,
    v = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(A) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= A)
        (r(u), (I.sortIndex = I.expirationTime), t(c, I));
      else break;
      I = n(u);
    }
  }
  function j(A) {
    if (((x = !1), w(A), !g))
      if (n(c) !== null) ((g = !0), ce(S));
      else {
        var I = n(u);
        I !== null && wt(j, I.startTime - A);
      }
  }
  function S(A, I) {
    ((g = !1), x && ((x = !1), m(R), (R = -1)), (y = !0));
    var H = p;
    try {
      for (
        w(I), f = n(c);
        f !== null && (!(f.expirationTime > I) || (A && !$()));
      ) {
        var q = f.callback;
        if (typeof q == "function") {
          ((f.callback = null), (p = f.priorityLevel));
          var te = q(f.expirationTime <= I);
          ((I = e.unstable_now()),
            typeof te == "function" ? (f.callback = te) : f === n(c) && r(c),
            w(I));
        } else r(c);
        f = n(c);
      }
      if (f !== null) var Tt = !0;
      else {
        var He = n(u);
        (He !== null && wt(j, He.startTime - I), (Tt = !1));
      }
      return Tt;
    } finally {
      ((f = null), (p = H), (y = !1));
    }
  }
  var C = !1,
    E = null,
    R = -1,
    L = 5,
    N = -1;
  function $() {
    return !(e.unstable_now() - N < L);
  }
  function O() {
    if (E !== null) {
      var A = e.unstable_now();
      N = A;
      var I = !0;
      try {
        I = E(!0, A);
      } finally {
        I ? M() : ((C = !1), (E = null));
      }
    } else C = !1;
  }
  var M;
  if (typeof h == "function")
    M = function () {
      h(O);
    };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(),
      re = z.port2;
    ((z.port1.onmessage = O),
      (M = function () {
        re.postMessage(null);
      }));
  } else
    M = function () {
      v(O, 0);
    };
  function ce(A) {
    ((E = A), C || ((C = !0), M()));
  }
  function wt(A, I) {
    R = v(function () {
      A(e.unstable_now());
    }, I);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || y || ((g = !0), ce(S));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (L = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (A) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = p;
      }
      var H = p;
      p = I;
      try {
        return A();
      } finally {
        p = H;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, I) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var H = p;
      p = A;
      try {
        return I();
      } finally {
        p = H;
      }
    }),
    (e.unstable_scheduleCallback = function (A, I, H) {
      var q = e.unstable_now();
      switch (
        (typeof H == "object" && H !== null
          ? ((H = H.delay), (H = typeof H == "number" && 0 < H ? q + H : q))
          : (H = q),
        A)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = H + te),
        (A = {
          id: d++,
          callback: I,
          priorityLevel: A,
          startTime: H,
          expirationTime: te,
          sortIndex: -1,
        }),
        H > q
          ? ((A.sortIndex = H),
            t(u, A),
            n(c) === null &&
              A === n(u) &&
              (x ? (m(R), (R = -1)) : (x = !0), wt(j, H - q)))
          : ((A.sortIndex = te), t(c, A), g || y || ((g = !0), ce(S))),
        A
      );
    }),
    (e.unstable_shouldYield = $),
    (e.unstable_wrapCallback = function (A) {
      var I = p;
      return function () {
        var H = p;
        p = I;
        try {
          return A.apply(this, arguments);
        } finally {
          p = H;
        }
      };
    }));
})(Ap);
Tp.exports = Ap;
var w2 = Tp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Op = b,
  tt = w2;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Lp = new Set(),
  Os = {};
function or(e, t) {
  (Ir(e, t), Ir(e + "Capture", t));
}
function Ir(e, t) {
  for (Os[e] = t, e = 0; e < t.length; e++) Lp.add(t[e]);
}
var Gt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Fl = Object.prototype.hasOwnProperty,
  y2 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Xd = {},
  Gd = {};
function x2(e) {
  return Fl.call(Gd, e)
    ? !0
    : Fl.call(Xd, e)
      ? !1
      : y2.test(e)
        ? (Gd[e] = !0)
        : ((Xd[e] = !0), !1);
}
function j2(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function b2(e, t, n, r) {
  if (t === null || typeof t > "u" || j2(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function $e(e, t, n, r, s, i, a) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a));
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ee[e] = new $e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ee[t] = new $e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ee[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ee[e] = new $e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ee[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ee[e] = new $e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ee[e] = new $e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ee[e] = new $e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ee[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var cu = /[\-:]([a-z])/g;
function uu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(cu, uu);
    Ee[t] = new $e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(cu, uu);
    Ee[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(cu, uu);
  Ee[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ee[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new $e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ee[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function du(e, t, n, r) {
  var s = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (b2(t, n, s, r) && (n = null),
    r || s === null
      ? x2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var tn = Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xo = Symbol.for("react.element"),
  gr = Symbol.for("react.portal"),
  vr = Symbol.for("react.fragment"),
  fu = Symbol.for("react.strict_mode"),
  $l = Symbol.for("react.profiler"),
  Dp = Symbol.for("react.provider"),
  Mp = Symbol.for("react.context"),
  hu = Symbol.for("react.forward_ref"),
  zl = Symbol.for("react.suspense"),
  Hl = Symbol.for("react.suspense_list"),
  pu = Symbol.for("react.memo"),
  on = Symbol.for("react.lazy"),
  _p = Symbol.for("react.offscreen"),
  Qd = Symbol.iterator;
function cs(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qd && e[Qd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var fe = Object.assign,
  Ka;
function ws(e) {
  if (Ka === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ka = (t && t[1]) || "";
    }
  return (
    `
` +
    Ka +
    e
  );
}
var Ya = !1;
function Xa(e, t) {
  if (!e || Ya) return "";
  Ya = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var s = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = s.length - 1,
          l = i.length - 1;
        1 <= a && 0 <= l && s[a] !== i[l];
      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (s[a] !== i[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || s[a] !== i[l])) {
                var c =
                  `
` + s[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    ((Ya = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? ws(e) : "";
}
function S2(e) {
  switch (e.tag) {
    case 5:
      return ws(e.type);
    case 16:
      return ws("Lazy");
    case 13:
      return ws("Suspense");
    case 19:
      return ws("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Xa(e.type, !1)), e);
    case 11:
      return ((e = Xa(e.type.render, !1)), e);
    case 1:
      return ((e = Xa(e.type, !0)), e);
    default:
      return "";
  }
}
function Ul(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case vr:
      return "Fragment";
    case gr:
      return "Portal";
    case $l:
      return "Profiler";
    case fu:
      return "StrictMode";
    case zl:
      return "Suspense";
    case Hl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Mp:
        return (e.displayName || "Context") + ".Consumer";
      case Dp:
        return (e._context.displayName || "Context") + ".Provider";
      case hu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case pu:
        return (
          (t = e.displayName || null),
          t !== null ? t : Ul(e.type) || "Memo"
        );
      case on:
        ((t = e._payload), (e = e._init));
        try {
          return Ul(e(t));
        } catch {}
    }
  return null;
}
function C2(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ul(t);
    case 8:
      return t === fu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Rn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Bp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function P2(e) {
  var t = Bp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (a) {
          ((r = "" + a), i.call(this, a));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function jo(e) {
  e._valueTracker || (e._valueTracker = P2(e));
}
function Ip(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Bp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function oi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Wl(e, t) {
  var n = t.checked;
  return fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Jd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Rn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Fp(e, t) {
  ((t = t.checked), t != null && du(e, "checked", t, !1));
}
function Vl(e, t) {
  Fp(e, t);
  var n = Rn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? ql(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ql(e, t.type, Rn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Zd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function ql(e, t, n) {
  (t !== "number" || oi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ys = Array.isArray;
function Er(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      ((s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Rn(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        ((e[s].selected = !0), r && (e[s].defaultSelected = !0));
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Kl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ef(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (ys(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Rn(n) };
}
function $p(e, t) {
  var n = Rn(t.value),
    r = Rn(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function tf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function zp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Yl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? zp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var bo,
  Hp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        bo = bo || document.createElement("div"),
          bo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = bo.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ls(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ss = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  k2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ss).forEach(function (e) {
  k2.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ss[t] = Ss[e]));
  });
});
function Up(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ss.hasOwnProperty(e) && Ss[e])
      ? ("" + t).trim()
      : t + "px";
}
function Wp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = Up(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s));
    }
}
var N2 = fe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Xl(e, t) {
  if (t) {
    if (N2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function Gl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Ql = null;
function mu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Jl = null,
  Rr = null,
  Tr = null;
function nf(e) {
  if ((e = so(e))) {
    if (typeof Jl != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = Ji(t)), Jl(e.stateNode, e.type, t));
  }
}
function Vp(e) {
  Rr ? (Tr ? Tr.push(e) : (Tr = [e])) : (Rr = e);
}
function qp() {
  if (Rr) {
    var e = Rr,
      t = Tr;
    if (((Tr = Rr = null), nf(e), t)) for (e = 0; e < t.length; e++) nf(t[e]);
  }
}
function Kp(e, t) {
  return e(t);
}
function Yp() {}
var Ga = !1;
function Xp(e, t, n) {
  if (Ga) return e(t, n);
  Ga = !0;
  try {
    return Kp(e, t, n);
  } finally {
    ((Ga = !1), (Rr !== null || Tr !== null) && (Yp(), qp()));
  }
}
function Ds(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ji(n);
  if (r === null) return null;
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
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var Zl = !1;
if (Gt)
  try {
    var us = {};
    (Object.defineProperty(us, "passive", {
      get: function () {
        Zl = !0;
      },
    }),
      window.addEventListener("test", us, us),
      window.removeEventListener("test", us, us));
  } catch {
    Zl = !1;
  }
function E2(e, t, n, r, s, i, a, l, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Cs = !1,
  ii = null,
  ai = !1,
  ec = null,
  R2 = {
    onError: function (e) {
      ((Cs = !0), (ii = e));
    },
  };
function T2(e, t, n, r, s, i, a, l, c) {
  ((Cs = !1), (ii = null), E2.apply(R2, arguments));
}
function A2(e, t, n, r, s, i, a, l, c) {
  if ((T2.apply(this, arguments), Cs)) {
    if (Cs) {
      var u = ii;
      ((Cs = !1), (ii = null));
    } else throw Error(T(198));
    ai || ((ai = !0), (ec = u));
  }
}
function ir(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Gp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function rf(e) {
  if (ir(e) !== e) throw Error(T(188));
}
function O2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ir(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === n) return (rf(s), e);
        if (i === r) return (rf(s), t);
        i = i.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) ((n = s), (r = i));
    else {
      for (var a = !1, l = s.child; l; ) {
        if (l === n) {
          ((a = !0), (n = s), (r = i));
          break;
        }
        if (l === r) {
          ((a = !0), (r = s), (n = i));
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = i.child; l; ) {
          if (l === n) {
            ((a = !0), (n = i), (r = s));
            break;
          }
          if (l === r) {
            ((a = !0), (r = i), (n = s));
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function Qp(e) {
  return ((e = O2(e)), e !== null ? Jp(e) : null);
}
function Jp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Jp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Zp = tt.unstable_scheduleCallback,
  sf = tt.unstable_cancelCallback,
  L2 = tt.unstable_shouldYield,
  D2 = tt.unstable_requestPaint,
  ve = tt.unstable_now,
  M2 = tt.unstable_getCurrentPriorityLevel,
  gu = tt.unstable_ImmediatePriority,
  em = tt.unstable_UserBlockingPriority,
  li = tt.unstable_NormalPriority,
  _2 = tt.unstable_LowPriority,
  tm = tt.unstable_IdlePriority,
  Yi = null,
  Mt = null;
function B2(e) {
  if (Mt && typeof Mt.onCommitFiberRoot == "function")
    try {
      Mt.onCommitFiberRoot(Yi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Pt = Math.clz32 ? Math.clz32 : $2,
  I2 = Math.log,
  F2 = Math.LN2;
function $2(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((I2(e) / F2) | 0)) | 0);
}
var So = 64,
  Co = 4194304;
function xs(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ci(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~s;
    l !== 0 ? (r = xs(l)) : ((i &= a), i !== 0 && (r = xs(i)));
  } else ((a = n & ~s), a !== 0 ? (r = xs(a)) : i !== 0 && (r = xs(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Pt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s));
  return r;
}
function z2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function H2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var a = 31 - Pt(i),
      l = 1 << a,
      c = s[a];
    (c === -1
      ? (!(l & n) || l & r) && (s[a] = z2(l, t))
      : c <= t && (e.expiredLanes |= l),
      (i &= ~l));
  }
}
function tc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function nm() {
  var e = So;
  return ((So <<= 1), !(So & 4194240) && (So = 64), e);
}
function Qa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function no(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Pt(t)),
    (e[t] = n));
}
function U2(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - Pt(n),
      i = 1 << s;
    ((t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i));
  }
}
function vu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Pt(n),
      s = 1 << r;
    ((s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s));
  }
}
var J = 0;
function rm(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var sm,
  wu,
  om,
  im,
  am,
  nc = !1,
  Po = [],
  vn = null,
  wn = null,
  yn = null,
  Ms = new Map(),
  _s = new Map(),
  ln = [],
  W2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function of(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vn = null;
      break;
    case "dragenter":
    case "dragleave":
      wn = null;
      break;
    case "mouseover":
    case "mouseout":
      yn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ms.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _s.delete(t.pointerId);
  }
}
function ds(e, t, n, r, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = so(t)), t !== null && wu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function V2(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return ((vn = ds(vn, e, t, n, r, s)), !0);
    case "dragenter":
      return ((wn = ds(wn, e, t, n, r, s)), !0);
    case "mouseover":
      return ((yn = ds(yn, e, t, n, r, s)), !0);
    case "pointerover":
      var i = s.pointerId;
      return (Ms.set(i, ds(Ms.get(i) || null, e, t, n, r, s)), !0);
    case "gotpointercapture":
      return (
        (i = s.pointerId),
        _s.set(i, ds(_s.get(i) || null, e, t, n, r, s)),
        !0
      );
  }
  return !1;
}
function lm(e) {
  var t = Hn(e.target);
  if (t !== null) {
    var n = ir(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Gp(n)), t !== null)) {
          ((e.blockedOn = t),
            am(e.priority, function () {
              om(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function zo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = rc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Ql = r), n.target.dispatchEvent(r), (Ql = null));
    } else return ((t = so(n)), t !== null && wu(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function af(e, t, n) {
  zo(e) && n.delete(t);
}
function q2() {
  ((nc = !1),
    vn !== null && zo(vn) && (vn = null),
    wn !== null && zo(wn) && (wn = null),
    yn !== null && zo(yn) && (yn = null),
    Ms.forEach(af),
    _s.forEach(af));
}
function fs(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    nc ||
      ((nc = !0),
      tt.unstable_scheduleCallback(tt.unstable_NormalPriority, q2)));
}
function Bs(e) {
  function t(s) {
    return fs(s, e);
  }
  if (0 < Po.length) {
    fs(Po[0], e);
    for (var n = 1; n < Po.length; n++) {
      var r = Po[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    vn !== null && fs(vn, e),
      wn !== null && fs(wn, e),
      yn !== null && fs(yn, e),
      Ms.forEach(t),
      _s.forEach(t),
      n = 0;
    n < ln.length;
    n++
  )
    ((r = ln[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < ln.length && ((n = ln[0]), n.blockedOn === null); )
    (lm(n), n.blockedOn === null && ln.shift());
}
var Ar = tn.ReactCurrentBatchConfig,
  ui = !0;
function K2(e, t, n, r) {
  var s = J,
    i = Ar.transition;
  Ar.transition = null;
  try {
    ((J = 1), yu(e, t, n, r));
  } finally {
    ((J = s), (Ar.transition = i));
  }
}
function Y2(e, t, n, r) {
  var s = J,
    i = Ar.transition;
  Ar.transition = null;
  try {
    ((J = 4), yu(e, t, n, r));
  } finally {
    ((J = s), (Ar.transition = i));
  }
}
function yu(e, t, n, r) {
  if (ui) {
    var s = rc(e, t, n, r);
    if (s === null) (al(e, t, r, di, n), of(e, r));
    else if (V2(s, e, t, n, r)) r.stopPropagation();
    else if ((of(e, r), t & 4 && -1 < W2.indexOf(e))) {
      for (; s !== null; ) {
        var i = so(s);
        if (
          (i !== null && sm(i),
          (i = rc(e, t, n, r)),
          i === null && al(e, t, r, di, n),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else al(e, t, r, null, n);
  }
}
var di = null;
function rc(e, t, n, r) {
  if (((di = null), (e = mu(r)), (e = Hn(e)), e !== null))
    if (((t = ir(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Gp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((di = e), null);
}
function cm(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (M2()) {
        case gu:
          return 1;
        case em:
          return 4;
        case li:
        case _2:
          return 16;
        case tm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dn = null,
  xu = null,
  Ho = null;
function um() {
  if (Ho) return Ho;
  var e,
    t = xu,
    n = t.length,
    r,
    s = "value" in dn ? dn.value : dn.textContent,
    i = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === s[i - r]; r++);
  return (Ho = s.slice(e, 1 < r ? 1 - r : void 0));
}
function Uo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ko() {
  return !0;
}
function lf() {
  return !1;
}
function ot(e) {
  function t(n, r, s, i, a) {
    ((this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null));
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ko
        : lf),
      (this.isPropagationStopped = lf),
      this
    );
  }
  return (
    fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ko));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ko));
      },
      persist: function () {},
      isPersistent: ko,
    }),
    t
  );
}
var Jr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ju = ot(Jr),
  ro = fe({}, Jr, { view: 0, detail: 0 }),
  X2 = ot(ro),
  Ja,
  Za,
  hs,
  Xi = fe({}, ro, {
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
    getModifierState: bu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== hs &&
            (hs && e.type === "mousemove"
              ? ((Ja = e.screenX - hs.screenX), (Za = e.screenY - hs.screenY))
              : (Za = Ja = 0),
            (hs = e)),
          Ja);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Za;
    },
  }),
  cf = ot(Xi),
  G2 = fe({}, Xi, { dataTransfer: 0 }),
  Q2 = ot(G2),
  J2 = fe({}, ro, { relatedTarget: 0 }),
  el = ot(J2),
  Z2 = fe({}, Jr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  e1 = ot(Z2),
  t1 = fe({}, Jr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  n1 = ot(t1),
  r1 = fe({}, Jr, { data: 0 }),
  uf = ot(r1),
  s1 = {
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
  o1 = {
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
  i1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function a1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = i1[e]) ? !!t[e] : !1;
}
function bu() {
  return a1;
}
var l1 = fe({}, ro, {
    key: function (e) {
      if (e.key) {
        var t = s1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Uo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? o1[e.keyCode] || "Unidentified"
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
    getModifierState: bu,
    charCode: function (e) {
      return e.type === "keypress" ? Uo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Uo(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  c1 = ot(l1),
  u1 = fe({}, Xi, {
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
  df = ot(u1),
  d1 = fe({}, ro, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bu,
  }),
  f1 = ot(d1),
  h1 = fe({}, Jr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  p1 = ot(h1),
  m1 = fe({}, Xi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  g1 = ot(m1),
  v1 = [9, 13, 27, 32],
  Su = Gt && "CompositionEvent" in window,
  Ps = null;
Gt && "documentMode" in document && (Ps = document.documentMode);
var w1 = Gt && "TextEvent" in window && !Ps,
  dm = Gt && (!Su || (Ps && 8 < Ps && 11 >= Ps)),
  ff = " ",
  hf = !1;
function fm(e, t) {
  switch (e) {
    case "keyup":
      return v1.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function hm(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var wr = !1;
function y1(e, t) {
  switch (e) {
    case "compositionend":
      return hm(t);
    case "keypress":
      return t.which !== 32 ? null : ((hf = !0), ff);
    case "textInput":
      return ((e = t.data), e === ff && hf ? null : e);
    default:
      return null;
  }
}
function x1(e, t) {
  if (wr)
    return e === "compositionend" || (!Su && fm(e, t))
      ? ((e = um()), (Ho = xu = dn = null), (wr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return dm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var j1 = {
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
function pf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!j1[e.type] : t === "textarea";
}
function pm(e, t, n, r) {
  (Vp(r),
    (t = fi(t, "onChange")),
    0 < t.length &&
      ((n = new ju("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var ks = null,
  Is = null;
function b1(e) {
  Pm(e, 0);
}
function Gi(e) {
  var t = jr(e);
  if (Ip(t)) return e;
}
function S1(e, t) {
  if (e === "change") return t;
}
var mm = !1;
if (Gt) {
  var tl;
  if (Gt) {
    var nl = "oninput" in document;
    if (!nl) {
      var mf = document.createElement("div");
      (mf.setAttribute("oninput", "return;"),
        (nl = typeof mf.oninput == "function"));
    }
    tl = nl;
  } else tl = !1;
  mm = tl && (!document.documentMode || 9 < document.documentMode);
}
function gf() {
  ks && (ks.detachEvent("onpropertychange", gm), (Is = ks = null));
}
function gm(e) {
  if (e.propertyName === "value" && Gi(Is)) {
    var t = [];
    (pm(t, Is, e, mu(e)), Xp(b1, t));
  }
}
function C1(e, t, n) {
  e === "focusin"
    ? (gf(), (ks = t), (Is = n), ks.attachEvent("onpropertychange", gm))
    : e === "focusout" && gf();
}
function P1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Gi(Is);
}
function k1(e, t) {
  if (e === "click") return Gi(t);
}
function N1(e, t) {
  if (e === "input" || e === "change") return Gi(t);
}
function E1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Nt = typeof Object.is == "function" ? Object.is : E1;
function Fs(e, t) {
  if (Nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Fl.call(t, s) || !Nt(e[s], t[s])) return !1;
  }
  return !0;
}
function vf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function wf(e, t) {
  var n = vf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = vf(n);
  }
}
function vm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? vm(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function wm() {
  for (var e = window, t = oi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = oi(e.document);
  }
  return t;
}
function Cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function R1(e) {
  var t = wm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    vm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Cu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        ((r = r.end === void 0 ? i : Math.min(r.end, s)),
          !e.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = wf(n, i)));
        var a = wf(n, r);
        s &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var T1 = Gt && "documentMode" in document && 11 >= document.documentMode,
  yr = null,
  sc = null,
  Ns = null,
  oc = !1;
function yf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  oc ||
    yr == null ||
    yr !== oi(r) ||
    ((r = yr),
    "selectionStart" in r && Cu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ns && Fs(Ns, r)) ||
      ((Ns = r),
      (r = fi(sc, "onSelect")),
      0 < r.length &&
        ((t = new ju("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = yr))));
}
function No(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var xr = {
    animationend: No("Animation", "AnimationEnd"),
    animationiteration: No("Animation", "AnimationIteration"),
    animationstart: No("Animation", "AnimationStart"),
    transitionend: No("Transition", "TransitionEnd"),
  },
  rl = {},
  ym = {};
Gt &&
  ((ym = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete xr.animationend.animation,
    delete xr.animationiteration.animation,
    delete xr.animationstart.animation),
  "TransitionEvent" in window || delete xr.transitionend.transition);
function Qi(e) {
  if (rl[e]) return rl[e];
  if (!xr[e]) return e;
  var t = xr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ym) return (rl[e] = t[n]);
  return e;
}
var xm = Qi("animationend"),
  jm = Qi("animationiteration"),
  bm = Qi("animationstart"),
  Sm = Qi("transitionend"),
  Cm = new Map(),
  xf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Ln(e, t) {
  (Cm.set(e, t), or(t, [e]));
}
for (var sl = 0; sl < xf.length; sl++) {
  var ol = xf[sl],
    A1 = ol.toLowerCase(),
    O1 = ol[0].toUpperCase() + ol.slice(1);
  Ln(A1, "on" + O1);
}
Ln(xm, "onAnimationEnd");
Ln(jm, "onAnimationIteration");
Ln(bm, "onAnimationStart");
Ln("dblclick", "onDoubleClick");
Ln("focusin", "onFocus");
Ln("focusout", "onBlur");
Ln(Sm, "onTransitionEnd");
Ir("onMouseEnter", ["mouseout", "mouseover"]);
Ir("onMouseLeave", ["mouseout", "mouseover"]);
Ir("onPointerEnter", ["pointerout", "pointerover"]);
Ir("onPointerLeave", ["pointerout", "pointerover"]);
or(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
or(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
or("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
or(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
or(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
or(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var js =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  L1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(js));
function jf(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), A2(r, t, void 0, e), (e.currentTarget = null));
}
function Pm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            c = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), c !== i && s.isPropagationStopped())) break e;
          (jf(s, l, u), (i = c));
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (c = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            c !== i && s.isPropagationStopped())
          )
            break e;
          (jf(s, l, u), (i = c));
        }
    }
  }
  if (ai) throw ((e = ec), (ai = !1), (ec = null), e);
}
function oe(e, t) {
  var n = t[uc];
  n === void 0 && (n = t[uc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (km(t, e, 2, !1), n.add(r));
}
function il(e, t, n) {
  var r = 0;
  (t && (r |= 4), km(n, e, r, t));
}
var Eo = "_reactListening" + Math.random().toString(36).slice(2);
function $s(e) {
  if (!e[Eo]) {
    ((e[Eo] = !0),
      Lp.forEach(function (n) {
        n !== "selectionchange" && (L1.has(n) || il(n, !1, e), il(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Eo] || ((t[Eo] = !0), il("selectionchange", !1, t));
  }
}
function km(e, t, n, r) {
  switch (cm(t)) {
    case 1:
      var s = K2;
      break;
    case 4:
      s = Y2;
      break;
    default:
      s = yu;
  }
  ((n = s.bind(null, t, n, e)),
    (s = void 0),
    !Zl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1));
}
function al(e, t, n, r, s) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === s || (l.nodeType === 8 && l.parentNode === s)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var c = a.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = a.stateNode.containerInfo),
              c === s || (c.nodeType === 8 && c.parentNode === s))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = Hn(l)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            r = i = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Xp(function () {
    var u = i,
      d = mu(n),
      f = [];
    e: {
      var p = Cm.get(e);
      if (p !== void 0) {
        var y = ju,
          g = e;
        switch (e) {
          case "keypress":
            if (Uo(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = c1;
            break;
          case "focusin":
            ((g = "focus"), (y = el));
            break;
          case "focusout":
            ((g = "blur"), (y = el));
            break;
          case "beforeblur":
          case "afterblur":
            y = el;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = cf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Q2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = f1;
            break;
          case xm:
          case jm:
          case bm:
            y = e1;
            break;
          case Sm:
            y = p1;
            break;
          case "scroll":
            y = X2;
            break;
          case "wheel":
            y = g1;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = n1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = df;
        }
        var x = (t & 4) !== 0,
          v = !x && e === "scroll",
          m = x ? (p !== null ? p + "Capture" : null) : p;
        x = [];
        for (var h = u, w; h !== null; ) {
          w = h;
          var j = w.stateNode;
          if (
            (w.tag === 5 &&
              j !== null &&
              ((w = j),
              m !== null && ((j = Ds(h, m)), j != null && x.push(zs(h, j, w)))),
            v)
          )
            break;
          h = h.return;
        }
        0 < x.length &&
          ((p = new y(p, g, null, n, d)), f.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Ql &&
            (g = n.relatedTarget || n.fromElement) &&
            (Hn(g) || g[Qt]))
        )
          break e;
        if (
          (y || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          y
            ? ((g = n.relatedTarget || n.toElement),
              (y = u),
              (g = g ? Hn(g) : null),
              g !== null &&
                ((v = ir(g)), g !== v || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((y = null), (g = u)),
          y !== g)
        ) {
          if (
            ((x = cf),
            (j = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = df),
              (j = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (v = y == null ? p : jr(y)),
            (w = g == null ? p : jr(g)),
            (p = new x(j, h + "leave", y, n, d)),
            (p.target = v),
            (p.relatedTarget = w),
            (j = null),
            Hn(d) === u &&
              ((x = new x(m, h + "enter", g, n, d)),
              (x.target = w),
              (x.relatedTarget = v),
              (j = x)),
            (v = j),
            y && g)
          )
            t: {
              for (x = y, m = g, h = 0, w = x; w; w = mr(w)) h++;
              for (w = 0, j = m; j; j = mr(j)) w++;
              for (; 0 < h - w; ) ((x = mr(x)), h--);
              for (; 0 < w - h; ) ((m = mr(m)), w--);
              for (; h--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                ((x = mr(x)), (m = mr(m)));
              }
              x = null;
            }
          else x = null;
          (y !== null && bf(f, p, y, x, !1),
            g !== null && v !== null && bf(f, v, g, x, !0));
        }
      }
      e: {
        if (
          ((p = u ? jr(u) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === "select" || (y === "input" && p.type === "file"))
        )
          var S = S1;
        else if (pf(p))
          if (mm) S = N1;
          else {
            S = P1;
            var C = C1;
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (S = k1);
        if (S && (S = S(e, u))) {
          pm(f, S, n, d);
          break e;
        }
        (C && C(e, p, u),
          e === "focusout" &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === "number" &&
            ql(p, "number", p.value));
      }
      switch (((C = u ? jr(u) : window), e)) {
        case "focusin":
          (pf(C) || C.contentEditable === "true") &&
            ((yr = C), (sc = u), (Ns = null));
          break;
        case "focusout":
          Ns = sc = yr = null;
          break;
        case "mousedown":
          oc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((oc = !1), yf(f, n, d));
          break;
        case "selectionchange":
          if (T1) break;
        case "keydown":
        case "keyup":
          yf(f, n, d);
      }
      var E;
      if (Su)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        wr
          ? fm(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      (R &&
        (dm &&
          n.locale !== "ko" &&
          (wr || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && wr && (E = um())
            : ((dn = d),
              (xu = "value" in dn ? dn.value : dn.textContent),
              (wr = !0))),
        (C = fi(u, R)),
        0 < C.length &&
          ((R = new uf(R, e, null, n, d)),
          f.push({ event: R, listeners: C }),
          E ? (R.data = E) : ((E = hm(n)), E !== null && (R.data = E)))),
        (E = w1 ? y1(e, n) : x1(e, n)) &&
          ((u = fi(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new uf("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = E))));
    }
    Pm(f, t);
  });
}
function zs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function fi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      i = s.stateNode;
    (s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = Ds(e, n)),
      i != null && r.unshift(zs(e, i, s)),
      (i = Ds(e, t)),
      i != null && r.push(zs(e, i, s))),
      (e = e.return));
  }
  return r;
}
function mr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function bf(e, t, n, r, s) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      c = l.alternate,
      u = l.stateNode;
    if (c !== null && c === r) break;
    (l.tag === 5 &&
      u !== null &&
      ((l = u),
      s
        ? ((c = Ds(n, i)), c != null && a.unshift(zs(n, c, l)))
        : s || ((c = Ds(n, i)), c != null && a.push(zs(n, c, l)))),
      (n = n.return));
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var D1 = /\r\n?/g,
  M1 = /\u0000|\uFFFD/g;
function Sf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      D1,
      `
`,
    )
    .replace(M1, "");
}
function Ro(e, t, n) {
  if (((t = Sf(t)), Sf(e) !== t && n)) throw Error(T(425));
}
function hi() {}
var ic = null,
  ac = null;
function lc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var cc = typeof setTimeout == "function" ? setTimeout : void 0,
  _1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Cf = typeof Promise == "function" ? Promise : void 0,
  B1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Cf < "u"
        ? function (e) {
            return Cf.resolve(null).then(e).catch(I1);
          }
        : cc;
function I1(e) {
  setTimeout(function () {
    throw e;
  });
}
function ll(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(s), Bs(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Bs(t);
}
function xn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Pf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Zr = Math.random().toString(36).slice(2),
  Dt = "__reactFiber$" + Zr,
  Hs = "__reactProps$" + Zr,
  Qt = "__reactContainer$" + Zr,
  uc = "__reactEvents$" + Zr,
  F1 = "__reactListeners$" + Zr,
  $1 = "__reactHandles$" + Zr;
function Hn(e) {
  var t = e[Dt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Qt] || n[Dt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Pf(e); e !== null; ) {
          if ((n = e[Dt])) return n;
          e = Pf(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function so(e) {
  return (
    (e = e[Dt] || e[Qt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function jr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function Ji(e) {
  return e[Hs] || null;
}
var dc = [],
  br = -1;
function Dn(e) {
  return { current: e };
}
function ie(e) {
  0 > br || ((e.current = dc[br]), (dc[br] = null), br--);
}
function se(e, t) {
  (br++, (dc[br] = e.current), (e.current = t));
}
var Tn = {},
  De = Dn(Tn),
  Ve = Dn(!1),
  Qn = Tn;
function Fr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Tn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function qe(e) {
  return ((e = e.childContextTypes), e != null);
}
function pi() {
  (ie(Ve), ie(De));
}
function kf(e, t, n) {
  if (De.current !== Tn) throw Error(T(168));
  (se(De, t), se(Ve, n));
}
function Nm(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(T(108, C2(e) || "Unknown", s));
  return fe({}, n, r);
}
function mi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Tn),
    (Qn = De.current),
    se(De, e),
    se(Ve, Ve.current),
    !0
  );
}
function Nf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  (n
    ? ((e = Nm(e, t, Qn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ie(Ve),
      ie(De),
      se(De, e))
    : ie(Ve),
    se(Ve, n));
}
var Wt = null,
  Zi = !1,
  cl = !1;
function Em(e) {
  Wt === null ? (Wt = [e]) : Wt.push(e);
}
function z1(e) {
  ((Zi = !0), Em(e));
}
function Mn() {
  if (!cl && Wt !== null) {
    cl = !0;
    var e = 0,
      t = J;
    try {
      var n = Wt;
      for (J = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Wt = null), (Zi = !1));
    } catch (s) {
      throw (Wt !== null && (Wt = Wt.slice(e + 1)), Zp(gu, Mn), s);
    } finally {
      ((J = t), (cl = !1));
    }
  }
  return null;
}
var Sr = [],
  Cr = 0,
  gi = null,
  vi = 0,
  ut = [],
  dt = 0,
  Jn = null,
  Vt = 1,
  qt = "";
function Fn(e, t) {
  ((Sr[Cr++] = vi), (Sr[Cr++] = gi), (gi = e), (vi = t));
}
function Rm(e, t, n) {
  ((ut[dt++] = Vt), (ut[dt++] = qt), (ut[dt++] = Jn), (Jn = e));
  var r = Vt;
  e = qt;
  var s = 32 - Pt(r) - 1;
  ((r &= ~(1 << s)), (n += 1));
  var i = 32 - Pt(t) + s;
  if (30 < i) {
    var a = s - (s % 5);
    ((i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (s -= a),
      (Vt = (1 << (32 - Pt(t) + s)) | (n << s) | r),
      (qt = i + e));
  } else ((Vt = (1 << i) | (n << s) | r), (qt = e));
}
function Pu(e) {
  e.return !== null && (Fn(e, 1), Rm(e, 1, 0));
}
function ku(e) {
  for (; e === gi; )
    ((gi = Sr[--Cr]), (Sr[Cr] = null), (vi = Sr[--Cr]), (Sr[Cr] = null));
  for (; e === Jn; )
    ((Jn = ut[--dt]),
      (ut[dt] = null),
      (qt = ut[--dt]),
      (ut[dt] = null),
      (Vt = ut[--dt]),
      (ut[dt] = null));
}
var et = null,
  Ze = null,
  le = !1,
  St = null;
function Tm(e, t) {
  var n = ft(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Ef(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (et = e), (Ze = xn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (et = e), (Ze = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Jn !== null ? { id: Vt, overflow: qt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ft(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (et = e),
            (Ze = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function fc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function hc(e) {
  if (le) {
    var t = Ze;
    if (t) {
      var n = t;
      if (!Ef(e, t)) {
        if (fc(e)) throw Error(T(418));
        t = xn(n.nextSibling);
        var r = et;
        t && Ef(e, t)
          ? Tm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (et = e));
      }
    } else {
      if (fc(e)) throw Error(T(418));
      ((e.flags = (e.flags & -4097) | 2), (le = !1), (et = e));
    }
  }
}
function Rf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  et = e;
}
function To(e) {
  if (e !== et) return !1;
  if (!le) return (Rf(e), (le = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !lc(e.type, e.memoizedProps))),
    t && (t = Ze))
  ) {
    if (fc(e)) throw (Am(), Error(T(418)));
    for (; t; ) (Tm(e, t), (t = xn(t.nextSibling)));
  }
  if ((Rf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ze = xn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ze = null;
    }
  } else Ze = et ? xn(e.stateNode.nextSibling) : null;
  return !0;
}
function Am() {
  for (var e = Ze; e; ) e = xn(e.nextSibling);
}
function $r() {
  ((Ze = et = null), (le = !1));
}
function Nu(e) {
  St === null ? (St = [e]) : St.push(e);
}
var H1 = tn.ReactCurrentBatchConfig;
function jt(e, t) {
  if (e && e.defaultProps) {
    ((t = fe({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var wi = Dn(null),
  yi = null,
  Pr = null,
  Eu = null;
function Ru() {
  Eu = Pr = yi = null;
}
function Tu(e) {
  var t = wi.current;
  (ie(wi), (e._currentValue = t));
}
function pc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Or(e, t) {
  ((yi = e),
    (Eu = Pr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (We = !0), (e.firstContext = null)));
}
function pt(e) {
  var t = e._currentValue;
  if (Eu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Pr === null)) {
      if (yi === null) throw Error(T(308));
      ((Pr = e), (yi.dependencies = { lanes: 0, firstContext: e }));
    } else Pr = Pr.next = e;
  return t;
}
var Un = null;
function Au(e) {
  Un === null ? (Un = [e]) : Un.push(e);
}
function Om(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), Au(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    Jt(e, r)
  );
}
function Jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var an = !1;
function Ou(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Lm(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function jn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Y & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      Jt(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), Au(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    Jt(e, n)
  );
}
function Wo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), vu(e, n));
  }
}
function Tf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (s = i = a) : (i = i.next = a), (n = n.next));
      } while (n !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function xi(e, t, n, r) {
  var s = e.updateQueue;
  an = !1;
  var i = s.firstBaseUpdate,
    a = s.lastBaseUpdate,
    l = s.shared.pending;
  if (l !== null) {
    s.shared.pending = null;
    var c = l,
      u = c.next;
    ((c.next = null), a === null ? (i = u) : (a.next = u), (a = c));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== a &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = c)));
  }
  if (i !== null) {
    var f = s.baseState;
    ((a = 0), (d = u = c = null), (l = i));
    do {
      var p = l.lane,
        y = l.eventTime;
      if ((r & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var g = e,
            x = l;
          switch (((p = t), (y = n), x.tag)) {
            case 1:
              if (((g = x.payload), typeof g == "function")) {
                f = g.call(y, f, p);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = x.payload),
                (p = typeof g == "function" ? g.call(y, f, p) : g),
                p == null)
              )
                break e;
              f = fe({}, f, p);
              break e;
            case 2:
              an = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (p = s.effects),
          p === null ? (s.effects = [l]) : p.push(l));
      } else
        ((y = {
          eventTime: y,
          lane: p,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = y), (c = f)) : (d = d.next = y),
          (a |= p));
      if (((l = l.next), l === null)) {
        if (((l = s.shared.pending), l === null)) break;
        ((p = l),
          (l = p.next),
          (p.next = null),
          (s.lastBaseUpdate = p),
          (s.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (c = f),
      (s.baseState = c),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = d),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do ((a |= s.lane), (s = s.next));
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    ((er |= a), (e.lanes = a), (e.memoizedState = f));
  }
}
function Af(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(T(191, s));
        s.call(r);
      }
    }
}
var Dm = new Op.Component().refs;
function mc(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var ea = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ir(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      s = Sn(e),
      i = Yt(r, s);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = jn(e, i, s)),
      t !== null && (kt(t, e, s, r), Wo(t, e, s)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      s = Sn(e),
      i = Yt(r, s);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = jn(e, i, s)),
      t !== null && (kt(t, e, s, r), Wo(t, e, s)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Be(),
      r = Sn(e),
      s = Yt(n, r);
    ((s.tag = 2),
      t != null && (s.callback = t),
      (t = jn(e, s, r)),
      t !== null && (kt(t, e, r, n), Wo(t, e, r)));
  },
};
function Of(e, t, n, r, s, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Fs(n, r) || !Fs(s, i)
        : !0
  );
}
function Mm(e, t, n) {
  var r = !1,
    s = Tn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = pt(i))
      : ((s = qe(t) ? Qn : De.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Fr(e, s) : Tn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ea),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Lf(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ea.enqueueReplaceState(t, t.state, null));
}
function gc(e, t, n, r) {
  var s = e.stateNode;
  ((s.props = n), (s.state = e.memoizedState), (s.refs = Dm), Ou(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (s.context = pt(i))
    : ((i = qe(t) ? Qn : De.current), (s.context = Fr(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (mc(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && ea.enqueueReplaceState(s, s.state, null),
      xi(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308));
}
function ps(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var s = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var l = s.refs;
            (l === Dm && (l = s.refs = {}),
              a === null ? delete l[i] : (l[i] = a));
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function Ao(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Df(e) {
  var t = e._init;
  return t(e._payload);
}
function _m(e) {
  function t(m, h) {
    if (e) {
      var w = m.deletions;
      w === null ? ((m.deletions = [h]), (m.flags |= 16)) : w.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) (t(m, h), (h = h.sibling));
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      (h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling));
    return m;
  }
  function s(m, h) {
    return ((m = Cn(m, h)), (m.index = 0), (m.sibling = null), m);
  }
  function i(m, h, w) {
    return (
      (m.index = w),
      e
        ? ((w = m.alternate),
          w !== null
            ? ((w = w.index), w < h ? ((m.flags |= 2), h) : w)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function a(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function l(m, h, w, j) {
    return h === null || h.tag !== 6
      ? ((h = gl(w, m.mode, j)), (h.return = m), h)
      : ((h = s(h, w)), (h.return = m), h);
  }
  function c(m, h, w, j) {
    var S = w.type;
    return S === vr
      ? d(m, h, w.props.children, j, w.key)
      : h !== null &&
          (h.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === on &&
              Df(S) === h.type))
        ? ((j = s(h, w.props)), (j.ref = ps(m, h, w)), (j.return = m), j)
        : ((j = Go(w.type, w.key, w.props, null, m.mode, j)),
          (j.ref = ps(m, h, w)),
          (j.return = m),
          j);
  }
  function u(m, h, w, j) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== w.containerInfo ||
      h.stateNode.implementation !== w.implementation
      ? ((h = vl(w, m.mode, j)), (h.return = m), h)
      : ((h = s(h, w.children || [])), (h.return = m), h);
  }
  function d(m, h, w, j, S) {
    return h === null || h.tag !== 7
      ? ((h = Kn(w, m.mode, j, S)), (h.return = m), h)
      : ((h = s(h, w)), (h.return = m), h);
  }
  function f(m, h, w) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return ((h = gl("" + h, m.mode, w)), (h.return = m), h);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case xo:
          return (
            (w = Go(h.type, h.key, h.props, null, m.mode, w)),
            (w.ref = ps(m, null, h)),
            (w.return = m),
            w
          );
        case gr:
          return ((h = vl(h, m.mode, w)), (h.return = m), h);
        case on:
          var j = h._init;
          return f(m, j(h._payload), w);
      }
      if (ys(h) || cs(h))
        return ((h = Kn(h, m.mode, w, null)), (h.return = m), h);
      Ao(m, h);
    }
    return null;
  }
  function p(m, h, w, j) {
    var S = h !== null ? h.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return S !== null ? null : l(m, h, "" + w, j);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case xo:
          return w.key === S ? c(m, h, w, j) : null;
        case gr:
          return w.key === S ? u(m, h, w, j) : null;
        case on:
          return ((S = w._init), p(m, h, S(w._payload), j));
      }
      if (ys(w) || cs(w)) return S !== null ? null : d(m, h, w, j, null);
      Ao(m, w);
    }
    return null;
  }
  function y(m, h, w, j, S) {
    if ((typeof j == "string" && j !== "") || typeof j == "number")
      return ((m = m.get(w) || null), l(h, m, "" + j, S));
    if (typeof j == "object" && j !== null) {
      switch (j.$$typeof) {
        case xo:
          return (
            (m = m.get(j.key === null ? w : j.key) || null),
            c(h, m, j, S)
          );
        case gr:
          return (
            (m = m.get(j.key === null ? w : j.key) || null),
            u(h, m, j, S)
          );
        case on:
          var C = j._init;
          return y(m, h, w, C(j._payload), S);
      }
      if (ys(j) || cs(j)) return ((m = m.get(w) || null), d(h, m, j, S, null));
      Ao(h, j);
    }
    return null;
  }
  function g(m, h, w, j) {
    for (
      var S = null, C = null, E = h, R = (h = 0), L = null;
      E !== null && R < w.length;
      R++
    ) {
      E.index > R ? ((L = E), (E = null)) : (L = E.sibling);
      var N = p(m, E, w[R], j);
      if (N === null) {
        E === null && (E = L);
        break;
      }
      (e && E && N.alternate === null && t(m, E),
        (h = i(N, h, R)),
        C === null ? (S = N) : (C.sibling = N),
        (C = N),
        (E = L));
    }
    if (R === w.length) return (n(m, E), le && Fn(m, R), S);
    if (E === null) {
      for (; R < w.length; R++)
        ((E = f(m, w[R], j)),
          E !== null &&
            ((h = i(E, h, R)),
            C === null ? (S = E) : (C.sibling = E),
            (C = E)));
      return (le && Fn(m, R), S);
    }
    for (E = r(m, E); R < w.length; R++)
      ((L = y(E, m, R, w[R], j)),
        L !== null &&
          (e && L.alternate !== null && E.delete(L.key === null ? R : L.key),
          (h = i(L, h, R)),
          C === null ? (S = L) : (C.sibling = L),
          (C = L)));
    return (
      e &&
        E.forEach(function ($) {
          return t(m, $);
        }),
      le && Fn(m, R),
      S
    );
  }
  function x(m, h, w, j) {
    var S = cs(w);
    if (typeof S != "function") throw Error(T(150));
    if (((w = S.call(w)), w == null)) throw Error(T(151));
    for (
      var C = (S = null), E = h, R = (h = 0), L = null, N = w.next();
      E !== null && !N.done;
      R++, N = w.next()
    ) {
      E.index > R ? ((L = E), (E = null)) : (L = E.sibling);
      var $ = p(m, E, N.value, j);
      if ($ === null) {
        E === null && (E = L);
        break;
      }
      (e && E && $.alternate === null && t(m, E),
        (h = i($, h, R)),
        C === null ? (S = $) : (C.sibling = $),
        (C = $),
        (E = L));
    }
    if (N.done) return (n(m, E), le && Fn(m, R), S);
    if (E === null) {
      for (; !N.done; R++, N = w.next())
        ((N = f(m, N.value, j)),
          N !== null &&
            ((h = i(N, h, R)),
            C === null ? (S = N) : (C.sibling = N),
            (C = N)));
      return (le && Fn(m, R), S);
    }
    for (E = r(m, E); !N.done; R++, N = w.next())
      ((N = y(E, m, R, N.value, j)),
        N !== null &&
          (e && N.alternate !== null && E.delete(N.key === null ? R : N.key),
          (h = i(N, h, R)),
          C === null ? (S = N) : (C.sibling = N),
          (C = N)));
    return (
      e &&
        E.forEach(function (O) {
          return t(m, O);
        }),
      le && Fn(m, R),
      S
    );
  }
  function v(m, h, w, j) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === vr &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case xo:
          e: {
            for (var S = w.key, C = h; C !== null; ) {
              if (C.key === S) {
                if (((S = w.type), S === vr)) {
                  if (C.tag === 7) {
                    (n(m, C.sibling),
                      (h = s(C, w.props.children)),
                      (h.return = m),
                      (m = h));
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === on &&
                    Df(S) === C.type)
                ) {
                  (n(m, C.sibling),
                    (h = s(C, w.props)),
                    (h.ref = ps(m, C, w)),
                    (h.return = m),
                    (m = h));
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            w.type === vr
              ? ((h = Kn(w.props.children, m.mode, j, w.key)),
                (h.return = m),
                (m = h))
              : ((j = Go(w.type, w.key, w.props, null, m.mode, j)),
                (j.ref = ps(m, h, w)),
                (j.return = m),
                (m = j));
          }
          return a(m);
        case gr:
          e: {
            for (C = w.key; h !== null; ) {
              if (h.key === C)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === w.containerInfo &&
                  h.stateNode.implementation === w.implementation
                ) {
                  (n(m, h.sibling),
                    (h = s(h, w.children || [])),
                    (h.return = m),
                    (m = h));
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            ((h = vl(w, m.mode, j)), (h.return = m), (m = h));
          }
          return a(m);
        case on:
          return ((C = w._init), v(m, h, C(w._payload), j));
      }
      if (ys(w)) return g(m, h, w, j);
      if (cs(w)) return x(m, h, w, j);
      Ao(m, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = s(h, w)), (h.return = m), (m = h))
          : (n(m, h), (h = gl(w, m.mode, j)), (h.return = m), (m = h)),
        a(m))
      : n(m, h);
  }
  return v;
}
var zr = _m(!0),
  Bm = _m(!1),
  oo = {},
  _t = Dn(oo),
  Us = Dn(oo),
  Ws = Dn(oo);
function Wn(e) {
  if (e === oo) throw Error(T(174));
  return e;
}
function Lu(e, t) {
  switch ((se(Ws, t), se(Us, e), se(_t, oo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Yl(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Yl(t, e)));
  }
  (ie(_t), se(_t, t));
}
function Hr() {
  (ie(_t), ie(Us), ie(Ws));
}
function Im(e) {
  Wn(Ws.current);
  var t = Wn(_t.current),
    n = Yl(t, e.type);
  t !== n && (se(Us, e), se(_t, n));
}
function Du(e) {
  Us.current === e && (ie(_t), ie(Us));
}
var ue = Dn(0);
function ji(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var ul = [];
function Mu() {
  for (var e = 0; e < ul.length; e++)
    ul[e]._workInProgressVersionPrimary = null;
  ul.length = 0;
}
var Vo = tn.ReactCurrentDispatcher,
  dl = tn.ReactCurrentBatchConfig,
  Zn = 0,
  de = null,
  xe = null,
  be = null,
  bi = !1,
  Es = !1,
  Vs = 0,
  U1 = 0;
function Re() {
  throw Error(T(321));
}
function _u(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Nt(e[n], t[n])) return !1;
  return !0;
}
function Bu(e, t, n, r, s, i) {
  if (
    ((Zn = i),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vo.current = e === null || e.memoizedState === null ? K1 : Y1),
    (e = n(r, s)),
    Es)
  ) {
    i = 0;
    do {
      if (((Es = !1), (Vs = 0), 25 <= i)) throw Error(T(301));
      ((i += 1),
        (be = xe = null),
        (t.updateQueue = null),
        (Vo.current = X1),
        (e = n(r, s)));
    } while (Es);
  }
  if (
    ((Vo.current = Si),
    (t = xe !== null && xe.next !== null),
    (Zn = 0),
    (be = xe = de = null),
    (bi = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function Iu() {
  var e = Vs !== 0;
  return ((Vs = 0), e);
}
function Ot() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (be === null ? (de.memoizedState = be = e) : (be = be.next = e), be);
}
function mt() {
  if (xe === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = be === null ? de.memoizedState : be.next;
  if (t !== null) ((be = t), (xe = e));
  else {
    if (e === null) throw Error(T(310));
    ((xe = e),
      (e = {
        memoizedState: xe.memoizedState,
        baseState: xe.baseState,
        baseQueue: xe.baseQueue,
        queue: xe.queue,
        next: null,
      }),
      be === null ? (de.memoizedState = be = e) : (be = be.next = e));
  }
  return be;
}
function qs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fl(e) {
  var t = mt(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = xe,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var a = s.next;
      ((s.next = i.next), (i.next = a));
    }
    ((r.baseQueue = s = i), (n.pending = null));
  }
  if (s !== null) {
    ((i = s.next), (r = r.baseState));
    var l = (a = null),
      c = null,
      u = i;
    do {
      var d = u.lane;
      if ((Zn & d) === d)
        (c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (c === null ? ((l = c = f), (a = r)) : (c = c.next = f),
          (de.lanes |= d),
          (er |= d));
      }
      u = u.next;
    } while (u !== null && u !== i);
    (c === null ? (a = r) : (c.next = l),
      Nt(r, t.memoizedState) || (We = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do ((i = s.lane), (de.lanes |= i), (er |= i), (s = s.next));
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hl(e) {
  var t = mt(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var a = (s = s.next);
    do ((i = e(i, a.action)), (a = a.next));
    while (a !== s);
    (Nt(i, t.memoizedState) || (We = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function Fm() {}
function $m(e, t) {
  var n = de,
    r = mt(),
    s = t(),
    i = !Nt(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (We = !0)),
    (r = r.queue),
    Fu(Um.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (be !== null && be.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ks(9, Hm.bind(null, n, r, s, t), void 0, null),
      Se === null)
    )
      throw Error(T(349));
    Zn & 30 || zm(n, t, s);
  }
  return s;
}
function zm(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Hm(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Wm(t) && Vm(e));
}
function Um(e, t, n) {
  return n(function () {
    Wm(t) && Vm(e);
  });
}
function Wm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Nt(e, n);
  } catch {
    return !0;
  }
}
function Vm(e) {
  var t = Jt(e, 1);
  t !== null && kt(t, e, 1, -1);
}
function Mf(e) {
  var t = Ot();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = q1.bind(null, de, e)),
    [t.memoizedState, e]
  );
}
function Ks(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function qm() {
  return mt().memoizedState;
}
function qo(e, t, n, r) {
  var s = Ot();
  ((de.flags |= e),
    (s.memoizedState = Ks(1 | t, n, void 0, r === void 0 ? null : r)));
}
function ta(e, t, n, r) {
  var s = mt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (xe !== null) {
    var a = xe.memoizedState;
    if (((i = a.destroy), r !== null && _u(r, a.deps))) {
      s.memoizedState = Ks(t, n, i, r);
      return;
    }
  }
  ((de.flags |= e), (s.memoizedState = Ks(1 | t, n, i, r)));
}
function _f(e, t) {
  return qo(8390656, 8, e, t);
}
function Fu(e, t) {
  return ta(2048, 8, e, t);
}
function Km(e, t) {
  return ta(4, 2, e, t);
}
function Ym(e, t) {
  return ta(4, 4, e, t);
}
function Xm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Gm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    ta(4, 4, Xm.bind(null, t, e), n)
  );
}
function $u() {}
function Qm(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _u(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Jm(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _u(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Zm(e, t, n) {
  return Zn & 21
    ? (Nt(n, t) || ((n = nm()), (de.lanes |= n), (er |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (We = !0)), (e.memoizedState = n));
}
function W1(e, t) {
  var n = J;
  ((J = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = dl.transition;
  dl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((J = n), (dl.transition = r));
  }
}
function eg() {
  return mt().memoizedState;
}
function V1(e, t, n) {
  var r = Sn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    tg(e))
  )
    ng(t, n);
  else if (((n = Om(e, t, n, r)), n !== null)) {
    var s = Be();
    (kt(n, e, r, s), rg(n, t, r));
  }
}
function q1(e, t, n) {
  var r = Sn(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (tg(e)) ng(t, s);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = i(a, n);
        if (((s.hasEagerState = !0), (s.eagerState = l), Nt(l, a))) {
          var c = t.interleaved;
          (c === null
            ? ((s.next = s), Au(t))
            : ((s.next = c.next), (c.next = s)),
            (t.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Om(e, t, s, r)),
      n !== null && ((s = Be()), kt(n, e, r, s), rg(n, t, r)));
  }
}
function tg(e) {
  var t = e.alternate;
  return e === de || (t !== null && t === de);
}
function ng(e, t) {
  Es = bi = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function rg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), vu(e, n));
  }
}
var Si = {
    readContext: pt,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useInsertionEffect: Re,
    useLayoutEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useMutableSource: Re,
    useSyncExternalStore: Re,
    useId: Re,
    unstable_isNewReconciler: !1,
  },
  K1 = {
    readContext: pt,
    useCallback: function (e, t) {
      return ((Ot().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: pt,
    useEffect: _f,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        qo(4194308, 4, Xm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return qo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return qo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ot();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ot();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = V1.bind(null, de, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ot();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Mf,
    useDebugValue: $u,
    useDeferredValue: function (e) {
      return (Ot().memoizedState = e);
    },
    useTransition: function () {
      var e = Mf(!1),
        t = e[0];
      return ((e = W1.bind(null, e[1])), (Ot().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = de,
        s = Ot();
      if (le) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), Se === null)) throw Error(T(349));
        Zn & 30 || zm(r, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        _f(Um.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ks(9, Hm.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ot(),
        t = Se.identifierPrefix;
      if (le) {
        var n = qt,
          r = Vt;
        ((n = (r & ~(1 << (32 - Pt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Vs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = U1++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Y1 = {
    readContext: pt,
    useCallback: Qm,
    useContext: pt,
    useEffect: Fu,
    useImperativeHandle: Gm,
    useInsertionEffect: Km,
    useLayoutEffect: Ym,
    useMemo: Jm,
    useReducer: fl,
    useRef: qm,
    useState: function () {
      return fl(qs);
    },
    useDebugValue: $u,
    useDeferredValue: function (e) {
      var t = mt();
      return Zm(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = fl(qs)[0],
        t = mt().memoizedState;
      return [e, t];
    },
    useMutableSource: Fm,
    useSyncExternalStore: $m,
    useId: eg,
    unstable_isNewReconciler: !1,
  },
  X1 = {
    readContext: pt,
    useCallback: Qm,
    useContext: pt,
    useEffect: Fu,
    useImperativeHandle: Gm,
    useInsertionEffect: Km,
    useLayoutEffect: Ym,
    useMemo: Jm,
    useReducer: hl,
    useRef: qm,
    useState: function () {
      return hl(qs);
    },
    useDebugValue: $u,
    useDeferredValue: function (e) {
      var t = mt();
      return xe === null ? (t.memoizedState = e) : Zm(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = hl(qs)[0],
        t = mt().memoizedState;
      return [e, t];
    },
    useMutableSource: Fm,
    useSyncExternalStore: $m,
    useId: eg,
    unstable_isNewReconciler: !1,
  };
function Ur(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += S2(r)), (r = r.return));
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function pl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function vc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var G1 = typeof WeakMap == "function" ? WeakMap : Map;
function sg(e, t, n) {
  ((n = Yt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Pi || ((Pi = !0), (Nc = r)), vc(e, t));
    }),
    n
  );
}
function og(e, t, n) {
  ((n = Yt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    ((n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        vc(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (vc(e, t),
          typeof r != "function" &&
            (bn === null ? (bn = new Set([this])) : bn.add(this)));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function Bf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new G1();
    var s = new Set();
    r.set(t, s);
  } else ((s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s)));
  s.has(n) || (s.add(n), (e = uw.bind(null, e, t, n)), t.then(e, e));
}
function If(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ff(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Yt(-1, 1)), (t.tag = 2), jn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Q1 = tn.ReactCurrentOwner,
  We = !1;
function _e(e, t, n, r) {
  t.child = e === null ? Bm(t, null, n, r) : zr(t, e.child, n, r);
}
function $f(e, t, n, r, s) {
  n = n.render;
  var i = t.ref;
  return (
    Or(t, s),
    (r = Bu(e, t, n, r, i, s)),
    (n = Iu()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Zt(e, t, s))
      : (le && n && Pu(t), (t.flags |= 1), _e(e, t, r, s), t.child)
  );
}
function zf(e, t, n, r, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Yu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ig(e, t, i, r, s))
      : ((e = Go(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Fs), n(a, r) && e.ref === t.ref)
    )
      return Zt(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = Cn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ig(e, t, n, r, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Fs(i, r) && e.ref === t.ref)
      if (((We = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0))
        e.flags & 131072 && (We = !0);
      else return ((t.lanes = e.lanes), Zt(e, t, s));
  }
  return wc(e, t, n, r, s);
}
function ag(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        se(Nr, Je),
        (Je |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          se(Nr, Je),
          (Je |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        se(Nr, Je),
        (Je |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      se(Nr, Je),
      (Je |= r));
  return (_e(e, t, s, n), t.child);
}
function lg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function wc(e, t, n, r, s) {
  var i = qe(n) ? Qn : De.current;
  return (
    (i = Fr(t, i)),
    Or(t, s),
    (n = Bu(e, t, n, r, i, s)),
    (r = Iu()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Zt(e, t, s))
      : (le && r && Pu(t), (t.flags |= 1), _e(e, t, n, s), t.child)
  );
}
function Hf(e, t, n, r, s) {
  if (qe(n)) {
    var i = !0;
    mi(t);
  } else i = !1;
  if ((Or(t, s), t.stateNode === null))
    (Ko(e, t), Mm(t, n, r), gc(t, n, r, s), (r = !0));
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var c = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = pt(u))
      : ((u = qe(n) ? Qn : De.current), (u = Fr(t, u)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== r || c !== u) && Lf(t, a, r, u)),
      (an = !1));
    var p = t.memoizedState;
    ((a.state = p),
      xi(t, r, a, s),
      (c = t.memoizedState),
      l !== r || p !== c || Ve.current || an
        ? (typeof d == "function" && (mc(t, n, d, r), (c = t.memoizedState)),
          (l = an || Of(t, n, l, r, p, c, u))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (a.props = r),
          (a.state = c),
          (a.context = u),
          (r = l))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((a = t.stateNode),
      Lm(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : jt(t.type, l)),
      (a.props = u),
      (f = t.pendingProps),
      (p = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = pt(c))
        : ((c = qe(n) ? Qn : De.current), (c = Fr(t, c))));
    var y = n.getDerivedStateFromProps;
    ((d =
      typeof y == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== f || p !== c) && Lf(t, a, r, c)),
      (an = !1),
      (p = t.memoizedState),
      (a.state = p),
      xi(t, r, a, s));
    var g = t.memoizedState;
    l !== f || p !== g || Ve.current || an
      ? (typeof y == "function" && (mc(t, n, y, r), (g = t.memoizedState)),
        (u = an || Of(t, n, u, r, p, g, c) || !1)
          ? (d ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, g, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, g, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (a.props = r),
        (a.state = g),
        (a.context = c),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return yc(e, t, n, r, i, s);
}
function yc(e, t, n, r, s, i) {
  lg(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return (s && Nf(t, n, !1), Zt(e, t, i));
  ((r = t.stateNode), (Q1.current = t));
  var l =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = zr(t, e.child, null, i)), (t.child = zr(t, null, l, i)))
      : _e(e, t, l, i),
    (t.memoizedState = r.state),
    s && Nf(t, n, !0),
    t.child
  );
}
function cg(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? kf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && kf(e, t.context, !1),
    Lu(e, t.containerInfo));
}
function Uf(e, t, n, r, s) {
  return ($r(), Nu(s), (t.flags |= 256), _e(e, t, n, r), t.child);
}
var xc = { dehydrated: null, treeContext: null, retryLane: 0 };
function jc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ug(e, t, n) {
  var r = t.pendingProps,
    s = ue.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    se(ue, s & 1),
    e === null)
  )
    return (
      hc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = sa(a, r, 0, null)),
              (e = Kn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = jc(n)),
              (t.memoizedState = xc),
              e)
            : zu(t, a))
    );
  if (((s = e.memoizedState), s !== null && ((l = s.dehydrated), l !== null)))
    return J1(e, t, a, r, l, s, n);
  if (i) {
    ((i = r.fallback), (a = t.mode), (s = e.child), (l = s.sibling));
    var c = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = Cn(s, c)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      l !== null ? (i = Cn(l, i)) : ((i = Kn(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? jc(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = xc),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Cn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function zu(e, t) {
  return (
    (t = sa({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Oo(e, t, n, r) {
  return (
    r !== null && Nu(r),
    zr(t, e.child, null, n),
    (e = zu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function J1(e, t, n, r, s, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = pl(Error(T(422)))), Oo(e, t, a, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (s = t.mode),
          (r = sa({ mode: "visible", children: r.children }, s, 0, null)),
          (i = Kn(i, s, a, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && zr(t, e.child, null, a),
          (t.child.memoizedState = jc(a)),
          (t.memoizedState = xc),
          i);
  if (!(t.mode & 1)) return Oo(e, t, a, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var l = r.dgst;
    return (
      (r = l),
      (i = Error(T(419))),
      (r = pl(i, r, void 0)),
      Oo(e, t, a, r)
    );
  }
  if (((l = (a & e.childLanes) !== 0), We || l)) {
    if (((r = Se), r !== null)) {
      switch (a & -a) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (r.suspendedLanes | a) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), Jt(e, s), kt(r, e, s, -1)));
    }
    return (Ku(), (r = pl(Error(T(421)))), Oo(e, t, a, r));
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = dw.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ze = xn(s.nextSibling)),
      (et = t),
      (le = !0),
      (St = null),
      e !== null &&
        ((ut[dt++] = Vt),
        (ut[dt++] = qt),
        (ut[dt++] = Jn),
        (Vt = e.id),
        (qt = e.overflow),
        (Jn = t)),
      (t = zu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Wf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), pc(e.return, t, n));
}
function ml(e, t, n, r, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function dg(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((_e(e, t, r.children, n), (r = ue.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Wf(e, n, t);
        else if (e.tag === 19) Wf(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((se(ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          ((e = n.alternate),
            e !== null && ji(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          ml(t, !1, s, n, i));
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && ji(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        ml(t, !0, n, null, i);
        break;
      case "together":
        ml(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ko(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Zt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (er |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Cn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Cn(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Z1(e, t, n) {
  switch (t.tag) {
    case 3:
      (cg(t), $r());
      break;
    case 5:
      Im(t);
      break;
    case 1:
      qe(t.type) && mi(t);
      break;
    case 4:
      Lu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      (se(wi, r._currentValue), (r._currentValue = s));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (se(ue, ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? ug(e, t, n)
            : (se(ue, ue.current & 1),
              (e = Zt(e, t, n)),
              e !== null ? e.sibling : null);
      se(ue, ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return dg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        se(ue, ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), ag(e, t, n));
  }
  return Zt(e, t, n);
}
var fg, bc, hg, pg;
fg = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
bc = function () {};
hg = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    ((e = t.stateNode), Wn(_t.current));
    var i = null;
    switch (n) {
      case "input":
        ((s = Wl(e, s)), (r = Wl(e, r)), (i = []));
        break;
      case "select":
        ((s = fe({}, s, { value: void 0 })),
          (r = fe({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((s = Kl(e, s)), (r = Kl(e, r)), (i = []));
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = hi);
    }
    Xl(n, r);
    var a;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var l = s[u];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Os.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (
        ((l = s != null ? s[u] : void 0),
        r.hasOwnProperty(u) && c !== l && (c != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                l[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else (n || (i || (i = []), i.push(u, n)), (n = c));
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (l = l ? l.__html : void 0),
              c != null && l !== c && (i = i || []).push(u, c))
            : u === "children"
              ? (typeof c != "string" && typeof c != "number") ||
                (i = i || []).push(u, "" + c)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Os.hasOwnProperty(u)
                  ? (c != null && u === "onScroll" && oe("scroll", e),
                    i || l === c || (i = []))
                  : (i = i || []).push(u, c));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
pg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ms(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling));
  else
    for (s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function ew(e, t, n) {
  var r = t.pendingProps;
  switch ((ku(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Te(t), null);
    case 1:
      return (qe(t.type) && pi(), Te(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Hr(),
        ie(Ve),
        ie(De),
        Mu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (To(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), St !== null && (Tc(St), (St = null)))),
        bc(e, t),
        Te(t),
        null
      );
    case 5:
      Du(t);
      var s = Wn(Ws.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (hg(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return (Te(t), null);
        }
        if (((e = Wn(_t.current)), To(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[Dt] = t), (r[Hs] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (oe("cancel", r), oe("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < js.length; s++) oe(js[s], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (oe("error", r), oe("load", r));
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              (Jd(r, i), oe("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                oe("invalid", r));
              break;
            case "textarea":
              (ef(r, i), oe("invalid", r));
          }
          (Xl(n, i), (s = null));
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var l = i[a];
              a === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ro(r.textContent, l, e),
                    (s = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ro(r.textContent, l, e),
                    (s = ["children", "" + l]))
                : Os.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  oe("scroll", r);
            }
          switch (n) {
            case "input":
              (jo(r), Zd(r, i, !0));
              break;
            case "textarea":
              (jo(r), tf(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = hi);
          }
          ((r = s), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((a = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = zp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === "select" &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Dt] = t),
            (e[Hs] = r),
            fg(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((a = Gl(n, r)), n)) {
              case "dialog":
                (oe("cancel", e), oe("close", e), (s = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (oe("load", e), (s = r));
                break;
              case "video":
              case "audio":
                for (s = 0; s < js.length; s++) oe(js[s], e);
                s = r;
                break;
              case "source":
                (oe("error", e), (s = r));
                break;
              case "img":
              case "image":
              case "link":
                (oe("error", e), oe("load", e), (s = r));
                break;
              case "details":
                (oe("toggle", e), (s = r));
                break;
              case "input":
                (Jd(e, r), (s = Wl(e, r)), oe("invalid", e));
                break;
              case "option":
                s = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = fe({}, r, { value: void 0 })),
                  oe("invalid", e));
                break;
              case "textarea":
                (ef(e, r), (s = Kl(e, r)), oe("invalid", e));
                break;
              default:
                s = r;
            }
            (Xl(n, s), (l = s));
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var c = l[i];
                i === "style"
                  ? Wp(e, c)
                  : i === "dangerouslySetInnerHTML"
                    ? ((c = c ? c.__html : void 0), c != null && Hp(e, c))
                    : i === "children"
                      ? typeof c == "string"
                        ? (n !== "textarea" || c !== "") && Ls(e, c)
                        : typeof c == "number" && Ls(e, "" + c)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Os.hasOwnProperty(i)
                          ? c != null && i === "onScroll" && oe("scroll", e)
                          : c != null && du(e, i, c, a));
              }
            switch (n) {
              case "input":
                (jo(e), Zd(e, r, !1));
                break;
              case "textarea":
                (jo(e), tf(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Rn(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Er(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Er(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = hi);
            }
            switch (n) {
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
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Te(t), null);
    case 6:
      if (e && t.stateNode != null) pg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = Wn(Ws.current)), Wn(_t.current), To(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Dt] = t),
            (i = r.nodeValue !== n) && ((e = et), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ro(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ro(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Dt] = t),
            (t.stateNode = r));
      }
      return (Te(t), null);
    case 13:
      if (
        (ie(ue),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Ze !== null && t.mode & 1 && !(t.flags & 128))
          (Am(), $r(), (t.flags |= 98560), (i = !1));
        else if (((i = To(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(T(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(T(317));
            i[Dt] = t;
          } else
            ($r(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Te(t), (i = !1));
        } else (St !== null && (Tc(St), (St = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ue.current & 1 ? je === 0 && (je = 3) : Ku())),
          t.updateQueue !== null && (t.flags |= 4),
          Te(t),
          null);
    case 4:
      return (
        Hr(),
        bc(e, t),
        e === null && $s(t.stateNode.containerInfo),
        Te(t),
        null
      );
    case 10:
      return (Tu(t.type._context), Te(t), null);
    case 17:
      return (qe(t.type) && pi(), Te(t), null);
    case 19:
      if ((ie(ue), (i = t.memoizedState), i === null)) return (Te(t), null);
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) ms(i, !1);
        else {
          if (je !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = ji(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    ms(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (se(ue, (ue.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ve() > Wr &&
            ((t.flags |= 128), (r = !0), ms(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ji(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ms(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !le)
            )
              return (Te(t), null);
          } else
            2 * ve() - i.renderingStartTime > Wr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ms(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ve()),
          (t.sibling = null),
          (n = ue.current),
          se(ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (Te(t), null);
    case 22:
    case 23:
      return (
        qu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Je & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Te(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function tw(e, t) {
  switch ((ku(t), t.tag)) {
    case 1:
      return (
        qe(t.type) && pi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Hr(),
        ie(Ve),
        ie(De),
        Mu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Du(t), null);
    case 13:
      if (
        (ie(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(T(340));
        $r();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (ie(ue), null);
    case 4:
      return (Hr(), null);
    case 10:
      return (Tu(t.type._context), null);
    case 22:
    case 23:
      return (qu(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Lo = !1,
  Oe = !1,
  nw = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function kr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        pe(e, t, r);
      }
    else n.current = null;
}
function Sc(e, t, n) {
  try {
    n();
  } catch (r) {
    pe(e, t, r);
  }
}
var Vf = !1;
function rw(e, t) {
  if (((ic = ui), (e = wm()), Cu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            l = -1,
            c = -1,
            u = 0,
            d = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (s !== 0 && f.nodeType !== 3) || (l = a + s),
                f !== i || (r !== 0 && f.nodeType !== 3) || (c = a + r),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (y = f.firstChild) !== null;
            )
              ((p = f), (f = y));
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++u === s && (l = a),
                p === i && ++d === r && (c = a),
                (y = f.nextSibling) !== null)
              )
                break;
              ((f = p), (p = f.parentNode));
            }
            f = y;
          }
          n = l === -1 || c === -1 ? null : { start: l, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ac = { focusedElem: e, selectionRange: n }, ui = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (D = e));
    else
      for (; D !== null; ) {
        t = D;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var x = g.memoizedProps,
                    v = g.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : jt(t.type, x),
                      v,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var w = t.stateNode.containerInfo;
                w.nodeType === 1
                  ? (w.textContent = "")
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (j) {
          pe(t, t.return, j);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (D = e));
          break;
        }
        D = t.return;
      }
  return ((g = Vf), (Vf = !1), g);
}
function Rs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        ((s.destroy = void 0), i !== void 0 && Sc(t, n, i));
      }
      s = s.next;
    } while (s !== r);
  }
}
function na(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Cc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function mg(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), mg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Dt], delete t[Hs], delete t[uc], delete t[F1], delete t[$1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function gg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || gg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Pc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = hi)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Pc(e, t, n), e = e.sibling; e !== null; )
      (Pc(e, t, n), (e = e.sibling));
}
function kc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (kc(e, t, n), e = e.sibling; e !== null; )
      (kc(e, t, n), (e = e.sibling));
}
var ke = null,
  bt = !1;
function sn(e, t, n) {
  for (n = n.child; n !== null; ) (vg(e, t, n), (n = n.sibling));
}
function vg(e, t, n) {
  if (Mt && typeof Mt.onCommitFiberUnmount == "function")
    try {
      Mt.onCommitFiberUnmount(Yi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Oe || kr(n, t);
    case 6:
      var r = ke,
        s = bt;
      ((ke = null),
        sn(e, t, n),
        (ke = r),
        (bt = s),
        ke !== null &&
          (bt
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ke.removeChild(n.stateNode)));
      break;
    case 18:
      ke !== null &&
        (bt
          ? ((e = ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? ll(e.parentNode, n)
              : e.nodeType === 1 && ll(e, n),
            Bs(e))
          : ll(ke, n.stateNode));
      break;
    case 4:
      ((r = ke),
        (s = bt),
        (ke = n.stateNode.containerInfo),
        (bt = !0),
        sn(e, t, n),
        (ke = r),
        (bt = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var i = s,
            a = i.destroy;
          ((i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && Sc(n, t, a),
            (s = s.next));
        } while (s !== r);
      }
      sn(e, t, n);
      break;
    case 1:
      if (
        !Oe &&
        (kr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (l) {
          pe(n, t, l);
        }
      sn(e, t, n);
      break;
    case 21:
      sn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Oe = (r = Oe) || n.memoizedState !== null), sn(e, t, n), (Oe = r))
        : sn(e, t, n);
      break;
    default:
      sn(e, t, n);
  }
}
function Kf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new nw()),
      t.forEach(function (r) {
        var s = fw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      }));
  }
}
function yt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ((ke = l.stateNode), (bt = !1));
              break e;
            case 3:
              ((ke = l.stateNode.containerInfo), (bt = !0));
              break e;
            case 4:
              ((ke = l.stateNode.containerInfo), (bt = !0));
              break e;
          }
          l = l.return;
        }
        if (ke === null) throw Error(T(160));
        (vg(i, a, s), (ke = null), (bt = !1));
        var c = s.alternate;
        (c !== null && (c.return = null), (s.return = null));
      } catch (u) {
        pe(s, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (wg(t, e), (t = t.sibling));
}
function wg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((yt(t, e), At(e), r & 4)) {
        try {
          (Rs(3, e, e.return), na(3, e));
        } catch (x) {
          pe(e, e.return, x);
        }
        try {
          Rs(5, e, e.return);
        } catch (x) {
          pe(e, e.return, x);
        }
      }
      break;
    case 1:
      (yt(t, e), At(e), r & 512 && n !== null && kr(n, n.return));
      break;
    case 5:
      if (
        (yt(t, e),
        At(e),
        r & 512 && n !== null && kr(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Ls(s, "");
        } catch (x) {
          pe(e, e.return, x);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          l = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            (l === "input" && i.type === "radio" && i.name != null && Fp(s, i),
              Gl(l, a));
            var u = Gl(l, i);
            for (a = 0; a < c.length; a += 2) {
              var d = c[a],
                f = c[a + 1];
              d === "style"
                ? Wp(s, f)
                : d === "dangerouslySetInnerHTML"
                  ? Hp(s, f)
                  : d === "children"
                    ? Ls(s, f)
                    : du(s, d, f, u);
            }
            switch (l) {
              case "input":
                Vl(s, i);
                break;
              case "textarea":
                $p(s, i);
                break;
              case "select":
                var p = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? Er(s, !!i.multiple, y, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Er(s, !!i.multiple, i.defaultValue, !0)
                      : Er(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[Hs] = i;
          } catch (x) {
            pe(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((yt(t, e), At(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        ((s = e.stateNode), (i = e.memoizedProps));
        try {
          s.nodeValue = i;
        } catch (x) {
          pe(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (yt(t, e), At(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Bs(t.containerInfo);
        } catch (x) {
          pe(e, e.return, x);
        }
      break;
    case 4:
      (yt(t, e), At(e));
      break;
    case 13:
      (yt(t, e),
        At(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Wu = ve())),
        r & 4 && Kf(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Oe = (u = Oe) || d), yt(t, e), (Oe = u)) : yt(t, e),
        At(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (D = e, d = e.child; d !== null; ) {
            for (f = D = d; D !== null; ) {
              switch (((p = D), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rs(4, p, p.return);
                  break;
                case 1:
                  kr(p, p.return);
                  var g = p.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    ((r = p), (n = p.return));
                    try {
                      ((t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount());
                    } catch (x) {
                      pe(r, n, x);
                    }
                  }
                  break;
                case 5:
                  kr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Xf(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = p), (D = y)) : Xf(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                ((s = f.stateNode),
                  u
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = f.stateNode),
                      (c = f.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (l.style.display = Up("display", a))));
              } catch (x) {
                pe(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (x) {
                pe(e, e.return, x);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (d === f && (d = null), (f = f.return));
          }
          (d === f && (d = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (yt(t, e), At(e), r & 4 && Kf(e));
      break;
    case 21:
      break;
    default:
      (yt(t, e), At(e));
  }
}
function At(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (gg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Ls(s, ""), (r.flags &= -33));
          var i = qf(e);
          kc(e, i, s);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = qf(e);
          Pc(e, l, a);
          break;
        default:
          throw Error(T(161));
      }
    } catch (c) {
      pe(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sw(e, t, n) {
  ((D = e), yg(e));
}
function yg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var s = D,
      i = s.child;
    if (s.tag === 22 && r) {
      var a = s.memoizedState !== null || Lo;
      if (!a) {
        var l = s.alternate,
          c = (l !== null && l.memoizedState !== null) || Oe;
        l = Lo;
        var u = Oe;
        if (((Lo = a), (Oe = c) && !u))
          for (D = s; D !== null; )
            ((a = D),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Gf(s)
                : c !== null
                  ? ((c.return = a), (D = c))
                  : Gf(s));
        for (; i !== null; ) ((D = i), yg(i), (i = i.sibling));
        ((D = s), (Lo = l), (Oe = u));
      }
      Yf(e);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (D = i)) : Yf(e);
  }
}
function Yf(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Oe || na(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Oe)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : jt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Af(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Af(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Bs(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
        Oe || (t.flags & 512 && Cc(t));
      } catch (p) {
        pe(t, t.return, p);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (D = n));
      break;
    }
    D = t.return;
  }
}
function Xf(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (D = n));
      break;
    }
    D = t.return;
  }
}
function Gf(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            na(4, t);
          } catch (c) {
            pe(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              pe(t, s, c);
            }
          }
          var i = t.return;
          try {
            Cc(t);
          } catch (c) {
            pe(t, i, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Cc(t);
          } catch (c) {
            pe(t, a, c);
          }
      }
    } catch (c) {
      pe(t, t.return, c);
    }
    if (t === e) {
      D = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      ((l.return = t.return), (D = l));
      break;
    }
    D = t.return;
  }
}
var ow = Math.ceil,
  Ci = tn.ReactCurrentDispatcher,
  Hu = tn.ReactCurrentOwner,
  ht = tn.ReactCurrentBatchConfig,
  Y = 0,
  Se = null,
  ye = null,
  Ne = 0,
  Je = 0,
  Nr = Dn(0),
  je = 0,
  Ys = null,
  er = 0,
  ra = 0,
  Uu = 0,
  Ts = null,
  Ue = null,
  Wu = 0,
  Wr = 1 / 0,
  Ut = null,
  Pi = !1,
  Nc = null,
  bn = null,
  Do = !1,
  fn = null,
  ki = 0,
  As = 0,
  Ec = null,
  Yo = -1,
  Xo = 0;
function Be() {
  return Y & 6 ? ve() : Yo !== -1 ? Yo : (Yo = ve());
}
function Sn(e) {
  return e.mode & 1
    ? Y & 2 && Ne !== 0
      ? Ne & -Ne
      : H1.transition !== null
        ? (Xo === 0 && (Xo = nm()), Xo)
        : ((e = J),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : cm(e.type))),
          e)
    : 1;
}
function kt(e, t, n, r) {
  if (50 < As) throw ((As = 0), (Ec = null), Error(T(185)));
  (no(e, n, r),
    (!(Y & 2) || e !== Se) &&
      (e === Se && (!(Y & 2) && (ra |= n), je === 4 && cn(e, Ne)),
      Ke(e, r),
      n === 1 && Y === 0 && !(t.mode & 1) && ((Wr = ve() + 500), Zi && Mn())));
}
function Ke(e, t) {
  var n = e.callbackNode;
  H2(e, t);
  var r = ci(e, e === Se ? Ne : 0);
  if (r === 0)
    (n !== null && sf(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && sf(n), t === 1))
      (e.tag === 0 ? z1(Qf.bind(null, e)) : Em(Qf.bind(null, e)),
        B1(function () {
          !(Y & 6) && Mn();
        }),
        (n = null));
    else {
      switch (rm(r)) {
        case 1:
          n = gu;
          break;
        case 4:
          n = em;
          break;
        case 16:
          n = li;
          break;
        case 536870912:
          n = tm;
          break;
        default:
          n = li;
      }
      n = Ng(n, xg.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function xg(e, t) {
  if (((Yo = -1), (Xo = 0), Y & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (Lr() && e.callbackNode !== n) return null;
  var r = ci(e, e === Se ? Ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ni(e, r);
  else {
    t = r;
    var s = Y;
    Y |= 2;
    var i = bg();
    (Se !== e || Ne !== t) && ((Ut = null), (Wr = ve() + 500), qn(e, t));
    do
      try {
        lw();
        break;
      } catch (l) {
        jg(e, l);
      }
    while (!0);
    (Ru(),
      (Ci.current = i),
      (Y = s),
      ye !== null ? (t = 0) : ((Se = null), (Ne = 0), (t = je)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = tc(e)), s !== 0 && ((r = s), (t = Rc(e, s)))), t === 1)
    )
      throw ((n = Ys), qn(e, 0), cn(e, r), Ke(e, ve()), n);
    if (t === 6) cn(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !iw(s) &&
          ((t = Ni(e, r)),
          t === 2 && ((i = tc(e)), i !== 0 && ((r = i), (t = Rc(e, i)))),
          t === 1))
      )
        throw ((n = Ys), qn(e, 0), cn(e, r), Ke(e, ve()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          $n(e, Ue, Ut);
          break;
        case 3:
          if (
            (cn(e, r), (r & 130023424) === r && ((t = Wu + 500 - ve()), 10 < t))
          ) {
            if (ci(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              (Be(), (e.pingedLanes |= e.suspendedLanes & s));
              break;
            }
            e.timeoutHandle = cc($n.bind(null, e, Ue, Ut), t);
            break;
          }
          $n(e, Ue, Ut);
          break;
        case 4:
          if ((cn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var a = 31 - Pt(r);
            ((i = 1 << a), (a = t[a]), a > s && (s = a), (r &= ~i));
          }
          if (
            ((r = s),
            (r = ve() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * ow(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = cc($n.bind(null, e, Ue, Ut), r);
            break;
          }
          $n(e, Ue, Ut);
          break;
        case 5:
          $n(e, Ue, Ut);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return (Ke(e, ve()), e.callbackNode === n ? xg.bind(null, e) : null);
}
function Rc(e, t) {
  var n = Ts;
  return (
    e.current.memoizedState.isDehydrated && (qn(e, t).flags |= 256),
    (e = Ni(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && Tc(t)),
    e
  );
}
function Tc(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
}
function iw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!Nt(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function cn(e, t) {
  for (
    t &= ~Uu,
      t &= ~ra,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Pt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Qf(e) {
  if (Y & 6) throw Error(T(327));
  Lr();
  var t = ci(e, 0);
  if (!(t & 1)) return (Ke(e, ve()), null);
  var n = Ni(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = tc(e);
    r !== 0 && ((t = r), (n = Rc(e, r)));
  }
  if (n === 1) throw ((n = Ys), qn(e, 0), cn(e, t), Ke(e, ve()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    $n(e, Ue, Ut),
    Ke(e, ve()),
    null
  );
}
function Vu(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    ((Y = n), Y === 0 && ((Wr = ve() + 500), Zi && Mn()));
  }
}
function tr(e) {
  fn !== null && fn.tag === 0 && !(Y & 6) && Lr();
  var t = Y;
  Y |= 1;
  var n = ht.transition,
    r = J;
  try {
    if (((ht.transition = null), (J = 1), e)) return e();
  } finally {
    ((J = r), (ht.transition = n), (Y = t), !(Y & 6) && Mn());
  }
}
function qu() {
  ((Je = Nr.current), ie(Nr));
}
function qn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), _1(n)), ye !== null))
    for (n = ye.return; n !== null; ) {
      var r = n;
      switch ((ku(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && pi());
          break;
        case 3:
          (Hr(), ie(Ve), ie(De), Mu());
          break;
        case 5:
          Du(r);
          break;
        case 4:
          Hr();
          break;
        case 13:
          ie(ue);
          break;
        case 19:
          ie(ue);
          break;
        case 10:
          Tu(r.type._context);
          break;
        case 22:
        case 23:
          qu();
      }
      n = n.return;
    }
  if (
    ((Se = e),
    (ye = e = Cn(e.current, null)),
    (Ne = Je = t),
    (je = 0),
    (Ys = null),
    (Uu = ra = er = 0),
    (Ue = Ts = null),
    Un !== null)
  ) {
    for (t = 0; t < Un.length; t++)
      if (((n = Un[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          ((i.next = s), (r.next = a));
        }
        n.pending = r;
      }
    Un = null;
  }
  return e;
}
function jg(e, t) {
  do {
    var n = ye;
    try {
      if ((Ru(), (Vo.current = Si), bi)) {
        for (var r = de.memoizedState; r !== null; ) {
          var s = r.queue;
          (s !== null && (s.pending = null), (r = r.next));
        }
        bi = !1;
      }
      if (
        ((Zn = 0),
        (be = xe = de = null),
        (Es = !1),
        (Vs = 0),
        (Hu.current = null),
        n === null || n.return === null)
      ) {
        ((je = 1), (Ys = t), (ye = null));
        break;
      }
      e: {
        var i = e,
          a = n.return,
          l = n,
          c = t;
        if (
          ((t = Ne),
          (l.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            d = l,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = d.alternate;
            p
              ? ((d.updateQueue = p.updateQueue),
                (d.memoizedState = p.memoizedState),
                (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = If(a);
          if (y !== null) {
            ((y.flags &= -257),
              Ff(y, a, l, i, t),
              y.mode & 1 && Bf(i, u, t),
              (t = y),
              (c = u));
            var g = t.updateQueue;
            if (g === null) {
              var x = new Set();
              (x.add(c), (t.updateQueue = x));
            } else g.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              (Bf(i, u, t), Ku());
              break e;
            }
            c = Error(T(426));
          }
        } else if (le && l.mode & 1) {
          var v = If(a);
          if (v !== null) {
            (!(v.flags & 65536) && (v.flags |= 256),
              Ff(v, a, l, i, t),
              Nu(Ur(c, l)));
            break e;
          }
        }
        ((i = c = Ur(c, l)),
          je !== 4 && (je = 2),
          Ts === null ? (Ts = [i]) : Ts.push(i),
          (i = a));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var m = sg(i, c, t);
              Tf(i, m);
              break e;
            case 1:
              l = c;
              var h = i.type,
                w = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (w !== null &&
                    typeof w.componentDidCatch == "function" &&
                    (bn === null || !bn.has(w))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var j = og(i, l, t);
                Tf(i, j);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Cg(n);
    } catch (S) {
      ((t = S), ye === n && n !== null && (ye = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function bg() {
  var e = Ci.current;
  return ((Ci.current = Si), e === null ? Si : e);
}
function Ku() {
  ((je === 0 || je === 3 || je === 2) && (je = 4),
    Se === null || (!(er & 268435455) && !(ra & 268435455)) || cn(Se, Ne));
}
function Ni(e, t) {
  var n = Y;
  Y |= 2;
  var r = bg();
  (Se !== e || Ne !== t) && ((Ut = null), qn(e, t));
  do
    try {
      aw();
      break;
    } catch (s) {
      jg(e, s);
    }
  while (!0);
  if ((Ru(), (Y = n), (Ci.current = r), ye !== null)) throw Error(T(261));
  return ((Se = null), (Ne = 0), je);
}
function aw() {
  for (; ye !== null; ) Sg(ye);
}
function lw() {
  for (; ye !== null && !L2(); ) Sg(ye);
}
function Sg(e) {
  var t = kg(e.alternate, e, Je);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Cg(e) : (ye = t),
    (Hu.current = null));
}
function Cg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = tw(n, t)), n !== null)) {
        ((n.flags &= 32767), (ye = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((je = 6), (ye = null));
        return;
      }
    } else if (((n = ew(n, t, Je)), n !== null)) {
      ye = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ye = t;
      return;
    }
    ye = t = e;
  } while (t !== null);
  je === 0 && (je = 5);
}
function $n(e, t, n) {
  var r = J,
    s = ht.transition;
  try {
    ((ht.transition = null), (J = 1), cw(e, t, n, r));
  } finally {
    ((ht.transition = s), (J = r));
  }
  return null;
}
function cw(e, t, n, r) {
  do Lr();
  while (fn !== null);
  if (Y & 6) throw Error(T(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (U2(e, i),
    e === Se && ((ye = Se = null), (Ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Do ||
      ((Do = !0),
      Ng(li, function () {
        return (Lr(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = ht.transition), (ht.transition = null));
    var a = J;
    J = 1;
    var l = Y;
    ((Y |= 4),
      (Hu.current = null),
      rw(e, n),
      wg(n, e),
      R1(ac),
      (ui = !!ic),
      (ac = ic = null),
      (e.current = n),
      sw(n),
      D2(),
      (Y = l),
      (J = a),
      (ht.transition = i));
  } else e.current = n;
  if (
    (Do && ((Do = !1), (fn = e), (ki = s)),
    (i = e.pendingLanes),
    i === 0 && (bn = null),
    B2(n.stateNode),
    Ke(e, ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest }));
  if (Pi) throw ((Pi = !1), (e = Nc), (Nc = null), e);
  return (
    ki & 1 && e.tag !== 0 && Lr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ec ? As++ : ((As = 0), (Ec = e))) : (As = 0),
    Mn(),
    null
  );
}
function Lr() {
  if (fn !== null) {
    var e = rm(ki),
      t = ht.transition,
      n = J;
    try {
      if (((ht.transition = null), (J = 16 > e ? 16 : e), fn === null))
        var r = !1;
      else {
        if (((e = fn), (fn = null), (ki = 0), Y & 6)) throw Error(T(331));
        var s = Y;
        for (Y |= 4, D = e.current; D !== null; ) {
          var i = D,
            a = i.child;
          if (D.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var c = 0; c < l.length; c++) {
                var u = l[c];
                for (D = u; D !== null; ) {
                  var d = D;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rs(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) ((f.return = d), (D = f));
                  else
                    for (; D !== null; ) {
                      d = D;
                      var p = d.sibling,
                        y = d.return;
                      if ((mg(d), d === u)) {
                        D = null;
                        break;
                      }
                      if (p !== null) {
                        ((p.return = y), (D = p));
                        break;
                      }
                      D = y;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var x = g.child;
                if (x !== null) {
                  g.child = null;
                  do {
                    var v = x.sibling;
                    ((x.sibling = null), (x = v));
                  } while (x !== null);
                }
              }
              D = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) ((a.return = i), (D = a));
          else
            e: for (; D !== null; ) {
              if (((i = D), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rs(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                ((m.return = i.return), (D = m));
                break e;
              }
              D = i.return;
            }
        }
        var h = e.current;
        for (D = h; D !== null; ) {
          a = D;
          var w = a.child;
          if (a.subtreeFlags & 2064 && w !== null) ((w.return = a), (D = w));
          else
            e: for (a = h; D !== null; ) {
              if (((l = D), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      na(9, l);
                  }
                } catch (S) {
                  pe(l, l.return, S);
                }
              if (l === a) {
                D = null;
                break e;
              }
              var j = l.sibling;
              if (j !== null) {
                ((j.return = l.return), (D = j));
                break e;
              }
              D = l.return;
            }
        }
        if (
          ((Y = s), Mn(), Mt && typeof Mt.onPostCommitFiberRoot == "function")
        )
          try {
            Mt.onPostCommitFiberRoot(Yi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((J = n), (ht.transition = t));
    }
  }
  return !1;
}
function Jf(e, t, n) {
  ((t = Ur(n, t)),
    (t = sg(e, t, 1)),
    (e = jn(e, t, 1)),
    (t = Be()),
    e !== null && (no(e, 1, t), Ke(e, t)));
}
function pe(e, t, n) {
  if (e.tag === 3) Jf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Jf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (bn === null || !bn.has(r)))
        ) {
          ((e = Ur(n, e)),
            (e = og(t, e, 1)),
            (t = jn(t, e, 1)),
            (e = Be()),
            t !== null && (no(t, 1, e), Ke(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function uw(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Be()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Se === e &&
      (Ne & n) === n &&
      (je === 4 || (je === 3 && (Ne & 130023424) === Ne && 500 > ve() - Wu)
        ? qn(e, 0)
        : (Uu |= n)),
    Ke(e, t));
}
function Pg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Co), (Co <<= 1), !(Co & 130023424) && (Co = 4194304))
      : (t = 1));
  var n = Be();
  ((e = Jt(e, t)), e !== null && (no(e, t, n), Ke(e, n)));
}
function dw(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Pg(e, n));
}
function fw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  (r !== null && r.delete(t), Pg(e, n));
}
var kg;
kg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current) We = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((We = !1), Z1(e, t, n));
      We = !!(e.flags & 131072);
    }
  else ((We = !1), le && t.flags & 1048576 && Rm(t, vi, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Ko(e, t), (e = t.pendingProps));
      var s = Fr(t, De.current);
      (Or(t, n), (s = Bu(null, t, r, e, s, n)));
      var i = Iu();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            qe(r) ? ((i = !0), mi(t)) : (i = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Ou(t),
            (s.updater = ea),
            (t.stateNode = s),
            (s._reactInternals = t),
            gc(t, r, e, n),
            (t = yc(null, t, r, !0, i, n)))
          : ((t.tag = 0), le && i && Pu(t), _e(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ko(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = pw(r)),
          (e = jt(r, e)),
          s)
        ) {
          case 0:
            t = wc(null, t, r, e, n);
            break e;
          case 1:
            t = Hf(null, t, r, e, n);
            break e;
          case 11:
            t = $f(null, t, r, e, n);
            break e;
          case 14:
            t = zf(null, t, r, jt(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : jt(r, s)),
        wc(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : jt(r, s)),
        Hf(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((cg(t), e === null)) throw Error(T(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (s = i.element),
          Lm(e, t),
          xi(t, r, null, n));
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((s = Ur(Error(T(423)), t)), (t = Uf(e, t, r, n, s)));
            break e;
          } else if (r !== s) {
            ((s = Ur(Error(T(424)), t)), (t = Uf(e, t, r, n, s)));
            break e;
          } else
            for (
              Ze = xn(t.stateNode.containerInfo.firstChild),
                et = t,
                le = !0,
                St = null,
                n = Bm(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if (($r(), r === s)) {
            t = Zt(e, t, n);
            break e;
          }
          _e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Im(t),
        e === null && hc(t),
        (r = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = s.children),
        lc(r, s) ? (a = null) : i !== null && lc(r, i) && (t.flags |= 32),
        lg(e, t),
        _e(e, t, a, n),
        t.child
      );
    case 6:
      return (e === null && hc(t), null);
    case 13:
      return ug(e, t, n);
    case 4:
      return (
        Lu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = zr(t, null, r, n)) : _e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : jt(r, s)),
        $f(e, t, r, s, n)
      );
    case 7:
      return (_e(e, t, t.pendingProps, n), t.child);
    case 8:
      return (_e(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (_e(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (a = s.value),
          se(wi, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (Nt(i.value, a)) {
            if (i.children === s.children && !Ve.current) {
              t = Zt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                a = i.child;
                for (var c = l.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (i.tag === 1) {
                      ((c = Yt(-1, n & -n)), (c.tag = 2));
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        (d === null
                          ? (c.next = c)
                          : ((c.next = d.next), (d.next = c)),
                          (u.pending = c));
                      }
                    }
                    ((i.lanes |= n),
                      (c = i.alternate),
                      c !== null && (c.lanes |= n),
                      pc(i.return, n, t),
                      (l.lanes |= n));
                    break;
                  }
                  c = c.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(T(341));
                ((a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  pc(a, n, t),
                  (a = i.sibling));
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    ((i.return = a.return), (a = i));
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        (_e(e, t, s.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        Or(t, n),
        (s = pt(s)),
        (r = r(s)),
        (t.flags |= 1),
        _e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = jt(r, t.pendingProps)),
        (s = jt(r.type, s)),
        zf(e, t, r, s, n)
      );
    case 15:
      return ig(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : jt(r, s)),
        Ko(e, t),
        (t.tag = 1),
        qe(r) ? ((e = !0), mi(t)) : (e = !1),
        Or(t, n),
        Mm(t, r, s),
        gc(t, r, s, n),
        yc(null, t, r, !0, e, n)
      );
    case 19:
      return dg(e, t, n);
    case 22:
      return ag(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function Ng(e, t) {
  return Zp(e, t);
}
function hw(e, t, n, r) {
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
    (this.ref = null),
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
function ft(e, t, n, r) {
  return new hw(e, t, n, r);
}
function Yu(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function pw(e) {
  if (typeof e == "function") return Yu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === hu)) return 11;
    if (e === pu) return 14;
  }
  return 2;
}
function Cn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ft(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Go(e, t, n, r, s, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) Yu(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case vr:
        return Kn(n.children, s, i, t);
      case fu:
        ((a = 8), (s |= 8));
        break;
      case $l:
        return (
          (e = ft(12, n, t, s | 2)),
          (e.elementType = $l),
          (e.lanes = i),
          e
        );
      case zl:
        return ((e = ft(13, n, t, s)), (e.elementType = zl), (e.lanes = i), e);
      case Hl:
        return ((e = ft(19, n, t, s)), (e.elementType = Hl), (e.lanes = i), e);
      case _p:
        return sa(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Dp:
              a = 10;
              break e;
            case Mp:
              a = 9;
              break e;
            case hu:
              a = 11;
              break e;
            case pu:
              a = 14;
              break e;
            case on:
              ((a = 16), (r = null));
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ft(a, n, t, s)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function Kn(e, t, n, r) {
  return ((e = ft(7, e, r, t)), (e.lanes = n), e);
}
function sa(e, t, n, r) {
  return (
    (e = ft(22, e, r, t)),
    (e.elementType = _p),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function gl(e, t, n) {
  return ((e = ft(6, e, null, t)), (e.lanes = n), e);
}
function vl(e, t, n) {
  return (
    (t = ft(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function mw(e, t, n, r, s) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Qa(0)),
    (this.expirationTimes = Qa(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Qa(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function Xu(e, t, n, r, s, i, a, l, c) {
  return (
    (e = new mw(e, t, n, l, c)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ft(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ou(i),
    e
  );
}
function gw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: gr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Eg(e) {
  if (!e) return Tn;
  e = e._reactInternals;
  e: {
    if (ir(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (qe(n)) return Nm(e, n, t);
  }
  return t;
}
function Rg(e, t, n, r, s, i, a, l, c) {
  return (
    (e = Xu(n, r, !0, e, s, i, a, l, c)),
    (e.context = Eg(null)),
    (n = e.current),
    (r = Be()),
    (s = Sn(n)),
    (i = Yt(r, s)),
    (i.callback = t ?? null),
    jn(n, i, s),
    (e.current.lanes = s),
    no(e, s, r),
    Ke(e, r),
    e
  );
}
function oa(e, t, n, r) {
  var s = t.current,
    i = Be(),
    a = Sn(s);
  return (
    (n = Eg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Yt(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = jn(s, t, a)),
    e !== null && (kt(e, s, a, i), Wo(e, s, a)),
    a
  );
}
function Ei(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Gu(e, t) {
  (Zf(e, t), (e = e.alternate) && Zf(e, t));
}
function vw() {
  return null;
}
var Tg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Qu(e) {
  this._internalRoot = e;
}
ia.prototype.render = Qu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  oa(e, t, null, null);
};
ia.prototype.unmount = Qu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (tr(function () {
      oa(null, e, null, null);
    }),
      (t[Qt] = null));
  }
};
function ia(e) {
  this._internalRoot = e;
}
ia.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = im();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ln.length && t !== 0 && t < ln[n].priority; n++);
    (ln.splice(n, 0, e), n === 0 && lm(e));
  }
};
function Ju(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function aa(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function eh() {}
function ww(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ei(a);
        i.call(u);
      };
    }
    var a = Rg(t, r, e, 0, null, !1, !1, "", eh);
    return (
      (e._reactRootContainer = a),
      (e[Qt] = a.current),
      $s(e.nodeType === 8 ? e.parentNode : e),
      tr(),
      a
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Ei(c);
      l.call(u);
    };
  }
  var c = Xu(e, 0, !1, null, null, !1, !1, "", eh);
  return (
    (e._reactRootContainer = c),
    (e[Qt] = c.current),
    $s(e.nodeType === 8 ? e.parentNode : e),
    tr(function () {
      oa(t, c, n, r);
    }),
    c
  );
}
function la(e, t, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var c = Ei(a);
        l.call(c);
      };
    }
    oa(t, a, e, s);
  } else a = ww(n, t, e, s, r);
  return Ei(a);
}
sm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xs(t.pendingLanes);
        n !== 0 &&
          (vu(t, n | 1), Ke(t, ve()), !(Y & 6) && ((Wr = ve() + 500), Mn()));
      }
      break;
    case 13:
      (tr(function () {
        var r = Jt(e, 1);
        if (r !== null) {
          var s = Be();
          kt(r, e, 1, s);
        }
      }),
        Gu(e, 1));
  }
};
wu = function (e) {
  if (e.tag === 13) {
    var t = Jt(e, 134217728);
    if (t !== null) {
      var n = Be();
      kt(t, e, 134217728, n);
    }
    Gu(e, 134217728);
  }
};
om = function (e) {
  if (e.tag === 13) {
    var t = Sn(e),
      n = Jt(e, t);
    if (n !== null) {
      var r = Be();
      kt(n, e, t, r);
    }
    Gu(e, t);
  }
};
im = function () {
  return J;
};
am = function (e, t) {
  var n = J;
  try {
    return ((J = e), t());
  } finally {
    J = n;
  }
};
Jl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Vl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = Ji(r);
            if (!s) throw Error(T(90));
            (Ip(r), Vl(r, s));
          }
        }
      }
      break;
    case "textarea":
      $p(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Er(e, !!n.multiple, t, !1));
  }
};
Kp = Vu;
Yp = tr;
var yw = { usingClientEntryPoint: !1, Events: [so, jr, Ji, Vp, qp, Vu] },
  gs = {
    findFiberByHostInstance: Hn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  xw = {
    bundleType: gs.bundleType,
    version: gs.version,
    rendererPackageName: gs.rendererPackageName,
    rendererConfig: gs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: tn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Qp(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: gs.findFiberByHostInstance || vw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Mo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Mo.isDisabled && Mo.supportsFiber)
    try {
      ((Yi = Mo.inject(xw)), (Mt = Mo));
    } catch {}
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yw;
st.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ju(t)) throw Error(T(200));
  return gw(e, t, null, n);
};
st.createRoot = function (e, t) {
  if (!Ju(e)) throw Error(T(299));
  var n = !1,
    r = "",
    s = Tg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Xu(e, 1, !1, null, null, n, !1, r, s)),
    (e[Qt] = t.current),
    $s(e.nodeType === 8 ? e.parentNode : e),
    new Qu(t)
  );
};
st.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return ((e = Qp(t)), (e = e === null ? null : e.stateNode), e);
};
st.flushSync = function (e) {
  return tr(e);
};
st.hydrate = function (e, t, n) {
  if (!aa(t)) throw Error(T(200));
  return la(null, e, t, !0, n);
};
st.hydrateRoot = function (e, t, n) {
  if (!Ju(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    a = Tg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Rg(t, null, e, 1, n ?? null, s, !1, i, a)),
    (e[Qt] = t.current),
    $s(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s));
  return new ia(t);
};
st.render = function (e, t, n) {
  if (!aa(t)) throw Error(T(200));
  return la(null, e, t, !1, n);
};
st.unmountComponentAtNode = function (e) {
  if (!aa(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (tr(function () {
        la(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Qt] = null));
        });
      }),
      !0)
    : !1;
};
st.unstable_batchedUpdates = Vu;
st.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!aa(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return la(e, t, n, !1, r);
};
st.version = "18.2.0-next-9e3b772b8-20220608";
function Ag() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ag);
    } catch (e) {
      console.error(e);
    }
}
(Ag(), (Rp.exports = st));
var Og = Rp.exports,
  th = Og;
((Il.createRoot = th.createRoot), (Il.hydrateRoot = th.hydrateRoot));
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xs() {
  return (
    (Xs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Xs.apply(this, arguments)
  );
}
var hn;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(hn || (hn = {}));
const nh = "popstate";
function jw(e) {
  e === void 0 && (e = {});
  function t(s, i) {
    let {
      pathname: a = "/",
      search: l = "",
      hash: c = "",
    } = ar(s.location.hash.substr(1));
    return (
      !a.startsWith("/") && !a.startsWith(".") && (a = "/" + a),
      Ac(
        "",
        { pathname: a, search: l, hash: c },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || "default",
      )
    );
  }
  function n(s, i) {
    let a = s.document.querySelector("base"),
      l = "";
    if (a && a.getAttribute("href")) {
      let c = s.location.href,
        u = c.indexOf("#");
      l = u === -1 ? c : c.slice(0, u);
    }
    return l + "#" + (typeof i == "string" ? i : Ri(i));
  }
  function r(s, i) {
    ca(
      s.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(i) +
        ")",
    );
  }
  return Sw(t, n, r, e);
}
function me(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ca(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function bw() {
  return Math.random().toString(36).substr(2, 8);
}
function rh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ac(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Xs(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ar(t) : t,
      { state: n, key: (t && t.key) || r || bw() },
    )
  );
}
function Ri(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function ar(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function Sw(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: i = !1 } = r,
    a = s.history,
    l = hn.Pop,
    c = null,
    u = d();
  u == null && ((u = 0), a.replaceState(Xs({}, a.state, { idx: u }), ""));
  function d() {
    return (a.state || { idx: null }).idx;
  }
  function f() {
    l = hn.Pop;
    let v = d(),
      m = v == null ? null : v - u;
    ((u = v), c && c({ action: l, location: x.location, delta: m }));
  }
  function p(v, m) {
    l = hn.Push;
    let h = Ac(x.location, v, m);
    (n && n(h, v), (u = d() + 1));
    let w = rh(h, u),
      j = x.createHref(h);
    try {
      a.pushState(w, "", j);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      s.location.assign(j);
    }
    i && c && c({ action: l, location: x.location, delta: 1 });
  }
  function y(v, m) {
    l = hn.Replace;
    let h = Ac(x.location, v, m);
    (n && n(h, v), (u = d()));
    let w = rh(h, u),
      j = x.createHref(h);
    (a.replaceState(w, "", j),
      i && c && c({ action: l, location: x.location, delta: 0 }));
  }
  function g(v) {
    let m = s.location.origin !== "null" ? s.location.origin : s.location.href,
      h = typeof v == "string" ? v : Ri(v);
    return (
      (h = h.replace(/ $/, "%20")),
      me(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          h,
      ),
      new URL(h, m)
    );
  }
  let x = {
    get action() {
      return l;
    },
    get location() {
      return e(s, a);
    },
    listen(v) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(nh, f),
        (c = v),
        () => {
          (s.removeEventListener(nh, f), (c = null));
        }
      );
    },
    createHref(v) {
      return t(s, v);
    },
    createURL: g,
    encodeLocation(v) {
      let m = g(v);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: p,
    replace: y,
    go(v) {
      return a.go(v);
    },
  };
  return x;
}
var sh;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(sh || (sh = {}));
function Cw(e, t, n) {
  return (n === void 0 && (n = "/"), Pw(e, t, n));
}
function Pw(e, t, n, r) {
  let s = typeof t == "string" ? ar(t) : t,
    i = Vr(s.pathname || "/", n);
  if (i == null) return null;
  let a = Lg(e);
  kw(a);
  let l = null;
  for (let c = 0; l == null && c < a.length; ++c) {
    let u = Bw(i);
    l = Mw(a[c], u);
  }
  return l;
}
function Lg(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let s = (i, a, l) => {
    let c = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    c.relativePath.startsWith("/") &&
      (me(
        c.relativePath.startsWith(r),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (c.relativePath = c.relativePath.slice(r.length)));
    let u = Pn([r, c.relativePath]),
      d = n.concat(c);
    (i.children &&
      i.children.length > 0 &&
      (me(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      Lg(i.children, t, d, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: Lw(u, i.index), routesMeta: d }));
  };
  return (
    e.forEach((i, a) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) s(i, a);
      else for (let c of Dg(i.path)) s(i, a, c);
    }),
    t
  );
}
function Dg(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [i, ""] : [i];
  let a = Dg(r.join("/")),
    l = [];
  return (
    l.push(...a.map((c) => (c === "" ? i : [i, c].join("/")))),
    s && l.push(...a),
    l.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function kw(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Dw(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Nw = /^:[\w-]+$/,
  Ew = 3,
  Rw = 2,
  Tw = 1,
  Aw = 10,
  Ow = -2,
  oh = (e) => e === "*";
function Lw(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(oh) && (r += Ow),
    t && (r += Rw),
    n
      .filter((s) => !oh(s))
      .reduce((s, i) => s + (Nw.test(i) ? Ew : i === "" ? Tw : Aw), r)
  );
}
function Dw(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Mw(e, t, n) {
  let { routesMeta: r } = e,
    s = {},
    i = "/",
    a = [];
  for (let l = 0; l < r.length; ++l) {
    let c = r[l],
      u = l === r.length - 1,
      d = i === "/" ? t : t.slice(i.length) || "/",
      f = Oc(
        { path: c.relativePath, caseSensitive: c.caseSensitive, end: u },
        d,
      ),
      p = c.route;
    if (!f) return null;
    (Object.assign(s, f.params),
      a.push({
        params: s,
        pathname: Pn([i, f.pathname]),
        pathnameBase: Hw(Pn([i, f.pathnameBase])),
        route: p,
      }),
      f.pathnameBase !== "/" && (i = Pn([i, f.pathnameBase])));
  }
  return a;
}
function Oc(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = _w(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let i = s[0],
    a = i.replace(/(.)\/+$/, "$1"),
    l = s.slice(1);
  return {
    params: r.reduce((u, d, f) => {
      let { paramName: p, isOptional: y } = d;
      if (p === "*") {
        let x = l[f] || "";
        a = i.slice(0, i.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const g = l[f];
      return (
        y && !g ? (u[p] = void 0) : (u[p] = (g || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function _w(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ca(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, l, c) => (
            r.push({ paramName: l, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (s += "\\/*$")
        : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), r]
  );
}
function Bw(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ca(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Vr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Iw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Fw = (e) => Iw.test(e);
function $w(e, t) {
  t === void 0 && (t = "/");
  let {
      pathname: n,
      search: r = "",
      hash: s = "",
    } = typeof e == "string" ? ar(e) : e,
    i;
  if (n)
    if (Fw(n)) i = n;
    else {
      if (n.includes("//")) {
        let a = n;
        ((n = n.replace(/\/\/+/g, "/")),
          ca(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (a + " -> " + n),
          ));
      }
      n.startsWith("/") ? (i = ih(n.substring(1), "/")) : (i = ih(n, t));
    }
  else i = t;
  return { pathname: i, search: Uw(r), hash: Ww(s) };
}
function ih(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function wl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function zw(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Mg(e, t) {
  let n = zw(e);
  return t
    ? n.map((r, s) => (s === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function _g(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == "string"
    ? (s = ar(e))
    : ((s = Xs({}, e)),
      me(
        !s.pathname || !s.pathname.includes("?"),
        wl("?", "pathname", "search", s),
      ),
      me(
        !s.pathname || !s.pathname.includes("#"),
        wl("#", "pathname", "hash", s),
      ),
      me(!s.search || !s.search.includes("#"), wl("#", "search", "hash", s)));
  let i = e === "" || s.pathname === "",
    a = i ? "/" : s.pathname,
    l;
  if (a == null) l = n;
  else {
    let f = t.length - 1;
    if (!r && a.startsWith("..")) {
      let p = a.split("/");
      for (; p[0] === ".."; ) (p.shift(), (f -= 1));
      s.pathname = p.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let c = $w(s, l),
    u = a && a !== "/" && a.endsWith("/"),
    d = (i || a === ".") && n.endsWith("/");
  return (!c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c);
}
const Pn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Hw = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Uw = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Ww = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Vw(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Bg = ["post", "put", "patch", "delete"];
new Set(Bg);
const qw = ["get", ...Bg];
new Set(qw);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Gs() {
  return (
    (Gs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gs.apply(this, arguments)
  );
}
const ua = b.createContext(null),
  Ig = b.createContext(null),
  _n = b.createContext(null),
  da = b.createContext(null),
  nn = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Fg = b.createContext(null);
function Kw(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  io() || me(!1);
  let { basename: r, navigator: s } = b.useContext(_n),
    { hash: i, pathname: a, search: l } = fa(e, { relative: n }),
    c = a;
  return (
    r !== "/" && (c = a === "/" ? r : Pn([r, a])),
    s.createHref({ pathname: c, search: l, hash: i })
  );
}
function io() {
  return b.useContext(da) != null;
}
function es() {
  return (io() || me(!1), b.useContext(da).location);
}
function $g(e) {
  b.useContext(_n).static || b.useLayoutEffect(e);
}
function Et() {
  let { isDataRoute: e } = b.useContext(nn);
  return e ? ly() : Yw();
}
function Yw() {
  io() || me(!1);
  let e = b.useContext(ua),
    { basename: t, future: n, navigator: r } = b.useContext(_n),
    { matches: s } = b.useContext(nn),
    { pathname: i } = es(),
    a = JSON.stringify(Mg(s, n.v7_relativeSplatPath)),
    l = b.useRef(!1);
  return (
    $g(() => {
      l.current = !0;
    }),
    b.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = _g(u, JSON.parse(a), i, d.relative === "path");
        (e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Pn([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d));
      },
      [t, r, a, i, e],
    )
  );
}
const Xw = b.createContext(null);
function Gw(e) {
  let t = b.useContext(nn).outlet;
  return t && b.createElement(Xw.Provider, { value: e }, t);
}
function lr() {
  let { matches: e } = b.useContext(nn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function fa(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = b.useContext(_n),
    { matches: s } = b.useContext(nn),
    { pathname: i } = es(),
    a = JSON.stringify(Mg(s, r.v7_relativeSplatPath));
  return b.useMemo(() => _g(e, JSON.parse(a), i, n === "path"), [e, a, i, n]);
}
function Qw(e, t) {
  return Jw(e, t);
}
function Jw(e, t, n, r) {
  io() || me(!1);
  let { navigator: s } = b.useContext(_n),
    { matches: i } = b.useContext(nn),
    a = i[i.length - 1],
    l = a ? a.params : {};
  a && a.pathname;
  let c = a ? a.pathnameBase : "/";
  a && a.route;
  let u = es(),
    d;
  if (t) {
    var f;
    let v = typeof t == "string" ? ar(t) : t;
    (c === "/" || ((f = v.pathname) != null && f.startsWith(c)) || me(!1),
      (d = v));
  } else d = u;
  let p = d.pathname || "/",
    y = p;
  if (c !== "/") {
    let v = c.replace(/^\//, "").split("/");
    y = "/" + p.replace(/^\//, "").split("/").slice(v.length).join("/");
  }
  let g = Cw(e, { pathname: y }),
    x = ry(
      g &&
        g.map((v) =>
          Object.assign({}, v, {
            params: Object.assign({}, l, v.params),
            pathname: Pn([
              c,
              s.encodeLocation
                ? s.encodeLocation(v.pathname).pathname
                : v.pathname,
            ]),
            pathnameBase:
              v.pathnameBase === "/"
                ? c
                : Pn([
                    c,
                    s.encodeLocation
                      ? s.encodeLocation(v.pathnameBase).pathname
                      : v.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
      r,
    );
  return t && x
    ? b.createElement(
        da.Provider,
        {
          value: {
            location: Gs(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d,
            ),
            navigationType: hn.Pop,
          },
        },
        x,
      )
    : x;
}
function Zw() {
  let e = ay(),
    t = Vw(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return b.createElement(
    b.Fragment,
    null,
    b.createElement("h2", null, "Unexpected Application Error!"),
    b.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? b.createElement("pre", { style: s }, n) : null,
    null,
  );
}
const ey = b.createElement(Zw, null);
class ty extends b.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? b.createElement(
          nn.Provider,
          { value: this.props.routeContext },
          b.createElement(Fg.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function ny(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = b.useContext(ua);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    b.createElement(nn.Provider, { value: t }, r)
  );
}
function ry(e, t, n, r) {
  var s;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let a = e,
    l = (s = n) == null ? void 0 : s.errors;
  if (l != null) {
    let d = a.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0,
    );
    (d >= 0 || me(!1), (a = a.slice(0, Math.min(a.length, d + 1))));
  }
  let c = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < a.length; d++) {
      let f = a[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
        f.route.id)
      ) {
        let { loaderData: p, errors: y } = n,
          g =
            f.route.loader &&
            p[f.route.id] === void 0 &&
            (!y || y[f.route.id] === void 0);
        if (f.route.lazy || g) {
          ((c = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]));
          break;
        }
      }
    }
  return a.reduceRight((d, f, p) => {
    let y,
      g = !1,
      x = null,
      v = null;
    n &&
      ((y = l && f.route.id ? l[f.route.id] : void 0),
      (x = f.route.errorElement || ey),
      c &&
        (u < 0 && p === 0
          ? (cy("route-fallback"), (g = !0), (v = null))
          : u === p &&
            ((g = !0), (v = f.route.hydrateFallbackElement || null))));
    let m = t.concat(a.slice(0, p + 1)),
      h = () => {
        let w;
        return (
          y
            ? (w = x)
            : g
              ? (w = v)
              : f.route.Component
                ? (w = b.createElement(f.route.Component, null))
                : f.route.element
                  ? (w = f.route.element)
                  : (w = d),
          b.createElement(ny, {
            match: f,
            routeContext: { outlet: d, matches: m, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? b.createElement(ty, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: y,
          children: h(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var zg = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(zg || {}),
  Hg = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Hg || {});
function sy(e) {
  let t = b.useContext(ua);
  return (t || me(!1), t);
}
function oy(e) {
  let t = b.useContext(Ig);
  return (t || me(!1), t);
}
function iy(e) {
  let t = b.useContext(nn);
  return (t || me(!1), t);
}
function Ug(e) {
  let t = iy(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || me(!1), n.route.id);
}
function ay() {
  var e;
  let t = b.useContext(Fg),
    n = oy(),
    r = Ug();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ly() {
  let { router: e } = sy(zg.UseNavigateStable),
    t = Ug(Hg.UseNavigateStable),
    n = b.useRef(!1);
  return (
    $g(() => {
      n.current = !0;
    }),
    b.useCallback(
      function (s, i) {
        (i === void 0 && (i = {}),
          n.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, Gs({ fromRouteId: t }, i))));
      },
      [e, t],
    )
  );
}
const ah = {};
function cy(e, t, n) {
  ah[e] || (ah[e] = !0);
}
function uy(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function dy(e) {
  return Gw(e.context);
}
function ne(e) {
  me(!1);
}
function fy(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = hn.Pop,
    navigator: i,
    static: a = !1,
    future: l,
  } = e;
  io() && me(!1);
  let c = t.replace(/^\/*/, "/"),
    u = b.useMemo(
      () => ({
        basename: c,
        navigator: i,
        static: a,
        future: Gs({ v7_relativeSplatPath: !1 }, l),
      }),
      [c, l, i, a],
    );
  typeof r == "string" && (r = ar(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: p = "",
      state: y = null,
      key: g = "default",
    } = r,
    x = b.useMemo(() => {
      let v = Vr(d, c);
      return v == null
        ? null
        : {
            location: { pathname: v, search: f, hash: p, state: y, key: g },
            navigationType: s,
          };
    }, [c, d, f, p, y, g, s]);
  return x == null
    ? null
    : b.createElement(
        _n.Provider,
        { value: u },
        b.createElement(da.Provider, { children: n, value: x }),
      );
}
function hy(e) {
  let { children: t, location: n } = e;
  return Qw(Lc(t), n);
}
new Promise(() => {});
function Lc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    b.Children.forEach(e, (r, s) => {
      if (!b.isValidElement(r)) return;
      let i = [...t, s];
      if (r.type === b.Fragment) {
        n.push.apply(n, Lc(r.props.children, i));
        return;
      }
      (r.type !== ne && me(!1), !r.props.index || !r.props.children || me(!1));
      let a = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (a.children = Lc(r.props.children, i)), n.push(a));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ti() {
  return (
    (Ti = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ti.apply(this, arguments)
  );
}
function Wg(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    s,
    i;
  for (i = 0; i < r.length; i++)
    ((s = r[i]), !(t.indexOf(s) >= 0) && (n[s] = e[s]));
  return n;
}
function py(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function my(e, t) {
  return e.button === 0 && (!t || t === "_self") && !py(e);
}
const gy = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  vy = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  wy = "6";
try {
  window.__reactRouterVersion = wy;
} catch {}
const yy = b.createContext({ isTransitioning: !1 }),
  xy = "startTransition",
  lh = d2[xy];
function jy(e) {
  let { basename: t, children: n, future: r, window: s } = e,
    i = b.useRef();
  i.current == null && (i.current = jw({ window: s, v5Compat: !0 }));
  let a = i.current,
    [l, c] = b.useState({ action: a.action, location: a.location }),
    { v7_startTransition: u } = r || {},
    d = b.useCallback(
      (f) => {
        u && lh ? lh(() => c(f)) : c(f);
      },
      [c, u],
    );
  return (
    b.useLayoutEffect(() => a.listen(d), [a, d]),
    b.useEffect(() => uy(r), [r]),
    b.createElement(fy, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: a,
      future: r,
    })
  );
}
const by =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Sy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  U = b.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: s,
        reloadDocument: i,
        replace: a,
        state: l,
        target: c,
        to: u,
        preventScrollReset: d,
        viewTransition: f,
      } = t,
      p = Wg(t, gy),
      { basename: y } = b.useContext(_n),
      g,
      x = !1;
    if (typeof u == "string" && Sy.test(u) && ((g = u), by))
      try {
        let w = new URL(window.location.href),
          j = u.startsWith("//") ? new URL(w.protocol + u) : new URL(u),
          S = Vr(j.pathname, y);
        j.origin === w.origin && S != null
          ? (u = S + j.search + j.hash)
          : (x = !0);
      } catch {}
    let v = Kw(u, { relative: s }),
      m = Py(u, {
        replace: a,
        state: l,
        target: c,
        preventScrollReset: d,
        relative: s,
        viewTransition: f,
      });
    function h(w) {
      (r && r(w), w.defaultPrevented || m(w));
    }
    return b.createElement(
      "a",
      Ti({}, p, { href: g || v, onClick: x || i ? r : h, ref: n, target: c }),
    );
  }),
  xt = b.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: s = !1,
        className: i = "",
        end: a = !1,
        style: l,
        to: c,
        viewTransition: u,
        children: d,
      } = t,
      f = Wg(t, vy),
      p = fa(c, { relative: f.relative }),
      y = es(),
      g = b.useContext(Ig),
      { navigator: x, basename: v } = b.useContext(_n),
      m = g != null && ky(p) && u === !0,
      h = x.encodeLocation ? x.encodeLocation(p).pathname : p.pathname,
      w = y.pathname,
      j =
        g && g.navigation && g.navigation.location
          ? g.navigation.location.pathname
          : null;
    (s ||
      ((w = w.toLowerCase()),
      (j = j ? j.toLowerCase() : null),
      (h = h.toLowerCase())),
      j && v && (j = Vr(j, v) || j));
    const S = h !== "/" && h.endsWith("/") ? h.length - 1 : h.length;
    let C = w === h || (!a && w.startsWith(h) && w.charAt(S) === "/"),
      E =
        j != null &&
        (j === h || (!a && j.startsWith(h) && j.charAt(h.length) === "/")),
      R = { isActive: C, isPending: E, isTransitioning: m },
      L = C ? r : void 0,
      N;
    typeof i == "function"
      ? (N = i(R))
      : (N = [
          i,
          C ? "active" : null,
          E ? "pending" : null,
          m ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let $ = typeof l == "function" ? l(R) : l;
    return b.createElement(
      U,
      Ti({}, f, {
        "aria-current": L,
        className: N,
        ref: n,
        style: $,
        to: c,
        viewTransition: u,
      }),
      typeof d == "function" ? d(R) : d,
    );
  });
var Dc;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(Dc || (Dc = {}));
var ch;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(ch || (ch = {}));
function Cy(e) {
  let t = b.useContext(ua);
  return (t || me(!1), t);
}
function Py(e, t) {
  let {
      target: n,
      replace: r,
      state: s,
      preventScrollReset: i,
      relative: a,
      viewTransition: l,
    } = t === void 0 ? {} : t,
    c = Et(),
    u = es(),
    d = fa(e, { relative: a });
  return b.useCallback(
    (f) => {
      if (my(f, n)) {
        f.preventDefault();
        let p = r !== void 0 ? r : Ri(u) === Ri(d);
        c(e, {
          replace: p,
          state: s,
          preventScrollReset: i,
          relative: a,
          viewTransition: l,
        });
      }
    },
    [u, c, d, r, s, n, e, i, a, l],
  );
}
function ky(e, t) {
  t === void 0 && (t = {});
  let n = b.useContext(yy);
  n == null && me(!1);
  let { basename: r } = Cy(Dc.useViewTransitionState),
    s = fa(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = Vr(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    a = Vr(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Oc(s.pathname, a) != null || Oc(s.pathname, i) != null;
}
const ts = "/assets/Icon-DDnaw56_.jpeg";
var Vg = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  uh = Kt.createContext && Kt.createContext(Vg),
  kn = function () {
    return (
      (kn =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var s in t)
              Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
          }
          return e;
        }),
      kn.apply(this, arguments)
    );
  },
  Ny = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
        t.indexOf(r[s]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[s]) &&
          (n[r[s]] = e[r[s]]);
    return n;
  };
function qg(e) {
  return (
    e &&
    e.map(function (t, n) {
      return Kt.createElement(t.tag, kn({ key: n }, t.attr), qg(t.child));
    })
  );
}
function B(e) {
  return function (t) {
    return Kt.createElement(Ey, kn({ attr: kn({}, e.attr) }, t), qg(e.child));
  };
}
function Ey(e) {
  var t = function (n) {
    var r = e.attr,
      s = e.size,
      i = e.title,
      a = Ny(e, ["attr", "size", "title"]),
      l = s || n.size || "1em",
      c;
    return (
      n.className && (c = n.className),
      e.className && (c = (c ? c + " " : "") + e.className),
      Kt.createElement(
        "svg",
        kn(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          a,
          {
            className: c,
            style: kn(kn({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        i && Kt.createElement("title", null, i),
        e.children,
      )
    );
  };
  return uh !== void 0
    ? Kt.createElement(uh.Consumer, null, function (n) {
        return t(n);
      })
    : t(Vg);
}
function Ry(e) {
  return B({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212",
        },
      },
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69",
        },
      },
    ],
  })(e);
}
function Kg(e) {
  return B({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "rect",
        attr: {
          width: "416",
          height: "288",
          x: "48",
          y: "144",
          fill: "none",
          strokeLinejoin: "round",
          strokeWidth: "32",
          rx: "48",
          ry: "48",
        },
      },
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49",
        },
      },
      {
        tag: "path",
        attr: { d: "M368 320a32 32 0 1132-32 32 32 0 01-32 32z" },
      },
    ],
  })(e);
}
function dh(e) {
  return B({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "path", attr: { d: "M3 5v14" } },
      { tag: "path", attr: { d: "M21 12H7" } },
      { tag: "path", attr: { d: "m15 18 6-6-6-6" } },
    ],
  })(e);
}
function Ty(e) {
  return B({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "path", attr: { d: "M12 2v8" } },
      { tag: "path", attr: { d: "m16 6-4 4-4-4" } },
      {
        tag: "rect",
        attr: { width: "20", height: "8", x: "2", y: "14", rx: "2" },
      },
      { tag: "path", attr: { d: "M6 18h.01" } },
      { tag: "path", attr: { d: "M10 18h.01" } },
    ],
  })(e);
}
function Ay(e) {
  return B({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "path", attr: { d: "m2 9 3-3 3 3" } },
      { tag: "path", attr: { d: "M13 18H7a2 2 0 0 1-2-2V6" } },
      { tag: "path", attr: { d: "m22 15-3 3-3-3" } },
      { tag: "path", attr: { d: "M11 6h6a2 2 0 0 1 2 2v10" } },
    ],
  })(e);
}
function Oy(e) {
  return B({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z",
        },
      },
    ],
  })(e);
}
function Ly(e) {
  return B({
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z",
        },
      },
    ],
  })(e);
}
function Mc(e) {
  return B({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm292 116V256h70.9c10.7 0 16.1-13 8.5-20.5L264.5 121.2c-4.7-4.7-12.2-4.7-16.9 0l-115 114.3c-7.6 7.6-2.2 20.5 8.5 20.5H212v116c0 6.6 5.4 12 12 12h64c6.6 0 12-5.4 12-12z",
        },
      },
    ],
  })(e);
}
function _c(e) {
  return B({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z",
        },
      },
    ],
  })(e);
}
function Yn(e) {
  return B({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z",
        },
      },
    ],
  })(e);
}
function fh(e) {
  return B({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",
        },
      },
    ],
  })(e);
}
function Bc(e) {
  return B({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z",
        },
      },
    ],
  })(e);
}
function Dy(e) {
  return B({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z",
        },
      },
    ],
  })(e);
}
function My(e) {
  return B({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z",
        },
      },
    ],
  })(e);
}
function Zu(e) {
  return B({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z",
        },
      },
    ],
  })(e);
}
function Dr(e) {
  return B({
    attr: { viewBox: "0 0 288 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z",
        },
      },
    ],
  })(e);
}
function hh(e) {
  return B({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z",
        },
      },
    ],
  })(e);
}
function _y(e) {
  return B({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z",
        },
      },
    ],
  })(e);
}
function ph(e) {
  return B({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",
        },
      },
    ],
  })(e);
}
function yl(e) {
  return B({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z",
        },
      },
    ],
  })(e);
}
function xl(e) {
  return B({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z",
        },
      },
    ],
  })(e);
}
function By(e) {
  return B({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z",
        },
      },
    ],
  })(e);
}
function mh(e) {
  return B({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z",
        },
      },
    ],
  })(e);
}
function Iy(e) {
  return B({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",
        },
      },
    ],
  })(e);
}
function Fy(e) {
  return B({
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm96 304c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm0-192c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8v16z",
        },
      },
    ],
  })(e);
}
function gh(e) {
  return B({
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M109.25 173.25c24.99-24.99 24.99-65.52 0-90.51-24.99-24.99-65.52-24.99-90.51 0-24.99 24.99-24.99 65.52 0 90.51 25 25 65.52 25 90.51 0zm256 165.49c-24.99-24.99-65.52-24.99-90.51 0-24.99 24.99-24.99 65.52 0 90.51 24.99 24.99 65.52 24.99 90.51 0 25-24.99 25-65.51 0-90.51zm-1.94-231.43l-22.62-22.62c-12.5-12.5-32.76-12.5-45.25 0L20.69 359.44c-12.5 12.5-12.5 32.76 0 45.25l22.62 22.62c12.5 12.5 32.76 12.5 45.25 0l274.75-274.75c12.5-12.49 12.5-32.75 0-45.25z",
        },
      },
    ],
  })(e);
}
function vh(e) {
  return B({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z",
        },
      },
    ],
  })(e);
}
function Yg(e) {
  return B({
    attr: { viewBox: "0 0 352 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
        },
      },
    ],
  })(e);
}
function $y(e) {
  return B({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z",
        },
      },
    ],
  })(e);
}
function wh(e) {
  return B({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z",
        },
      },
    ],
  })(e);
}
function zy(e) {
  return B({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z",
        },
      },
    ],
  })(e);
}
function Xg(e) {
  return B({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",
        },
      },
    ],
  })(e);
}
function jl(e) {
  return B({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
        },
      },
    ],
  })(e);
}
function Gg(e) {
  return B({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z",
        },
      },
    ],
  })(e);
}
function Hy(e) {
  return B({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z",
        },
      },
    ],
  })(e);
}
function Uy(e) {
  return B({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z",
        },
      },
    ],
  })(e);
}
function Wy(e) {
  return B({
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z",
        },
      },
    ],
  })(e);
}
function Ic(e) {
  return B({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z",
        },
      },
    ],
  })(e);
}
function Vy(e) {
  return B({
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z",
        },
      },
    ],
  })(e);
}
function qy(e) {
  return B({
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: { d: "m15 12 5-4-5-4v2.999H2v2h13zm7 3H9v-3l-5 4 5 4v-3h13z" },
      },
    ],
  })(e);
}
function yh(e) {
  return B({
    attr: { viewBox: "0 0 32 32" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M 14.5 3 C 12.567 3 11 4.567 11 6.5 C 11 10 17 13 17 13 C 17 13 23 10 23 6.5 C 23 4.567 21.433 3 19.5 3 C 18.519 3 17.635 3.4066406 17 4.0566406 C 16.365 3.4066406 15.481 3 14.5 3 z M 14.5 5 C 14.904 5 15.284313 5.160125 15.570312 5.453125 L 16.103516 6 L 17.896484 6 L 18.429688 5.453125 C 18.715688 5.160125 19.096 5 19.5 5 C 20.327 5 21 5.673 21 6.5 C 21 7.761 18.894 9.5758438 17 10.714844 C 15.105 9.5748437 13 7.761 13 6.5 C 13 5.673 13.673 5 14.5 5 z M 19.21875 13.978516 L 17.582031 15.126953 L 20.191406 18.849609 L 16.589844 21.34375 L 14.046875 20.027344 C 15.221946 19.435735 16.740633 18.671002 16.746094 18.667969 L 16.757812 18.660156 L 16.767578 18.654297 C 17.73002 18.08786 18.223142 16.919812 17.902344 15.808594 L 17.902344 15.806641 C 17.522685 14.49269 16.123178 13.720962 14.808594 14.099609 L 14.806641 14.099609 L 7.6953125 16.082031 L 2.9882812 19.316406 L 4.8828125 27.037109 L 9.9277344 25.214844 L 17.074219 28.914062 L 28.943359 20.697266 L 27.806641 19.052734 L 16.925781 26.585938 L 10.072266 23.035156 L 6.2949219 24.400391 L 5.2617188 20.183594 L 8.5546875 17.917969 L 15.357422 16.021484 L 15.361328 16.021484 C 15.638162 15.941494 15.900321 16.085904 15.980469 16.363281 C 16.047189 16.594407 15.942859 16.815375 15.755859 16.927734 C 15.723219 16.944614 13.072686 18.278992 11.398438 19.121094 L 9.6484375 20 L 16.740234 23.673828 L 22.984375 19.349609 L 19.21875 13.978516 z",
        },
      },
    ],
  })(e);
}
function Ky(e) {
  return B({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z",
        },
      },
    ],
  })(e);
}
function Yy(e) {
  return B({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
        },
      },
    ],
  })(e);
}
function Xy(e) {
  return B({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } },
      {
        tag: "path",
        attr: { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" },
      },
    ],
  })(e);
}
function Gy(e) {
  return B({
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12 1.25c2.487 0 4.773.402 6.466 1.079.844.337 1.577.758 2.112 1.264.536.507.922 1.151.922 1.907v12.987l-.026.013h.026c0 .756-.386 1.4-.922 1.907-.535.506-1.268.927-2.112 1.264-1.693.677-3.979 1.079-6.466 1.079s-4.774-.402-6.466-1.079c-.844-.337-1.577-.758-2.112-1.264C2.886 19.9 2.5 19.256 2.5 18.5h.026l-.026-.013V5.5c0-.756.386-1.4.922-1.907.535-.506 1.268-.927 2.112-1.264C7.226 1.652 9.513 1.25 12 1.25ZM4 14.371v4.116l-.013.013H4c0 .211.103.487.453.817.351.332.898.666 1.638.962 1.475.589 3.564.971 5.909.971 2.345 0 4.434-.381 5.909-.971.739-.296 1.288-.63 1.638-.962.349-.33.453-.607.453-.817h.013L20 18.487v-4.116a7.85 7.85 0 0 1-1.534.8c-1.693.677-3.979 1.079-6.466 1.079s-4.774-.402-6.466-1.079a7.843 7.843 0 0 1-1.534-.8ZM20 12V7.871a7.85 7.85 0 0 1-1.534.8C16.773 9.348 14.487 9.75 12 9.75s-4.774-.402-6.466-1.079A7.85 7.85 0 0 1 4 7.871V12c0 .21.104.487.453.817.35.332.899.666 1.638.961 1.475.59 3.564.972 5.909.972 2.345 0 4.434-.382 5.909-.972.74-.295 1.287-.629 1.638-.96.35-.33.453-.607.453-.818ZM4 5.5c0 .211.103.487.453.817.351.332.898.666 1.638.962 1.475.589 3.564.971 5.909.971 2.345 0 4.434-.381 5.909-.971.739-.296 1.288-.63 1.638-.962.349-.33.453-.607.453-.817 0-.211-.103-.487-.453-.817-.351-.332-.898-.666-1.638-.962-1.475-.589-3.564-.971-5.909-.971-2.345 0-4.434.381-5.909.971-.739.296-1.288.63-1.638.962C4.104 5.013 4 5.29 4 5.5Z",
        },
      },
    ],
  })(e);
}
function xh(e) {
  return B({
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z",
        },
      },
    ],
  })(e);
}
function Qs(e) {
  return B({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4",
        },
      },
    ],
  })(e);
}
function Qy(e) {
  return B({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "path", attr: { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" } },
      { tag: "polyline", attr: { points: "16 17 21 12 16 7" } },
      { tag: "line", attr: { x1: "21", y1: "12", x2: "9", y2: "12" } },
    ],
  })(e);
}
function Jy(e) {
  return B({
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: { d: "M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" },
      },
    ],
  })(e);
}
var Qg = { exports: {} },
  Jg = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qr = b;
function Zy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ex = typeof Object.is == "function" ? Object.is : Zy,
  tx = qr.useState,
  nx = qr.useEffect,
  rx = qr.useLayoutEffect,
  sx = qr.useDebugValue;
function ox(e, t) {
  var n = t(),
    r = tx({ inst: { value: n, getSnapshot: t } }),
    s = r[0].inst,
    i = r[1];
  return (
    rx(
      function () {
        ((s.value = n), (s.getSnapshot = t), bl(s) && i({ inst: s }));
      },
      [e, n, t],
    ),
    nx(
      function () {
        return (
          bl(s) && i({ inst: s }),
          e(function () {
            bl(s) && i({ inst: s });
          })
        );
      },
      [e],
    ),
    sx(n),
    n
  );
}
function bl(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ex(e, n);
  } catch {
    return !0;
  }
}
function ix(e, t) {
  return t();
}
var ax =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? ix
    : ox;
Jg.useSyncExternalStore =
  qr.useSyncExternalStore !== void 0 ? qr.useSyncExternalStore : ax;
Qg.exports = Jg;
var lx = Qg.exports,
  Zg = { exports: {} },
  ev = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ha = b,
  cx = lx;
function ux(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dx = typeof Object.is == "function" ? Object.is : ux,
  fx = cx.useSyncExternalStore,
  hx = ha.useRef,
  px = ha.useEffect,
  mx = ha.useMemo,
  gx = ha.useDebugValue;
ev.useSyncExternalStoreWithSelector = function (e, t, n, r, s) {
  var i = hx(null);
  if (i.current === null) {
    var a = { hasValue: !1, value: null };
    i.current = a;
  } else a = i.current;
  i = mx(
    function () {
      function c(y) {
        if (!u) {
          if (((u = !0), (d = y), (y = r(y)), s !== void 0 && a.hasValue)) {
            var g = a.value;
            if (s(g, y)) return (f = g);
          }
          return (f = y);
        }
        if (((g = f), dx(d, y))) return g;
        var x = r(y);
        return s !== void 0 && s(g, x) ? g : ((d = y), (f = x));
      }
      var u = !1,
        d,
        f,
        p = n === void 0 ? null : n;
      return [
        function () {
          return c(t());
        },
        p === null
          ? void 0
          : function () {
              return c(p());
            },
      ];
    },
    [t, n, r, s],
  );
  var l = fx(e, i[0], i[1]);
  return (
    px(
      function () {
        ((a.hasValue = !0), (a.value = l));
      },
      [l],
    ),
    gx(l),
    l
  );
};
Zg.exports = ev;
var vx = Zg.exports;
function wx(e) {
  e();
}
let tv = wx;
const yx = (e) => (tv = e),
  xx = () => tv,
  jh = Symbol.for("react-redux-context"),
  bh = typeof globalThis < "u" ? globalThis : {};
function jx() {
  var e;
  if (!b.createContext) return {};
  const t = (e = bh[jh]) != null ? e : (bh[jh] = new Map());
  let n = t.get(b.createContext);
  return (n || ((n = b.createContext(null)), t.set(b.createContext, n)), n);
}
const An = jx();
function ed(e = An) {
  return function () {
    return b.useContext(e);
  };
}
const nv = ed(),
  bx = () => {
    throw new Error("uSES not initialized!");
  };
let rv = bx;
const Sx = (e) => {
    rv = e;
  },
  Cx = (e, t) => e === t;
function Px(e = An) {
  const t = e === An ? nv : ed(e);
  return function (r, s = {}) {
    const {
        equalityFn: i = Cx,
        stabilityCheck: a = void 0,
        noopCheck: l = void 0,
      } = typeof s == "function" ? { equalityFn: s } : s,
      {
        store: c,
        subscription: u,
        getServerState: d,
        stabilityCheck: f,
        noopCheck: p,
      } = t();
    b.useRef(!0);
    const y = b.useCallback(
        {
          [r.name](x) {
            return r(x);
          },
        }[r.name],
        [r, f, a],
      ),
      g = rv(u.addNestedSub, c.getState, d || c.getState, y, i);
    return (b.useDebugValue(g), g);
  };
}
const Ye = Px();
var sv = { exports: {} },
  Z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pe = typeof Symbol == "function" && Symbol.for,
  td = Pe ? Symbol.for("react.element") : 60103,
  nd = Pe ? Symbol.for("react.portal") : 60106,
  pa = Pe ? Symbol.for("react.fragment") : 60107,
  ma = Pe ? Symbol.for("react.strict_mode") : 60108,
  ga = Pe ? Symbol.for("react.profiler") : 60114,
  va = Pe ? Symbol.for("react.provider") : 60109,
  wa = Pe ? Symbol.for("react.context") : 60110,
  rd = Pe ? Symbol.for("react.async_mode") : 60111,
  ya = Pe ? Symbol.for("react.concurrent_mode") : 60111,
  xa = Pe ? Symbol.for("react.forward_ref") : 60112,
  ja = Pe ? Symbol.for("react.suspense") : 60113,
  kx = Pe ? Symbol.for("react.suspense_list") : 60120,
  ba = Pe ? Symbol.for("react.memo") : 60115,
  Sa = Pe ? Symbol.for("react.lazy") : 60116,
  Nx = Pe ? Symbol.for("react.block") : 60121,
  Ex = Pe ? Symbol.for("react.fundamental") : 60117,
  Rx = Pe ? Symbol.for("react.responder") : 60118,
  Tx = Pe ? Symbol.for("react.scope") : 60119;
function it(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case td:
        switch (((e = e.type), e)) {
          case rd:
          case ya:
          case pa:
          case ga:
          case ma:
          case ja:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case wa:
              case xa:
              case Sa:
              case ba:
              case va:
                return e;
              default:
                return t;
            }
        }
      case nd:
        return t;
    }
  }
}
function ov(e) {
  return it(e) === ya;
}
Z.AsyncMode = rd;
Z.ConcurrentMode = ya;
Z.ContextConsumer = wa;
Z.ContextProvider = va;
Z.Element = td;
Z.ForwardRef = xa;
Z.Fragment = pa;
Z.Lazy = Sa;
Z.Memo = ba;
Z.Portal = nd;
Z.Profiler = ga;
Z.StrictMode = ma;
Z.Suspense = ja;
Z.isAsyncMode = function (e) {
  return ov(e) || it(e) === rd;
};
Z.isConcurrentMode = ov;
Z.isContextConsumer = function (e) {
  return it(e) === wa;
};
Z.isContextProvider = function (e) {
  return it(e) === va;
};
Z.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === td;
};
Z.isForwardRef = function (e) {
  return it(e) === xa;
};
Z.isFragment = function (e) {
  return it(e) === pa;
};
Z.isLazy = function (e) {
  return it(e) === Sa;
};
Z.isMemo = function (e) {
  return it(e) === ba;
};
Z.isPortal = function (e) {
  return it(e) === nd;
};
Z.isProfiler = function (e) {
  return it(e) === ga;
};
Z.isStrictMode = function (e) {
  return it(e) === ma;
};
Z.isSuspense = function (e) {
  return it(e) === ja;
};
Z.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === pa ||
    e === ya ||
    e === ga ||
    e === ma ||
    e === ja ||
    e === kx ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Sa ||
        e.$$typeof === ba ||
        e.$$typeof === va ||
        e.$$typeof === wa ||
        e.$$typeof === xa ||
        e.$$typeof === Ex ||
        e.$$typeof === Rx ||
        e.$$typeof === Tx ||
        e.$$typeof === Nx))
  );
};
Z.typeOf = it;
sv.exports = Z;
var Ax = sv.exports,
  iv = Ax,
  Ox = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Lx = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  av = {};
av[iv.ForwardRef] = Ox;
av[iv.Memo] = Lx;
var ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sd = Symbol.for("react.element"),
  od = Symbol.for("react.portal"),
  Ca = Symbol.for("react.fragment"),
  Pa = Symbol.for("react.strict_mode"),
  ka = Symbol.for("react.profiler"),
  Na = Symbol.for("react.provider"),
  Ea = Symbol.for("react.context"),
  Dx = Symbol.for("react.server_context"),
  Ra = Symbol.for("react.forward_ref"),
  Ta = Symbol.for("react.suspense"),
  Aa = Symbol.for("react.suspense_list"),
  Oa = Symbol.for("react.memo"),
  La = Symbol.for("react.lazy"),
  Mx = Symbol.for("react.offscreen"),
  lv;
lv = Symbol.for("react.module.reference");
function vt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case sd:
        switch (((e = e.type), e)) {
          case Ca:
          case ka:
          case Pa:
          case Ta:
          case Aa:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Dx:
              case Ea:
              case Ra:
              case La:
              case Oa:
              case Na:
                return e;
              default:
                return t;
            }
        }
      case od:
        return t;
    }
  }
}
ee.ContextConsumer = Ea;
ee.ContextProvider = Na;
ee.Element = sd;
ee.ForwardRef = Ra;
ee.Fragment = Ca;
ee.Lazy = La;
ee.Memo = Oa;
ee.Portal = od;
ee.Profiler = ka;
ee.StrictMode = Pa;
ee.Suspense = Ta;
ee.SuspenseList = Aa;
ee.isAsyncMode = function () {
  return !1;
};
ee.isConcurrentMode = function () {
  return !1;
};
ee.isContextConsumer = function (e) {
  return vt(e) === Ea;
};
ee.isContextProvider = function (e) {
  return vt(e) === Na;
};
ee.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === sd;
};
ee.isForwardRef = function (e) {
  return vt(e) === Ra;
};
ee.isFragment = function (e) {
  return vt(e) === Ca;
};
ee.isLazy = function (e) {
  return vt(e) === La;
};
ee.isMemo = function (e) {
  return vt(e) === Oa;
};
ee.isPortal = function (e) {
  return vt(e) === od;
};
ee.isProfiler = function (e) {
  return vt(e) === ka;
};
ee.isStrictMode = function (e) {
  return vt(e) === Pa;
};
ee.isSuspense = function (e) {
  return vt(e) === Ta;
};
ee.isSuspenseList = function (e) {
  return vt(e) === Aa;
};
ee.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ca ||
    e === ka ||
    e === Pa ||
    e === Ta ||
    e === Aa ||
    e === Mx ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === La ||
        e.$$typeof === Oa ||
        e.$$typeof === Na ||
        e.$$typeof === Ea ||
        e.$$typeof === Ra ||
        e.$$typeof === lv ||
        e.getModuleId !== void 0))
  );
};
ee.typeOf = vt;
function _x() {
  const e = xx();
  let t = null,
    n = null;
  return {
    clear() {
      ((t = null), (n = null));
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) (r.callback(), (r = r.next));
      });
    },
    get() {
      let r = [],
        s = t;
      for (; s; ) (r.push(s), (s = s.next));
      return r;
    },
    subscribe(r) {
      let s = !0,
        i = (n = { callback: r, next: null, prev: n });
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !s ||
            t === null ||
            ((s = !1),
            i.next ? (i.next.prev = i.prev) : (n = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next));
        }
      );
    },
  };
}
const Sh = { notify() {}, get: () => [] };
function Bx(e, t) {
  let n,
    r = Sh,
    s = 0,
    i = !1;
  function a(x) {
    d();
    const v = r.subscribe(x);
    let m = !1;
    return () => {
      m || ((m = !0), v(), f());
    };
  }
  function l() {
    r.notify();
  }
  function c() {
    g.onStateChange && g.onStateChange();
  }
  function u() {
    return i;
  }
  function d() {
    (s++, n || ((n = e.subscribe(c)), (r = _x())));
  }
  function f() {
    (s--, n && s === 0 && (n(), (n = void 0), r.clear(), (r = Sh)));
  }
  function p() {
    i || ((i = !0), d());
  }
  function y() {
    i && ((i = !1), f());
  }
  const g = {
    addNestedSub: a,
    notifyNestedSubs: l,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: p,
    tryUnsubscribe: y,
    getListeners: () => r,
  };
  return g;
}
const Ix =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Fx = Ix ? b.useLayoutEffect : b.useEffect;
function $x({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: s = "once",
  noopCheck: i = "once",
}) {
  const a = b.useMemo(() => {
      const u = Bx(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: s,
        noopCheck: i,
      };
    }, [e, r, s, i]),
    l = b.useMemo(() => e.getState(), [e]);
  Fx(() => {
    const { subscription: u } = a;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      l !== e.getState() && u.notifyNestedSubs(),
      () => {
        (u.tryUnsubscribe(), (u.onStateChange = void 0));
      }
    );
  }, [a, l]);
  const c = t || An;
  return b.createElement(c.Provider, { value: a }, n);
}
function cv(e = An) {
  const t = e === An ? nv : ed(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const zx = cv();
function Hx(e = An) {
  const t = e === An ? zx : cv(e);
  return function () {
    return t().dispatch;
  };
}
const cr = Hx();
Sx(vx.useSyncExternalStoreWithSelector);
yx(Og.unstable_batchedUpdates);
function Ct(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (n.length
        ? " " +
          n
            .map(function (s) {
              return "'" + s + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf",
  );
}
function On(e) {
  return !!e && !!e[ae];
}
function en(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != "object") return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var s = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
      return (
        s === Object ||
        (typeof s == "function" && Function.toString.call(s) === Qx)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[Th] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[Th]) ||
      id(e) ||
      ad(e))
  );
}
function nr(e, t, n) {
  (n === void 0 && (n = !1),
    ns(e) === 0
      ? (n ? Object.keys : _r)(e).forEach(function (r) {
          (n && typeof r == "symbol") || t(r, e[r], e);
        })
      : e.forEach(function (r, s) {
          return t(s, r, e);
        }));
}
function ns(e) {
  var t = e[ae];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
      ? 1
      : id(e)
        ? 2
        : ad(e)
          ? 3
          : 0;
}
function Mr(e, t) {
  return ns(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ux(e, t) {
  return ns(e) === 2 ? e.get(t) : e[t];
}
function uv(e, t, n) {
  var r = ns(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function dv(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function id(e) {
  return Xx && e instanceof Map;
}
function ad(e) {
  return Gx && e instanceof Set;
}
function zn(e) {
  return e.o || e.t;
}
function ld(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = hv(e);
  delete t[ae];
  for (var n = _r(t), r = 0; r < n.length; r++) {
    var s = n[r],
      i = t[s];
    (i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (t[s] = {
          configurable: !0,
          writable: !0,
          enumerable: i.enumerable,
          value: e[s],
        }));
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function cd(e, t) {
  return (
    t === void 0 && (t = !1),
    ud(e) ||
      On(e) ||
      !en(e) ||
      (ns(e) > 1 && (e.set = e.add = e.clear = e.delete = Wx),
      Object.freeze(e),
      t &&
        nr(
          e,
          function (n, r) {
            return cd(r, !0);
          },
          !0,
        )),
    e
  );
}
function Wx() {
  Ct(2);
}
function ud(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function Bt(e) {
  var t = Hc[e];
  return (t || Ct(18, e), t);
}
function Vx(e, t) {
  Hc[e] || (Hc[e] = t);
}
function Fc() {
  return Js;
}
function Sl(e, t) {
  t && (Bt("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function Ai(e) {
  ($c(e), e.p.forEach(qx), (e.p = null));
}
function $c(e) {
  e === Js && (Js = e.l);
}
function Ch(e) {
  return (Js = { p: [], l: Js, h: e, m: !0, _: 0 });
}
function qx(e) {
  var t = e[ae];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function Cl(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.O || Bt("ES5").S(t, e, r),
    r
      ? (n[ae].P && (Ai(t), Ct(4)),
        en(e) && ((e = Oi(t, e)), t.l || Li(t, e)),
        t.u && Bt("Patches").M(n[ae].t, e, t.u, t.s))
      : (e = Oi(t, n, [])),
    Ai(t),
    t.u && t.v(t.u, t.s),
    e !== fv ? e : void 0
  );
}
function Oi(e, t, n) {
  if (ud(t)) return t;
  var r = t[ae];
  if (!r)
    return (
      nr(
        t,
        function (l, c) {
          return Ph(e, r, t, l, c, n);
        },
        !0,
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return (Li(e, r.t, !0), r.t);
  if (!r.I) {
    ((r.I = !0), r.A._--);
    var s = r.i === 4 || r.i === 5 ? (r.o = ld(r.k)) : r.o,
      i = s,
      a = !1;
    (r.i === 3 && ((i = new Set(s)), s.clear(), (a = !0)),
      nr(i, function (l, c) {
        return Ph(e, r, s, l, c, n, a);
      }),
      Li(e, s, !1),
      n && e.u && Bt("Patches").N(r, n, e.u, e.s));
  }
  return r.o;
}
function Ph(e, t, n, r, s, i, a) {
  if (On(s)) {
    var l = Oi(e, s, i && t && t.i !== 3 && !Mr(t.R, r) ? i.concat(r) : void 0);
    if ((uv(n, r, l), !On(l))) return;
    e.m = !1;
  } else a && n.add(s);
  if (en(s) && !ud(s)) {
    if (!e.h.D && e._ < 1) return;
    (Oi(e, s), (t && t.A.l) || Li(e, s));
  }
}
function Li(e, t, n) {
  (n === void 0 && (n = !1), !e.l && e.h.D && e.m && cd(t, n));
}
function Pl(e, t) {
  var n = e[ae];
  return (n ? zn(n) : e)[t];
}
function kh(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function un(e) {
  e.P || ((e.P = !0), e.l && un(e.l));
}
function kl(e) {
  e.o || (e.o = ld(e.t));
}
function zc(e, t, n) {
  var r = id(t)
    ? Bt("MapSet").F(t, n)
    : ad(t)
      ? Bt("MapSet").T(t, n)
      : e.O
        ? (function (s, i) {
            var a = Array.isArray(s),
              l = {
                i: a ? 1 : 0,
                A: i ? i.A : Fc(),
                P: !1,
                I: !1,
                R: {},
                l: i,
                t: s,
                k: null,
                o: null,
                j: null,
                C: !1,
              },
              c = l,
              u = Zs;
            a && ((c = [l]), (u = bs));
            var d = Proxy.revocable(c, u),
              f = d.revoke,
              p = d.proxy;
            return ((l.k = p), (l.j = f), p);
          })(t, n)
        : Bt("ES5").J(t, n);
  return ((n ? n.A : Fc()).p.push(r), r);
}
function Kx(e) {
  return (
    On(e) || Ct(22, e),
    (function t(n) {
      if (!en(n)) return n;
      var r,
        s = n[ae],
        i = ns(n);
      if (s) {
        if (!s.P && (s.i < 4 || !Bt("ES5").K(s))) return s.t;
        ((s.I = !0), (r = Nh(n, i)), (s.I = !1));
      } else r = Nh(n, i);
      return (
        nr(r, function (a, l) {
          (s && Ux(s.t, a) === l) || uv(r, a, t(l));
        }),
        i === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function Nh(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return ld(e);
}
function Yx() {
  function e(i, a) {
    var l = s[i];
    return (
      l
        ? (l.enumerable = a)
        : (s[i] = l =
            {
              configurable: !0,
              enumerable: a,
              get: function () {
                var c = this[ae];
                return Zs.get(c, i);
              },
              set: function (c) {
                var u = this[ae];
                Zs.set(u, i, c);
              },
            }),
      l
    );
  }
  function t(i) {
    for (var a = i.length - 1; a >= 0; a--) {
      var l = i[a][ae];
      if (!l.P)
        switch (l.i) {
          case 5:
            r(l) && un(l);
            break;
          case 4:
            n(l) && un(l);
        }
    }
  }
  function n(i) {
    for (var a = i.t, l = i.k, c = _r(l), u = c.length - 1; u >= 0; u--) {
      var d = c[u];
      if (d !== ae) {
        var f = a[d];
        if (f === void 0 && !Mr(a, d)) return !0;
        var p = l[d],
          y = p && p[ae];
        if (y ? y.t !== f : !dv(p, f)) return !0;
      }
    }
    var g = !!a[ae];
    return c.length !== _r(a).length + (g ? 0 : 1);
  }
  function r(i) {
    var a = i.k;
    if (a.length !== i.t.length) return !0;
    var l = Object.getOwnPropertyDescriptor(a, a.length - 1);
    if (l && !l.get) return !0;
    for (var c = 0; c < a.length; c++) if (!a.hasOwnProperty(c)) return !0;
    return !1;
  }
  var s = {};
  Vx("ES5", {
    J: function (i, a) {
      var l = Array.isArray(i),
        c = (function (d, f) {
          if (d) {
            for (var p = Array(f.length), y = 0; y < f.length; y++)
              Object.defineProperty(p, "" + y, e(y, !0));
            return p;
          }
          var g = hv(f);
          delete g[ae];
          for (var x = _r(g), v = 0; v < x.length; v++) {
            var m = x[v];
            g[m] = e(m, d || !!g[m].enumerable);
          }
          return Object.create(Object.getPrototypeOf(f), g);
        })(l, i),
        u = {
          i: l ? 5 : 4,
          A: a ? a.A : Fc(),
          P: !1,
          I: !1,
          R: {},
          l: a,
          t: i,
          k: c,
          o: null,
          g: !1,
          C: !1,
        };
      return (Object.defineProperty(c, ae, { value: u, writable: !0 }), c);
    },
    S: function (i, a, l) {
      l
        ? On(a) && a[ae].A === i && t(i.p)
        : (i.u &&
            (function c(u) {
              if (u && typeof u == "object") {
                var d = u[ae];
                if (d) {
                  var f = d.t,
                    p = d.k,
                    y = d.R,
                    g = d.i;
                  if (g === 4)
                    (nr(p, function (w) {
                      w !== ae &&
                        (f[w] !== void 0 || Mr(f, w)
                          ? y[w] || c(p[w])
                          : ((y[w] = !0), un(d)));
                    }),
                      nr(f, function (w) {
                        p[w] !== void 0 || Mr(p, w) || ((y[w] = !1), un(d));
                      }));
                  else if (g === 5) {
                    if ((r(d) && (un(d), (y.length = !0)), p.length < f.length))
                      for (var x = p.length; x < f.length; x++) y[x] = !1;
                    else for (var v = f.length; v < p.length; v++) y[v] = !0;
                    for (
                      var m = Math.min(p.length, f.length), h = 0;
                      h < m;
                      h++
                    )
                      (p.hasOwnProperty(h) || (y[h] = !0),
                        y[h] === void 0 && c(p[h]));
                  }
                }
              }
            })(i.p[0]),
          t(i.p));
    },
    K: function (i) {
      return i.i === 4 ? n(i) : r(i);
    },
  });
}
var Eh,
  Js,
  dd = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  Xx = typeof Map < "u",
  Gx = typeof Set < "u",
  Rh = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  fv = dd
    ? Symbol.for("immer-nothing")
    : (((Eh = {})["immer-nothing"] = !0), Eh),
  Th = dd ? Symbol.for("immer-draftable") : "__$immer_draftable",
  ae = dd ? Symbol.for("immer-state") : "__$immer_state",
  Qx = "" + Object.prototype.constructor,
  _r =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(
              Object.getOwnPropertySymbols(e),
            );
          }
        : Object.getOwnPropertyNames,
  hv =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        _r(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  Hc = {},
  Zs = {
    get: function (e, t) {
      if (t === ae) return e;
      var n = zn(e);
      if (!Mr(n, t))
        return (function (s, i, a) {
          var l,
            c = kh(i, a);
          return c
            ? "value" in c
              ? c.value
              : (l = c.get) === null || l === void 0
                ? void 0
                : l.call(s.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !en(r)
        ? r
        : r === Pl(e.t, t)
          ? (kl(e), (e.o[t] = zc(e.A.h, r, e)))
          : r;
    },
    has: function (e, t) {
      return t in zn(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(zn(e));
    },
    set: function (e, t, n) {
      var r = kh(zn(e), t);
      if (r != null && r.set) return (r.set.call(e.k, n), !0);
      if (!e.P) {
        var s = Pl(zn(e), t),
          i = s == null ? void 0 : s[ae];
        if (i && i.t === n) return ((e.o[t] = n), (e.R[t] = !1), !0);
        if (dv(n, s) && (n !== void 0 || Mr(e.t, t))) return !0;
        (kl(e), un(e));
      }
      return (
        (e.o[t] === n && (n !== void 0 || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      );
    },
    deleteProperty: function (e, t) {
      return (
        Pl(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), kl(e), un(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = zn(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      Ct(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Ct(12);
    },
  },
  bs = {};
(nr(Zs, function (e, t) {
  bs[e] = function () {
    return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
  };
}),
  (bs.deleteProperty = function (e, t) {
    return bs.set.call(this, e, t, void 0);
  }),
  (bs.set = function (e, t, n) {
    return Zs.set.call(this, e[0], t, n, e[0]);
  }));
var Jx = (function () {
    function e(n) {
      var r = this;
      ((this.O = Rh),
        (this.D = !0),
        (this.produce = function (s, i, a) {
          if (typeof s == "function" && typeof i != "function") {
            var l = i;
            i = s;
            var c = r;
            return function (x) {
              var v = this;
              x === void 0 && (x = l);
              for (
                var m = arguments.length, h = Array(m > 1 ? m - 1 : 0), w = 1;
                w < m;
                w++
              )
                h[w - 1] = arguments[w];
              return c.produce(x, function (j) {
                var S;
                return (S = i).call.apply(S, [v, j].concat(h));
              });
            };
          }
          var u;
          if (
            (typeof i != "function" && Ct(6),
            a !== void 0 && typeof a != "function" && Ct(7),
            en(s))
          ) {
            var d = Ch(r),
              f = zc(r, s, void 0),
              p = !0;
            try {
              ((u = i(f)), (p = !1));
            } finally {
              p ? Ai(d) : $c(d);
            }
            return typeof Promise < "u" && u instanceof Promise
              ? u.then(
                  function (x) {
                    return (Sl(d, a), Cl(x, d));
                  },
                  function (x) {
                    throw (Ai(d), x);
                  },
                )
              : (Sl(d, a), Cl(u, d));
          }
          if (!s || typeof s != "object") {
            if (
              ((u = i(s)) === void 0 && (u = s),
              u === fv && (u = void 0),
              r.D && cd(u, !0),
              a)
            ) {
              var y = [],
                g = [];
              (Bt("Patches").M(s, u, y, g), a(y, g));
            }
            return u;
          }
          Ct(21, s);
        }),
        (this.produceWithPatches = function (s, i) {
          if (typeof s == "function")
            return function (u) {
              for (
                var d = arguments.length, f = Array(d > 1 ? d - 1 : 0), p = 1;
                p < d;
                p++
              )
                f[p - 1] = arguments[p];
              return r.produceWithPatches(u, function (y) {
                return s.apply(void 0, [y].concat(f));
              });
            };
          var a,
            l,
            c = r.produce(s, i, function (u, d) {
              ((a = u), (l = d));
            });
          return typeof Promise < "u" && c instanceof Promise
            ? c.then(function (u) {
                return [u, a, l];
              })
            : [c, a, l];
        }),
        typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
          this.setAutoFreeze(n.autoFreeze));
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        (en(n) || Ct(8), On(n) && (n = Kx(n)));
        var r = Ch(this),
          s = zc(this, n, void 0);
        return ((s[ae].C = !0), $c(r), s);
      }),
      (t.finishDraft = function (n, r) {
        var s = n && n[ae],
          i = s.A;
        return (Sl(i, r), Cl(void 0, i));
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (t.setUseProxies = function (n) {
        (n && !Rh && Ct(20), (this.O = n));
      }),
      (t.applyPatches = function (n, r) {
        var s;
        for (s = r.length - 1; s >= 0; s--) {
          var i = r[s];
          if (i.path.length === 0 && i.op === "replace") {
            n = i.value;
            break;
          }
        }
        s > -1 && (r = r.slice(s + 1));
        var a = Bt("Patches").$;
        return On(n)
          ? a(n, r)
          : this.produce(n, function (l) {
              return a(l, r);
            });
      }),
      e
    );
  })(),
  nt = new Jx(),
  pv = nt.produce;
nt.produceWithPatches.bind(nt);
nt.setAutoFreeze.bind(nt);
nt.setUseProxies.bind(nt);
nt.applyPatches.bind(nt);
nt.createDraft.bind(nt);
nt.finishDraft.bind(nt);
function eo(e) {
  "@babel/helpers - typeof";
  return (
    (eo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    eo(e)
  );
}
function Zx(e, t) {
  if (eo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (eo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function e4(e) {
  var t = Zx(e, "string");
  return eo(t) == "symbol" ? t : t + "";
}
function t4(e, t, n) {
  return (
    (t = e4(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ah(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Oh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ah(Object(n), !0).forEach(function (r) {
          t4(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ah(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function Ae(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var Lh = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Nl = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Di = {
    INIT: "@@redux/INIT" + Nl(),
    REPLACE: "@@redux/REPLACE" + Nl(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Nl();
    },
  };
function n4(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function fd(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Ae(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(Ae(1));
    return n(fd)(e, t);
  }
  if (typeof e != "function") throw new Error(Ae(2));
  var s = e,
    i = t,
    a = [],
    l = a,
    c = !1;
  function u() {
    l === a && (l = a.slice());
  }
  function d() {
    if (c) throw new Error(Ae(3));
    return i;
  }
  function f(x) {
    if (typeof x != "function") throw new Error(Ae(4));
    if (c) throw new Error(Ae(5));
    var v = !0;
    return (
      u(),
      l.push(x),
      function () {
        if (v) {
          if (c) throw new Error(Ae(6));
          ((v = !1), u());
          var h = l.indexOf(x);
          (l.splice(h, 1), (a = null));
        }
      }
    );
  }
  function p(x) {
    if (!n4(x)) throw new Error(Ae(7));
    if (typeof x.type > "u") throw new Error(Ae(8));
    if (c) throw new Error(Ae(9));
    try {
      ((c = !0), (i = s(i, x)));
    } finally {
      c = !1;
    }
    for (var v = (a = l), m = 0; m < v.length; m++) {
      var h = v[m];
      h();
    }
    return x;
  }
  function y(x) {
    if (typeof x != "function") throw new Error(Ae(10));
    ((s = x), p({ type: Di.REPLACE }));
  }
  function g() {
    var x,
      v = f;
    return (
      (x = {
        subscribe: function (h) {
          if (typeof h != "object" || h === null) throw new Error(Ae(11));
          function w() {
            h.next && h.next(d());
          }
          w();
          var j = v(w);
          return { unsubscribe: j };
        },
      }),
      (x[Lh] = function () {
        return this;
      }),
      x
    );
  }
  return (
    p({ type: Di.INIT }),
    (r = { dispatch: p, subscribe: f, getState: d, replaceReducer: y }),
    (r[Lh] = g),
    r
  );
}
function r4(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Di.INIT });
    if (typeof r > "u") throw new Error(Ae(12));
    if (typeof n(void 0, { type: Di.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Ae(13));
  });
}
function s4(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var s = t[r];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  var i = Object.keys(n),
    a;
  try {
    r4(n);
  } catch (l) {
    a = l;
  }
  return function (c, u) {
    if ((c === void 0 && (c = {}), a)) throw a;
    for (var d = !1, f = {}, p = 0; p < i.length; p++) {
      var y = i[p],
        g = n[y],
        x = c[y],
        v = g(x, u);
      if (typeof v > "u") throw (u && u.type, new Error(Ae(14)));
      ((f[y] = v), (d = d || v !== x));
    }
    return ((d = d || i.length !== Object.keys(c).length), d ? f : c);
  };
}
function Mi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
      ? t[0]
      : t.reduce(function (r, s) {
          return function () {
            return r(s.apply(void 0, arguments));
          };
        });
}
function o4() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var s = r.apply(void 0, arguments),
        i = function () {
          throw new Error(Ae(15));
        },
        a = {
          getState: s.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        l = t.map(function (c) {
          return c(a);
        });
      return (
        (i = Mi.apply(void 0, l)(s.dispatch)),
        Oh(Oh({}, s), {}, { dispatch: i })
      );
    };
  };
}
function mv(e) {
  var t = function (r) {
    var s = r.dispatch,
      i = r.getState;
    return function (a) {
      return function (l) {
        return typeof l == "function" ? l(s, i, e) : a(l);
      };
    };
  };
  return t;
}
var Uc = mv();
Uc.withExtraArgument = mv;
var gv = (function () {
    var e = function (t, n) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (r, s) {
              r.__proto__ = s;
            }) ||
          function (r, s) {
            for (var i in s)
              Object.prototype.hasOwnProperty.call(s, i) && (r[i] = s[i]);
          }),
        e(t, n)
      );
    };
    return function (t, n) {
      if (typeof n != "function" && n !== null)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null",
        );
      e(t, n);
      function r() {
        this.constructor = t;
      }
      t.prototype =
        n === null ? Object.create(n) : ((r.prototype = n.prototype), new r());
    };
  })(),
  i4 = function (e, t) {
    var n = {
        label: 0,
        sent: function () {
          if (i[0] & 1) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      },
      r,
      s,
      i,
      a;
    return (
      (a = { next: l(0), throw: l(1), return: l(2) }),
      typeof Symbol == "function" &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function l(u) {
      return function (d) {
        return c([u, d]);
      };
    }
    function c(u) {
      if (r) throw new TypeError("Generator is already executing.");
      for (; n; )
        try {
          if (
            ((r = 1),
            s &&
              (i =
                u[0] & 2
                  ? s.return
                  : u[0]
                    ? s.throw || ((i = s.return) && i.call(s), 0)
                    : s.next) &&
              !(i = i.call(s, u[1])).done)
          )
            return i;
          switch (((s = 0), i && (u = [u[0] & 2, i.value]), u[0])) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              return (n.label++, { value: u[1], done: !1 });
            case 5:
              (n.label++, (s = u[1]), (u = [0]));
              continue;
            case 7:
              ((u = n.ops.pop()), n.trys.pop());
              continue;
            default:
              if (
                ((i = n.trys),
                !(i = i.length > 0 && i[i.length - 1]) &&
                  (u[0] === 6 || u[0] === 2))
              ) {
                n = 0;
                continue;
              }
              if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                n.label = u[1];
                break;
              }
              if (u[0] === 6 && n.label < i[1]) {
                ((n.label = i[1]), (i = u));
                break;
              }
              if (i && n.label < i[2]) {
                ((n.label = i[2]), n.ops.push(u));
                break;
              }
              (i[2] && n.ops.pop(), n.trys.pop());
              continue;
          }
          u = t.call(e, n);
        } catch (d) {
          ((u = [6, d]), (s = 0));
        } finally {
          r = i = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  },
  Kr = function (e, t) {
    for (var n = 0, r = t.length, s = e.length; n < r; n++, s++) e[s] = t[n];
    return e;
  },
  a4 = Object.defineProperty,
  l4 = Object.defineProperties,
  c4 = Object.getOwnPropertyDescriptors,
  Dh = Object.getOwnPropertySymbols,
  u4 = Object.prototype.hasOwnProperty,
  d4 = Object.prototype.propertyIsEnumerable,
  Mh = function (e, t, n) {
    return t in e
      ? a4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Nn = function (e, t) {
    for (var n in t || (t = {})) u4.call(t, n) && Mh(e, n, t[n]);
    if (Dh)
      for (var r = 0, s = Dh(t); r < s.length; r++) {
        var n = s[r];
        d4.call(t, n) && Mh(e, n, t[n]);
      }
    return e;
  },
  El = function (e, t) {
    return l4(e, c4(t));
  },
  f4 = function (e, t, n) {
    return new Promise(function (r, s) {
      var i = function (c) {
          try {
            l(n.next(c));
          } catch (u) {
            s(u);
          }
        },
        a = function (c) {
          try {
            l(n.throw(c));
          } catch (u) {
            s(u);
          }
        },
        l = function (c) {
          return c.done ? r(c.value) : Promise.resolve(c.value).then(i, a);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  h4 =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Mi
              : Mi.apply(null, arguments);
        };
function p4(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
function En(e, t) {
  function n() {
    for (var r = [], s = 0; s < arguments.length; s++) r[s] = arguments[s];
    if (t) {
      var i = t.apply(void 0, r);
      if (!i) throw new Error("prepareAction did not return an object");
      return Nn(
        Nn({ type: e, payload: i.payload }, "meta" in i && { meta: i.meta }),
        "error" in i && { error: i.error },
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return "" + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
var m4 = (function (e) {
    gv(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var s = e.apply(this, n) || this;
      return (Object.setPrototypeOf(s, t.prototype), s);
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, Kr([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, Kr([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array),
  g4 = (function (e) {
    gv(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var s = e.apply(this, n) || this;
      return (Object.setPrototypeOf(s, t.prototype), s);
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, Kr([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, Kr([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array);
function Wc(e) {
  return en(e) ? pv(e, function () {}) : e;
}
function v4(e) {
  return typeof e == "boolean";
}
function w4() {
  return function (t) {
    return y4(t);
  };
}
function y4(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  (e.immutableCheck, e.serializableCheck, e.actionCreatorCheck);
  var r = new m4();
  return (
    n && (v4(n) ? r.push(Uc) : r.push(Uc.withExtraArgument(n.extraArgument))),
    r
  );
}
function x4(e) {
  var t = w4(),
    n = e || {},
    r = n.reducer,
    s = r === void 0 ? void 0 : r,
    i = n.middleware,
    a = i === void 0 ? t() : i,
    l = n.devTools,
    c = l === void 0 ? !0 : l,
    u = n.preloadedState,
    d = u === void 0 ? void 0 : u,
    f = n.enhancers,
    p = f === void 0 ? void 0 : f,
    y;
  if (typeof s == "function") y = s;
  else if (p4(s)) y = s4(s);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers',
    );
  var g = a;
  typeof g == "function" && (g = g(t));
  var x = o4.apply(void 0, g),
    v = Mi;
  c && (v = h4(Nn({ trace: !1 }, typeof c == "object" && c)));
  var m = new g4(x),
    h = m;
  Array.isArray(p) ? (h = Kr([x], p)) : typeof p == "function" && (h = p(m));
  var w = v.apply(void 0, h);
  return fd(y, d, w);
}
function vv(e) {
  var t = {},
    n = [],
    r,
    s = {
      addCase: function (i, a) {
        var l = typeof i == "string" ? i : i.type;
        if (!l)
          throw new Error(
            "`builder.addCase` cannot be called with an empty action type",
          );
        if (l in t)
          throw new Error(
            "`builder.addCase` cannot be called with two reducers for the same action type",
          );
        return ((t[l] = a), s);
      },
      addMatcher: function (i, a) {
        return (n.push({ matcher: i, reducer: a }), s);
      },
      addDefaultCase: function (i) {
        return ((r = i), s);
      },
    };
  return (e(s), [t, n, r]);
}
function j4(e) {
  return typeof e == "function";
}
function b4(e, t, n, r) {
  n === void 0 && (n = []);
  var s = typeof t == "function" ? vv(t) : [t, n, r],
    i = s[0],
    a = s[1],
    l = s[2],
    c;
  if (j4(e))
    c = function () {
      return Wc(e());
    };
  else {
    var u = Wc(e);
    c = function () {
      return u;
    };
  }
  function d(f, p) {
    f === void 0 && (f = c());
    var y = Kr(
      [i[p.type]],
      a
        .filter(function (g) {
          var x = g.matcher;
          return x(p);
        })
        .map(function (g) {
          var x = g.reducer;
          return x;
        }),
    );
    return (
      y.filter(function (g) {
        return !!g;
      }).length === 0 && (y = [l]),
      y.reduce(function (g, x) {
        if (x)
          if (On(g)) {
            var v = g,
              m = x(v, p);
            return m === void 0 ? g : m;
          } else {
            if (en(g))
              return pv(g, function (h) {
                return x(h, p);
              });
            var m = x(g, p);
            if (m === void 0) {
              if (g === null) return g;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined",
              );
            }
            return m;
          }
        return g;
      }, f)
    );
  }
  return ((d.getInitialState = c), d);
}
function S4(e, t) {
  return e + "/" + t;
}
function C4(e) {
  var t = e.name,
    n =
      typeof e.initialState == "function" ? e.initialState : Wc(e.initialState),
    r = e.reducers || {},
    s = Object.keys(r),
    i = {},
    a = {},
    l = {};
  s.forEach(function (d) {
    var f = r[d],
      p = S4(t, d),
      y,
      g;
    ("reducer" in f ? ((y = f.reducer), (g = f.prepare)) : (y = f),
      (i[d] = y),
      (a[p] = y),
      (l[d] = g ? En(p, g) : En(p)));
  });
  function c() {
    var d =
        typeof e.extraReducers == "function"
          ? vv(e.extraReducers)
          : [e.extraReducers],
      f = d[0],
      p = f === void 0 ? {} : f,
      y = d[1],
      g = y === void 0 ? [] : y,
      x = d[2],
      v = x === void 0 ? void 0 : x,
      m = Nn(Nn({}, p), a);
    return b4(n, function (h) {
      for (var w in m) h.addCase(w, m[w]);
      for (var j = 0, S = g; j < S.length; j++) {
        var C = S[j];
        h.addMatcher(C.matcher, C.reducer);
      }
      v && h.addDefaultCase(v);
    });
  }
  var u;
  return {
    name: t,
    reducer: function (d, f) {
      return (u || (u = c()), u(d, f));
    },
    actions: l,
    caseReducers: i,
    getInitialState: function () {
      return (u || (u = c()), u.getInitialState());
    },
  };
}
var P4 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  k4 = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", n = e; n--; ) t += P4[(Math.random() * 64) | 0];
    return t;
  },
  N4 = ["name", "message", "stack", "code"],
  Rl = (function () {
    function e(t, n) {
      ((this.payload = t), (this.meta = n));
    }
    return e;
  })(),
  _h = (function () {
    function e(t, n) {
      ((this.payload = t), (this.meta = n));
    }
    return e;
  })(),
  E4 = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, n = 0, r = N4; n < r.length; n++) {
        var s = r[n];
        typeof e[s] == "string" && (t[s] = e[s]);
      }
      return t;
    }
    return { message: String(e) };
  };
(function () {
  function e(t, n, r) {
    var s = En(t + "/fulfilled", function (u, d, f, p) {
        return {
          payload: u,
          meta: El(Nn({}, p || {}), {
            arg: f,
            requestId: d,
            requestStatus: "fulfilled",
          }),
        };
      }),
      i = En(t + "/pending", function (u, d, f) {
        return {
          payload: void 0,
          meta: El(Nn({}, f || {}), {
            arg: d,
            requestId: u,
            requestStatus: "pending",
          }),
        };
      }),
      a = En(t + "/rejected", function (u, d, f, p, y) {
        return {
          payload: p,
          error: ((r && r.serializeError) || E4)(u || "Rejected"),
          meta: El(Nn({}, y || {}), {
            arg: f,
            requestId: d,
            rejectedWithValue: !!p,
            requestStatus: "rejected",
            aborted: (u == null ? void 0 : u.name) === "AbortError",
            condition: (u == null ? void 0 : u.name) === "ConditionError",
          }),
        };
      }),
      l =
        typeof AbortController < "u"
          ? AbortController
          : (function () {
              function u() {
                this.signal = {
                  aborted: !1,
                  addEventListener: function () {},
                  dispatchEvent: function () {
                    return !1;
                  },
                  onabort: function () {},
                  removeEventListener: function () {},
                  reason: void 0,
                  throwIfAborted: function () {},
                };
              }
              return ((u.prototype.abort = function () {}), u);
            })();
    function c(u) {
      return function (d, f, p) {
        var y = r != null && r.idGenerator ? r.idGenerator(u) : k4(),
          g = new l(),
          x;
        function v(h) {
          ((x = h), g.abort());
        }
        var m = (function () {
          return f4(this, null, function () {
            var h, w, j, S, C, E, R;
            return i4(this, function (L) {
              switch (L.label) {
                case 0:
                  return (
                    L.trys.push([0, 4, , 5]),
                    (S =
                      (h = r == null ? void 0 : r.condition) == null
                        ? void 0
                        : h.call(r, u, { getState: f, extra: p })),
                    T4(S) ? [4, S] : [3, 2]
                  );
                case 1:
                  ((S = L.sent()), (L.label = 2));
                case 2:
                  if (S === !1 || g.signal.aborted)
                    throw {
                      name: "ConditionError",
                      message:
                        "Aborted due to condition callback returning false.",
                    };
                  return (
                    (C = new Promise(function (N, $) {
                      return g.signal.addEventListener("abort", function () {
                        return $({
                          name: "AbortError",
                          message: x || "Aborted",
                        });
                      });
                    })),
                    d(
                      i(
                        y,
                        u,
                        (w = r == null ? void 0 : r.getPendingMeta) == null
                          ? void 0
                          : w.call(
                              r,
                              { requestId: y, arg: u },
                              { getState: f, extra: p },
                            ),
                      ),
                    ),
                    [
                      4,
                      Promise.race([
                        C,
                        Promise.resolve(
                          n(u, {
                            dispatch: d,
                            getState: f,
                            extra: p,
                            requestId: y,
                            signal: g.signal,
                            abort: v,
                            rejectWithValue: function (N, $) {
                              return new Rl(N, $);
                            },
                            fulfillWithValue: function (N, $) {
                              return new _h(N, $);
                            },
                          }),
                        ).then(function (N) {
                          if (N instanceof Rl) throw N;
                          return N instanceof _h
                            ? s(N.payload, y, u, N.meta)
                            : s(N, y, u);
                        }),
                      ]),
                    ]
                  );
                case 3:
                  return ((j = L.sent()), [3, 5]);
                case 4:
                  return (
                    (E = L.sent()),
                    (j =
                      E instanceof Rl
                        ? a(null, y, u, E.payload, E.meta)
                        : a(E, y, u)),
                    [3, 5]
                  );
                case 5:
                  return (
                    (R =
                      r &&
                      !r.dispatchConditionRejection &&
                      a.match(j) &&
                      j.meta.condition),
                    R || d(j),
                    [2, j]
                  );
              }
            });
          });
        })();
        return Object.assign(m, {
          abort: v,
          requestId: y,
          arg: u,
          unwrap: function () {
            return m.then(R4);
          },
        });
      };
    }
    return Object.assign(c, {
      pending: i,
      rejected: a,
      fulfilled: s,
      typePrefix: t,
    });
  }
  return (
    (e.withTypes = function () {
      return e;
    }),
    e
  );
})();
function R4(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function T4(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var hd = "listenerMiddleware";
En(hd + "/add");
En(hd + "/removeAll");
En(hd + "/remove");
var Bh;
typeof queueMicrotask == "function" &&
  queueMicrotask.bind(
    typeof window < "u" ? window : typeof global < "u" ? global : globalThis,
  );
Yx();
const wv = C4({
    name: "asset",
    initialState: {
      idValue: "",
      authToken: "",
      user: null,
      referralLink: "",
      depositData: [],
      withdraw: [],
      plans: [],
      singlePlan: {},
    },
    reducers: {
      setIdValue(e, t) {
        e.idValue = t.payload;
      },
      setAuthToken(e, { payload: t }) {
        ((e.authToken = t), console.log("Redux auth token set"));
      },
      setReferralLink(e, { payload: t }) {
        ((e.referralLink = t), console.log("Redux referral link set:", t));
      },
      clearAuth(e) {
        ((e.authToken = ""), (e.user = null), (e.referralLink = ""));
      },
      swiftUserData(e, { payload: t }) {
        ((e.user = t), console.log("Redux User data", t));
      },
      updateDepositData(e, t) {
        (e.depositData.push(t.payload), console.log("FIRST", t.payload));
      },
      updatewithdraw(e, t) {
        (e.withdraw.push(t.payload), console.log("FIRST", t.payload));
      },
      addPlans(e, { payload: t }) {
        ((e.plans = [...e.plans, t]), console.log("Plan Added", t));
      },
      getSinglePlan(e, { payload: t }) {
        ((e.singlePlan = t), console.log("Single Plan Added", t));
      },
      clearPlans(e) {
        e.plans = [];
      },
      removeSinglePlan: (e, { payload: t }) => {
        const n = e.plans.filter((r) => r.packageId !== t.packageId);
        ((e.plans = n), console.log("Single Plan Deleted", n));
      },
    },
  }),
  {
    setIdValue: yv,
    setAuthToken: xv,
    setReferralLink: A4,
    swiftUserData: pd,
    updateDepositData: Tl,
    getSinglePlan: O4,
    removeSinglePlan: L4,
  } = wv.actions,
  D4 = wv.reducer;
function M4() {
  const { pathname: e } = es();
  return (
    b.useEffect(() => {
      window.scrollTo(0, 0);
    }, [e]),
    null
  );
}
/*!
 * sweetalert2 v11.26.24
 * Released under the MIT License.
 */ function jv(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function _4(e, t) {
  if (t.has(e))
    throw new TypeError(
      "Cannot initialize the same private elements twice on an object",
    );
}
function Ih(e, t) {
  return e.get(jv(e, t));
}
function B4(e, t, n) {
  (_4(e, t), t.set(e, n));
}
function I4(e, t, n) {
  return (e.set(jv(e, t), n), n);
}
const F4 = 100,
  _ = {},
  $4 = () => {
    _.previousActiveElement instanceof HTMLElement
      ? (_.previousActiveElement.focus(), (_.previousActiveElement = null))
      : document.body && document.body.focus();
  },
  z4 = (e) =>
    new Promise((t) => {
      if (!e) return t();
      const n = window.scrollX,
        r = window.scrollY;
      ((_.restoreFocusTimeout = setTimeout(() => {
        ($4(), t());
      }, F4)),
        window.scrollTo(n, r));
    }),
  bv = "swal2-",
  H4 = [
    "container",
    "shown",
    "height-auto",
    "iosfix",
    "popup",
    "modal",
    "no-backdrop",
    "no-transition",
    "toast",
    "toast-shown",
    "show",
    "hide",
    "close",
    "title",
    "html-container",
    "actions",
    "confirm",
    "deny",
    "cancel",
    "footer",
    "icon",
    "icon-content",
    "image",
    "input",
    "file",
    "range",
    "select",
    "radio",
    "checkbox",
    "label",
    "textarea",
    "inputerror",
    "input-label",
    "validation-message",
    "progress-steps",
    "active-progress-step",
    "progress-step",
    "progress-step-line",
    "loader",
    "loading",
    "styled",
    "top",
    "top-start",
    "top-end",
    "top-left",
    "top-right",
    "center",
    "center-start",
    "center-end",
    "center-left",
    "center-right",
    "bottom",
    "bottom-start",
    "bottom-end",
    "bottom-left",
    "bottom-right",
    "grow-row",
    "grow-column",
    "grow-fullscreen",
    "rtl",
    "timer-progress-bar",
    "timer-progress-bar-container",
    "scrollbar-measure",
    "icon-success",
    "icon-warning",
    "icon-info",
    "icon-question",
    "icon-error",
    "draggable",
    "dragging",
  ],
  k = H4.reduce((e, t) => ((e[t] = bv + t), e), {}),
  U4 = ["success", "warning", "info", "question", "error"],
  _i = U4.reduce((e, t) => ((e[t] = bv + t), e), {}),
  Sv = "SweetAlert2:",
  md = (e) => e.charAt(0).toUpperCase() + e.slice(1),
  Ie = (e) => {
    console.warn(`${Sv} ${typeof e == "object" ? e.join(" ") : e}`);
  },
  ur = (e) => {
    console.error(`${Sv} ${e}`);
  },
  Fh = [],
  W4 = (e) => {
    Fh.includes(e) || (Fh.push(e), Ie(e));
  },
  Cv = (e, t = null) => {
    W4(
      `"${e}" is deprecated and will be removed in the next major release.${t ? ` Use "${t}" instead.` : ""}`,
    );
  },
  Da = (e) => (typeof e == "function" ? e() : e),
  gd = (e) => e && typeof e.toPromise == "function",
  ao = (e) => (gd(e) ? e.toPromise() : Promise.resolve(e)),
  vd = (e) => e && Promise.resolve(e) === e,
  V4 = () => navigator.userAgent.includes("Firefox"),
  ze = () => document.body.querySelector(`.${k.container}`),
  lo = (e) => {
    const t = ze();
    return t ? t.querySelector(e) : null;
  },
  at = (e) => lo(`.${e}`),
  Q = () => at(k.popup),
  rs = () => at(k.icon),
  q4 = () => at(k["icon-content"]),
  Pv = () => at(k.title),
  wd = () => at(k["html-container"]),
  kv = () => at(k.image),
  yd = () => at(k["progress-steps"]),
  Ma = () => at(k["validation-message"]),
  It = () => lo(`.${k.actions} .${k.confirm}`),
  ss = () => lo(`.${k.actions} .${k.cancel}`),
  dr = () => lo(`.${k.actions} .${k.deny}`),
  K4 = () => at(k["input-label"]),
  os = () => lo(`.${k.loader}`),
  co = () => at(k.actions),
  Nv = () => at(k.footer),
  _a = () => at(k["timer-progress-bar"]),
  xd = () => at(k.close),
  Y4 = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
  jd = () => {
    const e = Q();
    if (!e) return [];
    const t = e.querySelectorAll(
        '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])',
      ),
      n = Array.from(t).sort((i, a) => {
        const l = parseInt(i.getAttribute("tabindex") || "0"),
          c = parseInt(a.getAttribute("tabindex") || "0");
        return l > c ? 1 : l < c ? -1 : 0;
      }),
      r = e.querySelectorAll(Y4),
      s = Array.from(r).filter((i) => i.getAttribute("tabindex") !== "-1");
    return [...new Set(n.concat(s))].filter((i) => Xe(i));
  },
  bd = () =>
    Xt(document.body, k.shown) &&
    !Xt(document.body, k["toast-shown"]) &&
    !Xt(document.body, k["no-backdrop"]),
  Ba = () => {
    const e = Q();
    return e ? Xt(e, k.toast) : !1;
  },
  X4 = () => {
    const e = Q();
    return e ? e.hasAttribute("data-loading") : !1;
  },
  lt = (e, t) => {
    if (((e.textContent = ""), t)) {
      const r = new DOMParser().parseFromString(t, "text/html"),
        s = r.querySelector("head");
      s &&
        Array.from(s.childNodes).forEach((a) => {
          e.appendChild(a);
        });
      const i = r.querySelector("body");
      i &&
        Array.from(i.childNodes).forEach((a) => {
          a instanceof HTMLVideoElement || a instanceof HTMLAudioElement
            ? e.appendChild(a.cloneNode(!0))
            : e.appendChild(a);
        });
    }
  },
  Xt = (e, t) => {
    if (!t) return !1;
    const n = t.split(/\s+/);
    for (let r = 0; r < n.length; r++)
      if (!e.classList.contains(n[r])) return !1;
    return !0;
  },
  G4 = (e, t) => {
    Array.from(e.classList).forEach((n) => {
      !Object.values(k).includes(n) &&
        !Object.values(_i).includes(n) &&
        !Object.values(t.showClass || {}).includes(n) &&
        e.classList.remove(n);
    });
  },
  rt = (e, t, n) => {
    if ((G4(e, t), !t.customClass)) return;
    const r = t.customClass[n];
    if (r) {
      if (typeof r != "string" && !r.forEach) {
        Ie(
          `Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof r}"`,
        );
        return;
      }
      X(e, r);
    }
  },
  Ia = (e, t) => {
    if (!t) return null;
    switch (t) {
      case "select":
      case "textarea":
      case "file":
        return e.querySelector(`.${k.popup} > .${k[t]}`);
      case "checkbox":
        return e.querySelector(`.${k.popup} > .${k.checkbox} input`);
      case "radio":
        return (
          e.querySelector(`.${k.popup} > .${k.radio} input:checked`) ||
          e.querySelector(`.${k.popup} > .${k.radio} input:first-child`)
        );
      case "range":
        return e.querySelector(`.${k.popup} > .${k.range} input`);
      default:
        return e.querySelector(`.${k.popup} > .${k.input}`);
    }
  },
  Ev = (e) => {
    if ((e.focus(), e.type !== "file")) {
      const t = e.value;
      ((e.value = ""), (e.value = t));
    }
  },
  Rv = (e, t, n) => {
    if (!e || !t) return;
    const r = typeof t == "string" ? t.split(/\s+/).filter(Boolean) : t;
    (Array.isArray(e) ? e : [e]).forEach((i) => {
      r.forEach((a) => {
        n ? i.classList.add(a) : i.classList.remove(a);
      });
    });
  },
  X = (e, t) => {
    Rv(e, t, !0);
  },
  gt = (e, t) => {
    Rv(e, t, !1);
  },
  pn = (e, t) => {
    const n = Array.from(e.children);
    for (let r = 0; r < n.length; r++) {
      const s = n[r];
      if (s instanceof HTMLElement && Xt(s, t)) return s;
    }
  },
  Xn = (e, t, n) => {
    (n === `${parseInt(`${n}`)}` && (n = parseInt(n)),
      n || n === 0
        ? e.style.setProperty(t, typeof n == "number" ? `${n}px` : n)
        : e.style.removeProperty(t));
  },
  Ce = (e, t = "flex") => {
    e && (e.style.display = t);
  },
  Me = (e) => {
    e && (e.style.display = "none");
  },
  Sd = (e, t = "block") => {
    e &&
      new MutationObserver(() => {
        uo(e, e.innerHTML, t);
      }).observe(e, { childList: !0, subtree: !0 });
  },
  $h = (e, t, n, r) => {
    const s = e.querySelector(t);
    s && s.style.setProperty(n, r);
  },
  uo = (e, t, n = "flex") => {
    t ? Ce(e, n) : Me(e);
  },
  Xe = (e) =>
    !!(e && (e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
  Q4 = () => !Xe(It()) && !Xe(dr()) && !Xe(ss()),
  Vc = (e) => e.scrollHeight > e.clientHeight,
  J4 = (e, t) => {
    let n = e;
    for (; n && n !== t; ) {
      if (Vc(n)) return !0;
      n = n.parentElement;
    }
    return !1;
  },
  Tv = (e) => {
    const t = window.getComputedStyle(e),
      n = parseFloat(t.getPropertyValue("animation-duration") || "0"),
      r = parseFloat(t.getPropertyValue("transition-duration") || "0");
    return n > 0 || r > 0;
  },
  Cd = (e, t = !1) => {
    const n = _a();
    n &&
      Xe(n) &&
      (t && ((n.style.transition = "none"), (n.style.width = "100%")),
      setTimeout(() => {
        ((n.style.transition = `width ${e / 1e3}s linear`),
          (n.style.width = "0%"));
      }, 10));
  },
  Z4 = () => {
    const e = _a();
    if (!e) return;
    const t = parseInt(window.getComputedStyle(e).width);
    (e.style.removeProperty("transition"), (e.style.width = "100%"));
    const n = parseInt(window.getComputedStyle(e).width),
      r = (t / n) * 100;
    e.style.width = `${r}%`;
  },
  ej = () => typeof window > "u" || typeof document > "u",
  tj = `
 <div aria-labelledby="${k.title}" aria-describedby="${k["html-container"]}" class="${k.popup}" tabindex="-1">
   <button type="button" class="${k.close}"></button>
   <ul class="${k["progress-steps"]}"></ul>
   <div class="${k.icon}"></div>
   <img class="${k.image}" />
   <h2 class="${k.title}" id="${k.title}"></h2>
   <div class="${k["html-container"]}" id="${k["html-container"]}"></div>
   <input class="${k.input}" id="${k.input}" />
   <input type="file" class="${k.file}" />
   <div class="${k.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${k.select}" id="${k.select}"></select>
   <div class="${k.radio}"></div>
   <label class="${k.checkbox}">
     <input type="checkbox" id="${k.checkbox}" />
     <span class="${k.label}"></span>
   </label>
   <textarea class="${k.textarea}" id="${k.textarea}"></textarea>
   <div class="${k["validation-message"]}" id="${k["validation-message"]}"></div>
   <div class="${k.actions}">
     <div class="${k.loader}"></div>
     <button type="button" class="${k.confirm}"></button>
     <button type="button" class="${k.deny}"></button>
     <button type="button" class="${k.cancel}"></button>
   </div>
   <div class="${k.footer}"></div>
   <div class="${k["timer-progress-bar-container"]}">
     <div class="${k["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ""),
  nj = () => {
    const e = ze();
    return e
      ? (e.remove(),
        gt(
          [document.documentElement, document.body],
          [k["no-backdrop"], k["toast-shown"], k["has-column"]],
        ),
        !0)
      : !1;
  },
  Bn = () => {
    _.currentInstance && _.currentInstance.resetValidationMessage();
  },
  rj = () => {
    const e = Q();
    if (!e) return;
    const t = pn(e, k.input),
      n = pn(e, k.file),
      r = e.querySelector(`.${k.range} input`),
      s = e.querySelector(`.${k.range} output`),
      i = pn(e, k.select),
      a = e.querySelector(`.${k.checkbox} input`),
      l = pn(e, k.textarea);
    (t && (t.oninput = Bn),
      n && (n.onchange = Bn),
      i && (i.onchange = Bn),
      a && (a.onchange = Bn),
      l && (l.oninput = Bn),
      r &&
        s &&
        ((r.oninput = () => {
          (Bn(), (s.value = r.value));
        }),
        (r.onchange = () => {
          (Bn(), (s.value = r.value));
        })));
  },
  sj = (e) => {
    if (typeof e == "string") {
      const t = document.querySelector(e);
      if (!t) throw new Error(`Target element "${e}" not found`);
      return t;
    }
    return e;
  },
  oj = (e) => {
    const t = Q();
    t &&
      (t.setAttribute("role", e.toast ? "alert" : "dialog"),
      t.setAttribute("aria-live", e.toast ? "polite" : "assertive"),
      e.toast || t.setAttribute("aria-modal", "true"));
  },
  ij = (e) => {
    window.getComputedStyle(e).direction === "rtl" &&
      (X(ze(), k.rtl), (_.isRTL = !0));
  },
  aj = (e) => {
    const t = nj();
    if (ej()) {
      ur("SweetAlert2 requires document to initialize");
      return;
    }
    const n = document.createElement("div");
    ((n.className = k.container),
      t && X(n, k["no-transition"]),
      lt(n, tj),
      (n.dataset.swal2Theme = e.theme));
    const r = sj(e.target || "body");
    (r.appendChild(n),
      e.topLayer && (n.setAttribute("popover", ""), n.showPopover()),
      oj(e),
      ij(r),
      rj());
  },
  Pd = (e, t) => {
    e instanceof HTMLElement
      ? t.appendChild(e)
      : typeof e == "object"
        ? lj(e, t)
        : e && lt(t, e);
  },
  lj = (e, t) => {
    "jquery" in e ? cj(t, e) : lt(t, e.toString());
  },
  cj = (e, t) => {
    if (((e.textContent = ""), 0 in t))
      for (let n = 0; n in t; n++) e.appendChild(t[n].cloneNode(!0));
    else e.appendChild(t.cloneNode(!0));
  },
  uj = (e, t) => {
    const n = co(),
      r = os();
    !n ||
      !r ||
      (!t.showConfirmButton && !t.showDenyButton && !t.showCancelButton
        ? Me(n)
        : Ce(n),
      rt(n, t, "actions"),
      dj(n, r, t),
      lt(r, t.loaderHtml || ""),
      rt(r, t, "loader"));
  };
function dj(e, t, n) {
  const r = It(),
    s = dr(),
    i = ss();
  !r ||
    !s ||
    !i ||
    (Al(r, "confirm", n),
    Al(s, "deny", n),
    Al(i, "cancel", n),
    fj(r, s, i, n),
    n.reverseButtons &&
      (n.toast
        ? (e.insertBefore(i, r), e.insertBefore(s, r))
        : (e.insertBefore(i, t), e.insertBefore(s, t), e.insertBefore(r, t))));
}
function fj(e, t, n, r) {
  if (!r.buttonsStyling) {
    gt([e, t, n], k.styled);
    return;
  }
  (X([e, t, n], k.styled),
    [
      [e, "confirm", r.confirmButtonColor],
      [t, "deny", r.denyButtonColor],
      [n, "cancel", r.cancelButtonColor],
    ].forEach(([i, a, l]) => {
      (l && i.style.setProperty(`--swal2-${a}-button-background-color`, l),
        hj(i));
    }));
}
function hj(e) {
  const t = window.getComputedStyle(e);
  if (t.getPropertyValue("--swal2-action-button-focus-box-shadow")) return;
  const n = t.backgroundColor.replace(
    /rgba?\((\d+), (\d+), (\d+).*/,
    "rgba($1, $2, $3, 0.5)",
  );
  e.style.setProperty(
    "--swal2-action-button-focus-box-shadow",
    t.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/, ` ${n}`),
  );
}
function Al(e, t, n) {
  const r = md(t);
  (uo(e, n[`show${r}Button`], "inline-block"),
    lt(e, n[`${t}ButtonText`] || ""),
    e.setAttribute("aria-label", n[`${t}ButtonAriaLabel`] || ""),
    (e.className = k[t]),
    rt(e, n, `${t}Button`));
}
const pj = (e, t) => {
    const n = xd();
    n &&
      (lt(n, t.closeButtonHtml || ""),
      rt(n, t, "closeButton"),
      uo(n, t.showCloseButton),
      n.setAttribute("aria-label", t.closeButtonAriaLabel || ""));
  },
  mj = (e, t) => {
    const n = ze();
    n &&
      (gj(n, t.backdrop),
      vj(n, t.position),
      wj(n, t.grow),
      rt(n, t, "container"));
  };
function gj(e, t) {
  typeof t == "string"
    ? (e.style.background = t)
    : t || X([document.documentElement, document.body], k["no-backdrop"]);
}
function vj(e, t) {
  t &&
    (t in k
      ? X(e, k[t])
      : (Ie('The "position" parameter is not valid, defaulting to "center"'),
        X(e, k.center)));
}
function wj(e, t) {
  t && X(e, k[`grow-${t}`]);
}
var G = {
  innerParams: new WeakMap(),
  domCache: new WeakMap(),
  focusedElement: new WeakMap(),
};
const yj = [
    "input",
    "file",
    "range",
    "select",
    "radio",
    "checkbox",
    "textarea",
  ],
  xj = (e, t) => {
    const n = Q();
    if (!n) return;
    const r = G.innerParams.get(e),
      s = !r || t.input !== r.input;
    (yj.forEach((i) => {
      const a = pn(n, k[i]);
      a && (Sj(i, t.inputAttributes), (a.className = k[i]), s && Me(a));
    }),
      t.input && (s && jj(t), Cj(t)));
  },
  jj = (e) => {
    if (!e.input) return;
    if (!ge[e.input]) {
      ur(
        `Unexpected type of input! Expected ${Object.keys(ge).join(" | ")}, got "${e.input}"`,
      );
      return;
    }
    const t = Av(e.input);
    if (!t) return;
    const n = ge[e.input](t, e);
    (Ce(t),
      e.inputAutoFocus &&
        setTimeout(() => {
          Ev(n);
        }));
  },
  bj = (e) => {
    for (let t = 0; t < e.attributes.length; t++) {
      const n = e.attributes[t].name;
      ["id", "type", "value", "style"].includes(n) || e.removeAttribute(n);
    }
  },
  Sj = (e, t) => {
    const n = Q();
    if (!n) return;
    const r = Ia(n, e);
    if (r) {
      bj(r);
      for (const s in t) r.setAttribute(s, t[s]);
    }
  },
  Cj = (e) => {
    if (!e.input) return;
    const t = Av(e.input);
    t && rt(t, e, "input");
  },
  kd = (e, t) => {
    !e.placeholder &&
      t.inputPlaceholder &&
      (e.placeholder = t.inputPlaceholder);
  },
  fo = (e, t, n) => {
    if (n.inputLabel) {
      const r = document.createElement("label"),
        s = k["input-label"];
      (r.setAttribute("for", e.id),
        (r.className = s),
        typeof n.customClass == "object" && X(r, n.customClass.inputLabel),
        (r.innerText = n.inputLabel),
        t.insertAdjacentElement("beforebegin", r));
    }
  },
  Av = (e) => {
    const t = Q();
    if (t) return pn(t, k[e] || k.input);
  },
  Bi = (e, t) => {
    ["string", "number"].includes(typeof t)
      ? (e.value = `${t}`)
      : vd(t) ||
        Ie(
          `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`,
        );
  },
  ge = {};
ge.text =
  ge.email =
  ge.password =
  ge.number =
  ge.tel =
  ge.url =
  ge.search =
  ge.date =
  ge["datetime-local"] =
  ge.time =
  ge.week =
  ge.month =
    (e, t) => {
      const n = e;
      return (
        Bi(n, t.inputValue),
        fo(n, n, t),
        kd(n, t),
        (n.type = t.input),
        n
      );
    };
ge.file = (e, t) => {
  const n = e;
  return (fo(n, n, t), kd(n, t), n);
};
ge.range = (e, t) => {
  const n = e,
    r = n.querySelector("input"),
    s = n.querySelector("output");
  return (
    r && (Bi(r, t.inputValue), (r.type = t.input), fo(r, e, t)),
    s && Bi(s, t.inputValue),
    e
  );
};
ge.select = (e, t) => {
  const n = e;
  if (((n.textContent = ""), t.inputPlaceholder)) {
    const r = document.createElement("option");
    (lt(r, t.inputPlaceholder),
      (r.value = ""),
      (r.disabled = !0),
      (r.selected = !0),
      n.appendChild(r));
  }
  return (fo(n, n, t), n);
};
ge.radio = (e) => {
  const t = e;
  return ((t.textContent = ""), e);
};
ge.checkbox = (e, t) => {
  const n = Q();
  if (!n) throw new Error("Popup not found");
  const r = Ia(n, "checkbox");
  if (!r) throw new Error("Checkbox input not found");
  ((r.value = "1"), (r.checked = !!t.inputValue));
  const i = e.querySelector("span");
  if (i) {
    const a = t.inputPlaceholder || t.inputLabel;
    a && lt(i, a);
  }
  return r;
};
ge.textarea = (e, t) => {
  const n = e;
  (Bi(n, t.inputValue), kd(n, t), fo(n, n, t));
  const r = (s) =>
    parseInt(window.getComputedStyle(s).marginLeft) +
    parseInt(window.getComputedStyle(s).marginRight);
  return (
    setTimeout(() => {
      if ("MutationObserver" in window) {
        const s = Q();
        if (!s) return;
        const i = parseInt(window.getComputedStyle(s).width),
          a = () => {
            if (!document.body.contains(n)) return;
            const l = n.offsetWidth + r(n),
              c = Q();
            c && (l > i ? (c.style.width = `${l}px`) : Xn(c, "width", t.width));
          };
        new MutationObserver(a).observe(n, {
          attributes: !0,
          attributeFilter: ["style"],
        });
      }
    }),
    n
  );
};
const Pj = (e, t) => {
    const n = wd();
    n &&
      (Sd(n),
      rt(n, t, "htmlContainer"),
      t.html
        ? (Pd(t.html, n), Ce(n, "block"))
        : t.text
          ? ((n.textContent = t.text), Ce(n, "block"))
          : Me(n),
      xj(e, t));
  },
  kj = (e, t) => {
    const n = Nv();
    n &&
      (Sd(n),
      uo(n, !!t.footer, "block"),
      t.footer && Pd(t.footer, n),
      rt(n, t, "footer"));
  },
  Nj = (e, t) => {
    const n = G.innerParams.get(e),
      r = rs();
    if (!r) return;
    if (n && t.icon === n.icon) {
      (Hh(r, t), zh(r, t));
      return;
    }
    if (!t.icon && !t.iconHtml) {
      Me(r);
      return;
    }
    if (t.icon && Object.keys(_i).indexOf(t.icon) === -1) {
      (ur(
        `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`,
      ),
        Me(r));
      return;
    }
    (Ce(r),
      Hh(r, t),
      zh(r, t),
      X(r, t.showClass && t.showClass.icon),
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", Ov));
  },
  zh = (e, t) => {
    for (const [n, r] of Object.entries(_i)) t.icon !== n && gt(e, r);
    (X(e, t.icon && _i[t.icon]), Tj(e, t), Ov(), rt(e, t, "icon"));
  },
  Ov = () => {
    const e = Q();
    if (!e) return;
    const t = window.getComputedStyle(e).getPropertyValue("background-color"),
      n = e.querySelectorAll(
        "[class^=swal2-success-circular-line], .swal2-success-fix",
      );
    for (let r = 0; r < n.length; r++) n[r].style.backgroundColor = t;
  },
  Ej = (e) => `
  ${e.animation ? '<div class="swal2-success-circular-line-left"></div>' : ""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${e.animation ? '<div class="swal2-success-fix"></div>' : ""}
  ${e.animation ? '<div class="swal2-success-circular-line-right"></div>' : ""}
`,
  Rj = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
  Hh = (e, t) => {
    if (!t.icon && !t.iconHtml) return;
    let n = e.innerHTML,
      r = "";
    (t.iconHtml
      ? (r = Uh(t.iconHtml))
      : t.icon === "success"
        ? ((r = Ej(t)), (n = n.replace(/ style=".*?"/g, "")))
        : t.icon === "error"
          ? (r = Rj)
          : t.icon &&
            (r = Uh({ question: "?", warning: "!", info: "i" }[t.icon])),
      n.trim() !== r.trim() && lt(e, r));
  },
  Tj = (e, t) => {
    if (t.iconColor) {
      ((e.style.color = t.iconColor), (e.style.borderColor = t.iconColor));
      for (const n of [
        ".swal2-success-line-tip",
        ".swal2-success-line-long",
        ".swal2-x-mark-line-left",
        ".swal2-x-mark-line-right",
      ])
        $h(e, n, "background-color", t.iconColor);
      $h(e, ".swal2-success-ring", "border-color", t.iconColor);
    }
  },
  Uh = (e) => `<div class="${k["icon-content"]}">${e}</div>`,
  Aj = (e, t) => {
    const n = kv();
    if (n) {
      if (!t.imageUrl) {
        Me(n);
        return;
      }
      (Ce(n, ""),
        n.setAttribute("src", t.imageUrl),
        n.setAttribute("alt", t.imageAlt || ""),
        Xn(n, "width", t.imageWidth),
        Xn(n, "height", t.imageHeight),
        (n.className = k.image),
        rt(n, t, "image"));
    }
  };
let Nd = !1,
  Lv = 0,
  Dv = 0,
  Mv = 0,
  _v = 0;
const Oj = (e) => {
    (e.addEventListener("mousedown", Ii),
      document.body.addEventListener("mousemove", Fi),
      e.addEventListener("mouseup", $i),
      e.addEventListener("touchstart", Ii),
      document.body.addEventListener("touchmove", Fi),
      e.addEventListener("touchend", $i));
  },
  Lj = (e) => {
    (e.removeEventListener("mousedown", Ii),
      document.body.removeEventListener("mousemove", Fi),
      e.removeEventListener("mouseup", $i),
      e.removeEventListener("touchstart", Ii),
      document.body.removeEventListener("touchmove", Fi),
      e.removeEventListener("touchend", $i));
  },
  Ii = (e) => {
    const t = Q();
    if (!t) return;
    const n = rs();
    if (e.target === t || (n && n.contains(e.target))) {
      Nd = !0;
      const r = Bv(e);
      ((Lv = r.clientX),
        (Dv = r.clientY),
        (Mv = parseInt(t.style.insetInlineStart) || 0),
        (_v = parseInt(t.style.insetBlockStart) || 0),
        X(t, "swal2-dragging"));
    }
  },
  Fi = (e) => {
    const t = Q();
    if (t && Nd) {
      let { clientX: n, clientY: r } = Bv(e);
      const s = n - Lv;
      ((t.style.insetInlineStart = `${Mv + (_.isRTL ? -s : s)}px`),
        (t.style.insetBlockStart = `${_v + (r - Dv)}px`));
    }
  },
  $i = () => {
    const e = Q();
    ((Nd = !1), gt(e, "swal2-dragging"));
  },
  Bv = (e) => {
    const t = e.type.startsWith("touch") ? e.touches[0] : e;
    return { clientX: t.clientX, clientY: t.clientY };
  },
  Dj = (e, t) => {
    const n = ze(),
      r = Q();
    if (!(!n || !r)) {
      if (t.toast) {
        (Xn(n, "width", t.width), (r.style.width = "100%"));
        const s = os();
        s && r.insertBefore(s, rs());
      } else Xn(r, "width", t.width);
      (Xn(r, "padding", t.padding),
        t.color && (r.style.color = t.color),
        t.background && (r.style.background = t.background),
        Me(Ma()),
        Mj(r, t),
        t.draggable && !t.toast
          ? (X(r, k.draggable), Oj(r))
          : (gt(r, k.draggable), Lj(r)));
    }
  },
  Mj = (e, t) => {
    const n = t.showClass || {};
    ((e.className = `${k.popup} ${Xe(e) ? n.popup : ""}`),
      t.toast
        ? (X([document.documentElement, document.body], k["toast-shown"]),
          X(e, k.toast))
        : X(e, k.modal),
      rt(e, t, "popup"),
      typeof t.customClass == "string" && X(e, t.customClass),
      t.icon && X(e, k[`icon-${t.icon}`]));
  },
  _j = (e, t) => {
    const n = yd();
    if (!n) return;
    const { progressSteps: r, currentProgressStep: s } = t;
    if (!r || r.length === 0 || s === void 0) {
      Me(n);
      return;
    }
    (Ce(n),
      (n.textContent = ""),
      s >= r.length &&
        Ie(
          "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)",
        ),
      r.forEach((i, a) => {
        const l = Bj(i);
        if (
          (n.appendChild(l),
          a === s && X(l, k["active-progress-step"]),
          a !== r.length - 1)
        ) {
          const c = Ij(t);
          n.appendChild(c);
        }
      }));
  },
  Bj = (e) => {
    const t = document.createElement("li");
    return (X(t, k["progress-step"]), lt(t, e), t);
  },
  Ij = (e) => {
    const t = document.createElement("li");
    return (
      X(t, k["progress-step-line"]),
      e.progressStepsDistance && Xn(t, "width", e.progressStepsDistance),
      t
    );
  },
  Fj = (e, t) => {
    const n = Pv();
    n &&
      (Sd(n),
      uo(n, !!(t.title || t.titleText), "block"),
      t.title && Pd(t.title, n),
      t.titleText && (n.innerText = t.titleText),
      rt(n, t, "title"));
  },
  Iv = (e, t) => {
    var n;
    (Dj(e, t),
      mj(e, t),
      _j(e, t),
      Nj(e, t),
      Aj(e, t),
      Fj(e, t),
      pj(e, t),
      Pj(e, t),
      uj(e, t),
      kj(e, t));
    const r = Q();
    (typeof t.didRender == "function" && r && t.didRender(r),
      (n = _.eventEmitter) === null || n === void 0 || n.emit("didRender", r));
  },
  $j = () => Xe(Q()),
  Fv = () => {
    var e;
    return (e = It()) === null || e === void 0 ? void 0 : e.click();
  },
  zj = () => {
    var e;
    return (e = dr()) === null || e === void 0 ? void 0 : e.click();
  },
  Hj = () => {
    var e;
    return (e = ss()) === null || e === void 0 ? void 0 : e.click();
  },
  is = Object.freeze({
    cancel: "cancel",
    backdrop: "backdrop",
    close: "close",
    esc: "esc",
    timer: "timer",
  }),
  $v = (e) => {
    if (e.keydownTarget && e.keydownHandlerAdded && e.keydownHandler) {
      const t = e.keydownHandler;
      (e.keydownTarget.removeEventListener("keydown", t, {
        capture: e.keydownListenerCapture,
      }),
        (e.keydownHandlerAdded = !1));
    }
  },
  Uj = (e, t, n) => {
    if (($v(e), !t.toast)) {
      const r = (i) => Vj(t, i, n);
      e.keydownHandler = r;
      const s = t.keydownListenerCapture ? window : Q();
      if (s) {
        ((e.keydownTarget = s),
          (e.keydownListenerCapture = t.keydownListenerCapture));
        const i = r;
        (e.keydownTarget.addEventListener("keydown", i, {
          capture: e.keydownListenerCapture,
        }),
          (e.keydownHandlerAdded = !0));
      }
    }
  },
  qc = (e, t) => {
    var n;
    const r = jd();
    return r.length
      ? ((e = e + t),
        e === -2 && (e = r.length - 1),
        e === r.length ? (e = 0) : e === -1 && (e = r.length - 1),
        r[e].focus(),
        !(V4() && r[e] instanceof HTMLIFrameElement))
      : ((n = Q()) === null || n === void 0 || n.focus(), !0);
  },
  zv = ["ArrowRight", "ArrowDown"],
  Wj = ["ArrowLeft", "ArrowUp"],
  Vj = (e, t, n) => {
    e &&
      (t.isComposing ||
        t.keyCode === 229 ||
        (e.stopKeydownPropagation && t.stopPropagation(),
        t.key === "Enter"
          ? qj(t, e)
          : t.key === "Tab"
            ? Kj(t)
            : [...zv, ...Wj].includes(t.key)
              ? Yj(t.key)
              : t.key === "Escape" && Xj(t, e, n)));
  },
  qj = (e, t) => {
    if (!Da(t.allowEnterKey)) return;
    const n = Q();
    if (!n || !t.input) return;
    const r = Ia(n, t.input);
    if (
      e.target &&
      r &&
      e.target instanceof HTMLElement &&
      e.target.outerHTML === r.outerHTML
    ) {
      if (["textarea", "file"].includes(t.input)) return;
      (Fv(), e.preventDefault());
    }
  },
  Kj = (e) => {
    const t = e.target,
      n = jd();
    let r = -1;
    for (let i = 0; i < n.length; i++)
      if (t === n[i]) {
        r = i;
        break;
      }
    let s = !0;
    (e.shiftKey ? (s = qc(r, -1)) : (s = qc(r, 1)),
      e.stopPropagation(),
      s && e.preventDefault());
  },
  Yj = (e) => {
    const t = co(),
      n = It(),
      r = dr(),
      s = ss();
    if (!t || !n || !r || !s) return;
    const i = [n, r, s];
    if (
      document.activeElement instanceof HTMLElement &&
      !i.includes(document.activeElement)
    )
      return;
    const a = zv.includes(e) ? "nextElementSibling" : "previousElementSibling";
    let l = document.activeElement;
    if (l) {
      for (let c = 0; c < t.children.length; c++) {
        if (((l = l[a]), !l)) return;
        if (l instanceof HTMLButtonElement && Xe(l)) break;
      }
      l instanceof HTMLButtonElement && l.focus();
    }
  },
  Xj = (e, t, n) => {
    (e.preventDefault(), Da(t.allowEscapeKey) && n(is.esc));
  };
var Yr = {
  swalPromiseResolve: new WeakMap(),
  swalPromiseReject: new WeakMap(),
};
const Gj = () => {
    const e = ze();
    Array.from(document.body.children).forEach((n) => {
      n.contains(e) ||
        (n.hasAttribute("aria-hidden") &&
          n.setAttribute(
            "data-previous-aria-hidden",
            n.getAttribute("aria-hidden") || "",
          ),
        n.setAttribute("aria-hidden", "true"));
    });
  },
  Hv = () => {
    Array.from(document.body.children).forEach((t) => {
      t.hasAttribute("data-previous-aria-hidden")
        ? (t.setAttribute(
            "aria-hidden",
            t.getAttribute("data-previous-aria-hidden") || "",
          ),
          t.removeAttribute("data-previous-aria-hidden"))
        : t.removeAttribute("aria-hidden");
    });
  },
  Ed = typeof window < "u" && !!window.GestureEvent,
  Qj = Ed && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
  Jj = () => {
    if (Ed && !Xt(document.body, k.iosfix)) {
      const e = document.body.scrollTop;
      ((document.body.style.top = `${e * -1}px`),
        X(document.body, k.iosfix),
        Zj());
    }
  },
  Zj = () => {
    const e = ze();
    if (!e) return;
    let t;
    ((e.ontouchstart = (n) => {
      t = e5(n);
    }),
      (e.ontouchmove = (n) => {
        t && (n.preventDefault(), n.stopPropagation());
      }));
  },
  e5 = (e) => {
    const t = e.target,
      n = ze(),
      r = wd();
    return !n || !r || t5(e) || n5(e)
      ? !1
      : t === n ||
          (!Vc(n) &&
            t instanceof HTMLElement &&
            !J4(t, r) &&
            t.tagName !== "INPUT" &&
            t.tagName !== "TEXTAREA" &&
            !(Vc(r) && r.contains(t)));
  },
  t5 = (e) =>
    !!(e.touches && e.touches.length && e.touches[0].touchType === "stylus"),
  n5 = (e) => e.touches && e.touches.length > 1,
  r5 = () => {
    if (Xt(document.body, k.iosfix)) {
      const e = parseInt(document.body.style.top, 10);
      (gt(document.body, k.iosfix),
        (document.body.style.top = ""),
        (document.body.scrollTop = e * -1));
    }
  },
  s5 = () => {
    const e = document.createElement("div");
    ((e.className = k["scrollbar-measure"]), document.body.appendChild(e));
    const t = e.getBoundingClientRect().width - e.clientWidth;
    return (document.body.removeChild(e), t);
  };
let Br = null;
const o5 = (e) => {
    Br === null &&
      (document.body.scrollHeight > window.innerHeight || e === "scroll") &&
      ((Br = parseInt(
        window
          .getComputedStyle(document.body)
          .getPropertyValue("padding-right"),
      )),
      (document.body.style.paddingRight = `${Br + s5()}px`));
  },
  i5 = () => {
    Br !== null &&
      ((document.body.style.paddingRight = `${Br}px`), (Br = null));
  };
function Uv(e, t, n, r) {
  (Ba() ? Wh(e, r) : (z4(n).then(() => Wh(e, r)), $v(_)),
    Ed
      ? (t.setAttribute("style", "display:none !important"),
        t.removeAttribute("class"),
        (t.innerHTML = ""))
      : t.remove(),
    bd() && (i5(), r5(), Hv()),
    a5());
}
function a5() {
  gt(
    [document.documentElement, document.body],
    [k.shown, k["height-auto"], k["no-backdrop"], k["toast-shown"]],
  );
}
function mn(e) {
  e = c5(e);
  const t = Yr.swalPromiseResolve.get(this),
    n = l5(this);
  this.isAwaitingPromise ? e.isDismissed || (ho(this), t(e)) : n && t(e);
}
const l5 = (e) => {
  const t = Q();
  if (!t) return !1;
  const n = G.innerParams.get(e);
  if (!n || Xt(t, n.hideClass.popup)) return !1;
  (gt(t, n.showClass.popup), X(t, n.hideClass.popup));
  const r = ze();
  return (
    gt(r, n.showClass.backdrop),
    X(r, n.hideClass.backdrop),
    u5(e, t, n),
    !0
  );
};
function Wv(e) {
  const t = Yr.swalPromiseReject.get(this);
  (ho(this), t && t(e));
}
const ho = (e) => {
    e.isAwaitingPromise &&
      (delete e.isAwaitingPromise, G.innerParams.get(e) || e._destroy());
  },
  c5 = (e) =>
    typeof e > "u"
      ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
      : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, e),
  u5 = (e, t, n) => {
    var r;
    const s = ze(),
      i = Tv(t);
    (typeof n.willClose == "function" && n.willClose(t),
      (r = _.eventEmitter) === null || r === void 0 || r.emit("willClose", t),
      i && s
        ? d5(e, t, s, !!n.returnFocus, n.didClose)
        : s && Uv(e, s, !!n.returnFocus, n.didClose));
  },
  d5 = (e, t, n, r, s) => {
    _.swalCloseEventFinishedCallback = Uv.bind(null, e, n, r, s);
    const i = function (a) {
      if (a.target === t) {
        var l;
        ((l = _.swalCloseEventFinishedCallback) === null ||
          l === void 0 ||
          l.call(_),
          delete _.swalCloseEventFinishedCallback,
          t.removeEventListener("animationend", i),
          t.removeEventListener("transitionend", i));
      }
    };
    (t.addEventListener("animationend", i),
      t.addEventListener("transitionend", i));
  },
  Wh = (e, t) => {
    setTimeout(() => {
      var n;
      (typeof t == "function" && t.bind(e.params)(),
        (n = _.eventEmitter) === null || n === void 0 || n.emit("didClose"),
        e._destroy && e._destroy());
    });
  },
  Xr = (e) => {
    let t = Q();
    if ((t || new Wi(), (t = Q()), !t)) return;
    const n = os();
    (Ba() ? Me(rs()) : f5(t, e),
      Ce(n),
      t.setAttribute("data-loading", "true"),
      t.setAttribute("aria-busy", "true"),
      t.focus());
  },
  f5 = (e, t) => {
    const n = co(),
      r = os();
    !n ||
      !r ||
      (!t && Xe(It()) && (t = It()),
      Ce(n),
      t &&
        (Me(t),
        r.setAttribute("data-button-to-replace", t.className),
        n.insertBefore(r, t)),
      X([e, n], k.loading));
  },
  h5 = (e, t) => {
    t.input === "select" || t.input === "radio"
      ? w5(e, t)
      : ["text", "email", "number", "tel", "textarea"].some(
          (n) => n === t.input,
        ) &&
        (gd(t.inputValue) || vd(t.inputValue)) &&
        (Xr(It()), y5(e, t));
  },
  p5 = (e, t) => {
    const n = e.getInput();
    if (!n) return null;
    switch (t.input) {
      case "checkbox":
        return m5(n);
      case "radio":
        return g5(n);
      case "file":
        return v5(n);
      default:
        return t.inputAutoTrim ? n.value.trim() : n.value;
    }
  },
  m5 = (e) => (e.checked ? 1 : 0),
  g5 = (e) => (e.checked ? e.value : null),
  v5 = (e) =>
    e.files && e.files.length
      ? e.getAttribute("multiple") !== null
        ? e.files
        : e.files[0]
      : null,
  w5 = (e, t) => {
    const n = Q();
    if (!n) return;
    const r = (s) => {
      t.input === "select"
        ? x5(n, Kc(s), t)
        : t.input === "radio" && j5(n, Kc(s), t);
    };
    gd(t.inputOptions) || vd(t.inputOptions)
      ? (Xr(It()),
        ao(t.inputOptions).then((s) => {
          (e.hideLoading(), r(s));
        }))
      : typeof t.inputOptions == "object"
        ? r(t.inputOptions)
        : ur(
            `Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof t.inputOptions}`,
          );
  },
  y5 = (e, t) => {
    const n = e.getInput();
    n &&
      (Me(n),
      ao(t.inputValue)
        .then((r) => {
          ((n.value = t.input === "number" ? `${parseFloat(r) || 0}` : `${r}`),
            Ce(n),
            n.focus(),
            e.hideLoading());
        })
        .catch((r) => {
          (ur(`Error in inputValue promise: ${r}`),
            (n.value = ""),
            Ce(n),
            n.focus(),
            e.hideLoading());
        }));
  };
function x5(e, t, n) {
  const r = pn(e, k.select);
  if (!r) return;
  const s = (i, a, l) => {
    const c = document.createElement("option");
    ((c.value = l),
      lt(c, a),
      (c.selected = Vv(l, n.inputValue)),
      i.appendChild(c));
  };
  (t.forEach((i) => {
    const a = i[0],
      l = i[1];
    if (Array.isArray(l)) {
      const c = document.createElement("optgroup");
      ((c.label = a),
        (c.disabled = !1),
        r.appendChild(c),
        l.forEach((u) => s(c, u[1], u[0])));
    } else s(r, l, a);
  }),
    r.focus());
}
function j5(e, t, n) {
  const r = pn(e, k.radio);
  if (!r) return;
  t.forEach((i) => {
    const a = i[0],
      l = i[1],
      c = document.createElement("input"),
      u = document.createElement("label");
    ((c.type = "radio"),
      (c.name = k.radio),
      (c.value = a),
      Vv(a, n.inputValue) && (c.checked = !0));
    const d = document.createElement("span");
    (lt(d, l),
      (d.className = k.label),
      u.appendChild(c),
      u.appendChild(d),
      r.appendChild(u));
  });
  const s = r.querySelectorAll("input");
  s.length && s[0].focus();
}
const Kc = (e) =>
    (e instanceof Map ? Array.from(e) : Object.entries(e)).map(([n, r]) => [
      n,
      typeof r == "object" ? Kc(r) : r,
    ]),
  Vv = (e, t) =>
    !!t && t !== null && t !== void 0 && t.toString() === e.toString(),
  b5 = (e) => {
    const t = G.innerParams.get(e);
    (e.disableButtons(), t.input ? qv(e, "confirm") : Td(e, !0));
  },
  S5 = (e) => {
    const t = G.innerParams.get(e);
    (e.disableButtons(), t.returnInputValueOnDeny ? qv(e, "deny") : Rd(e, !1));
  },
  C5 = (e, t) => {
    (e.disableButtons(), t(is.cancel));
  },
  qv = (e, t) => {
    const n = G.innerParams.get(e);
    if (!n.input) {
      ur(
        `The "input" parameter is needed to be set when using returnInputValueOn${md(t)}`,
      );
      return;
    }
    const r = e.getInput(),
      s = p5(e, n);
    n.inputValidator
      ? P5(e, s, t)
      : r && !r.checkValidity()
        ? (e.enableButtons(),
          e.showValidationMessage(n.validationMessage || r.validationMessage))
        : t === "deny"
          ? Rd(e, s)
          : Td(e, s);
  },
  P5 = (e, t, n) => {
    const r = G.innerParams.get(e);
    (e.disableInput(),
      Promise.resolve()
        .then(() => ao(r.inputValidator(t, r.validationMessage)))
        .then((i) => {
          (e.enableButtons(),
            e.enableInput(),
            i
              ? e.showValidationMessage(i)
              : n === "deny"
                ? Rd(e, t)
                : Td(e, t));
        }));
  },
  Rd = (e, t) => {
    const n = G.innerParams.get(e);
    (n.showLoaderOnDeny && Xr(dr()),
      n.preDeny
        ? ((e.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => ao(n.preDeny(t, n.validationMessage)))
            .then((s) => {
              s === !1
                ? (e.hideLoading(), ho(e))
                : e.close({ isDenied: !0, value: typeof s > "u" ? t : s });
            })
            .catch((s) => Kv(e, s)))
        : e.close({ isDenied: !0, value: t }));
  },
  Vh = (e, t) => {
    e.close({ isConfirmed: !0, value: t });
  },
  Kv = (e, t) => {
    e.rejectPromise(t);
  },
  Td = (e, t) => {
    const n = G.innerParams.get(e);
    (n.showLoaderOnConfirm && Xr(),
      n.preConfirm
        ? (e.resetValidationMessage(),
          (e.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => ao(n.preConfirm(t, n.validationMessage)))
            .then((s) => {
              Xe(Ma()) || s === !1
                ? (e.hideLoading(), ho(e))
                : Vh(e, typeof s > "u" ? t : s);
            })
            .catch((s) => Kv(e, s)))
        : Vh(e, t));
  };
function zi() {
  const e = G.innerParams.get(this);
  if (!e) return;
  const t = G.domCache.get(this);
  (Me(t.loader),
    Ba() ? e.icon && Ce(rs()) : k5(t),
    gt([t.popup, t.actions], k.loading),
    t.popup.removeAttribute("aria-busy"),
    t.popup.removeAttribute("data-loading"),
    (t.confirmButton.disabled = !1),
    (t.denyButton.disabled = !1),
    (t.cancelButton.disabled = !1));
  const n = G.focusedElement.get(this);
  (n instanceof HTMLElement &&
    document.activeElement === document.body &&
    n.focus(),
    G.focusedElement.delete(this));
}
const k5 = (e) => {
  const t = e.loader.getAttribute("data-button-to-replace"),
    n = t ? e.popup.getElementsByClassName(t) : [];
  n.length ? Ce(n[0], "inline-block") : Q4() && Me(e.actions);
};
function Yv() {
  const e = G.innerParams.get(this),
    t = G.domCache.get(this);
  return t ? Ia(t.popup, e.input) : null;
}
function Xv(e, t, n) {
  const r = G.domCache.get(e);
  t.forEach((s) => {
    r[s].disabled = n;
  });
}
function Gv(e, t) {
  const n = Q();
  if (!(!n || !e))
    if (e.type === "radio") {
      const r = n.querySelectorAll(`[name="${k.radio}"]`);
      for (let s = 0; s < r.length; s++) r[s].disabled = t;
    } else e.disabled = t;
}
function Qv() {
  Xv(this, ["confirmButton", "denyButton", "cancelButton"], !1);
  const e = G.focusedElement.get(this);
  (e instanceof HTMLElement &&
    document.activeElement === document.body &&
    e.focus(),
    G.focusedElement.delete(this));
}
function Jv() {
  (G.focusedElement.set(this, document.activeElement),
    Xv(this, ["confirmButton", "denyButton", "cancelButton"], !0));
}
function Zv() {
  Gv(this.getInput(), !1);
}
function e0() {
  Gv(this.getInput(), !0);
}
function t0(e) {
  const t = G.domCache.get(this),
    n = G.innerParams.get(this);
  (lt(t.validationMessage, e),
    (t.validationMessage.className = k["validation-message"]),
    n.customClass &&
      n.customClass.validationMessage &&
      X(t.validationMessage, n.customClass.validationMessage),
    Ce(t.validationMessage));
  const r = this.getInput();
  r &&
    (r.setAttribute("aria-invalid", "true"),
    r.setAttribute("aria-describedby", k["validation-message"]),
    Ev(r),
    X(r, k.inputerror));
}
function n0() {
  const e = G.domCache.get(this);
  e.validationMessage && Me(e.validationMessage);
  const t = this.getInput();
  t &&
    (t.removeAttribute("aria-invalid"),
    t.removeAttribute("aria-describedby"),
    gt(t, k.inputerror));
}
const gn = {
    title: "",
    titleText: "",
    text: "",
    html: "",
    footer: "",
    icon: void 0,
    iconColor: void 0,
    iconHtml: void 0,
    template: void 0,
    toast: !1,
    draggable: !1,
    animation: !0,
    theme: "light",
    showClass: {
      popup: "swal2-show",
      backdrop: "swal2-backdrop-show",
      icon: "swal2-icon-show",
    },
    hideClass: {
      popup: "swal2-hide",
      backdrop: "swal2-backdrop-hide",
      icon: "swal2-icon-hide",
    },
    customClass: {},
    target: "body",
    color: void 0,
    backdrop: !0,
    heightAuto: !0,
    allowOutsideClick: !0,
    allowEscapeKey: !0,
    allowEnterKey: !0,
    stopKeydownPropagation: !0,
    keydownListenerCapture: !1,
    showConfirmButton: !0,
    showDenyButton: !1,
    showCancelButton: !1,
    preConfirm: void 0,
    preDeny: void 0,
    confirmButtonText: "OK",
    confirmButtonAriaLabel: "",
    confirmButtonColor: void 0,
    denyButtonText: "No",
    denyButtonAriaLabel: "",
    denyButtonColor: void 0,
    cancelButtonText: "Cancel",
    cancelButtonAriaLabel: "",
    cancelButtonColor: void 0,
    buttonsStyling: !0,
    reverseButtons: !1,
    focusConfirm: !0,
    focusDeny: !1,
    focusCancel: !1,
    returnFocus: !0,
    showCloseButton: !1,
    closeButtonHtml: "&times;",
    closeButtonAriaLabel: "Close this dialog",
    loaderHtml: "",
    showLoaderOnConfirm: !1,
    showLoaderOnDeny: !1,
    imageUrl: void 0,
    imageWidth: void 0,
    imageHeight: void 0,
    imageAlt: "",
    timer: void 0,
    timerProgressBar: !1,
    width: void 0,
    padding: void 0,
    background: void 0,
    input: void 0,
    inputPlaceholder: "",
    inputLabel: "",
    inputValue: "",
    inputOptions: {},
    inputAutoFocus: !0,
    inputAutoTrim: !0,
    inputAttributes: {},
    inputValidator: void 0,
    returnInputValueOnDeny: !1,
    validationMessage: void 0,
    grow: !1,
    position: "center",
    progressSteps: [],
    currentProgressStep: void 0,
    progressStepsDistance: void 0,
    willOpen: void 0,
    didOpen: void 0,
    didRender: void 0,
    willClose: void 0,
    didClose: void 0,
    didDestroy: void 0,
    scrollbarPadding: !0,
    topLayer: !1,
  },
  N5 = [
    "allowEscapeKey",
    "allowOutsideClick",
    "background",
    "buttonsStyling",
    "cancelButtonAriaLabel",
    "cancelButtonColor",
    "cancelButtonText",
    "closeButtonAriaLabel",
    "closeButtonHtml",
    "color",
    "confirmButtonAriaLabel",
    "confirmButtonColor",
    "confirmButtonText",
    "currentProgressStep",
    "customClass",
    "denyButtonAriaLabel",
    "denyButtonColor",
    "denyButtonText",
    "didClose",
    "didDestroy",
    "draggable",
    "footer",
    "hideClass",
    "html",
    "icon",
    "iconColor",
    "iconHtml",
    "imageAlt",
    "imageHeight",
    "imageUrl",
    "imageWidth",
    "preConfirm",
    "preDeny",
    "progressSteps",
    "returnFocus",
    "reverseButtons",
    "showCancelButton",
    "showCloseButton",
    "showConfirmButton",
    "showDenyButton",
    "text",
    "title",
    "titleText",
    "theme",
    "willClose",
  ],
  E5 = { allowEnterKey: void 0 },
  R5 = [
    "allowOutsideClick",
    "allowEnterKey",
    "backdrop",
    "draggable",
    "focusConfirm",
    "focusDeny",
    "focusCancel",
    "returnFocus",
    "heightAuto",
    "keydownListenerCapture",
  ],
  r0 = (e) => Object.prototype.hasOwnProperty.call(gn, e),
  s0 = (e) => N5.indexOf(e) !== -1,
  o0 = (e) => E5[e],
  T5 = (e) => {
    r0(e) || Ie(`Unknown parameter "${e}"`);
  },
  A5 = (e) => {
    R5.includes(e) && Ie(`The parameter "${e}" is incompatible with toasts`);
  },
  O5 = (e) => {
    const t = o0(e);
    t && Cv(e, t);
  },
  i0 = (e) => {
    (e.backdrop === !1 &&
      e.allowOutsideClick &&
      Ie(
        '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`',
      ),
      e.theme &&
        ![
          "light",
          "dark",
          "auto",
          "minimal",
          "borderless",
          "bootstrap-4",
          "bootstrap-4-light",
          "bootstrap-4-dark",
          "bootstrap-5",
          "bootstrap-5-light",
          "bootstrap-5-dark",
          "material-ui",
          "material-ui-light",
          "material-ui-dark",
          "embed-iframe",
          "bulma",
          "bulma-light",
          "bulma-dark",
        ].includes(e.theme) &&
        Ie(`Invalid theme "${e.theme}"`));
    for (const t in e) (T5(t), e.toast && A5(t), O5(t));
  };
function a0(e) {
  const t = ze(),
    n = Q(),
    r = G.innerParams.get(this);
  if (!n || Xt(n, r.hideClass.popup)) {
    Ie(
      "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.",
    );
    return;
  }
  const s = L5(e),
    i = Object.assign({}, r, s);
  (i0(i),
    t && (t.dataset.swal2Theme = i.theme),
    Iv(this, i),
    G.innerParams.set(this, i),
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, e),
        writable: !1,
        enumerable: !0,
      },
    }));
}
const L5 = (e) => {
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      if (s0(n)) {
        const r = e;
        t[n] = r[n];
      } else Ie(`Invalid parameter to update: ${n}`);
    }),
    t
  );
};
function l0() {
  var e;
  const t = G.domCache.get(this),
    n = G.innerParams.get(this);
  if (!n) {
    c0(this);
    return;
  }
  (t.popup &&
    _.swalCloseEventFinishedCallback &&
    (_.swalCloseEventFinishedCallback(),
    delete _.swalCloseEventFinishedCallback),
    typeof n.didDestroy == "function" && n.didDestroy(),
    (e = _.eventEmitter) === null || e === void 0 || e.emit("didDestroy"),
    D5(this));
}
const D5 = (e) => {
    (c0(e),
      delete e.params,
      delete _.keydownHandler,
      delete _.keydownTarget,
      delete _.currentInstance);
  },
  c0 = (e) => {
    e.isAwaitingPromise
      ? (Ol(G, e), (e.isAwaitingPromise = !0))
      : (Ol(Yr, e),
        Ol(G, e),
        delete e.isAwaitingPromise,
        delete e.disableButtons,
        delete e.enableButtons,
        delete e.getInput,
        delete e.disableInput,
        delete e.enableInput,
        delete e.hideLoading,
        delete e.disableLoading,
        delete e.showValidationMessage,
        delete e.resetValidationMessage,
        delete e.close,
        delete e.closePopup,
        delete e.closeModal,
        delete e.closeToast,
        delete e.rejectPromise,
        delete e.update,
        delete e._destroy);
  },
  Ol = (e, t) => {
    for (const n in e) e[n].delete(t);
  };
var M5 = Object.freeze({
  __proto__: null,
  _destroy: l0,
  close: mn,
  closeModal: mn,
  closePopup: mn,
  closeToast: mn,
  disableButtons: Jv,
  disableInput: e0,
  disableLoading: zi,
  enableButtons: Qv,
  enableInput: Zv,
  getInput: Yv,
  handleAwaitingPromise: ho,
  hideLoading: zi,
  rejectPromise: Wv,
  resetValidationMessage: n0,
  showValidationMessage: t0,
  update: a0,
});
const _5 = (e, t, n) => {
    e.toast ? B5(e, t, n) : (F5(t), $5(t), z5(e, t, n));
  },
  B5 = (e, t, n) => {
    t.popup.onclick = () => {
      (e && (I5(e) || e.timer || e.input)) || n(is.close);
    };
  },
  I5 = (e) =>
    !!(
      e.showConfirmButton ||
      e.showDenyButton ||
      e.showCancelButton ||
      e.showCloseButton
    );
let Hi = !1;
const F5 = (e) => {
    e.popup.onmousedown = () => {
      e.container.onmouseup = function (t) {
        ((e.container.onmouseup = () => {}),
          t.target === e.container && (Hi = !0));
      };
    };
  },
  $5 = (e) => {
    e.container.onmousedown = (t) => {
      (t.target === e.container && t.preventDefault(),
        (e.popup.onmouseup = function (n) {
          ((e.popup.onmouseup = () => {}),
            (n.target === e.popup ||
              (n.target instanceof HTMLElement &&
                e.popup.contains(n.target))) &&
              (Hi = !0));
        }));
    };
  },
  z5 = (e, t, n) => {
    t.container.onclick = (r) => {
      if (Hi) {
        Hi = !1;
        return;
      }
      r.target === t.container && Da(e.allowOutsideClick) && n(is.backdrop);
    };
  },
  H5 = (e) => typeof e == "object" && e !== null && "jquery" in e,
  qh = (e) => e instanceof Element || H5(e),
  U5 = (e) => {
    const t = {};
    return (
      typeof e[0] == "object" && !qh(e[0])
        ? Object.assign(t, e[0])
        : ["title", "html", "icon"].forEach((n, r) => {
            const s = e[r];
            typeof s == "string" || qh(s)
              ? (t[n] = s)
              : s !== void 0 &&
                ur(
                  `Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`,
                );
          }),
      t
    );
  };
function W5(...e) {
  return new this(...e);
}
function V5(e) {
  class t extends this {
    _main(r, s) {
      return super._main(r, Object.assign({}, e, s));
    }
  }
  return t;
}
const q5 = () => _.timeout && _.timeout.getTimerLeft(),
  u0 = () => {
    if (_.timeout) return (Z4(), _.timeout.stop());
  },
  d0 = () => {
    if (_.timeout) {
      const e = _.timeout.start();
      return (Cd(e), e);
    }
  },
  K5 = () => {
    const e = _.timeout;
    return e && (e.running ? u0() : d0());
  },
  Y5 = (e) => {
    if (_.timeout) {
      const t = _.timeout.increase(e);
      return (Cd(t, !0), t);
    }
  },
  X5 = () => !!(_.timeout && _.timeout.isRunning());
let Kh = !1;
const Yc = {};
function G5(e = "data-swal-template") {
  ((Yc[e] = this),
    Kh || (document.body.addEventListener("click", Q5), (Kh = !0)));
}
const Q5 = (e) => {
  for (let t = e.target; t && t !== document; t = t.parentNode)
    for (const n in Yc) {
      const r = t.getAttribute && t.getAttribute(n);
      if (r) {
        Yc[n].fire({ template: r });
        return;
      }
    }
};
class J5 {
  constructor() {
    this.events = {};
  }
  _getHandlersByEventName(t) {
    return (
      typeof this.events[t] > "u" && (this.events[t] = []),
      this.events[t]
    );
  }
  on(t, n) {
    const r = this._getHandlersByEventName(t);
    r.includes(n) || r.push(n);
  }
  once(t, n) {
    const r = (...s) => {
      (this.removeListener(t, r), n.apply(this, s));
    };
    this.on(t, r);
  }
  emit(t, ...n) {
    this._getHandlersByEventName(t).forEach((r) => {
      try {
        r.apply(this, n);
      } catch (s) {
        console.error(s);
      }
    });
  }
  removeListener(t, n) {
    const r = this._getHandlersByEventName(t),
      s = r.indexOf(n);
    s > -1 && r.splice(s, 1);
  }
  removeAllListeners(t) {
    this.events[t] !== void 0 && (this.events[t].length = 0);
  }
  reset() {
    this.events = {};
  }
}
_.eventEmitter = new J5();
const Z5 = (e, t) => {
    _.eventEmitter && _.eventEmitter.on(e, t);
  },
  e3 = (e, t) => {
    _.eventEmitter && _.eventEmitter.once(e, t);
  },
  t3 = (e, t) => {
    if (_.eventEmitter) {
      if (!e) {
        _.eventEmitter.reset();
        return;
      }
      t
        ? _.eventEmitter.removeListener(e, t)
        : _.eventEmitter.removeAllListeners(e);
    }
  };
var n3 = Object.freeze({
  __proto__: null,
  argsToParams: U5,
  bindClickHandler: G5,
  clickCancel: Hj,
  clickConfirm: Fv,
  clickDeny: zj,
  enableLoading: Xr,
  fire: W5,
  getActions: co,
  getCancelButton: ss,
  getCloseButton: xd,
  getConfirmButton: It,
  getContainer: ze,
  getDenyButton: dr,
  getFocusableElements: jd,
  getFooter: Nv,
  getHtmlContainer: wd,
  getIcon: rs,
  getIconContent: q4,
  getImage: kv,
  getInputLabel: K4,
  getLoader: os,
  getPopup: Q,
  getProgressSteps: yd,
  getTimerLeft: q5,
  getTimerProgressBar: _a,
  getTitle: Pv,
  getValidationMessage: Ma,
  increaseTimer: Y5,
  isDeprecatedParameter: o0,
  isLoading: X4,
  isTimerRunning: X5,
  isUpdatableParameter: s0,
  isValidParameter: r0,
  isVisible: $j,
  mixin: V5,
  off: t3,
  on: Z5,
  once: e3,
  resumeTimer: d0,
  showLoading: Xr,
  stopTimer: u0,
  toggleTimer: K5,
});
class r3 {
  constructor(t, n) {
    ((this.callback = t),
      (this.remaining = n),
      (this.running = !1),
      this.start());
  }
  start() {
    return (
      this.running ||
        ((this.running = !0),
        (this.started = new Date()),
        (this.id = setTimeout(this.callback, this.remaining))),
      this.remaining
    );
  }
  stop() {
    return (
      this.started &&
        this.running &&
        ((this.running = !1),
        clearTimeout(this.id),
        (this.remaining -= new Date().getTime() - this.started.getTime())),
      this.remaining
    );
  }
  increase(t) {
    const n = this.running;
    return (
      n && this.stop(),
      (this.remaining += t),
      n && this.start(),
      this.remaining
    );
  }
  getTimerLeft() {
    return (this.running && (this.stop(), this.start()), this.remaining);
  }
  isRunning() {
    return this.running;
  }
}
const f0 = ["swal-title", "swal-html", "swal-footer"],
  s3 = (e) => {
    const t =
      typeof e.template == "string"
        ? document.querySelector(e.template)
        : e.template;
    if (!t) return {};
    const n = t.content;
    return (
      f3(n),
      Object.assign(o3(n), i3(n), a3(n), l3(n), c3(n), u3(n), d3(n, f0))
    );
  },
  o3 = (e) => {
    const t = {};
    return (
      Array.from(e.querySelectorAll("swal-param")).forEach((r) => {
        rr(r, ["name", "value"]);
        const s = r.getAttribute("name"),
          i = r.getAttribute("value");
        !s ||
          !i ||
          (s in gn && typeof gn[s] == "boolean"
            ? (t[s] = i !== "false")
            : s in gn && typeof gn[s] == "object"
              ? (t[s] = JSON.parse(i))
              : (t[s] = i));
      }),
      t
    );
  },
  i3 = (e) => {
    const t = {};
    return (
      Array.from(e.querySelectorAll("swal-function-param")).forEach((r) => {
        const s = r.getAttribute("name"),
          i = r.getAttribute("value");
        !s || !i || (t[s] = new Function(`return ${i}`)());
      }),
      t
    );
  },
  a3 = (e) => {
    const t = {};
    return (
      Array.from(e.querySelectorAll("swal-button")).forEach((r) => {
        rr(r, ["type", "color", "aria-label"]);
        const s = r.getAttribute("type");
        if (!s || !["confirm", "cancel", "deny"].includes(s)) return;
        ((t[`${s}ButtonText`] = r.innerHTML), (t[`show${md(s)}Button`] = !0));
        const i = r.getAttribute("color");
        i !== null && (t[`${s}ButtonColor`] = i);
        const a = r.getAttribute("aria-label");
        a !== null && (t[`${s}ButtonAriaLabel`] = a);
      }),
      t
    );
  },
  l3 = (e) => {
    const t = {},
      n = e.querySelector("swal-image");
    if (n) {
      rr(n, ["src", "width", "height", "alt"]);
      const r = n.getAttribute("src");
      r !== null && (t.imageUrl = r || void 0);
      const s = n.getAttribute("width");
      s !== null && (t.imageWidth = s || void 0);
      const i = n.getAttribute("height");
      i !== null && (t.imageHeight = i || void 0);
      const a = n.getAttribute("alt");
      a !== null && (t.imageAlt = a || void 0);
    }
    return t;
  },
  c3 = (e) => {
    const t = {},
      n = e.querySelector("swal-icon");
    return (
      n &&
        (rr(n, ["type", "color"]),
        n.hasAttribute("type") && (t.icon = n.getAttribute("type")),
        n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")),
        (t.iconHtml = n.innerHTML)),
      t
    );
  },
  u3 = (e) => {
    const t = {},
      n = e.querySelector("swal-input");
    n &&
      (rr(n, ["type", "label", "placeholder", "value"]),
      (t.input = n.getAttribute("type") || "text"),
      n.hasAttribute("label") && (t.inputLabel = n.getAttribute("label")),
      n.hasAttribute("placeholder") &&
        (t.inputPlaceholder = n.getAttribute("placeholder")),
      n.hasAttribute("value") && (t.inputValue = n.getAttribute("value")));
    const r = Array.from(e.querySelectorAll("swal-input-option"));
    return (
      r.length &&
        ((t.inputOptions = {}),
        r.forEach((s) => {
          rr(s, ["value"]);
          const i = s.getAttribute("value");
          if (!i) return;
          const a = s.innerHTML;
          t.inputOptions[i] = a;
        })),
      t
    );
  },
  d3 = (e, t) => {
    const n = {};
    for (const r in t) {
      const s = t[r],
        i = e.querySelector(s);
      i && (rr(i, []), (n[s.replace(/^swal-/, "")] = i.innerHTML.trim()));
    }
    return n;
  },
  f3 = (e) => {
    const t = f0.concat([
      "swal-param",
      "swal-function-param",
      "swal-button",
      "swal-image",
      "swal-icon",
      "swal-input",
      "swal-input-option",
    ]);
    Array.from(e.children).forEach((n) => {
      const r = n.tagName.toLowerCase();
      t.includes(r) || Ie(`Unrecognized element <${r}>`);
    });
  },
  rr = (e, t) => {
    Array.from(e.attributes).forEach((n) => {
      t.indexOf(n.name) === -1 &&
        Ie([
          `Unrecognized attribute "${n.name}" on <${e.tagName.toLowerCase()}>.`,
          `${t.length ? `Allowed attributes are: ${t.join(", ")}` : "To set the value, use HTML within the element."}`,
        ]);
    });
  },
  h0 = 10,
  h3 = (e) => {
    var t, n;
    const r = ze(),
      s = Q();
    if (!r || !s) return;
    (typeof e.willOpen == "function" && e.willOpen(s),
      (t = _.eventEmitter) === null || t === void 0 || t.emit("willOpen", s));
    const a = window.getComputedStyle(document.body).overflowY;
    if (
      (g3(r, s, e),
      setTimeout(() => {
        p3(r, s);
      }, h0),
      bd() &&
        (m3(r, e.scrollbarPadding !== void 0 ? e.scrollbarPadding : !1, a),
        Gj()),
      Qj &&
        e.backdrop === !1 &&
        s.scrollHeight > r.clientHeight &&
        (r.style.pointerEvents = "auto"),
      !Ba() &&
        !_.previousActiveElement &&
        (_.previousActiveElement = document.activeElement),
      typeof e.didOpen == "function")
    ) {
      const l = e.didOpen;
      setTimeout(() => l(s));
    }
    (n = _.eventEmitter) === null || n === void 0 || n.emit("didOpen", s);
  },
  Ui = (e) => {
    const t = Q();
    if (!t || e.target !== t) return;
    const n = ze();
    n &&
      (t.removeEventListener("animationend", Ui),
      t.removeEventListener("transitionend", Ui),
      (n.style.overflowY = "auto"),
      gt(n, k["no-transition"]));
  },
  p3 = (e, t) => {
    Tv(t)
      ? ((e.style.overflowY = "hidden"),
        t.addEventListener("animationend", Ui),
        t.addEventListener("transitionend", Ui))
      : (e.style.overflowY = "auto");
  },
  m3 = (e, t, n) => {
    (Jj(),
      t && n !== "hidden" && o5(n),
      setTimeout(() => {
        e.scrollTop = 0;
      }));
  },
  g3 = (e, t, n) => {
    var r;
    ((r = n.showClass) !== null &&
      r !== void 0 &&
      r.backdrop &&
      X(e, n.showClass.backdrop),
      n.animation
        ? (t.style.setProperty("opacity", "0", "important"),
          Ce(t, "grid"),
          setTimeout(() => {
            var s;
            ((s = n.showClass) !== null &&
              s !== void 0 &&
              s.popup &&
              X(t, n.showClass.popup),
              t.style.removeProperty("opacity"));
          }, h0))
        : Ce(t, "grid"),
      X([document.documentElement, document.body], k.shown),
      n.heightAuto &&
        n.backdrop &&
        !n.toast &&
        X([document.documentElement, document.body], k["height-auto"]));
  };
var Yh = {
  email: (e, t) =>
    /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)
      ? Promise.resolve()
      : Promise.resolve(t || "Invalid email address"),
  url: (e, t) =>
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
      e,
    )
      ? Promise.resolve()
      : Promise.resolve(t || "Invalid URL"),
};
function v3(e) {
  e.inputValidator ||
    (e.input === "email" && (e.inputValidator = Yh.email),
    e.input === "url" && (e.inputValidator = Yh.url));
}
function w3(e) {
  (!e.target ||
    (typeof e.target == "string" && !document.querySelector(e.target)) ||
    (typeof e.target != "string" && !e.target.appendChild)) &&
    (Ie('Target parameter is not valid, defaulting to "body"'),
    (e.target = "body"));
}
function y3(e) {
  (v3(e),
    e.showLoaderOnConfirm &&
      !e.preConfirm &&
      Ie(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
    w3(e),
    typeof e.title == "string" &&
      (e.title = e.title
        .split(
          `
`,
        )
        .join("<br />")),
    aj(e));
}
let Lt;
var _o = new WeakMap();
class we {
  constructor(...t) {
    if (
      (B4(
        this,
        _o,
        Promise.resolve({ isConfirmed: !1, isDenied: !1, isDismissed: !0 }),
      ),
      typeof window > "u")
    )
      return;
    Lt = this;
    const n = Object.freeze(this.constructor.argsToParams(t));
    ((this.params = n),
      (this.isAwaitingPromise = !1),
      I4(_o, this, this._main(Lt.params)));
  }
  _main(t, n = {}) {
    if ((i0(Object.assign({}, n, t)), _.currentInstance)) {
      const i = Yr.swalPromiseResolve.get(_.currentInstance),
        { isAwaitingPromise: a } = _.currentInstance;
      (_.currentInstance._destroy(), a || i({ isDismissed: !0 }), bd() && Hv());
    }
    _.currentInstance = Lt;
    const r = j3(t, n);
    (y3(r),
      Object.freeze(r),
      _.timeout && (_.timeout.stop(), delete _.timeout),
      clearTimeout(_.restoreFocusTimeout));
    const s = b3(Lt);
    return (Iv(Lt, r), G.innerParams.set(Lt, r), x3(Lt, s, r));
  }
  then(t) {
    return Ih(_o, this).then(t);
  }
  finally(t) {
    return Ih(_o, this).finally(t);
  }
}
const x3 = (e, t, n) =>
    new Promise((r, s) => {
      const i = (a) => {
        e.close({ isDismissed: !0, dismiss: a, isConfirmed: !1, isDenied: !1 });
      };
      (Yr.swalPromiseResolve.set(e, r),
        Yr.swalPromiseReject.set(e, s),
        (t.confirmButton.onclick = () => {
          b5(e);
        }),
        (t.denyButton.onclick = () => {
          S5(e);
        }),
        (t.cancelButton.onclick = () => {
          C5(e, i);
        }),
        (t.closeButton.onclick = () => {
          i(is.close);
        }),
        _5(n, t, i),
        Uj(_, n, i),
        h5(e, n),
        h3(n),
        S3(_, n, i),
        C3(t, n),
        setTimeout(() => {
          t.container.scrollTop = 0;
        }));
    }),
  j3 = (e, t) => {
    const n = s3(e),
      r = Object.assign({}, gn, t, n, e);
    return (
      (r.showClass = Object.assign({}, gn.showClass, r.showClass)),
      (r.hideClass = Object.assign({}, gn.hideClass, r.hideClass)),
      r.animation === !1 &&
        ((r.showClass = { backdrop: "swal2-noanimation" }), (r.hideClass = {})),
      r
    );
  },
  b3 = (e) => {
    const t = {
      popup: Q(),
      container: ze(),
      actions: co(),
      confirmButton: It(),
      denyButton: dr(),
      cancelButton: ss(),
      loader: os(),
      closeButton: xd(),
      validationMessage: Ma(),
      progressSteps: yd(),
    };
    return (G.domCache.set(e, t), t);
  },
  S3 = (e, t, n) => {
    const r = _a();
    (Me(r),
      t.timer &&
        ((e.timeout = new r3(() => {
          (n("timer"), delete e.timeout);
        }, t.timer)),
        t.timerProgressBar &&
          r &&
          (Ce(r),
          rt(r, t, "timerProgressBar"),
          setTimeout(() => {
            e.timeout && e.timeout.running && Cd(t.timer);
          }))));
  },
  C3 = (e, t) => {
    if (!t.toast) {
      if (!Da(t.allowEnterKey)) {
        (Cv("allowEnterKey", "preConfirm: () => false"), e.popup.focus());
        return;
      }
      P3(e) || k3(e, t) || qc(-1, 1);
    }
  },
  P3 = (e) => {
    const t = Array.from(e.popup.querySelectorAll("[autofocus]"));
    for (const n of t)
      if (n instanceof HTMLElement && Xe(n)) return (n.focus(), !0);
    return !1;
  },
  k3 = (e, t) =>
    t.focusDeny && Xe(e.denyButton)
      ? (e.denyButton.focus(), !0)
      : t.focusCancel && Xe(e.cancelButton)
        ? (e.cancelButton.focus(), !0)
        : t.focusConfirm && Xe(e.confirmButton)
          ? (e.confirmButton.focus(), !0)
          : !1;
we.prototype.disableButtons = Jv;
we.prototype.enableButtons = Qv;
we.prototype.getInput = Yv;
we.prototype.disableInput = e0;
we.prototype.enableInput = Zv;
we.prototype.hideLoading = zi;
we.prototype.disableLoading = zi;
we.prototype.showValidationMessage = t0;
we.prototype.resetValidationMessage = n0;
we.prototype.close = mn;
we.prototype.closePopup = mn;
we.prototype.closeModal = mn;
we.prototype.closeToast = mn;
we.prototype.rejectPromise = Wv;
we.prototype.update = a0;
we.prototype._destroy = l0;
Object.assign(we, n3);
Object.keys(M5).forEach((e) => {
  we[e] = function (...t) {
    if (Lt && Lt[e]) return Lt[e](...t);
  };
});
we.DismissReason = is;
we.version = "11.26.24";
const Wi = we;
Wi.default = Wi;
typeof document < "u" &&
  (function (e, t) {
    var n = e.createElement("style");
    if ((e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet))
      n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else
      try {
        n.innerHTML = t;
      } catch {
        n.innerText = t;
      }
  })(
    document,
    ':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:auto}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:auto}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}',
  );
function N3(e) {
  return B({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M255.9 456c31.1 0 48.1-22 48.1-53h-96.3c0 31 17 53 48.2 53zM412 352.2c-15.4-20.3-45.7-32.2-45.7-123.1 0-93.3-41.2-130.8-79.6-139.8-3.6-.9-6.2-2.1-6.2-5.9v-2.9c0-13.4-11-24.7-24.4-24.6-13.4-.2-24.4 11.2-24.4 24.6v2.9c0 3.7-2.6 5-6.2 5.9-38.5 9.1-79.6 46.5-79.6 139.8 0 90.9-30.3 102.7-45.7 123.1-9.9 13.1-.5 31.8 15.9 31.8h280.1c16.3 0 25.7-18.8 15.8-31.8z",
        },
      },
    ],
  })(e);
}
function E3(e) {
  return B({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z",
        },
      },
    ],
  })(e);
}
function R3(e) {
  return B({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z",
        },
      },
    ],
  })(e);
}
var T3 = function () {
    var e = document.getSelection();
    if (!e.rangeCount) return function () {};
    for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++)
      n.push(e.getRangeAt(r));
    switch (t.tagName.toUpperCase()) {
      case "INPUT":
      case "TEXTAREA":
        t.blur();
        break;
      default:
        t = null;
        break;
    }
    return (
      e.removeAllRanges(),
      function () {
        (e.type === "Caret" && e.removeAllRanges(),
          e.rangeCount ||
            n.forEach(function (s) {
              e.addRange(s);
            }),
          t && t.focus());
      }
    );
  },
  A3 = T3,
  Xh = { "text/plain": "Text", "text/html": "Url", default: "Text" },
  O3 = "Copy to clipboard: #{key}, Enter";
function L3(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t);
}
function D3(e, t) {
  var n,
    r,
    s,
    i,
    a,
    l,
    c = !1;
  (t || (t = {}), (n = t.debug || !1));
  try {
    ((s = A3()),
      (i = document.createRange()),
      (a = document.getSelection()),
      (l = document.createElement("span")),
      (l.textContent = e),
      (l.ariaHidden = "true"),
      (l.style.all = "unset"),
      (l.style.position = "fixed"),
      (l.style.top = 0),
      (l.style.clip = "rect(0, 0, 0, 0)"),
      (l.style.whiteSpace = "pre"),
      (l.style.webkitUserSelect = "text"),
      (l.style.MozUserSelect = "text"),
      (l.style.msUserSelect = "text"),
      (l.style.userSelect = "text"),
      l.addEventListener("copy", function (d) {
        if ((d.stopPropagation(), t.format))
          if ((d.preventDefault(), typeof d.clipboardData > "u")) {
            (n && console.warn("unable to use e.clipboardData"),
              n && console.warn("trying IE specific stuff"),
              window.clipboardData.clearData());
            var f = Xh[t.format] || Xh.default;
            window.clipboardData.setData(f, e);
          } else
            (d.clipboardData.clearData(), d.clipboardData.setData(t.format, e));
        t.onCopy && (d.preventDefault(), t.onCopy(d.clipboardData));
      }),
      document.body.appendChild(l),
      i.selectNodeContents(l),
      a.addRange(i));
    var u = document.execCommand("copy");
    if (!u) throw new Error("copy command was unsuccessful");
    c = !0;
  } catch (d) {
    (n && console.error("unable to copy using execCommand: ", d),
      n && console.warn("trying IE specific stuff"));
    try {
      (window.clipboardData.setData(t.format || "text", e),
        t.onCopy && t.onCopy(window.clipboardData),
        (c = !0));
    } catch (f) {
      (n && console.error("unable to copy using clipboardData: ", f),
        n && console.error("falling back to prompt"),
        (r = L3("message" in t ? t.message : O3)),
        window.prompt(r, e));
    }
  } finally {
    (a &&
      (typeof a.removeRange == "function"
        ? a.removeRange(i)
        : a.removeAllRanges()),
      l && document.body.removeChild(l),
      s());
  }
  return c;
}
var M3 = D3;
function p0(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: _3 } = Object.prototype,
  { getPrototypeOf: Ad } = Object,
  { iterator: Fa, toStringTag: m0 } = Symbol,
  $a = ((e) => (t) => {
    const n = _3.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Rt = (e) => ((e = e.toLowerCase()), (t) => $a(t) === e),
  za = (e) => (t) => typeof t === e,
  { isArray: as } = Array,
  Gr = za("undefined");
function po(e) {
  return (
    e !== null &&
    !Gr(e) &&
    e.constructor !== null &&
    !Gr(e.constructor) &&
    Ge(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const g0 = Rt("ArrayBuffer");
function B3(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && g0(e.buffer)),
    t
  );
}
const I3 = za("string"),
  Ge = za("function"),
  v0 = za("number"),
  mo = (e) => e !== null && typeof e == "object",
  F3 = (e) => e === !0 || e === !1,
  Qo = (e) => {
    if ($a(e) !== "object") return !1;
    const t = Ad(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(m0 in e) &&
      !(Fa in e)
    );
  },
  $3 = (e) => {
    if (!mo(e) || po(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  z3 = Rt("Date"),
  H3 = Rt("File"),
  U3 = (e) => !!(e && typeof e.uri < "u"),
  W3 = (e) => e && typeof e.getParts < "u",
  V3 = Rt("Blob"),
  q3 = Rt("FileList"),
  K3 = (e) => mo(e) && Ge(e.pipe);
function Y3() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof self < "u"
      ? self
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : {};
}
const Gh = Y3(),
  Qh = typeof Gh.FormData < "u" ? Gh.FormData : void 0,
  X3 = (e) => {
    let t;
    return (
      e &&
      ((Qh && e instanceof Qh) ||
        (Ge(e.append) &&
          ((t = $a(e)) === "formdata" ||
            (t === "object" &&
              Ge(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  G3 = Rt("URLSearchParams"),
  [Q3, J3, Z3, e6] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Rt,
  ),
  t6 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function go(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), as(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    if (po(e)) return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length;
    let l;
    for (r = 0; r < a; r++) ((l = i[r]), t.call(null, e[l], l, e));
  }
}
function w0(e, t) {
  if (po(e)) return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const Vn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  y0 = (e) => !Gr(e) && e !== Vn;
function Xc() {
  const { caseless: e, skipUndefined: t } = (y0(this) && this) || {},
    n = {},
    r = (s, i) => {
      if (i === "__proto__" || i === "constructor" || i === "prototype") return;
      const a = (e && w0(n, i)) || i;
      Qo(n[a]) && Qo(s)
        ? (n[a] = Xc(n[a], s))
        : Qo(s)
          ? (n[a] = Xc({}, s))
          : as(s)
            ? (n[a] = s.slice())
            : (!t || !Gr(s)) && (n[a] = s);
    };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && go(arguments[s], r);
  return n;
}
const n6 = (e, t, n, { allOwnKeys: r } = {}) => (
    go(
      t,
      (s, i) => {
        n && Ge(s)
          ? Object.defineProperty(e, i, {
              value: p0(s, n),
              writable: !0,
              enumerable: !0,
              configurable: !0,
            })
          : Object.defineProperty(e, i, {
              value: s,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      },
      { allOwnKeys: r },
    ),
    e
  ),
  r6 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  s6 = (e, t, n, r) => {
    ((e.prototype = Object.create(t.prototype, r)),
      Object.defineProperty(e.prototype, "constructor", {
        value: e,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n));
  },
  o6 = (e, t, n, r) => {
    let s, i, a;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
        ((a = s[i]),
          (!r || r(a, e, t)) && !l[a] && ((t[a] = e[a]), (l[a] = !0)));
      e = n !== !1 && Ad(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  i6 = (e, t, n) => {
    ((e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length));
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  a6 = (e) => {
    if (!e) return null;
    if (as(e)) return e;
    let t = e.length;
    if (!v0(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  l6 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Ad(Uint8Array)),
  c6 = (e, t) => {
    const r = (e && e[Fa]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const i = s.value;
      t.call(e, i[0], i[1]);
    }
  },
  u6 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  d6 = Rt("HTMLFormElement"),
  f6 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  Jh = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  h6 = Rt("RegExp"),
  x0 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    (go(n, (s, i) => {
      let a;
      (a = t(s, i, e)) !== !1 && (r[i] = a || s);
    }),
      Object.defineProperties(e, r));
  },
  p6 = (e) => {
    x0(e, (t, n) => {
      if (Ge(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ge(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  m6 = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((i) => {
          n[i] = !0;
        });
      };
    return (as(e) ? r(e) : r(String(e).split(t)), n);
  },
  g6 = () => {},
  v6 = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function w6(e) {
  return !!(e && Ge(e.append) && e[m0] === "FormData" && e[Fa]);
}
const y6 = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (mo(r)) {
          if (t.indexOf(r) >= 0) return;
          if (po(r)) return r;
          if (!("toJSON" in r)) {
            t[s] = r;
            const i = as(r) ? [] : {};
            return (
              go(r, (a, l) => {
                const c = n(a, s + 1);
                !Gr(c) && (i[l] = c);
              }),
              (t[s] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  x6 = Rt("AsyncFunction"),
  j6 = (e) => e && (mo(e) || Ge(e)) && Ge(e.then) && Ge(e.catch),
  j0 = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, r) => (
            Vn.addEventListener(
              "message",
              ({ source: s, data: i }) => {
                s === Vn && i === n && r.length && r.shift()();
              },
              !1,
            ),
            (s) => {
              (r.push(s), Vn.postMessage(n, "*"));
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Ge(Vn.postMessage),
  ),
  b6 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Vn)
      : (typeof process < "u" && process.nextTick) || j0,
  S6 = (e) => e != null && Ge(e[Fa]),
  P = {
    isArray: as,
    isArrayBuffer: g0,
    isBuffer: po,
    isFormData: X3,
    isArrayBufferView: B3,
    isString: I3,
    isNumber: v0,
    isBoolean: F3,
    isObject: mo,
    isPlainObject: Qo,
    isEmptyObject: $3,
    isReadableStream: Q3,
    isRequest: J3,
    isResponse: Z3,
    isHeaders: e6,
    isUndefined: Gr,
    isDate: z3,
    isFile: H3,
    isReactNativeBlob: U3,
    isReactNative: W3,
    isBlob: V3,
    isRegExp: h6,
    isFunction: Ge,
    isStream: K3,
    isURLSearchParams: G3,
    isTypedArray: l6,
    isFileList: q3,
    forEach: go,
    merge: Xc,
    extend: n6,
    trim: t6,
    stripBOM: r6,
    inherits: s6,
    toFlatObject: o6,
    kindOf: $a,
    kindOfTest: Rt,
    endsWith: i6,
    toArray: a6,
    forEachEntry: c6,
    matchAll: u6,
    isHTMLForm: d6,
    hasOwnProperty: Jh,
    hasOwnProp: Jh,
    reduceDescriptors: x0,
    freezeMethods: p6,
    toObjectSet: m6,
    toCamelCase: f6,
    noop: g6,
    toFiniteNumber: v6,
    findKey: w0,
    global: Vn,
    isContextDefined: y0,
    isSpecCompliantForm: w6,
    toJSONObject: y6,
    isAsyncFn: x6,
    isThenable: j6,
    setImmediate: j0,
    asap: b6,
    isIterable: S6,
  };
let F = class b0 extends Error {
  static from(t, n, r, s, i, a) {
    const l = new b0(t.message, n || t.code, r, s, i);
    return (
      (l.cause = t),
      (l.name = t.name),
      t.status != null && l.status == null && (l.status = t.status),
      a && Object.assign(l, a),
      l
    );
  }
  constructor(t, n, r, s, i) {
    (super(t),
      Object.defineProperty(this, "message", {
        value: t,
        enumerable: !0,
        writable: !0,
        configurable: !0,
      }),
      (this.name = "AxiosError"),
      (this.isAxiosError = !0),
      n && (this.code = n),
      r && (this.config = r),
      s && (this.request = s),
      i && ((this.response = i), (this.status = i.status)));
  }
  toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: P.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  }
};
F.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
F.ERR_BAD_OPTION = "ERR_BAD_OPTION";
F.ECONNABORTED = "ECONNABORTED";
F.ETIMEDOUT = "ETIMEDOUT";
F.ERR_NETWORK = "ERR_NETWORK";
F.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
F.ERR_DEPRECATED = "ERR_DEPRECATED";
F.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
F.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
F.ERR_CANCELED = "ERR_CANCELED";
F.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
F.ERR_INVALID_URL = "ERR_INVALID_URL";
const C6 = null;
function Gc(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function S0(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ll(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, i) {
          return ((s = S0(s)), !n && i ? "[" + s + "]" : s);
        })
        .join(n ? "." : "")
    : t;
}
function P6(e) {
  return P.isArray(e) && !e.some(Gc);
}
const k6 = P.toFlatObject(P, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ha(e, t, n) {
  if (!P.isObject(e)) throw new TypeError("target must be an object");
  ((t = t || new FormData()),
    (n = P.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (x, v) {
        return !P.isUndefined(v[x]);
      },
    )));
  const r = n.metaTokens,
    s = n.visitor || d,
    i = n.dots,
    a = n.indexes,
    c = (n.Blob || (typeof Blob < "u" && Blob)) && P.isSpecCompliantForm(t);
  if (!P.isFunction(s)) throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (P.isDate(g)) return g.toISOString();
    if (P.isBoolean(g)) return g.toString();
    if (!c && P.isBlob(g))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return P.isArrayBuffer(g) || P.isTypedArray(g)
      ? c && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function d(g, x, v) {
    let m = g;
    if (P.isReactNative(t) && P.isReactNativeBlob(g))
      return (t.append(Ll(v, x, i), u(g)), !1);
    if (g && !v && typeof g == "object") {
      if (P.endsWith(x, "{}"))
        ((x = r ? x : x.slice(0, -2)), (g = JSON.stringify(g)));
      else if (
        (P.isArray(g) && P6(g)) ||
        ((P.isFileList(g) || P.endsWith(x, "[]")) && (m = P.toArray(g)))
      )
        return (
          (x = S0(x)),
          m.forEach(function (w, j) {
            !(P.isUndefined(w) || w === null) &&
              t.append(
                a === !0 ? Ll([x], j, i) : a === null ? x : x + "[]",
                u(w),
              );
          }),
          !1
        );
    }
    return Gc(g) ? !0 : (t.append(Ll(v, x, i), u(g)), !1);
  }
  const f = [],
    p = Object.assign(k6, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: Gc,
    });
  function y(g, x) {
    if (!P.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      (f.push(g),
        P.forEach(g, function (m, h) {
          (!(P.isUndefined(m) || m === null) &&
            s.call(t, m, P.isString(h) ? h.trim() : h, x, p)) === !0 &&
            y(m, x ? x.concat(h) : [h]);
        }),
        f.pop());
    }
  }
  if (!P.isObject(e)) throw new TypeError("data must be an object");
  return (y(e), t);
}
function Zh(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Od(e, t) {
  ((this._pairs = []), e && Ha(e, this, t));
}
const C0 = Od.prototype;
C0.append = function (t, n) {
  this._pairs.push([t, n]);
};
C0.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Zh);
      }
    : Zh;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function N6(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function P0(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || N6,
    s = P.isFunction(n) ? { serialize: n } : n,
    i = s && s.serialize;
  let a;
  if (
    (i
      ? (a = i(t, s))
      : (a = P.isURLSearchParams(t) ? t.toString() : new Od(t, s).toString(r)),
    a)
  ) {
    const l = e.indexOf("#");
    (l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + a));
  }
  return e;
}
class ep {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    P.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Ld = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0,
  },
  E6 = typeof URLSearchParams < "u" ? URLSearchParams : Od,
  R6 = typeof FormData < "u" ? FormData : null,
  T6 = typeof Blob < "u" ? Blob : null,
  A6 = {
    isBrowser: !0,
    classes: { URLSearchParams: E6, FormData: R6, Blob: T6 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Dd = typeof window < "u" && typeof document < "u",
  Qc = (typeof navigator == "object" && navigator) || void 0,
  O6 =
    Dd &&
    (!Qc || ["ReactNative", "NativeScript", "NS"].indexOf(Qc.product) < 0),
  L6 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  D6 = (Dd && window.location.href) || "http://localhost",
  M6 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Dd,
        hasStandardBrowserEnv: O6,
        hasStandardBrowserWebWorkerEnv: L6,
        navigator: Qc,
        origin: D6,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Le = { ...M6, ...A6 };
function _6(e, t) {
  return Ha(e, new Le.classes.URLSearchParams(), {
    visitor: function (n, r, s, i) {
      return Le.isNode && P.isBuffer(n)
        ? (this.append(r, n.toString("base64")), !1)
        : i.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
function B6(e) {
  return P.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0],
  );
}
function I6(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++) ((i = n[r]), (t[i] = e[i]));
  return t;
}
function k0(e) {
  function t(n, r, s, i) {
    let a = n[i++];
    if (a === "__proto__") return !0;
    const l = Number.isFinite(+a),
      c = i >= n.length;
    return (
      (a = !a && P.isArray(s) ? s.length : a),
      c
        ? (P.hasOwnProp(s, a) ? (s[a] = [s[a], r]) : (s[a] = r), !l)
        : ((!s[a] || !P.isObject(s[a])) && (s[a] = []),
          t(n, r, s[a], i) && P.isArray(s[a]) && (s[a] = I6(s[a])),
          !l)
    );
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const n = {};
    return (
      P.forEachEntry(e, (r, s) => {
        t(B6(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function F6(e, t, n) {
  if (P.isString(e))
    try {
      return ((t || JSON.parse)(e), P.trim(e));
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const vo = {
  transitional: Ld,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        i = P.isObject(t);
      if ((i && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t)))
        return s ? JSON.stringify(k0(t)) : t;
      if (
        P.isArrayBuffer(t) ||
        P.isBuffer(t) ||
        P.isStream(t) ||
        P.isFile(t) ||
        P.isBlob(t) ||
        P.isReadableStream(t)
      )
        return t;
      if (P.isArrayBufferView(t)) return t.buffer;
      if (P.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let l;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return _6(t, this.formSerializer).toString();
        if ((l = P.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return Ha(
            l ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer,
          );
        }
      }
      return i || s ? (n.setContentType("application/json", !1), F6(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || vo.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (P.isResponse(t) || P.isReadableStream(t)) return t;
      if (t && P.isString(t) && ((r && !this.responseType) || s)) {
        const a = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (l) {
          if (a)
            throw l.name === "SyntaxError"
              ? F.from(l, F.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Le.classes.FormData, Blob: Le.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
P.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  vo.headers[e] = {};
});
const $6 = P.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  z6 = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (a) {
            ((s = a.indexOf(":")),
              (n = a.substring(0, s).trim().toLowerCase()),
              (r = a.substring(s + 1).trim()),
              !(!n || (t[n] && $6[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r)));
          }),
      t
    );
  },
  tp = Symbol("internals");
function vs(e) {
  return e && String(e).trim().toLowerCase();
}
function Jo(e) {
  return e === !1 || e == null
    ? e
    : P.isArray(e)
      ? e.map(Jo)
      : String(e).replace(/[\r\n]+$/, "");
}
function H6(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const U6 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Dl(e, t, n, r, s) {
  if (P.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!P.isString(t))) {
    if (P.isString(r)) return t.indexOf(r) !== -1;
    if (P.isRegExp(r)) return r.test(t);
  }
}
function W6(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function V6(e, t) {
  const n = P.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, i, a) {
        return this[r].call(this, t, s, i, a);
      },
      configurable: !0,
    });
  });
}
let Qe = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(l, c, u) {
      const d = vs(c);
      if (!d) throw new Error("header name must be a non-empty string");
      const f = P.findKey(s, d);
      (!f || s[f] === void 0 || u === !0 || (u === void 0 && s[f] !== !1)) &&
        (s[f || c] = Jo(l));
    }
    const a = (l, c) => P.forEach(l, (u, d) => i(u, d, c));
    if (P.isPlainObject(t) || t instanceof this.constructor) a(t, n);
    else if (P.isString(t) && (t = t.trim()) && !U6(t)) a(z6(t), n);
    else if (P.isObject(t) && P.isIterable(t)) {
      let l = {},
        c,
        u;
      for (const d of t) {
        if (!P.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        l[(u = d[0])] = (c = l[u])
          ? P.isArray(c)
            ? [...c, d[1]]
            : [c, d[1]]
          : d[1];
      }
      a(l, n);
    } else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = vs(t)), t)) {
      const r = P.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return H6(s);
        if (P.isFunction(n)) return n.call(this, s, r);
        if (P.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = vs(t)), t)) {
      const r = P.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Dl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(a) {
      if (((a = vs(a)), a)) {
        const l = P.findKey(r, a);
        l && (!n || Dl(r, r[l], l, n)) && (delete r[l], (s = !0));
      }
    }
    return (P.isArray(t) ? t.forEach(i) : i(t), s);
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Dl(this, this[i], i, t, !0)) && (delete this[i], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      P.forEach(this, (s, i) => {
        const a = P.findKey(r, i);
        if (a) {
          ((n[a] = Jo(s)), delete n[i]);
          return;
        }
        const l = t ? W6(i) : String(i).trim();
        (l !== i && delete n[i], (n[l] = Jo(s)), (r[l] = !0));
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      P.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && P.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return (n.forEach((s) => r.set(s)), r);
  }
  static accessor(t) {
    const r = (this[tp] = this[tp] = { accessors: {} }).accessors,
      s = this.prototype;
    function i(a) {
      const l = vs(a);
      r[l] || (V6(s, a), (r[l] = !0));
    }
    return (P.isArray(t) ? t.forEach(i) : i(t), this);
  }
};
Qe.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
P.reduceDescriptors(Qe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
P.freezeMethods(Qe);
function Ml(e, t) {
  const n = this || vo,
    r = t || n,
    s = Qe.from(r.headers);
  let i = r.data;
  return (
    P.forEach(e, function (l) {
      i = l.call(n, i, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    i
  );
}
function N0(e) {
  return !!(e && e.__CANCEL__);
}
let wo = class extends F {
  constructor(t, n, r) {
    (super(t ?? "canceled", F.ERR_CANCELED, n, r),
      (this.name = "CanceledError"),
      (this.__CANCEL__ = !0));
  }
};
function E0(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new F(
          "Request failed with status code " + n.status,
          [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
function q6(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function K6(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    i = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const u = Date.now(),
        d = r[i];
      (a || (a = u), (n[s] = c), (r[s] = u));
      let f = i,
        p = 0;
      for (; f !== s; ) ((p += n[f++]), (f = f % e));
      if (((s = (s + 1) % e), s === i && (i = (i + 1) % e), u - a < t)) return;
      const y = d && u - d;
      return y ? Math.round((p * 1e3) / y) : void 0;
    }
  );
}
function Y6(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    i;
  const a = (u, d = Date.now()) => {
    ((n = d), (s = null), i && (clearTimeout(i), (i = null)), e(...u));
  };
  return [
    (...u) => {
      const d = Date.now(),
        f = d - n;
      f >= r
        ? a(u, d)
        : ((s = u),
          i ||
            (i = setTimeout(() => {
              ((i = null), a(s));
            }, r - f)));
    },
    () => s && a(s),
  ];
}
const Vi = (e, t, n = 3) => {
    let r = 0;
    const s = K6(50, 250);
    return Y6((i) => {
      const a = i.loaded,
        l = i.lengthComputable ? i.total : void 0,
        c = a - r,
        u = s(c),
        d = a <= l;
      r = a;
      const f = {
        loaded: a,
        total: l,
        progress: l ? a / l : void 0,
        bytes: c,
        rate: u || void 0,
        estimated: u && l && d ? (l - a) / u : void 0,
        event: i,
        lengthComputable: l != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  np = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  rp =
    (e) =>
    (...t) =>
      P.asap(() => e(...t)),
  X6 = Le.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, Le.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(Le.origin),
        Le.navigator && /(msie|trident)/i.test(Le.navigator.userAgent),
      )
    : () => !0,
  G6 = Le.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, i, a) {
          if (typeof document > "u") return;
          const l = [`${e}=${encodeURIComponent(t)}`];
          (P.isNumber(n) && l.push(`expires=${new Date(n).toUTCString()}`),
            P.isString(r) && l.push(`path=${r}`),
            P.isString(s) && l.push(`domain=${s}`),
            i === !0 && l.push("secure"),
            P.isString(a) && l.push(`SameSite=${a}`),
            (document.cookie = l.join("; ")));
        },
        read(e) {
          if (typeof document > "u") return null;
          const t = document.cookie.match(
            new RegExp("(?:^|; )" + e + "=([^;]*)"),
          );
          return t ? decodeURIComponent(t[1]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5, "/");
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Q6(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function J6(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function R0(e, t, n) {
  let r = !Q6(t);
  return e && (r || n == !1) ? J6(e, t) : t;
}
const sp = (e) => (e instanceof Qe ? { ...e } : e);
function sr(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, f, p) {
    return P.isPlainObject(u) && P.isPlainObject(d)
      ? P.merge.call({ caseless: p }, u, d)
      : P.isPlainObject(d)
        ? P.merge({}, d)
        : P.isArray(d)
          ? d.slice()
          : d;
  }
  function s(u, d, f, p) {
    if (P.isUndefined(d)) {
      if (!P.isUndefined(u)) return r(void 0, u, f, p);
    } else return r(u, d, f, p);
  }
  function i(u, d) {
    if (!P.isUndefined(d)) return r(void 0, d);
  }
  function a(u, d) {
    if (P.isUndefined(d)) {
      if (!P.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, d);
  }
  function l(u, d, f) {
    if (f in t) return r(u, d);
    if (f in e) return r(void 0, u);
  }
  const c = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (u, d, f) => s(sp(u), sp(d), f, !0),
  };
  return (
    P.forEach(Object.keys({ ...e, ...t }), function (d) {
      if (d === "__proto__" || d === "constructor" || d === "prototype") return;
      const f = P.hasOwnProp(c, d) ? c[d] : s,
        p = f(e[d], t[d], d);
      (P.isUndefined(p) && f !== l) || (n[d] = p);
    }),
    n
  );
}
const T0 = (e) => {
    const t = sr({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: i,
      headers: a,
      auth: l,
    } = t;
    if (
      ((t.headers = a = Qe.from(a)),
      (t.url = P0(
        R0(t.baseURL, t.url, t.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer,
      )),
      l &&
        a.set(
          "Authorization",
          "Basic " +
            btoa(
              (l.username || "") +
                ":" +
                (l.password ? unescape(encodeURIComponent(l.password)) : ""),
            ),
        ),
      P.isFormData(n))
    ) {
      if (Le.hasStandardBrowserEnv || Le.hasStandardBrowserWebWorkerEnv)
        a.setContentType(void 0);
      else if (P.isFunction(n.getHeaders)) {
        const c = n.getHeaders(),
          u = ["content-type", "content-length"];
        Object.entries(c).forEach(([d, f]) => {
          u.includes(d.toLowerCase()) && a.set(d, f);
        });
      }
    }
    if (
      Le.hasStandardBrowserEnv &&
      (r && P.isFunction(r) && (r = r(t)), r || (r !== !1 && X6(t.url)))
    ) {
      const c = s && i && G6.read(i);
      c && a.set(s, c);
    }
    return t;
  },
  Z6 = typeof XMLHttpRequest < "u",
  eb =
    Z6 &&
    function (e) {
      return new Promise(function (n, r) {
        const s = T0(e);
        let i = s.data;
        const a = Qe.from(s.headers).normalize();
        let { responseType: l, onUploadProgress: c, onDownloadProgress: u } = s,
          d,
          f,
          p,
          y,
          g;
        function x() {
          (y && y(),
            g && g(),
            s.cancelToken && s.cancelToken.unsubscribe(d),
            s.signal && s.signal.removeEventListener("abort", d));
        }
        let v = new XMLHttpRequest();
        (v.open(s.method.toUpperCase(), s.url, !0), (v.timeout = s.timeout));
        function m() {
          if (!v) return;
          const w = Qe.from(
              "getAllResponseHeaders" in v && v.getAllResponseHeaders(),
            ),
            S = {
              data:
                !l || l === "text" || l === "json"
                  ? v.responseText
                  : v.response,
              status: v.status,
              statusText: v.statusText,
              headers: w,
              config: e,
              request: v,
            };
          (E0(
            function (E) {
              (n(E), x());
            },
            function (E) {
              (r(E), x());
            },
            S,
          ),
            (v = null));
        }
        ("onloadend" in v
          ? (v.onloadend = m)
          : (v.onreadystatechange = function () {
              !v ||
                v.readyState !== 4 ||
                (v.status === 0 &&
                  !(v.responseURL && v.responseURL.indexOf("file:") === 0)) ||
                setTimeout(m);
            }),
          (v.onabort = function () {
            v &&
              (r(new F("Request aborted", F.ECONNABORTED, e, v)), (v = null));
          }),
          (v.onerror = function (j) {
            const S = j && j.message ? j.message : "Network Error",
              C = new F(S, F.ERR_NETWORK, e, v);
            ((C.event = j || null), r(C), (v = null));
          }),
          (v.ontimeout = function () {
            let j = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const S = s.transitional || Ld;
            (s.timeoutErrorMessage && (j = s.timeoutErrorMessage),
              r(
                new F(
                  j,
                  S.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
                  e,
                  v,
                ),
              ),
              (v = null));
          }),
          i === void 0 && a.setContentType(null),
          "setRequestHeader" in v &&
            P.forEach(a.toJSON(), function (j, S) {
              v.setRequestHeader(S, j);
            }),
          P.isUndefined(s.withCredentials) ||
            (v.withCredentials = !!s.withCredentials),
          l && l !== "json" && (v.responseType = s.responseType),
          u && (([p, g] = Vi(u, !0)), v.addEventListener("progress", p)),
          c &&
            v.upload &&
            (([f, y] = Vi(c)),
            v.upload.addEventListener("progress", f),
            v.upload.addEventListener("loadend", y)),
          (s.cancelToken || s.signal) &&
            ((d = (w) => {
              v &&
                (r(!w || w.type ? new wo(null, e, v) : w),
                v.abort(),
                (v = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(d),
            s.signal &&
              (s.signal.aborted
                ? d()
                : s.signal.addEventListener("abort", d))));
        const h = q6(s.url);
        if (h && Le.protocols.indexOf(h) === -1) {
          r(new F("Unsupported protocol " + h + ":", F.ERR_BAD_REQUEST, e));
          return;
        }
        v.send(i || null);
      });
    },
  tb = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const i = function (u) {
        if (!s) {
          ((s = !0), l());
          const d = u instanceof Error ? u : this.reason;
          r.abort(
            d instanceof F ? d : new wo(d instanceof Error ? d.message : d),
          );
        }
      };
      let a =
        t &&
        setTimeout(() => {
          ((a = null), i(new F(`timeout of ${t}ms exceeded`, F.ETIMEDOUT)));
        }, t);
      const l = () => {
        e &&
          (a && clearTimeout(a),
          (a = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(i)
              : u.removeEventListener("abort", i);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", i));
      const { signal: c } = r;
      return ((c.unsubscribe = () => P.asap(l)), c);
    }
  },
  nb = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) ((s = r + t), yield e.slice(r, s), (r = s));
  },
  rb = async function* (e, t) {
    for await (const n of sb(e)) yield* nb(n, t);
  },
  sb = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  op = (e, t, n, r) => {
    const s = rb(e, t);
    let i = 0,
      a,
      l = (c) => {
        a || ((a = !0), r && r(c));
      };
    return new ReadableStream(
      {
        async pull(c) {
          try {
            const { done: u, value: d } = await s.next();
            if (u) {
              (l(), c.close());
              return;
            }
            let f = d.byteLength;
            if (n) {
              let p = (i += f);
              n(p);
            }
            c.enqueue(new Uint8Array(d));
          } catch (u) {
            throw (l(u), u);
          }
        },
        cancel(c) {
          return (l(c), s.return());
        },
      },
      { highWaterMark: 2 },
    );
  },
  ip = 64 * 1024,
  { isFunction: Bo } = P,
  ob = (({ Request: e, Response: t }) => ({ Request: e, Response: t }))(
    P.global,
  ),
  { ReadableStream: ap, TextEncoder: lp } = P.global,
  cp = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  ib = (e) => {
    e = P.merge.call({ skipUndefined: !0 }, ob, e);
    const { fetch: t, Request: n, Response: r } = e,
      s = t ? Bo(t) : typeof fetch == "function",
      i = Bo(n),
      a = Bo(r);
    if (!s) return !1;
    const l = s && Bo(ap),
      c =
        s &&
        (typeof lp == "function"
          ? (
              (g) => (x) =>
                g.encode(x)
            )(new lp())
          : async (g) => new Uint8Array(await new n(g).arrayBuffer())),
      u =
        i &&
        l &&
        cp(() => {
          let g = !1;
          const x = new ap(),
            v = new n(Le.origin, {
              body: x,
              method: "POST",
              get duplex() {
                return ((g = !0), "half");
              },
            }).headers.has("Content-Type");
          return (x.cancel(), g && !v);
        }),
      d = a && l && cp(() => P.isReadableStream(new r("").body)),
      f = { stream: d && ((g) => g.body) };
    s &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((g) => {
        !f[g] &&
          (f[g] = (x, v) => {
            let m = x && x[g];
            if (m) return m.call(x);
            throw new F(
              `Response type '${g}' is not supported`,
              F.ERR_NOT_SUPPORT,
              v,
            );
          });
      });
    const p = async (g) => {
        if (g == null) return 0;
        if (P.isBlob(g)) return g.size;
        if (P.isSpecCompliantForm(g))
          return (
            await new n(Le.origin, { method: "POST", body: g }).arrayBuffer()
          ).byteLength;
        if (P.isArrayBufferView(g) || P.isArrayBuffer(g)) return g.byteLength;
        if ((P.isURLSearchParams(g) && (g = g + ""), P.isString(g)))
          return (await c(g)).byteLength;
      },
      y = async (g, x) => {
        const v = P.toFiniteNumber(g.getContentLength());
        return v ?? p(x);
      };
    return async (g) => {
      let {
          url: x,
          method: v,
          data: m,
          signal: h,
          cancelToken: w,
          timeout: j,
          onDownloadProgress: S,
          onUploadProgress: C,
          responseType: E,
          headers: R,
          withCredentials: L = "same-origin",
          fetchOptions: N,
        } = T0(g),
        $ = t || fetch;
      E = E ? (E + "").toLowerCase() : "text";
      let O = tb([h, w && w.toAbortSignal()], j),
        M = null;
      const z =
        O &&
        O.unsubscribe &&
        (() => {
          O.unsubscribe();
        });
      let re;
      try {
        if (
          C &&
          u &&
          v !== "get" &&
          v !== "head" &&
          (re = await y(R, m)) !== 0
        ) {
          let q = new n(x, { method: "POST", body: m, duplex: "half" }),
            te;
          if (
            (P.isFormData(m) &&
              (te = q.headers.get("content-type")) &&
              R.setContentType(te),
            q.body)
          ) {
            const [Tt, He] = np(re, Vi(rp(C)));
            m = op(q.body, ip, Tt, He);
          }
        }
        P.isString(L) || (L = L ? "include" : "omit");
        const ce = i && "credentials" in n.prototype,
          wt = {
            ...N,
            signal: O,
            method: v.toUpperCase(),
            headers: R.normalize().toJSON(),
            body: m,
            duplex: "half",
            credentials: ce ? L : void 0,
          };
        M = i && new n(x, wt);
        let A = await (i ? $(M, N) : $(x, wt));
        const I = d && (E === "stream" || E === "response");
        if (d && (S || (I && z))) {
          const q = {};
          ["status", "statusText", "headers"].forEach((rn) => {
            q[rn] = A[rn];
          });
          const te = P.toFiniteNumber(A.headers.get("content-length")),
            [Tt, He] = (S && np(te, Vi(rp(S), !0))) || [];
          A = new r(
            op(A.body, ip, Tt, () => {
              (He && He(), z && z());
            }),
            q,
          );
        }
        E = E || "text";
        let H = await f[P.findKey(f, E) || "text"](A, g);
        return (
          !I && z && z(),
          await new Promise((q, te) => {
            E0(q, te, {
              data: H,
              headers: Qe.from(A.headers),
              status: A.status,
              statusText: A.statusText,
              config: g,
              request: M,
            });
          })
        );
      } catch (ce) {
        throw (
          z && z(),
          ce && ce.name === "TypeError" && /Load failed|fetch/i.test(ce.message)
            ? Object.assign(
                new F("Network Error", F.ERR_NETWORK, g, M, ce && ce.response),
                { cause: ce.cause || ce },
              )
            : F.from(ce, ce && ce.code, g, M, ce && ce.response)
        );
      }
    };
  },
  ab = new Map(),
  A0 = (e) => {
    let t = (e && e.env) || {};
    const { fetch: n, Request: r, Response: s } = t,
      i = [r, s, n];
    let a = i.length,
      l = a,
      c,
      u,
      d = ab;
    for (; l--; )
      ((c = i[l]),
        (u = d.get(c)),
        u === void 0 && d.set(c, (u = l ? new Map() : ib(t))),
        (d = u));
    return u;
  };
A0();
const Md = { http: C6, xhr: eb, fetch: { get: A0 } };
P.forEach(Md, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const up = (e) => `- ${e}`,
  lb = (e) => P.isFunction(e) || e === null || e === !1;
function cb(e, t) {
  e = P.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const i = {};
  for (let a = 0; a < n; a++) {
    r = e[a];
    let l;
    if (
      ((s = r),
      !lb(r) && ((s = Md[(l = String(r)).toLowerCase()]), s === void 0))
    )
      throw new F(`Unknown adapter '${l}'`);
    if (s && (P.isFunction(s) || (s = s.get(t)))) break;
    i[l || "#" + a] = s;
  }
  if (!s) {
    const a = Object.entries(i).map(
      ([c, u]) =>
        `adapter ${c} ` +
        (u === !1
          ? "is not supported by the environment"
          : "is not available in the build"),
    );
    let l = n
      ? a.length > 1
        ? `since :
` +
          a.map(up).join(`
`)
        : " " + up(a[0])
      : "as no adapter specified";
    throw new F(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT",
    );
  }
  return s;
}
const O0 = { getAdapter: cb, adapters: Md };
function _l(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new wo(null, e);
}
function dp(e) {
  return (
    _l(e),
    (e.headers = Qe.from(e.headers)),
    (e.data = Ml.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    O0.getAdapter(
      e.adapter || vo.adapter,
      e,
    )(e).then(
      function (r) {
        return (
          _l(e),
          (r.data = Ml.call(e, e.transformResponse, r)),
          (r.headers = Qe.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          N0(r) ||
            (_l(e),
            r &&
              r.response &&
              ((r.response.data = Ml.call(e, e.transformResponse, r.response)),
              (r.response.headers = Qe.from(r.response.headers)))),
          Promise.reject(r)
        );
      },
    )
  );
}
const L0 = "1.14.0",
  Ua = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ua[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const fp = {};
Ua.transitional = function (t, n, r) {
  function s(i, a) {
    return (
      "[Axios v" +
      L0 +
      "] Transitional option '" +
      i +
      "'" +
      a +
      (r ? ". " + r : "")
    );
  }
  return (i, a, l) => {
    if (t === !1)
      throw new F(
        s(a, " has been removed" + (n ? " in " + n : "")),
        F.ERR_DEPRECATED,
      );
    return (
      n &&
        !fp[a] &&
        ((fp[a] = !0),
        console.warn(
          s(
            a,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(i, a, l) : !0
    );
  };
};
Ua.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function ub(e, t, n) {
  if (typeof e != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s],
      a = t[i];
    if (a) {
      const l = e[i],
        c = l === void 0 || a(l, i, e);
      if (c !== !0)
        throw new F("option " + i + " must be " + c, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new F("Unknown option " + i, F.ERR_BAD_OPTION);
  }
}
const Zo = { assertOptions: ub, validators: Ua },
  ct = Zo.validators;
let Gn = class {
  constructor(t) {
    ((this.defaults = t || {}),
      (this.interceptors = { request: new ep(), response: new ep() }));
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    (typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = sr(this.defaults, n)));
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    (r !== void 0 &&
      Zo.assertOptions(
        r,
        {
          silentJSONParsing: ct.transitional(ct.boolean),
          forcedJSONParsing: ct.transitional(ct.boolean),
          clarifyTimeoutError: ct.transitional(ct.boolean),
          legacyInterceptorReqResOrdering: ct.transitional(ct.boolean),
        },
        !1,
      ),
      s != null &&
        (P.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : Zo.assertOptions(
              s,
              { encode: ct.function, serialize: ct.function },
              !0,
            )),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      Zo.assertOptions(
        n,
        {
          baseUrl: ct.spelling("baseURL"),
          withXsrfToken: ct.spelling("withXSRFToken"),
        },
        !0,
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase()));
    let a = i && P.merge(i.common, i[n.method]);
    (i &&
      P.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete i[g];
        },
      ),
      (n.headers = Qe.concat(a, i)));
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function (x) {
      if (typeof x.runWhen == "function" && x.runWhen(n) === !1) return;
      c = c && x.synchronous;
      const v = n.transitional || Ld;
      v && v.legacyInterceptorReqResOrdering
        ? l.unshift(x.fulfilled, x.rejected)
        : l.push(x.fulfilled, x.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function (x) {
      u.push(x.fulfilled, x.rejected);
    });
    let d,
      f = 0,
      p;
    if (!c) {
      const g = [dp.bind(this), void 0];
      for (
        g.unshift(...l), g.push(...u), p = g.length, d = Promise.resolve(n);
        f < p;
      )
        d = d.then(g[f++], g[f++]);
      return d;
    }
    p = l.length;
    let y = n;
    for (; f < p; ) {
      const g = l[f++],
        x = l[f++];
      try {
        y = g(y);
      } catch (v) {
        x.call(this, v);
        break;
      }
    }
    try {
      d = dp.call(this, y);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, p = u.length; f < p; ) d = d.then(u[f++], u[f++]);
    return d;
  }
  getUri(t) {
    t = sr(this.defaults, t);
    const n = R0(t.baseURL, t.url, t.allowAbsoluteUrls);
    return P0(n, t.params, t.paramsSerializer);
  }
};
P.forEach(["delete", "get", "head", "options"], function (t) {
  Gn.prototype[t] = function (n, r) {
    return this.request(
      sr(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
P.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, a, l) {
      return this.request(
        sr(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: a,
        }),
      );
    };
  }
  ((Gn.prototype[t] = n()), (Gn.prototype[t + "Form"] = n(!0)));
});
let db = class D0 {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    (this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let i;
        const a = new Promise((l) => {
          (r.subscribe(l), (i = l));
        }).then(s);
        return (
          (a.cancel = function () {
            r.unsubscribe(i);
          }),
          a
        );
      }),
      t(function (i, a, l) {
        r.reason || ((r.reason = new wo(i, a, l)), n(r.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new D0(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
};
function fb(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function hb(e) {
  return P.isObject(e) && e.isAxiosError === !0;
}
const Jc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(Jc).forEach(([e, t]) => {
  Jc[t] = e;
});
function M0(e) {
  const t = new Gn(e),
    n = p0(Gn.prototype.request, t);
  return (
    P.extend(n, Gn.prototype, t, { allOwnKeys: !0 }),
    P.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return M0(sr(e, s));
    }),
    n
  );
}
const W = M0(vo);
W.Axios = Gn;
W.CanceledError = wo;
W.CancelToken = db;
W.isCancel = N0;
W.VERSION = L0;
W.toFormData = Ha;
W.AxiosError = F;
W.Cancel = W.CanceledError;
W.all = function (t) {
  return Promise.all(t);
};
W.spread = fb;
W.isAxiosError = hb;
W.mergeConfig = sr;
W.AxiosHeaders = Qe;
W.formToJSON = (e) => k0(P.isHTMLForm(e) ? new FormData(e) : e);
W.getAdapter = O0.getAdapter;
W.HttpStatusCode = Jc;
W.default = W;
const {
    Axios: YS,
    AxiosError: XS,
    CanceledError: GS,
    isCancel: QS,
    CancelToken: JS,
    VERSION: ZS,
    all: eC,
    Cancel: tC,
    isAxiosError: nC,
    spread: rC,
    toFormData: sC,
    AxiosHeaders: oC,
    HttpStatusCode: iC,
    formToJSON: aC,
    getAdapter: lC,
    mergeConfig: cC,
  } = W,
  pb = () => {
    const e = cr(),
      t = Ye((O) => O.persisitedReducer.user),
      n = (t == null ? void 0 : t._id) || "",
      r = new Date().getFullYear(),
      [s, i] = b.useState({}),
      [a, l] = b.useState(!1),
      [c, u] = b.useState(!1),
      d = async () => {
        l(!0);
        try {
          const M = await (
              await fetch(
                `https://mynewbrokerezebackend.onrender.com/api/users/userdata/${n}`,
              )
            ).json(),
            z = (M == null ? void 0 : M.data) || M;
          (i(z),
            e(pd(z)),
            localStorage.setItem(
              "UserId",
              (z == null ? void 0 : z._id) || (z == null ? void 0 : z.id) || "",
            ));
        } catch {
        } finally {
          l(!1);
        }
      };
    b.useEffect(() => {
      n && (d(), C());
    }, [n]);
    const [f, p] = b.useState(!1),
      y = b.useRef(null),
      g = () => {
        p(!f);
      },
      x = (O) => {
        y.current && !y.current.contains(O.target) && p(!1);
      };
    b.useEffect(
      () => (
        document.addEventListener("click", x),
        () => {
          document.removeEventListener("click", x);
        }
      ),
      [],
    );
    const [v, m] = b.useState(!1),
      h = () => {
        m(!v);
      },
      w = () => {
        (localStorage.removeItem("UserId"),
          (window.location.href = "/#/login"));
      },
      [j, S] = b.useState([]),
      C = async () => {
        u(!0);
        try {
          const M = await (
            await fetch(
              "https://mynewbrokerezebackend.onrender.com/api/plans/getallplan",
            )
          ).json();
          (S((M == null ? void 0 : M.data) || []),
            console.log("gggg", M == null ? void 0 : M.data));
        } catch (O) {
          console.log(O);
        } finally {
          u(!1);
        }
      },
      E = () => {
        Wi.fire("Contact us on live support");
      },
      [R, L] = b.useState(!1),
      N = () => {
        L((O) => !O);
      },
      $ = () => {
        (L(!1), m(!1), (window.location.href = "/#/dashboard/trading-plans"));
      };
    return o.jsxs(o.Fragment, {
      children: [
        o.jsx(M4, {}),
        o.jsx("div", {
          className: "DashboardBody bigScreen",
          children: o.jsxs("div", {
            className: `DashboardWrapper ${v ? "active" : " "}`,
            children: [
              o.jsx("div", {
                className: `DashboardNav ${v ? "active" : ""}`,
                children: o.jsxs("div", {
                  className: "DashboardNavWrapper ",
                  children: [
                    o.jsxs("div", {
                      className: "DashboardNavLogo",
                      children: [
                        o.jsx("img", { src: ts, alt: "" }),
                        o.jsx(Jy, {
                          className: "DashboardNavLogoMenuFill",
                          onClick: h,
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "DashboardNavAccountView",
                      children: [
                        o.jsx("div", {
                          className: "DashboardNavAccountViewPfp",
                          children: o.jsx(xh, { className: "HiMiniUser" }),
                        }),
                        o.jsxs("div", {
                          className: "DashboardNavAccountViewInitials",
                          children: [
                            o.jsx("h2", {
                              children: s == null ? void 0 : s.fullName,
                            }),
                            o.jsx("p", { children: "online" }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "DashboardNavAccountViewBalance",
                          children: [
                            o.jsx(Gy, {}),
                            " ",
                            o.jsxs("span", {
                              children: [
                                "$ ",
                                s == null ? void 0 : s.accountBalance,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "DashboardNavLinks",
                      children: [
                        o.jsxs("div", {
                          className: "DashboardNavLinksRow1",
                          children: [
                            o.jsxs(xt, {
                              to: "/dashboard",
                              className: "DashboardNavLinksItem",
                              end: !0,
                              children: [
                                o.jsx("span", {
                                  children: o.jsx(Ry, {
                                    className: "DashboardNavlinksIcons",
                                  }),
                                }),
                                o.jsx("span", { children: "Home" }),
                              ],
                            }),
                            o.jsxs(xt, {
                              to: "/dashboard/deposit",
                              className: "DashboardNavLinksItem",
                              children: [
                                o.jsx("span", {
                                  children: o.jsx(Ty, {
                                    className: "DashboardNavlinksIcons",
                                  }),
                                }),
                                o.jsx("span", { children: "Deposit" }),
                              ],
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "DashboardNavLinksRow2",
                          children: [
                            o.jsxs(xt, {
                              to: "/dashboard/withdraw",
                              className: "DashboardNavLinksItem",
                              children: [
                                o.jsx("span", {
                                  children: o.jsx(Mc, {
                                    className: "DashboardNavlinksIcons",
                                  }),
                                }),
                                o.jsx("span", { children: "Withdrawal" }),
                              ],
                            }),
                            o.jsxs(xt, {
                              to: "/dashboard/profit-history",
                              className: "DashboardNavLinksItem",
                              children: [
                                o.jsx("span", {
                                  children: o.jsx(By, {
                                    className: "DashboardNavlinksIcons",
                                  }),
                                }),
                                o.jsx("span", { children: "Profit History" }),
                              ],
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "DashboardNavLinksRow3",
                          children: [
                            o.jsxs(xt, {
                              to: "/dashboard/transactions",
                              className: "DashboardNavLinksItem",
                              children: [
                                o.jsx("span", {
                                  children: o.jsx(Vy, {
                                    className: "DashboardNavlinksIcons",
                                  }),
                                }),
                                o.jsx("span", { children: "Transactions" }),
                              ],
                            }),
                            o.jsxs(xt, {
                              to: "/dashboard/transfer-funds",
                              className: "DashboardNavLinksItem",
                              children: [
                                o.jsx("span", {
                                  children: o.jsx(qy, {
                                    className: "DashboardNavlinksIcons",
                                  }),
                                }),
                                o.jsx("span", { children: "Transfer Funds" }),
                              ],
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "DashboardNavLinksRow4",
                          children: [
                            o.jsxs(xt, {
                              to: "/dashboard/profile",
                              className: "DashboardNavLinksItem",
                              children: [
                                o.jsx("span", {
                                  children: o.jsx(Oy, {
                                    className: "DashboardNavlinksIcons",
                                  }),
                                }),
                                o.jsx("span", { children: "Profile" }),
                              ],
                            }),
                            o.jsxs(xt, {
                              to: "/dashboard/trading-plans",
                              className: "DashboardNavLinksItem",
                              children: [
                                o.jsx("span", {
                                  children: o.jsx(Ic, {
                                    className: "DashboardNavlinksIcons",
                                  }),
                                }),
                                o.jsx("span", { children: "Trading Plans" }),
                              ],
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "DashboardNavLinksRow5",
                          children: [
                            o.jsxs(xt, {
                              to: "/dashboard/my-plans",
                              className: "DashboardNavLinksItem",
                              children: [
                                o.jsx("span", {
                                  children: o.jsx(yh, {
                                    className: "DashboardNavlinksIcons",
                                  }),
                                }),
                                o.jsx("span", { children: "My Plans" }),
                              ],
                            }),
                            o.jsxs(xt, {
                              to: "/dashboard/referrals",
                              className: "DashboardNavLinksItem",
                              children: [
                                o.jsx("span", {
                                  children: o.jsx(Ay, {
                                    className: "DashboardNavlinksIcons",
                                  }),
                                }),
                                o.jsx("span", { children: "Referrals" }),
                              ],
                            }),
                          ],
                        }),
                        s != null && s.isAdmin
                          ? o.jsx("div", {
                              className: "DashboardNavLinksRow5",
                              children: o.jsxs(xt, {
                                to: "/dashboard/admin",
                                className: "DashboardNavLinksItem",
                                children: [
                                  o.jsx("span", {
                                    children: o.jsx(yh, {
                                      className: "DashboardNavlinksIcons",
                                    }),
                                  }),
                                  o.jsx("span", { children: "Admin" }),
                                ],
                              }),
                            })
                          : null,
                      ],
                    }),
                    o.jsxs("div", {
                      className: "DashboardNavContact",
                      children: [
                        o.jsxs("div", {
                          className: "DashboardNavContactText",
                          children: [
                            o.jsx("h3", { children: "Need Help!" }),
                            o.jsx("p", {
                              children:
                                "Contact our 24/7 customer support center",
                            }),
                          ],
                        }),
                        o.jsx("div", {
                          className: "DashboardNavContactBtn",
                          children: o.jsx("button", {
                            onClick: E,
                            children: "Contact us",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              o.jsxs("div", {
                className: `DashboardMain ${v ? "active" : ""}`,
                children: [
                  o.jsxs("div", {
                    className: "DashboardMainHeader",
                    children: [
                      o.jsxs("div", {
                        className: "DashboardMainHeaderBox",
                        children: [
                          o.jsxs("div", {
                            className: "DashboardMainHeaderBoxHambuger",
                            children: [
                              o.jsxs("div", {
                                className: "notification-icon-wrapper",
                                onClick: N,
                                children: [
                                  o.jsx(N3, {
                                    style: {
                                      fontSize: "20px",
                                      cursor: "pointer",
                                    },
                                  }),
                                  (s == null ? void 0 : s.notification) &&
                                    o.jsx("span", { className: "red-dot" }),
                                ],
                              }),
                              o.jsxs("div", {
                                className: `notificationBar ${R ? "show" : ""}`,
                                children: [
                                  o.jsxs("div", {
                                    className: "notification_header",
                                    children: [
                                      o.jsx("h4", {
                                        children: "Your Notifications",
                                      }),
                                      o.jsx(Yy, {
                                        className: "cancel_icon",
                                        onClick: () => L(!1),
                                      }),
                                    ],
                                  }),
                                  o.jsx("div", {
                                    className: "notification_status",
                                    children: o.jsxs("div", {
                                      className: "status_holder",
                                      children: [
                                        o.jsx("div", {
                                          className: "n_status_card",
                                          children: o.jsx("h4", {
                                            children: "All",
                                          }),
                                        }),
                                        o.jsx("div", {
                                          className: "n_status_card",
                                          children: o.jsx("h4", {
                                            children: "Unread",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  o.jsx("div", {
                                    className: "notification_body",
                                    children:
                                      s != null && s.notification
                                        ? j == null
                                          ? void 0
                                          : j
                                              .filter(
                                                (O) =>
                                                  O.planName !==
                                                  O.planName.toUpperCase(),
                                              )
                                              .map((O, M) =>
                                                o.jsxs(
                                                  "div",
                                                  {
                                                    className:
                                                      "notification_card",
                                                    onClick: () => {
                                                      $();
                                                    },
                                                    children: [
                                                      o.jsx("h4", {
                                                        children:
                                                          O == null
                                                            ? void 0
                                                            : O.planName,
                                                      }),
                                                      o.jsxs("p", {
                                                        children: [
                                                          "ROI - ",
                                                          O == null
                                                            ? void 0
                                                            : O.rio,
                                                          "%",
                                                        ],
                                                      }),
                                                      o.jsxs("p", {
                                                        children: [
                                                          "Duration - ",
                                                          O == null
                                                            ? void 0
                                                            : O.durationDays,
                                                          " Days",
                                                        ],
                                                      }),
                                                      o.jsxs("p", {
                                                        children: [
                                                          "Minimum Deposit ",
                                                          O == null
                                                            ? void 0
                                                            : O.minimumDeposit,
                                                        ],
                                                      }),
                                                      o.jsxs("p", {
                                                        children: [
                                                          "Maximum Deposit ",
                                                          O == null
                                                            ? void 0
                                                            : O.maximumDeposit,
                                                        ],
                                                      }),
                                                      o.jsx("div", {
                                                        className:
                                                          "investment_btn_div",
                                                        children: o.jsx(
                                                          "button",
                                                          {
                                                            className:
                                                              "investment_btn",
                                                            children:
                                                              "Invest Now",
                                                          },
                                                        ),
                                                      }),
                                                    ],
                                                  },
                                                  M,
                                                ),
                                              )
                                        : o.jsx("div", {
                                            className: "no_notification",
                                            children: o.jsx("h4", {
                                              children: "No Notifications",
                                            }),
                                          }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o.jsx("div", {
                            className: "DashboardMainHeaderBoxHambuger",
                            children: o.jsx(Xy, {
                              className: "MdOutlineMenu",
                              onClick: h,
                            }),
                          }),
                          o.jsxs("div", {
                            className: "DashboardMainHeaderBoxAccount",
                            onClick: g,
                            ref: y,
                            children: [
                              o.jsx("div", {
                                children: o.jsx(xh, {
                                  className: "HiMiniUser",
                                }),
                              }),
                              o.jsx("p", {
                                children: s == null ? void 0 : s.fullName,
                              }),
                            ],
                          }),
                        ],
                      }),
                      f
                        ? o.jsx(o.Fragment, {
                            children: o.jsx("div", {
                              className: "DashboardMainHeaderUserAccDiv",
                              children: o.jsxs("div", {
                                className: "DashboardMainHeaderUserAccDivWrap",
                                children: [
                                  o.jsxs("p", {
                                    children: [
                                      "Hi ",
                                      s == null ? void 0 : s.fullName,
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    className:
                                      "DashboardMainHeaderUserAccDivPfp",
                                    onClick: handleShowProfile,
                                    children: [
                                      o.jsx("span", {
                                        children: o.jsx(Hy, {}),
                                      }),
                                      "My profile",
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    className:
                                      "DashboardMainHeaderUserAccDivLogout",
                                    onClick: w,
                                    children: [
                                      o.jsx("span", {
                                        children: o.jsx(Qy, {}),
                                      }),
                                      "Logout",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          })
                        : null,
                    ],
                  }),
                  o.jsx("div", {
                    className: "DashboardMainContent",
                    children:
                      a || c
                        ? o.jsxs("div", {
                            className: "DashboardSkeleton",
                            children: [
                              o.jsx("div", {
                                className: "DashboardSkeletonHeader pulse",
                              }),
                              o.jsxs("div", {
                                className: "DashboardSkeletonTop",
                                children: [
                                  o.jsx("div", {
                                    className: "DashboardSkeletonCard pulse",
                                  }),
                                  o.jsx("div", {
                                    className: "DashboardSkeletonCard pulse",
                                  }),
                                  o.jsx("div", {
                                    className: "DashboardSkeletonCard pulse",
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                className: "DashboardSkeletonSection",
                                children: [
                                  o.jsx("div", {
                                    className: "DashboardSkeletonLine pulse",
                                  }),
                                  o.jsxs("div", {
                                    className: "DashboardSkeletonGrid",
                                    children: [
                                      o.jsx("div", {
                                        className:
                                          "DashboardSkeletonCard pulse",
                                      }),
                                      o.jsx("div", {
                                        className:
                                          "DashboardSkeletonCard pulse",
                                      }),
                                      o.jsx("div", {
                                        className:
                                          "DashboardSkeletonCard pulse",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          })
                        : o.jsx(dy, {}),
                  }),
                  o.jsx("div", {
                    className: "DashboardMainFooter",
                    children: o.jsxs("p", {
                      children: [
                        "All Rights Reserved © Asset Development Investment Solutions",
                        " ",
                        r,
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
function zt(e) {
  return B({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z",
        },
      },
    ],
  })(e);
}
function mb(e) {
  return B({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M23.59 3.475a5.1 5.1 0 00-3.05-3.05c-1.31-.42-2.5-.42-4.92-.42H8.36c-2.4 0-3.61 0-4.9.4a5.1 5.1 0 00-3.05 3.06C0 4.765 0 5.965 0 8.365v7.27c0 2.41 0 3.6.4 4.9a5.1 5.1 0 003.05 3.05c1.3.41 2.5.41 4.9.41h7.28c2.41 0 3.61 0 4.9-.4a5.1 5.1 0 003.06-3.06c.41-1.3.41-2.5.41-4.9v-7.25c0-2.41 0-3.61-.41-4.91zm-6.17 4.63l-.93.93a.5.5 0 01-.67.01 5 5 0 00-3.22-1.18c-.97 0-1.94.32-1.94 1.21 0 .9 1.04 1.2 2.24 1.65 2.1.7 3.84 1.58 3.84 3.64 0 2.24-1.74 3.78-4.58 3.95l-.26 1.2a.49.49 0 01-.48.39H9.63l-.09-.01a.5.5 0 01-.38-.59l.28-1.27a6.54 6.54 0 01-2.88-1.57v-.01a.48.48 0 010-.68l1-.97a.49.49 0 01.67 0c.91.86 2.13 1.34 3.39 1.32 1.3 0 2.17-.55 2.17-1.42 0-.87-.88-1.1-2.54-1.72-1.76-.63-3.43-1.52-3.43-3.6 0-2.42 2.01-3.6 4.39-3.71l.25-1.23a.48.48 0 01.48-.38h1.78l.1.01c.26.06.43.31.37.57l-.27 1.37c.9.3 1.75.77 2.48 1.39l.02.02c.19.2.19.5 0 .68z",
        },
      },
    ],
  })(e);
}
function gb(e) {
  return B({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M7.016 19.198h-4.2a.562.562 0 0 1-.555-.65L5.093.584A.692.692 0 0 1 5.776 0h7.222c3.417 0 5.904 2.488 5.846 5.5-.006.25-.027.5-.066.747A6.794 6.794 0 0 1 12.071 12H8.743a.69.69 0 0 0-.682.583l-.325 2.056-.013.083-.692 4.39-.015.087zM19.79 6.142c-.01.087-.01.175-.023.261a7.76 7.76 0 0 1-7.695 6.598H9.007l-.283 1.795-.013.083-.692 4.39-.134.843-.014.088H6.86l-.497 3.15a.562.562 0 0 0 .555.65h3.612c.34 0 .63-.249.683-.585l.952-6.031a.692.692 0 0 1 .683-.584h2.126a6.793 6.793 0 0 0 6.707-5.752c.306-1.95-.466-3.744-1.89-4.906z",
        },
      },
    ],
  })(e);
}
var Wa = {};
function Zc(e) {
  "@babel/helpers - typeof";
  return (
    (Zc =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Zc(e)
  );
}
Object.defineProperty(Wa, "__esModule", { value: !0 });
Wa.CopyToClipboard = void 0;
var Io = _0(b),
  vb = _0(M3),
  wb = ["text", "onCopy", "options", "children"];
function _0(e) {
  return e && e.__esModule ? e : { default: e };
}
function hp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function pp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hp(Object(n), !0).forEach(function (r) {
          _d(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : hp(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function yb(e, t) {
  if (e == null) return {};
  var n = xb(e, t),
    r,
    s;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (s = 0; s < i.length; s++)
      ((r = i[s]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]));
  }
  return n;
}
function xb(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    s,
    i;
  for (i = 0; i < r.length; i++)
    ((s = r[i]), !(t.indexOf(s) >= 0) && (n[s] = e[s]));
  return n;
}
function jb(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bb(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r));
  }
}
function Sb(e, t, n) {
  return (
    t && bb(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Cb(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && eu(e, t));
}
function eu(e, t) {
  return (
    (eu =
      Object.setPrototypeOf ||
      function (r, s) {
        return ((r.__proto__ = s), r);
      }),
    eu(e, t)
  );
}
function Pb(e) {
  var t = Nb();
  return function () {
    var r = qi(e),
      s;
    if (t) {
      var i = qi(this).constructor;
      s = Reflect.construct(r, arguments, i);
    } else s = r.apply(this, arguments);
    return kb(this, s);
  };
}
function kb(e, t) {
  if (t && (Zc(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return B0(e);
}
function B0(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Nb() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function qi(e) {
  return (
    (qi = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    qi(e)
  );
}
function _d(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var I0 = (function (e) {
  Cb(n, e);
  var t = Pb(n);
  function n() {
    var r;
    jb(this, n);
    for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++)
      i[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(i))),
      _d(B0(r), "onClick", function (l) {
        var c = r.props,
          u = c.text,
          d = c.onCopy,
          f = c.children,
          p = c.options,
          y = Io.default.Children.only(f),
          g = (0, vb.default)(u, p);
        (d && d(u, g),
          y &&
            y.props &&
            typeof y.props.onClick == "function" &&
            y.props.onClick(l));
      }),
      r
    );
  }
  return (
    Sb(n, [
      {
        key: "render",
        value: function () {
          var s = this.props;
          (s.text, s.onCopy, s.options);
          var i = s.children,
            a = yb(s, wb),
            l = Io.default.Children.only(i);
          return Io.default.cloneElement(
            l,
            pp(pp({}, a), {}, { onClick: this.onClick }),
          );
        },
      },
    ]),
    n
  );
})(Io.default.PureComponent);
Wa.CopyToClipboard = I0;
_d(I0, "defaultProps", { onCopy: void 0, options: void 0 });
var Eb = Wa,
  tu = Eb.CopyToClipboard;
tu.CopyToClipboard = tu;
var Bd = tu;
const Ft = ({
    isOpen: e,
    onClose: t,
    type: n = "success",
    title: r,
    message: s,
    onConfirm: i,
    confirmText: a = "OK",
    showCancel: l = !1,
  }) => {
    if (!e) return null;
    const c = () => {
      switch (n) {
        case "success":
          return o.jsx(fh, { className: "modal-icon success" });
        case "error":
          return o.jsx(ph, { className: "modal-icon error" });
        case "warning":
          return o.jsx(ph, { className: "modal-icon warning" });
        default:
          return o.jsx(fh, { className: "modal-icon success" });
      }
    };
    return o.jsx("div", {
      className: "modal-overlay",
      onClick: t,
      children: o.jsxs("div", {
        className: "modal-container",
        onClick: (u) => u.stopPropagation(),
        children: [
          o.jsx("button", {
            className: "modal-close",
            onClick: t,
            children: o.jsx(Yg, {}),
          }),
          o.jsxs("div", {
            className: "modal-content",
            children: [
              o.jsx("div", { className: "modal-icon-wrapper", children: c() }),
              o.jsx("h2", { className: "modal-title", children: r }),
              s && o.jsx("p", { className: "modal-message", children: s }),
            ],
          }),
          o.jsxs("div", {
            className: "modal-actions",
            children: [
              l &&
                o.jsx("button", {
                  className: "modal-button secondary",
                  onClick: t,
                  children: "Cancel",
                }),
              o.jsx("button", {
                className: `modal-button ${n}`,
                onClick: i || t,
                children: a,
              }),
            ],
          }),
        ],
      }),
    });
  },
  Rb = () => {
    const { paymentname: e } = lr(),
      t = Ye((O) => O.persisitedReducer.user),
      n =
        (t == null ? void 0 : t._id) ||
        (t == null ? void 0 : t.id) ||
        localStorage.getItem("UserId") ||
        "",
      [r, s] = b.useState(!1),
      [i, a] = b.useState(!1);
    b.useEffect(() => {
      n ||
        console.warn(
          "Payment page: user id not found in Redux or localStorage.",
        );
    }, [n]);
    const [l, c] = b.useState(null),
      u = JSON.parse(localStorage.getItem("amount")),
      [d, f] = b.useState(!1),
      [p, y] = b.useState({ type: "success", title: "", message: "" }),
      g = Et(),
      x = cr(),
      v = {
        BTC: {
          name: "Bitcoin (BTC)",
          icon: o.jsx(zt, {}),
          address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
          network: "Bitcoin Network",
          instructions: [
            "Copy the Bitcoin address below",
            "Open your Bitcoin wallet",
            "Send the exact amount to the address",
            "Upload payment proof after transaction",
            "Wait for confirmation (usually 10-30 minutes)",
          ],
        },
        ETH: {
          name: "Ethereum (ETH)",
          icon: o.jsx(zt, {}),
          address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
          network: "Ethereum Network (ERC20)",
          instructions: [
            "Copy the Ethereum address below",
            "Open your Ethereum wallet",
            "Send the exact amount to the address",
            "Upload payment proof after transaction",
            "Wait for confirmation (usually 2-5 minutes)",
          ],
        },
        "USDT-ERC20": {
          name: "USDT (ERC20)",
          icon: o.jsx(zt, {}),
          address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
          network: "Ethereum Network (ERC20)",
          instructions: [
            "Copy the USDT address below",
            "Open your wallet and select USDT (ERC20)",
            "Send the exact amount to the address",
            "Upload payment proof after transaction",
            "Wait for confirmation (usually 2-5 minutes)",
          ],
        },
        "USDT-TRC20": {
          name: "USDT (TRC20)",
          icon: o.jsx(zt, {}),
          address: "TXYZupypcsuWGkWJwjz6zQKqL4qKRzPmK7",
          network: "Tron Network (TRC20)",
          instructions: [
            "Copy the USDT address below",
            "Open your wallet and select USDT (TRC20)",
            "Send the exact amount to the address",
            "Upload payment proof after transaction",
            "Wait for confirmation (usually 1-3 minutes)",
          ],
        },
        "USDT-BEP20": {
          name: "USDT (BEP20)",
          icon: o.jsx(zt, {}),
          address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
          network: "Binance Smart Chain (BEP20)",
          instructions: [
            "Copy the USDT address below",
            "Open your wallet and select USDT (BEP20)",
            "Send the exact amount to the address",
            "Upload payment proof after transaction",
            "Wait for confirmation (usually 1-3 minutes)",
          ],
        },
        BNB: {
          name: "Binance Coin (BNB)",
          icon: o.jsx(zt, {}),
          address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
          network: "Binance Smart Chain (BEP20)",
          instructions: [
            "Copy the BNB address below",
            "Open your Binance or BNB wallet",
            "Send the exact amount to the address",
            "Upload payment proof after transaction",
            "Wait for confirmation (usually 1-3 minutes)",
          ],
        },
        SOL: {
          name: "Solana (SOL)",
          icon: o.jsx(zt, {}),
          address: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
          network: "Solana Network",
          instructions: [
            "Copy the Solana address below",
            "Open your Solana wallet",
            "Send the exact amount to the address",
            "Upload payment proof after transaction",
            "Wait for confirmation (usually 30 seconds - 2 minutes)",
          ],
        },
        XRP: {
          name: "Ripple (XRP)",
          icon: o.jsx(zt, {}),
          address: "rN7n7otQDd6FczFgLdlqtyMVrn3HMfXEEk",
          network: "Ripple Network",
          instructions: [
            "Copy the XRP address below",
            "Open your XRP wallet",
            "Send the exact amount to the address",
            "Include the destination tag if required",
            "Upload payment proof after transaction",
            "Wait for confirmation (usually 3-5 seconds)",
          ],
        },
        TRX: {
          name: "Tron (TRX)",
          icon: o.jsx(zt, {}),
          address: "TXYZupypcsuWGkWJwjz6zQKqL4qKRzPmK7",
          network: "Tron Network",
          instructions: [
            "Copy the Tron address below",
            "Open your Tron wallet",
            "Send the exact amount to the address",
            "Upload payment proof after transaction",
            "Wait for confirmation (usually 1-3 minutes)",
          ],
        },
        CASHAPP: {
          name: "Cash App",
          icon: o.jsx(mb, {}),
          address: "$YourCashAppTag",
          network: "Cash App",
          instructions: [
            "Copy the Cash App tag below",
            "Open your Cash App",
            "Send the exact amount to the tag",
            "Upload payment screenshot",
            "Payment will be confirmed within 5-10 minutes",
          ],
        },
        PAYPAL: {
          name: "PayPal",
          icon: o.jsx(gb, {}),
          address: "your-email@example.com",
          network: "PayPal",
          instructions: [
            "Copy the PayPal email below",
            "Open your PayPal account",
            "Send money to the email address",
            "Upload payment confirmation",
            "Payment will be verified within 10-15 minutes",
          ],
        },
        BANK: {
          name: "Bank Transfer",
          icon: o.jsx($y, {}),
          address:
            "Account: 1234567890 | Bank: Your Bank Name | Routing: 123456789",
          network: "Bank Transfer",
          instructions: [
            "Use the bank details below",
            "Make a transfer from your bank",
            "Include your user ID in the reference",
            "Upload transfer receipt",
            "Bank transfers may take 1-3 business days",
          ],
        },
      },
      m = v[e] || v.BTC,
      h = {
        amount: u,
        paymentMode: e,
        status: "pending",
        dateCreated: new Date().toDateString(),
      },
      [w, j] = b.useState({ value: m.address, copied: !1 }),
      S = (O) => {
        const M = O.target.files[0];
        M && (c(M), console.log("File uploaded:", M.name));
      },
      C = `https://mynewbrokerezebackend.onrender.com/api/auth/sendpayment/${n}`,
      E = `https://mynewbrokerezebackend.onrender.com/api/deposits/deposit/${n}`,
      R = { amount: u },
      L = { amount: u, coin: e },
      N = () => {
        W.post(E, L)
          .then((O) => {
            console.log(O);
          })
          .catch((O) => {
            console.log(O);
          });
      },
      $ = () => {
        if (!l) {
          (y({
            type: "error",
            title: "Payment Proof Required",
            message: "Please upload payment proof before submitting.",
          }),
            f(!0));
          return;
        }
        (a(!0),
          W.post(C, R)
            .then((O) => {
              (N(),
                console.log(O),
                s(!0),
                y({
                  type: "success",
                  title: "Payment Submitted Successfully!",
                  message:
                    "Your deposit is being processed. You will be notified once it's confirmed.",
                }),
                f(!0),
                setTimeout(() => {
                  (g("/dashboard"), x(Tl(h)));
                }, 2e3));
            })
            .catch((O) => {
              (console.log(O),
                a(!1),
                y({
                  type: "error",
                  title: "Payment Submission Failed",
                  message:
                    "Unable to submit payment. Please try again or contact support.",
                }),
                f(!0));
            }));
      };
    return o.jsx(o.Fragment, {
      children: o.jsxs("div", {
        className: "PaymentBody",
        children: [
          o.jsxs("div", {
            className: "PaymentContainer",
            children: [
              o.jsxs("div", {
                className: "PaymentHeader",
                children: [
                  o.jsx("h1", { children: "Complete Your Payment" }),
                  o.jsx("p", {
                    children:
                      "Follow the instructions below to complete your deposit",
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "PaymentContent",
                children: [
                  o.jsxs("div", {
                    className: "PaymentMethodInfo",
                    children: [
                      o.jsx("div", {
                        style: { fontSize: "3rem", marginBottom: "1rem" },
                        children: m.icon,
                      }),
                      o.jsx("h3", { children: m.name }),
                      o.jsx("p", { children: "Selected Payment Method" }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "PaymentAmountCard",
                    children: [
                      o.jsx("h4", { children: "Amount to Deposit" }),
                      o.jsxs("h2", { children: ["$", u] }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "PaymentWalletSection",
                    children: [
                      o.jsx("h3", { children: "Payment Details" }),
                      o.jsxs("div", {
                        className: "PaymentWalletAddress",
                        children: [
                          o.jsx("input", {
                            type: "text",
                            value: w.value,
                            readOnly: !0,
                          }),
                          o.jsx(Bd.CopyToClipboard, {
                            text: w.value,
                            onCopy: () => {
                              (j({ ...w, copied: !0 }),
                                setTimeout(() => j({ ...w, copied: !1 }), 2e3));
                            },
                            children: o.jsxs("button", {
                              children: [
                                o.jsx(Zu, {}),
                                " ",
                                w.copied ? "Copied!" : "Copy",
                              ],
                            }),
                          }),
                        ],
                      }),
                      o.jsxs("p", {
                        style: {
                          fontSize: "0.9rem",
                          color: "var(--text-secondary)",
                          marginTop: "0.5rem",
                        },
                        children: [
                          "Network Type:",
                          " ",
                          o.jsx("span", {
                            style: { fontWeight: "600" },
                            children: m.network,
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "PaymentInstructions",
                    children: [
                      o.jsx("h4", { children: "Payment Instructions" }),
                      o.jsx("ol", {
                        children: m.instructions.map((O, M) =>
                          o.jsx("li", { children: O }, M),
                        ),
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "PaymentUploadSection",
                    children: [
                      o.jsx("h3", { children: "Upload Payment Proof" }),
                      o.jsxs("label", {
                        htmlFor: "file-upload",
                        className: "PaymentUploadBox",
                        children: [
                          o.jsx(Gg, { style: { fontSize: "3rem" } }),
                          o.jsx("p", {
                            children: l
                              ? `Selected: ${l.name}`
                              : "Click to upload payment proof",
                          }),
                          o.jsx("p", {
                            style: {
                              fontSize: "0.85rem",
                              color: "var(--text-muted)",
                            },
                            children:
                              "Supported formats: JPG, PNG, PDF (Max 5MB)",
                          }),
                          o.jsx("input", {
                            id: "file-upload",
                            type: "file",
                            accept: "image/*,.pdf",
                            onChange: S,
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "PaymentActions",
                    children: [
                      o.jsx("button", {
                        className: "secondary",
                        onClick: () => g("/dashboard"),
                        disabled: i,
                        children: "Cancel",
                      }),
                      o.jsx("button", {
                        onClick: $,
                        disabled: i,
                        children: i ? "Submitting..." : "Submit Payment",
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "PaymentWarning",
                    children: [
                      o.jsx("span", {
                        style: { fontSize: "1.5rem" },
                        children: "⚠️",
                      }),
                      o.jsx("p", {
                        children:
                          "Please ensure you send the exact amount to avoid delays in processing. Your deposit will be credited after verification (usually within 10-30 minutes).",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          r &&
            o.jsx("div", {
              className: "SuccessPaid",
              children: o.jsxs("div", {
                className: "PayCon",
                children: [
                  o.jsx("h3", { children: "Payment Submitted Successfully!" }),
                  o.jsx("p", {
                    style: {
                      marginBottom: "1.5rem",
                      color: "var(--text-secondary)",
                    },
                    children:
                      "Your deposit is being processed. You will be notified once it's confirmed.",
                  }),
                  o.jsx("button", {
                    onClick: () => {
                      (s(!1), g("/dashboard"), x(Tl(h)));
                    },
                    children: "Return to Dashboard",
                  }),
                ],
              }),
            }),
          o.jsx(Ft, {
            isOpen: d,
            onClose: () => {
              (f(!1), p.type === "success" && (g("/dashboard"), x(Tl(h))));
            },
            type: p.type,
            title: p.title,
            message: p.message,
          }),
        ],
      }),
    });
  },
  fr = () =>
    o.jsxs("header", {
      className: "LandingHeader container",
      children: [
        o.jsxs("div", {
          className: "LandingBrand",
          children: [
            "Asset Development ",
            o.jsx("small", { children: "Investment Solutions" }),
          ],
        }),
        o.jsxs("nav", {
          className: "LandingNav",
          children: [
            o.jsx(U, { to: "/", children: "Home" }),
            o.jsx(U, { to: "/about", children: "About" }),
            o.jsx(U, { to: "/trading", children: "Investing" }),
            o.jsxs("div", {
              className: "LandingNavDropdown",
              children: [
                o.jsx("button", { type: "button", children: "Markets" }),
                o.jsxs("div", {
                  className: "LandingDropdownMenu",
                  children: [
                    o.jsx(U, { to: "/markets", children: "Bitcoin Mining" }),
                    o.jsx(U, { to: "/markets", children: "Forex Trade" }),
                    o.jsx(U, { to: "/markets", children: "Marijuana" }),
                    o.jsx(U, { to: "/markets", children: "Precious Metal" }),
                    o.jsx(U, { to: "/markets", children: "Crude Oil" }),
                    o.jsx(U, { to: "/markets", children: "Real Estate" }),
                    o.jsx(U, { to: "/markets", children: "Retirement Plan" }),
                  ],
                }),
              ],
            }),
            o.jsx(U, { to: "/plans", children: "Plans" }),
            o.jsx(U, { to: "/contact", children: "Contact" }),
            o.jsx(U, { to: "/terms", children: "Terms of Use" }),
          ],
        }),
        o.jsxs("div", {
          className: "LandingHeaderActions",
          children: [
            o.jsx(U, {
              className: "LandingHeaderButton",
              to: "/login",
              children: "Login",
            }),
            o.jsx(U, {
              className: "LandingHeaderButton primary",
              to: "/register",
              children: "Get Started",
            }),
          ],
        }),
      ],
    }),
  hr = () => {
    const e = new Date().getFullYear();
    return o.jsx("footer", {
      className: "Footer",
      children: o.jsxs("div", {
        className: "FooterContainer",
        children: [
          o.jsxs("div", {
            className: "FooterContent",
            children: [
              o.jsxs("div", {
                className: "FooterColumn",
                children: [
                  o.jsx("h4", { children: "Company" }),
                  o.jsxs("ul", {
                    children: [
                      o.jsx("li", {
                        children: o.jsx(U, { to: "/", children: "Home" }),
                      }),
                      o.jsx("li", {
                        children: o.jsx(U, {
                          to: "/about",
                          children: "About Us",
                        }),
                      }),
                      o.jsx("li", {
                        children: o.jsx(U, {
                          to: "/trading",
                          children: "Investing",
                        }),
                      }),
                      o.jsx("li", {
                        children: o.jsx(U, {
                          to: "/markets",
                          children: "Markets",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "FooterColumn",
                children: [
                  o.jsx("h4", { children: "Products" }),
                  o.jsxs("ul", {
                    children: [
                      o.jsx("li", {
                        children: o.jsx(U, {
                          to: "/plans",
                          children: "Investment Plans",
                        }),
                      }),
                      o.jsx("li", {
                        children: o.jsx(U, {
                          to: "/trading",
                          children: "Trading Platform",
                        }),
                      }),
                      o.jsx("li", {
                        children: o.jsx("a", {
                          href: "#features",
                          children: "Advanced Tools",
                        }),
                      }),
                      o.jsx("li", {
                        children: o.jsx("a", {
                          href: "#mobile",
                          children: "Mobile App",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "FooterColumn",
                children: [
                  o.jsx("h4", { children: "Support" }),
                  o.jsxs("ul", {
                    children: [
                      o.jsx("li", {
                        children: o.jsx(U, {
                          to: "/contact",
                          children: "Contact Us",
                        }),
                      }),
                      o.jsx("li", {
                        children: o.jsx("a", {
                          href: "#help",
                          children: "Help Center",
                        }),
                      }),
                      o.jsx("li", {
                        children: o.jsx("a", { href: "#faq", children: "FAQ" }),
                      }),
                      o.jsx("li", {
                        children: o.jsx("a", {
                          href: "#status",
                          children: "Status Page",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "FooterColumn",
                children: [
                  o.jsx("h4", { children: "Legal" }),
                  o.jsxs("ul", {
                    children: [
                      o.jsx("li", {
                        children: o.jsx(U, {
                          to: "/terms",
                          children: "Terms & Conditions",
                        }),
                      }),
                      o.jsx("li", {
                        children: o.jsx("a", {
                          href: "#privacy",
                          children: "Privacy Policy",
                        }),
                      }),
                      o.jsx("li", {
                        children: o.jsx("a", {
                          href: "#cookies",
                          children: "Cookie Policy",
                        }),
                      }),
                      o.jsx("li", {
                        children: o.jsx("a", {
                          href: "#risk",
                          children: "Risk Disclosure",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "FooterColumn",
                children: [
                  o.jsx("h4", { children: "Follow Us" }),
                  o.jsxs("div", {
                    className: "SocialLinks",
                    children: [
                      o.jsx("a", {
                        href: "#twitter",
                        className: "SocialLink TwitterIcon",
                        title: "Twitter",
                        children: o.jsx("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: o.jsx("path", {
                            d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 10.63.55 13-4.5a4.49 4.49 0 00.355-.854",
                          }),
                        }),
                      }),
                      o.jsx("a", {
                        href: "#facebook",
                        className: "SocialLink FacebookIcon",
                        title: "Facebook",
                        children: o.jsx("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: o.jsx("path", {
                            d: "M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z",
                          }),
                        }),
                      }),
                      o.jsx("a", {
                        href: "#linkedin",
                        className: "SocialLink LinkedInIcon",
                        title: "LinkedIn",
                        children: o.jsxs("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: [
                            o.jsx("path", {
                              d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
                            }),
                            o.jsx("circle", { cx: "4", cy: "4", r: "2" }),
                          ],
                        }),
                      }),
                      o.jsx("a", {
                        href: "#instagram",
                        className: "SocialLink InstagramIcon",
                        title: "Instagram",
                        children: o.jsxs("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: [
                            o.jsx("rect", {
                              x: "2",
                              y: "2",
                              width: "20",
                              height: "20",
                              rx: "5",
                              ry: "5",
                            }),
                            o.jsx("path", {
                              d: "M16 2h-8a6 6 0 00-6 6v8a6 6 0 006 6h8a6 6 0 006-6V8a6 6 0 00-6-6z",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          o.jsxs("div", {
            className: "FooterBottom",
            children: [
              o.jsxs("p", {
                children: ["© ", e, " Asset Development. All rights reserved."],
              }),
              o.jsx("p", {
                className: "FooterDisclaimer",
                children:
                  "Risk Disclosure: Investing involves risk. Past performance does not guarantee future results.",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Tb = () =>
    o.jsxs("div", {
      className: "LandingPage",
      children: [
        o.jsx(fr, {}),
        o.jsxs("main", {
          children: [
            o.jsx("section", {
              className: "LandingHero",
              children: o.jsxs("div", {
                className: "LandingHeroContent container",
                children: [
                  o.jsxs("div", {
                    className: "LandingHeroCopy",
                    children: [
                      o.jsx("span", {
                        className: "LandingBadge",
                        children: "Global trading, simplified",
                      }),
                      o.jsx("h1", {
                        children:
                          "Power your investments with a modern broker platform.",
                      }),
                      o.jsx("p", {
                        children:
                          "Trade markets, manage risk, and access premium tools with a clean investment experience built for today’s traders.",
                      }),
                      o.jsxs("div", {
                        className: "LandingActions",
                        children: [
                          o.jsx(U, {
                            className: "LandingButton primary",
                            to: "/register",
                            children: "Get Started",
                          }),
                          o.jsx(U, {
                            className: "LandingButton secondary",
                            to: "/login",
                            children: "Login",
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "LandingHeroStats",
                    children: [
                      o.jsxs("div", {
                        className: "LandingStatCard",
                        children: [
                          o.jsx("h2", { children: "0.0s" }),
                          o.jsx("p", { children: "Average execution" }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "LandingStatCard",
                        children: [
                          o.jsx("h2", { children: "120+" }),
                          o.jsx("p", { children: "Markets available" }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "LandingStatCard",
                        children: [
                          o.jsx("h2", { children: "24/7" }),
                          o.jsx("p", { children: "Support and live chat" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            o.jsxs("section", {
              className: "LandingFeatures container",
              id: "trading",
              children: [
                o.jsxs("div", {
                  className: "LandingSectionTitle",
                  children: [
                    o.jsx("p", { children: "Core trading features" }),
                    o.jsx("h2", {
                      children: "Built to trade confidently in every market.",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "LandingFeatureGrid",
                  children: [
                    o.jsxs("article", {
                      className: "LandingFeatureCard",
                      children: [
                        o.jsx("h3", { children: "Live market signals" }),
                        o.jsx("p", {
                          children:
                            "See market moves and execute with clear pricing from day one.",
                        }),
                      ],
                    }),
                    o.jsxs("article", {
                      className: "LandingFeatureCard",
                      children: [
                        o.jsx("h3", { children: "Advanced analytics" }),
                        o.jsx("p", {
                          children:
                            "Track your positions and manage risk with actionable insights.",
                        }),
                      ],
                    }),
                    o.jsxs("article", {
                      className: "LandingFeatureCard",
                      children: [
                        o.jsx("h3", { children: "Fast onboarding" }),
                        o.jsx("p", {
                          children:
                            "Register in minutes and fund your account with reliable infrastructure.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("section", {
              className: "LandingMarkets",
              id: "markets",
              children: o.jsxs("div", {
                className: "container",
                children: [
                  o.jsxs("div", {
                    className: "LandingSectionTitle",
                    children: [
                      o.jsx("p", { children: "Market access" }),
                      o.jsx("h2", {
                        children:
                          "Trade the widest range of asset classes from one platform.",
                      }),
                    ],
                  }),
                  o.jsx("div", {
                    className: "LandingMarketsGrid",
                    children: [
                      "Bitcoin Mining",
                      "Forex Trade",
                      "Marijuana",
                      "Precious Metal",
                      "Crude Oil",
                      "Real Estate",
                      "Retirement Plan",
                    ].map((e) =>
                      o.jsxs(
                        "div",
                        {
                          className: "LandingMarketCard",
                          children: [
                            o.jsx("h3", { children: e }),
                            o.jsx("p", {
                              children:
                                "Explore premium instruments and risk-managed portfolios.",
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            o.jsxs("section", {
              className: "LandingChatAwards container",
              children: [
                o.jsxs("div", {
                  className: "LandingChat",
                  children: [
                    o.jsx("h2", {
                      children: "Trade smarter with live chat support.",
                    }),
                    o.jsx("p", {
                      children:
                        "Ask questions, get market updates, and receive guidance from our trading desk anytime.",
                    }),
                    o.jsx("a", {
                      className: "LandingButton outline",
                      href: "#contact",
                      children: "Start chat",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "LandingAwards",
                  children: [
                    o.jsxs("div", {
                      children: [
                        o.jsx("span", { children: "Awarded" }),
                        o.jsx("h3", {
                          children: "Best broker experience 2026",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsx("span", { children: "Rated" }),
                        o.jsx("h3", { children: "5-star broker services" }),
                      ],
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsx("span", { children: "Trusted" }),
                        o.jsx("h3", { children: "By global investors" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("section", {
              className: "LandingTestimonials container",
              children: [
                o.jsxs("div", {
                  className: "LandingSectionTitle",
                  children: [
                    o.jsx("p", { children: "Client stories" }),
                    o.jsx("h2", {
                      children: "What traders are saying about the platform.",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "LandingTestimonialGrid",
                  children: [
                    o.jsxs("article", {
                      className: "LandingTestimonialCard",
                      children: [
                        o.jsx("p", {
                          children:
                            "“The execution speed and clarity on this platform make it easy to trade without second guessing.”",
                        }),
                        o.jsx("strong", {
                          children: "— Hannah, active forex trader",
                        }),
                      ],
                    }),
                    o.jsxs("article", {
                      className: "LandingTestimonialCard",
                      children: [
                        o.jsx("p", {
                          children:
                            "“I love the market coverage. It feels like a professional broker with a modern user experience.”",
                        }),
                        o.jsx("strong", {
                          children: "— Marcus, commodities investor",
                        }),
                      ],
                    }),
                    o.jsxs("article", {
                      className: "LandingTestimonialCard",
                      children: [
                        o.jsx("p", {
                          children:
                            "“The education and support are great. Everything feels well built for serious investing.”",
                        }),
                        o.jsx("strong", {
                          children: "— Priya, long-term portfolio manager",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("section", {
              className: "LandingSponsors container",
              children: [
                o.jsx("p", { children: "Trusted by" }),
                o.jsxs("div", {
                  className: "LandingSponsorGrid",
                  children: [
                    o.jsx("span", { children: "FINEX" }),
                    o.jsx("span", { children: "TRADIFY" }),
                    o.jsx("span", { children: "GLOBALX" }),
                    o.jsx("span", { children: "METALINK" }),
                    o.jsx("span", { children: "ALTTRUST" }),
                  ],
                }),
              ],
            }),
            o.jsxs("section", {
              className: "LandingPlans container",
              id: "plans",
              children: [
                o.jsxs("div", {
                  className: "LandingSectionTitle",
                  children: [
                    o.jsx("p", { children: "Plans" }),
                    o.jsx("h2", {
                      children:
                        "Choose the account type that fits your strategy.",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "LandingPlanGrid",
                  children: [
                    o.jsxs("div", {
                      className: "LandingPlanCard",
                      children: [
                        o.jsx("h3", { children: "Standard" }),
                        o.jsx("p", {
                          children:
                            "Easy access for new traders with essential tools.",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "LandingPlanCard featured",
                      children: [
                        o.jsx("h3", { children: "Pro" }),
                        o.jsx("p", {
                          children:
                            "Complete trading power with advanced analytics.",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "LandingPlanCard",
                      children: [
                        o.jsx("h3", { children: "Premium" }),
                        o.jsx("p", {
                          children:
                            "Priority service, custom pricing, and deeper market access.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("section", {
              className: "LandingContact container",
              id: "contact",
              children: o.jsxs("div", {
                className: "LandingContactCard",
                children: [
                  o.jsxs("div", {
                    children: [
                      o.jsx("span", { children: "Talk to us" }),
                      o.jsx("h2", {
                        children:
                          "Start trading with support that moves as fast as the market.",
                      }),
                    ],
                  }),
                  o.jsx(U, {
                    className: "LandingButton primary",
                    to: "/login",
                    children: "Contact sales",
                  }),
                ],
              }),
            }),
          ],
        }),
        o.jsx(hr, {}),
      ],
    }),
  Ab = () =>
    o.jsxs("div", {
      className: "AboutPage",
      children: [
        o.jsx(fr, {}),
        o.jsx("section", {
          className: "AboutHero",
          children: o.jsx("div", {
            className: "container AboutHeroContent",
            children: o.jsxs("div", {
              children: [
                o.jsx("span", { children: "About Us" }),
                o.jsx("h1", {
                  children:
                    "We empower traders with smarter, faster market access.",
                }),
                o.jsx("p", {
                  children:
                    "Our platform was designed to make every trade feel simple, secure, and effective — whether you are just starting or managing a large portfolio.",
                }),
                o.jsx(U, {
                  className: "AboutButton",
                  to: "/register",
                  children: "Create an account",
                }),
              ],
            }),
          }),
        }),
        o.jsxs("section", {
          className: "AboutValues container",
          children: [
            o.jsxs("div", {
              className: "AboutSectionTitle",
              children: [
                o.jsx("p", { children: "Trusted trading experience" }),
                o.jsx("h2", {
                  children:
                    "Built around transparency, speed, and disciplined execution.",
                }),
              ],
            }),
            o.jsxs("div", {
              className: "AboutValuesGrid",
              children: [
                o.jsxs("article", {
                  className: "AboutValueCard",
                  children: [
                    o.jsx("h3", { children: "Clear conditions" }),
                    o.jsx("p", {
                      children:
                        "We keep pricing, margin, and account rules transparent across every product.",
                    }),
                  ],
                }),
                o.jsxs("article", {
                  className: "AboutValueCard",
                  children: [
                    o.jsx("h3", { children: "Pro-grade service" }),
                    o.jsx("p", {
                      children:
                        "Customer support and technology backed by a responsive trading team.",
                    }),
                  ],
                }),
                o.jsxs("article", {
                  className: "AboutValueCard",
                  children: [
                    o.jsx("h3", { children: "High availability" }),
                    o.jsx("p", {
                      children:
                        "Access the platform anytime with secure login and fast execution.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        o.jsxs("section", {
          className: "AboutMission container",
          children: [
            o.jsxs("div", {
              className: "AboutMissionCard",
              children: [
                o.jsx("h2", { children: "Our mission" }),
                o.jsx("p", {
                  children:
                    "To make trading more accessible with a platform built on reliability and clean workflows for every trader.",
                }),
              ],
            }),
            o.jsxs("div", {
              className: "AboutMissionCard",
              children: [
                o.jsx("h2", { children: "Our approach" }),
                o.jsx("p", {
                  children:
                    "We focus on responsive features, straightforward account tools, and a trading experience designed to stay ahead of market needs.",
                }),
              ],
            }),
          ],
        }),
        o.jsx(hr, {}),
      ],
    }),
  Va = "/assets/Login-img-BN95WO_v.gif";
function Id(e) {
  return B({
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "g",
        attr: { id: "Mail" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z",
            },
          },
        ],
      },
    ],
  })(e);
}
const Ob = () => {
    const e = Et(),
      [t, n] = b.useState({ email: "", password: "" }),
      r = cr(),
      [s, i] = b.useState(""),
      [a, l] = b.useState(!1),
      c = (f) => {
        const { name: p, value: y } = f.target;
        (n((g) => ({ ...g, [p]: y })), i(""));
      },
      u = () =>
        !t.email || !t.password
          ? (i("Email and password are required"), !1)
          : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)
            ? !0
            : (i("Please enter a valid email address"), !1),
      d = async (f) => {
        if ((f.preventDefault(), !!u())) {
          l(!0);
          try {
            const p = await fetch(
                "https://mynewbrokerezebackend.onrender.com/api/auth/login",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    email: t.email,
                    password: t.password,
                  }),
                },
              ),
              y = await p.json();
            if (p.ok) {
              let g = y.token,
                x = y,
                v = y.referralLink;
              if ((g && r(xv(g)), v && r(A4(v)), x && (x._id || x.id))) {
                const m = x._id || x.id;
                (r(pd(x)), r(yv(m)), e("/dashboard"));
              } else
                i(
                  "Login succeeded but user data is missing. Please try again.",
                );
            } else i(y.message || "Login failed. Please try again.");
          } catch {
            i("Network error. Please check your connection and try again.");
          } finally {
            l(!1);
          }
        }
      };
    return o.jsxs("div", {
      className: "RegisterBody",
      children: [
        a &&
          o.jsxs("div", {
            className: "LoginLoadingOverlay",
            children: [
              o.jsx("div", { className: "LoginLoadingSpinner" }),
              o.jsx("p", { children: "Signing you in..." }),
            ],
          }),
        o.jsxs("div", {
          className: "RegisterContainer",
          children: [
            o.jsx("div", {
              className: "RegisterLeft",
              children: o.jsxs("div", {
                className: "RegisterLeftWrapper",
                children: [
                  o.jsx("div", {
                    className: "RegisterLeftImgDiv",
                    children: o.jsx("img", { src: ts, alt: "Swift Earn Logo" }),
                  }),
                  o.jsxs("div", {
                    className: "RegisterLeftInputsDiv",
                    children: [
                      o.jsx("h2", { children: "Welcome Back!" }),
                      o.jsx("p", {
                        children:
                          "To keep you connected, please login with your personal info.",
                      }),
                      s &&
                        o.jsx("div", {
                          className: "RegisterErrorDiv",
                          children: o.jsx("span", { children: s }),
                        }),
                      o.jsxs("form", {
                        onSubmit: d,
                        children: [
                          o.jsxs("div", {
                            className: "RegisterField",
                            children: [
                              o.jsxs("label", {
                                htmlFor: "email",
                                children: [
                                  "Email ",
                                  o.jsx("span", { children: "*" }),
                                ],
                              }),
                              o.jsxs("div", {
                                className: "RegisterFieldInput",
                                children: [
                                  o.jsx("span", { children: o.jsx(Id, {}) }),
                                  o.jsx("input", {
                                    id: "email",
                                    type: "email",
                                    name: "email",
                                    value: t.email,
                                    onChange: c,
                                    placeholder: "name@example.com",
                                    disabled: a,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "RegisterField",
                            children: [
                              o.jsxs("label", {
                                htmlFor: "password",
                                children: [
                                  "Password ",
                                  o.jsx("span", { children: "*" }),
                                ],
                              }),
                              o.jsxs("div", {
                                className: "RegisterFieldInput",
                                children: [
                                  o.jsx("span", { children: o.jsx(Qs, {}) }),
                                  o.jsx("input", {
                                    id: "password",
                                    type: "password",
                                    name: "password",
                                    value: t.password,
                                    onChange: c,
                                    placeholder: "Enter password",
                                    disabled: a,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "LoginLeftControlDiv",
                            children: [
                              o.jsxs("div", {
                                className: "LoginLeftControlDivRememberDiv",
                                children: [
                                  o.jsx("input", {
                                    type: "checkbox",
                                    id: "remember",
                                    disabled: a,
                                  }),
                                  o.jsx("label", {
                                    htmlFor: "remember",
                                    children: "Remember me",
                                  }),
                                ],
                              }),
                              o.jsx(U, {
                                className: "LoginForgotLink",
                                to: "/forgot-password",
                                children: "Forgot password?",
                              }),
                            ],
                          }),
                          o.jsx("button", {
                            type: "submit",
                            disabled: a,
                            className: a ? "loading" : "",
                            children: a ? "Signing in..." : "Sign in",
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "RegisterLeftInfo",
                    children: [
                      o.jsxs("p", {
                        children: [
                          "Don't have an account? ",
                          o.jsx(U, { to: "/register", children: "Sign Up" }),
                        ],
                      }),
                      o.jsxs("p", {
                        children: [
                          "© ",
                          new Date().getFullYear(),
                          " Asset Development.. All Rights Reserved.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            o.jsx("div", {
              className: "RegisterRight",
              children: o.jsxs("div", {
                className: "RegisterRightCard",
                children: [
                  o.jsxs("div", {
                    className: "RegisterRightInfo",
                    children: [
                      o.jsx("h1", {
                        children: "Secure access for every investor.",
                      }),
                      o.jsx("p", {
                        children:
                          "Sign in quickly with your credentials and continue trading with the tools you trust.",
                      }),
                    ],
                  }),
                  o.jsx("div", {
                    className: "RegisterCardImage",
                    children: o.jsx("img", {
                      src: Va,
                      alt: "Login illustration",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  Lb = () => {
    const e = Et(),
      [t, n] = b.useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        referralCode: "",
      }),
      r = cr(),
      [s, i] = b.useState(""),
      [a, l] = b.useState(!1),
      c = (f) => {
        const { name: p, value: y } = f.target;
        (n((g) => ({ ...g, [p]: y })), i(""));
      },
      u = () =>
        !t.fullName || !t.email || !t.password || !t.confirmPassword
          ? (i("All required fields must be completed"), !1)
          : t.fullName.trim().length < 2
            ? (i("Please enter a valid full name"), !1)
            : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)
              ? t.password.length < 8
                ? (i("Password must be at least 8 characters long"), !1)
                : t.password !== t.confirmPassword
                  ? (i("Passwords do not match"), !1)
                  : !0
              : (i("Please enter a valid email address"), !1),
      d = async (f) => {
        if ((f.preventDefault(), !!u())) {
          l(!0);
          try {
            const p = await fetch(
                "https://mynewbrokerezebackend.onrender.com/api/auth/register",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    fullName: t.fullName,
                    email: t.email,
                    password: t.password,
                    confirmPassword: t.confirmPassword,
                    referralCode: t.referralCode || void 0,
                  }),
                },
              ),
              y = await p.json();
            p.ok
              ? (y.token && r(xv(y.token)),
                y.user && (r(pd(y.user)), r(yv(y.user._id || y.user.id))),
                e("/login"))
              : i(y.message || "Registration failed. Please try again.");
          } catch (p) {
            (i("Network error. Please check your connection and try again."),
              console.error("Registration error:", p));
          } finally {
            l(!1);
          }
        }
      };
    return o.jsx("div", {
      className: "RegisterBody",
      children: o.jsxs("div", {
        className: "RegisterContainer",
        children: [
          o.jsx("div", {
            className: "RegisterLeft",
            children: o.jsxs("div", {
              className: "RegisterLeftWrapper",
              children: [
                o.jsx("div", {
                  className: "RegisterLeftImgDiv",
                  children: o.jsx("img", { src: ts, alt: "Swift Earn Logo" }),
                }),
                o.jsxs("div", {
                  className: "RegisterLeftInputsDiv",
                  children: [
                    o.jsx("h2", { children: "Create account" }),
                    o.jsx("p", {
                      children:
                        "Open your account today and start trading with a modern platform.",
                    }),
                    s &&
                      o.jsx("div", {
                        className: "RegisterErrorDiv",
                        children: o.jsx("span", { children: s }),
                      }),
                    o.jsxs("form", {
                      onSubmit: d,
                      children: [
                        o.jsxs("div", {
                          className: "RegisterField",
                          children: [
                            o.jsxs("label", {
                              children: [
                                "Full Name ",
                                o.jsx("span", { children: "*" }),
                              ],
                            }),
                            o.jsxs("div", {
                              className: "RegisterFieldInput",
                              children: [
                                o.jsx("span", { children: "👤" }),
                                o.jsx("input", {
                                  type: "text",
                                  name: "fullName",
                                  value: t.fullName,
                                  onChange: c,
                                  placeholder: "Your full name",
                                  disabled: a,
                                }),
                              ],
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "RegisterField",
                          children: [
                            o.jsxs("label", {
                              children: [
                                "Email ",
                                o.jsx("span", { children: "*" }),
                              ],
                            }),
                            o.jsxs("div", {
                              className: "RegisterFieldInput",
                              children: [
                                o.jsx("span", { children: o.jsx(Id, {}) }),
                                o.jsx("input", {
                                  type: "email",
                                  name: "email",
                                  value: t.email,
                                  onChange: c,
                                  placeholder: "name@example.com",
                                  disabled: a,
                                }),
                              ],
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "RegisterField",
                          children: [
                            o.jsxs("label", {
                              children: [
                                "Password ",
                                o.jsx("span", { children: "*" }),
                              ],
                            }),
                            o.jsxs("div", {
                              className: "RegisterFieldInput",
                              children: [
                                o.jsx("span", { children: o.jsx(Qs, {}) }),
                                o.jsx("input", {
                                  type: "password",
                                  name: "password",
                                  value: t.password,
                                  onChange: c,
                                  placeholder: "Create password",
                                  disabled: a,
                                }),
                              ],
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "RegisterField",
                          children: [
                            o.jsxs("label", {
                              children: [
                                "Confirm Password ",
                                o.jsx("span", { children: "*" }),
                              ],
                            }),
                            o.jsxs("div", {
                              className: "RegisterFieldInput",
                              children: [
                                o.jsx("span", { children: o.jsx(Qs, {}) }),
                                o.jsx("input", {
                                  type: "password",
                                  name: "confirmPassword",
                                  value: t.confirmPassword,
                                  onChange: c,
                                  placeholder: "Confirm password",
                                  disabled: a,
                                }),
                              ],
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "RegisterField",
                          children: [
                            o.jsx("label", {
                              children: "Referral Code (optional)",
                            }),
                            o.jsxs("div", {
                              className: "RegisterFieldInput",
                              children: [
                                o.jsx("span", { children: "📌" }),
                                o.jsx("input", {
                                  type: "text",
                                  name: "referralCode",
                                  value: t.referralCode,
                                  onChange: c,
                                  placeholder: "Enter referral code",
                                  disabled: a,
                                }),
                              ],
                            }),
                          ],
                        }),
                        o.jsx("button", {
                          type: "submit",
                          disabled: a,
                          className: a ? "loading" : "",
                          children: a
                            ? "Creating account..."
                            : "Create account",
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "RegisterLeftInfo",
                  children: [
                    o.jsxs("p", {
                      children: [
                        "Already have an account? ",
                        o.jsx(U, { to: "/login", children: "Sign in" }),
                      ],
                    }),
                    o.jsxs("p", {
                      children: [
                        "© ",
                        new Date().getFullYear(),
                        " Asset Development.. All Rights Reserved.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          o.jsx("div", {
            className: "RegisterRight",
            children: o.jsxs("div", {
              className: "RegisterRightCard",
              children: [
                o.jsxs("div", {
                  className: "RegisterRightInfo",
                  children: [
                    o.jsx("h1", {
                      children: "Trade with a modern broker experience.",
                    }),
                    o.jsx("p", {
                      children:
                        "Fast access to key markets and clean onboarding for traders who want a professional platform without the clutter.",
                    }),
                  ],
                }),
                o.jsx("div", {
                  className: "RegisterCardImage",
                  children: o.jsx("img", {
                    src: Va,
                    alt: "Trading illustration",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  Db = () => {
    const e = Et(),
      [t, n] = b.useState(""),
      [r, s] = b.useState(""),
      [i, a] = b.useState(""),
      [l, c] = b.useState(!1),
      u = () => {
        const f = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return t
          ? f.test(t)
            ? !0
            : (s("Please enter a valid email address"), !1)
          : (s("Email is required"), !1);
      },
      d = async (f) => {
        if ((f.preventDefault(), !!u())) {
          (c(!0), s(""), a(""));
          try {
            const p = await fetch(
                "https://mynewbrokerezebackend.onrender.com/api/auth/forgot-password",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: t }),
                },
              ),
              y = await p.json();
            p.ok
              ? (a("Reset link sent! Check your email for instructions."),
                n(""),
                setTimeout(() => {
                  e("/reset-password");
                }, 2e3))
              : s(y.message || "Failed to send reset link. Try again.");
          } catch (p) {
            (s("Network error. Please check your connection and try again."),
              console.error("Forgot password error:", p));
          } finally {
            c(!1);
          }
        }
      };
    return o.jsx("div", {
      className: "RegisterBody",
      children: o.jsxs("div", {
        className: "RegisterContainer",
        children: [
          o.jsx("div", {
            className: "RegisterLeft",
            children: o.jsxs("div", {
              className: "RegisterLeftWrapper",
              children: [
                o.jsx("div", {
                  className: "RegisterLeftImgDiv",
                  children: o.jsx("img", { src: ts, alt: "Swift Earn Logo" }),
                }),
                o.jsxs("div", {
                  className: "RegisterLeftInputsDiv",
                  children: [
                    o.jsx("h2", { children: "Forgot password?" }),
                    o.jsx("p", {
                      children:
                        "Enter your email address below and we’ll send you instructions to reset your password.",
                    }),
                    r &&
                      o.jsx("div", {
                        className: "RegisterErrorDiv",
                        children: o.jsx("span", { children: r }),
                      }),
                    i &&
                      o.jsx("div", {
                        className: "RegisterSuccessDiv",
                        children: o.jsx("span", { children: i }),
                      }),
                    o.jsxs("form", {
                      onSubmit: d,
                      children: [
                        o.jsxs("div", {
                          className: "RegisterField",
                          children: [
                            o.jsxs("label", {
                              children: [
                                "Email ",
                                o.jsx("span", { children: "*" }),
                              ],
                            }),
                            o.jsxs("div", {
                              className: "RegisterFieldInput",
                              children: [
                                o.jsx("span", { children: o.jsx(Id, {}) }),
                                o.jsx("input", {
                                  type: "email",
                                  value: t,
                                  onChange: (f) => {
                                    (n(f.target.value), s(""));
                                  },
                                  placeholder: "name@example.com",
                                  disabled: l,
                                }),
                              ],
                            }),
                          ],
                        }),
                        o.jsx("button", {
                          type: "submit",
                          disabled: l,
                          className: l ? "loading" : "",
                          children: l ? "Sending..." : "Send reset link",
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "RegisterLeftInfo",
                  children: [
                    o.jsxs("p", {
                      children: [
                        "Remembered your password? ",
                        o.jsx(U, { to: "/login", children: "Sign in" }),
                      ],
                    }),
                    o.jsxs("p", {
                      children: [
                        "© ",
                        new Date().getFullYear(),
                        " Asset Development.. All Rights Reserved.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          o.jsx("div", {
            className: "RegisterRight",
            children: o.jsxs("div", {
              className: "RegisterRightCard",
              children: [
                o.jsxs("div", {
                  className: "RegisterRightInfo",
                  children: [
                    o.jsx("h1", { children: "Reset your account password." }),
                    o.jsx("p", {
                      children:
                        "We’ll email a secure link so you can create a new password and get back to trading quickly.",
                    }),
                  ],
                }),
                o.jsx("div", {
                  className: "RegisterCardImage",
                  children: o.jsx("img", {
                    src: Va,
                    alt: "Forgot password illustration",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  Mb = () => {
    const e = Et(),
      [t, n] = b.useState({ newPassword: "", confirmPassword: "" }),
      [r, s] = b.useState(""),
      [i, a] = b.useState(!1),
      l = (d) => {
        const { name: f, value: p } = d.target;
        (n((y) => ({ ...y, [f]: p })), s(""));
      },
      c = () =>
        !t.newPassword || !t.confirmPassword
          ? (s("All password fields are required"), !1)
          : t.newPassword.length < 8
            ? (s("Password must be at least 8 characters long"), !1)
            : t.newPassword !== t.confirmPassword
              ? (s("Passwords do not match"), !1)
              : !0,
      u = async (d) => {
        if ((d.preventDefault(), !!c())) {
          a(!0);
          try {
            const f = new URLSearchParams(window.location.search).get("token"),
              p = await fetch(
                "https://mynewbrokerezebackend.onrender.com/api/auth/reset-password",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    token: f || "",
                    newPassword: t.newPassword,
                    confirmPassword: t.confirmPassword,
                  }),
                },
              ),
              y = await p.json();
            p.ok
              ? e("/login")
              : s(y.message || "Password reset failed. Please try again.");
          } catch (f) {
            (s("Network error. Please check your connection and try again."),
              console.error("Reset password error:", f));
          } finally {
            a(!1);
          }
        }
      };
    return o.jsx("div", {
      className: "RegisterBody",
      children: o.jsxs("div", {
        className: "RegisterContainer",
        children: [
          o.jsx("div", {
            className: "RegisterLeft",
            children: o.jsxs("div", {
              className: "RegisterLeftWrapper",
              children: [
                o.jsx("div", {
                  className: "RegisterLeftImgDiv",
                  children: o.jsx("img", { src: ts, alt: "Swift Earn Logo" }),
                }),
                o.jsxs("div", {
                  className: "RegisterLeftInputsDiv",
                  children: [
                    o.jsx("h2", { children: "Reset password" }),
                    o.jsx("p", {
                      children:
                        "Enter your new password below and confirm it to secure your account.",
                    }),
                    r &&
                      o.jsx("div", {
                        className: "RegisterErrorDiv",
                        children: o.jsx("span", { children: r }),
                      }),
                    o.jsxs("form", {
                      onSubmit: u,
                      children: [
                        o.jsxs("div", {
                          className: "RegisterField",
                          children: [
                            o.jsxs("label", {
                              children: [
                                "New password ",
                                o.jsx("span", { children: "*" }),
                              ],
                            }),
                            o.jsxs("div", {
                              className: "RegisterFieldInput",
                              children: [
                                o.jsx("span", { children: o.jsx(Qs, {}) }),
                                o.jsx("input", {
                                  type: "password",
                                  name: "newPassword",
                                  value: t.newPassword,
                                  onChange: l,
                                  placeholder: "New password",
                                  disabled: i,
                                }),
                              ],
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "RegisterField",
                          children: [
                            o.jsxs("label", {
                              children: [
                                "Confirm password ",
                                o.jsx("span", { children: "*" }),
                              ],
                            }),
                            o.jsxs("div", {
                              className: "RegisterFieldInput",
                              children: [
                                o.jsx("span", { children: o.jsx(Qs, {}) }),
                                o.jsx("input", {
                                  type: "password",
                                  name: "confirmPassword",
                                  value: t.confirmPassword,
                                  onChange: l,
                                  placeholder: "Confirm password",
                                  disabled: i,
                                }),
                              ],
                            }),
                          ],
                        }),
                        o.jsx("button", {
                          type: "submit",
                          disabled: i,
                          className: i ? "loading" : "",
                          children: i ? "Resetting..." : "Reset password",
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "RegisterLeftInfo",
                  children: [
                    o.jsxs("p", {
                      children: [
                        "Back to ",
                        o.jsx(U, { to: "/login", children: "Sign in" }),
                      ],
                    }),
                    o.jsxs("p", {
                      children: [
                        "© ",
                        new Date().getFullYear(),
                        " Asset Development.. All Rights Reserved.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          o.jsx("div", {
            className: "RegisterRight",
            children: o.jsxs("div", {
              className: "RegisterRightCard",
              children: [
                o.jsxs("div", {
                  className: "RegisterRightInfo",
                  children: [
                    o.jsx("h1", { children: "Secure your account again." }),
                    o.jsx("p", {
                      children:
                        "Choose a strong password and use the same recovery flow to continue investing with confidence.",
                    }),
                  ],
                }),
                o.jsx("div", {
                  className: "RegisterCardImage",
                  children: o.jsx("img", {
                    src: Va,
                    alt: "Reset password illustration",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  _b = () =>
    o.jsxs("div", {
      className: "Verifybody",
      children: [
        o.jsxs("div", {
          className: "VerifyRight",
          children: [
            o.jsx("div", {
              className: "verifyRightHeader",
              children: o.jsx("div", {
                className: "verifyRightHeaderImg",
                children: o.jsx("img", { src: ts, alt: "" }),
              }),
            }),
            o.jsx("div", {
              className: "verifyRightContent",
              children: o.jsxs("div", {
                className: "RightContentHeader",
                children: [
                  o.jsx("h2", { children: "Verification in Process...." }),
                  o.jsx("p", {
                    children:
                      "Your account is under review Kindly waiting for Admin Approval",
                  }),
                ],
              }),
            }),
          ],
        }),
        o.jsx("div", { className: "VerifyLeft" }),
      ],
    }),
  Bb = () =>
    o.jsx("div", {
      className: "OtherPage container",
      children: o.jsx("section", {
        className: "OtherContent",
        children: o.jsxs("div", {
          children: [
            o.jsx("span", { children: "Additional page" }),
            o.jsx("h1", {
              children: "Explore more investment tools and insights.",
            }),
            o.jsx("p", {
              children:
                "This page is designed as a flexible content area for broker-style offers, resources, or special announcements.",
            }),
            o.jsx(U, {
              className: "OtherButton",
              to: "/register",
              children: "Start your account",
            }),
          ],
        }),
      }),
    }),
  Ib = () =>
    o.jsxs("div", {
      className: "PageWrapper",
      children: [
        o.jsx(fr, {}),
        o.jsxs("main", {
          className: "PageContent container",
          children: [
            o.jsxs("section", {
              className: "PageHero",
              children: [
                o.jsx("span", { children: "Investing platform" }),
                o.jsx("h1", {
                  children:
                    "Invest with fast execution and deep market access.",
                }),
                o.jsx("p", {
                  children:
                    "Discover powerful tools, live pricing, and professional-grade order flow to execute your investments confidently.",
                }),
                o.jsx(U, {
                  className: "PageButton primary",
                  to: "/register",
                  children: "Get Started Investing",
                }),
              ],
            }),
            o.jsxs("section", {
              className: "PageFeatures",
              children: [
                o.jsx("h2", { children: "Why choose our investing platform" }),
                o.jsxs("div", {
                  className: "PageFeatureGrid",
                  children: [
                    o.jsxs("div", {
                      className: "PageFeatureCard",
                      children: [
                        o.jsx("h3", { children: "Fast Execution" }),
                        o.jsx("p", {
                          children:
                            "Sub-millisecond order processing with minimal slippage.",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "PageFeatureCard",
                      children: [
                        o.jsx("h3", { children: "Multiple Assets" }),
                        o.jsx("p", {
                          children:
                            "Forex, metals, commodities, and crypto all in one platform.",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "PageFeatureCard",
                      children: [
                        o.jsx("h3", { children: "Advanced Charts" }),
                        o.jsx("p", {
                          children:
                            "Real-time technical analysis tools and 100+ indicators.",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "PageFeatureCard",
                      children: [
                        o.jsx("h3", { children: "Safe & Secure" }),
                        o.jsx("p", {
                          children:
                            "Bank-level encryption and 24/7 account protection.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("section", {
              className: "PageCTA",
              children: o.jsxs("div", {
                children: [
                  o.jsx("h2", { children: "Ready to start investing?" }),
                  o.jsx("p", {
                    children:
                      "Open a live account or try a demo with virtual funds.",
                  }),
                  o.jsx(U, {
                    className: "PageButton secondary",
                    to: "/register",
                    children: "Create Account",
                  }),
                ],
              }),
            }),
          ],
        }),
        o.jsx(hr, {}),
      ],
    }),
  Fb = () =>
    o.jsxs("div", {
      className: "PageWrapper",
      children: [
        o.jsx(fr, {}),
        o.jsxs("main", {
          className: "PageContent container",
          children: [
            o.jsxs("section", {
              className: "PageHero",
              children: [
                o.jsx("span", { children: "Markets" }),
                o.jsx("h1", {
                  children:
                    "Explore our available markets and investment opportunities.",
                }),
                o.jsx("p", {
                  children:
                    "Access forex, metals, commodities, real estate, and alternative assets through a unified broker dashboard.",
                }),
              ],
            }),
            o.jsxs("section", {
              className: "PageMarketsList",
              children: [
                o.jsx("h2", { children: "Available Markets" }),
                o.jsx("div", {
                  className: "PageMarketGrid",
                  children: [
                    {
                      name: "Forex",
                      desc: "Invest in 50+ currency pairs 24/5",
                    },
                    {
                      name: "Precious Metals",
                      desc: "Gold, silver, platinum, and palladium",
                    },
                    {
                      name: "Crude Oil",
                      desc: "WTI and Brent crude investing",
                    },
                    {
                      name: "Bitcoin Mining",
                      desc: "Cryptocurrency investment opportunities",
                    },
                    {
                      name: "Real Estate",
                      desc: "Property and REIT investments",
                    },
                    { name: "Marijuana", desc: "Cannabis industry exposure" },
                  ].map((e) =>
                    o.jsxs(
                      "div",
                      {
                        className: "PageMarketCard",
                        children: [
                          o.jsx("h3", { children: e.name }),
                          o.jsx("p", { children: e.desc }),
                        ],
                      },
                      e.name,
                    ),
                  ),
                }),
              ],
            }),
            o.jsx("section", {
              className: "PageCTA",
              children: o.jsxs("div", {
                children: [
                  o.jsx("h2", { children: "Start exploring markets today" }),
                  o.jsx("p", {
                    children:
                      "Access diverse investments with competitive spreads.",
                  }),
                  o.jsx(U, {
                    className: "PageButton primary",
                    to: "/register",
                    children: "Open Investment Account",
                  }),
                ],
              }),
            }),
          ],
        }),
        o.jsx(hr, {}),
      ],
    }),
  $b = () => {
    const e = [
      {
        name: "Starter Plan",
        range: "$500 - $9,500",
        roi: "350%",
        duration: "3 Months",
        instruments: ["36 currency pairs", "Metals", "CFD on US stocks"],
        spread: "Floating from 1.3 pips",
        deposits: "All offers",
        loyalty: "All offers",
      },
      {
        name: "Silver Plan",
        range: "$20,000 - $75,000",
        roi: "420%",
        duration: "6 Months",
        instruments: [
          "36 currency pairs",
          "Metals",
          "CFD on US stocks",
          "CFD on Indices",
          "CFD on Oil",
        ],
        spread: "Floating from 1.0 pips",
        deposits: "All offers",
        loyalty: "All offers",
      },
      {
        name: "Gold Plan",
        range: "$50,000 - $175,000",
        roi: "480%",
        duration: "9 Months",
        instruments: [
          "36 currency pairs",
          "Metals",
          "CFD on US stocks",
          "CFD on Indices",
          "CFD on Oil",
          "Cryptocurrencies",
          "Commodities",
        ],
        spread: "Floating from 0.5 pips",
        deposits: "All offers",
        loyalty: "All offers",
      },
      {
        name: "Platinum Plan",
        range: "$150,000 - $470,000",
        roi: "520%",
        duration: "12 Months",
        instruments: [
          "36 currency pairs",
          "Metals",
          "CFD on US stocks",
          "CFD on Indices",
          "CFD on Oil",
          "Cryptocurrencies",
          "Commodities",
          "Energy Futures",
        ],
        spread: "Floating from 0.1 pips",
        deposits: "All offers",
        loyalty: "All offers",
      },
      {
        name: "Supreme Plan",
        range: "$500,000 - $1,575,000",
        roi: "560%",
        duration: "15 Months",
        instruments: [
          "36 currency pairs",
          "Metals",
          "CFD on US stocks",
          "CFD on Indices",
          "CFD on Oil",
          "Cryptocurrencies",
          "Commodities",
          "Energy Futures",
          "Agricultural Products",
          "Rare Earth Metals",
        ],
        spread: "Floating from 0.01 USD",
        deposits: "All offers",
        loyalty: "All offers",
        reviews: "30 Social Media Reviews",
      },
      {
        name: "Ultimate Plan",
        range: "$1,000,000 - $3,150,000",
        roi: "600%",
        duration: "24 Months",
        instruments: [
          "36 currency pairs",
          "Metals",
          "CFD on US stocks",
          "CFD on Indices",
          "CFD on Oil",
          "Cryptocurrencies",
          "Commodities",
          "Energy Futures",
          "Agricultural Products",
          "Rare Earth Metals",
          "Advanced Derivatives",
          "Emerging Market Assets",
        ],
        spread: "Floating from 0.01 USD",
        deposits: "All offers",
        loyalty: "All offers",
        reviews: "30 Social Media Reviews",
      },
    ];
    return o.jsxs("div", {
      className: "PageWrapper",
      children: [
        o.jsx(fr, {}),
        o.jsxs("main", {
          className: "PageContent container",
          children: [
            o.jsxs("section", {
              className: "PageHero",
              children: [
                o.jsx("span", { children: "Plans" }),
                o.jsx("h1", {
                  children: "Choose the investment plan that fits your goals.",
                }),
                o.jsx("p", {
                  children:
                    "From starter packages to premium accounts, we offer structures designed for every investor. All plans include professional tools, competitive spreads, and bonus opportunities.",
                }),
              ],
            }),
            o.jsx("section", {
              className: "PagePlansList",
              children: o.jsx("div", {
                className: "PagePlanGrid",
                children: e.map((t, n) =>
                  o.jsxs(
                    "div",
                    {
                      className: `PagePlanCard ${n === 4 ? "featured" : ""}`,
                      children: [
                        o.jsx("h3", { children: t.name }),
                        o.jsx("p", {
                          className: "PagePlanRange",
                          children: t.range,
                        }),
                        o.jsx("p", {
                          className: "PagePlanDuration",
                          children: t.duration,
                        }),
                        o.jsxs("div", {
                          className: "PagePlanROI",
                          children: [
                            o.jsx("span", {
                              className: "PageROILabel",
                              children: "ROI",
                            }),
                            o.jsx("span", {
                              className: "PageROIValue",
                              children: t.roi,
                            }),
                          ],
                        }),
                        t.reviews &&
                          o.jsx("p", {
                            className: "PagePlanReviews",
                            children: t.reviews,
                          }),
                        o.jsxs("div", {
                          className: "PagePlanSection",
                          children: [
                            o.jsx("h4", { children: "Investment Instruments" }),
                            o.jsx("ul", {
                              className: "PageInstrumentsList",
                              children: t.instruments.map((r) =>
                                o.jsx("li", { children: r }, r),
                              ),
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "PagePlanSection",
                          children: [
                            o.jsxs("p", {
                              children: [
                                o.jsx("strong", { children: "Spread:" }),
                                " ",
                                t.spread,
                              ],
                            }),
                            o.jsxs("p", {
                              children: [
                                o.jsx("strong", {
                                  children: "Deposit bonuses:",
                                }),
                                " ",
                                t.deposits,
                              ],
                            }),
                            o.jsxs("p", {
                              children: [
                                o.jsx("strong", {
                                  children: "Loyalty bonuses:",
                                }),
                                " ",
                                t.loyalty,
                              ],
                            }),
                          ],
                        }),
                        o.jsx(U, {
                          className: "PageButton primary",
                          to: "/register",
                          children: "Get Started",
                        }),
                      ],
                    },
                    t.name,
                  ),
                ),
              }),
            }),
          ],
        }),
        o.jsx(hr, {}),
      ],
    });
  },
  zb = () =>
    o.jsxs("div", {
      className: "PageWrapper",
      children: [
        o.jsx(fr, {}),
        o.jsxs("main", {
          className: "PageContent container",
          children: [
            o.jsxs("section", {
              className: "PageHero",
              children: [
                o.jsx("span", { children: "Contact" }),
                o.jsx("h1", {
                  children: "Reach out for support and account assistance.",
                }),
                o.jsx("p", {
                  children:
                    "Our team is ready to help with registration, investing questions, and account guidance.",
                }),
              ],
            }),
            o.jsxs("section", {
              className: "PageContactMethods",
              children: [
                o.jsx("h2", { children: "How to reach us" }),
                o.jsxs("div", {
                  className: "PageContactGrid",
                  children: [
                    o.jsxs("div", {
                      className: "PageContactCard",
                      children: [
                        o.jsx("h3", { children: "Email" }),
                        o.jsx("p", {
                          children: "support@assetdevelopment.com",
                        }),
                        o.jsx("p", {
                          className: "PageContactDesc",
                          children: "Response within 2 hours",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "PageContactCard",
                      children: [
                        o.jsx("h3", { children: "Live Chat" }),
                        o.jsx("p", {
                          children: "Available 24/7 on the platform",
                        }),
                        o.jsx("p", {
                          className: "PageContactDesc",
                          children: "Instant assistance from our team",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "PageContactCard",
                      children: [
                        o.jsx("h3", { children: "Phone" }),
                        o.jsx("p", { children: "+1 (800) 123-4567" }),
                        o.jsx("p", {
                          className: "PageContactDesc",
                          children: "Business hours: Mon–Fri 8am–8pm ET",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("section", {
              className: "PageCTA",
              children: o.jsxs("div", {
                children: [
                  o.jsx("h2", { children: "Ready to get started?" }),
                  o.jsx("p", {
                    children:
                      "Our team is here to answer your questions and help you open an account.",
                  }),
                  o.jsx(U, {
                    className: "PageButton primary",
                    to: "/register",
                    children: "Contact Our Team",
                  }),
                ],
              }),
            }),
          ],
        }),
        o.jsx(hr, {}),
      ],
    }),
  Hb = () =>
    o.jsxs("div", {
      className: "PageWrapper",
      children: [
        o.jsx(fr, {}),
        o.jsxs("main", {
          className: "PageContent container",
          children: [
            o.jsxs("section", {
              className: "PageHero",
              children: [
                o.jsx("span", { children: "Terms of Use" }),
                o.jsx("h1", {
                  children: "Review our policies and investment terms.",
                }),
                o.jsx("p", {
                  children:
                    "Read the terms that govern use of the platform and your investment relationship.",
                }),
              ],
            }),
            o.jsxs("section", {
              className: "PageTermsContent",
              children: [
                o.jsxs("div", {
                  className: "PageTermsSection",
                  children: [
                    o.jsx("h2", { children: "Key Points" }),
                    o.jsxs("ul", {
                      className: "PageTermsList",
                      children: [
                        o.jsx("li", {
                          children: "Must be 18+ to open an account",
                        }),
                        o.jsx("li", {
                          children: "Accounts are subject to verification",
                        }),
                        o.jsx("li", {
                          children: "Investing is done at your own risk",
                        }),
                        o.jsx("li", {
                          children: "Deposits are segregated and protected",
                        }),
                        o.jsx("li", {
                          children:
                            "We comply with all regulatory requirements",
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "PageTermsSection",
                  children: [
                    o.jsx("h2", { children: "Account Terms" }),
                    o.jsx("p", {
                      children:
                        "By opening an account, you agree to our terms of service. All investing is subject to market conditions and our platform rules. We reserve the right to modify terms with 30 days notice.",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "PageTermsSection",
                  children: [
                    o.jsx("h2", { children: "Risk Disclosure" }),
                    o.jsx("p", {
                      children:
                        "Investing involves substantial risk of loss. Leverage can work for or against you. Always use proper risk management and never invest money you cannot afford to lose.",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "PageTermsSection",
                  children: [
                    o.jsx("h2", { children: "Privacy & Data" }),
                    o.jsx("p", {
                      children:
                        "Your personal and account data is encrypted and protected. We do not share information with third parties except as required by law.",
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("section", {
              className: "PageCTA",
              children: o.jsxs("div", {
                children: [
                  o.jsx("h2", { children: "Agree to our terms?" }),
                  o.jsx("p", {
                    children:
                      "Create your account and start investing on our platform.",
                  }),
                  o.jsx(U, {
                    className: "PageButton primary",
                    to: "/register",
                    children: "Open Account",
                  }),
                ],
              }),
            }),
          ],
        }),
        o.jsx(hr, {}),
      ],
    }),
  In = "/assets/linechart-S2iKn2rT.webp",
  Ub = () => {
    const e = Et(),
      [t, n] = b.useState(null),
      r = Ye((N) => N.persisitedReducer.user),
      s = Ye((N) => N.persisitedReducer.referralLink);
    b.useEffect(() => {
      W.get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((N) => {
          const $ = N.data.bpi.USD.rate.replace(",", "");
          n(parseFloat($));
        })
        .catch((N) => {
          console.error("Error fetching exchange rate:", N);
        });
    }, []);
    const i = (r == null ? void 0 : r.accountBalance) / t,
      a = (r == null ? void 0 : r.totalProfit) / t,
      l = (r == null ? void 0 : r.bonus) / t,
      c = (r == null ? void 0 : r.ref) / t,
      u = (r == null ? void 0 : r.totalDeposit) / t,
      d = (r == null ? void 0 : r.totalWithdrawal) / t,
      f = (r == null ? void 0 : r.totalInvestment) / t;
    (parseFloat(i.toFixed(8)),
      parseFloat(a.toFixed(8)),
      parseFloat(l.toFixed(8)),
      parseFloat(c.toFixed(8)),
      parseFloat(u.toFixed(8)),
      parseFloat(d.toFixed(8)),
      parseFloat(f.toFixed(8)));
    const p = cr(),
      y = Ye((N) => N.persisitedReducer.user),
      g = (y == null ? void 0 : y._id) || "";
    g ||
      console.warn(
        "⚠️ WARNING: User ID is empty! User data from Redux may not have loaded yet.",
      );
    const x = (N) => {
        (p(O4(N)), e("/dashboard/detail-plan"));
      },
      [v, m] = b.useState(),
      [h, w] = b.useState(),
      j = `https://mynewbrokerezebackend.onrender.com/api/users/getalltransactions/${g}`,
      S = `https://mynewbrokerezebackend.onrender.com/api/users/getalluserplan/${g}`,
      C = () => {
        W.get(j)
          .then((N) => {
            m(N.data);
          })
          .catch((N) => {
            console.log(N);
          });
      },
      E = () => {
        W.get(S)
          .then((N) => {
            w(N.data);
          })
          .catch((N) => {
            console.log(N);
          });
      };
    b.useEffect(() => {
      g ? (C(), E()) : (m(null), w(null));
    }, [g]);
    const [R, L] = b.useState({ value: s, copied: !1 });
    return o.jsx(o.Fragment, {
      children: o.jsxs("div", {
        className: "DashHomeBody",
        children: [
          o.jsxs("h2", {
            className: "DashHomeHeaderText",
            children: [
              "Welcome, ",
              o.jsx("span", { children: r == null ? void 0 : r.fullName }),
            ],
          }),
          o.jsx("div", {
            className: "DashHomeInfoBox1",
            children: o.jsx("p", {
              children:
                "Welcome to Asset Development Investment Solutions, You set the level.",
            }),
          }),
          o.jsx("div", {
            className: "DashHomeInfoBox2",
            children: o.jsx("p", {
              children: "Welcome to Asset Development Investment Solutions",
            }),
          }),
          o.jsxs("div", {
            className: "DashHomeMainContent",
            children: [
              o.jsxs("div", {
                className: "DashHomeMainContentAccSummaryDiv",
                children: [
                  o.jsx("h3", {
                    className: "DashHomeMainContentAccSummaryDivH3Text",
                    children: "Account Summary",
                  }),
                  o.jsx("div", {
                    className: "DashHomeMainContentAccSummary",
                    children: o.jsxs("div", {
                      className: "DashHomeMainContentAccSummaryRow1",
                      children: [
                        o.jsxs("div", {
                          className: "DashHomeMainContentAccSummaryRow1Box",
                          children: [
                            o.jsxs("div", {
                              className:
                                "DashHomeMainContentAccSummaryRow1BoxL",
                              children: [
                                o.jsx("h4", { children: "Account Balance" }),
                                o.jsxs("h3", {
                                  children: [
                                    "$  ",
                                    r == null ? void 0 : r.accountBalance,
                                    ".00",
                                  ],
                                }),
                                o.jsx("span", { style: { fontWeight: "700" } }),
                                o.jsx("p", { className: "lineChart" }),
                              ],
                            }),
                            o.jsx("div", {
                              className:
                                "DashHomeMainContentAccSummaryRow1BoxR",
                              children: o.jsx("img", { src: In, alt: "" }),
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "DashHomeMainContentAccSummaryRow1Box",
                          children: [
                            o.jsxs("div", {
                              className:
                                "DashHomeMainContentAccSummaryRow1BoxL",
                              children: [
                                o.jsx("h4", { children: "Total Profit" }),
                                o.jsxs("h3", {
                                  children: [
                                    "$  ",
                                    r == null ? void 0 : r.totalProfit,
                                    ".00",
                                  ],
                                }),
                                o.jsx("span", { style: { fontWeight: "700" } }),
                              ],
                            }),
                            o.jsx("div", {
                              className:
                                "DashHomeMainContentAccSummaryRow1BoxR",
                              children: o.jsx("img", { src: In, alt: "" }),
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "DashHomeMainContentAccSummaryRow1Box",
                          children: [
                            o.jsxs("div", {
                              className:
                                "DashHomeMainContentAccSummaryRow1BoxL",
                              children: [
                                o.jsx("h4", { children: "Bonus" }),
                                o.jsxs("h3", {
                                  children: [
                                    "$  ",
                                    r == null ? void 0 : r.bonus,
                                    ".00",
                                  ],
                                }),
                                o.jsx("span", { style: { fontWeight: "700" } }),
                              ],
                            }),
                            o.jsx("div", {
                              className:
                                "DashHomeMainContentAccSummaryRow1BoxR",
                              children: o.jsx("img", { src: In, alt: "" }),
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "DashHomeMainContentAccSummaryRow2Box",
                          children: [
                            o.jsxs("div", {
                              className:
                                "DashHomeMainContentAccSummaryRow2BoxL",
                              children: [
                                o.jsx("h4", { children: "Referral Bonus" }),
                                o.jsxs("h3", {
                                  children: [
                                    "$  ",
                                    r == null ? void 0 : r.ref,
                                    ".00",
                                  ],
                                }),
                                o.jsx("span", { style: { fontWeight: "700" } }),
                              ],
                            }),
                            o.jsx("div", {
                              className:
                                "DashHomeMainContentAccSummaryRow1BoxR",
                              children: o.jsx("img", { src: In, alt: "" }),
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "DashHomeMainContentAccSummaryRow2Box",
                          children: [
                            o.jsxs("div", {
                              className:
                                "DashHomeMainContentAccSummaryRow2BoxL",
                              children: [
                                o.jsx("h4", { children: "Total Deposits" }),
                                o.jsxs("h3", {
                                  children: [
                                    "$  ",
                                    r == null ? void 0 : r.totalDeposit,
                                    ".00",
                                  ],
                                }),
                                o.jsx("span", { style: { fontWeight: "700" } }),
                              ],
                            }),
                            o.jsx("div", {
                              className:
                                "DashHomeMainContentAccSummaryRow1BoxR",
                              children: o.jsx("img", { src: In, alt: "" }),
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "DashHomeMainContentAccSummaryRow2Box",
                          children: [
                            o.jsxs("div", {
                              className:
                                "DashHomeMainContentAccSummaryRow2BoxL",
                              children: [
                                o.jsx("h4", { children: "Total Widthdrawal" }),
                                o.jsxs("h3", {
                                  children: [
                                    "$  ",
                                    r == null ? void 0 : r.totalWithdrawal,
                                    ".00",
                                  ],
                                }),
                                o.jsx("span", { style: { fontWeight: "700" } }),
                              ],
                            }),
                            o.jsx("div", {
                              className:
                                "DashHomeMainContentAccSummaryRow1BoxR",
                              children: o.jsx("img", { src: In, alt: "" }),
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "DashHomeMainContentAccSummaryRow2Box",
                          children: [
                            o.jsxs("div", {
                              className:
                                "DashHomeMainContentAccSummaryRow2BoxL",
                              children: [
                                o.jsx("h4", { children: "Total Investment" }),
                                o.jsxs("h3", {
                                  children: [
                                    "$ ",
                                    r == null ? void 0 : r.totalInvestment,
                                    ".00",
                                  ],
                                }),
                                o.jsx("span", { style: { fontWeight: "700" } }),
                              ],
                            }),
                            o.jsx("div", {
                              className:
                                "DashHomeMainContentAccSummaryRow1BoxR",
                              children: o.jsx("img", { src: In, alt: "" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "DashHomeMainContentActiveDiv",
                children: [
                  o.jsxs("h3", {
                    children: [
                      "Active Plans(s) ",
                      o.jsx("span", {
                        children: h == null ? void 0 : h.length,
                      }),
                    ],
                  }),
                  o.jsx("div", {
                    className: "DashHomeMainContentActiveDivBox",
                    children:
                      (h == null ? void 0 : h.length) > 0
                        ? o.jsx(o.Fragment, {
                            children: o.jsx("div", {
                              className: "DashHomeMainContentActiveDivBoxPlans",
                              children: h.map((N, $) => {
                                var O, M, z, re, ce, wt, A, I, H, q;
                                return o.jsxs(
                                  "div",
                                  {
                                    className:
                                      "DashHomeMainContentActiveDivBoxPlansItem",
                                    children: [
                                      o.jsxs("div", {
                                        className: "MyPlansActiveDivItem1A",
                                        children: [
                                          o.jsx("p", {
                                            children:
                                              (O =
                                                N == null ? void 0 : N.plan) ==
                                              null
                                                ? void 0
                                                : O.planName,
                                          }),
                                          o.jsxs("p", {
                                            children: [
                                              "Amount - $",
                                              (M =
                                                N == null
                                                  ? void 0
                                                  : N.plan.investment) == null
                                                ? void 0
                                                : M.amount,
                                            ],
                                          }),
                                        ],
                                      }),
                                      o.jsxs("div", {
                                        className: "MyPlansActiveDivItem1B",
                                        children: [
                                          o.jsxs("p", {
                                            children: [
                                              (re =
                                                (z =
                                                  N == null
                                                    ? void 0
                                                    : N.plan) == null
                                                  ? void 0
                                                  : z.investment) == null
                                                ? void 0
                                                : re.Date,
                                              o.jsx(Uy, {
                                                className: "FaArrowRight",
                                              }),
                                            ],
                                          }),
                                          o.jsx("p", {
                                            children: "Start Date",
                                          }),
                                        ],
                                      }),
                                      o.jsxs("div", {
                                        className: "MyPlansActiveDivItem1C",
                                        children: [
                                          o.jsx("p", {
                                            children:
                                              (wt =
                                                (ce =
                                                  N == null
                                                    ? void 0
                                                    : N.plan) == null
                                                  ? void 0
                                                  : ce.investment) == null
                                                ? void 0
                                                : wt.endDate,
                                          }),
                                          o.jsx("p", { children: "End Date" }),
                                        ],
                                      }),
                                      o.jsxs("div", {
                                        className: "MyPlansActiveDivItem1D",
                                        children: [
                                          o.jsx("button", {
                                            style: {
                                              backgroundColor:
                                                ((I =
                                                  (A =
                                                    N == null
                                                      ? void 0
                                                      : N.plan) == null
                                                    ? void 0
                                                    : A.investment) == null
                                                  ? void 0
                                                  : I.status) === "Active"
                                                  ? "#008001"
                                                  : "red",
                                            },
                                            children:
                                              (q =
                                                (H =
                                                  N == null
                                                    ? void 0
                                                    : N.plan) == null
                                                  ? void 0
                                                  : H.investment) == null
                                                ? void 0
                                                : q.status,
                                          }),
                                          o.jsx("p", { children: "Status" }),
                                        ],
                                      }),
                                      o.jsx("div", {
                                        className: "MyPlansActiveDivItem1E",
                                        children: o.jsx(Wy, {
                                          className: "FaChevronRight",
                                          onClick: () => x(N),
                                        }),
                                      }),
                                    ],
                                  },
                                  $,
                                );
                              }),
                            }),
                          })
                        : o.jsxs(o.Fragment, {
                            children: [
                              o.jsx("p", {
                                children:
                                  "You do not have an active investment plan at the moment.",
                              }),
                              o.jsx("button", {
                                onClick: () => e("/dashboard/trading-plans"),
                                children: "Buy Plan",
                              }),
                            ],
                          }),
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "DashHomeMainContenRecentTransactionDiv",
                children: [
                  o.jsxs("h3", {
                    children: [
                      "Recent Transaction ",
                      o.jsxs("span", {
                        children: ["(", v == null ? void 0 : v.length, ")"],
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "DashHomeMainContenRecentTransactionDivBox",
                    children: [
                      o.jsxs("p", {
                        className:
                          "DashHomeMainContenRecentTransactionDivBoxEndText",
                        onClick: () => e("/dashboard/transactions"),
                        children: [
                          o.jsx("span", { children: o.jsx(Fy, {}) }),
                          "View all transactions",
                        ],
                      }),
                      o.jsxs("div", {
                        className:
                          "DashHomeMainContenRecentTransactionDivBoxTop",
                        children: [
                          o.jsx("p", {
                            className:
                              "DashHomeMainContenRecentTransactionDivBoxTopDate",
                            children: "Date",
                          }),
                          o.jsx("p", {
                            className:
                              "DashHomeMainContenRecentTransactionDivBoxTopType",
                            children: "Type",
                          }),
                          o.jsx("p", {
                            className:
                              "DashHomeMainContenRecentTransactionDivBoxTopAmount",
                            children: "Amount",
                          }),
                        ],
                      }),
                      o.jsx("div", {
                        className:
                          "DashHomeMainContenRecentTransactionDivBoxDown",
                        children:
                          (v == null ? void 0 : v.length) < 0
                            ? o.jsx("div", {
                                className:
                                  "DashHomeMainContenRecentTransactionDivBoxDownItem1",
                                children: "No record yet",
                              })
                            : o.jsx(o.Fragment, {
                                children:
                                  v == null
                                    ? void 0
                                    : v.map((N) =>
                                        o.jsxs(
                                          "div",
                                          {
                                            className:
                                              "DashHomeMainContenRecentTransactionDivBoxDownItem1",
                                            children: [
                                              o.jsx("p", {
                                                className:
                                                  "DashHomeMainContenRecentTransactionDivBoxDownItem1Date",
                                                children:
                                                  N == null ? void 0 : N.date,
                                              }),
                                              o.jsx("p", {
                                                className:
                                                  "DashHomeMainContenRecentTransactionDivBoxDownItem1Type",
                                                children:
                                                  N == null
                                                    ? void 0
                                                    : N.transactionType,
                                              }),
                                              o.jsx("p", {
                                                className:
                                                  "DashHomeMainContenRecentTransactionDivBoxDownItem1Amount",
                                                children:
                                                  N == null ? void 0 : N.amount,
                                              }),
                                            ],
                                          },
                                          N == null ? void 0 : N._id,
                                        ),
                                      ),
                              }),
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "DashHomeMainContenReferUsDiv",
                children: [
                  o.jsx("h3", { children: "Refer us & Earn" }),
                  o.jsx("p", {
                    children: "Use the link below to invite your firends.",
                  }),
                  o.jsxs("div", {
                    className: "DashHomeMainContenReferUsDivBox",
                    children: [
                      o.jsx("input", {
                        type: "text",
                        value: R.value,
                        readOnly: !0,
                      }),
                      o.jsx(Bd.CopyToClipboard, {
                        text: R.value,
                        onCopy: () => L({ copied: !0 }),
                        children: o.jsx("div", {
                          className: "DepPaymentContentCTopReferUsDivBoxCopy",
                          children: o.jsx(Zu, {}),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Wb = () => {
    const e = Et(),
      [t, n] = b.useState(""),
      [r, s] = b.useState(""),
      [i, a] = b.useState(""),
      [l, c] = b.useState(!0),
      u = [
        {
          id: "wallet",
          name: "Crypto Wallet",
          route: "WALLET",
          isExpandable: !0,
          networks: [
            { id: "btc", name: "Bitcoin (BTC)", route: "BTC" },
            { id: "eth", name: "Ethereum (ETH)", route: "ETH" },
            { id: "usdt-erc20", name: "USDT (ERC20)", route: "USDT-ERC20" },
            { id: "usdt-trc20", name: "USDT (TRC20)", route: "USDT-TRC20" },
            { id: "usdt-bep20", name: "USDT (BEP20)", route: "USDT-BEP20" },
            { id: "bnb", name: "Binance Coin (BNB)", route: "BNB" },
            { id: "sol", name: "Solana (SOL)", route: "SOL" },
            { id: "xrp", name: "Ripple (XRP)", route: "XRP" },
            { id: "trx", name: "Tron (TRX)", route: "TRX" },
          ],
        },
        { id: "cashapp", name: "Cash App", route: "CASHAPP" },
        { id: "paypal", name: "PayPal", route: "PAYPAL" },
        { id: "bank", name: "Bank Transfer", route: "BANK" },
      ],
      [d, f] = b.useState(null),
      [p, y] = b.useState(!1),
      [g, x] = b.useState({ type: "success", title: "", message: "" }),
      v = (S) => {
        const C = S.target.value;
        (n(C),
          C.trim() === "" || C === "0" || C === "0.00"
            ? (s("Amount is required"), c(!0))
            : parseFloat(C) <= 0
              ? (s("Amount must be greater than 0"), c(!0))
              : (s(""), i && c(!1)));
      },
      m = b.useCallback((S) => {
        f((C) => (C === S ? null : S));
      }, []),
      h = b.useCallback(
        (S) => {
          (a(S), t && parseFloat(t) > 0 && c(!1));
        },
        [t],
      ),
      w = b.useCallback(
        (S) => {
          (a(S), t && parseFloat(t) > 0 && c(!1));
        },
        [t],
      ),
      j = () => {
        if (!t || t === "0.00" || parseFloat(t) <= 0) {
          (x({
            type: "error",
            title: "Invalid Amount",
            message: "Please enter a valid amount greater than 0.",
          }),
            y(!0));
          return;
        }
        if (!i) {
          (x({
            type: "error",
            title: "Payment Method Required",
            message: "Please select a payment method to continue.",
          }),
            y(!0));
          return;
        }
        (localStorage.setItem("amount", JSON.stringify(t)), e(`payment/${i}`));
      };
    return o.jsx(o.Fragment, {
      children: o.jsxs("div", {
        className: "DepositBody",
        children: [
          o.jsx("h1", { children: "Fund your account balance" }),
          o.jsxs("div", {
            className: "DepositContent",
            children: [
              o.jsxs("div", {
                className: "DepositContentLeft",
                children: [
                  o.jsxs("div", {
                    className: "DepositContentLeftTop",
                    children: [
                      o.jsx("h3", { children: "Enter Amount" }),
                      o.jsx("input", {
                        type: "number",
                        placeholder: "Enter Amount",
                        value: t,
                        onChange: v,
                        min: "0",
                        step: "0.01",
                      }),
                      r &&
                        o.jsx("p", {
                          style: {
                            marginTop: "0.5rem",
                            color: "var(--accent-danger)",
                            fontSize: "0.85rem",
                          },
                          children: r,
                        }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "DepositContentLeftDown",
                    children: [
                      o.jsx("h3", {
                        children: "Choose Payment Method from the list below",
                      }),
                      u.map((S) =>
                        o.jsx(
                          "div",
                          {
                            children: S.isExpandable
                              ? o.jsxs(o.Fragment, {
                                  children: [
                                    o.jsxs("div", {
                                      className: `DepositContentLeftDownInput expandable ${d === S.route ? "expanded" : ""}`,
                                      onClick: () => m(S.route),
                                      children: [
                                        o.jsx("span", {
                                          style: { flex: 1 },
                                          children: S.name,
                                        }),
                                        o.jsx("span", {
                                          className: "expand-icon",
                                          children: d === S.route ? "▼" : "▶",
                                        }),
                                      ],
                                    }),
                                    d === S.route &&
                                      o.jsx("div", {
                                        className: "DepositNetworkOptions",
                                        children: S.networks.map((C) =>
                                          o.jsxs(
                                            "label",
                                            {
                                              className: "DepositNetworkOption",
                                              children: [
                                                o.jsx("span", {
                                                  children: C.name,
                                                }),
                                                o.jsx("input", {
                                                  type: "radio",
                                                  name: "paymentMethod",
                                                  value: C.route,
                                                  checked: i === C.route,
                                                  onChange: () => w(C.route),
                                                }),
                                              ],
                                            },
                                            C.id,
                                          ),
                                        ),
                                      }),
                                  ],
                                })
                              : o.jsxs("div", {
                                  className: "DepositContentLeftDownInput",
                                  children: [
                                    o.jsx("span", {
                                      style: { flex: 1 },
                                      children: S.name,
                                    }),
                                    o.jsx("input", {
                                      type: "radio",
                                      name: "paymentMethod",
                                      value: S.route,
                                      checked: i === S.route,
                                      onChange: () => h(S.route),
                                    }),
                                  ],
                                }),
                          },
                          S.id,
                        ),
                      ),
                      o.jsx("button", {
                        disabled: l,
                        onClick: j,
                        children: "Proceed to payment",
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "DepositContentRight",
                children: [
                  o.jsxs("div", {
                    className: "DepositContentRightA",
                    children: [
                      o.jsx("h4", { children: "Total Deposit" }),
                      o.jsxs("h4", {
                        className: "DepositContentRightABreak",
                        children: [
                          "$",
                          t || "0.00",
                          " ",
                          o.jsx("span", { children: "Amount" }),
                        ],
                      }),
                    ],
                  }),
                  o.jsx("div", {
                    className: "DepositContentRightB",
                    children: o.jsx("p", { children: "View deposit history" }),
                  }),
                ],
              }),
            ],
          }),
          o.jsx(Ft, {
            isOpen: p,
            onClose: () => y(!1),
            type: g.type,
            title: g.title,
            message: g.message,
          }),
        ],
      }),
    });
  },
  Vb = ({ isOpen: e, onClose: t, onVerify: n }) => {
    const [r, s] = b.useState(""),
      [i, a] = b.useState(""),
      [l, c] = b.useState(null),
      [u, d] = b.useState({});
    if (!e) return null;
    const f = (h) => /^\d{3}-\d{2}-\d{4}$/.test(h),
      p = (h) => {
        const w = h.replace(/\D/g, "");
        return w.length <= 3
          ? w
          : w.length <= 5
            ? `${w.slice(0, 3)}-${w.slice(3)}`
            : `${w.slice(0, 3)}-${w.slice(3, 5)}-${w.slice(5, 9)}`;
      },
      y = (h) => {
        const w = p(h.target.value);
        (s(w), u.ssn && d({ ...u, ssn: "" }));
      },
      g = (h) => {
        (a(h.target.value),
          u.driversLicense && d({ ...u, driversLicense: "" }));
      },
      x = (h) => {
        const w = h.target.files[0];
        if (w) {
          if (w.size > 5 * 1024 * 1024) {
            d({ ...u, licenseFile: "File size must be less than 5MB" });
            return;
          }
          if (
            ![
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ].includes(w.type)
          ) {
            d({ ...u, licenseFile: "Only JPG, PNG, or PDF files are allowed" });
            return;
          }
          (c(w), u.licenseFile && d({ ...u, licenseFile: "" }));
        }
      },
      v = () => {
        const h = {};
        if (
          (r
            ? f(r) || (h.ssn = "Invalid SSN format (XXX-XX-XXXX)")
            : (h.ssn = "SSN is required"),
          i
            ? i.length < 5 &&
              (h.driversLicense = "Invalid Driver's License number")
            : (h.driversLicense = "Driver's License number is required"),
          l ||
            (h.licenseFile = "Please upload a photo of your Driver's License"),
          Object.keys(h).length > 0)
        ) {
          d(h);
          return;
        }
        n({ ssn: r, driversLicense: i, licenseFile: l });
      },
      m = () => {
        (s(""), a(""), c(null), d({}), t());
      };
    return o.jsx("div", {
      className: "verification-modal-overlay",
      onClick: m,
      children: o.jsxs("div", {
        className: "verification-modal-container",
        onClick: (h) => h.stopPropagation(),
        children: [
          o.jsx("button", {
            className: "verification-modal-close",
            onClick: m,
            children: o.jsx(Yg, {}),
          }),
          o.jsxs("div", {
            className: "verification-modal-header",
            children: [
              o.jsx("div", {
                className: "verification-icon-wrapper",
                children: o.jsx(vh, { className: "verification-icon" }),
              }),
              o.jsx("h2", { children: "Identity Verification Required" }),
              o.jsx("p", {
                children:
                  "Please provide the following information to complete your withdrawal",
              }),
            ],
          }),
          o.jsxs("div", {
            className: "verification-modal-content",
            children: [
              o.jsxs("div", {
                className: "verification-form-group",
                children: [
                  o.jsxs("label", {
                    children: [o.jsx(mh, {}), " Social Security Number (SSN)"],
                  }),
                  o.jsx("input", {
                    type: "text",
                    placeholder: "XXX-XX-XXXX",
                    value: r,
                    onChange: y,
                    maxLength: 11,
                    className: u.ssn ? "error" : "",
                  }),
                  u.ssn &&
                    o.jsx("span", { className: "error-text", children: u.ssn }),
                  o.jsx("p", {
                    className: "info-text",
                    children: "Your SSN is encrypted and securely stored",
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "verification-form-group",
                children: [
                  o.jsxs("label", {
                    children: [o.jsx(mh, {}), " Driver's License Number"],
                  }),
                  o.jsx("input", {
                    type: "text",
                    placeholder: "Enter your Driver's License number",
                    value: i,
                    onChange: g,
                    className: u.driversLicense ? "error" : "",
                  }),
                  u.driversLicense &&
                    o.jsx("span", {
                      className: "error-text",
                      children: u.driversLicense,
                    }),
                ],
              }),
              o.jsxs("div", {
                className: "verification-form-group",
                children: [
                  o.jsxs("label", {
                    children: [o.jsx(wh, {}), " Upload Driver's License Photo"],
                  }),
                  o.jsxs("div", {
                    className: "file-upload-wrapper",
                    children: [
                      o.jsx("input", {
                        type: "file",
                        id: "license-upload",
                        accept: "image/*,.pdf",
                        onChange: x,
                        className: "file-input",
                      }),
                      o.jsxs("label", {
                        htmlFor: "license-upload",
                        className: "file-upload-label",
                        children: [
                          o.jsx(wh, {}),
                          o.jsx("span", {
                            children: l
                              ? l.name
                              : "Click to upload or drag and drop",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.licenseFile &&
                    o.jsx("span", {
                      className: "error-text",
                      children: u.licenseFile,
                    }),
                  o.jsx("p", {
                    className: "info-text",
                    children: "Accepted formats: JPG, PNG, PDF (Max 5MB)",
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "verification-notice",
                children: [
                  o.jsx(vh, {}),
                  o.jsx("p", {
                    children:
                      "Your information is protected with bank-level encryption and will only be used for verification purposes.",
                  }),
                ],
              }),
            ],
          }),
          o.jsxs("div", {
            className: "verification-modal-actions",
            children: [
              o.jsx("button", {
                className: "verification-button secondary",
                onClick: m,
                children: "Cancel",
              }),
              o.jsx("button", {
                className: "verification-button primary",
                onClick: v,
                children: "Verify & Continue",
              }),
            ],
          }),
        ],
      }),
    });
  },
  qb = () => {
    const { id: e } = lr(),
      [t, n] = b.useState(""),
      [r, s] = b.useState(""),
      [i, a] = b.useState(""),
      [l, c] = b.useState(""),
      [u, d] = b.useState(""),
      [f, p] = b.useState(""),
      [y, g] = b.useState(""),
      [x, v] = b.useState(null),
      [m, h] = b.useState(!1),
      [w, j] = b.useState(!1),
      [S, C] = b.useState(!1),
      [E, R] = b.useState(!1),
      [L, N] = b.useState({ type: "success", title: "", message: "" }),
      [$, O] = b.useState(!1),
      [M, z] = b.useState(null),
      re = Ye((K) => K.persisitedReducer.user),
      ce = [
        {
          id: "wallet",
          name: "Crypto Wallet",
          route: "WALLET",
          isExpandable: !0,
          networks: [
            { id: "btc", name: "Bitcoin (BTC)", route: "BTC" },
            { id: "eth", name: "Ethereum (ETH)", route: "ETH" },
            { id: "usdt-erc20", name: "USDT (ERC20)", route: "USDT-ERC20" },
            { id: "usdt-trc20", name: "USDT (TRC20)", route: "USDT-TRC20" },
            { id: "usdt-bep20", name: "USDT (BEP20)", route: "USDT-BEP20" },
            { id: "bnb", name: "Binance Coin (BNB)", route: "BNB" },
            { id: "sol", name: "Solana (SOL)", route: "SOL" },
            { id: "xrp", name: "Ripple (XRP)", route: "XRP" },
            { id: "trx", name: "Tron (TRX)", route: "TRX" },
          ],
        },
        { id: "cashapp", name: "Cash App", route: "CASHAPP" },
        { id: "paypal", name: "PayPal", route: "PAYPAL" },
        { id: "bank", name: "Bank Transfer", route: "BANK" },
      ],
      wt = `https://mynewbrokerezebackend.onrender.com/api/requestwithdrawcode/${e}`,
      A = `https://mynewbrokerezebackend.onrender.com/api/withdraw/${e}`,
      I = (K) => {
        const he = K.target.value;
        (n(he),
          he.trim() === "" || he === "0" || he === "0.00"
            ? s("Amount is required")
            : parseFloat(he) <= 0
              ? s("Amount must be greater than 0")
              : parseFloat(he) >
                  parseFloat(re == null ? void 0 : re.accountBalance)
                ? s("Insufficient balance")
                : s(""));
      },
      H = (K) => {
        const he = K.target.value;
        (a(he), he.trim() === "" ? c("OTP is required") : c(""));
      },
      q = (K) => {
        const he = K.target.value;
        (d(he), he.trim() === "" ? p("Wallet address is required") : p(""));
      },
      te = b.useCallback((K) => {
        v((he) => (he === K ? null : K));
      }, []),
      Tt = b.useCallback((K) => {
        g(K);
      }, []),
      He = b.useCallback((K) => {
        g(K);
      }, []),
      rn = () => {
        (h(!0),
          W.post(wt)
            .then((K) => {
              (console.log(K),
                j(!0),
                N({
                  type: "success",
                  title: "OTP Sent Successfully",
                  message:
                    "An OTP has been sent to your email. Please check your inbox.",
                }),
                R(!0),
                h(!1));
            })
            .catch((K) => {
              (h(!1),
                console.log(K),
                N({
                  type: "error",
                  title: "Failed to Send OTP",
                  message: "Unable to send OTP. Please try again later.",
                }),
                R(!0));
            }));
      },
      $t = () => {
        if (!t || parseFloat(t) <= 0) {
          s("Please enter a valid amount");
          return;
        }
        if (
          parseFloat(t) > parseFloat(re == null ? void 0 : re.accountBalance)
        ) {
          s("Insufficient balance");
          return;
        }
        if (!i) {
          c("Please enter OTP");
          return;
        }
        if (re.withdrawCode !== i) {
          c("Invalid OTP");
          return;
        }
        if (!y) {
          (N({
            type: "error",
            title: "Payment Method Required",
            message: "Please select a withdrawal method to continue.",
          }),
            R(!0));
          return;
        }
        if (!u) {
          p("Please enter your wallet address/details");
          return;
        }
        O(!0);
      },
      pr = (K) => {
        (z(K), O(!1));
        const he = {
          walletAddress: u,
          amount: t,
          coin: y,
          ssn: K.ssn,
          driversLicense: K.driversLicense,
        };
        (C(!0),
          W.post(A, he)
            .then((ls) => {
              (console.log(ls.data.message),
                C(!1),
                N({
                  type: "success",
                  title: "Withdrawal Request Submitted",
                  message:
                    ls.data.message ||
                    "Your withdrawal request has been submitted successfully. It will be processed within 24-48 hours.",
                }),
                R(!0),
                setTimeout(() => {
                  window.location.reload();
                }, 2e3));
            })
            .catch((ls) => {
              var Wd, Vd;
              (C(!1),
                console.log(ls),
                N({
                  type: "error",
                  title: "Withdrawal Failed",
                  message:
                    ((Vd = (Wd = ls.response) == null ? void 0 : Wd.data) ==
                    null
                      ? void 0
                      : Vd.message) ||
                    "Withdrawal request failed. Please try again or contact support.",
                }),
                R(!0));
            }));
      },
      K0 = () =>
        y
          ? y === "BANK"
            ? "Enter: Bank Name | Account Number | Routing Number"
            : y === "CASHAPP"
              ? "Enter your Cash App tag (e.g., $YourTag)"
              : y === "PAYPAL"
                ? "Enter your PayPal email address"
                : `Enter your ${y} wallet address`
          : "Select a payment method first";
    return o.jsx(o.Fragment, {
      children: o.jsxs("div", {
        className: "WithdrawFundsBody",
        children: [
          o.jsx("h1", { children: "Withdraw Funds" }),
          o.jsxs("div", {
            className: "WithdrawFundsContent",
            children: [
              o.jsxs("div", {
                className: "WithdrawFundsLeft",
                children: [
                  o.jsxs("div", {
                    className: "WithdrawFundsBox",
                    children: [
                      o.jsx("h3", { children: "Enter Amount to Withdraw" }),
                      o.jsx("input", {
                        type: "number",
                        placeholder: "Enter Amount",
                        value: t,
                        onChange: I,
                        min: "0",
                        step: "0.01",
                      }),
                      r && o.jsx("p", { className: "error-text", children: r }),
                      o.jsxs("p", {
                        className: "info-text",
                        children: [
                          "Available Balance: $",
                          (re == null ? void 0 : re.accountBalance) || "0.00",
                        ],
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "WithdrawFundsBox",
                    children: [
                      o.jsxs("div", {
                        className: "WithdrawOTPHeader",
                        children: [
                          o.jsx("h3", { children: "Enter OTP" }),
                          o.jsxs("button", {
                            onClick: rn,
                            disabled: m,
                            className: "otp-button",
                            children: [
                              o.jsx(R3, {}),
                              m ? "Sending..." : "Request OTP",
                            ],
                          }),
                        ],
                      }),
                      o.jsx("input", {
                        type: "text",
                        placeholder: "Enter OTP",
                        value: i,
                        onChange: H,
                      }),
                      l && o.jsx("p", { className: "error-text", children: l }),
                      o.jsxs("p", {
                        className: "info-text",
                        children: [
                          "OTP will be sent to your email: ",
                          re == null ? void 0 : re.email,
                        ],
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "WithdrawFundsBox",
                    children: [
                      o.jsx("h3", { children: "Choose Withdrawal Method" }),
                      o.jsx("div", {
                        className: "WithdrawMethodsList",
                        children: ce.map((K) =>
                          o.jsx(
                            "div",
                            {
                              children: K.isExpandable
                                ? o.jsxs(o.Fragment, {
                                    children: [
                                      o.jsxs("div", {
                                        className: `WithdrawMethodItem expandable ${x === K.route ? "expanded" : ""}`,
                                        onClick: () => te(K.route),
                                        children: [
                                          o.jsx("span", {
                                            style: { flex: 1 },
                                            children: K.name,
                                          }),
                                          o.jsx("span", {
                                            className: "expand-icon",
                                            children: x === K.route ? "▼" : "▶",
                                          }),
                                        ],
                                      }),
                                      x === K.route &&
                                        o.jsx("div", {
                                          className: "WithdrawNetworkOptions",
                                          children: K.networks.map((he) =>
                                            o.jsxs(
                                              "label",
                                              {
                                                className:
                                                  "WithdrawNetworkOption",
                                                children: [
                                                  o.jsx("span", {
                                                    children: he.name,
                                                  }),
                                                  o.jsx("input", {
                                                    type: "radio",
                                                    name: "withdrawalMethod",
                                                    value: he.route,
                                                    checked: y === he.route,
                                                    onChange: () =>
                                                      He(he.route),
                                                  }),
                                                ],
                                              },
                                              he.id,
                                            ),
                                          ),
                                        }),
                                    ],
                                  })
                                : o.jsxs("div", {
                                    className: "WithdrawMethodItem",
                                    children: [
                                      o.jsx("span", {
                                        style: { flex: 1 },
                                        children: K.name,
                                      }),
                                      o.jsx("input", {
                                        type: "radio",
                                        name: "withdrawalMethod",
                                        value: K.route,
                                        checked: y === K.route,
                                        onChange: () => Tt(K.route),
                                      }),
                                    ],
                                  }),
                            },
                            K.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                  y &&
                    o.jsxs("div", {
                      className: "WithdrawFundsBox",
                      children: [
                        o.jsxs("h3", {
                          children: [
                            "Enter",
                            " ",
                            y === "BANK"
                              ? "Bank"
                              : y === "CASHAPP"
                                ? "Cash App"
                                : y === "PAYPAL"
                                  ? "PayPal"
                                  : "Wallet",
                            " ",
                            "Details",
                          ],
                        }),
                        o.jsx("textarea", {
                          placeholder: K0(),
                          value: u,
                          onChange: q,
                          rows: y === "BANK" ? 4 : 2,
                        }),
                        f &&
                          o.jsx("p", { className: "error-text", children: f }),
                        o.jsx("p", {
                          className: "info-text",
                          children:
                            y === "BANK"
                              ? "Enter your bank details in the format: Bank Name | Account Number | Routing Number"
                              : `Please enter the correct ${y} address to receive your funds`,
                        }),
                      ],
                    }),
                  o.jsx("div", {
                    className: "WithdrawFundsBox",
                    children: o.jsx("button", {
                      onClick: $t,
                      disabled: S,
                      className: "submit-button",
                      children: S
                        ? "Processing..."
                        : "Complete Withdrawal Request",
                    }),
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "WithdrawFundsRight",
                children: [
                  o.jsxs("div", {
                    className: "WithdrawSummaryCard",
                    children: [
                      o.jsx("h4", { children: "Withdrawal Summary" }),
                      o.jsxs("div", {
                        className: "summary-item",
                        children: [
                          o.jsx("span", { children: "Amount:" }),
                          o.jsxs("strong", { children: ["$", t || "0.00"] }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "summary-item",
                        children: [
                          o.jsx("span", { children: "Method:" }),
                          o.jsx("strong", { children: y || "Not selected" }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "summary-item",
                        children: [
                          o.jsx("span", { children: "Available Balance:" }),
                          o.jsxs("strong", {
                            children: [
                              "$",
                              (re == null ? void 0 : re.accountBalance) ||
                                "0.00",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "WithdrawInfoCard",
                    children: [
                      o.jsx("h4", { children: "Important Information" }),
                      o.jsxs("ul", {
                        children: [
                          o.jsx("li", {
                            children:
                              "Withdrawals are processed within 24-48 hours",
                          }),
                          o.jsx("li", {
                            children: "Minimum withdrawal amount is $10",
                          }),
                          o.jsx("li", {
                            children: "Ensure your wallet address is correct",
                          }),
                          o.jsx("li", {
                            children:
                              "OTP is required for security verification",
                          }),
                          o.jsx("li", {
                            children:
                              "Identity verification (SSN & Driver's License) required",
                          }),
                          o.jsx("li", {
                            children: "Contact support if you need assistance",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          o.jsx(Ft, {
            isOpen: E,
            onClose: () => R(!1),
            type: L.type,
            title: L.title,
            message: L.message,
          }),
          o.jsx(Vb, { isOpen: $, onClose: () => O(!1), onVerify: pr }),
        ],
      }),
    });
  },
  Kb = () => {
    const { id: e } = lr();
    Ye((d) => d.persisitedReducer.user);
    const [t, n] = b.useState([]),
      [r, s] = b.useState(!0),
      [i, a] = b.useState(null),
      l = b.useMemo(() => {
        const d = Array.isArray(t) ? t : [],
          f = d.reduce((g, x) => g + parseFloat(x.amount || 0), 0),
          p = d.length,
          y = p > 0 ? f / p : 0;
        return {
          totalProfit: f,
          totalTransactions: p,
          averageProfit: y,
          historyArray: d,
        };
      }, [t]),
      c = `https://mynewbrokerezebackend.onrender.com/api/getprofithistory/${e}`,
      u = () => {
        (s(!0),
          a(null),
          W.get(c)
            .then((d) => {
              console.log("API Response:", d.data);
              let f = d.data.data || d.data;
              (Array.isArray(f) ||
                (console.warn("API did not return an array:", f), (f = [])),
                n(f),
                s(!1));
            })
            .catch((d) => {
              (console.error("API Error:", d),
                a("Failed to load profit history"),
                n([]),
                s(!1));
            }));
      };
    return (
      b.useEffect(() => {
        e && u();
      }, [e]),
      o.jsx(o.Fragment, {
        children: o.jsxs("div", {
          className: "ProfitHistoryBody",
          children: [
            o.jsx("h1", { children: "Your ROI History" }),
            o.jsxs("div", {
              className: "ProfitHistoryStats",
              children: [
                o.jsxs("div", {
                  className: "ProfitStatCard",
                  children: [
                    o.jsx("div", {
                      className: "ProfitStatIcon",
                      children: o.jsx(My, {}),
                    }),
                    o.jsx("h4", { children: "Total Profit" }),
                    o.jsxs("h2", { children: ["$", l.totalProfit.toFixed(2)] }),
                  ],
                }),
                o.jsxs("div", {
                  className: "ProfitStatCard",
                  children: [
                    o.jsx("div", {
                      className: "ProfitStatIcon",
                      children: o.jsx(Yn, {}),
                    }),
                    o.jsx("h4", { children: "Total Transactions" }),
                    o.jsx("h2", { children: l.totalTransactions }),
                  ],
                }),
                o.jsxs("div", {
                  className: "ProfitStatCard",
                  children: [
                    o.jsx("div", {
                      className: "ProfitStatIcon",
                      children: o.jsx(Ky, {}),
                    }),
                    o.jsx("h4", { children: "Average Profit" }),
                    o.jsxs("h2", {
                      children: ["$", l.averageProfit.toFixed(2)],
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("div", {
              className: "ProfitHistoryContent",
              children: r
                ? o.jsxs("div", {
                    className: "ProfitEmpty",
                    children: [
                      o.jsx("div", { className: "loader" }),
                      o.jsx("h3", { children: "Loading profit history..." }),
                    ],
                  })
                : i
                  ? o.jsxs("div", {
                      className: "ProfitEmpty",
                      children: [
                        o.jsx(Yn, {}),
                        o.jsx("h3", { children: "Error Loading Data" }),
                        o.jsx("p", { children: i }),
                      ],
                    })
                  : l.historyArray.length === 0
                    ? o.jsxs("div", {
                        className: "ProfitEmpty",
                        children: [
                          o.jsx(Yn, {}),
                          o.jsx("h3", { children: "No Profit History Yet" }),
                          o.jsx("p", {
                            children:
                              "Your profit history will appear here once you start earning from your investments.",
                          }),
                        ],
                      })
                    : o.jsx("div", {
                        className: "ProfitHistoryTable",
                        children: o.jsxs("table", {
                          children: [
                            o.jsx("thead", {
                              children: o.jsxs("tr", {
                                children: [
                                  o.jsx("th", { children: "Plan" }),
                                  o.jsx("th", { children: "Amount" }),
                                  o.jsx("th", { children: "Type" }),
                                  o.jsx("th", { children: "Status" }),
                                  o.jsx("th", { children: "Date Created" }),
                                ],
                              }),
                            }),
                            o.jsx("tbody", {
                              children: l.historyArray.map((d, f) => {
                                var p;
                                return o.jsxs(
                                  "tr",
                                  {
                                    children: [
                                      o.jsx("td", {
                                        children: d.plan || d.planName || "N/A",
                                      }),
                                      o.jsxs("td", {
                                        className: "ProfitAmount",
                                        children: [
                                          "$",
                                          parseFloat(d.amount || 0).toFixed(2),
                                        ],
                                      }),
                                      o.jsx("td", {
                                        children: d.type || d.planType || "ROI",
                                      }),
                                      o.jsx("td", {
                                        children: o.jsx("span", {
                                          className: `ProfitStatus ${((p = d.status) == null ? void 0 : p.toLowerCase()) || "completed"}`,
                                          children: d.status || "Completed",
                                        }),
                                      }),
                                      o.jsx("td", {
                                        children: o.jsxs("div", {
                                          className: "ProfitDate",
                                          children: [
                                            o.jsx(_c, {}),
                                            d.dateCreated ||
                                              d.date ||
                                              new Date(
                                                d.createdAt,
                                              ).toLocaleDateString() ||
                                              "N/A",
                                          ],
                                        }),
                                      }),
                                    ],
                                  },
                                  f,
                                );
                              }),
                            }),
                          ],
                        }),
                      }),
            }),
          ],
        }),
      })
    );
  },
  Yb = () => {
    const { id: e } = lr();
    (Ye((S) => S.persisitedReducer.depositData),
      Ye((S) => S.persisitedReducer.withdraw));
    const [t, n] = b.useState("deposit"),
      [r, s] = b.useState([]),
      [i, a] = b.useState([]),
      [l, c] = b.useState([]),
      [u, d] = b.useState(!0),
      [f, p] = b.useState(null),
      y = `https://mynewbrokerezebackend.onrender.com/api/getalldeposit/${e}`,
      g = `https://mynewbrokerezebackend.onrender.com/api/getallwithdrawal/${e}`,
      x = `https://mynewbrokerezebackend.onrender.com/api/getalltransactions/${e}`,
      v = () => {
        W.get(y)
          .then((S) => {
            (console.log("Deposits:", S.data.data),
              s(Array.isArray(S.data.data) ? S.data.data : []));
          })
          .catch((S) => {
            (console.error("Deposit Error:", S), s([]));
          });
      },
      m = () => {
        W.get(g)
          .then((S) => {
            (console.log("Withdrawals:", S.data.data),
              a(Array.isArray(S.data.data) ? S.data.data : []));
          })
          .catch((S) => {
            (console.error("Withdrawal Error:", S), a([]));
          });
      },
      h = () => {
        W.get(x)
          .then((S) => {
            (console.log("Others:", S.data),
              c(Array.isArray(S.data) ? S.data : []));
          })
          .catch((S) => {
            (console.error("Others Error:", S), c([]));
          });
      };
    b.useEffect(() => {
      e &&
        (d(!0),
        Promise.all([v(), m(), h()])
          .then(() => d(!1))
          .catch(() => {
            (d(!1), p("Failed to load transactions"));
          }));
    }, [e]);
    const w = (S) => {
        const C = (S == null ? void 0 : S.toLowerCase()) || "";
        return C.includes("success") || C.includes("completed")
          ? "status-success"
          : C.includes("pending")
            ? "status-pending"
            : C.includes("failed") || C.includes("rejected")
              ? "status-failed"
              : "status-pending";
      },
      j = (S) =>
        o.jsxs("div", {
          className: "TransactionsEmpty",
          children: [
            S === "deposit" && o.jsx(hh, {}),
            S === "withdrawal" && o.jsx(Mc, {}),
            S === "others" && o.jsx(dh, {}),
            o.jsxs("h3", { children: ["No ", S, " transactions yet"] }),
            o.jsxs("p", {
              children: [
                "Your ",
                S,
                " history will appear here once you make transactions.",
              ],
            }),
          ],
        });
    return o.jsx(o.Fragment, {
      children: o.jsxs("div", {
        className: "TransactionsBody",
        children: [
          o.jsx("h1", { children: "Transaction Record" }),
          o.jsxs("div", {
            className: "TransactionTabs",
            children: [
              o.jsxs("button", {
                className: `TransactionTab ${t === "deposit" ? "active" : ""}`,
                onClick: () => n("deposit"),
                children: [
                  o.jsx(hh, {}),
                  o.jsx("span", { children: "Deposits" }),
                  r.length > 0 &&
                    o.jsx("span", {
                      className: "tab-badge",
                      children: r.length,
                    }),
                ],
              }),
              o.jsxs("button", {
                className: `TransactionTab ${t === "withdrawal" ? "active" : ""}`,
                onClick: () => n("withdrawal"),
                children: [
                  o.jsx(Mc, {}),
                  o.jsx("span", { children: "Withdrawals" }),
                  i.length > 0 &&
                    o.jsx("span", {
                      className: "tab-badge",
                      children: i.length,
                    }),
                ],
              }),
              o.jsxs("button", {
                className: `TransactionTab ${t === "others" ? "active" : ""}`,
                onClick: () => n("others"),
                children: [
                  o.jsx(dh, {}),
                  o.jsx("span", { children: "Others" }),
                  l.length > 0 &&
                    o.jsx("span", {
                      className: "tab-badge",
                      children: l.length,
                    }),
                ],
              }),
            ],
          }),
          o.jsx("div", {
            className: "TransactionContent",
            children: u
              ? o.jsxs("div", {
                  className: "TransactionsEmpty",
                  children: [
                    o.jsx("div", { className: "loader" }),
                    o.jsx("h3", { children: "Loading transactions..." }),
                  ],
                })
              : f
                ? o.jsxs("div", {
                    className: "TransactionsEmpty",
                    children: [
                      o.jsx("h3", { children: "Error Loading Transactions" }),
                      o.jsx("p", { children: f }),
                    ],
                  })
                : o.jsxs(o.Fragment, {
                    children: [
                      t === "deposit" &&
                        o.jsx(o.Fragment, {
                          children:
                            r.length === 0
                              ? j("deposit")
                              : o.jsx("div", {
                                  className: "TransactionTable",
                                  children: o.jsxs("table", {
                                    children: [
                                      o.jsx("thead", {
                                        children: o.jsxs("tr", {
                                          children: [
                                            o.jsx("th", { children: "Amount" }),
                                            o.jsx("th", {
                                              children: "Payment Mode",
                                            }),
                                            o.jsx("th", { children: "Status" }),
                                            o.jsx("th", { children: "Date" }),
                                          ],
                                        }),
                                      }),
                                      o.jsx("tbody", {
                                        children: r.map((S, C) =>
                                          o.jsxs(
                                            "tr",
                                            {
                                              children: [
                                                o.jsxs("td", {
                                                  className: "amount",
                                                  children: ["$", S.amount],
                                                }),
                                                o.jsx("td", {
                                                  children: S.coin,
                                                }),
                                                o.jsx("td", {
                                                  children: o.jsx("span", {
                                                    className: `status ${w(S.status)}`,
                                                    children: S.status,
                                                  }),
                                                }),
                                                o.jsx("td", {
                                                  children: S.depositDate,
                                                }),
                                              ],
                                            },
                                            C,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                        }),
                      t === "withdrawal" &&
                        o.jsx(o.Fragment, {
                          children:
                            i.length === 0
                              ? j("withdrawal")
                              : o.jsx("div", {
                                  className: "TransactionTable",
                                  children: o.jsxs("table", {
                                    children: [
                                      o.jsx("thead", {
                                        children: o.jsxs("tr", {
                                          children: [
                                            o.jsx("th", { children: "Amount" }),
                                            o.jsx("th", {
                                              children: "Wallet Address",
                                            }),
                                            o.jsx("th", { children: "Mode" }),
                                            o.jsx("th", { children: "Status" }),
                                            o.jsx("th", { children: "Date" }),
                                          ],
                                        }),
                                      }),
                                      o.jsx("tbody", {
                                        children: i.map((S, C) => {
                                          var E;
                                          return o.jsxs(
                                            "tr",
                                            {
                                              children: [
                                                o.jsxs("td", {
                                                  className: "amount",
                                                  children: ["$", S.amount],
                                                }),
                                                o.jsxs("td", {
                                                  className: "wallet-address",
                                                  children: [
                                                    (E = S.walletAddress) ==
                                                    null
                                                      ? void 0
                                                      : E.substring(0, 20),
                                                    "...",
                                                  ],
                                                }),
                                                o.jsx("td", {
                                                  children: S.coin,
                                                }),
                                                o.jsx("td", {
                                                  children: o.jsx("span", {
                                                    className: `status ${w(S.status)}`,
                                                    children: S.status,
                                                  }),
                                                }),
                                                o.jsx("td", {
                                                  children: S.withdrawDate,
                                                }),
                                              ],
                                            },
                                            C,
                                          );
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                        }),
                      t === "others" &&
                        o.jsx(o.Fragment, {
                          children:
                            l.length === 0
                              ? j("others")
                              : o.jsx("div", {
                                  className: "TransactionTable",
                                  children: o.jsxs("table", {
                                    children: [
                                      o.jsx("thead", {
                                        children: o.jsxs("tr", {
                                          children: [
                                            o.jsx("th", { children: "Amount" }),
                                            o.jsx("th", { children: "Type" }),
                                            o.jsx("th", { children: "Status" }),
                                            o.jsx("th", { children: "Date" }),
                                          ],
                                        }),
                                      }),
                                      o.jsx("tbody", {
                                        children: l.map((S, C) =>
                                          o.jsxs(
                                            "tr",
                                            {
                                              children: [
                                                o.jsxs("td", {
                                                  className: "amount",
                                                  children: ["$", S.amount],
                                                }),
                                                o.jsx("td", {
                                                  children: S.transactionType,
                                                }),
                                                o.jsx("td", {
                                                  children: o.jsx("span", {
                                                    className: `status ${w(S.status)}`,
                                                    children: S.status,
                                                  }),
                                                }),
                                                o.jsx("td", {
                                                  children: S.date,
                                                }),
                                              ],
                                            },
                                            C,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                        }),
                    ],
                  }),
          }),
        ],
      }),
    });
  },
  Xb = () => {
    const { id: e } = lr(),
      t = Ye((E) => E.persisitedReducer.user);
    console.log("Transfer component loaded", { id: e, userData: t });
    const [n, r] = b.useState(""),
      [s, i] = b.useState(""),
      [a, l] = b.useState(""),
      [c, u] = b.useState(""),
      [d, f] = b.useState(!1),
      [p, y] = b.useState(!1),
      [g, x] = b.useState({ type: "success", title: "", message: "" }),
      v = 0,
      m = (parseFloat(s) || 0) * (v / 100),
      h = (parseFloat(s) || 0) + m,
      w = (E) => {
        const R = E.target.value;
        (r(R),
          R.trim() === ""
            ? l("Recipient email or username is required")
            : l(""));
      },
      j = (E) => {
        const R = E.target.value;
        (i(R),
          R.trim() === "" || R === "0" || R === "0.00"
            ? u("Amount is required")
            : parseFloat(R) <= 0
              ? u("Amount must be greater than 0")
              : parseFloat(R) >
                  parseFloat((t == null ? void 0 : t.accountBalance) || 0)
                ? u("Insufficient balance")
                : u(""));
      },
      S = () => {
        var L, N;
        if (!n.trim()) {
          l("Recipient email or username is required");
          return;
        }
        if (!s || parseFloat(s) <= 0) {
          u("Please enter a valid amount");
          return;
        }
        if (
          parseFloat(s) >
          parseFloat((t == null ? void 0 : t.accountBalance) || 0)
        ) {
          u("Insufficient balance");
          return;
        }
        if (
          n.toLowerCase() ===
            ((L = t == null ? void 0 : t.email) == null
              ? void 0
              : L.toLowerCase()) ||
          n.toLowerCase() ===
            ((N = t == null ? void 0 : t.username) == null
              ? void 0
              : N.toLowerCase())
        ) {
          (x({
            type: "error",
            title: "Invalid Transfer",
            message: "You cannot transfer funds to yourself.",
          }),
            y(!0));
          return;
        }
        const E = `https://mynewbrokerezebackend.onrender.com/api/transferfunds/${e}`,
          R = { recipientEmail: n, amount: parseFloat(s), transferCharge: m };
        (f(!0),
          W.post(E, R)
            .then(($) => {
              (console.log($.data),
                f(!1),
                x({
                  type: "success",
                  title: "Transfer Successful",
                  message:
                    $.data.message || `Successfully transferred $${s} to ${n}`,
                }),
                y(!0),
                setTimeout(() => {
                  (r(""), i(""), window.location.reload());
                }, 2e3));
            })
            .catch(($) => {
              var O, M;
              (console.error($),
                f(!1),
                x({
                  type: "error",
                  title: "Transfer Failed",
                  message:
                    ((M = (O = $.response) == null ? void 0 : O.data) == null
                      ? void 0
                      : M.message) ||
                    "Transfer failed. Please check the recipient details and try again.",
                }),
                y(!0));
            }));
      },
      C = () => {
        (r(""), i(""), l(""), u(""));
      };
    return o.jsx(o.Fragment, {
      children: o.jsxs("div", {
        className: "TransferFundsBody",
        children: [
          o.jsx("h1", { children: "Funds Transfer" }),
          o.jsxs("div", {
            className: "TransferFundsContent",
            children: [
              o.jsxs("div", {
                className: "TransferFundsLeft",
                children: [
                  o.jsxs("div", {
                    className: "TransferBalanceCard",
                    children: [
                      o.jsx("div", {
                        className: "TransferBalanceIcon",
                        children: o.jsx(Kg, {}),
                      }),
                      o.jsxs("div", {
                        className: "TransferBalanceInfo",
                        children: [
                          o.jsxs("h3", {
                            children: [
                              "$",
                              (t == null ? void 0 : t.accountBalance) || "0.00",
                            ],
                          }),
                          o.jsx("p", { children: "Your Account Balance" }),
                        ],
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "TransferForm",
                    children: [
                      o.jsxs("div", {
                        className: "TransferFormGroup",
                        children: [
                          o.jsxs("label", {
                            children: [
                              o.jsx(Xg, {}),
                              " Recipient Email or Username ",
                              o.jsx("span", { children: "*" }),
                            ],
                          }),
                          o.jsx("input", {
                            type: "text",
                            placeholder: "Enter recipient's email or username",
                            value: n,
                            onChange: w,
                          }),
                          a && o.jsx("p", { className: "error", children: a }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "TransferFormGroup",
                        children: [
                          o.jsxs("label", {
                            children: [
                              o.jsx(Dr, {}),
                              " Amount ",
                              o.jsx("span", { children: "*" }),
                            ],
                          }),
                          o.jsx("input", {
                            type: "number",
                            placeholder:
                              "Enter the amount you want to transfer",
                            value: s,
                            onChange: j,
                            min: "0",
                            step: "0.01",
                          }),
                          c && o.jsx("p", { className: "error", children: c }),
                          o.jsxs("p", {
                            className: "info-text",
                            children: [
                              "Available Balance: $",
                              (t == null ? void 0 : t.accountBalance) || "0.00",
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "TransferChargeInfo",
                        children: [
                          o.jsxs("div", {
                            className: "ChargeItem",
                            children: [
                              o.jsx("span", { children: "Transfer Amount:" }),
                              o.jsxs("strong", {
                                children: ["$", parseFloat(s || 0).toFixed(2)],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "ChargeItem",
                            children: [
                              o.jsxs("span", {
                                children: ["Transfer Charge (", v, "%):"],
                              }),
                              o.jsxs("strong", {
                                children: ["$", m.toFixed(2)],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "ChargeItem total",
                            children: [
                              o.jsx("span", { children: "Total Deduction:" }),
                              o.jsxs("strong", {
                                children: ["$", h.toFixed(2)],
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "TransferFormActions",
                        children: [
                          o.jsx("button", {
                            className: "secondary",
                            onClick: C,
                            disabled: d,
                            children: "Reset",
                          }),
                          o.jsx("button", {
                            onClick: S,
                            disabled: d || !n || !s,
                            children: d ? "Processing..." : "Transfer Funds",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "TransferFundsRight",
                children: [
                  o.jsxs("div", {
                    className: "TransferSummaryCard",
                    children: [
                      o.jsx("div", {
                        className: "TransferSummaryIcon",
                        children: o.jsx(_y, {}),
                      }),
                      o.jsx("h4", { children: "Transfer Summary" }),
                      o.jsxs("h2", {
                        children: ["$", parseFloat(s || 0).toFixed(2)],
                      }),
                      o.jsx("p", { children: "Amount to Transfer" }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "TransferInfoCard",
                    children: [
                      o.jsx("h4", { children: "Important Information" }),
                      o.jsxs("ul", {
                        children: [
                          o.jsx("li", {
                            children: "Transfers are processed instantly",
                          }),
                          o.jsxs("li", {
                            children: ["Current transfer charge: ", v, "%"],
                          }),
                          o.jsx("li", {
                            children: "Ensure recipient details are correct",
                          }),
                          o.jsx("li", {
                            children: "Transfers cannot be reversed",
                          }),
                          o.jsx("li", {
                            children: "Minimum transfer amount is $1",
                          }),
                          o.jsx("li", {
                            children: "Contact support if you need assistance",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          o.jsx(Ft, {
            isOpen: p,
            onClose: () => y(!1),
            type: g.type,
            title: g.title,
            message: g.message,
          }),
        ],
      }),
    });
  },
  Gb = ({ data: e }) => {
    const [t, n] = b.useState((e == null ? void 0 : e.fullName) || ""),
      [r, s] = b.useState((e == null ? void 0 : e.userName) || ""),
      [i, a] = b.useState((e == null ? void 0 : e.phoneNumber) || ""),
      [l, c] = b.useState(!1),
      [u, d] = b.useState(!1),
      [f, p] = b.useState({ type: "success", title: "", message: "" }),
      y = { fullName: t, userName: r, phoneNumber: i },
      g = `https://mynewbrokerezebackend.onrender.com/api/userdata/${e == null ? void 0 : e._id}`,
      x = () => {
        if (!t.trim() && !r.trim() && !i.trim()) {
          (p({
            type: "error",
            title: "No Changes",
            message: "Please make at least one change before updating.",
          }),
            d(!0));
          return;
        }
        (c(!0),
          W.patch(g, y)
            .then((v) => {
              (c(!1),
                p({
                  type: "success",
                  title: "Profile Updated",
                  message:
                    v.data.message ||
                    "Your profile has been updated successfully.",
                }),
                d(!0),
                setTimeout(() => {
                  window.location.reload();
                }, 2e3));
            })
            .catch((v) => {
              var m, h;
              (c(!1),
                console.error(v),
                p({
                  type: "error",
                  title: "Update Failed",
                  message:
                    ((h = (m = v.response) == null ? void 0 : m.data) == null
                      ? void 0
                      : h.message) ||
                    "Failed to update profile. Please try again.",
                }),
                d(!0));
            }));
      };
    return o.jsxs(o.Fragment, {
      children: [
        o.jsxs("div", {
          className: "ProfileSection",
          children: [
            o.jsx("h2", { children: "Personal Information" }),
            o.jsxs("div", {
              className: "ProfileForm",
              children: [
                o.jsxs("div", {
                  className: "ProfileFormRow",
                  children: [
                    o.jsxs("div", {
                      className: "ProfileFormGroup",
                      children: [
                        o.jsx("label", { children: "Full Name" }),
                        o.jsx("input", {
                          type: "text",
                          placeholder: "Enter your full name",
                          value: t,
                          onChange: (v) => n(v.target.value),
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "ProfileFormGroup",
                      children: [
                        o.jsx("label", { children: "Email Address" }),
                        o.jsx("input", {
                          type: "email",
                          value: (e == null ? void 0 : e.email) || "",
                          readOnly: !0,
                          disabled: !0,
                          style: { opacity: 0.6, cursor: "not-allowed" },
                        }),
                        o.jsx("small", {
                          style: {
                            color: "var(--text-muted)",
                            fontSize: "0.85rem",
                          },
                          children: "Email cannot be changed",
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "ProfileFormRow",
                  children: [
                    o.jsxs("div", {
                      className: "ProfileFormGroup",
                      children: [
                        o.jsx("label", { children: "Username" }),
                        o.jsx("input", {
                          type: "text",
                          placeholder: "Enter your username",
                          value: r,
                          onChange: (v) => s(v.target.value),
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "ProfileFormGroup",
                      children: [
                        o.jsx("label", { children: "Phone Number" }),
                        o.jsx("input", {
                          type: "tel",
                          placeholder: "Enter your phone number",
                          value: i,
                          onChange: (v) => a(v.target.value),
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsx("div", {
                  className: "ProfileFormActions",
                  children: o.jsx("button", {
                    onClick: x,
                    disabled: l,
                    style: {
                      opacity: l ? 0.6 : 1,
                      cursor: l ? "not-allowed" : "pointer",
                    },
                    children: l ? "Updating..." : "Update Profile",
                  }),
                }),
              ],
            }),
          ],
        }),
        o.jsx(Ft, {
          isOpen: u,
          onClose: () => d(!1),
          type: f.type,
          title: f.title,
          message: f.message,
        }),
      ],
    });
  },
  Qb = ({ data: e }) => {
    const [t, n] = b.useState((e == null ? void 0 : e.bankName) || ""),
      [r, s] = b.useState((e == null ? void 0 : e.accountName) || ""),
      [i, a] = b.useState((e == null ? void 0 : e.accountNumber) || ""),
      [l, c] = b.useState((e == null ? void 0 : e.swiftCode) || ""),
      [u, d] = b.useState((e == null ? void 0 : e.bitcoinAddress) || ""),
      [f, p] = b.useState((e == null ? void 0 : e.ethereumAddress) || ""),
      [y, g] = b.useState(!1),
      [x, v] = b.useState(!1),
      [m, h] = b.useState({ type: "success", title: "", message: "" }),
      w = {
        bankName: t,
        accountName: r,
        accountNumber: i,
        swiftCode: l,
        bitcoinAddress: u,
        ethereumAddress: f,
      },
      j = `https://mynewbrokerezebackend.onrender.com/api/updatewithdrawal/${e == null ? void 0 : e._id}`,
      S = () => {
        (g(!0),
          W.patch(j, w)
            .then((C) => {
              (g(!1),
                h({
                  type: "success",
                  title: "Settings Saved",
                  message:
                    C.data.message ||
                    "Withdrawal settings updated successfully.",
                }),
                v(!0));
            })
            .catch((C) => {
              var E, R;
              (g(!1),
                console.error(C),
                h({
                  type: "error",
                  title: "Update Failed",
                  message:
                    ((R = (E = C.response) == null ? void 0 : E.data) == null
                      ? void 0
                      : R.message) || "Failed to update withdrawal settings.",
                }),
                v(!0));
            }));
      };
    return o.jsxs(o.Fragment, {
      children: [
        o.jsxs("div", {
          className: "ProfileSection",
          children: [
            o.jsx("h2", { children: "Withdrawal Settings" }),
            o.jsxs("div", {
              className: "ProfileForm",
              children: [
                o.jsx("h3", {
                  className: "section-title",
                  children: "Bank Account Details",
                }),
                o.jsxs("div", {
                  className: "ProfileFormRow",
                  children: [
                    o.jsxs("div", {
                      className: "ProfileFormGroup",
                      children: [
                        o.jsx("label", { children: "Bank Name" }),
                        o.jsx("input", {
                          type: "text",
                          placeholder: "Enter bank name",
                          value: t,
                          onChange: (C) => n(C.target.value),
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "ProfileFormGroup",
                      children: [
                        o.jsx("label", { children: "Account Name" }),
                        o.jsx("input", {
                          type: "text",
                          placeholder: "Enter account name",
                          value: r,
                          onChange: (C) => s(C.target.value),
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "ProfileFormRow",
                  children: [
                    o.jsxs("div", {
                      className: "ProfileFormGroup",
                      children: [
                        o.jsx("label", { children: "Account Number" }),
                        o.jsx("input", {
                          type: "text",
                          placeholder: "Enter account number",
                          value: i,
                          onChange: (C) => a(C.target.value),
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "ProfileFormGroup",
                      children: [
                        o.jsx("label", { children: "Swift Code" }),
                        o.jsx("input", {
                          type: "text",
                          placeholder: "Enter swift code",
                          value: l,
                          onChange: (C) => c(C.target.value),
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsx("h3", {
                  className: "section-title",
                  children: "Cryptocurrency Addresses",
                }),
                o.jsxs("div", {
                  className: "ProfileFormRow",
                  children: [
                    o.jsxs("div", {
                      className: "ProfileFormGroup",
                      children: [
                        o.jsx("label", { children: "Bitcoin (BTC) Address" }),
                        o.jsx("input", {
                          type: "text",
                          placeholder: "Enter Bitcoin address",
                          value: u,
                          onChange: (C) => d(C.target.value),
                        }),
                        o.jsx("small", {
                          style: {
                            color: "var(--text-muted)",
                            fontSize: "0.85rem",
                          },
                          children:
                            "This address will be used for BTC withdrawals",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "ProfileFormGroup",
                      children: [
                        o.jsx("label", { children: "Ethereum (ETH) Address" }),
                        o.jsx("input", {
                          type: "text",
                          placeholder: "Enter Ethereum address",
                          value: f,
                          onChange: (C) => p(C.target.value),
                        }),
                        o.jsx("small", {
                          style: {
                            color: "var(--text-muted)",
                            fontSize: "0.85rem",
                          },
                          children:
                            "This address will be used for ETH withdrawals",
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsx("div", {
                  className: "ProfileFormActions",
                  children: o.jsx("button", {
                    onClick: S,
                    disabled: y,
                    style: {
                      opacity: y ? 0.6 : 1,
                      cursor: y ? "not-allowed" : "pointer",
                    },
                    children: y ? "Saving..." : "Save Settings",
                  }),
                }),
              ],
            }),
          ],
        }),
        o.jsx(Ft, {
          isOpen: x,
          onClose: () => v(!1),
          type: m.type,
          title: m.title,
          message: m.message,
        }),
      ],
    });
  },
  Jb = ({ data: e }) => {
    const [t, n] = b.useState(""),
      [r, s] = b.useState(""),
      [i, a] = b.useState(""),
      [l, c] = b.useState(!1),
      [u, d] = b.useState(!1),
      [f, p] = b.useState(!1),
      [y, g] = b.useState(!1),
      [x, v] = b.useState(!1),
      [m, h] = b.useState({ type: "success", title: "", message: "" }),
      w = `https://mynewbrokerezebackend.onrender.com/api/updatepassword/${e == null ? void 0 : e._id}`,
      j = () => {
        if (!t || !r || !i) {
          (h({
            type: "error",
            title: "Missing Fields",
            message: "Please fill in all password fields.",
          }),
            v(!0));
          return;
        }
        if (r.length < 6) {
          (h({
            type: "error",
            title: "Weak Password",
            message: "New password must be at least 6 characters long.",
          }),
            v(!0));
          return;
        }
        if (r !== i) {
          (h({
            type: "error",
            title: "Password Mismatch",
            message: "New password and confirm password do not match.",
          }),
            v(!0));
          return;
        }
        (g(!0),
          W.patch(w, { oldPassword: t, newPassword: r })
            .then((S) => {
              (g(!1),
                h({
                  type: "success",
                  title: "Password Updated",
                  message:
                    S.data.message ||
                    "Your password has been updated successfully.",
                }),
                v(!0),
                n(""),
                s(""),
                a(""));
            })
            .catch((S) => {
              var C, E;
              (g(!1),
                console.error(S),
                h({
                  type: "error",
                  title: "Update Failed",
                  message:
                    ((E = (C = S.response) == null ? void 0 : C.data) == null
                      ? void 0
                      : E.message) ||
                    "Failed to update password. Please check your old password.",
                }),
                v(!0));
            }));
      };
    return o.jsxs(o.Fragment, {
      children: [
        o.jsxs("div", {
          className: "ProfileSection",
          children: [
            o.jsx("h2", { children: "Password & Security" }),
            o.jsxs("div", {
              className: "ProfileForm",
              children: [
                o.jsxs("div", {
                  className: "ProfileFormGroup",
                  children: [
                    o.jsx("label", { children: "Current Password" }),
                    o.jsxs("div", {
                      className: "password-input-wrapper",
                      children: [
                        o.jsx("input", {
                          type: l ? "text" : "password",
                          placeholder: "Enter your current password",
                          value: t,
                          onChange: (S) => n(S.target.value),
                        }),
                        o.jsx("button", {
                          type: "button",
                          className: "password-toggle",
                          onClick: () => c(!l),
                          children: l ? o.jsx(yl, {}) : o.jsx(xl, {}),
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "ProfileFormRow",
                  children: [
                    o.jsxs("div", {
                      className: "ProfileFormGroup",
                      children: [
                        o.jsx("label", { children: "New Password" }),
                        o.jsxs("div", {
                          className: "password-input-wrapper",
                          children: [
                            o.jsx("input", {
                              type: u ? "text" : "password",
                              placeholder: "Enter new password",
                              value: r,
                              onChange: (S) => s(S.target.value),
                            }),
                            o.jsx("button", {
                              type: "button",
                              className: "password-toggle",
                              onClick: () => d(!u),
                              children: u ? o.jsx(yl, {}) : o.jsx(xl, {}),
                            }),
                          ],
                        }),
                        o.jsx("small", {
                          style: {
                            color: "var(--text-muted)",
                            fontSize: "0.85rem",
                          },
                          children: "Minimum 6 characters",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "ProfileFormGroup",
                      children: [
                        o.jsx("label", { children: "Confirm New Password" }),
                        o.jsxs("div", {
                          className: "password-input-wrapper",
                          children: [
                            o.jsx("input", {
                              type: f ? "text" : "password",
                              placeholder: "Confirm new password",
                              value: i,
                              onChange: (S) => a(S.target.value),
                            }),
                            o.jsx("button", {
                              type: "button",
                              className: "password-toggle",
                              onClick: () => p(!f),
                              children: f ? o.jsx(yl, {}) : o.jsx(xl, {}),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsx("div", {
                  className: "ProfileFormActions",
                  children: o.jsx("button", {
                    onClick: j,
                    disabled: y,
                    style: {
                      opacity: y ? 0.6 : 1,
                      cursor: y ? "not-allowed" : "pointer",
                    },
                    children: y ? "Updating..." : "Update Password",
                  }),
                }),
              ],
            }),
          ],
        }),
        o.jsx(Ft, {
          isOpen: x,
          onClose: () => v(!1),
          type: m.type,
          title: m.title,
          message: m.message,
        }),
      ],
    });
  },
  Zb = ({ data: e }) => {
    const [t, n] = b.useState((e == null ? void 0 : e.otpOnWithdrawal) !== !1),
      [r, s] = b.useState((e == null ? void 0 : e.emailOnProfit) !== !1),
      [i, a] = b.useState((e == null ? void 0 : e.emailOnPlanExpiry) !== !1),
      [l, c] = b.useState(!1),
      [u, d] = b.useState(!1),
      [f, p] = b.useState({ type: "success", title: "", message: "" }),
      y = { otpOnWithdrawal: t, emailOnProfit: r, emailOnPlanExpiry: i },
      g = `https://mynewbrokerezebackend.onrender.com/api/updatepreferences/${e == null ? void 0 : e._id}`,
      x = () => {
        (c(!0),
          W.patch(g, y)
            .then((v) => {
              (c(!1),
                p({
                  type: "success",
                  title: "Preferences Saved",
                  message:
                    v.data.message ||
                    "Your preferences have been updated successfully.",
                }),
                d(!0));
            })
            .catch((v) => {
              var m, h;
              (c(!1),
                console.error(v),
                p({
                  type: "error",
                  title: "Update Failed",
                  message:
                    ((h = (m = v.response) == null ? void 0 : m.data) == null
                      ? void 0
                      : h.message) || "Failed to update preferences.",
                }),
                d(!0));
            }));
      };
    return o.jsxs(o.Fragment, {
      children: [
        o.jsxs("div", {
          className: "ProfileSection",
          children: [
            o.jsx("h2", { children: "Notification Preferences" }),
            o.jsxs("div", {
              className: "ProfileForm",
              children: [
                o.jsxs("div", {
                  className: "PreferenceItem",
                  children: [
                    o.jsxs("div", {
                      className: "PreferenceInfo",
                      children: [
                        o.jsx("h4", {
                          children: "OTP Verification on Withdrawal",
                        }),
                        o.jsx("p", {
                          children:
                            "Receive a confirmation OTP via email when withdrawing funds",
                        }),
                      ],
                    }),
                    o.jsx("div", {
                      className: "PreferenceToggle",
                      children: o.jsxs("label", {
                        className: "switch",
                        children: [
                          o.jsx("input", {
                            type: "checkbox",
                            checked: t,
                            onChange: (v) => n(v.target.checked),
                          }),
                          o.jsx("span", { className: "slider" }),
                        ],
                      }),
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "PreferenceItem",
                  children: [
                    o.jsxs("div", {
                      className: "PreferenceInfo",
                      children: [
                        o.jsx("h4", { children: "Profit Notifications" }),
                        o.jsx("p", {
                          children:
                            "Get notified via email when you receive profits",
                        }),
                      ],
                    }),
                    o.jsx("div", {
                      className: "PreferenceToggle",
                      children: o.jsxs("label", {
                        className: "switch",
                        children: [
                          o.jsx("input", {
                            type: "checkbox",
                            checked: r,
                            onChange: (v) => s(v.target.checked),
                          }),
                          o.jsx("span", { className: "slider" }),
                        ],
                      }),
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "PreferenceItem",
                  children: [
                    o.jsxs("div", {
                      className: "PreferenceInfo",
                      children: [
                        o.jsx("h4", { children: "Plan Expiry Notifications" }),
                        o.jsx("p", {
                          children:
                            "Receive email alerts when your investment plans are about to expire",
                        }),
                      ],
                    }),
                    o.jsx("div", {
                      className: "PreferenceToggle",
                      children: o.jsxs("label", {
                        className: "switch",
                        children: [
                          o.jsx("input", {
                            type: "checkbox",
                            checked: i,
                            onChange: (v) => a(v.target.checked),
                          }),
                          o.jsx("span", { className: "slider" }),
                        ],
                      }),
                    }),
                  ],
                }),
                o.jsx("div", {
                  className: "ProfileFormActions",
                  children: o.jsx("button", {
                    onClick: x,
                    disabled: l,
                    style: {
                      opacity: l ? 0.6 : 1,
                      cursor: l ? "not-allowed" : "pointer",
                    },
                    children: l ? "Saving..." : "Save Preferences",
                  }),
                }),
              ],
            }),
          ],
        }),
        o.jsx(Ft, {
          isOpen: u,
          onClose: () => d(!1),
          type: f.type,
          title: f.title,
          message: f.message,
        }),
      ],
    });
  },
  eS = () => {
    const [e, t] = b.useState("personal"),
      n = Ye((s) => s.persisitedReducer.user),
      r = [
        { id: "personal", label: "Personal Info", icon: o.jsx(Xg, {}) },
        { id: "withdrawal", label: "Withdrawal", icon: o.jsx(Gg, {}) },
        { id: "password", label: "Security", icon: o.jsx(Iy, {}) },
        { id: "other", label: "Preferences", icon: o.jsx(Dy, {}) },
      ];
    return o.jsx(o.Fragment, {
      children: o.jsxs("div", {
        className: "ProfileBody",
        children: [
          o.jsx("h1", { children: "Account Settings" }),
          o.jsxs("div", {
            className: "ProfileContent",
            children: [
              o.jsx("div", {
                className: "ProfileTabs",
                children: r.map((s) =>
                  o.jsxs(
                    "button",
                    {
                      className: `ProfileTab ${e === s.id ? "active" : ""}`,
                      onClick: () => t(s.id),
                      children: [s.icon, o.jsx("span", { children: s.label })],
                    },
                    s.id,
                  ),
                ),
              }),
              o.jsxs("div", {
                className: "ProfileMainContent",
                children: [
                  e === "personal" && o.jsx(Gb, { data: n }),
                  e === "withdrawal" && o.jsx(Qb, { data: n }),
                  e === "password" && o.jsx(Jb, { data: n }),
                  e === "other" && o.jsx(Zb, { data: n }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  tS = () => {
    const { id: e } = lr(),
      t = e,
      [n, r] = b.useState(!1),
      [s, i] = b.useState(null);
    console.log("namebe", t);
    const [a, l] = b.useState(0);
    cr();
    const c = Et(),
      u = Ye((M) => M.persisitedReducer.user);
    console.log("mal", s == null ? void 0 : s._id);
    const d = () => {
        r(!n);
      },
      [f, p] = b.useState(!0),
      [y, g] = b.useState(""),
      [x, v] = b.useState(!1),
      [m, h] = b.useState([]),
      w = () => {
        W.get("https://mynewbrokerezebackend.onrender.com/api/getallplan")
          .then((z) => {
            h(z.data.data);
          })
          .catch((z) => {
            console.log(z);
          });
      };
    b.useEffect(() => {
      w();
    }, []);
    const j = () => {
      a > parseInt(u.accountBalance)
        ? (p(!0), g("Insufficient fund"), v(!0))
        : (p(!1), g(""), v(!1));
    };
    b.useEffect(() => {
      j();
    }, []);
    const S = { planId: s == null ? void 0 : s._id, amount: a },
      [C, E] = b.useState({ err: !1, msg: "" }),
      [R, L] = b.useState(!1),
      N = () => {
        (E(!1), window.location.reload(), console.log("mememem"));
      },
      $ = () => {
        (L(!0), console.log(S));
        const M = `https://mynewbrokerezebackend.onrender.com/api/invest/${t}`;
        W.post(M, S)
          .then((z) => {
            (console.log(z.data.message), E({ err: !0, msg: z.data.message }));
          })
          .catch((z) => {
            (console.log(z),
              L(!1),
              E({ err: !0, msg: z.response.data.message }));
          });
      },
      O = (M) => {
        (l(M), i((z) => ({ ...z, currentInvAmt: M })));
      };
    return o.jsx(o.Fragment, {
      children: o.jsxs("div", {
        className: "TradingPlansBody",
        children: [
          o.jsx("h1", { children: "Get started with your investment" }),
          o.jsxs("div", {
            className: "TradingPlansContent",
            children: [
              o.jsxs("div", {
                className: "TradingPlansLeft",
                children: [
                  o.jsxs("div", {
                    className: "TradingPlansLeftBoxA",
                    children: [
                      o.jsxs("div", {
                        className: "TradingPlansLeftBoxAMain",
                        onClick: d,
                        children: [
                          o.jsxs("h3", {
                            children: [
                              o.jsx("span", { children: o.jsx(Ic, {}) }),
                              s !== null ? `${s.planName}` : "SELECT PACKAGE",
                            ],
                          }),
                          o.jsx("p", {
                            className: `Angle ${n ? "active" : ""}`,
                            children: o.jsx(Ly, {}),
                          }),
                        ],
                      }),
                      o.jsx("div", {
                        className: `TradingPlansLeftBoxADrop ${n ? "active" : ""}`,
                        children: m
                          ? o.jsx(o.Fragment, {
                              children:
                                m == null
                                  ? void 0
                                  : m
                                      .filter((M) =>
                                        u != null && u.notification
                                          ? !0
                                          : M.planName ===
                                            M.planName.toUpperCase(),
                                      )
                                      .map((M, z) =>
                                        o.jsx(
                                          "div",
                                          {
                                            className:
                                              "TradingPlansLeftBoxADropItem",
                                            onClick: () => {
                                              (d(), i(M));
                                            },
                                            children: o.jsxs("h3", {
                                              style: {
                                                textTransform: "uppercase",
                                              },
                                              children: [
                                                o.jsx("span", {
                                                  children: o.jsx(Ic, {}),
                                                }),
                                                M.planName,
                                              ],
                                            }),
                                          },
                                          z,
                                        ),
                                      ),
                            })
                          : "Loading...",
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "TradingPlansLeftBoxC",
                    children: [
                      o.jsx("p", { children: "Enter Your Amount" }),
                      o.jsx("input", {
                        type: "text",
                        min: 0,
                        placeholder: "0",
                        onChange: (M) => O(M.target.value),
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "TradingPlansLeftBoxD",
                    children: [
                      o.jsxs("p", {
                        children: [
                          "Available balance",
                          " ",
                          o.jsx("span", {
                            style: { color: "red" },
                            children: x ? `${y}` : null,
                          }),
                        ],
                      }),
                      o.jsx("div", {
                        className: "TradingPlansLeftBoxDDiv",
                        children: o.jsxs("div", {
                          className: "TradingPlansLeftBoxDItem",
                          children: [
                            o.jsx(Kg, { className: "IoWalletOutline" }),
                            o.jsxs("p", {
                              children: [
                                "Account Balance ",
                                o.jsxs("span", {
                                  children: [
                                    "$",
                                    u == null ? void 0 : u.accountBalance,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "TradingPlansRight",
                children: [
                  o.jsx("h3", { children: "Your Investment Details" }),
                  o.jsx("div", {
                    className: "TradingPlansRightBox",
                    children:
                      s &&
                      o.jsxs(o.Fragment, {
                        children: [
                          o.jsxs("div", {
                            className: "TradingPlansRightBoxRow1",
                            children: [
                              o.jsxs("div", {
                                className: "TradingPlansRightBoxRow1L",
                                children: [
                                  o.jsx("h5", { children: "Name of plan" }),
                                  o.jsx("p", { children: s.planName }),
                                ],
                              }),
                              o.jsxs("div", {
                                className: "TradingPlansRightBoxRow1R",
                                children: [
                                  o.jsx("h5", { children: "Plan Price" }),
                                  o.jsxs("p", {
                                    children: ["$ ", s.maximumDeposit],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "TradingPlansRightBoxRow1",
                            children: [
                              o.jsxs("div", {
                                className: "TradingPlansRightBoxRow1L",
                                children: [
                                  o.jsx("h5", { children: "Minimum Deposit" }),
                                  o.jsxs("p", {
                                    children: ["$", s.minimumDeposit],
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                className: "TradingPlansRightBoxRow1R",
                                children: [
                                  o.jsx("h5", { children: "Maximum Deposit" }),
                                  o.jsxs("p", {
                                    children: ["$", s.maximumDeposit],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "TradingPlansRightBoxRow1",
                            children: [
                              o.jsxs("div", {
                                className: "TradingPlansRightBoxRow1L",
                                children: [
                                  o.jsx("h5", { children: "Interest" }),
                                  o.jsxs("p", {
                                    children: [s.percentageInterest, "%"],
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                className: "TradingPlansRightBoxRow1L",
                                children: [
                                  o.jsx("h5", { children: "Duration" }),
                                  o.jsxs("p", {
                                    children: [s.durationDays, " Days"],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                  }),
                  o.jsxs("div", {
                    className: "TradingPlansRightBoxPay",
                    children: [
                      o.jsx("div", {
                        className: "TradingPlansRightBoxPayTop",
                        children: o.jsxs("p", {
                          children: [
                            "Payment method: ",
                            o.jsx("span", { children: "Account Balance" }),
                          ],
                        }),
                      }),
                      o.jsxs("div", {
                        className: "TradingPlansRightBoxPayDown",
                        children: [
                          o.jsxs("p", {
                            children: [
                              "Amount to invest: ",
                              o.jsxs("span", { children: ["$", a] }),
                            ],
                          }),
                          o.jsx("button", {
                            onClick: $,
                            disabled: f,
                            children: R ? "Loading..." : "Confirm & Invest",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          C.err === !0
            ? o.jsx("div", {
                className: "SuccessPaid",
                children: o.jsxs("div", {
                  className: "PayCon",
                  children: [
                    o.jsxs("h3", { children: [C.msg, " "] }),
                    C.msg === "plan not found" ||
                    C.msg ===
                      `Amount must be between ${s.minimumDeposit} and ${s.maximumDeposit}`
                      ? o.jsx("button", {
                          style: {
                            width: "50%",
                            height: "40px",
                            background: "#d0d0d0",
                            border: "none",
                            color: "#181818",
                            fontSize: "15px",
                          },
                          onClick: () => {
                            (E(!1), c(`/${e}`));
                          },
                          children: "close",
                        })
                      : o.jsx("button", {
                          onClick: N,
                          style: {
                            width: "50%",
                            height: "40px",
                            background: "#d0d0d0",
                            border: "none",
                            color: "#181818",
                            fontSize: "15px",
                          },
                          children: "ok",
                        }),
                  ],
                }),
              })
            : null,
        ],
      }),
    });
  },
  nS = () => {
    const e = Et(),
      t = Ye((v) => v.persisitedReducer.user),
      n = (t == null ? void 0 : t._id) || "",
      [r, s] = b.useState([]),
      [i, a] = b.useState(!0),
      [l, c] = b.useState(null),
      u = `https://mynewbrokerezebackend.onrender.com/api/getalluserplan/${n}`,
      d = () => {
        (a(!0),
          W.get(u)
            .then((v) => {
              var w;
              console.log("User plans:", v.data);
              const m = ((w = v.data) == null ? void 0 : w.data) ?? v.data,
                h = Array.isArray(m) ? m : [];
              (s(h), a(!1));
            })
            .catch((v) => {
              (console.error("Error fetching plans:", v),
                c("Failed to load your investment plans"),
                s([]),
                a(!1));
            }));
      };
    b.useEffect(() => {
      n && d();
    }, [n]);
    const f = Array.isArray(r) ? r : [],
      p = f.reduce((v, m) => {
        var h, w;
        return (
          v +
          parseFloat(
            ((w =
              (h = m == null ? void 0 : m.plan) == null
                ? void 0
                : h.investment) == null
              ? void 0
              : w.amount) || 0,
          )
        );
      }, 0),
      y = f.filter((v) => {
        var w, j;
        const m =
          (j =
            (w = v == null ? void 0 : v.plan) == null
              ? void 0
              : w.investment) == null
            ? void 0
            : j.status;
        if (!m) return !1;
        const h = m.toString().toLowerCase().trim();
        return (
          h === "active" ||
          h == "Active" ||
          h === "running" ||
          h === "ongoing" ||
          h === "in progress"
        );
      }).length;
    (console.log("All plans:", r), console.log("Active plans count:", y));
    const g = (v) => {
        const m = (v == null ? void 0 : v.toLowerCase()) || "";
        return m === "active"
          ? "active"
          : m === "completed"
            ? "completed"
            : "cancelled";
      },
      x = () => {
        e("/dashboard/trading-plans");
      };
    return o.jsx(o.Fragment, {
      children: o.jsxs("div", {
        className: "MyPlansBody",
        children: [
          o.jsx("h1", { children: "My Investment Plans" }),
          i
            ? o.jsxs("div", {
                className: "MyPlansEmpty",
                children: [
                  o.jsx("div", { className: "loader" }),
                  o.jsx("h3", { children: "Loading your plans..." }),
                ],
              })
            : l
              ? o.jsxs("div", {
                  className: "MyPlansEmpty",
                  children: [
                    o.jsx(Yn, {}),
                    o.jsx("h3", { children: "Error Loading Plans" }),
                    o.jsx("p", { children: l }),
                    o.jsx("button", { onClick: d, children: "Retry" }),
                  ],
                })
              : r.length === 0
                ? o.jsxs("div", {
                    className: "MyPlansEmpty",
                    children: [
                      o.jsx(Yn, {}),
                      o.jsx("h3", { children: "No Investment Plans Yet" }),
                      o.jsx("p", {
                        children:
                          "You don't have any active investment plans. Start investing today to grow your wealth!",
                      }),
                      o.jsx("button", {
                        onClick: x,
                        children: "Browse Trading Plans",
                      }),
                    ],
                  })
                : o.jsxs(o.Fragment, {
                    children: [
                      o.jsxs("div", {
                        className: "MyPlansStats",
                        children: [
                          o.jsxs("div", {
                            className: "MyPlansStatCard",
                            children: [
                              o.jsx(Dr, { className: "stat-icon" }),
                              o.jsx("h4", { children: "Total Invested" }),
                              o.jsxs("h2", { children: ["$", p.toFixed(2)] }),
                              o.jsx("p", { children: "Across all plans" }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "MyPlansStatCard",
                            children: [
                              o.jsx(Yn, { className: "stat-icon" }),
                              o.jsx("h4", { children: "Active Plans" }),
                              o.jsx("h2", { children: y }),
                              o.jsx("p", { children: "Currently running" }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "MyPlansStatCard",
                            children: [
                              o.jsx(Bc, { className: "stat-icon" }),
                              o.jsx("h4", { children: "Total Plans" }),
                              o.jsx("h2", { children: r.length }),
                              o.jsx("p", { children: "All time" }),
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "MyPlansList",
                        children: [
                          o.jsx("h2", { children: "Your Investment Plans" }),
                          o.jsx("div", {
                            className: "MyPlansGrid",
                            children: f.map((v, m) => {
                              var h, w, j, S, C, E, R, L, N, $, O, M, z;
                              return o.jsxs(
                                "div",
                                {
                                  className: "MyPlanCard",
                                  onClick: () => e("/dashboard/detail-plan"),
                                  children: [
                                    o.jsxs("div", {
                                      className: "MyPlanCardHeader",
                                      children: [
                                        o.jsx("h3", {
                                          children:
                                            ((h =
                                              v == null ? void 0 : v.plan) ==
                                            null
                                              ? void 0
                                              : h.planName) ||
                                            "Investment Plan",
                                        }),
                                        o.jsx("span", {
                                          className: `MyPlanCardStatus ${g(((j = (w = v == null ? void 0 : v.plan) == null ? void 0 : w.investment) == null ? void 0 : j.status) || "Active")}`,
                                          children:
                                            ((C =
                                              (S =
                                                v == null ? void 0 : v.plan) ==
                                              null
                                                ? void 0
                                                : S.investment) == null
                                              ? void 0
                                              : C.status) || "Active",
                                        }),
                                      ],
                                    }),
                                    o.jsxs("div", {
                                      className: "MyPlanCardBody",
                                      children: [
                                        o.jsxs("div", {
                                          className: "MyPlanCardAmount",
                                          children: [
                                            o.jsx("p", {
                                              children: "Investment Amount",
                                            }),
                                            o.jsxs("h3", {
                                              children: [
                                                "$",
                                                parseFloat(
                                                  ((R =
                                                    (E =
                                                      v == null
                                                        ? void 0
                                                        : v.plan) == null
                                                      ? void 0
                                                      : E.investment) == null
                                                    ? void 0
                                                    : R.amount) || 0,
                                                ).toFixed(2),
                                              ],
                                            }),
                                          ],
                                        }),
                                        o.jsxs("div", {
                                          className: "MyPlanCardRow",
                                          children: [
                                            o.jsx("label", { children: "ROI" }),
                                            o.jsxs("span", {
                                              children: [
                                                ((L =
                                                  v == null
                                                    ? void 0
                                                    : v.plan) == null
                                                  ? void 0
                                                  : L.rio) || "0",
                                                "%",
                                              ],
                                            }),
                                          ],
                                        }),
                                        o.jsxs("div", {
                                          className: "MyPlanCardRow",
                                          children: [
                                            o.jsx("label", {
                                              children: "Duration",
                                            }),
                                            o.jsxs("span", {
                                              children: [
                                                ((N =
                                                  v == null
                                                    ? void 0
                                                    : v.plan) == null
                                                  ? void 0
                                                  : N.durationDays) || "0",
                                                " Days",
                                              ],
                                            }),
                                          ],
                                        }),
                                        o.jsxs("div", {
                                          className: "MyPlanCardRow",
                                          children: [
                                            o.jsx("label", {
                                              children: "Start Date",
                                            }),
                                            o.jsx("span", {
                                              children:
                                                ((O =
                                                  ($ =
                                                    v == null
                                                      ? void 0
                                                      : v.plan) == null
                                                    ? void 0
                                                    : $.investment) == null
                                                  ? void 0
                                                  : O.Date) ||
                                                new Date().toLocaleDateString(),
                                            }),
                                          ],
                                        }),
                                        o.jsxs("div", {
                                          className: "MyPlanCardRow",
                                          children: [
                                            o.jsx("label", {
                                              children: "End Date",
                                            }),
                                            o.jsx("span", {
                                              children:
                                                ((z =
                                                  (M =
                                                    v == null
                                                      ? void 0
                                                      : v.plan) == null
                                                    ? void 0
                                                    : M.investment) == null
                                                  ? void 0
                                                  : z.endDate) ||
                                                "Calculating...",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    o.jsx("div", {
                                      className: "MyPlanCardFooter",
                                      children: o.jsx("button", {
                                        onClick: (re) => {
                                          (re.stopPropagation(),
                                            e("/dashboard/detail-plan"));
                                        },
                                        children: "View Details",
                                      }),
                                    }),
                                  ],
                                },
                                m,
                              );
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
        ],
      }),
    });
  },
  rS = () => {
    const { id: e } = lr(),
      n = `omega-exchange.vercel.app/?${(e == null ? void 0 : e.slice(0, 7)) || ""}`,
      [r, s] = b.useState(!1),
      [i, a] = b.useState([]),
      [l, c] = b.useState(!0),
      [u, d] = b.useState(null),
      [f, p] = b.useState(!1),
      y = `https://mynewbrokerezebackend.onrender.com/api/getreferrals/${e}`,
      g = () => {
        (c(!0),
          W.get(y)
            .then((j) => {
              (console.log("Referrals:", j.data),
                a(Array.isArray(j.data) ? j.data : []),
                c(!1));
            })
            .catch((j) => {
              (console.error("Error fetching referrals:", j),
                d("Failed to load referral data"),
                a([]),
                c(!1));
            }));
      };
    b.useEffect(() => {
      e && g();
    }, [e]);
    const x = () => {
        (s(!0), p(!0), setTimeout(() => s(!1), 3e3));
      },
      v = i.length,
      m = i.filter((j) => {
        var C;
        const S =
          ((C = j == null ? void 0 : j.status) == null
            ? void 0
            : C.toLowerCase()) || "";
        return S === "active" || S === "verified";
      }).length,
      h = i.reduce(
        (j, S) => j + parseFloat((S == null ? void 0 : S.earnings) || 0),
        0,
      ),
      w = (j) => {
        const S = (j == null ? void 0 : j.toLowerCase()) || "";
        return S === "active" || S === "verified" ? "active" : "inactive";
      };
    return o.jsxs(o.Fragment, {
      children: [
        o.jsxs("div", {
          className: "ReferralsBody",
          children: [
            o.jsx("h1", { children: "Referral Program" }),
            o.jsxs("div", {
              className: "ReferralStats",
              children: [
                o.jsxs("div", {
                  className: "ReferralStatCard",
                  children: [
                    o.jsx(jl, { className: "stat-icon" }),
                    o.jsx("h4", { children: "Total Referrals" }),
                    o.jsx("h2", { children: v }),
                    o.jsx("p", { children: "All time referrals" }),
                  ],
                }),
                o.jsxs("div", {
                  className: "ReferralStatCard",
                  children: [
                    o.jsx(zy, { className: "stat-icon" }),
                    o.jsx("h4", { children: "Active Referrals" }),
                    o.jsx("h2", { children: m }),
                    o.jsx("p", { children: "Currently active" }),
                  ],
                }),
                o.jsxs("div", {
                  className: "ReferralStatCard",
                  children: [
                    o.jsx(Dr, { className: "stat-icon" }),
                    o.jsx("h4", { children: "Total Earnings" }),
                    o.jsxs("h2", { children: ["$", h.toFixed(2)] }),
                    o.jsx("p", { children: "From referrals" }),
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              className: "ReferralLinkSection",
              children: [
                o.jsx("h3", { children: "Share Your Referral Link" }),
                o.jsx("p", {
                  children:
                    "Invite friends and earn rewards when they join and start trading",
                }),
                o.jsxs("div", {
                  className: "ReferralLinkBox",
                  children: [
                    o.jsx("input", { type: "text", value: n, readOnly: !0 }),
                    o.jsx(Bd.CopyToClipboard, {
                      text: n,
                      onCopy: x,
                      children: o.jsxs("button", {
                        className: "btn-primary",
                        children: [o.jsx(Zu, {}), r ? "Copied!" : "Copy Link"],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              className: "ReferralListSection",
              children: [
                o.jsx("h3", { children: "Your Referrals" }),
                l
                  ? o.jsxs("div", {
                      className: "ReferralEmpty",
                      children: [
                        o.jsx("div", { className: "loader" }),
                        o.jsx("h3", { children: "Loading referrals..." }),
                      ],
                    })
                  : u
                    ? o.jsxs("div", {
                        className: "ReferralEmpty",
                        children: [
                          o.jsx(jl, {}),
                          o.jsx("h3", { children: "Error Loading Referrals" }),
                          o.jsx("p", { children: u }),
                          o.jsx("button", { onClick: g, children: "Retry" }),
                        ],
                      })
                    : i.length === 0
                      ? o.jsxs("div", {
                          className: "ReferralEmpty",
                          children: [
                            o.jsx(jl, {}),
                            o.jsx("h3", { children: "No Referrals Yet" }),
                            o.jsx("p", {
                              children:
                                "Start sharing your referral link to invite friends and earn rewards!",
                            }),
                          ],
                        })
                      : o.jsx("div", {
                          className: "ReferralTable",
                          children: o.jsxs("table", {
                            children: [
                              o.jsx("thead", {
                                children: o.jsxs("tr", {
                                  children: [
                                    o.jsx("th", { children: "Name" }),
                                    o.jsx("th", { children: "Email" }),
                                    o.jsx("th", { children: "Level" }),
                                    o.jsx("th", { children: "Status" }),
                                    o.jsx("th", { children: "Earnings" }),
                                    o.jsx("th", { children: "Date Joined" }),
                                  ],
                                }),
                              }),
                              o.jsx("tbody", {
                                children: i.map((j, S) =>
                                  o.jsxs(
                                    "tr",
                                    {
                                      children: [
                                        o.jsx("td", {
                                          children:
                                            (j == null ? void 0 : j.name) ||
                                            "N/A",
                                        }),
                                        o.jsx("td", {
                                          children:
                                            (j == null ? void 0 : j.email) ||
                                            "N/A",
                                        }),
                                        o.jsx("td", {
                                          children:
                                            (j == null ? void 0 : j.level) ||
                                            "1",
                                        }),
                                        o.jsx("td", {
                                          children: o.jsx("span", {
                                            className: `ReferralStatus ${w((j == null ? void 0 : j.status) || "inactive")}`,
                                            children:
                                              (j == null ? void 0 : j.status) ||
                                              "Inactive",
                                          }),
                                        }),
                                        o.jsxs("td", {
                                          className: "amount",
                                          children: [
                                            "$",
                                            parseFloat(
                                              (j == null
                                                ? void 0
                                                : j.earnings) || 0,
                                            ).toFixed(2),
                                          ],
                                        }),
                                        o.jsx("td", {
                                          children:
                                            (j == null
                                              ? void 0
                                              : j.dateJoined) ||
                                            new Date().toLocaleDateString(),
                                        }),
                                      ],
                                    },
                                    S,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        }),
              ],
            }),
          ],
        }),
        o.jsx(Ft, {
          isOpen: f,
          onClose: () => p(!1),
          type: "success",
          title: "Link Copied!",
          message:
            "Your referral link has been copied to clipboard. Share it with your friends!",
        }),
      ],
    });
  },
  sS = () => {
    var g, x, v, m, h, w, j, S, C, E, R, L, N, $, O, M;
    const e = Et(),
      t = Ye((z) => z.persisitedReducer.singlePlan),
      [n, r] = b.useState(!1),
      [s, i] = b.useState(!1),
      [a, l] = b.useState({ type: "success", title: "", message: "" }),
      c = cr(),
      u = () => {
        r(!0);
      },
      d = () => {
        (c(L4(t)),
          r(!1),
          l({
            type: "success",
            title: "Plan Cancelled",
            message: "Your investment plan has been cancelled successfully.",
          }),
          i(!0),
          setTimeout(() => {
            e("/dashboard/my-plans");
          }, 2e3));
      },
      f = parseFloat(
        ((x =
          (g = t == null ? void 0 : t.plan) == null ? void 0 : g.investment) ==
        null
          ? void 0
          : x.amount) || 0,
      ),
      p = parseFloat(
        ((v = t == null ? void 0 : t.plan) == null
          ? void 0
          : v.percentageInterest) || 0,
      ),
      y = parseFloat(
        ((h =
          (m = t == null ? void 0 : t.plan) == null ? void 0 : m.investment) ==
        null
          ? void 0
          : h.totalDailyInterest) || 0,
      );
    return o.jsxs(o.Fragment, {
      children: [
        o.jsxs("div", {
          className: "DetailPlanBody",
          children: [
            o.jsxs("div", {
              className: "DetailPlanHeader",
              children: [
                o.jsxs("button", {
                  className: "BackButton",
                  onClick: () => e("/dashboard/my-plans"),
                  children: [
                    o.jsx(E3, {}),
                    o.jsx("span", { children: "Back to My Plans" }),
                  ],
                }),
                o.jsx("h1", { children: "Investment Plan Details" }),
              ],
            }),
            o.jsxs("div", {
              className: "DetailPlanContent",
              children: [
                o.jsxs("div", {
                  className: "DetailPlanCard DetailPlanHeaderCard",
                  children: [
                    o.jsxs("div", {
                      className: "DetailPlanHeaderInfo",
                      children: [
                        o.jsx("h2", {
                          children:
                            ((w = t == null ? void 0 : t.plan) == null
                              ? void 0
                              : w.planName) || "Investment Plan",
                        }),
                        o.jsxs("p", {
                          className: "DetailPlanSubtitle",
                          children: [
                            (j = t == null ? void 0 : t.plan) == null
                              ? void 0
                              : j.percentageInterest,
                            "% Daily ROI for",
                            " ",
                            (S = t == null ? void 0 : t.plan) == null
                              ? void 0
                              : S.durationDays,
                            " days",
                          ],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "DetailPlanHeaderActions",
                      children: [
                        o.jsx("span", {
                          className: "StatusBadge active",
                          children: "Active",
                        }),
                        o.jsx("button", {
                          className: "CancelButton",
                          onClick: u,
                          children: "Cancel Plan",
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "DetailPlanCard",
                  children: [
                    o.jsxs("h3", {
                      className: "CardTitle",
                      children: [o.jsx(Dr, {}), " Financial Summary"],
                    }),
                    o.jsxs("div", {
                      className: "FinancialSummary",
                      children: [
                        o.jsxs("div", {
                          className: "FinancialItem",
                          children: [
                            o.jsx("div", {
                              className: "FinancialIcon invested",
                              children: o.jsx(Dr, {}),
                            }),
                            o.jsxs("div", {
                              className: "FinancialInfo",
                              children: [
                                o.jsx("p", { children: "Invested Amount" }),
                                o.jsxs("h3", { children: ["$", f.toFixed(2)] }),
                              ],
                            }),
                          ],
                        }),
                        o.jsx("div", {
                          className: "FinancialDivider",
                          children: "+",
                        }),
                        o.jsxs("div", {
                          className: "FinancialItem",
                          children: [
                            o.jsx("div", {
                              className: "FinancialIcon profit",
                              children: o.jsx(Yn, {}),
                            }),
                            o.jsxs("div", {
                              className: "FinancialInfo",
                              children: [
                                o.jsx("p", { children: "Profit Earned" }),
                                o.jsxs("h3", { children: ["$", p.toFixed(2)] }),
                              ],
                            }),
                          ],
                        }),
                        o.jsx("div", {
                          className: "FinancialDivider",
                          children: "=",
                        }),
                        o.jsxs("div", {
                          className: "FinancialItem total",
                          children: [
                            o.jsx("div", {
                              className: "FinancialIcon total-icon",
                              children: o.jsx(Dr, {}),
                            }),
                            o.jsxs("div", {
                              className: "FinancialInfo",
                              children: [
                                o.jsx("p", { children: "Total Return" }),
                                o.jsxs("h3", { children: ["$", y.toFixed(2)] }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "DetailPlanGrid",
                  children: [
                    o.jsxs("div", {
                      className: "DetailPlanCard DetailInfoCard",
                      children: [
                        o.jsx("div", {
                          className: "DetailInfoIcon",
                          children: o.jsx(Bc, {}),
                        }),
                        o.jsxs("div", {
                          className: "DetailInfoContent",
                          children: [
                            o.jsx("p", { children: "Duration" }),
                            o.jsxs("h4", {
                              children: [
                                (C = t == null ? void 0 : t.plan) == null
                                  ? void 0
                                  : C.durationDays,
                                " Days",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "DetailPlanCard DetailInfoCard",
                      children: [
                        o.jsx("div", {
                          className: "DetailInfoIcon",
                          children: o.jsx(_c, {}),
                        }),
                        o.jsxs("div", {
                          className: "DetailInfoContent",
                          children: [
                            o.jsx("p", { children: "Start Date" }),
                            o.jsx("h4", {
                              children:
                                ((R =
                                  (E = t == null ? void 0 : t.plan) == null
                                    ? void 0
                                    : E.investment) == null
                                  ? void 0
                                  : R.Date) || "N/A",
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "DetailPlanCard DetailInfoCard",
                      children: [
                        o.jsx("div", {
                          className: "DetailInfoIcon",
                          children: o.jsx(_c, {}),
                        }),
                        o.jsxs("div", {
                          className: "DetailInfoContent",
                          children: [
                            o.jsx("p", { children: "End Date" }),
                            o.jsx("h4", {
                              children:
                                ((N =
                                  (L = t == null ? void 0 : t.plan) == null
                                    ? void 0
                                    : L.investment) == null
                                  ? void 0
                                  : N.endDate) || "N/A",
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "DetailPlanCard DetailInfoCard",
                      children: [
                        o.jsx("div", {
                          className: "DetailInfoIcon",
                          children: o.jsx(gh, {}),
                        }),
                        o.jsxs("div", {
                          className: "DetailInfoContent",
                          children: [
                            o.jsx("p", { children: "Minimum Return" }),
                            o.jsxs("h4", {
                              children: [
                                ($ = t == null ? void 0 : t.plan) == null
                                  ? void 0
                                  : $.minimumDeposit,
                                "%",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "DetailPlanCard DetailInfoCard",
                      children: [
                        o.jsx("div", {
                          className: "DetailInfoIcon",
                          children: o.jsx(gh, {}),
                        }),
                        o.jsxs("div", {
                          className: "DetailInfoContent",
                          children: [
                            o.jsx("p", { children: "Maximum Return" }),
                            o.jsxs("h4", {
                              children: [
                                (O = t == null ? void 0 : t.plan) == null
                                  ? void 0
                                  : O.maximumDeposit,
                                "%",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "DetailPlanCard DetailInfoCard",
                      children: [
                        o.jsx("div", {
                          className: "DetailInfoIcon",
                          children: o.jsx(Bc, {}),
                        }),
                        o.jsxs("div", {
                          className: "DetailInfoContent",
                          children: [
                            o.jsx("p", { children: "ROI Interval" }),
                            o.jsx("h4", { children: "Daily" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        n &&
          o.jsx("div", {
            className: "CustomModalOverlay",
            onClick: () => r(!1),
            children: o.jsxs("div", {
              className: "CustomModalContent",
              onClick: (z) => z.stopPropagation(),
              children: [
                o.jsx("h3", { children: "Cancel Investment Plan?" }),
                o.jsxs("p", {
                  children: [
                    "Are you sure you want to cancel the",
                    " ",
                    o.jsx("strong", {
                      children:
                        (M = t == null ? void 0 : t.plan) == null
                          ? void 0
                          : M.planName,
                    }),
                    " plan? This action cannot be undone.",
                  ],
                }),
                o.jsxs("div", {
                  className: "CustomModalActions",
                  children: [
                    o.jsx("button", {
                      className: "CustomModalButton secondary",
                      onClick: () => r(!1),
                      children: "No, Keep Plan",
                    }),
                    o.jsx("button", {
                      className: "CustomModalButton danger",
                      onClick: d,
                      children: "Yes, Cancel Plan",
                    }),
                  ],
                }),
              ],
            }),
          }),
        o.jsx(Ft, {
          isOpen: s,
          onClose: () => i(!1),
          type: a.type,
          title: a.title,
          message: a.message,
        }),
      ],
    });
  },
  oS = () =>
    o.jsx(o.Fragment, {
      children: o.jsx(jy, {
        children: o.jsxs(hy, {
          children: [
            o.jsx(ne, { path: "/", element: o.jsx(Tb, {}) }),
            o.jsx(ne, { path: "/about", element: o.jsx(Ab, {}) }),
            o.jsx(ne, { path: "/trading", element: o.jsx(Ib, {}) }),
            o.jsx(ne, { path: "/markets", element: o.jsx(Fb, {}) }),
            o.jsx(ne, { path: "/plans", element: o.jsx($b, {}) }),
            o.jsx(ne, { path: "/contact", element: o.jsx(zb, {}) }),
            o.jsx(ne, { path: "/terms", element: o.jsx(Hb, {}) }),
            o.jsx(ne, { path: "/login", element: o.jsx(Ob, {}) }),
            o.jsx(ne, { path: "/register", element: o.jsx(Lb, {}) }),
            o.jsx(ne, { path: "/forgot-password", element: o.jsx(Db, {}) }),
            o.jsx(ne, { path: "/reset-password", element: o.jsx(Mb, {}) }),
            o.jsx(ne, { path: "/verify", element: o.jsx(_b, {}) }),
            o.jsx(ne, { path: "/other", element: o.jsx(Bb, {}) }),
            o.jsxs(ne, {
              path: "/dashboard",
              element: o.jsx(pb, {}),
              children: [
                o.jsx(ne, { index: !0, element: o.jsx(Ub, {}) }),
                o.jsx(ne, { path: "deposit", element: o.jsx(Wb, {}) }),
                o.jsx(ne, { path: "withdraw", element: o.jsx(qb, {}) }),
                o.jsx(ne, { path: "profit-history", element: o.jsx(Kb, {}) }),
                o.jsx(ne, { path: "transactions", element: o.jsx(Yb, {}) }),
                o.jsx(ne, { path: "transfer-funds", element: o.jsx(Xb, {}) }),
                o.jsx(ne, { path: "profile", element: o.jsx(eS, {}) }),
                o.jsx(ne, { path: "trading-plans", element: o.jsx(tS, {}) }),
                o.jsx(ne, { path: "my-plans", element: o.jsx(nS, {}) }),
                o.jsx(ne, { path: "referrals", element: o.jsx(rS, {}) }),
                o.jsx(ne, { path: "detail-plan", element: o.jsx(sS, {}) }),
                o.jsx(ne, {
                  path: "deposit/payment/:paymentname",
                  element: o.jsx(Rb, {}),
                }),
              ],
            }),
          ],
        }),
      }),
    });
var Fd = "persist:",
  F0 = "persist/FLUSH",
  $d = "persist/REHYDRATE",
  $0 = "persist/PAUSE",
  zd = "persist/PERSIST",
  z0 = "persist/PURGE",
  H0 = "persist/REGISTER",
  iS = -1;
function ei(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ei = function (n) {
          return typeof n;
        })
      : (ei = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    ei(e)
  );
}
function mp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function aS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mp(n, !0).forEach(function (r) {
          lS(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : mp(n).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function lS(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function cS(e, t, n, r) {
  r.debug;
  var s = aS({}, n);
  return (
    e &&
      ei(e) === "object" &&
      Object.keys(e).forEach(function (i) {
        i !== "_persist" && t[i] === n[i] && (s[i] = e[i]);
      }),
    s
  );
}
function uS(e) {
  var t = e.blacklist || null,
    n = e.whitelist || null,
    r = e.transforms || [],
    s = e.throttle || 0,
    i = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Fd).concat(e.key),
    a = e.storage,
    l;
  e.serialize === !1
    ? (l = function (S) {
        return S;
      })
    : typeof e.serialize == "function"
      ? (l = e.serialize)
      : (l = dS);
  var c = e.writeFailHandler || null,
    u = {},
    d = {},
    f = [],
    p = null,
    y = null,
    g = function (S) {
      (Object.keys(S).forEach(function (C) {
        m(C) && u[C] !== S[C] && f.indexOf(C) === -1 && f.push(C);
      }),
        Object.keys(u).forEach(function (C) {
          S[C] === void 0 &&
            m(C) &&
            f.indexOf(C) === -1 &&
            u[C] !== void 0 &&
            f.push(C);
        }),
        p === null && (p = setInterval(x, s)),
        (u = S));
    };
  function x() {
    if (f.length === 0) {
      (p && clearInterval(p), (p = null));
      return;
    }
    var j = f.shift(),
      S = r.reduce(function (C, E) {
        return E.in(C, j, u);
      }, u[j]);
    if (S !== void 0)
      try {
        d[j] = l(S);
      } catch (C) {
        console.error(
          "redux-persist/createPersistoid: error serializing state",
          C,
        );
      }
    else delete d[j];
    f.length === 0 && v();
  }
  function v() {
    (Object.keys(d).forEach(function (j) {
      u[j] === void 0 && delete d[j];
    }),
      (y = a.setItem(i, l(d)).catch(h)));
  }
  function m(j) {
    return !(
      (n && n.indexOf(j) === -1 && j !== "_persist") ||
      (t && t.indexOf(j) !== -1)
    );
  }
  function h(j) {
    c && c(j);
  }
  var w = function () {
    for (; f.length !== 0; ) x();
    return y || Promise.resolve();
  };
  return { update: g, flush: w };
}
function dS(e) {
  return JSON.stringify(e);
}
function fS(e) {
  var t = e.transforms || [],
    n = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Fd).concat(e.key),
    r = e.storage;
  e.debug;
  var s;
  return (
    e.deserialize === !1
      ? (s = function (a) {
          return a;
        })
      : typeof e.deserialize == "function"
        ? (s = e.deserialize)
        : (s = hS),
    r.getItem(n).then(function (i) {
      if (i)
        try {
          var a = {},
            l = s(i);
          return (
            Object.keys(l).forEach(function (c) {
              a[c] = t.reduceRight(function (u, d) {
                return d.out(u, c, l);
              }, s(l[c]));
            }),
            a
          );
        } catch (c) {
          throw c;
        }
      else return;
    })
  );
}
function hS(e) {
  return JSON.parse(e);
}
function pS(e) {
  var t = e.storage,
    n = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Fd).concat(e.key);
  return t.removeItem(n, mS);
}
function mS(e) {}
function gp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gp(n, !0).forEach(function (r) {
          gS(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : gp(n).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function gS(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function vS(e, t) {
  if (e == null) return {};
  var n = wS(e, t),
    r,
    s;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (s = 0; s < i.length; s++)
      ((r = i[s]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]));
  }
  return n;
}
function wS(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    s,
    i;
  for (i = 0; i < r.length; i++)
    ((s = r[i]), !(t.indexOf(s) >= 0) && (n[s] = e[s]));
  return n;
}
var yS = 5e3;
function xS(e, t) {
  var n = e.version !== void 0 ? e.version : iS;
  e.debug;
  var r = e.stateReconciler === void 0 ? cS : e.stateReconciler,
    s = e.getStoredState || fS,
    i = e.timeout !== void 0 ? e.timeout : yS,
    a = null,
    l = !1,
    c = !0,
    u = function (f) {
      return (f._persist.rehydrated && a && !c && a.update(f), f);
    };
  return function (d, f) {
    var p = d || {},
      y = p._persist,
      g = vS(p, ["_persist"]),
      x = g;
    if (f.type === zd) {
      var v = !1,
        m = function (R, L) {
          v || (f.rehydrate(e.key, R, L), (v = !0));
        };
      if (
        (i &&
          setTimeout(function () {
            !v &&
              m(
                void 0,
                new Error(
                  'redux-persist: persist timed out for persist key "'.concat(
                    e.key,
                    '"',
                  ),
                ),
              );
          }, i),
        (c = !1),
        a || (a = uS(e)),
        y)
      )
        return Ht({}, t(x, f), { _persist: y });
      if (typeof f.rehydrate != "function" || typeof f.register != "function")
        throw new Error(
          "redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.",
        );
      return (
        f.register(e.key),
        s(e).then(
          function (E) {
            var R =
              e.migrate ||
              function (L, N) {
                return Promise.resolve(L);
              };
            R(E, n).then(
              function (L) {
                m(L);
              },
              function (L) {
                m(void 0, L);
              },
            );
          },
          function (E) {
            m(void 0, E);
          },
        ),
        Ht({}, t(x, f), { _persist: { version: n, rehydrated: !1 } })
      );
    } else {
      if (f.type === z0)
        return ((l = !0), f.result(pS(e)), Ht({}, t(x, f), { _persist: y }));
      if (f.type === F0)
        return (f.result(a && a.flush()), Ht({}, t(x, f), { _persist: y }));
      if (f.type === $0) c = !0;
      else if (f.type === $d) {
        if (l) return Ht({}, x, { _persist: Ht({}, y, { rehydrated: !0 }) });
        if (f.key === e.key) {
          var h = t(x, f),
            w = f.payload,
            j = r !== !1 && w !== void 0 ? r(w, d, h, e) : h,
            S = Ht({}, j, { _persist: Ht({}, y, { rehydrated: !0 }) });
          return u(S);
        }
      }
    }
    if (!y) return t(d, f);
    var C = t(x, f);
    return C === x ? d : u(Ht({}, C, { _persist: y }));
  };
}
function vp(e) {
  return SS(e) || bS(e) || jS();
}
function jS() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function bS(e) {
  if (
    Symbol.iterator in Object(e) ||
    Object.prototype.toString.call(e) === "[object Arguments]"
  )
    return Array.from(e);
}
function SS(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
    return n;
  }
}
function wp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function nu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wp(n, !0).forEach(function (r) {
          CS(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : wp(n).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function CS(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var U0 = { registry: [], bootstrapped: !1 },
  PS = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : U0,
      n = arguments.length > 1 ? arguments[1] : void 0;
    switch (n.type) {
      case H0:
        return nu({}, t, { registry: [].concat(vp(t.registry), [n.key]) });
      case $d:
        var r = t.registry.indexOf(n.key),
          s = vp(t.registry);
        return (
          s.splice(r, 1),
          nu({}, t, { registry: s, bootstrapped: s.length === 0 })
        );
      default:
        return t;
    }
  };
function kS(e, t, n) {
  var r = fd(PS, U0, void 0),
    s = function (c) {
      r.dispatch({ type: H0, key: c });
    },
    i = function (c, u, d) {
      var f = { type: $d, payload: u, err: d, key: c };
      (e.dispatch(f), r.dispatch(f));
    },
    a = nu({}, r, {
      purge: function () {
        var c = [];
        return (
          e.dispatch({
            type: z0,
            result: function (d) {
              c.push(d);
            },
          }),
          Promise.all(c)
        );
      },
      flush: function () {
        var c = [];
        return (
          e.dispatch({
            type: F0,
            result: function (d) {
              c.push(d);
            },
          }),
          Promise.all(c)
        );
      },
      pause: function () {
        e.dispatch({ type: $0 });
      },
      persist: function () {
        e.dispatch({ type: zd, register: s, rehydrate: i });
      },
    });
  return (a.persist(), a);
}
var Hd = {},
  Ud = {};
Ud.__esModule = !0;
Ud.default = RS;
function ti(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ti = function (n) {
          return typeof n;
        })
      : (ti = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    ti(e)
  );
}
function Bl() {}
var NS = { getItem: Bl, setItem: Bl, removeItem: Bl };
function ES(e) {
  if ((typeof self > "u" ? "undefined" : ti(self)) !== "object" || !(e in self))
    return !1;
  try {
    var t = self[e],
      n = "redux-persist ".concat(e, " test");
    (t.setItem(n, "test"), t.getItem(n), t.removeItem(n));
  } catch {
    return !1;
  }
  return !0;
}
function RS(e) {
  var t = "".concat(e, "Storage");
  return ES(t) ? self[t] : NS;
}
Hd.__esModule = !0;
Hd.default = OS;
var TS = AS(Ud);
function AS(e) {
  return e && e.__esModule ? e : { default: e };
}
function OS(e) {
  var t = (0, TS.default)(e);
  return {
    getItem: function (r) {
      return new Promise(function (s, i) {
        s(t.getItem(r));
      });
    },
    setItem: function (r, s) {
      return new Promise(function (i, a) {
        i(t.setItem(r, s));
      });
    },
    removeItem: function (r) {
      return new Promise(function (s, i) {
        s(t.removeItem(r));
      });
    },
  };
}
var W0 = void 0,
  LS = DS(Hd);
function DS(e) {
  return e && e.__esModule ? e : { default: e };
}
var MS = (0, LS.default)("local");
W0 = MS;
const _S = { key: "root", storage: W0 },
  BS = xS(_S, D4),
  V0 = x4({
    reducer: { persisitedReducer: BS },
    middleware: (e) => e({ serializableCheck: { ignoredActions: [zd] } }),
  });
function ni(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (ni = function (n) {
          return typeof n;
        })
      : (ni = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    ni(e)
  );
}
function IS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function FS(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r));
  }
}
function $S(e, t, n) {
  return (t && FS(e.prototype, t), e);
}
function zS(e, t) {
  return t && (ni(t) === "object" || typeof t == "function") ? t : ri(e);
}
function ru(e) {
  return (
    (ru = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    ru(e)
  );
}
function ri(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function HS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && su(e, t));
}
function su(e, t) {
  return (
    (su =
      Object.setPrototypeOf ||
      function (r, s) {
        return ((r.__proto__ = s), r);
      }),
    su(e, t)
  );
}
function si(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var q0 = (function (e) {
  HS(t, e);
  function t() {
    var n, r;
    IS(this, t);
    for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++)
      i[a] = arguments[a];
    return (
      (r = zS(this, (n = ru(t)).call.apply(n, [this].concat(i)))),
      si(ri(r), "state", { bootstrapped: !1 }),
      si(ri(r), "_unsubscribe", void 0),
      si(ri(r), "handlePersistorState", function () {
        var l = r.props.persistor,
          c = l.getState(),
          u = c.bootstrapped;
        u &&
          (r.props.onBeforeLift
            ? Promise.resolve(r.props.onBeforeLift()).finally(function () {
                return r.setState({ bootstrapped: !0 });
              })
            : r.setState({ bootstrapped: !0 }),
          r._unsubscribe && r._unsubscribe());
      }),
      r
    );
  }
  return (
    $S(t, [
      {
        key: "componentDidMount",
        value: function () {
          ((this._unsubscribe = this.props.persistor.subscribe(
            this.handlePersistorState,
          )),
            this.handlePersistorState());
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this._unsubscribe && this._unsubscribe();
        },
      },
      {
        key: "render",
        value: function () {
          return typeof this.props.children == "function"
            ? this.props.children(this.state.bootstrapped)
            : this.state.bootstrapped
              ? this.props.children
              : this.props.loading;
        },
      },
    ]),
    t
  );
})(b.PureComponent);
si(q0, "defaultProps", { children: null, loading: null });
let US = kS(V0);
const WS = Il.createRoot(document.getElementById("root"));
WS.render(
  o.jsx(Kt.StrictMode, {
    children: o.jsx($x, {
      store: V0,
      children: o.jsx(q0, {
        loading: null,
        persistor: US,
        children: o.jsx(oS, {}),
      }),
    }),
  }),
);
