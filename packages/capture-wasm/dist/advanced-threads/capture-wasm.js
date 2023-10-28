var createModule = (() => {
  var _scriptDir =
    typeof document !== "undefined" && document.currentScript
      ? document.currentScript.src
      : undefined;

  return function (createModule = {}) {
    /*

 Copyright 2019 The Emscripten Authors
 SPDX-License-Identifier: MIT

 Copyright 2013 The Emscripten Authors
 SPDX-License-Identifier: MIT

 This file gets implicatly injected as a `--post-js` file when
 emcc is run with `--emrun`
*/
    function g() {
      u.buffer != ba.buffer && ca();
      return ba;
    }
    function v() {
      u.buffer != ba.buffer && ca();
      return da;
    }
    function ea() {
      u.buffer != ba.buffer && ca();
      return fa;
    }
    function w() {
      u.buffer != ba.buffer && ca();
      return ha;
    }
    function z() {
      u.buffer != ba.buffer && ca();
      return ia;
    }
    function B() {
      u.buffer != ba.buffer && ca();
      return ja;
    }
    function ka() {
      u.buffer != ba.buffer && ca();
      return la;
    }
    var D;
    D || (D = typeof createModule !== "undefined" ? createModule : {});
    var ma, na;
    D.ready = new Promise(function (a, b) {
      ma = a;
      na = b;
    });
    D.Ub || (D.Ub = 0);
    D.Ub++;
    D.ENVIRONMENT_IS_PTHREAD ||
      D.$ww ||
      (function (a) {
        function b(m, n, q) {
          var p = new XMLHttpRequest();
          p.open("GET", m, !0);
          p.responseType = "arraybuffer";
          p.onprogress = function (r) {
            var k = n;
            r.total && (k = r.total);
            if (r.loaded) {
              p.Fc
                ? (D.ub[m].loaded = r.loaded)
                : ((p.Fc = !0),
                  D.ub || (D.ub = {}),
                  (D.ub[m] = { loaded: r.loaded, total: k }));
              var t = (k = r = 0),
                x;
              for (x in D.ub) {
                var A = D.ub[x];
                r += A.total;
                k += A.loaded;
                t++;
              }
              r = Math.ceil((r * D.Ub) / t);
              D.setStatus &&
                D.setStatus("Downloading data... (" + k + "/" + r + ")");
            } else !D.ub && D.setStatus && D.setStatus("Downloading data...");
          };
          p.onerror = function () {
            throw Error("NetworkError for: " + m);
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
        function c(m) {
          console.error("package error:", m);
        }
        function d() {
          function m(r, k, t) {
            this.start = r;
            this.end = k;
            this.audio = t;
          }
          function n(r) {
            if (!r) throw "Loading data file failed." + Error().stack;
            if (r.constructor.name !== ArrayBuffer.name)
              throw "bad input to processPackageData" + Error().stack;
            r = new Uint8Array(r);
            m.prototype.Kc = r;
            r = a.files;
            for (var k = 0; k < r.length; ++k)
              m.prototype.cc[r[k].filename].onload();
            D.removeRunDependency(
              "datafile_/Users/ivan/Dev/imagecapture-browser/packages/capture-wasm/dist/advanced-threads/capture-wasm.data",
            );
          }
          D.FS_createPath("/", "microblink", !0, !0);
          D.FS_createPath("/microblink", "capture", !0, !0);
          m.prototype = {
            cc: {},
            open: function (r, k) {
              this.name = k;
              this.cc[k] = this;
              D.addRunDependency("fp " + this.name);
            },
            send: function () {},
            onload: function () {
              this.finish(this.Kc.subarray(this.start, this.end));
            },
            finish: function (r) {
              D.FS_createDataFile(this.name, null, r, !0, !0, !0);
              D.removeRunDependency("fp " + this.name);
              this.cc[this.name] = null;
            },
          };
          for (var q = a.files, p = 0; p < q.length; ++p)
            new m(q[p].start, q[p].end, q[p].audio || 0).open(
              "GET",
              q[p].filename,
            );
          D.addRunDependency(
            "datafile_/Users/ivan/Dev/imagecapture-browser/packages/capture-wasm/dist/advanced-threads/capture-wasm.data",
          );
          D.tc || (D.tc = {});
          D.tc[
            "/Users/ivan/Dev/imagecapture-browser/packages/capture-wasm/dist/advanced-threads/capture-wasm.data"
          ] = { Dd: !1 };
          l ? (n(l), (l = null)) : (h = n);
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
        "function" !== typeof D.locateFilePackage ||
          D.locateFile ||
          ((D.locateFile = D.locateFilePackage),
          E(
            "warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)",
          ));
        var e = D.locateFile
            ? D.locateFile("capture-wasm.data", "")
            : "capture-wasm.data",
          f = a.remote_package_size,
          h = null,
          l = D.getPreloadedPackage ? D.getPreloadedPackage(e, f) : null;
        l ||
          b(
            e,
            f,
            function (m) {
              h ? (h(m), (h = null)) : (l = m);
            },
            c,
          );
        D.calledRun ? d() : (D.preRun || (D.preRun = []), D.preRun.push(d));
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
              "/microblink/capture/Model_0c0458bedf340ad5858a25dd463e63f57ddb42e69c3c5ff0c572a528356b020d.strop",
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
    D.onAbort = function (a) {
      E("Aborted with message: " + a);
      try {
        throw new WebAssembly.RuntimeError(a);
      } catch (b) {
        E("Stacktrace: " + b.stack);
      }
    };
    if ("object" == typeof window) {
      D.arguments = window.location.search.substr(1).trim().split("&");
      for (let a = 0; a < D.arguments.length; ++a)
        D.arguments[a] = decodeURI(D.arguments[a]);
      D.arguments[0] || (D.arguments = []);
    }
    var oa = Object.assign({}, D),
      pa = "./this.program",
      qa = (a, b) => {
        throw b;
      },
      F = D.ENVIRONMENT_IS_PTHREAD || !1,
      ra = "";
    function sa(a) {
      return D.locateFile ? D.locateFile(a, ra) : ra + a;
    }
    var ta, ua, va;
    ra = self.location.href;
    _scriptDir && (ra = _scriptDir);
    ra =
      0 !== ra.indexOf("blob:")
        ? ra.substr(0, ra.replace(/[?#].*/, "").lastIndexOf("/") + 1)
        : "";
    ta = (a) => {
      var b = new XMLHttpRequest();
      b.open("GET", a, !1);
      b.send(null);
      return b.responseText;
    };
    va = (a) => {
      var b = new XMLHttpRequest();
      b.open("GET", a, !1);
      b.responseType = "arraybuffer";
      b.send(null);
      return new Uint8Array(b.response);
    };
    ua = (a, b, c) => {
      var d = new XMLHttpRequest();
      d.open("GET", a, !0);
      d.responseType = "arraybuffer";
      d.onload = () => {
        200 == d.status || (0 == d.status && d.response) ? b(d.response) : c();
      };
      d.onerror = c;
      d.send(null);
    };
    var wa = D.print || console.log.bind(console),
      E = D.printErr || console.warn.bind(console);
    Object.assign(D, oa);
    oa = null;
    D.thisProgram && (pa = D.thisProgram);
    D.quit && (qa = D.quit);
    var xa;
    D.wasmBinary && (xa = D.wasmBinary);
    var noExitRuntime = D.noExitRuntime || !1;
    "object" != typeof WebAssembly && ya("no native wasm support detected");
    var u,
      za,
      Aa = !1,
      Ba,
      Ca = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
    function Da(a, b, c) {
      var d = b + c;
      for (c = b; a[c] && !(c >= d); ) ++c;
      if (16 < c - b && a.buffer && Ca)
        return Ca.decode(
          a.buffer instanceof SharedArrayBuffer
            ? a.slice(b, c)
            : a.subarray(b, c),
        );
      for (d = ""; b < c; ) {
        var e = a[b++];
        if (e & 128) {
          var f = a[b++] & 63;
          if (192 == (e & 224)) d += String.fromCharCode(((e & 31) << 6) | f);
          else {
            var h = a[b++] & 63;
            e =
              224 == (e & 240)
                ? ((e & 15) << 12) | (f << 6) | h
                : ((e & 7) << 18) | (f << 12) | (h << 6) | (a[b++] & 63);
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
    }
    function J(a, b) {
      return a ? Da(v(), a, b) : "";
    }
    function Ea(a, b, c, d) {
      if (!(0 < d)) return 0;
      var e = c;
      d = c + d - 1;
      for (var f = 0; f < a.length; ++f) {
        var h = a.charCodeAt(f);
        if (55296 <= h && 57343 >= h) {
          var l = a.charCodeAt(++f);
          h = (65536 + ((h & 1023) << 10)) | (l & 1023);
        }
        if (127 >= h) {
          if (c >= d) break;
          b[c++] = h;
        } else {
          if (2047 >= h) {
            if (c + 1 >= d) break;
            b[c++] = 192 | (h >> 6);
          } else {
            if (65535 >= h) {
              if (c + 2 >= d) break;
              b[c++] = 224 | (h >> 12);
            } else {
              if (c + 3 >= d) break;
              b[c++] = 240 | (h >> 18);
              b[c++] = 128 | ((h >> 12) & 63);
            }
            b[c++] = 128 | ((h >> 6) & 63);
          }
          b[c++] = 128 | (h & 63);
        }
      }
      b[c] = 0;
      return c - e;
    }
    function K(a, b, c) {
      Ea(a, v(), b, c);
    }
    function Fa(a) {
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
    }
    var ba, da, fa, ha, ia, ja, Ga, la;
    function ca() {
      var a = u.buffer;
      D.HEAP8 = ba = new Int8Array(a);
      D.HEAP16 = fa = new Int16Array(a);
      D.HEAP32 = ia = new Int32Array(a);
      D.HEAPU8 = da = new Uint8Array(a);
      D.HEAPU16 = ha = new Uint16Array(a);
      D.HEAPU32 = ja = new Uint32Array(a);
      D.HEAPF32 = Ga = new Float32Array(a);
      D.HEAPF64 = la = new Float64Array(a);
    }
    var Ha = D.INITIAL_MEMORY || 209715200;
    262144 <= Ha ||
      ya(
        "INITIAL_MEMORY should be larger than STACK_SIZE, was " +
          Ha +
          "! (STACK_SIZE=262144)",
      );
    if (F) u = D.wasmMemory;
    else if (D.wasmMemory) u = D.wasmMemory;
    else if (
      ((u = new WebAssembly.Memory({
        initial: Ha / 65536,
        maximum: 32768,
        shared: !0,
      })),
      !(u.buffer instanceof SharedArrayBuffer))
    )
      throw (
        (E(
          "requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag",
        ),
        Error("bad memory"))
      );
    ca();
    Ha = u.buffer.byteLength;
    var Ia,
      Ja = [],
      Ka = [],
      La = [],
      Ma = [],
      Na = !1,
      Oa = 0;
    function Pa() {
      return noExitRuntime || 0 < Oa;
    }
    function Qa() {
      F ||
        (D.noFSInit ||
          Ra ||
          ((Ra = !0),
          Sa(),
          (D.stdin = D.stdin),
          (D.stdout = D.stdout),
          (D.stderr = D.stderr),
          D.stdin ? Ta("/dev", "stdin", D.stdin) : Ua("/dev/tty", "/dev/stdin"),
          D.stdout
            ? Ta("/dev", "stdout", null, D.stdout)
            : Ua("/dev/tty", "/dev/stdout"),
          D.stderr
            ? Ta("/dev", "stderr", null, D.stderr)
            : Ua("/dev/tty1", "/dev/stderr"),
          Va("/dev/stdin", 0),
          Va("/dev/stdout", 1),
          Va("/dev/stderr", 1)),
        (Wa = !1),
        Za(Ka));
    }
    function $a() {
      var a = D.preRun.shift();
      Ja.unshift(a);
    }
    var ab = 0,
      bb = null,
      cb = null;
    function db() {
      ab++;
      D.monitorRunDependencies && D.monitorRunDependencies(ab);
    }
    function eb() {
      ab--;
      D.monitorRunDependencies && D.monitorRunDependencies(ab);
      if (0 == ab && (null !== bb && (clearInterval(bb), (bb = null)), cb)) {
        var a = cb;
        cb = null;
        a();
      }
    }
    function ya(a) {
      if (D.onAbort) D.onAbort(a);
      a = "Aborted(" + a + ")";
      E(a);
      Aa = !0;
      Ba = 1;
      a = new WebAssembly.RuntimeError(
        a + ". Build with -sASSERTIONS for more info.",
      );
      na(a);
      throw a;
    }
    function fb(a) {
      return a.startsWith("data:application/octet-stream;base64,");
    }
    var gb;
    gb = "capture-wasm.wasm";
    fb(gb) || (gb = sa(gb));
    function hb(a) {
      try {
        if (a == gb && xa) return new Uint8Array(xa);
        if (va) return va(a);
        throw "both async and sync fetching of the wasm failed";
      } catch (b) {
        ya(b);
      }
    }
    function ib(a) {
      return xa || "function" != typeof fetch
        ? Promise.resolve().then(function () {
            return hb(a);
          })
        : fetch(a, { credentials: "same-origin" })
            .then(function (b) {
              if (!b.ok) throw "failed to load wasm binary file at '" + a + "'";
              return b.arrayBuffer();
            })
            .catch(function () {
              return hb(a);
            });
    }
    function jb(a, b, c) {
      return ib(a)
        .then(function (d) {
          return WebAssembly.instantiate(d, b);
        })
        .then(function (d) {
          return d;
        })
        .then(c, function (d) {
          E("failed to asynchronously prepare wasm: " + d);
          ya(d);
        });
    }
    function kb(a, b) {
      var c = gb;
      return xa ||
        "function" != typeof WebAssembly.instantiateStreaming ||
        fb(c) ||
        "function" != typeof fetch
        ? jb(c, a, b)
        : fetch(c, { credentials: "same-origin" }).then(function (d) {
            return WebAssembly.instantiateStreaming(d, a).then(b, function (e) {
              E("wasm streaming compile failed: " + e);
              E("falling back to ArrayBuffer instantiation");
              return jb(c, a, b);
            });
          });
    }
    var L,
      M,
      lb = {
        61921: (a, b, c, d) => {
          a = J(a);
          b = J(b);
          c = J(c);
          d = J(d);
          throw Error(a + b + c + d);
        },
        62137: (a, b) => {
          a = J(a);
          b = J(b);
          throw Error(a + b);
        },
      };
    function mb(a) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + a + ")";
      this.status = a;
    }
    function nb(a) {
      a.terminate();
      a.onmessage = () => {};
    }
    function ob(a) {
      (a = N.lb[a]) || ya();
      N.od(a);
    }
    function pb(a) {
      var b = N.Tc();
      if (!b) return 6;
      N.rb.push(b);
      N.lb[a.kb] = b;
      b.kb = a.kb;
      b.postMessage(
        { cmd: "run", start_routine: a.vd, arg: a.Gc, pthread_ptr: a.kb },
        a.Ad,
      );
      return 0;
    }
    var qb = (a, b) => {
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
      O = (a) => {
        var b = "/" === a.charAt(0),
          c = "/" === a.substr(-1);
        (a = qb(
          a.split("/").filter((d) => !!d),
          !b,
        ).join("/")) ||
          b ||
          (a = ".");
        a && c && (a += "/");
        return (b ? "/" : "") + a;
      },
      rb = (a) => {
        var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
          .exec(a)
          .slice(1);
        a = b[0];
        b = b[1];
        if (!a && !b) return ".";
        b && (b = b.substr(0, b.length - 1));
        return a + b;
      },
      sb = (a) => {
        if ("/" === a) return "/";
        a = O(a);
        a = a.replace(/\/$/, "");
        var b = a.lastIndexOf("/");
        return -1 === b ? a : a.substr(b + 1);
      };
    function tb() {
      if (
        "object" == typeof crypto &&
        "function" == typeof crypto.getRandomValues
      ) {
        var a = new Uint8Array(1);
        return () => {
          crypto.getRandomValues(a);
          return a[0];
        };
      }
      return () => ya("randomDevice");
    }
    function ub() {
      for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
        b = 0 <= c ? arguments[c] : "/";
        if ("string" != typeof b)
          throw new TypeError("Arguments to path.resolve must be strings");
        if (!b) return "";
        a = b + "/" + a;
        b = "/" === b.charAt(0);
      }
      a = qb(
        a.split("/").filter((d) => !!d),
        !b,
      ).join("/");
      return (b ? "/" : "") + a || ".";
    }
    function vb(a, b) {
      var c = Array(Fa(a) + 1);
      a = Ea(a, c, 0, c.length);
      b && (c.length = a);
      return c;
    }
    var wb = [];
    function xb(a, b) {
      wb[a] = { input: [], Xa: [], yb: b };
      yb(a, zb);
    }
    var zb = {
        open: function (a) {
          var b = wb[a.node.Db];
          if (!b) throw new P(43);
          a.bb = b;
          a.seekable = !1;
        },
        close: function (a) {
          a.bb.yb.Jb(a.bb);
        },
        Jb: function (a) {
          a.bb.yb.Jb(a.bb);
        },
        read: function (a, b, c, d) {
          if (!a.bb || !a.bb.yb.pc) throw new P(60);
          for (var e = 0, f = 0; f < d; f++) {
            try {
              var h = a.bb.yb.pc(a.bb);
            } catch (l) {
              throw new P(29);
            }
            if (void 0 === h && 0 === e) throw new P(6);
            if (null === h || void 0 === h) break;
            e++;
            b[c + f] = h;
          }
          e && (a.node.timestamp = Date.now());
          return e;
        },
        write: function (a, b, c, d) {
          if (!a.bb || !a.bb.yb.Zb) throw new P(60);
          try {
            for (var e = 0; e < d; e++) a.bb.yb.Zb(a.bb, b[c + e]);
          } catch (f) {
            throw new P(29);
          }
          d && (a.node.timestamp = Date.now());
          return e;
        },
      },
      Ab = {
        pc: function (a) {
          if (!a.input.length) {
            var b = null;
            "undefined" != typeof window && "function" == typeof window.prompt
              ? ((b = window.prompt("Input: ")), null !== b && (b += "\n"))
              : "function" == typeof readline &&
                ((b = readline()), null !== b && (b += "\n"));
            if (!b) return null;
            a.input = vb(b, !0);
          }
          return a.input.shift();
        },
        Zb: function (a, b) {
          null === b || 10 === b
            ? (wa(Da(a.Xa, 0)), (a.Xa = []))
            : 0 != b && a.Xa.push(b);
        },
        Jb: function (a) {
          a.Xa && 0 < a.Xa.length && (wa(Da(a.Xa, 0)), (a.Xa = []));
        },
      },
      Bb = {
        Zb: function (a, b) {
          null === b || 10 === b
            ? (E(Da(a.Xa, 0)), (a.Xa = []))
            : 0 != b && a.Xa.push(b);
        },
        Jb: function (a) {
          a.Xa && 0 < a.Xa.length && (E(Da(a.Xa, 0)), (a.Xa = []));
        },
      };
    function Cb(a) {
      a = 65536 * Math.ceil(a / 65536);
      var b = Db(65536, a);
      b ? v().fill(0, b, b + a) : (b = 0);
      return b;
    }
    var Q = {
      hb: null,
      jb: function () {
        return Q.createNode(null, "/", 16895, 0);
      },
      createNode: function (a, b, c, d) {
        if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new P(63);
        Q.hb ||
          (Q.hb = {
            dir: {
              node: {
                gb: Q.Ra.gb,
                ab: Q.Ra.ab,
                zb: Q.Ra.zb,
                Nb: Q.Ra.Nb,
                xc: Q.Ra.xc,
                Tb: Q.Ra.Tb,
                yc: Q.Ra.yc,
                wc: Q.Ra.wc,
                Qb: Q.Ra.Qb,
              },
              stream: { qb: Q.Sa.qb },
            },
            file: {
              node: { gb: Q.Ra.gb, ab: Q.Ra.ab },
              stream: {
                qb: Q.Sa.qb,
                read: Q.Sa.read,
                write: Q.Sa.write,
                ec: Q.Sa.ec,
                Ab: Q.Sa.Ab,
                Ob: Q.Sa.Ob,
              },
            },
            link: {
              node: { gb: Q.Ra.gb, ab: Q.Ra.ab, Eb: Q.Ra.Eb },
              stream: {},
            },
            jc: { node: { gb: Q.Ra.gb, ab: Q.Ra.ab }, stream: Eb },
          });
        c = Fb(a, b, c, d);
        16384 === (c.mode & 61440)
          ? ((c.Ra = Q.hb.dir.node), (c.Sa = Q.hb.dir.stream), (c.Qa = {}))
          : 32768 === (c.mode & 61440)
          ? ((c.Ra = Q.hb.file.node),
            (c.Sa = Q.hb.file.stream),
            (c.Va = 0),
            (c.Qa = null))
          : 40960 === (c.mode & 61440)
          ? ((c.Ra = Q.hb.link.node), (c.Sa = Q.hb.link.stream))
          : 8192 === (c.mode & 61440) &&
            ((c.Ra = Q.hb.jc.node), (c.Sa = Q.hb.jc.stream));
        c.timestamp = Date.now();
        a && ((a.Qa[b] = c), (a.timestamp = c.timestamp));
        return c;
      },
      Ed: function (a) {
        return a.Qa
          ? a.Qa.subarray
            ? a.Qa.subarray(0, a.Va)
            : new Uint8Array(a.Qa)
          : new Uint8Array(0);
      },
      mc: function (a, b) {
        var c = a.Qa ? a.Qa.length : 0;
        c >= b ||
          ((b = Math.max(b, (c * (1048576 > c ? 2 : 1.125)) >>> 0)),
          0 != c && (b = Math.max(b, 256)),
          (c = a.Qa),
          (a.Qa = new Uint8Array(b)),
          0 < a.Va && a.Qa.set(c.subarray(0, a.Va), 0));
      },
      nd: function (a, b) {
        if (a.Va != b)
          if (0 == b) (a.Qa = null), (a.Va = 0);
          else {
            var c = a.Qa;
            a.Qa = new Uint8Array(b);
            c && a.Qa.set(c.subarray(0, Math.min(b, a.Va)));
            a.Va = b;
          }
      },
      Ra: {
        gb: function (a) {
          var b = {};
          b.Pc = 8192 === (a.mode & 61440) ? a.id : 1;
          b.Wb = a.id;
          b.mode = a.mode;
          b.hd = 1;
          b.uid = 0;
          b.Xc = 0;
          b.Db = a.Db;
          b.size =
            16384 === (a.mode & 61440)
              ? 4096
              : 32768 === (a.mode & 61440)
              ? a.Va
              : 40960 === (a.mode & 61440)
              ? a.link.length
              : 0;
          b.Hc = new Date(a.timestamp);
          b.gd = new Date(a.timestamp);
          b.Mc = new Date(a.timestamp);
          b.Ic = 4096;
          b.Jc = Math.ceil(b.size / b.Ic);
          return b;
        },
        ab: function (a, b) {
          void 0 !== b.mode && (a.mode = b.mode);
          void 0 !== b.timestamp && (a.timestamp = b.timestamp);
          void 0 !== b.size && Q.nd(a, b.size);
        },
        zb: function () {
          throw Gb[44];
        },
        Nb: function (a, b, c, d) {
          return Q.createNode(a, b, c, d);
        },
        xc: function (a, b, c) {
          if (16384 === (a.mode & 61440)) {
            try {
              var d = Hb(b, c);
            } catch (f) {}
            if (d) for (var e in d.Qa) throw new P(55);
          }
          delete a.parent.Qa[a.name];
          a.parent.timestamp = Date.now();
          a.name = c;
          b.Qa[c] = a;
          b.timestamp = a.parent.timestamp;
          a.parent = b;
        },
        Tb: function (a, b) {
          delete a.Qa[b];
          a.timestamp = Date.now();
        },
        yc: function (a, b) {
          var c = Hb(a, b),
            d;
          for (d in c.Qa) throw new P(55);
          delete a.Qa[b];
          a.timestamp = Date.now();
        },
        wc: function (a) {
          var b = [".", ".."],
            c;
          for (c in a.Qa) a.Qa.hasOwnProperty(c) && b.push(c);
          return b;
        },
        Qb: function (a, b, c) {
          a = Q.createNode(a, b, 41471, 0);
          a.link = c;
          return a;
        },
        Eb: function (a) {
          if (40960 !== (a.mode & 61440)) throw new P(28);
          return a.link;
        },
      },
      Sa: {
        read: function (a, b, c, d, e) {
          var f = a.node.Qa;
          if (e >= a.node.Va) return 0;
          a = Math.min(a.node.Va - e, d);
          if (8 < a && f.subarray) b.set(f.subarray(e, e + a), c);
          else for (d = 0; d < a; d++) b[c + d] = f[e + d];
          return a;
        },
        write: function (a, b, c, d, e, f) {
          b.buffer === g().buffer && (f = !1);
          if (!d) return 0;
          a = a.node;
          a.timestamp = Date.now();
          if (b.subarray && (!a.Qa || a.Qa.subarray)) {
            if (f) return (a.Qa = b.subarray(c, c + d)), (a.Va = d);
            if (0 === a.Va && 0 === e)
              return (a.Qa = b.slice(c, c + d)), (a.Va = d);
            if (e + d <= a.Va) return a.Qa.set(b.subarray(c, c + d), e), d;
          }
          Q.mc(a, e + d);
          if (a.Qa.subarray && b.subarray) a.Qa.set(b.subarray(c, c + d), e);
          else for (f = 0; f < d; f++) a.Qa[e + f] = b[c + f];
          a.Va = Math.max(a.Va, e + d);
          return d;
        },
        qb: function (a, b, c) {
          1 === c
            ? (b += a.position)
            : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.Va);
          if (0 > b) throw new P(28);
          return b;
        },
        ec: function (a, b, c) {
          Q.mc(a.node, b + c);
          a.node.Va = Math.max(a.node.Va, b + c);
        },
        Ab: function (a, b, c, d, e) {
          if (32768 !== (a.node.mode & 61440)) throw new P(43);
          a = a.node.Qa;
          if (e & 2 || a.buffer !== g().buffer) {
            if (0 < c || c + b < a.length)
              a = a.subarray
                ? a.subarray(c, c + b)
                : Array.prototype.slice.call(a, c, c + b);
            c = !0;
            b = Cb(b);
            if (!b) throw new P(48);
            g().set(a, b);
          } else (c = !1), (b = a.byteOffset);
          return { Ua: b, hc: c };
        },
        Ob: function (a, b, c, d) {
          Q.Sa.write(a, b, 0, d, c, !1);
          return 0;
        },
      },
    };
    function Ib(a, b, c) {
      var d = "al " + a;
      ua(
        a,
        (e) => {
          e || ya('Loading data file "' + a + '" failed (no arrayBuffer).');
          b(new Uint8Array(e));
          d && eb(d);
        },
        () => {
          if (c) c();
          else throw 'Loading data file "' + a + '" failed.';
        },
      );
      d && db(d);
    }
    var Jb = null,
      Kb = {},
      Lb = [],
      Mb = 1,
      Nb = null,
      Wa = !0,
      P = null,
      Gb = {},
      Pb = (a, b = {}) => {
        a = ub(a);
        if (!a) return { path: "", node: null };
        b = Object.assign({ oc: !0, ac: 0 }, b);
        if (8 < b.ac) throw new P(32);
        a = a.split("/").filter((h) => !!h);
        for (var c = Jb, d = "/", e = 0; e < a.length; e++) {
          var f = e === a.length - 1;
          if (f && b.parent) break;
          c = Hb(c, a[e]);
          d = O(d + "/" + a[e]);
          c.Bb && (!f || (f && b.oc)) && (c = c.Bb.root);
          if (!f || b.Ib)
            for (f = 0; 40960 === (c.mode & 61440); )
              if (
                ((c = Ob(d)),
                (d = ub(rb(d), c)),
                (c = Pb(d, { ac: b.ac + 1 }).node),
                40 < f++)
              )
                throw new P(32);
        }
        return { path: d, node: c };
      },
      Qb = (a) => {
        for (var b; ; ) {
          if (a === a.parent)
            return (
              (a = a.jb.sc),
              b ? ("/" !== a[a.length - 1] ? a + "/" + b : a + b) : a
            );
          b = b ? a.name + "/" + b : a.name;
          a = a.parent;
        }
      },
      Rb = (a, b) => {
        for (var c = 0, d = 0; d < b.length; d++)
          c = ((c << 5) - c + b.charCodeAt(d)) | 0;
        return ((a + c) >>> 0) % Nb.length;
      },
      Hb = (a, b) => {
        var c;
        if ((c = (c = Sb(a, "x")) ? c : a.Ra.zb ? 0 : 2)) throw new P(c, a);
        for (c = Nb[Rb(a.id, b)]; c; c = c.xb) {
          var d = c.name;
          if (c.parent.id === a.id && d === b) return c;
        }
        return a.Ra.zb(a, b);
      },
      Fb = (a, b, c, d) => {
        a = new Tb(a, b, c, d);
        b = Rb(a.parent.id, a.name);
        a.xb = Nb[b];
        return (Nb[b] = a);
      },
      Ub = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 },
      Vb = (a) => {
        var b = ["r", "w", "rw"][a & 3];
        a & 512 && (b += "w");
        return b;
      },
      Sb = (a, b) => {
        if (Wa) return 0;
        if (!b.includes("r") || a.mode & 292) {
          if (
            (b.includes("w") && !(a.mode & 146)) ||
            (b.includes("x") && !(a.mode & 73))
          )
            return 2;
        } else return 2;
        return 0;
      },
      Wb = (a, b) => {
        try {
          return Hb(a, b), 20;
        } catch (c) {}
        return Sb(a, "wx");
      },
      Xb = () => {
        for (var a = 0; 4096 >= a; a++) if (!Lb[a]) return a;
        throw new P(33);
      },
      Zb = (a) => {
        Yb ||
          ((Yb = function () {
            this.Pb = {};
          }),
          (Yb.prototype = {}),
          Object.defineProperties(Yb.prototype, {
            object: {
              get: function () {
                return this.node;
              },
              set: function (c) {
                this.node = c;
              },
            },
            flags: {
              get: function () {
                return this.Pb.flags;
              },
              set: function (c) {
                this.Pb.flags = c;
              },
            },
            position: {
              get: function () {
                return this.Pb.position;
              },
              set: function (c) {
                this.Pb.position = c;
              },
            },
          }));
        a = Object.assign(new Yb(), a);
        var b = Xb();
        a.pb = b;
        return (Lb[b] = a);
      },
      Eb = {
        open: (a) => {
          a.Sa = Kb[a.node.Db].Sa;
          a.Sa.open && a.Sa.open(a);
        },
        qb: () => {
          throw new P(70);
        },
      },
      yb = (a, b) => {
        Kb[a] = { Sa: b };
      },
      $b = (a, b) => {
        var c = "/" === b,
          d = !b;
        if (c && Jb) throw new P(10);
        if (!c && !d) {
          var e = Pb(b, { oc: !1 });
          b = e.path;
          e = e.node;
          if (e.Bb) throw new P(10);
          if (16384 !== (e.mode & 61440)) throw new P(54);
        }
        b = { type: a, Hd: {}, sc: b, fd: [] };
        a = a.jb(b);
        a.jb = b;
        b.root = a;
        c ? (Jb = a) : e && ((e.Bb = b), e.jb && e.jb.fd.push(b));
      },
      S = (a, b, c) => {
        var d = Pb(a, { parent: !0 }).node;
        a = sb(a);
        if (!a || "." === a || ".." === a) throw new P(28);
        var e = Wb(d, a);
        if (e) throw new P(e);
        if (!d.Ra.Nb) throw new P(63);
        return d.Ra.Nb(d, a, b, c);
      },
      ac = (a, b, c) => {
        "undefined" == typeof c && ((c = b), (b = 438));
        return S(a, b | 8192, c);
      },
      Ua = (a, b) => {
        if (!ub(a)) throw new P(44);
        var c = Pb(b, { parent: !0 }).node;
        if (!c) throw new P(44);
        b = sb(b);
        var d = Wb(c, b);
        if (d) throw new P(d);
        if (!c.Ra.Qb) throw new P(63);
        c.Ra.Qb(c, b, a);
      },
      bc = (a) => {
        var b = Pb(a, { parent: !0 }).node;
        if (!b) throw new P(44);
        var c = sb(a);
        a = Hb(b, c);
        a: {
          try {
            var d = Hb(b, c);
          } catch (f) {
            d = f.$a;
            break a;
          }
          var e = Sb(b, "wx");
          d = e ? e : 16384 === (d.mode & 61440) ? 31 : 0;
        }
        if (d) throw new P(d);
        if (!b.Ra.Tb) throw new P(63);
        if (a.Bb) throw new P(10);
        b.Ra.Tb(b, c);
        b = Rb(a.parent.id, a.name);
        if (Nb[b] === a) Nb[b] = a.xb;
        else
          for (b = Nb[b]; b; ) {
            if (b.xb === a) {
              b.xb = a.xb;
              break;
            }
            b = b.xb;
          }
      },
      Ob = (a) => {
        a = Pb(a).node;
        if (!a) throw new P(44);
        if (!a.Ra.Eb) throw new P(28);
        return ub(Qb(a.parent), a.Ra.Eb(a));
      },
      cc = (a, b) => {
        a = Pb(a, { Ib: !b }).node;
        if (!a) throw new P(44);
        if (!a.Ra.gb) throw new P(63);
        return a.Ra.gb(a);
      },
      dc = (a) => cc(a, !0),
      ec = (a, b) => {
        a = "string" == typeof a ? Pb(a, { Ib: !0 }).node : a;
        if (!a.Ra.ab) throw new P(63);
        a.Ra.ab(a, {
          mode: (b & 4095) | (a.mode & -4096),
          timestamp: Date.now(),
        });
      },
      Va = (a, b, c) => {
        if ("" === a) throw new P(44);
        if ("string" == typeof b) {
          var d = Ub[b];
          if ("undefined" == typeof d)
            throw Error("Unknown file open mode: " + b);
          b = d;
        }
        c = b & 64 ? (("undefined" == typeof c ? 438 : c) & 4095) | 32768 : 0;
        if ("object" == typeof a) var e = a;
        else {
          a = O(a);
          try {
            e = Pb(a, { Ib: !(b & 131072) }).node;
          } catch (f) {}
        }
        d = !1;
        if (b & 64)
          if (e) {
            if (b & 128) throw new P(20);
          } else (e = S(a, c, 0)), (d = !0);
        if (!e) throw new P(44);
        8192 === (e.mode & 61440) && (b &= -513);
        if (b & 65536 && 16384 !== (e.mode & 61440)) throw new P(54);
        if (
          !d &&
          (c = e
            ? 40960 === (e.mode & 61440)
              ? 32
              : 16384 === (e.mode & 61440) && ("r" !== Vb(b) || b & 512)
              ? 31
              : Sb(e, Vb(b))
            : 44)
        )
          throw new P(c);
        if (b & 512 && !d) {
          c = e;
          c = "string" == typeof c ? Pb(c, { Ib: !0 }).node : c;
          if (!c.Ra.ab) throw new P(63);
          if (16384 === (c.mode & 61440)) throw new P(31);
          if (32768 !== (c.mode & 61440)) throw new P(28);
          if ((d = Sb(c, "w"))) throw new P(d);
          c.Ra.ab(c, { size: 0, timestamp: Date.now() });
        }
        b &= -131713;
        e = Zb({
          node: e,
          path: Qb(e),
          flags: b,
          seekable: !0,
          position: 0,
          Sa: e.Sa,
          Bd: [],
          error: !1,
        });
        e.Sa.open && e.Sa.open(e);
        !D.logReadFiles || b & 1 || (fc || (fc = {}), a in fc || (fc[a] = 1));
        return e;
      },
      gc = (a) => {
        if (null === a.pb) throw new P(8);
        a.Vb && (a.Vb = null);
        try {
          a.Sa.close && a.Sa.close(a);
        } catch (b) {
          throw b;
        } finally {
          Lb[a.pb] = null;
        }
        a.pb = null;
      },
      hc = (a, b, c) => {
        if (null === a.pb) throw new P(8);
        if (!a.seekable || !a.Sa.qb) throw new P(70);
        if (0 != c && 1 != c && 2 != c) throw new P(28);
        a.position = a.Sa.qb(a, b, c);
        a.Bd = [];
      },
      ic = (a, b, c, d, e, f) => {
        if (0 > d || 0 > e) throw new P(28);
        if (null === a.pb) throw new P(8);
        if (0 === (a.flags & 2097155)) throw new P(8);
        if (16384 === (a.node.mode & 61440)) throw new P(31);
        if (!a.Sa.write) throw new P(28);
        a.seekable && a.flags & 1024 && hc(a, 0, 2);
        var h = "undefined" != typeof e;
        if (!h) e = a.position;
        else if (!a.seekable) throw new P(70);
        b = a.Sa.write(a, b, c, d, e, f);
        h || (a.position += b);
        return b;
      },
      Sa = () => {
        P ||
          ((P = function (a, b) {
            this.name = "ErrnoError";
            this.node = b;
            this.qd = function (c) {
              this.$a = c;
            };
            this.qd(a);
            this.message = "FS error";
          }),
          (P.prototype = Error()),
          (P.prototype.constructor = P),
          [44].forEach((a) => {
            Gb[a] = new P(a);
            Gb[a].stack = "<generic error, no stack>";
          }));
      },
      Ra,
      jc = (a, b) => {
        var c = 0;
        a && (c |= 365);
        b && (c |= 146);
        return c;
      },
      kc = (a, b) => {
        a = "string" == typeof a ? a : Qb(a);
        for (b = b.split("/").reverse(); b.length; ) {
          var c = b.pop();
          if (c) {
            var d = O(a + "/" + c);
            try {
              S(d, 16895, 0);
            } catch (e) {}
            a = d;
          }
        }
        return d;
      },
      lc = (a, b, c, d) => {
        a = O(("string" == typeof a ? a : Qb(a)) + "/" + b);
        c = jc(c, d);
        return S(a, ((void 0 !== c ? c : 438) & 4095) | 32768, 0);
      },
      mc = (a, b, c, d, e, f) => {
        var h = b;
        a &&
          ((a = "string" == typeof a ? a : Qb(a)),
          (h = b ? O(a + "/" + b) : a));
        a = jc(d, e);
        h = S(h, ((void 0 !== a ? a : 438) & 4095) | 32768, 0);
        if (c) {
          if ("string" == typeof c) {
            b = Array(c.length);
            d = 0;
            for (e = c.length; d < e; ++d) b[d] = c.charCodeAt(d);
            c = b;
          }
          ec(h, a | 146);
          b = Va(h, 577);
          ic(b, c, 0, c.length, 0, f);
          gc(b);
          ec(h, a);
        }
        return h;
      },
      Ta = (a, b, c, d) => {
        a = O(("string" == typeof a ? a : Qb(a)) + "/" + b);
        b = jc(!!c, !!d);
        Ta.rc || (Ta.rc = 64);
        var e = (Ta.rc++ << 8) | 0;
        yb(e, {
          open: (f) => {
            f.seekable = !1;
          },
          close: () => {
            d && d.buffer && d.buffer.length && d(10);
          },
          read: (f, h, l, m) => {
            for (var n = 0, q = 0; q < m; q++) {
              try {
                var p = c();
              } catch (r) {
                throw new P(29);
              }
              if (void 0 === p && 0 === n) throw new P(6);
              if (null === p || void 0 === p) break;
              n++;
              h[l + q] = p;
            }
            n && (f.node.timestamp = Date.now());
            return n;
          },
          write: (f, h, l, m) => {
            for (var n = 0; n < m; n++)
              try {
                d(h[l + n]);
              } catch (q) {
                throw new P(29);
              }
            m && (f.node.timestamp = Date.now());
            return n;
          },
        });
        return ac(a, b, e);
      },
      nc = (a) => {
        if (!(a.bd || a.cd || a.link || a.Qa)) {
          if ("undefined" != typeof XMLHttpRequest)
            throw Error(
              "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
            );
          if (ta)
            try {
              (a.Qa = vb(ta(a.url), !0)), (a.Va = a.Qa.length);
            } catch (b) {
              throw new P(29);
            }
          else throw Error("Cannot load without read() or XMLHttpRequest.");
        }
      },
      oc = (a, b, c, d, e) => {
        function f() {
          this.Yb = !1;
          this.Hb = [];
        }
        function h(p, r, k, t, x) {
          p = p.node.Qa;
          if (x >= p.length) return 0;
          t = Math.min(p.length - x, t);
          if (p.slice) for (var A = 0; A < t; A++) r[k + A] = p[x + A];
          else for (A = 0; A < t; A++) r[k + A] = p.get(x + A);
          return t;
        }
        f.prototype.get = function (p) {
          if (!(p > this.length - 1 || 0 > p)) {
            var r = p % this.kc;
            return this.Kb((p / this.kc) | 0)[r];
          }
        };
        f.prototype.pd = function (p) {
          this.Kb = p;
        };
        f.prototype.ic = function () {
          var p = new XMLHttpRequest();
          p.open("HEAD", c, !1);
          p.send(null);
          if (!((200 <= p.status && 300 > p.status) || 304 === p.status))
            throw Error("Couldn't load " + c + ". Status: " + p.status);
          var r = Number(p.getResponseHeader("Content-length")),
            k,
            t = (k = p.getResponseHeader("Accept-Ranges")) && "bytes" === k;
          p = (k = p.getResponseHeader("Content-Encoding")) && "gzip" === k;
          var x = 1048576;
          t || (x = r);
          var A = this;
          A.pd((G) => {
            var H = G * x,
              y = (G + 1) * x - 1;
            y = Math.min(y, r - 1);
            if ("undefined" == typeof A.Hb[G]) {
              var R = A.Hb;
              if (H > y)
                throw Error(
                  "invalid range (" + H + ", " + y + ") or no bytes requested!",
                );
              if (y > r - 1)
                throw Error(
                  "only " + r + " bytes available! programmer error!",
                );
              var C = new XMLHttpRequest();
              C.open("GET", c, !1);
              r !== x && C.setRequestHeader("Range", "bytes=" + H + "-" + y);
              C.responseType = "arraybuffer";
              C.overrideMimeType &&
                C.overrideMimeType("text/plain; charset=x-user-defined");
              C.send(null);
              if (!((200 <= C.status && 300 > C.status) || 304 === C.status))
                throw Error("Couldn't load " + c + ". Status: " + C.status);
              H =
                void 0 !== C.response
                  ? new Uint8Array(C.response || [])
                  : vb(C.responseText || "", !0);
              R[G] = H;
            }
            if ("undefined" == typeof A.Hb[G]) throw Error("doXHR failed!");
            return A.Hb[G];
          });
          if (p || !r)
            (x = r = 1),
              (x = r = this.Kb(0).length),
              wa(
                "LazyFiles on gzip forces download of the whole file when length is accessed",
              );
          this.Ec = r;
          this.Dc = x;
          this.Yb = !0;
        };
        if ("undefined" != typeof XMLHttpRequest) {
          var l = new f();
          Object.defineProperties(l, {
            length: {
              get: function () {
                this.Yb || this.ic();
                return this.Ec;
              },
            },
            kc: {
              get: function () {
                this.Yb || this.ic();
                return this.Dc;
              },
            },
          });
          var m = void 0;
        } else (m = c), (l = void 0);
        var n = lc(a, b, d, e);
        l ? (n.Qa = l) : m && ((n.Qa = null), (n.url = m));
        Object.defineProperties(n, {
          Va: {
            get: function () {
              return this.Qa.length;
            },
          },
        });
        var q = {};
        Object.keys(n.Sa).forEach((p) => {
          var r = n.Sa[p];
          q[p] = function () {
            nc(n);
            return r.apply(null, arguments);
          };
        });
        q.read = (p, r, k, t, x) => {
          nc(n);
          return h(p, r, k, t, x);
        };
        q.Ab = (p, r, k) => {
          nc(n);
          var t = Cb(r);
          if (!t) throw new P(48);
          h(p, g(), t, r, k);
          return { Ua: t, hc: !0 };
        };
        n.Sa = q;
        return n;
      },
      qc = (a, b, c, d, e, f, h, l, m, n) => {
        function q(k) {
          function t(x) {
            n && n();
            l || mc(a, b, x, d, e, m);
            f && f();
            eb(r);
          }
          pc.Fd(k, p, t, () => {
            h && h();
            eb(r);
          }) || t(k);
        }
        var p = b ? ub(O(a + "/" + b)) : a,
          r = "cp " + p;
        db(r);
        "string" == typeof c ? Ib(c, (k) => q(k), h) : q(c);
      },
      T = {},
      Yb,
      fc;
    function rc(a, b, c) {
      if ("/" === b.charAt(0)) return b;
      a = -100 === a ? "/" : sc(a).path;
      if (0 == b.length) {
        if (!c) throw new P(44);
        return a;
      }
      return O(a + "/" + b);
    }
    function tc(a, b, c) {
      try {
        var d = a(b);
      } catch (f) {
        if (f && f.node && O(b) !== O(Qb(f.node))) return -54;
        throw f;
      }
      z()[c >> 2] = d.Pc;
      z()[(c + 8) >> 2] = d.Wb;
      z()[(c + 12) >> 2] = d.mode;
      B()[(c + 16) >> 2] = d.hd;
      z()[(c + 20) >> 2] = d.uid;
      z()[(c + 24) >> 2] = d.Xc;
      z()[(c + 28) >> 2] = d.Db;
      M = [
        d.size >>> 0,
        ((L = d.size),
        1 <= +Math.abs(L)
          ? 0 < L
            ? (Math.min(+Math.floor(L / 4294967296), 4294967295) | 0) >>> 0
            : ~~+Math.ceil((L - +(~~L >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      z()[(c + 40) >> 2] = M[0];
      z()[(c + 44) >> 2] = M[1];
      z()[(c + 48) >> 2] = 4096;
      z()[(c + 52) >> 2] = d.Jc;
      a = d.Hc.getTime();
      b = d.gd.getTime();
      var e = d.Mc.getTime();
      M = [
        Math.floor(a / 1e3) >>> 0,
        ((L = Math.floor(a / 1e3)),
        1 <= +Math.abs(L)
          ? 0 < L
            ? (Math.min(+Math.floor(L / 4294967296), 4294967295) | 0) >>> 0
            : ~~+Math.ceil((L - +(~~L >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      z()[(c + 56) >> 2] = M[0];
      z()[(c + 60) >> 2] = M[1];
      B()[(c + 64) >> 2] = (a % 1e3) * 1e3;
      M = [
        Math.floor(b / 1e3) >>> 0,
        ((L = Math.floor(b / 1e3)),
        1 <= +Math.abs(L)
          ? 0 < L
            ? (Math.min(+Math.floor(L / 4294967296), 4294967295) | 0) >>> 0
            : ~~+Math.ceil((L - +(~~L >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      z()[(c + 72) >> 2] = M[0];
      z()[(c + 76) >> 2] = M[1];
      B()[(c + 80) >> 2] = (b % 1e3) * 1e3;
      M = [
        Math.floor(e / 1e3) >>> 0,
        ((L = Math.floor(e / 1e3)),
        1 <= +Math.abs(L)
          ? 0 < L
            ? (Math.min(+Math.floor(L / 4294967296), 4294967295) | 0) >>> 0
            : ~~+Math.ceil((L - +(~~L >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      z()[(c + 88) >> 2] = M[0];
      z()[(c + 92) >> 2] = M[1];
      B()[(c + 96) >> 2] = (e % 1e3) * 1e3;
      M = [
        d.Wb >>> 0,
        ((L = d.Wb),
        1 <= +Math.abs(L)
          ? 0 < L
            ? (Math.min(+Math.floor(L / 4294967296), 4294967295) | 0) >>> 0
            : ~~+Math.ceil((L - +(~~L >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      z()[(c + 104) >> 2] = M[0];
      z()[(c + 108) >> 2] = M[1];
      return 0;
    }
    var uc = void 0;
    function sc(a) {
      a = Lb[a];
      if (!a) throw new P(8);
      return a;
    }
    function vc(a) {
      if (F) return U(1, 1, a);
      Ba = a;
      if (!Pa()) {
        N.Ac();
        if (D.onExit) D.onExit(a);
        Aa = !0;
      }
      qa(a, new mb(a));
    }
    function wc(a) {
      Ba = a;
      if (F) throw (xc(a), "unwind");
      if (!Pa() && !F) {
        yc();
        Za(La);
        Ra = !1;
        zc(0);
        for (var b = 0; b < Lb.length; b++) {
          var c = Lb[b];
          c && gc(c);
        }
        N.Ac();
        Na = !0;
      }
      vc(a);
    }
    function Ac(a) {
      a instanceof mb || "unwind" == a || qa(1, a);
    }
    var N = {
      nb: [],
      rb: [],
      Cc: [],
      lb: {},
      Zc: function () {
        F ? N.ad() : N.$c();
      },
      $c: function () {
        for (var a = navigator.hardwareConcurrency; a--; ) N.fc();
      },
      ad: function () {
        N.receiveObjectTransfer = N.md;
        N.threadInitTLS = N.Bc;
        N.setExitStatus = N.zc;
        noExitRuntime = !1;
      },
      zc: function (a) {
        Ba = a;
      },
      Jd: ["$terminateWorker"],
      Ac: function () {
        for (var a of N.rb) nb(a);
        for (a of N.nb) nb(a);
        N.nb = [];
        N.rb = [];
        N.lb = [];
      },
      od: function (a) {
        var b = a.kb;
        delete N.lb[b];
        N.nb.push(a);
        N.rb.splice(N.rb.indexOf(a), 1);
        a.kb = 0;
        Bc(b);
      },
      md: function () {},
      Bc: function () {
        N.Cc.forEach((a) => a());
      },
      qc: (a) =>
        new Promise((b) => {
          a.onmessage = (f) => {
            f = f.data;
            var h = f.cmd;
            a.kb && (N.Nc = a.kb);
            if (f.targetThread && f.targetThread != Cc()) {
              var l = N.lb[f.Id];
              l
                ? l.postMessage(f, f.transferList)
                : E(
                    'Internal error! Worker sent a message "' +
                      h +
                      '" to target pthread ' +
                      f.targetThread +
                      ", but that thread no longer exists!",
                  );
            } else if ("processProxyingQueue" === h) Dc(f.queue);
            else if ("spawnThread" === h) pb(f);
            else if ("cleanupThread" === h) ob(f.thread);
            else if ("killThread" === h)
              (f = f.thread),
                (h = N.lb[f]),
                delete N.lb[f],
                nb(h),
                Bc(f),
                N.rb.splice(N.rb.indexOf(h), 1),
                (h.kb = 0);
            else if ("cancelThread" === h)
              N.lb[f.thread].postMessage({ cmd: "cancel" });
            else if ("loaded" === h) (a.loaded = !0), b(a);
            else if ("print" === h) wa("Thread " + f.threadId + ": " + f.text);
            else if ("printErr" === h)
              E("Thread " + f.threadId + ": " + f.text);
            else if ("alert" === h)
              alert("Thread " + f.threadId + ": " + f.text);
            else if ("setimmediate" === f.target) a.postMessage(f);
            else if ("callHandler" === h) D[f.handler](...f.args);
            else h && E("worker sent an unknown command " + h);
            N.Nc = void 0;
          };
          a.onerror = (f) => {
            E(
              "worker sent an error! " +
                f.filename +
                ":" +
                f.lineno +
                ": " +
                f.message,
            );
            throw f;
          };
          var c = [],
            d = ["onExit", "onAbort", "print", "printErr"],
            e;
          for (e of d) D.hasOwnProperty(e) && c.push(e);
          a.postMessage({
            cmd: "load",
            handlers: c,
            urlOrBlob: D.mainScriptUrlOrBlob || _scriptDir,
            wasmMemory: u,
            wasmModule: za,
          });
        }),
      ed: function (a) {
        if (F) return a();
        Promise.all(N.nb.map(N.qc)).then(a);
      },
      fc: function () {
        var a = sa("capture-wasm.worker.js");
        a = new Worker(a);
        N.nb.push(a);
      },
      Tc: function () {
        0 == N.nb.length && (N.fc(), N.qc(N.nb[0]));
        return N.nb.pop();
      },
    };
    D.PThread = N;
    function Za(a) {
      for (; 0 < a.length; ) a.shift()(D);
    }
    D.establishStackSpace = function () {
      var a = Cc(),
        b = z()[(a + 52) >> 2];
      a = z()[(a + 56) >> 2];
      Ec(b, b - a);
      Fc(b);
    };
    function xc(a) {
      if (F) return U(2, 0, a);
      try {
        wc(a);
      } catch (b) {
        Ac(b);
      }
    }
    var Gc = [];
    function Hc(a) {
      var b = Gc[a];
      b || (a >= Gc.length && (Gc.length = a + 1), (Gc[a] = b = Ia.get(a)));
      return b;
    }
    D.invokeEntryPoint = function (a, b) {
      a = Hc(a)(b);
      Pa() ? N.zc(a) : Ic(a);
    };
    function Jc(a, b, c, d) {
      return F ? U(3, 1, a, b, c, d) : Kc(a, b, c, d);
    }
    function Kc(a, b, c, d) {
      if ("undefined" == typeof SharedArrayBuffer)
        return (
          E(
            "Current environment does not support SharedArrayBuffer, pthreads are not available!",
          ),
          6
        );
      var e = [];
      if (F && 0 === e.length) return Jc(a, b, c, d);
      a = { vd: c, kb: a, Gc: d, Ad: e };
      return F ? ((a.Cd = "spawnThread"), postMessage(a, e), 0) : pb(a);
    }
    function Lc(a, b) {
      if (F) return U(4, 1, a, b);
      try {
        var c = sc(a);
        return tc(cc, c.path, b);
      } catch (d) {
        if ("undefined" == typeof T || "ErrnoError" !== d.name) throw d;
        return -d.$a;
      }
    }
    function Mc(a, b, c, d) {
      if (F) return U(6, 1, a, b, c, d);
      try {
        b = J(b);
        var e = d & 256;
        b = rc(a, b, d & 4096);
        return tc(e ? dc : cc, b, c);
      } catch (f) {
        if ("undefined" == typeof T || "ErrnoError" !== f.name) throw f;
        return -f.$a;
      }
    }
    function Nc(a, b, c, d) {
      if (F) return U(7, 1, a, b, c, d);
      uc = d;
      try {
        b = J(b);
        b = rc(a, b);
        if (d) {
          uc += 4;
          var e = z()[(uc - 4) >> 2];
        } else e = 0;
        return Va(b, c, e).pb;
      } catch (f) {
        if ("undefined" == typeof T || "ErrnoError" !== f.name) throw f;
        return -f.$a;
      }
    }
    function Oc(a, b) {
      if (F) return U(8, 1, a, b);
      try {
        return (a = J(a)), tc(cc, a, b);
      } catch (c) {
        if ("undefined" == typeof T || "ErrnoError" !== c.name) throw c;
        return -c.$a;
      }
    }
    var Pc = {};
    function Qc(a) {
      for (; a.length; ) {
        var b = a.pop();
        a.pop()(b);
      }
    }
    function Rc(a) {
      return this.fromWireType(z()[a >> 2]);
    }
    var Sc = {},
      Tc = {},
      Uc = {};
    function Vc(a) {
      if (void 0 === a) return "_unknown";
      a = a.replace(/[^a-zA-Z0-9_]/g, "$");
      var b = a.charCodeAt(0);
      return 48 <= b && 57 >= b ? "_" + a : a;
    }
    function Wc(a, b) {
      a = Vc(a);
      return {
        [a]: function () {
          return b.apply(this, arguments);
        },
      }[a];
    }
    function Xc(a) {
      var b = Error,
        c = Wc(a, function (d) {
          this.name = a;
          this.message = d;
          d = Error(d).stack;
          void 0 !== d &&
            (this.stack =
              this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
        });
      c.prototype = Object.create(b.prototype);
      c.prototype.constructor = c;
      c.prototype.toString = function () {
        return void 0 === this.message
          ? this.name
          : this.name + ": " + this.message;
      };
      return c;
    }
    var Yc = void 0;
    function Zc(a) {
      throw new Yc(a);
    }
    function $c(a, b, c) {
      function d(l) {
        l = c(l);
        l.length !== a.length && Zc("Mismatched type converter count");
        for (var m = 0; m < a.length; ++m) ad(a[m], l[m]);
      }
      a.forEach(function (l) {
        Uc[l] = b;
      });
      var e = Array(b.length),
        f = [],
        h = 0;
      b.forEach((l, m) => {
        Tc.hasOwnProperty(l)
          ? (e[m] = Tc[l])
          : (f.push(l),
            Sc.hasOwnProperty(l) || (Sc[l] = []),
            Sc[l].push(() => {
              e[m] = Tc[l];
              ++h;
              h === f.length && d(e);
            }));
      });
      0 === f.length && d(e);
    }
    function bd(a) {
      switch (a) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + a);
      }
    }
    var cd = void 0;
    function V(a) {
      for (var b = ""; v()[a]; ) b += cd[v()[a++]];
      return b;
    }
    var dd = void 0;
    function W(a) {
      throw new dd(a);
    }
    function ad(a, b, c = {}) {
      if (!("argPackAdvance" in b))
        throw new TypeError(
          "registerType registeredInstance requires argPackAdvance",
        );
      var d = b.name;
      a || W('type "' + d + '" must have a positive integer typeid pointer');
      if (Tc.hasOwnProperty(a)) {
        if (c.Yc) return;
        W("Cannot register type '" + d + "' twice");
      }
      Tc[a] = b;
      delete Uc[a];
      Sc.hasOwnProperty(a) &&
        ((b = Sc[a]), delete Sc[a], b.forEach((e) => e()));
    }
    function ed(a) {
      W(a.Pa.Wa.Ta.name + " instance already deleted");
    }
    var fd = !1;
    function gd() {}
    function hd(a) {
      --a.count.value;
      0 === a.count.value && (a.Za ? a.cb.mb(a.Za) : a.Wa.Ta.mb(a.Ua));
    }
    function jd(a, b, c) {
      if (b === c) return a;
      if (void 0 === c.eb) return null;
      a = jd(a, b, c.eb);
      return null === a ? null : c.Qc(a);
    }
    var kd = {},
      ld = [];
    function md() {
      for (; ld.length; ) {
        var a = ld.pop();
        a.Pa.vb = !1;
        a["delete"]();
      }
    }
    var nd = void 0,
      od = {};
    function pd(a, b) {
      for (void 0 === b && W("ptr should not be undefined"); a.eb; )
        (b = a.Fb(b)), (a = a.eb);
      return od[b];
    }
    function qd(a, b) {
      (b.Wa && b.Ua) || Zc("makeClassHandle requires ptr and ptrType");
      !!b.cb !== !!b.Za &&
        Zc("Both smartPtrType and smartPtr must be specified");
      b.count = { value: 1 };
      return rd(Object.create(a, { Pa: { value: b } }));
    }
    function rd(a) {
      if ("undefined" === typeof FinalizationRegistry)
        return (rd = (b) => b), a;
      fd = new FinalizationRegistry((b) => {
        hd(b.Pa);
      });
      rd = (b) => {
        var c = b.Pa;
        c.Za && fd.register(b, { Pa: c }, b);
        return b;
      };
      gd = (b) => {
        fd.unregister(b);
      };
      return rd(a);
    }
    function sd() {}
    function td(a, b, c) {
      if (void 0 === a[b].Ya) {
        var d = a[b];
        a[b] = function () {
          a[b].Ya.hasOwnProperty(arguments.length) ||
            W(
              "Function '" +
                c +
                "' called with an invalid number of arguments (" +
                arguments.length +
                ") - expects one of (" +
                a[b].Ya +
                ")!",
            );
          return a[b].Ya[arguments.length].apply(this, arguments);
        };
        a[b].Ya = [];
        a[b].Ya[d.Gb] = d;
      }
    }
    function ud(a, b, c) {
      D.hasOwnProperty(a)
        ? ((void 0 === c || (void 0 !== D[a].Ya && void 0 !== D[a].Ya[c])) &&
            W("Cannot register public name '" + a + "' twice"),
          td(D, a, a),
          D.hasOwnProperty(c) &&
            W(
              "Cannot register multiple overloads of a function with the same number of arguments (" +
                c +
                ")!",
            ),
          (D[a].Ya[c] = b))
        : ((D[a] = b), void 0 !== c && (D[a].Gd = c));
    }
    function vd(a, b, c, d, e, f, h, l) {
      this.name = a;
      this.constructor = b;
      this.wb = c;
      this.mb = d;
      this.eb = e;
      this.Sc = f;
      this.Fb = h;
      this.Qc = l;
      this.kd = [];
    }
    function wd(a, b, c) {
      for (; b !== c; )
        b.Fb ||
          W(
            "Expected null or instance of " +
              c.name +
              ", got an instance of " +
              b.name,
          ),
          (a = b.Fb(a)),
          (b = b.eb);
      return a;
    }
    function xd(a, b) {
      if (null === b)
        return this.Xb && W("null is not a valid " + this.name), 0;
      b.Pa || W('Cannot pass "' + yd(b) + '" as a ' + this.name);
      b.Pa.Ua ||
        W("Cannot pass deleted object as a pointer of type " + this.name);
      return wd(b.Pa.Ua, b.Pa.Wa.Ta, this.Ta);
    }
    function zd(a, b) {
      if (null === b) {
        this.Xb && W("null is not a valid " + this.name);
        if (this.Mb) {
          var c = this.$b();
          null !== a && a.push(this.mb, c);
          return c;
        }
        return 0;
      }
      b.Pa || W('Cannot pass "' + yd(b) + '" as a ' + this.name);
      b.Pa.Ua ||
        W("Cannot pass deleted object as a pointer of type " + this.name);
      !this.Lb &&
        b.Pa.Wa.Lb &&
        W(
          "Cannot convert argument of type " +
            (b.Pa.cb ? b.Pa.cb.name : b.Pa.Wa.name) +
            " to parameter type " +
            this.name,
        );
      c = wd(b.Pa.Ua, b.Pa.Wa.Ta, this.Ta);
      if (this.Mb)
        switch (
          (void 0 === b.Pa.Za &&
            W("Passing raw pointer to smart pointer is illegal"),
          this.ud)
        ) {
          case 0:
            b.Pa.cb === this
              ? (c = b.Pa.Za)
              : W(
                  "Cannot convert argument of type " +
                    (b.Pa.cb ? b.Pa.cb.name : b.Pa.Wa.name) +
                    " to parameter type " +
                    this.name,
                );
            break;
          case 1:
            c = b.Pa.Za;
            break;
          case 2:
            if (b.Pa.cb === this) c = b.Pa.Za;
            else {
              var d = b.clone();
              c = this.ld(
                c,
                Ad(function () {
                  d["delete"]();
                }),
              );
              null !== a && a.push(this.mb, c);
            }
            break;
          default:
            W("Unsupporting sharing policy");
        }
      return c;
    }
    function Bd(a, b) {
      if (null === b)
        return this.Xb && W("null is not a valid " + this.name), 0;
      b.Pa || W('Cannot pass "' + yd(b) + '" as a ' + this.name);
      b.Pa.Ua ||
        W("Cannot pass deleted object as a pointer of type " + this.name);
      b.Pa.Wa.Lb &&
        W(
          "Cannot convert argument of type " +
            b.Pa.Wa.name +
            " to parameter type " +
            this.name,
        );
      return wd(b.Pa.Ua, b.Pa.Wa.Ta, this.Ta);
    }
    function Cd(a, b, c, d) {
      this.name = a;
      this.Ta = b;
      this.Xb = c;
      this.Lb = d;
      this.Mb = !1;
      this.mb = this.ld = this.$b = this.vc = this.ud = this.jd = void 0;
      void 0 !== b.eb
        ? (this.toWireType = zd)
        : ((this.toWireType = d ? xd : Bd), (this.fb = null));
    }
    function Dd(a, b, c) {
      D.hasOwnProperty(a) || Zc("Replacing nonexistant public symbol");
      void 0 !== D[a].Ya && void 0 !== c
        ? (D[a].Ya[c] = b)
        : ((D[a] = b), (D[a].Gb = c));
    }
    function Ed(a, b) {
      var c = [];
      return function () {
        c.length = 0;
        Object.assign(c, arguments);
        if (a.includes("j")) {
          var d = D["dynCall_" + a];
          d = c && c.length ? d.apply(null, [b].concat(c)) : d.call(null, b);
        } else d = Hc(b).apply(null, c);
        return d;
      };
    }
    function X(a, b) {
      a = V(a);
      var c = a.includes("j") ? Ed(a, b) : Hc(b);
      "function" != typeof c &&
        W("unknown function pointer with signature " + a + ": " + b);
      return c;
    }
    var Fd = void 0;
    function Gd(a) {
      a = Hd(a);
      var b = V(a);
      Id(a);
      return b;
    }
    function Jd(a, b) {
      function c(f) {
        e[f] || Tc[f] || (Uc[f] ? Uc[f].forEach(c) : (d.push(f), (e[f] = !0)));
      }
      var d = [],
        e = {};
      b.forEach(c);
      throw new Fd(a + ": " + d.map(Gd).join([", "]));
    }
    function Kd(a, b) {
      for (var c = [], d = 0; d < a; d++) c.push(B()[(b + 4 * d) >> 2]);
      return c;
    }
    function Ld(a, b, c, d, e) {
      var f = b.length;
      2 > f &&
        W(
          "argTypes array size mismatch! Must at least get return value and 'this' types!",
        );
      var h = null !== b[1] && null !== c,
        l = !1;
      for (c = 1; c < b.length; ++c)
        if (null !== b[c] && void 0 === b[c].fb) {
          l = !0;
          break;
        }
      var m = "void" !== b[0].name,
        n = f - 2,
        q = Array(n),
        p = [],
        r = [];
      return function () {
        arguments.length !== n &&
          W(
            "function " +
              a +
              " called with " +
              arguments.length +
              " arguments, expected " +
              n +
              " args!",
          );
        r.length = 0;
        p.length = h ? 2 : 1;
        p[0] = e;
        if (h) {
          var k = b[1].toWireType(r, this);
          p[1] = k;
        }
        for (var t = 0; t < n; ++t)
          (q[t] = b[t + 2].toWireType(r, arguments[t])), p.push(q[t]);
        t = d.apply(null, p);
        if (l) Qc(r);
        else
          for (var x = h ? 1 : 2; x < b.length; x++) {
            var A = 1 === x ? k : q[x - 2];
            null !== b[x].fb && b[x].fb(A);
          }
        k = m ? b[0].fromWireType(t) : void 0;
        return k;
      };
    }
    var Md = [],
      Y = [
        {},
        { value: void 0 },
        { value: null },
        { value: !0 },
        { value: !1 },
      ];
    function Nd(a) {
      4 < a && 0 === --Y[a].bc && ((Y[a] = void 0), Md.push(a));
    }
    var Od = (a) => {
        a || W("Cannot use deleted val. handle = " + a);
        return Y[a].value;
      },
      Ad = (a) => {
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
            var b = Md.length ? Md.pop() : Y.length;
            Y[b] = { bc: 1, value: a };
            return b;
        }
      };
    function yd(a) {
      if (null === a) return "null";
      var b = typeof a;
      return "object" === b || "array" === b || "function" === b
        ? a.toString()
        : "" + a;
    }
    function Pd(a, b) {
      switch (b) {
        case 2:
          return function (c) {
            var d = this.fromWireType;
            u.buffer != ba.buffer && ca();
            return d.call(this, Ga[c >> 2]);
          };
        case 3:
          return function (c) {
            return this.fromWireType(ka()[c >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + a);
      }
    }
    function Qd(a, b, c) {
      switch (b) {
        case 0:
          return c
            ? function (d) {
                return g()[d];
              }
            : function (d) {
                return v()[d];
              };
        case 1:
          return c
            ? function (d) {
                return ea()[d >> 1];
              }
            : function (d) {
                return w()[d >> 1];
              };
        case 2:
          return c
            ? function (d) {
                return z()[d >> 2];
              }
            : function (d) {
                return B()[d >> 2];
              };
        default:
          throw new TypeError("Unknown integer type: " + a);
      }
    }
    var Rd =
      "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
    function Sd(a, b) {
      var c = a >> 1;
      for (var d = c + b / 2; !(c >= d) && w()[c]; ) ++c;
      c <<= 1;
      if (32 < c - a && Rd) return Rd.decode(v().slice(a, c));
      c = "";
      for (d = 0; !(d >= b / 2); ++d) {
        var e = ea()[(a + 2 * d) >> 1];
        if (0 == e) break;
        c += String.fromCharCode(e);
      }
      return c;
    }
    function Td(a, b, c) {
      void 0 === c && (c = 2147483647);
      if (2 > c) return 0;
      c -= 2;
      var d = b;
      c = c < 2 * a.length ? c / 2 : a.length;
      for (var e = 0; e < c; ++e) {
        var f = a.charCodeAt(e);
        ea()[b >> 1] = f;
        b += 2;
      }
      ea()[b >> 1] = 0;
      return b - d;
    }
    function Ud(a) {
      return 2 * a.length;
    }
    function Vd(a, b) {
      for (var c = 0, d = ""; !(c >= b / 4); ) {
        var e = z()[(a + 4 * c) >> 2];
        if (0 == e) break;
        ++c;
        65536 <= e
          ? ((e -= 65536),
            (d += String.fromCharCode(55296 | (e >> 10), 56320 | (e & 1023))))
          : (d += String.fromCharCode(e));
      }
      return d;
    }
    function Wd(a, b, c) {
      void 0 === c && (c = 2147483647);
      if (4 > c) return 0;
      var d = b;
      c = d + c - 4;
      for (var e = 0; e < a.length; ++e) {
        var f = a.charCodeAt(e);
        if (55296 <= f && 57343 >= f) {
          var h = a.charCodeAt(++e);
          f = (65536 + ((f & 1023) << 10)) | (h & 1023);
        }
        z()[b >> 2] = f;
        b += 4;
        if (b + 4 > c) break;
      }
      z()[b >> 2] = 0;
      return b - d;
    }
    function Xd(a) {
      for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        55296 <= d && 57343 >= d && ++c;
        b += 4;
      }
      return b;
    }
    function Dc(a) {
      Atomics.store(z(), a >> 2, 1);
      Cc() && Yd(a);
      Atomics.compareExchange(z(), a >> 2, 1, 0);
    }
    D.executeNotifiedProxyingQueue = Dc;
    function Zd(a, b) {
      var c = Tc[a];
      void 0 === c && W(b + " has unknown type " + Gd(a));
      return c;
    }
    var $d = {};
    function ae(a) {
      var b = $d[a];
      return void 0 === b ? V(a) : b;
    }
    var be = [];
    function ce() {
      function a(b) {
        b.$$$embind_global$$$ = b;
        var c =
          "object" == typeof $$$embind_global$$$ && b.$$$embind_global$$$ == b;
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
    }
    function de(a) {
      var b = be.length;
      be.push(a);
      return b;
    }
    function ee(a, b) {
      for (var c = Array(a), d = 0; d < a; ++d)
        c[d] = Zd(B()[(b + 4 * d) >> 2], "parameter " + d);
      return c;
    }
    var fe = [];
    function ge(a) {
      var b = Array(a + 1);
      return function (c, d, e) {
        b[0] = c;
        for (var f = 0; f < a; ++f) {
          var h = Zd(B()[(d + 4 * f) >> 2], "parameter " + f);
          b[f + 1] = h.readValueFromPointer(e);
          e += h.argPackAdvance;
        }
        c = new (c.bind.apply(c, b))();
        return Ad(c);
      };
    }
    var he = {};
    function ie(a) {
      return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
    }
    var je = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
      ke = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    function le(a) {
      return (ie(a.getFullYear()) ? je : ke)[a.getMonth()] + a.getDate() - 1;
    }
    function me(a, b, c, d, e, f, h) {
      if (F) return U(9, 1, a, b, c, d, e, f, h);
      try {
        var l = sc(d);
        if (0 !== (b & 2) && 0 === (c & 2) && 2 !== (l.flags & 2097155))
          throw new P(2);
        if (1 === (l.flags & 2097155)) throw new P(2);
        if (!l.Sa.Ab) throw new P(43);
        var m = l.Sa.Ab(l, a, e, b, c);
        var n = m.Ua;
        z()[f >> 2] = m.hc;
        B()[h >> 2] = n;
        return 0;
      } catch (q) {
        if ("undefined" == typeof T || "ErrnoError" !== q.name) throw q;
        return -q.$a;
      }
    }
    function ne(a, b, c, d, e, f) {
      if (F) return U(10, 1, a, b, c, d, e, f);
      try {
        var h = sc(e);
        if (c & 2) {
          if (32768 !== (h.node.mode & 61440)) throw new P(43);
          if (!(d & 2)) {
            var l = v().slice(a, a + b);
            h.Sa.Ob && h.Sa.Ob(h, l, f, b, d);
          }
        }
      } catch (m) {
        if ("undefined" == typeof T || "ErrnoError" !== m.name) throw m;
        return -m.$a;
      }
    }
    function oe(a) {
      var b = Fa(a) + 1,
        c = pe(b);
      c && Ea(a, g(), c, b);
      return c;
    }
    var qe = [];
    function re(a) {
      var b = se();
      a = a();
      Fc(b);
      return a;
    }
    function U(a, b) {
      var c = arguments.length - 2,
        d = arguments;
      return re(() => {
        for (var e = te(8 * c), f = e >> 3, h = 0; h < c; h++) {
          var l = d[2 + h];
          ka()[f + h] = l;
        }
        return ue(a, c, e, b);
      });
    }
    var ve = [],
      we = {};
    function Z(a, b) {
      B()[a >> 2] = b;
      B()[(a + 4) >> 2] = (b / 4294967296) | 0;
    }
    function xe(a, b) {
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
      c.onerror = (d) => b(d);
    }
    var ye;
    function ze(a, b, c, d, e) {
      function f() {
        var C = 0,
          aa = 0;
        y.response &&
          G &&
          0 === B()[(a + 12) >> 2] &&
          (aa = y.response.byteLength);
        0 < aa && ((C = pe(aa)), v().set(new Uint8Array(y.response), C));
        B()[(a + 12) >> 2] = C;
        Z(a + 16, aa);
        Z(a + 24, 0);
        (C = y.response ? y.response.byteLength : 0) && Z(a + 32, C);
        w()[(a + 40) >> 1] = y.readyState;
        w()[(a + 42) >> 1] = y.status;
        y.statusText && K(y.statusText, a + 44, 64);
      }
      var h = B()[(a + 8) >> 2];
      if (h) {
        var l = J(h),
          m = a + 112,
          n = J(m);
        n || (n = "GET");
        B();
        var q = B()[(m + 52) >> 2],
          p = B()[(m + 56) >> 2],
          r = !!B()[(m + 60) >> 2];
        B();
        var k = B()[(m + 68) >> 2],
          t = B()[(m + 72) >> 2];
        h = B()[(m + 76) >> 2];
        var x = B()[(m + 80) >> 2],
          A = B()[(m + 84) >> 2];
        m = B()[(m + 88) >> 2];
        var G = !!(q & 1),
          H = !!(q & 2);
        q = !!(q & 64);
        k = k ? J(k) : void 0;
        t = t ? J(t) : void 0;
        var y = new XMLHttpRequest();
        y.withCredentials = r;
        y.open(n, l, !q, k, t);
        q || (y.timeout = p);
        y.Ld = l;
        y.responseType = "arraybuffer";
        x && ((l = J(x)), y.overrideMimeType(l));
        if (h)
          for (;;) {
            n = B()[h >> 2];
            if (!n) break;
            l = B()[(h + 4) >> 2];
            if (!l) break;
            h += 8;
            n = J(n);
            l = J(l);
            y.setRequestHeader(n, l);
          }
        var R = B()[(a + 0) >> 2];
        we[R] = y;
        h = A && m ? v().slice(A, A + m) : null;
        y.onload = (C) => {
          R in we &&
            (f(),
            200 <= y.status && 300 > y.status
              ? b && b(a, y, C)
              : c && c(a, y, C));
        };
        y.onerror = (C) => {
          R in we && (f(), c && c(a, y, C));
        };
        y.ontimeout = (C) => {
          R in we && c && c(a, y, C);
        };
        y.onprogress = (C) => {
          if (R in we) {
            var aa = G && H && y.response ? y.response.byteLength : 0,
              I = 0;
            0 < aa &&
              G &&
              H &&
              ((I = pe(aa)), v().set(new Uint8Array(y.response), I));
            B()[(a + 12) >> 2] = I;
            Z(a + 16, aa);
            Z(a + 24, C.loaded - aa);
            Z(a + 32, C.total);
            w()[(a + 40) >> 1] = y.readyState;
            3 <= y.readyState &&
              0 === y.status &&
              0 < C.loaded &&
              (y.status = 200);
            w()[(a + 42) >> 1] = y.status;
            y.statusText && K(y.statusText, a + 44, 64);
            d && d(a, y, C);
            I && Id(I);
          }
        };
        y.onreadystatechange = (C) => {
          R in we
            ? ((w()[(a + 40) >> 1] = y.readyState),
              2 <= y.readyState && (w()[(a + 42) >> 1] = y.status),
              e && e(a, y, C))
            : --Oa;
        };
        try {
          y.send(h);
        } catch (C) {
          c && c(a, y, C);
        }
      } else c(a, 0, "no url specified!");
    }
    function Ae(a, b, c, d) {
      var e = ye;
      if (e) {
        var f = a + 112;
        (f = B()[(f + 64) >> 2]) || (f = B()[(a + 8) >> 2]);
        var h = J(f);
        try {
          var l = e
            .transaction(["FILES"], "readwrite")
            .objectStore("FILES")
            .put(b, h);
          l.onsuccess = () => {
            w()[(a + 40) >> 1] = 4;
            w()[(a + 42) >> 1] = 200;
            K("OK", a + 44, 64);
            c(a, 0, h);
          };
          l.onerror = (m) => {
            w()[(a + 40) >> 1] = 4;
            w()[(a + 42) >> 1] = 413;
            K("Payload Too Large", a + 44, 64);
            d(a, 0, m);
          };
        } catch (m) {
          d(a, 0, m);
        }
      } else d(a, 0, "IndexedDB not available!");
    }
    function Be(a, b, c) {
      var d = ye;
      if (d) {
        var e = a + 112;
        (e = B()[(e + 64) >> 2]) || (e = B()[(a + 8) >> 2]);
        e = J(e);
        try {
          var f = d
            .transaction(["FILES"], "readonly")
            .objectStore("FILES")
            .get(e);
          f.onsuccess = (h) => {
            if (h.target.result) {
              h = h.target.result;
              var l = h.byteLength || h.length,
                m = pe(l);
              v().set(new Uint8Array(h), m);
              B()[(a + 12) >> 2] = m;
              Z(a + 16, l);
              Z(a + 24, 0);
              Z(a + 32, l);
              w()[(a + 40) >> 1] = 4;
              w()[(a + 42) >> 1] = 200;
              K("OK", a + 44, 64);
              b(a, 0, h);
            } else
              (w()[(a + 40) >> 1] = 4),
                (w()[(a + 42) >> 1] = 404),
                K("Not Found", a + 44, 64),
                c(a, 0, "no data");
          };
          f.onerror = (h) => {
            w()[(a + 40) >> 1] = 4;
            w()[(a + 42) >> 1] = 404;
            K("Not Found", a + 44, 64);
            c(a, 0, h);
          };
        } catch (h) {
          c(a, 0, h);
        }
      } else c(a, 0, "IndexedDB not available!");
    }
    function Ce(a, b, c) {
      var d = ye;
      if (d) {
        var e = a + 112;
        (e = B()[(e + 64) >> 2]) || (e = B()[(a + 8) >> 2]);
        e = J(e);
        try {
          var f = d
            .transaction(["FILES"], "readwrite")
            .objectStore("FILES")
            .delete(e);
          f.onsuccess = (h) => {
            h = h.target.result;
            B()[(a + 12) >> 2] = 0;
            Z(a + 16, 0);
            Z(a + 24, 0);
            Z(a + 32, 0);
            w()[(a + 40) >> 1] = 4;
            w()[(a + 42) >> 1] = 200;
            K("OK", a + 44, 64);
            b(a, 0, h);
          };
          f.onerror = (h) => {
            w()[(a + 40) >> 1] = 4;
            w()[(a + 42) >> 1] = 404;
            K("Not Found", a + 44, 64);
            c(a, 0, h);
          };
        } catch (h) {
          c(a, 0, h);
        }
      } else c(a, 0, "IndexedDB not available!");
    }
    var De = {};
    function Ee() {
      if (!Fe) {
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
            _: pa || "./this.program",
          },
          b;
        for (b in De) void 0 === De[b] ? delete a[b] : (a[b] = De[b]);
        var c = [];
        for (b in a) c.push(b + "=" + a[b]);
        Fe = c;
      }
      return Fe;
    }
    var Fe;
    function Ge(a, b) {
      if (F) return U(11, 1, a, b);
      var c = 0;
      Ee().forEach(function (d, e) {
        var f = b + c;
        e = B()[(a + 4 * e) >> 2] = f;
        for (f = 0; f < d.length; ++f) g()[e++ >> 0] = d.charCodeAt(f);
        g()[e >> 0] = 0;
        c += d.length + 1;
      });
      return 0;
    }
    function He(a, b) {
      if (F) return U(12, 1, a, b);
      var c = Ee();
      B()[a >> 2] = c.length;
      var d = 0;
      c.forEach(function (e) {
        d += e.length + 1;
      });
      B()[b >> 2] = d;
      return 0;
    }
    function Ie(a) {
      if (F) return U(13, 1, a);
      try {
        var b = sc(a);
        gc(b);
        return 0;
      } catch (c) {
        if ("undefined" == typeof T || "ErrnoError" !== c.name) throw c;
        return c.$a;
      }
    }
    function Je(a, b, c, d) {
      if (F) return U(14, 1, a, b, c, d);
      try {
        a: {
          var e = sc(a);
          a = b;
          for (var f, h = (b = 0); h < c; h++) {
            var l = B()[a >> 2],
              m = B()[(a + 4) >> 2];
            a += 8;
            var n = e,
              q = g(),
              p = l,
              r = m,
              k = f;
            if (0 > r || 0 > k) throw new P(28);
            if (null === n.pb) throw new P(8);
            if (1 === (n.flags & 2097155)) throw new P(8);
            if (16384 === (n.node.mode & 61440)) throw new P(31);
            if (!n.Sa.read) throw new P(28);
            var t = "undefined" != typeof k;
            if (!t) k = n.position;
            else if (!n.seekable) throw new P(70);
            var x = n.Sa.read(n, q, p, r, k);
            t || (n.position += x);
            var A = x;
            if (0 > A) {
              var G = -1;
              break a;
            }
            b += A;
            if (A < m) break;
            "undefined" !== typeof f && (f += A);
          }
          G = b;
        }
        B()[d >> 2] = G;
        return 0;
      } catch (H) {
        if ("undefined" == typeof T || "ErrnoError" !== H.name) throw H;
        return H.$a;
      }
    }
    function Ke(a, b, c, d, e) {
      if (F) return U(15, 1, a, b, c, d, e);
      try {
        b =
          (c + 2097152) >>> 0 < 4194305 - !!b
            ? (b >>> 0) + 4294967296 * c
            : NaN;
        if (isNaN(b)) return 61;
        var f = sc(a);
        hc(f, b, d);
        M = [
          f.position >>> 0,
          ((L = f.position),
          1 <= +Math.abs(L)
            ? 0 < L
              ? (Math.min(+Math.floor(L / 4294967296), 4294967295) | 0) >>> 0
              : ~~+Math.ceil((L - +(~~L >>> 0)) / 4294967296) >>> 0
            : 0),
        ];
        z()[e >> 2] = M[0];
        z()[(e + 4) >> 2] = M[1];
        f.Vb && 0 === b && 0 === d && (f.Vb = null);
        return 0;
      } catch (h) {
        if ("undefined" == typeof T || "ErrnoError" !== h.name) throw h;
        return h.$a;
      }
    }
    function Le(a, b, c, d) {
      if (F) return U(16, 1, a, b, c, d);
      try {
        a: {
          var e = sc(a);
          a = b;
          for (var f, h = (b = 0); h < c; h++) {
            var l = B()[a >> 2],
              m = B()[(a + 4) >> 2];
            a += 8;
            var n = ic(e, g(), l, m, f);
            if (0 > n) {
              var q = -1;
              break a;
            }
            b += n;
            "undefined" !== typeof f && (f += n);
          }
          q = b;
        }
        B()[d >> 2] = q;
        return 0;
      } catch (p) {
        if ("undefined" == typeof T || "ErrnoError" !== p.name) throw p;
        return p.$a;
      }
    }
    function Me(a, b) {
      Me.uc || (Me.uc = tb());
      for (var c = 0; c < b; c++) g()[(a + c) >> 0] = Me.uc();
      return 0;
    }
    var Ne = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      Oe = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function Pe(a, b) {
      g().set(a, b);
    }
    function Qe(a, b, c, d) {
      function e(k, t, x) {
        for (k = "number" == typeof k ? k.toString() : k || ""; k.length < t; )
          k = x[0] + k;
        return k;
      }
      function f(k, t) {
        return e(k, t, "0");
      }
      function h(k, t) {
        function x(G) {
          return 0 > G ? -1 : 0 < G ? 1 : 0;
        }
        var A;
        0 === (A = x(k.getFullYear() - t.getFullYear())) &&
          0 === (A = x(k.getMonth() - t.getMonth())) &&
          (A = x(k.getDate() - t.getDate()));
        return A;
      }
      function l(k) {
        switch (k.getDay()) {
          case 0:
            return new Date(k.getFullYear() - 1, 11, 29);
          case 1:
            return k;
          case 2:
            return new Date(k.getFullYear(), 0, 3);
          case 3:
            return new Date(k.getFullYear(), 0, 2);
          case 4:
            return new Date(k.getFullYear(), 0, 1);
          case 5:
            return new Date(k.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(k.getFullYear() - 1, 11, 30);
        }
      }
      function m(k) {
        var t = k.sb;
        for (k = new Date(new Date(k.tb + 1900, 0, 1).getTime()); 0 < t; ) {
          var x = k.getMonth(),
            A = (ie(k.getFullYear()) ? Ne : Oe)[x];
          if (t > A - k.getDate())
            (t -= A - k.getDate() + 1),
              k.setDate(1),
              11 > x
                ? k.setMonth(x + 1)
                : (k.setMonth(0), k.setFullYear(k.getFullYear() + 1));
          else {
            k.setDate(k.getDate() + t);
            break;
          }
        }
        x = new Date(k.getFullYear() + 1, 0, 4);
        t = l(new Date(k.getFullYear(), 0, 4));
        x = l(x);
        return 0 >= h(t, k)
          ? 0 >= h(x, k)
            ? k.getFullYear() + 1
            : k.getFullYear()
          : k.getFullYear() - 1;
      }
      var n = z()[(d + 40) >> 2];
      d = {
        yd: z()[d >> 2],
        xd: z()[(d + 4) >> 2],
        Rb: z()[(d + 8) >> 2],
        dc: z()[(d + 12) >> 2],
        Sb: z()[(d + 16) >> 2],
        tb: z()[(d + 20) >> 2],
        ib: z()[(d + 24) >> 2],
        sb: z()[(d + 28) >> 2],
        Kd: z()[(d + 32) >> 2],
        wd: z()[(d + 36) >> 2],
        zd: n ? J(n) : "",
      };
      c = J(c);
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
      var p = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
          " ",
        ),
        r =
          "January February March April May June July August September October November December".split(
            " ",
          );
      n = {
        "%a": function (k) {
          return p[k.ib].substring(0, 3);
        },
        "%A": function (k) {
          return p[k.ib];
        },
        "%b": function (k) {
          return r[k.Sb].substring(0, 3);
        },
        "%B": function (k) {
          return r[k.Sb];
        },
        "%C": function (k) {
          return f(((k.tb + 1900) / 100) | 0, 2);
        },
        "%d": function (k) {
          return f(k.dc, 2);
        },
        "%e": function (k) {
          return e(k.dc, 2, " ");
        },
        "%g": function (k) {
          return m(k).toString().substring(2);
        },
        "%G": function (k) {
          return m(k);
        },
        "%H": function (k) {
          return f(k.Rb, 2);
        },
        "%I": function (k) {
          k = k.Rb;
          0 == k ? (k = 12) : 12 < k && (k -= 12);
          return f(k, 2);
        },
        "%j": function (k) {
          for (
            var t = 0, x = 0;
            x <= k.Sb - 1;
            t += (ie(k.tb + 1900) ? Ne : Oe)[x++]
          );
          return f(k.dc + t, 3);
        },
        "%m": function (k) {
          return f(k.Sb + 1, 2);
        },
        "%M": function (k) {
          return f(k.xd, 2);
        },
        "%n": function () {
          return "\n";
        },
        "%p": function (k) {
          return 0 <= k.Rb && 12 > k.Rb ? "AM" : "PM";
        },
        "%S": function (k) {
          return f(k.yd, 2);
        },
        "%t": function () {
          return "\t";
        },
        "%u": function (k) {
          return k.ib || 7;
        },
        "%U": function (k) {
          return f(Math.floor((k.sb + 7 - k.ib) / 7), 2);
        },
        "%V": function (k) {
          var t = Math.floor((k.sb + 7 - ((k.ib + 6) % 7)) / 7);
          2 >= (k.ib + 371 - k.sb - 2) % 7 && t++;
          if (t)
            53 == t &&
              ((x = (k.ib + 371 - k.sb) % 7),
              4 == x || (3 == x && ie(k.tb)) || (t = 1));
          else {
            t = 52;
            var x = (k.ib + 7 - k.sb - 1) % 7;
            (4 == x || (5 == x && ie((k.tb % 400) - 1))) && t++;
          }
          return f(t, 2);
        },
        "%w": function (k) {
          return k.ib;
        },
        "%W": function (k) {
          return f(Math.floor((k.sb + 7 - ((k.ib + 6) % 7)) / 7), 2);
        },
        "%y": function (k) {
          return (k.tb + 1900).toString().substring(2);
        },
        "%Y": function (k) {
          return k.tb + 1900;
        },
        "%z": function (k) {
          k = k.wd;
          var t = 0 <= k;
          k = Math.abs(k) / 60;
          return (
            (t ? "+" : "-") +
            String("0000" + ((k / 60) * 100 + (k % 60))).slice(-4)
          );
        },
        "%Z": function (k) {
          return k.zd;
        },
        "%%": function () {
          return "%";
        },
      };
      c = c.replace(/%%/g, "\x00\x00");
      for (q in n)
        c.includes(q) && (c = c.replace(new RegExp(q, "g"), n[q](d)));
      c = c.replace(/\0\0/g, "%");
      q = vb(c, !1);
      if (q.length > b) return 0;
      Pe(q, a);
      return q.length - 1;
    }
    N.Zc();
    function Tb(a, b, c, d) {
      a || (a = this);
      this.parent = a;
      this.jb = a.jb;
      this.Bb = null;
      this.id = Mb++;
      this.name = b;
      this.mode = c;
      this.Ra = {};
      this.Sa = {};
      this.Db = d;
    }
    Object.defineProperties(Tb.prototype, {
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
      cd: {
        get: function () {
          return 16384 === (this.mode & 61440);
        },
      },
      bd: {
        get: function () {
          return 8192 === (this.mode & 61440);
        },
      },
    });
    Sa();
    Nb = Array(4096);
    $b(Q, "/");
    S("/tmp", 16895, 0);
    S("/home", 16895, 0);
    S("/home/web_user", 16895, 0);
    (() => {
      S("/dev", 16895, 0);
      yb(259, { read: () => 0, write: (b, c, d, e) => e });
      ac("/dev/null", 259);
      xb(1280, Ab);
      xb(1536, Bb);
      ac("/dev/tty", 1280);
      ac("/dev/tty1", 1536);
      var a = tb();
      Ta("/dev", "random", a);
      Ta("/dev", "urandom", a);
      S("/dev/shm", 16895, 0);
      S("/dev/shm/tmp", 16895, 0);
    })();
    (() => {
      S("/proc", 16895, 0);
      var a = S("/proc/self", 16895, 0);
      S("/proc/self/fd", 16895, 0);
      $b(
        {
          jb: () => {
            var b = Fb(a, "fd", 16895, 73);
            b.Ra = {
              zb: (c, d) => {
                var e = Lb[+d];
                if (!e) throw new P(8);
                c = {
                  parent: null,
                  jb: { sc: "fake" },
                  Ra: { Eb: () => e.path },
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
    var pc;
    D.FS_createPath = kc;
    D.FS_createDataFile = mc;
    D.FS_createPreloadedFile = qc;
    D.FS_unlink = bc;
    D.FS_createLazyFile = oc;
    D.FS_createDevice = Ta;
    Yc = D.InternalError = Xc("InternalError");
    for (var Re = Array(256), Se = 0; 256 > Se; ++Se)
      Re[Se] = String.fromCharCode(Se);
    cd = Re;
    dd = D.BindingError = Xc("BindingError");
    sd.prototype.isAliasOf = function (a) {
      if (!(this instanceof sd && a instanceof sd)) return !1;
      var b = this.Pa.Wa.Ta,
        c = this.Pa.Ua,
        d = a.Pa.Wa.Ta;
      for (a = a.Pa.Ua; b.eb; ) (c = b.Fb(c)), (b = b.eb);
      for (; d.eb; ) (a = d.Fb(a)), (d = d.eb);
      return b === d && c === a;
    };
    sd.prototype.clone = function () {
      this.Pa.Ua || ed(this);
      if (this.Pa.Cb) return (this.Pa.count.value += 1), this;
      var a = rd,
        b = Object,
        c = b.create,
        d = Object.getPrototypeOf(this),
        e = this.Pa;
      a = a(
        c.call(b, d, {
          Pa: {
            value: {
              count: e.count,
              vb: e.vb,
              Cb: e.Cb,
              Ua: e.Ua,
              Wa: e.Wa,
              Za: e.Za,
              cb: e.cb,
            },
          },
        }),
      );
      a.Pa.count.value += 1;
      a.Pa.vb = !1;
      return a;
    };
    sd.prototype["delete"] = function () {
      this.Pa.Ua || ed(this);
      this.Pa.vb && !this.Pa.Cb && W("Object already scheduled for deletion");
      gd(this);
      hd(this.Pa);
      this.Pa.Cb || ((this.Pa.Za = void 0), (this.Pa.Ua = void 0));
    };
    sd.prototype.isDeleted = function () {
      return !this.Pa.Ua;
    };
    sd.prototype.deleteLater = function () {
      this.Pa.Ua || ed(this);
      this.Pa.vb && !this.Pa.Cb && W("Object already scheduled for deletion");
      ld.push(this);
      1 === ld.length && nd && nd(md);
      this.Pa.vb = !0;
      return this;
    };
    D.getInheritedInstanceCount = function () {
      return Object.keys(od).length;
    };
    D.getLiveInheritedInstances = function () {
      var a = [],
        b;
      for (b in od) od.hasOwnProperty(b) && a.push(od[b]);
      return a;
    };
    D.flushPendingDeletes = md;
    D.setDelayFunction = function (a) {
      nd = a;
      ld.length && nd && nd(md);
    };
    Cd.prototype.Uc = function (a) {
      this.vc && (a = this.vc(a));
      return a;
    };
    Cd.prototype.lc = function (a) {
      this.mb && this.mb(a);
    };
    Cd.prototype.argPackAdvance = 8;
    Cd.prototype.readValueFromPointer = Rc;
    Cd.prototype.deleteObject = function (a) {
      if (null !== a) a["delete"]();
    };
    Cd.prototype.fromWireType = function (a) {
      function b() {
        return this.Mb
          ? qd(this.Ta.wb, { Wa: this.jd, Ua: c, cb: this, Za: a })
          : qd(this.Ta.wb, { Wa: this, Ua: a });
      }
      var c = this.Uc(a);
      if (!c) return this.lc(a), null;
      var d = pd(this.Ta, c);
      if (void 0 !== d) {
        if (0 === d.Pa.count.value)
          return (d.Pa.Ua = c), (d.Pa.Za = a), d.clone();
        d = d.clone();
        this.lc(a);
        return d;
      }
      d = this.Ta.Sc(c);
      d = kd[d];
      if (!d) return b.call(this);
      d = this.Lb ? d.Lc : d.pointerType;
      var e = jd(c, this.Ta, d.Ta);
      return null === e
        ? b.call(this)
        : this.Mb
        ? qd(d.Ta.wb, { Wa: d, Ua: e, cb: this, Za: a })
        : qd(d.Ta.wb, { Wa: d, Ua: e });
    };
    Fd = D.UnboundTypeError = Xc("UnboundTypeError");
    D.count_emval_handles = function () {
      for (var a = 0, b = 5; b < Y.length; ++b) void 0 !== Y[b] && ++a;
      return a;
    };
    D.get_first_emval = function () {
      for (var a = 5; a < Y.length; ++a) if (void 0 !== Y[a]) return Y[a];
      return null;
    };
    F ||
      (db("library_fetch_init"),
      xe(
        (a) => {
          ye = a;
          eb("library_fetch_init");
        },
        () => {
          ye = !1;
          eb("library_fetch_init");
        },
      ));
    var Te = [
        null,
        vc,
        xc,
        Jc,
        Lc,
        function (a, b) {
          if (F) return U(5, 1, a, b);
          try {
            return (a = J(a)), tc(dc, a, b);
          } catch (c) {
            if ("undefined" == typeof T || "ErrnoError" !== c.name) throw c;
            return -c.$a;
          }
        },
        Mc,
        Nc,
        Oc,
        me,
        ne,
        Ge,
        He,
        Ie,
        Je,
        Ke,
        Le,
      ],
      Ve = {
        R: function (a) {
          Ue(a, !1, 1, !0);
          N.Bc();
        },
        s: function (a) {
          F ? postMessage({ cmd: "cleanupThread", thread: a }) : ob(a);
        },
        K: Kc,
        W: Lc,
        U: Mc,
        X: Nc,
        V: Oc,
        g: function (a) {
          var b = Pc[a];
          delete Pc[a];
          var c = b.$b,
            d = b.mb,
            e = b.nc,
            f = e.map((h) => h.Wc).concat(e.map((h) => h.sd));
          $c([a], f, (h) => {
            var l = {};
            e.forEach((m, n) => {
              var q = h[n],
                p = m.Kb,
                r = m.Vc,
                k = h[n + e.length],
                t = m.rd,
                x = m.td;
              l[m.Rc] = {
                read: (A) => q.fromWireType(p(r, A)),
                write: (A, G) => {
                  var H = [];
                  t(x, A, k.toWireType(H, G));
                  Qc(H);
                },
              };
            });
            return [
              {
                name: b.name,
                fromWireType: function (m) {
                  var n = {},
                    q;
                  for (q in l) n[q] = l[q].read(m);
                  d(m);
                  return n;
                },
                toWireType: function (m, n) {
                  for (var q in l)
                    if (!(q in n))
                      throw new TypeError('Missing field:  "' + q + '"');
                  var p = c();
                  for (q in l) l[q].write(p, n[q]);
                  null !== m && m.push(d, p);
                  return p;
                },
                argPackAdvance: 8,
                readValueFromPointer: Rc,
                fb: d,
              },
            ];
          });
        },
        G: function () {},
        ea: function (a, b, c, d, e) {
          var f = bd(c);
          b = V(b);
          ad(a, {
            name: b,
            fromWireType: function (h) {
              return !!h;
            },
            toWireType: function (h, l) {
              return l ? d : e;
            },
            argPackAdvance: 8,
            readValueFromPointer: function (h) {
              if (1 === c) var l = g();
              else if (2 === c) l = ea();
              else if (4 === c) l = z();
              else throw new TypeError("Unknown boolean type size: " + b);
              return this.fromWireType(l[h >> f]);
            },
            fb: null,
          });
        },
        na: function (a, b, c, d, e, f, h, l, m, n, q, p, r) {
          q = V(q);
          f = X(e, f);
          l && (l = X(h, l));
          n && (n = X(m, n));
          r = X(p, r);
          var k = Vc(q);
          ud(k, function () {
            Jd("Cannot construct " + q + " due to unbound types", [d]);
          });
          $c([a, b, c], d ? [d] : [], function (t) {
            t = t[0];
            if (d) {
              var x = t.Ta;
              var A = x.wb;
            } else A = sd.prototype;
            t = Wc(k, function () {
              if (Object.getPrototypeOf(this) !== G)
                throw new dd("Use 'new' to construct " + q);
              if (void 0 === H.ob)
                throw new dd(q + " has no accessible constructor");
              var R = H.ob[arguments.length];
              if (void 0 === R)
                throw new dd(
                  "Tried to invoke ctor of " +
                    q +
                    " with invalid number of parameters (" +
                    arguments.length +
                    ") - expected (" +
                    Object.keys(H.ob).toString() +
                    ") parameters instead!",
                );
              return R.apply(this, arguments);
            });
            var G = Object.create(A, { constructor: { value: t } });
            t.prototype = G;
            var H = new vd(q, t, G, r, x, f, l, n);
            x = new Cd(q, H, !0, !1);
            A = new Cd(q + "*", H, !1, !1);
            var y = new Cd(q + " const*", H, !1, !0);
            kd[a] = { pointerType: A, Lc: y };
            Dd(k, t);
            return [x, A, y];
          });
        },
        ma: function (a, b, c, d, e, f) {
          0 < b || ya();
          var h = Kd(b, c);
          e = X(d, e);
          $c([], [a], function (l) {
            l = l[0];
            var m = "constructor " + l.name;
            void 0 === l.Ta.ob && (l.Ta.ob = []);
            if (void 0 !== l.Ta.ob[b - 1])
              throw new dd(
                "Cannot register multiple constructors with identical number of parameters (" +
                  (b - 1) +
                  ") for class '" +
                  l.name +
                  "'! Overload resolution is currently only performed using the parameter count, not actual type info!",
              );
            l.Ta.ob[b - 1] = () => {
              Jd("Cannot construct " + l.name + " due to unbound types", h);
            };
            $c([], h, function (n) {
              n.splice(1, 0, null);
              l.Ta.ob[b - 1] = Ld(m, n, null, e, f);
              return [];
            });
            return [];
          });
        },
        k: function (a, b, c, d, e, f, h, l) {
          var m = Kd(c, d);
          b = V(b);
          f = X(e, f);
          $c([], [a], function (n) {
            function q() {
              Jd("Cannot call " + p + " due to unbound types", m);
            }
            n = n[0];
            var p = n.name + "." + b;
            b.startsWith("@@") && (b = Symbol[b.substring(2)]);
            l && n.Ta.kd.push(b);
            var r = n.Ta.wb,
              k = r[b];
            void 0 === k ||
            (void 0 === k.Ya && k.className !== n.name && k.Gb === c - 2)
              ? ((q.Gb = c - 2), (q.className = n.name), (r[b] = q))
              : (td(r, b, p), (r[b].Ya[c - 2] = q));
            $c([], m, function (t) {
              t = Ld(p, t, n, f, h);
              void 0 === r[b].Ya
                ? ((t.Gb = c - 2), (r[b] = t))
                : (r[b].Ya[c - 2] = t);
              return [];
            });
            return [];
          });
        },
        da: function (a, b) {
          b = V(b);
          ad(a, {
            name: b,
            fromWireType: function (c) {
              var d = Od(c);
              Nd(c);
              return d;
            },
            toWireType: function (c, d) {
              return Ad(d);
            },
            argPackAdvance: 8,
            readValueFromPointer: Rc,
            fb: null,
          });
        },
        x: function (a, b, c) {
          c = bd(c);
          b = V(b);
          ad(a, {
            name: b,
            fromWireType: function (d) {
              return d;
            },
            toWireType: function (d, e) {
              return e;
            },
            argPackAdvance: 8,
            readValueFromPointer: Pd(b, c),
            fb: null,
          });
        },
        p: function (a, b, c, d, e, f) {
          var h = Kd(b, c);
          a = V(a);
          e = X(d, e);
          ud(
            a,
            function () {
              Jd("Cannot call " + a + " due to unbound types", h);
            },
            b - 1,
          );
          $c([], h, function (l) {
            Dd(a, Ld(a, [l[0], null].concat(l.slice(1)), null, e, f), b - 1);
            return [];
          });
        },
        i: function (a, b, c, d, e) {
          b = V(b);
          -1 === e && (e = 4294967295);
          e = bd(c);
          var f = (l) => l;
          if (0 === d) {
            var h = 32 - 8 * c;
            f = (l) => (l << h) >>> h;
          }
          c = b.includes("unsigned")
            ? function (l, m) {
                return m >>> 0;
              }
            : function (l, m) {
                return m;
              };
          ad(a, {
            name: b,
            fromWireType: f,
            toWireType: c,
            argPackAdvance: 8,
            readValueFromPointer: Qd(b, e, 0 !== d),
            fb: null,
          });
        },
        e: function (a, b, c) {
          function d(f) {
            f >>= 2;
            var h = B();
            return new e(h.buffer, h[f + 1], h[f]);
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
          c = V(c);
          ad(
            a,
            {
              name: c,
              fromWireType: d,
              argPackAdvance: 8,
              readValueFromPointer: d,
            },
            { Yc: !0 },
          );
        },
        y: function (a, b) {
          b = V(b);
          var c = "std::string" === b;
          ad(a, {
            name: b,
            fromWireType: function (d) {
              var e = B()[d >> 2],
                f = d + 4;
              if (c)
                for (var h = f, l = 0; l <= e; ++l) {
                  var m = f + l;
                  if (l == e || 0 == v()[m]) {
                    h = J(h, m - h);
                    if (void 0 === n) var n = h;
                    else (n += String.fromCharCode(0)), (n += h);
                    h = m + 1;
                  }
                }
              else {
                n = Array(e);
                for (l = 0; l < e; ++l) n[l] = String.fromCharCode(v()[f + l]);
                n = n.join("");
              }
              Id(d);
              return n;
            },
            toWireType: function (d, e) {
              e instanceof ArrayBuffer && (e = new Uint8Array(e));
              var f = "string" == typeof e;
              f ||
                e instanceof Uint8Array ||
                e instanceof Uint8ClampedArray ||
                e instanceof Int8Array ||
                W("Cannot pass non-string to std::string");
              var h = c && f ? Fa(e) : e.length;
              var l = pe(4 + h + 1),
                m = l + 4;
              B()[l >> 2] = h;
              if (c && f) K(e, m, h + 1);
              else if (f)
                for (f = 0; f < h; ++f) {
                  var n = e.charCodeAt(f);
                  255 < n &&
                    (Id(m),
                    W(
                      "String has UTF-16 code units that do not fit in 8 bits",
                    ));
                  v()[m + f] = n;
                }
              else for (f = 0; f < h; ++f) v()[m + f] = e[f];
              null !== d && d.push(Id, l);
              return l;
            },
            argPackAdvance: 8,
            readValueFromPointer: Rc,
            fb: function (d) {
              Id(d);
            },
          });
        },
        o: function (a, b, c) {
          c = V(c);
          if (2 === b) {
            var d = Sd;
            var e = Td;
            var f = Ud;
            var h = () => w();
            var l = 1;
          } else
            4 === b && ((d = Vd), (e = Wd), (f = Xd), (h = () => B()), (l = 2));
          ad(a, {
            name: c,
            fromWireType: function (m) {
              for (
                var n = B()[m >> 2], q = h(), p, r = m + 4, k = 0;
                k <= n;
                ++k
              ) {
                var t = m + 4 + k * b;
                if (k == n || 0 == q[t >> l])
                  (r = d(r, t - r)),
                    void 0 === p
                      ? (p = r)
                      : ((p += String.fromCharCode(0)), (p += r)),
                    (r = t + b);
              }
              Id(m);
              return p;
            },
            toWireType: function (m, n) {
              "string" != typeof n &&
                W("Cannot pass non-string to C++ string type " + c);
              var q = f(n),
                p = pe(4 + q + b);
              B()[p >> 2] = q >> l;
              e(n, p + 4, q + b);
              null !== m && m.push(Id, p);
              return p;
            },
            argPackAdvance: 8,
            readValueFromPointer: Rc,
            fb: function (m) {
              Id(m);
            },
          });
        },
        h: function (a, b, c, d, e, f) {
          Pc[a] = { name: V(b), $b: X(c, d), mb: X(e, f), nc: [] };
        },
        c: function (a, b, c, d, e, f, h, l, m, n) {
          Pc[a].nc.push({
            Rc: V(b),
            Wc: c,
            Kb: X(d, e),
            Vc: f,
            sd: h,
            rd: X(l, m),
            td: n,
          });
        },
        fa: function (a, b) {
          b = V(b);
          ad(a, {
            dd: !0,
            name: b,
            argPackAdvance: 0,
            fromWireType: function () {},
            toWireType: function () {},
          });
        },
        L: function () {
          return 262144;
        },
        ga: function (a) {
          var b = we[a];
          b &&
            (delete we[a], 0 < b.readyState && 4 > b.readyState && b.abort());
        },
        _: function () {
          return !0;
        },
        M: function (a, b, c, d) {
          a == b
            ? setTimeout(() => Dc(d))
            : F
            ? postMessage({
                targetThread: a,
                cmd: "processProxyingQueue",
                queue: d,
              })
            : (a = N.lb[a]) &&
              a.postMessage({ cmd: "processProxyingQueue", queue: d });
        },
        Q: function () {
          return -1;
        },
        n: function (a, b, c) {
          a = Od(a);
          b = Zd(b, "emval::as");
          var d = [],
            e = Ad(d);
          B()[c >> 2] = e;
          return b.toWireType(d, a);
        },
        la: function (a, b, c, d) {
          a = be[a];
          b = Od(b);
          c = ae(c);
          a(b, c, null, d);
        },
        d: Nd,
        r: function (a) {
          if (0 === a) return Ad(ce());
          a = ae(a);
          return Ad(ce()[a]);
        },
        ka: function (a, b) {
          var c = ee(a, b),
            d = c[0];
          b =
            d.name +
            "_$" +
            c
              .slice(1)
              .map(function (h) {
                return h.name;
              })
              .join("_") +
            "$";
          var e = fe[b];
          if (void 0 !== e) return e;
          var f = Array(a - 1);
          e = de((h, l, m, n) => {
            for (var q = 0, p = 0; p < a - 1; ++p)
              (f[p] = c[p + 1].readValueFromPointer(n + q)),
                (q += c[p + 1].argPackAdvance);
            h = h[l].apply(h, f);
            for (p = 0; p < a - 1; ++p) c[p + 1].Oc && c[p + 1].Oc(f[p]);
            if (!d.dd) return d.toWireType(m, h);
          });
          return (fe[b] = e);
        },
        D: function (a, b) {
          a = Od(a);
          b = Od(b);
          return Ad(a[b]);
        },
        l: function (a) {
          4 < a && (Y[a].bc += 1);
        },
        q: function (a, b, c, d) {
          a = Od(a);
          var e = he[b];
          e || ((e = ge(b)), (he[b] = e));
          return e(a, c, d);
        },
        C: function (a) {
          return Ad(ae(a));
        },
        m: function (a) {
          var b = Od(a);
          Qc(b);
          Nd(a);
        },
        j: function (a, b) {
          a = Zd(a, "_emval_take_value");
          a = a.readValueFromPointer(b);
          return Ad(a);
        },
        aa: function (a, b) {
          var c = Date;
          a = B()[a >> 2] + 4294967296 * z()[(a + 4) >> 2];
          c = new c(1e3 * a);
          z()[b >> 2] = c.getSeconds();
          z()[(b + 4) >> 2] = c.getMinutes();
          z()[(b + 8) >> 2] = c.getHours();
          z()[(b + 12) >> 2] = c.getDate();
          z()[(b + 16) >> 2] = c.getMonth();
          z()[(b + 20) >> 2] = c.getFullYear() - 1900;
          z()[(b + 24) >> 2] = c.getDay();
          a = le(c) | 0;
          z()[(b + 28) >> 2] = a;
          z()[(b + 36) >> 2] = -(60 * c.getTimezoneOffset());
          a = new Date(c.getFullYear(), 6, 1).getTimezoneOffset();
          var d = new Date(c.getFullYear(), 0, 1).getTimezoneOffset();
          c = (a != d && c.getTimezoneOffset() == Math.min(d, a)) | 0;
          z()[(b + 32) >> 2] = c;
        },
        ba: function (a) {
          var b = new Date(
              z()[(a + 20) >> 2] + 1900,
              z()[(a + 16) >> 2],
              z()[(a + 12) >> 2],
              z()[(a + 8) >> 2],
              z()[(a + 4) >> 2],
              z()[a >> 2],
              0,
            ),
            c = z()[(a + 32) >> 2],
            d = b.getTimezoneOffset(),
            e = new Date(b.getFullYear(), 6, 1).getTimezoneOffset(),
            f = new Date(b.getFullYear(), 0, 1).getTimezoneOffset(),
            h = Math.min(f, e);
          0 > c
            ? (z()[(a + 32) >> 2] = Number(e != f && h == d))
            : 0 < c != (h == d) &&
              ((e = Math.max(f, e)),
              b.setTime(b.getTime() + 6e4 * ((0 < c ? h : e) - d)));
          z()[(a + 24) >> 2] = b.getDay();
          c = le(b) | 0;
          z()[(a + 28) >> 2] = c;
          z()[a >> 2] = b.getSeconds();
          z()[(a + 4) >> 2] = b.getMinutes();
          z()[(a + 8) >> 2] = b.getHours();
          z()[(a + 12) >> 2] = b.getDate();
          z()[(a + 16) >> 2] = b.getMonth();
          z()[(a + 20) >> 2] = b.getYear();
          return (b.getTime() / 1e3) | 0;
        },
        N: me,
        O: ne,
        ca: function (a, b, c) {
          function d(n) {
            return (n = n.toTimeString().match(/\(([A-Za-z ]+)\)$/))
              ? n[1]
              : "GMT";
          }
          var e = new Date().getFullYear(),
            f = new Date(e, 0, 1),
            h = new Date(e, 6, 1);
          e = f.getTimezoneOffset();
          var l = h.getTimezoneOffset(),
            m = Math.max(e, l);
          B()[a >> 2] = 60 * m;
          z()[b >> 2] = Number(e != l);
          a = d(f);
          b = d(h);
          a = oe(a);
          b = oe(b);
          l < e
            ? ((B()[c >> 2] = a), (B()[(c + 4) >> 2] = b))
            : ((B()[c >> 2] = b), (B()[(c + 4) >> 2] = a));
        },
        b: function () {
          ya("");
        },
        E: function () {
          var a = D.allowedThreads;
          return a ? a : navigator.hardwareConcurrency;
        },
        B: function (a, b, c) {
          qe.length = 0;
          var d;
          for (c >>= 2; (d = v()[b++]); )
            (c += (105 != d) & c),
              qe.push(105 == d ? z()[c] : ka()[c++ >> 1]),
              ++c;
          return lb[a].apply(null, qe);
        },
        t: function () {},
        $: function () {
          return Date.now();
        },
        f: () => performance.timeOrigin + performance.now(),
        A: function () {
          return "undefined" != typeof SharedArrayBuffer;
        },
        Y: function (a, b, c) {
          v().copyWithin(a, b, b + c);
        },
        P: function (a, b, c) {
          ve.length = b;
          c >>= 3;
          for (var d = 0; d < b; d++) ve[d] = ka()[c + d];
          return (0 > a ? lb[-a - 1] : Te[a]).apply(null, ve);
        },
        J: function (a) {
          var b = v().length;
          a >>>= 0;
          if (a <= b || 2147483648 < a) return !1;
          for (var c = 1; 4 >= c; c *= 2) {
            var d = Math,
              e = d.min;
            var f = Math.max(a, b + 2097152 / c);
            f += (65536 - (f % 65536)) % 65536;
            a: {
              var h = u.buffer;
              try {
                u.grow(
                  (e.call(d, 2147483648, f) - h.byteLength + 65535) >>> 16,
                );
                ca();
                var l = 1;
                break a;
              } catch (m) {}
              l = void 0;
            }
            if (l) return !0;
          }
          return !1;
        },
        ha: function (a, b, c, d, e) {
          function f(I) {
            if (A) I();
            else if (!Na && !Aa)
              try {
                if ((I(), !Pa()))
                  try {
                    F ? Ic(Ba) : wc(Ba);
                  } catch (Xa) {
                    Ac(Xa);
                  }
              } catch (Xa) {
                Ac(Xa);
              }
          }
          Oa += 1;
          var h = a + 112,
            l = J(h),
            m = B()[(h + 36) >> 2],
            n = B()[(h + 40) >> 2],
            q = B()[(h + 44) >> 2],
            p = B()[(h + 48) >> 2],
            r = B()[(h + 52) >> 2],
            k = !!(r & 4),
            t = !!(r & 32),
            x = !!(r & 16),
            A = !!(r & 64),
            G = (I) => {
              --Oa;
              f(() => {
                m ? Hc(m)(I) : b && b(I);
              });
            },
            H = (I) => {
              f(() => {
                q ? Hc(q)(I) : d && d(I);
              });
            },
            y = (I) => {
              --Oa;
              f(() => {
                n ? Hc(n)(I) : c && c(I);
              });
            },
            R = (I) => {
              f(() => {
                p ? Hc(p)(I) : e && e(I);
              });
            };
          r = (I) => {
            ze(I, G, y, H, R);
          };
          var C = (I, Xa) => {
              Ae(
                I,
                Xa.response,
                (Ya) => {
                  --Oa;
                  f(() => {
                    m ? Hc(m)(Ya) : b && b(Ya);
                  });
                },
                (Ya) => {
                  --Oa;
                  f(() => {
                    m ? Hc(m)(Ya) : b && b(Ya);
                  });
                },
              );
            },
            aa = (I) => {
              ze(I, C, y, H, R);
            };
          if ("EM_IDB_STORE" === l)
            (l = B()[(h + 84) >> 2]),
              Ae(a, v().slice(l, l + B()[(h + 88) >> 2]), G, y);
          else if ("EM_IDB_DELETE" === l) Ce(a, G, y);
          else if (x) {
            if (t) return 0;
            ze(a, k ? C : G, y, H, R);
          } else Be(a, G, t ? y : k ? aa : r);
          return a;
        },
        Z: function () {
          throw "unwind";
        },
        S: Ge,
        T: He,
        z: wc,
        w: Ie,
        v: Je,
        F: Ke,
        u: Le,
        ia: function () {
          var a = stackTrace(),
            b = Fa(a) + 1,
            c = pe(b);
          K(a, c, b);
          return c;
        },
        H: Me,
        a: u || D.wasmMemory,
        ja: Qe,
        I: function (a, b, c, d) {
          return Qe(a, b, c, d);
        },
      };
    (function () {
      function a(c, d) {
        c = c.exports;
        D.asm = c;
        N.Cc.push(D.asm.ta);
        Ia = D.asm.ya;
        Ka.unshift(D.asm.oa);
        za = d;
        N.ed(() => eb("wasm-instantiate"));
        return c;
      }
      var b = { a: Ve };
      db("wasm-instantiate");
      if (D.instantiateWasm)
        try {
          return D.instantiateWasm(b, a);
        } catch (c) {
          E("Module.instantiateWasm callback failed with error: " + c), na(c);
        }
      kb(b, function (c) {
        a(c.instance, c.module);
      }).catch(na);
      return {};
    })();
    function Id() {
      return (Id = D.asm.pa).apply(null, arguments);
    }
    function pe() {
      return (pe = D.asm.qa).apply(null, arguments);
    }
    var zc = (D._fflush = function () {
        return (zc = D._fflush = D.asm.ra).apply(null, arguments);
      }),
      Cc = (D._pthread_self = function () {
        return (Cc = D._pthread_self = D.asm.sa).apply(null, arguments);
      });
    D.__emscripten_tls_init = function () {
      return (D.__emscripten_tls_init = D.asm.ta).apply(null, arguments);
    };
    function Db() {
      return (Db = D.asm.ua).apply(null, arguments);
    }
    var Hd = (D.___getTypeName = function () {
      return (Hd = D.___getTypeName = D.asm.va).apply(null, arguments);
    });
    D.__embind_initialize_bindings = function () {
      return (D.__embind_initialize_bindings = D.asm.wa).apply(null, arguments);
    };
    function yc() {
      return (yc = D.asm.xa).apply(null, arguments);
    }
    var Ue = (D.__emscripten_thread_init = function () {
      return (Ue = D.__emscripten_thread_init = D.asm.za).apply(
        null,
        arguments,
      );
    });
    D.__emscripten_thread_crashed = function () {
      return (D.__emscripten_thread_crashed = D.asm.Aa).apply(null, arguments);
    };
    function ue() {
      return (ue = D.asm.Ba).apply(null, arguments);
    }
    var Yd = (D.__emscripten_proxy_execute_task_queue = function () {
      return (Yd = D.__emscripten_proxy_execute_task_queue = D.asm.Ca).apply(
        null,
        arguments,
      );
    });
    function Bc() {
      return (Bc = D.asm.Da).apply(null, arguments);
    }
    var Ic = (D.__emscripten_thread_exit = function () {
      return (Ic = D.__emscripten_thread_exit = D.asm.Ea).apply(
        null,
        arguments,
      );
    });
    function Ec() {
      return (Ec = D.asm.Fa).apply(null, arguments);
    }
    function se() {
      return (se = D.asm.Ga).apply(null, arguments);
    }
    function Fc() {
      return (Fc = D.asm.Ha).apply(null, arguments);
    }
    function te() {
      return (te = D.asm.Ia).apply(null, arguments);
    }
    D.dynCall_ji = function () {
      return (D.dynCall_ji = D.asm.Ja).apply(null, arguments);
    };
    D.dynCall_jiji = function () {
      return (D.dynCall_jiji = D.asm.Ka).apply(null, arguments);
    };
    D.dynCall_viijii = function () {
      return (D.dynCall_viijii = D.asm.La).apply(null, arguments);
    };
    D.dynCall_iiiiij = function () {
      return (D.dynCall_iiiiij = D.asm.Ma).apply(null, arguments);
    };
    D.dynCall_iiiiijj = function () {
      return (D.dynCall_iiiiijj = D.asm.Na).apply(null, arguments);
    };
    D.dynCall_iiiiiijj = function () {
      return (D.dynCall_iiiiiijj = D.asm.Oa).apply(null, arguments);
    };
    D.__ZN2MB2NN28LinearDefragmentingAllocator10Allocation4nullE = 14768;
    D.___start_em_js = 60928;
    D.___stop_em_js = 61921;
    D.addRunDependency = db;
    D.removeRunDependency = eb;
    D.FS_createPath = kc;
    D.FS_createDataFile = mc;
    D.FS_createPreloadedFile = qc;
    D.FS_createLazyFile = oc;
    D.FS_createDevice = Ta;
    D.FS_unlink = bc;
    D.keepRuntimeAlive = Pa;
    D.wasmMemory = u;
    D.ExitStatus = mb;
    D.PThread = N;
    var We;
    cb = function Xe() {
      We || Ye();
      We || (cb = Xe);
    };
    function Ye() {
      function a() {
        if (!We && ((We = !0), (D.calledRun = !0), !Aa)) {
          Qa();
          ma(D);
          if (D.onRuntimeInitialized) D.onRuntimeInitialized();
          if (!F) {
            if (D.postRun)
              for (
                "function" == typeof D.postRun && (D.postRun = [D.postRun]);
                D.postRun.length;

              ) {
                var b = D.postRun.shift();
                Ma.unshift(b);
              }
            Za(Ma);
          }
        }
      }
      if (!(0 < ab))
        if (F) ma(D), Qa(), startWorker(D);
        else {
          if (D.preRun)
            for (
              "function" == typeof D.preRun && (D.preRun = [D.preRun]);
              D.preRun.length;

            )
              $a();
          Za(Ja);
          0 < ab ||
            (D.setStatus
              ? (D.setStatus("Running..."),
                setTimeout(function () {
                  setTimeout(function () {
                    D.setStatus("");
                  }, 1);
                  a();
                }, 1))
              : a());
        }
    }
    if (D.preInit)
      for (
        "function" == typeof D.preInit && (D.preInit = [D.preInit]);
        0 < D.preInit.length;

      )
        D.preInit.pop()();
    Ye();
    if ("object" == typeof window && ("undefined" == typeof F || !F)) {
      var Ze = () => {
        var a = 0,
          b = !1,
          c = (m) => {
            var n = new XMLHttpRequest();
            n.open("POST", "stdio.html", !1);
            n.send(m);
            try {
              window.close();
            } catch (q) {}
          },
          d = (m) => {
            var n = new XMLHttpRequest();
            ++a;
            n.onreadystatechange = () => {
              4 == n.readyState && 0 == --a && b && c("^exit^" + Ba);
            };
            n.open("POST", "stdio.html", !0);
            n.send(m);
          };
        if (
          -1 != document.URL.search("localhost") ||
          -1 != document.URL.search(":6931/")
        ) {
          var e = 1,
            f = wa,
            h = E;
          La.unshift(() => {
            0 == a ? c("^exit^" + Ba) : (b = !0);
          });
          wa = (m) => {
            d("^out^" + e++ + "^" + encodeURIComponent(m));
            f(m);
          };
          E = (m) => {
            d("^err^" + e++ + "^" + encodeURIComponent(m));
            h(m);
          };
          var l = () => {
            try {
              d("^pageload^");
            } catch (m) {
              setTimeout(l, 50);
            }
          };
          l();
        }
      };
      "undefined" != typeof document && Ze();
    }

    return createModule.ready;
  };
})();
if (typeof exports === "object" && typeof module === "object")
  module.exports = createModule;
else if (typeof define === "function" && define["amd"])
  define([], function () {
    return createModule;
  });
else if (typeof exports === "object") exports["createModule"] = createModule;
