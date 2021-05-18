(function (e) {
    function t(t) {
        for (var a, s, o = t[0], h = t[1], c = t[2], l = 0, p = []; l < o.length; l++) s = o[l], Object.prototype.hasOwnProperty.call(i, s) && i[s] && p.push(i[s][0]), i[s] = 0;
        for (a in h) Object.prototype.hasOwnProperty.call(h, a) && (e[a] = h[a]);
        d && d(t);
        while (p.length) p.shift()();
        return r.push.apply(r, c || []), n()
    }

    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], a = !0, o = 1; o < n.length; o++) {
                var h = n[o];
                0 !== i[h] && (a = !1)
            }
            a && (r.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }

    var a = {}, i = {app: 0}, r = [];

    function s(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {i: t, l: !1, exports: {}};
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }

    s.m = e, s.c = a, s.d = function (e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, s.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, s.t = function (e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var a in e) s.d(n, a, function (t) {
            return e[t]
        }.bind(null, a));
        return n
    }, s.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [], h = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var c = 0; c < o.length; c++) t(o[c]);
    var d = h;
    r.push([0, "chunk-vendors"]), n()
})({
    0: function (e, t, n) {
        e.exports = n("56d7")
    }, "034f": function (e, t, n) {
        "use strict";
        n("85ec")
    }, "56d7": function (e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var a = n("2b0e"), i = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {attrs: {id: "app"}}, [n("pawnShopThree"), n("three-j-s-pawn-shop")], 1)
            }, r = [], s = function () {
                var e = this, t = e.$createElement;
                e._self._c;
                return e._m(0)
            }, o = [function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {attrs: {align: "left"}}, [a("div", [a("a", {
                    staticStyle: {
                        "font-family": "隶书",
                        color: "#f56c6c"
                    }, attrs: {href: "https://www.zcool.com.cn/u/1329797"}
                }, [e._v("·氿鲤· 设计来源")]), a("span", {
                    staticStyle: {
                        "font-family": "a372",
                        "font-size": "30px"
                    }
                }, [e._v(" 雨汐镇·当铺")])]), a("div", [a("img", {
                    attrs: {
                        src: n("c296"),
                        height: "722",
                        width: "1280"
                    }
                })]), a("canvas", {
                    staticStyle: {
                        "font-family": "a372",
                        border: "2px solid #f56c6c",
                        width: "1276px",
                        height: "716px",
                        "line-height": "716px",
                        "text-align": "center"
                    }, attrs: {id: "webgl"}
                }, [e._v("这里会有一个3D空间，实现·当铺·")])])
            }],
            h = (n("d3b7"), n("cfc3"), n("84c3"), n("fb2c"), n("9a8c"), n("a975"), n("735e"), n("c1ac"), n("d139"), n("3a7b"), n("d5d6"), n("82f8"), n("e91f"), n("60bd"), n("5f96"), n("3280"), n("3fcc"), n("ca91"), n("25a1"), n("cd26"), n("3c5d"), n("2954"), n("649e"), n("219c"), n("170b"), n("b39a"), n("72f7"), {
                name: "pawnShopThree",
                data: function () {
                    return {}
                },
                mounted: function () {
                    var e = document.getElementById("webgl"), t = e.getContext("webgl");
                    if (!t) throw new Error("WebGL failed to initialize");
                    t.clearColor(0, 0, 0, 0), t.colorMask(!0, !0, !0, !0), t.enable(t.DEPTH_TEST), t.depthFunc(t.LEQUAL), t.cullFace(t.BACK), t.blendFunc(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA);
                    var n = new Float32Array([1, -1, 0, -1, -1, 0, 0, 1, 0]),
                        a = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), i = function (e) {
                            var n = t.createBuffer(),
                                a = e instanceof Uint16Array || e instanceof Uint32Array ? t.ELEMENT_ARRAY_BUFFER : t.ARRAY_BUFFER;
                            return t.bindBuffer(a, n), t.bufferData(a, e, t.STATIC_DRAW), n
                        };
                    i(n), i(a);
                    var r = new Uint16Array([0, 1, 2]);
                    i(r)
                },
                method: function () {
                }
            }), c = h, d = (n("7099"), n("2877")), l = Object(d["a"])(c, s, o, !1, null, "ff92a5c2", null),
            p = l.exports, f = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {attrs: {id: "pawnshop"}})
            }, w = [], u = n("5a89"), m = {
                name: "ThreeJSPawnShop", data: function () {
                    return {
                        colors: {
                            red: 15881030,
                            white: 14209233,
                            brown: 5845806,
                            pink: 16095342,
                            brownDark: 2300175,
                            blue: 6865856
                        },
                        scene: {},
                        camera: {},
                        fieldOfView: {},
                        aspectRatio: {},
                        nearPlane: {},
                        farPlane: {},
                        HEIGHT: {},
                        WIDTH: {},
                        renderer: {},
                        container: {},
                        airplane: {},
                        sea: {},
                        cloud: {},
                        sky: {}
                    }
                }, mounted: function () {
                    this.init(), this.renderer.render(this.scene, this.camera)
                }, methods: {
                    init: function () {
                        this.createScene(), this.createLights(), this.createPlane(), this.createSea(), this.createSky(), this.loop()
                    }, createScene: function () {
                        this.HEIGHT = window.innerHeight, this.WIDTH = window.innerWidth, this.scene = new u["l"], this.scene.fog = new u["e"](16243114, 100, 950), this.aspectRatio = this.WIDTH / this.HEIGHT, this.fieldOfView = 60, this.nearPlane = 1, this.farPlane = 1e4, this.camera = new u["k"](this.fieldOfView, this.aspectRatio, this.nearPlane, this.farPlane), this.camera.position.x = 0, this.camera.position.z = 200, this.camera.position.y = 100, this.renderer = new u["m"]({
                            alpha: !0,
                            antialias: !0
                        }), this.renderer.setSize(this.WIDTH, this.HEIGHT), this.renderer.shadowMap.enabled = !0, this.container = document.getElementById("pawnshop"), this.container.appendChild(this.renderer.domElement), window.addEventListener("resize", this.handleWindowResize, !1)
                    }, handleWindowResize: function () {
                        this.HEIGHT = window.innerHeight, this.WIDTH = window.innerWidth, this.renderer.setSize(this.WIDTH, this.HEIGHT), this.camera.aspect = this.WIDTH / this.HEIGHT, this.camera.updateProjectionMatrix()
                    }, createLights: function () {
                        this.hemisphereLight = new u["f"](11184810, 0, .9), this.shadowLight = new u["c"](16777215, .9), this.shadowLight.position.set(150, 350, 350), this.shadowLight.castShadow = !0, this.shadowLight.shadow.camera.left = -400, this.shadowLight.shadow.camera.right = 400, this.shadowLight.shadow.camera.top = 400, this.shadowLight.shadow.camera.bottom = -400, this.shadowLight.shadow.camera.near = 1, this.shadowLight.shadow.camera.far = 1e3, this.shadowLight.shadow.mapSize.width = 2048, this.shadowLight.shadow.mapSize.height = 2048, this.scene.add(this.hemisphereLight), this.scene.add(this.shadowLight)
                    }, createSea: function () {
                        var e = function () {
                            var e = new u["b"](600, 600, 800, 40, 10);
                            e.applyMatrix((new u["g"]).makeRotationX(-Math.PI / 2));
                            var t = new u["i"]({color: "#0000FF", transparent: !0, opacity: .6, shading: u["d"]});
                            this.mesh = new u["h"](e, t), this.mesh.receiveShadow = !0
                        };
                        this.sea = new e, this.sea.mesh.position.y = -600, this.scene.add(this.sea.mesh)
                    }, createPlane: function () {
                        var e = function () {
                            this.mesh = new u["j"];
                            var e = new u["a"](60, 50, 50, 1, 1, 1), t = new u["i"]({color: "#FF0000", shading: u["d"]}),
                                n = new u["h"](e, t);
                            n.castShadow = !0, n.receiveShadow = !0, this.mesh.add(n);
                            var a = new u["a"](20, 50, 50, 1, 1, 1), i = new u["i"]({color: "#FFFFFF", shading: u["d"]}),
                                r = new u["h"](a, i);
                            r.position.x = 40, r.castShadow = !0, r.receiveShadow = !0, this.mesh.add(r);
                            var s = new u["a"](15, 20, 5, 1, 1, 1), o = new u["i"]({color: "#FF0000", shading: u["d"]}),
                                h = new u["h"](s, o);
                            h.position.set(-35, 25, 0), h.castShadow = !0, h.receiveShadow = !0, this.mesh.add(h);
                            var c = new u["a"](40, 8, 150, 1, 1, 1), d = new u["i"]({color: "#FF0000", shading: u["d"]}),
                                l = new u["h"](c, d);
                            l.castShadow = !0, l.receiveShadow = !0, this.mesh.add(l);
                            var p = new u["a"](20, 10, 10, 1, 1, 1), f = new u["i"]({color: "#00FF00", shading: u["d"]});
                            this.propeller = new u["h"](p, f), this.propeller.castShadow = !0, this.propeller.receiveShadow = !0;
                            var w = new u["a"](1, 100, 20, 1, 1, 1), m = new u["i"]({color: "#000000", shading: u["d"]}),
                                v = new u["h"](w, m);
                            v.position.set(8, 0, 0), v.castShadow = !0, v.receiveShadow = !0, this.propeller.add(v), this.propeller.position.set(50, 0, 0), this.mesh.add(this.propeller)
                        };
                        this.airplane = new e, this.airplane.mesh.scale.set(.25, .25, .25), this.airplane.mesh.position.y = 100, this.scene.add(this.airplane.mesh)
                    }, createSky: function () {
                        var e = function () {
                            this.mesh = new u["j"];
                            for (var e = new u["a"](20, 20, 20), t = new u["i"]({color: "#FFFFFF"}), n = 3 + Math.floor(3 * Math.random()), a = 0; a < n; a++) {
                                var i = new u["h"](e, t);
                                i.position.x = 15 * a, i.position.y = 10 * Math.random(), i.position.z = 10 * Math.random(), i.rotation.z = Math.random() * Math.PI * 2, i.rotation.y = Math.random() * Math.PI * 2;
                                var r = .1 + .9 * Math.random();
                                i.scale.set(r, r, r), i.castShadow = !0, i.receiveShadow = !0, this.mesh.add(i)
                            }
                        }, t = function () {
                            this.mesh = new u["j"], this.nClouds = 20;
                            for (var t = 2 * Math.PI / this.nClouds, n = 0; n < this.nClouds; n++) {
                                var a = new e, i = t * n, r = 750 + 200 * Math.random();
                                a.mesh.position.y = Math.sin(i) * r, a.mesh.position.x = Math.cos(i) * r, a.mesh.rotation.z = i + Math.PI / 2, a.mesh.position.z = -400 - 400 * Math.random();
                                var s = 1 + 2 * Math.random();
                                a.mesh.scale.set(s, s, s), this.mesh.add(a.mesh)
                            }
                        };
                        this.sky = new t, this.sky.mesh.position.y = -600, this.scene.add(this.sky.mesh)
                    }, loop: function () {
                        this.airplane.propeller.rotation.x += .3, this.sea.mesh.rotation.z += .005, this.sky.mesh.rotation.z += .01, this.renderer.render(this.scene, this.camera), requestAnimationFrame(this.loop)
                    }
                }
            }, v = m, g = Object(d["a"])(v, f, w, !1, null, "34c24731", null), y = g.exports,
            S = {name: "App", components: {pawnShopThree: p, ThreeJSPawnShop: y}}, b = S,
            F = (n("034f"), Object(d["a"])(b, i, r, !1, null, null, null)), T = F.exports, M = n("5c96"), _ = n.n(M),
            H = (n("0fae"), n("80d3")), P = n.n(H), E = (n("3f5c"), n("313e"));
        a["default"].config.productionTip = !1, a["default"].use(_.a), a["default"].use(P.a), a["default"].use(E), new a["default"]({
            render: function (e) {
                return e(T)
            }
        }).$mount("#app")
    }, 7099: function (e, t, n) {
        "use strict";
        n("9ff7")
    }, "85ec": function (e, t, n) {
    }, "9ff7": function (e, t, n) {
    }, c296: function (e, t, n) {
        e.exports = n.p + "./ty1hc.github.io/html/threeJs/vue/img/pawnshop.801d40e4.jpg"
    }
});
//# sourceMappingURL=app.d2a0d5e8.js.map
