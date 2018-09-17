;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [0],
  {
    '+rLv': function(t, e, n) {
      var r = n('dyZX').document
      t.exports = r && r.documentElement
    },
    '/e88': function(t, e) {
      t.exports = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff'
    },
    '0/R4': function(t, e) {
      t.exports = function(t) {
        return 'object' === typeof t ? null !== t : 'function' === typeof t
      }
    },
    '1TsA': function(t, e) {
      t.exports = function(t, e) {
        return { value: e, done: !!t }
      }
    },
    '2OiF': function(t, e) {
      t.exports = function(t) {
        if ('function' != typeof t) throw TypeError(t + ' is not a function!')
        return t
      }
    },
    '3Lyj': function(t, e, n) {
      var r = n('KroJ')
      t.exports = function(t, e, n) {
        for (var i in e) r(t, i, e[i], n)
        return t
      }
    },
    '4R4u': function(t, e) {
      t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
        ','
      )
    },
    '69bn': function(t, e, n) {
      var r = n('y3w9'),
        i = n('2OiF'),
        o = n('K0xU')('species')
      t.exports = function(t, e) {
        var n,
          a = r(t).constructor
        return void 0 === a || void 0 == (n = r(a)[o]) ? e : i(n)
      }
    },
    '9gX7': function(t, e) {
      t.exports = function(t, e, n, r) {
        if (!(t instanceof e) || (void 0 !== r && r in t))
          throw TypeError(n + ': incorrect invocation!')
        return t
      }
    },
    Afnz: function(t, e, n) {
      'use strict'
      var r = n('LQAc'),
        i = n('XKFU'),
        o = n('KroJ'),
        a = n('Mukb'),
        s = n('hPIQ'),
        u = n('QaDb'),
        c = n('fyDq'),
        l = n('OP3Y'),
        h = n('K0xU')('iterator'),
        p = !([].keys && 'next' in [].keys()),
        f = '@@iterator',
        d = 'keys',
        v = 'values',
        y = function() {
          return this
        }
      t.exports = function(t, e, n, _, g, m, b) {
        u(n, e, _)
        var w,
          C,
          E,
          S = function(t) {
            if (!p && t in A) return A[t]
            switch (t) {
              case d:
                return function() {
                  return new n(this, t)
                }
              case v:
                return function() {
                  return new n(this, t)
                }
            }
            return function() {
              return new n(this, t)
            }
          },
          T = e + ' Iterator',
          x = g == v,
          O = !1,
          A = t.prototype,
          P = A[h] || A[f] || (g && A[g]),
          I = P || S(g),
          N = g ? (x ? S('entries') : I) : void 0,
          k = ('Array' == e && A.entries) || P
        if (
          (k &&
            ((E = l(k.call(new t()))),
            E !== Object.prototype &&
              E.next &&
              (c(E, T, !0), r || 'function' == typeof E[h] || a(E, h, y))),
          x &&
            P &&
            P.name !== v &&
            ((O = !0),
            (I = function() {
              return P.call(this)
            })),
          (r && !b) || (!p && !O && A[h]) || a(A, h, I),
          (s[e] = I),
          (s[T] = y),
          g)
        )
          if (
            ((w = { values: x ? I : S(v), keys: m ? I : S(d), entries: N }), b)
          )
            for (C in w) C in A || o(A, C, w[C])
          else i(i.P + i.F * (p || O), e, w)
        return w
      }
    },
    DVgA: function(t, e, n) {
      var r = n('zhAb'),
        i = n('4R4u')
      t.exports =
        Object.keys ||
        function(t) {
          return r(t, i)
        }
    },
    EemH: function(t, e, n) {
      var r = n('UqcF'),
        i = n('RjD/'),
        o = n('aCFj'),
        a = n('apmT'),
        s = n('aagx'),
        u = n('xpql'),
        c = Object.getOwnPropertyDescriptor
      e.f = n('nh4g')
        ? c
        : function(t, e) {
            if (((t = o(t)), (e = a(e, !0)), u))
              try {
                return c(t, e)
              } catch (t) {}
            if (s(t, e)) return i(!r.f.call(t, e), t[e])
          }
    },
    FJW5: function(t, e, n) {
      var r = n('hswa'),
        i = n('y3w9'),
        o = n('DVgA')
      t.exports = n('nh4g')
        ? Object.defineProperties
        : function(t, e) {
            i(t)
            var n,
              a = o(e),
              s = a.length,
              u = 0
            while (s > u) r.f(t, (n = a[u++]), e[n])
            return t
          }
    },
    GZEu: function(t, e, n) {
      var r,
        i,
        o,
        a = n('m0Pp'),
        s = n('MfQN'),
        u = n('+rLv'),
        c = n('Iw71'),
        l = n('dyZX'),
        h = l.process,
        p = l.setImmediate,
        f = l.clearImmediate,
        d = l.MessageChannel,
        v = l.Dispatch,
        y = 0,
        _ = {},
        g = 'onreadystatechange',
        m = function() {
          var t = +this
          if (_.hasOwnProperty(t)) {
            var e = _[t]
            delete _[t], e()
          }
        },
        b = function(t) {
          m.call(t.data)
        }
      ;(p && f) ||
        ((p = function(t) {
          var e = [],
            n = 1
          while (arguments.length > n) e.push(arguments[n++])
          return (
            (_[++y] = function() {
              s('function' == typeof t ? t : Function(t), e)
            }),
            r(y),
            y
          )
        }),
        (f = function(t) {
          delete _[t]
        }),
        'process' == n('LZWt')(h)
          ? (r = function(t) {
              h.nextTick(a(m, t, 1))
            })
          : v && v.now
            ? (r = function(t) {
                v.now(a(m, t, 1))
              })
            : d
              ? ((i = new d()),
                (o = i.port2),
                (i.port1.onmessage = b),
                (r = a(o.postMessage, o, 1)))
              : l.addEventListener &&
                'function' == typeof postMessage &&
                !l.importScripts
                ? ((r = function(t) {
                    l.postMessage(t + '', '*')
                  }),
                  l.addEventListener('message', b, !1))
                : (r =
                    g in c('script')
                      ? function(t) {
                          u.appendChild(c('script'))[g] = function() {
                            u.removeChild(this), m.call(t)
                          }
                        }
                      : function(t) {
                          setTimeout(a(m, t, 1), 0)
                        })),
        (t.exports = { set: p, clear: f })
    },
    H6hf: function(t, e, n) {
      var r = n('y3w9')
      t.exports = function(t, e, n, i) {
        try {
          return i ? e(r(n)[0], n[1]) : e(n)
        } catch (e) {
          var o = t['return']
          throw (void 0 !== o && r(o.call(t)), e)
        }
      }
    },
    'I8a+': function(t, e, n) {
      var r = n('LZWt'),
        i = n('K0xU')('toStringTag'),
        o =
          'Arguments' ==
          r(
            (function() {
              return arguments
            })()
          ),
        a = function(t, e) {
          try {
            return t[e]
          } catch (t) {}
        }
      t.exports = function(t) {
        var e, n, s
        return void 0 === t
          ? 'Undefined'
          : null === t
            ? 'Null'
            : 'string' == typeof (n = a((e = Object(t)), i))
              ? n
              : o
                ? r(e)
                : 'Object' == (s = r(e)) && 'function' == typeof e.callee
                  ? 'Arguments'
                  : s
      }
    },
    'IU+Z': function(t, e, n) {
      'use strict'
      var r = n('Mukb'),
        i = n('KroJ'),
        o = n('eeVq'),
        a = n('vhPU'),
        s = n('K0xU')
      t.exports = function(t, e, n) {
        var u = s(t),
          c = n(a, u, ''[t]),
          l = c[0],
          h = c[1]
        o(function() {
          var e = {}
          return (
            (e[u] = function() {
              return 7
            }),
            7 != ''[t](e)
          )
        }) &&
          (i(String.prototype, t, l),
          r(
            RegExp.prototype,
            u,
            2 == e
              ? function(t, e) {
                  return h.call(t, this, e)
                }
              : function(t) {
                  return h.call(t, this)
                }
          ))
      }
    },
    Iw71: function(t, e, n) {
      var r = n('0/R4'),
        i = n('dyZX').document,
        o = r(i) && r(i.createElement)
      t.exports = function(t) {
        return o ? i.createElement(t) : {}
      }
    },
    'J+6e': function(t, e, n) {
      var r = n('I8a+'),
        i = n('K0xU')('iterator'),
        o = n('hPIQ')
      t.exports = n('g3g5').getIteratorMethod = function(t) {
        if (void 0 != t) return t[i] || t['@@iterator'] || o[r(t)]
      }
    },
    K0xU: function(t, e, n) {
      var r = n('VTer')('wks'),
        i = n('ylqs'),
        o = n('dyZX').Symbol,
        a = 'function' == typeof o,
        s = (t.exports = function(t) {
          return r[t] || (r[t] = (a && o[t]) || (a ? o : i)('Symbol.' + t))
        })
      s.store = r
    },
    'KHd+': function(t, e, n) {
      'use strict'
      function r(t, e, n, r, i, o, a, s) {
        var u,
          c = 'function' === typeof t ? t.options : t
        if (
          (e && ((c.render = e), (c.staticRenderFns = n), (c._compiled = !0)),
          r && (c.functional = !0),
          o && (c._scopeId = 'data-v-' + o),
          a
            ? ((u = function(t) {
                ;(t =
                  t ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)),
                  t ||
                    'undefined' === typeof __VUE_SSR_CONTEXT__ ||
                    (t = __VUE_SSR_CONTEXT__),
                  i && i.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(a)
              }),
              (c._ssrRegister = u))
            : i &&
              (u = s
                ? function() {
                    i.call(this, this.$root.$options.shadowRoot)
                  }
                : i),
          u)
        )
          if (c.functional) {
            c._injectStyles = u
            var l = c.render
            c.render = function(t, e) {
              return u.call(e), l(t, e)
            }
          } else {
            var h = c.beforeCreate
            c.beforeCreate = h ? [].concat(h, u) : [u]
          }
        return { exports: t, options: c }
      }
      n.d(e, 'a', function() {
        return r
      })
    },
    KKXr: function(t, e, n) {
      n('IU+Z')('split', 2, function(t, e, r) {
        'use strict'
        var i = n('quPj'),
          o = r,
          a = [].push,
          s = 'split',
          u = 'length',
          c = 'lastIndex'
        if (
          'c' == 'abbc'[s](/(b)*/)[1] ||
          4 != 'test'[s](/(?:)/, -1)[u] ||
          2 != 'ab'[s](/(?:ab)*/)[u] ||
          4 != '.'[s](/(.?)(.?)/)[u] ||
          '.'[s](/()()/)[u] > 1 ||
          ''[s](/.?/)[u]
        ) {
          var l = void 0 === /()??/.exec('')[1]
          r = function(t, e) {
            var n = String(this)
            if (void 0 === t && 0 === e) return []
            if (!i(t)) return o.call(n, t, e)
            var r,
              s,
              h,
              p,
              f,
              d = [],
              v =
                (t.ignoreCase ? 'i' : '') +
                (t.multiline ? 'm' : '') +
                (t.unicode ? 'u' : '') +
                (t.sticky ? 'y' : ''),
              y = 0,
              _ = void 0 === e ? 4294967295 : e >>> 0,
              g = new RegExp(t.source, v + 'g')
            l || (r = new RegExp('^' + g.source + '$(?!\\s)', v))
            while ((s = g.exec(n))) {
              if (
                ((h = s.index + s[0][u]),
                h > y &&
                  (d.push(n.slice(y, s.index)),
                  !l &&
                    s[u] > 1 &&
                    s[0].replace(r, function() {
                      for (f = 1; f < arguments[u] - 2; f++)
                        void 0 === arguments[f] && (s[f] = void 0)
                    }),
                  s[u] > 1 && s.index < n[u] && a.apply(d, s.slice(1)),
                  (p = s[0][u]),
                  (y = h),
                  d[u] >= _))
              )
                break
              g[c] === s.index && g[c]++
            }
            return (
              y === n[u]
                ? (!p && g.test('')) || d.push('')
                : d.push(n.slice(y)),
              d[u] > _ ? d.slice(0, _) : d
            )
          }
        } else
          '0'[s](void 0, 0)[u] &&
            (r = function(t, e) {
              return void 0 === t && 0 === e ? [] : o.call(this, t, e)
            })
        return [
          function(n, i) {
            var o = t(this),
              a = void 0 == n ? void 0 : n[e]
            return void 0 !== a ? a.call(n, o, i) : r.call(String(o), n, i)
          },
          r
        ]
      })
    },
    KroJ: function(t, e, n) {
      var r = n('dyZX'),
        i = n('Mukb'),
        o = n('aagx'),
        a = n('ylqs')('src'),
        s = 'toString',
        u = Function[s],
        c = ('' + u).split(s)
      ;(n('g3g5').inspectSource = function(t) {
        return u.call(t)
      }),
        (t.exports = function(t, e, n, s) {
          var u = 'function' == typeof n
          u && (o(n, 'name') || i(n, 'name', e)),
            t[e] !== n &&
              (u && (o(n, a) || i(n, a, t[e] ? '' + t[e] : c.join(String(e)))),
              t === r
                ? (t[e] = n)
                : s
                  ? t[e]
                    ? (t[e] = n)
                    : i(t, e, n)
                  : (delete t[e], i(t, e, n)))
        })(Function.prototype, s, function() {
          return ('function' == typeof this && this[a]) || u.call(this)
        })
    },
    Kuth: function(t, e, n) {
      var r = n('y3w9'),
        i = n('FJW5'),
        o = n('4R4u'),
        a = n('YTvA')('IE_PROTO'),
        s = function() {},
        u = 'prototype',
        c = function() {
          var t,
            e = n('Iw71')('iframe'),
            r = o.length,
            i = '<',
            a = '>'
          ;(e.style.display = 'none'),
            n('+rLv').appendChild(e),
            (e.src = 'javascript:'),
            (t = e.contentWindow.document),
            t.open(),
            t.write(i + 'script' + a + 'document.F=Object' + i + '/script' + a),
            t.close(),
            (c = t.F)
          while (r--) delete c[u][o[r]]
          return c()
        }
      t.exports =
        Object.create ||
        function(t, e) {
          var n
          return (
            null !== t
              ? ((s[u] = r(t)), (n = new s()), (s[u] = null), (n[a] = t))
              : (n = c()),
            void 0 === e ? n : i(n, e)
          )
        }
    },
    Kw5r: function(t, e, n) {
      'use strict'
      n.r(e)
      /*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
      var r = Object.freeze({})
      function i(t) {
        return void 0 === t || null === t
      }
      function o(t) {
        return void 0 !== t && null !== t
      }
      function a(t) {
        return !0 === t
      }
      function s(t) {
        return !1 === t
      }
      function u(t) {
        return (
          'string' === typeof t ||
          'number' === typeof t ||
          'symbol' === typeof t ||
          'boolean' === typeof t
        )
      }
      function c(t) {
        return null !== t && 'object' === typeof t
      }
      var l = Object.prototype.toString
      function h(t) {
        return '[object Object]' === l.call(t)
      }
      function p(t) {
        return '[object RegExp]' === l.call(t)
      }
      function f(t) {
        var e = parseFloat(String(t))
        return e >= 0 && Math.floor(e) === e && isFinite(t)
      }
      function d(t) {
        return null == t
          ? ''
          : 'object' === typeof t
            ? JSON.stringify(t, null, 2)
            : String(t)
      }
      function v(t) {
        var e = parseFloat(t)
        return isNaN(e) ? t : e
      }
      function y(t, e) {
        for (
          var n = Object.create(null), r = t.split(','), i = 0;
          i < r.length;
          i++
        )
          n[r[i]] = !0
        return e
          ? function(t) {
              return n[t.toLowerCase()]
            }
          : function(t) {
              return n[t]
            }
      }
      y('slot,component', !0)
      var _ = y('key,ref,slot,slot-scope,is')
      function g(t, e) {
        if (t.length) {
          var n = t.indexOf(e)
          if (n > -1) return t.splice(n, 1)
        }
      }
      var m = Object.prototype.hasOwnProperty
      function b(t, e) {
        return m.call(t, e)
      }
      function w(t) {
        var e = Object.create(null)
        return function(n) {
          var r = e[n]
          return r || (e[n] = t(n))
        }
      }
      var C = /-(\w)/g,
        E = w(function(t) {
          return t.replace(C, function(t, e) {
            return e ? e.toUpperCase() : ''
          })
        }),
        S = w(function(t) {
          return t.charAt(0).toUpperCase() + t.slice(1)
        }),
        T = /\B([A-Z])/g,
        x = w(function(t) {
          return t.replace(T, '-$1').toLowerCase()
        })
      function O(t, e) {
        function n(n) {
          var r = arguments.length
          return r ? (r > 1 ? t.apply(e, arguments) : t.call(e, n)) : t.call(e)
        }
        return (n._length = t.length), n
      }
      function A(t, e) {
        return t.bind(e)
      }
      var P = Function.prototype.bind ? A : O
      function I(t, e) {
        e = e || 0
        var n = t.length - e,
          r = new Array(n)
        while (n--) r[n] = t[n + e]
        return r
      }
      function N(t, e) {
        for (var n in e) t[n] = e[n]
        return t
      }
      function k(t) {
        for (var e = {}, n = 0; n < t.length; n++) t[n] && N(e, t[n])
        return e
      }
      function R(t, e, n) {}
      var D = function(t, e, n) {
          return !1
        },
        F = function(t) {
          return t
        }
      function L(t, e) {
        if (t === e) return !0
        var n = c(t),
          r = c(e)
        if (!n || !r) return !n && !r && String(t) === String(e)
        try {
          var i = Array.isArray(t),
            o = Array.isArray(e)
          if (i && o)
            return (
              t.length === e.length &&
              t.every(function(t, n) {
                return L(t, e[n])
              })
            )
          if (i || o) return !1
          var a = Object.keys(t),
            s = Object.keys(e)
          return (
            a.length === s.length &&
            a.every(function(n) {
              return L(t[n], e[n])
            })
          )
        } catch (t) {
          return !1
        }
      }
      function M(t, e) {
        for (var n = 0; n < t.length; n++) if (L(t[n], e)) return n
        return -1
      }
      function j(t) {
        var e = !1
        return function() {
          e || ((e = !0), t.apply(this, arguments))
        }
      }
      var U = 'data-server-rendered',
        W = ['component', 'directive', 'filter'],
        q = [
          'beforeCreate',
          'created',
          'beforeMount',
          'mounted',
          'beforeUpdate',
          'updated',
          'beforeDestroy',
          'destroyed',
          'activated',
          'deactivated',
          'errorCaptured'
        ],
        V = {
          optionMergeStrategies: Object.create(null),
          silent: !1,
          productionTip: !1,
          devtools: !1,
          performance: !1,
          errorHandler: null,
          warnHandler: null,
          ignoredElements: [],
          keyCodes: Object.create(null),
          isReservedTag: D,
          isReservedAttr: D,
          isUnknownElement: D,
          getTagNamespace: R,
          parsePlatformTagName: F,
          mustUseProp: D,
          _lifecycleHooks: q
        }
      function $(t) {
        var e = (t + '').charCodeAt(0)
        return 36 === e || 95 === e
      }
      function Q(t, e, n, r) {
        Object.defineProperty(t, e, {
          value: n,
          enumerable: !!r,
          writable: !0,
          configurable: !0
        })
      }
      var B = /[^\w.$]/
      function H(t) {
        if (!B.test(t)) {
          var e = t.split('.')
          return function(t) {
            for (var n = 0; n < e.length; n++) {
              if (!t) return
              t = t[e[n]]
            }
            return t
          }
        }
      }
      var K,
        z = '__proto__' in {},
        G = 'undefined' !== typeof window,
        Y = 'undefined' !== typeof WXEnvironment && !!WXEnvironment.platform,
        X = Y && WXEnvironment.platform.toLowerCase(),
        J = G && window.navigator.userAgent.toLowerCase(),
        Z = J && /msie|trident/.test(J),
        tt = J && J.indexOf('msie 9.0') > 0,
        et = J && J.indexOf('edge/') > 0,
        nt = (J && J.indexOf('android'),
        (J && /iphone|ipad|ipod|ios/.test(J)) || 'ios' === X),
        rt = (J && /chrome\/\d+/.test(J), {}.watch),
        it = !1
      if (G)
        try {
          var ot = {}
          Object.defineProperty(ot, 'passive', {
            get: function() {
              it = !0
            }
          }),
            window.addEventListener('test-passive', null, ot)
        } catch (t) {}
      var at = function() {
          return (
            void 0 === K &&
              (K =
                !G &&
                !Y &&
                'undefined' !== typeof global &&
                'server' === global['process'].env.VUE_ENV),
            K
          )
        },
        st = G && window.__VUE_DEVTOOLS_GLOBAL_HOOK__
      function ut(t) {
        return 'function' === typeof t && /native code/.test(t.toString())
      }
      var ct,
        lt =
          'undefined' !== typeof Symbol &&
          ut(Symbol) &&
          'undefined' !== typeof Reflect &&
          ut(Reflect.ownKeys)
      ct =
        'undefined' !== typeof Set && ut(Set)
          ? Set
          : (function() {
              function t() {
                this.set = Object.create(null)
              }
              return (
                (t.prototype.has = function(t) {
                  return !0 === this.set[t]
                }),
                (t.prototype.add = function(t) {
                  this.set[t] = !0
                }),
                (t.prototype.clear = function() {
                  this.set = Object.create(null)
                }),
                t
              )
            })()
      var ht = R,
        pt = 0,
        ft = function() {
          ;(this.id = pt++), (this.subs = [])
        }
      ;(ft.prototype.addSub = function(t) {
        this.subs.push(t)
      }),
        (ft.prototype.removeSub = function(t) {
          g(this.subs, t)
        }),
        (ft.prototype.depend = function() {
          ft.target && ft.target.addDep(this)
        }),
        (ft.prototype.notify = function() {
          for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++)
            t[e].update()
        }),
        (ft.target = null)
      var dt = []
      function vt(t) {
        ft.target && dt.push(ft.target), (ft.target = t)
      }
      function yt() {
        ft.target = dt.pop()
      }
      var _t = function(t, e, n, r, i, o, a, s) {
          ;(this.tag = t),
            (this.data = e),
            (this.children = n),
            (this.text = r),
            (this.elm = i),
            (this.ns = void 0),
            (this.context = o),
            (this.fnContext = void 0),
            (this.fnOptions = void 0),
            (this.fnScopeId = void 0),
            (this.key = e && e.key),
            (this.componentOptions = a),
            (this.componentInstance = void 0),
            (this.parent = void 0),
            (this.raw = !1),
            (this.isStatic = !1),
            (this.isRootInsert = !0),
            (this.isComment = !1),
            (this.isCloned = !1),
            (this.isOnce = !1),
            (this.asyncFactory = s),
            (this.asyncMeta = void 0),
            (this.isAsyncPlaceholder = !1)
        },
        gt = { child: { configurable: !0 } }
      ;(gt.child.get = function() {
        return this.componentInstance
      }),
        Object.defineProperties(_t.prototype, gt)
      var mt = function(t) {
        void 0 === t && (t = '')
        var e = new _t()
        return (e.text = t), (e.isComment = !0), e
      }
      function bt(t) {
        return new _t(void 0, void 0, void 0, String(t))
      }
      function wt(t) {
        var e = new _t(
          t.tag,
          t.data,
          t.children,
          t.text,
          t.elm,
          t.context,
          t.componentOptions,
          t.asyncFactory
        )
        return (
          (e.ns = t.ns),
          (e.isStatic = t.isStatic),
          (e.key = t.key),
          (e.isComment = t.isComment),
          (e.fnContext = t.fnContext),
          (e.fnOptions = t.fnOptions),
          (e.fnScopeId = t.fnScopeId),
          (e.isCloned = !0),
          e
        )
      }
      var Ct = Array.prototype,
        Et = Object.create(Ct),
        St = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']
      St.forEach(function(t) {
        var e = Ct[t]
        Q(Et, t, function() {
          var n = [],
            r = arguments.length
          while (r--) n[r] = arguments[r]
          var i,
            o = e.apply(this, n),
            a = this.__ob__
          switch (t) {
            case 'push':
            case 'unshift':
              i = n
              break
            case 'splice':
              i = n.slice(2)
              break
          }
          return i && a.observeArray(i), a.dep.notify(), o
        })
      })
      var Tt = Object.getOwnPropertyNames(Et),
        xt = !0
      function Ot(t) {
        xt = t
      }
      var At = function(t) {
        if (
          ((this.value = t),
          (this.dep = new ft()),
          (this.vmCount = 0),
          Q(t, '__ob__', this),
          Array.isArray(t))
        ) {
          var e = z ? Pt : It
          e(t, Et, Tt), this.observeArray(t)
        } else this.walk(t)
      }
      function Pt(t, e, n) {
        t.__proto__ = e
      }
      function It(t, e, n) {
        for (var r = 0, i = n.length; r < i; r++) {
          var o = n[r]
          Q(t, o, e[o])
        }
      }
      function Nt(t, e) {
        var n
        if (c(t) && !(t instanceof _t))
          return (
            b(t, '__ob__') && t.__ob__ instanceof At
              ? (n = t.__ob__)
              : xt &&
                !at() &&
                (Array.isArray(t) || h(t)) &&
                Object.isExtensible(t) &&
                !t._isVue &&
                (n = new At(t)),
            e && n && n.vmCount++,
            n
          )
      }
      function kt(t, e, n, r, i) {
        var o = new ft(),
          a = Object.getOwnPropertyDescriptor(t, e)
        if (!a || !1 !== a.configurable) {
          var s = a && a.get
          s || 2 !== arguments.length || (n = t[e])
          var u = a && a.set,
            c = !i && Nt(n)
          Object.defineProperty(t, e, {
            enumerable: !0,
            configurable: !0,
            get: function() {
              var e = s ? s.call(t) : n
              return (
                ft.target &&
                  (o.depend(),
                  c && (c.dep.depend(), Array.isArray(e) && Ft(e))),
                e
              )
            },
            set: function(e) {
              var r = s ? s.call(t) : n
              e === r ||
                (e !== e && r !== r) ||
                (u ? u.call(t, e) : (n = e), (c = !i && Nt(e)), o.notify())
            }
          })
        }
      }
      function Rt(t, e, n) {
        if (Array.isArray(t) && f(e))
          return (t.length = Math.max(t.length, e)), t.splice(e, 1, n), n
        if (e in t && !(e in Object.prototype)) return (t[e] = n), n
        var r = t.__ob__
        return t._isVue || (r && r.vmCount)
          ? n
          : r
            ? (kt(r.value, e, n), r.dep.notify(), n)
            : ((t[e] = n), n)
      }
      function Dt(t, e) {
        if (Array.isArray(t) && f(e)) t.splice(e, 1)
        else {
          var n = t.__ob__
          t._isVue ||
            (n && n.vmCount) ||
            (b(t, e) && (delete t[e], n && n.dep.notify()))
        }
      }
      function Ft(t) {
        for (var e = void 0, n = 0, r = t.length; n < r; n++)
          (e = t[n]),
            e && e.__ob__ && e.__ob__.dep.depend(),
            Array.isArray(e) && Ft(e)
      }
      ;(At.prototype.walk = function(t) {
        for (var e = Object.keys(t), n = 0; n < e.length; n++) kt(t, e[n])
      }),
        (At.prototype.observeArray = function(t) {
          for (var e = 0, n = t.length; e < n; e++) Nt(t[e])
        })
      var Lt = V.optionMergeStrategies
      function Mt(t, e) {
        if (!e) return t
        for (var n, r, i, o = Object.keys(e), a = 0; a < o.length; a++)
          (n = o[a]),
            (r = t[n]),
            (i = e[n]),
            b(t, n) ? h(r) && h(i) && Mt(r, i) : Rt(t, n, i)
        return t
      }
      function jt(t, e, n) {
        return n
          ? function() {
              var r = 'function' === typeof e ? e.call(n, n) : e,
                i = 'function' === typeof t ? t.call(n, n) : t
              return r ? Mt(r, i) : i
            }
          : e
            ? t
              ? function() {
                  return Mt(
                    'function' === typeof e ? e.call(this, this) : e,
                    'function' === typeof t ? t.call(this, this) : t
                  )
                }
              : e
            : t
      }
      function Ut(t, e) {
        return e ? (t ? t.concat(e) : Array.isArray(e) ? e : [e]) : t
      }
      function Wt(t, e, n, r) {
        var i = Object.create(t || null)
        return e ? N(i, e) : i
      }
      ;(Lt.data = function(t, e, n) {
        return n ? jt(t, e, n) : e && 'function' !== typeof e ? t : jt(t, e)
      }),
        q.forEach(function(t) {
          Lt[t] = Ut
        }),
        W.forEach(function(t) {
          Lt[t + 's'] = Wt
        }),
        (Lt.watch = function(t, e, n, r) {
          if ((t === rt && (t = void 0), e === rt && (e = void 0), !e))
            return Object.create(t || null)
          if (!t) return e
          var i = {}
          for (var o in (N(i, t), e)) {
            var a = i[o],
              s = e[o]
            a && !Array.isArray(a) && (a = [a]),
              (i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s])
          }
          return i
        }),
        (Lt.props = Lt.methods = Lt.inject = Lt.computed = function(
          t,
          e,
          n,
          r
        ) {
          if (!t) return e
          var i = Object.create(null)
          return N(i, t), e && N(i, e), i
        }),
        (Lt.provide = jt)
      var qt = function(t, e) {
        return void 0 === e ? t : e
      }
      function Vt(t, e) {
        var n = t.props
        if (n) {
          var r,
            i,
            o,
            a = {}
          if (Array.isArray(n)) {
            r = n.length
            while (r--)
              (i = n[r]),
                'string' === typeof i && ((o = E(i)), (a[o] = { type: null }))
          } else if (h(n))
            for (var s in n)
              (i = n[s]), (o = E(s)), (a[o] = h(i) ? i : { type: i })
          else 0
          t.props = a
        }
      }
      function $t(t, e) {
        var n = t.inject
        if (n) {
          var r = (t.inject = {})
          if (Array.isArray(n))
            for (var i = 0; i < n.length; i++) r[n[i]] = { from: n[i] }
          else if (h(n))
            for (var o in n) {
              var a = n[o]
              r[o] = h(a) ? N({ from: o }, a) : { from: a }
            }
          else 0
        }
      }
      function Qt(t) {
        var e = t.directives
        if (e)
          for (var n in e) {
            var r = e[n]
            'function' === typeof r && (e[n] = { bind: r, update: r })
          }
      }
      function Bt(t, e, n) {
        'function' === typeof e && (e = e.options), Vt(e, n), $t(e, n), Qt(e)
        var r = e.extends
        if ((r && (t = Bt(t, r, n)), e.mixins))
          for (var i = 0, o = e.mixins.length; i < o; i++)
            t = Bt(t, e.mixins[i], n)
        var a,
          s = {}
        for (a in t) u(a)
        for (a in e) b(t, a) || u(a)
        function u(r) {
          var i = Lt[r] || qt
          s[r] = i(t[r], e[r], n, r)
        }
        return s
      }
      function Ht(t, e, n, r) {
        if ('string' === typeof n) {
          var i = t[e]
          if (b(i, n)) return i[n]
          var o = E(n)
          if (b(i, o)) return i[o]
          var a = S(o)
          if (b(i, a)) return i[a]
          var s = i[n] || i[o] || i[a]
          return s
        }
      }
      function Kt(t, e, n, r) {
        var i = e[t],
          o = !b(n, t),
          a = n[t],
          s = Xt(Boolean, i.type)
        if (s > -1)
          if (o && !b(i, 'default')) a = !1
          else if ('' === a || a === x(t)) {
            var u = Xt(String, i.type)
            ;(u < 0 || s < u) && (a = !0)
          }
        if (void 0 === a) {
          a = zt(r, i, t)
          var c = xt
          Ot(!0), Nt(a), Ot(c)
        }
        return a
      }
      function zt(t, e, n) {
        if (b(e, 'default')) {
          var r = e.default
          return t &&
            t.$options.propsData &&
            void 0 === t.$options.propsData[n] &&
            void 0 !== t._props[n]
            ? t._props[n]
            : 'function' === typeof r && 'Function' !== Gt(e.type)
              ? r.call(t)
              : r
        }
      }
      function Gt(t) {
        var e = t && t.toString().match(/^\s*function (\w+)/)
        return e ? e[1] : ''
      }
      function Yt(t, e) {
        return Gt(t) === Gt(e)
      }
      function Xt(t, e) {
        if (!Array.isArray(e)) return Yt(e, t) ? 0 : -1
        for (var n = 0, r = e.length; n < r; n++) if (Yt(e[n], t)) return n
        return -1
      }
      function Jt(t, e, n) {
        if (e) {
          var r = e
          while ((r = r.$parent)) {
            var i = r.$options.errorCaptured
            if (i)
              for (var o = 0; o < i.length; o++)
                try {
                  var a = !1 === i[o].call(r, t, e, n)
                  if (a) return
                } catch (t) {
                  Zt(t, r, 'errorCaptured hook')
                }
          }
        }
        Zt(t, e, n)
      }
      function Zt(t, e, n) {
        if (V.errorHandler)
          try {
            return V.errorHandler.call(null, t, e, n)
          } catch (t) {
            te(t, null, 'config.errorHandler')
          }
        te(t, e, n)
      }
      function te(t, e, n) {
        if ((!G && !Y) || 'undefined' === typeof console) throw t
        console.error(t)
      }
      var ee,
        ne,
        re = [],
        ie = !1
      function oe() {
        ie = !1
        var t = re.slice(0)
        re.length = 0
        for (var e = 0; e < t.length; e++) t[e]()
      }
      var ae = !1
      if ('undefined' !== typeof setImmediate && ut(setImmediate))
        ne = function() {
          setImmediate(oe)
        }
      else if (
        'undefined' === typeof MessageChannel ||
        (!ut(MessageChannel) &&
          '[object MessageChannelConstructor]' !== MessageChannel.toString())
      )
        ne = function() {
          setTimeout(oe, 0)
        }
      else {
        var se = new MessageChannel(),
          ue = se.port2
        ;(se.port1.onmessage = oe),
          (ne = function() {
            ue.postMessage(1)
          })
      }
      if ('undefined' !== typeof Promise && ut(Promise)) {
        var ce = Promise.resolve()
        ee = function() {
          ce.then(oe), nt && setTimeout(R)
        }
      } else ee = ne
      function le(t) {
        return (
          t._withTask ||
          (t._withTask = function() {
            ae = !0
            var e = t.apply(null, arguments)
            return (ae = !1), e
          })
        )
      }
      function he(t, e) {
        var n
        if (
          (re.push(function() {
            if (t)
              try {
                t.call(e)
              } catch (t) {
                Jt(t, e, 'nextTick')
              }
            else n && n(e)
          }),
          ie || ((ie = !0), ae ? ne() : ee()),
          !t && 'undefined' !== typeof Promise)
        )
          return new Promise(function(t) {
            n = t
          })
      }
      var pe = new ct()
      function fe(t) {
        de(t, pe), pe.clear()
      }
      function de(t, e) {
        var n,
          r,
          i = Array.isArray(t)
        if (!((!i && !c(t)) || Object.isFrozen(t) || t instanceof _t)) {
          if (t.__ob__) {
            var o = t.__ob__.dep.id
            if (e.has(o)) return
            e.add(o)
          }
          if (i) {
            n = t.length
            while (n--) de(t[n], e)
          } else {
            ;(r = Object.keys(t)), (n = r.length)
            while (n--) de(t[r[n]], e)
          }
        }
      }
      var ve,
        ye = w(function(t) {
          var e = '&' === t.charAt(0)
          t = e ? t.slice(1) : t
          var n = '~' === t.charAt(0)
          t = n ? t.slice(1) : t
          var r = '!' === t.charAt(0)
          return (
            (t = r ? t.slice(1) : t),
            { name: t, once: n, capture: r, passive: e }
          )
        })
      function _e(t) {
        function e() {
          var t = arguments,
            n = e.fns
          if (!Array.isArray(n)) return n.apply(null, arguments)
          for (var r = n.slice(), i = 0; i < r.length; i++) r[i].apply(null, t)
        }
        return (e.fns = t), e
      }
      function ge(t, e, n, r, o) {
        var a, s, u, c
        for (a in t)
          (s = t[a]),
            (u = e[a]),
            (c = ye(a)),
            i(s) ||
              (i(u)
                ? (i(s.fns) && (s = t[a] = _e(s)),
                  n(c.name, s, c.once, c.capture, c.passive, c.params))
                : s !== u && ((u.fns = s), (t[a] = u)))
        for (a in e) i(t[a]) && ((c = ye(a)), r(c.name, e[a], c.capture))
      }
      function me(t, e, n) {
        var r
        t instanceof _t && (t = t.data.hook || (t.data.hook = {}))
        var s = t[e]
        function u() {
          n.apply(this, arguments), g(r.fns, u)
        }
        i(s)
          ? (r = _e([u]))
          : o(s.fns) && a(s.merged)
            ? ((r = s), r.fns.push(u))
            : (r = _e([s, u])),
          (r.merged = !0),
          (t[e] = r)
      }
      function be(t, e, n) {
        var r = e.options.props
        if (!i(r)) {
          var a = {},
            s = t.attrs,
            u = t.props
          if (o(s) || o(u))
            for (var c in r) {
              var l = x(c)
              we(a, u, c, l, !0) || we(a, s, c, l, !1)
            }
          return a
        }
      }
      function we(t, e, n, r, i) {
        if (o(e)) {
          if (b(e, n)) return (t[n] = e[n]), i || delete e[n], !0
          if (b(e, r)) return (t[n] = e[r]), i || delete e[r], !0
        }
        return !1
      }
      function Ce(t) {
        for (var e = 0; e < t.length; e++)
          if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t)
        return t
      }
      function Ee(t) {
        return u(t) ? [bt(t)] : Array.isArray(t) ? Te(t) : void 0
      }
      function Se(t) {
        return o(t) && o(t.text) && s(t.isComment)
      }
      function Te(t, e) {
        var n,
          r,
          s,
          c,
          l = []
        for (n = 0; n < t.length; n++)
          (r = t[n]),
            i(r) ||
              'boolean' === typeof r ||
              ((s = l.length - 1),
              (c = l[s]),
              Array.isArray(r)
                ? r.length > 0 &&
                  ((r = Te(r, (e || '') + '_' + n)),
                  Se(r[0]) &&
                    Se(c) &&
                    ((l[s] = bt(c.text + r[0].text)), r.shift()),
                  l.push.apply(l, r))
                : u(r)
                  ? Se(c)
                    ? (l[s] = bt(c.text + r))
                    : '' !== r && l.push(bt(r))
                  : Se(r) && Se(c)
                    ? (l[s] = bt(c.text + r.text))
                    : (a(t._isVList) &&
                        o(r.tag) &&
                        i(r.key) &&
                        o(e) &&
                        (r.key = '__vlist' + e + '_' + n + '__'),
                      l.push(r)))
        return l
      }
      function xe(t, e) {
        return (
          (t.__esModule || (lt && 'Module' === t[Symbol.toStringTag])) &&
            (t = t.default),
          c(t) ? e.extend(t) : t
        )
      }
      function Oe(t, e, n, r, i) {
        var o = mt()
        return (
          (o.asyncFactory = t),
          (o.asyncMeta = { data: e, context: n, children: r, tag: i }),
          o
        )
      }
      function Ae(t, e, n) {
        if (a(t.error) && o(t.errorComp)) return t.errorComp
        if (o(t.resolved)) return t.resolved
        if (a(t.loading) && o(t.loadingComp)) return t.loadingComp
        if (!o(t.contexts)) {
          var r = (t.contexts = [n]),
            s = !0,
            u = function() {
              for (var t = 0, e = r.length; t < e; t++) r[t].$forceUpdate()
            },
            l = j(function(n) {
              ;(t.resolved = xe(n, e)), s || u()
            }),
            h = j(function(e) {
              o(t.errorComp) && ((t.error = !0), u())
            }),
            p = t(l, h)
          return (
            c(p) &&
              ('function' === typeof p.then
                ? i(t.resolved) && p.then(l, h)
                : o(p.component) &&
                  'function' === typeof p.component.then &&
                  (p.component.then(l, h),
                  o(p.error) && (t.errorComp = xe(p.error, e)),
                  o(p.loading) &&
                    ((t.loadingComp = xe(p.loading, e)),
                    0 === p.delay
                      ? (t.loading = !0)
                      : setTimeout(function() {
                          i(t.resolved) && i(t.error) && ((t.loading = !0), u())
                        }, p.delay || 200)),
                  o(p.timeout) &&
                    setTimeout(function() {
                      i(t.resolved) && h(null)
                    }, p.timeout))),
            (s = !1),
            t.loading ? t.loadingComp : t.resolved
          )
        }
        t.contexts.push(n)
      }
      function Pe(t) {
        return t.isComment && t.asyncFactory
      }
      function Ie(t) {
        if (Array.isArray(t))
          for (var e = 0; e < t.length; e++) {
            var n = t[e]
            if (o(n) && (o(n.componentOptions) || Pe(n))) return n
          }
      }
      function Ne(t) {
        ;(t._events = Object.create(null)), (t._hasHookEvent = !1)
        var e = t.$options._parentListeners
        e && De(t, e)
      }
      function ke(t, e, n) {
        n ? ve.$once(t, e) : ve.$on(t, e)
      }
      function Re(t, e) {
        ve.$off(t, e)
      }
      function De(t, e, n) {
        ;(ve = t), ge(e, n || {}, ke, Re, t), (ve = void 0)
      }
      function Fe(t) {
        var e = /^hook:/
        ;(t.prototype.$on = function(t, n) {
          var r = this,
            i = this
          if (Array.isArray(t))
            for (var o = 0, a = t.length; o < a; o++) r.$on(t[o], n)
          else
            (i._events[t] || (i._events[t] = [])).push(n),
              e.test(t) && (i._hasHookEvent = !0)
          return i
        }),
          (t.prototype.$once = function(t, e) {
            var n = this
            function r() {
              n.$off(t, r), e.apply(n, arguments)
            }
            return (r.fn = e), n.$on(t, r), n
          }),
          (t.prototype.$off = function(t, e) {
            var n = this,
              r = this
            if (!arguments.length) return (r._events = Object.create(null)), r
            if (Array.isArray(t)) {
              for (var i = 0, o = t.length; i < o; i++) n.$off(t[i], e)
              return r
            }
            var a = r._events[t]
            if (!a) return r
            if (!e) return (r._events[t] = null), r
            if (e) {
              var s,
                u = a.length
              while (u--)
                if (((s = a[u]), s === e || s.fn === e)) {
                  a.splice(u, 1)
                  break
                }
            }
            return r
          }),
          (t.prototype.$emit = function(t) {
            var e = this,
              n = e._events[t]
            if (n) {
              n = n.length > 1 ? I(n) : n
              for (var r = I(arguments, 1), i = 0, o = n.length; i < o; i++)
                try {
                  n[i].apply(e, r)
                } catch (n) {
                  Jt(n, e, 'event handler for "' + t + '"')
                }
            }
            return e
          })
      }
      function Le(t, e) {
        var n = {}
        if (!t) return n
        for (var r = 0, i = t.length; r < i; r++) {
          var o = t[r],
            a = o.data
          if (
            (a && a.attrs && a.attrs.slot && delete a.attrs.slot,
            (o.context !== e && o.fnContext !== e) || !a || null == a.slot)
          )
            (n.default || (n.default = [])).push(o)
          else {
            var s = a.slot,
              u = n[s] || (n[s] = [])
            'template' === o.tag ? u.push.apply(u, o.children || []) : u.push(o)
          }
        }
        for (var c in n) n[c].every(Me) && delete n[c]
        return n
      }
      function Me(t) {
        return (t.isComment && !t.asyncFactory) || ' ' === t.text
      }
      function je(t, e) {
        e = e || {}
        for (var n = 0; n < t.length; n++)
          Array.isArray(t[n]) ? je(t[n], e) : (e[t[n].key] = t[n].fn)
        return e
      }
      var Ue = null
      function We(t) {
        var e = t.$options,
          n = e.parent
        if (n && !e.abstract) {
          while (n.$options.abstract && n.$parent) n = n.$parent
          n.$children.push(t)
        }
        ;(t.$parent = n),
          (t.$root = n ? n.$root : t),
          (t.$children = []),
          (t.$refs = {}),
          (t._watcher = null),
          (t._inactive = null),
          (t._directInactive = !1),
          (t._isMounted = !1),
          (t._isDestroyed = !1),
          (t._isBeingDestroyed = !1)
      }
      function qe(t) {
        ;(t.prototype._update = function(t, e) {
          var n = this
          n._isMounted && Ke(n, 'beforeUpdate')
          var r = n.$el,
            i = n._vnode,
            o = Ue
          ;(Ue = n),
            (n._vnode = t),
            i
              ? (n.$el = n.__patch__(i, t))
              : ((n.$el = n.__patch__(
                  n.$el,
                  t,
                  e,
                  !1,
                  n.$options._parentElm,
                  n.$options._refElm
                )),
                (n.$options._parentElm = n.$options._refElm = null)),
            (Ue = o),
            r && (r.__vue__ = null),
            n.$el && (n.$el.__vue__ = n),
            n.$vnode &&
              n.$parent &&
              n.$vnode === n.$parent._vnode &&
              (n.$parent.$el = n.$el)
        }),
          (t.prototype.$forceUpdate = function() {
            var t = this
            t._watcher && t._watcher.update()
          }),
          (t.prototype.$destroy = function() {
            var t = this
            if (!t._isBeingDestroyed) {
              Ke(t, 'beforeDestroy'), (t._isBeingDestroyed = !0)
              var e = t.$parent
              !e ||
                e._isBeingDestroyed ||
                t.$options.abstract ||
                g(e.$children, t),
                t._watcher && t._watcher.teardown()
              var n = t._watchers.length
              while (n--) t._watchers[n].teardown()
              t._data.__ob__ && t._data.__ob__.vmCount--,
                (t._isDestroyed = !0),
                t.__patch__(t._vnode, null),
                Ke(t, 'destroyed'),
                t.$off(),
                t.$el && (t.$el.__vue__ = null),
                t.$vnode && (t.$vnode.parent = null)
            }
          })
      }
      function Ve(t, e, n) {
        var r
        return (
          (t.$el = e),
          t.$options.render || (t.$options.render = mt),
          Ke(t, 'beforeMount'),
          (r = function() {
            t._update(t._render(), n)
          }),
          new un(t, r, R, null, !0),
          (n = !1),
          null == t.$vnode && ((t._isMounted = !0), Ke(t, 'mounted')),
          t
        )
      }
      function $e(t, e, n, i, o) {
        var a = !!(
          o ||
          t.$options._renderChildren ||
          i.data.scopedSlots ||
          t.$scopedSlots !== r
        )
        if (
          ((t.$options._parentVnode = i),
          (t.$vnode = i),
          t._vnode && (t._vnode.parent = i),
          (t.$options._renderChildren = o),
          (t.$attrs = i.data.attrs || r),
          (t.$listeners = n || r),
          e && t.$options.props)
        ) {
          Ot(!1)
          for (
            var s = t._props, u = t.$options._propKeys || [], c = 0;
            c < u.length;
            c++
          ) {
            var l = u[c],
              h = t.$options.props
            s[l] = Kt(l, h, e, t)
          }
          Ot(!0), (t.$options.propsData = e)
        }
        n = n || r
        var p = t.$options._parentListeners
        ;(t.$options._parentListeners = n),
          De(t, n, p),
          a && ((t.$slots = Le(o, i.context)), t.$forceUpdate())
      }
      function Qe(t) {
        while (t && (t = t.$parent)) if (t._inactive) return !0
        return !1
      }
      function Be(t, e) {
        if (e) {
          if (((t._directInactive = !1), Qe(t))) return
        } else if (t._directInactive) return
        if (t._inactive || null === t._inactive) {
          t._inactive = !1
          for (var n = 0; n < t.$children.length; n++) Be(t.$children[n])
          Ke(t, 'activated')
        }
      }
      function He(t, e) {
        if ((!e || ((t._directInactive = !0), !Qe(t))) && !t._inactive) {
          t._inactive = !0
          for (var n = 0; n < t.$children.length; n++) He(t.$children[n])
          Ke(t, 'deactivated')
        }
      }
      function Ke(t, e) {
        vt()
        var n = t.$options[e]
        if (n)
          for (var r = 0, i = n.length; r < i; r++)
            try {
              n[r].call(t)
            } catch (n) {
              Jt(n, t, e + ' hook')
            }
        t._hasHookEvent && t.$emit('hook:' + e), yt()
      }
      var ze = [],
        Ge = [],
        Ye = {},
        Xe = !1,
        Je = !1,
        Ze = 0
      function tn() {
        ;(Ze = ze.length = Ge.length = 0), (Ye = {}), (Xe = Je = !1)
      }
      function en() {
        var t, e
        for (
          Je = !0,
            ze.sort(function(t, e) {
              return t.id - e.id
            }),
            Ze = 0;
          Ze < ze.length;
          Ze++
        )
          (t = ze[Ze]), (e = t.id), (Ye[e] = null), t.run()
        var n = Ge.slice(),
          r = ze.slice()
        tn(), on(n), nn(r), st && V.devtools && st.emit('flush')
      }
      function nn(t) {
        var e = t.length
        while (e--) {
          var n = t[e],
            r = n.vm
          r._watcher === n && r._isMounted && Ke(r, 'updated')
        }
      }
      function rn(t) {
        ;(t._inactive = !1), Ge.push(t)
      }
      function on(t) {
        for (var e = 0; e < t.length; e++) (t[e]._inactive = !0), Be(t[e], !0)
      }
      function an(t) {
        var e = t.id
        if (null == Ye[e]) {
          if (((Ye[e] = !0), Je)) {
            var n = ze.length - 1
            while (n > Ze && ze[n].id > t.id) n--
            ze.splice(n + 1, 0, t)
          } else ze.push(t)
          Xe || ((Xe = !0), he(en))
        }
      }
      var sn = 0,
        un = function(t, e, n, r, i) {
          ;(this.vm = t),
            i && (t._watcher = this),
            t._watchers.push(this),
            r
              ? ((this.deep = !!r.deep),
                (this.user = !!r.user),
                (this.lazy = !!r.lazy),
                (this.sync = !!r.sync))
              : (this.deep = this.user = this.lazy = this.sync = !1),
            (this.cb = n),
            (this.id = ++sn),
            (this.active = !0),
            (this.dirty = this.lazy),
            (this.deps = []),
            (this.newDeps = []),
            (this.depIds = new ct()),
            (this.newDepIds = new ct()),
            (this.expression = ''),
            'function' === typeof e
              ? (this.getter = e)
              : ((this.getter = H(e)),
                this.getter || (this.getter = function() {})),
            (this.value = this.lazy ? void 0 : this.get())
        }
      ;(un.prototype.get = function() {
        var t
        vt(this)
        var e = this.vm
        try {
          t = this.getter.call(e, e)
        } catch (t) {
          if (!this.user) throw t
          Jt(t, e, 'getter for watcher "' + this.expression + '"')
        } finally {
          this.deep && fe(t), yt(), this.cleanupDeps()
        }
        return t
      }),
        (un.prototype.addDep = function(t) {
          var e = t.id
          this.newDepIds.has(e) ||
            (this.newDepIds.add(e),
            this.newDeps.push(t),
            this.depIds.has(e) || t.addSub(this))
        }),
        (un.prototype.cleanupDeps = function() {
          var t = this,
            e = this.deps.length
          while (e--) {
            var n = t.deps[e]
            t.newDepIds.has(n.id) || n.removeSub(t)
          }
          var r = this.depIds
          ;(this.depIds = this.newDepIds),
            (this.newDepIds = r),
            this.newDepIds.clear(),
            (r = this.deps),
            (this.deps = this.newDeps),
            (this.newDeps = r),
            (this.newDeps.length = 0)
        }),
        (un.prototype.update = function() {
          this.lazy ? (this.dirty = !0) : this.sync ? this.run() : an(this)
        }),
        (un.prototype.run = function() {
          if (this.active) {
            var t = this.get()
            if (t !== this.value || c(t) || this.deep) {
              var e = this.value
              if (((this.value = t), this.user))
                try {
                  this.cb.call(this.vm, t, e)
                } catch (t) {
                  Jt(
                    t,
                    this.vm,
                    'callback for watcher "' + this.expression + '"'
                  )
                }
              else this.cb.call(this.vm, t, e)
            }
          }
        }),
        (un.prototype.evaluate = function() {
          ;(this.value = this.get()), (this.dirty = !1)
        }),
        (un.prototype.depend = function() {
          var t = this,
            e = this.deps.length
          while (e--) t.deps[e].depend()
        }),
        (un.prototype.teardown = function() {
          var t = this
          if (this.active) {
            this.vm._isBeingDestroyed || g(this.vm._watchers, this)
            var e = this.deps.length
            while (e--) t.deps[e].removeSub(t)
            this.active = !1
          }
        })
      var cn = { enumerable: !0, configurable: !0, get: R, set: R }
      function ln(t, e, n) {
        ;(cn.get = function() {
          return this[e][n]
        }),
          (cn.set = function(t) {
            this[e][n] = t
          }),
          Object.defineProperty(t, n, cn)
      }
      function hn(t) {
        t._watchers = []
        var e = t.$options
        e.props && pn(t, e.props),
          e.methods && mn(t, e.methods),
          e.data ? fn(t) : Nt((t._data = {}), !0),
          e.computed && yn(t, e.computed),
          e.watch && e.watch !== rt && bn(t, e.watch)
      }
      function pn(t, e) {
        var n = t.$options.propsData || {},
          r = (t._props = {}),
          i = (t.$options._propKeys = []),
          o = !t.$parent
        o || Ot(!1)
        var a = function(o) {
          i.push(o)
          var a = Kt(o, e, n, t)
          kt(r, o, a), o in t || ln(t, '_props', o)
        }
        for (var s in e) a(s)
        Ot(!0)
      }
      function fn(t) {
        var e = t.$options.data
        ;(e = t._data = 'function' === typeof e ? dn(e, t) : e || {}),
          h(e) || (e = {})
        var n = Object.keys(e),
          r = t.$options.props,
          i = (t.$options.methods, n.length)
        while (i--) {
          var o = n[i]
          0, (r && b(r, o)) || $(o) || ln(t, '_data', o)
        }
        Nt(e, !0)
      }
      function dn(t, e) {
        vt()
        try {
          return t.call(e, e)
        } catch (t) {
          return Jt(t, e, 'data()'), {}
        } finally {
          yt()
        }
      }
      var vn = { lazy: !0 }
      function yn(t, e) {
        var n = (t._computedWatchers = Object.create(null)),
          r = at()
        for (var i in e) {
          var o = e[i],
            a = 'function' === typeof o ? o : o.get
          0, r || (n[i] = new un(t, a || R, R, vn)), i in t || _n(t, i, o)
        }
      }
      function _n(t, e, n) {
        var r = !at()
        'function' === typeof n
          ? ((cn.get = r ? gn(e) : n), (cn.set = R))
          : ((cn.get = n.get ? (r && !1 !== n.cache ? gn(e) : n.get) : R),
            (cn.set = n.set ? n.set : R)),
          Object.defineProperty(t, e, cn)
      }
      function gn(t) {
        return function() {
          var e = this._computedWatchers && this._computedWatchers[t]
          if (e)
            return e.dirty && e.evaluate(), ft.target && e.depend(), e.value
        }
      }
      function mn(t, e) {
        t.$options.props
        for (var n in e) t[n] = null == e[n] ? R : P(e[n], t)
      }
      function bn(t, e) {
        for (var n in e) {
          var r = e[n]
          if (Array.isArray(r))
            for (var i = 0; i < r.length; i++) wn(t, n, r[i])
          else wn(t, n, r)
        }
      }
      function wn(t, e, n, r) {
        return (
          h(n) && ((r = n), (n = n.handler)),
          'string' === typeof n && (n = t[n]),
          t.$watch(e, n, r)
        )
      }
      function Cn(t) {
        var e = {
            get: function() {
              return this._data
            }
          },
          n = {
            get: function() {
              return this._props
            }
          }
        Object.defineProperty(t.prototype, '$data', e),
          Object.defineProperty(t.prototype, '$props', n),
          (t.prototype.$set = Rt),
          (t.prototype.$delete = Dt),
          (t.prototype.$watch = function(t, e, n) {
            var r = this
            if (h(e)) return wn(r, t, e, n)
            ;(n = n || {}), (n.user = !0)
            var i = new un(r, t, e, n)
            return (
              n.immediate && e.call(r, i.value),
              function() {
                i.teardown()
              }
            )
          })
      }
      function En(t) {
        var e = t.$options.provide
        e && (t._provided = 'function' === typeof e ? e.call(t) : e)
      }
      function Sn(t) {
        var e = Tn(t.$options.inject, t)
        e &&
          (Ot(!1),
          Object.keys(e).forEach(function(n) {
            kt(t, n, e[n])
          }),
          Ot(!0))
      }
      function Tn(t, e) {
        if (t) {
          for (
            var n = Object.create(null),
              r = lt
                ? Reflect.ownKeys(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                  })
                : Object.keys(t),
              i = 0;
            i < r.length;
            i++
          ) {
            var o = r[i],
              a = t[o].from,
              s = e
            while (s) {
              if (s._provided && b(s._provided, a)) {
                n[o] = s._provided[a]
                break
              }
              s = s.$parent
            }
            if (!s)
              if ('default' in t[o]) {
                var u = t[o].default
                n[o] = 'function' === typeof u ? u.call(e) : u
              } else 0
          }
          return n
        }
      }
      function xn(t, e) {
        var n, r, i, a, s
        if (Array.isArray(t) || 'string' === typeof t)
          for (n = new Array(t.length), r = 0, i = t.length; r < i; r++)
            n[r] = e(t[r], r)
        else if ('number' === typeof t)
          for (n = new Array(t), r = 0; r < t; r++) n[r] = e(r + 1, r)
        else if (c(t))
          for (
            a = Object.keys(t), n = new Array(a.length), r = 0, i = a.length;
            r < i;
            r++
          )
            (s = a[r]), (n[r] = e(t[s], s, r))
        return o(n) && (n._isVList = !0), n
      }
      function On(t, e, n, r) {
        var i,
          o = this.$scopedSlots[t]
        if (o) (n = n || {}), r && (n = N(N({}, r), n)), (i = o(n) || e)
        else {
          var a = this.$slots[t]
          a && (a._rendered = !0), (i = a || e)
        }
        var s = n && n.slot
        return s ? this.$createElement('template', { slot: s }, i) : i
      }
      function An(t) {
        return Ht(this.$options, 'filters', t, !0) || F
      }
      function Pn(t, e) {
        return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e
      }
      function In(t, e, n, r, i) {
        var o = V.keyCodes[e] || n
        return i && r && !V.keyCodes[e]
          ? Pn(i, r)
          : o
            ? Pn(o, t)
            : r
              ? x(r) !== e
              : void 0
      }
      function Nn(t, e, n, r, i) {
        if (n)
          if (c(n)) {
            var o
            Array.isArray(n) && (n = k(n))
            var a = function(a) {
              if ('class' === a || 'style' === a || _(a)) o = t
              else {
                var s = t.attrs && t.attrs.type
                o =
                  r || V.mustUseProp(e, s, a)
                    ? t.domProps || (t.domProps = {})
                    : t.attrs || (t.attrs = {})
              }
              if (!(a in o) && ((o[a] = n[a]), i)) {
                var u = t.on || (t.on = {})
                u['update:' + a] = function(t) {
                  n[a] = t
                }
              }
            }
            for (var s in n) a(s)
          } else;
        return t
      }
      function kn(t, e) {
        var n = this._staticTrees || (this._staticTrees = []),
          r = n[t]
        return r && !e
          ? r
          : ((r = n[t] = this.$options.staticRenderFns[t].call(
              this._renderProxy,
              null,
              this
            )),
            Dn(r, '__static__' + t, !1),
            r)
      }
      function Rn(t, e, n) {
        return Dn(t, '__once__' + e + (n ? '_' + n : ''), !0), t
      }
      function Dn(t, e, n) {
        if (Array.isArray(t))
          for (var r = 0; r < t.length; r++)
            t[r] && 'string' !== typeof t[r] && Fn(t[r], e + '_' + r, n)
        else Fn(t, e, n)
      }
      function Fn(t, e, n) {
        ;(t.isStatic = !0), (t.key = e), (t.isOnce = n)
      }
      function Ln(t, e) {
        if (e)
          if (h(e)) {
            var n = (t.on = t.on ? N({}, t.on) : {})
            for (var r in e) {
              var i = n[r],
                o = e[r]
              n[r] = i ? [].concat(i, o) : o
            }
          } else;
        return t
      }
      function Mn(t) {
        ;(t._o = Rn),
          (t._n = v),
          (t._s = d),
          (t._l = xn),
          (t._t = On),
          (t._q = L),
          (t._i = M),
          (t._m = kn),
          (t._f = An),
          (t._k = In),
          (t._b = Nn),
          (t._v = bt),
          (t._e = mt),
          (t._u = je),
          (t._g = Ln)
      }
      function jn(t, e, n, i, o) {
        var s,
          u = o.options
        b(i, '_uid')
          ? ((s = Object.create(i)), (s._original = i))
          : ((s = i), (i = i._original))
        var c = a(u._compiled),
          l = !c
        ;(this.data = t),
          (this.props = e),
          (this.children = n),
          (this.parent = i),
          (this.listeners = t.on || r),
          (this.injections = Tn(u.inject, i)),
          (this.slots = function() {
            return Le(n, i)
          }),
          c &&
            ((this.$options = u),
            (this.$slots = this.slots()),
            (this.$scopedSlots = t.scopedSlots || r)),
          u._scopeId
            ? (this._c = function(t, e, n, r) {
                var o = Yn(s, t, e, n, r, l)
                return (
                  o &&
                    !Array.isArray(o) &&
                    ((o.fnScopeId = u._scopeId), (o.fnContext = i)),
                  o
                )
              })
            : (this._c = function(t, e, n, r) {
                return Yn(s, t, e, n, r, l)
              })
      }
      function Un(t, e, n, i, a) {
        var s = t.options,
          u = {},
          c = s.props
        if (o(c)) for (var l in c) u[l] = Kt(l, c, e || r)
        else o(n.attrs) && qn(u, n.attrs), o(n.props) && qn(u, n.props)
        var h = new jn(n, u, a, i, t),
          p = s.render.call(null, h._c, h)
        if (p instanceof _t) return Wn(p, n, h.parent, s)
        if (Array.isArray(p)) {
          for (
            var f = Ee(p) || [], d = new Array(f.length), v = 0;
            v < f.length;
            v++
          )
            d[v] = Wn(f[v], n, h.parent, s)
          return d
        }
      }
      function Wn(t, e, n, r) {
        var i = wt(t)
        return (
          (i.fnContext = n),
          (i.fnOptions = r),
          e.slot && ((i.data || (i.data = {})).slot = e.slot),
          i
        )
      }
      function qn(t, e) {
        for (var n in e) t[E(n)] = e[n]
      }
      Mn(jn.prototype)
      var Vn = {
          init: function(t, e, n, r) {
            if (
              t.componentInstance &&
              !t.componentInstance._isDestroyed &&
              t.data.keepAlive
            ) {
              var i = t
              Vn.prepatch(i, i)
            } else {
              var o = (t.componentInstance = Bn(t, Ue, n, r))
              o.$mount(e ? t.elm : void 0, e)
            }
          },
          prepatch: function(t, e) {
            var n = e.componentOptions,
              r = (e.componentInstance = t.componentInstance)
            $e(r, n.propsData, n.listeners, e, n.children)
          },
          insert: function(t) {
            var e = t.context,
              n = t.componentInstance
            n._isMounted || ((n._isMounted = !0), Ke(n, 'mounted')),
              t.data.keepAlive && (e._isMounted ? rn(n) : Be(n, !0))
          },
          destroy: function(t) {
            var e = t.componentInstance
            e._isDestroyed || (t.data.keepAlive ? He(e, !0) : e.$destroy())
          }
        },
        $n = Object.keys(Vn)
      function Qn(t, e, n, r, s) {
        if (!i(t)) {
          var u = n.$options._base
          if ((c(t) && (t = u.extend(t)), 'function' === typeof t)) {
            var l
            if (i(t.cid) && ((l = t), (t = Ae(l, u, n)), void 0 === t))
              return Oe(l, e, n, r, s)
            ;(e = e || {}), or(t), o(e.model) && Kn(t.options, e)
            var h = be(e, t, s)
            if (a(t.options.functional)) return Un(t, h, e, n, r)
            var p = e.on
            if (((e.on = e.nativeOn), a(t.options.abstract))) {
              var f = e.slot
              ;(e = {}), f && (e.slot = f)
            }
            Hn(e)
            var d = t.options.name || s,
              v = new _t(
                'vue-component-' + t.cid + (d ? '-' + d : ''),
                e,
                void 0,
                void 0,
                void 0,
                n,
                { Ctor: t, propsData: h, listeners: p, tag: s, children: r },
                l
              )
            return v
          }
        }
      }
      function Bn(t, e, n, r) {
        var i = {
            _isComponent: !0,
            parent: e,
            _parentVnode: t,
            _parentElm: n || null,
            _refElm: r || null
          },
          a = t.data.inlineTemplate
        return (
          o(a) &&
            ((i.render = a.render), (i.staticRenderFns = a.staticRenderFns)),
          new t.componentOptions.Ctor(i)
        )
      }
      function Hn(t) {
        for (var e = t.hook || (t.hook = {}), n = 0; n < $n.length; n++) {
          var r = $n[n]
          e[r] = Vn[r]
        }
      }
      function Kn(t, e) {
        var n = (t.model && t.model.prop) || 'value',
          r = (t.model && t.model.event) || 'input'
        ;(e.props || (e.props = {}))[n] = e.model.value
        var i = e.on || (e.on = {})
        o(i[r])
          ? (i[r] = [e.model.callback].concat(i[r]))
          : (i[r] = e.model.callback)
      }
      var zn = 1,
        Gn = 2
      function Yn(t, e, n, r, i, o) {
        return (
          (Array.isArray(n) || u(n)) && ((i = r), (r = n), (n = void 0)),
          a(o) && (i = Gn),
          Xn(t, e, n, r, i)
        )
      }
      function Xn(t, e, n, r, i) {
        if (o(n) && o(n.__ob__)) return mt()
        if ((o(n) && o(n.is) && (e = n.is), !e)) return mt()
        var a, s, u
        ;(Array.isArray(r) &&
          'function' === typeof r[0] &&
          ((n = n || {}), (n.scopedSlots = { default: r[0] }), (r.length = 0)),
        i === Gn ? (r = Ee(r)) : i === zn && (r = Ce(r)),
        'string' === typeof e)
          ? ((s = (t.$vnode && t.$vnode.ns) || V.getTagNamespace(e)),
            (a = V.isReservedTag(e)
              ? new _t(V.parsePlatformTagName(e), n, r, void 0, void 0, t)
              : o((u = Ht(t.$options, 'components', e)))
                ? Qn(u, n, t, r, e)
                : new _t(e, n, r, void 0, void 0, t)))
          : (a = Qn(e, n, t, r))
        return Array.isArray(a)
          ? a
          : o(a)
            ? (o(s) && Jn(a, s), o(n) && Zn(n), a)
            : mt()
      }
      function Jn(t, e, n) {
        if (
          ((t.ns = e),
          'foreignObject' === t.tag && ((e = void 0), (n = !0)),
          o(t.children))
        )
          for (var r = 0, s = t.children.length; r < s; r++) {
            var u = t.children[r]
            o(u.tag) && (i(u.ns) || (a(n) && 'svg' !== u.tag)) && Jn(u, e, n)
          }
      }
      function Zn(t) {
        c(t.style) && fe(t.style), c(t.class) && fe(t.class)
      }
      function tr(t) {
        ;(t._vnode = null), (t._staticTrees = null)
        var e = t.$options,
          n = (t.$vnode = e._parentVnode),
          i = n && n.context
        ;(t.$slots = Le(e._renderChildren, i)),
          (t.$scopedSlots = r),
          (t._c = function(e, n, r, i) {
            return Yn(t, e, n, r, i, !1)
          }),
          (t.$createElement = function(e, n, r, i) {
            return Yn(t, e, n, r, i, !0)
          })
        var o = n && n.data
        kt(t, '$attrs', (o && o.attrs) || r, null, !0),
          kt(t, '$listeners', e._parentListeners || r, null, !0)
      }
      function er(t) {
        Mn(t.prototype),
          (t.prototype.$nextTick = function(t) {
            return he(t, this)
          }),
          (t.prototype._render = function() {
            var t,
              e = this,
              n = e.$options,
              i = n.render,
              o = n._parentVnode
            o && (e.$scopedSlots = o.data.scopedSlots || r), (e.$vnode = o)
            try {
              t = i.call(e._renderProxy, e.$createElement)
            } catch (n) {
              Jt(n, e, 'render'), (t = e._vnode)
            }
            return t instanceof _t || (t = mt()), (t.parent = o), t
          })
      }
      var nr = 0
      function rr(t) {
        t.prototype._init = function(t) {
          var e = this
          ;(e._uid = nr++),
            (e._isVue = !0),
            t && t._isComponent
              ? ir(e, t)
              : (e.$options = Bt(or(e.constructor), t || {}, e)),
            (e._renderProxy = e),
            (e._self = e),
            We(e),
            Ne(e),
            tr(e),
            Ke(e, 'beforeCreate'),
            Sn(e),
            hn(e),
            En(e),
            Ke(e, 'created'),
            e.$options.el && e.$mount(e.$options.el)
        }
      }
      function ir(t, e) {
        var n = (t.$options = Object.create(t.constructor.options)),
          r = e._parentVnode
        ;(n.parent = e.parent),
          (n._parentVnode = r),
          (n._parentElm = e._parentElm),
          (n._refElm = e._refElm)
        var i = r.componentOptions
        ;(n.propsData = i.propsData),
          (n._parentListeners = i.listeners),
          (n._renderChildren = i.children),
          (n._componentTag = i.tag),
          e.render &&
            ((n.render = e.render), (n.staticRenderFns = e.staticRenderFns))
      }
      function or(t) {
        var e = t.options
        if (t.super) {
          var n = or(t.super),
            r = t.superOptions
          if (n !== r) {
            t.superOptions = n
            var i = ar(t)
            i && N(t.extendOptions, i),
              (e = t.options = Bt(n, t.extendOptions)),
              e.name && (e.components[e.name] = t)
          }
        }
        return e
      }
      function ar(t) {
        var e,
          n = t.options,
          r = t.extendOptions,
          i = t.sealedOptions
        for (var o in n)
          n[o] !== i[o] && (e || (e = {}), (e[o] = sr(n[o], r[o], i[o])))
        return e
      }
      function sr(t, e, n) {
        if (Array.isArray(t)) {
          var r = []
          ;(n = Array.isArray(n) ? n : [n]), (e = Array.isArray(e) ? e : [e])
          for (var i = 0; i < t.length; i++)
            (e.indexOf(t[i]) >= 0 || n.indexOf(t[i]) < 0) && r.push(t[i])
          return r
        }
        return t
      }
      function ur(t) {
        this._init(t)
      }
      function cr(t) {
        t.use = function(t) {
          var e = this._installedPlugins || (this._installedPlugins = [])
          if (e.indexOf(t) > -1) return this
          var n = I(arguments, 1)
          return (
            n.unshift(this),
            'function' === typeof t.install
              ? t.install.apply(t, n)
              : 'function' === typeof t && t.apply(null, n),
            e.push(t),
            this
          )
        }
      }
      function lr(t) {
        t.mixin = function(t) {
          return (this.options = Bt(this.options, t)), this
        }
      }
      function hr(t) {
        t.cid = 0
        var e = 1
        t.extend = function(t) {
          t = t || {}
          var n = this,
            r = n.cid,
            i = t._Ctor || (t._Ctor = {})
          if (i[r]) return i[r]
          var o = t.name || n.options.name
          var a = function(t) {
            this._init(t)
          }
          return (
            (a.prototype = Object.create(n.prototype)),
            (a.prototype.constructor = a),
            (a.cid = e++),
            (a.options = Bt(n.options, t)),
            (a['super'] = n),
            a.options.props && pr(a),
            a.options.computed && fr(a),
            (a.extend = n.extend),
            (a.mixin = n.mixin),
            (a.use = n.use),
            W.forEach(function(t) {
              a[t] = n[t]
            }),
            o && (a.options.components[o] = a),
            (a.superOptions = n.options),
            (a.extendOptions = t),
            (a.sealedOptions = N({}, a.options)),
            (i[r] = a),
            a
          )
        }
      }
      function pr(t) {
        var e = t.options.props
        for (var n in e) ln(t.prototype, '_props', n)
      }
      function fr(t) {
        var e = t.options.computed
        for (var n in e) _n(t.prototype, n, e[n])
      }
      function dr(t) {
        W.forEach(function(e) {
          t[e] = function(t, n) {
            return n
              ? ('component' === e &&
                  h(n) &&
                  ((n.name = n.name || t), (n = this.options._base.extend(n))),
                'directive' === e &&
                  'function' === typeof n &&
                  (n = { bind: n, update: n }),
                (this.options[e + 's'][t] = n),
                n)
              : this.options[e + 's'][t]
          }
        })
      }
      function vr(t) {
        return t && (t.Ctor.options.name || t.tag)
      }
      function yr(t, e) {
        return Array.isArray(t)
          ? t.indexOf(e) > -1
          : 'string' === typeof t
            ? t.split(',').indexOf(e) > -1
            : !!p(t) && t.test(e)
      }
      function _r(t, e) {
        var n = t.cache,
          r = t.keys,
          i = t._vnode
        for (var o in n) {
          var a = n[o]
          if (a) {
            var s = vr(a.componentOptions)
            s && !e(s) && gr(n, o, r, i)
          }
        }
      }
      function gr(t, e, n, r) {
        var i = t[e]
        !i || (r && i.tag === r.tag) || i.componentInstance.$destroy(),
          (t[e] = null),
          g(n, e)
      }
      rr(ur), Cn(ur), Fe(ur), qe(ur), er(ur)
      var mr = [String, RegExp, Array],
        br = {
          name: 'keep-alive',
          abstract: !0,
          props: { include: mr, exclude: mr, max: [String, Number] },
          created: function() {
            ;(this.cache = Object.create(null)), (this.keys = [])
          },
          destroyed: function() {
            var t = this
            for (var e in t.cache) gr(t.cache, e, t.keys)
          },
          mounted: function() {
            var t = this
            this.$watch('include', function(e) {
              _r(t, function(t) {
                return yr(e, t)
              })
            }),
              this.$watch('exclude', function(e) {
                _r(t, function(t) {
                  return !yr(e, t)
                })
              })
          },
          render: function() {
            var t = this.$slots.default,
              e = Ie(t),
              n = e && e.componentOptions
            if (n) {
              var r = vr(n),
                i = this,
                o = i.include,
                a = i.exclude
              if ((o && (!r || !yr(o, r))) || (a && r && yr(a, r))) return e
              var s = this,
                u = s.cache,
                c = s.keys,
                l =
                  null == e.key
                    ? n.Ctor.cid + (n.tag ? '::' + n.tag : '')
                    : e.key
              u[l]
                ? ((e.componentInstance = u[l].componentInstance),
                  g(c, l),
                  c.push(l))
                : ((u[l] = e),
                  c.push(l),
                  this.max &&
                    c.length > parseInt(this.max) &&
                    gr(u, c[0], c, this._vnode)),
                (e.data.keepAlive = !0)
            }
            return e || (t && t[0])
          }
        },
        wr = { KeepAlive: br }
      function Cr(t) {
        var e = {
          get: function() {
            return V
          }
        }
        Object.defineProperty(t, 'config', e),
          (t.util = {
            warn: ht,
            extend: N,
            mergeOptions: Bt,
            defineReactive: kt
          }),
          (t.set = Rt),
          (t.delete = Dt),
          (t.nextTick = he),
          (t.options = Object.create(null)),
          W.forEach(function(e) {
            t.options[e + 's'] = Object.create(null)
          }),
          (t.options._base = t),
          N(t.options.components, wr),
          cr(t),
          lr(t),
          hr(t),
          dr(t)
      }
      Cr(ur),
        Object.defineProperty(ur.prototype, '$isServer', { get: at }),
        Object.defineProperty(ur.prototype, '$ssrContext', {
          get: function() {
            return this.$vnode && this.$vnode.ssrContext
          }
        }),
        Object.defineProperty(ur, 'FunctionalRenderContext', { value: jn }),
        (ur.version = '2.5.16')
      var Er = y('style,class'),
        Sr = y('input,textarea,option,select,progress'),
        Tr = function(t, e, n) {
          return (
            ('value' === n && Sr(t) && 'button' !== e) ||
            ('selected' === n && 'option' === t) ||
            ('checked' === n && 'input' === t) ||
            ('muted' === n && 'video' === t)
          )
        },
        xr = y('contenteditable,draggable,spellcheck'),
        Or = y(
          'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible'
        ),
        Ar = 'http://www.w3.org/1999/xlink',
        Pr = function(t) {
          return ':' === t.charAt(5) && 'xlink' === t.slice(0, 5)
        },
        Ir = function(t) {
          return Pr(t) ? t.slice(6, t.length) : ''
        },
        Nr = function(t) {
          return null == t || !1 === t
        }
      function kr(t) {
        var e = t.data,
          n = t,
          r = t
        while (o(r.componentInstance))
          (r = r.componentInstance._vnode), r && r.data && (e = Rr(r.data, e))
        while (o((n = n.parent))) n && n.data && (e = Rr(e, n.data))
        return Dr(e.staticClass, e.class)
      }
      function Rr(t, e) {
        return {
          staticClass: Fr(t.staticClass, e.staticClass),
          class: o(t.class) ? [t.class, e.class] : e.class
        }
      }
      function Dr(t, e) {
        return o(t) || o(e) ? Fr(t, Lr(e)) : ''
      }
      function Fr(t, e) {
        return t ? (e ? t + ' ' + e : t) : e || ''
      }
      function Lr(t) {
        return Array.isArray(t)
          ? Mr(t)
          : c(t)
            ? jr(t)
            : 'string' === typeof t
              ? t
              : ''
      }
      function Mr(t) {
        for (var e, n = '', r = 0, i = t.length; r < i; r++)
          o((e = Lr(t[r]))) && '' !== e && (n && (n += ' '), (n += e))
        return n
      }
      function jr(t) {
        var e = ''
        for (var n in t) t[n] && (e && (e += ' '), (e += n))
        return e
      }
      var Ur = {
          svg: 'http://www.w3.org/2000/svg',
          math: 'http://www.w3.org/1998/Math/MathML'
        },
        Wr = y(
          'html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot'
        ),
        qr = y(
          'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
          !0
        ),
        Vr = function(t) {
          return Wr(t) || qr(t)
        }
      function $r(t) {
        return qr(t) ? 'svg' : 'math' === t ? 'math' : void 0
      }
      var Qr = Object.create(null)
      function Br(t) {
        if (!G) return !0
        if (Vr(t)) return !1
        if (((t = t.toLowerCase()), null != Qr[t])) return Qr[t]
        var e = document.createElement(t)
        return t.indexOf('-') > -1
          ? (Qr[t] =
              e.constructor === window.HTMLUnknownElement ||
              e.constructor === window.HTMLElement)
          : (Qr[t] = /HTMLUnknownElement/.test(e.toString()))
      }
      var Hr = y('text,number,password,search,email,tel,url')
      function Kr(t) {
        if ('string' === typeof t) {
          var e = document.querySelector(t)
          return e || document.createElement('div')
        }
        return t
      }
      function zr(t, e) {
        var n = document.createElement(t)
        return 'select' !== t
          ? n
          : (e.data &&
              e.data.attrs &&
              void 0 !== e.data.attrs.multiple &&
              n.setAttribute('multiple', 'multiple'),
            n)
      }
      function Gr(t, e) {
        return document.createElementNS(Ur[t], e)
      }
      function Yr(t) {
        return document.createTextNode(t)
      }
      function Xr(t) {
        return document.createComment(t)
      }
      function Jr(t, e, n) {
        t.insertBefore(e, n)
      }
      function Zr(t, e) {
        t.removeChild(e)
      }
      function ti(t, e) {
        t.appendChild(e)
      }
      function ei(t) {
        return t.parentNode
      }
      function ni(t) {
        return t.nextSibling
      }
      function ri(t) {
        return t.tagName
      }
      function ii(t, e) {
        t.textContent = e
      }
      function oi(t, e) {
        t.setAttribute(e, '')
      }
      var ai = Object.freeze({
          createElement: zr,
          createElementNS: Gr,
          createTextNode: Yr,
          createComment: Xr,
          insertBefore: Jr,
          removeChild: Zr,
          appendChild: ti,
          parentNode: ei,
          nextSibling: ni,
          tagName: ri,
          setTextContent: ii,
          setStyleScope: oi
        }),
        si = {
          create: function(t, e) {
            ui(e)
          },
          update: function(t, e) {
            t.data.ref !== e.data.ref && (ui(t, !0), ui(e))
          },
          destroy: function(t) {
            ui(t, !0)
          }
        }
      function ui(t, e) {
        var n = t.data.ref
        if (o(n)) {
          var r = t.context,
            i = t.componentInstance || t.elm,
            a = r.$refs
          e
            ? Array.isArray(a[n])
              ? g(a[n], i)
              : a[n] === i && (a[n] = void 0)
            : t.data.refInFor
              ? Array.isArray(a[n])
                ? a[n].indexOf(i) < 0 && a[n].push(i)
                : (a[n] = [i])
              : (a[n] = i)
        }
      }
      var ci = new _t('', {}, []),
        li = ['create', 'activate', 'update', 'remove', 'destroy']
      function hi(t, e) {
        return (
          t.key === e.key &&
          ((t.tag === e.tag &&
            t.isComment === e.isComment &&
            o(t.data) === o(e.data) &&
            pi(t, e)) ||
            (a(t.isAsyncPlaceholder) &&
              t.asyncFactory === e.asyncFactory &&
              i(e.asyncFactory.error)))
        )
      }
      function pi(t, e) {
        if ('input' !== t.tag) return !0
        var n,
          r = o((n = t.data)) && o((n = n.attrs)) && n.type,
          i = o((n = e.data)) && o((n = n.attrs)) && n.type
        return r === i || (Hr(r) && Hr(i))
      }
      function fi(t, e, n) {
        var r,
          i,
          a = {}
        for (r = e; r <= n; ++r) (i = t[r].key), o(i) && (a[i] = r)
        return a
      }
      function di(t) {
        var e,
          n,
          r = {},
          s = t.modules,
          c = t.nodeOps
        for (e = 0; e < li.length; ++e)
          for (r[li[e]] = [], n = 0; n < s.length; ++n)
            o(s[n][li[e]]) && r[li[e]].push(s[n][li[e]])
        function l(t) {
          return new _t(c.tagName(t).toLowerCase(), {}, [], void 0, t)
        }
        function h(t, e) {
          function n() {
            0 === --n.listeners && p(t)
          }
          return (n.listeners = e), n
        }
        function p(t) {
          var e = c.parentNode(t)
          o(e) && c.removeChild(e, t)
        }
        function f(t, e, n, r, i, s, u) {
          if (
            (o(t.elm) && o(s) && (t = s[u] = wt(t)),
            (t.isRootInsert = !i),
            !d(t, e, n, r))
          ) {
            var l = t.data,
              h = t.children,
              p = t.tag
            o(p)
              ? ((t.elm = t.ns
                  ? c.createElementNS(t.ns, p)
                  : c.createElement(p, t)),
                C(t),
                m(t, h, e),
                o(l) && w(t, e),
                g(n, t.elm, r))
              : a(t.isComment)
                ? ((t.elm = c.createComment(t.text)), g(n, t.elm, r))
                : ((t.elm = c.createTextNode(t.text)), g(n, t.elm, r))
          }
        }
        function d(t, e, n, r) {
          var i = t.data
          if (o(i)) {
            var s = o(t.componentInstance) && i.keepAlive
            if (
              (o((i = i.hook)) && o((i = i.init)) && i(t, !1, n, r),
              o(t.componentInstance))
            )
              return v(t, e), a(s) && _(t, e, n, r), !0
          }
        }
        function v(t, e) {
          o(t.data.pendingInsert) &&
            (e.push.apply(e, t.data.pendingInsert),
            (t.data.pendingInsert = null)),
            (t.elm = t.componentInstance.$el),
            b(t) ? (w(t, e), C(t)) : (ui(t), e.push(t))
        }
        function _(t, e, n, i) {
          var a,
            s = t
          while (s.componentInstance)
            if (
              ((s = s.componentInstance._vnode),
              o((a = s.data)) && o((a = a.transition)))
            ) {
              for (a = 0; a < r.activate.length; ++a) r.activate[a](ci, s)
              e.push(s)
              break
            }
          g(n, t.elm, i)
        }
        function g(t, e, n) {
          o(t) &&
            (o(n)
              ? n.parentNode === t && c.insertBefore(t, e, n)
              : c.appendChild(t, e))
        }
        function m(t, e, n) {
          if (Array.isArray(e)) {
            0
            for (var r = 0; r < e.length; ++r) f(e[r], n, t.elm, null, !0, e, r)
          } else
            u(t.text) && c.appendChild(t.elm, c.createTextNode(String(t.text)))
        }
        function b(t) {
          while (t.componentInstance) t = t.componentInstance._vnode
          return o(t.tag)
        }
        function w(t, n) {
          for (var i = 0; i < r.create.length; ++i) r.create[i](ci, t)
          ;(e = t.data.hook),
            o(e) && (o(e.create) && e.create(ci, t), o(e.insert) && n.push(t))
        }
        function C(t) {
          var e
          if (o((e = t.fnScopeId))) c.setStyleScope(t.elm, e)
          else {
            var n = t
            while (n)
              o((e = n.context)) &&
                o((e = e.$options._scopeId)) &&
                c.setStyleScope(t.elm, e),
                (n = n.parent)
          }
          o((e = Ue)) &&
            e !== t.context &&
            e !== t.fnContext &&
            o((e = e.$options._scopeId)) &&
            c.setStyleScope(t.elm, e)
        }
        function E(t, e, n, r, i, o) {
          for (; r <= i; ++r) f(n[r], o, t, e, !1, n, r)
        }
        function S(t) {
          var e,
            n,
            i = t.data
          if (o(i))
            for (
              o((e = i.hook)) && o((e = e.destroy)) && e(t), e = 0;
              e < r.destroy.length;
              ++e
            )
              r.destroy[e](t)
          if (o((e = t.children)))
            for (n = 0; n < t.children.length; ++n) S(t.children[n])
        }
        function T(t, e, n, r) {
          for (; n <= r; ++n) {
            var i = e[n]
            o(i) && (o(i.tag) ? (x(i), S(i)) : p(i.elm))
          }
        }
        function x(t, e) {
          if (o(e) || o(t.data)) {
            var n,
              i = r.remove.length + 1
            for (
              o(e) ? (e.listeners += i) : (e = h(t.elm, i)),
                o((n = t.componentInstance)) &&
                  o((n = n._vnode)) &&
                  o(n.data) &&
                  x(n, e),
                n = 0;
              n < r.remove.length;
              ++n
            )
              r.remove[n](t, e)
            o((n = t.data.hook)) && o((n = n.remove)) ? n(t, e) : e()
          } else p(t.elm)
        }
        function O(t, e, n, r, a) {
          var s,
            u,
            l,
            h,
            p = 0,
            d = 0,
            v = e.length - 1,
            y = e[0],
            _ = e[v],
            g = n.length - 1,
            m = n[0],
            b = n[g],
            w = !a
          while (p <= v && d <= g)
            i(y)
              ? (y = e[++p])
              : i(_)
                ? (_ = e[--v])
                : hi(y, m)
                  ? (P(y, m, r), (y = e[++p]), (m = n[++d]))
                  : hi(_, b)
                    ? (P(_, b, r), (_ = e[--v]), (b = n[--g]))
                    : hi(y, b)
                      ? (P(y, b, r),
                        w && c.insertBefore(t, y.elm, c.nextSibling(_.elm)),
                        (y = e[++p]),
                        (b = n[--g]))
                      : hi(_, m)
                        ? (P(_, m, r),
                          w && c.insertBefore(t, _.elm, y.elm),
                          (_ = e[--v]),
                          (m = n[++d]))
                        : (i(s) && (s = fi(e, p, v)),
                          (u = o(m.key) ? s[m.key] : A(m, e, p, v)),
                          i(u)
                            ? f(m, r, t, y.elm, !1, n, d)
                            : ((l = e[u]),
                              hi(l, m)
                                ? (P(l, m, r),
                                  (e[u] = void 0),
                                  w && c.insertBefore(t, l.elm, y.elm))
                                : f(m, r, t, y.elm, !1, n, d)),
                          (m = n[++d]))
          p > v
            ? ((h = i(n[g + 1]) ? null : n[g + 1].elm), E(t, h, n, d, g, r))
            : d > g && T(t, e, p, v)
        }
        function A(t, e, n, r) {
          for (var i = n; i < r; i++) {
            var a = e[i]
            if (o(a) && hi(t, a)) return i
          }
        }
        function P(t, e, n, s) {
          if (t !== e) {
            var u = (e.elm = t.elm)
            if (a(t.isAsyncPlaceholder))
              o(e.asyncFactory.resolved)
                ? k(t.elm, e, n)
                : (e.isAsyncPlaceholder = !0)
            else if (
              a(e.isStatic) &&
              a(t.isStatic) &&
              e.key === t.key &&
              (a(e.isCloned) || a(e.isOnce))
            )
              e.componentInstance = t.componentInstance
            else {
              var l,
                h = e.data
              o(h) && o((l = h.hook)) && o((l = l.prepatch)) && l(t, e)
              var p = t.children,
                f = e.children
              if (o(h) && b(e)) {
                for (l = 0; l < r.update.length; ++l) r.update[l](t, e)
                o((l = h.hook)) && o((l = l.update)) && l(t, e)
              }
              i(e.text)
                ? o(p) && o(f)
                  ? p !== f && O(u, p, f, n, s)
                  : o(f)
                    ? (o(t.text) && c.setTextContent(u, ''),
                      E(u, null, f, 0, f.length - 1, n))
                    : o(p)
                      ? T(u, p, 0, p.length - 1)
                      : o(t.text) && c.setTextContent(u, '')
                : t.text !== e.text && c.setTextContent(u, e.text),
                o(h) && o((l = h.hook)) && o((l = l.postpatch)) && l(t, e)
            }
          }
        }
        function I(t, e, n) {
          if (a(n) && o(t.parent)) t.parent.data.pendingInsert = e
          else for (var r = 0; r < e.length; ++r) e[r].data.hook.insert(e[r])
        }
        var N = y('attrs,class,staticClass,staticStyle,key')
        function k(t, e, n, r) {
          var i,
            s = e.tag,
            u = e.data,
            c = e.children
          if (
            ((r = r || (u && u.pre)),
            (e.elm = t),
            a(e.isComment) && o(e.asyncFactory))
          )
            return (e.isAsyncPlaceholder = !0), !0
          if (
            o(u) &&
            (o((i = u.hook)) && o((i = i.init)) && i(e, !0),
            o((i = e.componentInstance)))
          )
            return v(e, n), !0
          if (o(s)) {
            if (o(c))
              if (t.hasChildNodes())
                if (o((i = u)) && o((i = i.domProps)) && o((i = i.innerHTML))) {
                  if (i !== t.innerHTML) return !1
                } else {
                  for (var l = !0, h = t.firstChild, p = 0; p < c.length; p++) {
                    if (!h || !k(h, c[p], n, r)) {
                      l = !1
                      break
                    }
                    h = h.nextSibling
                  }
                  if (!l || h) return !1
                }
              else m(e, c, n)
            if (o(u)) {
              var f = !1
              for (var d in u)
                if (!N(d)) {
                  ;(f = !0), w(e, n)
                  break
                }
              !f && u['class'] && fe(u['class'])
            }
          } else t.data !== e.text && (t.data = e.text)
          return !0
        }
        return function(t, e, n, s, u, h) {
          if (!i(e)) {
            var p = !1,
              d = []
            if (i(t)) (p = !0), f(e, d, u, h)
            else {
              var v = o(t.nodeType)
              if (!v && hi(t, e)) P(t, e, d, s)
              else {
                if (v) {
                  if (
                    (1 === t.nodeType &&
                      t.hasAttribute(U) &&
                      (t.removeAttribute(U), (n = !0)),
                    a(n) && k(t, e, d))
                  )
                    return I(e, d, !0), t
                  t = l(t)
                }
                var y = t.elm,
                  _ = c.parentNode(y)
                if (
                  (f(e, d, y._leaveCb ? null : _, c.nextSibling(y)),
                  o(e.parent))
                ) {
                  var g = e.parent,
                    m = b(e)
                  while (g) {
                    for (var w = 0; w < r.destroy.length; ++w) r.destroy[w](g)
                    if (((g.elm = e.elm), m)) {
                      for (var C = 0; C < r.create.length; ++C)
                        r.create[C](ci, g)
                      var E = g.data.hook.insert
                      if (E.merged)
                        for (var x = 1; x < E.fns.length; x++) E.fns[x]()
                    } else ui(g)
                    g = g.parent
                  }
                }
                o(_) ? T(_, [t], 0, 0) : o(t.tag) && S(t)
              }
            }
            return I(e, d, p), e.elm
          }
          o(t) && S(t)
        }
      }
      var vi = {
        create: yi,
        update: yi,
        destroy: function(t) {
          yi(t, ci)
        }
      }
      function yi(t, e) {
        ;(t.data.directives || e.data.directives) && _i(t, e)
      }
      function _i(t, e) {
        var n,
          r,
          i,
          o = t === ci,
          a = e === ci,
          s = mi(t.data.directives, t.context),
          u = mi(e.data.directives, e.context),
          c = [],
          l = []
        for (n in u)
          (r = s[n]),
            (i = u[n]),
            r
              ? ((i.oldValue = r.value),
                wi(i, 'update', e, t),
                i.def && i.def.componentUpdated && l.push(i))
              : (wi(i, 'bind', e, t), i.def && i.def.inserted && c.push(i))
        if (c.length) {
          var h = function() {
            for (var n = 0; n < c.length; n++) wi(c[n], 'inserted', e, t)
          }
          o ? me(e, 'insert', h) : h()
        }
        if (
          (l.length &&
            me(e, 'postpatch', function() {
              for (var n = 0; n < l.length; n++)
                wi(l[n], 'componentUpdated', e, t)
            }),
          !o)
        )
          for (n in s) u[n] || wi(s[n], 'unbind', t, t, a)
      }
      var gi = Object.create(null)
      function mi(t, e) {
        var n,
          r,
          i = Object.create(null)
        if (!t) return i
        for (n = 0; n < t.length; n++)
          (r = t[n]),
            r.modifiers || (r.modifiers = gi),
            (i[bi(r)] = r),
            (r.def = Ht(e.$options, 'directives', r.name, !0))
        return i
      }
      function bi(t) {
        return (
          t.rawName || t.name + '.' + Object.keys(t.modifiers || {}).join('.')
        )
      }
      function wi(t, e, n, r, i) {
        var o = t.def && t.def[e]
        if (o)
          try {
            o(n.elm, t, n, r, i)
          } catch (r) {
            Jt(r, n.context, 'directive ' + t.name + ' ' + e + ' hook')
          }
      }
      var Ci = [si, vi]
      function Ei(t, e) {
        var n = e.componentOptions
        if (
          (!o(n) || !1 !== n.Ctor.options.inheritAttrs) &&
          (!i(t.data.attrs) || !i(e.data.attrs))
        ) {
          var r,
            a,
            s,
            u = e.elm,
            c = t.data.attrs || {},
            l = e.data.attrs || {}
          for (r in (o(l.__ob__) && (l = e.data.attrs = N({}, l)), l))
            (a = l[r]), (s = c[r]), s !== a && Si(u, r, a)
          for (r in ((Z || et) &&
            l.value !== c.value &&
            Si(u, 'value', l.value),
          c))
            i(l[r]) &&
              (Pr(r)
                ? u.removeAttributeNS(Ar, Ir(r))
                : xr(r) || u.removeAttribute(r))
        }
      }
      function Si(t, e, n) {
        t.tagName.indexOf('-') > -1
          ? Ti(t, e, n)
          : Or(e)
            ? Nr(n)
              ? t.removeAttribute(e)
              : ((n =
                  'allowfullscreen' === e && 'EMBED' === t.tagName
                    ? 'true'
                    : e),
                t.setAttribute(e, n))
            : xr(e)
              ? t.setAttribute(e, Nr(n) || 'false' === n ? 'false' : 'true')
              : Pr(e)
                ? Nr(n)
                  ? t.removeAttributeNS(Ar, Ir(e))
                  : t.setAttributeNS(Ar, e, n)
                : Ti(t, e, n)
      }
      function Ti(t, e, n) {
        if (Nr(n)) t.removeAttribute(e)
        else {
          if (
            Z &&
            !tt &&
            'TEXTAREA' === t.tagName &&
            'placeholder' === e &&
            !t.__ieph
          ) {
            var r = function(e) {
              e.stopImmediatePropagation(), t.removeEventListener('input', r)
            }
            t.addEventListener('input', r), (t.__ieph = !0)
          }
          t.setAttribute(e, n)
        }
      }
      var xi = { create: Ei, update: Ei }
      function Oi(t, e) {
        var n = e.elm,
          r = e.data,
          a = t.data
        if (
          !(
            i(r.staticClass) &&
            i(r.class) &&
            (i(a) || (i(a.staticClass) && i(a.class)))
          )
        ) {
          var s = kr(e),
            u = n._transitionClasses
          o(u) && (s = Fr(s, Lr(u))),
            s !== n._prevClass &&
              (n.setAttribute('class', s), (n._prevClass = s))
        }
      }
      var Ai,
        Pi = { create: Oi, update: Oi },
        Ii = '__r',
        Ni = '__c'
      function ki(t) {
        if (o(t[Ii])) {
          var e = Z ? 'change' : 'input'
          ;(t[e] = [].concat(t[Ii], t[e] || [])), delete t[Ii]
        }
        o(t[Ni]) &&
          ((t.change = [].concat(t[Ni], t.change || [])), delete t[Ni])
      }
      function Ri(t, e, n) {
        var r = Ai
        return function i() {
          var o = t.apply(null, arguments)
          null !== o && Fi(e, i, n, r)
        }
      }
      function Di(t, e, n, r, i) {
        ;(e = le(e)),
          n && (e = Ri(e, t, r)),
          Ai.addEventListener(t, e, it ? { capture: r, passive: i } : r)
      }
      function Fi(t, e, n, r) {
        ;(r || Ai).removeEventListener(t, e._withTask || e, n)
      }
      function Li(t, e) {
        if (!i(t.data.on) || !i(e.data.on)) {
          var n = e.data.on || {},
            r = t.data.on || {}
          ;(Ai = e.elm), ki(n), ge(n, r, Di, Fi, e.context), (Ai = void 0)
        }
      }
      var Mi = { create: Li, update: Li }
      function ji(t, e) {
        if (!i(t.data.domProps) || !i(e.data.domProps)) {
          var n,
            r,
            a = e.elm,
            s = t.data.domProps || {},
            u = e.data.domProps || {}
          for (n in (o(u.__ob__) && (u = e.data.domProps = N({}, u)), s))
            i(u[n]) && (a[n] = '')
          for (n in u) {
            if (((r = u[n]), 'textContent' === n || 'innerHTML' === n)) {
              if ((e.children && (e.children.length = 0), r === s[n])) continue
              1 === a.childNodes.length && a.removeChild(a.childNodes[0])
            }
            if ('value' === n) {
              a._value = r
              var c = i(r) ? '' : String(r)
              Ui(a, c) && (a.value = c)
            } else a[n] = r
          }
        }
      }
      function Ui(t, e) {
        return !t.composing && ('OPTION' === t.tagName || Wi(t, e) || qi(t, e))
      }
      function Wi(t, e) {
        var n = !0
        try {
          n = document.activeElement !== t
        } catch (t) {}
        return n && t.value !== e
      }
      function qi(t, e) {
        var n = t.value,
          r = t._vModifiers
        if (o(r)) {
          if (r.lazy) return !1
          if (r.number) return v(n) !== v(e)
          if (r.trim) return n.trim() !== e.trim()
        }
        return n !== e
      }
      var Vi = { create: ji, update: ji },
        $i = w(function(t) {
          var e = {},
            n = /;(?![^(]*\))/g,
            r = /:(.+)/
          return (
            t.split(n).forEach(function(t) {
              if (t) {
                var n = t.split(r)
                n.length > 1 && (e[n[0].trim()] = n[1].trim())
              }
            }),
            e
          )
        })
      function Qi(t) {
        var e = Bi(t.style)
        return t.staticStyle ? N(t.staticStyle, e) : e
      }
      function Bi(t) {
        return Array.isArray(t) ? k(t) : 'string' === typeof t ? $i(t) : t
      }
      function Hi(t, e) {
        var n,
          r = {}
        if (e) {
          var i = t
          while (i.componentInstance)
            (i = i.componentInstance._vnode),
              i && i.data && (n = Qi(i.data)) && N(r, n)
        }
        ;(n = Qi(t.data)) && N(r, n)
        var o = t
        while ((o = o.parent)) o.data && (n = Qi(o.data)) && N(r, n)
        return r
      }
      var Ki,
        zi = /^--/,
        Gi = /\s*!important$/,
        Yi = function(t, e, n) {
          if (zi.test(e)) t.style.setProperty(e, n)
          else if (Gi.test(n))
            t.style.setProperty(e, n.replace(Gi, ''), 'important')
          else {
            var r = Ji(e)
            if (Array.isArray(n))
              for (var i = 0, o = n.length; i < o; i++) t.style[r] = n[i]
            else t.style[r] = n
          }
        },
        Xi = ['Webkit', 'Moz', 'ms'],
        Ji = w(function(t) {
          if (
            ((Ki = Ki || document.createElement('div').style),
            (t = E(t)),
            'filter' !== t && t in Ki)
          )
            return t
          for (
            var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0;
            n < Xi.length;
            n++
          ) {
            var r = Xi[n] + e
            if (r in Ki) return r
          }
        })
      function Zi(t, e) {
        var n = e.data,
          r = t.data
        if (
          !(i(n.staticStyle) && i(n.style) && i(r.staticStyle) && i(r.style))
        ) {
          var a,
            s,
            u = e.elm,
            c = r.staticStyle,
            l = r.normalizedStyle || r.style || {},
            h = c || l,
            p = Bi(e.data.style) || {}
          e.data.normalizedStyle = o(p.__ob__) ? N({}, p) : p
          var f = Hi(e, !0)
          for (s in h) i(f[s]) && Yi(u, s, '')
          for (s in f) (a = f[s]), a !== h[s] && Yi(u, s, null == a ? '' : a)
        }
      }
      var to = { create: Zi, update: Zi }
      function eo(t, e) {
        if (e && (e = e.trim()))
          if (t.classList)
            e.indexOf(' ') > -1
              ? e.split(/\s+/).forEach(function(e) {
                  return t.classList.add(e)
                })
              : t.classList.add(e)
          else {
            var n = ' ' + (t.getAttribute('class') || '') + ' '
            n.indexOf(' ' + e + ' ') < 0 &&
              t.setAttribute('class', (n + e).trim())
          }
      }
      function no(t, e) {
        if (e && (e = e.trim()))
          if (t.classList)
            e.indexOf(' ') > -1
              ? e.split(/\s+/).forEach(function(e) {
                  return t.classList.remove(e)
                })
              : t.classList.remove(e),
              t.classList.length || t.removeAttribute('class')
          else {
            var n = ' ' + (t.getAttribute('class') || '') + ' ',
              r = ' ' + e + ' '
            while (n.indexOf(r) >= 0) n = n.replace(r, ' ')
            ;(n = n.trim()),
              n ? t.setAttribute('class', n) : t.removeAttribute('class')
          }
      }
      function ro(t) {
        if (t) {
          if ('object' === typeof t) {
            var e = {}
            return !1 !== t.css && N(e, io(t.name || 'v')), N(e, t), e
          }
          return 'string' === typeof t ? io(t) : void 0
        }
      }
      var io = w(function(t) {
          return {
            enterClass: t + '-enter',
            enterToClass: t + '-enter-to',
            enterActiveClass: t + '-enter-active',
            leaveClass: t + '-leave',
            leaveToClass: t + '-leave-to',
            leaveActiveClass: t + '-leave-active'
          }
        }),
        oo = G && !tt,
        ao = 'transition',
        so = 'animation',
        uo = 'transition',
        co = 'transitionend',
        lo = 'animation',
        ho = 'animationend'
      oo &&
        (void 0 === window.ontransitionend &&
          void 0 !== window.onwebkittransitionend &&
          ((uo = 'WebkitTransition'), (co = 'webkitTransitionEnd')),
        void 0 === window.onanimationend &&
          void 0 !== window.onwebkitanimationend &&
          ((lo = 'WebkitAnimation'), (ho = 'webkitAnimationEnd')))
      var po = G
        ? window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : setTimeout
        : function(t) {
            return t()
          }
      function fo(t) {
        po(function() {
          po(t)
        })
      }
      function vo(t, e) {
        var n = t._transitionClasses || (t._transitionClasses = [])
        n.indexOf(e) < 0 && (n.push(e), eo(t, e))
      }
      function yo(t, e) {
        t._transitionClasses && g(t._transitionClasses, e), no(t, e)
      }
      function _o(t, e, n) {
        var r = mo(t, e),
          i = r.type,
          o = r.timeout,
          a = r.propCount
        if (!i) return n()
        var s = i === ao ? co : ho,
          u = 0,
          c = function() {
            t.removeEventListener(s, l), n()
          },
          l = function(e) {
            e.target === t && ++u >= a && c()
          }
        setTimeout(function() {
          u < a && c()
        }, o + 1),
          t.addEventListener(s, l)
      }
      var go = /\b(transform|all)(,|$)/
      function mo(t, e) {
        var n,
          r = window.getComputedStyle(t),
          i = r[uo + 'Delay'].split(', '),
          o = r[uo + 'Duration'].split(', '),
          a = bo(i, o),
          s = r[lo + 'Delay'].split(', '),
          u = r[lo + 'Duration'].split(', '),
          c = bo(s, u),
          l = 0,
          h = 0
        e === ao
          ? a > 0 && ((n = ao), (l = a), (h = o.length))
          : e === so
            ? c > 0 && ((n = so), (l = c), (h = u.length))
            : ((l = Math.max(a, c)),
              (n = l > 0 ? (a > c ? ao : so) : null),
              (h = n ? (n === ao ? o.length : u.length) : 0))
        var p = n === ao && go.test(r[uo + 'Property'])
        return { type: n, timeout: l, propCount: h, hasTransform: p }
      }
      function bo(t, e) {
        while (t.length < e.length) t = t.concat(t)
        return Math.max.apply(
          null,
          e.map(function(e, n) {
            return wo(e) + wo(t[n])
          })
        )
      }
      function wo(t) {
        return 1e3 * Number(t.slice(0, -1))
      }
      function Co(t, e) {
        var n = t.elm
        o(n._leaveCb) && ((n._leaveCb.cancelled = !0), n._leaveCb())
        var r = ro(t.data.transition)
        if (!i(r) && !o(n._enterCb) && 1 === n.nodeType) {
          var a = r.css,
            s = r.type,
            u = r.enterClass,
            l = r.enterToClass,
            h = r.enterActiveClass,
            p = r.appearClass,
            f = r.appearToClass,
            d = r.appearActiveClass,
            y = r.beforeEnter,
            _ = r.enter,
            g = r.afterEnter,
            m = r.enterCancelled,
            b = r.beforeAppear,
            w = r.appear,
            C = r.afterAppear,
            E = r.appearCancelled,
            S = r.duration,
            T = Ue,
            x = Ue.$vnode
          while (x && x.parent) (x = x.parent), (T = x.context)
          var O = !T._isMounted || !t.isRootInsert
          if (!O || w || '' === w) {
            var A = O && p ? p : u,
              P = O && d ? d : h,
              I = O && f ? f : l,
              N = (O && b) || y,
              k = O && 'function' === typeof w ? w : _,
              R = (O && C) || g,
              D = (O && E) || m,
              F = v(c(S) ? S.enter : S)
            0
            var L = !1 !== a && !tt,
              M = To(k),
              U = (n._enterCb = j(function() {
                L && (yo(n, I), yo(n, P)),
                  U.cancelled ? (L && yo(n, A), D && D(n)) : R && R(n),
                  (n._enterCb = null)
              }))
            t.data.show ||
              me(t, 'insert', function() {
                var e = n.parentNode,
                  r = e && e._pending && e._pending[t.key]
                r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(),
                  k && k(n, U)
              }),
              N && N(n),
              L &&
                (vo(n, A),
                vo(n, P),
                fo(function() {
                  yo(n, A),
                    U.cancelled ||
                      (vo(n, I), M || (So(F) ? setTimeout(U, F) : _o(n, s, U)))
                })),
              t.data.show && (e && e(), k && k(n, U)),
              L || M || U()
          }
        }
      }
      function Eo(t, e) {
        var n = t.elm
        o(n._enterCb) && ((n._enterCb.cancelled = !0), n._enterCb())
        var r = ro(t.data.transition)
        if (i(r) || 1 !== n.nodeType) return e()
        if (!o(n._leaveCb)) {
          var a = r.css,
            s = r.type,
            u = r.leaveClass,
            l = r.leaveToClass,
            h = r.leaveActiveClass,
            p = r.beforeLeave,
            f = r.leave,
            d = r.afterLeave,
            y = r.leaveCancelled,
            _ = r.delayLeave,
            g = r.duration,
            m = !1 !== a && !tt,
            b = To(f),
            w = v(c(g) ? g.leave : g)
          0
          var C = (n._leaveCb = j(function() {
            n.parentNode &&
              n.parentNode._pending &&
              (n.parentNode._pending[t.key] = null),
              m && (yo(n, l), yo(n, h)),
              C.cancelled ? (m && yo(n, u), y && y(n)) : (e(), d && d(n)),
              (n._leaveCb = null)
          }))
          _ ? _(E) : E()
        }
        function E() {
          C.cancelled ||
            (t.data.show ||
              ((n.parentNode._pending || (n.parentNode._pending = {}))[
                t.key
              ] = t),
            p && p(n),
            m &&
              (vo(n, u),
              vo(n, h),
              fo(function() {
                yo(n, u),
                  C.cancelled ||
                    (vo(n, l), b || (So(w) ? setTimeout(C, w) : _o(n, s, C)))
              })),
            f && f(n, C),
            m || b || C())
        }
      }
      function So(t) {
        return 'number' === typeof t && !isNaN(t)
      }
      function To(t) {
        if (i(t)) return !1
        var e = t.fns
        return o(e)
          ? To(Array.isArray(e) ? e[0] : e)
          : (t._length || t.length) > 1
      }
      function xo(t, e) {
        !0 !== e.data.show && Co(e)
      }
      var Oo = G
          ? {
              create: xo,
              activate: xo,
              remove: function(t, e) {
                !0 !== t.data.show ? Eo(t, e) : e()
              }
            }
          : {},
        Ao = [xi, Pi, Mi, Vi, to, Oo],
        Po = Ao.concat(Ci),
        Io = di({ nodeOps: ai, modules: Po })
      tt &&
        document.addEventListener('selectionchange', function() {
          var t = document.activeElement
          t && t.vmodel && jo(t, 'input')
        })
      var No = {
        inserted: function(t, e, n, r) {
          'select' === n.tag
            ? (r.elm && !r.elm._vOptions
                ? me(n, 'postpatch', function() {
                    No.componentUpdated(t, e, n)
                  })
                : ko(t, e, n.context),
              (t._vOptions = [].map.call(t.options, Fo)))
            : ('textarea' === n.tag || Hr(t.type)) &&
              ((t._vModifiers = e.modifiers),
              e.modifiers.lazy ||
                (t.addEventListener('compositionstart', Lo),
                t.addEventListener('compositionend', Mo),
                t.addEventListener('change', Mo),
                tt && (t.vmodel = !0)))
        },
        componentUpdated: function(t, e, n) {
          if ('select' === n.tag) {
            ko(t, e, n.context)
            var r = t._vOptions,
              i = (t._vOptions = [].map.call(t.options, Fo))
            if (
              i.some(function(t, e) {
                return !L(t, r[e])
              })
            ) {
              var o = t.multiple
                ? e.value.some(function(t) {
                    return Do(t, i)
                  })
                : e.value !== e.oldValue && Do(e.value, i)
              o && jo(t, 'change')
            }
          }
        }
      }
      function ko(t, e, n) {
        Ro(t, e, n),
          (Z || et) &&
            setTimeout(function() {
              Ro(t, e, n)
            }, 0)
      }
      function Ro(t, e, n) {
        var r = e.value,
          i = t.multiple
        if (!i || Array.isArray(r)) {
          for (var o, a, s = 0, u = t.options.length; s < u; s++)
            if (((a = t.options[s]), i))
              (o = M(r, Fo(a)) > -1), a.selected !== o && (a.selected = o)
            else if (L(Fo(a), r))
              return void (t.selectedIndex !== s && (t.selectedIndex = s))
          i || (t.selectedIndex = -1)
        }
      }
      function Do(t, e) {
        return e.every(function(e) {
          return !L(e, t)
        })
      }
      function Fo(t) {
        return '_value' in t ? t._value : t.value
      }
      function Lo(t) {
        t.target.composing = !0
      }
      function Mo(t) {
        t.target.composing && ((t.target.composing = !1), jo(t.target, 'input'))
      }
      function jo(t, e) {
        var n = document.createEvent('HTMLEvents')
        n.initEvent(e, !0, !0), t.dispatchEvent(n)
      }
      function Uo(t) {
        return !t.componentInstance || (t.data && t.data.transition)
          ? t
          : Uo(t.componentInstance._vnode)
      }
      var Wo = {
          bind: function(t, e, n) {
            var r = e.value
            n = Uo(n)
            var i = n.data && n.data.transition,
              o = (t.__vOriginalDisplay =
                'none' === t.style.display ? '' : t.style.display)
            r && i
              ? ((n.data.show = !0),
                Co(n, function() {
                  t.style.display = o
                }))
              : (t.style.display = r ? o : 'none')
          },
          update: function(t, e, n) {
            var r = e.value,
              i = e.oldValue
            if (!r !== !i) {
              n = Uo(n)
              var o = n.data && n.data.transition
              o
                ? ((n.data.show = !0),
                  r
                    ? Co(n, function() {
                        t.style.display = t.__vOriginalDisplay
                      })
                    : Eo(n, function() {
                        t.style.display = 'none'
                      }))
                : (t.style.display = r ? t.__vOriginalDisplay : 'none')
            }
          },
          unbind: function(t, e, n, r, i) {
            i || (t.style.display = t.__vOriginalDisplay)
          }
        },
        qo = { model: No, show: Wo },
        Vo = {
          name: String,
          appear: Boolean,
          css: Boolean,
          mode: String,
          type: String,
          enterClass: String,
          leaveClass: String,
          enterToClass: String,
          leaveToClass: String,
          enterActiveClass: String,
          leaveActiveClass: String,
          appearClass: String,
          appearActiveClass: String,
          appearToClass: String,
          duration: [Number, String, Object]
        }
      function $o(t) {
        var e = t && t.componentOptions
        return e && e.Ctor.options.abstract ? $o(Ie(e.children)) : t
      }
      function Qo(t) {
        var e = {},
          n = t.$options
        for (var r in n.propsData) e[r] = t[r]
        var i = n._parentListeners
        for (var o in i) e[E(o)] = i[o]
        return e
      }
      function Bo(t, e) {
        if (/\d-keep-alive$/.test(e.tag))
          return t('keep-alive', { props: e.componentOptions.propsData })
      }
      function Ho(t) {
        while ((t = t.parent)) if (t.data.transition) return !0
      }
      function Ko(t, e) {
        return e.key === t.key && e.tag === t.tag
      }
      var zo = {
          name: 'transition',
          props: Vo,
          abstract: !0,
          render: function(t) {
            var e = this,
              n = this.$slots.default
            if (
              n &&
              ((n = n.filter(function(t) {
                return t.tag || Pe(t)
              })),
              n.length)
            ) {
              0
              var r = this.mode
              0
              var i = n[0]
              if (Ho(this.$vnode)) return i
              var o = $o(i)
              if (!o) return i
              if (this._leaving) return Bo(t, i)
              var a = '__transition-' + this._uid + '-'
              o.key =
                null == o.key
                  ? o.isComment
                    ? a + 'comment'
                    : a + o.tag
                  : u(o.key)
                    ? 0 === String(o.key).indexOf(a)
                      ? o.key
                      : a + o.key
                    : o.key
              var s = ((o.data || (o.data = {})).transition = Qo(this)),
                c = this._vnode,
                l = $o(c)
              if (
                (o.data.directives &&
                  o.data.directives.some(function(t) {
                    return 'show' === t.name
                  }) &&
                  (o.data.show = !0),
                l &&
                  l.data &&
                  !Ko(o, l) &&
                  !Pe(l) &&
                  (!l.componentInstance ||
                    !l.componentInstance._vnode.isComment))
              ) {
                var h = (l.data.transition = N({}, s))
                if ('out-in' === r)
                  return (
                    (this._leaving = !0),
                    me(h, 'afterLeave', function() {
                      ;(e._leaving = !1), e.$forceUpdate()
                    }),
                    Bo(t, i)
                  )
                if ('in-out' === r) {
                  if (Pe(o)) return c
                  var p,
                    f = function() {
                      p()
                    }
                  me(s, 'afterEnter', f),
                    me(s, 'enterCancelled', f),
                    me(h, 'delayLeave', function(t) {
                      p = t
                    })
                }
              }
              return i
            }
          }
        },
        Go = N({ tag: String, moveClass: String }, Vo)
      delete Go.mode
      var Yo = {
        props: Go,
        render: function(t) {
          for (
            var e = this.tag || this.$vnode.data.tag || 'span',
              n = Object.create(null),
              r = (this.prevChildren = this.children),
              i = this.$slots.default || [],
              o = (this.children = []),
              a = Qo(this),
              s = 0;
            s < i.length;
            s++
          ) {
            var u = i[s]
            if (u.tag)
              if (null != u.key && 0 !== String(u.key).indexOf('__vlist'))
                o.push(u),
                  (n[u.key] = u),
                  ((u.data || (u.data = {})).transition = a)
              else;
          }
          if (r) {
            for (var c = [], l = [], h = 0; h < r.length; h++) {
              var p = r[h]
              ;(p.data.transition = a),
                (p.data.pos = p.elm.getBoundingClientRect()),
                n[p.key] ? c.push(p) : l.push(p)
            }
            ;(this.kept = t(e, null, c)), (this.removed = l)
          }
          return t(e, null, o)
        },
        beforeUpdate: function() {
          this.__patch__(this._vnode, this.kept, !1, !0),
            (this._vnode = this.kept)
        },
        updated: function() {
          var t = this.prevChildren,
            e = this.moveClass || (this.name || 'v') + '-move'
          t.length &&
            this.hasMove(t[0].elm, e) &&
            (t.forEach(Xo),
            t.forEach(Jo),
            t.forEach(Zo),
            (this._reflow = document.body.offsetHeight),
            t.forEach(function(t) {
              if (t.data.moved) {
                var n = t.elm,
                  r = n.style
                vo(n, e),
                  (r.transform = r.WebkitTransform = r.transitionDuration = ''),
                  n.addEventListener(
                    co,
                    (n._moveCb = function t(r) {
                      ;(r && !/transform$/.test(r.propertyName)) ||
                        (n.removeEventListener(co, t),
                        (n._moveCb = null),
                        yo(n, e))
                    })
                  )
              }
            }))
        },
        methods: {
          hasMove: function(t, e) {
            if (!oo) return !1
            if (this._hasMove) return this._hasMove
            var n = t.cloneNode()
            t._transitionClasses &&
              t._transitionClasses.forEach(function(t) {
                no(n, t)
              }),
              eo(n, e),
              (n.style.display = 'none'),
              this.$el.appendChild(n)
            var r = mo(n)
            return this.$el.removeChild(n), (this._hasMove = r.hasTransform)
          }
        }
      }
      function Xo(t) {
        t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb()
      }
      function Jo(t) {
        t.data.newPos = t.elm.getBoundingClientRect()
      }
      function Zo(t) {
        var e = t.data.pos,
          n = t.data.newPos,
          r = e.left - n.left,
          i = e.top - n.top
        if (r || i) {
          t.data.moved = !0
          var o = t.elm.style
          ;(o.transform = o.WebkitTransform =
            'translate(' + r + 'px,' + i + 'px)'),
            (o.transitionDuration = '0s')
        }
      }
      var ta = { Transition: zo, TransitionGroup: Yo }
      ;(ur.config.mustUseProp = Tr),
        (ur.config.isReservedTag = Vr),
        (ur.config.isReservedAttr = Er),
        (ur.config.getTagNamespace = $r),
        (ur.config.isUnknownElement = Br),
        N(ur.options.directives, qo),
        N(ur.options.components, ta),
        (ur.prototype.__patch__ = G ? Io : R),
        (ur.prototype.$mount = function(t, e) {
          return (t = t && G ? Kr(t) : void 0), Ve(this, t, e)
        }),
        G &&
          setTimeout(function() {
            V.devtools && st && st.emit('init', ur)
          }, 0),
        (e['default'] = ur)
    },
    L2JU: function(t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'Store', function() {
          return d
        }),
        n.d(e, 'install', function() {
          return A
        }),
        n.d(e, 'mapState', function() {
          return P
        }),
        n.d(e, 'mapMutations', function() {
          return I
        }),
        n.d(e, 'mapGetters', function() {
          return N
        }),
        n.d(e, 'mapActions', function() {
          return k
        }),
        n.d(e, 'createNamespacedHelpers', function() {
          return R
        })
      /**
       * vuex v3.0.1
       * (c) 2017 Evan You
       * @license MIT
       */
      var r = function(t) {
          var e = Number(t.version.split('.')[0])
          if (e >= 2) t.mixin({ beforeCreate: r })
          else {
            var n = t.prototype._init
            t.prototype._init = function(t) {
              void 0 === t && (t = {}),
                (t.init = t.init ? [r].concat(t.init) : r),
                n.call(this, t)
            }
          }
          function r() {
            var t = this.$options
            t.store
              ? (this.$store =
                  'function' === typeof t.store ? t.store() : t.store)
              : t.parent && t.parent.$store && (this.$store = t.parent.$store)
          }
        },
        i = 'undefined' !== typeof window && window.__VUE_DEVTOOLS_GLOBAL_HOOK__
      function o(t) {
        i &&
          ((t._devtoolHook = i),
          i.emit('vuex:init', t),
          i.on('vuex:travel-to-state', function(e) {
            t.replaceState(e)
          }),
          t.subscribe(function(t, e) {
            i.emit('vuex:mutation', t, e)
          }))
      }
      function a(t, e) {
        Object.keys(t).forEach(function(n) {
          return e(t[n], n)
        })
      }
      function s(t) {
        return null !== t && 'object' === typeof t
      }
      function u(t) {
        return t && 'function' === typeof t.then
      }
      var c = function(t, e) {
          ;(this.runtime = e),
            (this._children = Object.create(null)),
            (this._rawModule = t)
          var n = t.state
          this.state = ('function' === typeof n ? n() : n) || {}
        },
        l = { namespaced: { configurable: !0 } }
      ;(l.namespaced.get = function() {
        return !!this._rawModule.namespaced
      }),
        (c.prototype.addChild = function(t, e) {
          this._children[t] = e
        }),
        (c.prototype.removeChild = function(t) {
          delete this._children[t]
        }),
        (c.prototype.getChild = function(t) {
          return this._children[t]
        }),
        (c.prototype.update = function(t) {
          ;(this._rawModule.namespaced = t.namespaced),
            t.actions && (this._rawModule.actions = t.actions),
            t.mutations && (this._rawModule.mutations = t.mutations),
            t.getters && (this._rawModule.getters = t.getters)
        }),
        (c.prototype.forEachChild = function(t) {
          a(this._children, t)
        }),
        (c.prototype.forEachGetter = function(t) {
          this._rawModule.getters && a(this._rawModule.getters, t)
        }),
        (c.prototype.forEachAction = function(t) {
          this._rawModule.actions && a(this._rawModule.actions, t)
        }),
        (c.prototype.forEachMutation = function(t) {
          this._rawModule.mutations && a(this._rawModule.mutations, t)
        }),
        Object.defineProperties(c.prototype, l)
      var h = function(t) {
        this.register([], t, !1)
      }
      function p(t, e, n) {
        if ((e.update(n), n.modules))
          for (var r in n.modules) {
            if (!e.getChild(r)) return void 0
            p(t.concat(r), e.getChild(r), n.modules[r])
          }
      }
      ;(h.prototype.get = function(t) {
        return t.reduce(function(t, e) {
          return t.getChild(e)
        }, this.root)
      }),
        (h.prototype.getNamespace = function(t) {
          var e = this.root
          return t.reduce(function(t, n) {
            return (e = e.getChild(n)), t + (e.namespaced ? n + '/' : '')
          }, '')
        }),
        (h.prototype.update = function(t) {
          p([], this.root, t)
        }),
        (h.prototype.register = function(t, e, n) {
          var r = this
          void 0 === n && (n = !0)
          var i = new c(e, n)
          if (0 === t.length) this.root = i
          else {
            var o = this.get(t.slice(0, -1))
            o.addChild(t[t.length - 1], i)
          }
          e.modules &&
            a(e.modules, function(e, i) {
              r.register(t.concat(i), e, n)
            })
        }),
        (h.prototype.unregister = function(t) {
          var e = this.get(t.slice(0, -1)),
            n = t[t.length - 1]
          e.getChild(n).runtime && e.removeChild(n)
        })
      var f
      var d = function(t) {
          var e = this
          void 0 === t && (t = {}),
            !f && 'undefined' !== typeof window && window.Vue && A(window.Vue)
          var n = t.plugins
          void 0 === n && (n = [])
          var r = t.strict
          void 0 === r && (r = !1)
          var i = t.state
          void 0 === i && (i = {}),
            'function' === typeof i && (i = i() || {}),
            (this._committing = !1),
            (this._actions = Object.create(null)),
            (this._actionSubscribers = []),
            (this._mutations = Object.create(null)),
            (this._wrappedGetters = Object.create(null)),
            (this._modules = new h(t)),
            (this._modulesNamespaceMap = Object.create(null)),
            (this._subscribers = []),
            (this._watcherVM = new f())
          var a = this,
            s = this,
            u = s.dispatch,
            c = s.commit
          ;(this.dispatch = function(t, e) {
            return u.call(a, t, e)
          }),
            (this.commit = function(t, e, n) {
              return c.call(a, t, e, n)
            }),
            (this.strict = r),
            m(this, i, [], this._modules.root),
            g(this, i),
            n.forEach(function(t) {
              return t(e)
            }),
            f.config.devtools && o(this)
        },
        v = { state: { configurable: !0 } }
      function y(t, e) {
        return (
          e.indexOf(t) < 0 && e.push(t),
          function() {
            var n = e.indexOf(t)
            n > -1 && e.splice(n, 1)
          }
        )
      }
      function _(t, e) {
        ;(t._actions = Object.create(null)),
          (t._mutations = Object.create(null)),
          (t._wrappedGetters = Object.create(null)),
          (t._modulesNamespaceMap = Object.create(null))
        var n = t.state
        m(t, n, [], t._modules.root, !0), g(t, n, e)
      }
      function g(t, e, n) {
        var r = t._vm
        t.getters = {}
        var i = t._wrappedGetters,
          o = {}
        a(i, function(e, n) {
          ;(o[n] = function() {
            return e(t)
          }),
            Object.defineProperty(t.getters, n, {
              get: function() {
                return t._vm[n]
              },
              enumerable: !0
            })
        })
        var s = f.config.silent
        ;(f.config.silent = !0),
          (t._vm = new f({ data: { $$state: e }, computed: o })),
          (f.config.silent = s),
          t.strict && T(t),
          r &&
            (n &&
              t._withCommit(function() {
                r._data.$$state = null
              }),
            f.nextTick(function() {
              return r.$destroy()
            }))
      }
      function m(t, e, n, r, i) {
        var o = !n.length,
          a = t._modules.getNamespace(n)
        if ((r.namespaced && (t._modulesNamespaceMap[a] = r), !o && !i)) {
          var s = x(e, n.slice(0, -1)),
            u = n[n.length - 1]
          t._withCommit(function() {
            f.set(s, u, r.state)
          })
        }
        var c = (r.context = b(t, a, n))
        r.forEachMutation(function(e, n) {
          var r = a + n
          C(t, r, e, c)
        }),
          r.forEachAction(function(e, n) {
            var r = e.root ? n : a + n,
              i = e.handler || e
            E(t, r, i, c)
          }),
          r.forEachGetter(function(e, n) {
            var r = a + n
            S(t, r, e, c)
          }),
          r.forEachChild(function(r, o) {
            m(t, e, n.concat(o), r, i)
          })
      }
      function b(t, e, n) {
        var r = '' === e,
          i = {
            dispatch: r
              ? t.dispatch
              : function(n, r, i) {
                  var o = O(n, r, i),
                    a = o.payload,
                    s = o.options,
                    u = o.type
                  return (s && s.root) || (u = e + u), t.dispatch(u, a)
                },
            commit: r
              ? t.commit
              : function(n, r, i) {
                  var o = O(n, r, i),
                    a = o.payload,
                    s = o.options,
                    u = o.type
                  ;(s && s.root) || (u = e + u), t.commit(u, a, s)
                }
          }
        return (
          Object.defineProperties(i, {
            getters: {
              get: r
                ? function() {
                    return t.getters
                  }
                : function() {
                    return w(t, e)
                  }
            },
            state: {
              get: function() {
                return x(t.state, n)
              }
            }
          }),
          i
        )
      }
      function w(t, e) {
        var n = {},
          r = e.length
        return (
          Object.keys(t.getters).forEach(function(i) {
            if (i.slice(0, r) === e) {
              var o = i.slice(r)
              Object.defineProperty(n, o, {
                get: function() {
                  return t.getters[i]
                },
                enumerable: !0
              })
            }
          }),
          n
        )
      }
      function C(t, e, n, r) {
        var i = t._mutations[e] || (t._mutations[e] = [])
        i.push(function(e) {
          n.call(t, r.state, e)
        })
      }
      function E(t, e, n, r) {
        var i = t._actions[e] || (t._actions[e] = [])
        i.push(function(e, i) {
          var o = n.call(
            t,
            {
              dispatch: r.dispatch,
              commit: r.commit,
              getters: r.getters,
              state: r.state,
              rootGetters: t.getters,
              rootState: t.state
            },
            e,
            i
          )
          return (
            u(o) || (o = Promise.resolve(o)),
            t._devtoolHook
              ? o.catch(function(e) {
                  throw (t._devtoolHook.emit('vuex:error', e), e)
                })
              : o
          )
        })
      }
      function S(t, e, n, r) {
        t._wrappedGetters[e] ||
          (t._wrappedGetters[e] = function(t) {
            return n(r.state, r.getters, t.state, t.getters)
          })
      }
      function T(t) {
        t._vm.$watch(
          function() {
            return this._data.$$state
          },
          function() {
            0
          },
          { deep: !0, sync: !0 }
        )
      }
      function x(t, e) {
        return e.length
          ? e.reduce(function(t, e) {
              return t[e]
            }, t)
          : t
      }
      function O(t, e, n) {
        return (
          s(t) && t.type && ((n = e), (e = t), (t = t.type)),
          { type: t, payload: e, options: n }
        )
      }
      function A(t) {
        ;(f && t === f) || ((f = t), r(f))
      }
      ;(v.state.get = function() {
        return this._vm._data.$$state
      }),
        (v.state.set = function(t) {
          0
        }),
        (d.prototype.commit = function(t, e, n) {
          var r = this,
            i = O(t, e, n),
            o = i.type,
            a = i.payload,
            s = (i.options, { type: o, payload: a }),
            u = this._mutations[o]
          u &&
            (this._withCommit(function() {
              u.forEach(function(t) {
                t(a)
              })
            }),
            this._subscribers.forEach(function(t) {
              return t(s, r.state)
            }))
        }),
        (d.prototype.dispatch = function(t, e) {
          var n = this,
            r = O(t, e),
            i = r.type,
            o = r.payload,
            a = { type: i, payload: o },
            s = this._actions[i]
          if (s)
            return (
              this._actionSubscribers.forEach(function(t) {
                return t(a, n.state)
              }),
              s.length > 1
                ? Promise.all(
                    s.map(function(t) {
                      return t(o)
                    })
                  )
                : s[0](o)
            )
        }),
        (d.prototype.subscribe = function(t) {
          return y(t, this._subscribers)
        }),
        (d.prototype.subscribeAction = function(t) {
          return y(t, this._actionSubscribers)
        }),
        (d.prototype.watch = function(t, e, n) {
          var r = this
          return this._watcherVM.$watch(
            function() {
              return t(r.state, r.getters)
            },
            e,
            n
          )
        }),
        (d.prototype.replaceState = function(t) {
          var e = this
          this._withCommit(function() {
            e._vm._data.$$state = t
          })
        }),
        (d.prototype.registerModule = function(t, e, n) {
          void 0 === n && (n = {}),
            'string' === typeof t && (t = [t]),
            this._modules.register(t, e),
            m(this, this.state, t, this._modules.get(t), n.preserveState),
            g(this, this.state)
        }),
        (d.prototype.unregisterModule = function(t) {
          var e = this
          'string' === typeof t && (t = [t]),
            this._modules.unregister(t),
            this._withCommit(function() {
              var n = x(e.state, t.slice(0, -1))
              f.delete(n, t[t.length - 1])
            }),
            _(this)
        }),
        (d.prototype.hotUpdate = function(t) {
          this._modules.update(t), _(this, !0)
        }),
        (d.prototype._withCommit = function(t) {
          var e = this._committing
          ;(this._committing = !0), t(), (this._committing = e)
        }),
        Object.defineProperties(d.prototype, v)
      var P = F(function(t, e) {
          var n = {}
          return (
            D(e).forEach(function(e) {
              var r = e.key,
                i = e.val
              ;(n[r] = function() {
                var e = this.$store.state,
                  n = this.$store.getters
                if (t) {
                  var r = L(this.$store, 'mapState', t)
                  if (!r) return
                  ;(e = r.context.state), (n = r.context.getters)
                }
                return 'function' === typeof i ? i.call(this, e, n) : e[i]
              }),
                (n[r].vuex = !0)
            }),
            n
          )
        }),
        I = F(function(t, e) {
          var n = {}
          return (
            D(e).forEach(function(e) {
              var r = e.key,
                i = e.val
              n[r] = function() {
                var e = [],
                  n = arguments.length
                while (n--) e[n] = arguments[n]
                var r = this.$store.commit
                if (t) {
                  var o = L(this.$store, 'mapMutations', t)
                  if (!o) return
                  r = o.context.commit
                }
                return 'function' === typeof i
                  ? i.apply(this, [r].concat(e))
                  : r.apply(this.$store, [i].concat(e))
              }
            }),
            n
          )
        }),
        N = F(function(t, e) {
          var n = {}
          return (
            D(e).forEach(function(e) {
              var r = e.key,
                i = e.val
              ;(i = t + i),
                (n[r] = function() {
                  if (!t || L(this.$store, 'mapGetters', t))
                    return this.$store.getters[i]
                }),
                (n[r].vuex = !0)
            }),
            n
          )
        }),
        k = F(function(t, e) {
          var n = {}
          return (
            D(e).forEach(function(e) {
              var r = e.key,
                i = e.val
              n[r] = function() {
                var e = [],
                  n = arguments.length
                while (n--) e[n] = arguments[n]
                var r = this.$store.dispatch
                if (t) {
                  var o = L(this.$store, 'mapActions', t)
                  if (!o) return
                  r = o.context.dispatch
                }
                return 'function' === typeof i
                  ? i.apply(this, [r].concat(e))
                  : r.apply(this.$store, [i].concat(e))
              }
            }),
            n
          )
        }),
        R = function(t) {
          return {
            mapState: P.bind(null, t),
            mapGetters: N.bind(null, t),
            mapMutations: I.bind(null, t),
            mapActions: k.bind(null, t)
          }
        }
      function D(t) {
        return Array.isArray(t)
          ? t.map(function(t) {
              return { key: t, val: t }
            })
          : Object.keys(t).map(function(e) {
              return { key: e, val: t[e] }
            })
      }
      function F(t) {
        return function(e, n) {
          return (
            'string' !== typeof e
              ? ((n = e), (e = ''))
              : '/' !== e.charAt(e.length - 1) && (e += '/'),
            t(e, n)
          )
        }
      }
      function L(t, e, n) {
        var r = t._modulesNamespaceMap[n]
        return r
      }
      var M = {
        Store: d,
        install: A,
        version: '3.0.1',
        mapState: P,
        mapMutations: I,
        mapGetters: N,
        mapActions: k,
        createNamespacedHelpers: R
      }
      e['default'] = M
    },
    LQAc: function(t, e) {
      t.exports = !1
    },
    LZWt: function(t, e) {
      var n = {}.toString
      t.exports = function(t) {
        return n.call(t).slice(8, -1)
      }
    },
    M6Qj: function(t, e, n) {
      var r = n('hPIQ'),
        i = n('K0xU')('iterator'),
        o = Array.prototype
      t.exports = function(t) {
        return void 0 !== t && (r.Array === t || o[i] === t)
      }
    },
    Mb3Q: function(t, e) {
      function n(t, e) {
        var r = {
          name: t.name,
          path: t.path,
          hash: t.hash,
          query: t.query,
          params: t.params,
          fullPath: t.fullPath,
          meta: t.meta
        }
        return e && (r.from = n(e)), Object.freeze(r)
      }
      e.sync = function(t, e, r) {
        var i = (r || {}).moduleName || 'route'
        t.registerModule(i, {
          namespaced: !0,
          state: n(e.currentRoute),
          mutations: {
            ROUTE_CHANGED: function(e, r) {
              t.state[i] = n(r.to, r.from)
            }
          }
        })
        var o,
          a = !1,
          s = t.watch(
            function(t) {
              return t[i]
            },
            function(t) {
              var n = t.fullPath
              n !== o && (null != o && ((a = !0), e.push(t)), (o = n))
            },
            { sync: !0 }
          ),
          u = e.afterEach(function(e, n) {
            a
              ? (a = !1)
              : ((o = e.fullPath),
                t.commit(i + '/ROUTE_CHANGED', { to: e, from: n }))
          })
        return function() {
          null != u && u(), null != s && s(), t.unregisterModule(i)
        }
      }
    },
    MfQN: function(t, e) {
      t.exports = function(t, e, n) {
        var r = void 0 === n
        switch (e.length) {
          case 0:
            return r ? t() : t.call(n)
          case 1:
            return r ? t(e[0]) : t.call(n, e[0])
          case 2:
            return r ? t(e[0], e[1]) : t.call(n, e[0], e[1])
          case 3:
            return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2])
          case 4:
            return r
              ? t(e[0], e[1], e[2], e[3])
              : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
      }
    },
    Mukb: function(t, e, n) {
      var r = n('hswa'),
        i = n('RjD/')
      t.exports = n('nh4g')
        ? function(t, e, n) {
            return r.f(t, e, i(1, n))
          }
        : function(t, e, n) {
            return (t[e] = n), t
          }
    },
    NSPt: function(t, e, n) {
      'use strict'
      function r(t) {
        return t && 'object' === typeof t && 'default' in t ? t['default'] : t
      }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = n('zVF4'),
        o = n('q/0M'),
        a = n('mrSG'),
        s = r(n('wj3C')),
        u = (function() {
          function t(t) {
            ;(this.domStorage_ = t), (this.prefix_ = 'firebase:')
          }
          return (
            (t.prototype.set = function(t, e) {
              null == e
                ? this.domStorage_.removeItem(this.prefixedName_(t))
                : this.domStorage_.setItem(
                    this.prefixedName_(t),
                    i.stringify(e)
                  )
            }),
            (t.prototype.get = function(t) {
              var e = this.domStorage_.getItem(this.prefixedName_(t))
              return null == e ? null : i.jsonEval(e)
            }),
            (t.prototype.remove = function(t) {
              this.domStorage_.removeItem(this.prefixedName_(t))
            }),
            (t.prototype.prefixedName_ = function(t) {
              return this.prefix_ + t
            }),
            (t.prototype.toString = function() {
              return this.domStorage_.toString()
            }),
            t
          )
        })(),
        c = (function() {
          function t() {
            ;(this.cache_ = {}), (this.isInMemoryStorage = !0)
          }
          return (
            (t.prototype.set = function(t, e) {
              null == e ? delete this.cache_[t] : (this.cache_[t] = e)
            }),
            (t.prototype.get = function(t) {
              return i.contains(this.cache_, t) ? this.cache_[t] : null
            }),
            (t.prototype.remove = function(t) {
              delete this.cache_[t]
            }),
            t
          )
        })(),
        l = function(t) {
          try {
            if (
              'undefined' !== typeof window &&
              'undefined' !== typeof window[t]
            ) {
              var e = window[t]
              return (
                e.setItem('firebase:sentinel', 'cache'),
                e.removeItem('firebase:sentinel'),
                new u(e)
              )
            }
          } catch (t) {}
          return new c()
        },
        h = l('localStorage'),
        p = l('sessionStorage'),
        f = new o.Logger('@firebase/database'),
        d = (function() {
          var t = 1
          return function() {
            return t++
          }
        })(),
        v = function(t) {
          var e = i.stringToByteArray(t),
            n = new i.Sha1()
          n.update(e)
          var r = n.digest()
          return i.base64.encodeByteArray(r)
        },
        y = function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          for (var n = '', r = 0; r < t.length; r++)
            Array.isArray(t[r]) ||
            (t[r] &&
              'object' === typeof t[r] &&
              'number' === typeof t[r].length)
              ? (n += y.apply(null, t[r]))
              : 'object' === typeof t[r]
                ? (n += i.stringify(t[r]))
                : (n += t[r]),
              (n += ' ')
          return n
        },
        _ = null,
        g = !0,
        m = function(t, e) {
          i.assert(
            !e || !0 === t || !1 === t,
            "Can't turn on custom loggers persistently."
          ),
            !0 === t
              ? ((f.logLevel = o.LogLevel.VERBOSE),
                (_ = f.log.bind(f)),
                e && p.set('logging_enabled', !0))
              : 'function' === typeof t
                ? (_ = t)
                : ((_ = null), p.remove('logging_enabled'))
        },
        b = function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          if (
            (!0 === g &&
              ((g = !1),
              null === _ && !0 === p.get('logging_enabled') && m(!0)),
            _)
          ) {
            var n = y.apply(null, t)
            _(n)
          }
        },
        w = function(t) {
          return function() {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n]
            b.apply(void 0, [t].concat(e))
          }
        },
        C = function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          var n = 'FIREBASE INTERNAL ERROR: ' + y.apply(void 0, t)
          f.error(n)
        },
        E = function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          var n = 'FIREBASE FATAL ERROR: ' + y.apply(void 0, t)
          throw (f.error(n), new Error(n))
        },
        S = function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          var n = 'FIREBASE WARNING: ' + y.apply(void 0, t)
          f.warn(n)
        },
        T = function() {
          'undefined' !== typeof window &&
            window.location &&
            window.location.protocol &&
            -1 !== window.location.protocol.indexOf('https:') &&
            S(
              'Insecure Firebase access from a secure page. Please use https in calls to new Firebase().'
            )
        },
        x = function(t) {
          return (
            'number' === typeof t &&
            (t != t ||
              t == Number.POSITIVE_INFINITY ||
              t == Number.NEGATIVE_INFINITY)
          )
        },
        O = function(t) {
          if (i.isNodeSdk() || 'complete' === document.readyState) t()
          else {
            var e = !1,
              n = function() {
                document.body
                  ? e || ((e = !0), t())
                  : setTimeout(n, Math.floor(10))
              }
            document.addEventListener
              ? (document.addEventListener('DOMContentLoaded', n, !1),
                window.addEventListener('load', n, !1))
              : document.attachEvent &&
                (document.attachEvent('onreadystatechange', function() {
                  'complete' === document.readyState && n()
                }),
                window.attachEvent('onload', n))
          }
        },
        A = '[MIN_NAME]',
        P = '[MAX_NAME]',
        I = function(t, e) {
          if (t === e) return 0
          if (t === A || e === P) return -1
          if (e === A || t === P) return 1
          var n = q(t),
            r = q(e)
          return null !== n
            ? null !== r
              ? n - r == 0
                ? t.length - e.length
                : n - r
              : -1
            : null !== r
              ? 1
              : t < e
                ? -1
                : 1
        },
        N = function(t, e) {
          return t === e ? 0 : t < e ? -1 : 1
        },
        k = function(t, e) {
          if (e && t in e) return e[t]
          throw new Error(
            'Missing required key (' + t + ') in object: ' + i.stringify(e)
          )
        },
        R = function(t) {
          if ('object' !== typeof t || null === t) return i.stringify(t)
          var e = []
          for (var n in t) e.push(n)
          e.sort()
          for (var r = '{', o = 0; o < e.length; o++)
            0 !== o && (r += ','),
              (r += i.stringify(e[o])),
              (r += ':'),
              (r += R(t[e[o]]))
          return (r += '}'), r
        },
        D = function(t, e) {
          var n = t.length
          if (n <= e) return [t]
          for (var r = [], i = 0; i < n; i += e)
            i + e > n
              ? r.push(t.substring(i, n))
              : r.push(t.substring(i, i + e))
          return r
        },
        F = function(t, e) {
          if (Array.isArray(t)) for (var n = 0; n < t.length; ++n) e(n, t[n])
          else
            i.forEach(t, function(t, n) {
              return e(n, t)
            })
        },
        L = function(t) {
          i.assert(!x(t), 'Invalid JSON number')
          var e,
            n,
            r,
            o,
            a,
            s,
            u,
            c = 11,
            l = 52,
            h = (1 << (c - 1)) - 1
          for (
            0 === t
              ? ((n = 0), (r = 0), (e = 1 / t === -1 / 0 ? 1 : 0))
              : ((e = t < 0),
                (t = Math.abs(t)),
                t >= Math.pow(2, 1 - h)
                  ? ((o = Math.min(Math.floor(Math.log(t) / Math.LN2), h)),
                    (n = o + h),
                    (r = Math.round(t * Math.pow(2, l - o) - Math.pow(2, l))))
                  : ((n = 0), (r = Math.round(t / Math.pow(2, 1 - h - l))))),
              s = [],
              a = l;
            a;
            a -= 1
          )
            s.push(r % 2 ? 1 : 0), (r = Math.floor(r / 2))
          for (a = c; a; a -= 1) s.push(n % 2 ? 1 : 0), (n = Math.floor(n / 2))
          s.push(e ? 1 : 0), s.reverse(), (u = s.join(''))
          var p = ''
          for (a = 0; a < 64; a += 8) {
            var f = parseInt(u.substr(a, 8), 2).toString(16)
            1 === f.length && (f = '0' + f), (p += f)
          }
          return p.toLowerCase()
        },
        M = function() {
          return !(
            'object' !== typeof window ||
            !window['chrome'] ||
            !window['chrome']['extension'] ||
            /^chrome/.test(window.location.href)
          )
        },
        j = function() {
          return 'object' === typeof Windows && 'object' === typeof Windows.UI
        },
        U = function(t, e) {
          var n = 'Unknown Error'
          'too_big' === t
            ? (n =
                'The data requested exceeds the maximum size that can be accessed with a single request.')
            : 'permission_denied' == t
              ? (n =
                  "Client doesn't have permission to access the desired data.")
              : 'unavailable' == t && (n = 'The service is unavailable')
          var r = new Error(t + ' at ' + e.path.toString() + ': ' + n)
          return (r.code = t.toUpperCase()), r
        },
        W = new RegExp('^-?\\d{1,10}$'),
        q = function(t) {
          if (W.test(t)) {
            var e = Number(t)
            if (e >= -2147483648 && e <= 2147483647) return e
          }
          return null
        },
        V = function(t) {
          try {
            t()
          } catch (t) {
            setTimeout(function() {
              var e = t.stack || ''
              throw (S('Exception was thrown by user callback.', e), t)
            }, Math.floor(0))
          }
        },
        $ = function() {
          var t =
            ('object' === typeof window &&
              window['navigator'] &&
              window['navigator']['userAgent']) ||
            ''
          return (
            t.search(
              /googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
            ) >= 0
          )
        },
        Q = function(t, e) {
          var n = setTimeout(t, e)
          return 'object' === typeof n && n['unref'] && n['unref'](), n
        },
        B = (function() {
          function t(t, e) {
            if (void 0 === e) {
              this.pieces_ = t.split('/')
              for (var n = 0, r = 0; r < this.pieces_.length; r++)
                this.pieces_[r].length > 0 &&
                  ((this.pieces_[n] = this.pieces_[r]), n++)
              ;(this.pieces_.length = n), (this.pieceNum_ = 0)
            } else (this.pieces_ = t), (this.pieceNum_ = e)
          }
          return (
            Object.defineProperty(t, 'Empty', {
              get: function() {
                return new t('')
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.getFront = function() {
              return this.pieceNum_ >= this.pieces_.length
                ? null
                : this.pieces_[this.pieceNum_]
            }),
            (t.prototype.getLength = function() {
              return this.pieces_.length - this.pieceNum_
            }),
            (t.prototype.popFront = function() {
              var e = this.pieceNum_
              return e < this.pieces_.length && e++, new t(this.pieces_, e)
            }),
            (t.prototype.getBack = function() {
              return this.pieceNum_ < this.pieces_.length
                ? this.pieces_[this.pieces_.length - 1]
                : null
            }),
            (t.prototype.toString = function() {
              for (var t = '', e = this.pieceNum_; e < this.pieces_.length; e++)
                '' !== this.pieces_[e] && (t += '/' + this.pieces_[e])
              return t || '/'
            }),
            (t.prototype.toUrlEncodedString = function() {
              for (var t = '', e = this.pieceNum_; e < this.pieces_.length; e++)
                '' !== this.pieces_[e] &&
                  (t += '/' + encodeURIComponent(String(this.pieces_[e])))
              return t || '/'
            }),
            (t.prototype.slice = function(t) {
              return (
                void 0 === t && (t = 0), this.pieces_.slice(this.pieceNum_ + t)
              )
            }),
            (t.prototype.parent = function() {
              if (this.pieceNum_ >= this.pieces_.length) return null
              for (
                var e = [], n = this.pieceNum_;
                n < this.pieces_.length - 1;
                n++
              )
                e.push(this.pieces_[n])
              return new t(e, 0)
            }),
            (t.prototype.child = function(e) {
              for (var n = [], r = this.pieceNum_; r < this.pieces_.length; r++)
                n.push(this.pieces_[r])
              if (e instanceof t)
                for (r = e.pieceNum_; r < e.pieces_.length; r++)
                  n.push(e.pieces_[r])
              else {
                var i = e.split('/')
                for (r = 0; r < i.length; r++) i[r].length > 0 && n.push(i[r])
              }
              return new t(n, 0)
            }),
            (t.prototype.isEmpty = function() {
              return this.pieceNum_ >= this.pieces_.length
            }),
            (t.relativePath = function(e, n) {
              var r = e.getFront(),
                i = n.getFront()
              if (null === r) return n
              if (r === i) return t.relativePath(e.popFront(), n.popFront())
              throw new Error(
                'INTERNAL ERROR: innerPath (' +
                  n +
                  ') is not within outerPath (' +
                  e +
                  ')'
              )
            }),
            (t.comparePaths = function(t, e) {
              for (
                var n = t.slice(), r = e.slice(), i = 0;
                i < n.length && i < r.length;
                i++
              ) {
                var o = I(n[i], r[i])
                if (0 !== o) return o
              }
              return n.length === r.length ? 0 : n.length < r.length ? -1 : 1
            }),
            (t.prototype.equals = function(t) {
              if (this.getLength() !== t.getLength()) return !1
              for (
                var e = this.pieceNum_, n = t.pieceNum_;
                e <= this.pieces_.length;
                e++, n++
              )
                if (this.pieces_[e] !== t.pieces_[n]) return !1
              return !0
            }),
            (t.prototype.contains = function(t) {
              var e = this.pieceNum_,
                n = t.pieceNum_
              if (this.getLength() > t.getLength()) return !1
              while (e < this.pieces_.length) {
                if (this.pieces_[e] !== t.pieces_[n]) return !1
                ++e, ++n
              }
              return !0
            }),
            t
          )
        })(),
        H = (function() {
          function t(t, e) {
            ;(this.errorPrefix_ = e),
              (this.parts_ = t.slice()),
              (this.byteLength_ = Math.max(1, this.parts_.length))
            for (var n = 0; n < this.parts_.length; n++)
              this.byteLength_ += i.stringLength(this.parts_[n])
            this.checkValid_()
          }
          return (
            Object.defineProperty(t, 'MAX_PATH_DEPTH', {
              get: function() {
                return 32
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t, 'MAX_PATH_LENGTH_BYTES', {
              get: function() {
                return 768
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.push = function(t) {
              this.parts_.length > 0 && (this.byteLength_ += 1),
                this.parts_.push(t),
                (this.byteLength_ += i.stringLength(t)),
                this.checkValid_()
            }),
            (t.prototype.pop = function() {
              var t = this.parts_.pop()
              ;(this.byteLength_ -= i.stringLength(t)),
                this.parts_.length > 0 && (this.byteLength_ -= 1)
            }),
            (t.prototype.checkValid_ = function() {
              if (this.byteLength_ > t.MAX_PATH_LENGTH_BYTES)
                throw new Error(
                  this.errorPrefix_ +
                    'has a key path longer than ' +
                    t.MAX_PATH_LENGTH_BYTES +
                    ' bytes (' +
                    this.byteLength_ +
                    ').'
                )
              if (this.parts_.length > t.MAX_PATH_DEPTH)
                throw new Error(
                  this.errorPrefix_ +
                    'path specified exceeds the maximum depth that can be written (' +
                    t.MAX_PATH_DEPTH +
                    ') or object contains a cycle ' +
                    this.toErrorString()
                )
            }),
            (t.prototype.toErrorString = function() {
              return 0 == this.parts_.length
                ? ''
                : "in property '" + this.parts_.join('.') + "'"
            }),
            t
          )
        })(),
        K = '5',
        z = 'v',
        G = 's',
        Y = 'r',
        X = 'f',
        J = 'firebaseio.com',
        Z = 'ls',
        tt = 'websocket',
        et = 'long_polling',
        nt = (function() {
          function t(t, e, n, r, i) {
            void 0 === i && (i = ''),
              (this.secure = e),
              (this.namespace = n),
              (this.webSocketOnly = r),
              (this.persistenceKey = i),
              (this.host = t.toLowerCase()),
              (this.domain = this.host.substr(this.host.indexOf('.') + 1)),
              (this.internalHost = h.get('host:' + t) || this.host)
          }
          return (
            (t.prototype.needsQueryParam = function() {
              return this.host !== this.internalHost || this.isCustomHost()
            }),
            (t.prototype.isCacheableHost = function() {
              return 's-' === this.internalHost.substr(0, 2)
            }),
            (t.prototype.isDemoHost = function() {
              return 'firebaseio-demo.com' === this.domain
            }),
            (t.prototype.isCustomHost = function() {
              return (
                'firebaseio.com' !== this.domain &&
                'firebaseio-demo.com' !== this.domain
              )
            }),
            (t.prototype.updateHost = function(t) {
              t !== this.internalHost &&
                ((this.internalHost = t),
                this.isCacheableHost() &&
                  h.set('host:' + this.host, this.internalHost))
            }),
            (t.prototype.connectionURL = function(t, e) {
              var n
              if (
                (i.assert('string' === typeof t, 'typeof type must == string'),
                i.assert('object' === typeof e, 'typeof params must == object'),
                t === tt)
              )
                n =
                  (this.secure ? 'wss://' : 'ws://') +
                  this.internalHost +
                  '/.ws?'
              else {
                if (t !== et) throw new Error('Unknown connection type: ' + t)
                n =
                  (this.secure ? 'https://' : 'http://') +
                  this.internalHost +
                  '/.lp?'
              }
              this.needsQueryParam() && (e['ns'] = this.namespace)
              var r = []
              return (
                i.forEach(e, function(t, e) {
                  r.push(t + '=' + e)
                }),
                n + r.join('&')
              )
            }),
            (t.prototype.toString = function() {
              var t = this.toURLString()
              return (
                this.persistenceKey && (t += '<' + this.persistenceKey + '>'), t
              )
            }),
            (t.prototype.toURLString = function() {
              return (this.secure ? 'https://' : 'http://') + this.host
            }),
            t
          )
        })()
      function rt(t) {
        for (var e = '', n = t.split('/'), r = 0; r < n.length; r++)
          if (n[r].length > 0) {
            var i = n[r]
            try {
              i = decodeURIComponent(i.replace(/\+/g, ' '))
            } catch (t) {}
            e += '/' + i
          }
        return e
      }
      function it(t) {
        var e = {}
        t.startsWith('?') && (t = t.substring(1))
        for (var n = 0, r = t.split('&'); n < r.length; n++) {
          var i = r[n]
          if (0 !== i.length) {
            var o = i.split('=')
            2 === o.length
              ? (e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]))
              : S("Invalid query segment '" + i + "' in query '" + t + "'")
          }
        }
        return e
      }
      var ot,
        at,
        st = function(t) {
          var e = ut(t),
            n = e.subdomain
          'firebase' === e.domain &&
            E(
              e.host +
                ' is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead'
            ),
            (n && 'undefined' != n) ||
              'localhost' === e.domain ||
              E(
                'Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com'
              ),
            e.secure || T()
          var r = 'ws' === e.scheme || 'wss' === e.scheme
          return {
            repoInfo: new nt(e.host, e.secure, n, r),
            path: new B(e.pathString)
          }
        },
        ut = function(t) {
          var e = '',
            n = '',
            r = '',
            i = '',
            o = !0,
            a = 'https',
            s = 443
          if ('string' === typeof t) {
            var u = t.indexOf('//')
            u >= 0 && ((a = t.substring(0, u - 1)), (t = t.substring(u + 2)))
            var c = t.indexOf('/')
            ;-1 === c && (c = t.length)
            var l = t.indexOf('?')
            ;-1 === l && (l = t.length),
              (e = t.substring(0, Math.min(c, l))),
              c < l && (i = rt(t.substring(c, l)))
            var h = it(t.substring(Math.min(t.length, l)))
            ;(u = e.indexOf(':')),
              u >= 0
                ? ((o = 'https' === a || 'wss' === a),
                  (s = parseInt(e.substring(u + 1), 10)))
                : (u = t.length)
            var p = e.split('.')
            3 === p.length
              ? ((n = p[1]), (r = p[0].toLowerCase()))
              : 2 === p.length
                ? (n = p[0])
                : 'localhost' === p[0].slice(0, u).toLowerCase() &&
                  (n = 'localhost'),
              '' === r && 'ns' in h && (r = h['ns'])
          }
          return {
            host: e,
            port: s,
            domain: n,
            subdomain: r,
            secure: o,
            scheme: a,
            pathString: i
          }
        },
        ct = /[\[\].#$\/\u0000-\u001F\u007F]/,
        lt = /[\[\].#$\u0000-\u001F\u007F]/,
        ht = 10485760,
        pt = function(t) {
          return 'string' === typeof t && 0 !== t.length && !ct.test(t)
        },
        ft = function(t) {
          return 'string' === typeof t && 0 !== t.length && !lt.test(t)
        },
        dt = function(t) {
          return t && (t = t.replace(/^\/*\.info(\/|$)/, '/')), ft(t)
        },
        vt = function(t) {
          return (
            null === t ||
            'string' === typeof t ||
            ('number' === typeof t && !x(t)) ||
            (t && 'object' === typeof t && i.contains(t, '.sv'))
          )
        },
        yt = function(t, e, n, r, o) {
          ;(o && void 0 === n) || _t(i.errorPrefix(t, e, o), n, r)
        },
        _t = function(t, e, n) {
          var r = n instanceof B ? new H(n, t) : n
          if (void 0 === e)
            throw new Error(t + 'contains undefined ' + r.toErrorString())
          if ('function' === typeof e)
            throw new Error(
              t +
                'contains a function ' +
                r.toErrorString() +
                ' with contents = ' +
                e.toString()
            )
          if (x(e))
            throw new Error(
              t + 'contains ' + e.toString() + ' ' + r.toErrorString()
            )
          if (
            'string' === typeof e &&
            e.length > ht / 3 &&
            i.stringLength(e) > ht
          )
            throw new Error(
              t +
                'contains a string greater than ' +
                ht +
                ' utf8 bytes ' +
                r.toErrorString() +
                " ('" +
                e.substring(0, 50) +
                "...')"
            )
          if (e && 'object' === typeof e) {
            var o = !1,
              a = !1
            if (
              (i.forEach(e, function(e, n) {
                if ('.value' === e) o = !0
                else if ('.priority' !== e && '.sv' !== e && ((a = !0), !pt(e)))
                  throw new Error(
                    t +
                      ' contains an invalid key (' +
                      e +
                      ') ' +
                      r.toErrorString() +
                      '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                  )
                r.push(e), _t(t, n, r), r.pop()
              }),
              o && a)
            )
              throw new Error(
                t +
                  ' contains ".value" child ' +
                  r.toErrorString() +
                  ' in addition to actual children.'
              )
          }
        },
        gt = function(t, e) {
          var n, r
          for (n = 0; n < e.length; n++) {
            r = e[n]
            for (var i = r.slice(), o = 0; o < i.length; o++)
              if ('.priority' === i[o] && o === i.length - 1);
              else if (!pt(i[o]))
                throw new Error(
                  t +
                    'contains an invalid key (' +
                    i[o] +
                    ') in path ' +
                    r.toString() +
                    '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                )
          }
          e.sort(B.comparePaths)
          var a = null
          for (n = 0; n < e.length; n++) {
            if (((r = e[n]), null !== a && a.contains(r)))
              throw new Error(
                t +
                  'contains a path ' +
                  a.toString() +
                  ' that is ancestor of another path ' +
                  r.toString()
              )
            a = r
          }
        },
        mt = function(t, e, n, r, o) {
          if (!o || void 0 !== n) {
            var a = i.errorPrefix(t, e, o)
            if (!n || 'object' !== typeof n || Array.isArray(n))
              throw new Error(
                a + ' must be an object containing the children to replace.'
              )
            var s = []
            i.forEach(n, function(t, e) {
              var n = new B(t)
              if ((_t(a, e, r.child(n)), '.priority' === n.getBack() && !vt(e)))
                throw new Error(
                  a +
                    "contains an invalid value for '" +
                    n.toString() +
                    "', which must be a valid Firebase priority (a string, finite number, server value, or null)."
                )
              s.push(n)
            }),
              gt(a, s)
          }
        },
        bt = function(t, e, n, r) {
          if (!r || void 0 !== n) {
            if (x(n))
              throw new Error(
                i.errorPrefix(t, e, r) +
                  'is ' +
                  n.toString() +
                  ', but must be a valid Firebase priority (a string, finite number, server value, or null).'
              )
            if (!vt(n))
              throw new Error(
                i.errorPrefix(t, e, r) +
                  'must be a valid Firebase priority (a string, finite number, server value, or null).'
              )
          }
        },
        wt = function(t, e, n, r) {
          if (!r || void 0 !== n)
            switch (n) {
              case 'value':
              case 'child_added':
              case 'child_removed':
              case 'child_changed':
              case 'child_moved':
                break
              default:
                throw new Error(
                  i.errorPrefix(t, e, r) +
                    'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".'
                )
            }
        },
        Ct = function(t, e, n, r) {
          if ((!r || void 0 !== n) && !pt(n))
            throw new Error(
              i.errorPrefix(t, e, r) +
                'was an invalid key = "' +
                n +
                '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'
            )
        },
        Et = function(t, e, n, r) {
          if ((!r || void 0 !== n) && !ft(n))
            throw new Error(
              i.errorPrefix(t, e, r) +
                'was an invalid path = "' +
                n +
                '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'
            )
        },
        St = function(t, e, n, r) {
          n && (n = n.replace(/^\/*\.info(\/|$)/, '/')), Et(t, e, n, r)
        },
        Tt = function(t, e) {
          if ('.info' === e.getFront())
            throw new Error(t + " failed = Can't modify data under /.info/")
        },
        xt = function(t, e, n) {
          var r = n.path.toString()
          if (
            'string' !== typeof n.repoInfo.host ||
            0 === n.repoInfo.host.length ||
            (!pt(n.repoInfo.namespace) &&
              'localhost' !== n.repoInfo.host.split(':')[0]) ||
            (0 !== r.length && !dt(r))
          )
            throw new Error(
              i.errorPrefix(t, e, !1) +
                'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'
            )
        },
        Ot = function(t, e, n, r) {
          if ((!r || void 0 !== n) && 'boolean' !== typeof n)
            throw new Error(i.errorPrefix(t, e, r) + 'must be a boolean.')
        },
        At = (function() {
          function t(t, e) {
            ;(this.repo_ = t), (this.path_ = e)
          }
          return (
            (t.prototype.cancel = function(t) {
              i.validateArgCount('OnDisconnect.cancel', 0, 1, arguments.length),
                i.validateCallback('OnDisconnect.cancel', 1, t, !0)
              var e = new i.Deferred()
              return (
                this.repo_.onDisconnectCancel(this.path_, e.wrapCallback(t)),
                e.promise
              )
            }),
            (t.prototype.remove = function(t) {
              i.validateArgCount('OnDisconnect.remove', 0, 1, arguments.length),
                Tt('OnDisconnect.remove', this.path_),
                i.validateCallback('OnDisconnect.remove', 1, t, !0)
              var e = new i.Deferred()
              return (
                this.repo_.onDisconnectSet(this.path_, null, e.wrapCallback(t)),
                e.promise
              )
            }),
            (t.prototype.set = function(t, e) {
              i.validateArgCount('OnDisconnect.set', 1, 2, arguments.length),
                Tt('OnDisconnect.set', this.path_),
                yt('OnDisconnect.set', 1, t, this.path_, !1),
                i.validateCallback('OnDisconnect.set', 2, e, !0)
              var n = new i.Deferred()
              return (
                this.repo_.onDisconnectSet(this.path_, t, n.wrapCallback(e)),
                n.promise
              )
            }),
            (t.prototype.setWithPriority = function(t, e, n) {
              i.validateArgCount(
                'OnDisconnect.setWithPriority',
                2,
                3,
                arguments.length
              ),
                Tt('OnDisconnect.setWithPriority', this.path_),
                yt('OnDisconnect.setWithPriority', 1, t, this.path_, !1),
                bt('OnDisconnect.setWithPriority', 2, e, !1),
                i.validateCallback('OnDisconnect.setWithPriority', 3, n, !0)
              var r = new i.Deferred()
              return (
                this.repo_.onDisconnectSetWithPriority(
                  this.path_,
                  t,
                  e,
                  r.wrapCallback(n)
                ),
                r.promise
              )
            }),
            (t.prototype.update = function(t, e) {
              if (
                (i.validateArgCount(
                  'OnDisconnect.update',
                  1,
                  2,
                  arguments.length
                ),
                Tt('OnDisconnect.update', this.path_),
                Array.isArray(t))
              ) {
                for (var n = {}, r = 0; r < t.length; ++r) n['' + r] = t[r]
                ;(t = n),
                  S(
                    'Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.'
                  )
              }
              mt('OnDisconnect.update', 1, t, this.path_, !1),
                i.validateCallback('OnDisconnect.update', 2, e, !0)
              var o = new i.Deferred()
              return (
                this.repo_.onDisconnectUpdate(this.path_, t, o.wrapCallback(e)),
                o.promise
              )
            }),
            t
          )
        })(),
        Pt = (function() {
          function t(t, e) {
            ;(this.committed = t), (this.snapshot = e)
          }
          return (
            (t.prototype.toJSON = function() {
              return (
                i.validateArgCount(
                  'TransactionResult.toJSON',
                  0,
                  1,
                  arguments.length
                ),
                { committed: this.committed, snapshot: this.snapshot.toJSON() }
              )
            }),
            t
          )
        })(),
        It = (function() {
          var t =
              '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz',
            e = 0,
            n = []
          return function(r) {
            var o,
              a = r === e
            e = r
            var s = new Array(8)
            for (o = 7; o >= 0; o--)
              (s[o] = t.charAt(r % 64)), (r = Math.floor(r / 64))
            i.assert(0 === r, 'Cannot push at time == 0')
            var u = s.join('')
            if (a) {
              for (o = 11; o >= 0 && 63 === n[o]; o--) n[o] = 0
              n[o]++
            } else
              for (o = 0; o < 12; o++) n[o] = Math.floor(64 * Math.random())
            for (o = 0; o < 12; o++) u += t.charAt(n[o])
            return (
              i.assert(20 === u.length, 'nextPushId: Length should be 20.'), u
            )
          }
        })(),
        Nt = (function() {
          function t(t, e) {
            ;(this.name = t), (this.node = e)
          }
          return (
            (t.Wrap = function(e, n) {
              return new t(e, n)
            }),
            t
          )
        })(),
        kt = (function() {
          function t() {}
          return (
            (t.prototype.getCompare = function() {
              return this.compare.bind(this)
            }),
            (t.prototype.indexedValueChanged = function(t, e) {
              var n = new Nt(A, t),
                r = new Nt(A, e)
              return 0 !== this.compare(n, r)
            }),
            (t.prototype.minPost = function() {
              return Nt.MIN
            }),
            t
          )
        })(),
        Rt = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            a.__extends(e, t),
            Object.defineProperty(e, '__EMPTY_NODE', {
              get: function() {
                return ot
              },
              set: function(t) {
                ot = t
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.compare = function(t, e) {
              return I(t.name, e.name)
            }),
            (e.prototype.isDefinedOn = function(t) {
              throw i.assertionError(
                'KeyIndex.isDefinedOn not expected to be called.'
              )
            }),
            (e.prototype.indexedValueChanged = function(t, e) {
              return !1
            }),
            (e.prototype.minPost = function() {
              return Nt.MIN
            }),
            (e.prototype.maxPost = function() {
              return new Nt(P, ot)
            }),
            (e.prototype.makePost = function(t, e) {
              return (
                i.assert(
                  'string' === typeof t,
                  'KeyIndex indexValue must always be a string.'
                ),
                new Nt(t, ot)
              )
            }),
            (e.prototype.toString = function() {
              return '.key'
            }),
            e
          )
        })(kt),
        Dt = new Rt()
      function Ft(t) {
        at = t
      }
      var Lt,
        Mt,
        jt,
        Ut = function(t) {
          return 'number' === typeof t ? 'number:' + L(t) : 'string:' + t
        },
        Wt = function(t) {
          if (t.isLeafNode()) {
            var e = t.val()
            i.assert(
              'string' === typeof e ||
                'number' === typeof e ||
                ('object' === typeof e && i.contains(e, '.sv')),
              'Priority must be a string or number.'
            )
          } else
            i.assert(t === at || t.isEmpty(), 'priority of unexpected type.')
          i.assert(
            t === at || t.getPriority().isEmpty(),
            "Priority nodes can't have a priority of their own."
          )
        },
        qt = (function() {
          function t(e, n) {
            void 0 === n && (n = t.__childrenNodeConstructor.EMPTY_NODE),
              (this.value_ = e),
              (this.priorityNode_ = n),
              (this.lazyHash_ = null),
              i.assert(
                void 0 !== this.value_ && null !== this.value_,
                "LeafNode shouldn't be created with null/undefined value."
              ),
              Wt(this.priorityNode_)
          }
          return (
            Object.defineProperty(t, '__childrenNodeConstructor', {
              get: function() {
                return Lt
              },
              set: function(t) {
                Lt = t
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.isLeafNode = function() {
              return !0
            }),
            (t.prototype.getPriority = function() {
              return this.priorityNode_
            }),
            (t.prototype.updatePriority = function(e) {
              return new t(this.value_, e)
            }),
            (t.prototype.getImmediateChild = function(e) {
              return '.priority' === e
                ? this.priorityNode_
                : t.__childrenNodeConstructor.EMPTY_NODE
            }),
            (t.prototype.getChild = function(e) {
              return e.isEmpty()
                ? this
                : '.priority' === e.getFront()
                  ? this.priorityNode_
                  : t.__childrenNodeConstructor.EMPTY_NODE
            }),
            (t.prototype.hasChild = function() {
              return !1
            }),
            (t.prototype.getPredecessorChildName = function(t, e) {
              return null
            }),
            (t.prototype.updateImmediateChild = function(e, n) {
              return '.priority' === e
                ? this.updatePriority(n)
                : n.isEmpty() && '.priority' !== e
                  ? this
                  : t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
                      e,
                      n
                    ).updatePriority(this.priorityNode_)
            }),
            (t.prototype.updateChild = function(e, n) {
              var r = e.getFront()
              return null === r
                ? n
                : n.isEmpty() && '.priority' !== r
                  ? this
                  : (i.assert(
                      '.priority' !== r || 1 === e.getLength(),
                      '.priority must be the last token in a path'
                    ),
                    this.updateImmediateChild(
                      r,
                      t.__childrenNodeConstructor.EMPTY_NODE.updateChild(
                        e.popFront(),
                        n
                      )
                    ))
            }),
            (t.prototype.isEmpty = function() {
              return !1
            }),
            (t.prototype.numChildren = function() {
              return 0
            }),
            (t.prototype.forEachChild = function(t, e) {
              return !1
            }),
            (t.prototype.val = function(t) {
              return t && !this.getPriority().isEmpty()
                ? {
                    '.value': this.getValue(),
                    '.priority': this.getPriority().val()
                  }
                : this.getValue()
            }),
            (t.prototype.hash = function() {
              if (null === this.lazyHash_) {
                var t = ''
                this.priorityNode_.isEmpty() ||
                  (t += 'priority:' + Ut(this.priorityNode_.val()) + ':')
                var e = typeof this.value_
                ;(t += e + ':'),
                  (t += 'number' === e ? L(this.value_) : this.value_),
                  (this.lazyHash_ = v(t))
              }
              return this.lazyHash_
            }),
            (t.prototype.getValue = function() {
              return this.value_
            }),
            (t.prototype.compareTo = function(e) {
              return e === t.__childrenNodeConstructor.EMPTY_NODE
                ? 1
                : e instanceof t.__childrenNodeConstructor
                  ? -1
                  : (i.assert(e.isLeafNode(), 'Unknown node type'),
                    this.compareToLeafNode_(e))
            }),
            (t.prototype.compareToLeafNode_ = function(e) {
              var n = typeof e.value_,
                r = typeof this.value_,
                o = t.VALUE_TYPE_ORDER.indexOf(n),
                a = t.VALUE_TYPE_ORDER.indexOf(r)
              return (
                i.assert(o >= 0, 'Unknown leaf type: ' + n),
                i.assert(a >= 0, 'Unknown leaf type: ' + r),
                o === a
                  ? 'object' === r
                    ? 0
                    : this.value_ < e.value_
                      ? -1
                      : this.value_ === e.value_
                        ? 0
                        : 1
                  : a - o
              )
            }),
            (t.prototype.withIndex = function() {
              return this
            }),
            (t.prototype.isIndexed = function() {
              return !0
            }),
            (t.prototype.equals = function(t) {
              if (t === this) return !0
              if (t.isLeafNode()) {
                var e = t
                return (
                  this.value_ === e.value_ &&
                  this.priorityNode_.equals(e.priorityNode_)
                )
              }
              return !1
            }),
            (t.VALUE_TYPE_ORDER = ['object', 'boolean', 'number', 'string']),
            t
          )
        })()
      function Vt(t) {
        Mt = t
      }
      function $t(t) {
        jt = t
      }
      var Qt,
        Bt,
        Ht = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            a.__extends(e, t),
            (e.prototype.compare = function(t, e) {
              var n = t.node.getPriority(),
                r = e.node.getPriority(),
                i = n.compareTo(r)
              return 0 === i ? I(t.name, e.name) : i
            }),
            (e.prototype.isDefinedOn = function(t) {
              return !t.getPriority().isEmpty()
            }),
            (e.prototype.indexedValueChanged = function(t, e) {
              return !t.getPriority().equals(e.getPriority())
            }),
            (e.prototype.minPost = function() {
              return Nt.MIN
            }),
            (e.prototype.maxPost = function() {
              return new Nt(P, new qt('[PRIORITY-POST]', jt))
            }),
            (e.prototype.makePost = function(t, e) {
              var n = Mt(t)
              return new Nt(e, new qt('[PRIORITY-POST]', n))
            }),
            (e.prototype.toString = function() {
              return '.priority'
            }),
            e
          )
        })(kt),
        Kt = new Ht(),
        zt = (function() {
          function t(t, e, n, r, i) {
            void 0 === i && (i = null),
              (this.isReverse_ = r),
              (this.resultGenerator_ = i),
              (this.nodeStack_ = [])
            var o = 1
            while (!t.isEmpty())
              if (((t = t), (o = e ? n(t.key, e) : 1), r && (o *= -1), o < 0))
                t = this.isReverse_ ? t.left : t.right
              else {
                if (0 === o) {
                  this.nodeStack_.push(t)
                  break
                }
                this.nodeStack_.push(t),
                  (t = this.isReverse_ ? t.right : t.left)
              }
          }
          return (
            (t.prototype.getNext = function() {
              if (0 === this.nodeStack_.length) return null
              var t,
                e = this.nodeStack_.pop()
              if (
                ((t = this.resultGenerator_
                  ? this.resultGenerator_(e.key, e.value)
                  : { key: e.key, value: e.value }),
                this.isReverse_)
              ) {
                e = e.left
                while (!e.isEmpty()) this.nodeStack_.push(e), (e = e.right)
              } else {
                e = e.right
                while (!e.isEmpty()) this.nodeStack_.push(e), (e = e.left)
              }
              return t
            }),
            (t.prototype.hasNext = function() {
              return this.nodeStack_.length > 0
            }),
            (t.prototype.peek = function() {
              if (0 === this.nodeStack_.length) return null
              var t = this.nodeStack_[this.nodeStack_.length - 1]
              return this.resultGenerator_
                ? this.resultGenerator_(t.key, t.value)
                : { key: t.key, value: t.value }
            }),
            t
          )
        })(),
        Gt = (function() {
          function t(e, n, r, i, o) {
            ;(this.key = e),
              (this.value = n),
              (this.color = null != r ? r : t.RED),
              (this.left = null != i ? i : Xt.EMPTY_NODE),
              (this.right = null != o ? o : Xt.EMPTY_NODE)
          }
          return (
            (t.prototype.copy = function(e, n, r, i, o) {
              return new t(
                null != e ? e : this.key,
                null != n ? n : this.value,
                null != r ? r : this.color,
                null != i ? i : this.left,
                null != o ? o : this.right
              )
            }),
            (t.prototype.count = function() {
              return this.left.count() + 1 + this.right.count()
            }),
            (t.prototype.isEmpty = function() {
              return !1
            }),
            (t.prototype.inorderTraversal = function(t) {
              return (
                this.left.inorderTraversal(t) ||
                t(this.key, this.value) ||
                this.right.inorderTraversal(t)
              )
            }),
            (t.prototype.reverseTraversal = function(t) {
              return (
                this.right.reverseTraversal(t) ||
                t(this.key, this.value) ||
                this.left.reverseTraversal(t)
              )
            }),
            (t.prototype.min_ = function() {
              return this.left.isEmpty() ? this : this.left.min_()
            }),
            (t.prototype.minKey = function() {
              return this.min_().key
            }),
            (t.prototype.maxKey = function() {
              return this.right.isEmpty() ? this.key : this.right.maxKey()
            }),
            (t.prototype.insert = function(t, e, n) {
              var r, i
              return (
                (i = this),
                (r = n(t, i.key)),
                (i =
                  r < 0
                    ? i.copy(null, null, null, i.left.insert(t, e, n), null)
                    : 0 === r
                      ? i.copy(null, e, null, null, null)
                      : i.copy(
                          null,
                          null,
                          null,
                          null,
                          i.right.insert(t, e, n)
                        )),
                i.fixUp_()
              )
            }),
            (t.prototype.removeMin_ = function() {
              if (this.left.isEmpty()) return Xt.EMPTY_NODE
              var t = this
              return (
                t.left.isRed_() ||
                  t.left.left.isRed_() ||
                  (t = t.moveRedLeft_()),
                (t = t.copy(null, null, null, t.left.removeMin_(), null)),
                t.fixUp_()
              )
            }),
            (t.prototype.remove = function(t, e) {
              var n, r
              if (((n = this), e(t, n.key) < 0))
                n.left.isEmpty() ||
                  n.left.isRed_() ||
                  n.left.left.isRed_() ||
                  (n = n.moveRedLeft_()),
                  (n = n.copy(null, null, null, n.left.remove(t, e), null))
              else {
                if (
                  (n.left.isRed_() && (n = n.rotateRight_()),
                  n.right.isEmpty() ||
                    n.right.isRed_() ||
                    n.right.left.isRed_() ||
                    (n = n.moveRedRight_()),
                  0 === e(t, n.key))
                ) {
                  if (n.right.isEmpty()) return Xt.EMPTY_NODE
                  ;(r = n.right.min_()),
                    (n = n.copy(
                      r.key,
                      r.value,
                      null,
                      null,
                      n.right.removeMin_()
                    ))
                }
                n = n.copy(null, null, null, null, n.right.remove(t, e))
              }
              return n.fixUp_()
            }),
            (t.prototype.isRed_ = function() {
              return this.color
            }),
            (t.prototype.fixUp_ = function() {
              var t = this
              return (
                t.right.isRed_() && !t.left.isRed_() && (t = t.rotateLeft_()),
                t.left.isRed_() &&
                  t.left.left.isRed_() &&
                  (t = t.rotateRight_()),
                t.left.isRed_() && t.right.isRed_() && (t = t.colorFlip_()),
                t
              )
            }),
            (t.prototype.moveRedLeft_ = function() {
              var t = this.colorFlip_()
              return (
                t.right.left.isRed_() &&
                  ((t = t.copy(null, null, null, null, t.right.rotateRight_())),
                  (t = t.rotateLeft_()),
                  (t = t.colorFlip_())),
                t
              )
            }),
            (t.prototype.moveRedRight_ = function() {
              var t = this.colorFlip_()
              return (
                t.left.left.isRed_() &&
                  ((t = t.rotateRight_()), (t = t.colorFlip_())),
                t
              )
            }),
            (t.prototype.rotateLeft_ = function() {
              var e = this.copy(null, null, t.RED, null, this.right.left)
              return this.right.copy(null, null, this.color, e, null)
            }),
            (t.prototype.rotateRight_ = function() {
              var e = this.copy(null, null, t.RED, this.left.right, null)
              return this.left.copy(null, null, this.color, null, e)
            }),
            (t.prototype.colorFlip_ = function() {
              var t = this.left.copy(null, null, !this.left.color, null, null),
                e = this.right.copy(null, null, !this.right.color, null, null)
              return this.copy(null, null, !this.color, t, e)
            }),
            (t.prototype.checkMaxDepth_ = function() {
              var t = this.check_()
              return Math.pow(2, t) <= this.count() + 1
            }),
            (t.prototype.check_ = function() {
              var t
              if (this.isRed_() && this.left.isRed_())
                throw new Error(
                  'Red node has red child(' + this.key + ',' + this.value + ')'
                )
              if (this.right.isRed_())
                throw new Error(
                  'Right child of (' + this.key + ',' + this.value + ') is red'
                )
              if (((t = this.left.check_()), t !== this.right.check_()))
                throw new Error('Black depths differ')
              return t + (this.isRed_() ? 0 : 1)
            }),
            (t.RED = !0),
            (t.BLACK = !1),
            t
          )
        })(),
        Yt = (function() {
          function t() {}
          return (
            (t.prototype.copy = function(t, e, n, r, i) {
              return this
            }),
            (t.prototype.insert = function(t, e, n) {
              return new Gt(t, e, null)
            }),
            (t.prototype.remove = function(t, e) {
              return this
            }),
            (t.prototype.count = function() {
              return 0
            }),
            (t.prototype.isEmpty = function() {
              return !0
            }),
            (t.prototype.inorderTraversal = function(t) {
              return !1
            }),
            (t.prototype.reverseTraversal = function(t) {
              return !1
            }),
            (t.prototype.minKey = function() {
              return null
            }),
            (t.prototype.maxKey = function() {
              return null
            }),
            (t.prototype.check_ = function() {
              return 0
            }),
            (t.prototype.isRed_ = function() {
              return !1
            }),
            t
          )
        })(),
        Xt = (function() {
          function t(e, n) {
            void 0 === n && (n = t.EMPTY_NODE),
              (this.comparator_ = e),
              (this.root_ = n)
          }
          return (
            (t.prototype.insert = function(e, n) {
              return new t(
                this.comparator_,
                this.root_
                  .insert(e, n, this.comparator_)
                  .copy(null, null, Gt.BLACK, null, null)
              )
            }),
            (t.prototype.remove = function(e) {
              return new t(
                this.comparator_,
                this.root_
                  .remove(e, this.comparator_)
                  .copy(null, null, Gt.BLACK, null, null)
              )
            }),
            (t.prototype.get = function(t) {
              var e,
                n = this.root_
              while (!n.isEmpty()) {
                if (((e = this.comparator_(t, n.key)), 0 === e)) return n.value
                e < 0 ? (n = n.left) : e > 0 && (n = n.right)
              }
              return null
            }),
            (t.prototype.getPredecessorKey = function(t) {
              var e,
                n = this.root_,
                r = null
              while (!n.isEmpty()) {
                if (((e = this.comparator_(t, n.key)), 0 === e)) {
                  if (n.left.isEmpty()) return r ? r.key : null
                  n = n.left
                  while (!n.right.isEmpty()) n = n.right
                  return n.key
                }
                e < 0 ? (n = n.left) : e > 0 && ((r = n), (n = n.right))
              }
              throw new Error(
                'Attempted to find predecessor key for a nonexistent key.  What gives?'
              )
            }),
            (t.prototype.isEmpty = function() {
              return this.root_.isEmpty()
            }),
            (t.prototype.count = function() {
              return this.root_.count()
            }),
            (t.prototype.minKey = function() {
              return this.root_.minKey()
            }),
            (t.prototype.maxKey = function() {
              return this.root_.maxKey()
            }),
            (t.prototype.inorderTraversal = function(t) {
              return this.root_.inorderTraversal(t)
            }),
            (t.prototype.reverseTraversal = function(t) {
              return this.root_.reverseTraversal(t)
            }),
            (t.prototype.getIterator = function(t) {
              return new zt(this.root_, null, this.comparator_, !1, t)
            }),
            (t.prototype.getIteratorFrom = function(t, e) {
              return new zt(this.root_, t, this.comparator_, !1, e)
            }),
            (t.prototype.getReverseIteratorFrom = function(t, e) {
              return new zt(this.root_, t, this.comparator_, !0, e)
            }),
            (t.prototype.getReverseIterator = function(t) {
              return new zt(this.root_, null, this.comparator_, !0, t)
            }),
            (t.EMPTY_NODE = new Yt()),
            t
          )
        })(),
        Jt = Math.log(2),
        Zt = (function() {
          function t(t) {
            var e = function(t) {
                return parseInt(Math.log(t) / Jt, 10)
              },
              n = function(t) {
                return parseInt(Array(t + 1).join('1'), 2)
              }
            ;(this.count = e(t + 1)), (this.current_ = this.count - 1)
            var r = n(this.count)
            this.bits_ = (t + 1) & r
          }
          return (
            (t.prototype.nextBitIsOne = function() {
              var t = !(this.bits_ & (1 << this.current_))
              return this.current_--, t
            }),
            t
          )
        })(),
        te = function(t, e, n, r) {
          t.sort(e)
          var i = function(e, r) {
              var o,
                a,
                s = r - e
              if (0 == s) return null
              if (1 == s)
                return (
                  (o = t[e]),
                  (a = n ? n(o) : o),
                  new Gt(a, o.node, Gt.BLACK, null, null)
                )
              var u = parseInt(s / 2, 10) + e,
                c = i(e, u),
                l = i(u + 1, r)
              return (
                (o = t[u]),
                (a = n ? n(o) : o),
                new Gt(a, o.node, Gt.BLACK, c, l)
              )
            },
            o = function(e) {
              for (
                var r = null,
                  o = null,
                  a = t.length,
                  s = function(e, r) {
                    var o = a - e,
                      s = a
                    a -= e
                    var c = i(o + 1, s),
                      l = t[o],
                      h = n ? n(l) : l
                    u(new Gt(h, l.node, r, null, c))
                  },
                  u = function(t) {
                    r ? ((r.left = t), (r = t)) : ((o = t), (r = t))
                  },
                  c = 0;
                c < e.count;
                ++c
              ) {
                var l = e.nextBitIsOne(),
                  h = Math.pow(2, e.count - (c + 1))
                l ? s(h, Gt.BLACK) : (s(h, Gt.BLACK), s(h, Gt.RED))
              }
              return o
            },
            a = new Zt(t.length),
            s = o(a)
          return new Xt(r || e, s)
        },
        ee = {},
        ne = (function() {
          function t(t, e) {
            ;(this.indexes_ = t), (this.indexSet_ = e)
          }
          return (
            Object.defineProperty(t, 'Default', {
              get: function() {
                return (
                  i.assert(ee && Kt, 'ChildrenNode.ts has not been loaded'),
                  (Qt = Qt || new t({ '.priority': ee }, { '.priority': Kt })),
                  Qt
                )
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.get = function(t) {
              var e = i.safeGet(this.indexes_, t)
              if (!e) throw new Error('No index defined for ' + t)
              return e === ee ? null : e
            }),
            (t.prototype.hasIndex = function(t) {
              return i.contains(this.indexSet_, t.toString())
            }),
            (t.prototype.addIndex = function(e, n) {
              i.assert(
                e !== Dt,
                "KeyIndex always exists and isn't meant to be added to the IndexMap."
              )
              var r,
                o = [],
                a = !1,
                s = n.getIterator(Nt.Wrap),
                u = s.getNext()
              while (u)
                (a = a || e.isDefinedOn(u.node)), o.push(u), (u = s.getNext())
              r = a ? te(o, e.getCompare()) : ee
              var c = e.toString(),
                l = i.clone(this.indexSet_)
              l[c] = e
              var h = i.clone(this.indexes_)
              return (h[c] = r), new t(h, l)
            }),
            (t.prototype.addToIndexes = function(e, n) {
              var r = this,
                o = i.map(this.indexes_, function(t, o) {
                  var a = i.safeGet(r.indexSet_, o)
                  if (
                    (i.assert(a, 'Missing index implementation for ' + o),
                    t === ee)
                  ) {
                    if (a.isDefinedOn(e.node)) {
                      var s = [],
                        u = n.getIterator(Nt.Wrap),
                        c = u.getNext()
                      while (c) c.name != e.name && s.push(c), (c = u.getNext())
                      return s.push(e), te(s, a.getCompare())
                    }
                    return ee
                  }
                  var l = n.get(e.name),
                    h = t
                  return (
                    l && (h = h.remove(new Nt(e.name, l))), h.insert(e, e.node)
                  )
                })
              return new t(o, this.indexSet_)
            }),
            (t.prototype.removeFromIndexes = function(e, n) {
              var r = i.map(this.indexes_, function(t) {
                if (t === ee) return t
                var r = n.get(e.name)
                return r ? t.remove(new Nt(e.name, r)) : t
              })
              return new t(r, this.indexSet_)
            }),
            t
          )
        })()
      function re(t, e) {
        return I(t.name, e.name)
      }
      function ie(t, e) {
        return I(t, e)
      }
      var oe = (function() {
          function t(t, e, n) {
            ;(this.children_ = t),
              (this.priorityNode_ = e),
              (this.indexMap_ = n),
              (this.lazyHash_ = null),
              this.priorityNode_ && Wt(this.priorityNode_),
              this.children_.isEmpty() &&
                i.assert(
                  !this.priorityNode_ || this.priorityNode_.isEmpty(),
                  'An empty node cannot have a priority'
                )
          }
          return (
            Object.defineProperty(t, 'EMPTY_NODE', {
              get: function() {
                return Bt || (Bt = new t(new Xt(ie), null, ne.Default))
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.isLeafNode = function() {
              return !1
            }),
            (t.prototype.getPriority = function() {
              return this.priorityNode_ || Bt
            }),
            (t.prototype.updatePriority = function(e) {
              return this.children_.isEmpty()
                ? this
                : new t(this.children_, e, this.indexMap_)
            }),
            (t.prototype.getImmediateChild = function(t) {
              if ('.priority' === t) return this.getPriority()
              var e = this.children_.get(t)
              return null === e ? Bt : e
            }),
            (t.prototype.getChild = function(t) {
              var e = t.getFront()
              return null === e
                ? this
                : this.getImmediateChild(e).getChild(t.popFront())
            }),
            (t.prototype.hasChild = function(t) {
              return null !== this.children_.get(t)
            }),
            (t.prototype.updateImmediateChild = function(e, n) {
              if (
                (i.assert(n, 'We should always be passing snapshot nodes'),
                '.priority' === e)
              )
                return this.updatePriority(n)
              var r = new Nt(e, n),
                o = void 0,
                a = void 0,
                s = void 0
              return (
                n.isEmpty()
                  ? ((o = this.children_.remove(e)),
                    (a = this.indexMap_.removeFromIndexes(r, this.children_)))
                  : ((o = this.children_.insert(e, n)),
                    (a = this.indexMap_.addToIndexes(r, this.children_))),
                (s = o.isEmpty() ? Bt : this.priorityNode_),
                new t(o, s, a)
              )
            }),
            (t.prototype.updateChild = function(t, e) {
              var n = t.getFront()
              if (null === n) return e
              i.assert(
                '.priority' !== t.getFront() || 1 === t.getLength(),
                '.priority must be the last token in a path'
              )
              var r = this.getImmediateChild(n).updateChild(t.popFront(), e)
              return this.updateImmediateChild(n, r)
            }),
            (t.prototype.isEmpty = function() {
              return this.children_.isEmpty()
            }),
            (t.prototype.numChildren = function() {
              return this.children_.count()
            }),
            (t.prototype.val = function(e) {
              if (this.isEmpty()) return null
              var n = {},
                r = 0,
                i = 0,
                o = !0
              if (
                (this.forEachChild(Kt, function(a, s) {
                  ;(n[a] = s.val(e)),
                    r++,
                    o && t.INTEGER_REGEXP_.test(a)
                      ? (i = Math.max(i, Number(a)))
                      : (o = !1)
                }),
                !e && o && i < 2 * r)
              ) {
                var a = []
                for (var s in n) a[s] = n[s]
                return a
              }
              return (
                e &&
                  !this.getPriority().isEmpty() &&
                  (n['.priority'] = this.getPriority().val()),
                n
              )
            }),
            (t.prototype.hash = function() {
              if (null === this.lazyHash_) {
                var t = ''
                this.getPriority().isEmpty() ||
                  (t += 'priority:' + Ut(this.getPriority().val()) + ':'),
                  this.forEachChild(Kt, function(e, n) {
                    var r = n.hash()
                    '' !== r && (t += ':' + e + ':' + r)
                  }),
                  (this.lazyHash_ = '' === t ? '' : v(t))
              }
              return this.lazyHash_
            }),
            (t.prototype.getPredecessorChildName = function(t, e, n) {
              var r = this.resolveIndex_(n)
              if (r) {
                var i = r.getPredecessorKey(new Nt(t, e))
                return i ? i.name : null
              }
              return this.children_.getPredecessorKey(t)
            }),
            (t.prototype.getFirstChildName = function(t) {
              var e = this.resolveIndex_(t)
              if (e) {
                var n = e.minKey()
                return n && n.name
              }
              return this.children_.minKey()
            }),
            (t.prototype.getFirstChild = function(t) {
              var e = this.getFirstChildName(t)
              return e ? new Nt(e, this.children_.get(e)) : null
            }),
            (t.prototype.getLastChildName = function(t) {
              var e = this.resolveIndex_(t)
              if (e) {
                var n = e.maxKey()
                return n && n.name
              }
              return this.children_.maxKey()
            }),
            (t.prototype.getLastChild = function(t) {
              var e = this.getLastChildName(t)
              return e ? new Nt(e, this.children_.get(e)) : null
            }),
            (t.prototype.forEachChild = function(t, e) {
              var n = this.resolveIndex_(t)
              return n
                ? n.inorderTraversal(function(t) {
                    return e(t.name, t.node)
                  })
                : this.children_.inorderTraversal(e)
            }),
            (t.prototype.getIterator = function(t) {
              return this.getIteratorFrom(t.minPost(), t)
            }),
            (t.prototype.getIteratorFrom = function(t, e) {
              var n = this.resolveIndex_(e)
              if (n)
                return n.getIteratorFrom(t, function(t) {
                  return t
                })
              var r = this.children_.getIteratorFrom(t.name, Nt.Wrap),
                i = r.peek()
              while (null != i && e.compare(i, t) < 0)
                r.getNext(), (i = r.peek())
              return r
            }),
            (t.prototype.getReverseIterator = function(t) {
              return this.getReverseIteratorFrom(t.maxPost(), t)
            }),
            (t.prototype.getReverseIteratorFrom = function(t, e) {
              var n = this.resolveIndex_(e)
              if (n)
                return n.getReverseIteratorFrom(t, function(t) {
                  return t
                })
              var r = this.children_.getReverseIteratorFrom(t.name, Nt.Wrap),
                i = r.peek()
              while (null != i && e.compare(i, t) > 0)
                r.getNext(), (i = r.peek())
              return r
            }),
            (t.prototype.compareTo = function(t) {
              return this.isEmpty()
                ? t.isEmpty()
                  ? 0
                  : -1
                : t.isLeafNode() || t.isEmpty()
                  ? 1
                  : t === se
                    ? -1
                    : 0
            }),
            (t.prototype.withIndex = function(e) {
              if (e === Dt || this.indexMap_.hasIndex(e)) return this
              var n = this.indexMap_.addIndex(e, this.children_)
              return new t(this.children_, this.priorityNode_, n)
            }),
            (t.prototype.isIndexed = function(t) {
              return t === Dt || this.indexMap_.hasIndex(t)
            }),
            (t.prototype.equals = function(t) {
              if (t === this) return !0
              if (t.isLeafNode()) return !1
              var e = t
              if (this.getPriority().equals(e.getPriority())) {
                if (this.children_.count() === e.children_.count()) {
                  var n = this.getIterator(Kt),
                    r = e.getIterator(Kt),
                    i = n.getNext(),
                    o = r.getNext()
                  while (i && o) {
                    if (i.name !== o.name || !i.node.equals(o.node)) return !1
                    ;(i = n.getNext()), (o = r.getNext())
                  }
                  return null === i && null === o
                }
                return !1
              }
              return !1
            }),
            (t.prototype.resolveIndex_ = function(t) {
              return t === Dt ? null : this.indexMap_.get(t.toString())
            }),
            (t.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/),
            t
          )
        })(),
        ae = (function(t) {
          function e() {
            return t.call(this, new Xt(ie), oe.EMPTY_NODE, ne.Default) || this
          }
          return (
            a.__extends(e, t),
            (e.prototype.compareTo = function(t) {
              return t === this ? 0 : 1
            }),
            (e.prototype.equals = function(t) {
              return t === this
            }),
            (e.prototype.getPriority = function() {
              return this
            }),
            (e.prototype.getImmediateChild = function(t) {
              return oe.EMPTY_NODE
            }),
            (e.prototype.isEmpty = function() {
              return !1
            }),
            e
          )
        })(oe),
        se = new ae()
      Object.defineProperties(Nt, {
        MIN: { value: new Nt(A, oe.EMPTY_NODE) },
        MAX: { value: new Nt(P, se) }
      }),
        (Rt.__EMPTY_NODE = oe.EMPTY_NODE),
        (qt.__childrenNodeConstructor = oe),
        Ft(se),
        $t(se)
      var ue = !0
      function ce(t, e) {
        if ((void 0 === e && (e = null), null === t)) return oe.EMPTY_NODE
        if (
          ('object' === typeof t && '.priority' in t && (e = t['.priority']),
          i.assert(
            null === e ||
              'string' === typeof e ||
              'number' === typeof e ||
              ('object' === typeof e && '.sv' in e),
            'Invalid priority type found: ' + typeof e
          ),
          'object' === typeof t &&
            '.value' in t &&
            null !== t['.value'] &&
            (t = t['.value']),
          'object' !== typeof t || '.sv' in t)
        ) {
          var n = t
          return new qt(n, ce(e))
        }
        if (t instanceof Array || !ue) {
          var r = oe.EMPTY_NODE,
            o = t
          return (
            i.forEach(o, function(t, e) {
              if (i.contains(o, t) && '.' !== t.substring(0, 1)) {
                var n = ce(e)
                ;(!n.isLeafNode() && n.isEmpty()) ||
                  (r = r.updateImmediateChild(t, n))
              }
            }),
            r.updatePriority(ce(e))
          )
        }
        var a = [],
          s = !1,
          u = t
        if (
          (i.forEach(u, function(t, e) {
            if ('string' !== typeof t || '.' !== t.substring(0, 1)) {
              var n = ce(u[t])
              n.isEmpty() ||
                ((s = s || !n.getPriority().isEmpty()), a.push(new Nt(t, n)))
            }
          }),
          0 == a.length)
        )
          return oe.EMPTY_NODE
        var c = te(
          a,
          re,
          function(t) {
            return t.name
          },
          ie
        )
        if (s) {
          var l = te(a, Kt.getCompare())
          return new oe(
            c,
            ce(e),
            new ne({ '.priority': l }, { '.priority': Kt })
          )
        }
        return new oe(c, ce(e), ne.Default)
      }
      Vt(ce)
      var le,
        he,
        pe = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            a.__extends(e, t),
            (e.prototype.compare = function(t, e) {
              var n = t.node.compareTo(e.node)
              return 0 === n ? I(t.name, e.name) : n
            }),
            (e.prototype.isDefinedOn = function(t) {
              return !0
            }),
            (e.prototype.indexedValueChanged = function(t, e) {
              return !t.equals(e)
            }),
            (e.prototype.minPost = function() {
              return Nt.MIN
            }),
            (e.prototype.maxPost = function() {
              return Nt.MAX
            }),
            (e.prototype.makePost = function(t, e) {
              var n = ce(t)
              return new Nt(e, n)
            }),
            (e.prototype.toString = function() {
              return '.value'
            }),
            e
          )
        })(kt),
        fe = new pe(),
        de = (function(t) {
          function e(e) {
            var n = t.call(this) || this
            return (
              (n.indexPath_ = e),
              i.assert(
                !e.isEmpty() && '.priority' !== e.getFront(),
                "Can't create PathIndex with empty path or .priority key"
              ),
              n
            )
          }
          return (
            a.__extends(e, t),
            (e.prototype.extractChild = function(t) {
              return t.getChild(this.indexPath_)
            }),
            (e.prototype.isDefinedOn = function(t) {
              return !t.getChild(this.indexPath_).isEmpty()
            }),
            (e.prototype.compare = function(t, e) {
              var n = this.extractChild(t.node),
                r = this.extractChild(e.node),
                i = n.compareTo(r)
              return 0 === i ? I(t.name, e.name) : i
            }),
            (e.prototype.makePost = function(t, e) {
              var n = ce(t),
                r = oe.EMPTY_NODE.updateChild(this.indexPath_, n)
              return new Nt(e, r)
            }),
            (e.prototype.maxPost = function() {
              var t = oe.EMPTY_NODE.updateChild(this.indexPath_, se)
              return new Nt(P, t)
            }),
            (e.prototype.toString = function() {
              return this.indexPath_.slice().join('/')
            }),
            e
          )
        })(kt),
        ve = (function() {
          function t(t, e, n) {
            ;(this.node_ = t), (this.ref_ = e), (this.index_ = n)
          }
          return (
            (t.prototype.val = function() {
              return (
                i.validateArgCount('DataSnapshot.val', 0, 0, arguments.length),
                this.node_.val()
              )
            }),
            (t.prototype.exportVal = function() {
              return (
                i.validateArgCount(
                  'DataSnapshot.exportVal',
                  0,
                  0,
                  arguments.length
                ),
                this.node_.val(!0)
              )
            }),
            (t.prototype.toJSON = function() {
              return (
                i.validateArgCount(
                  'DataSnapshot.toJSON',
                  0,
                  1,
                  arguments.length
                ),
                this.exportVal()
              )
            }),
            (t.prototype.exists = function() {
              return (
                i.validateArgCount(
                  'DataSnapshot.exists',
                  0,
                  0,
                  arguments.length
                ),
                !this.node_.isEmpty()
              )
            }),
            (t.prototype.child = function(e) {
              i.validateArgCount('DataSnapshot.child', 0, 1, arguments.length),
                (e = String(e)),
                Et('DataSnapshot.child', 1, e, !1)
              var n = new B(e),
                r = this.ref_.child(n)
              return new t(this.node_.getChild(n), r, Kt)
            }),
            (t.prototype.hasChild = function(t) {
              i.validateArgCount(
                'DataSnapshot.hasChild',
                1,
                1,
                arguments.length
              ),
                Et('DataSnapshot.hasChild', 1, t, !1)
              var e = new B(t)
              return !this.node_.getChild(e).isEmpty()
            }),
            (t.prototype.getPriority = function() {
              return (
                i.validateArgCount(
                  'DataSnapshot.getPriority',
                  0,
                  0,
                  arguments.length
                ),
                this.node_.getPriority().val()
              )
            }),
            (t.prototype.forEach = function(e) {
              var n = this
              if (
                (i.validateArgCount(
                  'DataSnapshot.forEach',
                  1,
                  1,
                  arguments.length
                ),
                i.validateCallback('DataSnapshot.forEach', 1, e, !1),
                this.node_.isLeafNode())
              )
                return !1
              var r = this.node_
              return !!r.forEachChild(this.index_, function(r, i) {
                return e(new t(i, n.ref_.child(r), Kt))
              })
            }),
            (t.prototype.hasChildren = function() {
              return (
                i.validateArgCount(
                  'DataSnapshot.hasChildren',
                  0,
                  0,
                  arguments.length
                ),
                !this.node_.isLeafNode() && !this.node_.isEmpty()
              )
            }),
            Object.defineProperty(t.prototype, 'key', {
              get: function() {
                return this.ref_.getKey()
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.numChildren = function() {
              return (
                i.validateArgCount(
                  'DataSnapshot.numChildren',
                  0,
                  0,
                  arguments.length
                ),
                this.node_.numChildren()
              )
            }),
            (t.prototype.getRef = function() {
              return (
                i.validateArgCount('DataSnapshot.ref', 0, 0, arguments.length),
                this.ref_
              )
            }),
            Object.defineProperty(t.prototype, 'ref', {
              get: function() {
                return this.getRef()
              },
              enumerable: !0,
              configurable: !0
            }),
            t
          )
        })(),
        ye = (function() {
          function t(t, e, n, r) {
            ;(this.eventType = t),
              (this.eventRegistration = e),
              (this.snapshot = n),
              (this.prevName = r)
          }
          return (
            (t.prototype.getPath = function() {
              var t = this.snapshot.getRef()
              return 'value' === this.eventType ? t.path : t.getParent().path
            }),
            (t.prototype.getEventType = function() {
              return this.eventType
            }),
            (t.prototype.getEventRunner = function() {
              return this.eventRegistration.getEventRunner(this)
            }),
            (t.prototype.toString = function() {
              return (
                this.getPath().toString() +
                ':' +
                this.eventType +
                ':' +
                i.stringify(this.snapshot.exportVal())
              )
            }),
            t
          )
        })(),
        _e = (function() {
          function t(t, e, n) {
            ;(this.eventRegistration = t), (this.error = e), (this.path = n)
          }
          return (
            (t.prototype.getPath = function() {
              return this.path
            }),
            (t.prototype.getEventType = function() {
              return 'cancel'
            }),
            (t.prototype.getEventRunner = function() {
              return this.eventRegistration.getEventRunner(this)
            }),
            (t.prototype.toString = function() {
              return this.path.toString() + ':cancel'
            }),
            t
          )
        })(),
        ge = (function() {
          function t(t, e, n) {
            ;(this.callback_ = t),
              (this.cancelCallback_ = e),
              (this.context_ = n)
          }
          return (
            (t.prototype.respondsTo = function(t) {
              return 'value' === t
            }),
            (t.prototype.createEvent = function(t, e) {
              var n = e.getQueryParams().getIndex()
              return new ye(
                'value',
                this,
                new ve(t.snapshotNode, e.getRef(), n)
              )
            }),
            (t.prototype.getEventRunner = function(t) {
              var e = this.context_
              if ('cancel' === t.getEventType()) {
                i.assert(
                  this.cancelCallback_,
                  'Raising a cancel event on a listener with no cancel callback'
                )
                var n = this.cancelCallback_
                return function() {
                  n.call(e, t.error)
                }
              }
              var r = this.callback_
              return function() {
                r.call(e, t.snapshot)
              }
            }),
            (t.prototype.createCancelEvent = function(t, e) {
              return this.cancelCallback_ ? new _e(this, t, e) : null
            }),
            (t.prototype.matches = function(e) {
              return (
                e instanceof t &&
                (!e.callback_ ||
                  !this.callback_ ||
                  (e.callback_ === this.callback_ &&
                    e.context_ === this.context_))
              )
            }),
            (t.prototype.hasAnyCallback = function() {
              return null !== this.callback_
            }),
            t
          )
        })(),
        me = (function() {
          function t(t, e, n) {
            ;(this.callbacks_ = t),
              (this.cancelCallback_ = e),
              (this.context_ = n)
          }
          return (
            (t.prototype.respondsTo = function(t) {
              var e = 'children_added' === t ? 'child_added' : t
              return (
                (e = 'children_removed' === e ? 'child_removed' : e),
                i.contains(this.callbacks_, e)
              )
            }),
            (t.prototype.createCancelEvent = function(t, e) {
              return this.cancelCallback_ ? new _e(this, t, e) : null
            }),
            (t.prototype.createEvent = function(t, e) {
              i.assert(
                null != t.childName,
                'Child events should have a childName.'
              )
              var n = e.getRef().child(t.childName),
                r = e.getQueryParams().getIndex()
              return new ye(
                t.type,
                this,
                new ve(t.snapshotNode, n, r),
                t.prevName
              )
            }),
            (t.prototype.getEventRunner = function(t) {
              var e = this.context_
              if ('cancel' === t.getEventType()) {
                i.assert(
                  this.cancelCallback_,
                  'Raising a cancel event on a listener with no cancel callback'
                )
                var n = this.cancelCallback_
                return function() {
                  n.call(e, t.error)
                }
              }
              var r = this.callbacks_[t.eventType]
              return function() {
                r.call(e, t.snapshot, t.prevName)
              }
            }),
            (t.prototype.matches = function(e) {
              if (e instanceof t) {
                if (!this.callbacks_ || !e.callbacks_) return !0
                if (this.context_ === e.context_) {
                  var n = i.getCount(e.callbacks_),
                    r = i.getCount(this.callbacks_)
                  if (n === r) {
                    if (1 === n) {
                      var o = i.getAnyKey(e.callbacks_),
                        a = i.getAnyKey(this.callbacks_)
                      return (
                        a === o &&
                        (!e.callbacks_[o] ||
                          !this.callbacks_[a] ||
                          e.callbacks_[o] === this.callbacks_[a])
                      )
                    }
                    return i.every(this.callbacks_, function(t, n) {
                      return e.callbacks_[t] === n
                    })
                  }
                }
              }
              return !1
            }),
            (t.prototype.hasAnyCallback = function() {
              return null !== this.callbacks_
            }),
            t
          )
        })(),
        be = (function() {
          function t(t, e, n, r) {
            ;(this.repo = t),
              (this.path = e),
              (this.queryParams_ = n),
              (this.orderByCalled_ = r)
          }
          return (
            Object.defineProperty(t, '__referenceConstructor', {
              get: function() {
                return i.assert(le, 'Reference.ts has not been loaded'), le
              },
              set: function(t) {
                le = t
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.validateQueryEndpoints_ = function(t) {
              var e = null,
                n = null
              if (
                (t.hasStart() && (e = t.getIndexStartValue()),
                t.hasEnd() && (n = t.getIndexEndValue()),
                t.getIndex() === Dt)
              ) {
                var r =
                    'Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().',
                  o =
                    'Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.'
                if (t.hasStart()) {
                  var a = t.getIndexStartName()
                  if (a != A) throw new Error(r)
                  if ('string' !== typeof e) throw new Error(o)
                }
                if (t.hasEnd()) {
                  var s = t.getIndexEndName()
                  if (s != P) throw new Error(r)
                  if ('string' !== typeof n) throw new Error(o)
                }
              } else if (t.getIndex() === Kt) {
                if ((null != e && !vt(e)) || (null != n && !vt(n)))
                  throw new Error(
                    'Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).'
                  )
              } else if (
                (i.assert(
                  t.getIndex() instanceof de || t.getIndex() === fe,
                  'unknown index type.'
                ),
                (null != e && 'object' === typeof e) ||
                  (null != n && 'object' === typeof n))
              )
                throw new Error(
                  'Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.'
                )
            }),
            (t.validateLimit_ = function(t) {
              if (
                t.hasStart() &&
                t.hasEnd() &&
                t.hasLimit() &&
                !t.hasAnchoredLimit()
              )
                throw new Error(
                  "Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead."
                )
            }),
            (t.prototype.validateNoPreviousOrderByCall_ = function(t) {
              if (!0 === this.orderByCalled_)
                throw new Error(
                  t + ": You can't combine multiple orderBy calls."
                )
            }),
            (t.prototype.getQueryParams = function() {
              return this.queryParams_
            }),
            (t.prototype.getRef = function() {
              return (
                i.validateArgCount('Query.ref', 0, 0, arguments.length),
                new t.__referenceConstructor(this.repo, this.path)
              )
            }),
            (t.prototype.on = function(e, n, r, o) {
              i.validateArgCount('Query.on', 2, 4, arguments.length),
                wt('Query.on', 1, e, !1),
                i.validateCallback('Query.on', 2, n, !1)
              var a = t.getCancelAndContextArgs_('Query.on', r, o)
              if ('value' === e) this.onValueEvent(n, a.cancel, a.context)
              else {
                var s = {}
                ;(s[e] = n), this.onChildEvent(s, a.cancel, a.context)
              }
              return n
            }),
            (t.prototype.onValueEvent = function(t, e, n) {
              var r = new ge(t, e || null, n || null)
              this.repo.addEventCallbackForQuery(this, r)
            }),
            (t.prototype.onChildEvent = function(t, e, n) {
              var r = new me(t, e, n)
              this.repo.addEventCallbackForQuery(this, r)
            }),
            (t.prototype.off = function(t, e, n) {
              i.validateArgCount('Query.off', 0, 3, arguments.length),
                wt('Query.off', 1, t, !0),
                i.validateCallback('Query.off', 2, e, !0),
                i.validateContextObject('Query.off', 3, n, !0)
              var r = null,
                o = null
              if ('value' === t) {
                var a = e || null
                r = new ge(a, null, n || null)
              } else
                t &&
                  (e && ((o = {}), (o[t] = e)),
                  (r = new me(o, null, n || null)))
              this.repo.removeEventCallbackForQuery(this, r)
            }),
            (t.prototype.once = function(e, n, r, o) {
              var a = this
              i.validateArgCount('Query.once', 1, 4, arguments.length),
                wt('Query.once', 1, e, !1),
                i.validateCallback('Query.once', 2, n, !0)
              var s = t.getCancelAndContextArgs_('Query.once', r, o),
                u = !0,
                c = new i.Deferred()
              c.promise.catch(function() {})
              var l = function(t) {
                u &&
                  ((u = !1),
                  a.off(e, l),
                  n && n.bind(s.context)(t),
                  c.resolve(t))
              }
              return (
                this.on(e, l, function(t) {
                  a.off(e, l),
                    s.cancel && s.cancel.bind(s.context)(t),
                    c.reject(t)
                }),
                c.promise
              )
            }),
            (t.prototype.limitToFirst = function(e) {
              if (
                (i.validateArgCount(
                  'Query.limitToFirst',
                  1,
                  1,
                  arguments.length
                ),
                'number' !== typeof e || Math.floor(e) !== e || e <= 0)
              )
                throw new Error(
                  'Query.limitToFirst: First argument must be a positive integer.'
                )
              if (this.queryParams_.hasLimit())
                throw new Error(
                  'Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).'
                )
              return new t(
                this.repo,
                this.path,
                this.queryParams_.limitToFirst(e),
                this.orderByCalled_
              )
            }),
            (t.prototype.limitToLast = function(e) {
              if (
                (i.validateArgCount(
                  'Query.limitToLast',
                  1,
                  1,
                  arguments.length
                ),
                'number' !== typeof e || Math.floor(e) !== e || e <= 0)
              )
                throw new Error(
                  'Query.limitToLast: First argument must be a positive integer.'
                )
              if (this.queryParams_.hasLimit())
                throw new Error(
                  'Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).'
                )
              return new t(
                this.repo,
                this.path,
                this.queryParams_.limitToLast(e),
                this.orderByCalled_
              )
            }),
            (t.prototype.orderByChild = function(e) {
              if (
                (i.validateArgCount(
                  'Query.orderByChild',
                  1,
                  1,
                  arguments.length
                ),
                '$key' === e)
              )
                throw new Error(
                  'Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.'
                )
              if ('$priority' === e)
                throw new Error(
                  'Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.'
                )
              if ('$value' === e)
                throw new Error(
                  'Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.'
                )
              Et('Query.orderByChild', 1, e, !1),
                this.validateNoPreviousOrderByCall_('Query.orderByChild')
              var n = new B(e)
              if (n.isEmpty())
                throw new Error(
                  'Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.'
                )
              var r = new de(n),
                o = this.queryParams_.orderBy(r)
              return (
                t.validateQueryEndpoints_(o), new t(this.repo, this.path, o, !0)
              )
            }),
            (t.prototype.orderByKey = function() {
              i.validateArgCount('Query.orderByKey', 0, 0, arguments.length),
                this.validateNoPreviousOrderByCall_('Query.orderByKey')
              var e = this.queryParams_.orderBy(Dt)
              return (
                t.validateQueryEndpoints_(e), new t(this.repo, this.path, e, !0)
              )
            }),
            (t.prototype.orderByPriority = function() {
              i.validateArgCount(
                'Query.orderByPriority',
                0,
                0,
                arguments.length
              ),
                this.validateNoPreviousOrderByCall_('Query.orderByPriority')
              var e = this.queryParams_.orderBy(Kt)
              return (
                t.validateQueryEndpoints_(e), new t(this.repo, this.path, e, !0)
              )
            }),
            (t.prototype.orderByValue = function() {
              i.validateArgCount('Query.orderByValue', 0, 0, arguments.length),
                this.validateNoPreviousOrderByCall_('Query.orderByValue')
              var e = this.queryParams_.orderBy(fe)
              return (
                t.validateQueryEndpoints_(e), new t(this.repo, this.path, e, !0)
              )
            }),
            (t.prototype.startAt = function(e, n) {
              void 0 === e && (e = null),
                i.validateArgCount('Query.startAt', 0, 2, arguments.length),
                yt('Query.startAt', 1, e, this.path, !0),
                Ct('Query.startAt', 2, n, !0)
              var r = this.queryParams_.startAt(e, n)
              if (
                (t.validateLimit_(r),
                t.validateQueryEndpoints_(r),
                this.queryParams_.hasStart())
              )
                throw new Error(
                  'Query.startAt: Starting point was already set (by another call to startAt or equalTo).'
                )
              return (
                void 0 === e && ((e = null), (n = null)),
                new t(this.repo, this.path, r, this.orderByCalled_)
              )
            }),
            (t.prototype.endAt = function(e, n) {
              void 0 === e && (e = null),
                i.validateArgCount('Query.endAt', 0, 2, arguments.length),
                yt('Query.endAt', 1, e, this.path, !0),
                Ct('Query.endAt', 2, n, !0)
              var r = this.queryParams_.endAt(e, n)
              if (
                (t.validateLimit_(r),
                t.validateQueryEndpoints_(r),
                this.queryParams_.hasEnd())
              )
                throw new Error(
                  'Query.endAt: Ending point was already set (by another call to endAt or equalTo).'
                )
              return new t(this.repo, this.path, r, this.orderByCalled_)
            }),
            (t.prototype.equalTo = function(t, e) {
              if (
                (i.validateArgCount('Query.equalTo', 1, 2, arguments.length),
                yt('Query.equalTo', 1, t, this.path, !1),
                Ct('Query.equalTo', 2, e, !0),
                this.queryParams_.hasStart())
              )
                throw new Error(
                  'Query.equalTo: Starting point was already set (by another call to startAt or equalTo).'
                )
              if (this.queryParams_.hasEnd())
                throw new Error(
                  'Query.equalTo: Ending point was already set (by another call to endAt or equalTo).'
                )
              return this.startAt(t, e).endAt(t, e)
            }),
            (t.prototype.toString = function() {
              return (
                i.validateArgCount('Query.toString', 0, 0, arguments.length),
                this.repo.toString() + this.path.toUrlEncodedString()
              )
            }),
            (t.prototype.toJSON = function() {
              return (
                i.validateArgCount('Query.toJSON', 0, 1, arguments.length),
                this.toString()
              )
            }),
            (t.prototype.queryObject = function() {
              return this.queryParams_.getQueryObject()
            }),
            (t.prototype.queryIdentifier = function() {
              var t = this.queryObject(),
                e = R(t)
              return '{}' === e ? 'default' : e
            }),
            (t.prototype.isEqual = function(e) {
              if (
                (i.validateArgCount('Query.isEqual', 1, 1, arguments.length),
                !(e instanceof t))
              ) {
                var n =
                  'Query.isEqual failed: First argument must be an instance of firebase.database.Query.'
                throw new Error(n)
              }
              var r = this.repo === e.repo,
                o = this.path.equals(e.path),
                a = this.queryIdentifier() === e.queryIdentifier()
              return r && o && a
            }),
            (t.getCancelAndContextArgs_ = function(t, e, n) {
              var r = { cancel: null, context: null }
              if (e && n)
                (r.cancel = e),
                  i.validateCallback(t, 3, r.cancel, !0),
                  (r.context = n),
                  i.validateContextObject(t, 4, r.context, !0)
              else if (e)
                if ('object' === typeof e && null !== e) r.context = e
                else {
                  if ('function' !== typeof e)
                    throw new Error(
                      i.errorPrefix(t, 3, !0) +
                        ' must either be a cancel callback or a context object.'
                    )
                  r.cancel = e
                }
              return r
            }),
            Object.defineProperty(t.prototype, 'ref', {
              get: function() {
                return this.getRef()
              },
              enumerable: !0,
              configurable: !0
            }),
            t
          )
        })(),
        we = (function() {
          function t() {
            this.set = {}
          }
          return (
            (t.prototype.add = function(t, e) {
              this.set[t] = null === e || e
            }),
            (t.prototype.contains = function(t) {
              return i.contains(this.set, t)
            }),
            (t.prototype.get = function(t) {
              return this.contains(t) ? this.set[t] : void 0
            }),
            (t.prototype.remove = function(t) {
              delete this.set[t]
            }),
            (t.prototype.clear = function() {
              this.set = {}
            }),
            (t.prototype.isEmpty = function() {
              return i.isEmpty(this.set)
            }),
            (t.prototype.count = function() {
              return i.getCount(this.set)
            }),
            (t.prototype.each = function(t) {
              i.forEach(this.set, function(e, n) {
                return t(e, n)
              })
            }),
            (t.prototype.keys = function() {
              var t = []
              return (
                i.forEach(this.set, function(e) {
                  t.push(e)
                }),
                t
              )
            }),
            t
          )
        })(),
        Ce = (function() {
          function t() {
            ;(this.value_ = null), (this.children_ = null)
          }
          return (
            (t.prototype.find = function(t) {
              if (null != this.value_) return this.value_.getChild(t)
              if (t.isEmpty() || null == this.children_) return null
              var e = t.getFront()
              if (((t = t.popFront()), this.children_.contains(e))) {
                var n = this.children_.get(e)
                return n.find(t)
              }
              return null
            }),
            (t.prototype.remember = function(e, n) {
              if (e.isEmpty()) (this.value_ = n), (this.children_ = null)
              else if (null !== this.value_)
                this.value_ = this.value_.updateChild(e, n)
              else {
                null == this.children_ && (this.children_ = new we())
                var r = e.getFront()
                this.children_.contains(r) || this.children_.add(r, new t())
                var i = this.children_.get(r)
                ;(e = e.popFront()), i.remember(e, n)
              }
            }),
            (t.prototype.forget = function(t) {
              if (t.isEmpty())
                return (this.value_ = null), (this.children_ = null), !0
              if (null !== this.value_) {
                if (this.value_.isLeafNode()) return !1
                var e = this.value_
                this.value_ = null
                var n = this
                return (
                  e.forEachChild(Kt, function(t, e) {
                    n.remember(new B(t), e)
                  }),
                  this.forget(t)
                )
              }
              if (null !== this.children_) {
                var r = t.getFront()
                if (((t = t.popFront()), this.children_.contains(r))) {
                  var i = this.children_.get(r).forget(t)
                  i && this.children_.remove(r)
                }
                return (
                  !!this.children_.isEmpty() && ((this.children_ = null), !0)
                )
              }
              return !0
            }),
            (t.prototype.forEachTree = function(t, e) {
              null !== this.value_
                ? e(t, this.value_)
                : this.forEachChild(function(n, r) {
                    var i = new B(t.toString() + '/' + n)
                    r.forEachTree(i, e)
                  })
            }),
            (t.prototype.forEachChild = function(t) {
              null !== this.children_ &&
                this.children_.each(function(e, n) {
                  t(e, n)
                })
            }),
            t
          )
        })(),
        Ee = function(t) {
          return (
            (t = t || {}),
            (t['timestamp'] = t['timestamp'] || new Date().getTime()),
            t
          )
        },
        Se = function(t, e) {
          return t && 'object' === typeof t
            ? (i.assert(
                '.sv' in t,
                'Unexpected leaf node or priority contents'
              ),
              e[t['.sv']])
            : t
        },
        Te = function(t, e) {
          var n = new Ce()
          return (
            t.forEachTree(new B(''), function(t, r) {
              n.remember(t, xe(r, e))
            }),
            n
          )
        },
        xe = function(t, e) {
          var n,
            r = t.getPriority().val(),
            i = Se(r, e)
          if (t.isLeafNode()) {
            var o = t,
              a = Se(o.getValue(), e)
            return a !== o.getValue() || i !== o.getPriority().val()
              ? new qt(a, ce(i))
              : t
          }
          var s = t
          return (
            (n = s),
            i !== s.getPriority().val() && (n = n.updatePriority(new qt(i))),
            s.forEachChild(Kt, function(t, r) {
              var i = xe(r, e)
              i !== r && (n = n.updateImmediateChild(t, i))
            }),
            n
          )
        }
      ;(function(t) {
        ;(t[(t['OVERWRITE'] = 0)] = 'OVERWRITE'),
          (t[(t['MERGE'] = 1)] = 'MERGE'),
          (t[(t['ACK_USER_WRITE'] = 2)] = 'ACK_USER_WRITE'),
          (t[(t['LISTEN_COMPLETE'] = 3)] = 'LISTEN_COMPLETE')
      })(he || (he = {}))
      var Oe,
        Ae,
        Pe = (function() {
          function t(t, e, n, r) {
            ;(this.fromUser = t),
              (this.fromServer = e),
              (this.queryId = n),
              (this.tagged = r),
              i.assert(!r || e, 'Tagged queries must be from server.')
          }
          return (
            (t.User = new t(!0, !1, null, !1)),
            (t.Server = new t(!1, !0, null, !1)),
            (t.forServerTaggedQuery = function(e) {
              return new t(!1, !0, e, !0)
            }),
            t
          )
        })(),
        Ie = (function() {
          function t(t, e, n) {
            ;(this.path = t),
              (this.affectedTree = e),
              (this.revert = n),
              (this.type = he.ACK_USER_WRITE),
              (this.source = Pe.User)
          }
          return (
            (t.prototype.operationForChild = function(e) {
              if (this.path.isEmpty()) {
                if (null != this.affectedTree.value)
                  return (
                    i.assert(
                      this.affectedTree.children.isEmpty(),
                      'affectedTree should not have overlapping affected paths.'
                    ),
                    this
                  )
                var n = this.affectedTree.subtree(new B(e))
                return new t(B.Empty, n, this.revert)
              }
              return (
                i.assert(
                  this.path.getFront() === e,
                  'operationForChild called for unrelated child.'
                ),
                new t(this.path.popFront(), this.affectedTree, this.revert)
              )
            }),
            t
          )
        })(),
        Ne = function() {
          return Oe || (Oe = new Xt(N)), Oe
        },
        ke = (function() {
          function t(t, e) {
            void 0 === e && (e = Ne()), (this.value = t), (this.children = e)
          }
          return (
            (t.fromObject = function(e) {
              var n = t.Empty
              return (
                i.forEach(e, function(t, e) {
                  n = n.set(new B(t), e)
                }),
                n
              )
            }),
            (t.prototype.isEmpty = function() {
              return null === this.value && this.children.isEmpty()
            }),
            (t.prototype.findRootMostMatchingPathAndValue = function(t, e) {
              if (null != this.value && e(this.value))
                return { path: B.Empty, value: this.value }
              if (t.isEmpty()) return null
              var n = t.getFront(),
                r = this.children.get(n)
              if (null !== r) {
                var i = r.findRootMostMatchingPathAndValue(t.popFront(), e)
                if (null != i) {
                  var o = new B(n).child(i.path)
                  return { path: o, value: i.value }
                }
                return null
              }
              return null
            }),
            (t.prototype.findRootMostValueAndPath = function(t) {
              return this.findRootMostMatchingPathAndValue(t, function() {
                return !0
              })
            }),
            (t.prototype.subtree = function(e) {
              if (e.isEmpty()) return this
              var n = e.getFront(),
                r = this.children.get(n)
              return null !== r ? r.subtree(e.popFront()) : t.Empty
            }),
            (t.prototype.set = function(e, n) {
              if (e.isEmpty()) return new t(n, this.children)
              var r = e.getFront(),
                i = this.children.get(r) || t.Empty,
                o = i.set(e.popFront(), n),
                a = this.children.insert(r, o)
              return new t(this.value, a)
            }),
            (t.prototype.remove = function(e) {
              if (e.isEmpty())
                return this.children.isEmpty()
                  ? t.Empty
                  : new t(null, this.children)
              var n = e.getFront(),
                r = this.children.get(n)
              if (r) {
                var i = r.remove(e.popFront()),
                  o = void 0
                return (
                  (o = i.isEmpty()
                    ? this.children.remove(n)
                    : this.children.insert(n, i)),
                  null === this.value && o.isEmpty()
                    ? t.Empty
                    : new t(this.value, o)
                )
              }
              return this
            }),
            (t.prototype.get = function(t) {
              if (t.isEmpty()) return this.value
              var e = t.getFront(),
                n = this.children.get(e)
              return n ? n.get(t.popFront()) : null
            }),
            (t.prototype.setTree = function(e, n) {
              if (e.isEmpty()) return n
              var r = e.getFront(),
                i = this.children.get(r) || t.Empty,
                o = i.setTree(e.popFront(), n),
                a = void 0
              return (
                (a = o.isEmpty()
                  ? this.children.remove(r)
                  : this.children.insert(r, o)),
                new t(this.value, a)
              )
            }),
            (t.prototype.fold = function(t) {
              return this.fold_(B.Empty, t)
            }),
            (t.prototype.fold_ = function(t, e) {
              var n = {}
              return (
                this.children.inorderTraversal(function(r, i) {
                  n[r] = i.fold_(t.child(r), e)
                }),
                e(t, this.value, n)
              )
            }),
            (t.prototype.findOnPath = function(t, e) {
              return this.findOnPath_(t, B.Empty, e)
            }),
            (t.prototype.findOnPath_ = function(t, e, n) {
              var r = !!this.value && n(e, this.value)
              if (r) return r
              if (t.isEmpty()) return null
              var i = t.getFront(),
                o = this.children.get(i)
              return o ? o.findOnPath_(t.popFront(), e.child(i), n) : null
            }),
            (t.prototype.foreachOnPath = function(t, e) {
              return this.foreachOnPath_(t, B.Empty, e)
            }),
            (t.prototype.foreachOnPath_ = function(e, n, r) {
              if (e.isEmpty()) return this
              this.value && r(n, this.value)
              var i = e.getFront(),
                o = this.children.get(i)
              return o ? o.foreachOnPath_(e.popFront(), n.child(i), r) : t.Empty
            }),
            (t.prototype.foreach = function(t) {
              this.foreach_(B.Empty, t)
            }),
            (t.prototype.foreach_ = function(t, e) {
              this.children.inorderTraversal(function(n, r) {
                r.foreach_(t.child(n), e)
              }),
                this.value && e(t, this.value)
            }),
            (t.prototype.foreachChild = function(t) {
              this.children.inorderTraversal(function(e, n) {
                n.value && t(e, n.value)
              })
            }),
            (t.Empty = new t(null)),
            t
          )
        })(),
        Re = (function() {
          function t(t, e) {
            ;(this.source = t),
              (this.path = e),
              (this.type = he.LISTEN_COMPLETE)
          }
          return (
            (t.prototype.operationForChild = function(e) {
              return this.path.isEmpty()
                ? new t(this.source, B.Empty)
                : new t(this.source, this.path.popFront())
            }),
            t
          )
        })(),
        De = (function() {
          function t(t, e, n) {
            ;(this.source = t),
              (this.path = e),
              (this.snap = n),
              (this.type = he.OVERWRITE)
          }
          return (
            (t.prototype.operationForChild = function(e) {
              return this.path.isEmpty()
                ? new t(this.source, B.Empty, this.snap.getImmediateChild(e))
                : new t(this.source, this.path.popFront(), this.snap)
            }),
            t
          )
        })(),
        Fe = (function() {
          function t(t, e, n) {
            ;(this.source = t),
              (this.path = e),
              (this.children = n),
              (this.type = he.MERGE)
          }
          return (
            (t.prototype.operationForChild = function(e) {
              if (this.path.isEmpty()) {
                var n = this.children.subtree(new B(e))
                return n.isEmpty()
                  ? null
                  : n.value
                    ? new De(this.source, B.Empty, n.value)
                    : new t(this.source, B.Empty, n)
              }
              return (
                i.assert(
                  this.path.getFront() === e,
                  "Can't get a merge for a child not on the path of the operation"
                ),
                new t(this.source, this.path.popFront(), this.children)
              )
            }),
            (t.prototype.toString = function() {
              return (
                'Operation(' +
                this.path +
                ': ' +
                this.source.toString() +
                ' merge: ' +
                this.children.toString() +
                ')'
              )
            }),
            t
          )
        })(),
        Le = (function() {
          function t(t, e, n) {
            ;(this.node_ = t),
              (this.fullyInitialized_ = e),
              (this.filtered_ = n)
          }
          return (
            (t.prototype.isFullyInitialized = function() {
              return this.fullyInitialized_
            }),
            (t.prototype.isFiltered = function() {
              return this.filtered_
            }),
            (t.prototype.isCompleteForPath = function(t) {
              if (t.isEmpty())
                return this.isFullyInitialized() && !this.filtered_
              var e = t.getFront()
              return this.isCompleteForChild(e)
            }),
            (t.prototype.isCompleteForChild = function(t) {
              return (
                (this.isFullyInitialized() && !this.filtered_) ||
                this.node_.hasChild(t)
              )
            }),
            (t.prototype.getNode = function() {
              return this.node_
            }),
            t
          )
        })(),
        Me = (function() {
          function t(t, e) {
            ;(this.eventCache_ = t), (this.serverCache_ = e)
          }
          return (
            (t.prototype.updateEventSnap = function(e, n, r) {
              return new t(new Le(e, n, r), this.serverCache_)
            }),
            (t.prototype.updateServerSnap = function(e, n, r) {
              return new t(this.eventCache_, new Le(e, n, r))
            }),
            (t.prototype.getEventCache = function() {
              return this.eventCache_
            }),
            (t.prototype.getCompleteEventSnap = function() {
              return this.eventCache_.isFullyInitialized()
                ? this.eventCache_.getNode()
                : null
            }),
            (t.prototype.getServerCache = function() {
              return this.serverCache_
            }),
            (t.prototype.getCompleteServerSnap = function() {
              return this.serverCache_.isFullyInitialized()
                ? this.serverCache_.getNode()
                : null
            }),
            (t.Empty = new t(
              new Le(oe.EMPTY_NODE, !1, !1),
              new Le(oe.EMPTY_NODE, !1, !1)
            )),
            t
          )
        })(),
        je = (function() {
          function t(t, e, n, r, i) {
            ;(this.type = t),
              (this.snapshotNode = e),
              (this.childName = n),
              (this.oldSnap = r),
              (this.prevName = i)
          }
          return (
            (t.valueChange = function(e) {
              return new t(t.VALUE, e)
            }),
            (t.childAddedChange = function(e, n) {
              return new t(t.CHILD_ADDED, n, e)
            }),
            (t.childRemovedChange = function(e, n) {
              return new t(t.CHILD_REMOVED, n, e)
            }),
            (t.childChangedChange = function(e, n, r) {
              return new t(t.CHILD_CHANGED, n, e, r)
            }),
            (t.childMovedChange = function(e, n) {
              return new t(t.CHILD_MOVED, n, e)
            }),
            (t.CHILD_ADDED = 'child_added'),
            (t.CHILD_REMOVED = 'child_removed'),
            (t.CHILD_CHANGED = 'child_changed'),
            (t.CHILD_MOVED = 'child_moved'),
            (t.VALUE = 'value'),
            t
          )
        })(),
        Ue = (function() {
          function t(t) {
            this.index_ = t
          }
          return (
            (t.prototype.updateChild = function(t, e, n, r, o, a) {
              i.assert(
                t.isIndexed(this.index_),
                'A node must be indexed if only a child is updated'
              )
              var s = t.getImmediateChild(e)
              return s.getChild(r).equals(n.getChild(r)) &&
                s.isEmpty() == n.isEmpty()
                ? t
                : (null != a &&
                    (n.isEmpty()
                      ? t.hasChild(e)
                        ? a.trackChildChange(je.childRemovedChange(e, s))
                        : i.assert(
                            t.isLeafNode(),
                            'A child remove without an old child only makes sense on a leaf node'
                          )
                      : s.isEmpty()
                        ? a.trackChildChange(je.childAddedChange(e, n))
                        : a.trackChildChange(je.childChangedChange(e, n, s))),
                  t.isLeafNode() && n.isEmpty()
                    ? t
                    : t.updateImmediateChild(e, n).withIndex(this.index_))
            }),
            (t.prototype.updateFullNode = function(t, e, n) {
              return (
                null != n &&
                  (t.isLeafNode() ||
                    t.forEachChild(Kt, function(t, r) {
                      e.hasChild(t) ||
                        n.trackChildChange(je.childRemovedChange(t, r))
                    }),
                  e.isLeafNode() ||
                    e.forEachChild(Kt, function(e, r) {
                      if (t.hasChild(e)) {
                        var i = t.getImmediateChild(e)
                        i.equals(r) ||
                          n.trackChildChange(je.childChangedChange(e, r, i))
                      } else n.trackChildChange(je.childAddedChange(e, r))
                    })),
                e.withIndex(this.index_)
              )
            }),
            (t.prototype.updatePriority = function(t, e) {
              return t.isEmpty() ? oe.EMPTY_NODE : t.updatePriority(e)
            }),
            (t.prototype.filtersNodes = function() {
              return !1
            }),
            (t.prototype.getIndexedFilter = function() {
              return this
            }),
            (t.prototype.getIndex = function() {
              return this.index_
            }),
            t
          )
        })(),
        We = (function() {
          function t() {
            this.changeMap_ = {}
          }
          return (
            (t.prototype.trackChildChange = function(t) {
              var e = t.type,
                n = t.childName
              i.assert(
                e == je.CHILD_ADDED ||
                  e == je.CHILD_CHANGED ||
                  e == je.CHILD_REMOVED,
                'Only child changes supported for tracking'
              ),
                i.assert(
                  '.priority' !== n,
                  'Only non-priority child changes can be tracked.'
                )
              var r = i.safeGet(this.changeMap_, n)
              if (r) {
                var o = r.type
                if (e == je.CHILD_ADDED && o == je.CHILD_REMOVED)
                  this.changeMap_[n] = je.childChangedChange(
                    n,
                    t.snapshotNode,
                    r.snapshotNode
                  )
                else if (e == je.CHILD_REMOVED && o == je.CHILD_ADDED)
                  delete this.changeMap_[n]
                else if (e == je.CHILD_REMOVED && o == je.CHILD_CHANGED)
                  this.changeMap_[n] = je.childRemovedChange(n, r.oldSnap)
                else if (e == je.CHILD_CHANGED && o == je.CHILD_ADDED)
                  this.changeMap_[n] = je.childAddedChange(n, t.snapshotNode)
                else {
                  if (e != je.CHILD_CHANGED || o != je.CHILD_CHANGED)
                    throw i.assertionError(
                      'Illegal combination of changes: ' +
                        t +
                        ' occurred after ' +
                        r
                    )
                  this.changeMap_[n] = je.childChangedChange(
                    n,
                    t.snapshotNode,
                    r.oldSnap
                  )
                }
              } else this.changeMap_[n] = t
            }),
            (t.prototype.getChanges = function() {
              return i.getValues(this.changeMap_)
            }),
            t
          )
        })(),
        qe = (function() {
          function t() {}
          return (
            (t.prototype.getCompleteChild = function(t) {
              return null
            }),
            (t.prototype.getChildAfterChild = function(t, e, n) {
              return null
            }),
            t
          )
        })(),
        Ve = new qe(),
        $e = (function() {
          function t(t, e, n) {
            void 0 === n && (n = null),
              (this.writes_ = t),
              (this.viewCache_ = e),
              (this.optCompleteServerCache_ = n)
          }
          return (
            (t.prototype.getCompleteChild = function(t) {
              var e = this.viewCache_.getEventCache()
              if (e.isCompleteForChild(t))
                return e.getNode().getImmediateChild(t)
              var n =
                null != this.optCompleteServerCache_
                  ? new Le(this.optCompleteServerCache_, !0, !1)
                  : this.viewCache_.getServerCache()
              return this.writes_.calcCompleteChild(t, n)
            }),
            (t.prototype.getChildAfterChild = function(t, e, n) {
              var r =
                  null != this.optCompleteServerCache_
                    ? this.optCompleteServerCache_
                    : this.viewCache_.getCompleteServerSnap(),
                i = this.writes_.calcIndexedSlice(r, e, 1, n, t)
              return 0 === i.length ? null : i[0]
            }),
            t
          )
        })(),
        Qe = (function() {
          function t(t, e) {
            ;(this.viewCache = t), (this.changes = e)
          }
          return t
        })(),
        Be = (function() {
          function t(t) {
            this.filter_ = t
          }
          return (
            (t.prototype.assertIndexed = function(t) {
              i.assert(
                t
                  .getEventCache()
                  .getNode()
                  .isIndexed(this.filter_.getIndex()),
                'Event snap not indexed'
              ),
                i.assert(
                  t
                    .getServerCache()
                    .getNode()
                    .isIndexed(this.filter_.getIndex()),
                  'Server snap not indexed'
                )
            }),
            (t.prototype.applyOperation = function(e, n, r, o) {
              var a,
                s,
                u = new We()
              if (n.type === he.OVERWRITE) {
                var c = n
                c.source.fromUser
                  ? (a = this.applyUserOverwrite_(e, c.path, c.snap, r, o, u))
                  : (i.assert(c.source.fromServer, 'Unknown source.'),
                    (s =
                      c.source.tagged ||
                      (e.getServerCache().isFiltered() && !c.path.isEmpty())),
                    (a = this.applyServerOverwrite_(
                      e,
                      c.path,
                      c.snap,
                      r,
                      o,
                      s,
                      u
                    )))
              } else if (n.type === he.MERGE) {
                var l = n
                l.source.fromUser
                  ? (a = this.applyUserMerge_(e, l.path, l.children, r, o, u))
                  : (i.assert(l.source.fromServer, 'Unknown source.'),
                    (s = l.source.tagged || e.getServerCache().isFiltered()),
                    (a = this.applyServerMerge_(
                      e,
                      l.path,
                      l.children,
                      r,
                      o,
                      s,
                      u
                    )))
              } else if (n.type === he.ACK_USER_WRITE) {
                var h = n
                a = h.revert
                  ? this.revertUserWrite_(e, h.path, r, o, u)
                  : this.ackUserWrite_(e, h.path, h.affectedTree, r, o, u)
              } else {
                if (n.type !== he.LISTEN_COMPLETE)
                  throw i.assertionError('Unknown operation type: ' + n.type)
                a = this.listenComplete_(e, n.path, r, u)
              }
              var p = u.getChanges()
              return t.maybeAddValueEvent_(e, a, p), new Qe(a, p)
            }),
            (t.maybeAddValueEvent_ = function(t, e, n) {
              var r = e.getEventCache()
              if (r.isFullyInitialized()) {
                var i = r.getNode().isLeafNode() || r.getNode().isEmpty(),
                  o = t.getCompleteEventSnap()
                ;(n.length > 0 ||
                  !t.getEventCache().isFullyInitialized() ||
                  (i && !r.getNode().equals(o)) ||
                  !r
                    .getNode()
                    .getPriority()
                    .equals(o.getPriority())) &&
                  n.push(je.valueChange(e.getCompleteEventSnap()))
              }
            }),
            (t.prototype.generateEventCacheAfterServerEvent_ = function(
              t,
              e,
              n,
              r,
              o
            ) {
              var a = t.getEventCache()
              if (null != n.shadowingWrite(e)) return t
              var s = void 0,
                u = void 0
              if (e.isEmpty())
                if (
                  (i.assert(
                    t.getServerCache().isFullyInitialized(),
                    'If change path is empty, we must have complete server data'
                  ),
                  t.getServerCache().isFiltered())
                ) {
                  var c = t.getCompleteServerSnap(),
                    l = c instanceof oe ? c : oe.EMPTY_NODE,
                    h = n.calcCompleteEventChildren(l)
                  s = this.filter_.updateFullNode(
                    t.getEventCache().getNode(),
                    h,
                    o
                  )
                } else {
                  var p = n.calcCompleteEventCache(t.getCompleteServerSnap())
                  s = this.filter_.updateFullNode(
                    t.getEventCache().getNode(),
                    p,
                    o
                  )
                }
              else {
                var f = e.getFront()
                if ('.priority' == f) {
                  i.assert(
                    1 == e.getLength(),
                    "Can't have a priority with additional path components"
                  )
                  var d = a.getNode()
                  u = t.getServerCache().getNode()
                  var v = n.calcEventCacheAfterServerOverwrite(e, d, u)
                  s =
                    null != v ? this.filter_.updatePriority(d, v) : a.getNode()
                } else {
                  var y = e.popFront(),
                    _ = void 0
                  if (a.isCompleteForChild(f)) {
                    u = t.getServerCache().getNode()
                    var g = n.calcEventCacheAfterServerOverwrite(
                      e,
                      a.getNode(),
                      u
                    )
                    _ =
                      null != g
                        ? a
                            .getNode()
                            .getImmediateChild(f)
                            .updateChild(y, g)
                        : a.getNode().getImmediateChild(f)
                  } else _ = n.calcCompleteChild(f, t.getServerCache())
                  s =
                    null != _
                      ? this.filter_.updateChild(a.getNode(), f, _, y, r, o)
                      : a.getNode()
                }
              }
              return t.updateEventSnap(
                s,
                a.isFullyInitialized() || e.isEmpty(),
                this.filter_.filtersNodes()
              )
            }),
            (t.prototype.applyServerOverwrite_ = function(t, e, n, r, i, o, a) {
              var s,
                u = t.getServerCache(),
                c = o ? this.filter_ : this.filter_.getIndexedFilter()
              if (e.isEmpty()) s = c.updateFullNode(u.getNode(), n, null)
              else if (c.filtersNodes() && !u.isFiltered()) {
                var l = u.getNode().updateChild(e, n)
                s = c.updateFullNode(u.getNode(), l, null)
              } else {
                var h = e.getFront()
                if (!u.isCompleteForPath(e) && e.getLength() > 1) return t
                var p = e.popFront(),
                  f = u.getNode().getImmediateChild(h),
                  d = f.updateChild(p, n)
                s =
                  '.priority' == h
                    ? c.updatePriority(u.getNode(), d)
                    : c.updateChild(u.getNode(), h, d, p, Ve, null)
              }
              var v = t.updateServerSnap(
                  s,
                  u.isFullyInitialized() || e.isEmpty(),
                  c.filtersNodes()
                ),
                y = new $e(r, v, i)
              return this.generateEventCacheAfterServerEvent_(v, e, r, y, a)
            }),
            (t.prototype.applyUserOverwrite_ = function(t, e, n, r, i, o) {
              var a,
                s,
                u = t.getEventCache(),
                c = new $e(r, t, i)
              if (e.isEmpty())
                (s = this.filter_.updateFullNode(
                  t.getEventCache().getNode(),
                  n,
                  o
                )),
                  (a = t.updateEventSnap(s, !0, this.filter_.filtersNodes()))
              else {
                var l = e.getFront()
                if ('.priority' === l)
                  (s = this.filter_.updatePriority(
                    t.getEventCache().getNode(),
                    n
                  )),
                    (a = t.updateEventSnap(
                      s,
                      u.isFullyInitialized(),
                      u.isFiltered()
                    ))
                else {
                  var h = e.popFront(),
                    p = u.getNode().getImmediateChild(l),
                    f = void 0
                  if (h.isEmpty()) f = n
                  else {
                    var d = c.getCompleteChild(l)
                    f =
                      null != d
                        ? '.priority' === h.getBack() &&
                          d.getChild(h.parent()).isEmpty()
                          ? d
                          : d.updateChild(h, n)
                        : oe.EMPTY_NODE
                  }
                  if (p.equals(f)) a = t
                  else {
                    var v = this.filter_.updateChild(u.getNode(), l, f, h, c, o)
                    a = t.updateEventSnap(
                      v,
                      u.isFullyInitialized(),
                      this.filter_.filtersNodes()
                    )
                  }
                }
              }
              return a
            }),
            (t.cacheHasChild_ = function(t, e) {
              return t.getEventCache().isCompleteForChild(e)
            }),
            (t.prototype.applyUserMerge_ = function(e, n, r, i, o, a) {
              var s = this,
                u = e
              return (
                r.foreach(function(r, c) {
                  var l = n.child(r)
                  t.cacheHasChild_(e, l.getFront()) &&
                    (u = s.applyUserOverwrite_(u, l, c, i, o, a))
                }),
                r.foreach(function(r, c) {
                  var l = n.child(r)
                  t.cacheHasChild_(e, l.getFront()) ||
                    (u = s.applyUserOverwrite_(u, l, c, i, o, a))
                }),
                u
              )
            }),
            (t.prototype.applyMerge_ = function(t, e) {
              return (
                e.foreach(function(e, n) {
                  t = t.updateChild(e, n)
                }),
                t
              )
            }),
            (t.prototype.applyServerMerge_ = function(t, e, n, r, i, o, a) {
              var s = this
              if (
                t
                  .getServerCache()
                  .getNode()
                  .isEmpty() &&
                !t.getServerCache().isFullyInitialized()
              )
                return t
              var u,
                c = t
              u = e.isEmpty() ? n : ke.Empty.setTree(e, n)
              var l = t.getServerCache().getNode()
              return (
                u.children.inorderTraversal(function(e, n) {
                  if (l.hasChild(e)) {
                    var u = t
                        .getServerCache()
                        .getNode()
                        .getImmediateChild(e),
                      h = s.applyMerge_(u, n)
                    c = s.applyServerOverwrite_(c, new B(e), h, r, i, o, a)
                  }
                }),
                u.children.inorderTraversal(function(e, n) {
                  var u =
                    !t.getServerCache().isCompleteForChild(e) && null == n.value
                  if (!l.hasChild(e) && !u) {
                    var h = t
                        .getServerCache()
                        .getNode()
                        .getImmediateChild(e),
                      p = s.applyMerge_(h, n)
                    c = s.applyServerOverwrite_(c, new B(e), p, r, i, o, a)
                  }
                }),
                c
              )
            }),
            (t.prototype.ackUserWrite_ = function(t, e, n, r, i, o) {
              if (null != r.shadowingWrite(e)) return t
              var a = t.getServerCache().isFiltered(),
                s = t.getServerCache()
              if (null != n.value) {
                if (
                  (e.isEmpty() && s.isFullyInitialized()) ||
                  s.isCompleteForPath(e)
                )
                  return this.applyServerOverwrite_(
                    t,
                    e,
                    s.getNode().getChild(e),
                    r,
                    i,
                    a,
                    o
                  )
                if (e.isEmpty()) {
                  var u = ke.Empty
                  return (
                    s.getNode().forEachChild(Dt, function(t, e) {
                      u = u.set(new B(t), e)
                    }),
                    this.applyServerMerge_(t, e, u, r, i, a, o)
                  )
                }
                return t
              }
              var c = ke.Empty
              return (
                n.foreach(function(t, n) {
                  var r = e.child(t)
                  s.isCompleteForPath(r) &&
                    (c = c.set(t, s.getNode().getChild(r)))
                }),
                this.applyServerMerge_(t, e, c, r, i, a, o)
              )
            }),
            (t.prototype.listenComplete_ = function(t, e, n, r) {
              var i = t.getServerCache(),
                o = t.updateServerSnap(
                  i.getNode(),
                  i.isFullyInitialized() || e.isEmpty(),
                  i.isFiltered()
                )
              return this.generateEventCacheAfterServerEvent_(o, e, n, Ve, r)
            }),
            (t.prototype.revertUserWrite_ = function(t, e, n, r, o) {
              var a
              if (null != n.shadowingWrite(e)) return t
              var s = new $e(n, t, r),
                u = t.getEventCache().getNode(),
                c = void 0
              if (e.isEmpty() || '.priority' === e.getFront()) {
                var l = void 0
                if (t.getServerCache().isFullyInitialized())
                  l = n.calcCompleteEventCache(t.getCompleteServerSnap())
                else {
                  var h = t.getServerCache().getNode()
                  i.assert(
                    h instanceof oe,
                    'serverChildren would be complete if leaf node'
                  ),
                    (l = n.calcCompleteEventChildren(h))
                }
                ;(l = l), (c = this.filter_.updateFullNode(u, l, o))
              } else {
                var p = e.getFront(),
                  f = n.calcCompleteChild(p, t.getServerCache())
                null == f &&
                  t.getServerCache().isCompleteForChild(p) &&
                  (f = u.getImmediateChild(p)),
                  (c =
                    null != f
                      ? this.filter_.updateChild(u, p, f, e.popFront(), s, o)
                      : t
                          .getEventCache()
                          .getNode()
                          .hasChild(p)
                        ? this.filter_.updateChild(
                            u,
                            p,
                            oe.EMPTY_NODE,
                            e.popFront(),
                            s,
                            o
                          )
                        : u),
                  c.isEmpty() &&
                    t.getServerCache().isFullyInitialized() &&
                    ((a = n.calcCompleteEventCache(t.getCompleteServerSnap())),
                    a.isLeafNode() &&
                      (c = this.filter_.updateFullNode(c, a, o)))
              }
              return (
                (a =
                  t.getServerCache().isFullyInitialized() ||
                  null != n.shadowingWrite(B.Empty)),
                t.updateEventSnap(c, a, this.filter_.filtersNodes())
              )
            }),
            t
          )
        })(),
        He = (function() {
          function t(t) {
            ;(this.query_ = t),
              (this.index_ = this.query_.getQueryParams().getIndex())
          }
          return (
            (t.prototype.generateEventsForChanges = function(t, e, n) {
              var r = this,
                i = [],
                o = []
              return (
                t.forEach(function(t) {
                  t.type === je.CHILD_CHANGED &&
                    r.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) &&
                    o.push(je.childMovedChange(t.childName, t.snapshotNode))
                }),
                this.generateEventsForType_(i, je.CHILD_REMOVED, t, n, e),
                this.generateEventsForType_(i, je.CHILD_ADDED, t, n, e),
                this.generateEventsForType_(i, je.CHILD_MOVED, o, n, e),
                this.generateEventsForType_(i, je.CHILD_CHANGED, t, n, e),
                this.generateEventsForType_(i, je.VALUE, t, n, e),
                i
              )
            }),
            (t.prototype.generateEventsForType_ = function(t, e, n, r, i) {
              var o = this,
                a = n.filter(function(t) {
                  return t.type === e
                })
              a.sort(this.compareChanges_.bind(this)),
                a.forEach(function(e) {
                  var n = o.materializeSingleChange_(e, i)
                  r.forEach(function(r) {
                    r.respondsTo(e.type) && t.push(r.createEvent(n, o.query_))
                  })
                })
            }),
            (t.prototype.materializeSingleChange_ = function(t, e) {
              return 'value' === t.type || 'child_removed' === t.type
                ? t
                : ((t.prevName = e.getPredecessorChildName(
                    t.childName,
                    t.snapshotNode,
                    this.index_
                  )),
                  t)
            }),
            (t.prototype.compareChanges_ = function(t, e) {
              if (null == t.childName || null == e.childName)
                throw i.assertionError('Should only compare child_ events.')
              var n = new Nt(t.childName, t.snapshotNode),
                r = new Nt(e.childName, e.snapshotNode)
              return this.index_.compare(n, r)
            }),
            t
          )
        })(),
        Ke = (function() {
          function t(t, e) {
            ;(this.query_ = t), (this.eventRegistrations_ = [])
            var n = this.query_.getQueryParams(),
              r = new Ue(n.getIndex()),
              i = n.getNodeFilter()
            this.processor_ = new Be(i)
            var o = e.getServerCache(),
              a = e.getEventCache(),
              s = r.updateFullNode(oe.EMPTY_NODE, o.getNode(), null),
              u = i.updateFullNode(oe.EMPTY_NODE, a.getNode(), null),
              c = new Le(s, o.isFullyInitialized(), r.filtersNodes()),
              l = new Le(u, a.isFullyInitialized(), i.filtersNodes())
            ;(this.viewCache_ = new Me(l, c)),
              (this.eventGenerator_ = new He(this.query_))
          }
          return (
            (t.prototype.getQuery = function() {
              return this.query_
            }),
            (t.prototype.getServerCache = function() {
              return this.viewCache_.getServerCache().getNode()
            }),
            (t.prototype.getCompleteServerCache = function(t) {
              var e = this.viewCache_.getCompleteServerSnap()
              return e &&
                (this.query_.getQueryParams().loadsAllData() ||
                  (!t.isEmpty() &&
                    !e.getImmediateChild(t.getFront()).isEmpty()))
                ? e.getChild(t)
                : null
            }),
            (t.prototype.isEmpty = function() {
              return 0 === this.eventRegistrations_.length
            }),
            (t.prototype.addEventRegistration = function(t) {
              this.eventRegistrations_.push(t)
            }),
            (t.prototype.removeEventRegistration = function(t, e) {
              var n = []
              if (e) {
                i.assert(
                  null == t,
                  'A cancel should cancel all event registrations.'
                )
                var r = this.query_.path
                this.eventRegistrations_.forEach(function(t) {
                  e = e
                  var i = t.createCancelEvent(e, r)
                  i && n.push(i)
                })
              }
              if (t) {
                for (
                  var o = [], a = 0;
                  a < this.eventRegistrations_.length;
                  ++a
                ) {
                  var s = this.eventRegistrations_[a]
                  if (s.matches(t)) {
                    if (t.hasAnyCallback()) {
                      o = o.concat(this.eventRegistrations_.slice(a + 1))
                      break
                    }
                  } else o.push(s)
                }
                this.eventRegistrations_ = o
              } else this.eventRegistrations_ = []
              return n
            }),
            (t.prototype.applyOperation = function(t, e, n) {
              t.type === he.MERGE &&
                null !== t.source.queryId &&
                (i.assert(
                  this.viewCache_.getCompleteServerSnap(),
                  'We should always have a full cache before handling merges'
                ),
                i.assert(
                  this.viewCache_.getCompleteEventSnap(),
                  'Missing event cache, even though we have a server cache'
                ))
              var r = this.viewCache_,
                o = this.processor_.applyOperation(r, t, e, n)
              return (
                this.processor_.assertIndexed(o.viewCache),
                i.assert(
                  o.viewCache.getServerCache().isFullyInitialized() ||
                    !r.getServerCache().isFullyInitialized(),
                  'Once a server snap is complete, it should never go back'
                ),
                (this.viewCache_ = o.viewCache),
                this.generateEventsForChanges_(
                  o.changes,
                  o.viewCache.getEventCache().getNode(),
                  null
                )
              )
            }),
            (t.prototype.getInitialEvents = function(t) {
              var e = this.viewCache_.getEventCache(),
                n = []
              if (!e.getNode().isLeafNode()) {
                var r = e.getNode()
                r.forEachChild(Kt, function(t, e) {
                  n.push(je.childAddedChange(t, e))
                })
              }
              return (
                e.isFullyInitialized() && n.push(je.valueChange(e.getNode())),
                this.generateEventsForChanges_(n, e.getNode(), t)
              )
            }),
            (t.prototype.generateEventsForChanges_ = function(t, e, n) {
              var r = n ? [n] : this.eventRegistrations_
              return this.eventGenerator_.generateEventsForChanges(t, e, r)
            }),
            t
          )
        })(),
        ze = (function() {
          function t() {
            this.views_ = {}
          }
          return (
            Object.defineProperty(t, '__referenceConstructor', {
              get: function() {
                return i.assert(Ae, 'Reference.ts has not been loaded'), Ae
              },
              set: function(t) {
                i.assert(
                  !Ae,
                  '__referenceConstructor has already been defined'
                ),
                  (Ae = t)
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.isEmpty = function() {
              return i.isEmpty(this.views_)
            }),
            (t.prototype.applyOperation = function(t, e, n) {
              var r = t.source.queryId
              if (null !== r) {
                var o = i.safeGet(this.views_, r)
                return (
                  i.assert(
                    null != o,
                    'SyncTree gave us an op for an invalid query.'
                  ),
                  o.applyOperation(t, e, n)
                )
              }
              var a = []
              return (
                i.forEach(this.views_, function(r, i) {
                  a = a.concat(i.applyOperation(t, e, n))
                }),
                a
              )
            }),
            (t.prototype.addEventRegistration = function(t, e, n, r, o) {
              var a = t.queryIdentifier(),
                s = i.safeGet(this.views_, a)
              if (!s) {
                var u = n.calcCompleteEventCache(o ? r : null),
                  c = !1
                u
                  ? (c = !0)
                  : r instanceof oe
                    ? ((u = n.calcCompleteEventChildren(r)), (c = !1))
                    : ((u = oe.EMPTY_NODE), (c = !1))
                var l = new Me(new Le(u, c, !1), new Le(r, o, !1))
                ;(s = new Ke(t, l)), (this.views_[a] = s)
              }
              return s.addEventRegistration(e), s.getInitialEvents(e)
            }),
            (t.prototype.removeEventRegistration = function(e, n, r) {
              var o = e.queryIdentifier(),
                a = [],
                s = [],
                u = this.hasCompleteView()
              if ('default' === o) {
                var c = this
                i.forEach(this.views_, function(t, e) {
                  ;(s = s.concat(e.removeEventRegistration(n, r))),
                    e.isEmpty() &&
                      (delete c.views_[t],
                      e
                        .getQuery()
                        .getQueryParams()
                        .loadsAllData() || a.push(e.getQuery()))
                })
              } else {
                var l = i.safeGet(this.views_, o)
                l &&
                  ((s = s.concat(l.removeEventRegistration(n, r))),
                  l.isEmpty() &&
                    (delete this.views_[o],
                    l
                      .getQuery()
                      .getQueryParams()
                      .loadsAllData() || a.push(l.getQuery())))
              }
              return (
                u &&
                  !this.hasCompleteView() &&
                  a.push(new t.__referenceConstructor(e.repo, e.path)),
                { removed: a, events: s }
              )
            }),
            (t.prototype.getQueryViews = function() {
              var t = this,
                e = Object.keys(this.views_).map(function(e) {
                  return t.views_[e]
                })
              return e.filter(function(t) {
                return !t
                  .getQuery()
                  .getQueryParams()
                  .loadsAllData()
              })
            }),
            (t.prototype.getCompleteServerCache = function(t) {
              var e = null
              return (
                i.forEach(this.views_, function(n, r) {
                  e = e || r.getCompleteServerCache(t)
                }),
                e
              )
            }),
            (t.prototype.viewForQuery = function(t) {
              var e = t.getQueryParams()
              if (e.loadsAllData()) return this.getCompleteView()
              var n = t.queryIdentifier()
              return i.safeGet(this.views_, n)
            }),
            (t.prototype.viewExistsForQuery = function(t) {
              return null != this.viewForQuery(t)
            }),
            (t.prototype.hasCompleteView = function() {
              return null != this.getCompleteView()
            }),
            (t.prototype.getCompleteView = function() {
              var t = i.findValue(this.views_, function(t) {
                return t
                  .getQuery()
                  .getQueryParams()
                  .loadsAllData()
              })
              return t || null
            }),
            t
          )
        })(),
        Ge = (function() {
          function t(t) {
            this.writeTree_ = t
          }
          return (
            (t.prototype.addWrite = function(e, n) {
              if (e.isEmpty()) return new t(new ke(n))
              var r = this.writeTree_.findRootMostValueAndPath(e)
              if (null != r) {
                var i = r.path,
                  o = r.value,
                  a = B.relativePath(i, e)
                return (
                  (o = o.updateChild(a, n)), new t(this.writeTree_.set(i, o))
                )
              }
              var s = new ke(n),
                u = this.writeTree_.setTree(e, s)
              return new t(u)
            }),
            (t.prototype.addWrites = function(t, e) {
              var n = this
              return (
                i.forEach(e, function(e, r) {
                  n = n.addWrite(t.child(e), r)
                }),
                n
              )
            }),
            (t.prototype.removeWrite = function(e) {
              if (e.isEmpty()) return t.Empty
              var n = this.writeTree_.setTree(e, ke.Empty)
              return new t(n)
            }),
            (t.prototype.hasCompleteWrite = function(t) {
              return null != this.getCompleteNode(t)
            }),
            (t.prototype.getCompleteNode = function(t) {
              var e = this.writeTree_.findRootMostValueAndPath(t)
              return null != e
                ? this.writeTree_
                    .get(e.path)
                    .getChild(B.relativePath(e.path, t))
                : null
            }),
            (t.prototype.getCompleteChildren = function() {
              var t = [],
                e = this.writeTree_.value
              return (
                null != e
                  ? e.isLeafNode() ||
                    e.forEachChild(Kt, function(e, n) {
                      t.push(new Nt(e, n))
                    })
                  : this.writeTree_.children.inorderTraversal(function(e, n) {
                      null != n.value && t.push(new Nt(e, n.value))
                    }),
                t
              )
            }),
            (t.prototype.childCompoundWrite = function(e) {
              if (e.isEmpty()) return this
              var n = this.getCompleteNode(e)
              return new t(null != n ? new ke(n) : this.writeTree_.subtree(e))
            }),
            (t.prototype.isEmpty = function() {
              return this.writeTree_.isEmpty()
            }),
            (t.prototype.apply = function(e) {
              return t.applySubtreeWrite_(B.Empty, this.writeTree_, e)
            }),
            (t.Empty = new t(new ke(null))),
            (t.applySubtreeWrite_ = function(e, n, r) {
              if (null != n.value) return r.updateChild(e, n.value)
              var o = null
              return (
                n.children.inorderTraversal(function(n, a) {
                  '.priority' === n
                    ? (i.assert(
                        null !== a.value,
                        'Priority writes must always be leaf nodes'
                      ),
                      (o = a.value))
                    : (r = t.applySubtreeWrite_(e.child(n), a, r))
                }),
                r.getChild(e).isEmpty() ||
                  null === o ||
                  (r = r.updateChild(e.child('.priority'), o)),
                r
              )
            }),
            t
          )
        })(),
        Ye = (function() {
          function t() {
            ;(this.visibleWrites_ = Ge.Empty),
              (this.allWrites_ = []),
              (this.lastWriteId_ = -1)
          }
          return (
            (t.prototype.childWrites = function(t) {
              return new Xe(t, this)
            }),
            (t.prototype.addOverwrite = function(t, e, n, r) {
              i.assert(
                n > this.lastWriteId_,
                'Stacking an older write on top of newer ones'
              ),
                void 0 === r && (r = !0),
                this.allWrites_.push({
                  path: t,
                  snap: e,
                  writeId: n,
                  visible: r
                }),
                r && (this.visibleWrites_ = this.visibleWrites_.addWrite(t, e)),
                (this.lastWriteId_ = n)
            }),
            (t.prototype.addMerge = function(t, e, n) {
              i.assert(
                n > this.lastWriteId_,
                'Stacking an older merge on top of newer ones'
              ),
                this.allWrites_.push({
                  path: t,
                  children: e,
                  writeId: n,
                  visible: !0
                }),
                (this.visibleWrites_ = this.visibleWrites_.addWrites(t, e)),
                (this.lastWriteId_ = n)
            }),
            (t.prototype.getWrite = function(t) {
              for (var e = 0; e < this.allWrites_.length; e++) {
                var n = this.allWrites_[e]
                if (n.writeId === t) return n
              }
              return null
            }),
            (t.prototype.removeWrite = function(t) {
              var e = this,
                n = this.allWrites_.findIndex(function(e) {
                  return e.writeId === t
                })
              i.assert(n >= 0, 'removeWrite called with nonexistent writeId.')
              var r = this.allWrites_[n]
              this.allWrites_.splice(n, 1)
              var o = r.visible,
                a = !1,
                s = this.allWrites_.length - 1
              while (o && s >= 0) {
                var u = this.allWrites_[s]
                u.visible &&
                  (s >= n && this.recordContainsPath_(u, r.path)
                    ? (o = !1)
                    : r.path.contains(u.path) && (a = !0)),
                  s--
              }
              if (o) {
                if (a) return this.resetTree_(), !0
                if (r.snap)
                  this.visibleWrites_ = this.visibleWrites_.removeWrite(r.path)
                else {
                  var c = r.children
                  i.forEach(c, function(t) {
                    e.visibleWrites_ = e.visibleWrites_.removeWrite(
                      r.path.child(t)
                    )
                  })
                }
                return !0
              }
              return !1
            }),
            (t.prototype.getCompleteWriteData = function(t) {
              return this.visibleWrites_.getCompleteNode(t)
            }),
            (t.prototype.calcCompleteEventCache = function(e, n, r, i) {
              if (r || i) {
                var o = this.visibleWrites_.childCompoundWrite(e)
                if (!i && o.isEmpty()) return n
                if (i || null != n || o.hasCompleteWrite(B.Empty)) {
                  var a = function(t) {
                      return (
                        (t.visible || i) &&
                        (!r || !~r.indexOf(t.writeId)) &&
                        (t.path.contains(e) || e.contains(t.path))
                      )
                    },
                    s = t.layerTree_(this.allWrites_, a, e)
                  l = n || oe.EMPTY_NODE
                  return s.apply(l)
                }
                return null
              }
              var u = this.visibleWrites_.getCompleteNode(e)
              if (null != u) return u
              var c = this.visibleWrites_.childCompoundWrite(e)
              if (c.isEmpty()) return n
              if (null != n || c.hasCompleteWrite(B.Empty)) {
                var l = n || oe.EMPTY_NODE
                return c.apply(l)
              }
              return null
            }),
            (t.prototype.calcCompleteEventChildren = function(t, e) {
              var n = oe.EMPTY_NODE,
                r = this.visibleWrites_.getCompleteNode(t)
              if (r)
                return (
                  r.isLeafNode() ||
                    r.forEachChild(Kt, function(t, e) {
                      n = n.updateImmediateChild(t, e)
                    }),
                  n
                )
              if (e) {
                var i = this.visibleWrites_.childCompoundWrite(t)
                return (
                  e.forEachChild(Kt, function(t, e) {
                    var r = i.childCompoundWrite(new B(t)).apply(e)
                    n = n.updateImmediateChild(t, r)
                  }),
                  i.getCompleteChildren().forEach(function(t) {
                    n = n.updateImmediateChild(t.name, t.node)
                  }),
                  n
                )
              }
              var o = this.visibleWrites_.childCompoundWrite(t)
              return (
                o.getCompleteChildren().forEach(function(t) {
                  n = n.updateImmediateChild(t.name, t.node)
                }),
                n
              )
            }),
            (t.prototype.calcEventCacheAfterServerOverwrite = function(
              t,
              e,
              n,
              r
            ) {
              i.assert(
                n || r,
                'Either existingEventSnap or existingServerSnap must exist'
              )
              var o = t.child(e)
              if (this.visibleWrites_.hasCompleteWrite(o)) return null
              var a = this.visibleWrites_.childCompoundWrite(o)
              return a.isEmpty() ? r.getChild(e) : a.apply(r.getChild(e))
            }),
            (t.prototype.calcCompleteChild = function(t, e, n) {
              var r = t.child(e),
                i = this.visibleWrites_.getCompleteNode(r)
              if (null != i) return i
              if (n.isCompleteForChild(e)) {
                var o = this.visibleWrites_.childCompoundWrite(r)
                return o.apply(n.getNode().getImmediateChild(e))
              }
              return null
            }),
            (t.prototype.shadowingWrite = function(t) {
              return this.visibleWrites_.getCompleteNode(t)
            }),
            (t.prototype.calcIndexedSlice = function(t, e, n, r, i, o) {
              var a,
                s = this.visibleWrites_.childCompoundWrite(t),
                u = s.getCompleteNode(B.Empty)
              if (null != u) a = u
              else {
                if (null == e) return []
                a = s.apply(e)
              }
              if (((a = a.withIndex(o)), a.isEmpty() || a.isLeafNode()))
                return []
              var c = [],
                l = o.getCompare(),
                h = i
                  ? a.getReverseIteratorFrom(n, o)
                  : a.getIteratorFrom(n, o),
                p = h.getNext()
              while (p && c.length < r)
                0 !== l(p, n) && c.push(p), (p = h.getNext())
              return c
            }),
            (t.prototype.recordContainsPath_ = function(t, e) {
              return t.snap
                ? t.path.contains(e)
                : !!i.findKey(t.children, function(n, r) {
                    return t.path.child(r).contains(e)
                  })
            }),
            (t.prototype.resetTree_ = function() {
              ;(this.visibleWrites_ = t.layerTree_(
                this.allWrites_,
                t.DefaultFilter_,
                B.Empty
              )),
                this.allWrites_.length > 0
                  ? (this.lastWriteId_ = this.allWrites_[
                      this.allWrites_.length - 1
                    ].writeId)
                  : (this.lastWriteId_ = -1)
            }),
            (t.DefaultFilter_ = function(t) {
              return t.visible
            }),
            (t.layerTree_ = function(t, e, n) {
              for (var r = Ge.Empty, o = 0; o < t.length; ++o) {
                var a = t[o]
                if (e(a)) {
                  var s = a.path,
                    u = void 0
                  if (a.snap)
                    n.contains(s)
                      ? ((u = B.relativePath(n, s)),
                        (r = r.addWrite(u, a.snap)))
                      : s.contains(n) &&
                        ((u = B.relativePath(s, n)),
                        (r = r.addWrite(B.Empty, a.snap.getChild(u))))
                  else {
                    if (!a.children)
                      throw i.assertionError(
                        'WriteRecord should have .snap or .children'
                      )
                    if (n.contains(s))
                      (u = B.relativePath(n, s)),
                        (r = r.addWrites(u, a.children))
                    else if (s.contains(n))
                      if (((u = B.relativePath(s, n)), u.isEmpty()))
                        r = r.addWrites(B.Empty, a.children)
                      else {
                        var c = i.safeGet(a.children, u.getFront())
                        if (c) {
                          var l = c.getChild(u.popFront())
                          r = r.addWrite(B.Empty, l)
                        }
                      }
                  }
                }
              }
              return r
            }),
            t
          )
        })(),
        Xe = (function() {
          function t(t, e) {
            ;(this.treePath_ = t), (this.writeTree_ = e)
          }
          return (
            (t.prototype.calcCompleteEventCache = function(t, e, n) {
              return this.writeTree_.calcCompleteEventCache(
                this.treePath_,
                t,
                e,
                n
              )
            }),
            (t.prototype.calcCompleteEventChildren = function(t) {
              return this.writeTree_.calcCompleteEventChildren(
                this.treePath_,
                t
              )
            }),
            (t.prototype.calcEventCacheAfterServerOverwrite = function(
              t,
              e,
              n
            ) {
              return this.writeTree_.calcEventCacheAfterServerOverwrite(
                this.treePath_,
                t,
                e,
                n
              )
            }),
            (t.prototype.shadowingWrite = function(t) {
              return this.writeTree_.shadowingWrite(this.treePath_.child(t))
            }),
            (t.prototype.calcIndexedSlice = function(t, e, n, r, i) {
              return this.writeTree_.calcIndexedSlice(
                this.treePath_,
                t,
                e,
                n,
                r,
                i
              )
            }),
            (t.prototype.calcCompleteChild = function(t, e) {
              return this.writeTree_.calcCompleteChild(this.treePath_, t, e)
            }),
            (t.prototype.child = function(e) {
              return new t(this.treePath_.child(e), this.writeTree_)
            }),
            t
          )
        })(),
        Je = (function() {
          function t(t) {
            ;(this.listenProvider_ = t),
              (this.syncPointTree_ = ke.Empty),
              (this.pendingWriteTree_ = new Ye()),
              (this.tagToQueryMap_ = {}),
              (this.queryToTagMap_ = {})
          }
          return (
            (t.prototype.applyUserOverwrite = function(t, e, n, r) {
              return (
                this.pendingWriteTree_.addOverwrite(t, e, n, r),
                r ? this.applyOperationToSyncPoints_(new De(Pe.User, t, e)) : []
              )
            }),
            (t.prototype.applyUserMerge = function(t, e, n) {
              this.pendingWriteTree_.addMerge(t, e, n)
              var r = ke.fromObject(e)
              return this.applyOperationToSyncPoints_(new Fe(Pe.User, t, r))
            }),
            (t.prototype.ackUserWrite = function(t, e) {
              void 0 === e && (e = !1)
              var n = this.pendingWriteTree_.getWrite(t),
                r = this.pendingWriteTree_.removeWrite(t)
              if (r) {
                var o = ke.Empty
                return (
                  null != n.snap
                    ? (o = o.set(B.Empty, !0))
                    : i.forEach(n.children, function(t, e) {
                        o = o.set(new B(t), e)
                      }),
                  this.applyOperationToSyncPoints_(new Ie(n.path, o, e))
                )
              }
              return []
            }),
            (t.prototype.applyServerOverwrite = function(t, e) {
              return this.applyOperationToSyncPoints_(new De(Pe.Server, t, e))
            }),
            (t.prototype.applyServerMerge = function(t, e) {
              var n = ke.fromObject(e)
              return this.applyOperationToSyncPoints_(new Fe(Pe.Server, t, n))
            }),
            (t.prototype.applyListenComplete = function(t) {
              return this.applyOperationToSyncPoints_(new Re(Pe.Server, t))
            }),
            (t.prototype.applyTaggedQueryOverwrite = function(e, n, r) {
              var i = this.queryKeyForTag_(r)
              if (null != i) {
                var o = t.parseQueryKey_(i),
                  a = o.path,
                  s = o.queryId,
                  u = B.relativePath(a, e),
                  c = new De(Pe.forServerTaggedQuery(s), u, n)
                return this.applyTaggedOperation_(a, c)
              }
              return []
            }),
            (t.prototype.applyTaggedQueryMerge = function(e, n, r) {
              var i = this.queryKeyForTag_(r)
              if (i) {
                var o = t.parseQueryKey_(i),
                  a = o.path,
                  s = o.queryId,
                  u = B.relativePath(a, e),
                  c = ke.fromObject(n),
                  l = new Fe(Pe.forServerTaggedQuery(s), u, c)
                return this.applyTaggedOperation_(a, l)
              }
              return []
            }),
            (t.prototype.applyTaggedListenComplete = function(e, n) {
              var r = this.queryKeyForTag_(n)
              if (r) {
                var i = t.parseQueryKey_(r),
                  o = i.path,
                  a = i.queryId,
                  s = B.relativePath(o, e),
                  u = new Re(Pe.forServerTaggedQuery(a), s)
                return this.applyTaggedOperation_(o, u)
              }
              return []
            }),
            (t.prototype.addEventRegistration = function(e, n) {
              var r = e.path,
                o = null,
                a = !1
              this.syncPointTree_.foreachOnPath(r, function(t, e) {
                var n = B.relativePath(t, r)
                ;(o = o || e.getCompleteServerCache(n)),
                  (a = a || e.hasCompleteView())
              })
              var s,
                u = this.syncPointTree_.get(r)
              if (
                (u
                  ? ((a = a || u.hasCompleteView()),
                    (o = o || u.getCompleteServerCache(B.Empty)))
                  : ((u = new ze()),
                    (this.syncPointTree_ = this.syncPointTree_.set(r, u))),
                null != o)
              )
                s = !0
              else {
                ;(s = !1), (o = oe.EMPTY_NODE)
                var c = this.syncPointTree_.subtree(r)
                c.foreachChild(function(t, e) {
                  var n = e.getCompleteServerCache(B.Empty)
                  n && (o = o.updateImmediateChild(t, n))
                })
              }
              var l = u.viewExistsForQuery(e)
              if (!l && !e.getQueryParams().loadsAllData()) {
                var h = t.makeQueryKey_(e)
                i.assert(
                  !(h in this.queryToTagMap_),
                  'View does not exist, but we have a tag'
                )
                var p = t.getNextQueryTag_()
                ;(this.queryToTagMap_[h] = p),
                  (this.tagToQueryMap_['_' + p] = h)
              }
              var f = this.pendingWriteTree_.childWrites(r),
                d = u.addEventRegistration(e, n, f, o, s)
              if (!l && !a) {
                var v = u.viewForQuery(e)
                d = d.concat(this.setupListener_(e, v))
              }
              return d
            }),
            (t.prototype.removeEventRegistration = function(e, n, r) {
              var i = this,
                o = e.path,
                a = this.syncPointTree_.get(o),
                s = []
              if (
                a &&
                ('default' === e.queryIdentifier() || a.viewExistsForQuery(e))
              ) {
                var u = a.removeEventRegistration(e, n, r)
                a.isEmpty() &&
                  (this.syncPointTree_ = this.syncPointTree_.remove(o))
                var c = u.removed
                s = u.events
                var l =
                    -1 !==
                    c.findIndex(function(t) {
                      return t.getQueryParams().loadsAllData()
                    }),
                  h = this.syncPointTree_.findOnPath(o, function(t, e) {
                    return e.hasCompleteView()
                  })
                if (l && !h) {
                  var p = this.syncPointTree_.subtree(o)
                  if (!p.isEmpty())
                    for (
                      var f = this.collectDistinctViewsForSubTree_(p), d = 0;
                      d < f.length;
                      ++d
                    ) {
                      var v = f[d],
                        y = v.getQuery(),
                        _ = this.createListenerForView_(v)
                      this.listenProvider_.startListening(
                        t.queryForListening_(y),
                        this.tagForQuery_(y),
                        _.hashFn,
                        _.onComplete
                      )
                    }
                }
                if (!h && c.length > 0 && !r)
                  if (l) {
                    var g = null
                    this.listenProvider_.stopListening(
                      t.queryForListening_(e),
                      g
                    )
                  } else
                    c.forEach(function(e) {
                      var n = i.queryToTagMap_[t.makeQueryKey_(e)]
                      i.listenProvider_.stopListening(
                        t.queryForListening_(e),
                        n
                      )
                    })
                this.removeTags_(c)
              }
              return s
            }),
            (t.prototype.calcCompleteEventCache = function(t, e) {
              var n = !0,
                r = this.pendingWriteTree_,
                i = this.syncPointTree_.findOnPath(t, function(e, n) {
                  var r = B.relativePath(e, t),
                    i = n.getCompleteServerCache(r)
                  if (i) return i
                })
              return r.calcCompleteEventCache(t, i, e, n)
            }),
            (t.prototype.collectDistinctViewsForSubTree_ = function(t) {
              return t.fold(function(t, e, n) {
                if (e && e.hasCompleteView()) {
                  var r = e.getCompleteView()
                  return [r]
                }
                var o = []
                return (
                  e && (o = e.getQueryViews()),
                  i.forEach(n, function(t, e) {
                    o = o.concat(e)
                  }),
                  o
                )
              })
            }),
            (t.prototype.removeTags_ = function(e) {
              for (var n = 0; n < e.length; ++n) {
                var r = e[n]
                if (!r.getQueryParams().loadsAllData()) {
                  var i = t.makeQueryKey_(r),
                    o = this.queryToTagMap_[i]
                  delete this.queryToTagMap_[i],
                    delete this.tagToQueryMap_['_' + o]
                }
              }
            }),
            (t.queryForListening_ = function(t) {
              return t.getQueryParams().loadsAllData() &&
                !t.getQueryParams().isDefault()
                ? t.getRef()
                : t
            }),
            (t.prototype.setupListener_ = function(e, n) {
              var r = e.path,
                o = this.tagForQuery_(e),
                a = this.createListenerForView_(n),
                s = this.listenProvider_.startListening(
                  t.queryForListening_(e),
                  o,
                  a.hashFn,
                  a.onComplete
                ),
                u = this.syncPointTree_.subtree(r)
              if (o)
                i.assert(
                  !u.value.hasCompleteView(),
                  "If we're adding a query, it shouldn't be shadowed"
                )
              else
                for (
                  var c = u.fold(function(t, e, n) {
                      if (!t.isEmpty() && e && e.hasCompleteView())
                        return [e.getCompleteView().getQuery()]
                      var r = []
                      return (
                        e &&
                          (r = r.concat(
                            e.getQueryViews().map(function(t) {
                              return t.getQuery()
                            })
                          )),
                        i.forEach(n, function(t, e) {
                          r = r.concat(e)
                        }),
                        r
                      )
                    }),
                    l = 0;
                  l < c.length;
                  ++l
                ) {
                  var h = c[l]
                  this.listenProvider_.stopListening(
                    t.queryForListening_(h),
                    this.tagForQuery_(h)
                  )
                }
              return s
            }),
            (t.prototype.createListenerForView_ = function(t) {
              var e = this,
                n = t.getQuery(),
                r = this.tagForQuery_(n)
              return {
                hashFn: function() {
                  var e = t.getServerCache() || oe.EMPTY_NODE
                  return e.hash()
                },
                onComplete: function(t) {
                  if ('ok' === t)
                    return r
                      ? e.applyTaggedListenComplete(n.path, r)
                      : e.applyListenComplete(n.path)
                  var i = U(t, n)
                  return e.removeEventRegistration(n, null, i)
                }
              }
            }),
            (t.makeQueryKey_ = function(t) {
              return t.path.toString() + '$' + t.queryIdentifier()
            }),
            (t.parseQueryKey_ = function(t) {
              var e = t.indexOf('$')
              return (
                i.assert(-1 !== e && e < t.length - 1, 'Bad queryKey.'),
                { queryId: t.substr(e + 1), path: new B(t.substr(0, e)) }
              )
            }),
            (t.prototype.queryKeyForTag_ = function(t) {
              return this.tagToQueryMap_['_' + t]
            }),
            (t.prototype.tagForQuery_ = function(e) {
              var n = t.makeQueryKey_(e)
              return i.safeGet(this.queryToTagMap_, n)
            }),
            (t.getNextQueryTag_ = function() {
              return t.nextQueryTag_++
            }),
            (t.prototype.applyTaggedOperation_ = function(t, e) {
              var n = this.syncPointTree_.get(t)
              i.assert(
                n,
                "Missing sync point for query tag that we're tracking"
              )
              var r = this.pendingWriteTree_.childWrites(t)
              return n.applyOperation(e, r, null)
            }),
            (t.prototype.applyOperationToSyncPoints_ = function(t) {
              return this.applyOperationHelper_(
                t,
                this.syncPointTree_,
                null,
                this.pendingWriteTree_.childWrites(B.Empty)
              )
            }),
            (t.prototype.applyOperationHelper_ = function(t, e, n, r) {
              if (t.path.isEmpty())
                return this.applyOperationDescendantsHelper_(t, e, n, r)
              var i = e.get(B.Empty)
              null == n && null != i && (n = i.getCompleteServerCache(B.Empty))
              var o = [],
                a = t.path.getFront(),
                s = t.operationForChild(a),
                u = e.children.get(a)
              if (u && s) {
                var c = n ? n.getImmediateChild(a) : null,
                  l = r.child(a)
                o = o.concat(this.applyOperationHelper_(s, u, c, l))
              }
              return i && (o = o.concat(i.applyOperation(t, r, n))), o
            }),
            (t.prototype.applyOperationDescendantsHelper_ = function(
              t,
              e,
              n,
              r
            ) {
              var i = this,
                o = e.get(B.Empty)
              null == n && null != o && (n = o.getCompleteServerCache(B.Empty))
              var a = []
              return (
                e.children.inorderTraversal(function(e, o) {
                  var s = n ? n.getImmediateChild(e) : null,
                    u = r.child(e),
                    c = t.operationForChild(e)
                  c &&
                    (a = a.concat(
                      i.applyOperationDescendantsHelper_(c, o, s, u)
                    ))
                }),
                o && (a = a.concat(o.applyOperation(t, r, n))),
                a
              )
            }),
            (t.nextQueryTag_ = 1),
            t
          )
        })(),
        Ze = (function() {
          function t() {
            this.rootNode_ = oe.EMPTY_NODE
          }
          return (
            (t.prototype.getNode = function(t) {
              return this.rootNode_.getChild(t)
            }),
            (t.prototype.updateSnapshot = function(t, e) {
              this.rootNode_ = this.rootNode_.updateChild(t, e)
            }),
            t
          )
        })(),
        tn = (function() {
          function t(t) {
            this.app_ = t
          }
          return (
            (t.prototype.getToken = function(t) {
              return this.app_['INTERNAL']
                ['getToken'](t)
                .then(null, function(t) {
                  return t && 'auth/token-not-initialized' === t.code
                    ? (b(
                        'Got auth/token-not-initialized error.  Treating as null token.'
                      ),
                      null)
                    : Promise.reject(t)
                })
            }),
            (t.prototype.addTokenChangeListener = function(t) {
              this.app_['INTERNAL']['addAuthTokenListener'](t)
            }),
            (t.prototype.removeTokenChangeListener = function(t) {
              this.app_['INTERNAL']['removeAuthTokenListener'](t)
            }),
            (t.prototype.notifyForInvalidToken = function() {
              var t =
                'Provided authentication credentials for the app named "' +
                this.app_.name +
                '" are invalid. This usually indicates your app was not initialized correctly. '
              'credential' in this.app_.options
                ? (t +=
                    'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
                : 'serviceAccount' in this.app_.options
                  ? (t +=
                      'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
                  : (t +=
                      'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
                S(t)
            }),
            t
          )
        })(),
        en = (function() {
          function t() {
            this.counters_ = {}
          }
          return (
            (t.prototype.incrementCounter = function(t, e) {
              void 0 === e && (e = 1),
                i.contains(this.counters_, t) || (this.counters_[t] = 0),
                (this.counters_[t] += e)
            }),
            (t.prototype.get = function() {
              return i.deepCopy(this.counters_)
            }),
            t
          )
        })(),
        nn = (function() {
          function t() {}
          return (
            (t.getCollection = function(t) {
              var e = t.toString()
              return (
                this.collections_[e] || (this.collections_[e] = new en()),
                this.collections_[e]
              )
            }),
            (t.getOrCreateReporter = function(t, e) {
              var n = t.toString()
              return (
                this.reporters_[n] || (this.reporters_[n] = e()),
                this.reporters_[n]
              )
            }),
            (t.collections_ = {}),
            (t.reporters_ = {}),
            t
          )
        })(),
        rn = (function() {
          function t(t) {
            ;(this.collection_ = t), (this.last_ = null)
          }
          return (
            (t.prototype.get = function() {
              var t = this.collection_.get(),
                e = i.clone(t)
              return (
                this.last_ &&
                  i.forEach(this.last_, function(t, n) {
                    e[t] = e[t] - n
                  }),
                (this.last_ = t),
                e
              )
            }),
            t
          )
        })(),
        on = 1e4,
        an = 3e4,
        sn = 3e5,
        un = (function() {
          function t(t, e) {
            ;(this.server_ = e),
              (this.statsToReport_ = {}),
              (this.statsListener_ = new rn(t))
            var n = on + (an - on) * Math.random()
            Q(this.reportStats_.bind(this), Math.floor(n))
          }
          return (
            (t.prototype.includeStat = function(t) {
              this.statsToReport_[t] = !0
            }),
            (t.prototype.reportStats_ = function() {
              var t = this,
                e = this.statsListener_.get(),
                n = {},
                r = !1
              i.forEach(e, function(e, o) {
                o > 0 &&
                  i.contains(t.statsToReport_, e) &&
                  ((n[e] = o), (r = !0))
              }),
                r && this.server_.reportStats(n),
                Q(
                  this.reportStats_.bind(this),
                  Math.floor(2 * Math.random() * sn)
                )
            }),
            t
          )
        })(),
        cn = (function() {
          function t() {
            ;(this.eventLists_ = []), (this.recursionDepth_ = 0)
          }
          return (
            (t.prototype.queueEvents = function(t) {
              for (var e = null, n = 0; n < t.length; n++) {
                var r = t[n],
                  i = r.getPath()
                null === e ||
                  i.equals(e.getPath()) ||
                  (this.eventLists_.push(e), (e = null)),
                  null === e && (e = new ln(i)),
                  e.add(r)
              }
              e && this.eventLists_.push(e)
            }),
            (t.prototype.raiseEventsAtPath = function(t, e) {
              this.queueEvents(e),
                this.raiseQueuedEventsMatchingPredicate_(function(e) {
                  return e.equals(t)
                })
            }),
            (t.prototype.raiseEventsForChangedPath = function(t, e) {
              this.queueEvents(e),
                this.raiseQueuedEventsMatchingPredicate_(function(e) {
                  return e.contains(t) || t.contains(e)
                })
            }),
            (t.prototype.raiseQueuedEventsMatchingPredicate_ = function(t) {
              this.recursionDepth_++
              for (var e = !0, n = 0; n < this.eventLists_.length; n++) {
                var r = this.eventLists_[n]
                if (r) {
                  var i = r.getPath()
                  t(i)
                    ? (this.eventLists_[n].raise(),
                      (this.eventLists_[n] = null))
                    : (e = !1)
                }
              }
              e && (this.eventLists_ = []), this.recursionDepth_--
            }),
            t
          )
        })(),
        ln = (function() {
          function t(t) {
            ;(this.path_ = t), (this.events_ = [])
          }
          return (
            (t.prototype.add = function(t) {
              this.events_.push(t)
            }),
            (t.prototype.raise = function() {
              for (var t = 0; t < this.events_.length; t++) {
                var e = this.events_[t]
                if (null !== e) {
                  this.events_[t] = null
                  var n = e.getEventRunner()
                  _ && b('event: ' + e.toString()), V(n)
                }
              }
            }),
            (t.prototype.getPath = function() {
              return this.path_
            }),
            t
          )
        })(),
        hn = (function() {
          function t(t) {
            ;(this.allowedEvents_ = t),
              (this.listeners_ = {}),
              i.assert(
                Array.isArray(t) && t.length > 0,
                'Requires a non-empty array'
              )
          }
          return (
            (t.prototype.trigger = function(t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n]
              if (Array.isArray(this.listeners_[t]))
                for (
                  var r = this.listeners_[t].slice(), i = 0;
                  i < r.length;
                  i++
                )
                  r[i].callback.apply(r[i].context, e)
            }),
            (t.prototype.on = function(t, e, n) {
              this.validateEventType_(t),
                (this.listeners_[t] = this.listeners_[t] || []),
                this.listeners_[t].push({ callback: e, context: n })
              var r = this.getInitialEvent(t)
              r && e.apply(n, r)
            }),
            (t.prototype.off = function(t, e, n) {
              this.validateEventType_(t)
              for (var r = this.listeners_[t] || [], i = 0; i < r.length; i++)
                if (r[i].callback === e && (!n || n === r[i].context))
                  return void r.splice(i, 1)
            }),
            (t.prototype.validateEventType_ = function(t) {
              i.assert(
                this.allowedEvents_.find(function(e) {
                  return e === t
                }),
                'Unknown event: ' + t
              )
            }),
            t
          )
        })(),
        pn = (function(t) {
          function e() {
            var e,
              n,
              r = t.call(this, ['visible']) || this
            return (
              'undefined' !== typeof document &&
                'undefined' !== typeof document.addEventListener &&
                ('undefined' !== typeof document['hidden']
                  ? ((n = 'visibilitychange'), (e = 'hidden'))
                  : 'undefined' !== typeof document['mozHidden']
                    ? ((n = 'mozvisibilitychange'), (e = 'mozHidden'))
                    : 'undefined' !== typeof document['msHidden']
                      ? ((n = 'msvisibilitychange'), (e = 'msHidden'))
                      : 'undefined' !== typeof document['webkitHidden'] &&
                        ((n = 'webkitvisibilitychange'), (e = 'webkitHidden'))),
              (r.visible_ = !0),
              n &&
                document.addEventListener(
                  n,
                  function() {
                    var t = !document[e]
                    t !== r.visible_ &&
                      ((r.visible_ = t), r.trigger('visible', t))
                  },
                  !1
                ),
              r
            )
          }
          return (
            a.__extends(e, t),
            (e.getInstance = function() {
              return new e()
            }),
            (e.prototype.getInitialEvent = function(t) {
              return (
                i.assert('visible' === t, 'Unknown event type: ' + t),
                [this.visible_]
              )
            }),
            e
          )
        })(hn),
        fn = (function(t) {
          function e() {
            var e = t.call(this, ['online']) || this
            return (
              (e.online_ = !0),
              'undefined' === typeof window ||
                'undefined' === typeof window.addEventListener ||
                i.isMobileCordova() ||
                (window.addEventListener(
                  'online',
                  function() {
                    e.online_ || ((e.online_ = !0), e.trigger('online', !0))
                  },
                  !1
                ),
                window.addEventListener(
                  'offline',
                  function() {
                    e.online_ && ((e.online_ = !1), e.trigger('online', !1))
                  },
                  !1
                )),
              e
            )
          }
          return (
            a.__extends(e, t),
            (e.getInstance = function() {
              return new e()
            }),
            (e.prototype.getInitialEvent = function(t) {
              return (
                i.assert('online' === t, 'Unknown event type: ' + t),
                [this.online_]
              )
            }),
            (e.prototype.currentlyOnline = function() {
              return this.online_
            }),
            e
          )
        })(hn),
        dn = (function() {
          function t(t) {
            ;(this.onMessage_ = t),
              (this.pendingResponses = []),
              (this.currentResponseNum = 0),
              (this.closeAfterResponse = -1),
              (this.onClose = null)
          }
          return (
            (t.prototype.closeAfter = function(t, e) {
              ;(this.closeAfterResponse = t),
                (this.onClose = e),
                this.closeAfterResponse < this.currentResponseNum &&
                  (this.onClose(), (this.onClose = null))
            }),
            (t.prototype.handleResponse = function(t, e) {
              var n = this
              this.pendingResponses[t] = e
              var r = function() {
                  var t = i.pendingResponses[i.currentResponseNum]
                  delete i.pendingResponses[i.currentResponseNum]
                  for (
                    var e = function(e) {
                        t[e] &&
                          V(function() {
                            n.onMessage_(t[e])
                          })
                      },
                      r = 0;
                    r < t.length;
                    ++r
                  )
                    e(r)
                  if (i.currentResponseNum === i.closeAfterResponse)
                    return (
                      i.onClose && (i.onClose(), (i.onClose = null)), 'break'
                    )
                  i.currentResponseNum++
                },
                i = this
              while (this.pendingResponses[this.currentResponseNum]) {
                var o = r()
                if ('break' === o) break
              }
            }),
            t
          )
        })(),
        vn = 'start',
        yn = 'close',
        _n = 'pLPCommand',
        gn = 'pRTLPCB',
        mn = 'id',
        bn = 'pw',
        wn = 'ser',
        Cn = 'cb',
        En = 'seg',
        Sn = 'ts',
        Tn = 'd',
        xn = 'disconn',
        On = 'dframe',
        An = 1870,
        Pn = 30,
        In = An - Pn,
        Nn = 25e3,
        kn = 3e4,
        Rn = (function() {
          function t(t, e, n, r) {
            ;(this.connId = t),
              (this.repoInfo = e),
              (this.transportSessionId = n),
              (this.lastSessionId = r),
              (this.bytesSent = 0),
              (this.bytesReceived = 0),
              (this.everConnected_ = !1),
              (this.log_ = w(t)),
              (this.stats_ = nn.getCollection(e)),
              (this.urlFn = function(t) {
                return e.connectionURL(et, t)
              })
          }
          return (
            (t.prototype.open = function(t, e) {
              var n = this
              ;(this.curSegmentNum = 0),
                (this.onDisconnect_ = e),
                (this.myPacketOrderer = new dn(t)),
                (this.isClosed_ = !1),
                (this.connectTimeoutTimer_ = setTimeout(function() {
                  n.log_('Timed out trying to connect.'),
                    n.onClosed_(),
                    (n.connectTimeoutTimer_ = null)
                }, Math.floor(kn))),
                O(function() {
                  if (!n.isClosed_) {
                    n.scriptTagHolder = new Dn(
                      function() {
                        for (var t = [], e = 0; e < arguments.length; e++)
                          t[e] = arguments[e]
                        var r = t[0],
                          i = t[1],
                          o = t[2]
                        if ((n.incrementIncomingBytes_(t), n.scriptTagHolder))
                          if (
                            (n.connectTimeoutTimer_ &&
                              (clearTimeout(n.connectTimeoutTimer_),
                              (n.connectTimeoutTimer_ = null)),
                            (n.everConnected_ = !0),
                            r == vn)
                          )
                            (n.id = i), (n.password = o)
                          else {
                            if (r !== yn)
                              throw new Error(
                                'Unrecognized command received: ' + r
                              )
                            i
                              ? ((n.scriptTagHolder.sendNewPolls = !1),
                                n.myPacketOrderer.closeAfter(i, function() {
                                  n.onClosed_()
                                }))
                              : n.onClosed_()
                          }
                      },
                      function() {
                        for (var t = [], e = 0; e < arguments.length; e++)
                          t[e] = arguments[e]
                        var r = t[0],
                          i = t[1]
                        n.incrementIncomingBytes_(t),
                          n.myPacketOrderer.handleResponse(r, i)
                      },
                      function() {
                        n.onClosed_()
                      },
                      n.urlFn
                    )
                    var t = {}
                    ;(t[vn] = 't'),
                      (t[wn] = Math.floor(1e8 * Math.random())),
                      n.scriptTagHolder.uniqueCallbackIdentifier &&
                        (t[Cn] = n.scriptTagHolder.uniqueCallbackIdentifier),
                      (t[z] = K),
                      n.transportSessionId && (t[G] = n.transportSessionId),
                      n.lastSessionId && (t[Z] = n.lastSessionId),
                      !i.isNodeSdk() &&
                        'undefined' !== typeof location &&
                        location.href &&
                        -1 !== location.href.indexOf(J) &&
                        (t[Y] = X)
                    var e = n.urlFn(t)
                    n.log_('Connecting via long-poll to ' + e),
                      n.scriptTagHolder.addTag(e, function() {})
                  }
                })
            }),
            (t.prototype.start = function() {
              this.scriptTagHolder.startLongPoll(this.id, this.password),
                this.addDisconnectPingFrame(this.id, this.password)
            }),
            (t.forceAllow = function() {
              t.forceAllow_ = !0
            }),
            (t.forceDisallow = function() {
              t.forceDisallow_ = !0
            }),
            (t.isAvailable = function() {
              return (
                t.forceAllow_ ||
                (!t.forceDisallow_ &&
                  'undefined' !== typeof document &&
                  null != document.createElement &&
                  !M() &&
                  !j() &&
                  !i.isNodeSdk())
              )
            }),
            (t.prototype.markConnectionHealthy = function() {}),
            (t.prototype.shutdown_ = function() {
              ;(this.isClosed_ = !0),
                this.scriptTagHolder &&
                  (this.scriptTagHolder.close(), (this.scriptTagHolder = null)),
                this.myDisconnFrame &&
                  (document.body.removeChild(this.myDisconnFrame),
                  (this.myDisconnFrame = null)),
                this.connectTimeoutTimer_ &&
                  (clearTimeout(this.connectTimeoutTimer_),
                  (this.connectTimeoutTimer_ = null))
            }),
            (t.prototype.onClosed_ = function() {
              this.isClosed_ ||
                (this.log_('Longpoll is closing itself'),
                this.shutdown_(),
                this.onDisconnect_ &&
                  (this.onDisconnect_(this.everConnected_),
                  (this.onDisconnect_ = null)))
            }),
            (t.prototype.close = function() {
              this.isClosed_ ||
                (this.log_('Longpoll is being closed.'), this.shutdown_())
            }),
            (t.prototype.send = function(t) {
              var e = i.stringify(t)
              ;(this.bytesSent += e.length),
                this.stats_.incrementCounter('bytes_sent', e.length)
              for (
                var n = i.base64Encode(e), r = D(n, In), o = 0;
                o < r.length;
                o++
              )
                this.scriptTagHolder.enqueueSegment(
                  this.curSegmentNum,
                  r.length,
                  r[o]
                ),
                  this.curSegmentNum++
            }),
            (t.prototype.addDisconnectPingFrame = function(t, e) {
              if (!i.isNodeSdk()) {
                this.myDisconnFrame = document.createElement('iframe')
                var n = {}
                ;(n[On] = 't'),
                  (n[mn] = t),
                  (n[bn] = e),
                  (this.myDisconnFrame.src = this.urlFn(n)),
                  (this.myDisconnFrame.style.display = 'none'),
                  document.body.appendChild(this.myDisconnFrame)
              }
            }),
            (t.prototype.incrementIncomingBytes_ = function(t) {
              var e = i.stringify(t).length
              ;(this.bytesReceived += e),
                this.stats_.incrementCounter('bytes_received', e)
            }),
            t
          )
        })(),
        Dn = (function() {
          function t(e, n, r, o) {
            if (
              ((this.onDisconnect = r),
              (this.urlFn = o),
              (this.outstandingRequests = new we()),
              (this.pendingSegs = []),
              (this.currentSerial = Math.floor(1e8 * Math.random())),
              (this.sendNewPolls = !0),
              i.isNodeSdk())
            )
              (this.commandCB = e), (this.onMessageCB = n)
            else {
              ;(this.uniqueCallbackIdentifier = d()),
                (window[_n + this.uniqueCallbackIdentifier] = e),
                (window[gn + this.uniqueCallbackIdentifier] = n),
                (this.myIFrame = t.createIFrame_())
              var a = ''
              if (
                this.myIFrame.src &&
                'javascript:' ===
                  this.myIFrame.src.substr(0, 'javascript:'.length)
              ) {
                var s = document.domain
                a = '<script>document.domain="' + s + '";</script>'
              }
              var u = '<html><body>' + a + '</body></html>'
              try {
                this.myIFrame.doc.open(),
                  this.myIFrame.doc.write(u),
                  this.myIFrame.doc.close()
              } catch (t) {
                b('frame writing exception'), t.stack && b(t.stack), b(t)
              }
            }
          }
          return (
            (t.createIFrame_ = function() {
              var t = document.createElement('iframe')
              if (((t.style.display = 'none'), !document.body))
                throw 'Document body has not initialized. Wait to initialize Firebase until after the document is ready.'
              document.body.appendChild(t)
              try {
                var e = t.contentWindow.document
                e || b('No IE domain setting required')
              } catch (e) {
                var n = document.domain
                t.src =
                  "javascript:void((function(){document.open();document.domain='" +
                  n +
                  "';document.close();})())"
              }
              return (
                t.contentDocument
                  ? (t.doc = t.contentDocument)
                  : t.contentWindow
                    ? (t.doc = t.contentWindow.document)
                    : t.document && (t.doc = t.document),
                t
              )
            }),
            (t.prototype.close = function() {
              var e = this
              if (
                ((this.alive = !1),
                this.myIFrame &&
                  ((this.myIFrame.doc.body.innerHTML = ''),
                  setTimeout(function() {
                    null !== e.myIFrame &&
                      (document.body.removeChild(e.myIFrame),
                      (e.myIFrame = null))
                  }, Math.floor(0))),
                i.isNodeSdk() && this.myID)
              ) {
                var n = {}
                ;(n[xn] = 't'), (n[mn] = this.myID), (n[bn] = this.myPW)
                var r = this.urlFn(n)
                t.nodeRestRequest(r)
              }
              var o = this.onDisconnect
              o && ((this.onDisconnect = null), o())
            }),
            (t.prototype.startLongPoll = function(t, e) {
              ;(this.myID = t), (this.myPW = e), (this.alive = !0)
              while (this.newRequest_());
            }),
            (t.prototype.newRequest_ = function() {
              if (
                this.alive &&
                this.sendNewPolls &&
                this.outstandingRequests.count() <
                  (this.pendingSegs.length > 0 ? 2 : 1)
              ) {
                this.currentSerial++
                var t = {}
                ;(t[mn] = this.myID),
                  (t[bn] = this.myPW),
                  (t[wn] = this.currentSerial)
                var e = this.urlFn(t),
                  n = '',
                  r = 0
                while (this.pendingSegs.length > 0) {
                  var i = this.pendingSegs[0]
                  if (!(i.d.length + Pn + n.length <= An)) break
                  var o = this.pendingSegs.shift()
                  ;(n =
                    n +
                    '&' +
                    En +
                    r +
                    '=' +
                    o.seg +
                    '&' +
                    Sn +
                    r +
                    '=' +
                    o.ts +
                    '&' +
                    Tn +
                    r +
                    '=' +
                    o.d),
                    r++
                }
                return (e += n), this.addLongPollTag_(e, this.currentSerial), !0
              }
              return !1
            }),
            (t.prototype.enqueueSegment = function(t, e, n) {
              this.pendingSegs.push({ seg: t, ts: e, d: n }),
                this.alive && this.newRequest_()
            }),
            (t.prototype.addLongPollTag_ = function(t, e) {
              var n = this
              this.outstandingRequests.add(e, 1)
              var r = function() {
                  n.outstandingRequests.remove(e), n.newRequest_()
                },
                i = setTimeout(r, Math.floor(Nn)),
                o = function() {
                  clearTimeout(i), r()
                }
              this.addTag(t, o)
            }),
            (t.prototype.addTag = function(t, e) {
              var n = this
              i.isNodeSdk()
                ? this.doNodeLongPoll(t, e)
                : setTimeout(function() {
                    try {
                      if (!n.sendNewPolls) return
                      var r = n.myIFrame.doc.createElement('script')
                      ;(r.type = 'text/javascript'),
                        (r.async = !0),
                        (r.src = t),
                        (r.onload = r.onreadystatechange = function() {
                          var t = r.readyState
                          ;(t && 'loaded' !== t && 'complete' !== t) ||
                            ((r.onload = r.onreadystatechange = null),
                            r.parentNode && r.parentNode.removeChild(r),
                            e())
                        }),
                        (r.onerror = function() {
                          b('Long-poll script failed to load: ' + t),
                            (n.sendNewPolls = !1),
                            n.close()
                        }),
                        n.myIFrame.doc.body.appendChild(r)
                    } catch (t) {}
                  }, Math.floor(1))
            }),
            t
          )
        })(),
        Fn = 16384,
        Ln = 45e3,
        Mn = null
      'undefined' !== typeof MozWebSocket
        ? (Mn = MozWebSocket)
        : 'undefined' !== typeof WebSocket && (Mn = WebSocket)
      var jn = (function() {
          function t(e, n, r, i) {
            ;(this.connId = e),
              (this.keepaliveTimer = null),
              (this.frames = null),
              (this.totalFrames = 0),
              (this.bytesSent = 0),
              (this.bytesReceived = 0),
              (this.log_ = w(this.connId)),
              (this.stats_ = nn.getCollection(n)),
              (this.connURL = t.connectionURL_(n, r, i))
          }
          return (
            (t.connectionURL_ = function(t, e, n) {
              var r = {}
              return (
                (r[z] = K),
                !i.isNodeSdk() &&
                  'undefined' !== typeof location &&
                  location.href &&
                  -1 !== location.href.indexOf(J) &&
                  (r[Y] = X),
                e && (r[G] = e),
                n && (r[Z] = n),
                t.connectionURL(tt, r)
              )
            }),
            (t.prototype.open = function(t, e) {
              var n = this
              ;(this.onDisconnect = e),
                (this.onMessage = t),
                this.log_('Websocket connecting to ' + this.connURL),
                (this.everConnected_ = !1),
                h.set('previous_websocket_failure', !0)
              try {
                if (i.isNodeSdk()) {
                  var r = i.CONSTANTS.NODE_ADMIN ? 'AdminNode' : 'Node',
                    o = {
                      headers: {
                        'User-Agent':
                          'Firebase/' +
                          K +
                          '/' +
                          s.SDK_VERSION +
                          '/' +
                          process.platform +
                          '/' +
                          r
                      }
                    },
                    a = Object({ NODE_ENV: 'production', BASE_URL: '/' }),
                    u =
                      0 == this.connURL.indexOf('wss://')
                        ? a['HTTPS_PROXY'] || a['https_proxy']
                        : a['HTTP_PROXY'] || a['http_proxy']
                  u && (o['proxy'] = { origin: u }),
                    (this.mySock = new Mn(this.connURL, [], o))
                } else this.mySock = new Mn(this.connURL)
              } catch (t) {
                this.log_('Error instantiating WebSocket.')
                var c = t.message || t.data
                return c && this.log_(c), void this.onClosed_()
              }
              ;(this.mySock.onopen = function() {
                n.log_('Websocket connected.'), (n.everConnected_ = !0)
              }),
                (this.mySock.onclose = function() {
                  n.log_('Websocket connection was disconnected.'),
                    (n.mySock = null),
                    n.onClosed_()
                }),
                (this.mySock.onmessage = function(t) {
                  n.handleIncomingFrame(t)
                }),
                (this.mySock.onerror = function(t) {
                  n.log_('WebSocket error.  Closing connection.')
                  var e = t.message || t.data
                  e && n.log_(e), n.onClosed_()
                })
            }),
            (t.prototype.start = function() {}),
            (t.forceDisallow = function() {
              t.forceDisallow_ = !0
            }),
            (t.isAvailable = function() {
              var e = !1
              if ('undefined' !== typeof navigator && navigator.userAgent) {
                var n = /Android ([0-9]{0,}\.[0-9]{0,})/,
                  r = navigator.userAgent.match(n)
                r && r.length > 1 && parseFloat(r[1]) < 4.4 && (e = !0)
              }
              return !e && null !== Mn && !t.forceDisallow_
            }),
            (t.previouslyFailed = function() {
              return (
                h.isInMemoryStorage ||
                !0 === h.get('previous_websocket_failure')
              )
            }),
            (t.prototype.markConnectionHealthy = function() {
              h.remove('previous_websocket_failure')
            }),
            (t.prototype.appendFrame_ = function(t) {
              if (
                (this.frames.push(t), this.frames.length == this.totalFrames)
              ) {
                var e = this.frames.join('')
                this.frames = null
                var n = i.jsonEval(e)
                this.onMessage(n)
              }
            }),
            (t.prototype.handleNewFrameCount_ = function(t) {
              ;(this.totalFrames = t), (this.frames = [])
            }),
            (t.prototype.extractFrameCount_ = function(t) {
              if (
                (i.assert(
                  null === this.frames,
                  'We already have a frame buffer'
                ),
                t.length <= 6)
              ) {
                var e = Number(t)
                if (!isNaN(e)) return this.handleNewFrameCount_(e), null
              }
              return this.handleNewFrameCount_(1), t
            }),
            (t.prototype.handleIncomingFrame = function(t) {
              if (null !== this.mySock) {
                var e = t['data']
                if (
                  ((this.bytesReceived += e.length),
                  this.stats_.incrementCounter('bytes_received', e.length),
                  this.resetKeepAlive(),
                  null !== this.frames)
                )
                  this.appendFrame_(e)
                else {
                  var n = this.extractFrameCount_(e)
                  null !== n && this.appendFrame_(n)
                }
              }
            }),
            (t.prototype.send = function(t) {
              this.resetKeepAlive()
              var e = i.stringify(t)
              ;(this.bytesSent += e.length),
                this.stats_.incrementCounter('bytes_sent', e.length)
              var n = D(e, Fn)
              n.length > 1 && this.sendString_(String(n.length))
              for (var r = 0; r < n.length; r++) this.sendString_(n[r])
            }),
            (t.prototype.shutdown_ = function() {
              ;(this.isClosed_ = !0),
                this.keepaliveTimer &&
                  (clearInterval(this.keepaliveTimer),
                  (this.keepaliveTimer = null)),
                this.mySock && (this.mySock.close(), (this.mySock = null))
            }),
            (t.prototype.onClosed_ = function() {
              this.isClosed_ ||
                (this.log_('WebSocket is closing itself'),
                this.shutdown_(),
                this.onDisconnect &&
                  (this.onDisconnect(this.everConnected_),
                  (this.onDisconnect = null)))
            }),
            (t.prototype.close = function() {
              this.isClosed_ ||
                (this.log_('WebSocket is being closed'), this.shutdown_())
            }),
            (t.prototype.resetKeepAlive = function() {
              var t = this
              clearInterval(this.keepaliveTimer),
                (this.keepaliveTimer = setInterval(function() {
                  t.mySock && t.sendString_('0'), t.resetKeepAlive()
                }, Math.floor(Ln)))
            }),
            (t.prototype.sendString_ = function(t) {
              try {
                this.mySock.send(t)
              } catch (t) {
                this.log_(
                  'Exception thrown from WebSocket.send():',
                  t.message || t.data,
                  'Closing connection.'
                ),
                  setTimeout(this.onClosed_.bind(this), 0)
              }
            }),
            (t.responsesRequiredToBeHealthy = 2),
            (t.healthyTimeout = 3e4),
            t
          )
        })(),
        Un = (function() {
          function t(t) {
            this.initTransports_(t)
          }
          return (
            Object.defineProperty(t, 'ALL_TRANSPORTS', {
              get: function() {
                return [Rn, jn]
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.initTransports_ = function(e) {
              var n = jn && jn['isAvailable'](),
                r = n && !jn.previouslyFailed()
              if (
                (e.webSocketOnly &&
                  (n ||
                    S(
                      "wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
                    ),
                  (r = !0)),
                r)
              )
                this.transports_ = [jn]
              else {
                var i = (this.transports_ = [])
                F(t.ALL_TRANSPORTS, function(t, e) {
                  e && e['isAvailable']() && i.push(e)
                })
              }
            }),
            (t.prototype.initialTransport = function() {
              if (this.transports_.length > 0) return this.transports_[0]
              throw new Error('No transports available')
            }),
            (t.prototype.upgradeTransport = function() {
              return this.transports_.length > 1 ? this.transports_[1] : null
            }),
            t
          )
        })(),
        Wn = 6e4,
        qn = 5e3,
        Vn = 10240,
        $n = 102400,
        Qn = 't',
        Bn = 'd',
        Hn = 's',
        Kn = 'r',
        zn = 'e',
        Gn = 'o',
        Yn = 'a',
        Xn = 'n',
        Jn = 'p',
        Zn = 'h',
        tr = (function() {
          function t(t, e, n, r, i, o, a) {
            ;(this.id = t),
              (this.repoInfo_ = e),
              (this.onMessage_ = n),
              (this.onReady_ = r),
              (this.onDisconnect_ = i),
              (this.onKill_ = o),
              (this.lastSessionId = a),
              (this.connectionCount = 0),
              (this.pendingDataMessages = []),
              (this.state_ = 0),
              (this.log_ = w('c:' + this.id + ':')),
              (this.transportManager_ = new Un(e)),
              this.log_('Connection created'),
              this.start_()
          }
          return (
            (t.prototype.start_ = function() {
              var t = this,
                e = this.transportManager_.initialTransport()
              ;(this.conn_ = new e(
                this.nextTransportId_(),
                this.repoInfo_,
                void 0,
                this.lastSessionId
              )),
                (this.primaryResponsesRequired_ =
                  e['responsesRequiredToBeHealthy'] || 0)
              var n = this.connReceiver_(this.conn_),
                r = this.disconnReceiver_(this.conn_)
              ;(this.tx_ = this.conn_),
                (this.rx_ = this.conn_),
                (this.secondaryConn_ = null),
                (this.isHealthy_ = !1),
                setTimeout(function() {
                  t.conn_ && t.conn_.open(n, r)
                }, Math.floor(0))
              var i = e['healthyTimeout'] || 0
              i > 0 &&
                (this.healthyTimeout_ = Q(function() {
                  ;(t.healthyTimeout_ = null),
                    t.isHealthy_ ||
                      (t.conn_ && t.conn_.bytesReceived > $n
                        ? (t.log_(
                            'Connection exceeded healthy timeout but has received ' +
                              t.conn_.bytesReceived +
                              ' bytes.  Marking connection healthy.'
                          ),
                          (t.isHealthy_ = !0),
                          t.conn_.markConnectionHealthy())
                        : t.conn_ && t.conn_.bytesSent > Vn
                          ? t.log_(
                              'Connection exceeded healthy timeout but has sent ' +
                                t.conn_.bytesSent +
                                ' bytes.  Leaving connection alive.'
                            )
                          : (t.log_(
                              'Closing unhealthy connection after timeout.'
                            ),
                            t.close()))
                }, Math.floor(i)))
            }),
            (t.prototype.nextTransportId_ = function() {
              return 'c:' + this.id + ':' + this.connectionCount++
            }),
            (t.prototype.disconnReceiver_ = function(t) {
              var e = this
              return function(n) {
                t === e.conn_
                  ? e.onConnectionLost_(n)
                  : t === e.secondaryConn_
                    ? (e.log_('Secondary connection lost.'),
                      e.onSecondaryConnectionLost_())
                    : e.log_('closing an old connection')
              }
            }),
            (t.prototype.connReceiver_ = function(t) {
              var e = this
              return function(n) {
                2 != e.state_ &&
                  (t === e.rx_
                    ? e.onPrimaryMessageReceived_(n)
                    : t === e.secondaryConn_
                      ? e.onSecondaryMessageReceived_(n)
                      : e.log_('message on old connection'))
              }
            }),
            (t.prototype.sendRequest = function(t) {
              var e = { t: 'd', d: t }
              this.sendData_(e)
            }),
            (t.prototype.tryCleanupConnection = function() {
              this.tx_ === this.secondaryConn_ &&
                this.rx_ === this.secondaryConn_ &&
                (this.log_(
                  'cleaning up and promoting a connection: ' +
                    this.secondaryConn_.connId
                ),
                (this.conn_ = this.secondaryConn_),
                (this.secondaryConn_ = null))
            }),
            (t.prototype.onSecondaryControl_ = function(t) {
              if (Qn in t) {
                var e = t[Qn]
                e === Yn
                  ? this.upgradeIfSecondaryHealthy_()
                  : e === Kn
                    ? (this.log_('Got a reset on secondary, closing it'),
                      this.secondaryConn_.close(),
                      (this.tx_ !== this.secondaryConn_ &&
                        this.rx_ !== this.secondaryConn_) ||
                        this.close())
                    : e === Gn &&
                      (this.log_('got pong on secondary.'),
                      this.secondaryResponsesRequired_--,
                      this.upgradeIfSecondaryHealthy_())
              }
            }),
            (t.prototype.onSecondaryMessageReceived_ = function(t) {
              var e = k('t', t),
                n = k('d', t)
              if ('c' == e) this.onSecondaryControl_(n)
              else {
                if ('d' != e) throw new Error('Unknown protocol layer: ' + e)
                this.pendingDataMessages.push(n)
              }
            }),
            (t.prototype.upgradeIfSecondaryHealthy_ = function() {
              this.secondaryResponsesRequired_ <= 0
                ? (this.log_('Secondary connection is healthy.'),
                  (this.isHealthy_ = !0),
                  this.secondaryConn_.markConnectionHealthy(),
                  this.proceedWithUpgrade_())
                : (this.log_('sending ping on secondary.'),
                  this.secondaryConn_.send({ t: 'c', d: { t: Jn, d: {} } }))
            }),
            (t.prototype.proceedWithUpgrade_ = function() {
              this.secondaryConn_.start(),
                this.log_('sending client ack on secondary'),
                this.secondaryConn_.send({ t: 'c', d: { t: Yn, d: {} } }),
                this.log_('Ending transmission on primary'),
                this.conn_.send({ t: 'c', d: { t: Xn, d: {} } }),
                (this.tx_ = this.secondaryConn_),
                this.tryCleanupConnection()
            }),
            (t.prototype.onPrimaryMessageReceived_ = function(t) {
              var e = k('t', t),
                n = k('d', t)
              'c' == e ? this.onControl_(n) : 'd' == e && this.onDataMessage_(n)
            }),
            (t.prototype.onDataMessage_ = function(t) {
              this.onPrimaryResponse_(), this.onMessage_(t)
            }),
            (t.prototype.onPrimaryResponse_ = function() {
              this.isHealthy_ ||
                (this.primaryResponsesRequired_--,
                this.primaryResponsesRequired_ <= 0 &&
                  (this.log_('Primary connection is healthy.'),
                  (this.isHealthy_ = !0),
                  this.conn_.markConnectionHealthy()))
            }),
            (t.prototype.onControl_ = function(t) {
              var e = k(Qn, t)
              if (Bn in t) {
                var n = t[Bn]
                if (e === Zn) this.onHandshake_(n)
                else if (e === Xn) {
                  this.log_('recvd end transmission on primary'),
                    (this.rx_ = this.secondaryConn_)
                  for (var r = 0; r < this.pendingDataMessages.length; ++r)
                    this.onDataMessage_(this.pendingDataMessages[r])
                  ;(this.pendingDataMessages = []), this.tryCleanupConnection()
                } else
                  e === Hn
                    ? this.onConnectionShutdown_(n)
                    : e === Kn
                      ? this.onReset_(n)
                      : e === zn
                        ? C('Server Error: ' + n)
                        : e === Gn
                          ? (this.log_('got pong on primary.'),
                            this.onPrimaryResponse_(),
                            this.sendPingOnPrimaryIfNecessary_())
                          : C('Unknown control packet command: ' + e)
              }
            }),
            (t.prototype.onHandshake_ = function(t) {
              var e = t.ts,
                n = t.v,
                r = t.h
              ;(this.sessionId = t.s),
                this.repoInfo_.updateHost(r),
                0 == this.state_ &&
                  (this.conn_.start(),
                  this.onConnectionEstablished_(this.conn_, e),
                  K !== n && S('Protocol version mismatch detected'),
                  this.tryStartUpgrade_())
            }),
            (t.prototype.tryStartUpgrade_ = function() {
              var t = this.transportManager_.upgradeTransport()
              t && this.startUpgrade_(t)
            }),
            (t.prototype.startUpgrade_ = function(t) {
              var e = this
              ;(this.secondaryConn_ = new t(
                this.nextTransportId_(),
                this.repoInfo_,
                this.sessionId
              )),
                (this.secondaryResponsesRequired_ =
                  t['responsesRequiredToBeHealthy'] || 0)
              var n = this.connReceiver_(this.secondaryConn_),
                r = this.disconnReceiver_(this.secondaryConn_)
              this.secondaryConn_.open(n, r),
                Q(function() {
                  e.secondaryConn_ &&
                    (e.log_('Timed out trying to upgrade.'),
                    e.secondaryConn_.close())
                }, Math.floor(Wn))
            }),
            (t.prototype.onReset_ = function(t) {
              this.log_('Reset packet received.  New host: ' + t),
                this.repoInfo_.updateHost(t),
                1 === this.state_
                  ? this.close()
                  : (this.closeConnections_(), this.start_())
            }),
            (t.prototype.onConnectionEstablished_ = function(t, e) {
              var n = this
              this.log_('Realtime connection established.'),
                (this.conn_ = t),
                (this.state_ = 1),
                this.onReady_ &&
                  (this.onReady_(e, this.sessionId), (this.onReady_ = null)),
                0 === this.primaryResponsesRequired_
                  ? (this.log_('Primary connection is healthy.'),
                    (this.isHealthy_ = !0))
                  : Q(function() {
                      n.sendPingOnPrimaryIfNecessary_()
                    }, Math.floor(qn))
            }),
            (t.prototype.sendPingOnPrimaryIfNecessary_ = function() {
              this.isHealthy_ ||
                1 !== this.state_ ||
                (this.log_('sending ping on primary.'),
                this.sendData_({ t: 'c', d: { t: Jn, d: {} } }))
            }),
            (t.prototype.onSecondaryConnectionLost_ = function() {
              var t = this.secondaryConn_
              ;(this.secondaryConn_ = null),
                (this.tx_ !== t && this.rx_ !== t) || this.close()
            }),
            (t.prototype.onConnectionLost_ = function(t) {
              ;(this.conn_ = null),
                t || 0 !== this.state_
                  ? 1 === this.state_ && this.log_('Realtime connection lost.')
                  : (this.log_('Realtime connection failed.'),
                    this.repoInfo_.isCacheableHost() &&
                      (h.remove('host:' + this.repoInfo_.host),
                      (this.repoInfo_.internalHost = this.repoInfo_.host))),
                this.close()
            }),
            (t.prototype.onConnectionShutdown_ = function(t) {
              this.log_(
                'Connection shutdown command received. Shutting down...'
              ),
                this.onKill_ && (this.onKill_(t), (this.onKill_ = null)),
                (this.onDisconnect_ = null),
                this.close()
            }),
            (t.prototype.sendData_ = function(t) {
              if (1 !== this.state_) throw 'Connection is not connected'
              this.tx_.send(t)
            }),
            (t.prototype.close = function() {
              2 !== this.state_ &&
                (this.log_('Closing realtime connection.'),
                (this.state_ = 2),
                this.closeConnections_(),
                this.onDisconnect_ &&
                  (this.onDisconnect_(), (this.onDisconnect_ = null)))
            }),
            (t.prototype.closeConnections_ = function() {
              this.log_('Shutting down all connections'),
                this.conn_ && (this.conn_.close(), (this.conn_ = null)),
                this.secondaryConn_ &&
                  (this.secondaryConn_.close(), (this.secondaryConn_ = null)),
                this.healthyTimeout_ &&
                  (clearTimeout(this.healthyTimeout_),
                  (this.healthyTimeout_ = null))
            }),
            t
          )
        })(),
        er = (function() {
          function t() {}
          return (
            (t.prototype.put = function(t, e, n, r) {}),
            (t.prototype.merge = function(t, e, n, r) {}),
            (t.prototype.refreshAuthToken = function(t) {}),
            (t.prototype.onDisconnectPut = function(t, e, n) {}),
            (t.prototype.onDisconnectMerge = function(t, e, n) {}),
            (t.prototype.onDisconnectCancel = function(t, e) {}),
            (t.prototype.reportStats = function(t) {}),
            t
          )
        })(),
        nr = 1e3,
        rr = 3e5,
        ir = 3e4,
        or = 1.3,
        ar = 3e4,
        sr = 'server_kill',
        ur = 3,
        cr = (function(t) {
          function e(n, r, o, a, s, u) {
            var c = t.call(this) || this
            if (
              ((c.repoInfo_ = n),
              (c.onDataUpdate_ = r),
              (c.onConnectStatus_ = o),
              (c.onServerInfoUpdate_ = a),
              (c.authTokenProvider_ = s),
              (c.authOverride_ = u),
              (c.id = e.nextPersistentConnectionId_++),
              (c.log_ = w('p:' + c.id + ':')),
              (c.interruptReasons_ = {}),
              (c.listens_ = {}),
              (c.outstandingPuts_ = []),
              (c.outstandingPutCount_ = 0),
              (c.onDisconnectRequestQueue_ = []),
              (c.connected_ = !1),
              (c.reconnectDelay_ = nr),
              (c.maxReconnectDelay_ = rr),
              (c.securityDebugCallback_ = null),
              (c.lastSessionId = null),
              (c.establishConnectionTimer_ = null),
              (c.visible_ = !1),
              (c.requestCBHash_ = {}),
              (c.requestNumber_ = 0),
              (c.realtime_ = null),
              (c.authToken_ = null),
              (c.forceTokenRefresh_ = !1),
              (c.invalidAuthTokenCount_ = 0),
              (c.firstConnection_ = !0),
              (c.lastConnectionAttemptTime_ = null),
              (c.lastConnectionEstablishedTime_ = null),
              u && !i.isNodeSdk())
            )
              throw new Error(
                'Auth override specified in options, but not supported on non Node.js platforms'
              )
            return (
              c.scheduleConnect_(0),
              pn.getInstance().on('visible', c.onVisible_, c),
              -1 === n.host.indexOf('fblocal') &&
                fn.getInstance().on('online', c.onOnline_, c),
              c
            )
          }
          return (
            a.__extends(e, t),
            (e.prototype.sendRequest = function(t, e, n) {
              var r = ++this.requestNumber_,
                o = { r: r, a: t, b: e }
              this.log_(i.stringify(o)),
                i.assert(
                  this.connected_,
                  "sendRequest call when we're not connected not allowed."
                ),
                this.realtime_.sendRequest(o),
                n && (this.requestCBHash_[r] = n)
            }),
            (e.prototype.listen = function(t, e, n, r) {
              var o = t.queryIdentifier(),
                a = t.path.toString()
              this.log_('Listen called for ' + a + ' ' + o),
                (this.listens_[a] = this.listens_[a] || {}),
                i.assert(
                  t.getQueryParams().isDefault() ||
                    !t.getQueryParams().loadsAllData(),
                  'listen() called for non-default but complete query'
                ),
                i.assert(
                  !this.listens_[a][o],
                  'listen() called twice for same path/queryId.'
                )
              var s = { onComplete: r, hashFn: e, query: t, tag: n }
              ;(this.listens_[a][o] = s), this.connected_ && this.sendListen_(s)
            }),
            (e.prototype.sendListen_ = function(t) {
              var n = this,
                r = t.query,
                i = r.path.toString(),
                o = r.queryIdentifier()
              this.log_('Listen on ' + i + ' for ' + o)
              var a = { p: i },
                s = 'q'
              t.tag && ((a['q'] = r.queryObject()), (a['t'] = t.tag)),
                (a['h'] = t.hashFn()),
                this.sendRequest(s, a, function(a) {
                  var s = a['d'],
                    u = a['s']
                  e.warnOnListenWarnings_(s, r)
                  var c = n.listens_[i] && n.listens_[i][o]
                  c === t &&
                    (n.log_('listen response', a),
                    'ok' !== u && n.removeListen_(i, o),
                    t.onComplete && t.onComplete(u, s))
                })
            }),
            (e.warnOnListenWarnings_ = function(t, e) {
              if (t && 'object' === typeof t && i.contains(t, 'w')) {
                var n = i.safeGet(t, 'w')
                if (Array.isArray(n) && ~n.indexOf('no_index')) {
                  var r =
                      '".indexOn": "' +
                      e
                        .getQueryParams()
                        .getIndex()
                        .toString() +
                      '"',
                    o = e.path.toString()
                  S(
                    'Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ' +
                      r +
                      ' at ' +
                      o +
                      ' to your security rules for better performance.'
                  )
                }
              }
            }),
            (e.prototype.refreshAuthToken = function(t) {
              ;(this.authToken_ = t),
                this.log_('Auth token refreshed'),
                this.authToken_
                  ? this.tryAuth()
                  : this.connected_ &&
                    this.sendRequest('unauth', {}, function() {}),
                this.reduceReconnectDelayIfAdminCredential_(t)
            }),
            (e.prototype.reduceReconnectDelayIfAdminCredential_ = function(t) {
              var e = t && 40 === t.length
              ;(e || i.isAdmin(t)) &&
                (this.log_(
                  'Admin auth credential detected.  Reducing max reconnect time.'
                ),
                (this.maxReconnectDelay_ = ir))
            }),
            (e.prototype.tryAuth = function() {
              var t = this
              if (this.connected_ && this.authToken_) {
                var e = this.authToken_,
                  n = i.isValidFormat(e) ? 'auth' : 'gauth',
                  r = { cred: e }
                null === this.authOverride_
                  ? (r['noauth'] = !0)
                  : 'object' === typeof this.authOverride_ &&
                    (r['authvar'] = this.authOverride_),
                  this.sendRequest(n, r, function(n) {
                    var r = n['s'],
                      i = n['d'] || 'error'
                    t.authToken_ === e &&
                      ('ok' === r
                        ? (t.invalidAuthTokenCount_ = 0)
                        : t.onAuthRevoked_(r, i))
                  })
              }
            }),
            (e.prototype.unlisten = function(t, e) {
              var n = t.path.toString(),
                r = t.queryIdentifier()
              this.log_('Unlisten called for ' + n + ' ' + r),
                i.assert(
                  t.getQueryParams().isDefault() ||
                    !t.getQueryParams().loadsAllData(),
                  'unlisten() called for non-default but complete query'
                )
              var o = this.removeListen_(n, r)
              o &&
                this.connected_ &&
                this.sendUnlisten_(n, r, t.queryObject(), e)
            }),
            (e.prototype.sendUnlisten_ = function(t, e, n, r) {
              this.log_('Unlisten on ' + t + ' for ' + e)
              var i = { p: t },
                o = 'n'
              r && ((i['q'] = n), (i['t'] = r)), this.sendRequest(o, i)
            }),
            (e.prototype.onDisconnectPut = function(t, e, n) {
              this.connected_
                ? this.sendOnDisconnect_('o', t, e, n)
                : this.onDisconnectRequestQueue_.push({
                    pathString: t,
                    action: 'o',
                    data: e,
                    onComplete: n
                  })
            }),
            (e.prototype.onDisconnectMerge = function(t, e, n) {
              this.connected_
                ? this.sendOnDisconnect_('om', t, e, n)
                : this.onDisconnectRequestQueue_.push({
                    pathString: t,
                    action: 'om',
                    data: e,
                    onComplete: n
                  })
            }),
            (e.prototype.onDisconnectCancel = function(t, e) {
              this.connected_
                ? this.sendOnDisconnect_('oc', t, null, e)
                : this.onDisconnectRequestQueue_.push({
                    pathString: t,
                    action: 'oc',
                    data: null,
                    onComplete: e
                  })
            }),
            (e.prototype.sendOnDisconnect_ = function(t, e, n, r) {
              var i = { p: e, d: n }
              this.log_('onDisconnect ' + t, i),
                this.sendRequest(t, i, function(t) {
                  r &&
                    setTimeout(function() {
                      r(t['s'], t['d'])
                    }, Math.floor(0))
                })
            }),
            (e.prototype.put = function(t, e, n, r) {
              this.putInternal('p', t, e, n, r)
            }),
            (e.prototype.merge = function(t, e, n, r) {
              this.putInternal('m', t, e, n, r)
            }),
            (e.prototype.putInternal = function(t, e, n, r, i) {
              var o = { p: e, d: n }
              void 0 !== i && (o['h'] = i),
                this.outstandingPuts_.push({
                  action: t,
                  request: o,
                  onComplete: r
                }),
                this.outstandingPutCount_++
              var a = this.outstandingPuts_.length - 1
              this.connected_
                ? this.sendPut_(a)
                : this.log_('Buffering put: ' + e)
            }),
            (e.prototype.sendPut_ = function(t) {
              var e = this,
                n = this.outstandingPuts_[t].action,
                r = this.outstandingPuts_[t].request,
                i = this.outstandingPuts_[t].onComplete
              ;(this.outstandingPuts_[t].queued = this.connected_),
                this.sendRequest(n, r, function(r) {
                  e.log_(n + ' response', r),
                    delete e.outstandingPuts_[t],
                    e.outstandingPutCount_--,
                    0 === e.outstandingPutCount_ && (e.outstandingPuts_ = []),
                    i && i(r['s'], r['d'])
                })
            }),
            (e.prototype.reportStats = function(t) {
              var e = this
              if (this.connected_) {
                var n = { c: t }
                this.log_('reportStats', n),
                  this.sendRequest('s', n, function(t) {
                    var n = t['s']
                    if ('ok' !== n) {
                      var r = t['d']
                      e.log_('reportStats', 'Error sending stats: ' + r)
                    }
                  })
              }
            }),
            (e.prototype.onDataMessage_ = function(t) {
              if ('r' in t) {
                this.log_('from server: ' + i.stringify(t))
                var e = t['r'],
                  n = this.requestCBHash_[e]
                n && (delete this.requestCBHash_[e], n(t['b']))
              } else {
                if ('error' in t)
                  throw 'A server-side error has occurred: ' + t['error']
                'a' in t && this.onDataPush_(t['a'], t['b'])
              }
            }),
            (e.prototype.onDataPush_ = function(t, e) {
              this.log_('handleServerMessage', t, e),
                'd' === t
                  ? this.onDataUpdate_(e['p'], e['d'], !1, e['t'])
                  : 'm' === t
                    ? this.onDataUpdate_(e['p'], e['d'], !0, e['t'])
                    : 'c' === t
                      ? this.onListenRevoked_(e['p'], e['q'])
                      : 'ac' === t
                        ? this.onAuthRevoked_(e['s'], e['d'])
                        : 'sd' === t
                          ? this.onSecurityDebugPacket_(e)
                          : C(
                              'Unrecognized action received from server: ' +
                                i.stringify(t) +
                                '\nAre you using the latest client?'
                            )
            }),
            (e.prototype.onReady_ = function(t, e) {
              this.log_('connection ready'),
                (this.connected_ = !0),
                (this.lastConnectionEstablishedTime_ = new Date().getTime()),
                this.handleTimestamp_(t),
                (this.lastSessionId = e),
                this.firstConnection_ && this.sendConnectStats_(),
                this.restoreState_(),
                (this.firstConnection_ = !1),
                this.onConnectStatus_(!0)
            }),
            (e.prototype.scheduleConnect_ = function(t) {
              var e = this
              i.assert(
                !this.realtime_,
                "Scheduling a connect when we're already connected/ing?"
              ),
                this.establishConnectionTimer_ &&
                  clearTimeout(this.establishConnectionTimer_),
                (this.establishConnectionTimer_ = setTimeout(function() {
                  ;(e.establishConnectionTimer_ = null),
                    e.establishConnection_()
                }, Math.floor(t)))
            }),
            (e.prototype.onVisible_ = function(t) {
              t &&
                !this.visible_ &&
                this.reconnectDelay_ === this.maxReconnectDelay_ &&
                (this.log_('Window became visible.  Reducing delay.'),
                (this.reconnectDelay_ = nr),
                this.realtime_ || this.scheduleConnect_(0)),
                (this.visible_ = t)
            }),
            (e.prototype.onOnline_ = function(t) {
              t
                ? (this.log_('Browser went online.'),
                  (this.reconnectDelay_ = nr),
                  this.realtime_ || this.scheduleConnect_(0))
                : (this.log_('Browser went offline.  Killing connection.'),
                  this.realtime_ && this.realtime_.close())
            }),
            (e.prototype.onRealtimeDisconnect_ = function() {
              if (
                (this.log_('data client disconnected'),
                (this.connected_ = !1),
                (this.realtime_ = null),
                this.cancelSentTransactions_(),
                (this.requestCBHash_ = {}),
                this.shouldReconnect_())
              ) {
                if (this.visible_) {
                  if (this.lastConnectionEstablishedTime_) {
                    var t =
                      new Date().getTime() - this.lastConnectionEstablishedTime_
                    t > ar && (this.reconnectDelay_ = nr),
                      (this.lastConnectionEstablishedTime_ = null)
                  }
                } else
                  this.log_("Window isn't visible.  Delaying reconnect."),
                    (this.reconnectDelay_ = this.maxReconnectDelay_),
                    (this.lastConnectionAttemptTime_ = new Date().getTime())
                var e = new Date().getTime() - this.lastConnectionAttemptTime_,
                  n = Math.max(0, this.reconnectDelay_ - e)
                ;(n = Math.random() * n),
                  this.log_('Trying to reconnect in ' + n + 'ms'),
                  this.scheduleConnect_(n),
                  (this.reconnectDelay_ = Math.min(
                    this.maxReconnectDelay_,
                    this.reconnectDelay_ * or
                  ))
              }
              this.onConnectStatus_(!1)
            }),
            (e.prototype.establishConnection_ = function() {
              if (this.shouldReconnect_()) {
                this.log_('Making a connection attempt'),
                  (this.lastConnectionAttemptTime_ = new Date().getTime()),
                  (this.lastConnectionEstablishedTime_ = null)
                var t = this.onDataMessage_.bind(this),
                  n = this.onReady_.bind(this),
                  r = this.onRealtimeDisconnect_.bind(this),
                  o = this.id + ':' + e.nextConnectionId_++,
                  a = this,
                  s = this.lastSessionId,
                  u = !1,
                  c = null,
                  l = function() {
                    c ? c.close() : ((u = !0), r())
                  },
                  h = function(t) {
                    i.assert(
                      c,
                      "sendRequest call when we're not connected not allowed."
                    ),
                      c.sendRequest(t)
                  }
                this.realtime_ = { close: l, sendRequest: h }
                var p = this.forceTokenRefresh_
                ;(this.forceTokenRefresh_ = !1),
                  this.authTokenProvider_
                    .getToken(p)
                    .then(function(e) {
                      u
                        ? b('getToken() completed but was canceled')
                        : (b('getToken() completed. Creating connection.'),
                          (a.authToken_ = e && e.accessToken),
                          (c = new tr(
                            o,
                            a.repoInfo_,
                            t,
                            n,
                            r,
                            function(t) {
                              S(t + ' (' + a.repoInfo_.toString() + ')'),
                                a.interrupt(sr)
                            },
                            s
                          )))
                    })
                    .then(null, function(t) {
                      a.log_('Failed to get token: ' + t),
                        u || (i.CONSTANTS.NODE_ADMIN && S(t), l())
                    })
              }
            }),
            (e.prototype.interrupt = function(t) {
              b('Interrupting connection for reason: ' + t),
                (this.interruptReasons_[t] = !0),
                this.realtime_
                  ? this.realtime_.close()
                  : (this.establishConnectionTimer_ &&
                      (clearTimeout(this.establishConnectionTimer_),
                      (this.establishConnectionTimer_ = null)),
                    this.connected_ && this.onRealtimeDisconnect_())
            }),
            (e.prototype.resume = function(t) {
              b('Resuming connection for reason: ' + t),
                delete this.interruptReasons_[t],
                i.isEmpty(this.interruptReasons_) &&
                  ((this.reconnectDelay_ = nr),
                  this.realtime_ || this.scheduleConnect_(0))
            }),
            (e.prototype.handleTimestamp_ = function(t) {
              var e = t - new Date().getTime()
              this.onServerInfoUpdate_({ serverTimeOffset: e })
            }),
            (e.prototype.cancelSentTransactions_ = function() {
              for (var t = 0; t < this.outstandingPuts_.length; t++) {
                var e = this.outstandingPuts_[t]
                e &&
                  'h' in e.request &&
                  e.queued &&
                  (e.onComplete && e.onComplete('disconnect'),
                  delete this.outstandingPuts_[t],
                  this.outstandingPutCount_--)
              }
              0 === this.outstandingPutCount_ && (this.outstandingPuts_ = [])
            }),
            (e.prototype.onListenRevoked_ = function(t, e) {
              var n
              n = e
                ? e
                    .map(function(t) {
                      return R(t)
                    })
                    .join('$')
                : 'default'
              var r = this.removeListen_(t, n)
              r && r.onComplete && r.onComplete('permission_denied')
            }),
            (e.prototype.removeListen_ = function(t, e) {
              var n,
                r = new B(t).toString()
              return (
                void 0 !== this.listens_[r]
                  ? ((n = this.listens_[r][e]),
                    delete this.listens_[r][e],
                    0 === i.getCount(this.listens_[r]) &&
                      delete this.listens_[r])
                  : (n = void 0),
                n
              )
            }),
            (e.prototype.onAuthRevoked_ = function(t, e) {
              b('Auth token revoked: ' + t + '/' + e),
                (this.authToken_ = null),
                (this.forceTokenRefresh_ = !0),
                this.realtime_.close(),
                ('invalid_token' !== t && 'permission_denied' !== t) ||
                  (this.invalidAuthTokenCount_++,
                  this.invalidAuthTokenCount_ >= ur &&
                    ((this.reconnectDelay_ = ir),
                    this.authTokenProvider_.notifyForInvalidToken()))
            }),
            (e.prototype.onSecurityDebugPacket_ = function(t) {
              this.securityDebugCallback_
                ? this.securityDebugCallback_(t)
                : 'msg' in t &&
                  console.log(
                    'FIREBASE: ' + t['msg'].replace('\n', '\nFIREBASE: ')
                  )
            }),
            (e.prototype.restoreState_ = function() {
              var t = this
              this.tryAuth(),
                i.forEach(this.listens_, function(e, n) {
                  i.forEach(n, function(e, n) {
                    t.sendListen_(n)
                  })
                })
              for (var e = 0; e < this.outstandingPuts_.length; e++)
                this.outstandingPuts_[e] && this.sendPut_(e)
              while (this.onDisconnectRequestQueue_.length) {
                var n = this.onDisconnectRequestQueue_.shift()
                this.sendOnDisconnect_(
                  n.action,
                  n.pathString,
                  n.data,
                  n.onComplete
                )
              }
            }),
            (e.prototype.sendConnectStats_ = function() {
              var t = {},
                e = 'js'
              i.CONSTANTS.NODE_ADMIN
                ? (e = 'admin_node')
                : i.CONSTANTS.NODE_CLIENT && (e = 'node'),
                (t['sdk.' + e + '.' + s.SDK_VERSION.replace(/\./g, '-')] = 1),
                i.isMobileCordova()
                  ? (t['framework.cordova'] = 1)
                  : i.isReactNative() && (t['framework.reactnative'] = 1),
                this.reportStats(t)
            }),
            (e.prototype.shouldReconnect_ = function() {
              var t = fn.getInstance().currentlyOnline()
              return i.isEmpty(this.interruptReasons_) && t
            }),
            (e.nextPersistentConnectionId_ = 0),
            (e.nextConnectionId_ = 0),
            e
          )
        })(er),
        lr = (function(t) {
          function e(e, n, r) {
            var i = t.call(this) || this
            return (
              (i.repoInfo_ = e),
              (i.onDataUpdate_ = n),
              (i.authTokenProvider_ = r),
              (i.log_ = w('p:rest:')),
              (i.listens_ = {}),
              i
            )
          }
          return (
            a.__extends(e, t),
            (e.prototype.reportStats = function(t) {
              throw new Error('Method not implemented.')
            }),
            (e.getListenId_ = function(t, e) {
              return void 0 !== e
                ? 'tag$' + e
                : (i.assert(
                    t.getQueryParams().isDefault(),
                    "should have a tag if it's not a default query."
                  ),
                  t.path.toString())
            }),
            (e.prototype.listen = function(t, n, r, o) {
              var a = this,
                s = t.path.toString()
              this.log_('Listen called for ' + s + ' ' + t.queryIdentifier())
              var u = e.getListenId_(t, r),
                c = {}
              this.listens_[u] = c
              var l = t.getQueryParams().toRestQueryStringParameters()
              this.restRequest_(s + '.json', l, function(t, e) {
                var n,
                  l = e
                ;(404 === t && ((l = null), (t = null)),
                null === t && a.onDataUpdate_(s, l, !1, r),
                i.safeGet(a.listens_, u) === c) &&
                  ((n = t
                    ? 401 == t
                      ? 'permission_denied'
                      : 'rest_error:' + t
                    : 'ok'),
                  o(n, null))
              })
            }),
            (e.prototype.unlisten = function(t, n) {
              var r = e.getListenId_(t, n)
              delete this.listens_[r]
            }),
            (e.prototype.refreshAuthToken = function(t) {}),
            (e.prototype.restRequest_ = function(t, e, n) {
              var r = this
              void 0 === e && (e = {}),
                (e['format'] = 'export'),
                this.authTokenProvider_.getToken(!1).then(function(o) {
                  var a = o && o.accessToken
                  a && (e['auth'] = a)
                  var s =
                    (r.repoInfo_.secure ? 'https://' : 'http://') +
                    r.repoInfo_.host +
                    t +
                    '?' +
                    i.querystring(e)
                  r.log_('Sending REST request for ' + s)
                  var u = new XMLHttpRequest()
                  ;(u.onreadystatechange = function() {
                    if (n && 4 === u.readyState) {
                      r.log_(
                        'REST Response for ' + s + ' received. status:',
                        u.status,
                        'response:',
                        u.responseText
                      )
                      var t = null
                      if (u.status >= 200 && u.status < 300) {
                        try {
                          t = i.jsonEval(u.responseText)
                        } catch (t) {
                          S(
                            'Failed to parse JSON response for ' +
                              s +
                              ': ' +
                              u.responseText
                          )
                        }
                        n(null, t)
                      } else
                        401 !== u.status &&
                          404 !== u.status &&
                          S(
                            'Got unsuccessful REST response for ' +
                              s +
                              ' Status: ' +
                              u.status
                          ),
                          n(u.status)
                      n = null
                    }
                  }),
                    u.open('GET', s, !0),
                    u.send()
                })
            }),
            e
          )
        })(er),
        hr = 'repo_interrupt',
        pr = (function() {
          function t(t, e, n) {
            var r = this
            ;(this.repoInfo_ = t),
              (this.app = n),
              (this.dataUpdateCount = 0),
              (this.statsListener_ = null),
              (this.eventQueue_ = new cn()),
              (this.nextWriteId_ = 1),
              (this.interceptServerDataCallback_ = null),
              (this.onDisconnect_ = new Ce()),
              (this.persistentConnection_ = null)
            var o = new tn(n)
            if (((this.stats_ = nn.getCollection(t)), e || $()))
              (this.server_ = new lr(
                this.repoInfo_,
                this.onDataUpdate_.bind(this),
                o
              )),
                setTimeout(this.onConnectStatus_.bind(this, !0), 0)
            else {
              var a = n.options['databaseAuthVariableOverride']
              if ('undefined' !== typeof a && null !== a) {
                if ('object' !== typeof a)
                  throw new Error(
                    'Only objects are supported for option databaseAuthVariableOverride'
                  )
                try {
                  i.stringify(a)
                } catch (t) {
                  throw new Error('Invalid authOverride provided: ' + t)
                }
              }
              ;(this.persistentConnection_ = new cr(
                this.repoInfo_,
                this.onDataUpdate_.bind(this),
                this.onConnectStatus_.bind(this),
                this.onServerInfoUpdate_.bind(this),
                o,
                a
              )),
                (this.server_ = this.persistentConnection_)
            }
            o.addTokenChangeListener(function(t) {
              r.server_.refreshAuthToken(t)
            }),
              (this.statsReporter_ = nn.getOrCreateReporter(t, function() {
                return new un(r.stats_, r.server_)
              })),
              this.transactions_init_(),
              (this.infoData_ = new Ze()),
              (this.infoSyncTree_ = new Je({
                startListening: function(t, e, n, i) {
                  var o = [],
                    a = r.infoData_.getNode(t.path)
                  return (
                    a.isEmpty() ||
                      ((o = r.infoSyncTree_.applyServerOverwrite(t.path, a)),
                      setTimeout(function() {
                        i('ok')
                      }, 0)),
                    o
                  )
                },
                stopListening: function() {}
              })),
              this.updateInfo_('connected', !1),
              (this.serverSyncTree_ = new Je({
                startListening: function(t, e, n, i) {
                  return (
                    r.server_.listen(t, n, e, function(e, n) {
                      var o = i(e, n)
                      r.eventQueue_.raiseEventsForChangedPath(t.path, o)
                    }),
                    []
                  )
                },
                stopListening: function(t, e) {
                  r.server_.unlisten(t, e)
                }
              }))
          }
          return (
            (t.prototype.toString = function() {
              return (
                (this.repoInfo_.secure ? 'https://' : 'http://') +
                this.repoInfo_.host
              )
            }),
            (t.prototype.name = function() {
              return this.repoInfo_.namespace
            }),
            (t.prototype.serverTime = function() {
              var t = this.infoData_.getNode(new B('.info/serverTimeOffset')),
                e = t.val() || 0
              return new Date().getTime() + e
            }),
            (t.prototype.generateServerValues = function() {
              return Ee({ timestamp: this.serverTime() })
            }),
            (t.prototype.onDataUpdate_ = function(t, e, n, r) {
              this.dataUpdateCount++
              var o = new B(t)
              e = this.interceptServerDataCallback_
                ? this.interceptServerDataCallback_(t, e)
                : e
              var a = []
              if (r)
                if (n) {
                  var s = i.map(e, function(t) {
                    return ce(t)
                  })
                  a = this.serverSyncTree_.applyTaggedQueryMerge(o, s, r)
                } else {
                  var u = ce(e)
                  a = this.serverSyncTree_.applyTaggedQueryOverwrite(o, u, r)
                }
              else if (n) {
                var c = i.map(e, function(t) {
                  return ce(t)
                })
                a = this.serverSyncTree_.applyServerMerge(o, c)
              } else {
                var l = ce(e)
                a = this.serverSyncTree_.applyServerOverwrite(o, l)
              }
              var h = o
              a.length > 0 && (h = this.rerunTransactions_(o)),
                this.eventQueue_.raiseEventsForChangedPath(h, a)
            }),
            (t.prototype.interceptServerData_ = function(t) {
              this.interceptServerDataCallback_ = t
            }),
            (t.prototype.onConnectStatus_ = function(t) {
              this.updateInfo_('connected', t),
                !1 === t && this.runOnDisconnectEvents_()
            }),
            (t.prototype.onServerInfoUpdate_ = function(t) {
              var e = this
              F(t, function(t, n) {
                e.updateInfo_(n, t)
              })
            }),
            (t.prototype.updateInfo_ = function(t, e) {
              var n = new B('/.info/' + t),
                r = ce(e)
              this.infoData_.updateSnapshot(n, r)
              var i = this.infoSyncTree_.applyServerOverwrite(n, r)
              this.eventQueue_.raiseEventsForChangedPath(n, i)
            }),
            (t.prototype.getNextWriteId_ = function() {
              return this.nextWriteId_++
            }),
            (t.prototype.setWithPriority = function(t, e, n, r) {
              var i = this
              this.log_('set', { path: t.toString(), value: e, priority: n })
              var o = this.generateServerValues(),
                a = ce(e, n),
                s = xe(a, o),
                u = this.getNextWriteId_(),
                c = this.serverSyncTree_.applyUserOverwrite(t, s, u, !0)
              this.eventQueue_.queueEvents(c),
                this.server_.put(t.toString(), a.val(!0), function(e, n) {
                  var o = 'ok' === e
                  o || S('set at ' + t + ' failed: ' + e)
                  var a = i.serverSyncTree_.ackUserWrite(u, !o)
                  i.eventQueue_.raiseEventsForChangedPath(t, a),
                    i.callOnCompleteCallback(r, e, n)
                })
              var l = this.abortTransactions_(t)
              this.rerunTransactions_(l),
                this.eventQueue_.raiseEventsForChangedPath(l, [])
            }),
            (t.prototype.update = function(t, e, n) {
              var r = this
              this.log_('update', { path: t.toString(), value: e })
              var o = !0,
                a = this.generateServerValues(),
                s = {}
              if (
                (i.forEach(e, function(t, e) {
                  o = !1
                  var n = ce(e)
                  s[t] = xe(n, a)
                }),
                o)
              )
                b("update() called with empty data.  Don't do anything."),
                  this.callOnCompleteCallback(n, 'ok')
              else {
                var u = this.getNextWriteId_(),
                  c = this.serverSyncTree_.applyUserMerge(t, s, u)
                this.eventQueue_.queueEvents(c),
                  this.server_.merge(t.toString(), e, function(e, i) {
                    var o = 'ok' === e
                    o || S('update at ' + t + ' failed: ' + e)
                    var a = r.serverSyncTree_.ackUserWrite(u, !o),
                      s = a.length > 0 ? r.rerunTransactions_(t) : t
                    r.eventQueue_.raiseEventsForChangedPath(s, a),
                      r.callOnCompleteCallback(n, e, i)
                  }),
                  i.forEach(e, function(e) {
                    var n = r.abortTransactions_(t.child(e))
                    r.rerunTransactions_(n)
                  }),
                  this.eventQueue_.raiseEventsForChangedPath(t, [])
              }
            }),
            (t.prototype.runOnDisconnectEvents_ = function() {
              var t = this
              this.log_('onDisconnectEvents')
              var e = this.generateServerValues(),
                n = Te(this.onDisconnect_, e),
                r = []
              n.forEachTree(B.Empty, function(e, n) {
                r = r.concat(t.serverSyncTree_.applyServerOverwrite(e, n))
                var i = t.abortTransactions_(e)
                t.rerunTransactions_(i)
              }),
                (this.onDisconnect_ = new Ce()),
                this.eventQueue_.raiseEventsForChangedPath(B.Empty, r)
            }),
            (t.prototype.onDisconnectCancel = function(t, e) {
              var n = this
              this.server_.onDisconnectCancel(t.toString(), function(r, i) {
                'ok' === r && n.onDisconnect_.forget(t),
                  n.callOnCompleteCallback(e, r, i)
              })
            }),
            (t.prototype.onDisconnectSet = function(t, e, n) {
              var r = this,
                i = ce(e)
              this.server_.onDisconnectPut(t.toString(), i.val(!0), function(
                e,
                o
              ) {
                'ok' === e && r.onDisconnect_.remember(t, i),
                  r.callOnCompleteCallback(n, e, o)
              })
            }),
            (t.prototype.onDisconnectSetWithPriority = function(t, e, n, r) {
              var i = this,
                o = ce(e, n)
              this.server_.onDisconnectPut(t.toString(), o.val(!0), function(
                e,
                n
              ) {
                'ok' === e && i.onDisconnect_.remember(t, o),
                  i.callOnCompleteCallback(r, e, n)
              })
            }),
            (t.prototype.onDisconnectUpdate = function(t, e, n) {
              var r = this
              if (i.isEmpty(e))
                return (
                  b(
                    "onDisconnect().update() called with empty data.  Don't do anything."
                  ),
                  void this.callOnCompleteCallback(n, 'ok')
                )
              this.server_.onDisconnectMerge(t.toString(), e, function(o, a) {
                'ok' === o &&
                  i.forEach(e, function(e, n) {
                    var i = ce(n)
                    r.onDisconnect_.remember(t.child(e), i)
                  }),
                  r.callOnCompleteCallback(n, o, a)
              })
            }),
            (t.prototype.addEventCallbackForQuery = function(t, e) {
              var n
              ;(n =
                '.info' === t.path.getFront()
                  ? this.infoSyncTree_.addEventRegistration(t, e)
                  : this.serverSyncTree_.addEventRegistration(t, e)),
                this.eventQueue_.raiseEventsAtPath(t.path, n)
            }),
            (t.prototype.removeEventCallbackForQuery = function(t, e) {
              var n
              ;(n =
                '.info' === t.path.getFront()
                  ? this.infoSyncTree_.removeEventRegistration(t, e)
                  : this.serverSyncTree_.removeEventRegistration(t, e)),
                this.eventQueue_.raiseEventsAtPath(t.path, n)
            }),
            (t.prototype.interrupt = function() {
              this.persistentConnection_ &&
                this.persistentConnection_.interrupt(hr)
            }),
            (t.prototype.resume = function() {
              this.persistentConnection_ &&
                this.persistentConnection_.resume(hr)
            }),
            (t.prototype.stats = function(t) {
              if ((void 0 === t && (t = !1), 'undefined' !== typeof console)) {
                var e
                t
                  ? (this.statsListener_ ||
                      (this.statsListener_ = new rn(this.stats_)),
                    (e = this.statsListener_.get()))
                  : (e = this.stats_.get())
                var n = Object.keys(e).reduce(function(t, e) {
                  return Math.max(e.length, t)
                }, 0)
                i.forEach(e, function(t, e) {
                  for (var r = t.length; r < n + 2; r++) t += ' '
                  console.log(t + e)
                })
              }
            }),
            (t.prototype.statsIncrementCounter = function(t) {
              this.stats_.incrementCounter(t),
                this.statsReporter_.includeStat(t)
            }),
            (t.prototype.log_ = function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
              var n = ''
              this.persistentConnection_ &&
                (n = this.persistentConnection_.id + ':'),
                b.apply(void 0, [n].concat(t))
            }),
            (t.prototype.callOnCompleteCallback = function(t, e, n) {
              t &&
                V(function() {
                  if ('ok' == e) t(null)
                  else {
                    var r = (e || 'error').toUpperCase(),
                      i = r
                    n && (i += ': ' + n)
                    var o = new Error(i)
                    ;(o.code = r), t(o)
                  }
                })
            }),
            Object.defineProperty(t.prototype, 'database', {
              get: function() {
                return this.__database || (this.__database = new Er(this))
              },
              enumerable: !0,
              configurable: !0
            }),
            t
          )
        })(),
        fr = (function() {
          function t(e) {
            ;(this.indexedFilter_ = new Ue(e.getIndex())),
              (this.index_ = e.getIndex()),
              (this.startPost_ = t.getStartPost_(e)),
              (this.endPost_ = t.getEndPost_(e))
          }
          return (
            (t.prototype.getStartPost = function() {
              return this.startPost_
            }),
            (t.prototype.getEndPost = function() {
              return this.endPost_
            }),
            (t.prototype.matches = function(t) {
              return (
                this.index_.compare(this.getStartPost(), t) <= 0 &&
                this.index_.compare(t, this.getEndPost()) <= 0
              )
            }),
            (t.prototype.updateChild = function(t, e, n, r, i, o) {
              return (
                this.matches(new Nt(e, n)) || (n = oe.EMPTY_NODE),
                this.indexedFilter_.updateChild(t, e, n, r, i, o)
              )
            }),
            (t.prototype.updateFullNode = function(t, e, n) {
              e.isLeafNode() && (e = oe.EMPTY_NODE)
              var r = e.withIndex(this.index_)
              r = r.updatePriority(oe.EMPTY_NODE)
              var i = this
              return (
                e.forEachChild(Kt, function(t, e) {
                  i.matches(new Nt(t, e)) ||
                    (r = r.updateImmediateChild(t, oe.EMPTY_NODE))
                }),
                this.indexedFilter_.updateFullNode(t, r, n)
              )
            }),
            (t.prototype.updatePriority = function(t, e) {
              return t
            }),
            (t.prototype.filtersNodes = function() {
              return !0
            }),
            (t.prototype.getIndexedFilter = function() {
              return this.indexedFilter_
            }),
            (t.prototype.getIndex = function() {
              return this.index_
            }),
            (t.getStartPost_ = function(t) {
              if (t.hasStart()) {
                var e = t.getIndexStartName()
                return t.getIndex().makePost(t.getIndexStartValue(), e)
              }
              return t.getIndex().minPost()
            }),
            (t.getEndPost_ = function(t) {
              if (t.hasEnd()) {
                var e = t.getIndexEndName()
                return t.getIndex().makePost(t.getIndexEndValue(), e)
              }
              return t.getIndex().maxPost()
            }),
            t
          )
        })(),
        dr = (function() {
          function t(t) {
            ;(this.rangedFilter_ = new fr(t)),
              (this.index_ = t.getIndex()),
              (this.limit_ = t.getLimit()),
              (this.reverse_ = !t.isViewFromLeft())
          }
          return (
            (t.prototype.updateChild = function(t, e, n, r, i, o) {
              return (
                this.rangedFilter_.matches(new Nt(e, n)) || (n = oe.EMPTY_NODE),
                t.getImmediateChild(e).equals(n)
                  ? t
                  : t.numChildren() < this.limit_
                    ? this.rangedFilter_
                        .getIndexedFilter()
                        .updateChild(t, e, n, r, i, o)
                    : this.fullLimitUpdateChild_(t, e, n, i, o)
              )
            }),
            (t.prototype.updateFullNode = function(t, e, n) {
              var r
              if (e.isLeafNode() || e.isEmpty())
                r = oe.EMPTY_NODE.withIndex(this.index_)
              else if (
                2 * this.limit_ < e.numChildren() &&
                e.isIndexed(this.index_)
              ) {
                r = oe.EMPTY_NODE.withIndex(this.index_)
                var i = void 0
                i = this.reverse_
                  ? e.getReverseIteratorFrom(
                      this.rangedFilter_.getEndPost(),
                      this.index_
                    )
                  : e.getIteratorFrom(
                      this.rangedFilter_.getStartPost(),
                      this.index_
                    )
                var o = 0
                while (i.hasNext() && o < this.limit_) {
                  var a = i.getNext(),
                    s = void 0
                  if (
                    ((s = this.reverse_
                      ? this.index_.compare(
                          this.rangedFilter_.getStartPost(),
                          a
                        ) <= 0
                      : this.index_.compare(
                          a,
                          this.rangedFilter_.getEndPost()
                        ) <= 0),
                    !s)
                  )
                    break
                  ;(r = r.updateImmediateChild(a.name, a.node)), o++
                }
              } else {
                ;(r = e.withIndex(this.index_)),
                  (r = r.updatePriority(oe.EMPTY_NODE))
                var u = void 0,
                  c = void 0,
                  l = void 0
                i = void 0
                if (this.reverse_) {
                  ;(i = r.getReverseIterator(this.index_)),
                    (u = this.rangedFilter_.getEndPost()),
                    (c = this.rangedFilter_.getStartPost())
                  var h = this.index_.getCompare()
                  l = function(t, e) {
                    return h(e, t)
                  }
                } else
                  (i = r.getIterator(this.index_)),
                    (u = this.rangedFilter_.getStartPost()),
                    (c = this.rangedFilter_.getEndPost()),
                    (l = this.index_.getCompare())
                o = 0
                var p = !1
                while (i.hasNext()) {
                  a = i.getNext()
                  !p && l(u, a) <= 0 && (p = !0)
                  s = p && o < this.limit_ && l(a, c) <= 0
                  s ? o++ : (r = r.updateImmediateChild(a.name, oe.EMPTY_NODE))
                }
              }
              return this.rangedFilter_
                .getIndexedFilter()
                .updateFullNode(t, r, n)
            }),
            (t.prototype.updatePriority = function(t, e) {
              return t
            }),
            (t.prototype.filtersNodes = function() {
              return !0
            }),
            (t.prototype.getIndexedFilter = function() {
              return this.rangedFilter_.getIndexedFilter()
            }),
            (t.prototype.getIndex = function() {
              return this.index_
            }),
            (t.prototype.fullLimitUpdateChild_ = function(t, e, n, r, o) {
              var a
              if (this.reverse_) {
                var s = this.index_.getCompare()
                a = function(t, e) {
                  return s(e, t)
                }
              } else a = this.index_.getCompare()
              var u = t
              i.assert(u.numChildren() == this.limit_, '')
              var c = new Nt(e, n),
                l = this.reverse_
                  ? u.getFirstChild(this.index_)
                  : u.getLastChild(this.index_),
                h = this.rangedFilter_.matches(c)
              if (u.hasChild(e)) {
                var p = u.getImmediateChild(e),
                  f = r.getChildAfterChild(this.index_, l, this.reverse_)
                while (null != f && (f.name == e || u.hasChild(f.name)))
                  f = r.getChildAfterChild(this.index_, f, this.reverse_)
                var d = null == f ? 1 : a(f, c),
                  v = h && !n.isEmpty() && d >= 0
                if (v)
                  return (
                    null != o &&
                      o.trackChildChange(je.childChangedChange(e, n, p)),
                    u.updateImmediateChild(e, n)
                  )
                null != o && o.trackChildChange(je.childRemovedChange(e, p))
                var y = u.updateImmediateChild(e, oe.EMPTY_NODE),
                  _ = null != f && this.rangedFilter_.matches(f)
                return _
                  ? (null != o &&
                      o.trackChildChange(je.childAddedChange(f.name, f.node)),
                    y.updateImmediateChild(f.name, f.node))
                  : y
              }
              return n.isEmpty()
                ? t
                : h && a(l, c) >= 0
                  ? (null != o &&
                      (o.trackChildChange(
                        je.childRemovedChange(l.name, l.node)
                      ),
                      o.trackChildChange(je.childAddedChange(e, n))),
                    u
                      .updateImmediateChild(e, n)
                      .updateImmediateChild(l.name, oe.EMPTY_NODE))
                  : t
            }),
            t
          )
        })(),
        vr = (function() {
          function t() {
            ;(this.limitSet_ = !1),
              (this.startSet_ = !1),
              (this.startNameSet_ = !1),
              (this.endSet_ = !1),
              (this.endNameSet_ = !1),
              (this.limit_ = 0),
              (this.viewFrom_ = ''),
              (this.indexStartValue_ = null),
              (this.indexStartName_ = ''),
              (this.indexEndValue_ = null),
              (this.indexEndName_ = ''),
              (this.index_ = Kt)
          }
          return (
            (t.prototype.hasStart = function() {
              return this.startSet_
            }),
            (t.prototype.isViewFromLeft = function() {
              return '' === this.viewFrom_
                ? this.startSet_
                : this.viewFrom_ === t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT
            }),
            (t.prototype.getIndexStartValue = function() {
              return (
                i.assert(this.startSet_, 'Only valid if start has been set'),
                this.indexStartValue_
              )
            }),
            (t.prototype.getIndexStartName = function() {
              return (
                i.assert(this.startSet_, 'Only valid if start has been set'),
                this.startNameSet_ ? this.indexStartName_ : A
              )
            }),
            (t.prototype.hasEnd = function() {
              return this.endSet_
            }),
            (t.prototype.getIndexEndValue = function() {
              return (
                i.assert(this.endSet_, 'Only valid if end has been set'),
                this.indexEndValue_
              )
            }),
            (t.prototype.getIndexEndName = function() {
              return (
                i.assert(this.endSet_, 'Only valid if end has been set'),
                this.endNameSet_ ? this.indexEndName_ : P
              )
            }),
            (t.prototype.hasLimit = function() {
              return this.limitSet_
            }),
            (t.prototype.hasAnchoredLimit = function() {
              return this.limitSet_ && '' !== this.viewFrom_
            }),
            (t.prototype.getLimit = function() {
              return (
                i.assert(this.limitSet_, 'Only valid if limit has been set'),
                this.limit_
              )
            }),
            (t.prototype.getIndex = function() {
              return this.index_
            }),
            (t.prototype.copy_ = function() {
              var e = new t()
              return (
                (e.limitSet_ = this.limitSet_),
                (e.limit_ = this.limit_),
                (e.startSet_ = this.startSet_),
                (e.indexStartValue_ = this.indexStartValue_),
                (e.startNameSet_ = this.startNameSet_),
                (e.indexStartName_ = this.indexStartName_),
                (e.endSet_ = this.endSet_),
                (e.indexEndValue_ = this.indexEndValue_),
                (e.endNameSet_ = this.endNameSet_),
                (e.indexEndName_ = this.indexEndName_),
                (e.index_ = this.index_),
                (e.viewFrom_ = this.viewFrom_),
                e
              )
            }),
            (t.prototype.limit = function(t) {
              var e = this.copy_()
              return (e.limitSet_ = !0), (e.limit_ = t), (e.viewFrom_ = ''), e
            }),
            (t.prototype.limitToFirst = function(e) {
              var n = this.copy_()
              return (
                (n.limitSet_ = !0),
                (n.limit_ = e),
                (n.viewFrom_ = t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT),
                n
              )
            }),
            (t.prototype.limitToLast = function(e) {
              var n = this.copy_()
              return (
                (n.limitSet_ = !0),
                (n.limit_ = e),
                (n.viewFrom_ = t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT),
                n
              )
            }),
            (t.prototype.startAt = function(t, e) {
              var n = this.copy_()
              return (
                (n.startSet_ = !0),
                void 0 === t && (t = null),
                (n.indexStartValue_ = t),
                null != e
                  ? ((n.startNameSet_ = !0), (n.indexStartName_ = e))
                  : ((n.startNameSet_ = !1), (n.indexStartName_ = '')),
                n
              )
            }),
            (t.prototype.endAt = function(t, e) {
              var n = this.copy_()
              return (
                (n.endSet_ = !0),
                void 0 === t && (t = null),
                (n.indexEndValue_ = t),
                void 0 !== e
                  ? ((n.endNameSet_ = !0), (n.indexEndName_ = e))
                  : ((n.endNameSet_ = !1), (n.indexEndName_ = '')),
                n
              )
            }),
            (t.prototype.orderBy = function(t) {
              var e = this.copy_()
              return (e.index_ = t), e
            }),
            (t.prototype.getQueryObject = function() {
              var e = t.WIRE_PROTOCOL_CONSTANTS_,
                n = {}
              if (
                (this.startSet_ &&
                  ((n[e.INDEX_START_VALUE] = this.indexStartValue_),
                  this.startNameSet_ &&
                    (n[e.INDEX_START_NAME] = this.indexStartName_)),
                this.endSet_ &&
                  ((n[e.INDEX_END_VALUE] = this.indexEndValue_),
                  this.endNameSet_ &&
                    (n[e.INDEX_END_NAME] = this.indexEndName_)),
                this.limitSet_)
              ) {
                n[e.LIMIT] = this.limit_
                var r = this.viewFrom_
                '' === r &&
                  (r = this.isViewFromLeft()
                    ? e.VIEW_FROM_LEFT
                    : e.VIEW_FROM_RIGHT),
                  (n[e.VIEW_FROM] = r)
              }
              return (
                this.index_ !== Kt && (n[e.INDEX] = this.index_.toString()), n
              )
            }),
            (t.prototype.loadsAllData = function() {
              return !(this.startSet_ || this.endSet_ || this.limitSet_)
            }),
            (t.prototype.isDefault = function() {
              return this.loadsAllData() && this.index_ == Kt
            }),
            (t.prototype.getNodeFilter = function() {
              return this.loadsAllData()
                ? new Ue(this.getIndex())
                : this.hasLimit()
                  ? new dr(this)
                  : new fr(this)
            }),
            (t.prototype.toRestQueryStringParameters = function() {
              var e,
                n = t.REST_QUERY_CONSTANTS_,
                r = {}
              return this.isDefault()
                ? r
                : (this.index_ === Kt
                    ? (e = n.PRIORITY_INDEX)
                    : this.index_ === fe
                      ? (e = n.VALUE_INDEX)
                      : this.index_ === Dt
                        ? (e = n.KEY_INDEX)
                        : (i.assert(
                            this.index_ instanceof de,
                            'Unrecognized index type!'
                          ),
                          (e = this.index_.toString())),
                  (r[n.ORDER_BY] = i.stringify(e)),
                  this.startSet_ &&
                    ((r[n.START_AT] = i.stringify(this.indexStartValue_)),
                    this.startNameSet_ &&
                      (r[n.START_AT] +=
                        ',' + i.stringify(this.indexStartName_))),
                  this.endSet_ &&
                    ((r[n.END_AT] = i.stringify(this.indexEndValue_)),
                    this.endNameSet_ &&
                      (r[n.END_AT] += ',' + i.stringify(this.indexEndName_))),
                  this.limitSet_ &&
                    (this.isViewFromLeft()
                      ? (r[n.LIMIT_TO_FIRST] = this.limit_)
                      : (r[n.LIMIT_TO_LAST] = this.limit_)),
                  r)
            }),
            (t.WIRE_PROTOCOL_CONSTANTS_ = {
              INDEX_START_VALUE: 'sp',
              INDEX_START_NAME: 'sn',
              INDEX_END_VALUE: 'ep',
              INDEX_END_NAME: 'en',
              LIMIT: 'l',
              VIEW_FROM: 'vf',
              VIEW_FROM_LEFT: 'l',
              VIEW_FROM_RIGHT: 'r',
              INDEX: 'i'
            }),
            (t.REST_QUERY_CONSTANTS_ = {
              ORDER_BY: 'orderBy',
              PRIORITY_INDEX: '$priority',
              VALUE_INDEX: '$value',
              KEY_INDEX: '$key',
              START_AT: 'startAt',
              END_AT: 'endAt',
              LIMIT_TO_FIRST: 'limitToFirst',
              LIMIT_TO_LAST: 'limitToLast'
            }),
            (t.DEFAULT = new t()),
            t
          )
        })(),
        yr = (function(t) {
          function e(e, n) {
            var r = this
            if (!(e instanceof pr))
              throw new Error(
                'new Reference() no longer supported - use app.database().'
              )
            return (r = t.call(this, e, n, vr.DEFAULT, !1) || this), r
          }
          return (
            a.__extends(e, t),
            (e.prototype.getKey = function() {
              return (
                i.validateArgCount('Reference.key', 0, 0, arguments.length),
                this.path.isEmpty() ? null : this.path.getBack()
              )
            }),
            (e.prototype.child = function(t) {
              return (
                i.validateArgCount('Reference.child', 1, 1, arguments.length),
                'number' === typeof t
                  ? (t = String(t))
                  : t instanceof B ||
                    (null === this.path.getFront()
                      ? St('Reference.child', 1, t, !1)
                      : Et('Reference.child', 1, t, !1)),
                new e(this.repo, this.path.child(t))
              )
            }),
            (e.prototype.getParent = function() {
              i.validateArgCount('Reference.parent', 0, 0, arguments.length)
              var t = this.path.parent()
              return null === t ? null : new e(this.repo, t)
            }),
            (e.prototype.getRoot = function() {
              i.validateArgCount('Reference.root', 0, 0, arguments.length)
              var t = this
              while (null !== t.getParent()) t = t.getParent()
              return t
            }),
            (e.prototype.databaseProp = function() {
              return this.repo.database
            }),
            (e.prototype.set = function(t, e) {
              i.validateArgCount('Reference.set', 1, 2, arguments.length),
                Tt('Reference.set', this.path),
                yt('Reference.set', 1, t, this.path, !1),
                i.validateCallback('Reference.set', 2, e, !0)
              var n = new i.Deferred()
              return (
                this.repo.setWithPriority(
                  this.path,
                  t,
                  null,
                  n.wrapCallback(e)
                ),
                n.promise
              )
            }),
            (e.prototype.update = function(t, e) {
              if (
                (i.validateArgCount('Reference.update', 1, 2, arguments.length),
                Tt('Reference.update', this.path),
                Array.isArray(t))
              ) {
                for (var n = {}, r = 0; r < t.length; ++r) n['' + r] = t[r]
                ;(t = n),
                  S(
                    'Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.'
                  )
              }
              mt('Reference.update', 1, t, this.path, !1),
                i.validateCallback('Reference.update', 2, e, !0)
              var o = new i.Deferred()
              return (
                this.repo.update(this.path, t, o.wrapCallback(e)), o.promise
              )
            }),
            (e.prototype.setWithPriority = function(t, e, n) {
              if (
                (i.validateArgCount(
                  'Reference.setWithPriority',
                  2,
                  3,
                  arguments.length
                ),
                Tt('Reference.setWithPriority', this.path),
                yt('Reference.setWithPriority', 1, t, this.path, !1),
                bt('Reference.setWithPriority', 2, e, !1),
                i.validateCallback('Reference.setWithPriority', 3, n, !0),
                '.length' === this.getKey() || '.keys' === this.getKey())
              )
                throw 'Reference.setWithPriority failed: ' +
                  this.getKey() +
                  ' is a read-only object.'
              var r = new i.Deferred()
              return (
                this.repo.setWithPriority(this.path, t, e, r.wrapCallback(n)),
                r.promise
              )
            }),
            (e.prototype.remove = function(t) {
              return (
                i.validateArgCount('Reference.remove', 0, 1, arguments.length),
                Tt('Reference.remove', this.path),
                i.validateCallback('Reference.remove', 1, t, !0),
                this.set(null, t)
              )
            }),
            (e.prototype.transaction = function(t, e, n) {
              if (
                (i.validateArgCount(
                  'Reference.transaction',
                  1,
                  3,
                  arguments.length
                ),
                Tt('Reference.transaction', this.path),
                i.validateCallback('Reference.transaction', 1, t, !1),
                i.validateCallback('Reference.transaction', 2, e, !0),
                Ot('Reference.transaction', 3, n, !0),
                '.length' === this.getKey() || '.keys' === this.getKey())
              )
                throw 'Reference.transaction failed: ' +
                  this.getKey() +
                  ' is a read-only object.'
              void 0 === n && (n = !0)
              var r = new i.Deferred()
              'function' === typeof e && r.promise.catch(function() {})
              var o = function(t, n, i) {
                t ? r.reject(t) : r.resolve(new Pt(n, i)),
                  'function' === typeof e && e(t, n, i)
              }
              return this.repo.startTransaction(this.path, t, o, n), r.promise
            }),
            (e.prototype.setPriority = function(t, e) {
              i.validateArgCount(
                'Reference.setPriority',
                1,
                2,
                arguments.length
              ),
                Tt('Reference.setPriority', this.path),
                bt('Reference.setPriority', 1, t, !1),
                i.validateCallback('Reference.setPriority', 2, e, !0)
              var n = new i.Deferred()
              return (
                this.repo.setWithPriority(
                  this.path.child('.priority'),
                  t,
                  null,
                  n.wrapCallback(e)
                ),
                n.promise
              )
            }),
            (e.prototype.push = function(t, e) {
              i.validateArgCount('Reference.push', 0, 2, arguments.length),
                Tt('Reference.push', this.path),
                yt('Reference.push', 1, t, this.path, !0),
                i.validateCallback('Reference.push', 2, e, !0)
              var n,
                r = this.repo.serverTime(),
                o = It(r),
                a = this.child(o),
                s = this.child(o)
              return (
                (n =
                  null != t
                    ? a.set(t, e).then(function() {
                        return s
                      })
                    : Promise.resolve(s)),
                (a.then = n.then.bind(n)),
                (a.catch = n.then.bind(n, void 0)),
                'function' === typeof e && n.catch(function() {}),
                a
              )
            }),
            (e.prototype.onDisconnect = function() {
              return (
                Tt('Reference.onDisconnect', this.path),
                new At(this.repo, this.path)
              )
            }),
            Object.defineProperty(e.prototype, 'database', {
              get: function() {
                return this.databaseProp()
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'key', {
              get: function() {
                return this.getKey()
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'parent', {
              get: function() {
                return this.getParent()
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'root', {
              get: function() {
                return this.getRoot()
              },
              enumerable: !0,
              configurable: !0
            }),
            e
          )
        })(be)
      ;(be.__referenceConstructor = yr), (ze.__referenceConstructor = yr)
      var _r,
        gr = (function() {
          function t() {
            ;(this.children = {}), (this.childCount = 0), (this.value = null)
          }
          return t
        })(),
        mr = (function() {
          function t(t, e, n) {
            void 0 === t && (t = ''),
              void 0 === e && (e = null),
              void 0 === n && (n = new gr()),
              (this.name_ = t),
              (this.parent_ = e),
              (this.node_ = n)
          }
          return (
            (t.prototype.subTree = function(e) {
              var n,
                r = e instanceof B ? e : new B(e),
                o = this
              while (null !== (n = r.getFront())) {
                var a = i.safeGet(o.node_.children, n) || new gr()
                ;(o = new t(n, o, a)), (r = r.popFront())
              }
              return o
            }),
            (t.prototype.getValue = function() {
              return this.node_.value
            }),
            (t.prototype.setValue = function(t) {
              i.assert(
                'undefined' !== typeof t,
                'Cannot set value to undefined'
              ),
                (this.node_.value = t),
                this.updateParents_()
            }),
            (t.prototype.clear = function() {
              ;(this.node_.value = null),
                (this.node_.children = {}),
                (this.node_.childCount = 0),
                this.updateParents_()
            }),
            (t.prototype.hasChildren = function() {
              return this.node_.childCount > 0
            }),
            (t.prototype.isEmpty = function() {
              return null === this.getValue() && !this.hasChildren()
            }),
            (t.prototype.forEachChild = function(e) {
              var n = this
              i.forEach(this.node_.children, function(r, i) {
                e(new t(r, n, i))
              })
            }),
            (t.prototype.forEachDescendant = function(t, e, n) {
              e && !n && t(this),
                this.forEachChild(function(e) {
                  e.forEachDescendant(t, !0, n)
                }),
                e && n && t(this)
            }),
            (t.prototype.forEachAncestor = function(t, e) {
              var n = e ? this : this.parent()
              while (null !== n) {
                if (t(n)) return !0
                n = n.parent()
              }
              return !1
            }),
            (t.prototype.forEachImmediateDescendantWithValue = function(t) {
              this.forEachChild(function(e) {
                null !== e.getValue()
                  ? t(e)
                  : e.forEachImmediateDescendantWithValue(t)
              })
            }),
            (t.prototype.path = function() {
              return new B(
                null === this.parent_
                  ? this.name_
                  : this.parent_.path() + '/' + this.name_
              )
            }),
            (t.prototype.name = function() {
              return this.name_
            }),
            (t.prototype.parent = function() {
              return this.parent_
            }),
            (t.prototype.updateParents_ = function() {
              null !== this.parent_ &&
                this.parent_.updateChild_(this.name_, this)
            }),
            (t.prototype.updateChild_ = function(t, e) {
              var n = e.isEmpty(),
                r = i.contains(this.node_.children, t)
              n && r
                ? (delete this.node_.children[t],
                  this.node_.childCount--,
                  this.updateParents_())
                : n ||
                  r ||
                  ((this.node_.children[t] = e.node_),
                  this.node_.childCount++,
                  this.updateParents_())
            }),
            t
          )
        })()
      ;(function(t) {
        ;(t[(t['RUN'] = 0)] = 'RUN'),
          (t[(t['SENT'] = 1)] = 'SENT'),
          (t[(t['COMPLETED'] = 2)] = 'COMPLETED'),
          (t[(t['SENT_NEEDS_ABORT'] = 3)] = 'SENT_NEEDS_ABORT'),
          (t[(t['NEEDS_ABORT'] = 4)] = 'NEEDS_ABORT')
      })(_r || (_r = {})),
        (pr.MAX_TRANSACTION_RETRIES_ = 25),
        (pr.prototype.transactions_init_ = function() {
          this.transactionQueueTree_ = new mr()
        }),
        (pr.prototype.startTransaction = function(t, e, n, r) {
          this.log_('transaction on ' + t)
          var o = function() {},
            a = new yr(this, t)
          a.on('value', o)
          var s = function() {
              a.off('value', o)
            },
            u = {
              path: t,
              update: e,
              onComplete: n,
              status: null,
              order: d(),
              applyLocally: r,
              retryCount: 0,
              unwatcher: s,
              abortReason: null,
              currentWriteId: null,
              currentInputSnapshot: null,
              currentOutputSnapshotRaw: null,
              currentOutputSnapshotResolved: null
            },
            c = this.getLatestState_(t)
          u.currentInputSnapshot = c
          var l = u.update(c.val())
          if (void 0 === l) {
            if (
              (u.unwatcher(),
              (u.currentOutputSnapshotRaw = null),
              (u.currentOutputSnapshotResolved = null),
              u.onComplete)
            ) {
              var h = new ve(u.currentInputSnapshot, new yr(this, u.path), Kt)
              u.onComplete(null, !1, h)
            }
          } else {
            _t('transaction failed: Data returned ', l, u.path),
              (u.status = _r.RUN)
            var p = this.transactionQueueTree_.subTree(t),
              f = p.getValue() || []
            f.push(u), p.setValue(f)
            var v = void 0
            if (
              'object' === typeof l &&
              null !== l &&
              i.contains(l, '.priority')
            )
              (v = i.safeGet(l, '.priority')),
                i.assert(
                  vt(v),
                  'Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.'
                )
            else {
              var y =
                this.serverSyncTree_.calcCompleteEventCache(t) || oe.EMPTY_NODE
              v = y.getPriority().val()
            }
            v = v
            var _ = this.generateServerValues(),
              g = ce(l, v),
              m = xe(g, _)
            ;(u.currentOutputSnapshotRaw = g),
              (u.currentOutputSnapshotResolved = m),
              (u.currentWriteId = this.getNextWriteId_())
            var b = this.serverSyncTree_.applyUserOverwrite(
              t,
              m,
              u.currentWriteId,
              u.applyLocally
            )
            this.eventQueue_.raiseEventsForChangedPath(t, b),
              this.sendReadyTransactions_()
          }
        }),
        (pr.prototype.getLatestState_ = function(t, e) {
          return (
            this.serverSyncTree_.calcCompleteEventCache(t, e) || oe.EMPTY_NODE
          )
        }),
        (pr.prototype.sendReadyTransactions_ = function(t) {
          var e = this
          if (
            (void 0 === t && (t = this.transactionQueueTree_),
            t || this.pruneCompletedTransactionsBelowNode_(t),
            null !== t.getValue())
          ) {
            var n = this.buildTransactionQueue_(t)
            i.assert(n.length > 0, 'Sending zero length transaction queue')
            var r = n.every(function(t) {
              return t.status === _r.RUN
            })
            r && this.sendTransactionQueue_(t.path(), n)
          } else
            t.hasChildren() &&
              t.forEachChild(function(t) {
                e.sendReadyTransactions_(t)
              })
        }),
        (pr.prototype.sendTransactionQueue_ = function(t, e) {
          for (
            var n = this,
              r = e.map(function(t) {
                return t.currentWriteId
              }),
              o = this.getLatestState_(t, r),
              a = o,
              s = o.hash(),
              u = 0;
            u < e.length;
            u++
          ) {
            var c = e[u]
            i.assert(
              c.status === _r.RUN,
              'tryToSendTransactionQueue_: items in queue should all be run.'
            ),
              (c.status = _r.SENT),
              c.retryCount++
            var l = B.relativePath(t, c.path)
            a = a.updateChild(l, c.currentOutputSnapshotRaw)
          }
          var h = a.val(!0),
            p = t
          this.server_.put(
            p.toString(),
            h,
            function(r) {
              n.log_('transaction put response', {
                path: p.toString(),
                status: r
              })
              var i = []
              if ('ok' === r) {
                for (var o = [], a = 0; a < e.length; a++) {
                  if (
                    ((e[a].status = _r.COMPLETED),
                    (i = i.concat(
                      n.serverSyncTree_.ackUserWrite(e[a].currentWriteId)
                    )),
                    e[a].onComplete)
                  ) {
                    var s = e[a].currentOutputSnapshotResolved,
                      u = new yr(n, e[a].path),
                      c = new ve(s, u, Kt)
                    o.push(e[a].onComplete.bind(null, null, !0, c))
                  }
                  e[a].unwatcher()
                }
                n.pruneCompletedTransactionsBelowNode_(
                  n.transactionQueueTree_.subTree(t)
                ),
                  n.sendReadyTransactions_(),
                  n.eventQueue_.raiseEventsForChangedPath(t, i)
                for (a = 0; a < o.length; a++) V(o[a])
              } else {
                if ('datastale' === r)
                  for (a = 0; a < e.length; a++)
                    e[a].status === _r.SENT_NEEDS_ABORT
                      ? (e[a].status = _r.NEEDS_ABORT)
                      : (e[a].status = _r.RUN)
                else {
                  S('transaction at ' + p.toString() + ' failed: ' + r)
                  for (a = 0; a < e.length; a++)
                    (e[a].status = _r.NEEDS_ABORT), (e[a].abortReason = r)
                }
                n.rerunTransactions_(t)
              }
            },
            s
          )
        }),
        (pr.prototype.rerunTransactions_ = function(t) {
          var e = this.getAncestorTransactionNode_(t),
            n = e.path(),
            r = this.buildTransactionQueue_(e)
          return this.rerunTransactionQueue_(r, n), n
        }),
        (pr.prototype.rerunTransactionQueue_ = function(t, e) {
          if (0 !== t.length) {
            for (
              var n = [],
                r = [],
                o = t.filter(function(t) {
                  return t.status === _r.RUN
                }),
                a = o.map(function(t) {
                  return t.currentWriteId
                }),
                s = 0;
              s < t.length;
              s++
            ) {
              var u = t[s],
                c = B.relativePath(e, u.path),
                l = !1,
                h = void 0
              if (
                (i.assert(
                  null !== c,
                  'rerunTransactionsUnderNode_: relativePath should not be null.'
                ),
                u.status === _r.NEEDS_ABORT)
              )
                (l = !0),
                  (h = u.abortReason),
                  (r = r.concat(
                    this.serverSyncTree_.ackUserWrite(u.currentWriteId, !0)
                  ))
              else if (u.status === _r.RUN)
                if (u.retryCount >= pr.MAX_TRANSACTION_RETRIES_)
                  (l = !0),
                    (h = 'maxretry'),
                    (r = r.concat(
                      this.serverSyncTree_.ackUserWrite(u.currentWriteId, !0)
                    ))
                else {
                  var p = this.getLatestState_(u.path, a)
                  u.currentInputSnapshot = p
                  var f = t[s].update(p.val())
                  if (void 0 !== f) {
                    _t('transaction failed: Data returned ', f, u.path)
                    var d = ce(f),
                      v =
                        'object' === typeof f &&
                        null != f &&
                        i.contains(f, '.priority')
                    v || (d = d.updatePriority(p.getPriority()))
                    var y = u.currentWriteId,
                      _ = this.generateServerValues(),
                      g = xe(d, _)
                    ;(u.currentOutputSnapshotRaw = d),
                      (u.currentOutputSnapshotResolved = g),
                      (u.currentWriteId = this.getNextWriteId_()),
                      a.splice(a.indexOf(y), 1),
                      (r = r.concat(
                        this.serverSyncTree_.applyUserOverwrite(
                          u.path,
                          g,
                          u.currentWriteId,
                          u.applyLocally
                        )
                      )),
                      (r = r.concat(this.serverSyncTree_.ackUserWrite(y, !0)))
                  } else
                    (l = !0),
                      (h = 'nodata'),
                      (r = r.concat(
                        this.serverSyncTree_.ackUserWrite(u.currentWriteId, !0)
                      ))
                }
              if (
                (this.eventQueue_.raiseEventsForChangedPath(e, r),
                (r = []),
                l &&
                  ((t[s].status = _r.COMPLETED),
                  (function(t) {
                    setTimeout(t, Math.floor(0))
                  })(t[s].unwatcher),
                  t[s].onComplete))
              )
                if ('nodata' === h) {
                  var m = new yr(this, t[s].path),
                    b = t[s].currentInputSnapshot,
                    w = new ve(b, m, Kt)
                  n.push(t[s].onComplete.bind(null, null, !1, w))
                } else
                  n.push(t[s].onComplete.bind(null, new Error(h), !1, null))
            }
            this.pruneCompletedTransactionsBelowNode_(
              this.transactionQueueTree_
            )
            for (s = 0; s < n.length; s++) V(n[s])
            this.sendReadyTransactions_()
          }
        }),
        (pr.prototype.getAncestorTransactionNode_ = function(t) {
          var e,
            n = this.transactionQueueTree_
          while (null !== (e = t.getFront()) && null === n.getValue())
            (n = n.subTree(e)), (t = t.popFront())
          return n
        }),
        (pr.prototype.buildTransactionQueue_ = function(t) {
          var e = []
          return (
            this.aggregateTransactionQueuesForNode_(t, e),
            e.sort(function(t, e) {
              return t.order - e.order
            }),
            e
          )
        }),
        (pr.prototype.aggregateTransactionQueuesForNode_ = function(t, e) {
          var n = this,
            r = t.getValue()
          if (null !== r) for (var i = 0; i < r.length; i++) e.push(r[i])
          t.forEachChild(function(t) {
            n.aggregateTransactionQueuesForNode_(t, e)
          })
        }),
        (pr.prototype.pruneCompletedTransactionsBelowNode_ = function(t) {
          var e = this,
            n = t.getValue()
          if (n) {
            for (var r = 0, i = 0; i < n.length; i++)
              n[i].status !== _r.COMPLETED && ((n[r] = n[i]), r++)
            ;(n.length = r), t.setValue(n.length > 0 ? n : null)
          }
          t.forEachChild(function(t) {
            e.pruneCompletedTransactionsBelowNode_(t)
          })
        }),
        (pr.prototype.abortTransactions_ = function(t) {
          var e = this,
            n = this.getAncestorTransactionNode_(t).path(),
            r = this.transactionQueueTree_.subTree(t)
          return (
            r.forEachAncestor(function(t) {
              e.abortTransactionsOnNode_(t)
            }),
            this.abortTransactionsOnNode_(r),
            r.forEachDescendant(function(t) {
              e.abortTransactionsOnNode_(t)
            }),
            n
          )
        }),
        (pr.prototype.abortTransactionsOnNode_ = function(t) {
          var e = t.getValue()
          if (null !== e) {
            for (var n = [], r = [], o = -1, a = 0; a < e.length; a++)
              if (e[a].status === _r.SENT_NEEDS_ABORT);
              else if (e[a].status === _r.SENT)
                i.assert(
                  o === a - 1,
                  'All SENT items should be at beginning of queue.'
                ),
                  (o = a),
                  (e[a].status = _r.SENT_NEEDS_ABORT),
                  (e[a].abortReason = 'set')
              else if (
                (i.assert(
                  e[a].status === _r.RUN,
                  'Unexpected transaction status in abort'
                ),
                e[a].unwatcher(),
                (r = r.concat(
                  this.serverSyncTree_.ackUserWrite(e[a].currentWriteId, !0)
                )),
                e[a].onComplete)
              ) {
                var s = null
                n.push(e[a].onComplete.bind(null, new Error('set'), !1, s))
              }
            ;-1 === o ? t.setValue(null) : (e.length = o + 1),
              this.eventQueue_.raiseEventsForChangedPath(t.path(), r)
            for (a = 0; a < n.length; a++) V(n[a])
          }
        })
      var br,
        wr = 'databaseURL',
        Cr = (function() {
          function t() {
            ;(this.repos_ = {}), (this.useRestClient_ = !1)
          }
          return (
            (t.getInstance = function() {
              return br || (br = new t()), br
            }),
            (t.prototype.interrupt = function() {
              for (var t in this.repos_)
                for (var e in this.repos_[t]) this.repos_[t][e].interrupt()
            }),
            (t.prototype.resume = function() {
              for (var t in this.repos_)
                for (var e in this.repos_[t]) this.repos_[t][e].resume()
            }),
            (t.prototype.databaseFromApp = function(t, e) {
              var n = e || t.options[wr]
              void 0 === n &&
                E(
                  "Can't determine Firebase Database URL.  Be sure to include " +
                    wr +
                    ' option when calling firebase.initializeApp().'
                )
              var r = st(n),
                i = r.repoInfo
              xt('Invalid Firebase Database URL', 1, r),
                r.path.isEmpty() ||
                  E(
                    'Database URL must point to the root of a Firebase Database (not including a child path).'
                  )
              var o = this.createRepo(i, t)
              return o.database
            }),
            (t.prototype.deleteRepo = function(t) {
              var e = i.safeGet(this.repos_, t.app.name)
              ;(e && i.safeGet(e, t.repoInfo_.toURLString()) === t) ||
                E(
                  'Database ' +
                    t.app.name +
                    '(' +
                    t.repoInfo_ +
                    ') has already been deleted.'
                ),
                t.interrupt(),
                delete e[t.repoInfo_.toURLString()]
            }),
            (t.prototype.createRepo = function(t, e) {
              var n = i.safeGet(this.repos_, e.name)
              n || ((n = {}), (this.repos_[e.name] = n))
              var r = i.safeGet(n, t.toURLString())
              return (
                r &&
                  E(
                    'Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.'
                  ),
                (r = new pr(t, this.useRestClient_, e)),
                (n[t.toURLString()] = r),
                r
              )
            }),
            (t.prototype.forceRestClient = function(t) {
              this.useRestClient_ = t
            }),
            t
          )
        })(),
        Er = (function() {
          function t(t) {
            ;(this.repo_ = t),
              t instanceof pr ||
                E(
                  "Don't call new Database() directly - please use firebase.database()."
                ),
              (this.root_ = new yr(t, B.Empty)),
              (this.INTERNAL = new Sr(this))
          }
          return (
            Object.defineProperty(t.prototype, 'app', {
              get: function() {
                return this.repo_.app
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.ref = function(t) {
              return (
                this.checkDeleted_('ref'),
                i.validateArgCount('database.ref', 0, 1, arguments.length),
                t instanceof yr
                  ? this.refFromURL(t.toString())
                  : void 0 !== t
                    ? this.root_.child(t)
                    : this.root_
              )
            }),
            (t.prototype.refFromURL = function(t) {
              var e = 'database.refFromURL'
              this.checkDeleted_(e),
                i.validateArgCount(e, 1, 1, arguments.length)
              var n = st(t)
              xt(e, 1, n)
              var r = n.repoInfo
              return (
                r.host !== this.repo_.repoInfo_.host &&
                  E(
                    e +
                      ': Host name does not match the current database: (found ' +
                      r.host +
                      ' but expected ' +
                      this.repo_.repoInfo_.host +
                      ')'
                  ),
                this.ref(n.path.toString())
              )
            }),
            (t.prototype.checkDeleted_ = function(t) {
              null === this.repo_ &&
                E('Cannot call ' + t + ' on a deleted database.')
            }),
            (t.prototype.goOffline = function() {
              i.validateArgCount('database.goOffline', 0, 0, arguments.length),
                this.checkDeleted_('goOffline'),
                this.repo_.interrupt()
            }),
            (t.prototype.goOnline = function() {
              i.validateArgCount('database.goOnline', 0, 0, arguments.length),
                this.checkDeleted_('goOnline'),
                this.repo_.resume()
            }),
            (t.ServerValue = { TIMESTAMP: { '.sv': 'timestamp' } }),
            t
          )
        })(),
        Sr = (function() {
          function t(t) {
            this.database = t
          }
          return (
            (t.prototype.delete = function() {
              return a.__awaiter(this, void 0, void 0, function() {
                return a.__generator(this, function(t) {
                  return (
                    this.database.checkDeleted_('delete'),
                    Cr.getInstance().deleteRepo(this.database.repo_),
                    (this.database.repo_ = null),
                    (this.database.root_ = null),
                    (this.database.INTERNAL = null),
                    (this.database = null),
                    [2]
                  )
                })
              })
            }),
            t
          )
        })(),
        Tr = function() {
          jn.forceDisallow(), Rn.forceAllow()
        },
        xr = function() {
          Rn.forceDisallow()
        },
        Or = function() {
          return jn['isAvailable']()
        },
        Ar = function(t, e) {
          t.repo.persistentConnection_.securityDebugCallback_ = e
        },
        Pr = function(t, e) {
          t.repo.stats(e)
        },
        Ir = function(t, e) {
          t.repo.statsIncrementCounter(e)
        },
        Nr = function(t) {
          return t.repo.dataUpdateCount
        },
        kr = function(t, e) {
          return t.repo.interceptServerData_(e)
        },
        Rr = Object.freeze({
          forceLongPolling: Tr,
          forceWebSockets: xr,
          isWebSocketsAvailable: Or,
          setSecurityDebugCallback: Ar,
          stats: Pr,
          statsIncrementCounter: Ir,
          dataUpdateCount: Nr,
          interceptServerData: kr
        }),
        Dr = cr
      ;(cr.prototype.simpleListen = function(t, e) {
        this.sendRequest('q', { p: t }, e)
      }),
        (cr.prototype.echo = function(t, e) {
          this.sendRequest('echo', { d: t }, e)
        })
      var Fr = tr,
        Lr = function(t) {
          var e = cr.prototype.put
          return (
            (cr.prototype.put = function(n, r, i, o) {
              void 0 !== o && (o = t()), e.call(this, n, r, i, o)
            }),
            function() {
              cr.prototype.put = e
            }
          )
        },
        Mr = nt,
        jr = function(t) {
          return t.queryIdentifier()
        },
        Ur = function(t) {
          return t.repo.persistentConnection_.listens_
        },
        Wr = function(t) {
          Cr.getInstance().forceRestClient(t)
        },
        qr = Object.freeze({
          DataConnection: Dr,
          RealTimeConnection: Fr,
          hijackHash: Lr,
          ConnectionTarget: Mr,
          queryIdentifier: jr,
          listens: Ur,
          forceRestClient: Wr
        }),
        Vr = Er.ServerValue
      function $r(e) {
        var n = e.INTERNAL.registerService(
          'database',
          function(t, e, n) {
            return Cr.getInstance().databaseFromApp(t, n)
          },
          {
            Reference: yr,
            Query: be,
            Database: Er,
            enableLogging: m,
            INTERNAL: Rr,
            ServerValue: Vr,
            TEST_ACCESS: qr
          },
          null,
          !0
        )
        i.isNodeSdk() && (t.exports = n)
      }
      $r(s),
        (e.registerDatabase = $r),
        (e.Database = Er),
        (e.Query = be),
        (e.Reference = yr),
        (e.enableLogging = m),
        (e.ServerValue = Vr),
        (e.DataSnapshot = ve),
        (e.OnDisconnect = At)
    },
    OP3Y: function(t, e, n) {
      var r = n('aagx'),
        i = n('S/j/'),
        o = n('YTvA')('IE_PROTO'),
        a = Object.prototype
      t.exports =
        Object.getPrototypeOf ||
        function(t) {
          return (
            (t = i(t)),
            r(t, o)
              ? t[o]
              : 'function' == typeof t.constructor && t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object
                  ? a
                  : null
          )
        }
    },
    QaDb: function(t, e, n) {
      'use strict'
      var r = n('Kuth'),
        i = n('RjD/'),
        o = n('fyDq'),
        a = {}
      n('Mukb')(a, n('K0xU')('iterator'), function() {
        return this
      }),
        (t.exports = function(t, e, n) {
          ;(t.prototype = r(a, { next: i(1, n) })), o(t, e + ' Iterator')
        })
    },
    RYi7: function(t, e) {
      var n = Math.ceil,
        r = Math.floor
      t.exports = function(t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t)
      }
    },
    'RjD/': function(t, e) {
      t.exports = function(t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e
        }
      }
    },
    'S/j/': function(t, e, n) {
      var r = n('vhPU')
      t.exports = function(t) {
        return Object(r(t))
      }
    },
    SW2M: function(t, e) {
      function n(t) {
        return t && t.__esModule ? t : { default: t }
      }
      t.exports = n
    },
    SlkY: function(t, e, n) {
      var r = n('m0Pp'),
        i = n('H6hf'),
        o = n('M6Qj'),
        a = n('y3w9'),
        s = n('ne8i'),
        u = n('J+6e'),
        c = {},
        l = {}
      e = t.exports = function(t, e, n, h, p) {
        var f,
          d,
          v,
          y,
          _ = p
            ? function() {
                return t
              }
            : u(t),
          g = r(n, h, e ? 2 : 1),
          m = 0
        if ('function' != typeof _) throw TypeError(t + ' is not iterable!')
        if (o(_)) {
          for (f = s(t.length); f > m; m++)
            if (
              ((y = e ? g(a((d = t[m]))[0], d[1]) : g(t[m])),
              y === c || y === l)
            )
              return y
        } else
          for (v = _.call(t); !(d = v.next()).done; )
            if (((y = i(v, g, d.value, e)), y === c || y === l)) return y
      }
      ;(e.BREAK = c), (e.RETURN = l)
    },
    UqcF: function(t, e) {
      e.f = {}.propertyIsEnumerable
    },
    VRzm: function(t, e, n) {
      'use strict'
      var r,
        i,
        o,
        a,
        s = n('LQAc'),
        u = n('dyZX'),
        c = n('m0Pp'),
        l = n('I8a+'),
        h = n('XKFU'),
        p = n('0/R4'),
        f = n('2OiF'),
        d = n('9gX7'),
        v = n('SlkY'),
        y = n('69bn'),
        _ = n('GZEu').set,
        g = n('gHnn')(),
        m = n('pbhE'),
        b = n('nICZ'),
        w = n('ol8x'),
        C = n('vKrd'),
        E = 'Promise',
        S = u.TypeError,
        T = u.process,
        x = T && T.versions,
        O = (x && x.v8) || '',
        A = u[E],
        P = 'process' == l(T),
        I = function() {},
        N = (i = m.f),
        k = !!(function() {
          try {
            var t = A.resolve(1),
              e = ((t.constructor = {})[n('K0xU')('species')] = function(t) {
                t(I, I)
              })
            return (
              (P || 'function' == typeof PromiseRejectionEvent) &&
              t.then(I) instanceof e &&
              0 !== O.indexOf('6.6') &&
              -1 === w.indexOf('Chrome/66')
            )
          } catch (t) {}
        })(),
        R = function(t) {
          var e
          return !(!p(t) || 'function' != typeof (e = t.then)) && e
        },
        D = function(t, e) {
          if (!t._n) {
            t._n = !0
            var n = t._c
            g(function() {
              var r = t._v,
                i = 1 == t._s,
                o = 0,
                a = function(e) {
                  var n,
                    o,
                    a,
                    s = i ? e.ok : e.fail,
                    u = e.resolve,
                    c = e.reject,
                    l = e.domain
                  try {
                    s
                      ? (i || (2 == t._h && M(t), (t._h = 1)),
                        !0 === s
                          ? (n = r)
                          : (l && l.enter(),
                            (n = s(r)),
                            l && (l.exit(), (a = !0))),
                        n === e.promise
                          ? c(S('Promise-chain cycle'))
                          : (o = R(n))
                            ? o.call(n, u, c)
                            : u(n))
                      : c(r)
                  } catch (t) {
                    l && !a && l.exit(), c(t)
                  }
                }
              while (n.length > o) a(n[o++])
              ;(t._c = []), (t._n = !1), e && !t._h && F(t)
            })
          }
        },
        F = function(t) {
          _.call(u, function() {
            var e,
              n,
              r,
              i = t._v,
              o = L(t)
            if (
              (o &&
                ((e = b(function() {
                  P
                    ? T.emit('unhandledRejection', i, t)
                    : (n = u.onunhandledrejection)
                      ? n({ promise: t, reason: i })
                      : (r = u.console) &&
                        r.error &&
                        r.error('Unhandled promise rejection', i)
                })),
                (t._h = P || L(t) ? 2 : 1)),
              (t._a = void 0),
              o && e.e)
            )
              throw e.v
          })
        },
        L = function(t) {
          return 1 !== t._h && 0 === (t._a || t._c).length
        },
        M = function(t) {
          _.call(u, function() {
            var e
            P
              ? T.emit('rejectionHandled', t)
              : (e = u.onrejectionhandled) && e({ promise: t, reason: t._v })
          })
        },
        j = function(t) {
          var e = this
          e._d ||
            ((e._d = !0),
            (e = e._w || e),
            (e._v = t),
            (e._s = 2),
            e._a || (e._a = e._c.slice()),
            D(e, !0))
        },
        U = function(t) {
          var e,
            n = this
          if (!n._d) {
            ;(n._d = !0), (n = n._w || n)
            try {
              if (n === t) throw S("Promise can't be resolved itself")
              ;(e = R(t))
                ? g(function() {
                    var r = { _w: n, _d: !1 }
                    try {
                      e.call(t, c(U, r, 1), c(j, r, 1))
                    } catch (t) {
                      j.call(r, t)
                    }
                  })
                : ((n._v = t), (n._s = 1), D(n, !1))
            } catch (t) {
              j.call({ _w: n, _d: !1 }, t)
            }
          }
        }
      k ||
        ((A = function(t) {
          d(this, A, E, '_h'), f(t), r.call(this)
          try {
            t(c(U, this, 1), c(j, this, 1))
          } catch (t) {
            j.call(this, t)
          }
        }),
        (r = function(t) {
          ;(this._c = []),
            (this._a = void 0),
            (this._s = 0),
            (this._d = !1),
            (this._v = void 0),
            (this._h = 0),
            (this._n = !1)
        }),
        (r.prototype = n('3Lyj')(A.prototype, {
          then: function(t, e) {
            var n = N(y(this, A))
            return (
              (n.ok = 'function' != typeof t || t),
              (n.fail = 'function' == typeof e && e),
              (n.domain = P ? T.domain : void 0),
              this._c.push(n),
              this._a && this._a.push(n),
              this._s && D(this, !1),
              n.promise
            )
          },
          catch: function(t) {
            return this.then(void 0, t)
          }
        })),
        (o = function() {
          var t = new r()
          ;(this.promise = t),
            (this.resolve = c(U, t, 1)),
            (this.reject = c(j, t, 1))
        }),
        (m.f = N = function(t) {
          return t === A || t === a ? new o(t) : i(t)
        })),
        h(h.G + h.W + h.F * !k, { Promise: A }),
        n('fyDq')(A, E),
        n('elZq')(E),
        (a = n('g3g5')[E]),
        h(h.S + h.F * !k, E, {
          reject: function(t) {
            var e = N(this),
              n = e.reject
            return n(t), e.promise
          }
        }),
        h(h.S + h.F * (s || !k), E, {
          resolve: function(t) {
            return C(s && this === a ? A : this, t)
          }
        }),
        h(
          h.S +
            h.F *
              !(
                k &&
                n('XMVh')(function(t) {
                  A.all(t)['catch'](I)
                })
              ),
          E,
          {
            all: function(t) {
              var e = this,
                n = N(e),
                r = n.resolve,
                i = n.reject,
                o = b(function() {
                  var n = [],
                    o = 0,
                    a = 1
                  v(t, !1, function(t) {
                    var s = o++,
                      u = !1
                    n.push(void 0),
                      a++,
                      e.resolve(t).then(function(t) {
                        u || ((u = !0), (n[s] = t), --a || r(n))
                      }, i)
                  }),
                    --a || r(n)
                })
              return o.e && i(o.v), n.promise
            },
            race: function(t) {
              var e = this,
                n = N(e),
                r = n.reject,
                i = b(function() {
                  v(t, !1, function(t) {
                    e.resolve(t).then(n.resolve, r)
                  })
                })
              return i.e && r(i.v), n.promise
            }
          }
        )
    },
    VTer: function(t, e, n) {
      var r = n('g3g5'),
        i = n('dyZX'),
        o = '__core-js_shared__',
        a = i[o] || (i[o] = {})
      ;(t.exports = function(t, e) {
        return a[t] || (a[t] = void 0 !== e ? e : {})
      })('versions', []).push({
        version: r.version,
        mode: n('LQAc') ? 'pure' : 'global',
        copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
      })
    },
    Wcq6: function(t, e, n) {
      'use strict'
      function r(t) {
        return t && 'object' === typeof t && 'default' in t ? t['default'] : t
      }
      n('lcbw')
      var i = r(n('wj3C'))
      t.exports = i
    },
    XKFU: function(t, e, n) {
      var r = n('dyZX'),
        i = n('g3g5'),
        o = n('Mukb'),
        a = n('KroJ'),
        s = n('m0Pp'),
        u = 'prototype',
        c = function(t, e, n) {
          var l,
            h,
            p,
            f,
            d = t & c.F,
            v = t & c.G,
            y = t & c.S,
            _ = t & c.P,
            g = t & c.B,
            m = v ? r : y ? r[e] || (r[e] = {}) : (r[e] || {})[u],
            b = v ? i : i[e] || (i[e] = {}),
            w = b[u] || (b[u] = {})
          for (l in (v && (n = e), n))
            (h = !d && m && void 0 !== m[l]),
              (p = (h ? m : n)[l]),
              (f =
                g && h
                  ? s(p, r)
                  : _ && 'function' == typeof p
                    ? s(Function.call, p)
                    : p),
              m && a(m, l, p, t & c.U),
              b[l] != p && o(b, l, f),
              _ && w[l] != p && (w[l] = p)
        }
      ;(r.core = i),
        (c.F = 1),
        (c.G = 2),
        (c.S = 4),
        (c.P = 8),
        (c.B = 16),
        (c.W = 32),
        (c.U = 64),
        (c.R = 128),
        (t.exports = c)
    },
    XMVh: function(t, e, n) {
      var r = n('K0xU')('iterator'),
        i = !1
      try {
        var o = [7][r]()
        ;(o['return'] = function() {
          i = !0
        }),
          Array.from(o, function() {
            throw 2
          })
      } catch (t) {}
      t.exports = function(t, e) {
        if (!e && !i) return !1
        var n = !1
        try {
          var o = [7],
            a = o[r]()
          ;(a.next = function() {
            return { done: (n = !0) }
          }),
            (o[r] = function() {
              return a
            }),
            t(o)
        } catch (t) {}
        return n
      }
    },
    Xbzi: function(t, e, n) {
      var r = n('0/R4'),
        i = n('i5dc').set
      t.exports = function(t, e, n) {
        var o,
          a = e.constructor
        return (
          a !== n &&
            'function' == typeof a &&
            (o = a.prototype) !== n.prototype &&
            r(o) &&
            i &&
            i(t, o),
          t
        )
      }
    },
    YTvA: function(t, e, n) {
      var r = n('VTer')('keys'),
        i = n('ylqs')
      t.exports = function(t) {
        return r[t] || (r[t] = i(t))
      }
    },
    Ymqv: function(t, e, n) {
      var r = n('LZWt')
      t.exports = Object('z').propertyIsEnumerable(0)
        ? Object
        : function(t) {
            return 'String' == r(t) ? t.split('') : Object(t)
          }
    },
    Zs65: function(t, e, n) {
      'use strict'
      n.r(e)
      n('NSPt')
    },
    aCFj: function(t, e, n) {
      var r = n('Ymqv'),
        i = n('vhPU')
      t.exports = function(t) {
        return r(i(t))
      }
    },
    aagx: function(t, e) {
      var n = {}.hasOwnProperty
      t.exports = function(t, e) {
        return n.call(t, e)
      }
    },
    apmT: function(t, e, n) {
      var r = n('0/R4')
      t.exports = function(t, e) {
        if (!r(t)) return t
        var n, i
        if (e && 'function' == typeof (n = t.toString) && !r((i = n.call(t))))
          return i
        if ('function' == typeof (n = t.valueOf) && !r((i = n.call(t))))
          return i
        if (!e && 'function' == typeof (n = t.toString) && !r((i = n.call(t))))
          return i
        throw TypeError("Can't convert object to primitive value")
      }
    },
    bZMm: function(t, e) {
      ;(function(t) {
        'use strict'
        if (!t.fetch) {
          var e = {
            searchParams: 'URLSearchParams' in t,
            iterable: 'Symbol' in t && 'iterator' in Symbol,
            blob:
              'FileReader' in t &&
              'Blob' in t &&
              (function() {
                try {
                  return new Blob(), !0
                } catch (t) {
                  return !1
                }
              })(),
            formData: 'FormData' in t,
            arrayBuffer: 'ArrayBuffer' in t
          }
          if (e.arrayBuffer)
            var n = [
                '[object Int8Array]',
                '[object Uint8Array]',
                '[object Uint8ClampedArray]',
                '[object Int16Array]',
                '[object Uint16Array]',
                '[object Int32Array]',
                '[object Uint32Array]',
                '[object Float32Array]',
                '[object Float64Array]'
              ],
              r = function(t) {
                return t && DataView.prototype.isPrototypeOf(t)
              },
              i =
                ArrayBuffer.isView ||
                function(t) {
                  return t && n.indexOf(Object.prototype.toString.call(t)) > -1
                }
          ;(l.prototype.append = function(t, e) {
            ;(t = s(t)), (e = u(e))
            var n = this.map[t]
            this.map[t] = n ? n + ',' + e : e
          }),
            (l.prototype['delete'] = function(t) {
              delete this.map[s(t)]
            }),
            (l.prototype.get = function(t) {
              return (t = s(t)), this.has(t) ? this.map[t] : null
            }),
            (l.prototype.has = function(t) {
              return this.map.hasOwnProperty(s(t))
            }),
            (l.prototype.set = function(t, e) {
              this.map[s(t)] = u(e)
            }),
            (l.prototype.forEach = function(t, e) {
              for (var n in this.map)
                this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
            }),
            (l.prototype.keys = function() {
              var t = []
              return (
                this.forEach(function(e, n) {
                  t.push(n)
                }),
                c(t)
              )
            }),
            (l.prototype.values = function() {
              var t = []
              return (
                this.forEach(function(e) {
                  t.push(e)
                }),
                c(t)
              )
            }),
            (l.prototype.entries = function() {
              var t = []
              return (
                this.forEach(function(e, n) {
                  t.push([n, e])
                }),
                c(t)
              )
            }),
            e.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries)
          var o = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
          ;(m.prototype.clone = function() {
            return new m(this, { body: this._bodyInit })
          }),
            _.call(m.prototype),
            _.call(C.prototype),
            (C.prototype.clone = function() {
              return new C(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new l(this.headers),
                url: this.url
              })
            }),
            (C.error = function() {
              var t = new C(null, { status: 0, statusText: '' })
              return (t.type = 'error'), t
            })
          var a = [301, 302, 303, 307, 308]
          ;(C.redirect = function(t, e) {
            if (-1 === a.indexOf(e)) throw new RangeError('Invalid status code')
            return new C(null, { status: e, headers: { location: t } })
          }),
            (t.Headers = l),
            (t.Request = m),
            (t.Response = C),
            (t.fetch = function(t, n) {
              return new Promise(function(r, i) {
                var o = new m(t, n),
                  a = new XMLHttpRequest()
                ;(a.onload = function() {
                  var t = {
                    status: a.status,
                    statusText: a.statusText,
                    headers: w(a.getAllResponseHeaders() || '')
                  }
                  t.url =
                    'responseURL' in a
                      ? a.responseURL
                      : t.headers.get('X-Request-URL')
                  var e = 'response' in a ? a.response : a.responseText
                  r(new C(e, t))
                }),
                  (a.onerror = function() {
                    i(new TypeError('Network request failed'))
                  }),
                  (a.ontimeout = function() {
                    i(new TypeError('Network request failed'))
                  }),
                  a.open(o.method, o.url, !0),
                  'include' === o.credentials
                    ? (a.withCredentials = !0)
                    : 'omit' === o.credentials && (a.withCredentials = !1),
                  'responseType' in a && e.blob && (a.responseType = 'blob'),
                  o.headers.forEach(function(t, e) {
                    a.setRequestHeader(e, t)
                  }),
                  a.send(
                    'undefined' === typeof o._bodyInit ? null : o._bodyInit
                  )
              })
            }),
            (t.fetch.polyfill = !0)
        }
        function s(t) {
          if (
            ('string' !== typeof t && (t = String(t)),
            /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
          )
            throw new TypeError('Invalid character in header field name')
          return t.toLowerCase()
        }
        function u(t) {
          return 'string' !== typeof t && (t = String(t)), t
        }
        function c(t) {
          var n = {
            next: function() {
              var e = t.shift()
              return { done: void 0 === e, value: e }
            }
          }
          return (
            e.iterable &&
              (n[Symbol.iterator] = function() {
                return n
              }),
            n
          )
        }
        function l(t) {
          ;(this.map = {}),
            t instanceof l
              ? t.forEach(function(t, e) {
                  this.append(e, t)
                }, this)
              : Array.isArray(t)
                ? t.forEach(function(t) {
                    this.append(t[0], t[1])
                  }, this)
                : t &&
                  Object.getOwnPropertyNames(t).forEach(function(e) {
                    this.append(e, t[e])
                  }, this)
        }
        function h(t) {
          if (t.bodyUsed) return Promise.reject(new TypeError('Already read'))
          t.bodyUsed = !0
        }
        function p(t) {
          return new Promise(function(e, n) {
            ;(t.onload = function() {
              e(t.result)
            }),
              (t.onerror = function() {
                n(t.error)
              })
          })
        }
        function f(t) {
          var e = new FileReader(),
            n = p(e)
          return e.readAsArrayBuffer(t), n
        }
        function d(t) {
          var e = new FileReader(),
            n = p(e)
          return e.readAsText(t), n
        }
        function v(t) {
          for (
            var e = new Uint8Array(t), n = new Array(e.length), r = 0;
            r < e.length;
            r++
          )
            n[r] = String.fromCharCode(e[r])
          return n.join('')
        }
        function y(t) {
          if (t.slice) return t.slice(0)
          var e = new Uint8Array(t.byteLength)
          return e.set(new Uint8Array(t)), e.buffer
        }
        function _() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function(t) {
              if (((this._bodyInit = t), t))
                if ('string' === typeof t) this._bodyText = t
                else if (e.blob && Blob.prototype.isPrototypeOf(t))
                  this._bodyBlob = t
                else if (e.formData && FormData.prototype.isPrototypeOf(t))
                  this._bodyFormData = t
                else if (
                  e.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(t)
                )
                  this._bodyText = t.toString()
                else if (e.arrayBuffer && e.blob && r(t))
                  (this._bodyArrayBuffer = y(t.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer]))
                else {
                  if (
                    !e.arrayBuffer ||
                    (!ArrayBuffer.prototype.isPrototypeOf(t) && !i(t))
                  )
                    throw new Error('unsupported BodyInit type')
                  this._bodyArrayBuffer = y(t)
                }
              else this._bodyText = ''
              this.headers.get('content-type') ||
                ('string' === typeof t
                  ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                  : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set('content-type', this._bodyBlob.type)
                    : e.searchParams &&
                      URLSearchParams.prototype.isPrototypeOf(t) &&
                      this.headers.set(
                        'content-type',
                        'application/x-www-form-urlencoded;charset=UTF-8'
                      ))
            }),
            e.blob &&
              ((this.blob = function() {
                var t = h(this)
                if (t) return t
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob)
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]))
                if (this._bodyFormData)
                  throw new Error('could not read FormData body as blob')
                return Promise.resolve(new Blob([this._bodyText]))
              }),
              (this.arrayBuffer = function() {
                return this._bodyArrayBuffer
                  ? h(this) || Promise.resolve(this._bodyArrayBuffer)
                  : this.blob().then(f)
              })),
            (this.text = function() {
              var t = h(this)
              if (t) return t
              if (this._bodyBlob) return d(this._bodyBlob)
              if (this._bodyArrayBuffer)
                return Promise.resolve(v(this._bodyArrayBuffer))
              if (this._bodyFormData)
                throw new Error('could not read FormData body as text')
              return Promise.resolve(this._bodyText)
            }),
            e.formData &&
              (this.formData = function() {
                return this.text().then(b)
              }),
            (this.json = function() {
              return this.text().then(JSON.parse)
            }),
            this
          )
        }
        function g(t) {
          var e = t.toUpperCase()
          return o.indexOf(e) > -1 ? e : t
        }
        function m(t, e) {
          e = e || {}
          var n = e.body
          if (t instanceof m) {
            if (t.bodyUsed) throw new TypeError('Already read')
            ;(this.url = t.url),
              (this.credentials = t.credentials),
              e.headers || (this.headers = new l(t.headers)),
              (this.method = t.method),
              (this.mode = t.mode),
              n || null == t._bodyInit || ((n = t._bodyInit), (t.bodyUsed = !0))
          } else this.url = String(t)
          if (
            ((this.credentials = e.credentials || this.credentials || 'omit'),
            (!e.headers && this.headers) || (this.headers = new l(e.headers)),
            (this.method = g(e.method || this.method || 'GET')),
            (this.mode = e.mode || this.mode || null),
            (this.referrer = null),
            ('GET' === this.method || 'HEAD' === this.method) && n)
          )
            throw new TypeError('Body not allowed for GET or HEAD requests')
          this._initBody(n)
        }
        function b(t) {
          var e = new FormData()
          return (
            t
              .trim()
              .split('&')
              .forEach(function(t) {
                if (t) {
                  var n = t.split('='),
                    r = n.shift().replace(/\+/g, ' '),
                    i = n.join('=').replace(/\+/g, ' ')
                  e.append(decodeURIComponent(r), decodeURIComponent(i))
                }
              }),
            e
          )
        }
        function w(t) {
          var e = new l(),
            n = t.replace(/\r?\n[\t ]+/g, ' ')
          return (
            n.split(/\r?\n/).forEach(function(t) {
              var n = t.split(':'),
                r = n.shift().trim()
              if (r) {
                var i = n.join(':').trim()
                e.append(r, i)
              }
            }),
            e
          )
        }
        function C(t, e) {
          e || (e = {}),
            (this.type = 'default'),
            (this.status = void 0 === e.status ? 200 : e.status),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText = 'statusText' in e ? e.statusText : 'OK'),
            (this.headers = new l(e.headers)),
            (this.url = e.url || ''),
            this._initBody(t)
        }
      })('undefined' !== typeof self ? self : this)
    },
    'd/Gc': function(t, e, n) {
      var r = n('RYi7'),
        i = Math.max,
        o = Math.min
      t.exports = function(t, e) {
        return (t = r(t)), t < 0 ? i(t + e, 0) : o(t, e)
      }
    },
    dyZX: function(t, e) {
      var n = (t.exports =
        'undefined' != typeof window && window.Math == Math
          ? window
          : 'undefined' != typeof self && self.Math == Math
            ? self
            : Function('return this')())
      'number' == typeof __g && (__g = n)
    },
    eeVq: function(t, e) {
      t.exports = function(t) {
        try {
          return !!t()
        } catch (t) {
          return !0
        }
      }
    },
    elZq: function(t, e, n) {
      'use strict'
      var r = n('dyZX'),
        i = n('hswa'),
        o = n('nh4g'),
        a = n('K0xU')('species')
      t.exports = function(t) {
        var e = r[t]
        o &&
          e &&
          !e[a] &&
          i.f(e, a, {
            configurable: !0,
            get: function() {
              return this
            }
          })
      }
    },
    fyDq: function(t, e, n) {
      var r = n('hswa').f,
        i = n('aagx'),
        o = n('K0xU')('toStringTag')
      t.exports = function(t, e, n) {
        t &&
          !i((t = n ? t : t.prototype), o) &&
          r(t, o, { configurable: !0, value: e })
      }
    },
    g3g5: function(t, e) {
      var n = (t.exports = { version: '2.5.7' })
      'number' == typeof __e && (__e = n)
    },
    gHnn: function(t, e, n) {
      var r = n('dyZX'),
        i = n('GZEu').set,
        o = r.MutationObserver || r.WebKitMutationObserver,
        a = r.process,
        s = r.Promise,
        u = 'process' == n('LZWt')(a)
      t.exports = function() {
        var t,
          e,
          n,
          c = function() {
            var r, i
            u && (r = a.domain) && r.exit()
            while (t) {
              ;(i = t.fn), (t = t.next)
              try {
                i()
              } catch (r) {
                throw (t ? n() : (e = void 0), r)
              }
            }
            ;(e = void 0), r && r.enter()
          }
        if (u)
          n = function() {
            a.nextTick(c)
          }
        else if (!o || (r.navigator && r.navigator.standalone))
          if (s && s.resolve) {
            var l = s.resolve(void 0)
            n = function() {
              l.then(c)
            }
          } else
            n = function() {
              i.call(r, c)
            }
        else {
          var h = !0,
            p = document.createTextNode('')
          new o(c).observe(p, { characterData: !0 }),
            (n = function() {
              p.data = h = !h
            })
        }
        return function(r) {
          var i = { fn: r, next: void 0 }
          e && (e.next = i), t || ((t = i), n()), (e = i)
        }
      }
    },
    hPIQ: function(t, e) {
      t.exports = {}
    },
    hswa: function(t, e, n) {
      var r = n('y3w9'),
        i = n('xpql'),
        o = n('apmT'),
        a = Object.defineProperty
      e.f = n('nh4g')
        ? Object.defineProperty
        : function(t, e, n) {
            if ((r(t), (e = o(e, !0)), r(n), i))
              try {
                return a(t, e, n)
              } catch (t) {}
            if ('get' in n || 'set' in n)
              throw TypeError('Accessors not supported!')
            return 'value' in n && (t[e] = n.value), t
          }
    },
    i5dc: function(t, e, n) {
      var r = n('0/R4'),
        i = n('y3w9'),
        o = function(t, e) {
          if ((i(t), !r(e) && null !== e))
            throw TypeError(e + ": can't set as prototype!")
        }
      t.exports = {
        set:
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function(t, e, r) {
                try {
                  ;(r = n('m0Pp')(
                    Function.call,
                    n('EemH').f(Object.prototype, '__proto__').set,
                    2
                  )),
                    r(t, []),
                    (e = !(t instanceof Array))
                } catch (t) {
                  e = !0
                }
                return function(t, n) {
                  return o(t, n), e ? (t.__proto__ = n) : r(t, n), t
                }
              })({}, !1)
            : void 0),
        check: o
      }
    },
    jE9Z: function(t, e, n) {
      'use strict'
      function r(t, e) {
        0
      }
      function i(t) {
        return Object.prototype.toString.call(t).indexOf('Error') > -1
      }
      n.r(e)
      var o = {
        name: 'router-view',
        functional: !0,
        props: { name: { type: String, default: 'default' } },
        render: function(t, e) {
          var n = e.props,
            r = e.children,
            i = e.parent,
            o = e.data
          o.routerView = !0
          var u = i.$createElement,
            c = n.name,
            l = i.$route,
            h = i._routerViewCache || (i._routerViewCache = {}),
            p = 0,
            f = !1
          while (i && i._routerRoot !== i)
            i.$vnode && i.$vnode.data.routerView && p++,
              i._inactive && (f = !0),
              (i = i.$parent)
          if (((o.routerViewDepth = p), f)) return u(h[c], o, r)
          var d = l.matched[p]
          if (!d) return (h[c] = null), u()
          var v = (h[c] = d.components[c])
          ;(o.registerRouteInstance = function(t, e) {
            var n = d.instances[c]
            ;((e && n !== t) || (!e && n === t)) && (d.instances[c] = e)
          }),
            ((o.hook || (o.hook = {})).prepatch = function(t, e) {
              d.instances[c] = e.componentInstance
            })
          var y = (o.props = a(l, d.props && d.props[c]))
          if (y) {
            y = o.props = s({}, y)
            var _ = (o.attrs = o.attrs || {})
            for (var g in y)
              (v.props && g in v.props) || ((_[g] = y[g]), delete y[g])
          }
          return u(v, o, r)
        }
      }
      function a(t, e) {
        switch (typeof e) {
          case 'undefined':
            return
          case 'object':
            return e
          case 'function':
            return e(t)
          case 'boolean':
            return e ? t.params : void 0
          default:
            0
        }
      }
      function s(t, e) {
        for (var n in e) t[n] = e[n]
        return t
      }
      var u = /[!'()*]/g,
        c = function(t) {
          return '%' + t.charCodeAt(0).toString(16)
        },
        l = /%2C/g,
        h = function(t) {
          return encodeURIComponent(t)
            .replace(u, c)
            .replace(l, ',')
        },
        p = decodeURIComponent
      function f(t, e, n) {
        void 0 === e && (e = {})
        var r,
          i = n || d
        try {
          r = i(t || '')
        } catch (t) {
          r = {}
        }
        for (var o in e) r[o] = e[o]
        return r
      }
      function d(t) {
        var e = {}
        return (
          (t = t.trim().replace(/^(\?|#|&)/, '')),
          t
            ? (t.split('&').forEach(function(t) {
                var n = t.replace(/\+/g, ' ').split('='),
                  r = p(n.shift()),
                  i = n.length > 0 ? p(n.join('=')) : null
                void 0 === e[r]
                  ? (e[r] = i)
                  : Array.isArray(e[r])
                    ? e[r].push(i)
                    : (e[r] = [e[r], i])
              }),
              e)
            : e
        )
      }
      function v(t) {
        var e = t
          ? Object.keys(t)
              .map(function(e) {
                var n = t[e]
                if (void 0 === n) return ''
                if (null === n) return h(e)
                if (Array.isArray(n)) {
                  var r = []
                  return (
                    n.forEach(function(t) {
                      void 0 !== t &&
                        (null === t ? r.push(h(e)) : r.push(h(e) + '=' + h(t)))
                    }),
                    r.join('&')
                  )
                }
                return h(e) + '=' + h(n)
              })
              .filter(function(t) {
                return t.length > 0
              })
              .join('&')
          : null
        return e ? '?' + e : ''
      }
      var y = /\/?$/
      function _(t, e, n, r) {
        var i = r && r.options.stringifyQuery,
          o = e.query || {}
        try {
          o = g(o)
        } catch (t) {}
        var a = {
          name: e.name || (t && t.name),
          meta: (t && t.meta) || {},
          path: e.path || '/',
          hash: e.hash || '',
          query: o,
          params: e.params || {},
          fullPath: w(e, i),
          matched: t ? b(t) : []
        }
        return n && (a.redirectedFrom = w(n, i)), Object.freeze(a)
      }
      function g(t) {
        if (Array.isArray(t)) return t.map(g)
        if (t && 'object' === typeof t) {
          var e = {}
          for (var n in t) e[n] = g(t[n])
          return e
        }
        return t
      }
      var m = _(null, { path: '/' })
      function b(t) {
        var e = []
        while (t) e.unshift(t), (t = t.parent)
        return e
      }
      function w(t, e) {
        var n = t.path,
          r = t.query
        void 0 === r && (r = {})
        var i = t.hash
        void 0 === i && (i = '')
        var o = e || v
        return (n || '/') + o(r) + i
      }
      function C(t, e) {
        return e === m
          ? t === e
          : !!e &&
              (t.path && e.path
                ? t.path.replace(y, '') === e.path.replace(y, '') &&
                  t.hash === e.hash &&
                  E(t.query, e.query)
                : !(!t.name || !e.name) &&
                  (t.name === e.name &&
                    t.hash === e.hash &&
                    E(t.query, e.query) &&
                    E(t.params, e.params)))
      }
      function E(t, e) {
        if ((void 0 === t && (t = {}), void 0 === e && (e = {}), !t || !e))
          return t === e
        var n = Object.keys(t),
          r = Object.keys(e)
        return (
          n.length === r.length &&
          n.every(function(n) {
            var r = t[n],
              i = e[n]
            return 'object' === typeof r && 'object' === typeof i
              ? E(r, i)
              : String(r) === String(i)
          })
        )
      }
      function S(t, e) {
        return (
          0 === t.path.replace(y, '/').indexOf(e.path.replace(y, '/')) &&
          (!e.hash || t.hash === e.hash) &&
          T(t.query, e.query)
        )
      }
      function T(t, e) {
        for (var n in e) if (!(n in t)) return !1
        return !0
      }
      var x,
        O = [String, Object],
        A = [String, Array],
        P = {
          name: 'router-link',
          props: {
            to: { type: O, required: !0 },
            tag: { type: String, default: 'a' },
            exact: Boolean,
            append: Boolean,
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            event: { type: A, default: 'click' }
          },
          render: function(t) {
            var e = this,
              n = this.$router,
              r = this.$route,
              i = n.resolve(this.to, r, this.append),
              o = i.location,
              a = i.route,
              s = i.href,
              u = {},
              c = n.options.linkActiveClass,
              l = n.options.linkExactActiveClass,
              h = null == c ? 'router-link-active' : c,
              p = null == l ? 'router-link-exact-active' : l,
              f = null == this.activeClass ? h : this.activeClass,
              d = null == this.exactActiveClass ? p : this.exactActiveClass,
              v = o.path ? _(null, o, null, n) : a
            ;(u[d] = C(r, v)), (u[f] = this.exact ? u[d] : S(r, v))
            var y = function(t) {
                I(t) && (e.replace ? n.replace(o) : n.push(o))
              },
              g = { click: I }
            Array.isArray(this.event)
              ? this.event.forEach(function(t) {
                  g[t] = y
                })
              : (g[this.event] = y)
            var m = { class: u }
            if ('a' === this.tag) (m.on = g), (m.attrs = { href: s })
            else {
              var b = N(this.$slots.default)
              if (b) {
                b.isStatic = !1
                var w = x.util.extend,
                  E = (b.data = w({}, b.data))
                E.on = g
                var T = (b.data.attrs = w({}, b.data.attrs))
                T.href = s
              } else m.on = g
            }
            return t(this.tag, m, this.$slots.default)
          }
        }
      function I(t) {
        if (
          !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) &&
          !t.defaultPrevented &&
          (void 0 === t.button || 0 === t.button)
        ) {
          if (t.currentTarget && t.currentTarget.getAttribute) {
            var e = t.currentTarget.getAttribute('target')
            if (/\b_blank\b/i.test(e)) return
          }
          return t.preventDefault && t.preventDefault(), !0
        }
      }
      function N(t) {
        if (t)
          for (var e, n = 0; n < t.length; n++) {
            if (((e = t[n]), 'a' === e.tag)) return e
            if (e.children && (e = N(e.children))) return e
          }
      }
      function k(t) {
        if (!k.installed || x !== t) {
          ;(k.installed = !0), (x = t)
          var e = function(t) {
              return void 0 !== t
            },
            n = function(t, n) {
              var r = t.$options._parentVnode
              e(r) &&
                e((r = r.data)) &&
                e((r = r.registerRouteInstance)) &&
                r(t, n)
            }
          t.mixin({
            beforeCreate: function() {
              e(this.$options.router)
                ? ((this._routerRoot = this),
                  (this._router = this.$options.router),
                  this._router.init(this),
                  t.util.defineReactive(
                    this,
                    '_route',
                    this._router.history.current
                  ))
                : (this._routerRoot =
                    (this.$parent && this.$parent._routerRoot) || this),
                n(this, this)
            },
            destroyed: function() {
              n(this)
            }
          }),
            Object.defineProperty(t.prototype, '$router', {
              get: function() {
                return this._routerRoot._router
              }
            }),
            Object.defineProperty(t.prototype, '$route', {
              get: function() {
                return this._routerRoot._route
              }
            }),
            t.component('router-view', o),
            t.component('router-link', P)
          var r = t.config.optionMergeStrategies
          r.beforeRouteEnter = r.beforeRouteLeave = r.beforeRouteUpdate =
            r.created
        }
      }
      var R = 'undefined' !== typeof window
      function D(t, e, n) {
        var r = t.charAt(0)
        if ('/' === r) return t
        if ('?' === r || '#' === r) return e + t
        var i = e.split('/')
        ;(n && i[i.length - 1]) || i.pop()
        for (
          var o = t.replace(/^\//, '').split('/'), a = 0;
          a < o.length;
          a++
        ) {
          var s = o[a]
          '..' === s ? i.pop() : '.' !== s && i.push(s)
        }
        return '' !== i[0] && i.unshift(''), i.join('/')
      }
      function F(t) {
        var e = '',
          n = '',
          r = t.indexOf('#')
        r >= 0 && ((e = t.slice(r)), (t = t.slice(0, r)))
        var i = t.indexOf('?')
        return (
          i >= 0 && ((n = t.slice(i + 1)), (t = t.slice(0, i))),
          { path: t, query: n, hash: e }
        )
      }
      function L(t) {
        return t.replace(/\/\//g, '/')
      }
      var M =
          Array.isArray ||
          function(t) {
            return '[object Array]' == Object.prototype.toString.call(t)
          },
        j = rt,
        U = Q,
        W = B,
        q = z,
        V = nt,
        $ = new RegExp(
          [
            '(\\\\.)',
            '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
          ].join('|'),
          'g'
        )
      function Q(t, e) {
        var n,
          r = [],
          i = 0,
          o = 0,
          a = '',
          s = (e && e.delimiter) || '/'
        while (null != (n = $.exec(t))) {
          var u = n[0],
            c = n[1],
            l = n.index
          if (((a += t.slice(o, l)), (o = l + u.length), c)) a += c[1]
          else {
            var h = t[o],
              p = n[2],
              f = n[3],
              d = n[4],
              v = n[5],
              y = n[6],
              _ = n[7]
            a && (r.push(a), (a = ''))
            var g = null != p && null != h && h !== p,
              m = '+' === y || '*' === y,
              b = '?' === y || '*' === y,
              w = n[2] || s,
              C = d || v
            r.push({
              name: f || i++,
              prefix: p || '',
              delimiter: w,
              optional: b,
              repeat: m,
              partial: g,
              asterisk: !!_,
              pattern: C ? Y(C) : _ ? '.*' : '[^' + G(w) + ']+?'
            })
          }
        }
        return o < t.length && (a += t.substr(o)), a && r.push(a), r
      }
      function B(t, e) {
        return z(Q(t, e))
      }
      function H(t) {
        return encodeURI(t).replace(/[\/?#]/g, function(t) {
          return (
            '%' +
            t
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
          )
        })
      }
      function K(t) {
        return encodeURI(t).replace(/[?#]/g, function(t) {
          return (
            '%' +
            t
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
          )
        })
      }
      function z(t) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++)
          'object' === typeof t[n] &&
            (e[n] = new RegExp('^(?:' + t[n].pattern + ')$'))
        return function(n, r) {
          for (
            var i = '',
              o = n || {},
              a = r || {},
              s = a.pretty ? H : encodeURIComponent,
              u = 0;
            u < t.length;
            u++
          ) {
            var c = t[u]
            if ('string' !== typeof c) {
              var l,
                h = o[c.name]
              if (null == h) {
                if (c.optional) {
                  c.partial && (i += c.prefix)
                  continue
                }
                throw new TypeError('Expected "' + c.name + '" to be defined')
              }
              if (M(h)) {
                if (!c.repeat)
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to not repeat, but received `' +
                      JSON.stringify(h) +
                      '`'
                  )
                if (0 === h.length) {
                  if (c.optional) continue
                  throw new TypeError(
                    'Expected "' + c.name + '" to not be empty'
                  )
                }
                for (var p = 0; p < h.length; p++) {
                  if (((l = s(h[p])), !e[u].test(l)))
                    throw new TypeError(
                      'Expected all "' +
                        c.name +
                        '" to match "' +
                        c.pattern +
                        '", but received `' +
                        JSON.stringify(l) +
                        '`'
                    )
                  i += (0 === p ? c.prefix : c.delimiter) + l
                }
              } else {
                if (((l = c.asterisk ? K(h) : s(h)), !e[u].test(l)))
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to match "' +
                      c.pattern +
                      '", but received "' +
                      l +
                      '"'
                  )
                i += c.prefix + l
              }
            } else i += c
          }
          return i
        }
      }
      function G(t) {
        return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
      }
      function Y(t) {
        return t.replace(/([=!:$\/()])/g, '\\$1')
      }
      function X(t, e) {
        return (t.keys = e), t
      }
      function J(t) {
        return t.sensitive ? '' : 'i'
      }
      function Z(t, e) {
        var n = t.source.match(/\((?!\?)/g)
        if (n)
          for (var r = 0; r < n.length; r++)
            e.push({
              name: r,
              prefix: null,
              delimiter: null,
              optional: !1,
              repeat: !1,
              partial: !1,
              asterisk: !1,
              pattern: null
            })
        return X(t, e)
      }
      function tt(t, e, n) {
        for (var r = [], i = 0; i < t.length; i++) r.push(rt(t[i], e, n).source)
        var o = new RegExp('(?:' + r.join('|') + ')', J(n))
        return X(o, e)
      }
      function et(t, e, n) {
        return nt(Q(t, n), e, n)
      }
      function nt(t, e, n) {
        M(e) || ((n = e || n), (e = [])), (n = n || {})
        for (
          var r = n.strict, i = !1 !== n.end, o = '', a = 0;
          a < t.length;
          a++
        ) {
          var s = t[a]
          if ('string' === typeof s) o += G(s)
          else {
            var u = G(s.prefix),
              c = '(?:' + s.pattern + ')'
            e.push(s),
              s.repeat && (c += '(?:' + u + c + ')*'),
              (c = s.optional
                ? s.partial
                  ? u + '(' + c + ')?'
                  : '(?:' + u + '(' + c + '))?'
                : u + '(' + c + ')'),
              (o += c)
          }
        }
        var l = G(n.delimiter || '/'),
          h = o.slice(-l.length) === l
        return (
          r || (o = (h ? o.slice(0, -l.length) : o) + '(?:' + l + '(?=$))?'),
          (o += i ? '$' : r && h ? '' : '(?=' + l + '|$)'),
          X(new RegExp('^' + o, J(n)), e)
        )
      }
      function rt(t, e, n) {
        return (
          M(e) || ((n = e || n), (e = [])),
          (n = n || {}),
          t instanceof RegExp ? Z(t, e) : M(t) ? tt(t, e, n) : et(t, e, n)
        )
      }
      ;(j.parse = U),
        (j.compile = W),
        (j.tokensToFunction = q),
        (j.tokensToRegExp = V)
      var it = Object.create(null)
      function ot(t, e, n) {
        try {
          var r = it[t] || (it[t] = j.compile(t))
          return r(e || {}, { pretty: !0 })
        } catch (t) {
          return ''
        }
      }
      function at(t, e, n, r) {
        var i = e || [],
          o = n || Object.create(null),
          a = r || Object.create(null)
        t.forEach(function(t) {
          st(i, o, a, t)
        })
        for (var s = 0, u = i.length; s < u; s++)
          '*' === i[s] && (i.push(i.splice(s, 1)[0]), u--, s--)
        return { pathList: i, pathMap: o, nameMap: a }
      }
      function st(t, e, n, r, i, o) {
        var a = r.path,
          s = r.name
        var u = r.pathToRegexpOptions || {},
          c = ct(a, i, u.strict)
        'boolean' === typeof r.caseSensitive && (u.sensitive = r.caseSensitive)
        var l = {
          path: c,
          regex: ut(c, u),
          components: r.components || { default: r.component },
          instances: {},
          name: s,
          parent: i,
          matchAs: o,
          redirect: r.redirect,
          beforeEnter: r.beforeEnter,
          meta: r.meta || {},
          props:
            null == r.props ? {} : r.components ? r.props : { default: r.props }
        }
        if (
          (r.children &&
            r.children.forEach(function(r) {
              var i = o ? L(o + '/' + r.path) : void 0
              st(t, e, n, r, l, i)
            }),
          void 0 !== r.alias)
        ) {
          var h = Array.isArray(r.alias) ? r.alias : [r.alias]
          h.forEach(function(o) {
            var a = { path: o, children: r.children }
            st(t, e, n, a, i, l.path || '/')
          })
        }
        e[l.path] || (t.push(l.path), (e[l.path] = l)),
          s && (n[s] || (n[s] = l))
      }
      function ut(t, e) {
        var n = j(t, [], e)
        return n
      }
      function ct(t, e, n) {
        return (
          n || (t = t.replace(/\/$/, '')),
          '/' === t[0] ? t : null == e ? t : L(e.path + '/' + t)
        )
      }
      function lt(t, e, n, r) {
        var i = 'string' === typeof t ? { path: t } : t
        if (i.name || i._normalized) return i
        if (!i.path && i.params && e) {
          ;(i = ht({}, i)), (i._normalized = !0)
          var o = ht(ht({}, e.params), i.params)
          if (e.name) (i.name = e.name), (i.params = o)
          else if (e.matched.length) {
            var a = e.matched[e.matched.length - 1].path
            i.path = ot(a, o, 'path ' + e.path)
          } else 0
          return i
        }
        var s = F(i.path || ''),
          u = (e && e.path) || '/',
          c = s.path ? D(s.path, u, n || i.append) : u,
          l = f(s.query, i.query, r && r.options.parseQuery),
          h = i.hash || s.hash
        return (
          h && '#' !== h.charAt(0) && (h = '#' + h),
          { _normalized: !0, path: c, query: l, hash: h }
        )
      }
      function ht(t, e) {
        for (var n in e) t[n] = e[n]
        return t
      }
      function pt(t, e) {
        var n = at(t),
          r = n.pathList,
          i = n.pathMap,
          o = n.nameMap
        function a(t) {
          at(t, r, i, o)
        }
        function s(t, n, a) {
          var s = lt(t, n, !1, e),
            u = s.name
          if (u) {
            var c = o[u]
            if (!c) return l(null, s)
            var h = c.regex.keys
              .filter(function(t) {
                return !t.optional
              })
              .map(function(t) {
                return t.name
              })
            if (
              ('object' !== typeof s.params && (s.params = {}),
              n && 'object' === typeof n.params)
            )
              for (var p in n.params)
                !(p in s.params) &&
                  h.indexOf(p) > -1 &&
                  (s.params[p] = n.params[p])
            if (c)
              return (
                (s.path = ot(c.path, s.params, 'named route "' + u + '"')),
                l(c, s, a)
              )
          } else if (s.path) {
            s.params = {}
            for (var f = 0; f < r.length; f++) {
              var d = r[f],
                v = i[d]
              if (ft(v.regex, s.path, s.params)) return l(v, s, a)
            }
          }
          return l(null, s)
        }
        function u(t, n) {
          var r = t.redirect,
            i = 'function' === typeof r ? r(_(t, n, null, e)) : r
          if (
            ('string' === typeof i && (i = { path: i }),
            !i || 'object' !== typeof i)
          )
            return l(null, n)
          var a = i,
            u = a.name,
            c = a.path,
            h = n.query,
            p = n.hash,
            f = n.params
          if (
            ((h = a.hasOwnProperty('query') ? a.query : h),
            (p = a.hasOwnProperty('hash') ? a.hash : p),
            (f = a.hasOwnProperty('params') ? a.params : f),
            u)
          ) {
            o[u]
            return s(
              { _normalized: !0, name: u, query: h, hash: p, params: f },
              void 0,
              n
            )
          }
          if (c) {
            var d = dt(c, t),
              v = ot(d, f, 'redirect route with path "' + d + '"')
            return s({ _normalized: !0, path: v, query: h, hash: p }, void 0, n)
          }
          return l(null, n)
        }
        function c(t, e, n) {
          var r = ot(n, e.params, 'aliased route with path "' + n + '"'),
            i = s({ _normalized: !0, path: r })
          if (i) {
            var o = i.matched,
              a = o[o.length - 1]
            return (e.params = i.params), l(a, e)
          }
          return l(null, e)
        }
        function l(t, n, r) {
          return t && t.redirect
            ? u(t, r || n)
            : t && t.matchAs
              ? c(t, n, t.matchAs)
              : _(t, n, r, e)
        }
        return { match: s, addRoutes: a }
      }
      function ft(t, e, n) {
        var r = e.match(t)
        if (!r) return !1
        if (!n) return !0
        for (var i = 1, o = r.length; i < o; ++i) {
          var a = t.keys[i - 1],
            s = 'string' === typeof r[i] ? decodeURIComponent(r[i]) : r[i]
          a && (n[a.name] = s)
        }
        return !0
      }
      function dt(t, e) {
        return D(t, e.parent ? e.parent.path : '/', !0)
      }
      var vt = Object.create(null)
      function yt() {
        window.history.replaceState({ key: It() }, ''),
          window.addEventListener('popstate', function(t) {
            gt(), t.state && t.state.key && Nt(t.state.key)
          })
      }
      function _t(t, e, n, r) {
        if (t.app) {
          var i = t.options.scrollBehavior
          i &&
            t.app.$nextTick(function() {
              var t = mt(),
                o = i(e, n, r ? t : null)
              o &&
                ('function' === typeof o.then
                  ? o
                      .then(function(e) {
                        Tt(e, t)
                      })
                      .catch(function(t) {
                        0
                      })
                  : Tt(o, t))
            })
        }
      }
      function gt() {
        var t = It()
        t && (vt[t] = { x: window.pageXOffset, y: window.pageYOffset })
      }
      function mt() {
        var t = It()
        if (t) return vt[t]
      }
      function bt(t, e) {
        var n = document.documentElement,
          r = n.getBoundingClientRect(),
          i = t.getBoundingClientRect()
        return { x: i.left - r.left - e.x, y: i.top - r.top - e.y }
      }
      function wt(t) {
        return St(t.x) || St(t.y)
      }
      function Ct(t) {
        return {
          x: St(t.x) ? t.x : window.pageXOffset,
          y: St(t.y) ? t.y : window.pageYOffset
        }
      }
      function Et(t) {
        return { x: St(t.x) ? t.x : 0, y: St(t.y) ? t.y : 0 }
      }
      function St(t) {
        return 'number' === typeof t
      }
      function Tt(t, e) {
        var n = 'object' === typeof t
        if (n && 'string' === typeof t.selector) {
          var r = document.querySelector(t.selector)
          if (r) {
            var i = t.offset && 'object' === typeof t.offset ? t.offset : {}
            ;(i = Et(i)), (e = bt(r, i))
          } else wt(t) && (e = Ct(t))
        } else n && wt(t) && (e = Ct(t))
        e && window.scrollTo(e.x, e.y)
      }
      var xt =
          R &&
          (function() {
            var t = window.navigator.userAgent
            return (
              ((-1 === t.indexOf('Android 2.') &&
                -1 === t.indexOf('Android 4.0')) ||
                -1 === t.indexOf('Mobile Safari') ||
                -1 !== t.indexOf('Chrome') ||
                -1 !== t.indexOf('Windows Phone')) &&
              (window.history && 'pushState' in window.history)
            )
          })(),
        Ot =
          R && window.performance && window.performance.now
            ? window.performance
            : Date,
        At = Pt()
      function Pt() {
        return Ot.now().toFixed(3)
      }
      function It() {
        return At
      }
      function Nt(t) {
        At = t
      }
      function kt(t, e) {
        gt()
        var n = window.history
        try {
          e
            ? n.replaceState({ key: At }, '', t)
            : ((At = Pt()), n.pushState({ key: At }, '', t))
        } catch (n) {
          window.location[e ? 'replace' : 'assign'](t)
        }
      }
      function Rt(t) {
        kt(t, !0)
      }
      function Dt(t, e, n) {
        var r = function(i) {
          i >= t.length
            ? n()
            : t[i]
              ? e(t[i], function() {
                  r(i + 1)
                })
              : r(i + 1)
        }
        r(0)
      }
      function Ft(t) {
        return function(e, n, r) {
          var o = !1,
            a = 0,
            s = null
          Lt(t, function(t, e, n, u) {
            if ('function' === typeof t && void 0 === t.cid) {
              ;(o = !0), a++
              var c,
                l = Wt(function(e) {
                  Ut(e) && (e = e.default),
                    (t.resolved = 'function' === typeof e ? e : x.extend(e)),
                    (n.components[u] = e),
                    a--,
                    a <= 0 && r()
                }),
                h = Wt(function(t) {
                  var e = 'Failed to resolve async component ' + u + ': ' + t
                  s || ((s = i(t) ? t : new Error(e)), r(s))
                })
              try {
                c = t(l, h)
              } catch (t) {
                h(t)
              }
              if (c)
                if ('function' === typeof c.then) c.then(l, h)
                else {
                  var p = c.component
                  p && 'function' === typeof p.then && p.then(l, h)
                }
            }
          }),
            o || r()
        }
      }
      function Lt(t, e) {
        return Mt(
          t.map(function(t) {
            return Object.keys(t.components).map(function(n) {
              return e(t.components[n], t.instances[n], t, n)
            })
          })
        )
      }
      function Mt(t) {
        return Array.prototype.concat.apply([], t)
      }
      var jt =
        'function' === typeof Symbol && 'symbol' === typeof Symbol.toStringTag
      function Ut(t) {
        return t.__esModule || (jt && 'Module' === t[Symbol.toStringTag])
      }
      function Wt(t) {
        var e = !1
        return function() {
          var n = [],
            r = arguments.length
          while (r--) n[r] = arguments[r]
          if (!e) return (e = !0), t.apply(this, n)
        }
      }
      var qt = function(t, e) {
        ;(this.router = t),
          (this.base = Vt(e)),
          (this.current = m),
          (this.pending = null),
          (this.ready = !1),
          (this.readyCbs = []),
          (this.readyErrorCbs = []),
          (this.errorCbs = [])
      }
      function Vt(t) {
        if (!t)
          if (R) {
            var e = document.querySelector('base')
            ;(t = (e && e.getAttribute('href')) || '/'),
              (t = t.replace(/^https?:\/\/[^\/]+/, ''))
          } else t = '/'
        return '/' !== t.charAt(0) && (t = '/' + t), t.replace(/\/$/, '')
      }
      function $t(t, e) {
        var n,
          r = Math.max(t.length, e.length)
        for (n = 0; n < r; n++) if (t[n] !== e[n]) break
        return {
          updated: e.slice(0, n),
          activated: e.slice(n),
          deactivated: t.slice(n)
        }
      }
      function Qt(t, e, n, r) {
        var i = Lt(t, function(t, r, i, o) {
          var a = Bt(t, e)
          if (a)
            return Array.isArray(a)
              ? a.map(function(t) {
                  return n(t, r, i, o)
                })
              : n(a, r, i, o)
        })
        return Mt(r ? i.reverse() : i)
      }
      function Bt(t, e) {
        return 'function' !== typeof t && (t = x.extend(t)), t.options[e]
      }
      function Ht(t) {
        return Qt(t, 'beforeRouteLeave', zt, !0)
      }
      function Kt(t) {
        return Qt(t, 'beforeRouteUpdate', zt)
      }
      function zt(t, e) {
        if (e)
          return function() {
            return t.apply(e, arguments)
          }
      }
      function Gt(t, e, n) {
        return Qt(t, 'beforeRouteEnter', function(t, r, i, o) {
          return Yt(t, i, o, e, n)
        })
      }
      function Yt(t, e, n, r, i) {
        return function(o, a, s) {
          return t(o, a, function(t) {
            s(t),
              'function' === typeof t &&
                r.push(function() {
                  Xt(t, e.instances, n, i)
                })
          })
        }
      }
      function Xt(t, e, n, r) {
        e[n]
          ? t(e[n])
          : r() &&
            setTimeout(function() {
              Xt(t, e, n, r)
            }, 16)
      }
      ;(qt.prototype.listen = function(t) {
        this.cb = t
      }),
        (qt.prototype.onReady = function(t, e) {
          this.ready
            ? t()
            : (this.readyCbs.push(t), e && this.readyErrorCbs.push(e))
        }),
        (qt.prototype.onError = function(t) {
          this.errorCbs.push(t)
        }),
        (qt.prototype.transitionTo = function(t, e, n) {
          var r = this,
            i = this.router.match(t, this.current)
          this.confirmTransition(
            i,
            function() {
              r.updateRoute(i),
                e && e(i),
                r.ensureURL(),
                r.ready ||
                  ((r.ready = !0),
                  r.readyCbs.forEach(function(t) {
                    t(i)
                  }))
            },
            function(t) {
              n && n(t),
                t &&
                  !r.ready &&
                  ((r.ready = !0),
                  r.readyErrorCbs.forEach(function(e) {
                    e(t)
                  }))
            }
          )
        }),
        (qt.prototype.confirmTransition = function(t, e, n) {
          var o = this,
            a = this.current,
            s = function(t) {
              i(t) &&
                (o.errorCbs.length
                  ? o.errorCbs.forEach(function(e) {
                      e(t)
                    })
                  : (r(!1, 'uncaught error during route navigation:'),
                    console.error(t))),
                n && n(t)
            }
          if (C(t, a) && t.matched.length === a.matched.length)
            return this.ensureURL(), s()
          var u = $t(this.current.matched, t.matched),
            c = u.updated,
            l = u.deactivated,
            h = u.activated,
            p = [].concat(
              Ht(l),
              this.router.beforeHooks,
              Kt(c),
              h.map(function(t) {
                return t.beforeEnter
              }),
              Ft(h)
            )
          this.pending = t
          var f = function(e, n) {
            if (o.pending !== t) return s()
            try {
              e(t, a, function(t) {
                !1 === t || i(t)
                  ? (o.ensureURL(!0), s(t))
                  : 'string' === typeof t ||
                    ('object' === typeof t &&
                      ('string' === typeof t.path ||
                        'string' === typeof t.name))
                    ? (s(),
                      'object' === typeof t && t.replace
                        ? o.replace(t)
                        : o.push(t))
                    : n(t)
              })
            } catch (t) {
              s(t)
            }
          }
          Dt(p, f, function() {
            var n = [],
              r = function() {
                return o.current === t
              },
              i = Gt(h, n, r),
              a = i.concat(o.router.resolveHooks)
            Dt(a, f, function() {
              if (o.pending !== t) return s()
              ;(o.pending = null),
                e(t),
                o.router.app &&
                  o.router.app.$nextTick(function() {
                    n.forEach(function(t) {
                      t()
                    })
                  })
            })
          })
        }),
        (qt.prototype.updateRoute = function(t) {
          var e = this.current
          ;(this.current = t),
            this.cb && this.cb(t),
            this.router.afterHooks.forEach(function(n) {
              n && n(t, e)
            })
        })
      var Jt = (function(t) {
        function e(e, n) {
          var r = this
          t.call(this, e, n)
          var i = e.options.scrollBehavior
          i && yt()
          var o = Zt(this.base)
          window.addEventListener('popstate', function(t) {
            var n = r.current,
              a = Zt(r.base)
            ;(r.current === m && a === o) ||
              r.transitionTo(a, function(t) {
                i && _t(e, t, n, !0)
              })
          })
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.prototype.go = function(t) {
            window.history.go(t)
          }),
          (e.prototype.push = function(t, e, n) {
            var r = this,
              i = this,
              o = i.current
            this.transitionTo(
              t,
              function(t) {
                kt(L(r.base + t.fullPath)), _t(r.router, t, o, !1), e && e(t)
              },
              n
            )
          }),
          (e.prototype.replace = function(t, e, n) {
            var r = this,
              i = this,
              o = i.current
            this.transitionTo(
              t,
              function(t) {
                Rt(L(r.base + t.fullPath)), _t(r.router, t, o, !1), e && e(t)
              },
              n
            )
          }),
          (e.prototype.ensureURL = function(t) {
            if (Zt(this.base) !== this.current.fullPath) {
              var e = L(this.base + this.current.fullPath)
              t ? kt(e) : Rt(e)
            }
          }),
          (e.prototype.getCurrentLocation = function() {
            return Zt(this.base)
          }),
          e
        )
      })(qt)
      function Zt(t) {
        var e = window.location.pathname
        return (
          t && 0 === e.indexOf(t) && (e = e.slice(t.length)),
          (e || '/') + window.location.search + window.location.hash
        )
      }
      var te = (function(t) {
        function e(e, n, r) {
          t.call(this, e, n), (r && ee(this.base)) || ne()
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.prototype.setupListeners = function() {
            var t = this,
              e = this.router,
              n = e.options.scrollBehavior,
              r = xt && n
            r && yt(),
              window.addEventListener(
                xt ? 'popstate' : 'hashchange',
                function() {
                  var e = t.current
                  ne() &&
                    t.transitionTo(re(), function(n) {
                      r && _t(t.router, n, e, !0), xt || ae(n.fullPath)
                    })
                }
              )
          }),
          (e.prototype.push = function(t, e, n) {
            var r = this,
              i = this,
              o = i.current
            this.transitionTo(
              t,
              function(t) {
                oe(t.fullPath), _t(r.router, t, o, !1), e && e(t)
              },
              n
            )
          }),
          (e.prototype.replace = function(t, e, n) {
            var r = this,
              i = this,
              o = i.current
            this.transitionTo(
              t,
              function(t) {
                ae(t.fullPath), _t(r.router, t, o, !1), e && e(t)
              },
              n
            )
          }),
          (e.prototype.go = function(t) {
            window.history.go(t)
          }),
          (e.prototype.ensureURL = function(t) {
            var e = this.current.fullPath
            re() !== e && (t ? oe(e) : ae(e))
          }),
          (e.prototype.getCurrentLocation = function() {
            return re()
          }),
          e
        )
      })(qt)
      function ee(t) {
        var e = Zt(t)
        if (!/^\/#/.test(e)) return window.location.replace(L(t + '/#' + e)), !0
      }
      function ne() {
        var t = re()
        return '/' === t.charAt(0) || (ae('/' + t), !1)
      }
      function re() {
        var t = window.location.href,
          e = t.indexOf('#')
        return -1 === e ? '' : t.slice(e + 1)
      }
      function ie(t) {
        var e = window.location.href,
          n = e.indexOf('#'),
          r = n >= 0 ? e.slice(0, n) : e
        return r + '#' + t
      }
      function oe(t) {
        xt ? kt(ie(t)) : (window.location.hash = t)
      }
      function ae(t) {
        xt ? Rt(ie(t)) : window.location.replace(ie(t))
      }
      var se = (function(t) {
          function e(e, n) {
            t.call(this, e, n), (this.stack = []), (this.index = -1)
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.push = function(t, e, n) {
              var r = this
              this.transitionTo(
                t,
                function(t) {
                  ;(r.stack = r.stack.slice(0, r.index + 1).concat(t)),
                    r.index++,
                    e && e(t)
                },
                n
              )
            }),
            (e.prototype.replace = function(t, e, n) {
              var r = this
              this.transitionTo(
                t,
                function(t) {
                  ;(r.stack = r.stack.slice(0, r.index).concat(t)), e && e(t)
                },
                n
              )
            }),
            (e.prototype.go = function(t) {
              var e = this,
                n = this.index + t
              if (!(n < 0 || n >= this.stack.length)) {
                var r = this.stack[n]
                this.confirmTransition(r, function() {
                  ;(e.index = n), e.updateRoute(r)
                })
              }
            }),
            (e.prototype.getCurrentLocation = function() {
              var t = this.stack[this.stack.length - 1]
              return t ? t.fullPath : '/'
            }),
            (e.prototype.ensureURL = function() {}),
            e
          )
        })(qt),
        ue = function(t) {
          void 0 === t && (t = {}),
            (this.app = null),
            (this.apps = []),
            (this.options = t),
            (this.beforeHooks = []),
            (this.resolveHooks = []),
            (this.afterHooks = []),
            (this.matcher = pt(t.routes || [], this))
          var e = t.mode || 'hash'
          switch (
            ((this.fallback = 'history' === e && !xt && !1 !== t.fallback),
            this.fallback && (e = 'hash'),
            R || (e = 'abstract'),
            (this.mode = e),
            e)
          ) {
            case 'history':
              this.history = new Jt(this, t.base)
              break
            case 'hash':
              this.history = new te(this, t.base, this.fallback)
              break
            case 'abstract':
              this.history = new se(this, t.base)
              break
            default:
              0
          }
        },
        ce = { currentRoute: { configurable: !0 } }
      function le(t, e) {
        return (
          t.push(e),
          function() {
            var n = t.indexOf(e)
            n > -1 && t.splice(n, 1)
          }
        )
      }
      function he(t, e, n) {
        var r = 'hash' === n ? '#' + e : e
        return t ? L(t + '/' + r) : r
      }
      ;(ue.prototype.match = function(t, e, n) {
        return this.matcher.match(t, e, n)
      }),
        (ce.currentRoute.get = function() {
          return this.history && this.history.current
        }),
        (ue.prototype.init = function(t) {
          var e = this
          if ((this.apps.push(t), !this.app)) {
            this.app = t
            var n = this.history
            if (n instanceof Jt) n.transitionTo(n.getCurrentLocation())
            else if (n instanceof te) {
              var r = function() {
                n.setupListeners()
              }
              n.transitionTo(n.getCurrentLocation(), r, r)
            }
            n.listen(function(t) {
              e.apps.forEach(function(e) {
                e._route = t
              })
            })
          }
        }),
        (ue.prototype.beforeEach = function(t) {
          return le(this.beforeHooks, t)
        }),
        (ue.prototype.beforeResolve = function(t) {
          return le(this.resolveHooks, t)
        }),
        (ue.prototype.afterEach = function(t) {
          return le(this.afterHooks, t)
        }),
        (ue.prototype.onReady = function(t, e) {
          this.history.onReady(t, e)
        }),
        (ue.prototype.onError = function(t) {
          this.history.onError(t)
        }),
        (ue.prototype.push = function(t, e, n) {
          this.history.push(t, e, n)
        }),
        (ue.prototype.replace = function(t, e, n) {
          this.history.replace(t, e, n)
        }),
        (ue.prototype.go = function(t) {
          this.history.go(t)
        }),
        (ue.prototype.back = function() {
          this.go(-1)
        }),
        (ue.prototype.forward = function() {
          this.go(1)
        }),
        (ue.prototype.getMatchedComponents = function(t) {
          var e = t
            ? t.matched
              ? t
              : this.resolve(t).route
            : this.currentRoute
          return e
            ? [].concat.apply(
                [],
                e.matched.map(function(t) {
                  return Object.keys(t.components).map(function(e) {
                    return t.components[e]
                  })
                })
              )
            : []
        }),
        (ue.prototype.resolve = function(t, e, n) {
          var r = lt(t, e || this.history.current, n, this),
            i = this.match(r, e),
            o = i.redirectedFrom || i.fullPath,
            a = this.history.base,
            s = he(a, o, this.mode)
          return {
            location: r,
            route: i,
            href: s,
            normalizedTo: r,
            resolved: i
          }
        }),
        (ue.prototype.addRoutes = function(t) {
          this.matcher.addRoutes(t),
            this.history.current !== m &&
              this.history.transitionTo(this.history.getCurrentLocation())
        }),
        Object.defineProperties(ue.prototype, ce),
        (ue.install = k),
        (ue.version = '3.0.1'),
        R && window.Vue && window.Vue.use(ue),
        (e['default'] = ue)
    },
    kJMx: function(t, e, n) {
      var r = n('zhAb'),
        i = n('4R4u').concat('length', 'prototype')
      e.f =
        Object.getOwnPropertyNames ||
        function(t) {
          return r(t, i)
        }
    },
    lcbw: function(t, e, n) {
      'use strict'
      n.r(e)
      n('bZMm')
      var r = setTimeout
      function i() {}
      function o(t, e) {
        return function() {
          t.apply(e, arguments)
        }
      }
      function a(t) {
        if (!(this instanceof a))
          throw new TypeError('Promises must be constructed via new')
        if ('function' !== typeof t) throw new TypeError('not a function')
        ;(this._state = 0),
          (this._handled = !1),
          (this._value = void 0),
          (this._deferreds = []),
          p(t, this)
      }
      function s(t, e) {
        while (3 === t._state) t = t._value
        0 !== t._state
          ? ((t._handled = !0),
            a._immediateFn(function() {
              var n = 1 === t._state ? e.onFulfilled : e.onRejected
              if (null !== n) {
                var r
                try {
                  r = n(t._value)
                } catch (t) {
                  return void c(e.promise, t)
                }
                u(e.promise, r)
              } else (1 === t._state ? u : c)(e.promise, t._value)
            }))
          : t._deferreds.push(e)
      }
      function u(t, e) {
        try {
          if (e === t)
            throw new TypeError('A promise cannot be resolved with itself.')
          if (e && ('object' === typeof e || 'function' === typeof e)) {
            var n = e.then
            if (e instanceof a) return (t._state = 3), (t._value = e), void l(t)
            if ('function' === typeof n) return void p(o(n, e), t)
          }
          ;(t._state = 1), (t._value = e), l(t)
        } catch (e) {
          c(t, e)
        }
      }
      function c(t, e) {
        ;(t._state = 2), (t._value = e), l(t)
      }
      function l(t) {
        2 === t._state &&
          0 === t._deferreds.length &&
          a._immediateFn(function() {
            t._handled || a._unhandledRejectionFn(t._value)
          })
        for (var e = 0, n = t._deferreds.length; e < n; e++)
          s(t, t._deferreds[e])
        t._deferreds = null
      }
      function h(t, e, n) {
        ;(this.onFulfilled = 'function' === typeof t ? t : null),
          (this.onRejected = 'function' === typeof e ? e : null),
          (this.promise = n)
      }
      function p(t, e) {
        var n = !1
        try {
          t(
            function(t) {
              n || ((n = !0), u(e, t))
            },
            function(t) {
              n || ((n = !0), c(e, t))
            }
          )
        } catch (t) {
          if (n) return
          ;(n = !0), c(e, t)
        }
      }
      ;(a.prototype['catch'] = function(t) {
        return this.then(null, t)
      }),
        (a.prototype.then = function(t, e) {
          var n = new this.constructor(i)
          return s(this, new h(t, e, n)), n
        }),
        (a.prototype['finally'] = function(t) {
          var e = this.constructor
          return this.then(
            function(n) {
              return e.resolve(t()).then(function() {
                return n
              })
            },
            function(n) {
              return e.resolve(t()).then(function() {
                return e.reject(n)
              })
            }
          )
        }),
        (a.all = function(t) {
          return new a(function(e, n) {
            if (!t || 'undefined' === typeof t.length)
              throw new TypeError('Promise.all accepts an array')
            var r = Array.prototype.slice.call(t)
            if (0 === r.length) return e([])
            var i = r.length
            function o(t, a) {
              try {
                if (a && ('object' === typeof a || 'function' === typeof a)) {
                  var s = a.then
                  if ('function' === typeof s)
                    return void s.call(
                      a,
                      function(e) {
                        o(t, e)
                      },
                      n
                    )
                }
                ;(r[t] = a), 0 === --i && e(r)
              } catch (t) {
                n(t)
              }
            }
            for (var a = 0; a < r.length; a++) o(a, r[a])
          })
        }),
        (a.resolve = function(t) {
          return t && 'object' === typeof t && t.constructor === a
            ? t
            : new a(function(e) {
                e(t)
              })
        }),
        (a.reject = function(t) {
          return new a(function(e, n) {
            n(t)
          })
        }),
        (a.race = function(t) {
          return new a(function(e, n) {
            for (var r = 0, i = t.length; r < i; r++) t[r].then(e, n)
          })
        }),
        (a._immediateFn =
          ('function' === typeof setImmediate &&
            function(t) {
              setImmediate(t)
            }) ||
          function(t) {
            r(t, 0)
          }),
        (a._unhandledRejectionFn = function(t) {
          'undefined' !== typeof console &&
            console &&
            console.warn('Possible Unhandled Promise Rejection:', t)
        })
      var f = (function() {
        if ('undefined' !== typeof self) return self
        if ('undefined' !== typeof window) return window
        if ('undefined' !== typeof global) return global
        throw new Error('unable to locate global object')
      })()
      function d(t, e) {
        return (e = { exports: {} }), t(e, e.exports), e.exports
      }
      f.Promise || (f.Promise = a)
      var v = d(function(t) {
          var e = (t.exports =
            'undefined' != typeof window && window.Math == Math
              ? window
              : 'undefined' != typeof self && self.Math == Math
                ? self
                : Function('return this')())
          'number' == typeof __g && (__g = e)
        }),
        y = d(function(t) {
          var e = (t.exports = { version: '2.5.5' })
          'number' == typeof __e && (__e = e)
        }),
        _ = (y.version,
        function(t) {
          return 'object' === typeof t ? null !== t : 'function' === typeof t
        }),
        g = function(t) {
          if (!_(t)) throw TypeError(t + ' is not an object!')
          return t
        },
        m = function(t) {
          try {
            return !!t()
          } catch (t) {
            return !0
          }
        },
        b = !m(function() {
          return (
            7 !=
            Object.defineProperty({}, 'a', {
              get: function() {
                return 7
              }
            }).a
          )
        }),
        w = v.document,
        C = _(w) && _(w.createElement),
        E = function(t) {
          return C ? w.createElement(t) : {}
        },
        S =
          !b &&
          !m(function() {
            return (
              7 !=
              Object.defineProperty(E('div'), 'a', {
                get: function() {
                  return 7
                }
              }).a
            )
          }),
        T = function(t, e) {
          if (!_(t)) return t
          var n, r
          if (e && 'function' == typeof (n = t.toString) && !_((r = n.call(t))))
            return r
          if ('function' == typeof (n = t.valueOf) && !_((r = n.call(t))))
            return r
          if (
            !e &&
            'function' == typeof (n = t.toString) &&
            !_((r = n.call(t)))
          )
            return r
          throw TypeError("Can't convert object to primitive value")
        },
        x = Object.defineProperty,
        O = b
          ? Object.defineProperty
          : function(t, e, n) {
              if ((g(t), (e = T(e, !0)), g(n), S))
                try {
                  return x(t, e, n)
                } catch (t) {}
              if ('get' in n || 'set' in n)
                throw TypeError('Accessors not supported!')
              return 'value' in n && (t[e] = n.value), t
            },
        A = { f: O },
        P = function(t, e) {
          return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
          }
        },
        I = b
          ? function(t, e, n) {
              return A.f(t, e, P(1, n))
            }
          : function(t, e, n) {
              return (t[e] = n), t
            },
        N = {}.hasOwnProperty,
        k = function(t, e) {
          return N.call(t, e)
        },
        R = 0,
        D = Math.random(),
        F = function(t) {
          return 'Symbol('.concat(
            void 0 === t ? '' : t,
            ')_',
            (++R + D).toString(36)
          )
        },
        L = d(function(t) {
          var e = F('src'),
            n = 'toString',
            r = Function[n],
            i = ('' + r).split(n)
          ;(y.inspectSource = function(t) {
            return r.call(t)
          }),
            (t.exports = function(t, n, r, o) {
              var a = 'function' == typeof r
              a && (k(r, 'name') || I(r, 'name', n)),
                t[n] !== r &&
                  (a &&
                    (k(r, e) || I(r, e, t[n] ? '' + t[n] : i.join(String(n)))),
                  t === v
                    ? (t[n] = r)
                    : o
                      ? t[n]
                        ? (t[n] = r)
                        : I(t, n, r)
                      : (delete t[n], I(t, n, r)))
            })(Function.prototype, n, function() {
              return ('function' == typeof this && this[e]) || r.call(this)
            })
        }),
        M = function(t) {
          if ('function' != typeof t) throw TypeError(t + ' is not a function!')
          return t
        },
        j = function(t, e, n) {
          if ((M(t), void 0 === e)) return t
          switch (n) {
            case 1:
              return function(n) {
                return t.call(e, n)
              }
            case 2:
              return function(n, r) {
                return t.call(e, n, r)
              }
            case 3:
              return function(n, r, i) {
                return t.call(e, n, r, i)
              }
          }
          return function() {
            return t.apply(e, arguments)
          }
        },
        U = 'prototype',
        W = function(t, e, n) {
          var r,
            i,
            o,
            a,
            s = t & W.F,
            u = t & W.G,
            c = t & W.S,
            l = t & W.P,
            h = t & W.B,
            p = u ? v : c ? v[e] || (v[e] = {}) : (v[e] || {})[U],
            f = u ? y : y[e] || (y[e] = {}),
            d = f[U] || (f[U] = {})
          for (r in (u && (n = e), n))
            (i = !s && p && void 0 !== p[r]),
              (o = (i ? p : n)[r]),
              (a =
                h && i
                  ? j(o, v)
                  : l && 'function' == typeof o
                    ? j(Function.call, o)
                    : o),
              p && L(p, r, o, t & W.U),
              f[r] != o && I(f, r, a),
              l && d[r] != o && (d[r] = o)
        }
      ;(v.core = y),
        (W.F = 1),
        (W.G = 2),
        (W.S = 4),
        (W.P = 8),
        (W.B = 16),
        (W.W = 32),
        (W.U = 64),
        (W.R = 128)
      var q = W,
        V = {}.toString,
        $ = function(t) {
          return V.call(t).slice(8, -1)
        },
        Q = Object('z').propertyIsEnumerable(0)
          ? Object
          : function(t) {
              return 'String' == $(t) ? t.split('') : Object(t)
            },
        B = function(t) {
          if (void 0 == t) throw TypeError("Can't call method on  " + t)
          return t
        },
        H = function(t) {
          return Object(B(t))
        },
        K = Math.ceil,
        z = Math.floor,
        G = function(t) {
          return isNaN((t = +t)) ? 0 : (t > 0 ? z : K)(t)
        },
        Y = Math.min,
        X = function(t) {
          return t > 0 ? Y(G(t), 9007199254740991) : 0
        },
        J =
          Array.isArray ||
          function(t) {
            return 'Array' == $(t)
          },
        Z = '__core-js_shared__',
        tt = v[Z] || (v[Z] = {}),
        et = function(t) {
          return tt[t] || (tt[t] = {})
        },
        nt = d(function(t) {
          var e = et('wks'),
            n = v.Symbol,
            r = 'function' == typeof n,
            i = (t.exports = function(t) {
              return e[t] || (e[t] = (r && n[t]) || (r ? n : F)('Symbol.' + t))
            })
          i.store = e
        }),
        rt = nt('species'),
        it = function(t) {
          var e
          return (
            J(t) &&
              ((e = t.constructor),
              'function' != typeof e ||
                (e !== Array && !J(e.prototype)) ||
                (e = void 0),
              _(e) && ((e = e[rt]), null === e && (e = void 0))),
            void 0 === e ? Array : e
          )
        },
        ot = function(t, e) {
          return new (it(t))(e)
        },
        at = function(t, e) {
          var n = 1 == t,
            r = 2 == t,
            i = 3 == t,
            o = 4 == t,
            a = 6 == t,
            s = 5 == t || a,
            u = e || ot
          return function(e, c, l) {
            for (
              var h,
                p,
                f = H(e),
                d = Q(f),
                v = j(c, l, 3),
                y = X(d.length),
                _ = 0,
                g = n ? u(e, y) : r ? u(e, 0) : void 0;
              y > _;
              _++
            )
              if ((s || _ in d) && ((h = d[_]), (p = v(h, _, f)), t))
                if (n) g[_] = p
                else if (p)
                  switch (t) {
                    case 3:
                      return !0
                    case 5:
                      return h
                    case 6:
                      return _
                    case 2:
                      g.push(h)
                  }
                else if (o) return !1
            return a ? -1 : i || o ? o : g
          }
        },
        st = nt('unscopables'),
        ut = Array.prototype
      void 0 == ut[st] && I(ut, st, {})
      var ct = function(t) {
          ut[st][t] = !0
        },
        lt = at(5),
        ht = 'find',
        pt = !0
      ht in [] &&
        Array(1)[ht](function() {
          pt = !1
        }),
        q(q.P + q.F * pt, 'Array', {
          find: function(t) {
            return lt(this, t, arguments.length > 1 ? arguments[1] : void 0)
          }
        }),
        ct(ht)
      y.Array.find
      var ft = at(6),
        dt = 'findIndex',
        vt = !0
      dt in [] &&
        Array(1)[dt](function() {
          vt = !1
        }),
        q(q.P + q.F * vt, 'Array', {
          findIndex: function(t) {
            return ft(this, t, arguments.length > 1 ? arguments[1] : void 0)
          }
        }),
        ct(dt)
      y.Array.findIndex
      var yt = function(t) {
          return Q(B(t))
        },
        _t = Math.max,
        gt = Math.min,
        mt = function(t, e) {
          return (t = G(t)), t < 0 ? _t(t + e, 0) : gt(t, e)
        },
        bt = function(t) {
          return function(e, n, r) {
            var i,
              o = yt(e),
              a = X(o.length),
              s = mt(r, a)
            if (t && n != n) {
              while (a > s) if (((i = o[s++]), i != i)) return !0
            } else
              for (; a > s; s++)
                if ((t || s in o) && o[s] === n) return t || s || 0
            return !t && -1
          }
        },
        wt = et('keys'),
        Ct = function(t) {
          return wt[t] || (wt[t] = F(t))
        },
        Et = bt(!1),
        St = Ct('IE_PROTO'),
        Tt = function(t, e) {
          var n,
            r = yt(t),
            i = 0,
            o = []
          for (n in r) n != St && k(r, n) && o.push(n)
          while (e.length > i) k(r, (n = e[i++])) && (~Et(o, n) || o.push(n))
          return o
        },
        xt = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
          ','
        ),
        Ot =
          Object.keys ||
          function(t) {
            return Tt(t, xt)
          },
        At = Object.getOwnPropertySymbols,
        Pt = { f: At },
        It = {}.propertyIsEnumerable,
        Nt = { f: It },
        kt = Object.assign,
        Rt =
          !kt ||
          m(function() {
            var t = {},
              e = {},
              n = Symbol(),
              r = 'abcdefghijklmnopqrst'
            return (
              (t[n] = 7),
              r.split('').forEach(function(t) {
                e[t] = t
              }),
              7 != kt({}, t)[n] || Object.keys(kt({}, e)).join('') != r
            )
          })
            ? function(t, e) {
                var n = H(t),
                  r = arguments.length,
                  i = 1,
                  o = Pt.f,
                  a = Nt.f
                while (r > i) {
                  var s,
                    u = Q(arguments[i++]),
                    c = o ? Ot(u).concat(o(u)) : Ot(u),
                    l = c.length,
                    h = 0
                  while (l > h) a.call(u, (s = c[h++])) && (n[s] = u[s])
                }
                return n
              }
            : kt
      q(q.S + q.F, 'Object', { assign: Rt })
      y.Object.assign
      var Dt = nt('match'),
        Ft = function(t) {
          var e
          return _(t) && (void 0 !== (e = t[Dt]) ? !!e : 'RegExp' == $(t))
        },
        Lt = function(t, e, n) {
          if (Ft(e)) throw TypeError('String#' + n + " doesn't accept regex!")
          return String(B(t))
        },
        Mt = nt('match'),
        jt = function(t) {
          var e = /./
          try {
            '/./'[t](e)
          } catch (n) {
            try {
              return (e[Mt] = !1), !'/./'[t](e)
            } catch (t) {}
          }
          return !0
        },
        Ut = 'startsWith',
        Wt = ''[Ut]
      q(q.P + q.F * jt(Ut), 'String', {
        startsWith: function(t) {
          var e = Lt(this, t, Ut),
            n = X(
              Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)
            ),
            r = String(t)
          return Wt ? Wt.call(e, r, n) : e.slice(n, n + r.length) === r
        }
      })
      y.String.startsWith
      var qt = function(t) {
        var e = String(B(this)),
          n = '',
          r = G(t)
        if (r < 0 || r == 1 / 0) throw RangeError("Count can't be negative")
        for (; r > 0; (r >>>= 1) && (e += e)) 1 & r && (n += e)
        return n
      }
      q(q.P, 'String', { repeat: qt })
      y.String.repeat
      var Vt = d(function(t) {
          var e = F('meta'),
            n = A.f,
            r = 0,
            i =
              Object.isExtensible ||
              function() {
                return !0
              },
            o = !m(function() {
              return i(Object.preventExtensions({}))
            }),
            a = function(t) {
              n(t, e, { value: { i: 'O' + ++r, w: {} } })
            },
            s = function(t, n) {
              if (!_(t))
                return 'symbol' == typeof t
                  ? t
                  : ('string' == typeof t ? 'S' : 'P') + t
              if (!k(t, e)) {
                if (!i(t)) return 'F'
                if (!n) return 'E'
                a(t)
              }
              return t[e].i
            },
            u = function(t, n) {
              if (!k(t, e)) {
                if (!i(t)) return !0
                if (!n) return !1
                a(t)
              }
              return t[e].w
            },
            c = function(t) {
              return o && l.NEED && i(t) && !k(t, e) && a(t), t
            },
            l = (t.exports = {
              KEY: e,
              NEED: !1,
              fastKey: s,
              getWeak: u,
              onFreeze: c
            })
        }),
        $t = (Vt.KEY, Vt.NEED, Vt.fastKey, Vt.getWeak, Vt.onFreeze, A.f),
        Qt = nt('toStringTag'),
        Bt = function(t, e, n) {
          t &&
            !k((t = n ? t : t.prototype), Qt) &&
            $t(t, Qt, { configurable: !0, value: e })
        },
        Ht = nt,
        Kt = { f: Ht },
        zt = !1,
        Gt = A.f,
        Yt = function(t) {
          var e = y.Symbol || (y.Symbol = zt ? {} : v.Symbol || {})
          '_' == t.charAt(0) || t in e || Gt(e, t, { value: Kt.f(t) })
        },
        Xt = function(t) {
          var e = Ot(t),
            n = Pt.f
          if (n) {
            var r,
              i = n(t),
              o = Nt.f,
              a = 0
            while (i.length > a) o.call(t, (r = i[a++])) && e.push(r)
          }
          return e
        },
        Jt = b
          ? Object.defineProperties
          : function(t, e) {
              g(t)
              var n,
                r = Ot(e),
                i = r.length,
                o = 0
              while (i > o) A.f(t, (n = r[o++]), e[n])
              return t
            },
        Zt = v.document,
        te = Zt && Zt.documentElement,
        ee = Ct('IE_PROTO'),
        ne = function() {},
        re = 'prototype',
        ie = function() {
          var t,
            e = E('iframe'),
            n = xt.length,
            r = '<',
            i = '>'
          ;(e.style.display = 'none'),
            te.appendChild(e),
            (e.src = 'javascript:'),
            (t = e.contentWindow.document),
            t.open(),
            t.write(r + 'script' + i + 'document.F=Object' + r + '/script' + i),
            t.close(),
            (ie = t.F)
          while (n--) delete ie[re][xt[n]]
          return ie()
        },
        oe =
          Object.create ||
          function(t, e) {
            var n
            return (
              null !== t
                ? ((ne[re] = g(t)),
                  (n = new ne()),
                  (ne[re] = null),
                  (n[ee] = t))
                : (n = ie()),
              void 0 === e ? n : Jt(n, e)
            )
          },
        ae = xt.concat('length', 'prototype'),
        se =
          Object.getOwnPropertyNames ||
          function(t) {
            return Tt(t, ae)
          },
        ue = { f: se },
        ce = ue.f,
        le = {}.toString,
        he =
          'object' == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [],
        pe = function(t) {
          try {
            return ce(t)
          } catch (t) {
            return he.slice()
          }
        },
        fe = function(t) {
          return he && '[object Window]' == le.call(t) ? pe(t) : ce(yt(t))
        },
        de = { f: fe },
        ve = Object.getOwnPropertyDescriptor,
        ye = b
          ? ve
          : function(t, e) {
              if (((t = yt(t)), (e = T(e, !0)), S))
                try {
                  return ve(t, e)
                } catch (t) {}
              if (k(t, e)) return P(!Nt.f.call(t, e), t[e])
            },
        _e = { f: ye },
        ge = Vt.KEY,
        me = _e.f,
        be = A.f,
        we = de.f,
        Ce = v.Symbol,
        Ee = v.JSON,
        Se = Ee && Ee.stringify,
        Te = 'prototype',
        xe = nt('_hidden'),
        Oe = nt('toPrimitive'),
        Ae = {}.propertyIsEnumerable,
        Pe = et('symbol-registry'),
        Ie = et('symbols'),
        Ne = et('op-symbols'),
        ke = Object[Te],
        Re = 'function' == typeof Ce,
        De = v.QObject,
        Fe = !De || !De[Te] || !De[Te].findChild,
        Le =
          b &&
          m(function() {
            return (
              7 !=
              oe(
                be({}, 'a', {
                  get: function() {
                    return be(this, 'a', { value: 7 }).a
                  }
                })
              ).a
            )
          })
            ? function(t, e, n) {
                var r = me(ke, e)
                r && delete ke[e], be(t, e, n), r && t !== ke && be(ke, e, r)
              }
            : be,
        Me = function(t) {
          var e = (Ie[t] = oe(Ce[Te]))
          return (e._k = t), e
        },
        je =
          Re && 'symbol' == typeof Ce.iterator
            ? function(t) {
                return 'symbol' == typeof t
              }
            : function(t) {
                return t instanceof Ce
              },
        Ue = function(t, e, n) {
          return (
            t === ke && Ue(Ne, e, n),
            g(t),
            (e = T(e, !0)),
            g(n),
            k(Ie, e)
              ? (n.enumerable
                  ? (k(t, xe) && t[xe][e] && (t[xe][e] = !1),
                    (n = oe(n, { enumerable: P(0, !1) })))
                  : (k(t, xe) || be(t, xe, P(1, {})), (t[xe][e] = !0)),
                Le(t, e, n))
              : be(t, e, n)
          )
        },
        We = function(t, e) {
          g(t)
          var n,
            r = Xt((e = yt(e))),
            i = 0,
            o = r.length
          while (o > i) Ue(t, (n = r[i++]), e[n])
          return t
        },
        qe = function(t, e) {
          return void 0 === e ? oe(t) : We(oe(t), e)
        },
        Ve = function(t) {
          var e = Ae.call(this, (t = T(t, !0)))
          return (
            !(this === ke && k(Ie, t) && !k(Ne, t)) &&
            (!(e || !k(this, t) || !k(Ie, t) || (k(this, xe) && this[xe][t])) ||
              e)
          )
        },
        $e = function(t, e) {
          if (
            ((t = yt(t)), (e = T(e, !0)), t !== ke || !k(Ie, e) || k(Ne, e))
          ) {
            var n = me(t, e)
            return (
              !n || !k(Ie, e) || (k(t, xe) && t[xe][e]) || (n.enumerable = !0),
              n
            )
          }
        },
        Qe = function(t) {
          var e,
            n = we(yt(t)),
            r = [],
            i = 0
          while (n.length > i)
            k(Ie, (e = n[i++])) || e == xe || e == ge || r.push(e)
          return r
        },
        Be = function(t) {
          var e,
            n = t === ke,
            r = we(n ? Ne : yt(t)),
            i = [],
            o = 0
          while (r.length > o)
            !k(Ie, (e = r[o++])) || (n && !k(ke, e)) || i.push(Ie[e])
          return i
        }
      Re ||
        ((Ce = function() {
          if (this instanceof Ce)
            throw TypeError('Symbol is not a constructor!')
          var t = F(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
              this === ke && e.call(Ne, n),
                k(this, xe) && k(this[xe], t) && (this[xe][t] = !1),
                Le(this, t, P(1, n))
            }
          return b && Fe && Le(ke, t, { configurable: !0, set: e }), Me(t)
        }),
        L(Ce[Te], 'toString', function() {
          return this._k
        }),
        (_e.f = $e),
        (A.f = Ue),
        (ue.f = de.f = Qe),
        (Nt.f = Ve),
        (Pt.f = Be),
        b && !zt && L(ke, 'propertyIsEnumerable', Ve, !0),
        (Kt.f = function(t) {
          return Me(nt(t))
        })),
        q(q.G + q.W + q.F * !Re, { Symbol: Ce })
      for (
        var He = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
            ','
          ),
          Ke = 0;
        He.length > Ke;

      )
        nt(He[Ke++])
      for (var ze = Ot(nt.store), Ge = 0; ze.length > Ge; ) Yt(ze[Ge++])
      q(q.S + q.F * !Re, 'Symbol', {
        for: function(t) {
          return k(Pe, (t += '')) ? Pe[t] : (Pe[t] = Ce(t))
        },
        keyFor: function(t) {
          if (!je(t)) throw TypeError(t + ' is not a symbol!')
          for (var e in Pe) if (Pe[e] === t) return e
        },
        useSetter: function() {
          Fe = !0
        },
        useSimple: function() {
          Fe = !1
        }
      }),
        q(q.S + q.F * !Re, 'Object', {
          create: qe,
          defineProperty: Ue,
          defineProperties: We,
          getOwnPropertyDescriptor: $e,
          getOwnPropertyNames: Qe,
          getOwnPropertySymbols: Be
        }),
        Ee &&
          q(
            q.S +
              q.F *
                (!Re ||
                  m(function() {
                    var t = Ce()
                    return (
                      '[null]' != Se([t]) ||
                      '{}' != Se({ a: t }) ||
                      '{}' != Se(Object(t))
                    )
                  })),
            'JSON',
            {
              stringify: function(t) {
                var e,
                  n,
                  r = [t],
                  i = 1
                while (arguments.length > i) r.push(arguments[i++])
                if (((n = e = r[1]), (_(e) || void 0 !== t) && !je(t)))
                  return (
                    J(e) ||
                      (e = function(t, e) {
                        if (
                          ('function' == typeof n && (e = n.call(this, t, e)),
                          !je(e))
                        )
                          return e
                      }),
                    (r[1] = e),
                    Se.apply(Ee, r)
                  )
              }
            }
          ),
        Ce[Te][Oe] || I(Ce[Te], Oe, Ce[Te].valueOf),
        Bt(Ce, 'Symbol'),
        Bt(Math, 'Math', !0),
        Bt(v.JSON, 'JSON', !0)
      var Ye = nt('toStringTag'),
        Xe =
          'Arguments' ==
          $(
            (function() {
              return arguments
            })()
          ),
        Je = function(t, e) {
          try {
            return t[e]
          } catch (t) {}
        },
        Ze = function(t) {
          var e, n, r
          return void 0 === t
            ? 'Undefined'
            : null === t
              ? 'Null'
              : 'string' == typeof (n = Je((e = Object(t)), Ye))
                ? n
                : Xe
                  ? $(e)
                  : 'Object' == (r = $(e)) && 'function' == typeof e.callee
                    ? 'Arguments'
                    : r
        },
        tn = {}
      ;(tn[nt('toStringTag')] = 'z'),
        tn + '' != '[object z]' &&
          L(
            Object.prototype,
            'toString',
            function() {
              return '[object ' + Ze(this) + ']'
            },
            !0
          ),
        Yt('asyncIterator'),
        Yt('observable')
      y.Symbol
      var en = function(t) {
          return function(e, n) {
            var r,
              i,
              o = String(B(e)),
              a = G(n),
              s = o.length
            return a < 0 || a >= s
              ? t
                ? ''
                : void 0
              : ((r = o.charCodeAt(a)),
                r < 55296 ||
                r > 56319 ||
                a + 1 === s ||
                (i = o.charCodeAt(a + 1)) < 56320 ||
                i > 57343
                  ? t
                    ? o.charAt(a)
                    : r
                  : t
                    ? o.slice(a, a + 2)
                    : i - 56320 + ((r - 55296) << 10) + 65536)
          }
        },
        nn = {},
        rn = {}
      I(rn, nt('iterator'), function() {
        return this
      })
      var on = function(t, e, n) {
          ;(t.prototype = oe(rn, { next: P(1, n) })), Bt(t, e + ' Iterator')
        },
        an = Ct('IE_PROTO'),
        sn = Object.prototype,
        un =
          Object.getPrototypeOf ||
          function(t) {
            return (
              (t = H(t)),
              k(t, an)
                ? t[an]
                : 'function' == typeof t.constructor &&
                  t instanceof t.constructor
                  ? t.constructor.prototype
                  : t instanceof Object
                    ? sn
                    : null
            )
          },
        cn = nt('iterator'),
        ln = !([].keys && 'next' in [].keys()),
        hn = '@@iterator',
        pn = 'keys',
        fn = 'values',
        dn = function() {
          return this
        },
        vn = function(t, e, n, r, i, o, a) {
          on(n, e, r)
          var s,
            u,
            c,
            l = function(t) {
              if (!ln && t in d) return d[t]
              switch (t) {
                case pn:
                  return function() {
                    return new n(this, t)
                  }
                case fn:
                  return function() {
                    return new n(this, t)
                  }
              }
              return function() {
                return new n(this, t)
              }
            },
            h = e + ' Iterator',
            p = i == fn,
            f = !1,
            d = t.prototype,
            v = d[cn] || d[hn] || (i && d[i]),
            y = v || l(i),
            _ = i ? (p ? l('entries') : y) : void 0,
            g = ('Array' == e && d.entries) || v
          if (
            (g &&
              ((c = un(g.call(new t()))),
              c !== Object.prototype &&
                c.next &&
                (Bt(c, h, !0),
                zt || 'function' == typeof c[cn] || I(c, cn, dn))),
            p &&
              v &&
              v.name !== fn &&
              ((f = !0),
              (y = function() {
                return v.call(this)
              })),
            (zt && !a) || (!ln && !f && d[cn]) || I(d, cn, y),
            (nn[e] = y),
            (nn[h] = dn),
            i)
          )
            if (
              ((s = { values: p ? y : l(fn), keys: o ? y : l(pn), entries: _ }),
              a)
            )
              for (u in s) u in d || L(d, u, s[u])
            else q(q.P + q.F * (ln || f), e, s)
          return s
        },
        yn = en(!0)
      vn(
        String,
        'String',
        function(t) {
          ;(this._t = String(t)), (this._i = 0)
        },
        function() {
          var t,
            e = this._t,
            n = this._i
          return n >= e.length
            ? { value: void 0, done: !0 }
            : ((t = yn(e, n)), (this._i += t.length), { value: t, done: !1 })
        }
      )
      var _n = function(t, e) {
          return { value: e, done: !!t }
        },
        gn = vn(
          Array,
          'Array',
          function(t, e) {
            ;(this._t = yt(t)), (this._i = 0), (this._k = e)
          },
          function() {
            var t = this._t,
              e = this._k,
              n = this._i++
            return !t || n >= t.length
              ? ((this._t = void 0), _n(1))
              : _n(0, 'keys' == e ? n : 'values' == e ? t[n] : [n, t[n]])
          },
          'values'
        )
      ;(nn.Arguments = nn.Array), ct('keys'), ct('values'), ct('entries')
      for (
        var mn = nt('iterator'),
          bn = nt('toStringTag'),
          wn = nn.Array,
          Cn = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
          },
          En = Ot(Cn),
          Sn = 0;
        Sn < En.length;
        Sn++
      ) {
        var Tn,
          xn = En[Sn],
          On = Cn[xn],
          An = v[xn],
          Pn = An && An.prototype
        if (
          Pn &&
          (Pn[mn] || I(Pn, mn, wn), Pn[bn] || I(Pn, bn, xn), (nn[xn] = wn), On)
        )
          for (Tn in gn) Pn[Tn] || L(Pn, Tn, gn[Tn], !0)
      }
      Kt.f('iterator')
    },
    m0Pp: function(t, e, n) {
      var r = n('2OiF')
      t.exports = function(t, e, n) {
        if ((r(t), void 0 === e)) return t
        switch (n) {
          case 1:
            return function(n) {
              return t.call(e, n)
            }
          case 2:
            return function(n, r) {
              return t.call(e, n, r)
            }
          case 3:
            return function(n, r, i) {
              return t.call(e, n, r, i)
            }
        }
        return function() {
          return t.apply(e, arguments)
        }
      }
    },
    mrSG: function(t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, '__extends', function() {
          return i
        }),
        n.d(e, '__assign', function() {
          return o
        }),
        n.d(e, '__rest', function() {
          return a
        }),
        n.d(e, '__decorate', function() {
          return s
        }),
        n.d(e, '__param', function() {
          return u
        }),
        n.d(e, '__metadata', function() {
          return c
        }),
        n.d(e, '__awaiter', function() {
          return l
        }),
        n.d(e, '__generator', function() {
          return h
        }),
        n.d(e, '__exportStar', function() {
          return p
        }),
        n.d(e, '__values', function() {
          return f
        }),
        n.d(e, '__read', function() {
          return d
        }),
        n.d(e, '__spread', function() {
          return v
        }),
        n.d(e, '__await', function() {
          return y
        }),
        n.d(e, '__asyncGenerator', function() {
          return _
        }),
        n.d(e, '__asyncDelegator', function() {
          return g
        }),
        n.d(e, '__asyncValues', function() {
          return m
        }),
        n.d(e, '__makeTemplateObject', function() {
          return b
        }),
        n.d(e, '__importStar', function() {
          return w
        }),
        n.d(e, '__importDefault', function() {
          return C
        })
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
      var r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(t, e) {
            t.__proto__ = e
          }) ||
        function(t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        }
      function i(t, e) {
        function n() {
          this.constructor = t
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()))
      }
      var o =
        Object.assign ||
        function(t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var i in ((e = arguments[n]), e))
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
          return t
        }
      function a(t, e) {
        var n = {}
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r])
        if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
          var i = 0
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 && (n[r[i]] = t[r[i]])
        }
        return n
      }
      function s(t, e, n, r) {
        var i,
          o = arguments.length,
          a =
            o < 3
              ? e
              : null === r
                ? (r = Object.getOwnPropertyDescriptor(e, n))
                : r
        if (
          'object' === typeof Reflect &&
          'function' === typeof Reflect.decorate
        )
          a = Reflect.decorate(t, e, n, r)
        else
          for (var s = t.length - 1; s >= 0; s--)
            (i = t[s]) &&
              (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
        return o > 3 && a && Object.defineProperty(e, n, a), a
      }
      function u(t, e) {
        return function(n, r) {
          e(n, r, t)
        }
      }
      function c(t, e) {
        if (
          'object' === typeof Reflect &&
          'function' === typeof Reflect.metadata
        )
          return Reflect.metadata(t, e)
      }
      function l(t, e, n, r) {
        return new (n || (n = Promise))(function(i, o) {
          function a(t) {
            try {
              u(r.next(t))
            } catch (t) {
              o(t)
            }
          }
          function s(t) {
            try {
              u(r['throw'](t))
            } catch (t) {
              o(t)
            }
          }
          function u(t) {
            t.done
              ? i(t.value)
              : new n(function(e) {
                  e(t.value)
                }).then(a, s)
          }
          u((r = r.apply(t, e || [])).next())
        })
      }
      function h(t, e) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function() {
              if (1 & i[0]) throw i[1]
              return i[1]
            },
            trys: [],
            ops: []
          }
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          'function' === typeof Symbol &&
            (o[Symbol.iterator] = function() {
              return this
            }),
          o
        )
        function s(t) {
          return function(e) {
            return u([t, e])
          }
        }
        function u(o) {
          if (n) throw new TypeError('Generator is already executing.')
          while (a)
            try {
              if (
                ((n = 1),
                r &&
                  (i = r[2 & o[0] ? 'return' : o[0] ? 'throw' : 'next']) &&
                  !(i = i.call(r, o[1])).done)
              )
                return i
              switch (((r = 0), i && (o = [0, i.value]), o[0])) {
                case 0:
                case 1:
                  i = o
                  break
                case 4:
                  return a.label++, { value: o[1], done: !1 }
                case 5:
                  a.label++, (r = o[1]), (o = [0])
                  continue
                case 7:
                  ;(o = a.ops.pop()), a.trys.pop()
                  continue
                default:
                  if (
                    ((i = a.trys),
                    !(i = i.length > 0 && i[i.length - 1]) &&
                      (6 === o[0] || 2 === o[0]))
                  ) {
                    a = 0
                    continue
                  }
                  if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                    a.label = o[1]
                    break
                  }
                  if (6 === o[0] && a.label < i[1]) {
                    ;(a.label = i[1]), (i = o)
                    break
                  }
                  if (i && a.label < i[2]) {
                    ;(a.label = i[2]), a.ops.push(o)
                    break
                  }
                  i[2] && a.ops.pop(), a.trys.pop()
                  continue
              }
              o = e.call(t, a)
            } catch (t) {
              ;(o = [6, t]), (r = 0)
            } finally {
              n = i = 0
            }
          if (5 & o[0]) throw o[1]
          return { value: o[0] ? o[1] : void 0, done: !0 }
        }
      }
      function p(t, e) {
        for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n])
      }
      function f(t) {
        var e = 'function' === typeof Symbol && t[Symbol.iterator],
          n = 0
        return e
          ? e.call(t)
          : {
              next: function() {
                return (
                  t && n >= t.length && (t = void 0),
                  { value: t && t[n++], done: !t }
                )
              }
            }
      }
      function d(t, e) {
        var n = 'function' === typeof Symbol && t[Symbol.iterator]
        if (!n) return t
        var r,
          i,
          o = n.call(t),
          a = []
        try {
          while ((void 0 === e || e-- > 0) && !(r = o.next()).done)
            a.push(r.value)
        } catch (t) {
          i = { error: t }
        } finally {
          try {
            r && !r.done && (n = o['return']) && n.call(o)
          } finally {
            if (i) throw i.error
          }
        }
        return a
      }
      function v() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t = t.concat(d(arguments[e]))
        return t
      }
      function y(t) {
        return this instanceof y ? ((this.v = t), this) : new y(t)
      }
      function _(t, e, n) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.')
        var r,
          i = n.apply(t, e || []),
          o = []
        return (
          (r = {}),
          a('next'),
          a('throw'),
          a('return'),
          (r[Symbol.asyncIterator] = function() {
            return this
          }),
          r
        )
        function a(t) {
          i[t] &&
            (r[t] = function(e) {
              return new Promise(function(n, r) {
                o.push([t, e, n, r]) > 1 || s(t, e)
              })
            })
        }
        function s(t, e) {
          try {
            u(i[t](e))
          } catch (t) {
            h(o[0][3], t)
          }
        }
        function u(t) {
          t.value instanceof y
            ? Promise.resolve(t.value.v).then(c, l)
            : h(o[0][2], t)
        }
        function c(t) {
          s('next', t)
        }
        function l(t) {
          s('throw', t)
        }
        function h(t, e) {
          t(e), o.shift(), o.length && s(o[0][0], o[0][1])
        }
      }
      function g(t) {
        var e, n
        return (
          (e = {}),
          r('next'),
          r('throw', function(t) {
            throw t
          }),
          r('return'),
          (e[Symbol.iterator] = function() {
            return this
          }),
          e
        )
        function r(r, i) {
          t[r] &&
            (e[r] = function(e) {
              return (n = !n)
                ? { value: y(t[r](e)), done: 'return' === r }
                : i
                  ? i(e)
                  : e
            })
        }
      }
      function m(t) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.')
        var e = t[Symbol.asyncIterator]
        return e
          ? e.call(t)
          : 'function' === typeof f
            ? f(t)
            : t[Symbol.iterator]()
      }
      function b(t, e) {
        return (
          Object.defineProperty
            ? Object.defineProperty(t, 'raw', { value: e })
            : (t.raw = e),
          t
        )
      }
      function w(t) {
        if (t && t.__esModule) return t
        var e = {}
        if (null != t)
          for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n])
        return (e.default = t), e
      }
      function C(t) {
        return t && t.__esModule ? t : { default: t }
      }
    },
    nGyu: function(t, e, n) {
      var r = n('K0xU')('unscopables'),
        i = Array.prototype
      void 0 == i[r] && n('Mukb')(i, r, {}),
        (t.exports = function(t) {
          i[r][t] = !0
        })
    },
    nICZ: function(t, e) {
      t.exports = function(t) {
        try {
          return { e: !1, v: t() }
        } catch (t) {
          return { e: !0, v: t }
        }
      }
    },
    ne8i: function(t, e, n) {
      var r = n('RYi7'),
        i = Math.min
      t.exports = function(t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
      }
    },
    nh4g: function(t, e, n) {
      t.exports = !n('eeVq')(function() {
        return (
          7 !=
          Object.defineProperty({}, 'a', {
            get: function() {
              return 7
            }
          }).a
        )
      })
    },
    ol8x: function(t, e, n) {
      var r = n('dyZX'),
        i = r.navigator
      t.exports = (i && i.userAgent) || ''
    },
    pIFo: function(t, e, n) {
      n('IU+Z')('replace', 2, function(t, e, n) {
        return [
          function(r, i) {
            'use strict'
            var o = t(this),
              a = void 0 == r ? void 0 : r[e]
            return void 0 !== a ? a.call(r, o, i) : n.call(String(o), r, i)
          },
          n
        ]
      })
    },
    pbhE: function(t, e, n) {
      'use strict'
      var r = n('2OiF')
      function i(t) {
        var e, n
        ;(this.promise = new t(function(t, r) {
          if (void 0 !== e || void 0 !== n)
            throw TypeError('Bad Promise constructor')
          ;(e = t), (n = r)
        })),
          (this.resolve = r(e)),
          (this.reject = r(n))
      }
      t.exports.f = function(t) {
        return new i(t)
      }
    },
    'q/0M': function(t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'setLogLevel', function() {
          return u
        }),
        n.d(e, 'Logger', function() {
          return s
        }),
        n.d(e, 'LogLevel', function() {
          return r
        })
      var r,
        i = []
      ;(function(t) {
        ;(t[(t['DEBUG'] = 0)] = 'DEBUG'),
          (t[(t['VERBOSE'] = 1)] = 'VERBOSE'),
          (t[(t['INFO'] = 2)] = 'INFO'),
          (t[(t['WARN'] = 3)] = 'WARN'),
          (t[(t['ERROR'] = 4)] = 'ERROR'),
          (t[(t['SILENT'] = 5)] = 'SILENT')
      })(r || (r = {}))
      var o = r.INFO,
        a = function(t, e) {
          for (var n = [], i = 2; i < arguments.length; i++)
            n[i - 2] = arguments[i]
          if (!(e < t.logLevel)) {
            var o = new Date().toISOString()
            switch (e) {
              case r.DEBUG:
                console.log.apply(
                  console,
                  ['[' + o + ']  ' + t.name + ':'].concat(n)
                )
                break
              case r.VERBOSE:
                console.log.apply(
                  console,
                  ['[' + o + ']  ' + t.name + ':'].concat(n)
                )
                break
              case r.INFO:
                console.info.apply(
                  console,
                  ['[' + o + ']  ' + t.name + ':'].concat(n)
                )
                break
              case r.WARN:
                console.warn.apply(
                  console,
                  ['[' + o + ']  ' + t.name + ':'].concat(n)
                )
                break
              case r.ERROR:
                console.error.apply(
                  console,
                  ['[' + o + ']  ' + t.name + ':'].concat(n)
                )
                break
              default:
                throw new Error(
                  'Attempted to log a message with an invalid logType (value: ' +
                    e +
                    ')'
                )
            }
          }
        },
        s = (function() {
          function t(t) {
            ;(this.name = t),
              (this._logLevel = o),
              (this._logHandler = a),
              i.push(this)
          }
          return (
            Object.defineProperty(t.prototype, 'logLevel', {
              get: function() {
                return this._logLevel
              },
              set: function(t) {
                if (!(t in r))
                  throw new TypeError('Invalid value assigned to `logLevel`')
                this._logLevel = t
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'logHandler', {
              get: function() {
                return this._logHandler
              },
              set: function(t) {
                if ('function' !== typeof t)
                  throw new TypeError(
                    'Value assigned to `logHandler` must be a function'
                  )
                this._logHandler = t
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.debug = function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
              this._logHandler.apply(this, [this, r.DEBUG].concat(t))
            }),
            (t.prototype.log = function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
              this._logHandler.apply(this, [this, r.VERBOSE].concat(t))
            }),
            (t.prototype.info = function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
              this._logHandler.apply(this, [this, r.INFO].concat(t))
            }),
            (t.prototype.warn = function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
              this._logHandler.apply(this, [this, r.WARN].concat(t))
            }),
            (t.prototype.error = function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
              this._logHandler.apply(this, [this, r.ERROR].concat(t))
            }),
            t
          )
        })()
      function u(t) {
        i.forEach(function(e) {
          e.logLevel = t
        })
      }
    },
    qncB: function(t, e, n) {
      var r = n('XKFU'),
        i = n('vhPU'),
        o = n('eeVq'),
        a = n('/e88'),
        s = '[' + a + ']',
        u = '​',
        c = RegExp('^' + s + s + '*'),
        l = RegExp(s + s + '*$'),
        h = function(t, e, n) {
          var i = {},
            s = o(function() {
              return !!a[t]() || u[t]() != u
            }),
            c = (i[t] = s ? e(p) : a[t])
          n && (i[n] = c), r(r.P + r.F * s, 'String', i)
        },
        p = (h.trim = function(t, e) {
          return (
            (t = String(i(t))),
            1 & e && (t = t.replace(c, '')),
            2 & e && (t = t.replace(l, '')),
            t
          )
        })
      t.exports = h
    },
    quPj: function(t, e, n) {
      var r = n('0/R4'),
        i = n('LZWt'),
        o = n('K0xU')('match')
      t.exports = function(t) {
        var e
        return r(t) && (void 0 !== (e = t[o]) ? !!e : 'RegExp' == i(t))
      }
    },
    rGqo: function(t, e, n) {
      for (
        var r = n('yt8O'),
          i = n('DVgA'),
          o = n('KroJ'),
          a = n('dyZX'),
          s = n('Mukb'),
          u = n('hPIQ'),
          c = n('K0xU'),
          l = c('iterator'),
          h = c('toStringTag'),
          p = u.Array,
          f = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
          },
          d = i(f),
          v = 0;
        v < d.length;
        v++
      ) {
        var y,
          _ = d[v],
          g = f[_],
          m = a[_],
          b = m && m.prototype
        if (b && (b[l] || s(b, l, p), b[h] || s(b, h, _), (u[_] = p), g))
          for (y in r) b[y] || o(b, y, r[y], !0)
      }
    },
    vKrd: function(t, e, n) {
      var r = n('y3w9'),
        i = n('0/R4'),
        o = n('pbhE')
      t.exports = function(t, e) {
        if ((r(t), i(e) && e.constructor === t)) return e
        var n = o.f(t),
          a = n.resolve
        return a(e), n.promise
      }
    },
    vhPU: function(t, e) {
      t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t)
        return t
      }
    },
    w2a5: function(t, e, n) {
      var r = n('aCFj'),
        i = n('ne8i'),
        o = n('d/Gc')
      t.exports = function(t) {
        return function(e, n, a) {
          var s,
            u = r(e),
            c = i(u.length),
            l = o(a, c)
          if (t && n != n) {
            while (c > l) if (((s = u[l++]), s != s)) return !0
          } else
            for (; c > l; l++)
              if ((t || l in u) && u[l] === n) return t || l || 0
          return !t && -1
        }
      }
    },
    wj3C: function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n('zVF4'),
        i = function(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        },
        o = '[DEFAULT]',
        a = [],
        s = (function() {
          function t(t, e, n) {
            ;(this.firebase_ = n),
              (this.isDeleted_ = !1),
              (this.services_ = {}),
              (this.name_ = e.name),
              (this._automaticDataCollectionEnabled =
                e.automaticDataCollectionEnabled || !1),
              (this.options_ = r.deepCopy(t)),
              (this.INTERNAL = {
                getUid: function() {
                  return null
                },
                getToken: function() {
                  return Promise.resolve(null)
                },
                addAuthTokenListener: function(t) {
                  a.push(t),
                    setTimeout(function() {
                      return t(null)
                    }, 0)
                },
                removeAuthTokenListener: function(t) {
                  a = a.filter(function(e) {
                    return e !== t
                  })
                }
              })
          }
          return (
            Object.defineProperty(
              t.prototype,
              'automaticDataCollectionEnabled',
              {
                get: function() {
                  return (
                    this.checkDestroyed_(), this._automaticDataCollectionEnabled
                  )
                },
                set: function(t) {
                  this.checkDestroyed_(),
                    (this._automaticDataCollectionEnabled = t)
                },
                enumerable: !0,
                configurable: !0
              }
            ),
            Object.defineProperty(t.prototype, 'name', {
              get: function() {
                return this.checkDestroyed_(), this.name_
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'options', {
              get: function() {
                return this.checkDestroyed_(), this.options_
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.delete = function() {
              var t = this
              return new Promise(function(e) {
                t.checkDestroyed_(), e()
              })
                .then(function() {
                  t.firebase_.INTERNAL.removeApp(t.name_)
                  var e = []
                  return (
                    Object.keys(t.services_).forEach(function(n) {
                      Object.keys(t.services_[n]).forEach(function(r) {
                        e.push(t.services_[n][r])
                      })
                    }),
                    Promise.all(
                      e.map(function(t) {
                        return t.INTERNAL.delete()
                      })
                    )
                  )
                })
                .then(function() {
                  ;(t.isDeleted_ = !0), (t.services_ = {})
                })
            }),
            (t.prototype._getService = function(t, e) {
              if (
                (void 0 === e && (e = o),
                this.checkDestroyed_(),
                this.services_[t] || (this.services_[t] = {}),
                !this.services_[t][e])
              ) {
                var n = e !== o ? e : void 0,
                  r = this.firebase_.INTERNAL.factories[t](
                    this,
                    this.extendApp.bind(this),
                    n
                  )
                this.services_[t][e] = r
              }
              return this.services_[t][e]
            }),
            (t.prototype.extendApp = function(t) {
              var e = this
              r.deepExtend(this, t),
                t.INTERNAL &&
                  t.INTERNAL.addAuthTokenListener &&
                  (a.forEach(function(t) {
                    e.INTERNAL.addAuthTokenListener(t)
                  }),
                  (a = []))
            }),
            (t.prototype.checkDestroyed_ = function() {
              this.isDeleted_ && c('app-deleted', { name: this.name_ })
            }),
            t
          )
        })()
      function u() {
        var t = {},
          e = {},
          n = {},
          a = {
            __esModule: !0,
            initializeApp: p,
            app: h,
            apps: null,
            Promise: Promise,
            SDK_VERSION: '5.0.4',
            INTERNAL: {
              registerService: d,
              createFirebaseNamespace: u,
              extendNamespace: v,
              createSubscribe: r.createSubscribe,
              ErrorFactory: r.ErrorFactory,
              removeApp: l,
              factories: e,
              useAsService: _,
              Promise: Promise,
              deepExtend: r.deepExtend
            }
          }
        function l(e) {
          var n = t[e]
          y(n, 'delete'), delete t[e]
        }
        function h(e) {
          return (e = e || o), i(t, e) || c('no-app', { name: e }), t[e]
        }
        function p(e, n) {
          if ((void 0 === n && (n = {}), 'object' !== typeof n || null === n)) {
            var r = n
            n = { name: r }
          }
          var u = n
          void 0 === u.name && (u.name = o)
          var l = u.name
          ;('string' === typeof l && l) || c('bad-app-name', { name: l + '' }),
            i(t, l) && c('duplicate-app', { name: l })
          var h = new s(e, u, a)
          return (t[l] = h), y(h, 'create'), h
        }
        function f() {
          return Object.keys(t).map(function(e) {
            return t[e]
          })
        }
        function d(t, i, o, u, l) {
          e[t] && c('duplicate-service', { name: t }),
            (e[t] = i),
            u &&
              ((n[t] = u),
              f().forEach(function(t) {
                u('create', t)
              }))
          var p = function(e) {
            return (
              void 0 === e && (e = h()),
              'function' !== typeof e[t] &&
                c('invalid-app-argument', { name: t }),
              e[t]()
            )
          }
          return (
            void 0 !== o && r.deepExtend(p, o),
            (a[t] = p),
            (s.prototype[t] = function() {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n]
              var r = this._getService.bind(this, t)
              return r.apply(this, l ? e : [])
            }),
            p
          )
        }
        function v(t) {
          r.deepExtend(a, t)
        }
        function y(t, r) {
          Object.keys(e).forEach(function(e) {
            var i = _(t, e)
            null !== i && n[i] && n[i](r, t)
          })
        }
        function _(t, e) {
          if ('serverAuth' === e) return null
          var n = e
          t.options
          return n
        }
        return (
          r.patchProperty(a, 'default', a),
          Object.defineProperty(a, 'apps', { get: f }),
          r.patchProperty(h, 'App', s),
          a
        )
      }
      function c(t, e) {
        throw h.create(t, e)
      }
      ;(s.prototype.name && s.prototype.options) ||
        s.prototype.delete ||
        console.log('dc')
      var l = {
          'no-app':
            "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",
          'bad-app-name': "Illegal App name: '{$name}",
          'duplicate-app': "Firebase App named '{$name}' already exists",
          'app-deleted': "Firebase App named '{$name}' already deleted",
          'duplicate-service':
            "Firebase service named '{$name}' already registered",
          'sa-not-supported':
            'Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain',
          'invalid-app-argument':
            'firebase.{$name}() takes either no argument or a Firebase App instance.'
        },
        h = new r.ErrorFactory('app', 'Firebase', l),
        p = u()
      ;(e.firebase = p), (e.default = p)
    },
    xfY5: function(t, e, n) {
      'use strict'
      var r = n('dyZX'),
        i = n('aagx'),
        o = n('LZWt'),
        a = n('Xbzi'),
        s = n('apmT'),
        u = n('eeVq'),
        c = n('kJMx').f,
        l = n('EemH').f,
        h = n('hswa').f,
        p = n('qncB').trim,
        f = 'Number',
        d = r[f],
        v = d,
        y = d.prototype,
        _ = o(n('Kuth')(y)) == f,
        g = 'trim' in String.prototype,
        m = function(t) {
          var e = s(t, !1)
          if ('string' == typeof e && e.length > 2) {
            e = g ? e.trim() : p(e, 3)
            var n,
              r,
              i,
              o = e.charCodeAt(0)
            if (43 === o || 45 === o) {
              if (((n = e.charCodeAt(2)), 88 === n || 120 === n)) return NaN
            } else if (48 === o) {
              switch (e.charCodeAt(1)) {
                case 66:
                case 98:
                  ;(r = 2), (i = 49)
                  break
                case 79:
                case 111:
                  ;(r = 8), (i = 55)
                  break
                default:
                  return +e
              }
              for (var a, u = e.slice(2), c = 0, l = u.length; c < l; c++)
                if (((a = u.charCodeAt(c)), a < 48 || a > i)) return NaN
              return parseInt(u, r)
            }
          }
          return +e
        }
      if (!d(' 0o1') || !d('0b1') || d('+0x1')) {
        d = function(t) {
          var e = arguments.length < 1 ? 0 : t,
            n = this
          return n instanceof d &&
            (_
              ? u(function() {
                  y.valueOf.call(n)
                })
              : o(n) != f)
            ? a(new v(m(e)), n, d)
            : m(e)
        }
        for (
          var b,
            w = n('nh4g')
              ? c(v)
              : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
                  ','
                ),
            C = 0;
          w.length > C;
          C++
        )
          i(v, (b = w[C])) && !i(d, b) && h(d, b, l(v, b))
        ;(d.prototype = y), (y.constructor = d), n('KroJ')(r, f, d)
      }
    },
    xpql: function(t, e, n) {
      t.exports =
        !n('nh4g') &&
        !n('eeVq')(function() {
          return (
            7 !=
            Object.defineProperty(n('Iw71')('div'), 'a', {
              get: function() {
                return 7
              }
            }).a
          )
        })
    },
    y3w9: function(t, e, n) {
      var r = n('0/R4')
      t.exports = function(t) {
        if (!r(t)) throw TypeError(t + ' is not an object!')
        return t
      }
    },
    ylqs: function(t, e) {
      var n = 0,
        r = Math.random()
      t.exports = function(t) {
        return 'Symbol('.concat(
          void 0 === t ? '' : t,
          ')_',
          (++n + r).toString(36)
        )
      }
    },
    yt8O: function(t, e, n) {
      'use strict'
      var r = n('nGyu'),
        i = n('1TsA'),
        o = n('hPIQ'),
        a = n('aCFj')
      ;(t.exports = n('Afnz')(
        Array,
        'Array',
        function(t, e) {
          ;(this._t = a(t)), (this._i = 0), (this._k = e)
        },
        function() {
          var t = this._t,
            e = this._k,
            n = this._i++
          return !t || n >= t.length
            ? ((this._t = void 0), i(1))
            : i(0, 'keys' == e ? n : 'values' == e ? t[n] : [n, t[n]])
        },
        'values'
      )),
        (o.Arguments = o.Array),
        r('keys'),
        r('values'),
        r('entries')
    },
    zVF4: function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n('mrSG'),
        i = {
          NODE_CLIENT: !1,
          NODE_ADMIN: !1,
          SDK_VERSION: '${JSCORE_VERSION}'
        },
        o = function(t, e) {
          if (!t) throw a(e)
        },
        a = function(t) {
          return new Error(
            'Firebase Database (' +
              i.SDK_VERSION +
              ') INTERNAL ASSERT FAILED: ' +
              t
          )
        },
        s = function(t) {
          for (var e = [], n = 0, r = 0; r < t.length; r++) {
            var i = t.charCodeAt(r)
            i < 128
              ? (e[n++] = i)
              : i < 2048
                ? ((e[n++] = (i >> 6) | 192), (e[n++] = (63 & i) | 128))
                : 55296 == (64512 & i) &&
                  r + 1 < t.length &&
                  56320 == (64512 & t.charCodeAt(r + 1))
                  ? ((i =
                      65536 + ((1023 & i) << 10) + (1023 & t.charCodeAt(++r))),
                    (e[n++] = (i >> 18) | 240),
                    (e[n++] = ((i >> 12) & 63) | 128),
                    (e[n++] = ((i >> 6) & 63) | 128),
                    (e[n++] = (63 & i) | 128))
                  : ((e[n++] = (i >> 12) | 224),
                    (e[n++] = ((i >> 6) & 63) | 128),
                    (e[n++] = (63 & i) | 128))
          }
          return e
        },
        u = function(t) {
          var e = [],
            n = 0,
            r = 0
          while (n < t.length) {
            var i = t[n++]
            if (i < 128) e[r++] = String.fromCharCode(i)
            else if (i > 191 && i < 224) {
              var o = t[n++]
              e[r++] = String.fromCharCode(((31 & i) << 6) | (63 & o))
            } else if (i > 239 && i < 365) {
              o = t[n++]
              var a = t[n++],
                s = t[n++],
                u =
                  (((7 & i) << 18) |
                    ((63 & o) << 12) |
                    ((63 & a) << 6) |
                    (63 & s)) -
                  65536
              ;(e[r++] = String.fromCharCode(55296 + (u >> 10))),
                (e[r++] = String.fromCharCode(56320 + (1023 & u)))
            } else {
              ;(o = t[n++]), (a = t[n++])
              e[r++] = String.fromCharCode(
                ((15 & i) << 12) | ((63 & o) << 6) | (63 & a)
              )
            }
          }
          return e.join('')
        },
        c = {
          byteToCharMap_: null,
          charToByteMap_: null,
          byteToCharMapWebSafe_: null,
          charToByteMapWebSafe_: null,
          ENCODED_VALS_BASE:
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + '+/='
          },
          get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + '-_.'
          },
          HAS_NATIVE_SUPPORT: 'function' === typeof atob,
          encodeByteArray: function(t, e) {
            if (!Array.isArray(t))
              throw Error('encodeByteArray takes an array as a parameter')
            this.init_()
            for (
              var n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                r = [],
                i = 0;
              i < t.length;
              i += 3
            ) {
              var o = t[i],
                a = i + 1 < t.length,
                s = a ? t[i + 1] : 0,
                u = i + 2 < t.length,
                c = u ? t[i + 2] : 0,
                l = o >> 2,
                h = ((3 & o) << 4) | (s >> 4),
                p = ((15 & s) << 2) | (c >> 6),
                f = 63 & c
              u || ((f = 64), a || (p = 64)), r.push(n[l], n[h], n[p], n[f])
            }
            return r.join('')
          },
          encodeString: function(t, e) {
            return this.HAS_NATIVE_SUPPORT && !e
              ? btoa(t)
              : this.encodeByteArray(s(t), e)
          },
          decodeString: function(t, e) {
            return this.HAS_NATIVE_SUPPORT && !e
              ? atob(t)
              : u(this.decodeStringToByteArray(t, e))
          },
          decodeStringToByteArray: function(t, e) {
            this.init_()
            for (
              var n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                r = [],
                i = 0;
              i < t.length;

            ) {
              var o = n[t.charAt(i++)],
                a = i < t.length,
                s = a ? n[t.charAt(i)] : 0
              ++i
              var u = i < t.length,
                c = u ? n[t.charAt(i)] : 64
              ++i
              var l = i < t.length,
                h = l ? n[t.charAt(i)] : 64
              if ((++i, null == o || null == s || null == c || null == h))
                throw Error()
              var p = (o << 2) | (s >> 4)
              if ((r.push(p), 64 != c)) {
                var f = ((s << 4) & 240) | (c >> 2)
                if ((r.push(f), 64 != h)) {
                  var d = ((c << 6) & 192) | h
                  r.push(d)
                }
              }
            }
            return r
          },
          init_: function() {
            if (!this.byteToCharMap_) {
              ;(this.byteToCharMap_ = {}),
                (this.charToByteMap_ = {}),
                (this.byteToCharMapWebSafe_ = {}),
                (this.charToByteMapWebSafe_ = {})
              for (var t = 0; t < this.ENCODED_VALS.length; t++)
                (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
                  (this.charToByteMap_[this.byteToCharMap_[t]] = t),
                  (this.byteToCharMapWebSafe_[
                    t
                  ] = this.ENCODED_VALS_WEBSAFE.charAt(t)),
                  (this.charToByteMapWebSafe_[
                    this.byteToCharMapWebSafe_[t]
                  ] = t),
                  t >= this.ENCODED_VALS_BASE.length &&
                    ((this.charToByteMap_[
                      this.ENCODED_VALS_WEBSAFE.charAt(t)
                    ] = t),
                    (this.charToByteMapWebSafe_[
                      this.ENCODED_VALS.charAt(t)
                    ] = t))
            }
          }
        },
        l = function(t) {
          var e = s(t)
          return c.encodeByteArray(e, !0)
        },
        h = function(t) {
          try {
            return c.decodeString(t, !0)
          } catch (t) {
            console.error('base64Decode failed: ', t)
          }
          return null
        }
      function p(t) {
        return f(void 0, t)
      }
      function f(t, e) {
        if (!(e instanceof Object)) return e
        switch (e.constructor) {
          case Date:
            var n = e
            return new Date(n.getTime())
          case Object:
            void 0 === t && (t = {})
            break
          case Array:
            t = []
            break
          default:
            return e
        }
        for (var r in e) e.hasOwnProperty(r) && (t[r] = f(t[r], e[r]))
        return t
      }
      function d(t, e, n) {
        t[e] = n
      }
      var v = (function() {
          function t() {
            var t = this
            this.promise = new Promise(function(e, n) {
              ;(t.resolve = e), (t.reject = n)
            })
          }
          return (
            (t.prototype.wrapCallback = function(t) {
              var e = this
              return function(n, r) {
                n ? e.reject(n) : e.resolve(r),
                  'function' === typeof t &&
                    (e.promise.catch(function() {}),
                    1 === t.length ? t(n) : t(n, r))
              }
            }),
            t
          )
        })(),
        y = function() {
          return 'undefined' !== typeof navigator &&
            'string' === typeof navigator['userAgent']
            ? navigator['userAgent']
            : ''
        },
        _ = function() {
          return (
            'undefined' !== typeof window &&
            !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
            /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())
          )
        },
        g = function() {
          return (
            'object' === typeof navigator &&
            'ReactNative' === navigator['product']
          )
        },
        m = function() {
          return !0 === i.NODE_CLIENT || !0 === i.NODE_ADMIN
        },
        b = 'FirebaseError',
        w = Error.captureStackTrace
      function C(t) {
        var e = w
        return (w = t), e
      }
      var E = (function() {
        function t(t, e) {
          if (((this.code = t), (this.message = e), w))
            w(this, S.prototype.create)
          else
            try {
              throw Error.apply(this, arguments)
            } catch (t) {
              ;(this.name = b),
                Object.defineProperty(this, 'stack', {
                  get: function() {
                    return t.stack
                  }
                })
            }
        }
        return t
      })()
      ;(E.prototype = Object.create(Error.prototype)),
        (E.prototype.constructor = E),
        (E.prototype.name = b)
      var S = (function() {
        function t(t, e, n) {
          ;(this.service = t),
            (this.serviceName = e),
            (this.errors = n),
            (this.pattern = /\{\$([^}]+)}/g)
        }
        return (
          (t.prototype.create = function(t, e) {
            void 0 === e && (e = {})
            var n,
              r = this.errors[t],
              i = this.service + '/' + t
            ;(n =
              void 0 === r
                ? 'Error'
                : r.replace(this.pattern, function(t, n) {
                    var r = e[n]
                    return void 0 !== r ? r.toString() : '<' + n + '?>'
                  })),
              (n = this.serviceName + ': ' + n + ' (' + i + ').')
            var o = new E(i, n)
            for (var a in e)
              e.hasOwnProperty(a) && '_' !== a.slice(-1) && (o[a] = e[a])
            return o
          }),
          t
        )
      })()
      function T(t) {
        return JSON.parse(t)
      }
      function x(t) {
        return JSON.stringify(t)
      }
      var O = function(t) {
          var e = {},
            n = {},
            r = {},
            i = ''
          try {
            var o = t.split('.')
            ;(e = T(h(o[0]) || '')),
              (n = T(h(o[1]) || '')),
              (i = o[2]),
              (r = n['d'] || {}),
              delete n['d']
          } catch (t) {}
          return { header: e, claims: n, data: r, signature: i }
        },
        A = function(t) {
          var e,
            n,
            r = O(t).claims,
            i = Math.floor(new Date().getTime() / 1e3)
          return (
            'object' === typeof r &&
              (r.hasOwnProperty('nbf')
                ? (e = r['nbf'])
                : r.hasOwnProperty('iat') && (e = r['iat']),
              (n = r.hasOwnProperty('exp') ? r['exp'] : e + 86400)),
            i && e && n && i >= e && i <= n
          )
        },
        P = function(t) {
          var e = O(t).claims
          return 'object' === typeof e && e.hasOwnProperty('iat')
            ? e['iat']
            : null
        },
        I = function(t) {
          var e = O(t),
            n = e.claims
          return (
            !!e.signature &&
            !!n &&
            'object' === typeof n &&
            n.hasOwnProperty('iat')
          )
        },
        N = function(t) {
          var e = O(t).claims
          return 'object' === typeof e && !0 === e['admin']
        },
        k = function(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        },
        R = function(t, e) {
          if (Object.prototype.hasOwnProperty.call(t, e)) return t[e]
        },
        D = function(t, e) {
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
        },
        F = function(t, e) {
          return (
            D(e, function(e, n) {
              t[e] = n
            }),
            t
          )
        },
        L = function(t) {
          return F({}, t)
        },
        M = function(t) {
          return 'object' === typeof t && null !== t
        },
        j = function(t) {
          for (var e in t) return !1
          return !0
        },
        U = function(t) {
          var e = 0
          for (var n in t) e++
          return e
        },
        W = function(t, e, n) {
          var r = {}
          for (var i in t) r[i] = e.call(n, t[i], i, t)
          return r
        },
        q = function(t, e, n) {
          for (var r in t) if (e.call(n, t[r], r, t)) return r
        },
        V = function(t, e, n) {
          var r = q(t, e, n)
          return r && t[r]
        },
        $ = function(t) {
          for (var e in t) return e
        },
        Q = function(t) {
          var e = [],
            n = 0
          for (var r in t) e[n++] = t[r]
          return e
        },
        B = function(t, e) {
          for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n) && !e(n, t[n]))
              return !1
          return !0
        },
        H = function(t) {
          var e = []
          return (
            D(t, function(t, n) {
              Array.isArray(n)
                ? n.forEach(function(n) {
                    e.push(encodeURIComponent(t) + '=' + encodeURIComponent(n))
                  })
                : e.push(encodeURIComponent(t) + '=' + encodeURIComponent(n))
            }),
            e.length ? '&' + e.join('&') : ''
          )
        },
        K = function(t) {
          var e = {},
            n = t.replace(/^\?/, '').split('&')
          return (
            n.forEach(function(t) {
              if (t) {
                var n = t.split('=')
                e[n[0]] = n[1]
              }
            }),
            e
          )
        },
        z = (function() {
          function t() {
            this.blockSize = -1
          }
          return t
        })(),
        G = (function(t) {
          function e() {
            var e = t.call(this) || this
            ;(e.chain_ = []),
              (e.buf_ = []),
              (e.W_ = []),
              (e.pad_ = []),
              (e.inbuf_ = 0),
              (e.total_ = 0),
              (e.blockSize = 64),
              (e.pad_[0] = 128)
            for (var n = 1; n < e.blockSize; ++n) e.pad_[n] = 0
            return e.reset(), e
          }
          return (
            r.__extends(e, t),
            (e.prototype.reset = function() {
              ;(this.chain_[0] = 1732584193),
                (this.chain_[1] = 4023233417),
                (this.chain_[2] = 2562383102),
                (this.chain_[3] = 271733878),
                (this.chain_[4] = 3285377520),
                (this.inbuf_ = 0),
                (this.total_ = 0)
            }),
            (e.prototype.compress_ = function(t, e) {
              e || (e = 0)
              var n = this.W_
              if ('string' === typeof t)
                for (var r = 0; r < 16; r++)
                  (n[r] =
                    (t.charCodeAt(e) << 24) |
                    (t.charCodeAt(e + 1) << 16) |
                    (t.charCodeAt(e + 2) << 8) |
                    t.charCodeAt(e + 3)),
                    (e += 4)
              else
                for (r = 0; r < 16; r++)
                  (n[r] =
                    (t[e] << 24) |
                    (t[e + 1] << 16) |
                    (t[e + 2] << 8) |
                    t[e + 3]),
                    (e += 4)
              for (r = 16; r < 80; r++) {
                var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16]
                n[r] = 4294967295 & ((i << 1) | (i >>> 31))
              }
              var o,
                a,
                s = this.chain_[0],
                u = this.chain_[1],
                c = this.chain_[2],
                l = this.chain_[3],
                h = this.chain_[4]
              for (r = 0; r < 80; r++) {
                r < 40
                  ? r < 20
                    ? ((o = l ^ (u & (c ^ l))), (a = 1518500249))
                    : ((o = u ^ c ^ l), (a = 1859775393))
                  : r < 60
                    ? ((o = (u & c) | (l & (u | c))), (a = 2400959708))
                    : ((o = u ^ c ^ l), (a = 3395469782))
                i = (((s << 5) | (s >>> 27)) + o + h + a + n[r]) & 4294967295
                ;(h = l),
                  (l = c),
                  (c = 4294967295 & ((u << 30) | (u >>> 2))),
                  (u = s),
                  (s = i)
              }
              ;(this.chain_[0] = (this.chain_[0] + s) & 4294967295),
                (this.chain_[1] = (this.chain_[1] + u) & 4294967295),
                (this.chain_[2] = (this.chain_[2] + c) & 4294967295),
                (this.chain_[3] = (this.chain_[3] + l) & 4294967295),
                (this.chain_[4] = (this.chain_[4] + h) & 4294967295)
            }),
            (e.prototype.update = function(t, e) {
              if (null != t) {
                void 0 === e && (e = t.length)
                var n = e - this.blockSize,
                  r = 0,
                  i = this.buf_,
                  o = this.inbuf_
                while (r < e) {
                  if (0 == o)
                    while (r <= n) this.compress_(t, r), (r += this.blockSize)
                  if ('string' === typeof t) {
                    while (r < e)
                      if (
                        ((i[o] = t.charCodeAt(r)),
                        ++o,
                        ++r,
                        o == this.blockSize)
                      ) {
                        this.compress_(i), (o = 0)
                        break
                      }
                  } else
                    while (r < e)
                      if (((i[o] = t[r]), ++o, ++r, o == this.blockSize)) {
                        this.compress_(i), (o = 0)
                        break
                      }
                }
                ;(this.inbuf_ = o), (this.total_ += e)
              }
            }),
            (e.prototype.digest = function() {
              var t = [],
                e = 8 * this.total_
              this.inbuf_ < 56
                ? this.update(this.pad_, 56 - this.inbuf_)
                : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56))
              for (var n = this.blockSize - 1; n >= 56; n--)
                (this.buf_[n] = 255 & e), (e /= 256)
              this.compress_(this.buf_)
              var r = 0
              for (n = 0; n < 5; n++)
                for (var i = 24; i >= 0; i -= 8)
                  (t[r] = (this.chain_[n] >> i) & 255), ++r
              return t
            }),
            e
          )
        })(z)
      function Y(t, e) {
        var n = new X(t, e)
        return n.subscribe.bind(n)
      }
      var X = (function() {
        function t(t, e) {
          var n = this
          ;(this.observers = []),
            (this.unsubscribes = []),
            (this.observerCount = 0),
            (this.task = Promise.resolve()),
            (this.finalized = !1),
            (this.onNoObservers = e),
            this.task
              .then(function() {
                t(n)
              })
              .catch(function(t) {
                n.error(t)
              })
        }
        return (
          (t.prototype.next = function(t) {
            this.forEachObserver(function(e) {
              e.next(t)
            })
          }),
          (t.prototype.error = function(t) {
            this.forEachObserver(function(e) {
              e.error(t)
            }),
              this.close(t)
          }),
          (t.prototype.complete = function() {
            this.forEachObserver(function(t) {
              t.complete()
            }),
              this.close()
          }),
          (t.prototype.subscribe = function(t, e, n) {
            var r,
              i = this
            if (void 0 === t && void 0 === e && void 0 === n)
              throw new Error('Missing Observer.')
            ;(r = Z(t, ['next', 'error', 'complete'])
              ? t
              : { next: t, error: e, complete: n }),
              void 0 === r.next && (r.next = tt),
              void 0 === r.error && (r.error = tt),
              void 0 === r.complete && (r.complete = tt)
            var o = this.unsubscribeOne.bind(this, this.observers.length)
            return (
              this.finalized &&
                this.task.then(function() {
                  try {
                    i.finalError ? r.error(i.finalError) : r.complete()
                  } catch (t) {}
                }),
              this.observers.push(r),
              o
            )
          }),
          (t.prototype.unsubscribeOne = function(t) {
            void 0 !== this.observers &&
              void 0 !== this.observers[t] &&
              (delete this.observers[t],
              (this.observerCount -= 1),
              0 === this.observerCount &&
                void 0 !== this.onNoObservers &&
                this.onNoObservers(this))
          }),
          (t.prototype.forEachObserver = function(t) {
            if (!this.finalized)
              for (var e = 0; e < this.observers.length; e++) this.sendOne(e, t)
          }),
          (t.prototype.sendOne = function(t, e) {
            var n = this
            this.task.then(function() {
              if (void 0 !== n.observers && void 0 !== n.observers[t])
                try {
                  e(n.observers[t])
                } catch (t) {
                  'undefined' !== typeof console &&
                    console.error &&
                    console.error(t)
                }
            })
          }),
          (t.prototype.close = function(t) {
            var e = this
            this.finalized ||
              ((this.finalized = !0),
              void 0 !== t && (this.finalError = t),
              this.task.then(function() {
                ;(e.observers = void 0), (e.onNoObservers = void 0)
              }))
          }),
          t
        )
      })()
      function J(t, e) {
        return function() {
          for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
          Promise.resolve(!0)
            .then(function() {
              t.apply(void 0, n)
            })
            .catch(function(t) {
              e && e(t)
            })
        }
      }
      function Z(t, e) {
        if ('object' !== typeof t || null === t) return !1
        for (var n = 0, r = e; n < r.length; n++) {
          var i = r[n]
          if (i in t && 'function' === typeof t[i]) return !0
        }
        return !1
      }
      function tt() {}
      var et = function(t, e, n, r) {
        var i
        if (
          (r < e
            ? (i = 'at least ' + e)
            : r > n && (i = 0 === n ? 'none' : 'no more than ' + n),
          i)
        ) {
          var o =
            t +
            ' failed: Was called with ' +
            r +
            (1 === r ? ' argument.' : ' arguments.') +
            ' Expects ' +
            i +
            '.'
          throw new Error(o)
        }
      }
      function nt(t, e, n) {
        var r = ''
        switch (e) {
          case 1:
            r = n ? 'first' : 'First'
            break
          case 2:
            r = n ? 'second' : 'Second'
            break
          case 3:
            r = n ? 'third' : 'Third'
            break
          case 4:
            r = n ? 'fourth' : 'Fourth'
            break
          default:
            throw new Error(
              'errorPrefix called with argumentNumber > 4.  Need to update it?'
            )
        }
        var i = t + ' failed: '
        return (i += r + ' argument '), i
      }
      function rt(t, e, n, r) {
        if ((!r || n) && 'string' !== typeof n)
          throw new Error(nt(t, e, r) + 'must be a valid firebase namespace.')
      }
      function it(t, e, n, r) {
        if ((!r || n) && 'function' !== typeof n)
          throw new Error(nt(t, e, r) + 'must be a valid function.')
      }
      function ot(t, e, n, r) {
        if ((!r || n) && ('object' !== typeof n || null === n))
          throw new Error(nt(t, e, r) + 'must be a valid context object.')
      }
      var at = function(t) {
          for (var e = [], n = 0, r = 0; r < t.length; r++) {
            var i = t.charCodeAt(r)
            if (i >= 55296 && i <= 56319) {
              var a = i - 55296
              r++, o(r < t.length, 'Surrogate pair missing trail surrogate.')
              var s = t.charCodeAt(r) - 56320
              i = 65536 + (a << 10) + s
            }
            i < 128
              ? (e[n++] = i)
              : i < 2048
                ? ((e[n++] = (i >> 6) | 192), (e[n++] = (63 & i) | 128))
                : i < 65536
                  ? ((e[n++] = (i >> 12) | 224),
                    (e[n++] = ((i >> 6) & 63) | 128),
                    (e[n++] = (63 & i) | 128))
                  : ((e[n++] = (i >> 18) | 240),
                    (e[n++] = ((i >> 12) & 63) | 128),
                    (e[n++] = ((i >> 6) & 63) | 128),
                    (e[n++] = (63 & i) | 128))
          }
          return e
        },
        st = function(t) {
          for (var e = 0, n = 0; n < t.length; n++) {
            var r = t.charCodeAt(n)
            r < 128
              ? e++
              : r < 2048
                ? (e += 2)
                : r >= 55296 && r <= 56319
                  ? ((e += 4), n++)
                  : (e += 3)
          }
          return e
        }
      ;(e.assert = o),
        (e.assertionError = a),
        (e.base64 = c),
        (e.base64Decode = h),
        (e.base64Encode = l),
        (e.CONSTANTS = i),
        (e.deepCopy = p),
        (e.deepExtend = f),
        (e.patchProperty = d),
        (e.Deferred = v),
        (e.getUA = y),
        (e.isMobileCordova = _),
        (e.isNodeSdk = m),
        (e.isReactNative = g),
        (e.ErrorFactory = S),
        (e.FirebaseError = E),
        (e.patchCapture = C),
        (e.jsonEval = T),
        (e.stringify = x),
        (e.decode = O),
        (e.isAdmin = N),
        (e.issuedAtTime = P),
        (e.isValidFormat = I),
        (e.isValidTimestamp = A),
        (e.clone = L),
        (e.contains = k),
        (e.every = B),
        (e.extend = F),
        (e.findKey = q),
        (e.findValue = V),
        (e.forEach = D),
        (e.getAnyKey = $),
        (e.getCount = U),
        (e.getValues = Q),
        (e.isEmpty = j),
        (e.isNonNullObject = M),
        (e.map = W),
        (e.safeGet = R),
        (e.querystring = H),
        (e.querystringDecode = K),
        (e.Sha1 = G),
        (e.async = J),
        (e.createSubscribe = Y),
        (e.errorPrefix = nt),
        (e.validateArgCount = et),
        (e.validateCallback = it),
        (e.validateContextObject = ot),
        (e.validateNamespace = rt),
        (e.stringLength = st),
        (e.stringToByteArray = at)
    },
    zhAb: function(t, e, n) {
      var r = n('aagx'),
        i = n('aCFj'),
        o = n('w2a5')(!1),
        a = n('YTvA')('IE_PROTO')
      t.exports = function(t, e) {
        var n,
          s = i(t),
          u = 0,
          c = []
        for (n in s) n != a && r(s, n) && c.push(n)
        while (e.length > u) r(s, (n = e[u++])) && (~o(c, n) || c.push(n))
        return c
      }
    }
  }
])
//# sourceMappingURL=chunk-vendors.685021b5.js.map
