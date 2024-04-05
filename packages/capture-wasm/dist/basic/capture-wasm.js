var createModule = (() => {
  var _scriptDir =
    typeof document !== "undefined" && document.currentScript
      ? document.currentScript.src
      : undefined;

  return function (moduleArg = {}) {
    /*

 Copyright 2019 The Emscripten Authors
 SPDX-License-Identifier: MIT

 Copyright 2013 The Emscripten Authors
 SPDX-License-Identifier: MIT

 This file gets implicatly injected as a `--post-js` file when
 emcc is run with `--emrun`
*/
    var k = moduleArg,
      aa,
      ba;
    k.ready = new Promise((a, b) => {
      aa = a;
      ba = b;
    });
    k.xb || (k.xb = 0);
    k.xb++;
    k.ENVIRONMENT_IS_PTHREAD ||
      k.$ww ||
      (function (a) {
        function b(l, n, q) {
          var p = new XMLHttpRequest();
          p.open("GET", l, !0);
          p.responseType = "arraybuffer";
          p.onprogress = function (t) {
            var h = n;
            t.total && (h = t.total);
            if (t.loaded) {
              p.ac
                ? (k.Wa[l].loaded = t.loaded)
                : ((p.ac = !0),
                  k.Wa || (k.Wa = {}),
                  (k.Wa[l] = { loaded: t.loaded, total: h }));
              var r = (h = t = 0),
                v;
              for (v in k.Wa) {
                var A = k.Wa[v];
                t += A.total;
                h += A.loaded;
                r++;
              }
              t = Math.ceil((t * k.xb) / r);
              k.setStatus && k.setStatus(`Downloading data... (${h}/${t})`);
            } else !k.Wa && k.setStatus && k.setStatus("Downloading data...");
          };
          p.onerror = function () {
            throw Error("NetworkError for: " + l);
          };
          p.onload = function () {
            if (
              200 == p.status ||
              304 == p.status ||
              206 == p.status ||
              (0 == p.status && p.response)
            )
              q(p.response);
            else throw Error(p.statusText + " : " + p.responseURL);
          };
          p.send(null);
        }
        function c(l) {
          console.error("package error:", l);
        }
        function d() {
          function l(t, h, r) {
            this.start = t;
            this.end = h;
            this.audio = r;
          }
          function n(t) {
            if (!t) throw "Loading data file failed." + Error().stack;
            if (t.constructor.name !== ArrayBuffer.name)
              throw "bad input to processPackageData" + Error().stack;
            t = new Uint8Array(t);
            l.prototype.ec = t;
            t = a.files;
            for (var h = 0; h < t.length; ++h)
              l.prototype.Fb[t[h].filename].onload();
            k.removeRunDependency(
              "datafile_/Users/ivan/Dev/imagecapture-browser/packages/capture-wasm/dist/basic/capture-wasm.data",
            );
          }
          k.FS_createPath("/", "microblink", !0, !0);
          k.FS_createPath("/microblink", "capture", !0, !0);
          l.prototype = {
            Fb: {},
            open: function (t, h) {
              this.name = h;
              this.Fb[h] = this;
              k.addRunDependency(`fp ${this.name}`);
            },
            send: function () {},
            onload: function () {
              this.finish(this.ec.subarray(this.start, this.end));
            },
            finish: function (t) {
              k.FS_createDataFile(this.name, null, t, !0, !0, !0);
              k.removeRunDependency(`fp ${this.name}`);
              this.Fb[this.name] = null;
            },
          };
          for (var q = a.files, p = 0; p < q.length; ++p)
            new l(q[p].start, q[p].end, q[p].audio || 0).open(
              "GET",
              q[p].filename,
            );
          k.addRunDependency(
            "datafile_/Users/ivan/Dev/imagecapture-browser/packages/capture-wasm/dist/basic/capture-wasm.data",
          );
          k.Sb || (k.Sb = {});
          k.Sb[
            "/Users/ivan/Dev/imagecapture-browser/packages/capture-wasm/dist/basic/capture-wasm.data"
          ] = { Oc: !1 };
          m ? (n(m), (m = null)) : (g = n);
        }
        "object" === typeof window
          ? window.encodeURIComponent(
              window.location.pathname
                .toString()
                .substring(
                  0,
                  window.location.pathname.toString().lastIndexOf("/"),
                ) + "/",
            )
          : "undefined" === typeof process &&
            "undefined" !== typeof location &&
            encodeURIComponent(
              location.pathname
                .toString()
                .substring(0, location.pathname.toString().lastIndexOf("/")) +
                "/",
            );
        "function" !== typeof k.locateFilePackage ||
          k.locateFile ||
          ((k.locateFile = k.locateFilePackage),
          u(
            "warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)",
          ));
        var e = k.locateFile
            ? k.locateFile("capture-wasm.data", "")
            : "capture-wasm.data",
          f = a.remote_package_size,
          g = null,
          m = k.getPreloadedPackage ? k.getPreloadedPackage(e, f) : null;
        m ||
          b(
            e,
            f,
            function (l) {
              g ? (g(l), (g = null)) : (m = l);
            },
            c,
          );
        k.calledRun ? d() : (k.preRun || (k.preRun = []), k.preRun.push(d));
      })({
        files: [
          {
            filename:
              "/microblink/capture/Model_021c530a7efe77c0e90c4bfe19c3bebaaceee433103e4e6d4f1424d921885982.strop",
            start: 0,
            end: 308674,
          },
          {
            filename:
              "/microblink/capture/Model_07c7ab860e77ec2e92bb822f6d62424b8595a5beb4340f6b2f7f6a4cffa5d050.strop",
            start: 308674,
            end: 429092,
          },
          {
            filename:
              "/microblink/capture/Model_2880751121560047e6dc571bc8ff4683aeb863886f7c0789234594ceb1e23577.strop",
            start: 429092,
            end: 433030,
          },
          {
            filename:
              "/microblink/capture/Model_3b11c3ffacbbf390b932fb9a7024f1a0016f66281ea8c790f8b5903374ad89c2.strop",
            start: 433030,
            end: 721810,
          },
          {
            filename:
              "/microblink/capture/Model_e4f1f62f68ec44b71ecad3fb3f3b48fe3790beb5ab325611e17d63af06e9f644.strop",
            start: 721810,
            end: 778324,
          },
          {
            filename:
              "/microblink/capture/Model_ed586fd6ca47c8eebb513c4ffaaacc2c54e92162b145062d7022519fba0911de.strop",
            start: 778324,
            end: 1491556,
          },
          {
            filename:
              "/microblink/capture/Model_f2874f5766b779c063dbe30467979163497dc4b29c43bab23d70c798ee32993a.strop",
            start: 1491556,
            end: 1573062,
          },
        ],
        remote_package_size: 1573062,
      });
    k.onAbort = function (a) {
      u("Aborted with message: " + a);
      try {
        throw new WebAssembly.RuntimeError(a);
      } catch (b) {
        u("Stacktrace: " + b.stack);
      }
    };
    if ("object" == typeof window) {
      k.arguments = window.location.search.substr(1).trim().split("&");
      for (let a = 0; a < k.arguments.length; ++a)
        k.arguments[a] = decodeURI(k.arguments[a]);
      k.arguments[0] || (k.arguments = []);
    }
    var ca = Object.assign({}, k),
      da = "./this.program",
      ea = (a, b) => {
        throw b;
      },
      fa = "",
      ha,
      ia,
      ka;
    fa = self.location.href;
    _scriptDir && (fa = _scriptDir);
    fa = fa.startsWith("blob:")
      ? ""
      : fa.substr(0, fa.replace(/[?#].*/, "").lastIndexOf("/") + 1);
    ha = (a) => {
      var b = new XMLHttpRequest();
      b.open("GET", a, !1);
      b.send(null);
      return b.responseText;
    };
    ka = (a) => {
      var b = new XMLHttpRequest();
      b.open("GET", a, !1);
      b.responseType = "arraybuffer";
      b.send(null);
      return new Uint8Array(b.response);
    };
    ia = (a, b, c) => {
      var d = new XMLHttpRequest();
      d.open("GET", a, !0);
      d.responseType = "arraybuffer";
      d.onload = () => {
        200 == d.status || (0 == d.status && d.response) ? b(d.response) : c();
      };
      d.onerror = c;
      d.send(null);
    };
    var la = k.print || console.log.bind(console),
      u = k.printErr || console.error.bind(console);
    Object.assign(k, ca);
    ca = null;
    k.thisProgram && (da = k.thisProgram);
    k.quit && (ea = k.quit);
    var ma;
    k.wasmBinary && (ma = k.wasmBinary);
    "object" != typeof WebAssembly && na("no native wasm support detected");
    var oa,
      pa = !1,
      qa,
      w,
      x,
      ra,
      z,
      B,
      C,
      sa,
      ta;
    function ua() {
      var a = oa.buffer;
      k.HEAP8 = w = new Int8Array(a);
      k.HEAP16 = ra = new Int16Array(a);
      k.HEAPU8 = x = new Uint8Array(a);
      k.HEAPU16 = z = new Uint16Array(a);
      k.HEAP32 = B = new Int32Array(a);
      k.HEAPU32 = C = new Uint32Array(a);
      k.HEAPF32 = sa = new Float32Array(a);
      k.HEAPF64 = ta = new Float64Array(a);
    }
    var va = [],
      wa = [],
      xa = [],
      ya = [],
      za = !1;
    function Aa() {
      var a = k.preRun.shift();
      va.unshift(a);
    }
    var Ba = 0,
      Ca = null,
      Da = null;
    function Ea() {
      Ba++;
      k.monitorRunDependencies?.(Ba);
    }
    function Fa() {
      Ba--;
      k.monitorRunDependencies?.(Ba);
      if (0 == Ba && (null !== Ca && (clearInterval(Ca), (Ca = null)), Da)) {
        var a = Da;
        Da = null;
        a();
      }
    }
    function na(a) {
      k.onAbort?.(a);
      a = "Aborted(" + a + ")";
      u(a);
      pa = !0;
      qa = 1;
      a = new WebAssembly.RuntimeError(
        a + ". Build with -sASSERTIONS for more info.",
      );
      ba(a);
      throw a;
    }
    var Ga = (a) => a.startsWith("data:application/octet-stream;base64,"),
      Ha;
    Ha = "capture-wasm.wasm";
    if (!Ga(Ha)) {
      var Ia = Ha;
      Ha = k.locateFile ? k.locateFile(Ia, fa) : fa + Ia;
    }
    function Ja(a) {
      if (a == Ha && ma) return new Uint8Array(ma);
      if (ka) return ka(a);
      throw "both async and sync fetching of the wasm failed";
    }
    function Ka(a) {
      return ma || "function" != typeof fetch
        ? Promise.resolve().then(() => Ja(a))
        : fetch(a, { credentials: "same-origin" })
            .then((b) => {
              if (!b.ok) throw `failed to load wasm binary file at '${a}'`;
              return b.arrayBuffer();
            })
            .catch(() => Ja(a));
    }
    function La(a, b, c) {
      return Ka(a)
        .then((d) => WebAssembly.instantiate(d, b))
        .then((d) => d)
        .then(c, (d) => {
          u(`failed to asynchronously prepare wasm: ${d}`);
          na(d);
        });
    }
    function Ma(a, b) {
      var c = Ha;
      return ma ||
        "function" != typeof WebAssembly.instantiateStreaming ||
        Ga(c) ||
        "function" != typeof fetch
        ? La(c, a, b)
        : fetch(c, { credentials: "same-origin" }).then((d) =>
            WebAssembly.instantiateStreaming(d, a).then(b, function (e) {
              u(`wasm streaming compile failed: ${e}`);
              u("falling back to ArrayBuffer instantiation");
              return La(c, a, b);
            }),
          );
    }
    var E,
      F,
      Na = {
        59692: (a, b, c, d) => {
          a = a ? I(x, a) : "";
          b = b ? I(x, b) : "";
          c = c ? I(x, c) : "";
          d = d ? I(x, d) : "";
          throw Error(a + b + c + d);
        },
        59908: (a, b) => {
          a = a ? I(x, a) : "";
          b = b ? I(x, b) : "";
          throw Error(a + b);
        },
      };
    function Oa(a) {
      this.name = "ExitStatus";
      this.message = `Program terminated with exit(${a})`;
      this.status = a;
    }
    var Qa = (a) => {
        for (; 0 < a.length; ) a.shift()(k);
      },
      Ra = k.noExitRuntime || !1,
      Sa = (a, b) => {
        for (var c = 0, d = a.length - 1; 0 <= d; d--) {
          var e = a[d];
          "." === e
            ? a.splice(d, 1)
            : ".." === e
            ? (a.splice(d, 1), c++)
            : c && (a.splice(d, 1), c--);
        }
        if (b) for (; c; c--) a.unshift("..");
        return a;
      },
      Ta = (a) => {
        var b = "/" === a.charAt(0),
          c = "/" === a.substr(-1);
        (a = Sa(
          a.split("/").filter((d) => !!d),
          !b,
        ).join("/")) ||
          b ||
          (a = ".");
        a && c && (a += "/");
        return (b ? "/" : "") + a;
      },
      Ua = (a) => {
        var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
          .exec(a)
          .slice(1);
        a = b[0];
        b = b[1];
        if (!a && !b) return ".";
        b &&= b.substr(0, b.length - 1);
        return a + b;
      },
      Va = (a) => {
        if ("/" === a) return "/";
        a = Ta(a);
        a = a.replace(/\/$/, "");
        var b = a.lastIndexOf("/");
        return -1 === b ? a : a.substr(b + 1);
      },
      Wa = () => {
        if (
          "object" == typeof crypto &&
          "function" == typeof crypto.getRandomValues
        )
          return (a) => crypto.getRandomValues(a);
        na("initRandomDevice");
      },
      Xa = (a) => (Xa = Wa())(a);
    function Ya() {
      for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
        b = 0 <= c ? arguments[c] : "/";
        if ("string" != typeof b)
          throw new TypeError("Arguments to path.resolve must be strings");
        if (!b) return "";
        a = b + "/" + a;
        b = "/" === b.charAt(0);
      }
      a = Sa(
        a.split("/").filter((d) => !!d),
        !b,
      ).join("/");
      return (b ? "/" : "") + a || ".";
    }
    var Za =
        "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0,
      I = (a, b, c) => {
        var d = b + c;
        for (c = b; a[c] && !(c >= d); ) ++c;
        if (16 < c - b && a.buffer && Za) return Za.decode(a.subarray(b, c));
        for (d = ""; b < c; ) {
          var e = a[b++];
          if (e & 128) {
            var f = a[b++] & 63;
            if (192 == (e & 224)) d += String.fromCharCode(((e & 31) << 6) | f);
            else {
              var g = a[b++] & 63;
              e =
                224 == (e & 240)
                  ? ((e & 15) << 12) | (f << 6) | g
                  : ((e & 7) << 18) | (f << 12) | (g << 6) | (a[b++] & 63);
              65536 > e
                ? (d += String.fromCharCode(e))
                : ((e -= 65536),
                  (d += String.fromCharCode(
                    55296 | (e >> 10),
                    56320 | (e & 1023),
                  )));
            }
          } else d += String.fromCharCode(e);
        }
        return d;
      },
      $a = [],
      ab = (a) => {
        for (var b = 0, c = 0; c < a.length; ++c) {
          var d = a.charCodeAt(c);
          127 >= d
            ? b++
            : 2047 >= d
            ? (b += 2)
            : 55296 <= d && 57343 >= d
            ? ((b += 4), ++c)
            : (b += 3);
        }
        return b;
      },
      K = (a, b, c, d) => {
        if (!(0 < d)) return 0;
        var e = c;
        d = c + d - 1;
        for (var f = 0; f < a.length; ++f) {
          var g = a.charCodeAt(f);
          if (55296 <= g && 57343 >= g) {
            var m = a.charCodeAt(++f);
            g = (65536 + ((g & 1023) << 10)) | (m & 1023);
          }
          if (127 >= g) {
            if (c >= d) break;
            b[c++] = g;
          } else {
            if (2047 >= g) {
              if (c + 1 >= d) break;
              b[c++] = 192 | (g >> 6);
            } else {
              if (65535 >= g) {
                if (c + 2 >= d) break;
                b[c++] = 224 | (g >> 12);
              } else {
                if (c + 3 >= d) break;
                b[c++] = 240 | (g >> 18);
                b[c++] = 128 | ((g >> 12) & 63);
              }
              b[c++] = 128 | ((g >> 6) & 63);
            }
            b[c++] = 128 | (g & 63);
          }
        }
        b[c] = 0;
        return c - e;
      };
    function bb(a, b) {
      var c = Array(ab(a) + 1);
      a = K(a, c, 0, c.length);
      b && (c.length = a);
      return c;
    }
    var cb = [];
    function db(a, b) {
      cb[a] = { input: [], Da: [], $a: b };
      eb(a, fb);
    }
    var fb = {
        open(a) {
          var b = cb[a.node.gb];
          if (!b) throw new L(43);
          a.Ja = b;
          a.seekable = !1;
        },
        close(a) {
          a.Ja.$a.mb(a.Ja);
        },
        mb(a) {
          a.Ja.$a.mb(a.Ja);
        },
        read(a, b, c, d) {
          if (!a.Ja || !a.Ja.$a.Ob) throw new L(60);
          for (var e = 0, f = 0; f < d; f++) {
            try {
              var g = a.Ja.$a.Ob(a.Ja);
            } catch (m) {
              throw new L(29);
            }
            if (void 0 === g && 0 === e) throw new L(6);
            if (null === g || void 0 === g) break;
            e++;
            b[c + f] = g;
          }
          e && (a.node.timestamp = Date.now());
          return e;
        },
        write(a, b, c, d) {
          if (!a.Ja || !a.Ja.$a.Cb) throw new L(60);
          try {
            for (var e = 0; e < d; e++) a.Ja.$a.Cb(a.Ja, b[c + e]);
          } catch (f) {
            throw new L(29);
          }
          d && (a.node.timestamp = Date.now());
          return e;
        },
      },
      gb = {
        Ob() {
          a: {
            if (!$a.length) {
              var a = null;
              "undefined" != typeof window && "function" == typeof window.prompt
                ? ((a = window.prompt("Input: ")), null !== a && (a += "\n"))
                : "function" == typeof readline &&
                  ((a = readline()), null !== a && (a += "\n"));
              if (!a) {
                a = null;
                break a;
              }
              $a = bb(a, !0);
            }
            a = $a.shift();
          }
          return a;
        },
        Cb(a, b) {
          null === b || 10 === b
            ? (la(I(a.Da, 0)), (a.Da = []))
            : 0 != b && a.Da.push(b);
        },
        mb(a) {
          a.Da && 0 < a.Da.length && (la(I(a.Da, 0)), (a.Da = []));
        },
        Rc() {
          return {
            Lc: 25856,
            Nc: 5,
            Kc: 191,
            Mc: 35387,
            Jc: [
              3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
          };
        },
        Sc() {
          return 0;
        },
        Tc() {
          return [24, 80];
        },
      },
      hb = {
        Cb(a, b) {
          null === b || 10 === b
            ? (u(I(a.Da, 0)), (a.Da = []))
            : 0 != b && a.Da.push(b);
        },
        mb(a) {
          a.Da && 0 < a.Da.length && (u(I(a.Da, 0)), (a.Da = []));
        },
      },
      jb = (a) => {
        a = 65536 * Math.ceil(a / 65536);
        var b = ib(65536, a);
        b ? (x.fill(0, b, b + a), (a = b)) : (a = 0);
        return a;
      };
    function kb(a, b) {
      var c = a.va ? a.va.length : 0;
      c >= b ||
        ((b = Math.max(b, (c * (1048576 > c ? 2 : 1.125)) >>> 0)),
        0 != c && (b = Math.max(b, 256)),
        (c = a.va),
        (a.va = new Uint8Array(b)),
        0 < a.Aa && a.va.set(c.subarray(0, a.Aa), 0));
    }
    var M = {
        Na: null,
        Qa() {
          return M.createNode(null, "/", 16895, 0);
        },
        createNode(a, b, c, d) {
          if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new L(63);
          M.Na ||
            (M.Na = {
              dir: {
                node: {
                  Ma: M.wa.Ma,
                  Ha: M.wa.Ha,
                  bb: M.wa.bb,
                  qb: M.wa.qb,
                  Wb: M.wa.Wb,
                  wb: M.wa.wb,
                  Yb: M.wa.Yb,
                  Ub: M.wa.Ub,
                  tb: M.wa.tb,
                },
                stream: { Ta: M.xa.Ta },
              },
              file: {
                node: { Ma: M.wa.Ma, Ha: M.wa.Ha },
                stream: {
                  Ta: M.xa.Ta,
                  read: M.xa.read,
                  write: M.xa.write,
                  ab: M.xa.ab,
                  cb: M.xa.cb,
                  rb: M.xa.rb,
                },
              },
              link: {
                node: { Ma: M.wa.Ma, Ha: M.wa.Ha, hb: M.wa.hb },
                stream: {},
              },
              Jb: { node: { Ma: M.wa.Ma, Ha: M.wa.Ha }, stream: lb },
            });
          c = mb(a, b, c, d);
          O(c.mode)
            ? ((c.wa = M.Na.dir.node), (c.xa = M.Na.dir.stream), (c.va = {}))
            : 32768 === (c.mode & 61440)
            ? ((c.wa = M.Na.file.node),
              (c.xa = M.Na.file.stream),
              (c.Aa = 0),
              (c.va = null))
            : 40960 === (c.mode & 61440)
            ? ((c.wa = M.Na.link.node), (c.xa = M.Na.link.stream))
            : 8192 === (c.mode & 61440) &&
              ((c.wa = M.Na.Jb.node), (c.xa = M.Na.Jb.stream));
          c.timestamp = Date.now();
          a && ((a.va[b] = c), (a.timestamp = c.timestamp));
          return c;
        },
        Pc(a) {
          return a.va
            ? a.va.subarray
              ? a.va.subarray(0, a.Aa)
              : new Uint8Array(a.va)
            : new Uint8Array(0);
        },
        wa: {
          Ma(a) {
            var b = {};
            b.ic = 8192 === (a.mode & 61440) ? a.id : 1;
            b.Pb = a.id;
            b.mode = a.mode;
            b.vc = 1;
            b.uid = 0;
            b.pc = 0;
            b.gb = a.gb;
            b.size = O(a.mode)
              ? 4096
              : 32768 === (a.mode & 61440)
              ? a.Aa
              : 40960 === (a.mode & 61440)
              ? a.link.length
              : 0;
            b.bc = new Date(a.timestamp);
            b.uc = new Date(a.timestamp);
            b.hc = new Date(a.timestamp);
            b.cc = 4096;
            b.dc = Math.ceil(b.size / b.cc);
            return b;
          },
          Ha(a, b) {
            void 0 !== b.mode && (a.mode = b.mode);
            void 0 !== b.timestamp && (a.timestamp = b.timestamp);
            if (void 0 !== b.size && ((b = b.size), a.Aa != b))
              if (0 == b) (a.va = null), (a.Aa = 0);
              else {
                var c = a.va;
                a.va = new Uint8Array(b);
                c && a.va.set(c.subarray(0, Math.min(b, a.Aa)));
                a.Aa = b;
              }
          },
          bb() {
            throw nb[44];
          },
          qb(a, b, c, d) {
            return M.createNode(a, b, c, d);
          },
          Wb(a, b, c) {
            if (O(a.mode)) {
              try {
                var d = ob(b, c);
              } catch (f) {}
              if (d) for (var e in d.va) throw new L(55);
            }
            delete a.parent.va[a.name];
            a.parent.timestamp = Date.now();
            a.name = c;
            b.va[c] = a;
            b.timestamp = a.parent.timestamp;
            a.parent = b;
          },
          wb(a, b) {
            delete a.va[b];
            a.timestamp = Date.now();
          },
          Yb(a, b) {
            var c = ob(a, b),
              d;
            for (d in c.va) throw new L(55);
            delete a.va[b];
            a.timestamp = Date.now();
          },
          Ub(a) {
            var b = [".", ".."],
              c;
            for (c of Object.keys(a.va)) b.push(c);
            return b;
          },
          tb(a, b, c) {
            a = M.createNode(a, b, 41471, 0);
            a.link = c;
            return a;
          },
          hb(a) {
            if (40960 !== (a.mode & 61440)) throw new L(28);
            return a.link;
          },
        },
        xa: {
          read(a, b, c, d, e) {
            var f = a.node.va;
            if (e >= a.node.Aa) return 0;
            a = Math.min(a.node.Aa - e, d);
            if (8 < a && f.subarray) b.set(f.subarray(e, e + a), c);
            else for (d = 0; d < a; d++) b[c + d] = f[e + d];
            return a;
          },
          write(a, b, c, d, e, f) {
            b.buffer === w.buffer && (f = !1);
            if (!d) return 0;
            a = a.node;
            a.timestamp = Date.now();
            if (b.subarray && (!a.va || a.va.subarray)) {
              if (f) return (a.va = b.subarray(c, c + d)), (a.Aa = d);
              if (0 === a.Aa && 0 === e)
                return (a.va = b.slice(c, c + d)), (a.Aa = d);
              if (e + d <= a.Aa) return a.va.set(b.subarray(c, c + d), e), d;
            }
            kb(a, e + d);
            if (a.va.subarray && b.subarray) a.va.set(b.subarray(c, c + d), e);
            else for (f = 0; f < d; f++) a.va[e + f] = b[c + f];
            a.Aa = Math.max(a.Aa, e + d);
            return d;
          },
          Ta(a, b, c) {
            1 === c
              ? (b += a.position)
              : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.Aa);
            if (0 > b) throw new L(28);
            return b;
          },
          ab(a, b, c) {
            kb(a.node, b + c);
            a.node.Aa = Math.max(a.node.Aa, b + c);
          },
          cb(a, b, c, d, e) {
            if (32768 !== (a.node.mode & 61440)) throw new L(43);
            a = a.node.va;
            if (e & 2 || a.buffer !== w.buffer) {
              if (0 < c || c + b < a.length)
                a = a.subarray
                  ? a.subarray(c, c + b)
                  : Array.prototype.slice.call(a, c, c + b);
              c = !0;
              b = jb(b);
              if (!b) throw new L(48);
              w.set(a, b);
            } else (c = !1), (b = a.byteOffset);
            return { za: b, Fa: c };
          },
          rb(a, b, c, d) {
            M.xa.write(a, b, 0, d, c, !1);
            return 0;
          },
        },
      },
      pb = (a, b, c) => {
        var d = `al ${a}`;
        ia(
          a,
          (e) => {
            b(new Uint8Array(e));
            d && Fa(d);
          },
          () => {
            if (c) c();
            else throw `Loading data file "${a}" failed.`;
          },
        );
        d && Ea(d);
      },
      qb = k.preloadPlugins || [],
      rb = (a, b, c, d) => {
        "undefined" != typeof Browser && Browser.Qc();
        var e = !1;
        qb.forEach((f) => {
          !e && f.canHandle(b) && (f.handle(a, b, c, d), (e = !0));
        });
        return e;
      },
      tb = (a, b, c, d, e, f, g, m, l, n) => {
        function q(h) {
          function r(v) {
            n?.();
            m || sb(a, b, v, d, e, l);
            f?.();
            Fa(t);
          }
          rb(h, p, r, () => {
            g?.();
            Fa(t);
          }) || r(h);
        }
        var p = b ? Ya(Ta(a + "/" + b)) : a,
          t = `cp ${p}`;
        Ea(t);
        "string" == typeof c ? pb(c, q, g) : q(c);
      },
      ub = (a, b) => {
        var c = 0;
        a && (c |= 365);
        b && (c |= 146);
        return c;
      },
      vb = null,
      wb = {},
      xb = [],
      yb = 1,
      zb = null,
      Ab = !0,
      L = class {
        constructor(a) {
          this.name = "ErrnoError";
          this.Ka = a;
        }
      },
      nb = {};
    function P(a, b = {}) {
      a = Ya(a);
      if (!a) return { path: "", node: null };
      b = Object.assign({ Nb: !0, Eb: 0 }, b);
      if (8 < b.Eb) throw new L(32);
      a = a.split("/").filter((g) => !!g);
      for (var c = vb, d = "/", e = 0; e < a.length; e++) {
        var f = e === a.length - 1;
        if (f && b.parent) break;
        c = ob(c, a[e]);
        d = Ta(d + "/" + a[e]);
        c.eb && (!f || (f && b.Nb)) && (c = c.eb.root);
        if (!f || b.lb)
          for (f = 0; 40960 === (c.mode & 61440); )
            if (
              ((c = Bb(d)),
              (d = Ya(Ua(d), c)),
              (c = P(d, { Eb: b.Eb + 1 }).node),
              40 < f++)
            )
              throw new L(32);
      }
      return { path: d, node: c };
    }
    function Cb(a) {
      for (var b; ; ) {
        if (a === a.parent)
          return (
            (a = a.Qa.Rb),
            b ? ("/" !== a[a.length - 1] ? `${a}/${b}` : a + b) : a
          );
        b = b ? `${a.name}/${b}` : a.name;
        a = a.parent;
      }
    }
    function Db(a, b) {
      for (var c = 0, d = 0; d < b.length; d++)
        c = ((c << 5) - c + b.charCodeAt(d)) | 0;
      return ((a + c) >>> 0) % zb.length;
    }
    function ob(a, b) {
      var c = O(a.mode) ? ((c = Eb(a, "x")) ? c : a.wa.bb ? 0 : 2) : 54;
      if (c) throw new L(c);
      for (c = zb[Db(a.id, b)]; c; c = c.Za) {
        var d = c.name;
        if (c.parent.id === a.id && d === b) return c;
      }
      return a.wa.bb(a, b);
    }
    function mb(a, b, c, d) {
      a = new Fb(a, b, c, d);
      b = Db(a.parent.id, a.name);
      a.Za = zb[b];
      return (zb[b] = a);
    }
    function O(a) {
      return 16384 === (a & 61440);
    }
    function Gb(a) {
      var b = ["r", "w", "rw"][a & 3];
      a & 512 && (b += "w");
      return b;
    }
    function Eb(a, b) {
      if (Ab) return 0;
      if (!b.includes("r") || a.mode & 292) {
        if (
          (b.includes("w") && !(a.mode & 146)) ||
          (b.includes("x") && !(a.mode & 73))
        )
          return 2;
      } else return 2;
      return 0;
    }
    function Hb(a, b) {
      try {
        return ob(a, b), 20;
      } catch (c) {}
      return Eb(a, "wx");
    }
    function Ib() {
      for (var a = 0; 4096 >= a; a++) if (!xb[a]) return a;
      throw new L(33);
    }
    function Jb(a) {
      a = xb[a];
      if (!a) throw new L(8);
      return a;
    }
    function Kb(a) {
      var b = -1;
      Lb ||
        ((Lb = function () {
          this.sb = {};
        }),
        (Lb.prototype = {}),
        Object.defineProperties(Lb.prototype, {
          object: {
            get() {
              return this.node;
            },
            set(c) {
              this.node = c;
            },
          },
          flags: {
            get() {
              return this.sb.flags;
            },
            set(c) {
              this.sb.flags = c;
            },
          },
          position: {
            get() {
              return this.sb.position;
            },
            set(c) {
              this.sb.position = c;
            },
          },
        }));
      a = Object.assign(new Lb(), a);
      -1 == b && (b = Ib());
      a.Sa = b;
      return (xb[b] = a);
    }
    var lb = {
      open(a) {
        a.xa = wb[a.node.gb].xa;
        a.xa.open?.(a);
      },
      Ta() {
        throw new L(70);
      },
    };
    function eb(a, b) {
      wb[a] = { xa: b };
    }
    function Mb(a, b) {
      var c = "/" === b;
      if (c && vb) throw new L(10);
      if (!c && b) {
        var d = P(b, { Nb: !1 });
        b = d.path;
        d = d.node;
        if (d.eb) throw new L(10);
        if (!O(d.mode)) throw new L(54);
      }
      b = { type: a, Wc: {}, Rb: b, tc: [] };
      a = a.Qa(b);
      a.Qa = b;
      b.root = a;
      c ? (vb = a) : d && ((d.eb = b), d.Qa && d.Qa.tc.push(b));
    }
    function Nb(a, b, c) {
      var d = P(a, { parent: !0 }).node;
      a = Va(a);
      if (!a || "." === a || ".." === a) throw new L(28);
      var e = Hb(d, a);
      if (e) throw new L(e);
      if (!d.wa.qb) throw new L(63);
      return d.wa.qb(d, a, b, c);
    }
    function Q(a) {
      return Nb(a, 16895, 0);
    }
    function Ob(a, b, c) {
      "undefined" == typeof c && ((c = b), (b = 438));
      return Nb(a, b | 8192, c);
    }
    function Pb(a, b) {
      if (!Ya(a)) throw new L(44);
      var c = P(b, { parent: !0 }).node;
      if (!c) throw new L(44);
      b = Va(b);
      var d = Hb(c, b);
      if (d) throw new L(d);
      if (!c.wa.tb) throw new L(63);
      c.wa.tb(c, b, a);
    }
    function Qb(a) {
      var b = P(a, { parent: !0 }).node;
      if (!b) throw new L(44);
      var c = Va(a);
      a = ob(b, c);
      a: {
        try {
          var d = ob(b, c);
        } catch (f) {
          d = f.Ka;
          break a;
        }
        var e = Eb(b, "wx");
        d = e ? e : O(d.mode) ? 31 : 0;
      }
      if (d) throw new L(d);
      if (!b.wa.wb) throw new L(63);
      if (a.eb) throw new L(10);
      b.wa.wb(b, c);
      b = Db(a.parent.id, a.name);
      if (zb[b] === a) zb[b] = a.Za;
      else
        for (b = zb[b]; b; ) {
          if (b.Za === a) {
            b.Za = a.Za;
            break;
          }
          b = b.Za;
        }
    }
    function Bb(a) {
      a = P(a).node;
      if (!a) throw new L(44);
      if (!a.wa.hb) throw new L(28);
      return Ya(Cb(a.parent), a.wa.hb(a));
    }
    function Rb(a, b) {
      a = P(a, { lb: !b }).node;
      if (!a) throw new L(44);
      if (!a.wa.Ma) throw new L(63);
      return a.wa.Ma(a);
    }
    function Sb(a) {
      return Rb(a, !0);
    }
    function Tb(a, b) {
      a = "string" == typeof a ? P(a, { lb: !0 }).node : a;
      if (!a.wa.Ha) throw new L(63);
      a.wa.Ha(a, {
        mode: (b & 4095) | (a.mode & -4096),
        timestamp: Date.now(),
      });
    }
    function Ub(a, b, c) {
      if ("" === a) throw new L(44);
      if ("string" == typeof b) {
        var d = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[b];
        if ("undefined" == typeof d)
          throw Error(`Unknown file open mode: ${b}`);
        b = d;
      }
      c = b & 64 ? (("undefined" == typeof c ? 438 : c) & 4095) | 32768 : 0;
      if ("object" == typeof a) var e = a;
      else {
        a = Ta(a);
        try {
          e = P(a, { lb: !(b & 131072) }).node;
        } catch (f) {}
      }
      d = !1;
      if (b & 64)
        if (e) {
          if (b & 128) throw new L(20);
        } else (e = Nb(a, c, 0)), (d = !0);
      if (!e) throw new L(44);
      8192 === (e.mode & 61440) && (b &= -513);
      if (b & 65536 && !O(e.mode)) throw new L(54);
      if (
        !d &&
        (c = e
          ? 40960 === (e.mode & 61440)
            ? 32
            : O(e.mode) && ("r" !== Gb(b) || b & 512)
            ? 31
            : Eb(e, Gb(b))
          : 44)
      )
        throw new L(c);
      if (b & 512 && !d) {
        c = e;
        c = "string" == typeof c ? P(c, { lb: !0 }).node : c;
        if (!c.wa.Ha) throw new L(63);
        if (O(c.mode)) throw new L(31);
        if (32768 !== (c.mode & 61440)) throw new L(28);
        if ((d = Eb(c, "w"))) throw new L(d);
        c.wa.Ha(c, { size: 0, timestamp: Date.now() });
      }
      b &= -131713;
      e = Kb({
        node: e,
        path: Cb(e),
        flags: b,
        seekable: !0,
        position: 0,
        xa: e.xa,
        Ic: [],
        error: !1,
      });
      e.xa.open && e.xa.open(e);
      !k.logReadFiles || b & 1 || ((Vb ||= {}), a in Vb || (Vb[a] = 1));
      return e;
    }
    function Wb(a) {
      if (null === a.Sa) throw new L(8);
      a.zb && (a.zb = null);
      try {
        a.xa.close && a.xa.close(a);
      } catch (b) {
        throw b;
      } finally {
        xb[a.Sa] = null;
      }
      a.Sa = null;
    }
    function Xb(a, b, c) {
      if (null === a.Sa) throw new L(8);
      if (!a.seekable || !a.xa.Ta) throw new L(70);
      if (0 != c && 1 != c && 2 != c) throw new L(28);
      a.position = a.xa.Ta(a, b, c);
      a.Ic = [];
    }
    function Yb(a, b, c, d, e, f) {
      if (0 > d || 0 > e) throw new L(28);
      if (null === a.Sa) throw new L(8);
      if (0 === (a.flags & 2097155)) throw new L(8);
      if (O(a.node.mode)) throw new L(31);
      if (!a.xa.write) throw new L(28);
      a.seekable && a.flags & 1024 && Xb(a, 0, 2);
      var g = "undefined" != typeof e;
      if (!g) e = a.position;
      else if (!a.seekable) throw new L(70);
      b = a.xa.write(a, b, c, d, e, f);
      g || (a.position += b);
      return b;
    }
    var Zb;
    function $b(a, b) {
      a = "string" == typeof a ? a : Cb(a);
      for (b = b.split("/").reverse(); b.length; ) {
        var c = b.pop();
        if (c) {
          var d = Ta(a + "/" + c);
          try {
            Q(d);
          } catch (e) {}
          a = d;
        }
      }
      return d;
    }
    function ac(a, b, c, d) {
      a = Ta(("string" == typeof a ? a : Cb(a)) + "/" + b);
      c = ub(c, d);
      return Nb(a, ((void 0 !== c ? c : 438) & 4095) | 32768, 0);
    }
    function sb(a, b, c, d, e, f) {
      var g = b;
      a &&
        ((a = "string" == typeof a ? a : Cb(a)), (g = b ? Ta(a + "/" + b) : a));
      a = ub(d, e);
      g = Nb(g, ((void 0 !== a ? a : 438) & 4095) | 32768, 0);
      if (c) {
        if ("string" == typeof c) {
          b = Array(c.length);
          d = 0;
          for (e = c.length; d < e; ++d) b[d] = c.charCodeAt(d);
          c = b;
        }
        Tb(g, a | 146);
        b = Ub(g, 577);
        Yb(b, c, 0, c.length, 0, f);
        Wb(b);
        Tb(g, a);
      }
    }
    function R(a, b, c, d) {
      a = Ta(("string" == typeof a ? a : Cb(a)) + "/" + b);
      b = ub(!!c, !!d);
      R.Qb || (R.Qb = 64);
      var e = (R.Qb++ << 8) | 0;
      eb(e, {
        open(f) {
          f.seekable = !1;
        },
        close() {
          d?.buffer?.length && d(10);
        },
        read(f, g, m, l) {
          for (var n = 0, q = 0; q < l; q++) {
            try {
              var p = c();
            } catch (t) {
              throw new L(29);
            }
            if (void 0 === p && 0 === n) throw new L(6);
            if (null === p || void 0 === p) break;
            n++;
            g[m + q] = p;
          }
          n && (f.node.timestamp = Date.now());
          return n;
        },
        write(f, g, m, l) {
          for (var n = 0; n < l; n++)
            try {
              d(g[m + n]);
            } catch (q) {
              throw new L(29);
            }
          l && (f.node.timestamp = Date.now());
          return n;
        },
      });
      return Ob(a, b, e);
    }
    function bc(a) {
      if (!(a.rc || a.sc || a.link || a.va)) {
        if ("undefined" != typeof XMLHttpRequest)
          throw Error(
            "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
          );
        if (ha)
          try {
            (a.va = bb(ha(a.url), !0)), (a.Aa = a.va.length);
          } catch (b) {
            throw new L(29);
          }
        else throw Error("Cannot load without read() or XMLHttpRequest.");
      }
    }
    function cc(a, b, c, d, e) {
      function f() {
        this.Bb = !1;
        this.kb = [];
      }
      function g(p, t, h, r, v) {
        p = p.node.va;
        if (v >= p.length) return 0;
        r = Math.min(p.length - v, r);
        if (p.slice) for (var A = 0; A < r; A++) t[h + A] = p[v + A];
        else for (A = 0; A < r; A++) t[h + A] = p.get(v + A);
        return r;
      }
      f.prototype.get = function (p) {
        if (!(p > this.length - 1 || 0 > p)) {
          var t = p % this.Kb;
          return this.nb((p / this.Kb) | 0)[t];
        }
      };
      f.prototype.zc = function (p) {
        this.nb = p;
      };
      f.prototype.Ib = function () {
        var p = new XMLHttpRequest();
        p.open("HEAD", c, !1);
        p.send(null);
        if (!((200 <= p.status && 300 > p.status) || 304 === p.status))
          throw Error("Couldn't load " + c + ". Status: " + p.status);
        var t = Number(p.getResponseHeader("Content-length")),
          h,
          r = (h = p.getResponseHeader("Accept-Ranges")) && "bytes" === h;
        p = (h = p.getResponseHeader("Content-Encoding")) && "gzip" === h;
        var v = 1048576;
        r || (v = t);
        var A = this;
        A.zc((J) => {
          var H = J * v,
            y = (J + 1) * v - 1;
          y = Math.min(y, t - 1);
          if ("undefined" == typeof A.kb[J]) {
            var N = A.kb;
            if (H > y)
              throw Error(
                "invalid range (" + H + ", " + y + ") or no bytes requested!",
              );
            if (y > t - 1)
              throw Error("only " + t + " bytes available! programmer error!");
            var D = new XMLHttpRequest();
            D.open("GET", c, !1);
            t !== v && D.setRequestHeader("Range", "bytes=" + H + "-" + y);
            D.responseType = "arraybuffer";
            D.overrideMimeType &&
              D.overrideMimeType("text/plain; charset=x-user-defined");
            D.send(null);
            if (!((200 <= D.status && 300 > D.status) || 304 === D.status))
              throw Error("Couldn't load " + c + ". Status: " + D.status);
            H =
              void 0 !== D.response
                ? new Uint8Array(D.response || [])
                : bb(D.responseText || "", !0);
            N[J] = H;
          }
          if ("undefined" == typeof A.kb[J]) throw Error("doXHR failed!");
          return A.kb[J];
        });
        if (p || !t)
          (v = t = 1),
            (v = t = this.nb(0).length),
            la(
              "LazyFiles on gzip forces download of the whole file when length is accessed",
            );
        this.$b = t;
        this.Zb = v;
        this.Bb = !0;
      };
      if ("undefined" != typeof XMLHttpRequest) {
        var m = new f();
        Object.defineProperties(m, {
          length: {
            get: function () {
              this.Bb || this.Ib();
              return this.$b;
            },
          },
          Kb: {
            get: function () {
              this.Bb || this.Ib();
              return this.Zb;
            },
          },
        });
        var l = void 0;
      } else (l = c), (m = void 0);
      var n = ac(a, b, d, e);
      m ? (n.va = m) : l && ((n.va = null), (n.url = l));
      Object.defineProperties(n, {
        Aa: {
          get: function () {
            return this.va.length;
          },
        },
      });
      var q = {};
      Object.keys(n.xa).forEach((p) => {
        var t = n.xa[p];
        q[p] = function () {
          bc(n);
          return t.apply(null, arguments);
        };
      });
      q.read = (p, t, h, r, v) => {
        bc(n);
        return g(p, t, h, r, v);
      };
      q.cb = (p, t, h) => {
        bc(n);
        var r = jb(t);
        if (!r) throw new L(48);
        g(p, w, r, t, h);
        return { za: r, Fa: !0 };
      };
      n.xa = q;
      return n;
    }
    var S = {},
      Lb,
      Vb,
      dc = (a) => (a ? I(x, a) : "");
    function ec(a, b, c) {
      if ("/" === b.charAt(0)) return b;
      a = -100 === a ? "/" : Jb(a).path;
      if (0 == b.length) {
        if (!c) throw new L(44);
        return a;
      }
      return Ta(a + "/" + b);
    }
    function fc(a, b, c) {
      a = a(b);
      B[c >> 2] = a.ic;
      B[(c + 4) >> 2] = a.mode;
      C[(c + 8) >> 2] = a.vc;
      B[(c + 12) >> 2] = a.uid;
      B[(c + 16) >> 2] = a.pc;
      B[(c + 20) >> 2] = a.gb;
      F = [
        a.size >>> 0,
        ((E = a.size),
        1 <= +Math.abs(E)
          ? 0 < E
            ? +Math.floor(E / 4294967296) >>> 0
            : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      B[(c + 24) >> 2] = F[0];
      B[(c + 28) >> 2] = F[1];
      B[(c + 32) >> 2] = 4096;
      B[(c + 36) >> 2] = a.dc;
      b = a.bc.getTime();
      var d = a.uc.getTime(),
        e = a.hc.getTime();
      F = [
        Math.floor(b / 1e3) >>> 0,
        ((E = Math.floor(b / 1e3)),
        1 <= +Math.abs(E)
          ? 0 < E
            ? +Math.floor(E / 4294967296) >>> 0
            : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      B[(c + 40) >> 2] = F[0];
      B[(c + 44) >> 2] = F[1];
      C[(c + 48) >> 2] = (b % 1e3) * 1e3;
      F = [
        Math.floor(d / 1e3) >>> 0,
        ((E = Math.floor(d / 1e3)),
        1 <= +Math.abs(E)
          ? 0 < E
            ? +Math.floor(E / 4294967296) >>> 0
            : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      B[(c + 56) >> 2] = F[0];
      B[(c + 60) >> 2] = F[1];
      C[(c + 64) >> 2] = (d % 1e3) * 1e3;
      F = [
        Math.floor(e / 1e3) >>> 0,
        ((E = Math.floor(e / 1e3)),
        1 <= +Math.abs(E)
          ? 0 < E
            ? +Math.floor(E / 4294967296) >>> 0
            : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      B[(c + 72) >> 2] = F[0];
      B[(c + 76) >> 2] = F[1];
      C[(c + 80) >> 2] = (e % 1e3) * 1e3;
      F = [
        a.Pb >>> 0,
        ((E = a.Pb),
        1 <= +Math.abs(E)
          ? 0 < E
            ? +Math.floor(E / 4294967296) >>> 0
            : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      B[(c + 88) >> 2] = F[0];
      B[(c + 92) >> 2] = F[1];
      return 0;
    }
    var gc = void 0,
      hc = {},
      ic = (a) => {
        for (; a.length; ) {
          var b = a.pop();
          a.pop()(b);
        }
      };
    function jc(a) {
      return this.fromWireType(B[a >> 2]);
    }
    var kc = {},
      lc = {},
      mc = {},
      nc,
      pc = (a, b, c) => {
        function d(m) {
          m = c(m);
          if (m.length !== a.length)
            throw new nc("Mismatched type converter count");
          for (var l = 0; l < a.length; ++l) oc(a[l], m[l]);
        }
        a.forEach(function (m) {
          mc[m] = b;
        });
        var e = Array(b.length),
          f = [],
          g = 0;
        b.forEach((m, l) => {
          lc.hasOwnProperty(m)
            ? (e[l] = lc[m])
            : (f.push(m),
              kc.hasOwnProperty(m) || (kc[m] = []),
              kc[m].push(() => {
                e[l] = lc[m];
                ++g;
                g === f.length && d(e);
              }));
        });
        0 === f.length && d(e);
      },
      qc,
      U = (a) => {
        for (var b = ""; x[a]; ) b += qc[x[a++]];
        return b;
      },
      V;
    function rc(a, b, c = {}) {
      var d = b.name;
      if (!a)
        throw new V(`type "${d}" must have a positive integer typeid pointer`);
      if (lc.hasOwnProperty(a)) {
        if (c.qc) return;
        throw new V(`Cannot register type '${d}' twice`);
      }
      lc[a] = b;
      delete mc[a];
      kc.hasOwnProperty(a) &&
        ((b = kc[a]), delete kc[a], b.forEach((e) => e()));
    }
    function oc(a, b, c = {}) {
      if (!("argPackAdvance" in b))
        throw new TypeError(
          "registerType registeredInstance requires argPackAdvance",
        );
      return rc(a, b, c);
    }
    var sc = (a) => {
        throw new V(a.ua.Ba.ya.name + " instance already deleted");
      },
      tc = !1,
      uc = () => {},
      vc = (a, b, c) => {
        if (b === c) return a;
        if (void 0 === c.Ga) return null;
        a = vc(a, b, c.Ga);
        return null === a ? null : c.jc(a);
      },
      wc = {},
      xc = [],
      yc = () => {
        for (; xc.length; ) {
          var a = xc.pop();
          a.ua.Xa = !1;
          a["delete"]();
        }
      },
      zc,
      Ac = {},
      Bc = (a, b) => {
        if (void 0 === b) throw new V("ptr should not be undefined");
        for (; a.Ga; ) (b = a.ib(b)), (a = a.Ga);
        return Ac[b];
      },
      Dc = (a, b) => {
        if (!b.Ba || !b.za)
          throw new nc("makeClassHandle requires ptr and ptrType");
        if (!!b.Ia !== !!b.Ca)
          throw new nc("Both smartPtrType and smartPtr must be specified");
        b.count = { value: 1 };
        return Cc(Object.create(a, { ua: { value: b, writable: !0 } }));
      },
      Cc = (a) => {
        if ("undefined" === typeof FinalizationRegistry)
          return (Cc = (b) => b), a;
        tc = new FinalizationRegistry((b) => {
          b = b.ua;
          --b.count.value;
          0 === b.count.value && (b.Ca ? b.Ia.Oa(b.Ca) : b.Ba.ya.Oa(b.za));
        });
        Cc = (b) => {
          var c = b.ua;
          c.Ca && tc.register(b, { ua: c }, b);
          return b;
        };
        uc = (b) => {
          tc.unregister(b);
        };
        return Cc(a);
      };
    function Ec() {}
    var Fc = (a, b) => Object.defineProperty(b, "name", { value: a }),
      Gc = (a, b, c) => {
        if (void 0 === a[b].Ea) {
          var d = a[b];
          a[b] = function () {
            if (!a[b].Ea.hasOwnProperty(arguments.length))
              throw new V(
                `Function '${c}' called with an invalid number of arguments (${arguments.length}) - expects one of (${a[b].Ea})!`,
              );
            return a[b].Ea[arguments.length].apply(this, arguments);
          };
          a[b].Ea = [];
          a[b].Ea[d.jb] = d;
        }
      },
      Hc = (a, b, c) => {
        if (k.hasOwnProperty(a)) {
          if (void 0 === c || (void 0 !== k[a].Ea && void 0 !== k[a].Ea[c]))
            throw new V(`Cannot register public name '${a}' twice`);
          Gc(k, a, a);
          if (k.hasOwnProperty(c))
            throw new V(
              `Cannot register multiple overloads of a function with the same number of arguments (${c})!`,
            );
          k[a].Ea[c] = b;
        } else (k[a] = b), void 0 !== c && (k[a].Vc = c);
      },
      Ic = (a) => {
        if (void 0 === a) return "_unknown";
        a = a.replace(/[^a-zA-Z0-9_]/g, "$");
        var b = a.charCodeAt(0);
        return 48 <= b && 57 >= b ? `_${a}` : a;
      };
    function Jc(a, b, c, d, e, f, g, m) {
      this.name = a;
      this.constructor = b;
      this.Ya = c;
      this.Oa = d;
      this.Ga = e;
      this.lc = f;
      this.ib = g;
      this.jc = m;
      this.xc = [];
    }
    var Kc = (a, b, c) => {
      for (; b !== c; ) {
        if (!b.ib)
          throw new V(
            `Expected null or instance of ${c.name}, got an instance of ${b.name}`,
          );
        a = b.ib(a);
        b = b.Ga;
      }
      return a;
    };
    function Lc(a, b) {
      if (null === b) {
        if (this.Ab) throw new V(`null is not a valid ${this.name}`);
        return 0;
      }
      if (!b.ua) throw new V(`Cannot pass "${Mc(b)}" as a ${this.name}`);
      if (!b.ua.za)
        throw new V(
          `Cannot pass deleted object as a pointer of type ${this.name}`,
        );
      return Kc(b.ua.za, b.ua.Ba.ya, this.ya);
    }
    function Nc(a, b) {
      if (null === b) {
        if (this.Ab) throw new V(`null is not a valid ${this.name}`);
        if (this.pb) {
          var c = this.Db();
          null !== a && a.push(this.Oa, c);
          return c;
        }
        return 0;
      }
      if (!b || !b.ua) throw new V(`Cannot pass "${Mc(b)}" as a ${this.name}`);
      if (!b.ua.za)
        throw new V(
          `Cannot pass deleted object as a pointer of type ${this.name}`,
        );
      if (!this.ob && b.ua.Ba.ob)
        throw new V(
          `Cannot convert argument of type ${
            b.ua.Ia ? b.ua.Ia.name : b.ua.Ba.name
          } to parameter type ${this.name}`,
        );
      c = Kc(b.ua.za, b.ua.Ba.ya, this.ya);
      if (this.pb) {
        if (void 0 === b.ua.Ca)
          throw new V("Passing raw pointer to smart pointer is illegal");
        switch (this.Dc) {
          case 0:
            if (b.ua.Ia === this) c = b.ua.Ca;
            else
              throw new V(
                `Cannot convert argument of type ${
                  b.ua.Ia ? b.ua.Ia.name : b.ua.Ba.name
                } to parameter type ${this.name}`,
              );
            break;
          case 1:
            c = b.ua.Ca;
            break;
          case 2:
            if (b.ua.Ia === this) c = b.ua.Ca;
            else {
              var d = b.clone();
              c = this.yc(
                c,
                Oc(() => d["delete"]()),
              );
              null !== a && a.push(this.Oa, c);
            }
            break;
          default:
            throw new V("Unsupporting sharing policy");
        }
      }
      return c;
    }
    function Pc(a, b) {
      if (null === b) {
        if (this.Ab) throw new V(`null is not a valid ${this.name}`);
        return 0;
      }
      if (!b.ua) throw new V(`Cannot pass "${Mc(b)}" as a ${this.name}`);
      if (!b.ua.za)
        throw new V(
          `Cannot pass deleted object as a pointer of type ${this.name}`,
        );
      if (b.ua.Ba.ob)
        throw new V(
          `Cannot convert argument of type ${b.ua.Ba.name} to parameter type ${this.name}`,
        );
      return Kc(b.ua.za, b.ua.Ba.ya, this.ya);
    }
    function Qc(a) {
      return this.fromWireType(C[a >> 2]);
    }
    function Rc(a, b, c, d, e, f, g, m, l, n, q) {
      this.name = a;
      this.ya = b;
      this.Ab = c;
      this.ob = d;
      this.pb = e;
      this.wc = f;
      this.Dc = g;
      this.Tb = m;
      this.Db = l;
      this.yc = n;
      this.Oa = q;
      e || void 0 !== b.Ga
        ? (this.toWireType = Nc)
        : ((this.toWireType = d ? Lc : Pc), (this.La = null));
    }
    var Sc = (a, b, c) => {
        if (!k.hasOwnProperty(a))
          throw new nc("Replacing nonexistant public symbol");
        void 0 !== k[a].Ea && void 0 !== c
          ? (k[a].Ea[c] = b)
          : ((k[a] = b), (k[a].jb = c));
      },
      Tc = [],
      Uc,
      Vc = (a) => {
        var b = Tc[a];
        b || (a >= Tc.length && (Tc.length = a + 1), (Tc[a] = b = Uc.get(a)));
        return b;
      },
      Wc = (a, b) => {
        var c = [];
        return function () {
          c.length = 0;
          Object.assign(c, arguments);
          if (a.includes("j")) {
            var d = k["dynCall_" + a];
            d = c && c.length ? d.apply(null, [b].concat(c)) : d.call(null, b);
          } else d = Vc(b).apply(null, c);
          return d;
        };
      },
      W = (a, b) => {
        a = U(a);
        var c = a.includes("j") ? Wc(a, b) : Vc(b);
        if ("function" != typeof c)
          throw new V(`unknown function pointer with signature ${a}: ${b}`);
        return c;
      },
      Xc,
      $c = (a) => {
        a = Yc(a);
        var b = U(a);
        Zc(a);
        return b;
      },
      ad = (a, b) => {
        function c(f) {
          e[f] ||
            lc[f] ||
            (mc[f] ? mc[f].forEach(c) : (d.push(f), (e[f] = !0)));
        }
        var d = [],
          e = {};
        b.forEach(c);
        throw new Xc(`${a}: ` + d.map($c).join([", "]));
      },
      bd = (a, b) => {
        for (var c = [], d = 0; d < a; d++) c.push(C[(b + 4 * d) >> 2]);
        return c;
      };
    function cd(a) {
      for (var b = 1; b < a.length; ++b)
        if (null !== a[b] && void 0 === a[b].La) return !0;
      return !1;
    }
    function dd(a, b, c, d, e) {
      var f = b.length;
      if (2 > f)
        throw new V(
          "argTypes array size mismatch! Must at least get return value and 'this' types!",
        );
      var g = null !== b[1] && null !== c,
        m = cd(b),
        l = "void" !== b[0].name,
        n = f - 2,
        q = Array(n),
        p = [],
        t = [];
      return Fc(a, function () {
        if (arguments.length !== n)
          throw new V(
            `function ${a} called with ${arguments.length} arguments, expected ${n}`,
          );
        t.length = 0;
        p.length = g ? 2 : 1;
        p[0] = e;
        if (g) {
          var h = b[1].toWireType(t, this);
          p[1] = h;
        }
        for (var r = 0; r < n; ++r)
          (q[r] = b[r + 2].toWireType(t, arguments[r])), p.push(q[r]);
        r = d.apply(null, p);
        if (m) ic(t);
        else
          for (var v = g ? 1 : 2; v < b.length; v++) {
            var A = 1 === v ? h : q[v - 2];
            null !== b[v].La && b[v].La(A);
          }
        h = l ? b[0].fromWireType(r) : void 0;
        return h;
      });
    }
    var ed = (a) => {
      a = a.trim();
      const b = a.indexOf("(");
      return -1 !== b ? a.substr(0, b) : a;
    };
    class fd {
      constructor() {
        this.Fa = [void 0];
        this.yb = [];
      }
      get(a) {
        return this.Fa[a];
      }
      has(a) {
        return void 0 !== this.Fa[a];
      }
      ab(a) {
        var b = this.yb.pop() || this.Fa.length;
        this.Fa[b] = a;
        return b;
      }
    }
    var X = new fd(),
      gd = (a) => {
        a >= X.Xb && 0 === --X.get(a).Vb && ((X.Fa[a] = void 0), X.yb.push(a));
      },
      hd = (a) => {
        if (!a) throw new V("Cannot use deleted val. handle = " + a);
        return X.get(a).value;
      },
      Oc = (a) => {
        switch (a) {
          case void 0:
            return 1;
          case null:
            return 2;
          case !0:
            return 3;
          case !1:
            return 4;
          default:
            return X.ab({ Vb: 1, value: a });
        }
      },
      jd = {
        name: "emscripten::val",
        fromWireType: (a) => {
          var b = hd(a);
          gd(a);
          return b;
        },
        toWireType: (a, b) => Oc(b),
        argPackAdvance: 8,
        readValueFromPointer: jc,
        La: null,
      },
      Mc = (a) => {
        if (null === a) return "null";
        var b = typeof a;
        return "object" === b || "array" === b || "function" === b
          ? a.toString()
          : "" + a;
      },
      kd = (a, b) => {
        switch (b) {
          case 4:
            return function (c) {
              return this.fromWireType(sa[c >> 2]);
            };
          case 8:
            return function (c) {
              return this.fromWireType(ta[c >> 3]);
            };
          default:
            throw new TypeError(`invalid float width (${b}): ${a}`);
        }
      },
      ld = (a, b, c) => {
        switch (b) {
          case 1:
            return c ? (d) => w[d >> 0] : (d) => x[d >> 0];
          case 2:
            return c ? (d) => ra[d >> 1] : (d) => z[d >> 1];
          case 4:
            return c ? (d) => B[d >> 2] : (d) => C[d >> 2];
          default:
            throw new TypeError(`invalid integer width (${b}): ${a}`);
        }
      },
      md =
        "undefined" != typeof TextDecoder
          ? new TextDecoder("utf-16le")
          : void 0,
      nd = (a, b) => {
        var c = a >> 1;
        for (var d = c + b / 2; !(c >= d) && z[c]; ) ++c;
        c <<= 1;
        if (32 < c - a && md) return md.decode(x.subarray(a, c));
        c = "";
        for (d = 0; !(d >= b / 2); ++d) {
          var e = ra[(a + 2 * d) >> 1];
          if (0 == e) break;
          c += String.fromCharCode(e);
        }
        return c;
      },
      od = (a, b, c) => {
        c ??= 2147483647;
        if (2 > c) return 0;
        c -= 2;
        var d = b;
        c = c < 2 * a.length ? c / 2 : a.length;
        for (var e = 0; e < c; ++e) (ra[b >> 1] = a.charCodeAt(e)), (b += 2);
        ra[b >> 1] = 0;
        return b - d;
      },
      pd = (a) => 2 * a.length,
      qd = (a, b) => {
        for (var c = 0, d = ""; !(c >= b / 4); ) {
          var e = B[(a + 4 * c) >> 2];
          if (0 == e) break;
          ++c;
          65536 <= e
            ? ((e -= 65536),
              (d += String.fromCharCode(55296 | (e >> 10), 56320 | (e & 1023))))
            : (d += String.fromCharCode(e));
        }
        return d;
      },
      rd = (a, b, c) => {
        c ??= 2147483647;
        if (4 > c) return 0;
        var d = b;
        c = d + c - 4;
        for (var e = 0; e < a.length; ++e) {
          var f = a.charCodeAt(e);
          if (55296 <= f && 57343 >= f) {
            var g = a.charCodeAt(++e);
            f = (65536 + ((f & 1023) << 10)) | (g & 1023);
          }
          B[b >> 2] = f;
          b += 4;
          if (b + 4 > c) break;
        }
        B[b >> 2] = 0;
        return b - d;
      },
      sd = (a) => {
        for (var b = 0, c = 0; c < a.length; ++c) {
          var d = a.charCodeAt(c);
          55296 <= d && 57343 >= d && ++c;
          b += 4;
        }
        return b;
      },
      td = (a, b) => {
        var c = lc[a];
        if (void 0 === c)
          throw ((a = b + " has unknown type " + $c(a)), new V(a));
        return c;
      },
      ud = (a, b, c) => {
        var d = [];
        a = a.toWireType(d, c);
        d.length && (C[b >> 2] = Oc(d));
        return a;
      },
      vd = [],
      wd = {},
      xd = (a) => {
        var b = wd[a];
        return void 0 === b ? U(a) : b;
      },
      yd = () => {
        function a(b) {
          b.$$$embind_global$$$ = b;
          var c =
            "object" == typeof $$$embind_global$$$ &&
            b.$$$embind_global$$$ == b;
          c || delete b.$$$embind_global$$$;
          return c;
        }
        if ("object" == typeof globalThis) return globalThis;
        if ("object" == typeof $$$embind_global$$$) return $$$embind_global$$$;
        "object" == typeof global && a(global)
          ? ($$$embind_global$$$ = global)
          : "object" == typeof self && a(self) && ($$$embind_global$$$ = self);
        if ("object" == typeof $$$embind_global$$$) return $$$embind_global$$$;
        throw Error("unable to get global object.");
      },
      zd = (a) => {
        var b = vd.length;
        vd.push(a);
        return b;
      },
      Ad = (a, b) => {
        for (var c = Array(a), d = 0; d < a; ++d)
          c[d] = td(C[(b + 4 * d) >> 2], "parameter " + d);
        return c;
      },
      Bd = Reflect.construct,
      Cd = (a) => 0 === a % 4 && (0 !== a % 100 || 0 === a % 400),
      Dd = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
      Ed = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
      Fd = (a, b) =>
        (b + 2097152) >>> 0 < 4194305 - !!a ? (a >>> 0) + 4294967296 * b : NaN,
      Hd = (a) => {
        var b = ab(a) + 1,
          c = Gd(b);
        c && K(a, x, c, b);
        return c;
      },
      Id = [],
      Jd,
      Kd,
      Ld = 0;
    function Md(a, b, c, d, e) {
      function f() {
        var D = 0,
          T = 0;
        y.response &&
          J &&
          0 === C[(a + 12) >> 2] &&
          (T = y.response.byteLength);
        0 < T && ((D = Gd(T)), x.set(new Uint8Array(y.response), D));
        C[(a + 12) >> 2] = D;
        Y(a + 16, T);
        Y(a + 24, 0);
        (D = y.response ? y.response.byteLength : 0) && Y(a + 32, D);
        z[(a + 40) >> 1] = y.readyState;
        z[(a + 42) >> 1] = y.status;
        y.statusText && K(y.statusText, x, a + 44, 64);
      }
      var g = C[(a + 8) >> 2];
      if (g) {
        var m = g ? I(x, g) : "",
          l = a + 112,
          n = dc(l + 0);
        n ||= "GET";
        var q = C[(l + 56) >> 2],
          p = C[(l + 68) >> 2],
          t = C[(l + 72) >> 2];
        g = C[(l + 76) >> 2];
        var h = C[(l + 80) >> 2],
          r = C[(l + 84) >> 2],
          v = C[(l + 88) >> 2],
          A = C[(l + 52) >> 2],
          J = !!(A & 1),
          H = !!(A & 2);
        A = !!(A & 64);
        p = p ? (p ? I(x, p) : "") : void 0;
        t = t ? (t ? I(x, t) : "") : void 0;
        var y = new XMLHttpRequest();
        y.withCredentials = !!x[(l + 60) >> 0];
        y.open(n, m, !A, p, t);
        A || (y.timeout = q);
        y.Yc = m;
        y.responseType = "arraybuffer";
        h && ((m = h ? I(x, h) : ""), y.overrideMimeType(m));
        if (g)
          for (;;) {
            l = C[g >> 2];
            if (!l) break;
            m = C[(g + 4) >> 2];
            if (!m) break;
            g += 8;
            l = l ? I(x, l) : "";
            m = m ? I(x, m) : "";
            y.setRequestHeader(l, m);
          }
        var N = Jd.ab(y);
        C[a >> 2] = N;
        g = r && v ? x.slice(r, r + v) : null;
        y.onload = (D) => {
          Jd.has(N) &&
            (f(),
            200 <= y.status && 300 > y.status ? b?.(a, y, D) : c?.(a, y, D));
        };
        y.onerror = (D) => {
          Jd.has(N) && (f(), c?.(a, y, D));
        };
        y.ontimeout = (D) => {
          Jd.has(N) && c?.(a, y, D);
        };
        y.onprogress = (D) => {
          if (Jd.has(N)) {
            var T = J && H && y.response ? y.response.byteLength : 0,
              G = 0;
            0 < T &&
              J &&
              H &&
              ((G = Gd(T)), x.set(new Uint8Array(y.response), G));
            C[(a + 12) >> 2] = G;
            Y(a + 16, T);
            Y(a + 24, D.loaded - T);
            Y(a + 32, D.total);
            z[(a + 40) >> 1] = y.readyState;
            3 <= y.readyState &&
              0 === y.status &&
              0 < D.loaded &&
              (y.status = 200);
            z[(a + 42) >> 1] = y.status;
            y.statusText && K(y.statusText, x, a + 44, 64);
            d?.(a, y, D);
            G && Zc(G);
          }
        };
        y.onreadystatechange = (D) => {
          Jd.has(N)
            ? ((z[(a + 40) >> 1] = y.readyState),
              2 <= y.readyState && (z[(a + 42) >> 1] = y.status),
              e?.(a, y, D))
            : --Ld;
        };
        try {
          y.send(g);
        } catch (D) {
          c?.(a, y, D);
        }
      } else c(a, 0, "no url specified!");
    }
    var Pd = (a) => {
        qa = a;
        if (!(Ra || 0 < Ld)) {
          Nd();
          Qa(xa);
          Zb = !1;
          Od(0);
          for (var b = 0; b < xb.length; b++) {
            var c = xb[b];
            c && Wb(c);
          }
          za = !0;
        }
        qa = a;
        Ra || 0 < Ld || (k.onExit?.(a), (pa = !0));
        ea(a, new Oa(a));
      },
      Y = (a, b) => {
        C[a >> 2] = b;
        C[(a + 4) >> 2] = (b - C[a >> 2]) / 4294967296;
      };
    function Qd(a, b, c, d) {
      var e = Kd;
      if (e) {
        var f = C[(a + 112 + 64) >> 2];
        f ||= C[(a + 8) >> 2];
        var g = f ? I(x, f) : "";
        try {
          var m = e
            .transaction(["FILES"], "readwrite")
            .objectStore("FILES")
            .put(b, g);
          m.onsuccess = () => {
            z[(a + 40) >> 1] = 4;
            z[(a + 42) >> 1] = 200;
            K("OK", x, a + 44, 64);
            c(a, 0, g);
          };
          m.onerror = (l) => {
            z[(a + 40) >> 1] = 4;
            z[(a + 42) >> 1] = 413;
            K("Payload Too Large", x, a + 44, 64);
            d(a, 0, l);
          };
        } catch (l) {
          d(a, 0, l);
        }
      } else d(a, 0, "IndexedDB not available!");
    }
    function Rd(a, b, c) {
      var d = Kd;
      if (d) {
        var e = C[(a + 112 + 64) >> 2];
        e ||= C[(a + 8) >> 2];
        e = e ? I(x, e) : "";
        try {
          var f = d
            .transaction(["FILES"], "readonly")
            .objectStore("FILES")
            .get(e);
          f.onsuccess = (g) => {
            if (g.target.result) {
              g = g.target.result;
              var m = g.byteLength || g.length,
                l = Gd(m);
              x.set(new Uint8Array(g), l);
              C[(a + 12) >> 2] = l;
              Y(a + 16, m);
              Y(a + 24, 0);
              Y(a + 32, m);
              z[(a + 40) >> 1] = 4;
              z[(a + 42) >> 1] = 200;
              K("OK", x, a + 44, 64);
              b(a, 0, g);
            } else
              (z[(a + 40) >> 1] = 4),
                (z[(a + 42) >> 1] = 404),
                K("Not Found", x, a + 44, 64),
                c(a, 0, "no data");
          };
          f.onerror = (g) => {
            z[(a + 40) >> 1] = 4;
            z[(a + 42) >> 1] = 404;
            K("Not Found", x, a + 44, 64);
            c(a, 0, g);
          };
        } catch (g) {
          c(a, 0, g);
        }
      } else c(a, 0, "IndexedDB not available!");
    }
    function Sd(a, b, c) {
      var d = Kd;
      if (d) {
        var e = C[(a + 112 + 64) >> 2];
        e ||= C[(a + 8) >> 2];
        e = e ? I(x, e) : "";
        try {
          var f = d
            .transaction(["FILES"], "readwrite")
            .objectStore("FILES")
            .delete(e);
          f.onsuccess = (g) => {
            g = g.target.result;
            C[(a + 12) >> 2] = 0;
            Y(a + 16, 0);
            Y(a + 24, 0);
            Y(a + 32, 0);
            z[(a + 40) >> 1] = 4;
            z[(a + 42) >> 1] = 200;
            K("OK", x, a + 44, 64);
            b(a, 0, g);
          };
          f.onerror = (g) => {
            z[(a + 40) >> 1] = 4;
            z[(a + 42) >> 1] = 404;
            K("Not Found", x, a + 44, 64);
            c(a, 0, g);
          };
        } catch (g) {
          c(a, 0, g);
        }
      } else c(a, 0, "IndexedDB not available!");
    }
    var Td = {},
      Vd = () => {
        if (!Ud) {
          var a = {
              USER: "web_user",
              LOGNAME: "web_user",
              PATH: "/",
              PWD: "/",
              HOME: "/home/web_user",
              LANG:
                (
                  ("object" == typeof navigator &&
                    navigator.languages &&
                    navigator.languages[0]) ||
                  "C"
                ).replace("-", "_") + ".UTF-8",
              _: da || "./this.program",
            },
            b;
          for (b in Td) void 0 === Td[b] ? delete a[b] : (a[b] = Td[b]);
          var c = [];
          for (b in a) c.push(`${b}=${a[b]}`);
          Ud = c;
        }
        return Ud;
      },
      Ud,
      Wd = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      Xd = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      Yd = (a, b, c, d) => {
        function e(h, r, v) {
          for (
            h = "number" == typeof h ? h.toString() : h || "";
            h.length < r;

          )
            h = v[0] + h;
          return h;
        }
        function f(h, r) {
          return e(h, r, "0");
        }
        function g(h, r) {
          function v(J) {
            return 0 > J ? -1 : 0 < J ? 1 : 0;
          }
          var A;
          0 === (A = v(h.getFullYear() - r.getFullYear())) &&
            0 === (A = v(h.getMonth() - r.getMonth())) &&
            (A = v(h.getDate() - r.getDate()));
          return A;
        }
        function m(h) {
          switch (h.getDay()) {
            case 0:
              return new Date(h.getFullYear() - 1, 11, 29);
            case 1:
              return h;
            case 2:
              return new Date(h.getFullYear(), 0, 3);
            case 3:
              return new Date(h.getFullYear(), 0, 2);
            case 4:
              return new Date(h.getFullYear(), 0, 1);
            case 5:
              return new Date(h.getFullYear() - 1, 11, 31);
            case 6:
              return new Date(h.getFullYear() - 1, 11, 30);
          }
        }
        function l(h) {
          var r = h.Ua;
          for (h = new Date(new Date(h.Va + 1900, 0, 1).getTime()); 0 < r; ) {
            var v = h.getMonth(),
              A = (Cd(h.getFullYear()) ? Wd : Xd)[v];
            if (r > A - h.getDate())
              (r -= A - h.getDate() + 1),
                h.setDate(1),
                11 > v
                  ? h.setMonth(v + 1)
                  : (h.setMonth(0), h.setFullYear(h.getFullYear() + 1));
            else {
              h.setDate(h.getDate() + r);
              break;
            }
          }
          v = new Date(h.getFullYear() + 1, 0, 4);
          r = m(new Date(h.getFullYear(), 0, 4));
          v = m(v);
          return 0 >= g(r, h)
            ? 0 >= g(v, h)
              ? h.getFullYear() + 1
              : h.getFullYear()
            : h.getFullYear() - 1;
        }
        var n = C[(d + 40) >> 2];
        d = {
          Gc: B[d >> 2],
          Fc: B[(d + 4) >> 2],
          ub: B[(d + 8) >> 2],
          Gb: B[(d + 12) >> 2],
          vb: B[(d + 16) >> 2],
          Va: B[(d + 20) >> 2],
          Pa: B[(d + 24) >> 2],
          Ua: B[(d + 28) >> 2],
          Xc: B[(d + 32) >> 2],
          Ec: B[(d + 36) >> 2],
          Hc: n ? (n ? I(x, n) : "") : "",
        };
        c = c ? I(x, c) : "";
        n = {
          "%c": "%a %b %d %H:%M:%S %Y",
          "%D": "%m/%d/%y",
          "%F": "%Y-%m-%d",
          "%h": "%b",
          "%r": "%I:%M:%S %p",
          "%R": "%H:%M",
          "%T": "%H:%M:%S",
          "%x": "%m/%d/%y",
          "%X": "%H:%M:%S",
          "%Ec": "%c",
          "%EC": "%C",
          "%Ex": "%m/%d/%y",
          "%EX": "%H:%M:%S",
          "%Ey": "%y",
          "%EY": "%Y",
          "%Od": "%d",
          "%Oe": "%e",
          "%OH": "%H",
          "%OI": "%I",
          "%Om": "%m",
          "%OM": "%M",
          "%OS": "%S",
          "%Ou": "%u",
          "%OU": "%U",
          "%OV": "%V",
          "%Ow": "%w",
          "%OW": "%W",
          "%Oy": "%y",
        };
        for (var q in n) c = c.replace(new RegExp(q, "g"), n[q]);
        var p =
            "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
              " ",
            ),
          t =
            "January February March April May June July August September October November December".split(
              " ",
            );
        n = {
          "%a": (h) => p[h.Pa].substring(0, 3),
          "%A": (h) => p[h.Pa],
          "%b": (h) => t[h.vb].substring(0, 3),
          "%B": (h) => t[h.vb],
          "%C": (h) => f(((h.Va + 1900) / 100) | 0, 2),
          "%d": (h) => f(h.Gb, 2),
          "%e": (h) => e(h.Gb, 2, " "),
          "%g": (h) => l(h).toString().substring(2),
          "%G": l,
          "%H": (h) => f(h.ub, 2),
          "%I": (h) => {
            h = h.ub;
            0 == h ? (h = 12) : 12 < h && (h -= 12);
            return f(h, 2);
          },
          "%j": (h) => {
            for (
              var r = 0, v = 0;
              v <= h.vb - 1;
              r += (Cd(h.Va + 1900) ? Wd : Xd)[v++]
            );
            return f(h.Gb + r, 3);
          },
          "%m": (h) => f(h.vb + 1, 2),
          "%M": (h) => f(h.Fc, 2),
          "%n": () => "\n",
          "%p": (h) => (0 <= h.ub && 12 > h.ub ? "AM" : "PM"),
          "%S": (h) => f(h.Gc, 2),
          "%t": () => "\t",
          "%u": (h) => h.Pa || 7,
          "%U": (h) => f(Math.floor((h.Ua + 7 - h.Pa) / 7), 2),
          "%V": (h) => {
            var r = Math.floor((h.Ua + 7 - ((h.Pa + 6) % 7)) / 7);
            2 >= (h.Pa + 371 - h.Ua - 2) % 7 && r++;
            if (r)
              53 == r &&
                ((v = (h.Pa + 371 - h.Ua) % 7),
                4 == v || (3 == v && Cd(h.Va)) || (r = 1));
            else {
              r = 52;
              var v = (h.Pa + 7 - h.Ua - 1) % 7;
              (4 == v || (5 == v && Cd((h.Va % 400) - 1))) && r++;
            }
            return f(r, 2);
          },
          "%w": (h) => h.Pa,
          "%W": (h) => f(Math.floor((h.Ua + 7 - ((h.Pa + 6) % 7)) / 7), 2),
          "%y": (h) => (h.Va + 1900).toString().substring(2),
          "%Y": (h) => h.Va + 1900,
          "%z": (h) => {
            h = h.Ec;
            var r = 0 <= h;
            h = Math.abs(h) / 60;
            return (
              (r ? "+" : "-") +
              String("0000" + ((h / 60) * 100 + (h % 60))).slice(-4)
            );
          },
          "%Z": (h) => h.Hc,
          "%%": () => "%",
        };
        c = c.replace(/%%/g, "\x00\x00");
        for (q in n)
          c.includes(q) && (c = c.replace(new RegExp(q, "g"), n[q](d)));
        c = c.replace(/\0\0/g, "%");
        q = bb(c, !1);
        if (q.length > b) return 0;
        w.set(q, a);
        return q.length - 1;
      };
    function Fb(a, b, c, d) {
      a ||= this;
      this.parent = a;
      this.Qa = a.Qa;
      this.eb = null;
      this.id = yb++;
      this.name = b;
      this.mode = c;
      this.wa = {};
      this.xa = {};
      this.gb = d;
    }
    Object.defineProperties(Fb.prototype, {
      read: {
        get: function () {
          return 365 === (this.mode & 365);
        },
        set: function (a) {
          a ? (this.mode |= 365) : (this.mode &= -366);
        },
      },
      write: {
        get: function () {
          return 146 === (this.mode & 146);
        },
        set: function (a) {
          a ? (this.mode |= 146) : (this.mode &= -147);
        },
      },
      sc: {
        get: function () {
          return O(this.mode);
        },
      },
      rc: {
        get: function () {
          return 8192 === (this.mode & 61440);
        },
      },
    });
    [44].forEach((a) => {
      nb[a] = new L(a);
      nb[a].stack = "<generic error, no stack>";
    });
    zb = Array(4096);
    Mb(M, "/");
    Q("/tmp");
    Q("/home");
    Q("/home/web_user");
    (function () {
      Q("/dev");
      eb(259, { read: () => 0, write: (d, e, f, g) => g });
      Ob("/dev/null", 259);
      db(1280, gb);
      db(1536, hb);
      Ob("/dev/tty", 1280);
      Ob("/dev/tty1", 1536);
      var a = new Uint8Array(1024),
        b = 0,
        c = () => {
          0 === b && (b = Xa(a).byteLength);
          return a[--b];
        };
      R("/dev", "random", c);
      R("/dev", "urandom", c);
      Q("/dev/shm");
      Q("/dev/shm/tmp");
    })();
    (function () {
      Q("/proc");
      var a = Q("/proc/self");
      Q("/proc/self/fd");
      Mb(
        {
          Qa() {
            var b = mb(a, "fd", 16895, 73);
            b.wa = {
              bb(c, d) {
                var e = Jb(+d);
                c = {
                  parent: null,
                  Qa: { Rb: "fake" },
                  wa: { hb: () => e.path },
                };
                return (c.parent = c);
              },
            };
            return b;
          },
        },
        "/proc/self/fd",
      );
    })();
    k.FS_createPath = $b;
    k.FS_createDataFile = sb;
    k.FS_createPreloadedFile = tb;
    k.FS_unlink = Qb;
    k.FS_createLazyFile = cc;
    k.FS_createDevice = R;
    nc = k.InternalError = class extends Error {
      constructor(a) {
        super(a);
        this.name = "InternalError";
      }
    };
    for (var Zd = Array(256), $d = 0; 256 > $d; ++$d)
      Zd[$d] = String.fromCharCode($d);
    qc = Zd;
    V = k.BindingError = class extends Error {
      constructor(a) {
        super(a);
        this.name = "BindingError";
      }
    };
    Object.assign(Ec.prototype, {
      isAliasOf: function (a) {
        if (!(this instanceof Ec && a instanceof Ec)) return !1;
        var b = this.ua.Ba.ya,
          c = this.ua.za;
        a.ua = a.ua;
        var d = a.ua.Ba.ya;
        for (a = a.ua.za; b.Ga; ) (c = b.ib(c)), (b = b.Ga);
        for (; d.Ga; ) (a = d.ib(a)), (d = d.Ga);
        return b === d && c === a;
      },
      clone: function () {
        this.ua.za || sc(this);
        if (this.ua.fb) return (this.ua.count.value += 1), this;
        var a = Cc,
          b = Object,
          c = b.create,
          d = Object.getPrototypeOf(this),
          e = this.ua;
        a = a(
          c.call(b, d, {
            ua: {
              value: {
                count: e.count,
                Xa: e.Xa,
                fb: e.fb,
                za: e.za,
                Ba: e.Ba,
                Ca: e.Ca,
                Ia: e.Ia,
              },
            },
          }),
        );
        a.ua.count.value += 1;
        a.ua.Xa = !1;
        return a;
      },
      ["delete"]() {
        this.ua.za || sc(this);
        if (this.ua.Xa && !this.ua.fb)
          throw new V("Object already scheduled for deletion");
        uc(this);
        var a = this.ua;
        --a.count.value;
        0 === a.count.value && (a.Ca ? a.Ia.Oa(a.Ca) : a.Ba.ya.Oa(a.za));
        this.ua.fb || ((this.ua.Ca = void 0), (this.ua.za = void 0));
      },
      isDeleted: function () {
        return !this.ua.za;
      },
      deleteLater: function () {
        this.ua.za || sc(this);
        if (this.ua.Xa && !this.ua.fb)
          throw new V("Object already scheduled for deletion");
        xc.push(this);
        1 === xc.length && zc && zc(yc);
        this.ua.Xa = !0;
        return this;
      },
    });
    k.getInheritedInstanceCount = () => Object.keys(Ac).length;
    k.getLiveInheritedInstances = () => {
      var a = [],
        b;
      for (b in Ac) Ac.hasOwnProperty(b) && a.push(Ac[b]);
      return a;
    };
    k.flushPendingDeletes = yc;
    k.setDelayFunction = (a) => {
      zc = a;
      xc.length && zc && zc(yc);
    };
    Object.assign(Rc.prototype, {
      mc(a) {
        this.Tb && (a = this.Tb(a));
        return a;
      },
      Lb(a) {
        this.Oa?.(a);
      },
      argPackAdvance: 8,
      readValueFromPointer: Qc,
      fromWireType: function (a) {
        function b() {
          return this.pb
            ? Dc(this.ya.Ya, { Ba: this.wc, za: c, Ia: this, Ca: a })
            : Dc(this.ya.Ya, { Ba: this, za: a });
        }
        var c = this.mc(a);
        if (!c) return this.Lb(a), null;
        var d = Bc(this.ya, c);
        if (void 0 !== d) {
          if (0 === d.ua.count.value)
            return (d.ua.za = c), (d.ua.Ca = a), d.clone();
          d = d.clone();
          this.Lb(a);
          return d;
        }
        d = this.ya.lc(c);
        d = wc[d];
        if (!d) return b.call(this);
        d = this.ob ? d.fc : d.pointerType;
        var e = vc(c, this.ya, d.ya);
        return null === e
          ? b.call(this)
          : this.pb
          ? Dc(d.ya.Ya, { Ba: d, za: e, Ia: this, Ca: a })
          : Dc(d.ya.Ya, { Ba: d, za: e });
      },
    });
    Xc = k.UnboundTypeError = ((a, b) => {
      var c = Fc(b, function (d) {
        this.name = b;
        this.message = d;
        d = Error(d).stack;
        void 0 !== d &&
          (this.stack =
            this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      c.prototype = Object.create(a.prototype);
      c.prototype.constructor = c;
      c.prototype.toString = function () {
        return void 0 === this.message
          ? this.name
          : `${this.name}: ${this.message}`;
      };
      return c;
    })(Error, "UnboundTypeError");
    X.Fa.push({ value: void 0 }, { value: null }, { value: !0 }, { value: !1 });
    Object.assign(X, { Xb: X.Fa.length });
    k.count_emval_handles = () => {
      for (var a = 0, b = X.Xb; b < X.Fa.length; ++b) void 0 !== X.Fa[b] && ++a;
      return a;
    };
    Jd = new fd();
    Ea("library_fetch_init");
    (function (a, b) {
      try {
        var c = indexedDB.open("emscripten_filesystem", 1);
      } catch (d) {
        b(d);
        return;
      }
      c.onupgradeneeded = (d) => {
        d = d.target.result;
        d.objectStoreNames.contains("FILES") && d.deleteObjectStore("FILES");
        d.createObjectStore("FILES");
      };
      c.onsuccess = (d) => a(d.target.result);
      c.onerror = b;
    })(
      (a) => {
        Kd = a;
        Fa("library_fetch_init");
      },
      () => {
        Kd = !1;
        Fa("library_fetch_init");
      },
    );
    var be = {
        N: function (a, b) {
          try {
            var c = Jb(a);
            return fc(Rb, c.path, b);
          } catch (d) {
            if ("undefined" == typeof S || "ErrnoError" !== d.name) throw d;
            return -d.Ka;
          }
        },
        L: function (a, b, c, d) {
          try {
            b = b ? I(x, b) : "";
            var e = d & 256;
            b = ec(a, b, d & 4096);
            return fc(e ? Sb : Rb, b, c);
          } catch (f) {
            if ("undefined" == typeof S || "ErrnoError" !== f.name) throw f;
            return -f.Ka;
          }
        },
        O: function (a, b, c, d) {
          gc = d;
          try {
            b = b ? I(x, b) : "";
            b = ec(a, b);
            if (d) {
              var e = B[+gc >> 2];
              gc += 4;
              var f = e;
            } else f = 0;
            return Ub(b, c, f).Sa;
          } catch (g) {
            if ("undefined" == typeof S || "ErrnoError" !== g.name) throw g;
            return -g.Ka;
          }
        },
        M: function (a, b) {
          try {
            return (a = a ? I(x, a) : ""), fc(Rb, a, b);
          } catch (c) {
            if ("undefined" == typeof S || "ErrnoError" !== c.name) throw c;
            return -c.Ka;
          }
        },
        g: (a) => {
          var b = hc[a];
          delete hc[a];
          var c = b.Db,
            d = b.Oa,
            e = b.Mb,
            f = e.map((g) => g.oc).concat(e.map((g) => g.Bc));
          pc([a], f, (g) => {
            var m = {};
            e.forEach((l, n) => {
              var q = g[n],
                p = l.nb,
                t = l.nc,
                h = g[n + e.length],
                r = l.Ac,
                v = l.Cc;
              m[l.kc] = {
                read: (A) => q.fromWireType(p(t, A)),
                write: (A, J) => {
                  var H = [];
                  r(v, A, h.toWireType(H, J));
                  ic(H);
                },
              };
            });
            return [
              {
                name: b.name,
                fromWireType: (l) => {
                  var n = {},
                    q;
                  for (q in m) n[q] = m[q].read(l);
                  d(l);
                  return n;
                },
                toWireType: (l, n) => {
                  for (var q in m)
                    if (!(q in n)) throw new TypeError(`Missing field: "${q}"`);
                  var p = c();
                  for (q in m) m[q].write(p, n[q]);
                  null !== l && l.push(d, p);
                  return p;
                },
                argPackAdvance: 8,
                readValueFromPointer: jc,
                La: d,
              },
            ];
          });
        },
        E: () => {},
        S: (a, b, c, d) => {
          b = U(b);
          oc(a, {
            name: b,
            fromWireType: function (e) {
              return !!e;
            },
            toWireType: function (e, f) {
              return f ? c : d;
            },
            argPackAdvance: 8,
            readValueFromPointer: function (e) {
              return this.fromWireType(x[e]);
            },
            La: null,
          });
        },
        da: (a, b, c, d, e, f, g, m, l, n, q, p, t) => {
          q = U(q);
          f = W(e, f);
          m &&= W(g, m);
          n &&= W(l, n);
          t = W(p, t);
          var h = Ic(q);
          Hc(h, function () {
            ad(`Cannot construct ${q} due to unbound types`, [d]);
          });
          pc([a, b, c], d ? [d] : [], function (r) {
            r = r[0];
            if (d) {
              var v = r.ya;
              var A = v.Ya;
            } else A = Ec.prototype;
            r = Fc(q, function () {
              if (Object.getPrototypeOf(this) !== J)
                throw new V("Use 'new' to construct " + q);
              if (void 0 === H.Ra)
                throw new V(q + " has no accessible constructor");
              var N = H.Ra[arguments.length];
              if (void 0 === N)
                throw new V(
                  `Tried to invoke ctor of ${q} with invalid number of parameters (${
                    arguments.length
                  }) - expected (${Object.keys(
                    H.Ra,
                  ).toString()}) parameters instead!`,
                );
              return N.apply(this, arguments);
            });
            var J = Object.create(A, { constructor: { value: r } });
            r.prototype = J;
            var H = new Jc(q, r, J, t, v, f, m, n);
            if (H.Ga) {
              var y;
              (y = H.Ga).Hb ?? (y.Hb = []);
              H.Ga.Hb.push(H);
            }
            v = new Rc(q, H, !0, !1, !1);
            y = new Rc(q + "*", H, !1, !1, !1);
            A = new Rc(q + " const*", H, !1, !0, !1);
            wc[a] = { pointerType: y, fc: A };
            Sc(h, r);
            return [v, y, A];
          });
        },
        ca: (a, b, c, d, e, f) => {
          var g = bd(b, c);
          e = W(d, e);
          pc([], [a], function (m) {
            m = m[0];
            var l = `constructor ${m.name}`;
            void 0 === m.ya.Ra && (m.ya.Ra = []);
            if (void 0 !== m.ya.Ra[b - 1])
              throw new V(
                `Cannot register multiple constructors with identical number of parameters (${
                  b - 1
                }) for class '${
                  m.name
                }'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
              );
            m.ya.Ra[b - 1] = () => {
              ad(`Cannot construct ${m.name} due to unbound types`, g);
            };
            pc([], g, (n) => {
              n.splice(1, 0, null);
              m.ya.Ra[b - 1] = dd(l, n, null, e, f);
              return [];
            });
            return [];
          });
        },
        h: (a, b, c, d, e, f, g, m) => {
          var l = bd(c, d);
          b = U(b);
          b = ed(b);
          f = W(e, f);
          pc([], [a], function (n) {
            function q() {
              ad(`Cannot call ${p} due to unbound types`, l);
            }
            n = n[0];
            var p = `${n.name}.${b}`;
            b.startsWith("@@") && (b = Symbol[b.substring(2)]);
            m && n.ya.xc.push(b);
            var t = n.ya.Ya,
              h = t[b];
            void 0 === h ||
            (void 0 === h.Ea && h.className !== n.name && h.jb === c - 2)
              ? ((q.jb = c - 2), (q.className = n.name), (t[b] = q))
              : (Gc(t, b, p), (t[b].Ea[c - 2] = q));
            pc([], l, function (r) {
              r = dd(p, r, n, f, g);
              void 0 === t[b].Ea
                ? ((r.jb = c - 2), (t[b] = r))
                : (t[b].Ea[c - 2] = r);
              return [];
            });
            return [];
          });
        },
        R: (a) => oc(a, jd),
        s: (a, b, c) => {
          b = U(b);
          oc(a, {
            name: b,
            fromWireType: (d) => d,
            toWireType: (d, e) => e,
            argPackAdvance: 8,
            readValueFromPointer: kd(b, c),
            La: null,
          });
        },
        n: (a, b, c, d, e, f) => {
          var g = bd(b, c);
          a = U(a);
          a = ed(a);
          e = W(d, e);
          Hc(
            a,
            function () {
              ad(`Cannot call ${a} due to unbound types`, g);
            },
            b - 1,
          );
          pc([], g, function (m) {
            Sc(a, dd(a, [m[0], null].concat(m.slice(1)), null, e, f), b - 1);
            return [];
          });
        },
        e: (a, b, c, d, e) => {
          b = U(b);
          -1 === e && (e = 4294967295);
          e = (m) => m;
          if (0 === d) {
            var f = 32 - 8 * c;
            e = (m) => (m << f) >>> f;
          }
          var g = b.includes("unsigned")
            ? function (m, l) {
                return l >>> 0;
              }
            : function (m, l) {
                return l;
              };
          oc(a, {
            name: b,
            fromWireType: e,
            toWireType: g,
            argPackAdvance: 8,
            readValueFromPointer: ld(b, c, 0 !== d),
            La: null,
          });
        },
        c: (a, b, c) => {
          function d(f) {
            return new e(w.buffer, C[(f + 4) >> 2], C[f >> 2]);
          }
          var e = [
            Int8Array,
            Uint8Array,
            Int16Array,
            Uint16Array,
            Int32Array,
            Uint32Array,
            Float32Array,
            Float64Array,
          ][b];
          c = U(c);
          oc(
            a,
            {
              name: c,
              fromWireType: d,
              argPackAdvance: 8,
              readValueFromPointer: d,
            },
            { qc: !0 },
          );
        },
        t: (a, b) => {
          b = U(b);
          var c = "std::string" === b;
          oc(a, {
            name: b,
            fromWireType: function (d) {
              var e = C[d >> 2],
                f = d + 4;
              if (c)
                for (var g = f, m = 0; m <= e; ++m) {
                  var l = f + m;
                  if (m == e || 0 == x[l]) {
                    g = g ? I(x, g, l - g) : "";
                    if (void 0 === n) var n = g;
                    else (n += String.fromCharCode(0)), (n += g);
                    g = l + 1;
                  }
                }
              else {
                n = Array(e);
                for (m = 0; m < e; ++m) n[m] = String.fromCharCode(x[f + m]);
                n = n.join("");
              }
              Zc(d);
              return n;
            },
            toWireType: function (d, e) {
              e instanceof ArrayBuffer && (e = new Uint8Array(e));
              var f = "string" == typeof e;
              if (
                !(
                  f ||
                  e instanceof Uint8Array ||
                  e instanceof Uint8ClampedArray ||
                  e instanceof Int8Array
                )
              )
                throw new V("Cannot pass non-string to std::string");
              var g = c && f ? ab(e) : e.length;
              var m = Gd(4 + g + 1),
                l = m + 4;
              C[m >> 2] = g;
              if (c && f) K(e, x, l, g + 1);
              else if (f)
                for (f = 0; f < g; ++f) {
                  var n = e.charCodeAt(f);
                  if (255 < n)
                    throw (
                      (Zc(l),
                      new V(
                        "String has UTF-16 code units that do not fit in 8 bits",
                      ))
                    );
                  x[l + f] = n;
                }
              else for (f = 0; f < g; ++f) x[l + f] = e[f];
              null !== d && d.push(Zc, m);
              return m;
            },
            argPackAdvance: 8,
            readValueFromPointer: Qc,
            La(d) {
              Zc(d);
            },
          });
        },
        l: (a, b, c) => {
          c = U(c);
          if (2 === b) {
            var d = nd;
            var e = od;
            var f = pd;
            var g = () => z;
            var m = 1;
          } else
            4 === b && ((d = qd), (e = rd), (f = sd), (g = () => C), (m = 2));
          oc(a, {
            name: c,
            fromWireType: (l) => {
              for (
                var n = C[l >> 2], q = g(), p, t = l + 4, h = 0;
                h <= n;
                ++h
              ) {
                var r = l + 4 + h * b;
                if (h == n || 0 == q[r >> m])
                  (t = d(t, r - t)),
                    void 0 === p
                      ? (p = t)
                      : ((p += String.fromCharCode(0)), (p += t)),
                    (t = r + b);
              }
              Zc(l);
              return p;
            },
            toWireType: (l, n) => {
              if ("string" != typeof n)
                throw new V(`Cannot pass non-string to C++ string type ${c}`);
              var q = f(n),
                p = Gd(4 + q + b);
              C[p >> 2] = q >> m;
              e(n, p + 4, q + b);
              null !== l && l.push(Zc, p);
              return p;
            },
            argPackAdvance: 8,
            readValueFromPointer: jc,
            La(l) {
              Zc(l);
            },
          });
        },
        f: (a, b, c, d, e, f) => {
          hc[a] = { name: U(b), Db: W(c, d), Oa: W(e, f), Mb: [] };
        },
        b: (a, b, c, d, e, f, g, m, l, n) => {
          hc[a].Mb.push({
            kc: U(b),
            oc: c,
            nb: W(d, e),
            nc: f,
            Bc: g,
            Ac: W(m, l),
            Cc: n,
          });
        },
        T: (a, b) => {
          b = U(b);
          oc(a, {
            Uc: !0,
            name: b,
            argPackAdvance: 0,
            fromWireType: () => {},
            toWireType: () => {},
          });
        },
        U: function (a) {
          if (Jd.has(a)) {
            var b = Jd.get(a),
              c = Jd;
            c.Fa[a] = void 0;
            c.yb.push(a);
            0 < b.readyState && 4 > b.readyState && b.abort();
          }
        },
        P: () => 1,
        j: (a, b, c) => {
          a = hd(a);
          b = td(b, "emval::as");
          return ud(b, c, a);
        },
        m: (a, b, c, d) => {
          a = vd[a];
          b = hd(b);
          return a(null, b, c, d);
        },
        $: (a, b, c, d, e) => {
          a = vd[a];
          b = hd(b);
          c = xd(c);
          return a(b, b[c], d, e);
        },
        y: gd,
        _: (a) => {
          if (0 === a) return Oc(yd());
          a = xd(a);
          return Oc(yd()[a]);
        },
        o: (a, b, c) => {
          var d = Ad(a, b),
            e = d.shift();
          a--;
          var f = Array(a);
          b = `methodCaller<(${d.map((g) => g.name).join(", ")}) => ${e.name}>`;
          return zd(
            Fc(b, (g, m, l, n) => {
              for (var q = 0, p = 0; p < a; ++p)
                (f[p] = d[p].readValueFromPointer(n + q)),
                  (q += d[p].argPackAdvance);
              g = 1 === c ? Bd(m, f) : m.apply(g, f);
              return ud(e, l, g);
            }),
          );
        },
        u: (a, b) => {
          a = hd(a);
          b = hd(b);
          return Oc(a[b]);
        },
        i: (a) => {
          4 < a && (X.get(a).Vb += 1);
        },
        x: () => Oc([]),
        aa: (a) => Oc(xd(a)),
        ba: (a) => {
          var b = hd(a);
          ic(b);
          gd(a);
        },
        w: (a, b, c) => {
          a = hd(a);
          b = hd(b);
          c = hd(c);
          a[b] = c;
        },
        d: (a, b) => {
          a = td(a, "_emval_take_value");
          a = a.readValueFromPointer(b);
          return Oc(a);
        },
        B: function (a, b, c) {
          a = new Date(1e3 * Fd(a, b));
          B[c >> 2] = a.getSeconds();
          B[(c + 4) >> 2] = a.getMinutes();
          B[(c + 8) >> 2] = a.getHours();
          B[(c + 12) >> 2] = a.getDate();
          B[(c + 16) >> 2] = a.getMonth();
          B[(c + 20) >> 2] = a.getFullYear() - 1900;
          B[(c + 24) >> 2] = a.getDay();
          B[(c + 28) >> 2] =
            ((Cd(a.getFullYear()) ? Dd : Ed)[a.getMonth()] + a.getDate() - 1) |
            0;
          B[(c + 36) >> 2] = -(60 * a.getTimezoneOffset());
          b = new Date(a.getFullYear(), 6, 1).getTimezoneOffset();
          var d = new Date(a.getFullYear(), 0, 1).getTimezoneOffset();
          B[(c + 32) >> 2] =
            (b != d && a.getTimezoneOffset() == Math.min(d, b)) | 0;
        },
        C: function (a) {
          var b = new Date(
              B[(a + 20) >> 2] + 1900,
              B[(a + 16) >> 2],
              B[(a + 12) >> 2],
              B[(a + 8) >> 2],
              B[(a + 4) >> 2],
              B[a >> 2],
              0,
            ),
            c = B[(a + 32) >> 2],
            d = b.getTimezoneOffset(),
            e = new Date(b.getFullYear(), 6, 1).getTimezoneOffset(),
            f = new Date(b.getFullYear(), 0, 1).getTimezoneOffset(),
            g = Math.min(f, e);
          0 > c
            ? (B[(a + 32) >> 2] = Number(e != f && g == d))
            : 0 < c != (g == d) &&
              ((e = Math.max(f, e)),
              b.setTime(b.getTime() + 6e4 * ((0 < c ? g : e) - d)));
          B[(a + 24) >> 2] = b.getDay();
          B[(a + 28) >> 2] =
            ((Cd(b.getFullYear()) ? Dd : Ed)[b.getMonth()] + b.getDate() - 1) |
            0;
          B[a >> 2] = b.getSeconds();
          B[(a + 4) >> 2] = b.getMinutes();
          B[(a + 8) >> 2] = b.getHours();
          B[(a + 12) >> 2] = b.getDate();
          B[(a + 16) >> 2] = b.getMonth();
          B[(a + 20) >> 2] = b.getYear();
          a = b.getTime();
          a = isNaN(a) ? -1 : a / 1e3;
          return (
            ae(
              ((E = a),
              1 <= +Math.abs(E)
                ? 0 < E
                  ? +Math.floor(E / 4294967296) >>> 0
                  : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0
                : 0),
            ),
            a >>> 0
          );
        },
        z: function (a, b, c, d, e, f, g, m) {
          e = Fd(e, f);
          try {
            if (isNaN(e)) return 61;
            var l = Jb(d);
            if (0 !== (b & 2) && 0 === (c & 2) && 2 !== (l.flags & 2097155))
              throw new L(2);
            if (1 === (l.flags & 2097155)) throw new L(2);
            if (!l.xa.cb) throw new L(43);
            var n = l.xa.cb(l, a, e, b, c);
            var q = n.za;
            B[g >> 2] = n.Fa;
            C[m >> 2] = q;
            return 0;
          } catch (p) {
            if ("undefined" == typeof S || "ErrnoError" !== p.name) throw p;
            return -p.Ka;
          }
        },
        A: function (a, b, c, d, e, f, g) {
          f = Fd(f, g);
          try {
            if (isNaN(f)) return 61;
            var m = Jb(e);
            if (c & 2) {
              if (32768 !== (m.node.mode & 61440)) throw new L(43);
              d & 2 || (m.xa.rb && m.xa.rb(m, x.slice(a, a + b), f, b, d));
            }
          } catch (l) {
            if ("undefined" == typeof S || "ErrnoError" !== l.name) throw l;
            return -l.Ka;
          }
        },
        I: (a, b, c) => {
          function d(l) {
            return (l = l.toTimeString().match(/\(([A-Za-z ]+)\)$/))
              ? l[1]
              : "GMT";
          }
          var e = new Date().getFullYear(),
            f = new Date(e, 0, 1),
            g = new Date(e, 6, 1);
          e = f.getTimezoneOffset();
          var m = g.getTimezoneOffset();
          C[a >> 2] = 60 * Math.max(e, m);
          B[b >> 2] = Number(e != m);
          a = d(f);
          b = d(g);
          a = Hd(a);
          b = Hd(b);
          m < e
            ? ((C[c >> 2] = a), (C[(c + 4) >> 2] = b))
            : ((C[c >> 2] = b), (C[(c + 4) >> 2] = a));
        },
        a: () => {
          na("");
        },
        v: (a, b, c) => {
          Id.length = 0;
          for (var d; (d = x[b++]); ) {
            var e = 105 != d;
            e &= 112 != d;
            c += e && c % 8 ? 4 : 0;
            Id.push(112 == d ? C[c >> 2] : 105 == d ? B[c >> 2] : ta[c >> 3]);
            c += e ? 8 : 4;
          }
          return Na[a].apply(null, Id);
        },
        Q: () => Date.now(),
        k: () => performance.now(),
        W: () => !1,
        H: (a) => {
          var b = x.length;
          a >>>= 0;
          if (2147483648 < a) return !1;
          for (var c = 1; 4 >= c; c *= 2) {
            var d = Math,
              e = Math.max(a, b + 2097152 / c);
            a: {
              d =
                (d.min.call(
                  d,
                  2147483648,
                  e + ((65536 - (e % 65536)) % 65536),
                ) -
                  oa.buffer.byteLength +
                  65535) /
                65536;
              try {
                oa.grow(d);
                ua();
                var f = 1;
                break a;
              } catch (g) {}
              f = void 0;
            }
            if (f) return !0;
          }
          return !1;
        },
        V: function (a, b, c, d, e) {
          function f(G) {
            if (t) G();
            else if (!za && !pa)
              try {
                if ((G(), !(za || Ra || 0 < Ld)))
                  try {
                    Pd(qa);
                  } catch (ja) {
                    ja instanceof Oa || "unwind" == ja || ea(1, ja);
                  }
              } catch (ja) {
                ja instanceof Oa || "unwind" == ja || ea(1, ja);
              }
          }
          Ld += 1;
          var g = a + 112,
            m = C[(g + 36) >> 2],
            l = C[(g + 40) >> 2],
            n = C[(g + 44) >> 2],
            q = C[(g + 48) >> 2],
            p = C[(g + 52) >> 2],
            t = !!(p & 64),
            h = (G) => {
              --Ld;
              f(() => {
                m ? Vc(m)(G) : b?.(G);
              });
            },
            r = (G) => {
              f(() => {
                n ? Vc(n)(G) : d?.(G);
              });
            },
            v = (G) => {
              --Ld;
              f(() => {
                l ? Vc(l)(G) : c?.(G);
              });
            },
            A = (G) => {
              f(() => {
                q ? Vc(q)(G) : e?.(G);
              });
            },
            J = (G) => {
              Md(G, h, v, r, A);
            },
            H = (G, ja) => {
              Qd(
                G,
                ja.response,
                (Pa) => {
                  --Ld;
                  f(() => {
                    m ? Vc(m)(Pa) : b?.(Pa);
                  });
                },
                (Pa) => {
                  --Ld;
                  f(() => {
                    m ? Vc(m)(Pa) : b?.(Pa);
                  });
                },
              );
            },
            y = (G) => {
              Md(G, H, v, r, A);
            },
            N = dc(g + 0),
            D = !!(p & 16),
            T = !!(p & 4);
          p = !!(p & 32);
          if ("EM_IDB_STORE" === N)
            (J = C[(g + 84) >> 2]),
              Qd(a, x.slice(J, J + C[(g + 88) >> 2]), h, v);
          else if ("EM_IDB_DELETE" === N) Sd(a, h, v);
          else if (D) {
            if (p) return 0;
            Md(a, T ? H : h, v, r, A);
          } else Rd(a, h, p ? v : T ? y : J);
          return a;
        },
        J: (a, b) => {
          var c = 0;
          Vd().forEach((d, e) => {
            var f = b + c;
            e = C[(a + 4 * e) >> 2] = f;
            for (f = 0; f < d.length; ++f) w[e++ >> 0] = d.charCodeAt(f);
            w[e >> 0] = 0;
            c += d.length + 1;
          });
          return 0;
        },
        K: (a, b) => {
          var c = Vd();
          C[a >> 2] = c.length;
          var d = 0;
          c.forEach((e) => (d += e.length + 1));
          C[b >> 2] = d;
          return 0;
        },
        Z: Pd,
        r: function (a) {
          try {
            var b = Jb(a);
            Wb(b);
            return 0;
          } catch (c) {
            if ("undefined" == typeof S || "ErrnoError" !== c.name) throw c;
            return c.Ka;
          }
        },
        q: function (a, b, c, d) {
          try {
            a: {
              var e = Jb(a);
              a = b;
              for (var f, g = (b = 0); g < c; g++) {
                var m = C[a >> 2],
                  l = C[(a + 4) >> 2];
                a += 8;
                var n = e,
                  q = f,
                  p = w;
                if (0 > l || 0 > q) throw new L(28);
                if (null === n.Sa) throw new L(8);
                if (1 === (n.flags & 2097155)) throw new L(8);
                if (O(n.node.mode)) throw new L(31);
                if (!n.xa.read) throw new L(28);
                var t = "undefined" != typeof q;
                if (!t) q = n.position;
                else if (!n.seekable) throw new L(70);
                var h = n.xa.read(n, p, m, l, q);
                t || (n.position += h);
                var r = h;
                if (0 > r) {
                  var v = -1;
                  break a;
                }
                b += r;
                if (r < l) break;
                "undefined" !== typeof f && (f += r);
              }
              v = b;
            }
            C[d >> 2] = v;
            return 0;
          } catch (A) {
            if ("undefined" == typeof S || "ErrnoError" !== A.name) throw A;
            return A.Ka;
          }
        },
        D: function (a, b, c, d, e) {
          b = Fd(b, c);
          try {
            if (isNaN(b)) return 61;
            var f = Jb(a);
            Xb(f, b, d);
            F = [
              f.position >>> 0,
              ((E = f.position),
              1 <= +Math.abs(E)
                ? 0 < E
                  ? +Math.floor(E / 4294967296) >>> 0
                  : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0
                : 0),
            ];
            B[e >> 2] = F[0];
            B[(e + 4) >> 2] = F[1];
            f.zb && 0 === b && 0 === d && (f.zb = null);
            return 0;
          } catch (g) {
            if ("undefined" == typeof S || "ErrnoError" !== g.name) throw g;
            return g.Ka;
          }
        },
        p: function (a, b, c, d) {
          try {
            a: {
              var e = Jb(a);
              a = b;
              for (var f, g = (b = 0); g < c; g++) {
                var m = C[a >> 2],
                  l = C[(a + 4) >> 2];
                a += 8;
                var n = Yb(e, w, m, l, f);
                if (0 > n) {
                  var q = -1;
                  break a;
                }
                b += n;
                "undefined" !== typeof f && (f += n);
              }
              q = b;
            }
            C[d >> 2] = q;
            return 0;
          } catch (p) {
            if ("undefined" == typeof S || "ErrnoError" !== p.name) throw p;
            return p.Ka;
          }
        },
        X: function () {
          var a = stackTrace(),
            b = ab(a) + 1,
            c = Gd(b);
          K(a, x, c, b);
          return c;
        },
        F: (a, b) => {
          Xa(x.subarray(a, a + b));
          return 0;
        },
        Y: Yd,
        G: (a, b, c, d) => Yd(a, b, c, d),
      },
      Z = (function () {
        function a(c) {
          Z = c.exports;
          oa = Z.ea;
          ua();
          Uc = Z.ia;
          wa.unshift(Z.fa);
          Fa("wasm-instantiate");
          return Z;
        }
        var b = { a: be };
        Ea("wasm-instantiate");
        if (k.instantiateWasm)
          try {
            return k.instantiateWasm(b, a);
          } catch (c) {
            u(`Module.instantiateWasm callback failed with error: ${c}`), ba(c);
          }
        Ma(b, function (c) {
          a(c.instance);
        }).catch(ba);
        return {};
      })(),
      Zc = (a) => (Zc = Z.ga)(a),
      Gd = (a) => (Gd = Z.ha)(a),
      Od = (a) => (Od = Z.ja)(a),
      Yc = (a) => (Yc = Z.ka)(a),
      Nd = () => (Nd = Z.la)(),
      ib = (a, b) => (ib = Z.ma)(a, b),
      ae = (a) => (ae = Z.na)(a);
    k.dynCall_ji = (a, b) => (k.dynCall_ji = Z.oa)(a, b);
    k.dynCall_jiji = (a, b, c, d, e) => (k.dynCall_jiji = Z.pa)(a, b, c, d, e);
    k.dynCall_viijii = (a, b, c, d, e, f, g) =>
      (k.dynCall_viijii = Z.qa)(a, b, c, d, e, f, g);
    k.dynCall_iiiiij = (a, b, c, d, e, f, g) =>
      (k.dynCall_iiiiij = Z.ra)(a, b, c, d, e, f, g);
    k.dynCall_iiiiijj = (a, b, c, d, e, f, g, m, l) =>
      (k.dynCall_iiiiijj = Z.sa)(a, b, c, d, e, f, g, m, l);
    k.dynCall_iiiiiijj = (a, b, c, d, e, f, g, m, l, n) =>
      (k.dynCall_iiiiiijj = Z.ta)(a, b, c, d, e, f, g, m, l, n);
    k.__ZN2MB2NN28LinearDefragmentingAllocator10Allocation4nullE = 1024;
    k.___start_em_js = 60018;
    k.___stop_em_js = 60441;
    k.addRunDependency = Ea;
    k.removeRunDependency = Fa;
    k.FS_createPath = $b;
    k.FS_createLazyFile = cc;
    k.FS_createDevice = R;
    k.FS_createPreloadedFile = tb;
    k.FS_createDataFile = sb;
    k.FS_unlink = Qb;
    var ce;
    Da = function de() {
      ce || ee();
      ce || (Da = de);
    };
    function ee() {
      function a() {
        if (!ce && ((ce = !0), (k.calledRun = !0), !pa)) {
          k.noFSInit ||
            Zb ||
            ((Zb = !0),
            (k.stdin = k.stdin),
            (k.stdout = k.stdout),
            (k.stderr = k.stderr),
            k.stdin
              ? R("/dev", "stdin", k.stdin)
              : Pb("/dev/tty", "/dev/stdin"),
            k.stdout
              ? R("/dev", "stdout", null, k.stdout)
              : Pb("/dev/tty", "/dev/stdout"),
            k.stderr
              ? R("/dev", "stderr", null, k.stderr)
              : Pb("/dev/tty1", "/dev/stderr"),
            Ub("/dev/stdin", 0),
            Ub("/dev/stdout", 1),
            Ub("/dev/stderr", 1));
          Ab = !1;
          Qa(wa);
          aa(k);
          if (k.onRuntimeInitialized) k.onRuntimeInitialized();
          if (k.postRun)
            for (
              "function" == typeof k.postRun && (k.postRun = [k.postRun]);
              k.postRun.length;

            ) {
              var b = k.postRun.shift();
              ya.unshift(b);
            }
          Qa(ya);
        }
      }
      if (!(0 < Ba)) {
        if (k.preRun)
          for (
            "function" == typeof k.preRun && (k.preRun = [k.preRun]);
            k.preRun.length;

          )
            Aa();
        Qa(va);
        0 < Ba ||
          (k.setStatus
            ? (k.setStatus("Running..."),
              setTimeout(function () {
                setTimeout(function () {
                  k.setStatus("");
                }, 1);
                a();
              }, 1))
            : a());
      }
    }
    if (k.preInit)
      for (
        "function" == typeof k.preInit && (k.preInit = [k.preInit]);
        0 < k.preInit.length;

      )
        k.preInit.pop()();
    ee();
    if (
      "object" == typeof window &&
      ("undefined" == typeof ENVIRONMENT_IS_PTHREAD || !ENVIRONMENT_IS_PTHREAD)
    ) {
      var fe = () => {
        var a = 0,
          b = !1,
          c = (l) => {
            var n = new XMLHttpRequest();
            n.open("POST", "stdio.html", !1);
            n.send(l);
            try {
              window.close();
            } catch (q) {}
          },
          d = (l) => {
            var n = new XMLHttpRequest();
            ++a;
            n.onreadystatechange = () => {
              4 == n.readyState && 0 == --a && b && c("^exit^" + qa);
            };
            n.open("POST", "stdio.html", !0);
            n.send(l);
          };
        if (
          -1 != document.URL.search("localhost") ||
          -1 != document.URL.search(":6931/")
        ) {
          var e = 1,
            f = la,
            g = u;
          xa.unshift(() => {
            0 == a ? c("^exit^" + qa) : (b = !0);
          });
          la = (l) => {
            d("^out^" + e++ + "^" + encodeURIComponent(l));
            f(l);
          };
          u = (l) => {
            d("^err^" + e++ + "^" + encodeURIComponent(l));
            g(l);
          };
          var m = () => {
            try {
              d("^pageload^");
            } catch (l) {
              setTimeout(m, 50);
            }
          };
          m();
        }
      };
      "undefined" != typeof document && fe();
    }

    return moduleArg.ready;
  };
})();
if (typeof exports === "object" && typeof module === "object")
  module.exports = createModule;
else if (typeof define === "function" && define["amd"])
  define([], () => createModule);
