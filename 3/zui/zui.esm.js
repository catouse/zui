var ua = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var Yt = (n, t, e) => (ua(n, t, "read from private field"), e ? e.call(n) : t.get(n)), rn = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, ve = (n, t, e, s) => (ua(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e);
const t_ = "3.0.0", e_ = 1786610299470, s_ = "production", n_ = "448aeee2922572c194ab10734c2a2c5ed26e6002", fe = document, Sn = window, Ml = fe.documentElement, qe = fe.createElement.bind(fe), Al = qe("div"), Ni = qe("table"), Fd = qe("tbody"), fa = qe("tr"), { isArray: Yn, prototype: Il } = Array, { concat: Od, filter: Rr, indexOf: Dl, map: Ll, push: Hd, slice: Pl, some: zr, splice: Wd } = Il, Bd = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, jd = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ud = /<.+>/, Vd = /^\w+$/;
function Fr(n, t) {
  const e = Kd(t);
  return !n || !e && !Ke(t) && !ut(t) ? [] : !e && jd.test(n) ? t.getElementsByClassName(n.slice(1).replace(/\\/g, "")) : !e && Vd.test(n) ? t.getElementsByTagName(n) : t.querySelectorAll(n);
}
class Zn {
  constructor(t, e) {
    if (!t)
      return;
    if (er(t))
      return t;
    let s = t;
    if (wt(t)) {
      const i = e || fe;
      if (s = Bd.test(t) && Ke(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Ud.test(t) ? Fl(t) : er(i) ? i.find(t) : wt(i) ? p(i).find(t) : Fr(t, i), !s)
        return;
    } else if (Ye(t))
      return this.ready(t);
    (s.nodeType || s === Sn) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, e) {
    return new Zn(t, e);
  }
}
const E = Zn.prototype, p = E.init;
p.fn = p.prototype = E;
E.length = 0;
E.splice = Wd;
typeof Symbol == "function" && (E[Symbol.iterator] = Il[Symbol.iterator]);
function er(n) {
  return n instanceof Zn;
}
function ls(n) {
  return !!n && n === n.window;
}
function Ke(n) {
  return !!n && n.nodeType === 9;
}
function Kd(n) {
  return !!n && n.nodeType === 11;
}
function ut(n) {
  return !!n && n.nodeType === 1;
}
function Gd(n) {
  return !!n && n.nodeType === 3;
}
function qd(n) {
  return typeof n == "boolean";
}
function Ye(n) {
  return typeof n == "function";
}
function wt(n) {
  return typeof n == "string";
}
function Mt(n) {
  return n === void 0;
}
function Fs(n) {
  return n === null;
}
function Rl(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function Or(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const t = Object.getPrototypeOf(n);
  return t === null || t === Object.prototype;
}
p.isWindow = ls;
p.isFunction = Ye;
p.isArray = Yn;
p.isNumeric = Rl;
p.isPlainObject = Or;
function mt(n, t, e) {
  if (e) {
    let s = n.length;
    for (; s--; )
      if (t.call(n[s], s, n[s]) === !1)
        return n;
  } else if (Or(n)) {
    const s = Object.keys(n);
    for (let i = 0, r = s.length; i < r; i++) {
      const o = s[i];
      if (t.call(n[o], o, n[o]) === !1)
        return n;
    }
  } else
    for (let s = 0, i = n.length; s < i; s++)
      if (t.call(n[s], s, n[s]) === !1)
        return n;
  return n;
}
p.each = mt;
E.each = function(n) {
  return mt(this, n);
};
E.empty = function() {
  return this.each((n, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function kn(...n) {
  const t = qd(n[0]) ? n.shift() : !1, e = n.shift(), s = n.length;
  if (!e)
    return {};
  if (!s)
    return kn(t, p, e);
  for (let i = 0; i < s; i++) {
    const r = n[i];
    for (const o in r)
      t && (Yn(r[o]) || Or(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), kn(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
p.extend = kn;
E.extend = function(n) {
  return kn(E, n);
};
const Yd = /\S+/g;
function Jn(n) {
  return wt(n) ? n.match(Yd) || [] : [];
}
E.toggleClass = function(n, t) {
  const e = Jn(n), s = !Mt(t);
  return this.each((i, r) => {
    ut(r) && mt(e, (o, a) => {
      s ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
E.addClass = function(n) {
  return this.toggleClass(n, !0);
};
E.removeAttr = function(n) {
  const t = Jn(n);
  return this.each((e, s) => {
    ut(s) && mt(t, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function Zd(n, t) {
  if (n) {
    if (wt(n)) {
      if (arguments.length < 2) {
        if (!this[0] || !ut(this[0]))
          return;
        const e = this[0].getAttribute(n);
        return Fs(e) ? void 0 : e;
      }
      return Mt(t) ? this : Fs(t) ? this.removeAttr(n) : this.each((e, s) => {
        ut(s) && s.setAttribute(n, t);
      });
    }
    for (const e in n)
      this.attr(e, n[e]);
    return this;
  }
}
E.attr = Zd;
E.removeClass = function(n) {
  return arguments.length ? this.toggleClass(n, !1) : this.attr("class", "");
};
E.hasClass = function(n) {
  return !!n && zr.call(this, (t) => ut(t) && t.classList.contains(n));
};
E.get = function(n) {
  return Mt(n) ? Pl.call(this) : (n = Number(n), this[n < 0 ? n + this.length : n]);
};
E.eq = function(n) {
  return p(this.get(n));
};
E.first = function() {
  return this.eq(0);
};
E.last = function() {
  return this.eq(-1);
};
function Jd(n) {
  return Mt(n) ? this.get().map((t) => ut(t) || Gd(t) ? t.textContent : "").join("") : this.each((t, e) => {
    ut(e) && (e.textContent = n);
  });
}
E.text = Jd;
function pe(n, t, e) {
  if (!ut(n))
    return;
  const s = Sn.getComputedStyle(n, null);
  return e ? s.getPropertyValue(t) || void 0 : s[t] || n.style[t];
}
function Jt(n, t) {
  return parseInt(pe(n, t), 10) || 0;
}
function pa(n, t) {
  return Jt(n, `border${t ? "Left" : "Top"}Width`) + Jt(n, `padding${t ? "Left" : "Top"}`) + Jt(n, `padding${t ? "Right" : "Bottom"}`) + Jt(n, `border${t ? "Right" : "Bottom"}Width`);
}
const Mi = {};
function Xd(n) {
  if (Mi[n])
    return Mi[n];
  const t = qe(n);
  fe.body.insertBefore(t, null);
  const e = pe(t, "display");
  return fe.body.removeChild(t), Mi[n] = e !== "none" ? e : "block";
}
function ma(n) {
  return pe(n, "display") === "none";
}
function zl(n, t) {
  const e = n && (n.matches || n.webkitMatchesSelector || n.msMatchesSelector);
  return !!e && !!t && e.call(n, t);
}
function Xn(n) {
  return wt(n) ? (t, e) => zl(e, n) : Ye(n) ? n : er(n) ? (t, e) => n.is(e) : n ? (t, e) => e === n : () => !1;
}
E.filter = function(n) {
  const t = Xn(n);
  return p(Rr.call(this, (e, s) => t.call(e, s, e)));
};
function Pe(n, t) {
  return t ? n.filter(t) : n;
}
E.detach = function(n) {
  return Pe(this, n).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const Qd = /^\s*<(\w+)[^>]*>/, tu = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, ga = {
  "*": Al,
  tr: Fd,
  td: fa,
  th: fa,
  thead: Ni,
  tbody: Ni,
  tfoot: Ni
};
function Fl(n) {
  if (!wt(n))
    return [];
  if (tu.test(n))
    return [qe(RegExp.$1)];
  const t = Qd.test(n) && RegExp.$1, e = ga[t] || ga["*"];
  return e.innerHTML = n, p(e.childNodes).detach().get();
}
p.parseHTML = Fl;
E.has = function(n) {
  const t = wt(n) ? (e, s) => Fr(n, s).length : (e, s) => s.contains(n);
  return this.filter(t);
};
E.not = function(n) {
  const t = Xn(n);
  return this.filter((e, s) => (!wt(n) || ut(s)) && !t.call(s, e, s));
};
function _e(n, t, e, s) {
  const i = [], r = Ye(t), o = s && Xn(s);
  for (let a = 0, l = n.length; a < l; a++)
    if (r) {
      const c = t(n[a]);
      c.length && Hd.apply(i, c);
    } else {
      let c = n[a][t];
      for (; c != null && !(s && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function Ol(n) {
  return n.multiple && n.options ? _e(Rr.call(n.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : n.value || "";
}
function eu(n) {
  return arguments.length ? this.each((t, e) => {
    const s = e.multiple && e.options;
    if (s || Gl.test(e.type)) {
      const i = Yn(n) ? Ll.call(n, String) : Fs(n) ? [] : [String(n)];
      s ? mt(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = Mt(n) || Fs(n) ? "" : n;
  }) : this[0] && Ol(this[0]);
}
E.val = eu;
E.is = function(n) {
  const t = Xn(n);
  return zr.call(this, (e, s) => t.call(e, s, e));
};
p.guid = 1;
function ee(n) {
  return n.length > 1 ? Rr.call(n, (t, e, s) => Dl.call(s, t) === e) : n;
}
p.unique = ee;
E.add = function(n, t) {
  return p(ee(this.get().concat(p(n, t).get())));
};
E.children = function(n) {
  return Pe(p(ee(_e(this, (t) => t.children))), n);
};
E.parent = function(n) {
  return Pe(p(ee(_e(this, "parentNode"))), n);
};
E.index = function(n) {
  const t = n ? p(n)[0] : this[0], e = n ? this : p(t).parent().children();
  return Dl.call(e, t);
};
E.closest = function(n) {
  const t = this.filter(n);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(n) : t;
};
E.siblings = function(n) {
  return Pe(p(ee(_e(this, (t) => p(t).parent().children().not(t)))), n);
};
E.find = function(n) {
  return p(ee(_e(this, (t) => Fr(n, t))));
};
const su = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, nu = /^$|^module$|\/(java|ecma)script/i, iu = ["type", "src", "nonce", "noModule"];
function ru(n, t) {
  const e = p(n);
  e.filter("script").add(e.find("script")).each((s, i) => {
    if (nu.test(i.type) && Ml.contains(i)) {
      const r = qe("script");
      r.text = i.textContent.replace(su, ""), mt(iu, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function ou(n, t, e, s, i) {
  s ? n.insertBefore(t, e ? n.firstChild : null) : n.nodeName === "HTML" ? n.parentNode.replaceChild(t, n) : n.parentNode.insertBefore(t, e ? n : n.nextSibling), i && ru(t, n.ownerDocument);
}
function Re(n, t, e, s, i, r, o, a) {
  return mt(n, (l, c) => {
    mt(p(c), (h, d) => {
      mt(p(t), (u, f) => {
        const g = e ? d : f, _ = e ? f : d, y = e ? h : u;
        ou(g, y ? _.cloneNode(!0) : _, s, i, !y);
      }, a);
    }, o);
  }, r), t;
}
E.after = function() {
  return Re(arguments, this, !1, !1, !1, !0, !0);
};
E.append = function() {
  return Re(arguments, this, !1, !1, !0);
};
function au(n) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (Mt(n))
    return this;
  const t = /<script[\s>]/.test(n);
  return this.each((e, s) => {
    ut(s) && (t ? p(s).empty().append(n) : s.innerHTML = n);
  });
}
E.html = au;
E.appendTo = function(n) {
  return Re(arguments, this, !0, !1, !0);
};
E.wrapInner = function(n) {
  return this.each((t, e) => {
    const s = p(e), i = s.contents();
    i.length ? i.wrapAll(n) : s.append(n);
  });
};
E.before = function() {
  return Re(arguments, this, !1, !0);
};
E.wrapAll = function(n) {
  let t = p(n), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
E.wrap = function(n) {
  return this.each((t, e) => {
    const s = p(n)[0];
    p(e).wrapAll(t ? s.cloneNode(!0) : s);
  });
};
E.insertAfter = function(n) {
  return Re(arguments, this, !0, !1, !1, !1, !1, !0);
};
E.insertBefore = function(n) {
  return Re(arguments, this, !0, !0);
};
E.prepend = function() {
  return Re(arguments, this, !1, !0, !0, !0, !0);
};
E.prependTo = function(n) {
  return Re(arguments, this, !0, !0, !0, !1, !1, !0);
};
E.contents = function() {
  return p(ee(_e(this, (n) => n.tagName === "IFRAME" ? [n.contentDocument] : n.tagName === "TEMPLATE" ? n.content.childNodes : n.childNodes)));
};
E.next = function(n, t, e) {
  return Pe(p(ee(_e(this, "nextElementSibling", t, e))), n);
};
E.nextAll = function(n) {
  return this.next(n, !0);
};
E.nextUntil = function(n, t) {
  return this.next(t, !0, n);
};
E.parents = function(n, t) {
  return Pe(p(ee(_e(this, "parentElement", !0, t))), n);
};
E.parentsUntil = function(n, t) {
  return this.parents(t, n);
};
E.prev = function(n, t, e) {
  return Pe(p(ee(_e(this, "previousElementSibling", t, e))), n);
};
E.prevAll = function(n) {
  return this.prev(n, !0);
};
E.prevUntil = function(n, t) {
  return this.prev(t, !0, n);
};
E.map = function(n) {
  return p(Od.apply([], Ll.call(this, (t, e) => n.call(t, e, t))));
};
E.clone = function() {
  return this.map((n, t) => t.cloneNode(!0));
};
E.offsetParent = function() {
  return this.map((n, t) => {
    let e = t.offsetParent;
    for (; e && pe(e, "position") === "static"; )
      e = e.offsetParent;
    return e || Ml;
  });
};
E.slice = function(n, t) {
  return p(Pl.call(this, n, t));
};
const lu = /-([a-z])/g;
function Hr(n) {
  return n.replace(lu, (t, e) => e.toUpperCase());
}
E.ready = function(n) {
  const t = () => setTimeout(n, 0, p);
  return fe.readyState !== "loading" ? t() : fe.addEventListener("DOMContentLoaded", t), this;
};
E.unwrap = function() {
  return this.parent().each((n, t) => {
    if (t.tagName === "BODY")
      return;
    const e = p(t);
    e.replaceWith(e.children());
  }), this;
};
E.offset = function() {
  const n = this[0];
  if (!n)
    return;
  const t = n.getBoundingClientRect();
  return {
    top: t.top + Sn.pageYOffset,
    left: t.left + Sn.pageXOffset
  };
};
E.position = function() {
  const n = this[0];
  if (!n)
    return;
  const t = pe(n, "position") === "fixed", e = t ? n.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = n.ownerDocument;
    let i = n.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && pe(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== n && ut(i)) {
      const r = p(i).offset();
      e.top -= r.top + Jt(i, "borderTopWidth"), e.left -= r.left + Jt(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - Jt(n, "marginTop"),
    left: e.left - Jt(n, "marginLeft")
  };
};
const Hl = {
  /* GENERAL */
  class: "className",
  contenteditable: "contentEditable",
  /* LABEL */
  for: "htmlFor",
  /* INPUT */
  readonly: "readOnly",
  maxlength: "maxLength",
  tabindex: "tabIndex",
  /* TABLE */
  colspan: "colSpan",
  rowspan: "rowSpan",
  /* IMAGE */
  usemap: "useMap"
};
E.prop = function(n, t) {
  if (n) {
    if (wt(n))
      return n = Hl[n] || n, arguments.length < 2 ? this[0] && this[0][n] : this.each((e, s) => {
        s[n] = t;
      });
    for (const e in n)
      this.prop(e, n[e]);
    return this;
  }
};
E.removeProp = function(n) {
  return this.each((t, e) => {
    delete e[Hl[n] || n];
  });
};
const cu = /^--/;
function Wr(n) {
  return cu.test(n);
}
const Ai = {}, { style: hu } = Al, du = ["webkit", "moz", "ms"];
function uu(n, t = Wr(n)) {
  if (t)
    return n;
  if (!Ai[n]) {
    const e = Hr(n), s = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${du.join(`${s} `)}${s}`.split(" ");
    mt(i, (r, o) => {
      if (o in hu)
        return Ai[n] = o, !1;
    });
  }
  return Ai[n];
}
const fu = {
  animationIterationCount: !0,
  columnCount: !0,
  flexGrow: !0,
  flexShrink: !0,
  fontWeight: !0,
  gridArea: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnStart: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowStart: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  widows: !0,
  zIndex: !0
};
function Wl(n, t, e = Wr(n)) {
  return !e && !fu[n] && Rl(t) ? `${t}px` : t;
}
function pu(n, t) {
  if (wt(n)) {
    const e = Wr(n);
    return n = uu(n, e), arguments.length < 2 ? this[0] && pe(this[0], n, e) : n ? (t = Wl(n, t, e), this.each((s, i) => {
      ut(i) && (e ? i.style.setProperty(n, t) : i.style[n] = t);
    })) : this;
  }
  for (const e in n)
    this.css(e, n[e]);
  return this;
}
E.css = pu;
function Bl(n, t) {
  try {
    return n(t);
  } catch {
    return t;
  }
}
const mu = /^\s+|\s+$/;
function _a(n, t) {
  const e = n.dataset[t] || n.dataset[Hr(t)];
  return mu.test(e) ? e : Bl(JSON.parse, e);
}
function gu(n, t, e) {
  e = Bl(JSON.stringify, e), n.dataset[Hr(t)] = e;
}
function _u(n, t) {
  if (!n) {
    if (!this[0])
      return;
    const e = {};
    for (const s in this[0].dataset)
      e[s] = _a(this[0], s);
    return e;
  }
  if (wt(n))
    return arguments.length < 2 ? this[0] && _a(this[0], n) : Mt(t) ? this : this.each((e, s) => {
      gu(s, n, t);
    });
  for (const e in n)
    this.data(e, n[e]);
  return this;
}
E.data = _u;
function jl(n, t) {
  const e = n.documentElement;
  return Math.max(n.body[`scroll${t}`], e[`scroll${t}`], n.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
mt([!0, !1], (n, t) => {
  mt(["Width", "Height"], (e, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    E[i] = function(r) {
      if (this[0])
        return ls(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : Ke(this[0]) ? jl(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? Jt(this[0], `margin${e ? "Top" : "Left"}`) + Jt(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
mt(["Width", "Height"], (n, t) => {
  const e = t.toLowerCase();
  E[e] = function(s) {
    if (!this[0])
      return Mt(s) ? void 0 : this;
    if (!arguments.length)
      return ls(this[0]) ? this[0].document.documentElement[`client${t}`] : Ke(this[0]) ? jl(this[0], t) : this[0].getBoundingClientRect()[e] - pa(this[0], !n);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!ut(o))
        return;
      const a = pe(o, "boxSizing");
      o.style[e] = Wl(e, i + (a === "border-box" ? pa(o, !n) : 0));
    });
  };
});
const ya = "___cd";
E.toggle = function(n) {
  return this.each((t, e) => {
    if (!ut(e))
      return;
    const s = ma(e);
    (Mt(n) ? s : n) ? (e.style.display = e[ya] || "", ma(e) && (e.style.display = Xd(e.tagName))) : s || (e[ya] = pe(e, "display"), e.style.display = "none");
  });
};
E.hide = function() {
  return this.toggle(!1);
};
E.show = function() {
  return this.toggle(!0);
};
const va = "___ce", Br = ".", jr = { focus: "focusin", blur: "focusout" }, Ul = { mouseenter: "mouseover", mouseleave: "mouseout" }, yu = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Ur(n) {
  return Ul[n] || jr[n] || n;
}
function Vr(n) {
  const t = n.split(Br);
  return [t[0], t.slice(1).sort()];
}
E.trigger = function(n, t) {
  if (wt(n)) {
    const [s, i] = Vr(n), r = Ur(s);
    if (!r)
      return this;
    const o = yu.test(r) ? "MouseEvents" : "HTMLEvents";
    n = fe.createEvent(o), n.initEvent(r, !0, !0), n.namespace = i.join(Br), n.___ot = s;
  }
  n.___td = t;
  const e = n.___ot in jr;
  return this.each((s, i) => {
    e && Ye(i[n.___ot]) && (i[`___i${n.type}`] = !0, i[n.___ot](), i[`___i${n.type}`] = !1), i.dispatchEvent(n);
  });
};
function Vl(n) {
  return n[va] = n[va] || {};
}
function vu(n, t, e, s, i) {
  const r = Vl(n);
  r[t] = r[t] || [], r[t].push([e, s, i]), n.addEventListener(t, i);
}
function Kl(n, t) {
  return !t || !zr.call(t, (e) => n.indexOf(e) < 0);
}
function xn(n, t, e, s, i) {
  const r = Vl(n);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !Kl(o, e) || s && s !== a)
        return !0;
      n.removeEventListener(t, l);
    }));
  else
    for (t in r)
      xn(n, t, e, s, i);
}
E.off = function(n, t, e) {
  if (Mt(n))
    this.each((s, i) => {
      !ut(i) && !Ke(i) && !ls(i) || xn(i);
    });
  else if (wt(n))
    Ye(t) && (e = t, t = ""), mt(Jn(n), (s, i) => {
      const [r, o] = Vr(i), a = Ur(r);
      this.each((l, c) => {
        !ut(c) && !Ke(c) && !ls(c) || xn(c, a, o, t, e);
      });
    });
  else
    for (const s in n)
      this.off(s, n[s]);
  return this;
};
E.remove = function(n) {
  return Pe(this, n).detach().off(), this;
};
E.replaceWith = function(n) {
  return this.before(n).remove();
};
E.replaceAll = function(n) {
  return p(n).replaceWith(this), this;
};
function bu(n, t, e, s, i) {
  if (!wt(n)) {
    for (const r in n)
      this.on(r, t, e, n[r], i);
    return this;
  }
  return wt(t) || (Mt(t) || Fs(t) ? t = "" : Mt(e) ? (e = t, t = "") : (s = e, e = t, t = "")), Ye(s) || (s = e, e = void 0), s ? (mt(Jn(n), (r, o) => {
    const [a, l] = Vr(o), c = Ur(a), h = a in Ul, d = a in jr;
    c && this.each((u, f) => {
      if (!ut(f) && !Ke(f) && !ls(f))
        return;
      const g = function(_) {
        if (_.target[`___i${_.type}`])
          return _.stopImmediatePropagation();
        if (_.namespace && !Kl(l, _.namespace.split(Br)) || !t && (d && (_.target !== f || _.___ot === c) || h && _.relatedTarget && f.contains(_.relatedTarget)))
          return;
        let y = f;
        if (t) {
          let b = _.target;
          for (; !zl(b, t); )
            if (b === f || (b = b.parentNode, !b))
              return;
          y = b;
        }
        Object.defineProperty(_, "currentTarget", {
          configurable: !0,
          get() {
            return y;
          }
        }), Object.defineProperty(_, "delegateTarget", {
          configurable: !0,
          get() {
            return f;
          }
        }), Object.defineProperty(_, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const v = s.call(y, _, _.___td);
        i && xn(f, c, l, t, g), v === !1 && (_.preventDefault(), _.stopPropagation());
      };
      g.guid = s.guid = s.guid || p.guid++, vu(f, c, l, t, g);
    });
  }), this) : this;
}
E.on = bu;
function wu(n, t, e, s) {
  return this.on(n, t, e, s, !0);
}
E.one = wu;
const Cu = /\r?\n/g;
function Su(n, t) {
  return `&${encodeURIComponent(n)}=${encodeURIComponent(t.replace(Cu, `\r
`))}`;
}
const ku = /file|reset|submit|button|image/i, Gl = /radio|checkbox/i;
E.serialize = function() {
  let n = "";
  return this.each((t, e) => {
    mt(e.elements || [e], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || ku.test(i.type) || Gl.test(i.type) && !i.checked)
        return;
      const r = Ol(i);
      if (!Mt(r)) {
        const o = Yn(r) ? r : [r];
        mt(o, (a, l) => {
          n += Su(i.name, l);
        });
      }
    });
  }), n.slice(1);
};
window.$ = p;
function xu(n, t) {
  if (n == null)
    return [n, void 0];
  typeof t == "string" && (t = t.split("."));
  const e = t.join(".");
  let s = n;
  const i = [s];
  for (; typeof s == "object" && s !== null && t.length; ) {
    let r = t.shift(), o;
    const a = r.indexOf("[");
    if (a > 0 && a < r.length - 1 && r.endsWith("]") && (o = r.substring(a + 1, r.length - 1), r = r.substring(0, a)), s = s[r], i.push(s), o !== void 0)
      if (typeof s == "object" && s !== null)
        s instanceof Map ? s = s.get(o) : s = s[o], i.push(s);
      else
        throw new Error(`Cannot access property "${r}[${o}]", the full path is "${e}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${e}".`);
  return i;
}
function Qn(n, t, e, s) {
  typeof t == "string" && (t = t.split("."));
  try {
    const i = xu(n, t), r = i.length, o = i[r - 1];
    return s && s(r > 1 ? i[r - 2] : n, t[t.length - 1]), o === void 0 ? e : o;
  } catch {
    return e;
  }
}
function Zt(n, t, e, s, i) {
  let r;
  const o = Qn(n, t, void 0, (a) => {
    r = a;
  });
  if (typeof o == "function")
    return o.apply(s ?? r, e);
  if (i)
    throw new Error(`Cannot call function "${Array.isArray(t) ? t.join(".") : t}" on object:`, n);
  return o;
}
const Ee = 24 * 60 * 60 * 1e3, Q = (n, t) => n === void 0 ? /* @__PURE__ */ new Date() : n instanceof Date ? t ? new Date(n.getTime()) : n : (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n), n), Ut = (n) => Q(n).getTime(), sr = (n, t, e = "day") => {
  if (typeof t == "string") {
    const s = Number.parseInt(t, 10);
    e = t.replace(s.toString(), ""), t = s;
  }
  return n = new Date(Ut(n)), e === "month" ? n.setMonth(n.getMonth() + t) : e === "year" ? n.setFullYear(n.getFullYear() + t) : e === "week" ? n.setDate(n.getDate() + t * 7) : e === "hour" ? n.setHours(n.getHours() + t) : e === "minute" ? n.setMinutes(n.getMinutes() + t) : e === "second" ? n.setSeconds(n.getSeconds() + t) : n.setDate(n.getDate() + t), n;
}, ue = (n, t = /* @__PURE__ */ new Date()) => Q(n).toDateString() === Q(t).toDateString(), nr = (n, t = /* @__PURE__ */ new Date()) => Q(n).getFullYear() === Q(t).getFullYear(), Kr = (n, t = /* @__PURE__ */ new Date()) => (n = Q(n), t = Q(t), n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth()), i_ = (n, t = /* @__PURE__ */ new Date()) => {
  const s = Math.floor(Ut(n) / 864e5), i = Math.floor(Ut(t) / 864e5);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, r_ = (n, t) => ue(Q(t), n), o_ = (n, t) => ue(Ut(t) - Ee, n), a_ = (n, t) => ue(Ut(t) + Ee, n), ti = (n) => n != null && !isNaN(Ut(n)), nt = (n, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (n = Q(n), !ti(n))
    return e;
  if (typeof t == "function")
    return t(n);
  const s = {
    "M+": n.getMonth() + 1,
    "d+": n.getDate(),
    "h+": n.getHours(),
    "H+": n.getHours() % 12,
    "m+": n.getMinutes(),
    "s+": n.getSeconds(),
    "S+": n.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", nr(n) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${n.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, l_ = (n, t, e) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = nt(n, nr(n) ? s.month : s.full);
  if (ue(n, t))
    return i;
  const r = nt(t, nr(n, t) ? Kr(n, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
};
function c_(n) {
  return typeof n == "string" && n !== "";
}
const ir = {
  upper: (n) => String(n).toUpperCase(),
  lower: (n) => String(n).toLowerCase(),
  quote: (n) => `"${n}"`,
  singleQuote: (n) => `'${n}'`,
  code: (n) => `\`${n}\``,
  json: (n, t) => JSON.stringify(n, null, t),
  base64: (n) => ql(String(n)),
  base64Decode: (n) => Au(String(n)),
  escape: (n) => Mu(String(n)),
  bytes: (n) => Bt(Number(n)),
  date: (n, t) => nt(n, t),
  timestamp: (n) => String(Ut(n)),
  urlEncode: (n) => encodeURIComponent(String(n)),
  urlDecode: (n) => decodeURIComponent(String(n)),
  capitalize: (n) => String(n).charAt(0).toUpperCase() + String(n).slice(1),
  snake: (n) => String(n).replace(/([a-z])([A-Z])/g, "$1_$2").replace(/[\s-]+/g, "_").toLowerCase(),
  kebab: (n) => String(n).replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase(),
  camel: (n) => String(n).replace(/[-_\s]+(.)?/g, (t, e) => e ? e.toUpperCase() : ""),
  truncate: (n, t) => String(n).slice(0, Number(t)),
  ellipsis: (n, t) => {
    const e = String(n), s = Number(t);
    return e.length > s ? e.slice(0, s) + "..." : e;
  },
  replace: (n, t, e) => String(n).replace(t, e ?? ""),
  replaceAll: (n, t, e) => String(n).replaceAll(t, e ?? ""),
  fixed: (n, t = "2") => Number(n).toFixed(Number(t)),
  currency: (n, t = "CNY") => new Intl.NumberFormat("zh-CN", { style: "currency", currency: t }).format(Number(n)),
  mask: (n, t = "3", e = "4") => {
    const s = String(n);
    return s.slice(0, Number(t)) + "*".repeat(Math.max(0, s.length - Number(t) - Number(e))) + s.slice(-Number(e));
  },
  join: (n, t = ",") => Array.isArray(n) ? n.join(t) : String(n),
  padStart: (n, t, e = " ") => String(n).padStart(Number(t), e),
  padEnd: (n, t, e = " ") => String(n).padEnd(Number(t), e),
  trim: (n) => String(n).trim(),
  trimStart: (n) => String(n).trimStart(),
  trimEnd: (n) => String(n).trimEnd(),
  default: (n, t) => n == null || n === "" ? t : n
}, $u = /\{([^{}]+)\}/g;
function Eu(n) {
  const t = n.indexOf(":");
  if (t === -1)
    return { name: n.trim(), args: [] };
  const e = n.slice(0, t).trim(), i = n.slice(t + 1).split(",").map((r) => r.trim());
  return { name: e, args: i };
}
function Tu(n, t, e) {
  e = e || ir;
  const s = typeof t == "string" ? t.split("|") : t;
  let i = n;
  for (const r of s) {
    const { name: o, args: a } = Eu(r);
    if (!o)
      continue;
    const l = e[o];
    l && (i = l(i, ...a));
  }
  return i == null ? "" : String(i);
}
function Nu(n, t, e) {
  const s = e ? { ...ir, ...e } : ir;
  return n.replace($u, (i, r) => {
    const o = r.split("|"), a = o[0].trim();
    return Object.prototype.hasOwnProperty.call(t, a) ? Tu(t[a], o.slice(1), s) : i;
  });
}
function tt(n, ...t) {
  if (t.length === 0)
    return n;
  if (t.length === 1 && typeof t[0] == "object" && t[0])
    return Nu(n, t[0]);
  for (let e = 0; e < t.length; e++) {
    const s = t[e] ?? "";
    n = n.replace(new RegExp(`\\{${e}\\}`, "g"), `${s}`);
  }
  return n;
}
var Gr = /* @__PURE__ */ ((n) => (n[n.B = 1] = "B", n[n.KB = 1024] = "KB", n[n.MB = 1048576] = "MB", n[n.GB = 1073741824] = "GB", n[n.TB = 1099511627776] = "TB", n))(Gr || {});
function Bt(n, t = 2, e) {
  return Number.isNaN(n) ? "?KB" : (e || (n < 1024 ? e = "B" : n < 1048576 ? e = "KB" : n < 1073741824 ? e = "MB" : n < 1099511627776 ? e = "GB" : e = "TB"), (n / Gr[e]).toFixed(t) + e);
}
const He = (n) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  n = n.toUpperCase(), n.endsWith("B") || (n += "B");
  const e = n.match(t);
  if (!e)
    return 0;
  const s = e[1];
  return n = n.replace(s, ""), Number.parseInt(n, 10) * Gr[s];
}, Mu = (n) => n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"), ql = (n) => {
  const t = encodeURIComponent(n).replace(/%([0-9A-F]{2})/g, (e, s) => String.fromCharCode(parseInt(s, 16)));
  return btoa(t);
}, Au = (n) => {
  const t = atob(n), e = Array.from(t).map((s) => `%${s.charCodeAt(0).toString(16).padStart(2, "0").toUpperCase()}`).join("");
  return decodeURIComponent(e);
};
let qr = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), ae;
function Iu() {
  return qr;
}
function Du(n) {
  qr = n.toLowerCase().replace("-", "_");
}
function Yl(n, t) {
  ae || (ae = {}), typeof n == "string" && (n = { [n]: t ?? {} }), p.extend(!0, ae, n);
}
function j(n, t, e, s, i, r) {
  Array.isArray(n) ? ae && n.unshift(ae) : n = ae ? [ae, n] : [n], typeof e == "string" && (r = i, i = s, s = e, e = void 0);
  const o = i || qr;
  let a;
  for (const l of n) {
    if (!l)
      continue;
    const c = l[o] || l.default;
    if (!c)
      continue;
    const h = r && l === ae ? `${r}.${t}` : t;
    if (a = Qn(c, h), a !== void 0)
      break;
  }
  return a === void 0 ? s : e ? tt(a, ...Array.isArray(e) ? e : [e]) : a;
}
function Lu(n, t, e, s) {
  return j(void 0, n, t, e, s);
}
j.addLang = Yl;
j.getLang = Lu;
j.getCode = Iu;
j.setCode = Du;
j.map = ae;
Yl({
  zh_cn: {
    confirm: "确定",
    save: "保存",
    cancel: "取消",
    delete: "删除",
    reset: "重置",
    add: "添加",
    copy: "复制",
    close: "关闭",
    edit: "编辑",
    open: "打开",
    more: "更多",
    loading: "加载中..."
  },
  zh_tw: {
    confirm: "確定",
    save: "儲存",
    cancel: "取消",
    delete: "刪除",
    reset: "重置",
    add: "添加",
    Copy: "複製",
    close: "關閉",
    edit: "編輯",
    open: "打開",
    more: "更多",
    loading: "加載中..."
  },
  en: {
    confirm: "Confirm",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    reset: "Reset",
    add: "Add",
    copy: "Copy",
    close: "Close",
    edit: "Edit",
    open: "Open",
    more: "More",
    loading: "Loading..."
  }
});
function ns(n, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((s) => ns(n, t, s)) : !(e instanceof Blob) && p.isPlainObject(e) ? Object.entries(e).forEach(([s, i]) => {
    ns(n, `${t}[${s}]`, i);
  }) : n.append(t, e instanceof Blob ? e : String(e)));
}
function ba(n, t) {
  const e = t || new FormData();
  return n && (typeof n == "string" && (n = new URLSearchParams(n)), n instanceof URLSearchParams ? n.forEach((s, i) => {
    ns(e, i, s);
  }) : Array.isArray(n) ? n.forEach(([s, i]) => {
    ns(e, s, i);
  }) : n instanceof FormData ? n.forEach((s, i) => {
    ns(e, i, s);
  }) : typeof n == "object" && n && Object.entries(n).forEach(([s, i]) => {
    ns(e, s, i);
  })), e;
}
function st() {
  return p.guid++;
}
function $n(n, t) {
  if (n === t)
    return !1;
  if (n && t) {
    const e = typeof n, s = typeof t;
    if (e !== s)
      return !0;
    if (e === "object" && s === "object") {
      const i = Array.isArray(n), r = Array.isArray(t);
      if (i !== r)
        return !0;
      if (i && r) {
        if (n.length !== t.length)
          return !0;
        for (let l = 0; l < n.length; l++)
          if ($n(n[l], t[l]))
            return !0;
        return !1;
      }
      const o = Object.keys(n), a = Object.keys(t);
      if (o.length !== a.length)
        return !0;
      for (const l of o)
        if ($n(n[l], t[l]))
          return !0;
      return !1;
    }
    if (e === "function" && s === "function")
      return n.toString() !== t.toString();
  }
  return n !== t;
}
class cs {
  /**
   * Creates a new Computed instance.
   * @param compute      The function that computes the value.
   * @param dependencies The dependencies of the computed value.
   */
  constructor(t, e) {
    this._compute = t, this._dependencies = e;
  }
  /**
   * Gets the computed value.
   */
  get value() {
    return this.compute();
  }
  /**
   * Gets the cached value of the computed value.
   */
  get cache() {
    return this._lastDependencies ? this._value : this.compute();
  }
  /**
   * Set the dependencies of the computed value.
   *
   * @param dependencies The dependencies of the computed value.
   * @returns The computed value.
   */
  depends(t) {
    return this._dependencies = t, this;
  }
  /**
   * Forces the computed value to be recomputed.
   * @param dependencies The new dependencies to use for recomputing the value.
   * @returns The recomputed value.
   */
  forceCompute(t) {
    return this._lastDependencies = void 0, this.compute(t);
  }
  /**
   * Computes the value of the computed value.
   * @param dependencies The dependencies to use for computing the value.
   * @returns The computed value.
   */
  compute(t) {
    t !== void 0 && (this._dependencies = t), t = this._dependencies, typeof t == "function" && (t = t());
    const e = this._lastDependencies;
    return (!e || t.some((s, i) => s instanceof cs ? s.value !== e[i] : $n(s, e[i]))) && (this._value = this._compute(), this._lastDependencies = t.map((s) => s instanceof cs ? s.cache : s)), this._value;
  }
}
function Zl(...n) {
  const t = [], e = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return n.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Zl(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const S = (...n) => Zl(...n).reduce((t, [e, s]) => (s && t.push(e), t), []).join(" ");
p.classes = S;
p.fn.setClass = function(n, ...t) {
  return this.each((e, s) => {
    const i = p(s);
    n === !0 ? i.attr("class", S(i.attr("class"), ...t)) : i.addClass(S(n, ...t));
  });
};
const is = /* @__PURE__ */ new WeakMap();
function Yr(n, t, e) {
  const s = is.has(n), i = s ? is.get(n) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && n instanceof Element && Object.assign(i, p(n).dataset(), i), is.set(n, i)) : is.delete(n);
}
function Zr(n, t, e) {
  let s = is.get(n) || {};
  return e && n instanceof Element && (s = Object.assign({}, p(n).dataset(), s)), t === void 0 ? s : s[t];
}
function h_(n) {
  is.delete(n);
}
p.fn.dataset = p.fn.data;
p.fn.data = function(...n) {
  const [t, e] = n;
  return !n.length || n.length === 1 && typeof t == "string" ? this.length ? Zr(this[0], t, !0) : void 0 : this.each((s, i) => Yr(i, t, e));
};
p.fn.removeData = function(n = null) {
  return this.each((t, e) => Yr(e, n));
};
function Te(n, ...t) {
  return n.includes("RAWJS") && (n = n.split('"RAWJS<').join("").split('>RAWJS"').join("").split("<RAWJS_QUOTE>").join('"').split("<RAWJS_LINE>").join(`
`)), new Function(...t.map(([s]) => s), `return ${n}`)(...t.map(([, s]) => s));
}
function Pu(n, ...t) {
  return n.includes("RAWJS") ? Te(n, ...t) : JSON.parse(n);
}
function Ru(n) {
  return JSON.stringify(n, (t, e) => typeof e == "function" ? `RAWJS<${e.toString().split('"').join("<RAWJS_QUOTE>").split(`
`).join("<RAWJS_LINE>")}>RAWJS` : e);
}
function Os(n, t) {
  const e = p(n), s = e[0];
  if (!s)
    return;
  const { prefix: i, getter: r, evalValue: o, json: a = !0, evalArgs: l = [["_element", s], ["_$element", e]] } = {
    prefix: "z-",
    ...typeof t == "string" ? { prefix: t } : t
  }, c = Array.isArray(o) ? new Set(o) : void 0;
  return Array.from(s.attributes).reduce((h, d) => {
    let { name: u } = d;
    const { value: f } = d;
    let g = f;
    if (u.startsWith(i)) {
      if (u = u.slice(i.length).replace(/-([a-z])/g, (_) => _[1].toUpperCase()), r)
        g = r(u, f);
      else
        try {
          o && (!c || c.has(u)) || o === void 0 && f.includes("RAWJS") ? g = Te(f, ...l) : a && (g = JSON.parse(f));
        } catch {
        }
      h[u] = g;
    }
    return h;
  }, {});
}
function wa(n, t, e = "z-") {
  const s = p(n);
  Object.keys(t).forEach((i) => {
    let r = t[i];
    typeof r == "function" && (r = `RAWJS<${r}>RAWJS`), typeof r != "string" && (r = JSON.stringify(r)), i = i.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`), s.attr(`${e}${i}`, r);
  });
}
function zu(...n) {
  var e;
  const t = n.length;
  if (!t)
    return Os(this);
  if (t === 1) {
    const [s] = n;
    return typeof s == "string" ? (e = Os(this)) == null ? void 0 : e[s] : (p.isPlainObject(s) && wa(this, s), this);
  }
  return wa(this, { [n[0]]: n[1] }), this;
}
p.fn.z = zu;
p.fn._attr = p.fn.attr;
p.fn.extend({
  attr(...n) {
    const [t, e] = n;
    return !n.length || n.length === 1 && typeof t == "string" ? this._attr.apply(this, n) : typeof t == "object" ? (t && Object.keys(t).forEach((s) => {
      const i = t[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : e === null ? this.removeAttr(t) : this._attr(t, e);
  }
});
p.Event || (p.Event = (n, t) => {
  const [e, ...s] = n.split("."), i = new Event(e, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = s.join("."), i.___ot = e, i.___td = t, i;
});
const En = (n, t) => new Promise((e) => {
  const s = window.setTimeout(e, n);
  t && t(s);
}), Fu = {};
p.share = Fu;
var ei, q, Jl, bt, Ve, Ca, Xl, Ql, tc, Jr, rr, or, Hs = {}, ec = [], Ou = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Gs = Array.isArray;
function le(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function Xr(n) {
  n && n.parentNode && n.parentNode.removeChild(n);
}
function Dt(n, t, e) {
  var s, i, r, o = {};
  for (r in t)
    r == "key" ? s = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? ei.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      o[r] === void 0 && (o[r] = n.defaultProps[r]);
  return mn(n, o, s, i, null);
}
function mn(n, t, e, s, i) {
  var r = { type: n, props: t, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++Jl, __i: -1, __u: 0 };
  return i == null && q.vnode != null && q.vnode(r), r;
}
function U() {
  return { current: null };
}
function ms(n) {
  return n.children;
}
function O(n, t) {
  this.props = n, this.context = t;
}
function hs(n, t) {
  if (t == null)
    return n.__ ? hs(n.__, n.__i + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? hs(n) : null;
}
function sc(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return sc(n);
  }
}
function Sa(n) {
  (!n.__d && (n.__d = !0) && Ve.push(n) && !Tn.__r++ || Ca != q.debounceRendering) && ((Ca = q.debounceRendering) || Xl)(Tn);
}
function Tn() {
  for (var n, t, e, s, i, r, o, a = 1; Ve.length; )
    Ve.length > a && Ve.sort(Ql), n = Ve.shift(), a = Ve.length, n.__d && (e = void 0, s = void 0, i = (s = (t = n).__v).__e, r = [], o = [], t.__P && ((e = le({}, s)).__v = s.__v + 1, q.vnode && q.vnode(e), Qr(t.__P, e, s, t.__n, t.__P.namespaceURI, 32 & s.__u ? [i] : null, r, i ?? hs(s), !!(32 & s.__u), o), e.__v = s.__v, e.__.__k[e.__i] = e, rc(r, e, o), s.__e = s.__ = null, e.__e != i && sc(e)));
  Tn.__r = 0;
}
function nc(n, t, e, s, i, r, o, a, l, c, h) {
  var d, u, f, g, _, y, v, b = s && s.__k || ec, w = t.length;
  for (l = Hu(e, t, b, l, w), d = 0; d < w; d++)
    (f = e.__k[d]) != null && (u = f.__i == -1 ? Hs : b[f.__i] || Hs, f.__i = d, y = Qr(n, f, u, i, r, o, a, l, c, h), g = f.__e, f.ref && u.ref != f.ref && (u.ref && to(u.ref, null, f), h.push(f.ref, f.__c || g, f)), _ == null && g != null && (_ = g), (v = !!(4 & f.__u)) || u.__k === f.__k ? l = ic(f, l, n, v) : typeof f.type == "function" && y !== void 0 ? l = y : g && (l = g.nextSibling), f.__u &= -7);
  return e.__e = _, l;
}
function Hu(n, t, e, s, i) {
  var r, o, a, l, c, h = e.length, d = h, u = 0;
  for (n.__k = new Array(i), r = 0; r < i; r++)
    (o = t[r]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = n.__k[r] = mn(null, o, null, null, null) : Gs(o) ? o = n.__k[r] = mn(ms, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = n.__k[r] = mn(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : n.__k[r] = o, l = r + u, o.__ = n, o.__b = n.__b + 1, a = null, (c = o.__i = Wu(o, e, l, d)) != -1 && (d--, (a = e[c]) && (a.__u |= 2)), a == null || a.__v == null ? (c == -1 && (i > h ? u-- : i < h && u++), typeof o.type != "function" && (o.__u |= 4)) : c != l && (c == l - 1 ? u-- : c == l + 1 ? u++ : (c > l ? u-- : u++, o.__u |= 4))) : n.__k[r] = null;
  if (d)
    for (r = 0; r < h; r++)
      (a = e[r]) != null && !(2 & a.__u) && (a.__e == s && (s = hs(a)), ac(a, a));
  return s;
}
function ic(n, t, e, s) {
  var i, r;
  if (typeof n.type == "function") {
    for (i = n.__k, r = 0; i && r < i.length; r++)
      i[r] && (i[r].__ = n, t = ic(i[r], t, e, s));
    return t;
  }
  n.__e != t && (s && (t && n.type && !t.parentNode && (t = hs(n)), e.insertBefore(n.__e, t || null)), t = n.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Nn(n, t) {
  return t = t || [], n == null || typeof n == "boolean" || (Gs(n) ? n.some(function(e) {
    Nn(e, t);
  }) : t.push(n)), t;
}
function Wu(n, t, e, s) {
  var i, r, o, a = n.key, l = n.type, c = t[e], h = c != null && (2 & c.__u) == 0;
  if (c === null && a == null || h && a == c.key && l == c.type)
    return e;
  if (s > (h ? 1 : 0)) {
    for (i = e - 1, r = e + 1; i >= 0 || r < t.length; )
      if ((c = t[o = i >= 0 ? i-- : r++]) != null && !(2 & c.__u) && a == c.key && l == c.type)
        return o;
  }
  return -1;
}
function ka(n, t, e) {
  t[0] == "-" ? n.setProperty(t, e ?? "") : n[t] = e == null ? "" : typeof e != "number" || Ou.test(t) ? e : e + "px";
}
function on(n, t, e, s, i) {
  var r, o;
  t:
    if (t == "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof s == "string" && (n.style.cssText = s = ""), s)
          for (t in s)
            e && t in e || ka(n.style, t, "");
        if (e)
          for (t in e)
            s && e[t] == s[t] || ka(n.style, t, e[t]);
      }
    else if (t[0] == "o" && t[1] == "n")
      r = t != (t = t.replace(tc, "$1")), o = t.toLowerCase(), t = o in n || t == "onFocusOut" || t == "onFocusIn" ? o.slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = e, e ? s ? e.u = s.u : (e.u = Jr, n.addEventListener(t, r ? or : rr, r)) : n.removeEventListener(t, r ? or : rr, r);
    else {
      if (i == "http://www.w3.org/2000/svg")
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in n)
        try {
          n[t] = e ?? "";
          break t;
        } catch {
        }
      typeof e == "function" || (e == null || e === !1 && t[4] != "-" ? n.removeAttribute(t) : n.setAttribute(t, t == "popover" && e == 1 ? "" : e));
    }
}
function xa(n) {
  return function(t) {
    if (this.l) {
      var e = this.l[t.type + n];
      if (t.t == null)
        t.t = Jr++;
      else if (t.t < e.u)
        return;
      return e(q.event ? q.event(t) : t);
    }
  };
}
function Qr(n, t, e, s, i, r, o, a, l, c) {
  var h, d, u, f, g, _, y, v, b, w, C, k, $, N, A, I, F, T = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & e.__u && (l = !!(32 & e.__u), r = [a = t.__e = e.__e]), (h = q.__b) && h(t);
  t:
    if (typeof T == "function")
      try {
        if (v = t.props, b = "prototype" in T && T.prototype.render, w = (h = T.contextType) && s[h.__c], C = h ? w ? w.props.value : h.__ : s, e.__c ? y = (d = t.__c = e.__c).__ = d.__E : (b ? t.__c = d = new T(v, C) : (t.__c = d = new O(v, C), d.constructor = T, d.render = ju), w && w.sub(d), d.state || (d.state = {}), d.__n = s, u = d.__d = !0, d.__h = [], d._sb = []), b && d.__s == null && (d.__s = d.state), b && T.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = le({}, d.__s)), le(d.__s, T.getDerivedStateFromProps(v, d.__s))), f = d.props, g = d.state, d.__v = t, u)
          b && T.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), b && d.componentDidMount != null && d.__h.push(d.componentDidMount);
        else {
          if (b && T.getDerivedStateFromProps == null && v !== f && d.componentWillReceiveProps != null && d.componentWillReceiveProps(v, C), t.__v == e.__v || !d.__e && d.shouldComponentUpdate != null && d.shouldComponentUpdate(v, d.__s, C) === !1) {
            for (t.__v != e.__v && (d.props = v, d.state = d.__s, d.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.some(function(L) {
              L && (L.__ = t);
            }), k = 0; k < d._sb.length; k++)
              d.__h.push(d._sb[k]);
            d._sb = [], d.__h.length && o.push(d);
            break t;
          }
          d.componentWillUpdate != null && d.componentWillUpdate(v, d.__s, C), b && d.componentDidUpdate != null && d.__h.push(function() {
            d.componentDidUpdate(f, g, _);
          });
        }
        if (d.context = C, d.props = v, d.__P = n, d.__e = !1, $ = q.__r, N = 0, b) {
          for (d.state = d.__s, d.__d = !1, $ && $(t), h = d.render(d.props, d.state, d.context), A = 0; A < d._sb.length; A++)
            d.__h.push(d._sb[A]);
          d._sb = [];
        } else
          do
            d.__d = !1, $ && $(t), h = d.render(d.props, d.state, d.context), d.state = d.__s;
          while (d.__d && ++N < 25);
        d.state = d.__s, d.getChildContext != null && (s = le(le({}, s), d.getChildContext())), b && !u && d.getSnapshotBeforeUpdate != null && (_ = d.getSnapshotBeforeUpdate(f, g)), I = h, h != null && h.type === ms && h.key == null && (I = oc(h.props.children)), a = nc(n, Gs(I) ? I : [I], t, e, s, i, r, o, a, l, c), d.base = t.__e, t.__u &= -161, d.__h.length && o.push(d), y && (d.__E = d.__ = null);
      } catch (L) {
        if (t.__v = null, l || r != null)
          if (L.then) {
            for (t.__u |= l ? 160 : 128; a && a.nodeType == 8 && a.nextSibling; )
              a = a.nextSibling;
            r[r.indexOf(a)] = null, t.__e = a;
          } else {
            for (F = r.length; F--; )
              Xr(r[F]);
            ar(t);
          }
        else
          t.__e = e.__e, t.__k = e.__k, L.then || ar(t);
        q.__e(L, t, e);
      }
    else
      r == null && t.__v == e.__v ? (t.__k = e.__k, t.__e = e.__e) : a = t.__e = Bu(e.__e, t, e, s, i, r, o, l, c);
  return (h = q.diffed) && h(t), 128 & t.__u ? void 0 : a;
}
function ar(n) {
  n && n.__c && (n.__c.__e = !0), n && n.__k && n.__k.forEach(ar);
}
function rc(n, t, e) {
  for (var s = 0; s < e.length; s++)
    to(e[s], e[++s], e[++s]);
  q.__c && q.__c(t, n), n.some(function(i) {
    try {
      n = i.__h, i.__h = [], n.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      q.__e(r, i.__v);
    }
  });
}
function oc(n) {
  return typeof n != "object" || n == null || n.__b && n.__b > 0 ? n : Gs(n) ? n.map(oc) : le({}, n);
}
function Bu(n, t, e, s, i, r, o, a, l) {
  var c, h, d, u, f, g, _, y = e.props || Hs, v = t.props, b = t.type;
  if (b == "svg" ? i = "http://www.w3.org/2000/svg" : b == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), r != null) {
    for (c = 0; c < r.length; c++)
      if ((f = r[c]) && "setAttribute" in f == !!b && (b ? f.localName == b : f.nodeType == 3)) {
        n = f, r[c] = null;
        break;
      }
  }
  if (n == null) {
    if (b == null)
      return document.createTextNode(v);
    n = document.createElementNS(i, b, v.is && v), a && (q.__m && q.__m(t, r), a = !1), r = null;
  }
  if (b == null)
    y === v || a && n.data == v || (n.data = v);
  else {
    if (r = r && ei.call(n.childNodes), !a && r != null)
      for (y = {}, c = 0; c < n.attributes.length; c++)
        y[(f = n.attributes[c]).name] = f.value;
    for (c in y)
      if (f = y[c], c != "children") {
        if (c == "dangerouslySetInnerHTML")
          d = f;
        else if (!(c in v)) {
          if (c == "value" && "defaultValue" in v || c == "checked" && "defaultChecked" in v)
            continue;
          on(n, c, null, f, i);
        }
      }
    for (c in v)
      f = v[c], c == "children" ? u = f : c == "dangerouslySetInnerHTML" ? h = f : c == "value" ? g = f : c == "checked" ? _ = f : a && typeof f != "function" || y[c] === f || on(n, c, f, y[c], i);
    if (h)
      a || d && (h.__html == d.__html || h.__html == n.innerHTML) || (n.innerHTML = h.__html), t.__k = [];
    else if (d && (n.innerHTML = ""), nc(t.type == "template" ? n.content : n, Gs(u) ? u : [u], t, e, s, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, r, o, r ? r[0] : e.__k && hs(e, 0), a, l), r != null)
      for (c = r.length; c--; )
        Xr(r[c]);
    a || (c = "value", b == "progress" && g == null ? n.removeAttribute("value") : g != null && (g !== n[c] || b == "progress" && !g || b == "option" && g != y[c]) && on(n, c, g, y[c], i), c = "checked", _ != null && _ != n[c] && on(n, c, _, y[c], i));
  }
  return n;
}
function to(n, t, e) {
  try {
    if (typeof n == "function") {
      var s = typeof n.__u == "function";
      s && n.__u(), s && t == null || (n.__u = n(t));
    } else
      n.current = t;
  } catch (i) {
    q.__e(i, e);
  }
}
function ac(n, t, e) {
  var s, i;
  if (q.unmount && q.unmount(n), (s = n.ref) && (s.current && s.current != n.__e || to(s, null, t)), (s = n.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (r) {
        q.__e(r, t);
      }
    s.base = s.__P = null;
  }
  if (s = n.__k)
    for (i = 0; i < s.length; i++)
      s[i] && ac(s[i], t, e || typeof n.type != "function");
  e || Xr(n.__e), n.__c = n.__ = n.__e = void 0;
}
function ju(n, t, e) {
  return this.constructor(n, e);
}
function rs(n, t, e) {
  var s, i, r, o;
  t == document && (t = document.documentElement), q.__ && q.__(n, t), i = (s = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], Qr(t, n = (!s && e || t).__k = Dt(ms, null, [n]), i || Hs, Hs, t.namespaceURI, !s && e ? [e] : i ? null : t.firstChild ? ei.call(t.childNodes) : null, r, !s && e ? e : i ? i.__e : t.firstChild, s, o), rc(r, n, o);
}
ei = ec.slice, q = { __e: function(n, t, e, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, Jl = 0, bt = function(n) {
  return n != null && n.constructor === void 0;
}, O.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s != this.state ? this.__s : this.__s = le({}, this.state), typeof n == "function" && (n = n(le({}, e), this.props)), n && le(e, n), n != null && this.__v && (t && this._sb.push(t), Sa(this));
}, O.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), Sa(this));
}, O.prototype.render = ms, Ve = [], Xl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ql = function(n, t) {
  return n.__v.__b - t.__v.__b;
}, Tn.__r = 0, tc = /(PointerCapture)$|Capture$/i, Jr = 0, rr = xa(!1), or = xa(!0);
function H(n, ...t) {
  return t.forEach((e) => {
    !e || typeof e != "object" || Object.keys(e).forEach((s) => {
      let i = e[s];
      const r = n[s];
      i !== r && (r !== void 0 && (s === "className" || s.endsWith("Class") ? i = [r, i] : s === "children" ? i = [...Nn(r), ...Nn(i)] : typeof r == "object" && (s === "style" || s.endsWith("Style") || s === "attrs" || s.endsWith("Attrs") || s === "props") && (i = p.extend(r, i))), n[s] = i);
    });
  }), n;
}
function lc(n) {
  return Object.keys(n).forEach((t) => {
    n[t] === void 0 && delete n[t];
  }), n;
}
function Uu(n, t = !0) {
  const e = p(n), s = e[0], i = "zui-disable-scroll";
  if (t) {
    if (e.data(i))
      return;
    if ((e.css("scrollbar-gutter") || "").includes("stable")) {
      e.data(i, { overflow: e.css("overflow") }).css("overflow", "hidden");
      return;
    }
    const r = s === document.body || e.is("html") ? window.innerWidth - document.body.clientWidth : s.offsetWidth - s.clientWidth;
    if (!r)
      return;
    const o = e.css("paddingRight") || "0";
    e.data(i, {
      paddingRight: o,
      overflow: e.css("overflow")
    }).css({
      paddingRight: `${r + Number.parseInt(o, 10)}px`,
      overflow: "hidden"
    });
  } else {
    const r = e.data(i);
    if (!r)
      return;
    e.css(r).removeData(i);
  }
}
p.fn.disableScroll = function(n = !0) {
  return this.each((t, e) => {
    Uu(e, n);
  });
};
p.fn.enableScroll = function(n = !0) {
  return this.disableScroll(!n);
};
function Ii(n, t, e) {
  if (!(e.on || "click").split(" ").includes(t.type))
    return;
  const s = e.selector ? p(t.target).closest(e.selector) : n;
  if (!s.length)
    return;
  const i = (c) => c === "" ? !0 : c, r = (c) => {
    if (typeof c == "string")
      try {
        c = JSON.parse(c);
      } catch {
      }
    return c;
  };
  if (i(e.once)) {
    if (e.onceCalled)
      return;
    n.dataset("once-called", !0);
  }
  if (i(e.prevent) && t.preventDefault(), i(e.stop) && t.stopPropagation(), i(e.self) && t.currentTarget !== t.target)
    return;
  const o = [["$element", n], ["event", t], ["options", e], ["$target", s]], a = (c) => typeof c == "function" ? c(...o) : p.runJS(c, ...o);
  if (e.if !== void 0 && !a(e.if))
    return;
  const l = e.call;
  if (l) {
    let c;
    if (typeof l == "string" ? c = /^[$A-Z_][0-9A-Z_$.]*$/i.test(l) ? Qn(window, l) : a(l) : c = l, typeof c == "function") {
      const h = [], d = e.params;
      e.params = h, typeof d == "string" && d.length ? d[0] === "[" ? h.push(...r(d)) : h.push(...d.split(", ").map((u) => (u = u.trim(), u === "$element" ? n : u === "event" ? t : u === "options" ? e : u.startsWith("$element.") || u.startsWith("event.") || u.startsWith("options.") ? a(u) : r(u)))) : Array.isArray(d) ? h.push(...d) : h.push(d), c(...h);
    }
  }
  e.do && a(e.do);
}
function Vu(n) {
  const t = p(this), e = n.type, s = t.attr("zui-on");
  if (s) {
    const [o, a] = s.split("~").map((l) => l.trim());
    o && o.split(" ").includes(e) && Ii(t, n, p.extend({
      on: o
    }, a ? a.startsWith("{") ? Te(a) : { do: a } : Os(t, { prefix: "data-", evalValue: ["call", "if", "do"] })));
  }
  const i = t.attr(`zui-on-${e}`);
  i && Ii(t, n, p.extend({
    on: e
  }, i.startsWith("{") ? Te(i) : { do: i }));
  const r = t.attr("data-on");
  r && r.split(" ").includes(e) && Ii(t, n, Os(t, { prefix: "data-", evalValue: ["call", "if", "do"] }));
}
function Ku(n) {
  p(document).off(".zui.global").on(n.map((t) => `${t}.zui.global`).join(" "), `[zui-on],${n.map((t) => `[zui-on-${t}]`)},[data-on]`, Vu);
}
p(() => {
  Ku(["click", "change", "inited"]);
});
function me(n, t) {
  if (typeof n == "function")
    return me(n(...t || []));
  if (typeof n == "number")
    return [n];
  let e = n.match(/(\d+)(%|px)?/);
  return e ? [parseInt(e[1]), e[2]] : (e = n.match(/(\d+)\/(\d+)/), e ? [100 * parseInt(e[1]) / parseInt(e[2]), "%"] : [NaN]);
}
function J(n, t) {
  if (n == null)
    return null;
  const [e, s = "px"] = me(n, t);
  return Number.isNaN(e) ? typeof n == "string" ? n : null : `${e}${s}`;
}
async function $a(n, t) {
  var s, i, r;
  if (n instanceof Blob) {
    const o = document.createElement("a");
    return o.href = window.URL.createObjectURL(n), t && (o.download = decodeURIComponent(t)), o.click(), o.remove(), n;
  }
  if (n instanceof Response) {
    const o = await n.blob();
    return t = t || ((r = (i = (s = n.headers.get("Content-Disposition")) == null ? void 0 : s.split(";")[1]) == null ? void 0 : i.split("=")[1]) == null ? void 0 : r.replace(/"/g, "")), $a(o, t);
  }
  const e = await fetch(n);
  return $a(e);
}
class Gu {
  constructor(t) {
    this._$target = p(t);
  }
  on(...t) {
    return this._$target.on(...t), this;
  }
  one(...t) {
    return this._$target.one(...t), this;
  }
  off(...t) {
    return this._$target.off(...t), this;
  }
  trigger(...t) {
    return this._$target.trigger(...t), this;
  }
}
const ge = new Gu(document);
p.bus = ge;
p.on = ge.on.bind(ge);
p.one = ge.one.bind(ge);
p.off = ge.off.bind(ge);
p.trigger = ge.trigger.bind(ge);
var qu = ["Shift", "Meta", "Alt", "Control"], cc = typeof navigator == "object" ? navigator.platform : "", hc = /Mac|iPod|iPhone|iPad/.test(cc), Yu = hc ? "Meta" : "Control", Zu = cc === "Win32" ? ["Control", "Alt"] : hc ? ["Alt"] : [];
function Di(n, t) {
  return typeof n.getModifierState == "function" && (n.getModifierState(t) || Zu.includes(t) && n.getModifierState("AltGraph"));
}
function Ju(n) {
  return n.trim().split(" ").map(function(t) {
    var e = t.split(/\b\+/), s = e.pop();
    return [e = e.map(function(i) {
      return i === "$mod" ? Yu : i;
    }), s];
  });
}
function dc(n, t) {
  var e;
  t === void 0 && (t = {});
  var s = (e = t.timeout) != null ? e : 1e3, i = Object.keys(n).map(function(a) {
    return [Ju(a), n[a]];
  }), r = /* @__PURE__ */ new Map(), o = null;
  return function(a) {
    a instanceof KeyboardEvent && (i.forEach(function(l) {
      var c = l[0], h = l[1], d = r.get(c) || c;
      (function(u, f) {
        return !(f[1].toUpperCase() !== u.key.toUpperCase() && f[1] !== u.code || f[0].find(function(g) {
          return !Di(u, g);
        }) || qu.find(function(g) {
          return !f[0].includes(g) && f[1] !== g && Di(u, g);
        }));
      })(a, d[0]) ? d.length > 1 ? r.set(c, d.slice(1)) : (r.delete(c), h(a)) : Di(a, a.key) || r.delete(c);
    }), o && clearTimeout(o), o = setTimeout(r.clear.bind(r), s));
  };
}
function Xu(n, t, e) {
  var s;
  e === void 0 && (e = {});
  var i = (s = e.event) != null ? s : "keydown", r = dc(t, e);
  return n.addEventListener(i, r), function() {
    n.removeEventListener(i, r);
  };
}
function uc(n, t = {}) {
  if (!n)
    return;
  const e = Object.keys(t).reduce((s, i) => (t[i].optional || (s[i] = {
    ...t[i]
  }), s), {});
  return Object.keys(n).forEach((s) => {
    const i = n[s];
    i ? i === !0 ? t[s] && (e[s] = {
      ...t[s]
    }) : e[s] = i : delete e[s];
  }), Object.keys(e).reduce((s, i) => {
    const { keys: r, handler: o } = e[i];
    return typeof r == "string" ? s[r] = o : r.forEach((a) => {
      s[a] = o;
    }), s;
  }, {});
}
function fc(n, t, e) {
  const { timeout: s, event: i = "keydown", scope: r, when: o } = e || {}, a = dc(t, { timeout: s }), l = `.zui.hotkeys${r ? `.${r}` : ""}`, c = "zui-hotkeys-composing";
  return p(n).on(`${i}${l}`, function(h) {
    o && o(h) === !1 || p(h.target).data(c) || a(h);
  }).on(`compositionstart${l}`, (h) => {
    p(h.target).data(c, !0);
  }).on(`compositionend${l}`, (h) => {
    p(h.target).removeData(c);
  });
}
function pc(n, t) {
  return p(n).off(`.zui.hotkeys${t ? `.${t}` : ""}`);
}
const d_ = Xu;
p.fn.hotkeys = function(n, t) {
  return fc(this, n, t);
};
p.fn.unbindHotkeys = function(n) {
  return pc(this, n);
};
p.hotkeys = function(n, t) {
  fc(window, n, t);
};
p.unbindHotkeys = function(n) {
  pc(window, n);
};
function eo() {
  return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
}
async function Qu(n) {
  (typeof n == "string" || n instanceof Element || n instanceof p) && (n = { target: n });
  const { target: t, onError: e, onSuccess: s, afterExit: i, afterEnter: r } = n, o = p(t), a = o[0];
  if (!a)
    return;
  const l = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullScreen;
  if (!l) {
    e == null || e.call(a, new Error("[ZUI] The browser does not support full screen feature."));
    return;
  }
  try {
    await l.call(a), s == null || s.call(a), p(a).off(".zui.fullscreen"), i && o.on("exitFullscreen.zui.fullscreen", i), r && o.on("enterFullscreen.zui.fullscreen", r);
  } catch (c) {
    e == null || e.call(a, c);
  }
  document.zuiBindFullscreenChange || (document.zuiBindFullscreenChange = !0, p(document).on("fullscreenchange.zui webkitfullscreenchange.zui mozfullscreenchange.zui", (c) => {
    const h = eo();
    let d = h;
    h ? p(h).addClass("is-in-fullscreen") : (d = p(document).find(".is-in-fullscreen")[0] || document, p(d).removeClass("is-in-fullscreen")), p("body").toggleClass("has-in-fullscreen", !!h);
    const u = { event: c, target: d, fullscreenElement: h };
    p(d).trigger(h ? "enterFullscreen" : "exitFullscreen", u).trigger("toggleFullscreen", u);
  }));
}
async function mc(n) {
  const t = eo();
  return n === !1 && !!t === n ? n : t ? (document.exitFullscreen(), !1) : (await Qu(n), !0);
}
p.fn.fullscreen = function(n) {
  return mc({
    target: this,
    ...n
  });
};
p.getFullscreenElement = eo;
p.toggleFullscreen = mc;
function gc(n) {
  let t = 0;
  if (typeof n != "string" && (n = String(n)), n && n.length)
    for (let e = 0; e < n.length; ++e)
      t += (e + 1) * n.charCodeAt(e);
  return t;
}
function Qt(n) {
  return !n || n.parentNode === document ? !1 : n.parentNode ? Qt(n.parentNode) : !0;
}
p.isDetached = Qt;
p.fn.isDetached = function() {
  const n = this[0];
  return !n || Qt(n);
};
const Ze = class _c {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(t, e) {
    var g, _;
    this._inited = !1, this._autoDestory = 0, this._destroyed = !1;
    const { KEY: s, DATA_KEY: i, MULTI_INSTANCE: r, NAME: o, ATTR_KEY: a, ALL: l, TYPED_ALL: c } = this.constructor;
    if (!o)
      throw new Error('[ZUI] The component must have a "NAME" static property.');
    const h = p(t);
    if (h.data(s) && !r)
      throw new Error(`[ZUI] The component "${o}" has been initialized on element.`);
    const d = h[0];
    if (!d)
      throw new Error(`[ZUI] Invalid selector "${t}" for component "${o}", can not find the element matched.`);
    const u = st();
    this._gid = u, this._element = d, this.resetOptions(e), this._key = this.options.key ?? `__${u}`;
    let f = l.get(d);
    if (f ? f.add(this) : (f = /* @__PURE__ */ new Set([this]), l.set(d, f)), c.has(o) ? (g = c.get(o)) == null || g.add(this) : c.set(o, /* @__PURE__ */ new Set([this])), h.data(s, this).attr(a, "").attr(i, `${u}`).attr("z-use", [...new Set([...f || []].map((y) => y.constructor.NAME))].join(",")), r) {
      const y = `${s}:ALL`;
      let v = h.data(y);
      v || (v = /* @__PURE__ */ new Map(), h.data(y, v)), v.set(this._key, this);
    }
    this.init(), (_ = this.options.$onCreate) == null || _.call(this), requestAnimationFrame(async () => {
      var v;
      const { $fetcher: y } = this.options;
      if (y) {
        const b = await Je(y, [d, this.options, this], { dataType: "js" });
        if (this.destroyed)
          return;
        b && this.setOptions(b);
      }
      this._inited = !0, await this.afterInit(), this.emit("inited", this.options), (v = this.options.$onInited) == null || v.call(this);
    });
  }
  /**
   * ZUI name
   */
  static get ZUI() {
    return this.NAME.replace(/(^[A-Z]+)/, (t) => t.toLowerCase());
  }
  /**
   * Component data key, like "zui.menu"
   */
  static get KEY() {
    return `zui.${this.NAME}`;
  }
  /**
   * Component namespace, like ".zui.menu"
   */
  static get NAMESPACE() {
    return `.zui.${this.ZUI}`;
  }
  /**
   * @deprecated Use ATTR_KEY instead.
   */
  static get DATA_KEY() {
    return `data-zui-${this.NAME}`;
  }
  /**
   * Component attribute key, like "z-use-menu"
   */
  static get ATTR_KEY() {
    return `z-use-${this.NAME}`;
  }
  /**
   * The component default selector.
   */
  static get SELECTOR() {
    return `[${this.DATA_KEY}]`;
  }
  /**
   * Get the component initialized flag.
   */
  get inited() {
    return this._inited;
  }
  /**
   * Get the component destroyed flag.
   */
  get destroyed() {
    return this._destroyed;
  }
  /**
   * Get the component element.
   */
  get element() {
    if (!this._element)
      throw new Error("[ZUI] Component element is not available.");
    return this._element;
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    if (!this._options)
      throw new Error("[ZUI] Component options are not available.");
    return this._options;
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return this._gid;
  }
  /**
   * Get the component element as a jQuery like object.
   */
  get $element() {
    return p(this.element);
  }
  /**
   * Get the component event emitter.
   */
  get $emitter() {
    return this.$element;
  }
  /**
   * Get the component i18n data.
   */
  get i18nData() {
    return [this.options.i18n, this.constructor.i18n];
  }
  /**
   * Initialize the component.
   * Override this method in subclasses to provide custom initialization logic.
   */
  init() {
  }
  /**
   * Do something after the component initialized.
   * Override this method in subclasses to provide custom post-initialization logic.
   */
  afterInit() {
  }
  /**
   * Render the component.
   *
   * @param options The component options to override before render.
   */
  render(t, e) {
    this._options = this.setOptions(t, e);
    const { $class: s, $style: i } = this.options;
    s && this.$element.setClass(s), i && this.$element.css(i);
  }
  /**
   * Destroy the component.
   */
  destroy() {
    var f;
    const { KEY: t, DATA_KEY: e, ALL: s, TYPED_ALL: i, NAME: r, MULTI_INSTANCE: o, ATTR_KEY: a } = this.constructor, { $element: l, element: c } = this;
    if (this.emit("destroyed"), this._destroyed = !0, l.off(this.namespace).removeData(t).removeAttr(a).removeAttr(e), o) {
      const g = this.$element.data(`${t}:ALL`);
      if (g)
        if (g.delete(this._key), g.size === 0)
          this.$element.removeData(`${t}:ALL`);
        else {
          const _ = g.values().next().value;
          l.data(t, _).attr(e, String(_ == null ? void 0 : _.gid));
        }
    }
    const h = s.get(c);
    h && (h.delete(this), h.size === 0 && s.delete(c));
    const d = i.get(r);
    d && (d.delete(this), d.size === 0 && i.delete(r));
    const u = s.get(c);
    u != null && u.size ? l.attr("z-use", [...new Set([...u].map((g) => g.constructor.NAME))].join(",")) : l.removeAttr("z-use"), (f = this.options.$onDestroy) == null || f.call(this);
  }
  /**
   * Auto destroy the component when detached.
   */
  autoDestroy(t = 100) {
    this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
      this._autoDestory = 0, Qt(this.element) && this.destroy();
    }, t);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(t, e) {
    if (e) {
      const s = {
        ...this.constructor.DEFAULT,
        ...(t == null ? void 0 : t.$optionsFromDataset) !== !1 ? this.$element.dataset() : {},
        ...t
      }, { $options: i } = s;
      if (i) {
        const r = typeof i == "function" ? i.call(this, this.element, s) : i;
        r && p.extend(s, r), delete s.$options;
      }
      this._options = s;
    } else
      t && p.extend(this._options, t);
    if (!this._options)
      throw new Error("[ZUI] Component options are not available.");
    return this._options;
  }
  resetOptions(t) {
    return this.setOptions(t, !0);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(t, ...e) {
    const s = p.Event(t);
    return s.__src = this, this.$emitter.trigger(s, [this, ...e]), s;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(t, e, s) {
    const i = this;
    this.$element[s != null && s.once ? "one" : "on"](this._wrapEvent(t), function(r, o) {
      (!r.__src || r.__src === i) && e.call(this, r, o);
    });
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  one(t, e) {
    this.on(t, e, { once: !0 });
  }
  /**
   * Stop listening to a component event.
   * @param event     The event name.
   * @param callback  The event callback.
   */
  off(t) {
    this.$element.off(this._wrapEvent(t));
  }
  /**
   * Get the i18n text.
   *
   * @param key          The i18n key.
   * @param args         The i18n arguments or the default value.
   * @param defaultValue The default value if the key is not found.
   * @returns            The i18n text.
   */
  i18n(t, e, s) {
    const { i18nData: i } = this;
    return j(i, t, e, s, this.options.lang, this.constructor.NAME) ?? j(i, t, e, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  /**
   * Execute a command.
   * @param command The command.
   * @param args    The command arguments.
   * @returns       The command result.
   */
  executeCommand(t, e) {
    return Zt(this, t, e);
  }
  /**
   * Get event namespace.
   * @returns Event namespace.
   */
  get namespace() {
    return `${this.constructor.NAMESPACE}.${this._key}`;
  }
  /**
   * Wrap event names with component namespace.
   *
   * @param names The event names.
   * @returns     The wrapped event names.
   */
  _wrapEvent(t) {
    return t.split(" ").map((e) => e.includes(".") ? e : `${e}${this.namespace}`).join(" ");
  }
  /**
   * Get the component instance of the given element.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static get(t, e) {
    const s = p(t);
    if (this.MULTI_INSTANCE && e !== void 0) {
      const i = s.data(`${this.KEY}:ALL`);
      return i ? i.get(e) : void 0;
    }
    return s.data(this.KEY);
  }
  static isValid(t) {
    return !0;
  }
  /**
   * Ensure the component instance of the given element.
   *
   * @param this      Current component constructor.
   * @param selector  The component element selector.
   * @param options   The component options.
   * @returns         The component instance.
   */
  static ensure(t, e) {
    const s = this.get(t, e == null ? void 0 : e.key);
    if (s) {
      if (this.isValid(s))
        return e && s.setOptions(e), s;
      s.destroy();
    }
    return new this(t, e);
  }
  /**
   * Get all component instances.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        All component instances.
   */
  static getAll(t, e) {
    var l;
    const { SELECTOR: s, ALL: i, TYPED_ALL: r } = this, o = [], a = (c) => {
      c instanceof this && (!e || e(c) !== !1) && o.push(c);
    };
    return t ? p(t).find(s).each((c, h) => {
      var d;
      (d = i.get(h)) == null || d.forEach(a);
    }) : this !== _c ? (l = r.get(this.NAME)) == null || l.forEach(a) : i.forEach((c) => {
      c.forEach(a);
    }), o.sort((c, h) => c.gid - h.gid);
  }
  static query(t, e, s) {
    return t === void 0 ? this.getAll(void 0, s).pop() : this.get(p(t).closest(this.SELECTOR), e);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(t) {
    let e = t || this.ZUI;
    p.fn[e] && (e = `zui${this.NAME}`);
    const s = this;
    p.fn.extend({
      [e](i, ...r) {
        const o = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((c, h) => {
          let d = s.get(h);
          if (d)
            o && d.render(o);
          else {
            if (a)
              return;
            d = new s(h, o);
          }
          if (a) {
            let u = d[a], f = d;
            u === void 0 && (f = d.$, u = f[a]), typeof u == "function" ? l = u.call(f, ...r) : l = u;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
  static register(t, e) {
    var i, r;
    t = t || this, e = (e ?? t.NAME).toLowerCase(), this.map.set(e, t);
    const s = (r = (i = t.toggle) == null ? void 0 : i.name) == null ? void 0 : r.toLowerCase();
    s && s !== e && this.toggleMap.set(s, t);
  }
};
Ze.DEFAULT = {};
Ze.MULTI_INSTANCE = !1;
Ze.ALL = /* @__PURE__ */ new Map();
Ze.TYPED_ALL = /* @__PURE__ */ new Map();
Ze.map = /* @__PURE__ */ new Map();
Ze.toggleMap = /* @__PURE__ */ new Map();
let it = Ze;
function si(n) {
  return it.map.get(n.toLowerCase());
}
function yc(n, t, e = {}) {
  let s = typeof n == "function" ? n : si(n);
  if (s || (s = vc(n)), !s)
    return null;
  const { $update: i, ...r } = e;
  if (!s.MULTI_INSTANCE) {
    const o = s.get(t);
    if (o)
      return i && o.render(r, i === "reset"), o;
  }
  return new s(t, r);
}
function Ea(n, t, e = {}) {
  requestAnimationFrame(() => yc(n, t, e));
}
function tf(n, t) {
  it.register(n, t);
}
function vc(n) {
  const { zui: t } = window;
  if (t) {
    n = n == null ? void 0 : n.toLowerCase();
    for (const e in t) {
      const s = e.toLowerCase() === n;
      if (n && !s)
        continue;
      const i = t[e];
      if (!(typeof i != "function" || !i.NAME || !i.ZUI) && (it.map.has(e.toLowerCase()) || tf(i), s))
        return i;
    }
  }
}
function u_(n) {
  var t;
  n ? (t = si(n)) == null || t.defineFn() : window._zuiDefined || (vc(), it.map.forEach((e) => {
    e.defineFn();
  }), Object.assign(window, { _zuiDefined: !0 }));
}
function ef(n, t = {}) {
  const e = p(n);
  let s = e.attr("zui-create");
  const { update: i, onCreate: r } = t, o = (a, l) => {
    if (l = {
      $update: i,
      $optionsFromDataset: !1,
      ...l
    }, r) {
      const h = r(a, l);
      if (h === !1)
        return;
      h && (l = h);
    }
    const c = l.$lib;
    if (c) {
      delete l.$lib, p.getLib(c).then(() => Ea(a, n, l));
      return;
    }
    Ea(a, n, l);
  };
  if (typeof s == "string") {
    s = s.trim();
    const a = s.length ? s.split(",").map((h) => h.trim()) : [], l = Os(n, { prefix: "zui-create-", evalValue: !0 }) || {}, c = Object.keys(l);
    if (!c.length && a.length === 1)
      o(a[0], e.dataset());
    else {
      const h = /* @__PURE__ */ new Set();
      [...a, ...c].forEach((d) => {
        if (h.has(d))
          return;
        const u = l[d];
        o(d, u), delete l[d], h.add(d);
      });
    }
  } else {
    const a = e.dataset(), l = a == null ? void 0 : a.zui;
    if (!l)
      return;
    console.warn("[ZUI] create component instance with [data-zui] is deprecated, use [zui-create] instead.", { element: n, options: t }), a == null || delete a.zui, o(l, a);
  }
}
function sf() {
  p(document).on("click.zui.toggle mouseenter.zui.toggle", "[data-toggle],[zui-toggle]", function(n) {
    const t = p(this), e = t.dataset("toggle") || t.attr("zui-toggle");
    if (!e)
      return;
    const s = it.toggleMap.get(e) || si(e), i = s == null ? void 0 : s.toggle;
    if (!i)
      return;
    const { trigger: r = "click", skip: o = "[disabled],.disabled", check: a } = i, l = n.type === "mouseover" ? "hover" : "click";
    if (!r.includes(l) || a && !a.call(s, this, l, n) || o && t.is(o))
      return;
    const { onGet: c, onCreate: h, setOptions: d = !0, getOptions: u, prevent: f = !0, handler: g, onToggle: _, convertHref: y } = i;
    let v = t.dataset();
    const b = t.attr(`zui-toggle-${e}`);
    if (b && (v = p.extend(v, Te(b, ["_element", this], ["_$element", t]))), y && t.is("a")) {
      const C = t.attr("href");
      if (C) {
        const k = y === !0 ? { selector: "target", url: "url" } : y;
        "#.".includes(C[0]) ? k.selector && v[k.selector] === void 0 && (v[k.selector] = C) : k.url && v[k.url] === void 0 && (v[k.url] = C);
      }
    }
    if (u && (v = u.call(s, this, v, n)), g) {
      g.call(s, this, v, l, n), f && n.preventDefault();
      return;
    }
    let w = c ? c.call(s, this) : s.get(this);
    if (w)
      d && w.setOptions(v);
    else {
      const C = h ? h.call(s, this, n, v) : new s(this, v);
      if (!C)
        return;
      w = C;
    }
    if (_) {
      if (_.call(s, w, this, n) === !1)
        return;
    } else {
      const { shown: C, show: k, hide: $, toggle: N } = w;
      let A;
      if (N ? A = N : k && $ ? C ? A = $ : A = k : k && (A = k), A)
        A.call(w);
      else
        return;
    }
    f && n.preventDefault();
  });
}
function nf(n, t) {
  const e = Zr(n), s = [];
  return Object.keys(e).forEach((i) => {
    if (!i.startsWith("zui."))
      return;
    const r = e[i];
    (t == null ? void 0 : t(r, i)) !== !1 && s.push(e[i]);
  }), s;
}
let an = 0;
function bc(n = 100) {
  if (an && clearTimeout(an), n) {
    an = window.setTimeout(() => bc(0), n);
    return;
  }
  an = 0, it.ALL.forEach((t) => {
    t.forEach((e) => !e.options.$notDestroyOnDetach && e.autoDestroy());
  });
}
function rf() {
  if (!document.body || Zr(document.body, "_autoDestoryMob"))
    return;
  const n = new MutationObserver((t) => {
    let e = !1;
    for (const s of t)
      if (s.removedNodes.length) {
        e = !0;
        break;
      }
    e && bc();
  });
  n.observe(document.body, { childList: !0, subtree: !0 }), Yr(document.body, "_autoDestoryMob", n);
}
function of(n, t) {
  const e = p(n);
  e.find("[zui-create],[data-zui]").each(function() {
    var s;
    ((s = t == null ? void 0 : t.beforeCreate) == null ? void 0 : s.call(t, this)) !== !1 && ef(this, t);
  }), e.find("[zui-init]").each(function() {
    if (this.hasAttribute("z-zui-inited"))
      return;
    this.setAttribute("z-zui-inited", "");
    const s = this.getAttribute("zui-init");
    s && p.runJS(s, ["$element", p(this)]);
  }), e.find(".hide-before-init").removeClass("invisible hidden opacity-0"), e.find(".scroll-into-view").scrollIntoView(), e.find('[data-on="inited"],[zui-on-inited]').each((s, i) => {
    const r = p(i);
    r.zui() || r.trigger("inited");
  }), t != null && t.runJS && e.runJS();
}
p.fn.zuiInit = function(n) {
  return of(this, n), this;
};
p.fn.zui = function(n, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof n != "string") {
    const i = {};
    let r;
    return nf(e, (o, a) => {
      i[a] = o, (!r || r.gid < o.gid) && (r = i[a]);
    }), n === !0 ? i : r;
  }
  const s = si(n);
  return s ? t === !0 ? s.getAll(e) : s.query(e, t) : p(e).data(`zui.${n}`);
};
p.fn.zuiCall = function(n, t = []) {
  return this.each(function() {
    const e = n.split("."), s = e.length > 1 ? e[0] : void 0, i = e[e.length > 1 ? 1 : 0], r = p(this).zui(s), o = r == null ? void 0 : r[i];
    typeof o == "function" && o.apply(r, t);
  }), this;
};
p(() => {
  p("body").zuiInit({ update: !0 }), sf(), rf();
});
class wc extends it {
  get $targets() {
    const { $element: t } = this, { targets: e } = this.options;
    return e ? t.find(e) : t;
  }
  _handleScroll(t, e, s) {
    const { offset: i = 1 } = this.options, r = this.$targets, o = t.getBoundingClientRect(), { scrollTop: a, scrollLeft: l } = t;
    r.each((c, h) => {
      const d = h.getBoundingClientRect(), u = e === "top" && a > 0 && d.top <= o.top + i || e === "bottom" && d.bottom >= o.bottom - i || e === "left" && l > 0 && d.left <= o.left + i || e === "right" && l < t.scrollWidth - t.clientWidth;
      h.classList.toggle(s, u);
    });
  }
  init() {
    const { offset: t = 1, side: e = "top", zIndex: s, pinnedClass: i = "is-pinned", scrollContainer: r } = this.options, { $element: o, $targets: a } = this;
    if (a.css({ position: "sticky", zIndex: s, [e]: 0 }), r) {
      const l = o.closest(r)[0] || o.find(r)[0];
      if (l) {
        const c = () => {
          this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
            this._raf = 0, this._handleScroll(l, e, i);
          });
        };
        this._scrollListener = c, l.addEventListener("scroll", c);
      }
      this._container = l, requestAnimationFrame(() => {
        this._handleScroll(l, e, i);
      });
    } else
      this._ob = new IntersectionObserver(
        (l) => {
          l.forEach((c) => {
            c.target.classList.toggle(i, c.intersectionRatio < t);
          });
        },
        { threshold: [1] }
      ), a.css("side", -t).each((l, c) => this._ob.observe(c));
  }
  destroy() {
    var t;
    (t = this._ob) == null || t.disconnect(), this._container && (this._container.removeEventListener("scroll", this._scrollListener), this._raf && cancelAnimationFrame(this._raf));
  }
}
wc.NAME = "Sticky";
function lr(n) {
  if (!n)
    return;
  if (typeof n == "object")
    return n;
  if (n = n.replace(/^#/, ""), !n.length)
    return;
  n.startsWith("/") || (n = `/${n}`);
  const t = new URL(window.location.origin + n), [, e = "", ...s] = t.pathname.split("/");
  let i = e.trim();
  if (!i.length)
    return;
  let r = "";
  return i.includes("~") && ([r, i] = i.split("~")), {
    name: i,
    scope: r,
    options: Object.fromEntries([...t.searchParams.entries()].map(([o, a]) => {
      try {
        a.includes("%") && (a = decodeURIComponent(a)), a = JSON.parse(a);
      } catch {
      }
      return [o, a];
    })),
    params: s.map((o) => {
      if (o !== "undefined") {
        if (o === "null")
          return null;
        try {
          return o.includes("%") && (o = decodeURIComponent(o)), JSON.parse(o);
        } catch {
          return o;
        }
      }
    })
  };
}
function af(n) {
  if (Array.isArray(n))
    return { commands: n.map(lr).filter(Boolean) };
  if (typeof n == "object")
    return n;
  n = n.replace(/^#!?/, "");
  const t = n.includes(">"), e = n.split(t ? ">" : "|").map(lr);
  return {
    async: t,
    commands: e.filter(Boolean)
  };
}
function Ta(n, t, e) {
  if (typeof n == "string" && (n = lr(n)), !n)
    return;
  const { execute: s, event: i, scope: r } = t;
  if (!(r && n.scope && n.scope !== r))
    return s({
      name: n.name,
      options: {
        ...t.options,
        ...n.options
      },
      event: i,
      scope: n.scope,
      prevResult: e
    }, n.params);
}
async function lf(n, t) {
  const { async: e, commands: s } = af(n);
  if (!s.length)
    return [];
  const { signal: i } = t;
  if (e) {
    const o = [];
    let a;
    for (const l of s) {
      if (!(i != null && i.aborted))
        break;
      a = await Ta(l, t, a), i != null && i.aborted && (a = void 0), o.push(a);
    }
    return o;
  }
  return await Promise.all(s.map((o) => {
    if (!(i != null && i.aborted))
      return Ta(o, t);
  }));
}
const os = "zui.commands", ds = "z-commands", Li = "zui-commands-proxy", Cc = "zui-command", Mn = {};
function f_(n, t) {
  typeof n == "string" && t ? Mn[n] = t : typeof n == "object" && Object.assign(Mn, n);
}
function ni(n, t) {
  typeof t == "string" ? t = { scope: t } : typeof t == "function" && (t = { onCommand: t });
  const { scope: e = "", events: s = "click" } = t ?? {}, i = p(n), r = (i.attr(ds) || "").split(",");
  e && !r.includes(e) && r.push(e), i.attr(ds, r.join(",")).data(os, {
    [e]: {
      ...t,
      scope: e,
      events: s,
      gid: st()
    },
    ...i.data(os)
  });
}
function so(n, t = !0) {
  const e = p(n);
  if (t === !0)
    e.removeAttr(ds), e.removeData(os);
  else if (t.length) {
    const s = e.data(os) || {};
    t.split(",").forEach((r) => {
      delete s[r];
    });
    const i = Object.keys(s);
    i.length ? e.attr(ds, i.join(",")).data(os, ni) : so(e, !0);
  }
}
function Sc(n, t) {
  let e = n.closest(`[${ds}],[${Li}]`).first();
  if (e.attr(Li) !== void 0 && (e = p(e.data("zui.commandProxy") || e.attr(Li)).closest(`[${ds}]`)), !e.length)
    return;
  const s = e.data(os) || {}, i = Object.values(s).sort((o, a) => a.gid - o.gid);
  let r;
  return t != null && t.length ? (r = i.find((o) => o.scope === t), r || (r = i.find((o) => {
    var a;
    return !((a = o.scope) != null && a.length) && !o.scoped;
  })), r) : (r = i.find((o) => {
    var a;
    return !((a = o.scope) != null && a.length) && !o.scoped;
  }), r || (r = i.find((o) => !o.scoped)), r ? r.element = e[0] : r = Sc(n.parent(), t), r);
}
function cf(n) {
  if (!n.currentTarget)
    return;
  const t = p(n.currentTarget);
  if (t.closest(".disabled,[disabled]").length)
    return;
  const e = t.attr(Cc) || (t.is('a[href^="#!"]') ? t.attr("href") : "");
  if (!e)
    return;
  const s = new AbortController(), i = () => s.abort();
  lf(e, {
    signal: s.signal,
    execute: (r, o) => {
      const { scope: a, name: l } = r, c = {
        ...r,
        abort: i
      };
      o = o.map((f) => typeof f == "string" && f.startsWith("$.") ? Qn(c, f.substring(2)) : f);
      let h;
      const d = Sc(t, a);
      if (d) {
        c.element = d.element;
        const f = (d.commands ? d.commands[`${a}~${l}`] || d.commands[l] : null) || d.onCommand;
        if (f && (h = f(c, o), n.commandHandled))
          return h;
      }
      const u = [c, o];
      if (t.trigger("command", u).trigger(`command:${a ? `${l}.${a}` : l}`, u), a && t.trigger(`command:.${a}`, u), n.commandHandled)
        return h;
      if (a === "event") {
        l === "stop" ? n.stopPropagation() : l === "prevent" ? n.preventDefault() : Zt(n, l, o);
        return;
      }
      if (a != null && a.startsWith(".")) {
        let f;
        if (a === ".")
          f = t.closest("[z-use]").zui();
        else {
          const g = a.substring(1);
          f = t.closest(`[z-use-${g}]`).zui(g);
        }
        if (f)
          return f.executeCommand(l, o);
        console.warn(`[ZUI] Command "${l}" not found in scope "${a}".`);
        return;
      }
      return a === "window" ? Zt(window, l, o) : a === "zui" ? Zt(window.zui, l, o) : a === "target" ? Zt(t[0], l, o) : a === "$target" ? Zt(t, l, o) : a === "$" ? Zt(p, l, o) : a === "" && Mn[l] !== void 0 ? Mn[l](c, o) : h;
    },
    event: n
  });
}
p.fn.command = function(n, t) {
  return this.on(`command:${n}`, t);
};
p.fn.offCommand = function(n, t) {
  return this.off(`command:${n}`, t);
};
p.fn.commands = function(n) {
  return this.each((t, e) => ni(e, n)), this;
};
p.fn.unbindCommands = function(n) {
  return this.each((t, e) => so(e, n)), this;
};
p(() => {
  p(document).on("click.zui.command", `[${Cc}],a[href^="#!"]`, cf);
});
function cr(n, t, e = !1) {
  var i;
  const s = p(n);
  if (t !== void 0) {
    if (typeof t == "string" && t.length) {
      const r = `zui-runjs-${st()}`;
      s.append(`<script id="${r}">${t}<\/script>`), e && s.find(`#${r}`).remove();
    }
    return;
  }
  if (s.is("script")) {
    const r = (i = s[0]) == null ? void 0 : i.textContent;
    r && cr(s.parent(), r);
    return;
  }
  s.find("script").each((r, o) => {
    cr(s, o.textContent), o.remove();
  });
}
p.runJS = (n, ...t) => (n = n.trim(), !n.startsWith("return ") && !n.endsWith(";") && (n = `return ${n}`), new Function(...t.map(([s]) => s), n)(...t.map(([, s]) => s)));
p.fn.runJS = function(n) {
  return this.each((t, e) => {
    cr(e, n);
  });
};
function p_(n) {
  return new Promise((t) => {
    typeof n == "string" && (n = { accept: n });
    const e = document.createElement("input");
    e.type = "file", e.accept = (n == null ? void 0 : n.accept) || "*/*", e.multiple = (n == null ? void 0 : n.multiple) || !1, e.onchange = () => {
      e.files ? t(e.multiple ? e.files : e.files[0]) : t(null), e.remove();
    }, e.click();
  });
}
function m_(n) {
  return new Promise((t, e) => {
    const s = new FileReader();
    s.onload = () => {
      t(s.result);
    }, s.onerror = (i) => {
      e(i);
    }, s.readAsText(n);
  });
}
function hf(n, t) {
  const e = typeof t == "number" ? { delay: t } : t, { delay: s = 0, immediate: i = !1 } = e ?? {};
  let r = null;
  const o = function(...a) {
    const l = i && !r;
    if (r && clearTimeout(r), r = window.setTimeout(() => {
      r = null, i || n.apply(this, a);
    }, s), l)
      return n.apply(this, a);
  };
  return o.cancel = function() {
    r && (clearTimeout(r), r = null);
  }, o;
}
function df(n, t) {
  p.libRoot = n, t && (p.libVersion = t);
}
function kc(n, t) {
  p.libMap || (p.libMap = {}), !t.name && t.id && (t.id = `zui-lib-${n}`), p.libMap[n] = t;
}
p.setLibRoot = df;
p.registerLib = kc;
p.libVersion = 1786610299470 .toString(36);
function uf(n) {
  return new Promise((t, e) => {
    typeof n == "string" && (n = { src: n });
    const { src: s, id: i, version: r } = n;
    if (p(i ? `#${i}` : `link[href^="${s}"]`).length) {
      t();
      return;
    }
    const a = document.createElement("link");
    a.onload = () => {
      t();
    }, a.onerror = () => {
      e(new Error(`[ZUI] Failed to load CSS from: ${s}`));
    }, a.rel = "stylesheet", a.href = `${s}${r ? `${s.includes("?") ? "&" : "?"}v=${r}` : ""}`, i && (a.id = i), p("head").append(a);
  });
}
function ff(n) {
  return new Promise((t, e) => {
    typeof n == "string" && (n = { src: n });
    const { src: s, id: i, version: r } = n, o = p(i ? `#${i}` : `script[src^="${s}"]`);
    if (o.length) {
      if (o.dataset("loaded"))
        t();
      else {
        const f = o.data("loadCalls") || [];
        f.push(t), o.data("loadCalls", f);
      }
      return;
    }
    const { async: a = !0, defer: l = !1, noModule: c = !1, type: h, integrity: d } = n, u = document.createElement("script");
    u.async = a, u.defer = l, u.noModule = c, h && (u.type = h), d && (u.integrity = d), u.onload = () => {
      t(), (p(u).dataset("loaded", !0).data("loadCalls") || []).forEach((g) => g()), p(u).removeData("loadCalls");
    }, u.onerror = (f) => {
      e(new Error(`[ZUI] Failed to load JS from: ${s}`, { cause: f }));
    }, p("head").append(u), u.src = `${s}${r ? `${s.includes("?") ? "&" : "?"}v=${r}` : ""}`;
  });
}
function pf(n) {
  return new Promise((t) => {
    typeof n == "string" && (n = { type: "module", src: n });
    const { src: e, imports: s, srcList: i = [], id: r } = n;
    e && i.unshift({ src: e, imports: s });
    const o = i.map((v) => v.src).join(","), a = p(r ? `#${r}` : `script[data-src-list="${o}"]`);
    if (a.length) {
      const v = a.data("module");
      if (v)
        t(v);
      else {
        const b = a.data("resolves") || [];
        b.push(t), a.data("resolves", b);
      }
      return;
    }
    const { async: l = !0, defer: c = !1, integrity: h, globalVar: d, resolve: u } = n, f = document.createElement("script"), g = `zui-module-resolve-${p.guid++}`, _ = p(f);
    Object.assign(window, { [g]: (v) => {
      (_.data("module", v).data("resolves") || []).forEach((w) => w(v)), _.removeData("resolves"), u == null || u(v), t(v), delete window[g];
    } }), f.async = l, f.defer = c, f.type = "module", _.attr("data-src-list", o).attr("data-resolve-id", g);
    const y = [];
    f.text = [
      ...i.map(({ src: v, imports: b }) => {
        if (s) {
          if (typeof b == "string")
            return y.push(b), `import * as ${b} from '${v}';`;
          if (b)
            return y.push(...Object.values(b)), `import {${Object.entries(b).map(([w, C]) => `${w} as ${C}`).join(",")}} from '${v}';`;
        }
        return `import '${v}';`;
      }),
      `const zuiImportResult = {${y.map((v) => `${v}: ${v},`)}};`,
      d ? `Object.assign(window, ${d === !0 ? "zuiImportResult" : `{${d}: zuiImportResult}`});` : "",
      `if(window['${g}']) window['${g}'](zuiImportResult);`
    ].join(`
`), h && (f.integrity = h), p("head").append(f);
  });
}
async function xc(n, t, e) {
  var _;
  typeof n == "string" && (n = ((_ = p.libMap) == null ? void 0 : _[n]) || { src: n });
  let s = Array.isArray(n) ? { src: n } : p.extend({}, n);
  typeof t == "function" ? s.success = t : t && p.extend(s, t), e && (s.success = e);
  let { src: i } = s;
  const { name: r, success: o } = s, a = p.libMap && r ? p.libMap[r] : null;
  if (a && (s = p.extend({}, a, s), i = a.src || s.src), typeof i == "string" && (i = [i]), !i || !i.length)
    throw new Error("[ZUI] No src provided for $.getLib.");
  let { check: l = !0 } = s;
  l === !0 && r && (l = r);
  const c = typeof l == "string" ? l : r;
  let h;
  const d = () => {
    let y;
    if (c && (y = window[c] || h), !(y instanceof Element))
      return y;
  };
  typeof l == "string" && (l = () => !!d());
  const u = () => (o == null || o(), d());
  if (typeof l == "function" && await l())
    return u();
  const { root: f = p.libRoot, version: g = p.libVersion } = s;
  for (let y of i) {
    typeof y == "string" && (y = { src: y });
    let { src: v } = y;
    f && !/https?:\/\//.test(v) && (v = `${f}${f.endsWith("/") || v.startsWith("/") ? "" : "/"}${v}`);
    const b = {
      ...s,
      ...y,
      version: g,
      src: v
    };
    if (y.type === "css" || !y.type && v.endsWith(".css")) {
      await uf(b);
      continue;
    }
    if (b.type === "module") {
      h = await pf(b);
      continue;
    }
    await ff(b);
  }
  return u();
}
p.getLib = xc;
p.getScript = p.getLib;
class g_ {
  constructor(t, e) {
    this._name = t, e && this.register(e);
  }
  get loaded() {
    return !!this._module;
  }
  get Module() {
    if (!this._module)
      throw new Error("[ZUI] LibLoader.Module is not loaded.");
    return this._module;
  }
  register(t) {
    kc(this._name, t);
  }
  async load(t) {
    const { throwError: e, noCache: s } = t || {};
    if (!s) {
      if (this._module !== void 0)
        return this._module;
      if (this._error)
        return;
    }
    try {
      this._module = await xc(this._name);
    } catch (i) {
      if (this._error = i, e)
        throw i;
    }
    return this._module;
  }
}
function __(n, t, e) {
  try {
    return n(...t);
  } catch (s) {
    e == null || e(s);
  }
}
function mf(n) {
  const t = document.createElement("textarea");
  t.value = n, t.style.top = "0", t.style.left = "0", t.style.position = "fixed", document.body.appendChild(t), t.focus(), t.select(), document.execCommand("copy"), document.body.removeChild(t);
}
async function gf(n) {
  typeof n == "string" && (n = { text: n });
  const t = !navigator.clipboard || !document.hasFocus();
  let e = "";
  if (Array.isArray(n))
    if (t) {
      for (const s of n)
        if (s.types.includes("text/plain")) {
          e = await (await s.getType("text/plain")).text();
          break;
        }
    } else {
      await navigator.clipboard.write(n);
      return;
    }
  else {
    const s = {};
    for (const [i, r] of Object.entries(n)) {
      if (r === void 0)
        continue;
      let o = i;
      if (o === "text" ? o = "text/plain" : o === "html" && (o = "text/html"), t && o === "text/plain") {
        e = typeof r == "string" ? r : await r.text();
        break;
      }
      s[o] = r;
    }
    t || (n = [new ClipboardItem(s)]);
  }
  if (t)
    return mf(e);
  await navigator.clipboard.write(n);
}
function y_(n, t) {
  return new Promise((e) => {
    const { interval: s = 100, timeout: i = 6e4, timerRef: r, timeoutValue: o, abortSignal: a } = typeof t == "number" ? { timeout: t } : t || {};
    let l = 0, c = !1, h, d = !1;
    const u = (g) => {
      d = !0, h = g;
    }, f = window.setInterval(async () => {
      if (l++, c)
        return;
      if (a != null && a.aborted) {
        clearInterval(f), e(void 0);
        return;
      }
      c = !0;
      const g = await n(u, l);
      if (g)
        clearInterval(f), e(d ? h : g);
      else if (l * s >= i) {
        const _ = o ? await o(l) : void 0;
        clearInterval(f), e(_);
      }
      c = !1;
    }, s);
    r && (r.current = f);
  });
}
var $c;
function Na(n, t, e) {
  n instanceof Headers ? n.set(t, e) : Array.isArray(n) ? n.push([t, e]) : n[t] = e;
}
function _f(n, t) {
  if (n) {
    const e = n.split(";")[0].trim(), s = {
      text: "text/plain",
      html: "text/html",
      json: "application/json",
      ...t
    };
    for (const [i, r] of Object.entries(s))
      if (r.split(",").map((o) => o.trim()).includes(e))
        return i;
  }
  return "text";
}
class no {
  constructor(t) {
    this[$c] = "Ajax", this.setting = t, this._controller = new AbortController(), this._callbacks = { success: [], error: [], complete: [] };
  }
  get completed() {
    return this.data !== void 0 || this.error !== void 0;
  }
  on(t, e) {
    return this._callbacks[t].push(e), this;
  }
  success(t) {
    return this.on("success", t);
  }
  done(t) {
    return this.success(t);
  }
  fail(t) {
    return this.on("error", t);
  }
  complete(t) {
    return this.on("complete", t);
  }
  always(t) {
    return this.complete(t);
  }
  then(t, e) {
    return this.completed ? this.error ? e && e(this.error) : t(this.data) : (this.success((s) => t(s)), e && this.fail(e)), this;
  }
  catch(t) {
    return this.error ? (t(this.error), this) : this.on("error", (e) => t(e));
  }
  finally(t) {
    return this.completed ? (t(), this) : this.complete(() => t());
  }
  abort(t) {
    return this.completed ? !1 : (this._abortError = t, this._controller.abort(), !0);
  }
  getResponseHeader(t) {
    var e;
    return (e = this.response) == null ? void 0 : e.headers.get(t);
  }
  _init() {
    if (this.completed)
      return;
    const {
      url: t,
      type: e,
      data: s,
      processData: i = !0,
      contentType: r,
      crossDomain: o,
      accepts: a,
      dataType: l,
      timeout: c,
      jsonParser: h,
      traditional: d,
      convert: u,
      throws: f,
      dataFilter: g,
      beforeSend: _,
      success: y,
      error: v,
      complete: b,
      ...w
    } = this.setting;
    e && (w.method = e);
    let C = t;
    const k = (w.method || "GET").toUpperCase();
    let $ = s;
    if ($)
      if (k === "GET" || k === "HEAD") {
        let I;
        if (i) {
          const F = new URLSearchParams();
          ba($).forEach((T, L) => {
            F.append(L, typeof T == "string" ? T : String(T));
          }), I = F.toString();
        } else
          I = typeof $ == "string" ? $ : new URLSearchParams($).toString();
        if (I) {
          const F = C.indexOf("#"), T = F < 0 ? "" : C.slice(F), L = F < 0 ? C : C.slice(0, F);
          C = `${L}${L.includes("?") ? "&" : "?"}${I}${T}`;
        }
      } else
        i && ($ = ba($)), w.body = $;
    o && (w.mode = "cors");
    const N = w.headers || {};
    Na(N, "X-Requested-With", "XMLHttpRequest"), r && Na(N, "Content-Type", r), w.headers = N, y && this.success(y), v && this.fail(v), b && this.complete(b);
    const A = [...this.constructor.globalBeforeSends, _];
    for (const I of A) {
      if (!I)
        continue;
      const F = I.call(this, w);
      if (F === !1)
        return !1;
      F && Object.assign(w, F);
    }
    w.signal && w.signal.addEventListener("abort", () => {
      this.abort();
    }), w.signal = this._controller.signal, this.url = C, this.request = w;
  }
  _emit(t, ...e) {
    this._callbacks[t].forEach((s) => {
      s.call(this, ...e);
    });
  }
  async send() {
    var d;
    if (this.completed)
      return [];
    if (this._init() === !1) {
      const u = this._abortError || new Error("abort");
      if (this.error = u, this._emit("error", u, void 0, u.message), this._emit("complete", void 0, void 0), this.setting.throws)
        throw u;
      return [void 0, u, void 0];
    }
    const { timeout: t, dataType: e, accepts: s, dataFilter: i, throws: r, jsonParser: o, convert: a } = this.setting;
    t && (this._timeoutID = window.setTimeout(() => {
      this.abort(new Error("timeout"));
    }, t));
    let l, c, h;
    try {
      l = await fetch(this.url, this.request), this.response = l;
      const { statusText: u } = l;
      if (l.ok) {
        const f = (d = l.headers.get("Content-Disposition")) == null ? void 0 : d.startsWith("attachment"), g = f ? "blob" : e || _f(l.headers.get("Content-Type"), s);
        f || g === "blob" || g === "file" ? h = await l.blob() : g === "json" ? typeof o == "function" ? (h = await l.text(), h = o(h)) : h = await l.json() : g === "js" ? (h = await l.text(), h = Pu(h)) : h = await l.text(), a && (h = await a(h, g)), i && (h = i(h, g) ?? h), this.data = h, this._emit("success", h, u, l);
      } else
        throw this.data = await l.text(), new Error(u);
    } catch (u) {
      this.data === void 0 && h !== void 0 && (this.data = h), c = u;
      let f = !1;
      c.name === "AbortError" && (this._abortError ? c = this._abortError : f = !0), this.error = c, f || this._emit("error", c, l == null ? void 0 : l.statusText, c.message);
    }
    if (this._timeoutID && clearTimeout(this._timeoutID), this._emit("complete", l, l == null ? void 0 : l.statusText), c && r)
      throw c;
    return [h, c, l];
  }
}
$c = Symbol.toStringTag;
no.globalBeforeSends = [];
p.ajax = (n, t) => {
  t = t || {}, typeof n == "string" ? t.url = n : p.extend(t, n);
  const e = new no(t);
  return e.send(), e;
};
p.getJSON = (n, t, e) => (typeof t == "function" && (e = t, t = void 0), p.ajax({
  url: n,
  data: t,
  success: e,
  dataType: "json"
}));
p.get = (n, t, e, s, i = "GET") => {
  let r, o;
  return typeof t == "function" ? (r = t, o = void 0) : o = t, typeof e == "function" ? (r = e, s = void 0) : s = e, p.ajax({
    method: i,
    url: n,
    data: o,
    success: r,
    dataType: s
  });
};
p.post = (n, t, e, s) => p.get(n, t, e, s, "POST");
p.fn.load = function(n, t, e) {
  typeof t == "function" && (e = t, t = void 0);
  const [s, i] = n.split(" ");
  return p.get(s, t, (r, o, a) => {
    i && (r = p(r).find(i).html()), p(this).html(r).zuiInit(), e == null || e.call(this, r, o, a);
  }, "html"), this;
};
async function Je(n, t = [], e, s, i) {
  const r = { throws: !0, dataType: "json" };
  if (typeof n == "string")
    r.url = n;
  else if (typeof n == "object")
    p.extend(r, n);
  else if (typeof n == "function") {
    const l = n.call(s, ...t);
    return l instanceof Promise ? await l : l;
  }
  e && p.extend(r, typeof e == "function" ? e(r) : e), r.url && (r.url = tt(r.url, ...t));
  const o = new no(r);
  i == null || i(o);
  const [a] = await o.send();
  return a;
}
function Ma(n) {
  return !!(n && (typeof n == "string" || typeof n == "object" && n.url || typeof n == "function"));
}
p.fetch = Je;
function Ec(n, t, e) {
  const { left: s, top: i, width: r, height: o } = n, { left: a, top: l, width: c, height: h } = t;
  if (e)
    return s >= a && i >= l && s + r <= c + a && i + o <= h + l;
  const d = s <= a + c && s + r >= a;
  return i <= l + h && i + o >= l && d;
}
function qs(n, t = {}) {
  const e = p(n)[0];
  if (!e)
    return !1;
  let { viewport: s } = t;
  const { left: i, top: r, width: o, height: a } = e.getBoundingClientRect();
  if (t.checkZeroSize && !(o * a))
    return !1;
  if (!s)
    if (t.container)
      s = p(e).closest(t.container)[0].getBoundingClientRect();
    else {
      const { innerHeight: l, innerWidth: c } = window, { clientHeight: h, clientWidth: d } = document.documentElement;
      s = { left: 0, top: 0, width: c || d, height: l || h };
    }
  return Ec({ left: i, top: r, width: o, height: a }, s, t.fullyCheck);
}
p.fn.isVisible = function(n) {
  return qs(this, n);
};
function yf(n, t = "both") {
  return (t === "vert" || t === "both") && n.clientHeight < n.scrollHeight || (t === "horz" || t === "both") && n.clientWidth < n.scrollWidth;
}
function Tc(n, t) {
  const e = p(n), { ifNeeded: s = !0, container: i, ...r } = t || {};
  return e.each((o, a) => {
    if (i) {
      const l = p(a).closest(i);
      if (!l.length || !yf(l[0]))
        return;
    }
    if (s) {
      if (a.scrollIntoViewIfNeeded)
        return a.scrollIntoViewIfNeeded(r);
      if (qs(a, { viewport: a.getBoundingClientRect() }))
        return;
    }
    a.scrollIntoView(r);
  }), e;
}
p.fn.scrollIntoView = function(n) {
  return this.each((t, e) => {
    Tc(e, n);
  });
};
function io(n, t) {
  const e = p(n), s = new ResizeObserver(t);
  return e.each((i, r) => {
    s.observe(r);
  }), s;
}
p.fn.resize = function(n) {
  return io(this, n);
};
function gn(n) {
  const t = p(n);
  t.css({ minHeight: 0 });
  const e = +(t.css("max-height") || "").replace("px", "");
  let s = Math.max(32, t[0].scrollHeight);
  return e && s > e && (s = e), t.css({ minHeight: s });
}
p.fn.autoHeight = function(n) {
  return this.each(function() {
    const t = p(this);
    t.data("auto-height") || t.on("input paste change", function() {
      gn(this);
    }).data("auto-height", !0), n != null && n.fast || gn(t), setTimeout(() => gn(t), 100);
  });
};
p.autoHeight = gn;
const v_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isElementDetached: Qt,
  isViewVisible: Ec,
  isVisible: qs,
  listenResize: io,
  scrollIntoView: Tc
}, Symbol.toStringTag, { value: "Module" }));
var hr, $t, Pi, Aa, Ia = 0, Nc = [], ct = q, Da = ct.__b, La = ct.__r, Pa = ct.diffed, Ra = ct.__c, za = ct.unmount, Fa = ct.__;
function vf(n, t) {
  ct.__h && ct.__h($t, n, Ia || t), Ia = 0;
  var e = $t.__H || ($t.__H = { __: [], __h: [] });
  return n >= e.__.length && e.__.push({}), e.__[n];
}
function Mc(n, t) {
  var e = vf(hr++, 7);
  return Cf(e.__H, t) && (e.__ = n(), e.__H = t, e.__h = n), e.__;
}
function bf() {
  for (var n; n = Nc.shift(); )
    if (n.__P && n.__H)
      try {
        n.__H.__h.forEach(_n), n.__H.__h.forEach(dr), n.__H.__h = [];
      } catch (t) {
        n.__H.__h = [], ct.__e(t, n.__v);
      }
}
ct.__b = function(n) {
  $t = null, Da && Da(n);
}, ct.__ = function(n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), Fa && Fa(n, t);
}, ct.__r = function(n) {
  La && La(n), hr = 0;
  var t = ($t = n.__c).__H;
  t && (Pi === $t ? (t.__h = [], $t.__h = [], t.__.forEach(function(e) {
    e.__N && (e.__ = e.__N), e.u = e.__N = void 0;
  })) : (t.__h.forEach(_n), t.__h.forEach(dr), t.__h = [], hr = 0)), Pi = $t;
}, ct.diffed = function(n) {
  Pa && Pa(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (Nc.push(t) !== 1 && Aa === ct.requestAnimationFrame || ((Aa = ct.requestAnimationFrame) || wf)(bf)), t.__H.__.forEach(function(e) {
    e.u && (e.__H = e.u), e.u = void 0;
  })), Pi = $t = null;
}, ct.__c = function(n, t) {
  t.some(function(e) {
    try {
      e.__h.forEach(_n), e.__h = e.__h.filter(function(s) {
        return !s.__ || dr(s);
      });
    } catch (s) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], ct.__e(s, e.__v);
    }
  }), Ra && Ra(n, t);
}, ct.unmount = function(n) {
  za && za(n);
  var t, e = n.__c;
  e && e.__H && (e.__H.__.forEach(function(s) {
    try {
      _n(s);
    } catch (i) {
      t = i;
    }
  }), e.__H = void 0, t && ct.__e(t, e.__v));
};
var Oa = typeof requestAnimationFrame == "function";
function wf(n) {
  var t, e = function() {
    clearTimeout(s), Oa && cancelAnimationFrame(t), setTimeout(n);
  }, s = setTimeout(e, 35);
  Oa && (t = requestAnimationFrame(e));
}
function _n(n) {
  var t = $t, e = n.__c;
  typeof e == "function" && (n.__c = void 0, e()), $t = t;
}
function dr(n) {
  var t = $t;
  n.__c = n.__(), $t = t;
}
function Cf(n, t) {
  return !n || n.length !== t.length || t.some(function(e, s) {
    return e !== n[s];
  });
}
var Sf = Symbol.for("preact-signals");
function ii() {
  if (xe > 1)
    xe--;
  else {
    for (var n, t = !1; Ps !== void 0; ) {
      var e = Ps;
      for (Ps = void 0, ur++; e !== void 0; ) {
        var s = e.o;
        if (e.o = void 0, e.f &= -3, !(8 & e.f) && Lc(e))
          try {
            e.c();
          } catch (i) {
            t || (n = i, t = !0);
          }
        e = s;
      }
    }
    if (ur = 0, xe--, t)
      throw n;
  }
}
function Ac(n) {
  if (xe > 0)
    return n();
  xe++;
  try {
    return n();
  } finally {
    ii();
  }
}
var G = void 0;
function Ic(n) {
  var t = G;
  G = void 0;
  try {
    return n();
  } finally {
    G = t;
  }
}
var Ps = void 0, xe = 0, ur = 0, An = 0;
function Dc(n) {
  if (G !== void 0) {
    var t = n.n;
    if (t === void 0 || t.t !== G)
      return t = { i: 0, S: n, p: G.s, n: void 0, t: G, e: void 0, x: void 0, r: t }, G.s !== void 0 && (G.s.n = t), G.s = t, n.n = t, 32 & G.f && n.S(t), t;
    if (t.i === -1)
      return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = G.s, t.n = void 0, G.s.n = t, G.s = t), t;
  }
}
function gt(n, t) {
  this.v = n, this.i = 0, this.n = void 0, this.t = void 0, this.W = t == null ? void 0 : t.watched, this.Z = t == null ? void 0 : t.unwatched, this.name = t == null ? void 0 : t.name;
}
gt.prototype.brand = Sf;
gt.prototype.h = function() {
  return !0;
};
gt.prototype.S = function(n) {
  var t = this, e = this.t;
  e !== n && n.e === void 0 && (n.x = e, this.t = n, e !== void 0 ? e.e = n : Ic(function() {
    var s;
    (s = t.W) == null || s.call(t);
  }));
};
gt.prototype.U = function(n) {
  var t = this;
  if (this.t !== void 0) {
    var e = n.e, s = n.x;
    e !== void 0 && (e.x = s, n.e = void 0), s !== void 0 && (s.e = e, n.x = void 0), n === this.t && (this.t = s, s === void 0 && Ic(function() {
      var i;
      (i = t.Z) == null || i.call(t);
    }));
  }
};
gt.prototype.subscribe = function(n) {
  var t = this;
  return ze(function() {
    var e = t.value, s = G;
    G = void 0;
    try {
      n(e);
    } finally {
      G = s;
    }
  }, { name: "sub" });
};
gt.prototype.valueOf = function() {
  return this.value;
};
gt.prototype.toString = function() {
  return this.value + "";
};
gt.prototype.toJSON = function() {
  return this.value;
};
gt.prototype.peek = function() {
  var n = G;
  G = void 0;
  try {
    return this.value;
  } finally {
    G = n;
  }
};
Object.defineProperty(gt.prototype, "value", { get: function() {
  var n = Dc(this);
  return n !== void 0 && (n.i = this.i), this.v;
}, set: function(n) {
  if (n !== this.v) {
    if (ur > 100)
      throw new Error("Cycle detected");
    this.v = n, this.i++, An++, xe++;
    try {
      for (var t = this.t; t !== void 0; t = t.x)
        t.t.N();
    } finally {
      ii();
    }
  }
} });
function Tt(n, t) {
  return new gt(n, t);
}
function Lc(n) {
  for (var t = n.s; t !== void 0; t = t.n)
    if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i)
      return !0;
  return !1;
}
function Pc(n) {
  for (var t = n.s; t !== void 0; t = t.n) {
    var e = t.S.n;
    if (e !== void 0 && (t.r = e), t.S.n = t, t.i = -1, t.n === void 0) {
      n.s = t;
      break;
    }
  }
}
function Rc(n) {
  for (var t = n.s, e = void 0; t !== void 0; ) {
    var s = t.p;
    t.i === -1 ? (t.S.U(t), s !== void 0 && (s.n = t.n), t.n !== void 0 && (t.n.p = s)) : e = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = s;
  }
  n.s = e;
}
function Xe(n, t) {
  gt.call(this, void 0), this.x = n, this.s = void 0, this.g = An - 1, this.f = 4, this.W = t == null ? void 0 : t.watched, this.Z = t == null ? void 0 : t.unwatched, this.name = t == null ? void 0 : t.name;
}
Xe.prototype = new gt();
Xe.prototype.h = function() {
  if (this.f &= -3, 1 & this.f)
    return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === An))
    return !0;
  if (this.g = An, this.f |= 1, this.i > 0 && !Lc(this))
    return this.f &= -2, !0;
  var n = G;
  try {
    Pc(this), G = this;
    var t = this.x();
    (16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
  } catch (e) {
    this.v = e, this.f |= 16, this.i++;
  }
  return G = n, Rc(this), this.f &= -2, !0;
};
Xe.prototype.S = function(n) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var t = this.s; t !== void 0; t = t.n)
      t.S.S(t);
  }
  gt.prototype.S.call(this, n);
};
Xe.prototype.U = function(n) {
  if (this.t !== void 0 && (gt.prototype.U.call(this, n), this.t === void 0)) {
    this.f &= -33;
    for (var t = this.s; t !== void 0; t = t.n)
      t.S.U(t);
  }
};
Xe.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var n = this.t; n !== void 0; n = n.x)
      n.t.N();
  }
};
Object.defineProperty(Xe.prototype, "value", { get: function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  var n = Dc(this);
  if (this.h(), n !== void 0 && (n.i = this.i), 16 & this.f)
    throw this.v;
  return this.v;
} });
function us(n, t) {
  return new Xe(n, t);
}
function zc(n) {
  var t = n.u;
  if (n.u = void 0, typeof t == "function") {
    xe++;
    var e = G;
    G = void 0;
    try {
      t();
    } catch (s) {
      throw n.f &= -2, n.f |= 8, ro(n), s;
    } finally {
      G = e, ii();
    }
  }
}
function ro(n) {
  for (var t = n.s; t !== void 0; t = t.n)
    t.S.U(t);
  n.x = void 0, n.s = void 0, zc(n);
}
function kf(n) {
  if (G !== this)
    throw new Error("Out-of-order effect");
  Rc(this), G = n, this.f &= -2, 8 & this.f && ro(this), ii();
}
function gs(n, t) {
  this.x = n, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32, this.name = t == null ? void 0 : t.name;
}
gs.prototype.c = function() {
  var n = this.S();
  try {
    if (8 & this.f || this.x === void 0)
      return;
    var t = this.x();
    typeof t == "function" && (this.u = t);
  } finally {
    n();
  }
};
gs.prototype.S = function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, zc(this), Pc(this), xe++;
  var n = G;
  return G = this, kf.bind(this, n);
};
gs.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = Ps, Ps = this);
};
gs.prototype.d = function() {
  this.f |= 8, 1 & this.f || ro(this);
};
gs.prototype.dispose = function() {
  this.d();
};
function ze(n, t) {
  var e = new gs(n, t);
  try {
    e.c();
  } catch (i) {
    throw e.d(), i;
  }
  var s = e.d.bind(e);
  return s[Symbol.dispose] = s, s;
}
var Ri;
function _s(n, t) {
  q[n] = t.bind(null, q[n] || function() {
  });
}
function In(n) {
  Ri && Ri(), Ri = n && n.S();
}
function Fc(n) {
  var t = this, e = n.data, s = $f(e);
  s.value = e;
  var i = Mc(function() {
    for (var r = t.__v; r = r.__; )
      if (r.__c) {
        r.__c.__$f |= 4;
        break;
      }
    return t.__$u.c = function() {
      var o, a = t.__$u.S(), l = i.value;
      a(), bt(l) || ((o = t.base) == null ? void 0 : o.nodeType) !== 3 ? (t.__$f |= 1, t.setState({})) : t.base.data = l;
    }, us(function() {
      var o = s.value.value;
      return o === 0 ? 0 : o === !0 ? "" : o || "";
    });
  }, []);
  return i.value;
}
Fc.displayName = "_st";
Object.defineProperties(gt.prototype, { constructor: { configurable: !0, value: void 0 }, type: { configurable: !0, value: Fc }, props: { configurable: !0, get: function() {
  return { data: this };
} }, __b: { configurable: !0, value: 1 } });
_s("__b", function(n, t) {
  if (typeof t.type == "string") {
    var e, s = t.props;
    for (var i in s)
      if (i !== "children") {
        var r = s[i];
        r instanceof gt && (e || (t.__np = e = {}), e[i] = r, s[i] = r.peek());
      }
  }
  n(t);
});
_s("__r", function(n, t) {
  In();
  var e, s = t.__c;
  s && (s.__$f &= -2, (e = s.__$u) === void 0 && (s.__$u = e = function(i) {
    var r;
    return ze(function() {
      r = this;
    }), r.c = function() {
      s.__$f |= 1, s.setState({});
    }, r;
  }())), In(e), n(t);
});
_s("__e", function(n, t, e, s) {
  In(), n(t, e, s);
});
_s("diffed", function(n, t) {
  In();
  var e;
  if (typeof t.type == "string" && (e = t.__e)) {
    var s = t.__np, i = t.props;
    if (s) {
      var r = e.U;
      if (r)
        for (var o in r) {
          var a = r[o];
          a !== void 0 && !(o in s) && (a.d(), r[o] = void 0);
        }
      else
        e.U = r = {};
      for (var l in s) {
        var c = r[l], h = s[l];
        c === void 0 ? (c = xf(e, l, h, i), r[l] = c) : c.o(h, i);
      }
    }
  }
  n(t);
});
function xf(n, t, e, s) {
  var i = t in n && n.ownerSVGElement === void 0, r = Tt(e);
  return { o: function(o, a) {
    r.value = o, s = a;
  }, d: ze(function() {
    var o = r.value.value;
    s[t] !== o && (s[t] = o, i ? n[t] = o : o ? n.setAttribute(t, o) : n.removeAttribute(t));
  }) };
}
_s("unmount", function(n, t) {
  if (typeof t.type == "string") {
    var e = t.__e;
    if (e) {
      var s = e.U;
      if (s) {
        e.U = void 0;
        for (var i in s) {
          var r = s[i];
          r && r.d();
        }
      }
    }
  } else {
    var o = t.__c;
    if (o) {
      var a = o.__$u;
      a && (o.__$u = void 0, a.d());
    }
  }
  n(t);
});
_s("__h", function(n, t, e, s) {
  (s < 3 || s === 9) && (t.__$f |= 2), n(t, e, s);
});
O.prototype.shouldComponentUpdate = function(n, t) {
  var e = this.__$u, s = e && e.s !== void 0;
  for (var i in t)
    return !0;
  if (this.__f || typeof this.u == "boolean" && this.u === !0) {
    if (!(s || 2 & this.__$f || 4 & this.__$f) || 1 & this.__$f)
      return !0;
  } else if (!(s || 4 & this.__$f) || 3 & this.__$f)
    return !0;
  for (var r in n)
    if (r !== "__source" && n[r] !== this.props[r])
      return !0;
  for (var o in this.props)
    if (!(o in n))
      return !0;
  return !1;
};
function $f(n) {
  return Mc(function() {
    return Tt(n);
  }, []);
}
const Oc = /* @__PURE__ */ new Map(), Ef = {};
function ot(n, t) {
  typeof n == "object" ? Object.keys(n).forEach((e) => {
    ot(e, n[e]);
  }) : t && (Ef[n] = t, Oc.set(n.toLowerCase(), t));
}
function Tf(n) {
  return Oc.get(n.toLowerCase());
}
class Y extends O {
  constructor(t) {
    super(t), this._gid = st(), this.state = this.getDefaultState(t);
  }
  /**
   * Get the unique global ID of the component instance.
   *
   * @returns The unique global ID.
   */
  get gid() {
    return this._gid;
  }
  /**
   * Get the DOM element.
   *
   * @returns The DOM element.
   */
  get element() {
    return document.querySelector(`[z-gid-${this._gid}]`);
  }
  /**
   * Get the component i18n data.
   */
  get i18nData() {
    return [this.props.i18n, this.constructor.i18n];
  }
  /**
   * Get the command scope.
   */
  get commandScope() {
    return this.constructor.NAME;
  }
  /**
   * Get the default state.
   *
   * @param props The props.
   * @returns The default state.
   */
  getDefaultState(t) {
    return {};
  }
  /**
   * Reset the state.
   *
   * @param props The props.
   * @param init Whether to initialize the state.
   */
  resetState(t, e) {
    const s = this.getDefaultState(t);
    e ? this.state = s : this.changeState(s);
  }
  /**
   * Get the i18n text.
   *
   * @param key          The i18n key.
   * @param args         The i18n arguments or the default value.
   * @param defaultValue The default value if the key is not found.
   * @returns            The i18n text.
   */
  i18n(t, e, s) {
    const { i18nData: i } = this;
    return j(i, t, e, s, this.props.lang, this.constructor.NAME) ?? j(i, t, e, s, this.props.lang) ?? `{i18n:${t}}`;
  }
  /**
   * Change the component state.
   *
   * @param state The new state.
   * @param callback The callback to call after the state is changed.
   * @returns The promise of the state.
   */
  changeState(t, e) {
    return new Promise((s) => {
      this.setState(t, () => {
        e == null || e(), s(this.state);
      });
    });
  }
  /**
   * Execute a command.
   *
   * @param context The command context.
   * @param params The command parameters.
   * @returns The result of the command.
   */
  executeCommand(t, e = []) {
    const { onCommand: s, commands: i } = this.props;
    let r;
    typeof t == "string" && (t = { name: t });
    const { scope: o, name: a } = t, l = i ? i[`${o}~${a}`] || i[a] : null;
    return l ? l.call(this, t, e) : ((!t.scope || t.scope === this.commandScope) && (r = Zt(this, t.name, e)), s && (r = s.call(this, t, e)), r);
  }
  /**
   * Get the class name(s) applied to the root element.
   * Subclasses can override this to inject component-specific classes.
   *
   * @param props The current renderable props.
   * @returns     The class name(s) to merge onto the root element.
   */
  _getClassName(t) {
    return t.className;
  }
  /**
   * Resolve the final attributes/props passed to the underlying DOM element or component.
   * Filters out framework-only props, allows whitelisted custom props, forwards `data-*`,
   * `z-*`, `zui-*` and event handler attributes, and stamps the unique `z-gid-*` marker.
   *
   * @param props The current renderable props.
   * @returns     The merged props object to spread onto the rendered element.
   */
  _getProps(t) {
    const { className: e, attrs: s, props: i, data: r, forwardRef: o, children: a, component: l, style: c, class: h, commands: d, onCommand: u, ...f } = t, g = new Set(this.constructor.customProps), _ = "dangerouslySetInnerHTML", y = Object.keys(f).reduce((v, b) => {
      if (!g.has(b) && (b === _ || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(b))) {
        const w = f[b];
        v[b] = b !== _ && w && typeof w == "object" ? JSON.stringify(w) : w;
      }
      return v;
    }, {});
    return { ref: o, className: S(this._getClassName(t), h), style: c, [`z-gid-${this._gid}`]: "", ...y, ...s, ...i };
  }
  /**
   * Resolve the actual component/tag to render.
   * Accepts a tag name, a registered component name, or a component reference;
   * defaults to a `div` when not specified.
   *
   * @param props The current renderable props.
   * @returns     The resolved component type or intrinsic HTML tag name.
   */
  _getComponent(t) {
    const { component: e = "div" } = t;
    return (typeof e == "string" ? Tf(e) : e) || e;
  }
  /**
   * Resolve the children rendered inside the root element.
   * Subclasses can override this to compose additional content around `props.children`.
   *
   * @param props The current renderable props.
   * @returns     The children to render.
   */
  _getChildren(t) {
    return t.children;
  }
  /**
   * Hook invoked before the render pipeline starts.
   * Subclasses can override this to transform or replace the incoming props;
   * returning `void` keeps the original props unchanged.
   *
   * @param props The current renderable props.
   * @returns     The (optionally) transformed props, or `void` to keep them as-is.
   */
  _beforeRender(t) {
    return t;
  }
  /**
   * Final hook invoked right before `h()` is called.
   * Subclasses can override this to swap the component, mutate the resolved props,
   * or wrap the children. Returning `undefined` keeps the inputs unchanged.
   *
   * @param component      The resolved component type or tag name.
   * @param componentProps The resolved props to pass to the component.
   * @param children       The resolved children.
   * @param _props         The original renderable props (unused by default).
   * @returns              A `[component, props, children]` tuple, or `undefined` to keep inputs.
   */
  _onRender(t, e, s, i) {
    return [t, e, s];
  }
  componentDidMount() {
    var s;
    const { commands: t, onCommand: e } = this.props;
    (t || e) && ni(this.element, {
      commands: t,
      scope: this.commandScope,
      onCommand: this.executeCommand.bind(this)
    }), (s = this.props.onMounted) == null || s.call(this);
  }
  componentWillUnmount() {
    var s;
    const { commands: t, onCommand: e } = this.props;
    (t || e) && so(this.element, this.commandScope), (s = this.props.onUnmount) == null || s.call(this);
  }
  render(t) {
    t = this._beforeRender(t) || t;
    let e = this._getComponent(t), s = this._getChildren(t), i = this._getProps(t);
    const r = this._onRender(e, i, s, t);
    return r && ([e, i, s] = r), Dt(e, i, s);
  }
}
Y.HElement = !0;
Y.customProps = [];
class Hc extends Y {
  constructor(t) {
    super(t), this.signals = {};
    const { state: e } = this;
    this.changeState(e), this.state = {};
  }
  changeState(t, e) {
    return new Promise((s) => {
      Ac(() => {
        typeof t == "function" && (t = t(this.state));
        for (const i in t) {
          const r = this.signals[i];
          r ? r.value = t[i] : this.signals[i] = Tt(t[i]);
        }
        s(this.state), e == null || e();
      });
    });
  }
  resetState(t) {
    this.changeState(this.getDefaultState(t));
  }
}
Hc.HElementSignals = !0;
var Nf = 0;
function m(n, t, e, s, i, r) {
  t || (t = {});
  var o, a, l = t;
  if ("ref" in l)
    for (a in l = {}, t)
      a == "ref" ? o = t[a] : l[a] = t[a];
  var c = { type: n, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Nf, __i: -1, __u: 0, __source: i, __self: r };
  if (typeof n == "function" && (o = n.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return q.vnode && q.vnode(c), c;
}
class Ne extends O {
  constructor() {
    super(...arguments), this._ref = U();
  }
  _runJS() {
    this.props.executeScript && p(this._ref.current).runJS().zuiInit();
  }
  componentDidMount() {
    this._runJS();
  }
  componentDidUpdate(t) {
    this.props.html !== t.html && this._runJS();
  }
  render(t) {
    const { executeScript: e, html: s, ...i } = t;
    return /* @__PURE__ */ m(Y, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: s }, ...i });
  }
}
function Mf(n) {
  const {
    tag: t,
    className: e,
    style: s,
    renders: i,
    generateArgs: r = [],
    generatorThis: o,
    generators: a,
    onGenerate: l,
    onRenderItem: c,
    ...h
  } = n, d = [e], u = { ...s }, f = [], g = [];
  return i.forEach((_) => {
    const y = [];
    if (typeof _ == "string" && a && a[_] && (_ = a[_]), typeof _ == "function")
      if (l)
        y.push(...l.call(o, _, f, ...r));
      else {
        const v = _.call(o, f, ...r);
        v && (Array.isArray(v) ? y.push(...v) : y.push(v));
      }
    else
      y.push(_);
    y.forEach((v) => {
      v != null && (typeof v == "object" && !bt(v) && ("html" in v || "__html" in v || "className" in v || "style" in v || "attrs" in v || "children" in v) ? v.html ? f.push(
        /* @__PURE__ */ m("div", { className: S(v.className), style: v.style, dangerouslySetInnerHTML: { __html: v.html }, ...v.attrs ?? {} })
      ) : v.__html ? g.push(v.__html) : (v.style && Object.assign(u, v.style), v.className && d.push(v.className), v.children && f.push(v.children), v.attrs && Object.assign(h, v.attrs)) : f.push(v));
    });
  }), g.length && Object.assign(h, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: S(d),
    style: u,
    ...h
  }, f];
}
function Wc({
  tag: n = "div",
  ...t
}) {
  const [e, s] = Mf(t);
  return Dt(n, e, ...s);
}
class Dn extends O {
  constructor() {
    super(...arguments), this.state = {}, this._ref = U();
  }
  /**
   * 加载内容
   * @param newFetcher 可选的新的获取器设置，如果提供将使用此设置进行加载，否则使用 props 中的 fetcher
   */
  async load(t) {
    const { props: e } = this, { fetcher: s, type: i, fetcherArgs: r, fetcherThis: o = this, clearBeforeLoad: a } = e;
    this.setState({ loading: !0, error: void 0, ...a ? { content: void 0 } : {} });
    try {
      const l = await Je(t || s, r, { throws: !0, dataType: i === "custom" ? "json" : "text" }, o, (c) => {
        this._ajax = c;
      });
      this.setState({ content: l, loading: !1 });
    } catch (l) {
      this.setState({ error: l, loading: !1 });
    }
    this._ajax = void 0;
  }
  /**
   * 组件挂载后触发加载，并监听 `loadContent.zui` 事件
   */
  componentDidMount() {
    this.load(), p(this._ref.current).on("loadContent.zui", (t, e) => {
      t.stopPropagation(), this.load(e);
    });
  }
  /**
   * 组件更新时检查 fetcher 相关属性是否变化，若变化则重新加载
   * @param previousProps 上一次渲染的属性
   */
  componentDidUpdate(t) {
    (this.props.fetcher !== t.fetcher || this.props.fetcherArgs !== t.fetcherArgs || this.props.fetcherThis !== t.fetcherThis) && this.load();
  }
  /**
   * 组件卸载时中止未完成的请求并移除事件监听
   */
  componentWillUnmount() {
    var t;
    (t = this._ajax) == null || t.abort(), p(this._ref.current).off(".zui");
  }
  _renderContent(t, e) {
    const { loading: s, error: i, content: r = "" } = this.state, { loadingContent: o, contentClass: a, contentStyle: l, contentAttrs: c, errorText: h, type: d, clearBeforeLoad: u, ...f } = e;
    return s && u ? o : i ? h ?? i.message : d === "html" ? /* @__PURE__ */ m(Ne, { html: r, executeScript: !0, className: a, style: l, attrs: c, ...f }) : d === "text" ? r : /* @__PURE__ */ m(P, { content: r, className: a, style: l, attrs: c, ...f });
  }
  /**
   * 渲染组件结构
   * @param props 组件属性
   */
  render(t) {
    const { loading: e } = this.state, { id: s, loadingClass: i, loadingIndicator: r, className: o, style: a, attrs: l, loadingText: c, ...h } = t;
    return /* @__PURE__ */ m("div", { id: s, ref: this._ref, className: S("lazy-content", o, e ? i : "", r ? "load-indicator" : ""), "data-loading": c, style: a, ...l, children: this._renderContent(t, h) });
  }
}
Dn.defaultProps = {
  type: "html",
  loadingIndicator: !0,
  loadingClass: "loading",
  clearBeforeLoad: !0
};
function fr(n) {
  const { content: t, generatorArgs: e, generatorThis: s, ...i } = n;
  let r = t;
  if (typeof r == "function" && (r = r.call(s, ...e || [])), Array.isArray(r))
    return r.map((o) => fr({ ...i, content: o, generatorThis: s, generatorArgs: e }));
  if (typeof r == "string" || typeof r == "number")
    return Object.keys(i).length ? /* @__PURE__ */ m("div", { ...i, children: r }) : r;
  if (r && typeof r == "object" && (typeof r.html == "string" || r.component || r.fetcher)) {
    if (r.fetcher)
      return /* @__PURE__ */ m(Dn, { ...H(i, r) });
    if (r.html)
      return /* @__PURE__ */ m(Ne, { ...H(i, r) });
    const { children: o, ...a } = r;
    return o && (r = H({ children: (Array.isArray(o) ? o : [o]).map((l) => fr({ ...i, content: l, generatorThis: s, generatorArgs: e })) }, a)), /* @__PURE__ */ m(Y, { ...H(i, r) });
  }
  return bt(r) ? r : (r && (console.groupCollapsed("[ZUI] CustomContent format error"), console.trace("content:", r), console.log("props:", n), console.groupEnd()), null);
}
function P(n) {
  const t = fr(n);
  return t == null || typeof t == "boolean" ? null : bt(t) ? t : /* @__PURE__ */ m(ms, { children: t });
}
class Af extends O {
  render(t) {
    return P(t);
  }
}
const Ha = (n) => n.startsWith("icon-") ? n : `icon-${n}`;
function rt(n) {
  const { icon: t, className: e, ...s } = n;
  if (!t)
    return null;
  if (bt(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(Ha(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? Ha(o) : ""), Object.assign(s, a);
  }
  return /* @__PURE__ */ m("i", { className: S(i), ...s });
}
function If(n) {
  return this.getChildContext = () => n.context, n.children;
}
function Bc(n) {
  const t = this, e = n._container;
  t.componentWillUnmount = function() {
    rs(null, t._temp), t._temp = null, t._container = null;
  }, t._container && t._container !== e && t.componentWillUnmount(), n._vnode ? (t._temp || (t._container = e, t._temp = {
    nodeType: 1,
    parentNode: e,
    childNodes: [],
    appendChild(s) {
      this.childNodes.push(s), t._container.appendChild(s);
    },
    insertBefore(s, i) {
      this.childNodes.push(s), t._container.appendChild(s);
    },
    removeChild(s) {
      this.childNodes.splice(this.childNodes.indexOf(s) >>> 1, 1), t._container.removeChild(s);
    }
  }), rs(
    Dt(If, { context: t.context }, n._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Df(n, t) {
  const e = Dt(Bc, { _vnode: n, _container: t });
  return e.containerInfo = t, e;
}
class pr extends O {
  constructor() {
    super(...arguments), this._ref = U(), this._eleRef = U();
  }
  /** 获取ZUI组件实例 */
  get $() {
    return this._ref.current;
  }
  /**
   * 初始化ZUI组件
   * 销毁已存在的组件实例,并创建新的组件实例
   */
  initZuiComponent() {
    this._ref.current && this._ref.current.destroy();
    const {
      $tagName: t,
      $rootAttrs: e,
      $forceUpdate: s,
      $use: i,
      $options: r,
      ...o
    } = this.props;
    this._ref.current = yc(i, this._eleRef.current, {
      ...r,
      ...o
    });
  }
  /**
   * 更新ZUI组件
   * 使用新的props重新渲染组件
   */
  updateZuiComponent() {
    var a;
    const {
      $tagName: t,
      $rootAttrs: e,
      $forceUpdate: s,
      $use: i,
      $options: r,
      ...o
    } = this.props;
    (a = this._ref.current) == null || a.render({
      ...r,
      ...o
    });
  }
  /**
   * 组件挂载后初始化ZUI组件
   */
  componentDidMount() {
    this.initZuiComponent();
  }
  /**
   * 组件更新时处理ZUI组件的更新
   * 如果组件类型或标签发生变化则重新初始化,否则更新现有组件
   */
  componentDidUpdate(t) {
    t.$forceUpdate !== this.props.$forceUpdate || t.$use !== this.props.$use || t.$tagName !== this.props.$tagName ? this.initZuiComponent() : this.updateZuiComponent();
  }
  /**
   * 组件卸载时销毁ZUI组件实例
   */
  componentWillUnmount() {
    var t;
    (t = this._ref.current) == null || t.destroy();
  }
  /**
   * 渲染组件
   * 默认渲染为div元素,可通过$tagName属性指定其他标签
   */
  render(t) {
    const {
      $tagName: e = "div",
      $rootAttrs: s
    } = t;
    return /* @__PURE__ */ m(e, { ref: this._eleRef, ...s });
  }
}
ot({
  HElement: Y,
  element: Y,
  HtmlContent: Ne,
  html: Ne,
  CustomContent: P,
  LazyContent: Dn,
  custom: P,
  lazy: Dn,
  Icon: rt,
  Portal: Bc,
  ZUI: pr
});
class W extends it {
  constructor() {
    super(...arguments), this._ref = U();
  }
  /**
   * The React component instance.
   */
  get $() {
    return this._ref.current;
  }
  /**
   * The i18n data.
   */
  get i18nData() {
    const { i18n: t, i18nData: e } = this.constructor.Component;
    return e ? [...e, this.constructor.i18n] : [t, ...super.i18nData];
  }
  /**
   * Render after component init.
   */
  afterInit() {
    this.render();
  }
  /**
   * Destroy component.
   */
  destroy() {
    var t, e;
    (e = (t = this.$) == null ? void 0 : t.componentWillUnmount) == null || e.call(t), this.element && (this.element.innerHTML = ""), super.destroy();
  }
  _getRenderProps(t) {
    return {
      ref: this._ref,
      ...t
    };
  }
  /**
   * Render component.
   *
   * @param options new options.
   */
  render(t, e) {
    var f;
    const { element: s, $: i } = this, { Component: r, replace: o } = this.constructor;
    super.render(t, e);
    const { $replace: a = o, $optionsFromDataset: l, $class: c, $style: h, ...d } = this.options, u = this._getRenderProps(d);
    if (e && ((f = i == null ? void 0 : i.resetState) == null || f.call(i, u)), a && r.HElement && (s.tagName.toLowerCase() === a || a === !0)) {
      const g = Array.from(s.attributes).reduce((_, y) => {
        const { name: v, value: b } = y;
        return _[v === "class" ? "className" : v] = b, _;
      }, {});
      rs(
        Dt(r, H({ component: s.tagName.toLowerCase(), attrs: g }, u)),
        s.parentElement,
        s
      );
    } else
      rs(
        Dt(r, u),
        s
      );
  }
  /**
   * Execute a command.
   * @param command The command.
   * @param args    The command arguments.
   * @returns       The command result.
   */
  executeCommand(t, e) {
    try {
      return Zt(this.$, t, e, this.$, !0);
    } catch {
      return super.executeCommand(t, e);
    }
  }
  static renderHTML(t) {
    const e = document.createElement("div");
    return rs(Dt(this.Component, t), e), e.innerHTML;
  }
}
W.replace = !1;
class oo extends W {
}
oo.NAME = "Custom";
oo.Component = Af;
oo.register();
var jc = function(n, t, e, s) {
  var i;
  t[0] = 0;
  for (var r = 1; r < t.length; r++) {
    var o = t[r++], a = t[r] ? (t[0] |= o ? 1 : 2, e[t[r++]]) : t[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[t[++r]] = a : o === 6 ? s[1][t[++r]] += a + "" : o ? (i = n.apply(a, jc(n, a, e, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[r - 2] = 0, t[r] = i)) : s.push(a);
  }
  return s;
}, Wa = /* @__PURE__ */ new Map();
function Uc(n) {
  var t = Wa.get(this);
  return t || (t = /* @__PURE__ */ new Map(), Wa.set(this, t)), (t = jc(this, t.get(n) || (t.set(n, t = function(e) {
    for (var s, i, r = 1, o = "", a = "", l = [0], c = function(u) {
      r === 1 && (u || (o = o.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, u, o) : r === 3 && (u || o) ? (l.push(3, u, o), r = 2) : r === 2 && o === "..." && u ? l.push(4, u, 0) : r === 2 && o && !u ? l.push(5, 0, !0, o) : r >= 5 && ((o || !u && r === 5) && (l.push(r, 0, o, i), r = 6), u && (l.push(r, u, 0, i), r = 6)), o = "";
    }, h = 0; h < e.length; h++) {
      h && (r === 1 && c(), c(h));
      for (var d = 0; d < e[h].length; d++)
        s = e[h][d], r === 1 ? s === "<" ? (c(), l = [l], r = 3) : o += s : r === 4 ? o === "--" && s === ">" ? (r = 1, o = "") : o = s + o[0] : a ? s === a ? a = "" : o += s : s === '"' || s === "'" ? a = s : s === ">" ? (c(), r = 1) : r && (s === "=" ? (r = 5, i = o, o = "") : s === "/" && (r < 5 || e[h][d + 1] === ">") ? (c(), r === 3 && (l = l[0]), r = l, (l = l[0]).push(2, 0, r), r = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (c(), r = 2) : o += s), r === 3 && o === "!--" && (r = 4, l = l[0]);
    }
    return c(), l;
  }(n)), t), arguments, [])).length > 1 ? t : t[0];
}
const Lf = [
  "area",
  "base",
  "br",
  "col",
  "command",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];
let zi = (n) => String(n).replace(/[&<>"']/g, (t) => `&${Pf[t]};`), Pf = { "&": "amp", "<": "lt", ">": "gt", '"': "quot", "'": "apos" }, Fi = "dangerouslySetInnerHTML", Ba = {
  className: "class",
  htmlFor: "for"
}, ja = {};
function Rf(n, t) {
  let e = [], s = "";
  t = t || {};
  for (let i = arguments.length; i-- > 2; )
    e.push(arguments[i]);
  if (typeof n == "function")
    return t.children = e.reverse(), n(t);
  if (n) {
    if (s += "<" + n, t)
      for (let i in t)
        t[i] !== !1 && t[i] != null && i !== Fi && (s += ` ${Ba[i] ? Ba[i] : zi(i)}="${zi(t[i])}"`);
    s += ">";
  }
  if (Lf.indexOf(n) === -1) {
    if (t[Fi])
      s += t[Fi].__html;
    else
      for (; e.length; ) {
        let i = e.pop();
        if (i)
          if (i.pop)
            for (let r = i.length; r--; )
              e.push(i[r]);
          else
            s += ja[i] === !0 ? i : zi(i);
      }
    s += n ? `</${n}>` : "";
  }
  return ja[s] = !0, s;
}
const b_ = Uc.bind(Dt), zf = Uc.bind(Rf);
class et extends Y {
  _beforeRender(t) {
    const { text: e, loading: s, loadingText: i, caret: r, icon: o, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || s && !i, this._onlyCaret = r && this._isEmptyText && !o && !a && !l && !s;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: s, loadingText: i, icon: r, iconClass: o, text: a, textClass: l, children: c, trailingIcon: h, trailingIconClass: d, caret: u } = t;
    return [
      e ? /* @__PURE__ */ m(rt, { icon: s || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ m(rt, { icon: r, className: o }),
      a == null ? null : /* @__PURE__ */ m("span", { className: S("text", l), children: e ? i : a }),
      e ? null : c,
      e ? null : /* @__PURE__ */ m(rt, { icon: h, className: d }),
      e ? null : u ? /* @__PURE__ */ m("span", { className: typeof u == "string" ? `caret-${u}` : "caret" }) : null
    ];
  }
  _getClassName(t) {
    const { type: e, className: s, disabled: i, loading: r, active: o, children: a, square: l, size: c, rounded: h } = t;
    return ["btn", e, s, {
      "btn-caret": this._onlyCaret,
      disabled: i || r,
      active: o,
      loading: r,
      square: l === void 0 ? !this._onlyCaret && !a && this._isEmptyText : l
    }, c ? `size-${c}` : "", typeof h == "string" ? `rounded-${h}` : { rounded: h }];
  }
  _getComponent(t) {
    return t.component || (t.url ? "a" : "button");
  }
  _getProps(t) {
    const e = this._getComponent(t), { url: s, target: i, disabled: r, btnType: o = "button", size: a, hint: l, command: c } = t, h = e === "a", d = {
      ...super._getProps(t),
      type: h ? void 0 : "button",
      disabled: !h && r ? "" : void 0,
      title: l
    };
    return o && (["button", "reset", "submit"].includes(o) ? e === "button" && (d.type = o) : d.className = S([d.className, o])), r || (s !== void 0 && (d[h ? "href" : "data-url"] = s), i !== void 0 && (d[h ? "target" : "data-target"] = i), c && (d["zui-command"] = c)), a && typeof a == "number" && H(d, { style: { "--btn-height": `${a}px` } }), d;
  }
}
const Ff = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: et
}, Symbol.toStringTag, { value: "Module" }));
ot(Ff);
let Qe = class extends Y {
  constructor(t) {
    super(t), this._handleChange = (e) => {
      const { onChange: s } = this.props, i = e.target.indeterminate ? "indeterminate" : e.target.checked;
      this._controlled || this.setState({ checked: i }), s && s.call(this, e, i);
    }, this.state = {
      checked: t.checked ?? t.defaultChecked ?? !1
    }, this._controlled = t.checked !== void 0;
  }
  get checked() {
    return this._controlled ? this.props.checked : this.state.checked;
  }
  _getClassName(t) {
    const { disabled: e, type: s = "checkbox" } = t, { checked: i } = this;
    return [t.className, s === "switch" ? s : `${s}-primary`, {
      disabled: e,
      checked: i === !0,
      indeterminate: i === "indeterminate"
    }];
  }
  _getChildren(t) {
    const { name: e, type: s, value: i, id: r, label: o } = t, { checked: a } = this;
    return [
      e !== !1 ? /* @__PURE__ */ m(
        "input",
        {
          type: s === "radio" ? s : "checkbox",
          name: e,
          id: r,
          value: i,
          onChange: this._handleChange,
          indeterminate: a === "indeterminate",
          checked: typeof a == "boolean" ? a : void 0
        },
        "input"
      ) : null,
      /* @__PURE__ */ m("label", { htmlFor: r, children: /* @__PURE__ */ m(P, { content: o }) }, "label")
    ];
  }
};
class Of extends Qe {
}
Of.defaultProps = {
  type: "radio"
};
class Hf extends Qe {
}
Hf.defaultProps = {
  type: "switch"
};
class Wf extends Y {
  constructor(t) {
    super(t), this._defaultID = `_check-list-${this._gid}`, this._handleChange = (e) => {
      var l;
      const s = e.target.checked, { checked: i, isRadio: r } = this;
      if (r && !s)
        return;
      const o = e.target.value;
      let a;
      r ? a = o : a = s ? i.includes(o) ? i : [...i, o] : i.filter((c) => c !== o), a !== i && (this._controlled || this.setState({ checked: a }), e.stopPropagation(), (l = this.props.onChange) == null || l.call(this, a, e));
    }, this.state = {
      checked: t.checked ?? t.defaultChecked ?? (t.type === "radio" ? "" : []),
      items: Array.isArray(t.items) ? t.items : void 0
    }, this._controlled = t.checked !== void 0;
  }
  get isRadio() {
    return this.props.type === "radio";
  }
  get checked() {
    return this._controlled ? this.props.checked ?? (this.isRadio ? "" : []) : this.state.checked;
  }
  async load() {
    const { items: t } = this.props;
    if (!t || Array.isArray(t)) {
      this.state.items !== t && this.setState({ items: Array.isArray(t) ? t : [] });
      return;
    }
    const e = await Je(t);
    t === this.props.items && this.setState({ items: e });
  }
  componentDidUpdate(t) {
    const { items: e } = this.props;
    e && !Array.isArray(e) && $n(e, t.items) && this.load();
  }
  _getClassName(t) {
    const { disabled: e, inline: s, type: i = "checkbox" } = t, { checked: r } = this;
    return [t.className, s ? "check-list-inline" : "check-list", `is-type-${i}`, {
      disabled: e,
      loading: this.state.items === void 0,
      "has-checked": r.length
    }];
  }
  _getProps(t) {
    return H(super._getProps(t), {
      id: this._defaultID
    });
  }
  _getChildren(t) {
    const { name: e, id: s = this._defaultID, disabled: i, type: r = "checkbox" } = t, { items: o } = this.state, a = this.checked, l = new Set(Array.isArray(a) ? a : [a]);
    return o == null ? void 0 : o.map((c) => /* @__PURE__ */ m(
      Qe,
      {
        name: e,
        id: `${s}_${c.value}`,
        className: c.className,
        label: c.label ?? c.text,
        type: r,
        value: c.value,
        checked: l.has(c.value),
        onChange: this._handleChange,
        disabled: i
      },
      c.value
    ));
  }
}
class ao extends W {
}
ao.NAME = "Checkbox";
ao.Component = Qe;
ao.register();
let Ct = class extends Y {
  constructor(t) {
    super(t), this._forceUpdateKeyPrefix = 0, this._handleClick = this._handleClick.bind(this);
  }
  /**
   * Get the root element name, used for class name.
   */
  get name() {
    return this.props.name || this.constructor.NAME;
  }
  /**
   * Get the item element name, used for class name.
   */
  get itemName() {
    return this.props.itemName || this.constructor.ITEM_NAME;
  }
  resetState(t, e) {
    this._forceUpdateKeyPrefix++, super.resetState(t, e);
  }
  getItems() {
    return this._items;
  }
  getRenderedItem(t) {
    return this._renderedItems.find((e) => e.key === t);
  }
  getItem(t) {
    return this._items[this.getItemIndex(t)];
  }
  getItemIndex(t) {
    return this._renderedItems.findIndex((e) => e.key === t);
  }
  getItemByIndex(t) {
    return this._items[t];
  }
  /**
   * Get the item key by index.
   *
   * @param index The rendered item index.
   * @returns The item key, if the item is not rendered, return undefined.
   */
  getKey(t) {
    var e, s;
    return (s = (e = this._renderedItems) == null ? void 0 : e[t]) == null ? void 0 : s.key;
  }
  _getItemFromEvent(t, e) {
    var l;
    const s = (e || t.target).closest("[z-item]");
    if (!s || !((l = s.parentElement) != null && l.hasAttribute(`z-gid-${this._gid}`)))
      return;
    const i = +s.getAttribute("z-item"), r = this._items[i];
    if (!r)
      return;
    const o = this.getKey(i);
    if (o === void 0)
      return;
    const a = this._renderedItems[i];
    return { index: i, item: r, element: s, event: t, key: o, renderedItem: a, relativeTarget: this.props.relativeTarget };
  }
  _handleClick(t) {
    var s, i;
    const e = this._getItemFromEvent(t);
    if (e)
      return (s = this.props.onClickItem) == null || s.call(this, e), (i = e.item.onClick) == null || i.call(this, t, e), e;
  }
  /**
   * Render the item content.
   *
   * @param props  Current list properties.
   * @param item   The item to render.
   * @param index  The item index.
   * @returns The item rendered content.
   */
  _renderItem(t, e, s) {
    const { beforeRenderItem: i } = t;
    if (i) {
      const h = i.call(this, e, s);
      h !== void 0 && (e = h);
    }
    const { type: r } = e, o = `${this._forceUpdateKeyPrefix}:${e.key}`;
    let { itemRender: a } = t;
    if (a && typeof a == "object" && (a = a[r]), a) {
      const h = a.call(this, e, s);
      if (h !== void 0)
        return /* @__PURE__ */ m(P, { "z-key": e.key, "z-item": s, "z-type": r, content: h }, o);
    }
    const { ItemComponents: l } = this.constructor;
    let c = l[r];
    if (!c && e.component)
      return /* @__PURE__ */ m(P, { "z-key": e.key, "z-item": s, "z-type": r, content: { ...e } }, o);
    if (c = c || l.default || Y, Array.isArray(c)) {
      let h = c[1];
      typeof h == "function" && (h = h.call(this, e, t)), e = H({}, h, e), c = c[0];
    }
    return /* @__PURE__ */ m(c, { "z-key": e.key, "z-item": s, "z-type": r, ...e }, o);
  }
  /**
   * Get the rendered item final properties.
   *
   * @param props  Current list properties.
   * @param item   The item to render.
   * @param index  The item index.
   * @returns The item to rendered, if return false, the item will not be rendered.
   */
  _getItem(t, e, s) {
    if (!e)
      return !1;
    const { itemProps: i, itemPropsMap: r = {}, getItem: o, itemKey: a } = t, { type: l = this.constructor.defaultItemType } = e, { name: c, itemName: h } = this, { defaultItemProps: d = {}, defaultItemPropsMap: u = {} } = this.constructor;
    if (e = H(
      { type: l },
      d,
      u[l],
      i,
      r[l],
      { className: [c ? `${c}-${l}` : "", h] },
      e,
      {
        _item: e,
        _index: s,
        key: String((a ? e[a] : e.key) ?? e.key ?? s),
        onClick: void 0
      }
    ), o) {
      const f = o.call(this, e, s);
      if (f !== void 0)
        return f;
    }
    return e;
  }
  _getProps(t) {
    const e = super._getProps(t);
    return { onClick: this._handleClick, ...e };
  }
  /**
   * Get the list root element classname list.
   *
   * @param props  Current list properties.
   * @returns The list root element classname list.
   */
  _getClassName(t) {
    return [this.name, t.className];
  }
  /**
   * Get final rendered item list.
   *
   * @param props  Current list properties.
   * @returns Item list.
   */
  _getItems(t) {
    let { items: e = [] } = t;
    typeof e == "function" ? e = e.call(this) : Array.isArray(e) || (e = []);
    const { getItems: s } = t;
    if (s) {
      const i = s.call(this, e);
      if (i !== void 0)
        return i;
    }
    return e;
  }
  /**
   * Render items.
   *
   * @param props  props  Current list properties.
   * @param items  Render items.
   * @returns React render children.
   */
  _renderItems(t, e) {
    return this._renderedItems = e.map((s, i) => {
      const r = this._getItem(t, s, i);
      return r || void 0;
    }), this._renderedItems.reduce((s, i, r) => (i && s.push(this._renderItem(t, i, r)), s), []);
  }
  /**
   * Get root element rendered children.
   *
   * @param props Current list properties.
   * @returns React render children.
   */
  _getChildren(t) {
    const e = this._getItems(t);
    this._items = e;
    const s = this._renderItems(t, e);
    return t.children && s.push(t.children), s;
  }
  /**
   * Get root element rendered component type.
   *
   * @param props Current list properties.
   * @returns React component type.
   */
  _getComponent(t) {
    return t.component || this.constructor.TAG;
  }
};
Ct.NAME = "CommonList";
Ct.ITEM_NAME = "item";
Ct.TAG = "ul";
Ct.ItemComponents = {
  default: Y,
  text: [Y, (n) => {
    const { text: t } = n;
    return {
      children: /* @__PURE__ */ m("span", { className: "text", children: t })
    };
  }],
  divider: [Y, { className: "divider" }],
  space: [Y, (n) => {
    const { space: t, flex: e, style: s } = n;
    return {
      style: { width: t, height: t, flex: e, ...s }
    };
  }]
};
Ct.defaultItemProps = {
  component: "li"
};
Ct.defaultItemPropsMap = {};
Ct.defaultItemType = "item";
Ct.defaultProps = {
  itemKey: "id"
};
const Bf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonList: Ct
}, Symbol.toStringTag, { value: "Module" }));
let jt = class extends Ct {
  _isBtnType({ type: t }) {
    return t === "item" || t === "dropdown";
  }
  _getItem(t, e, s) {
    if (!e)
      return !1;
    e.type || (e = p.extend({ type: e.dropdown || e.items ? "dropdown" : "item" }, e));
    let i = super._getItem(t, e, s);
    return i && (this._isBtnType(i) && (i = H({}, this._shareBtnProps, i)), i);
  }
  _beforeRender(t) {
    const { btnProps: e, btnType: s, size: i } = t;
    this._shareBtnProps = H({}, e, lc({ btnType: s, size: i }));
  }
};
jt.NAME = "btn-group";
jt.TAG = "nav";
jt.ItemComponents = {
  ...Ct.ItemComponents,
  default: et
};
jt.defaultItemProps = {
  component: void 0
};
const ri = class Vc extends jt {
  _getProps(t) {
    const { gap: e } = t, s = super._getProps(t);
    return e && (typeof e == "number" ? s.className = S(s.className, `gap-${e}`) : s.style = p.extend(s.style || {}, { gap: e })), s;
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s);
    if (!i)
      return i;
    const { type: r } = i, o = r === "btn-group" || r === "btnGroup";
    return o && (i.btnProps = H({}, this._shareBtnProps, i.btnProps)), (o || r === "dropdown") && !i.relativeTarget && (i.relativeTarget = t.relativeTarget), i;
  }
  static render(t, e, s, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), s && (r = H(s, r)), /* @__PURE__ */ m(Vc, { ...r });
  }
};
ri.NAME = "toolbar";
ri.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
ri.ItemComponents = {
  ...jt.ItemComponents,
  btnGroup: jt,
  angle: [Y, { className: "angle chevron-right opacity-50 text-xs" }],
  "btn-group": jt
};
let ht = ri;
const jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Toolbar: ht
}, Symbol.toStringTag, { value: "Module" }));
let Ln = class extends Y {
  constructor(t) {
    super(t), this._handleClickHeader = (e) => {
      const s = e.target;
      (s.closest(".collapsible-toggle-btn") || this.props.toggleOnClickHeader && !s.closest("a,button")) && this.toggle();
    }, this.state = {
      collapsed: t.collapsed ?? t.defaultCollapsed ?? !1
    };
  }
  get collapsed() {
    return this.props.collapsed ?? this.state.collapsed;
  }
  toggle(t) {
    const { collapsed: e, onChange: s } = this.props;
    if (e === void 0) {
      let i;
      this.setState((r) => (t = t ?? !r.collapsed, t !== r.collapsed ? (i = t, { collapsed: t }) : null), () => {
        s && typeof i == "boolean" && s.call(this, i);
      });
    } else
      t = t ?? !e, e !== t && (s == null || s.call(this, t));
  }
  _getClassName(t) {
    const { disabled: e, header: s, bordered: i, title: r, actions: o } = t, { collapsed: a } = this;
    return [t.className, "collapsible", {
      disabled: e,
      bordered: i,
      "no-header": s === void 0 && r === void 0 && o === void 0,
      "is-collapsed": a
    }];
  }
  _renderHeader(t) {
    const { header: e, headerClass: s, collapsedIcon: i, expandedIcon: r, toggleButton: o, title: a, actions: l, caption: c } = t, { collapsed: h } = this, d = h ? i : r;
    return /* @__PURE__ */ m(
      "div",
      {
        className: S("collapsible-header", s),
        onClick: this._handleClickHeader,
        children: [
          /* @__PURE__ */ m(et, { className: "collapsible-toggle-btn", size: "sm", type: "ghost", icon: d, square: !0, ...o, children: d ? null : /* @__PURE__ */ m("span", { class: `text-xs ${h ? "chevron-right" : "chevron-down"}` }) }),
          a ? /* @__PURE__ */ m(P, { className: "collapsible-header-title", content: a }) : null,
          c ? /* @__PURE__ */ m(P, { className: "collapsible-header-caption", content: c }) : null,
          e ? /* @__PURE__ */ m(P, { content: e }) : null,
          l ? /* @__PURE__ */ m("div", { className: "flex-1" }) : null,
          l ? ht.render(l, [], { key: "actions", className: "collapsible-header-actions", relativeTarget: t, size: "sm" }, this) : null
        ]
      },
      "header"
    );
  }
  _renderBody(t) {
    const { content: e, contentClass: s, contentStyle: i, children: r, onlyHideOnCollapsed: o } = t;
    return !o && this.collapsed ? null : /* @__PURE__ */ m("div", { className: S("collapsible-body", s), style: i, children: [
      /* @__PURE__ */ m(P, { content: e }),
      r
    ] }, "content");
  }
  _getChildren(t) {
    return [
      this._renderHeader(t),
      this._renderBody(t)
    ];
  }
};
Ln.defaultProps = {
  toggleOnClickHeader: !0,
  onlyHideOnCollapsed: !0
};
class lo extends W {
}
lo.NAME = "Collapsible";
lo.Component = Ln;
lo.replace = !0;
class oi extends W {
}
oi.NAME = "CommonList";
oi.Component = Ct;
oi.replace = Ct.TAG;
oi.register();
ot(Bf);
function Uf(n) {
  if (n.indexOf("#") === 0 && (n = n.slice(1)), n.length === 3 && (n = n[0] + n[0] + n[1] + n[1] + n[2] + n[2]), n.length !== 6)
    throw new Error(`Invalid HEX color "${n}".`);
  return [
    parseInt(n.slice(0, 2), 16),
    // r
    parseInt(n.slice(2, 4), 16),
    // g
    parseInt(n.slice(4, 6), 16)
    // b
  ];
}
function Vf(n) {
  const [t, e, s] = typeof n == "string" ? Uf(n) : n;
  return t * 0.299 + e * 0.587 + s * 0.114 > 186;
}
function Ua(n, t) {
  return Vf(n) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function Va(n, t = 255) {
  return Math.min(Math.max(n, 0), t);
}
function Kf(n, t, e) {
  n = n % 360 / 360, t = Va(t), e = Va(e);
  const s = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(n + 1 / 3) * 255,
    r(n) * 255,
    r(n - 1 / 3) * 255
  ];
}
function Gf(n, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(n) ? n.length <= t ? n : n.substring(n.length - t) : /^[A-Za-z\d\s]+$/.test(n) ? n[0].toUpperCase() : n.length <= t ? n : n.substring(0, t);
}
let Ys = class extends O {
  render() {
    const {
      className: t,
      style: e,
      size: s = "",
      circle: i,
      rounded: r,
      background: o,
      foreColor: a,
      icon: l,
      text: c,
      code: h,
      displayText: d,
      maxTextLength: u = 2,
      src: f,
      hueDistance: g = 43,
      saturation: _ = 0.4,
      lightness: y = 0.6,
      children: v,
      ...b
    } = this.props, w = ["avatar", t], C = { ...e, background: o, color: a };
    let k = 32;
    s && (typeof s == "number" ? (C.width = `${s}px`, C.height = `${s}px`, C.fontSize = `${Math.max(12, Math.round(s / 2))}px`, k = s) : (w.push(`size-${s}`), k = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? w.push("circle") : r && (typeof r == "number" ? C.borderRadius = `${r}px` : w.push(`rounded-${r}`));
    let $;
    if (f)
      w.push("has-img"), $ = /* @__PURE__ */ m("img", { className: "avatar-img", src: f, alt: c });
    else if (l)
      w.push("has-icon"), $ = /* @__PURE__ */ m(rt, { icon: l });
    else if (c != null && c.length || d != null && d.length) {
      const N = d ?? Gf(c || "", u), A = N.length;
      w.push("has-text", `has-text-${A}`);
      let I;
      k && k < 16 * A && (I = { transform: `scale(${k / (16 * A)})`, whiteSpace: "nowrap" }), $ = /* @__PURE__ */ m("div", { "data-actualSize": k, className: "avatar-text", style: I, children: N });
    }
    if (!f)
      if (o === void 0) {
        const N = (h ?? c ?? d) || "", A = (typeof N == "number" ? N : gc(N)) * g % 360;
        if (C.background = `hsl(${A},${_ * 100}%,${y * 100}%)`, !a) {
          const I = Kf(A, _, y);
          C.color = Ua(I);
        }
      } else
        !a && o && /#?[0-9a-fA-F]{6}/.test(o) && (C.color = Ua(o));
    return /* @__PURE__ */ m(
      "div",
      {
        className: S(w),
        style: C,
        ...b,
        children: [
          $,
          v
        ]
      }
    );
  }
};
const qf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: Ys
}, Symbol.toStringTag, { value: "Module" }));
class Me extends Y {
  _renderLeading(t) {
    const {
      icon: e,
      iconClass: s,
      avatar: i,
      toggleIcon: r,
      leading: o,
      leadingClass: a,
      checked: l,
      checkbox: c,
      multiline: h
    } = t, d = [];
    if (r && d.push(/* @__PURE__ */ m(P, { content: r }, "toggleIcon")), l !== void 0 && d.push(/* @__PURE__ */ m(Qe, { className: "item-checkbox", checked: l, ...c }, "checkbox")), e && d.push(/* @__PURE__ */ m(rt, { className: S("item-icon", s), icon: e }, "icon")), i) {
      const f = typeof i == "function" ? i.call(this, t) : i;
      f && (f.className = S("item-avatar", f.className), d.push(/* @__PURE__ */ m(Ys, { ...f }, "avatar")));
    }
    const u = o ? /* @__PURE__ */ m(P, { content: o }, "leading") : null;
    return u && d.push(u), h ? d.length ? [
      /* @__PURE__ */ m("div", { className: S("item-leading", a), children: d }, "leading")
    ] : [] : d;
  }
  _renderContent(t, e) {
    const {
      textClass: s,
      titleClass: i,
      titleAttrs: r,
      subtitle: o,
      subtitleClass: a,
      url: l,
      target: c,
      content: h,
      contentClass: d,
      contentAttrs: u
    } = t, f = l && !e, g = f ? "a" : "div";
    let { title: _, text: y } = t;
    return _ === void 0 && (_ = y, y = null), [
      /* @__PURE__ */ m("div", { className: S("item-content", d), ...u, children: [
        _ ? /* @__PURE__ */ m(g, { className: S("item-title", i), href: f ? l : void 0, target: f ? c : void 0, ...r, children: /* @__PURE__ */ m(P, { content: _ }) }, "title") : null,
        o ? /* @__PURE__ */ m("div", { className: S("item-subtitle", a), children: /* @__PURE__ */ m(P, { content: o }) }, "subtitle") : null,
        y ? /* @__PURE__ */ m("div", { className: S("item-text text", s), children: y }, "text") : null,
        h ? /* @__PURE__ */ m(P, { content: h }, "extraContent") : null
      ] }, "content")
    ];
  }
  _renderTrailing(t) {
    const {
      multiline: e,
      trailing: s,
      trailingClass: i,
      trailingIcon: r,
      trailingIconClass: o,
      actions: a
    } = t, l = [];
    r && l.push(/* @__PURE__ */ m(rt, { className: S("item-trailing-icon", o), icon: r }, "trailing-icon")), a && l.push(ht.render(a, [t], { key: "actions", className: "item-actions", relativeTarget: t, size: "sm" }, this));
    const c = s ? /* @__PURE__ */ m(P, { content: s }, "trailing") : null;
    return c && l.push(c), e ? l.length ? [
      /* @__PURE__ */ m("div", { className: S("item-trailing", i), children: [
        l,
        c
      ] }, "trailing")
    ] : [] : l;
  }
  _render(t, e) {
    const {
      innerComponent: s,
      innerClass: i,
      innerAttrs: r,
      url: o,
      actions: a,
      target: l,
      active: c,
      disabled: h,
      divider: d,
      checked: u,
      multiline: f,
      title: g,
      subtitle: _,
      hint: y,
      selected: v,
      command: b,
      hover: w
    } = t, C = s || (o && !a ? "a" : "div"), k = C === "a", $ = H({
      key: "item",
      title: y,
      className: S("listitem", i, {
        active: c,
        disabled: h,
        "has-divider": d,
        "no-hover": w === !1,
        selected: v,
        checked: u,
        multiline: f ?? !!(g && _),
        state: k && !h
      })
    }, b ? { "zui-command": b } : null, k ? { href: o || "javascript:;", target: l } : null, e, r);
    return /* @__PURE__ */ m(C, { ...$, children: [
      this._renderLeading(t),
      this._renderContent(t, k),
      this._renderTrailing(t)
    ] });
  }
  _onRender(t, e, s, i) {
    const r = Object.keys(e).reduce((o, a) => (a.startsWith("data-") && (o[a] = e[a], delete e[a]), o), {});
    return [t, e, [this._render(i, r), ...Nn(s)]];
  }
}
let yt = class extends Ct {
  constructor(t) {
    super(t), this._activeSet = new cs(() => {
      const e = /* @__PURE__ */ new Set(), { active: s } = this.props;
      Array.isArray(s) ? s.forEach((r) => e.add(r)) : typeof s == "string" ? e.add(s) : s && Object.keys(s).forEach((r) => s[r] && e.add(r));
      const { activeMap: i } = this.state;
      return Object.keys(i).forEach((r) => i[r] ? e.add(r) : e.delete(r)), e;
    }, () => [this.state.activeMap, this.props.active]), this.state = {
      checked: {},
      activeMap: {}
    };
  }
  get namespace() {
    return `.zui.${this.constructor.NAME}.list_${this.gid}`;
  }
  get isLazyItems() {
    const { items: t } = this.props;
    return t && !Array.isArray(t);
  }
  componentDidMount() {
    this._afterRender(!0), this.tryLoad(), this.props.activeOnHover && !this.props.multipleActive && p(this.element).on(`mouseenter${this.namespace}`, "[z-item]", (t) => {
      const e = this._getItemFromEvent(t);
      e && e.renderedItem.type === "item" && !e.renderedItem.disabled && e.renderedItem.hover !== !1 && !this.isActive(e.key) && this.toggleActive(e.key, !0);
    });
  }
  componentDidUpdate() {
    this._afterRender(!1), this.tryLoad();
  }
  componentWillUnmount() {
    var t;
    p(this.element).off(this.namespace), (t = this.props.beforeDestroy) == null || t.call(this);
  }
  setItems(t, e) {
    const { onLoadFail: s } = this.props;
    return this.changeState({
      loading: !1,
      items: t || [],
      loadFailed: e ? (typeof s == "function" ? s.call(this, e) : s) || String(e) : void 0
    });
  }
  load() {
    const { items: t, onLoad: e } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0, items: [] }, async () => {
      try {
        const s = await Je(t, [this], { throws: !0 });
        this.setItems((e == null ? void 0 : e.call(this, s)) || s);
      } catch (s) {
        this.setItems(void 0, s);
      }
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { items: e } = this.props;
    return t || !e || Array.isArray(e) || e === this._loadedSetting ? !1 : (this.load(), !0);
  }
  isChecked(t, e, s = !1) {
    const i = (typeof e == "number" ? this._items[e] : this.getItem(t)) || {};
    return this.state.checked[t] ?? i.checked ?? s;
  }
  isAllChecked() {
    return this._renderedItems.every(({ key: t }, e) => this.isChecked(t, e) === !0);
  }
  toggleAllChecked(t) {
    return t === void 0 && (t = !this.isAllChecked()), this.toggleChecked(this._renderedItems.map((e) => e.key), t);
  }
  async toggleChecked(t, e) {
    let s;
    if (Array.isArray(t)) {
      if (!t.length)
        return;
      e === void 0 && (e = !this.isChecked(t[0])), s = t.reduce((i, r) => (i[r] = e, i), {});
    } else if (typeof t == "object")
      s = t;
    else {
      const i = this.isChecked(t);
      e === void 0 && (e = !i), s = { [t]: e };
    }
    Object.keys(s).length && await this.changeState((i) => ({
      checked: {
        ...i.checked,
        ...s
      }
    }), () => {
      var r;
      const i = this.state.checked;
      (r = this.props.onCheck) == null || r.call(this, s, Object.keys(i).filter((o) => i[o] === !0));
    });
  }
  getChecks() {
    return this._renderedItems.reduce((t, { key: e }, s) => (e !== void 0 && this.isChecked(e, s) === !0 && t.push(e), t), []);
  }
  isActive(t) {
    return typeof t == "object" && (t = t.key), this._activeSet.cache.has(t);
  }
  getActiveKeys() {
    return [...this._activeSet.value];
  }
  getActiveKey() {
    return this.getActiveKeys()[0];
  }
  async toggleActive(t, e) {
    typeof t == "string" && (t = [t]), t.length && (e = e ?? !this.isActive(t[0]), await this.changeState((s) => ({ activeMap: this.props.multipleActive ? t.reduce((r, o) => (r[o] = e, r), { ...s.activeMap }) : { [t[0]]: e } }), () => {
      var s;
      (s = this.props.onActive) == null || s.call(this, t, e);
    }));
  }
  getNextItem(t, e, s = 1, i = void 0) {
    i = i || this._renderedItems, e = e || ((l) => l.type === "item" && !l.disabled);
    const r = i.length;
    let o = t === void 0 ? r - 1 : i.findIndex((l) => l.key === t), a = 0;
    for (; a < r; ) {
      o = (o + s + r) % r;
      const l = i[o];
      if (l && !l.hidden && e.call(this, l, o))
        return l;
      a++;
    }
  }
  getPrevItem(t, e) {
    return this.getNextItem(t, e, -1);
  }
  activeNext(t, e = 1) {
    const s = this.getNextItem(this.getActiveKey(), t, e);
    s && this.toggleActive(s.key);
  }
  activePrev(t) {
    this.activeNext(t, -1);
  }
  activeFirst(t) {
    const e = this.getNextItem(void 0, t);
    e && this.toggleActive(e.key);
  }
  _afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  _beforeRender(t) {
    var e;
    return (e = this.props.beforeRender) == null ? void 0 : e.call(this, t);
  }
  _getItems(t) {
    const { items: e } = t, { items: s } = this.state;
    return s || (Array.isArray(e) ? e : []);
  }
  _getRenderedItem(t, e, s) {
    const { divider: i, multiline: r } = t;
    e = H({}, lc({
      divider: i,
      multiline: r
    }), e);
    const { itemName: o, name: a } = this;
    if (e.innerClass = [o ? `${o}-inner${a ? ` ${a}-${e.type}-inner` : ""}` : "", e.innerClass], e.type === "item") {
      const { checkbox: l } = t;
      e.checkbox === !1 ? e.checked = void 0 : (l || e.checkbox) && (e.checked = this.isChecked(e.key, s, e.checked), typeof l == "object" && e.checkbox !== !1 && (e.checkbox = e.checkbox ? p.extend({}, l, e.checkbox) : l), t.selectOnChecked && e.checked === !0 && (e.selected = !0)), e.active === void 0 && this.isActive(e) && (e.active = !0);
    }
    return e.icon && (this._hasIcons = !0), e.checked !== void 0 && (this._hasCheckbox = !0), e;
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s);
    return i && this._getRenderedItem(t, i, s);
  }
  _renderItem(t, e, s) {
    return e.type === "item" && this._hasIcons && e.icon === void 0 && (e.icon = "EMPTY"), super._renderItem(t, e, s);
  }
  _handleClick(t) {
    const e = super._handleClick(t);
    let { checkOnClick: s } = this.props;
    if (s === "any" ? s = ".item-checkbox,.item-content,.item-icon" : s === !0 && (s = ".item-checkbox"), !s || !e || !e.renderedItem)
      return e;
    const i = e.renderedItem, r = i.checkbox;
    if (r !== !1 && (this.props.checkbox || r || i.checked !== void 0) && !i.disabled && e && t.target.closest(s)) {
      this.toggleChecked(e.key), t.stopPropagation();
      return;
    }
    return e;
  }
  _getClassName(t) {
    const { loading: e, loadFailed: s } = this.state;
    return [super._getClassName(t), e ? "loading" : s ? "is-load-failed" : "", t.hoverItemActions ? "with-hover-actions" : ""];
  }
  _getProps(t) {
    const { className: e, ...s } = super._getProps(t);
    return {
      ...s,
      className: S(e, this._hasIcons ? "has-icons" : "", this._hasCheckbox ? "has-checkbox" : "")
    };
  }
  _getChildren(t) {
    this._hasIcons = !1, this._hasCheckbox = !1, this._activeSet.compute();
    const e = super._getChildren(t), { loadFailed: s } = this.state;
    return s && e.push(s), e;
  }
};
yt.ItemComponents = {
  ...Ct.ItemComponents,
  default: Y,
  item: Me,
  heading: Me
};
yt.NAME = "list";
const Oi = "```ZUI_STR\n";
class Zs {
  /**
   * Create new store instance.
   * @param id   Store profile ID.
   * @param type Store type.
   */
  constructor(t = "", e = "local") {
    this._cache = /* @__PURE__ */ new Map(), this._type = e, this._id = t, this._name = `ZUI_STORE:${this._id}`, this._storage = e === "local" ? localStorage : sessionStorage;
  }
  /**
   * Get store type.
   */
  get type() {
    return this._type;
  }
  /**
   * Get session type store instance.
   */
  get session() {
    return this.type === "session" ? this : (this._altStorage || (this._altStorage = new Zs(this._id, "session")), this._altStorage);
  }
  _getKey(t) {
    return `${this._name}:${t}`;
  }
  /**
   * Switch store profile.
   *
   * @param id Store profile ID.
   */
  switch(t) {
    this._id = t, this._name = `ZUI_STORE:${this._id}`, this._cache.clear();
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(t, e) {
    if (this._cache.has(t))
      return this._cache.get(t);
    const s = this._storage.getItem(this._getKey(t));
    return typeof s == "string" ? this.parseValue(s) : s ?? e;
  }
  /**
   * Set cache value.
   * @param key Key to set.
   * @param value Value to set.
   */
  setCache(t, e) {
    this._cache.set(t, e);
  }
  /**
   * Set key-value pair in store.
   *
   * @param key Key to set.
   * @param value Value to set.
   */
  set(t, e) {
    if (e == null)
      return this.remove(t);
    try {
      this._storage.setItem(this._getKey(t), typeof e == "string" ? `${Oi}${e}` : JSON.stringify(e));
    } catch (s) {
      this.setCache(t, e), console.warn(`[ZUI] Failed to set value to ${this._type} store: ${this._getKey(t)}, use cache instead.`, s);
    }
  }
  /**
   * Remove key-value pair from store.
   *
   * @param key Key to remove.
   */
  remove(t) {
    this._cache.delete(t), this._storage.removeItem(this._getKey(t));
  }
  /**
   * Parse value from string.
   * @param value Value to parse.
   * @param throws Whether to throw an error if the value is not a string.
   * @returns Parsed value.
   */
  parseValue(t, e = !1) {
    if (typeof t == "string") {
      if (t.startsWith(Oi))
        return t.substring(Oi.length);
      try {
        return JSON.parse(t);
      } catch (s) {
        if (e)
          throw s;
      }
    }
    return t;
  }
  /**
   * Iterate all key-value pairs in store.
   *
   * @param callback Callback function to call for each key-value pair in the store.
   */
  each(t) {
    const e = [];
    for (let s = 0; s < this._storage.length; s++) {
      const i = this._storage.key(s);
      if (i != null && i.startsWith(this._name)) {
        const r = this._storage.getItem(i), o = i.substring(this._name.length + 1);
        typeof r == "string" && t(o, this.parseValue(r)), e.push(o);
      }
    }
    for (const s of this._cache.keys())
      e.includes(s) || t(s, this._cache.get(s));
  }
  /**
   * Get all key values in store.
   *
   * @returns All key-value pairs in the store.
   */
  getAll() {
    const t = {};
    this.each((e, s) => {
      t[e] = s;
    });
    for (const e of this._cache.keys())
      t[e] = this._cache.get(e);
    return t;
  }
}
const ce = new Zs("DEFAULT");
function Yf(n, t = "local") {
  return new Zs(n, t);
}
Object.assign(ce, { create: Yf });
function Kc(n, t) {
  const { children: e } = n;
  e.length && e.forEach((s) => {
    t(s), Kc(s, t);
  });
}
function Zf(n, t) {
  let e = n.parent;
  for (; e; )
    t(e), e = e.parent;
}
function Ka(n) {
  return n.split(":").reduce((t, e, s) => (t.push(s ? t[s - 1] + ":" + e : e), t), []);
}
function mr(n, t, e, s, i = 0, r) {
  return n.reduce((o, a, l) => {
    if (!a)
      return o;
    const c = String((t ? a[t] : a.key) ?? a.key ?? l), h = r ? `${r.keyPath}:${c}` : c, d = {
      key: c,
      level: i,
      keyPath: h,
      parentKey: r == null ? void 0 : r.keyPath,
      parent: r,
      data: a,
      children: []
    };
    return r && r.children.push(d), o = e(o, d), Array.isArray(a.items) ? mr(a.items, t, e, o, i + 1, d) : o;
  }, s);
}
let ye = class extends yt {
  constructor(t) {
    super(t);
    const { defaultNestedShow: e, preserve: s, nestedShow: i } = t;
    if (p.extend(
      this.state,
      typeof e == "boolean" ? { defaultShow: e, nestedShow: {} } : { nestedShow: e || {} },
      i !== void 0 ? { nestedShow: i } : null
    ), s && i === void 0) {
      this._storeID = `${this.constructor.NAME}:${s}:state`;
      const r = ce.get(this._storeID);
      r && (this.state.nestedShow = r.nestedShow);
    }
    if (!t.level) {
      const r = this.state.nestedShow;
      r && Object.keys(r).forEach((o) => {
        r[o] && Ka(o).forEach((a) => {
          r[a] = !0;
        });
      }), this._needInitChecks = !0;
    }
    this._renderedItemMap = /* @__PURE__ */ new Map(), this._handleClick = this._handleClick.bind(this), this._beforeRenderNestedItem = this._beforeRenderNestedItem.bind(this), this._handleNestedToggle = this._handleNestedToggle.bind(this), this._handleNestedCheck = this._handleNestedCheck.bind(this), this._preserveState = this._preserveState.bind(this);
  }
  get isRoot() {
    return !this.props.level;
  }
  get nestedShow() {
    return this.props.nestedShow ?? this.state.nestedShow ?? !1;
  }
  async setItems(t, e) {
    var i;
    this.isRoot && (this._needInitChecks = !0);
    const s = await super.setItems(t, e);
    return t && ((i = this.props.parent) == null ? void 0 : i.checked) === !0 ? this.toggleChecked(this._renderedItems.map((r) => r.key), !0) : t != null && t.some((r) => r.checked) && (this._needInitChecks = !0, this.forceUpdate()), s;
  }
  getItemMap(t) {
    if (t && (this._itemMap || this._itemMapCache))
      return this._itemMap || this._itemMapCache;
    if (!this._itemMap) {
      let e = !1;
      const s = mr(this._items, this.props.itemKey, (i, r) => (i.set(r.keyPath, r), r.data.items && !Array.isArray(r.data.items) && (e = !0), i), /* @__PURE__ */ new Map());
      if (e)
        return this._renderedItemMap.forEach((i, r) => {
          s.has(r) || s.set(r, {
            key: i.key,
            level: i._level,
            keyPath: r,
            parentKey: `${r.split(":").slice(0, -1).join(":")}`,
            children: [],
            data: i
          });
        }), s.forEach((i) => {
          const { parentKey: r } = i;
          if (!r)
            return;
          const o = s.get(r);
          o && (o.children.push(i), i.parent = o);
        }), this._itemMapCache = s, s;
      this._itemMap = s;
    }
    return this._itemMap;
  }
  getRenderedItem(t) {
    return this._renderedItemMap.get(t);
  }
  getItem(t) {
    var i;
    const e = this._itemMap || this._itemMapCache;
    if (e)
      return (i = e.get(t)) == null ? void 0 : i.data;
    const s = this.getRenderedItem(t);
    return s ? s._item : super.getItem(t);
  }
  isExpanded(t) {
    const { nestedShow: e } = this;
    return typeof e == "boolean" ? e : !!(e[t] ?? this.state.defaultShow);
  }
  isAllExpanded() {
    const { nestedShow: t } = this;
    if (typeof t == "boolean")
      return t;
    const { defaultShow: e } = this.state;
    if (!Object.keys(t).length)
      return !!e;
    const s = this.getItemMap(!0);
    return Array.from(s.entries()).every(([i]) => t[i] ?? e);
  }
  async toggle(t, e, s) {
    const i = this.isExpanded(t);
    if (!s && e === i)
      return;
    e === void 0 && (e = !i);
    const { nestedShow: r, onToggle: o, accordion: a } = this.props;
    o && o.call(this, t, e, s) === !1 || r === void 0 && await this.changeState((l) => {
      let c = {
        ...s ? {} : l.nestedShow,
        [t]: e
      };
      if (e && a) {
        let h = `${t.split(":").slice(0, -1).join(":")}`;
        h.length && (h += ":"), Object.keys(c).forEach((d) => {
          d !== t && d.startsWith(h) && (c[d] = !1);
        });
      }
      return c = e ? Ka(t).reduce((h, d) => (h[d] = e, h), c) : c, {
        nestedShow: c
      };
    }, this._preserveState);
  }
  toggleAll(t) {
    if (this.props.nestedShow === void 0)
      return this.setState({ nestedShow: {}, defaultShow: t }, this._preserveState);
  }
  getChecks() {
    return Array.from(this.getItemMap(!0).values()).reduce((t, { keyPath: e, data: s }) => {
      const i = this.state.checked[e];
      return (i === !0 || s.checked && i !== !1) === !0 && t.push(e), t;
    }, []);
  }
  isChecked(t, e, s = !1) {
    const i = (typeof e == "number" ? this._items[e] : this.getItem(t)) || {};
    return this.isRoot ? this.state.checked[t] ?? i.checked ?? s : this.props.checkedState[`${this.props.parentKey}:${t}`] ?? i.checked ?? s;
  }
  async toggleChecked(t, e) {
    let s;
    if (Array.isArray(t)) {
      if (!t.length)
        return;
      e === void 0 && (e = !this.isChecked(t[0])), s = t.reduce((a, l) => (a[l] = e, a), {});
    } else
      typeof t == "object" ? s = t : (e === void 0 && (e = !this.isChecked(t)), s = { [t]: e });
    if (!Object.keys(s).length)
      return;
    if (this.isRoot) {
      await this.changeState(({ checked: a, nestedShow: l }) => {
        const c = (f) => s[f.keyPath] ?? a[f.keyPath] ?? f.data.checked ?? !1, h = this.getItemMap(), d = {}, { expandChildrenOnCheck: u } = this.props;
        return Object.keys(s).forEach((f) => {
          e = s[f];
          const g = h.get(f);
          g && (Kc(g, (_) => {
            c(_) !== e && (s[_.keyPath] = e);
          }), Zf(g, (_) => {
            const { children: y } = _, v = y.reduce((b, w) => (c(w) && b++, b), 0);
            s[_.keyPath] = v === y.length ? !0 : v ? "indeterminate" : !1;
          }), u && e && g.data.items && (d[f] = !0));
        }), {
          checked: {
            ...a,
            ...s
          },
          nestedShow: {
            ...l,
            ...d
          }
        };
      }, () => {
        var l;
        const a = this.state.checked;
        (l = this.props.onCheck) == null || l.call(this, s, Object.keys(a).filter((c) => a[c] === !0));
      });
      return;
    }
    const { parentKey: i, onCheck: r } = this.props, o = Object.keys(s).reduce((a, l) => (a[`${i !== void 0 ? `${i}:` : ""}${l}`] = s[l], a), {});
    r.call(this, o, []);
  }
  getKeyPath(t) {
    if (this.isRoot)
      return t;
    const e = this.props.parentKey;
    return t.startsWith(e + ":") ? t : `${e}:${t}`;
  }
  isActive(t) {
    if (typeof t == "object") {
      const e = t._keyPath ?? t.key;
      if (e === void 0)
        return !1;
      t = e;
    }
    return this._activeSet.cache.has(this.getKeyPath(t));
  }
  async toggleActive(t, e) {
    if (typeof t == "string" && (t = [t]), t = t.map((s) => this.getKeyPath(s)), this.isRoot) {
      await super.toggleActive(t, e), this.props.toggleOnActive && t.forEach((s) => {
        this.isActive(s) && !this.isExpanded(s) && this.toggle(s, !0);
      });
      return;
    }
    this.props.onActive.call(this, t, e ?? !this.isActive(t[0]));
  }
  activeNext(t, e = 1) {
    const s = this.getNextItem(this.getActiveKey(), t, e);
    s && this.toggleActive(s._keyPath);
  }
  getNextItem(t, e, s = 1, i = void 0) {
    return i = i || mr(this._items, this.props.itemKey, (r, o) => (o.data.disabled || r.push({
      _keyPath: o.keyPath,
      type: "item",
      ...o.data,
      ...this._renderedItemMap.get(o.keyPath),
      key: o.keyPath
    }), r), []), super.getNextItem(t, e, s, i);
  }
  _afterRender(t) {
    if (super._afterRender(t), this._needInitChecks) {
      const e = {};
      this.getItemMap().forEach((i) => {
        i.data.checked !== void 0 && (e[i.keyPath] = i.data.checked);
      }), this.toggleChecked(e), this._needInitChecks = !1;
    }
  }
  _preserveState() {
    this._storeID && ce.set(this._storeID, { nestedShow: this.state.nestedShow, defaultShow: this.state.defaultShow });
  }
  _getClassName(t) {
    return [super._getClassName(t), "is-nested", t.level ? "is-nested-sub" : "is-nested-root"];
  }
  _getNestedProps(t, e, s, i) {
    const {
      parentKey: r,
      level: o = 0
    } = t, { isRoot: a } = this;
    return H(this.constructor.inheritNestedProps.reduce((l, c) => (l[c] = t[c], l), {}), {
      key: s.key,
      level: o + 1,
      className: `is-nested-${i ? "expanded" : "collapsed"}`,
      items: e,
      parent: s,
      parentKey: r ? `${r}:${s.key}` : s.key,
      nestedShow: this.nestedShow,
      defaultNestedShow: this.state.defaultShow,
      checkedState: t.checkedState || this.state.checked,
      onCheck: a ? this._handleNestedCheck : t.onCheck,
      onToggle: a ? this._handleNestedToggle : t.onToggle,
      beforeRenderItem: a ? this._beforeRenderNestedItem : t.beforeRenderItem,
      active: a ? this.getActiveKeys() : t.active,
      onActive: a ? this.toggleActive.bind(this) : t.onActive
    }, s.listProps);
  }
  _renderNestedList(t, e, s, i) {
    if (!i && !t.renderCollapsedList)
      return;
    const r = this._getNestedProps(t, e, s, i), o = this.constructor;
    return /* @__PURE__ */ m(o, { ...r }, `nested:${s.key}`);
  }
  _renderNestedToggle(t, e) {
    let s, i = "";
    const { toggleIcons: r = {} } = t;
    return typeof e == "boolean" ? (s = e ? r.expanded || /* @__PURE__ */ m("span", { className: "caret-down" }) : r.collapsed || /* @__PURE__ */ m("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`, bt(s) || (s = /* @__PURE__ */ m(rt, { icon: s }))) : (s = /* @__PURE__ */ m(rt, { icon: r.normal }), i = "is-empty"), /* @__PURE__ */ m("span", { className: S(`${this.name}-toggle nested-toggle-icon`, i), children: s });
  }
  _getItems(t) {
    const e = super._getItems(t);
    return this.isRoot && e !== this._items && (this._itemMap = void 0), e;
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s) ?? e;
    if (!i)
      return i;
    const { parentKey: r } = t, o = i.key, a = `${r !== void 0 ? `${r}:` : ""}${o}`;
    if (i.items) {
      const l = i.expanded ?? this.isExpanded(a);
      H(i, {
        expanded: l,
        className: ["is-nested", `is-nested-${l ? "show" : "hide"}`]
      }), this._hasNestedItems = !0;
    }
    return H(i, {
      _level: t.level,
      _keyPath: a,
      parentKey: r
    });
  }
  _beforeRenderNestedItem(t, e) {
    const { beforeRenderItem: s } = this.props;
    if (s) {
      const i = s.call(this, t, e);
      i !== void 0 && (t = i);
    }
    return this._renderedItemMap.set(t._keyPath, t), t;
  }
  _renderItem(t, e, s) {
    (this._hasNestedItems || !this.isRoot) && e.type === "item" && e.toggleIcon === void 0 && (e.toggleIcon = this._renderNestedToggle(t, e.expanded));
    const i = e.items ? this._renderNestedList(t, e.items, e, e.expanded) : null;
    return e = H(e, {
      "z-parent": e.parentKey,
      "z-key-path": e._keyPath
    }, i ? { children: i } : null), this._renderedItemMap.set(e._keyPath, e), super._renderItem(t, e, s);
  }
  _getItemFromEvent(t, e) {
    e = e || t.target;
    let s = super._getItemFromEvent(t, e);
    if (!s) {
      const r = e.closest("[z-list]");
      if (r) {
        const o = r.getAttribute("z-list"), a = this.getItem(o), l = this.getRenderedItem(o);
        if (!a || !l)
          return;
        s = {
          target: e,
          index: l._index,
          item: a,
          element: r,
          event: t,
          key: o,
          keyPath: o,
          renderedItem: l
        };
      }
      return;
    }
    (t.type === "mouseenter" || t.type === "mouseleave" || t.type === "mouseover") && (s.hover = t.type !== "mouseleave");
    const { parentKey: i } = this.props;
    return { ...s, parentKey: i, keyPath: `${i !== void 0 ? `${i}:` : ""}${s.key}`, target: e };
  }
  _handleNestedToggle(t, e, s) {
    this.toggle(t, e, s);
  }
  _handleClick(t) {
    const e = super._handleClick(t);
    if (e) {
      const { renderedItem: s, keyPath: i, target: r } = e, { nestedToggle: o } = this.props;
      if (!s.items || t.defaultPrevented || r.closest(".not-nested-toggle") || o && !s.disabled && !r.closest(o) || !o && !s.disabled && r.closest("a,.btn,.item-checkbox,.open-url,input,select,textarea") && !r.closest(".nested-toggle-icon,.item-icon"))
        return e;
      this.toggle(i), t.preventDefault();
    }
    return e;
  }
  _handleNestedCheck(t) {
    this.toggleChecked(t);
  }
  _getProps(t) {
    const { level: e = 0, indent: s = 20, parentKey: i } = t, r = H(super._getProps(t), {
      "z-level": e,
      "z-list": i,
      style: { "--list-nested-indent": `${e * s}px`, "--list-indent": `${s}px` },
      className: this._hasNestedItems ? "has-nested-items" : "no-nested-items"
    });
    return r.className = S(r.className), r;
  }
  _beforeRender(t) {
    return this._renderedItemMap.clear(), this._hasIcons = !1, this._hasNestedItems = !1, super._beforeRender(t);
  }
};
ye.defaultProps = {
  ...yt.defaultProps,
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
ye.inheritNestedProps = ["component", "name", "itemName", "itemKey", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "accordion", "itemRender", "itemProps", "onToggle", "checkbox", "getItem", "getItems", "checkOnClick", "selectOnChecked", "checkedState", "onClickItem", "activeOnHover", "multipleActive", "onActive", "hoverItemActions"];
const Jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  List: yt,
  Listitem: Me,
  NestedList: ye
}, Symbol.toStringTag, { value: "Module" }));
class ai extends W {
}
ai.NAME = "List";
ai.Component = yt;
ai.replace = yt.TAG;
ai.register();
class li extends W {
}
li.NAME = "NestedList";
li.Component = ye;
li.replace = ye.TAG;
li.register();
ot(Jf);
const ys = class Gc extends ye {
  constructor(t) {
    super(t), this._handleHover = this._handleHover.bind(this);
  }
  get isHoverTrigger() {
    return this.props.nestedTrigger === "hover";
  }
  _getClassName(t) {
    return [super._getClassName(t), this._hasNestedItems ? "menu-nested" : "", t.className, t.wrap ? { "scrollbar-thin": t.scrollbarThin, "scrollbar-hover": t.scrollbarHover } : { popup: t.popup, compact: t.compact }];
  }
  _getWrapClass(t) {
    return ["menu-wrapper", t.wrapClass, { popup: t.popup, compact: t.compact }];
  }
  _getWrapperProps(t) {
    const { wrapAttrs: e, height: s, maxHeight: i, parentKey: r } = t, o = H(
      { "z-list-wrapper": r },
      e,
      s || i ? { style: { height: s, maxHeight: i } } : null,
      this.isRoot && this.isHoverTrigger ? {
        onMouseEnter: this._handleHover,
        onMouseLeave: this._handleHover,
        onMouseOver: this._handleHover
      } : null
    );
    return o.className = S(this._getWrapClass(t), o.className), o;
  }
  _renderWrapperHeader(t) {
    return /* @__PURE__ */ m(P, { content: t.header, generatorThis: this }, "header");
  }
  _renderWrapperFooter(t) {
    return /* @__PURE__ */ m(P, { content: t.footer, generatorThis: this }, "footer");
  }
  _handleHover(t) {
    const e = t.target;
    if (!(e instanceof HTMLElement) || !this.isHoverTrigger)
      return;
    let s;
    if (t.type !== "mouseleave") {
      const c = e.closest("[z-item]");
      if (c)
        s = c.getAttribute("z-key-path"), c.classList.contains("is-nested") || (s = c.getAttribute("z-parent"));
      else {
        const h = e.closest("[z-list-wrapper]");
        s = h == null ? void 0 : h.getAttribute("z-list-wrapper");
      }
    }
    const i = this._hoverInfo, r = i == null ? void 0 : i.keyPath;
    if (r === s)
      return;
    i != null && i.timer && clearTimeout(i.timer);
    const o = typeof s == "string", l = o ? typeof r == "string" && (i != null && i.shown) ? 50 : 200 : i != null && i.shown ? 100 : 200;
    this._hoverInfo = {
      keyPath: s,
      timer: window.setTimeout(() => {
        o ? (this.toggle(s, !0, !0), this._hoverInfo.shown = !0) : (this.toggleAll(!1), this._hoverInfo = void 0);
      }, l)
    };
  }
  componentWillUnmount() {
    var e;
    super.componentWillUnmount();
    const t = (e = this._hoverInfo) == null ? void 0 : e.timer;
    t && clearTimeout(t);
  }
  render(t) {
    const e = super.render(t);
    return t.wrap ? /* @__PURE__ */ m("menu", { ...this._getWrapperProps(t), children: [
      this._renderWrapperHeader(t),
      e,
      this._renderWrapperFooter(t)
    ] }) : e;
  }
  static render(t, e, s, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), s && (r = H(s, r)), /* @__PURE__ */ m(Gc, { ...r });
  }
};
ys.NAME = "menu";
ys.TAG = "menu";
ys.inheritNestedProps = [...ye.inheritNestedProps, "compact"];
ys.ItemComponents = {
  ...ye.ItemComponents,
  item: [Me, { innerComponent: "a" }]
};
ys.defaultProps = {
  ...ye.defaultProps,
  scrollbarHover: !0
};
let At = ys;
let ci = class extends O {
  constructor(t) {
    super(t), this._input = U(), this._timer = 0, this._handleClearBtnClick = (e) => {
      e.stopPropagation(), this.clear(e);
    }, this._handleChange = (e) => {
      const s = this.state.value, i = e.target.value, { onChange: r, delay: o } = this.props;
      this.setState({ value: i }, () => {
        !r || s === i || (o ? (this._clearTimer(), this._timer = window.setTimeout(() => {
          r(i, e), this._timer = 0;
        }, o)) : r(i, e));
      });
    }, this._handleFocus = (e) => {
      const s = e.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
        i == null || i(e);
      });
    }, this.state = { focus: !1, value: t.defaultValue || "" }, this._gid = t.id || `search-box-${st()}`;
  }
  componentDidMount() {
    const { hotkeys: t } = this.props;
    if (t) {
      const e = uc(t, {
        clear: {
          keys: "Escape",
          handler: (s) => {
            this.clear(s);
          }
        },
        enter: {
          keys: "Enter",
          handler: (s) => {
            var i, r;
            (r = (i = this.props).onEnter) == null || r.call(i, this.state.value, s);
          }
        }
      });
      e && (this._hotkeysScope = `SearchBox_${this._gid}`, p(this.input).hotkeys(e, {
        scope: this._hotkeysScope,
        event: "keydown"
      }));
    }
  }
  componentWillUnmount() {
    this._hotkeysScope && p(this.input).unbindHotkeys(this._hotkeysScope);
  }
  get id() {
    return this._gid;
  }
  get input() {
    return this._input.current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  blur() {
    var t;
    (t = this.input) == null || t.blur();
  }
  clear(t) {
    const e = this.state.value;
    this.setState({ value: "" }, () => {
      const { onChange: s, onClear: i } = this.props;
      i == null || i(t), this.focus(), e.trim() !== "" && (s == null || s("", t));
    });
  }
  _clearTimer() {
    this._timer && clearTimeout(this._timer), this._timer = 0;
  }
  render(t, e) {
    const { style: s, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: h, mergeIcon: d, searchIcon: u, clearIcon: f, value: g, compact: _, prefixClass: y, suffixClass: v, name: b } = t, { focus: w, value: C } = e, { id: k } = this, $ = g ?? C, N = typeof $ != "string" || !$.trim().length;
    let A, I, F;
    return u && (F = u === !0 ? /* @__PURE__ */ m("span", { class: "magnifier" }) : /* @__PURE__ */ m(rt, { icon: u })), !d && u && (A = /* @__PURE__ */ m("label", { for: k, class: S("input-control-prefix", y), children: F }, "prefix")), f && !N ? I = /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: this._handleClearBtnClick,
        children: f === !0 ? /* @__PURE__ */ m("span", { class: "close" }) : /* @__PURE__ */ m(rt, { icon: f })
      }
    ) : d && u && (I = F), I && (I = /* @__PURE__ */ m("label", { for: k, class: S("input-control-suffix", v), children: I }, "suffix")), /* @__PURE__ */ m("div", { class: S("search-box input-control", r, { focus: w, empty: N, compact: _, "has-prefix-icon": A, "has-suffix-icon": I }), style: o, children: [
      A,
      /* @__PURE__ */ m(
        "input",
        {
          ref: this._input,
          id: k,
          name: b,
          type: "text",
          class: S("form-control", { "rounded-full": c, "size-sm": _ }, i),
          style: s,
          placeholder: h,
          disabled: l,
          readonly: a,
          value: $,
          onInput: this._handleChange,
          onChange: this._handleChange,
          onFocus: this._handleFocus,
          onBlur: this._handleFocus
        },
        "input"
      ),
      I
    ] });
  }
};
ci.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500,
  hotkeys: !0
};
const Xf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SearchBox: ci
}, Symbol.toStringTag, { value: "Module" }));
let Pt = class extends At {
  constructor(t) {
    super(t), this._handleSearchChange = (e) => {
      const s = this.constructor.getSearchKeys(e);
      this._searchKeys = s, this.setState({ search: s.join(" ") });
    }, this.state.search = t.search ?? t.defaultSearch, this._searchKeys = this.constructor.getSearchKeys(this.state.search), this._isNestedItemMatch = this._isNestedItemMatch.bind(this);
  }
  componentWillUpdate(t) {
    this.isRoot && t.search !== void 0 && t.search !== this.props.search && (this._searchKeys = this.constructor.getSearchKeys(t.search));
  }
  componentDidMount() {
    super.componentDidMount(), this._updateMatchedParents();
  }
  componentDidUpdate() {
    super.componentDidUpdate(), this._updateMatchedParents();
  }
  isExpanded(t) {
    return this.props.expandOnSearch && this._searchKeys.length ? !0 : super.isExpanded(t);
  }
  _updateMatchedParents() {
    var s;
    if (!this.isRoot)
      return;
    const t = p(this.element), e = t.find(".item.is-nested.is-not-match").filter((i, r) => this._matchedParents.has(r.getAttribute("z-key-path") || "")).addClass("has-match-child");
    t.parent().toggleClass("no-match-child", !!((s = this._searchKeys) != null && s.length) && !e.length && !t.children(".item").not(".is-not-match").length);
  }
  _isItemMatch(t, e, s, i) {
    const { isItemMatch: r, nestedSearch: o } = t, a = r ? r.call(this, e, this._searchKeys, s, i) : this.constructor.isItemMatch(e, this._searchKeys, t.searchProps);
    if (o && this.isRoot && a && i !== void 0) {
      let l = "";
      String(i).split(":").forEach((c) => {
        l += `${l.length ? ":" : ""}${c}`, this._matchedParents.add(l);
      });
    }
    return a;
  }
  _isNestedItemMatch(t, e, s, i) {
    return this._isItemMatch(this.props, t, s, i);
  }
  _getNestedProps(t, e, s, i) {
    const r = super._getNestedProps(t, e, s, i);
    return this.isRoot && t.nestedSearch ? (r.isItemMatch = this._isNestedItemMatch, r.search = this._searchKeys.join(" ")) : t.nestedSearch || H(r, { search: void 0, defaultSearch: void 0 }, s.listProps), r;
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s);
    return i && (this.isRoot && this.props.limit && this._showCount >= this.props.limit ? !1 : (i.hidden = !this._isItemMatch(t, e, s, t.parentKey), i.hidden || this._showCount++, i));
  }
  _renderItem(t, e, s) {
    return e.hidden && !this._hasNestedItems ? null : (e.className = [e.className, e.hidden ? "is-not-match" : ""], !e.hidden && t.underlineKeys && this._searchKeys.length && ["text", "title", "subtitle", "content"].forEach((i) => {
      typeof e[i] == "string" && (e[i] = this.constructor.underlineKeys(this._searchKeys, [e[i]]));
    }), super._renderItem(t, e, s));
  }
  _getWrapClass(t) {
    const e = this.isRoot && this._searchKeys.length;
    return S(super._getWrapClass(t), "search-menu", t.searchBox ? `search-menu-on-${t.searchPlacement || "top"}` : "", e ? "is-search-mode" : "", e && t.expandOnSearch ? "no-toggle-on-search" : "");
  }
  _getSearchBoxProps(t) {
    const { searchBox: e } = t, s = {
      compact: !0,
      className: "not-nested-toggle",
      onChange: this._handleSearchChange
    };
    return typeof e == "object" && H(s, e), t.search !== void 0 && (s.value = this._searchKeys.join(" "), s.disabled = !0), s;
  }
  _renderSearchBox(t) {
    const e = this._getSearchBoxProps(t);
    return /* @__PURE__ */ m(ci, { ...e }, "search");
  }
  _renderWrapperHeader(t) {
    const e = t.header, { noMatchHint: s, searchBox: i, searchPlacement: r, nestedSearch: o, headerClass: a } = t, l = (!o || this.isRoot) && i && r !== "bottom";
    return !e && !l && !s ? null : [
      s ? /* @__PURE__ */ m("div", { className: "search-menu-no-match-hint", children: s }, "noMatchHint") : null,
      e || l ? /* @__PURE__ */ m("header", { className: S("search-menu-header", a), children: [
        e ? super._renderWrapperHeader(t) : null,
        l ? this._renderSearchBox(t) : null
      ] }, "header") : null
    ];
  }
  _renderWrapperFooter(t) {
    const e = t.footer, { searchBox: s, searchPlacement: i, nestedSearch: r, footerClass: o, exceedLimitHint: a, limit: l } = t, c = (!r || this.isRoot) && s && i === "bottom", h = a && l && this._items.length > l;
    return !e && !c && !h ? null : /* @__PURE__ */ m("footer", { className: S("search-menu-footer", o), children: [
      h ? /* @__PURE__ */ m("div", { className: "search-menu-exceed-limit-hint", children: tt(a, this._items.length - l) }) : null,
      e ? super._renderWrapperFooter(t) : null,
      c ? this._renderSearchBox(t) : null
    ] }, "footer");
  }
  _beforeRender(t) {
    return this.isRoot && (this._matchedParents = /* @__PURE__ */ new Set(), this._showCount = 0), super._beforeRender(t);
  }
  /**
   * Check whether item is matched.
   *
   * @param item          Item to match.
   * @param searchKeys    Search keys.
   * @returns Whether item is matched.
   */
  static isItemMatch(t, e, s = ["keys", "text", "title", "subtitle"]) {
    return e.length ? e.every((i) => s.some((r) => {
      const o = typeof r == "function" ? r(t) : t[r];
      return typeof o == "string" && o.length && o.toLowerCase().includes(i);
    })) : !0;
  }
  /**
   * Convert search string to search keys.
   *
   * @param search    Search string.
   * @returns Search keys array.
   */
  static getSearchKeys(t = "") {
    return p.unique(t.toLowerCase().split(" ").filter((e) => e.length));
  }
  static underlineKeys(t, e, s = "is-match-keys") {
    return t.reduce((i, r) => [...i].reduce((o, a) => {
      if (typeof a != "string")
        return o.push(a), o;
      const l = a.toLowerCase().split(r);
      if (l.length === 1)
        return o.push(a), o;
      let c = 0;
      return l.forEach((h, d) => {
        d && (o.push(/* @__PURE__ */ m("span", { class: s, children: a.substring(c, c + r.length) })), c += r.length), o.push(a.substring(c, c + h.length)), c += h.length;
      }), o;
    }, []), e);
  }
};
Pt.inheritNestedProps = [...At.inheritNestedProps, "isItemMatch", "search", "underlineKeys", "nestedSearch"];
Pt.defaultProps = {
  ...At.defaultProps,
  defaultNestedShow: !0,
  wrap: !0,
  nestedSearch: !0,
  underlineKeys: !0,
  limit: 200
};
const Qf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Menu: At,
  SearchMenu: Pt
}, Symbol.toStringTag, { value: "Module" }));
class co extends W {
}
co.NAME = "Menu";
co.Component = At;
co.replace = At.TAG;
class ho extends W {
}
ho.NAME = "SearchMenu";
ho.Component = Pt;
ho.replace = Pt.TAG;
ot(Qf);
function tp({
  className: n,
  style: t,
  actions: e,
  heading: s,
  content: i,
  contentClass: r,
  children: o,
  close: a,
  onClose: l,
  icon: c,
  iconClass: h,
  ...d
}) {
  let u;
  a === !0 ? u = /* @__PURE__ */ m(et, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ m("span", { class: "close" }) }) : bt(a) ? u = a : typeof a == "object" && (u = /* @__PURE__ */ m(et, { ...a, onClick: l }));
  const f = ht.render(e, []);
  return /* @__PURE__ */ m("div", { className: S("alert", n), style: t, ...d, children: [
    /* @__PURE__ */ m(rt, { icon: c, className: S("alert-icon", h) }),
    typeof i != "string" ? /* @__PURE__ */ m(P, { content: i }) : /* @__PURE__ */ m("div", { className: S("alert-content", r), children: [
      typeof s != "string" ? /* @__PURE__ */ m(P, { content: s }) : s && /* @__PURE__ */ m("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ m("div", { className: "alert-text", children: i }),
      s ? f : null
    ] }),
    s ? null : f,
    u,
    o
  ] });
}
function ep(n) {
  if (n === "center")
    return "fade-from-center";
  if (n) {
    if (n.includes("top"))
      return "fade-from-top";
    if (n.includes("bottom"))
      return "fade-from-bottom";
  }
  return "fade";
}
let sp = class extends O {
  render(t) {
    const {
      margin: e,
      type: s,
      placement: i,
      animation: r,
      show: o,
      className: a,
      message: l,
      html: c,
      content: h,
      time: d,
      ...u
    } = t, f = h ? [h] : [];
    return typeof c == "string" && f.push({ html: c }), l && f.push(l), /* @__PURE__ */ m(
      tp,
      {
        className: S("messager", a, s, r === !0 ? ep(i) : r, o ? "in" : ""),
        content: f,
        ...u
      }
    );
  }
};
class uo extends W {
  constructor() {
    super(...arguments), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
      t && this.show();
      const { margin: e } = this.options;
      e && this.$element.css("margin", `${e}px`);
    };
  }
  get isShown() {
    return this._show;
  }
  afterInit() {
    this.on("click", (t) => {
      p(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
    });
  }
  setOptions(t, e) {
    return t = super.setOptions(t, e), {
      ...t,
      show: this._show,
      afterRender: this._afterRender
    };
  }
  show() {
    this.render(), this.emit("show"), this._resetTimer(() => {
      this._show = !0, this.render(), this._resetTimer(() => {
        this.emit("shown");
        const { time: t } = this.options;
        t && this._resetTimer(() => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && this._resetTimer(() => {
      this.emit("hide"), this._show = !1, this.render(), this._resetTimer(() => {
        this.emit("hidden");
      });
    }, 50);
  }
  _resetTimer(t, e = 200) {
    this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
      t(), this._showTimer = 0;
    }, e);
  }
}
uo.NAME = "MessagerItem";
uo.Component = sp;
const Js = class qc extends it {
  get isShown() {
    var t;
    return !!((t = this._item) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), this._getItem().show();
  }
  hide() {
    var t;
    (t = this._item) == null || t.hide();
  }
  _getItem() {
    const t = { ...this.options };
    if (this._item)
      this._item.setOptions(t);
    else {
      const e = this._getHolder(), s = new uo(e, t);
      s.on("hidden", () => {
        s.destroy(), e == null || e.remove(), this._holder = void 0, this._item = void 0;
      }), this._item = s;
    }
    return this._item;
  }
  _getHolder() {
    if (this._holder)
      return this._holder;
    const { placement: t = "top" } = this.options;
    let e = this.$element.find(`.messagers-${t}`);
    e.length || (e = p(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
    let s = e.find(`#messager-${this.gid}`);
    return s.length || (s = p(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(e), this._holder = s[0]), s[0];
  }
  static show(t, e) {
    typeof t == "string" && (t = { content: t });
    const { container: s, ...i } = t;
    e = e ?? i.type;
    const r = {
      type: e,
      key: `messager_${st()}`,
      content: void 0,
      message: void 0,
      ...e ? this.TypeOptions[e] : {},
      ...i
    }, o = qc.ensure(s || "body", r);
    return o.hide(), o.show(), o;
  }
};
Js.NAME = "messager";
Js.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
Js.MULTI_INSTANCE = !0;
Js.TypeOptions = {};
let A_ = Js, hi = class extends O {
  render(t) {
    const { percent: e = 50, color: s, background: i = null, height: r, width: o, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ m(
      "div",
      {
        class: S("progress", l),
        style: {
          width: o,
          height: r,
          "--progress-bg": i,
          "--progress-bar-color": s,
          ...c
        },
        children: [
          /* @__PURE__ */ m("div", { class: "progress-bar", style: { width: `${e}%` } }),
          a
        ]
      }
    );
  }
};
hi.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
const np = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressBar: hi
}, Symbol.toStringTag, { value: "Module" }));
ot(np);
class fo extends W {
}
fo.NAME = "ProgressBar";
fo.Component = hi;
fo.register();
let di = class extends O {
  render(t) {
    const { percent: e = 50, size: s = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: c, textY: h, children: d } = t, u = s / 2;
    let { circleWidth: f = 0.1 } = t;
    f < 1 && (f = s * f);
    const g = (s - f) / 2;
    return /* @__PURE__ */ m("svg", { className: a, width: s, height: s, children: [
      /* @__PURE__ */ m("circle", { cx: u, cy: u, r: g, "stroke-width": f, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ m("circle", { cx: u, cy: u, r: g, "stroke-width": f, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * g * 2, "stroke-dashoffset": Math.PI * g * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ m("text", { x: c ?? u, y: h ?? u + f / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${g}px`, stroke: "currentColor" }, children: o === !0 ? Math.floor(e) : o }) : null,
      d
    ] });
  }
};
di.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class po extends W {
}
po.NAME = "ProgressCircle";
po.Component = di;
po.register();
const ip = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressCircle: di
}, Symbol.toStringTag, { value: "Module" }));
ot(ip);
let Yc = class extends O {
  render() {
    const { time: t, format: e = "yyyy-MM-dd hh:mm", invalidText: s, className: i, ...r } = this.props, o = Q(t);
    if (!ti(o))
      return /* @__PURE__ */ m("span", { class: S("time-span is-invalid", i), ...r, children: s ?? t });
    const a = nt(o, e);
    return /* @__PURE__ */ m("span", { class: S("time-span", i), ...r, children: a });
  }
};
const rp = {
  justNow: "刚刚",
  xAgo: "{0}前",
  xLater: "{0}后",
  lessThanAMinute: "不到1分钟",
  yesterday: "昨天",
  dayBeforeYesterday: "前天",
  tomorrow: "明天",
  minutes: "{0}分钟",
  hours: "{0}小时",
  days: "{0}天",
  weeks: "{0}周",
  months: "{0}个月",
  years: "{0}年"
}, op = {
  justNow: "剛剛",
  xAgo: "{0}前",
  xLater: "{0}後",
  lessThanAMinute: "不到1分鐘",
  yesterday: "昨天",
  dayBeforeYesterday: "前天",
  tomorrow: "明天",
  minutes: "{0}分鐘",
  hours: "{0}小時",
  days: "{0}天",
  weeks: "{0}周",
  months: "{0}個月",
  years: "{0}年"
}, ap = {
  justNow: "Just Now",
  xAgo: "{0} ago",
  xLater: "{0} later",
  lessThanAMinute: "Less than a minute",
  yesterday: "Yesterday",
  dayBeforeYesterday: "Day Before Yesterday",
  tomorrow: "Tomorrow",
  minutes: "{0} minutes",
  hours: "{0} hours",
  days: "{0} days",
  weeks: "{0} weeks",
  months: "{0} months",
  years: "{0} years"
};
j.addLang({
  zh_cn: {
    ago: rp
  },
  zh_tw: {
    ago: op
  },
  en: {
    ago: ap
  }
});
function lp(n, t, e) {
  const s = Q(n), r = Q(t).getTime() - s.getTime(), o = Math.abs(r), a = r > 0, l = Math.floor(o / 1e3), c = Math.floor(l / 60), h = Math.floor(c / 60), d = Math.floor(h / 24), u = Math.floor(d / 7), f = Math.floor(d / 30), g = Math.floor(d / 365), _ = (v, b) => j.getLang(`ago.${v}`, b, v, e) ?? v, y = (v) => _(a ? "xAgo" : "xLater", [v]);
  return l < 10 ? _("justNow") : l < 60 ? y(_("lessThanAMinute")) : c < 60 ? y(_("minutes", [c])) : h < 24 ? y(_("hours", [h])) : d === 1 ? _(a ? "yesterday" : "tomorrow") : d === 2 && a ? _("dayBeforeYesterday") : d < 7 ? y(_("days", [d])) : u < 4 ? y(_("weeks", [u])) : f < 12 ? y(_("months", [f])) : y(_("years", [g]));
}
const mo = class gr extends O {
  constructor() {
    super(...arguments), this.state = { tick: 0 };
  }
  componentDidMount() {
    gr.register(this);
  }
  componentWillUnmount() {
    gr.unregister(this);
  }
  update() {
    this.setState((t) => ({ tick: t.tick + 1 }));
  }
  render() {
    const { time: t, now: e, lang: s, invalidText: i, className: r, hint: o = !0, hintFormat: a, ...l } = this.props, c = Q(t);
    if (!ti(c))
      return /* @__PURE__ */ m("span", { class: S("time-ago is-invalid", r), ...l, children: i ?? t });
    const h = lp(c, e, s), d = o ? typeof o == "string" ? o : nt(c, a) : void 0;
    return /* @__PURE__ */ m("span", { class: S("time-ago", r), title: d, ...l, children: h });
  }
  static register(t) {
    this.instances.add(t), this.timer === 0 && (this.timer = window.setInterval(() => {
      this.instances.forEach((e) => e.update());
    }, 6e4));
  }
  static unregister(t) {
    this.instances.delete(t), this.instances.size === 0 && (window.clearInterval(this.timer), this.timer = 0);
  }
};
mo.timer = 0;
mo.instances = /* @__PURE__ */ new Set();
let Zc = mo;
const cp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TimeAgo: Zc,
  TimeSpan: Yc
}, Symbol.toStringTag, { value: "Module" }));
ot(cp);
class go extends W {
}
go.NAME = "TimeSpan";
go.Component = Yc;
go.register();
class _o extends W {
}
_o.NAME = "TimeAgo";
_o.Component = Zc;
_o.register();
function Ce(n, t, e) {
  return Math.max(t, Math.min(n, e));
}
function Jc(n) {
  return typeof n == "number" ? { left: n, top: n, right: n, bottom: n } : {
    left: (n == null ? void 0 : n.left) ?? 0,
    top: (n == null ? void 0 : n.top) ?? 0,
    right: (n == null ? void 0 : n.right) ?? 0,
    bottom: (n == null ? void 0 : n.bottom) ?? 0
  };
}
function yn(n) {
  const e = window.getComputedStyle(n).getPropertyValue("transform");
  if (e === "none")
    return { left: 0, top: 0 };
  const s = e.match(/^matrix\((.+)\)$/);
  if (!s)
    return { left: 0, top: 0 };
  const i = s[1].split(", ");
  return {
    left: parseFloat(i[4]),
    top: parseFloat(i[5])
  };
}
function hp(n) {
  const { style: t } = n, e = n.getBoundingClientRect(), s = t.width, i = t.height;
  t.width = `${e.width + 10}px`, t.height = `${e.height + 10}px`;
  const r = n.getBoundingClientRect();
  return t.width = s, t.height = i, {
    anchorRight: Math.abs(r.right - e.right) < Math.abs(r.left - e.left),
    anchorBottom: Math.abs(r.bottom - e.bottom) < Math.abs(r.top - e.top)
  };
}
function Xc(n, t) {
  return !t || !!n.closest(t).length;
}
function yo(n, t) {
  return !n || n === "window" ? null : n === "self" ? t : n === "parent" ? t.parentElement : typeof n == "string" ? document.querySelector(n) : n instanceof Element ? n : null;
}
function Qc(n, t, e) {
  if (n === !1 || n === void 0)
    return null;
  let s;
  if (n === "window")
    s = { left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight };
  else {
    const r = yo(n, e);
    if (r) {
      const o = r.getBoundingClientRect();
      s = { left: o.left, top: o.top, right: o.right, bottom: o.bottom };
    } else if (typeof n.getBoundingClientRect == "function") {
      const o = n.getBoundingClientRect();
      s = { left: o.left, top: o.top, right: o.right, bottom: o.bottom };
    }
  }
  if (!s)
    return null;
  const i = Jc(t);
  return {
    left: s.left + i.left,
    top: s.top + i.top,
    right: s.right - i.right,
    bottom: s.bottom - i.bottom
  };
}
function th(n, t) {
  return t === "self" ? [n] : t ? Array.from(n.querySelectorAll(t)) : [];
}
function eh(n, t, e) {
  p(document).off(n).on(`mousemove${n}`, t).on(`mouseup${n}`, e);
}
function _r(n) {
  p(document).off(n);
}
function sh(n, t) {
  return n && cancelAnimationFrame(n), requestAnimationFrame(t);
}
function Pn(n) {
  return n && cancelAnimationFrame(n), 0;
}
const Es = '[droppable="true"]';
class ui extends it {
  constructor() {
    super(...arguments), this._state = { dragging: null, dropping: null }, this._needClean = !1, this._handleMouseDown = (t) => {
      const { selector: e, handle: s, beforeDrag: i } = this.options, r = p(t.target), o = r.closest(e), a = o[0];
      !a || !Xc(r, s) || i && i.call(this, t, a) === !1 || (this._needClean = !0, o.attr("draggable", "true"), this._setState({ dragging: a }));
    }, this._handleDragStart = (t) => {
      const { dragElement: e } = this;
      if (!e) {
        t.preventDefault();
        return;
      }
      const { options: s } = this, { onDragStart: i } = s;
      if (i && i.call(this, t, e) === !1) {
        this._clean();
        return;
      }
      const { $element: r } = this, { target: o, selector: a, draggingClass: l, droppableClass: c, hasDraggingClass: h, canDrop: d } = s;
      l && (this.$element.find(l).removeClass(l), p(e).addClass(l));
      let u = typeof o == "function" ? p(o.call(this, e)) : r.find(o || a || Es);
      if (d && (u = u.filter((f, g) => d.call(this, t, e, g) !== !1)), !u.length) {
        this._clean();
        return;
      }
      c && (r.find(c).removeClass(c), u.addClass(c)), h && r.addClass(h), r.find(Es).removeAttr("droppable"), u.attr("droppable", "true"), this._$targets = u;
    }, this._handleDrag = (t) => {
      var s;
      const { dragElement: e } = this;
      e && (this._setDragEffect(t), (s = this.options.onDrag) == null || s.call(this, t, e));
    }, this._handleDragEnd = (t) => {
      var s;
      const { dragElement: e } = this;
      e && ((s = this.options.onDragEnd) == null || s.call(this, t, e)), this._clean();
    }, this._handleDragEnter = (t) => {
      this._handleDragOver(t);
    }, this._handleDragOver = (t) => {
      var o, a;
      const { dragElement: e } = this, i = p(t.target).closest(Es)[0];
      if (!e || !i)
        return;
      const r = this.state.dropping;
      if (t.preventDefault(), this._setDragEffect(t), r !== i) {
        const { droppingClass: l } = this.options;
        l && (r && this._leaveDropElement(t, r), p(i).addClass(l)), this._setState({ dropping: i }), (o = this.options.onDragEnter) == null || o.call(this, t, e, i);
      }
      (a = this.options.onDragOver) == null || a.call(this, t, e, i);
    }, this._handleDragLeave = (t) => {
      const { dragElement: e } = this, s = p(t.target).filter(Es)[0];
      !e || !s || (t.preventDefault(), this._leaveDropElement(t, s), this._setState({ dropping: null }));
    }, this._handleDrop = (t) => {
      var s;
      const e = p(t.target).closest(Es)[0];
      e && (t.preventDefault(), (s = this.options.onDrop) == null || s.call(this, t, this.dragElement, e)), this._needClean = !0, setTimeout(() => {
        this._needClean && this._clean();
      }, 50);
    };
  }
  /** 获取当前拖放状态。Get the current drag/drop state. */
  get state() {
    return this._state;
  }
  /** 获取当前正在被拖拽的元素。Get the element currently being dragged. */
  get dragElement() {
    return this._state.dragging;
  }
  /** 获取当前悬停的放置目标元素。Get the drop target element currently being hovered. */
  get dropElement() {
    return this._state.dropping;
  }
  /**
   * 初始化事件绑定。在拖拽容器和放置容器上绑定相关的原生拖放事件。
   * Initialize event bindings on drag and drop containers.
   */
  async afterInit() {
    const { namespace: t } = this, { dragContainer: e, dropContainer: s, onDrag: i } = this.options;
    this._$dragContainer = e ? p(e) : this.$element, this._$dropContainer = s ? p(s) : this._$dragContainer, this._$dragContainer.on("mousedown" + t, this._handleMouseDown).on("dragstart" + t, this._handleDragStart).on("dragend" + t, this._handleDragEnd), i && this._$dragContainer.on("drag" + t, this._handleDrag), this._$dropContainer.on("dragover" + t, this._handleDragOver).on("dragenter" + t, this._handleDragEnter).on("dragleave" + t, this._handleDragLeave).on("drop" + t, this._handleDrop), p(document).on(`mouseup${this.namespace}`, this._clean.bind(this));
  }
  /**
   * 销毁组件，移除所有事件监听并执行清理。
   * Destroy the component, removing all event listeners and performing cleanup.
   */
  destroy() {
    this._clean(), p(document).off(this.namespace), this._$dragContainer.off(this.namespace), this._$dropContainer.off(this.namespace), super.destroy();
  }
  /**
   * 更新内部拖放状态，并在状态发生变化时触发 `onChange` 回调。
   * Update the internal drag/drop state and invoke the `onChange` callback when it changes.
   */
  _setState(t) {
    var r;
    const e = this._state, { dragging: s = e.dragging, dropping: i = e.dropping } = t;
    s === e.dragging && i === e.dropping || (this._state = { dragging: s, dropping: i }, (r = this.options.onChange) == null || r.call(this, this._state, e));
  }
  /**
   * 设置拖拽操作的 dropEffect（copy/move/link/none）。
   * Set the DataTransfer dropEffect for the drag operation.
   */
  _setDragEffect(t) {
    const { dropEffect: e } = this.options;
    e && (t.dataTransfer.dropEffect = e);
  }
  /**
   * 从放置目标元素上移除 droppingClass 并触发 `onDragLeave` 回调。
   * Remove droppingClass from the drop target and fire the `onDragLeave` callback.
   */
  _leaveDropElement(t, e) {
    var i;
    const { droppingClass: s } = this.options;
    s && p(e).removeClass(s), (i = this.options.onDragLeave) == null || i.call(this, t, this.dragElement, e);
  }
  /**
   * 清理拖放状态：移除所有拖拽相关的 CSS 类名和 droppable 属性，重置内部状态。
   * Clean up drag/drop state: remove all drag-related CSS classes and droppable attributes, reset internal state.
   */
  _clean() {
    if (!this._needClean)
      return;
    this._needClean = !1;
    const { draggingClass: t, droppableClass: e, droppingClass: s, hasDraggingClass: i } = this.options;
    i && this.$element.removeClass(i);
    const { dragElement: r } = this;
    if (r) {
      const a = p(r);
      t && a.removeClass(t);
    }
    this._setState({ dropping: null, dragging: null });
    const o = this._$targets;
    o && (e && o.removeClass(e), s && o.removeClass(s), this._$targets = void 0);
  }
}
ui.NAME = "Draggable";
ui.DEFAULT = {
  selector: '[draggable="true"]',
  dropEffect: "move",
  hasDraggingClass: "has-dragging",
  draggingClass: "is-dragging",
  droppableClass: "is-droppable",
  droppingClass: "is-dropping"
};
const dp = '[moveable="true"]', Ga = ["position", "transform"];
class Xs extends it {
  constructor() {
    super(...arguments), this._raf = 0, this._autoUpdateRaf = 0, this._autoUpdateFrameLoop = !1, this._handleMouseDown = (t) => {
      const { options: e } = this, { selector: s, handle: i, onMoveStart: r } = e, o = p(t.target), a = s === "self" ? this.$element : o.closest(s);
      this._state && this._clean();
      const l = a[0];
      if (!l || !Xc(o, i) || r && r.call(this, t, l) === !1)
        return;
      a.attr("moveable", "true");
      const { movingClass: c, hasMovingClass: h } = e;
      if (c && a.addClass(c), h && this.$element.addClass(h), t.preventDefault(), !this._setState(t, l)) {
        c && a.removeClass(c), h && this.$element.removeClass(h);
        return;
      }
      eh(this.namespace, this._handleMouseMove, this._handleMouseUp);
    }, this._handleMouseMove = (t) => {
      !this._state || !t.buttons || (t.preventDefault(), this._raf = sh(this._raf, () => {
        this._raf = 0, this._setState(t);
      }));
    }, this._handleMouseUp = (t) => {
      var e;
      this._state && (this._raf = Pn(this._raf), this._setState(t), (e = this.options.onMoveEnd) == null || e.call(this, t, this._state), this._clean());
    };
  }
  /** 获取当前移动状态。Get the current move state. */
  get state() {
    return this._state;
  }
  /** 获取正在被移动的目标元素。Get the element currently being moved. */
  get moveElement() {
    var t;
    return (t = this._state) == null ? void 0 : t.target;
  }
  /**
   * 初始化：绑定 mousedown 事件以启动移动。
   * Initialize: bind the mousedown event to start moving.
   */
  async afterInit() {
    this.on("mousedown", this._handleMouseDown), this.options.autoUpdate && this.startAutoUpdate();
  }
  /**
   * 销毁组件，清理状态并移除事件监听。
   * Destroy the component, clean up state and remove event listeners.
   */
  destroy() {
    this.stopAutoUpdate(), this._clean(), _r(this.namespace), super.destroy();
  }
  _setState(t, e) {
    var o, a;
    let s = {
      event: t,
      x: t.pageX,
      y: t.pageY
    };
    const i = this._state;
    if (e) {
      const l = p(e), c = this._resolveStrategy(e), h = c === "transform" ? yn(e) : c === "scroll" ? { left: e.scrollLeft, top: e.scrollTop } : l.position(), d = e.getBoundingClientRect();
      s = p.extend(s, {
        strategy: c,
        target: e,
        startX: s.x,
        startY: s.y,
        deltaX: 0,
        deltaY: 0,
        startLeft: h.left,
        startTop: h.top,
        left: h.left,
        top: h.top,
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop,
        startClientLeft: d.left,
        startClientTop: d.top,
        width: d.width,
        height: d.height
      }), this._restTarget = e, this._restStrategy = c, this._syncAutoUpdateTargets();
    } else if (i) {
      const l = s.x - i.startX, c = s.y - i.startY;
      let h = i.startLeft + l, d = i.startTop + c;
      if (Ga.includes(i.strategy)) {
        const u = this._clampToContainer(i, l, c);
        u && (h = u.left, d = u.top);
      }
      s = p.extend({}, i, s, {
        deltaX: l,
        deltaY: c,
        left: h,
        top: d
      });
    }
    const r = (o = this.options.onChange) == null ? void 0 : o.call(this, s, i, t);
    return r === !1 ? !1 : (r && (s = p.extend(s, r)), this._state = s, this.update(s), (a = this.options.onMove) == null || a.call(this, t, s), !0);
  }
  /**
   * 更新移动状态。
   * Update the moveable state.
   *
   * @param state 移动状态。Moveable state.
   * @returns
   */
  update(t) {
    var a;
    if (t = t || this._state, !t) {
      this._reclampByOption();
      return;
    }
    const { strategy: e, target: s } = t, i = p(s);
    let r = {};
    e === "position" ? r.style = { left: t.left, top: t.top } : e === "transform" ? r.style = { transform: `translate(${t.left}px, ${t.top}px)` } : e === "scroll" && (r.scrollLeft = s.scrollLeft - t.deltaX, r.scrollTop = s.scrollTop - t.deltaY);
    const o = (a = this.options.onUpdate) == null ? void 0 : a.call(this, r, t);
    o !== !1 && (o && (r = p.extend(r, o)), r.style && i.css(r.style), r.scrollLeft !== void 0 && (s.scrollLeft = r.scrollLeft), r.scrollTop !== void 0 && (s.scrollTop = r.scrollTop));
  }
  /**
   * 清理移动状态：移除全局事件监听、移除 CSS 类名、重置内部状态。
   * Clean up move state: remove global event listeners, remove CSS classes, reset internal state.
   */
  _clean() {
    _r(this.namespace);
    const { hasMovingClass: t, movingClass: e } = this.options;
    t && this.$element.removeClass(t);
    const { moveElement: s } = this;
    if (s) {
      const i = p(s);
      e && i.removeClass(e);
    }
    this._raf = Pn(this._raf), this._state = void 0;
  }
  /**
   * 推断目标元素的移动策略：move 为 true 时按其定位方式自动判断，否则使用显式指定的策略。
   * Resolve the movement strategy for the target: auto-detect from its positioning when move is true, otherwise use the explicit strategy.
   *
   * @param target 目标 DOM 元素。The target DOM element.
   * @returns 移动策略。The movement strategy.
   */
  _resolveStrategy(t) {
    if (this.options.move === !0) {
      const e = p(t).css("position");
      return e === "fixed" || e === "absolute" ? "position" : "transform";
    }
    return this.options.move || "none";
  }
  /**
   * 解析 `container` 选项对应的元素（当可解析为 DOM 元素时）。
   * Resolve the element for the `container` option when it can be resolved to a DOM element.
   *
   * @returns 容器元素，无法解析为元素（如 window、普通对象、false）时返回 null。The container element, or null when it does not resolve to an element (e.g. window, a plain object, or false).
   */
  _getContainerElement() {
    return yo(this.options.container, this.element);
  }
  /**
   * 解析 `container` 选项对应的区域矩形（视口坐标），并按 `containerPadding` 收缩（负值则向外扩展）。
   * Resolve the area rect (in viewport coordinates) for the `container` option, shrunk by `containerPadding` (negative values expand it outward).
   *
   * @param target 用于解析 `containerPadding` 函数的目标元素。The target element passed to a `containerPadding` function.
   * @param state  用于解析 `containerPadding` 函数的移动状态。The move state passed to a `containerPadding` function.
   * @returns 区域矩形，无法解析或不限制时返回 null。The area rect, or null when unconstrained or unresolvable.
   */
  _getContainerRect(t, e) {
    return Qc(this.options.container, this._resolveContainerPadding(t, e), this.element);
  }
  /**
   * 解析 `containerPadding` 选项：为函数时以当前被移动元素与移动状态调用，否则原样返回。
   * Resolve the `containerPadding` option: call it with the currently moved element and move state when it is a function, otherwise return it as-is.
   *
   * @param target 目标元素，缺省时回退到最近移动的元素或根元素。The target element, falling back to the most recently moved element or the root element.
   * @param state  移动状态，缺省时回退到当前状态。The move state, falling back to the current state.
   * @returns 归一化前的边距值。The padding value before normalization.
   */
  _resolveContainerPadding(t, e) {
    const { containerPadding: s } = this.options;
    return typeof s == "function" ? s(t ?? this._restTarget ?? this.element, e ?? this._state) : s;
  }
  /**
   * 基于起始状态与累计位移，计算被区域限制修正后的 left/top（视口 1:1 位移）。
   * Compute the area-constrained left/top from the start state and accumulated displacement (1:1 viewport movement).
   *
   * @param state  起始移动状态。The starting move state.
   * @param deltaX x 方向累计位移。Accumulated x displacement.
   * @param deltaY y 方向累计位移。Accumulated y displacement.
   * @returns 修正后的 left/top，无区域限制时返回 null。The constrained left/top, or null when unconstrained.
   */
  _clampToContainer(t, e, s) {
    const i = this._getContainerRect(t.target, t);
    if (!i)
      return null;
    const { startClientLeft: r, startClientTop: o, width: a, height: l, startLeft: c, startTop: h } = t, d = Ce(r + e, i.left, i.right - a), u = Ce(o + s, i.top, i.bottom - l);
    return {
      left: c + (d - r),
      top: h + (u - o)
    };
  }
  /**
   * 将最近一次被移动的元素按当前区域限制重新夹取到最近合法位置（用于区域变更后手动调用 update）。
   * Re-clamp the most recently moved element to the nearest valid position under the current area constraint (used when update is called after the area changes).
   */
  _reclampRestTarget() {
    this._restTarget && this._restStrategy && this._reclampElement(this._restTarget, this._restStrategy);
  }
  /**
   * 按 autoUpdate 的 targets 设置选择重排范围：'all' 重排所有匹配 selector 的元素，否则仅重排最近移动的元素。
   * Choose the re-clamp scope by the autoUpdate targets setting: 'all' re-clamps every element matching the selector, otherwise only the most recently moved element.
   */
  _reclampByOption() {
    var t;
    ((t = this._resolveAutoUpdateOptions()) == null ? void 0 : t.targets) === "all" ? this._reclampAllTargets() : this._reclampRestTarget();
  }
  /**
   * 重排所有匹配 selector 的元素到当前区域限制内的最近合法位置。
   * Re-clamp every element matching the selector to the nearest valid position within the current area constraint.
   */
  _reclampAllTargets() {
    this._getContainerRect() && this._getMatchingTargets().forEach((t) => {
      this._reclampElement(t, this._resolveStrategy(t));
    });
  }
  /**
   * 将单个元素按区域限制重新夹取到最近合法位置。
   * Re-clamp a single element to the nearest valid position within the area constraint.
   *
   * @param target   目标元素。The target element.
   * @param strategy 移动策略。The movement strategy.
   * @param rect     预先解析的区域矩形，缺省时内部解析。A pre-resolved area rect; resolved internally when omitted.
   */
  _reclampElement(t, e, s) {
    if (!Ga.includes(e) || (s = s ?? this._getContainerRect(t), !s))
      return;
    const i = p(t), r = e === "transform" ? yn(t) : i.position(), o = t.getBoundingClientRect(), a = Ce(o.left, s.left, s.right - o.width), l = Ce(o.top, s.top, s.bottom - o.height);
    if (a === o.left && l === o.top)
      return;
    const c = r.left + (a - o.left), h = r.top + (l - o.top);
    this.update({
      strategy: e,
      target: t,
      startX: 0,
      startY: 0,
      deltaX: 0,
      deltaY: 0,
      startLeft: r.left,
      startTop: r.top,
      left: c,
      top: h,
      x: 0,
      y: 0,
      scrollLeft: t.scrollLeft,
      scrollTop: t.scrollTop,
      startClientLeft: o.left,
      startClientTop: o.top,
      width: o.width,
      height: o.height
    });
  }
  /**
   * 获取所有匹配 selector 的目标元素（selector 为 "self" 时返回根元素）。
   * Get all target elements matching the selector (returns the root element when selector is "self").
   *
   * @returns 目标元素数组。The array of target elements.
   */
  _getMatchingTargets() {
    return th(this.element, this.options.selector);
  }
  /**
   * 开启自动更新：监听容器区域与目标元素的尺寸/位置变化，自动按当前约束把最近移动的元素重排到最近合法位置。
   * 若已开启会先停止再重新开启。仅对 "position"/"transform" 策略生效。
   *
   * Start auto-updating: watch the container area and target size/position, and re-clamp the most recently moved element under the current constraint.
   * Restarts if already running. Only applies to the "position"/"transform" strategies.
   */
  startAutoUpdate() {
    this.stopAutoUpdate();
    const t = this._resolveAutoUpdateOptions();
    if (!t)
      return;
    if (!this._restTarget && this.options.selector === "self") {
      const r = this.element;
      this._restTarget = r, this._restStrategy = this._resolveStrategy(r);
    }
    const e = () => this._scheduleAutoUpdate();
    this._autoUpdateHandler = e, t.scroll !== !1 && window.addEventListener("scroll", e, { capture: !0, passive: !0 }), t.resize !== !1 && (window.addEventListener("resize", e), typeof ResizeObserver < "u" && (this._resizeObserver = new ResizeObserver(e))), this._syncAutoUpdateTargets();
    const { container: s } = this.options, i = !!s && typeof s == "object" && !(s instanceof Element);
    (t.animationFrame || t.animationFrame !== !1 && i) && this._startAutoUpdateFrameLoop();
  }
  /**
   * 停止自动更新，移除所有监听与观察器。
   * Stop auto-updating and remove all listeners and observers.
   */
  stopAutoUpdate() {
    const t = this._autoUpdateHandler;
    t && (window.removeEventListener("scroll", t, { capture: !0 }), window.removeEventListener("resize", t), this._autoUpdateHandler = void 0), this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = void 0), this._autoUpdateFrameLoop = !1, this._autoUpdateRaf && (cancelAnimationFrame(this._autoUpdateRaf), this._autoUpdateRaf = 0);
  }
  /**
   * 归一化 autoUpdate 选项。
   * Normalize the autoUpdate option.
   *
   * @returns 归一化后的配置，未开启时返回 null。The normalized config, or null when disabled.
   */
  _resolveAutoUpdateOptions() {
    const { autoUpdate: t } = this.options;
    return t ? t === !0 ? { resize: !0, scroll: !0 } : t : null;
  }
  /**
   * 让 ResizeObserver 观察当前容器元素与最近移动的目标元素（在目标变更后调用以保持同步）。
   * Make the ResizeObserver watch the current container element and the most recently moved target (called after the target changes to keep it in sync).
   */
  _syncAutoUpdateTargets() {
    var s;
    const t = this._resizeObserver;
    if (!t)
      return;
    t.disconnect();
    const e = this._getContainerElement();
    e && t.observe(e), ((s = this._resolveAutoUpdateOptions()) == null ? void 0 : s.targets) === "all" ? this._getMatchingTargets().forEach((i) => t.observe(i)) : this._restTarget && t.observe(this._restTarget);
  }
  /**
   * 通过动画帧节流触发一次重排（避免同一帧内多次监听回调重复计算）。
   * Throttle a single re-clamp via an animation frame (avoids redundant work when multiple listeners fire in the same frame).
   */
  _scheduleAutoUpdate() {
    this._autoUpdateRaf || (this._autoUpdateRaf = requestAnimationFrame(() => {
      this._autoUpdateRaf = 0, !this._state && this._reclampByOption();
    }));
  }
  /**
   * 启动 animationFrame 轮询循环，每帧按当前约束重排（用于无法被观察的容器）。
   * Start the animationFrame polling loop that re-clamps every frame under the current constraint (for containers that cannot be observed).
   */
  _startAutoUpdateFrameLoop() {
    this._autoUpdateFrameLoop = !0;
    const t = () => {
      this._autoUpdateFrameLoop && (this._state || this._reclampByOption(), this._autoUpdateRaf = requestAnimationFrame(t));
    };
    this._autoUpdateRaf = requestAnimationFrame(t);
  }
  /**
   * 将 containerPadding 归一化为四边数值。允许负值，不做非负约束。
   * Normalize containerPadding into four side values. Negative values are allowed.
   *
   * @param padding 边距设置。The padding setting.
   * @returns 四边数值。The four side values.
   */
  static normalizePadding(t) {
    return Jc(t);
  }
  /**
   * 将数值夹取到 [min, max] 区间；当 min > max（元素大于区域）时对齐到 min。
   * Clamp a value into [min, max]; aligns to min when min > max (element larger than area).
   *
   * @param value 待夹取的数值。The value to clamp.
   * @param min   下界。The lower bound.
   * @param max   上界。The upper bound.
   * @returns 夹取后的数值。The clamped value.
   */
  static clamp(t, e, s) {
    return Ce(t, e, s);
  }
  /**
   * 从元素的 computed transform 中解析 translate 偏移量。
   * Parse the translate offset from an element's computed transform matrix.
   *
   * @param element 目标 DOM 元素。The target DOM element.
   * @returns 包含 left 和 top 偏移量的对象。Object with left and top offsets.
   */
  static getTranslate(t) {
    return yn(t);
  }
}
Xs.NAME = "Moveable";
Xs.DEFAULT = {
  selector: dp,
  hasMovingClass: "has-moving",
  movingClass: "is-moving",
  move: !0,
  container: "window"
};
const nh = '[resizable="true"]', ih = "resizable-handle", Hi = "is-resizing", Wi = `.${ih}`, qa = "z-resizable-generated", Ya = ["n", "e", "s", "w", "ne", "nw", "se", "sw"], vo = class rh extends it {
  constructor() {
    super(...arguments), this._raf = 0, this._handleMouseDown = (t) => {
      const { options: e } = this, { selector: s, onResizeStart: i } = e, o = p(t.target).closest(Wi), a = o[0];
      if (!a)
        return;
      const l = p(a).z("dir");
      if (!rh.isDirection(l))
        return;
      this._state && this._clean();
      const c = s === "self" ? this.$element : o.closest(s || nh), h = c[0];
      if (!h || i && i.call(this, t, h, l) === !1)
        return;
      const { hasResizingClass: d, resizingClass: u } = e;
      if (u && c.addClass(u), d && this.$element.addClass(d), p(a).addClass(Hi), this._activeHandle = a, t.preventDefault(), !this._setState(t, h, l)) {
        u && c.removeClass(u), d && this.$element.removeClass(d), p(a).removeClass(Hi), this._activeHandle = void 0;
        return;
      }
      eh(this.namespace, this._handleMouseMove, this._handleMouseUp);
    }, this._handleMouseMove = (t) => {
      !this._state || !t.buttons || (t.preventDefault(), this._raf = sh(this._raf, () => {
        this._raf = 0, this._setState(t);
      }));
    }, this._handleMouseUp = (t) => {
      var e;
      this._state && (t.preventDefault(), this._raf = Pn(this._raf), this._setState(t), (e = this.options.onResizeEnd) == null || e.call(this, t, this._state), this._clean());
    };
  }
  /** 获取当前缩放状态。Get the current resize state. */
  get state() {
    return this._state;
  }
  /** 获取正在被调整尺寸的目标元素。Get the element currently being resized. */
  get resizeElement() {
    var t;
    return (t = this._runtime) == null ? void 0 : t.target;
  }
  /** 获取所有缩放手柄元素。Get all resize handle elements. */
  get handles() {
    return this.$element.find(Wi);
  }
  /**
   * 初始化：生成手柄并绑定 mousedown 事件。
   * Initialize: create handles and bind the mousedown event.
   */
  async afterInit() {
    this.refresh(), this.on("mousedown", this._handleMouseDown), this.$element.addClass("resizable");
  }
  /**
   * 刷新自动生成的缩放手柄。
   * Refresh generated resize handles.
   */
  refresh() {
    this._removeGeneratedHandles(), this._getMatchingTargets().forEach((t) => {
      const e = p(t);
      Ya.forEach((s) => {
        e.append(`<div class="${ih}" z-dir="${s}" ${qa}="true"></div>`);
      });
    });
  }
  /**
   * 销毁组件，清理状态、移除自动生成的手柄与事件监听。
   * Destroy the component, clean up state, remove generated handles and event listeners.
   */
  destroy() {
    this._clean(), this._removeGeneratedHandles(), this.$element.off(this.namespace), super.destroy();
  }
  /**
   * 设置缩放状态并触发样式更新。
   * Set the resize state and trigger style update.
   */
  _setState(t, e, s) {
    var a, l;
    const i = this._state;
    let r;
    if (e && s) {
      const c = e.getBoundingClientRect(), h = yn(e), d = hp(e);
      this._runtime = {
        target: e,
        startWidth: c.width,
        startHeight: c.height,
        startClientLeft: c.left,
        startClientTop: c.top,
        startClientRight: c.right,
        startClientBottom: c.bottom,
        anchorRight: d.anchorRight,
        anchorBottom: d.anchorBottom
      }, r = {
        event: t,
        direction: s,
        startX: t.pageX,
        startY: t.pageY,
        x: t.pageX,
        y: t.pageY,
        startLeft: h.left,
        startTop: h.top
      };
    } else if (i)
      r = p.extend({}, i, {
        event: t,
        x: t.pageX,
        y: t.pageY
      });
    else
      return !1;
    const o = (a = this.options.onChange) == null ? void 0 : a.call(this, r, i, t);
    return o === !1 ? (e && (this._runtime = void 0), !1) : (o && (r = p.extend(r, o)), this._state = r, this.update(r), (l = this.options.onResize) == null || l.call(this, t, r), !0);
  }
  /**
   * 更新目标元素尺寸与位置。
   * Update the target element size and position.
   */
  update(t) {
    var o;
    t = t || this._state;
    const e = this._runtime;
    if (!t || !e)
      return;
    const s = this._getResizeRect(t);
    let i = {
      style: {
        width: s.width,
        height: s.height,
        transform: `translate(${s.left}px, ${s.top}px)`
      }
    };
    const r = (o = this.options.onUpdate) == null ? void 0 : o.call(this, i, t);
    r !== !1 && (r && (i = p.extend(i, r)), i.style && p(e.target).css(i.style));
  }
  /**
   * 清理缩放状态：移除文档事件、类名、动画帧与状态。
   * Clean up resize state: remove document events, classes, animation frame and state.
   */
  _clean() {
    _r(this.namespace);
    const { hasResizingClass: t, resizingClass: e } = this.options;
    t && this.$element.removeClass(t);
    const { resizeElement: s } = this;
    s && e && p(s).removeClass(e), this._activeHandle && (p(this._activeHandle).removeClass(Hi), this._activeHandle = void 0), this._raf = Pn(this._raf), this._state = void 0, this._runtime = void 0;
  }
  /**
   * 根据当前状态计算尺寸和 transform 偏移。
   * Compute size and transform offsets from the current state.
   */
  _getResizeRect(t) {
    const e = this._runtime, { direction: s } = t, i = t.x - t.startX, r = t.y - t.startY, o = this._getContainerRect(e.target, t), a = this._resizeAxis({
      edge: s.includes("w") ? "start" : s.includes("e") ? "end" : "none",
      startMin: e.startClientLeft,
      startMax: e.startClientRight,
      delta: i,
      minSize: this.options.minWidth ?? 0,
      maxSize: this.options.maxWidth ?? Number.POSITIVE_INFINITY,
      bounds: o ? { min: o.left, max: o.right } : void 0
    }), l = this._resizeAxis({
      edge: s.includes("n") ? "start" : s.includes("s") ? "end" : "none",
      startMin: e.startClientTop,
      startMax: e.startClientBottom,
      delta: r,
      minSize: this.options.minHeight ?? 0,
      maxSize: this.options.maxHeight ?? Number.POSITIVE_INFINITY,
      bounds: o ? { min: o.top, max: o.bottom } : void 0
    });
    return {
      width: a.max - a.min,
      height: l.max - l.min,
      // 以 right/bottom 定位时，改变尺寸会让盒子朝反方向生长，此时锚定另一条边来补偿 translate。
      // For right/bottom-anchored targets the box grows in the opposite direction, so compensate translate against the anchored edge.
      left: e.anchorRight ? t.startLeft + a.max - e.startClientRight : t.startLeft + a.min - e.startClientLeft,
      top: e.anchorBottom ? t.startTop + l.max - e.startClientBottom : t.startTop + l.min - e.startClientTop
    };
  }
  /**
   * 单轴计算尺寸边缘，先应用最小/最大尺寸，再应用容器限制。
   * Compute one axis edge, applying min/max size first and then container bounds.
   */
  _resizeAxis(t) {
    const { edge: e, startMin: s, startMax: i, delta: r, bounds: o } = t, a = Math.max(0, t.minSize), l = Math.max(a, t.maxSize);
    let c = s, h = i;
    if (e === "start") {
      c = s + r;
      const d = Ce(h - c, a, l);
      c = h - d;
    } else if (e === "end") {
      h = i + r;
      const d = Ce(h - c, a, l);
      h = c + d;
    }
    if (o)
      if (e === "start")
        c = Math.max(c, o.min), h = Math.min(h, o.max), h - c < a && (c = Math.max(o.min, h - a));
      else if (e === "end")
        c = Math.max(c, o.min), h = Math.min(h, o.max), h - c < a && (h = Math.min(o.max, c + a));
      else {
        const d = h - c;
        c = Ce(c, o.min, o.max - d), h = c + d;
      }
    return h < c && (h = c), { min: c, max: h };
  }
  /**
   * 解析 `container` 选项对应的元素（当可解析为 DOM 元素时）。
   * Resolve the element for the `container` option when it can be resolved to a DOM element.
   */
  _getContainerElement() {
    return yo(this.options.container, this.element);
  }
  /**
   * 解析 `container` 选项对应的区域矩形（视口坐标），并按 `containerPadding` 收缩。
   * Resolve the area rect for the `container` option, shrunk by `containerPadding`.
   *
   * @param target 用于解析 `containerPadding` 函数的目标元素。The target element passed to a `containerPadding` function.
   * @param state  用于解析 `containerPadding` 函数的调整状态。The resize state passed to a `containerPadding` function.
   */
  _getContainerRect(t, e) {
    return Qc(this.options.container, this._resolveContainerPadding(t, e), this.element);
  }
  /**
   * 解析 `containerPadding` 选项：为函数时以当前被调整尺寸的元素与调整状态调用，否则原样返回。
   * Resolve the `containerPadding` option: call it with the element being resized and the resize state when it is a function, otherwise return it as-is.
   *
   * @param target 目标元素，缺省时回退到当前被调整尺寸的元素或根元素。The target element, falling back to the element being resized or the root element.
   * @param state  调整状态，缺省时回退到当前状态。The resize state, falling back to the current state.
   * @returns 归一化前的边距值。The padding value before normalization.
   */
  _resolveContainerPadding(t, e) {
    var i;
    const { containerPadding: s } = this.options;
    return typeof s == "function" ? s(t ?? ((i = this._runtime) == null ? void 0 : i.target) ?? this.element, e ?? this._state) : s;
  }
  /**
   * 获取所有匹配 selector 的目标元素（selector 为 "self" 时返回根元素）。
   * Get all target elements matching selector (returns the root element when selector is "self").
   */
  _getMatchingTargets() {
    return th(this.element, this.options.selector);
  }
  /**
   * 移除自动生成的缩放手柄。
   * Remove generated resize handles.
   */
  _removeGeneratedHandles() {
    this.$element.find(`${Wi}[${qa}]`).each((t, e) => {
      e.remove();
    });
  }
  /**
   * 判断值是否为合法方向。
   * Check whether a value is a valid direction.
   */
  static isDirection(t) {
    return typeof t == "string" && Ya.includes(t);
  }
};
vo.NAME = "Resizable";
vo.DEFAULT = {
  selector: nh,
  hasResizingClass: "has-resizing",
  resizingClass: "is-resizing",
  container: "window",
  minWidth: 0,
  minHeight: 0
};
let P_ = vo;
var oe;
class up {
  constructor(t = "") {
    rn(this, oe, void 0);
    typeof t == "object" ? ve(this, oe, t) : ve(this, oe, document.appendChild(document.createComment(t)));
  }
  on(t, e, s) {
    Yt(this, oe).addEventListener(t, e, s);
  }
  once(t, e, s) {
    Yt(this, oe).addEventListener(t, e, { once: !0, ...s });
  }
  off(t, e, s) {
    Yt(this, oe).removeEventListener(t, e, s);
  }
  emit(t) {
    return Yt(this, oe).dispatchEvent(t), t;
  }
}
oe = new WeakMap();
const Za = /* @__PURE__ */ new Set([
  "click",
  "dblclick",
  "mouseup",
  "mousedown",
  "contextmenu",
  "mousewheel",
  "DOMMouseScroll",
  "mouseover",
  "mouseout",
  "mousemove",
  "selectstart",
  "selectend",
  "keydown",
  "keypress",
  "keyup",
  "orientationchange",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointerleave",
  "pointercancel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "focus",
  "blur",
  "change",
  "reset",
  "select",
  "submit",
  "focusin",
  "focusout",
  "load",
  "unload",
  "beforeunload",
  "resize",
  "move",
  "DOMContentLoaded",
  "readystatechange",
  "error",
  "abort",
  "scroll"
]);
class oh extends up {
  on(t, e, s) {
    super.on(t, e, s);
  }
  off(t, e, s) {
    super.off(t, e, s);
  }
  once(t, e, s) {
    super.once(t, e, s);
  }
  emit(t, e) {
    return typeof t == "string" && (Za.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), super.emit(oh.createEvent(t, e));
  }
  static createEvent(t, e) {
    return typeof t == "string" && (Za.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), t;
  }
}
const bo = class ah extends it {
  get module() {
    return this._module;
  }
  async afterInit() {
    const t = await ah.loadModule(), { options: e } = this;
    if (e.dragShadow !== void 0 && e.dragShadow !== !0) {
      const { dragShadow: s, onEnd: i, setData: r } = e;
      e.setData = (o, a) => {
        s === !1 && !this._emptyShadow && (this._emptyShadow = a.cloneNode(!0), this._emptyShadow.classList.add("sortable-empty-shadow"), document.body.appendChild(this._emptyShadow)), o.setDragImage(s === !1 ? this._emptyShadow : s, 0, 0), r == null || r(o, a);
      }, e.onEnd = (o) => {
        var a;
        i == null || i(o), (a = this._emptyShadow) == null || a.remove(), this._emptyShadow = void 0;
      }, delete e.dragShadow;
    }
    this._module = new t(this.element, e);
  }
  option(t, e) {
    var s, i;
    if (e === void 0)
      return (s = this._module) == null ? void 0 : s.option(t);
    (i = this._module) == null || i.option(t, e);
  }
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param element an HTMLElement or selector string.
   * @param selector default: `options.draggable`
   */
  closest(t, e) {
    return this._module.closest(t, e);
  }
  /**
   * Sorts the elements according to the array.
   * @param order an array of strings to sort.
   * @param useAnimation default: false.
   */
  sort(t, e) {
    this._module.sort(t, e);
  }
  /**
   * Saving and restoring of the sort.
   */
  save() {
    this._module.save();
  }
  /**
   * Removes the sortable functionality completely.
   */
  destroy() {
    var t;
    super.destroy(), (t = this._module) == null || t.destroy(), this._module = void 0;
  }
  /**
   * Serializes the sortable's item data-id's (dataIdAttr option) into an array of string.
   */
  toArray() {
    return this._module.toArray();
  }
  static async loadModule() {
    return this.Module || (this.Module = await p.getLib("sortablejs")), this.Module;
  }
};
bo.NAME = "Sortable";
bo.DEFAULT = {
  animation: 150
};
let lh = bo;
p.registerLib("sortablejs", {
  src: "sortable/sortable.min.js",
  check: "Sortable"
});
let wo = class extends yt {
  componentDidMount() {
    super.componentDidMount();
    const t = this._getSortableOptions();
    t && (this._sortable = new lh(this.element, t));
  }
  componentWillUnmount() {
    this._sortable && this._sortable.destroy();
  }
  getOrders() {
    var t;
    return ((t = this._sortable) == null ? void 0 : t.toArray()) || [];
  }
  _getClassName(t) {
    return [super._getClassName(t), "sortable-list"];
  }
  _getSortableOptions() {
    const { sortable: t, canSortTo: e } = this.props;
    if (!t)
      return;
    const s = typeof t == "object" ? t : {};
    return {
      group: `SortableList.${this.gid}`,
      dataIdAttr: "z-key",
      draggable: ".list-item",
      ...s,
      onSort: (i) => {
        var o, a;
        const r = this.getOrders();
        (o = this.props.onSort) == null || o.call(this, i, r), (a = s.onSort) == null || a.call(this, i);
      },
      onMove: (i, r) => {
        var o;
        if (e) {
          const a = i.dragged.getAttribute("z-key-path"), l = i.related.getAttribute("z-key-path"), c = this.getItem(a), h = this.getItem(l), d = e.call(this, i, c, h);
          if (d !== void 0)
            return d;
        }
        return (o = s.onMove) == null ? void 0 : o.call(this, i, r);
      }
    };
  }
};
wo.defaultProps = {
  ...yt.defaultProps,
  sortable: !0
};
let qt = class extends At {
  _getClassName(t) {
    return [super._getClassName(t), t.lines ? "tree-lines" : ""];
  }
  _getItem(t, e, s) {
    return this.constructor.getTreeItem(t, super._getItem(t, e, s));
  }
  static getTreeItem(t, e) {
    return e && (e.type === "item" && (e.icon === void 0 && (e.icon = e.items ? e.expanded ? t.expandedIcon : t.collapsedIcon : t.normalIcon), e.actions === void 0 && (e.actions = t.itemActions)), e);
  }
};
qt.NAME = "tree";
qt.defaultProps = {
  ...At.defaultProps,
  indent: 12
};
qt.defaultItemProps = {
  ...At.defaultItemProps,
  innerComponent: "div"
};
qt.inheritNestedProps = [...At.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
let vs = class extends Pt {
  _getClassName(t) {
    return [super._getClassName(t), t.lines ? "tree-lines" : ""];
  }
  _getItem(t, e, s) {
    return qt.getTreeItem(t, super._getItem(t, e, s));
  }
};
vs.NAME = "tree";
vs.inheritNestedProps = [...Pt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
vs.ItemComponents = {
  ...Pt.ItemComponents,
  item: [Me, { innerComponent: "div" }]
};
const fp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SearchTree: vs,
  Tree: qt
}, Symbol.toStringTag, { value: "Module" }));
let fi = class extends qt {
  componentDidMount() {
    super.componentDidMount();
    const t = this._getSortableOptions();
    t && (this._sortable = new lh(this.element, t));
  }
  componentWillUnmount() {
    this._sortable && this._sortable.destroy();
  }
  getOrders() {
    var t;
    return ((t = this._sortable) == null ? void 0 : t.toArray()) || [];
  }
  _getClassName(t) {
    return [super._getClassName(t), "sortable-tree"];
  }
  _getSortableOptions() {
    const { sortable: t } = this.props;
    if (!t)
      return;
    const e = typeof t == "object" ? t : {}, { onSort: s, canSortTo: i, parentKey: r } = this.props;
    return {
      group: `SortableTree.${this.gid}`,
      dataIdAttr: "z-key",
      draggable: ".tree-item",
      ...e,
      onSort: (o) => {
        var l;
        const a = this.getOrders();
        s == null || s.call(this, o, a, r), (l = e.onSort) == null || l.call(this, o);
      },
      onMove: (o, a) => {
        var l;
        if (i) {
          const c = o.dragged.getAttribute("z-key-path"), h = o.related.getAttribute("z-key-path"), d = this.getItem(c), u = this.getItem(h), f = i.call(this, o, d, u, r);
          if (f !== void 0)
            return f;
        }
        return (l = e.onMove) == null ? void 0 : l.call(this, o, a);
      }
    };
  }
};
fi.defaultProps = {
  ...qt.defaultProps,
  sortable: !0
};
fi.inheritNestedProps = [...qt.inheritNestedProps, "onSort", "sortable", "canSortTo"];
class Co extends W {
}
Co.NAME = "SortableList";
Co.Component = wo;
Co.replace = wo.TAG;
class So extends W {
}
So.NAME = "SortableTree";
So.Component = fi;
So.replace = fi.TAG;
var It = typeof window < "u" ? window : null, ko = It === null, Ws = ko ? void 0 : It.document, zt = "addEventListener", Ft = "removeEventListener", Bi = "getBoundingClientRect", Ts = "_a", Ot = "_b", ne = "_c", ln = "horizontal", Ht = function() {
  return !1;
}, pp = ko ? "calc" : ["", "-webkit-", "-moz-", "-o-"].filter(function(n) {
  var t = Ws.createElement("div");
  return t.style.cssText = "width:" + n + "calc(9px)", !!t.style.length;
}).shift() + "calc", ch = function(n) {
  return typeof n == "string" || n instanceof String;
}, Ja = function(n) {
  if (ch(n)) {
    var t = Ws.querySelector(n);
    if (!t)
      throw new Error("Selector " + n + " did not match a DOM element");
    return t;
  }
  return n;
}, _t = function(n, t, e) {
  var s = n[t];
  return s !== void 0 ? s : e;
}, cn = function(n, t, e, s) {
  if (t) {
    if (s === "end")
      return 0;
    if (s === "center")
      return n / 2;
  } else if (e) {
    if (s === "start")
      return 0;
    if (s === "center")
      return n / 2;
  }
  return n;
}, mp = function(n, t) {
  var e = Ws.createElement("div");
  return e.className = "gutter gutter-" + t, e;
}, gp = function(n, t, e) {
  var s = {};
  return ch(t) ? s[n] = t : s[n] = pp + "(" + t + "% - " + e + "px)", s;
}, _p = function(n, t) {
  var e;
  return e = {}, e[n] = t + "px", e;
}, hh = function(n, t) {
  if (t === void 0 && (t = {}), ko)
    return {};
  var e = n, s, i, r, o, a, l;
  Array.from && (e = Array.from(e));
  var c = Ja(e[0]), h = c.parentNode, d = getComputedStyle ? getComputedStyle(h) : null, u = d ? d.flexDirection : null, f = _t(t, "sizes") || e.map(function() {
    return 100 / e.length;
  }), g = _t(t, "minSize", 100), _ = Array.isArray(g) ? g : e.map(function() {
    return g;
  }), y = _t(t, "maxSize", 1 / 0), v = Array.isArray(y) ? y : e.map(function() {
    return y;
  }), b = _t(t, "expandToMin", !1), w = _t(t, "gutterSize", 10), C = _t(t, "gutterAlign", "center"), k = _t(t, "snapOffset", 30), $ = Array.isArray(k) ? k : e.map(function() {
    return k;
  }), N = _t(t, "dragInterval", 1), A = _t(t, "direction", ln), I = _t(
    t,
    "cursor",
    A === ln ? "col-resize" : "row-resize"
  ), F = _t(t, "gutter", mp), T = _t(
    t,
    "elementStyle",
    gp
  ), L = _t(t, "gutterStyle", _p);
  A === ln ? (s = "width", i = "clientX", r = "left", o = "right", a = "clientWidth") : A === "vertical" && (s = "height", i = "clientY", r = "top", o = "bottom", a = "clientHeight");
  function V(D, x, M, z) {
    var pt = T(s, x, M, z);
    Object.keys(pt).forEach(function(at) {
      D.style[at] = pt[at];
    });
  }
  function B(D, x, M) {
    var z = L(s, x, M);
    Object.keys(z).forEach(function(pt) {
      D.style[pt] = z[pt];
    });
  }
  function K() {
    return l.map(function(D) {
      return D.size;
    });
  }
  function X(D) {
    return "touches" in D ? D.touches[0][i] : D[i];
  }
  function Z(D) {
    var x = l[this.a], M = l[this.b], z = x.size + M.size;
    x.size = D / this.size * z, M.size = z - D / this.size * z, V(x.element, x.size, this[Ot], x.i), V(M.element, M.size, this[ne], M.i);
  }
  function R(D) {
    var x, M = l[this.a], z = l[this.b];
    this.dragging && (x = X(D) - this.start + (this[Ot] - this.dragOffset), N > 1 && (x = Math.round(x / N) * N), x <= M.minSize + M.snapOffset + this[Ot] ? x = M.minSize + this[Ot] : x >= this.size - (z.minSize + z.snapOffset + this[ne]) && (x = this.size - (z.minSize + this[ne])), x >= M.maxSize - M.snapOffset + this[Ot] ? x = M.maxSize + this[Ot] : x <= this.size - (z.maxSize - z.snapOffset + this[ne]) && (x = this.size - (z.maxSize + this[ne])), Z.call(this, x), _t(t, "onDrag", Ht)(K()));
  }
  function ft() {
    var D = l[this.a].element, x = l[this.b].element, M = D[Bi](), z = x[Bi]();
    this.size = M[s] + z[s] + this[Ot] + this[ne], this.start = M[r], this.end = M[o];
  }
  function $s(D) {
    if (!getComputedStyle)
      return null;
    var x = getComputedStyle(D);
    if (!x)
      return null;
    var M = D[a];
    return M === 0 ? null : (A === ln ? M -= parseFloat(x.paddingLeft) + parseFloat(x.paddingRight) : M -= parseFloat(x.paddingTop) + parseFloat(x.paddingBottom), M);
  }
  function ha(D) {
    var x = $s(h);
    if (x === null || _.reduce(function(at, St) {
      return at + St;
    }, 0) > x)
      return D;
    var M = 0, z = [], pt = D.map(function(at, St) {
      var Oe = x * at / 100, sn = cn(
        w,
        St === 0,
        St === D.length - 1,
        C
      ), nn = _[St] + sn;
      return Oe < nn ? (M += nn - Oe, z.push(0), nn) : (z.push(Oe - nn), Oe);
    });
    return M === 0 ? D : pt.map(function(at, St) {
      var Oe = at;
      if (M > 0 && z[St] - M > 0) {
        var sn = Math.min(
          M,
          z[St] - M
        );
        M -= sn, Oe = at - sn;
      }
      return Oe / x * 100;
    });
  }
  function Ld() {
    var D = this, x = l[D.a].element, M = l[D.b].element;
    D.dragging && _t(t, "onDragEnd", Ht)(K()), D.dragging = !1, It[Ft]("mouseup", D.stop), It[Ft]("touchend", D.stop), It[Ft]("touchcancel", D.stop), It[Ft]("mousemove", D.move), It[Ft]("touchmove", D.move), D.stop = null, D.move = null, x[Ft]("selectstart", Ht), x[Ft]("dragstart", Ht), M[Ft]("selectstart", Ht), M[Ft]("dragstart", Ht), x.style.userSelect = "", x.style.webkitUserSelect = "", x.style.MozUserSelect = "", x.style.pointerEvents = "", M.style.userSelect = "", M.style.webkitUserSelect = "", M.style.MozUserSelect = "", M.style.pointerEvents = "", D.gutter.style.cursor = "", D.parent.style.cursor = "", Ws.body.style.cursor = "";
  }
  function Pd(D) {
    if (!("button" in D && D.button !== 0)) {
      var x = this, M = l[x.a].element, z = l[x.b].element;
      x.dragging || _t(t, "onDragStart", Ht)(K()), D.preventDefault(), x.dragging = !0, x.move = R.bind(x), x.stop = Ld.bind(x), It[zt]("mouseup", x.stop), It[zt]("touchend", x.stop), It[zt]("touchcancel", x.stop), It[zt]("mousemove", x.move), It[zt]("touchmove", x.move), M[zt]("selectstart", Ht), M[zt]("dragstart", Ht), z[zt]("selectstart", Ht), z[zt]("dragstart", Ht), M.style.userSelect = "none", M.style.webkitUserSelect = "none", M.style.MozUserSelect = "none", M.style.pointerEvents = "none", z.style.userSelect = "none", z.style.webkitUserSelect = "none", z.style.MozUserSelect = "none", z.style.pointerEvents = "none", x.gutter.style.cursor = I, x.parent.style.cursor = I, Ws.body.style.cursor = I, ft.call(x), x.dragOffset = X(D) - x.end;
    }
  }
  f = ha(f);
  var Fe = [];
  l = e.map(function(D, x) {
    var M = {
      element: Ja(D),
      size: f[x],
      minSize: _[x],
      maxSize: v[x],
      snapOffset: $[x],
      i: x
    }, z;
    if (x > 0 && (z = {
      a: x - 1,
      b: x,
      dragging: !1,
      direction: A,
      parent: h
    }, z[Ot] = cn(
      w,
      x - 1 === 0,
      !1,
      C
    ), z[ne] = cn(
      w,
      !1,
      x === e.length - 1,
      C
    ), u === "row-reverse" || u === "column-reverse")) {
      var pt = z.a;
      z.a = z.b, z.b = pt;
    }
    if (x > 0) {
      var at = F(x, A, M.element);
      B(at, w, x), z[Ts] = Pd.bind(z), at[zt](
        "mousedown",
        z[Ts]
      ), at[zt](
        "touchstart",
        z[Ts]
      ), h.insertBefore(at, M.element), z.gutter = at;
    }
    return V(
      M.element,
      M.size,
      cn(
        w,
        x === 0,
        x === e.length - 1,
        C
      ),
      x
    ), x > 0 && Fe.push(z), M;
  });
  function da(D) {
    var x = D.i === Fe.length, M = x ? Fe[D.i - 1] : Fe[D.i];
    ft.call(M);
    var z = x ? M.size - D.minSize - M[ne] : D.minSize + M[Ot];
    Z.call(M, z);
  }
  l.forEach(function(D) {
    var x = D.element[Bi]()[s];
    x < D.minSize && (b ? da(D) : D.minSize = x);
  });
  function Rd(D) {
    var x = ha(D);
    x.forEach(function(M, z) {
      if (z > 0) {
        var pt = Fe[z - 1], at = l[pt.a], St = l[pt.b];
        at.size = x[z - 1], St.size = M, V(at.element, at.size, pt[Ot], at.i), V(St.element, St.size, pt[ne], St.i);
      }
    });
  }
  function zd(D, x) {
    Fe.forEach(function(M) {
      if (x !== !0 ? M.parent.removeChild(M.gutter) : (M.gutter[Ft](
        "mousedown",
        M[Ts]
      ), M.gutter[Ft](
        "touchstart",
        M[Ts]
      )), D !== !0) {
        var z = T(
          s,
          M.a.size,
          M[Ot]
        );
        Object.keys(z).forEach(function(pt) {
          l[M.a].element.style[pt] = "", l[M.b].element.style[pt] = "";
        });
      }
    });
  }
  return {
    setSizes: Rd,
    getSizes: K,
    collapse: function(x) {
      da(l[x]);
    },
    destroy: zd,
    parent: h,
    pairs: Fe
  };
};
function Xa(n, t, e, s) {
  for (t = t - (e - 1) * s; n.length < e; )
    n.push(void 0);
  n = n.splice(0, e);
  const i = [], r = [];
  let o = 0;
  if (n.forEach((a, l) => {
    if (a == null) {
      r.push(l);
      return;
    }
    const [c, h] = me(a);
    if (Number.isNaN(c)) {
      r.push(l);
      return;
    }
    const d = h === "%" ? t * c / 100 : c;
    o += d, i[l] = d;
  }), r.length) {
    const a = Math.max(1, (t - o) / r.length);
    r.forEach((l) => {
      i[l] = a, o += a;
    });
  }
  return i.map((a) => 100 * a / o);
}
class xo extends it {
  constructor() {
    super(...arguments), this._sizeBack = [];
  }
  get count() {
    return this._elements.length;
  }
  get isVertical() {
    return this.options.direction === "vertical" || !!this.options.vertical;
  }
  get totalSize() {
    return this.$element[this.isVertical ? "height" : "width"]();
  }
  isCollapsed(t) {
    return p(this._elements[t])[this.isVertical ? "height" : "width"]() < 1;
  }
  /**
   * setSizes behaves the same as the sizes configuration option, passing an array of percents or CSS values.
   * It updates the sizes of the elements in the split.
   *
   * @param sizes Sizes of the elements in the split.
   */
  setSizes(t, e) {
    e || (t = Xa(t, this.totalSize, this.count, this.options.gutterSize)), this._split.setSizes(t), this._update();
  }
  /**
   * getSizes returns an array of percents, suitable for using with setSizes or creation.
   *
   * @returns An array of percents, suitable for using with setSizes or creation.
   */
  getSizes() {
    return this._split.getSizes();
  }
  /**
   * collapse changes the size of element at index to 0.
   * Every element except the last is collapsed towards the front (left or top).
   * The last is collapsed towards the back.
   *
   * @param index Index of the element to collapse.
   */
  collapse(t) {
    this._sizeBack[t] = this.getSizes(), this._split.collapse(t), this._update();
  }
  expand(t) {
    const e = this.getSizes(), s = this._sizeBack[t];
    if (s) {
      e[t] = s[t];
      const i = t === this.count - 1 ? t - 1 : t + 1;
      e[i] = s[i];
    } else
      e[t] = 50;
    this.setSizes(e);
  }
  toggle(t) {
    this.isCollapsed(t) ? this.expand(t) : this.collapse(t);
  }
  afterInit() {
    const { elements: t = ".split-cell", toggleBtn: e, vertical: s, sizes: i, gutterSize: r = 8, animation: o, dblClickToggle: a, ...l } = this.options, c = (Array.isArray(t) ? t : [t]).reduce((u, f) => (f && (f instanceof HTMLElement ? u.push(f) : (typeof f == "string" ? this.$element.children(f) : p(f)).each((g, _) => {
      u.push(_);
    })), u), []);
    c.forEach((u) => p(u).addClass("split-cell")), this._elements = c, this._handleDragEnd = this._handleDragEnd.bind(this), this._createGutter = this._createGutter.bind(this);
    let h;
    i && (h = Xa(i, this.totalSize, c.length, r)), this._split = hh(c, {
      direction: s ? "vertical" : "horizontal",
      sizes: h,
      gutterSize: r,
      ...l,
      onDragEnd: this._handleDragEnd,
      gutter: this._createGutter
    });
    const d = (u) => {
      const f = u.z("index"), { count: g } = this;
      this.toggle(f === g - 1 && g > 2 ? f : f - 1);
    };
    e && this.on("click", (u) => {
      const f = p(u.target).closest(".gutter-toggle");
      f.length && d(f.parent());
    }), a && this.on("dblclick", (u) => {
      const f = p(u.target).closest(".gutter");
      f.length && d(f);
    }), o && this.on("transitionend", this._update.bind(this, !1)), this._update();
  }
  /**
   * Destroy the instance. It removes the gutter elements, and the size CSS styles Split.js set.
   *
   * @param preserveStyles   Whether to preserve styles.
   * @param preserveGutters  Whether to preserve gutters.
   */
  destroy(t, e) {
    return super.destroy(), this.off("click transitionend"), this._raf && cancelAnimationFrame(this._raf), this._split.destroy(t, e);
  }
  render() {
    super.render(), this._update();
  }
  _update(t) {
    if (!t) {
      this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
        this._raf = 0, this._update(!0);
      });
      return;
    }
    const { animation: e, vertical: s, gutterSize: i } = this.options, r = this.isVertical || !!s;
    this.$element.css("--split-gutter-size", `${i}px`).toggleClass("split-vert", r).toggleClass("split-horz", !r).toggleClass("has-animation", !!e), this._elements.forEach((o, a) => {
      const l = this.isCollapsed(a), c = p(this._elements[a]).toggleClass("is-collapsed", l);
      c.prev(".gutter").toggleClass("is-next-collapsed", l), c.next(".gutter").toggleClass("is-prev-collapsed", l);
    });
  }
  _createGutter(t, e) {
    const { toggleBtn: s } = this.options, { count: i } = this, r = p(`<div class="gutter gutter-${e === "vertical" ? "vert" : "horz"}" />`).z("index", t).toggleClass("is-first", t === 1).toggleClass("is-last", t === i - 1);
    return (s === !0 || Array.isArray(s) && s[t]) && r.append('<button class="gutter-toggle" type="button"><span class="chevron-left"></span></button>'), r[0];
  }
  _handleDragEnd(t) {
    var e, s;
    this._update(), (s = (e = this.options).onDragEnd) == null || s.call(e, t);
  }
}
xo.NAME = "Split";
xo.DEFAULT = {
  gutterSize: 8,
  dblClickToggle: !0
};
xo.SplitJS = hh;
class dh extends W {
}
dh.NAME = "Avatar";
dh.Component = Ys;
ot(qf);
class uh extends W {
}
uh.NAME = "BtnGroup";
uh.Component = jt;
const yp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtnGroup: jt
}, Symbol.toStringTag, { value: "Module" }));
ot(yp);
j.addLang({
  zh_cn: {
    today: "今天",
    yearFormat: "{0}年",
    weekNames: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
  },
  zh_tw: {
    today: "今天",
    yearFormat: "{0}年",
    weekNames: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
  },
  en: {
    today: "Today",
    yearFormat: "{0}",
    weekNames: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    monthNames: ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."]
  }
});
const vp = {
  defaultCategoryName: "默认",
  weekNamesFull: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  moreItems: "还有 {0} 项…"
}, bp = {
  defaultCategoryName: "預設",
  weekNamesFull: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
  moreItems: "還有 {0} 項…"
}, wp = {
  defaultCategoryName: "Default",
  weekNamesFull: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
  moreItems: "+{0} more…"
};
j.addLang({
  zh_cn: vp,
  zh_tw: bp,
  en: wp
});
class Cp extends O {
  constructor() {
    super(...arguments), this._getNavItems = (t) => {
      const { monthFormat: e = "yyyy-MM", dateFormat: s = "yyyy-MM-dd", date: i, navItems: r = [] } = t, o = Q(i, !0), a = /* @__PURE__ */ new Date();
      o.setHours(0, 0, 0, 0), a.setHours(0, 0, 0, 0);
      const l = sr(o, -1, "month"), c = sr(o, 1, "month");
      return [
        { hint: nt(a, s), text: j.getLang("today"), command: `.~switchDate/${a.getTime()}`, btnType: ue(o, a) ? "gray-pale" : "primary-pale" },
        { hint: nt(l, e), text: "", textClass: "chevron-left", command: `.~switchDate/${l.getTime()}` },
        { type: "text", text: nt(o, e) },
        { hint: nt(c, e), text: "", textClass: "chevron-right", command: `.~switchDate/${c.getTime()}` },
        ...r
      ];
    };
  }
  render(t) {
    const { title: e, actions: s, navProps: i, btnSize: r = "sm" } = t, o = this._getNavItems(t);
    return /* @__PURE__ */ m("div", { className: "calendar-header", children: [
      e ? /* @__PURE__ */ m(P, { content: e, className: "calendar-header-title" }, "title") : null,
      /* @__PURE__ */ m(ht, { className: "calendar-header-nav", btnType: "primary-pale", size: r, gap: 2, items: o, ...i }, "nav"),
      s ? ht.render(s, [], { key: "actions", className: "calendar-header-actions", gap: 2, size: r, btnType: "default" }, this) : null
    ] });
  }
}
const Qa = (n, t) => {
  const e = /* @__PURE__ */ new Map(), s = [];
  for (const i of n) {
    const r = e.get(i.id);
    if (r)
      p.extend(!0, r, i, r.events && i.events ? { events: yr([...r.events, ...i.events]) } : {});
    else {
      const o = p.extend(!0, {}, i);
      o.order === void 0 && (o.order = s.length), e.set(i.id, o), s.push(o);
    }
  }
  return t !== void 0 && (e.get(t) || s.push({
    order: 0,
    id: t,
    name: j.getLang("defaultCategoryName")
  })), s.sort((i, r) => i.order - r.order), s;
}, yr = (n, t) => {
  const e = /* @__PURE__ */ new Map(), s = [];
  for (const i of n) {
    if (i.start === void 0)
      continue;
    typeof i.start != "number" && (i.start = Ut(i.start)), i.end !== void 0 && typeof i.end != "number" && (i.end = Ut(i.end));
    const r = e.get(i.id);
    if (r)
      p.extend(!0, r, i);
    else {
      const o = p.extend(!0, {}, i);
      o.order === void 0 && (o.order = s.length), t !== void 0 && o.category === void 0 && (o.category = t), e.set(i.id, o), s.push(o);
    }
  }
  return s.sort((i, r) => {
    let o = (i.allDay ? 0 : 1) - (r.allDay ? 0 : 1);
    return o !== 0 || (o = i.start - r.start, o !== 0) ? o : i.order - r.order;
  }), s;
}, Sp = (n, t, e = 0) => {
  const s = new Date(n, t - 1, 1), i = s.getDay(), r = new Date(n, t, 0), o = s.getTime() - (7 + i - e) % 7 * Ee;
  return {
    days: r.getDate(),
    startTime: o,
    firstDay: s.getTime()
  };
};
class kp extends O {
  constructor() {
    super(...arguments), this._showAll$ = Tt(!1), this._getItems = (t) => {
      const { events: e, categoriesMap: s, maxEventCount: i, eventRender: r } = t, o = [];
      let a = 0;
      const l = this._showAll$.value;
      for (const c of e) {
        if (c.hidden)
          continue;
        const h = s.get(c.category ?? "") || {};
        if (h.hidden)
          continue;
        if (i && o.length >= i && !l) {
          a++;
          continue;
        }
        const d = c.color ?? h.color, u = c.background ?? h.background, f = c.allDay ? "" : nt(c.start, "hh:mm"), g = {
          type: "item",
          key: c.id,
          text: c.title,
          hint: `${h.name ? `[${h.name}]` : ""}${c.allDay ? "" : f} ${c.title}`,
          icon: c.icon ?? h.icon ?? "calendar-event-dot",
          leading: c.allDay ? null : /* @__PURE__ */ m("span", { className: "calendar-event-list-item-time", children: f }),
          className: ["calendar-event-list-item", u ? "has-bg" : ""],
          style: d || u ? { "--calendar-event-color": d, "--calendar-event-background": u } : void 0,
          multiline: !1,
          props: { "zui-command": `.~clickEvent/${c.id}/$.event` }
        };
        if (r) {
          const _ = r.call(this, c, h, g);
          if (_ === !1)
            continue;
          _ && p.extend(g, _);
        }
        o.push(g);
      }
      return a && !l && o.push({
        type: "item",
        key: "more",
        textClass: "text-gray",
        text: j.getLang("moreItems", [a]),
        className: "calendar-event-list-item-more state",
        onClick: () => this._showAll$.value = !0
      }), o;
    };
  }
  render(t) {
    return /* @__PURE__ */ m(
      yt,
      {
        items: this._getItems(t),
        className: t.className
      }
    );
  }
}
class xp extends O {
  _renderHeader(t) {
    const e = j.getLang("weekNamesFull"), s = [];
    for (let i = 0; i < 7; i++) {
      const r = (t + i) % 7;
      s.push(
        /* @__PURE__ */ m(
          "div",
          {
            className: S("calendar-month-view-col calendar-month-view-header-col", { "is-weekend": r === 0 || r === 6 }),
            children: /* @__PURE__ */ m("div", { class: "calendar-month-view-week-name", children: e ? e[r] : r })
          },
          i
        )
      );
    }
    return /* @__PURE__ */ m("div", { className: "calendar-month-view-row calendar-month-view-header", children: s });
  }
  _renderDay(t, e, s, i, r, o, a) {
    const l = new Date(t), c = l.getDate(), h = nt(l, o), d = e.get(h) || [], u = l.getDay(), f = Kr(l, i), g = S("calendar-month-view-col calendar-month-view-day", {
      "is-first": c === 1,
      "is-in-month": f,
      "is-out-month": !f,
      "is-today": ue(l, r),
      "is-weekend": u === 0 || u === 6
    });
    return /* @__PURE__ */ m("div", { className: g, "z-date": h, "zui-command": `.~clickDay/${h}/$.event`, children: [
      /* @__PURE__ */ m("div", { className: "calendar-month-view-day-head", title: h, children: [
        c === 1 && a ? /* @__PURE__ */ m("span", { class: "calendar-month-view-month-name", children: a[l.getMonth()] }) : null,
        /* @__PURE__ */ m("span", { class: "calendar-month-view-day-number", children: l.getDate() })
      ] }),
      /* @__PURE__ */ m(
        kp,
        {
          className: "calendar-month-view-day-events",
          events: d,
          categoriesMap: s,
          maxEventCount: this.props.maxEventCount,
          eventRender: this.props.eventRender
        }
      )
    ] }, h);
  }
  _renderRows(t, e, s, i) {
    const { dateFormat: r = "yyyy-MM-dd", events: o = [], categories: a = [] } = i, { startTime: l, days: c, firstDay: h } = Sp(t, e, s), d = h + c * Ee, u = [], f = j.getLang("monthNames"), g = /* @__PURE__ */ new Date(), _ = /* @__PURE__ */ new Map();
    for (const b of o) {
      const w = nt(b.start, r);
      _.set(w, [..._.get(w) || [], b]);
    }
    const y = /* @__PURE__ */ new Map();
    for (const b of a)
      y.set(b.id, b);
    let v = l;
    for (; v <= d; ) {
      const b = [];
      for (let w = 0; w < 7; w++)
        b.push(this._renderDay(v, _, y, h, g, r, f)), v += Ee;
      u.push(/* @__PURE__ */ m("div", { className: "calendar-month-view-row calendar-month-view-week", children: b }, v));
    }
    return u;
  }
  render(t) {
    const {
      weekStart: e = 1,
      date: s
    } = t, i = Q(s, !0), r = i.getFullYear(), o = i.getMonth() + 1;
    return /* @__PURE__ */ m("div", { className: "calendar-view calendar-month-view", children: [
      this._renderHeader(e),
      this._renderRows(r, o, e, t)
    ] }, `${r}-${o}`);
  }
}
let $o = class extends Hc {
  constructor() {
    super(...arguments), this._categories$ = us(() => Qa([
      ...this.props.categories || [],
      ...this.signals.modifidCategories.value
    ], this.defaultCategoryID)), this._events$ = us(() => yr([
      ...this.props.events || [],
      ...this.categories.reduce((t, e) => [...t, ...e.events || []], []),
      ...this.signals.modifiedEvents.value
    ], this.defaultCategoryID)), this._dateEffect = ze(() => {
      var s;
      const { date: t, mode: e } = this;
      (s = this.props.onSwitchDate) == null || s.call(this, Q(t), e);
    });
  }
  get defaultCategoryID() {
    return this.props.defaultCategory ?? "DEFAULT";
  }
  get date() {
    return this.signals.date.value;
  }
  get mode() {
    return this.signals.mode.value;
  }
  get readonly() {
    return this.state.readonly;
  }
  get categories$() {
    return this._categories$;
  }
  get categories() {
    return this._categories$.value;
  }
  get events$() {
    return this._events$;
  }
  get events() {
    return this._events$.value;
  }
  getDefaultState(t) {
    return {
      date: Ut(t.date),
      mode: t.view || "month",
      readonly: t.readonly ?? !1,
      modifidCategories: [],
      modifiedEvents: []
    };
  }
  switchDate(t) {
    this.changeState({ date: Ut(t) });
  }
  modifyEvents(t) {
    this.changeState({ modifiedEvents: yr([...t, ...this.signals.modifiedEvents.value]) });
  }
  modifyCategories(t) {
    this.changeState({ modifidCategories: Qa([...t, ...this.signals.modifidCategories.value]) });
  }
  clickEvent(t, e) {
    var r;
    const s = this.getEvent(t);
    if (!s)
      return;
    const i = this.getCategory(s.category ?? "");
    (r = this.props.onClickEvent) == null || r.call(this, s, i, e);
  }
  clickDay(t, e) {
    var i;
    const s = Q(t);
    (i = this.props.onClickDay) == null || i.call(this, s, e);
  }
  getEvent(t) {
    return this.events.find((e) => String(e.id) === String(t));
  }
  getDayEvents(t) {
    const e = nt(t, "yyyy-MM-dd");
    return this.events.filter((s) => nt(s.start, "yyyy-MM-dd") === e);
  }
  getCategory(t) {
    return this.categories.find((e) => String(e.id) === String(t));
  }
  componentWillUnmount() {
    this._dateEffect(), super.componentWillUnmount();
  }
  _renderHeader(t) {
    const { headerTitle: e, headerActions: s, headerProps: i, monthFormat: r, dateFormat: o } = t;
    return /* @__PURE__ */ m(
      Cp,
      {
        title: e,
        actions: s,
        date: this.date,
        monthFormat: r,
        dateFormat: o,
        ...i
      },
      "header"
    );
  }
  _renderBody(t) {
    const { mode: e, date: s, categories: i, events: r } = this;
    return /* @__PURE__ */ m("div", { className: "calendar-body", "z-mode": e, "z-date": s, children: /* @__PURE__ */ m(
      xp,
      {
        date: s,
        categories: i,
        events: r,
        weekStart: t.weekStart,
        maxEventCount: t.maxEventCount,
        eventRender: t.eventRender
      }
    ) }, "body");
  }
  _getChildren(t) {
    return [
      this._renderHeader(t),
      this._renderBody(t)
    ];
  }
};
$o.NAME = "Calendar";
$o.defaultProps = {
  commands: {},
  maxEventCount: 5
};
class Eo extends W {
}
Eo.NAME = "Calendar";
Eo.Component = $o;
Eo.register();
const fh = Symbol("EVENT_PICK");
class To extends O {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this), this._hasInput = !!p(`#${t.id}`).length;
  }
  get hasInput() {
    return this._hasInput;
  }
  _handleClick(t) {
    const { togglePop: e, clickType: s, onClick: i } = this.props;
    let r = s === "open" ? !0 : void 0;
    const o = p(t.target), a = i == null ? void 0 : i(t);
    if (!t.defaultPrevented) {
      if (typeof a == "boolean")
        r = a;
      else {
        if (o.closest('[data-dismiss="pick"]').length) {
          e(!1);
          return;
        }
        if (o.closest("a,input").length)
          return;
      }
      requestAnimationFrame(() => e(r));
    }
  }
  _getClass(t) {
    const { state: e, className: s, disabled: i, readonly: r, pickerName: o, empty: a } = t, { open: l } = e;
    return S(
      "pick",
      s,
      o ? `${o}-pick` : "",
      l && "is-open focus",
      i && "disabled",
      r && "readonly",
      a ? "is-empty-value" : ""
    );
  }
  _getProps(t) {
    const { id: e, style: s, attrs: i } = t;
    return {
      id: `pick-${e}`,
      className: this._getClass(t),
      style: s,
      tabIndex: -1,
      onClick: this._handleClick,
      ...i
    };
  }
  _renderTrigger(t) {
    const { children: e, state: s } = t;
    return e ?? s.value;
  }
  _renderValue(t) {
    const { name: e, state: { value: s = "" }, disabled: i, readonly: r, id: o, onRenderValue: a } = t;
    if (a)
      return a.call(this, s, t);
    if (e)
      if (this._hasInput)
        p(`#${o}`).val(s);
      else
        return /* @__PURE__ */ m("input", { id: o, type: "hidden", className: "pick-value", name: e, value: s, readonly: r, disabled: i });
    return null;
  }
  componentDidMount() {
    const { id: t } = this.props;
    p(`#${t}`).on(`change.zui.pick.${t} syncValue.zui.pick.${t}`, (e, s) => {
      if (typeof s == "symbol")
        return;
      const i = p.isPlainObject(s) && typeof s.setValue == "string" ? s.setValue : e.target.value;
      this._skipTriggerChange = i, this.props.changeState({ value: i });
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    p(`#${t}`).off(`change.zui.pick.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: s, name: i } = this.props;
    i && t.state.value !== s.value && (this._skipTriggerChange !== s.value && p(`#${e}`).trigger("change", fh), this._skipTriggerChange = !1);
  }
  render(t) {
    return Dt(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
const $p = ["top", "right", "bottom", "left"], Ae = Math.min, Et = Math.max, Rn = Math.round, hn = Math.floor, Xt = (n) => ({
  x: n,
  y: n
}), Ep = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Tp = {
  start: "end",
  end: "start"
};
function vr(n, t, e) {
  return Et(n, Ae(t, e));
}
function ts(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function Ie(n) {
  return n.split("-")[0];
}
function bs(n) {
  return n.split("-")[1];
}
function ph(n) {
  return n === "x" ? "y" : "x";
}
function No(n) {
  return n === "y" ? "height" : "width";
}
const Np = /* @__PURE__ */ new Set(["top", "bottom"]);
function he(n) {
  return Np.has(Ie(n)) ? "y" : "x";
}
function Mo(n) {
  return ph(he(n));
}
function Mp(n, t, e) {
  e === void 0 && (e = !1);
  const s = bs(n), i = Mo(n), r = No(i);
  let o = i === "x" ? s === (e ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = zn(o)), [o, zn(o)];
}
function Ap(n) {
  const t = zn(n);
  return [br(n), t, br(t)];
}
function br(n) {
  return n.replace(/start|end/g, (t) => Tp[t]);
}
const tl = ["left", "right"], el = ["right", "left"], Ip = ["top", "bottom"], Dp = ["bottom", "top"];
function Lp(n, t, e) {
  switch (n) {
    case "top":
    case "bottom":
      return e ? t ? el : tl : t ? tl : el;
    case "left":
    case "right":
      return t ? Ip : Dp;
    default:
      return [];
  }
}
function Pp(n, t, e, s) {
  const i = bs(n);
  let r = Lp(Ie(n), e === "start", s);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(br)))), r;
}
function zn(n) {
  return n.replace(/left|right|bottom|top/g, (t) => Ep[t]);
}
function Rp(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function mh(n) {
  return typeof n != "number" ? Rp(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function Fn(n) {
  const {
    x: t,
    y: e,
    width: s,
    height: i
  } = n;
  return {
    width: s,
    height: i,
    top: e,
    left: t,
    right: t + s,
    bottom: e + i,
    x: t,
    y: e
  };
}
function sl(n, t, e) {
  let {
    reference: s,
    floating: i
  } = n;
  const r = he(t), o = Mo(t), a = No(o), l = Ie(t), c = r === "y", h = s.x + s.width / 2 - i.width / 2, d = s.y + s.height / 2 - i.height / 2, u = s[a] / 2 - i[a] / 2;
  let f;
  switch (l) {
    case "top":
      f = {
        x: h,
        y: s.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: h,
        y: s.y + s.height
      };
      break;
    case "right":
      f = {
        x: s.x + s.width,
        y: d
      };
      break;
    case "left":
      f = {
        x: s.x - i.width,
        y: d
      };
      break;
    default:
      f = {
        x: s.x,
        y: s.y
      };
  }
  switch (bs(t)) {
    case "start":
      f[o] -= u * (e && c ? -1 : 1);
      break;
    case "end":
      f[o] += u * (e && c ? -1 : 1);
      break;
  }
  return f;
}
const zp = async (n, t, e) => {
  const {
    placement: s = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: o
  } = e, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let c = await o.getElementRects({
    reference: n,
    floating: t,
    strategy: i
  }), {
    x: h,
    y: d
  } = sl(c, s, l), u = s, f = {}, g = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: y,
      fn: v
    } = a[_], {
      x: b,
      y: w,
      data: C,
      reset: k
    } = await v({
      x: h,
      y: d,
      initialPlacement: s,
      placement: u,
      strategy: i,
      middlewareData: f,
      rects: c,
      platform: o,
      elements: {
        reference: n,
        floating: t
      }
    });
    h = b ?? h, d = w ?? d, f = {
      ...f,
      [y]: {
        ...f[y],
        ...C
      }
    }, k && g <= 50 && (g++, typeof k == "object" && (k.placement && (u = k.placement), k.rects && (c = k.rects === !0 ? await o.getElementRects({
      reference: n,
      floating: t,
      strategy: i
    }) : k.rects), {
      x: h,
      y: d
    } = sl(c, u, l)), _ = -1);
  }
  return {
    x: h,
    y: d,
    placement: u,
    strategy: i,
    middlewareData: f
  };
};
async function Bs(n, t) {
  var e;
  t === void 0 && (t = {});
  const {
    x: s,
    y: i,
    platform: r,
    rects: o,
    elements: a,
    strategy: l
  } = n, {
    boundary: c = "clippingAncestors",
    rootBoundary: h = "viewport",
    elementContext: d = "floating",
    altBoundary: u = !1,
    padding: f = 0
  } = ts(t, n), g = mh(f), y = a[u ? d === "floating" ? "reference" : "floating" : d], v = Fn(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(y))) == null || e ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: h,
    strategy: l
  })), b = d === "floating" ? {
    x: s,
    y: i,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), C = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = Fn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: w,
    strategy: l
  }) : b);
  return {
    top: (v.top - k.top + g.top) / C.y,
    bottom: (k.bottom - v.bottom + g.bottom) / C.y,
    left: (v.left - k.left + g.left) / C.x,
    right: (k.right - v.right + g.right) / C.x
  };
}
const Fp = (n) => ({
  name: "arrow",
  options: n,
  async fn(t) {
    const {
      x: e,
      y: s,
      placement: i,
      rects: r,
      platform: o,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: h = 0
    } = ts(n, t) || {};
    if (c == null)
      return {};
    const d = mh(h), u = {
      x: e,
      y: s
    }, f = Mo(i), g = No(f), _ = await o.getDimensions(c), y = f === "y", v = y ? "top" : "left", b = y ? "bottom" : "right", w = y ? "clientHeight" : "clientWidth", C = r.reference[g] + r.reference[f] - u[f] - r.floating[g], k = u[f] - r.reference[f], $ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let N = $ ? $[w] : 0;
    (!N || !await (o.isElement == null ? void 0 : o.isElement($))) && (N = a.floating[w] || r.floating[g]);
    const A = C / 2 - k / 2, I = N / 2 - _[g] / 2 - 1, F = Ae(d[v], I), T = Ae(d[b], I), L = F, V = N - _[g] - T, B = N / 2 - _[g] / 2 + A, K = vr(L, B, V), X = !l.arrow && bs(i) != null && B !== K && r.reference[g] / 2 - (B < L ? F : T) - _[g] / 2 < 0, Z = X ? B < L ? B - L : B - V : 0;
    return {
      [f]: u[f] + Z,
      data: {
        [f]: K,
        centerOffset: B - K - Z,
        ...X && {
          alignmentOffset: Z
        }
      },
      reset: X
    };
  }
}), Op = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(t) {
      var e, s;
      const {
        placement: i,
        middlewareData: r,
        rects: o,
        initialPlacement: a,
        platform: l,
        elements: c
      } = t, {
        mainAxis: h = !0,
        crossAxis: d = !0,
        fallbackPlacements: u,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: _ = !0,
        ...y
      } = ts(n, t);
      if ((e = r.arrow) != null && e.alignmentOffset)
        return {};
      const v = Ie(i), b = he(a), w = Ie(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), k = u || (w || !_ ? [zn(a)] : Ap(a)), $ = g !== "none";
      !u && $ && k.push(...Pp(a, _, g, C));
      const N = [a, ...k], A = await Bs(t, y), I = [];
      let F = ((s = r.flip) == null ? void 0 : s.overflows) || [];
      if (h && I.push(A[v]), d) {
        const B = Mp(i, o, C);
        I.push(A[B[0]], A[B[1]]);
      }
      if (F = [...F, {
        placement: i,
        overflows: I
      }], !I.every((B) => B <= 0)) {
        var T, L;
        const B = (((T = r.flip) == null ? void 0 : T.index) || 0) + 1, K = N[B];
        if (K && (!(d === "alignment" ? b !== he(K) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        F.every((R) => he(R.placement) === b ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: B,
              overflows: F
            },
            reset: {
              placement: K
            }
          };
        let X = (L = F.filter((Z) => Z.overflows[0] <= 0).sort((Z, R) => Z.overflows[1] - R.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!X)
          switch (f) {
            case "bestFit": {
              var V;
              const Z = (V = F.filter((R) => {
                if ($) {
                  const ft = he(R.placement);
                  return ft === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ft === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((ft) => ft > 0).reduce((ft, $s) => ft + $s, 0)]).sort((R, ft) => R[1] - ft[1])[0]) == null ? void 0 : V[0];
              Z && (X = Z);
              break;
            }
            case "initialPlacement":
              X = a;
              break;
          }
        if (i !== X)
          return {
            reset: {
              placement: X
            }
          };
      }
      return {};
    }
  };
};
function nl(n, t) {
  return {
    top: n.top - t.height,
    right: n.right - t.width,
    bottom: n.bottom - t.height,
    left: n.left - t.width
  };
}
function il(n) {
  return $p.some((t) => n[t] >= 0);
}
const Hp = function(n) {
  return n === void 0 && (n = {}), {
    name: "hide",
    options: n,
    async fn(t) {
      const {
        rects: e
      } = t, {
        strategy: s = "referenceHidden",
        ...i
      } = ts(n, t);
      switch (s) {
        case "referenceHidden": {
          const r = await Bs(t, {
            ...i,
            elementContext: "reference"
          }), o = nl(r, e.reference);
          return {
            data: {
              referenceHiddenOffsets: o,
              referenceHidden: il(o)
            }
          };
        }
        case "escaped": {
          const r = await Bs(t, {
            ...i,
            altBoundary: !0
          }), o = nl(r, e.floating);
          return {
            data: {
              escapedOffsets: o,
              escaped: il(o)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Wp = /* @__PURE__ */ new Set(["left", "top"]);
async function Bp(n, t) {
  const {
    placement: e,
    platform: s,
    elements: i
  } = n, r = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), o = Ie(e), a = bs(e), l = he(e) === "y", c = Wp.has(o) ? -1 : 1, h = r && l ? -1 : 1, d = ts(t, n);
  let {
    mainAxis: u,
    crossAxis: f,
    alignmentAxis: g
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof g == "number" && (f = a === "end" ? g * -1 : g), l ? {
    x: f * h,
    y: u * c
  } : {
    x: u * c,
    y: f * h
  };
}
const jp = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(t) {
      var e, s;
      const {
        x: i,
        y: r,
        placement: o,
        middlewareData: a
      } = t, l = await Bp(t, n);
      return o === ((e = a.offset) == null ? void 0 : e.placement) && (s = a.arrow) != null && s.alignmentOffset ? {} : {
        x: i + l.x,
        y: r + l.y,
        data: {
          ...l,
          placement: o
        }
      };
    }
  };
}, Up = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(t) {
      const {
        x: e,
        y: s,
        placement: i
      } = t, {
        mainAxis: r = !0,
        crossAxis: o = !1,
        limiter: a = {
          fn: (y) => {
            let {
              x: v,
              y: b
            } = y;
            return {
              x: v,
              y: b
            };
          }
        },
        ...l
      } = ts(n, t), c = {
        x: e,
        y: s
      }, h = await Bs(t, l), d = he(Ie(i)), u = ph(d);
      let f = c[u], g = c[d];
      if (r) {
        const y = u === "y" ? "top" : "left", v = u === "y" ? "bottom" : "right", b = f + h[y], w = f - h[v];
        f = vr(b, f, w);
      }
      if (o) {
        const y = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", b = g + h[y], w = g - h[v];
        g = vr(b, g, w);
      }
      const _ = a.fn({
        ...t,
        [u]: f,
        [d]: g
      });
      return {
        ..._,
        data: {
          x: _.x - e,
          y: _.y - s,
          enabled: {
            [u]: r,
            [d]: o
          }
        }
      };
    }
  };
}, Vp = function(n) {
  return n === void 0 && (n = {}), {
    name: "size",
    options: n,
    async fn(t) {
      var e, s;
      const {
        placement: i,
        rects: r,
        platform: o,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...c
      } = ts(n, t), h = await Bs(t, c), d = Ie(i), u = bs(i), f = he(i) === "y", {
        width: g,
        height: _
      } = r.floating;
      let y, v;
      d === "top" || d === "bottom" ? (y = d, v = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = d, y = u === "end" ? "top" : "bottom");
      const b = _ - h.top - h.bottom, w = g - h.left - h.right, C = Ae(_ - h[y], b), k = Ae(g - h[v], w), $ = !t.middlewareData.shift;
      let N = C, A = k;
      if ((e = t.middlewareData.shift) != null && e.enabled.x && (A = w), (s = t.middlewareData.shift) != null && s.enabled.y && (N = b), $ && !u) {
        const F = Et(h.left, 0), T = Et(h.right, 0), L = Et(h.top, 0), V = Et(h.bottom, 0);
        f ? A = g - 2 * (F !== 0 || T !== 0 ? F + T : Et(h.left, h.right)) : N = _ - 2 * (L !== 0 || V !== 0 ? L + V : Et(h.top, h.bottom));
      }
      await l({
        ...t,
        availableWidth: A,
        availableHeight: N
      });
      const I = await o.getDimensions(a.floating);
      return g !== I.width || _ !== I.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function pi() {
  return typeof window < "u";
}
function ws(n) {
  return gh(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function Nt(n) {
  var t;
  return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function se(n) {
  var t;
  return (t = (gh(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : t.documentElement;
}
function gh(n) {
  return pi() ? n instanceof Node || n instanceof Nt(n).Node : !1;
}
function Vt(n) {
  return pi() ? n instanceof Element || n instanceof Nt(n).Element : !1;
}
function te(n) {
  return pi() ? n instanceof HTMLElement || n instanceof Nt(n).HTMLElement : !1;
}
function rl(n) {
  return !pi() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof Nt(n).ShadowRoot;
}
const Kp = /* @__PURE__ */ new Set(["inline", "contents"]);
function Qs(n) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: s,
    display: i
  } = Kt(n);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + e) && !Kp.has(i);
}
const Gp = /* @__PURE__ */ new Set(["table", "td", "th"]);
function qp(n) {
  return Gp.has(ws(n));
}
const Yp = [":popover-open", ":modal"];
function mi(n) {
  return Yp.some((t) => {
    try {
      return n.matches(t);
    } catch {
      return !1;
    }
  });
}
const Zp = ["transform", "translate", "scale", "rotate", "perspective"], Jp = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Xp = ["paint", "layout", "strict", "content"];
function Ao(n) {
  const t = Io(), e = Vt(n) ? Kt(n) : n;
  return Zp.some((s) => e[s] ? e[s] !== "none" : !1) || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || Jp.some((s) => (e.willChange || "").includes(s)) || Xp.some((s) => (e.contain || "").includes(s));
}
function Qp(n) {
  let t = De(n);
  for (; te(t) && !fs(t); ) {
    if (Ao(t))
      return t;
    if (mi(t))
      return null;
    t = De(t);
  }
  return null;
}
function Io() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const tm = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function fs(n) {
  return tm.has(ws(n));
}
function Kt(n) {
  return Nt(n).getComputedStyle(n);
}
function gi(n) {
  return Vt(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function De(n) {
  if (ws(n) === "html")
    return n;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    rl(n) && n.host || // Fallback.
    se(n)
  );
  return rl(t) ? t.host : t;
}
function _h(n) {
  const t = De(n);
  return fs(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : te(t) && Qs(t) ? t : _h(t);
}
function js(n, t, e) {
  var s;
  t === void 0 && (t = []), e === void 0 && (e = !0);
  const i = _h(n), r = i === ((s = n.ownerDocument) == null ? void 0 : s.body), o = Nt(i);
  if (r) {
    const a = wr(o);
    return t.concat(o, o.visualViewport || [], Qs(i) ? i : [], a && e ? js(a) : []);
  }
  return t.concat(i, js(i, [], e));
}
function wr(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function yh(n) {
  const t = Kt(n);
  let e = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = te(n), r = i ? n.offsetWidth : e, o = i ? n.offsetHeight : s, a = Rn(e) !== r || Rn(s) !== o;
  return a && (e = r, s = o), {
    width: e,
    height: s,
    $: a
  };
}
function Do(n) {
  return Vt(n) ? n : n.contextElement;
}
function as(n) {
  const t = Do(n);
  if (!te(t))
    return Xt(1);
  const e = t.getBoundingClientRect(), {
    width: s,
    height: i,
    $: r
  } = yh(t);
  let o = (r ? Rn(e.width) : e.width) / s, a = (r ? Rn(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const em = /* @__PURE__ */ Xt(0);
function vh(n) {
  const t = Nt(n);
  return !Io() || !t.visualViewport ? em : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function sm(n, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== Nt(n) ? !1 : t;
}
function Ge(n, t, e, s) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = n.getBoundingClientRect(), r = Do(n);
  let o = Xt(1);
  t && (s ? Vt(s) && (o = as(s)) : o = as(n));
  const a = sm(r, e, s) ? vh(r) : Xt(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, h = i.width / o.x, d = i.height / o.y;
  if (r) {
    const u = Nt(r), f = s && Vt(s) ? Nt(s) : s;
    let g = u, _ = wr(g);
    for (; _ && s && f !== g; ) {
      const y = as(_), v = _.getBoundingClientRect(), b = Kt(_), w = v.left + (_.clientLeft + parseFloat(b.paddingLeft)) * y.x, C = v.top + (_.clientTop + parseFloat(b.paddingTop)) * y.y;
      l *= y.x, c *= y.y, h *= y.x, d *= y.y, l += w, c += C, g = Nt(_), _ = wr(g);
    }
  }
  return Fn({
    width: h,
    height: d,
    x: l,
    y: c
  });
}
function _i(n, t) {
  const e = gi(n).scrollLeft;
  return t ? t.left + e : Ge(se(n)).left + e;
}
function bh(n, t) {
  const e = n.getBoundingClientRect(), s = e.left + t.scrollLeft - _i(n, e), i = e.top + t.scrollTop;
  return {
    x: s,
    y: i
  };
}
function nm(n) {
  let {
    elements: t,
    rect: e,
    offsetParent: s,
    strategy: i
  } = n;
  const r = i === "fixed", o = se(s), a = t ? mi(t.floating) : !1;
  if (s === o || a && r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Xt(1);
  const h = Xt(0), d = te(s);
  if ((d || !d && !r) && ((ws(s) !== "body" || Qs(o)) && (l = gi(s)), te(s))) {
    const f = Ge(s);
    c = as(s), h.x = f.x + s.clientLeft, h.y = f.y + s.clientTop;
  }
  const u = o && !d && !r ? bh(o, l) : Xt(0);
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + h.x + u.x,
    y: e.y * c.y - l.scrollTop * c.y + h.y + u.y
  };
}
function im(n) {
  return Array.from(n.getClientRects());
}
function rm(n) {
  const t = se(n), e = gi(n), s = n.ownerDocument.body, i = Et(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth), r = Et(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
  let o = -e.scrollLeft + _i(n);
  const a = -e.scrollTop;
  return Kt(s).direction === "rtl" && (o += Et(t.clientWidth, s.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
const ol = 25;
function om(n, t) {
  const e = Nt(n), s = se(n), i = e.visualViewport;
  let r = s.clientWidth, o = s.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const h = Io();
    (!h || h && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  const c = _i(s);
  if (c <= 0) {
    const h = s.ownerDocument, d = h.body, u = getComputedStyle(d), f = h.compatMode === "CSS1Compat" && parseFloat(u.marginLeft) + parseFloat(u.marginRight) || 0, g = Math.abs(s.clientWidth - d.clientWidth - f);
    g <= ol && (r -= g);
  } else
    c <= ol && (r += c);
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
const am = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function lm(n, t) {
  const e = Ge(n, !0, t === "fixed"), s = e.top + n.clientTop, i = e.left + n.clientLeft, r = te(n) ? as(n) : Xt(1), o = n.clientWidth * r.x, a = n.clientHeight * r.y, l = i * r.x, c = s * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function al(n, t, e) {
  let s;
  if (t === "viewport")
    s = om(n, e);
  else if (t === "document")
    s = rm(se(n));
  else if (Vt(t))
    s = lm(t, e);
  else {
    const i = vh(n);
    s = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return Fn(s);
}
function wh(n, t) {
  const e = De(n);
  return e === t || !Vt(e) || fs(e) ? !1 : Kt(e).position === "fixed" || wh(e, t);
}
function cm(n, t) {
  const e = t.get(n);
  if (e)
    return e;
  let s = js(n, [], !1).filter((a) => Vt(a) && ws(a) !== "body"), i = null;
  const r = Kt(n).position === "fixed";
  let o = r ? De(n) : n;
  for (; Vt(o) && !fs(o); ) {
    const a = Kt(o), l = Ao(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && am.has(i.position) || Qs(o) && !l && wh(n, o)) ? s = s.filter((h) => h !== o) : i = a, o = De(o);
  }
  return t.set(n, s), s;
}
function hm(n) {
  let {
    element: t,
    boundary: e,
    rootBoundary: s,
    strategy: i
  } = n;
  const o = [...e === "clippingAncestors" ? mi(t) ? [] : cm(t, this._c) : [].concat(e), s], a = o[0], l = o.reduce((c, h) => {
    const d = al(t, h, i);
    return c.top = Et(d.top, c.top), c.right = Ae(d.right, c.right), c.bottom = Ae(d.bottom, c.bottom), c.left = Et(d.left, c.left), c;
  }, al(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function dm(n) {
  const {
    width: t,
    height: e
  } = yh(n);
  return {
    width: t,
    height: e
  };
}
function um(n, t, e) {
  const s = te(t), i = se(t), r = e === "fixed", o = Ge(n, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Xt(0);
  function c() {
    l.x = _i(i);
  }
  if (s || !s && !r)
    if ((ws(t) !== "body" || Qs(i)) && (a = gi(t)), s) {
      const f = Ge(t, !0, r, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else
      i && c();
  r && !s && i && c();
  const h = i && !s && !r ? bh(i, a) : Xt(0), d = o.left + a.scrollLeft - l.x - h.x, u = o.top + a.scrollTop - l.y - h.y;
  return {
    x: d,
    y: u,
    width: o.width,
    height: o.height
  };
}
function ji(n) {
  return Kt(n).position === "static";
}
function ll(n, t) {
  if (!te(n) || Kt(n).position === "fixed")
    return null;
  if (t)
    return t(n);
  let e = n.offsetParent;
  return se(n) === e && (e = e.ownerDocument.body), e;
}
function Ch(n, t) {
  const e = Nt(n);
  if (mi(n))
    return e;
  if (!te(n)) {
    let i = De(n);
    for (; i && !fs(i); ) {
      if (Vt(i) && !ji(i))
        return i;
      i = De(i);
    }
    return e;
  }
  let s = ll(n, t);
  for (; s && qp(s) && ji(s); )
    s = ll(s, t);
  return s && fs(s) && ji(s) && !Ao(s) ? e : s || Qp(n) || e;
}
const fm = async function(n) {
  const t = this.getOffsetParent || Ch, e = this.getDimensions, s = await e(n.floating);
  return {
    reference: um(n.reference, await t(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function pm(n) {
  return Kt(n).direction === "rtl";
}
const mm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: nm,
  getDocumentElement: se,
  getClippingRect: hm,
  getOffsetParent: Ch,
  getElementRects: fm,
  getClientRects: im,
  getDimensions: dm,
  getScale: as,
  isElement: Vt,
  isRTL: pm
};
function Sh(n, t) {
  return n.x === t.x && n.y === t.y && n.width === t.width && n.height === t.height;
}
function gm(n, t) {
  let e = null, s;
  const i = se(n);
  function r() {
    var a;
    clearTimeout(s), (a = e) == null || a.disconnect(), e = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), r();
    const c = n.getBoundingClientRect(), {
      left: h,
      top: d,
      width: u,
      height: f
    } = c;
    if (a || t(), !u || !f)
      return;
    const g = hn(d), _ = hn(i.clientWidth - (h + u)), y = hn(i.clientHeight - (d + f)), v = hn(h), w = {
      rootMargin: -g + "px " + -_ + "px " + -y + "px " + -v + "px",
      threshold: Et(0, Ae(1, l)) || 1
    };
    let C = !0;
    function k($) {
      const N = $[0].intersectionRatio;
      if (N !== l) {
        if (!C)
          return o();
        N ? o(!1, N) : s = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      N === 1 && !Sh(c, n.getBoundingClientRect()) && o(), C = !1;
    }
    try {
      e = new IntersectionObserver(k, {
        ...w,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(k, w);
    }
    e.observe(n);
  }
  return o(!0), r;
}
function kh(n, t, e, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = s, c = Do(n), h = i || r ? [...c ? js(c) : [], ...js(t)] : [];
  h.forEach((v) => {
    i && v.addEventListener("scroll", e, {
      passive: !0
    }), r && v.addEventListener("resize", e);
  });
  const d = c && a ? gm(c, e) : null;
  let u = -1, f = null;
  o && (f = new ResizeObserver((v) => {
    let [b] = v;
    b && b.target === c && f && (f.unobserve(t), cancelAnimationFrame(u), u = requestAnimationFrame(() => {
      var w;
      (w = f) == null || w.observe(t);
    })), e();
  }), c && !l && f.observe(c), f.observe(t));
  let g, _ = l ? Ge(n) : null;
  l && y();
  function y() {
    const v = Ge(n);
    _ && !Sh(_, v) && e(), _ = v, g = requestAnimationFrame(y);
  }
  return e(), () => {
    var v;
    h.forEach((b) => {
      i && b.removeEventListener("scroll", e), r && b.removeEventListener("resize", e);
    }), d == null || d(), (v = f) == null || v.disconnect(), f = null, l && cancelAnimationFrame(g);
  };
}
const Lo = jp, Po = Up, Ro = Op, xh = Vp, _m = Hp, ym = Fp, zo = (n, t, e) => {
  const s = /* @__PURE__ */ new Map(), i = {
    platform: mm,
    ...e
  }, r = {
    ...i.platform,
    _c: s
  };
  return zp(n, t, {
    ...i,
    platform: r
  });
};
class $h extends O {
  constructor(t) {
    super(t), this._ref = U(), this._handleDocClick = (e) => {
      const { state: { open: s }, id: i, togglePop: r } = this.props, o = p(e.target);
      s !== "closing" && !o.closest(`#pick-${i},#pick-pop-${i}`).length && o.parent().length && r(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return p(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var t;
    return (t = this._ref) == null ? void 0 : t.current;
  }
  get container() {
    return this._container;
  }
  _handleClick(t) {
    const { togglePop: e, onClickItem: s, state: i } = this.props, r = p(t.target), o = r.closest("[data-pick-value]");
    if (s && s(t, i.value), o.length)
      return t.stopPropagation(), e(!1, { value: `${o.dataset("pickValue")}` });
    if (r.closest('[data-dismiss="pick"]').length)
      return e(!1);
  }
  _getClass(t) {
    const { className: e, state: s, pickerName: i, empty: r } = t, { open: o } = s;
    return S(
      "pick-pop",
      i ? `${i}-pick-pop` : "",
      e,
      o === !0 && "in",
      r ? "is-empty-value" : ""
    );
  }
  _getProps(t) {
    const {
      id: e,
      style: s,
      maxHeight: i,
      maxWidth: r,
      minHeight: o,
      minWidth: a
    } = t, l = p.extend({
      maxHeight: i,
      maxWidth: r,
      minHeight: o,
      minWidth: a
    }, s);
    return {
      id: `pick-pop-${e}`,
      className: this._getClass(t),
      style: l,
      ref: this._ref,
      onClick: this._handleClick
    };
  }
  _getContainer(t) {
    if (!this._container) {
      const e = p(t.container || "body");
      let s = e.find(".pick-container");
      s.length || (s = p("<div>").addClass("pick-container").appendTo(e)), this._container = s[0];
    }
    return this._container;
  }
  _renderHeader(t) {
    const { header: e } = t;
    return e ? /* @__PURE__ */ m(P, { component: "header", className: "pick-pop-header", content: e }, "header") : null;
  }
  _renderFooter(t) {
    const { footer: e } = t;
    return e ? /* @__PURE__ */ m(P, { component: "footer", className: "pick-pop-footer", content: e }, "footer") : null;
  }
  _render(t) {
    return /* @__PURE__ */ m("div", { ...this._getProps(t), children: [
      this._renderHeader(t),
      this._renderPop(t),
      this._renderFooter(t)
    ] });
  }
  _renderPop(t) {
    return t.children;
  }
  _getStyle(t = {}, e) {
    var c;
    const s = (c = this.trigger) == null ? void 0 : c.getBoundingClientRect();
    if (!s)
      return {};
    const { width: i, minWidth: r, maxWidth: o, maxHeight: a } = this.props, l = s.width;
    if (typeof i == "function" ? t.width = i() : i === "100%" ? t.width = l : i && (t.width = J(i)), r === "100%" && (t.minWidth = l), o === "100%" && (t.maxWidth = l), this.props.limitInScreen && e && (!a || a === "auto" || typeof a == "number")) {
      let h;
      if (e.includes("bottom"))
        h = window.innerHeight - s.bottom - 2;
      else {
        const d = this.element.getBoundingClientRect().height;
        h = s.top, d > h && typeof t.top == "number" && (t.top += d - h);
      }
      h && (t.maxHeight = typeof a == "number" ? Math.min(h, a) : h);
    } else
      a && (t.maxHeight = a);
    return t;
  }
  layout() {
    const { element: t, trigger: e, props: s } = this, { state: i } = s;
    if (!t || !e || !i.open) {
      this._layoutWatcher && (this._layoutWatcher(), this._layoutWatcher = void 0);
      return;
    }
    this._layoutWatcher || (this._layoutWatcher = kh(e, t, () => {
      const { placement: r, width: o, noFlipAfterShow: a } = s, l = this._lastPlacement;
      zo(e, t, {
        placement: a && l ? l : !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" && (!a || !l) ? Ro() : null, Po(), Lo(1)].filter(Boolean)
      }).then(({ x: c, y: h, placement: d }) => {
        var u, f;
        if (Qt(e) || !qs(e, { checkZeroSize: !0 })) {
          p(t).css({ display: "none" });
          return;
        }
        p(t).css(this._getStyle({
          left: c,
          top: h
        }, d)), (f = (u = this.props).onLayout) == null || f.call(u, t), l || (this._lastPlacement = d);
      }), o === "100%" && p(t).css(this._getStyle());
    }));
  }
  componentDidMount() {
    var t, e;
    this.layout(), p(document).on("click", this._handleDocClick), (e = (t = this.props).afterRender) == null || e.call(t, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t, e;
    (e = (t = this.props).afterRender) == null || e.call(t, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e, s;
    p(document).off("click", this._handleDocClick);
    const t = this._layoutWatcher;
    t && (t(), this._layoutWatcher = void 0), this._container = void 0, this._ref = void 0, p(`#pick-pop-${this.props.id}`).remove(), (s = (e = this.props).beforeDestroy) == null || s.call(e);
  }
  render(t) {
    return Df(this._render(t), this._getContainer(t));
  }
}
let Rt = class extends O {
  constructor(t) {
    super(t), this._toggleTimer = 0, this._pop = U(), this._trigger = U(), this.toggle = async (e, s) => {
      (this.props.disabled || this.props.readonly) && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return s && await this.changeState(s), this.state;
      this._toggleTimer && (clearTimeout(this._toggleTimer), this._toggleTimer = 0);
      let r = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...s
      }));
      const { open: o } = r;
      return o === "closing" ? (await En(200, (a) => {
        this._toggleTimer = a;
      }), this._toggleTimer = 0, r = await this.changeState({ open: !1 })) : o === "opening" && (await En(50, (a) => {
        this._toggleTimer = a;
      }), this._toggleTimer = 0, r = await this.changeState({ open: !0 })), r;
    }, this._id = t.id ?? `_pick${st()}`, this.changeState = this.changeState.bind(this), this.state = this.getDefaultState(t);
  }
  get id() {
    return this._id;
  }
  get pop() {
    return this._pop.current;
  }
  get trigger() {
    return this._trigger.current;
  }
  get value() {
    return this.props.value ?? this.state.value;
  }
  getDefaultState(t) {
    const { value: e, defaultValue: s = "" } = t || this.props;
    return {
      value: String(e ?? s),
      open: !1
    };
  }
  resetState(t, e) {
    const s = this.getDefaultState(t);
    e ? this.state = s : this.changeState(s);
  }
  changeState(t, e) {
    return new Promise((s) => {
      this.setState(t, () => {
        e == null || e(), s(this.state);
      });
    });
  }
  open(t) {
    return this.toggle(!0, t);
  }
  close(t) {
    return this.toggle(!1, t);
  }
  _getTriggerProps(t, e) {
    return {
      id: this.id,
      ref: this._trigger,
      state: e,
      className: t.className,
      pickerName: t.pickerName,
      style: t.style,
      name: t.name,
      tagName: t.tagName,
      attrs: t.attrs,
      disabled: t.disabled,
      readonly: t.readonly,
      clickType: t.clickType,
      onRenderValue: t.onRenderValue,
      onClick: t.onClick,
      changeState: this.changeState,
      togglePop: this.toggle
    };
  }
  _getPopProps(t, e) {
    return {
      id: this.id,
      state: e,
      className: t.popClass,
      pickerName: t.pickerName,
      style: t.popStyle,
      disabled: t.disabled,
      readonly: t.readonly,
      changeState: this.changeState,
      togglePop: this.toggle,
      placement: t.popPlacement,
      container: t.popContainer,
      width: t.popWidth,
      height: t.popHeight,
      minHeight: t.popMinHeight,
      maxHeight: t.popMaxHeight,
      maxWidth: t.popMaxWidth,
      minWidth: t.popMinWidth,
      limitInScreen: t.limitPopInScreen,
      onClickItem: t.onClickItem,
      header: t.popHeader,
      footer: t.popFooter
    };
  }
  _renderTrigger(t, e) {
    return null;
  }
  _renderPop(t, e) {
    return null;
  }
  _afterRender(t = !1) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: t });
  }
  _getPop(t) {
    return t.Pop || this.constructor.Pop;
  }
  _getTrigger(t) {
    return t.Trigger || this.constructor.Trigger;
  }
  _isEmptyValue() {
    const { value: t } = this.state;
    return t == null || t === "";
  }
  _handleChange(t, e) {
    const { onChange: s } = this.props;
    s && s.call(this, t, e);
  }
  _handlePopToggle(t) {
    const { onPopShown: e, onPopHidden: s } = this.props;
    t === !0 && e ? e.call(this) : !t && s && s.call(this);
  }
  async setValue(t, e) {
    typeof t != "string" && (t = String(t));
    const { beforeChange: s } = this.props;
    if (s) {
      const i = await s.call(this, t, this.state.value);
      if (i === !1)
        return;
      typeof i == "string" && (t = i);
    }
    if (e) {
      const i = this._trigger.current;
      i && (i._skipTriggerChange = t);
    }
    return this.changeState({ value: t });
  }
  componentDidMount() {
    this._afterRender(!0);
    const { value: t, defaultValue: e } = this.props, s = t ?? e ?? "", i = this.state.value;
    s !== i && this._handleChange(i, s);
  }
  componentWillUpdate(t, e) {
    const { open: s } = this.state, { open: i } = e;
    if (!s == !i)
      return;
    const { onPopShow: r, onPopHide: o } = this.props;
    i && r ? r.call(this) : !i && o && o.call(this);
  }
  componentDidUpdate(t, e) {
    if (t.value !== this.props.value && this.props.value !== void 0) {
      this.setValue(this.props.value);
      return;
    }
    const { open: s, value: i } = this.state, { open: r, value: o } = e;
    !!s != !!r && this._handlePopToggle(!!s), i !== o && this._handleChange(i, o), this._afterRender();
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this), this._toggleTimer && clearTimeout(this._toggleTimer);
    const t = this._pop.current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: s } = e, i = this._getTrigger(t);
    let r;
    if (s && (!t.hidePopWhenEmpty || !this._isEmptyValue())) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ m(o, { ref: this._pop, ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return [
      /* @__PURE__ */ m(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ];
  }
};
Rt.Trigger = To;
Rt.Pop = $h;
Rt.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  limitPopInScreen: !0,
  clickType: "open"
};
let Eh = class extends Rt {
  getDefaultState(t) {
    const e = super.getDefaultState(t);
    return e.value === void 0 && (t || this.props).required && (e.value = this.getColors()[0]), e;
  }
  getColors() {
    const { colors: t } = this.props;
    return typeof t == "string" ? t.split(",") : t || [];
  }
  componentDidMount() {
    this.syncColor();
  }
  syncColor() {
    const { syncBackground: t, syncBorder: e, syncColor: s, syncValue: i } = this.props, r = this.state.value || "";
    if (t && p(t).css("backgroundColor", r), e && p(e).css("borderColor", r), s && p(s).css("color", r), i) {
      const o = p(i);
      o.is("input,textarea,select") ? o.val(r) : o.text(r);
    }
  }
  _handleChange(t, e) {
    this.props.disabled || (super._handleChange(t || "", e || ""), this.syncColor());
  }
  _renderTrigger(t, e) {
    const { icon: s, hint: i = "" } = t, { value: r } = e;
    return [
      s ? /* @__PURE__ */ m(rt, { icon: s, title: i }, "icon") : /* @__PURE__ */ m("span", { class: "color-picker-item bg-current ring ring-gray ring-inset", style: { background: r }, title: i })
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return s.style = p.extend({
      color: e.value
    }, s.style), s.className = S("color-picker", s.className, { disabled: t.disabled }), s;
  }
  _renderPop(t, e) {
    const { closeBtn: s, heading: i } = t, r = this.getColors(), { value: o } = e;
    let a;
    return i && (a = /* @__PURE__ */ m("div", { className: "color-picker-heading", children: [
      i,
      s ? /* @__PURE__ */ m("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ m("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ m("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ m(rt, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ m("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ m(rt, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
Eh.defaultProps = {
  ...Rt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 184
};
class Fo extends W {
}
Fo.NAME = "ColorPicker";
Fo.Component = Eh;
Fo.register();
let vm = class extends O {
  render(t) {
    const {
      id: e,
      popup: s,
      title: i,
      content: r,
      style: o,
      className: a,
      closeBtn: l,
      arrow: c,
      headingClass: h,
      titleClass: d,
      contentClass: u,
      arrowStyle: f,
      onlyInner: g,
      footer: _,
      footerClass: y
    } = t;
    let v = /* @__PURE__ */ m(P, { content: r }, "content");
    (u || i) && (v = /* @__PURE__ */ m("div", { className: u, children: v }, "content"));
    let b = /* @__PURE__ */ m(P, { content: _ }, "footer");
    (y || i) && (b = /* @__PURE__ */ m("div", { className: y, children: b }, "footer"));
    const w = [], C = l ? /* @__PURE__ */ m("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ m("span", { className: "close" }) }) : null;
    return i ? w.push(
      /* @__PURE__ */ m("div", { className: h, children: [
        i ? /* @__PURE__ */ m(P, { className: d, content: i }) : null,
        C
      ] }, "heading")
    ) : w.push(C), w.push(v, b), c && w.push(/* @__PURE__ */ m("div", { className: typeof c == "string" ? c : "arrow", style: f }, "arrow")), g ? w : /* @__PURE__ */ m("div", { id: e, className: S("popover", a, { popup: s, "has-heading": i }), style: o, children: w });
  }
};
class Oo extends W {
}
Oo.NAME = "PopoverPanel";
Oo.Component = vm;
const cl = "show", hl = "in", Cs = class Th extends it {
  constructor() {
    super(...arguments), this._lastTriggerAttr = "", this._handlePanelInited = () => {
      this.layout();
    }, this._getClickBounding = () => {
      const t = this._triggerEvent;
      return {
        x: t.clientX,
        y: t.clientY,
        left: t.clientX,
        top: t.clientY,
        width: 0,
        height: 0,
        bottom: t.clientY,
        right: t.clientX
      };
    };
  }
  get shown() {
    return this._shown;
  }
  get id() {
    return this._id;
  }
  get zIndex() {
    return this._zIndex;
  }
  get trigger() {
    return this._triggerElement;
  }
  get target() {
    return this._targetElement;
  }
  afterInit() {
    const { trigger: t, id: e, triggerEvent: s } = this.options;
    this._triggerEvent = s, this._id = e || `popover_${this.gid}`;
    const i = this.getTriggerElement();
    if (i instanceof HTMLElement) {
      const o = p(i), { namespace: a } = this;
      if (t) {
        const l = () => {
          const c = o.attr(`zui-toggle-${this.constructor.ZUI}`) ?? "";
          if (c && this._lastTriggerAttr === c)
            return;
          this._lastTriggerAttr = c;
          let h = o.dataset();
          if (c) {
            const d = Te(c);
            let u = d.$options;
            typeof u == "function" && (u = u.call(this, this.element, d)), h = p.extend(h, d, u || {});
          }
          this.setOptions(h);
        };
        t === "hover" ? o.on(`mouseenter${a}`, (c) => {
          o.is("[disabled],.disabled") || (l(), this._clearDelayHide(), this.shown || this.show({ delay: !0, event: c }));
        }).on(`mouseleave${a}`, () => {
          this.delayHide();
        }) : o.on(`${t}${a}`, (c) => {
          o.is("[disabled],.disabled") || (this.shown || l(), this.toggle({ event: c, delay: !0 }), c.preventDefault());
        });
      }
    }
    const { show: r } = this.options;
    r && this.show({ delay: typeof r == "number" ? r : !1 });
  }
  getTriggerElement() {
    if (!this._triggerElement) {
      let { element: t = this.element } = this.options;
      t === document.body && (t = {
        getBoundingClientRect: this._getClickBounding
      }), this._triggerElement = t, this._virtual = !(t instanceof HTMLElement);
    }
    return this._triggerElement;
  }
  initTarget() {
    let t = this.options.target;
    return this._dynamic = !t, t ? (typeof t == "function" && (t = t()), typeof t == "string" && (t === "$next" ? t = p(this._triggerElement).next() : t.startsWith("$target:") && (t = p(this._triggerElement).closest(t.slice(8)))), p(t)[0]) : this._createTarget();
  }
  show(t) {
    const { delay: e, event: s, hideOthers: i = this.options.hideOthers } = t || {};
    if (s && (this._triggerEvent = s), e)
      return this._resetTimer(() => {
        this.show();
      }, e === !0 ? this.options.delay : e);
    if (!this.inited) {
      this.setOptions({ show: !0 });
      return;
    }
    if (this._shown)
      return;
    const r = this.initTarget();
    if (!r)
      return;
    this._targetElement = r;
    const o = p(r), { animation: a, onShow: l, onShown: c, trigger: h, elementShowClass: d } = this.options;
    if ((l == null ? void 0 : l.call(this)) === !1)
      return;
    const { SHOWN_POPOVERS: f } = this.constructor;
    o.addClass(cl), a && o.addClass(a === !0 ? "fade" : a), this._zIndex = Th.Z_INDEX++, this._shown = !0, this.render(), f.set(this.gid, this), this.emit("show"), i && f.forEach((_) => {
      _ !== this && _.hide();
    });
    const { namespace: g } = this;
    h === "hover" && (this._clearDelayHide(), o.off(g).on(`mouseenter${g}`, () => {
      this._clearDelayHide();
    }).on(`mouseleave${g}`, () => {
      this.delayHide();
    })), this._virtual || (o.attr("zui-commands-proxy", "").data("zui.commandProxy", this._triggerElement), d && p(this._triggerElement).addClass(d)), this._resetTimer(() => {
      o.addClass(hl), this._resetTimer(() => {
        c == null || c.call(this), this.emit("shown");
      }, 200);
    }, 50);
  }
  hide(t) {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: e, animation: s, onHide: i, onHidden: r, trigger: o, hideNewOnHide: a, elementShowClass: l } = this.options, c = p(this._targetElement), { SHOWN_POPOVERS: h } = this.constructor;
    if ((i == null ? void 0 : i.call(this)) !== !1) {
      if (this._shown = !1, h.delete(this.gid), this.emit("hide"), c.removeClass(hl), o === "hover" && (this._clearDelayHide(), c.off(this.namespace)), !this._virtual) {
        const u = p(this._triggerElement);
        u.removeAttr("zui-commands-proxy").removeData("zui.commandProxy"), l && u.removeClass(l).removeAttr("data-pop-placement");
      }
      a && h.forEach((u) => {
        u !== this && u.zIndex > this.zIndex && u.options.trigger !== "hover" && u.hide();
      }), this._resetTimer(() => {
        r == null || r.call(this), this.emit("hidden"), c.removeClass(cl), (e || t) && this._resetTimer(() => {
          this.destroy();
        }, !t && typeof e == "number" ? e : 0), this._destoryTarget();
      }, s && !t ? 200 : 0);
    }
  }
  toggle(t) {
    this._shown ? this.hide() : this.show(t);
  }
  destroy() {
    if (super.destroy(), !this._virtual) {
      const { namespace: t } = this;
      p(this._triggerElement).off(t);
    }
    this.$element.hasClass("popover-tmp") && this.$element.remove(), this._resetTimer(), this._destoryTarget(), this._clearDelayHide();
  }
  updateLayout() {
    if (this.destroyed || !this._shown)
      return;
    const t = this.getTriggerElement(), e = this._targetElement, { minWidth: s, minHeight: i, maxWidth: r, maxHeight: o, width: a, height: l } = this.options;
    let c = {
      minWidth: J(s),
      minHeight: J(i),
      maxWidth: J(r),
      maxHeight: J(o)
    };
    a && (c.width = typeof a == "function" ? a() : a === "100%" && t ? t.getBoundingClientRect().width : a), l && (c.height = typeof l == "function" ? l() : l), c = Object.entries(c).reduce((h, [d, u]) => (u != null && (h[d] = u), h), {}), Object.keys(c).length && p(e).css(c), this.updatePosition();
  }
  updatePosition() {
    const t = this.getTriggerElement(), e = this._targetElement, { animation: s, name: i = "popover", limitInScreen: r, onLayout: o } = this.options;
    zo(...this._getLayoutOptions()).then(({ x: a, y: l, middlewareData: c, placement: h, strategy: d }) => {
      if (t instanceof HTMLElement && Qt(t)) {
        this.hide(!0);
        return;
      }
      const u = {
        position: d,
        left: a,
        top: l
      }, f = p(e).css(u);
      r && f.css({
        top: Math.max(0, Math.min(window.innerHeight - f.outerHeight(), l)),
        left: Math.max(0, Math.min(window.innerWidth - f.outerWidth(), a))
      });
      const g = h.split("-")[0], _ = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }[g], y = c.arrow;
      y && f.attr("data-pop-placement", g).find(".arrow").css({
        left: y.x,
        top: y.y
      }).attr("class", `arrow ${i}-arrow arrow-${_}`), s === !0 && f.attr("class", `${f.attr("class").split(" ").filter((v) => v !== "fade" && !v.startsWith("fade-from")).join(" ")} fade-from-${_}`), this._virtual || p(this._triggerElement).attr("data-pop-placement", g), o && o.call(this, {
        target: e,
        trigger: t,
        popSide: g,
        arrowSide: _,
        x: a,
        y: l,
        placement: h,
        strategy: d
      });
    });
  }
  layout() {
    const t = this._triggerElement, e = this._targetElement, s = this._layoutWatcher;
    if (!e || !t || !this._shown) {
      s && (s(), this._layoutWatcher = void 0);
      return;
    }
    s || (this._layoutWatcher = kh(t, e, this.updateLayout.bind(this), { ancestorResize: !1 }));
  }
  render(t) {
    super.render(t);
    const e = this._targetElement;
    if (!e)
      return;
    const s = this._getRenderOptions(), i = p(e);
    if (i.z("popover", this.gid).toggleClass("popup", s.popup).css(s.style), s.className && i.setClass(s.className), this._dynamic) {
      let r = this._panel;
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(s) : (r = new Oo(e, s), r.on("inited", this._handlePanelInited)), this._panel = r;
    } else
      s.arrow && (i.find(".arrow").length || i.append(p('<div class="arrow"></div>').css(s.arrowStyle))), this.layout();
  }
  handleClickOutside(t) {
    if (this.options.mask) {
      const e = this._triggerElement;
      e instanceof HTMLElement && p(t.target).closest(e).length || this.hide();
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleClickTarget(t) {
  }
  delayHide(t = 150) {
    this._resetTimer(), this._clearDelayHide(), this._hideTimer = window.setTimeout(() => {
      this._hideTimer = 0, this.hide();
    }, t);
  }
  _clearDelayHide() {
    this._hideTimer && (clearTimeout(this._hideTimer), this._hideTimer = 0);
  }
  _getLayoutOptions() {
    const t = this.getTriggerElement(), e = this._targetElement, { placement: s, flip: i, limitSize: r, shift: o, offset: a, arrow: l, strategy: c, maxHeight: h, maxWidth: d, autoHide: u } = this.options, f = l ? e.querySelector(".arrow") : null, g = f ? typeof l == "number" ? l : 5 : 0, _ = () => typeof a == "function" ? a : typeof a == "object" ? {
      mainAxis: (a.mainAxis || 0) + g,
      ...a
    } : (a || 0) + g;
    return [t, e, {
      placement: s,
      strategy: c,
      middleware: [
        i ? Ro() : null,
        o ? Po(typeof o == "object" ? o : void 0) : null,
        a || g ? Lo(_()) : null,
        l ? ym({ element: f }) : null,
        r ? xh({
          apply({ availableWidth: y, availableHeight: v, placement: b }) {
            let w = v - (["top", "bottom"].includes(b.split("-")[0]) ? g : 0) - 2, C = y - 2;
            h && (w = Math.min(w, me(h)[0])), d && (C = Math.min(C, me(d)[0])), p(e).css({
              maxHeight: w,
              maxWidth: C
            });
          }
        }) : null,
        u ? _m(typeof u == "object" ? u : void 0) : null
      ].filter(Boolean)
    }];
  }
  _getRenderOptions() {
    const { name: t = "popover" } = this.options, {
      popup: e,
      title: s,
      content: i,
      headingClass: r = `${t}-heading`,
      titleClass: o = `${t}-title`,
      contentClass: a = `${t}-content`,
      style: l,
      className: c = t,
      closeBtn: h,
      arrow: d,
      footer: u,
      footerClass: f = `${t}-footer`
    } = this.options;
    return {
      popup: e,
      title: s,
      titleClass: o,
      headingClass: r,
      contentClass: a,
      content: i,
      style: { zIndex: this._zIndex, ...l },
      className: c,
      closeBtn: h,
      arrow: d ? `arrow ${t}-arrow` : !1,
      arrowStyle: { "--arrow-size": `${typeof d == "number" ? d : 5}px` },
      onlyInner: !0,
      footer: u,
      footerClass: f
    };
  }
  _destoryTarget() {
    var t, e, s;
    (t = this._layoutWatcher) == null || t.call(this), this._layoutWatcher = void 0, this._dynamic && ((e = this._panel) == null || e.destroy(), (s = this._targetElement) == null || s.remove(), this._panel = void 0, this._targetElement = void 0);
  }
  _resetTimer(t, e = 0) {
    this._timer && clearTimeout(this._timer), t && (this._timer = window.setTimeout(() => {
      this._timer = 0, t();
    }, e));
  }
  _createTarget() {
    const { container: t = "body" } = this.options, e = p(t);
    let s = e.find(`#${this._id}`);
    return s.length || (s = p("<div />").attr({ id: this._id, class: "popover" }).appendTo(e)), s[0];
  }
  static create(t, e) {
    const { element: s, container: i = "body", id: r = `popover_${st()}` } = t || {};
    return e = e || (s instanceof HTMLElement ? s : void 0), e || (e = p(`<div id="${r}" class="popover-tmp"></div>`).appendTo(p(i))[0]), this.ensure(e, { id: r, destroyOnHide: !0, ...t });
  }
  static show(t) {
    const { element: e, event: s, ...i } = t, r = e || (s == null ? void 0 : s.currentTarget);
    return this.create({
      element: r,
      show: !0,
      destroyOnHide: !0,
      triggerEvent: s,
      ...i
    }, r instanceof HTMLElement ? r : document.body);
  }
};
Cs.NAME = "Popover";
Cs.Z_INDEX = 1700;
Cs.MULTI_INSTANCE = !0;
Cs.DEFAULT = {
  placement: "top",
  strategy: "absolute",
  flip: !0,
  arrow: !0,
  offset: 1,
  trigger: "click",
  mask: !0,
  delay: 0,
  animation: !0,
  closeBtn: !0,
  popup: !0,
  elementShowClass: "with-popover-show",
  hideNewOnHide: !0
};
Cs.SHOWN_POPOVERS = /* @__PURE__ */ new Map();
let Gt = Cs;
Gt.toggle = {
  trigger: ["click", "hover"],
  convertHref: { selector: "target" },
  check(n, t) {
    const e = p(n);
    return e.data(this.KEY) ? !1 : t === "hover" ? (e.dataset("trigger") || this.DEFAULT.trigger) === "hover" : !0;
  },
  getOptions(n, t, e) {
    return {
      triggerEvent: e,
      ...t
    };
  },
  onToggle(n, t, e) {
    n.toggle({ event: e });
  }
};
Gt.register();
p(() => {
  p(document).on(`click.${Gt.NAMESPACE}`, (n) => {
    const { SHOWN_POPOVERS: t } = Gt;
    if (!t.size)
      return;
    const e = p(n.target), s = e.closest("[z-popover]"), i = s.length ? s.z("popover") : 0, r = i ? t.get(i) : null;
    if (r) {
      const a = r.options.name ?? r.constructor.ZUI;
      if (e.closest(`[data-dismiss="popover"],[data-dismiss="${a}"]`).length) {
        r.hide();
        return;
      }
      if (r.handleClickTarget(n))
        return;
    }
    const o = [...t.values()].sort((a, l) => l.zIndex - a.zIndex);
    for (const a of o)
      if (a !== r && a.handleClickOutside(n))
        return;
  });
});
Object.assign(window, { Popover: Gt });
class ps extends Gt {
  _getRenderOptions() {
    const { type: t, className: e, title: s, content: i } = this.options;
    let r = s, o = i;
    return o === void 0 && (o = r, r = void 0), {
      ...super._getRenderOptions(),
      title: r,
      content: o,
      className: S("tooltip", t, e, r ? "tooltip-has-title" : ""),
      contentClass: r ? "tooltip-content" : ""
    };
  }
}
ps.NAME = "Tooltip";
ps.DEFAULT = {
  ...Gt.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3,
  hideOthers: !0,
  hideNewOnHide: !1
};
ps.register();
class yi extends it {
  constructor() {
    super(...arguments), this._timer = 0, this._copying = !1;
  }
  async getContent() {
    const { copy: t, target: e, onCopy: s } = this.options;
    let i = t;
    if (e && i === void 0) {
      const r = p(e);
      i = {
        text: r.text(),
        html: r.html()
      };
    }
    if (s) {
      const r = await s.call(this, i);
      r !== void 0 && (r instanceof p ? i = {
        text: r.text(),
        html: r.html()
      } : i = r);
    }
    return i;
  }
  async copy() {
    if (this._copying)
      return;
    this._copying = !0, this._hideTip();
    const { onCopied: t, copyingClass: e } = this.options;
    e && this.$element.addClass(e);
    const s = await this.getContent();
    if (s === !1 || s === void 0) {
      this._copying = !1;
      return;
    }
    await gf(s), this._showTip(), t && t.call(this), this._copying = !1;
  }
  _showTip() {
    const { $element: t } = this, { mode: e, tooltipOptions: s, copiedText: i, duration: r, copiedIcon: o, overlayClass: a, copiedClass: l } = this.options;
    let c = i;
    if (c === void 0 && (c = { zh_cn: "已复制", zh_tw: "已複製", en: "Copied" }[j.getCode()] ?? "Copied"), l && t.addClass(l), e === "tooltip") {
      let h = this._tooltip;
      (!h || h.destroyed) && (h = new ps(this.$element, {
        trigger: "manual",
        type: "success",
        title: c,
        placement: "top",
        ...s
      }), this._tooltip = h), h.show();
    } else
      a && t.addClass(a), t.addClass("hide-children"), o && t.append(`<i class="copied-overlay icon ${o.startsWith("icon-") ? o : `icon-${o}`}" style="display:inline!important"></i>`), t.append(`<span class="copied-overlay text" style="display:inline!important">${c}</span>`);
    this._timer = window.setTimeout(() => {
      this._hideTip();
    }, r);
  }
  _hideTip() {
    var o;
    this._timer && (clearTimeout(this._timer), this._timer = 0);
    const { $element: t, options: e } = this, { copyingClass: s, copiedClass: i, overlayClass: r } = e;
    t.removeClass("hide-children"), t.children(".copied-overlay").remove(), [s, i, r].forEach((a) => {
      a && t.removeClass(a);
    }), (o = this._tooltip) == null || o.hide();
  }
  destroy() {
    var t;
    this._hideTip(), (t = this._tooltip) == null || t.destroy();
  }
}
yi.NAME = "CopyBtn";
yi.DEFAULT = {
  mode: "tooltip",
  duration: 3e3,
  copiedClass: "is-copied",
  overlayClass: "success-pale",
  copyingClass: "is-copying"
};
yi.toggle = {
  trigger: "click",
  convertHref: { selector: "target" },
  onToggle(n) {
    n.copy();
  }
};
yi.register();
class Nh extends O {
  constructor() {
    super(...arguments), this._ref = U(), this._handleClickItem = (t, e) => {
      var s, i;
      (i = (s = this.props).onChange) == null || i.call(s, t, +e.item.key);
    };
  }
  componentDidMount() {
    setTimeout(() => {
      p(this._ref.current).find(".menu-item>.active").scrollIntoView({ container: ".menu" });
    }, 100);
  }
  render(t) {
    const { minuteStep: e = 5, hour: s, minute: i } = t, r = [], o = [];
    for (let l = 0; l < 24; ++l)
      r.push({ key: String(l), text: l < 10 ? `0${l}` : l, active: s === l });
    for (let l = 0; l < 60; l += e)
      o.push({ key: String(l), text: l < 10 ? `0${l}` : l, active: i === l });
    const a = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ m("div", { className: "time-picker-menu row", ref: this._ref, children: [
      /* @__PURE__ */ m(
        At,
        {
          className: a,
          items: r,
          onClickItem: this._handleClickItem.bind(this, "hour")
        }
      ),
      /* @__PURE__ */ m(
        At,
        {
          className: a,
          items: o,
          onClickItem: this._handleClickItem.bind(this, "minute")
        }
      )
    ] });
  }
}
const dl = (n) => {
  if (!n)
    return;
  const t = Q(`1999-01-01 ${n}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Mh = class extends Rt {
  constructor() {
    super(...arguments), this._handleInputFocus = () => {
      this.toggle(!0);
    }, this._handleInputChange = (t) => {
      this.setTime(t.target.value);
    }, this._handleSetTime = (t, e) => {
      this.setTime({ [t]: String(e) });
    }, this._handleClearBtnClick = () => {
      this.setTime("");
    };
  }
  getDefaultState(t) {
    const e = super.getDefaultState(t);
    return e.value === "now" && (e.value = nt(/* @__PURE__ */ new Date(), (t || this.props).format)), e;
  }
  setTime(t, e) {
    if (!e && (this.props.disabled || this.props.readonly))
      return;
    let s = "";
    if (typeof t == "string")
      s = t;
    else {
      const [c, h] = (this.state.value || "00:00").split(":"), { hour: d = +c, minute: u = +h } = t;
      s = `${d}:${u}`;
    }
    const i = dl(s), { onInvalid: r, required: o, defaultValue: a, format: l } = this.props;
    return this.changeState({ value: i ? nt(i, l) : o ? a : "" }, () => {
      !i && r && r(s);
    });
  }
  setValue(t, e) {
    if (e) {
      const s = this._trigger.current;
      s && (s._skipTriggerChange = t);
    }
    return this.setTime(t, !0);
  }
  getTime() {
    const t = dl(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, h = `time-picker-${this.id}`;
    let d;
    return c && !r && l.length ? d = /* @__PURE__ */ m("button", { type: "button", className: "btn size-sm square ghost", onClick: this._handleClearBtnClick, children: /* @__PURE__ */ m("span", { className: "close" }) }) : i && (i === !0 ? d = /* @__PURE__ */ m("i", { class: "i-time" }) : d = /* @__PURE__ */ m(rt, { icon: i })), [
      /* @__PURE__ */ m("input", { id: h, type: "text", className: "form-control", placeholder: s, value: l, disabled: o, readOnly: a, autoComplete: "off", onFocus: this._handleInputFocus, onChange: this._handleInputChange }, "input"),
      d ? /* @__PURE__ */ m("label", { for: h, className: "input-control-suffix", children: d }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return {
      ...s,
      className: S(s.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [e, s] = this.getTime() || [];
    return /* @__PURE__ */ m(Nh, { hour: e, minute: s, minuteStep: t.minuteStep, onChange: this._handleSetTime });
  }
};
Mh.defaultProps = {
  ...Rt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
function bm(n, t, e) {
  return t && n < t ? t : e && n > e ? e : n;
}
function Rs(n) {
  if (n == null)
    return null;
  if (typeof n == "function" && (n = n()), typeof n == "string" && n.startsWith("today")) {
    const t = /* @__PURE__ */ new Date();
    n.length > 6 ? n = sr(t, n.substring(5).replace("+", "")) : n = t;
  } else
    n = Q(n);
  return ti(n) ? n : null;
}
const wm = (n, t, e = 0) => {
  const s = new Date(n, t - 1, 1), i = s.getDay(), r = s.getTime() - (7 + i - e) % 7 * Ee;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: s.getTime()
  };
}, ul = (n, t) => new Set((Array.isArray(n) ? n : [n]).map((e) => nt(e, t)));
class Cm extends O {
  constructor() {
    super(...arguments), this._handleClickDate = (t) => {
      const { onClickDate: e } = this.props;
      if (!e)
        return;
      const s = p(t.target).closest(".mini-calendar-day").dataset("date");
      s && e(s);
    };
  }
  render(t) {
    var F, T;
    const e = /* @__PURE__ */ new Date(), {
      weekStart: s = 1,
      weekNames: i = j.getLang("weekNames"),
      monthNames: r = j.getLang("monthNames"),
      year: o = e.getFullYear(),
      month: a = e.getMonth() + 1,
      highlights: l = [],
      selections: c = [],
      maxDate: h,
      minDate: d,
      isAllowDate: u
    } = t, f = [], g = "btn ghost square rounded-full";
    for (let L = 0; L < 7; L++) {
      const V = (s + L) % 7;
      f.push(/* @__PURE__ */ m("div", { className: S("col mini-calendar-day", { "is-weekend": V === 0 || V === 6 }), children: /* @__PURE__ */ m("div", { children: i ? i[V] : V }) }, L));
    }
    const { startTime: _, days: y, firstDay: v } = wm(o, a, s), b = v + y * Ee;
    let w = _;
    const C = [], k = "yyyy-MM-dd", $ = ul(l, k), N = ul(c, k), A = ((F = h ? Q(h) : null) == null ? void 0 : F.getTime()) ?? Number.MAX_SAFE_INTEGER, I = ((T = d ? Q(d) : null) == null ? void 0 : T.getTime()) ?? 0;
    for (; w <= b; ) {
      const L = [];
      for (let V = 0; V < 7; V++) {
        const B = new Date(w);
        let K = (u == null ? void 0 : u(B)) ?? !0;
        typeof K == "boolean" && (K = { allow: K });
        const X = B.getDate(), Z = nt(B, k), R = B.getDay(), ft = Kr(B, v), $s = S("col mini-calendar-day", {
          active: $.has(Z),
          selected: N.has(Z),
          "is-first": X === 1,
          "is-in-month": ft,
          "is-out-month": !ft,
          "is-today": ue(B, e),
          "is-weekend": R === 0 || R === 6,
          disabled: !K.allow || (w > A || w < I) && !ue(B, A) && !ue(B, I)
        });
        L.push(
          /* @__PURE__ */ m("div", { className: $s, "data-date": Z, children: /* @__PURE__ */ m("button", { type: "button", className: g, onClick: this._handleClickDate, title: K.hint, children: X === 1 && r ? r[B.getMonth()] : B.getDate() }) }, Z)
        ), w += Ee;
      }
      C.push(/* @__PURE__ */ m("div", { className: "row", children: L }, w));
    }
    return /* @__PURE__ */ m("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ m("div", { className: "row", children: f }, "header"),
      C
    ] }, `${o}-${a}`);
  }
}
class fl extends O {
  constructor() {
    super(...arguments), this._ref = U(), this._handleClickItem = (t) => {
      const { onChange: e } = this.props;
      if (!e)
        return;
      const i = p(t.target).closest("[data-value]").dataset("value");
      i && (e(+i), t.stopPropagation());
    };
  }
  render(t) {
    const { className: e, max: s, min: i, value: r } = t, o = [], a = (/* @__PURE__ */ new Date()).getFullYear();
    for (let l = i; l <= s; ++l)
      o.push(/* @__PURE__ */ m(et, { type: "ghost", "data-value": l, active: l === r, className: S(a === l ? "is-current" : ""), onClick: this._handleClickItem, children: l }, l));
    return /* @__PURE__ */ m("div", { className: e, ref: this._ref, children: o });
  }
}
class Sm extends O {
  constructor(t) {
    super(t), this._ref = U(), this._handleClick = (i) => {
      const r = p(i.target).closest("[data-set-date]");
      r.length && this.changeDate(r.dataset("set-date"));
    }, this._switchToPrevMonth = () => {
      const { year: i, month: r } = this.state;
      r === 1 ? this.setState({ year: i - 1, month: 12 }) : this.setState({ month: r - 1 });
    }, this._switchToNextMonth = () => {
      const { year: i, month: r } = this.state;
      r === 12 ? this.setState({ year: i + 1, month: 1 }) : this.setState({ month: r + 1 });
    }, this._changeYear = (i) => {
      this.setState({ year: i, select: "day" });
    }, this._changeMonth = (i) => {
      this.setState({ month: i, select: "day" });
    }, this.changeDate = (i) => {
      var r, o;
      (o = (r = this.props).onChange) == null || o.call(r, i);
    };
    const { date: e } = t, s = Rs(e) || /* @__PURE__ */ new Date();
    this.state = {
      select: "day",
      year: s.getFullYear(),
      month: s.getMonth() + 1
    };
  }
  _renderMenu(t) {
    return At.render(t.menu, [], {
      onClickItem: (e) => {
        const s = e.item.value;
        typeof s == "string" && this.changeDate(s);
      }
    }, this);
  }
  _renderFooter(t) {
    let { actions: e } = t;
    const { todayText: s = j.getLang("today"), clearText: i } = t;
    return e === void 0 && (e = [{ text: s, "data-set-date": nt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(e) && (e = { items: e }), /* @__PURE__ */ m("div", { className: "date-picker-menu-footer", children: [
      /* @__PURE__ */ m(ht, { btnProps: { className: "ghost text-primary" }, ...e }),
      i ? /* @__PURE__ */ m(et, { type: "ghost text-link", "data-set-date": "", children: i }) : null
    ] });
  }
  _showSelect(t) {
    this.setState((e) => e.select === t ? { select: "day" } : { select: t });
  }
  render(t, e) {
    const {
      date: s,
      yearText: i = j.getLang("yearFormat") || "{0}",
      weekNames: r = j.getLang("weekNames"),
      monthNames: o = j.getLang("monthNames"),
      minDate: a,
      maxDate: l,
      weekStart: c
    } = t, h = Rs(s), {
      year: d,
      month: u,
      select: f
    } = e, g = f === "day", _ = a || Q("1970-1-1"), y = l || Q("2099-12-31");
    return /* @__PURE__ */ m("div", { className: "date-picker-menu row", ref: this._ref, onClick: this._handleClick, children: [
      this._renderMenu(t),
      /* @__PURE__ */ m("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ m("div", { className: "row p-2", children: [
          /* @__PURE__ */ m(et, { type: f === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: tt(i, d) }),
          /* @__PURE__ */ m(et, { type: f === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: o ? o[u - 1] : u }),
          /* @__PURE__ */ m("div", { className: "flex-auto" }),
          g ? /* @__PURE__ */ m("div", { children: [
            /* @__PURE__ */ m(et, { type: "ghost", size: "sm", square: !0, onClick: this._switchToPrevMonth, children: /* @__PURE__ */ m("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ m(et, { type: "ghost", size: "sm", square: !0, onClick: this._switchToNextMonth, children: /* @__PURE__ */ m("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        g ? /* @__PURE__ */ m(
          Cm,
          {
            weekStart: c,
            weekNames: r,
            monthNames: o,
            maxDate: y,
            minDate: _,
            year: d,
            month: u,
            selections: h || [],
            onClickDate: this.changeDate,
            isAllowDate: t.isAllowDate
          }
        ) : null,
        f === "year" ? /* @__PURE__ */ m(
          fl,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: _.getFullYear(),
            max: y.getFullYear(),
            onChange: this._changeYear
          }
        ) : f === "month" ? /* @__PURE__ */ m(
          fl,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: u,
            min: 1,
            max: 12,
            onChange: this._changeMonth
          }
        ) : null,
        g ? this._renderFooter(t) : null
      ] })
    ] });
  }
}
let vi = class extends Rt {
  constructor() {
    super(...arguments), this.setDate = (t, e) => {
      const { disabled: s, readonly: i } = this.props;
      if (!e && (s || i))
        return;
      const r = this._calcValue(t);
      return this.changeState({ value: r }, () => {
        this._afterSetDate();
      });
    }, this._handleInputFocus = () => {
      this.toggle(!0);
    }, this._handleInputChange = (t) => {
      this.setDate(t.target.value);
    }, this._handleClearBtnClick = () => {
      this.setDate("");
    }, this._handleSetDate = (t) => {
      this.setDate(t);
    };
  }
  getDefaultState(t) {
    const e = super.getDefaultState(t);
    return {
      ...e,
      value: this._calcValue(e.value)
    };
  }
  getDate() {
    return this._date;
  }
  setValue(t, e) {
    if (e) {
      const s = this._trigger.current;
      s && (s._skipTriggerChange = t);
    }
    return this.setDate(t, !0);
  }
  _calcValue(t) {
    const { onInvalid: e, defaultValue: s = "", required: i, allowInvalid: r, format: o } = this.props;
    let a = this._parseDate(t);
    if (!a && e) {
      const l = e(t);
      l && (a = this._parseDate(l));
    }
    return this._date = a, a ? nt(a, o) : r ? t : i ? s : "";
  }
  _getDateRange(t) {
    const { minDate: e, maxDate: s } = this.props;
    return [Rs(typeof e == "function" ? e(t) : e), Rs(typeof s == "function" ? s(t) : s)];
  }
  _parseDate(t) {
    const e = Rs(t);
    return e && this._isAllowDate(e) ? bm(e, ...this._getDateRange(t)) : null;
  }
  _afterSetDate() {
    this.toggle(!1);
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a, display: l } = t, { value: c = "", open: h } = e, d = `date-picker-${this.id}`;
    let u;
    h && !r && c.length ? u = /* @__PURE__ */ m("button", { type: "button", className: "btn size-sm square ghost", onClick: this._handleClearBtnClick, children: /* @__PURE__ */ m("span", { className: "close" }) }) : i && (i === !0 ? u = /* @__PURE__ */ m("i", { class: "i-calendar" }) : u = /* @__PURE__ */ m(rt, { icon: i }));
    const f = h ? c : l ? l(c, this._date) : c;
    return [
      /* @__PURE__ */ m(
        "input",
        {
          id: d,
          type: "text",
          className: "form-control",
          placeholder: s,
          value: f,
          disabled: o,
          readOnly: a,
          autoComplete: "off",
          onFocus: this._handleInputFocus,
          onChange: this._handleInputChange
        },
        "input"
      ),
      u ? /* @__PURE__ */ m("label", { for: d, className: "input-control-suffix", children: u }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return {
      ...s,
      className: S(s.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const s = super._getPopProps(t, e);
    return {
      ...s,
      className: S(s.className, "popup")
    };
  }
  _isAllowDate(t) {
    var s;
    const e = ((s = this.props.isAllowDate) == null ? void 0 : s.call(this, t)) ?? !0;
    return e === !0 || typeof e == "object" && e && e.allow;
  }
  _renderPop(t, e) {
    const { weekNames: s, monthNames: i, weekStart: r, yearText: o, todayText: a, clearText: l, menu: c, actions: h, required: d, isAllowDate: u } = t, [f, g] = this._getDateRange(e.value);
    return /* @__PURE__ */ m(
      Sm,
      {
        onChange: this._handleSetDate,
        date: this._date,
        weekNames: s,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: d ? "" : l,
        menu: c,
        actions: h,
        minDate: f,
        maxDate: g,
        isAllowDate: u ? this._isAllowDate.bind(this) : void 0
      }
    );
  }
};
vi.defaultProps = {
  ...Rt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0,
  limitPopInScreen: !1
};
let Ah = class extends vi {
  constructor() {
    super(...arguments), this._handleSetDate = (t) => {
      const e = Q(t), s = this.getDate() || /* @__PURE__ */ new Date();
      e.setHours(s.getHours()), e.setMinutes(s.getMinutes()), e.setSeconds(s.getSeconds()), this.setDate(nt(e, this.props.format));
    }, this._handleSetTime = (t, e) => {
      const s = this.getDate() || /* @__PURE__ */ new Date();
      t === "hour" ? s.setHours(e) : t === "minute" ? s.setMinutes(e) : s.setSeconds(e), this.setDate(nt(s, this.props.format));
    };
  }
  getTime() {
    const t = this.getDate();
    return t ? [t.getHours(), t.getMinutes(), t.getSeconds()] : null;
  }
  _afterSetDate() {
  }
  _renderPop(t, e) {
    const [s, i] = this.getTime() || [];
    return /* @__PURE__ */ m("div", { className: "datetime-picker-menu row", children: [
      super._renderPop(t, e),
      /* @__PURE__ */ m("div", { className: "divider" }),
      /* @__PURE__ */ m(
        Nh,
        {
          hour: s,
          minute: i,
          minuteStep: t.minuteStep,
          onChange: this._handleSetTime
        }
      )
    ] });
  }
};
Ah.defaultProps = {
  ...vi.defaultProps,
  popMaxHeight: 310,
  format: "yyyy-MM-dd hh:mm",
  minuteStep: 5
};
class Ho extends W {
}
Ho.NAME = "TimePicker";
Ho.Component = Mh;
Ho.register();
class Wo extends W {
}
Wo.NAME = "DatePicker";
Wo.Component = vi;
Wo.register();
class Bo extends W {
}
Bo.NAME = "DatetimePicker";
Bo.Component = Ah;
Bo.register();
const pl = "show", Ui = "in", km = '[data-dismiss="modal"]', dn = "modal-hide", Ss = class We extends it {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, s = e.closest(".modal");
      !s || s !== this.modalElement || (e.closest(km) || this.options.backdrop === !0 && e === s) && (t.preventDefault(), this.hide());
    };
  }
  static get SELECTOR() {
    return ".modal";
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this._shown;
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  get rob() {
    return this._rob;
  }
  _observeResize() {
    var t;
    if (this.options.responsive && typeof ResizeObserver < "u") {
      (t = this._rob) == null || t.disconnect();
      const { dialog: e } = this;
      if (e) {
        const s = new ResizeObserver(() => {
          if (!this._shown)
            return;
          const i = e.clientWidth, r = e.clientHeight, [o, a] = this._lastDialogSize || [];
          (o !== i || a !== r) && (this._lastDialogSize = [i, r], this.layout());
        });
        s.observe(e), this._rob = s;
      }
    }
  }
  _cancelObserver() {
    var t;
    (t = this._rob) == null || t.disconnect(), this._rob = void 0;
  }
  afterInit() {
    this.on("click", this._handleClick), this.options.show && (this.show(), this._observeResize()), this.on("hidden", (t) => {
      const { modalElement: e } = this;
      if (!e.parentNode)
        return this.destroy();
      const s = t.target.closest(".modal") === e;
      s && this._cancelObserver(), s && !We.getAll().some((i) => i.shown) && p("html").enableScroll();
    }), this.on("show", (t) => {
      const { modalElement: e } = this;
      if (!e.parentNode)
        return this.destroy();
      t.target.closest(".modal") === e && (this._observeResize(), p("html").disableScroll());
    }), this.shown && p("html").disableScroll();
  }
  destroy() {
    super.destroy(), this._cancelObserver();
  }
  show(t) {
    var c;
    const { modalElement: e } = this, s = p(e);
    if (this._shown && s.hasClass(Ui))
      return s.removeClass(dn).css("z-index", `${We.zIndex++}`), !1;
    this._shown = !0, this.setOptions(t);
    const { animation: i, backdrop: r, className: o, style: a } = this.options;
    s.setClass({
      "modal-trans": i,
      "modal-no-backdrop": !r,
      [dn]: !1
    }, pl, o).css({
      zIndex: `${We.zIndex++}`,
      ...a
    });
    const l = this.constructor;
    return l.hideOthers && this.options.hideOthers !== !1 && l.getAll().forEach((h) => {
      h !== this && h.shown && !s.closest(h.modalElement).length && h.hideForOther();
    }), this.options.closeOthers && l.getAll().forEach((h) => {
      h !== this && !s.closest(h.modalElement).length && h.hide();
    }), this.layout(), (c = this.options.onShow) == null || c.call(this), this.emit("show"), this._setTimer(() => {
      s.addClass(Ui), this._setTimer(() => {
        var h, d;
        (h = s.find("[autofocus]")[0]) == null || h.focus(), (d = this.options.onShown) == null || d.call(this), this.emit("shown");
      });
    }, 50), !0;
  }
  hideForOther() {
    p(this.modalElement).addClass(dn);
  }
  hide() {
    var e;
    if (!this._shown || (this._shown = !1, p(this.modalElement).removeClass(Ui), ((e = this.options.onHide) == null ? void 0 : e.call(this)) === !1))
      return !1;
    this.emit("hide"), this._setTimer(() => {
      var s;
      p(this.modalElement).removeClass(pl), (s = this.options.onHidden) == null || s.call(this), this.emit("hidden");
    });
    const t = this.constructor;
    return t.hideOthers && this.options.hideOthers !== !1 && t.getAll().forEach((s) => {
      s.shown && s !== this && p(s.modalElement).removeClass(dn);
    }), !0;
  }
  layout(t, e) {
    if (!this._shown)
      return;
    const { dialog: s } = this;
    if (!s)
      return;
    const i = p(s);
    if (e = e ?? this.options.size, e) {
      i.removeAttr("data-size");
      const h = { width: "", height: "" };
      typeof e == "object" ? (h.width = e.width, h.height = e.height) : typeof e == "string" && ["md", "sm", "lg", "full"].includes(e) ? i.attr("data-size", e) : e && (h.width = e), i.css(h);
    }
    t = t ?? this.options.position ?? "fit";
    const r = s.clientWidth, o = s.clientHeight;
    this._lastDialogSize = [r, o], typeof t == "function" && (t = t({ width: r, height: o }));
    const a = {
      left: null,
      bottom: null,
      right: null
    };
    let l = null, c = "center";
    typeof t == "number" ? (c = "flex-start", l = t) : typeof t == "object" && t ? (Object.assign(a, t), l = a.top ?? l, c = a.alignSelf ?? "flex-start") : t === "fit" ? (c = "flex-start", l = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : t === "bottom" ? c = "flex-end" : t === "top" ? c = "flex-start" : t !== "center" && typeof t == "string" && (c = "flex-start", l = t), a.top = l, a.alignSelf = c, i.css(a), p(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(t, e) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), t && (this.options.animation ? this._timer = window.setTimeout(t, e ?? this.options.transTime) : t());
  }
  static last(t) {
    return We.query(t, void 0, (e) => e.shown);
  }
  static hide(t) {
    var e;
    (e = We.last(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = We.query(t, void 0, (s) => !s.shown)) == null || e.show();
  }
};
Ss.NAME = "Modal";
Ss.MULTI_INSTANCE = !0;
Ss.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Ss.hideOthers = !0;
Ss.zIndex = 1500;
let Us = Ss;
p(window).on(`resize.${Us.NAMESPACE}`, () => {
  Us.getAll().forEach((n) => {
    const t = n;
    t.shown && t.options.responsive && t.layout();
  });
});
class Ih extends O {
  constructor(t) {
    super(t), this._ref = U(), this.state = { showed: !t.waitShowEvent };
  }
  componentDidMount() {
    const { waitShowEvent: t, afterRender: e } = this.props;
    e == null || e.call(this, { firstRender: !0 }), t && p(this._ref.current).on(t, () => {
      this.setState({ showed: !0 });
    });
  }
  componentDidUpdate() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this);
  }
  renderHeader() {
    const {
      header: t,
      headerClass: e,
      title: s
    } = this.props;
    return bt(t) ? t : t === !1 || !s ? null : t ? /* @__PURE__ */ m(P, { className: S("modal-header", e), content: t }) : /* @__PURE__ */ m("div", { className: S("modal-header", e), children: /* @__PURE__ */ m("div", { className: "modal-title", children: s }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : bt(t) ? t : /* @__PURE__ */ m("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ m(ht, { ...t }) : null,
      e ? /* @__PURE__ */ m("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? bt(t) ? t : /* @__PURE__ */ m(P, { className: S("modal-body", e), content: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: s
    } = this.props;
    return bt(t) ? t : t === !1 || !s ? null : t ? /* @__PURE__ */ m(P, { className: S("modal-footer", e), content: t }) : /* @__PURE__ */ m("div", { className: S("modal-footer", e), children: s ? /* @__PURE__ */ m(ht, { ...s }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: s,
      children: i,
      waitShowEvent: r
    } = this.props, o = r && !this.state.showed;
    return /* @__PURE__ */ m("div", { ref: r ? this._ref : void 0, className: S("modal-dialog", t, o ? "loading" : ""), style: e, children: [
      /* @__PURE__ */ m("div", { className: S("modal-content", s), children: [
        this.renderHeader(),
        this.renderActions(),
        this.renderBody(),
        i,
        this.renderFooter()
      ] }),
      o ? /* @__PURE__ */ m("div", { class: "load-indicator loading" }) : null
    ] });
  }
}
Ih.defaultProps = { closeBtn: !0 };
class Dh extends O {
  constructor() {
    super(...arguments), this._ref = U(), this._height = Tt(), this._timer = 0, this._handleError = (t) => {
      t.message.includes("ResizeObserver loop completed with undelivered notifications") && this.componentWillUnmount();
    }, this._handleIframeLoad = () => {
      const t = this.iframeDoc;
      if (t) {
        try {
          const { iframeBodyClass: e, watchHeight: s } = this.props;
          s && this._watchIframeHeight(), e && t.body.classList.add(e);
        } catch {
        }
        p(this._ref.current).trigger("modal-iframe-loaded");
      }
    };
  }
  get iframeDoc() {
    var t, e;
    return (e = (t = this._ref.current) == null ? void 0 : t.contentWindow) == null ? void 0 : e.document;
  }
  componentDidMount() {
    this.props.watchHeight && this._watchIframeHeight(), window.addEventListener("error", this._handleError);
  }
  componentWillUnmount() {
    var t;
    window.removeEventListener("error", this._handleError), (t = this._rob) == null || t.disconnect(), this._timer && clearTimeout(this._timer);
  }
  _watchIframeHeight() {
    const t = this.iframeDoc;
    if (!t)
      return;
    let e = this._rob;
    e == null || e.disconnect(), e = new ResizeObserver(() => {
      this._timer && clearTimeout(this._timer), this._timer = window.setTimeout(() => {
        const s = t.body, i = t.documentElement, r = Math.ceil(Math.max(s.scrollHeight, s.offsetHeight, i.offsetHeight));
        r && r !== this._height.value && (this._height.value = r), this._timer = 0;
      }, 10);
    }), e.observe(t.body), this._rob = e;
  }
  render() {
    return /* @__PURE__ */ m(
      "iframe",
      {
        className: "modal-iframe",
        style: this._height.value ? `height: ${this._height.value}px;` : void 0,
        src: this.props.url,
        ref: this._ref,
        onLoad: this._handleIframeLoad
      }
    );
  }
}
Dh.defaultProps = {
  watchHeight: !0
};
var jo = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Wt = (n, t, e) => (jo(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Ns = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, ss = (n, t, e, s) => (jo(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), vn = (n, t, e) => (jo(n, t, "access private method"), e), ie, As, re, On, Uo, bn, Cr;
function xm(n, t) {
  const { custom: e, title: s, content: i, closeBtn: r } = t;
  return {
    body: i,
    closeBtn: r,
    title: s,
    ...typeof e == "function" ? e() : e
  };
}
async function $m(n, t) {
  const { dataType: e = "html", url: s, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await p.ajax({
    url: s,
    headers: {
      "X-ZUI-Modal": "true"
    },
    ...i
  });
  if (e !== "html")
    try {
      const h = JSON.parse(c);
      return {
        title: o,
        ...r,
        ...h
      };
    } catch {
    }
  return a !== !1 && e === "html" ? [c] : {
    title: o,
    ...r,
    body: e === "html" ? /* @__PURE__ */ m(Ne, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function Em(n, t) {
  const { url: e, custom: s, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...s,
    waitShowEvent: "modal-iframe-loaded",
    body: /* @__PURE__ */ m(Dh, { url: e, watchHeight: !o })
  };
}
const Tm = {
  custom: xm,
  ajax: $m,
  iframe: Em
}, ml = "loading", Lh = class Be extends Us {
  constructor() {
    super(...arguments), Ns(this, On), Ns(this, bn), Ns(this, ie, void 0), Ns(this, As, void 0), Ns(this, re, void 0), this._builded = !1;
  }
  get id() {
    return Wt(this, As);
  }
  get loading() {
    var t;
    return (t = Wt(this, ie)) == null ? void 0 : t.classList.contains(ml);
  }
  get shown() {
    var t;
    return !!((t = Wt(this, ie)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = Wt(this, ie);
    if (!t) {
      const { options: e } = this;
      let s = Wt(this, As);
      s || (s = e.id || `modal-${st()}`, ss(this, As, s));
      const { $element: i } = this;
      if (t = i.find(`#${s}`)[0], t)
        p(t).data(this.constructor.KEY, this);
      else {
        const r = this.key;
        t = p("<div>").attr({
          id: s,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      ss(this, ie, t);
    }
    return t;
  }
  get $emitter() {
    const t = Wt(this, ie);
    return t ? p(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.options.type === "static" ? (this._staticMbo = new MutationObserver((e) => {
      let s = !1;
      for (const i of e)
        if (i.removedNodes.length) {
          s = !0;
          break;
        }
      s && this.autoDestroy();
    }), this._staticMbo.observe(this.modalElement.parentNode, {
      childList: !0
    })) : this.options.destroyOnHide && this.on("hidden", (e) => {
      p(e.target).data("key") === this.key && this.destroy();
    });
  }
  /**
   * Auto destroy the component when detached.
   */
  autoDestroy(t = 100) {
    this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
      this._autoDestory = 0, (Qt(this.element) || this.options.type === "static" && Qt(this.modalElement)) && this.destroy();
    }, t);
  }
  show(t) {
    return super.show(t) ? (this.buildDialog(), !0) : !1;
  }
  destroy() {
    var e;
    super.destroy();
    const t = Wt(this, ie);
    t && (p(t).removeData(this.constructor.KEY).remove(), ss(this, ie, void 0)), (e = this._staticMbo) == null || e.disconnect();
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    Wt(this, re) && clearTimeout(Wt(this, re));
    const { modalElement: t, options: e } = this, s = p(t), { type: i, loadTimeout: r, loadingClass: o = ml, loadingText: a = null, cache: l } = e;
    if (!i || i === "static")
      return !0;
    if (l && this._builded)
      return this.layout(), !0;
    const c = Tm[i];
    if (!c)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    s.attr("data-loading", a).addClass(o), r && ss(this, re, window.setTimeout(() => {
      ss(this, re, 0), vn(this, bn, Cr).call(this, this.options.timeoutTip);
    }, r));
    const h = await c.call(this, t, e);
    return this._destroyed ? !1 : (h === !1 ? await vn(this, bn, Cr).call(this, this.options.failedTip) : h && typeof h == "object" && await vn(this, On, Uo).call(this, h), Wt(this, re) && (clearTimeout(Wt(this, re)), ss(this, re, 0)), this.layout(), this._builded = !0, await En(100), s.removeClass(o), !0);
  }
  static isValid(t) {
    return !p.isDetached(t.modalElement);
  }
  static open(t) {
    return new Promise((e) => {
      const { container: s = document.body, ref: i, ...r } = t, o = { show: !0, ...r };
      !o.type && o.url && (o.type = "ajax"), !o.type && t.id && (o.type = "static"), o.key === void 0 && (o.key = o.id);
      const a = Be.ensure(s, o);
      i && (i.current = a);
      const l = `${Be.NAMESPACE}.open${st()}`;
      a.on(`hidden${l}`, () => {
        a.off(l), e(a);
      }), a.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: s, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...h } = t, d = (typeof l == "function" ? l() : l) || {};
    let u = /* @__PURE__ */ m(P, { content: s });
    i ? u = /* @__PURE__ */ m("div", { className: S("modal-body row gap-4 items-center", d.bodyClass), children: [
      /* @__PURE__ */ m("div", { className: `icon ${i} ${r}` }),
      u
    ] }) : u = /* @__PURE__ */ m("div", { className: S("modal-body", d.bodyClass), children: u });
    const f = [];
    (Array.isArray(o) ? o : o ? [o] : []).forEach((y) => {
      y = {
        ...typeof y == "string" ? { key: y } : y
      }, typeof y.key == "string" && (y.text || (y.text = j.getLang(y.key, y.key)), y.btnType || (y.btnType = `btn-wide ${y.key === "confirm" ? "primary" : "btn-default"}`)), y && f.push(y);
    }, []);
    let g;
    const _ = f.length ? {
      gap: 4,
      items: f,
      onClickItem: ({ item: y, event: v }) => {
        const b = Be.query(v.target);
        if (!b || b.key !== c)
          return;
        g = y.key, (a == null ? void 0 : a(y, b)) !== !1 && b && b.hide();
      }
    } : void 0;
    return await Be.open({
      key: c,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: u,
      modal: !0,
      backdrop: "static",
      hideOthers: !1,
      custom: { footerActions: _, ...d },
      ...h
    }), g;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: s, ...i } = t;
    return await Be.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        s == null || s(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
  static async prompt(t) {
    typeof t == "string" && (t = { message: t });
    const { defaultValue: e = "", placeholder: s, onResult: i, onShown: r, message: o, content: a, bodyClass: l, custom: c, multiline: h, ...d } = t;
    let u = e, f = !1;
    const g = (b) => {
      u = b.target.value;
    }, _ = U(), y = (b) => {
      var w, C;
      b.key === "Enter" ? (f = !0, b.preventDefault(), (w = _.current) == null || w.hide()) : b.key === "Escape" && ((C = _.current) == null || C.hide());
    };
    return await Be.confirm({
      ...d,
      custom: { closeBtn: !1, ...c },
      message: o,
      ref: _,
      content: /* @__PURE__ */ m("div", { className: S("modal-body", l), children: [
        /* @__PURE__ */ m(P, { content: o }),
        h ? /* @__PURE__ */ m("textarea", { className: "modal-prompt-input form-control mt-3", autoFocus: !0, placeholder: s, defaultValue: e, onChange: g, onKeyDown: y, rows: 10 }) : /* @__PURE__ */ m("input", { type: "text", className: "modal-prompt-input form-control mt-3", autoFocus: !0, placeholder: s, defaultValue: e, onChange: g, onKeyDown: y }),
        a
      ] })
    }) || f ? u : null;
  }
};
ie = /* @__PURE__ */ new WeakMap();
As = /* @__PURE__ */ new WeakMap();
re = /* @__PURE__ */ new WeakMap();
On = /* @__PURE__ */ new WeakSet();
Uo = function(n) {
  return new Promise((t) => {
    if (Array.isArray(n))
      return p(this.modalElement).html(n[0]).zuiInit(), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...s } = n;
    n = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...s
    }, rs(
      /* @__PURE__ */ m(Ih, { ...n }),
      this.modalElement
    );
  });
};
bn = /* @__PURE__ */ new WeakSet();
Cr = function(n) {
  if (n)
    return vn(this, On, Uo).call(this, {
      body: /* @__PURE__ */ m("div", { className: "modal-load-failed", children: n })
    });
};
Lh.DEFAULT = {
  ...Us.DEFAULT,
  loadTimeout: 1e4,
  destroyOnHide: !0
};
let Hn = Lh;
Hn.register();
class zs extends it {
  get modal() {
    return this._modal;
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = this._initModal()) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = this._modal) == null ? void 0 : t.hide();
  }
  _getBuilderOptions() {
    const {
      container: t,
      ...e
    } = this.options, s = e, i = this.$element.attr("href") || "";
    return s.type || (s.target || i[0] === "#" ? s.type = "static" : s.type = s.type || (s.url || i ? "ajax" : "custom")), !s.url && (s.type === "iframe" || s.type === "ajax") && i[0] !== "#" && (s.url = i), s.key === void 0 && (s.key = `${this._key}`), s;
  }
  _initModal() {
    const t = this._getBuilderOptions();
    let e = this._modal;
    if (e)
      return e.setOptions(t), e;
    if (t.type === "static") {
      const s = this._getStaticModalElement();
      if (!s)
        return;
      e = Us.ensure(s, t);
    } else
      e = Hn.ensure(this.container, t);
    return this._modal = e, e.on("destroyed", () => {
      this._modal = void 0;
    }), e;
  }
  _getStaticModalElement() {
    let t = this.options.target;
    if (!t) {
      const { $element: e } = this;
      if (e.is("a")) {
        const s = e.attr("href");
        s != null && s.startsWith("#") && (t = s);
      }
    }
    return this.container.querySelector(t || ".modal");
  }
}
zs.NAME = "ModalTrigger";
zs.toggle = {
  name: "modal",
  skip: "[disabled],.disabled,.open-in-parent",
  convertHref: !0,
  onGet(n) {
    return zs.get(n);
  },
  onCreate(n, t, e) {
    return new zs(n, e);
  }
};
zs.register();
const Nm = {
  zh_cn: {
    selectFile: "选择文件",
    fileSelectTip: "（不超过 {maxFileSize}）",
    removeFile: "移除文件",
    renameFile: "重命名",
    duplicatedTip: "文件 “{name}”（{size}） 已存在。",
    exceededSizeTip: "文件 “{name}”（{size}） 超过了 {maxFileSize} 的限制。",
    exceededTotalSizeTip: "文件 “{name}”（{size}） 超过了总大小 {totalFileSize} 的限制。",
    exceededCountTip: "文件 “{name}”（{size}） 超过了数量 {maxFileCount} 的限制。"
  },
  zh_tw: {
    selectFile: "選擇文件",
    fileSelectTip: "（不超過 {maxFileSize}）",
    removeFile: "移除文件",
    renameFile: "重命名",
    duplicatedTip: "文件 “{name}”（{size}） 已存在。",
    exceededSizeTip: "文件 “{name}”（{size}） 超過了 {maxFileSize} 的限制。",
    exceededTotalSizeTip: "文件 “{name}”（{size}） 超過了總大小 {totalFileSize} 的限制。",
    exceededCountTip: "文件 “{name}”（{size}） 超過了數量 {maxFileCount} 的限制。"
  },
  en: {
    selectFile: "Select File",
    fileSelectTip: "(Not exceeding {maxFileSize})",
    removeFile: "Remove File",
    renameFile: "Rename",
    duplicatedTip: "File “{name}” ({size}) already exists.",
    exceededSizeTip: "File “{name}” ({size}) exceeds the limit of {maxFileSize}.",
    exceededTotalSizeTip: "File “{name}” ({size}) exceeds the total size limit of {totalFileSize}.",
    exceededCountTip: "File “{name}” ({size}) exceeds the limit of {maxFileCount}."
  }
};
let Le = class extends Y {
  constructor(t) {
    if (t.totalFileSize)
      if (t.maxFileSize) {
        const { maxFileSize: e, totalFileSize: s } = t, i = typeof e == "number" ? e : He(e), r = typeof s == "number" ? s : He(s);
        t.maxFileSize = i > r ? s : e;
      } else
        t.maxFileSize = t.totalFileSize;
    t.maxFileSize || (t.maxFileSize = "100MB"), super(t), this._input = U(), this._file = U(), this._id = `file-selector-input-${st()}`, this._data = new DataTransfer(), this.stopRenameFile = () => {
      const { renaming: e, newName: s } = this.state;
      this.cancelRenameFile(), !(!e || !s) && this.renameFile(e, s);
    }, this.cancelRenameFile = () => {
      this.setState({ renaming: "" });
    }, this._handleChange = (e) => {
      const s = e.target;
      s.files && (this.selectFiles(s.files), this.setState({ inputKey: st() }));
    }, this._handleDragOver = (e) => {
      e.preventDefault(), this.state.dragging || this.setState({ dragging: !0 });
    }, this._handleDragLeave = (e) => {
      e.preventDefault(), this.setState({ dragging: !1 });
    }, this._handleDrop = (e) => {
      this._handleDragLeave(e);
      const s = e.dataTransfer;
      if (!s)
        return;
      const i = [];
      if (s.items)
        for (const o of s.items) {
          if (o.kind === "file" && o.webkitGetAsEntry) {
            const l = o.webkitGetAsEntry();
            if (l && l.isDirectory)
              continue;
          }
          const a = o.getAsFile();
          a && i.push(a);
        }
      else
        i.push(...Array.from(s.files || []));
      const r = this.constructor.filterFiles(i, this.props.accept);
      r.length && (this.selectFiles(r), this.setState({ inputKey: st() }));
    }, this._handleRenameChange = (e) => {
      this.setState({
        newName: e.target.value
      });
    }, this._handleClick = (e) => {
      if (this.props.disabled)
        return;
      const i = p(e.target).closest("[data-remove-file],[data-rename-file]");
      if (!i.length)
        return;
      const r = i.data();
      r.renameFile ? this.startRenameFile(String(r.renameFile)) : r.removeFile && this.removeFile(String(r.removeFile));
    }, this.state = {
      files: (t.value || t.defaultFiles || []).map((e) => this.constructor.getInfo(e)),
      inputKey: 0
    };
  }
  get size() {
    return this.state.files.reduce((t, e) => t + e.size, 0);
  }
  get count() {
    return this.state.files.length;
  }
  get multiple() {
    const { multiple: t, maxFileCount: e, name: s = "" } = this.props;
    return !!(e !== 1 && (t ?? s.endsWith("[]")));
  }
  get info() {
    const { maxFileSize: t = 0, maxFileCount: e = Number.MAX_SAFE_INTEGER } = this.props;
    return {
      size: Bt(this.size, 1),
      maxFileSize: Bt(typeof t == "string" ? He(t) : t, 1),
      maxFileCount: e,
      count: this.count
    };
  }
  get files() {
    return this._data.files;
  }
  componentDidMount() {
    const t = this.state.files.reduce((e, s) => (s.file && e.push(s.file), e), []);
    t.length && (t.forEach((e) => this._data.items.add(e)), this._syncFiles());
  }
  getFile(t) {
    return this.state.files.find((e) => e.id === t);
  }
  getFileByName(t) {
    return this.state.files.find((e) => e.name === t);
  }
  select() {
    var t;
    (t = this._input.current) == null || t.click();
  }
  setFiles(t) {
    this.setState({ files: t.map((e) => this.constructor.getInfo(e)) });
  }
  setValue(t) {
    this.setFiles(t);
  }
  async selectFiles(t) {
    var e;
    if (((e = this.props.onSelect) == null ? void 0 : e.call(this, t)) !== !1) {
      this._skipAddMore = !1;
      for (const s of t)
        if (await this.addFile(s), this._skipAddMore)
          break;
    }
  }
  async findSameFile(t) {
    const e = this.state.files;
    for (const s of e)
      if (s.file && await this.constructor.isSame(t, s.file))
        return s;
  }
  async _checkDuplicated(t) {
    const { allowSameName: e, onDuplicated: s, duplicatedTip: i = this.i18n("duplicatedTip"), checkBuffer: r } = this.props, o = r && t.file ? await this.findSameFile(t.file) : void 0, { name: a } = t, l = o || (e ? this.getFile(t.id) : this.getFileByName(a));
    return l ? (s && await s.call(this, a, t, l) === !0 || i && await this._showAlert(i, {
      name: a,
      size: Bt(t.size, 1)
    }), !0) : !1;
  }
  async _checkExceededSize(t) {
    const { maxFileSize: e, onExceededSize: s, exceededSizeTip: i = this.i18n("exceededSizeTip") } = this.props;
    if (!e)
      return !1;
    const r = typeof e == "string" ? He(e) : e;
    return t.size <= r ? !1 : ((s == null ? void 0 : s.call(this, r, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: Bt(t.size, 1),
      maxFileSize: e
    }), !0);
  }
  async _checkTotalSize(t) {
    const { totalFileSize: e, onExceededTotalSize: s, exceededTotalSizeTip: i = this.i18n("exceededTotalSizeTip") } = this.props;
    if (!e)
      return !1;
    const r = typeof e == "string" ? He(e) : e, o = t.size + this.size;
    return o <= r ? !1 : ((s == null ? void 0 : s.call(this, r, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: Bt(t.size, 1),
      totalSize: Bt(o, 1)
    }), !0);
  }
  async _checkExceededCount(t) {
    const { maxFileCount: e = 0, onExceededCount: s, exceededCountTip: i = this.i18n("exceededCountTip") } = this.props;
    if (!e)
      return !1;
    const r = this.count + 1;
    return r <= e ? !1 : ((s == null ? void 0 : s.call(this, e, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: Bt(t.size, 1),
      exceededCount: r
    }), !0);
  }
  async addFile(t) {
    const { onAdd: e, disabled: s } = this.props;
    if (s)
      return !1;
    const i = this.constructor.getInfo(t);
    return await this._checkExceededCount(i) ? (this._skipAddMore = !0, !1) : await this._checkDuplicated(i) ? !1 : await this._checkExceededSize(i) ? (this._skipAddMore = !0, !1) : await this._checkTotalSize(i) ? (this._skipAddMore = !0, !1) : e && e.call(this, i) === !1 ? !1 : (this._data.items.add(t), this._syncFiles(!0), await this.changeState((c) => ({ files: [...c.files, i] })), !0);
  }
  startRenameFile(t) {
    this.setState({ renaming: t, newName: void 0 }, () => {
      const e = p(this._file.current).closest(".file-selector").find(".file-selector-rename-input")[0];
      e && (e.select(), e.focus());
    });
  }
  replaceFileName(t, e) {
    const s = t.file;
    if (!s)
      return;
    const i = new File([s], e, { type: s.type, lastModified: s.lastModified }), r = Array.from(this._data.files).indexOf(s);
    return r >= 0 && this._data.items.remove(r), this._data.items.add(i), t.file = i, this._syncFiles(!0), i;
  }
  async renameFile(t, e) {
    const s = this.getFile(t);
    if (!s || s.name === e)
      return;
    const { onRename: i } = this.props;
    if (i && await i.call(this, e, s.name, s) === !1)
      return;
    const { files: r, renamedFiles: o = {} } = this.state;
    s.file ? this.replaceFileName(s, e) : o[s.id] = e, s.name = e, s.ext = this.constructor.getExt(e);
    const a = r.indexOf(s);
    a >= 0 ? r.splice(a, 1, s) : r.push(s), this.setState({ files: [...r], renamedFiles: { ...o } });
  }
  async removeFile(t) {
    const e = this.getFile(t);
    if (!e)
      return;
    const { onRemove: s, removeConfirm: i } = this.props;
    if (i) {
      let c = i;
      if (typeof c == "string" && (c = { message: c }), typeof c.message == "string" && (c.message = tt(c.message, {
        name: e.name,
        size: Bt(e.size, 1)
      })), !await Hn.confirm(c))
        return;
    }
    if (s && await s.call(this, e) === !1)
      return;
    if (e.file) {
      const c = Array.from(this._data.files).indexOf(e.file);
      c >= 0 && this._data.items.remove(c);
    }
    const { files: r, deletedFiles: o = [], renamedFiles: a = {} } = this.state, l = r.indexOf(e);
    l >= 0 && (!e.file && !o.includes(e.id) && (delete a[e.id], o.push(e.id)), r.splice(l, 1), this.setState({ files: [...r], deletedFiles: [...o], renamedFiles: { ...a } }), this._syncFiles(!0));
  }
  _syncFiles(t = !1) {
    const e = this._data.files, s = this._file.current;
    s.files = e, t && p(s).trigger("change", { files: e });
  }
  _showAlert(t, e) {
    return typeof t == "string" && (t = { message: t }), typeof t.message == "string" && (t.message = tt(t.message, { ...this.info, ...e })), Hn.alert(t);
  }
  _getTip(t) {
    return typeof t == "string" ? tt(t, this.info) : t;
  }
  _renderInput(t) {
    return /* @__PURE__ */ m("input", { id: this._id, multiple: this.multiple, accept: t.accept, style: "display:none", type: "file", ref: this._input, onChange: this._handleChange }, `input${this.state.inputKey}`);
  }
  _getDraggableProps() {
    const t = {};
    return this.props.draggable && !this.props.disabled && (t.onDragOver = this._handleDragOver, t.onDragLeave = this._handleDragLeave, t.onDrop = this._handleDrop), t;
  }
  _renderUpload(t) {
    const { mode: e, disabled: s, tip: i = this.i18n("fileSelectTip"), uploadBtn: r } = t, o = H({
      component: "label",
      attrs: {
        for: s ? void 0 : this._id
      },
      disabled: s,
      text: this.i18n("selectFile")
    }, typeof r == "object" ? r : typeof r == "string" ? { text: r } : {}), a = /* @__PURE__ */ m("div", { className: "file-selector-tip", children: /* @__PURE__ */ m(P, { content: this._getTip(i), generatorThis: this, generatorArgs: [this.state] }) }), l = e === "grid", c = l ? {} : this._getDraggableProps();
    return l || e === "box" ? /* @__PURE__ */ m(et, { ...o, ...c, className: S(l ? "file-selector-grid-btn" : "file-selector-box", o.className), children: a }, "upload") : /* @__PURE__ */ m("div", { className: "file-selector-btn", ...c, children: [
      /* @__PURE__ */ m(et, { rounded: "full", size: "sm", ...o }),
      a
    ] }, "upload");
  }
  _renderForForm(t) {
    const { name: e, accept: s, onChange: i, deleteName: r, renameName: o } = t, { deletedFiles: a, renamedFiles: l } = this.state, c = [
      /* @__PURE__ */ m("input", { ref: this._file, type: "file", name: e, multiple: this.multiple, accept: s, style: "display:none", onChange: i }, "form")
    ];
    return r && a && c.push(
      ...a.map((h) => /* @__PURE__ */ m("input", { type: "hidden", name: `${r}[${h}]`, value: h }, `delete:${h}`))
    ), o && l && c.push(
      ...Object.entries(l).map(([h, d]) => /* @__PURE__ */ m("input", { type: "hidden", name: `${o}[${h}]`, value: d }, `rename:${h}`))
    ), c;
  }
  _getIcon(t) {
    let { fileIcons: e } = this.props;
    if (e)
      return typeof e == "string" && (e = { default: e }), e[t.ext] ?? e.default;
  }
  _getThumbnail(t) {
    if ((t.file || t.url) && this.props.thumbnail && this.constructor.isImage(t))
      return t.url || URL.createObjectURL(t.file);
  }
  _getAvatar(t) {
    const e = this._getThumbnail(t);
    let s;
    if (e)
      s = { src: e };
    else {
      const i = this._getIcon(t);
      i && (s = { icon: i });
    }
    return s && {
      size: this.props.mode === "grid" ? void 0 : "sm",
      ...s
    };
  }
  _getFileActions(t) {
    if (this.props.disabled)
      return;
    let { removeBtn: e, renameBtn: s } = this.props;
    typeof e == "function" && (e = e.call(this, t)), typeof e == "string" ? e = { text: e } : e === !0 && (e = { hint: this.i18n("removeFile"), icon: "trash" }), typeof s == "function" && (s = s.call(this, t)), typeof s == "string" ? s = { text: s } : s === !0 && (s = { hint: this.i18n("renameFile"), icon: "edit" });
    const i = [];
    return s && i.push({
      "data-rename-file": t.id,
      ...s
    }), e && i.push({
      "data-remove-file": t.id,
      ...e
    }), i;
  }
  _renderFile(t) {
    const { itemProps: e } = this.props, s = H({
      className: this.props.mode === "grid" ? "file-selector-grid-item" : "file-selector-item",
      multiline: !1,
      title: t.name,
      subtitle: Bt(t.size, 1),
      avatar: this._getAvatar(t),
      actions: this._getFileActions(t),
      "z-id": t.id
    }, typeof e == "function" ? e.call(this, t) : e);
    return /* @__PURE__ */ m(Me, { ...s }, t.id);
  }
  _renderFileRename(t) {
    const { itemProps: e } = this.props, { newName: s = t.name } = this.state, i = this.props.mode === "grid", r = /* @__PURE__ */ m("div", { className: "file-selector-rename-text", children: [
      /* @__PURE__ */ m("div", { className: "form-control size-sm", children: s }),
      /* @__PURE__ */ m("input", { type: "text", defaultValue: t.name, className: "form-control size-sm select-all file-selector-rename-input", autofocus: !0, onBlur: i ? this.stopRenameFile : void 0, onChange: this._handleRenameChange, onInput: this._handleRenameChange })
    ] }), o = H({
      className: `${i ? "file-selector-grid-item" : "file-selector-item"} is-renaming`,
      multiline: !1,
      avatar: this._getAvatar(t),
      "z-id": t.id,
      contentClass: "file-selector-rename",
      content: i ? r : [
        r,
        /* @__PURE__ */ m(et, { icon: "check", text: this.i18n("confirm"), type: "primary-pale", size: "sm", onClick: this.stopRenameFile }),
        /* @__PURE__ */ m(et, { icon: "close", text: this.i18n("cancel"), type: "gray-pale", size: "sm", onClick: this.cancelRenameFile })
      ]
    }, typeof e == "function" ? e.call(this, t) : e);
    return /* @__PURE__ */ m(Me, { ...o }, t.id);
  }
  _renderList(t) {
    const { files: e, renaming: s } = this.state;
    return /* @__PURE__ */ m("div", { className: `file-selector-list${e.length ? "" : " is-empty"}`, onClick: this._handleClick, children: e.map((i) => i.id === s ? this._renderFileRename(i) : this._renderFile(i)) }, "list");
  }
  _renderGrid(t) {
    const e = this._getDraggableProps(), { gridWidth: s = 120, gridHeight: i = 148, gridGap: r = 12 } = t, o = {
      "--file-selector-grid-width": J(s),
      "--file-selector-grid-height": J(i),
      "--file-selector-grid-gap": J(r)
    }, { files: a, renaming: l } = this.state;
    return /* @__PURE__ */ m("div", { className: "file-selector-grid", style: o, onClick: this._handleClick, ...e, children: [
      a.map((c) => c.id === l ? this._renderFileRename(c) : this._renderFile(c)),
      this._renderUpload(t)
    ] }, "grid");
  }
  _getClassName(t) {
    return ["file-selector", `is-mode-${t.mode}`, t.className, this.state.dragging ? "is-dragging" : ""];
  }
  _getChildren(t) {
    const e = t.mode === "grid";
    return [
      e ? null : this._renderUpload(t),
      e ? this._renderGrid(t) : this._renderList(t),
      this._renderInput(t),
      this._renderForForm(t)
    ];
  }
  static getExt(t) {
    return (t.split(".").pop() || "").toLowerCase();
  }
  static getInfo(t) {
    const { name: e, size: s, type: i } = t;
    if (t instanceof File)
      return {
        name: e,
        size: s,
        type: i,
        file: t,
        id: [e, s].join(":"),
        ext: this.getExt(e)
      };
    const r = typeof s == "string" ? He(s) : s;
    return {
      name: e,
      size: r,
      id: t.id ? String(t.id) : [e, r].join(":"),
      type: i ?? "",
      ext: this.getExt(e),
      file: t.file,
      url: t.url
    };
  }
  static isAccept(t, e) {
    return !e || !e.length ? !0 : (Array.isArray(e) ? e : e.split(",")).some((i) => t.type && i === t.type ? !0 : i.startsWith(".") ? t.name.endsWith(i) : i.endsWith("/*") ? t.type.startsWith(i.slice(0, -1)) : !1);
  }
  static isImage(t) {
    return this.isAccept(t, this.imageAccepts);
  }
  static filterFiles(t, e) {
    if (!e || !e.length)
      return t;
    t instanceof FileList && (t = Array.from(t));
    const s = e.split(",");
    return t.filter((i) => i.type === "" && !i.size && !i.name.includes(".") ? !1 : this.isAccept(i, s));
  }
  static async isSame(t, e) {
    if (t.size !== e.size)
      return !1;
    const [s, i] = await Promise.all([
      t.arrayBuffer(),
      e.arrayBuffer()
    ]);
    if (s.byteLength !== i.byteLength)
      return !1;
    const r = new Uint8Array(s), o = new Uint8Array(i);
    for (let a = 0; a < r.length; a++)
      if (r[a] !== o[a])
        return !1;
    return !0;
  }
};
Le.defaultProps = {
  mode: "button",
  fileIcons: "file",
  renameBtn: !0,
  removeBtn: !0,
  draggable: !0,
  thumbnail: !0,
  maxFileCount: 0
};
Le.i18n = Nm;
Le.imageAccepts = "image/*,.png,.jpg,.jpeg,.gif";
let Vo = class extends Le {
};
Vo.defaultProps = {
  ...Le.defaultProps,
  mode: "grid",
  accept: Le.imageAccepts
};
const Mm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FileSelector: Le,
  ImageSelector: Vo
}, Symbol.toStringTag, { value: "Module" }));
class Ko extends W {
}
Ko.NAME = "FileSelector";
Ko.Component = Le;
Ko.replace = !0;
class Go extends W {
}
Go.NAME = "ImageSelector";
Go.Component = Vo;
Go.replace = !0;
ot(Mm);
class qo extends O {
  constructor(t) {
    super(t), this._searchInput = U(), this._measure = U(), this._changeTimer = 0, this._handleChange = (e) => {
      if (e.isComposing)
        return;
      const s = e.target.value;
      this.setState({ search: s }, () => {
        const { onSearch: i } = this.props;
        i && (this._changeTimer && clearTimeout(this._changeTimer), this._changeTimer = window.setTimeout(() => {
          this._changeTimer = 0, i(s);
        }, this.props.debounce || 300));
      }), e.stopPropagation();
    }, this._handleClear = (e) => {
      e.stopPropagation(), this.clear();
    }, this.state = { search: t.defaultSearch ?? "" };
  }
  get $pop() {
    return p(`#pick-pop-${this.props.id}`);
  }
  focus() {
    var t;
    (t = this._searchInput.current) == null || t.focus();
  }
  setSearch(t, e = !0) {
    var i, r, o, a;
    if (!t.length && this.state.search.length && ((r = (i = this.props).onClear) == null || r.call(i)), ((o = this._searchInput.current) == null ? void 0 : o.value) === t) {
      e && this.focus();
      return;
    }
    p((a = this._searchInput) == null ? void 0 : a.current).val(t).trigger("change"), e && this.focus();
  }
  clear() {
    this.setSearch("");
  }
  componentDidMount() {
    this.focus();
    const { hotkeys: t } = this.props;
    if (t) {
      const e = uc(t, {
        clear: {
          keys: "Escape",
          handler: () => {
            this.state.search.trim().length ? this.clear() : this.$pop.trigger("hidePop");
          }
        },
        enter: {
          keys: "Enter",
          handler: (s) => {
            s.preventDefault(), this.$pop.trigger("selectActive"), this.clear();
          }
        },
        activeNext: {
          keys: "ArrowDown",
          handler: () => {
            this.$pop.trigger("activeNext");
          }
        },
        activePrev: {
          keys: "ArrowUp",
          handler: () => {
            this.$pop.trigger("activePrev");
          }
        },
        deselectLast: {
          keys: "Backspace",
          handler: () => {
            this.state.search.trim().length || this.$pop.trigger("deselectLast");
          }
        }
      });
      e && (this._hotkeysScope = `PickerSearch_${st()}`, p(this._searchInput.current).hotkeys(e, {
        scope: this._hotkeysScope,
        event: "keydown"
      }));
    }
    p(this._searchInput.current).on("compositionend", this._handleChange);
  }
  componentDidUpdate() {
    const { inline: t } = this.props;
    if (t) {
      const { current: e } = this._measure, { current: s } = this._searchInput;
      if (e && s) {
        const i = p(s).parent();
        i.width(Math.ceil(Math.min(e.clientWidth, i.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  componentWillUnmount() {
    clearTimeout(this._changeTimer), this._hotkeysScope && p(this._searchInput.current).unbindHotkeys(this._hotkeysScope), p(this._searchInput.current).off("compositionend", this._handleChange);
  }
  render(t, e) {
    const { placeholder: s, inline: i } = t, { search: r } = e, o = r.trim().length > 0;
    let a;
    return i ? a = /* @__PURE__ */ m("div", { className: "picker-search-measure", ref: this._measure, children: r }) : o ? a = /* @__PURE__ */ m("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: this._handleClear, children: /* @__PURE__ */ m("span", { className: "close" }) }) : a = /* @__PURE__ */ m("span", { className: "magnifier" }), /* @__PURE__ */ m("div", { className: `picker-search${i ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ m(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: s,
          value: r,
          autoComplete: "off",
          onChange: this._handleChange,
          onInput: this._handleChange,
          ref: this._searchInput
        }
      ),
      a
    ] });
  }
}
class Ph extends To {
  constructor() {
    super(...arguments), this._search = U(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: s } } = this.props, i = p(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && s.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => {
      const { text: e } = t;
      return /* @__PURE__ */ m("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ m("span", { className: "text", children: /* @__PURE__ */ m(P, { content: e }) }),
        this.props.disabled || this.props.readonly ? null : /* @__PURE__ */ m("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: this._handleDeselectClick, "data-value": t.value, children: /* @__PURE__ */ m("span", { className: "close" }) })
      ] }, t.value);
    };
  }
  get searchBox() {
    return this._search.current;
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = this._search.current) == null || e.focus();
  }
  _getClass(t) {
    return S(
      super._getClass(t),
      t.search ? "" : "picker-no-search",
      "picker-select picker-select-multi form-control"
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, searchHint: s, hotkeys: i } = t;
    return /* @__PURE__ */ m(
      qo,
      {
        inline: !0,
        id: t.id,
        ref: this._search,
        defaultSearch: e,
        onSearch: this._handleSearch,
        onClear: this._handleSearchClear,
        placeholder: s,
        hotkeys: i
      }
    );
  }
  _renderTrigger(t) {
    const { state: { selections: e = [], open: s, value: i }, search: r, placeholder: o, display: a, valueList: l, children: c, caretClass: h } = this.props, d = s && r;
    let u;
    const f = !d && !e.length;
    return a && (!f || o === void 0) ? (typeof a == "function" ? u = a.call(this, l, e) : typeof a == "string" && (u = tt(a, { value: i, values: l, count: l.length })), u = /* @__PURE__ */ m("div", { className: "picker-multi-selections", children: u }, "selections")) : f ? u = /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: o }, "selections") : u = /* @__PURE__ */ m("div", { className: "picker-multi-selections", children: [
      e.map(this._renderSelection),
      d ? this._renderSearch(t) : null
    ] }, "selections"), [
      u,
      c,
      /* @__PURE__ */ m("span", { class: S("caret", h) }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: e, state: { value: s = "" }, disabled: i, id: r, valueList: o, emptyValue: a, onRenderValue: l } = t;
    if (l)
      return l(o, t);
    if (e)
      if (this.hasInput)
        p(`#${r}`).val(s);
      else {
        const c = o.length ? o : [a];
        return /* @__PURE__ */ m("select", { id: r, multiple: !0, className: "pick-value", name: e.endsWith("[]") ? e : `${e}[]`, disabled: i, style: { display: "none" }, children: c.map((h) => /* @__PURE__ */ m("option", { value: h, children: h }, h)) });
      }
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: e, emptyValue: s } = this.props;
    p(`#${t}`).val(e.length ? e : [s]);
  }
  componentDidUpdate(t) {
    const { id: e, state: s, name: i, valueList: r, emptyValue: o } = this.props;
    if (i && t.state.value !== s.value) {
      const a = p(`#${e}`).val(r.length ? r : [o]);
      this._skipTriggerChange !== s.value && a.trigger("change", fh), this._skipTriggerChange = !1;
    }
  }
}
class Rh extends To {
  constructor() {
    super(...arguments), this._search = U(), this._handleDeselectClick = (t) => {
      this.props.disabled || (this.props.onClear(), t.stopPropagation());
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    };
  }
  get searchBox() {
    return this._search.current;
  }
  _getSearchPlaceholder() {
    const { searchHint: t, state: { value: e, selections: s } } = this.props;
    let i = t;
    if (i === void 0) {
      const r = s.find((o) => o.value === e);
      r && typeof r.text == "string" && (i = r.text);
    }
    return i;
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = this._search.current) == null || e.focus();
  }
  _getClass(t) {
    return S(
      super._getClass(t),
      t.search ? "" : "picker-no-search",
      "picker-select picker-select-single form-control"
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, hotkeys: s } = t;
    return /* @__PURE__ */ m(
      qo,
      {
        ref: this._search,
        id: t.id,
        defaultSearch: e,
        onSearch: this._handleSearch,
        onClear: this._handleSearchClear,
        placeholder: this._getSearchPlaceholder(),
        hotkeys: s
      }
    );
  }
  _renderTrigger(t) {
    const { children: e, state: { selections: s = [], value: i, open: r }, placeholder: o, search: a, disabled: l, clearable: c, display: h, caretClass: d } = t, [u] = s, f = r && a;
    let g;
    if (f)
      g = this._renderSearch(t);
    else if (u || o === void 0 && h) {
      const { text: v } = u || { text: "", value: "" };
      typeof h == "function" ? g = /* @__PURE__ */ m(P, { content: h.call(this, i, s) }) : typeof h == "string" ? g = tt(h, u) : g = /* @__PURE__ */ m(P, { content: v }), g = /* @__PURE__ */ m("span", { className: "picker-single-selection", title: typeof v == "string" ? v : void 0, children: g }, "main");
    } else
      g = /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: o }, "main");
    const _ = c && !f ? /* @__PURE__ */ m("button", { type: "button", className: "btn picker-deselect-btn size-xs square ghost", disabled: l, onClick: this._handleDeselectClick, children: /* @__PURE__ */ m("span", { className: "close" }) }, "deselect") : null, y = f ? null : /* @__PURE__ */ m("span", { className: S("caret flex-none", d) }, "caret");
    return [
      g,
      e,
      _,
      y
    ];
  }
}
function zh(n, t) {
  return n.reduce((e, s) => (Array.isArray(s.items) && zh(s.items, e), typeof s.value == "string" && e.set(s.value, s), e), t || /* @__PURE__ */ new Map());
}
class Fh extends $h {
  constructor() {
    super(...arguments), this._menu = U(), this._disabledSet = /* @__PURE__ */ new Set(), this._getItem = (t, e) => {
      var c;
      if (t.parentKey !== void 0)
        return t;
      const s = new Set(this.props.valueList);
      let i = t.items, r = !1, o = !1;
      Array.isArray(i) && this.props.multiple && !this.props.noNestedPick && (r = !0, i = i.reduce((h, d, u) => {
        const f = this._getItem(d, u);
        return f && (f.selected ? o = !0 : r = !1, h.push(f)), h;
      }, []));
      const a = r || s.has(t.value);
      t = {
        selected: a,
        hint: typeof t.text == "string" ? t.text : void 0,
        ...t,
        checked: this._hasCheckbox || typeof t.checked == "boolean" ? r ? !0 : o ? "indeterminate" : a : void 0,
        className: S(t.className, { hover: t.value !== void 0 && t.value === this.props.state.hoverItem }),
        items: i
      }, t.content && t.text && delete t.text, this.props.getItem && (t = this.props.getItem(t, e));
      const l = ((c = this._getItemCallback) == null ? void 0 : c.call(this, t, e)) ?? t;
      return l && ((l.disabled || l.value === void 0) && (l.hover === void 0 && (l.hover = !1), l.disabled === void 0 && (l.disabled = !0), this._disabledSet.add(l.value)), a && !l.disabled && l.value !== void 0 && this._firstSelected === void 0 && (this._firstSelected = l.value), l);
    }, this._beforeRenderItem = (t, e) => {
      var s;
      return (s = this._renderItemCallback) == null ? void 0 : s.call(this, t, e);
    }, this._handleItemClick = ({ item: t, event: e }) => {
      const s = t.value, i = e.target;
      if (t.disabled || s === void 0 || i.closest(".item-icon,.nested-toggle-icon,.disabled") || Array.isArray(t.items) && t.items.every((l) => this._disabledSet.has(l.value)))
        return;
      const { multiple: r, onPick: o, noNestedPick: a } = this.props;
      if (r)
        if (t.items && !a) {
          const c = [...zh(t.items).values()].filter((h) => !h.items && !this._disabledSet.has(h.value)).map((h) => h.value);
          p(i).closest(".item").children(".item-inner.selected").length ? o({ diselect: c }) : o({ select: c });
        } else
          o({ toggle: s });
      else
        o({ select: s });
    };
  }
  get menu() {
    return this._menu.current;
  }
  get picker() {
    return this.props.picker;
  }
  componentDidMount() {
    var t, e;
    super.componentDidMount(), this._firstSelected === void 0 ? (t = this.menu) == null || t.activeNext() : (e = this.menu) == null || e.toggleActive(this._firstSelected, !0), p(this.element).on("activeNext.zui.Picker", () => {
      var s;
      (s = this.menu) == null || s.activeNext();
    }).on("activePrev.zui.Picker", () => {
      var s;
      (s = this.menu) == null || s.activePrev();
    }).on("selectActive.zui.Picker", () => {
      const s = this.menu;
      if (!s)
        return;
      const i = s.getActiveKey();
      if (i !== void 0) {
        const r = s.getRenderedItem(i);
        r && p(this.element).find(`.item[z-key-path="${r._keyPath}"]`).trigger("click");
      }
    }).on("hidePop.zui.Picker", () => {
      this.props.togglePop(!1);
    }).on("deselectLast.zui.Picker", () => {
      if (this.props.multiple) {
        const { valueList: s } = this.props, i = s[s.length - 1];
        i && this.props.onDeselect(i);
      }
    }), setTimeout(() => {
      var s;
      p((s = this.menu) == null ? void 0 : s.element).find(".menu-item>.selected").scrollIntoView({ block: "center" });
    }, 100);
  }
  componentWillUnmount() {
    super.componentWillUnmount(), p(this.element).off(".zui.Picker");
  }
  _getClass(t) {
    return S(
      super._getClass(t),
      "picker-menu"
    );
  }
  _getMenuProps(t) {
    const { menu: e, tree: s, state: i, checkbox: r, header: o, footer: a, noMatchHint: l, maxItemsCount: c, exceedLimitHint: h } = t, { items: d, search: u } = i;
    return H({
      ref: this._menu,
      className: "picker-menu-list",
      underlineKeys: !0,
      limit: c,
      items: d,
      defaultNestedShow: !0,
      activeOnHover: !0,
      search: u,
      exceedLimitHint: h,
      onClickItem: this._handleItemClick,
      nestedToggle: ".nested-toggle-icon,.item-icon",
      checkbox: r,
      searchProps: ["keys", "text", "title", "subtitle", "value"],
      header: o,
      footer: a,
      noMatchHint: l,
      relativeTarget: this
    }, e, s);
  }
  _renderHeader() {
    return null;
  }
  _renderFooter() {
    return null;
  }
  _renderPop(t) {
    const { tree: e } = t;
    this._firstSelected = void 0, this._disabledSet.clear();
    const s = this._getMenuProps(t);
    return this._hasCheckbox = !!s.checkbox, this._getItemCallback = s.getItem, this._renderItemCallback = s.beforeRenderItem, s.getItem = this._getItem, s.beforeRenderItem = this._beforeRenderItem, e ? /* @__PURE__ */ m(vs, { ...s }) : /* @__PURE__ */ m(Pt, { ...s });
  }
}
function je(n, t) {
  return n.reduce((e, s) => (Array.isArray(s.items) && je(s.items, e), e.set(s.value === void 0 ? "" : String(s.value), s), e), t || /* @__PURE__ */ new Map());
}
const bi = class Ue extends Rt {
  constructor(t) {
    super(t), this._updateTimer = 0, this.toggleValue = (e, s) => {
      if (!this.props.multiple)
        return s || e !== this.value ? this.setValue(e) : this.setValue();
      const { valueList: i } = this, r = i.indexOf(e);
      if (s !== r >= 0)
        return r > -1 ? i.splice(r, 1) : i.push(e), this.setValue(i);
    }, this.deselect = (e = []) => {
      const { valueList: s } = this, i = new Set(this.formatValueList(e)), r = s.filter((o) => !i.has(o));
      this.setValue(r);
    }, this.clear = () => {
      this.setValue();
    }, this.select = (e) => {
      const s = this.formatValueList(e), i = this.props.multiple ? [...this.valueList, ...s] : s[0];
      return this.setValue(i);
    }, this.isSelected = (e) => this.valueList.includes(e), this._handlePickValue = (e) => {
      var o, a;
      const { toggle: s, select: i, diselect: r } = e;
      s !== void 0 ? this.toggleValue(s) : i !== void 0 ? this.select(i) : r !== void 0 && this.deselect(r), this.props.multiple ? this.props.clearSearchOnSelect && ((o = this.state.search) != null && o.length) && this.focusSearch("") : (this.toggle(!1), (a = this.searchBox) == null || a.clear());
    }, this._getMenuItem = (e) => {
      var s;
      return (s = this._sharedValueSet) != null && s.has(e.value) && (e.disabled = !0), e;
    }, this.setValue = this.setValue.bind(this), this.isEmptyValue = this.isEmptyValue.bind(this);
  }
  get valueList() {
    if (this.props.multiple)
      return this.formatValueList(this.state.value);
    const t = this.state.value;
    return this.isEmptyValue(t) ? [] : [t];
  }
  get firstEmptyValue() {
    return this._emptyValueSet.values().next().value;
  }
  get searchBox() {
    var t;
    return (t = this.trigger) == null ? void 0 : t.searchBox;
  }
  get value() {
    return this.props.value ?? this.state.value;
  }
  focusSearch(t) {
    const { searchBox: e } = this;
    e && (typeof t == "string" ? e.setSearch(t) : e.focus());
  }
  getDefaultState(t) {
    const { items: e, valueSplitter: s = ",", emptyValue: i = "" } = t || this.props, r = {
      ...super.getDefaultState(t),
      loading: !1,
      search: "",
      items: Array.isArray(e) ? e : [],
      selections: []
    };
    if (this._emptyValueSet = new Set(typeof i == "string" ? i.split(s) : []), Array.isArray(e) && e.length) {
      const { limitValueInList: o, required: a, multiple: l } = this.props;
      if (e.forEach((c) => {
        typeof c.value == "number" && (c.value = String(c.value));
      }), o) {
        const c = je(e);
        r.value = this.formatValueList(r.value, s).filter((h) => c.has(h)).join(s), a && !l && !this.formatValueList(r.value, s).length && (r.value = e[0].value ?? "");
      }
    }
    return r;
  }
  isEmptyValue(t) {
    return this._emptyValueSet.has(t);
  }
  deselectAll() {
    this.setValue([]);
  }
  selectAll() {
    const { items: t } = this.state;
    if (!Array.isArray(t))
      return;
    const s = [...je(t).values()].reduce((i, r) => (!r.disabled && !r.items && i.push(r.value), i), []);
    return this.select(s);
  }
  isSelectedAll() {
    const { items: t } = this.state;
    if (!Array.isArray(t))
      return !1;
    const e = je(t), s = new Set(this.valueList);
    return [...e.values()].every((i) => i.disabled || s.has(i.value));
  }
  /**
   * @todo Let SearchMenu to load items.
   */
  async load() {
    let t = this._abort;
    t && t.abort();
    const { items: e = [], searchDelay: s } = this.props, { search: i = "" } = this.state;
    let r = [];
    if (Array.isArray(e))
      r = e;
    else {
      if (t = new AbortController(), this._abort = t, await En(s || 500), this._abort !== t)
        return r;
      let o = e;
      typeof o == "string" && (o = { url: o }), typeof o == "object" && o.url && (o = {
        ...o,
        url: tt(o.url, { search: encodeURIComponent(i), "search:base64": ql(i) })
      });
      try {
        r = await Je(o, [this, i], { signal: t.signal });
      } catch (a) {
        r = [], console.warn("[ZUI] Picker: Failed to load items.", this.props.name, { error: a });
      }
      if (this._abort !== t)
        return r;
    }
    return this._abort = void 0, r;
  }
  changeState(t, e) {
    return super.changeState((s) => {
      const i = typeof t == "function" ? t(s) : t;
      if (i.value !== void 0 && i.value !== s.value || i.items && i.items !== s.items) {
        const r = i.items || s.items, o = /* @__PURE__ */ new Map();
        Array.isArray(s.items) && s.items !== i.items && je(s.items, o), Array.isArray(r) && (je(r, o), i.selections = this.formatValueList(i.value ?? s.value).reduce((a, l) => (this.isEmptyValue(l) || a.push(o.get(l) || { value: l, text: l }), a), []));
      }
      return i;
    }, e);
  }
  async update(t) {
    const { state: e, props: s } = this, i = this._itemsCacheInfo || {}, r = {};
    if (this._itemsCacheInfo = i, !e.loading && (t || i.search !== e.search || s.items !== i.items)) {
      await this.changeState({ loading: !0 });
      let a = await this.load();
      const l = (c) => c.filter((h) => (h.key = h.key ?? h.value, typeof h.value == "number" && (h.value = String(h.value)), this.isEmptyValue(h.value) ? !1 : (Array.isArray(h.items) && (h.items = l(h.items)), !0)));
      a = l(a), r.loading = !1, r.items = a, i.items = s.items, i.search = e.search;
    } else
      i.items && !e.open && s.cache === !1 && !Array.isArray(s.items) && (i.items = void 0);
    (t || i.value !== e.value) && (i.value = e.value);
    const o = r.items;
    s.limitValueInList && s.required && !s.multiple && this.isEmptyValue(this.state.value) && Array.isArray(o) && o.length && (r.value = o[0].value), Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    this._updateTimer && clearTimeout(this._updateTimer), this._updateTimer = window.setTimeout(() => {
      this._updateTimer = 0, this.update();
    }, 50);
  }
  componentDidUpdate(t, e) {
    super.componentDidUpdate(t, e), this.tryUpdate();
  }
  componentDidMount() {
    super.componentDidMount(), this.tryUpdate();
    const { shareSelections: t } = this.props;
    if (t) {
      const e = Ue.sharedPickers.get(t) || /* @__PURE__ */ new Set();
      e.add(this), Ue.sharedPickers.set(t, e);
    }
  }
  componentWillUnmount() {
    var e;
    (e = this._abort) == null || e.abort(), this._abort = void 0, this._itemsCacheInfo = void 0, clearTimeout(this._updateTimer);
    const { shareSelections: t } = this.props;
    if (t) {
      const s = Ue.sharedPickers.get(t) || /* @__PURE__ */ new Set();
      s.delete(this), s.size || Ue.sharedPickers.delete(t);
    }
    super.componentWillUnmount();
  }
  _handleChange(t, e) {
    if (super._handleChange(t, e), t !== e) {
      const { onDeselect: s, onSelect: i, onClear: r, multiple: o } = this.props, a = this.formatValueList(e), l = this.valueList;
      if (r && !l.length && a.length && r.call(this), s) {
        const c = a.filter((h) => !l.includes(h));
        c.length && s.call(this, o ? c : c[0]);
      }
      if (i) {
        const c = l.filter((h) => !a.includes(h));
        c.length && i.call(this, o ? c : c[0]);
      }
    }
  }
  _getTriggerProps(t, e) {
    return {
      ...super._getTriggerProps(t, e),
      multiple: t.multiple,
      hotkeys: t.hotkeys,
      placeholder: t.placeholder,
      search: t.search,
      display: t.display,
      searchHint: t.searchHint,
      caretClass: t.caretClass,
      clearable: !!this.valueList.length && !t.required,
      valueList: this.valueList,
      emptyValue: this.firstEmptyValue,
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue,
      onSetValue: this.setValue
    };
  }
  _getPopProps(t, e) {
    return t.shareSelections && (this._sharedValueSet = t.getSharedValues ? new Set(t.getSharedValues(t.shareSelections)) : Ue.getSharedSelections(t.shareSelections)), {
      ...super._getPopProps(t, e),
      picker: this,
      menu: t.menu,
      tree: t.tree,
      getItem: t.shareSelections ? this._getMenuItem : void 0,
      checkbox: t.checkbox,
      multiple: t.multiple,
      search: t.search,
      maxItemsCount: t.maxItemsCount,
      noNestedPick: t.noNestedPick,
      footer: this._renderToolbar(),
      valueList: this.valueList,
      noFlipAfterShow: !0,
      noMatchHint: e.loading ? j.getLang("loadingHint") : t.searchEmptyHint ?? j.getLang("searchEmptyHint"),
      exceedLimitHint: t.exceedLimitHint ?? j.getLang("exceedLimitHint"),
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue,
      onSetValue: this.setValue,
      onPick: this._handlePickValue
    };
  }
  _getTrigger(t) {
    return t.Trigger || (t.multiple ? Ph : Rh);
  }
  _renderToolbar() {
    let { toolbar: t } = this.props;
    return t ? (t === !0 && (t = [{
      key: "selectAll",
      text: j.getLang("selectAll")
    }, {
      key: "cancelSelect",
      text: j.getLang("cancelSelect")
    }]), ht.render(t, [], { size: "sm", relativeTarget: this, getItem: (e) => (e.onClick || (e.key === "selectAll" ? (e.onClick = this.selectAll.bind(this), e.disabled = this.isSelectedAll()) : e.key === "cancelSelect" && (e.onClick = this.deselectAll.bind(this), e.disabled = !this.valueList.length)), e) }, this)) : null;
  }
  formatValueList(t, e) {
    let s;
    return typeof t == "string" && t.length ? s = t.split(e ?? this.props.valueSplitter ?? ",") : Array.isArray(t) ? s = t : s = [t], p.unique(s).reduce((i, r) => (r == null || (r = typeof r != "string" ? String(r) : r, this.isEmptyValue(r) || i.push(r)), i), []);
  }
  formatValue(t) {
    const e = this.formatValueList(t);
    return e.length ? e.join(this.props.valueSplitter ?? ",") : this.firstEmptyValue;
  }
  setValue(t = [], e) {
    let s = this.formatValueList(t);
    if (s.length) {
      const { items: r, limitValueInList: o } = this.props;
      if (o) {
        const a = je(Array.isArray(r) ? r : this.state.items);
        s = s.filter((l) => a.has(l));
      }
    }
    const i = this.formatValue(s);
    return super.setValue(i, e);
  }
  static getSharedSelections(t) {
    const e = /* @__PURE__ */ new Set();
    return (Ue.sharedPickers.get(t) || /* @__PURE__ */ new Set()).forEach((i) => {
      i.valueList.forEach((r) => e.add(r));
    }), e;
  }
};
bi.defaultProps = {
  ...Rt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: "",
  cache: !0,
  hotkeys: !0,
  clearSearchOnSelect: !0
};
bi.Pop = Fh;
bi.sharedPickers = /* @__PURE__ */ new Map();
let Yo = bi;
const Am = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Picker: Yo,
  PickerMenu: Fh,
  PickerMultiSelect: Ph,
  PickerSearch: qo,
  PickerSingleSelect: Rh
}, Symbol.toStringTag, { value: "Module" }));
class Im extends O {
  constructor(t) {
    super(t), this._handleChange = (s) => {
      const { onChange: i } = this.props, r = Array.from(s.target.selectedOptions).map((a) => a.value), o = this.props.multiple ? r : r[0];
      this.setState({ value: o }), i && i(o, s);
    };
    let e = t.value ?? t.defaultValue ?? (t.multiple ? [] : "");
    Array.isArray(e) ? e = e.reduce((s, i) => (i != null && s.push(String(i)), s), []) : e = String(e ?? ""), this.state = {
      value: e
    };
  }
  get value() {
    return this.state.value;
  }
  componentDidUpdate(t) {
    t.value !== this.props.value && this.setState({ value: this.props.value ?? this.props.defaultValue ?? (this.props.multiple ? [] : "") });
  }
  render(t) {
    const { items: e = [], className: s, value: i, defaultValue: r, multiple: o, placeholder: a, onChange: l, ...c } = t, { value: h } = this.state, d = new Set(o ? h : [h]);
    let u = !1;
    const f = e.map((g) => {
      const _ = String(g.value ?? ""), y = d.has(_);
      return y && (u = !0), /* @__PURE__ */ m("option", { value: _, selected: y, children: g.text }, _);
    });
    return /* @__PURE__ */ m("select", { className: S("form-control", s), multiple: o, onChange: this._handleChange, ...c, children: [
      u && !o ? null : /* @__PURE__ */ m("option", { value: "", children: a }),
      f
    ] });
  }
}
class Dm extends O {
  constructor(t) {
    super(t), this._handleChange = (e) => {
      const { onChange: s, type: i } = this.props, r = e.target.value;
      s && s(i === "number" ? +r : r, e);
    }, this._controlled = t.value !== void 0;
  }
  get value() {
    return this.base.value;
  }
  render(t) {
    const { type: e = "text", className: s, onChange: i, ...r } = t;
    return /* @__PURE__ */ m("input", { type: e, className: S("form-control", s), onChange: this._handleChange, ...r });
  }
}
class Lm extends O {
  constructor() {
    super(...arguments), this._handleChange = (t) => {
      const { onChange: e } = this.props, s = t.target.value;
      e && e(s, t);
    };
  }
  get value() {
    return this.base.value;
  }
  autoHeight() {
    p.autoHeight(this.base);
  }
  componentDidMount() {
    this.props.autoHeight && (this.autoHeight(), p(this.base).on("input paste change", () => {
      this.autoHeight();
    }));
  }
  componentWillUnmount() {
    this.props.autoHeight && p(this.base).off("input paste change");
  }
  render(t) {
    const { className: e, onChange: s, ...i } = t;
    return /* @__PURE__ */ m("textarea", { className: S("form-control", e), onChange: this._handleChange, ...i });
  }
}
class Pm extends O {
  constructor(t) {
    super(t), this._handleValueChange = (s) => {
      const i = s.target, r = p(i).closest(".string-list-edit-item").attr("z-key");
      typeof r == "string" && this.setValue(+r, i.value);
    }, this._handleDeleteClick = (s) => {
      const i = p(s.target).closest(".string-list-edit-item").attr("z-key");
      typeof i == "string" && this.remove(+i);
    }, this._handleAddClick = (s) => {
      const i = p(s.target).closest(".string-list-edit-item").attr("z-key");
      this.add(typeof i == "string" ? +i : void 0);
    };
    const e = t.defaultValue ? t.defaultValue.map((s) => [st(), s]) : [];
    e.length || e.push([st(), ""]), this._items$ = Tt(e), this._value = e.reduce((s, [i, r]) => (r.length && s.push(r), s), []), this._changeEffect = ze(() => {
      const s = this._value, i = this._items$.value.reduce((o, [a, l]) => (l.length && o.push(l), o), []);
      (s.length !== i.length || s.some((o, a) => o !== o[a])) && (this._value = i, this.props.onChange && requestAnimationFrame(() => {
        var o, a;
        (a = (o = this.props).onChange) == null || a.call(o, i);
      }));
    });
  }
  get value() {
    return this._value;
  }
  componentDidUpdate() {
    this._preserveOne();
  }
  componentWillUnmount() {
    this._changeEffect();
  }
  _preserveOne() {
    this._items$.value.length || this.add();
  }
  _renderItem(t, e) {
    const { readonly: s, placeholder: i } = this.props;
    return /* @__PURE__ */ m("div", { className: "string-list-edit-item", "z-key": t, children: [
      /* @__PURE__ */ m(
        "input",
        {
          className: "string-list-edit-item-value form-control",
          type: "text",
          value: e,
          placeholder: i,
          readonly: s,
          onChange: this._handleValueChange
        }
      ),
      /* @__PURE__ */ m("div", { className: "string-list-edit-item-actions", children: [
        /* @__PURE__ */ m(et, { type: "ghost", size: "sm", icon: "plus", onClick: this._handleAddClick }),
        /* @__PURE__ */ m(et, { type: "ghost", size: "sm", icon: "trash", onClick: this._handleDeleteClick })
      ] })
    ] }, t);
  }
  setValue(t, e) {
    const s = this._items$.value, i = s.findIndex(([r]) => r === t);
    s[i][1] = e, this._items$.value = [...s];
  }
  add(t) {
    const e = this._items$.value, s = t ? e.findIndex(([i]) => i === t) : e.length - 1;
    e.splice(s + 1, 0, [st(), ""]), this._items$.value = [...e];
  }
  remove(t) {
    const e = this._items$.value, s = e.findIndex(([i]) => i === t);
    e.splice(s, 1), e.length || e.push([st(), ""]), this._items$.value = [...e];
  }
  render(t) {
    const e = this._items$.value, { itemWidth: s, maxWidth: i = 400 } = t, r = {};
    return s && s !== "auto" && (r["--string-list-edit-item-width"] = J(s) || ""), i && i !== "auto" && i !== "100%" && (r.maxWidth = J(i) || ""), /* @__PURE__ */ m("div", { className: "string-list-edit", style: r, children: e.map(([o, a]) => this._renderItem(o, a)) });
  }
}
class Wn extends O {
  constructor(t) {
    super(t), this._handleKeyChange = (s) => {
      const i = s.target, r = p(i).closest(".map-edit-item").attr("z-key");
      typeof r == "string" && this.setKey(+r, i.value);
    }, this._handleValueChange = (s) => {
      const i = s.target, r = p(i).closest(".map-edit-item").attr("z-key");
      typeof r == "string" && this.setValue(+r, i.value);
    }, this._handleDeleteClick = (s) => {
      const i = p(s.target).closest(".map-edit-item").attr("z-key");
      typeof i == "string" && this.remove(+i);
    }, this._handleAddClick = (s) => {
      const i = p(s.target).closest(".map-edit-item").attr("z-key");
      this.add(typeof i == "string" ? +i : void 0);
    };
    const e = t.defaultValue ? Object.entries(t.defaultValue).map(([s, i]) => [st(), s, i]) : [];
    e.length || e.push([st(), "", ""]), this._pairs$ = Tt(e), this._valuePairs = Wn.formatPairs(e), this._pairsChangeEffect = ze(() => {
      const s = this._valuePairs, i = Wn.formatPairs(this._pairs$.value);
      (s.length !== i.length || s.some(([o, a], l) => o !== i[l][0] || a !== i[l][1])) && (this._valuePairs = i, this.props.onChange && requestAnimationFrame(() => {
        var o, a;
        (a = (o = this.props).onChange) == null || a.call(o, this.value);
      }));
    });
  }
  static formatPairs(t) {
    return t.reduce((e, [s, i, r]) => (i.length && e.push([i, r]), e), []).sort((e, s) => e[0].localeCompare(s[0]));
  }
  get value() {
    return this._valuePairs.reduce((t, [e, s]) => (t[e] = s, t), {});
  }
  componentDidUpdate() {
    this._preserveOne();
  }
  componentWillUnmount() {
    this._pairsChangeEffect();
  }
  _preserveOne() {
    this._pairs$.value.length || this.add();
  }
  _renderItem(t, e, s) {
    const { readonly: i, keyPlaceholder: r, valuePlaceholder: o } = this.props;
    return /* @__PURE__ */ m("div", { className: "map-edit-item", "z-key": t, children: [
      /* @__PURE__ */ m("input", { className: "map-edit-item-key form-control", type: "text", value: e, readonly: i, onChange: this._handleKeyChange, placeholder: r }),
      /* @__PURE__ */ m("input", { className: "map-edit-item-value form-control", type: "text", value: s, readonly: i, onChange: this._handleValueChange, placeholder: o }),
      /* @__PURE__ */ m("div", { className: "map-edit-item-actions", children: [
        /* @__PURE__ */ m(et, { type: "ghost", size: "sm", icon: "plus", onClick: this._handleAddClick }),
        /* @__PURE__ */ m(et, { type: "ghost", size: "sm", icon: "trash", onClick: this._handleDeleteClick })
      ] })
    ] }, t);
  }
  setKey(t, e) {
    const s = this._pairs$.value, i = s.findIndex(([r]) => r === t);
    s[i][1] = e, this._pairs$.value = [...s];
  }
  setValue(t, e) {
    const s = this._pairs$.value, i = s.findIndex(([r]) => r === t);
    s[i][2] = e, this._pairs$.value = [...s];
  }
  add(t) {
    const e = this._pairs$.value, s = t ? e.findIndex(([i]) => i === t) : e.length - 1;
    e.splice(s + 1, 0, [st(), "", ""]), this._pairs$.value = [...e];
  }
  remove(t) {
    const e = this._pairs$.value, s = e.findIndex(([i]) => i === t);
    e.splice(s, 1), e.length || e.push([st(), "", ""]), this._pairs$.value = [...e];
  }
  render(t) {
    const e = this._pairs$.value, { keyWidth: s, valueWidth: i, maxWidth: r = 400 } = t, o = {};
    return s && s !== "auto" && (o["--map-edit-key-width"] = J(s) || ""), i && i !== "auto" && (o["--map-edit-value-width"] = J(i) || ""), r && r !== "auto" && r !== "100%" && (o.maxWidth = J(r) || ""), /* @__PURE__ */ m("div", { className: "map-edit", style: o, children: e.map(([a, l, c]) => this._renderItem(a, l, c)) });
  }
}
class Rm extends O {
  constructor() {
    super(...arguments), this._defaultID = `_form-control-${st()}`;
  }
  _renderZUIComponent(t, e) {
    return t.ZUI ? /* @__PURE__ */ m(pr, { $use: t, $options: e }) : /* @__PURE__ */ m(t, { ...e });
  }
  _renderSelect(t) {
    return /* @__PURE__ */ m(Im, { ...t });
  }
  _renderCheckbox(t) {
    const { className: e, type: s, name: i, defaultValue: r, value: o, disabled: a, ...l } = t;
    return /* @__PURE__ */ m("div", { className: `check-list-inline is-type-${s}`, children: /* @__PURE__ */ m(
      Qe,
      {
        type: s,
        id: i ?? this._defaultID,
        className: e,
        name: i,
        defaultChecked: !!r,
        disabled: !!a,
        checked: !!o,
        ...l
      }
    ) });
  }
  _renderCheckList(t) {
    const { items: e = [], type: s = "radio", className: i, disabled: r, block: o = !1, name: a, defaultValue: l, value: c, ...h } = t;
    return /* @__PURE__ */ m(
      Wf,
      {
        type: s,
        items: e,
        className: i,
        name: a,
        defaultChecked: l,
        checked: c,
        disabled: !!r,
        inline: !o,
        ...h
      }
    );
  }
  _renderText(t) {
    const { value: e, className: s, ...i } = t;
    return /* @__PURE__ */ m("div", { className: S("form-static-text", s), ...i, children: e });
  }
  _renderTextarea(t) {
    return /* @__PURE__ */ m(Lm, { ...t });
  }
  _renderInput(t) {
    return /* @__PURE__ */ m(Dm, { ...t });
  }
  _renderMap(t) {
    return /* @__PURE__ */ m(Wn, { ...t });
  }
  _renderStringList(t) {
    return /* @__PURE__ */ m(Pm, { ...t });
  }
  render(t) {
    const { widget: e = "input", props: s, ...i } = t, r = H({}, i, s);
    return typeof e == "function" ? this._renderZUIComponent(e, r) : e === "select" || e === "multiSelect" ? this._renderSelect({
      multiple: e === "multiSelect",
      ...r
    }) : e === "checkbox" || e === "switch" ? this._renderCheckbox({
      type: e,
      ...r
    }) : e === "checkboxList" || e === "switchList" || e === "radioList" || e === "radio" ? this._renderCheckList({
      type: e === "switchList" ? "switch" : e === "radioList" || e === "radio" ? "radio" : "checkbox",
      ...r
    }) : e === "text" ? this._renderText(r) : e === "textarea" ? this._renderTextarea(r) : e === "file" ? this._renderInput({ ...r, type: "file" }) : e === "input" ? this._renderInput(r) : e === "map" ? this._renderMap(r) : e === "stringList" ? this._renderStringList(r) : /* @__PURE__ */ m(pr, { $use: e, $options: r });
  }
}
function zm(n) {
  const { children: t, name: e, label: s, tooltip: i, labelClass: r, required: o, disabled: a, style: l, className: c, hint: h, control: d } = n, u = s == null || s === !1 || typeof s == "string" && !s.trim().length;
  return /* @__PURE__ */ m("div", { className: S("form-group", c, (d == null ? void 0 : d.widget) === "text" ? "is-static-text" : null, u ? "no-label" : ""), "data-name": e, style: l, children: [
    s !== void 0 ? /* @__PURE__ */ m("label", { class: S("form-label", r, o ? "required" : ""), for: e, children: [
      /* @__PURE__ */ m("div", { class: "form-label-text", title: typeof s == "string" ? s : void 0, children: /* @__PURE__ */ m(P, { content: s }) }),
      i ? /* @__PURE__ */ m("div", { className: "state", "zui-toggle": "tooltip", "zui-toggle-tooltip": Ru(typeof i == "string" ? { content: i } : i), children: /* @__PURE__ */ m(rt, { icon: "info" }) }) : null
    ] }) : null,
    d ? /* @__PURE__ */ m(Rm, { name: e, required: o, disabled: a, ...d }) : null,
    t,
    h ? /* @__PURE__ */ m(P, { className: "form-tip", content: h }) : null
  ] });
}
class Fm extends O {
  constructor() {
    super(...arguments), this._handleChange = (t) => {
      const { schemaInfo: e, onChangeField: s } = this.props, i = e.widget[2];
      let r;
      if (i)
        r = i(t);
      else {
        if (t === void 0)
          return;
        if (t instanceof Event) {
          const o = t.target;
          if (o.tagName === "INPUT" && o.type === "radio" && !p(o).prop("checked"))
            return;
          o.tagName === "INPUT" && o.type === "checkbox" ? r = p(o).prop("checked") : o.tagName === "SELECT" && o.multiple ? r = Array.from(p(o).val()) : r = o.value;
        } else if (typeof t == "function" || typeof t == "object" && !Array.isArray(t) && !p.isPlainObject(t)) {
          console.warn("[ZUI] Unsupported value type:", typeof t, t);
          return;
        } else
          r = t;
      }
      s(e.path, r);
    };
  }
  render({ schemaInfo: t }) {
    const { schema: e, value: s, widget: i, path: r, required: o } = t, { title: a, description: l, tooltip: c, disabled: h, readonly: d, placeholder: u, props: f } = e, [g, _] = i, y = {
      widget: g,
      disabled: h,
      readonly: d,
      placeholder: u,
      required: o,
      props: H({}, _, f),
      value: s,
      onChange: this._handleChange
    };
    return /* @__PURE__ */ m(
      zm,
      {
        name: r,
        label: a,
        hint: l,
        tooltip: c,
        required: y.required,
        control: y
      }
    );
  }
}
class Bn extends O {
  _getSchemaInfo(t) {
    const { infoGetter: e, path: s = "" } = t;
    return t.schemaInfo || e(s);
  }
  _renderObjectSchema(t) {
    const { infoGetter: e, errorsGetter: s, path: i = "", onChangeField: r } = this.props, { schema: o, properties: a = [] } = t, { title: l, description: c, displayType: h = "vert", displayMode: d = "grid" } = o, u = [];
    for (const g of a) {
      const _ = i.length ? `${i}.${g}` : g, y = s(_);
      u.push(/* @__PURE__ */ m(Bn, { infoGetter: e, path: _, onChangeField: r, errorsGetter: s, errors: y.length ? y : void 0 }, g));
    }
    const f = `form-builder-items form-${d} form-${h}`;
    return i.length ? /* @__PURE__ */ m(
      Ln,
      {
        title: l,
        caption: c,
        className: "form-builder-collapsible",
        contentClass: f,
        children: u
      },
      i
    ) : /* @__PURE__ */ m("div", { className: f, children: u });
  }
  _renderArraySchema(t) {
    const { infoGetter: e, errorsGetter: s, path: i = "" } = this.props;
    if (!t)
      return console.warn("[ZUI] Schema not found:", i), null;
    const r = t.schema, { title: o, description: a, items: l } = r;
    if (l) {
      const c = e(`${i}[]`);
      if (!c)
        return console.warn("[ZUI] Schema not found:", `${i}[]`), null;
      const h = c.value;
      return /* @__PURE__ */ m(
        Ln,
        {
          title: o,
          caption: a,
          disabled: r.collapsed === "disabled",
          collapsed: typeof r.collapsed == "boolean" ? r.collapsed : !r.title,
          className: "form-builder-collapsible",
          children: h.map((d, u) => {
            const f = {
              ...c,
              path: `${i}[${u}]`,
              value: d
            }, g = s(f.path);
            return /* @__PURE__ */ m(Bn, { infoGetter: e, errors: g.length ? g : void 0, errorsGetter: s, path: f.path, schemaInfo: f, onChangeField: this.props.onChangeField });
          })
        }
      );
    }
    return this._renderFormItem(t);
  }
  _renderSchema(t) {
    const { type: e } = t.schema;
    return e === "object" ? this._renderObjectSchema(t) : e === "array" ? this._renderArraySchema(t) : this._renderFormItem(t);
  }
  _renderFormItem(t) {
    return /* @__PURE__ */ m(Fm, { schemaInfo: t, onChangeField: this.props.onChangeField });
  }
  _getWidthStyle(t) {
    if (typeof t != "string" && typeof t != "number")
      return "";
    if (typeof t == "number")
      return `${t / 12 * 100}%`;
    if (t === "full")
      return "100%";
    if (/^\d+\/\d+$/.test(t)) {
      const [e, s] = t.split("/").map(Number);
      return `${e / s * 100}%`;
    }
    return t;
  }
  render(t) {
    const { infoGetter: e, errors: s, path: i = "" } = t, r = t.schemaInfo || e(i);
    if (!r)
      return console.warn("[ZUI] Schema not found:", i), null;
    const { schema: o } = r;
    if (o.hidden)
      return null;
    const { extra: a, hint: l, width: c, type: h, disabled: d, readonly: u, required: f, className: g, wrapBefore: _, wrapAfter: y } = o, v = this._getWidthStyle(c);
    return [
      _ ? /* @__PURE__ */ m("div", { className: "form-grid-wrap form-grid-wrap-before", "z-wrap-before": i }, `${i}-wrap-before`) : null,
      /* @__PURE__ */ m(
        "div",
        {
          "z-key": i,
          "z-type": h,
          className: S("form-builder-item", {
            "is-root": !i.length,
            "is-disabled": d,
            "is-readonly": u,
            "is-required": f,
            "has-error": s == null ? void 0 : s.length
          }, g),
          style: v ? { "--form-item-width": v } : void 0,
          children: [
            this._renderSchema(r),
            s != null && s.length ? /* @__PURE__ */ m("div", { class: "form-item-errors", children: s.map(([b, w]) => /* @__PURE__ */ m("div", { class: "form-item-error", children: w }, b)) }) : null,
            l ? /* @__PURE__ */ m("div", { className: "form-hint", children: l }) : null,
            a ? /* @__PURE__ */ m(P, { className: "form-builder-extra", content: a }) : null
          ]
        },
        i
      ),
      y ? /* @__PURE__ */ m("div", { className: "form-grid-wrap form-grid-wrap-after", "data-wrap-after": i }, `${i}-wrap-after`) : null
    ];
  }
}
const Om = {
  validate: {
    required: "“{title}”不能为空",
    minLength: "“{title}”的长度不能少于{min}",
    maxLength: "“{title}”的长度不能超过{max}",
    minCount: "“{title}”的数目不能少于{min}",
    maxCount: "“{title}”的数目不能超过{max}",
    min: "“{title}”不能小于{min}",
    max: "“{title}”不能超过{max}",
    pattern: "“{title}”格式不正确",
    integer: "“{title}”必须是整数"
  }
}, Hm = {
  validate: {
    required: "“{title}”不能為空",
    minLength: "“{title}”的長度不能少於{min}",
    maxLength: "“{title}”的長度不能超過{max}",
    minCount: "“{title}”的數目不能少於{min}",
    maxCount: "“{title}”的數目不能超過{max}",
    min: "“{title}”不能小於{max}",
    max: "“{title}”不能超過{max}",
    pattern: "“{title}”格式不正確",
    integer: "“{title}”必須是整數"
  }
}, Wm = {
  validate: {
    required: '"{title}" is required',
    minLength: '"{title}" length must be greater than {min}',
    maxLength: '"{title}" length must be less than {max}',
    minCount: '"{title}" count must be greater than {min}',
    maxCount: '"{title}" count must be less than {max}',
    min: '"{title}" must be greater than {min}',
    max: '"{title}" must be less than {max}',
    pattern: '"{title}" format is incorrect',
    integer: '"{title}" must be an integer'
  }
};
j.addLang({
  zh_cn: {
    formBuilder: Om
  },
  zh_tw: {
    formBuilder: Hm
  },
  en: {
    formBuilder: Wm
  }
});
function Bm(n, t, e) {
  return j.getLang(`formBuilder.${n}`, t, e);
}
const tn = class be extends Y {
  constructor(t) {
    super(t), this._map = /* @__PURE__ */ new Map(), this.setFieldValue = (s, i) => {
      const r = this.getFieldSchemaInfo(s), o = (r == null ? void 0 : r.schema).autoTrim;
      o && typeof i == "string" && (o === "start" ? i = i.trimStart() : o === "end" ? i = i.trimEnd() : i = i.trim());
      const l = this._dataMap$.value[s];
      l !== i && requestAnimationFrame(() => {
        var h;
        const c = (h = this.props.onFieldChange) == null ? void 0 : h.call(this, s, i, l);
        c !== !1 && Ac(() => {
          const d = {
            [s]: i,
            ...typeof c == "object" ? c : {}
          };
          this._dataMap$.value = {
            ...this._dataMap$.value,
            ...d
          };
          const u = Object.keys(d);
          this._updateFieldInfos(u);
        });
      });
    }, this.getFieldValidationErrors = (s) => this.validationErrors[s] || [], this.getFieldSchemaInfo = (s = "") => {
      var i;
      return (i = this.getFieldSchemaInfo$(s)) == null ? void 0 : i.value;
    }, this._handleSubmit = (s) => {
      const { onSubmit: i, autoValidate: r } = this.props;
      if (r != null && r.onSubmit && !this.validate()) {
        s.preventDefault();
        return;
      }
      (i == null ? void 0 : i.call(this, s, this.formData)) === !1 && s.preventDefault();
    }, this._schema$ = Tt(t.schema);
    const e = be.buildDataMap(t.schema, t.defaultData);
    this._dataMap$ = Tt(e), this._schemaPatches$ = Tt({}), this._validationErrors$ = Tt({}), this._formData$ = us(() => be.buildFormData(this._dataMap$.value)), this._lastFormData = be.buildFormData(e), this._schemaMap$ = us(() => {
      const s = {}, i = this._schemaPatches$.value;
      return be.loopSchema(this.schema, (r, o) => {
        s[o] = p.extend(!0, r, i[o]);
      }), this._map.clear(), s;
    }), this._formDataEffect = ze(() => {
      var i;
      const s = this._lastFormData;
      this._lastFormData = this._formData$.value, (i = this.props.onDataChange) == null || i.call(this, this._formData$.value, s);
    });
  }
  get schema$() {
    return this._schema$;
  }
  get schema() {
    return this._schema$.value;
  }
  get formData() {
    return this._formData$.value;
  }
  get schemaMap() {
    return this._schemaMap$.value;
  }
  get validationErrors() {
    return this._validationErrors$.value;
  }
  componentDidMount() {
    var t;
    (t = this.props.afterRender) == null || t.call(this, !0);
  }
  componentDidUpdate(t) {
    var e;
    t.schema !== this.props.schema ? this._schema$.value = this.props.schema : (e = this.props.afterRender) == null || e.call(this, !1);
  }
  componentWillUnmount() {
    this._formDataEffect();
  }
  getSchemaByPath(t) {
    return this.schemaMap[t];
  }
  setSchemaByPath(t, e, s = !0) {
    const i = this._schemaPatches$.value;
    this._schemaPatches$.value = {
      ...i,
      [t]: s ? p.extend(!0, i[t] || {}, e) : {
        ...i[t],
        ...e
      }
    };
  }
  validateField(t, e) {
    const s = typeof t == "string" ? this.getFieldSchemaInfo(t) : t, i = s == null ? void 0 : s.schema.type;
    if (!i || i === "object")
      return [];
    const { schema: r } = s, o = (e == null ? void 0 : e.value) ?? s.value, a = (h) => [h, Bm(`validate.${h}`, r)], l = (h, d, u = "pattern") => {
      if (!h)
        return;
      const f = typeof h == "string" ? { pattern: h } : h;
      if (!new RegExp(f.pattern).test(d))
        return f.message ? [u, f.message] : a(u);
    };
    if (s.required && (o == null || i === "string" && o === "" || i === "array" && (!Array.isArray(o) || o.length === 0) || i === "map" && Object.keys(o).length === 0 || (i === "number" || i === "integer") && Number.isNaN(o)))
      return [a("required")];
    const c = [];
    if (r.type === "string") {
      typeof r.min == "number" && r.min > 0 && String(o ?? "").length < r.min && c.push(a("minLength")), typeof r.max == "number" && r.max > 0 && String(o ?? "").length > r.max && c.push(a("maxLength"));
      const h = l(r.pattern, String(o ?? ""));
      h && c.push(h);
    } else if (r.type === "number" || r.type === "integer")
      typeof r.min == "number" && r.min > 0 && Number(o ?? 0) < r.min && c.push(a("min")), typeof r.max == "number" && r.max > 0 && Number(o ?? 0) > r.max && c.push(a("max")), r.type === "integer" && !Number.isInteger(Number(o ?? 0)) && c.push(a("integer"));
    else if (r.type === "array")
      typeof r.min == "number" && r.min > 0 && Array.isArray(o) && o.length < r.min && c.push(a("minCount")), typeof r.max == "number" && r.max > 0 && Array.isArray(o) && o.length > r.max && c.push(a("maxCount"));
    else if (r.type === "map" && (r.keyPattern || r.valuePattern)) {
      const h = o, { keyPattern: d, valuePattern: u } = r;
      for (const [f, g] of Object.entries(h)) {
        const _ = l(d, f, "keyPattern"), y = l(u, String(g ?? ""), "valuePattern");
        _ && c.push(_), y && c.push(y);
      }
    }
    if (!(e != null && e.skipUpdate)) {
      const { validationErrors: h } = this;
      if (JSON.stringify(h[s.path]) === JSON.stringify(c))
        return c;
      this._validationErrors$.value = {
        ...h,
        [s.path]: c
      }, this._updateFieldInfo(s.path);
    }
    return c;
  }
  /**
   * 验证表单
   * @returns 是否验证通过
   * 如果验证不通过，则返回 false，并滚动到第一个错误所在的表单项
   * 如果验证通过，则返回 true
   */
  validate() {
    const t = {}, { validationErrors: e } = this, s = { skipUpdate: !0 };
    let i = !1, r = "";
    return be.loopSchema(this.schema, (o, a) => {
      const l = this.validateField(a, s);
      !i && JSON.stringify(e[a] || []) !== JSON.stringify(l) && (i = !0), l.length > 0 && (t[a] = l, r = a);
    }), i && (this._validationErrors$.value = t, r.length && p(this.element).find(`[z-key="${r}"]`).scrollIntoView()), Object.keys(t).length === 0;
  }
  /**
   * 设置表单验证错误
   * @param errors 字段路径到错误的映射；每个字段可以是错误消息字符串、`{code, message}` 对象，或该对象的数组
   * @param reset 是否重置错误列表
   * 如果为 `true`，则重置错误列表；如果为 `false`，则合并错误列表
   */
  setValidationErrors(t, e) {
    const s = (r, o) => typeof o == "string" ? [[`${r}_Error`, o]] : Array.isArray(o) ? o.map((a) => [a.code, a.message]) : [[o.code, o.message]], i = Object.fromEntries(Object.entries(t).map(([r, o]) => [r, s(r, o)]));
    e ? this._validationErrors$.value = i : this._validationErrors$.value = {
      ...this._validationErrors$.value,
      ...i
    }, this.forceUpdate();
  }
  _updateMap() {
    const t = this._map, e = new Set(t.keys());
    be.loopSchema(this.schema, (s, i) => {
      e.delete(i), this._updateFieldInfo(i);
    });
    for (const s of e.keys())
      t.delete(s);
  }
  _updateFieldInfos(t) {
    const e = new Set(t);
    for (const s of t)
      this._updateFieldInfo(s, e);
  }
  _updateFieldInfo(t, e) {
    var a;
    const s = this._createFieldSchemaInfo(t);
    if (!s)
      return;
    const i = this._map;
    let r = i.get(t);
    const o = !r;
    if (o ? (r = Tt(s), this._map.set(t, r)) : r.value = s, e = e || /* @__PURE__ */ new Set(), Array.from(i.values()).forEach(({ value: l }) => {
      !l || l.path === t || e.has(l.path) || !l.dependenciesSet.has(t) || this._updateFieldInfo(l.path, e);
    }), !o) {
      const { autoValidate: l = {} } = this.props;
      if (l.onChange) {
        const c = this._validationErrors$.value;
        l.onChange === "removeErrors" && ((a = c[t]) != null && a.length) ? this._validationErrors$.value = {
          ...c,
          [t]: []
        } : this.validateField(t);
      }
    }
    return s;
  }
  getFieldSchemaInfo$(t = "") {
    let e = this._map.get(t);
    return e || (this._updateFieldInfo(t), e = this._map.get(t)), e;
  }
  _evaluateExpression(t, ...e) {
    try {
      const s = t.substring(2, t.length - 2);
      return p.runJS(s, ...e);
    } catch (s) {
      console.warn("[ZUI] Failed to evaluate expression:", t, s);
    }
  }
  _createFieldSchemaInfo(t) {
    const e = this.schemaMap[t];
    if (!e)
      return;
    const s = this._dataMap$.value[t], i = Object.keys(e), r = {};
    for (const h of i) {
      let d = e[h];
      typeof d == "string" && d.startsWith("{{") && d.endsWith("}}") && (d = this._evaluateExpression(d, ["formBuilder", this], ["schema", e], ["formData", this.formData], ["value", s], ["path", t])), r[h] = d;
    }
    const o = r.type, a = o === "object" && r.properties ? Object.keys(r.properties) : void 0;
    if (a) {
      const h = /* @__PURE__ */ new Map();
      for (const d of a) {
        const u = r.properties[d];
        if (typeof u.order != "number")
          break;
        h.set(d, u.order);
      }
      h.size === a.length && a.sort((d, u) => h.get(d) - h.get(u));
    }
    let l = Array.isArray(r.required) ? !1 : !!r.required;
    if (o !== "object" && r.required === void 0 && t.length > 2 && t.includes(".")) {
      const h = t.split("."), d = h.pop(), u = h.join("."), f = this.getFieldSchemaInfo(u), g = f ? f.schema : this.getSchemaByPath(u);
      g && (l = Array.isArray(g.required) && g.required.includes(d));
    }
    const c = {
      required: l,
      path: t,
      schema: r,
      properties: a,
      value: s,
      dependenciesSet: new Set(e.dependencies || [])
    };
    return {
      ...c,
      widget: this._getWidget(c)
    };
  }
  _getWidget(t) {
    const { widget: e, props: s } = t.schema, { widgetMap: i } = be, { widgets: r = {} } = this.props;
    let o;
    if (e)
      for (o = r[e] || i[e]; typeof o == "string" && o !== e; ) {
        const l = r[o] || i[o];
        if (!l || o === l)
          break;
        o = l;
      }
    o || (o = e || r._ || i._), typeof o == "function" && (o = o.call(this, t, this));
    const a = Array.isArray(o) ? o : [o];
    return s && (a[1] = H({}, s, a[1])), a;
  }
  _renderHeader(t) {
    const { header: e } = t;
    return e ? /* @__PURE__ */ m(P, { className: "form-builder-header", content: e }, "header") : null;
  }
  _renderBody(t) {
    const { schema: e, actions: s } = t, { title: i } = e;
    return /* @__PURE__ */ m("div", { className: `form-builder-body form-grid form-${e.displayType || "vert"}`, children: [
      i ? /* @__PURE__ */ m("div", { className: "form-builder-title", children: i }) : null,
      /* @__PURE__ */ m(
        Bn,
        {
          infoGetter: this.getFieldSchemaInfo,
          errorsGetter: this.getFieldValidationErrors,
          onChangeField: this.setFieldValue
        },
        this.schemaMap
      ),
      s ? ht.render(s, [], { className: "form-actions" }) : null,
      t.children
    ] }, "body");
  }
  _renderFooter(t) {
    const { footer: e } = t;
    return e ? /* @__PURE__ */ m(P, { className: "form-builder-footer", content: e }, "footer") : null;
  }
  _getProps(t) {
    return H({}, super._getProps(t), {
      action: t.formAction,
      onSubmit: this._handleSubmit
    });
  }
  _getClassName(t) {
    return ["form-builder", t.className];
  }
  _getChildren(t) {
    return [
      this._renderHeader(t),
      this._renderBody(t),
      this._renderFooter(t),
      t.formName ? /* @__PURE__ */ m("input", { type: "hidden", name: t.formName, value: JSON.stringify(this.formData) }) : null
    ];
  }
  static loopSchema(t, e, s = "") {
    if (e(t, s), t.type === "object")
      for (const i in t.properties) {
        const r = t.properties[i];
        this.loopSchema(r, e, s.length ? `${s}.${i}` : i);
      }
    else
      t.type === "array" && t.items && this.loopSchema(t.items, e, `${s}[]`);
  }
  static buildDataMap(t, e, s = "", i = {}) {
    if (t.type === "object" && "properties" in t)
      for (const r in t.properties) {
        const o = t.properties[r], a = e && typeof e == "object" ? e[r] : void 0;
        this.buildDataMap(o, a, s.length ? `${s}.${r}` : r, i);
      }
    else {
      const r = t.type === "array" && t.items ? `${s}[]` : s;
      i[r] = e ?? JSON.parse(JSON.stringify(t.defaultValue ?? this.typeDefaultValueMap[t.type] ?? ""));
    }
    return i;
  }
  static buildFormData(t) {
    return Object.keys(t).reduce((e, s) => {
      const i = t[s], r = s.split(".");
      let o = e;
      return r.forEach((a, l) => {
        l === r.length - 1 ? o[a.endsWith("[]") ? a.substring(0, a.length - 2) : a] = i : (o[a] || (o[a] = {}), o = o[a]);
      }), e;
    }, {});
  }
};
tn.NAME = "FormBuilder";
tn.defaultProps = {
  autoValidate: {
    onChange: "removeErrors",
    onSubmit: !0
  }
};
tn.widgetMap = {
  _: (n) => n.schema.type === "boolean" ? "checkbox" : "input",
  picker: ({ schema: n }) => {
    var s;
    const t = n.type === "array", e = ((s = n.props) == null ? void 0 : s.multiple) ?? (n.widget === "multiPicker" ? !0 : t);
    return [Yo, {
      multiple: e
    }, (i) => {
      var r, o;
      return e && t ? !n.required && !(i != null && i.length) ? [] : i.split(((r = n.props) == null ? void 0 : r.valueSplitter) ?? ",") : e && t ? i.split(((o = n.props) == null ? void 0 : o.valueSplitter) ?? ",") : i;
    }];
  },
  multiPicker: "picker",
  input: ({ schema: n }) => {
    const { type: t = "string" } = n;
    return t === "number" || t === "integer" ? ["input", { type: "number" }] : "input";
  }
};
tn.typeDefaultValueMap = {
  string: "",
  number: 0,
  integer: 0,
  boolean: !1,
  array: [],
  object: {},
  map: {}
};
let Oh = tn;
const jm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FormBuilder: Oh
}, Symbol.toStringTag, { value: "Module" }));
class Zo extends W {
}
Zo.NAME = "FormBuilder";
Zo.Component = Oh;
Zo.register();
ot(jm);
class Jo {
  constructor(t, e) {
    const { DEFAULT: s, globalControls: i } = this.constructor;
    this._options = {
      ...s,
      ...e,
      controls: {
        ...i,
        ...s.controls,
        ...e == null ? void 0 : e.controls
      }
    }, this._$element = p(t), this._cachedFields = /* @__PURE__ */ new Map();
  }
  get element() {
    return this._$element[0];
  }
  get options() {
    return this._options;
  }
  get $element() {
    return this._$element;
  }
  _queryField(t) {
    if (t = t == null ? void 0 : t.trim(), !(t != null && t.length))
      return;
    const e = this._$element;
    if ("#.[".includes(t[0])) {
      const o = e.find(t);
      return o.length ? o : void 0;
    }
    const s = this._options, i = t.replaceAll("[", "\\[").replaceAll("]", "\\]");
    let r = e.find(`[zui-form-field="${i}"]`);
    return r.length || (r = e.find(`[name="${i}"]`)), !r.length && s.matchID && (r = e.find(`#${i}`)), !r.length && s.matchBrackets && !t.includes("[") && (r = e.find(`[name="${i}\\[\\]"]`), r.length || (r = e.find(`[name^="${i}["]`))), r.length ? r : void 0;
  }
  _getControl(t) {
    const { controls: e } = this._options;
    if (e)
      for (const [s, i] of Object.entries(e)) {
        const r = i(t, this._$element);
        if (r)
          return { type: s, ...r };
      }
  }
  getFieldInfo(t) {
    const { cacheQuery: e, allowSameName: s, fields: i } = this._options;
    let r;
    if (i) {
      const a = typeof i == "function" ? i : i[t];
      if (a) {
        const l = a.call(this, t, this._$element);
        if (l instanceof p)
          r = l;
        else if (l)
          return l;
        if (l === !1)
          return;
      }
    }
    const o = r || (e ? this._cachedFields.get(t) : this._queryField(t));
    if (o != null && o.length) {
      if (!s && o.length > 1)
        throw new Error(`[ZUI] FormHelper: Multiple fields found for query "${t}".`);
      return e && this._cachedFields.set(t, o), {
        $field: o,
        query: t,
        name: o.attr("name") ?? "",
        value: o.val(),
        control: this._getControl(o)
      };
    }
  }
  getFieldVal(t) {
    const e = this.getFieldInfo(t);
    if (e)
      return e.control ? e.control.getVal() : e.value;
  }
  setFieldVal(t, e) {
    const s = this.getFieldInfo(t);
    if (!s) {
      if (this._options.throwError)
        throw new Error(`[ZUI] FormHelper: Field "${t}" not found.`);
      return !1;
    }
    return s.control ? s.control.setVal(e) : (s.$field.val(e), !0);
  }
  setFormData(t) {
    Object.entries(t).forEach(([e, s]) => {
      this.setFieldVal(e, s);
    });
  }
  static registerControl(t, e) {
    this.globalControls[t] = e;
  }
}
Jo.DEFAULT = {
  matchID: !0,
  matchBrackets: !0,
  throwError: !0
};
Jo.globalControls = {
  picker: (n, t) => {
    let e = n.closest("[z-use-picker]"), s = !1;
    if (!e.length && n.hasClass("pick-value") && (e = n.closest("[z-use]"), s = !0), !e.length || t && !e.closest(t).length)
      return;
    const i = s ? e.zui() : e.data("zui.Picker");
    if (i)
      return {
        type: "picker",
        $element: e,
        instance: i,
        getVal: () => {
          var r;
          return (r = i.$) == null ? void 0 : r.value;
        },
        setVal: (r) => {
          var o;
          return (o = i.$) == null || o.setValue(r), !0;
        }
      };
  }
};
function Y_(n, t) {
  return new Jo(n, t);
}
class Lt extends Gt {
  constructor() {
    super(...arguments), this._menuRef = U();
  }
  get menu() {
    return this._menuRef.current;
  }
  handleClickTarget(t) {
    const e = p(t.target), { notHideOnClick: s } = this.options;
    return (!s || !e.closest(s).length) && this.hide(), !0;
  }
  _getMenuOptions() {
    const { items: t, placement: e, menu: s, tree: i, onClickItem: r, relativeTarget: o = this._triggerElement } = this.options;
    return {
      items: t,
      placement: e,
      tree: i,
      onClickItem: r,
      nestedToggle: ".item",
      accordion: !0,
      relativeTarget: { target: o, event: this.options.triggerEvent, dropdown: this },
      dropdown: this,
      popup: !0,
      ref: this._menuRef,
      ...s
    };
  }
  _getRenderOptions() {
    const t = super._getRenderOptions();
    return this._dynamic ? {
      ...t,
      contentClass: "",
      popup: !1,
      content: Dt(wi, this._getMenuOptions())
    } : t;
  }
}
Lt.NAME = "Dropdown";
Lt.DEFAULT = {
  ...Gt.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade",
  limitSize: !0,
  notHideOnClick: ".not-hide-menu,.form-control,input,label,.nested-toggle-icon"
};
Lt.toggle = {
  ...Gt.toggle,
  getOptions(n, t, e) {
    var s, i;
    return t = ((i = (s = Gt.toggle) == null ? void 0 : s.getOptions) == null ? void 0 : i.call(this, n, t, e)) || {}, !t.target && !t.items && !t.menu && (t.target = p(n).next(".dropdown-menu")), t;
  }
};
Lt.register();
class ks extends et {
  constructor() {
    super(...arguments), this._ref = U();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, menu: e, items: s, onClickItem: i, relativeTarget: r = this.triggerElement } = this.props, o = Lt.get(this.triggerElement), a = {
      items: s,
      onClickItem: i,
      menu: e,
      relativeTarget: r,
      ...p(this.triggerElement).dataset(),
      ...t
    };
    o ? o.setOptions(a) : new Lt(this.triggerElement, a);
  }
  componentDidMount() {
    this._updateData();
  }
  componentDidUpdate() {
    this._updateData();
  }
  componentWillUnmount() {
    var t;
    (t = Lt.get(this.triggerElement)) == null || t.destroy();
  }
  _getProps(t) {
    const { trigger: e, placement: s } = t;
    return {
      ...super._getProps(t),
      "data-toggle": "dropdown",
      "data-trigger": e,
      "data-placement": s,
      ref: this._ref
    };
  }
}
ks.defaultProps = {
  caret: !0
};
Object.assign(jt.ItemComponents, { dropdown: ks });
Object.assign(ht.ItemComponents, { dropdown: ks });
class wi extends Pt {
  constructor() {
    super(...arguments), this._handleSearchFocus = () => {
      this._searchFocused = !0;
    }, this._handleSearchBlur = () => {
      this._searchFocused = !1;
    };
  }
  get isHoverTrigger() {
    const { nestedTrigger: t, tree: e } = this.props;
    return t ? t === "hover" : !e;
  }
  get dropdown() {
    return this.props.dropdown;
  }
  layout() {
    var h;
    if (this.props.tree || this.isRoot)
      return;
    const t = (h = this.element) == null ? void 0 : h.parentElement, e = p(t);
    t && this._searchFocused && this._position && e.css(this._position);
    const r = e.parent().children(".dropdown-menu").children(`[z-key-path="${this.props.parentKey}"]`)[0];
    if (!t || !r)
      return;
    let { maxHeight: o } = this.props;
    const { flip: a, shift: l, offset: c } = this.props;
    zo(r, t, {
      placement: this.props.placement,
      middleware: [
        a ? Ro() : null,
        l ? Po(typeof l == "object" ? l : void 0) : null,
        Lo(c),
        xh({
          apply({ availableWidth: d, availableHeight: u }) {
            if (o) {
              const [f, g] = me(o);
              o = Math.min(g === "%" ? f * window.innerHeight : f, u - 2);
            } else
              o = u;
            e.css({ maxHeight: o, maxWidth: d - 2 });
          }
        })
      ]
    }).then(({ x: d, y: u }) => {
      e.css({
        left: d,
        top: u
      }), this._position = { left: d, top: u, width: t.offsetWidth, height: t.offsetHeight };
    });
  }
  _getClassName(t) {
    return ["dropdown-menu scrollbar-hover scrollbar-thin", super._getClassName(t)];
  }
  _afterRender(t) {
    super._afterRender(t), this.layout();
  }
  _getNestedProps(t, e, s, i) {
    return H(this.isHoverTrigger ? {
      "z-key": s.key,
      "z-hover": this.props.parentKey ?? "root",
      onMouseEnter: this._handleHover,
      onMouseLeave: this._handleHover
    } : {}, super._getNestedProps(t, e, s, i));
  }
  _getItemFromEvent(t) {
    const e = super._getItemFromEvent(t);
    if (e)
      return e;
    const s = p(t.target).closest(".dropdown-menu[z-key]");
    if (s.length) {
      const i = s.attr("z-key"), r = s.parent().parent().children(".dropdown-menu").children(`[z-key="${i}"]`);
      if (r.length)
        return super._getItemFromEvent(t, r[0]);
    }
  }
  _renderNestedList(t, e, s, i) {
    const r = super._renderNestedList(t, e, s, i);
    if (this.props.tree)
      return r;
    this._nestedContextMenu.push(r);
  }
  _getWrapClass(t) {
    return [super._getWrapClass(t), t.tree ? "is-tree" : this.isRoot ? "is-contextmenu" : "is-contextmenu popup"];
  }
  _renderWrapperFooter(t) {
    const e = super._renderWrapperFooter(t), s = this._nestedContextMenu;
    return this.props.tree || !s.length ? e : [e, ...s];
  }
  _renderNestedToggle(t, e) {
    if (this.props.tree)
      return super._renderNestedToggle(t, e);
    if (typeof e == "boolean")
      return /* @__PURE__ */ m("span", { className: `${this.name}-toggle nested-toggle-icon`, children: /* @__PURE__ */ m("span", { className: "caret-right" }) });
  }
  _getSearchBoxProps(t) {
    return {
      ...super._getSearchBoxProps(t),
      onFocus: this._handleSearchFocus,
      onBlur: this._handleSearchBlur
    };
  }
  _beforeRender(t) {
    return this._nestedContextMenu = [], super._beforeRender(t);
  }
}
wi.defaultProps = {
  ...Pt.defaultProps,
  searchBox: !1,
  placement: "right-start",
  defaultNestedShow: !1,
  expandOnSearch: !1,
  nestedSearch: !1,
  flip: !0,
  shift: !0,
  offset: 1
};
wi.inheritNestedProps = [...Pt.inheritNestedProps, "container", "tree"];
const Um = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DropdownButton: ks,
  DropdownMenu: wi
}, Symbol.toStringTag, { value: "Module" })), Ci = class Hh extends yt {
  _getClassName(t) {
    const { type: e, stacked: s, justified: i } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", s ? "nav-stacked" : "", i ? "nav-justified" : ""];
  }
  static render(t, e, s, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), s && (r = H(s, r)), /* @__PURE__ */ m(Hh, { ...r });
  }
};
Ci.NAME = "nav";
Ci.ItemComponents = {
  ...yt.ItemComponents,
  dropdown: [yt.ItemComponents.default, (n) => {
    const { text: t, items: e, menu: s, props: i, className: r, innerClass: o } = n;
    return {
      className: r,
      children: /* @__PURE__ */ m(ks, { className: o, type: "ghost", text: t, items: e, menu: s, ...i })
    };
  }]
};
Ci.defaultItemProps = {
  component: "li",
  innerComponent: "a"
};
let Wh = Ci;
const Vm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Nav: Wh
}, Symbol.toStringTag, { value: "Module" }));
class Bh extends W {
}
Bh.NAME = "Nav";
Bh.Component = Wh;
ot(Vm);
function Vs(n, t) {
  const e = n.pageTotal || Math.ceil(n.recTotal / n.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = n.page - 1 : t === "next" ? t = n.page + 1 : t === "current" ? t = n.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : n.page, {
    ...n,
    pageTotal: e,
    page: t
  };
}
function jh({
  key: n,
  type: t,
  btnType: e,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = Vs(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : tt(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : tt(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ m(et, { type: e, "z-go-to-page": l.page, ...a });
}
function Uh({
  key: n,
  type: t,
  page: e,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = Vs(i, e);
  return s = typeof s == "function" ? s(a) : tt(s, a), /* @__PURE__ */ m(Y, { ...o, children: [
    r,
    s
  ] });
}
function Km({
  type: n,
  btnType: t,
  count: e = 12,
  pagerInfo: s,
  linkCreator: i,
  ...r
}) {
  if (!s.pageTotal)
    return;
  const o = { ...r, square: !0 }, a = () => (o.text = "", o.icon = "icon-ellipsis-h", o.disabled = !0, /* @__PURE__ */ m(et, { type: t, ...o })), l = (h, d) => {
    const u = [];
    for (let f = h; f <= d; f++) {
      o.text = f, delete o.icon, o.disabled = !1;
      const g = Vs(s, f);
      i && (o.url = typeof i == "function" ? i(g) : tt(i, g)), u.push(/* @__PURE__ */ m(et, { type: t, ...o }));
    }
    return u;
  };
  let c = [];
  return c = [...l(1, 1)], s.pageTotal <= 1 || (s.pageTotal <= e ? c = [...c, ...l(2, s.pageTotal)] : s.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(s.pageTotal, s.pageTotal)] : s.page > s.pageTotal - e + 3 ? c = [...c, a(), ...l(s.pageTotal - e + 3, s.pageTotal)] : c = [...c, a(), ...l(s.page - Math.ceil((e - 4) / 2), s.page + Math.floor((e - 4) / 2)), a(), ...l(s.pageTotal, s.pageTotal)]), c;
}
function Gm({
  type: n,
  pagerInfo: t,
  linkCreator: e,
  items: s = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  menu: r,
  itemProps: o,
  ...a
}) {
  var c;
  i.items = s.map((h) => {
    const d = { ...t, recPerPage: h };
    return {
      ...o,
      key: h,
      text: `${h}`,
      active: h === t.recPerPage,
      url: e ? typeof e == "function" ? e(d) : tt(e, d) : void 0,
      "z-change-page-size": h
    };
  });
  const { text: l = "" } = a;
  return a.text = typeof l == "function" ? l(t) : tt(l, t), i.menu = { ...r, ...i.menu, className: S((c = i.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ m(ks, { dropdown: i, ...a });
}
function Vh({
  key: n,
  page: t,
  type: e,
  btnType: s,
  pagerInfo: i,
  size: r,
  onClick: o,
  onChange: a,
  linkCreator: l,
  ...c
}) {
  const h = { ...c };
  let d;
  const u = (_) => {
    var y;
    d = Number((y = _.target) == null ? void 0 : y.value) || 1, d = d > i.pageTotal ? i.pageTotal : d;
  }, f = (_) => {
    if (!(_ != null && _.target))
      return;
    d = d <= i.pageTotal ? d : i.pageTotal;
    const y = Vs(i, d);
    a && !a({ info: y, event: _ }) || (_.target.href = h.url = typeof l == "function" ? l(y) : tt(l, y));
  }, g = Vs(i, t || 0);
  return h.url = typeof l == "function" ? l(g) : tt(l, g), /* @__PURE__ */ m("div", { className: S("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ m("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: u }),
    /* @__PURE__ */ m(et, { type: s, ...h, onClick: f })
  ] });
}
const Si = class Sr extends ht {
  constructor() {
    super(...arguments), this._pagerChanges = Tt({}), this._changedPager = us(() => Sr.format({
      ...this.props,
      ...this._pagerChanges.value
    })), this._changeEffect = ze(() => {
      const { onChangePageInfo: t } = this.props, e = this._changedPager.value;
      t && this._changeEvent && (t(e, this._changeEvent), this._changeEvent = void 0);
    }), this._handleClickLink = (t) => {
      const e = p(t.currentTarget);
      if (e.is(".disabled"))
        return;
      const s = e.z("goToPage");
      typeof s == "number" && (this._changeEvent = t, this._pagerChanges.value = {
        ...this._pagerChanges.value,
        page: s
      });
    }, this._handleClickSizeMenu = (t) => {
      const { item: e } = t, s = e["z-change-page-size"];
      typeof s == "number" && !e.disabled && (this._changeEvent = t.event, this._pagerChanges.value = {
        ...this._pagerChanges.value,
        recPerPage: s
      });
    };
  }
  _isBtnType(t) {
    const { type: e } = t;
    return super._isBtnType(t) || ["link", "nav", "size-menu", "goto"].includes(e);
  }
  componentDidUpdate(t) {
    if (this.props.useState)
      this.props.recTotal !== t.recTotal && (this._pagerChanges.value = {
        ...this._pagerChanges.value,
        recTotal: this.props.recTotal
      });
    else {
      const { page: e, recTotal: s, recPerPage: i } = this.props;
      (e !== t.page || s !== t.recTotal || i !== t.recPerPage) && (this._pagerChanges.value = {});
    }
  }
  componentWillUnmount() {
    this._changeEffect();
  }
  _beforeRender(t) {
    return this._pagerInfo = t.useState ? this._changedPager.value : Sr.format(t), super._beforeRender(t);
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s);
    if (!i)
      return !1;
    const { type: r = "item" } = e, o = this._pagerInfo;
    return r === "info" ? p.extend(i, { pagerInfo: o }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && p.extend(i, { pagerInfo: o, linkCreator: t.linkCreator }), r === "size-menu" && (i.menu = {
      onClickItem: this._handleClickSizeMenu,
      ...i.menu
    }), r === "link" && (i.onClick = this._handleClickLink), i;
  }
  static format(t) {
    const { page: e = 1, recTotal: s = 0, recPerPage: i = 10 } = t, r = Math.max(0, +s), o = Math.max(1, +i), a = o ? Math.ceil(r / o) : 0;
    return {
      page: Math.min(Math.max(1, +e), a),
      recTotal: r,
      recPerPage: o,
      pageTotal: a
    };
  }
};
Si.NAME = "pager";
Si.ItemComponents = {
  ...ht.ItemComponents,
  info: Uh,
  link: jh,
  nav: Km,
  "size-menu": Gm,
  goto: Vh
};
Si.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
let Xo = Si;
class Kh extends W {
}
Kh.NAME = "Pager";
Kh.Component = Xo;
const qm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Pager: Xo,
  PagerGoto: Vh,
  PagerInfoItem: Uh,
  PagerLink: jh
}, Symbol.toStringTag, { value: "Module" }));
ot(qm);
class Qo extends W {
}
Qo.NAME = "Pick";
Qo.Component = Rt;
Qo.replace = !0;
class ta extends W {
}
ta.NAME = "Picker";
ta.Component = Yo;
ta.register();
j.addLang({
  zh_cn: {
    selectAll: "全选",
    cancelSelect: "取消选择",
    searchEmptyHint: "无匹配选项",
    loadingHint: "正在加载...",
    exceedLimitHint: "还有 {0} 个选项没有显示，可尝试搜索来查找"
  },
  zh_tw: {
    selectAll: "全選",
    cancelSelect: "取消選擇",
    searchEmptyHint: "無匹配選項",
    loadingHint: "正在載入...",
    exceedLimitHint: "還有 {0} 個選項沒有顯示，可嘗試搜索來查找"
  },
  en: {
    selectAll: "Select All",
    cancelSelect: "Cancel Select",
    searchEmptyHint: "No matching options",
    loadingHint: "Loading...",
    exceedLimitHint: "There are {0} items not displayed, try searching to find"
  }
});
ot(Am);
ot(Um);
class ea extends it {
  init() {
    this.$element.addClass("fade"), this._tryRender = hf(() => this.render(), this.options.debounce || 20);
  }
  afterInit() {
    this.render(), this.$element.addClass("in");
    const { watch: t = ["container"] } = this.options;
    let e = !1;
    const s = t.reduce((i, r) => {
      if (r === "window")
        e = !0;
      else if (r === "container")
        i.add(this.getContainer()[0]);
      else if (r === "self")
        i.add(this.element);
      else if (r === "parent") {
        const o = this.element.parentElement;
        o && i.add(o);
      } else
        p(r).each((o, a) => {
          i.add(a);
        });
      return i;
    }, /* @__PURE__ */ new Set());
    s.size && (this._observer = io([...s], () => {
      this._tryRender();
    })), e && (this._windowResizeHandler = this._tryRender, window.addEventListener("resize", this._windowResizeHandler));
  }
  destroy() {
    var t, e;
    super.destroy(), (t = this._dropdown) == null || t.destroy(), this.$element.removeClass("rsh-overflowed").find(".rsh-more").remove(), (e = this._observer) == null || e.disconnect(), this._windowResizeHandler && (window.removeEventListener("resize", this._windowResizeHandler), this._windowResizeHandler = void 0);
  }
  render(t, e) {
    super.render(t, e);
    const s = this.getContainer();
    if (!s.length)
      return;
    const i = this.getContainerSize(s[0]);
    if (!i)
      return;
    const r = this.getItems();
    if (!r.length)
      return;
    const o = this.getMore();
    o.css({ display: "flex", opacity: 0 });
    const a = this.getItemSize(o[0]);
    o.css({ display: "none", opacity: 0 });
    let l = a, c = !1;
    this._moreItems = void 0, this._moreElements = [];
    const h = /* @__PURE__ */ new Map(), { fixedItems: d = ".is-rsh-fixed", moreItems: u = ".is-rsh-more", showSelected: f } = this.options, g = d ? r.filter(d) : null, _ = g != null && g.length ? new Set(g) : null, y = u ? r.filter(u) : null, v = y != null && y.length ? new Set(y) : null;
    if (g != null && g.length)
      for (const w of g)
        l += this.getItemSize(w);
    for (const w of r) {
      const C = p(w), k = _ == null ? void 0 : _.has(w);
      if (C.toggleClass("rsh-fixed-item", !!k), k || C.hasClass("rsh-more"))
        continue;
      const $ = C.data("rsh-display") || C.css("display");
      if (v != null && v.has(w)) {
        this._moreElements.push(w), C.css({ display: "none" }).addClass("rsh-overflow-item");
        continue;
      }
      const N = C.css("opacity");
      C.data({ "rsh-opacity": N, "rsh-display": $ }).css({ display: $, opacity: 0 });
      const A = this.getItemSize(w);
      h.set(w, A), c || (l += A), l > i && (c = !0), c && this._moreElements.push(w), C.css({ opacity: N, display: c ? "none" : $ }).toggleClass("rsh-overflow-item", c);
    }
    let b = !!this._moreElements.length;
    if (c && !(v != null && v.size)) {
      const w = this._moreElements.reduce((C, k) => {
        const $ = p(k);
        if (!C && $.hasClass("divider"))
          return 0;
        const N = h.get(k) || 0;
        return C + N;
      }, 0);
      if (a >= w) {
        c = !1;
        for (const C of this._moreElements) {
          const k = p(C);
          k.css({ display: k.data("rsh-display") || "flex", opacity: k.data("rsh-opacity") || 1 });
        }
        this._moreElements = [], b = !1;
      }
    }
    this.$element.toggleClass("rsh-has-more-items", b).toggleClass("rsh-overflowed", c), o.css({ display: b ? "flex" : "none", opacity: 1 }).appendTo(this.$element), b && f && this._renderMoreBtn();
  }
  getContainer() {
    const { container: t } = this.options;
    return t === "parent" ? this.$element.parent() : t ? p(t) : this.$element;
  }
  getContainerSize(t) {
    if (t = t || this.getContainer()[0], !t)
      return 0;
    const { getContainerSize: e, scrollbarDetect: s, scrollbarSize: i = 10 } = this.options;
    let r = e ? e.call(this, t) : t.offsetWidth;
    return s !== !1 && ((typeof s == "function" ? s : () => window.innerWidth - document.body.clientWidth)() || (r -= i)), r;
  }
  getItems() {
    const { items: t = "li", ignoreItems: e } = this.options;
    let s = this.$element.children(t);
    return e && (s = s.not(e)), s;
  }
  getItemSize(t) {
    const { getItemSize: e } = this.options;
    if (e)
      return e.call(this, t);
    const s = getComputedStyle(t);
    return t.offsetWidth + parseInt(s.marginLeft) + parseInt(s.marginRight);
  }
  getMoreItems() {
    var o;
    const { _moreElements: t } = this;
    if (!(t != null && t.length))
      return [];
    const { getMoreItem: e = this.getMoreItem.bind(this), getMoreItems: s, mergeDropdown: i } = this.options;
    if (s)
      return s.call(this, t);
    const r = t.reduce((a, l) => {
      var h;
      const c = e.call(this, l);
      if (c) {
        if (c.type === "divider" && (!a.length || ((h = a[a.length - 1]) == null ? void 0 : h.type) === "divider"))
          return a;
        if (Array.isArray(c.items)) {
          if (!c.items.length)
            return a;
          if (i && (i === !0 || p(l).closest(i).length))
            return a.length && a.push({ type: "divider" }), a.push(...c.items, { type: "divider" }), a;
        }
        a.push(c);
      }
      return a;
    }, []);
    return r.length && ((o = r[r.length - 1]) == null ? void 0 : o.type) === "divider" && r.pop(), r;
  }
  getMoreItem(t) {
    var o, a, l;
    const e = p(t);
    if (e.hasClass("divider"))
      return { type: "divider" };
    const s = e.children('[data-toggle="dropdown"],[z-use-dropdown],[zui-toggle-dropdown]');
    if (s.length) {
      let c = Lt.query(s);
      c || (c = new Lt(s));
      let h = c.options.items || ((o = c.options.menu) == null ? void 0 : o.items);
      if (!h && s.attr("zui-toggle-dropdown")) {
        const u = s.attr("zui-toggle-dropdown"), f = u ? Te(u, ["_element", s[0]], ["_$element", s]) : null;
        f && (h = f.items || ((a = f.menu) == null ? void 0 : a.items));
      }
      const d = s.find(".text").text();
      return { items: h, text: d, icon: (l = s.find(".icon").attr("class")) == null ? void 0 : l.replace("icon ", ""), attrs: { title: d } };
    }
    const i = Object.fromEntries(Array.from(t.attributes).map((c) => [c.name, c.value]));
    i.style && (i.style = i.style.replace("display: none;", "")), i.class && (i.class = i.class.replace("nav-item", "menu-item"));
    const r = e.find(".text");
    return r.length && (i.title = r.text()), { type: "node", html: e.html(), attrs: i };
  }
  getMore() {
    var i;
    let t = this.$element.find(".rsh-more");
    if (t.length)
      return t;
    t = p('<li class="rsh-more item nav-item" style="order:9999"></li>');
    let e = this.options.more || { html: '<a><span class="more-vert"></span></a>', attrs: { title: j.getLang("more") } };
    typeof e == "string" && (e = { text: e });
    const s = p(e.html || "<a></a>").attr({
      ...e.attrs
    }).addClass("rsh-more-btn");
    return e.icon && s.prepend(`<i class="icon ${e.icon}"></i>`), e.text && s.append(zf`<span class="text">${e.text}</span>`), e.caret && s.append('<span class="caret"></span>'), t.append(s), this._dropdown = new Lt(s[0], {
      placement: "bottom-start",
      items: this.getMoreItems.bind(this),
      ...this.options.moreDropdown
    }), this.$element.append(t), (i = this.options.onCreateMore) == null || i.call(this, t, this._dropdown), t;
  }
  _renderMoreBtn() {
    const t = this.$element.find(".rsh-more-btn"), { showSelected: e } = this.options;
    if (!t.length || !e)
      return;
    t.data("originHTML") || t.data("originHTML", t.html());
    const s = p(this._moreElements).filter(e === !0 ? (r, o) => {
      const a = p(o);
      return a.is(".active,.selected") || !!a.children(".active,.selected").length;
    } : e), i = !!s.length;
    t.toggleClass("active", i), i ? (t.empty().append(s.children().html()), t.find('.caret,[class*="caret"]').length || t.append('<span class="caret"></span>')) : t.html(t.data("originHTML"));
  }
}
ea.DEFAULT = {
  showSelected: !0
};
ea.NAME = "ResponsiveNavHelper";
ea.register();
class sa extends W {
}
sa.NAME = "SearchBox";
sa.Component = ci;
sa.register();
ot(Xf);
function Vi(n, t) {
  const [e, s] = me(n);
  return s === "%" ? t * e / 100 : e;
}
const gl = "is-sidebar-resizing", _l = "has-sidebar-animation", Ki = "is-animating", un = ".sidebar-gutter";
class Gh extends it {
  get side() {
    return this._side;
  }
  get width() {
    return this._width;
  }
  get $parent() {
    const { parent: t } = this.options;
    return t ? p(t) : this.$element.parent();
  }
  afterInit() {
    const { $element: t } = this, e = t.parent(), s = e[0], i = e.width();
    this._container = s;
    const {
      preserve: r,
      side: o = t.hasClass("sidebar-right") ? "right" : "left",
      animation: a,
      dragToResize: l,
      width: c,
      minWidth: h = 0,
      maxWidth: d = Number.MAX_SAFE_INTEGER,
      toggleBtn: u,
      dbclick: f
    } = this.options;
    this._storeID = r ? `SIDEBAR:${r}:width` : "", this._side = o, this._minWidth = Vi(h, i), this._maxWidth = Vi(d, i), this._defaultWidth = Math.max(this._minWidth, Math.min(this._maxWidth, Vi(c || t.width(), i))), this._width = (r ? ce.get(this._storeID) : null) ?? this._defaultWidth, this.render(), u && t.on(`click${this.namespace}`, ".gutter-toggle", () => this.toggle()), f && t.on(`dblclick${this.namespace}`, un, () => {
      f === "reset" ? this.update(this._defaultWidth) : this.toggle();
    }).on("mousedown", un, (g) => {
      g.preventDefault();
    }), l && (this._moveable = new Xs(t, {
      selector: un,
      move: !1,
      onMoveStart: () => {
        this._startWidth = this._width, this.$parent.addClass(gl).removeClass(_l);
      },
      onMove: (g, _) => {
        const { deltaX: y } = _;
        Math.abs(y) < 10 || this.update(this._startWidth + y * (o === "left" ? 1 : -1));
      },
      onMoveEnd: () => {
        a && this.$parent.addClass(_l), this.$parent.removeClass(gl);
      }
    })), a && this.on("transitionend", (g) => {
      g.target === t[0] && g.propertyName === "width" && t.removeClass(Ki);
    });
  }
  destroy() {
    var t;
    super.destroy(), this._raf && cancelAnimationFrame(this._raf), (t = this._moveable) == null || t.destroy();
  }
  toggle(t) {
    t = t ?? !!this._width, t && (this._widthBack = this._width), this.update(t ? 0 : this._widthBack || this._defaultWidth);
  }
  update(t, e) {
    if (!e) {
      this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
        this._raf = 0, this.update(t, !0);
      });
      return;
    }
    const { preserve: s, toggleBtn: i, onResize: r, onToggle: o, animation: a } = this.options;
    if (t = t < this._minWidth ? i ? 0 : this._minWidth : Math.min(this._maxWidth, t, this._container.clientWidth), t === this._width)
      return;
    const l = !this._width, c = !t;
    this._width = t, s && ce.set(this._storeID, t), this.render(), r == null || r(t), l !== c && (l && a && this.$element.addClass(Ki), o == null || o(c)), this.emit("sidebarResize", t);
  }
  render() {
    var h;
    const { side: t, width: e, $element: s, $parent: i } = this, r = !e, { toggleBtn: o, gutterWidth: a = me(s.parent().css("gap"))[0] || 1, animation: l } = this.options;
    s.addClass(`sidebar-${t}`).toggleClass("is-collapsed", r).toggleClass("is-expanded", !r).css({ "--gutter-width": `${a}px`, width: `var(--sidebar-${t}-width)`, "--sidebar-duration": typeof l == "number" ? `${l}ms` : null });
    let c = s.find(un);
    c.length || (c = p('<div class="sidebar-gutter gutter gutter-horz"></div>').appendTo(s)), o ? c.children(".gutter-toggle").length || c.append(`<button class="gutter-toggle" type="button"><span class="chevron-${t}"></span></button>`) : c.children(".gutter-resize-handler").length || c.append('<div class="gutter-resize-handler"></div>'), i.addClass(`has-sidebar-${t}`).css(`--sidebar-${t}-width`, `${e}px`).toggleClass(`is-sidebar-${t}-collapsed`, r), (h = this._moveable) != null && h.state && s.removeClass(Ki);
  }
}
Gh.NAME = "Sidebar";
Gh.DEFAULT = {
  minWidth: 40,
  toggleBtn: !0,
  animation: !0,
  dragToResize: !0,
  dbclick: "reset"
};
class qh extends W {
}
qh.NAME = "Toolbar";
qh.Component = ht;
ot(jf);
class na extends W {
}
na.NAME = "Tree";
na.Component = qt;
na.replace = qt.TAG;
class Yh extends W {
}
Yh.NAME = "SearchTree";
Yh.Component = vs;
ot(fp);
class ia extends it {
  init() {
    const { multiple: t, defaultFileList: e, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? He(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), e && this.addFileItem(e);
  }
  initUploadCash() {
    const { name: t, uploadText: e, uploadIcon: s, listPosition: i, btnClass: r, tip: o, draggable: a } = this.options;
    this.$list = p('<ul class="file-list py-1"></ul>');
    const l = p(`<span class="upload-tip">${o}</span>`);
    if (!a) {
      if (this.$label = p(`<label class="btn ${r}" for="${t}">${e}</label>`), s) {
        const u = p(`<i class="icon icon-${s}"></i>`);
        this.$label.prepend(u);
      }
      const d = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...d);
      return;
    }
    const c = p(`<span class="text-primary">${e}</span>`);
    if (s) {
      const d = p(`<i class="icon icon-${s} mr-1"></i>`);
      c.prepend(d);
    }
    this.$label = p(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16" for="${t}"></label>`).append(c).append(l), this.bindDragEvent();
    const h = i === "bottom" ? [this.$label, this.$list] : [this.$list, this.$label];
    this.$element.append(this.$input, ...h);
  }
  bindDragEvent() {
    this.$label.on("dragover", (t) => {
      t.preventDefault(), this.$label.hasClass("border-primary") || (this.$label.removeClass("border-gray"), this.$label.addClass("border-primary")), this.$label.hasClass("dragover") || this.$label.addClass("dragover");
    }).on("dragleave", (t) => {
      t.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray"), this.$label.removeClass("dragover");
    }).on("drop", (t) => {
      var s;
      t.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray"), this.$label.removeClass("dragover");
      const e = Array.from(((s = t.dataTransfer) == null ? void 0 : s.files) ?? []);
      console.log(t.dataTransfer.files), this.addFileItem(e);
    });
  }
  initFileInputCash() {
    const { name: t, multiple: e, accept: s } = this.options;
    this.$input = p("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", e).on("change", (i) => {
      const r = i.target.files;
      if (!r)
        return;
      const o = [...r];
      this.addFileItem(o);
    }), s && this.$input.prop("accept", s);
  }
  addFile(t) {
    const { multiple: e, onSizeChange: s } = this.options;
    e || (this.renameMap.clear(), this.fileMap.clear(), this.dataTransfer.items.clear(), this.currentBytes = t.size), this.renameMap.set(t.name, t.name), this.fileMap.set(t.name, t), this.dataTransfer.items.add(t), this.$input.prop("files", this.dataTransfer.files), this.currentBytes += t.size, s == null || s(this.currentBytes);
  }
  renameDuplicatedFile(t) {
    if (!this.fileMap.has(t.name))
      return t;
    const e = t.name.lastIndexOf(".");
    if (e === -1)
      return this.renameDuplicatedFile(new File([t], `${t.name}(1)`));
    const s = t.name.substring(0, e), i = t.name.substring(e);
    return this.renameDuplicatedFile(new File([t], `${s}(1)${i}`));
  }
  filterFiles(t) {
    const { accept: e } = this.options;
    if (!e)
      return t;
    const s = e.replace(/\s/g, "").split(","), i = [], r = [], o = [];
    return s.forEach((a) => {
      a.endsWith("/*") ? r.push(a.substring(0, a.length - 1)) : a.includes("/") ? i.push(a) : a.startsWith(".") && o.push(a);
    }), t.filter((a) => i.includes(a.type) || r.some((l) => a.type.startsWith(l)) || o.some((l) => a.name.endsWith(l)));
  }
  addFileItem(t) {
    t = this.filterFiles(t);
    const { multiple: e, limitCount: s, exceededSizeHint: i, onExceededSize: r, exceededCountHint: o, onExceededCount: a, onAdd: l } = this.options;
    if (e) {
      for (let u of t) {
        if (s && this.fileMap.size >= s) {
          a == null || a(s), o && alert(o);
          return;
        }
        if (this.currentBytes + u.size > this.limitBytes) {
          r == null || r(this.limitBytes), i && alert(i);
          return;
        }
        u = this.renameDuplicatedFile(u);
        const f = l == null ? void 0 : l(u);
        if (!f)
          continue;
        u = f;
        const g = this.createFileItem(u);
        this.itemMap.set(u.name, g), this.$list.append(g);
      }
      return;
    }
    if (t.length === 0 || t[0].size > this.limitBytes)
      return;
    let c = this.renameDuplicatedFile(t[0]);
    const h = l == null ? void 0 : l(c);
    if (!h)
      return;
    c = h;
    const d = this.createFileItem(c);
    this.itemMap.clear(), this.itemMap.set(c.name, d), this.$list.empty().append(d);
  }
  deleteFileItem(t) {
    var l, c;
    const e = this.renameMap.get(t) ?? t;
    this.renameMap.delete(t);
    const s = this.fileMap.get(e);
    if (!s)
      return;
    const { onDelete: i, onSizeChange: r } = this.options, o = this.itemMap.get(s.name);
    this.itemMap.delete(s.name), o == null || o.addClass("hidden");
    const a = (l = o == null ? void 0 : o.find(".file-delete")) == null ? void 0 : l.data("tooltip");
    a && (a.destroy(), (c = a.tooltip) == null || c.remove()), setTimeout(() => o == null ? void 0 : o.remove(), 3e3), i == null || i(s), this.fileMap.delete(s.name), this.currentBytes -= s.size, r == null || r(this.currentBytes), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((h) => this.dataTransfer.items.add(h)), this.$input.prop("files", this.dataTransfer.files);
  }
  renameFileItem(t, e) {
    var r, o;
    const s = this.renameMap.get(t.name);
    this.renameMap.set(t.name, e), s && (t = this.fileMap.get(s) ?? t);
    const i = this.itemMap.get(t.name);
    i && (this.itemMap.set(e, i).delete(t.name), (o = (r = this.options).onRename) == null || o.call(r, e, t.name), this.fileMap.delete(t.name), this.dataTransfer = new DataTransfer(), t = new File([t], e), this.fileMap.set(e, t).forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files));
  }
  createFileItem(t) {
    const { showIcon: e } = this.options;
    return this.addFile(t), p('<li class="file-item my-1 flex items-center gap-2"></li>').append(e ? this.fileIcon() : null).append(this.createFileInfo(t)).append(this.createRenameContainer(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return p(`<i class="icon icon-${t}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: t, renameText: e, renameIcon: s, renameClass: i } = this.options;
    if (t) {
      const r = p(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new ps(r, { title: e }), r;
    }
    return p("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(e);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: e, deleteIcon: s, deleteClass: i } = this.options;
    if (t) {
      const r = p(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return r.data("tooltip", new ps(r, { title: e })), r;
    }
    return p("<button />").html(e).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return p(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return p(`<span class="file-size text-gray">${Bt(t)}</span>`);
  }
  createFileInfo(t) {
    const { renameBtn: e, deleteBtn: s, showSize: i } = this.options, r = p('<div class="file-info flex items-center gap-2"></div>');
    return r.append(this.fileName(t.name)), i && r.append(this.fileSize(t.size)), e && r.append(
      this.fileRenameBtn().on("click", (o) => {
        r.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = p(o.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), s && r.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(t.name))
    ), r;
  }
  createRenameContainer(t) {
    const { confirmText: e, cancelText: s, duplicatedHint: i, onDuplicated: r } = this.options, o = p('<div class="input-group input-rename-container hidden"></div>'), a = p("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (d) => {
      if (d.key === "Enter") {
        const u = o.closest(".file-item"), f = u.find(".file-name");
        if (f.html() === a.val()) {
          o.addClass("hidden"), u.find(".file-info.hidden").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(a.val())) {
          r == null || r(a.val()), i && alert(i);
          return;
        }
        this.renameFileItem(t, a.val()), o.addClass("hidden"), u.find(".file-info.hidden").removeClass("hidden"), f.html(a.val());
      } else
        d.key === "Escape" && (a.val(t.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), l = p("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(e).on("click", () => {
      const d = o.closest(".file-item"), u = d.find(".file-name");
      if (u.html() === a.val()) {
        o.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(a.val())) {
        r == null || r(a.val()), i && alert(i);
        return;
      }
      this.renameFileItem(t, a.val()), o.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden"), u.html(a.val());
    }), c = p("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(s).on("click", () => {
      a.val(t.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), h = p('<div class="btn-group"></div').append(l).append(c);
    return o.append(a).append(h);
  }
}
ia.NAME = "Upload";
ia.DEFAULT = {
  uploadText: "上传文件",
  confirmText: "确定",
  cancelText: "取消",
  useIconBtn: !0,
  renameBtn: !0,
  renameText: "重命名",
  renameIcon: "edit",
  renameClass: "",
  deleteBtn: !0,
  deleteText: "删除",
  deleteIcon: "trash",
  deleteClass: "",
  showIcon: !0,
  multiple: !0,
  listPosition: "bottom",
  limitSize: !1,
  icon: "file-o",
  btnClass: "",
  tip: "",
  draggable: !1,
  showSize: !0,
  onAdd: (n) => n
};
class Zh extends ia {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = p(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(p('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: t, tip: e, uploadText: s, uploadIcon: i, totalCountText: r } = this.options;
    this.$list = p('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = p('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const o = p(`<label for="${t}" class="text-primary cursor-pointer">${s}</label>`);
    if (i) {
      const a = p(`<i class="icon icon-${i} mr-1"></i>`);
      o.prepend(a);
    }
    this.$tip = p('<div class="absolute inset-0 col justify-center items-center"></div>').append(o), e && this.$tip.append(p(`<span class="upload-tip">${e}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = p('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(r.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
  }
  filterFiles(t) {
    const { accept: e } = this.options;
    if (e === "image/*")
      return t.filter((i) => i.type.includes("image"));
    const s = e.replace(/\s/g, "").replace(/\./g, "image/").split(",");
    return t.filter((i) => s.includes(i.type));
  }
  createFileItem(t) {
    const e = super.createFileItem(t).addClass("relative").removeClass("flex items-center gap-2 my-1");
    this.setImageUrl(t, e);
    const { deleteBtn: s, showSize: i } = this.options;
    return s && e.append(
      this.fileDeleteBtn().addClass("absolute right-0 top-0 text-white").css({ background: "var(--color-slate-500)" }).on("click", () => this.deleteFileItem(t.name))
    ), i && e.append(
      this.fileSize(t.size).addClass("file-size label text-white circle darker absolute px-1 hidden").removeClass("text-gray").css({ top: 96, left: 4 })
    ), e;
  }
  setImageUrl(t, e) {
    const s = new FileReader();
    s.onload = () => {
      p('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${s.result})`, backgroundSize: "cover" }).prependTo(e);
    }, s.readAsDataURL(t);
  }
  createFileInfo(t) {
    const e = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const r = p(i.target).closest(".file-item");
      r.find(".file-info").addClass("hidden"), r.find(".input-rename-container").removeClass("hidden");
      const o = r.find("input")[0];
      o.focus(), o.value.lastIndexOf(".") !== -1 && o.setSelectionRange(0, o.value.lastIndexOf("."));
    });
    return p('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(p(`<div class="file-name py-1 ellipsis">${t.name}</div>`)).append(e);
  }
  createRenameContainer(t) {
    const { duplicatedHint: e, onDuplicated: s } = this.options, i = p("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).css({ width: 120 }).on("keydown", (r) => {
      if (r.key === "Enter") {
        const o = i.closest(".file-item").find(".file-name");
        if (o.html() === i.val()) {
          i.addClass("hidden"), o.closest(".file-info").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(i.val())) {
          s == null || s(i.val()), e && alert(e);
          return;
        }
        this.renameFileItem(t, i.val()), i.addClass("hidden"), o.html(i.val()).closest(".file-info").removeClass("hidden");
      } else
        r.key === "Escape" && i.val(t.name).addClass("hidden").closest(".file-item").find(".file-name").removeClass("hidden");
    }).on("blur", () => {
      const r = i.closest(".file-item").find(".file-name");
      if (r.html() === i.val()) {
        i.addClass("hidden"), r.closest(".file-info").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(i.val())) {
        s == null || s(i.val()), e && alert(e);
        return;
      }
      this.renameFileItem(t, i.val()), i.addClass("hidden"), r.html(i.val()).closest(".file-info").removeClass("hidden");
    });
    return i;
  }
}
Zh.NAME = "UploadImgs";
Zh.DEFAULT = {
  uploadText: "添加文件",
  renameBtn: !0,
  renameText: "重命名",
  renameIcon: "edit",
  renameClass: "",
  deleteBtn: !0,
  deleteText: "删除",
  deleteIcon: "trash",
  deleteClass: "",
  showIcon: !1,
  multiple: !0,
  limitSize: !1,
  btnClass: "",
  draggable: !0,
  accept: "image/jpg, image/jpeg, image/gif, image/png",
  showSize: !0,
  useIconBtn: !0,
  totalCountText: '共 <span class="font-bold text-black">%s</span> 个文件 <span class="font-bold text-black">%s</span> 个文件等待上传。'
};
let Jh = class extends Y {
  _renderContent(t) {
    const {
      subtitle: e,
      subtitleClass: s,
      content: i,
      contentClass: r
    } = t;
    if (!(!e && !i))
      return [
        /* @__PURE__ */ m("div", { className: S("card-content", r), children: [
          e ? /* @__PURE__ */ m("div", { className: S("card-subtitle", s), children: /* @__PURE__ */ m(P, { content: e }) }, "subtitle") : null,
          i ? /* @__PURE__ */ m(P, { content: i }, "extraContent") : null
        ] }, "content")
      ];
  }
  _renderHeading(t) {
    const {
      icon: e,
      prefix: s,
      prefixClass: i,
      title: r,
      titleClass: o,
      titleUrl: a,
      titleAttrs: l,
      suffix: c,
      suffixClass: h,
      heading: d,
      headingClass: u
    } = t;
    if (!e && !s && !r && !c && !d)
      return;
    const f = a ? "a" : "span";
    return /* @__PURE__ */ m("div", { className: S("card-heading", u), children: [
      e ? /* @__PURE__ */ m(rt, { className: "card-icon", icon: e }, "icon") : null,
      s ? /* @__PURE__ */ m(P, { className: S("card-prefix", i), content: s }, "prefix") : null,
      r ? /* @__PURE__ */ m(f, { className: S("card-title", o), href: a, ...l, children: /* @__PURE__ */ m(P, { content: r }) }, "title") : null,
      c ? /* @__PURE__ */ m(P, { className: S("card-suffix", h), content: c }, "suffix") : null,
      d ? /* @__PURE__ */ m(P, { content: d }, "extraHeading") : null
    ] });
  }
  _renderHeader(t) {
    const {
      header: e,
      headerClass: s
    } = t;
    if (e)
      return /* @__PURE__ */ m("div", { className: S("card-header", s), children: /* @__PURE__ */ m(P, { content: e }, "header") });
  }
  _renderFooter(t) {
    const {
      footer: e,
      footerClass: s,
      footActions: i
    } = t;
    if (e || i)
      return /* @__PURE__ */ m("div", { className: S("card-footer", s), children: [
        /* @__PURE__ */ m(P, { content: e }, "footer"),
        ht.render(i, [t], { key: "foot-actions", relativeTarget: t, className: "card-foot-actions", size: "sm" }, this)
      ] });
  }
  _renderActions(t) {
    return ht.render(t.actions, [t], { key: "actions", relativeTarget: t, className: "card-actions", size: "sm" }, this);
  }
  _renderList(t) {
    const { items: e } = t;
    if (!e)
      return;
    const s = H({ key: "list", className: "card-list" }, typeof e == "object" ? e : { items: e });
    return /* @__PURE__ */ m(yt, { ...s });
  }
  _renderAvatar(t) {
    const {
      avatar: e
    } = t;
    if (e) {
      const s = typeof e == "function" ? e.call(this, t) : e;
      if (s)
        return s.className = S("item-avatar", s.className), /* @__PURE__ */ m(Ys, { ...s }, "avatar");
    }
  }
  _getClassName(t) {
    return ["card", t.className, t.selected ? "selected" : ""];
  }
  _getChildren(t) {
    return [
      this._renderActions(t),
      this._renderHeader(t),
      this._renderAvatar(t),
      this._renderHeading(t),
      this._renderContent(t),
      this._renderList(t),
      this._renderFooter(t),
      t.children
    ];
  }
};
class yl extends Jh {
  _getClassName(t) {
    return t.className;
  }
  _getChildren(t) {
    const { innerAttrs: e, innerClass: s, selected: i, innerComponent: r = "div" } = t, o = H({ className: S("card", s, i ? "selected" : "") }, e);
    return /* @__PURE__ */ m(r, { ...o, children: super._getChildren(t) });
  }
}
let xs = class extends yt {
  _getClassName(t) {
    return [super._getClassName(t), t.countPerRow ? "card-grid" : ""];
  }
  _getProps(t) {
    const { gap: e, countPerRow: s } = t;
    return H({
      style: {
        "--list-gap": e ? J(e) : void 0,
        "--list-count-per-row": s
      }
    }, super._getProps(t));
  }
  _getRenderedItem(t, e) {
    return e;
  }
};
xs.NAME = "card-list";
xs.TAG = "div";
xs.ItemComponents = {
  ...yt.ItemComponents,
  default: yl,
  item: yl
};
xs.defaultItemProps = {
  component: "div"
};
class ra extends W {
}
ra.NAME = "Card";
ra.Component = Jh;
ra.replace = !0;
class Xh extends W {
}
Xh.NAME = "CardList";
Xh.Component = xs;
class ki extends Lt {
  _getLayoutOptions() {
    const t = super._getLayoutOptions();
    return this.options.element || (t[0] = {
      getBoundingClientRect: this._getClickBounding
    }), t;
  }
}
ki.NAME = "ContextMenu";
ki.DEFAULT = {
  ...Lt.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
ki.register();
function Ym(n) {
  const { left: t, className: e, top: s, id: i, onMenuBtnClick: r, title: o, width: a, height: l, content: c, loading: h, draggable: d = !0 } = n;
  return /* @__PURE__ */ m("div", { class: "dashboard-block-cell", style: { left: t, top: s, width: a, height: l }, children: /* @__PURE__ */ m(
    "div",
    {
      className: S("dashboard-block load-indicator", h && !c ? "loading" : "", r ? "has-more-menu" : "", e),
      draggable: d,
      "data-id": i,
      children: [
        /* @__PURE__ */ m("div", { class: "dashboard-block-header", children: [
          /* @__PURE__ */ m("div", { class: "dashboard-block-title", children: o }),
          r ? /* @__PURE__ */ m("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ m("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: r, children: /* @__PURE__ */ m("div", { class: "more-vert" }) }) }) : null
        ] }),
        p.isPlainObject(c) && c.html ? /* @__PURE__ */ m(Ne, { className: "dashboard-block-body", executeScript: !0, ...c }) : /* @__PURE__ */ m("div", { class: "dashboard-block-body", children: c })
      ]
    }
  ) });
}
const Gi = ([n, t, e, s], [i, r, o, a]) => !(n + e <= i || i + o <= n || t + s <= r || r + a <= t), vl = (n, t) => n[1] === t[1] ? n[0] - t[0] : n[1] - t[1], fn = "Dashboard:Block.cache:";
let Qh = class extends O {
  constructor(t) {
    super(t), this._ref = U(), this._loadTimer = 0, this._map = /* @__PURE__ */ new Map(), this._oldMap = /* @__PURE__ */ new Map(), this.tryLoadNext = () => {
      clearTimeout(this._loadTimer), this._loadTimer = window.setTimeout(() => this.loadNext(), 50);
    }, this._checkLayout = () => {
      const { onLayoutChange: e } = this.props;
      if (!e)
        return;
      const { blocks: s } = this.state, i = {};
      let r = !1;
      s.forEach((o) => {
        const [a, l, c, h] = this._map.get(o.id), d = this._oldMap.get(o.id);
        (!d || d[0] !== a || d[1] !== l || d[2] !== c || d[3] !== h) && (r = !0, i[o.id] = { left: a, top: l, width: c, height: h }, this._oldMap.set(o.id, [a, l, c, h]));
      }), r && e(i);
    }, this._handleMenuClick = (e) => {
      const s = e.target.closest(".dashboard-block");
      if (!s)
        return;
      const i = s.dataset.id;
      if (!i)
        return;
      const r = this.getBlock(i);
      if (!r || !r.menu)
        return;
      const { menu: o } = r, { onClickMenu: a } = this.props;
      ki.show({
        triggerEvent: e,
        element: e.currentTarget,
        placement: "bottom-end",
        menu: {
          onClickItem: (l) => {
            var c;
            ((c = l.item.data) == null ? void 0 : c.type) === "refresh" && this.load(i), a && a.call(this, l, r);
          },
          ...o
        }
      });
    }, this.state = { blocks: this._initBlocks(t.blocks) };
  }
  getBlock(t) {
    return this.state.blocks.find((e) => e.id === t);
  }
  update(t, e) {
    const { id: s } = t, { blocks: i } = this.state, r = i.findIndex((a) => a.id === s);
    if (r < 0)
      return;
    const o = i[r];
    t.fetch && t.fetch !== o.fetch && t.needLoad === void 0 && (t.needLoad = !0), i[r] = { ...o, ...t }, this.setState({ blocks: i }, e);
  }
  delete(t) {
    const { blocks: e } = this.state, s = e.findIndex((i) => i.id === t);
    s < 0 || (e.splice(s, 1), this.setState({ blocks: e }));
  }
  add(t) {
    t = Array.isArray(t) ? t : [t], this.setState({ blocks: [...this.state.blocks, ...this._initBlocks(t)] });
  }
  load(t, e) {
    const s = this.getBlock(t);
    !s || s.loading || (e = e || s.fetch, e && this.update({ id: t, loading: !0, needLoad: !1 }, async () => {
      try {
        const i = await p.fetch(e, [t, s], ({ url: r }) => ({ url: tt(r, s), dataType: "html" }));
        this.update({ id: t, loading: !1, content: { html: i } }, () => {
          var r;
          this._setCache(t, i), (r = this.props.onLoad) == null || r.call(this, s);
        });
      } catch (i) {
        const r = /* @__PURE__ */ m("div", { class: "panel center text-danger p-5", children: [
          "Error:",
          i.message
        ] });
        this.update({ id: t, loading: !1, content: r }, () => {
          var o;
          (o = this.props.onLoadFail) == null || o.call(this, i, s);
        });
      }
    }));
  }
  reset(t) {
    this.setState({ blocks: this._initBlocks(t) });
  }
  loadNext() {
    const { blocks: t } = this.state;
    let e = "";
    for (const s of t) {
      if (s.loading)
        return;
      if (!s.visible && this._isVisible(s.id))
        return this.update({ id: s.id, visible: !0 });
      if (s.needLoad && s.visible) {
        e = s.id;
        break;
      }
    }
    e.length && requestAnimationFrame(() => this.load(e));
  }
  _isVisible(t) {
    return !this.props.onlyLoadVisible || !!p(this._ref.current).find(`.dashboard-block[data-id="${t}"]`).isVisible();
  }
  _setCache(t, e) {
    const { cache: s } = this.props;
    if (s)
      try {
        typeof s == "string" ? ce.set(`${fn}${s}:${t}`, e) : ce.session.set(`${fn}${t}`, e);
      } catch (i) {
        console.warn("ZUI: Failed to cache block content.", { id: t, html: e, error: i });
      }
  }
  _getCache(t) {
    const { cache: e } = this.props;
    if (!e)
      return;
    const s = typeof e == "string" ? ce.get(`${fn}${e}:${t}`) : ce.session.get(`${fn}${t}`);
    if (s)
      return { html: s };
  }
  _initBlocks(t) {
    const { blockFetch: e, blockMenu: s, grid: i } = this.props;
    return t.map((o) => {
      const {
        id: a,
        size: l,
        width: c,
        height: h,
        left: d = -1,
        top: u = -1,
        fetch: f = e,
        menu: g = s,
        content: _,
        ...y
      } = o, [v, b] = this._getBlockSize(c && h ? { width: c, height: h } : l);
      return {
        id: `${a}`,
        width: v,
        height: b,
        left: Math.min(d, i - v),
        top: u,
        fetch: f,
        menu: g,
        content: _ ?? this._getCache(`${a}`),
        loading: !1,
        needLoad: !!f,
        ...y
      };
    });
  }
  _getBlockSize(t) {
    const { blockDefaultSize: e, blockSizeMap: s } = this.props;
    return t = t ?? e, typeof t == "string" && (t = s[t]), t = t || e, Array.isArray(t) || (t = [t.width, t.height]), t;
  }
  _layout() {
    const { blocks: t, dragging: e, dropping: s } = this.state, i = this._map;
    if (i.size) {
      const a = [0, 0, 0, 0];
      t.sort((l, c) => vl(i.get(l.id) || a, i.get(c.id) || a));
    }
    i.clear(), e && s && i.set(e, s), t.forEach((a) => {
      a.id !== e && this._layoutBlock(a);
    });
    const r = Array.from(i.entries());
    r.sort((a, l) => vl(a[1], l[1]));
    let o = 0;
    return r.forEach(([a, l]) => {
      let c = l[1] - 1;
      for (; c >= 0 && this._canMove([l[0], c, l[2], l[3]], a); )
        c--;
      c++, l[1] = c, o = Math.max(o, c + l[3]);
    }), s && (o = Math.max(o, s[1] + s[3])), { blocks: t, height: o };
  }
  _initDraggable() {
    const t = this._ref.current;
    this._draggable = new ui(t, {
      selector: ".dashboard-block",
      target: () => t,
      beforeDrag: (e, s) => {
        const i = s.getBoundingClientRect();
        if (e.clientY - i.top > 48)
          return e.preventDefault(), !1;
        this._dragOffset = [e.clientX - i.left, e.clientY - i.top];
      },
      onDragStart: (e, s) => {
        const i = s.dataset.id;
        i !== void 0 && (this._dragging = this._map.get(i), this.setState({ dragging: i }));
      },
      onDragOver: (e) => {
        const { cellHeight: s, grid: i } = this.props, r = t.getBoundingClientRect(), [, , o, a] = this._dragging, [l, c] = this._dragOffset, h = Math.min(i - o, Math.max(0, Math.round((e.clientX - r.left - l) / (r.width / i)))), d = Math.max(0, Math.round((e.clientY - r.top - c) / s)), u = this.state.dropping;
        u && u[0] === h && u[1] === d || this.setState({ dropping: [h, d, o, a] });
      },
      onDragEnd: () => {
        const { dragging: e, dropping: s } = this.state, i = { dragging: void 0, dropping: void 0 }, r = {};
        if (e && s) {
          const { blocks: o } = this.state;
          o.forEach((a, l) => {
            const [c, h] = e === a.id ? s : this._map.get(a.id);
            (a.left !== c || a.top !== h) && (o[l] = { ...a, left: c, top: h }, r[a.id] = { left: c, top: h });
          }), i.blocks = o;
        }
        this.setState(i, this._checkLayout), this._dragging = void 0, this._dragOffset = void 0;
      }
    });
  }
  _layoutBlock(t) {
    const { id: e, left: s, top: i, width: r, height: o } = t, a = [s, i, r, o];
    s < 0 || i < 0 ? this._appendBlock(e, a) : this._insertBlock(e, a);
  }
  _canMove(t, e) {
    const { dropping: s } = this.state;
    if (s && Gi(t, s))
      return !1;
    for (const [i, r] of this._map.entries())
      if (i !== e && Gi(r, t))
        return !1;
    return !0;
  }
  _canPlace(t) {
    const { dragging: e } = this.state;
    return this._canMove(t, e);
  }
  _insertBlock(t, e) {
    const { dropping: s } = this.state;
    for (s && Gi(e, s) && (e[1] = s[1] + s[3]); !this._canPlace(e); )
      e[1] = e[1] + 1;
    this._map.set(t, e);
  }
  _appendBlock(t, e) {
    const [s, i, r, o] = e;
    let a = i;
    if (s >= 0 && i >= 0) {
      if (this._canPlace(e)) {
        this._map.set(t, [s, i, r, o]);
        return;
      }
      a = -1;
    }
    let l = s < 0 ? 0 : s, c = a < 0 ? 0 : a, h = !1;
    const d = this.props.grid;
    for (; !h; ) {
      if (this._canPlace([l, c, r, o])) {
        h = !0;
        break;
      }
      s < 0 ? (l += 1, l + r > d && (l = 0, c += 1)) : c += 1;
    }
    this._map.set(t, [l, c, r, o]);
  }
  componentDidMount() {
    this.loadNext(), p(window).on("scroll", this.tryLoadNext), this._initDraggable();
    for (const [t, e] of this._map.entries())
      this._oldMap.set(t, [...e]);
  }
  componentDidUpdate(t) {
    t.blocks !== this.props.blocks ? this.setState({ blocks: this._initBlocks(this.props.blocks) }) : this.loadNext();
  }
  componentWillUnmount() {
    var t;
    clearTimeout(this._loadTimer), p(window).off("scroll", this.tryLoadNext), (t = this._draggable) == null || t.destroy();
  }
  render() {
    const { blocks: t, height: e } = this._layout(), { cellHeight: s, grid: i, emptyBlockContent: r } = this.props, { dropping: o, dragging: a } = this.state, l = this._map;
    return /* @__PURE__ */ m("div", { class: "dashboard", children: /* @__PURE__ */ m(
      "div",
      {
        class: "dashboard-blocks",
        style: { height: e * s },
        ref: this._ref,
        children: [
          o ? /* @__PURE__ */ m(
            "div",
            {
              className: "dashboard-drop-shadow",
              style: { left: `${100 * o[0] / i}%`, top: s * o[1], width: `${100 * o[2] / i}%`, height: s * o[3] }
            },
            "dropping"
          ) : null,
          t.map((c, h) => {
            const { id: d, menu: u, content: f, title: g } = c, [_, y, v, b] = d === a && o ? o : l.get(d) || [0, 0, c.width, c.height];
            return /* @__PURE__ */ m(
              Ym,
              {
                id: d,
                index: h,
                left: `${100 * _ / i}%`,
                top: s * y,
                width: `${100 * v / i}%`,
                height: s * b,
                content: f ?? r,
                title: g,
                className: S(c.needLoad ? "need-load" : "", f ? "has-content" : ""),
                onMenuBtnClick: u ? this._handleMenuClick : void 0
              },
              c.id
            );
          })
        ]
      }
    ) });
  }
};
Qh.defaultProps = {
  responsive: !1,
  cache: !0,
  blocks: [],
  grid: 3,
  gap: 16,
  cellHeight: 64,
  blockDefaultSize: [1, 3],
  blockMenu: { items: [{ text: "Refresh", data: { type: "refresh" } }] },
  onlyLoadVisible: !0,
  blockSizeMap: {
    xs: [1, 3],
    sm: [1, 4],
    md: [1, 5],
    lg: [1, 6],
    xl: [1, 8],
    xsWide: [2, 3],
    smWide: [2, 4],
    mdWide: [2, 5],
    lgWide: [2, 6],
    xlWide: [2, 8],
    xsLong: [3, 3],
    smLong: [3, 4],
    mdLong: [3, 5],
    lgLong: [3, 6],
    xlLong: [3, 8]
  }
};
class td extends W {
}
td.NAME = "Dashboard";
td.Component = Qh;
var Se, ke;
class bl extends O {
  constructor(e) {
    super(e);
    rn(this, Se, void 0);
    rn(this, ke, void 0);
    ve(this, Se, 0), ve(this, ke, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (Yt(this, Se) && cancelAnimationFrame(Yt(this, Se)), ve(this, Se, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), ve(this, Se, 0);
      })), s.preventDefault());
    }, this._handleMouseUp = () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    }, this._handleMouseDown = (s) => {
      this.state.dragStart || this.setState({ dragStart: { x: s.clientX, y: s.clientY, offset: this.scrollPos } }), s.preventDefault(), s.stopPropagation();
    }, this._handleClick = (s) => {
      const i = s.currentTarget;
      if (!i)
        return;
      const r = i.getBoundingClientRect(), { type: o, clientSize: a, scrollSize: l } = this.props, c = (o === "horz" ? s.clientX - r.left : s.clientY - r.top) - this.barSize / 2;
      this.scroll(c * l / a), s.preventDefault();
    }, this.state = {
      scrollPos: this.props.defaultScrollPos ?? 0,
      dragStart: !1
    };
  }
  get scrollPos() {
    return this.props.scrollPos ?? this.state.scrollPos;
  }
  get controlled() {
    return this.props.scrollPos !== void 0;
  }
  get maxScrollPos() {
    const { scrollSize: e, clientSize: s } = this.props;
    return Math.max(0, e - s);
  }
  get barSize() {
    const { clientSize: e, scrollSize: s, size: i = 12, minBarSize: r = 3 * i } = this.props;
    return Math.max(Math.round(e * e / s), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: e } = this.props;
    e && (ve(this, ke, typeof e == "string" ? document : e.current), Yt(this, ke).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), Yt(this, ke) && Yt(this, ke).removeEventListener("wheel", this._handleWheel);
  }
  scroll(e) {
    return e = Math.max(0, Math.min(Math.round(e), this.maxScrollPos)), e === this.scrollPos ? !1 : (this.controlled ? this._afterScroll(e) : this.setState({
      scrollPos: e
    }, this._afterScroll.bind(this, e)), !0);
  }
  scrollOffset(e) {
    return this.scroll(this.scrollPos + e);
  }
  _afterScroll(e) {
    const { onScroll: s } = this.props;
    s && s(e, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: e,
      type: s,
      size: i = 12,
      className: r,
      style: o,
      left: a,
      top: l,
      bottom: c,
      right: h
    } = this.props, { maxScrollPos: d, scrollPos: u } = this, { dragStart: f } = this.state, g = {
      left: a,
      top: l,
      bottom: c,
      right: h,
      ...o
    }, _ = {};
    return s === "horz" ? (g.height = i, g.width = e, _.width = this.barSize, _.left = Math.round(Math.min(d, u) * (e - _.width) / d)) : (g.width = i, g.height = e, _.height = this.barSize, _.top = Math.round(Math.min(d, u) * (e - _.height) / d)), /* @__PURE__ */ m(
      "div",
      {
        className: S("scrollbar", r, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": f
        }),
        style: g,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ m(
          "div",
          {
            className: "scrollbar-bar",
            style: _,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
Se = new WeakMap(), ke = new WeakMap();
const jn = /* @__PURE__ */ new Map(), Un = [];
function ed(n, t) {
  const { name: e } = n;
  if (!(t != null && t.override) && jn.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  jn.set(e, n), t != null && t.buildIn && !Un.includes(e) && Un.push(e);
}
function vt(n, t) {
  ed(n, t);
  const e = (s) => {
    if (!s)
      return n;
    const { defaultOptions: i, ...r } = n;
    return {
      ...r,
      defaultOptions: { ...i, ...s }
    };
  };
  return e.plugin = n, e;
}
function sd(n) {
  return jn.delete(n);
}
function nd(n) {
  if (typeof n == "string") {
    const t = jn.get(n);
    return t || console.warn(`DTable: Cannot found plugin "${n}"`), t;
  }
  if (typeof n == "function" && "plugin" in n)
    return n.plugin;
  if (typeof n == "object")
    return n;
  console.warn("DTable: Invalid plugin", n);
}
function id(n, t, e) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = nd(s);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && id(n, i.plugins, e), n.push(i), e.add(i.name)));
  }), n;
}
function Zm(n = [], t = !0) {
  if (t && Un.length && n.unshift(...Un), !(n != null && n.length))
    return [];
  const e = id([], n, /* @__PURE__ */ new Set()), s = [], i = e.reduce((r, o, a) => {
    var l;
    return r.set(o.name, a * 1e3), (l = o.requireAfter) != null && l.length && s.push(o), r;
  }, /* @__PURE__ */ new Map());
  return s.length && (s.forEach((r) => {
    const o = r.requireAfter.reduce((a, l) => (i.has(l) && a.push(i.get(l)), a), []);
    o.length && i.set(r.name, Math.max(...o) + 1);
  }), e.sort((r, o) => i.get(r.name) - i.get(o.name))), e;
}
function rd() {
  return {
    cols: [],
    data: [],
    rowKey: "id",
    width: "100%",
    height: "auto",
    rowHeight: 35,
    defaultColWidth: 80,
    minColWidth: 24,
    maxColWidth: 9999,
    header: !0,
    footer: void 0,
    headerHeight: 0,
    footerHeight: 0,
    rowHover: !0,
    colHover: !1,
    cellHover: !1,
    bordered: !1,
    striped: !0,
    responsive: !1,
    scrollbarHover: !0,
    horzScrollbarPos: "outside"
  };
}
function Jm(n, t, e) {
  return n && (t && (n = Math.max(t, n)), e && (n = Math.min(e, n))), n;
}
function wl(n, t) {
  return typeof n == "string" && (n = n.endsWith("%") ? parseFloat(n) / 100 : parseFloat(n)), typeof t == "number" && (typeof n != "number" || isNaN(n)) && (n = t), n;
}
function qi(n, t = !1, e = 0) {
  if (!n.list.length)
    return;
  if (t && n.widthSetting && (n.widthSetting = Math.min(n.widthSetting, n.width)), e && (!n.widthSetting || n.widthSetting > e) && n.width > e && (n.widthSetting = e), n.widthSetting && n.width !== n.widthSetting) {
    n.width = n.widthSetting;
    const i = n.width - n.totalWidth;
    if (!t && i > 0 || t && i !== 0) {
      const r = n.flexList.length ? n.flexList : n.list, o = r.reduce((a, l) => a + (l.flex || 1), 0);
      r.forEach((a) => {
        const l = Math[i < 0 ? "max" : "min"](i, Math.ceil(i * ((a.flex || 1) / o)));
        a.realWidth = a.width + l;
      });
    }
  }
  let s = 0;
  n.list.forEach((i, r) => {
    i.realWidth || (i.realWidth = i.width), i.left = s, i.sideIndex = r, s += i.realWidth;
  });
}
function Cl(n) {
  return n ? n === "left" ? "left" : "right" : "center";
}
function Xm(n, t, e, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (C) => (typeof C == "function" && (C = C.call(n)), C = wl(C, 0), C < 1 && (C = Math.round(C * s)), C), h = {
    width: 0,
    list: [],
    flexList: [],
    widthSetting: 0,
    totalWidth: 0
  }, d = {
    ...h,
    list: [],
    flexList: [],
    widthSetting: c(a)
  }, u = {
    ...h,
    list: [],
    flexList: [],
    widthSetting: c(l)
  }, f = {
    left: d,
    center: h,
    right: u
  }, g = [], _ = {};
  let y = !1;
  const v = [], b = {};
  if (e.forEach((C) => {
    const { colTypes: k, onAddCol: $ } = C;
    k && Object.entries(k).forEach(([N, A]) => {
      b[N] || (b[N] = []), b[N].push(A);
    }), $ && v.push($);
  }), t.cols.forEach((C, k) => {
    if (C.hidden)
      return;
    const { type: $ = "", name: N } = C, A = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...C,
      type: $
    }, I = {
      name: N,
      type: $,
      setting: A,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: k,
      side: Cl(A.fixed),
      sideIndex: 0,
      order: A.order,
      border: A.border
    }, F = b[$];
    if (F && F.forEach((X) => {
      const Z = typeof X == "function" ? X.call(n, A) : X;
      Z && Object.assign(A, Z, C);
    }), A.hidden)
      return;
    const { flex: T, minWidth: L = r, maxWidth: V = o } = A, B = wl(A.width || i, i);
    I.flex = T === !0 ? 1 : typeof T == "number" ? T : 0, I.width = Jm(B < 1 ? Math.round(B * s) : B, L, V), I.side = Cl(A.fixed), v.forEach((X) => X.call(n, I)), g.push(I), _[I.name] = I;
    const K = f[I.side];
    K.list.push(I), K.totalWidth += I.width, K.width = K.totalWidth, I.flex && K.flexList.push(I), typeof I.order == "number" && (y = !0);
  }), y) {
    const C = (k, $) => (k.order ?? k.index) - ($.order ?? $.index);
    g.sort(C), d.list.sort(C), h.list.sort(C), u.list.sort(C);
  }
  qi(u, !0);
  const w = s - u.width - Math.max(40, r);
  return qi(d, !0, w), h.widthSetting = s - d.width - u.width, qi(h), {
    list: g,
    map: _,
    ...f
  };
}
function Qm(n) {
  var Z;
  const { col: t, className: e, height: s, row: i, onRenderCell: r, style: o, outerStyle: a, children: l, outerClass: c, width: h, left: d, top: u, ...f } = n, g = {
    left: d ?? t.left,
    top: u ?? i.top,
    width: h ?? t.realWidth,
    height: s,
    ...a
  }, { align: _, cellStyle: y, cellClass: v, className: b } = t.setting, w = {
    justifyContent: _ ? _ === "left" ? "start" : _ === "right" ? "end" : _ : void 0,
    ...y,
    ...o
  }, { name: C, border: k } = t, $ = ["dtable-cell", c, e, b, {
    "has-border-left": k === !0 || k === "left",
    "has-border-right": k === !0 || k === "right"
  }], N = ["dtable-cell-content", v], A = (Z = i.data) == null ? void 0 : Z[C], I = [l ?? A ?? ""], F = r ? r(I, { row: i, col: t, value: A }, n, Dt) : I, T = [], L = [], V = {}, B = {};
  let K = "div";
  F == null || F.forEach((R) => {
    if (typeof R == "object" && R && !bt(R) && ("html" in R || "className" in R || "style" in R || "attrs" in R || "children" in R || "tagName" in R)) {
      const ft = R.outer ? T : L;
      R.html ? ft.push(/* @__PURE__ */ m("div", { className: S("dtable-cell-html", R.className), style: R.style, dangerouslySetInnerHTML: { __html: R.html }, ...R.attrs ?? {} })) : (R.style && Object.assign(R.outer ? g : w, R.style), R.className && (R.outer ? $ : N).push(R.className), R.children && ft.push(R.children), R.attrs && Object.assign(R.outer ? V : B, R.attrs)), R.tagName && !R.outer && (K = R.tagName);
    } else
      (typeof R != "object" || bt(R)) && L.push(R);
  });
  const X = K;
  return /* @__PURE__ */ m(
    "div",
    {
      className: S($),
      style: g,
      "data-col": C,
      "data-row": i.id,
      "data-type": t.type || null,
      ...f,
      ...V,
      children: [
        L.length > 0 && /* @__PURE__ */ m(X, { className: S(N), style: w, ...B, children: L }),
        T
      ]
    }
  );
}
function Yi({
  rows: n = [],
  cols: t,
  rowHeight: e,
  scrollLeft: s = 0,
  scrollTop: i = 0,
  left: r = 0,
  top: o = 0,
  width: a,
  height: l = "100%",
  className: c,
  CellComponent: h = Qm,
  cellClass: d,
  onRenderCell: u
}) {
  var y;
  const f = Array.isArray(n) ? n : [n], g = ((y = f[0]) == null ? void 0 : y.top) ?? 0, _ = f.length;
  return /* @__PURE__ */ m(
    "div",
    {
      className: S("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ m("div", { className: "dtable-cells-container", style: { left: -s, top: -i + g }, children: f.reduce((v, b, w) => {
        const C = t.length;
        return t.forEach((k, $) => {
          v.push(
            /* @__PURE__ */ m(
              h,
              {
                className: S(
                  `is-${b.index % 2 ? "odd" : "even"}-row`,
                  $ ? "" : "is-first-in-row",
                  $ === C - 1 ? "is-last-in-row" : "",
                  w ? "" : "is-first-row",
                  w === _ - 1 ? "is-last-row" : "",
                  d
                ),
                col: k,
                row: b,
                top: b.top - g,
                height: e,
                onRenderCell: u
              },
              `${b.index}:${k.name}`
            )
          );
        }), v;
      }, []) })
    }
  );
}
function od({
  top: n,
  height: t,
  rowHeight: e,
  rows: s,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  scrollTop: l,
  className: c,
  cellClass: h,
  style: d,
  onRenderCell: u,
  children: f
}) {
  let g = null;
  i.list.length && (g = /* @__PURE__ */ m(
    Yi,
    {
      className: "dtable-fixed-left",
      rows: s,
      scrollTop: l,
      cols: i.list,
      width: i.width,
      rowHeight: e,
      cellClass: h,
      onRenderCell: u
    },
    "left"
  ));
  let _ = null;
  r.list.length && (_ = /* @__PURE__ */ m(
    Yi,
    {
      rows: s,
      className: "dtable-scroll-center",
      scrollLeft: a,
      scrollTop: l,
      cols: r.list,
      left: i.width,
      width: r.width,
      rowHeight: e,
      cellClass: h,
      onRenderCell: u
    },
    "center"
  ));
  let y = null;
  return o.list.length && (y = /* @__PURE__ */ m(
    Yi,
    {
      className: "dtable-fixed-right",
      rows: s,
      scrollTop: l,
      cols: o.list,
      left: i.width + r.width,
      width: o.width,
      rowHeight: e,
      cellClass: h,
      onRenderCell: u
    },
    "right"
  )), /* @__PURE__ */ m(
    "div",
    {
      className: S("dtable-block", c),
      style: { ...d, top: n, height: t },
      children: [
        g,
        _,
        y,
        f
      ]
    }
  );
}
var ad = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, lt = (n, t, e) => (ad(n, t, "read from private field"), e ? e.call(n) : t.get(n)), dt = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, kt = (n, t, e) => (ad(n, t, "access private method"), e), we, Is, Ds, kr, ld, xr, cd, $r, hd, Er, dd, wn, Tr, xi, Vn, Nr, Mr, Ar, Ir, Ls, Cn, Kn, oa, aa, ud, Dr, fd;
let $i = class extends O {
  constructor(t) {
    super(t), dt(this, kr), dt(this, xr), dt(this, $r), dt(this, Er), dt(this, wn), dt(this, Ls), dt(this, Kn), dt(this, aa), dt(this, Dr), this.ref = U(), this._rafId = 0, this._needRender = !1, this._plugins = [], this._lastUsedPlugins = /* @__PURE__ */ new Map(), this._events = /* @__PURE__ */ new Map(), this._data = {}, this._i18nMaps = [], this._hover = { in: !1 }, this._firstRender = !0, this.updateLayout = () => {
      this._rafId && cancelAnimationFrame(this._rafId), this._rafId = requestAnimationFrame(() => {
        const { element: e } = this;
        e && !Qt(e) && this.update({ dirtyType: "layout" }), this._rafId = 0;
      });
    }, dt(this, we, (e, s) => {
      s = s || e.type;
      const i = this._events.get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), dt(this, Is, (e) => {
      lt(this, we).call(this, e, `window_${e.type}`);
    }), dt(this, Ds, (e) => {
      lt(this, we).call(this, e, `document_${e.type}`);
    }), dt(this, xi, (e, s, i, r) => {
      const { row: o, col: a } = s;
      s.value = this.getCellValue(o, a), e[0] = s.value;
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell", c = (h, d) => {
        try {
          e = h.call(this, e, s, i, r);
        } catch (u) {
          console.error(`[ZUI] DTable render cell(${o.id}:${a.name}) by ${d} error:`, u);
        }
      };
      return a.setting[l] && c(a.setting[l], "col"), this._plugins.forEach((h) => {
        h[l] && c(h[l], `plugin (${h.name})`);
      }), this.options[l] && c(this.options[l], "options"), e;
    }), dt(this, Vn, (e, s) => {
      s === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), dt(this, Nr, (e) => {
      var a, l, c;
      const s = this.getPointerInfo(e);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: r, element: o }), this._plugins.forEach((h) => {
          var d;
          (d = h.onHeaderCellClick) == null || d.call(this, e, { colName: r, element: o });
        }));
      else {
        const h = this.layout.visibleRows.find((d) => d.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, e, { colName: r, rowID: i, rowInfo: h, element: o })) === !0)
            return;
          for (const d of this._plugins)
            if (((c = d.onCellClick) == null ? void 0 : c.call(this, e, { colName: r, rowID: i, rowInfo: h, element: o })) === !0)
              return;
        }
      }
    }), dt(this, Mr, (e) => {
      const s = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), dt(this, Ar, (e) => {
      const s = p(e.target).closest(".dtable-cell");
      if (!s.length)
        return kt(this, Ls, Cn).call(this, !1);
      kt(this, Ls, Cn).call(this, [s.attr("data-row"), s.attr("data-col")]);
    }), dt(this, Ir, () => {
      kt(this, Ls, Cn).call(this, !1);
    }), this._id = t.id ?? `dtable-${st()}`, this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, this._allPlugins = Object.freeze(Zm(t.plugins)), this._allPlugins.forEach((e) => {
      const { methods: s, data: i, state: r } = e;
      s && Object.entries(s).forEach(([o, a]) => {
        typeof a == "function" && Object.assign(this, { [o]: a.bind(this) });
      }), i && Object.assign(this._data, i.call(this)), r && Object.assign(this.state, r.call(this));
    }), kt(this, Kn, oa).call(this), this._plugins.forEach((e) => {
      var s;
      (s = e.onCreate) == null || s.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = this._layout) == null ? void 0 : t.options) || this._options || rd();
  }
  get plugins() {
    return this._plugins;
  }
  get layout() {
    return this._layout;
  }
  get id() {
    return this._id;
  }
  get data() {
    return this._data;
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return this._hover;
  }
  componentWillReceiveProps() {
    this._options = void 0;
  }
  shouldComponentUpdate() {
    return !0;
  }
  componentDidMount() {
    this._needRender ? this.forceUpdate() : kt(this, wn, Tr).call(this), this.on("click", lt(this, Nr)), this.on("keydown", lt(this, Mr));
    const { options: t } = this;
    (t.rowHover || t.colHover) && (this.on("mouseover", lt(this, Ar)), this.on("mouseleave", lt(this, Ir)));
    let { responsive: e } = t;
    if (e) {
      e === !0 && (e = "window,parent");
      const s = e.split(",");
      if (typeof ResizeObserver < "u") {
        const i = [], r = new ResizeObserver(this.updateLayout);
        this._rob = r;
        const { parent: o } = this;
        s.forEach((a) => {
          a !== "window" && (a === "parent" ? o && r.observe(o) : a[0] === "~" ? i.push(a.slice(1)) : p(a).each((l, c) => r.observe(c)));
        }), i.length && this.on(i.join(" "), this.updateLayout);
      }
      s.includes("window") && this.on("window_resize", this.updateLayout);
    }
    this._checkPluginsState();
  }
  componentDidUpdate() {
    kt(this, wn, Tr).call(this), this._checkPluginsState(), this._plugins.forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = this._rob) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const s of this._events.keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), lt(this, Is)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), lt(this, Ds)) : t.removeEventListener(s, lt(this, we));
    this._plugins.forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), this._allPlugins.forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), this._data = {}, this._events.clear(), this._noAnimation && clearTimeout(this._noAnimation), this._rafId && cancelAnimationFrame(this._rafId);
  }
  resetState(t, e) {
    this._options = void 0, this._layout = void 0, t = t || this.props;
    const s = {};
    this._plugins.forEach((i) => {
      const { resetState: r, state: o } = i;
      r && (typeof r == "function" ? Object.assign(s, r.call(this, t)) : o && Object.assign(s, o.call(this)));
    }), Object.keys(s).length && this.setState(s);
  }
  on(t, e, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = this._events.get(t);
    i ? i.push(e) : (this._events.set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), lt(this, Is)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), lt(this, Ds)) : (r = this.element) == null || r.addEventListener(t, lt(this, we)));
  }
  off(t, e, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = this._events.get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (this._events.delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), lt(this, Is)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), lt(this, Ds)) : (o = this.element) == null || o.removeEventListener(t, lt(this, we)));
  }
  emitCustomEvent(t, e) {
    lt(this, we).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
  }
  disableAnimation(t = 200) {
    var e;
    this._noAnimation && clearTimeout(this._noAnimation), (e = this.element) == null || e.classList.add("no-animation"), this._noAnimation = window.setTimeout(() => {
      var s;
      this._noAnimation = void 0, (s = this.element) == null || s.classList.remove("no-animation");
    }, t);
  }
  scroll(t, e) {
    const { scrollLeft: s, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, cols: { center: { totalWidth: l, width: c } } } = this.layout, { to: h } = t;
    let { scrollLeft: d, scrollTop: u } = t;
    if (h === "up" || h === "down")
      u = i + (h === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (h === "left" || h === "right")
      d = s + (h === "right" ? 1 : -1) * c;
    else if (h === "top")
      u = 0;
    else if (h === "bottom")
      u = r - o;
    else if (h === "begin")
      d = 0;
    else if (h === "end")
      d = l - c;
    else {
      const { offsetLeft: g, offsetTop: _ } = t;
      typeof g == "number" && (d = s + g), typeof _ == "number" && (u = i + _);
    }
    const f = {};
    return typeof d == "number" && (d = Math.max(0, Math.min(d, l - c)), d !== s && (f.scrollLeft = d)), typeof u == "number" && (u = Math.max(0, Math.min(u, r - o)), u !== i && (f.scrollTop = u)), Object.keys(f).length ? (this.setState(f, () => {
      var g;
      (g = this.options.onScroll) == null || g.call(this, f), e == null || e.call(this, !0);
    }), !0) : (e == null || e.call(this, !1), !1);
  }
  getColInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    const { cols: e } = this.layout;
    return typeof t == "number" ? e.list[t] : e.map[t];
  }
  getRowInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    if (t === -1 || t === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: e, rowsMap: s, allRows: i } = this.layout;
    return typeof t == "number" ? e[t] : s[t] || i.find((r) => r.id === t);
  }
  getCellValue(t, e) {
    var a;
    const s = typeof t == "object" ? t : this.getRowInfo(t);
    if (!s)
      return;
    const i = typeof e == "object" ? e : this.getColInfo(e);
    if (!i)
      return;
    let r = s.id === "HEADER" ? i.setting.title : (a = s.data) == null ? void 0 : a[i.name];
    const { cellValueGetter: o } = this.options;
    return o && (r = o.call(this, s, i, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, e) {
    if (!this._options)
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      this._layout = void 0;
    else if (s === "options") {
      if (this._options = void 0, !this._layout)
        return;
      this._layout = void 0;
    }
    this.setState(i || ((r) => ({ renderCount: r.renderCount + 1 })), e);
  }
  getPointerInfo(t) {
    const e = t.target;
    if (!e || e.closest(".no-cell-event"))
      return;
    const s = p(e).closest(".dtable-cell");
    if (!s.length)
      return;
    const i = s.attr("data-row"), r = s.attr("data-col");
    if (!(typeof r != "string" || typeof i != "string"))
      return {
        cellElement: s[0],
        colName: r,
        rowID: i,
        target: e
      };
  }
  componentDidCatch(t, e) {
    console.error(`[ZUI] DTable ${this.id} Error:`, t, e);
  }
  i18n(t, e, s) {
    return j(this._i18nMaps, t, e, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  _checkPluginsState() {
    const t = new Set(this._lastUsedPlugins.keys());
    this._plugins.forEach((e) => {
      var i;
      if (t.has(e.name)) {
        t.delete(e.name);
        return;
      }
      let { events: s } = e;
      s && (typeof s == "function" && (s = s.call(this)), Object.entries(s).forEach(([r, o]) => {
        o && this.on(r, o);
      })), (i = e.onMounted) == null || i.call(this), this._lastUsedPlugins.set(e.name, e);
    }), t.size && t.forEach((e) => {
      var i;
      const s = this._lastUsedPlugins.get(e);
      (i = s == null ? void 0 : s.onUnmounted) == null || i.call(this), this._lastUsedPlugins.delete(e);
    });
  }
  render() {
    let t = kt(this, Dr, fd).call(this);
    const { className: e, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l, beforeRender: c, emptyTip: h, style: d } = this.options, u = { ...d }, f = ["dtable", e, {
      "dtable-hover-row": s,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l,
      "no-animation": this._noAnimation
    }], g = [];
    if (t) {
      const _ = !t.rows.length;
      if (c) {
        const y = c.call(this, t);
        y && (t = y);
      }
      this._plugins.forEach((y) => {
        var b;
        const v = (b = y.beforeRender) == null ? void 0 : b.call(this, t);
        v && (t = v);
      }), u.width = t.width, u.height = t.height, u["--dtable-row-height"] = `${t.rowHeight}px`, u["--dtable-header-height"] = `${t.headerHeight}px`, f.push(
        t.className,
        _ ? "dtable-is-empty" : "",
        {
          "dtable-has-scroll-y": t.rowsHeightTotal > t.rowsHeight,
          "dtable-scrolled-down": t.scrollTop > 0,
          "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
          "dtable-scrolled-right": t.scrollLeft > 0,
          "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
        }
      ), t.children && g.push(...t.children), _ && h ? (delete u.height, g.push(
        /* @__PURE__ */ m("div", { className: "dtable-empty-tip", children: /* @__PURE__ */ m(P, { content: h, generatorThis: this, generatorArgs: [t] }) }, "empty-tip")
      )) : (g.push(
        kt(this, kr, ld).call(this, t),
        kt(this, xr, cd).call(this, t),
        kt(this, $r, hd).call(this, t)
      ), t.scrollable && g.push(kt(this, Er, dd).call(this, t))), this._plugins.forEach((y) => {
        var b;
        const v = (b = y.onRender) == null ? void 0 : b.call(this, t);
        v && (v.style && Object.assign(u, v.style), v.className && f.push(v.className), v.children && g.push(v.children));
      });
    }
    return /* @__PURE__ */ m(
      "div",
      {
        id: this._id,
        className: S(f),
        style: u,
        ref: this.ref,
        tabIndex: -1,
        children: g
      }
    );
  }
};
we = /* @__PURE__ */ new WeakMap();
Is = /* @__PURE__ */ new WeakMap();
Ds = /* @__PURE__ */ new WeakMap();
kr = /* @__PURE__ */ new WeakSet();
ld = function(n) {
  const { header: t, cols: e, headerHeight: s, scrollLeft: i, headerChildren: r } = n;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ m(
      od,
      {
        className: "dtable-header",
        cols: e,
        height: s,
        scrollLeft: i,
        rowHeight: s,
        scrollTop: 0,
        cellClass: "dtable-header-cell",
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: lt(this, xi),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ m(
    Wc,
    {
      className: "dtable-header",
      style: { height: s },
      renders: o,
      generateArgs: [n],
      generatorThis: this,
      children: r
    },
    "header"
  );
};
xr = /* @__PURE__ */ new WeakSet();
cd = function(n) {
  const { headerHeight: t, rowsHeight: e, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = n;
  return /* @__PURE__ */ m(
    od,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: lt(this, xi),
      children: l
    },
    "body"
  );
};
$r = /* @__PURE__ */ new WeakSet();
hd = function(n) {
  let { footer: t } = n;
  if (typeof t == "function" && (t = t.call(this, n)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ m(
    Wc,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: e,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators,
      children: n.footerChildren
    },
    "footer"
  );
};
Er = /* @__PURE__ */ new WeakSet();
dd = function(n) {
  const t = [], { scrollLeft: e, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: h } = n, { scrollbarSize: d = 12, horzScrollbarPos: u, vertScrollbarPos: f } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ m(
      bl,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: lt(this, Vn),
        left: s,
        bottom: (u === "inside" ? 0 : -d) + c,
        size: d,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: h + a } }),
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: h + a } })
  ), l > a && t.push(
    /* @__PURE__ */ m(
      bl,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: lt(this, Vn),
        right: f === "outside" ? -d : 0,
        size: d,
        top: h,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
wn = /* @__PURE__ */ new WeakSet();
Tr = function() {
  var n;
  this._needRender = !1, this._plugins.forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this, this._firstRender);
  }), (n = this.options.afterRender) == null || n.call(this, this._firstRender), this._firstRender = !1;
};
xi = /* @__PURE__ */ new WeakMap();
Vn = /* @__PURE__ */ new WeakMap();
Nr = /* @__PURE__ */ new WeakMap();
Mr = /* @__PURE__ */ new WeakMap();
Ar = /* @__PURE__ */ new WeakMap();
Ir = /* @__PURE__ */ new WeakMap();
Ls = /* @__PURE__ */ new WeakSet();
Cn = function(n) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const s = p(t), i = n ? { in: !0, row: n[0], col: n[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = this._hover;
  i.in !== r.in && s.toggleClass("dtable-hover", i.in), i.row !== r.row && (s.find(".is-hover-row").removeClass("is-hover-row"), i.row && s.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (s.find(".is-hover-col").removeClass("is-hover-col"), i.col && s.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), this._hover = i;
};
Kn = /* @__PURE__ */ new WeakSet();
oa = function() {
  if (this._options)
    return !1;
  const t = { ...rd(), ...this._allPlugins.reduce((e, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return this._options = t, this._plugins = this._allPlugins.reduce((e, s) => {
    const { options: i } = s;
    let r = t;
    return i && (r = Object.assign({ ...r }, typeof i == "function" ? i.call(this, t) : i)), r !== t && Object.assign(t, r), e.push(s), e;
  }, []).filter((e) => {
    const { when: s } = e;
    return !s || s.call(this, t);
  }), this._i18nMaps = [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean), !0;
};
aa = /* @__PURE__ */ new WeakSet();
ud = function() {
  var I, F;
  const { plugins: n } = this;
  let t = this._options;
  const e = {
    flex: /* @__PURE__ */ m("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ m("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((T) => {
    var V;
    const L = (V = T.beforeLayout) == null ? void 0 : V.call(this, t);
    L && (t = { ...t, ...L }), Object.assign(e, T.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: T } = this;
    if (T)
      i = T.clientWidth;
    else {
      this._needRender = !0;
      return;
    }
  }
  const r = Xm(this, t, n, i), { data: o, rowKey: a = "id", rowHeight: l = 35, rowConverter: c } = t, h = [], d = (T, L, V) => {
    var X, Z;
    const B = V ?? { [a]: T }, K = { data: c ? c.call(this, B, L) : B, id: T, index: h.length, top: 0 };
    if (V || (K.lazy = !0), h.push(K), ((X = t.onAddRow) == null ? void 0 : X.call(this, K, L)) !== !1) {
      for (const R of n)
        if (((Z = R.onAddRow) == null ? void 0 : Z.call(this, K, L)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let T = 0; T < o; T++)
      d(`${T}`, T);
  else
    Array.isArray(o) && o.forEach((T, L) => {
      typeof T == "object" ? d(`${T[a] ?? ""}`, L, T) : d(`${T ?? ""}`, L);
    });
  let u = h;
  const f = {};
  if (t.onAddRows) {
    const T = t.onAddRows.call(this, u, r);
    T && (u = T);
  }
  for (const T of n) {
    const L = (I = T.onAddRows) == null ? void 0 : I.call(this, u, r);
    L && (u = L);
  }
  u.forEach((T, L) => {
    f[T.id] = T, T.index = L, T.top = T.index * l;
  });
  const { header: g, footer: _ } = t, y = g ? t.headerHeight || l : 0, v = _ ? t.footerHeight || l : 0;
  let b = t.height, w = 0;
  const C = u.length * l, k = y + v + C;
  if (typeof b == "function" && (b = b.call(this, k)), b === "auto")
    w = k;
  else if (typeof b == "object")
    w = Math.min(b.max, Math.max(b.min, k));
  else if (b === "100%") {
    const { parent: T } = this;
    if (T)
      w = T.clientHeight;
    else {
      w = 0, this._needRender = !0;
      return;
    }
  } else
    w = b;
  const $ = w - y - v, N = {
    options: t,
    allRows: h,
    width: i,
    height: w,
    rows: u,
    rowsMap: f,
    rowHeight: l,
    rowsHeight: $,
    rowsHeightTotal: C,
    header: g,
    footer: _,
    footerGenerators: e,
    headerHeight: y,
    footerHeight: v,
    cols: r
  }, A = (F = t.onLayout) == null ? void 0 : F.call(this, N);
  A && Object.assign(N, A), n.forEach((T) => {
    if (T.onLayout) {
      const L = T.onLayout.call(this, N);
      L && Object.assign(N, L);
    }
  }), this._layout = N;
};
Dr = /* @__PURE__ */ new WeakSet();
fd = function() {
  (kt(this, Kn, oa).call(this) || !this._layout) && kt(this, aa, ud).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  const { cols: { center: t } } = n;
  let { scrollLeft: e } = this.state;
  e = Math.min(Math.max(0, t.totalWidth - t.width), e);
  let s = 0;
  t.list.forEach((_) => {
    _.left = s, s += _.realWidth, _.visible = _.left + _.realWidth >= e && _.left <= e + t.width;
  });
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = n, { rowDataGetter: l, partialRender: c = !0 } = this.options, h = Math.min(Math.max(0, i - r), this.state.scrollTop), d = c ? Math.floor(h / a) : 0, u = h + r, f = c ? Math.min(o.length, Math.ceil(u / a)) : o.length, g = [];
  for (let _ = d; _ < f; _++) {
    const y = o[_];
    y.lazy && l && (y.data = l([y.id])[0], y.lazy = !1), g.push(y);
  }
  return Object.assign(n, {
    visibleRows: g,
    scrollTop: h,
    scrollLeft: e,
    headerChildren: [],
    bodyChildren: [],
    footerChildren: [],
    children: [],
    className: "",
    scrollable: !0
  }), n;
};
$i.addPlugin = ed;
$i.removePlugin = sd;
function pd(n, t, e, s) {
  if (typeof n == "function" && (n = n.call(this, t)), typeof n == "string" && n.length && (n = { url: n }), !n)
    return Array.isArray(e) ? /* @__PURE__ */ m(ms, { children: e }) : e;
  const { url: i, ...r } = n, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ m("a", { href: tt(i, t.row.data), ...s, ...r, ...a, children: e });
}
function la(n, t, e) {
  if (n == null)
    return;
  const s = t.row.data;
  return e = e ?? (s == null ? void 0 : s[t.col.name]), typeof n == "function" ? n.call(this, e, t) : tt(n, { ...s, 0: e });
}
function md(n, t, e, s) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === "0000-00-00 00:00:00" || e === "0000-00-00" ? s ?? "" : n === !1 ? e : (n === !0 && (n = "[yyyy-]MM-dd hh:mm"), typeof n == "function" && (n = n.call(this, e, t)), nt(e, n, s ?? e))) : s ?? e;
}
function gd(n, t) {
  const { link: e } = t.col.setting, s = pd.call(this, e, t, n[0]);
  return s && (n[0] = s), n;
}
function _d(n, t) {
  const { format: e, digits: s } = t.col.setting;
  let i = n[0];
  return typeof s == "number" && !Number.isNaN(Number(i)) && (i = Number(i), s >= 0 && (i = i.toFixed(s))), e && (i = la.call(this, e, t, i)), n[0] = i, n;
}
function yd(n, t) {
  const { map: e, mapSplitter: s = ",", mapJoiner: i } = t.col.setting;
  if (e) {
    let r = n[0];
    typeof r == "string" && s && (r = r.split(s)), typeof e == "function" ? n[0] = e.call(this, r, t) : typeof e == "object" && (Array.isArray(r) || (r = [r]), n[0] = r.map((o) => e[o] ?? o).join(i ?? s));
  }
  return n;
}
function vd(n, t, e) {
  const s = {};
  return typeof n == "function" ? Object.assign(s, n.call(this, e)) : Object.keys(n).forEach((i) => {
    var o;
    const r = (o = e.row.data) == null ? void 0 : o[n[i]];
    r !== void 0 && (s[i] = r);
  }), Object.keys(s).length && t.push({ style: s }), t;
}
function bd(n, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = e, invalidDate: i } = t.col.setting;
  return n[0] = md.call(this, s, t, n[0], i), n;
}
function Lr(n, t, e = !1) {
  const { html: s = e } = t.col.setting;
  if (s === !1)
    return n;
  const i = n[0], r = s === !0 ? i : la.call(this, s, t, i);
  return n[0] = {
    html: r
  }, n;
}
const tg = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(n, t) {
        return Lr.call(this, n, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(n, { col: t }) {
        const { progressType: e, barColor: s, barBgColor: i, barHeight: r = 6, barWidth: o = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: h = "var(--color-success-500)" } = t.setting, d = n[0];
        return n[0] = e === "bar" ? /* @__PURE__ */ m(
          hi,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: s || h,
            background: i,
            percent: d
          }
        ) : /* @__PURE__ */ m(
          di,
          {
            percent: d,
            size: a,
            circleWidth: l,
            circleBg: c,
            circleColor: h,
            text: !0
          }
        ), n;
      }
    },
    datetime: {
      formatDate: "[yyyy-]MM-dd hh:mm"
    },
    date: {
      formatDate: "yyyy-MM-dd"
    },
    time: {
      formatDate: "hh:mm"
    }
  },
  onRenderCell(n, t) {
    const { formatDate: e, html: s, hint: i, styleMap: r } = t.col.setting;
    if (e && (n = bd.call(this, n, t, e)), n = yd.call(this, n, t), n = _d.call(this, n, t), s ? n = Lr.call(this, n, t) : n = gd.call(this, n, t), i) {
      let o = t.value;
      typeof i == "function" ? o = i.call(this, t) : typeof i == "string" ? o = tt(i, t.row.data) : typeof n[0] == "string" && (o = n[0]), n.push({ attrs: { title: o } });
    }
    return r && (n = vd.call(this, r, n, t)), n;
  }
}, eg = vt(tg, { buildIn: !0 }), sg = {
  default: (n, t, e) => {
    var r, o;
    const s = (r = n.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return s === i ? 0 : s == null ? 1 : String(s).localeCompare(String(i));
  },
  date: (n, t, e) => {
    var r, o;
    const s = Q(((r = n.data) == null ? void 0 : r[e.name]) ?? 0), i = Q(((o = t.data) == null ? void 0 : o[e.name]) ?? 0);
    return s.getTime() - i.getTime();
  },
  number: (n, t, e) => {
    var r, o;
    const s = (r = n.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return Number.parseFloat(s) - Number.parseFloat(i);
  }
}, ng = {
  name: "sort",
  defaultOptions: { sort: !1 },
  when: (n) => !!n.sort,
  onCreate() {
    const { sortBy: n } = this.options;
    n && (this.state.sortBy = Array.isArray(n) ? n : [n]);
  },
  onAddRows(n, t) {
    const { sortBy: e } = this.state;
    if (!e || !e.length)
      return;
    const { sort: s } = this.options, i = {
      ...sg,
      ...typeof s == "function" ? { default: s } : typeof s == "object" ? s : {}
    };
    return [...n].sort((r, o) => {
      for (const { name: a, order: l } of e) {
        const c = t.map[a];
        if (!c)
          continue;
        let h = c.setting.sort;
        if (h === !0 ? h = i.default : typeof h == "string" && (h = i[h]), !h)
          continue;
        const d = h.call(this, r, o, c);
        if (d)
          return l === "asc" ? d : -d;
      }
      return 0;
    });
  },
  onHeaderCellClick(n, t) {
    if (!n.target.closest(".dtable-sort-link"))
      return;
    const e = this.getColInfo(t.colName);
    if (!e || !e.setting.sort)
      return;
    const { sortBy: s = [] } = this.state, i = s.findIndex((a) => a.name === e.name), { multiSort: r } = this.options;
    let o = "asc";
    if (i >= 0) {
      const a = s[i].order;
      a === "asc" ? o = "desc" : a === "desc" && (o = "none"), r && s.splice(i, 1);
    }
    r || (s.length = 0), this.update({ dirtyType: "layout", state: { sortBy: [{ name: t.colName, order: o }, ...s].filter((a) => a.order !== "none") } });
  },
  onRenderHeaderCell(n, t) {
    var l;
    const { col: e } = t, { sortBy: s } = this.state;
    if (!e.setting.sort)
      return n;
    const o = ((l = s == null ? void 0 : s.find((c) => c.name === e.name)) == null ? void 0 : l.order) || "none", a = /* @__PURE__ */ m("div", { className: `dtable-sort dtable-sort-${o}` });
    return n[0] = /* @__PURE__ */ m("a", { className: "dtable-sort-link", href: "javascript:;", children: [
      n[0],
      a
    ] }), n.push(
      { outer: !0, attrs: { "data-sort": o } }
    ), n;
  }
}, ig = vt(ng, { buildIn: !0 }), rg = {
  html: { component: Ne }
}, og = {
  name: "custom",
  onRenderCell(n, t) {
    const { col: e } = t;
    let { custom: s } = e.setting;
    if (typeof s == "function" && (s = s.call(this, t)), !s)
      return n;
    const i = Array.isArray(s) ? s : [s], { customMap: r } = this.options;
    return i.forEach((o) => {
      let a;
      typeof o == "string" ? a = o.startsWith("<") ? {
        component: Ne,
        props: { html: tt(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(rg[l], r == null ? void 0 : r[l]);
      const h = {};
      c.forEach((u) => {
        if (u) {
          const { props: f } = u;
          f && p.extend(h, typeof f == "function" ? f.call(this, t) : f), l = u.component || l;
        }
      }, { props: {} });
      const d = l;
      n[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ m(d, { ...h }) };
    }), n;
  }
}, ag = vt(og);
function lg(n, t) {
  var a, l;
  typeof n == "boolean" && (t = n, n = void 0);
  const e = this.state.checkedRows, s = {}, { canRowCheckable: i, allowCheckDisabled: r } = this.options, o = (c, h) => {
    const d = i ? i.call(this, c) : !0;
    !d || !r && d === "disabled" || !!e[c] === h || (h ? e[c] = !0 : delete e[c], s[c] = h);
  };
  if (n === void 0 ? (t === void 0 && (t = !wd.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
    o(c, !!t);
  })) : (Array.isArray(n) || (n = [n]), n.forEach((c) => {
    o(c, t ?? !e[c]);
  })), Object.keys(s).length) {
    const c = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, n, s, e);
    c && Object.keys(c).forEach((h) => {
      const d = i ? i.call(this, h) : !0;
      !d || !r && d === "disabled" || (c[h] ? e[h] = !0 : delete e[h]);
    }), this.setState({ checkedRows: { ...e } }, () => {
      var h;
      (h = this.options.onCheckChange) == null || h.call(this, s);
    });
  }
  return s;
}
function cg(n) {
  return this.state.checkedRows[n] ?? !1;
}
function wd() {
  var i, r;
  const n = (i = this.layout) == null ? void 0 : i.allRows.length;
  if (!n)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e, allowCheckDisabled: s } = this.options;
  return e ? t >= ((r = this.layout) == null ? void 0 : r.allRows.reduce((o, a) => {
    const l = e ? e.call(this, a.id) : !0;
    return o + (!l || !s && l === "disabled" ? 0 : 1);
  }, 0)) : t >= n;
}
function hg() {
  var t;
  const n = new Set((t = this.layout) == null ? void 0 : t.allRows.map((e) => e.id));
  return Object.keys(this.state.checkedRows).filter((e) => n.has(e));
}
function dg(n) {
  const { checkable: t } = this.options;
  n === void 0 && (n = !t), t !== n && this.setState({ forceCheckable: n });
}
function Sl(n, t, e = !1, s = void 0) {
  return /* @__PURE__ */ m(Qe, { className: "dtable-checkbox", checked: n, disabled: e, label: s });
}
const kl = 'input[type="checkbox"],.dtable-checkbox', ug = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Sl
  },
  when: (n) => !!n.checkable,
  options(n) {
    const { forceCheckable: t } = this.state;
    return t !== void 0 ? n.checkable = t : n.checkable === "auto" && (n.checkable = !!n.cols.some((e) => e.checkbox)), n;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: lg,
    isRowChecked: cg,
    isAllRowChecked: wd,
    getChecks: hg,
    toggleCheckable: dg
  },
  i18n: {
    zh_cn: {
      checkedCountInfo: "已选择 {selected} 项",
      totalCountInfo: "共 {total} 项"
    },
    zh_tw: {
      checkedCountInfo: "已選擇 {selected} 項",
      totalCountInfo: "共 {total} 項"
    },
    en: {
      checkedCountInfo: "Selected {selected} items",
      totalCountInfo: "Total {total} items"
    }
  },
  footer: {
    checkbox() {
      const n = this.isAllRowChecked();
      return [
        /* @__PURE__ */ m("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Sl(n, void 0, !1, this.options.checkboxLabel) })
      ];
    },
    checkedInfo(n, t) {
      const e = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [/* @__PURE__ */ m(P, { className: "dtable-check-info", content: s.call(this, e) })];
      const i = e.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ m("div", { className: "dtable-check-info", children: r.join(", ") })
      ];
    }
  },
  onCreate() {
    const { checkedRows: n } = this.options;
    n && this.setState((t) => ({
      checkedRows: {
        ...t.checkedRows,
        ...n.reduce((e, s) => (e[s] = !0, e), {})
      }
    }));
  },
  onRenderCell(n, { row: t, col: e }) {
    var c;
    const { id: s } = t, { canRowCheckable: i } = this.options, r = i ? i.call(this, s) : !0;
    if (!r)
      return n;
    const { checkbox: o } = e.setting, a = typeof o == "function" ? o.call(this, s) : o, l = this.isRowChecked(s);
    if (a) {
      const h = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, l, s, r === "disabled");
      n.push(
        h,
        { outer: !0, className: "has-checkbox" }
      );
    }
    return l && n.push({ outer: !0, className: "is-checked" }), n;
  },
  onRenderHeaderCell(n, { row: t, col: e }) {
    var o;
    const { id: s } = t, { checkbox: i } = e.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const a = this.isAllRowChecked(), l = (o = this.options.checkboxRender) == null ? void 0 : o.call(this, a, s);
      n.push(l, { outer: !0, className: "has-checkbox" });
    }
    return n;
  },
  onHeaderCellClick(n) {
    if (this.data.disableCheckable)
      return;
    const t = n.target;
    if (!t)
      return;
    const e = t.closest(kl);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(n, { rowID: t }) {
    if (this.data.disableCheckable)
      return;
    const e = p(n.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    const s = e.closest(kl);
    if (s.closest(".disabled").length) {
      n.preventDefault();
      return;
    }
    (s.length || this.options.checkOnClickRow) && this.toggleCheckRows(t);
  }
}, fg = vt(ug), pg = {
  name: "store",
  defaultOptions: {
    store: !0
  },
  when: (n) => !!n.store,
  data() {
    return { store: new Zs(`DTable:${this.id}`) };
  }
}, mg = vt(pg);
var Cd = /* @__PURE__ */ ((n) => (n.unknown = "", n.collapsed = "collapsed", n.expanded = "expanded", n.hidden = "hidden", n.normal = "normal", n))(Cd || {});
function Gn(n) {
  const t = this.data.nestedMap.get(n);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = t.children && this.state.nestedState[n];
  let s = !1, { parent: i } = t;
  for (; i; ) {
    const r = Gn.call(this, i);
    if (r.state !== "expanded") {
      s = !0;
      break;
    }
    i = r.parent;
  }
  return t.state = s ? "hidden" : e ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Gn.call(this, t.parent).level + 1 : 0, t;
}
function gg(n) {
  return n !== void 0 ? Gn.call(this, n) : this.data.nestedMap;
}
function _g(n, t) {
  let { nestedState: e } = this.state;
  const { nestedMap: s } = this.data;
  if (n === "HEADER")
    if (t === void 0 && (t = !Sd.call(this)), t) {
      const i = s.entries();
      for (const [r, o] of i)
        o.state === "expanded" && (e[r] = !0);
    } else
      e = {};
  else {
    const i = Array.isArray(n) ? n : [n];
    t === void 0 && (t = !e[i[0]]), i.forEach((r) => {
      const o = s.get(r);
      t && (o != null && o.children) ? e[r] = !0 : delete e[r];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { nestedState: { ...e } }
  }, () => {
    const { onNestedChange: i, preserveNested: r } = this.options;
    i == null || i.call(this), r && this.data.store.set("nestedState", e);
  });
}
function Sd() {
  const n = this.data.nestedMap.values();
  for (const t of n)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function kd(n, t = 1, e, s = 0) {
  var i;
  e || (e = [...n.keys()]);
  for (const r of e) {
    const o = n.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = kd(n, t, o.children, s + 1)));
  }
  return t;
}
function xd(n, t, e, s) {
  const i = n.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = e, xd(n, r, e, s);
  }), i;
}
function $d(n, t, e, s, i) {
  var a;
  const r = n.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(s[l] !== void 0 ? s[l] : i[l]);
    return e === c;
  })) && (s[t] = e), r.parent && $d(n, r.parent, e, s, i);
}
const pn = "dtable-nested-toggle", yg = {
  name: "nested",
  plugins: [mg],
  requireAfter: ["sortable"],
  defaultOptions: {
    nested: "auto",
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(n, t) {
      const { nestedMap: e } = this.data, s = e.get(n.id), i = e.get(t.id);
      return (s == null ? void 0 : s.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(n, t, e) {
      if (!this.options.checkable || !(n != null && n.length) || this.options.noNestedCheck)
        return;
      const s = {};
      return Object.entries(t).forEach(([i, r]) => {
        const o = xd(this, i, r, s);
        o != null && o.parent && $d(this, o.parent, r, s, e);
      }), s;
    }
  },
  options(n) {
    return n.nested === "auto" && (n.nested = !!n.cols.some((t) => t.nestedToggle)), n;
  },
  when: (n) => !!n.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map(), nestedRowMap: /* @__PURE__ */ new Map() };
  },
  state() {
    return { nestedState: {} };
  },
  methods: {
    getNestedInfo: gg,
    toggleRow: _g,
    isAllCollapsed: Sd,
    getNestedRowInfo: Gn
  },
  onCreate() {
    let { defaultNestedState: n } = this.options;
    if (this.options.preserveNested) {
      const t = this.data.store.get("nestedState");
      t && (n = t);
    }
    if (n === !0) {
      const { data: t, rowKey: e = "id" } = this.options;
      Array.isArray(t) && (n = t.reduce((s, i) => (s[typeof i == "string" ? i : i[e]] = !0, s), {}));
    }
    this.state.nestedState = n || {};
  },
  onMounted() {
    this.options.defaultNestedState === !0 && !this.options.preserveNested && this.toggleRow("HEADER", !0);
  },
  beforeLayout() {
    this.data.nestedMap.clear(), this.data.nestedRowMap.clear();
  },
  onAddRow(n) {
    this.data.nestedRowMap.set(n.id, n);
  },
  onAddRows(n) {
    const { nestedMap: t, nestedRowMap: e } = this.data;
    n.forEach((r) => {
      var c, h;
      const o = t.get(r.id) ?? {
        state: "",
        level: 0
      };
      let a = ((c = r.data) == null ? void 0 : c[this.options.nestedParentKey ?? "parent"]) ?? [];
      Array.isArray(a) || (a = [a]);
      let l;
      for (a = [...a]; a.length; ) {
        let d = a.pop();
        if (d === void 0)
          continue;
        if (d = String(d), e.get(d)) {
          l = d;
          break;
        }
      }
      if (o.parent = l === "0" ? void 0 : l, (h = r.data) != null && h[this.options.asParentKey ?? "asParent"] && (o.children = []), t.set(r.id, o), l) {
        let d = t.get(l);
        d || (d = {
          state: "",
          level: 0
        }, t.set(l, d)), d.children || (d.children = []), d.children.push(r.id);
      }
    });
    const s = /* @__PURE__ */ new Map(), i = n.length * 100;
    return n = n.filter((r) => {
      const o = this.getNestedRowInfo(r.id);
      return s.set(r.id, o), o.state !== "hidden";
    }), kd(s), n.sort((r, o) => {
      const a = s.get(r.id), l = s.get(o.id);
      return ((a == null ? void 0 : a.order) ?? i + r.index) - ((l == null ? void 0 : l.order) ?? i + o.index);
    }), n;
  },
  onRenderCell(n, t) {
    var c;
    const { row: e, col: s } = t, { id: i, data: r } = e, { nestedToggle: o, childLabel: a } = s.setting, l = this.getNestedRowInfo(i);
    if (a) {
      const h = Number(r[this.options.nestedParentKey || "parent"]);
      if (!Number.isNaN(h) && h > 0) {
        let d;
        typeof a == "string" ? d = /* @__PURE__ */ m("span", { className: "dtable-child-label label rounded-full size-sm gray-pale", children: tt(a, r) }) : d = /* @__PURE__ */ m(P, { className: "dtable-child-label", content: a, generatorThis: t }), n.unshift(d);
      }
    }
    if (o && (l.children || l.parent) && n.push(
      ((c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, i, s, r)) ?? /* @__PURE__ */ m("a", { className: `${pn} state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${l.state}` }
    ), l.level) {
      let { nestedIndent: h = o } = s.setting;
      h && (h === !0 && (h = this.options.nestedIndent ?? 12), n.push(/* @__PURE__ */ m("div", { className: "dtable-nested-indent", style: { width: h * l.level + "px" } })));
    }
    return n;
  },
  onRenderHeaderCell(n, { row: t, col: e }) {
    var i;
    const { id: s } = t;
    return e.setting.nestedToggle && n.push(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, e, void 0)) ?? /* @__PURE__ */ m("a", { className: `${pn} state`, children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), n;
  },
  onHeaderCellClick(n) {
    const t = n.target;
    if (!(!t || !t.closest(`.${pn}`)))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(n, { rowID: t }) {
    const e = n.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(`.${pn}`)))
      return this.toggleRow(t), !0;
  }
}, vg = vt(yg);
function Zi(n, { row: t, col: e }) {
  const { data: s } = t, i = s ? s[e.name] : void 0;
  if (!(i != null && i.length))
    return n;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${e.name}Avatar`, avatarCodeKey: a, avatarNameKey: l = `${e.name}Name` } = e.setting;
  let { avatarProps: c = {} } = e.setting;
  typeof c == "function" && (c = c(e, t));
  const h = (s ? s[l] : i) || n[0], d = {
    size: "xs",
    src: s ? s[o] : void 0,
    text: h,
    code: a ? s ? s[a] : void 0 : i,
    ...c,
    className: S(r, c.className, "flex-none")
  };
  if (n[0] = /* @__PURE__ */ m(Ys, { ...d }), e.type === "avatarBtn") {
    const { avatarBtnProps: u } = e.setting, f = typeof u == "function" ? u(e, t) : u;
    n[0] = /* @__PURE__ */ m("button", { type: "button", className: "btn btn-avatar", ...f, children: [
      n[0],
      /* @__PURE__ */ m("div", { children: h })
    ] });
  } else
    e.type === "avatarName" && (n[0] = /* @__PURE__ */ m("div", { className: "flex items-center gap-1", children: [
      n[0],
      /* @__PURE__ */ m("span", { children: h })
    ] }));
  return n;
}
const bg = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Zi
    },
    avatarBtn: {
      onRenderCell: Zi
    },
    avatarName: {
      onRenderCell: Zi
    }
  }
}, wg = vt(bg, { buildIn: !0 }), Cg = {
  name: "sort-type",
  defaultOptions: { sortType: !0 },
  when: (n) => !!n.sortType && !n.sort,
  onRenderHeaderCell(n, t) {
    const { col: e } = t, { setting: s } = e;
    let { sortType: i } = s;
    if (e.setting.sort !== void 0 || i === !1)
      return n;
    const { sortLink: r, orderBy: o } = this.options;
    if (o && o[e.name] !== void 0 && (i = o[e.name]), i) {
      const a = i === !0 ? "none" : i, l = /* @__PURE__ */ m("div", { className: `dtable-sort dtable-sort-${a}` });
      n.push(
        { outer: !0, attrs: { "data-sort": a } }
      );
      let { sortLink: c = r } = s;
      if (c) {
        const h = a === "asc" ? "desc" : "asc";
        typeof c == "function" && (c = c.call(this, e, h, a)), typeof c == "string" && (c = { url: c });
        const { url: d, ...u } = c;
        n[0] = /* @__PURE__ */ m("a", { className: "dtable-sort-link", href: tt(d, { ...s, sortType: h }), ...u, children: [
          typeof n[0] != "object" || bt(n[0]) ? n[0] : e.name,
          l
        ] });
      } else
        n.push(l);
    }
    return n;
  }
}, Sg = vt(Cg, { buildIn: !0 }), Ji = (n) => {
  n.length !== 1 && n.forEach((t, e) => {
    !e || t.border !== void 0 || t.setting.group === n[e - 1].setting.group || (t.border = "left");
  });
}, kg = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (n) => !!n.groupDivider,
  onLayout(n) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = n;
    Ji(t.left.list), Ji(t.center.list), Ji(t.right.list);
  }
}, xg = vt(kg);
const $g = {
  name: "header-group",
  defaultOptions: {
    headerGroup: !0
  },
  data() {
    return { headerGroups: /* @__PURE__ */ new Map() };
  },
  when: (n) => !!n.headerGroup,
  beforeLayout(n) {
    const { headerGroups: t } = this.data;
    t.clear();
    const { cols: e } = n;
    if (!(e != null && e.length))
      return;
    const s = {};
    return e.forEach((i, r) => {
      const { headerGroup: o } = i;
      if (!o) {
        s[i.name] = r;
        return;
      }
      let a = t.get(o);
      a ? a.cols.push(i.name) : (a = { cols: [i.name], index: r }, t.set(o, a)), s[i.name] = a.index + a.cols.length / e.length;
    }), e.sort((i, r) => s[i.name] - s[r.name]), {
      headerHeight: !n.headerHeight && n.rowHeight ? n.rowHeight * 2 : void 0,
      cols: e
    };
  },
  onRenderHeaderCell(n, { col: t }) {
    const { headerGroup: e } = t.setting;
    if (e) {
      const s = this.data.headerGroups.get(e), i = this.layout.headerHeight / 2;
      if (t.name === s.cols[0]) {
        const r = s.cols.reduce((a, l) => {
          var c;
          return a + (((c = this.getColInfo(l)) == null ? void 0 : c.realWidth) ?? 0);
        }, 0), o = {
          height: i - 1,
          width: r - 1
        };
        n.push(/* @__PURE__ */ m("div", { class: "dtable-header-group", style: o, children: e }));
      }
      n.push({
        className: "dtable-header-as-group",
        style: { paddingTop: i }
      });
    }
    return n;
  }
}, Eg = vt($g), Tg = {
  name: "cellspan",
  when: (n) => !!n.getCellSpan,
  data() {
    return { cellSpanMap: /* @__PURE__ */ new Map(), overlayCellSet: /* @__PURE__ */ new Set() };
  },
  onLayout(n) {
    const { getCellSpan: t } = this.options;
    if (!t)
      return;
    const { cellSpanMap: e, overlayCellSet: s } = this.data, { rows: i, cols: r, rowHeight: o } = n;
    e.clear(), s.clear();
    const a = (l, c, h) => {
      const { index: d } = c;
      l.forEach((u, f) => {
        const { index: g } = u, _ = `C${g}R${d}`;
        if (s.has(_))
          return;
        const y = t.call(this, { row: c, col: u });
        if (!y)
          return;
        const v = Math.min(y.colSpan || 1, l.length - f), b = Math.min(y.rowSpan || 1, i.length - h);
        if (v <= 1 && b <= 1)
          return;
        let w = 0;
        for (let C = 0; C < v; C++) {
          w += l[f + C].realWidth;
          for (let k = 0; k < b; k++) {
            const $ = `C${g + C}R${d + k}`;
            $ !== _ && s.add($);
          }
        }
        e.set(_, {
          colSpan: v,
          rowSpan: b,
          width: w,
          height: o * b
        });
      });
    };
    i.forEach((l, c) => {
      ["left", "center", "right"].forEach((h) => {
        a(r[h].list, l, c);
      });
    });
  },
  onRenderCell(n, { row: t, col: e }) {
    const s = `C${e.index}R${t.index}`;
    if (this.data.overlayCellSet.has(s))
      n.push({ outer: !0, style: { display: "none", className: "cellspan-overlayed-cell" } });
    else {
      const i = this.data.cellSpanMap.get(s);
      i && n.push({
        outer: !0,
        style: {
          width: i.width,
          height: i.height
        }
      });
    }
    return n;
  }
}, Ng = vt(Tg), Mg = {
  name: "mousemove",
  events: {
    click(n) {
      this.data.ignoreNextClick && (n.preventDefault(), this.data.ignoreNextClick = void 0);
    },
    mousedown() {
      this.data.ignoreNextClick && clearTimeout(this.data.ignoreNextClick);
    },
    mousemove(n) {
      this.data.mmRafID && cancelAnimationFrame(this.data.mmRafID), this.data.mmRafID = requestAnimationFrame(() => {
        this.emitCustomEvent("mousemovesmooth", n), this.data.mmRafID = 0;
      }), n.preventDefault();
    },
    document_mousemove(n) {
      this.data.dmmRafID && cancelAnimationFrame(this.data.dmmRafID), this.data.dmmRafID = requestAnimationFrame(() => {
        this.emitCustomEvent("document_mousemovesmooth", n), this.data.mmRafID = 0;
      });
    }
  },
  methods: {
    ignoreNextClick(n = 10) {
      this.data.ignoreNextClick && clearTimeout(this.data.ignoreNextClick), this.data.ignoreNextClick = window.setTimeout(() => {
        this.data.ignoreNextClick = void 0;
      }, n);
    }
  }
}, Ed = vt(Mg);
function Ag() {
  var w, C, k, $;
  const { scrollToMouse: n } = this.data;
  if (!n)
    return this.stopScrollToMouse();
  const { position: t, startTime: e, delay: s } = n;
  if (!t || Date.now() - e < s)
    return;
  const i = (C = (w = this.ref.current) == null ? void 0 : w.querySelector(".dtable-body")) == null ? void 0 : C.getBoundingClientRect();
  if (!i)
    return;
  const r = ($ = (k = this.ref.current) == null ? void 0 : k.querySelector(".dtable-scroll-center")) == null ? void 0 : $.getBoundingClientRect(), { maxStep: o, detectPadding: a, speed: l, side: c } = n, { x: h, y: d } = t, { top: u, bottom: f } = i, { left: g, right: _ } = r || i;
  let y = 0;
  h < g - a ? y = -Math.max(o, g - a - h) : h > _ - a && (y = Math.max(o, h - (_ - a)));
  let v = 0;
  if (d < u - a ? v = -Math.max(o, u - a - d) : d > f - a && (v = Math.max(o, d - (f - a))), c) {
    const N = new Set((Array.isArray(c) ? c : [c]).reduce((A, I) => (I === "x" ? A.push("left", "right") : I === "y" ? A.push("top", "bottom") : A.push(I), A), []));
    (!N.has("left") && y < 0 || !N.has("right") && y > 0) && (y = 0), (!N.has("top") && v < 0 || !N.has("bottom") && v > 0) && (v = 0);
  }
  const b = {};
  y !== 0 && (b.scrollLeft = this.layout.scrollLeft + l * y), v !== 0 && (b.scrollTop = this.layout.scrollTop + l * v), this.scroll(b);
}
const Ig = {
  name: "autoscroll",
  plugins: [Ed],
  events: {
    document_mousemovesmooth(n) {
      if (!this.data.scrollToMouse)
        return;
      const { clientX: t, clientY: e } = n;
      this.data.scrollToMouse.position = { x: t, y: e };
    }
  },
  methods: {
    scrollTo({ col: n, row: t, extra: e = 2 }) {
      const s = this.getColInfo(n), i = this.getRowInfo(t);
      if (!s && !i)
        return !1;
      const r = {}, { layout: o } = this;
      if (s) {
        const { scrollLeft: a, cols: l } = o, c = s.left + s.realWidth;
        s.left < a ? r.scrollLeft = s.left - e : c > l.center.width + a && (r.scrollLeft = c - l.center.width + e);
      }
      if (i) {
        const { scrollTop: a, rowHeight: l, rowsHeight: c } = o, h = i.top + l;
        i.top < a ? r.scrollTop = i.top - e : h > c + a && (r.scrollTop = h - c + e);
      }
      return this.scroll(r), !0;
    },
    startScrollToMouse(n) {
      const t = {
        interval: 60,
        speed: 0.5,
        delay: 200,
        maxStep: this.options.rowHeight,
        onlyInside: !1,
        detectPadding: 30,
        startTime: Date.now(),
        ...n
      };
      this.data.scrollToMouse = t, clearInterval(this.data.scrollToTimer), this.data.scrollToTimer = window.setInterval(Ag.bind(this), t.interval);
    },
    stopScrollToMouse() {
      clearInterval(this.data.scrollToTimer), this.data.scrollToMouse = void 0;
    }
  },
  onUnmounted() {
    clearInterval(this.data.scrollToTimer);
  }
}, Dg = vt(Ig);
const Lg = {
  name: "sortable",
  defaultOptions: {
    sortable: !0
  },
  when: (n) => !!n.sortable,
  plugins: [Ed, Dg],
  resetState: !0,
  state() {
    return {
      rowOrders: void 0,
      sortingFrom: void 0,
      sortingPos: void 0,
      sortingTo: void 0,
      sortingSide: void 0
    };
  },
  events: {
    click(n) {
      n.target.closest(".dtable-sort-link") && (this.state.rowOrders = void 0);
    },
    mousedown(n) {
      var a;
      if (this.data.disableSortable)
        return;
      const { sortHandler: t = ".dtable-cell" } = this.options;
      if (!p(n.target).closest(t).length)
        return;
      const i = this.getPointerInfo(n);
      if (!i || i.rowID === "HEADER")
        return;
      const r = this.getRowInfo(i.rowID);
      if (!r || ((a = this.options.onSortStart) == null ? void 0 : a.call(this, r, n)) === !1)
        return;
      n.preventDefault();
      const o = n.clientY;
      this.data.sortableInfo = { from: r, offset: o - i.cellElement.getBoundingClientRect().top, startMouseY: o, lastMouseY: o };
    },
    document_mouseup(n) {
      var s;
      const { sortableInfo: t } = this.data;
      if (!t)
        return;
      this.stopScrollToMouse();
      const e = this.getSortingState(n);
      if (e) {
        let i, r;
        const { sortingFrom: o, sortingTo: a, sortingSide: l } = e;
        if (a && l) {
          const c = this.layout.rows.map((f) => f.id), h = [...c], d = o.index, u = a.index;
          if (!(d === u + 1 && l === "after") && !(d === u - 1 && l === "before")) {
            const f = c.splice(d, 1);
            c.splice(u, 0, f[0]), i = {}, r = [], c.forEach((g, _) => {
              i[g] = _, r.push(g);
            }), (h.join() === r.join() || ((s = this.options.onSort) == null ? void 0 : s.call(this, o, a, l, r)) === !1) && (i = void 0, r = void 0);
          }
        }
        (a || Math.abs(t.lastMouseY - t.startMouseY) > 4) && this.ignoreNextClick(), this.disableAnimation(), this.update({
          dirtyType: "layout",
          state: (c) => p.extend({
            sortingFrom: void 0,
            sortingPos: void 0,
            sortingTo: void 0,
            sortingSide: void 0
          }, i ? { rowOrders: {
            ...c.rowOrders,
            ...i
          } } : null)
        }, () => {
          var c;
          (c = this.options.onSortEnd) == null || c.call(this, o, a, l, r), setTimeout(() => {
            this.data.disableCheckable = void 0;
          }, 50);
        });
      }
      this.data.sortableInfo = void 0;
    },
    document_mousemovesmooth(n) {
      const { sortableInfo: t } = this.data;
      if (!t)
        return;
      const e = this.getSortingState(n);
      e && (t.state || (this.startScrollToMouse({ side: "y" }), this.data.disableCheckable = !0), t.lastMouseY = n.clientY, t.state = e, this.setState(e));
    }
  },
  methods: {
    getSortingState(n) {
      var $;
      const { disableSortable: t, sortableInfo: e } = this.data;
      if (t || !e)
        return;
      const { headerHeight: s, footerHeight: i, visibleRows: r, scrollTop: o, rowHeight: a } = this.layout, l = this.element.getBoundingClientRect(), c = l.width, h = l.height - s - i, d = n.clientX - l.left, u = n.clientY - l.top - s;
      if (d < 0 || d > c || u < 0 || u > h)
        return e.state;
      const f = u + o, g = r.find((N) => N.top <= f && N.top + a > f);
      if (!g)
        return e.state;
      const _ = e.from, y = g.id !== _.id ? g.id : void 0, v = y ? this.getRowInfo(y) : void 0, b = u, w = f < g.top + a / 2 ? "before" : "after";
      return v && (($ = this.options.canSortTo) == null ? void 0 : $.call(this, _, v, w)) !== !1 ? {
        sortingFrom: _,
        sortingPos: b,
        sortingTo: v,
        sortingSide: w
      } : {
        sortingFrom: _,
        sortingPos: b,
        sortingTo: void 0,
        sortingSide: void 0
      };
    }
  },
  onAddRows(n) {
    const { rowOrders: t } = this.state;
    if (!t)
      return;
    const e = n.length * 100;
    return n = n.sort((s, i) => {
      const r = t[s.id] ?? e + s.index, o = t[i.id] ?? e + i.index;
      return r - o;
    }), n;
  },
  beforeRender(n) {
    const { sortingFrom: t } = this.state, { visibleRows: e } = n;
    t && (e.some((s) => s.id === t.id) || (n.visibleRows = [...e, t]), n.className = S(n.className, "dtable-sorting"));
  },
  onRenderCell(n, t, e) {
    const { sortingFrom: s, sortingPos: i, sortingTo: r, sortingSide: o } = this.state;
    if (!s)
      return n;
    const a = t.row, l = {}, c = [];
    if (s.id === a.id)
      l.top = i - this.data.sortableInfo.offset + ((e.top ?? a.top) - (a.top - this.layout.scrollTop)), c.push("is-sorting-from");
    else if (r) {
      const h = r.id === a.id;
      h && c.push(`text-primary is-sorting-to is-sorting-to-${o}`), s.index > a.index && (h && o === "before" || a.index > r.index) ? c.push("is-sorting-before") : s.index < a.index && (h && o === "after" || a.index < r.index) && c.push("is-sorting-after");
    }
    return c.length && n.push({
      outer: !0,
      style: l,
      className: c
    }), n;
  }
}, Pg = vt(Lg), Rg = {
  name: "pager",
  state() {
    const n = this.props.localPager;
    if (n) {
      const { page: t = 1, recTotal: e = 0, recPerPage: s = 20, pageTotal: i = 1 } = this.props.footPager || {};
      return {
        pager: {
          page: t,
          recTotal: e,
          recPerPage: s,
          pageTotal: i,
          ...typeof n == "object" ? n : null
        }
      };
    }
    return {};
  },
  footer: {
    pager() {
      let { footPager: n } = this.options;
      const { localPager: t } = this.options;
      return n ? (n = {
        items: [
          {
            type: "link",
            page: "first",
            icon: "icon-first-page"
          },
          {
            type: "link",
            page: "prev",
            icon: "icon-angle-left"
          },
          {
            type: "info",
            text: "{page}/{pageTotal}"
          },
          {
            type: "link",
            page: "next",
            icon: "icon-angle-right"
          },
          {
            type: "link",
            page: "last",
            icon: "icon-last-page"
          }
        ],
        ...n
      }, Array.isArray(n.items) && n.items.forEach((e) => {
        e.type === "size-menu" && e.caret === void 0 && (e.caret = "up");
      }), this.options.localPager && (Object.assign(n, {
        ...typeof t == "object" ? t : null,
        ...this.state.pager,
        recTotal: this.layout.allRows.length,
        useState: !0
      }), n.onChangePageInfo = (e) => {
        this.update({
          dirtyType: "layout",
          state: (s) => ({ pager: { ...s.pager, ...e } })
        });
      }), [/* @__PURE__ */ m(Xo, { ...n })]) : [];
    }
  },
  onAddRows(n) {
    const { localPager: t } = this.options;
    if (t) {
      const { page: e = 1, recPerPage: s = 20 } = {
        ...typeof t == "object" ? t : null,
        ...this.state.pager
      }, i = Math.max(0, Math.min(e, Math.ceil(n.length / s))), r = (i - 1) * s, o = Math.min(i * s, n.length);
      return n.slice(r, o);
    }
  }
}, zg = vt(Rg), Fg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Cd,
  avatar: wg,
  cellspan: Ng,
  checkable: fg,
  custom: ag,
  group: xg,
  headerGroup: Eg,
  nested: vg,
  pager: zg,
  renderDatetime: md,
  renderDatetimeCell: bd,
  renderFormat: la,
  renderFormatCell: _d,
  renderHtmlCell: Lr,
  renderLink: pd,
  renderLinkCell: gd,
  renderMapCell: yd,
  renderStyleMapCell: vd,
  rich: eg,
  sort: ig,
  sortType: Sg,
  sortable: Pg
}, Symbol.toStringTag, { value: "Module" }));
class es extends W {
  get commandScope() {
    return this.options.commandScope || "dtable";
  }
  afterInit() {
    super.afterInit();
    const { commands: t, onCommand: e } = this.options;
    (t || e) && ni(this.element, {
      commands: t,
      scope: this.commandScope,
      onCommand: this.executeCommand.bind(this)
    });
  }
  executeCommand(t, e = []) {
    const { onCommand: s, commands: i } = this.options;
    let r;
    typeof t == "string" && (t = { name: t });
    const { scope: o, name: a } = t, l = i ? i[`${o}~${a}`] || i[a] : null;
    if (l)
      return l.call(this, t, e);
    if (!t.scope || t.scope === this.commandScope) {
      const { name: c } = t;
      r = Zt(this.$, c, e);
    }
    return s && (r = s.call(this, t, e)), r;
  }
  setOptions(t, e) {
    return t = super.setOptions(t, e), t.parent || (t.parent = this.element), t;
  }
}
es.NAME = "DTable";
es.Component = $i;
es.definePlugin = vt;
es.removePlugin = sd;
es.getPlugin = nd;
es.plugins = Fg;
es.register();
ot({ DTable: $i });
class ca extends Y {
  _getClassName(t) {
    return ["kanban-header-col", t.className, t.subCols ? "has-subs" : "", t.parentName !== void 0 ? "is-sub" : ""];
  }
  _getProps(t) {
    const {
      width: e,
      color: s,
      name: i,
      gapLeft: r,
      gapRight: o
    } = t;
    return H(super._getProps(t), {
      style: {
        "--kanban-col-color": s,
        "--kanban-col-width": J(e),
        "--kanban-col-gap-left": J(r),
        "--kanban-col-gap-right": J(o)
      },
      "z-col": i
    });
  }
  _getChildren(t) {
    const {
      prefix: e,
      prefixClass: s,
      title: i,
      titleClass: r,
      titleAlign: o = "center",
      subtitle: a,
      subtitleClass: l,
      icon: c,
      trailingIcon: h,
      actions: d,
      subCols: u
    } = t;
    return [
      /* @__PURE__ */ m("div", { className: `kanban-header-col-wrapper is-align-${o}`, children: [
        /* @__PURE__ */ m("div", { className: "kanban-header-title", children: [
          c ? /* @__PURE__ */ m(rt, { className: "as-leading-icon", icon: c }, "icon") : null,
          e ? /* @__PURE__ */ m("span", { className: S("as-prefix", s), children: /* @__PURE__ */ m(P, { content: e }) }, "prefix") : null,
          i ? /* @__PURE__ */ m("span", { className: S("as-title", r), title: typeof i == "string" ? i : void 0, children: /* @__PURE__ */ m(P, { content: i }) }, "title") : null,
          a ? /* @__PURE__ */ m("span", { className: S("as-subtitle", l), children: /* @__PURE__ */ m(P, { content: a }) }, "subtitle") : null,
          h ? /* @__PURE__ */ m(rt, { className: "as-trailing-icon", icon: h }, "trailingIcon") : null
        ] }, "title"),
        ht.render(d, [t], { key: "actions", className: "kanban-header-col-actions", size: "sm" }, this)
      ] }, "wrapper"),
      u ? /* @__PURE__ */ m("div", { className: "kanban-header-sub-cols", children: u.map((f, g) => /* @__PURE__ */ m(ca, { index: g, ...f }, f.name)) }, "subs") : null
    ];
  }
}
class Og extends O {
  constructor() {
    super(...arguments), this._ref = U();
  }
  componentDidMount() {
    this._ref.current && (this._sticky = wc.ensure(this._ref.current, { scrollContainer: ".kanban-list" }));
  }
  componentWillUnmount() {
    var t;
    (t = this._sticky) == null || t.destroy();
  }
  render(t) {
    return /* @__PURE__ */ m("div", { className: "kanban-header", ref: this._ref, children: [
      /* @__PURE__ */ m("div", { className: "kanban-header-lane-name" }, "name"),
      /* @__PURE__ */ m("div", { className: "kanban-header-cols", children: t.cols.map((e, s) => /* @__PURE__ */ m(ca, { index: s, ...e }, e.name)) }, "cols")
    ] });
  }
}
class Td extends O {
  constructor() {
    super(...arguments), this._listRef = U(), this._renderItem = (t) => {
      const { itemRender: e, lane: s, name: i } = this.props;
      return e.call(this, { item: t, lane: s, col: i });
    }, this._handleScroll = (t) => {
      const { current: e } = this._listRef;
      e && p(e).trigger("laneColScroll", t);
    };
  }
  componentDidMount() {
    const { current: t } = this._listRef;
    t && (this._ob = new ResizeObserver((e) => {
      p(this._listRef.current).trigger("laneColResize", e[0]);
    }), this._ob.observe(t));
  }
  componentWillUnmount() {
    var t;
    (t = this._ob) == null || t.disconnect();
  }
  render(t) {
    const { items: e } = t, {
      width: s,
      color: i,
      content: r,
      contentClass: o,
      itemRender: a,
      itemGap: l,
      watchSize: c,
      name: h,
      lane: d,
      itemCountPerRow: u,
      gapLeft: f,
      gapRight: g,
      laneColClass: _
    } = t, y = {
      "--kanban-col-color": i,
      "--kanban-col-width": J(s),
      "--kanban-col-gap-left": J(f),
      "--kanban-col-gap-right": J(g)
    };
    return /* @__PURE__ */ m("div", { className: S("kanban-lane-col", _), style: y, "z-lane": d, "z-col": h, children: [
      r ? /* @__PURE__ */ m("div", { className: S("kanban-col-content", o), children: /* @__PURE__ */ m(P, { content: r, generatorThis: this, generatorArgs: [t] }) }) : null,
      /* @__PURE__ */ m("div", { className: "kanban-items scrollbar-thin scrollbar-hover", onScroll: this._handleScroll, children: /* @__PURE__ */ m(
        xs,
        {
          forwardRef: c ? this._listRef : void 0,
          itemProps: { className: "kanban-item card-list-item" },
          items: e,
          itemRender: a ? this._renderItem : void 0,
          countPerRow: u,
          gap: l
        },
        "list"
      ) })
    ] });
  }
}
Td.defaultProps = {
  watchSize: !0
};
class Hg extends Y {
  _getClassName(t) {
    const { className: e, index: s, maxHeight: i, height: r } = t;
    return ["kanban-lane", e, { "is-first": !s, "is-auto-height": !i && (!r || r === "auto") }];
  }
  _getProps(t) {
    const {
      height: e,
      minHeight: s,
      maxHeight: i,
      color: r,
      name: o,
      gapTop: a,
      gapBottom: l
    } = t;
    return H(super._getProps(t), {
      style: {
        "--kanban-lane-color": r,
        height: J(e),
        minHeight: J(s),
        maxHeight: J(i),
        "--kanban-col-gap-top": J(a),
        "--kanban-col-gap-bottom": J(l)
      },
      "z-lane": o
    });
  }
  _renderCol(t, e, s, i, r) {
    if (r) {
      const o = r(t, e);
      o && (e = { ...e, ...o });
    }
    return /* @__PURE__ */ m(Td, { itemRender: s, lane: t.name, items: i[e.name], ...e }, e.name);
  }
  _getChildren(t) {
    const {
      title: e,
      titleClass: s,
      actions: i,
      cols: r,
      items: o = {},
      hideName: a,
      itemRender: l,
      getLaneCol: c
    } = t;
    return [
      a ? null : /* @__PURE__ */ m("div", { className: "kanban-lane-name", children: [
        ht.render(i, [t], { key: "actions", className: "kanban-lane-actions", size: "sm" }, this),
        /* @__PURE__ */ m("div", { className: S("kanban-lane-title", s), title: typeof e == "string" ? e : void 0, children: /* @__PURE__ */ m(P, { content: e }) }, "title")
      ] }, "name"),
      /* @__PURE__ */ m("div", { className: "kanban-lane-cols", children: r.reduce((h, d) => (d.subCols ? d.subCols.forEach((u) => {
        h.push(this._renderCol(t, u, l, o, c));
      }) : h.push(this._renderCol(t, d, l, o, c)), h), []) }, "cols")
    ];
  }
}
function Wg(n) {
  const { lanes: t, cols: e, items: s = {}, itemRender: i, hideLaneName: r, getLaneCol: o } = n;
  return /* @__PURE__ */ m("div", { className: "kanban-body", children: t.map((a, l) => /* @__PURE__ */ m(Hg, { index: l, cols: e, items: s[a.name], hideName: r, itemRender: i, getLaneCol: o, ...a }, a.name)) });
}
const xt = 12, Bg = {
  left: "right",
  right: "left",
  top: "bottom",
  bottom: "top",
  "": ""
}, $e = ({ from: n, to: t, fromKanban: e, toKanban: s }) => `${e ? `${e}_` : ""}${n}-${s ? `${s}_` : ""}${t}`;
function xl(n, t) {
  return t === "top" ? { x: n.x + n.width / 2, y: n.y } : t === "left" ? { x: n.x, y: n.y + n.height / 2 } : t === "right" ? { x: n.x + n.width, y: n.y + n.height / 2 } : { x: n.x + n.width / 2, y: n.y + n.height };
}
function jg(n, t) {
  return (n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y);
}
function Ug(n, t, e, s) {
  const i = e ? [e] : ["left", "right", "top", "bottom"], r = s ? [s] : ["left", "right", "top", "bottom"];
  let o = Number.MAX_SAFE_INTEGER, a = { x: 0, y: 0 }, l = { x: 0, y: 0 };
  return i.forEach((c) => {
    r.forEach((h) => {
      const d = xl(n, c), u = xl(t, h), f = jg(d, u) * (Bg[c] === h ? 1 : 2);
      f < o && (o = f, e = c, s = h, a = d, l = u);
    });
  }), {
    fromSide: e,
    toSide: s,
    fromPos: a,
    toPos: l
  };
}
function Vg(n, t) {
  return { x: (n.x + t.x) / 2, y: (n.y + t.y) / 2 };
}
function Nd(n, t) {
  return {
    x: Math.min(n.x, t.x),
    y: Math.min(n.y, t.y),
    width: Math.abs(n.x - t.x),
    height: Math.abs(n.y - t.y)
  };
}
function $l(n, t, e) {
  const s = {
    id: `marker-${t}-${e}-${n}`,
    orient: "auto",
    markerUnits: "strokeWidth",
    refX: t === "start" ? 0 : 6,
    refY: 3,
    markerWidth: 6,
    markerHeight: 6,
    path: {
      d: "",
      fill: "currentColor"
    }
  };
  return n === "arrow" ? t === "start" ? s.path.d = "M6,0 L6,6 L0,3 z" : s.path.d = "M0,0 L0,6 L6,3 z" : n === "dot" ? s.path.d = "M3,3 m-3,0 a 3,3 0 1,1 6,0 a 3,3 0 1,1 -6,0" : n === "square" ? s.path.d = "M0,0 L0,6 L6,6 L6,0 z" : n === "diamond" && (s.path.d = "M3,0 L6,3 L3,6 L0,3 z"), s;
}
function Kg(n, t, e, s, i = "curve", r = 2, o = 1) {
  const {
    x: a,
    y: l,
    width: c,
    height: h
  } = Nd(n, t), d = xt - a, u = xt - l;
  if (i === "curve") {
    const f = c * (1 + Math.max(-0.3, Math.min(0.3, 1 - c / 50))) * o, g = h * (1 + Math.max(-0.3, Math.min(0.3, 1 - h / 50))) * o, _ = r * 5, y = {
      a1x: n.x + (e === "left" ? -_ : e === "right" ? _ : 0),
      a1y: n.y + (e === "top" ? -_ : e === "bottom" ? _ : 0),
      ax: n.x + (e === "left" ? -f : e === "right" ? f : 0),
      ay: n.y + (e === "top" ? -g : e === "bottom" ? g : 0),
      bx: t.x + (s === "left" ? -(f - _) : s === "right" ? f - _ : 0),
      by: t.y + (s === "top" ? -(g - _) : s === "bottom" ? g - _ : 0),
      b1x: t.x + (s === "left" ? -_ : s === "right" ? _ : 0),
      b1y: t.y + (s === "top" ? -_ : s === "bottom" ? _ : 0)
    };
    return `M ${n.x + d} ${n.y + u} L ${y.a1x + d} ${y.a1y + u} C ${y.ax + d} ${y.ay + u} ${y.bx + d} ${y.by + u} ${y.b1x + d} ${y.b1y + u} L ${t.x + d} ${t.y + u}`;
  }
  if (i === "fold") {
    const f = Vg(n, t), g = c / 2, _ = h / 2, y = {
      ax: n.x + (e === "left" ? -g : e === "right" ? g : 0),
      ay: n.y + (e === "top" ? -_ : e === "bottom" ? _ : 0),
      bx: t.x + (s === "left" ? -g : s === "right" ? g : 0),
      by: t.y + (s === "top" ? -_ : s === "bottom" ? _ : 0)
    };
    return `M ${n.x + d} ${n.y + u} L ${y.ax + d} ${y.ay + u} L ${f.x + d} ${f.y + u} L ${y.bx + d} ${y.by + u} L ${t.x + d} ${t.y + u}`;
  }
  return `M ${n.x + d} ${n.y + u} L ${t.x + d} ${t.y + u}`;
}
function Gg(n) {
  const { fromRect: t, toRect: e } = n, s = $e(n), i = { x: t.left, y: t.top, width: t.right - t.left, height: t.bottom - t.top }, r = { x: e.left, y: e.top, width: e.right - e.left, height: e.bottom - e.top }, { fromSide: o, toSide: a, fromPos: l, toPos: c } = Ug(i, r), h = Nd(l, c), { x: d, y: u, width: f, height: g } = h;
  l.x += xt - d, l.y += xt - u, c.x += xt - d, c.y += xt - u;
  const {
    weight: _ = 1.5,
    fromPoint: y,
    toPoint: v = "arrow"
  } = n, b = {
    left: `${0 - xt}px`,
    top: `${0 - xt}px`,
    width: `${f + 2 * xt}px`,
    height: `${g + 2 * xt}px`
  }, w = {
    "stroke-width": _,
    fill: "transparent",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "marker-start": y && y !== "none" ? `url(#marker-start-${s}-${y})` : void 0,
    "marker-end": v && v !== "none" ? `url(#marker-end-${s}-${v})` : void 0,
    d: Kg(l, c, o, a, n.shape, _)
  }, C = {
    "stroke-width": _ + 5,
    "stroke-linejoin": "round",
    fill: "transparent",
    stroke: "currentColor",
    d: w.d,
    class: "opacity-0"
  }, k = {
    width: f + 2 * xt,
    height: g + 2 * xt
  }, $ = [];
  return n.lineStyle === "dashed" ? w["stroke-dasharray"] = `${_ * 3} ${_ * 3}` : n.lineStyle === "dotted" && (w["stroke-dasharray"] = `${_} ${_}`), y && y !== "none" && $.push($l(y, "start", s)), v && v !== "none" && $.push($l(v, "end", s)), {
    x: d,
    y: u,
    width: f,
    height: g,
    fromSide: o,
    toSide: a,
    fromPos: l,
    toPos: c,
    nodeStyle: b,
    svgPathProps: w,
    svgPathBackProps: C,
    svgProps: k,
    markers: $,
    padding: xt
  };
}
class Md extends O {
  constructor() {
    super(...arguments), this.state = {}, this._handleMouseHover = (t) => {
      this.setState({ hover: t.type === "mouseenter" });
    }, this._onDelete = () => {
      var t;
      (t = this.props.onDelete) == null || t.call(this, this.props);
    };
  }
  render(t, e) {
    const { text: s, textSize: i, color: r, onDelete: o, weight: a = 1.5, from: l, to: c } = t, { hover: h } = e, { x: d, y: u, padding: f, width: g, height: _, svgProps: y, markers: v, svgPathProps: b, svgPathBackProps: w, fromPos: C } = Gg(t);
    return /* @__PURE__ */ m("div", { className: S("kanban-link", h ? "is-hover" : ""), style: { left: d, top: u, width: g, height: _, color: r, "--kanban-link-weight": a }, "z-from": l, "z-to": c, onMouseEnter: o ? this._handleMouseHover : void 0, onMouseLeave: o ? this._handleMouseHover : void 0, children: [
      /* @__PURE__ */ m("svg", { ...y, xmlns: "http://www.w3.org/2000/svg", version: "1.1", children: [
        v.length ? /* @__PURE__ */ m("defs", { children: v.map(({ path: k, id: $, ...N }) => /* @__PURE__ */ m("marker", { ...N, id: $, children: /* @__PURE__ */ m("path", { ...k }) }, $)) }) : null,
        /* @__PURE__ */ m("path", { ...w }),
        /* @__PURE__ */ m("path", { ...b })
      ] }),
      /* @__PURE__ */ m("div", { className: "kanban-link-start-point", style: { left: C.x - f, top: C.y - f } }),
      o ? /* @__PURE__ */ m("div", { className: "kanban-link-delete-btn", children: /* @__PURE__ */ m("button", { type: "button", className: "btn rounded-full size-sm square primary", onClick: this._onDelete, children: /* @__PURE__ */ m("i", { className: "close" }) }) }) : null,
      s ? /* @__PURE__ */ m("div", { className: "kanban-link-text", style: { fontSize: `${i || 12}px` }, children: s }) : null
    ] });
  }
}
const Ms = ".kanban";
class qg extends O {
  constructor() {
    super(...arguments), this._ref = U(), this.state = {};
  }
  componentDidMount() {
    const t = this._ref.current, { container: e = ".kanban" } = this.props, s = t.closest(e), i = p(s);
    this._container = s, this._multiKanban = i.find(".kanban").length > 1;
    const r = ".kanban-item,.kanban-link-editor-from";
    i.on(`mouseenter${Ms}`, r, (o) => {
      if (this.state.dragPos)
        return;
      clearTimeout(this._leaveTimer);
      const a = p(o.target).closest(r), l = a.z("key");
      this.state.from === l || a.hasClass("is-dragging") || this.setState({
        from: l,
        fromKanban: this._multiKanban ? a.closest(".kanban").z("key") : void 0,
        to: void 0,
        fromRect: this._getRect(a.children()[0]),
        dragPos: void 0
      });
    }).on(`mouseleave${Ms}`, r, () => {
      this.state.dragPos || (clearTimeout(this._leaveTimer), this._leaveTimer = window.setTimeout(() => {
        this._cancelHover(), this._leaveTimer = 0;
      }, 200));
    }).on(`dragstart${Ms}`, ".kanban-item", () => {
      this.state.dragPos || this._cancelHover();
    }).on(`laneColScroll${Ms}`, (o) => {
      const { from: a } = this.state;
      a && this.setState({ fromRect: this._getRect(p(o.target).find(`.kanban-item[z-key="${a}"]`).children()[0]) });
    }), this._moveable = new Xs(t, {
      selector: ".kanban-link-editor-point",
      move: "none",
      onMoveStart: () => {
        if (!this.state.from)
          return !1;
        i.addClass("is-adding-link");
      },
      onMove: (o) => {
        const { top: a, left: l } = s.getBoundingClientRect(), c = { left: o.clientX - l + s.scrollLeft, top: o.clientY - a + s.scrollTop };
        let h, d, u;
        const f = p(o.target).closest(r);
        f.length && h !== this.state.from && (h = f.attr("z-key"), u = this._multiKanban ? f.closest(".kanban").z("key") : void 0, d = this._getRect(f.children()[0])), this.setState({ dragPos: c, to: h, toKanban: u, toRect: d });
      },
      onMoveEnd: () => {
        const { from: o, fromKanban: a, to: l, toKanban: c } = this.state, { onAddLink: h } = this.props;
        (o !== l || a !== c) && h && o !== void 0 && l !== void 0 && (h == null || h.call(this, { from: o, fromKanban: a, to: l, toKanban: c })), this._cancelHover(), i.removeClass("is-adding-link");
      }
    });
  }
  componentWillUnmount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    t && p(t).off(Ms), this._raf && cancelAnimationFrame(this._raf);
  }
  _getRect(t) {
    const e = t.getBoundingClientRect(), s = this._container, { top: i, left: r } = s.getBoundingClientRect();
    return {
      left: e.left - r + s.scrollLeft,
      top: e.top - i + s.scrollTop,
      width: e.width,
      height: e.height
    };
  }
  _cancelHover() {
    this.setState({
      from: void 0,
      to: void 0,
      fromRect: void 0,
      dragPos: void 0
    });
  }
  _renderLink(t) {
    const { fromRect: e, toRect: s, from: i, to: r = "", dragPos: o } = t;
    if (!e || !i || !o)
      return null;
    const a = s ? {
      left: s.left,
      top: s.top,
      right: s.left + s.width,
      bottom: s.top + s.height
    } : {
      left: o.left,
      top: o.top,
      right: o.left,
      bottom: o.top
    };
    return /* @__PURE__ */ m(
      Md,
      {
        from: i,
        to: r,
        lineStyle: "dotted",
        color: "var(--color-primary-500)",
        fromRect: {
          left: e.left,
          top: e.top,
          right: e.left + e.width,
          bottom: e.top + e.height
        },
        toRect: a
      },
      "link"
    );
  }
  render(t, e) {
    const { from: s, fromRect: i, to: r, toRect: o } = e;
    let a, l;
    return s && i && (a = /* @__PURE__ */ m("div", { className: "kanban-link-editor-from not-moveable", "z-key": s, style: i, children: [
      /* @__PURE__ */ m("div", { className: "kanban-link-editor-point is-left" }),
      /* @__PURE__ */ m("div", { className: "kanban-link-editor-point is-top" }),
      /* @__PURE__ */ m("div", { className: "kanban-link-editor-point is-right" }),
      /* @__PURE__ */ m("div", { className: "kanban-link-editor-point is-bottom" })
    ] })), r && o && (l = /* @__PURE__ */ m("div", { className: "kanban-link-editor-to", "z-key": r, style: o })), /* @__PURE__ */ m("div", { className: S("kanban-link-editor"), ref: this._ref, children: [
      a,
      l,
      this._renderLink(e)
    ] });
  }
}
const Xi = ".kanban";
class Ad extends O {
  constructor() {
    super(...arguments), this._ref = U(), this._watchSet = /* @__PURE__ */ new Set(), this.state = { layout: {}, scrollTop: 0, scrollLeft: 0 };
  }
  componentDidMount() {
    var i;
    const { container: t = ".kanban" } = this.props, e = (i = this._ref.current) == null ? void 0 : i.closest(t), s = p(e);
    this._multiKanban = s.find(".kanban").length > 1, s.on(`laneColResize${Xi} laneColScroll${Xi}`, () => {
      this._tryUpdateLayout();
    }), this._container = e, this._tryUpdateLayout();
  }
  componentWillUnmount() {
    const t = this._container;
    t && p(t).off(Xi), this._raf && cancelAnimationFrame(this._raf);
  }
  componentDidUpdate(t) {
    (t.links !== this.props.links || t.filters !== this.props.filters) && this._tryUpdateLayout();
  }
  _tryUpdateLayout() {
    this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
      this._updateLayout(), this._raf = 0;
    });
  }
  _updateLayout() {
    const t = [...this._watchSet], e = this._container, s = p(e), { top: i, left: r } = e.getBoundingClientRect(), o = e.scrollTop - i, a = e.scrollLeft - r, l = {};
    t.forEach((c) => {
      const [h, d] = c.split("_"), u = s.find(`${this._multiKanban ? `.kanban[z-key="${h}"] ` : ""}.kanban-item[z-key="${d}"]`).children()[0];
      if (u && qs(u, { container: ".kanban-lane-col" })) {
        const { top: f, left: g, bottom: _, right: y } = u.getBoundingClientRect();
        l[c] = { top: f + o, left: g + a, bottom: _ + o, right: y + a };
      }
    }), this.setState({ layout: l });
  }
  _renderLink(t) {
    const { layout: e } = this.state, { from: s, fromKanban: i = "", to: r, toKanban: o = "" } = t, a = `${i}_${s}`, l = `${o}_${r}`, c = e[a], h = e[l];
    return this._watchSet.add(a), this._watchSet.add(l), !c || !h ? null : /* @__PURE__ */ m(Md, { ...t, fromRect: c, toRect: h, onDelete: this.props.onDeleteLink }, `${s}-${r}`);
  }
  _renderLinks(t) {
    const { links: e, filters: s } = t, i = new Set(s), r = (o) => {
      const { from: a, to: l, fromKanban: c = "", toKanban: h = "" } = o;
      return this._multiKanban ? i.has(`${c}_${a}`) || i.has(`${h}_${l}`) || i.has(c) || i.has(h) || i.has($e(o)) : i.has(a) || i.has(l) || i.has(`${a}-${l}`);
    };
    return e.reduce((o, a) => {
      if (!s || r(a)) {
        const l = this._renderLink(a);
        l && o.push(l);
      }
      return o;
    }, []);
  }
  _renderEditor(t) {
    const { editLinks: e, onAddLink: s, container: i } = t;
    return e ? /* @__PURE__ */ m(qg, { container: i, onAddLink: s }, "editor") : null;
  }
  render(t) {
    return this._watchSet.clear(), /* @__PURE__ */ m("div", { className: "kanban-links", ref: this._ref, children: [
      this._renderLinks(t),
      this._renderEditor(t)
    ] });
  }
}
function Yg(n, t, e) {
  if (!n || !n.length)
    return [];
  const { getCol: s, colProps: i, itemCountPerRow: r, itemGap: o } = t;
  let a = !1;
  const l = [], c = /* @__PURE__ */ new Map();
  return n = n.reduce((h, d, u) => {
    if (d = H({ itemGap: o, itemCountPerRow: r }, i, d), s) {
      const f = s.call(this, d);
      f !== !1 && (d = f || d);
    }
    return d.deleted || (typeof d.order == "number" ? a = !0 : d.order = u, typeof d.name != "string" && (d.name = String(d.name)), e == null || e.call(this, d), d.parentName !== void 0 ? (d.parentName = String(d.parentName), l.push(d)) : (c.set(d.name, d), h.push(d))), h;
  }, []), l.forEach((h) => {
    const d = c.get(h.parentName);
    d && (d.subCols = de(d.subCols, [h], "name"));
  }), a && (n.sort(Ks), [...c.values()].forEach((h) => {
    h.subCols && h.subCols.sort(Ks);
  })), n;
}
function Zg(n, t, e) {
  if (!n || !n.length)
    return [];
  const { getLane: s, laneProps: i } = t;
  let r = !1;
  return n = n.reduce((o, a, l) => {
    if (i && (a = H({}, i, a)), s) {
      const c = s.call(this, a);
      c !== !1 && (a = c || a);
    }
    return a.deleted || (typeof a.order == "number" ? r = !0 : a.order = l, a.color === void 0 && (a.color = `hsl(${43 * gc(a.name) % 360}deg 40% 50%)`), typeof a.name != "string" && (a.name = String(a.name)), e == null || e.call(this, a), o.push(a)), o;
  }, []), r && n.sort(Ks), n;
}
function El(n, t, e, s, i) {
  if (!(n != null && n.length))
    return [];
  const { itemProps: r, getItem: o } = s;
  let a = !1;
  return n = n.reduce((l, c) => {
    r && (c = H({}, r, c));
    const h = (o == null ? void 0 : o.call(this, { col: e.name, lane: t.name, item: c, laneInfo: t, colInfo: e })) ?? c;
    return h !== !1 && !h.deleted && (typeof h.order == "number" ? a = !0 : h.order = l.length - 1, l.push(h), i == null || i.call(this, h)), l;
  }, []), a && n.sort(Ks), n;
}
function Ks(n, t) {
  return n.order - t.order;
}
function de(n, t, e = "key") {
  if (!n)
    return t ? [...t] : [];
  const s = [...n];
  if (t) {
    let i = 0;
    const r = s.reduce((o, a, l) => (o.set(String(a[e] ?? l), l), i = Math.max(a.order ?? l, i), o), /* @__PURE__ */ new Map());
    t.forEach((o) => {
      const a = String(o[e]);
      r.has(a) ? s[r.get(a)] = {
        ...s[r.get(a)],
        ...o
      } : s.push({
        order: i++,
        ...o
      });
    });
  }
  return s;
}
function Id(n, t) {
  return Array.isArray(n) ? n.map((e) => ({
    ...e,
    [t]: String(e[t])
  })) : Object.keys(n).reduce((e, s) => {
    const i = n[s];
    return Object.keys(i).forEach((r) => {
      e.push(...(i[r] || []).map((o) => ({
        ...o,
        lane: s,
        col: r,
        [t]: String(o[t])
      })));
    }), e;
  }, []);
}
function Tl(n, t) {
  const { items: e = [], ...s } = n;
  return {
    items: Id(e, t),
    ...s
  };
}
function Pr(n, t, e) {
  var a;
  const s = de(n.lanes, t.lanes, "name"), i = de(n.cols, t.cols, "name"), r = de(n.links, (a = t.links) == null ? void 0 : a.map((l) => (l[e] === void 0 && (l[e] = $e(l)), l)), e), o = de(n.items, Id(t.items || [], e), e);
  return { lanes: s, cols: i, items: o, links: r };
}
let en = class extends Y {
  constructor() {
    super(...arguments), this._ref = U(), this._raf = 0, this._data = new cs(this._getData.bind(this), () => {
      const { getCol: t, colProps: e, itemCountPerRow: s, itemGap: i, getLane: r, laneProps: o, itemProps: a, getItem: l, getLink: c, linkProps: h, responsive: d } = this.props;
      return [
        this._kanbanData,
        t,
        e,
        s,
        i,
        r,
        o,
        a,
        l,
        h,
        c,
        d
      ];
    }), this._kanbanData = new cs(() => {
      const { itemKey: t, props: e } = this, { data: s } = e, { data: i, changes: r } = this.state, o = (i || Ma(s) ? i : Tl(s, t)) || {};
      return r ? Pr(o, r, t) : o;
    }, () => {
      const { data: t, changes: e, selected: s } = this.state;
      return [
        t,
        e,
        s,
        this.props.data
      ];
    }), this._handleGlobalClick = (t) => {
      p(t.target).closest(".kanban-item").length || this.select([]);
    }, this._onAddLink = async (t) => {
      const { onAddLink: e } = this.props;
      t[this.itemKey] = $e(t), await (e == null ? void 0 : e.call(this, t)) !== !1 && this.addLink(t);
    }, this._onDeleteLink = async (t) => {
      const { onDeleteLink: e } = this.props;
      await (e == null ? void 0 : e.call(this, t)) !== !1 && this.deleteLink(t);
    }, this._handleMouseMove = (t) => {
      this._hoverTimer && clearTimeout(this._hoverTimer);
      const e = this._getElementInfo(t.target), s = (e == null ? void 0 : e.type) === "item" ? e.key : void 0;
      this._hoverTimer = window.setTimeout(() => {
        s !== this.state.hover && this.setState({ hover: s }, () => {
          p(this._ref.current).trigger("kanbanItemHover", { kanban: this.props.key, hover: s });
        }), this._hoverTimer = 0;
      }, !s && this.state.hover ? 0 : 20);
    }, this._handleClick = (t) => {
      if (t.target.closest("a,button"))
        return;
      const { onClickItem: e, selectable: s } = this.props, i = this._getElementInfo(t.target);
      e && (i == null ? void 0 : i.type) === "item" && e.call(this, t, i) === !1 || s && (i == null ? void 0 : i.type) === "item" && this.select(i.key, !0);
    };
  }
  get data() {
    return this._data.cache;
  }
  get itemKey() {
    return this.props.itemKey || "id";
  }
  componentDidMount() {
    this._afterRender(!0), this.tryLoad(), this._initDraggable();
    const { responsive: t, selectable: e } = this.props, s = this._ref.current;
    if (s && t) {
      const i = new ResizeObserver(this.updateLayout.bind(this));
      p(typeof t != "boolean" ? t : s.closest(".kanban-list") || s.parentElement).each((o, a) => {
        i.observe(a);
      }), this._rob = i, this.state.containerWidth || this.updateLayout();
    }
    e && p(document).on("click.kanban", this._handleGlobalClick);
  }
  componentDidUpdate() {
    this._afterRender(!1), this.tryLoad();
  }
  componentWillUnmount() {
    var t, e, s;
    (t = this.props.beforeDestroy) == null || t.call(this), (e = this._draggable) == null || e.destroy(), (s = this._rob) == null || s.disconnect(), this.props.selectable && p(document).off("click.kanban", this._handleGlobalClick);
  }
  getDefaultState(t) {
    return {
      loading: !1,
      selected: (t || this.props).defaultSelected,
      data: void 0,
      changes: void 0,
      loadFailed: void 0
    };
  }
  load() {
    const { data: t, onLoad: e, onLoadFail: s } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0 }, async () => {
      const i = { loading: !1 };
      try {
        const r = Tl(await Je(t, [this], { throws: !0 }), this.itemKey);
        i.data = (e == null ? void 0 : e.call(this, r)) || r;
      } catch (r) {
        i.loadFailed = (typeof s == "function" ? s.call(this, r) : s) || String(r);
      }
      this.setState(i);
    });
  }
  updateLayout() {
    this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
      this._raf = 0;
      const t = this._ref.current;
      if (t) {
        const { responsive: e, laneNameWidth: s = 20 } = this.props, i = p(typeof e != "boolean" ? e : t.closest(".kanban-list") || t.parentElement), r = i[0];
        let o = i.width() - s - (r.offsetWidth - r.clientWidth);
        const a = t.closest(".kanban-region");
        a && (o -= a.clientWidth - p(a).width()), this.setState({ containerWidth: o });
      }
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { data: e } = this.props;
    t || !e || !Ma(e) || e === this._loadedSetting || this.load();
  }
  getCol(t) {
    return this.data.colMap.get(String(t));
  }
  getLane(t) {
    return t = String(t), this.data.lanes.find((e) => e.name === t);
  }
  getItem(t) {
    return this.data.map.get(String(t));
  }
  update(t) {
    return this.changeState((e) => ({
      changes: Pr({ ...e.changes }, t, this.itemKey)
    }));
  }
  createSnap() {
    return {
      date: Date.now(),
      kanban: this,
      data: p.extend(!0, {}, this._data),
      restore() {
        this.kanban.changeState({ changes: this.data });
      }
    };
  }
  addItem(t, e, s) {
    return this.updateItem(t, e, s);
  }
  updateItem(t, e, s) {
    const i = Array.isArray(t) ? t : [t];
    return this.update({
      items: e || s ? i.map((r) => ({
        ...r,
        lane: e ?? r.lane,
        col: s ?? r.col
      })) : i
    });
  }
  deleteItem(t) {
    return this.updateItem(Array.isArray(t) ? t.map((e) => ({ [this.props.itemKey || "id"]: e, deleted: !0 })) : { [this.itemKey]: t, deleted: !0 });
  }
  updateLane(t) {
    return this.update({
      lanes: Array.isArray(t) ? t : [t]
    });
  }
  addLane(t) {
    return this.updateLane(t);
  }
  deleteLane(t) {
    return this.updateLane(Array.isArray(t) ? t.map((e) => ({ name: e, deleted: !0 })) : { name: t, deleted: !0 });
  }
  updateCol(t) {
    return this.update({
      cols: Array.isArray(t) ? t : [t]
    });
  }
  addCol(t) {
    return this.updateCol(t);
  }
  deleteCol(t) {
    return this.updateCol(Array.isArray(t) ? t.map((e) => ({ name: e, deleted: !0 })) : { name: t, deleted: !0 });
  }
  updateLink(t, e) {
    return this.update({
      links: (Array.isArray(t) ? t : [t]).map((s) => ({
        deleted: !1,
        ...s,
        ...e,
        [this.itemKey]: $e(s)
      }))
    });
  }
  addLink(t) {
    return this.updateLink(t);
  }
  deleteLink(t) {
    return this.updateLink(t, { deleted: !0 });
  }
  select(t, e) {
    let s = Array.isArray(t) ? t : t ? [t] : [], i = this.state.selected || [];
    const { onSelect: r } = this.props;
    return this.changeState((o) => {
      if (i = o.selected || [], e) {
        const a = new Set(i), l = /* @__PURE__ */ new Set();
        return s.forEach((c) => {
          a.has(c) ? a.delete(c) : l.add(c);
        }), s = [...a, ...l], { selected: s };
      }
      return { selected: s };
    }, () => {
      r == null || r(s, i), p(this._ref.current).trigger("kanbanItemSelected", { kanban: this.props.key, selected: s, oldSelected: i });
    });
  }
  _getElementInfo(t) {
    const e = p(t), s = e.closest(".kanban-item");
    if (s.length) {
      const a = s.attr("z-key");
      if (a) {
        const l = this.getItem(a);
        if (l)
          return { type: "item", key: a, element: t, item: l, lane: l.lane, col: l.col };
      }
    }
    if (e.closest(".kanban-new-item").length)
      return { type: "newItem", element: t };
    const r = e.closest(".kanban-header-col,.kanban-lane-col");
    if (r.length)
      return { type: "col", element: t, col: r.attr("z-col"), lane: r.attr("z-lane") };
    const o = e.closest(".kanban-lane").attr("z-lane");
    if (o !== void 0)
      return { type: "lane", element: t, lane: o };
  }
  _getDropInfo(t, e, s) {
    const i = this._getElementInfo(e);
    if (!i)
      return;
    const r = this._getElementInfo(s);
    if (!r || r.element.closest(".kanban") !== this.element)
      return;
    let o;
    if (i.type === "item" && r.type === "col")
      o = "inside";
    else {
      const a = s.getBoundingClientRect();
      i.type === "col" ? o = t.clientX < a.left + a.width / 2 ? "before" : "after" : o = t.clientY < a.top + a.height / 2 ? "before" : "after";
    }
    return {
      side: o,
      event: t,
      drag: i,
      drop: r
    };
  }
  _getDropChanges(t) {
    const { drag: e, drop: s } = t, i = this.data, r = {}, { itemKey: o } = this, a = {
      list: [],
      lane: s.lane,
      col: s.col
    };
    if (e.type === "item") {
      const l = e.item, c = i.items[s.lane][s.col], h = [...c], d = {
        [o]: l[o],
        order: l.order
      }, u = s.col === l.col, f = s.lane === l.lane;
      if (u && f && l[o] === s.item[o])
        return { changes: r, data: a };
      u || (d.col = s.col), f || (d.lane = s.lane);
      let g = !1;
      if (s.type === "col" && (!f || !u))
        h.push(d), g = !0;
      else if (s.type === "item") {
        const _ = s.item, y = s.col !== l.col || s.lane !== l.lane ? -1 : h.findIndex((b) => b[o] === l[o]);
        y >= 0 && h.splice(y, 1);
        const v = h.findIndex((b) => b[o] === _[o]);
        h.splice(t.side === "before" ? v : v + 1, 0, d), g = !0;
      }
      if (g) {
        r.items = [];
        let _ = -1;
        h.forEach((y, v) => {
          const b = Math.max(0, _ + 1, y.order ?? v), w = c[v];
          _ = b, (w !== y || b !== w.order) && (y = {
            ...y,
            order: b
          }), y !== w && r.items.push(y), a.list.push(y[o]);
        });
      }
    } else if (e.type === "newItem") {
      const { onDropNewItem: l } = this.props;
      let c;
      if (l ? c = l.call(this, t) : (c = p(e.element).data(), c != null && c.item && (c = c.item)), c = {
        lane: s.lane,
        col: s.col,
        ...c
      }, c != null && c[o]) {
        const d = [...i.items[s.lane][s.col]];
        d.push(c), r.items = d, a.list.push(c[o]);
      }
    }
    return { changes: r, data: a };
  }
  _initDraggable() {
    const { draggable: t } = this.props, e = this._ref.current;
    if (!t || !e)
      return;
    const { dragTypes: s = ["item", "newItem"], onDragStart: i, onDrop: r, canDrop: o, dropRules: a } = this.props, l = typeof s == "string" ? s.split(",") : s, c = {
      item: ".kanban-item",
      lane: ".kanban-lane-name",
      col: ".kanban-header-col",
      newItem: ".kanban-new-item"
    }, h = typeof t == "object" ? t : {}, d = (f, g) => {
      p(f).attr({
        "z-drag-type": g ? g.drag.type : null,
        "z-drop-type": g ? g.drop.type : null,
        "z-drop-side": g ? g.side : null
      });
    }, u = {
      ...h,
      selector: h.selector || l.map((f) => c[f] || "").filter(Boolean).join(","),
      target: h.target || ((f) => {
        const g = this._getElementInfo(f);
        if (!g)
          return;
        const _ = {
          lane: ".kanban-lane",
          col: ".kanban-header-col",
          item: ".kanban-item,.kanban-items",
          newItem: ".kanban-item,.kanban-items"
        }[g.type];
        return p(e).find(_);
      }),
      canDrop: h.canDrop || o || a ? (f, g, _) => {
        const y = this._getElementInfo(g);
        if (!y)
          return !1;
        const v = this._getElementInfo(_);
        if (!v || v.element.closest(".kanban") !== this.element)
          return !1;
        if (y.type === "item" && a) {
          const b = y.col, w = v.col, C = y.lane, k = v.lane, $ = a[`${C}:${b}`] ?? a[b];
          return typeof $ == "boolean" ? $ : !$ || $.includes(w) || $.includes(`${k}:${w}`) || $.includes(`${k}:`);
        }
        if (o)
          return o.call(this, y, v);
      } : void 0,
      onDragStart: (f, g) => {
        var y;
        const _ = this._getElementInfo(g);
        return _ ? i ? i.call(this, { event: f, drag: _ }) : (y = h.onDragStart) == null ? void 0 : y.call(this, f, g) : !1;
      },
      onDragOver: (f, g, _) => {
        const y = this._getDropInfo(f, g, _);
        y && d(_, y);
      },
      onDragLeave: (f, g, _) => {
        d(_);
      },
      onDrop: (f, g, _) => {
        var v;
        d(_);
        const y = this._getDropInfo(f, g, _);
        if (!y)
          return !1;
        if (r) {
          const { changes: b, data: w } = this._getDropChanges(y);
          if (Object.keys(b).length) {
            y.data = w;
            const C = this.createSnap();
            r.call(this, b, y, C.restore) !== !1 && this.update(b);
          }
        }
        return (v = h.onDrop) == null ? void 0 : v.call(this, f, g, _);
      }
    };
    this._draggable = new ui(e, u);
  }
  _afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  _getData() {
    const { itemKey: t, props: e } = this, s = this._kanbanData.value;
    let i = !1;
    const { items: r = [] } = s, o = {}, a = /* @__PURE__ */ new Map(), l = Yg.call(this, s.cols, e, (y) => {
      y.parentName !== void 0 && (i = !0), a.set(y.name, y);
    }), c = Zg.call(this, s.lanes, e, (y) => {
      o[y.name] = l.reduce((v, b) => (b.subCols ? b.subCols.forEach((w) => {
        v[w.name] = [];
      }) : v[b.name] = [], v), {});
    }), h = /* @__PURE__ */ new Set(), d = r.reduce((y, v) => {
      if (v.deleted)
        return h.add(v[t]), y;
      y.set(v[t], v);
      const b = o[v.lane];
      if (b) {
        const w = b[v.col];
        w && w.push(v);
      }
      return y;
    }, /* @__PURE__ */ new Map()), { selected: u = [] } = this.state, f = new Set(u), g = (y) => {
      y.selected = f.has(y[t]);
    };
    c.forEach((y) => {
      const v = o[y.name];
      v && l.forEach((b) => {
        var w;
        v[b.name] = El.call(this, v[b.name], y, b, e, g), (w = b.subCols) == null || w.forEach((C) => {
          v[C.name] = El.call(this, v[C.name], y, C, e, g);
        });
      });
    });
    let { links: _ = [] } = s;
    return _ = _.reduce((y, v) => {
      var b;
      if (!v.deleted && d.has(v.from) && d.has(v.to) && !h.has(v.from) && !h.has(v.to)) {
        v[t] === void 0 && (v[t] = $e(v));
        const w = ((b = e.getLink) == null ? void 0 : b.call(this, v)) ?? v;
        w !== !1 && !w.deleted && y.push(w);
      }
      return y;
    }, []), { cols: l, lanes: c, items: o, map: d, colMap: a, links: _, hasSubCols: i };
  }
  _layoutCols(t, e) {
    const { containerWidth: s = 0 } = this.state, { colsGap: i = 8, minColWidth: r = 150, maxColWidth: o = 600, colWidth: a = 200 } = e, l = [];
    let c = 0;
    const h = (d) => {
      const { minWidth: u = r, maxWidth: f = o } = d;
      let { width: g = a } = d;
      typeof g == "function" && (g = g.call(this, d));
      const _ = g === "auto";
      if (_)
        g = u;
      else {
        const [y, v] = me(g);
        v === "%" ? g = s * y / 100 : g = y;
      }
      return g = Math.min(f, Math.max(u, g)), c += g + (c ? i : 0), d = { ...d, width: g, maxWidth: f, minWidth: u }, _ && l.push(d), d;
    };
    if (t = t.map((d) => d.subCols ? {
      ...d,
      subCols: d.subCols.map(h)
    } : h(d)), l.length && c < s) {
      const d = Math.floor((s - c) / l.length);
      l.forEach((u) => {
        u.width = Math.min(u.maxWidth, Math.max(u.minWidth, u.width + d));
      });
    }
    return t;
  }
  _layoutLanes(t, e) {
    const { laneHeight: s, maxLaneHeight: i, minLaneHeight: r } = e;
    return !s && !i && !r ? t : t.map((o) => ({
      height: typeof s == "function" ? s.call(this, o) : s,
      maxHeight: i,
      minHeight: r,
      ...o
    }));
  }
  _getClassName(t) {
    return ["kanban", t.className, t.sticky ? "kanban-sticky" : "", this.data.hasSubCols ? "has-sub-cols" : ""];
  }
  _getProps(t) {
    const { laneNameWidth: e, colsGap: s, lanesGap: i, selectable: r, onClickItem: o, showLinkOnHover: a } = t;
    return H(super._getProps(t), {
      ref: this._ref,
      style: {
        "--kanban-lane-name-width": e,
        "--kanban-cols-gap": J(s),
        "--kanban-lanes-gap": J(i)
      },
      onClick: o || r ? this._handleClick : void 0,
      onMouseMove: a ? this._handleMouseMove : void 0
    });
  }
  _renderLinks(t) {
    const { links: e = [] } = this.data, { editLinks: s } = t;
    if (!s && !e.length)
      return;
    const { showLinkOnHover: i, showLinkOnSelected: r } = t;
    let o;
    if (r || i) {
      o = [];
      const { selected: a, hover: l } = this.state;
      r && a && o.push(...a), i && l && o.push(l), o = [...new Set(o)];
    }
    return /* @__PURE__ */ m(
      Ad,
      {
        links: e,
        filters: o,
        editLinks: s,
        onDeleteLink: s ? this._onDeleteLink : void 0,
        onAddLink: s ? this._onAddLink : void 0
      },
      "links"
    );
  }
  _getChildren(t) {
    const e = this._data.value, { cols: s, lanes: i, items: r } = e, { laneNameWidth: o } = t, a = this._layoutCols(s, t), l = this._layoutLanes(i, t);
    return [
      /* @__PURE__ */ m(Og, { cols: a }, "header"),
      /* @__PURE__ */ m(
        Wg,
        {
          itemRender: t.itemRender,
          getLaneCol: t.getLaneCol,
          cols: a,
          lanes: l,
          items: r,
          hideLaneName: o === 0
        },
        "body"
      ),
      this._renderLinks(t),
      t.children
    ];
  }
};
en.defaultProps = {
  draggable: !0,
  sticky: !0,
  responsive: !0,
  itemKey: "id",
  colWidth: 200,
  colsGap: 8
};
en.customProps = ["onDrop", "onDragStart"];
class Nl extends Y {
  constructor() {
    super(...arguments), this._kanbanRefs = /* @__PURE__ */ new Map(), this._needUpdateData = /* @__PURE__ */ new Map(), this._handleClickHeading = (t) => {
      p(t.target).closest("a,.btn,button").not(".kanban-region-toggle").length || this.setState((e) => ({ collapsed: !e.collapsed }));
    };
  }
  componentDidUpdate() {
    if (this.state.collapsed)
      return;
    const t = this._needUpdateData;
    [...t.keys()].forEach((e) => {
      const s = this.getKanban(e);
      s && (s.update(t.get(e)), t.delete(e));
    });
  }
  getDefaultState(t) {
    return {
      collapsed: (t || this.props).collapsed,
      heading: void 0,
      items: void 0
    };
  }
  resetState(t, e) {
    this._kanbanRefs.forEach((s) => {
      var i;
      return (i = s.current) == null ? void 0 : i.resetState();
    }), super.resetState(t, e);
  }
  getKanban(t) {
    var e;
    return (e = this._kanbanRefs.get(String(t))) == null ? void 0 : e.current;
  }
  toggle(t) {
    this.setState((e) => ({ collapsed: t === void 0 ? !e.collapsed : !t }));
  }
  update(t) {
    const { items: e } = t;
    return e && (t = { ...t }, t.items = e.map((s, i) => {
      const r = String(s.key || i);
      return s.deleted ? { key: r, deleted: !0 } : (s.data && typeof s.data == "object" && this.getKanban(r) && (this._needUpdateKanban(r, s.data), s = { ...s }, delete s.data), s);
    })), new Promise((s) => {
      this.setState(t.items ? (i) => ({ ...t, items: de(i.items, t.items) }) : t, s);
    });
  }
  _needUpdateKanban(t, e) {
    const s = this._needUpdateData, i = s.get(t), { kanbanItemKey: r = "key" } = this.props;
    s.set(t, Pr(i || {}, e, r));
  }
  _buildItems(t) {
    const { items: e = [], kanbanProps: s, kanbanItemKey: i = "key" } = t;
    let { items: r } = this.state;
    r ? (r = de(e, r, i).filter((c) => !c.deleted), r.sort(Ks)) : r = e;
    const o = this._kanbanRefs, a = new Set(o.keys()), l = r.map((c, h) => {
      if (c.deleted)
        return null;
      const d = H(
        { className: "kanban-region-item", key: h },
        typeof s == "function" ? s.call(this, c, h) : s,
        c
      ), u = String(d.key);
      let f = o.get(u);
      return f || (f = U(), o.set(u, f)), d.ref = f, a.delete(u), /* @__PURE__ */ m(en, { "z-key": u, ...d });
    });
    return a.forEach((c) => {
      o.delete(c);
    }), l;
  }
  _getClassName(t) {
    return ["kanban-region", t.className, this.state.collapsed ? "is-collapsed" : "is-expanded", t.heading ? "has-heading" : ""];
  }
  _getChildren(t) {
    const { heading: e, toggleFromHeading: s } = t, { collapsed: i, heading: r } = this.state, o = H({ className: "kanban-heading", onClick: s ? this._handleClickHeading : void 0 }, typeof e == "function" ? e.call(this) : e, r);
    return [
      e && /* @__PURE__ */ m(Me, { ...o }, "heading"),
      i ? null : this._buildItems(t)
    ];
  }
}
const Qi = ".kanban";
let Dd = class extends Y {
  constructor() {
    super(...arguments), this.state = {}, this._ref = U(), this._kanbanRefs = /* @__PURE__ */ new Map(), this._onAddLink = async (t) => {
      const { onAddLink: e, linkItemKey: s } = this.props;
      t[s] = $e(t), await (e == null ? void 0 : e.call(this, t)) !== !1 && this.addLink(t);
    }, this._onDeleteLink = async (t) => {
      const { onDeleteLink: e } = this.props;
      await (e == null ? void 0 : e.call(this, t)) !== !1 && this.deleteLink(t);
    };
  }
  componentDidMount() {
    const t = this._ref.current;
    if (t) {
      const { moveable: e, responsive: s, showLinkOnSelected: i, showLinkOnHover: r } = this.props;
      if (e && (this._moveable = new Xs(t, p.extend({ selector: "self", move: "scroll", onMoveStart: (o, a) => {
        const { bottom: l, right: c } = a.getBoundingClientRect();
        return o.clientY < l && o.clientY > l - 20 || o.clientX < c && o.clientX > c - 20 ? !1 : !p(o.target).closest("a,input,.btn,.state,.kanban-item,.not-moveable").length;
      } }, typeof e == "object" ? e : null))), i && p(t).on(`kanbanItemSelected${Qi}`, (o, a) => {
        this.setState((l) => ({
          selected: {
            ...l.selected,
            [a.kanban]: a.selected
          }
        }));
      }), r && p(t).on(`kanbanItemHover${Qi}`, (o, { kanban: a, hover: l }) => {
        this.setState({ hover: l === void 0 ? l : `${a}_${l}` });
      }), s) {
        const o = new ResizeObserver(this._tryUpdateLayout.bind(this));
        (typeof s != "boolean" ? p(s) : p(t).parent()).each((l, c) => {
          o.observe(c);
        }), this._rob = o;
      }
    }
  }
  componentWillUnmount() {
    var e, s;
    (e = this._moveable) == null || e.destroy(), (s = this._rob) == null || s.disconnect();
    const t = this._ref.current;
    t && p(t).off(Qi);
  }
  getDefaultState(t) {
    return { linkChanges: void 0 };
  }
  resetState(t, e) {
    this._kanbanRefs.forEach((s) => {
      var i;
      (i = s.current) == null || i.resetState();
    }), super.resetState(t, e);
  }
  getKanban(t) {
    const e = String(t), s = this._kanbanRefs;
    if (s.has(e))
      return s.get(e).current;
    let i = null;
    const r = Array.from(s.values());
    for (const o of r) {
      const a = o.current;
      if (a instanceof Nl && (i = a.getKanban(t), i))
        break;
    }
    return i || null;
  }
  updateKanban(t, e) {
    const s = this.getKanban(t);
    return s ? s.update(e) : Promise.reject(new Error(`[ZUI] Kanban not found: ${t}`));
  }
  updateLayout() {
    const t = this._ref.current;
    if (!t)
      return;
    const e = p(t), s = e.width(), i = e.height();
    this.setState({ width: s, height: i });
  }
  updateLink(t, e) {
    return this.changeState((s) => {
      let i = Array.isArray(t) ? t : [t];
      return e && (i = i.map((r) => ({ ...r, ...e }))), { linkChanges: de(s.linkChanges, i, this.props.linkItemKey) };
    });
  }
  addLink(t) {
    return this.updateLink(t);
  }
  deleteLink(t) {
    return this.updateLink(t, { deleted: !0 });
  }
  _tryUpdateLayout() {
    this._layoutTimer && cancelAnimationFrame(this._layoutTimer), this._layoutTimer = requestAnimationFrame(() => {
      this.updateLayout(), this._layoutTimer = 0;
    });
  }
  _getClassName(t) {
    return ["kanban-list", t.className, t.sticky ? "has-sticky" : "", t.moveable ? "is-moveable" : "", t.scrollbarHover ? "scrollbar-hover" : ""];
  }
  _getProps(t) {
    const { width: e, height: s } = t, i = typeof e == "function" ? e.call(this) : e, r = typeof s == "function" ? s.call(this) : s, { width: o, height: a } = this.state ?? {};
    return H(super._getProps(t), {
      ref: this._ref,
      style: {
        width: i,
        height: r,
        "--kanban-list-width": `${o || e}px`,
        "--kanban-list-height": `${a || s}px`
      }
    });
  }
  _getLinks(t) {
    const { linkChanges: e = [] } = this.state, { links: s = [], getLink: i, linkItemKey: r } = t;
    return de(s, e, this.props.linkItemKey).reduce((o, a) => {
      const l = i == null ? void 0 : i.call(this, a);
      return l !== !1 && (a = l || a, a.deleted || (a[r] || (a[r] = $e(a)), o.push(a))), o;
    }, []);
  }
  _renderLinks(t) {
    const e = this._getLinks(t), { editLinks: s } = t;
    if (!s && !e.length)
      return;
    const { showLinkOnHover: i, showLinkOnSelected: r } = t;
    let o;
    if (e.length && (r || i)) {
      o = [];
      const { selected: a = {}, hover: l } = this.state;
      r && a && Object.keys(a).forEach((c) => {
        const h = a[c];
        h.length && o.push(...h.map((d) => `${c}_${d}`));
      }), i && l && o.push(l), o = [...new Set(o)];
    }
    return /* @__PURE__ */ m(
      Ad,
      {
        container: ".kanban-list",
        links: e,
        filters: o,
        editLinks: s,
        onDeleteLink: s ? this._onDeleteLink : void 0,
        onAddLink: s ? this._onAddLink : void 0
      },
      "links"
    );
  }
  _getChildren(t) {
    const { items: e = [], kanbanProps: s, showLinkOnSelected: i, showLinkOnHover: r, selectable: o, editLinks: a } = t, l = this._kanbanRefs, c = new Set(l.keys()), h = [
      ...e.map((u, f) => {
        s && (u = typeof s == "function" ? s.call(this, u, f) : p.extend({}, s, u));
        const g = String(u.key ?? f);
        let _ = l.get(g);
        _ || (_ = U(), l.set(g, _)), c.delete(g);
        const y = u.heading !== void 0 || u.items;
        return (i || r || o) && (y ? u.kanbanProps = { showLinkOnSelected: i, showLinkOnHover: r, selectable: o, ...u.kanbanProps } : u = { showLinkOnSelected: i, showLinkOnHover: r, selectable: o, ...u }), a && (y ? u.items = (u.items || []).map((b) => ({ ...b, editLinks: !1 })) : u = { ...u, editLinks: !1 }), /* @__PURE__ */ m(y ? Nl : en, { ref: _, sticky: t.sticky, ...u, "z-key": g }, g);
      }),
      t.children
    ];
    c.forEach((u) => {
      l.delete(u);
    });
    const d = this._renderLinks(t);
    return d && h.push(d), h;
  }
};
Dd.defaultProps = {
  moveable: !0,
  sticky: !0,
  responsive: !0,
  scrollbarHover: !0,
  linkItemKey: "id"
};
class Ei extends W {
}
Ei.NAME = "Kanban";
Ei.replace = !0;
Ei.Component = en;
Ei.register();
class Ti extends W {
  update(t, e) {
    if (t = Array.isArray(t) ? t : [t], e)
      return this.render({ items: t });
    const s = this.options.items || [], i = new Map(s.map((o, a) => [o.key, a])), r = [...s];
    return t.forEach((o) => {
      if (i.has(o.key)) {
        const a = i.get(o.key);
        r[a] = { ...s[a], ...o };
      } else
        r.push(o);
    }), this.render({ items: r.filter((o) => !o.deleted) });
  }
}
Ti.NAME = "KanbanList";
Ti.replace = !0;
Ti.Component = Dd;
Ti.register();
const Jg = "nav", tr = '[data-toggle="tab"],[zui-toggle="tab"]', Xg = "active";
class qn extends it {
  constructor() {
    super(...arguments), this._timer = 0;
  }
  active(t) {
    const e = this.$element, s = e.find(tr);
    let i = t ? p(t).closest(tr) : s.filter(`.${Xg}`);
    if (!i.length && (i = e.find(tr).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    let r = i.attr("href") || i.data("target");
    if (!r) {
      const c = i.attr("zui-toggle-tab");
      r = Te(c).target;
    }
    const o = i.data("name") || r, a = e.closest(".tabs"), l = a.length ? a.find(r) : p(r);
    l.length && (l.parent().children(".tab-pane").removeClass("active in"), l.addClass("active").trigger("show", [o]), this.emit("show", o), this._timer && clearTimeout(this._timer), this._timer = setTimeout(() => {
      l.addClass("in").trigger("shown", [o]), this.emit("shown", o), this._timer = 0;
    }, 10));
  }
}
qn.NAME = "Tabs";
qn.toggle = {
  name: "tab",
  handler(n, t) {
    const e = p(n), s = e.closest(`.${Jg}`);
    s.length && qn.ensure(s, t).active(e);
  }
};
qn.register();
export {
  p as $,
  no as Ajax,
  dh as Avatar,
  e_ as BUILD,
  n_ as BUILD_HASH,
  s_ as BUILD_MODE,
  uh as BtnGroup,
  Gu as Bus,
  Eo as Calendar,
  ra as Card,
  Xh as CardList,
  ao as Checkbox,
  lo as Collapsible,
  Fo as ColorPicker,
  oi as CommonList,
  it as Component,
  W as ComponentFromReact,
  cs as Computed,
  ki as ContextMenu,
  yi as CopyBtn,
  oo as Custom,
  P as CustomContent,
  Af as CustomContentClass,
  Wc as CustomRender,
  es as DTable,
  td as Dashboard,
  Wo as DatePicker,
  Bo as DatetimePicker,
  ui as Draggable,
  Lt as Dropdown,
  oh as EventBus,
  Ko as FileSelector,
  Zo as FormBuilder,
  Jo as FormHelper,
  Y as HElement,
  Hc as HElementSignals,
  Ne as HtmlContent,
  rt as Icon,
  Go as ImageSelector,
  Ei as Kanban,
  Ti as KanbanList,
  g_ as LibLoader,
  ai as List,
  co as Menu,
  A_ as Messager,
  Hn as Modal,
  Us as ModalBase,
  zs as ModalTrigger,
  Xs as Moveable,
  Bh as Nav,
  li as NestedList,
  Kh as Pager,
  Qo as Pick,
  ta as Picker,
  Gt as Popover,
  Oo as PopoverPanel,
  Bc as Portal,
  po as ProgressCircle,
  O as ReactComponent,
  P_ as Resizable,
  ea as ResponsiveNavHelper,
  sa as SearchBox,
  ho as SearchMenu,
  Yh as SearchTree,
  Gh as Sidebar,
  gt as Signal,
  lh as Sortable,
  Co as SortableList,
  So as SortableTree,
  xo as Split,
  wc as Sticky,
  Ee as TIME_DAY,
  qn as Tabs,
  _o as TimeAgo,
  Ho as TimePicker,
  go as TimeSpan,
  qh as Toolbar,
  ps as Tooltip,
  na as Tree,
  ia as Upload,
  Zh as UploadImgs,
  t_ as VERSION,
  pr as ZUI,
  sr as addDate,
  Ac as batch,
  ni as bindCommands,
  fc as bindHotkeys,
  ge as bus,
  p as cash,
  S as classes,
  h_ as clearData,
  us as computed,
  He as convertBytes,
  Tu as convertString,
  gf as copy,
  mf as copyText,
  yc as create,
  Q as createDate,
  ba as createFormData,
  Df as createPortal,
  U as createRef,
  hf as debounce,
  Au as decodeBase64,
  Zt as deepCall,
  Qn as deepGet,
  xu as deepGetPath,
  u_ as defineFn,
  En as delay,
  Uu as disableScroll,
  v_ as dom,
  $a as downloadFile,
  ze as effect,
  ql as encodeBase64,
  Qu as enterFullscreen,
  Mu as escapeHtml,
  Te as evalValue,
  Ta as executeCommand,
  lf as executeCommands,
  Je as fetchData,
  Y_ as formHelper,
  Bt as formatBytes,
  nt as formatDate,
  l_ as formatDateSpan,
  tt as formatString,
  Nu as formatWithPipes,
  Zl as getClassList,
  si as getComponent,
  Ut as getDateTime,
  eo as getFullscreenElement,
  uc as getHotkeysMap,
  xc as getLib,
  Tf as getReactComponent,
  gc as getUniqueCode,
  Os as getZData,
  Dt as h,
  d_ as hotkeys,
  Uc as htm,
  zf as html,
  j as i18n,
  of as init,
  vc as initGlobalComponents,
  $n as isDiff,
  Ma as isFetchSetting,
  c_ as isNotEmptyString,
  ue as isSameDay,
  Kr as isSameMonth,
  i_ as isSameWeek,
  nr as isSameYear,
  r_ as isToday,
  a_ as isTomorrow,
  ti as isValidDate,
  bt as isValidElement,
  o_ as isYesterday,
  Ru as jsRaw,
  b_ as jsx,
  uf as loadCSS,
  ff as loadJS,
  pf as loadModule,
  H as mergeProps,
  Za as nativeEvents,
  st as nextGid,
  lr as parseCommand,
  af as parseCommands,
  Pu as parseRawData,
  me as parseSize,
  Oc as reactComponentMap,
  Ef as reactComponents,
  m_ as readFile,
  tf as registerComponent,
  f_ as registerGlobalCommand,
  Ku as registerGlobalListener,
  kc as registerLib,
  ot as registerReactComponent,
  lc as removeUndefinedProps,
  rs as render,
  fr as renderCustomContent,
  Mf as renderCustomResult,
  cr as runJS,
  p_ as selectFile,
  ns as setFormDataValue,
  df as setLibRoot,
  wa as setZData,
  Fu as shareData,
  Tt as signal,
  ce as store,
  Yr as storeData,
  Zr as takeData,
  lp as timeago,
  J as toCssSize,
  mc as toggleFullscreen,
  __ as tryExec,
  so as unbindCommands,
  pc as unbindHotkeys,
  Ic as untracked,
  Rf as vhtml,
  y_ as waitUntil
};
//# sourceMappingURL=zui.esm.js.map
