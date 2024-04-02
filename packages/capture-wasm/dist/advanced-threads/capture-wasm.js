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
    function h() {
      u.buffer != aa.buffer && ba();
      return aa;
    }
    function w() {
      u.buffer != aa.buffer && ba();
      return ca;
    }
    function da() {
      u.buffer != aa.buffer && ba();
      return ea;
    }
    function x() {
      u.buffer != aa.buffer && ba();
      return fa;
    }
    function A() {
      u.buffer != aa.buffer && ba();
      return ha;
    }
    function B() {
      u.buffer != aa.buffer && ba();
      return ia;
    }
    function ja() {
      u.buffer != aa.buffer && ba();
      return ka;
    }
    var D = moduleArg,
      la,
      ma;
    D.ready = new Promise((a, b) => {
      la = a;
      ma = b;
    });
    D.Yb || (D.Yb = 0);
    D.Yb++;
    D.ENVIRONMENT_IS_PTHREAD ||
      D.$ww ||
      (function (a) {
        function b(m, n, t) {
          var p = new XMLHttpRequest();
          p.open("GET", m, !0);
          p.responseType = "arraybuffer";
          p.onprogress = function (r) {
            var k = n;
            r.total && (k = r.total);
            if (r.loaded) {
              p.Ic
                ? (D.xb[m].loaded = r.loaded)
                : ((p.Ic = !0),
                  D.xb || (D.xb = {}),
                  (D.xb[m] = { loaded: r.loaded, total: k }));
              var q = (k = r = 0),
                v;
              for (v in D.xb) {
                var z = D.xb[v];
                r += z.total;
                k += z.loaded;
                q++;
              }
              r = Math.ceil((r * D.Yb) / q);
              D.setStatus && D.setStatus(`Downloading data... (${k}/${r})`);
            } else !D.xb && D.setStatus && D.setStatus("Downloading data...");
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
              t(p.response);
            else throw Error(p.statusText + " : " + p.responseURL);
          };
          p.send(null);
        }
        function c(m) {
          console.error("package error:", m);
        }
        function d() {
          function m(r, k, q) {
            this.start = r;
            this.end = k;
            this.audio = q;
          }
          function n(r) {
            if (!r) throw "Loading data file failed." + Error().stack;
            if (r.constructor.name !== ArrayBuffer.name)
              throw "bad input to processPackageData" + Error().stack;
            r = new Uint8Array(r);
            m.prototype.Nc = r;
            r = a.files;
            for (var k = 0; k < r.length; ++k)
              m.prototype.fc[r[k].filename].onload();
            D.removeRunDependency(
              "datafile_/Users/ivan/Dev/imagecapture-browser/packages/capture-wasm/dist/advanced-threads/capture-wasm.data",
            );
          }
          D.FS_createPath("/", "microblink", !0, !0);
          D.FS_createPath("/microblink", "capture", !0, !0);
          m.prototype = {
            fc: {},
            open: function (r, k) {
              this.name = k;
              this.fc[k] = this;
              D.addRunDependency(`fp ${this.name}`);
            },
            send: function () {},
            onload: function () {
              this.finish(this.Nc.subarray(this.start, this.end));
            },
            finish: function (r) {
              D.FS_createDataFile(this.name, null, r, !0, !0, !0);
              D.removeRunDependency(`fp ${this.name}`);
              this.fc[this.name] = null;
            },
          };
          for (var t = a.files, p = 0; p < t.length; ++p)
            new m(t[p].start, t[p].end, t[p].audio || 0).open(
              "GET",
              t[p].filename,
            );
          D.addRunDependency(
            "datafile_/Users/ivan/Dev/imagecapture-browser/packages/capture-wasm/dist/advanced-threads/capture-wasm.data",
          );
          D.uc || (D.uc = {});
          D.uc[
            "/Users/ivan/Dev/imagecapture-browser/packages/capture-wasm/dist/advanced-threads/capture-wasm.data"
          ] = { Cd: !1 };
          l ? (n(l), (l = null)) : (g = n);
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
          g = null,
          l = D.getPreloadedPackage ? D.getPreloadedPackage(e, f) : null;
        l ||
          b(
            e,
            f,
            function (m) {
              g ? (g(m), (g = null)) : (l = m);
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
    var na = Object.assign({}, D),
      oa = "./this.program",
      pa = (a, b) => {
        throw b;
      },
      F = D.ENVIRONMENT_IS_PTHREAD || !1,
      qa = "";
    function ra(a) {
      return D.locateFile ? D.locateFile(a, qa) : qa + a;
    }
    var sa, ta, ua;
    qa = self.location.href;
    _scriptDir && (qa = _scriptDir);
    qa = qa.startsWith("blob:")
      ? ""
      : qa.substr(0, qa.replace(/[?#].*/, "").lastIndexOf("/") + 1);
    sa = (a) => {
      var b = new XMLHttpRequest();
      b.open("GET", a, !1);
      b.send(null);
      return b.responseText;
    };
    ua = (a) => {
      var b = new XMLHttpRequest();
      b.open("GET", a, !1);
      b.responseType = "arraybuffer";
      b.send(null);
      return new Uint8Array(b.response);
    };
    ta = (a, b, c) => {
      var d = new XMLHttpRequest();
      d.open("GET", a, !0);
      d.responseType = "arraybuffer";
      d.onload = () => {
        200 == d.status || (0 == d.status && d.response) ? b(d.response) : c();
      };
      d.onerror = c;
      d.send(null);
    };
    var va = D.print || console.log.bind(console),
      E = D.printErr || console.error.bind(console);
    Object.assign(D, na);
    na = null;
    D.thisProgram && (oa = D.thisProgram);
    D.quit && (pa = D.quit);
    var wa;
    D.wasmBinary && (wa = D.wasmBinary);
    "object" != typeof WebAssembly && xa("no native wasm support detected");
    var u,
      ya,
      za = !1,
      Aa,
      aa,
      ca,
      ea,
      fa,
      ha,
      ia,
      Ba,
      ka;
    function ba() {
      var a = u.buffer;
      D.HEAP8 = aa = new Int8Array(a);
      D.HEAP16 = ea = new Int16Array(a);
      D.HEAPU8 = ca = new Uint8Array(a);
      D.HEAPU16 = fa = new Uint16Array(a);
      D.HEAP32 = ha = new Int32Array(a);
      D.HEAPU32 = ia = new Uint32Array(a);
      D.HEAPF32 = Ba = new Float32Array(a);
      D.HEAPF64 = ka = new Float64Array(a);
    }
    var Ca = D.INITIAL_MEMORY || 209715200;
    if (F) u = D.wasmMemory;
    else if (D.wasmMemory) u = D.wasmMemory;
    else if (
      ((u = new WebAssembly.Memory({
        initial: Ca / 65536,
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
    ba();
    Ca = u.buffer.byteLength;
    var Da = [],
      Ea = [],
      Fa = [],
      Ga = [],
      Ha = !1;
    function Ia() {
      F ||
        (D.noFSInit ||
          Ja ||
          ((Ja = !0),
          (D.stdin = D.stdin),
          (D.stdout = D.stdout),
          (D.stderr = D.stderr),
          D.stdin ? Ka("/dev", "stdin", D.stdin) : La("/dev/tty", "/dev/stdin"),
          D.stdout
            ? Ka("/dev", "stdout", null, D.stdout)
            : La("/dev/tty", "/dev/stdout"),
          D.stderr
            ? Ka("/dev", "stderr", null, D.stderr)
            : La("/dev/tty1", "/dev/stderr"),
          Ma("/dev/stdin", 0),
          Ma("/dev/stdout", 1),
          Ma("/dev/stderr", 1)),
        (Na = !1),
        Oa(Ea));
    }
    var Pa = 0,
      Qa = null,
      Ra = null;
    function Sa() {
      Pa++;
      D.monitorRunDependencies?.(Pa);
    }
    function Ta() {
      Pa--;
      D.monitorRunDependencies?.(Pa);
      if (0 == Pa && (null !== Qa && (clearInterval(Qa), (Qa = null)), Ra)) {
        var a = Ra;
        Ra = null;
        a();
      }
    }
    function xa(a) {
      D.onAbort?.(a);
      a = "Aborted(" + a + ")";
      E(a);
      za = !0;
      Aa = 1;
      a = new WebAssembly.RuntimeError(
        a + ". Build with -sASSERTIONS for more info.",
      );
      ma(a);
      throw a;
    }
    var Ua = (a) => a.startsWith("data:application/octet-stream;base64,"),
      Wa;
    Wa = "capture-wasm.wasm";
    Ua(Wa) || (Wa = ra(Wa));
    function Xa(a) {
      if (a == Wa && wa) return new Uint8Array(wa);
      if (ua) return ua(a);
      throw "both async and sync fetching of the wasm failed";
    }
    function Ya(a) {
      return wa || "function" != typeof fetch
        ? Promise.resolve().then(() => Xa(a))
        : fetch(a, { credentials: "same-origin" })
            .then((b) => {
              if (!b.ok) throw `failed to load wasm binary file at '${a}'`;
              return b.arrayBuffer();
            })
            .catch(() => Xa(a));
    }
    function Za(a, b, c) {
      return Ya(a)
        .then((d) => WebAssembly.instantiate(d, b))
        .then((d) => d)
        .then(c, (d) => {
          E(`failed to asynchronously prepare wasm: ${d}`);
          xa(d);
        });
    }
    function $a(a, b) {
      var c = Wa;
      return wa ||
        "function" != typeof WebAssembly.instantiateStreaming ||
        Ua(c) ||
        "function" != typeof fetch
        ? Za(c, a, b)
        : fetch(c, { credentials: "same-origin" }).then((d) =>
            WebAssembly.instantiateStreaming(d, a).then(b, function (e) {
              E(`wasm streaming compile failed: ${e}`);
              E("falling back to ArrayBuffer instantiation");
              return Za(c, a, b);
            }),
          );
    }
    var G,
      H,
      ab = {
        62113: (a, b, c, d) => {
          a = K(a);
          b = K(b);
          c = K(c);
          d = K(d);
          throw Error(a + b + c + d);
        },
        62329: (a, b) => {
          a = K(a);
          b = K(b);
          throw Error(a + b);
        },
      };
    function bb(a) {
      this.name = "ExitStatus";
      this.message = `Program terminated with exit(${a})`;
      this.status = a;
    }
    var cb = (a) => {
        a.terminate();
        a.onmessage = () => {};
      },
      eb = (a) => {
        0 == M.pb.length && (db(), M.rc(M.pb[0]));
        var b = M.pb.pop();
        if (!b) return 6;
        M.ub.push(b);
        M.lb[a.tb] = b;
        b.tb = a.tb;
        b.postMessage(
          { cmd: "run", start_routine: a.od, arg: a.Jc, pthread_ptr: a.tb },
          a.td,
        );
        return 0;
      },
      N = 0,
      hb = (a) => {
        var b = fb();
        a = a();
        gb(b);
        return a;
      },
      ib = (a, b) =>
        (b + 2097152) >>> 0 < 4194305 - !!a ? (a >>> 0) + 4294967296 * b : NaN;
    function O(a, b) {
      var c = arguments.length - 2,
        d = arguments;
      return hb(() => {
        for (var e = jb(8 * c), f = e >> 3, g = 0; g < c; g++) {
          var l = d[2 + g];
          ja()[f + g] = l;
        }
        return kb(a, c, e, b);
      });
    }
    function lb(a) {
      if (F) return O(0, 1, a);
      Aa = a;
      mb || 0 < N || (M.Dc(), D.onExit?.(a), (za = !0));
      pa(a, new bb(a));
    }
    var sb = (a) => {
      Aa = a;
      if (F) throw (nb(a), "unwind");
      if (!(mb || 0 < N || F)) {
        ob();
        Oa(Fa);
        Ja = !1;
        pb(0);
        for (var b = 0; b < qb.length; b++) {
          var c = qb[b];
          c && rb(c);
        }
        M.Dc();
        Ha = !0;
      }
      lb(a);
    };
    function tb() {
      M.receiveObjectTransfer = M.hd;
      M.threadInitTLS = M.Ec;
      M.setExitStatus = M.Cc;
      mb = !1;
    }
    function ub() {
      for (var a = navigator.hardwareConcurrency; a--; ) db();
      Da.unshift(() => {
        Sa("loading-workers");
        vb(() => Ta("loading-workers"));
      });
    }
    function db() {
      var a = ra("capture-wasm.worker.js");
      a = new Worker(a);
      M.pb.push(a);
    }
    function vb(a) {
      F ? a() : Promise.all(M.pb.map(M.rc)).then(a);
    }
    var M = {
      pb: [],
      ub: [],
      Fc: [],
      lb: {},
      Cc: (a) => (Aa = a),
      Kd: ["$terminateWorker"],
      Dc: () => {
        for (var a of M.ub) cb(a);
        for (a of M.pb) cb(a);
        M.pb = [];
        M.ub = [];
        M.lb = [];
      },
      Ac: (a) => {
        var b = a.tb;
        delete M.lb[b];
        M.pb.push(a);
        M.ub.splice(M.ub.indexOf(a), 1);
        a.tb = 0;
        wb(b);
      },
      hd() {},
      Ec() {
        M.Fc.forEach((a) => a());
      },
      rc: (a) =>
        new Promise((b) => {
          a.onmessage = (f) => {
            f = f.data;
            var g = f.cmd;
            if (f.targetThread && f.targetThread != xb()) {
              var l = M.lb[f.targetThread];
              l
                ? l.postMessage(f, f.transferList)
                : E(
                    `Internal error! Worker sent a message "${g}" to target pthread ${f.targetThread}, but that thread no longer exists!`,
                  );
            } else if ("checkMailbox" === g) yb();
            else if ("spawnThread" === g) eb(f);
            else if ("cleanupThread" === g) M.Ac(M.lb[f.thread]);
            else if ("killThread" === g)
              (f = f.thread),
                (g = M.lb[f]),
                delete M.lb[f],
                cb(g),
                wb(f),
                M.ub.splice(M.ub.indexOf(g), 1),
                (g.tb = 0);
            else if ("cancelThread" === g)
              M.lb[f.thread].postMessage({ cmd: "cancel" });
            else if ("loaded" === g) (a.loaded = !0), b(a);
            else if ("alert" === g) alert(`Thread ${f.threadId}: ${f.text}`);
            else if ("setimmediate" === f.target) a.postMessage(f);
            else if ("callHandler" === g) D[f.handler](...f.args);
            else g && E(`worker sent an unknown command ${g}`);
          };
          a.onerror = (f) => {
            E(
              `${"worker sent an error!"} ${f.filename}:${f.lineno}: ${
                f.message
              }`,
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
            wasmModule: ya,
          });
        }),
    };
    D.PThread = M;
    var Oa = (a) => {
      for (; 0 < a.length; ) a.shift()(D);
    };
    D.establishStackSpace = () => {
      var a = xb(),
        b = B()[(a + 52) >> 2];
      a = B()[(a + 56) >> 2];
      zb(b, b - a);
      gb(b);
    };
    function nb(a) {
      if (F) return O(1, 0, a);
      sb(a);
    }
    var Ab = [],
      Bb,
      Cb = (a) => {
        var b = Ab[a];
        b || (a >= Ab.length && (Ab.length = a + 1), (Ab[a] = b = Bb.get(a)));
        return b;
      };
    D.invokeEntryPoint = (a, b) => {
      N = 0;
      a = Cb(a)(b);
      mb || 0 < N ? M.Cc(a) : Db(a);
    };
    var mb = D.noExitRuntime || !1;
    function Eb(a, b, c, d) {
      return F ? O(2, 1, a, b, c, d) : Fb(a, b, c, d);
    }
    var Fb = (a, b, c, d) => {
        if ("undefined" == typeof SharedArrayBuffer)
          return (
            E(
              "Current environment does not support SharedArrayBuffer, pthreads are not available!",
            ),
            6
          );
        var e = [];
        if (F && 0 === e.length) return Eb(a, b, c, d);
        a = { od: c, tb: a, Jc: d, td: e };
        return F ? ((a.Bd = "spawnThread"), postMessage(a, e), 0) : eb(a);
      },
      Gb = (a, b) => {
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
      Hb = (a) => {
        var b = "/" === a.charAt(0),
          c = "/" === a.substr(-1);
        (a = Gb(
          a.split("/").filter((d) => !!d),
          !b,
        ).join("/")) ||
          b ||
          (a = ".");
        a && c && (a += "/");
        return (b ? "/" : "") + a;
      },
      Ib = (a) => {
        var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
          .exec(a)
          .slice(1);
        a = b[0];
        b = b[1];
        if (!a && !b) return ".";
        b &&= b.substr(0, b.length - 1);
        return a + b;
      },
      Jb = (a) => {
        if ("/" === a) return "/";
        a = Hb(a);
        a = a.replace(/\/$/, "");
        var b = a.lastIndexOf("/");
        return -1 === b ? a : a.substr(b + 1);
      },
      Kb = () => {
        if (
          "object" == typeof crypto &&
          "function" == typeof crypto.getRandomValues
        )
          return (a) => (
            a.set(crypto.getRandomValues(new Uint8Array(a.byteLength))), a
          );
        xa("initRandomDevice");
      },
      Lb = (a) => (Lb = Kb())(a);
    function Mb() {
      for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
        b = 0 <= c ? arguments[c] : "/";
        if ("string" != typeof b)
          throw new TypeError("Arguments to path.resolve must be strings");
        if (!b) return "";
        a = b + "/" + a;
        b = "/" === b.charAt(0);
      }
      a = Gb(
        a.split("/").filter((d) => !!d),
        !b,
      ).join("/");
      return (b ? "/" : "") + a || ".";
    }
    var Nb =
        "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0,
      Ob = (a, b, c) => {
        var d = b + c;
        for (c = b; a[c] && !(c >= d); ) ++c;
        if (16 < c - b && a.buffer && Nb)
          return Nb.decode(
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
      Pb = [],
      Qb = (a) => {
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
      P = (a, b, c, d) => {
        if (!(0 < d)) return 0;
        var e = c;
        d = c + d - 1;
        for (var f = 0; f < a.length; ++f) {
          var g = a.charCodeAt(f);
          if (55296 <= g && 57343 >= g) {
            var l = a.charCodeAt(++f);
            g = (65536 + ((g & 1023) << 10)) | (l & 1023);
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
    function Rb(a, b) {
      var c = Array(Qb(a) + 1);
      a = P(a, c, 0, c.length);
      b && (c.length = a);
      return c;
    }
    var Sb = [];
    function Tb(a, b) {
      Sb[a] = { input: [], $a: [], Bb: b };
      Ub(a, Vb);
    }
    var Vb = {
        open(a) {
          var b = Sb[a.node.Hb];
          if (!b) throw new Q(43);
          a.hb = b;
          a.seekable = !1;
        },
        close(a) {
          a.hb.Bb.Nb(a.hb);
        },
        Nb(a) {
          a.hb.Bb.Nb(a.hb);
        },
        read(a, b, c, d) {
          if (!a.hb || !a.hb.Bb.pc) throw new Q(60);
          for (var e = 0, f = 0; f < d; f++) {
            try {
              var g = a.hb.Bb.pc(a.hb);
            } catch (l) {
              throw new Q(29);
            }
            if (void 0 === g && 0 === e) throw new Q(6);
            if (null === g || void 0 === g) break;
            e++;
            b[c + f] = g;
          }
          e && (a.node.timestamp = Date.now());
          return e;
        },
        write(a, b, c, d) {
          if (!a.hb || !a.hb.Bb.cc) throw new Q(60);
          try {
            for (var e = 0; e < d; e++) a.hb.Bb.cc(a.hb, b[c + e]);
          } catch (f) {
            throw new Q(29);
          }
          d && (a.node.timestamp = Date.now());
          return e;
        },
      },
      Wb = {
        pc() {
          a: {
            if (!Pb.length) {
              var a = null;
              "undefined" != typeof window && "function" == typeof window.prompt
                ? ((a = window.prompt("Input: ")), null !== a && (a += "\n"))
                : "function" == typeof readline &&
                  ((a = readline()), null !== a && (a += "\n"));
              if (!a) {
                a = null;
                break a;
              }
              Pb = Rb(a, !0);
            }
            a = Pb.shift();
          }
          return a;
        },
        cc(a, b) {
          null === b || 10 === b
            ? (va(Ob(a.$a, 0)), (a.$a = []))
            : 0 != b && a.$a.push(b);
        },
        Nb(a) {
          a.$a && 0 < a.$a.length && (va(Ob(a.$a, 0)), (a.$a = []));
        },
        Ed() {
          return {
            yd: 25856,
            Ad: 5,
            xd: 191,
            zd: 35387,
            wd: [
              3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
          };
        },
        Fd() {
          return 0;
        },
        Gd() {
          return [24, 80];
        },
      },
      Xb = {
        cc(a, b) {
          null === b || 10 === b
            ? (E(Ob(a.$a, 0)), (a.$a = []))
            : 0 != b && a.$a.push(b);
        },
        Nb(a) {
          a.$a && 0 < a.$a.length && (E(Ob(a.$a, 0)), (a.$a = []));
        },
      },
      Zb = (a) => {
        a = 65536 * Math.ceil(a / 65536);
        var b = Yb(65536, a);
        b ? w().fill(0, b, b + a) : (b = 0);
        return b;
      };
    function $b(a, b) {
      var c = a.Sa ? a.Sa.length : 0;
      c >= b ||
        ((b = Math.max(b, (c * (1048576 > c ? 2 : 1.125)) >>> 0)),
        0 != c && (b = Math.max(b, 256)),
        (c = a.Sa),
        (a.Sa = new Uint8Array(b)),
        0 < a.Xa && a.Sa.set(c.subarray(0, a.Xa), 0));
    }
    var R = {
        kb: null,
        ob() {
          return R.createNode(null, "/", 16895, 0);
        },
        createNode(a, b, c, d) {
          if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new Q(63);
          R.kb ||
            (R.kb = {
              dir: {
                node: {
                  jb: R.Ta.jb,
                  fb: R.Ta.fb,
                  Db: R.Ta.Db,
                  Rb: R.Ta.Rb,
                  yc: R.Ta.yc,
                  Xb: R.Ta.Xb,
                  Bc: R.Ta.Bc,
                  wc: R.Ta.wc,
                  Ub: R.Ta.Ub,
                },
                stream: { sb: R.Ua.sb },
              },
              file: {
                node: { jb: R.Ta.jb, fb: R.Ta.fb },
                stream: {
                  sb: R.Ua.sb,
                  read: R.Ua.read,
                  write: R.Ua.write,
                  Cb: R.Ua.Cb,
                  Eb: R.Ua.Eb,
                  Sb: R.Ua.Sb,
                },
              },
              link: {
                node: { jb: R.Ta.jb, fb: R.Ta.fb, Ib: R.Ta.Ib },
                stream: {},
              },
              kc: { node: { jb: R.Ta.jb, fb: R.Ta.fb }, stream: ac },
            });
          c = bc(a, b, c, d);
          U(c.mode)
            ? ((c.Ta = R.kb.dir.node), (c.Ua = R.kb.dir.stream), (c.Sa = {}))
            : 32768 === (c.mode & 61440)
            ? ((c.Ta = R.kb.file.node),
              (c.Ua = R.kb.file.stream),
              (c.Xa = 0),
              (c.Sa = null))
            : 40960 === (c.mode & 61440)
            ? ((c.Ta = R.kb.link.node), (c.Ua = R.kb.link.stream))
            : 8192 === (c.mode & 61440) &&
              ((c.Ta = R.kb.kc.node), (c.Ua = R.kb.kc.stream));
          c.timestamp = Date.now();
          a && ((a.Sa[b] = c), (a.timestamp = c.timestamp));
          return c;
        },
        Dd(a) {
          return a.Sa
            ? a.Sa.subarray
              ? a.Sa.subarray(0, a.Xa)
              : new Uint8Array(a.Sa)
            : new Uint8Array(0);
        },
        Ta: {
          jb(a) {
            var b = {};
            b.Rc = 8192 === (a.mode & 61440) ? a.id : 1;
            b.qc = a.id;
            b.mode = a.mode;
            b.dd = 1;
            b.uid = 0;
            b.Yc = 0;
            b.Hb = a.Hb;
            b.size = U(a.mode)
              ? 4096
              : 32768 === (a.mode & 61440)
              ? a.Xa
              : 40960 === (a.mode & 61440)
              ? a.link.length
              : 0;
            b.Kc = new Date(a.timestamp);
            b.cd = new Date(a.timestamp);
            b.Pc = new Date(a.timestamp);
            b.Lc = 4096;
            b.Mc = Math.ceil(b.size / b.Lc);
            return b;
          },
          fb(a, b) {
            void 0 !== b.mode && (a.mode = b.mode);
            void 0 !== b.timestamp && (a.timestamp = b.timestamp);
            if (void 0 !== b.size && ((b = b.size), a.Xa != b))
              if (0 == b) (a.Sa = null), (a.Xa = 0);
              else {
                var c = a.Sa;
                a.Sa = new Uint8Array(b);
                c && a.Sa.set(c.subarray(0, Math.min(b, a.Xa)));
                a.Xa = b;
              }
          },
          Db() {
            throw cc[44];
          },
          Rb(a, b, c, d) {
            return R.createNode(a, b, c, d);
          },
          yc(a, b, c) {
            if (U(a.mode)) {
              try {
                var d = dc(b, c);
              } catch (f) {}
              if (d) for (var e in d.Sa) throw new Q(55);
            }
            delete a.parent.Sa[a.name];
            a.parent.timestamp = Date.now();
            a.name = c;
            b.Sa[c] = a;
            b.timestamp = a.parent.timestamp;
            a.parent = b;
          },
          Xb(a, b) {
            delete a.Sa[b];
            a.timestamp = Date.now();
          },
          Bc(a, b) {
            var c = dc(a, b),
              d;
            for (d in c.Sa) throw new Q(55);
            delete a.Sa[b];
            a.timestamp = Date.now();
          },
          wc(a) {
            var b = [".", ".."],
              c;
            for (c of Object.keys(a.Sa)) b.push(c);
            return b;
          },
          Ub(a, b, c) {
            a = R.createNode(a, b, 41471, 0);
            a.link = c;
            return a;
          },
          Ib(a) {
            if (40960 !== (a.mode & 61440)) throw new Q(28);
            return a.link;
          },
        },
        Ua: {
          read(a, b, c, d, e) {
            var f = a.node.Sa;
            if (e >= a.node.Xa) return 0;
            a = Math.min(a.node.Xa - e, d);
            if (8 < a && f.subarray) b.set(f.subarray(e, e + a), c);
            else for (d = 0; d < a; d++) b[c + d] = f[e + d];
            return a;
          },
          write(a, b, c, d, e, f) {
            b.buffer === h().buffer && (f = !1);
            if (!d) return 0;
            a = a.node;
            a.timestamp = Date.now();
            if (b.subarray && (!a.Sa || a.Sa.subarray)) {
              if (f) return (a.Sa = b.subarray(c, c + d)), (a.Xa = d);
              if (0 === a.Xa && 0 === e)
                return (a.Sa = b.slice(c, c + d)), (a.Xa = d);
              if (e + d <= a.Xa) return a.Sa.set(b.subarray(c, c + d), e), d;
            }
            $b(a, e + d);
            if (a.Sa.subarray && b.subarray) a.Sa.set(b.subarray(c, c + d), e);
            else for (f = 0; f < d; f++) a.Sa[e + f] = b[c + f];
            a.Xa = Math.max(a.Xa, e + d);
            return d;
          },
          sb(a, b, c) {
            1 === c
              ? (b += a.position)
              : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.Xa);
            if (0 > b) throw new Q(28);
            return b;
          },
          Cb(a, b, c) {
            $b(a.node, b + c);
            a.node.Xa = Math.max(a.node.Xa, b + c);
          },
          Eb(a, b, c, d, e) {
            if (32768 !== (a.node.mode & 61440)) throw new Q(43);
            a = a.node.Sa;
            if (e & 2 || a.buffer !== h().buffer) {
              if (0 < c || c + b < a.length)
                a = a.subarray
                  ? a.subarray(c, c + b)
                  : Array.prototype.slice.call(a, c, c + b);
              c = !0;
              b = Zb(b);
              if (!b) throw new Q(48);
              h().set(a, b);
            } else (c = !1), (b = a.byteOffset);
            return { Wa: b, bb: c };
          },
          Sb(a, b, c, d) {
            R.Ua.write(a, b, 0, d, c, !1);
            return 0;
          },
        },
      },
      ec = (a, b, c) => {
        var d = `al ${a}`;
        ta(
          a,
          (e) => {
            b(new Uint8Array(e));
            d && Ta(d);
          },
          () => {
            if (c) c();
            else throw `Loading data file "${a}" failed.`;
          },
        );
        d && Sa(d);
      },
      fc = D.preloadPlugins || [],
      gc = (a, b, c, d) => {
        "undefined" != typeof Browser && (F ? tb() : ub());
        var e = !1;
        fc.forEach((f) => {
          !e && f.canHandle(b) && (f.handle(a, b, c, d), (e = !0));
        });
        return e;
      },
      ic = (a, b, c, d, e, f, g, l, m, n) => {
        function t(k) {
          function q(v) {
            n?.();
            l || hc(a, b, v, d, e, m);
            f?.();
            Ta(r);
          }
          gc(k, p, q, () => {
            g?.();
            Ta(r);
          }) || q(k);
        }
        var p = b ? Mb(Hb(a + "/" + b)) : a,
          r = `cp ${p}`;
        Sa(r);
        "string" == typeof c ? ec(c, t, g) : t(c);
      },
      jc = (a, b) => {
        var c = 0;
        a && (c |= 365);
        b && (c |= 146);
        return c;
      },
      kc = null,
      lc = {},
      qb = [],
      mc = 1,
      nc = null,
      Na = !0,
      Q = class {
        constructor(a) {
          this.name = "ErrnoError";
          this.eb = a;
        }
      },
      cc = {};
    function oc(a, b = {}) {
      a = Mb(a);
      if (!a) return { path: "", node: null };
      b = Object.assign({ oc: !0, ec: 0 }, b);
      if (8 < b.ec) throw new Q(32);
      a = a.split("/").filter((g) => !!g);
      for (var c = kc, d = "/", e = 0; e < a.length; e++) {
        var f = e === a.length - 1;
        if (f && b.parent) break;
        c = dc(c, a[e]);
        d = Hb(d + "/" + a[e]);
        c.Fb && (!f || (f && b.oc)) && (c = c.Fb.root);
        if (!f || b.Mb)
          for (f = 0; 40960 === (c.mode & 61440); )
            if (
              ((c = pc(d)),
              (d = Mb(Ib(d), c)),
              (c = oc(d, { ec: b.ec + 1 }).node),
              40 < f++)
            )
              throw new Q(32);
      }
      return { path: d, node: c };
    }
    function qc(a) {
      for (var b; ; ) {
        if (a === a.parent)
          return (
            (a = a.ob.tc),
            b ? ("/" !== a[a.length - 1] ? `${a}/${b}` : a + b) : a
          );
        b = b ? `${a.name}/${b}` : a.name;
        a = a.parent;
      }
    }
    function rc(a, b) {
      for (var c = 0, d = 0; d < b.length; d++)
        c = ((c << 5) - c + b.charCodeAt(d)) | 0;
      return ((a + c) >>> 0) % nc.length;
    }
    function dc(a, b) {
      var c = U(a.mode) ? ((c = sc(a, "x")) ? c : a.Ta.Db ? 0 : 2) : 54;
      if (c) throw new Q(c);
      for (c = nc[rc(a.id, b)]; c; c = c.Ab) {
        var d = c.name;
        if (c.parent.id === a.id && d === b) return c;
      }
      return a.Ta.Db(a, b);
    }
    function bc(a, b, c, d) {
      a = new tc(a, b, c, d);
      b = rc(a.parent.id, a.name);
      a.Ab = nc[b];
      return (nc[b] = a);
    }
    function U(a) {
      return 16384 === (a & 61440);
    }
    function uc(a) {
      var b = ["r", "w", "rw"][a & 3];
      a & 512 && (b += "w");
      return b;
    }
    function sc(a, b) {
      if (Na) return 0;
      if (!b.includes("r") || a.mode & 292) {
        if (
          (b.includes("w") && !(a.mode & 146)) ||
          (b.includes("x") && !(a.mode & 73))
        )
          return 2;
      } else return 2;
      return 0;
    }
    function vc(a, b) {
      try {
        return dc(a, b), 20;
      } catch (c) {}
      return sc(a, "wx");
    }
    function wc() {
      for (var a = 0; 4096 >= a; a++) if (!qb[a]) return a;
      throw new Q(33);
    }
    function xc(a) {
      a = qb[a];
      if (!a) throw new Q(8);
      return a;
    }
    function yc(a) {
      var b = -1;
      zc ||
        ((zc = function () {
          this.Tb = {};
        }),
        (zc.prototype = {}),
        Object.defineProperties(zc.prototype, {
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
              return this.Tb.flags;
            },
            set(c) {
              this.Tb.flags = c;
            },
          },
          position: {
            get() {
              return this.Tb.position;
            },
            set(c) {
              this.Tb.position = c;
            },
          },
        }));
      a = Object.assign(new zc(), a);
      -1 == b && (b = wc());
      a.rb = b;
      return (qb[b] = a);
    }
    var ac = {
      open(a) {
        a.Ua = lc[a.node.Hb].Ua;
        a.Ua.open?.(a);
      },
      sb() {
        throw new Q(70);
      },
    };
    function Ub(a, b) {
      lc[a] = { Ua: b };
    }
    function Ac(a, b) {
      var c = "/" === b;
      if (c && kc) throw new Q(10);
      if (!c && b) {
        var d = oc(b, { oc: !1 });
        b = d.path;
        d = d.node;
        if (d.Fb) throw new Q(10);
        if (!U(d.mode)) throw new Q(54);
      }
      b = { type: a, Jd: {}, tc: b, bd: [] };
      a = a.ob(b);
      a.ob = b;
      b.root = a;
      c ? (kc = a) : d && ((d.Fb = b), d.ob && d.ob.bd.push(b));
    }
    function Bc(a, b, c) {
      var d = oc(a, { parent: !0 }).node;
      a = Jb(a);
      if (!a || "." === a || ".." === a) throw new Q(28);
      var e = vc(d, a);
      if (e) throw new Q(e);
      if (!d.Ta.Rb) throw new Q(63);
      return d.Ta.Rb(d, a, b, c);
    }
    function Cc(a) {
      return Bc(a, 16895, 0);
    }
    function Dc(a, b, c) {
      "undefined" == typeof c && ((c = b), (b = 438));
      return Bc(a, b | 8192, c);
    }
    function La(a, b) {
      if (!Mb(a)) throw new Q(44);
      var c = oc(b, { parent: !0 }).node;
      if (!c) throw new Q(44);
      b = Jb(b);
      var d = vc(c, b);
      if (d) throw new Q(d);
      if (!c.Ta.Ub) throw new Q(63);
      c.Ta.Ub(c, b, a);
    }
    function Ec(a) {
      var b = oc(a, { parent: !0 }).node;
      if (!b) throw new Q(44);
      var c = Jb(a);
      a = dc(b, c);
      a: {
        try {
          var d = dc(b, c);
        } catch (f) {
          d = f.eb;
          break a;
        }
        var e = sc(b, "wx");
        d = e ? e : U(d.mode) ? 31 : 0;
      }
      if (d) throw new Q(d);
      if (!b.Ta.Xb) throw new Q(63);
      if (a.Fb) throw new Q(10);
      b.Ta.Xb(b, c);
      b = rc(a.parent.id, a.name);
      if (nc[b] === a) nc[b] = a.Ab;
      else
        for (b = nc[b]; b; ) {
          if (b.Ab === a) {
            b.Ab = a.Ab;
            break;
          }
          b = b.Ab;
        }
    }
    function pc(a) {
      a = oc(a).node;
      if (!a) throw new Q(44);
      if (!a.Ta.Ib) throw new Q(28);
      return Mb(qc(a.parent), a.Ta.Ib(a));
    }
    function Fc(a, b) {
      a = oc(a, { Mb: !b }).node;
      if (!a) throw new Q(44);
      if (!a.Ta.jb) throw new Q(63);
      return a.Ta.jb(a);
    }
    function Gc(a) {
      return Fc(a, !0);
    }
    function Hc(a, b) {
      a = "string" == typeof a ? oc(a, { Mb: !0 }).node : a;
      if (!a.Ta.fb) throw new Q(63);
      a.Ta.fb(a, {
        mode: (b & 4095) | (a.mode & -4096),
        timestamp: Date.now(),
      });
    }
    function Ma(a, b, c) {
      if ("" === a) throw new Q(44);
      if ("string" == typeof b) {
        var d = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[b];
        if ("undefined" == typeof d)
          throw Error(`Unknown file open mode: ${b}`);
        b = d;
      }
      c = b & 64 ? (("undefined" == typeof c ? 438 : c) & 4095) | 32768 : 0;
      if ("object" == typeof a) var e = a;
      else {
        a = Hb(a);
        try {
          e = oc(a, { Mb: !(b & 131072) }).node;
        } catch (f) {}
      }
      d = !1;
      if (b & 64)
        if (e) {
          if (b & 128) throw new Q(20);
        } else (e = Bc(a, c, 0)), (d = !0);
      if (!e) throw new Q(44);
      8192 === (e.mode & 61440) && (b &= -513);
      if (b & 65536 && !U(e.mode)) throw new Q(54);
      if (
        !d &&
        (c = e
          ? 40960 === (e.mode & 61440)
            ? 32
            : U(e.mode) && ("r" !== uc(b) || b & 512)
            ? 31
            : sc(e, uc(b))
          : 44)
      )
        throw new Q(c);
      if (b & 512 && !d) {
        c = e;
        c = "string" == typeof c ? oc(c, { Mb: !0 }).node : c;
        if (!c.Ta.fb) throw new Q(63);
        if (U(c.mode)) throw new Q(31);
        if (32768 !== (c.mode & 61440)) throw new Q(28);
        if ((d = sc(c, "w"))) throw new Q(d);
        c.Ta.fb(c, { size: 0, timestamp: Date.now() });
      }
      b &= -131713;
      e = yc({
        node: e,
        path: qc(e),
        flags: b,
        seekable: !0,
        position: 0,
        Ua: e.Ua,
        ud: [],
        error: !1,
      });
      e.Ua.open && e.Ua.open(e);
      !D.logReadFiles || b & 1 || ((Ic ||= {}), a in Ic || (Ic[a] = 1));
      return e;
    }
    function rb(a) {
      if (null === a.rb) throw new Q(8);
      a.$b && (a.$b = null);
      try {
        a.Ua.close && a.Ua.close(a);
      } catch (b) {
        throw b;
      } finally {
        qb[a.rb] = null;
      }
      a.rb = null;
    }
    function Jc(a, b, c) {
      if (null === a.rb) throw new Q(8);
      if (!a.seekable || !a.Ua.sb) throw new Q(70);
      if (0 != c && 1 != c && 2 != c) throw new Q(28);
      a.position = a.Ua.sb(a, b, c);
      a.ud = [];
    }
    function Kc(a, b, c, d, e, f) {
      if (0 > d || 0 > e) throw new Q(28);
      if (null === a.rb) throw new Q(8);
      if (0 === (a.flags & 2097155)) throw new Q(8);
      if (U(a.node.mode)) throw new Q(31);
      if (!a.Ua.write) throw new Q(28);
      a.seekable && a.flags & 1024 && Jc(a, 0, 2);
      var g = "undefined" != typeof e;
      if (!g) e = a.position;
      else if (!a.seekable) throw new Q(70);
      b = a.Ua.write(a, b, c, d, e, f);
      g || (a.position += b);
      return b;
    }
    var Ja;
    function Lc(a, b) {
      a = "string" == typeof a ? a : qc(a);
      for (b = b.split("/").reverse(); b.length; ) {
        var c = b.pop();
        if (c) {
          var d = Hb(a + "/" + c);
          try {
            Cc(d);
          } catch (e) {}
          a = d;
        }
      }
      return d;
    }
    function Mc(a, b, c, d) {
      a = Hb(("string" == typeof a ? a : qc(a)) + "/" + b);
      c = jc(c, d);
      return Bc(a, ((void 0 !== c ? c : 438) & 4095) | 32768, 0);
    }
    function hc(a, b, c, d, e, f) {
      var g = b;
      a &&
        ((a = "string" == typeof a ? a : qc(a)), (g = b ? Hb(a + "/" + b) : a));
      a = jc(d, e);
      g = Bc(g, ((void 0 !== a ? a : 438) & 4095) | 32768, 0);
      if (c) {
        if ("string" == typeof c) {
          b = Array(c.length);
          d = 0;
          for (e = c.length; d < e; ++d) b[d] = c.charCodeAt(d);
          c = b;
        }
        Hc(g, a | 146);
        b = Ma(g, 577);
        Kc(b, c, 0, c.length, 0, f);
        rb(b);
        Hc(g, a);
      }
    }
    function Ka(a, b, c, d) {
      a = Hb(("string" == typeof a ? a : qc(a)) + "/" + b);
      b = jc(!!c, !!d);
      Ka.sc || (Ka.sc = 64);
      var e = (Ka.sc++ << 8) | 0;
      Ub(e, {
        open(f) {
          f.seekable = !1;
        },
        close() {
          d?.buffer?.length && d(10);
        },
        read(f, g, l, m) {
          for (var n = 0, t = 0; t < m; t++) {
            try {
              var p = c();
            } catch (r) {
              throw new Q(29);
            }
            if (void 0 === p && 0 === n) throw new Q(6);
            if (null === p || void 0 === p) break;
            n++;
            g[l + t] = p;
          }
          n && (f.node.timestamp = Date.now());
          return n;
        },
        write(f, g, l, m) {
          for (var n = 0; n < m; n++)
            try {
              d(g[l + n]);
            } catch (t) {
              throw new Q(29);
            }
          m && (f.node.timestamp = Date.now());
          return n;
        },
      });
      return Dc(a, b, e);
    }
    function Nc(a) {
      if (!(a.$c || a.ad || a.link || a.Sa)) {
        if ("undefined" != typeof XMLHttpRequest)
          throw Error(
            "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
          );
        if (sa)
          try {
            (a.Sa = Rb(sa(a.url), !0)), (a.Xa = a.Sa.length);
          } catch (b) {
            throw new Q(29);
          }
        else throw Error("Cannot load without read() or XMLHttpRequest.");
      }
    }
    function Oc(a, b, c, d, e) {
      function f() {
        this.bc = !1;
        this.Lb = [];
      }
      function g(p, r, k, q, v) {
        p = p.node.Sa;
        if (v >= p.length) return 0;
        q = Math.min(p.length - v, q);
        if (p.slice) for (var z = 0; z < q; z++) r[k + z] = p[v + z];
        else for (z = 0; z < q; z++) r[k + z] = p.get(v + z);
        return q;
      }
      f.prototype.get = function (p) {
        if (!(p > this.length - 1 || 0 > p)) {
          var r = p % this.lc;
          return this.Ob((p / this.lc) | 0)[r];
        }
      };
      f.prototype.jd = function (p) {
        this.Ob = p;
      };
      f.prototype.jc = function () {
        var p = new XMLHttpRequest();
        p.open("HEAD", c, !1);
        p.send(null);
        if (!((200 <= p.status && 300 > p.status) || 304 === p.status))
          throw Error("Couldn't load " + c + ". Status: " + p.status);
        var r = Number(p.getResponseHeader("Content-length")),
          k,
          q = (k = p.getResponseHeader("Accept-Ranges")) && "bytes" === k;
        p = (k = p.getResponseHeader("Content-Encoding")) && "gzip" === k;
        var v = 1048576;
        q || (v = r);
        var z = this;
        z.jd((L) => {
          var J = L * v,
            y = (L + 1) * v - 1;
          y = Math.min(y, r - 1);
          if ("undefined" == typeof z.Lb[L]) {
            var S = z.Lb;
            if (J > y)
              throw Error(
                "invalid range (" + J + ", " + y + ") or no bytes requested!",
              );
            if (y > r - 1)
              throw Error("only " + r + " bytes available! programmer error!");
            var C = new XMLHttpRequest();
            C.open("GET", c, !1);
            r !== v && C.setRequestHeader("Range", "bytes=" + J + "-" + y);
            C.responseType = "arraybuffer";
            C.overrideMimeType &&
              C.overrideMimeType("text/plain; charset=x-user-defined");
            C.send(null);
            if (!((200 <= C.status && 300 > C.status) || 304 === C.status))
              throw Error("Couldn't load " + c + ". Status: " + C.status);
            J =
              void 0 !== C.response
                ? new Uint8Array(C.response || [])
                : Rb(C.responseText || "", !0);
            S[L] = J;
          }
          if ("undefined" == typeof z.Lb[L]) throw Error("doXHR failed!");
          return z.Lb[L];
        });
        if (p || !r)
          (v = r = 1),
            (v = r = this.Ob(0).length),
            va(
              "LazyFiles on gzip forces download of the whole file when length is accessed",
            );
        this.Hc = r;
        this.Gc = v;
        this.bc = !0;
      };
      if ("undefined" != typeof XMLHttpRequest) {
        var l = new f();
        Object.defineProperties(l, {
          length: {
            get: function () {
              this.bc || this.jc();
              return this.Hc;
            },
          },
          lc: {
            get: function () {
              this.bc || this.jc();
              return this.Gc;
            },
          },
        });
        var m = void 0;
      } else (m = c), (l = void 0);
      var n = Mc(a, b, d, e);
      l ? (n.Sa = l) : m && ((n.Sa = null), (n.url = m));
      Object.defineProperties(n, {
        Xa: {
          get: function () {
            return this.Sa.length;
          },
        },
      });
      var t = {};
      Object.keys(n.Ua).forEach((p) => {
        var r = n.Ua[p];
        t[p] = function () {
          Nc(n);
          return r.apply(null, arguments);
        };
      });
      t.read = (p, r, k, q, v) => {
        Nc(n);
        return g(p, r, k, q, v);
      };
      t.Eb = (p, r, k) => {
        Nc(n);
        var q = Zb(r);
        if (!q) throw new Q(48);
        g(p, h(), q, r, k);
        return { Wa: q, bb: !0 };
      };
      n.Ua = t;
      return n;
    }
    var Pc = {},
      zc,
      Ic,
      K = (a, b) => (a ? Ob(w(), a, b) : "");
    function Qc(a, b, c) {
      if ("/" === b.charAt(0)) return b;
      a = -100 === a ? "/" : xc(a).path;
      if (0 == b.length) {
        if (!c) throw new Q(44);
        return a;
      }
      return Hb(a + "/" + b);
    }
    function Rc(a, b, c) {
      a = a(b);
      A()[c >> 2] = a.Rc;
      A()[(c + 4) >> 2] = a.mode;
      B()[(c + 8) >> 2] = a.dd;
      A()[(c + 12) >> 2] = a.uid;
      A()[(c + 16) >> 2] = a.Yc;
      A()[(c + 20) >> 2] = a.Hb;
      H = [
        a.size >>> 0,
        ((G = a.size),
        1 <= +Math.abs(G)
          ? 0 < G
            ? +Math.floor(G / 4294967296) >>> 0
            : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      A()[(c + 24) >> 2] = H[0];
      A()[(c + 28) >> 2] = H[1];
      A()[(c + 32) >> 2] = 4096;
      A()[(c + 36) >> 2] = a.Mc;
      b = a.Kc.getTime();
      var d = a.cd.getTime(),
        e = a.Pc.getTime();
      H = [
        Math.floor(b / 1e3) >>> 0,
        ((G = Math.floor(b / 1e3)),
        1 <= +Math.abs(G)
          ? 0 < G
            ? +Math.floor(G / 4294967296) >>> 0
            : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      A()[(c + 40) >> 2] = H[0];
      A()[(c + 44) >> 2] = H[1];
      B()[(c + 48) >> 2] = (b % 1e3) * 1e3;
      H = [
        Math.floor(d / 1e3) >>> 0,
        ((G = Math.floor(d / 1e3)),
        1 <= +Math.abs(G)
          ? 0 < G
            ? +Math.floor(G / 4294967296) >>> 0
            : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      A()[(c + 56) >> 2] = H[0];
      A()[(c + 60) >> 2] = H[1];
      B()[(c + 64) >> 2] = (d % 1e3) * 1e3;
      H = [
        Math.floor(e / 1e3) >>> 0,
        ((G = Math.floor(e / 1e3)),
        1 <= +Math.abs(G)
          ? 0 < G
            ? +Math.floor(G / 4294967296) >>> 0
            : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      A()[(c + 72) >> 2] = H[0];
      A()[(c + 76) >> 2] = H[1];
      B()[(c + 80) >> 2] = (e % 1e3) * 1e3;
      H = [
        a.qc >>> 0,
        ((G = a.qc),
        1 <= +Math.abs(G)
          ? 0 < G
            ? +Math.floor(G / 4294967296) >>> 0
            : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      A()[(c + 88) >> 2] = H[0];
      A()[(c + 92) >> 2] = H[1];
      return 0;
    }
    var Sc = void 0;
    function Tc(a, b) {
      if (F) return O(3, 1, a, b);
      try {
        var c = xc(a);
        return Rc(Fc, c.path, b);
      } catch (d) {
        if ("undefined" == typeof Pc || "ErrnoError" !== d.name) throw d;
        return -d.eb;
      }
    }
    function Uc(a, b, c, d) {
      if (F) return O(5, 1, a, b, c, d);
      try {
        b = K(b);
        var e = d & 256;
        b = Qc(a, b, d & 4096);
        return Rc(e ? Gc : Fc, b, c);
      } catch (f) {
        if ("undefined" == typeof Pc || "ErrnoError" !== f.name) throw f;
        return -f.eb;
      }
    }
    function Vc(a, b, c, d) {
      if (F) return O(6, 1, a, b, c, d);
      Sc = d;
      try {
        b = K(b);
        b = Qc(a, b);
        if (d) {
          var e = A()[+Sc >> 2];
          Sc += 4;
          var f = e;
        } else f = 0;
        return Ma(b, c, f).rb;
      } catch (g) {
        if ("undefined" == typeof Pc || "ErrnoError" !== g.name) throw g;
        return -g.eb;
      }
    }
    function Wc(a, b) {
      if (F) return O(7, 1, a, b);
      try {
        return (a = K(a)), Rc(Fc, a, b);
      } catch (c) {
        if ("undefined" == typeof Pc || "ErrnoError" !== c.name) throw c;
        return -c.eb;
      }
    }
    var Xc = {},
      Yc = (a) => {
        for (; a.length; ) {
          var b = a.pop();
          a.pop()(b);
        }
      };
    function Zc(a) {
      return this.fromWireType(A()[a >> 2]);
    }
    var $c = {},
      ad = {},
      bd = {},
      cd,
      ed = (a, b, c) => {
        function d(l) {
          l = c(l);
          if (l.length !== a.length)
            throw new cd("Mismatched type converter count");
          for (var m = 0; m < a.length; ++m) dd(a[m], l[m]);
        }
        a.forEach(function (l) {
          bd[l] = b;
        });
        var e = Array(b.length),
          f = [],
          g = 0;
        b.forEach((l, m) => {
          ad.hasOwnProperty(l)
            ? (e[m] = ad[l])
            : (f.push(l),
              $c.hasOwnProperty(l) || ($c[l] = []),
              $c[l].push(() => {
                e[m] = ad[l];
                ++g;
                g === f.length && d(e);
              }));
        });
        0 === f.length && d(e);
      },
      fd,
      V = (a) => {
        for (var b = ""; w()[a]; ) b += fd[w()[a++]];
        return b;
      },
      W;
    function gd(a, b, c = {}) {
      var d = b.name;
      if (!a)
        throw new W(`type "${d}" must have a positive integer typeid pointer`);
      if (ad.hasOwnProperty(a)) {
        if (c.Zc) return;
        throw new W(`Cannot register type '${d}' twice`);
      }
      ad[a] = b;
      delete bd[a];
      $c.hasOwnProperty(a) &&
        ((b = $c[a]), delete $c[a], b.forEach((e) => e()));
    }
    function dd(a, b, c = {}) {
      if (!("argPackAdvance" in b))
        throw new TypeError(
          "registerType registeredInstance requires argPackAdvance",
        );
      return gd(a, b, c);
    }
    var hd = (a) => {
        throw new W(a.Ra.Ya.Va.name + " instance already deleted");
      },
      jd = !1,
      kd = () => {},
      ld = (a, b, c) => {
        if (b === c) return a;
        if (void 0 === c.cb) return null;
        a = ld(a, b, c.cb);
        return null === a ? null : c.Sc(a);
      },
      md = {},
      nd = [],
      od = () => {
        for (; nd.length; ) {
          var a = nd.pop();
          a.Ra.yb = !1;
          a["delete"]();
        }
      },
      pd,
      qd = {},
      rd = (a, b) => {
        if (void 0 === b) throw new W("ptr should not be undefined");
        for (; a.cb; ) (b = a.Jb(b)), (a = a.cb);
        return qd[b];
      },
      td = (a, b) => {
        if (!b.Ya || !b.Wa)
          throw new cd("makeClassHandle requires ptr and ptrType");
        if (!!b.gb !== !!b.Za)
          throw new cd("Both smartPtrType and smartPtr must be specified");
        b.count = { value: 1 };
        return sd(Object.create(a, { Ra: { value: b, writable: !0 } }));
      },
      sd = (a) => {
        if ("undefined" === typeof FinalizationRegistry)
          return (sd = (b) => b), a;
        jd = new FinalizationRegistry((b) => {
          b = b.Ra;
          --b.count.value;
          0 === b.count.value && (b.Za ? b.gb.mb(b.Za) : b.Ya.Va.mb(b.Wa));
        });
        sd = (b) => {
          var c = b.Ra;
          c.Za && jd.register(b, { Ra: c }, b);
          return b;
        };
        kd = (b) => {
          jd.unregister(b);
        };
        return sd(a);
      };
    function ud() {}
    var vd = (a, b) => Object.defineProperty(b, "name", { value: a }),
      wd = (a, b, c) => {
        if (void 0 === a[b].ab) {
          var d = a[b];
          a[b] = function () {
            if (!a[b].ab.hasOwnProperty(arguments.length))
              throw new W(
                `Function '${c}' called with an invalid number of arguments (${arguments.length}) - expects one of (${a[b].ab})!`,
              );
            return a[b].ab[arguments.length].apply(this, arguments);
          };
          a[b].ab = [];
          a[b].ab[d.Kb] = d;
        }
      },
      xd = (a, b, c) => {
        if (D.hasOwnProperty(a)) {
          if (void 0 === c || (void 0 !== D[a].ab && void 0 !== D[a].ab[c]))
            throw new W(`Cannot register public name '${a}' twice`);
          wd(D, a, a);
          if (D.hasOwnProperty(c))
            throw new W(
              `Cannot register multiple overloads of a function with the same number of arguments (${c})!`,
            );
          D[a].ab[c] = b;
        } else (D[a] = b), void 0 !== c && (D[a].Id = c);
      },
      yd = (a) => {
        if (void 0 === a) return "_unknown";
        a = a.replace(/[^a-zA-Z0-9_]/g, "$");
        var b = a.charCodeAt(0);
        return 48 <= b && 57 >= b ? `_${a}` : a;
      };
    function zd(a, b, c, d, e, f, g, l) {
      this.name = a;
      this.constructor = b;
      this.zb = c;
      this.mb = d;
      this.cb = e;
      this.Uc = f;
      this.Jb = g;
      this.Sc = l;
      this.fd = [];
    }
    var Ad = (a, b, c) => {
      for (; b !== c; ) {
        if (!b.Jb)
          throw new W(
            `Expected null or instance of ${c.name}, got an instance of ${b.name}`,
          );
        a = b.Jb(a);
        b = b.cb;
      }
      return a;
    };
    function Bd(a, b) {
      if (null === b) {
        if (this.ac) throw new W(`null is not a valid ${this.name}`);
        return 0;
      }
      if (!b.Ra) throw new W(`Cannot pass "${Cd(b)}" as a ${this.name}`);
      if (!b.Ra.Wa)
        throw new W(
          `Cannot pass deleted object as a pointer of type ${this.name}`,
        );
      return Ad(b.Ra.Wa, b.Ra.Ya.Va, this.Va);
    }
    function Dd(a, b) {
      if (null === b) {
        if (this.ac) throw new W(`null is not a valid ${this.name}`);
        if (this.Qb) {
          var c = this.dc();
          null !== a && a.push(this.mb, c);
          return c;
        }
        return 0;
      }
      if (!b || !b.Ra) throw new W(`Cannot pass "${Cd(b)}" as a ${this.name}`);
      if (!b.Ra.Wa)
        throw new W(
          `Cannot pass deleted object as a pointer of type ${this.name}`,
        );
      if (!this.Pb && b.Ra.Ya.Pb)
        throw new W(
          `Cannot convert argument of type ${
            b.Ra.gb ? b.Ra.gb.name : b.Ra.Ya.name
          } to parameter type ${this.name}`,
        );
      c = Ad(b.Ra.Wa, b.Ra.Ya.Va, this.Va);
      if (this.Qb) {
        if (void 0 === b.Ra.Za)
          throw new W("Passing raw pointer to smart pointer is illegal");
        switch (this.nd) {
          case 0:
            if (b.Ra.gb === this) c = b.Ra.Za;
            else
              throw new W(
                `Cannot convert argument of type ${
                  b.Ra.gb ? b.Ra.gb.name : b.Ra.Ya.name
                } to parameter type ${this.name}`,
              );
            break;
          case 1:
            c = b.Ra.Za;
            break;
          case 2:
            if (b.Ra.gb === this) c = b.Ra.Za;
            else {
              var d = b.clone();
              c = this.gd(
                c,
                Ed(() => d["delete"]()),
              );
              null !== a && a.push(this.mb, c);
            }
            break;
          default:
            throw new W("Unsupporting sharing policy");
        }
      }
      return c;
    }
    function Fd(a, b) {
      if (null === b) {
        if (this.ac) throw new W(`null is not a valid ${this.name}`);
        return 0;
      }
      if (!b.Ra) throw new W(`Cannot pass "${Cd(b)}" as a ${this.name}`);
      if (!b.Ra.Wa)
        throw new W(
          `Cannot pass deleted object as a pointer of type ${this.name}`,
        );
      if (b.Ra.Ya.Pb)
        throw new W(
          `Cannot convert argument of type ${b.Ra.Ya.name} to parameter type ${this.name}`,
        );
      return Ad(b.Ra.Wa, b.Ra.Ya.Va, this.Va);
    }
    function Gd(a) {
      return this.fromWireType(B()[a >> 2]);
    }
    function Hd(a, b, c, d, e, f, g, l, m, n, t) {
      this.name = a;
      this.Va = b;
      this.ac = c;
      this.Pb = d;
      this.Qb = e;
      this.ed = f;
      this.nd = g;
      this.vc = l;
      this.dc = m;
      this.gd = n;
      this.mb = t;
      e || void 0 !== b.cb
        ? (this.toWireType = Dd)
        : ((this.toWireType = d ? Bd : Fd), (this.ib = null));
    }
    var Id = (a, b, c) => {
        if (!D.hasOwnProperty(a))
          throw new cd("Replacing nonexistant public symbol");
        void 0 !== D[a].ab && void 0 !== c
          ? (D[a].ab[c] = b)
          : ((D[a] = b), (D[a].Kb = c));
      },
      Jd = (a, b) => {
        var c = [];
        return function () {
          c.length = 0;
          Object.assign(c, arguments);
          if (a.includes("j")) {
            var d = D["dynCall_" + a];
            d = c && c.length ? d.apply(null, [b].concat(c)) : d.call(null, b);
          } else d = Cb(b).apply(null, c);
          return d;
        };
      },
      Kd = (a, b) => {
        a = V(a);
        var c = a.includes("j") ? Jd(a, b) : Cb(b);
        if ("function" != typeof c)
          throw new W(`unknown function pointer with signature ${a}: ${b}`);
        return c;
      },
      Ld,
      Od = (a) => {
        a = Md(a);
        var b = V(a);
        Nd(a);
        return b;
      },
      Pd = (a, b) => {
        function c(f) {
          e[f] ||
            ad[f] ||
            (bd[f] ? bd[f].forEach(c) : (d.push(f), (e[f] = !0)));
        }
        var d = [],
          e = {};
        b.forEach(c);
        throw new Ld(`${a}: ` + d.map(Od).join([", "]));
      },
      Qd = (a, b) => {
        for (var c = [], d = 0; d < a; d++) c.push(B()[(b + 4 * d) >> 2]);
        return c;
      };
    function Rd(a) {
      for (var b = 1; b < a.length; ++b)
        if (null !== a[b] && void 0 === a[b].ib) return !0;
      return !1;
    }
    function Sd(a, b, c, d, e) {
      var f = b.length;
      if (2 > f)
        throw new W(
          "argTypes array size mismatch! Must at least get return value and 'this' types!",
        );
      var g = null !== b[1] && null !== c,
        l = Rd(b),
        m = "void" !== b[0].name,
        n = f - 2,
        t = Array(n),
        p = [],
        r = [];
      return vd(a, function () {
        if (arguments.length !== n)
          throw new W(
            `function ${a} called with ${arguments.length} arguments, expected ${n}`,
          );
        r.length = 0;
        p.length = g ? 2 : 1;
        p[0] = e;
        if (g) {
          var k = b[1].toWireType(r, this);
          p[1] = k;
        }
        for (var q = 0; q < n; ++q)
          (t[q] = b[q + 2].toWireType(r, arguments[q])), p.push(t[q]);
        q = d.apply(null, p);
        if (l) Yc(r);
        else
          for (var v = g ? 1 : 2; v < b.length; v++) {
            var z = 1 === v ? k : t[v - 2];
            null !== b[v].ib && b[v].ib(z);
          }
        k = m ? b[0].fromWireType(q) : void 0;
        return k;
      });
    }
    var Td = (a) => {
      a = a.trim();
      const b = a.indexOf("(");
      return -1 !== b ? a.substr(0, b) : a;
    };
    class Ud {
      constructor() {
        this.bb = [void 0];
        this.Zb = [];
      }
      get(a) {
        return this.bb[a];
      }
      has(a) {
        return void 0 !== this.bb[a];
      }
      Cb(a) {
        var b = this.Zb.pop() || this.bb.length;
        this.bb[b] = a;
        return b;
      }
    }
    var X = new Ud(),
      Vd = (a) => {
        a >= X.zc && 0 === --X.get(a).xc && ((X.bb[a] = void 0), X.Zb.push(a));
      },
      Wd = (a) => {
        if (!a) throw new W("Cannot use deleted val. handle = " + a);
        return X.get(a).value;
      },
      Ed = (a) => {
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
            return X.Cb({ xc: 1, value: a });
        }
      },
      Xd = {
        name: "emscripten::val",
        fromWireType: (a) => {
          var b = Wd(a);
          Vd(a);
          return b;
        },
        toWireType: (a, b) => Ed(b),
        argPackAdvance: 8,
        readValueFromPointer: Zc,
        ib: null,
      },
      Cd = (a) => {
        if (null === a) return "null";
        var b = typeof a;
        return "object" === b || "array" === b || "function" === b
          ? a.toString()
          : "" + a;
      },
      Yd = (a, b) => {
        switch (b) {
          case 4:
            return function (c) {
              var d = this.fromWireType;
              u.buffer != aa.buffer && ba();
              return d.call(this, Ba[c >> 2]);
            };
          case 8:
            return function (c) {
              return this.fromWireType(ja()[c >> 3]);
            };
          default:
            throw new TypeError(`invalid float width (${b}): ${a}`);
        }
      },
      Zd = (a, b, c) => {
        switch (b) {
          case 1:
            return c ? (d) => h()[d >> 0] : (d) => w()[d >> 0];
          case 2:
            return c ? (d) => da()[d >> 1] : (d) => x()[d >> 1];
          case 4:
            return c ? (d) => A()[d >> 2] : (d) => B()[d >> 2];
          default:
            throw new TypeError(`invalid integer width (${b}): ${a}`);
        }
      },
      $d =
        "undefined" != typeof TextDecoder
          ? new TextDecoder("utf-16le")
          : void 0,
      ae = (a, b) => {
        var c = a >> 1;
        for (var d = c + b / 2; !(c >= d) && x()[c]; ) ++c;
        c <<= 1;
        if (32 < c - a && $d) return $d.decode(w().slice(a, c));
        c = "";
        for (d = 0; !(d >= b / 2); ++d) {
          var e = da()[(a + 2 * d) >> 1];
          if (0 == e) break;
          c += String.fromCharCode(e);
        }
        return c;
      },
      be = (a, b, c) => {
        c ??= 2147483647;
        if (2 > c) return 0;
        c -= 2;
        var d = b;
        c = c < 2 * a.length ? c / 2 : a.length;
        for (var e = 0; e < c; ++e) {
          var f = a.charCodeAt(e);
          da()[b >> 1] = f;
          b += 2;
        }
        da()[b >> 1] = 0;
        return b - d;
      },
      ce = (a) => 2 * a.length,
      de = (a, b) => {
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
      },
      ee = (a, b, c) => {
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
          A()[b >> 2] = f;
          b += 4;
          if (b + 4 > c) break;
        }
        A()[b >> 2] = 0;
        return b - d;
      },
      fe = (a) => {
        for (var b = 0, c = 0; c < a.length; ++c) {
          var d = a.charCodeAt(c);
          55296 <= d && 57343 >= d && ++c;
          b += 4;
        }
        return b;
      },
      ge = (a) => {
        if (!Ha && !za)
          try {
            if ((a(), !(Ha || mb || 0 < N)))
              try {
                F ? Db(Aa) : sb(Aa);
              } catch (b) {
                b instanceof bb || "unwind" == b || pa(1, b);
              }
          } catch (b) {
            b instanceof bb || "unwind" == b || pa(1, b);
          }
      },
      he = (a) => {
        "function" === typeof Atomics.vd &&
          (Atomics.vd(A(), a >> 2, a).value.then(yb),
          (a += 128),
          Atomics.store(A(), a >> 2, 1));
      };
    D.__emscripten_thread_mailbox_await = he;
    var yb = () => {
      var a = xb();
      a && (he(a), ge(ie));
    };
    D.checkMailbox = yb;
    var je = [],
      ke = (a, b) => {
        var c = ad[a];
        if (void 0 === c)
          throw ((a = b + " has unknown type " + Od(a)), new W(a));
        return c;
      },
      le = (a, b, c) => {
        var d = [];
        a = a.toWireType(d, c);
        d.length && (B()[b >> 2] = Ed(d));
        return a;
      },
      me = [],
      ne = {},
      oe = (a) => {
        var b = ne[a];
        return void 0 === b ? V(a) : b;
      },
      pe = () => {
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
      qe = (a) => {
        var b = me.length;
        me.push(a);
        return b;
      },
      re = (a, b) => {
        for (var c = Array(a), d = 0; d < a; ++d)
          c[d] = ke(B()[(b + 4 * d) >> 2], "parameter " + d);
        return c;
      },
      se = Reflect.construct,
      te = (a) => 0 === a % 4 && (0 !== a % 100 || 0 === a % 400),
      ue = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
      ve = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    function we(a, b, c, d, e, f, g, l) {
      if (F) return O(8, 1, a, b, c, d, e, f, g, l);
      e = ib(e, f);
      try {
        if (isNaN(e)) return 61;
        var m = xc(d);
        if (0 !== (b & 2) && 0 === (c & 2) && 2 !== (m.flags & 2097155))
          throw new Q(2);
        if (1 === (m.flags & 2097155)) throw new Q(2);
        if (!m.Ua.Eb) throw new Q(43);
        var n = m.Ua.Eb(m, a, e, b, c);
        var t = n.Wa;
        A()[g >> 2] = n.bb;
        B()[l >> 2] = t;
        return 0;
      } catch (p) {
        if ("undefined" == typeof Pc || "ErrnoError" !== p.name) throw p;
        return -p.eb;
      }
    }
    function xe(a, b, c, d, e, f, g) {
      if (F) return O(9, 1, a, b, c, d, e, f, g);
      f = ib(f, g);
      try {
        if (isNaN(f)) return 61;
        var l = xc(e);
        if (c & 2) {
          if (32768 !== (l.node.mode & 61440)) throw new Q(43);
          if (!(d & 2)) {
            var m = w().slice(a, a + b);
            l.Ua.Sb && l.Ua.Sb(l, m, f, b, d);
          }
        }
      } catch (n) {
        if ("undefined" == typeof Pc || "ErrnoError" !== n.name) throw n;
        return -n.eb;
      }
    }
    var ze = (a) => {
        var b = Qb(a) + 1,
          c = ye(b);
        c && P(a, w(), c, b);
        return c;
      },
      Ae = [];
    function Be(a, b) {
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
    }
    var Ce, De;
    function Ee(a, b, c, d, e) {
      function f() {
        var C = 0,
          T = 0;
        y.response &&
          L &&
          0 === B()[(a + 12) >> 2] &&
          (T = y.response.byteLength);
        0 < T && ((C = ye(T)), w().set(new Uint8Array(y.response), C));
        B()[(a + 12) >> 2] = C;
        Y(a + 16, T);
        Y(a + 24, 0);
        (C = y.response ? y.response.byteLength : 0) && Y(a + 32, C);
        x()[(a + 40) >> 1] = y.readyState;
        x()[(a + 42) >> 1] = y.status;
        y.statusText && ((C = a + 44), P(y.statusText, w(), C, 64));
      }
      var g = B()[(a + 8) >> 2];
      if (g) {
        var l = K(g),
          m = a + 112,
          n = K(m + 0);
        n ||= "GET";
        var t = B()[(m + 56) >> 2],
          p = B()[(m + 68) >> 2],
          r = B()[(m + 72) >> 2];
        g = B()[(m + 76) >> 2];
        var k = B()[(m + 80) >> 2],
          q = B()[(m + 84) >> 2],
          v = B()[(m + 88) >> 2],
          z = B()[(m + 52) >> 2],
          L = !!(z & 1),
          J = !!(z & 2);
        z = !!(z & 64);
        p = p ? K(p) : void 0;
        r = r ? K(r) : void 0;
        var y = new XMLHttpRequest();
        y.withCredentials = !!w()[(m + 60) >> 0];
        y.open(n, l, !z, p, r);
        z || (y.timeout = t);
        y.Md = l;
        y.responseType = "arraybuffer";
        k && ((l = K(k)), y.overrideMimeType(l));
        if (g)
          for (;;) {
            m = B()[g >> 2];
            if (!m) break;
            l = B()[(g + 4) >> 2];
            if (!l) break;
            g += 8;
            m = K(m);
            l = K(l);
            y.setRequestHeader(m, l);
          }
        var S = Ce.Cb(y);
        B()[a >> 2] = S;
        g = q && v ? w().slice(q, q + v) : null;
        y.onload = (C) => {
          Ce.has(S) &&
            (f(),
            200 <= y.status && 300 > y.status ? b?.(a, y, C) : c?.(a, y, C));
        };
        y.onerror = (C) => {
          Ce.has(S) && (f(), c?.(a, y, C));
        };
        y.ontimeout = (C) => {
          Ce.has(S) && c?.(a, y, C);
        };
        y.onprogress = (C) => {
          if (Ce.has(S)) {
            var T = L && J && y.response ? y.response.byteLength : 0,
              I = 0;
            0 < T &&
              L &&
              J &&
              ((I = ye(T)), w().set(new Uint8Array(y.response), I));
            B()[(a + 12) >> 2] = I;
            Y(a + 16, T);
            Y(a + 24, C.loaded - T);
            Y(a + 32, C.total);
            x()[(a + 40) >> 1] = y.readyState;
            3 <= y.readyState &&
              0 === y.status &&
              0 < C.loaded &&
              (y.status = 200);
            x()[(a + 42) >> 1] = y.status;
            y.statusText && ((T = a + 44), P(y.statusText, w(), T, 64));
            d?.(a, y, C);
            I && Nd(I);
          }
        };
        y.onreadystatechange = (C) => {
          Ce.has(S)
            ? ((x()[(a + 40) >> 1] = y.readyState),
              2 <= y.readyState && (x()[(a + 42) >> 1] = y.status),
              e?.(a, y, C))
            : --N;
        };
        try {
          y.send(g);
        } catch (C) {
          c?.(a, y, C);
        }
      } else c(a, 0, "no url specified!");
    }
    var Y = (a, b) => {
      B()[a >> 2] = b;
      var c = B()[a >> 2];
      B()[(a + 4) >> 2] = (b - c) / 4294967296;
    };
    function Fe(a, b, c, d) {
      var e = De;
      if (e) {
        var f = a + 112;
        (f = B()[(f + 64) >> 2]) || (f = B()[(a + 8) >> 2]);
        var g = K(f);
        try {
          var l = e
            .transaction(["FILES"], "readwrite")
            .objectStore("FILES")
            .put(b, g);
          l.onsuccess = () => {
            x()[(a + 40) >> 1] = 4;
            x()[(a + 42) >> 1] = 200;
            var m = a + 44;
            P("OK", w(), m, 64);
            c(a, 0, g);
          };
          l.onerror = (m) => {
            x()[(a + 40) >> 1] = 4;
            x()[(a + 42) >> 1] = 413;
            var n = a + 44;
            P("Payload Too Large", w(), n, 64);
            d(a, 0, m);
          };
        } catch (m) {
          d(a, 0, m);
        }
      } else d(a, 0, "IndexedDB not available!");
    }
    function Ge(a, b, c) {
      var d = De;
      if (d) {
        var e = a + 112;
        (e = B()[(e + 64) >> 2]) || (e = B()[(a + 8) >> 2]);
        e = K(e);
        try {
          var f = d
            .transaction(["FILES"], "readonly")
            .objectStore("FILES")
            .get(e);
          f.onsuccess = (g) => {
            if (g.target.result) {
              g = g.target.result;
              var l = g.byteLength || g.length,
                m = ye(l);
              w().set(new Uint8Array(g), m);
              B()[(a + 12) >> 2] = m;
              Y(a + 16, l);
              Y(a + 24, 0);
              Y(a + 32, l);
              x()[(a + 40) >> 1] = 4;
              x()[(a + 42) >> 1] = 200;
              l = a + 44;
              P("OK", w(), l, 64);
              b(a, 0, g);
            } else
              (x()[(a + 40) >> 1] = 4),
                (x()[(a + 42) >> 1] = 404),
                (g = a + 44),
                P("Not Found", w(), g, 64),
                c(a, 0, "no data");
          };
          f.onerror = (g) => {
            x()[(a + 40) >> 1] = 4;
            x()[(a + 42) >> 1] = 404;
            var l = a + 44;
            P("Not Found", w(), l, 64);
            c(a, 0, g);
          };
        } catch (g) {
          c(a, 0, g);
        }
      } else c(a, 0, "IndexedDB not available!");
    }
    function He(a, b, c) {
      var d = De;
      if (d) {
        var e = a + 112;
        (e = B()[(e + 64) >> 2]) || (e = B()[(a + 8) >> 2]);
        e = K(e);
        try {
          var f = d
            .transaction(["FILES"], "readwrite")
            .objectStore("FILES")
            .delete(e);
          f.onsuccess = (g) => {
            g = g.target.result;
            B()[(a + 12) >> 2] = 0;
            Y(a + 16, 0);
            Y(a + 24, 0);
            Y(a + 32, 0);
            x()[(a + 40) >> 1] = 4;
            x()[(a + 42) >> 1] = 200;
            var l = a + 44;
            P("OK", w(), l, 64);
            b(a, 0, g);
          };
          f.onerror = (g) => {
            x()[(a + 40) >> 1] = 4;
            x()[(a + 42) >> 1] = 404;
            var l = a + 44;
            P("Not Found", w(), l, 64);
            c(a, 0, g);
          };
        } catch (g) {
          c(a, 0, g);
        }
      } else c(a, 0, "IndexedDB not available!");
    }
    var Ie = {},
      Ke = () => {
        if (!Je) {
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
              _: oa || "./this.program",
            },
            b;
          for (b in Ie) void 0 === Ie[b] ? delete a[b] : (a[b] = Ie[b]);
          var c = [];
          for (b in a) c.push(`${b}=${a[b]}`);
          Je = c;
        }
        return Je;
      },
      Je;
    function Le(a, b) {
      if (F) return O(10, 1, a, b);
      var c = 0;
      Ke().forEach((d, e) => {
        var f = b + c;
        e = B()[(a + 4 * e) >> 2] = f;
        for (f = 0; f < d.length; ++f) h()[e++ >> 0] = d.charCodeAt(f);
        h()[e >> 0] = 0;
        c += d.length + 1;
      });
      return 0;
    }
    function Me(a, b) {
      if (F) return O(11, 1, a, b);
      var c = Ke();
      B()[a >> 2] = c.length;
      var d = 0;
      c.forEach((e) => (d += e.length + 1));
      B()[b >> 2] = d;
      return 0;
    }
    function Ne(a) {
      if (F) return O(12, 1, a);
      try {
        var b = xc(a);
        rb(b);
        return 0;
      } catch (c) {
        if ("undefined" == typeof Pc || "ErrnoError" !== c.name) throw c;
        return c.eb;
      }
    }
    function Oe(a, b, c, d) {
      if (F) return O(13, 1, a, b, c, d);
      try {
        a: {
          var e = xc(a);
          a = b;
          for (var f, g = (b = 0); g < c; g++) {
            var l = B()[a >> 2],
              m = B()[(a + 4) >> 2];
            a += 8;
            var n = e,
              t = h(),
              p = f;
            if (0 > m || 0 > p) throw new Q(28);
            if (null === n.rb) throw new Q(8);
            if (1 === (n.flags & 2097155)) throw new Q(8);
            if (U(n.node.mode)) throw new Q(31);
            if (!n.Ua.read) throw new Q(28);
            var r = "undefined" != typeof p;
            if (!r) p = n.position;
            else if (!n.seekable) throw new Q(70);
            var k = n.Ua.read(n, t, l, m, p);
            r || (n.position += k);
            var q = k;
            if (0 > q) {
              var v = -1;
              break a;
            }
            b += q;
            if (q < m) break;
            "undefined" !== typeof f && (f += q);
          }
          v = b;
        }
        B()[d >> 2] = v;
        return 0;
      } catch (z) {
        if ("undefined" == typeof Pc || "ErrnoError" !== z.name) throw z;
        return z.eb;
      }
    }
    function Pe(a, b, c, d, e) {
      if (F) return O(14, 1, a, b, c, d, e);
      b = ib(b, c);
      try {
        if (isNaN(b)) return 61;
        var f = xc(a);
        Jc(f, b, d);
        H = [
          f.position >>> 0,
          ((G = f.position),
          1 <= +Math.abs(G)
            ? 0 < G
              ? +Math.floor(G / 4294967296) >>> 0
              : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0
            : 0),
        ];
        A()[e >> 2] = H[0];
        A()[(e + 4) >> 2] = H[1];
        f.$b && 0 === b && 0 === d && (f.$b = null);
        return 0;
      } catch (g) {
        if ("undefined" == typeof Pc || "ErrnoError" !== g.name) throw g;
        return g.eb;
      }
    }
    function Qe(a, b, c, d) {
      if (F) return O(15, 1, a, b, c, d);
      try {
        a: {
          var e = xc(a);
          a = b;
          for (var f, g = (b = 0); g < c; g++) {
            var l = B()[a >> 2],
              m = B()[(a + 4) >> 2];
            a += 8;
            var n = Kc(e, h(), l, m, f);
            if (0 > n) {
              var t = -1;
              break a;
            }
            b += n;
            "undefined" !== typeof f && (f += n);
          }
          t = b;
        }
        B()[d >> 2] = t;
        return 0;
      } catch (p) {
        if ("undefined" == typeof Pc || "ErrnoError" !== p.name) throw p;
        return p.eb;
      }
    }
    var Re = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      Se = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      Te = (a, b) => {
        h().set(a, b);
      },
      Ue = (a, b, c, d) => {
        function e(k, q, v) {
          for (
            k = "number" == typeof k ? k.toString() : k || "";
            k.length < q;

          )
            k = v[0] + k;
          return k;
        }
        function f(k, q) {
          return e(k, q, "0");
        }
        function g(k, q) {
          function v(L) {
            return 0 > L ? -1 : 0 < L ? 1 : 0;
          }
          var z;
          0 === (z = v(k.getFullYear() - q.getFullYear())) &&
            0 === (z = v(k.getMonth() - q.getMonth())) &&
            (z = v(k.getDate() - q.getDate()));
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
          var q = k.vb;
          for (k = new Date(new Date(k.wb + 1900, 0, 1).getTime()); 0 < q; ) {
            var v = k.getMonth(),
              z = (te(k.getFullYear()) ? Re : Se)[v];
            if (q > z - k.getDate())
              (q -= z - k.getDate() + 1),
                k.setDate(1),
                11 > v
                  ? k.setMonth(v + 1)
                  : (k.setMonth(0), k.setFullYear(k.getFullYear() + 1));
            else {
              k.setDate(k.getDate() + q);
              break;
            }
          }
          v = new Date(k.getFullYear() + 1, 0, 4);
          q = l(new Date(k.getFullYear(), 0, 4));
          v = l(v);
          return 0 >= g(q, k)
            ? 0 >= g(v, k)
              ? k.getFullYear() + 1
              : k.getFullYear()
            : k.getFullYear() - 1;
        }
        var n = B()[(d + 40) >> 2];
        d = {
          rd: A()[d >> 2],
          qd: A()[(d + 4) >> 2],
          Vb: A()[(d + 8) >> 2],
          hc: A()[(d + 12) >> 2],
          Wb: A()[(d + 16) >> 2],
          wb: A()[(d + 20) >> 2],
          nb: A()[(d + 24) >> 2],
          vb: A()[(d + 28) >> 2],
          Ld: A()[(d + 32) >> 2],
          pd: A()[(d + 36) >> 2],
          sd: n ? K(n) : "",
        };
        c = K(c);
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
        for (var t in n) c = c.replace(new RegExp(t, "g"), n[t]);
        var p =
            "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
              " ",
            ),
          r =
            "January February March April May June July August September October November December".split(
              " ",
            );
        n = {
          "%a": (k) => p[k.nb].substring(0, 3),
          "%A": (k) => p[k.nb],
          "%b": (k) => r[k.Wb].substring(0, 3),
          "%B": (k) => r[k.Wb],
          "%C": (k) => f(((k.wb + 1900) / 100) | 0, 2),
          "%d": (k) => f(k.hc, 2),
          "%e": (k) => e(k.hc, 2, " "),
          "%g": (k) => m(k).toString().substring(2),
          "%G": m,
          "%H": (k) => f(k.Vb, 2),
          "%I": (k) => {
            k = k.Vb;
            0 == k ? (k = 12) : 12 < k && (k -= 12);
            return f(k, 2);
          },
          "%j": (k) => {
            for (
              var q = 0, v = 0;
              v <= k.Wb - 1;
              q += (te(k.wb + 1900) ? Re : Se)[v++]
            );
            return f(k.hc + q, 3);
          },
          "%m": (k) => f(k.Wb + 1, 2),
          "%M": (k) => f(k.qd, 2),
          "%n": () => "\n",
          "%p": (k) => (0 <= k.Vb && 12 > k.Vb ? "AM" : "PM"),
          "%S": (k) => f(k.rd, 2),
          "%t": () => "\t",
          "%u": (k) => k.nb || 7,
          "%U": (k) => f(Math.floor((k.vb + 7 - k.nb) / 7), 2),
          "%V": (k) => {
            var q = Math.floor((k.vb + 7 - ((k.nb + 6) % 7)) / 7);
            2 >= (k.nb + 371 - k.vb - 2) % 7 && q++;
            if (q)
              53 == q &&
                ((v = (k.nb + 371 - k.vb) % 7),
                4 == v || (3 == v && te(k.wb)) || (q = 1));
            else {
              q = 52;
              var v = (k.nb + 7 - k.vb - 1) % 7;
              (4 == v || (5 == v && te((k.wb % 400) - 1))) && q++;
            }
            return f(q, 2);
          },
          "%w": (k) => k.nb,
          "%W": (k) => f(Math.floor((k.vb + 7 - ((k.nb + 6) % 7)) / 7), 2),
          "%y": (k) => (k.wb + 1900).toString().substring(2),
          "%Y": (k) => k.wb + 1900,
          "%z": (k) => {
            k = k.pd;
            var q = 0 <= k;
            k = Math.abs(k) / 60;
            return (
              (q ? "+" : "-") +
              String("0000" + ((k / 60) * 100 + (k % 60))).slice(-4)
            );
          },
          "%Z": (k) => k.sd,
          "%%": () => "%",
        };
        c = c.replace(/%%/g, "\x00\x00");
        for (t in n)
          c.includes(t) && (c = c.replace(new RegExp(t, "g"), n[t](d)));
        c = c.replace(/\0\0/g, "%");
        t = Rb(c, !1);
        if (t.length > b) return 0;
        Te(t, a);
        return t.length - 1;
      };
    F ? tb() : ub();
    function tc(a, b, c, d) {
      a ||= this;
      this.parent = a;
      this.ob = a.ob;
      this.Fb = null;
      this.id = mc++;
      this.name = b;
      this.mode = c;
      this.Ta = {};
      this.Ua = {};
      this.Hb = d;
    }
    Object.defineProperties(tc.prototype, {
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
          return U(this.mode);
        },
      },
      $c: {
        get: function () {
          return 8192 === (this.mode & 61440);
        },
      },
    });
    [44].forEach((a) => {
      cc[a] = new Q(a);
      cc[a].stack = "<generic error, no stack>";
    });
    nc = Array(4096);
    Ac(R, "/");
    Cc("/tmp");
    Cc("/home");
    Cc("/home/web_user");
    (function () {
      Cc("/dev");
      Ub(259, { read: () => 0, write: (d, e, f, g) => g });
      Dc("/dev/null", 259);
      Tb(1280, Wb);
      Tb(1536, Xb);
      Dc("/dev/tty", 1280);
      Dc("/dev/tty1", 1536);
      var a = new Uint8Array(1024),
        b = 0,
        c = () => {
          0 === b && (b = Lb(a).byteLength);
          return a[--b];
        };
      Ka("/dev", "random", c);
      Ka("/dev", "urandom", c);
      Cc("/dev/shm");
      Cc("/dev/shm/tmp");
    })();
    (function () {
      Cc("/proc");
      var a = Cc("/proc/self");
      Cc("/proc/self/fd");
      Ac(
        {
          ob() {
            var b = bc(a, "fd", 16895, 73);
            b.Ta = {
              Db(c, d) {
                var e = xc(+d);
                c = {
                  parent: null,
                  ob: { tc: "fake" },
                  Ta: { Ib: () => e.path },
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
    D.FS_createPath = Lc;
    D.FS_createDataFile = hc;
    D.FS_createPreloadedFile = ic;
    D.FS_unlink = Ec;
    D.FS_createLazyFile = Oc;
    D.FS_createDevice = Ka;
    cd = D.InternalError = class extends Error {
      constructor(a) {
        super(a);
        this.name = "InternalError";
      }
    };
    for (var Ve = Array(256), We = 0; 256 > We; ++We)
      Ve[We] = String.fromCharCode(We);
    fd = Ve;
    W = D.BindingError = class extends Error {
      constructor(a) {
        super(a);
        this.name = "BindingError";
      }
    };
    Object.assign(ud.prototype, {
      isAliasOf: function (a) {
        if (!(this instanceof ud && a instanceof ud)) return !1;
        var b = this.Ra.Ya.Va,
          c = this.Ra.Wa;
        a.Ra = a.Ra;
        var d = a.Ra.Ya.Va;
        for (a = a.Ra.Wa; b.cb; ) (c = b.Jb(c)), (b = b.cb);
        for (; d.cb; ) (a = d.Jb(a)), (d = d.cb);
        return b === d && c === a;
      },
      clone: function () {
        this.Ra.Wa || hd(this);
        if (this.Ra.Gb) return (this.Ra.count.value += 1), this;
        var a = sd,
          b = Object,
          c = b.create,
          d = Object.getPrototypeOf(this),
          e = this.Ra;
        a = a(
          c.call(b, d, {
            Ra: {
              value: {
                count: e.count,
                yb: e.yb,
                Gb: e.Gb,
                Wa: e.Wa,
                Ya: e.Ya,
                Za: e.Za,
                gb: e.gb,
              },
            },
          }),
        );
        a.Ra.count.value += 1;
        a.Ra.yb = !1;
        return a;
      },
      ["delete"]() {
        this.Ra.Wa || hd(this);
        if (this.Ra.yb && !this.Ra.Gb)
          throw new W("Object already scheduled for deletion");
        kd(this);
        var a = this.Ra;
        --a.count.value;
        0 === a.count.value && (a.Za ? a.gb.mb(a.Za) : a.Ya.Va.mb(a.Wa));
        this.Ra.Gb || ((this.Ra.Za = void 0), (this.Ra.Wa = void 0));
      },
      isDeleted: function () {
        return !this.Ra.Wa;
      },
      deleteLater: function () {
        this.Ra.Wa || hd(this);
        if (this.Ra.yb && !this.Ra.Gb)
          throw new W("Object already scheduled for deletion");
        nd.push(this);
        1 === nd.length && pd && pd(od);
        this.Ra.yb = !0;
        return this;
      },
    });
    D.getInheritedInstanceCount = () => Object.keys(qd).length;
    D.getLiveInheritedInstances = () => {
      var a = [],
        b;
      for (b in qd) qd.hasOwnProperty(b) && a.push(qd[b]);
      return a;
    };
    D.flushPendingDeletes = od;
    D.setDelayFunction = (a) => {
      pd = a;
      nd.length && pd && pd(od);
    };
    Object.assign(Hd.prototype, {
      Vc(a) {
        this.vc && (a = this.vc(a));
        return a;
      },
      mc(a) {
        this.mb?.(a);
      },
      argPackAdvance: 8,
      readValueFromPointer: Gd,
      fromWireType: function (a) {
        function b() {
          return this.Qb
            ? td(this.Va.zb, { Ya: this.ed, Wa: c, gb: this, Za: a })
            : td(this.Va.zb, { Ya: this, Wa: a });
        }
        var c = this.Vc(a);
        if (!c) return this.mc(a), null;
        var d = rd(this.Va, c);
        if (void 0 !== d) {
          if (0 === d.Ra.count.value)
            return (d.Ra.Wa = c), (d.Ra.Za = a), d.clone();
          d = d.clone();
          this.mc(a);
          return d;
        }
        d = this.Va.Uc(c);
        d = md[d];
        if (!d) return b.call(this);
        d = this.Pb ? d.Oc : d.pointerType;
        var e = ld(c, this.Va, d.Va);
        return null === e
          ? b.call(this)
          : this.Qb
          ? td(d.Va.zb, { Ya: d, Wa: e, gb: this, Za: a })
          : td(d.Va.zb, { Ya: d, Wa: e });
      },
    });
    Ld = D.UnboundTypeError = ((a, b) => {
      var c = vd(b, function (d) {
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
    X.bb.push({ value: void 0 }, { value: null }, { value: !0 }, { value: !1 });
    Object.assign(X, { zc: X.bb.length });
    D.count_emval_handles = () => {
      for (var a = 0, b = X.zc; b < X.bb.length; ++b) void 0 !== X.bb[b] && ++a;
      return a;
    };
    Ce = new Ud();
    F ||
      (Sa("library_fetch_init"),
      Be(
        (a) => {
          De = a;
          Ta("library_fetch_init");
        },
        () => {
          De = !1;
          Ta("library_fetch_init");
        },
      ));
    var Xe = [
        lb,
        nb,
        Eb,
        Tc,
        function (a, b) {
          if (F) return O(4, 1, a, b);
          try {
            return (a = K(a)), Rc(Gc, a, b);
          } catch (c) {
            if ("undefined" == typeof Pc || "ErrnoError" !== c.name) throw c;
            return -c.eb;
          }
        },
        Uc,
        Vc,
        Wc,
        we,
        xe,
        Le,
        Me,
        Ne,
        Oe,
        Pe,
        Qe,
      ],
      $e = {
        T: (a) => {
          Ye(a, !1, 1, !0, 262144, !1);
          M.Ec();
        },
        q: (a) => {
          F ? postMessage({ cmd: "cleanupThread", thread: a }) : M.Ac(M.lb[a]);
        },
        Q: Fb,
        Y: Tc,
        W: Uc,
        Z: Vc,
        X: Wc,
        h: (a) => {
          var b = Xc[a];
          delete Xc[a];
          var c = b.dc,
            d = b.mb,
            e = b.nc,
            f = e.map((g) => g.Xc).concat(e.map((g) => g.ld));
          ed([a], f, (g) => {
            var l = {};
            e.forEach((m, n) => {
              var t = g[n],
                p = m.Ob,
                r = m.Wc,
                k = g[n + e.length],
                q = m.kd,
                v = m.md;
              l[m.Tc] = {
                read: (z) => t.fromWireType(p(r, z)),
                write: (z, L) => {
                  var J = [];
                  q(v, z, k.toWireType(J, L));
                  Yc(J);
                },
              };
            });
            return [
              {
                name: b.name,
                fromWireType: (m) => {
                  var n = {},
                    t;
                  for (t in l) n[t] = l[t].read(m);
                  d(m);
                  return n;
                },
                toWireType: (m, n) => {
                  for (var t in l)
                    if (!(t in n)) throw new TypeError(`Missing field: "${t}"`);
                  var p = c();
                  for (t in l) l[t].write(p, n[t]);
                  null !== m && m.push(d, p);
                  return p;
                },
                argPackAdvance: 8,
                readValueFromPointer: Zc,
                ib: d,
              },
            ];
          });
        },
        K: () => {},
        da: (a, b, c, d) => {
          b = V(b);
          dd(a, {
            name: b,
            fromWireType: function (e) {
              return !!e;
            },
            toWireType: function (e, f) {
              return f ? c : d;
            },
            argPackAdvance: 8,
            readValueFromPointer: function (e) {
              return this.fromWireType(w()[e]);
            },
            ib: null,
          });
        },
        oa: (a, b, c, d, e, f, g, l, m, n, t, p, r) => {
          t = V(t);
          f = Kd(e, f);
          l &&= Kd(g, l);
          n &&= Kd(m, n);
          r = Kd(p, r);
          var k = yd(t);
          xd(k, function () {
            Pd(`Cannot construct ${t} due to unbound types`, [d]);
          });
          ed([a, b, c], d ? [d] : [], function (q) {
            q = q[0];
            if (d) {
              var v = q.Va;
              var z = v.zb;
            } else z = ud.prototype;
            q = vd(t, function () {
              if (Object.getPrototypeOf(this) !== L)
                throw new W("Use 'new' to construct " + t);
              if (void 0 === J.qb)
                throw new W(t + " has no accessible constructor");
              var S = J.qb[arguments.length];
              if (void 0 === S)
                throw new W(
                  `Tried to invoke ctor of ${t} with invalid number of parameters (${
                    arguments.length
                  }) - expected (${Object.keys(
                    J.qb,
                  ).toString()}) parameters instead!`,
                );
              return S.apply(this, arguments);
            });
            var L = Object.create(z, { constructor: { value: q } });
            q.prototype = L;
            var J = new zd(t, q, L, r, v, f, l, n);
            if (J.cb) {
              var y;
              (y = J.cb).ic ?? (y.ic = []);
              J.cb.ic.push(J);
            }
            v = new Hd(t, J, !0, !1, !1);
            y = new Hd(t + "*", J, !1, !1, !1);
            z = new Hd(t + " const*", J, !1, !0, !1);
            md[a] = { pointerType: y, Oc: z };
            Id(k, q);
            return [v, y, z];
          });
        },
        na: (a, b, c, d, e, f) => {
          var g = Qd(b, c);
          e = Kd(d, e);
          ed([], [a], function (l) {
            l = l[0];
            var m = `constructor ${l.name}`;
            void 0 === l.Va.qb && (l.Va.qb = []);
            if (void 0 !== l.Va.qb[b - 1])
              throw new W(
                `Cannot register multiple constructors with identical number of parameters (${
                  b - 1
                }) for class '${
                  l.name
                }'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
              );
            l.Va.qb[b - 1] = () => {
              Pd(`Cannot construct ${l.name} due to unbound types`, g);
            };
            ed([], g, (n) => {
              n.splice(1, 0, null);
              l.Va.qb[b - 1] = Sd(m, n, null, e, f);
              return [];
            });
            return [];
          });
        },
        j: (a, b, c, d, e, f, g, l) => {
          var m = Qd(c, d);
          b = V(b);
          b = Td(b);
          f = Kd(e, f);
          ed([], [a], function (n) {
            function t() {
              Pd(`Cannot call ${p} due to unbound types`, m);
            }
            n = n[0];
            var p = `${n.name}.${b}`;
            b.startsWith("@@") && (b = Symbol[b.substring(2)]);
            l && n.Va.fd.push(b);
            var r = n.Va.zb,
              k = r[b];
            void 0 === k ||
            (void 0 === k.ab && k.className !== n.name && k.Kb === c - 2)
              ? ((t.Kb = c - 2), (t.className = n.name), (r[b] = t))
              : (wd(r, b, p), (r[b].ab[c - 2] = t));
            ed([], m, function (q) {
              q = Sd(p, q, n, f, g);
              void 0 === r[b].ab
                ? ((q.Kb = c - 2), (r[b] = q))
                : (r[b].ab[c - 2] = q);
              return [];
            });
            return [];
          });
        },
        ca: (a) => dd(a, Xd),
        v: (a, b, c) => {
          b = V(b);
          dd(a, {
            name: b,
            fromWireType: (d) => d,
            toWireType: (d, e) => e,
            argPackAdvance: 8,
            readValueFromPointer: Yd(b, c),
            ib: null,
          });
        },
        n: (a, b, c, d, e, f) => {
          var g = Qd(b, c);
          a = V(a);
          a = Td(a);
          e = Kd(d, e);
          xd(
            a,
            function () {
              Pd(`Cannot call ${a} due to unbound types`, g);
            },
            b - 1,
          );
          ed([], g, function (l) {
            Id(a, Sd(a, [l[0], null].concat(l.slice(1)), null, e, f), b - 1);
            return [];
          });
        },
        g: (a, b, c, d, e) => {
          b = V(b);
          -1 === e && (e = 4294967295);
          e = (l) => l;
          if (0 === d) {
            var f = 32 - 8 * c;
            e = (l) => (l << f) >>> f;
          }
          var g = b.includes("unsigned")
            ? function (l, m) {
                return m >>> 0;
              }
            : function (l, m) {
                return m;
              };
          dd(a, {
            name: b,
            fromWireType: e,
            toWireType: g,
            argPackAdvance: 8,
            readValueFromPointer: Zd(b, c, 0 !== d),
            ib: null,
          });
        },
        d: (a, b, c) => {
          function d(f) {
            var g = B()[f >> 2];
            f = B()[(f + 4) >> 2];
            return new e(h().buffer, f, g);
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
          dd(
            a,
            {
              name: c,
              fromWireType: d,
              argPackAdvance: 8,
              readValueFromPointer: d,
            },
            { Zc: !0 },
          );
        },
        w: (a, b) => {
          b = V(b);
          var c = "std::string" === b;
          dd(a, {
            name: b,
            fromWireType: function (d) {
              var e = B()[d >> 2],
                f = d + 4;
              if (c)
                for (var g = f, l = 0; l <= e; ++l) {
                  var m = f + l;
                  if (l == e || 0 == w()[m]) {
                    g = K(g, m - g);
                    if (void 0 === n) var n = g;
                    else (n += String.fromCharCode(0)), (n += g);
                    g = m + 1;
                  }
                }
              else {
                n = Array(e);
                for (l = 0; l < e; ++l) n[l] = String.fromCharCode(w()[f + l]);
                n = n.join("");
              }
              Nd(d);
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
                throw new W("Cannot pass non-string to std::string");
              var g = c && f ? Qb(e) : e.length;
              var l = ye(4 + g + 1),
                m = l + 4;
              B()[l >> 2] = g;
              if (c && f) (g += 1), P(e, w(), m, g);
              else if (f)
                for (f = 0; f < g; ++f) {
                  var n = e.charCodeAt(f);
                  if (255 < n)
                    throw (
                      (Nd(m),
                      new W(
                        "String has UTF-16 code units that do not fit in 8 bits",
                      ))
                    );
                  w()[m + f] = n;
                }
              else for (f = 0; f < g; ++f) w()[m + f] = e[f];
              null !== d && d.push(Nd, l);
              return l;
            },
            argPackAdvance: 8,
            readValueFromPointer: Gd,
            ib(d) {
              Nd(d);
            },
          });
        },
        m: (a, b, c) => {
          c = V(c);
          if (2 === b) {
            var d = ae;
            var e = be;
            var f = ce;
            var g = () => x();
            var l = 1;
          } else
            4 === b && ((d = de), (e = ee), (f = fe), (g = () => B()), (l = 2));
          dd(a, {
            name: c,
            fromWireType: (m) => {
              for (
                var n = B()[m >> 2], t = g(), p, r = m + 4, k = 0;
                k <= n;
                ++k
              ) {
                var q = m + 4 + k * b;
                if (k == n || 0 == t[q >> l])
                  (r = d(r, q - r)),
                    void 0 === p
                      ? (p = r)
                      : ((p += String.fromCharCode(0)), (p += r)),
                    (r = q + b);
              }
              Nd(m);
              return p;
            },
            toWireType: (m, n) => {
              if ("string" != typeof n)
                throw new W(`Cannot pass non-string to C++ string type ${c}`);
              var t = f(n),
                p = ye(4 + t + b);
              B()[p >> 2] = t >> l;
              e(n, p + 4, t + b);
              null !== m && m.push(Nd, p);
              return p;
            },
            argPackAdvance: 8,
            readValueFromPointer: Zc,
            ib(m) {
              Nd(m);
            },
          });
        },
        f: (a, b, c, d, e, f) => {
          Xc[a] = { name: V(b), dc: Kd(c, d), mb: Kd(e, f), nc: [] };
        },
        c: (a, b, c, d, e, f, g, l, m, n) => {
          Xc[a].nc.push({
            Tc: V(b),
            Xc: c,
            Ob: Kd(d, e),
            Wc: f,
            ld: g,
            kd: Kd(l, m),
            md: n,
          });
        },
        ea: (a, b) => {
          b = V(b);
          dd(a, {
            Hd: !0,
            name: b,
            argPackAdvance: 0,
            fromWireType: () => {},
            toWireType: () => {},
          });
        },
        fa: function (a) {
          if (Ce.has(a)) {
            var b = Ce.get(a),
              c = Ce;
            c.bb[a] = void 0;
            c.Zb.push(a);
            0 < b.readyState && 4 > b.readyState && b.abort();
          }
        },
        aa: () => 1,
        P: (a, b) => {
          a == b
            ? setTimeout(yb)
            : F
            ? postMessage({ targetThread: a, cmd: "checkMailbox" })
            : (a = M.lb[a]) && a.postMessage({ cmd: "checkMailbox" });
        },
        R: (a, b, c, d) => {
          je.length = c;
          d >>= 3;
          for (var e = 0; e < c; e++) je[e] = ja()[d + e];
          a = 0 > a ? ab[-a - 1] : Xe[a];
          M.Qc = b;
          b = a.apply(null, je);
          M.Qc = 0;
          return b;
        },
        S: he,
        $: () => {},
        l: (a, b, c) => {
          a = Wd(a);
          b = ke(b, "emval::as");
          return le(b, c, a);
        },
        o: (a, b, c, d) => {
          a = me[a];
          b = Wd(b);
          return a(null, b, c, d);
        },
        ka: (a, b, c, d, e) => {
          a = me[a];
          b = Wd(b);
          c = oe(c);
          return a(b, b[c], d, e);
        },
        E: Vd,
        ja: (a) => {
          if (0 === a) return Ed(pe());
          a = oe(a);
          return Ed(pe()[a]);
        },
        p: (a, b, c) => {
          var d = re(a, b),
            e = d.shift();
          a--;
          var f = Array(a);
          b = `methodCaller<(${d.map((g) => g.name).join(", ")}) => ${e.name}>`;
          return qe(
            vd(b, (g, l, m, n) => {
              for (var t = 0, p = 0; p < a; ++p)
                (f[p] = d[p].readValueFromPointer(n + t)),
                  (t += d[p].argPackAdvance);
              g = 1 === c ? se(l, f) : l.apply(g, f);
              return le(e, m, g);
            }),
          );
        },
        A: (a, b) => {
          a = Wd(a);
          b = Wd(b);
          return Ed(a[b]);
        },
        k: (a) => {
          4 < a && (X.get(a).xc += 1);
        },
        D: () => Ed([]),
        la: (a) => Ed(oe(a)),
        ma: (a) => {
          var b = Wd(a);
          Yc(b);
          Vd(a);
        },
        C: (a, b, c) => {
          a = Wd(a);
          b = Wd(b);
          c = Wd(c);
          a[b] = c;
        },
        i: (a, b) => {
          a = ke(a, "_emval_take_value");
          a = a.readValueFromPointer(b);
          return Ed(a);
        },
        H: function (a, b, c) {
          a = new Date(1e3 * ib(a, b));
          A()[c >> 2] = a.getSeconds();
          A()[(c + 4) >> 2] = a.getMinutes();
          A()[(c + 8) >> 2] = a.getHours();
          A()[(c + 12) >> 2] = a.getDate();
          A()[(c + 16) >> 2] = a.getMonth();
          A()[(c + 20) >> 2] = a.getFullYear() - 1900;
          A()[(c + 24) >> 2] = a.getDay();
          b =
            ((te(a.getFullYear()) ? ue : ve)[a.getMonth()] + a.getDate() - 1) |
            0;
          A()[(c + 28) >> 2] = b;
          A()[(c + 36) >> 2] = -(60 * a.getTimezoneOffset());
          b = new Date(a.getFullYear(), 6, 1).getTimezoneOffset();
          var d = new Date(a.getFullYear(), 0, 1).getTimezoneOffset();
          a = (b != d && a.getTimezoneOffset() == Math.min(d, b)) | 0;
          A()[(c + 32) >> 2] = a;
        },
        I: function (a) {
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
            g = Math.min(f, e);
          0 > c
            ? (A()[(a + 32) >> 2] = Number(e != f && g == d))
            : 0 < c != (g == d) &&
              ((e = Math.max(f, e)),
              b.setTime(b.getTime() + 6e4 * ((0 < c ? g : e) - d)));
          A()[(a + 24) >> 2] = b.getDay();
          c =
            ((te(b.getFullYear()) ? ue : ve)[b.getMonth()] + b.getDate() - 1) |
            0;
          A()[(a + 28) >> 2] = c;
          A()[a >> 2] = b.getSeconds();
          A()[(a + 4) >> 2] = b.getMinutes();
          A()[(a + 8) >> 2] = b.getHours();
          A()[(a + 12) >> 2] = b.getDate();
          A()[(a + 16) >> 2] = b.getMonth();
          A()[(a + 20) >> 2] = b.getYear();
          a = b.getTime();
          a = isNaN(a) ? -1 : a / 1e3;
          return (
            Ze(
              ((G = a),
              1 <= +Math.abs(G)
                ? 0 < G
                  ? +Math.floor(G / 4294967296) >>> 0
                  : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0
                : 0),
            ),
            a >>> 0
          );
        },
        F: we,
        G: xe,
        O: (a, b, c) => {
          function d(n) {
            return (n = n.toTimeString().match(/\(([A-Za-z ]+)\)$/))
              ? n[1]
              : "GMT";
          }
          var e = new Date().getFullYear(),
            f = new Date(e, 0, 1),
            g = new Date(e, 6, 1);
          e = f.getTimezoneOffset();
          var l = g.getTimezoneOffset(),
            m = Math.max(e, l);
          B()[a >> 2] = 60 * m;
          A()[b >> 2] = Number(e != l);
          a = d(f);
          b = d(g);
          a = ze(a);
          b = ze(b);
          l < e
            ? ((B()[c >> 2] = a), (B()[(c + 4) >> 2] = b))
            : ((B()[c >> 2] = b), (B()[(c + 4) >> 2] = a));
        },
        b: () => {
          xa("");
        },
        B: function () {
          var a = D.allowedThreads;
          return a ? a : navigator.hardwareConcurrency;
        },
        z: (a, b, c) => {
          Ae.length = 0;
          for (var d; (d = w()[b++]); ) {
            var e = 105 != d;
            e &= 112 != d;
            c += e && c % 8 ? 4 : 0;
            Ae.push(
              112 == d ? B()[c >> 2] : 105 == d ? A()[c >> 2] : ja()[c >> 3],
            );
            c += e ? 8 : 4;
          }
          return ab[a].apply(null, Ae);
        },
        r: () => {},
        ba: () => Date.now(),
        _: () => {
          N += 1;
          throw "unwind";
        },
        e: () => performance.timeOrigin + performance.now(),
        y: () => "undefined" != typeof SharedArrayBuffer,
        N: (a) => {
          var b = w().length;
          a >>>= 0;
          if (a <= b || 2147483648 < a) return !1;
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
                  u.buffer.byteLength +
                  65535) /
                65536;
              try {
                u.grow(d);
                ba();
                var f = 1;
                break a;
              } catch (g) {}
              f = void 0;
            }
            if (f) return !0;
          }
          return !1;
        },
        ga: function (a, b, c, d, e) {
          function f(I) {
            r ? I() : ge(I);
          }
          N += 1;
          var g = a + 112,
            l = B()[(g + 36) >> 2],
            m = B()[(g + 40) >> 2],
            n = B()[(g + 44) >> 2],
            t = B()[(g + 48) >> 2],
            p = B()[(g + 52) >> 2],
            r = !!(p & 64),
            k = (I) => {
              --N;
              f(() => {
                l ? Cb(l)(I) : b?.(I);
              });
            },
            q = (I) => {
              f(() => {
                n ? Cb(n)(I) : d?.(I);
              });
            },
            v = (I) => {
              --N;
              f(() => {
                m ? Cb(m)(I) : c?.(I);
              });
            },
            z = (I) => {
              f(() => {
                t ? Cb(t)(I) : e?.(I);
              });
            },
            L = (I) => {
              Ee(I, k, v, q, z);
            },
            J = (I, bf) => {
              Fe(
                I,
                bf.response,
                (Va) => {
                  --N;
                  f(() => {
                    l ? Cb(l)(Va) : b?.(Va);
                  });
                },
                (Va) => {
                  --N;
                  f(() => {
                    l ? Cb(l)(Va) : b?.(Va);
                  });
                },
              );
            },
            y = (I) => {
              Ee(I, J, v, q, z);
            },
            S = K(g + 0),
            C = !!(p & 16),
            T = !!(p & 4);
          p = !!(p & 32);
          if ("EM_IDB_STORE" === S)
            (L = B()[(g + 84) >> 2]),
              (g = B()[(g + 88) >> 2]),
              Fe(a, w().slice(L, L + g), k, v);
          else if ("EM_IDB_DELETE" === S) He(a, k, v);
          else if (C) {
            if (p) return 0;
            Ee(a, T ? J : k, v, q, z);
          } else Ge(a, k, p ? v : T ? y : L);
          return a;
        },
        U: Le,
        V: Me,
        x: sb,
        u: Ne,
        t: Oe,
        J: Pe,
        s: Qe,
        ha: function () {
          var a = stackTrace(),
            b = Qb(a) + 1,
            c = ye(b);
          P(a, w(), c, b);
          return c;
        },
        L: (a, b) => {
          Lb(w().subarray(a, a + b));
          return 0;
        },
        a: u || D.wasmMemory,
        ia: Ue,
        M: (a, b, c, d) => Ue(a, b, c, d),
      },
      Z = (function () {
        function a(c, d) {
          Z = c.exports;
          M.Fc.push(Z.ua);
          Bb = Z.ya;
          Ea.unshift(Z.pa);
          ya = d;
          Ta("wasm-instantiate");
          return Z;
        }
        var b = { a: $e };
        Sa("wasm-instantiate");
        if (D.instantiateWasm)
          try {
            return D.instantiateWasm(b, a);
          } catch (c) {
            E(`Module.instantiateWasm callback failed with error: ${c}`), ma(c);
          }
        $a(b, function (c) {
          a(c.instance, c.module);
        }).catch(ma);
        return {};
      })(),
      Nd = (a) => (Nd = Z.qa)(a),
      ye = (a) => (ye = Z.ra)(a),
      xb = (D._pthread_self = () => (xb = D._pthread_self = Z.sa)()),
      pb = (a) => (pb = Z.ta)(a);
    D.__emscripten_tls_init = () => (D.__emscripten_tls_init = Z.ua)();
    var Yb = (a, b) => (Yb = Z.va)(a, b),
      Md = (a) => (Md = Z.wa)(a);
    D.__embind_initialize_bindings = () =>
      (D.__embind_initialize_bindings = Z.xa)();
    var ob = () => (ob = Z.za)(),
      Ye = (D.__emscripten_thread_init = (a, b, c, d, e, f) =>
        (Ye = D.__emscripten_thread_init = Z.Aa)(a, b, c, d, e, f));
    D.__emscripten_thread_crashed = () =>
      (D.__emscripten_thread_crashed = Z.Ba)();
    var kb = (a, b, c, d) => (kb = Z.Ca)(a, b, c, d),
      wb = (a) => (wb = Z.Da)(a),
      Db = (D.__emscripten_thread_exit = (a) =>
        (Db = D.__emscripten_thread_exit = Z.Ea)(a)),
      ie = () => (ie = Z.Fa)(),
      Ze = (a) => (Ze = Z.Ga)(a),
      zb = (a, b) => (zb = Z.Ha)(a, b),
      fb = () => (fb = Z.Ia)(),
      gb = (a) => (gb = Z.Ja)(a),
      jb = (a) => (jb = Z.Ka)(a);
    D.dynCall_ji = (a, b) => (D.dynCall_ji = Z.La)(a, b);
    D.dynCall_jiji = (a, b, c, d, e) => (D.dynCall_jiji = Z.Ma)(a, b, c, d, e);
    D.dynCall_viijii = (a, b, c, d, e, f, g) =>
      (D.dynCall_viijii = Z.Na)(a, b, c, d, e, f, g);
    D.dynCall_iiiiij = (a, b, c, d, e, f, g) =>
      (D.dynCall_iiiiij = Z.Oa)(a, b, c, d, e, f, g);
    D.dynCall_iiiiijj = (a, b, c, d, e, f, g, l, m) =>
      (D.dynCall_iiiiijj = Z.Pa)(a, b, c, d, e, f, g, l, m);
    D.dynCall_iiiiiijj = (a, b, c, d, e, f, g, l, m, n) =>
      (D.dynCall_iiiiiijj = Z.Qa)(a, b, c, d, e, f, g, l, m, n);
    D.__ZN2MB2NN28LinearDefragmentingAllocator10Allocation4nullE = 15072;
    D.___start_em_js = 61120;
    D.___stop_em_js = 62113;
    D.addRunDependency = Sa;
    D.removeRunDependency = Ta;
    D.FS_createPath = Lc;
    D.FS_createLazyFile = Oc;
    D.FS_createDevice = Ka;
    D.wasmMemory = u;
    D.keepRuntimeAlive = () => mb || 0 < N;
    D.ExitStatus = bb;
    D.FS_createPreloadedFile = ic;
    D.FS_createDataFile = hc;
    D.FS_unlink = Ec;
    D.PThread = M;
    var af;
    Ra = function cf() {
      af || df();
      af || (Ra = cf);
    };
    function df() {
      function a() {
        if (!af && ((af = !0), (D.calledRun = !0), !za)) {
          Ia();
          la(D);
          if (D.onRuntimeInitialized) D.onRuntimeInitialized();
          if (!F) {
            if (D.postRun)
              for (
                "function" == typeof D.postRun && (D.postRun = [D.postRun]);
                D.postRun.length;

              ) {
                var b = D.postRun.shift();
                Ga.unshift(b);
              }
            Oa(Ga);
          }
        }
      }
      if (!(0 < Pa))
        if (F) la(D), Ia(), startWorker(D);
        else {
          if (D.preRun)
            for (
              "function" == typeof D.preRun && (D.preRun = [D.preRun]);
              D.preRun.length;

            )
              Da.unshift(D.preRun.shift());
          Oa(Da);
          0 < Pa ||
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
    df();
    if ("object" == typeof window && ("undefined" == typeof F || !F)) {
      var ef = () => {
        var a = 0,
          b = !1,
          c = (m) => {
            var n = new XMLHttpRequest();
            n.open("POST", "stdio.html", !1);
            n.send(m);
            try {
              window.close();
            } catch (t) {}
          },
          d = (m) => {
            var n = new XMLHttpRequest();
            ++a;
            n.onreadystatechange = () => {
              4 == n.readyState && 0 == --a && b && c("^exit^" + Aa);
            };
            n.open("POST", "stdio.html", !0);
            n.send(m);
          };
        if (
          -1 != document.URL.search("localhost") ||
          -1 != document.URL.search(":6931/")
        ) {
          var e = 1,
            f = va,
            g = E;
          Fa.unshift(() => {
            0 == a ? c("^exit^" + Aa) : (b = !0);
          });
          va = (m) => {
            d("^out^" + e++ + "^" + encodeURIComponent(m));
            f(m);
          };
          E = (m) => {
            d("^err^" + e++ + "^" + encodeURIComponent(m));
            g(m);
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
      "undefined" != typeof document && ef();
    }

    return moduleArg.ready;
  };
})();
if (typeof exports === "object" && typeof module === "object")
  module.exports = createModule;
else if (typeof define === "function" && define["amd"])
  define([], () => createModule);
