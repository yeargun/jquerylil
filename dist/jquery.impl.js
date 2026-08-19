// jquery-measured.raw.js
var zn = Object.hasOwn;
var On = () => {
};
var wa = Array.prototype;
var ba = wa.flat;
var ca = wa.push;
var da = wa.slice;
var ga = wa.indexOf;
var ha = wa.splice;
var ma = wa.shift;
var va = wa.join;
var xa = wa.sort;
var ya = wa.unshift;
var pa = typeof window < "u" ? window : globalThis;
function qu(e2) {
  throw e2;
}
function Rr() {
  Ne || (Ne = true, en());
}
function Ir() {
  Ne = null;
}
function oa(e2, t2) {
  e2 = o(t2);
  et(t2, null) ? e2.show() : e2.hide();
}
function Ze(e2, t2) {
  b[e2] = { delegateType: t2, bindType: t2, handle: Pi };
}
function rr(e2, t2) {
  e2.delegateCount = t2;
}
function iu() {
  let e2 = [];
  e2.delegateCount = 0;
  return e2;
}
function It(e2) {
  return e2.delegateCount;
}
function Ot(e2) {
  return e2.replace(ui, yo);
}
function L(e2) {
  return e2.replace(ni, "ms-").replace(ri, go);
}
function mr(e2) {
  return e2;
}
function zo(e2) {
  return e2 == O;
}
function ko(e2) {
  return !_n(e2);
}
function Zt(e2) {
  return !!Cn[e2];
}
function G(e2) {
  return e2 != null && e2 === e2.window;
}
function i(e2) {
  return "function" == typeof e2 && "number" != typeof e2.nodeType && "function" != typeof e2.item;
}
function Ou(e2) {
  return 1 == (e2 && e2.nodeType);
}
function ve(e2) {
  e2 = e2 && e2.nodeType;
  e2 = +e2;
  return 1 == e2 || 9 == e2 || e2 != e2 || 0 == e2;
}
function Ao(e2) {
  return c(e2, "input") && "button" == e2.type + "" || c(e2, "button");
}
function qo(e2, t2) {
  e2 = c(e2, "input") && e2.type + "" == t2 || c(e2, "button") && e2.type + "" == t2;
  return e2;
}
function Eo(e2, t2) {
  e2 = c(e2, "input") && e2.type + "" == t2;
  return e2;
}
function wo(e2) {
  e2 = c(e2, "input") && !!e2.checked || c(e2, "option") && !!e2.selected;
  return e2;
}
function ar(e2) {
  e2 = e2.match(w);
  !e2 && (e2 = [""]);
  return e2;
}
function M(e2) {
  e2 = e2.match(w);
  e2 || (e2 = []);
  return va.call(e2, " ");
}
function ju(e2, t2) {
  if (i(e2)) {
    var n2 = ["*"], u2, o2, r2;
  } else {
    n2 = e2.match(w);
    n2 || (n2 = []);
    e2 = t2;
  }
  u2 = n2.length;
  r2 = 0;
  for (; r2 < u2; ++r2) {
    o2 = n2[r2];
    t2 = $[o2];
    t2 || (t2 = [], $[o2] = t2);
    ha.call(t2, 0, 0, e2);
  }
}
function tu(e2, t2) {
  var u2, o2, r2, i2 = P(e2), n2 = e2 ? e2.nodeType : e2;
  if (1 == n2) {
    n2 = " " + M(i2) + " ";
    u2 = t2.length;
    r2 = 0;
    for (; r2 < u2; ++r2) {
      o2 = " " + t2[r2] + " ";
      for (; n2.indexOf(o2) > -1; ) n2 = n2.replace(o2, " ");
    }
    t2 = M(n2);
    i2 != t2 && e2.setAttribute("class", t2);
  }
}
function eu(e2, t2) {
  var u2, o2, r2, i2 = P(e2), n2 = e2 ? e2.nodeType : e2;
  if (1 == n2) {
    n2 = " " + M(i2) + " ";
    u2 = t2.length;
    r2 = 0;
    for (; r2 < u2; ++r2) {
      o2 = t2[r2] + "";
      n2.indexOf(" " + o2 + " ") < 0 && (n2 = n2 + o2 + " ");
    }
    t2 = M(n2);
    i2 != t2 && e2.setAttribute("class", t2);
  }
}
function nu(e2, n2) {
  var r2 = P(e2);
  "" != r2 && p(t, e2, "__className__", r2);
  if (e2.setAttribute) {
    n2 = "" != r2 || n2 === false;
    !n2 ? (n2 = s(t, e2, "__className__"), !n2 && (n2 = ""), n2 += "") : n2 = "";
    e2.setAttribute("class", n2);
  }
}
function P(e2) {
  return !e2.getAttribute ? "" : (e2.getAttribute("class") || "") + "";
}
function ru(e2) {
  return e2 == null ? "" : e2 + "";
}
function D(e2) {
  if (e2 == null) return e2 + "";
  var t2 = typeof e2;
  return "object" == t2 || "function" == t2 ? (e2 = nn[Object.prototype.toString.call(e2)]) ? e2 : "object" : t2;
}
function V(e2) {
  var t2;
  if (!e2 || "[object Object]" != Object.prototype.toString.call(e2)) return false;
  e2 = Object.getPrototypeOf(e2);
  if (e2 == null) return true;
  t2 = null;
  zn(e2, "constructor") && (t2 = e2.constructor);
  e2 = "function" == typeof t2 && Function.prototype.toString.call(t2) == Jr;
  return e2;
}
function So(e2) {
  if (!c(e2, "input") || "text" != e2.type + "") return false;
  e2 = e2.getAttribute("type");
  return e2 == null ? true : "text" == e2.toLowerCase();
}
function lu(e2) {
  var t2 = e2.getAttribute("type") != null ? "true" : "false";
  e2.type = t2 + "/" + e2.type;
  return e2;
}
function fu(e2) {
  var t2 = e2.type || "";
  t2 += "";
  "true/" == t2.slice(0, 5) ? e2.type = t2.slice(5) : e2.removeAttribute("type");
  return e2;
}
function Oo(e2) {
  var t2 = pa.location;
  if (!t2) return false;
  t2 = t2.hash;
  if (0 == t2.length) return false;
  t2 = t2.slice(1);
  return t2 == e2.id + "";
}
function Do(e2) {
  if (e2 != n.activeElement) return false;
  var t2 = n.hasFocus;
  if (t2 && !t2.call(n)) return false;
  var r2 = !!e2.type;
  t2 = !!e2.href;
  e2 = e2.tabIndex != -1;
  r2 && (t2 = true);
  return t2 || e2;
}
function At(e2) {
  if (i(e2) || G(e2)) return false;
  var t2, n2 = D(e2);
  if (!e2 || !("length" in e2)) return "array" == n2;
  t2 = e2.length;
  e2 = "array" == n2 || 0 === t2 || "number" == typeof t2 && +t2 > 0 && +t2 - 1 in e2;
  return e2;
}
function Ar() {
  je();
  return null == Tt ? false : Tt;
}
function jr() {
  je();
  return null == Ct ? false : Ct;
}
function Cr() {
  je();
  return null == wt ? false : wt;
}
function J(e2, t2) {
  e2 = t2[e2[0]];
  return e2 === void 0 ? false : !W(e2);
}
function c(e2, t2) {
  e2 = e2 && e2.nodeName;
  return !e2 ? false : e2.toLowerCase() == t2.toLowerCase();
}
function nr(e2) {
  var t2 = se;
  return (t2 = t2[e2.type + ""]) ? t2 : se[(e2 && e2.nodeName || "").toLowerCase()];
}
function er(e2) {
  var t2 = y.attr(e2, "value");
  return t2 != null ? t2 : M(Me(e2) + "");
}
function ea(e2, t2, n2, r2) {
  return e2() ? void 0 : t2(n2, r2);
}
function Su(e2, t2, n2, r2) {
  i(r2) ? (!t2 || k(r2, e2, 0) < 0) && e2.push(r2) : r2 && !!r2.length && "string" != D(r2) && Nn(r2, e2, t2);
}
function Mn(e2, t2, n2, r2) {
  try {
    if (e2) {
      var O2 = e2.promise;
      if (i(O2)) {
        var D2 = O2.call(e2);
        D2.done(t2);
        D2.fail(n2);
        return;
      }
      O2 = e2.then;
      if (i(O2)) {
        O2.call(e2, t2, n2);
        return;
      }
    }
    r2 ? t2.call(void 0) : t2.call(void 0, e2);
  } catch (x2) {
    n2.call(void 0, x2);
  }
}
function or(e2) {
  if (e2 = Hi.exec(e2)) {
    var t2 = e2[1];
    e2 = e2[2];
    !t2 && (t2 = "");
    !e2 && (e2 = "");
  } else {
    t2 = "";
    e2 = "";
  }
  e2 = e2.split(".");
  xa.call(e2);
  return [t2, e2, va.call(e2, ".")];
}
function Hr(e2) {
  var t2 = e2.prop;
  t2 = pe[t2];
  t2 || (t2 = pe._default);
  return t2.get ? t2.get(e2) : 0;
}
function Kt(t2, n2) {
  var r2 = t2.options, i2 = r2.duration;
  !i2 || (i2 = +i2, n2 = +e.easing[t2.easing](n2, i2 * n2, 0, 1, i2));
  t2.pos = n2;
  i2 = +t2.start;
  n2 = (+t2.end - i2) * n2 + i2;
  t2.now = n2;
  r2 = r2.step;
  !r2 || r2.call(t2.elem, n2, t2);
  n2 = t2.prop;
  n2 = pe[n2];
  n2 || (n2 = pe._default);
  !n2.set || n2.set(t2);
  return t2;
}
function Mr(t2, n2, r2, i2, o2, u2, a2) {
  t2.elem = n2;
  t2.prop = i2;
  t2.options = r2;
  t2.end = o2;
  t2.pos = 0;
  u2 || (u2 = e.easing._default);
  t2.easing = u2;
  !a2 && (a2 = !e.cssNumber[i2] ? "px" : "");
  t2.unit = a2;
  n2 = Hr(t2);
  t2.start = n2;
  t2.now = n2;
}
function Mu(e2, t2, n2, r2, i2, o2, u2, a2) {
  e2 = e2.eq(u2);
  o2 && (r2[0] = i2.call(a2, u2, e2.html()));
  ie(e2, r2, t2, n2);
}
function wu(e2, t2, n2, r2, i2, o2) {
  return Pr(e2, t2, n2, r2, i2, o2);
}
function Pr(e2, t2, n2, r2, i2, o2) {
  let u2 = Object.create(Sn);
  Mr(u2, e2, t2, n2, r2, i2, o2);
  return u2;
}
function Tu(e2, t2, n2, r2, i2, o2) {
  let u2 = this;
  Mr(u2, e2, t2, n2, r2, i2, o2);
  return u2;
}
function la(e2, t2, n2, r2, i2, o2) {
  i2 = null;
  G(r2) ? i2 = r2 : 9 == r2.nodeType && (i2 = r2.defaultView);
  if (o2 === void 0) {
    return i2 ? i2[t2] : r2[e2];
  }
  i2 ? (t2 = u(i2.pageXOffset), r2 = u(i2.pageYOffset), e2 = u(o2), n2 ? i2.scrollTo(t2, e2) : i2.scrollTo(e2, r2)) : r2[e2] = o2;
}
function vr(e2, t2) {
  11 == t2.nodeType && (t2 = t2.firstChild);
  if (c(e2, "table") && c(t2, "tr")) {
    t2 = o(e2).children("tbody")[0];
    return t2 != null ? t2 : e2;
  }
  return e2;
}
function Qu(e2, t2) {
  for (; t2.firstElementChild; ) t2 = t2.firstElementChild;
  return t2;
}
function ou() {
  let t2 = +e.guid;
  e.guid = t2 + 1;
  return t2;
}
function po(e2) {
  let t2 = !!e2.once, n2 = !!e2.memory, r2 = !!e2.unique;
  return [t2, n2, r2, !!e2.stopOnFalse];
}
function Ur() {
  return U ? +U : ku();
}
function xu(e2) {
  return 0 == e2 ? 200 : 1223 == e2 ? 204 : +e2;
}
function yo(e2) {
  return ai.test(e2) ? "\0" == e2 ? "\uFFFD" : e2.slice(0, e2.length - 1) + "\\" + e2.charCodeAt(e2.length - 1).toString(16) + " " : "\\" + e2;
}
function Yn(e2) {
  if (e2.length >= 2) {
    var t2 = e2.charAt(0), n2 = e2.charAt(e2.length - 1), r2 = '"' == t2 && '"' == n2;
    if (r2 || "'" == t2 && "'" == n2) return e2.slice(1, e2.length - 1);
  }
  return e2;
}
function j(e2) {
  lt = false;
  if (yi) {
    R = null;
  } else {
    var t2 = [];
    d(t2, e2);
    R = t2;
  }
  xa.call(e2, Un);
  if (lt) {
    var i2 = [], n2 = e2[0], t2 = 0, r2 = 1;
    for (; n2; ) {
      n2 == e2[r2] && (i2.push(r2), t2 = i2.length);
      n2 = e2[r2];
      r2 += 1;
    }
    for (; t2--; ) {
      ha.call(e2, i2[t2], 1);
    }
  }
  R = null;
  return e2;
}
function Ho(e2, t2) {
  let n2 = null;
  return xe(t2, e2, n2, n2).length > 0;
}
function Vr(e2, t2) {
  let n2 = e2.stop;
  delete e2.stop;
  n2(t2);
}
function Pn(t2) {
  let n2 = on;
  on = n2 + 1;
  t2[0] = e.expando + n2;
}
function pu(e2, t2, n2) {
  if ("+" === t2[0]) {
    t2 = t2.slice(1) || "*";
    var r2 = e2[t2] || [];
    e2[t2] = r2;
    ya.call(r2, n2);
  } else {
    r2 = e2[t2] || [];
    e2[t2] = r2;
    ca.call(r2, n2);
  }
}
function Yu(e2, t2, n2) {
  i(n2) && (n2 = n2());
  n2 = n2 != null ? n2 + "" : "";
  e2.push(encodeURIComponent(t2) + "=" + encodeURIComponent(n2));
}
function Ju(e2, t2, n2) {
  t2 = o(n2);
  n2 = t2.contents();
  n2.length > 0 ? n2.wrapAll(e2) : t2.append(e2);
}
function Lu(e2, t2, n2) {
  t2 = Oe[e2];
  !t2 || (e2 = t2);
  delete n2[e2];
}
function Pe(e2, t2, n2) {
  var r2 = void 0;
  !t2 || (r2 = t2.nonce);
  Dn(e2, { nonce: r2 }, n2);
}
function Xr(e2, t2, n2) {
  var r2 = null, a2 = I(l(e2, "position", r2, r2)), c2 = o(e2);
  r2 = 0 / 0;
  var s2 = { top: r2, left: r2 };
  "static" == a2 && (e2.style.position = "relative");
  var f2 = nt.call(c2);
  r2 = null;
  var d2 = I(l(e2, "top", r2, r2)), p2 = I(l(e2, "left", r2, r2));
  ("absolute" == a2 || "fixed" == a2) && (d2 + p2).indexOf("auto") > -1 ? (a2 = tn.call(c2), r2 = u(a2.top), a2 = u(a2.left)) : (r2 = +d2, r2 != r2 && (r2 = 0), a2 = +p2, a2 != a2 && (a2 = 0));
  i(t2) && (c2 = u(f2.top), t2 = t2.call(e2, n2, { top: c2, left: u(f2.left) }));
  n2 = t2.top;
  n2 != null ? (n2 = u(n2), s2.top = n2 - u(f2.top) + r2, r2 = true) : r2 = false;
  n2 = t2.left;
  n2 != null ? (n2 = u(n2), s2.left = n2 - u(f2.left) + a2, n2 = true) : n2 = false;
  "using" in t2 ? t2.using.call(e2, s2) : (r2 && A(e2, "top", s2.top, null), n2 && A(e2, "left", s2.left, null));
}
function vu(e2, t2, n2) {
  var r2, o2, i2 = null;
  for (r2 in t2) {
    !n2 ? o2 = true : (o2 = e2.converters, o2 = !!o2[r2 + " " + n2]);
    if (o2) return r2;
    i2 && (r2 = i2);
    i2 = r2;
  }
  return i2;
}
function kr(e2, t2, n2) {
  var i2 = e2.style, o2 = {};
  for (var r2 in t2) {
    o2[r2] = i2[r2];
    i2[r2] = t2[r2];
  }
  n2 = n2.call(e2);
  for (e2 in t2) i2[e2] = o2[e2];
  return n2;
}
function hu(e2, t2, n2) {
  var o2 = e2.contents, i2 = e2.dataTypes, r2 = null, u2 = false;
  for (; "*" === i2[0]; ) {
    ma.call(i2);
    u2 || (r2 = e2.mimeType, r2 || (r2 = t2.getResponseHeader("Content-Type")), u2 = true);
  }
  if (r2) {
    for (t2 in o2) {
      u2 = o2[t2];
      if (u2 && !!u2.test(r2)) {
        ya.call(i2, t2);
        break;
      }
    }
  }
  t2 = i2[0];
  t2 in n2 || (t2 = vu(e2, n2, t2));
  if (t2) {
    t2 === i2[0] || ya.call(i2, t2);
    return n2[t2];
  }
}
function Yt(t2, n2) {
  var o2 = e.ajaxSettings.flatOptions;
  o2 || (o2 = {});
  var i2, u2, r2 = null;
  for (i2 in n2) {
    u2 = n2[i2];
    if (u2 !== void 0) {
      if (o2[i2]) {
        t2[i2] = u2;
      } else {
        r2 || (r2 = {});
        r2[i2] = u2;
      }
    }
  }
  !r2 || x(t2, r2, true);
  return t2;
}
function Ce(n2) {
  var r2, u2, a2, i2, f2, c2 = e.event.special, s2 = t[0], l2 = g[0], o2 = 0;
  for (; true; ) {
    r2 = n2[o2];
    o2 = o2 + 1 | 0;
    if (r2 === void 0) break;
    if (ve(r2)) {
      if (u2 = r2[s2]) {
        if (a2 = u2.events) {
          for (i2 in a2) {
            c2[i2] ? (f2 = null, ke(r2, i2, f2, f2, false)) : Rt(r2, i2, u2.handle);
          }
        }
        r2[s2] = void 0;
      }
      !r2[l2] || (r2[l2] = void 0);
    }
  }
}
function Ae(t2, n2, r2) {
  var u2 = mt.test(n2), o2 = t2.style;
  r2 || (r2 = Je(t2));
  var i2 = void 0;
  !r2 || (i2 = r2.getPropertyValue(n2), i2 || (i2 = r2[n2]), u2 && i2 && (i2 = i2.replace(it, "$1"), i2.length > 0 || (i2 = void 0)), "" === i2 && !me(t2) && (i2 = e.style(t2, n2)), t2 = gt.test(i2), a.pixelBoxStyles() && (t2 = false), t2 && Qi.test(n2) && (t2 = o2.width, n2 = o2.minWidth, u2 = o2.maxWidth, o2.minWidth = i2, o2.maxWidth = i2, o2.width = i2, i2 = r2.width, o2.width = t2, o2.minWidth = n2, o2.maxWidth = u2));
  return i2 !== void 0 ? i2 + "" : i2;
}
function Vu(e2, t2) {
  e2 = t2.type || "";
  e2 += "";
  var r2 = !!t2.name, i2 = !!o(t2).is(":disabled"), n2 = t2.nodeName;
  n2 = _i.test(n2);
  var u2 = $i.test(e2);
  e2 = t2.checked || !le.test(e2);
  return r2 && !i2 && n2 && !u2 && e2;
}
function cu(e2, t2) {
  var n2 = t2.nodeName.toLowerCase(), r2 = e2.type;
  "input" == n2 && le.test(r2) ? t2.checked = e2.checked : ("input" == n2 || "textarea" == n2) && (t2.defaultValue = e2.defaultValue);
}
function mu(e2) {
  var r2, i2, n2 = {}, t2 = yn.exec(e2);
  for (; t2; ) {
    r2 = t2[1].toLowerCase() + " ";
    i2 = t2[2];
    t2 = n2[r2];
    !t2 && (t2 = []);
    n2[r2] = t2;
    ca.call(t2, i2);
    t2 = yn.exec(e2);
  }
  return n2;
}
function gu(e2, t2, n2, r2) {
  var ot2 = t2, u2 = {}, l2 = da.call(e2.dataTypes);
  if (l2[1]) {
    for (t2 in e2.converters) {
      var i2 = t2.toLowerCase();
      u2[i2] = e2.converters[t2];
    }
  }
  t2 = ma.call(l2);
  var f2, a2, s2, o2 = false;
  for (; t2; ) {
    i2 = e2.responseFields[t2];
    !i2 || (n2[i2] = ot2);
    !o2 && r2 && e2.dataFilter && (i2 = e2.dataFilter, o2 = ot2, ot2 = i2(o2, e2.dataType));
    if (o2 = ma.call(l2)) {
      if ("*" !== o2) {
        if ("*" !== t2 && t2 !== o2) {
          i2 = u2[t2 + " " + o2];
          i2 || (i2 = u2["* " + o2]);
          if (!i2) {
            for (f2 in u2) {
              a2 = f2.split(" ");
              if (a2.length > 1 && a2[1] === o2) {
                s2 = t2 + " ";
                s2 = u2[s2 + a2[0]];
                s2 || (s2 = u2["* " + a2[0]]);
                if (s2) {
                  if (s2) {
                    i2 = u2[f2];
                    t2 = o2;
                  } else {
                    true != u2[f2] ? (t2 = a2[0], ya.call(l2, a2[1])) : t2 = o2;
                    i2 = s2;
                  }
                  break;
                }
              }
            }
          } else {
            t2 = o2;
          }
          if (true != i2) {
            if (i2 && !!e2.throws) {
              ot2 = i2(ot2);
            } else {
              try {
                ot2 = i2(ot2);
              } catch (Le2) {
                var ht2 = Le2;
                i2 || (e2 = "No conversion from " + t2, ht2 = e2 + (" to " + t2));
                return [1, null, ht2];
              }
            }
          }
        } else {
          t2 = o2;
        }
      }
    } else {
      t2 = o2;
    }
    o2 = true;
  }
  return [0, ot2, null];
}
function Nt(e2) {
  var t2, u2, l2, f2, c2, a2 = e2.length, s2 = [], r2 = 0, o2 = 0, i2 = "", n2 = "";
  for (; r2 < a2; ) {
    t2 = e2.charAt(r2);
    if ("" != i2) {
      n2 += t2;
      t2 == i2 && (i2 = "");
      ++r2;
      continue;
    }
    if ('"' == t2 || "'" == t2) {
      r2 += 1;
      i2 = t2;
      n2 += t2;
      continue;
    }
    if ("[" == t2) {
      r2 += 1;
      o2 = o2 + 1 | 0;
      n2 += t2;
      continue;
    }
    if ("]" == t2) {
      r2 += 1;
      o2 = o2 - 1 | 0;
      n2 += t2;
      continue;
    }
    if (":" == t2 && 0 == o2) {
      l2 = r2 + 1;
      t2 = l2;
      for (; t2 < a2; ) {
        u2 = e2.charAt(t2);
        if ("(" == u2 || ":" == u2 || "." == u2 || "#" == u2 || "[" == u2 || " " == u2) break;
        t2 = t2 + 1 | 0;
      }
      l2 = e2.slice(l2, t2);
      if (0 == l2.length) {
        r2 += 1;
        n2 += ":";
        continue;
      }
      if (t2 < a2 && "(" == e2.charAt(t2)) {
        f2 = t2 + 1 | 0;
        u2 = f2;
        t2 = 1;
        for (; u2 < a2 && t2 > 0; ) {
          c2 = e2.charAt(u2);
          "(" == c2 && (t2 = t2 + 1 | 0);
          if (")" == c2) {
            t2 = t2 - 1 | 0;
            if (0 == t2) break;
          }
          u2 = u2 + 1 | 0;
        }
        t2 = u2 + 1 | 0;
        f2 = e2.slice(f2, u2);
      } else {
        f2 = "";
      }
      u2 = l2.toLowerCase();
      _o(u2) ? s2.push([u2, f2]) : n2 += e2.slice(r2, t2);
      r2 = t2;
      continue;
    }
    r2 += 1;
    n2 += t2;
  }
  return [n2, s2];
}
function Yo(e2) {
  var t2, a2 = [], s2 = e2.length, u2 = 0, n2 = 0, r2 = 0, i2 = 0, o2 = "";
  for (; u2 < s2; ) {
    t2 = e2.charAt(u2);
    if ("" != o2) {
      t2 = t2 == o2 ? "" : o2;
      u2 += 1;
      o2 = t2;
      continue;
    }
    if ('"' == t2 || "'" == t2) {
      u2 += 1;
      o2 = t2;
      continue;
    }
    if ("(" == t2) {
      r2 = r2 + 1 | 0;
      t2 = o2;
      u2 += 1;
      o2 = t2;
      continue;
    }
    if (")" == t2) {
      r2 = r2 - 1 | 0;
      t2 = o2;
      u2 += 1;
      o2 = t2;
      continue;
    }
    if ("[" == t2) {
      i2 = i2 + 1 | 0;
      t2 = o2;
      u2 += 1;
      o2 = t2;
      continue;
    }
    if ("]" == t2) {
      i2 = i2 - 1 | 0;
      t2 = o2;
      u2 += 1;
      o2 = t2;
      continue;
    }
    "," == t2 && 0 == r2 && 0 == i2 && (a2.push(e2.slice(n2, u2).replace(it, "$1")), n2 = u2 + 1);
    t2 = o2;
    u2 += 1;
    o2 = t2;
  }
  a2.push(e2.slice(n2, s2).replace(it, "$1"));
  return a2;
}
function Go(e2) {
  var t2, a2, s2 = e2.length, n2 = 0, o2 = 0, u2 = 0, i2 = "", r2 = 0;
  for (; n2 < s2; ) {
    t2 = e2.charAt(n2);
    if ("" != i2) {
      t2 == i2 && (i2 = "");
      ++n2;
      continue;
    }
    if ('"' == t2 || "'" == t2) {
      n2 += 1;
      i2 = t2;
      continue;
    }
    if ("(" == t2) {
      n2 += 1;
      o2 = o2 + 1 | 0;
      continue;
    }
    if (")" == t2) {
      n2 += 1;
      o2 = o2 - 1 | 0;
      continue;
    }
    if ("[" == t2) {
      n2 += 1;
      u2 = u2 + 1 | 0;
      continue;
    }
    if ("]" == t2) {
      n2 += 1;
      u2 = u2 - 1 | 0;
      continue;
    }
    if (0 == o2 && 0 == u2) {
      if (">" == t2 || "+" == t2 || "~" == t2 || " " == t2 || "	" == t2 || "\n" == t2 || "\r" == t2 || "\f" == t2) {
        a2 = n2;
        for (; a2 < s2; ) {
          t2 = e2.charAt(a2);
          t2 = ">" == t2 || "+" == t2 || "~" == t2 || " " == t2 || "	" == t2 || "\n" == t2 || "\r" == t2 || "\f" == t2;
          if (!t2) break;
          a2 = a2 + 1 | 0;
        }
        if (Nt(e2.slice(r2, n2))[1].length > 0) return r2;
        n2 = a2;
        r2 = a2;
        continue;
      }
    }
    ++n2;
  }
  return Nt(e2.slice(r2, s2))[1].length > 0 ? r2 : -1;
}
function Vo(e2, t2, n2) {
  var s2 = Go(e2);
  if (s2 < 0) return [];
  var r2, l2 = e2.length, a2 = s2, i2 = 0, o2 = 0, u2 = "";
  for (; ; ) {
    if (a2 >= l2) {
      a2 = l2;
      break;
    }
    r2 = e2.charAt(a2);
    if ("" != u2) {
      r2 = r2 == u2 ? "" : u2;
      a2 = a2 + 1 | 0;
      u2 = r2;
      continue;
    }
    if ('"' == r2 || "'" == r2) {
      a2 = a2 + 1 | 0;
      u2 = r2;
      continue;
    }
    if ("(" == r2) {
      i2 = i2 + 1 | 0;
      r2 = u2;
      a2 = a2 + 1 | 0;
      u2 = r2;
      continue;
    }
    if (")" == r2) {
      i2 = i2 - 1 | 0;
      r2 = u2;
      a2 = a2 + 1 | 0;
      u2 = r2;
      continue;
    }
    if ("[" == r2) {
      o2 = o2 + 1 | 0;
      r2 = u2;
      a2 = a2 + 1 | 0;
      u2 = r2;
      continue;
    }
    if ("]" == r2) {
      o2 = o2 - 1 | 0;
      r2 = u2;
      a2 = a2 + 1 | 0;
      u2 = r2;
      continue;
    }
    if (0 == i2 && 0 == o2) {
      if (">" == r2 || "+" == r2 || "~" == r2 || " " == r2 || "	" == r2 || "\n" == r2 || "\r" == r2 || "\f" == r2) break;
    }
    r2 = u2;
    a2 = a2 + 1 | 0;
    u2 = r2;
  }
  i2 = e2.slice(0, s2);
  o2 = e2.slice(a2, l2);
  r2 = Nt(e2.slice(s2, a2));
  if (0 == r2[1].length) return [];
  e2 = r2[0];
  0 == e2.length && (e2 = "*");
  i2 += e2;
  n2 ? e2 = ye(i2, t2, n2) : (e2 = Gn(t2, i2), e2 == null && (e2 = ye(i2, t2, null)));
  if (e2 == null) return [];
  e2 = $o(e2, r2[1]);
  if (0 == o2.length) return e2;
  t2 = [];
  r2 = e2.length;
  n2 = 0;
  for (; n2 < r2; ++n2) d(t2, Vn(o2, e2[n2], null));
  r2 > 1 && j(t2);
  return t2;
}
function r(e2, t2) {
  if (At(e2)) {
    var i2, r2 = e2.length, n2 = 0;
    for (; n2 < r2; ++n2) {
      i2 = e2[n2];
      if (t2.call(i2, n2, e2[n2]) === false) break;
    }
  } else {
    for (n2 in e2) {
      r2 = e2[n2];
      if (t2.call(r2, n2, e2[n2]) === false) break;
    }
  }
  return e2;
}
function E(e2, t2, n2) {
  var i2 = [];
  if (At(e2)) {
    var o2, u2 = e2.length, r2 = 0;
    for (; r2 < u2; ++r2) {
      o2 = t2(e2[r2], r2, n2);
      o2 == null || ca.call(i2, o2);
    }
  } else {
    for (r2 in e2) {
      r2 = t2(e2[r2], r2, n2);
      r2 == null || ca.call(i2, r2);
    }
  }
  return ba.call(i2);
}
function Dt(e2, n2) {
  var o2, i2 = e2.length, r2 = 0;
  for (; r2 < i2; ++r2) {
    o2 = n2 ? s(t, n2[r2], "globalEval") : true;
    p(t, e2[r2], "globalEval", o2);
  }
}
function Du(e2, t2, n2) {
  var i2 = e2.length, t2 = false, r2 = 0;
  for (; r2 < i2; ++r2) {
    if (t2) continue;
    ee(e2[r2], n2) && (t2 = true);
  }
  return t2;
}
function Kn(e2) {
  var o2, n2 = this, r2 = " " + e2 + " ", i2 = n2.length, t2 = 0;
  for (; t2 < i2; ++t2) {
    e2 = n2[t2];
    o2 = e2 ? e2.nodeType : e2;
    if (1 == o2 && (" " + M(P(e2)) + " ").indexOf(r2) > -1) return true;
  }
  return false;
}
function Io(e2) {
  var n2 = [], r2 = e2.length, t2 = 0;
  for (; t2 < r2; t2 += 2) n2.push(e2[t2]);
  return n2;
}
function Fo(e2) {
  var n2 = [], r2 = e2.length, t2 = 1;
  for (; t2 < r2; t2 += 2) n2.push(e2[t2]);
  return n2;
}
function Lt(e2, t2) {
  var n2 = e2.length;
  t2 < 0 && (t2 = t2 + n2);
  var r2 = [];
  t2 >= 0 && t2 < n2 && r2.push(e2[t2]);
  return r2;
}
function Bo(e2, t2) {
  var n2 = e2.length;
  t2 < 0 && (t2 = t2 + n2);
  var r2 = [];
  t2 += 1;
  for (; t2 < n2; ++t2) r2.push(e2[t2]);
  return r2;
}
function Ro(e2, t2) {
  var n2 = e2.length;
  t2 < 0 ? t2 = t2 + n2 : t2 > n2 && (t2 = n2);
  var r2 = [];
  n2 = 0;
  for (; n2 < t2; ++n2) r2.push(e2[n2]);
  return r2;
}
function f(e2, t2, n2) {
  var r2 = [], i2 = e2.length, o2 = !n2;
  n2 = 0;
  for (; n2 < i2; ++n2) !t2(e2[n2], n2) != o2 && ca.call(r2, e2[n2]);
  return r2;
}
function Ln(e2, t2) {
  var r2 = [], i2 = e2.length, n2 = 0;
  for (; n2 < i2; ++n2) (n2 | 0) % 2 == t2 && ca.call(r2, e2[n2]);
  return e2.pushStack(r2);
}
function xo(e2) {
  var t2, r2, i2 = e2.length, n2 = 0;
  for (; n2 < i2; ++n2) {
    t2 = e2[n2];
    !t2 || (r2 = t2.parentNode, !r2 || r2.removeChild(t2));
  }
}
function $o(e2, t2) {
  var r2, i2 = t2.length, n2 = 0;
  for (; n2 < i2; ++n2) {
    r2 = t2[n2];
    e2 = Uo(e2, r2[0], r2[1]);
  }
  return e2;
}
function d(e2, t2) {
  var i2 = t2.length | 0, n2 = e2.length | 0, r2 = 0;
  for (; r2 < i2; ++r2) {
    e2[n2] = t2[r2];
    n2 = n2 + 1 | 0;
  }
  e2.length = n2;
  return e2;
}
function ue(e2, n2) {
  var i2, u2, a2, l2 = e2.length | 0, o2 = [], r2 = 0;
  for (; r2 < l2; ++r2) {
    i2 = e2[r2];
    u2 = i2.style;
    if (!u2) continue;
    a2 = u2.display + "";
    n2 ? ("none" == a2 && (a2 = s(t, i2, "display"), a2 || (a2 = null), o2[r2] = a2, a2 || (u2.display = "")), "" === u2.display && et(i2, null) && (o2[r2] = bu(i2))) : "none" != a2 && (o2[r2] = "none", p(t, i2, "display", a2));
  }
  n2 = 0;
  for (; n2 < l2; ++n2) {
    r2 = o2[n2];
    r2 == null || (e2[n2].style.display = r2);
  }
  return e2;
}
function hr(e2, n2) {
  if (1 != n2.nodeType) return;
  if (J(t, e2)) {
    var r2 = s(t, e2, null).events;
    if (r2) {
      z(t, n2, "handle events");
      for (var i2 in r2) {
        var o2 = r2[i2];
        if (!o2) continue;
        var a2, l2 = o2.length | 0, u2 = 0;
        for (; u2 < l2; ++u2) {
          a2 = null;
          Te(n2, i2, o2[u2], a2, a2, false);
        }
      }
    }
  }
  J(g, e2) && (r2 = null, p(g, n2, x({}, N(g, e2, r2, r2), false), r2));
}
function ur(e2, n2) {
  if (!J(t, e2)) return null;
  e2 = s(t, e2, null).events;
  return !e2 ? null : Ge(e2[n2]);
}
function $r(e2, t2, n2, r2) {
  if (!e2) return null;
  var o2, u2 = e2.length, i2 = 0;
  for (; i2 < u2; ++i2) {
    if (o2 = e2[i2].call(t2, n2, r2)) return o2;
  }
  return null;
}
function Ue(e2, t2) {
  if (!t2) return null;
  var n2 = e2 && e2.nodeType;
  t2 = t2.match(w);
  if (t2 && 1 == n2) {
    var r2 = t2.length;
    n2 = 0;
    for (; n2 < r2; ++n2) e2.removeAttribute(t2[n2] + "");
  }
  return null;
}
function Nu(e2, t2, n2, r2, i2, u2) {
  if (r2) {
    r2 = Pt(e2);
    e2 = o(u2);
    i2 = r2.length;
    n2 = 0;
    for (; n2 < i2; ++n2) {
      t2 = r2[n2] + "";
      Kn.call(e2, t2) ? _e(e2, t2, 1) : $e.call(e2, t2);
    }
  } else {
    (e2 === void 0 || "boolean" == n2) && nu(u2, e2);
  }
}
function $u(e2, t2) {
  if (t2 === void 0) {
    e2 = e2[0];
    return !e2 ? void 0 : 1 == e2.nodeType ? e2.innerHTML : void 0;
  }
  if ("string" == typeof t2) {
    if (!Fi.test(t2)) {
      var n2 = an.exec(t2);
      n2 = n2 ? (n2[1] || "").toLowerCase() : "";
      n2 = !(Fn(n2)[0] > 0);
    } else {
      n2 = false;
    }
    var r2 = t2, i2;
  } else {
    n2 = false;
    r2 = "";
  }
  if (n2) {
    r2 = mr(r2) + "";
    i2 = e2.length;
    n2 = 0;
    for (; n2 < i2; ++n2) {
      t2 = e2[n2];
      !t2 || 1 == t2.nodeType && (Ce(h(t2, false)), t2.innerHTML = r2);
    }
  } else {
    e2.empty();
    e2.append(t2);
  }
}
function In(e2, t2, n2) {
  if (n2 === void 0 && 1 == (e2 && e2.nodeType)) {
    n2 = e2.getAttribute("data-" + t2.replace(oi, "-$&").toLowerCase());
    if ("string" == typeof n2) {
      n2 = mo(n2);
      p(g, e2, t2, n2);
      return n2;
    }
    return;
  }
  return n2;
}
function Lo(e2, t2) {
  var o2, i2 = Yn(t2).toLowerCase(), n2 = false, r2 = false;
  for (; e2 && !r2; ) {
    Z(e2) ? (t2 = e2.getAttribute("xml:lang"), t2 == null && (t2 = e2.getAttribute("lang"))) : t2 = e2.lang;
    t2 != null && t2 ? (t2 = t2.toLowerCase(), n2 = t2 == i2 || 0 == t2.indexOf(i2 + "-"), r2 = true) : (t2 = e2.parentNode, o2 = t2 && 1 == t2.nodeType, t2 && o2 ? e2 = t2 : r2 = true);
  }
  return n2;
}
function Gn(t2, n2) {
  if (/^[\x20\t\r\n\f]*[>+~]/.test(n2)) {
    if (1 == t2.nodeType) {
      var i2, o2, r2 = t2.getAttribute("id");
      "string" == typeof r2 && r2.length > 0 ? (r2 = Ot(r2), i2 = false) : (r2 = e.expando + "", t2.setAttribute("id", r2), r2 = Ot(r2), i2 = true);
      r2 = "#" + r2 + " " + n2;
      n2 = t2.ownerDocument;
      n2 || (n2 = t2);
      try {
        var oe2 = [];
        o2 = oe2;
        d(o2, n2.querySelectorAll(r2));
        i2 && t2.removeAttribute("id");
        return oe2;
      } catch {
        i2 && t2.removeAttribute("id");
        return null;
      }
    }
  }
  return ye(n2, t2, null);
}
function h(e2, t2) {
  var n2, i2 = "string" == typeof t2, r2 = i2 ? t2.length > 0 ? t2 : "*" : "*";
  n2 = [];
  e2.getElementsByTagName ? n2 = e2.getElementsByTagName(r2) : !e2.querySelectorAll || (n2 = e2.querySelectorAll(r2));
  r2 = i2 && t2.length > 0 && c(e2, t2);
  return t2 == null || r2 ? d([e2], n2) : n2;
}
function Zo(e2, t2) {
  "string" == typeof t2 || (t2 = "");
  t2 = n.getElementById(t2);
  !t2 || (e2[0] = t2, e2.length = 1);
  return e2;
}
function Xo(e2, t2, r2) {
  "string" == typeof t2 || (t2 = "");
  var o2, u2;
  r2 && !!r2.jquery && (r2 = r2[0]);
  o2 = n;
  r2 && !!r2.nodeType && (o2 = r2.ownerDocument, !o2 && (o2 = r2));
  d(e2, Wt(t2, o2, true));
  if (un.test(t2) && V(r2)) {
    for (t2 in r2) {
      o2 = r2[t2];
      u2 = e2[t2];
      i(u2) ? u2.call(e2, o2) : e2.attr(t2, o2);
    }
  }
  return e2;
}
function Zu(e2, t2, n2) {
  "string" == typeof n2 || (n2 = n2 + "");
  Pe(n2, e2, t2);
}
function X(e2, t2) {
  t2 == null && (t2 = []);
  e2 == null || (At(Object(e2)) ? "string" == typeof e2 ? ca.call(t2, e2) : d(t2, e2) : ca.call(t2, e2));
  return t2;
}
function m(e2, t2, n2, r2, i2, o2) {
  var u2 = t2[0], a2 = t2[1];
  t2 = E(e2, n2, u2);
  o2 && (u2 = a2);
  u2 != null && u2 && "string" == typeof u2 && (t2 = Be(u2, t2, false));
  e2.length > 1 && (r2 || j(t2), i2 && t2.reverse());
  return e2.pushStack(t2);
}
function Wr(e2, t2, n2, r2) {
  var a2, s2, i2, f2, o2 = Dr(e2, t2, r2), u2 = n2 ? n2[3] : n2;
  i2 = Zt(t2) ? "" : "px";
  !u2 || (i2 = u2 + "");
  u2 = e2 && e2.nodeType;
  u2 = +u2;
  a2 = Zt(t2);
  u2 = 0 != u2 && (a2 || "px" != i2 && 0 != o2);
  a2 = void 0;
  u2 && (u2 = null, a2 = ce.exec(l(e2, t2, u2, u2)));
  if (a2) {
    u2 = a2[3];
    "string" == typeof u2 || (u2 = "");
    if (u2 != i2) {
      s2 = o2 / 2;
      "" == i2 && (i2 = u2);
      u2 = 0 == s2 ? 1 : s2;
      f2 = 0;
      a2 = 20;
      for (; a2--; ) {
        A(e2, t2, u2 + "" + i2, null);
        o2 = Dr(e2, t2, r2) / s2;
        0 == o2 && (o2 = 0.5);
        (1 - f2) * (1 - o2) <= 0 && (a2 = 0);
        u2 /= o2;
        f2 = o2;
      }
      o2 = u2 * 2;
      A(e2, t2, o2 + "" + i2, null);
    }
  }
  if (!n2) return 0;
  (e2 = n2[1]) ? (t2 = +n2[2], e2 = "-" == e2 + "" ? -1 : 1, e2 = o2 + e2 * t2) : e2 = +n2[2];
  null != r2 && (r2.unit = i2, r2.start = o2, r2.end = e2);
  return e2;
}
function co(e2) {
  var o2 = e2.match(w);
  if (o2) {
    var i2, a2 = o2.length, r2 = false, n2 = false, t2 = false, e2 = false, u2 = 0;
    for (; u2 < a2; ) {
      i2 = o2[u2];
      "string" == typeof i2 && ("once" == i2 ? r2 = true : "memory" == i2 ? n2 = true : "unique" == i2 ? t2 = true : "stopOnFalse" == i2 && (e2 = true));
      u2 += 1;
    }
  } else {
    r2 = false;
    n2 = false;
    t2 = false;
    e2 = false;
  }
  return [r2, n2, t2, e2];
}
function xr(e2, t2, n2) {
  "string" == typeof t2 || (n2 = t2, t2 = "*");
  if (!i(n2)) return;
  t2 = t2.toLowerCase().match(w);
  !t2 && (t2 = []);
  var o2 = t2.length, r2 = 0;
  for (; r2 < o2; ++r2) pu(e2, t2[r2], n2);
}
function ie(n2, o2, u2, s2) {
  var m2 = su(o2), p2 = n2.length, x2 = p2 - 1, v2 = m2[0], l2 = i(v2);
  if (!l2 ? p2 > 1 ? "string" == typeof v2 ? !a.checkClone ? Ri.test(v2) || l2 : l2 : l2 : l2 : l2) return r(n2, function(f3, c3) {
    return Mu(n2, u2, s2, m2, v2, l2, f3, c3);
  });
  if (p2 > 0) {
    o2 = Rn(m2, n2[0].ownerDocument, false, n2, s2);
    var f2 = o2.firstChild;
    1 == o2.childNodes.length && (o2 = f2);
    if (f2 || s2) {
      f2 = E(h(o2, "script"), lu, null);
      var y2, b2, w2, g2 = f2.length, c2 = 0;
      for (; c2 < p2; ++c2) {
        c2 != x2 ? (y2 = Ut(o2, true, true), g2 > 0 && d(f2, h(y2, "script"))) : y2 = o2;
        u2.call(n2[c2], y2, c2);
      }
      if (g2 > 0) {
        c2 = f2[g2 - 1].ownerDocument;
        E(f2, fu, null);
        y2 = 0;
        for (; y2 < g2; ++y2) {
          o2 = f2[y2];
          p2 = o2.type;
          !p2 && (p2 = "");
          p2 += "";
          b2 = !!N(t, o2, "globalEval", null);
          x2 = ee(c2, o2);
          if (sn.test(p2) && !b2 && x2) {
            x2 = o2.src;
            p2 = "module" == p2.toLowerCase();
            if (x2 && !p2) {
              b2 = e._evalUrl;
              p2 = !!o2.noModule;
              b2 && !p2 && (w2 = { nonce: null }, p2 = o2.nonce, p2 || (p2 = o2.getAttribute("nonce")), w2.nonce = p2, b2.call(e, x2 + "", w2, c2));
            } else {
              p2 = o2.textContent;
              "string" == typeof p2 || (p2 = "");
              Dn(p2.replace(Bi, ""), o2, c2);
            }
          }
        }
      }
    }
  }
  return n2;
}
function Rn(t2, n2, r2, i2, o2) {
  var a2, f2, v2, g2, s2 = n2.createDocumentFragment(), l2 = [], p2 = t2.length, c2 = 0, u2 = null;
  for (; c2 < p2; ++c2) {
    a2 = t2[c2];
    if (a2 || 0 === a2) {
      if ("object" == D(a2)) {
        !a2.nodeType || (a2 = [a2]);
        d(l2, a2);
      } else {
        if (!hi.test(a2)) {
          ca.call(l2, n2.createTextNode(a2));
        } else {
          u2 = u2 || s2.appendChild(n2.createElement("div"));
          f2 = an.exec(a2);
          !f2 && (f2 = ["", ""]);
          f2 = Fn(f2[1].toLowerCase());
          v2 = f2[1];
          g2 = f2[2];
          u2.innerHTML = v2 + e.htmlPrefilter(a2) + g2;
          a2 = f2[0];
          for (; a2 > 0; ) {
            --a2;
            u2 = u2.lastChild;
          }
          d(l2, u2.childNodes);
          u2 = s2.firstChild;
          u2.textContent = "";
        }
      }
    }
  }
  s2.textContent = "";
  n2 = 0;
  for (; true; ) {
    t2 = l2[n2];
    ++n2;
    if (t2 == null) break;
    if (i2) {
      if (k(t2, i2, 0) > -1) {
        !o2 || ca.call(o2, t2);
        continue;
      }
    }
    u2 = me(t2);
    f2 = h(s2.appendChild(t2), "script");
    u2 && Dt(f2, null);
    if (r2) {
      u2 = 0;
      for (; true; ) {
        t2 = f2[u2];
        ++u2;
        if (t2 == null) break;
        a2 = t2.type || "";
        sn.test(a2) && ca.call(r2, t2);
      }
    }
  }
  return s2;
}
function C(e2, t2, n2, r2, u2, a2, s2) {
  var c2 = e2.length, d2 = null == n2;
  if ("object" == D(n2)) {
    for (r2 in n2) C(e2, t2, r2, n2[r2], true, a2, s2);
    var l2 = t2, u2 = true, f2, p2;
  } else {
    if (r2 !== void 0) {
      i(r2) || (s2 = true);
      if (d2) {
        if (s2) {
          t2.call(e2, r2);
          l2 = null;
        } else {
          l2 = function(a3, n3, r3) {
            return t2.call(o(a3), r3);
          };
        }
      } else {
        l2 = t2;
      }
      if (l2) {
        u2 = 0;
        for (; u2 < c2; ++u2) {
          f2 = e2[u2];
          p2 = !s2 ? r2.call(f2, u2, l2(f2, n2)) : r2;
          l2(f2, n2, p2);
        }
      }
      u2 = true;
    } else {
      l2 = t2;
    }
  }
  return u2 ? e2 : d2 ? l2.call(e2) : 0 != c2 ? l2(e2[0], n2) : a2;
}
function Bt(e2, t2, n2, r2, i2, o2) {
  if ("object" == typeof t2) {
    "string" != typeof n2 && (r2 && (n2 = r2), r2 = n2, n2 = void 0);
    for (i2 in t2) Bt(e2, i2, n2, r2, t2[i2], o2);
    return e2;
  }
  var u2, s2, a2, l2;
  r2 === void 0 && i2 === void 0 ? (a2 = void 0, s2 = void 0, l2 = n2, u2 = true) : (a2 = n2, s2 = r2, l2 = i2, u2 = false);
  !u2 && i2 === void 0 && "string" == typeof n2 && (s2 = void 0, l2 = r2, u2 = true);
  !u2 && i2 === void 0 ? a2 = void 0 : (n2 = s2, r2 = l2);
  if (r2 === false) {
    r2 = be;
  } else {
    if (!r2) return e2;
  }
  u2 = e2.length;
  i2 = 0;
  for (; i2 < u2; ++i2) {
    s2 = e2[i2];
    Te(s2, t2, r2, n2, a2, 1 == o2);
  }
  return e2;
}
function ra(e2, t2, n2) {
  var r2 = [];
  if ("string" == typeof n2) {
    var i2 = n2.split(" ");
    n2 = 0;
    for (; n2 < i2.length; ++n2) r2.push(i2[n2] || "");
  } else {
    r2.push(n2);
  }
  var a2 = {}, o2 = r2.length;
  i2 = 0;
  for (; i2 < 4; ++i2) {
    n2 = void 0;
    i2 < o2 && (n2 = r2[i2]);
    if (!n2) {
      var u2 = i2 - 2;
      u2 >= 0 && u2 < o2 && (n2 = r2[u2]);
    }
    !n2 && o2 > 0 && (n2 = r2[0]);
    a2[e2 + (T[i2] || "") + t2] = n2;
  }
  return a2;
}
function p(e2, t2, n2, r2) {
  t2 = zt(e2, t2);
  e2 = void 0;
  null != r2 && (e2 = r2);
  if ("string" == typeof n2) {
    t2[Fe(n2)] = e2;
  } else {
    for (e2 in n2) t2[L(e2)] = n2[e2];
  }
}
function N(e2, t2, n2, r2) {
  var i2 = void 0;
  null != r2 && (i2 = r2);
  if (n2 === void 0 || null == n2) return s(e2, t2, null);
  if ("string" == typeof n2 && i2 === void 0) return s(e2, t2, n2);
  p(e2, t2, n2, i2);
  return i2 !== void 0 ? i2 : n2;
}
function s(e2, t2, n2) {
  if (null == n2) return zt(e2, t2);
  if (n2 === void 0) return zt(e2, t2);
  e2 = t2[e2[0]];
  return !e2 ? void 0 : e2[Fe(n2)];
}
function nt(n2) {
  var e2 = this, t2 = arguments;
  if (t2.length > 0) {
    return n2 === void 0 ? e2 : r(e2, function(t3, a2) {
      Xr(a2, n2, u(t3));
    });
  }
  e2 = e2[0];
  if (!e2) return;
  if (0 == e2.getClientRects().length) return { top: 0, left: 0 };
  t2 = e2.getBoundingClientRect();
  e2 = e2.ownerDocument.defaultView;
  var i2 = u(t2.top);
  i2 += u(e2.pageYOffset);
  t2 = u(t2.left);
  return { top: i2, left: t2 + u(e2.pageXOffset) };
}
function Ye(n2) {
  var e2 = this, t2 = arguments;
  if (0 == t2.length) {
    if (e2.length > 0) {
      e2 = e2[0];
      t2 = nr(e2);
      var u2;
      if (t2 && "get" in t2 && (t2 = t2.get(e2, "value")) !== void 0) return t2;
      e2 = e2.value;
      return "string" == typeof e2 ? e2.replace(Ni, "") : e2 == null ? "" : e2;
    }
    return;
  }
  u2 = i(n2);
  return r(e2, function(r2, i2) {
    return Hu(n2, u2, r2, i2);
  });
}
function Co(e2) {
  e2 = e2 && e2.nodeName;
  return "string" == typeof e2 ? gi.test(e2) : false;
}
function jo(e2) {
  e2 = e2 && e2.nodeName;
  return "string" == typeof e2 ? mi.test(e2) : false;
}
function vo(e2) {
  return "string" == typeof e2 ? co(e2) : po(St.apply(null, [{}, e2]));
}
function he(e2) {
  return e2 === void 0 || !e2 ? "fx" : "string" == typeof e2 ? e2 : e2 + "";
}
function Pt(e2) {
  return Array.isArray(e2) ? e2 : "string" == typeof e2 && (e2 = e2.match(w)) ? e2 : [];
}
function Ge(e2) {
  return Array.isArray(e2) ? e2 : null;
}
function Xu(e2, t2) {
  e2 = o(t2).val();
  if (e2 == null) return null;
  var n2 = t2.name + "";
  return Array.isArray(e2) ? E(e2, function(t3, a2) {
    return { name: n2, value: a2.replace(mn, "\r\n") };
  }, null) : { name: n2, value: e2.replace(mn, "\r\n") };
}
function _t(e2, t2) {
  if (e2 == null) return "";
  var i2 = [], o2 = function(t3, n3) {
    return Yu(i2, t3, n3);
  }, n2 = Array.isArray(e2);
  if (!n2) {
    e2.jquery && !V(e2) && (n2 = true);
  }
  if (n2) {
    r(e2, function(t3, n3) {
      t3 = n3.name + "";
      o2(t3, n3.value);
    });
  } else {
    for (n2 in e2) $t(n2, e2[n2], t2, o2);
  }
  return va.call(i2, "&");
}
function Nn(e2, t2, n2) {
  r(e2, function(o2, u2) {
    return Su(t2, n2, o2, u2);
  });
}
function fr(e2, t2, n2, o2) {
  if (t2 && !!t2.preventDefault && t2.handleObj) {
    lr(t2);
    return e2;
  }
  if ("object" == typeof t2) {
    for (o2 in t2) fr(e2, o2, n2, t2[o2]);
    return e2;
  }
  if (n2 === false || i(n2)) {
    var H2 = n2, N2 = void 0;
  }
  H2 === false && (H2 = be);
  return r(e2, function() {
    ke(this, t2, H2, N2, false);
  });
}
function Gr(t2, n2, r2) {
  if (t2 && "object" == typeof t2) {
    x(Se2, t2, false);
  } else {
    var o2, u2, a2 = i(t2) && t2;
    o2 = r2 && n2;
    u2 = n2 && !i(n2) && n2;
    var Se2 = { complete: r2 || n2 || a2, duration: t2, easing: o2 || u2 };
  }
  if (e.fx.off) {
    Se2.duration = 0;
  } else {
    if ("number" != typeof Se2.duration) {
      t2 = e.fx.speeds;
      Se2.duration in t2 ? (n2 = Se2, n2.duration = t2[Se2.duration]) : (n2 = Se2, n2.duration = t2._default);
    }
  }
  (Se2.queue == null || Se2.queue) && (Se2.queue = "fx");
  t2 = Se2;
  t2.old = Se2.complete;
  Se2.complete = function() {
    i(Se2.old) && Se2.old.call(this);
    !Se2.queue || K(this, Se2.queue);
  };
  return Se2;
}
function $t(e2, t2, n2, r2) {
  if (Array.isArray(t2)) {
    var i2, a2, u2 = t2.length | 0, o2 = 0;
    for (; o2 < u2; ++o2) {
      i2 = t2[o2];
      n2 || Ui.test(e2) ? r2(e2, i2) : (a2 = "object" == typeof i2 && i2 != null ? o2 + "" : "", $t(e2 + "[" + a2 + "]", i2, n2, r2));
    }
  } else {
    if (!n2 && "object" == D(t2)) {
      for (i2 in t2) $t(e2 + "[" + i2 + "]", t2[i2], n2, r2);
    } else {
      r2(e2, t2);
    }
  }
}
function ia(e2, t2, n2) {
  if (Array.isArray(t2)) {
    var o2 = Je(e2), r2 = {}, u2 = t2.length | 0;
    n2 = 0;
    for (; n2 < u2; ++n2) {
      var i2 = t2[n2] + "";
      r2[i2] = l(e2, i2, false, o2);
    }
    return r2;
  }
  t2 += "";
  if (n2 !== void 0) return A(e2, t2, n2, null);
  n2 = null;
  return l(e2, t2, n2, n2);
}
function tr(e2, t2) {
  if (Array.isArray(t2)) {
    t2 = k(Ye.call(o(e2)), t2, 0) > -1;
    e2.checked = t2;
    return t2;
  }
}
function Tr(e2, t2) {
  return t2 ? Yt(Yt(e2, ht), t2) : Yt(ht, e2);
}
function Nr() {
  try {
    var o2 = new XMLHttpRequest();
    if (o2) return o2;
  } catch {
  }
}
function Br(e2) {
  v.push(e2);
  Rr();
}
function Au(e2, t2) {
  t2 ? ha.call(_, 0, 0, e2) : _.push(e2);
}
function Fr() {
  U = Date.now();
  var t2, e2 = 0;
  for (; e2 < v.length; ) {
    t2 = v[e2];
    !t2() && v[e2] == t2 && (ha.call(v, 0 + e2, 1), e2 = e2 - 1);
    e2 += 1;
  }
  0 == v.length && Ir();
  U = null;
}
function ku() {
  setTimeout(function() {
    U = null;
  }, 0);
  let e2 = Date.now();
  U = e2;
  return e2;
}
function en() {
  if (Ne) {
    var t2 = false == n.hidden && !!pa.requestAnimationFrame?.(en);
    t2 || (t2 = function() {
      en();
    }, setTimeout(t2, +e.fx.interval));
    Fr();
  }
}
function K(e2, t2) {
  var n2 = he(t2), r2 = H(e2, n2, void 0), i2 = r2.length;
  t2 = ma.call(r2);
  var o2 = ge(e2, n2), u2 = function() {
    K(e2, n2);
  };
  "inprogress" == t2 && (t2 = ma.call(r2), --i2);
  !t2 || ("fx" == n2 && ya.call(r2, "inprogress"), delete o2.stop, t2.call(e2, u2, o2));
  !(i2 > 0) && o2 && o2.empty.fire();
}
function fo(e2, t2) {
  var n2 = t2.length;
  if (0 == n2) return da.call(e2);
  var r2 = +t2[0];
  return 1 == n2 ? da.call(e2, r2) : da.call(e2, r2, +t2[1]);
}
function tt(e2, t2) {
  var i2, r2, n2 = { height: e2 }, o2 = t2 ? 1 : 2;
  r2 = 0;
  for (; r2 < 4; ) {
    i2 = T[r2] || "";
    n2["margin" + i2] = e2;
    n2["padding" + i2] = e2;
    r2 += o2;
  }
  t2 && (n2.opacity = e2, n2.width = e2);
  return n2;
}
function W(e2) {
  var t2, n2 = true;
  for (t2 in e2) n2 = false;
  return n2;
}
function Wu(e2, t2, n2, r2) {
  var n2 = false, i2 = 0;
  for (; i2 < t2; ++i2) !n2 && ee(r2, e2[i2]) && (n2 = true);
  return n2;
}
function Ku(e2, t2, n2, r2) {
  var i2 = o(r2);
  t2 && (e2 = e2.call(r2, n2, void 0));
  i2.wrapAll(e2);
}
function Hu(e2, t2, n2, r2) {
  var i2 = r2 && r2.nodeType;
  if (1 != i2) return null;
  t2 && (e2 = e2.call(r2, n2, Ye.call(o(r2))));
  e2 == null ? e2 = "" : "number" == typeof e2 ? e2 = e2 + "" : Array.isArray(e2) && (e2 = E(e2, ru, null));
  t2 = nr(r2);
  t2 = t2 && "set" in t2 && t2.set(r2, e2, "value") !== void 0;
  t2 || (r2.value = e2);
  return null;
}
function Mt(e2, t2, n2) {
  var i2 = e2 && e2.nodeType;
  if (3 == i2 || 8 == i2 || 2 == i2) return;
  var r2 = null;
  (1 != i2 || !Z(e2)) && (r2 = Oe[t2], !r2 || (t2 = r2), r2 = ft[t2]);
  if (n2 !== void 0) {
    if (r2 && "set" in r2 && (r2 = r2.set(e2, n2, t2)) !== void 0) return r2;
    e2[t2] = n2;
    return n2;
  }
  return r2 && "get" in r2 && (n2 = r2.get(e2, t2)) != null ? n2 : e2[t2];
}
function Qn(e2, t2, n2) {
  var i2 = e2 && e2.nodeType;
  if (3 == i2 || 8 == i2 || 2 == i2) return;
  var o2 = t2 + "", r2 = null;
  (1 != i2 || !Z(e2)) && (i2 = fn[o2.toLowerCase()], !i2 && (ot.test(o2) && (r2 = Di), i2 = r2), r2 = i2);
  if (n2 !== void 0) {
    if (n2 == null) {
      Ue(e2, t2);
      return;
    }
    if (r2 && "set" in r2 && (t2 = r2.set(e2, n2, t2)) !== void 0) return t2;
    e2.setAttribute(o2, n2 + "");
    return n2;
  }
  if (r2 && "get" in r2 && (t2 = r2.get(e2, t2)) != null) return t2;
  e2 = y.attr(e2, o2);
  return e2 == null ? void 0 : e2;
}
function A(t2, n2, r2, i2) {
  var o2, l2, f2, c2, u2, s2, d2;
  if (!t2 || 3 === t2.nodeType || 8 === t2.nodeType) return;
  l2 = t2.style;
  if (!l2) return;
  f2 = L(n2);
  c2 = mt.test(n2);
  c2 || (n2 = Xt(f2));
  u2 = e.cssHooks[n2];
  !u2 && (u2 = e.cssHooks[f2]);
  if (r2 !== void 0) {
    s2 = typeof r2;
    o2 = void 0;
    "string" == s2 && (o2 = ce.exec(r2), d2 = o2 ? o2[1] : o2, !d2 || (d2 = Tn, !d2 || (r2 = d2(t2, n2, o2), s2 = "number")));
    if (r2 == null || r2 !== r2) return;
    "number" == s2 && !c2 && (s2 = !Zt(f2) ? "px" : "", r2 = r2 + (o2 && o2[3] || s2));
    !a.clearCloneStyle && "" === r2 && 0 == n2.indexOf("background") && (l2[n2] = "inherit");
    o2 = !u2 || !("set" in u2);
    o2 || (r2 = u2.set(t2, r2, i2), o2 = r2 !== void 0);
    o2 && (c2 ? l2.setProperty(n2, r2) : l2[n2] = r2);
    return;
  }
  return u2 && "get" in u2 && (t2 = u2.get(t2, false, i2)) !== void 0 ? t2 : l2[n2];
}
function l(t2, n2, r2, i2) {
  var o2 = L(n2);
  mt.test(n2) || (n2 = Xt(o2));
  var u2 = e.cssHooks[n2];
  !u2 && (u2 = e.cssHooks[o2]);
  o2 = void 0;
  u2 && "get" in u2 && (o2 = u2.get(t2, true, r2));
  o2 === void 0 && (o2 = Ae(t2, n2, i2));
  "normal" === o2 && n2 in kn && (o2 = kn[n2]);
  if ("" === r2 || r2) {
    t2 = parseFloat(o2 + "");
    return true === r2 || isFinite(t2) ? Ke(t2) ? 0 : t2 : o2;
  }
  return o2;
}
function ua(e2, t2, n2, r2, i2) {
  var o2 = t2.specialEasing[r2];
  o2 || (o2 = t2.easing);
  e2 = Pr(e2, t2, r2, i2, o2, "");
  n2.push(e2);
  return e2;
}
function Gt(e2, t2, n2, r2, o2) {
  i(n2) && (o2 && (r2 = o2), o2 = r2, r2 = n2, n2 = void 0);
  e2 = { url: t2, type: e2, dataType: o2, data: n2, success: r2 };
  V(t2) || (t2 = false);
  return Qe(x(e2, t2, false), void 0);
}
function Gu(e2, t2) {
  e2 = Mt(t2, "elements", void 0);
  return e2 ? X(e2, null) : t2;
}
function qr(e2, t2, n2) {
  e2 = ce.exec(t2);
  if (!e2) return t2;
  t2 = +e2[2];
  !n2 && (n2 = 0);
  t2 -= +n2;
  t2 < 0 && (t2 = 0);
  return t2 + (e2[3] || "px");
}
function H(e2, n2, r2) {
  if (!e2) return;
  var i2 = he(n2) + "queue";
  n2 = s(t, e2, i2);
  if (r2) {
    !n2 || Array.isArray(r2) ? n2 = N(t, e2, i2, X(r2, null)) : ca.call(n2, r2);
  }
  return n2 ? n2 : [];
}
function ge(e2, n2) {
  var i2 = he(n2), r2 = i2 + "queueHooks";
  if (n2 = s(t, e2, r2)) return n2;
  n2 = Q();
  n2.add(function() {
    z(t, e2, [i2 + "queue", r2]);
  });
  return N(t, e2, r2, { empty: n2 });
}
function Jt(e2, t2, n2) {
  var r2 = function(i2) {
    return ra(e2, t2, i2);
  };
  return n2 ? { expand: r2, set: qr } : { expand: r2 };
}
function _r(e2, t2, n2) {
  var r2 = $[t2];
  r2 || (r2 = []);
  return (r2 = $r(r2, n2, t2, e2)) ? r2 : $r($["*"], n2, t2, e2);
}
function Vn(e2, t2, n2) {
  var r2 = ye(e2, t2, n2);
  return r2 != null ? r2 : !n2 && (r2 = Gn(t2, e2)) != null ? r2 : Vo(e2, t2, n2);
}
function Ht(e2, t2, n2) {
  if (i(t2)) return Qo(e2, t2, n2);
  var r2 = t2.nodeType;
  return r2 != null && !!r2 ? Jo(e2, t2, n2) : "string" != typeof t2 ? Ko(e2, t2, n2) : Be(t2, e2, n2);
}
function xe(e2, t2, r2, i2) {
  r2 == null && (r2 = []);
  if ("string" != typeof e2) return r2;
  if (0 == e2.length) return r2;
  t2 == null && (t2 = n);
  if (!i2) {
    var u2, o2 = t2.nodeType;
    if (1 != o2 && 9 != o2 && 11 != o2) return [];
  }
  o2 = ye(e2, t2, i2);
  if (o2 != null) {
    d(r2, o2);
    return r2;
  }
  o2 = Yo(e2);
  u2 = o2.length;
  e2 = 0;
  for (; e2 < u2; ++e2) d(r2, Vn(o2[e2], t2, i2));
  u2 > 1 && !i2 && j(r2);
  return r2;
}
function Wt(e2, t2, r2) {
  if ("string" != typeof e2) return [];
  "boolean" == typeof t2 && (r2 = t2, t2 = false);
  if (!t2) {
    if (a.createHTMLDocument) {
      t2 = n.implementation.createHTMLDocument("");
      var i2 = t2.createElement("base");
      i2.href = n.location.href;
      t2.head.appendChild(i2);
    } else {
      t2 = n;
    }
  }
  var o2 = un.exec(e2);
  i2 = null;
  r2 || (i2 = []);
  if (o2) return [t2.createElement(o2[1])];
  r2 = null;
  e2 = Rn([e2], t2, i2, r2, r2);
  i2 != null && !!i2 && i2.length > 0 && xo(i2);
  return d([], e2.childNodes);
}
function Sr() {
  if (null == Le) {
    var t2 = n.createElement("table"), e2 = n.createElement("tr"), r2 = n.createElement("div");
    t2.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
    var i2 = e2.style;
    i2.cssText = "box-sizing:content-box;border:1px solid";
    i2.height = "1px";
    r2.style.height = "9px";
    r2.style.display = "block";
    O.appendChild(t2).appendChild(e2).appendChild(r2);
    r2 = pa.getComputedStyle(e2);
    i2 = parseInt(r2.height + "", 10);
    var o2 = parseInt(r2.borderTopWidth + "", 10);
    r2 = parseInt(r2.borderBottomWidth + "", 10);
    Le = i2 + o2 + r2 == +e2.offsetHeight;
    O.removeChild(t2);
  }
  return null == Le ? false : Le;
}
function je() {
  if (!xt) return;
  yt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
  B.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
  O.appendChild(yt).appendChild(de);
  var e2 = pa.getComputedStyle(de);
  bt = "1%" !== e2.top;
  Ct = 12 == Vt(e2.marginLeft);
  B.right = "60%";
  kt = 36 == Vt(e2.right);
  wt = 36 == Vt(e2.width);
  B.position = "absolute";
  Tt = 12 == Math.round(+de.offsetWidth / 3);
  O.removeChild(yt);
  xt = false;
}
function Dn(e2, t2, r2) {
  r2 || (r2 = n);
  var i2 = r2.createElement("script");
  i2.text = e2;
  if (t2) {
    var o2, u2 = 0;
    for (; u2 < rn.length; ++u2) {
      o2 = rn[u2] || "";
      e2 = t2[o2];
      e2 || (e2 = t2.getAttribute(o2));
      !e2 || i2.setAttribute(o2, e2 + "");
    }
  }
  e2 = r2.head.appendChild(i2);
  e2.parentNode.removeChild(e2);
}
function bu(e2) {
  var t2 = e2 && e2.ownerDocument;
  e2 = e2 && e2.nodeName;
  e2 += "";
  var n2 = An[e2];
  if (n2) return n2;
  n2 = t2.body;
  t2 = n2.appendChild(t2.createElement(e2));
  n2 = null;
  n2 = l(t2, "display", n2, n2);
  t2.parentNode.removeChild(t2);
  t2 = "none" !== n2 && (n2 + "").length > 0 ? n2 + "" : "block";
  An[e2] = t2;
  return t2;
}
function Z(e2) {
  e2 = e2 && e2.ownerDocument || e2;
  e2 = e2 && e2.documentElement;
  return !Kr.test(e2 && e2.namespaceURI || e2 && e2.nodeName || "HTML");
}
function cr(e2) {
  return e2.ownerDocument || e2.document || e2;
}
function Je(e2) {
  var t2 = e2 && e2.ownerDocument;
  t2 = t2.defaultView;
  (!t2 || !t2.opener) && (t2 = pa);
  return t2.getComputedStyle(e2);
}
function me(e2) {
  var t2 = e2 && e2.ownerDocument;
  return t2.contains(e2) ? true : e2.getRootNode ? e2.getRootNode(si) == t2 : false;
}
function Un(e2, t2) {
  if (e2 == t2) {
    lt = true;
    return 0;
  }
  var u2, a2, o2 = e2.compareDocumentPosition, r2 = t2.compareDocumentPosition, i2 = o2 ? 0 : 1;
  r2 = r2 ? 0 : 1;
  r2 = i2 - r2;
  if (0 != r2) return r2;
  r2 = e2.ownerDocument;
  u2 = r2 != null ? r2 : e2;
  i2 = t2.ownerDocument;
  a2 = i2 != null ? i2 : t2;
  o2 = u2 == a2 ? o2.call(e2, t2) : 1;
  o2 |= 0;
  if (0 != (o2 & 1)) {
    if (e2 == n || r2 == n && Bn(n, e2)) return -1;
    if (t2 == n || i2 == n && Bn(n, t2)) return 1;
    if (R != null) {
      e2 = ga.call(R, e2);
      return e2 - ga.call(R, t2);
    }
    return 0;
  }
  return 0 != (o2 & 4) ? -1 : 1;
}
function ee(e2, t2) {
  var n2 = null;
  t2 == null || (n2 = t2.parentNode);
  if (e2 == n2) return true;
  if (n2 == null) return false;
  if (1 != n2.nodeType) return false;
  if (t2 = e2.contains) return !!t2.call(e2, n2);
  if (t2 = e2.compareDocumentPosition) {
    e2 = t2.call(e2, n2);
    if ("number" == typeof e2) return 0 != (e2 & 16);
  }
  return false;
}
function et(e2, t2) {
  !t2 || (e2 = t2);
  t2 = e2.style.display;
  if ("none" === t2) return true;
  if ("" !== t2) return false;
  if (!me(e2)) return false;
  t2 = null;
  return "none" === l(e2, "display", t2, t2);
}
function mo(e2) {
  if ("true" == e2) return true;
  if ("false" == e2) return false;
  if ("null" == e2) return null;
  var t2 = +e2;
  if (t2 == t2 && e2 == t2 + "") return t2;
  t2 = e2 + "";
  if (ii.test(t2)) {
    try {
      return JSON.parse(t2);
    } catch {
    }
  }
  return e2;
}
function Fn(e2) {
  return "td" == e2 || "th" == e2 ? di : "tr" == e2 ? ci : "col" == e2 ? fi : "thead" == e2 || "tbody" == e2 || "tfoot" == e2 || "colgroup" == e2 || "caption" == e2 ? li : !a.option && ("option" == e2 || "optgroup" == e2) ? vi : pi;
}
function _o(e2) {
  return "not" == e2 || "has" == e2 || "contains" == e2 || "lang" == e2 ? true : "target" == e2 || "root" == e2 || "focus" == e2 ? true : "enabled" == e2 || "disabled" == e2 || "checked" == e2 || "selected" == e2 ? true : "empty" == e2 || "parent" == e2 || "header" == e2 || "input" == e2 || "button" == e2 ? true : "text" == e2 || "radio" == e2 || "checkbox" == e2 || "file" == e2 || "password" == e2 || "image" == e2 ? true : "submit" == e2 || "reset" == e2 ? true : "first" == e2 || "last" == e2 || "even" == e2 || "odd" == e2 ? true : "eq" == e2 || "nth" == e2 || "lt" == e2 || "gt" == e2 ? true : "visible" == e2 || "hidden" == e2 || "animated" == e2 ? true : !!st[e2];
}
function Uo(e2, t2, n2) {
  if ("not" == t2) return f(e2, function(t3, i2) {
    return No(t3, n2);
  }, false);
  if ("has" == t2) return f(e2, function(t3, i2) {
    return Ho(t3, n2);
  }, false);
  if ("contains" == t2) return f(e2, function(t3, i2) {
    return Wo(t3, n2);
  }, false);
  if ("lang" == t2) return f(e2, function(t3, i2) {
    return Lo(t3, n2);
  }, false);
  if ("target" == t2) return f(e2, function(e3, t3) {
    return Oo(e3);
  }, false);
  if ("root" == t2) return f(e2, function(e3, t3) {
    return zo(e3);
  }, false);
  if ("focus" == t2) return f(e2, function(e3, t3) {
    return Do(e3);
  }, false);
  if ("enabled" == t2) return f(e2, function(e3, t3) {
    return $n(e3, false);
  }, false);
  if ("disabled" == t2) return f(e2, function(e3, t3) {
    return $n(e3, true);
  }, false);
  if ("checked" == t2) return f(e2, function(e3, t3) {
    return wo(e3);
  }, false);
  if ("selected" == t2) return f(e2, function(e3, t3) {
    return To(e3);
  }, false);
  if ("empty" == t2) return f(e2, function(e3, t3) {
    return _n(e3);
  }, false);
  if ("parent" == t2) return f(e2, function(e3, t3) {
    return ko(e3);
  }, false);
  if ("header" == t2) return f(e2, function(e3, t3) {
    return Co(e3);
  }, false);
  if ("input" == t2) return f(e2, function(e3, t3) {
    return jo(e3);
  }, false);
  if ("button" == t2) return f(e2, function(e3, t3) {
    return Ao(e3);
  }, false);
  if ("text" == t2) return f(e2, function(e3, t3) {
    return So(e3);
  }, false);
  if ("radio" == t2 || "checkbox" == t2 || "file" == t2 || "password" == t2 || "image" == t2) return f(e2, function(i2, n3) {
    return Eo(i2, t2);
  }, false);
  if ("submit" == t2 || "reset" == t2) return f(e2, function(i2, n3) {
    return qo(i2, t2);
  }, false);
  if ("first" == t2) return Mo(e2);
  if ("last" == t2) return Po(e2);
  if ("even" == t2) return Io(e2);
  if ("odd" == t2) return Fo(e2);
  if ("eq" == t2 || "nth" == t2) return Lt(e2, parseInt(n2, 10));
  if ("lt" == t2) return Ro(e2, parseInt(n2, 10));
  if ("gt" == t2) return Bo(e2, parseInt(n2, 10));
  var r2 = st[t2];
  return r2 ? f(e2, function(t3, n3) {
    return !!r2(t3);
  }, false) : e2;
}
function Qo(e2, t2, n2) {
  return f(e2, function(s2, r2) {
    return !!t2.call(s2, r2, s2) != n2;
  }, false);
}
function Jo(e2, t2, n2) {
  return f(e2, function(u2, r2) {
    return u2 == t2 != n2;
  }, false);
}
function Ko(e2, t2, n2) {
  return f(e2, function(l2, r2) {
    return ga.call(t2, l2, 0) > -1 != n2;
  }, false);
}
function k(e2, t2, n2) {
  return t2 == null ? -1 : ga.call(t2, e2, n2);
}
function x(e2, t2, n2) {
  if (t2 == null) return e2;
  for (var i2 in t2) {
    var o2, u2, r2 = t2[i2];
    if ("__proto__" == i2 || e2 == r2) continue;
    u2 = Array.isArray(r2);
    if (n2 && !!r2 && (V(r2) || u2)) {
      o2 = e2[i2];
      u2 && !Array.isArray(o2) ? o2 = [] : !u2 && !V(o2) && (o2 = {});
      e2[i2] = x(o2, r2, true);
    } else {
      r2 === void 0 || (e2[i2] = r2);
    }
  }
  return e2;
}
function Cu(t2, n2) {
  for (var i2 in t2) {
    var o2 = L(i2), u2 = n2[o2], r2 = t2[i2];
    Array.isArray(r2) && (u2 = r2[1], r2 = r2[0], t2[i2] = r2);
    i2 != o2 && (t2[o2] = r2, delete t2[i2]);
    i2 = e.cssHooks[o2];
    if (i2 && "expand" in i2) {
      i2 = i2.expand(r2);
      delete t2[o2];
      for (r2 in i2) r2 in t2 || (t2[r2] = i2[r2], n2[r2] = u2);
    } else {
      n2[o2] = u2;
    }
  }
}
function z(e2, t2, n2) {
  var o2 = e2[0], r2 = t2[o2];
  if (r2 === void 0) return;
  if (null != n2 && n2 !== void 0) {
    var i2 = n2;
    e2 = [];
    if (Array.isArray(i2)) {
      var a2 = i2.length, u2 = 0;
      for (; u2 < a2; ++u2) e2.push(Fe(i2[u2]));
    } else {
      i2 = Fe(i2);
      if (i2 in r2) {
        e2.push(i2);
      } else {
        if (i2 = i2.match(w)) {
          a2 = i2.length;
          u2 = 0;
          for (; u2 < a2; ++u2) e2.push(i2[u2] + "");
        }
      }
    }
    i2 = e2.length;
    for (; i2--; ) {
      delete r2[e2[i2] || ""];
    }
  }
  (null == n2 || n2 === void 0 || W(r2)) && (e2 = t2 && t2.nodeType, e2 ? t2[o2] = void 0 : delete t2[o2]);
}
function Ut(e2, t2, n2) {
  var i2 = e2.cloneNode(true), s2 = me(e2), r2 = null, o2 = e2.nodeType;
  o2 = 1 == o2 || 11 == o2;
  a.noCloneChecked && (o2 = false);
  if (o2 && !Z(e2)) {
    r2 = null;
    o2 = h(i2, r2);
    r2 = h(e2, r2);
    var l2 = r2.length | 0, u2 = 0;
    for (; u2 < l2; ++u2) cu(r2[u2], o2[u2]);
  } else {
    o2 = r2;
  }
  if (t2) {
    if (n2) {
      r2 == null && (r2 = h(e2, null));
      o2 == null && (o2 = h(i2, null));
      n2 = r2.length | 0;
      t2 = 0;
      for (; t2 < n2; ++t2) hr(r2[t2], o2[t2]);
    } else {
      hr(e2, i2);
    }
  }
  t2 = h(i2, "script");
  t2.length > 0 && (n2 = null, s2 || (n2 = h(e2, "script")), Dt(t2, n2));
  return i2;
}
function sr(e2, t2, n2) {
  var i2 = [], u2 = It(n2), o2 = u2 | 0, r2 = t2.target, l2 = "click" == t2.type;
  t2 = t2.button;
  t2 = l2 && t2 >= 1;
  if (u2 > 0 && r2 && r2.nodeType && !t2) {
    var f2 = /* @__PURE__ */ new Map();
    for (; r2 != e2; ) {
      t2 = r2 && r2.nodeType;
      t2 = 1 == t2;
      u2 = l2 && r2.disabled;
      if (t2 && !u2) {
        t2 = [];
        var c2, a2, s2 = 0;
        for (; s2 < o2; ++s2) {
          u2 = n2[s2];
          c2 = u2.selector + " ";
          a2 = f2.get(c2);
          null == a2 && (a2 = xe(u2.selector, e2, null, [r2]).length > 0, f2.set(c2, a2));
          a2 && t2.push(u2);
        }
        t2.length > 0 && (u2 = { elem: r2, handlers: t2 }, i2.push(u2));
      }
      r2 = r2.parentNode;
      !r2 && (r2 = e2);
    }
  }
  o2 < n2.length && (n2 = n2.slice(o2), t2 = { elem: e2, handlers: n2 }, i2.push(t2));
  return i2;
}
function _u(e2, t2, n2) {
  var r2 = t2.parentNode;
  k(t2, e2, 0) < 0 && (Ce(h(t2, null)), !r2 || r2.replaceChild(n2, t2));
}
function gr(e2, t2, n2) {
  var r2, o2 = t2 ? Be(t2, e2, false) : e2;
  t2 = 0;
  for (; true; ) {
    t2 = o2[t2];
    if (t2 == null) break;
    n2 || 1 == t2.nodeType && Ce(h(t2, false));
    r2 = t2.parentNode;
    !r2 || (n2 && me(t2) && Dt(h(t2, "script"), null), r2.removeChild(t2));
    t2 = 1;
  }
  return e2;
}
function Me(e2) {
  var r2, n2, t2 = e2 ? e2.nodeType : e2;
  if (!t2) {
    n2 = "";
    t2 = 0;
    for (; true; ) {
      r2 = e2[t2];
      ++t2;
      if (r2 == null) break;
      n2 = n2 + Me(r2) + "";
    }
    return n2;
  }
  return 1 == t2 || 11 == t2 || 9 == t2 ? 9 == t2 ? e2.documentElement.textContent : e2.textContent : 3 == t2 || 4 == t2 ? e2.nodeValue : "";
}
function Wo(e2, t2) {
  t2 = Yn(t2);
  return e2.textContent.indexOf(t2) > -1;
}
function Iu(e2, t2, n2) {
  t2 = n2.nodeType;
  (1 == t2 || 11 == t2 || 9 == t2) && (n2.textContent = e2);
}
function Fu(e2, t2) {
  var n2 = e2.nodeType;
  (1 == n2 || 11 == n2 || 9 == n2) && vr(e2, t2).appendChild(t2);
}
function Ru(e2, t2) {
  var n2 = e2.nodeType;
  (1 == n2 || 11 == n2 || 9 == n2) && (e2 = vr(e2, t2), e2.insertBefore(t2, e2.firstChild));
}
function Uu(e2, t2) {
  var n2 = e2.parentNode;
  !n2 || n2.insertBefore(t2, e2.nextSibling);
}
function Bu(e2, t2) {
  var n2 = e2.parentNode;
  !n2 || n2.insertBefore(t2, e2);
}
function we(e2, t2) {
  var r2, i2, o2, n2 = Object.create(pn);
  if (e2 && e2.type !== void 0) {
    n2.originalEvent = e2;
    n2.type = e2.type;
    r2 = e2.defaultPrevented;
    (r2 || r2 === void 0 && false == e2.returnValue) && (n2.isDefaultPrevented = ne);
    r2 = e2.target;
    i2 = r2 ? r2.nodeType : r2;
    3 == i2 ? n2.target = r2.parentNode : n2.target = r2;
    n2.currentTarget = e2.currentTarget;
    n2.relatedTarget = e2.relatedTarget;
    o2 = dn.length;
    i2 = 0;
    for (; i2 < o2; ++i2) {
      r2 = dn[i2] || "";
      r2 in e2 && (n2[r2] = e2[r2]);
    }
  } else {
    n2.type = e2;
  }
  if (t2) {
    for (r2 in t2) n2[r2] = t2[r2];
  }
  t2 = null;
  !e2 || (t2 = e2.timeStamp);
  t2 ? n2.timeStamp = t2 : n2.timeStamp = Date.now();
  n2[ir()] = true;
  return n2;
}
function uu(e2, t2) {
  var n2 = t2.type;
  !n2 || (e2.type = n2);
  n2 = t2.origType;
  !n2 || (e2.origType = n2);
  t2.data === void 0 || (e2.data = t2.data);
  t2.handler === void 0 || (e2.handler = t2.handler);
  t2.guid === void 0 || (e2.guid = t2.guid);
  t2.selector === void 0 || (e2.selector = t2.selector);
  t2.needsContext === void 0 || (e2.needsContext = t2.needsContext);
  t2.namespace === void 0 || (e2.namespace = t2.namespace);
}
function lr(e2) {
  var t2 = e2.handleObj, r2 = t2.namespace + "", n2 = t2.origType + "";
  "" != r2 && (n2 = n2 + "." + r2);
  e2 = e2.delegateTarget;
  r2 = t2.handler;
  ke(e2, n2, r2, t2.selector, false);
}
function To(e2) {
  var t2 = e2.parentNode;
  !t2 || t2.selectedIndex;
  return !!e2.selected;
}
function $n(e2, t2) {
  if ("form" in e2) {
    var n2 = e2.parentNode;
    return n2 && e2.disabled === false ? "label" in e2 ? "label" in n2 ? !!n2.disabled == t2 : !!e2.disabled == t2 : bo(e2) == t2 : !!e2.disabled == t2;
  }
  return "label" in e2 ? !!e2.disabled == t2 : false;
}
function bo(e2) {
  e2 = e2.parentNode;
  var t2 = false;
  for (; e2 && !t2; ) {
    e2.disabled && c(e2, "fieldset") && (t2 = true);
    e2 = e2.parentNode;
  }
  return t2;
}
function _n(e2) {
  e2 = e2.firstChild;
  var t2 = true;
  for (; e2 && t2; ) {
    e2.nodeType < 6 && (t2 = false);
    t2 && (e2 = e2.nextSibling);
  }
  return t2;
}
function Xn(e2, t2) {
  var n2 = [];
  for (; e2; ) {
    1 == e2.nodeType && e2 != t2 && n2.push(e2);
    e2 = e2.nextSibling;
  }
  return n2;
}
function Zn(e2, t2) {
  var n2 = false;
  for (; !n2; ) {
    e2 = e2[t2];
    !e2 ? n2 = true : 1 == e2.nodeType && (n2 = true);
  }
  return e2;
}
function zt(e2, t2) {
  var n2 = e2[0];
  e2 = t2[n2];
  if (!e2) {
    e2 = {};
    if (ve(t2)) {
      var r2 = t2 && t2.nodeType;
      r2 ? t2[n2] = e2 : Object.defineProperty(t2, n2, { value: e2, configurable: true });
    }
  }
  return e2;
}
function te(e2, t2, n2) {
  var r2 = [], u2 = n2 != null;
  for (; true; ) {
    e2 = e2[t2];
    if (!e2) break;
    var i2 = e2.nodeType;
    if (9 == i2) break;
    if (1 == i2) {
      if (u2) {
        if (o(e2).is(n2)) break;
      }
      r2.push(e2);
    }
  }
  return r2;
}
function Be(e2, t2, n2) {
  var r2 = t2[0];
  n2 && (e2 = ":not(" + e2 + ")");
  return 1 == t2.length && 1 == (r2 && r2.nodeType) ? y.matchesSelector(r2, e2) ? [r2] : [] : y.matches(e2, f(t2, Ou, false));
}
function ye(e2, t2, n2) {
  if (n2) {
    t2 = [];
    try {
      var V2 = 0, X2 = n2.length;
      for (; V2 < X2; V2 += 1) {
        var Z2 = n2[V2], Q2 = Z2.matches;
        Q2 || (Q2 = Z2.webkitMatchesSelector);
        Q2 || (Q2 = Z2.msMatchesSelector);
        Q2 && !!Q2.call(Z2, e2) && t2.push(Z2);
      }
    } catch {
      return null;
    }
    return t2;
  }
  try {
    var J2 = [];
    n2 = J2;
    d(n2, t2.querySelectorAll(e2));
    return J2;
  } catch {
    return null;
  }
}
function sa(e2, t2, n2) {
  if (n2) {
    n2 = Ae(t2, e2, null);
    return gt.test(I(n2)) ? tn.call(o(t2))[e2] + "px" : n2;
  }
}
function Dr(e2, t2, n2) {
  return null != n2 ? +n2.cur() : +l(e2, t2, "", null);
}
function oe(e2, t2, n2) {
  return +l(e2, t2, true, n2);
}
function Et(t2, n2) {
  return e(t2, n2);
}
function o(t2) {
  return e(t2);
}
function su(e2) {
  return ba.call(e2);
}
function u(e2) {
  return +e2;
}
function Vt(e2) {
  return Math.round(parseFloat(e2 + ""));
}
function I(e2) {
  return (e2 || "") + "";
}
function Ke(e2) {
  return 0 == e2 || e2 != e2;
}
function Fe(e2) {
  return L(e2 + "");
}
function Mo(e2) {
  return Lt(e2, 0);
}
function Po(e2) {
  return Lt(e2, -1);
}
function ho(e2) {
  return qt(vo(e2));
}
function Hn() {
  return qt([false, true, false, false]);
}
function Q() {
  return qt([true, true, false, false]);
}
function ne() {
  return true;
}
function be() {
  return false;
}
function ir() {
  return e.expando;
}
function yr() {
  return this.map(Gu).filter(Vu).map(Xu).get();
}
function du(e2) {
  return function(n2) {
    var r2 = [], i2 = o(n2), u2 = i2.length - 1;
    n2 = 0;
    for (; n2 <= u2; ++n2) {
      var a2 = n2 != u2 ? this.clone(true) : this;
      o(i2[n2])[e2](a2);
      a2 = a2.get();
      Se.push.apply(r2, a2);
    }
    return this.pushStack(r2);
  };
}
function br(e2) {
  return function(t2, n2) {
    xr(e2, t2, n2);
  };
}
function $e(e2) {
  var t2 = this;
  if (i(e2)) return r(t2, function(t3, n3) {
    let c2 = e2.call(n3, t3, P(n3));
    $e.call(o(n3), c2);
  });
  var n2 = Pt(e2);
  return n2.length > 0 ? r(t2, function(t3, i2) {
    eu(i2, n2);
  }) : t2;
}
function _e(e2, t2, n2) {
  if (i(t2)) return r(e2, function(d2, n3) {
    let c2 = t2.call(n3, d2, P(n3));
    _e(o(n3), c2, 1);
  });
  if (0 == n2) return e2.attr("class", "");
  var u2 = Pt(t2);
  return u2.length > 0 ? r(e2, function(t3, n3) {
    tu(n3, u2);
  }) : e2;
}
function Jn(e2, t2, n2) {
  var u2 = typeof t2, a2 = "string" == u2 || Array.isArray(t2);
  return i(t2) ? r(e2, function(d2, r2) {
    let c2 = t2.call(r2, d2, P(r2), n2);
    Jn(o(r2), c2, n2);
  }) : "boolean" == typeof n2 && a2 ? n2 ? $e.call(e2, t2) : _e(e2, t2, 1) : r(e2, function(l2, f2) {
    return Nu(t2, n2, u2, a2, l2, f2);
  });
}
function St(n2, e2) {
  n2 == null && (n2 = {});
  var r2 = arguments.length;
  if ("boolean" == typeof n2) {
    e2 == null && (e2 = {});
    var t2 = 2, o2;
  } else {
    e2 = n2;
    t2 = 1;
    n2 = false;
  }
  "object" != typeof e2 && !i(e2) && (e2 = {});
  t2 == r2 && (e2 = this, t2 = t2 - 1);
  for (; t2 < r2; ++t2) {
    o2 = arguments[t2];
    o2 == null || x(e2, o2, n2);
  }
  return e2;
}
function ae(t2, n2, r2, i2) {
  let o2 = e.fn;
  o2[i2] = function(a2, s2) {
    var Y2, f2 = "boolean" == typeof a2, o3 = arguments.length > 0 && (r2.length > 0 || !f2), $2 = r2;
    0 == $2.length && ($2 = true === a2 || true === s2 ? "margin" : "border");
    Y2 = null;
    o3 || (a2 = Y2);
    return C(this, function(re2, o4, a3) {
      if (G(re2)) {
        if (0 == i2.indexOf("outer")) return re2["inner" + t2];
        var oe2 = re2.document.documentElement;
        return oe2["client" + t2];
      }
      if (9 == re2.nodeType) {
        oe2 = re2.documentElement;
        var se2 = re2.body, ie2 = "scroll" + t2;
        re2 = u(se2[ie2]);
        o4 = u(oe2[ie2]);
        ie2 = "offset" + t2;
        se2 = u(se2[ie2]);
        ie2 = u(oe2[ie2]);
        var ae2 = u(oe2["client" + t2]);
        return Math.max(Math.max(Math.max(re2, o4), Math.max(se2, ie2)), ae2);
      }
      return a3 === void 0 ? l(re2, n2, $2, null) : A(re2, n2, a3, $2);
    }, n2, a2, o3, null, false);
  };
}
function Qr(e2, t2, n2) {
  He[e2] = function(r2) {
    return C(this, function(a2, s2, l2) {
      return la(e2, t2, n2, a2, s2, l2);
    }, e2, r2, r2 !== void 0, null, false);
  };
}
function Wn(e2, t2) {
  e2 = e2.fn;
  e2.init = function(r2, u2) {
    return t2(this, r2, u2);
  };
  e2.init.prototype = e2;
}
function go(e2, t2) {
  return t2.toUpperCase();
}
function No(e2, t2) {
  return !Re(e2, t2);
}
function Re(e2, t2) {
  return xe(t2, n, null, [e2]).length > 0;
}
function Bn(e2, t2) {
  return ee(e2, t2);
}
function Er(e2, t2) {
  return { get: function(i2, o2, u2) {
    return ea(e2, t2, i2, o2, u2);
  } };
}
function Or(e2) {
  return { get: function(n2, r2, i2) {
    return ta(e2, n2, r2, i2);
  }, set: function(n2, r2, i2) {
    return na(e2, n2, r2, i2);
  } };
}
function Zr(e2) {
  return Er(oo, function(n2, r2) {
    return sa(e2, n2, r2);
  });
}
function Pu(e2, t2) {
  if (t2 === void 0) return Me(e2);
  e2.empty();
  r(e2, function(n2, r2) {
    return Iu(t2, n2, r2);
  });
}
function zu(e2, t2, n2, i2) {
  if (n2 && i2 === void 0) {
    e2 = s(g, n2, t2);
    if (e2 !== void 0) return e2;
    e2 = In(n2, t2 + "", void 0);
    return e2 !== void 0 ? e2 : void 0;
  }
  r(e2, function(n3, r2) {
    p(g, r2, t2, i2);
  });
}
function Ft(e2) {
  return e2[ir()] ? e2 : we(e2, null);
}
function Ve(e2) {
  return (e2 = b[e2]) ? e2 : Mi;
}
function aa(e2, t2) {
  e2 = t2.offsetParent;
  for (; e2; ) {
    t2 = null;
    if ("static" != I(l(e2, "position", t2, t2))) break;
    e2 = e2.offsetParent;
  }
  return e2 ? e2 : O;
}
function tn() {
  var n2 = this[0];
  if (!n2) return;
  var t2 = { top: 0, left: 0 }, e2 = null;
  if ("fixed" == I(l(n2, "position", e2, e2))) {
    var r2 = n2.getBoundingClientRect();
  } else {
    r2 = nt.call(o(n2));
    var i2 = n2.ownerDocument;
    e2 = n2.offsetParent;
    e2 || (e2 = i2.documentElement);
    for (; e2; ) {
      var s2 = e2 == i2.body, a2 = e2 == i2.documentElement;
      s2 && (a2 = true);
      if (!a2) break;
      a2 = null;
      if ("static" != I(l(e2, "position", a2, a2))) break;
      e2 = e2.parentNode;
    }
    e2 && e2 != n2 && 1 == e2.nodeType && (t2 = nt.call(o(e2)), i2 = null, a2 = u(l(e2, "borderTopWidth", true, i2)), e2 = u(l(e2, "borderLeftWidth", true, i2)), t2.top = u(t2.top) + a2, t2.left = u(t2.left) + e2);
  }
  e2 = null;
  i2 = u(l(n2, "marginTop", true, e2));
  e2 = u(l(n2, "marginLeft", true, e2));
  n2 = u(r2.top);
  n2 = n2 - u(t2.top) - i2;
  r2 = u(r2.left);
  return { top: n2, left: r2 - u(t2.left) - e2 };
}
function ta(e2, t2, n2, r2) {
  if (!n2) return;
  var i2 = Ji;
  n2 = null;
  return i2.test(l(t2, "display", n2, n2)) && (0 == t2.getClientRects().length || 0 == +t2.getBoundingClientRect().width) ? kr(t2, Ki, function() {
    return zr(t2, e2, r2);
  }) : zr(t2, e2, r2);
}
function Lr(e2) {
  return e2.offsetWidth ? true : e2.offsetHeight ? true : e2.getClientRects().length > 0;
}
function zr(e2, t2, n2) {
  var a2, s2, f2, d2, i2, o2 = Je(e2), u2 = !Cr(), r2 = u2 || !!n2;
  i2 = r2 && "border-box" === l(e2, "boxSizing", false, o2);
  r2 = Ae(e2, t2, o2);
  a2 = "offset" + t2.charAt(0).toUpperCase() + t2.slice(1);
  if (gt.test(r2)) {
    if (!n2) return r2 + "";
    r2 = "auto";
  }
  s2 = !Sr() && c(e2, "tr");
  f2 = "auto" === r2;
  d2 = Ke(parseFloat(r2 + "")) && "inline" === l(e2, "display", false, o2);
  if (u2 && i2 || s2 || f2 || d2) {
    e2.getClientRects().length > 0 ? (i2 = "border-box" === l(e2, "boxSizing", false, o2), u2 = a2 in e2, u2 && (r2 = e2[a2])) : u2 = i2;
  } else {
    u2 = i2;
  }
  r2 = parseFloat(r2 + "");
  Ke(r2) && (r2 = 0);
  i2 = i2 ? "border" : "content";
  n2 && true !== n2 && (i2 = n2 + "");
  return r2 + Qt(e2, t2, i2, u2, o2, r2) + "px";
}
function Qt(e2, t2, n2, r2, i2, o2) {
  var u2, s2, l2, a2 = "width" == t2 ? 1 : 0;
  u2 = r2 ? "border" : "content";
  if (n2 == u2) return 0;
  s2 = 0;
  u2 = 0;
  l2 = 0;
  for (; a2 < 4; a2 = a2 + 2 | 0) {
    "margin" == n2 && (l2 = l2 + oe(e2, n2 + (T[a2] || ""), i2));
    !r2 ? (u2 += oe(e2, "padding" + (T[a2] || ""), i2), "padding" != n2 ? u2 = u2 + oe(e2, "border" + (T[a2] || "") + "Width", i2) : s2 += oe(e2, "border" + (T[a2] || "") + "Width", i2)) : ("content" == n2 && (u2 = u2 - oe(e2, "padding" + (T[a2] || ""), i2)), "margin" != n2 && (u2 = u2 - oe(e2, "border" + (T[a2] || "") + "Width", i2)));
  }
  !r2 && o2 >= 0 && (e2 = Math.ceil(+e2["offset" + t2.charAt(0).toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5), e2 < 0 && (e2 = 0), u2 = u2 + e2);
  return u2 + l2;
}
function na(e2, t2, n2, r2) {
  var i2 = Je(t2), o2 = "absolute" === i2.position;
  Ar() && (o2 = false);
  var u2 = o2 || !!r2;
  u2 = u2 && "border-box" === l(t2, "boxSizing", false, i2);
  r2 = r2 ? Qt(t2, e2, r2 + "", u2, i2, -1) : 0;
  u2 && o2 && (o2 = +t2["offset" + e2.charAt(0).toUpperCase() + e2.slice(1)], u2 = parseFloat(i2[e2] + ""), r2 = r2 - Math.ceil(o2 - u2 - Qt(t2, e2, "border", false, i2, -1) - 0.5));
  0 != r2 && (i2 = ce.exec(n2), !i2 || (i2 = i2[3] || "px", "px" === i2 || (t2.style[e2] = n2, n2 = null, n2 = l(t2, e2, n2, n2))));
  return qr(t2, n2, r2);
}
function yu(e2) {
  var n2 = e2.charAt(0).toUpperCase() + e2.slice(1);
  e2 = xn.length;
  for (; e2--; ) {
    var t2 = (xn[e2] || "") + n2;
    if (t2 in bn) return t2;
  }
  return "";
}
function Xt(t2) {
  var n2 = e.cssProps[t2];
  n2 || (n2 = wn[t2]);
  if ("string" == typeof n2 && n2.length > 0) return n2;
  if (t2 in bn) return t2;
  n2 = yu(t2);
  n2.length > 0 || (n2 = t2);
  wn[t2] = n2;
  return n2;
}
function wr(e2, t2, n2, i2) {
  var o2 = {}, a2 = e2 == pt, S2 = function(e3) {
  };
  S2 = function(s2) {
    o2[s2] = true;
    var b2 = e2[s2];
    !b2 && (b2 = []);
    var x2 = null;
    r(b2, function(E2, s3) {
      var A2 = s3(t2, n2, i2);
      if ("string" == typeof A2) {
        if (!a2 && !o2[A2]) {
          ya.call(t2.dataTypes, A2);
          S2(A2);
          return false;
        }
      }
      if (a2) {
        x2 = A2;
        return !A2;
      }
    });
    return x2;
  };
  var u2 = S2;
  u2 = u2(t2.dataTypes[0]);
  return u2 || !!o2["*"] ? u2 : S2("*");
}
function Qe(t2, r2) {
  "object" == typeof t2 && (r2 = t2, t2 = void 0);
  r2 = r2 || {};
  var a2 = null, Bu2 = a2, Uu2 = a2, $u2 = a2, _u2 = a2, Yu2 = a2, Gu2 = "canceled", Vu2 = a2, Xu2 = a2, i2 = Tr({}, r2);
  a2 = i2.context;
  var f2, c2, d2, p2, u2, v2, l2, s2 = a2 ? a2 : i2, Ju2 = e.event;
  a2 = i2.context;
  !a2 || (a2 = s2.nodeType || s2.jquery);
  !a2 || (Ju2 = o(s2));
  f2 = q(null);
  c2 = Q();
  a2 = i2.statusCode;
  !a2 && (a2 = {});
  Vu2 = a2;
  d2 = {};
  p2 = {};
  u2 = { readyState: 0, getResponseHeader: function(i3) {
    if (Bu2) {
      var r3 = i3.toLowerCase() + " ";
      _u2 ? r3 = _u2[r3] : (_u2 = mu($u2), r3 = _u2[r3]);
      return r3 ? r3.join(", ") : null;
    }
    return null;
  }, setRequestHeader: function(s3, u3) {
    var r3 = s3 + "";
    if (Bu2 == null) {
      var i3 = r3.toLowerCase(), o2 = p2[i3];
      !o2 || (r3 = o2 + "");
      p2[i3] = r3;
      d2[r3] = u3;
    }
    return this;
  }, getAllResponseHeaders: function() {
    return !!Bu2 ? $u2 : null;
  }, overrideMimeType: function(r3) {
    Bu2 == null && (i2.mimeType = r3);
    return this;
  }, statusCode: function(r3) {
    if (r3) {
      if (Bu2) {
        this.always(r3[this.status]);
      } else {
        for (var n2 in r3) Vu2[n2] = [Vu2[n2], r3[n2]];
      }
    }
    return this;
  }, abort: function(i3) {
    var r3 = Gu2;
    !i3 || (r3 = i3 + "");
    !Uu2 || Uu2.abort(r3);
    Xu2(0, r3);
    return this;
  } };
  f2.promise(u2);
  !t2 && (t2 = i2.url, !t2 && (t2 = fe.href));
  a2 = Zi;
  i2.url = t2.replace(a2, fe.protocol + "//");
  t2 = r2.method;
  !t2 && (t2 = r2.type || i2.method || i2.type);
  i2.type = t2;
  t2 = i2.dataType;
  !t2 && (t2 = "*");
  t2 = t2.toLowerCase().match(w);
  !t2 && (t2 = [""]);
  i2.dataTypes = t2;
  if (i2.crossDomain == null) {
    t2 = n.createElement("a");
    try {
      t2.href = i2.url;
      t2.href = t2.href;
      a2 = vt.protocol + "//";
      a2 = a2 + vt.host + "";
      v2 = t2.protocol + "//";
      i2.crossDomain = a2 != v2 + t2.host + "";
    } catch {
      i2.crossDomain = true;
    }
  }
  i2.data && !!i2.processData && "string" != typeof i2.data && (t2 = i2.data, i2.data = _t(t2, !!i2.traditional));
  wr(dt, i2, r2, u2);
  if (Bu2) return u2;
  t2 = e.event;
  !t2 || (t2 = i2.global);
  l2 = !!t2;
  l2 && (t2 = +e.active, e.active = t2 + 1, 0 == t2 && (t2 = null, re("ajaxStart", t2, t2, false)));
  t2 = i2.type.toUpperCase();
  i2.type = t2;
  i2.hasContent = !Xi.test(t2);
  t2 = i2.url;
  var Ta2 = t2.replace(Gi, "");
  !i2.hasContent ? (t2 = i2.url, t2 = t2.slice(Ta2.length), i2.data && (i2.processData || "string" == typeof i2.data) && (a2 = ct.test(Ta2) ? "&" : "?", a2 = Ta2 + a2, Ta2 = a2 + i2.data + "", delete i2.data), false == i2.cache && (Ta2 = Ta2.replace(Vi, "$1"), v2 = ct.test(Ta2) ? "&" : "?", a2 = +We.guid, We.guid = a2 + 1, t2 = v2 + "_=" + a2 + t2), i2.url = Ta2 + t2) : (t2 = i2.contentType || "", i2.data && !!i2.processData && 0 == t2.indexOf("application/x-www-form-urlencoded") && (t2 = i2.data, i2.data = t2.replace(Yi, "+")));
  !i2.ifModified || (t2 = e.lastModified[Ta2], !t2 || u2.setRequestHeader("If-Modified-Since", t2), t2 = e.etag[Ta2], !t2 || u2.setRequestHeader("If-None-Match", t2));
  t2 = i2.data && i2.hasContent && false !== i2.contentType || r2.contentType;
  !t2 || u2.setRequestHeader("Content-Type", i2.contentType);
  t2 = i2.dataTypes[0];
  t2 && !!i2.accepts[t2] ? (a2 = i2.accepts[t2], "*" === t2 || (a2 = a2 + ", */*; q=0.01")) : a2 = i2.accepts["*"];
  u2.setRequestHeader("Accept", a2);
  for (t2 in i2.headers) u2.setRequestHeader(t2, i2.headers[t2]);
  if (i2.beforeSend && (i2.beforeSend.call(s2, u2, i2) === false || !!Bu2)) return u2.abort();
  Gu2 = "abort";
  c2.add(i2.complete);
  u2.done(i2.success);
  u2.fail(i2.error);
  Uu2 = wr(pt, i2, r2, u2);
  Xu2 = function(v3, h2, g2, m2) {
    if (Bu2) return;
    Bu2 = true;
    !Yu2 || clearTimeout(Yu2);
    Uu2 = void 0;
    !m2 && (m2 = "");
    $u2 = m2;
    v3 > 0 ? u2.readyState = 4 : u2.readyState = 0;
    var on2 = v3 >= 200 && v3 < 300 || 304 === v3, an2 = void 0;
    !g2 || (an2 = hu(i2, u2, g2));
    !on2 && k("script", i2.dataTypes, 0) > -1 && k("json", i2.dataTypes, 0) < 0 && (i2.converters["text script"] = function() {
    });
    var rn2 = gu(i2, an2, u2, on2);
    an2 = null;
    if (on2) {
      if (i2.ifModified) {
        var un2 = u2.getResponseHeader("Last-Modified");
        !un2 || (e.lastModified[Ta2] = un2);
        un2 = u2.getResponseHeader("etag");
        !un2 || (e.etag[Ta2] = un2);
      }
      if (204 === v3 || "HEAD" === i2.type) {
        un2 = "nocontent";
        rn2 = an2;
      } else {
        304 === v3 ? (un2 = "notmodified", rn2 = an2) : (un2 = 1 == rn2[0] ? "parsererror" : "success", an2 = rn2[1], rn2 = rn2[2], on2 = !rn2);
      }
    } else {
      v3 || !h2 ? (v3 < 0 && (v3 = 0), un2 = "error") : un2 = h2;
      rn2 = h2;
    }
    u2.status = v3;
    !h2 && (h2 = un2);
    u2.statusText = h2 + "";
    on2 ? f2.resolveWith(s2, [an2, un2, u2]) : f2.rejectWith(s2, [u2, un2, rn2]);
    u2.statusCode(Vu2);
    Vu2 = void 0;
    if (l2) {
      on2 ? on2 = "ajaxSuccess" : (on2 = "ajaxError", an2 = rn2);
      Ju2.trigger(on2, [u2, i2, an2]);
    }
    c2.fireWith(s2, [u2, un2]);
    l2 && (Ju2.trigger("ajaxComplete", [u2, i2]), on2 = +e.active - 1, e.active = on2, 0 == on2 && (on2 = null, re("ajaxStop", on2, on2, false)));
  };
  if (!Uu2) {
    Xu2(-1, "No Transport");
  } else {
    u2.readyState = 1;
    l2 && Ju2.trigger("ajaxSend", [u2, i2]);
    if (Bu2) return u2;
    i2.async && i2.timeout > 0 && (Yu2 = setTimeout(function() {
      u2.abort("timeout");
    }, +i2.timeout));
    try {
      Bu2 = false;
      Uu2.send(d2, Xu2);
    } catch (t3) {
      if (Bu2) throw t3;
      Xu2(-1, t3);
    }
  }
  return u2;
}
function Yr(t2, n2, r2) {
  var a2 = q(null), o2 = x({ specialEasing: {}, easing: e.easing._default }, r2, true), s2 = x({}, n2, false), f2 = Ur(), c2 = +o2.duration, l2 = [], Ge2 = false, d2 = function(i2, u3) {
    return ua(t2, o2, l2, i2, u3);
  }, Xe2 = void 0;
  Xe2 = { elem: t2, props: s2, opts: o2, originalProperties: n2, originalOptions: r2, startTime: f2, duration: c2, tweens: l2, createTween: d2, stop: function(u3) {
    if (Ge2) return this;
    Ge2 = true;
    if (u3) {
      var L2 = 0;
      for (; L2 < l2.length; ) {
        Kt(l2[L2], 1);
        ++L2;
      }
      a2.notifyWith(t2, [Xe2, 1, 0]);
      a2.resolveWith(t2, [Xe2, u3]);
    } else {
      a2.rejectWith(t2, [Xe2, u3]);
    }
    return this;
  } };
  a2.promise(Xe2);
  var u2 = function() {
    if (Ge2) return false;
    var ue2, oe2, re2 = Math.max(0, f2 + c2 - Ur()), te2 = 0 != c2 ? re2 / c2 : 0;
    te2 = 1 - te2;
    ue2 = 0 + l2.length;
    oe2 = 0;
    for (; oe2 < l2.length; ) {
      Kt(l2[oe2], te2);
      ++oe2;
    }
    a2.notifyWith(t2, [Xe2, te2, re2]);
    if (te2 < 1 && ue2 > 0) return re2;
    0 == ue2 && a2.notifyWith(t2, [Xe2, 1, 0]);
    a2.resolveWith(t2, [Xe2]);
    return false;
  };
  a2.always(function() {
    delete u2.elem;
  });
  Cu(s2, o2.specialEasing);
  d2 = _.length;
  r2 = 0;
  for (; r2 < d2; ++r2) {
    if (n2 = _[r2].call(Xe2, t2, s2, o2)) {
      i(n2.stop) && (r2 = ge(t2, o2.queue), r2.stop = n2.stop.bind(n2));
      return n2;
    }
  }
  E(s2, _r, Xe2);
  i(o2.start) && (n2 = o2.start, n2.call(t2, Xe2));
  n2 = Xe2;
  n2.progress(o2.progress);
  n2 = Xe2;
  r2 = o2.done;
  n2.done(r2, o2.complete);
  n2 = Xe2;
  n2.fail(o2.fail);
  n2 = Xe2;
  n2.always(o2.always);
  u2.elem = t2;
  u2.anim = Xe2;
  u2.queue = o2.queue;
  Br(u2);
  return Xe2;
}
function Eu(t2, n2, r2, o2, u2) {
  var m2 = 0, y2 = function(e2, t3, n3, r3) {
  };
  y2 = function(r3, o3, u3, a2) {
    return function() {
      var te2 = this, ne2 = arguments, f2 = function() {
        if (r3 < m2) return;
        var he2 = u3.apply(te2, ne2);
        if (he2 == o3.promise()) throw new TypeError("Thenable self-resolution");
        var ge2 = null;
        if (he2) {
          var me2 = typeof he2;
          ("object" == me2 || "function" == me2) && (ge2 = he2.then);
        }
        if (i(ge2)) {
          if (a2) {
            me2 = y2(m2, o3, F, a2);
            ge2.call(he2, me2, y2(m2, o3, Ee, a2));
          } else {
            me2 = m2 + 1;
            m2 = me2;
            var be2 = y2(me2, o3, F, a2), ye2 = y2(me2, o3, Ee, a2), pe2 = y2, ve2 = F;
            ge2.call(he2, be2, ye2, pe2(me2, o3, ve2, o3.notifyWith));
          }
        } else {
          u3 == F || (te2 = void 0, ne2 = [he2]);
          ye2 = !a2 ? o3.resolveWith : a2;
          ye2.call(void 0, te2, ne2);
        }
      }, ie2 = null;
      a2 ? ie2 = function() {
        f2();
      } : ie2 = function() {
        try {
          f2();
        } catch (Y2) {
          var B2 = e.Deferred.exceptionHook;
          if (B2) {
            var _2 = e.Deferred;
            _2.exceptionHook(Y2, ie2.error);
          }
          if (r3 + 1 >= m2) {
            if (u3 != Ee) {
              te2 = void 0;
              var U2 = [];
              U2.push(Y2);
              ne2 = U2;
            }
            Y2 = o3.rejectWith;
            Y2.call(void 0, te2, ne2);
          }
        }
      };
      if (r3 > 0) {
        ie2();
      } else {
        if (e.Deferred.getErrorHook) {
          var l2 = ie2;
          l2.error = e.Deferred.getErrorHook();
        } else {
          !e.Deferred.getStackHook || (l2 = ie2, l2.error = e.Deferred.getStackHook());
        }
        setTimeout(ie2, 0);
      }
    };
  };
  return q(function(I2) {
    var a2, $2, R2, Y2, _2 = F, U2 = i(u2) ? u2 : _2;
    _2 = t2[0][3];
    a2 = y2;
    _2.add(a2(0, I2, U2, I2.notifyWith));
    U2 = F;
    $2 = i(r2) ? r2 : U2;
    U2 = t2[1][3];
    U2.add(y2(0, I2, $2, null));
    $2 = Ee;
    Y2 = i(o2) ? o2 : $2;
    R2 = t2[2][3];
    R2.add(y2(0, I2, Y2, null));
  }).promise();
}
function q(e2) {
  var o2 = ["notify", "progress", Hn(), Hn(), 2], u2 = ["resolve", "done", Q(), Q(), 0], r2 = [o2, u2, ["reject", "fail", Q(), Q(), 1]], Ve2 = 0, n2 = {}, Ze2 = void 0, s2 = function(n3, o3, u3, a3) {
    return Eu(r2, n3, o3, u3, a3);
  };
  Ze2 = { state: function() {
    var t3 = Ve2;
    if (0 == t3) {
      return "pending";
    } else {
      if (1 == t3) return "resolved";
    }
    return "rejected";
  }, always: function() {
    n2.done(arguments);
    n2.fail(arguments);
    return this;
  }, catch: function(n3) {
    return Ze2.then(null, n3);
  }, pipe: function() {
    var f2 = arguments;
    return q(function(H2) {
      var L2, a3, o3, s3, l3, u3 = 0;
      for (; u3 < r2.length; ) {
        L2 = r2[u3];
        a3 = f2;
        o3 = null;
        a3 ? (a3 = a3[L2[4]], i(a3) && (o3 = a3), l3 = o3) : l3 = o3;
        s3 = L2[0] + "With";
        L2 = n2[L2[1]];
        L2.call(n2, /* @__PURE__ */ ((e3, t3, n3) => function() {
          var u4 = null;
          !n3 || (u4 = n3.apply(this, arguments));
          var r3, o4;
          u4 && i(u4.promise) ? (r3 = u4.promise(), r3.progress(e3.notify), r3.done(e3.resolve), r3.fail(e3.reject)) : (o4 = n3 ? [u4] : arguments, e3[t3](this, o4));
        })(H2, s3, l3));
        ++u3;
      }
      f2 = null;
    }).promise();
  }, then: function(r3, i2, t3) {
    return s2(this, r3, i2, t3);
  }, promise: function(n3) {
    return n3 != null ? x(n3, Ze2, false) : Ze2;
  } };
  o2 = 0;
  for (; o2 < r2.length; ) {
    u2 = r2[o2];
    var t2 = u2[2], a2 = Ze2, l2 = u2[1];
    a2[l2] = t2.add;
    0 != o2 && (1 == o2 ? t2.add(function() {
      Ve2 = 1;
    }) : t2.add(function() {
      Ve2 = 2;
    }), a2 = 3 - o2, t2.add(r2[a2][2].disable), t2.add(r2[a2][3].disable), t2.add(r2[0][2].lock), t2.add(r2[0][3].lock));
    t2.add(u2[3].fire);
    u2 = u2[0];
    n2[u2] = /* @__PURE__ */ ((e3, t3) => function() {
      var n3 = this == e3 ? void 0 : this;
      t3.fireWith(n3, arguments);
      return this;
    })(n2, t2);
    u2 += "With";
    n2[u2] = t2.fireWith;
    ++o2;
  }
  x(n2, Ze2, false);
  !e2 || e2.call(n2, n2);
  return n2;
}
function qt(e2) {
  var pe2 = [], ve2 = [], he2 = -1, ge2 = false, me2 = false, ye2 = false, xe2 = false, be2 = true;
  let t2 = function() {
    ge2 || (ge2 = e2[0]);
    me2 = true;
    ye2 = true;
    for (; ve2.length > 0; ) {
      xe2 = ve2.splice(0, 1)[0];
      for (; true; ) {
        he2 = he2 + 1 | 0;
        if (he2 >= pe2.length) break;
        var ne2 = xe2, te2 = pe2[he2], re2 = ne2[0];
        te2.apply(re2, ne2[1]) === false && e2[3] && (he2 = pe2.length, xe2 = false);
      }
      he2 = -1;
    }
    e2[1] || (xe2 = false);
    ye2 = false;
    if (ge2) {
      var ie2 = e2[1] && !!xe2;
      be2 = ie2;
      pe2 = [];
    }
  };
  return { add: function() {
    if (be2) {
      xe2 && !ye2 && (he2 = pe2.length - 1, ve2.push(xe2));
      Nn(arguments, pe2, e2[2]);
      xe2 && !ye2 && t2();
    }
    return this;
  }, remove: function() {
    r(arguments, function(n2, r2) {
      var b2 = 0;
      for (; true; ) {
        b2 = k(r2, pe2, b2) | 0;
        if (b2 < 0) break;
        pe2.splice(b2, 1);
        b2 <= he2 && (he2 = he2 - 1 | 0);
      }
    });
    return this;
  }, has: function(t3) {
    return t3 ? pe2.indexOf(t3) > -1 : pe2.length > 0;
  }, empty: function() {
    be2 && (pe2 = []);
    return this;
  }, disable: function() {
    ge2 = true;
    ve2 = [];
    be2 = false;
    pe2 = [];
    xe2 = false;
    return this;
  }, disabled: function() {
    return !be2;
  }, lock: function() {
    ge2 = true;
    ve2 = [];
    !xe2 && !ye2 && (be2 = false, pe2 = [], xe2 = false);
    return this;
  }, locked: function() {
    return ge2;
  }, fireWith: function(o2, c2) {
    var i2 = null;
    arguments.length > 1 && (i2 = c2);
    ge2 || (i2 || (i2 = []), !i2.slice || (i2 = i2.slice()), ve2.push([o2, i2]), ye2 || t2());
    return this;
  }, fire: function() {
    ge2 || (ve2.push([this, arguments]), ye2 || t2());
    return this;
  }, fired: function() {
    return me2;
  } };
}
function dr(e2, n2) {
  b[e2] = { setup: function() {
    Xe(this, e2, true);
    return false;
  }, trigger: function() {
    Xe(this, e2, false);
    return true;
  }, teardown: function() {
    return false;
  }, _default: function(n3) {
    let r2 = t;
    return s(r2, n3.target, e2);
  }, delegateType: n2 };
  b[n2] = { setup: function() {
    var r2 = cr(this), i2 = +s(t, r2, n2);
    0 == i2 && r2.addEventListener(e2, vn, true);
    p(t, r2, n2, i2 + 1);
  }, teardown: function() {
    var r2 = cr(this), i2 = +s(t, r2, n2) - 1;
    i2 <= 0 ? (r2.removeEventListener(e2, vn, true), z(t, r2, n2)) : p(t, r2, n2, i2);
  } };
}
function Ie() {
  n.removeEventListener("DOMContentLoaded", Ie);
  pa.removeEventListener("load", Ie);
  e.ready();
}
function Rt(e2, t2, n2) {
  !e2.removeEventListener || e2.removeEventListener(t2, n2);
}
function Te(n2, r2, i2, o2, u2, a2) {
  if (!ve(n2)) return;
  var f2, p2, c2, g2, m2, v2, d2, x2, b2, h2, y2, w2, T2, l2 = null;
  i2 && !!i2.handler ? (l2 = i2.handler, u2 = i2.selector) : [i2, l2] = [l2, i2];
  p2 = !!u2;
  p2 && Re(O, u2);
  l2.guid || (l2.guid = ou());
  c2 = s(t, n2, null);
  f2 = c2.events;
  f2 || (f2 = /* @__PURE__ */ Object.create(null), c2.events = f2);
  c2.handle || (c2.handle = function(i3) {
    var r3 = e.event.triggered;
    return r3 !== void 0 && r3 === i3.type ? void 0 : au(this, arguments);
  });
  g2 = c2.handle;
  !r2 && (r2 = "");
  m2 = ar(r2 + "");
  v2 = m2.length;
  for (; v2 > 0; ) {
    --v2;
    r2 = or(m2[v2] + "");
    d2 = r2[0];
    x2 = r2[1];
    b2 = r2[2];
    if ("" == d2) continue;
    c2 = Ve(d2);
    r2 = c2.bindType;
    p2 && (r2 = c2.delegateType);
    r2 = r2 || d2;
    c2 = r2;
    h2 = Ve(c2);
    T2 = p2 && ut.test(u2);
    y2 = null;
    p2 && (y2 = u2);
    w2 = l2.guid;
    r2 = { type: c2, origType: d2, data: o2, handler: l2, guid: w2, selector: y2, needsContext: T2, namespace: b2 };
    !i2 || uu(r2, i2);
    a2 && (r2.one = true);
    y2 = Ge(f2[c2]);
    d2 = iu();
    y2 ? d2 = y2 : (f2[c2] = d2, y2 = h2.setup, (!y2 || y2.call(n2, o2, x2, g2) === false) && (!n2.addEventListener || n2.addEventListener(c2, g2)));
    !h2.add || (h2.add.call(n2, r2), r2.handler.guid || (h2 = r2.handler, h2.guid = l2.guid));
    p2 ? (h2 = It(d2), ha.call(d2, h2, 0, r2), rr(d2, h2 + 1)) : d2.push(r2);
    cn[c2] = true;
  }
}
function ke(e2, n2, r2, i2, o2) {
  if (!J(t, e2)) return;
  var m2, f2, a2, p2, y2, d2, c2, v2, h2, x2, T2, b2, g2, w2, l2 = s(t, e2, null), u2 = l2 ? l2.events : l2;
  if (!u2) return;
  m2 = ar((n2 || "") + "");
  f2 = m2.length;
  for (; f2 > 0; ) {
    --f2;
    a2 = m2[f2] + "";
    n2 = or(a2);
    p2 = n2[0];
    y2 = n2[1];
    d2 = n2[2];
    if ("" == p2) {
      for (n2 in u2) ke(e2, n2 + a2, r2, i2, true);
      continue;
    }
    c2 = Ve(p2);
    n2 = c2.bindType;
    !i2 || (n2 = c2.delegateType);
    n2 = n2 || p2;
    v2 = n2;
    if (n2 = Ge(u2[v2])) {
      a2 = n2;
      h2 = null;
      "" != d2 && (h2 = new RegExp("(^|\\.)" + va.call(y2, "\\.(?:.*\\.|)") + "(\\.|$)"));
      x2 = a2.length;
      d2 = x2;
      for (; d2--; ) {
        n2 = a2[d2];
        T2 = o2 || p2 == n2.origType;
        b2 = !r2 || r2.guid == n2.guid;
        w2 = h2 ? h2.test(n2.namespace) : true;
        g2 = !i2 || i2 == n2.selector || "**" == i2 && !!n2.selector;
        T2 && b2 && w2 && g2 && (a2.splice(d2, 1), !n2.selector || rr(a2, It(a2) - 1), !c2.remove || c2.remove.call(e2, n2));
      }
      x2 > 0 && 0 == a2.length && (n2 = c2.teardown, (!n2 || n2.call(e2, y2, l2.handle) === false) && Rt(e2, v2, l2.handle), delete u2[v2]);
    }
  }
  W(u2) && z(t, e2, "handle events");
}
function re(r2, o2, u2, a2) {
  u2 = u2 || n;
  var l2, f2, c2, v2, h2, y2, g2, m2, d2, p2 = [u2];
  if (3 == u2.nodeType || 8 == u2.nodeType) return;
  l2 = hn(r2, "type") ? r2.type : r2;
  f2 = [];
  hn(r2, "namespace") && (f2 = r2.namespace.split("."));
  c2 = gn;
  if (c2.test(l2 + e.event.triggered)) return;
  l2.indexOf(".") === -1 || (f2 = l2.split("."), l2 = ma.call(f2), xa.call(f2));
  d2 = l2.indexOf(":") === -1 && "on" + l2;
  r2[e.expando] || ("object" == typeof r2 || (r2 = false), r2 = we(l2, r2));
  a2 ? r2.isTrigger = 2 : r2.isTrigger = 3;
  r2.namespace = va.call(f2, ".");
  r2.namespace ? r2.rnamespace = new RegExp("(^|\\.)" + va.call(f2, "\\.(?:.*\\.|)") + "(\\.|$)") : r2.rnamespace = null;
  r2.result = void 0;
  r2.target || (r2.target = u2);
  c2 = [r2];
  null != o2 && (c2 = X(o2, c2));
  o2 = e.event.special[l2];
  !o2 && (o2 = Ii);
  if (!a2 && o2.trigger && o2.trigger.apply(u2, c2) === false) return;
  if (!a2 && !o2.noBubble && !G(u2)) {
    v2 = o2.delegateType || l2;
    f2 = gn;
    f2 = !f2.test(v2 + l2) ? u2.parentNode : u2;
    h2 = u2;
    for (; f2; ) {
      p2.push(f2);
      h2 = f2.parentNode;
      [f2, h2] = [h2, f2];
    }
    f2 = u2.ownerDocument || n;
    h2 == f2 && p2.push(h2.defaultView || h2.parentWindow || pa);
  } else {
    v2 = l2;
  }
  y2 = p2.length;
  g2 = u2;
  h2 = 0;
  for (; h2 < y2; ) {
    f2 = p2[h2];
    ++h2;
    if (r2.isPropagationStopped()) break;
    h2 > 1 ? r2.type = v2 : r2.type = o2.bindType || l2;
    m2 = s(t, f2, "events");
    g2 = void 0;
    m2 && !!m2[r2.type] && (g2 = s(t, f2, "handle"));
    !g2 || g2.apply(f2, c2);
    !d2 || (g2 = f2[d2], g2 && !!g2.apply && ve(f2) && (r2.result = g2.apply(f2, c2), r2.result === false && r2.preventDefault()));
    g2 = f2;
  }
  !a2 && !r2.isDefaultPrevented() && (o2 = o2._default, (o2 ? o2.apply(Array.prototype.pop.call(p2), c2) === false : true) && ve(u2) && (a2 = u2[l2], d2 && i(a2) && !G(u2) && (o2 = u2[d2], !o2 || (u2[d2] = null), e.event.triggered = l2, l2 = l2 + "", !r2.isPropagationStopped() || g2.addEventListener(l2, pr), a2.call(u2), !r2.isPropagationStopped() || g2.removeEventListener(l2, pr), a2 = e.event, a2.triggered = void 0, !o2 || (u2[d2] = o2))));
  return r2.result;
}
function au(e2, t2) {
  var n2 = Ft(t2[0]);
  t2[0] = n2;
  var r2 = n2.type, i2 = ur(e2, r2), o2 = [];
  !i2 || (o2 = i2);
  i2 = Ve(r2);
  n2.delegateTarget = e2;
  if (i2.preDispatch && false == i2.preDispatch.call(e2, n2)) return;
  var s2 = sr(e2, n2, o2);
  o2 = 0;
  for (; ; ) {
    r2 = o2 < s2.length && !n2.isPropagationStopped();
    if (!r2) {
      break;
    }
    var a2 = s2[o2];
    ++o2;
    n2.currentTarget = a2.elem;
    var f2, l2 = a2.handlers, u2 = 0;
    for (; ; ) {
      r2 = u2 < l2.length && !n2.isImmediatePropagationStopped();
      if (!r2) {
        break;
      }
      r2 = l2[u2];
      ++u2;
      f2 = n2.rnamespace;
      (f2 && r2.namespace !== false ? !!f2.test(r2.namespace) : true) && (n2.handleObj = r2, n2.data = r2.data, !r2.one || lr(n2), f2 = r2.handler, r2 = b[r2.origType], r2 && !!r2.handle && (f2 = r2.handle), r2 = f2.apply(a2.elem, t2), r2 === void 0 || (n2.result = r2, r2 === false && (n2.preventDefault(), n2.stopPropagation())));
    }
  }
  !i2.postDispatch || i2.postDispatch.call(e2, n2);
  return n2.result;
}
function Xe(e2, n2, r2) {
  if (!r2) {
    s(t, e2, n2) === void 0 && (r2 = null, Te(e2, n2, ne, r2, r2, false));
    return;
  }
  p(t, e2, n2, false);
  r2 = null;
  Te(e2, n2, { namespace: false, handler: function(i2) {
    var u2, r3, se2, a2, o2 = s(t, this, n2);
    if (0 != (+i2.isTrigger & 1) && !!this[n2]) {
      if (!o2) {
        r3 = da.call(arguments);
        p(t, this, n2, r3);
        this[n2]();
        o2 = s(t, this, n2);
        p(t, this, n2, false);
        if (r3 != o2) {
          i2.stopImmediatePropagation();
          i2.preventDefault();
          return o2;
        }
      } else {
        se2 = b[n2];
        se2 && !!se2.delegateType && i2.stopPropagation();
      }
    } else {
      !o2 || (r3 = da.call(o2, 1), u2 = t, a2 = De, p(u2, this, n2, a2.trigger(o2[0], r3, this)), i2.stopPropagation(), i2.isImmediatePropagationStopped = ne);
    }
  } }, r2, r2, false);
}
function pr(e2) {
  e2.stopPropagation();
}
var Se = [];
var Jr = Function.prototype.toString.call(Object);
var a = {};
var nn = {};
var n = document;
var rn = ["type", "src", "nonce", "noModule"];
var Kr = /HTML$/i;
var ei = /\D/g;
var e = void 0;
e = function(t2, n2) {
  return new e.fn.init(t2, n2);
};
(function() {
  let t2 = e, n2 = Se.push, i2 = Se.sort;
  n2 = { jquery: "3.7.1", constructor: t2, length: 0, toArray: function() {
    return da.call(this);
  }, get: function(e2) {
    if (e2 == null) return da.call(this);
    e2 = +e2;
    if (e2 < 0) {
      var t3 = this;
      return t3[e2 + this.length];
    }
    return this[e2];
  }, pushStack: function(e2) {
    e2 = d(this.constructor(), e2);
    e2.prevObject = this;
    return e2;
  }, each: function(e2) {
    return r(this, e2);
  }, map: function(e2) {
    var r2, n3 = [], i3 = this.length, t3 = 0;
    for (; t3 < i3; ++t3) {
      r2 = this[t3];
      r2 = e2.call(r2, t3, this[t3]);
      r2 == null || ca.call(n3, r2);
    }
    e2 = this;
    return e2.pushStack(ba.call(n3));
  }, slice: function() {
    let e2 = this;
    return e2.pushStack(fo(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, even: function() {
    return Ln(this, 0);
  }, odd: function() {
    return Ln(this, 1);
  }, eq: function(e2) {
    var t3 = this.length;
    e2 = +e2;
    e2 < 0 && (e2 = e2 + t3);
    var n3 = [];
    e2 >= 0 && e2 < t3 && ca.call(n3, this[e2]);
    return this.pushStack(n3);
  }, end: function() {
    var e2 = this.prevObject;
    return e2 != null ? e2 : this.constructor();
  }, push: n2, sort: i2, splice: Se.splice, extend: St };
  e.fn = n2;
  e.prototype = n2;
  Wn(e, function(e2, t3, n3) {
    return e2;
  });
  t2 = e;
  t2.extend = St;
  t2.expando = "jQuery" + ("3.7.1" + Math.random()).replace(ei, "");
  t2.isReady = true;
  t2.error = function(e2) {
    throw new Error(e2 + "");
  };
  t2.noop = On;
  t2.isPlainObject = V;
  t2.isEmptyObject = W;
  t2.globalEval = function(i3, n3, a2) {
    let t3 = i3 + "";
    Pe(t3, n3, a2);
  };
  t2.each = r;
  t2.text = Me;
  t2.makeArray = X;
  t2.inArray = k;
  t2.isXMLDoc = Z;
  t2.merge = d;
  t2.grep = f;
  t2.map = E;
  t2.guid = 1;
  t2.support = a;
  n2[Symbol.iterator] = Array.prototype[Symbol.iterator];
  r("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t3) {
    e2 = t3 + "";
    nn["[object " + e2 + "]"] = e2.toLowerCase();
  });
})();
var w = /[^\x20\t\r\n\f]+/g;
e.Callbacks = ho;
var F = function(e2) {
  return e2;
};
var Ee = function(e2) {
  throw e2;
};
e.Deferred = q;
e.when = function(g2) {
  var ie2 = arguments.length, e2 = ie2, n2 = null;
  ie2 > 0 && (n2 = g2);
  var o2 = [];
  o2.length = e2;
  var r2 = da.call(arguments), t2 = q(null), u2 = function(i2) {
    return function(p2) {
      var u3 = +i2 | 0;
      o2[u3] = this;
      arguments.length > 1 ? r2[u3] = da.call(arguments) : r2[u3] = p2;
      u3 = ie2 - 1;
      ie2 = u3;
      u3 > 0 || t2.resolveWith(o2, r2);
    };
  };
  if (ie2 <= 1) {
    var a2 = !(ie2 > 0), s2 = t2.done(u2(e2)).resolve;
    Mn(n2, s2, t2.reject, a2);
    n2 = "pending" == t2.state() + "";
    n2 || (a2 = r2[e2], a2 && i(a2.then) && (n2 = true));
    if (n2) return t2.then();
  }
  for (; true; ) {
    --e2;
    if (e2 < 0) break;
    n2 = r2[e2];
    a2 = u2(e2);
    Mn(n2, a2, t2.reject, false);
  }
  return t2.promise();
};
var ti = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
e.Deferred.exceptionHook = function(e2, t2) {
  var n2 = pa;
  if (!("console" in n2)) return;
  n2 = n2.console;
  if (!n2 || !("warn" in n2) || !n2.warn) return;
  if (!e2) return;
  n2 = e2.name;
  if (n2 == null) return;
  if (!ti.test(n2)) return;
  n2 = e2.message;
  n2 = n2 != null ? n2 + "" : "";
  n2 = "jQuery.Deferred exception: " + n2;
  console.warn(n2, e2.stack, t2);
};
e.readyException = function(e2) {
  setTimeout(function() {
    return qu(e2);
  }, 0);
};
var rt = q(null);
var Ta = e.fn;
Ta.ready = function(n2) {
  rt.then(n2).catch(function(t2) {
    e.readyException(t2);
  });
  return this;
};
e.isReady = false;
e.readyWait = 1;
e.ready = function(t2) {
  if (t2 !== void 0 && t2) {
    var r2 = +e.readyWait - 1;
    e.readyWait = r2;
    r2 = r2 > 0;
  } else {
    r2 = !!e.isReady;
  }
  if (r2) return;
  e.isReady = true;
  if (t2 !== void 0) {
  }
  t2 = +e.readyWait - 1;
  e.readyWait = t2;
  if (t2 > 0) return;
  rt.resolveWith(n, [e]);
};
Ta = e.ready;
Ta.then = rt.then;
var ka = n.readyState;
"string" == typeof ka || (ka = "");
Ta = "complete" == ka;
!Ta && "loading" != ka && (n.documentElement.doScroll || (Ta = true));
Ta ? setTimeout(e.ready, 0) : (n.addEventListener("DOMContentLoaded", Ie), pa.addEventListener("load", Ie));
var ni = /^-ms-/;
var ri = /-([a-z])/g;
var on = 1;
Ta = [null];
Pn(Ta);
var t = Ta;
Ta = [null];
Pn(Ta);
var g = Ta;
var ii = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
var oi = /[A-Z]/g;
e.hasData = function(e2) {
  return J(g, e2) ? true : J(t, e2);
};
e.data = function(n2, r2, a2) {
  let t2 = g;
  return N(t2, n2, r2, a2);
};
e.removeData = function(e2, t2) {
  z(g, e2, t2);
};
e._data = function(r2, i2, s2) {
  let n2 = t;
  return N(n2, r2, i2, s2);
};
e._removeData = function(e2, n2) {
  z(t, e2, n2);
};
Ta = e.fn;
Ta.data = function(o2, a2) {
  var e2 = this, i2 = e2[0], u2 = null;
  !i2 || (u2 = i2.attributes);
  if (o2 === void 0) {
    a2 = void 0;
    if (e2.length > 0) {
      a2 = s(g, i2, null);
      var n2 = s(t, i2, "hasDataAttrs"), l2 = i2 ? i2.nodeType : i2;
      if (1 == l2 && !n2) {
        n2 = u2 ? u2.length : 0;
        for (; n2 > 0; ) {
          --n2;
          l2 = u2[n2];
          !l2 || (l2 = l2.name, !l2 || 0 == l2.indexOf("data-") && (l2 = L(l2.slice(5)), In(i2, l2, a2[l2])));
        }
        p(t, i2, "hasDataAttrs", true);
      }
    }
    return a2;
  }
  if ("object" == typeof o2) return r(e2, function(t2, n3) {
    p(g, n3, o2, null);
  });
  u2 = null;
  return C(e2, function(a3) {
    return zu(e2, o2, i2, a3);
  }, u2, a2, arguments.length > 1, u2, true);
};
Ta = e.fn;
Ta.removeData = function(t2) {
  return r(this, function(u2, n2) {
    z(g, n2, t2);
  });
};
e.queue = function(t2, n2, u2) {
  return H(t2, n2, u2);
};
e.dequeue = function(t2, i2) {
  return K(t2, i2);
};
e._queueHooks = ge;
Ta = e.fn;
Ta.queue = function(p2, A2) {
  var F2 = void 0;
  if (arguments.length > 0) {
    if ("string" != typeof p2) {
      F2 = p2;
      var n2 = "fx", i2 = 1, o2;
    } else {
      arguments.length > 1 && (F2 = A2);
      n2 = p2;
      i2 = 2;
    }
  } else {
    n2 = "fx";
    i2 = 2;
  }
  if (arguments.length < i2) return H(this[0], n2, void 0);
  if (F2 === void 0) return this;
  o2 = he(n2);
  return r(this, function(n3, r2) {
    var g2 = H(r2, o2, F2);
    ge(r2, o2);
    "fx" == o2 && "inprogress" != g2[0] && K(r2, o2);
  });
};
Ta = e.fn;
Ta.dequeue = function(t2) {
  return r(this, function(o2, n2) {
    K(n2, t2);
  });
};
Ta = e.fn;
Ta.clearQueue = function(t2) {
  (t2 === void 0 || !t2) && (t2 = "fx");
  return this.queue(t2, []);
};
Ta = e.fn;
Ta.promise = function(r2, C2) {
  var e2 = this, i2 = void 0;
  r2 = void 0;
  arguments.length > 0 && ("string" != typeof r2 || (arguments.length > 1 && (r2 = C2), i2 = r2));
  var l2, a2 = he(i2), o2 = q(null), ee2 = 1, u2 = function() {
    ee2 -= 1;
    ee2 > 0 || o2.resolveWith(e2, [e2]);
  }, n2 = e2.length;
  for (; n2 > 0; ) {
    --n2;
    i2 = t;
    l2 = e2[n2];
    i2 = s(i2, l2, a2 + "queueHooks");
    i2 && !!i2.empty && (ee2 = ee2 + 1, i2.empty.add(u2));
  }
  u2();
  return o2.promise(r2);
};
Ta = e.fn;
Ta.delay = function(W2, m2) {
  var r2, n2;
  r2 = arguments.length > 1 && m2 !== void 0 && m2 ? m2 : "fx";
  n2 = e.fx;
  !n2 || (n2 = n2.speeds, !n2 || (n2 = n2[W2 + ""], !n2 || (W2 = n2)));
  return this.queue(r2, function(t2, n3) {
    var r3, p2 = "number" == typeof W2 ? W2 : 0;
    r3 = setTimeout(t2, p2);
    n3.stop = function() {
      clearTimeout(r3);
    };
  });
};
e.contains = ee;
var ui = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
var ai = /^(?:[\0-\x1f\x7f]|-?\d)$/;
e.escapeSelector = Ot;
var si = /* @__PURE__ */ (function() {
  return { composed: true };
})();
e.parseXML = function(t2) {
  if (t2 == null || !t2 || "string" != typeof t2) return null;
  var Q2 = null;
  try {
    var J2 = new DOMParser();
    Q2 = J2.parseFromString(t2, "text/xml");
  } catch {
  }
  var i2, n2 = null, r2 = Q2 != null && !!Q2;
  r2 && (n2 = Q2.getElementsByTagName("parsererror")[0]);
  i2 = n2 != null && !!n2;
  (!r2 || i2) && (i2 && (t2 = va.call(E(n2.childNodes, function(e2, t3, n3) {
    return e2.textContent;
  }, null), "\n")), n2 = e, n2.error("Invalid XML: " + t2));
  return Q2;
};
Ta = n.implementation.createHTMLDocument("").body;
Ta.innerHTML = "<form></form><form></form>";
ka = a;
ka.createHTMLDocument = 2 == Ta.childNodes.length;
var un = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
var an = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
var sn = /^$|^module$|\/(?:java|ecma)script/i;
(function() {
  let e2 = n.createDocumentFragment();
  e2 = e2.appendChild(n.createElement("div"));
  let t2 = n.createElement("input");
  t2.setAttribute("type", "radio");
  t2.setAttribute("checked", "checked");
  t2.setAttribute("name", "t");
  e2.appendChild(t2);
  t2 = a;
  t2.checkClone = e2.cloneNode(true).cloneNode(true).lastChild.checked;
  e2.innerHTML = "<textarea>x</textarea>";
  t2 = a;
  t2.noCloneChecked = !!e2.cloneNode(true).lastChild.defaultValue;
  e2.innerHTML = "<option></option>";
  t2 = a;
  t2.option = !!e2.lastChild;
})();
var li = [1, "<table>", "</table>"];
var fi = [2, "<table><colgroup>", "</colgroup></table>"];
var ci = [2, "<table><tbody>", "</tbody></table>"];
var di = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
var pi = [0, "", ""];
var vi = [1, "<select multiple='multiple'>", "</select>"];
var hi = /<|&#?\w+;/;
e.parseHTML = Wt;
var O = n.documentElement;
var it = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g;
var ot = /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i;
var ut = /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i;
var gi = /^h\d$/i;
var mi = /^(?:input|select|textarea|button)$/i;
var at = {};
Ta = { bool: ot, needsContext: ut };
var st = {};
var qe = { attrHandle: at, match: Ta, pseudos: st, cacheLength: 50 };
var lt = false;
Ta = null;
var R = Ta;
ka = e.expando;
var yi = va.call(xa.call(ka.split(""), Un), "") == ka;
var y = xe;
y.attr = function(e2, t2) {
  var r2 = t2.toLowerCase(), i2 = at[r2], n2 = void 0;
  i2 && r2 in at && (n2 = i2(e2, t2, Z(e2)));
  return n2 !== void 0 ? n2 : e2.getAttribute(t2);
};
y.matches = function(e2, t2) {
  let n2 = null;
  return xe(e2, n2, n2, t2);
};
y.matchesSelector = function(e2, t2) {
  return "string" == typeof t2 ? Re(e2, t2) : false;
};
e.find = y;
e.expr = qe;
e.uniqueSort = j;
e.unique = j;
e.fn.uniqueSort = function() {
  let e2 = this, t2 = [];
  d(t2, e2);
  return e2.pushStack(j(t2));
};
var xi = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
var ze = Ta;
Wn(e, function(t2, n2, r2) {
  if (!n2) return t2;
  if ("string" == typeof n2) {
    if (n2.length >= 3 && "<" == n2.charAt(0) && ">" == n2.charAt(n2.length - 1)) {
      var u2 = null;
      u2 = [u2, n2, u2];
    } else {
      u2 = xi.exec(n2);
    }
    var a2 = u2 && !!u2[1];
    if (u2 && (a2 || !r2)) {
      return a2 ? Xo(t2, u2[1], r2) : Zo(t2, u2[2]);
    }
    if (!r2 || !!r2.jquery) {
      r2 || (r2 = ze);
      return r2.find(n2);
    }
    return o(r2).find(n2);
  }
  if (n2.nodeType) {
    t2[0] = n2;
    t2.length = 1;
    return t2;
  }
  if (i(n2)) {
    t2 = ze.ready;
    return t2 !== void 0 ? t2.call(ze, n2) : n2.call(e, e);
  }
  return X(n2, t2);
});
ze = o(n);
var ln = ut;
e.filter = Be;
Ta = e.fn;
Ta.find = function(t2) {
  var e2 = this;
  if ("string" != typeof t2) return e2.pushStack(o(t2).filter(function(n3, r3) {
    return Du(e2, n3, r3);
  }));
  var n2 = e2.pushStack([]), i2 = e2.length, r2 = 0;
  for (; r2 < i2; ++r2) y(t2, e2[r2], n2);
  return i2 > 1 ? j(n2) : n2;
};
Ta = e.fn;
Ta.filter = function(t2) {
  t2 == null && (t2 = []);
  return this.pushStack(Ht(this, t2, false));
};
Ta = e.fn;
Ta.not = function(t2) {
  t2 == null && (t2 = []);
  return this.pushStack(Ht(this, t2, true));
};
Ta = e.fn;
Ta.is = function(t2) {
  t2 == null && (t2 = []);
  "string" == typeof t2 && ln.test(t2) && (t2 = o(t2));
  return Ht(this, t2, false).length > 0;
};
var bi = function(e2) {
  e2 = e2.parentNode;
  return e2 && 11 != e2.nodeType ? e2 : null;
};
var wi = function(e2) {
  return te(e2, "parentNode", null);
};
var Ti = function(e2, t2, n2) {
  return te(e2, "parentNode", n2);
};
var ki = function(e2) {
  return Zn(e2, "nextSibling");
};
var Ci = function(e2) {
  return Zn(e2, "previousSibling");
};
var ji = function(e2) {
  return te(e2, "nextSibling", null);
};
var Ai = function(e2) {
  return te(e2, "previousSibling", null);
};
var Si = function(e2, t2, n2) {
  return te(e2, "nextSibling", n2);
};
var Ei = function(e2, t2, n2) {
  return te(e2, "previousSibling", n2);
};
var qi = function(e2) {
  var t2 = e2.parentNode, n2 = null;
  !t2 || (n2 = t2.firstChild);
  return Xn(n2, e2);
};
var zi = function(e2) {
  return Xn(e2.firstChild, null);
};
var Oi = function(e2) {
  var t2 = e2.contentDocument;
  if (t2 != null && !!Object.getPrototypeOf(t2)) return t2;
  c(e2, "template") && (t2 = e2.content, !t2 || (e2 = t2));
  t2 = [];
  d(t2, e2.childNodes);
  return t2;
};
Ta = e.fn;
Ta.has = function(t2) {
  let n2 = Et(t2, this), r2 = n2.length;
  return this.filter(function(i2, o2) {
    return Wu(n2, r2, i2, o2);
  });
};
Ta = e.fn;
Ta.closest = function(r2, l2) {
  var n2 = [], u2 = null, t2 = "string" == typeof r2;
  t2 || (u2 = o(r2));
  t2 = t2 && ln.test(r2);
  if (!t2) {
    var a2, i2, f2 = this.length, s2 = 0;
    for (; s2 < f2; ++s2) {
      t2 = this[s2];
      i2 = false;
      for (; t2 && t2 != l2 && !i2; ) {
        a2 = t2.nodeType;
        a2 < 11 && (u2 ? u2.index(t2) > -1 : 1 == a2 && Re(t2, r2 + "")) && (n2.push(t2), i2 = true);
        i2 || (t2 = t2.parentNode);
      }
    }
  }
  n2.length > 1 && (n2 = j(n2));
  return this.pushStack(n2);
};
Ta = e.fn;
Ta.index = function(t2) {
  if (t2 == null) {
    t2 = this[0];
    return t2 && !!t2.parentNode ? this.first().prevAll().length : -1;
  }
  if ("string" == typeof t2) {
    t2 = o(t2);
    return ga.call(t2, this[0], 0);
  }
  !t2.jquery || (t2 = t2[0]);
  return ga.call(this, t2, 0);
};
Ta = e.fn;
Ta.add = function(r2, u2) {
  let n2 = this.get();
  return this.pushStack(j(d(n2, Et(r2, u2))));
};
Ta = e.fn;
Ta.addBack = function(t2) {
  var n2 = this.prevObject;
  t2 == null || (n2 = n2.filter(t2));
  return this.add(n2);
};
Ta = e.fn;
Ta.parent = function() {
  return m(this, arguments, bi, false, false, false);
};
Ta.parents = function() {
  return m(this, arguments, wi, false, true, false);
};
Ta.parentsUntil = function() {
  return m(this, arguments, Ti, false, true, true);
};
Ta.next = function() {
  return m(this, arguments, ki, true, false, false);
};
Ta.prev = function() {
  return m(this, arguments, Ci, true, false, false);
};
Ta.nextAll = function() {
  return m(this, arguments, ji, false, false, false);
};
Ta.prevAll = function() {
  return m(this, arguments, Ai, false, true, false);
};
Ta.nextUntil = function() {
  return m(this, arguments, Si, false, false, true);
};
Ta.prevUntil = function() {
  return m(this, arguments, Ei, false, true, true);
};
Ta.siblings = function() {
  return m(this, arguments, qi, false, false, false);
};
Ta.children = function() {
  return m(this, arguments, zi, true, false, false);
};
Ta.contents = function() {
  return m(this, arguments, Oi, true, false, false);
};
(function() {
  let e2 = n.createElement("input"), t2 = n.createElement("select");
  t2 = t2.appendChild(n.createElement("option"));
  e2.type = "checkbox";
  let r2 = a;
  r2.checkOn = "" != e2.value;
  e2 = a;
  e2.optSelected = t2.selected;
  e2 = n.createElement("input");
  e2.value = "t";
  e2.type = "radio";
  t2 = a;
  t2.radioValue = "t" == e2.value;
})();
Ta = /\w+/g;
var fn = { type: { set: function(e2, t2) {
  var n2;
  if (!a.radioValue && "radio" == t2 && c(e2, "input")) {
    n2 = e2.value;
    e2.setAttribute("type", t2 + "");
    !n2 || (e2.value = n2);
    return t2;
  }
} } };
var Di = { set: function(e2, t2, n2) {
  t2 === false ? Ue(e2, n2) : (t2 = n2 + "", e2.setAttribute(t2, t2));
  return n2;
} };
ka = e.fn;
ka.attr = function(n2, r2) {
  return C(this, Qn, n2, r2, arguments.length > 1, void 0, false);
};
ka = e.fn;
ka.removeAttr = function(t2) {
  return r(this, function(o2, n2) {
    Ue(n2, t2);
  });
};
e.attr = Qn;
e.attrHooks = fn;
e.removeAttr = Ue;
r(ot.source.match(Ta), function(e2, t2) {
  if ("string" != typeof t2) return;
  e2 = qe.attrHandle;
  var n2 = e2[t2], g2 = y.attr;
  !n2 || (g2 = n2);
  e2[t2] = function(t3, n3, r2) {
    var w2 = null;
    if (!r2) {
      var i2 = n3.toLowerCase(), o2 = qe.attrHandle, u2 = o2[i2];
      o2[i2] = w2;
      w2 = g2(t3, n3, r2) != null ? i2 : null;
      o2[i2] = u2;
    }
    return w2;
  };
});
var Wi = /^(?:input|select|textarea|button)$/i;
var Li = /^(?:a|area)$/i;
var Oe = { for: "htmlFor", class: "className" };
r(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function(e2, t2) {
  e2 = t2 + "";
  Oe[e2.toLowerCase()] = e2;
});
var ft = { tabIndex: { get: function(e2) {
  var t2 = y.attr(e2, "tabindex");
  if (t2) return parseInt(t2 + "", 10);
  t2 = e2 && e2.nodeName || "";
  return Wi.test(t2) ? 0 : Li.test(t2) && !!e2.href ? 0 : -1;
} } };
a.optSelected || (ft.selected = { get: function(e2) {
  e2 = e2.parentNode;
  e2 && !!e2.parentNode && e2.parentNode.selectedIndex;
  return null;
}, set: function(e2) {
  e2 = e2.parentNode;
  !e2 || (e2.selectedIndex, !e2.parentNode || e2.parentNode.selectedIndex);
  return null;
} });
Ta = e.fn;
Ta.prop = function(n2, r2) {
  return C(this, Mt, n2, r2, arguments.length > 1, void 0, false);
};
e.fn.removeProp = function(e2) {
  return r(this, function(n2, r2) {
    return Lu(e2, n2, r2);
  });
};
e.prop = Mt;
e.propHooks = ft;
e.propFix = Oe;
Ta = e.fn;
Ta.addClass = $e;
Ta.removeClass = function(r2) {
  let t2 = this, e2 = arguments;
  return _e(t2, r2, e2.length);
};
Ta.toggleClass = function(n2, o2) {
  let t2 = this, e2 = arguments;
  return Jn(t2, n2, o2);
};
Ta.hasClass = Kn;
var Ni = /\r/g;
var se = { option: { get: er }, select: { get: function(e2) {
  var a2 = e2.options, t2 = +e2.selectedIndex, n2 = "select-one" == e2.type, s2 = [], u2 = a2.length;
  n2 && (u2 = t2 + 1);
  e2 = t2 < 0 ? u2 : n2 ? t2 : 0;
  for (; e2 < u2; ++e2) {
    var f2, i2, d2, r2 = a2[e2], l2 = r2.selected || e2 == t2;
    f2 = !!r2.disabled;
    i2 = r2.parentNode;
    d2 = i2 && !!i2.disabled;
    if (l2 && !f2 && !(d2 && !!i2 && c(i2, "optgroup"))) {
      r2 = Ye.call(o(r2));
      if (n2) return r2;
      s2.push(r2);
    }
  }
  return n2 ? null : s2;
}, set: function(e2, t2) {
  var r2 = e2.options, i2 = X(t2, null);
  t2 = r2.length;
  var o2, u2, n2 = false;
  for (; t2 > 0; ) {
    --t2;
    o2 = r2[t2];
    u2 = k(er(o2), i2, 0) > -1;
    o2.selected = u2;
    u2 && (n2 = true);
  }
  n2 || (e2.selectedIndex = -1);
  return i2;
} } };
Ta = { set: tr };
a.checkOn || (Ta = { get: function(e2) {
  return e2.getAttribute("value") == null ? "on" : e2.value;
}, set: tr });
se.radio = Ta;
se.checkbox = Ta;
e.fn.val = Ye;
e.valHooks = se;
var le = /^(?:checkbox|radio)$/i;
var Hi = /^([^.]*)(?:\.(.+)|)/;
var Mi = {};
var De = void 0;
var cn = {};
var b = {};
var dn = ["altKey", "bubbles", "cancelable", "changedTouches", "ctrlKey", "detail", "eventPhase", "metaKey", "pageX", "pageY", "shiftKey", "view", "char", "code", "charCode", "key", "keyCode", "button", "buttons", "clientX", "clientY", "offsetX", "offsetY", "pointerId", "pointerType", "screenX", "screenY", "targetTouches", "toElement", "touches", "which"];
var pn = { isDefaultPrevented: be, isPropagationStopped: be, isImmediatePropagationStopped: be, isSimulated: false, preventDefault: function() {
  this.isDefaultPrevented = ne;
  var e2 = this.originalEvent;
  e2 && !this.isSimulated && e2.preventDefault();
}, stopPropagation: function() {
  this.isPropagationStopped = ne;
  var e2 = this.originalEvent;
  e2 && !this.isSimulated && e2.stopPropagation();
}, stopImmediatePropagation: function() {
  this.isImmediatePropagationStopped = ne;
  var e2 = this.originalEvent;
  e2 && !this.isSimulated && e2.stopImmediatePropagation();
  return this.stopPropagation();
} };
De = { global: cn, special: b, handlers: function(e2, t2, n2) {
  var i2 = ur(e2, t2.type), r2 = [];
  i2 ? r2 = i2 : !n2 || (n2 = Ge(n2), !n2 || (r2 = n2));
  t2 = sr(e2, t2, r2);
  n2 = [];
  e2 = 0;
  for (; e2 < t2.length; ) {
    n2.push(t2[e2]);
    ++e2;
  }
  return n2;
}, dispatch: function(i2) {
  var r2 = e.event.triggered;
  return r2 !== void 0 && r2 === i2.type ? void 0 : au(this, arguments);
}, add: Te, remove: ke, fix: Ft };
var vn = (0, function(t2) {
  var e2, n2, r2 = "focus" == t2.type ? "focusin" : "focusout";
  e2 = De;
  n2 = t2.target;
  e2.simulate(r2, n2, Ft(t2));
});
var Pi = (0, function(n2) {
  var r2 = n2.relatedTarget, i2 = n2.handleObj, o2 = void 0;
  (!r2 || r2 != this && !ee(this, r2)) && (n2.type = i2.origType, o2 = i2.handler.apply(this, arguments), n2.type = i2.type);
  return o2;
});
(function() {
  e.event = De;
  e.Event = we;
  pn.constructor = we;
  e.removeEvent = Rt;
  let t2 = e.fn;
  t2.on = function(n2, r2, i2, l2) {
    return Bt(this, n2, r2, i2, l2, 0);
  };
  t2 = e.fn;
  t2.one = function(n2, r2, i2, l2) {
    return Bt(this, n2, r2, i2, l2, 1);
  };
  t2 = e.fn;
  t2.off = function(n2, r2, a2) {
    return fr(this, n2, r2, a2);
  };
  b.load = { noBubble: true };
  (function() {
    b.click = { setup: function() {
      var t3 = le;
      t3.test(this.type) && !!this.click && c(this, "input") && Xe(this, "click", true);
      return false;
    }, trigger: function() {
      var t3 = le;
      t3.test(this.type) && !!this.click && c(this, "input") && Xe(this, "click", false);
      return true;
    }, _default: function(e2) {
      e2 = e2.target;
      var n2 = s(t2, e2, "click"), r2 = le;
      return r2.test(e2.type) && !!e2.click && c(e2, "input") && n2 ? n2 : c(e2, "a");
    } };
  })();
  (function() {
    b.beforeunload = { postDispatch: function(t3) {
      var e2 = t3.result;
      t3 = t3.originalEvent;
      e2 !== void 0 && !!t3 && (t3.returnValue = e2);
    } };
  })();
  dr("focus", "focusin");
  dr("blur", "focusout");
  Ze("mouseenter", "mouseover");
  Ze("mouseleave", "mouseout");
  Ze("pointerenter", "pointerover");
  Ze("pointerleave", "pointerout");
})();
var hn = zn;
var gn = /^(?:focusinfocus|focusoutblur)$/;
var Ii = {};
(function() {
  e.event.trigger = re;
  e.event.simulate = function(t3, n2, r2) {
    let o2 = e.extend, i2 = null;
    re(o2(we(void 0, i2), r2, { type: t3, isSimulated: true }), i2, n2, false);
  };
  let t2 = e.fn;
  t2.trigger = function(n2, i2) {
    return r(this, function() {
      re(n2, i2, this, false);
    });
  };
  t2 = e.fn;
  t2.triggerHandler = function(n2, a2) {
    var e2 = this[0];
    if (e2) return re(n2, a2, e2, true);
  };
})();
var Fi = /<script|<style|<link/i;
var Ri = /checked\s*(?:[^=]|=\s*.checked.)/i;
var Bi = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
Ta = e.fn;
e.htmlPrefilter = mr;
e.clone = Ut;
e.cleanData = Ce;
Ta.detach = function(r2) {
  return gr(this, r2, true);
};
Ta.remove = function(r2) {
  return gr(this, r2, false);
};
Ta.text = function(r2) {
  var e2 = this;
  let n2 = null;
  return C(e2, function(n3) {
    return Pu(e2, n3);
  }, n2, r2, arguments.length > 0, n2, false);
};
Ta.append = function() {
  return ie(this, arguments, Fu, null);
};
Ta.prepend = function() {
  return ie(this, arguments, Ru, null);
};
Ta.before = function() {
  return ie(this, arguments, Bu, null);
};
Ta.after = function() {
  return ie(this, arguments, Uu, null);
};
Ta.empty = function() {
  var t2, n2 = 0;
  for (; true; ) {
    t2 = this[n2];
    ++n2;
    if (t2 == null) break;
    1 == t2.nodeType && (Ce(h(t2, false)), t2.textContent = "");
  }
  return this;
};
Ta.clone = function(s2, p2) {
  var n2 = null;
  arguments.length > 0 && (n2 = s2);
  var r2 = null;
  arguments.length > 1 && (r2 = p2);
  var q2 = false;
  n2 == null || (q2 = !!n2);
  var z2 = q2;
  r2 == null || (z2 = !!r2);
  return this.map(function(n3, r3) {
    return Ut(r3, q2, z2);
  });
};
Ta.html = function(a2) {
  var e2 = this, n2 = void 0, r2 = arguments.length > 0;
  r2 && (n2 = a2);
  var t2 = null;
  return C(e2, function(n3) {
    return $u(e2, n3);
  }, t2, n2, r2, t2, false);
};
Ta.replaceWith = function() {
  let n2 = [];
  return ie(this, arguments, function(t2, r2, i2) {
    return _u(n2, t2, r2, i2);
  }, n2);
};
var ja = [["appendTo", "append"], ["prependTo", "prepend"], ["insertBefore", "before"], ["insertAfter", "after"], ["replaceAll", "replaceWith"]];
ka = 0;
for (; ka < 5; ) {
  Ca = ja[ka], Aa = Ca[0];
  Ta[Aa] = du(Ca[1]);
  ++ka;
}
var Ca;
var Aa;
var Ui = /\[\]$/;
var mn = /\r?\n/g;
var $i = /^(?:submit|button|image|reset|file)$/i;
var _i = /^(?:input|select|textarea|keygen)/i;
e.param = _t;
Ta = e.fn;
Ta.serialize = function() {
  return _t(yr.call(this), false);
};
Ta.serializeArray = yr;
var fe = pa.location;
var We = (function() {
  return { guid: Date.now() };
})();
var ct = /\?/;
var Yi = /%20/g;
var Gi = /#.*$/;
var Vi = /([?&])_=[^&]*/;
var yn = /^(.*?):[ \t]*([^\r\n]*)$/mg;
Ca = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/;
var Xi = /^(?:GET|HEAD)$/;
var Zi = /^\/\//;
var dt = {};
var pt = {};
var vt = n.createElement("a");
Ta = vt;
Ta.href = fe.href;
ka = { text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" };
ka["*"] = "*/*";
Ta = /\bxml\b/;
ja = /\bhtml/;
ja = { xml: Ta, html: ja, json: /\bjson\b/ };
Ta = true;
Aa = { "* text": function(e2) {
  return e2 + "";
}, "text html": Ta, "text json": function(e2) {
  return JSON.parse(e2 + "");
}, "text xml": e.parseXML };
var Sa = fe.href;
var ht = { url: Sa, type: "GET", isLocal: Ca.test(fe.protocol), global: Ta, processData: Ta, async: Ta, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: ka, contents: ja, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: Aa, flatOptions: { url: Ta, context: Ta } };
(function() {
  e.active = 0;
  e.lastModified = {};
  e.etag = {};
  e.ajaxSettings = ht;
  e.ajaxSetup = Tr;
  let t2 = e;
  t2.ajaxPrefilter = br(dt);
  t2 = e;
  t2.ajaxTransport = br(pt);
  e.ajax = Qe;
  e.getJSON = function(e2, t3, n2) {
    return Gt("get", e2, t3, n2, "json");
  };
  e.getScript = function(e2, t3) {
    return Gt("get", e2, void 0, t3, "script");
  };
  r(["get", "post"], function(t3, n2) {
    let r2 = n2 + "";
    e[r2] = function(t4, n3, u2, i2) {
      return Gt(r2, t4, n3, u2, i2);
    };
  });
  xr(dt, "*", function(e2) {
    var t3 = e2.headers;
    if (t3) {
      for (var n2 in t3) "content-type" == n2.toLowerCase() && (n2 = t3[n2], n2 = n2 ? n2 + "" : "", e2.contentType = n2);
    }
  });
})();
e._evalUrl = function(e2, t2, n2) {
  return Qe({ url: e2, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: { "text script": On }, dataFilter: function(i2) {
    return Zu(t2, n2, i2);
  } }, void 0);
};
ka = e.fn;
ka.wrapAll = function(t2) {
  var n2 = this[0];
  !n2 || (i(t2) && (t2 = t2.call(n2, n2)), t2 = Et(t2, n2.ownerDocument).eq(0).clone(true), !n2.parentNode || t2.insertBefore(n2), t2.map(Qu).append(this));
  return this;
};
ka.wrapInner = function(t2) {
  return i(t2) ? r(this, function(d2, n2) {
    let r2 = o(n2);
    r2.wrapInner(t2.call(n2, d2, void 0));
  }) : r(this, function(n2, r2) {
    return Ju(t2, n2, r2);
  });
};
ka.wrap = function(t2) {
  let n2 = i(t2);
  return r(this, function(i2, u2) {
    return Ku(t2, n2, i2, u2);
  });
};
ka.unwrap = function(t2) {
  r(this.parent(t2).not("body"), function(e2, t3) {
    e2 = o(t3);
    e2.replaceWith(t3.childNodes);
  });
  return this;
};
var ce = /^(?:([+-])=|)([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))([a-z%]*)$/i;
var gt = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;
var mt = /^--/;
var T = ["Top", "Right", "Bottom", "Left"];
var Qi = new RegExp(T.join("|"), "i");
var yt = n.createElement("div");
var de = n.createElement("div");
var B = de.style;
var xt = !!B;
ka = null;
var bt = ka;
var wt = ka;
var Tt = ka;
var kt = ka;
var Ct = ka;
var Le = ka;
(function() {
  if (!xt) return;
  B.backgroundClip = "content-box";
  de.cloneNode(true).style.backgroundClip = "";
  a.clearCloneStyle = "content-box" === B.backgroundClip;
  a.boxSizingReliable = Cr;
  a.pixelBoxStyles = function() {
    je();
    return null == kt ? false : kt;
  };
  a.pixelPosition = function() {
    je();
    return null == bt ? false : bt;
  };
  a.reliableMarginLeft = jr;
  a.scrollboxSize = Ar;
  a.reliableTrDimensions = Sr;
})();
var xn = ["Webkit", "Moz", "ms"];
var bn = n.createElement("div").style;
var wn = {};
var Tn = ka;
var Ji = /^(none|table(?!-c[ea]).+)/;
var Ki = { position: "absolute", visibility: "hidden", display: "block" };
var kn = { letterSpacing: "0", fontWeight: "400" };
var Cn = { animationIterationCount: Ta, aspectRatio: Ta, borderImageSlice: Ta, columnCount: Ta, flexGrow: Ta, flexShrink: Ta, fontWeight: Ta, gridArea: Ta, gridColumn: Ta, gridColumnEnd: Ta, gridColumnStart: Ta, gridRow: Ta, gridRowEnd: Ta, gridRowStart: Ta, lineHeight: Ta, opacity: Ta, order: Ta, orphans: Ta, scale: Ta, widows: Ta, zIndex: Ta, zoom: Ta, fillOpacity: Ta, floodOpacity: Ta, stopOpacity: Ta, strokeMiterlimit: Ta, strokeOpacity: Ta };
e.cssHooks = { opacity: { get: function(e2, t2, n2) {
  if (t2) {
    e2 = Ae(e2, "opacity", null);
    return "" === e2 ? "1" : e2;
  }
} } };
e.cssNumber = Cn;
e.cssProps = {};
e.style = A;
e.css = l;
e.cssHooks.height = Or("height");
e.cssHooks.width = Or("width");
ka = e.cssHooks;
ka.marginLeft = Er(jr, function(e2, t2) {
  t2 = parseFloat(Ae(e2, "marginLeft", null) + "");
  Ke(t2) && (t2 = +e2.getBoundingClientRect().left, t2 = t2 - +kr(e2, { marginLeft: 0 }, function() {
    return e2.getBoundingClientRect().left;
  }));
  return t2 + "px";
});
ka = e.cssHooks;
ka.margin = Jt("margin", "", false);
e.cssHooks.padding = Jt("padding", "", Ta);
ka = e.cssHooks;
ka.borderWidth = Jt("border", "Width", Ta);
Ta = e.fn;
Ta.css = function(n2, r2) {
  return C(this, ia, n2, r2, arguments.length > 1, null, false);
};
(function(e2) {
  Tn = e2;
})(function(e2, t2, n2) {
  return Wr(e2, t2, n2, null);
});
Ta = e.expr;
Ta || (Ta = {}, e.expr = Ta);
ka = Ta.pseudos;
ka || (ka = {}, Ta.pseudos = ka);
ka.hidden = function(e2) {
  return !Lr(e2);
};
ka.visible = Lr;
e.ajaxSettings.xhr = Nr;
Ta = Nr();
ka = a;
Ca = Ta && "withCredentials" in Ta;
ka.cors = Ca;
a.ajax = !!Ta;
var eo = !!a.ajax;
e.ajaxTransport(function(e2) {
  var t2;
  if (a.cors || eo && !e2.crossDomain) {
    t2 = null;
    var k2 = t2, C2 = t2;
    return { send: function(Be2, u2) {
      var o2 = e2.xhr(), $e2 = e2.type, r2 = e2.url, i2 = e2.async, a2 = e2.username;
      $e2 = [$e2, r2, i2, a2, e2.password];
      o2.open.apply(o2, $e2);
      if (e2.xhrFields) {
        for ($e2 in e2.xhrFields) o2[$e2] = e2.xhrFields[$e2];
      }
      e2.mimeType && !!o2.overrideMimeType && o2.overrideMimeType(e2.mimeType);
      !e2.crossDomain && !Be2["X-Requested-With"] && (Be2["X-Requested-With"] = "XMLHttpRequest");
      for ($e2 in Be2) o2.setRequestHeader($e2, Be2[$e2]);
      $e2 = function(i3) {
        return function() {
          if (k2) {
            var se2 = null;
            k2 = se2;
            C2 = se2;
            o2.onload = se2;
            o2.onerror = se2;
            o2.onabort = se2;
            o2.ontimeout = se2;
            o2.onreadystatechange = se2;
            if (1 == i3) {
              o2.abort();
            } else {
              if (2 == i3) {
                "number" != typeof o2.status ? u2(0, "error") : (se2 = o2.status, u2(se2, o2.statusText));
              } else {
                var ce2 = xu(o2.status);
                se2 = o2.responseType;
                "string" == typeof se2 ? se2.length > 0 || (se2 = "text") : se2 = "text";
                var le2 = { text: o2.responseText };
                ("text" != se2 || "string" != typeof o2.responseText) && (le2 = { binary: o2.response });
                se2 = o2.statusText;
                u2(ce2, se2, le2, o2.getAllResponseHeaders());
              }
            }
          }
        };
      };
      o2.onload = $e2(0);
      Be2 = $e2(2);
      C2 = Be2;
      o2.onerror = Be2;
      o2.ontimeout = Be2;
      o2.onabort !== void 0 ? o2.onabort = Be2 : o2.onreadystatechange = function() {
        4 == o2.readyState && setTimeout(function() {
          !k2 || C2();
        }, 0);
      };
      k2 = $e2(1);
      Be2 = null;
      e2.hasContent && !!e2.data && (Be2 = e2.data);
      try {
        o2.send(Be2);
      } catch (_e2) {
        if (k2) throw _e2;
      }
    }, abort: function() {
      !k2 || k2();
    } };
  }
});
var to = { accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e2) {
  if ("string" == typeof e2) {
    var t2 = null;
    Pe(e2, t2, t2);
  } else {
    t2 = null;
    Pe(e2 + "", t2, t2);
  }
  return e2;
} } };
(function() {
  e.ajaxPrefilter(function(e2) {
    !e2.crossDomain || (e2.contents.script = false);
  });
  e.ajaxSetup(to);
  e.ajaxPrefilter("script", function(e2) {
    e2.cache === void 0 && (e2.cache = false);
    !e2.crossDomain || (e2.type = "GET");
  });
  e.ajaxTransport("script", function(e2) {
    if (e2.crossDomain || !!e2.scriptAttrs) {
      var T2 = null, k2 = void 0;
      return { send: function(_2, s2) {
        var R2 = e2.scriptAttrs;
        R2 || (R2 = {});
        var a2 = o("<script>");
        a2.attr(R2);
        R2 = e2.scriptCharset;
        a2.prop({ charset: R2, src: e2.url });
        k2 = (0, function(i2) {
          a2.remove();
          T2 = null;
          if (i2) {
            var k3 = "error" == i2.type + "" ? 404 : 200;
            s2(k3, i2.type);
          }
        });
        T2 = k2;
        a2.on("load error", k2);
        var u2 = n.head;
        u2.appendChild(a2[0]);
      }, abort: function() {
        !T2 || T2();
      } };
    }
  });
})();
var jt = /(=)\?(?=&|$)|\?\?/;
var jn = [];
var no = { jsonp: "callback", jsonpCallback: function(t2) {
  var n2 = Array.prototype.pop.call(jn);
  n2 || (n2 = +We.guid, We.guid = n2 + 1, n2 = e.expando + "_" + n2);
  t2[n2] = true;
  return n2;
} };
(function() {
  e.ajaxSetup(no);
  e.ajaxPrefilter("json jsonp", function(t2, n2, r2) {
    if (false != t2.jsonp) {
      var u2 = jt;
      if (u2.test(t2.url)) {
        u2 = "url";
      } else {
        "string" == typeof t2.data && 0 === (t2.contentType || "").indexOf("application/x-www-form-urlencoded") ? (u2 = jt, u2 = u2.test(t2.data)) : u2 = false;
        u2 = u2 && "data";
      }
    } else {
      u2 = false;
    }
    var s2, l2, a2;
    if (u2 || "jsonp" === t2.dataTypes[0]) {
      s2 = t2.jsonpCallback;
      var Ue2 = s2;
      i(s2) && (Ue2 = t2.jsonpCallback());
      t2.jsonpCallback = Ue2;
      u2 ? (s2 = t2[u2], l2 = jt, t2[u2] = s2.replace(l2, "$1" + Ue2)) : false != t2.jsonp && (u2 = ct, l2 = u2.test(t2.url) ? "&" : "?", u2 = t2.url, s2 = t2.jsonp, t2.url = u2 + (l2 + (s2 + ("=" + Ue2))));
      u2 = null;
      var _e2 = u2, Ye2 = u2;
      u2 = t2.converters;
      u2["script json"] = function() {
        if (!_e2) {
          var v2 = e;
          v2.error(Ue2 + " was not called");
        }
        return _e2[0];
      };
      t2.dataTypes[0] = "json";
      a2 = pa;
      Ye2 = a2[Ue2];
      a2[Ue2] = function() {
        _e2 = arguments;
      };
      r2.always(function() {
        Ye2 === void 0 ? o(a2).removeProp(Ue2) : a2[Ue2] = Ye2;
        !t2[Ue2] || (t2.jsonpCallback = n2.jsonpCallback, jn.push(Ue2));
        var N2;
        _e2 && i(Ye2) && (N2 = Ye2, N2(_e2[0]));
        N2 = null;
        _e2 = N2;
        Ye2 = N2;
      });
      return "script";
    }
  });
})();
Ta = e.fn;
Ta.load = function(u2, n2, ae2) {
  var e2 = this, t2 = u2 + "", re2 = "", ie2 = false;
  u2 = t2.indexOf(" ");
  u2 > -1 && (re2 = M(t2.slice(u2)), ie2 = true, t2 = t2.slice(0, u2));
  i(n2) ? (ae2 = n2, n2 = void 0, u2 = "GET") : u2 = n2 && "object" == typeof n2 ? "POST" : "GET";
  if (e2.length > 0) {
    var le2 = null;
    t2 = Qe({ url: t2, type: u2, dataType: "html", data: n2 }, void 0).done(function(C2) {
      le2 = arguments;
      if (ie2) {
        var i2 = o("<div>"), j2 = null;
        i2.append(Wt(C2, j2, j2));
        e2.html(i2.find(re2));
      } else {
        e2.html(C2);
      }
    });
    !ae2 || t2.always(function(i2, o2) {
      r(e2, function(y2, m2) {
        var x2 = le2;
        x2 || (x2 = [i2.responseText, o2, i2]);
        ae2.apply(m2, x2);
      });
    });
  }
  return e2;
};
var An = {};
Ta = e.fn;
Ta.show = function() {
  return ue(this, true);
};
Ta = e.fn;
Ta.hide = function() {
  return ue(this, false);
};
Ta = e.fn;
Ta.toggle = function(t2) {
  return "boolean" == typeof t2 ? t2 ? this.show() : this.hide() : r(this, oa);
};
var Sn = void 0;
var pe = void 0;
(function() {
  let t2 = { set: function(e2) {
    var t3 = e2.elem, n3 = t3 ? t3.nodeType : t3;
    n3 && !!t3.parentNode && (n3 = e2.prop, t3[n3] = e2.now);
  } }, i2 = { _default: { get: function(t3) {
    var n3 = t3.elem;
    t3 = t3.prop;
    var r3 = n3 ? n3.nodeType : n3;
    r3 = 1 != r3;
    r3 || (r3 = n3[t3] != null && n3.style[t3] == null);
    if (r3) return n3[t3];
    t3 = e.css(n3, t3, "");
    return !t3 || "auto" == t3 ? 0 : t3;
  }, set: function(t3) {
    var r3 = t3.prop, n3 = t3.elem, i3 = e.fx.step[r3];
    if (i3) {
      i3.call(e.fx.step, t3);
      return;
    }
    i3 = n3 && n3.nodeType;
    if (1 == i3) {
      e.cssHooks[r3] ? i3 = true : (i3 = n3.style, i3 = i3[Xt(r3 + "")] != null);
    } else {
      i3 = false;
    }
    if (i3) {
      i3 = e;
      var o2 = t3.now;
      i3.style(n3, r3, o2 + t3.unit);
    } else {
      n3[r3] = t3.now;
    }
  } }, scrollTop: t2, scrollLeft: t2 };
  pe = i2;
  t2 = wu;
  let n2 = Tu, r2 = { constructor: t2, init: n2, cur: function() {
    return Hr(this);
  }, run: function(e2) {
    return Kt(this, +e2);
  } };
  Sn = r2;
  t2.prototype = r2;
  t2.propHooks = i2;
  n2.prototype = r2;
  e.Tween = t2;
  e.easing = { linear: function(e2) {
    return e2;
  }, swing: function(e2) {
    return 0.5 - Math.cos(e2 * Math.PI) / 2;
  }, _default: "swing" };
  e.fx = n2;
  t2 = e.fx;
  t2.step = {};
})();
Ta = null;
var U = Ta;
var Ne = Ta;
var ro = /^(?:toggle|show|hide)$/;
var io = /queueHooks$/;
var $ = {};
var _ = [];
var v = [];
(function() {
  _ = [function(e2, n3, r2) {
    var f2 = this, h2 = "width" in n3 || "height" in n3, d2, o2, i3, u2, g2, a2, p2, c2;
    d2 = {};
    o2 = e2.style;
    i3 = e2 ? e2.nodeType : e2;
    i3 = !!i3 && et(e2, null);
    var ir2 = i3;
    i3 = s(t, e2, "fxshow");
    r2.queue || (u2 = ge(e2, "fx"), u2.unqueued == null && (u2.unqueued = 0, g2 = u2.empty.fire, a2 = u2.empty, a2.fire = function() {
      u2.unqueued || g2();
    }), u2.unqueued = +u2.unqueued + 1, f2.always(function() {
      f2.always(function() {
        u2.unqueued = +u2.unqueued - 1;
        0 == H(e2, "fx", void 0).length && u2.empty.fire();
      });
    }));
    c2 = false;
    for (a2 in n3) {
      p2 = n3[a2];
      if (ro.test(p2)) {
        delete n3[a2];
        "toggle" === p2 && (c2 = true);
        if (ir2 && "hide" === p2 || !ir2 && "show" === p2) {
          if ("show" === p2 && i3 && i3[a2] !== void 0) {
            ir2 = true;
          } else {
            continue;
          }
        }
        d2[a2] = i3 && i3[a2] || A(e2, a2, void 0, null);
      }
    }
    a2 = W(n3);
    if (a2 && W(d2)) return;
    if (h2 && 1 === e2.nodeType) {
      n3 = o2.overflow;
      p2 = o2.overflowX;
      r2.overflow = [n3, p2, o2.overflowY];
      n3 = i3 ? i3.display : i3;
      var cr2 = n3;
      cr2 == null && (cr2 = s(t, e2, "display"));
      n3 = null;
      n3 = l(e2, "display", n3, n3);
      if ("none" === n3) {
        cr2 ? n3 = cr2 : (ue([e2], true), n3 = o2.display, !n3 && (n3 = cr2), cr2 = n3, n3 = null, n3 = l(e2, "display", n3, n3), ue([e2], false));
      }
      ("inline" === n3 || "inline-block" === n3 && cr2 != null) && (n3 = null, "none" === l(e2, "float", n3, n3) && (a2 && (f2.done(function() {
        o2.display = cr2;
      }), cr2 == null && (n3 = o2.display, cr2 = "none" === n3 ? "" : n3)), o2.display = "inline-block"));
    }
    !r2.overflow || (o2.overflow = "hidden", f2.always(function() {
      o2.overflow = r2.overflow[0];
      o2.overflowX = r2.overflow[1];
      o2.overflowY = r2.overflow[2];
    }));
    n3 = false;
    for (a2 in d2) {
      n3 || (i3 ? "hidden" in i3 && (ir2 = !!i3.hidden) : i3 = N(t, e2, "fxshow", { display: cr2 }), c2 && (i3.hidden = !ir2), ir2 && ue([e2], true), f2.done(function() {
        ir2 || ue([e2], false);
        z(t, e2, "fxshow");
        for (var y2 in d2) A(e2, y2, d2[y2], null);
      }));
      n3 = ir2 && i3[a2] || 0;
      n3 = _r(n3, a2, f2);
      a2 in i3 || (i3[a2] = n3.start, ir2 && (n3.end = n3.start, n3.start = 0));
    }
  }];
  $["*"] = [function(e2, t2) {
    let n3 = this.createTween(e2, t2), r2 = n3.elem;
    e2 += "";
    Wr(r2, e2, ce.exec(t2), n3);
    return n3;
  }];
  let i2 = function(e2, t2, n3) {
    return Yr(e2, t2, n3);
  };
  i2.tweeners = $;
  i2.tweener = ju;
  i2.prefilters = _;
  i2.prefilter = Au;
  e.Animation = i2;
  e.speed = Gr;
  let n2 = e.fn;
  n2.fadeTo = function(r2, l2, i3, p2) {
    let e2 = this.filter(et);
    e2.css("opacity", 0);
    e2.show();
    e2 = e2.end();
    let n3 = { opacity: l2 };
    return e2.animate(n3, r2, i3, p2);
  };
  n2.animate = function(o2, a2, l2, n3) {
    var u2 = W(o2), i3 = Gr(a2, l2, n3);
    n3 = (0, function() {
      var w2 = Yr(this, x({}, o2, false), i3);
      (u2 || !!s(t, this, "finish")) && w2.stop(true);
    });
    n3.finish = n3;
    return u2 || false == i3.queue ? r(this, n3) : this.queue(i3.queue, n3);
  };
  n2.stop = function(z2, i3, D2) {
    "string" == typeof z2 || (D2 = i3, i3 = z2, z2 = void 0);
    if (i3) {
      var W2 = "fx";
      !z2 || (W2 = z2 + "");
      r(this, function(t2, n3) {
        H(n3, W2, []);
      });
    }
    return r(this, function() {
      if (z2 != null) {
        var We2 = z2 + "queueHooks", i4 = true, r2, u2, o2;
      } else {
        We2 = "";
        i4 = false;
      }
      r2 = s(t, this, null);
      if (i4) {
        r2[We2] && !!r2[We2].stop && Vr(r2[We2], D2);
      } else {
        for (We2 in r2) r2[We2] && !!r2[We2].stop && io.test(We2) && Vr(r2[We2], D2);
      }
      r2 = 0 + v.length;
      i4 = true;
      for (; r2 > 0; ) {
        --r2;
        We2 = v[r2 | 0];
        u2 = We2.elem == this;
        z2 == null ? o2 = true : (o2 = We2.queue, o2 = o2 === z2);
        u2 && o2 && (We2 = We2.anim, !We2 || We2.stop(D2), ha.call(v, r2, 1), i4 = false);
      }
      (i4 || !D2) && K(this, z2);
    });
  };
  n2.finish = function(n3) {
    var m2 = n3;
    false != m2 && (m2 || (m2 = "fx"));
    return r(this, function() {
      var o2, u2, i3 = s(t, this, null), De2 = i3[m2 + "queue"], r2 = i3[m2 + "queueHooks"], a2 = De2 ? De2.length : 0;
      i3.finish = true;
      H(this, m2, []);
      r2 && !!r2.stop && r2.stop.call(this, true);
      r2 = 0 + v.length;
      for (; r2 > 0; ) {
        --r2;
        o2 = v[r2 | 0];
        o2.elem == this ? (u2 = o2.queue, u2 = u2 === m2) : u2 = false;
        u2 && (o2 = o2.anim, !o2 || o2.stop(true), ha.call(v, r2, 1));
      }
      r2 = 0;
      for (; r2 < a2; ++r2) De2[r2] && !!De2[r2].finish && (o2 = De2[r2].finish, o2.call(this, void 0));
      delete i3.finish;
    });
  };
  r(["toggle", "show", "hide"], function(t2, f2) {
    let r2 = f2 + "", i3 = n2[r2];
    n2[r2] = function(n3, y2, v2) {
      var x2;
      if (n3 == null || "boolean" == typeof n3) return i3.apply(this, arguments);
      x2 = tt(r2, true);
      return this.animate(x2, n3, y2, v2);
    };
  });
  n2.slideDown = function(r2, i3, f2) {
    let n3 = tt("show", false);
    return this.animate(n3, r2, i3, f2);
  };
  n2.slideUp = function(r2, i3, f2) {
    let n3 = tt("hide", false);
    return this.animate(n3, r2, i3, f2);
  };
  n2.slideToggle = function(r2, i3, f2) {
    let n3 = tt("toggle", false);
    return this.animate(n3, r2, i3, f2);
  };
  n2.fadeIn = function(n3, r2, l2) {
    return this.animate({ opacity: "show" }, n3, r2, l2);
  };
  n2.fadeOut = function(n3, r2, l2) {
    return this.animate({ opacity: "hide" }, n3, r2, l2);
  };
  n2.fadeToggle = function(n3, r2, l2) {
    return this.animate({ opacity: "toggle" }, n3, r2, l2);
  };
  v = [];
  e.timers = v;
  e.fx.tick = Fr;
  i2 = e.fx;
  i2.timer = function(n3) {
    Br(n3);
  };
  e.fx.interval = 13;
  e.fx.start = Rr;
  e.fx.stop = Ir;
  i2 = e.fx;
  i2.speeds = { slow: 600, fast: 200, _default: 400 };
})();
qe.pseudos.animated = function(t2) {
  return f(e.timers, function(u2, n2) {
    return t2 == u2.elem;
  }, false).length;
};
e.offset = { setOffset: Xr };
var He = e.fn;
He.offset = nt;
He.position = tn;
He.offsetParent = function() {
  return this.map(aa);
};
var oo = function() {
  return !!a.pixelPosition();
};
e.cssHooks.top = Zr("top");
e.cssHooks.left = Zr("left");
Qr("scrollLeft", "pageXOffset", false);
Qr("scrollTop", "pageYOffset", true);
ae("Height", "height", "padding", "innerHeight");
ae("Height", "height", "content", "height");
ae("Height", "height", "", "outerHeight");
ae("Width", "width", "padding", "innerWidth");
ae("Width", "width", "content", "width");
ae("Width", "width", "", "outerWidth");
var uo = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
(function() {
  e.proxy = function(r2, o2) {
    if ("string" == typeof o2) {
      o2 = r2[o2];
      var n2 = o2, a2 = r2, u2, t2;
    } else {
      n2 = r2;
      a2 = o2;
    }
    if (!i(n2)) return;
    u2 = da.call(arguments, 2, 9007199254740991);
    t2 = n2.guid;
    t2 || (t2 = +e.guid, e.guid = t2 + 1, n2.guid = t2);
    r2 = (0, function() {
      var i2 = u2.concat(da.call(arguments, 0, 9007199254740991)), v2 = a2 ? a2 : this;
      return n2.apply(v2, i2);
    });
    r2.guid = t2;
    return r2;
  };
  e.holdReady = function(t2) {
    t2 ? (t2 = e, t2.readyWait = +e.readyWait + 1) : e.ready(true);
  };
  e.isArray = function(e2) {
    return Array.isArray(e2);
  };
  e.parseJSON = function(e2) {
    return JSON.parse(e2 + "");
  };
  e.nodeName = c;
  e.isFunction = i;
  e.isWindow = G;
  e.camelCase = L;
  e.type = D;
  e.now = function() {
    return Date.now();
  };
  e.isNumeric = function(e2) {
    var t2 = D(e2);
    if ("number" != t2 && "string" != t2) return false;
    t2 = +e2;
    return isFinite(t2 - parseFloat(e2 + ""));
  };
  e.trim = function(e2) {
    return e2 == null ? "" : e2.replace(uo, "$1");
  };
})();
var ao = e.fn;
r(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e2, t2) {
  let n2 = t2 + "";
  ao[n2] = function(t3) {
    return this.on(n2, t3);
  };
});
var Y = e.fn;
Y.bind = function(n2, r2, s2) {
  let t2 = this, e2 = arguments;
  return t2.on(n2, null, r2, s2);
};
Y.unbind = function(n2, u2) {
  let t2 = this, e2 = arguments;
  return t2.off(n2, null, u2);
};
Y.delegate = function(r2, n2, i2, l2) {
  let t2 = this, e2 = arguments;
  return t2.on(n2, r2, i2, l2);
};
Y.undelegate = function(l2, r2, w2) {
  var n2 = this, t2 = arguments;
  if (1 == t2.length) return n2.off(l2, "**");
  var e2 = "string" == typeof l2 ? l2.length > 0 ? l2 : "**" : l2 ? l2 + "" : "**";
  return n2.off(r2, e2, w2);
};
Y.hover = function(t2, e2) {
  var n2 = this;
  e2 = arguments;
  !e2 && (e2 = t2);
  return n2.on("mouseenter", t2).on("mouseleave", e2);
};
r("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, t2) {
  let n2 = t2 + "";
  Y[n2] = function(r2, f2) {
    return arguments.length > 0 ? this.on(n2, null, r2, f2) : this.trigger(n2);
  };
});
Ta = pa;
ka = Ta.define;
"function" == typeof ka && !!ka.amd && Ta.define("jquery", [], function() {
  return e;
});
var S = pa;
var so = S.jQuery;
var lo = S.$;
e.noConflict = function(t2) {
  S.$ == e && (S.$ = lo);
  t2 && S.jQuery == e && (S.jQuery = so);
  return e;
};
S.jQuery = e;
S.$ = e;
var fa = e;
export {
  fa as $,
  e as jQuery
};
