var createModule = (() => {
  var _scriptDir =
    typeof document !== "undefined" && document.currentScript
      ? document.currentScript.src
      : undefined;

  return function (createModule = {}) {
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
    function A() {
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
    D.Tb || (D.Tb = 0);
    D.Tb++;
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
              p.Dc
                ? (D.tb[m].loaded = r.loaded)
                : ((p.Dc = !0),
                  D.tb || (D.tb = {}),
                  (D.tb[m] = { loaded: r.loaded, total: k }));
              var t = (k = r = 0),
                x;
              for (x in D.tb) {
                var z = D.tb[x];
                r += z.total;
                k += z.loaded;
                t++;
              }
              r = Math.ceil((r * D.Tb) / t);
              D.setStatus &&
                D.setStatus("Downloading data... (" + k + "/" + r + ")");
            } else !D.tb && D.setStatus && D.setStatus("Downloading data...");
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
            m.prototype.Ic = r;
            r = a.files;
            for (var k = 0; k < r.length; ++k)
              m.prototype.bc[r[k].filename].onload();
            D.removeRunDependency(
              "datafile_/Users/ivan/Dev/imagecapture-browser.worktrees/master/packages/capture-wasm/dist/advanced-threads/capture-wasm.data",
            );
          }
          D.FS_createPath("/", "microblink", !0, !0);
          D.FS_createPath("/microblink", "capture", !0, !0);
          m.prototype = {
            bc: {},
            open: function (r, k) {
              this.name = k;
              this.bc[k] = this;
              D.addRunDependency("fp " + this.name);
            },
            send: function () {},
            onload: function () {
              this.finish(this.Ic.subarray(this.start, this.end));
            },
            finish: function (r) {
              D.FS_createDataFile(this.name, null, r, !0, !0, !0);
              D.removeRunDependency("fp " + this.name);
              this.bc[this.name] = null;
            },
          };
          for (var q = a.files, p = 0; p < q.length; ++p)
            new m(q[p].start, q[p].end, q[p].audio || 0).open(
              "GET",
              q[p].filename,
            );
          D.addRunDependency(
            "datafile_/Users/ivan/Dev/imagecapture-browser.worktrees/master/packages/capture-wasm/dist/advanced-threads/capture-wasm.data",
          );
          D.sc || (D.sc = {});
          D.sc[
            "/Users/ivan/Dev/imagecapture-browser.worktrees/master/packages/capture-wasm/dist/advanced-threads/capture-wasm.data"
          ] = { Cd: !1 };
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
    var noExitRuntime = D.noExitRuntime || !0;
    "object" != typeof WebAssembly && ya("no native wasm support detected");
    var u,
      za,
      Aa = !1,
      Ba = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
    function Ca(a, b, c) {
      var d = b + c;
      for (c = b; a[c] && !(c >= d); ) ++c;
      if (16 < c - b && a.buffer && Ba)
        return Ba.decode(
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
      return a ? Ca(v(), a, b) : "";
    }
    function Da(a, b, c, d) {
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
      Da(a, v(), b, c);
    }
    function Ea(a) {
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
    var ba, da, fa, ha, ia, ja, Fa, la;
    function ca() {
      var a = u.buffer;
      D.HEAP8 = ba = new Int8Array(a);
      D.HEAP16 = fa = new Int16Array(a);
      D.HEAP32 = ia = new Int32Array(a);
      D.HEAPU8 = da = new Uint8Array(a);
      D.HEAPU16 = ha = new Uint16Array(a);
      D.HEAPU32 = ja = new Uint32Array(a);
      D.HEAPF32 = Fa = new Float32Array(a);
      D.HEAPF64 = la = new Float64Array(a);
    }
    var Ga = D.INITIAL_MEMORY || 209715200;
    262144 <= Ga ||
      ya(
        "INITIAL_MEMORY should be larger than STACK_SIZE, was " +
          Ga +
          "! (STACK_SIZE=262144)",
      );
    if (F) u = D.wasmMemory;
    else if (D.wasmMemory) u = D.wasmMemory;
    else if (
      ((u = new WebAssembly.Memory({
        initial: Ga / 65536,
        maximum: 12800,
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
    Ga = u.buffer.byteLength;
    var Ha,
      Ia = [],
      Ja = [],
      Ka = [];
    function La() {
      F ||
        (D.noFSInit ||
          Ma ||
          ((Ma = !0),
          Na(),
          (D.stdin = D.stdin),
          (D.stdout = D.stdout),
          (D.stderr = D.stderr),
          D.stdin ? Oa("/dev", "stdin", D.stdin) : Pa("/dev/tty", "/dev/stdin"),
          D.stdout
            ? Oa("/dev", "stdout", null, D.stdout)
            : Pa("/dev/tty", "/dev/stdout"),
          D.stderr
            ? Oa("/dev", "stderr", null, D.stderr)
            : Pa("/dev/tty1", "/dev/stderr"),
          Qa("/dev/stdin", 0),
          Qa("/dev/stdout", 1),
          Qa("/dev/stderr", 1)),
        (Ra = !1),
        Sa(Ja));
    }
    function Ua() {
      var a = D.preRun.shift();
      Ia.unshift(a);
    }
    var Va = 0,
      Wa = null,
      Xa = null;
    function Ya() {
      Va++;
      D.monitorRunDependencies && D.monitorRunDependencies(Va);
    }
    function Za() {
      Va--;
      D.monitorRunDependencies && D.monitorRunDependencies(Va);
      if (0 == Va && (null !== Wa && (clearInterval(Wa), (Wa = null)), Xa)) {
        var a = Xa;
        Xa = null;
        a();
      }
    }
    function ya(a) {
      if (D.onAbort) D.onAbort(a);
      a = "Aborted(" + a + ")";
      E(a);
      Aa = !0;
      a = new WebAssembly.RuntimeError(
        a + ". Build with -sASSERTIONS for more info.",
      );
      na(a);
      throw a;
    }
    function $a(a) {
      return a.startsWith("data:application/octet-stream;base64,");
    }
    var ab;
    ab = "capture-wasm.wasm";
    $a(ab) || (ab = sa(ab));
    function bb(a) {
      try {
        if (a == ab && xa) return new Uint8Array(xa);
        if (va) return va(a);
        throw "both async and sync fetching of the wasm failed";
      } catch (b) {
        ya(b);
      }
    }
    function cb(a) {
      return xa || "function" != typeof fetch
        ? Promise.resolve().then(function () {
            return bb(a);
          })
        : fetch(a, { credentials: "same-origin" })
            .then(function (b) {
              if (!b.ok) throw "failed to load wasm binary file at '" + a + "'";
              return b.arrayBuffer();
            })
            .catch(function () {
              return bb(a);
            });
    }
    function db(a, b, c) {
      return cb(a)
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
    function eb(a, b) {
      var c = ab;
      return xa ||
        "function" != typeof WebAssembly.instantiateStreaming ||
        $a(c) ||
        "function" != typeof fetch
        ? db(c, a, b)
        : fetch(c, { credentials: "same-origin" }).then(function (d) {
            return WebAssembly.instantiateStreaming(d, a).then(b, function (e) {
              E("wasm streaming compile failed: " + e);
              E("falling back to ArrayBuffer instantiation");
              return db(c, a, b);
            });
          });
    }
    var L,
      M,
      fb = {
        61937: (a, b, c, d) => {
          a = J(a);
          b = J(b);
          c = J(c);
          d = J(d);
          throw Error(a + b + c + d);
        },
        62153: (a, b) => {
          a = J(a);
          b = J(b);
          throw Error(a + b);
        },
      };
    function gb(a) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + a + ")";
      this.status = a;
    }
    function hb(a) {
      a.terminate();
      a.onmessage = () => {};
    }
    function ib(a) {
      (a = N.kb[a]) || ya();
      N.md(a);
    }
    function jb(a) {
      var b = N.Rc();
      if (!b) return 6;
      N.qb.push(b);
      N.kb[a.jb] = b;
      b.jb = a.jb;
      b.postMessage(
        { cmd: "run", start_routine: a.td, arg: a.Ec, pthread_ptr: a.jb },
        a.zd,
      );
      return 0;
    }
    var kb = (a, b) => {
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
        (a = kb(
          a.split("/").filter((d) => !!d),
          !b,
        ).join("/")) ||
          b ||
          (a = ".");
        a && c && (a += "/");
        return (b ? "/" : "") + a;
      },
      lb = (a) => {
        var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
          .exec(a)
          .slice(1);
        a = b[0];
        b = b[1];
        if (!a && !b) return ".";
        b && (b = b.substr(0, b.length - 1));
        return a + b;
      },
      mb = (a) => {
        if ("/" === a) return "/";
        a = O(a);
        a = a.replace(/\/$/, "");
        var b = a.lastIndexOf("/");
        return -1 === b ? a : a.substr(b + 1);
      };
    function nb() {
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
    function ob() {
      for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
        b = 0 <= c ? arguments[c] : "/";
        if ("string" != typeof b)
          throw new TypeError("Arguments to path.resolve must be strings");
        if (!b) return "";
        a = b + "/" + a;
        b = "/" === b.charAt(0);
      }
      a = kb(
        a.split("/").filter((d) => !!d),
        !b,
      ).join("/");
      return (b ? "/" : "") + a || ".";
    }
    function pb(a, b) {
      var c = Array(Ea(a) + 1);
      a = Da(a, c, 0, c.length);
      b && (c.length = a);
      return c;
    }
    var qb = [];
    function rb(a, b) {
      qb[a] = { input: [], Wa: [], xb: b };
      sb(a, tb);
    }
    var tb = {
        open: function (a) {
          var b = qb[a.node.Cb];
          if (!b) throw new P(43);
          a.ab = b;
          a.seekable = !1;
        },
        close: function (a) {
          a.ab.xb.Ib(a.ab);
        },
        Ib: function (a) {
          a.ab.xb.Ib(a.ab);
        },
        read: function (a, b, c, d) {
          if (!a.ab || !a.ab.xb.oc) throw new P(60);
          for (var e = 0, f = 0; f < d; f++) {
            try {
              var h = a.ab.xb.oc(a.ab);
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
          if (!a.ab || !a.ab.xb.Yb) throw new P(60);
          try {
            for (var e = 0; e < d; e++) a.ab.xb.Yb(a.ab, b[c + e]);
          } catch (f) {
            throw new P(29);
          }
          d && (a.node.timestamp = Date.now());
          return e;
        },
      },
      ub = {
        oc: function (a) {
          if (!a.input.length) {
            var b = null;
            "undefined" != typeof window && "function" == typeof window.prompt
              ? ((b = window.prompt("Input: ")), null !== b && (b += "\n"))
              : "function" == typeof readline &&
                ((b = readline()), null !== b && (b += "\n"));
            if (!b) return null;
            a.input = pb(b, !0);
          }
          return a.input.shift();
        },
        Yb: function (a, b) {
          null === b || 10 === b
            ? (wa(Ca(a.Wa, 0)), (a.Wa = []))
            : 0 != b && a.Wa.push(b);
        },
        Ib: function (a) {
          a.Wa && 0 < a.Wa.length && (wa(Ca(a.Wa, 0)), (a.Wa = []));
        },
      },
      vb = {
        Yb: function (a, b) {
          null === b || 10 === b
            ? (E(Ca(a.Wa, 0)), (a.Wa = []))
            : 0 != b && a.Wa.push(b);
        },
        Ib: function (a) {
          a.Wa && 0 < a.Wa.length && (E(Ca(a.Wa, 0)), (a.Wa = []));
        },
      };
    function wb(a) {
      a = 65536 * Math.ceil(a / 65536);
      var b = xb(65536, a);
      b ? v().fill(0, b, b + a) : (b = 0);
      return b;
    }
    var Q = {
      gb: null,
      ib: function () {
        return Q.createNode(null, "/", 16895, 0);
      },
      createNode: function (a, b, c, d) {
        if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new P(63);
        Q.gb ||
          (Q.gb = {
            dir: {
              node: {
                fb: Q.Qa.fb,
                $a: Q.Qa.$a,
                yb: Q.Qa.yb,
                Mb: Q.Qa.Mb,
                wc: Q.Qa.wc,
                Sb: Q.Qa.Sb,
                xc: Q.Qa.xc,
                vc: Q.Qa.vc,
                Pb: Q.Qa.Pb,
              },
              stream: { pb: Q.Ra.pb },
            },
            file: {
              node: { fb: Q.Qa.fb, $a: Q.Qa.$a },
              stream: {
                pb: Q.Ra.pb,
                read: Q.Ra.read,
                write: Q.Ra.write,
                dc: Q.Ra.dc,
                zb: Q.Ra.zb,
                Nb: Q.Ra.Nb,
              },
            },
            link: {
              node: { fb: Q.Qa.fb, $a: Q.Qa.$a, Db: Q.Qa.Db },
              stream: {},
            },
            ic: { node: { fb: Q.Qa.fb, $a: Q.Qa.$a }, stream: yb },
          });
        c = zb(a, b, c, d);
        16384 === (c.mode & 61440)
          ? ((c.Qa = Q.gb.dir.node), (c.Ra = Q.gb.dir.stream), (c.Pa = {}))
          : 32768 === (c.mode & 61440)
          ? ((c.Qa = Q.gb.file.node),
            (c.Ra = Q.gb.file.stream),
            (c.Ua = 0),
            (c.Pa = null))
          : 40960 === (c.mode & 61440)
          ? ((c.Qa = Q.gb.link.node), (c.Ra = Q.gb.link.stream))
          : 8192 === (c.mode & 61440) &&
            ((c.Qa = Q.gb.ic.node), (c.Ra = Q.gb.ic.stream));
        c.timestamp = Date.now();
        a && ((a.Pa[b] = c), (a.timestamp = c.timestamp));
        return c;
      },
      Dd: function (a) {
        return a.Pa
          ? a.Pa.subarray
            ? a.Pa.subarray(0, a.Ua)
            : new Uint8Array(a.Pa)
          : new Uint8Array(0);
      },
      lc: function (a, b) {
        var c = a.Pa ? a.Pa.length : 0;
        c >= b ||
          ((b = Math.max(b, (c * (1048576 > c ? 2 : 1.125)) >>> 0)),
          0 != c && (b = Math.max(b, 256)),
          (c = a.Pa),
          (a.Pa = new Uint8Array(b)),
          0 < a.Ua && a.Pa.set(c.subarray(0, a.Ua), 0));
      },
      ld: function (a, b) {
        if (a.Ua != b)
          if (0 == b) (a.Pa = null), (a.Ua = 0);
          else {
            var c = a.Pa;
            a.Pa = new Uint8Array(b);
            c && a.Pa.set(c.subarray(0, Math.min(b, a.Ua)));
            a.Ua = b;
          }
      },
      Qa: {
        fb: function (a) {
          var b = {};
          b.Nc = 8192 === (a.mode & 61440) ? a.id : 1;
          b.Vb = a.id;
          b.mode = a.mode;
          b.fd = 1;
          b.uid = 0;
          b.Vc = 0;
          b.Cb = a.Cb;
          b.size =
            16384 === (a.mode & 61440)
              ? 4096
              : 32768 === (a.mode & 61440)
              ? a.Ua
              : 40960 === (a.mode & 61440)
              ? a.link.length
              : 0;
          b.Fc = new Date(a.timestamp);
          b.ed = new Date(a.timestamp);
          b.Kc = new Date(a.timestamp);
          b.Gc = 4096;
          b.Hc = Math.ceil(b.size / b.Gc);
          return b;
        },
        $a: function (a, b) {
          void 0 !== b.mode && (a.mode = b.mode);
          void 0 !== b.timestamp && (a.timestamp = b.timestamp);
          void 0 !== b.size && Q.ld(a, b.size);
        },
        yb: function () {
          throw Ab[44];
        },
        Mb: function (a, b, c, d) {
          return Q.createNode(a, b, c, d);
        },
        wc: function (a, b, c) {
          if (16384 === (a.mode & 61440)) {
            try {
              var d = Bb(b, c);
            } catch (f) {}
            if (d) for (var e in d.Pa) throw new P(55);
          }
          delete a.parent.Pa[a.name];
          a.parent.timestamp = Date.now();
          a.name = c;
          b.Pa[c] = a;
          b.timestamp = a.parent.timestamp;
          a.parent = b;
        },
        Sb: function (a, b) {
          delete a.Pa[b];
          a.timestamp = Date.now();
        },
        xc: function (a, b) {
          var c = Bb(a, b),
            d;
          for (d in c.Pa) throw new P(55);
          delete a.Pa[b];
          a.timestamp = Date.now();
        },
        vc: function (a) {
          var b = [".", ".."],
            c;
          for (c in a.Pa) a.Pa.hasOwnProperty(c) && b.push(c);
          return b;
        },
        Pb: function (a, b, c) {
          a = Q.createNode(a, b, 41471, 0);
          a.link = c;
          return a;
        },
        Db: function (a) {
          if (40960 !== (a.mode & 61440)) throw new P(28);
          return a.link;
        },
      },
      Ra: {
        read: function (a, b, c, d, e) {
          var f = a.node.Pa;
          if (e >= a.node.Ua) return 0;
          a = Math.min(a.node.Ua - e, d);
          if (8 < a && f.subarray) b.set(f.subarray(e, e + a), c);
          else for (d = 0; d < a; d++) b[c + d] = f[e + d];
          return a;
        },
        write: function (a, b, c, d, e, f) {
          b.buffer === g().buffer && (f = !1);
          if (!d) return 0;
          a = a.node;
          a.timestamp = Date.now();
          if (b.subarray && (!a.Pa || a.Pa.subarray)) {
            if (f) return (a.Pa = b.subarray(c, c + d)), (a.Ua = d);
            if (0 === a.Ua && 0 === e)
              return (a.Pa = b.slice(c, c + d)), (a.Ua = d);
            if (e + d <= a.Ua) return a.Pa.set(b.subarray(c, c + d), e), d;
          }
          Q.lc(a, e + d);
          if (a.Pa.subarray && b.subarray) a.Pa.set(b.subarray(c, c + d), e);
          else for (f = 0; f < d; f++) a.Pa[e + f] = b[c + f];
          a.Ua = Math.max(a.Ua, e + d);
          return d;
        },
        pb: function (a, b, c) {
          1 === c
            ? (b += a.position)
            : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.Ua);
          if (0 > b) throw new P(28);
          return b;
        },
        dc: function (a, b, c) {
          Q.lc(a.node, b + c);
          a.node.Ua = Math.max(a.node.Ua, b + c);
        },
        zb: function (a, b, c, d, e) {
          if (32768 !== (a.node.mode & 61440)) throw new P(43);
          a = a.node.Pa;
          if (e & 2 || a.buffer !== g().buffer) {
            if (0 < c || c + b < a.length)
              a = a.subarray
                ? a.subarray(c, c + b)
                : Array.prototype.slice.call(a, c, c + b);
            c = !0;
            b = wb(b);
            if (!b) throw new P(48);
            g().set(a, b);
          } else (c = !1), (b = a.byteOffset);
          return { Ta: b, fc: c };
        },
        Nb: function (a, b, c, d) {
          Q.Ra.write(a, b, 0, d, c, !1);
          return 0;
        },
      },
    };
    function Cb(a, b, c) {
      var d = "al " + a;
      ua(
        a,
        (e) => {
          e || ya('Loading data file "' + a + '" failed (no arrayBuffer).');
          b(new Uint8Array(e));
          d && Za(d);
        },
        () => {
          if (c) c();
          else throw 'Loading data file "' + a + '" failed.';
        },
      );
      d && Ya(d);
    }
    var Db = null,
      Eb = {},
      Fb = [],
      Gb = 1,
      Hb = null,
      Ra = !0,
      P = null,
      Ab = {},
      Jb = (a, b = {}) => {
        a = ob(a);
        if (!a) return { path: "", node: null };
        b = Object.assign({ nc: !0, $b: 0 }, b);
        if (8 < b.$b) throw new P(32);
        a = a.split("/").filter((h) => !!h);
        for (var c = Db, d = "/", e = 0; e < a.length; e++) {
          var f = e === a.length - 1;
          if (f && b.parent) break;
          c = Bb(c, a[e]);
          d = O(d + "/" + a[e]);
          c.Ab && (!f || (f && b.nc)) && (c = c.Ab.root);
          if (!f || b.Hb)
            for (f = 0; 40960 === (c.mode & 61440); )
              if (
                ((c = Ib(d)),
                (d = ob(lb(d), c)),
                (c = Jb(d, { $b: b.$b + 1 }).node),
                40 < f++)
              )
                throw new P(32);
        }
        return { path: d, node: c };
      },
      Kb = (a) => {
        for (var b; ; ) {
          if (a === a.parent)
            return (
              (a = a.ib.rc),
              b ? ("/" !== a[a.length - 1] ? a + "/" + b : a + b) : a
            );
          b = b ? a.name + "/" + b : a.name;
          a = a.parent;
        }
      },
      Lb = (a, b) => {
        for (var c = 0, d = 0; d < b.length; d++)
          c = ((c << 5) - c + b.charCodeAt(d)) | 0;
        return ((a + c) >>> 0) % Hb.length;
      },
      Bb = (a, b) => {
        var c;
        if ((c = (c = Mb(a, "x")) ? c : a.Qa.yb ? 0 : 2)) throw new P(c, a);
        for (c = Hb[Lb(a.id, b)]; c; c = c.wb) {
          var d = c.name;
          if (c.parent.id === a.id && d === b) return c;
        }
        return a.Qa.yb(a, b);
      },
      zb = (a, b, c, d) => {
        a = new Nb(a, b, c, d);
        b = Lb(a.parent.id, a.name);
        a.wb = Hb[b];
        return (Hb[b] = a);
      },
      Ob = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 },
      Pb = (a) => {
        var b = ["r", "w", "rw"][a & 3];
        a & 512 && (b += "w");
        return b;
      },
      Mb = (a, b) => {
        if (Ra) return 0;
        if (!b.includes("r") || a.mode & 292) {
          if (
            (b.includes("w") && !(a.mode & 146)) ||
            (b.includes("x") && !(a.mode & 73))
          )
            return 2;
        } else return 2;
        return 0;
      },
      Qb = (a, b) => {
        try {
          return Bb(a, b), 20;
        } catch (c) {}
        return Mb(a, "wx");
      },
      Rb = () => {
        for (var a = 0; 4096 >= a; a++) if (!Fb[a]) return a;
        throw new P(33);
      },
      Tb = (a) => {
        Sb ||
          ((Sb = function () {
            this.Ob = {};
          }),
          (Sb.prototype = {}),
          Object.defineProperties(Sb.prototype, {
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
                return this.Ob.flags;
              },
              set: function (c) {
                this.Ob.flags = c;
              },
            },
            position: {
              get: function () {
                return this.Ob.position;
              },
              set: function (c) {
                this.Ob.position = c;
              },
            },
          }));
        a = Object.assign(new Sb(), a);
        var b = Rb();
        a.ob = b;
        return (Fb[b] = a);
      },
      yb = {
        open: (a) => {
          a.Ra = Eb[a.node.Cb].Ra;
          a.Ra.open && a.Ra.open(a);
        },
        pb: () => {
          throw new P(70);
        },
      },
      sb = (a, b) => {
        Eb[a] = { Ra: b };
      },
      Ub = (a, b) => {
        var c = "/" === b,
          d = !b;
        if (c && Db) throw new P(10);
        if (!c && !d) {
          var e = Jb(b, { nc: !1 });
          b = e.path;
          e = e.node;
          if (e.Ab) throw new P(10);
          if (16384 !== (e.mode & 61440)) throw new P(54);
        }
        b = { type: a, Gd: {}, rc: b, dd: [] };
        a = a.ib(b);
        a.ib = b;
        b.root = a;
        c ? (Db = a) : e && ((e.Ab = b), e.ib && e.ib.dd.push(b));
      },
      S = (a, b, c) => {
        var d = Jb(a, { parent: !0 }).node;
        a = mb(a);
        if (!a || "." === a || ".." === a) throw new P(28);
        var e = Qb(d, a);
        if (e) throw new P(e);
        if (!d.Qa.Mb) throw new P(63);
        return d.Qa.Mb(d, a, b, c);
      },
      Vb = (a, b, c) => {
        "undefined" == typeof c && ((c = b), (b = 438));
        return S(a, b | 8192, c);
      },
      Pa = (a, b) => {
        if (!ob(a)) throw new P(44);
        var c = Jb(b, { parent: !0 }).node;
        if (!c) throw new P(44);
        b = mb(b);
        var d = Qb(c, b);
        if (d) throw new P(d);
        if (!c.Qa.Pb) throw new P(63);
        c.Qa.Pb(c, b, a);
      },
      Wb = (a) => {
        var b = Jb(a, { parent: !0 }).node;
        if (!b) throw new P(44);
        var c = mb(a);
        a = Bb(b, c);
        a: {
          try {
            var d = Bb(b, c);
          } catch (f) {
            d = f.Za;
            break a;
          }
          var e = Mb(b, "wx");
          d = e ? e : 16384 === (d.mode & 61440) ? 31 : 0;
        }
        if (d) throw new P(d);
        if (!b.Qa.Sb) throw new P(63);
        if (a.Ab) throw new P(10);
        b.Qa.Sb(b, c);
        b = Lb(a.parent.id, a.name);
        if (Hb[b] === a) Hb[b] = a.wb;
        else
          for (b = Hb[b]; b; ) {
            if (b.wb === a) {
              b.wb = a.wb;
              break;
            }
            b = b.wb;
          }
      },
      Ib = (a) => {
        a = Jb(a).node;
        if (!a) throw new P(44);
        if (!a.Qa.Db) throw new P(28);
        return ob(Kb(a.parent), a.Qa.Db(a));
      },
      Xb = (a, b) => {
        a = Jb(a, { Hb: !b }).node;
        if (!a) throw new P(44);
        if (!a.Qa.fb) throw new P(63);
        return a.Qa.fb(a);
      },
      Yb = (a) => Xb(a, !0),
      Zb = (a, b) => {
        a = "string" == typeof a ? Jb(a, { Hb: !0 }).node : a;
        if (!a.Qa.$a) throw new P(63);
        a.Qa.$a(a, {
          mode: (b & 4095) | (a.mode & -4096),
          timestamp: Date.now(),
        });
      },
      Qa = (a, b, c) => {
        if ("" === a) throw new P(44);
        if ("string" == typeof b) {
          var d = Ob[b];
          if ("undefined" == typeof d)
            throw Error("Unknown file open mode: " + b);
          b = d;
        }
        c = b & 64 ? (("undefined" == typeof c ? 438 : c) & 4095) | 32768 : 0;
        if ("object" == typeof a) var e = a;
        else {
          a = O(a);
          try {
            e = Jb(a, { Hb: !(b & 131072) }).node;
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
              : 16384 === (e.mode & 61440) && ("r" !== Pb(b) || b & 512)
              ? 31
              : Mb(e, Pb(b))
            : 44)
        )
          throw new P(c);
        if (b & 512 && !d) {
          c = e;
          c = "string" == typeof c ? Jb(c, { Hb: !0 }).node : c;
          if (!c.Qa.$a) throw new P(63);
          if (16384 === (c.mode & 61440)) throw new P(31);
          if (32768 !== (c.mode & 61440)) throw new P(28);
          if ((d = Mb(c, "w"))) throw new P(d);
          c.Qa.$a(c, { size: 0, timestamp: Date.now() });
        }
        b &= -131713;
        e = Tb({
          node: e,
          path: Kb(e),
          flags: b,
          seekable: !0,
          position: 0,
          Ra: e.Ra,
          Ad: [],
          error: !1,
        });
        e.Ra.open && e.Ra.open(e);
        !D.logReadFiles || b & 1 || ($b || ($b = {}), a in $b || ($b[a] = 1));
        return e;
      },
      ac = (a) => {
        if (null === a.ob) throw new P(8);
        a.Ub && (a.Ub = null);
        try {
          a.Ra.close && a.Ra.close(a);
        } catch (b) {
          throw b;
        } finally {
          Fb[a.ob] = null;
        }
        a.ob = null;
      },
      bc = (a, b, c) => {
        if (null === a.ob) throw new P(8);
        if (!a.seekable || !a.Ra.pb) throw new P(70);
        if (0 != c && 1 != c && 2 != c) throw new P(28);
        a.position = a.Ra.pb(a, b, c);
        a.Ad = [];
      },
      cc = (a, b, c, d, e, f) => {
        if (0 > d || 0 > e) throw new P(28);
        if (null === a.ob) throw new P(8);
        if (0 === (a.flags & 2097155)) throw new P(8);
        if (16384 === (a.node.mode & 61440)) throw new P(31);
        if (!a.Ra.write) throw new P(28);
        a.seekable && a.flags & 1024 && bc(a, 0, 2);
        var h = "undefined" != typeof e;
        if (!h) e = a.position;
        else if (!a.seekable) throw new P(70);
        b = a.Ra.write(a, b, c, d, e, f);
        h || (a.position += b);
        return b;
      },
      Na = () => {
        P ||
          ((P = function (a, b) {
            this.name = "ErrnoError";
            this.node = b;
            this.od = function (c) {
              this.Za = c;
            };
            this.od(a);
            this.message = "FS error";
          }),
          (P.prototype = Error()),
          (P.prototype.constructor = P),
          [44].forEach((a) => {
            Ab[a] = new P(a);
            Ab[a].stack = "<generic error, no stack>";
          }));
      },
      Ma,
      ec = (a, b) => {
        var c = 0;
        a && (c |= 365);
        b && (c |= 146);
        return c;
      },
      fc = (a, b) => {
        a = "string" == typeof a ? a : Kb(a);
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
      gc = (a, b, c, d) => {
        a = O(("string" == typeof a ? a : Kb(a)) + "/" + b);
        c = ec(c, d);
        return S(a, ((void 0 !== c ? c : 438) & 4095) | 32768, 0);
      },
      hc = (a, b, c, d, e, f) => {
        var h = b;
        a &&
          ((a = "string" == typeof a ? a : Kb(a)),
          (h = b ? O(a + "/" + b) : a));
        a = ec(d, e);
        h = S(h, ((void 0 !== a ? a : 438) & 4095) | 32768, 0);
        if (c) {
          if ("string" == typeof c) {
            b = Array(c.length);
            d = 0;
            for (e = c.length; d < e; ++d) b[d] = c.charCodeAt(d);
            c = b;
          }
          Zb(h, a | 146);
          b = Qa(h, 577);
          cc(b, c, 0, c.length, 0, f);
          ac(b);
          Zb(h, a);
        }
        return h;
      },
      Oa = (a, b, c, d) => {
        a = O(("string" == typeof a ? a : Kb(a)) + "/" + b);
        b = ec(!!c, !!d);
        Oa.qc || (Oa.qc = 64);
        var e = (Oa.qc++ << 8) | 0;
        sb(e, {
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
        return Vb(a, b, e);
      },
      ic = (a) => {
        if (!(a.$c || a.ad || a.link || a.Pa)) {
          if ("undefined" != typeof XMLHttpRequest)
            throw Error(
              "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
            );
          if (ta)
            try {
              (a.Pa = pb(ta(a.url), !0)), (a.Ua = a.Pa.length);
            } catch (b) {
              throw new P(29);
            }
          else throw Error("Cannot load without read() or XMLHttpRequest.");
        }
      },
      jc = (a, b, c, d, e) => {
        function f() {
          this.Xb = !1;
          this.Gb = [];
        }
        function h(p, r, k, t, x) {
          p = p.node.Pa;
          if (x >= p.length) return 0;
          t = Math.min(p.length - x, t);
          if (p.slice) for (var z = 0; z < t; z++) r[k + z] = p[x + z];
          else for (z = 0; z < t; z++) r[k + z] = p.get(x + z);
          return t;
        }
        f.prototype.get = function (p) {
          if (!(p > this.length - 1 || 0 > p)) {
            var r = p % this.jc;
            return this.Jb((p / this.jc) | 0)[r];
          }
        };
        f.prototype.nd = function (p) {
          this.Jb = p;
        };
        f.prototype.hc = function () {
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
          var z = this;
          z.nd((G) => {
            var H = G * x,
              y = (G + 1) * x - 1;
            y = Math.min(y, r - 1);
            if ("undefined" == typeof z.Gb[G]) {
              var R = z.Gb;
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
                  : pb(C.responseText || "", !0);
              R[G] = H;
            }
            if ("undefined" == typeof z.Gb[G]) throw Error("doXHR failed!");
            return z.Gb[G];
          });
          if (p || !r)
            (x = r = 1),
              (x = r = this.Jb(0).length),
              wa(
                "LazyFiles on gzip forces download of the whole file when length is accessed",
              );
          this.Cc = r;
          this.Bc = x;
          this.Xb = !0;
        };
        if ("undefined" != typeof XMLHttpRequest) {
          var l = new f();
          Object.defineProperties(l, {
            length: {
              get: function () {
                this.Xb || this.hc();
                return this.Cc;
              },
            },
            jc: {
              get: function () {
                this.Xb || this.hc();
                return this.Bc;
              },
            },
          });
          var m = void 0;
        } else (m = c), (l = void 0);
        var n = gc(a, b, d, e);
        l ? (n.Pa = l) : m && ((n.Pa = null), (n.url = m));
        Object.defineProperties(n, {
          Ua: {
            get: function () {
              return this.Pa.length;
            },
          },
        });
        var q = {};
        Object.keys(n.Ra).forEach((p) => {
          var r = n.Ra[p];
          q[p] = function () {
            ic(n);
            return r.apply(null, arguments);
          };
        });
        q.read = (p, r, k, t, x) => {
          ic(n);
          return h(p, r, k, t, x);
        };
        q.zb = (p, r, k) => {
          ic(n);
          var t = wb(r);
          if (!t) throw new P(48);
          h(p, g(), t, r, k);
          return { Ta: t, fc: !0 };
        };
        n.Ra = q;
        return n;
      },
      lc = (a, b, c, d, e, f, h, l, m, n) => {
        function q(k) {
          function t(x) {
            n && n();
            l || hc(a, b, x, d, e, m);
            f && f();
            Za(r);
          }
          kc.Ed(k, p, t, () => {
            h && h();
            Za(r);
          }) || t(k);
        }
        var p = b ? ob(O(a + "/" + b)) : a,
          r = "cp " + p;
        Ya(r);
        "string" == typeof c ? Cb(c, (k) => q(k), h) : q(c);
      },
      T = {},
      Sb,
      $b;
    function mc(a, b, c) {
      if ("/" === b.charAt(0)) return b;
      a = -100 === a ? "/" : nc(a).path;
      if (0 == b.length) {
        if (!c) throw new P(44);
        return a;
      }
      return O(a + "/" + b);
    }
    function oc(a, b, c) {
      try {
        var d = a(b);
      } catch (f) {
        if (f && f.node && O(b) !== O(Kb(f.node))) return -54;
        throw f;
      }
      A()[c >> 2] = d.Nc;
      A()[(c + 8) >> 2] = d.Vb;
      A()[(c + 12) >> 2] = d.mode;
      B()[(c + 16) >> 2] = d.fd;
      A()[(c + 20) >> 2] = d.uid;
      A()[(c + 24) >> 2] = d.Vc;
      A()[(c + 28) >> 2] = d.Cb;
      M = [
        d.size >>> 0,
        ((L = d.size),
        1 <= +Math.abs(L)
          ? 0 < L
            ? (Math.min(+Math.floor(L / 4294967296), 4294967295) | 0) >>> 0
            : ~~+Math.ceil((L - +(~~L >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      A()[(c + 40) >> 2] = M[0];
      A()[(c + 44) >> 2] = M[1];
      A()[(c + 48) >> 2] = 4096;
      A()[(c + 52) >> 2] = d.Hc;
      a = d.Fc.getTime();
      b = d.ed.getTime();
      var e = d.Kc.getTime();
      M = [
        Math.floor(a / 1e3) >>> 0,
        ((L = Math.floor(a / 1e3)),
        1 <= +Math.abs(L)
          ? 0 < L
            ? (Math.min(+Math.floor(L / 4294967296), 4294967295) | 0) >>> 0
            : ~~+Math.ceil((L - +(~~L >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      A()[(c + 56) >> 2] = M[0];
      A()[(c + 60) >> 2] = M[1];
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
      A()[(c + 72) >> 2] = M[0];
      A()[(c + 76) >> 2] = M[1];
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
      A()[(c + 88) >> 2] = M[0];
      A()[(c + 92) >> 2] = M[1];
      B()[(c + 96) >> 2] = (e % 1e3) * 1e3;
      M = [
        d.Vb >>> 0,
        ((L = d.Vb),
        1 <= +Math.abs(L)
          ? 0 < L
            ? (Math.min(+Math.floor(L / 4294967296), 4294967295) | 0) >>> 0
            : ~~+Math.ceil((L - +(~~L >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      A()[(c + 104) >> 2] = M[0];
      A()[(c + 108) >> 2] = M[1];
      return 0;
    }
    var pc = void 0;
    function nc(a) {
      a = Fb[a];
      if (!a) throw new P(8);
      return a;
    }
    function qc(a) {
      if (F) return U(1, 1, a);
      if (!noExitRuntime) {
        N.ud();
        if (D.onExit) D.onExit(a);
        Aa = !0;
      }
      qa(a, new gb(a));
    }
    function rc(a) {
      if (F) throw (sc(a), "unwind");
      qc(a);
    }
    function tc(a) {
      a instanceof gb || "unwind" == a || qa(1, a);
    }
    var N = {
      mb: [],
      qb: [],
      Ac: [],
      kb: {},
      Xc: function () {
        F ? N.Zc() : N.Yc();
      },
      Yc: function () {
        for (var a = navigator.hardwareConcurrency; a--; ) N.ec();
      },
      Zc: function () {
        N.receiveObjectTransfer = N.kd;
        N.threadInitTLS = N.zc;
        N.setExitStatus = N.yc;
        noExitRuntime = !1;
      },
      yc: function () {},
      Id: ["$terminateWorker"],
      ud: function () {
        for (var a of N.qb) hb(a);
        for (a of N.mb) hb(a);
        N.mb = [];
        N.qb = [];
        N.kb = [];
      },
      md: function (a) {
        var b = a.jb;
        delete N.kb[b];
        N.mb.push(a);
        N.qb.splice(N.qb.indexOf(a), 1);
        a.jb = 0;
        uc(b);
      },
      kd: function () {},
      zc: function () {
        N.Ac.forEach((a) => a());
      },
      pc: (a) =>
        new Promise((b) => {
          a.onmessage = (f) => {
            f = f.data;
            var h = f.cmd;
            a.jb && (N.Lc = a.jb);
            if (f.targetThread && f.targetThread != vc()) {
              var l = N.kb[f.Hd];
              l
                ? l.postMessage(f, f.transferList)
                : E(
                    'Internal error! Worker sent a message "' +
                      h +
                      '" to target pthread ' +
                      f.targetThread +
                      ", but that thread no longer exists!",
                  );
            } else if ("processProxyingQueue" === h) wc(f.queue);
            else if ("spawnThread" === h) jb(f);
            else if ("cleanupThread" === h) ib(f.thread);
            else if ("killThread" === h)
              (f = f.thread),
                (h = N.kb[f]),
                delete N.kb[f],
                hb(h),
                uc(f),
                N.qb.splice(N.qb.indexOf(h), 1),
                (h.jb = 0);
            else if ("cancelThread" === h)
              N.kb[f.thread].postMessage({ cmd: "cancel" });
            else if ("loaded" === h) (a.loaded = !0), b(a);
            else if ("print" === h) wa("Thread " + f.threadId + ": " + f.text);
            else if ("printErr" === h)
              E("Thread " + f.threadId + ": " + f.text);
            else if ("alert" === h)
              alert("Thread " + f.threadId + ": " + f.text);
            else if ("setimmediate" === f.target) a.postMessage(f);
            else if ("callHandler" === h) D[f.handler](...f.args);
            else h && E("worker sent an unknown command " + h);
            N.Lc = void 0;
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
      cd: function (a) {
        if (F) return a();
        Promise.all(N.mb.map(N.pc)).then(a);
      },
      ec: function () {
        var a = sa("capture-wasm.worker.js");
        a = new Worker(a);
        N.mb.push(a);
      },
      Rc: function () {
        0 == N.mb.length && (N.ec(), N.pc(N.mb[0]));
        return N.mb.pop();
      },
    };
    D.PThread = N;
    function Sa(a) {
      for (; 0 < a.length; ) a.shift()(D);
    }
    D.establishStackSpace = function () {
      var a = vc(),
        b = A()[(a + 52) >> 2];
      a = A()[(a + 56) >> 2];
      xc(b, b - a);
      yc(b);
    };
    function sc(a) {
      if (F) return U(2, 0, a);
      try {
        rc(a);
      } catch (b) {
        tc(b);
      }
    }
    var zc = [];
    function Ac(a) {
      var b = zc[a];
      b || (a >= zc.length && (zc.length = a + 1), (zc[a] = b = Ha.get(a)));
      return b;
    }
    D.invokeEntryPoint = function (a, b) {
      a = Ac(a)(b);
      noExitRuntime ? N.yc(a) : Bc(a);
    };
    function Cc(a, b, c, d) {
      return F ? U(3, 1, a, b, c, d) : Dc(a, b, c, d);
    }
    function Dc(a, b, c, d) {
      if ("undefined" == typeof SharedArrayBuffer)
        return (
          E(
            "Current environment does not support SharedArrayBuffer, pthreads are not available!",
          ),
          6
        );
      var e = [];
      if (F && 0 === e.length) return Cc(a, b, c, d);
      a = { td: c, jb: a, Ec: d, zd: e };
      return F ? ((a.Bd = "spawnThread"), postMessage(a, e), 0) : jb(a);
    }
    function Ec(a, b) {
      if (F) return U(4, 1, a, b);
      try {
        var c = nc(a);
        return oc(Xb, c.path, b);
      } catch (d) {
        if ("undefined" == typeof T || "ErrnoError" !== d.name) throw d;
        return -d.Za;
      }
    }
    function Fc(a, b, c, d) {
      if (F) return U(6, 1, a, b, c, d);
      try {
        b = J(b);
        var e = d & 256;
        b = mc(a, b, d & 4096);
        return oc(e ? Yb : Xb, b, c);
      } catch (f) {
        if ("undefined" == typeof T || "ErrnoError" !== f.name) throw f;
        return -f.Za;
      }
    }
    function Gc(a, b, c, d) {
      if (F) return U(7, 1, a, b, c, d);
      pc = d;
      try {
        b = J(b);
        b = mc(a, b);
        if (d) {
          pc += 4;
          var e = A()[(pc - 4) >> 2];
        } else e = 0;
        return Qa(b, c, e).ob;
      } catch (f) {
        if ("undefined" == typeof T || "ErrnoError" !== f.name) throw f;
        return -f.Za;
      }
    }
    function Hc(a, b) {
      if (F) return U(8, 1, a, b);
      try {
        return (a = J(a)), oc(Xb, a, b);
      } catch (c) {
        if ("undefined" == typeof T || "ErrnoError" !== c.name) throw c;
        return -c.Za;
      }
    }
    var Ic = {};
    function Jc(a) {
      for (; a.length; ) {
        var b = a.pop();
        a.pop()(b);
      }
    }
    function Kc(a) {
      return this.fromWireType(A()[a >> 2]);
    }
    var Lc = {},
      Mc = {},
      Nc = {};
    function Oc(a) {
      if (void 0 === a) return "_unknown";
      a = a.replace(/[^a-zA-Z0-9_]/g, "$");
      var b = a.charCodeAt(0);
      return 48 <= b && 57 >= b ? "_" + a : a;
    }
    function Pc(a, b) {
      a = Oc(a);
      return {
        [a]: function () {
          return b.apply(this, arguments);
        },
      }[a];
    }
    function Qc(a) {
      var b = Error,
        c = Pc(a, function (d) {
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
    var Rc = void 0;
    function Sc(a) {
      throw new Rc(a);
    }
    function Tc(a, b, c) {
      function d(l) {
        l = c(l);
        l.length !== a.length && Sc("Mismatched type converter count");
        for (var m = 0; m < a.length; ++m) Uc(a[m], l[m]);
      }
      a.forEach(function (l) {
        Nc[l] = b;
      });
      var e = Array(b.length),
        f = [],
        h = 0;
      b.forEach((l, m) => {
        Mc.hasOwnProperty(l)
          ? (e[m] = Mc[l])
          : (f.push(l),
            Lc.hasOwnProperty(l) || (Lc[l] = []),
            Lc[l].push(() => {
              e[m] = Mc[l];
              ++h;
              h === f.length && d(e);
            }));
      });
      0 === f.length && d(e);
    }
    function Vc(a) {
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
    var Wc = void 0;
    function V(a) {
      for (var b = ""; v()[a]; ) b += Wc[v()[a++]];
      return b;
    }
    var Xc = void 0;
    function W(a) {
      throw new Xc(a);
    }
    function Uc(a, b, c = {}) {
      if (!("argPackAdvance" in b))
        throw new TypeError(
          "registerType registeredInstance requires argPackAdvance",
        );
      var d = b.name;
      a || W('type "' + d + '" must have a positive integer typeid pointer');
      if (Mc.hasOwnProperty(a)) {
        if (c.Wc) return;
        W("Cannot register type '" + d + "' twice");
      }
      Mc[a] = b;
      delete Nc[a];
      Lc.hasOwnProperty(a) &&
        ((b = Lc[a]), delete Lc[a], b.forEach((e) => e()));
    }
    function Yc(a) {
      W(a.Oa.Va.Sa.name + " instance already deleted");
    }
    var Zc = !1;
    function $c() {}
    function ad(a) {
      --a.count.value;
      0 === a.count.value && (a.Ya ? a.bb.lb(a.Ya) : a.Va.Sa.lb(a.Ta));
    }
    function bd(a, b, c) {
      if (b === c) return a;
      if (void 0 === c.cb) return null;
      a = bd(a, b, c.cb);
      return null === a ? null : c.Oc(a);
    }
    var cd = {},
      dd = [];
    function ed() {
      for (; dd.length; ) {
        var a = dd.pop();
        a.Oa.ub = !1;
        a["delete"]();
      }
    }
    var fd = void 0,
      gd = {};
    function hd(a, b) {
      for (void 0 === b && W("ptr should not be undefined"); a.cb; )
        (b = a.Eb(b)), (a = a.cb);
      return gd[b];
    }
    function jd(a, b) {
      (b.Va && b.Ta) || Sc("makeClassHandle requires ptr and ptrType");
      !!b.bb !== !!b.Ya &&
        Sc("Both smartPtrType and smartPtr must be specified");
      b.count = { value: 1 };
      return kd(Object.create(a, { Oa: { value: b } }));
    }
    function kd(a) {
      if ("undefined" === typeof FinalizationRegistry)
        return (kd = (b) => b), a;
      Zc = new FinalizationRegistry((b) => {
        ad(b.Oa);
      });
      kd = (b) => {
        var c = b.Oa;
        c.Ya && Zc.register(b, { Oa: c }, b);
        return b;
      };
      $c = (b) => {
        Zc.unregister(b);
      };
      return kd(a);
    }
    function ld() {}
    function md(a, b, c) {
      if (void 0 === a[b].Xa) {
        var d = a[b];
        a[b] = function () {
          a[b].Xa.hasOwnProperty(arguments.length) ||
            W(
              "Function '" +
                c +
                "' called with an invalid number of arguments (" +
                arguments.length +
                ") - expects one of (" +
                a[b].Xa +
                ")!",
            );
          return a[b].Xa[arguments.length].apply(this, arguments);
        };
        a[b].Xa = [];
        a[b].Xa[d.Fb] = d;
      }
    }
    function nd(a, b, c) {
      D.hasOwnProperty(a)
        ? ((void 0 === c || (void 0 !== D[a].Xa && void 0 !== D[a].Xa[c])) &&
            W("Cannot register public name '" + a + "' twice"),
          md(D, a, a),
          D.hasOwnProperty(c) &&
            W(
              "Cannot register multiple overloads of a function with the same number of arguments (" +
                c +
                ")!",
            ),
          (D[a].Xa[c] = b))
        : ((D[a] = b), void 0 !== c && (D[a].Fd = c));
    }
    function od(a, b, c, d, e, f, h, l) {
      this.name = a;
      this.constructor = b;
      this.vb = c;
      this.lb = d;
      this.cb = e;
      this.Qc = f;
      this.Eb = h;
      this.Oc = l;
      this.hd = [];
    }
    function pd(a, b, c) {
      for (; b !== c; )
        b.Eb ||
          W(
            "Expected null or instance of " +
              c.name +
              ", got an instance of " +
              b.name,
          ),
          (a = b.Eb(a)),
          (b = b.cb);
      return a;
    }
    function qd(a, b) {
      if (null === b)
        return this.Wb && W("null is not a valid " + this.name), 0;
      b.Oa || W('Cannot pass "' + rd(b) + '" as a ' + this.name);
      b.Oa.Ta ||
        W("Cannot pass deleted object as a pointer of type " + this.name);
      return pd(b.Oa.Ta, b.Oa.Va.Sa, this.Sa);
    }
    function sd(a, b) {
      if (null === b) {
        this.Wb && W("null is not a valid " + this.name);
        if (this.Lb) {
          var c = this.Zb();
          null !== a && a.push(this.lb, c);
          return c;
        }
        return 0;
      }
      b.Oa || W('Cannot pass "' + rd(b) + '" as a ' + this.name);
      b.Oa.Ta ||
        W("Cannot pass deleted object as a pointer of type " + this.name);
      !this.Kb &&
        b.Oa.Va.Kb &&
        W(
          "Cannot convert argument of type " +
            (b.Oa.bb ? b.Oa.bb.name : b.Oa.Va.name) +
            " to parameter type " +
            this.name,
        );
      c = pd(b.Oa.Ta, b.Oa.Va.Sa, this.Sa);
      if (this.Lb)
        switch (
          (void 0 === b.Oa.Ya &&
            W("Passing raw pointer to smart pointer is illegal"),
          this.sd)
        ) {
          case 0:
            b.Oa.bb === this
              ? (c = b.Oa.Ya)
              : W(
                  "Cannot convert argument of type " +
                    (b.Oa.bb ? b.Oa.bb.name : b.Oa.Va.name) +
                    " to parameter type " +
                    this.name,
                );
            break;
          case 1:
            c = b.Oa.Ya;
            break;
          case 2:
            if (b.Oa.bb === this) c = b.Oa.Ya;
            else {
              var d = b.clone();
              c = this.jd(
                c,
                td(function () {
                  d["delete"]();
                }),
              );
              null !== a && a.push(this.lb, c);
            }
            break;
          default:
            W("Unsupporting sharing policy");
        }
      return c;
    }
    function ud(a, b) {
      if (null === b)
        return this.Wb && W("null is not a valid " + this.name), 0;
      b.Oa || W('Cannot pass "' + rd(b) + '" as a ' + this.name);
      b.Oa.Ta ||
        W("Cannot pass deleted object as a pointer of type " + this.name);
      b.Oa.Va.Kb &&
        W(
          "Cannot convert argument of type " +
            b.Oa.Va.name +
            " to parameter type " +
            this.name,
        );
      return pd(b.Oa.Ta, b.Oa.Va.Sa, this.Sa);
    }
    function vd(a, b, c, d) {
      this.name = a;
      this.Sa = b;
      this.Wb = c;
      this.Kb = d;
      this.Lb = !1;
      this.lb = this.jd = this.Zb = this.uc = this.sd = this.gd = void 0;
      void 0 !== b.cb
        ? (this.toWireType = sd)
        : ((this.toWireType = d ? qd : ud), (this.eb = null));
    }
    function wd(a, b, c) {
      D.hasOwnProperty(a) || Sc("Replacing nonexistant public symbol");
      void 0 !== D[a].Xa && void 0 !== c
        ? (D[a].Xa[c] = b)
        : ((D[a] = b), (D[a].Fb = c));
    }
    function xd(a, b) {
      var c = [];
      return function () {
        c.length = 0;
        Object.assign(c, arguments);
        if (a.includes("j")) {
          var d = D["dynCall_" + a];
          d = c && c.length ? d.apply(null, [b].concat(c)) : d.call(null, b);
        } else d = Ac(b).apply(null, c);
        return d;
      };
    }
    function X(a, b) {
      a = V(a);
      var c = a.includes("j") ? xd(a, b) : Ac(b);
      "function" != typeof c &&
        W("unknown function pointer with signature " + a + ": " + b);
      return c;
    }
    var yd = void 0;
    function zd(a) {
      a = Ad(a);
      var b = V(a);
      Bd(a);
      return b;
    }
    function Cd(a, b) {
      function c(f) {
        e[f] || Mc[f] || (Nc[f] ? Nc[f].forEach(c) : (d.push(f), (e[f] = !0)));
      }
      var d = [],
        e = {};
      b.forEach(c);
      throw new yd(a + ": " + d.map(zd).join([", "]));
    }
    function Dd(a, b) {
      for (var c = [], d = 0; d < a; d++) c.push(B()[(b + 4 * d) >> 2]);
      return c;
    }
    function Ed(a, b, c, d, e) {
      var f = b.length;
      2 > f &&
        W(
          "argTypes array size mismatch! Must at least get return value and 'this' types!",
        );
      var h = null !== b[1] && null !== c,
        l = !1;
      for (c = 1; c < b.length; ++c)
        if (null !== b[c] && void 0 === b[c].eb) {
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
        if (l) Jc(r);
        else
          for (var x = h ? 1 : 2; x < b.length; x++) {
            var z = 1 === x ? k : q[x - 2];
            null !== b[x].eb && b[x].eb(z);
          }
        k = m ? b[0].fromWireType(t) : void 0;
        return k;
      };
    }
    var Fd = [],
      Y = [
        {},
        { value: void 0 },
        { value: null },
        { value: !0 },
        { value: !1 },
      ];
    function Gd(a) {
      4 < a && 0 === --Y[a].ac && ((Y[a] = void 0), Fd.push(a));
    }
    var Hd = (a) => {
        a || W("Cannot use deleted val. handle = " + a);
        return Y[a].value;
      },
      td = (a) => {
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
            var b = Fd.length ? Fd.pop() : Y.length;
            Y[b] = { ac: 1, value: a };
            return b;
        }
      };
    function rd(a) {
      if (null === a) return "null";
      var b = typeof a;
      return "object" === b || "array" === b || "function" === b
        ? a.toString()
        : "" + a;
    }
    function Id(a, b) {
      switch (b) {
        case 2:
          return function (c) {
            var d = this.fromWireType;
            u.buffer != ba.buffer && ca();
            return d.call(this, Fa[c >> 2]);
          };
        case 3:
          return function (c) {
            return this.fromWireType(ka()[c >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + a);
      }
    }
    function Jd(a, b, c) {
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
                return A()[d >> 2];
              }
            : function (d) {
                return B()[d >> 2];
              };
        default:
          throw new TypeError("Unknown integer type: " + a);
      }
    }
    var Kd =
      "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
    function Ld(a, b) {
      var c = a >> 1;
      for (var d = c + b / 2; !(c >= d) && w()[c]; ) ++c;
      c <<= 1;
      if (32 < c - a && Kd) return Kd.decode(v().slice(a, c));
      c = "";
      for (d = 0; !(d >= b / 2); ++d) {
        var e = ea()[(a + 2 * d) >> 1];
        if (0 == e) break;
        c += String.fromCharCode(e);
      }
      return c;
    }
    function Md(a, b, c) {
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
    function Nd(a) {
      return 2 * a.length;
    }
    function Od(a, b) {
      for (var c = 0, d = ""; !(c >= b / 4); ) {
        var e = A()[(a + 4 * c) >> 2];
        if (0 == e) break;
        ++c;
        65536 <= e
          ? ((e -= 65536),
            (d += String.fromCharCode(55296 | (e >> 10), 56320 | (e & 1023))))
          : (d += String.fromCharCode(e));
      }
      return d;
    }
    function Pd(a, b, c) {
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
        A()[b >> 2] = f;
        b += 4;
        if (b + 4 > c) break;
      }
      A()[b >> 2] = 0;
      return b - d;
    }
    function Qd(a) {
      for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        55296 <= d && 57343 >= d && ++c;
        b += 4;
      }
      return b;
    }
    function wc(a) {
      Atomics.store(A(), a >> 2, 1);
      vc() && Rd(a);
      Atomics.compareExchange(A(), a >> 2, 1, 0);
    }
    D.executeNotifiedProxyingQueue = wc;
    function Sd(a, b) {
      var c = Mc[a];
      void 0 === c && W(b + " has unknown type " + zd(a));
      return c;
    }
    var Td = {};
    function Ud(a) {
      var b = Td[a];
      return void 0 === b ? V(a) : b;
    }
    var Vd = [];
    function Wd() {
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
    function Xd(a) {
      var b = Vd.length;
      Vd.push(a);
      return b;
    }
    function Yd(a, b) {
      for (var c = Array(a), d = 0; d < a; ++d)
        c[d] = Sd(B()[(b + 4 * d) >> 2], "parameter " + d);
      return c;
    }
    var Zd = [];
    function $d(a) {
      var b = Array(a + 1);
      return function (c, d, e) {
        b[0] = c;
        for (var f = 0; f < a; ++f) {
          var h = Sd(B()[(d + 4 * f) >> 2], "parameter " + f);
          b[f + 1] = h.readValueFromPointer(e);
          e += h.argPackAdvance;
        }
        c = new (c.bind.apply(c, b))();
        return td(c);
      };
    }
    var ae = {};
    function be(a) {
      return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
    }
    var ce = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
      de = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    function ee(a) {
      return (be(a.getFullYear()) ? ce : de)[a.getMonth()] + a.getDate() - 1;
    }
    function fe(a, b, c, d, e, f, h) {
      if (F) return U(9, 1, a, b, c, d, e, f, h);
      try {
        var l = nc(d);
        if (0 !== (b & 2) && 0 === (c & 2) && 2 !== (l.flags & 2097155))
          throw new P(2);
        if (1 === (l.flags & 2097155)) throw new P(2);
        if (!l.Ra.zb) throw new P(43);
        var m = l.Ra.zb(l, a, e, b, c);
        var n = m.Ta;
        A()[f >> 2] = m.fc;
        B()[h >> 2] = n;
        return 0;
      } catch (q) {
        if ("undefined" == typeof T || "ErrnoError" !== q.name) throw q;
        return -q.Za;
      }
    }
    function ge(a, b, c, d, e, f) {
      if (F) return U(10, 1, a, b, c, d, e, f);
      try {
        var h = nc(e);
        if (c & 2) {
          if (32768 !== (h.node.mode & 61440)) throw new P(43);
          if (!(d & 2)) {
            var l = v().slice(a, a + b);
            h.Ra.Nb && h.Ra.Nb(h, l, f, b, d);
          }
        }
      } catch (m) {
        if ("undefined" == typeof T || "ErrnoError" !== m.name) throw m;
        return -m.Za;
      }
    }
    function he(a) {
      var b = Ea(a) + 1,
        c = ie(b);
      c && Da(a, g(), c, b);
      return c;
    }
    var je = [];
    function ke(a) {
      var b = le();
      a = a();
      yc(b);
      return a;
    }
    function U(a, b) {
      var c = arguments.length - 2,
        d = arguments;
      return ke(() => {
        for (var e = me(8 * c), f = e >> 3, h = 0; h < c; h++) {
          var l = d[2 + h];
          ka()[f + h] = l;
        }
        return ne(a, c, e, b);
      });
    }
    var oe = [],
      pe = {};
    function Z(a, b) {
      B()[a >> 2] = b;
      B()[(a + 4) >> 2] = (b / 4294967296) | 0;
    }
    function qe(a, b) {
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
    var re;
    function se(a, b, c, d, e) {
      function f() {
        var C = 0,
          aa = 0;
        y.response &&
          G &&
          0 === B()[(a + 12) >> 2] &&
          (aa = y.response.byteLength);
        0 < aa && ((C = ie(aa)), v().set(new Uint8Array(y.response), C));
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
          z = B()[(m + 84) >> 2];
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
        y.Kd = l;
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
        pe[R] = y;
        h = z && m ? v().slice(z, z + m) : null;
        y.onload = (C) => {
          R in pe &&
            (f(),
            200 <= y.status && 300 > y.status
              ? b && b(a, y, C)
              : c && c(a, y, C));
        };
        y.onerror = (C) => {
          R in pe && (f(), c && c(a, y, C));
        };
        y.ontimeout = (C) => {
          R in pe && c && c(a, y, C);
        };
        y.onprogress = (C) => {
          if (R in pe) {
            var aa = G && H && y.response ? y.response.byteLength : 0,
              I = 0;
            0 < aa &&
              G &&
              H &&
              ((I = ie(aa)), v().set(new Uint8Array(y.response), I));
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
            I && Bd(I);
          }
        };
        y.onreadystatechange = (C) => {
          R in pe &&
            ((w()[(a + 40) >> 1] = y.readyState),
            2 <= y.readyState && (w()[(a + 42) >> 1] = y.status),
            e && e(a, y, C));
        };
        try {
          y.send(h);
        } catch (C) {
          c && c(a, y, C);
        }
      } else c(a, 0, "no url specified!");
    }
    function te(a, b, c, d) {
      var e = re;
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
    function ue(a, b, c) {
      var d = re;
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
                m = ie(l);
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
    function ve(a, b, c) {
      var d = re;
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
    var we = {};
    function xe() {
      if (!ye) {
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
        for (b in we) void 0 === we[b] ? delete a[b] : (a[b] = we[b]);
        var c = [];
        for (b in a) c.push(b + "=" + a[b]);
        ye = c;
      }
      return ye;
    }
    var ye;
    function ze(a, b) {
      if (F) return U(11, 1, a, b);
      var c = 0;
      xe().forEach(function (d, e) {
        var f = b + c;
        e = B()[(a + 4 * e) >> 2] = f;
        for (f = 0; f < d.length; ++f) g()[e++ >> 0] = d.charCodeAt(f);
        g()[e >> 0] = 0;
        c += d.length + 1;
      });
      return 0;
    }
    function Ae(a, b) {
      if (F) return U(12, 1, a, b);
      var c = xe();
      B()[a >> 2] = c.length;
      var d = 0;
      c.forEach(function (e) {
        d += e.length + 1;
      });
      B()[b >> 2] = d;
      return 0;
    }
    function Be(a) {
      if (F) return U(13, 1, a);
      try {
        var b = nc(a);
        ac(b);
        return 0;
      } catch (c) {
        if ("undefined" == typeof T || "ErrnoError" !== c.name) throw c;
        return c.Za;
      }
    }
    function Ce(a, b, c, d) {
      if (F) return U(14, 1, a, b, c, d);
      try {
        a: {
          var e = nc(a);
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
            if (null === n.ob) throw new P(8);
            if (1 === (n.flags & 2097155)) throw new P(8);
            if (16384 === (n.node.mode & 61440)) throw new P(31);
            if (!n.Ra.read) throw new P(28);
            var t = "undefined" != typeof k;
            if (!t) k = n.position;
            else if (!n.seekable) throw new P(70);
            var x = n.Ra.read(n, q, p, r, k);
            t || (n.position += x);
            var z = x;
            if (0 > z) {
              var G = -1;
              break a;
            }
            b += z;
            if (z < m) break;
            "undefined" !== typeof f && (f += z);
          }
          G = b;
        }
        B()[d >> 2] = G;
        return 0;
      } catch (H) {
        if ("undefined" == typeof T || "ErrnoError" !== H.name) throw H;
        return H.Za;
      }
    }
    function De(a, b, c, d, e) {
      if (F) return U(15, 1, a, b, c, d, e);
      try {
        b =
          (c + 2097152) >>> 0 < 4194305 - !!b
            ? (b >>> 0) + 4294967296 * c
            : NaN;
        if (isNaN(b)) return 61;
        var f = nc(a);
        bc(f, b, d);
        M = [
          f.position >>> 0,
          ((L = f.position),
          1 <= +Math.abs(L)
            ? 0 < L
              ? (Math.min(+Math.floor(L / 4294967296), 4294967295) | 0) >>> 0
              : ~~+Math.ceil((L - +(~~L >>> 0)) / 4294967296) >>> 0
            : 0),
        ];
        A()[e >> 2] = M[0];
        A()[(e + 4) >> 2] = M[1];
        f.Ub && 0 === b && 0 === d && (f.Ub = null);
        return 0;
      } catch (h) {
        if ("undefined" == typeof T || "ErrnoError" !== h.name) throw h;
        return h.Za;
      }
    }
    function Ee(a, b, c, d) {
      if (F) return U(16, 1, a, b, c, d);
      try {
        a: {
          var e = nc(a);
          a = b;
          for (var f, h = (b = 0); h < c; h++) {
            var l = B()[a >> 2],
              m = B()[(a + 4) >> 2];
            a += 8;
            var n = cc(e, g(), l, m, f);
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
        return p.Za;
      }
    }
    function Fe(a, b) {
      Fe.tc || (Fe.tc = nb());
      for (var c = 0; c < b; c++) g()[(a + c) >> 0] = Fe.tc();
      return 0;
    }
    var Ge = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      He = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function Ie(a, b) {
      g().set(a, b);
    }
    function Je(a, b, c, d) {
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
        var z;
        0 === (z = x(k.getFullYear() - t.getFullYear())) &&
          0 === (z = x(k.getMonth() - t.getMonth())) &&
          (z = x(k.getDate() - t.getDate()));
        return z;
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
        var t = k.rb;
        for (k = new Date(new Date(k.sb + 1900, 0, 1).getTime()); 0 < t; ) {
          var x = k.getMonth(),
            z = (be(k.getFullYear()) ? Ge : He)[x];
          if (t > z - k.getDate())
            (t -= z - k.getDate() + 1),
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
      var n = A()[(d + 40) >> 2];
      d = {
        xd: A()[d >> 2],
        wd: A()[(d + 4) >> 2],
        Qb: A()[(d + 8) >> 2],
        cc: A()[(d + 12) >> 2],
        Rb: A()[(d + 16) >> 2],
        sb: A()[(d + 20) >> 2],
        hb: A()[(d + 24) >> 2],
        rb: A()[(d + 28) >> 2],
        Jd: A()[(d + 32) >> 2],
        vd: A()[(d + 36) >> 2],
        yd: n ? J(n) : "",
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
          return p[k.hb].substring(0, 3);
        },
        "%A": function (k) {
          return p[k.hb];
        },
        "%b": function (k) {
          return r[k.Rb].substring(0, 3);
        },
        "%B": function (k) {
          return r[k.Rb];
        },
        "%C": function (k) {
          return f(((k.sb + 1900) / 100) | 0, 2);
        },
        "%d": function (k) {
          return f(k.cc, 2);
        },
        "%e": function (k) {
          return e(k.cc, 2, " ");
        },
        "%g": function (k) {
          return m(k).toString().substring(2);
        },
        "%G": function (k) {
          return m(k);
        },
        "%H": function (k) {
          return f(k.Qb, 2);
        },
        "%I": function (k) {
          k = k.Qb;
          0 == k ? (k = 12) : 12 < k && (k -= 12);
          return f(k, 2);
        },
        "%j": function (k) {
          for (
            var t = 0, x = 0;
            x <= k.Rb - 1;
            t += (be(k.sb + 1900) ? Ge : He)[x++]
          );
          return f(k.cc + t, 3);
        },
        "%m": function (k) {
          return f(k.Rb + 1, 2);
        },
        "%M": function (k) {
          return f(k.wd, 2);
        },
        "%n": function () {
          return "\n";
        },
        "%p": function (k) {
          return 0 <= k.Qb && 12 > k.Qb ? "AM" : "PM";
        },
        "%S": function (k) {
          return f(k.xd, 2);
        },
        "%t": function () {
          return "\t";
        },
        "%u": function (k) {
          return k.hb || 7;
        },
        "%U": function (k) {
          return f(Math.floor((k.rb + 7 - k.hb) / 7), 2);
        },
        "%V": function (k) {
          var t = Math.floor((k.rb + 7 - ((k.hb + 6) % 7)) / 7);
          2 >= (k.hb + 371 - k.rb - 2) % 7 && t++;
          if (t)
            53 == t &&
              ((x = (k.hb + 371 - k.rb) % 7),
              4 == x || (3 == x && be(k.sb)) || (t = 1));
          else {
            t = 52;
            var x = (k.hb + 7 - k.rb - 1) % 7;
            (4 == x || (5 == x && be((k.sb % 400) - 1))) && t++;
          }
          return f(t, 2);
        },
        "%w": function (k) {
          return k.hb;
        },
        "%W": function (k) {
          return f(Math.floor((k.rb + 7 - ((k.hb + 6) % 7)) / 7), 2);
        },
        "%y": function (k) {
          return (k.sb + 1900).toString().substring(2);
        },
        "%Y": function (k) {
          return k.sb + 1900;
        },
        "%z": function (k) {
          k = k.vd;
          var t = 0 <= k;
          k = Math.abs(k) / 60;
          return (
            (t ? "+" : "-") +
            String("0000" + ((k / 60) * 100 + (k % 60))).slice(-4)
          );
        },
        "%Z": function (k) {
          return k.yd;
        },
        "%%": function () {
          return "%";
        },
      };
      c = c.replace(/%%/g, "\x00\x00");
      for (q in n)
        c.includes(q) && (c = c.replace(new RegExp(q, "g"), n[q](d)));
      c = c.replace(/\0\0/g, "%");
      q = pb(c, !1);
      if (q.length > b) return 0;
      Ie(q, a);
      return q.length - 1;
    }
    N.Xc();
    function Nb(a, b, c, d) {
      a || (a = this);
      this.parent = a;
      this.ib = a.ib;
      this.Ab = null;
      this.id = Gb++;
      this.name = b;
      this.mode = c;
      this.Qa = {};
      this.Ra = {};
      this.Cb = d;
    }
    Object.defineProperties(Nb.prototype, {
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
      ad: {
        get: function () {
          return 16384 === (this.mode & 61440);
        },
      },
      $c: {
        get: function () {
          return 8192 === (this.mode & 61440);
        },
      },
    });
    Na();
    Hb = Array(4096);
    Ub(Q, "/");
    S("/tmp", 16895, 0);
    S("/home", 16895, 0);
    S("/home/web_user", 16895, 0);
    (() => {
      S("/dev", 16895, 0);
      sb(259, { read: () => 0, write: (b, c, d, e) => e });
      Vb("/dev/null", 259);
      rb(1280, ub);
      rb(1536, vb);
      Vb("/dev/tty", 1280);
      Vb("/dev/tty1", 1536);
      var a = nb();
      Oa("/dev", "random", a);
      Oa("/dev", "urandom", a);
      S("/dev/shm", 16895, 0);
      S("/dev/shm/tmp", 16895, 0);
    })();
    (() => {
      S("/proc", 16895, 0);
      var a = S("/proc/self", 16895, 0);
      S("/proc/self/fd", 16895, 0);
      Ub(
        {
          ib: () => {
            var b = zb(a, "fd", 16895, 73);
            b.Qa = {
              yb: (c, d) => {
                var e = Fb[+d];
                if (!e) throw new P(8);
                c = {
                  parent: null,
                  ib: { rc: "fake" },
                  Qa: { Db: () => e.path },
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
    var kc;
    D.FS_createPath = fc;
    D.FS_createDataFile = hc;
    D.FS_createPreloadedFile = lc;
    D.FS_unlink = Wb;
    D.FS_createLazyFile = jc;
    D.FS_createDevice = Oa;
    Rc = D.InternalError = Qc("InternalError");
    for (var Ke = Array(256), Le = 0; 256 > Le; ++Le)
      Ke[Le] = String.fromCharCode(Le);
    Wc = Ke;
    Xc = D.BindingError = Qc("BindingError");
    ld.prototype.isAliasOf = function (a) {
      if (!(this instanceof ld && a instanceof ld)) return !1;
      var b = this.Oa.Va.Sa,
        c = this.Oa.Ta,
        d = a.Oa.Va.Sa;
      for (a = a.Oa.Ta; b.cb; ) (c = b.Eb(c)), (b = b.cb);
      for (; d.cb; ) (a = d.Eb(a)), (d = d.cb);
      return b === d && c === a;
    };
    ld.prototype.clone = function () {
      this.Oa.Ta || Yc(this);
      if (this.Oa.Bb) return (this.Oa.count.value += 1), this;
      var a = kd,
        b = Object,
        c = b.create,
        d = Object.getPrototypeOf(this),
        e = this.Oa;
      a = a(
        c.call(b, d, {
          Oa: {
            value: {
              count: e.count,
              ub: e.ub,
              Bb: e.Bb,
              Ta: e.Ta,
              Va: e.Va,
              Ya: e.Ya,
              bb: e.bb,
            },
          },
        }),
      );
      a.Oa.count.value += 1;
      a.Oa.ub = !1;
      return a;
    };
    ld.prototype["delete"] = function () {
      this.Oa.Ta || Yc(this);
      this.Oa.ub && !this.Oa.Bb && W("Object already scheduled for deletion");
      $c(this);
      ad(this.Oa);
      this.Oa.Bb || ((this.Oa.Ya = void 0), (this.Oa.Ta = void 0));
    };
    ld.prototype.isDeleted = function () {
      return !this.Oa.Ta;
    };
    ld.prototype.deleteLater = function () {
      this.Oa.Ta || Yc(this);
      this.Oa.ub && !this.Oa.Bb && W("Object already scheduled for deletion");
      dd.push(this);
      1 === dd.length && fd && fd(ed);
      this.Oa.ub = !0;
      return this;
    };
    D.getInheritedInstanceCount = function () {
      return Object.keys(gd).length;
    };
    D.getLiveInheritedInstances = function () {
      var a = [],
        b;
      for (b in gd) gd.hasOwnProperty(b) && a.push(gd[b]);
      return a;
    };
    D.flushPendingDeletes = ed;
    D.setDelayFunction = function (a) {
      fd = a;
      dd.length && fd && fd(ed);
    };
    vd.prototype.Sc = function (a) {
      this.uc && (a = this.uc(a));
      return a;
    };
    vd.prototype.kc = function (a) {
      this.lb && this.lb(a);
    };
    vd.prototype.argPackAdvance = 8;
    vd.prototype.readValueFromPointer = Kc;
    vd.prototype.deleteObject = function (a) {
      if (null !== a) a["delete"]();
    };
    vd.prototype.fromWireType = function (a) {
      function b() {
        return this.Lb
          ? jd(this.Sa.vb, { Va: this.gd, Ta: c, bb: this, Ya: a })
          : jd(this.Sa.vb, { Va: this, Ta: a });
      }
      var c = this.Sc(a);
      if (!c) return this.kc(a), null;
      var d = hd(this.Sa, c);
      if (void 0 !== d) {
        if (0 === d.Oa.count.value)
          return (d.Oa.Ta = c), (d.Oa.Ya = a), d.clone();
        d = d.clone();
        this.kc(a);
        return d;
      }
      d = this.Sa.Qc(c);
      d = cd[d];
      if (!d) return b.call(this);
      d = this.Kb ? d.Jc : d.pointerType;
      var e = bd(c, this.Sa, d.Sa);
      return null === e
        ? b.call(this)
        : this.Lb
        ? jd(d.Sa.vb, { Va: d, Ta: e, bb: this, Ya: a })
        : jd(d.Sa.vb, { Va: d, Ta: e });
    };
    yd = D.UnboundTypeError = Qc("UnboundTypeError");
    D.count_emval_handles = function () {
      for (var a = 0, b = 5; b < Y.length; ++b) void 0 !== Y[b] && ++a;
      return a;
    };
    D.get_first_emval = function () {
      for (var a = 5; a < Y.length; ++a) if (void 0 !== Y[a]) return Y[a];
      return null;
    };
    F ||
      (Ya("library_fetch_init"),
      qe(
        (a) => {
          re = a;
          Za("library_fetch_init");
        },
        () => {
          re = !1;
          Za("library_fetch_init");
        },
      ));
    var Me = [
        null,
        qc,
        sc,
        Cc,
        Ec,
        function (a, b) {
          if (F) return U(5, 1, a, b);
          try {
            return (a = J(a)), oc(Yb, a, b);
          } catch (c) {
            if ("undefined" == typeof T || "ErrnoError" !== c.name) throw c;
            return -c.Za;
          }
        },
        Fc,
        Gc,
        Hc,
        fe,
        ge,
        ze,
        Ae,
        Be,
        Ce,
        De,
        Ee,
      ],
      Oe = {
        S: function (a) {
          Ne(a, !1, 1, !0);
          N.zc();
        },
        t: function (a) {
          F ? postMessage({ cmd: "cleanupThread", thread: a }) : ib(a);
        },
        L: Dc,
        X: Ec,
        V: Fc,
        Y: Gc,
        W: Hc,
        h: function (a) {
          var b = Ic[a];
          delete Ic[a];
          var c = b.Zb,
            d = b.lb,
            e = b.mc,
            f = e.map((h) => h.Uc).concat(e.map((h) => h.qd));
          Tc([a], f, (h) => {
            var l = {};
            e.forEach((m, n) => {
              var q = h[n],
                p = m.Jb,
                r = m.Tc,
                k = h[n + e.length],
                t = m.pd,
                x = m.rd;
              l[m.Pc] = {
                read: (z) => q.fromWireType(p(r, z)),
                write: (z, G) => {
                  var H = [];
                  t(x, z, k.toWireType(H, G));
                  Jc(H);
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
                readValueFromPointer: Kc,
                eb: d,
              },
            ];
          });
        },
        G: function () {},
        fa: function (a, b, c, d, e) {
          var f = Vc(c);
          b = V(b);
          Uc(a, {
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
              else if (4 === c) l = A();
              else throw new TypeError("Unknown boolean type size: " + b);
              return this.fromWireType(l[h >> f]);
            },
            eb: null,
          });
        },
        oa: function (a, b, c, d, e, f, h, l, m, n, q, p, r) {
          q = V(q);
          f = X(e, f);
          l && (l = X(h, l));
          n && (n = X(m, n));
          r = X(p, r);
          var k = Oc(q);
          nd(k, function () {
            Cd("Cannot construct " + q + " due to unbound types", [d]);
          });
          Tc([a, b, c], d ? [d] : [], function (t) {
            t = t[0];
            if (d) {
              var x = t.Sa;
              var z = x.vb;
            } else z = ld.prototype;
            t = Pc(k, function () {
              if (Object.getPrototypeOf(this) !== G)
                throw new Xc("Use 'new' to construct " + q);
              if (void 0 === H.nb)
                throw new Xc(q + " has no accessible constructor");
              var R = H.nb[arguments.length];
              if (void 0 === R)
                throw new Xc(
                  "Tried to invoke ctor of " +
                    q +
                    " with invalid number of parameters (" +
                    arguments.length +
                    ") - expected (" +
                    Object.keys(H.nb).toString() +
                    ") parameters instead!",
                );
              return R.apply(this, arguments);
            });
            var G = Object.create(z, { constructor: { value: t } });
            t.prototype = G;
            var H = new od(q, t, G, r, x, f, l, n);
            x = new vd(q, H, !0, !1);
            z = new vd(q + "*", H, !1, !1);
            var y = new vd(q + " const*", H, !1, !0);
            cd[a] = { pointerType: z, Jc: y };
            wd(k, t);
            return [x, z, y];
          });
        },
        na: function (a, b, c, d, e, f) {
          0 < b || ya();
          var h = Dd(b, c);
          e = X(d, e);
          Tc([], [a], function (l) {
            l = l[0];
            var m = "constructor " + l.name;
            void 0 === l.Sa.nb && (l.Sa.nb = []);
            if (void 0 !== l.Sa.nb[b - 1])
              throw new Xc(
                "Cannot register multiple constructors with identical number of parameters (" +
                  (b - 1) +
                  ") for class '" +
                  l.name +
                  "'! Overload resolution is currently only performed using the parameter count, not actual type info!",
              );
            l.Sa.nb[b - 1] = () => {
              Cd("Cannot construct " + l.name + " due to unbound types", h);
            };
            Tc([], h, function (n) {
              n.splice(1, 0, null);
              l.Sa.nb[b - 1] = Ed(m, n, null, e, f);
              return [];
            });
            return [];
          });
        },
        k: function (a, b, c, d, e, f, h, l) {
          var m = Dd(c, d);
          b = V(b);
          f = X(e, f);
          Tc([], [a], function (n) {
            function q() {
              Cd("Cannot call " + p + " due to unbound types", m);
            }
            n = n[0];
            var p = n.name + "." + b;
            b.startsWith("@@") && (b = Symbol[b.substring(2)]);
            l && n.Sa.hd.push(b);
            var r = n.Sa.vb,
              k = r[b];
            void 0 === k ||
            (void 0 === k.Xa && k.className !== n.name && k.Fb === c - 2)
              ? ((q.Fb = c - 2), (q.className = n.name), (r[b] = q))
              : (md(r, b, p), (r[b].Xa[c - 2] = q));
            Tc([], m, function (t) {
              t = Ed(p, t, n, f, h);
              void 0 === r[b].Xa
                ? ((t.Fb = c - 2), (r[b] = t))
                : (r[b].Xa[c - 2] = t);
              return [];
            });
            return [];
          });
        },
        ea: function (a, b) {
          b = V(b);
          Uc(a, {
            name: b,
            fromWireType: function (c) {
              var d = Hd(c);
              Gd(c);
              return d;
            },
            toWireType: function (c, d) {
              return td(d);
            },
            argPackAdvance: 8,
            readValueFromPointer: Kc,
            eb: null,
          });
        },
        y: function (a, b, c) {
          c = Vc(c);
          b = V(b);
          Uc(a, {
            name: b,
            fromWireType: function (d) {
              return d;
            },
            toWireType: function (d, e) {
              return e;
            },
            argPackAdvance: 8,
            readValueFromPointer: Id(b, c),
            eb: null,
          });
        },
        p: function (a, b, c, d, e, f) {
          var h = Dd(b, c);
          a = V(a);
          e = X(d, e);
          nd(
            a,
            function () {
              Cd("Cannot call " + a + " due to unbound types", h);
            },
            b - 1,
          );
          Tc([], h, function (l) {
            wd(a, Ed(a, [l[0], null].concat(l.slice(1)), null, e, f), b - 1);
            return [];
          });
        },
        g: function (a, b, c, d, e) {
          b = V(b);
          -1 === e && (e = 4294967295);
          e = Vc(c);
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
          Uc(a, {
            name: b,
            fromWireType: f,
            toWireType: c,
            argPackAdvance: 8,
            readValueFromPointer: Jd(b, e, 0 !== d),
            eb: null,
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
          Uc(
            a,
            {
              name: c,
              fromWireType: d,
              argPackAdvance: 8,
              readValueFromPointer: d,
            },
            { Wc: !0 },
          );
        },
        z: function (a, b) {
          b = V(b);
          var c = "std::string" === b;
          Uc(a, {
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
              Bd(d);
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
              var h = c && f ? Ea(e) : e.length;
              var l = ie(4 + h + 1),
                m = l + 4;
              B()[l >> 2] = h;
              if (c && f) K(e, m, h + 1);
              else if (f)
                for (f = 0; f < h; ++f) {
                  var n = e.charCodeAt(f);
                  255 < n &&
                    (Bd(m),
                    W(
                      "String has UTF-16 code units that do not fit in 8 bits",
                    ));
                  v()[m + f] = n;
                }
              else for (f = 0; f < h; ++f) v()[m + f] = e[f];
              null !== d && d.push(Bd, l);
              return l;
            },
            argPackAdvance: 8,
            readValueFromPointer: Kc,
            eb: function (d) {
              Bd(d);
            },
          });
        },
        o: function (a, b, c) {
          c = V(c);
          if (2 === b) {
            var d = Ld;
            var e = Md;
            var f = Nd;
            var h = () => w();
            var l = 1;
          } else
            4 === b && ((d = Od), (e = Pd), (f = Qd), (h = () => B()), (l = 2));
          Uc(a, {
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
              Bd(m);
              return p;
            },
            toWireType: function (m, n) {
              "string" != typeof n &&
                W("Cannot pass non-string to C++ string type " + c);
              var q = f(n),
                p = ie(4 + q + b);
              B()[p >> 2] = q >> l;
              e(n, p + 4, q + b);
              null !== m && m.push(Bd, p);
              return p;
            },
            argPackAdvance: 8,
            readValueFromPointer: Kc,
            eb: function (m) {
              Bd(m);
            },
          });
        },
        i: function (a, b, c, d, e, f) {
          Ic[a] = { name: V(b), Zb: X(c, d), lb: X(e, f), mc: [] };
        },
        d: function (a, b, c, d, e, f, h, l, m, n) {
          Ic[a].mc.push({
            Pc: V(b),
            Uc: c,
            Jb: X(d, e),
            Tc: f,
            qd: h,
            pd: X(l, m),
            rd: n,
          });
        },
        ga: function (a, b) {
          b = V(b);
          Uc(a, {
            bd: !0,
            name: b,
            argPackAdvance: 0,
            fromWireType: function () {},
            toWireType: function () {},
          });
        },
        M: function () {
          return 262144;
        },
        ha: function (a) {
          var b = pe[a];
          b &&
            (delete pe[a], 0 < b.readyState && 4 > b.readyState && b.abort());
        },
        $: function () {
          return !0;
        },
        N: function (a, b, c, d) {
          a == b
            ? setTimeout(() => wc(d))
            : F
            ? postMessage({
                targetThread: a,
                cmd: "processProxyingQueue",
                queue: d,
              })
            : (a = N.kb[a]) &&
              a.postMessage({ cmd: "processProxyingQueue", queue: d });
        },
        R: function () {
          return -1;
        },
        n: function (a, b, c) {
          a = Hd(a);
          b = Sd(b, "emval::as");
          var d = [],
            e = td(d);
          B()[c >> 2] = e;
          return b.toWireType(d, a);
        },
        ma: function (a, b, c, d) {
          a = Vd[a];
          b = Hd(b);
          c = Ud(c);
          a(b, c, null, d);
        },
        c: Gd,
        r: function (a) {
          if (0 === a) return td(Wd());
          a = Ud(a);
          return td(Wd()[a]);
        },
        la: function (a, b) {
          var c = Yd(a, b),
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
          var e = Zd[b];
          if (void 0 !== e) return e;
          var f = Array(a - 1);
          e = Xd((h, l, m, n) => {
            for (var q = 0, p = 0; p < a - 1; ++p)
              (f[p] = c[p + 1].readValueFromPointer(n + q)),
                (q += c[p + 1].argPackAdvance);
            h = h[l].apply(h, f);
            for (p = 0; p < a - 1; ++p) c[p + 1].Mc && c[p + 1].Mc(f[p]);
            if (!d.bd) return d.toWireType(m, h);
          });
          return (Zd[b] = e);
        },
        E: function (a, b) {
          a = Hd(a);
          b = Hd(b);
          return td(a[b]);
        },
        l: function (a) {
          4 < a && (Y[a].ac += 1);
        },
        q: function (a, b, c, d) {
          a = Hd(a);
          var e = ae[b];
          e || ((e = $d(b)), (ae[b] = e));
          return e(a, c, d);
        },
        D: function (a) {
          return td(Ud(a));
        },
        m: function (a) {
          var b = Hd(a);
          Jc(b);
          Gd(a);
        },
        j: function (a, b) {
          a = Sd(a, "_emval_take_value");
          a = a.readValueFromPointer(b);
          return td(a);
        },
        ba: function (a, b) {
          var c = Date;
          a = B()[a >> 2] + 4294967296 * A()[(a + 4) >> 2];
          c = new c(1e3 * a);
          A()[b >> 2] = c.getSeconds();
          A()[(b + 4) >> 2] = c.getMinutes();
          A()[(b + 8) >> 2] = c.getHours();
          A()[(b + 12) >> 2] = c.getDate();
          A()[(b + 16) >> 2] = c.getMonth();
          A()[(b + 20) >> 2] = c.getFullYear() - 1900;
          A()[(b + 24) >> 2] = c.getDay();
          a = ee(c) | 0;
          A()[(b + 28) >> 2] = a;
          A()[(b + 36) >> 2] = -(60 * c.getTimezoneOffset());
          a = new Date(c.getFullYear(), 6, 1).getTimezoneOffset();
          var d = new Date(c.getFullYear(), 0, 1).getTimezoneOffset();
          c = (a != d && c.getTimezoneOffset() == Math.min(d, a)) | 0;
          A()[(b + 32) >> 2] = c;
        },
        ca: function (a) {
          var b = new Date(
              A()[(a + 20) >> 2] + 1900,
              A()[(a + 16) >> 2],
              A()[(a + 12) >> 2],
              A()[(a + 8) >> 2],
              A()[(a + 4) >> 2],
              A()[a >> 2],
              0,
            ),
            c = A()[(a + 32) >> 2],
            d = b.getTimezoneOffset(),
            e = new Date(b.getFullYear(), 6, 1).getTimezoneOffset(),
            f = new Date(b.getFullYear(), 0, 1).getTimezoneOffset(),
            h = Math.min(f, e);
          0 > c
            ? (A()[(a + 32) >> 2] = Number(e != f && h == d))
            : 0 < c != (h == d) &&
              ((e = Math.max(f, e)),
              b.setTime(b.getTime() + 6e4 * ((0 < c ? h : e) - d)));
          A()[(a + 24) >> 2] = b.getDay();
          c = ee(b) | 0;
          A()[(a + 28) >> 2] = c;
          A()[a >> 2] = b.getSeconds();
          A()[(a + 4) >> 2] = b.getMinutes();
          A()[(a + 8) >> 2] = b.getHours();
          A()[(a + 12) >> 2] = b.getDate();
          A()[(a + 16) >> 2] = b.getMonth();
          A()[(a + 20) >> 2] = b.getYear();
          return (b.getTime() / 1e3) | 0;
        },
        O: fe,
        P: ge,
        da: function (a, b, c) {
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
          A()[b >> 2] = Number(e != l);
          a = d(f);
          b = d(h);
          a = he(a);
          b = he(b);
          l < e
            ? ((B()[c >> 2] = a), (B()[(c + 4) >> 2] = b))
            : ((B()[c >> 2] = b), (B()[(c + 4) >> 2] = a));
        },
        b: function () {
          ya("");
        },
        s: function () {
          var a = D.allowedThreads;
          return a ? a : navigator.hardwareConcurrency;
        },
        C: function (a, b, c) {
          je.length = 0;
          var d;
          for (c >>= 2; (d = v()[b++]); )
            (c += (105 != d) & c),
              je.push(105 == d ? A()[c] : ka()[c++ >> 1]),
              ++c;
          return fb[a].apply(null, je);
        },
        u: function () {},
        aa: function () {
          return Date.now();
        },
        K: function () {
          return 838860800;
        },
        f: () => performance.timeOrigin + performance.now(),
        A: function () {
          return "undefined" != typeof SharedArrayBuffer;
        },
        Z: function (a, b, c) {
          v().copyWithin(a, b, b + c);
        },
        Q: function (a, b, c) {
          oe.length = b;
          c >>= 3;
          for (var d = 0; d < b; d++) oe[d] = ka()[c + d];
          return (0 > a ? fb[-a - 1] : Me[a]).apply(null, oe);
        },
        J: function (a) {
          var b = v().length;
          a >>>= 0;
          if (a <= b || 838860800 < a) return !1;
          for (var c = 1; 4 >= c; c *= 2) {
            var d = b * (1 + 0.2 / c);
            d = Math.min(d, a + 100663296);
            var e = Math,
              f = e.min;
            d = Math.max(a, d);
            d += (65536 - (d % 65536)) % 65536;
            a: {
              var h = u.buffer;
              try {
                u.grow((f.call(e, 838860800, d) - h.byteLength + 65535) >>> 16);
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
        ia: function (a, b, c, d, e) {
          function f(I) {
            if (z) I();
            else if (!Aa)
              try {
                I();
              } catch (dc) {
                tc(dc);
              }
          }
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
            z = !!(r & 64),
            G = (I) => {
              f(() => {
                m ? Ac(m)(I) : b && b(I);
              });
            },
            H = (I) => {
              f(() => {
                q ? Ac(q)(I) : d && d(I);
              });
            },
            y = (I) => {
              f(() => {
                n ? Ac(n)(I) : c && c(I);
              });
            },
            R = (I) => {
              f(() => {
                p ? Ac(p)(I) : e && e(I);
              });
            };
          r = (I) => {
            se(I, G, y, H, R);
          };
          var C = (I, dc) => {
              te(
                I,
                dc.response,
                (Ta) => {
                  f(() => {
                    m ? Ac(m)(Ta) : b && b(Ta);
                  });
                },
                (Ta) => {
                  f(() => {
                    m ? Ac(m)(Ta) : b && b(Ta);
                  });
                },
              );
            },
            aa = (I) => {
              se(I, C, y, H, R);
            };
          if ("EM_IDB_STORE" === l)
            (l = B()[(h + 84) >> 2]),
              te(a, v().slice(l, l + B()[(h + 88) >> 2]), G, y);
          else if ("EM_IDB_DELETE" === l) ve(a, G, y);
          else if (x) {
            if (t) return 0;
            se(a, k ? C : G, y, H, R);
          } else ue(a, G, t ? y : k ? aa : r);
          return a;
        },
        _: function () {
          throw "unwind";
        },
        T: ze,
        U: Ae,
        B: rc,
        x: Be,
        w: Ce,
        F: De,
        v: Ee,
        ja: function () {
          var a = stackTrace(),
            b = Ea(a) + 1,
            c = ie(b);
          K(a, c, b);
          return c;
        },
        H: Fe,
        a: u || D.wasmMemory,
        ka: Je,
        I: function (a, b, c, d) {
          return Je(a, b, c, d);
        },
      };
    (function () {
      function a(c, d) {
        c = c.exports;
        D.asm = c;
        N.Ac.push(D.asm.ta);
        Ha = D.asm.za;
        Ja.unshift(D.asm.pa);
        za = d;
        N.cd(() => Za("wasm-instantiate"));
        return c;
      }
      var b = { a: Oe };
      Ya("wasm-instantiate");
      if (D.instantiateWasm)
        try {
          return D.instantiateWasm(b, a);
        } catch (c) {
          E("Module.instantiateWasm callback failed with error: " + c), na(c);
        }
      eb(b, function (c) {
        a(c.instance, c.module);
      }).catch(na);
      return {};
    })();
    function Bd() {
      return (Bd = D.asm.qa).apply(null, arguments);
    }
    function ie() {
      return (ie = D.asm.ra).apply(null, arguments);
    }
    var vc = (D._pthread_self = function () {
      return (vc = D._pthread_self = D.asm.sa).apply(null, arguments);
    });
    D.__emscripten_tls_init = function () {
      return (D.__emscripten_tls_init = D.asm.ta).apply(null, arguments);
    };
    function xb() {
      return (xb = D.asm.ua).apply(null, arguments);
    }
    var Ad = (D.___getTypeName = function () {
      return (Ad = D.___getTypeName = D.asm.va).apply(null, arguments);
    });
    D.__embind_initialize_bindings = function () {
      return (D.__embind_initialize_bindings = D.asm.wa).apply(null, arguments);
    };
    var Ne = (D.__emscripten_thread_init = function () {
      return (Ne = D.__emscripten_thread_init = D.asm.xa).apply(
        null,
        arguments,
      );
    });
    D.__emscripten_thread_crashed = function () {
      return (D.__emscripten_thread_crashed = D.asm.ya).apply(null, arguments);
    };
    function ne() {
      return (ne = D.asm.Aa).apply(null, arguments);
    }
    var Rd = (D.__emscripten_proxy_execute_task_queue = function () {
      return (Rd = D.__emscripten_proxy_execute_task_queue = D.asm.Ba).apply(
        null,
        arguments,
      );
    });
    function uc() {
      return (uc = D.asm.Ca).apply(null, arguments);
    }
    var Bc = (D.__emscripten_thread_exit = function () {
      return (Bc = D.__emscripten_thread_exit = D.asm.Da).apply(
        null,
        arguments,
      );
    });
    function xc() {
      return (xc = D.asm.Ea).apply(null, arguments);
    }
    function le() {
      return (le = D.asm.Fa).apply(null, arguments);
    }
    function yc() {
      return (yc = D.asm.Ga).apply(null, arguments);
    }
    function me() {
      return (me = D.asm.Ha).apply(null, arguments);
    }
    D.dynCall_ji = function () {
      return (D.dynCall_ji = D.asm.Ia).apply(null, arguments);
    };
    D.dynCall_jiji = function () {
      return (D.dynCall_jiji = D.asm.Ja).apply(null, arguments);
    };
    D.dynCall_viijii = function () {
      return (D.dynCall_viijii = D.asm.Ka).apply(null, arguments);
    };
    D.dynCall_iiiiij = function () {
      return (D.dynCall_iiiiij = D.asm.La).apply(null, arguments);
    };
    D.dynCall_iiiiijj = function () {
      return (D.dynCall_iiiiijj = D.asm.Ma).apply(null, arguments);
    };
    D.dynCall_iiiiiijj = function () {
      return (D.dynCall_iiiiiijj = D.asm.Na).apply(null, arguments);
    };
    D.__ZN2MB2NN28LinearDefragmentingAllocator10Allocation4nullE = 14816;
    D.___start_em_js = 60944;
    D.___stop_em_js = 61937;
    D.addRunDependency = Ya;
    D.removeRunDependency = Za;
    D.FS_createPath = fc;
    D.FS_createDataFile = hc;
    D.FS_createPreloadedFile = lc;
    D.FS_createLazyFile = jc;
    D.FS_createDevice = Oa;
    D.FS_unlink = Wb;
    D.keepRuntimeAlive = function () {
      return noExitRuntime;
    };
    D.wasmMemory = u;
    D.ExitStatus = gb;
    D.PThread = N;
    var Pe;
    Xa = function Qe() {
      Pe || Re();
      Pe || (Xa = Qe);
    };
    function Re() {
      function a() {
        if (!Pe && ((Pe = !0), (D.calledRun = !0), !Aa)) {
          La();
          ma(D);
          if (D.onRuntimeInitialized) D.onRuntimeInitialized();
          if (!F) {
            if (D.postRun)
              for (
                "function" == typeof D.postRun && (D.postRun = [D.postRun]);
                D.postRun.length;

              ) {
                var b = D.postRun.shift();
                Ka.unshift(b);
              }
            Sa(Ka);
          }
        }
      }
      if (!(0 < Va))
        if (F) ma(D), La(), startWorker(D);
        else {
          if (D.preRun)
            for (
              "function" == typeof D.preRun && (D.preRun = [D.preRun]);
              D.preRun.length;

            )
              Ua();
          Sa(Ia);
          0 < Va ||
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
    Re();

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
