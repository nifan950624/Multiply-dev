!function(o) {
    var r = {};
    function n(t) {
        if (r[t]) return r[t].exports;
        var e = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return o[t].call(e.exports, e, e.exports, n), e.l = !0, e.exports;
    }
    n.m = o, n.c = r, n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        });
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) n.d(o, r, function(t) {
            return e[t];
        }.bind(null, r));
        return o;
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return n.d(e, "a", e), e;
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 19);
}([ function(ao, lo, t) {
    var so;
    !function(t, e) {
        "use strict";
        "object" == typeof ao.exports ? ao.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t);
        } : e(t);
    }("undefined" != typeof window ? window : this, function(_, t) {
        "use strict";
        function u(t) {
            return null != t && t === t.window;
        }
        var e = [], r = Object.getPrototypeOf, l = e.slice, b = e.flat ? function(t) {
            return e.flat.call(t);
        } : function(t) {
            return e.concat.apply([], t);
        }, d = e.push, n = e.indexOf, o = {}, i = o.toString, h = o.hasOwnProperty, a = h.toString, s = a.call(Object), x = {}, v = function(t) {
            return "function" == typeof t && "number" != typeof t.nodeType;
        }, E = _.document, m = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };
        function w(t, e, o) {
            var r, n, i = (o = o || E).createElement("script");
            if (i.text = t, e) for (r in m) (n = e[r] || e.getAttribute && e.getAttribute(r)) && i.setAttribute(r, n);
            o.head.appendChild(i).parentNode.removeChild(i);
        }
        function y(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? o[i.call(t)] || "object" : typeof t;
        }
        var c = "3.5.1", T = function(t, e) {
            return new T.fn.init(t, e);
        };
        function p(t) {
            var e = !!t && "length" in t && t.length, o = y(t);
            return !v(t) && !u(t) && ("array" === o || 0 === e || "number" == typeof e && 0 < e && e - 1 in t);
        }
        T.fn = T.prototype = {
            jquery: c,
            constructor: T,
            length: 0,
            toArray: function() {
                return l.call(this);
            },
            get: function(t) {
                return null == t ? l.call(this) : t < 0 ? this[t + this.length] : this[t];
            },
            pushStack: function(t) {
                var e = T.merge(this.constructor(), t);
                return e.prevObject = this, e;
            },
            each: function(t) {
                return T.each(this, t);
            },
            map: function(o) {
                return this.pushStack(T.map(this, function(t, e) {
                    return o.call(t, e, t);
                }));
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments));
            },
            first: function() {
                return this.eq(0);
            },
            last: function() {
                return this.eq(-1);
            },
            even: function() {
                return this.pushStack(T.grep(this, function(t, e) {
                    return (e + 1) % 2;
                }));
            },
            odd: function() {
                return this.pushStack(T.grep(this, function(t, e) {
                    return e % 2;
                }));
            },
            eq: function(t) {
                var e = this.length, o = +t + (t < 0 ? e : 0);
                return this.pushStack(0 <= o && o < e ? [ this[o] ] : []);
            },
            end: function() {
                return this.prevObject || this.constructor();
            },
            push: d,
            sort: e.sort,
            splice: e.splice
        }, T.extend = T.fn.extend = function() {
            var t, e, o, r, n, i, a = arguments[0] || {}, l = 1, d = arguments.length, s = !1;
            for ("boolean" == typeof a && (s = a, a = arguments[l] || {}, l++), "object" == typeof a || v(a) || (a = {}), 
            l === d && (a = this, l--); l < d; l++) if (null != (t = arguments[l])) for (e in t) r = t[e], 
            "__proto__" !== e && a !== r && (s && r && (T.isPlainObject(r) || (n = Array.isArray(r))) ? (o = a[e], 
            i = n && !Array.isArray(o) ? [] : n || T.isPlainObject(o) ? o : {}, n = !1, a[e] = T.extend(s, i, r)) : void 0 !== r && (a[e] = r));
            return a;
        }, T.extend({
            expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t);
            },
            noop: function() {},
            isPlainObject: function(t) {
                var e, o;
                return !(!t || "[object Object]" !== i.call(t)) && (!(e = r(t)) || "function" == typeof (o = h.call(e, "constructor") && e.constructor) && a.call(o) === s);
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0;
            },
            globalEval: function(t, e, o) {
                w(t, {
                    nonce: e && e.nonce
                }, o);
            },
            each: function(t, e) {
                var o, r = 0;
                if (p(t)) for (o = t.length; r < o && !1 !== e.call(t[r], r, t[r]); r++) ; else for (r in t) if (!1 === e.call(t[r], r, t[r])) break;
                return t;
            },
            makeArray: function(t, e) {
                var o = e || [];
                return null != t && (p(Object(t)) ? T.merge(o, "string" == typeof t ? [ t ] : t) : d.call(o, t)), 
                o;
            },
            inArray: function(t, e, o) {
                return null == e ? -1 : n.call(e, t, o);
            },
            merge: function(t, e) {
                for (var o = +e.length, r = 0, n = t.length; r < o; r++) t[n++] = e[r];
                return t.length = n, t;
            },
            grep: function(t, e, o) {
                for (var r = [], n = 0, i = t.length, a = !o; n < i; n++) !e(t[n], n) != a && r.push(t[n]);
                return r;
            },
            map: function(t, e, o) {
                var r, n, i = 0, a = [];
                if (p(t)) for (r = t.length; i < r; i++) null != (n = e(t[i], i, o)) && a.push(n); else for (i in t) null != (n = e(t[i], i, o)) && a.push(n);
                return b(a);
            },
            guid: 1,
            support: x
        }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = e[Symbol.iterator]), 
        T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            o["[object " + e + "]"] = e.toLowerCase();
        });
        var f = function(o) {
            function c(t, e) {
                var o = "0x" + t.slice(1) - 65536;
                return e || (o < 0 ? String.fromCharCode(65536 + o) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320));
            }
            function n() {
                k();
            }
            var t, f, w, i, a, g, p, u, y, d, s, k, _, l, E, b, m, h, x, T = "sizzle" + +new Date(), v = o.document, C = 0, r = 0, j = dt(), S = dt(), z = dt(), N = dt(), A = function(t, e) {
                return t === e && (s = !0), 0;
            }, D = {}.hasOwnProperty, e = [], L = e.pop, O = e.push, I = e.push, M = e.slice, q = function(t, e) {
                for (var o = 0, r = t.length; o < r; o++) if (t[o] === e) return o;
                return -1;
            }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", H = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", B = "\\[" + H + "*(" + R + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + H + "*\\]", F = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)", W = new RegExp(H + "+", "g"), U = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"), $ = new RegExp("^" + H + "*," + H + "*"), Q = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"), X = new RegExp(H + "|>"), V = new RegExp(F), Y = new RegExp("^" + R + "$"), K = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + B),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
            }, G = /HTML$/i, J = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, tt = /^[^{]+\{\s*\[native \w/, et = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ot = /[+~]/, rt = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])", "g"), nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, it = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
            }, at = xt(function(t) {
                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                I.apply(e = M.call(v.childNodes), v.childNodes), e[v.childNodes.length].nodeType;
            } catch (t) {
                I = {
                    apply: e.length ? function(t, e) {
                        O.apply(t, M.call(e));
                    } : function(t, e) {
                        for (var o = t.length, r = 0; t[o++] = e[r++]; ) ;
                        t.length = o - 1;
                    }
                };
            }
            function lt(e, t, o, r) {
                var n, i, a, l, d, s, m, c = t && t.ownerDocument, p = t ? t.nodeType : 9;
                if (o = o || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return o;
                if (!r && (k(t), t = t || _, E)) {
                    if (11 !== p && (d = et.exec(e))) if (n = d[1]) {
                        if (9 === p) {
                            if (!(a = t.getElementById(n))) return o;
                            if (a.id === n) return o.push(a), o;
                        } else if (c && (a = c.getElementById(n)) && x(t, a) && a.id === n) return o.push(a), 
                        o;
                    } else {
                        if (d[2]) return I.apply(o, t.getElementsByTagName(e)), o;
                        if ((n = d[3]) && f.getElementsByClassName && t.getElementsByClassName) return I.apply(o, t.getElementsByClassName(n)), 
                        o;
                    }
                    if (f.qsa && !N[e + " "] && (!b || !b.test(e)) && (1 !== p || "object" !== t.nodeName.toLowerCase())) {
                        if (m = e, c = t, 1 === p && (X.test(e) || Q.test(e))) {
                            for ((c = ot.test(e) && ut(t.parentNode) || t) === t && f.scope || ((l = t.getAttribute("id")) ? l = l.replace(nt, it) : t.setAttribute("id", l = T)), 
                            i = (s = g(e)).length; i--; ) s[i] = (l ? "#" + l : ":scope") + " " + ht(s[i]);
                            m = s.join(",");
                        }
                        try {
                            return I.apply(o, c.querySelectorAll(m)), o;
                        } catch (t) {
                            N(e, !0);
                        } finally {
                            l === T && t.removeAttribute("id");
                        }
                    }
                }
                return u(e.replace(U, "$1"), t, o, r);
            }
            function dt() {
                var o = [];
                function r(t, e) {
                    return o.push(t + " ") > w.cacheLength && delete r[o.shift()], r[t + " "] = e;
                }
                return r;
            }
            function st(t) {
                return t[T] = !0, t;
            }
            function mt(t) {
                var e = _.createElement("fieldset");
                try {
                    return !!t(e);
                } catch (t) {
                    return !1;
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null;
                }
            }
            function ct(t, e) {
                for (var o = t.split("|"), r = o.length; r--; ) w.attrHandle[o[r]] = e;
            }
            function pt(t, e) {
                var o = e && t, r = o && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (r) return r;
                if (o) for (;o = o.nextSibling; ) if (o === e) return -1;
                return t ? 1 : -1;
            }
            function ft(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && at(t) === e : t.disabled === e : "label" in t && t.disabled === e;
                };
            }
            function gt(a) {
                return st(function(i) {
                    return i = +i, st(function(t, e) {
                        for (var o, r = a([], t.length, i), n = r.length; n--; ) t[o = r[n]] && (t[o] = !(e[o] = t[o]));
                    });
                });
            }
            function ut(t) {
                return t && void 0 !== t.getElementsByTagName && t;
            }
            for (t in f = lt.support = {}, a = lt.isXML = function(t) {
                var e = t.namespaceURI, o = (t.ownerDocument || t).documentElement;
                return !G.test(e || o && o.nodeName || "HTML");
            }, k = lt.setDocument = function(t) {
                var e, o, r = t ? t.ownerDocument || t : v;
                return r != _ && 9 === r.nodeType && r.documentElement && (l = (_ = r).documentElement, 
                E = !a(_), v != _ && (o = _.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", n, !1) : o.attachEvent && o.attachEvent("onunload", n)), 
                f.scope = mt(function(t) {
                    return l.appendChild(t).appendChild(_.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length;
                }), f.attributes = mt(function(t) {
                    return t.className = "i", !t.getAttribute("className");
                }), f.getElementsByTagName = mt(function(t) {
                    return t.appendChild(_.createComment("")), !t.getElementsByTagName("*").length;
                }), f.getElementsByClassName = tt.test(_.getElementsByClassName), f.getById = mt(function(t) {
                    return l.appendChild(t).id = T, !_.getElementsByName || !_.getElementsByName(T).length;
                }), f.getById ? (w.filter.ID = function(t) {
                    var e = t.replace(rt, c);
                    return function(t) {
                        return t.getAttribute("id") === e;
                    };
                }, w.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && E) {
                        var o = e.getElementById(t);
                        return o ? [ o ] : [];
                    }
                }) : (w.filter.ID = function(t) {
                    var o = t.replace(rt, c);
                    return function(t) {
                        var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return e && e.value === o;
                    };
                }, w.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && E) {
                        var o, r, n, i = e.getElementById(t);
                        if (i) {
                            if ((o = i.getAttributeNode("id")) && o.value === t) return [ i ];
                            for (n = e.getElementsByName(t), r = 0; i = n[r++]; ) if ((o = i.getAttributeNode("id")) && o.value === t) return [ i ];
                        }
                        return [];
                    }
                }), w.find.TAG = f.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : f.qsa ? e.querySelectorAll(t) : void 0;
                } : function(t, e) {
                    var o, r = [], n = 0, i = e.getElementsByTagName(t);
                    if ("*" !== t) return i;
                    for (;o = i[n++]; ) 1 === o.nodeType && r.push(o);
                    return r;
                }, w.find.CLASS = f.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && E) return e.getElementsByClassName(t);
                }, m = [], b = [], (f.qsa = tt.test(_.querySelectorAll)) && (mt(function(t) {
                    var e;
                    l.appendChild(t).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                    t.querySelectorAll("[msallowcapture^='']").length && b.push("[*^$]=" + H + "*(?:''|\"\")"), 
                    t.querySelectorAll("[selected]").length || b.push("\\[" + H + "*(?:value|" + P + ")"), 
                    t.querySelectorAll("[id~=" + T + "-]").length || b.push("~="), (e = _.createElement("input")).setAttribute("name", ""), 
                    t.appendChild(e), t.querySelectorAll("[name='']").length || b.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"), 
                    t.querySelectorAll(":checked").length || b.push(":checked"), t.querySelectorAll("a#" + T + "+*").length || b.push(".#.+[+~]"), 
                    t.querySelectorAll("\\\f"), b.push("[\\r\\n\\f]");
                }), mt(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = _.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && b.push("name" + H + "*[*^$|!~]?="), 
                    2 !== t.querySelectorAll(":enabled").length && b.push(":enabled", ":disabled"), 
                    l.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && b.push(":enabled", ":disabled"), 
                    t.querySelectorAll("*,:x"), b.push(",.*:");
                })), (f.matchesSelector = tt.test(h = l.matches || l.webkitMatchesSelector || l.mozMatchesSelector || l.oMatchesSelector || l.msMatchesSelector)) && mt(function(t) {
                    f.disconnectedMatch = h.call(t, "*"), h.call(t, "[s!='']:x"), m.push("!=", F);
                }), b = b.length && new RegExp(b.join("|")), m = m.length && new RegExp(m.join("|")), 
                e = tt.test(l.compareDocumentPosition), x = e || tt.test(l.contains) ? function(t, e) {
                    var o = 9 === t.nodeType ? t.documentElement : t, r = e && e.parentNode;
                    return t === r || !(!r || 1 !== r.nodeType || !(o.contains ? o.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)));
                } : function(t, e) {
                    if (e) for (;e = e.parentNode; ) if (e === t) return !0;
                    return !1;
                }, A = e ? function(t, e) {
                    if (t === e) return s = !0, 0;
                    var o = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return o || (1 & (o = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === o ? t == _ || t.ownerDocument == v && x(v, t) ? -1 : e == _ || e.ownerDocument == v && x(v, e) ? 1 : d ? q(d, t) - q(d, e) : 0 : 4 & o ? -1 : 1);
                } : function(t, e) {
                    if (t === e) return s = !0, 0;
                    var o, r = 0, n = t.parentNode, i = e.parentNode, a = [ t ], l = [ e ];
                    if (!n || !i) return t == _ ? -1 : e == _ ? 1 : n ? -1 : i ? 1 : d ? q(d, t) - q(d, e) : 0;
                    if (n === i) return pt(t, e);
                    for (o = t; o = o.parentNode; ) a.unshift(o);
                    for (o = e; o = o.parentNode; ) l.unshift(o);
                    for (;a[r] === l[r]; ) r++;
                    return r ? pt(a[r], l[r]) : a[r] == v ? -1 : l[r] == v ? 1 : 0;
                }), _;
            }, lt.matches = function(t, e) {
                return lt(t, null, null, e);
            }, lt.matchesSelector = function(t, e) {
                if (k(t), f.matchesSelector && E && !N[e + " "] && (!m || !m.test(e)) && (!b || !b.test(e))) try {
                    var o = h.call(t, e);
                    if (o || f.disconnectedMatch || t.document && 11 !== t.document.nodeType) return o;
                } catch (t) {
                    N(e, !0);
                }
                return 0 < lt(e, _, null, [ t ]).length;
            }, lt.contains = function(t, e) {
                return (t.ownerDocument || t) != _ && k(t), x(t, e);
            }, lt.attr = function(t, e) {
                (t.ownerDocument || t) != _ && k(t);
                var o = w.attrHandle[e.toLowerCase()], r = o && D.call(w.attrHandle, e.toLowerCase()) ? o(t, e, !E) : void 0;
                return void 0 !== r ? r : f.attributes || !E ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null;
            }, lt.escape = function(t) {
                return (t + "").replace(nt, it);
            }, lt.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t);
            }, lt.uniqueSort = function(t) {
                var e, o = [], r = 0, n = 0;
                if (s = !f.detectDuplicates, d = !f.sortStable && t.slice(0), t.sort(A), s) {
                    for (;e = t[n++]; ) e === t[n] && (r = o.push(n));
                    for (;r--; ) t.splice(o[r], 1);
                }
                return d = null, t;
            }, i = lt.getText = function(t) {
                var e, o = "", r = 0, n = t.nodeType;
                if (n) {
                    if (1 === n || 9 === n || 11 === n) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) o += i(t);
                    } else if (3 === n || 4 === n) return t.nodeValue;
                } else for (;e = t[r++]; ) o += i(e);
                return o;
            }, (w = lt.selectors = {
                cacheLength: 50,
                createPseudo: st,
                match: K,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(rt, c), t[3] = (t[3] || t[4] || t[5] || "").replace(rt, c), 
                        "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || lt.error(t[0]), 
                        t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && lt.error(t[0]), 
                        t;
                    },
                    PSEUDO: function(t) {
                        var e, o = !t[6] && t[2];
                        return K.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : o && V.test(o) && (e = g(o, !0)) && (e = o.indexOf(")", o.length - e) - o.length) && (t[0] = t[0].slice(0, e), 
                        t[2] = o.slice(0, e)), t.slice(0, 3));
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(rt, c).toLowerCase();
                        return "*" === t ? function() {
                            return !0;
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e;
                        };
                    },
                    CLASS: function(t) {
                        var e = j[t + " "];
                        return e || (e = new RegExp("(^|" + H + ")" + t + "(" + H + "|$)")) && j(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
                        });
                    },
                    ATTR: function(o, r, n) {
                        return function(t) {
                            var e = lt.attr(t, o);
                            return null == e ? "!=" === r : !r || (e += "", "=" === r ? e === n : "!=" === r ? e !== n : "^=" === r ? n && 0 === e.indexOf(n) : "*=" === r ? n && -1 < e.indexOf(n) : "$=" === r ? n && e.slice(-n.length) === n : "~=" === r ? -1 < (" " + e.replace(W, " ") + " ").indexOf(n) : "|=" === r && (e === n || e.slice(0, n.length + 1) === n + "-"));
                        };
                    },
                    CHILD: function(g, t, e, u, b) {
                        var h = "nth" !== g.slice(0, 3), x = "last" !== g.slice(-4), v = "of-type" === t;
                        return 1 === u && 0 === b ? function(t) {
                            return !!t.parentNode;
                        } : function(t, e, o) {
                            var r, n, i, a, l, d, s = h != x ? "nextSibling" : "previousSibling", m = t.parentNode, c = v && t.nodeName.toLowerCase(), p = !o && !v, f = !1;
                            if (m) {
                                if (h) {
                                    for (;s; ) {
                                        for (a = t; a = a[s]; ) if (v ? a.nodeName.toLowerCase() === c : 1 === a.nodeType) return !1;
                                        d = s = "only" === g && !d && "nextSibling";
                                    }
                                    return !0;
                                }
                                if (d = [ x ? m.firstChild : m.lastChild ], x && p) {
                                    for (f = (l = (r = (n = (i = (a = m)[T] || (a[T] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[g] || [])[0] === C && r[1]) && r[2], 
                                    a = l && m.childNodes[l]; a = ++l && a && a[s] || (f = l = 0) || d.pop(); ) if (1 === a.nodeType && ++f && a === t) {
                                        n[g] = [ C, l, f ];
                                        break;
                                    }
                                } else if (p && (f = l = (r = (n = (i = (a = t)[T] || (a[T] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[g] || [])[0] === C && r[1]), 
                                !1 === f) for (;(a = ++l && a && a[s] || (f = l = 0) || d.pop()) && ((v ? a.nodeName.toLowerCase() !== c : 1 !== a.nodeType) || !++f || (p && ((n = (i = a[T] || (a[T] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[g] = [ C, f ]), 
                                a !== t)); ) ;
                                return (f -= b) === u || f % u == 0 && 0 <= f / u;
                            }
                        };
                    },
                    PSEUDO: function(t, i) {
                        var e, a = w.pseudos[t] || w.setFilters[t.toLowerCase()] || lt.error("unsupported pseudo: " + t);
                        return a[T] ? a(i) : 1 < a.length ? (e = [ t, t, "", i ], w.setFilters.hasOwnProperty(t.toLowerCase()) ? st(function(t, e) {
                            for (var o, r = a(t, i), n = r.length; n--; ) t[o = q(t, r[n])] = !(e[o] = r[n]);
                        }) : function(t) {
                            return a(t, 0, e);
                        }) : a;
                    }
                },
                pseudos: {
                    not: st(function(t) {
                        var r = [], n = [], l = p(t.replace(U, "$1"));
                        return l[T] ? st(function(t, e, o, r) {
                            for (var n, i = l(t, null, r, []), a = t.length; a--; ) (n = i[a]) && (t[a] = !(e[a] = n));
                        }) : function(t, e, o) {
                            return r[0] = t, l(r, null, o, n), r[0] = null, !n.pop();
                        };
                    }),
                    has: st(function(e) {
                        return function(t) {
                            return 0 < lt(e, t).length;
                        };
                    }),
                    contains: st(function(e) {
                        return e = e.replace(rt, c), function(t) {
                            return -1 < (t.textContent || i(t)).indexOf(e);
                        };
                    }),
                    lang: st(function(o) {
                        return Y.test(o || "") || lt.error("unsupported lang: " + o), o = o.replace(rt, c).toLowerCase(), 
                        function(t) {
                            var e;
                            do {
                                if (e = E ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === o || 0 === e.indexOf(o + "-");
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1;
                        };
                    }),
                    target: function(t) {
                        var e = o.location && o.location.hash;
                        return e && e.slice(1) === t.id;
                    },
                    root: function(t) {
                        return t === l;
                    },
                    focus: function(t) {
                        return t === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                    },
                    enabled: ft(!1),
                    disabled: ft(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected;
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function(t) {
                        return !w.pseudos.empty(t);
                    },
                    header: function(t) {
                        return Z.test(t.nodeName);
                    },
                    input: function(t) {
                        return J.test(t.nodeName);
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e;
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                    },
                    first: gt(function() {
                        return [ 0 ];
                    }),
                    last: gt(function(t, e) {
                        return [ e - 1 ];
                    }),
                    eq: gt(function(t, e, o) {
                        return [ o < 0 ? o + e : o ];
                    }),
                    even: gt(function(t, e) {
                        for (var o = 0; o < e; o += 2) t.push(o);
                        return t;
                    }),
                    odd: gt(function(t, e) {
                        for (var o = 1; o < e; o += 2) t.push(o);
                        return t;
                    }),
                    lt: gt(function(t, e, o) {
                        for (var r = o < 0 ? o + e : e < o ? e : o; 0 <= --r; ) t.push(r);
                        return t;
                    }),
                    gt: gt(function(t, e, o) {
                        for (var r = o < 0 ? o + e : o; ++r < e; ) t.push(r);
                        return t;
                    })
                }
            }).pseudos.nth = w.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[t] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e;
                };
            }(t);
            for (t in {
                submit: !0,
                reset: !0
            }) w.pseudos[t] = function(o) {
                return function(t) {
                    var e = t.nodeName.toLowerCase();
                    return ("input" === e || "button" === e) && t.type === o;
                };
            }(t);
            function bt() {}
            function ht(t) {
                for (var e = 0, o = t.length, r = ""; e < o; e++) r += t[e].value;
                return r;
            }
            function xt(l, t, e) {
                var d = t.dir, s = t.next, m = s || d, c = e && "parentNode" === m, p = r++;
                return t.first ? function(t, e, o) {
                    for (;t = t[d]; ) if (1 === t.nodeType || c) return l(t, e, o);
                    return !1;
                } : function(t, e, o) {
                    var r, n, i, a = [ C, p ];
                    if (o) {
                        for (;t = t[d]; ) if ((1 === t.nodeType || c) && l(t, e, o)) return !0;
                    } else for (;t = t[d]; ) if (1 === t.nodeType || c) if (n = (i = t[T] || (t[T] = {}))[t.uniqueID] || (i[t.uniqueID] = {}), 
                    s && s === t.nodeName.toLowerCase()) t = t[d] || t; else {
                        if ((r = n[m]) && r[0] === C && r[1] === p) return a[2] = r[2];
                        if ((n[m] = a)[2] = l(t, e, o)) return !0;
                    }
                    return !1;
                };
            }
            function vt(n) {
                return 1 < n.length ? function(t, e, o) {
                    for (var r = n.length; r--; ) if (!n[r](t, e, o)) return !1;
                    return !0;
                } : n[0];
            }
            function wt(t, e, o, r, n) {
                for (var i, a = [], l = 0, d = t.length, s = null != e; l < d; l++) (i = t[l]) && (o && !o(i, r, n) || (a.push(i), 
                s && e.push(l)));
                return a;
            }
            function yt(f, g, u, b, h, t) {
                return b && !b[T] && (b = yt(b)), h && !h[T] && (h = yt(h, t)), st(function(t, e, o, r) {
                    var n, i, a, l = [], d = [], s = e.length, m = t || function(t, e, o) {
                        for (var r = 0, n = e.length; r < n; r++) lt(t, e[r], o);
                        return o;
                    }(g || "*", o.nodeType ? [ o ] : o, []), c = !f || !t && g ? m : wt(m, l, f, o, r), p = u ? h || (t ? f : s || b) ? [] : e : c;
                    if (u && u(c, p, o, r), b) for (n = wt(p, d), b(n, [], o, r), i = n.length; i--; ) (a = n[i]) && (p[d[i]] = !(c[d[i]] = a));
                    if (t) {
                        if (h || f) {
                            if (h) {
                                for (n = [], i = p.length; i--; ) (a = p[i]) && n.push(c[i] = a);
                                h(null, p = [], n, r);
                            }
                            for (i = p.length; i--; ) (a = p[i]) && -1 < (n = h ? q(t, a) : l[i]) && (t[n] = !(e[n] = a));
                        }
                    } else p = wt(p === e ? p.splice(s, p.length) : p), h ? h(null, e, p, r) : I.apply(e, p);
                });
            }
            function kt(b, h) {
                function t(t, e, o, r, n) {
                    var i, a, l, d = 0, s = "0", m = t && [], c = [], p = y, f = t || v && w.find.TAG("*", n), g = C += null == p ? 1 : Math.random() || .1, u = f.length;
                    for (n && (y = e == _ || e || n); s !== u && null != (i = f[s]); s++) {
                        if (v && i) {
                            for (a = 0, e || i.ownerDocument == _ || (k(i), o = !E); l = b[a++]; ) if (l(i, e || _, o)) {
                                r.push(i);
                                break;
                            }
                            n && (C = g);
                        }
                        x && ((i = !l && i) && d--, t && m.push(i));
                    }
                    if (d += s, x && s !== d) {
                        for (a = 0; l = h[a++]; ) l(m, c, e, o);
                        if (t) {
                            if (0 < d) for (;s--; ) m[s] || c[s] || (c[s] = L.call(r));
                            c = wt(c);
                        }
                        I.apply(r, c), n && !t && 0 < c.length && 1 < d + h.length && lt.uniqueSort(r);
                    }
                    return n && (C = g, y = p), m;
                }
                var x = 0 < h.length, v = 0 < b.length;
                return x ? st(t) : t;
            }
            return bt.prototype = w.filters = w.pseudos, w.setFilters = new bt(), g = lt.tokenize = function(t, e) {
                var o, r, n, i, a, l, d, s = S[t + " "];
                if (s) return e ? 0 : s.slice(0);
                for (a = t, l = [], d = w.preFilter; a; ) {
                    for (i in o && !(r = $.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(n = [])), 
                    o = !1, (r = Q.exec(a)) && (o = r.shift(), n.push({
                        value: o,
                        type: r[0].replace(U, " ")
                    }), a = a.slice(o.length)), w.filter) !(r = K[i].exec(a)) || d[i] && !(r = d[i](r)) || (o = r.shift(), 
                    n.push({
                        value: o,
                        type: i,
                        matches: r
                    }), a = a.slice(o.length));
                    if (!o) break;
                }
                return e ? a.length : a ? lt.error(t) : S(t, l).slice(0);
            }, p = lt.compile = function(t, e) {
                var o, r = [], n = [], i = z[t + " "];
                if (!i) {
                    for (o = (e = e || g(t)).length; o--; ) (i = function t(e) {
                        for (var n, o, r, i = e.length, a = w.relative[e[0].type], l = a || w.relative[" "], d = a ? 1 : 0, s = xt(function(t) {
                            return t === n;
                        }, l, !0), m = xt(function(t) {
                            return -1 < q(n, t);
                        }, l, !0), c = [ function(t, e, o) {
                            var r = !a && (o || e !== y) || ((n = e).nodeType ? s : m)(t, e, o);
                            return n = null, r;
                        } ]; d < i; d++) if (o = w.relative[e[d].type]) c = [ xt(vt(c), o) ]; else {
                            if ((o = w.filter[e[d].type].apply(null, e[d].matches))[T]) {
                                for (r = ++d; r < i && !w.relative[e[r].type]; r++) ;
                                return yt(1 < d && vt(c), 1 < d && ht(e.slice(0, d - 1).concat({
                                    value: " " === e[d - 2].type ? "*" : ""
                                })).replace(U, "$1"), o, d < r && t(e.slice(d, r)), r < i && t(e = e.slice(r)), r < i && ht(e));
                            }
                            c.push(o);
                        }
                        return vt(c);
                    }(e[o]))[T] ? r.push(i) : n.push(i);
                    (i = z(t, kt(n, r))).selector = t;
                }
                return i;
            }, u = lt.select = function(t, e, o, r) {
                var n, i, a, l, d, s = "function" == typeof t && t, m = !r && g(t = s.selector || t);
                if (o = o || [], 1 === m.length) {
                    if (2 < (i = m[0] = m[0].slice(0)).length && "ID" === (a = i[0]).type && 9 === e.nodeType && E && w.relative[i[1].type]) {
                        if (!(e = (w.find.ID(a.matches[0].replace(rt, c), e) || [])[0])) return o;
                        s && (e = e.parentNode), t = t.slice(i.shift().value.length);
                    }
                    for (n = K.needsContext.test(t) ? 0 : i.length; n-- && (a = i[n], !w.relative[l = a.type]); ) if ((d = w.find[l]) && (r = d(a.matches[0].replace(rt, c), ot.test(i[0].type) && ut(e.parentNode) || e))) {
                        if (i.splice(n, 1), !(t = r.length && ht(i))) return I.apply(o, r), o;
                        break;
                    }
                }
                return (s || p(t, m))(r, e, !E, o, !e || ot.test(t) && ut(e.parentNode) || e), o;
            }, f.sortStable = T.split("").sort(A).join("") === T, f.detectDuplicates = !!s, 
            k(), f.sortDetached = mt(function(t) {
                return 1 & t.compareDocumentPosition(_.createElement("fieldset"));
            }), mt(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
            }) || ct("type|href|height|width", function(t, e, o) {
                if (!o) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
            }), f.attributes && mt(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
            }) || ct("value", function(t, e, o) {
                if (!o && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
            }), mt(function(t) {
                return null == t.getAttribute("disabled");
            }) || ct(P, function(t, e, o) {
                var r;
                if (!o) return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null;
            }), lt;
        }(_);
        T.find = f, T.expr = f.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = f.uniqueSort, 
        T.text = f.getText, T.isXMLDoc = f.isXML, T.contains = f.contains, T.escapeSelector = f.escape;
        function g(t, e, o) {
            for (var r = [], n = void 0 !== o; (t = t[e]) && 9 !== t.nodeType; ) if (1 === t.nodeType) {
                if (n && T(t).is(o)) break;
                r.push(t);
            }
            return r;
        }
        function k(t, e) {
            for (var o = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && o.push(t);
            return o;
        }
        var C = T.expr.match.needsContext;
        function j(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        }
        var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function z(t, o, r) {
            return v(o) ? T.grep(t, function(t, e) {
                return !!o.call(t, e, t) !== r;
            }) : o.nodeType ? T.grep(t, function(t) {
                return t === o !== r;
            }) : "string" != typeof o ? T.grep(t, function(t) {
                return -1 < n.call(o, t) !== r;
            }) : T.filter(o, t, r);
        }
        T.filter = function(t, e, o) {
            var r = e[0];
            return o && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? T.find.matchesSelector(r, t) ? [ r ] : [] : T.find.matches(t, T.grep(e, function(t) {
                return 1 === t.nodeType;
            }));
        }, T.fn.extend({
            find: function(t) {
                var e, o, r = this.length, n = this;
                if ("string" != typeof t) return this.pushStack(T(t).filter(function() {
                    for (e = 0; e < r; e++) if (T.contains(n[e], this)) return !0;
                }));
                for (o = this.pushStack([]), e = 0; e < r; e++) T.find(t, n[e], o);
                return 1 < r ? T.uniqueSort(o) : o;
            },
            filter: function(t) {
                return this.pushStack(z(this, t || [], !1));
            },
            not: function(t) {
                return this.pushStack(z(this, t || [], !0));
            },
            is: function(t) {
                return !!z(this, "string" == typeof t && C.test(t) ? T(t) : t || [], !1).length;
            }
        });
        var N, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (T.fn.init = function(t, e, o) {
            var r, n;
            if (!t) return this;
            if (o = o || N, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, 
            this) : v(t) ? void 0 !== o.ready ? o.ready(t) : t(T) : T.makeArray(t, this);
            if (!(r = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [ null, t, null ] : A.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || o).find(t) : this.constructor(e).find(t);
            if (r[1]) {
                if (e = e instanceof T ? e[0] : e, T.merge(this, T.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : E, !0)), 
                S.test(r[1]) && T.isPlainObject(e)) for (r in e) v(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                return this;
            }
            return (n = E.getElementById(r[2])) && (this[0] = n, this.length = 1), this;
        }).prototype = T.fn, N = T(E);
        var D = /^(?:parents|prev(?:Until|All))/, L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function O(t, e) {
            for (;(t = t[e]) && 1 !== t.nodeType; ) ;
            return t;
        }
        T.fn.extend({
            has: function(t) {
                var e = T(t, this), o = e.length;
                return this.filter(function() {
                    for (var t = 0; t < o; t++) if (T.contains(this, e[t])) return !0;
                });
            },
            closest: function(t, e) {
                var o, r = 0, n = this.length, i = [], a = "string" != typeof t && T(t);
                if (!C.test(t)) for (;r < n; r++) for (o = this[r]; o && o !== e; o = o.parentNode) if (o.nodeType < 11 && (a ? -1 < a.index(o) : 1 === o.nodeType && T.find.matchesSelector(o, t))) {
                    i.push(o);
                    break;
                }
                return this.pushStack(1 < i.length ? T.uniqueSort(i) : i);
            },
            index: function(t) {
                return t ? "string" == typeof t ? n.call(T(t), this[0]) : n.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function(t, e) {
                return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))));
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
            }
        }), T.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null;
            },
            parents: function(t) {
                return g(t, "parentNode");
            },
            parentsUntil: function(t, e, o) {
                return g(t, "parentNode", o);
            },
            next: function(t) {
                return O(t, "nextSibling");
            },
            prev: function(t) {
                return O(t, "previousSibling");
            },
            nextAll: function(t) {
                return g(t, "nextSibling");
            },
            prevAll: function(t) {
                return g(t, "previousSibling");
            },
            nextUntil: function(t, e, o) {
                return g(t, "nextSibling", o);
            },
            prevUntil: function(t, e, o) {
                return g(t, "previousSibling", o);
            },
            siblings: function(t) {
                return k((t.parentNode || {}).firstChild, t);
            },
            children: function(t) {
                return k(t.firstChild);
            },
            contents: function(t) {
                return null != t.contentDocument && r(t.contentDocument) ? t.contentDocument : (j(t, "template") && (t = t.content || t), 
                T.merge([], t.childNodes));
            }
        }, function(r, n) {
            T.fn[r] = function(t, e) {
                var o = T.map(this, n, t);
                return "Until" !== r.slice(-5) && (e = t), e && "string" == typeof e && (o = T.filter(e, o)), 
                1 < this.length && (L[r] || T.uniqueSort(o), D.test(r) && o.reverse()), this.pushStack(o);
            };
        });
        var I = /[^\x20\t\r\n\f]+/g;
        function M(t) {
            return t;
        }
        function q(t) {
            throw t;
        }
        function P(t, e, o, r) {
            var n;
            try {
                t && v(n = t.promise) ? n.call(t).done(e).fail(o) : t && v(n = t.then) ? n.call(t, e, o) : e.apply(void 0, [ t ].slice(r));
            } catch (t) {
                o.apply(void 0, [ t ]);
            }
        }
        T.Callbacks = function(r) {
            var t, o;
            r = "string" == typeof r ? (t = r, o = {}, T.each(t.match(I) || [], function(t, e) {
                o[e] = !0;
            }), o) : T.extend({}, r);
            function n() {
                for (l = l || r.once, a = i = !0; s.length; m = -1) for (e = s.shift(); ++m < d.length; ) !1 === d[m].apply(e[0], e[1]) && r.stopOnFalse && (m = d.length, 
                e = !1);
                r.memory || (e = !1), i = !1, l && (d = e ? [] : "");
            }
            var i, e, a, l, d = [], s = [], m = -1, c = {
                add: function() {
                    return d && (e && !i && (m = d.length - 1, s.push(e)), function o(t) {
                        T.each(t, function(t, e) {
                            v(e) ? r.unique && c.has(e) || d.push(e) : e && e.length && "string" !== y(e) && o(e);
                        });
                    }(arguments), e && !i && n()), this;
                },
                remove: function() {
                    return T.each(arguments, function(t, e) {
                        for (var o; -1 < (o = T.inArray(e, d, o)); ) d.splice(o, 1), o <= m && m--;
                    }), this;
                },
                has: function(t) {
                    return t ? -1 < T.inArray(t, d) : 0 < d.length;
                },
                empty: function() {
                    return d = d && [], this;
                },
                disable: function() {
                    return l = s = [], d = e = "", this;
                },
                disabled: function() {
                    return !d;
                },
                lock: function() {
                    return l = s = [], e || i || (d = e = ""), this;
                },
                locked: function() {
                    return !!l;
                },
                fireWith: function(t, e) {
                    return l || (e = [ t, (e = e || []).slice ? e.slice() : e ], s.push(e), i || n()), 
                    this;
                },
                fire: function() {
                    return c.fireWith(this, arguments), this;
                },
                fired: function() {
                    return !!a;
                }
            };
            return c;
        }, T.extend({
            Deferred: function(t) {
                var i = [ [ "notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2 ], [ "resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected" ] ], n = "pending", a = {
                    state: function() {
                        return n;
                    },
                    always: function() {
                        return l.done(arguments).fail(arguments), this;
                    },
                    catch: function(t) {
                        return a.then(null, t);
                    },
                    pipe: function() {
                        var n = arguments;
                        return T.Deferred(function(r) {
                            T.each(i, function(t, e) {
                                var o = v(n[e[4]]) && n[e[4]];
                                l[e[1]](function() {
                                    var t = o && o.apply(this, arguments);
                                    t && v(t.promise) ? t.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[e[0] + "With"](this, o ? [ t ] : arguments);
                                });
                            }), n = null;
                        }).promise();
                    },
                    then: function(e, o, r) {
                        var d = 0;
                        function s(n, i, a, l) {
                            return function() {
                                function t() {
                                    var t, e;
                                    if (!(n < d)) {
                                        if ((t = a.apply(o, r)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                        e = t && ("object" == typeof t || "function" == typeof t) && t.then, v(e) ? l ? e.call(t, s(d, i, M, l), s(d, i, q, l)) : (d++, 
                                        e.call(t, s(d, i, M, l), s(d, i, q, l), s(d, i, M, i.notifyWith))) : (a !== M && (o = void 0, 
                                        r = [ t ]), (l || i.resolveWith)(o, r));
                                    }
                                }
                                var o = this, r = arguments, e = l ? t : function() {
                                    try {
                                        t();
                                    } catch (t) {
                                        T.Deferred.exceptionHook && T.Deferred.exceptionHook(t, e.stackTrace), d <= n + 1 && (a !== q && (o = void 0, 
                                        r = [ t ]), i.rejectWith(o, r));
                                    }
                                };
                                n ? e() : (T.Deferred.getStackHook && (e.stackTrace = T.Deferred.getStackHook()), 
                                _.setTimeout(e));
                            };
                        }
                        return T.Deferred(function(t) {
                            i[0][3].add(s(0, t, v(r) ? r : M, t.notifyWith)), i[1][3].add(s(0, t, v(e) ? e : M)), 
                            i[2][3].add(s(0, t, v(o) ? o : q));
                        }).promise();
                    },
                    promise: function(t) {
                        return null != t ? T.extend(t, a) : a;
                    }
                }, l = {};
                return T.each(i, function(t, e) {
                    var o = e[2], r = e[5];
                    a[e[1]] = o.add, r && o.add(function() {
                        n = r;
                    }, i[3 - t][2].disable, i[3 - t][3].disable, i[0][2].lock, i[0][3].lock), o.add(e[3].fire), 
                    l[e[0]] = function() {
                        return l[e[0] + "With"](this === l ? void 0 : this, arguments), this;
                    }, l[e[0] + "With"] = o.fireWith;
                }), a.promise(l), t && t.call(l, l), l;
            },
            when: function(t) {
                function e(e) {
                    return function(t) {
                        n[e] = this, i[e] = 1 < arguments.length ? l.call(arguments) : t, --o || a.resolveWith(n, i);
                    };
                }
                var o = arguments.length, r = o, n = Array(r), i = l.call(arguments), a = T.Deferred();
                if (o <= 1 && (P(t, a.done(e(r)).resolve, a.reject, !o), "pending" === a.state() || v(i[r] && i[r].then))) return a.then();
                for (;r--; ) P(i[r], e(r), a.reject);
                return a.promise();
            }
        });
        var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        T.Deferred.exceptionHook = function(t, e) {
            _.console && _.console.warn && t && H.test(t.name) && _.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
        }, T.readyException = function(t) {
            _.setTimeout(function() {
                throw t;
            });
        };
        var R = T.Deferred();
        function B() {
            E.removeEventListener("DOMContentLoaded", B), _.removeEventListener("load", B), 
            T.ready();
        }
        T.fn.ready = function(t) {
            return R.then(t).catch(function(t) {
                T.readyException(t);
            }), this;
        }, T.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --T.readyWait : T.isReady) || (T.isReady = !0) !== t && 0 < --T.readyWait || R.resolveWith(E, [ T ]);
            }
        }), T.ready.then = R.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? _.setTimeout(T.ready) : (E.addEventListener("DOMContentLoaded", B), 
        _.addEventListener("load", B));
        var F = function(t, e, o, r, n, i, a) {
            var l = 0, d = t.length, s = null == o;
            if ("object" === y(o)) for (l in n = !0, o) F(t, e, l, o[l], !0, i, a); else if (void 0 !== r && (n = !0, 
            v(r) || (a = !0), s && (e = a ? (e.call(t, r), null) : (s = e, function(t, e, o) {
                return s.call(T(t), o);
            })), e)) for (;l < d; l++) e(t[l], o, a ? r : r.call(t[l], l, e(t[l], o)));
            return n ? t : s ? e.call(t) : d ? e(t[0], o) : i;
        }, W = /^-ms-/, U = /-([a-z])/g;
        function $(t, e) {
            return e.toUpperCase();
        }
        function Q(t) {
            return t.replace(W, "ms-").replace(U, $);
        }
        function X(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
        }
        function V() {
            this.expando = T.expando + V.uid++;
        }
        V.uid = 1, V.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, X(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e;
            },
            set: function(t, e, o) {
                var r, n = this.cache(t);
                if ("string" == typeof e) n[Q(e)] = o; else for (r in e) n[Q(r)] = e[r];
                return n;
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Q(e)];
            },
            access: function(t, e, o) {
                return void 0 === e || e && "string" == typeof e && void 0 === o ? this.get(t, e) : (this.set(t, e, o), 
                void 0 !== o ? o : e);
            },
            remove: function(t, e) {
                var o, r = t[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== e) {
                        o = (e = Array.isArray(e) ? e.map(Q) : (e = Q(e)) in r ? [ e ] : e.match(I) || []).length;
                        for (;o--; ) delete r[e[o]];
                    }
                    void 0 !== e && !T.isEmptyObject(r) || (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !T.isEmptyObject(e);
            }
        };
        var Y = new V(), K = new V(), G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, J = /[A-Z]/g;
        function Z(t, e, o) {
            var r, n;
            if (void 0 === o && 1 === t.nodeType) if (r = "data-" + e.replace(J, "-$&").toLowerCase(), 
            "string" == typeof (o = t.getAttribute(r))) {
                try {
                    o = "true" === (n = o) || "false" !== n && ("null" === n ? null : n === +n + "" ? +n : G.test(n) ? JSON.parse(n) : n);
                } catch (t) {}
                K.set(t, e, o);
            } else o = void 0;
            return o;
        }
        T.extend({
            hasData: function(t) {
                return K.hasData(t) || Y.hasData(t);
            },
            data: function(t, e, o) {
                return K.access(t, e, o);
            },
            removeData: function(t, e) {
                K.remove(t, e);
            },
            _data: function(t, e, o) {
                return Y.access(t, e, o);
            },
            _removeData: function(t, e) {
                Y.remove(t, e);
            }
        }), T.fn.extend({
            data: function(o, t) {
                var e, r, n, i = this[0], a = i && i.attributes;
                if (void 0 !== o) return "object" == typeof o ? this.each(function() {
                    K.set(this, o);
                }) : F(this, function(t) {
                    var e;
                    return i && void 0 === t ? void 0 !== (e = K.get(i, o)) || void 0 !== (e = Z(i, o)) ? e : void 0 : void this.each(function() {
                        K.set(this, o, t);
                    });
                }, null, t, 1 < arguments.length, null, !0);
                if (this.length && (n = K.get(i), 1 === i.nodeType && !Y.get(i, "hasDataAttrs"))) {
                    for (e = a.length; e--; ) a[e] && 0 === (r = a[e].name).indexOf("data-") && (r = Q(r.slice(5)), 
                    Z(i, r, n[r]));
                    Y.set(i, "hasDataAttrs", !0);
                }
                return n;
            },
            removeData: function(t) {
                return this.each(function() {
                    K.remove(this, t);
                });
            }
        }), T.extend({
            queue: function(t, e, o) {
                var r;
                if (t) return e = (e || "fx") + "queue", r = Y.get(t, e), o && (!r || Array.isArray(o) ? r = Y.access(t, e, T.makeArray(o)) : r.push(o)), 
                r || [];
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var o = T.queue(t, e), r = o.length, n = o.shift(), i = T._queueHooks(t, e);
                "inprogress" === n && (n = o.shift(), r--), n && ("fx" === e && o.unshift("inprogress"), 
                delete i.stop, n.call(t, function() {
                    T.dequeue(t, e);
                }, i)), !r && i && i.empty.fire();
            },
            _queueHooks: function(t, e) {
                var o = e + "queueHooks";
                return Y.get(t, o) || Y.access(t, o, {
                    empty: T.Callbacks("once memory").add(function() {
                        Y.remove(t, [ e + "queue", o ]);
                    })
                });
            }
        }), T.fn.extend({
            queue: function(e, o) {
                var t = 2;
                return "string" != typeof e && (o = e, e = "fx", t--), arguments.length < t ? T.queue(this[0], e) : void 0 === o ? this : this.each(function() {
                    var t = T.queue(this, e, o);
                    T._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && T.dequeue(this, e);
                });
            },
            dequeue: function(t) {
                return this.each(function() {
                    T.dequeue(this, t);
                });
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", []);
            },
            promise: function(t, e) {
                function o() {
                    --n || i.resolveWith(a, [ a ]);
                }
                var r, n = 1, i = T.Deferred(), a = this, l = this.length;
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; l--; ) (r = Y.get(a[l], t + "queueHooks")) && r.empty && (n++, 
                r.empty.add(o));
                return o(), i.promise(e);
            }
        });
        var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"), ot = [ "Top", "Right", "Bottom", "Left" ], rt = E.documentElement, nt = function(t) {
            return T.contains(t.ownerDocument, t);
        }, it = {
            composed: !0
        };
        rt.getRootNode && (nt = function(t) {
            return T.contains(t.ownerDocument, t) || t.getRootNode(it) === t.ownerDocument;
        });
        var at = function(t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && nt(t) && "none" === T.css(t, "display");
        };
        function lt(t, e, o, r) {
            var n, i, a = 20, l = r ? function() {
                return r.cur();
            } : function() {
                return T.css(t, e, "");
            }, d = l(), s = o && o[3] || (T.cssNumber[e] ? "" : "px"), m = t.nodeType && (T.cssNumber[e] || "px" !== s && +d) && et.exec(T.css(t, e));
            if (m && m[3] !== s) {
                for (d /= 2, s = s || m[3], m = +d || 1; a--; ) T.style(t, e, m + s), (1 - i) * (1 - (i = l() / d || .5)) <= 0 && (a = 0), 
                m /= i;
                m *= 2, T.style(t, e, m + s), o = o || [];
            }
            return o && (m = +m || +d || 0, n = o[1] ? m + (o[1] + 1) * o[2] : +o[2], r && (r.unit = s, 
            r.start = m, r.end = n)), n;
        }
        var dt = {};
        function st(t, e) {
            for (var o, r, n, i, a, l, d, s = [], m = 0, c = t.length; m < c; m++) (r = t[m]).style && (o = r.style.display, 
            e ? ("none" === o && (s[m] = Y.get(r, "display") || null, s[m] || (r.style.display = "")), 
            "" === r.style.display && at(r) && (s[m] = (d = a = i = void 0, a = (n = r).ownerDocument, 
            l = n.nodeName, (d = dt[l]) || (i = a.body.appendChild(a.createElement(l)), d = T.css(i, "display"), 
            i.parentNode.removeChild(i), "none" === d && (d = "block"), dt[l] = d)))) : "none" !== o && (s[m] = "none", 
            Y.set(r, "display", o)));
            for (m = 0; m < c; m++) null != s[m] && (t[m].style.display = s[m]);
            return t;
        }
        T.fn.extend({
            show: function() {
                return st(this, !0);
            },
            hide: function() {
                return st(this);
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    at(this) ? T(this).show() : T(this).hide();
                });
            }
        });
        var mt, ct, pt = /^(?:checkbox|radio)$/i, ft = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, gt = /^$|^module$|\/(?:java|ecma)script/i;
        mt = E.createDocumentFragment().appendChild(E.createElement("div")), (ct = E.createElement("input")).setAttribute("type", "radio"), 
        ct.setAttribute("checked", "checked"), ct.setAttribute("name", "t"), mt.appendChild(ct), 
        x.checkClone = mt.cloneNode(!0).cloneNode(!0).lastChild.checked, mt.innerHTML = "<textarea>x</textarea>", 
        x.noCloneChecked = !!mt.cloneNode(!0).lastChild.defaultValue, mt.innerHTML = "<option></option>", 
        x.option = !!mt.lastChild;
        var ut = {
            thead: [ 1, "<table>", "</table>" ],
            col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
            tr: [ 2, "<table><tbody>", "</tbody></table>" ],
            td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
            _default: [ 0, "", "" ]
        };
        function bt(t, e) {
            var o = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && j(t, e) ? T.merge([ t ], o) : o;
        }
        function ht(t, e) {
            for (var o = 0, r = t.length; o < r; o++) Y.set(t[o], "globalEval", !e || Y.get(e[o], "globalEval"));
        }
        ut.tbody = ut.tfoot = ut.colgroup = ut.caption = ut.thead, ut.th = ut.td, x.option || (ut.optgroup = ut.option = [ 1, "<select multiple='multiple'>", "</select>" ]);
        var xt = /<|&#?\w+;/;
        function vt(t, e, o, r, n) {
            for (var i, a, l, d, s, m, c = e.createDocumentFragment(), p = [], f = 0, g = t.length; f < g; f++) if ((i = t[f]) || 0 === i) if ("object" === y(i)) T.merge(p, i.nodeType ? [ i ] : i); else if (xt.test(i)) {
                for (a = a || c.appendChild(e.createElement("div")), l = (ft.exec(i) || [ "", "" ])[1].toLowerCase(), 
                d = ut[l] || ut._default, a.innerHTML = d[1] + T.htmlPrefilter(i) + d[2], m = d[0]; m--; ) a = a.lastChild;
                T.merge(p, a.childNodes), (a = c.firstChild).textContent = "";
            } else p.push(e.createTextNode(i));
            for (c.textContent = "", f = 0; i = p[f++]; ) if (r && -1 < T.inArray(i, r)) n && n.push(i); else if (s = nt(i), 
            a = bt(c.appendChild(i), "script"), s && ht(a), o) for (m = 0; i = a[m++]; ) gt.test(i.type || "") && o.push(i);
            return c;
        }
        var wt = /^key/, yt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, kt = /^([^.]*)(?:\.(.+)|)/;
        function _t() {
            return !0;
        }
        function Et() {
            return !1;
        }
        function Tt(t, e) {
            return t === function() {
                try {
                    return E.activeElement;
                } catch (t) {}
            }() == ("focus" === e);
        }
        function Ct(t, e, o, r, n, i) {
            var a, l;
            if ("object" == typeof e) {
                for (l in "string" != typeof o && (r = r || o, o = void 0), e) Ct(t, l, o, r, e[l], i);
                return t;
            }
            if (null == r && null == n ? (n = o, r = o = void 0) : null == n && ("string" == typeof o ? (n = r, 
            r = void 0) : (n = r, r = o, o = void 0)), !1 === n) n = Et; else if (!n) return t;
            return 1 === i && (a = n, (n = function(t) {
                return T().off(t), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = T.guid++)), t.each(function() {
                T.event.add(this, e, n, r, o);
            });
        }
        function jt(t, n, i) {
            i ? (Y.set(t, n, !1), T.event.add(t, n, {
                namespace: !1,
                handler: function(t) {
                    var e, o, r = Y.get(this, n);
                    if (1 & t.isTrigger && this[n]) {
                        if (r.length) (T.event.special[n] || {}).delegateType && t.stopPropagation(); else if (r = l.call(arguments), 
                        Y.set(this, n, r), e = i(this, n), this[n](), r !== (o = Y.get(this, n)) || e ? Y.set(this, n, !1) : o = {}, 
                        r !== o) return t.stopImmediatePropagation(), t.preventDefault(), o.value;
                    } else r.length && (Y.set(this, n, {
                        value: T.event.trigger(T.extend(r[0], T.Event.prototype), r.slice(1), this)
                    }), t.stopImmediatePropagation());
                }
            })) : void 0 === Y.get(t, n) && T.event.add(t, n, _t);
        }
        T.event = {
            global: {},
            add: function(e, t, o, r, n) {
                var i, a, l, d, s, m, c, p, f, g, u, b = Y.get(e);
                if (X(e)) for (o.handler && (o = (i = o).handler, n = i.selector), n && T.find.matchesSelector(rt, n), 
                o.guid || (o.guid = T.guid++), (d = b.events) || (d = b.events = Object.create(null)), 
                (a = b.handle) || (a = b.handle = function(t) {
                    return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0;
                }), s = (t = (t || "").match(I) || [ "" ]).length; s--; ) f = u = (l = kt.exec(t[s]) || [])[1], 
                g = (l[2] || "").split(".").sort(), f && (c = T.event.special[f] || {}, f = (n ? c.delegateType : c.bindType) || f, 
                c = T.event.special[f] || {}, m = T.extend({
                    type: f,
                    origType: u,
                    data: r,
                    handler: o,
                    guid: o.guid,
                    selector: n,
                    needsContext: n && T.expr.match.needsContext.test(n),
                    namespace: g.join(".")
                }, i), (p = d[f]) || ((p = d[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, r, g, a) || e.addEventListener && e.addEventListener(f, a)), 
                c.add && (c.add.call(e, m), m.handler.guid || (m.handler.guid = o.guid)), n ? p.splice(p.delegateCount++, 0, m) : p.push(m), 
                T.event.global[f] = !0);
            },
            remove: function(t, e, o, r, n) {
                var i, a, l, d, s, m, c, p, f, g, u, b = Y.hasData(t) && Y.get(t);
                if (b && (d = b.events)) {
                    for (s = (e = (e || "").match(I) || [ "" ]).length; s--; ) if (f = u = (l = kt.exec(e[s]) || [])[1], 
                    g = (l[2] || "").split(".").sort(), f) {
                        for (c = T.event.special[f] || {}, p = d[f = (r ? c.delegateType : c.bindType) || f] || [], 
                        l = l[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--; ) m = p[i], 
                        !n && u !== m.origType || o && o.guid !== m.guid || l && !l.test(m.namespace) || r && r !== m.selector && ("**" !== r || !m.selector) || (p.splice(i, 1), 
                        m.selector && p.delegateCount--, c.remove && c.remove.call(t, m));
                        a && !p.length && (c.teardown && !1 !== c.teardown.call(t, g, b.handle) || T.removeEvent(t, f, b.handle), 
                        delete d[f]);
                    } else for (f in d) T.event.remove(t, f + e[s], o, r, !0);
                    T.isEmptyObject(d) && Y.remove(t, "handle events");
                }
            },
            dispatch: function(t) {
                var e, o, r, n, i, a, l = new Array(arguments.length), d = T.event.fix(t), s = (Y.get(this, "events") || Object.create(null))[d.type] || [], m = T.event.special[d.type] || {};
                for (l[0] = d, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (d.delegateTarget = this, !m.preDispatch || !1 !== m.preDispatch.call(this, d)) {
                    for (a = T.event.handlers.call(this, d, s), e = 0; (n = a[e++]) && !d.isPropagationStopped(); ) for (d.currentTarget = n.elem, 
                    o = 0; (i = n.handlers[o++]) && !d.isImmediatePropagationStopped(); ) d.rnamespace && !1 !== i.namespace && !d.rnamespace.test(i.namespace) || (d.handleObj = i, 
                    d.data = i.data, void 0 !== (r = ((T.event.special[i.origType] || {}).handle || i.handler).apply(n.elem, l)) && !1 === (d.result = r) && (d.preventDefault(), 
                    d.stopPropagation()));
                    return m.postDispatch && m.postDispatch.call(this, d), d.result;
                }
            },
            handlers: function(t, e) {
                var o, r, n, i, a, l = [], d = e.delegateCount, s = t.target;
                if (d && s.nodeType && !("click" === t.type && 1 <= t.button)) for (;s !== this; s = s.parentNode || this) if (1 === s.nodeType && ("click" !== t.type || !0 !== s.disabled)) {
                    for (i = [], a = {}, o = 0; o < d; o++) void 0 === a[n = (r = e[o]).selector + " "] && (a[n] = r.needsContext ? -1 < T(n, this).index(s) : T.find(n, this, null, [ s ]).length), 
                    a[n] && i.push(r);
                    i.length && l.push({
                        elem: s,
                        handlers: i
                    });
                }
                return s = this, d < e.length && l.push({
                    elem: s,
                    handlers: e.slice(d)
                }), l;
            },
            addProp: function(e, t) {
                Object.defineProperty(T.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: v(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent);
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e];
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        });
                    }
                });
            },
            fix: function(t) {
                return t[T.expando] ? t : new T.Event(t);
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(t) {
                        var e = this || t;
                        return pt.test(e.type) && e.click && j(e, "input") && jt(e, "click", _t), !1;
                    },
                    trigger: function(t) {
                        var e = this || t;
                        return pt.test(e.type) && e.click && j(e, "input") && jt(e, "click"), !0;
                    },
                    _default: function(t) {
                        var e = t.target;
                        return pt.test(e.type) && e.click && j(e, "input") && Y.get(e, "click") || j(e, "a");
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                    }
                }
            }
        }, T.removeEvent = function(t, e, o) {
            t.removeEventListener && t.removeEventListener(e, o);
        }, T.Event = function(t, e) {
            if (!(this instanceof T.Event)) return new T.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? _t : Et, 
            this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, 
            this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, 
            e && T.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[T.expando] = !0;
        }, T.Event.prototype = {
            constructor: T.Event,
            isDefaultPrevented: Et,
            isPropagationStopped: Et,
            isImmediatePropagationStopped: Et,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = _t, t && !this.isSimulated && t.preventDefault();
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = _t, t && !this.isSimulated && t.stopPropagation();
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = _t, t && !this.isSimulated && t.stopImmediatePropagation(), 
                this.stopPropagation();
            }
        }, T.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
                var e = t.button;
                return null == t.which && wt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && yt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which;
            }
        }, T.event.addProp), T.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            T.event.special[t] = {
                setup: function() {
                    return jt(this, t, Tt), !1;
                },
                trigger: function() {
                    return jt(this, t), !0;
                },
                delegateType: e
            };
        }), T.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, n) {
            T.event.special[t] = {
                delegateType: n,
                bindType: n,
                handle: function(t) {
                    var e, o = t.relatedTarget, r = t.handleObj;
                    return o && (o === this || T.contains(this, o)) || (t.type = r.origType, e = r.handler.apply(this, arguments), 
                    t.type = n), e;
                }
            };
        }), T.fn.extend({
            on: function(t, e, o, r) {
                return Ct(this, t, e, o, r);
            },
            one: function(t, e, o, r) {
                return Ct(this, t, e, o, r, 1);
            },
            off: function(t, e, o) {
                var r, n;
                if (t && t.preventDefault && t.handleObj) return r = t.handleObj, T(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
                this;
                if ("object" != typeof t) return !1 !== e && "function" != typeof e || (o = e, e = void 0), 
                !1 === o && (o = Et), this.each(function() {
                    T.event.remove(this, t, o, e);
                });
                for (n in t) this.off(n, e, t[n]);
                return this;
            }
        });
        var St = /<script|<style|<link/i, zt = /checked\s*(?:[^=]|=\s*.checked.)/i, Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function At(t, e) {
            return j(t, "table") && j(11 !== e.nodeType ? e : e.firstChild, "tr") && T(t).children("tbody")[0] || t;
        }
        function Dt(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
        }
        function Lt(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), 
            t;
        }
        function Ot(t, e) {
            var o, r, n, i, a, l;
            if (1 === e.nodeType) {
                if (Y.hasData(t) && (l = Y.get(t).events)) for (n in Y.remove(e, "handle events"), 
                l) for (o = 0, r = l[n].length; o < r; o++) T.event.add(e, n, l[n][o]);
                K.hasData(t) && (i = K.access(t), a = T.extend({}, i), K.set(e, a));
            }
        }
        function It(o, r, n, i) {
            r = b(r);
            var t, e, a, l, d, s, m = 0, c = o.length, p = c - 1, f = r[0], g = v(f);
            if (g || 1 < c && "string" == typeof f && !x.checkClone && zt.test(f)) return o.each(function(t) {
                var e = o.eq(t);
                g && (r[0] = f.call(this, t, e.html())), It(e, r, n, i);
            });
            if (c && (e = (t = vt(r, o[0].ownerDocument, !1, o, i)).firstChild, 1 === t.childNodes.length && (t = e), 
            e || i)) {
                for (l = (a = T.map(bt(t, "script"), Dt)).length; m < c; m++) d = t, m !== p && (d = T.clone(d, !0, !0), 
                l && T.merge(a, bt(d, "script"))), n.call(o[m], d, m);
                if (l) for (s = a[a.length - 1].ownerDocument, T.map(a, Lt), m = 0; m < l; m++) d = a[m], 
                gt.test(d.type || "") && !Y.access(d, "globalEval") && T.contains(s, d) && (d.src && "module" !== (d.type || "").toLowerCase() ? T._evalUrl && !d.noModule && T._evalUrl(d.src, {
                    nonce: d.nonce || d.getAttribute("nonce")
                }, s) : w(d.textContent.replace(Nt, ""), d, s));
            }
            return o;
        }
        function Mt(t, e, o) {
            for (var r, n = e ? T.filter(e, t) : t, i = 0; null != (r = n[i]); i++) o || 1 !== r.nodeType || T.cleanData(bt(r)), 
            r.parentNode && (o && nt(r) && ht(bt(r, "script")), r.parentNode.removeChild(r));
            return t;
        }
        T.extend({
            htmlPrefilter: function(t) {
                return t;
            },
            clone: function(t, e, o) {
                var r, n, i, a, l, d, s, m = t.cloneNode(!0), c = nt(t);
                if (!(x.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t))) for (a = bt(m), 
                r = 0, n = (i = bt(t)).length; r < n; r++) l = i[r], d = a[r], "input" === (s = d.nodeName.toLowerCase()) && pt.test(l.type) ? d.checked = l.checked : "input" !== s && "textarea" !== s || (d.defaultValue = l.defaultValue);
                if (e) if (o) for (i = i || bt(t), a = a || bt(m), r = 0, n = i.length; r < n; r++) Ot(i[r], a[r]); else Ot(t, m);
                return 0 < (a = bt(m, "script")).length && ht(a, !c && bt(t, "script")), m;
            },
            cleanData: function(t) {
                for (var e, o, r, n = T.event.special, i = 0; void 0 !== (o = t[i]); i++) if (X(o)) {
                    if (e = o[Y.expando]) {
                        if (e.events) for (r in e.events) n[r] ? T.event.remove(o, r) : T.removeEvent(o, r, e.handle);
                        o[Y.expando] = void 0;
                    }
                    o[K.expando] && (o[K.expando] = void 0);
                }
            }
        }), T.fn.extend({
            detach: function(t) {
                return Mt(this, t, !0);
            },
            remove: function(t) {
                return Mt(this, t);
            },
            text: function(t) {
                return F(this, function(t) {
                    return void 0 === t ? T.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
                    });
                }, null, t, arguments.length);
            },
            append: function() {
                return It(this, arguments, function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || At(this, t).appendChild(t);
                });
            },
            prepend: function() {
                return It(this, arguments, function(t) {
                    var e;
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (e = At(this, t)).insertBefore(t, e.firstChild);
                });
            },
            before: function() {
                return It(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this);
                });
            },
            after: function() {
                return It(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                });
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (T.cleanData(bt(t, !1)), 
                t.textContent = "");
                return this;
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return T.clone(this, t, e);
                });
            },
            html: function(t) {
                return F(this, function(t) {
                    var e = this[0] || {}, o = 0, r = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !St.test(t) && !ut[(ft.exec(t) || [ "", "" ])[1].toLowerCase()]) {
                        t = T.htmlPrefilter(t);
                        try {
                            for (;o < r; o++) 1 === (e = this[o] || {}).nodeType && (T.cleanData(bt(e, !1)), 
                            e.innerHTML = t);
                            e = 0;
                        } catch (t) {}
                    }
                    e && this.empty().append(t);
                }, null, t, arguments.length);
            },
            replaceWith: function() {
                var o = [];
                return It(this, arguments, function(t) {
                    var e = this.parentNode;
                    T.inArray(this, o) < 0 && (T.cleanData(bt(this)), e && e.replaceChild(t, this));
                }, o);
            }
        }), T.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, a) {
            T.fn[t] = function(t) {
                for (var e, o = [], r = T(t), n = r.length - 1, i = 0; i <= n; i++) e = i === n ? this : this.clone(!0), 
                T(r[i])[a](e), d.apply(o, e.get());
                return this.pushStack(o);
            };
        });
        function qt(t, e, o) {
            var r, n, i = {};
            for (n in e) i[n] = t.style[n], t.style[n] = e[n];
            for (n in r = o.call(t), e) t.style[n] = i[n];
            return r;
        }
        var Pt, Ht, Rt, Bt, Ft, Wt, Ut, $t, Qt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"), Xt = function(t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = _), e.getComputedStyle(t);
        }, Vt = new RegExp(ot.join("|"), "i");
        function Yt() {
            var t;
            $t && (Ut.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
            $t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
            rt.appendChild(Ut).appendChild($t), t = _.getComputedStyle($t), Pt = "1%" !== t.top, 
            Wt = 12 === Kt(t.marginLeft), $t.style.right = "60%", Bt = 36 === Kt(t.right), Ht = 36 === Kt(t.width), 
            $t.style.position = "absolute", Rt = 12 === Kt($t.offsetWidth / 3), rt.removeChild(Ut), 
            $t = null);
        }
        function Kt(t) {
            return Math.round(parseFloat(t));
        }
        function Gt(t, e, o) {
            var r, n, i, a, l = t.style;
            return (o = o || Xt(t)) && ("" !== (a = o.getPropertyValue(e) || o[e]) || nt(t) || (a = T.style(t, e)), 
            !x.pixelBoxStyles() && Qt.test(a) && Vt.test(e) && (r = l.width, n = l.minWidth, 
            i = l.maxWidth, l.minWidth = l.maxWidth = l.width = a, a = o.width, l.width = r, 
            l.minWidth = n, l.maxWidth = i)), void 0 !== a ? a + "" : a;
        }
        function Jt(t, e) {
            return {
                get: function() {
                    if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get;
                }
            };
        }
        Ut = E.createElement("div"), ($t = E.createElement("div")).style && ($t.style.backgroundClip = "content-box", 
        $t.cloneNode(!0).style.backgroundClip = "", x.clearCloneStyle = "content-box" === $t.style.backgroundClip, 
        T.extend(x, {
            boxSizingReliable: function() {
                return Yt(), Ht;
            },
            pixelBoxStyles: function() {
                return Yt(), Bt;
            },
            pixelPosition: function() {
                return Yt(), Pt;
            },
            reliableMarginLeft: function() {
                return Yt(), Wt;
            },
            scrollboxSize: function() {
                return Yt(), Rt;
            },
            reliableTrDimensions: function() {
                var t, e, o, r;
                return null == Ft && (t = E.createElement("table"), e = E.createElement("tr"), o = E.createElement("div"), 
                t.style.cssText = "position:absolute;left:-11111px", e.style.height = "1px", o.style.height = "9px", 
                rt.appendChild(t).appendChild(e).appendChild(o), r = _.getComputedStyle(e), Ft = 3 < parseInt(r.height), 
                rt.removeChild(t)), Ft;
            }
        }));
        var Zt = [ "Webkit", "Moz", "ms" ], te = E.createElement("div").style, ee = {};
        function oe(t) {
            var e = T.cssProps[t] || ee[t];
            return e || (t in te ? t : ee[t] = function(t) {
                for (var e = t[0].toUpperCase() + t.slice(1), o = Zt.length; o--; ) if ((t = Zt[o] + e) in te) return t;
            }(t) || t);
        }
        var re = /^(none|table(?!-c[ea]).+)/, ne = /^--/, ie = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, ae = {
            letterSpacing: "0",
            fontWeight: "400"
        };
        function le(t, e, o) {
            var r = et.exec(e);
            return r ? Math.max(0, r[2] - (o || 0)) + (r[3] || "px") : e;
        }
        function de(t, e, o, r, n, i) {
            var a = "width" === e ? 1 : 0, l = 0, d = 0;
            if (o === (r ? "border" : "content")) return 0;
            for (;a < 4; a += 2) "margin" === o && (d += T.css(t, o + ot[a], !0, n)), r ? ("content" === o && (d -= T.css(t, "padding" + ot[a], !0, n)), 
            "margin" !== o && (d -= T.css(t, "border" + ot[a] + "Width", !0, n))) : (d += T.css(t, "padding" + ot[a], !0, n), 
            "padding" !== o ? d += T.css(t, "border" + ot[a] + "Width", !0, n) : l += T.css(t, "border" + ot[a] + "Width", !0, n));
            return !r && 0 <= i && (d += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - i - d - l - .5)) || 0), 
            d;
        }
        function se(t, e, o) {
            var r = Xt(t), n = (!x.boxSizingReliable() || o) && "border-box" === T.css(t, "boxSizing", !1, r), i = n, a = Gt(t, e, r), l = "offset" + e[0].toUpperCase() + e.slice(1);
            if (Qt.test(a)) {
                if (!o) return a;
                a = "auto";
            }
            return (!x.boxSizingReliable() && n || !x.reliableTrDimensions() && j(t, "tr") || "auto" === a || !parseFloat(a) && "inline" === T.css(t, "display", !1, r)) && t.getClientRects().length && (n = "border-box" === T.css(t, "boxSizing", !1, r), 
            (i = l in t) && (a = t[l])), (a = parseFloat(a) || 0) + de(t, e, o || (n ? "border" : "content"), i, r, a) + "px";
        }
        function me(t, e, o, r, n) {
            return new me.prototype.init(t, e, o, r, n);
        }
        T.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var o = Gt(t, "opacity");
                            return "" === o ? "1" : o;
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
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
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(t, e, o, r) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var n, i, a, l = Q(e), d = ne.test(e), s = t.style;
                    if (d || (e = oe(l)), a = T.cssHooks[e] || T.cssHooks[l], void 0 === o) return a && "get" in a && void 0 !== (n = a.get(t, !1, r)) ? n : s[e];
                    "string" === (i = typeof o) && (n = et.exec(o)) && n[1] && (o = lt(t, e, n), i = "number"), 
                    null != o && o == o && ("number" !== i || d || (o += n && n[3] || (T.cssNumber[l] ? "" : "px")), 
                    x.clearCloneStyle || "" !== o || 0 !== e.indexOf("background") || (s[e] = "inherit"), 
                    a && "set" in a && void 0 === (o = a.set(t, o, r)) || (d ? s.setProperty(e, o) : s[e] = o));
                }
            },
            css: function(t, e, o, r) {
                var n, i, a, l = Q(e);
                return ne.test(e) || (e = oe(l)), (a = T.cssHooks[e] || T.cssHooks[l]) && "get" in a && (n = a.get(t, !0, o)), 
                void 0 === n && (n = Gt(t, e, r)), "normal" === n && e in ae && (n = ae[e]), "" === o || o ? (i = parseFloat(n), 
                !0 === o || isFinite(i) ? i || 0 : n) : n;
            }
        }), T.each([ "height", "width" ], function(t, d) {
            T.cssHooks[d] = {
                get: function(t, e, o) {
                    if (e) return !re.test(T.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? se(t, d, o) : qt(t, ie, function() {
                        return se(t, d, o);
                    });
                },
                set: function(t, e, o) {
                    var r, n = Xt(t), i = !x.scrollboxSize() && "absolute" === n.position, a = (i || o) && "border-box" === T.css(t, "boxSizing", !1, n), l = o ? de(t, d, o, a, n) : 0;
                    return a && i && (l -= Math.ceil(t["offset" + d[0].toUpperCase() + d.slice(1)] - parseFloat(n[d]) - de(t, d, "border", !1, n) - .5)), 
                    l && (r = et.exec(e)) && "px" !== (r[3] || "px") && (t.style[d] = e, e = T.css(t, d)), 
                    le(0, e, l);
                }
            };
        }), T.cssHooks.marginLeft = Jt(x.reliableMarginLeft, function(t, e) {
            if (e) return (parseFloat(Gt(t, "marginLeft")) || t.getBoundingClientRect().left - qt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left;
            })) + "px";
        }), T.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(n, i) {
            T.cssHooks[n + i] = {
                expand: function(t) {
                    for (var e = 0, o = {}, r = "string" == typeof t ? t.split(" ") : [ t ]; e < 4; e++) o[n + ot[e] + i] = r[e] || r[e - 2] || r[0];
                    return o;
                }
            }, "margin" !== n && (T.cssHooks[n + i].set = le);
        }), T.fn.extend({
            css: function(t, e) {
                return F(this, function(t, e, o) {
                    var r, n, i = {}, a = 0;
                    if (Array.isArray(e)) {
                        for (r = Xt(t), n = e.length; a < n; a++) i[e[a]] = T.css(t, e[a], !1, r);
                        return i;
                    }
                    return void 0 !== o ? T.style(t, e, o) : T.css(t, e);
                }, t, e, 1 < arguments.length);
            }
        }), (T.Tween = me).prototype = {
            constructor: me,
            init: function(t, e, o, r, n, i) {
                this.elem = t, this.prop = o, this.easing = n || T.easing._default, this.options = e, 
                this.start = this.now = this.cur(), this.end = r, this.unit = i || (T.cssNumber[o] ? "" : "px");
            },
            cur: function() {
                var t = me.propHooks[this.prop];
                return t && t.get ? t.get(this) : me.propHooks._default.get(this);
            },
            run: function(t) {
                var e, o = me.propHooks[this.prop];
                return this.options.duration ? this.pos = e = T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, 
                this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
                o && o.set ? o.set(this) : me.propHooks._default.set(this), this;
            }
        }, me.prototype.init.prototype = me.prototype, me.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = T.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
                },
                set: function(t) {
                    T.fx.step[t.prop] ? T.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !T.cssHooks[t.prop] && null == t.elem.style[oe(t.prop)] ? t.elem[t.prop] = t.now : T.style(t.elem, t.prop, t.now + t.unit);
                }
            }
        }, me.propHooks.scrollTop = me.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
            }
        }, T.easing = {
            linear: function(t) {
                return t;
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2;
            },
            _default: "swing"
        }, T.fx = me.prototype.init, T.fx.step = {};
        var ce, pe, fe, ge, ue = /^(?:toggle|show|hide)$/, be = /queueHooks$/;
        function he() {
            pe && (!1 === E.hidden && _.requestAnimationFrame ? _.requestAnimationFrame(he) : _.setTimeout(he, T.fx.interval), 
            T.fx.tick());
        }
        function xe() {
            return _.setTimeout(function() {
                ce = void 0;
            }), ce = Date.now();
        }
        function ve(t, e) {
            var o, r = 0, n = {
                height: t
            };
            for (e = e ? 1 : 0; r < 4; r += 2 - e) n["margin" + (o = ot[r])] = n["padding" + o] = t;
            return e && (n.opacity = n.width = t), n;
        }
        function we(t, e, o) {
            for (var r, n = (ye.tweeners[e] || []).concat(ye.tweeners["*"]), i = 0, a = n.length; i < a; i++) if (r = n[i].call(o, e, t)) return r;
        }
        function ye(i, t, e) {
            var o, a, r = 0, n = ye.prefilters.length, l = T.Deferred().always(function() {
                delete d.elem;
            }), d = function() {
                if (a) return !1;
                for (var t = ce || xe(), e = Math.max(0, s.startTime + s.duration - t), o = 1 - (e / s.duration || 0), r = 0, n = s.tweens.length; r < n; r++) s.tweens[r].run(o);
                return l.notifyWith(i, [ s, o, e ]), o < 1 && n ? e : (n || l.notifyWith(i, [ s, 1, 0 ]), 
                l.resolveWith(i, [ s ]), !1);
            }, s = l.promise({
                elem: i,
                props: T.extend({}, t),
                opts: T.extend(!0, {
                    specialEasing: {},
                    easing: T.easing._default
                }, e),
                originalProperties: t,
                originalOptions: e,
                startTime: ce || xe(),
                duration: e.duration,
                tweens: [],
                createTween: function(t, e) {
                    var o = T.Tween(i, s.opts, t, e, s.opts.specialEasing[t] || s.opts.easing);
                    return s.tweens.push(o), o;
                },
                stop: function(t) {
                    var e = 0, o = t ? s.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; e < o; e++) s.tweens[e].run(1);
                    return t ? (l.notifyWith(i, [ s, 1, 0 ]), l.resolveWith(i, [ s, t ])) : l.rejectWith(i, [ s, t ]), 
                    this;
                }
            }), m = s.props;
            for (!function(t, e) {
                var o, r, n, i, a;
                for (o in t) if (n = e[r = Q(o)], i = t[o], Array.isArray(i) && (n = i[1], i = t[o] = i[0]), 
                o !== r && (t[r] = i, delete t[o]), (a = T.cssHooks[r]) && "expand" in a) for (o in i = a.expand(i), 
                delete t[r], i) o in t || (t[o] = i[o], e[o] = n); else e[r] = n;
            }(m, s.opts.specialEasing); r < n; r++) if (o = ye.prefilters[r].call(s, i, m, s.opts)) return v(o.stop) && (T._queueHooks(s.elem, s.opts.queue).stop = o.stop.bind(o)), 
            o;
            return T.map(m, we, s), v(s.opts.start) && s.opts.start.call(i, s), s.progress(s.opts.progress).done(s.opts.done, s.opts.complete).fail(s.opts.fail).always(s.opts.always), 
            T.fx.timer(T.extend(d, {
                elem: i,
                anim: s,
                queue: s.opts.queue
            })), s;
        }
        T.Animation = T.extend(ye, {
            tweeners: {
                "*": [ function(t, e) {
                    var o = this.createTween(t, e);
                    return lt(o.elem, t, et.exec(e), o), o;
                } ]
            },
            tweener: function(t, e) {
                for (var o, r = 0, n = (t = v(t) ? (e = t, [ "*" ]) : t.match(I)).length; r < n; r++) o = t[r], 
                ye.tweeners[o] = ye.tweeners[o] || [], ye.tweeners[o].unshift(e);
            },
            prefilters: [ function(t, e, o) {
                var r, n, i, a, l, d, s, m, c = "width" in e || "height" in e, p = this, f = {}, g = t.style, u = t.nodeType && at(t), b = Y.get(t, "fxshow");
                for (r in o.queue || (null == (a = T._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, 
                l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l();
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, T.queue(t, "fx").length || a.empty.fire();
                    });
                })), e) if (n = e[r], ue.test(n)) {
                    if (delete e[r], i = i || "toggle" === n, n === (u ? "hide" : "show")) {
                        if ("show" !== n || !b || void 0 === b[r]) continue;
                        u = !0;
                    }
                    f[r] = b && b[r] || T.style(t, r);
                }
                if ((d = !T.isEmptyObject(e)) || !T.isEmptyObject(f)) for (r in c && 1 === t.nodeType && (o.overflow = [ g.overflow, g.overflowX, g.overflowY ], 
                null == (s = b && b.display) && (s = Y.get(t, "display")), "none" === (m = T.css(t, "display")) && (s ? m = s : (st([ t ], !0), 
                s = t.style.display || s, m = T.css(t, "display"), st([ t ]))), ("inline" === m || "inline-block" === m && null != s) && "none" === T.css(t, "float") && (d || (p.done(function() {
                    g.display = s;
                }), null == s && (m = g.display, s = "none" === m ? "" : m)), g.display = "inline-block")), 
                o.overflow && (g.overflow = "hidden", p.always(function() {
                    g.overflow = o.overflow[0], g.overflowX = o.overflow[1], g.overflowY = o.overflow[2];
                })), d = !1, f) d || (b ? "hidden" in b && (u = b.hidden) : b = Y.access(t, "fxshow", {
                    display: s
                }), i && (b.hidden = !u), u && st([ t ], !0), p.done(function() {
                    for (r in u || st([ t ]), Y.remove(t, "fxshow"), f) T.style(t, r, f[r]);
                })), d = we(u ? b[r] : 0, r, p), r in b || (b[r] = d.start, u && (d.end = d.start, 
                d.start = 0));
            } ],
            prefilter: function(t, e) {
                e ? ye.prefilters.unshift(t) : ye.prefilters.push(t);
            }
        }), T.speed = function(t, e, o) {
            var r = t && "object" == typeof t ? T.extend({}, t) : {
                complete: o || !o && e || v(t) && t,
                duration: t,
                easing: o && e || e && !v(e) && e
            };
            return T.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default), 
            null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                v(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue);
            }, r;
        }, T.fn.extend({
            fadeTo: function(t, e, o, r) {
                return this.filter(at).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, o, r);
            },
            animate: function(e, t, o, r) {
                function n() {
                    var t = ye(this, T.extend({}, e), a);
                    (i || Y.get(this, "finish")) && t.stop(!0);
                }
                var i = T.isEmptyObject(e), a = T.speed(t, o, r);
                return n.finish = n, i || !1 === a.queue ? this.each(n) : this.queue(a.queue, n);
            },
            stop: function(n, t, i) {
                function a(t) {
                    var e = t.stop;
                    delete t.stop, e(i);
                }
                return "string" != typeof n && (i = t, t = n, n = void 0), t && this.queue(n || "fx", []), 
                this.each(function() {
                    var t = !0, e = null != n && n + "queueHooks", o = T.timers, r = Y.get(this);
                    if (e) r[e] && r[e].stop && a(r[e]); else for (e in r) r[e] && r[e].stop && be.test(e) && a(r[e]);
                    for (e = o.length; e--; ) o[e].elem !== this || null != n && o[e].queue !== n || (o[e].anim.stop(i), 
                    t = !1, o.splice(e, 1));
                    !t && i || T.dequeue(this, n);
                });
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"), this.each(function() {
                    var t, e = Y.get(this), o = e[a + "queue"], r = e[a + "queueHooks"], n = T.timers, i = o ? o.length : 0;
                    for (e.finish = !0, T.queue(this, a, []), r && r.stop && r.stop.call(this, !0), 
                    t = n.length; t--; ) n[t].elem === this && n[t].queue === a && (n[t].anim.stop(!0), 
                    n.splice(t, 1));
                    for (t = 0; t < i; t++) o[t] && o[t].finish && o[t].finish.call(this);
                    delete e.finish;
                });
            }
        }), T.each([ "toggle", "show", "hide" ], function(t, r) {
            var n = T.fn[r];
            T.fn[r] = function(t, e, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ve(r, !0), t, e, o);
            };
        }), T.each({
            slideDown: ve("show"),
            slideUp: ve("hide"),
            slideToggle: ve("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, r) {
            T.fn[t] = function(t, e, o) {
                return this.animate(r, t, e, o);
            };
        }), T.timers = [], T.fx.tick = function() {
            var t, e = 0, o = T.timers;
            for (ce = Date.now(); e < o.length; e++) (t = o[e])() || o[e] !== t || o.splice(e--, 1);
            o.length || T.fx.stop(), ce = void 0;
        }, T.fx.timer = function(t) {
            T.timers.push(t), T.fx.start();
        }, T.fx.interval = 13, T.fx.start = function() {
            pe || (pe = !0, he());
        }, T.fx.stop = function() {
            pe = null;
        }, T.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, T.fn.delay = function(r, t) {
            return r = T.fx && T.fx.speeds[r] || r, t = t || "fx", this.queue(t, function(t, e) {
                var o = _.setTimeout(t, r);
                e.stop = function() {
                    _.clearTimeout(o);
                };
            });
        }, fe = E.createElement("input"), ge = E.createElement("select").appendChild(E.createElement("option")), 
        fe.type = "checkbox", x.checkOn = "" !== fe.value, x.optSelected = ge.selected, 
        (fe = E.createElement("input")).value = "t", fe.type = "radio", x.radioValue = "t" === fe.value;
        var ke, _e = T.expr.attrHandle;
        T.fn.extend({
            attr: function(t, e) {
                return F(this, T.attr, t, e, 1 < arguments.length);
            },
            removeAttr: function(t) {
                return this.each(function() {
                    T.removeAttr(this, t);
                });
            }
        }), T.extend({
            attr: function(t, e, o) {
                var r, n, i = t.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return void 0 === t.getAttribute ? T.prop(t, e, o) : (1 === i && T.isXMLDoc(t) || (n = T.attrHooks[e.toLowerCase()] || (T.expr.match.bool.test(e) ? ke : void 0)), 
                void 0 !== o ? null === o ? void T.removeAttr(t, e) : n && "set" in n && void 0 !== (r = n.set(t, o, e)) ? r : (t.setAttribute(e, o + ""), 
                o) : !(n && "get" in n && null !== (r = n.get(t, e))) && null == (r = T.find.attr(t, e)) ? void 0 : r);
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!x.radioValue && "radio" === e && j(t, "input")) {
                            var o = t.value;
                            return t.setAttribute("type", e), o && (t.value = o), e;
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var o, r = 0, n = e && e.match(I);
                if (n && 1 === t.nodeType) for (;o = n[r++]; ) t.removeAttribute(o);
            }
        }), ke = {
            set: function(t, e, o) {
                return !1 === e ? T.removeAttr(t, o) : t.setAttribute(o, o), o;
            }
        }, T.each(T.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var a = _e[e] || T.find.attr;
            _e[e] = function(t, e, o) {
                var r, n, i = e.toLowerCase();
                return o || (n = _e[i], _e[i] = r, r = null != a(t, e, o) ? i : null, _e[i] = n), 
                r;
            };
        });
        var Ee = /^(?:input|select|textarea|button)$/i, Te = /^(?:a|area)$/i;
        function Ce(t) {
            return (t.match(I) || []).join(" ");
        }
        function je(t) {
            return t.getAttribute && t.getAttribute("class") || "";
        }
        function Se(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(I) || [];
        }
        T.fn.extend({
            prop: function(t, e) {
                return F(this, T.prop, t, e, 1 < arguments.length);
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[T.propFix[t] || t];
                });
            }
        }), T.extend({
            prop: function(t, e, o) {
                var r, n, i = t.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return 1 === i && T.isXMLDoc(t) || (e = T.propFix[e] || e, 
                n = T.propHooks[e]), void 0 !== o ? n && "set" in n && void 0 !== (r = n.set(t, o, e)) ? r : t[e] = o : n && "get" in n && null !== (r = n.get(t, e)) ? r : t[e];
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = T.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Ee.test(t.nodeName) || Te.test(t.nodeName) && t.href ? 0 : -1;
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), x.optSelected || (T.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            }
        }), T.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
            T.propFix[this.toLowerCase()] = this;
        }), T.fn.extend({
            addClass: function(e) {
                var t, o, r, n, i, a, l, d = 0;
                if (v(e)) return this.each(function(t) {
                    T(this).addClass(e.call(this, t, je(this)));
                });
                if ((t = Se(e)).length) for (;o = this[d++]; ) if (n = je(o), r = 1 === o.nodeType && " " + Ce(n) + " ") {
                    for (a = 0; i = t[a++]; ) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                    n !== (l = Ce(r)) && o.setAttribute("class", l);
                }
                return this;
            },
            removeClass: function(e) {
                var t, o, r, n, i, a, l, d = 0;
                if (v(e)) return this.each(function(t) {
                    T(this).removeClass(e.call(this, t, je(this)));
                });
                if (!arguments.length) return this.attr("class", "");
                if ((t = Se(e)).length) for (;o = this[d++]; ) if (n = je(o), r = 1 === o.nodeType && " " + Ce(n) + " ") {
                    for (a = 0; i = t[a++]; ) for (;-1 < r.indexOf(" " + i + " "); ) r = r.replace(" " + i + " ", " ");
                    n !== (l = Ce(r)) && o.setAttribute("class", l);
                }
                return this;
            },
            toggleClass: function(n, e) {
                var i = typeof n, a = "string" == i || Array.isArray(n);
                return "boolean" == typeof e && a ? e ? this.addClass(n) : this.removeClass(n) : v(n) ? this.each(function(t) {
                    T(this).toggleClass(n.call(this, t, je(this), e), e);
                }) : this.each(function() {
                    var t, e, o, r;
                    if (a) for (e = 0, o = T(this), r = Se(n); t = r[e++]; ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== n && "boolean" != i || ((t = je(this)) && Y.set(this, "__className__", t), 
                    this.setAttribute && this.setAttribute("class", !t && !1 !== n && Y.get(this, "__className__") || ""));
                });
            },
            hasClass: function(t) {
                for (var e, o = 0, r = " " + t + " "; e = this[o++]; ) if (1 === e.nodeType && -1 < (" " + Ce(je(e)) + " ").indexOf(r)) return !0;
                return !1;
            }
        });
        var ze = /\r/g;
        T.fn.extend({
            val: function(o) {
                var r, t, n, e = this[0];
                return arguments.length ? (n = v(o), this.each(function(t) {
                    var e;
                    1 === this.nodeType && (null == (e = n ? o.call(this, t, T(this).val()) : o) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = T.map(e, function(t) {
                        return null == t ? "" : t + "";
                    })), (r = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, e, "value") || (this.value = e));
                })) : e ? (r = T.valHooks[e.type] || T.valHooks[e.nodeName.toLowerCase()]) && "get" in r && void 0 !== (t = r.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(ze, "") : null == t ? "" : t : void 0;
            }
        }), T.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = T.find.attr(t, "value");
                        return null != e ? e : Ce(T.text(t));
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, o, r = t.options, n = t.selectedIndex, i = "select-one" === t.type, a = i ? null : [], l = i ? n + 1 : r.length, d = n < 0 ? l : i ? n : 0; d < l; d++) if (((o = r[d]).selected || d === n) && !o.disabled && (!o.parentNode.disabled || !j(o.parentNode, "optgroup"))) {
                            if (e = T(o).val(), i) return e;
                            a.push(e);
                        }
                        return a;
                    },
                    set: function(t, e) {
                        for (var o, r, n = t.options, i = T.makeArray(e), a = n.length; a--; ) ((r = n[a]).selected = -1 < T.inArray(T.valHooks.option.get(r), i)) && (o = !0);
                        return o || (t.selectedIndex = -1), i;
                    }
                }
            }
        }), T.each([ "radio", "checkbox" ], function() {
            T.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e)) return t.checked = -1 < T.inArray(T(t).val(), e);
                }
            }, x.checkOn || (T.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value;
            });
        }), x.focusin = "onfocusin" in _;
        function Ne(t) {
            t.stopPropagation();
        }
        var Ae = /^(?:focusinfocus|focusoutblur)$/;
        T.extend(T.event, {
            trigger: function(t, e, o, r) {
                var n, i, a, l, d, s, m, c = [ o || E ], p = h.call(t, "type") ? t.type : t, f = h.call(t, "namespace") ? t.namespace.split(".") : [], g = m = i = o = o || E;
                if (3 !== o.nodeType && 8 !== o.nodeType && !Ae.test(p + T.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(), 
                f.sort()), l = p.indexOf(":") < 0 && "on" + p, (t = t[T.expando] ? t : new T.Event(p, "object" == typeof t && t)).isTrigger = r ? 2 : 3, 
                t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                t.result = void 0, t.target || (t.target = o), e = null == e ? [ t ] : T.makeArray(e, [ t ]), 
                s = T.event.special[p] || {}, r || !s.trigger || !1 !== s.trigger.apply(o, e))) {
                    if (!r && !s.noBubble && !u(o)) {
                        for (a = s.delegateType || p, Ae.test(a + p) || (g = g.parentNode); g; g = g.parentNode) c.push(g), 
                        i = g;
                        i === (o.ownerDocument || E) && c.push(i.defaultView || i.parentWindow || _);
                    }
                    for (n = 0; (g = c[n++]) && !t.isPropagationStopped(); ) m = g, t.type = 1 < n ? a : s.bindType || p, 
                    (d = (Y.get(g, "events") || Object.create(null))[t.type] && Y.get(g, "handle")) && d.apply(g, e), 
                    (d = l && g[l]) && d.apply && X(g) && (t.result = d.apply(g, e), !1 === t.result && t.preventDefault());
                    return t.type = p, r || t.isDefaultPrevented() || s._default && !1 !== s._default.apply(c.pop(), e) || !X(o) || l && v(o[p]) && !u(o) && ((i = o[l]) && (o[l] = null), 
                    T.event.triggered = p, t.isPropagationStopped() && m.addEventListener(p, Ne), o[p](), 
                    t.isPropagationStopped() && m.removeEventListener(p, Ne), T.event.triggered = void 0, 
                    i && (o[l] = i)), t.result;
                }
            },
            simulate: function(t, e, o) {
                var r = T.extend(new T.Event(), o, {
                    type: t,
                    isSimulated: !0
                });
                T.event.trigger(r, null, e);
            }
        }), T.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    T.event.trigger(t, e, this);
                });
            },
            triggerHandler: function(t, e) {
                var o = this[0];
                if (o) return T.event.trigger(t, e, o, !0);
            }
        }), x.focusin || T.each({
            focus: "focusin",
            blur: "focusout"
        }, function(o, r) {
            function n(t) {
                T.event.simulate(r, t.target, T.event.fix(t));
            }
            T.event.special[r] = {
                setup: function() {
                    var t = this.ownerDocument || this.document || this, e = Y.access(t, r);
                    e || t.addEventListener(o, n, !0), Y.access(t, r, (e || 0) + 1);
                },
                teardown: function() {
                    var t = this.ownerDocument || this.document || this, e = Y.access(t, r) - 1;
                    e ? Y.access(t, r, e) : (t.removeEventListener(o, n, !0), Y.remove(t, r));
                }
            };
        });
        var De = _.location, Le = {
            guid: Date.now()
        }, Oe = /\?/;
        T.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = new _.DOMParser().parseFromString(t, "text/xml");
            } catch (t) {
                e = void 0;
            }
            return e && !e.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + t), 
            e;
        };
        var Ie = /\[\]$/, Me = /\r?\n/g, qe = /^(?:submit|button|image|reset|file)$/i, Pe = /^(?:input|select|textarea|keygen)/i;
        T.param = function(t, e) {
            function o(t, e) {
                var o = v(e) ? e() : e;
                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == o ? "" : o);
            }
            var r, n = [];
            if (null == t) return "";
            if (Array.isArray(t) || t.jquery && !T.isPlainObject(t)) T.each(t, function() {
                o(this.name, this.value);
            }); else for (r in t) !function o(r, t, n, i) {
                var e;
                if (Array.isArray(t)) T.each(t, function(t, e) {
                    n || Ie.test(r) ? i(r, e) : o(r + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, n, i);
                }); else if (n || "object" !== y(t)) i(r, t); else for (e in t) o(r + "[" + e + "]", t[e], n, i);
            }(r, t[r], e, o);
            return n.join("&");
        }, T.fn.extend({
            serialize: function() {
                return T.param(this.serializeArray());
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = T.prop(this, "elements");
                    return t ? T.makeArray(t) : this;
                }).filter(function() {
                    var t = this.type;
                    return this.name && !T(this).is(":disabled") && Pe.test(this.nodeName) && !qe.test(t) && (this.checked || !pt.test(t));
                }).map(function(t, e) {
                    var o = T(this).val();
                    return null == o ? null : Array.isArray(o) ? T.map(o, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Me, "\r\n")
                        };
                    }) : {
                        name: e.name,
                        value: o.replace(Me, "\r\n")
                    };
                }).get();
            }
        });
        var He = /%20/g, Re = /#.*$/, Be = /([?&])_=[^&]*/, Fe = /^(.*?):[ \t]*([^\r\n]*)$/gm, We = /^(?:GET|HEAD)$/, Ue = /^\/\//, $e = {}, Qe = {}, Xe = "*/".concat("*"), Ve = E.createElement("a");
        function Ye(i) {
            return function(t, e) {
                "string" != typeof t && (e = t, t = "*");
                var o, r = 0, n = t.toLowerCase().match(I) || [];
                if (v(e)) for (;o = n[r++]; ) "+" === o[0] ? (o = o.slice(1) || "*", (i[o] = i[o] || []).unshift(e)) : (i[o] = i[o] || []).push(e);
            };
        }
        function Ke(e, n, i, a) {
            var l = {}, d = e === Qe;
            function s(t) {
                var r;
                return l[t] = !0, T.each(e[t] || [], function(t, e) {
                    var o = e(n, i, a);
                    return "string" != typeof o || d || l[o] ? d ? !(r = o) : void 0 : (n.dataTypes.unshift(o), 
                    s(o), !1);
                }), r;
            }
            return s(n.dataTypes[0]) || !l["*"] && s("*");
        }
        function Ge(t, e) {
            var o, r, n = T.ajaxSettings.flatOptions || {};
            for (o in e) void 0 !== e[o] && ((n[o] ? t : r = r || {})[o] = e[o]);
            return r && T.extend(!0, t, r), t;
        }
        Ve.href = De.href, T.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: De.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(De.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Xe,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": T.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? Ge(Ge(t, T.ajaxSettings), e) : Ge(T.ajaxSettings, t);
            },
            ajaxPrefilter: Ye($e),
            ajaxTransport: Ye(Qe),
            ajax: function(t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var m, c, p, o, f, r, g, u, n, i, b = T.ajaxSetup({}, e), h = b.context || b, x = b.context && (h.nodeType || h.jquery) ? T(h) : T.event, v = T.Deferred(), w = T.Callbacks("once memory"), y = b.statusCode || {}, a = {}, l = {}, d = "canceled", k = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (g) {
                            if (!o) for (o = {}; e = Fe.exec(p); ) o[e[1].toLowerCase() + " "] = (o[e[1].toLowerCase() + " "] || []).concat(e[2]);
                            e = o[t.toLowerCase() + " "];
                        }
                        return null == e ? null : e.join(", ");
                    },
                    getAllResponseHeaders: function() {
                        return g ? p : null;
                    },
                    setRequestHeader: function(t, e) {
                        return null == g && (t = l[t.toLowerCase()] = l[t.toLowerCase()] || t, a[t] = e), 
                        this;
                    },
                    overrideMimeType: function(t) {
                        return null == g && (b.mimeType = t), this;
                    },
                    statusCode: function(t) {
                        var e;
                        if (t) if (g) k.always(t[k.status]); else for (e in t) y[e] = [ y[e], t[e] ];
                        return this;
                    },
                    abort: function(t) {
                        var e = t || d;
                        return m && m.abort(e), s(0, e), this;
                    }
                };
                if (v.promise(k), b.url = ((t || b.url || De.href) + "").replace(Ue, De.protocol + "//"), 
                b.type = e.method || e.type || b.method || b.type, b.dataTypes = (b.dataType || "*").toLowerCase().match(I) || [ "" ], 
                null == b.crossDomain) {
                    r = E.createElement("a");
                    try {
                        r.href = b.url, r.href = r.href, b.crossDomain = Ve.protocol + "//" + Ve.host != r.protocol + "//" + r.host;
                    } catch (t) {
                        b.crossDomain = !0;
                    }
                }
                if (b.data && b.processData && "string" != typeof b.data && (b.data = T.param(b.data, b.traditional)), 
                Ke($e, b, e, k), g) return k;
                for (n in (u = T.event && b.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), 
                b.type = b.type.toUpperCase(), b.hasContent = !We.test(b.type), c = b.url.replace(Re, ""), 
                b.hasContent ? b.data && b.processData && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && (b.data = b.data.replace(He, "+")) : (i = b.url.slice(c.length), 
                b.data && (b.processData || "string" == typeof b.data) && (c += (Oe.test(c) ? "&" : "?") + b.data, 
                delete b.data), !1 === b.cache && (c = c.replace(Be, "$1"), i = (Oe.test(c) ? "&" : "?") + "_=" + Le.guid++ + i), 
                b.url = c + i), b.ifModified && (T.lastModified[c] && k.setRequestHeader("If-Modified-Since", T.lastModified[c]), 
                T.etag[c] && k.setRequestHeader("If-None-Match", T.etag[c])), (b.data && b.hasContent && !1 !== b.contentType || e.contentType) && k.setRequestHeader("Content-Type", b.contentType), 
                k.setRequestHeader("Accept", b.dataTypes[0] && b.accepts[b.dataTypes[0]] ? b.accepts[b.dataTypes[0]] + ("*" !== b.dataTypes[0] ? ", " + Xe + "; q=0.01" : "") : b.accepts["*"]), 
                b.headers) k.setRequestHeader(n, b.headers[n]);
                if (b.beforeSend && (!1 === b.beforeSend.call(h, k, b) || g)) return k.abort();
                if (d = "abort", w.add(b.complete), k.done(b.success), k.fail(b.error), m = Ke(Qe, b, e, k)) {
                    if (k.readyState = 1, u && x.trigger("ajaxSend", [ k, b ]), g) return k;
                    b.async && 0 < b.timeout && (f = _.setTimeout(function() {
                        k.abort("timeout");
                    }, b.timeout));
                    try {
                        g = !1, m.send(a, s);
                    } catch (t) {
                        if (g) throw t;
                        s(-1, t);
                    }
                } else s(-1, "No Transport");
                function s(t, e, o, r) {
                    var n, i, a, l, d, s = e;
                    g || (g = !0, f && _.clearTimeout(f), m = void 0, p = r || "", k.readyState = 0 < t ? 4 : 0, 
                    n = 200 <= t && t < 300 || 304 === t, o && (l = function(t, e, o) {
                        for (var r, n, i, a, l = t.contents, d = t.dataTypes; "*" === d[0]; ) d.shift(), 
                        void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (r) for (n in l) if (l[n] && l[n].test(r)) {
                            d.unshift(n);
                            break;
                        }
                        if (d[0] in o) i = d[0]; else {
                            for (n in o) {
                                if (!d[0] || t.converters[n + " " + d[0]]) {
                                    i = n;
                                    break;
                                }
                                a = a || n;
                            }
                            i = i || a;
                        }
                        if (i) return i !== d[0] && d.unshift(i), o[i];
                    }(b, k, o)), !n && -1 < T.inArray("script", b.dataTypes) && (b.converters["text script"] = function() {}), 
                    l = function(t, e, o, r) {
                        var n, i, a, l, d, s = {}, m = t.dataTypes.slice();
                        if (m[1]) for (a in t.converters) s[a.toLowerCase()] = t.converters[a];
                        for (i = m.shift(); i; ) if (t.responseFields[i] && (o[t.responseFields[i]] = e), 
                        !d && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), d = i, i = m.shift()) if ("*" === i) i = d; else if ("*" !== d && d !== i) {
                            if (!(a = s[d + " " + i] || s["* " + i])) for (n in s) if ((l = n.split(" "))[1] === i && (a = s[d + " " + l[0]] || s["* " + l[0]])) {
                                !0 === a ? a = s[n] : !0 !== s[n] && (i = l[0], m.unshift(l[1]));
                                break;
                            }
                            if (!0 !== a) if (a && t.throws) e = a(e); else try {
                                e = a(e);
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: a ? t : "No conversion from " + d + " to " + i
                                };
                            }
                        }
                        return {
                            state: "success",
                            data: e
                        };
                    }(b, l, k, n), n ? (b.ifModified && ((d = k.getResponseHeader("Last-Modified")) && (T.lastModified[c] = d), 
                    (d = k.getResponseHeader("etag")) && (T.etag[c] = d)), 204 === t || "HEAD" === b.type ? s = "nocontent" : 304 === t ? s = "notmodified" : (s = l.state, 
                    i = l.data, n = !(a = l.error))) : (a = s, !t && s || (s = "error", t < 0 && (t = 0))), 
                    k.status = t, k.statusText = (e || s) + "", n ? v.resolveWith(h, [ i, s, k ]) : v.rejectWith(h, [ k, s, a ]), 
                    k.statusCode(y), y = void 0, u && x.trigger(n ? "ajaxSuccess" : "ajaxError", [ k, b, n ? i : a ]), 
                    w.fireWith(h, [ k, s ]), u && (x.trigger("ajaxComplete", [ k, b ]), --T.active || T.event.trigger("ajaxStop")));
                }
                return k;
            },
            getJSON: function(t, e, o) {
                return T.get(t, e, o, "json");
            },
            getScript: function(t, e) {
                return T.get(t, void 0, e, "script");
            }
        }), T.each([ "get", "post" ], function(t, n) {
            T[n] = function(t, e, o, r) {
                return v(e) && (r = r || o, o = e, e = void 0), T.ajax(T.extend({
                    url: t,
                    type: n,
                    dataType: r,
                    data: e,
                    success: o
                }, T.isPlainObject(t) && t));
            };
        }), T.ajaxPrefilter(function(t) {
            var e;
            for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "");
        }), T._evalUrl = function(t, e, o) {
            return T.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(t) {
                    T.globalEval(t, e, o);
                }
            });
        }, T.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (v(t) && (t = t.call(this[0])), e = T(t, this[0].ownerDocument).eq(0).clone(!0), 
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                    return t;
                }).append(this)), this;
            },
            wrapInner: function(o) {
                return v(o) ? this.each(function(t) {
                    T(this).wrapInner(o.call(this, t));
                }) : this.each(function() {
                    var t = T(this), e = t.contents();
                    e.length ? e.wrapAll(o) : t.append(o);
                });
            },
            wrap: function(e) {
                var o = v(e);
                return this.each(function(t) {
                    T(this).wrapAll(o ? e.call(this, t) : e);
                });
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    T(this).replaceWith(this.childNodes);
                }), this;
            }
        }), T.expr.pseudos.hidden = function(t) {
            return !T.expr.pseudos.visible(t);
        }, T.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
        }, T.ajaxSettings.xhr = function() {
            try {
                return new _.XMLHttpRequest();
            } catch (t) {}
        };
        var Je = {
            0: 200,
            1223: 204
        }, Ze = T.ajaxSettings.xhr();
        x.cors = !!Ze && "withCredentials" in Ze, x.ajax = Ze = !!Ze, T.ajaxTransport(function(n) {
            var i, a;
            if (x.cors || Ze && !n.crossDomain) return {
                send: function(t, e) {
                    var o, r = n.xhr();
                    if (r.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields) for (o in n.xhrFields) r[o] = n.xhrFields[o];
                    for (o in n.mimeType && r.overrideMimeType && r.overrideMimeType(n.mimeType), n.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), 
                    t) r.setRequestHeader(o, t[o]);
                    i = function(t) {
                        return function() {
                            i && (i = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, 
                            "abort" === t ? r.abort() : "error" === t ? "number" != typeof r.status ? e(0, "error") : e(r.status, r.statusText) : e(Je[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()));
                        };
                    }, r.onload = i(), a = r.onerror = r.ontimeout = i("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && _.setTimeout(function() {
                            i && a();
                        });
                    }, i = i("abort");
                    try {
                        r.send(n.hasContent && n.data || null);
                    } catch (t) {
                        if (i) throw t;
                    }
                },
                abort: function() {
                    i && i();
                }
            };
        }), T.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1);
        }), T.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return T.globalEval(t), t;
                }
            }
        }), T.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
        }), T.ajaxTransport("script", function(o) {
            var r, n;
            if (o.crossDomain || o.scriptAttrs) return {
                send: function(t, e) {
                    r = T("<script>").attr(o.scriptAttrs || {}).prop({
                        charset: o.scriptCharset,
                        src: o.url
                    }).on("load error", n = function(t) {
                        r.remove(), n = null, t && e("error" === t.type ? 404 : 200, t.type);
                    }), E.head.appendChild(r[0]);
                },
                abort: function() {
                    n && n();
                }
            };
        });
        var to, eo = [], oo = /(=)\?(?=&|$)|\?\?/;
        T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = eo.pop() || T.expando + "_" + Le.guid++;
                return this[t] = !0, t;
            }
        }), T.ajaxPrefilter("json jsonp", function(t, e, o) {
            var r, n, i, a = !1 !== t.jsonp && (oo.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && oo.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
            a ? t[a] = t[a].replace(oo, "$1" + r) : !1 !== t.jsonp && (t.url += (Oe.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), 
            t.converters["script json"] = function() {
                return i || T.error(r + " was not called"), i[0];
            }, t.dataTypes[0] = "json", n = _[r], _[r] = function() {
                i = arguments;
            }, o.always(function() {
                void 0 === n ? T(_).removeProp(r) : _[r] = n, t[r] && (t.jsonpCallback = e.jsonpCallback, 
                eo.push(r)), i && v(n) && n(i[0]), i = n = void 0;
            }), "script";
        }), x.createHTMLDocument = ((to = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
        2 === to.childNodes.length), T.parseHTML = function(t, e, o) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (o = e, e = !1), e || (x.createHTMLDocument ? ((r = (e = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, 
            e.head.appendChild(r)) : e = E), i = !o && [], (n = S.exec(t)) ? [ e.createElement(n[1]) ] : (n = vt([ t ], e, i), 
            i && i.length && T(i).remove(), T.merge([], n.childNodes)));
            var r, n, i;
        }, T.fn.load = function(t, e, o) {
            var r, n, i, a = this, l = t.indexOf(" ");
            return -1 < l && (r = Ce(t.slice(l)), t = t.slice(0, l)), v(e) ? (o = e, e = void 0) : e && "object" == typeof e && (n = "POST"), 
            0 < a.length && T.ajax({
                url: t,
                type: n || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                i = arguments, a.html(r ? T("<div>").append(T.parseHTML(t)).find(r) : t);
            }).always(o && function(t, e) {
                a.each(function() {
                    o.apply(this, i || [ t.responseText, e, t ]);
                });
            }), this;
        }, T.expr.pseudos.animated = function(e) {
            return T.grep(T.timers, function(t) {
                return e === t.elem;
            }).length;
        }, T.offset = {
            setOffset: function(t, e, o) {
                var r, n, i, a, l, d, s = T.css(t, "position"), m = T(t), c = {};
                "static" === s && (t.style.position = "relative"), l = m.offset(), i = T.css(t, "top"), 
                d = T.css(t, "left"), n = ("absolute" === s || "fixed" === s) && -1 < (i + d).indexOf("auto") ? (a = (r = m.position()).top, 
                r.left) : (a = parseFloat(i) || 0, parseFloat(d) || 0), v(e) && (e = e.call(t, o, T.extend({}, l))), 
                null != e.top && (c.top = e.top - l.top + a), null != e.left && (c.left = e.left - l.left + n), 
                "using" in e ? e.using.call(t, c) : ("number" == typeof c.top && (c.top += "px"), 
                "number" == typeof c.left && (c.left += "px"), m.css(c));
            }
        }, T.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    T.offset.setOffset(this, e, t);
                });
                var t, o, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), o = r.ownerDocument.defaultView, 
                {
                    top: t.top + o.pageYOffset,
                    left: t.left + o.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0;
            },
            position: function() {
                if (this[0]) {
                    var t, e, o, r = this[0], n = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === T.css(r, "position")) e = r.getBoundingClientRect(); else {
                        for (e = this.offset(), o = r.ownerDocument, t = r.offsetParent || o.documentElement; t && (t === o.body || t === o.documentElement) && "static" === T.css(t, "position"); ) t = t.parentNode;
                        t && t !== r && 1 === t.nodeType && ((n = T(t).offset()).top += T.css(t, "borderTopWidth", !0), 
                        n.left += T.css(t, "borderLeftWidth", !0));
                    }
                    return {
                        top: e.top - n.top - T.css(r, "marginTop", !0),
                        left: e.left - n.left - T.css(r, "marginLeft", !0)
                    };
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === T.css(t, "position"); ) t = t.offsetParent;
                    return t || rt;
                });
            }
        }), T.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var i = "pageYOffset" === n;
            T.fn[e] = function(t) {
                return F(this, function(t, e, o) {
                    var r;
                    return u(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o ? r ? r[n] : t[e] : void (r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : t[e] = o);
                }, e, t, arguments.length);
            };
        }), T.each([ "top", "left" ], function(t, o) {
            T.cssHooks[o] = Jt(x.pixelPosition, function(t, e) {
                if (e) return e = Gt(t, o), Qt.test(e) ? T(t).position()[o] + "px" : e;
            });
        }), T.each({
            Height: "height",
            Width: "width"
        }, function(a, l) {
            T.each({
                padding: "inner" + a,
                content: l,
                "": "outer" + a
            }, function(r, i) {
                T.fn[i] = function(t, e) {
                    var o = arguments.length && (r || "boolean" != typeof t), n = r || (!0 === t || !0 === e ? "margin" : "border");
                    return F(this, function(t, e, o) {
                        var r;
                        return u(t) ? 0 === i.indexOf("outer") ? t["inner" + a] : t.document.documentElement["client" + a] : 9 === t.nodeType ? (r = t.documentElement, 
                        Math.max(t.body["scroll" + a], r["scroll" + a], t.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === o ? T.css(t, e, n) : T.style(t, e, o, n);
                    }, l, o ? t : void 0, o);
                };
            });
        }), T.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(t, e) {
            T.fn[e] = function(t) {
                return this.on(e, t);
            };
        }), T.fn.extend({
            bind: function(t, e, o) {
                return this.on(t, null, e, o);
            },
            unbind: function(t, e) {
                return this.off(t, null, e);
            },
            delegate: function(t, e, o, r) {
                return this.on(e, t, o, r);
            },
            undelegate: function(t, e, o) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", o);
            },
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t);
            }
        }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, o) {
            T.fn[o] = function(t, e) {
                return 0 < arguments.length ? this.on(o, null, t, e) : this.trigger(o);
            };
        });
        var ro = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        T.proxy = function(t, e) {
            var o, r, n;
            if ("string" == typeof e && (o = t[e], e = t, t = o), v(t)) return r = l.call(arguments, 2), 
            (n = function() {
                return t.apply(e || this, r.concat(l.call(arguments)));
            }).guid = t.guid = t.guid || T.guid++, n;
        }, T.holdReady = function(t) {
            t ? T.readyWait++ : T.ready(!0);
        }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = j, T.isFunction = v, 
        T.isWindow = u, T.camelCase = Q, T.type = y, T.now = Date.now, T.isNumeric = function(t) {
            var e = T.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
        }, T.trim = function(t) {
            return null == t ? "" : (t + "").replace(ro, "");
        }, void 0 === (so = function() {
            return T;
        }.apply(lo, [])) || (ao.exports = so);
        var no = _.jQuery, io = _.$;
        return T.noConflict = function(t) {
            return _.$ === T && (_.$ = io), t && _.jQuery === T && (_.jQuery = no), T;
        }, void 0 === t && (_.jQuery = _.$ = T), T;
    });
}, function(t, ot, e) {
    "use strict";
    e.r(ot), function(t) {
        var o = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator, r = function() {
            for (var t = [ "Edge", "Trident", "Firefox" ], e = 0; e < t.length; e += 1) if (o && 0 <= navigator.userAgent.indexOf(t[e])) return 1;
            return 0;
        }();
        var i = o && window.Promise ? function(t) {
            var e = !1;
            return function() {
                e || (e = !0, window.Promise.resolve().then(function() {
                    e = !1, t();
                }));
            };
        } : function(t) {
            var e = !1;
            return function() {
                e || (e = !0, setTimeout(function() {
                    e = !1, t();
                }, r));
            };
        };
        function a(t) {
            return t && "[object Function]" === {}.toString.call(t);
        }
        function w(t, e) {
            if (1 !== t.nodeType) return [];
            var o = t.ownerDocument.defaultView.getComputedStyle(t, null);
            return e ? o[e] : o;
        }
        function g(t) {
            return "HTML" === t.nodeName ? t : t.parentNode || t.host;
        }
        function u(t) {
            if (!t) return document.body;
            switch (t.nodeName) {
              case "HTML":
              case "BODY":
                return t.ownerDocument.body;

              case "#document":
                return t.body;
            }
            var e = w(t), o = e.overflow, r = e.overflowX, n = e.overflowY;
            return /(auto|scroll|overlay)/.test(o + n + r) ? t : u(g(t));
        }
        function b(t) {
            return t && t.referenceNode ? t.referenceNode : t;
        }
        var e = o && !(!window.MSInputMethodContext || !document.documentMode), n = o && /MSIE 10/.test(navigator.userAgent);
        function h(t) {
            return 11 === t ? e : 10 !== t && e || n;
        }
        function v(t) {
            if (!t) return document.documentElement;
            for (var e = h(10) ? document.body : null, o = t.offsetParent || null; o === e && t.nextElementSibling; ) o = (t = t.nextElementSibling).offsetParent;
            var r = o && o.nodeName;
            return r && "BODY" !== r && "HTML" !== r ? -1 !== [ "TH", "TD", "TABLE" ].indexOf(o.nodeName) && "static" === w(o, "position") ? v(o) : o : t ? t.ownerDocument.documentElement : document.documentElement;
        }
        function m(t) {
            return null !== t.parentNode ? m(t.parentNode) : t;
        }
        function x(t, e) {
            if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
            var o = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING, r = o ? t : e, n = o ? e : t, i = document.createRange();
            i.setStart(r, 0), i.setEnd(n, 0);
            var a, l, d = i.commonAncestorContainer;
            if (t !== d && e !== d || r.contains(n)) return "BODY" === (l = (a = d).nodeName) || "HTML" !== l && v(a.firstElementChild) !== a ? v(d) : d;
            var s = m(t);
            return s.host ? x(s.host, e) : x(t, m(e).host);
        }
        function y(t, e) {
            var o = "top" === (1 < arguments.length && void 0 !== e ? e : "top") ? "scrollTop" : "scrollLeft", r = t.nodeName;
            if ("BODY" !== r && "HTML" !== r) return t[o];
            var n = t.ownerDocument.documentElement;
            return (t.ownerDocument.scrollingElement || n)[o];
        }
        function c(t, e) {
            var o = "x" === e ? "Left" : "Top", r = "Left" == o ? "Right" : "Bottom";
            return parseFloat(t["border" + o + "Width"]) + parseFloat(t["border" + r + "Width"]);
        }
        function l(t, e, o, r) {
            return Math.max(e["offset" + t], e["scroll" + t], o["client" + t], o["offset" + t], o["scroll" + t], h(10) ? parseInt(o["offset" + t]) + parseInt(r["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0);
        }
        function k(t) {
            var e = t.body, o = t.documentElement, r = h(10) && getComputedStyle(o);
            return {
                height: l("Height", e, o, r),
                width: l("Width", e, o, r)
            };
        }
        var d = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }, s = function(t, e, o) {
            return e && p(t.prototype, e), o && p(t, o), t;
        };
        function p(t, e) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        function _(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o, t;
        }
        var E = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = arguments[e];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
            }
            return t;
        };
        function T(t) {
            return E({}, t, {
                right: t.left + t.width,
                bottom: t.top + t.height
            });
        }
        function C(t) {
            var e, o, r = {};
            try {
                h(10) ? (r = t.getBoundingClientRect(), e = y(t, "top"), o = y(t, "left"), r.top += e, 
                r.left += o, r.bottom += e, r.right += o) : r = t.getBoundingClientRect();
            } catch (t) {}
            var n, i = {
                left: r.left,
                top: r.top,
                width: r.right - r.left,
                height: r.bottom - r.top
            }, a = "HTML" === t.nodeName ? k(t.ownerDocument) : {}, l = a.width || t.clientWidth || i.width, d = a.height || t.clientHeight || i.height, s = t.offsetWidth - l, m = t.offsetHeight - d;
            return (s || m) && (s -= c(n = w(t), "x"), m -= c(n, "y"), i.width -= s, i.height -= m), 
            T(i);
        }
        function j(t, e, o) {
            var r = 2 < arguments.length && void 0 !== o && o, n = h(10), i = "HTML" === e.nodeName, a = C(t), l = C(e), d = u(t), s = w(e), m = parseFloat(s.borderTopWidth), c = parseFloat(s.borderLeftWidth);
            r && i && (l.top = Math.max(l.top, 0), l.left = Math.max(l.left, 0));
            var p, f, g = T({
                top: a.top - l.top - m,
                left: a.left - l.left - c,
                width: a.width,
                height: a.height
            });
            return g.marginTop = 0, g.marginLeft = 0, !n && i && (p = parseFloat(s.marginTop), 
            f = parseFloat(s.marginLeft), g.top -= m - p, g.bottom -= m - p, g.left -= c - f, 
            g.right -= c - f, g.marginTop = p, g.marginLeft = f), (n && !r ? e.contains(d) : e === d && "BODY" !== d.nodeName) && (g = function(t, e, o) {
                var r = 2 < arguments.length && void 0 !== o && o, n = y(e, "top"), i = y(e, "left"), a = r ? -1 : 1;
                return t.top += n * a, t.bottom += n * a, t.left += i * a, t.right += i * a, t;
            }(g, e)), g;
        }
        function S(t) {
            if (!t || !t.parentElement || h()) return document.documentElement;
            for (var e = t.parentElement; e && "none" === w(e, "transform"); ) e = e.parentElement;
            return e || document.documentElement;
        }
        function f(t, e, o, r, n) {
            var i, a, l, d, s, m = 4 < arguments.length && void 0 !== n && n, c = {
                top: 0,
                left: 0
            }, p = m ? S(t) : x(t, b(e));
            "viewport" === r ? c = function(t, e) {
                var o = 1 < arguments.length && void 0 !== e && e, r = t.ownerDocument.documentElement, n = j(t, r), i = Math.max(r.clientWidth, window.innerWidth || 0), a = Math.max(r.clientHeight, window.innerHeight || 0), l = o ? 0 : y(r), d = o ? 0 : y(r, "left");
                return T({
                    top: l - n.top + n.marginTop,
                    left: d - n.left + n.marginLeft,
                    width: i,
                    height: a
                });
            }(p, m) : (i = void 0, "scrollParent" === r ? "BODY" === (i = u(g(e))).nodeName && (i = t.ownerDocument.documentElement) : i = "window" === r ? t.ownerDocument.documentElement : r, 
            a = j(i, p, m), "HTML" !== i.nodeName || function t(e) {
                var o = e.nodeName;
                if ("BODY" === o || "HTML" === o) return !1;
                if ("fixed" === w(e, "position")) return !0;
                var r = g(e);
                return !!r && t(r);
            }(p) ? c = a : (d = (l = k(t.ownerDocument)).height, s = l.width, c.top += a.top - a.marginTop, 
            c.bottom = d + a.top, c.left += a.left - a.marginLeft, c.right = s + a.left));
            var f = "number" == typeof (o = o || 0);
            return c.left += f ? o : o.left || 0, c.top += f ? o : o.top || 0, c.right -= f ? o : o.right || 0, 
            c.bottom -= f ? o : o.bottom || 0, c;
        }
        function z(t, e, r, o, n, i) {
            var a = 5 < arguments.length && void 0 !== i ? i : 0;
            if (-1 === t.indexOf("auto")) return t;
            var l = f(r, o, a, n), d = {
                top: {
                    width: l.width,
                    height: e.top - l.top
                },
                right: {
                    width: l.right - e.right,
                    height: l.height
                },
                bottom: {
                    width: l.width,
                    height: l.bottom - e.bottom
                },
                left: {
                    width: e.left - l.left,
                    height: l.height
                }
            }, s = Object.keys(d).map(function(t) {
                return E({
                    key: t
                }, d[t], {
                    area: (e = d[t]).width * e.height
                });
                var e;
            }).sort(function(t, e) {
                return e.area - t.area;
            }), m = s.filter(function(t) {
                var e = t.width, o = t.height;
                return e >= r.clientWidth && o >= r.clientHeight;
            }), c = 0 < m.length ? m[0].key : s[0].key, p = t.split("-")[1];
            return c + (p ? "-" + p : "");
        }
        function N(t, e, o, r) {
            var n = 3 < arguments.length && void 0 !== r ? r : null;
            return j(o, n ? S(e) : x(e, b(o)), n);
        }
        function A(t) {
            var e = t.ownerDocument.defaultView.getComputedStyle(t), o = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0), r = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
            return {
                width: t.offsetWidth + r,
                height: t.offsetHeight + o
            };
        }
        function D(t) {
            var e = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            return t.replace(/left|right|bottom|top/g, function(t) {
                return e[t];
            });
        }
        function L(t, e, o) {
            o = o.split("-")[0];
            var r = A(t), n = {
                width: r.width,
                height: r.height
            }, i = -1 !== [ "right", "left" ].indexOf(o), a = i ? "top" : "left", l = i ? "left" : "top", d = i ? "height" : "width", s = i ? "width" : "height";
            return n[a] = e[a] + e[d] / 2 - r[d] / 2, n[l] = o === l ? e[l] - r[s] : e[D(l)], 
            n;
        }
        function O(t, e) {
            return Array.prototype.find ? t.find(e) : t.filter(e)[0];
        }
        function I(t, o, e) {
            return (void 0 === e ? t : t.slice(0, function(t, e, o) {
                if (Array.prototype.findIndex) return t.findIndex(function(t) {
                    return t[e] === o;
                });
                var r = O(t, function(t) {
                    return t[e] === o;
                });
                return t.indexOf(r);
            }(t, "name", e))).forEach(function(t) {
                t.function;
                var e = t.function || t.fn;
                t.enabled && a(e) && (o.offsets.popper = T(o.offsets.popper), o.offsets.reference = T(o.offsets.reference), 
                o = e(o, t));
            }), o;
        }
        function M(t, o) {
            return t.some(function(t) {
                var e = t.name;
                return t.enabled && e === o;
            });
        }
        function q(t) {
            for (var e = [ !1, "ms", "Webkit", "Moz", "O" ], o = t.charAt(0).toUpperCase() + t.slice(1), r = 0; r < e.length; r++) {
                var n = e[r], i = n ? "" + n + o : t;
                if (void 0 !== document.body.style[i]) return i;
            }
            return null;
        }
        function P(t) {
            var e = t.ownerDocument;
            return e ? e.defaultView : window;
        }
        function H(t, e, o, r) {
            o.updateBound = r, P(t).addEventListener("resize", o.updateBound, {
                passive: !0
            });
            var n = u(t);
            return function t(e, o, r, n) {
                var i = "BODY" === e.nodeName, a = i ? e.ownerDocument.defaultView : e;
                a.addEventListener(o, r, {
                    passive: !0
                }), i || t(u(a.parentNode), o, r, n), n.push(a);
            }(n, "scroll", o.updateBound, o.scrollParents), o.scrollElement = n, o.eventsEnabled = !0, 
            o;
        }
        function R() {
            var t, e;
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, 
            e = this.state, P(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) {
                t.removeEventListener("scroll", e.updateBound);
            }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, 
            e));
        }
        function B(t) {
            return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
        }
        function F(o, r) {
            Object.keys(r).forEach(function(t) {
                var e = "";
                -1 !== [ "width", "height", "top", "right", "bottom", "left" ].indexOf(t) && B(r[t]) && (e = "px"), 
                o.style[t] = r[t] + e;
            });
        }
        function W(t, e) {
            function o(t) {
                return t;
            }
            var r = t.offsets, n = r.popper, i = r.reference, a = Math.round, l = Math.floor, d = a(i.width), s = a(n.width), m = -1 !== [ "left", "right" ].indexOf(t.placement), c = -1 !== t.placement.indexOf("-"), p = e ? m || c || d % 2 == s % 2 ? a : l : o, f = e ? a : o;
            return {
                left: p(d % 2 == 1 && s % 2 == 1 && !c && e ? n.left - 1 : n.left),
                top: f(n.top),
                bottom: f(n.bottom),
                right: p(n.right)
            };
        }
        var U = o && /Firefox/i.test(navigator.userAgent);
        function $(t, e, o) {
            var r = O(t, function(t) {
                return t.name === e;
            }), n = !!r && t.some(function(t) {
                return t.name === o && t.enabled && t.order < r.order;
            });
            return n || 0, n;
        }
        var Q = [ "auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start" ], X = Q.slice(3);
        function V(t, e) {
            var o = 1 < arguments.length && void 0 !== e && e, r = X.indexOf(t), n = X.slice(r + 1).concat(X.slice(0, r));
            return o ? n.reverse() : n;
        }
        var Y = "flip", K = "clockwise", G = "counterclockwise";
        function J(t, n, i, e) {
            var a = [ 0, 0 ], l = -1 !== [ "right", "left" ].indexOf(e), o = t.split(/(\+|\-)/).map(function(t) {
                return t.trim();
            }), r = o.indexOf(O(o, function(t) {
                return -1 !== t.search(/,|\s/);
            }));
            o[r] && o[r].indexOf(",");
            var d = /\s*,\s*|\s+/;
            return (-1 !== r ? [ o.slice(0, r).concat([ o[r].split(d)[0] ]), [ o[r].split(d)[1] ].concat(o.slice(r + 1)) ] : [ o ]).map(function(t, e) {
                var o = (1 === e ? !l : l) ? "height" : "width", r = !1;
                return t.reduce(function(t, e) {
                    return "" === t[t.length - 1] && -1 !== [ "+", "-" ].indexOf(e) ? (t[t.length - 1] = e, 
                    r = !0, t) : r ? (t[t.length - 1] += e, r = !1, t) : t.concat(e);
                }, []).map(function(t) {
                    return function(t, e, o, r) {
                        var n = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), i = +n[1], a = n[2];
                        if (!i) return t;
                        if (0 !== a.indexOf("%")) return "vh" !== a && "vw" !== a ? i : ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i;
                        var l = void 0;
                        switch (a) {
                          case "%p":
                            l = o;
                            break;

                          case "%":
                          case "%r":
                          default:
                            l = r;
                        }
                        return T(l)[e] / 100 * i;
                    }(t, o, n, i);
                });
            }).forEach(function(o, r) {
                o.forEach(function(t, e) {
                    B(t) && (a[r] += t * ("-" === o[e - 1] ? -1 : 1));
                });
            }), a;
        }
        var Z = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(t) {
                        var e, o, r, n, i, a, l, d = t.placement, s = d.split("-")[0], m = d.split("-")[1];
                        return m && (o = (e = t.offsets).reference, r = e.popper, a = (n = -1 !== [ "bottom", "top" ].indexOf(s)) ? "width" : "height", 
                        l = {
                            start: _({}, i = n ? "left" : "top", o[i]),
                            end: _({}, i, o[i] + o[a] - r[a])
                        }, t.offsets.popper = E({}, r, l[m])), t;
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(t, e) {
                        var o = e.offset, r = t.placement, n = t.offsets, i = n.popper, a = n.reference, l = r.split("-")[0], d = void 0, d = B(+o) ? [ +o, 0 ] : J(o, i, a, l);
                        return "left" === l ? (i.top += d[0], i.left -= d[1]) : "right" === l ? (i.top += d[0], 
                        i.left += d[1]) : "top" === l ? (i.left += d[0], i.top -= d[1]) : "bottom" === l && (i.left += d[0], 
                        i.top += d[1]), t.popper = i, t;
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(t, r) {
                        var e = r.boundariesElement || v(t.instance.popper);
                        t.instance.reference === e && (e = v(e));
                        var o = q("transform"), n = t.instance.popper.style, i = n.top, a = n.left, l = n[o];
                        n.top = "", n.left = "", n[o] = "";
                        var d = f(t.instance.popper, t.instance.reference, r.padding, e, t.positionFixed);
                        n.top = i, n.left = a, n[o] = l, r.boundaries = d;
                        var s = r.priority, m = t.offsets.popper, c = {
                            primary: function(t) {
                                var e = m[t];
                                return m[t] < d[t] && !r.escapeWithReference && (e = Math.max(m[t], d[t])), _({}, t, e);
                            },
                            secondary: function(t) {
                                var e = "right" === t ? "left" : "top", o = m[e];
                                return m[t] > d[t] && !r.escapeWithReference && (o = Math.min(m[e], d[t] - ("right" === t ? m.width : m.height))), 
                                _({}, e, o);
                            }
                        };
                        return s.forEach(function(t) {
                            var e = -1 !== [ "left", "top" ].indexOf(t) ? "primary" : "secondary";
                            m = E({}, m, c[e](t));
                        }), t.offsets.popper = m, t;
                    },
                    priority: [ "left", "right", "top", "bottom" ],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.offsets, o = e.popper, r = e.reference, n = t.placement.split("-")[0], i = Math.floor, a = -1 !== [ "top", "bottom" ].indexOf(n), l = a ? "right" : "bottom", d = a ? "left" : "top", s = a ? "width" : "height";
                        return o[l] < i(r[d]) && (t.offsets.popper[d] = i(r[d]) - o[s]), o[d] > i(r[l]) && (t.offsets.popper[d] = i(r[l])), 
                        t;
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(t, e) {
                        var o;
                        if (!$(t.instance.modifiers, "arrow", "keepTogether")) return t;
                        var r = e.element;
                        if ("string" == typeof r) {
                            if (!(r = t.instance.popper.querySelector(r))) return t;
                        } else if (!t.instance.popper.contains(r)) return t;
                        var n = t.placement.split("-")[0], i = t.offsets, a = i.popper, l = i.reference, d = -1 !== [ "left", "right" ].indexOf(n), s = d ? "height" : "width", m = d ? "Top" : "Left", c = m.toLowerCase(), p = d ? "left" : "top", f = d ? "bottom" : "right", g = A(r)[s];
                        l[f] - g < a[c] && (t.offsets.popper[c] -= a[c] - (l[f] - g)), l[c] + g > a[f] && (t.offsets.popper[c] += l[c] + g - a[f]), 
                        t.offsets.popper = T(t.offsets.popper);
                        var u = l[c] + l[s] / 2 - g / 2, b = w(t.instance.popper), h = parseFloat(b["margin" + m]), x = parseFloat(b["border" + m + "Width"]), v = u - t.offsets.popper[c] - h - x, v = Math.max(Math.min(a[s] - g, v), 0);
                        return t.arrowElement = r, t.offsets.arrow = (_(o = {}, c, Math.round(v)), _(o, p, ""), 
                        o), t;
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(b, h) {
                        if (M(b.instance.modifiers, "inner")) return b;
                        if (b.flipped && b.placement === b.originalPlacement) return b;
                        var x = f(b.instance.popper, b.instance.reference, h.padding, h.boundariesElement, b.positionFixed), v = b.placement.split("-")[0], w = D(v), y = b.placement.split("-")[1] || "", k = [];
                        switch (h.behavior) {
                          case Y:
                            k = [ v, w ];
                            break;

                          case K:
                            k = V(v);
                            break;

                          case G:
                            k = V(v, !0);
                            break;

                          default:
                            k = h.behavior;
                        }
                        return k.forEach(function(t, e) {
                            if (v !== t || k.length === e + 1) return b;
                            v = b.placement.split("-")[0], w = D(v);
                            var o, r = b.offsets.popper, n = b.offsets.reference, i = Math.floor, a = "left" === v && i(r.right) > i(n.left) || "right" === v && i(r.left) < i(n.right) || "top" === v && i(r.bottom) > i(n.top) || "bottom" === v && i(r.top) < i(n.bottom), l = i(r.left) < i(x.left), d = i(r.right) > i(x.right), s = i(r.top) < i(x.top), m = i(r.bottom) > i(x.bottom), c = "left" === v && l || "right" === v && d || "top" === v && s || "bottom" === v && m, p = -1 !== [ "top", "bottom" ].indexOf(v), f = !!h.flipVariations && (p && "start" === y && l || p && "end" === y && d || !p && "start" === y && s || !p && "end" === y && m), g = !!h.flipVariationsByContent && (p && "start" === y && d || p && "end" === y && l || !p && "start" === y && m || !p && "end" === y && s), u = f || g;
                            (a || c || u) && (b.flipped = !0, (a || c) && (v = k[e + 1]), u && (y = "end" === (o = y) ? "start" : "start" === o ? "end" : o), 
                            b.placement = v + (y ? "-" + y : ""), b.offsets.popper = E({}, b.offsets.popper, L(b.instance.popper, b.offsets.reference, b.placement)), 
                            b = I(b.instance.modifiers, b, "flip"));
                        }), b;
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(t) {
                        var e = t.placement, o = e.split("-")[0], r = t.offsets, n = r.popper, i = r.reference, a = -1 !== [ "left", "right" ].indexOf(o), l = -1 === [ "top", "left" ].indexOf(o);
                        return n[a ? "left" : "top"] = i[o] - (l ? n[a ? "width" : "height"] : 0), t.placement = D(e), 
                        t.offsets.popper = T(n), t;
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(t) {
                        if (!$(t.instance.modifiers, "hide", "preventOverflow")) return t;
                        var e = t.offsets.reference, o = O(t.instance.modifiers, function(t) {
                            return "preventOverflow" === t.name;
                        }).boundaries;
                        if (e.bottom < o.top || e.left > o.right || e.top > o.bottom || e.right < o.left) {
                            if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = "";
                        } else {
                            if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1;
                        }
                        return t;
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(t, e) {
                        var o, r, n = e.x, i = e.y, a = t.offsets.popper, l = O(t.instance.modifiers, function(t) {
                            return "applyStyle" === t.name;
                        }).gpuAcceleration, d = void 0 !== l ? l : e.gpuAcceleration, s = v(t.instance.popper), m = C(s), c = {
                            position: a.position
                        }, p = W(t, window.devicePixelRatio < 2 || !U), f = "bottom" === n ? "top" : "bottom", g = "right" === i ? "left" : "right", u = q("transform"), b = void 0, h = void 0, h = "bottom" == f ? "HTML" === s.nodeName ? -s.clientHeight + p.bottom : -m.height + p.bottom : p.top, b = "right" == g ? "HTML" === s.nodeName ? -s.clientWidth + p.right : -m.width + p.right : p.left;
                        d && u ? (c[u] = "translate3d(" + b + "px, " + h + "px, 0)", c[f] = 0, c[g] = 0, 
                        c.willChange = "transform") : (o = "bottom" == f ? -1 : 1, r = "right" == g ? -1 : 1, 
                        c[f] = h * o, c[g] = b * r, c.willChange = f + ", " + g);
                        var x = {
                            "x-placement": t.placement
                        };
                        return t.attributes = E({}, x, t.attributes), t.styles = E({}, c, t.styles), t.arrowStyles = E({}, t.offsets.arrow, t.arrowStyles), 
                        t;
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(t) {
                        var e, o;
                        return F(t.instance.popper, t.styles), e = t.instance.popper, o = t.attributes, 
                        Object.keys(o).forEach(function(t) {
                            !1 !== o[t] ? e.setAttribute(t, o[t]) : e.removeAttribute(t);
                        }), t.arrowElement && Object.keys(t.arrowStyles).length && F(t.arrowElement, t.arrowStyles), 
                        t;
                    },
                    onLoad: function(t, e, o, r, n) {
                        var i = N(n, e, t, o.positionFixed), a = z(o.placement, i, e, t, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                        return e.setAttribute("x-placement", a), F(e, {
                            position: o.positionFixed ? "fixed" : "absolute"
                        }), o;
                    },
                    gpuAcceleration: void 0
                }
            }
        }, tt = (s(et, [ {
            key: "update",
            value: function() {
                return function() {
                    var t;
                    this.state.isDestroyed || ((t = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    }).offsets.reference = N(this.state, this.popper, this.reference, this.options.positionFixed), 
                    t.placement = z(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), 
                    t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, 
                    t.offsets.popper = L(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", 
                    t = I(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, 
                    this.options.onCreate(t)));
                }.call(this);
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0, M(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), 
                    this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", 
                    this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", 
                    this.popper.style[q("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), 
                    this;
                }.call(this);
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = H(this.reference, this.options, this.state, this.scheduleUpdate));
                }.call(this);
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return R.call(this);
            }
        } ]), et);
        function et(t, e) {
            var o = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            d(this, et), this.scheduleUpdate = function() {
                return requestAnimationFrame(o.update);
            }, this.update = i(this.update.bind(this)), this.options = E({}, et.Defaults, r), 
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = t && t.jquery ? t[0] : t, this.popper = e && e.jquery ? e[0] : e, 
            this.options.modifiers = {}, Object.keys(E({}, et.Defaults.modifiers, r.modifiers)).forEach(function(t) {
                o.options.modifiers[t] = E({}, et.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {});
            }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                return E({
                    name: t
                }, o.options.modifiers[t]);
            }).sort(function(t, e) {
                return t.order - e.order;
            }), this.modifiers.forEach(function(t) {
                t.enabled && a(t.onLoad) && t.onLoad(o.reference, o.popper, o.options, t, o.state);
            }), this.update();
            var n = this.options.eventsEnabled;
            n && this.enableEventListeners(), this.state.eventsEnabled = n;
        }
        tt.Utils = ("undefined" != typeof window ? window : t).PopperUtils, tt.placements = Q, 
        tt.Defaults = Z, ot.default = tt;
    }.call(this, e(9));
}, function(t, e, o) {
    "use strict";
    t.exports = function(o) {
        var d = [];
        return d.toString = function() {
            return this.map(function(t) {
                var e = function(t, e) {
                    var o = t[1] || "", r = t[3];
                    if (!r) return o;
                    if (e && "function" == typeof btoa) {
                        var n = function(t) {
                            var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))), o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);
                            return "/*# ".concat(o, " */");
                        }(r), i = r.sources.map(function(t) {
                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(t, " */");
                        });
                        return [ o ].concat(i).concat([ n ]).join("\n");
                    }
                    return [ o ].join("\n");
                }(t, o);
                return t[2] ? "@media ".concat(t[2], " {").concat(e, "}") : e;
            }).join("");
        }, d.i = function(t, e, o) {
            "string" == typeof t && (t = [ [ null, t, "" ] ]);
            var r = {};
            if (o) for (var n = 0; n < this.length; n++) {
                var i = this[n][0];
                null != i && (r[i] = !0);
            }
            for (var a = 0; a < t.length; a++) {
                var l = [].concat(t[a]);
                o && r[l[0]] || (e && (l[2] ? l[2] = "".concat(e, " and ").concat(l[2]) : l[2] = e), 
                d.push(l));
            }
        }, d;
    };
}, function(t, e, i) {
    "use strict";
    var o, r, n = function() {
        return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), 
        o;
    }, a = (r = {}, function(t) {
        if (void 0 === r[t]) {
            var e = document.querySelector(t);
            if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
                e = e.contentDocument.head;
            } catch (t) {
                e = null;
            }
            r[t] = e;
        }
        return r[t];
    }), c = [];
    function p(t) {
        for (var e = -1, o = 0; o < c.length; o++) if (c[o].identifier === t) {
            e = o;
            break;
        }
        return e;
    }
    function d(t, e) {
        for (var o = {}, r = [], n = 0; n < t.length; n++) {
            var i = t[n], a = e.base ? i[0] + e.base : i[0], l = o[a] || 0, d = "".concat(a, " ").concat(l);
            o[a] = l + 1;
            var s = p(d), m = {
                css: i[1],
                media: i[2],
                sourceMap: i[3]
            };
            -1 !== s ? (c[s].references++, c[s].updater(m)) : c.push({
                identifier: d,
                updater: function(e, t) {
                    var o, r, n;
                    {
                        var i;
                        n = t.singleton ? (i = b++, o = u = u || f(t), r = g.bind(null, o, i, !1), g.bind(null, o, i, !0)) : (o = f(t), 
                        r = function(t, e, o) {
                            var r = o.css, n = o.media, i = o.sourceMap;
                            n ? t.setAttribute("media", n) : t.removeAttribute("media");
                            i && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */"));
                            if (t.styleSheet) t.styleSheet.cssText = r; else {
                                for (;t.firstChild; ) t.removeChild(t.firstChild);
                                t.appendChild(document.createTextNode(r));
                            }
                        }.bind(null, o, t), function() {
                            !function(t) {
                                if (null === t.parentNode) return;
                                t.parentNode.removeChild(t);
                            }(o);
                        });
                    }
                    return r(e), function(t) {
                        if (t) {
                            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                            r(e = t);
                        } else n();
                    };
                }(m, e),
                references: 1
            }), r.push(d);
        }
        return r;
    }
    function f(t) {
        var e, o = document.createElement("style"), r = t.attributes || {};
        if (void 0 !== r.nonce || (e = i.nc) && (r.nonce = e), Object.keys(r).forEach(function(t) {
            o.setAttribute(t, r[t]);
        }), "function" == typeof t.insert) t.insert(o); else {
            var n = a(t.insert || "head");
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            n.appendChild(o);
        }
        return o;
    }
    var l, s = (l = [], function(t, e) {
        return l[t] = e, l.filter(Boolean).join("\n");
    });
    function g(t, e, o, r) {
        var n, i, a = o ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
        t.styleSheet ? t.styleSheet.cssText = s(e, a) : (n = document.createTextNode(a), 
        (i = t.childNodes)[e] && t.removeChild(i[e]), i.length ? t.insertBefore(n, i[e]) : t.appendChild(n));
    }
    var u = null, b = 0;
    t.exports = function(t, a) {
        (a = a || {}).singleton || "boolean" == typeof a.singleton || (a.singleton = n());
        var l = d(t = t || [], a);
        return function(t) {
            if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
                for (var e = 0; e < l.length; e++) {
                    var o = p(l[e]);
                    c[o].references--;
                }
                for (var r = d(t, a), n = 0; n < l.length; n++) {
                    var i = p(l[n]);
                    0 === c[i].references && (c[i].updater(), c.splice(i, 1));
                }
                l = r;
            }
        };
    };
}, function(t, e, o) {
    !function(t, b, p) {
        "use strict";
        function r(t, e) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(t, r.key, r);
            }
        }
        function i(t, e, o) {
            if (e) r(t.prototype, e);
            if (o) r(t, o);
            return t;
        }
        function n(t, e, o) {
            if (e in t) {
                Object.defineProperty(t, e, {
                    value: o,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                t[e] = o;
            }
            return t;
        }
        function a(e, t) {
            var o = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                if (t) r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                });
                o.push.apply(o, r);
            }
            return o;
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t] != null ? arguments[t] : {};
                if (t % 2) {
                    a(Object(o), true).forEach(function(t) {
                        n(e, t, o[t]);
                    });
                } else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(e, Object.getOwnPropertyDescriptors(o));
                } else {
                    a(Object(o)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                    });
                }
            }
            return e;
        }
        function o(t, e) {
            t.prototype = Object.create(e.prototype);
            t.prototype.constructor = t;
            t.__proto__ = e;
        }
        b = b && Object.prototype.hasOwnProperty.call(b, "default") ? b["default"] : b, 
        p = p && Object.prototype.hasOwnProperty.call(p, "default") ? p["default"] : p;
        var d = "transitionend", s = 1e6, m = 1e3;
        function c(t) {
            if (t === null || typeof t === "undefined") {
                return "" + t;
            }
            return {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase();
        }
        function e() {
            return {
                bindType: d,
                delegateType: d,
                handle: function t(e) {
                    if (b(e.target).is(this)) {
                        return e.handleObj.handler.apply(this, arguments);
                    }
                    return undefined;
                }
            };
        }
        function f(t) {
            var e = this;
            var o = false;
            b(this).one(h.TRANSITION_END, function() {
                o = true;
            });
            setTimeout(function() {
                if (!o) {
                    h.triggerTransitionEnd(e);
                }
            }, t);
            return this;
        }
        function g() {
            b.fn.emulateTransitionEnd = f;
            b.event.special[h.TRANSITION_END] = e();
        }
        var h = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function t(e) {
                do {
                    e += ~~(Math.random() * s);
                } while (document.getElementById(e));
                return e;
            },
            getSelectorFromElement: function t(e) {
                var o = e.getAttribute("data-target");
                if (!o || o === "#") {
                    var r = e.getAttribute("href");
                    o = r && r !== "#" ? r.trim() : "";
                }
                try {
                    return document.querySelector(o) ? o : null;
                } catch (t) {
                    return null;
                }
            },
            getTransitionDurationFromElement: function t(e) {
                if (!e) {
                    return 0;
                }
                var o = b(e).css("transition-duration");
                var r = b(e).css("transition-delay");
                var n = parseFloat(o);
                var i = parseFloat(r);
                if (!n && !i) {
                    return 0;
                }
                o = o.split(",")[0];
                r = r.split(",")[0];
                return (parseFloat(o) + parseFloat(r)) * m;
            },
            reflow: function t(e) {
                return e.offsetHeight;
            },
            triggerTransitionEnd: function t(e) {
                b(e).trigger(d);
            },
            supportsTransitionEnd: function t() {
                return Boolean(d);
            },
            isElement: function t(e) {
                return (e[0] || e).nodeType;
            },
            typeCheckConfig: function t(e, o, r) {
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        var i = r[n];
                        var a = o[n];
                        var l = a && h.isElement(a) ? "element" : c(a);
                        if (!new RegExp(i).test(l)) {
                            throw new Error(e.toUpperCase() + ": " + ('Option "' + n + '" provided type "' + l + '" ') + ('but expected type "' + i + '".'));
                        }
                    }
                }
            },
            findShadowRoot: function t(e) {
                if (!document.documentElement.attachShadow) {
                    return null;
                }
                if (typeof e.getRootNode === "function") {
                    var o = e.getRootNode();
                    return o instanceof ShadowRoot ? o : null;
                }
                if (e instanceof ShadowRoot) {
                    return e;
                }
                if (!e.parentNode) {
                    return null;
                }
                return h.findShadowRoot(e.parentNode);
            },
            jQueryDetection: function t() {
                if (typeof b === "undefined") {
                    throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                }
                var e = b.fn.jquery.split(" ")[0].split(".");
                var o = 1;
                var r = 2;
                var n = 9;
                var i = 1;
                var a = 4;
                if (e[0] < r && e[1] < n || e[0] === o && e[1] === n && e[2] < i || e[0] >= a) {
                    throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
                }
            }
        };
        h.jQueryDetection(), g();
        var u = "alert", x = "4.5.0", v = "bs.alert", w = "." + v, y = ".data-api", k = b.fn[u], _ = '[data-dismiss="alert"]', E = "close" + w, T = "closed" + w, C = "click" + w + y, j = "alert", S = "fade", z = "show", N = function() {
            function r(t) {
                this._element = t;
            }
            var t = r.prototype;
            t.close = function t(e) {
                var o = this._element;
                if (e) {
                    o = this._getRootElement(e);
                }
                var r = this._triggerCloseEvent(o);
                if (r.isDefaultPrevented()) {
                    return;
                }
                this._removeElement(o);
            };
            t.dispose = function t() {
                b.removeData(this._element, v);
                this._element = null;
            };
            t._getRootElement = function t(e) {
                var o = h.getSelectorFromElement(e);
                var r = false;
                if (o) {
                    r = document.querySelector(o);
                }
                if (!r) {
                    r = b(e).closest("." + j)[0];
                }
                return r;
            };
            t._triggerCloseEvent = function t(e) {
                var o = b.Event(E);
                b(e).trigger(o);
                return o;
            };
            t._removeElement = function t(e) {
                var o = this;
                b(e).removeClass(z);
                if (!b(e).hasClass(S)) {
                    this._destroyElement(e);
                    return;
                }
                var r = h.getTransitionDurationFromElement(e);
                b(e).one(h.TRANSITION_END, function(t) {
                    return o._destroyElement(e, t);
                }).emulateTransitionEnd(r);
            };
            t._destroyElement = function t(e) {
                b(e).detach().trigger(T).remove();
            };
            r._jQueryInterface = function t(o) {
                return this.each(function() {
                    var t = b(this);
                    var e = t.data(v);
                    if (!e) {
                        e = new r(this);
                        t.data(v, e);
                    }
                    if (o === "close") {
                        e[o](this);
                    }
                });
            };
            r._handleDismiss = function t(e) {
                return function(t) {
                    if (t) {
                        t.preventDefault();
                    }
                    e.close(this);
                };
            };
            i(r, null, [ {
                key: "VERSION",
                get: function t() {
                    return x;
                }
            } ]);
            return r;
        }();
        b(document).on(C, _, N._handleDismiss(new N())), b.fn[u] = N._jQueryInterface, b.fn[u].Constructor = N, 
        b.fn[u].noConflict = function() {
            b.fn[u] = k;
            return N._jQueryInterface;
        };
        var A = "button", D = "4.5.0", L = "bs.button", O = "." + L, I = ".data-api", M = b.fn[A], q = "active", P = "btn", H = "focus", R = '[data-toggle^="button"]', B = '[data-toggle="buttons"]', F = '[data-toggle="button"]', W = '[data-toggle="buttons"] .btn', U = 'input:not([type="hidden"])', $ = ".active", Q = ".btn", X = "click" + O + I, V = "focus" + O + I + " " + ("blur" + O + I), Y = "load" + O + I, K = function() {
            function o(t) {
                this._element = t;
            }
            var t = o.prototype;
            t.toggle = function t() {
                var e = true;
                var o = true;
                var r = b(this._element).closest(B)[0];
                if (r) {
                    var n = this._element.querySelector(U);
                    if (n) {
                        if (n.type === "radio") {
                            if (n.checked && this._element.classList.contains(q)) {
                                e = false;
                            } else {
                                var i = r.querySelector($);
                                if (i) {
                                    b(i).removeClass(q);
                                }
                            }
                        }
                        if (e) {
                            if (n.type === "checkbox" || n.type === "radio") {
                                n.checked = !this._element.classList.contains(q);
                            }
                            b(n).trigger("change");
                        }
                        n.focus();
                        o = false;
                    }
                }
                if (!(this._element.hasAttribute("disabled") || this._element.classList.contains("disabled"))) {
                    if (o) {
                        this._element.setAttribute("aria-pressed", !this._element.classList.contains(q));
                    }
                    if (e) {
                        b(this._element).toggleClass(q);
                    }
                }
            };
            t.dispose = function t() {
                b.removeData(this._element, L);
                this._element = null;
            };
            o._jQueryInterface = function t(e) {
                return this.each(function() {
                    var t = b(this).data(L);
                    if (!t) {
                        t = new o(this);
                        b(this).data(L, t);
                    }
                    if (e === "toggle") {
                        t[e]();
                    }
                });
            };
            i(o, null, [ {
                key: "VERSION",
                get: function t() {
                    return D;
                }
            } ]);
            return o;
        }();
        b(document).on(X, R, function(t) {
            var e = t.target;
            var o = e;
            if (!b(e).hasClass(P)) {
                e = b(e).closest(Q)[0];
            }
            if (!e || e.hasAttribute("disabled") || e.classList.contains("disabled")) {
                t.preventDefault();
            } else {
                var r = e.querySelector(U);
                if (r && (r.hasAttribute("disabled") || r.classList.contains("disabled"))) {
                    t.preventDefault();
                    return;
                }
                if (o.tagName === "LABEL" && r && r.type === "checkbox") {
                    t.preventDefault();
                }
                K._jQueryInterface.call(b(e), "toggle");
            }
        }).on(V, R, function(t) {
            var e = b(t.target).closest(Q)[0];
            b(e).toggleClass(H, /^focus(in)?$/.test(t.type));
        }), b(window).on(Y, function() {
            var t = [].slice.call(document.querySelectorAll(W));
            for (var e = 0, o = t.length; e < o; e++) {
                var r = t[e];
                var n = r.querySelector(U);
                if (n.checked || n.hasAttribute("checked")) {
                    r.classList.add(q);
                } else {
                    r.classList.remove(q);
                }
            }
            t = [].slice.call(document.querySelectorAll(F));
            for (var i = 0, a = t.length; i < a; i++) {
                var l = t[i];
                if (l.getAttribute("aria-pressed") === "true") {
                    l.classList.add(q);
                } else {
                    l.classList.remove(q);
                }
            }
        }), b.fn[A] = K._jQueryInterface, b.fn[A].Constructor = K, b.fn[A].noConflict = function() {
            b.fn[A] = M;
            return K._jQueryInterface;
        };
        var G = "carousel", J = "4.5.0", Z = "bs.carousel", tt = "." + Z, et = ".data-api", ot = b.fn[G], rt = 37, nt = 39, it = 500, at = 40, lt = {
            interval: 5e3,
            keyboard: true,
            slide: false,
            pause: "hover",
            wrap: true,
            touch: true
        }, dt = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        }, st = "next", mt = "prev", ct = "left", pt = "right", ft = "slide" + tt, gt = "slid" + tt, ut = "keydown" + tt, bt = "mouseenter" + tt, ht = "mouseleave" + tt, xt = "touchstart" + tt, vt = "touchmove" + tt, wt = "touchend" + tt, yt = "pointerdown" + tt, kt = "pointerup" + tt, _t = "dragstart" + tt, Et = "load" + tt + et, Tt = "click" + tt + et, Ct = "carousel", jt = "active", St = "slide", zt = "carousel-item-right", Nt = "carousel-item-left", At = "carousel-item-next", Dt = "carousel-item-prev", Lt = "pointer-event", Ot = ".active", It = ".active.carousel-item", Mt = ".carousel-item", qt = ".carousel-item img", Pt = ".carousel-item-next, .carousel-item-prev", Ht = ".carousel-indicators", Rt = "[data-slide], [data-slide-to]", Bt = '[data-ride="carousel"]', Ft = {
            TOUCH: "touch",
            PEN: "pen"
        }, Wt = function() {
            function a(t, e) {
                this._items = null;
                this._interval = null;
                this._activeElement = null;
                this._isPaused = false;
                this._isSliding = false;
                this.touchTimeout = null;
                this.touchStartX = 0;
                this.touchDeltaX = 0;
                this._config = this._getConfig(e);
                this._element = t;
                this._indicatorsElement = this._element.querySelector(Ht);
                this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
                this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);
                this._addEventListeners();
            }
            var t = a.prototype;
            t.next = function t() {
                if (!this._isSliding) {
                    this._slide(st);
                }
            };
            t.nextWhenVisible = function t() {
                if (!document.hidden && b(this._element).is(":visible") && b(this._element).css("visibility") !== "hidden") {
                    this.next();
                }
            };
            t.prev = function t() {
                if (!this._isSliding) {
                    this._slide(mt);
                }
            };
            t.pause = function t(e) {
                if (!e) {
                    this._isPaused = true;
                }
                if (this._element.querySelector(Pt)) {
                    h.triggerTransitionEnd(this._element);
                    this.cycle(true);
                }
                clearInterval(this._interval);
                this._interval = null;
            };
            t.cycle = function t(e) {
                if (!e) {
                    this._isPaused = false;
                }
                if (this._interval) {
                    clearInterval(this._interval);
                    this._interval = null;
                }
                if (this._config.interval && !this._isPaused) {
                    this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
                }
            };
            t.to = function t(e) {
                var o = this;
                this._activeElement = this._element.querySelector(It);
                var r = this._getItemIndex(this._activeElement);
                if (e > this._items.length - 1 || e < 0) {
                    return;
                }
                if (this._isSliding) {
                    b(this._element).one(gt, function() {
                        return o.to(e);
                    });
                    return;
                }
                if (r === e) {
                    this.pause();
                    this.cycle();
                    return;
                }
                var n = e > r ? st : mt;
                this._slide(n, this._items[e]);
            };
            t.dispose = function t() {
                b(this._element).off(tt);
                b.removeData(this._element, Z);
                this._items = null;
                this._config = null;
                this._element = null;
                this._interval = null;
                this._isPaused = null;
                this._isSliding = null;
                this._activeElement = null;
                this._indicatorsElement = null;
            };
            t._getConfig = function t(e) {
                e = l(l({}, lt), e);
                h.typeCheckConfig(G, e, dt);
                return e;
            };
            t._handleSwipe = function t() {
                var e = Math.abs(this.touchDeltaX);
                if (e <= at) {
                    return;
                }
                var o = e / this.touchDeltaX;
                this.touchDeltaX = 0;
                if (o > 0) {
                    this.prev();
                }
                if (o < 0) {
                    this.next();
                }
            };
            t._addEventListeners = function t() {
                var e = this;
                if (this._config.keyboard) {
                    b(this._element).on(ut, function(t) {
                        return e._keydown(t);
                    });
                }
                if (this._config.pause === "hover") {
                    b(this._element).on(bt, function(t) {
                        return e.pause(t);
                    }).on(ht, function(t) {
                        return e.cycle(t);
                    });
                }
                if (this._config.touch) {
                    this._addTouchEventListeners();
                }
            };
            t._addTouchEventListeners = function t() {
                var o = this;
                if (!this._touchSupported) {
                    return;
                }
                var e = function t(e) {
                    if (o._pointerEvent && Ft[e.originalEvent.pointerType.toUpperCase()]) {
                        o.touchStartX = e.originalEvent.clientX;
                    } else if (!o._pointerEvent) {
                        o.touchStartX = e.originalEvent.touches[0].clientX;
                    }
                };
                var r = function t(e) {
                    if (e.originalEvent.touches && e.originalEvent.touches.length > 1) {
                        o.touchDeltaX = 0;
                    } else {
                        o.touchDeltaX = e.originalEvent.touches[0].clientX - o.touchStartX;
                    }
                };
                var n = function t(e) {
                    if (o._pointerEvent && Ft[e.originalEvent.pointerType.toUpperCase()]) {
                        o.touchDeltaX = e.originalEvent.clientX - o.touchStartX;
                    }
                    o._handleSwipe();
                    if (o._config.pause === "hover") {
                        o.pause();
                        if (o.touchTimeout) {
                            clearTimeout(o.touchTimeout);
                        }
                        o.touchTimeout = setTimeout(function(t) {
                            return o.cycle(t);
                        }, it + o._config.interval);
                    }
                };
                b(this._element.querySelectorAll(qt)).on(_t, function(t) {
                    return t.preventDefault();
                });
                if (this._pointerEvent) {
                    b(this._element).on(yt, function(t) {
                        return e(t);
                    });
                    b(this._element).on(kt, function(t) {
                        return n(t);
                    });
                    this._element.classList.add(Lt);
                } else {
                    b(this._element).on(xt, function(t) {
                        return e(t);
                    });
                    b(this._element).on(vt, function(t) {
                        return r(t);
                    });
                    b(this._element).on(wt, function(t) {
                        return n(t);
                    });
                }
            };
            t._keydown = function t(e) {
                if (/input|textarea/i.test(e.target.tagName)) {
                    return;
                }
                switch (e.which) {
                  case rt:
                    e.preventDefault();
                    this.prev();
                    break;

                  case nt:
                    e.preventDefault();
                    this.next();
                    break;
                }
            };
            t._getItemIndex = function t(e) {
                this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(Mt)) : [];
                return this._items.indexOf(e);
            };
            t._getItemByDirection = function t(e, o) {
                var r = e === st;
                var n = e === mt;
                var i = this._getItemIndex(o);
                var a = this._items.length - 1;
                var l = n && i === 0 || r && i === a;
                if (l && !this._config.wrap) {
                    return o;
                }
                var d = e === mt ? -1 : 1;
                var s = (i + d) % this._items.length;
                return s === -1 ? this._items[this._items.length - 1] : this._items[s];
            };
            t._triggerSlideEvent = function t(e, o) {
                var r = this._getItemIndex(e);
                var n = this._getItemIndex(this._element.querySelector(It));
                var i = b.Event(ft, {
                    relatedTarget: e,
                    direction: o,
                    from: n,
                    to: r
                });
                b(this._element).trigger(i);
                return i;
            };
            t._setActiveIndicatorElement = function t(e) {
                if (this._indicatorsElement) {
                    var o = [].slice.call(this._indicatorsElement.querySelectorAll(Ot));
                    b(o).removeClass(jt);
                    var r = this._indicatorsElement.children[this._getItemIndex(e)];
                    if (r) {
                        b(r).addClass(jt);
                    }
                }
            };
            t._slide = function t(e, o) {
                var r = this;
                var n = this._element.querySelector(It);
                var i = this._getItemIndex(n);
                var a = o || n && this._getItemByDirection(e, n);
                var l = this._getItemIndex(a);
                var d = Boolean(this._interval);
                var s;
                var m;
                var c;
                if (e === st) {
                    s = Nt;
                    m = At;
                    c = ct;
                } else {
                    s = zt;
                    m = Dt;
                    c = pt;
                }
                if (a && b(a).hasClass(jt)) {
                    this._isSliding = false;
                    return;
                }
                var p = this._triggerSlideEvent(a, c);
                if (p.isDefaultPrevented()) {
                    return;
                }
                if (!n || !a) {
                    return;
                }
                this._isSliding = true;
                if (d) {
                    this.pause();
                }
                this._setActiveIndicatorElement(a);
                var f = b.Event(gt, {
                    relatedTarget: a,
                    direction: c,
                    from: i,
                    to: l
                });
                if (b(this._element).hasClass(St)) {
                    b(a).addClass(m);
                    h.reflow(a);
                    b(n).addClass(s);
                    b(a).addClass(s);
                    var g = parseInt(a.getAttribute("data-interval"), 10);
                    if (g) {
                        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
                        this._config.interval = g;
                    } else {
                        this._config.interval = this._config.defaultInterval || this._config.interval;
                    }
                    var u = h.getTransitionDurationFromElement(n);
                    b(n).one(h.TRANSITION_END, function() {
                        b(a).removeClass(s + " " + m).addClass(jt);
                        b(n).removeClass(jt + " " + m + " " + s);
                        r._isSliding = false;
                        setTimeout(function() {
                            return b(r._element).trigger(f);
                        }, 0);
                    }).emulateTransitionEnd(u);
                } else {
                    b(n).removeClass(jt);
                    b(a).addClass(jt);
                    this._isSliding = false;
                    b(this._element).trigger(f);
                }
                if (d) {
                    this.cycle();
                }
            };
            a._jQueryInterface = function t(r) {
                return this.each(function() {
                    var t = b(this).data(Z);
                    var e = l(l({}, lt), b(this).data());
                    if (typeof r === "object") {
                        e = l(l({}, e), r);
                    }
                    var o = typeof r === "string" ? r : e.slide;
                    if (!t) {
                        t = new a(this, e);
                        b(this).data(Z, t);
                    }
                    if (typeof r === "number") {
                        t.to(r);
                    } else if (typeof o === "string") {
                        if (typeof t[o] === "undefined") {
                            throw new TypeError('No method named "' + o + '"');
                        }
                        t[o]();
                    } else if (e.interval && e.ride) {
                        t.pause();
                        t.cycle();
                    }
                });
            };
            a._dataApiClickHandler = function t(e) {
                var o = h.getSelectorFromElement(this);
                if (!o) {
                    return;
                }
                var r = b(o)[0];
                if (!r || !b(r).hasClass(Ct)) {
                    return;
                }
                var n = l(l({}, b(r).data()), b(this).data());
                var i = this.getAttribute("data-slide-to");
                if (i) {
                    n.interval = false;
                }
                a._jQueryInterface.call(b(r), n);
                if (i) {
                    b(r).data(Z).to(i);
                }
                e.preventDefault();
            };
            i(a, null, [ {
                key: "VERSION",
                get: function t() {
                    return J;
                }
            }, {
                key: "Default",
                get: function t() {
                    return lt;
                }
            } ]);
            return a;
        }();
        b(document).on(Tt, Rt, Wt._dataApiClickHandler), b(window).on(Et, function() {
            var t = [].slice.call(document.querySelectorAll(Bt));
            for (var e = 0, o = t.length; e < o; e++) {
                var r = b(t[e]);
                Wt._jQueryInterface.call(r, r.data());
            }
        }), b.fn[G] = Wt._jQueryInterface, b.fn[G].Constructor = Wt, b.fn[G].noConflict = function() {
            b.fn[G] = ot;
            return Wt._jQueryInterface;
        };
        var Ut = "collapse", $t = "4.5.0", Qt = "bs.collapse", Xt = "." + Qt, Vt = ".data-api", Yt = b.fn[Ut], Kt = {
            toggle: true,
            parent: ""
        }, Gt = {
            toggle: "boolean",
            parent: "(string|element)"
        }, Jt = "show" + Xt, Zt = "shown" + Xt, te = "hide" + Xt, ee = "hidden" + Xt, oe = "click" + Xt + Vt, re = "show", ne = "collapse", ie = "collapsing", ae = "collapsed", le = "width", de = "height", se = ".show, .collapsing", me = '[data-toggle="collapse"]', ce = function() {
            function m(e, t) {
                this._isTransitioning = false;
                this._element = e;
                this._config = this._getConfig(t);
                this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],' + ('[data-toggle="collapse"][data-target="#' + e.id + '"]')));
                var o = [].slice.call(document.querySelectorAll(me));
                for (var r = 0, n = o.length; r < n; r++) {
                    var i = o[r];
                    var a = h.getSelectorFromElement(i);
                    var l = [].slice.call(document.querySelectorAll(a)).filter(function(t) {
                        return t === e;
                    });
                    if (a !== null && l.length > 0) {
                        this._selector = a;
                        this._triggerArray.push(i);
                    }
                }
                this._parent = this._config.parent ? this._getParent() : null;
                if (!this._config.parent) {
                    this._addAriaAndCollapsedClass(this._element, this._triggerArray);
                }
                if (this._config.toggle) {
                    this.toggle();
                }
            }
            var t = m.prototype;
            t.toggle = function t() {
                if (b(this._element).hasClass(re)) {
                    this.hide();
                } else {
                    this.show();
                }
            };
            t.show = function t() {
                var e = this;
                if (this._isTransitioning || b(this._element).hasClass(re)) {
                    return;
                }
                var o;
                var r;
                if (this._parent) {
                    o = [].slice.call(this._parent.querySelectorAll(se)).filter(function(t) {
                        if (typeof e._config.parent === "string") {
                            return t.getAttribute("data-parent") === e._config.parent;
                        }
                        return t.classList.contains(ne);
                    });
                    if (o.length === 0) {
                        o = null;
                    }
                }
                if (o) {
                    r = b(o).not(this._selector).data(Qt);
                    if (r && r._isTransitioning) {
                        return;
                    }
                }
                var n = b.Event(Jt);
                b(this._element).trigger(n);
                if (n.isDefaultPrevented()) {
                    return;
                }
                if (o) {
                    m._jQueryInterface.call(b(o).not(this._selector), "hide");
                    if (!r) {
                        b(o).data(Qt, null);
                    }
                }
                var i = this._getDimension();
                b(this._element).removeClass(ne).addClass(ie);
                this._element.style[i] = 0;
                if (this._triggerArray.length) {
                    b(this._triggerArray).removeClass(ae).attr("aria-expanded", true);
                }
                this.setTransitioning(true);
                var a = function t() {
                    b(e._element).removeClass(ie).addClass(ne + " " + re);
                    e._element.style[i] = "";
                    e.setTransitioning(false);
                    b(e._element).trigger(Zt);
                };
                var l = i[0].toUpperCase() + i.slice(1);
                var d = "scroll" + l;
                var s = h.getTransitionDurationFromElement(this._element);
                b(this._element).one(h.TRANSITION_END, a).emulateTransitionEnd(s);
                this._element.style[i] = this._element[d] + "px";
            };
            t.hide = function t() {
                var e = this;
                if (this._isTransitioning || !b(this._element).hasClass(re)) {
                    return;
                }
                var o = b.Event(te);
                b(this._element).trigger(o);
                if (o.isDefaultPrevented()) {
                    return;
                }
                var r = this._getDimension();
                this._element.style[r] = this._element.getBoundingClientRect()[r] + "px";
                h.reflow(this._element);
                b(this._element).addClass(ie).removeClass(ne + " " + re);
                var n = this._triggerArray.length;
                if (n > 0) {
                    for (var i = 0; i < n; i++) {
                        var a = this._triggerArray[i];
                        var l = h.getSelectorFromElement(a);
                        if (l !== null) {
                            var d = b([].slice.call(document.querySelectorAll(l)));
                            if (!d.hasClass(re)) {
                                b(a).addClass(ae).attr("aria-expanded", false);
                            }
                        }
                    }
                }
                this.setTransitioning(true);
                var s = function t() {
                    e.setTransitioning(false);
                    b(e._element).removeClass(ie).addClass(ne).trigger(ee);
                };
                this._element.style[r] = "";
                var m = h.getTransitionDurationFromElement(this._element);
                b(this._element).one(h.TRANSITION_END, s).emulateTransitionEnd(m);
            };
            t.setTransitioning = function t(e) {
                this._isTransitioning = e;
            };
            t.dispose = function t() {
                b.removeData(this._element, Qt);
                this._config = null;
                this._parent = null;
                this._element = null;
                this._triggerArray = null;
                this._isTransitioning = null;
            };
            t._getConfig = function t(e) {
                e = l(l({}, Kt), e);
                e.toggle = Boolean(e.toggle);
                h.typeCheckConfig(Ut, e, Gt);
                return e;
            };
            t._getDimension = function t() {
                var e = b(this._element).hasClass(le);
                return e ? le : de;
            };
            t._getParent = function t() {
                var o = this;
                var e;
                if (h.isElement(this._config.parent)) {
                    e = this._config.parent;
                    if (typeof this._config.parent.jquery !== "undefined") {
                        e = this._config.parent[0];
                    }
                } else {
                    e = document.querySelector(this._config.parent);
                }
                var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                var n = [].slice.call(e.querySelectorAll(r));
                b(n).each(function(t, e) {
                    o._addAriaAndCollapsedClass(m._getTargetFromElement(e), [ e ]);
                });
                return e;
            };
            t._addAriaAndCollapsedClass = function t(e, o) {
                var r = b(e).hasClass(re);
                if (o.length) {
                    b(o).toggleClass(ae, !r).attr("aria-expanded", r);
                }
            };
            m._getTargetFromElement = function t(e) {
                var o = h.getSelectorFromElement(e);
                return o ? document.querySelector(o) : null;
            };
            m._jQueryInterface = function t(r) {
                return this.each(function() {
                    var t = b(this);
                    var e = t.data(Qt);
                    var o = l(l(l({}, Kt), t.data()), typeof r === "object" && r ? r : {});
                    if (!e && o.toggle && typeof r === "string" && /show|hide/.test(r)) {
                        o.toggle = false;
                    }
                    if (!e) {
                        e = new m(this, o);
                        t.data(Qt, e);
                    }
                    if (typeof r === "string") {
                        if (typeof e[r] === "undefined") {
                            throw new TypeError('No method named "' + r + '"');
                        }
                        e[r]();
                    }
                });
            };
            i(m, null, [ {
                key: "VERSION",
                get: function t() {
                    return $t;
                }
            }, {
                key: "Default",
                get: function t() {
                    return Kt;
                }
            } ]);
            return m;
        }();
        b(document).on(oe, me, function(t) {
            if (t.currentTarget.tagName === "A") {
                t.preventDefault();
            }
            var r = b(this);
            var e = h.getSelectorFromElement(this);
            var o = [].slice.call(document.querySelectorAll(e));
            b(o).each(function() {
                var t = b(this);
                var e = t.data(Qt);
                var o = e ? "toggle" : r.data();
                ce._jQueryInterface.call(t, o);
            });
        }), b.fn[Ut] = ce._jQueryInterface, b.fn[Ut].Constructor = ce, b.fn[Ut].noConflict = function() {
            b.fn[Ut] = Yt;
            return ce._jQueryInterface;
        };
        var pe = "dropdown", fe = "4.5.0", ge = "bs.dropdown", ue = "." + ge, be = ".data-api", he = b.fn[pe], xe = 27, ve = 32, we = 9, ye = 38, ke = 40, _e = 3, Ee = new RegExp(ye + "|" + ke + "|" + xe), Te = "hide" + ue, Ce = "hidden" + ue, je = "show" + ue, Se = "shown" + ue, ze = "click" + ue, Ne = "click" + ue + be, Ae = "keydown" + ue + be, De = "keyup" + ue + be, Le = "disabled", Oe = "show", Ie = "dropup", Me = "dropright", qe = "dropleft", Pe = "dropdown-menu-right", He = "position-static", Re = '[data-toggle="dropdown"]', Be = ".dropdown form", Fe = ".dropdown-menu", We = ".navbar-nav", Ue = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", $e = "top-start", Qe = "top-end", Xe = "bottom-start", Ve = "bottom-end", Ye = "right-start", Ke = "left-start", Ge = {
            offset: 0,
            flip: true,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        }, Je = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        }, Ze = function() {
            function m(t, e) {
                this._element = t;
                this._popper = null;
                this._config = this._getConfig(e);
                this._menu = this._getMenuElement();
                this._inNavbar = this._detectNavbar();
                this._addEventListeners();
            }
            var t = m.prototype;
            t.toggle = function t() {
                if (this._element.disabled || b(this._element).hasClass(Le)) {
                    return;
                }
                var e = b(this._menu).hasClass(Oe);
                m._clearMenus();
                if (e) {
                    return;
                }
                this.show(true);
            };
            t.show = function t(e) {
                if (e === void 0) {
                    e = false;
                }
                if (this._element.disabled || b(this._element).hasClass(Le) || b(this._menu).hasClass(Oe)) {
                    return;
                }
                var o = {
                    relatedTarget: this._element
                };
                var r = b.Event(je, o);
                var n = m._getParentFromElement(this._element);
                b(n).trigger(r);
                if (r.isDefaultPrevented()) {
                    return;
                }
                if (!this._inNavbar && e) {
                    if (typeof p === "undefined") {
                        throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                    }
                    var i = this._element;
                    if (this._config.reference === "parent") {
                        i = n;
                    } else if (h.isElement(this._config.reference)) {
                        i = this._config.reference;
                        if (typeof this._config.reference.jquery !== "undefined") {
                            i = this._config.reference[0];
                        }
                    }
                    if (this._config.boundary !== "scrollParent") {
                        b(n).addClass(He);
                    }
                    this._popper = new p(i, this._menu, this._getPopperConfig());
                }
                if ("ontouchstart" in document.documentElement && b(n).closest(We).length === 0) {
                    b(document.body).children().on("mouseover", null, b.noop);
                }
                this._element.focus();
                this._element.setAttribute("aria-expanded", true);
                b(this._menu).toggleClass(Oe);
                b(n).toggleClass(Oe).trigger(b.Event(Se, o));
            };
            t.hide = function t() {
                if (this._element.disabled || b(this._element).hasClass(Le) || !b(this._menu).hasClass(Oe)) {
                    return;
                }
                var e = {
                    relatedTarget: this._element
                };
                var o = b.Event(Te, e);
                var r = m._getParentFromElement(this._element);
                b(r).trigger(o);
                if (o.isDefaultPrevented()) {
                    return;
                }
                if (this._popper) {
                    this._popper.destroy();
                }
                b(this._menu).toggleClass(Oe);
                b(r).toggleClass(Oe).trigger(b.Event(Ce, e));
            };
            t.dispose = function t() {
                b.removeData(this._element, ge);
                b(this._element).off(ue);
                this._element = null;
                this._menu = null;
                if (this._popper !== null) {
                    this._popper.destroy();
                    this._popper = null;
                }
            };
            t.update = function t() {
                this._inNavbar = this._detectNavbar();
                if (this._popper !== null) {
                    this._popper.scheduleUpdate();
                }
            };
            t._addEventListeners = function t() {
                var e = this;
                b(this._element).on(ze, function(t) {
                    t.preventDefault();
                    t.stopPropagation();
                    e.toggle();
                });
            };
            t._getConfig = function t(e) {
                e = l(l(l({}, this.constructor.Default), b(this._element).data()), e);
                h.typeCheckConfig(pe, e, this.constructor.DefaultType);
                return e;
            };
            t._getMenuElement = function t() {
                if (!this._menu) {
                    var e = m._getParentFromElement(this._element);
                    if (e) {
                        this._menu = e.querySelector(Fe);
                    }
                }
                return this._menu;
            };
            t._getPlacement = function t() {
                var e = b(this._element.parentNode);
                var o = Xe;
                if (e.hasClass(Ie)) {
                    o = b(this._menu).hasClass(Pe) ? Qe : $e;
                } else if (e.hasClass(Me)) {
                    o = Ye;
                } else if (e.hasClass(qe)) {
                    o = Ke;
                } else if (b(this._menu).hasClass(Pe)) {
                    o = Ve;
                }
                return o;
            };
            t._detectNavbar = function t() {
                return b(this._element).closest(".navbar").length > 0;
            };
            t._getOffset = function t() {
                var e = this;
                var o = {};
                if (typeof this._config.offset === "function") {
                    o.fn = function(t) {
                        t.offsets = l(l({}, t.offsets), e._config.offset(t.offsets, e._element) || {});
                        return t;
                    };
                } else {
                    o.offset = this._config.offset;
                }
                return o;
            };
            t._getPopperConfig = function t() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                if (this._config.display === "static") {
                    e.modifiers.applyStyle = {
                        enabled: false
                    };
                }
                return l(l({}, e), this._config.popperConfig);
            };
            m._jQueryInterface = function t(o) {
                return this.each(function() {
                    var t = b(this).data(ge);
                    var e = typeof o === "object" ? o : null;
                    if (!t) {
                        t = new m(this, e);
                        b(this).data(ge, t);
                    }
                    if (typeof o === "string") {
                        if (typeof t[o] === "undefined") {
                            throw new TypeError('No method named "' + o + '"');
                        }
                        t[o]();
                    }
                });
            };
            m._clearMenus = function t(e) {
                if (e && (e.which === _e || e.type === "keyup" && e.which !== we)) {
                    return;
                }
                var o = [].slice.call(document.querySelectorAll(Re));
                for (var r = 0, n = o.length; r < n; r++) {
                    var i = m._getParentFromElement(o[r]);
                    var a = b(o[r]).data(ge);
                    var l = {
                        relatedTarget: o[r]
                    };
                    if (e && e.type === "click") {
                        l.clickEvent = e;
                    }
                    if (!a) {
                        continue;
                    }
                    var d = a._menu;
                    if (!b(i).hasClass(Oe)) {
                        continue;
                    }
                    if (e && (e.type === "click" && /input|textarea/i.test(e.target.tagName) || e.type === "keyup" && e.which === we) && b.contains(i, e.target)) {
                        continue;
                    }
                    var s = b.Event(Te, l);
                    b(i).trigger(s);
                    if (s.isDefaultPrevented()) {
                        continue;
                    }
                    if ("ontouchstart" in document.documentElement) {
                        b(document.body).children().off("mouseover", null, b.noop);
                    }
                    o[r].setAttribute("aria-expanded", "false");
                    if (a._popper) {
                        a._popper.destroy();
                    }
                    b(d).removeClass(Oe);
                    b(i).removeClass(Oe).trigger(b.Event(Ce, l));
                }
            };
            m._getParentFromElement = function t(e) {
                var o;
                var r = h.getSelectorFromElement(e);
                if (r) {
                    o = document.querySelector(r);
                }
                return o || e.parentNode;
            };
            m._dataApiKeydownHandler = function t(e) {
                if (/input|textarea/i.test(e.target.tagName) ? e.which === ve || e.which !== xe && (e.which !== ke && e.which !== ye || b(e.target).closest(Fe).length) : !Ee.test(e.which)) {
                    return;
                }
                if (this.disabled || b(this).hasClass(Le)) {
                    return;
                }
                var o = m._getParentFromElement(this);
                var r = b(o).hasClass(Oe);
                if (!r && e.which === xe) {
                    return;
                }
                e.preventDefault();
                e.stopPropagation();
                if (!r || r && (e.which === xe || e.which === ve)) {
                    if (e.which === xe) {
                        b(o.querySelector(Re)).trigger("focus");
                    }
                    b(this).trigger("click");
                    return;
                }
                var n = [].slice.call(o.querySelectorAll(Ue)).filter(function(t) {
                    return b(t).is(":visible");
                });
                if (n.length === 0) {
                    return;
                }
                var i = n.indexOf(e.target);
                if (e.which === ye && i > 0) {
                    i--;
                }
                if (e.which === ke && i < n.length - 1) {
                    i++;
                }
                if (i < 0) {
                    i = 0;
                }
                n[i].focus();
            };
            i(m, null, [ {
                key: "VERSION",
                get: function t() {
                    return fe;
                }
            }, {
                key: "Default",
                get: function t() {
                    return Ge;
                }
            }, {
                key: "DefaultType",
                get: function t() {
                    return Je;
                }
            } ]);
            return m;
        }();
        b(document).on(Ae, Re, Ze._dataApiKeydownHandler).on(Ae, Fe, Ze._dataApiKeydownHandler).on(Ne + " " + De, Ze._clearMenus).on(Ne, Re, function(t) {
            t.preventDefault();
            t.stopPropagation();
            Ze._jQueryInterface.call(b(this), "toggle");
        }).on(Ne, Be, function(t) {
            t.stopPropagation();
        }), b.fn[pe] = Ze._jQueryInterface, b.fn[pe].Constructor = Ze, b.fn[pe].noConflict = function() {
            b.fn[pe] = he;
            return Ze._jQueryInterface;
        };
        var to = "modal", eo = "4.5.0", oo = "bs.modal", ro = "." + oo, no = ".data-api", io = b.fn[to], ao = 27, lo = {
            backdrop: true,
            keyboard: true,
            focus: true,
            show: true
        }, so = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, mo = "hide" + ro, co = "hidePrevented" + ro, po = "hidden" + ro, fo = "show" + ro, go = "shown" + ro, uo = "focusin" + ro, bo = "resize" + ro, ho = "click.dismiss" + ro, xo = "keydown.dismiss" + ro, vo = "mouseup.dismiss" + ro, wo = "mousedown.dismiss" + ro, yo = "click" + ro + no, ko = "modal-dialog-scrollable", _o = "modal-scrollbar-measure", Eo = "modal-backdrop", To = "modal-open", Co = "fade", jo = "show", So = "modal-static", zo = ".modal-dialog", No = ".modal-body", Ao = '[data-toggle="modal"]', Do = '[data-dismiss="modal"]', Lo = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Oo = ".sticky-top", Io = function() {
            function n(t, e) {
                this._config = this._getConfig(e);
                this._element = t;
                this._dialog = t.querySelector(zo);
                this._backdrop = null;
                this._isShown = false;
                this._isBodyOverflowing = false;
                this._ignoreBackdropClick = false;
                this._isTransitioning = false;
                this._scrollbarWidth = 0;
            }
            var t = n.prototype;
            t.toggle = function t(e) {
                return this._isShown ? this.hide() : this.show(e);
            };
            t.show = function t(e) {
                var o = this;
                if (this._isShown || this._isTransitioning) {
                    return;
                }
                if (b(this._element).hasClass(Co)) {
                    this._isTransitioning = true;
                }
                var r = b.Event(fo, {
                    relatedTarget: e
                });
                b(this._element).trigger(r);
                if (this._isShown || r.isDefaultPrevented()) {
                    return;
                }
                this._isShown = true;
                this._checkScrollbar();
                this._setScrollbar();
                this._adjustDialog();
                this._setEscapeEvent();
                this._setResizeEvent();
                b(this._element).on(ho, Do, function(t) {
                    return o.hide(t);
                });
                b(this._dialog).on(wo, function() {
                    b(o._element).one(vo, function(t) {
                        if (b(t.target).is(o._element)) {
                            o._ignoreBackdropClick = true;
                        }
                    });
                });
                this._showBackdrop(function() {
                    return o._showElement(e);
                });
            };
            t.hide = function t(e) {
                var o = this;
                if (e) {
                    e.preventDefault();
                }
                if (!this._isShown || this._isTransitioning) {
                    return;
                }
                var r = b.Event(mo);
                b(this._element).trigger(r);
                if (!this._isShown || r.isDefaultPrevented()) {
                    return;
                }
                this._isShown = false;
                var n = b(this._element).hasClass(Co);
                if (n) {
                    this._isTransitioning = true;
                }
                this._setEscapeEvent();
                this._setResizeEvent();
                b(document).off(uo);
                b(this._element).removeClass(jo);
                b(this._element).off(ho);
                b(this._dialog).off(wo);
                if (n) {
                    var i = h.getTransitionDurationFromElement(this._element);
                    b(this._element).one(h.TRANSITION_END, function(t) {
                        return o._hideModal(t);
                    }).emulateTransitionEnd(i);
                } else {
                    this._hideModal();
                }
            };
            t.dispose = function t() {
                [ window, this._element, this._dialog ].forEach(function(t) {
                    return b(t).off(ro);
                });
                b(document).off(uo);
                b.removeData(this._element, oo);
                this._config = null;
                this._element = null;
                this._dialog = null;
                this._backdrop = null;
                this._isShown = null;
                this._isBodyOverflowing = null;
                this._ignoreBackdropClick = null;
                this._isTransitioning = null;
                this._scrollbarWidth = null;
            };
            t.handleUpdate = function t() {
                this._adjustDialog();
            };
            t._getConfig = function t(e) {
                e = l(l({}, lo), e);
                h.typeCheckConfig(to, e, so);
                return e;
            };
            t._triggerBackdropTransition = function t() {
                var e = this;
                if (this._config.backdrop === "static") {
                    var o = b.Event(co);
                    b(this._element).trigger(o);
                    if (o.defaultPrevented) {
                        return;
                    }
                    this._element.classList.add(So);
                    var r = h.getTransitionDurationFromElement(this._element);
                    b(this._element).one(h.TRANSITION_END, function() {
                        e._element.classList.remove(So);
                    }).emulateTransitionEnd(r);
                    this._element.focus();
                } else {
                    this.hide();
                }
            };
            t._showElement = function t(e) {
                var o = this;
                var r = b(this._element).hasClass(Co);
                var n = this._dialog ? this._dialog.querySelector(No) : null;
                if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
                    document.body.appendChild(this._element);
                }
                this._element.style.display = "block";
                this._element.removeAttribute("aria-hidden");
                this._element.setAttribute("aria-modal", true);
                if (b(this._dialog).hasClass(ko) && n) {
                    n.scrollTop = 0;
                } else {
                    this._element.scrollTop = 0;
                }
                if (r) {
                    h.reflow(this._element);
                }
                b(this._element).addClass(jo);
                if (this._config.focus) {
                    this._enforceFocus();
                }
                var i = b.Event(go, {
                    relatedTarget: e
                });
                var a = function t() {
                    if (o._config.focus) {
                        o._element.focus();
                    }
                    o._isTransitioning = false;
                    b(o._element).trigger(i);
                };
                if (r) {
                    var l = h.getTransitionDurationFromElement(this._dialog);
                    b(this._dialog).one(h.TRANSITION_END, a).emulateTransitionEnd(l);
                } else {
                    a();
                }
            };
            t._enforceFocus = function t() {
                var e = this;
                b(document).off(uo).on(uo, function(t) {
                    if (document !== t.target && e._element !== t.target && b(e._element).has(t.target).length === 0) {
                        e._element.focus();
                    }
                });
            };
            t._setEscapeEvent = function t() {
                var e = this;
                if (this._isShown) {
                    b(this._element).on(xo, function(t) {
                        if (e._config.keyboard && t.which === ao) {
                            t.preventDefault();
                            e.hide();
                        } else if (!e._config.keyboard && t.which === ao) {
                            e._triggerBackdropTransition();
                        }
                    });
                } else if (!this._isShown) {
                    b(this._element).off(xo);
                }
            };
            t._setResizeEvent = function t() {
                var e = this;
                if (this._isShown) {
                    b(window).on(bo, function(t) {
                        return e.handleUpdate(t);
                    });
                } else {
                    b(window).off(bo);
                }
            };
            t._hideModal = function t() {
                var e = this;
                this._element.style.display = "none";
                this._element.setAttribute("aria-hidden", true);
                this._element.removeAttribute("aria-modal");
                this._isTransitioning = false;
                this._showBackdrop(function() {
                    b(document.body).removeClass(To);
                    e._resetAdjustments();
                    e._resetScrollbar();
                    b(e._element).trigger(po);
                });
            };
            t._removeBackdrop = function t() {
                if (this._backdrop) {
                    b(this._backdrop).remove();
                    this._backdrop = null;
                }
            };
            t._showBackdrop = function t(e) {
                var o = this;
                var r = b(this._element).hasClass(Co) ? Co : "";
                if (this._isShown && this._config.backdrop) {
                    this._backdrop = document.createElement("div");
                    this._backdrop.className = Eo;
                    if (r) {
                        this._backdrop.classList.add(r);
                    }
                    b(this._backdrop).appendTo(document.body);
                    b(this._element).on(ho, function(t) {
                        if (o._ignoreBackdropClick) {
                            o._ignoreBackdropClick = false;
                            return;
                        }
                        if (t.target !== t.currentTarget) {
                            return;
                        }
                        o._triggerBackdropTransition();
                    });
                    if (r) {
                        h.reflow(this._backdrop);
                    }
                    b(this._backdrop).addClass(jo);
                    if (!e) {
                        return;
                    }
                    if (!r) {
                        e();
                        return;
                    }
                    var n = h.getTransitionDurationFromElement(this._backdrop);
                    b(this._backdrop).one(h.TRANSITION_END, e).emulateTransitionEnd(n);
                } else if (!this._isShown && this._backdrop) {
                    b(this._backdrop).removeClass(jo);
                    var i = function t() {
                        o._removeBackdrop();
                        if (e) {
                            e();
                        }
                    };
                    if (b(this._element).hasClass(Co)) {
                        var a = h.getTransitionDurationFromElement(this._backdrop);
                        b(this._backdrop).one(h.TRANSITION_END, i).emulateTransitionEnd(a);
                    } else {
                        i();
                    }
                } else if (e) {
                    e();
                }
            };
            t._adjustDialog = function t() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                if (!this._isBodyOverflowing && e) {
                    this._element.style.paddingLeft = this._scrollbarWidth + "px";
                }
                if (this._isBodyOverflowing && !e) {
                    this._element.style.paddingRight = this._scrollbarWidth + "px";
                }
            };
            t._resetAdjustments = function t() {
                this._element.style.paddingLeft = "";
                this._element.style.paddingRight = "";
            };
            t._checkScrollbar = function t() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth;
                this._scrollbarWidth = this._getScrollbarWidth();
            };
            t._setScrollbar = function t() {
                var n = this;
                if (this._isBodyOverflowing) {
                    var e = [].slice.call(document.querySelectorAll(Lo));
                    var o = [].slice.call(document.querySelectorAll(Oo));
                    b(e).each(function(t, e) {
                        var o = e.style.paddingRight;
                        var r = b(e).css("padding-right");
                        b(e).data("padding-right", o).css("padding-right", parseFloat(r) + n._scrollbarWidth + "px");
                    });
                    b(o).each(function(t, e) {
                        var o = e.style.marginRight;
                        var r = b(e).css("margin-right");
                        b(e).data("margin-right", o).css("margin-right", parseFloat(r) - n._scrollbarWidth + "px");
                    });
                    var r = document.body.style.paddingRight;
                    var i = b(document.body).css("padding-right");
                    b(document.body).data("padding-right", r).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
                }
                b(document.body).addClass(To);
            };
            t._resetScrollbar = function t() {
                var e = [].slice.call(document.querySelectorAll(Lo));
                b(e).each(function(t, e) {
                    var o = b(e).data("padding-right");
                    b(e).removeData("padding-right");
                    e.style.paddingRight = o ? o : "";
                });
                var o = [].slice.call(document.querySelectorAll("" + Oo));
                b(o).each(function(t, e) {
                    var o = b(e).data("margin-right");
                    if (typeof o !== "undefined") {
                        b(e).css("margin-right", o).removeData("margin-right");
                    }
                });
                var r = b(document.body).data("padding-right");
                b(document.body).removeData("padding-right");
                document.body.style.paddingRight = r ? r : "";
            };
            t._getScrollbarWidth = function t() {
                var e = document.createElement("div");
                e.className = _o;
                document.body.appendChild(e);
                var o = e.getBoundingClientRect().width - e.clientWidth;
                document.body.removeChild(e);
                return o;
            };
            n._jQueryInterface = function t(o, r) {
                return this.each(function() {
                    var t = b(this).data(oo);
                    var e = l(l(l({}, lo), b(this).data()), typeof o === "object" && o ? o : {});
                    if (!t) {
                        t = new n(this, e);
                        b(this).data(oo, t);
                    }
                    if (typeof o === "string") {
                        if (typeof t[o] === "undefined") {
                            throw new TypeError('No method named "' + o + '"');
                        }
                        t[o](r);
                    } else if (e.show) {
                        t.show(r);
                    }
                });
            };
            i(n, null, [ {
                key: "VERSION",
                get: function t() {
                    return eo;
                }
            }, {
                key: "Default",
                get: function t() {
                    return lo;
                }
            } ]);
            return n;
        }();
        b(document).on(yo, Ao, function(t) {
            var e = this;
            var o;
            var r = h.getSelectorFromElement(this);
            if (r) {
                o = document.querySelector(r);
            }
            var n = b(o).data(oo) ? "toggle" : l(l({}, b(o).data()), b(this).data());
            if (this.tagName === "A" || this.tagName === "AREA") {
                t.preventDefault();
            }
            var i = b(o).one(fo, function(t) {
                if (t.isDefaultPrevented()) {
                    return;
                }
                i.one(po, function() {
                    if (b(e).is(":visible")) {
                        e.focus();
                    }
                });
            });
            Io._jQueryInterface.call(b(o), n, this);
        }), b.fn[to] = Io._jQueryInterface, b.fn[to].Constructor = Io, b.fn[to].noConflict = function() {
            b.fn[to] = io;
            return Io._jQueryInterface;
        };
        var Mo = [ "background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href" ], qo, Po = {
            "*": [ "class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i ],
            a: [ "target", "href", "title", "rel" ],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: [ "src", "srcset", "alt", "title", "width", "height" ],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }, Ho = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi, Ro = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
        function Bo(t, e) {
            var o = t.nodeName.toLowerCase();
            if (e.indexOf(o) !== -1) {
                if (Mo.indexOf(o) !== -1) {
                    return Boolean(t.nodeValue.match(Ho) || t.nodeValue.match(Ro));
                }
                return true;
            }
            var r = e.filter(function(t) {
                return t instanceof RegExp;
            });
            for (var n = 0, i = r.length; n < i; n++) {
                if (o.match(r[n])) {
                    return true;
                }
            }
            return false;
        }
        function Fo(t, l, e) {
            if (t.length === 0) {
                return t;
            }
            if (e && typeof e === "function") {
                return e(t);
            }
            var o = new window.DOMParser();
            var r = o.parseFromString(t, "text/html");
            var d = Object.keys(l);
            var s = [].slice.call(r.body.querySelectorAll("*"));
            var n = function t(e, o) {
                var r = s[e];
                var n = r.nodeName.toLowerCase();
                if (d.indexOf(r.nodeName.toLowerCase()) === -1) {
                    r.parentNode.removeChild(r);
                    return "continue";
                }
                var i = [].slice.call(r.attributes);
                var a = [].concat(l["*"] || [], l[n] || []);
                i.forEach(function(t) {
                    if (!Bo(t, a)) {
                        r.removeAttribute(t.nodeName);
                    }
                });
            };
            for (var i = 0, a = s.length; i < a; i++) {
                var m = n(i);
                if (m === "continue") continue;
            }
            return r.body.innerHTML;
        }
        var Wo = "tooltip", Uo = "4.5.0", $o = "bs.tooltip", Qo = "." + $o, Xo = b.fn[Wo], Vo = "bs-tooltip", Yo = new RegExp("(^|\\s)" + Vo + "\\S+", "g"), Ko = [ "sanitize", "whiteList", "sanitizeFn" ], Go = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        }, Jo = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }, Zo = {
            animation: true,
            template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: false,
            selector: false,
            placement: "top",
            offset: 0,
            container: false,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: true,
            sanitizeFn: null,
            whiteList: Po,
            popperConfig: null
        }, tr = "show", er = "out", or = {
            HIDE: "hide" + Qo,
            HIDDEN: "hidden" + Qo,
            SHOW: "show" + Qo,
            SHOWN: "shown" + Qo,
            INSERTED: "inserted" + Qo,
            CLICK: "click" + Qo,
            FOCUSIN: "focusin" + Qo,
            FOCUSOUT: "focusout" + Qo,
            MOUSEENTER: "mouseenter" + Qo,
            MOUSELEAVE: "mouseleave" + Qo
        }, rr = "fade", nr = "show", ir = ".tooltip-inner", ar = ".arrow", lr = "hover", dr = "focus", sr = "click", mr = "manual", cr = function() {
            function r(t, e) {
                if (typeof p === "undefined") {
                    throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                }
                this._isEnabled = true;
                this._timeout = 0;
                this._hoverState = "";
                this._activeTrigger = {};
                this._popper = null;
                this.element = t;
                this.config = this._getConfig(e);
                this.tip = null;
                this._setListeners();
            }
            var t = r.prototype;
            t.enable = function t() {
                this._isEnabled = true;
            };
            t.disable = function t() {
                this._isEnabled = false;
            };
            t.toggleEnabled = function t() {
                this._isEnabled = !this._isEnabled;
            };
            t.toggle = function t(e) {
                if (!this._isEnabled) {
                    return;
                }
                if (e) {
                    var o = this.constructor.DATA_KEY;
                    var r = b(e.currentTarget).data(o);
                    if (!r) {
                        r = new this.constructor(e.currentTarget, this._getDelegateConfig());
                        b(e.currentTarget).data(o, r);
                    }
                    r._activeTrigger.click = !r._activeTrigger.click;
                    if (r._isWithActiveTrigger()) {
                        r._enter(null, r);
                    } else {
                        r._leave(null, r);
                    }
                } else {
                    if (b(this.getTipElement()).hasClass(nr)) {
                        this._leave(null, this);
                        return;
                    }
                    this._enter(null, this);
                }
            };
            t.dispose = function t() {
                clearTimeout(this._timeout);
                b.removeData(this.element, this.constructor.DATA_KEY);
                b(this.element).off(this.constructor.EVENT_KEY);
                b(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler);
                if (this.tip) {
                    b(this.tip).remove();
                }
                this._isEnabled = null;
                this._timeout = null;
                this._hoverState = null;
                this._activeTrigger = null;
                if (this._popper) {
                    this._popper.destroy();
                }
                this._popper = null;
                this.element = null;
                this.config = null;
                this.tip = null;
            };
            t.show = function t() {
                var o = this;
                if (b(this.element).css("display") === "none") {
                    throw new Error("Please use show on visible elements");
                }
                var e = b.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    b(this.element).trigger(e);
                    var r = h.findShadowRoot(this.element);
                    var n = b.contains(r !== null ? r : this.element.ownerDocument.documentElement, this.element);
                    if (e.isDefaultPrevented() || !n) {
                        return;
                    }
                    var i = this.getTipElement();
                    var a = h.getUID(this.constructor.NAME);
                    i.setAttribute("id", a);
                    this.element.setAttribute("aria-describedby", a);
                    this.setContent();
                    if (this.config.animation) {
                        b(i).addClass(rr);
                    }
                    var l = typeof this.config.placement === "function" ? this.config.placement.call(this, i, this.element) : this.config.placement;
                    var d = this._getAttachment(l);
                    this.addAttachmentClass(d);
                    var s = this._getContainer();
                    b(i).data(this.constructor.DATA_KEY, this);
                    if (!b.contains(this.element.ownerDocument.documentElement, this.tip)) {
                        b(i).appendTo(s);
                    }
                    b(this.element).trigger(this.constructor.Event.INSERTED);
                    this._popper = new p(this.element, i, this._getPopperConfig(d));
                    b(i).addClass(nr);
                    if ("ontouchstart" in document.documentElement) {
                        b(document.body).children().on("mouseover", null, b.noop);
                    }
                    var m = function t() {
                        if (o.config.animation) {
                            o._fixTransition();
                        }
                        var e = o._hoverState;
                        o._hoverState = null;
                        b(o.element).trigger(o.constructor.Event.SHOWN);
                        if (e === er) {
                            o._leave(null, o);
                        }
                    };
                    if (b(this.tip).hasClass(rr)) {
                        var c = h.getTransitionDurationFromElement(this.tip);
                        b(this.tip).one(h.TRANSITION_END, m).emulateTransitionEnd(c);
                    } else {
                        m();
                    }
                }
            };
            t.hide = function t(e) {
                var o = this;
                var r = this.getTipElement();
                var n = b.Event(this.constructor.Event.HIDE);
                var i = function t() {
                    if (o._hoverState !== tr && r.parentNode) {
                        r.parentNode.removeChild(r);
                    }
                    o._cleanTipClass();
                    o.element.removeAttribute("aria-describedby");
                    b(o.element).trigger(o.constructor.Event.HIDDEN);
                    if (o._popper !== null) {
                        o._popper.destroy();
                    }
                    if (e) {
                        e();
                    }
                };
                b(this.element).trigger(n);
                if (n.isDefaultPrevented()) {
                    return;
                }
                b(r).removeClass(nr);
                if ("ontouchstart" in document.documentElement) {
                    b(document.body).children().off("mouseover", null, b.noop);
                }
                this._activeTrigger[sr] = false;
                this._activeTrigger[dr] = false;
                this._activeTrigger[lr] = false;
                if (b(this.tip).hasClass(rr)) {
                    var a = h.getTransitionDurationFromElement(r);
                    b(r).one(h.TRANSITION_END, i).emulateTransitionEnd(a);
                } else {
                    i();
                }
                this._hoverState = "";
            };
            t.update = function t() {
                if (this._popper !== null) {
                    this._popper.scheduleUpdate();
                }
            };
            t.isWithContent = function t() {
                return Boolean(this.getTitle());
            };
            t.addAttachmentClass = function t(e) {
                b(this.getTipElement()).addClass(Vo + "-" + e);
            };
            t.getTipElement = function t() {
                this.tip = this.tip || b(this.config.template)[0];
                return this.tip;
            };
            t.setContent = function t() {
                var e = this.getTipElement();
                this.setElementContent(b(e.querySelectorAll(ir)), this.getTitle());
                b(e).removeClass(rr + " " + nr);
            };
            t.setElementContent = function t(e, o) {
                if (typeof o === "object" && (o.nodeType || o.jquery)) {
                    if (this.config.html) {
                        if (!b(o).parent().is(e)) {
                            e.empty().append(o);
                        }
                    } else {
                        e.text(b(o).text());
                    }
                    return;
                }
                if (this.config.html) {
                    if (this.config.sanitize) {
                        o = Fo(o, this.config.whiteList, this.config.sanitizeFn);
                    }
                    e.html(o);
                } else {
                    e.text(o);
                }
            };
            t.getTitle = function t() {
                var e = this.element.getAttribute("data-original-title");
                if (!e) {
                    e = typeof this.config.title === "function" ? this.config.title.call(this.element) : this.config.title;
                }
                return e;
            };
            t._getPopperConfig = function t(e) {
                var o = this;
                var r = {
                    placement: e,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ar
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function t(e) {
                        if (e.originalPlacement !== e.placement) {
                            o._handlePopperPlacementChange(e);
                        }
                    },
                    onUpdate: function t(e) {
                        return o._handlePopperPlacementChange(e);
                    }
                };
                return l(l({}, r), this.config.popperConfig);
            };
            t._getOffset = function t() {
                var e = this;
                var o = {};
                if (typeof this.config.offset === "function") {
                    o.fn = function(t) {
                        t.offsets = l(l({}, t.offsets), e.config.offset(t.offsets, e.element) || {});
                        return t;
                    };
                } else {
                    o.offset = this.config.offset;
                }
                return o;
            };
            t._getContainer = function t() {
                if (this.config.container === false) {
                    return document.body;
                }
                if (h.isElement(this.config.container)) {
                    return b(this.config.container);
                }
                return b(document).find(this.config.container);
            };
            t._getAttachment = function t(e) {
                return Jo[e.toUpperCase()];
            };
            t._setListeners = function t() {
                var r = this;
                var e = this.config.trigger.split(" ");
                e.forEach(function(t) {
                    if (t === "click") {
                        b(r.element).on(r.constructor.Event.CLICK, r.config.selector, function(t) {
                            return r.toggle(t);
                        });
                    } else if (t !== mr) {
                        var e = t === lr ? r.constructor.Event.MOUSEENTER : r.constructor.Event.FOCUSIN;
                        var o = t === lr ? r.constructor.Event.MOUSELEAVE : r.constructor.Event.FOCUSOUT;
                        b(r.element).on(e, r.config.selector, function(t) {
                            return r._enter(t);
                        }).on(o, r.config.selector, function(t) {
                            return r._leave(t);
                        });
                    }
                });
                this._hideModalHandler = function() {
                    if (r.element) {
                        r.hide();
                    }
                };
                b(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler);
                if (this.config.selector) {
                    this.config = l(l({}, this.config), {}, {
                        trigger: "manual",
                        selector: ""
                    });
                } else {
                    this._fixTitle();
                }
            };
            t._fixTitle = function t() {
                var e = typeof this.element.getAttribute("data-original-title");
                if (this.element.getAttribute("title") || e !== "string") {
                    this.element.setAttribute("data-original-title", this.element.getAttribute("title") || "");
                    this.element.setAttribute("title", "");
                }
            };
            t._enter = function t(e, o) {
                var r = this.constructor.DATA_KEY;
                o = o || b(e.currentTarget).data(r);
                if (!o) {
                    o = new this.constructor(e.currentTarget, this._getDelegateConfig());
                    b(e.currentTarget).data(r, o);
                }
                if (e) {
                    o._activeTrigger[e.type === "focusin" ? dr : lr] = true;
                }
                if (b(o.getTipElement()).hasClass(nr) || o._hoverState === tr) {
                    o._hoverState = tr;
                    return;
                }
                clearTimeout(o._timeout);
                o._hoverState = tr;
                if (!o.config.delay || !o.config.delay.show) {
                    o.show();
                    return;
                }
                o._timeout = setTimeout(function() {
                    if (o._hoverState === tr) {
                        o.show();
                    }
                }, o.config.delay.show);
            };
            t._leave = function t(e, o) {
                var r = this.constructor.DATA_KEY;
                o = o || b(e.currentTarget).data(r);
                if (!o) {
                    o = new this.constructor(e.currentTarget, this._getDelegateConfig());
                    b(e.currentTarget).data(r, o);
                }
                if (e) {
                    o._activeTrigger[e.type === "focusout" ? dr : lr] = false;
                }
                if (o._isWithActiveTrigger()) {
                    return;
                }
                clearTimeout(o._timeout);
                o._hoverState = er;
                if (!o.config.delay || !o.config.delay.hide) {
                    o.hide();
                    return;
                }
                o._timeout = setTimeout(function() {
                    if (o._hoverState === er) {
                        o.hide();
                    }
                }, o.config.delay.hide);
            };
            t._isWithActiveTrigger = function t() {
                for (var e in this._activeTrigger) {
                    if (this._activeTrigger[e]) {
                        return true;
                    }
                }
                return false;
            };
            t._getConfig = function t(e) {
                var o = b(this.element).data();
                Object.keys(o).forEach(function(t) {
                    if (Ko.indexOf(t) !== -1) {
                        delete o[t];
                    }
                });
                e = l(l(l({}, this.constructor.Default), o), typeof e === "object" && e ? e : {});
                if (typeof e.delay === "number") {
                    e.delay = {
                        show: e.delay,
                        hide: e.delay
                    };
                }
                if (typeof e.title === "number") {
                    e.title = e.title.toString();
                }
                if (typeof e.content === "number") {
                    e.content = e.content.toString();
                }
                h.typeCheckConfig(Wo, e, this.constructor.DefaultType);
                if (e.sanitize) {
                    e.template = Fo(e.template, e.whiteList, e.sanitizeFn);
                }
                return e;
            };
            t._getDelegateConfig = function t() {
                var e = {};
                if (this.config) {
                    for (var o in this.config) {
                        if (this.constructor.Default[o] !== this.config[o]) {
                            e[o] = this.config[o];
                        }
                    }
                }
                return e;
            };
            t._cleanTipClass = function t() {
                var e = b(this.getTipElement());
                var o = e.attr("class").match(Yo);
                if (o !== null && o.length) {
                    e.removeClass(o.join(""));
                }
            };
            t._handlePopperPlacementChange = function t(e) {
                this.tip = e.instance.popper;
                this._cleanTipClass();
                this.addAttachmentClass(this._getAttachment(e.placement));
            };
            t._fixTransition = function t() {
                var e = this.getTipElement();
                var o = this.config.animation;
                if (e.getAttribute("x-placement") !== null) {
                    return;
                }
                b(e).removeClass(rr);
                this.config.animation = false;
                this.hide();
                this.show();
                this.config.animation = o;
            };
            r._jQueryInterface = function t(o) {
                return this.each(function() {
                    var t = b(this).data($o);
                    var e = typeof o === "object" && o;
                    if (!t && /dispose|hide/.test(o)) {
                        return;
                    }
                    if (!t) {
                        t = new r(this, e);
                        b(this).data($o, t);
                    }
                    if (typeof o === "string") {
                        if (typeof t[o] === "undefined") {
                            throw new TypeError('No method named "' + o + '"');
                        }
                        t[o]();
                    }
                });
            };
            i(r, null, [ {
                key: "VERSION",
                get: function t() {
                    return Uo;
                }
            }, {
                key: "Default",
                get: function t() {
                    return Zo;
                }
            }, {
                key: "NAME",
                get: function t() {
                    return Wo;
                }
            }, {
                key: "DATA_KEY",
                get: function t() {
                    return $o;
                }
            }, {
                key: "Event",
                get: function t() {
                    return or;
                }
            }, {
                key: "EVENT_KEY",
                get: function t() {
                    return Qo;
                }
            }, {
                key: "DefaultType",
                get: function t() {
                    return Go;
                }
            } ]);
            return r;
        }();
        b.fn[Wo] = cr._jQueryInterface, b.fn[Wo].Constructor = cr, b.fn[Wo].noConflict = function() {
            b.fn[Wo] = Xo;
            return cr._jQueryInterface;
        };
        var pr = "popover", fr = "4.5.0", gr = "bs.popover", ur = "." + gr, br = b.fn[pr], hr = "bs-popover", xr = new RegExp("(^|\\s)" + hr + "\\S+", "g"), vr = l(l({}, cr.Default), {}, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
        }), wr = l(l({}, cr.DefaultType), {}, {
            content: "(string|element|function)"
        }), yr = "fade", kr = "show", _r = ".popover-header", Er = ".popover-body", Tr = {
            HIDE: "hide" + ur,
            HIDDEN: "hidden" + ur,
            SHOW: "show" + ur,
            SHOWN: "shown" + ur,
            INSERTED: "inserted" + ur,
            CLICK: "click" + ur,
            FOCUSIN: "focusin" + ur,
            FOCUSOUT: "focusout" + ur,
            MOUSEENTER: "mouseenter" + ur,
            MOUSELEAVE: "mouseleave" + ur
        }, Cr = function(t) {
            o(r, t);
            function r() {
                return t.apply(this, arguments) || this;
            }
            var e = r.prototype;
            e.isWithContent = function t() {
                return this.getTitle() || this._getContent();
            };
            e.addAttachmentClass = function t(e) {
                b(this.getTipElement()).addClass(hr + "-" + e);
            };
            e.getTipElement = function t() {
                this.tip = this.tip || b(this.config.template)[0];
                return this.tip;
            };
            e.setContent = function t() {
                var e = b(this.getTipElement());
                this.setElementContent(e.find(_r), this.getTitle());
                var o = this._getContent();
                if (typeof o === "function") {
                    o = o.call(this.element);
                }
                this.setElementContent(e.find(Er), o);
                e.removeClass(yr + " " + kr);
            };
            e._getContent = function t() {
                return this.element.getAttribute("data-content") || this.config.content;
            };
            e._cleanTipClass = function t() {
                var e = b(this.getTipElement());
                var o = e.attr("class").match(xr);
                if (o !== null && o.length > 0) {
                    e.removeClass(o.join(""));
                }
            };
            r._jQueryInterface = function t(o) {
                return this.each(function() {
                    var t = b(this).data(gr);
                    var e = typeof o === "object" ? o : null;
                    if (!t && /dispose|hide/.test(o)) {
                        return;
                    }
                    if (!t) {
                        t = new r(this, e);
                        b(this).data(gr, t);
                    }
                    if (typeof o === "string") {
                        if (typeof t[o] === "undefined") {
                            throw new TypeError('No method named "' + o + '"');
                        }
                        t[o]();
                    }
                });
            };
            i(r, null, [ {
                key: "VERSION",
                get: function t() {
                    return fr;
                }
            }, {
                key: "Default",
                get: function t() {
                    return vr;
                }
            }, {
                key: "NAME",
                get: function t() {
                    return pr;
                }
            }, {
                key: "DATA_KEY",
                get: function t() {
                    return gr;
                }
            }, {
                key: "Event",
                get: function t() {
                    return Tr;
                }
            }, {
                key: "EVENT_KEY",
                get: function t() {
                    return ur;
                }
            }, {
                key: "DefaultType",
                get: function t() {
                    return wr;
                }
            } ]);
            return r;
        }(cr);
        b.fn[pr] = Cr._jQueryInterface, b.fn[pr].Constructor = Cr, b.fn[pr].noConflict = function() {
            b.fn[pr] = br;
            return Cr._jQueryInterface;
        };
        var jr = "scrollspy", Sr = "4.5.0", zr = "bs.scrollspy", Nr = "." + zr, Ar = ".data-api", Dr = b.fn[jr], Lr = {
            offset: 10,
            method: "auto",
            target: ""
        }, Or = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }, Ir = "activate" + Nr, Mr = "scroll" + Nr, qr = "load" + Nr + Ar, Pr = "dropdown-item", Hr = "active", Rr = '[data-spy="scroll"]', Br = ".nav, .list-group", Fr = ".nav-link", Wr = ".nav-item", Ur = ".list-group-item", $r = ".dropdown", Qr = ".dropdown-item", Xr = ".dropdown-toggle", Vr = "offset", Yr = "position", Kr = function() {
            function r(t, e) {
                var o = this;
                this._element = t;
                this._scrollElement = t.tagName === "BODY" ? window : t;
                this._config = this._getConfig(e);
                this._selector = this._config.target + " " + Fr + "," + (this._config.target + " " + Ur + ",") + (this._config.target + " " + Qr);
                this._offsets = [];
                this._targets = [];
                this._activeTarget = null;
                this._scrollHeight = 0;
                b(this._scrollElement).on(Mr, function(t) {
                    return o._process(t);
                });
                this.refresh();
                this._process();
            }
            var t = r.prototype;
            t.refresh = function t() {
                var e = this;
                var o = this._scrollElement === this._scrollElement.window ? Vr : Yr;
                var n = this._config.method === "auto" ? o : this._config.method;
                var i = n === Yr ? this._getScrollTop() : 0;
                this._offsets = [];
                this._targets = [];
                this._scrollHeight = this._getScrollHeight();
                var r = [].slice.call(document.querySelectorAll(this._selector));
                r.map(function(t) {
                    var e;
                    var o = h.getSelectorFromElement(t);
                    if (o) {
                        e = document.querySelector(o);
                    }
                    if (e) {
                        var r = e.getBoundingClientRect();
                        if (r.width || r.height) {
                            return [ b(e)[n]().top + i, o ];
                        }
                    }
                    return null;
                }).filter(function(t) {
                    return t;
                }).sort(function(t, e) {
                    return t[0] - e[0];
                }).forEach(function(t) {
                    e._offsets.push(t[0]);
                    e._targets.push(t[1]);
                });
            };
            t.dispose = function t() {
                b.removeData(this._element, zr);
                b(this._scrollElement).off(Nr);
                this._element = null;
                this._scrollElement = null;
                this._config = null;
                this._selector = null;
                this._offsets = null;
                this._targets = null;
                this._activeTarget = null;
                this._scrollHeight = null;
            };
            t._getConfig = function t(e) {
                e = l(l({}, Lr), typeof e === "object" && e ? e : {});
                if (typeof e.target !== "string" && h.isElement(e.target)) {
                    var o = b(e.target).attr("id");
                    if (!o) {
                        o = h.getUID(jr);
                        b(e.target).attr("id", o);
                    }
                    e.target = "#" + o;
                }
                h.typeCheckConfig(jr, e, Or);
                return e;
            };
            t._getScrollTop = function t() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
            };
            t._getScrollHeight = function t() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            };
            t._getOffsetHeight = function t() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
            };
            t._process = function t() {
                var e = this._getScrollTop() + this._config.offset;
                var o = this._getScrollHeight();
                var r = this._config.offset + o - this._getOffsetHeight();
                if (this._scrollHeight !== o) {
                    this.refresh();
                }
                if (e >= r) {
                    var n = this._targets[this._targets.length - 1];
                    if (this._activeTarget !== n) {
                        this._activate(n);
                    }
                    return;
                }
                if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) {
                    this._activeTarget = null;
                    this._clear();
                    return;
                }
                for (var i = this._offsets.length; i--; ) {
                    var a = this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (typeof this._offsets[i + 1] === "undefined" || e < this._offsets[i + 1]);
                    if (a) {
                        this._activate(this._targets[i]);
                    }
                }
            };
            t._activate = function t(e) {
                this._activeTarget = e;
                this._clear();
                var o = this._selector.split(",").map(function(t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
                });
                var r = b([].slice.call(document.querySelectorAll(o.join(","))));
                if (r.hasClass(Pr)) {
                    r.closest($r).find(Xr).addClass(Hr);
                    r.addClass(Hr);
                } else {
                    r.addClass(Hr);
                    r.parents(Br).prev(Fr + ", " + Ur).addClass(Hr);
                    r.parents(Br).prev(Wr).children(Fr).addClass(Hr);
                }
                b(this._scrollElement).trigger(Ir, {
                    relatedTarget: e
                });
            };
            t._clear = function t() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                    return t.classList.contains(Hr);
                }).forEach(function(t) {
                    return t.classList.remove(Hr);
                });
            };
            r._jQueryInterface = function t(o) {
                return this.each(function() {
                    var t = b(this).data(zr);
                    var e = typeof o === "object" && o;
                    if (!t) {
                        t = new r(this, e);
                        b(this).data(zr, t);
                    }
                    if (typeof o === "string") {
                        if (typeof t[o] === "undefined") {
                            throw new TypeError('No method named "' + o + '"');
                        }
                        t[o]();
                    }
                });
            };
            i(r, null, [ {
                key: "VERSION",
                get: function t() {
                    return Sr;
                }
            }, {
                key: "Default",
                get: function t() {
                    return Lr;
                }
            } ]);
            return r;
        }();
        b(window).on(qr, function() {
            var t = [].slice.call(document.querySelectorAll(Rr));
            var e = t.length;
            for (var o = e; o--; ) {
                var r = b(t[o]);
                Kr._jQueryInterface.call(r, r.data());
            }
        }), b.fn[jr] = Kr._jQueryInterface, b.fn[jr].Constructor = Kr, b.fn[jr].noConflict = function() {
            b.fn[jr] = Dr;
            return Kr._jQueryInterface;
        };
        var Gr = "tab", Jr = "4.5.0", Zr = "bs.tab", tn = "." + Zr, en = ".data-api", on = b.fn[Gr], rn = "hide" + tn, nn = "hidden" + tn, an = "show" + tn, ln = "shown" + tn, dn = "click" + tn + en, sn = "dropdown-menu", mn = "active", cn = "disabled", pn = "fade", fn = "show", gn = ".dropdown", un = ".nav, .list-group", bn = ".active", hn = "> li > .active", xn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', vn = ".dropdown-toggle", wn = "> .dropdown-menu .active", yn = function() {
            function r(t) {
                this._element = t;
            }
            var t = r.prototype;
            t.show = function t() {
                var r = this;
                if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && b(this._element).hasClass(mn) || b(this._element).hasClass(cn)) {
                    return;
                }
                var e;
                var n;
                var o = b(this._element).closest(un)[0];
                var i = h.getSelectorFromElement(this._element);
                if (o) {
                    var a = o.nodeName === "UL" || o.nodeName === "OL" ? hn : bn;
                    n = b.makeArray(b(o).find(a));
                    n = n[n.length - 1];
                }
                var l = b.Event(rn, {
                    relatedTarget: this._element
                });
                var d = b.Event(an, {
                    relatedTarget: n
                });
                if (n) {
                    b(n).trigger(l);
                }
                b(this._element).trigger(d);
                if (d.isDefaultPrevented() || l.isDefaultPrevented()) {
                    return;
                }
                if (i) {
                    e = document.querySelector(i);
                }
                this._activate(this._element, o);
                var s = function t() {
                    var e = b.Event(nn, {
                        relatedTarget: r._element
                    });
                    var o = b.Event(ln, {
                        relatedTarget: n
                    });
                    b(n).trigger(e);
                    b(r._element).trigger(o);
                };
                if (e) {
                    this._activate(e, e.parentNode, s);
                } else {
                    s();
                }
            };
            t.dispose = function t() {
                b.removeData(this._element, Zr);
                this._element = null;
            };
            t._activate = function t(e, o, r) {
                var n = this;
                var i = o && (o.nodeName === "UL" || o.nodeName === "OL") ? b(o).find(hn) : b(o).children(bn);
                var a = i[0];
                var l = r && a && b(a).hasClass(pn);
                var d = function t() {
                    return n._transitionComplete(e, a, r);
                };
                if (a && l) {
                    var s = h.getTransitionDurationFromElement(a);
                    b(a).removeClass(fn).one(h.TRANSITION_END, d).emulateTransitionEnd(s);
                } else {
                    d();
                }
            };
            t._transitionComplete = function t(e, o, r) {
                if (o) {
                    b(o).removeClass(mn);
                    var n = b(o.parentNode).find(wn)[0];
                    if (n) {
                        b(n).removeClass(mn);
                    }
                    if (o.getAttribute("role") === "tab") {
                        o.setAttribute("aria-selected", false);
                    }
                }
                b(e).addClass(mn);
                if (e.getAttribute("role") === "tab") {
                    e.setAttribute("aria-selected", true);
                }
                h.reflow(e);
                if (e.classList.contains(pn)) {
                    e.classList.add(fn);
                }
                if (e.parentNode && b(e.parentNode).hasClass(sn)) {
                    var i = b(e).closest(gn)[0];
                    if (i) {
                        var a = [].slice.call(i.querySelectorAll(vn));
                        b(a).addClass(mn);
                    }
                    e.setAttribute("aria-expanded", true);
                }
                if (r) {
                    r();
                }
            };
            r._jQueryInterface = function t(o) {
                return this.each(function() {
                    var t = b(this);
                    var e = t.data(Zr);
                    if (!e) {
                        e = new r(this);
                        t.data(Zr, e);
                    }
                    if (typeof o === "string") {
                        if (typeof e[o] === "undefined") {
                            throw new TypeError('No method named "' + o + '"');
                        }
                        e[o]();
                    }
                });
            };
            i(r, null, [ {
                key: "VERSION",
                get: function t() {
                    return Jr;
                }
            } ]);
            return r;
        }();
        b(document).on(dn, xn, function(t) {
            t.preventDefault();
            yn._jQueryInterface.call(b(this), "show");
        }), b.fn[Gr] = yn._jQueryInterface, b.fn[Gr].Constructor = yn, b.fn[Gr].noConflict = function() {
            b.fn[Gr] = on;
            return yn._jQueryInterface;
        };
        var kn = "toast", _n = "4.5.0", En = "bs.toast", Tn = "." + En, Cn = b.fn[kn], jn = "click.dismiss" + Tn, Sn = "hide" + Tn, zn = "hidden" + Tn, Nn = "show" + Tn, An = "shown" + Tn, Dn = "fade", Ln = "hide", On = "show", In = "showing", Mn = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        }, qn = {
            animation: true,
            autohide: true,
            delay: 500
        }, Pn = '[data-dismiss="toast"]', Hn = function() {
            function n(t, e) {
                this._element = t;
                this._config = this._getConfig(e);
                this._timeout = null;
                this._setListeners();
            }
            var t = n.prototype;
            t.show = function t() {
                var e = this;
                var o = b.Event(Nn);
                b(this._element).trigger(o);
                if (o.isDefaultPrevented()) {
                    return;
                }
                if (this._config.animation) {
                    this._element.classList.add(Dn);
                }
                var r = function t() {
                    e._element.classList.remove(In);
                    e._element.classList.add(On);
                    b(e._element).trigger(An);
                    if (e._config.autohide) {
                        e._timeout = setTimeout(function() {
                            e.hide();
                        }, e._config.delay);
                    }
                };
                this._element.classList.remove(Ln);
                h.reflow(this._element);
                this._element.classList.add(In);
                if (this._config.animation) {
                    var n = h.getTransitionDurationFromElement(this._element);
                    b(this._element).one(h.TRANSITION_END, r).emulateTransitionEnd(n);
                } else {
                    r();
                }
            };
            t.hide = function t() {
                if (!this._element.classList.contains(On)) {
                    return;
                }
                var e = b.Event(Sn);
                b(this._element).trigger(e);
                if (e.isDefaultPrevented()) {
                    return;
                }
                this._close();
            };
            t.dispose = function t() {
                clearTimeout(this._timeout);
                this._timeout = null;
                if (this._element.classList.contains(On)) {
                    this._element.classList.remove(On);
                }
                b(this._element).off(jn);
                b.removeData(this._element, En);
                this._element = null;
                this._config = null;
            };
            t._getConfig = function t(e) {
                e = l(l(l({}, qn), b(this._element).data()), typeof e === "object" && e ? e : {});
                h.typeCheckConfig(kn, e, this.constructor.DefaultType);
                return e;
            };
            t._setListeners = function t() {
                var e = this;
                b(this._element).on(jn, Pn, function() {
                    return e.hide();
                });
            };
            t._close = function t() {
                var e = this;
                var o = function t() {
                    e._element.classList.add(Ln);
                    b(e._element).trigger(zn);
                };
                this._element.classList.remove(On);
                if (this._config.animation) {
                    var r = h.getTransitionDurationFromElement(this._element);
                    b(this._element).one(h.TRANSITION_END, o).emulateTransitionEnd(r);
                } else {
                    o();
                }
            };
            n._jQueryInterface = function t(r) {
                return this.each(function() {
                    var t = b(this);
                    var e = t.data(En);
                    var o = typeof r === "object" && r;
                    if (!e) {
                        e = new n(this, o);
                        t.data(En, e);
                    }
                    if (typeof r === "string") {
                        if (typeof e[r] === "undefined") {
                            throw new TypeError('No method named "' + r + '"');
                        }
                        e[r](this);
                    }
                });
            };
            i(n, null, [ {
                key: "VERSION",
                get: function t() {
                    return _n;
                }
            }, {
                key: "DefaultType",
                get: function t() {
                    return Mn;
                }
            }, {
                key: "Default",
                get: function t() {
                    return qn;
                }
            } ]);
            return n;
        }();
        b.fn[kn] = Hn._jQueryInterface, b.fn[kn].Constructor = Hn, b.fn[kn].noConflict = function() {
            b.fn[kn] = Cn;
            return Hn._jQueryInterface;
        }, t.Alert = N, t.Button = K, t.Carousel = Wt, t.Collapse = ce, t.Dropdown = Ze, 
        t.Modal = Io, t.Popover = Cr, t.Scrollspy = Kr, t.Tab = yn, t.Toast = Hn, t.Tooltip = cr, 
        t.Util = h, Object.defineProperty(t, "__esModule", {
            value: true
        });
    }(e, o(0), o(1));
}, function(t, e, o) {}, function(t, e, o) {
    "use strict";
    (function(i) {
        o(7), o(4), o(5);
        var t = {
            $el: i("#header"),
            render: function() {}
        };
        ({
            view: null,
            model: null,
            $el: null,
            _init: function(t, e) {
                this.view = t, this.model = e, this.$el = this.view.$el, this.loadHeader();
            },
            loadHeader: function() {
                var n = this;
                this.$el.load("header.html", function() {
                    for (var t = window.location.pathname, e = n.$el.find(".nav-item"), o = 0; o < e.length; o++) {
                        var r = e[o];
                        i(r).find(".nav-link").attr("href") === t && i(r).addClass("active").siblings().each(function(t, e) {
                            i(e).removeClass("active");
                        });
                    }
                });
            }
        })._init(t, {});
    }).call(this, o(0));
}, function(t, e, o) {
    var r = o(3), n = o(8);
    "string" == typeof (n = n.__esModule ? n.default : n) && (n = [ [ t.i, n, "" ] ]);
    var i = {
        insert: "head",
        singleton: !1
    };
    r(n, i);
    t.exports = n.locals || {};
}, function(t, e, o) {
    (e = o(2)(!1)).push([ t.i, "/*!\n * Bootstrap v4.5.0 (https://getbootstrap.com/)\n * Copyright 2011-2020 The Bootstrap Authors\n * Copyright 2011-2020 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */:root{--blue: #007bff;--indigo: #6610f2;--purple: #6f42c1;--pink: #e83e8c;--red: #dc3545;--orange: #fd7e14;--yellow: #ffc107;--green: #28a745;--teal: #20c997;--cyan: #17a2b8;--white: #fff;--gray: #6c757d;--gray-dark: #343a40;--primary: #007bff;--secondary: #6c757d;--success: #28a745;--info: #17a2b8;--warning: #ffc107;--danger: #dc3545;--light: #f8f9fa;--dark: #343a40;--breakpoint-xs: 0;--breakpoint-sm: 576px;--breakpoint-md: 768px;--breakpoint-lg: 992px;--breakpoint-xl: 1200px;--font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace}*,*::before,*::after{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0 !important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[title],abbr[data-original-title]{text-decoration:underline;text-decoration:underline dotted;cursor:help;border-bottom:0;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul,dl{margin-top:0;margin-bottom:1rem}ol ol,ul ul,ol ul,ul ol{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]){color:inherit;text-decoration:none}a:not([href]):hover{color:inherit;text-decoration:none}pre,code,kbd,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}input,button,select,optgroup,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button:not(:disabled),[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled){cursor:pointer}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{padding:0;border-style:none}input[type=radio],input[type=checkbox]{box-sizing:border-box;padding:0}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none !important}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:.5rem;font-weight:500;line-height:1.2}h1,.h1{font-size:2.5rem}h2,.h2{font-size:2rem}h3,.h3{font-size:1.75rem}h4,.h4{font-size:1.5rem}h5,.h5{font-size:1.25rem}h6,.h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}small,.small{font-size:80%;font-weight:400}mark,.mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#6c757d}.blockquote-footer::before{content:\"— \"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media(min-width: 576px){.container{max-width:540px}}@media(min-width: 768px){.container{max-width:720px}}@media(min-width: 992px){.container{max-width:960px}}@media(min-width: 1200px){.container{max-width:1140px}}.container-fluid,.container-xl,.container-lg,.container-md,.container-sm{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media(min-width: 576px){.container-sm,.container{max-width:540px}}@media(min-width: 768px){.container-md,.container-sm,.container{max-width:720px}}@media(min-width: 992px){.container-lg,.container-md,.container-sm,.container{max-width:960px}}@media(min-width: 1200px){.container-xl,.container-lg,.container-md,.container-sm,.container{max-width:1140px}}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col-xl,.col-xl-auto,.col-xl-12,.col-xl-11,.col-xl-10,.col-xl-9,.col-xl-8,.col-xl-7,.col-xl-6,.col-xl-5,.col-xl-4,.col-xl-3,.col-xl-2,.col-xl-1,.col-lg,.col-lg-auto,.col-lg-12,.col-lg-11,.col-lg-10,.col-lg-9,.col-lg-8,.col-lg-7,.col-lg-6,.col-lg-5,.col-lg-4,.col-lg-3,.col-lg-2,.col-lg-1,.col-md,.col-md-auto,.col-md-12,.col-md-11,.col-md-10,.col-md-9,.col-md-8,.col-md-7,.col-md-6,.col-md-5,.col-md-4,.col-md-3,.col-md-2,.col-md-1,.col-sm,.col-sm-auto,.col-sm-12,.col-sm-11,.col-sm-10,.col-sm-9,.col-sm-8,.col-sm-7,.col-sm-6,.col-sm-5,.col-sm-4,.col-sm-3,.col-sm-2,.col-sm-1,.col,.col-auto,.col-12,.col-11,.col-10,.col-9,.col-8,.col-7,.col-6,.col-5,.col-4,.col-3,.col-2,.col-1{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-1>*{flex:0 0 100%;max-width:100%}.row-cols-2>*{flex:0 0 50%;max-width:50%}.row-cols-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-4>*{flex:0 0 25%;max-width:25%}.row-cols-5>*{flex:0 0 20%;max-width:20%}.row-cols-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.3333333333%}.offset-2{margin-left:16.6666666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.3333333333%}.offset-5{margin-left:41.6666666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.3333333333%}.offset-8{margin-left:66.6666666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.3333333333%}.offset-11{margin-left:91.6666666667%}@media(min-width: 576px){.col-sm{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-sm-1>*{flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.3333333333%}.offset-sm-2{margin-left:16.6666666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.3333333333%}.offset-sm-5{margin-left:41.6666666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.3333333333%}.offset-sm-8{margin-left:66.6666666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.3333333333%}.offset-sm-11{margin-left:91.6666666667%}}@media(min-width: 768px){.col-md{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-md-1>*{flex:0 0 100%;max-width:100%}.row-cols-md-2>*{flex:0 0 50%;max-width:50%}.row-cols-md-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-md-4>*{flex:0 0 25%;max-width:25%}.row-cols-md-5>*{flex:0 0 20%;max-width:20%}.row-cols-md-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.3333333333%}.offset-md-2{margin-left:16.6666666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.3333333333%}.offset-md-5{margin-left:41.6666666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.3333333333%}.offset-md-8{margin-left:66.6666666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.3333333333%}.offset-md-11{margin-left:91.6666666667%}}@media(min-width: 992px){.col-lg{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-lg-1>*{flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.3333333333%}.offset-lg-2{margin-left:16.6666666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.3333333333%}.offset-lg-5{margin-left:41.6666666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.3333333333%}.offset-lg-8{margin-left:66.6666666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.3333333333%}.offset-lg-11{margin-left:91.6666666667%}}@media(min-width: 1200px){.col-xl{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-xl-1>*{flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.3333333333%}.offset-xl-2{margin-left:16.6666666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.3333333333%}.offset-xl-5{margin-left:41.6666666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.3333333333%}.offset-xl-8{margin-left:66.6666666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.3333333333%}.offset-xl-11{margin-left:91.6666666667%}}.table{width:100%;margin-bottom:1rem;color:#212529}.table th,.table td{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm th,.table-sm td{padding:.3rem}.table-bordered{border:1px solid #dee2e6}.table-bordered th,.table-bordered td{border:1px solid #dee2e6}.table-bordered thead th,.table-bordered thead td{border-bottom-width:2px}.table-borderless th,.table-borderless td,.table-borderless thead th,.table-borderless tbody+tbody{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>th,.table-primary>td{background-color:#b8daff}.table-primary th,.table-primary td,.table-primary thead th,.table-primary tbody+tbody{border-color:#7abaff}.table-hover .table-primary:hover{background-color:#9fcdff}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>th,.table-secondary>td{background-color:#d6d8db}.table-secondary th,.table-secondary td,.table-secondary thead th,.table-secondary tbody+tbody{border-color:#b3b7bb}.table-hover .table-secondary:hover{background-color:#c8cbcf}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>th,.table-success>td{background-color:#c3e6cb}.table-success th,.table-success td,.table-success thead th,.table-success tbody+tbody{border-color:#8fd19e}.table-hover .table-success:hover{background-color:#b1dfbb}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>th,.table-info>td{background-color:#bee5eb}.table-info th,.table-info td,.table-info thead th,.table-info tbody+tbody{border-color:#86cfda}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>th,.table-warning>td{background-color:#ffeeba}.table-warning th,.table-warning td,.table-warning thead th,.table-warning tbody+tbody{border-color:#ffdf7e}.table-hover .table-warning:hover{background-color:#ffe8a1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>th,.table-danger>td{background-color:#f5c6cb}.table-danger th,.table-danger td,.table-danger thead th,.table-danger tbody+tbody{border-color:#ed969e}.table-hover .table-danger:hover{background-color:#f1b0b7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>th,.table-light>td{background-color:#fdfdfe}.table-light th,.table-light td,.table-light thead th,.table-light tbody+tbody{border-color:#fbfcfc}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>th,.table-dark>td{background-color:#c6c8ca}.table-dark th,.table-dark td,.table-dark thead th,.table-dark tbody+tbody{border-color:#95999c}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>th,.table-active>td{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#343a40;border-color:#454d55}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#343a40}.table-dark th,.table-dark td,.table-dark thead th{border-color:#454d55}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:rgba(255,255,255,.075)}@media(max-width: 575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media(max-width: 767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media(max-width: 991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media(max-width: 1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + 0.75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}input[type=date].form-control,input[type=time].form-control,input[type=datetime-local].form-control,input[type=month].form-control{appearance:none}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(0.375rem + 1px);padding-bottom:calc(0.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(0.5rem + 1px);padding-bottom:calc(0.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(0.25rem + 1px);padding-bottom:calc(0.25rem + 1px);font-size:0.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;font-size:1rem;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-sm,.form-control-plaintext.form-control-lg{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.5em + 0.5rem + 2px);padding:.25rem .5rem;font-size:0.875rem;line-height:1.5;border-radius:.2rem}.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[size],select.form-control[multiple]{height:auto}textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input[disabled]~.form-check-label,.form-check-input:disabled~.form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:0.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,.9);border-radius:.25rem}.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip,.is-valid~.valid-feedback,.is-valid~.valid-tooltip{display:block}.was-validated .form-control:valid,.form-control.is-valid{border-color:#28a745;padding-right:calc(1.5em + 0.75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(0.375em + 0.1875rem) center;background-size:calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-control:valid:focus,.form-control.is-valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + 0.75rem);background-position:top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)}.was-validated .custom-select:valid,.custom-select.is-valid{border-color:#28a745;padding-right:calc(0.75em + 2.3125rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .custom-select:valid:focus,.custom-select.is-valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.was-validated .form-check-input:valid~.form-check-label,.form-check-input.is-valid~.form-check-label{color:#28a745}.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip,.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip{display:block}.was-validated .custom-control-input:valid~.custom-control-label,.custom-control-input.is-valid~.custom-control-label{color:#28a745}.was-validated .custom-control-input:valid~.custom-control-label::before,.custom-control-input.is-valid~.custom-control-label::before{border-color:#28a745}.was-validated .custom-control-input:valid:checked~.custom-control-label::before,.custom-control-input.is-valid:checked~.custom-control-label::before{border-color:#34ce57;background-color:#34ce57}.was-validated .custom-control-input:valid:focus~.custom-control-label::before,.custom-control-input.is-valid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before,.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before{border-color:#28a745}.was-validated .custom-file-input:valid~.custom-file-label,.custom-file-input.is-valid~.custom-file-label{border-color:#28a745}.was-validated .custom-file-input:valid:focus~.custom-file-label,.custom-file-input.is-valid:focus~.custom-file-label{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:0.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip,.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip{display:block}.was-validated .form-control:invalid,.form-control.is-invalid{border-color:#dc3545;padding-right:calc(1.5em + 0.75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(0.375em + 0.1875rem) center;background-size:calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-control:invalid:focus,.form-control.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + 0.75rem);background-position:top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)}.was-validated .custom-select:invalid,.custom-select.is-invalid{border-color:#dc3545;padding-right:calc(0.75em + 2.3125rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .custom-select:invalid:focus,.custom-select.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.was-validated .form-check-input:invalid~.form-check-label,.form-check-input.is-invalid~.form-check-label{color:#dc3545}.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip,.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip{display:block}.was-validated .custom-control-input:invalid~.custom-control-label,.custom-control-input.is-invalid~.custom-control-label{color:#dc3545}.was-validated .custom-control-input:invalid~.custom-control-label::before,.custom-control-input.is-invalid~.custom-control-label::before{border-color:#dc3545}.was-validated .custom-control-input:invalid:checked~.custom-control-label::before,.custom-control-input.is-invalid:checked~.custom-control-label::before{border-color:#e4606d;background-color:#e4606d}.was-validated .custom-control-input:invalid:focus~.custom-control-label::before,.custom-control-input.is-invalid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before,.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before{border-color:#dc3545}.was-validated .custom-file-input:invalid~.custom-file-label,.custom-file-input.is-invalid~.custom-file-label{border-color:#dc3545}.was-validated .custom-file-input:invalid:focus~.custom-file-label,.custom-file-input.is-invalid:focus~.custom-file-label{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:flex;flex-flow:row wrap;align-items:center}.form-inline .form-check{width:100%}@media(min-width: 576px){.form-inline label{display:flex;align-items:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:flex;flex:0 0 auto;flex-flow:row wrap;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .input-group,.form-inline .custom-select{width:auto}.form-inline .form-check{display:flex;align-items:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.btn{transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn:focus,.btn.focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary:focus,.btn-primary.focus{color:#fff;background-color:#0069d9;border-color:#0062cc;box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled):active,.btn-primary:not(:disabled):not(.disabled).active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled):active:focus,.btn-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary:focus,.btn-secondary.focus{color:#fff;background-color:#5a6268;border-color:#545b62;box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled):active,.btn-secondary:not(:disabled):not(.disabled).active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled):active:focus,.btn-secondary:not(:disabled):not(.disabled).active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success:focus,.btn-success.focus{color:#fff;background-color:#218838;border-color:#1e7e34;box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled):active,.btn-success:not(:disabled):not(.disabled).active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled):active:focus,.btn-success:not(:disabled):not(.disabled).active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info:focus,.btn-info.focus{color:#fff;background-color:#138496;border-color:#117a8b;box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled):active,.btn-info:not(:disabled):not(.disabled).active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled):active:focus,.btn-info:not(:disabled):not(.disabled).active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning:focus,.btn-warning.focus{color:#212529;background-color:#e0a800;border-color:#d39e00;box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled):active,.btn-warning:not(:disabled):not(.disabled).active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled):active:focus,.btn-warning:not(:disabled):not(.disabled).active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger:focus,.btn-danger.focus{color:#fff;background-color:#c82333;border-color:#bd2130;box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled):active,.btn-danger:not(:disabled):not(.disabled).active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled):active:focus,.btn-danger:not(:disabled):not(.disabled).active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light:focus,.btn-light.focus{color:#212529;background-color:#e2e6ea;border-color:#dae0e5;box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled):active,.btn-light:not(:disabled):not(.disabled).active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled):active:focus,.btn-light:not(:disabled):not(.disabled).active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark:focus,.btn-dark.focus{color:#fff;background-color:#23272b;border-color:#1d2124;box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled):active,.btn-dark:not(:disabled):not(.disabled).active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled):active:focus,.btn-dark:not(:disabled):not(.disabled).active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-outline-primary{color:#007bff;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:focus,.btn-outline-primary.focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled):active,.btn-outline-primary:not(:disabled):not(.disabled).active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:focus,.btn-outline-secondary.focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled):active,.btn-outline-secondary:not(:disabled):not(.disabled).active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-success{color:#28a745;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:focus,.btn-outline-success.focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled):active,.btn-outline-success:not(:disabled):not(.disabled).active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled):active:focus,.btn-outline-success:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-info{color:#17a2b8;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:focus,.btn-outline-info.focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled):active,.btn-outline-info:not(:disabled):not(.disabled).active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled):active:focus,.btn-outline-info:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:focus,.btn-outline-warning.focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled):active,.btn-outline-warning:not(:disabled):not(.disabled).active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:focus,.btn-outline-danger.focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled):active,.btn-outline-danger:not(:disabled):not(.disabled).active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:focus,.btn-outline-light.focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled):active,.btn-outline-light:not(:disabled):not(.disabled).active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled):active:focus,.btn-outline-light:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark{color:#343a40;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:focus,.btn-outline-dark.focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled):active,.btn-outline-dark:not(:disabled):not(.disabled).active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-link{font-weight:400;color:#007bff;text-decoration:none}.btn-link:hover{color:#0056b3;text-decoration:underline}.btn-link:focus,.btn-link.focus{text-decoration:underline}.btn-link:disabled,.btn-link.disabled{color:#6c757d;pointer-events:none}.btn-lg,.btn-group-lg>.btn{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-sm,.btn-group-sm>.btn{padding:.25rem .5rem;font-size:0.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=submit].btn-block,input[type=reset].btn-block,input[type=button].btn-block{width:100%}.fade{transition:opacity .15s linear}@media(prefers-reduced-motion: reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}@media(prefers-reduced-motion: reduce){.collapsing{transition:none}}.dropup,.dropright,.dropdown,.dropleft{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media(min-width: 576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media(min-width: 768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media(min-width: 992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media(min-width: 1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-toggle::after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle::after{display:none}.dropleft .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty::after{margin-left:0}.dropleft .dropdown-toggle::before{vertical-align:0}.dropdown-menu[x-placement^=top],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:0.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;flex:1 1 auto}.btn-group>.btn:hover,.btn-group-vertical>.btn:hover{z-index:1}.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn.active{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child){margin-left:-1px}.btn-group>.btn:not(:last-child):not(.dropdown-toggle),.btn-group>.btn-group:not(:last-child)>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-sm+.dropdown-toggle-split,.btn-group-sm>.btn+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-lg+.dropdown-toggle-split,.btn-group-lg>.btn+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),.btn-group-vertical>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox]{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-control-plaintext,.input-group>.custom-select,.input-group>.custom-file{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}.input-group>.form-control+.form-control,.input-group>.form-control+.custom-select,.input-group>.form-control+.custom-file,.input-group>.form-control-plaintext+.form-control,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.custom-file,.input-group>.custom-select+.form-control,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.custom-file,.input-group>.custom-file+.form-control,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.custom-file{margin-left:-1px}.input-group>.form-control:focus,.input-group>.custom-select:focus,.input-group>.custom-file .custom-file-input:focus~.custom-file-label{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.form-control:not(:last-child),.input-group>.custom-select:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.form-control:not(:first-child),.input-group>.custom-select:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:flex;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-prepend,.input-group-append{display:flex}.input-group-prepend .btn,.input-group-append .btn{position:relative;z-index:2}.input-group-prepend .btn:focus,.input-group-append .btn:focus{z-index:3}.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.input-group-text,.input-group-append .input-group-text+.btn{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=radio],.input-group-text input[type=checkbox]{margin-top:0}.input-group-lg>.form-control:not(textarea),.input-group-lg>.custom-select{height:calc(1.5em + 1rem + 2px)}.input-group-lg>.form-control,.input-group-lg>.custom-select,.input-group-lg>.input-group-prepend>.input-group-text,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-append>.btn{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-sm>.form-control:not(textarea),.input-group-sm>.custom-select{height:calc(1.5em + 0.5rem + 2px)}.input-group-sm>.form-control,.input-group-sm>.custom-select,.input-group-sm>.input-group-prepend>.input-group-text,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-append>.btn{padding:.25rem .5rem;font-size:0.875rem;line-height:1.5;border-radius:.2rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text,.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}.custom-control-inline{display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;left:0;z-index:-1;width:1rem;height:1.25rem;opacity:0}.custom-control-input:checked~.custom-control-label::before{color:#fff;border-color:#007bff;background-color:#007bff}.custom-control-input:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:focus:not(:checked)~.custom-control-label::before{border-color:#80bdff}.custom-control-input:not(:disabled):active~.custom-control-label::before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff}.custom-control-input[disabled]~.custom-control-label,.custom-control-input:disabled~.custom-control-label{color:#6c757d}.custom-control-input[disabled]~.custom-control-label::before,.custom-control-input:disabled~.custom-control-label::before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label::before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:\"\";background-color:#fff;border:#adb5bd solid 1px}.custom-control-label::after{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\";background:no-repeat 50%/50% 50%}.custom-checkbox .custom-control-label::before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before{border-color:#007bff;background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-radio .custom-control-label::before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label::before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label::after{top:calc(0.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.custom-switch .custom-control-label::after{transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label::after{background-color:#fff;transform:translateX(0.75rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-select{display:inline-block;width:100%;height:calc(1.5em + 0.75rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px;border:1px solid #ced4da;border-radius:.25rem;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{display:none}.custom-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.custom-select-sm{height:calc(1.5em + 0.5rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:0.875rem}.custom-select-lg{height:calc(1.5em + 1rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.custom-file{position:relative;display:inline-block;width:100%;height:calc(1.5em + 0.75rem + 2px);margin-bottom:0}.custom-file-input{position:relative;z-index:2;width:100%;height:calc(1.5em + 0.75rem + 2px);margin:0;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-file-input[disabled]~.custom-file-label,.custom-file-input:disabled~.custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en)~.custom-file-label::after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse]::after{content:attr(data-browse)}.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(1.5em + 0.75rem + 2px);padding:.375rem .75rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:calc(1.5em + 0.75rem);padding:.375rem .75rem;line-height:1.5;color:#495057;content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;height:1.4rem;padding:0;background-color:transparent;appearance:none}.custom-range:focus{outline:none}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-0.25rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.custom-range::-webkit-slider-thumb{transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.custom-range::-moz-range-thumb{transition:none}}.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.custom-range::-ms-thumb{transition:none}}.custom-range::-ms-thumb:active{background-color:#b3d7ff}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px;background-color:#dee2e6;border-radius:1rem}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label::before,.custom-file-label,.custom-select{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.custom-control-label::before,.custom-file-label,.custom-select{transition:none}}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:hover,.nav-link:focus{text-decoration:none}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-link.active,.nav-tabs .nav-item.show .nav-link{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item{flex:1 1 auto;text-align:center}.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:.5rem 1rem}.navbar .container,.navbar .container-fluid,.navbar .container-sm,.navbar .container-md,.navbar .container-lg,.navbar .container-xl{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:hover,.navbar-brand:focus{text-decoration:none}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:hover,.navbar-toggler:focus{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat center center;background-size:100% 100%}@media(max-width: 575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-xl{padding-right:0;padding-left:0}}@media(min-width: 576px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-xl{flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media(max-width: 767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-md,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-xl{padding-right:0;padding-left:0}}@media(min-width: 768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-md,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-xl{flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media(max-width: 991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-xl{padding-right:0;padding-left:0}}@media(min-width: 992px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-xl{flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media(max-width: 1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-xl{padding-right:0;padding-left:0}}@media(min-width: 1200px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-xl{flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-sm,.navbar-expand>.container-md,.navbar-expand>.container-lg,.navbar-expand>.container-xl{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-sm,.navbar-expand>.container-md,.navbar-expand>.container-lg,.navbar-expand>.container-xl{flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:hover,.navbar-light .navbar-brand:focus{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:hover,.navbar-light .navbar-nav .nav-link:focus{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .show>.nav-link,.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .nav-link.active{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a{color:rgba(0,0,0,.9)}.navbar-light .navbar-text a:hover,.navbar-light .navbar-text a:focus{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:hover,.navbar-dark .navbar-brand:focus{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.5)}.navbar-dark .navbar-nav .nav-link:hover,.navbar-dark .navbar-nav .nav-link:focus{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .show>.nav-link,.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .nav-link.active{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.5);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-dark .navbar-text{color:rgba(255,255,255,.5)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:hover,.navbar-dark .navbar-text a:focus{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:calc(0.25rem - 1px);border-top-right-radius:calc(0.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:calc(0.25rem - 1px);border-bottom-left-radius:calc(0.25rem - 1px)}.card-body{flex:1 1 auto;min-height:1px;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-0.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)}.card-header-tabs{margin-right:-0.625rem;margin-bottom:-0.75rem;margin-left:-0.625rem;border-bottom:0}.card-header-pills{margin-right:-0.625rem;margin-left:-0.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img,.card-img-top,.card-img-bottom{flex-shrink:0;width:100%}.card-img,.card-img-top{border-top-left-radius:calc(0.25rem - 1px);border-top-right-radius:calc(0.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(0.25rem - 1px);border-bottom-left-radius:calc(0.25rem - 1px)}.card-deck .card{margin-bottom:15px}@media(min-width: 576px){.card-deck{display:flex;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{flex:1 0 0%;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group>.card{margin-bottom:15px}@media(min-width: 576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-img-top,.card-group>.card:not(:last-child) .card-header{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-img-bottom,.card-group>.card:not(:last-child) .card-footer{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-img-top,.card-group>.card:not(:first-child) .card-header{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-img-bottom,.card-group>.card:not(:first-child) .card-footer{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:.75rem}@media(min-width: 576px){.card-columns{column-count:3;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion>.card{overflow:hidden}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card>.card-header{border-radius:0;margin-bottom:-1px}.breadcrumb{display:flex;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item{display:flex}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;color:#6c757d;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:0.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.badge{transition:none}}a.badge:hover,a.badge:focus{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}a.badge-primary:hover,a.badge-primary:focus{color:#fff;background-color:#0062cc}a.badge-primary:focus,a.badge-primary.focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.badge-secondary{color:#fff;background-color:#6c757d}a.badge-secondary:hover,a.badge-secondary:focus{color:#fff;background-color:#545b62}a.badge-secondary:focus,a.badge-secondary.focus{outline:0;box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.badge-success{color:#fff;background-color:#28a745}a.badge-success:hover,a.badge-success:focus{color:#fff;background-color:#1e7e34}a.badge-success:focus,a.badge-success.focus{outline:0;box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:hover,a.badge-info:focus{color:#fff;background-color:#117a8b}a.badge-info:focus,a.badge-info.focus{outline:0;box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.badge-warning{color:#212529;background-color:#ffc107}a.badge-warning:hover,a.badge-warning:focus{color:#212529;background-color:#d39e00}a.badge-warning:focus,a.badge-warning.focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.badge-danger{color:#fff;background-color:#dc3545}a.badge-danger:hover,a.badge-danger:focus{color:#fff;background-color:#bd2130}a.badge-danger:focus,a.badge-danger.focus{outline:0;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.badge-light{color:#212529;background-color:#f8f9fa}a.badge-light:hover,a.badge-light:focus{color:#212529;background-color:#dae0e5}a.badge-light:focus,a.badge-light.focus{outline:0;box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.badge-dark{color:#fff;background-color:#343a40}a.badge-dark:hover,a.badge-dark:focus{color:#fff;background-color:#1d2124}a.badge-dark:focus,a.badge-dark.focus{outline:0;box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media(min-width: 576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:flex;height:1rem;overflow:hidden;line-height:0;font-size:0.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width .6s ease}@media(prefers-reduced-motion: reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);background-size:1rem 1rem}.progress-bar-animated{animation:progress-bar-stripes 1s linear infinite}@media(prefers-reduced-motion: reduce){.progress-bar-animated{animation:none}}.media{display:flex;align-items:flex-start}.media-body{flex:1}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:.25rem}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:hover,.list-group-item-action:focus{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media(min-width: 576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media(min-width: 768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media(min-width: 992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media(min-width: 1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:hover,.list-group-item-primary.list-group-item-action:focus{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:hover,.list-group-item-secondary.list-group-item-action:focus{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:hover,.list-group-item-success.list-group-item-action:focus{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:hover,.list-group-item-info.list-group-item-action:focus{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:hover,.list-group-item-warning.list-group-item-action:focus{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:hover,.list-group-item-danger.list-group-item-action:focus{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:hover,.list-group-item-light.list-group-item-action:focus{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:hover,.list-group-item-dark.list-group-item-action:focus{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):hover,.close:not(:disabled):not(.disabled):focus{opacity:.75}button.close{padding:0;background-color:transparent;border:0}a.close.disabled{pointer-events:none}.toast{max-width:350px;overflow:hidden;font-size:0.875rem;background-color:rgba(255,255,255,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);backdrop-filter:blur(10px);opacity:0;border-radius:.25rem}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:flex;align-items:center;padding:.25rem .75rem;color:#6c757d;background-color:rgba(255,255,255,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translate(0, -50px)}@media(prefers-reduced-motion: reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-header,.modal-dialog-scrollable .modal-footer{flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered::before{display:block;height:calc(100vh - 1rem);height:min-content;content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{flex-direction:column;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable::before{content:none}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(0.3rem - 1px);border-top-right-radius:calc(0.3rem - 1px)}.modal-header .close{padding:1rem 1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(0.3rem - 1px);border-bottom-left-radius:calc(0.3rem - 1px)}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media(min-width: 576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered::before{height:calc(100vh - 3.5rem);height:min-content}.modal-sm{max-width:300px}}@media(min-width: 992px){.modal-lg,.modal-xl{max-width:800px}}@media(min-width: 1200px){.modal-xl{max-width:1140px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:0.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-top,.bs-tooltip-auto[x-placement^=top]{padding:.4rem 0}.bs-tooltip-top .arrow,.bs-tooltip-auto[x-placement^=top] .arrow{bottom:0}.bs-tooltip-top .arrow::before,.bs-tooltip-auto[x-placement^=top] .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-right,.bs-tooltip-auto[x-placement^=right]{padding:0 .4rem}.bs-tooltip-right .arrow,.bs-tooltip-auto[x-placement^=right] .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-right .arrow::before,.bs-tooltip-auto[x-placement^=right] .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-bottom,.bs-tooltip-auto[x-placement^=bottom]{padding:.4rem 0}.bs-tooltip-bottom .arrow,.bs-tooltip-auto[x-placement^=bottom] .arrow{top:0}.bs-tooltip-bottom .arrow::before,.bs-tooltip-auto[x-placement^=bottom] .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-left,.bs-tooltip-auto[x-placement^=left]{padding:0 .4rem}.bs-tooltip-left .arrow,.bs-tooltip-auto[x-placement^=left] .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-left .arrow::before,.bs-tooltip-auto[x-placement^=left] .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:0.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow::before,.popover .arrow::after{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-top,.bs-popover-auto[x-placement^=top]{margin-bottom:.5rem}.bs-popover-top>.arrow,.bs-popover-auto[x-placement^=top]>.arrow{bottom:calc(-0.5rem - 1px)}.bs-popover-top>.arrow::before,.bs-popover-auto[x-placement^=top]>.arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-top>.arrow::after,.bs-popover-auto[x-placement^=top]>.arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-right,.bs-popover-auto[x-placement^=right]{margin-left:.5rem}.bs-popover-right>.arrow,.bs-popover-auto[x-placement^=right]>.arrow{left:calc(-0.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-right>.arrow::before,.bs-popover-auto[x-placement^=right]>.arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-right>.arrow::after,.bs-popover-auto[x-placement^=right]>.arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-bottom,.bs-popover-auto[x-placement^=bottom]{margin-top:.5rem}.bs-popover-bottom>.arrow,.bs-popover-auto[x-placement^=bottom]>.arrow{top:calc(-0.5rem - 1px)}.bs-popover-bottom>.arrow::before,.bs-popover-auto[x-placement^=bottom]>.arrow::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-bottom>.arrow::after,.bs-popover-auto[x-placement^=bottom]>.arrow::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bs-popover-bottom .popover-header::before,.bs-popover-auto[x-placement^=bottom] .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-0.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-left,.bs-popover-auto[x-placement^=left]{margin-right:.5rem}.bs-popover-left>.arrow,.bs-popover-auto[x-placement^=left]>.arrow{right:calc(-0.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-left>.arrow::before,.bs-popover-auto[x-placement^=left]>.arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-left>.arrow::after,.bs-popover-auto[x-placement^=left]>.arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(0.3rem - 1px);border-top-right-radius:calc(0.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;backface-visibility:hidden;transition:transform .6s ease-in-out}@media(prefers-reduced-motion: reduce){.carousel-item{transition:none}}.carousel-item.active,.carousel-item-next,.carousel-item-prev{display:block}.carousel-item-next:not(.carousel-item-left),.active.carousel-item-right{transform:translateX(100%)}.carousel-item-prev:not(.carousel-item-right),.active.carousel-item-left{transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item.active,.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:opacity 0s .6s}@media(prefers-reduced-motion: reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-prev,.carousel-control-next{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s ease}@media(prefers-reduced-motion: reduce){.carousel-control-prev,.carousel-control-next{transition:none}}.carousel-control-prev:hover,.carousel-control-prev:focus,.carousel-control-next:hover,.carousel-control-next:focus{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-prev-icon,.carousel-control-next-icon{display:inline-block;width:20px;height:20px;background:no-repeat 50%/100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media(prefers-reduced-motion: reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;animation:spinner-border .75s linear infinite}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;animation:spinner-grow .75s linear infinite}.spinner-grow-sm{width:1rem;height:1rem}.align-baseline{vertical-align:baseline !important}.align-top{vertical-align:top !important}.align-middle{vertical-align:middle !important}.align-bottom{vertical-align:bottom !important}.align-text-bottom{vertical-align:text-bottom !important}.align-text-top{vertical-align:text-top !important}.bg-primary{background-color:#007bff !important}a.bg-primary:hover,a.bg-primary:focus,button.bg-primary:hover,button.bg-primary:focus{background-color:#0062cc !important}.bg-secondary{background-color:#6c757d !important}a.bg-secondary:hover,a.bg-secondary:focus,button.bg-secondary:hover,button.bg-secondary:focus{background-color:#545b62 !important}.bg-success{background-color:#28a745 !important}a.bg-success:hover,a.bg-success:focus,button.bg-success:hover,button.bg-success:focus{background-color:#1e7e34 !important}.bg-info{background-color:#17a2b8 !important}a.bg-info:hover,a.bg-info:focus,button.bg-info:hover,button.bg-info:focus{background-color:#117a8b !important}.bg-warning{background-color:#ffc107 !important}a.bg-warning:hover,a.bg-warning:focus,button.bg-warning:hover,button.bg-warning:focus{background-color:#d39e00 !important}.bg-danger{background-color:#dc3545 !important}a.bg-danger:hover,a.bg-danger:focus,button.bg-danger:hover,button.bg-danger:focus{background-color:#bd2130 !important}.bg-light{background-color:#f8f9fa !important}a.bg-light:hover,a.bg-light:focus,button.bg-light:hover,button.bg-light:focus{background-color:#dae0e5 !important}.bg-dark{background-color:#343a40 !important}a.bg-dark:hover,a.bg-dark:focus,button.bg-dark:hover,button.bg-dark:focus{background-color:#1d2124 !important}.bg-white{background-color:#fff !important}.bg-transparent{background-color:transparent !important}.border{border:1px solid #dee2e6 !important}.border-top{border-top:1px solid #dee2e6 !important}.border-right{border-right:1px solid #dee2e6 !important}.border-bottom{border-bottom:1px solid #dee2e6 !important}.border-left{border-left:1px solid #dee2e6 !important}.border-0{border:0 !important}.border-top-0{border-top:0 !important}.border-right-0{border-right:0 !important}.border-bottom-0{border-bottom:0 !important}.border-left-0{border-left:0 !important}.border-primary{border-color:#007bff !important}.border-secondary{border-color:#6c757d !important}.border-success{border-color:#28a745 !important}.border-info{border-color:#17a2b8 !important}.border-warning{border-color:#ffc107 !important}.border-danger{border-color:#dc3545 !important}.border-light{border-color:#f8f9fa !important}.border-dark{border-color:#343a40 !important}.border-white{border-color:#fff !important}.rounded-sm{border-radius:.2rem !important}.rounded{border-radius:.25rem !important}.rounded-top{border-top-left-radius:.25rem !important;border-top-right-radius:.25rem !important}.rounded-right{border-top-right-radius:.25rem !important;border-bottom-right-radius:.25rem !important}.rounded-bottom{border-bottom-right-radius:.25rem !important;border-bottom-left-radius:.25rem !important}.rounded-left{border-top-left-radius:.25rem !important;border-bottom-left-radius:.25rem !important}.rounded-lg{border-radius:.3rem !important}.rounded-circle{border-radius:50% !important}.rounded-pill{border-radius:50rem !important}.rounded-0{border-radius:0 !important}.clearfix::after{display:block;clear:both;content:\"\"}.d-none{display:none !important}.d-inline{display:inline !important}.d-inline-block{display:inline-block !important}.d-block{display:block !important}.d-table{display:table !important}.d-table-row{display:table-row !important}.d-table-cell{display:table-cell !important}.d-flex{display:flex !important}.d-inline-flex{display:inline-flex !important}@media(min-width: 576px){.d-sm-none{display:none !important}.d-sm-inline{display:inline !important}.d-sm-inline-block{display:inline-block !important}.d-sm-block{display:block !important}.d-sm-table{display:table !important}.d-sm-table-row{display:table-row !important}.d-sm-table-cell{display:table-cell !important}.d-sm-flex{display:flex !important}.d-sm-inline-flex{display:inline-flex !important}}@media(min-width: 768px){.d-md-none{display:none !important}.d-md-inline{display:inline !important}.d-md-inline-block{display:inline-block !important}.d-md-block{display:block !important}.d-md-table{display:table !important}.d-md-table-row{display:table-row !important}.d-md-table-cell{display:table-cell !important}.d-md-flex{display:flex !important}.d-md-inline-flex{display:inline-flex !important}}@media(min-width: 992px){.d-lg-none{display:none !important}.d-lg-inline{display:inline !important}.d-lg-inline-block{display:inline-block !important}.d-lg-block{display:block !important}.d-lg-table{display:table !important}.d-lg-table-row{display:table-row !important}.d-lg-table-cell{display:table-cell !important}.d-lg-flex{display:flex !important}.d-lg-inline-flex{display:inline-flex !important}}@media(min-width: 1200px){.d-xl-none{display:none !important}.d-xl-inline{display:inline !important}.d-xl-inline-block{display:inline-block !important}.d-xl-block{display:block !important}.d-xl-table{display:table !important}.d-xl-table-row{display:table-row !important}.d-xl-table-cell{display:table-cell !important}.d-xl-flex{display:flex !important}.d-xl-inline-flex{display:inline-flex !important}}@media print{.d-print-none{display:none !important}.d-print-inline{display:inline !important}.d-print-inline-block{display:inline-block !important}.d-print-block{display:block !important}.d-print-table{display:table !important}.d-print-table-row{display:table-row !important}.d-print-table-cell{display:table-cell !important}.d-print-flex{display:flex !important}.d-print-inline-flex{display:inline-flex !important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive iframe,.embed-responsive embed,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.8571428571%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{flex-direction:row !important}.flex-column{flex-direction:column !important}.flex-row-reverse{flex-direction:row-reverse !important}.flex-column-reverse{flex-direction:column-reverse !important}.flex-wrap{flex-wrap:wrap !important}.flex-nowrap{flex-wrap:nowrap !important}.flex-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-fill{flex:1 1 auto !important}.flex-grow-0{flex-grow:0 !important}.flex-grow-1{flex-grow:1 !important}.flex-shrink-0{flex-shrink:0 !important}.flex-shrink-1{flex-shrink:1 !important}.justify-content-start{justify-content:flex-start !important}.justify-content-end{justify-content:flex-end !important}.justify-content-center{justify-content:center !important}.justify-content-between{justify-content:space-between !important}.justify-content-around{justify-content:space-around !important}.align-items-start{align-items:flex-start !important}.align-items-end{align-items:flex-end !important}.align-items-center{align-items:center !important}.align-items-baseline{align-items:baseline !important}.align-items-stretch{align-items:stretch !important}.align-content-start{align-content:flex-start !important}.align-content-end{align-content:flex-end !important}.align-content-center{align-content:center !important}.align-content-between{align-content:space-between !important}.align-content-around{align-content:space-around !important}.align-content-stretch{align-content:stretch !important}.align-self-auto{align-self:auto !important}.align-self-start{align-self:flex-start !important}.align-self-end{align-self:flex-end !important}.align-self-center{align-self:center !important}.align-self-baseline{align-self:baseline !important}.align-self-stretch{align-self:stretch !important}@media(min-width: 576px){.flex-sm-row{flex-direction:row !important}.flex-sm-column{flex-direction:column !important}.flex-sm-row-reverse{flex-direction:row-reverse !important}.flex-sm-column-reverse{flex-direction:column-reverse !important}.flex-sm-wrap{flex-wrap:wrap !important}.flex-sm-nowrap{flex-wrap:nowrap !important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-sm-fill{flex:1 1 auto !important}.flex-sm-grow-0{flex-grow:0 !important}.flex-sm-grow-1{flex-grow:1 !important}.flex-sm-shrink-0{flex-shrink:0 !important}.flex-sm-shrink-1{flex-shrink:1 !important}.justify-content-sm-start{justify-content:flex-start !important}.justify-content-sm-end{justify-content:flex-end !important}.justify-content-sm-center{justify-content:center !important}.justify-content-sm-between{justify-content:space-between !important}.justify-content-sm-around{justify-content:space-around !important}.align-items-sm-start{align-items:flex-start !important}.align-items-sm-end{align-items:flex-end !important}.align-items-sm-center{align-items:center !important}.align-items-sm-baseline{align-items:baseline !important}.align-items-sm-stretch{align-items:stretch !important}.align-content-sm-start{align-content:flex-start !important}.align-content-sm-end{align-content:flex-end !important}.align-content-sm-center{align-content:center !important}.align-content-sm-between{align-content:space-between !important}.align-content-sm-around{align-content:space-around !important}.align-content-sm-stretch{align-content:stretch !important}.align-self-sm-auto{align-self:auto !important}.align-self-sm-start{align-self:flex-start !important}.align-self-sm-end{align-self:flex-end !important}.align-self-sm-center{align-self:center !important}.align-self-sm-baseline{align-self:baseline !important}.align-self-sm-stretch{align-self:stretch !important}}@media(min-width: 768px){.flex-md-row{flex-direction:row !important}.flex-md-column{flex-direction:column !important}.flex-md-row-reverse{flex-direction:row-reverse !important}.flex-md-column-reverse{flex-direction:column-reverse !important}.flex-md-wrap{flex-wrap:wrap !important}.flex-md-nowrap{flex-wrap:nowrap !important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-md-fill{flex:1 1 auto !important}.flex-md-grow-0{flex-grow:0 !important}.flex-md-grow-1{flex-grow:1 !important}.flex-md-shrink-0{flex-shrink:0 !important}.flex-md-shrink-1{flex-shrink:1 !important}.justify-content-md-start{justify-content:flex-start !important}.justify-content-md-end{justify-content:flex-end !important}.justify-content-md-center{justify-content:center !important}.justify-content-md-between{justify-content:space-between !important}.justify-content-md-around{justify-content:space-around !important}.align-items-md-start{align-items:flex-start !important}.align-items-md-end{align-items:flex-end !important}.align-items-md-center{align-items:center !important}.align-items-md-baseline{align-items:baseline !important}.align-items-md-stretch{align-items:stretch !important}.align-content-md-start{align-content:flex-start !important}.align-content-md-end{align-content:flex-end !important}.align-content-md-center{align-content:center !important}.align-content-md-between{align-content:space-between !important}.align-content-md-around{align-content:space-around !important}.align-content-md-stretch{align-content:stretch !important}.align-self-md-auto{align-self:auto !important}.align-self-md-start{align-self:flex-start !important}.align-self-md-end{align-self:flex-end !important}.align-self-md-center{align-self:center !important}.align-self-md-baseline{align-self:baseline !important}.align-self-md-stretch{align-self:stretch !important}}@media(min-width: 992px){.flex-lg-row{flex-direction:row !important}.flex-lg-column{flex-direction:column !important}.flex-lg-row-reverse{flex-direction:row-reverse !important}.flex-lg-column-reverse{flex-direction:column-reverse !important}.flex-lg-wrap{flex-wrap:wrap !important}.flex-lg-nowrap{flex-wrap:nowrap !important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-lg-fill{flex:1 1 auto !important}.flex-lg-grow-0{flex-grow:0 !important}.flex-lg-grow-1{flex-grow:1 !important}.flex-lg-shrink-0{flex-shrink:0 !important}.flex-lg-shrink-1{flex-shrink:1 !important}.justify-content-lg-start{justify-content:flex-start !important}.justify-content-lg-end{justify-content:flex-end !important}.justify-content-lg-center{justify-content:center !important}.justify-content-lg-between{justify-content:space-between !important}.justify-content-lg-around{justify-content:space-around !important}.align-items-lg-start{align-items:flex-start !important}.align-items-lg-end{align-items:flex-end !important}.align-items-lg-center{align-items:center !important}.align-items-lg-baseline{align-items:baseline !important}.align-items-lg-stretch{align-items:stretch !important}.align-content-lg-start{align-content:flex-start !important}.align-content-lg-end{align-content:flex-end !important}.align-content-lg-center{align-content:center !important}.align-content-lg-between{align-content:space-between !important}.align-content-lg-around{align-content:space-around !important}.align-content-lg-stretch{align-content:stretch !important}.align-self-lg-auto{align-self:auto !important}.align-self-lg-start{align-self:flex-start !important}.align-self-lg-end{align-self:flex-end !important}.align-self-lg-center{align-self:center !important}.align-self-lg-baseline{align-self:baseline !important}.align-self-lg-stretch{align-self:stretch !important}}@media(min-width: 1200px){.flex-xl-row{flex-direction:row !important}.flex-xl-column{flex-direction:column !important}.flex-xl-row-reverse{flex-direction:row-reverse !important}.flex-xl-column-reverse{flex-direction:column-reverse !important}.flex-xl-wrap{flex-wrap:wrap !important}.flex-xl-nowrap{flex-wrap:nowrap !important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-xl-fill{flex:1 1 auto !important}.flex-xl-grow-0{flex-grow:0 !important}.flex-xl-grow-1{flex-grow:1 !important}.flex-xl-shrink-0{flex-shrink:0 !important}.flex-xl-shrink-1{flex-shrink:1 !important}.justify-content-xl-start{justify-content:flex-start !important}.justify-content-xl-end{justify-content:flex-end !important}.justify-content-xl-center{justify-content:center !important}.justify-content-xl-between{justify-content:space-between !important}.justify-content-xl-around{justify-content:space-around !important}.align-items-xl-start{align-items:flex-start !important}.align-items-xl-end{align-items:flex-end !important}.align-items-xl-center{align-items:center !important}.align-items-xl-baseline{align-items:baseline !important}.align-items-xl-stretch{align-items:stretch !important}.align-content-xl-start{align-content:flex-start !important}.align-content-xl-end{align-content:flex-end !important}.align-content-xl-center{align-content:center !important}.align-content-xl-between{align-content:space-between !important}.align-content-xl-around{align-content:space-around !important}.align-content-xl-stretch{align-content:stretch !important}.align-self-xl-auto{align-self:auto !important}.align-self-xl-start{align-self:flex-start !important}.align-self-xl-end{align-self:flex-end !important}.align-self-xl-center{align-self:center !important}.align-self-xl-baseline{align-self:baseline !important}.align-self-xl-stretch{align-self:stretch !important}}.float-left{float:left !important}.float-right{float:right !important}.float-none{float:none !important}@media(min-width: 576px){.float-sm-left{float:left !important}.float-sm-right{float:right !important}.float-sm-none{float:none !important}}@media(min-width: 768px){.float-md-left{float:left !important}.float-md-right{float:right !important}.float-md-none{float:none !important}}@media(min-width: 992px){.float-lg-left{float:left !important}.float-lg-right{float:right !important}.float-lg-none{float:none !important}}@media(min-width: 1200px){.float-xl-left{float:left !important}.float-xl-right{float:right !important}.float-xl-none{float:none !important}}.user-select-all{user-select:all !important}.user-select-auto{user-select:auto !important}.user-select-none{user-select:none !important}.overflow-auto{overflow:auto !important}.overflow-hidden{overflow:hidden !important}.position-static{position:static !important}.position-relative{position:relative !important}.position-absolute{position:absolute !important}.position-fixed{position:fixed !important}.position-sticky{position:sticky !important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports(position: sticky){.sticky-top{position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075) !important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15) !important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175) !important}.shadow-none{box-shadow:none !important}.w-25{width:25% !important}.w-50{width:50% !important}.w-75{width:75% !important}.w-100{width:100% !important}.w-auto{width:auto !important}.h-25{height:25% !important}.h-50{height:50% !important}.h-75{height:75% !important}.h-100{height:100% !important}.h-auto{height:auto !important}.mw-100{max-width:100% !important}.mh-100{max-height:100% !important}.min-vw-100{min-width:100vw !important}.min-vh-100{min-height:100vh !important}.vw-100{width:100vw !important}.vh-100{height:100vh !important}.m-0{margin:0 !important}.mt-0,.my-0{margin-top:0 !important}.mr-0,.mx-0{margin-right:0 !important}.mb-0,.my-0{margin-bottom:0 !important}.ml-0,.mx-0{margin-left:0 !important}.m-1{margin:.25rem !important}.mt-1,.my-1{margin-top:.25rem !important}.mr-1,.mx-1{margin-right:.25rem !important}.mb-1,.my-1{margin-bottom:.25rem !important}.ml-1,.mx-1{margin-left:.25rem !important}.m-2{margin:.5rem !important}.mt-2,.my-2{margin-top:.5rem !important}.mr-2,.mx-2{margin-right:.5rem !important}.mb-2,.my-2{margin-bottom:.5rem !important}.ml-2,.mx-2{margin-left:.5rem !important}.m-3{margin:1rem !important}.mt-3,.my-3{margin-top:1rem !important}.mr-3,.mx-3{margin-right:1rem !important}.mb-3,.my-3{margin-bottom:1rem !important}.ml-3,.mx-3{margin-left:1rem !important}.m-4{margin:1.5rem !important}.mt-4,.my-4{margin-top:1.5rem !important}.mr-4,.mx-4{margin-right:1.5rem !important}.mb-4,.my-4{margin-bottom:1.5rem !important}.ml-4,.mx-4{margin-left:1.5rem !important}.m-5{margin:3rem !important}.mt-5,.my-5{margin-top:3rem !important}.mr-5,.mx-5{margin-right:3rem !important}.mb-5,.my-5{margin-bottom:3rem !important}.ml-5,.mx-5{margin-left:3rem !important}.p-0{padding:0 !important}.pt-0,.py-0{padding-top:0 !important}.pr-0,.px-0{padding-right:0 !important}.pb-0,.py-0{padding-bottom:0 !important}.pl-0,.px-0{padding-left:0 !important}.p-1{padding:.25rem !important}.pt-1,.py-1{padding-top:.25rem !important}.pr-1,.px-1{padding-right:.25rem !important}.pb-1,.py-1{padding-bottom:.25rem !important}.pl-1,.px-1{padding-left:.25rem !important}.p-2{padding:.5rem !important}.pt-2,.py-2{padding-top:.5rem !important}.pr-2,.px-2{padding-right:.5rem !important}.pb-2,.py-2{padding-bottom:.5rem !important}.pl-2,.px-2{padding-left:.5rem !important}.p-3{padding:1rem !important}.pt-3,.py-3{padding-top:1rem !important}.pr-3,.px-3{padding-right:1rem !important}.pb-3,.py-3{padding-bottom:1rem !important}.pl-3,.px-3{padding-left:1rem !important}.p-4{padding:1.5rem !important}.pt-4,.py-4{padding-top:1.5rem !important}.pr-4,.px-4{padding-right:1.5rem !important}.pb-4,.py-4{padding-bottom:1.5rem !important}.pl-4,.px-4{padding-left:1.5rem !important}.p-5{padding:3rem !important}.pt-5,.py-5{padding-top:3rem !important}.pr-5,.px-5{padding-right:3rem !important}.pb-5,.py-5{padding-bottom:3rem !important}.pl-5,.px-5{padding-left:3rem !important}.m-n1{margin:-0.25rem !important}.mt-n1,.my-n1{margin-top:-0.25rem !important}.mr-n1,.mx-n1{margin-right:-0.25rem !important}.mb-n1,.my-n1{margin-bottom:-0.25rem !important}.ml-n1,.mx-n1{margin-left:-0.25rem !important}.m-n2{margin:-0.5rem !important}.mt-n2,.my-n2{margin-top:-0.5rem !important}.mr-n2,.mx-n2{margin-right:-0.5rem !important}.mb-n2,.my-n2{margin-bottom:-0.5rem !important}.ml-n2,.mx-n2{margin-left:-0.5rem !important}.m-n3{margin:-1rem !important}.mt-n3,.my-n3{margin-top:-1rem !important}.mr-n3,.mx-n3{margin-right:-1rem !important}.mb-n3,.my-n3{margin-bottom:-1rem !important}.ml-n3,.mx-n3{margin-left:-1rem !important}.m-n4{margin:-1.5rem !important}.mt-n4,.my-n4{margin-top:-1.5rem !important}.mr-n4,.mx-n4{margin-right:-1.5rem !important}.mb-n4,.my-n4{margin-bottom:-1.5rem !important}.ml-n4,.mx-n4{margin-left:-1.5rem !important}.m-n5{margin:-3rem !important}.mt-n5,.my-n5{margin-top:-3rem !important}.mr-n5,.mx-n5{margin-right:-3rem !important}.mb-n5,.my-n5{margin-bottom:-3rem !important}.ml-n5,.mx-n5{margin-left:-3rem !important}.m-auto{margin:auto !important}.mt-auto,.my-auto{margin-top:auto !important}.mr-auto,.mx-auto{margin-right:auto !important}.mb-auto,.my-auto{margin-bottom:auto !important}.ml-auto,.mx-auto{margin-left:auto !important}@media(min-width: 576px){.m-sm-0{margin:0 !important}.mt-sm-0,.my-sm-0{margin-top:0 !important}.mr-sm-0,.mx-sm-0{margin-right:0 !important}.mb-sm-0,.my-sm-0{margin-bottom:0 !important}.ml-sm-0,.mx-sm-0{margin-left:0 !important}.m-sm-1{margin:.25rem !important}.mt-sm-1,.my-sm-1{margin-top:.25rem !important}.mr-sm-1,.mx-sm-1{margin-right:.25rem !important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem !important}.ml-sm-1,.mx-sm-1{margin-left:.25rem !important}.m-sm-2{margin:.5rem !important}.mt-sm-2,.my-sm-2{margin-top:.5rem !important}.mr-sm-2,.mx-sm-2{margin-right:.5rem !important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem !important}.ml-sm-2,.mx-sm-2{margin-left:.5rem !important}.m-sm-3{margin:1rem !important}.mt-sm-3,.my-sm-3{margin-top:1rem !important}.mr-sm-3,.mx-sm-3{margin-right:1rem !important}.mb-sm-3,.my-sm-3{margin-bottom:1rem !important}.ml-sm-3,.mx-sm-3{margin-left:1rem !important}.m-sm-4{margin:1.5rem !important}.mt-sm-4,.my-sm-4{margin-top:1.5rem !important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem !important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem !important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem !important}.m-sm-5{margin:3rem !important}.mt-sm-5,.my-sm-5{margin-top:3rem !important}.mr-sm-5,.mx-sm-5{margin-right:3rem !important}.mb-sm-5,.my-sm-5{margin-bottom:3rem !important}.ml-sm-5,.mx-sm-5{margin-left:3rem !important}.p-sm-0{padding:0 !important}.pt-sm-0,.py-sm-0{padding-top:0 !important}.pr-sm-0,.px-sm-0{padding-right:0 !important}.pb-sm-0,.py-sm-0{padding-bottom:0 !important}.pl-sm-0,.px-sm-0{padding-left:0 !important}.p-sm-1{padding:.25rem !important}.pt-sm-1,.py-sm-1{padding-top:.25rem !important}.pr-sm-1,.px-sm-1{padding-right:.25rem !important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem !important}.pl-sm-1,.px-sm-1{padding-left:.25rem !important}.p-sm-2{padding:.5rem !important}.pt-sm-2,.py-sm-2{padding-top:.5rem !important}.pr-sm-2,.px-sm-2{padding-right:.5rem !important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem !important}.pl-sm-2,.px-sm-2{padding-left:.5rem !important}.p-sm-3{padding:1rem !important}.pt-sm-3,.py-sm-3{padding-top:1rem !important}.pr-sm-3,.px-sm-3{padding-right:1rem !important}.pb-sm-3,.py-sm-3{padding-bottom:1rem !important}.pl-sm-3,.px-sm-3{padding-left:1rem !important}.p-sm-4{padding:1.5rem !important}.pt-sm-4,.py-sm-4{padding-top:1.5rem !important}.pr-sm-4,.px-sm-4{padding-right:1.5rem !important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem !important}.pl-sm-4,.px-sm-4{padding-left:1.5rem !important}.p-sm-5{padding:3rem !important}.pt-sm-5,.py-sm-5{padding-top:3rem !important}.pr-sm-5,.px-sm-5{padding-right:3rem !important}.pb-sm-5,.py-sm-5{padding-bottom:3rem !important}.pl-sm-5,.px-sm-5{padding-left:3rem !important}.m-sm-n1{margin:-0.25rem !important}.mt-sm-n1,.my-sm-n1{margin-top:-0.25rem !important}.mr-sm-n1,.mx-sm-n1{margin-right:-0.25rem !important}.mb-sm-n1,.my-sm-n1{margin-bottom:-0.25rem !important}.ml-sm-n1,.mx-sm-n1{margin-left:-0.25rem !important}.m-sm-n2{margin:-0.5rem !important}.mt-sm-n2,.my-sm-n2{margin-top:-0.5rem !important}.mr-sm-n2,.mx-sm-n2{margin-right:-0.5rem !important}.mb-sm-n2,.my-sm-n2{margin-bottom:-0.5rem !important}.ml-sm-n2,.mx-sm-n2{margin-left:-0.5rem !important}.m-sm-n3{margin:-1rem !important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem !important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem !important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem !important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem !important}.m-sm-n4{margin:-1.5rem !important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem !important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem !important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem !important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem !important}.m-sm-n5{margin:-3rem !important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem !important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem !important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem !important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem !important}.m-sm-auto{margin:auto !important}.mt-sm-auto,.my-sm-auto{margin-top:auto !important}.mr-sm-auto,.mx-sm-auto{margin-right:auto !important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto !important}.ml-sm-auto,.mx-sm-auto{margin-left:auto !important}}@media(min-width: 768px){.m-md-0{margin:0 !important}.mt-md-0,.my-md-0{margin-top:0 !important}.mr-md-0,.mx-md-0{margin-right:0 !important}.mb-md-0,.my-md-0{margin-bottom:0 !important}.ml-md-0,.mx-md-0{margin-left:0 !important}.m-md-1{margin:.25rem !important}.mt-md-1,.my-md-1{margin-top:.25rem !important}.mr-md-1,.mx-md-1{margin-right:.25rem !important}.mb-md-1,.my-md-1{margin-bottom:.25rem !important}.ml-md-1,.mx-md-1{margin-left:.25rem !important}.m-md-2{margin:.5rem !important}.mt-md-2,.my-md-2{margin-top:.5rem !important}.mr-md-2,.mx-md-2{margin-right:.5rem !important}.mb-md-2,.my-md-2{margin-bottom:.5rem !important}.ml-md-2,.mx-md-2{margin-left:.5rem !important}.m-md-3{margin:1rem !important}.mt-md-3,.my-md-3{margin-top:1rem !important}.mr-md-3,.mx-md-3{margin-right:1rem !important}.mb-md-3,.my-md-3{margin-bottom:1rem !important}.ml-md-3,.mx-md-3{margin-left:1rem !important}.m-md-4{margin:1.5rem !important}.mt-md-4,.my-md-4{margin-top:1.5rem !important}.mr-md-4,.mx-md-4{margin-right:1.5rem !important}.mb-md-4,.my-md-4{margin-bottom:1.5rem !important}.ml-md-4,.mx-md-4{margin-left:1.5rem !important}.m-md-5{margin:3rem !important}.mt-md-5,.my-md-5{margin-top:3rem !important}.mr-md-5,.mx-md-5{margin-right:3rem !important}.mb-md-5,.my-md-5{margin-bottom:3rem !important}.ml-md-5,.mx-md-5{margin-left:3rem !important}.p-md-0{padding:0 !important}.pt-md-0,.py-md-0{padding-top:0 !important}.pr-md-0,.px-md-0{padding-right:0 !important}.pb-md-0,.py-md-0{padding-bottom:0 !important}.pl-md-0,.px-md-0{padding-left:0 !important}.p-md-1{padding:.25rem !important}.pt-md-1,.py-md-1{padding-top:.25rem !important}.pr-md-1,.px-md-1{padding-right:.25rem !important}.pb-md-1,.py-md-1{padding-bottom:.25rem !important}.pl-md-1,.px-md-1{padding-left:.25rem !important}.p-md-2{padding:.5rem !important}.pt-md-2,.py-md-2{padding-top:.5rem !important}.pr-md-2,.px-md-2{padding-right:.5rem !important}.pb-md-2,.py-md-2{padding-bottom:.5rem !important}.pl-md-2,.px-md-2{padding-left:.5rem !important}.p-md-3{padding:1rem !important}.pt-md-3,.py-md-3{padding-top:1rem !important}.pr-md-3,.px-md-3{padding-right:1rem !important}.pb-md-3,.py-md-3{padding-bottom:1rem !important}.pl-md-3,.px-md-3{padding-left:1rem !important}.p-md-4{padding:1.5rem !important}.pt-md-4,.py-md-4{padding-top:1.5rem !important}.pr-md-4,.px-md-4{padding-right:1.5rem !important}.pb-md-4,.py-md-4{padding-bottom:1.5rem !important}.pl-md-4,.px-md-4{padding-left:1.5rem !important}.p-md-5{padding:3rem !important}.pt-md-5,.py-md-5{padding-top:3rem !important}.pr-md-5,.px-md-5{padding-right:3rem !important}.pb-md-5,.py-md-5{padding-bottom:3rem !important}.pl-md-5,.px-md-5{padding-left:3rem !important}.m-md-n1{margin:-0.25rem !important}.mt-md-n1,.my-md-n1{margin-top:-0.25rem !important}.mr-md-n1,.mx-md-n1{margin-right:-0.25rem !important}.mb-md-n1,.my-md-n1{margin-bottom:-0.25rem !important}.ml-md-n1,.mx-md-n1{margin-left:-0.25rem !important}.m-md-n2{margin:-0.5rem !important}.mt-md-n2,.my-md-n2{margin-top:-0.5rem !important}.mr-md-n2,.mx-md-n2{margin-right:-0.5rem !important}.mb-md-n2,.my-md-n2{margin-bottom:-0.5rem !important}.ml-md-n2,.mx-md-n2{margin-left:-0.5rem !important}.m-md-n3{margin:-1rem !important}.mt-md-n3,.my-md-n3{margin-top:-1rem !important}.mr-md-n3,.mx-md-n3{margin-right:-1rem !important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem !important}.ml-md-n3,.mx-md-n3{margin-left:-1rem !important}.m-md-n4{margin:-1.5rem !important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem !important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem !important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem !important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem !important}.m-md-n5{margin:-3rem !important}.mt-md-n5,.my-md-n5{margin-top:-3rem !important}.mr-md-n5,.mx-md-n5{margin-right:-3rem !important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem !important}.ml-md-n5,.mx-md-n5{margin-left:-3rem !important}.m-md-auto{margin:auto !important}.mt-md-auto,.my-md-auto{margin-top:auto !important}.mr-md-auto,.mx-md-auto{margin-right:auto !important}.mb-md-auto,.my-md-auto{margin-bottom:auto !important}.ml-md-auto,.mx-md-auto{margin-left:auto !important}}@media(min-width: 992px){.m-lg-0{margin:0 !important}.mt-lg-0,.my-lg-0{margin-top:0 !important}.mr-lg-0,.mx-lg-0{margin-right:0 !important}.mb-lg-0,.my-lg-0{margin-bottom:0 !important}.ml-lg-0,.mx-lg-0{margin-left:0 !important}.m-lg-1{margin:.25rem !important}.mt-lg-1,.my-lg-1{margin-top:.25rem !important}.mr-lg-1,.mx-lg-1{margin-right:.25rem !important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem !important}.ml-lg-1,.mx-lg-1{margin-left:.25rem !important}.m-lg-2{margin:.5rem !important}.mt-lg-2,.my-lg-2{margin-top:.5rem !important}.mr-lg-2,.mx-lg-2{margin-right:.5rem !important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem !important}.ml-lg-2,.mx-lg-2{margin-left:.5rem !important}.m-lg-3{margin:1rem !important}.mt-lg-3,.my-lg-3{margin-top:1rem !important}.mr-lg-3,.mx-lg-3{margin-right:1rem !important}.mb-lg-3,.my-lg-3{margin-bottom:1rem !important}.ml-lg-3,.mx-lg-3{margin-left:1rem !important}.m-lg-4{margin:1.5rem !important}.mt-lg-4,.my-lg-4{margin-top:1.5rem !important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem !important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem !important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem !important}.m-lg-5{margin:3rem !important}.mt-lg-5,.my-lg-5{margin-top:3rem !important}.mr-lg-5,.mx-lg-5{margin-right:3rem !important}.mb-lg-5,.my-lg-5{margin-bottom:3rem !important}.ml-lg-5,.mx-lg-5{margin-left:3rem !important}.p-lg-0{padding:0 !important}.pt-lg-0,.py-lg-0{padding-top:0 !important}.pr-lg-0,.px-lg-0{padding-right:0 !important}.pb-lg-0,.py-lg-0{padding-bottom:0 !important}.pl-lg-0,.px-lg-0{padding-left:0 !important}.p-lg-1{padding:.25rem !important}.pt-lg-1,.py-lg-1{padding-top:.25rem !important}.pr-lg-1,.px-lg-1{padding-right:.25rem !important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem !important}.pl-lg-1,.px-lg-1{padding-left:.25rem !important}.p-lg-2{padding:.5rem !important}.pt-lg-2,.py-lg-2{padding-top:.5rem !important}.pr-lg-2,.px-lg-2{padding-right:.5rem !important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem !important}.pl-lg-2,.px-lg-2{padding-left:.5rem !important}.p-lg-3{padding:1rem !important}.pt-lg-3,.py-lg-3{padding-top:1rem !important}.pr-lg-3,.px-lg-3{padding-right:1rem !important}.pb-lg-3,.py-lg-3{padding-bottom:1rem !important}.pl-lg-3,.px-lg-3{padding-left:1rem !important}.p-lg-4{padding:1.5rem !important}.pt-lg-4,.py-lg-4{padding-top:1.5rem !important}.pr-lg-4,.px-lg-4{padding-right:1.5rem !important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem !important}.pl-lg-4,.px-lg-4{padding-left:1.5rem !important}.p-lg-5{padding:3rem !important}.pt-lg-5,.py-lg-5{padding-top:3rem !important}.pr-lg-5,.px-lg-5{padding-right:3rem !important}.pb-lg-5,.py-lg-5{padding-bottom:3rem !important}.pl-lg-5,.px-lg-5{padding-left:3rem !important}.m-lg-n1{margin:-0.25rem !important}.mt-lg-n1,.my-lg-n1{margin-top:-0.25rem !important}.mr-lg-n1,.mx-lg-n1{margin-right:-0.25rem !important}.mb-lg-n1,.my-lg-n1{margin-bottom:-0.25rem !important}.ml-lg-n1,.mx-lg-n1{margin-left:-0.25rem !important}.m-lg-n2{margin:-0.5rem !important}.mt-lg-n2,.my-lg-n2{margin-top:-0.5rem !important}.mr-lg-n2,.mx-lg-n2{margin-right:-0.5rem !important}.mb-lg-n2,.my-lg-n2{margin-bottom:-0.5rem !important}.ml-lg-n2,.mx-lg-n2{margin-left:-0.5rem !important}.m-lg-n3{margin:-1rem !important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem !important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem !important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem !important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem !important}.m-lg-n4{margin:-1.5rem !important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem !important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem !important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem !important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem !important}.m-lg-n5{margin:-3rem !important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem !important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem !important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem !important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem !important}.m-lg-auto{margin:auto !important}.mt-lg-auto,.my-lg-auto{margin-top:auto !important}.mr-lg-auto,.mx-lg-auto{margin-right:auto !important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto !important}.ml-lg-auto,.mx-lg-auto{margin-left:auto !important}}@media(min-width: 1200px){.m-xl-0{margin:0 !important}.mt-xl-0,.my-xl-0{margin-top:0 !important}.mr-xl-0,.mx-xl-0{margin-right:0 !important}.mb-xl-0,.my-xl-0{margin-bottom:0 !important}.ml-xl-0,.mx-xl-0{margin-left:0 !important}.m-xl-1{margin:.25rem !important}.mt-xl-1,.my-xl-1{margin-top:.25rem !important}.mr-xl-1,.mx-xl-1{margin-right:.25rem !important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem !important}.ml-xl-1,.mx-xl-1{margin-left:.25rem !important}.m-xl-2{margin:.5rem !important}.mt-xl-2,.my-xl-2{margin-top:.5rem !important}.mr-xl-2,.mx-xl-2{margin-right:.5rem !important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem !important}.ml-xl-2,.mx-xl-2{margin-left:.5rem !important}.m-xl-3{margin:1rem !important}.mt-xl-3,.my-xl-3{margin-top:1rem !important}.mr-xl-3,.mx-xl-3{margin-right:1rem !important}.mb-xl-3,.my-xl-3{margin-bottom:1rem !important}.ml-xl-3,.mx-xl-3{margin-left:1rem !important}.m-xl-4{margin:1.5rem !important}.mt-xl-4,.my-xl-4{margin-top:1.5rem !important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem !important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem !important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem !important}.m-xl-5{margin:3rem !important}.mt-xl-5,.my-xl-5{margin-top:3rem !important}.mr-xl-5,.mx-xl-5{margin-right:3rem !important}.mb-xl-5,.my-xl-5{margin-bottom:3rem !important}.ml-xl-5,.mx-xl-5{margin-left:3rem !important}.p-xl-0{padding:0 !important}.pt-xl-0,.py-xl-0{padding-top:0 !important}.pr-xl-0,.px-xl-0{padding-right:0 !important}.pb-xl-0,.py-xl-0{padding-bottom:0 !important}.pl-xl-0,.px-xl-0{padding-left:0 !important}.p-xl-1{padding:.25rem !important}.pt-xl-1,.py-xl-1{padding-top:.25rem !important}.pr-xl-1,.px-xl-1{padding-right:.25rem !important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem !important}.pl-xl-1,.px-xl-1{padding-left:.25rem !important}.p-xl-2{padding:.5rem !important}.pt-xl-2,.py-xl-2{padding-top:.5rem !important}.pr-xl-2,.px-xl-2{padding-right:.5rem !important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem !important}.pl-xl-2,.px-xl-2{padding-left:.5rem !important}.p-xl-3{padding:1rem !important}.pt-xl-3,.py-xl-3{padding-top:1rem !important}.pr-xl-3,.px-xl-3{padding-right:1rem !important}.pb-xl-3,.py-xl-3{padding-bottom:1rem !important}.pl-xl-3,.px-xl-3{padding-left:1rem !important}.p-xl-4{padding:1.5rem !important}.pt-xl-4,.py-xl-4{padding-top:1.5rem !important}.pr-xl-4,.px-xl-4{padding-right:1.5rem !important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem !important}.pl-xl-4,.px-xl-4{padding-left:1.5rem !important}.p-xl-5{padding:3rem !important}.pt-xl-5,.py-xl-5{padding-top:3rem !important}.pr-xl-5,.px-xl-5{padding-right:3rem !important}.pb-xl-5,.py-xl-5{padding-bottom:3rem !important}.pl-xl-5,.px-xl-5{padding-left:3rem !important}.m-xl-n1{margin:-0.25rem !important}.mt-xl-n1,.my-xl-n1{margin-top:-0.25rem !important}.mr-xl-n1,.mx-xl-n1{margin-right:-0.25rem !important}.mb-xl-n1,.my-xl-n1{margin-bottom:-0.25rem !important}.ml-xl-n1,.mx-xl-n1{margin-left:-0.25rem !important}.m-xl-n2{margin:-0.5rem !important}.mt-xl-n2,.my-xl-n2{margin-top:-0.5rem !important}.mr-xl-n2,.mx-xl-n2{margin-right:-0.5rem !important}.mb-xl-n2,.my-xl-n2{margin-bottom:-0.5rem !important}.ml-xl-n2,.mx-xl-n2{margin-left:-0.5rem !important}.m-xl-n3{margin:-1rem !important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem !important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem !important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem !important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem !important}.m-xl-n4{margin:-1.5rem !important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem !important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem !important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem !important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem !important}.m-xl-n5{margin:-3rem !important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem !important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem !important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem !important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem !important}.m-xl-auto{margin:auto !important}.mt-xl-auto,.my-xl-auto{margin-top:auto !important}.mr-xl-auto,.mx-xl-auto{margin-right:auto !important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto !important}.ml-xl-auto,.mx-xl-auto{margin-left:auto !important}}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:rgba(0,0,0,0)}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace !important}.text-justify{text-align:justify !important}.text-wrap{white-space:normal !important}.text-nowrap{white-space:nowrap !important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left !important}.text-right{text-align:right !important}.text-center{text-align:center !important}@media(min-width: 576px){.text-sm-left{text-align:left !important}.text-sm-right{text-align:right !important}.text-sm-center{text-align:center !important}}@media(min-width: 768px){.text-md-left{text-align:left !important}.text-md-right{text-align:right !important}.text-md-center{text-align:center !important}}@media(min-width: 992px){.text-lg-left{text-align:left !important}.text-lg-right{text-align:right !important}.text-lg-center{text-align:center !important}}@media(min-width: 1200px){.text-xl-left{text-align:left !important}.text-xl-right{text-align:right !important}.text-xl-center{text-align:center !important}}.text-lowercase{text-transform:lowercase !important}.text-uppercase{text-transform:uppercase !important}.text-capitalize{text-transform:capitalize !important}.font-weight-light{font-weight:300 !important}.font-weight-lighter{font-weight:lighter !important}.font-weight-normal{font-weight:400 !important}.font-weight-bold{font-weight:700 !important}.font-weight-bolder{font-weight:bolder !important}.font-italic{font-style:italic !important}.text-white{color:#fff !important}.text-primary{color:#007bff !important}a.text-primary:hover,a.text-primary:focus{color:#0056b3 !important}.text-secondary{color:#6c757d !important}a.text-secondary:hover,a.text-secondary:focus{color:#494f54 !important}.text-success{color:#28a745 !important}a.text-success:hover,a.text-success:focus{color:#19692c !important}.text-info{color:#17a2b8 !important}a.text-info:hover,a.text-info:focus{color:#0f6674 !important}.text-warning{color:#ffc107 !important}a.text-warning:hover,a.text-warning:focus{color:#ba8b00 !important}.text-danger{color:#dc3545 !important}a.text-danger:hover,a.text-danger:focus{color:#a71d2a !important}.text-light{color:#f8f9fa !important}a.text-light:hover,a.text-light:focus{color:#cbd3da !important}.text-dark{color:#343a40 !important}a.text-dark:hover,a.text-dark:focus{color:#121416 !important}.text-body{color:#212529 !important}.text-muted{color:#6c757d !important}.text-black-50{color:rgba(0,0,0,.5) !important}.text-white-50{color:rgba(255,255,255,.5) !important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none !important}.text-break{word-wrap:break-word !important}.text-reset{color:inherit !important}.visible{visibility:visible !important}.invisible{visibility:hidden !important}@media print{*,*::before,*::after{text-shadow:none !important;box-shadow:none !important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap !important}pre,blockquote{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px !important}.container{min-width:992px !important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse !important}.table td,.table th{background-color:#fff !important}.table-bordered th,.table-bordered td{border:1px solid #dee2e6 !important}.table-dark{color:inherit}.table-dark th,.table-dark td,.table-dark thead th,.table-dark tbody+tbody{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}*{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:\"\";content:none}table{border-collapse:collapse;border-spacing:0}a:hover{text-decoration:none}.icon{width:1em;height:1em;vertical-align:-0.15em;fill:currentColor;overflow:hidden}#header{box-shadow:0 2px 8px #f5f5f5}#header .header-inner{padding:16px 0}", "" ]), 
    t.exports = e;
}, function(t, e) {
    var o = function() {
        return this;
    }();
    try {
        o = o || new Function("return this")();
    } catch (t) {
        "object" == typeof window && (o = window);
    }
    t.exports = o;
}, , , , , , , , , , function(t, e, o) {
    "use strict";
    o.r(e), function(t) {
        o(20), o(6), o(4), o(5);
        var e = {
            $el: t("body"),
            render: function() {}
        };
        ({
            view: null,
            model: null,
            el: null,
            _init: function(t, e) {
                this.view = t, this.model = e, this.$el = this.view.$el, window.onload = this.onload;
            },
            onload: function() {
                t(".page").removeClass("invisible").addClass("visible"), t(".spinner").hide();
            }
        })._init(e, {});
    }.call(this, o(0));
}, function(t, e, o) {
    var r = o(3), n = o(21);
    "string" == typeof (n = n.__esModule ? n.default : n) && (n = [ [ t.i, n, "" ] ]);
    var i = {
        insert: "head",
        singleton: !1
    };
    r(n, i);
    t.exports = n.locals || {};
}, function(t, e, o) {
    (e = o(2)(!1)).push([ t.i, "/*!\n * Bootstrap v4.5.0 (https://getbootstrap.com/)\n * Copyright 2011-2020 The Bootstrap Authors\n * Copyright 2011-2020 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */:root{--blue: #007bff;--indigo: #6610f2;--purple: #6f42c1;--pink: #e83e8c;--red: #dc3545;--orange: #fd7e14;--yellow: #ffc107;--green: #28a745;--teal: #20c997;--cyan: #17a2b8;--white: #fff;--gray: #6c757d;--gray-dark: #343a40;--primary: #007bff;--secondary: #6c757d;--success: #28a745;--info: #17a2b8;--warning: #ffc107;--danger: #dc3545;--light: #f8f9fa;--dark: #343a40;--breakpoint-xs: 0;--breakpoint-sm: 576px;--breakpoint-md: 768px;--breakpoint-lg: 992px;--breakpoint-xl: 1200px;--font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace}*,*::before,*::after{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0 !important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[title],abbr[data-original-title]{text-decoration:underline;text-decoration:underline dotted;cursor:help;border-bottom:0;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul,dl{margin-top:0;margin-bottom:1rem}ol ol,ul ul,ol ul,ul ol{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]){color:inherit;text-decoration:none}a:not([href]):hover{color:inherit;text-decoration:none}pre,code,kbd,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}input,button,select,optgroup,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button:not(:disabled),[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled){cursor:pointer}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{padding:0;border-style:none}input[type=radio],input[type=checkbox]{box-sizing:border-box;padding:0}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none !important}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:.5rem;font-weight:500;line-height:1.2}h1,.h1{font-size:2.5rem}h2,.h2{font-size:2rem}h3,.h3{font-size:1.75rem}h4,.h4{font-size:1.5rem}h5,.h5{font-size:1.25rem}h6,.h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}small,.small{font-size:80%;font-weight:400}mark,.mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#6c757d}.blockquote-footer::before{content:\"— \"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media(min-width: 576px){.container{max-width:540px}}@media(min-width: 768px){.container{max-width:720px}}@media(min-width: 992px){.container{max-width:960px}}@media(min-width: 1200px){.container{max-width:1140px}}.container-fluid,.container-xl,.container-lg,.container-md,.container-sm{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media(min-width: 576px){.container-sm,.container{max-width:540px}}@media(min-width: 768px){.container-md,.container-sm,.container{max-width:720px}}@media(min-width: 992px){.container-lg,.container-md,.container-sm,.container{max-width:960px}}@media(min-width: 1200px){.container-xl,.container-lg,.container-md,.container-sm,.container{max-width:1140px}}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col-xl,.col-xl-auto,.col-xl-12,.col-xl-11,.col-xl-10,.col-xl-9,.col-xl-8,.col-xl-7,.col-xl-6,.col-xl-5,.col-xl-4,.col-xl-3,.col-xl-2,.col-xl-1,.col-lg,.col-lg-auto,.col-lg-12,.col-lg-11,.col-lg-10,.col-lg-9,.col-lg-8,.col-lg-7,.col-lg-6,.col-lg-5,.col-lg-4,.col-lg-3,.col-lg-2,.col-lg-1,.col-md,.col-md-auto,.col-md-12,.col-md-11,.col-md-10,.col-md-9,.col-md-8,.col-md-7,.col-md-6,.col-md-5,.col-md-4,.col-md-3,.col-md-2,.col-md-1,.col-sm,.col-sm-auto,.col-sm-12,.col-sm-11,.col-sm-10,.col-sm-9,.col-sm-8,.col-sm-7,.col-sm-6,.col-sm-5,.col-sm-4,.col-sm-3,.col-sm-2,.col-sm-1,.col,.col-auto,.col-12,.col-11,.col-10,.col-9,.col-8,.col-7,.col-6,.col-5,.col-4,.col-3,.col-2,.col-1{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-1>*{flex:0 0 100%;max-width:100%}.row-cols-2>*{flex:0 0 50%;max-width:50%}.row-cols-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-4>*{flex:0 0 25%;max-width:25%}.row-cols-5>*{flex:0 0 20%;max-width:20%}.row-cols-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.3333333333%}.offset-2{margin-left:16.6666666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.3333333333%}.offset-5{margin-left:41.6666666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.3333333333%}.offset-8{margin-left:66.6666666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.3333333333%}.offset-11{margin-left:91.6666666667%}@media(min-width: 576px){.col-sm{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-sm-1>*{flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.3333333333%}.offset-sm-2{margin-left:16.6666666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.3333333333%}.offset-sm-5{margin-left:41.6666666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.3333333333%}.offset-sm-8{margin-left:66.6666666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.3333333333%}.offset-sm-11{margin-left:91.6666666667%}}@media(min-width: 768px){.col-md{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-md-1>*{flex:0 0 100%;max-width:100%}.row-cols-md-2>*{flex:0 0 50%;max-width:50%}.row-cols-md-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-md-4>*{flex:0 0 25%;max-width:25%}.row-cols-md-5>*{flex:0 0 20%;max-width:20%}.row-cols-md-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.3333333333%}.offset-md-2{margin-left:16.6666666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.3333333333%}.offset-md-5{margin-left:41.6666666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.3333333333%}.offset-md-8{margin-left:66.6666666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.3333333333%}.offset-md-11{margin-left:91.6666666667%}}@media(min-width: 992px){.col-lg{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-lg-1>*{flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.3333333333%}.offset-lg-2{margin-left:16.6666666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.3333333333%}.offset-lg-5{margin-left:41.6666666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.3333333333%}.offset-lg-8{margin-left:66.6666666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.3333333333%}.offset-lg-11{margin-left:91.6666666667%}}@media(min-width: 1200px){.col-xl{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-xl-1>*{flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.3333333333%}.offset-xl-2{margin-left:16.6666666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.3333333333%}.offset-xl-5{margin-left:41.6666666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.3333333333%}.offset-xl-8{margin-left:66.6666666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.3333333333%}.offset-xl-11{margin-left:91.6666666667%}}.table{width:100%;margin-bottom:1rem;color:#212529}.table th,.table td{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm th,.table-sm td{padding:.3rem}.table-bordered{border:1px solid #dee2e6}.table-bordered th,.table-bordered td{border:1px solid #dee2e6}.table-bordered thead th,.table-bordered thead td{border-bottom-width:2px}.table-borderless th,.table-borderless td,.table-borderless thead th,.table-borderless tbody+tbody{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>th,.table-primary>td{background-color:#b8daff}.table-primary th,.table-primary td,.table-primary thead th,.table-primary tbody+tbody{border-color:#7abaff}.table-hover .table-primary:hover{background-color:#9fcdff}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>th,.table-secondary>td{background-color:#d6d8db}.table-secondary th,.table-secondary td,.table-secondary thead th,.table-secondary tbody+tbody{border-color:#b3b7bb}.table-hover .table-secondary:hover{background-color:#c8cbcf}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>th,.table-success>td{background-color:#c3e6cb}.table-success th,.table-success td,.table-success thead th,.table-success tbody+tbody{border-color:#8fd19e}.table-hover .table-success:hover{background-color:#b1dfbb}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>th,.table-info>td{background-color:#bee5eb}.table-info th,.table-info td,.table-info thead th,.table-info tbody+tbody{border-color:#86cfda}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>th,.table-warning>td{background-color:#ffeeba}.table-warning th,.table-warning td,.table-warning thead th,.table-warning tbody+tbody{border-color:#ffdf7e}.table-hover .table-warning:hover{background-color:#ffe8a1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>th,.table-danger>td{background-color:#f5c6cb}.table-danger th,.table-danger td,.table-danger thead th,.table-danger tbody+tbody{border-color:#ed969e}.table-hover .table-danger:hover{background-color:#f1b0b7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>th,.table-light>td{background-color:#fdfdfe}.table-light th,.table-light td,.table-light thead th,.table-light tbody+tbody{border-color:#fbfcfc}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>th,.table-dark>td{background-color:#c6c8ca}.table-dark th,.table-dark td,.table-dark thead th,.table-dark tbody+tbody{border-color:#95999c}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>th,.table-active>td{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#343a40;border-color:#454d55}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#343a40}.table-dark th,.table-dark td,.table-dark thead th{border-color:#454d55}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:rgba(255,255,255,.075)}@media(max-width: 575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media(max-width: 767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media(max-width: 991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media(max-width: 1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + 0.75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}input[type=date].form-control,input[type=time].form-control,input[type=datetime-local].form-control,input[type=month].form-control{appearance:none}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(0.375rem + 1px);padding-bottom:calc(0.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(0.5rem + 1px);padding-bottom:calc(0.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(0.25rem + 1px);padding-bottom:calc(0.25rem + 1px);font-size:0.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;font-size:1rem;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-sm,.form-control-plaintext.form-control-lg{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.5em + 0.5rem + 2px);padding:.25rem .5rem;font-size:0.875rem;line-height:1.5;border-radius:.2rem}.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[size],select.form-control[multiple]{height:auto}textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input[disabled]~.form-check-label,.form-check-input:disabled~.form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:0.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,.9);border-radius:.25rem}.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip,.is-valid~.valid-feedback,.is-valid~.valid-tooltip{display:block}.was-validated .form-control:valid,.form-control.is-valid{border-color:#28a745;padding-right:calc(1.5em + 0.75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(0.375em + 0.1875rem) center;background-size:calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-control:valid:focus,.form-control.is-valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + 0.75rem);background-position:top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)}.was-validated .custom-select:valid,.custom-select.is-valid{border-color:#28a745;padding-right:calc(0.75em + 2.3125rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .custom-select:valid:focus,.custom-select.is-valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.was-validated .form-check-input:valid~.form-check-label,.form-check-input.is-valid~.form-check-label{color:#28a745}.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip,.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip{display:block}.was-validated .custom-control-input:valid~.custom-control-label,.custom-control-input.is-valid~.custom-control-label{color:#28a745}.was-validated .custom-control-input:valid~.custom-control-label::before,.custom-control-input.is-valid~.custom-control-label::before{border-color:#28a745}.was-validated .custom-control-input:valid:checked~.custom-control-label::before,.custom-control-input.is-valid:checked~.custom-control-label::before{border-color:#34ce57;background-color:#34ce57}.was-validated .custom-control-input:valid:focus~.custom-control-label::before,.custom-control-input.is-valid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before,.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before{border-color:#28a745}.was-validated .custom-file-input:valid~.custom-file-label,.custom-file-input.is-valid~.custom-file-label{border-color:#28a745}.was-validated .custom-file-input:valid:focus~.custom-file-label,.custom-file-input.is-valid:focus~.custom-file-label{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:0.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip,.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip{display:block}.was-validated .form-control:invalid,.form-control.is-invalid{border-color:#dc3545;padding-right:calc(1.5em + 0.75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(0.375em + 0.1875rem) center;background-size:calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-control:invalid:focus,.form-control.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + 0.75rem);background-position:top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)}.was-validated .custom-select:invalid,.custom-select.is-invalid{border-color:#dc3545;padding-right:calc(0.75em + 2.3125rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .custom-select:invalid:focus,.custom-select.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.was-validated .form-check-input:invalid~.form-check-label,.form-check-input.is-invalid~.form-check-label{color:#dc3545}.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip,.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip{display:block}.was-validated .custom-control-input:invalid~.custom-control-label,.custom-control-input.is-invalid~.custom-control-label{color:#dc3545}.was-validated .custom-control-input:invalid~.custom-control-label::before,.custom-control-input.is-invalid~.custom-control-label::before{border-color:#dc3545}.was-validated .custom-control-input:invalid:checked~.custom-control-label::before,.custom-control-input.is-invalid:checked~.custom-control-label::before{border-color:#e4606d;background-color:#e4606d}.was-validated .custom-control-input:invalid:focus~.custom-control-label::before,.custom-control-input.is-invalid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before,.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before{border-color:#dc3545}.was-validated .custom-file-input:invalid~.custom-file-label,.custom-file-input.is-invalid~.custom-file-label{border-color:#dc3545}.was-validated .custom-file-input:invalid:focus~.custom-file-label,.custom-file-input.is-invalid:focus~.custom-file-label{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:flex;flex-flow:row wrap;align-items:center}.form-inline .form-check{width:100%}@media(min-width: 576px){.form-inline label{display:flex;align-items:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:flex;flex:0 0 auto;flex-flow:row wrap;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .input-group,.form-inline .custom-select{width:auto}.form-inline .form-check{display:flex;align-items:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.btn{transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn:focus,.btn.focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary:focus,.btn-primary.focus{color:#fff;background-color:#0069d9;border-color:#0062cc;box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled):active,.btn-primary:not(:disabled):not(.disabled).active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled):active:focus,.btn-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary:focus,.btn-secondary.focus{color:#fff;background-color:#5a6268;border-color:#545b62;box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled):active,.btn-secondary:not(:disabled):not(.disabled).active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled):active:focus,.btn-secondary:not(:disabled):not(.disabled).active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success:focus,.btn-success.focus{color:#fff;background-color:#218838;border-color:#1e7e34;box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled):active,.btn-success:not(:disabled):not(.disabled).active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled):active:focus,.btn-success:not(:disabled):not(.disabled).active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info:focus,.btn-info.focus{color:#fff;background-color:#138496;border-color:#117a8b;box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled):active,.btn-info:not(:disabled):not(.disabled).active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled):active:focus,.btn-info:not(:disabled):not(.disabled).active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning:focus,.btn-warning.focus{color:#212529;background-color:#e0a800;border-color:#d39e00;box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled):active,.btn-warning:not(:disabled):not(.disabled).active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled):active:focus,.btn-warning:not(:disabled):not(.disabled).active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger:focus,.btn-danger.focus{color:#fff;background-color:#c82333;border-color:#bd2130;box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled):active,.btn-danger:not(:disabled):not(.disabled).active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled):active:focus,.btn-danger:not(:disabled):not(.disabled).active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light:focus,.btn-light.focus{color:#212529;background-color:#e2e6ea;border-color:#dae0e5;box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled):active,.btn-light:not(:disabled):not(.disabled).active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled):active:focus,.btn-light:not(:disabled):not(.disabled).active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark:focus,.btn-dark.focus{color:#fff;background-color:#23272b;border-color:#1d2124;box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled):active,.btn-dark:not(:disabled):not(.disabled).active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled):active:focus,.btn-dark:not(:disabled):not(.disabled).active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-outline-primary{color:#007bff;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:focus,.btn-outline-primary.focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled):active,.btn-outline-primary:not(:disabled):not(.disabled).active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:focus,.btn-outline-secondary.focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled):active,.btn-outline-secondary:not(:disabled):not(.disabled).active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-success{color:#28a745;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:focus,.btn-outline-success.focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled):active,.btn-outline-success:not(:disabled):not(.disabled).active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled):active:focus,.btn-outline-success:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-info{color:#17a2b8;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:focus,.btn-outline-info.focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled):active,.btn-outline-info:not(:disabled):not(.disabled).active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled):active:focus,.btn-outline-info:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:focus,.btn-outline-warning.focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled):active,.btn-outline-warning:not(:disabled):not(.disabled).active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:focus,.btn-outline-danger.focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled):active,.btn-outline-danger:not(:disabled):not(.disabled).active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:focus,.btn-outline-light.focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled):active,.btn-outline-light:not(:disabled):not(.disabled).active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled):active:focus,.btn-outline-light:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark{color:#343a40;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:focus,.btn-outline-dark.focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled):active,.btn-outline-dark:not(:disabled):not(.disabled).active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-link{font-weight:400;color:#007bff;text-decoration:none}.btn-link:hover{color:#0056b3;text-decoration:underline}.btn-link:focus,.btn-link.focus{text-decoration:underline}.btn-link:disabled,.btn-link.disabled{color:#6c757d;pointer-events:none}.btn-lg,.btn-group-lg>.btn{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-sm,.btn-group-sm>.btn{padding:.25rem .5rem;font-size:0.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=submit].btn-block,input[type=reset].btn-block,input[type=button].btn-block{width:100%}.fade{transition:opacity .15s linear}@media(prefers-reduced-motion: reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}@media(prefers-reduced-motion: reduce){.collapsing{transition:none}}.dropup,.dropright,.dropdown,.dropleft{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media(min-width: 576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media(min-width: 768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media(min-width: 992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media(min-width: 1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-toggle::after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle::after{display:none}.dropleft .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty::after{margin-left:0}.dropleft .dropdown-toggle::before{vertical-align:0}.dropdown-menu[x-placement^=top],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:0.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;flex:1 1 auto}.btn-group>.btn:hover,.btn-group-vertical>.btn:hover{z-index:1}.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn.active{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child){margin-left:-1px}.btn-group>.btn:not(:last-child):not(.dropdown-toggle),.btn-group>.btn-group:not(:last-child)>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-sm+.dropdown-toggle-split,.btn-group-sm>.btn+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-lg+.dropdown-toggle-split,.btn-group-lg>.btn+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),.btn-group-vertical>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox]{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-control-plaintext,.input-group>.custom-select,.input-group>.custom-file{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}.input-group>.form-control+.form-control,.input-group>.form-control+.custom-select,.input-group>.form-control+.custom-file,.input-group>.form-control-plaintext+.form-control,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.custom-file,.input-group>.custom-select+.form-control,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.custom-file,.input-group>.custom-file+.form-control,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.custom-file{margin-left:-1px}.input-group>.form-control:focus,.input-group>.custom-select:focus,.input-group>.custom-file .custom-file-input:focus~.custom-file-label{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.form-control:not(:last-child),.input-group>.custom-select:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.form-control:not(:first-child),.input-group>.custom-select:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:flex;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-prepend,.input-group-append{display:flex}.input-group-prepend .btn,.input-group-append .btn{position:relative;z-index:2}.input-group-prepend .btn:focus,.input-group-append .btn:focus{z-index:3}.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.input-group-text,.input-group-append .input-group-text+.btn{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=radio],.input-group-text input[type=checkbox]{margin-top:0}.input-group-lg>.form-control:not(textarea),.input-group-lg>.custom-select{height:calc(1.5em + 1rem + 2px)}.input-group-lg>.form-control,.input-group-lg>.custom-select,.input-group-lg>.input-group-prepend>.input-group-text,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-append>.btn{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-sm>.form-control:not(textarea),.input-group-sm>.custom-select{height:calc(1.5em + 0.5rem + 2px)}.input-group-sm>.form-control,.input-group-sm>.custom-select,.input-group-sm>.input-group-prepend>.input-group-text,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-append>.btn{padding:.25rem .5rem;font-size:0.875rem;line-height:1.5;border-radius:.2rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text,.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}.custom-control-inline{display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;left:0;z-index:-1;width:1rem;height:1.25rem;opacity:0}.custom-control-input:checked~.custom-control-label::before{color:#fff;border-color:#007bff;background-color:#007bff}.custom-control-input:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:focus:not(:checked)~.custom-control-label::before{border-color:#80bdff}.custom-control-input:not(:disabled):active~.custom-control-label::before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff}.custom-control-input[disabled]~.custom-control-label,.custom-control-input:disabled~.custom-control-label{color:#6c757d}.custom-control-input[disabled]~.custom-control-label::before,.custom-control-input:disabled~.custom-control-label::before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label::before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:\"\";background-color:#fff;border:#adb5bd solid 1px}.custom-control-label::after{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\";background:no-repeat 50%/50% 50%}.custom-checkbox .custom-control-label::before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before{border-color:#007bff;background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-radio .custom-control-label::before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label::before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label::after{top:calc(0.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.custom-switch .custom-control-label::after{transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label::after{background-color:#fff;transform:translateX(0.75rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-select{display:inline-block;width:100%;height:calc(1.5em + 0.75rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px;border:1px solid #ced4da;border-radius:.25rem;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{display:none}.custom-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.custom-select-sm{height:calc(1.5em + 0.5rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:0.875rem}.custom-select-lg{height:calc(1.5em + 1rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.custom-file{position:relative;display:inline-block;width:100%;height:calc(1.5em + 0.75rem + 2px);margin-bottom:0}.custom-file-input{position:relative;z-index:2;width:100%;height:calc(1.5em + 0.75rem + 2px);margin:0;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-file-input[disabled]~.custom-file-label,.custom-file-input:disabled~.custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en)~.custom-file-label::after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse]::after{content:attr(data-browse)}.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(1.5em + 0.75rem + 2px);padding:.375rem .75rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:calc(1.5em + 0.75rem);padding:.375rem .75rem;line-height:1.5;color:#495057;content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;height:1.4rem;padding:0;background-color:transparent;appearance:none}.custom-range:focus{outline:none}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-0.25rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.custom-range::-webkit-slider-thumb{transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.custom-range::-moz-range-thumb{transition:none}}.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.custom-range::-ms-thumb{transition:none}}.custom-range::-ms-thumb:active{background-color:#b3d7ff}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px;background-color:#dee2e6;border-radius:1rem}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label::before,.custom-file-label,.custom-select{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.custom-control-label::before,.custom-file-label,.custom-select{transition:none}}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:hover,.nav-link:focus{text-decoration:none}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-link.active,.nav-tabs .nav-item.show .nav-link{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item{flex:1 1 auto;text-align:center}.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:.5rem 1rem}.navbar .container,.navbar .container-fluid,.navbar .container-sm,.navbar .container-md,.navbar .container-lg,.navbar .container-xl{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:hover,.navbar-brand:focus{text-decoration:none}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:hover,.navbar-toggler:focus{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat center center;background-size:100% 100%}@media(max-width: 575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-xl{padding-right:0;padding-left:0}}@media(min-width: 576px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-xl{flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media(max-width: 767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-md,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-xl{padding-right:0;padding-left:0}}@media(min-width: 768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-md,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-xl{flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media(max-width: 991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-xl{padding-right:0;padding-left:0}}@media(min-width: 992px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-xl{flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media(max-width: 1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-xl{padding-right:0;padding-left:0}}@media(min-width: 1200px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-xl{flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-sm,.navbar-expand>.container-md,.navbar-expand>.container-lg,.navbar-expand>.container-xl{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-sm,.navbar-expand>.container-md,.navbar-expand>.container-lg,.navbar-expand>.container-xl{flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:hover,.navbar-light .navbar-brand:focus{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:hover,.navbar-light .navbar-nav .nav-link:focus{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .show>.nav-link,.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .nav-link.active{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a{color:rgba(0,0,0,.9)}.navbar-light .navbar-text a:hover,.navbar-light .navbar-text a:focus{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:hover,.navbar-dark .navbar-brand:focus{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.5)}.navbar-dark .navbar-nav .nav-link:hover,.navbar-dark .navbar-nav .nav-link:focus{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .show>.nav-link,.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .nav-link.active{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.5);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-dark .navbar-text{color:rgba(255,255,255,.5)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:hover,.navbar-dark .navbar-text a:focus{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:calc(0.25rem - 1px);border-top-right-radius:calc(0.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:calc(0.25rem - 1px);border-bottom-left-radius:calc(0.25rem - 1px)}.card-body{flex:1 1 auto;min-height:1px;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-0.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)}.card-header-tabs{margin-right:-0.625rem;margin-bottom:-0.75rem;margin-left:-0.625rem;border-bottom:0}.card-header-pills{margin-right:-0.625rem;margin-left:-0.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img,.card-img-top,.card-img-bottom{flex-shrink:0;width:100%}.card-img,.card-img-top{border-top-left-radius:calc(0.25rem - 1px);border-top-right-radius:calc(0.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(0.25rem - 1px);border-bottom-left-radius:calc(0.25rem - 1px)}.card-deck .card{margin-bottom:15px}@media(min-width: 576px){.card-deck{display:flex;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{flex:1 0 0%;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group>.card{margin-bottom:15px}@media(min-width: 576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-img-top,.card-group>.card:not(:last-child) .card-header{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-img-bottom,.card-group>.card:not(:last-child) .card-footer{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-img-top,.card-group>.card:not(:first-child) .card-header{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-img-bottom,.card-group>.card:not(:first-child) .card-footer{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:.75rem}@media(min-width: 576px){.card-columns{column-count:3;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion>.card{overflow:hidden}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card>.card-header{border-radius:0;margin-bottom:-1px}.breadcrumb{display:flex;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item{display:flex}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;color:#6c757d;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:0.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.badge{transition:none}}a.badge:hover,a.badge:focus{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}a.badge-primary:hover,a.badge-primary:focus{color:#fff;background-color:#0062cc}a.badge-primary:focus,a.badge-primary.focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.badge-secondary{color:#fff;background-color:#6c757d}a.badge-secondary:hover,a.badge-secondary:focus{color:#fff;background-color:#545b62}a.badge-secondary:focus,a.badge-secondary.focus{outline:0;box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.badge-success{color:#fff;background-color:#28a745}a.badge-success:hover,a.badge-success:focus{color:#fff;background-color:#1e7e34}a.badge-success:focus,a.badge-success.focus{outline:0;box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:hover,a.badge-info:focus{color:#fff;background-color:#117a8b}a.badge-info:focus,a.badge-info.focus{outline:0;box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.badge-warning{color:#212529;background-color:#ffc107}a.badge-warning:hover,a.badge-warning:focus{color:#212529;background-color:#d39e00}a.badge-warning:focus,a.badge-warning.focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.badge-danger{color:#fff;background-color:#dc3545}a.badge-danger:hover,a.badge-danger:focus{color:#fff;background-color:#bd2130}a.badge-danger:focus,a.badge-danger.focus{outline:0;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.badge-light{color:#212529;background-color:#f8f9fa}a.badge-light:hover,a.badge-light:focus{color:#212529;background-color:#dae0e5}a.badge-light:focus,a.badge-light.focus{outline:0;box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.badge-dark{color:#fff;background-color:#343a40}a.badge-dark:hover,a.badge-dark:focus{color:#fff;background-color:#1d2124}a.badge-dark:focus,a.badge-dark.focus{outline:0;box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media(min-width: 576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:flex;height:1rem;overflow:hidden;line-height:0;font-size:0.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width .6s ease}@media(prefers-reduced-motion: reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);background-size:1rem 1rem}.progress-bar-animated{animation:progress-bar-stripes 1s linear infinite}@media(prefers-reduced-motion: reduce){.progress-bar-animated{animation:none}}.media{display:flex;align-items:flex-start}.media-body{flex:1}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:.25rem}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:hover,.list-group-item-action:focus{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media(min-width: 576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media(min-width: 768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media(min-width: 992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media(min-width: 1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:hover,.list-group-item-primary.list-group-item-action:focus{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:hover,.list-group-item-secondary.list-group-item-action:focus{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:hover,.list-group-item-success.list-group-item-action:focus{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:hover,.list-group-item-info.list-group-item-action:focus{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:hover,.list-group-item-warning.list-group-item-action:focus{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:hover,.list-group-item-danger.list-group-item-action:focus{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:hover,.list-group-item-light.list-group-item-action:focus{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:hover,.list-group-item-dark.list-group-item-action:focus{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):hover,.close:not(:disabled):not(.disabled):focus{opacity:.75}button.close{padding:0;background-color:transparent;border:0}a.close.disabled{pointer-events:none}.toast{max-width:350px;overflow:hidden;font-size:0.875rem;background-color:rgba(255,255,255,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);backdrop-filter:blur(10px);opacity:0;border-radius:.25rem}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:flex;align-items:center;padding:.25rem .75rem;color:#6c757d;background-color:rgba(255,255,255,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translate(0, -50px)}@media(prefers-reduced-motion: reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-header,.modal-dialog-scrollable .modal-footer{flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered::before{display:block;height:calc(100vh - 1rem);height:min-content;content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{flex-direction:column;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable::before{content:none}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(0.3rem - 1px);border-top-right-radius:calc(0.3rem - 1px)}.modal-header .close{padding:1rem 1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(0.3rem - 1px);border-bottom-left-radius:calc(0.3rem - 1px)}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media(min-width: 576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered::before{height:calc(100vh - 3.5rem);height:min-content}.modal-sm{max-width:300px}}@media(min-width: 992px){.modal-lg,.modal-xl{max-width:800px}}@media(min-width: 1200px){.modal-xl{max-width:1140px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:0.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-top,.bs-tooltip-auto[x-placement^=top]{padding:.4rem 0}.bs-tooltip-top .arrow,.bs-tooltip-auto[x-placement^=top] .arrow{bottom:0}.bs-tooltip-top .arrow::before,.bs-tooltip-auto[x-placement^=top] .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-right,.bs-tooltip-auto[x-placement^=right]{padding:0 .4rem}.bs-tooltip-right .arrow,.bs-tooltip-auto[x-placement^=right] .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-right .arrow::before,.bs-tooltip-auto[x-placement^=right] .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-bottom,.bs-tooltip-auto[x-placement^=bottom]{padding:.4rem 0}.bs-tooltip-bottom .arrow,.bs-tooltip-auto[x-placement^=bottom] .arrow{top:0}.bs-tooltip-bottom .arrow::before,.bs-tooltip-auto[x-placement^=bottom] .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-left,.bs-tooltip-auto[x-placement^=left]{padding:0 .4rem}.bs-tooltip-left .arrow,.bs-tooltip-auto[x-placement^=left] .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-left .arrow::before,.bs-tooltip-auto[x-placement^=left] .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:0.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow::before,.popover .arrow::after{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-top,.bs-popover-auto[x-placement^=top]{margin-bottom:.5rem}.bs-popover-top>.arrow,.bs-popover-auto[x-placement^=top]>.arrow{bottom:calc(-0.5rem - 1px)}.bs-popover-top>.arrow::before,.bs-popover-auto[x-placement^=top]>.arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-top>.arrow::after,.bs-popover-auto[x-placement^=top]>.arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-right,.bs-popover-auto[x-placement^=right]{margin-left:.5rem}.bs-popover-right>.arrow,.bs-popover-auto[x-placement^=right]>.arrow{left:calc(-0.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-right>.arrow::before,.bs-popover-auto[x-placement^=right]>.arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-right>.arrow::after,.bs-popover-auto[x-placement^=right]>.arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-bottom,.bs-popover-auto[x-placement^=bottom]{margin-top:.5rem}.bs-popover-bottom>.arrow,.bs-popover-auto[x-placement^=bottom]>.arrow{top:calc(-0.5rem - 1px)}.bs-popover-bottom>.arrow::before,.bs-popover-auto[x-placement^=bottom]>.arrow::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-bottom>.arrow::after,.bs-popover-auto[x-placement^=bottom]>.arrow::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bs-popover-bottom .popover-header::before,.bs-popover-auto[x-placement^=bottom] .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-0.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-left,.bs-popover-auto[x-placement^=left]{margin-right:.5rem}.bs-popover-left>.arrow,.bs-popover-auto[x-placement^=left]>.arrow{right:calc(-0.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-left>.arrow::before,.bs-popover-auto[x-placement^=left]>.arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-left>.arrow::after,.bs-popover-auto[x-placement^=left]>.arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(0.3rem - 1px);border-top-right-radius:calc(0.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;backface-visibility:hidden;transition:transform .6s ease-in-out}@media(prefers-reduced-motion: reduce){.carousel-item{transition:none}}.carousel-item.active,.carousel-item-next,.carousel-item-prev{display:block}.carousel-item-next:not(.carousel-item-left),.active.carousel-item-right{transform:translateX(100%)}.carousel-item-prev:not(.carousel-item-right),.active.carousel-item-left{transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item.active,.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:opacity 0s .6s}@media(prefers-reduced-motion: reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-prev,.carousel-control-next{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s ease}@media(prefers-reduced-motion: reduce){.carousel-control-prev,.carousel-control-next{transition:none}}.carousel-control-prev:hover,.carousel-control-prev:focus,.carousel-control-next:hover,.carousel-control-next:focus{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-prev-icon,.carousel-control-next-icon{display:inline-block;width:20px;height:20px;background:no-repeat 50%/100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media(prefers-reduced-motion: reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;animation:spinner-border .75s linear infinite}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;animation:spinner-grow .75s linear infinite}.spinner-grow-sm{width:1rem;height:1rem}.align-baseline{vertical-align:baseline !important}.align-top{vertical-align:top !important}.align-middle{vertical-align:middle !important}.align-bottom{vertical-align:bottom !important}.align-text-bottom{vertical-align:text-bottom !important}.align-text-top{vertical-align:text-top !important}.bg-primary{background-color:#007bff !important}a.bg-primary:hover,a.bg-primary:focus,button.bg-primary:hover,button.bg-primary:focus{background-color:#0062cc !important}.bg-secondary{background-color:#6c757d !important}a.bg-secondary:hover,a.bg-secondary:focus,button.bg-secondary:hover,button.bg-secondary:focus{background-color:#545b62 !important}.bg-success{background-color:#28a745 !important}a.bg-success:hover,a.bg-success:focus,button.bg-success:hover,button.bg-success:focus{background-color:#1e7e34 !important}.bg-info{background-color:#17a2b8 !important}a.bg-info:hover,a.bg-info:focus,button.bg-info:hover,button.bg-info:focus{background-color:#117a8b !important}.bg-warning{background-color:#ffc107 !important}a.bg-warning:hover,a.bg-warning:focus,button.bg-warning:hover,button.bg-warning:focus{background-color:#d39e00 !important}.bg-danger{background-color:#dc3545 !important}a.bg-danger:hover,a.bg-danger:focus,button.bg-danger:hover,button.bg-danger:focus{background-color:#bd2130 !important}.bg-light{background-color:#f8f9fa !important}a.bg-light:hover,a.bg-light:focus,button.bg-light:hover,button.bg-light:focus{background-color:#dae0e5 !important}.bg-dark{background-color:#343a40 !important}a.bg-dark:hover,a.bg-dark:focus,button.bg-dark:hover,button.bg-dark:focus{background-color:#1d2124 !important}.bg-white{background-color:#fff !important}.bg-transparent{background-color:transparent !important}.border{border:1px solid #dee2e6 !important}.border-top{border-top:1px solid #dee2e6 !important}.border-right{border-right:1px solid #dee2e6 !important}.border-bottom{border-bottom:1px solid #dee2e6 !important}.border-left{border-left:1px solid #dee2e6 !important}.border-0{border:0 !important}.border-top-0{border-top:0 !important}.border-right-0{border-right:0 !important}.border-bottom-0{border-bottom:0 !important}.border-left-0{border-left:0 !important}.border-primary{border-color:#007bff !important}.border-secondary{border-color:#6c757d !important}.border-success{border-color:#28a745 !important}.border-info{border-color:#17a2b8 !important}.border-warning{border-color:#ffc107 !important}.border-danger{border-color:#dc3545 !important}.border-light{border-color:#f8f9fa !important}.border-dark{border-color:#343a40 !important}.border-white{border-color:#fff !important}.rounded-sm{border-radius:.2rem !important}.rounded{border-radius:.25rem !important}.rounded-top{border-top-left-radius:.25rem !important;border-top-right-radius:.25rem !important}.rounded-right{border-top-right-radius:.25rem !important;border-bottom-right-radius:.25rem !important}.rounded-bottom{border-bottom-right-radius:.25rem !important;border-bottom-left-radius:.25rem !important}.rounded-left{border-top-left-radius:.25rem !important;border-bottom-left-radius:.25rem !important}.rounded-lg{border-radius:.3rem !important}.rounded-circle{border-radius:50% !important}.rounded-pill{border-radius:50rem !important}.rounded-0{border-radius:0 !important}.clearfix::after{display:block;clear:both;content:\"\"}.d-none{display:none !important}.d-inline{display:inline !important}.d-inline-block{display:inline-block !important}.d-block{display:block !important}.d-table{display:table !important}.d-table-row{display:table-row !important}.d-table-cell{display:table-cell !important}.d-flex{display:flex !important}.d-inline-flex{display:inline-flex !important}@media(min-width: 576px){.d-sm-none{display:none !important}.d-sm-inline{display:inline !important}.d-sm-inline-block{display:inline-block !important}.d-sm-block{display:block !important}.d-sm-table{display:table !important}.d-sm-table-row{display:table-row !important}.d-sm-table-cell{display:table-cell !important}.d-sm-flex{display:flex !important}.d-sm-inline-flex{display:inline-flex !important}}@media(min-width: 768px){.d-md-none{display:none !important}.d-md-inline{display:inline !important}.d-md-inline-block{display:inline-block !important}.d-md-block{display:block !important}.d-md-table{display:table !important}.d-md-table-row{display:table-row !important}.d-md-table-cell{display:table-cell !important}.d-md-flex{display:flex !important}.d-md-inline-flex{display:inline-flex !important}}@media(min-width: 992px){.d-lg-none{display:none !important}.d-lg-inline{display:inline !important}.d-lg-inline-block{display:inline-block !important}.d-lg-block{display:block !important}.d-lg-table{display:table !important}.d-lg-table-row{display:table-row !important}.d-lg-table-cell{display:table-cell !important}.d-lg-flex{display:flex !important}.d-lg-inline-flex{display:inline-flex !important}}@media(min-width: 1200px){.d-xl-none{display:none !important}.d-xl-inline{display:inline !important}.d-xl-inline-block{display:inline-block !important}.d-xl-block{display:block !important}.d-xl-table{display:table !important}.d-xl-table-row{display:table-row !important}.d-xl-table-cell{display:table-cell !important}.d-xl-flex{display:flex !important}.d-xl-inline-flex{display:inline-flex !important}}@media print{.d-print-none{display:none !important}.d-print-inline{display:inline !important}.d-print-inline-block{display:inline-block !important}.d-print-block{display:block !important}.d-print-table{display:table !important}.d-print-table-row{display:table-row !important}.d-print-table-cell{display:table-cell !important}.d-print-flex{display:flex !important}.d-print-inline-flex{display:inline-flex !important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive iframe,.embed-responsive embed,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.8571428571%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{flex-direction:row !important}.flex-column{flex-direction:column !important}.flex-row-reverse{flex-direction:row-reverse !important}.flex-column-reverse{flex-direction:column-reverse !important}.flex-wrap{flex-wrap:wrap !important}.flex-nowrap{flex-wrap:nowrap !important}.flex-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-fill{flex:1 1 auto !important}.flex-grow-0{flex-grow:0 !important}.flex-grow-1{flex-grow:1 !important}.flex-shrink-0{flex-shrink:0 !important}.flex-shrink-1{flex-shrink:1 !important}.justify-content-start{justify-content:flex-start !important}.justify-content-end{justify-content:flex-end !important}.justify-content-center{justify-content:center !important}.justify-content-between{justify-content:space-between !important}.justify-content-around{justify-content:space-around !important}.align-items-start{align-items:flex-start !important}.align-items-end{align-items:flex-end !important}.align-items-center{align-items:center !important}.align-items-baseline{align-items:baseline !important}.align-items-stretch{align-items:stretch !important}.align-content-start{align-content:flex-start !important}.align-content-end{align-content:flex-end !important}.align-content-center{align-content:center !important}.align-content-between{align-content:space-between !important}.align-content-around{align-content:space-around !important}.align-content-stretch{align-content:stretch !important}.align-self-auto{align-self:auto !important}.align-self-start{align-self:flex-start !important}.align-self-end{align-self:flex-end !important}.align-self-center{align-self:center !important}.align-self-baseline{align-self:baseline !important}.align-self-stretch{align-self:stretch !important}@media(min-width: 576px){.flex-sm-row{flex-direction:row !important}.flex-sm-column{flex-direction:column !important}.flex-sm-row-reverse{flex-direction:row-reverse !important}.flex-sm-column-reverse{flex-direction:column-reverse !important}.flex-sm-wrap{flex-wrap:wrap !important}.flex-sm-nowrap{flex-wrap:nowrap !important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-sm-fill{flex:1 1 auto !important}.flex-sm-grow-0{flex-grow:0 !important}.flex-sm-grow-1{flex-grow:1 !important}.flex-sm-shrink-0{flex-shrink:0 !important}.flex-sm-shrink-1{flex-shrink:1 !important}.justify-content-sm-start{justify-content:flex-start !important}.justify-content-sm-end{justify-content:flex-end !important}.justify-content-sm-center{justify-content:center !important}.justify-content-sm-between{justify-content:space-between !important}.justify-content-sm-around{justify-content:space-around !important}.align-items-sm-start{align-items:flex-start !important}.align-items-sm-end{align-items:flex-end !important}.align-items-sm-center{align-items:center !important}.align-items-sm-baseline{align-items:baseline !important}.align-items-sm-stretch{align-items:stretch !important}.align-content-sm-start{align-content:flex-start !important}.align-content-sm-end{align-content:flex-end !important}.align-content-sm-center{align-content:center !important}.align-content-sm-between{align-content:space-between !important}.align-content-sm-around{align-content:space-around !important}.align-content-sm-stretch{align-content:stretch !important}.align-self-sm-auto{align-self:auto !important}.align-self-sm-start{align-self:flex-start !important}.align-self-sm-end{align-self:flex-end !important}.align-self-sm-center{align-self:center !important}.align-self-sm-baseline{align-self:baseline !important}.align-self-sm-stretch{align-self:stretch !important}}@media(min-width: 768px){.flex-md-row{flex-direction:row !important}.flex-md-column{flex-direction:column !important}.flex-md-row-reverse{flex-direction:row-reverse !important}.flex-md-column-reverse{flex-direction:column-reverse !important}.flex-md-wrap{flex-wrap:wrap !important}.flex-md-nowrap{flex-wrap:nowrap !important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-md-fill{flex:1 1 auto !important}.flex-md-grow-0{flex-grow:0 !important}.flex-md-grow-1{flex-grow:1 !important}.flex-md-shrink-0{flex-shrink:0 !important}.flex-md-shrink-1{flex-shrink:1 !important}.justify-content-md-start{justify-content:flex-start !important}.justify-content-md-end{justify-content:flex-end !important}.justify-content-md-center{justify-content:center !important}.justify-content-md-between{justify-content:space-between !important}.justify-content-md-around{justify-content:space-around !important}.align-items-md-start{align-items:flex-start !important}.align-items-md-end{align-items:flex-end !important}.align-items-md-center{align-items:center !important}.align-items-md-baseline{align-items:baseline !important}.align-items-md-stretch{align-items:stretch !important}.align-content-md-start{align-content:flex-start !important}.align-content-md-end{align-content:flex-end !important}.align-content-md-center{align-content:center !important}.align-content-md-between{align-content:space-between !important}.align-content-md-around{align-content:space-around !important}.align-content-md-stretch{align-content:stretch !important}.align-self-md-auto{align-self:auto !important}.align-self-md-start{align-self:flex-start !important}.align-self-md-end{align-self:flex-end !important}.align-self-md-center{align-self:center !important}.align-self-md-baseline{align-self:baseline !important}.align-self-md-stretch{align-self:stretch !important}}@media(min-width: 992px){.flex-lg-row{flex-direction:row !important}.flex-lg-column{flex-direction:column !important}.flex-lg-row-reverse{flex-direction:row-reverse !important}.flex-lg-column-reverse{flex-direction:column-reverse !important}.flex-lg-wrap{flex-wrap:wrap !important}.flex-lg-nowrap{flex-wrap:nowrap !important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-lg-fill{flex:1 1 auto !important}.flex-lg-grow-0{flex-grow:0 !important}.flex-lg-grow-1{flex-grow:1 !important}.flex-lg-shrink-0{flex-shrink:0 !important}.flex-lg-shrink-1{flex-shrink:1 !important}.justify-content-lg-start{justify-content:flex-start !important}.justify-content-lg-end{justify-content:flex-end !important}.justify-content-lg-center{justify-content:center !important}.justify-content-lg-between{justify-content:space-between !important}.justify-content-lg-around{justify-content:space-around !important}.align-items-lg-start{align-items:flex-start !important}.align-items-lg-end{align-items:flex-end !important}.align-items-lg-center{align-items:center !important}.align-items-lg-baseline{align-items:baseline !important}.align-items-lg-stretch{align-items:stretch !important}.align-content-lg-start{align-content:flex-start !important}.align-content-lg-end{align-content:flex-end !important}.align-content-lg-center{align-content:center !important}.align-content-lg-between{align-content:space-between !important}.align-content-lg-around{align-content:space-around !important}.align-content-lg-stretch{align-content:stretch !important}.align-self-lg-auto{align-self:auto !important}.align-self-lg-start{align-self:flex-start !important}.align-self-lg-end{align-self:flex-end !important}.align-self-lg-center{align-self:center !important}.align-self-lg-baseline{align-self:baseline !important}.align-self-lg-stretch{align-self:stretch !important}}@media(min-width: 1200px){.flex-xl-row{flex-direction:row !important}.flex-xl-column{flex-direction:column !important}.flex-xl-row-reverse{flex-direction:row-reverse !important}.flex-xl-column-reverse{flex-direction:column-reverse !important}.flex-xl-wrap{flex-wrap:wrap !important}.flex-xl-nowrap{flex-wrap:nowrap !important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-xl-fill{flex:1 1 auto !important}.flex-xl-grow-0{flex-grow:0 !important}.flex-xl-grow-1{flex-grow:1 !important}.flex-xl-shrink-0{flex-shrink:0 !important}.flex-xl-shrink-1{flex-shrink:1 !important}.justify-content-xl-start{justify-content:flex-start !important}.justify-content-xl-end{justify-content:flex-end !important}.justify-content-xl-center{justify-content:center !important}.justify-content-xl-between{justify-content:space-between !important}.justify-content-xl-around{justify-content:space-around !important}.align-items-xl-start{align-items:flex-start !important}.align-items-xl-end{align-items:flex-end !important}.align-items-xl-center{align-items:center !important}.align-items-xl-baseline{align-items:baseline !important}.align-items-xl-stretch{align-items:stretch !important}.align-content-xl-start{align-content:flex-start !important}.align-content-xl-end{align-content:flex-end !important}.align-content-xl-center{align-content:center !important}.align-content-xl-between{align-content:space-between !important}.align-content-xl-around{align-content:space-around !important}.align-content-xl-stretch{align-content:stretch !important}.align-self-xl-auto{align-self:auto !important}.align-self-xl-start{align-self:flex-start !important}.align-self-xl-end{align-self:flex-end !important}.align-self-xl-center{align-self:center !important}.align-self-xl-baseline{align-self:baseline !important}.align-self-xl-stretch{align-self:stretch !important}}.float-left{float:left !important}.float-right{float:right !important}.float-none{float:none !important}@media(min-width: 576px){.float-sm-left{float:left !important}.float-sm-right{float:right !important}.float-sm-none{float:none !important}}@media(min-width: 768px){.float-md-left{float:left !important}.float-md-right{float:right !important}.float-md-none{float:none !important}}@media(min-width: 992px){.float-lg-left{float:left !important}.float-lg-right{float:right !important}.float-lg-none{float:none !important}}@media(min-width: 1200px){.float-xl-left{float:left !important}.float-xl-right{float:right !important}.float-xl-none{float:none !important}}.user-select-all{user-select:all !important}.user-select-auto{user-select:auto !important}.user-select-none{user-select:none !important}.overflow-auto{overflow:auto !important}.overflow-hidden{overflow:hidden !important}.position-static{position:static !important}.position-relative{position:relative !important}.position-absolute{position:absolute !important}.position-fixed{position:fixed !important}.position-sticky{position:sticky !important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports(position: sticky){.sticky-top{position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075) !important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15) !important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175) !important}.shadow-none{box-shadow:none !important}.w-25{width:25% !important}.w-50{width:50% !important}.w-75{width:75% !important}.w-100{width:100% !important}.w-auto{width:auto !important}.h-25{height:25% !important}.h-50{height:50% !important}.h-75{height:75% !important}.h-100{height:100% !important}.h-auto{height:auto !important}.mw-100{max-width:100% !important}.mh-100{max-height:100% !important}.min-vw-100{min-width:100vw !important}.min-vh-100{min-height:100vh !important}.vw-100{width:100vw !important}.vh-100{height:100vh !important}.m-0{margin:0 !important}.mt-0,.my-0{margin-top:0 !important}.mr-0,.mx-0{margin-right:0 !important}.mb-0,.my-0{margin-bottom:0 !important}.ml-0,.mx-0{margin-left:0 !important}.m-1{margin:.25rem !important}.mt-1,.my-1{margin-top:.25rem !important}.mr-1,.mx-1{margin-right:.25rem !important}.mb-1,.my-1{margin-bottom:.25rem !important}.ml-1,.mx-1{margin-left:.25rem !important}.m-2{margin:.5rem !important}.mt-2,.my-2{margin-top:.5rem !important}.mr-2,.mx-2{margin-right:.5rem !important}.mb-2,.my-2{margin-bottom:.5rem !important}.ml-2,.mx-2{margin-left:.5rem !important}.m-3{margin:1rem !important}.mt-3,.my-3{margin-top:1rem !important}.mr-3,.mx-3{margin-right:1rem !important}.mb-3,.my-3{margin-bottom:1rem !important}.ml-3,.mx-3{margin-left:1rem !important}.m-4{margin:1.5rem !important}.mt-4,.my-4{margin-top:1.5rem !important}.mr-4,.mx-4{margin-right:1.5rem !important}.mb-4,.my-4{margin-bottom:1.5rem !important}.ml-4,.mx-4{margin-left:1.5rem !important}.m-5{margin:3rem !important}.mt-5,.my-5{margin-top:3rem !important}.mr-5,.mx-5{margin-right:3rem !important}.mb-5,.my-5{margin-bottom:3rem !important}.ml-5,.mx-5{margin-left:3rem !important}.p-0{padding:0 !important}.pt-0,.py-0{padding-top:0 !important}.pr-0,.px-0{padding-right:0 !important}.pb-0,.py-0{padding-bottom:0 !important}.pl-0,.px-0{padding-left:0 !important}.p-1{padding:.25rem !important}.pt-1,.py-1{padding-top:.25rem !important}.pr-1,.px-1{padding-right:.25rem !important}.pb-1,.py-1{padding-bottom:.25rem !important}.pl-1,.px-1{padding-left:.25rem !important}.p-2{padding:.5rem !important}.pt-2,.py-2{padding-top:.5rem !important}.pr-2,.px-2{padding-right:.5rem !important}.pb-2,.py-2{padding-bottom:.5rem !important}.pl-2,.px-2{padding-left:.5rem !important}.p-3{padding:1rem !important}.pt-3,.py-3{padding-top:1rem !important}.pr-3,.px-3{padding-right:1rem !important}.pb-3,.py-3{padding-bottom:1rem !important}.pl-3,.px-3{padding-left:1rem !important}.p-4{padding:1.5rem !important}.pt-4,.py-4{padding-top:1.5rem !important}.pr-4,.px-4{padding-right:1.5rem !important}.pb-4,.py-4{padding-bottom:1.5rem !important}.pl-4,.px-4{padding-left:1.5rem !important}.p-5{padding:3rem !important}.pt-5,.py-5{padding-top:3rem !important}.pr-5,.px-5{padding-right:3rem !important}.pb-5,.py-5{padding-bottom:3rem !important}.pl-5,.px-5{padding-left:3rem !important}.m-n1{margin:-0.25rem !important}.mt-n1,.my-n1{margin-top:-0.25rem !important}.mr-n1,.mx-n1{margin-right:-0.25rem !important}.mb-n1,.my-n1{margin-bottom:-0.25rem !important}.ml-n1,.mx-n1{margin-left:-0.25rem !important}.m-n2{margin:-0.5rem !important}.mt-n2,.my-n2{margin-top:-0.5rem !important}.mr-n2,.mx-n2{margin-right:-0.5rem !important}.mb-n2,.my-n2{margin-bottom:-0.5rem !important}.ml-n2,.mx-n2{margin-left:-0.5rem !important}.m-n3{margin:-1rem !important}.mt-n3,.my-n3{margin-top:-1rem !important}.mr-n3,.mx-n3{margin-right:-1rem !important}.mb-n3,.my-n3{margin-bottom:-1rem !important}.ml-n3,.mx-n3{margin-left:-1rem !important}.m-n4{margin:-1.5rem !important}.mt-n4,.my-n4{margin-top:-1.5rem !important}.mr-n4,.mx-n4{margin-right:-1.5rem !important}.mb-n4,.my-n4{margin-bottom:-1.5rem !important}.ml-n4,.mx-n4{margin-left:-1.5rem !important}.m-n5{margin:-3rem !important}.mt-n5,.my-n5{margin-top:-3rem !important}.mr-n5,.mx-n5{margin-right:-3rem !important}.mb-n5,.my-n5{margin-bottom:-3rem !important}.ml-n5,.mx-n5{margin-left:-3rem !important}.m-auto{margin:auto !important}.mt-auto,.my-auto{margin-top:auto !important}.mr-auto,.mx-auto{margin-right:auto !important}.mb-auto,.my-auto{margin-bottom:auto !important}.ml-auto,.mx-auto{margin-left:auto !important}@media(min-width: 576px){.m-sm-0{margin:0 !important}.mt-sm-0,.my-sm-0{margin-top:0 !important}.mr-sm-0,.mx-sm-0{margin-right:0 !important}.mb-sm-0,.my-sm-0{margin-bottom:0 !important}.ml-sm-0,.mx-sm-0{margin-left:0 !important}.m-sm-1{margin:.25rem !important}.mt-sm-1,.my-sm-1{margin-top:.25rem !important}.mr-sm-1,.mx-sm-1{margin-right:.25rem !important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem !important}.ml-sm-1,.mx-sm-1{margin-left:.25rem !important}.m-sm-2{margin:.5rem !important}.mt-sm-2,.my-sm-2{margin-top:.5rem !important}.mr-sm-2,.mx-sm-2{margin-right:.5rem !important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem !important}.ml-sm-2,.mx-sm-2{margin-left:.5rem !important}.m-sm-3{margin:1rem !important}.mt-sm-3,.my-sm-3{margin-top:1rem !important}.mr-sm-3,.mx-sm-3{margin-right:1rem !important}.mb-sm-3,.my-sm-3{margin-bottom:1rem !important}.ml-sm-3,.mx-sm-3{margin-left:1rem !important}.m-sm-4{margin:1.5rem !important}.mt-sm-4,.my-sm-4{margin-top:1.5rem !important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem !important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem !important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem !important}.m-sm-5{margin:3rem !important}.mt-sm-5,.my-sm-5{margin-top:3rem !important}.mr-sm-5,.mx-sm-5{margin-right:3rem !important}.mb-sm-5,.my-sm-5{margin-bottom:3rem !important}.ml-sm-5,.mx-sm-5{margin-left:3rem !important}.p-sm-0{padding:0 !important}.pt-sm-0,.py-sm-0{padding-top:0 !important}.pr-sm-0,.px-sm-0{padding-right:0 !important}.pb-sm-0,.py-sm-0{padding-bottom:0 !important}.pl-sm-0,.px-sm-0{padding-left:0 !important}.p-sm-1{padding:.25rem !important}.pt-sm-1,.py-sm-1{padding-top:.25rem !important}.pr-sm-1,.px-sm-1{padding-right:.25rem !important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem !important}.pl-sm-1,.px-sm-1{padding-left:.25rem !important}.p-sm-2{padding:.5rem !important}.pt-sm-2,.py-sm-2{padding-top:.5rem !important}.pr-sm-2,.px-sm-2{padding-right:.5rem !important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem !important}.pl-sm-2,.px-sm-2{padding-left:.5rem !important}.p-sm-3{padding:1rem !important}.pt-sm-3,.py-sm-3{padding-top:1rem !important}.pr-sm-3,.px-sm-3{padding-right:1rem !important}.pb-sm-3,.py-sm-3{padding-bottom:1rem !important}.pl-sm-3,.px-sm-3{padding-left:1rem !important}.p-sm-4{padding:1.5rem !important}.pt-sm-4,.py-sm-4{padding-top:1.5rem !important}.pr-sm-4,.px-sm-4{padding-right:1.5rem !important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem !important}.pl-sm-4,.px-sm-4{padding-left:1.5rem !important}.p-sm-5{padding:3rem !important}.pt-sm-5,.py-sm-5{padding-top:3rem !important}.pr-sm-5,.px-sm-5{padding-right:3rem !important}.pb-sm-5,.py-sm-5{padding-bottom:3rem !important}.pl-sm-5,.px-sm-5{padding-left:3rem !important}.m-sm-n1{margin:-0.25rem !important}.mt-sm-n1,.my-sm-n1{margin-top:-0.25rem !important}.mr-sm-n1,.mx-sm-n1{margin-right:-0.25rem !important}.mb-sm-n1,.my-sm-n1{margin-bottom:-0.25rem !important}.ml-sm-n1,.mx-sm-n1{margin-left:-0.25rem !important}.m-sm-n2{margin:-0.5rem !important}.mt-sm-n2,.my-sm-n2{margin-top:-0.5rem !important}.mr-sm-n2,.mx-sm-n2{margin-right:-0.5rem !important}.mb-sm-n2,.my-sm-n2{margin-bottom:-0.5rem !important}.ml-sm-n2,.mx-sm-n2{margin-left:-0.5rem !important}.m-sm-n3{margin:-1rem !important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem !important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem !important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem !important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem !important}.m-sm-n4{margin:-1.5rem !important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem !important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem !important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem !important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem !important}.m-sm-n5{margin:-3rem !important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem !important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem !important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem !important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem !important}.m-sm-auto{margin:auto !important}.mt-sm-auto,.my-sm-auto{margin-top:auto !important}.mr-sm-auto,.mx-sm-auto{margin-right:auto !important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto !important}.ml-sm-auto,.mx-sm-auto{margin-left:auto !important}}@media(min-width: 768px){.m-md-0{margin:0 !important}.mt-md-0,.my-md-0{margin-top:0 !important}.mr-md-0,.mx-md-0{margin-right:0 !important}.mb-md-0,.my-md-0{margin-bottom:0 !important}.ml-md-0,.mx-md-0{margin-left:0 !important}.m-md-1{margin:.25rem !important}.mt-md-1,.my-md-1{margin-top:.25rem !important}.mr-md-1,.mx-md-1{margin-right:.25rem !important}.mb-md-1,.my-md-1{margin-bottom:.25rem !important}.ml-md-1,.mx-md-1{margin-left:.25rem !important}.m-md-2{margin:.5rem !important}.mt-md-2,.my-md-2{margin-top:.5rem !important}.mr-md-2,.mx-md-2{margin-right:.5rem !important}.mb-md-2,.my-md-2{margin-bottom:.5rem !important}.ml-md-2,.mx-md-2{margin-left:.5rem !important}.m-md-3{margin:1rem !important}.mt-md-3,.my-md-3{margin-top:1rem !important}.mr-md-3,.mx-md-3{margin-right:1rem !important}.mb-md-3,.my-md-3{margin-bottom:1rem !important}.ml-md-3,.mx-md-3{margin-left:1rem !important}.m-md-4{margin:1.5rem !important}.mt-md-4,.my-md-4{margin-top:1.5rem !important}.mr-md-4,.mx-md-4{margin-right:1.5rem !important}.mb-md-4,.my-md-4{margin-bottom:1.5rem !important}.ml-md-4,.mx-md-4{margin-left:1.5rem !important}.m-md-5{margin:3rem !important}.mt-md-5,.my-md-5{margin-top:3rem !important}.mr-md-5,.mx-md-5{margin-right:3rem !important}.mb-md-5,.my-md-5{margin-bottom:3rem !important}.ml-md-5,.mx-md-5{margin-left:3rem !important}.p-md-0{padding:0 !important}.pt-md-0,.py-md-0{padding-top:0 !important}.pr-md-0,.px-md-0{padding-right:0 !important}.pb-md-0,.py-md-0{padding-bottom:0 !important}.pl-md-0,.px-md-0{padding-left:0 !important}.p-md-1{padding:.25rem !important}.pt-md-1,.py-md-1{padding-top:.25rem !important}.pr-md-1,.px-md-1{padding-right:.25rem !important}.pb-md-1,.py-md-1{padding-bottom:.25rem !important}.pl-md-1,.px-md-1{padding-left:.25rem !important}.p-md-2{padding:.5rem !important}.pt-md-2,.py-md-2{padding-top:.5rem !important}.pr-md-2,.px-md-2{padding-right:.5rem !important}.pb-md-2,.py-md-2{padding-bottom:.5rem !important}.pl-md-2,.px-md-2{padding-left:.5rem !important}.p-md-3{padding:1rem !important}.pt-md-3,.py-md-3{padding-top:1rem !important}.pr-md-3,.px-md-3{padding-right:1rem !important}.pb-md-3,.py-md-3{padding-bottom:1rem !important}.pl-md-3,.px-md-3{padding-left:1rem !important}.p-md-4{padding:1.5rem !important}.pt-md-4,.py-md-4{padding-top:1.5rem !important}.pr-md-4,.px-md-4{padding-right:1.5rem !important}.pb-md-4,.py-md-4{padding-bottom:1.5rem !important}.pl-md-4,.px-md-4{padding-left:1.5rem !important}.p-md-5{padding:3rem !important}.pt-md-5,.py-md-5{padding-top:3rem !important}.pr-md-5,.px-md-5{padding-right:3rem !important}.pb-md-5,.py-md-5{padding-bottom:3rem !important}.pl-md-5,.px-md-5{padding-left:3rem !important}.m-md-n1{margin:-0.25rem !important}.mt-md-n1,.my-md-n1{margin-top:-0.25rem !important}.mr-md-n1,.mx-md-n1{margin-right:-0.25rem !important}.mb-md-n1,.my-md-n1{margin-bottom:-0.25rem !important}.ml-md-n1,.mx-md-n1{margin-left:-0.25rem !important}.m-md-n2{margin:-0.5rem !important}.mt-md-n2,.my-md-n2{margin-top:-0.5rem !important}.mr-md-n2,.mx-md-n2{margin-right:-0.5rem !important}.mb-md-n2,.my-md-n2{margin-bottom:-0.5rem !important}.ml-md-n2,.mx-md-n2{margin-left:-0.5rem !important}.m-md-n3{margin:-1rem !important}.mt-md-n3,.my-md-n3{margin-top:-1rem !important}.mr-md-n3,.mx-md-n3{margin-right:-1rem !important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem !important}.ml-md-n3,.mx-md-n3{margin-left:-1rem !important}.m-md-n4{margin:-1.5rem !important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem !important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem !important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem !important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem !important}.m-md-n5{margin:-3rem !important}.mt-md-n5,.my-md-n5{margin-top:-3rem !important}.mr-md-n5,.mx-md-n5{margin-right:-3rem !important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem !important}.ml-md-n5,.mx-md-n5{margin-left:-3rem !important}.m-md-auto{margin:auto !important}.mt-md-auto,.my-md-auto{margin-top:auto !important}.mr-md-auto,.mx-md-auto{margin-right:auto !important}.mb-md-auto,.my-md-auto{margin-bottom:auto !important}.ml-md-auto,.mx-md-auto{margin-left:auto !important}}@media(min-width: 992px){.m-lg-0{margin:0 !important}.mt-lg-0,.my-lg-0{margin-top:0 !important}.mr-lg-0,.mx-lg-0{margin-right:0 !important}.mb-lg-0,.my-lg-0{margin-bottom:0 !important}.ml-lg-0,.mx-lg-0{margin-left:0 !important}.m-lg-1{margin:.25rem !important}.mt-lg-1,.my-lg-1{margin-top:.25rem !important}.mr-lg-1,.mx-lg-1{margin-right:.25rem !important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem !important}.ml-lg-1,.mx-lg-1{margin-left:.25rem !important}.m-lg-2{margin:.5rem !important}.mt-lg-2,.my-lg-2{margin-top:.5rem !important}.mr-lg-2,.mx-lg-2{margin-right:.5rem !important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem !important}.ml-lg-2,.mx-lg-2{margin-left:.5rem !important}.m-lg-3{margin:1rem !important}.mt-lg-3,.my-lg-3{margin-top:1rem !important}.mr-lg-3,.mx-lg-3{margin-right:1rem !important}.mb-lg-3,.my-lg-3{margin-bottom:1rem !important}.ml-lg-3,.mx-lg-3{margin-left:1rem !important}.m-lg-4{margin:1.5rem !important}.mt-lg-4,.my-lg-4{margin-top:1.5rem !important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem !important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem !important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem !important}.m-lg-5{margin:3rem !important}.mt-lg-5,.my-lg-5{margin-top:3rem !important}.mr-lg-5,.mx-lg-5{margin-right:3rem !important}.mb-lg-5,.my-lg-5{margin-bottom:3rem !important}.ml-lg-5,.mx-lg-5{margin-left:3rem !important}.p-lg-0{padding:0 !important}.pt-lg-0,.py-lg-0{padding-top:0 !important}.pr-lg-0,.px-lg-0{padding-right:0 !important}.pb-lg-0,.py-lg-0{padding-bottom:0 !important}.pl-lg-0,.px-lg-0{padding-left:0 !important}.p-lg-1{padding:.25rem !important}.pt-lg-1,.py-lg-1{padding-top:.25rem !important}.pr-lg-1,.px-lg-1{padding-right:.25rem !important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem !important}.pl-lg-1,.px-lg-1{padding-left:.25rem !important}.p-lg-2{padding:.5rem !important}.pt-lg-2,.py-lg-2{padding-top:.5rem !important}.pr-lg-2,.px-lg-2{padding-right:.5rem !important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem !important}.pl-lg-2,.px-lg-2{padding-left:.5rem !important}.p-lg-3{padding:1rem !important}.pt-lg-3,.py-lg-3{padding-top:1rem !important}.pr-lg-3,.px-lg-3{padding-right:1rem !important}.pb-lg-3,.py-lg-3{padding-bottom:1rem !important}.pl-lg-3,.px-lg-3{padding-left:1rem !important}.p-lg-4{padding:1.5rem !important}.pt-lg-4,.py-lg-4{padding-top:1.5rem !important}.pr-lg-4,.px-lg-4{padding-right:1.5rem !important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem !important}.pl-lg-4,.px-lg-4{padding-left:1.5rem !important}.p-lg-5{padding:3rem !important}.pt-lg-5,.py-lg-5{padding-top:3rem !important}.pr-lg-5,.px-lg-5{padding-right:3rem !important}.pb-lg-5,.py-lg-5{padding-bottom:3rem !important}.pl-lg-5,.px-lg-5{padding-left:3rem !important}.m-lg-n1{margin:-0.25rem !important}.mt-lg-n1,.my-lg-n1{margin-top:-0.25rem !important}.mr-lg-n1,.mx-lg-n1{margin-right:-0.25rem !important}.mb-lg-n1,.my-lg-n1{margin-bottom:-0.25rem !important}.ml-lg-n1,.mx-lg-n1{margin-left:-0.25rem !important}.m-lg-n2{margin:-0.5rem !important}.mt-lg-n2,.my-lg-n2{margin-top:-0.5rem !important}.mr-lg-n2,.mx-lg-n2{margin-right:-0.5rem !important}.mb-lg-n2,.my-lg-n2{margin-bottom:-0.5rem !important}.ml-lg-n2,.mx-lg-n2{margin-left:-0.5rem !important}.m-lg-n3{margin:-1rem !important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem !important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem !important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem !important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem !important}.m-lg-n4{margin:-1.5rem !important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem !important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem !important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem !important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem !important}.m-lg-n5{margin:-3rem !important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem !important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem !important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem !important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem !important}.m-lg-auto{margin:auto !important}.mt-lg-auto,.my-lg-auto{margin-top:auto !important}.mr-lg-auto,.mx-lg-auto{margin-right:auto !important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto !important}.ml-lg-auto,.mx-lg-auto{margin-left:auto !important}}@media(min-width: 1200px){.m-xl-0{margin:0 !important}.mt-xl-0,.my-xl-0{margin-top:0 !important}.mr-xl-0,.mx-xl-0{margin-right:0 !important}.mb-xl-0,.my-xl-0{margin-bottom:0 !important}.ml-xl-0,.mx-xl-0{margin-left:0 !important}.m-xl-1{margin:.25rem !important}.mt-xl-1,.my-xl-1{margin-top:.25rem !important}.mr-xl-1,.mx-xl-1{margin-right:.25rem !important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem !important}.ml-xl-1,.mx-xl-1{margin-left:.25rem !important}.m-xl-2{margin:.5rem !important}.mt-xl-2,.my-xl-2{margin-top:.5rem !important}.mr-xl-2,.mx-xl-2{margin-right:.5rem !important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem !important}.ml-xl-2,.mx-xl-2{margin-left:.5rem !important}.m-xl-3{margin:1rem !important}.mt-xl-3,.my-xl-3{margin-top:1rem !important}.mr-xl-3,.mx-xl-3{margin-right:1rem !important}.mb-xl-3,.my-xl-3{margin-bottom:1rem !important}.ml-xl-3,.mx-xl-3{margin-left:1rem !important}.m-xl-4{margin:1.5rem !important}.mt-xl-4,.my-xl-4{margin-top:1.5rem !important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem !important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem !important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem !important}.m-xl-5{margin:3rem !important}.mt-xl-5,.my-xl-5{margin-top:3rem !important}.mr-xl-5,.mx-xl-5{margin-right:3rem !important}.mb-xl-5,.my-xl-5{margin-bottom:3rem !important}.ml-xl-5,.mx-xl-5{margin-left:3rem !important}.p-xl-0{padding:0 !important}.pt-xl-0,.py-xl-0{padding-top:0 !important}.pr-xl-0,.px-xl-0{padding-right:0 !important}.pb-xl-0,.py-xl-0{padding-bottom:0 !important}.pl-xl-0,.px-xl-0{padding-left:0 !important}.p-xl-1{padding:.25rem !important}.pt-xl-1,.py-xl-1{padding-top:.25rem !important}.pr-xl-1,.px-xl-1{padding-right:.25rem !important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem !important}.pl-xl-1,.px-xl-1{padding-left:.25rem !important}.p-xl-2{padding:.5rem !important}.pt-xl-2,.py-xl-2{padding-top:.5rem !important}.pr-xl-2,.px-xl-2{padding-right:.5rem !important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem !important}.pl-xl-2,.px-xl-2{padding-left:.5rem !important}.p-xl-3{padding:1rem !important}.pt-xl-3,.py-xl-3{padding-top:1rem !important}.pr-xl-3,.px-xl-3{padding-right:1rem !important}.pb-xl-3,.py-xl-3{padding-bottom:1rem !important}.pl-xl-3,.px-xl-3{padding-left:1rem !important}.p-xl-4{padding:1.5rem !important}.pt-xl-4,.py-xl-4{padding-top:1.5rem !important}.pr-xl-4,.px-xl-4{padding-right:1.5rem !important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem !important}.pl-xl-4,.px-xl-4{padding-left:1.5rem !important}.p-xl-5{padding:3rem !important}.pt-xl-5,.py-xl-5{padding-top:3rem !important}.pr-xl-5,.px-xl-5{padding-right:3rem !important}.pb-xl-5,.py-xl-5{padding-bottom:3rem !important}.pl-xl-5,.px-xl-5{padding-left:3rem !important}.m-xl-n1{margin:-0.25rem !important}.mt-xl-n1,.my-xl-n1{margin-top:-0.25rem !important}.mr-xl-n1,.mx-xl-n1{margin-right:-0.25rem !important}.mb-xl-n1,.my-xl-n1{margin-bottom:-0.25rem !important}.ml-xl-n1,.mx-xl-n1{margin-left:-0.25rem !important}.m-xl-n2{margin:-0.5rem !important}.mt-xl-n2,.my-xl-n2{margin-top:-0.5rem !important}.mr-xl-n2,.mx-xl-n2{margin-right:-0.5rem !important}.mb-xl-n2,.my-xl-n2{margin-bottom:-0.5rem !important}.ml-xl-n2,.mx-xl-n2{margin-left:-0.5rem !important}.m-xl-n3{margin:-1rem !important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem !important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem !important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem !important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem !important}.m-xl-n4{margin:-1.5rem !important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem !important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem !important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem !important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem !important}.m-xl-n5{margin:-3rem !important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem !important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem !important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem !important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem !important}.m-xl-auto{margin:auto !important}.mt-xl-auto,.my-xl-auto{margin-top:auto !important}.mr-xl-auto,.mx-xl-auto{margin-right:auto !important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto !important}.ml-xl-auto,.mx-xl-auto{margin-left:auto !important}}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:rgba(0,0,0,0)}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace !important}.text-justify{text-align:justify !important}.text-wrap{white-space:normal !important}.text-nowrap{white-space:nowrap !important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left !important}.text-right{text-align:right !important}.text-center{text-align:center !important}@media(min-width: 576px){.text-sm-left{text-align:left !important}.text-sm-right{text-align:right !important}.text-sm-center{text-align:center !important}}@media(min-width: 768px){.text-md-left{text-align:left !important}.text-md-right{text-align:right !important}.text-md-center{text-align:center !important}}@media(min-width: 992px){.text-lg-left{text-align:left !important}.text-lg-right{text-align:right !important}.text-lg-center{text-align:center !important}}@media(min-width: 1200px){.text-xl-left{text-align:left !important}.text-xl-right{text-align:right !important}.text-xl-center{text-align:center !important}}.text-lowercase{text-transform:lowercase !important}.text-uppercase{text-transform:uppercase !important}.text-capitalize{text-transform:capitalize !important}.font-weight-light{font-weight:300 !important}.font-weight-lighter{font-weight:lighter !important}.font-weight-normal{font-weight:400 !important}.font-weight-bold{font-weight:700 !important}.font-weight-bolder{font-weight:bolder !important}.font-italic{font-style:italic !important}.text-white{color:#fff !important}.text-primary{color:#007bff !important}a.text-primary:hover,a.text-primary:focus{color:#0056b3 !important}.text-secondary{color:#6c757d !important}a.text-secondary:hover,a.text-secondary:focus{color:#494f54 !important}.text-success{color:#28a745 !important}a.text-success:hover,a.text-success:focus{color:#19692c !important}.text-info{color:#17a2b8 !important}a.text-info:hover,a.text-info:focus{color:#0f6674 !important}.text-warning{color:#ffc107 !important}a.text-warning:hover,a.text-warning:focus{color:#ba8b00 !important}.text-danger{color:#dc3545 !important}a.text-danger:hover,a.text-danger:focus{color:#a71d2a !important}.text-light{color:#f8f9fa !important}a.text-light:hover,a.text-light:focus{color:#cbd3da !important}.text-dark{color:#343a40 !important}a.text-dark:hover,a.text-dark:focus{color:#121416 !important}.text-body{color:#212529 !important}.text-muted{color:#6c757d !important}.text-black-50{color:rgba(0,0,0,.5) !important}.text-white-50{color:rgba(255,255,255,.5) !important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none !important}.text-break{word-wrap:break-word !important}.text-reset{color:inherit !important}.visible{visibility:visible !important}.invisible{visibility:hidden !important}@media print{*,*::before,*::after{text-shadow:none !important;box-shadow:none !important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap !important}pre,blockquote{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px !important}.container{min-width:992px !important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse !important}.table td,.table th{background-color:#fff !important}.table-bordered th,.table-bordered td{border:1px solid #dee2e6 !important}.table-dark{color:inherit}.table-dark th,.table-dark td,.table-dark thead th,.table-dark tbody+tbody{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}*{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:\"\";content:none}table{border-collapse:collapse;border-spacing:0}a:hover{text-decoration:none}.icon{width:1em;height:1em;vertical-align:-0.15em;fill:currentColor;overflow:hidden}", "" ]), 
    t.exports = e;
} ]);