;(function(t) {
  function e(e) {
    for (
      var r, u, o = e[0], s = e[1], c = e[2], l = 0, d = [];
      l < o.length;
      l++
    )
      (u = o[l]), i[u] && d.push(i[u][0]), (i[u] = 0)
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r])
    f && f(e)
    while (d.length) d.shift()()
    return a.push.apply(a, c || []), n()
  }
  function n() {
    for (var t, e = 0; e < a.length; e++) {
      for (var n = a[e], r = !0, o = 1; o < n.length; o++) {
        var s = n[o]
        0 !== i[s] && (r = !1)
      }
      r && (a.splice(e--, 1), (t = u((u.s = n[0]))))
    }
    return t
  }
  var r = {},
    i = { 1: 0 },
    a = []
  function u(e) {
    if (r[e]) return r[e].exports
    var n = (r[e] = { i: e, l: !1, exports: {} })
    return t[e].call(n.exports, n, n.exports, u), (n.l = !0), n.exports
  }
  ;(u.m = t),
    (u.c = r),
    (u.d = function(t, e, n) {
      u.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
    }),
    (u.r = function(t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (u.t = function(t, e) {
      if ((1 & e && (t = u(t)), 8 & e)) return t
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t
      var n = Object.create(null)
      if (
        (u.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var r in t)
          u.d(
            n,
            r,
            function(e) {
              return t[e]
            }.bind(null, r)
          )
      return n
    }),
    (u.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t['default']
            }
          : function() {
              return t
            }
      return u.d(e, 'a', e), e
    }),
    (u.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (u.p = '/')
  var o = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    s = o.push.bind(o)
  ;(o.push = e), (o = o.slice())
  for (var c = 0; c < o.length; c++) e(o[c])
  var f = s
  a.push(['qUnD', 0]), n()
})({
  '+PHP': function(t, e, n) {
    'use strict'
    var r = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return t.item
          ? n(
              'div',
              { staticClass: 'item-view' },
              [
                t.item
                  ? [
                      n('div', { staticClass: 'item-view-header' }, [
                        n(
                          'a',
                          { attrs: { href: t.item.url, target: '_blank' } },
                          [n('h1', [t._v(t._s(t.item.title))])]
                        ),
                        t.item.url
                          ? n('span', { staticClass: 'host' }, [
                              t._v(
                                '\n        (' +
                                  t._s(t._f('host')(t.item.url)) +
                                  ')\n      '
                              )
                            ])
                          : t._e(),
                        n(
                          'p',
                          { staticClass: 'meta' },
                          [
                            t._v(
                              '\n        ' +
                                t._s(t.item.score) +
                                ' points\n        | by '
                            ),
                            n(
                              'router-link',
                              { attrs: { to: '/user/' + t.item.by } },
                              [t._v(t._s(t.item.by))]
                            ),
                            t._v(
                              '\n        ' +
                                t._s(t._f('timeAgo')(t.item.time)) +
                                ' ago\n      '
                            )
                          ],
                          1
                        )
                      ]),
                      n('div', { staticClass: 'item-view-comments' }, [
                        n(
                          'p',
                          { staticClass: 'item-view-comments-header' },
                          [
                            t._v(
                              '\n        ' +
                                t._s(
                                  t.item.kids
                                    ? t.item.descendants + ' comments'
                                    : 'No comments yet.'
                                ) +
                                '\n        '
                            ),
                            t.loading && t.item.kids ? n('spinner') : t._e()
                          ],
                          1
                        ),
                        t.loading
                          ? t._e()
                          : n(
                              'ul',
                              { staticClass: 'comment-children' },
                              t._l(t.item.kids, function(t) {
                                return n('comment', {
                                  key: t,
                                  attrs: { id: t }
                                })
                              })
                            )
                      ])
                    ]
                  : t._e()
              ],
              2
            )
          : t._e()
      },
      i = []
    n.d(e, 'a', function() {
      return r
    }),
      n.d(e, 'b', function() {
        return i
      })
  },
  '/ac6': function(t, e, n) {
    'use strict'
    var r = n('SW2M')
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0)
    var i = r(n('d3Ox')),
      a = { components: { ItemList: i.default } }
    e.default = a
  },
  '/fb4': function(t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0)
    var r = { HTTPStatus: 404 }
    e.default = r
  },
  '0D80': function(t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0)
    var r = { props: ['item'] }
    e.default = r
  },
  '0EbK': function(t, e, n) {
    'use strict'
    var r = n('SW2M')
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0)
    var i = r(n('d3Ox')),
      a = r(n('LAL4')),
      u = r(n('MvUQ')),
      o = r(n('lwP7')),
      s = [
        { path: '/:type(top|new|show|ask|job)/:page?', component: i.default },
        { path: '/', redirect: '/top' },
        { path: '/item/:id(\\d+)', component: a.default },
        { path: '/user/:id', component: u.default },
        { path: '/*', component: o.default }
      ]
    e.default = s
  },
  '0Pv8': function(t, e, n) {},
  '2zSH': function(t, e, n) {
    'use strict'
    var r = n('SW2M')
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.createAPI = a)
    var i = r(n('Wcq6'))
    function a(t) {
      var e = t.config,
        n = t.version
      return i.default.initializeApp(e), i.default.database().ref(n)
    }
    n('Zs65')
  },
  '6lax': function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('qYcb'),
      i = n.n(r)
    for (var a in r)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return r[t]
          })
        })(a)
    e['default'] = i.a
  },
  '822c': function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('o/+p'),
      i = n.n(r)
    for (var a in r)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return r[t]
          })
        })(a)
    e['default'] = i.a
  },
  BDkB: function(t, e, n) {
    'use strict'
    var r = n('SW2M')
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = void 0),
      n('rGqo')
    var i = r(n('Kw5r')),
      a = {
        setItem: function(t, e) {
          var n = e.item
          t.item = n
        },
        setItems: function(t, e) {
          var n = e.items
          t.items = n
        },
        setComments: function(t, e) {
          var n = e.comments
          n.forEach(function(e) {
            console.log(e, 'comment'), e && i.default.set(t.comments, e.id, e)
          })
        },
        setUser: function(t, e) {
          var n = e.user
          t.user = n
        }
      }
    e.default = a
  },
  C94o: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('/fb4'),
      i = n.n(r)
    for (var a in r)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return r[t]
          })
        })(a)
    e['default'] = i.a
  },
  Cpy9: function(t, e, n) {
    'use strict'
    var r = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n('div', { attrs: { id: 'app' } }, [
          n('header', { staticClass: 'header' }, [
            n(
              'nav',
              { staticClass: 'inner' },
              [
                n('router-link', { attrs: { to: '/top' } }, [t._v('Top')]),
                n('router-link', { attrs: { to: '/new' } }, [t._v('New')]),
                n('router-link', { attrs: { to: '/show' } }, [t._v('Show')]),
                n('router-link', { attrs: { to: '/ask' } }, [t._v('Ask')]),
                n('router-link', { attrs: { to: '/job' } }, [t._v('Jobs')])
              ],
              1
            )
          ]),
          n(
            'div',
            { staticClass: 'view' },
            [n('router-view', { key: t.$route.params.type })],
            1
          )
        ])
      },
      i = []
    n.d(e, 'a', function() {
      return r
    }),
      n.d(e, 'b', function() {
        return i
      })
  },
  Dvv6: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('rafd'),
      i = n.n(r)
    for (var a in r)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return r[t]
          })
        })(a)
    e['default'] = i.a
  },
  EDI0: function(t, e, n) {},
  ERIh: function(t, e, n) {
    'use strict'
    var r = n('SW2M')
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.createApp = v)
    var i = r(n('Kw5r')),
      a = r(n('L2JU')),
      u = r(n('jE9Z')),
      o = n('Mb3Q'),
      s = r(n('Pf3K')),
      c = r(n('lJMA')),
      f = r(n('gB7L')),
      l = n('HOcL'),
      d = n('WtST')
    function v() {
      i.default.use(a.default), i.default.use(u.default)
      var t = new u.default(f.default),
        e = new a.default.Store(c.default)
      ;(0, o.sync)(e, t)
      var n = new i.default({
        router: t,
        store: e,
        render: function(t) {
          return t(s.default)
        }
      })
      return { app: n, router: t, store: e }
    }
    i.default.mixin(l.titleMixin),
      i.default.mixin(l.HTTPStatusMixin),
      i.default.filter('timeAgo', d.timeAgo),
      i.default.filter('host', d.host)
  },
  EcE9: function(t, e, n) {},
  ErPd: function(t, e, n) {},
  GcS2: function(t, e, n) {
    'use strict'
    var r = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n('li', { staticClass: 'item' }, [
          n('span', { staticClass: 'score' }, [t._v(t._s(t.item.score))]),
          n('span', { staticClass: 'title' }, [
            n(
              'a',
              {
                attrs: { href: t.item.url, target: '_blank', rel: 'noopener' }
              },
              [t._v(t._s(t.item.title))]
            ),
            n('span', { staticClass: 'host' }, [
              t._v(' (' + t._s(t._f('host')(t.item.url)) + ')')
            ])
          ]),
          n('br'),
          n('span', { staticClass: 'meta' }, [
            'job' !== t.item.type
              ? n(
                  'span',
                  { staticClass: 'by' },
                  [
                    t._v('\n      by '),
                    n('router-link', { attrs: { to: '/user/' + t.item.by } }, [
                      t._v(t._s(t.item.by))
                    ])
                  ],
                  1
                )
              : t._e(),
            'job' !== t.item.type
              ? n(
                  'span',
                  { staticClass: 'comments-link' },
                  [
                    t._v('\n      | '),
                    n('router-link', { attrs: { to: '/item/' + t.item.id } }, [
                      t._v(t._s(t.item.descendants) + ' comments')
                    ])
                  ],
                  1
                )
              : t._e(),
            n('span', [
              t._v(
                '\n      ' + t._s(t._f('timeAgo')(t.item.time)) + ' ago\n    '
              )
            ])
          ])
        ])
      },
      i = []
    n.d(e, 'a', function() {
      return r
    }),
      n.d(e, 'b', function() {
        return i
      })
  },
  HOcL: function(t, e, n) {
    'use strict'
    function r(t) {
      var e = t.$options.title
      if (e) return 'function' === typeof e ? e.call(t) : e
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.HTTPStatusMixin = e.titleMixin = void 0)
    var i = {
      mounted: function() {
        var t = r(this)
        t && (document.title = 'Vue HN | '.concat(t))
      }
    }
    e.titleMixin = i
    var a = {
      created: function() {
        this.$ssrContext &&
          this.$options.HTTPStatus &&
          (this.$ssrContext.HTTPStatus = this.$options.HTTPStatus)
      }
    }
    e.HTTPStatusMixin = a
  },
  I3XD: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n('transition', [
          n(
            'svg',
            {
              staticClass: 'spinner',
              attrs: { width: '44px', height: '44px', viewBox: '0 0 44 44' }
            },
            [
              n('circle', {
                staticClass: 'path',
                attrs: {
                  fill: 'none',
                  'stroke-width': '4',
                  'stroke-linecap': 'round',
                  cx: '22',
                  cy: '22',
                  r: '20'
                }
              })
            ]
          )
        ])
      },
      i = [],
      a = n('KHd+'),
      u = {}
    function o(t) {
      var e = n('g1Tg')
      e.__inject__ && e.__inject__(t)
    }
    var s = Object(a['a'])(u, r, i, !1, o, null, '4a917dac')
    e['default'] = s.exports
  },
  Jm67: function(t, e, n) {},
  LAL4: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('+PHP'),
      i = n('822c')
    for (var a in i)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return i[t]
          })
        })(a)
    var u = n('KHd+')
    function o(t) {
      var e = n('VzmJ')
      e.__inject__ && e.__inject__(t)
    }
    var s = Object(u['a'])(
      i['default'],
      r['a'],
      r['b'],
      !1,
      o,
      null,
      'a876deba'
    )
    e['default'] = s.exports
  },
  MvUQ: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('fmKB'),
      i = n('SCRq')
    for (var a in i)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return i[t]
          })
        })(a)
    var u = n('KHd+')
    function o(t) {
      var e = n('n+ZM')
      e.__inject__ && e.__inject__(t)
    }
    var s = Object(u['a'])(
      i['default'],
      r['a'],
      r['b'],
      !1,
      o,
      null,
      '5889c95b'
    )
    e['default'] = s.exports
  },
  Pf3K: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('Cpy9'),
      i = n('QtiU')
    for (var a in i)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return i[t]
          })
        })(a)
    var u = n('KHd+')
    function o(t) {
      var e = n('ZL7j')
      e.__inject__ && e.__inject__(t)
    }
    var s = Object(u['a'])(
      i['default'],
      r['a'],
      r['b'],
      !1,
      o,
      null,
      'f3578072'
    )
    e['default'] = s.exports
  },
  QX7p: function(t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0)
    var r = {
      name: 'comment',
      props: ['id'],
      data: function() {
        return { open: !0 }
      },
      computed: {
        comment: function() {
          return this.$store.state.comments[this.id]
        }
      },
      methods: {
        pluralize: function(t) {
          return t + (1 === t ? ' reply' : ' replies')
        }
      }
    }
    e.default = r
  },
  QtiU: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('/ac6'),
      i = n.n(r)
    for (var a in r)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return r[t]
          })
        })(a)
    e['default'] = i.a
  },
  SCRq: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('b6vY'),
      i = n.n(r)
    for (var a in r)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return r[t]
          })
        })(a)
    e['default'] = i.a
  },
  TZve: function(t, e, n) {
    'use strict'
    var r = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return t.comment
          ? n('li', { staticClass: 'comment' }, [
              n(
                'div',
                { staticClass: 'by' },
                [
                  n('router-link', { attrs: { to: '/user/' + t.comment.by } }, [
                    t._v(t._s(t.comment.by))
                  ]),
                  t._v(
                    '\n    ' +
                      t._s(t._f('timeAgo')(t.comment.time)) +
                      ' ago\n  '
                  )
                ],
                1
              ),
              n('div', {
                staticClass: 'text',
                domProps: { innerHTML: t._s(t.comment.text) }
              }),
              t.comment.kids && t.comment.kids.length
                ? n('div', { staticClass: 'toggle', class: { open: t.open } }, [
                    n(
                      'a',
                      {
                        on: {
                          click: function(e) {
                            t.open = !t.open
                          }
                        }
                      },
                      [
                        t._v(
                          t._s(
                            t.open
                              ? '[-]'
                              : '[+] ' +
                                t.pluralize(t.comment.kids.length) +
                                ' collapsed'
                          )
                        )
                      ]
                    )
                  ])
                : t._e(),
              n(
                'ul',
                {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: t.open,
                      expression: 'open'
                    }
                  ],
                  staticClass: 'comment-children'
                },
                t._l(t.comment.kids, function(t) {
                  return n('comment', { key: t, attrs: { id: t } })
                })
              )
            ])
          : t._e()
      },
      i = []
    n.d(e, 'a', function() {
      return r
    }),
      n.d(e, 'b', function() {
        return i
      })
  },
  'TqP/': function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('TZve'),
      i = n('fweH')
    for (var a in i)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return i[t]
          })
        })(a)
    var u = n('KHd+')
    function o(t) {
      var e = n('sWhz')
      e.__inject__ && e.__inject__(t)
    }
    var s = Object(u['a'])(
      i['default'],
      r['a'],
      r['b'],
      !1,
      o,
      null,
      '969a2b20'
    )
    e['default'] = s.exports
  },
  TsPW: function(t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.fetchListData = u),
      (e.fetchIdsByType = o),
      (e.fetchItem = s),
      (e.fetchItems = c),
      (e.fetchUser = f),
      n('rGqo'),
      n('yt8O'),
      n('VRzm')
    var r = n('2zSH'),
      i = (0, r.createAPI)({
        version: '/v0',
        config: { databaseURL: 'https://hacker-news.firebaseio.com' }
      })
    function a(t) {
      var e = i.cachedItems
      return e && e.has(t)
        ? Promise.resolve(e.get(t))
        : new Promise(function(n, r) {
            i.child(t).once(
              'value',
              function(r) {
                var i = r.val()
                i && (i.__lastUpdated = Date.now()), e && e.set(t, i), n(i)
              },
              r
            )
          })
    }
    function u(t) {
      return o(t).then(function(t) {
        return c(t)
      })
    }
    function o(t) {
      return i.cachedIds && i.cachedIds[t]
        ? Promise.resolve(i.cachedIds[t])
        : a(''.concat(t, 'stories'))
    }
    function s(t) {
      return a('item/'.concat(t))
    }
    function c(t) {
      return Promise.all(
        t.map(function(t) {
          return s(t)
        })
      )
    }
    function f(t) {
      return a('user/'.concat(t))
    }
  },
  VzmJ: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('EcE9'),
      i = n.n(r)
    for (var a in r)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return r[t]
          })
        })(a)
    e['default'] = i.a
  },
  W55Z: function(t, e, n) {},
  WtST: function(t, e, n) {
    'use strict'
    function r(t) {
      if (!t) return ''
      var e = t.replace(/^https?:\/\//, '').replace(/\/.*$/, ''),
        n = e.split('.').slice(-3)
      return 'www' === n[0] && n.shift(), n.join('.')
    }
    function i(t) {
      var e = Date.now() / 1e3 - Number(t)
      return e < 3600
        ? a(e / 60, ' minute')
        : e < 86400
          ? a(e / 3600, ' hour')
          : a(e / 86400, ' day')
    }
    function a(t, e) {
      var n = Math.round(t)
      return 1 === n ? n + e : n + e + 's'
    }
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.host = r),
      (e.timeAgo = i),
      n('xfY5'),
      n('KKXr'),
      n('pIFo')
  },
  Xn2k: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('GcS2'),
      i = n('wvHp')
    for (var a in i)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return i[t]
          })
        })(a)
    var u = n('KHd+')
    function o(t) {
      var e = n('oR1k')
      e.__inject__ && e.__inject__(t)
    }
    var s = Object(u['a'])(
      i['default'],
      r['a'],
      r['b'],
      !1,
      o,
      '56a69082',
      '73e125d2'
    )
    e['default'] = s.exports
  },
  'Y+Aq': function(t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = void 0),
      n('VRzm'),
      n('rGqo'),
      n('yt8O')
    var r = n('TsPW'),
      i = {
        fetchListData: function(t, e) {
          var n = t.commit,
            i = e.type
          return (0, r.fetchListData)(i).then(function(t) {
            return n('setItems', { items: t })
          })
        },
        fetchComments: function(t, e) {
          var n = t.commit,
            i = t.dispatch,
            a = e.item
          if (a)
            return (0, r.fetchItems)(a.kids || []).then(function(t) {
              return (
                n('setComments', { comments: t }),
                Promise.all(
                  t.map(function(t) {
                    return i('fetchComments', { item: t })
                  })
                )
              )
            })
        },
        fetchItem: function(t, e) {
          var n = t.commit,
            i = e.id
          return (0, r.fetchItem)(i).then(function(t) {
            return n('setItem', { item: t })
          })
        },
        fetchUser: function(t, e) {
          var n = t.commit,
            i = (t.state, e.id)
          return (0, r.fetchUser)(i).then(function(t) {
            return n('setUser', { user: t })
          })
        }
      }
    e.default = i
  },
  ZL7j: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('EDI0'),
      i = n.n(r)
    for (var a in r)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return r[t]
          })
        })(a)
    e['default'] = i.a
  },
  ZWLY: function(t, e, n) {
    'use strict'
    var r = function() {
        var t = this,
          e = t.$createElement
        t._self._c
        return t._m(0)
      },
      i = [
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div', { staticClass: 'container' }, [
            n('h1', [t._v('404')]),
            n('p', [
              t._v(
                "The page you're looking for could not be found. Try selecting one of the lists in the nav bar."
              )
            ])
          ])
        }
      ]
    n.d(e, 'a', function() {
      return r
    }),
      n.d(e, 'b', function() {
        return i
      })
  },
  b6vY: function(t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0)
    var r = {
      name: 'user-view',
      computed: {
        user: function() {
          return this.$store.state.user
        }
      },
      beforeCreate: function() {
        var t = this.$route.params.id
        return this.$store.dispatch('fetchUser', { id: t })
      },
      title: function() {
        return this.$route.params.id
      }
    }
    e.default = r
  },
  d3Ox: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('nfQA'),
      i = n('6lax')
    for (var a in i)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return i[t]
          })
        })(a)
    var u = n('KHd+')
    function o(t) {
      var e = n('f2ZN')
      e.__inject__ && e.__inject__(t)
    }
    var s = Object(u['a'])(
      i['default'],
      r['a'],
      r['b'],
      !1,
      o,
      null,
      '969b3bc8'
    )
    e['default'] = s.exports
  },
  f2ZN: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('l5Ez'),
      i = n.n(r)
    for (var a in r)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return r[t]
          })
        })(a)
    e['default'] = i.a
  },
  fmKB: function(t, e, n) {
    'use strict'
    var r = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n(
          'div',
          { staticClass: 'user-view' },
          [
            t.user
              ? [
                  n('h1', [t._v('User : ' + t._s(t.user.id))]),
                  n('ul', { staticClass: 'meta' }, [
                    n('li', [
                      n('span', { staticClass: 'label' }, [t._v('Created:')]),
                      t._v(' ' + t._s(t._f('timeAgo')(t.user.created)) + ' ago')
                    ]),
                    n('li', [
                      n('span', { staticClass: 'label' }, [t._v('Karma:')]),
                      t._v(' ' + t._s(t.user.karma))
                    ]),
                    t.user.about
                      ? n('li', {
                          staticClass: 'about',
                          domProps: { innerHTML: t._s(t.user.about) }
                        })
                      : t._e()
                  ]),
                  n('p', { staticClass: 'links' }, [
                    n(
                      'a',
                      {
                        attrs: {
                          href:
                            'https://news.ycombinator.com/submitted?id=' +
                            t.user.id
                        }
                      },
                      [t._v('submissions')]
                    ),
                    t._v(' |\n      '),
                    n(
                      'a',
                      {
                        attrs: {
                          href:
                            'https://news.ycombinator.com/threads?id=' +
                            t.user.id
                        }
                      },
                      [t._v('comments')]
                    )
                  ])
                ]
              : !1 === t.user
                ? [n('h1', [t._v('User not found.')])]
                : t._e()
          ],
          2
        )
      },
      i = []
    n.d(e, 'a', function() {
      return r
    }),
      n.d(e, 'b', function() {
        return i
      })
  },
  fweH: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('QX7p'),
      i = n.n(r)
    for (var a in r)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return r[t]
          })
        })(a)
    e['default'] = i.a
  },
  g1Tg: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('Jm67'),
      i = n.n(r)
    for (var a in r)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return r[t]
          })
        })(a)
    e['default'] = i.a
  },
  gB7L: function(t, e, n) {
    'use strict'
    var r = n('SW2M')
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0)
    var i = r(n('0EbK')),
      a = { mode: 'history', routes: i.default }
    e.default = a
  },
  l5Ez: function(t, e, n) {},
  lJMA: function(t, e, n) {
    'use strict'
    var r = n('SW2M')
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0)
    var i = r(n('Y+Aq')),
      a = r(n('BDkB')),
      u = r(n('lNWa')),
      o = { item: null, items: [], comments: {}, user: null },
      s = {
        state: o,
        getters: u.default,
        actions: i.default,
        mutations: a.default
      }
    e.default = s
  },
  lNWa: function(t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = void 0),
      n('xfY5')
    var r = {
      displayItems: function(t) {
        var e = Number(t.route.params.page) || 1,
          n = 20 * (e - 1),
          r = 20 * e
        return t.items.slice(n, r)
      },
      maxPage: function(t) {
        return Math.ceil(t.items.length / 20)
      }
    }
    e.default = r
  },
  lwP7: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('ZWLY'),
      i = n('C94o')
    for (var a in i)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return i[t]
          })
        })(a)
    var u = n('KHd+')
    function o(t) {
      var e = n('skjH')
      e.__inject__ && e.__inject__(t)
    }
    var s = Object(u['a'])(
      i['default'],
      r['a'],
      r['b'],
      !1,
      o,
      null,
      '51be0d3a'
    )
    e['default'] = s.exports
  },
  mMpw: function(t, e, n) {},
  'n+ZM': function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('0Pv8'),
      i = n.n(r)
    for (var a in r)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return r[t]
          })
        })(a)
    e['default'] = i.a
  },
  nJ8i: function(t, e, n) {
    'use strict'
    var r = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n('div', {
          staticClass: 'progress',
          class: { hidden: t.hidden, error: t.error },
          style: { width: t.percent + '%' }
        })
      },
      i = []
    n.d(e, 'a', function() {
      return r
    }),
      n.d(e, 'b', function() {
        return i
      })
  },
  nfQA: function(t, e, n) {
    'use strict'
    var r = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n('div', { staticClass: 'item-list-view' }, [
          n(
            'div',
            { staticClass: 'item-list-nav' },
            [
              t.page > 1
                ? n(
                    'router-link',
                    { attrs: { to: '/' + t.type + '/' + (t.page - 1) } },
                    [t._v('\n      < prev\n    ')]
                  )
                : n('a', [t._v('< prev')]),
              n('span', [t._v(t._s(t.page || 1) + '/' + t._s(t.maxPage))]),
              (t.page || 1) < t.maxPage
                ? n(
                    'router-link',
                    {
                      attrs: {
                        to: '/' + t.type + '/' + ((Number(t.page) || 1) + 1)
                      }
                    },
                    [t._v('\n        more >\n    ')]
                  )
                : n('a', [t._v('more >')])
            ],
            1
          ),
          n(
            'div',
            { staticClass: 'item-list' },
            t._l(t.$store.getters.displayItems, function(t) {
              return n('item', { key: t.id, attrs: { item: t } })
            })
          )
        ])
      },
      i = []
    n.d(e, 'a', function() {
      return r
    }),
      n.d(e, 'b', function() {
        return i
      })
  },
  'o/+p': function(t, e, n) {
    'use strict'
    var r = n('SW2M')
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0)
    var i = r(n('I3XD')),
      a = r(n('TqP/')),
      u = {
        name: 'item-view',
        components: { Spinner: i.default, Comment: a.default },
        data: function() {
          return { loading: !0 }
        },
        computed: {
          item: function() {
            return this.$store.state.item
          }
        },
        title: function() {
          return 'Item'
        },
        beforeMount: function() {
          this.$store.dispatch('fetchItem', { id: this.$route.params.id })
        },
        watch: { item: 'fetchComments' },
        methods: {
          fetchComments: function(t) {
            var e = this
            this.$store.dispatch('fetchComments', { item: t }).then(function() {
              e.loading = !1
            })
          }
        }
      }
    e.default = u
  },
  oR1k: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('W55Z'),
      i = n.n(r)
    for (var a in r)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return r[t]
          })
        })(a)
    e['default'] = i.a
  },
  pcwE: function(t, e, n) {
    'use strict'
    var r = n('ErPd'),
      i = n.n(r)
    i.a
  },
  qUnD: function(t, e, n) {
    'use strict'
    var r = n('SW2M'),
      i = r(n('Kw5r')),
      a = n('ERIh'),
      u = r(n('trTi')),
      o = (i.default.prototype.$bar = new i.default(u.default).$mount())
    document.body.appendChild(o.$el)
    var s = (0, a.createApp)(),
      c = s.app,
      f = s.store
    window.__INITIAL_STATE__ && f.replaceState(window.__INITIAL_STATE__),
      c.$mount('#app')
  },
  qYcb: function(t, e, n) {
    'use strict'
    var r = n('SW2M')
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = void 0),
      n('pIFo'),
      n('xfY5')
    var i = r(n('Xn2k'))
    function a(t) {
      return t.charAt(0).toUpperCase() + t.slice(1)
    }
    var u = {
      components: { Item: i.default },
      beforeMount: function() {
        this.loadItems()
      },
      title: function() {
        return ''.concat(a(this.$route.params.type))
      },
      computed: {
        type: function() {
          return this.$route.params.type
        },
        page: function() {
          return this.$route.params.page
        },
        maxPage: function() {
          return this.$store.getters.maxPage
        }
      },
      methods: {
        loadItems: function() {
          var t = this
          this.$bar.start(),
            this.$store
              .dispatch('fetchListData', { type: this.type })
              .then(function() {
                t.page && (t.page > t.maxPage || t.page <= 0 || !Number(t.page))
                  ? t.$router.replace('/'.concat(t.type, '/1'))
                  : t.$bar.finish()
              })
              .catch(function() {
                t.$bar.fail()
              })
        }
      }
    }
    e.default = u
  },
  rafd: function(t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0)
    var r = {
      data: function() {
        return { hidden: !0, percent: 0, error: !1 }
      },
      methods: {
        start: function() {
          var t = this
          ;(this.hidden = !1),
            (this.error = !1),
            (this.percent = 0),
            (this.timer = setInterval(function() {
              t.percent++
            }, 100))
        },
        finish: function() {
          ;(this.percent = 100), (this.hidden = !0), clearInterval(this.timer)
        },
        fail: function() {
          ;(this.error = !0), (this.percent = 100)
        }
      }
    }
    e.default = r
  },
  sWhz: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('mMpw'),
      i = n.n(r)
    for (var a in r)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return r[t]
          })
        })(a)
    e['default'] = i.a
  },
  skjH: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('t5Bk'),
      i = n.n(r)
    for (var a in r)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return r[t]
          })
        })(a)
    e['default'] = i.a
  },
  t5Bk: function(t, e, n) {},
  trTi: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('nJ8i'),
      i = n('Dvv6')
    for (var a in i)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return i[t]
          })
        })(a)
    n('pcwE')
    var u = n('KHd+'),
      o = Object(u['a'])(
        i['default'],
        r['a'],
        r['b'],
        !1,
        null,
        '0ad7e6f8',
        null
      )
    e['default'] = o.exports
  },
  wvHp: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('0D80'),
      i = n.n(r)
    for (var a in r)
      'default' !== a &&
        (function(t) {
          n.d(e, t, function() {
            return r[t]
          })
        })(a)
    e['default'] = i.a
  }
})
//# sourceMappingURL=main.97aefee2.js.map
