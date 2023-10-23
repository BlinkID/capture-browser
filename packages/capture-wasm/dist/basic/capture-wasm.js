var createModule = (() => {
  var _scriptDir =
    typeof document !== "undefined" && document.currentScript
      ? document.currentScript.src
      : undefined;

  return function (createModule = {}) {
    var h;
    h || (h = typeof createModule !== "undefined" ? createModule : {});
    var aa, ba;
    h.ready = new Promise(function (a, b) {
      aa = a;
      ba = b;
    });
    h.tb || (h.tb = 0);
    h.tb++;
    h.ENVIRONMENT_IS_PTHREAD ||
      h.$ww ||
      (function (a) {
        function b(m, n, r) {
          var p = new XMLHttpRequest();
          p.open("GET", m, !0);
          p.responseType = "arraybuffer";
          p.onprogress = function (q) {
            var k = n;
            q.total && (k = q.total);
            if (q.loaded) {
              p.Yb
                ? (h.Ta[m].loaded = q.loaded)
                : ((p.Yb = !0),
                  h.Ta || (h.Ta = {}),
                  (h.Ta[m] = { loaded: q.loaded, total: k }));
              var t = (k = q = 0),
                x;
              for (x in h.Ta) {
                var z = h.Ta[x];
                q += z.total;
                k += z.loaded;
                t++;
              }
              q = Math.ceil((q * h.tb) / t);
              h.setStatus &&
                h.setStatus("Downloading data... (" + k + "/" + q + ")");
            } else !h.Ta && h.setStatus && h.setStatus("Downloading data...");
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
              r(p.response);
            else throw Error(p.statusText + " : " + p.responseURL);
          };
          p.send(null);
        }
        function c(m) {
          console.error("package error:", m);
        }
        function d() {
          function m(q, k, t) {
            this.start = q;
            this.end = k;
            this.audio = t;
          }
          function n(q) {
            if (!q) throw "Loading data file failed." + Error().stack;
            if (q.constructor.name !== ArrayBuffer.name)
              throw "bad input to processPackageData" + Error().stack;
            q = new Uint8Array(q);
            m.prototype.bc = q;
            q = a.files;
            for (var k = 0; k < q.length; ++k)
              m.prototype.Cb[q[k].filename].onload();
            h.removeRunDependency(
              "datafile_/Users/ivan/Dev/imagecapture-browser.worktrees/master/packages/capture-wasm/dist/basic/capture-wasm.data",
            );
          }
          h.FS_createPath("/", "microblink", !0, !0);
          h.FS_createPath("/microblink", "capture", !0, !0);
          m.prototype = {
            Cb: {},
            open: function (q, k) {
              this.name = k;
              this.Cb[k] = this;
              h.addRunDependency("fp " + this.name);
            },
            send: function () {},
            onload: function () {
              this.finish(this.bc.subarray(this.start, this.end));
            },
            finish: function (q) {
              h.FS_createDataFile(this.name, null, q, !0, !0, !0);
              h.removeRunDependency("fp " + this.name);
              this.Cb[this.name] = null;
            },
          };
          for (var r = a.files, p = 0; p < r.length; ++p)
            new m(r[p].start, r[p].end, r[p].audio || 0).open(
              "GET",
              r[p].filename,
            );
          h.addRunDependency(
            "datafile_/Users/ivan/Dev/imagecapture-browser.worktrees/master/packages/capture-wasm/dist/basic/capture-wasm.data",
          );
          h.Qb || (h.Qb = {});
          h.Qb[
            "/Users/ivan/Dev/imagecapture-browser.worktrees/master/packages/capture-wasm/dist/basic/capture-wasm.data"
          ] = { Kc: !1 };
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
        "function" !== typeof h.locateFilePackage ||
          h.locateFile ||
          ((h.locateFile = h.locateFilePackage),
          u(
            "warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)",
          ));
        var e = h.locateFile
            ? h.locateFile("capture-wasm.data", "")
            : "capture-wasm.data",
          f = a.remote_package_size,
          g = null,
          l = h.getPreloadedPackage ? h.getPreloadedPackage(e, f) : null;
        l ||
          b(
            e,
            f,
            function (m) {
              g ? (g(m), (g = null)) : (l = m);
            },
            c,
          );
        h.calledRun ? d() : (h.preRun || (h.preRun = []), h.preRun.push(d));
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
    h.onAbort = function (a) {
      u("Aborted with message: " + a);
      try {
        throw new WebAssembly.RuntimeError(a);
      } catch (b) {
        u("Stacktrace: " + b.stack);
      }
    };
    var ca = Object.assign({}, h),
      da = "./this.program",
      ea = (a, b) => {
        throw b;
      },
      fa = "",
      ha,
      ia,
      ja;
    fa = self.location.href;
    _scriptDir && (fa = _scriptDir);
    fa =
      0 !== fa.indexOf("blob:")
        ? fa.substr(0, fa.replace(/[?#].*/, "").lastIndexOf("/") + 1)
        : "";
    ha = (a) => {
      var b = new XMLHttpRequest();
      b.open("GET", a, !1);
      b.send(null);
      return b.responseText;
    };
    ja = (a) => {
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
    var ka = h.print || console.log.bind(console),
      u = h.printErr || console.warn.bind(console);
    Object.assign(h, ca);
    ca = null;
    h.thisProgram && (da = h.thisProgram);
    h.quit && (ea = h.quit);
    var la;
    h.wasmBinary && (la = h.wasmBinary);
    var noExitRuntime = h.noExitRuntime || !0;
    "object" != typeof WebAssembly && ma("no native wasm support detected");
    var na,
      oa = !1,
      pa = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
    function qa(a, b, c) {
      var d = b + c;
      for (c = b; a[c] && !(c >= d); ) ++c;
      if (16 < c - b && a.buffer && pa) return pa.decode(a.subarray(b, c));
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
    }
    function v(a, b) {
      return a ? qa(w, a, b) : "";
    }
    function A(a, b, c, d) {
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
    }
    function ra(a) {
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
    var C, w, sa, D, E, I, ta, ua;
    function va() {
      var a = na.buffer;
      h.HEAP8 = C = new Int8Array(a);
      h.HEAP16 = sa = new Int16Array(a);
      h.HEAP32 = E = new Int32Array(a);
      h.HEAPU8 = w = new Uint8Array(a);
      h.HEAPU16 = D = new Uint16Array(a);
      h.HEAPU32 = I = new Uint32Array(a);
      h.HEAPF32 = ta = new Float32Array(a);
      h.HEAPF64 = ua = new Float64Array(a);
    }
    var wa,
      xa = [],
      ya = [],
      za = [];
    function Aa() {
      var a = h.preRun.shift();
      xa.unshift(a);
    }
    var Ba = 0,
      Ca = null,
      Da = null;
    function Ea() {
      Ba++;
      h.monitorRunDependencies && h.monitorRunDependencies(Ba);
    }
    function Fa() {
      Ba--;
      h.monitorRunDependencies && h.monitorRunDependencies(Ba);
      if (0 == Ba && (null !== Ca && (clearInterval(Ca), (Ca = null)), Da)) {
        var a = Da;
        Da = null;
        a();
      }
    }
    function ma(a) {
      if (h.onAbort) h.onAbort(a);
      a = "Aborted(" + a + ")";
      u(a);
      oa = !0;
      a = new WebAssembly.RuntimeError(
        a + ". Build with -sASSERTIONS for more info.",
      );
      ba(a);
      throw a;
    }
    function Ga(a) {
      return a.startsWith("data:application/octet-stream;base64,");
    }
    var Ha;
    Ha = "capture-wasm.wasm";
    if (!Ga(Ha)) {
      var Ia = Ha;
      Ha = h.locateFile ? h.locateFile(Ia, fa) : fa + Ia;
    }
    function Ja(a) {
      try {
        if (a == Ha && la) return new Uint8Array(la);
        if (ja) return ja(a);
        throw "both async and sync fetching of the wasm failed";
      } catch (b) {
        ma(b);
      }
    }
    function Ka(a) {
      return la || "function" != typeof fetch
        ? Promise.resolve().then(function () {
            return Ja(a);
          })
        : fetch(a, { credentials: "same-origin" })
            .then(function (b) {
              if (!b.ok) throw "failed to load wasm binary file at '" + a + "'";
              return b.arrayBuffer();
            })
            .catch(function () {
              return Ja(a);
            });
    }
    function La(a, b, c) {
      return Ka(a)
        .then(function (d) {
          return WebAssembly.instantiate(d, b);
        })
        .then(function (d) {
          return d;
        })
        .then(c, function (d) {
          u("failed to asynchronously prepare wasm: " + d);
          ma(d);
        });
    }
    function Ma(a, b) {
      var c = Ha;
      return la ||
        "function" != typeof WebAssembly.instantiateStreaming ||
        Ga(c) ||
        "function" != typeof fetch
        ? La(c, a, b)
        : fetch(c, { credentials: "same-origin" }).then(function (d) {
            return WebAssembly.instantiateStreaming(d, a).then(b, function (e) {
              u("wasm streaming compile failed: " + e);
              u("falling back to ArrayBuffer instantiation");
              return La(c, a, b);
            });
          });
    }
    var J,
      K,
      Pa = {
        60148: (a, b, c, d) => {
          a = v(a);
          b = v(b);
          c = v(c);
          d = v(d);
          throw Error(a + b + c + d);
        },
        60364: (a, b) => {
          a = v(a);
          b = v(b);
          throw Error(a + b);
        },
      };
    function Qa(a) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + a + ")";
      this.status = a;
    }
    function Ra(a) {
      for (; 0 < a.length; ) a.shift()(h);
    }
    var Sa = (a, b) => {
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
      L = (a) => {
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
      Ta = (a) => {
        var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
          .exec(a)
          .slice(1);
        a = b[0];
        b = b[1];
        if (!a && !b) return ".";
        b && (b = b.substr(0, b.length - 1));
        return a + b;
      },
      Ua = (a) => {
        if ("/" === a) return "/";
        a = L(a);
        a = a.replace(/\/$/, "");
        var b = a.lastIndexOf("/");
        return -1 === b ? a : a.substr(b + 1);
      };
    function Va() {
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
      return () => ma("randomDevice");
    }
    function Wa() {
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
    function Xa(a, b) {
      var c = Array(ra(a) + 1);
      a = A(a, c, 0, c.length);
      b && (c.length = a);
      return c;
    }
    var Ya = [];
    function Za(a, b) {
      Ya[a] = { input: [], Aa: [], Xa: b };
      $a(a, ab);
    }
    var ab = {
        open: function (a) {
          var b = Ya[a.node.bb];
          if (!b) throw new N(43);
          a.Ea = b;
          a.seekable = !1;
        },
        close: function (a) {
          a.Ea.Xa.ib(a.Ea);
        },
        ib: function (a) {
          a.Ea.Xa.ib(a.Ea);
        },
        read: function (a, b, c, d) {
          if (!a.Ea || !a.Ea.Xa.Nb) throw new N(60);
          for (var e = 0, f = 0; f < d; f++) {
            try {
              var g = a.Ea.Xa.Nb(a.Ea);
            } catch (l) {
              throw new N(29);
            }
            if (void 0 === g && 0 === e) throw new N(6);
            if (null === g || void 0 === g) break;
            e++;
            b[c + f] = g;
          }
          e && (a.node.timestamp = Date.now());
          return e;
        },
        write: function (a, b, c, d) {
          if (!a.Ea || !a.Ea.Xa.yb) throw new N(60);
          try {
            for (var e = 0; e < d; e++) a.Ea.Xa.yb(a.Ea, b[c + e]);
          } catch (f) {
            throw new N(29);
          }
          d && (a.node.timestamp = Date.now());
          return e;
        },
      },
      bb = {
        Nb: function (a) {
          if (!a.input.length) {
            var b = null;
            "undefined" != typeof window && "function" == typeof window.prompt
              ? ((b = window.prompt("Input: ")), null !== b && (b += "\n"))
              : "function" == typeof readline &&
                ((b = readline()), null !== b && (b += "\n"));
            if (!b) return null;
            a.input = Xa(b, !0);
          }
          return a.input.shift();
        },
        yb: function (a, b) {
          null === b || 10 === b
            ? (ka(qa(a.Aa, 0)), (a.Aa = []))
            : 0 != b && a.Aa.push(b);
        },
        ib: function (a) {
          a.Aa && 0 < a.Aa.length && (ka(qa(a.Aa, 0)), (a.Aa = []));
        },
      },
      cb = {
        yb: function (a, b) {
          null === b || 10 === b
            ? (u(qa(a.Aa, 0)), (a.Aa = []))
            : 0 != b && a.Aa.push(b);
        },
        ib: function (a) {
          a.Aa && 0 < a.Aa.length && (u(qa(a.Aa, 0)), (a.Aa = []));
        },
      };
    function db(a) {
      a = 65536 * Math.ceil(a / 65536);
      var b = eb(65536, a);
      b ? (w.fill(0, b, b + a), (a = b)) : (a = 0);
      return a;
    }
    var O = {
      Ka: null,
      Ma: function () {
        return O.createNode(null, "/", 16895, 0);
      },
      createNode: function (a, b, c, d) {
        if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new N(63);
        O.Ka ||
          (O.Ka = {
            dir: {
              node: {
                Ja: O.ua.Ja,
                Da: O.ua.Da,
                Ya: O.ua.Ya,
                mb: O.ua.mb,
                Ub: O.ua.Ub,
                sb: O.ua.sb,
                Vb: O.ua.Vb,
                Tb: O.ua.Tb,
                pb: O.ua.pb,
              },
              stream: { Qa: O.va.Qa },
            },
            file: {
              node: { Ja: O.ua.Ja, Da: O.ua.Da },
              stream: {
                Qa: O.va.Qa,
                read: O.va.read,
                write: O.va.write,
                Eb: O.va.Eb,
                Za: O.va.Za,
                nb: O.va.nb,
              },
            },
            link: {
              node: { Ja: O.ua.Ja, Da: O.ua.Da, cb: O.ua.cb },
              stream: {},
            },
            Hb: { node: { Ja: O.ua.Ja, Da: O.ua.Da }, stream: fb },
          });
        c = gb(a, b, c, d);
        16384 === (c.mode & 61440)
          ? ((c.ua = O.Ka.dir.node), (c.va = O.Ka.dir.stream), (c.ta = {}))
          : 32768 === (c.mode & 61440)
          ? ((c.ua = O.Ka.file.node),
            (c.va = O.Ka.file.stream),
            (c.ya = 0),
            (c.ta = null))
          : 40960 === (c.mode & 61440)
          ? ((c.ua = O.Ka.link.node), (c.va = O.Ka.link.stream))
          : 8192 === (c.mode & 61440) &&
            ((c.ua = O.Ka.Hb.node), (c.va = O.Ka.Hb.stream));
        c.timestamp = Date.now();
        a && ((a.ta[b] = c), (a.timestamp = c.timestamp));
        return c;
      },
      Lc: function (a) {
        return a.ta
          ? a.ta.subarray
            ? a.ta.subarray(0, a.ya)
            : new Uint8Array(a.ta)
          : new Uint8Array(0);
      },
      Kb: function (a, b) {
        var c = a.ta ? a.ta.length : 0;
        c >= b ||
          ((b = Math.max(b, (c * (1048576 > c ? 2 : 1.125)) >>> 0)),
          0 != c && (b = Math.max(b, 256)),
          (c = a.ta),
          (a.ta = new Uint8Array(b)),
          0 < a.ya && a.ta.set(c.subarray(0, a.ya), 0));
      },
      yc: function (a, b) {
        if (a.ya != b)
          if (0 == b) (a.ta = null), (a.ya = 0);
          else {
            var c = a.ta;
            a.ta = new Uint8Array(b);
            c && a.ta.set(c.subarray(0, Math.min(b, a.ya)));
            a.ya = b;
          }
      },
      ua: {
        Ja: function (a) {
          var b = {};
          b.fc = 8192 === (a.mode & 61440) ? a.id : 1;
          b.vb = a.id;
          b.mode = a.mode;
          b.uc = 1;
          b.uid = 0;
          b.nc = 0;
          b.bb = a.bb;
          b.size =
            16384 === (a.mode & 61440)
              ? 4096
              : 32768 === (a.mode & 61440)
              ? a.ya
              : 40960 === (a.mode & 61440)
              ? a.link.length
              : 0;
          b.Zb = new Date(a.timestamp);
          b.tc = new Date(a.timestamp);
          b.dc = new Date(a.timestamp);
          b.$b = 4096;
          b.ac = Math.ceil(b.size / b.$b);
          return b;
        },
        Da: function (a, b) {
          void 0 !== b.mode && (a.mode = b.mode);
          void 0 !== b.timestamp && (a.timestamp = b.timestamp);
          void 0 !== b.size && O.yc(a, b.size);
        },
        Ya: function () {
          throw hb[44];
        },
        mb: function (a, b, c, d) {
          return O.createNode(a, b, c, d);
        },
        Ub: function (a, b, c) {
          if (16384 === (a.mode & 61440)) {
            try {
              var d = ib(b, c);
            } catch (f) {}
            if (d) for (var e in d.ta) throw new N(55);
          }
          delete a.parent.ta[a.name];
          a.parent.timestamp = Date.now();
          a.name = c;
          b.ta[c] = a;
          b.timestamp = a.parent.timestamp;
          a.parent = b;
        },
        sb: function (a, b) {
          delete a.ta[b];
          a.timestamp = Date.now();
        },
        Vb: function (a, b) {
          var c = ib(a, b),
            d;
          for (d in c.ta) throw new N(55);
          delete a.ta[b];
          a.timestamp = Date.now();
        },
        Tb: function (a) {
          var b = [".", ".."],
            c;
          for (c in a.ta) a.ta.hasOwnProperty(c) && b.push(c);
          return b;
        },
        pb: function (a, b, c) {
          a = O.createNode(a, b, 41471, 0);
          a.link = c;
          return a;
        },
        cb: function (a) {
          if (40960 !== (a.mode & 61440)) throw new N(28);
          return a.link;
        },
      },
      va: {
        read: function (a, b, c, d, e) {
          var f = a.node.ta;
          if (e >= a.node.ya) return 0;
          a = Math.min(a.node.ya - e, d);
          if (8 < a && f.subarray) b.set(f.subarray(e, e + a), c);
          else for (d = 0; d < a; d++) b[c + d] = f[e + d];
          return a;
        },
        write: function (a, b, c, d, e, f) {
          b.buffer === C.buffer && (f = !1);
          if (!d) return 0;
          a = a.node;
          a.timestamp = Date.now();
          if (b.subarray && (!a.ta || a.ta.subarray)) {
            if (f) return (a.ta = b.subarray(c, c + d)), (a.ya = d);
            if (0 === a.ya && 0 === e)
              return (a.ta = b.slice(c, c + d)), (a.ya = d);
            if (e + d <= a.ya) return a.ta.set(b.subarray(c, c + d), e), d;
          }
          O.Kb(a, e + d);
          if (a.ta.subarray && b.subarray) a.ta.set(b.subarray(c, c + d), e);
          else for (f = 0; f < d; f++) a.ta[e + f] = b[c + f];
          a.ya = Math.max(a.ya, e + d);
          return d;
        },
        Qa: function (a, b, c) {
          1 === c
            ? (b += a.position)
            : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.ya);
          if (0 > b) throw new N(28);
          return b;
        },
        Eb: function (a, b, c) {
          O.Kb(a.node, b + c);
          a.node.ya = Math.max(a.node.ya, b + c);
        },
        Za: function (a, b, c, d, e) {
          if (32768 !== (a.node.mode & 61440)) throw new N(43);
          a = a.node.ta;
          if (e & 2 || a.buffer !== C.buffer) {
            if (0 < c || c + b < a.length)
              a = a.subarray
                ? a.subarray(c, c + b)
                : Array.prototype.slice.call(a, c, c + b);
            c = !0;
            b = db(b);
            if (!b) throw new N(48);
            C.set(a, b);
          } else (c = !1), (b = a.byteOffset);
          return { xa: b, Fb: c };
        },
        nb: function (a, b, c, d) {
          O.va.write(a, b, 0, d, c, !1);
          return 0;
        },
      },
    };
    function jb(a, b, c) {
      var d = "al " + a;
      ia(
        a,
        (e) => {
          e || ma('Loading data file "' + a + '" failed (no arrayBuffer).');
          b(new Uint8Array(e));
          d && Fa(d);
        },
        () => {
          if (c) c();
          else throw 'Loading data file "' + a + '" failed.';
        },
      );
      d && Ea(d);
    }
    var kb = null,
      lb = {},
      mb = [],
      nb = 1,
      ob = null,
      pb = !0,
      N = null,
      hb = {},
      P = (a, b = {}) => {
        a = Wa(a);
        if (!a) return { path: "", node: null };
        b = Object.assign({ Mb: !0, Ab: 0 }, b);
        if (8 < b.Ab) throw new N(32);
        a = a.split("/").filter((g) => !!g);
        for (var c = kb, d = "/", e = 0; e < a.length; e++) {
          var f = e === a.length - 1;
          if (f && b.parent) break;
          c = ib(c, a[e]);
          d = L(d + "/" + a[e]);
          c.$a && (!f || (f && b.Mb)) && (c = c.$a.root);
          if (!f || b.hb)
            for (f = 0; 40960 === (c.mode & 61440); )
              if (
                ((c = qb(d)),
                (d = Wa(Ta(d), c)),
                (c = P(d, { Ab: b.Ab + 1 }).node),
                40 < f++)
              )
                throw new N(32);
        }
        return { path: d, node: c };
      },
      rb = (a) => {
        for (var b; ; ) {
          if (a === a.parent)
            return (
              (a = a.Ma.Pb),
              b ? ("/" !== a[a.length - 1] ? a + "/" + b : a + b) : a
            );
          b = b ? a.name + "/" + b : a.name;
          a = a.parent;
        }
      },
      sb = (a, b) => {
        for (var c = 0, d = 0; d < b.length; d++)
          c = ((c << 5) - c + b.charCodeAt(d)) | 0;
        return ((a + c) >>> 0) % ob.length;
      },
      ib = (a, b) => {
        var c;
        if ((c = (c = tb(a, "x")) ? c : a.ua.Ya ? 0 : 2)) throw new N(c, a);
        for (c = ob[sb(a.id, b)]; c; c = c.Wa) {
          var d = c.name;
          if (c.parent.id === a.id && d === b) return c;
        }
        return a.ua.Ya(a, b);
      },
      gb = (a, b, c, d) => {
        a = new ub(a, b, c, d);
        b = sb(a.parent.id, a.name);
        a.Wa = ob[b];
        return (ob[b] = a);
      },
      vb = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 },
      wb = (a) => {
        var b = ["r", "w", "rw"][a & 3];
        a & 512 && (b += "w");
        return b;
      },
      tb = (a, b) => {
        if (pb) return 0;
        if (!b.includes("r") || a.mode & 292) {
          if (
            (b.includes("w") && !(a.mode & 146)) ||
            (b.includes("x") && !(a.mode & 73))
          )
            return 2;
        } else return 2;
        return 0;
      },
      xb = (a, b) => {
        try {
          return ib(a, b), 20;
        } catch (c) {}
        return tb(a, "wx");
      },
      yb = () => {
        for (var a = 0; 4096 >= a; a++) if (!mb[a]) return a;
        throw new N(33);
      },
      Ab = (a) => {
        zb ||
          ((zb = function () {
            this.ob = {};
          }),
          (zb.prototype = {}),
          Object.defineProperties(zb.prototype, {
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
                return this.ob.flags;
              },
              set: function (c) {
                this.ob.flags = c;
              },
            },
            position: {
              get: function () {
                return this.ob.position;
              },
              set: function (c) {
                this.ob.position = c;
              },
            },
          }));
        a = Object.assign(new zb(), a);
        var b = yb();
        a.Pa = b;
        return (mb[b] = a);
      },
      fb = {
        open: (a) => {
          a.va = lb[a.node.bb].va;
          a.va.open && a.va.open(a);
        },
        Qa: () => {
          throw new N(70);
        },
      },
      $a = (a, b) => {
        lb[a] = { va: b };
      },
      Bb = (a, b) => {
        var c = "/" === b,
          d = !b;
        if (c && kb) throw new N(10);
        if (!c && !d) {
          var e = P(b, { Mb: !1 });
          b = e.path;
          e = e.node;
          if (e.$a) throw new N(10);
          if (16384 !== (e.mode & 61440)) throw new N(54);
        }
        b = { type: a, Oc: {}, Pb: b, sc: [] };
        a = a.Ma(b);
        a.Ma = b;
        b.root = a;
        c ? (kb = a) : e && ((e.$a = b), e.Ma && e.Ma.sc.push(b));
      },
      Q = (a, b, c) => {
        var d = P(a, { parent: !0 }).node;
        a = Ua(a);
        if (!a || "." === a || ".." === a) throw new N(28);
        var e = xb(d, a);
        if (e) throw new N(e);
        if (!d.ua.mb) throw new N(63);
        return d.ua.mb(d, a, b, c);
      },
      Cb = (a, b, c) => {
        "undefined" == typeof c && ((c = b), (b = 438));
        return Q(a, b | 8192, c);
      },
      Db = (a, b) => {
        if (!Wa(a)) throw new N(44);
        var c = P(b, { parent: !0 }).node;
        if (!c) throw new N(44);
        b = Ua(b);
        var d = xb(c, b);
        if (d) throw new N(d);
        if (!c.ua.pb) throw new N(63);
        c.ua.pb(c, b, a);
      },
      Eb = (a) => {
        var b = P(a, { parent: !0 }).node;
        if (!b) throw new N(44);
        var c = Ua(a);
        a = ib(b, c);
        a: {
          try {
            var d = ib(b, c);
          } catch (f) {
            d = f.Fa;
            break a;
          }
          var e = tb(b, "wx");
          d = e ? e : 16384 === (d.mode & 61440) ? 31 : 0;
        }
        if (d) throw new N(d);
        if (!b.ua.sb) throw new N(63);
        if (a.$a) throw new N(10);
        b.ua.sb(b, c);
        b = sb(a.parent.id, a.name);
        if (ob[b] === a) ob[b] = a.Wa;
        else
          for (b = ob[b]; b; ) {
            if (b.Wa === a) {
              b.Wa = a.Wa;
              break;
            }
            b = b.Wa;
          }
      },
      qb = (a) => {
        a = P(a).node;
        if (!a) throw new N(44);
        if (!a.ua.cb) throw new N(28);
        return Wa(rb(a.parent), a.ua.cb(a));
      },
      Fb = (a, b) => {
        a = P(a, { hb: !b }).node;
        if (!a) throw new N(44);
        if (!a.ua.Ja) throw new N(63);
        return a.ua.Ja(a);
      },
      Gb = (a) => Fb(a, !0),
      Hb = (a, b) => {
        a = "string" == typeof a ? P(a, { hb: !0 }).node : a;
        if (!a.ua.Da) throw new N(63);
        a.ua.Da(a, {
          mode: (b & 4095) | (a.mode & -4096),
          timestamp: Date.now(),
        });
      },
      Jb = (a, b, c) => {
        if ("" === a) throw new N(44);
        if ("string" == typeof b) {
          var d = vb[b];
          if ("undefined" == typeof d)
            throw Error("Unknown file open mode: " + b);
          b = d;
        }
        c = b & 64 ? (("undefined" == typeof c ? 438 : c) & 4095) | 32768 : 0;
        if ("object" == typeof a) var e = a;
        else {
          a = L(a);
          try {
            e = P(a, { hb: !(b & 131072) }).node;
          } catch (f) {}
        }
        d = !1;
        if (b & 64)
          if (e) {
            if (b & 128) throw new N(20);
          } else (e = Q(a, c, 0)), (d = !0);
        if (!e) throw new N(44);
        8192 === (e.mode & 61440) && (b &= -513);
        if (b & 65536 && 16384 !== (e.mode & 61440)) throw new N(54);
        if (
          !d &&
          (c = e
            ? 40960 === (e.mode & 61440)
              ? 32
              : 16384 === (e.mode & 61440) && ("r" !== wb(b) || b & 512)
              ? 31
              : tb(e, wb(b))
            : 44)
        )
          throw new N(c);
        if (b & 512 && !d) {
          c = e;
          c = "string" == typeof c ? P(c, { hb: !0 }).node : c;
          if (!c.ua.Da) throw new N(63);
          if (16384 === (c.mode & 61440)) throw new N(31);
          if (32768 !== (c.mode & 61440)) throw new N(28);
          if ((d = tb(c, "w"))) throw new N(d);
          c.ua.Da(c, { size: 0, timestamp: Date.now() });
        }
        b &= -131713;
        e = Ab({
          node: e,
          path: rb(e),
          flags: b,
          seekable: !0,
          position: 0,
          va: e.va,
          Jc: [],
          error: !1,
        });
        e.va.open && e.va.open(e);
        !h.logReadFiles || b & 1 || (Ib || (Ib = {}), a in Ib || (Ib[a] = 1));
        return e;
      },
      Kb = (a) => {
        if (null === a.Pa) throw new N(8);
        a.ub && (a.ub = null);
        try {
          a.va.close && a.va.close(a);
        } catch (b) {
          throw b;
        } finally {
          mb[a.Pa] = null;
        }
        a.Pa = null;
      },
      Lb = (a, b, c) => {
        if (null === a.Pa) throw new N(8);
        if (!a.seekable || !a.va.Qa) throw new N(70);
        if (0 != c && 1 != c && 2 != c) throw new N(28);
        a.position = a.va.Qa(a, b, c);
        a.Jc = [];
      },
      Mb = (a, b, c, d, e, f) => {
        if (0 > d || 0 > e) throw new N(28);
        if (null === a.Pa) throw new N(8);
        if (0 === (a.flags & 2097155)) throw new N(8);
        if (16384 === (a.node.mode & 61440)) throw new N(31);
        if (!a.va.write) throw new N(28);
        a.seekable && a.flags & 1024 && Lb(a, 0, 2);
        var g = "undefined" != typeof e;
        if (!g) e = a.position;
        else if (!a.seekable) throw new N(70);
        b = a.va.write(a, b, c, d, e, f);
        g || (a.position += b);
        return b;
      },
      Nb = () => {
        N ||
          ((N = function (a, b) {
            this.name = "ErrnoError";
            this.node = b;
            this.Ac = function (c) {
              this.Fa = c;
            };
            this.Ac(a);
            this.message = "FS error";
          }),
          (N.prototype = Error()),
          (N.prototype.constructor = N),
          [44].forEach((a) => {
            hb[a] = new N(a);
            hb[a].stack = "<generic error, no stack>";
          }));
      },
      Ob,
      Pb = (a, b) => {
        var c = 0;
        a && (c |= 365);
        b && (c |= 146);
        return c;
      },
      Qb = (a, b) => {
        a = "string" == typeof a ? a : rb(a);
        for (b = b.split("/").reverse(); b.length; ) {
          var c = b.pop();
          if (c) {
            var d = L(a + "/" + c);
            try {
              Q(d, 16895, 0);
            } catch (e) {}
            a = d;
          }
        }
        return d;
      },
      Rb = (a, b, c, d) => {
        a = L(("string" == typeof a ? a : rb(a)) + "/" + b);
        c = Pb(c, d);
        return Q(a, ((void 0 !== c ? c : 438) & 4095) | 32768, 0);
      },
      Sb = (a, b, c, d, e, f) => {
        var g = b;
        a &&
          ((a = "string" == typeof a ? a : rb(a)),
          (g = b ? L(a + "/" + b) : a));
        a = Pb(d, e);
        g = Q(g, ((void 0 !== a ? a : 438) & 4095) | 32768, 0);
        if (c) {
          if ("string" == typeof c) {
            b = Array(c.length);
            d = 0;
            for (e = c.length; d < e; ++d) b[d] = c.charCodeAt(d);
            c = b;
          }
          Hb(g, a | 146);
          b = Jb(g, 577);
          Mb(b, c, 0, c.length, 0, f);
          Kb(b);
          Hb(g, a);
        }
        return g;
      },
      R = (a, b, c, d) => {
        a = L(("string" == typeof a ? a : rb(a)) + "/" + b);
        b = Pb(!!c, !!d);
        R.Ob || (R.Ob = 64);
        var e = (R.Ob++ << 8) | 0;
        $a(e, {
          open: (f) => {
            f.seekable = !1;
          },
          close: () => {
            d && d.buffer && d.buffer.length && d(10);
          },
          read: (f, g, l, m) => {
            for (var n = 0, r = 0; r < m; r++) {
              try {
                var p = c();
              } catch (q) {
                throw new N(29);
              }
              if (void 0 === p && 0 === n) throw new N(6);
              if (null === p || void 0 === p) break;
              n++;
              g[l + r] = p;
            }
            n && (f.node.timestamp = Date.now());
            return n;
          },
          write: (f, g, l, m) => {
            for (var n = 0; n < m; n++)
              try {
                d(g[l + n]);
              } catch (r) {
                throw new N(29);
              }
            m && (f.node.timestamp = Date.now());
            return n;
          },
        });
        return Cb(a, b, e);
      },
      Tb = (a) => {
        if (!(a.pc || a.qc || a.link || a.ta)) {
          if ("undefined" != typeof XMLHttpRequest)
            throw Error(
              "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
            );
          if (ha)
            try {
              (a.ta = Xa(ha(a.url), !0)), (a.ya = a.ta.length);
            } catch (b) {
              throw new N(29);
            }
          else throw Error("Cannot load without read() or XMLHttpRequest.");
        }
      },
      Ub = (a, b, c, d, e) => {
        function f() {
          this.xb = !1;
          this.gb = [];
        }
        function g(p, q, k, t, x) {
          p = p.node.ta;
          if (x >= p.length) return 0;
          t = Math.min(p.length - x, t);
          if (p.slice) for (var z = 0; z < t; z++) q[k + z] = p[x + z];
          else for (z = 0; z < t; z++) q[k + z] = p.get(x + z);
          return t;
        }
        f.prototype.get = function (p) {
          if (!(p > this.length - 1 || 0 > p)) {
            var q = p % this.Ib;
            return this.jb((p / this.Ib) | 0)[q];
          }
        };
        f.prototype.zc = function (p) {
          this.jb = p;
        };
        f.prototype.Gb = function () {
          var p = new XMLHttpRequest();
          p.open("HEAD", c, !1);
          p.send(null);
          if (!((200 <= p.status && 300 > p.status) || 304 === p.status))
            throw Error("Couldn't load " + c + ". Status: " + p.status);
          var q = Number(p.getResponseHeader("Content-length")),
            k,
            t = (k = p.getResponseHeader("Accept-Ranges")) && "bytes" === k;
          p = (k = p.getResponseHeader("Content-Encoding")) && "gzip" === k;
          var x = 1048576;
          t || (x = q);
          var z = this;
          z.zc((F) => {
            var G = F * x,
              y = (F + 1) * x - 1;
            y = Math.min(y, q - 1);
            if ("undefined" == typeof z.gb[F]) {
              var M = z.gb;
              if (G > y)
                throw Error(
                  "invalid range (" + G + ", " + y + ") or no bytes requested!",
                );
              if (y > q - 1)
                throw Error(
                  "only " + q + " bytes available! programmer error!",
                );
              var B = new XMLHttpRequest();
              B.open("GET", c, !1);
              q !== x && B.setRequestHeader("Range", "bytes=" + G + "-" + y);
              B.responseType = "arraybuffer";
              B.overrideMimeType &&
                B.overrideMimeType("text/plain; charset=x-user-defined");
              B.send(null);
              if (!((200 <= B.status && 300 > B.status) || 304 === B.status))
                throw Error("Couldn't load " + c + ". Status: " + B.status);
              G =
                void 0 !== B.response
                  ? new Uint8Array(B.response || [])
                  : Xa(B.responseText || "", !0);
              M[F] = G;
            }
            if ("undefined" == typeof z.gb[F]) throw Error("doXHR failed!");
            return z.gb[F];
          });
          if (p || !q)
            (x = q = 1),
              (x = q = this.jb(0).length),
              ka(
                "LazyFiles on gzip forces download of the whole file when length is accessed",
              );
          this.Xb = q;
          this.Wb = x;
          this.xb = !0;
        };
        if ("undefined" != typeof XMLHttpRequest) {
          var l = new f();
          Object.defineProperties(l, {
            length: {
              get: function () {
                this.xb || this.Gb();
                return this.Xb;
              },
            },
            Ib: {
              get: function () {
                this.xb || this.Gb();
                return this.Wb;
              },
            },
          });
          var m = void 0;
        } else (m = c), (l = void 0);
        var n = Rb(a, b, d, e);
        l ? (n.ta = l) : m && ((n.ta = null), (n.url = m));
        Object.defineProperties(n, {
          ya: {
            get: function () {
              return this.ta.length;
            },
          },
        });
        var r = {};
        Object.keys(n.va).forEach((p) => {
          var q = n.va[p];
          r[p] = function () {
            Tb(n);
            return q.apply(null, arguments);
          };
        });
        r.read = (p, q, k, t, x) => {
          Tb(n);
          return g(p, q, k, t, x);
        };
        r.Za = (p, q, k) => {
          Tb(n);
          var t = db(q);
          if (!t) throw new N(48);
          g(p, C, t, q, k);
          return { xa: t, Fb: !0 };
        };
        n.va = r;
        return n;
      },
      Wb = (a, b, c, d, e, f, g, l, m, n) => {
        function r(k) {
          function t(x) {
            n && n();
            l || Sb(a, b, x, d, e, m);
            f && f();
            Fa(q);
          }
          Vb.Mc(k, p, t, () => {
            g && g();
            Fa(q);
          }) || t(k);
        }
        var p = b ? Wa(L(a + "/" + b)) : a,
          q = "cp " + p;
        Ea(q);
        "string" == typeof c ? jb(c, (k) => r(k), g) : r(c);
      },
      S = {},
      zb,
      Ib;
    function Xb(a, b, c) {
      if ("/" === b.charAt(0)) return b;
      a = -100 === a ? "/" : Yb(a).path;
      if (0 == b.length) {
        if (!c) throw new N(44);
        return a;
      }
      return L(a + "/" + b);
    }
    function Zb(a, b, c) {
      try {
        var d = a(b);
      } catch (f) {
        if (f && f.node && L(b) !== L(rb(f.node))) return -54;
        throw f;
      }
      E[c >> 2] = d.fc;
      E[(c + 8) >> 2] = d.vb;
      E[(c + 12) >> 2] = d.mode;
      I[(c + 16) >> 2] = d.uc;
      E[(c + 20) >> 2] = d.uid;
      E[(c + 24) >> 2] = d.nc;
      E[(c + 28) >> 2] = d.bb;
      K = [
        d.size >>> 0,
        ((J = d.size),
        1 <= +Math.abs(J)
          ? 0 < J
            ? (Math.min(+Math.floor(J / 4294967296), 4294967295) | 0) >>> 0
            : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      E[(c + 40) >> 2] = K[0];
      E[(c + 44) >> 2] = K[1];
      E[(c + 48) >> 2] = 4096;
      E[(c + 52) >> 2] = d.ac;
      a = d.Zb.getTime();
      b = d.tc.getTime();
      var e = d.dc.getTime();
      K = [
        Math.floor(a / 1e3) >>> 0,
        ((J = Math.floor(a / 1e3)),
        1 <= +Math.abs(J)
          ? 0 < J
            ? (Math.min(+Math.floor(J / 4294967296), 4294967295) | 0) >>> 0
            : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      E[(c + 56) >> 2] = K[0];
      E[(c + 60) >> 2] = K[1];
      I[(c + 64) >> 2] = (a % 1e3) * 1e3;
      K = [
        Math.floor(b / 1e3) >>> 0,
        ((J = Math.floor(b / 1e3)),
        1 <= +Math.abs(J)
          ? 0 < J
            ? (Math.min(+Math.floor(J / 4294967296), 4294967295) | 0) >>> 0
            : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      E[(c + 72) >> 2] = K[0];
      E[(c + 76) >> 2] = K[1];
      I[(c + 80) >> 2] = (b % 1e3) * 1e3;
      K = [
        Math.floor(e / 1e3) >>> 0,
        ((J = Math.floor(e / 1e3)),
        1 <= +Math.abs(J)
          ? 0 < J
            ? (Math.min(+Math.floor(J / 4294967296), 4294967295) | 0) >>> 0
            : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      E[(c + 88) >> 2] = K[0];
      E[(c + 92) >> 2] = K[1];
      I[(c + 96) >> 2] = (e % 1e3) * 1e3;
      K = [
        d.vb >>> 0,
        ((J = d.vb),
        1 <= +Math.abs(J)
          ? 0 < J
            ? (Math.min(+Math.floor(J / 4294967296), 4294967295) | 0) >>> 0
            : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      E[(c + 104) >> 2] = K[0];
      E[(c + 108) >> 2] = K[1];
      return 0;
    }
    var $b = void 0;
    function Yb(a) {
      a = mb[a];
      if (!a) throw new N(8);
      return a;
    }
    var ac = {};
    function bc(a) {
      for (; a.length; ) {
        var b = a.pop();
        a.pop()(b);
      }
    }
    function cc(a) {
      return this.fromWireType(E[a >> 2]);
    }
    var dc = {},
      ec = {},
      fc = {};
    function gc(a) {
      if (void 0 === a) return "_unknown";
      a = a.replace(/[^a-zA-Z0-9_]/g, "$");
      var b = a.charCodeAt(0);
      return 48 <= b && 57 >= b ? "_" + a : a;
    }
    function hc(a, b) {
      a = gc(a);
      return {
        [a]: function () {
          return b.apply(this, arguments);
        },
      }[a];
    }
    function ic(a) {
      var b = Error,
        c = hc(a, function (d) {
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
    var jc = void 0;
    function kc(a) {
      throw new jc(a);
    }
    function lc(a, b, c) {
      function d(l) {
        l = c(l);
        l.length !== a.length && kc("Mismatched type converter count");
        for (var m = 0; m < a.length; ++m) mc(a[m], l[m]);
      }
      a.forEach(function (l) {
        fc[l] = b;
      });
      var e = Array(b.length),
        f = [],
        g = 0;
      b.forEach((l, m) => {
        ec.hasOwnProperty(l)
          ? (e[m] = ec[l])
          : (f.push(l),
            dc.hasOwnProperty(l) || (dc[l] = []),
            dc[l].push(() => {
              e[m] = ec[l];
              ++g;
              g === f.length && d(e);
            }));
      });
      0 === f.length && d(e);
    }
    function nc(a) {
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
    var oc = void 0;
    function T(a) {
      for (var b = ""; w[a]; ) b += oc[w[a++]];
      return b;
    }
    var pc = void 0;
    function V(a) {
      throw new pc(a);
    }
    function mc(a, b, c = {}) {
      if (!("argPackAdvance" in b))
        throw new TypeError(
          "registerType registeredInstance requires argPackAdvance",
        );
      var d = b.name;
      a || V('type "' + d + '" must have a positive integer typeid pointer');
      if (ec.hasOwnProperty(a)) {
        if (c.oc) return;
        V("Cannot register type '" + d + "' twice");
      }
      ec[a] = b;
      delete fc[a];
      dc.hasOwnProperty(a) &&
        ((b = dc[a]), delete dc[a], b.forEach((e) => e()));
    }
    function qc(a) {
      V(a.sa.za.wa.name + " instance already deleted");
    }
    var rc = !1;
    function sc() {}
    function tc(a) {
      --a.count.value;
      0 === a.count.value && (a.Ca ? a.Ga.Na(a.Ca) : a.za.wa.Na(a.xa));
    }
    function uc(a, b, c) {
      if (b === c) return a;
      if (void 0 === c.Ha) return null;
      a = uc(a, b, c.Ha);
      return null === a ? null : c.hc(a);
    }
    var vc = {},
      wc = [];
    function xc() {
      for (; wc.length; ) {
        var a = wc.pop();
        a.sa.Ua = !1;
        a["delete"]();
      }
    }
    var yc = void 0,
      zc = {};
    function Ac(a, b) {
      for (void 0 === b && V("ptr should not be undefined"); a.Ha; )
        (b = a.eb(b)), (a = a.Ha);
      return zc[b];
    }
    function Bc(a, b) {
      (b.za && b.xa) || kc("makeClassHandle requires ptr and ptrType");
      !!b.Ga !== !!b.Ca &&
        kc("Both smartPtrType and smartPtr must be specified");
      b.count = { value: 1 };
      return Cc(Object.create(a, { sa: { value: b } }));
    }
    function Cc(a) {
      if ("undefined" === typeof FinalizationRegistry)
        return (Cc = (b) => b), a;
      rc = new FinalizationRegistry((b) => {
        tc(b.sa);
      });
      Cc = (b) => {
        var c = b.sa;
        c.Ca && rc.register(b, { sa: c }, b);
        return b;
      };
      sc = (b) => {
        rc.unregister(b);
      };
      return Cc(a);
    }
    function Dc() {}
    function Ec(a, b, c) {
      if (void 0 === a[b].Ba) {
        var d = a[b];
        a[b] = function () {
          a[b].Ba.hasOwnProperty(arguments.length) ||
            V(
              "Function '" +
                c +
                "' called with an invalid number of arguments (" +
                arguments.length +
                ") - expects one of (" +
                a[b].Ba +
                ")!",
            );
          return a[b].Ba[arguments.length].apply(this, arguments);
        };
        a[b].Ba = [];
        a[b].Ba[d.fb] = d;
      }
    }
    function Fc(a, b, c) {
      h.hasOwnProperty(a)
        ? ((void 0 === c || (void 0 !== h[a].Ba && void 0 !== h[a].Ba[c])) &&
            V("Cannot register public name '" + a + "' twice"),
          Ec(h, a, a),
          h.hasOwnProperty(c) &&
            V(
              "Cannot register multiple overloads of a function with the same number of arguments (" +
                c +
                ")!",
            ),
          (h[a].Ba[c] = b))
        : ((h[a] = b), void 0 !== c && (h[a].Nc = c));
    }
    function Gc(a, b, c, d, e, f, g, l) {
      this.name = a;
      this.constructor = b;
      this.Va = c;
      this.Na = d;
      this.Ha = e;
      this.jc = f;
      this.eb = g;
      this.hc = l;
      this.wc = [];
    }
    function Hc(a, b, c) {
      for (; b !== c; )
        b.eb ||
          V(
            "Expected null or instance of " +
              c.name +
              ", got an instance of " +
              b.name,
          ),
          (a = b.eb(a)),
          (b = b.Ha);
      return a;
    }
    function Ic(a, b) {
      if (null === b)
        return this.wb && V("null is not a valid " + this.name), 0;
      b.sa || V('Cannot pass "' + Jc(b) + '" as a ' + this.name);
      b.sa.xa ||
        V("Cannot pass deleted object as a pointer of type " + this.name);
      return Hc(b.sa.xa, b.sa.za.wa, this.wa);
    }
    function Kc(a, b) {
      if (null === b) {
        this.wb && V("null is not a valid " + this.name);
        if (this.lb) {
          var c = this.zb();
          null !== a && a.push(this.Na, c);
          return c;
        }
        return 0;
      }
      b.sa || V('Cannot pass "' + Jc(b) + '" as a ' + this.name);
      b.sa.xa ||
        V("Cannot pass deleted object as a pointer of type " + this.name);
      !this.kb &&
        b.sa.za.kb &&
        V(
          "Cannot convert argument of type " +
            (b.sa.Ga ? b.sa.Ga.name : b.sa.za.name) +
            " to parameter type " +
            this.name,
        );
      c = Hc(b.sa.xa, b.sa.za.wa, this.wa);
      if (this.lb)
        switch (
          (void 0 === b.sa.Ca &&
            V("Passing raw pointer to smart pointer is illegal"),
          this.Ec)
        ) {
          case 0:
            b.sa.Ga === this
              ? (c = b.sa.Ca)
              : V(
                  "Cannot convert argument of type " +
                    (b.sa.Ga ? b.sa.Ga.name : b.sa.za.name) +
                    " to parameter type " +
                    this.name,
                );
            break;
          case 1:
            c = b.sa.Ca;
            break;
          case 2:
            if (b.sa.Ga === this) c = b.sa.Ca;
            else {
              var d = b.clone();
              c = this.xc(
                c,
                Lc(function () {
                  d["delete"]();
                }),
              );
              null !== a && a.push(this.Na, c);
            }
            break;
          default:
            V("Unsupporting sharing policy");
        }
      return c;
    }
    function Mc(a, b) {
      if (null === b)
        return this.wb && V("null is not a valid " + this.name), 0;
      b.sa || V('Cannot pass "' + Jc(b) + '" as a ' + this.name);
      b.sa.xa ||
        V("Cannot pass deleted object as a pointer of type " + this.name);
      b.sa.za.kb &&
        V(
          "Cannot convert argument of type " +
            b.sa.za.name +
            " to parameter type " +
            this.name,
        );
      return Hc(b.sa.xa, b.sa.za.wa, this.wa);
    }
    function Nc(a, b, c, d) {
      this.name = a;
      this.wa = b;
      this.wb = c;
      this.kb = d;
      this.lb = !1;
      this.Na = this.xc = this.zb = this.Sb = this.Ec = this.vc = void 0;
      void 0 !== b.Ha
        ? (this.toWireType = Kc)
        : ((this.toWireType = d ? Ic : Mc), (this.Ia = null));
    }
    function Oc(a, b, c) {
      h.hasOwnProperty(a) || kc("Replacing nonexistant public symbol");
      void 0 !== h[a].Ba && void 0 !== c
        ? (h[a].Ba[c] = b)
        : ((h[a] = b), (h[a].fb = c));
    }
    var Pc = [];
    function Qc(a) {
      var b = Pc[a];
      b || (a >= Pc.length && (Pc.length = a + 1), (Pc[a] = b = wa.get(a)));
      return b;
    }
    function Rc(a, b) {
      var c = [];
      return function () {
        c.length = 0;
        Object.assign(c, arguments);
        if (a.includes("j")) {
          var d = h["dynCall_" + a];
          d = c && c.length ? d.apply(null, [b].concat(c)) : d.call(null, b);
        } else d = Qc(b).apply(null, c);
        return d;
      };
    }
    function W(a, b) {
      a = T(a);
      var c = a.includes("j") ? Rc(a, b) : Qc(b);
      "function" != typeof c &&
        V("unknown function pointer with signature " + a + ": " + b);
      return c;
    }
    var Sc = void 0;
    function Tc(a) {
      a = Uc(a);
      var b = T(a);
      X(a);
      return b;
    }
    function Vc(a, b) {
      function c(f) {
        e[f] || ec[f] || (fc[f] ? fc[f].forEach(c) : (d.push(f), (e[f] = !0)));
      }
      var d = [],
        e = {};
      b.forEach(c);
      throw new Sc(a + ": " + d.map(Tc).join([", "]));
    }
    function Wc(a, b) {
      for (var c = [], d = 0; d < a; d++) c.push(I[(b + 4 * d) >> 2]);
      return c;
    }
    function Xc(a, b, c, d, e) {
      var f = b.length;
      2 > f &&
        V(
          "argTypes array size mismatch! Must at least get return value and 'this' types!",
        );
      var g = null !== b[1] && null !== c,
        l = !1;
      for (c = 1; c < b.length; ++c)
        if (null !== b[c] && void 0 === b[c].Ia) {
          l = !0;
          break;
        }
      var m = "void" !== b[0].name,
        n = f - 2,
        r = Array(n),
        p = [],
        q = [];
      return function () {
        arguments.length !== n &&
          V(
            "function " +
              a +
              " called with " +
              arguments.length +
              " arguments, expected " +
              n +
              " args!",
          );
        q.length = 0;
        p.length = g ? 2 : 1;
        p[0] = e;
        if (g) {
          var k = b[1].toWireType(q, this);
          p[1] = k;
        }
        for (var t = 0; t < n; ++t)
          (r[t] = b[t + 2].toWireType(q, arguments[t])), p.push(r[t]);
        t = d.apply(null, p);
        if (l) bc(q);
        else
          for (var x = g ? 1 : 2; x < b.length; x++) {
            var z = 1 === x ? k : r[x - 2];
            null !== b[x].Ia && b[x].Ia(z);
          }
        k = m ? b[0].fromWireType(t) : void 0;
        return k;
      };
    }
    var Yc = [],
      Y = [
        {},
        { value: void 0 },
        { value: null },
        { value: !0 },
        { value: !1 },
      ];
    function Zc(a) {
      4 < a && 0 === --Y[a].Bb && ((Y[a] = void 0), Yc.push(a));
    }
    var $c = (a) => {
        a || V("Cannot use deleted val. handle = " + a);
        return Y[a].value;
      },
      Lc = (a) => {
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
            var b = Yc.length ? Yc.pop() : Y.length;
            Y[b] = { Bb: 1, value: a };
            return b;
        }
      };
    function Jc(a) {
      if (null === a) return "null";
      var b = typeof a;
      return "object" === b || "array" === b || "function" === b
        ? a.toString()
        : "" + a;
    }
    function ad(a, b) {
      switch (b) {
        case 2:
          return function (c) {
            return this.fromWireType(ta[c >> 2]);
          };
        case 3:
          return function (c) {
            return this.fromWireType(ua[c >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + a);
      }
    }
    function bd(a, b, c) {
      switch (b) {
        case 0:
          return c
            ? function (d) {
                return C[d];
              }
            : function (d) {
                return w[d];
              };
        case 1:
          return c
            ? function (d) {
                return sa[d >> 1];
              }
            : function (d) {
                return D[d >> 1];
              };
        case 2:
          return c
            ? function (d) {
                return E[d >> 2];
              }
            : function (d) {
                return I[d >> 2];
              };
        default:
          throw new TypeError("Unknown integer type: " + a);
      }
    }
    var cd =
      "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
    function dd(a, b) {
      var c = a >> 1;
      for (var d = c + b / 2; !(c >= d) && D[c]; ) ++c;
      c <<= 1;
      if (32 < c - a && cd) return cd.decode(w.subarray(a, c));
      c = "";
      for (d = 0; !(d >= b / 2); ++d) {
        var e = sa[(a + 2 * d) >> 1];
        if (0 == e) break;
        c += String.fromCharCode(e);
      }
      return c;
    }
    function ed(a, b, c) {
      void 0 === c && (c = 2147483647);
      if (2 > c) return 0;
      c -= 2;
      var d = b;
      c = c < 2 * a.length ? c / 2 : a.length;
      for (var e = 0; e < c; ++e) (sa[b >> 1] = a.charCodeAt(e)), (b += 2);
      sa[b >> 1] = 0;
      return b - d;
    }
    function fd(a) {
      return 2 * a.length;
    }
    function gd(a, b) {
      for (var c = 0, d = ""; !(c >= b / 4); ) {
        var e = E[(a + 4 * c) >> 2];
        if (0 == e) break;
        ++c;
        65536 <= e
          ? ((e -= 65536),
            (d += String.fromCharCode(55296 | (e >> 10), 56320 | (e & 1023))))
          : (d += String.fromCharCode(e));
      }
      return d;
    }
    function hd(a, b, c) {
      void 0 === c && (c = 2147483647);
      if (4 > c) return 0;
      var d = b;
      c = d + c - 4;
      for (var e = 0; e < a.length; ++e) {
        var f = a.charCodeAt(e);
        if (55296 <= f && 57343 >= f) {
          var g = a.charCodeAt(++e);
          f = (65536 + ((f & 1023) << 10)) | (g & 1023);
        }
        E[b >> 2] = f;
        b += 4;
        if (b + 4 > c) break;
      }
      E[b >> 2] = 0;
      return b - d;
    }
    function jd(a) {
      for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        55296 <= d && 57343 >= d && ++c;
        b += 4;
      }
      return b;
    }
    function kd(a, b) {
      var c = ec[a];
      void 0 === c && V(b + " has unknown type " + Tc(a));
      return c;
    }
    var ld = {};
    function md(a) {
      var b = ld[a];
      return void 0 === b ? T(a) : b;
    }
    var nd = [];
    function od() {
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
    function pd(a) {
      var b = nd.length;
      nd.push(a);
      return b;
    }
    function qd(a, b) {
      for (var c = Array(a), d = 0; d < a; ++d)
        c[d] = kd(I[(b + 4 * d) >> 2], "parameter " + d);
      return c;
    }
    var rd = [];
    function sd(a) {
      var b = Array(a + 1);
      return function (c, d, e) {
        b[0] = c;
        for (var f = 0; f < a; ++f) {
          var g = kd(I[(d + 4 * f) >> 2], "parameter " + f);
          b[f + 1] = g.readValueFromPointer(e);
          e += g.argPackAdvance;
        }
        c = new (c.bind.apply(c, b))();
        return Lc(c);
      };
    }
    var td = {};
    function ud(a) {
      return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
    }
    var vd = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
      wd = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    function xd(a) {
      return (ud(a.getFullYear()) ? vd : wd)[a.getMonth()] + a.getDate() - 1;
    }
    function yd(a) {
      var b = ra(a) + 1,
        c = zd(b);
      c && A(a, C, c, b);
      return c;
    }
    var Ad = [],
      Bd = {};
    function Z(a, b) {
      I[a >> 2] = b;
      I[(a + 4) >> 2] = (b / 4294967296) | 0;
    }
    var Cd;
    function Dd(a, b, c, d, e) {
      function f() {
        var B = 0,
          U = 0;
        y.response &&
          F &&
          0 === I[(a + 12) >> 2] &&
          (U = y.response.byteLength);
        0 < U && ((B = zd(U)), w.set(new Uint8Array(y.response), B));
        I[(a + 12) >> 2] = B;
        Z(a + 16, U);
        Z(a + 24, 0);
        (B = y.response ? y.response.byteLength : 0) && Z(a + 32, B);
        D[(a + 40) >> 1] = y.readyState;
        D[(a + 42) >> 1] = y.status;
        y.statusText && A(y.statusText, w, a + 44, 64);
      }
      var g = I[(a + 8) >> 2];
      if (g) {
        var l = v(g),
          m = a + 112,
          n = v(m);
        n || (n = "GET");
        var r = I[(m + 52) >> 2],
          p = I[(m + 56) >> 2],
          q = !!I[(m + 60) >> 2],
          k = I[(m + 68) >> 2],
          t = I[(m + 72) >> 2];
        g = I[(m + 76) >> 2];
        var x = I[(m + 80) >> 2],
          z = I[(m + 84) >> 2];
        m = I[(m + 88) >> 2];
        var F = !!(r & 1),
          G = !!(r & 2);
        r = !!(r & 64);
        k = k ? v(k) : void 0;
        t = t ? v(t) : void 0;
        var y = new XMLHttpRequest();
        y.withCredentials = q;
        y.open(n, l, !r, k, t);
        r || (y.timeout = p);
        y.Qc = l;
        y.responseType = "arraybuffer";
        x && ((l = v(x)), y.overrideMimeType(l));
        if (g)
          for (;;) {
            n = I[g >> 2];
            if (!n) break;
            l = I[(g + 4) >> 2];
            if (!l) break;
            g += 8;
            n = v(n);
            l = v(l);
            y.setRequestHeader(n, l);
          }
        var M = I[(a + 0) >> 2];
        Bd[M] = y;
        g = z && m ? w.slice(z, z + m) : null;
        y.onload = (B) => {
          M in Bd &&
            (f(),
            200 <= y.status && 300 > y.status
              ? b && b(a, y, B)
              : c && c(a, y, B));
        };
        y.onerror = (B) => {
          M in Bd && (f(), c && c(a, y, B));
        };
        y.ontimeout = (B) => {
          M in Bd && c && c(a, y, B);
        };
        y.onprogress = (B) => {
          if (M in Bd) {
            var U = F && G && y.response ? y.response.byteLength : 0,
              H = 0;
            0 < U &&
              F &&
              G &&
              ((H = zd(U)), w.set(new Uint8Array(y.response), H));
            I[(a + 12) >> 2] = H;
            Z(a + 16, U);
            Z(a + 24, B.loaded - U);
            Z(a + 32, B.total);
            D[(a + 40) >> 1] = y.readyState;
            3 <= y.readyState &&
              0 === y.status &&
              0 < B.loaded &&
              (y.status = 200);
            D[(a + 42) >> 1] = y.status;
            y.statusText && A(y.statusText, w, a + 44, 64);
            d && d(a, y, B);
            H && X(H);
          }
        };
        y.onreadystatechange = (B) => {
          M in Bd &&
            ((D[(a + 40) >> 1] = y.readyState),
            2 <= y.readyState && (D[(a + 42) >> 1] = y.status),
            e && e(a, y, B));
        };
        try {
          y.send(g);
        } catch (B) {
          c && c(a, y, B);
        }
      } else c(a, 0, "no url specified!");
    }
    function Ed(a, b, c, d) {
      var e = Cd;
      if (e) {
        var f = I[(a + 112 + 64) >> 2];
        f || (f = I[(a + 8) >> 2]);
        var g = v(f);
        try {
          var l = e
            .transaction(["FILES"], "readwrite")
            .objectStore("FILES")
            .put(b, g);
          l.onsuccess = () => {
            D[(a + 40) >> 1] = 4;
            D[(a + 42) >> 1] = 200;
            A("OK", w, a + 44, 64);
            c(a, 0, g);
          };
          l.onerror = (m) => {
            D[(a + 40) >> 1] = 4;
            D[(a + 42) >> 1] = 413;
            A("Payload Too Large", w, a + 44, 64);
            d(a, 0, m);
          };
        } catch (m) {
          d(a, 0, m);
        }
      } else d(a, 0, "IndexedDB not available!");
    }
    function Fd(a, b, c) {
      var d = Cd;
      if (d) {
        var e = I[(a + 112 + 64) >> 2];
        e || (e = I[(a + 8) >> 2]);
        e = v(e);
        try {
          var f = d
            .transaction(["FILES"], "readonly")
            .objectStore("FILES")
            .get(e);
          f.onsuccess = (g) => {
            if (g.target.result) {
              g = g.target.result;
              var l = g.byteLength || g.length,
                m = zd(l);
              w.set(new Uint8Array(g), m);
              I[(a + 12) >> 2] = m;
              Z(a + 16, l);
              Z(a + 24, 0);
              Z(a + 32, l);
              D[(a + 40) >> 1] = 4;
              D[(a + 42) >> 1] = 200;
              A("OK", w, a + 44, 64);
              b(a, 0, g);
            } else
              (D[(a + 40) >> 1] = 4),
                (D[(a + 42) >> 1] = 404),
                A("Not Found", w, a + 44, 64),
                c(a, 0, "no data");
          };
          f.onerror = (g) => {
            D[(a + 40) >> 1] = 4;
            D[(a + 42) >> 1] = 404;
            A("Not Found", w, a + 44, 64);
            c(a, 0, g);
          };
        } catch (g) {
          c(a, 0, g);
        }
      } else c(a, 0, "IndexedDB not available!");
    }
    function Gd(a, b, c) {
      var d = Cd;
      if (d) {
        var e = I[(a + 112 + 64) >> 2];
        e || (e = I[(a + 8) >> 2]);
        e = v(e);
        try {
          var f = d
            .transaction(["FILES"], "readwrite")
            .objectStore("FILES")
            .delete(e);
          f.onsuccess = (g) => {
            g = g.target.result;
            I[(a + 12) >> 2] = 0;
            Z(a + 16, 0);
            Z(a + 24, 0);
            Z(a + 32, 0);
            D[(a + 40) >> 1] = 4;
            D[(a + 42) >> 1] = 200;
            A("OK", w, a + 44, 64);
            b(a, 0, g);
          };
          f.onerror = (g) => {
            D[(a + 40) >> 1] = 4;
            D[(a + 42) >> 1] = 404;
            A("Not Found", w, a + 44, 64);
            c(a, 0, g);
          };
        } catch (g) {
          c(a, 0, g);
        }
      } else c(a, 0, "IndexedDB not available!");
    }
    var Hd = {};
    function Id() {
      if (!Jd) {
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
        for (b in Hd) void 0 === Hd[b] ? delete a[b] : (a[b] = Hd[b]);
        var c = [];
        for (b in a) c.push(b + "=" + a[b]);
        Jd = c;
      }
      return Jd;
    }
    var Jd;
    function Kd(a, b) {
      Kd.Rb || (Kd.Rb = Va());
      for (var c = 0; c < b; c++) C[(a + c) >> 0] = Kd.Rb();
      return 0;
    }
    var Ld = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      Md = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function Nd(a, b, c, d) {
      function e(k, t, x) {
        for (k = "number" == typeof k ? k.toString() : k || ""; k.length < t; )
          k = x[0] + k;
        return k;
      }
      function f(k, t) {
        return e(k, t, "0");
      }
      function g(k, t) {
        function x(F) {
          return 0 > F ? -1 : 0 < F ? 1 : 0;
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
        var t = k.Ra;
        for (k = new Date(new Date(k.Sa + 1900, 0, 1).getTime()); 0 < t; ) {
          var x = k.getMonth(),
            z = (ud(k.getFullYear()) ? Ld : Md)[x];
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
        return 0 >= g(t, k)
          ? 0 >= g(x, k)
            ? k.getFullYear() + 1
            : k.getFullYear()
          : k.getFullYear() - 1;
      }
      var n = E[(d + 40) >> 2];
      d = {
        Hc: E[d >> 2],
        Gc: E[(d + 4) >> 2],
        qb: E[(d + 8) >> 2],
        Db: E[(d + 12) >> 2],
        rb: E[(d + 16) >> 2],
        Sa: E[(d + 20) >> 2],
        La: E[(d + 24) >> 2],
        Ra: E[(d + 28) >> 2],
        Pc: E[(d + 32) >> 2],
        Fc: E[(d + 36) >> 2],
        Ic: n ? v(n) : "",
      };
      c = v(c);
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
      for (var r in n) c = c.replace(new RegExp(r, "g"), n[r]);
      var p = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
          " ",
        ),
        q =
          "January February March April May June July August September October November December".split(
            " ",
          );
      n = {
        "%a": function (k) {
          return p[k.La].substring(0, 3);
        },
        "%A": function (k) {
          return p[k.La];
        },
        "%b": function (k) {
          return q[k.rb].substring(0, 3);
        },
        "%B": function (k) {
          return q[k.rb];
        },
        "%C": function (k) {
          return f(((k.Sa + 1900) / 100) | 0, 2);
        },
        "%d": function (k) {
          return f(k.Db, 2);
        },
        "%e": function (k) {
          return e(k.Db, 2, " ");
        },
        "%g": function (k) {
          return m(k).toString().substring(2);
        },
        "%G": function (k) {
          return m(k);
        },
        "%H": function (k) {
          return f(k.qb, 2);
        },
        "%I": function (k) {
          k = k.qb;
          0 == k ? (k = 12) : 12 < k && (k -= 12);
          return f(k, 2);
        },
        "%j": function (k) {
          for (
            var t = 0, x = 0;
            x <= k.rb - 1;
            t += (ud(k.Sa + 1900) ? Ld : Md)[x++]
          );
          return f(k.Db + t, 3);
        },
        "%m": function (k) {
          return f(k.rb + 1, 2);
        },
        "%M": function (k) {
          return f(k.Gc, 2);
        },
        "%n": function () {
          return "\n";
        },
        "%p": function (k) {
          return 0 <= k.qb && 12 > k.qb ? "AM" : "PM";
        },
        "%S": function (k) {
          return f(k.Hc, 2);
        },
        "%t": function () {
          return "\t";
        },
        "%u": function (k) {
          return k.La || 7;
        },
        "%U": function (k) {
          return f(Math.floor((k.Ra + 7 - k.La) / 7), 2);
        },
        "%V": function (k) {
          var t = Math.floor((k.Ra + 7 - ((k.La + 6) % 7)) / 7);
          2 >= (k.La + 371 - k.Ra - 2) % 7 && t++;
          if (t)
            53 == t &&
              ((x = (k.La + 371 - k.Ra) % 7),
              4 == x || (3 == x && ud(k.Sa)) || (t = 1));
          else {
            t = 52;
            var x = (k.La + 7 - k.Ra - 1) % 7;
            (4 == x || (5 == x && ud((k.Sa % 400) - 1))) && t++;
          }
          return f(t, 2);
        },
        "%w": function (k) {
          return k.La;
        },
        "%W": function (k) {
          return f(Math.floor((k.Ra + 7 - ((k.La + 6) % 7)) / 7), 2);
        },
        "%y": function (k) {
          return (k.Sa + 1900).toString().substring(2);
        },
        "%Y": function (k) {
          return k.Sa + 1900;
        },
        "%z": function (k) {
          k = k.Fc;
          var t = 0 <= k;
          k = Math.abs(k) / 60;
          return (
            (t ? "+" : "-") +
            String("0000" + ((k / 60) * 100 + (k % 60))).slice(-4)
          );
        },
        "%Z": function (k) {
          return k.Ic;
        },
        "%%": function () {
          return "%";
        },
      };
      c = c.replace(/%%/g, "\x00\x00");
      for (r in n)
        c.includes(r) && (c = c.replace(new RegExp(r, "g"), n[r](d)));
      c = c.replace(/\0\0/g, "%");
      r = Xa(c, !1);
      if (r.length > b) return 0;
      C.set(r, a);
      return r.length - 1;
    }
    function ub(a, b, c, d) {
      a || (a = this);
      this.parent = a;
      this.Ma = a.Ma;
      this.$a = null;
      this.id = nb++;
      this.name = b;
      this.mode = c;
      this.ua = {};
      this.va = {};
      this.bb = d;
    }
    Object.defineProperties(ub.prototype, {
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
      qc: {
        get: function () {
          return 16384 === (this.mode & 61440);
        },
      },
      pc: {
        get: function () {
          return 8192 === (this.mode & 61440);
        },
      },
    });
    Nb();
    ob = Array(4096);
    Bb(O, "/");
    Q("/tmp", 16895, 0);
    Q("/home", 16895, 0);
    Q("/home/web_user", 16895, 0);
    (() => {
      Q("/dev", 16895, 0);
      $a(259, { read: () => 0, write: (b, c, d, e) => e });
      Cb("/dev/null", 259);
      Za(1280, bb);
      Za(1536, cb);
      Cb("/dev/tty", 1280);
      Cb("/dev/tty1", 1536);
      var a = Va();
      R("/dev", "random", a);
      R("/dev", "urandom", a);
      Q("/dev/shm", 16895, 0);
      Q("/dev/shm/tmp", 16895, 0);
    })();
    (() => {
      Q("/proc", 16895, 0);
      var a = Q("/proc/self", 16895, 0);
      Q("/proc/self/fd", 16895, 0);
      Bb(
        {
          Ma: () => {
            var b = gb(a, "fd", 16895, 73);
            b.ua = {
              Ya: (c, d) => {
                var e = mb[+d];
                if (!e) throw new N(8);
                c = {
                  parent: null,
                  Ma: { Pb: "fake" },
                  ua: { cb: () => e.path },
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
    var Vb;
    h.FS_createPath = Qb;
    h.FS_createDataFile = Sb;
    h.FS_createPreloadedFile = Wb;
    h.FS_unlink = Eb;
    h.FS_createLazyFile = Ub;
    h.FS_createDevice = R;
    jc = h.InternalError = ic("InternalError");
    for (var Od = Array(256), Pd = 0; 256 > Pd; ++Pd)
      Od[Pd] = String.fromCharCode(Pd);
    oc = Od;
    pc = h.BindingError = ic("BindingError");
    Dc.prototype.isAliasOf = function (a) {
      if (!(this instanceof Dc && a instanceof Dc)) return !1;
      var b = this.sa.za.wa,
        c = this.sa.xa,
        d = a.sa.za.wa;
      for (a = a.sa.xa; b.Ha; ) (c = b.eb(c)), (b = b.Ha);
      for (; d.Ha; ) (a = d.eb(a)), (d = d.Ha);
      return b === d && c === a;
    };
    Dc.prototype.clone = function () {
      this.sa.xa || qc(this);
      if (this.sa.ab) return (this.sa.count.value += 1), this;
      var a = Cc,
        b = Object,
        c = b.create,
        d = Object.getPrototypeOf(this),
        e = this.sa;
      a = a(
        c.call(b, d, {
          sa: {
            value: {
              count: e.count,
              Ua: e.Ua,
              ab: e.ab,
              xa: e.xa,
              za: e.za,
              Ca: e.Ca,
              Ga: e.Ga,
            },
          },
        }),
      );
      a.sa.count.value += 1;
      a.sa.Ua = !1;
      return a;
    };
    Dc.prototype["delete"] = function () {
      this.sa.xa || qc(this);
      this.sa.Ua && !this.sa.ab && V("Object already scheduled for deletion");
      sc(this);
      tc(this.sa);
      this.sa.ab || ((this.sa.Ca = void 0), (this.sa.xa = void 0));
    };
    Dc.prototype.isDeleted = function () {
      return !this.sa.xa;
    };
    Dc.prototype.deleteLater = function () {
      this.sa.xa || qc(this);
      this.sa.Ua && !this.sa.ab && V("Object already scheduled for deletion");
      wc.push(this);
      1 === wc.length && yc && yc(xc);
      this.sa.Ua = !0;
      return this;
    };
    h.getInheritedInstanceCount = function () {
      return Object.keys(zc).length;
    };
    h.getLiveInheritedInstances = function () {
      var a = [],
        b;
      for (b in zc) zc.hasOwnProperty(b) && a.push(zc[b]);
      return a;
    };
    h.flushPendingDeletes = xc;
    h.setDelayFunction = function (a) {
      yc = a;
      wc.length && yc && yc(xc);
    };
    Nc.prototype.kc = function (a) {
      this.Sb && (a = this.Sb(a));
      return a;
    };
    Nc.prototype.Jb = function (a) {
      this.Na && this.Na(a);
    };
    Nc.prototype.argPackAdvance = 8;
    Nc.prototype.readValueFromPointer = cc;
    Nc.prototype.deleteObject = function (a) {
      if (null !== a) a["delete"]();
    };
    Nc.prototype.fromWireType = function (a) {
      function b() {
        return this.lb
          ? Bc(this.wa.Va, { za: this.vc, xa: c, Ga: this, Ca: a })
          : Bc(this.wa.Va, { za: this, xa: a });
      }
      var c = this.kc(a);
      if (!c) return this.Jb(a), null;
      var d = Ac(this.wa, c);
      if (void 0 !== d) {
        if (0 === d.sa.count.value)
          return (d.sa.xa = c), (d.sa.Ca = a), d.clone();
        d = d.clone();
        this.Jb(a);
        return d;
      }
      d = this.wa.jc(c);
      d = vc[d];
      if (!d) return b.call(this);
      d = this.kb ? d.cc : d.pointerType;
      var e = uc(c, this.wa, d.wa);
      return null === e
        ? b.call(this)
        : this.lb
        ? Bc(d.wa.Va, { za: d, xa: e, Ga: this, Ca: a })
        : Bc(d.wa.Va, { za: d, xa: e });
    };
    Sc = h.UnboundTypeError = ic("UnboundTypeError");
    h.count_emval_handles = function () {
      for (var a = 0, b = 5; b < Y.length; ++b) void 0 !== Y[b] && ++a;
      return a;
    };
    h.get_first_emval = function () {
      for (var a = 5; a < Y.length; ++a) if (void 0 !== Y[a]) return Y[a];
      return null;
    };
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
      c.onerror = (d) => b(d);
    })(
      (a) => {
        Cd = a;
        Fa("library_fetch_init");
      },
      () => {
        Cd = !1;
        Fa("library_fetch_init");
      },
    );
    var Qd = {
      M: function (a, b) {
        try {
          var c = Yb(a);
          return Zb(Fb, c.path, b);
        } catch (d) {
          if ("undefined" == typeof S || "ErrnoError" !== d.name) throw d;
          return -d.Fa;
        }
      },
      K: function (a, b, c, d) {
        try {
          b = v(b);
          var e = d & 256;
          b = Xb(a, b, d & 4096);
          return Zb(e ? Gb : Fb, b, c);
        } catch (f) {
          if ("undefined" == typeof S || "ErrnoError" !== f.name) throw f;
          return -f.Fa;
        }
      },
      N: function (a, b, c, d) {
        $b = d;
        try {
          b = v(b);
          b = Xb(a, b);
          if (d) {
            $b += 4;
            var e = E[($b - 4) >> 2];
          } else e = 0;
          return Jb(b, c, e).Pa;
        } catch (f) {
          if ("undefined" == typeof S || "ErrnoError" !== f.name) throw f;
          return -f.Fa;
        }
      },
      L: function (a, b) {
        try {
          return (a = v(a)), Zb(Fb, a, b);
        } catch (c) {
          if ("undefined" == typeof S || "ErrnoError" !== c.name) throw c;
          return -c.Fa;
        }
      },
      f: function (a) {
        var b = ac[a];
        delete ac[a];
        var c = b.zb,
          d = b.Na,
          e = b.Lb,
          f = e.map((g) => g.mc).concat(e.map((g) => g.Cc));
        lc([a], f, (g) => {
          var l = {};
          e.forEach((m, n) => {
            var r = g[n],
              p = m.jb,
              q = m.lc,
              k = g[n + e.length],
              t = m.Bc,
              x = m.Dc;
            l[m.ic] = {
              read: (z) => r.fromWireType(p(q, z)),
              write: (z, F) => {
                var G = [];
                t(x, z, k.toWireType(G, F));
                bc(G);
              },
            };
          });
          return [
            {
              name: b.name,
              fromWireType: function (m) {
                var n = {},
                  r;
                for (r in l) n[r] = l[r].read(m);
                d(m);
                return n;
              },
              toWireType: function (m, n) {
                for (var r in l)
                  if (!(r in n))
                    throw new TypeError('Missing field:  "' + r + '"');
                var p = c();
                for (r in l) l[r].write(p, n[r]);
                null !== m && m.push(d, p);
                return p;
              },
              argPackAdvance: 8,
              readValueFromPointer: cc,
              Ia: d,
            },
          ];
        });
      },
      B: function () {},
      V: function (a, b, c, d, e) {
        var f = nc(c);
        b = T(b);
        mc(a, {
          name: b,
          fromWireType: function (g) {
            return !!g;
          },
          toWireType: function (g, l) {
            return l ? d : e;
          },
          argPackAdvance: 8,
          readValueFromPointer: function (g) {
            if (1 === c) var l = C;
            else if (2 === c) l = sa;
            else if (4 === c) l = E;
            else throw new TypeError("Unknown boolean type size: " + b);
            return this.fromWireType(l[g >> f]);
          },
          Ia: null,
        });
      },
      z: function (a, b, c, d, e, f, g, l, m, n, r, p, q) {
        r = T(r);
        f = W(e, f);
        l && (l = W(g, l));
        n && (n = W(m, n));
        q = W(p, q);
        var k = gc(r);
        Fc(k, function () {
          Vc("Cannot construct " + r + " due to unbound types", [d]);
        });
        lc([a, b, c], d ? [d] : [], function (t) {
          t = t[0];
          if (d) {
            var x = t.wa;
            var z = x.Va;
          } else z = Dc.prototype;
          t = hc(k, function () {
            if (Object.getPrototypeOf(this) !== F)
              throw new pc("Use 'new' to construct " + r);
            if (void 0 === G.Oa)
              throw new pc(r + " has no accessible constructor");
            var M = G.Oa[arguments.length];
            if (void 0 === M)
              throw new pc(
                "Tried to invoke ctor of " +
                  r +
                  " with invalid number of parameters (" +
                  arguments.length +
                  ") - expected (" +
                  Object.keys(G.Oa).toString() +
                  ") parameters instead!",
              );
            return M.apply(this, arguments);
          });
          var F = Object.create(z, { constructor: { value: t } });
          t.prototype = F;
          var G = new Gc(r, t, F, q, x, f, l, n);
          x = new Nc(r, G, !0, !1);
          z = new Nc(r + "*", G, !1, !1);
          var y = new Nc(r + " const*", G, !1, !0);
          vc[a] = { pointerType: z, cc: y };
          Oc(k, t);
          return [x, z, y];
        });
      },
      da: function (a, b, c, d, e, f) {
        0 < b || ma();
        var g = Wc(b, c);
        e = W(d, e);
        lc([], [a], function (l) {
          l = l[0];
          var m = "constructor " + l.name;
          void 0 === l.wa.Oa && (l.wa.Oa = []);
          if (void 0 !== l.wa.Oa[b - 1])
            throw new pc(
              "Cannot register multiple constructors with identical number of parameters (" +
                (b - 1) +
                ") for class '" +
                l.name +
                "'! Overload resolution is currently only performed using the parameter count, not actual type info!",
            );
          l.wa.Oa[b - 1] = () => {
            Vc("Cannot construct " + l.name + " due to unbound types", g);
          };
          lc([], g, function (n) {
            n.splice(1, 0, null);
            l.wa.Oa[b - 1] = Xc(m, n, null, e, f);
            return [];
          });
          return [];
        });
      },
      i: function (a, b, c, d, e, f, g, l) {
        var m = Wc(c, d);
        b = T(b);
        f = W(e, f);
        lc([], [a], function (n) {
          function r() {
            Vc("Cannot call " + p + " due to unbound types", m);
          }
          n = n[0];
          var p = n.name + "." + b;
          b.startsWith("@@") && (b = Symbol[b.substring(2)]);
          l && n.wa.wc.push(b);
          var q = n.wa.Va,
            k = q[b];
          void 0 === k ||
          (void 0 === k.Ba && k.className !== n.name && k.fb === c - 2)
            ? ((r.fb = c - 2), (r.className = n.name), (q[b] = r))
            : (Ec(q, b, p), (q[b].Ba[c - 2] = r));
          lc([], m, function (t) {
            t = Xc(p, t, n, f, g);
            void 0 === q[b].Ba
              ? ((t.fb = c - 2), (q[b] = t))
              : (q[b].Ba[c - 2] = t);
            return [];
          });
          return [];
        });
      },
      U: function (a, b) {
        b = T(b);
        mc(a, {
          name: b,
          fromWireType: function (c) {
            var d = $c(c);
            Zc(c);
            return d;
          },
          toWireType: function (c, d) {
            return Lc(d);
          },
          argPackAdvance: 8,
          readValueFromPointer: cc,
          Ia: null,
        });
      },
      u: function (a, b, c) {
        c = nc(c);
        b = T(b);
        mc(a, {
          name: b,
          fromWireType: function (d) {
            return d;
          },
          toWireType: function (d, e) {
            return e;
          },
          argPackAdvance: 8,
          readValueFromPointer: ad(b, c),
          Ia: null,
        });
      },
      o: function (a, b, c, d, e, f) {
        var g = Wc(b, c);
        a = T(a);
        e = W(d, e);
        Fc(
          a,
          function () {
            Vc("Cannot call " + a + " due to unbound types", g);
          },
          b - 1,
        );
        lc([], g, function (l) {
          Oc(a, Xc(a, [l[0], null].concat(l.slice(1)), null, e, f), b - 1);
          return [];
        });
      },
      e: function (a, b, c, d, e) {
        b = T(b);
        -1 === e && (e = 4294967295);
        e = nc(c);
        var f = (l) => l;
        if (0 === d) {
          var g = 32 - 8 * c;
          f = (l) => (l << g) >>> g;
        }
        c = b.includes("unsigned")
          ? function (l, m) {
              return m >>> 0;
            }
          : function (l, m) {
              return m;
            };
        mc(a, {
          name: b,
          fromWireType: f,
          toWireType: c,
          argPackAdvance: 8,
          readValueFromPointer: bd(b, e, 0 !== d),
          Ia: null,
        });
      },
      d: function (a, b, c) {
        function d(f) {
          f >>= 2;
          var g = I;
          return new e(g.buffer, g[f + 1], g[f]);
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
        c = T(c);
        mc(
          a,
          {
            name: c,
            fromWireType: d,
            argPackAdvance: 8,
            readValueFromPointer: d,
          },
          { oc: !0 },
        );
      },
      v: function (a, b) {
        b = T(b);
        var c = "std::string" === b;
        mc(a, {
          name: b,
          fromWireType: function (d) {
            var e = I[d >> 2],
              f = d + 4;
            if (c)
              for (var g = f, l = 0; l <= e; ++l) {
                var m = f + l;
                if (l == e || 0 == w[m]) {
                  g = v(g, m - g);
                  if (void 0 === n) var n = g;
                  else (n += String.fromCharCode(0)), (n += g);
                  g = m + 1;
                }
              }
            else {
              n = Array(e);
              for (l = 0; l < e; ++l) n[l] = String.fromCharCode(w[f + l]);
              n = n.join("");
            }
            X(d);
            return n;
          },
          toWireType: function (d, e) {
            e instanceof ArrayBuffer && (e = new Uint8Array(e));
            var f = "string" == typeof e;
            f ||
              e instanceof Uint8Array ||
              e instanceof Uint8ClampedArray ||
              e instanceof Int8Array ||
              V("Cannot pass non-string to std::string");
            var g = c && f ? ra(e) : e.length;
            var l = zd(4 + g + 1),
              m = l + 4;
            I[l >> 2] = g;
            if (c && f) A(e, w, m, g + 1);
            else if (f)
              for (f = 0; f < g; ++f) {
                var n = e.charCodeAt(f);
                255 < n &&
                  (X(m),
                  V("String has UTF-16 code units that do not fit in 8 bits"));
                w[m + f] = n;
              }
            else for (f = 0; f < g; ++f) w[m + f] = e[f];
            null !== d && d.push(X, l);
            return l;
          },
          argPackAdvance: 8,
          readValueFromPointer: cc,
          Ia: function (d) {
            X(d);
          },
        });
      },
      n: function (a, b, c) {
        c = T(c);
        if (2 === b) {
          var d = dd;
          var e = ed;
          var f = fd;
          var g = () => D;
          var l = 1;
        } else
          4 === b && ((d = gd), (e = hd), (f = jd), (g = () => I), (l = 2));
        mc(a, {
          name: c,
          fromWireType: function (m) {
            for (var n = I[m >> 2], r = g(), p, q = m + 4, k = 0; k <= n; ++k) {
              var t = m + 4 + k * b;
              if (k == n || 0 == r[t >> l])
                (q = d(q, t - q)),
                  void 0 === p
                    ? (p = q)
                    : ((p += String.fromCharCode(0)), (p += q)),
                  (q = t + b);
            }
            X(m);
            return p;
          },
          toWireType: function (m, n) {
            "string" != typeof n &&
              V("Cannot pass non-string to C++ string type " + c);
            var r = f(n),
              p = zd(4 + r + b);
            I[p >> 2] = r >> l;
            e(n, p + 4, r + b);
            null !== m && m.push(X, p);
            return p;
          },
          argPackAdvance: 8,
          readValueFromPointer: cc,
          Ia: function (m) {
            X(m);
          },
        });
      },
      g: function (a, b, c, d, e, f) {
        ac[a] = { name: T(b), zb: W(c, d), Na: W(e, f), Lb: [] };
      },
      c: function (a, b, c, d, e, f, g, l, m, n) {
        ac[a].Lb.push({
          ic: T(b),
          mc: c,
          jb: W(d, e),
          lc: f,
          Cc: g,
          Bc: W(l, m),
          Dc: n,
        });
      },
      W: function (a, b) {
        b = T(b);
        mc(a, {
          rc: !0,
          name: b,
          argPackAdvance: 0,
          fromWireType: function () {},
          toWireType: function () {},
        });
      },
      X: function (a) {
        var b = Bd[a];
        b && (delete Bd[a], 0 < b.readyState && 4 > b.readyState && b.abort());
      },
      P: function () {
        return !0;
      },
      l: function (a, b, c) {
        a = $c(a);
        b = kd(b, "emval::as");
        var d = [],
          e = Lc(d);
        I[c >> 2] = e;
        return b.toWireType(d, a);
      },
      ca: function (a, b, c, d) {
        a = nd[a];
        b = $c(b);
        c = md(c);
        a(b, c, null, d);
      },
      b: Zc,
      q: function (a) {
        if (0 === a) return Lc(od());
        a = md(a);
        return Lc(od()[a]);
      },
      ba: function (a, b) {
        var c = qd(a, b),
          d = c[0];
        b =
          d.name +
          "_$" +
          c
            .slice(1)
            .map(function (g) {
              return g.name;
            })
            .join("_") +
          "$";
        var e = rd[b];
        if (void 0 !== e) return e;
        var f = Array(a - 1);
        e = pd((g, l, m, n) => {
          for (var r = 0, p = 0; p < a - 1; ++p)
            (f[p] = c[p + 1].readValueFromPointer(n + r)),
              (r += c[p + 1].argPackAdvance);
          g = g[l].apply(g, f);
          for (p = 0; p < a - 1; ++p) c[p + 1].ec && c[p + 1].ec(f[p]);
          if (!d.rc) return d.toWireType(m, g);
        });
        return (rd[b] = e);
      },
      x: function (a, b) {
        a = $c(a);
        b = $c(b);
        return Lc(a[b]);
      },
      j: function (a) {
        4 < a && (Y[a].Bb += 1);
      },
      p: function (a, b, c, d) {
        a = $c(a);
        var e = td[b];
        e || ((e = sd(b)), (td[b] = e));
        return e(a, c, d);
      },
      w: function (a) {
        return Lc(md(a));
      },
      k: function (a) {
        var b = $c(a);
        bc(b);
        Zc(a);
      },
      h: function (a, b) {
        a = kd(a, "_emval_take_value");
        a = a.readValueFromPointer(b);
        return Lc(a);
      },
      R: function (a, b) {
        a = new Date(1e3 * (I[a >> 2] + 4294967296 * E[(a + 4) >> 2]));
        E[b >> 2] = a.getSeconds();
        E[(b + 4) >> 2] = a.getMinutes();
        E[(b + 8) >> 2] = a.getHours();
        E[(b + 12) >> 2] = a.getDate();
        E[(b + 16) >> 2] = a.getMonth();
        E[(b + 20) >> 2] = a.getFullYear() - 1900;
        E[(b + 24) >> 2] = a.getDay();
        E[(b + 28) >> 2] = xd(a) | 0;
        E[(b + 36) >> 2] = -(60 * a.getTimezoneOffset());
        var c = new Date(a.getFullYear(), 6, 1).getTimezoneOffset(),
          d = new Date(a.getFullYear(), 0, 1).getTimezoneOffset();
        E[(b + 32) >> 2] =
          (c != d && a.getTimezoneOffset() == Math.min(d, c)) | 0;
      },
      S: function (a) {
        var b = new Date(
            E[(a + 20) >> 2] + 1900,
            E[(a + 16) >> 2],
            E[(a + 12) >> 2],
            E[(a + 8) >> 2],
            E[(a + 4) >> 2],
            E[a >> 2],
            0,
          ),
          c = E[(a + 32) >> 2],
          d = b.getTimezoneOffset(),
          e = new Date(b.getFullYear(), 6, 1).getTimezoneOffset(),
          f = new Date(b.getFullYear(), 0, 1).getTimezoneOffset(),
          g = Math.min(f, e);
        0 > c
          ? (E[(a + 32) >> 2] = Number(e != f && g == d))
          : 0 < c != (g == d) &&
            ((e = Math.max(f, e)),
            b.setTime(b.getTime() + 6e4 * ((0 < c ? g : e) - d)));
        E[(a + 24) >> 2] = b.getDay();
        E[(a + 28) >> 2] = xd(b) | 0;
        E[a >> 2] = b.getSeconds();
        E[(a + 4) >> 2] = b.getMinutes();
        E[(a + 8) >> 2] = b.getHours();
        E[(a + 12) >> 2] = b.getDate();
        E[(a + 16) >> 2] = b.getMonth();
        E[(a + 20) >> 2] = b.getYear();
        return (b.getTime() / 1e3) | 0;
      },
      G: function (a, b, c, d, e, f, g) {
        try {
          var l = Yb(d);
          if (0 !== (b & 2) && 0 === (c & 2) && 2 !== (l.flags & 2097155))
            throw new N(2);
          if (1 === (l.flags & 2097155)) throw new N(2);
          if (!l.va.Za) throw new N(43);
          var m = l.va.Za(l, a, e, b, c);
          var n = m.xa;
          E[f >> 2] = m.Fb;
          I[g >> 2] = n;
          return 0;
        } catch (r) {
          if ("undefined" == typeof S || "ErrnoError" !== r.name) throw r;
          return -r.Fa;
        }
      },
      H: function (a, b, c, d, e, f) {
        try {
          var g = Yb(e);
          if (c & 2) {
            if (32768 !== (g.node.mode & 61440)) throw new N(43);
            d & 2 || (g.va.nb && g.va.nb(g, w.slice(a, a + b), f, b, d));
          }
        } catch (l) {
          if ("undefined" == typeof S || "ErrnoError" !== l.name) throw l;
          return -l.Fa;
        }
      },
      T: function (a, b, c) {
        function d(m) {
          return (m = m.toTimeString().match(/\(([A-Za-z ]+)\)$/))
            ? m[1]
            : "GMT";
        }
        var e = new Date().getFullYear(),
          f = new Date(e, 0, 1),
          g = new Date(e, 6, 1);
        e = f.getTimezoneOffset();
        var l = g.getTimezoneOffset();
        I[a >> 2] = 60 * Math.max(e, l);
        E[b >> 2] = Number(e != l);
        a = d(f);
        b = d(g);
        a = yd(a);
        b = yd(b);
        l < e
          ? ((I[c >> 2] = a), (I[(c + 4) >> 2] = b))
          : ((I[c >> 2] = b), (I[(c + 4) >> 2] = a));
      },
      a: function () {
        ma("");
      },
      y: function (a, b, c) {
        Ad.length = 0;
        var d;
        for (c >>= 2; (d = w[b++]); )
          (c += (105 != d) & c), Ad.push(105 == d ? E[c] : ua[c++ >> 1]), ++c;
        return Pa[a].apply(null, Ad);
      },
      Q: function () {
        return Date.now();
      },
      F: function () {
        return 2147483648;
      },
      m: () => performance.now(),
      Z: function () {
        return !1;
      },
      O: function (a, b, c) {
        w.copyWithin(a, b, b + c);
      },
      E: function (a) {
        var b = w.length;
        a >>>= 0;
        if (2147483648 < a) return !1;
        for (var c = 1; 4 >= c; c *= 2) {
          var d = b * (1 + 0.2 / c);
          d = Math.min(d, a + 100663296);
          var e = Math,
            f = e.min;
          d = Math.max(a, d);
          d += (65536 - (d % 65536)) % 65536;
          a: {
            var g = na.buffer;
            try {
              na.grow((f.call(e, 2147483648, d) - g.byteLength + 65535) >>> 16);
              va();
              var l = 1;
              break a;
            } catch (m) {}
            l = void 0;
          }
          if (l) return !0;
        }
        return !1;
      },
      Y: function (a, b, c, d, e) {
        function f(H) {
          if (z) H();
          else if (!oa)
            try {
              H();
            } catch (Na) {
              Na instanceof Qa || "unwind" == Na || ea(1, Na);
            }
        }
        var g = a + 112,
          l = v(g),
          m = I[(g + 36) >> 2],
          n = I[(g + 40) >> 2],
          r = I[(g + 44) >> 2],
          p = I[(g + 48) >> 2],
          q = I[(g + 52) >> 2],
          k = !!(q & 4),
          t = !!(q & 32),
          x = !!(q & 16),
          z = !!(q & 64),
          F = (H) => {
            f(() => {
              m ? Qc(m)(H) : b && b(H);
            });
          },
          G = (H) => {
            f(() => {
              r ? Qc(r)(H) : d && d(H);
            });
          },
          y = (H) => {
            f(() => {
              n ? Qc(n)(H) : c && c(H);
            });
          },
          M = (H) => {
            f(() => {
              p ? Qc(p)(H) : e && e(H);
            });
          };
        q = (H) => {
          Dd(H, F, y, G, M);
        };
        var B = (H, Na) => {
            Ed(
              H,
              Na.response,
              (Oa) => {
                f(() => {
                  m ? Qc(m)(Oa) : b && b(Oa);
                });
              },
              (Oa) => {
                f(() => {
                  m ? Qc(m)(Oa) : b && b(Oa);
                });
              },
            );
          },
          U = (H) => {
            Dd(H, B, y, G, M);
          };
        if ("EM_IDB_STORE" === l)
          (l = I[(g + 84) >> 2]), Ed(a, w.slice(l, l + I[(g + 88) >> 2]), F, y);
        else if ("EM_IDB_DELETE" === l) Gd(a, F, y);
        else if (x) {
          if (t) return 0;
          Dd(a, k ? B : F, y, G, M);
        } else Fd(a, F, t ? y : k ? U : q);
        return a;
      },
      I: function (a, b) {
        var c = 0;
        Id().forEach(function (d, e) {
          var f = b + c;
          e = I[(a + 4 * e) >> 2] = f;
          for (f = 0; f < d.length; ++f) C[e++ >> 0] = d.charCodeAt(f);
          C[e >> 0] = 0;
          c += d.length + 1;
        });
        return 0;
      },
      J: function (a, b) {
        var c = Id();
        I[a >> 2] = c.length;
        var d = 0;
        c.forEach(function (e) {
          d += e.length + 1;
        });
        I[b >> 2] = d;
        return 0;
      },
      aa: function (a) {
        if (!noExitRuntime) {
          if (h.onExit) h.onExit(a);
          oa = !0;
        }
        ea(a, new Qa(a));
      },
      t: function (a) {
        try {
          var b = Yb(a);
          Kb(b);
          return 0;
        } catch (c) {
          if ("undefined" == typeof S || "ErrnoError" !== c.name) throw c;
          return c.Fa;
        }
      },
      s: function (a, b, c, d) {
        try {
          a: {
            var e = Yb(a);
            a = b;
            for (var f, g = (b = 0); g < c; g++) {
              var l = I[a >> 2],
                m = I[(a + 4) >> 2];
              a += 8;
              var n = e,
                r = l,
                p = m,
                q = f,
                k = C;
              if (0 > p || 0 > q) throw new N(28);
              if (null === n.Pa) throw new N(8);
              if (1 === (n.flags & 2097155)) throw new N(8);
              if (16384 === (n.node.mode & 61440)) throw new N(31);
              if (!n.va.read) throw new N(28);
              var t = "undefined" != typeof q;
              if (!t) q = n.position;
              else if (!n.seekable) throw new N(70);
              var x = n.va.read(n, k, r, p, q);
              t || (n.position += x);
              var z = x;
              if (0 > z) {
                var F = -1;
                break a;
              }
              b += z;
              if (z < m) break;
              "undefined" !== typeof f && (f += z);
            }
            F = b;
          }
          I[d >> 2] = F;
          return 0;
        } catch (G) {
          if ("undefined" == typeof S || "ErrnoError" !== G.name) throw G;
          return G.Fa;
        }
      },
      A: function (a, b, c, d, e) {
        try {
          b =
            (c + 2097152) >>> 0 < 4194305 - !!b
              ? (b >>> 0) + 4294967296 * c
              : NaN;
          if (isNaN(b)) return 61;
          var f = Yb(a);
          Lb(f, b, d);
          K = [
            f.position >>> 0,
            ((J = f.position),
            1 <= +Math.abs(J)
              ? 0 < J
                ? (Math.min(+Math.floor(J / 4294967296), 4294967295) | 0) >>> 0
                : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
              : 0),
          ];
          E[e >> 2] = K[0];
          E[(e + 4) >> 2] = K[1];
          f.ub && 0 === b && 0 === d && (f.ub = null);
          return 0;
        } catch (g) {
          if ("undefined" == typeof S || "ErrnoError" !== g.name) throw g;
          return g.Fa;
        }
      },
      r: function (a, b, c, d) {
        try {
          a: {
            var e = Yb(a);
            a = b;
            for (var f, g = (b = 0); g < c; g++) {
              var l = I[a >> 2],
                m = I[(a + 4) >> 2];
              a += 8;
              var n = Mb(e, C, l, m, f);
              if (0 > n) {
                var r = -1;
                break a;
              }
              b += n;
              "undefined" !== typeof f && (f += n);
            }
            r = b;
          }
          I[d >> 2] = r;
          return 0;
        } catch (p) {
          if ("undefined" == typeof S || "ErrnoError" !== p.name) throw p;
          return p.Fa;
        }
      },
      _: function () {
        var a = stackTrace(),
          b = ra(a) + 1,
          c = zd(b);
        A(a, w, c, b);
        return c;
      },
      C: Kd,
      $: Nd,
      D: function (a, b, c, d) {
        return Nd(a, b, c, d);
      },
    };
    (function () {
      function a(c) {
        c = c.exports;
        h.asm = c;
        na = h.asm.ea;
        va();
        wa = h.asm.ia;
        ya.unshift(h.asm.fa);
        Fa("wasm-instantiate");
        return c;
      }
      var b = { a: Qd };
      Ea("wasm-instantiate");
      if (h.instantiateWasm)
        try {
          return h.instantiateWasm(b, a);
        } catch (c) {
          u("Module.instantiateWasm callback failed with error: " + c), ba(c);
        }
      Ma(b, function (c) {
        a(c.instance);
      }).catch(ba);
      return {};
    })();
    function X() {
      return (X = h.asm.ga).apply(null, arguments);
    }
    function zd() {
      return (zd = h.asm.ha).apply(null, arguments);
    }
    var Uc = (h.___getTypeName = function () {
      return (Uc = h.___getTypeName = h.asm.ja).apply(null, arguments);
    });
    h.__embind_initialize_bindings = function () {
      return (h.__embind_initialize_bindings = h.asm.ka).apply(null, arguments);
    };
    function eb() {
      return (eb = h.asm.la).apply(null, arguments);
    }
    h.dynCall_ji = function () {
      return (h.dynCall_ji = h.asm.ma).apply(null, arguments);
    };
    h.dynCall_jiji = function () {
      return (h.dynCall_jiji = h.asm.na).apply(null, arguments);
    };
    h.dynCall_viijii = function () {
      return (h.dynCall_viijii = h.asm.oa).apply(null, arguments);
    };
    h.dynCall_iiiiij = function () {
      return (h.dynCall_iiiiij = h.asm.pa).apply(null, arguments);
    };
    h.dynCall_iiiiijj = function () {
      return (h.dynCall_iiiiijj = h.asm.qa).apply(null, arguments);
    };
    h.dynCall_iiiiiijj = function () {
      return (h.dynCall_iiiiiijj = h.asm.ra).apply(null, arguments);
    };
    h.__ZN2MB2NN28LinearDefragmentingAllocator10Allocation4nullE = 1024;
    h.___start_em_js = 60474;
    h.___stop_em_js = 60897;
    h.addRunDependency = Ea;
    h.removeRunDependency = Fa;
    h.FS_createPath = Qb;
    h.FS_createDataFile = Sb;
    h.FS_createPreloadedFile = Wb;
    h.FS_createLazyFile = Ub;
    h.FS_createDevice = R;
    h.FS_unlink = Eb;
    var Rd;
    Da = function Sd() {
      Rd || Td();
      Rd || (Da = Sd);
    };
    function Td() {
      function a() {
        if (!Rd && ((Rd = !0), (h.calledRun = !0), !oa)) {
          h.noFSInit ||
            Ob ||
            ((Ob = !0),
            Nb(),
            (h.stdin = h.stdin),
            (h.stdout = h.stdout),
            (h.stderr = h.stderr),
            h.stdin
              ? R("/dev", "stdin", h.stdin)
              : Db("/dev/tty", "/dev/stdin"),
            h.stdout
              ? R("/dev", "stdout", null, h.stdout)
              : Db("/dev/tty", "/dev/stdout"),
            h.stderr
              ? R("/dev", "stderr", null, h.stderr)
              : Db("/dev/tty1", "/dev/stderr"),
            Jb("/dev/stdin", 0),
            Jb("/dev/stdout", 1),
            Jb("/dev/stderr", 1));
          pb = !1;
          Ra(ya);
          aa(h);
          if (h.onRuntimeInitialized) h.onRuntimeInitialized();
          if (h.postRun)
            for (
              "function" == typeof h.postRun && (h.postRun = [h.postRun]);
              h.postRun.length;

            ) {
              var b = h.postRun.shift();
              za.unshift(b);
            }
          Ra(za);
        }
      }
      if (!(0 < Ba)) {
        if (h.preRun)
          for (
            "function" == typeof h.preRun && (h.preRun = [h.preRun]);
            h.preRun.length;

          )
            Aa();
        Ra(xa);
        0 < Ba ||
          (h.setStatus
            ? (h.setStatus("Running..."),
              setTimeout(function () {
                setTimeout(function () {
                  h.setStatus("");
                }, 1);
                a();
              }, 1))
            : a());
      }
    }
    if (h.preInit)
      for (
        "function" == typeof h.preInit && (h.preInit = [h.preInit]);
        0 < h.preInit.length;

      )
        h.preInit.pop()();
    Td();

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
