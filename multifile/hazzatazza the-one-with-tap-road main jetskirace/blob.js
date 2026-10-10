function unityFramework(_0x3e26fa) {
  var _0x3e26fa = typeof _0x3e26fa !== "undefined" ? _0x3e26fa : {};
  _0x3e26fa.USER_JSPRE_PLACEHOLDER = "USER_JSPRE_PLACEHOLDER";
  function _0x10be91(_0x18fe06, _0x59de57) {
    _0x3b983d("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
    return _0x18fe06 ? _0x30b35d(_0x443a6b, _0x18fe06, _0x59de57) : '';
  }
  _0x3e26fa.Pointer_stringify = _0x10be91;
  var _0x28f89c = _0x2c5ba1().match(new RegExp("(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)"));
  if (_0x28f89c) {
    _0x3e26fa.stackTraceRegExp = new RegExp("(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)".replace("([^\\n]+)", _0x28f89c[0x4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
  }
  var _0x23489f = function (_0x3434ba) {
    if (_0x4adad0) {
      return;
    }
    _0x4adad0 = true;
    _0x5003ab = 0x1;
    if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
      console.error("Pthread aborting at " + new Error().stack);
    }
    if (_0x3434ba !== undefined) {
      _0x20a4ae(_0x3434ba);
      _0x4f2811(_0x3434ba);
      _0x3434ba = JSON.stringify(_0x3434ba);
    } else {
      _0x3434ba = '';
    }
    var _0x416bc2 = "abort(" + _0x3434ba + ") at " + _0x53e70b();
    if (_0x3e26fa.abortHandler && _0x3e26fa.abortHandler(_0x416bc2)) {
      return;
    }
    throw _0x416bc2;
  };
  _0x3e26fa.SetFullscreen = function (_0x42ab43) {
    if (typeof _0x193ff2 === "undefined" || !_0x193ff2) {
      console.log("Runtime not initialized yet.");
    } else {
      if (typeof _0x4f59e1 === "undefined") {
        console.log("Player not loaded yet.");
      } else {
        var _0x80da37 = _0x4f59e1.canPerformEventHandlerRequests;
        _0x4f59e1.canPerformEventHandlerRequests = function () {
          return 0x1;
        };
        _0x3e26fa.ccall("SetFullscreen", null, ["number"], [_0x42ab43]);
        _0x4f59e1.canPerformEventHandlerRequests = _0x80da37;
      }
    }
  };
  if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
    _0x3e26fa.preRun.push(function () {
      var _0x6828d8 = _0x3e26fa.unityFileSystemInit || function () {
        _0x363740.mkdir("/idbfs");
        _0x363740.mount(_0x4b5758, {}, "/idbfs");
        _0x3e26fa.addRunDependency("JS_FileSystem_Mount");
        _0x363740.syncfs(true, function (_0xff568d) {
          if (_0xff568d) {
            console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
          }
          _0x3e26fa.removeRunDependency("JS_FileSystem_Mount");
        });
      };
      _0x6828d8();
    });
  }
  var _0xc8df83 = [];
  var _0x45d309 = false;
  var _0x464441;
  var _0x1ec894 = null;
  function _0x269b13(_0x3a6ad3) {
    var _0x378e9a = Object.keys(_0xc8df83);
    for (var _0x94dae1 = 0x0; _0x94dae1 < _0x378e9a.length; ++_0x94dae1) {
      var _0x3421c2 = _0xc8df83[_0x378e9a[_0x94dae1]];
      if (_0x3421c2.deviceId && _0x3421c2.deviceId == _0x3a6ad3.deviceId) {
        return _0x3421c2;
      }
    }
    for (var _0x94dae1 = 0x0; _0x94dae1 < _0x378e9a.length; ++_0x94dae1) {
      var _0x3421c2 = _0xc8df83[_0x378e9a[_0x94dae1]];
      if (_0x3421c2 == _0x3a6ad3) {
        return _0x3421c2;
      }
    }
    for (var _0x94dae1 = 0x0; _0x94dae1 < _0x378e9a.length; ++_0x94dae1) {
      var _0x3421c2 = _0xc8df83[_0x378e9a[_0x94dae1]];
      if (_0x3421c2.label && _0x3421c2.label == _0x3a6ad3.label) {
        return _0x3421c2;
      }
    }
    for (var _0x94dae1 = 0x0; _0x94dae1 < _0x378e9a.length; ++_0x94dae1) {
      var _0x3421c2 = _0xc8df83[_0x378e9a[_0x94dae1]];
      if (_0x3421c2.groupId && _0x3421c2.kind && _0x3421c2.groupId == _0x3a6ad3.groupId && _0x3421c2.kind == _0x3a6ad3.kind) {
        return _0x3421c2;
      }
    }
  }
  function _0x4de704() {
    for (var _0x1659c4 = 0x0;; ++_0x1659c4) {
      if (!_0xc8df83[_0x1659c4]) {
        return _0x1659c4;
      }
    }
  }
  function _0x1d7d70(_0x144f74) {
    _0x464441();
    _0xc8df83 = [];
    var _0x28fe48 = {};
    var _0x45e3f0 = [];
    _0x144f74.forEach(function (_0x2e2177) {
      if (_0x2e2177.kind === "videoinput") {
        var _0x1c48bf = _0x269b13(_0x2e2177);
        if (_0x1c48bf) {
          _0x28fe48[_0x1c48bf.id] = _0x1c48bf;
        } else {
          _0x45e3f0.push(_0x2e2177);
        }
      }
    });
    _0xc8df83 = _0x28fe48;
    _0x45e3f0.forEach(function (_0x34f762) {
      if (!_0x34f762.id) {
        _0x34f762.id = _0x4de704();
        _0x34f762.name = _0x34f762.label || "Video input #" + (_0x34f762.id + 0x1);
        _0x34f762.isFrontFacing = _0x34f762.name.toLowerCase().includes("front") || !_0x34f762.name.toLowerCase().includes("front") && !_0x34f762.name.toLowerCase().includes("back");
        _0xc8df83[_0x34f762.id] = _0x34f762;
      }
    });
  }
  function _0x5070d1() {
    if (!_0xc8df83) {
      return;
    }
    navigator.mediaDevices.enumerateDevices().then(function (_0x5411d9) {
      _0x1d7d70(_0x5411d9);
      _0x45d309 = true;
    })["catch"](function (_0x3f52a2) {
      console.warn("Unable to enumerate media devices: " + _0x3f52a2 + "\nWebcams will not be available.");
      _0xca27();
    });
    if (/Firefox/.test(navigator.userAgent)) {
      setTimeout(_0x5070d1, 0xea60);
      _0x3b983d("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
    }
  }
  function _0xca27() {
    if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
      navigator.mediaDevices.removeEventListener("devicechange", _0x5070d1);
    }
    _0xc8df83 = null;
  }
  _0x3e26fa.disableAccessToMediaDevices = _0xca27;
  if (!navigator.mediaDevices) {
    console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? '' : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
    _0xca27();
  } else {
    if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
      setTimeout(function () {
        try {
          _0x10fd90("enumerateMediaDevices");
          _0x464441 = function () {
            if (_0x1ec894 !== null) {
              clearTimeout(_0x1ec894);
            }
            _0x3cfbac("enumerateMediaDevices");
            if (navigator.mediaDevices) {
              console.log("navigator.mediaDevices support available");
            }
            _0x464441 = function () {};
          };
          _0x5070d1();
          _0x1ec894 = setTimeout(_0x464441, 0x3e8);
          navigator.mediaDevices.addEventListener("devicechange", _0x5070d1);
        } catch (_0x39f015) {
          console.warn("Unable to enumerate media devices: " + _0x39f015);
          _0xca27();
        }
      }, 0x0);
    }
  }
  function _0x351ec3(_0x32d19d, _0x48168d, _0x347578) {
    var _0x2ed272 = _0x12e69f(_0x48168d);
    var _0xbe1bea = _0x12e69f(_0x32d19d);
    var _0x19f12c = 0x0;
    try {
      if (_0x347578 === undefined) {
        _0x3d0b98(_0xbe1bea, _0x2ed272);
      } else {
        if (typeof _0x347578 === "string") {
          _0x19f12c = _0x12e69f(_0x347578);
          _0x351cc8(_0xbe1bea, _0x2ed272, _0x19f12c);
        } else {
          if (typeof _0x347578 === "number") {
            _0x328759(_0xbe1bea, _0x2ed272, _0x347578);
          } else {
            throw '' + _0x347578 + " is does not have a type which is supported by SendMessage.";
          }
        }
      }
    } finally {
      _0x14abf4(_0x19f12c);
      _0x14abf4(_0xbe1bea);
      _0x14abf4(_0x2ed272);
    }
  }
  _0x3e26fa.SendMessage = _0x351ec3;
  var _0x59d886 = {};
  var _0x5e3b6f;
  for (_0x5e3b6f in _0x3e26fa) {
    if (_0x3e26fa.hasOwnProperty(_0x5e3b6f)) {
      _0x59d886[_0x5e3b6f] = _0x3e26fa[_0x5e3b6f];
    }
  }
  var _0x292d79 = [];
  var _0x19bd65 = "./this.program";
  var _0x1cff08 = function (_0x36f774, _0x506cfe) {
    throw _0x506cfe;
  };
  var _0x4f36fe = false;
  var _0x4e8b49 = false;
  var _0x1f12a4 = false;
  var _0x516a82 = false;
  _0x4f36fe = typeof window === "object";
  _0x4e8b49 = typeof importScripts === "function";
  _0x1f12a4 = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
  _0x516a82 = !_0x4f36fe && !_0x1f12a4 && !_0x4e8b49;
  var _0x3432d9 = '';
  function _0x3c3001(_0x48900d) {
    if (_0x3e26fa.locateFile) {
      return _0x3e26fa.locateFile(_0x48900d, _0x3432d9);
    }
    return _0x3432d9 + _0x48900d;
  }
  var _0x3122e9;
  var _0x5ef56d;
  var _0x43f21e;
  var _0x409501;
  var _0xcd2e77;
  var _0x2fcbb8;
  if (_0x1f12a4) {
    if (_0x4e8b49) {
      _0x3432d9 = require("path").dirname(_0x3432d9) + "/";
    } else {
      _0x3432d9 = __dirname + "/";
    }
    _0x3122e9 = function _0x35b4d3(_0x3fa0f4, _0x2c7c50) {
      if (!_0xcd2e77) {
        _0xcd2e77 = require("fs");
      }
      if (!_0x2fcbb8) {
        _0x2fcbb8 = require("path");
      }
      _0x3fa0f4 = _0x2fcbb8.normalize(_0x3fa0f4);
      return _0xcd2e77.readFileSync(_0x3fa0f4, _0x2c7c50 ? null : "utf8");
    };
    _0x43f21e = function _0x1f9693(_0x36dd5d) {
      var _0x32946d = _0x3122e9(_0x36dd5d, true);
      if (!_0x32946d.buffer) {
        _0x32946d = new Uint8Array(_0x32946d);
      }
      _0x47fd96(_0x32946d.buffer);
      return _0x32946d;
    };
    if (process.argv.length > 0x1) {
      _0x19bd65 = process.argv[0x1].replace(/\\/g, "/");
    }
    _0x292d79 = process.argv.slice(0x2);
    if (typeof module !== "undefined") {
      module.exports = _0x3e26fa;
    }
    process.on("uncaughtException", function (_0x6164d5) {
      if (!(_0x6164d5 instanceof _0x1c904b)) {
        throw _0x6164d5;
      }
    });
    process.on("unhandledRejection", _0x23489f);
    _0x1cff08 = function (_0x238bec) {
      process.exit(_0x238bec);
    };
    _0x3e26fa.inspect = function () {
      return "[Emscripten Module object]";
    };
  } else {
    if (_0x516a82) {
      if (typeof read != "undefined") {
        _0x3122e9 = function _0x2e4db2(_0x58c146) {
          return read(_0x58c146);
        };
      }
      _0x43f21e = function _0x19ec80(_0xb36c2c) {
        var _0x1962a8;
        if (typeof readbuffer === "function") {
          return new Uint8Array(readbuffer(_0xb36c2c));
        }
        _0x1962a8 = read(_0xb36c2c, "binary");
        _0x47fd96(typeof _0x1962a8 === "object");
        return _0x1962a8;
      };
      if (typeof scriptArgs != "undefined") {
        _0x292d79 = scriptArgs;
      } else if (typeof arguments != "undefined") {
        _0x292d79 = arguments;
      }
      if (typeof quit === "function") {
        _0x1cff08 = function (_0x493d5f) {
          quit(_0x493d5f);
        };
      }
      if (typeof print !== "undefined") {
        if (typeof console === "undefined") {
          console = {};
        }
        console.log = print;
        console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
      }
    } else {
      if (_0x4f36fe || _0x4e8b49) {
        if (_0x4e8b49) {
          _0x3432d9 = self.location.href;
        } else if (typeof document !== "undefined" && document.currentScript) {
          _0x3432d9 = document.currentScript.src;
        }
        if (_0x3432d9.indexOf("blob:") !== 0x0) {
          _0x3432d9 = _0x3432d9.substr(0x0, _0x3432d9.lastIndexOf("/") + 0x1);
        } else {
          _0x3432d9 = '';
        }
        {
          _0x3122e9 = function (_0x34e5a3) {
            var _0x29cc8c = new XMLHttpRequest();
            _0x29cc8c.open("GET", _0x34e5a3, false);
            _0x29cc8c.send(null);
            return _0x29cc8c.responseText;
          };
          if (_0x4e8b49) {
            _0x43f21e = function (_0x255323) {
              var _0x597d32 = new XMLHttpRequest();
              _0x597d32.open("GET", _0x255323, false);
              _0x597d32.responseType = "arraybuffer";
              _0x597d32.send(null);
              return new Uint8Array(_0x597d32.response);
            };
          }
          _0x5ef56d = function (_0x3412d5, _0x162042, _0x481699) {
            var _0x2ee75b = new XMLHttpRequest();
            _0x2ee75b.open("GET", _0x3412d5, true);
            _0x2ee75b.responseType = "arraybuffer";
            _0x2ee75b.onload = function () {
              if (_0x2ee75b.status == 0xc8 || _0x2ee75b.status == 0x0 && _0x2ee75b.response) {
                _0x162042(_0x2ee75b.response);
                return;
              }
              _0x481699();
            };
            _0x2ee75b.onerror = _0x481699;
            _0x2ee75b.send(null);
          };
        }
        _0x409501 = function (_0x1b5b59) {
          document.title = _0x1b5b59;
        };
      } else {}
    }
  }
  var _0x20a4ae = _0x3e26fa.print || console.log.bind(console);
  var _0x4f2811 = _0x3e26fa.printErr || console.warn.bind(console);
  for (_0x5e3b6f in _0x59d886) {
    if (_0x59d886.hasOwnProperty(_0x5e3b6f)) {
      _0x3e26fa[_0x5e3b6f] = _0x59d886[_0x5e3b6f];
    }
  }
  _0x59d886 = null;
  if (_0x3e26fa.arguments) {
    _0x292d79 = _0x3e26fa.arguments;
  }
  if (_0x3e26fa.thisProgram) {
    _0x19bd65 = _0x3e26fa.thisProgram;
  }
  if (_0x3e26fa.quit) {
    _0x1cff08 = _0x3e26fa.quit;
  }
  function _0x22b3fe(_0xf87fce, _0x377915) {
    if (!_0x377915) {
      _0x377915 = 0x10;
    }
    return Math.ceil(_0xf87fce / _0x377915) * _0x377915;
  }
  function _0x3b983d(_0x2ead5d) {
    if (!_0x3b983d.shown) {
      _0x3b983d.shown = {};
    }
    if (!_0x3b983d.shown[_0x2ead5d]) {
      _0x3b983d.shown[_0x2ead5d] = 0x1;
      _0x4f2811(_0x2ead5d);
    }
  }
  var _0x227fbd;
  if (_0x3e26fa.wasmBinary) {
    _0x227fbd = _0x3e26fa.wasmBinary;
  }
  var _0x1150ad = _0x3e26fa.noExitRuntime || true;
  if (typeof WebAssembly !== "object") {
    _0x23489f("no native wasm support detected");
  }
  var _0x4adad0 = false;
  var _0x5003ab;
  function _0x47fd96(_0x1d5291, _0x47510c) {
    if (!_0x1d5291) {
      _0x23489f("Assertion failed: " + _0x47510c);
    }
  }
  function _0x39c151(_0x220ec0) {
    var _0x32b6fb = _0x3e26fa["_" + _0x220ec0];
    _0x47fd96(_0x32b6fb, "Cannot call unknown function " + _0x220ec0 + ", make sure it is exported");
    return _0x32b6fb;
  }
  function _0x8f1110(_0x512625, _0x1e21df, _0x548139, _0x23f69e, _0x5d3e86) {
    var _0x5a029b = {
      "string": function (_0x22f483) {
        var _0xeff74 = 0x0;
        if (_0x22f483 !== null && _0x22f483 !== undefined && _0x22f483 !== 0x0) {
          var _0x1ffd35 = (_0x22f483.length << 0x2) + 0x1;
          _0xeff74 = _0x1c92f2(_0x1ffd35);
          _0x58221b(_0x22f483, _0x443a6b, _0xeff74, _0x1ffd35);
        }
        return _0xeff74;
      },
      "array": function (_0xbe8b59) {
        var _0x2475a9 = _0x1c92f2(_0xbe8b59.length);
        _0x700f03(_0xbe8b59, _0x2475a9);
        return _0x2475a9;
      }
    };
    function _0x516260(_0x2597e6) {
      if (_0x1e21df === "string") {
        return _0x2597e6 ? _0x30b35d(_0x443a6b, _0x2597e6, undefined) : '';
      }
      if (_0x1e21df === "boolean") {
        return Boolean(_0x2597e6);
      }
      return _0x2597e6;
    }
    var _0x4a7881 = _0x39c151(_0x512625);
    var _0x159c63 = [];
    var _0x3976fa = 0x0;
    if (_0x23f69e) {
      for (var _0x4d69c7 = 0x0; _0x4d69c7 < _0x23f69e.length; _0x4d69c7++) {
        var _0x40e403 = _0x5a029b[_0x548139[_0x4d69c7]];
        if (_0x40e403) {
          if (_0x3976fa === 0x0) {
            _0x3976fa = _0x328ef0();
          }
          _0x159c63[_0x4d69c7] = _0x40e403(_0x23f69e[_0x4d69c7]);
        } else {
          _0x159c63[_0x4d69c7] = _0x23f69e[_0x4d69c7];
        }
      }
    }
    var _0x40fdad = _0x4a7881.apply(null, _0x159c63);
    _0x40fdad = _0x516260(_0x40fdad);
    if (_0x3976fa !== 0x0) {
      _0x570ce6(_0x3976fa);
    }
    return _0x40fdad;
  }
  function _0x3bb0c3(_0x1f06ea, _0x2397b1, _0x5229d3, _0x2edab5) {
    _0x5229d3 = _0x5229d3 || [];
    var _0x186ac2 = _0x5229d3.every(function (_0x117731) {
      return _0x117731 === "number";
    });
    var _0x49dded = _0x2397b1 !== "string";
    if (_0x49dded && _0x186ac2 && !_0x2edab5) {
      return _0x39c151(_0x1f06ea);
    }
    return function () {
      return _0x8f1110(_0x1f06ea, _0x2397b1, _0x5229d3, arguments, _0x2edab5);
    };
  }
  var _0x2b482e = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
  function _0x30b35d(_0x5630d3, _0x5eef7f, _0x29e2c9) {
    var _0x2565a7 = _0x5eef7f + _0x29e2c9;
    var _0x32882c = _0x5eef7f;
    while (_0x5630d3[_0x32882c] && !(_0x32882c >= _0x2565a7)) {
      ++_0x32882c;
    }
    if (_0x32882c - _0x5eef7f > 0x10 && _0x5630d3.subarray && _0x2b482e) {
      return _0x2b482e.decode(_0x5630d3.subarray(_0x5eef7f, _0x32882c));
    } else {
      var _0x18deb2 = '';
      while (_0x5eef7f < _0x32882c) {
        var _0x185efd = _0x5630d3[_0x5eef7f++];
        if (!(_0x185efd & 0x80)) {
          _0x18deb2 += String.fromCharCode(_0x185efd);
          continue;
        }
        var _0x1fca44 = _0x5630d3[_0x5eef7f++] & 0x3f;
        if ((_0x185efd & 0xe0) == 0xc0) {
          _0x18deb2 += String.fromCharCode((_0x185efd & 0x1f) << 0x6 | _0x1fca44);
          continue;
        }
        var _0xc2ee7a = _0x5630d3[_0x5eef7f++] & 0x3f;
        if ((_0x185efd & 0xf0) == 0xe0) {
          _0x185efd = (_0x185efd & 0xf) << 0xc | _0x1fca44 << 0x6 | _0xc2ee7a;
        } else {
          _0x185efd = (_0x185efd & 0x7) << 0x12 | _0x1fca44 << 0xc | _0xc2ee7a << 0x6 | _0x5630d3[_0x5eef7f++] & 0x3f;
        }
        if (_0x185efd < 0x10000) {
          _0x18deb2 += String.fromCharCode(_0x185efd);
        } else {
          var _0xf9126e = _0x185efd - 0x10000;
          _0x18deb2 += String.fromCharCode(0xd800 | _0xf9126e >> 0xa, 0xdc00 | _0xf9126e & 0x3ff);
        }
      }
    }
    return _0x18deb2;
  }
  function _0x58221b(_0x55c51a, _0x1fa86d, _0x55699a, _0x80f122) {
    if (!(_0x80f122 > 0x0)) {
      return 0x0;
    }
    var _0x53a5ac = _0x55699a;
    var _0x25f2bd = _0x55699a + _0x80f122 - 0x1;
    for (var _0x3c7ff7 = 0x0; _0x3c7ff7 < _0x55c51a.length; ++_0x3c7ff7) {
      var _0x349516 = _0x55c51a.charCodeAt(_0x3c7ff7);
      if (_0x349516 >= 0xd800 && _0x349516 <= 0xdfff) {
        var _0xea7cb5 = _0x55c51a.charCodeAt(++_0x3c7ff7);
        _0x349516 = 0x10000 + ((_0x349516 & 0x3ff) << 0xa) | _0xea7cb5 & 0x3ff;
      }
      if (_0x349516 <= 0x7f) {
        if (_0x55699a >= _0x25f2bd) {
          break;
        }
        _0x1fa86d[_0x55699a++] = _0x349516;
      } else {
        if (_0x349516 <= 0x7ff) {
          if (_0x55699a + 0x1 >= _0x25f2bd) {
            break;
          }
          _0x1fa86d[_0x55699a++] = 0xc0 | _0x349516 >> 0x6;
          _0x1fa86d[_0x55699a++] = 0x80 | _0x349516 & 0x3f;
        } else {
          if (_0x349516 <= 0xffff) {
            if (_0x55699a + 0x2 >= _0x25f2bd) {
              break;
            }
            _0x1fa86d[_0x55699a++] = 0xe0 | _0x349516 >> 0xc;
            _0x1fa86d[_0x55699a++] = 0x80 | _0x349516 >> 0x6 & 0x3f;
            _0x1fa86d[_0x55699a++] = 0x80 | _0x349516 & 0x3f;
          } else {
            if (_0x55699a + 0x3 >= _0x25f2bd) {
              break;
            }
            _0x1fa86d[_0x55699a++] = 0xf0 | _0x349516 >> 0x12;
            _0x1fa86d[_0x55699a++] = 0x80 | _0x349516 >> 0xc & 0x3f;
            _0x1fa86d[_0x55699a++] = 0x80 | _0x349516 >> 0x6 & 0x3f;
            _0x1fa86d[_0x55699a++] = 0x80 | _0x349516 & 0x3f;
          }
        }
      }
    }
    _0x1fa86d[_0x55699a] = 0x0;
    return _0x55699a - _0x53a5ac;
  }
  function _0x35ce1(_0x1ee18e) {
    var _0x3e58c9 = 0x0;
    for (var _0x4931d6 = 0x0; _0x4931d6 < _0x1ee18e.length; ++_0x4931d6) {
      var _0x10d974 = _0x1ee18e.charCodeAt(_0x4931d6);
      if (_0x10d974 >= 0xd800 && _0x10d974 <= 0xdfff) {
        _0x10d974 = 0x10000 + ((_0x10d974 & 0x3ff) << 0xa) | _0x1ee18e.charCodeAt(++_0x4931d6) & 0x3ff;
      }
      if (_0x10d974 <= 0x7f) {
        ++_0x3e58c9;
      } else {
        if (_0x10d974 <= 0x7ff) {
          _0x3e58c9 += 0x2;
        } else {
          if (_0x10d974 <= 0xffff) {
            _0x3e58c9 += 0x3;
          } else {
            _0x3e58c9 += 0x4;
          }
        }
      }
    }
    return _0x3e58c9;
  }
  function _0x47fb56(_0x66cb70) {
    var _0x4d3705 = _0x35ce1(_0x66cb70) + 0x1;
    var _0x139f0e = _0x54d388(_0x4d3705);
    if (_0x139f0e) {
      _0x58221b(_0x66cb70, _0x5dcf40, _0x139f0e, _0x4d3705);
    }
    return _0x139f0e;
  }
  function _0x581a23(_0x29bc4c) {
    var _0x393281 = _0x35ce1(_0x29bc4c) + 0x1;
    var _0x593bfa = _0x1c92f2(_0x393281);
    _0x58221b(_0x29bc4c, _0x5dcf40, _0x593bfa, _0x393281);
    return _0x593bfa;
  }
  function _0x700f03(_0x2df1a7, _0x34a676) {
    _0x5dcf40.set(_0x2df1a7, _0x34a676);
  }
  var _0x47b583;
  var _0x5dcf40;
  var _0x443a6b;
  var _0x2ec55e;
  var _0x471b21;
  var _0x54faca = [];
  var _0x2e0688 = [];
  var _0x1c2b2c = [];
  var _0x316a23 = [];
  var _0x1f6f76 = [];
  var _0x193ff2 = false;
  var _0x52df69 = false;
  function _0x32f058() {
    if (_0x3e26fa.preRun) {
      if (typeof _0x3e26fa.preRun == "function") {
        _0x3e26fa.preRun = [_0x3e26fa.preRun];
      }
      while (_0x3e26fa.preRun.length) {
        _0x89c0f4(_0x3e26fa.preRun.shift());
      }
    }
    _0x163335(_0x54faca);
  }
  function _0x2d9136() {
    _0x193ff2 = true;
    if (!_0x3e26fa.noFSInit && !_0x363740.init.initialized) {
      _0x363740.init();
    }
    _0x30cb67.init();
    _0x3a7c84.root = _0x363740.mount(_0x3a7c84, {}, null);
    _0x5c900e.root = _0x363740.mount(_0x5c900e, {}, null);
    _0x163335(_0x2e0688);
  }
  function _0x565161() {
    _0x363740.ignorePermissions = false;
    _0x163335(_0x1c2b2c);
  }
  function _0xc2e486() {
    _0x52df69 = true;
  }
  function _0x4f4611() {
    if (_0x3e26fa.postRun) {
      if (typeof _0x3e26fa.postRun == "function") {
        _0x3e26fa.postRun = [_0x3e26fa.postRun];
      }
      while (_0x3e26fa.postRun.length) {
        _0x9920cf(_0x3e26fa.postRun.shift());
      }
    }
    _0x163335(_0x1f6f76);
  }
  function _0x89c0f4(_0xc3758) {
    _0x54faca.unshift(_0xc3758);
  }
  function _0x9920cf(_0x16d76d) {
    _0x1f6f76.unshift(_0x16d76d);
  }
  var _0xcdd5f4 = 0x0;
  var _0x3dc8c1 = null;
  var _0x4bf6ce = null;
  function _0x10fd90(_0x1f929b) {
    _0xcdd5f4++;
    if (_0x3e26fa.monitorRunDependencies) {
      _0x3e26fa.monitorRunDependencies(_0xcdd5f4);
    }
  }
  function _0x3cfbac(_0x272700) {
    _0xcdd5f4--;
    if (_0x3e26fa.monitorRunDependencies) {
      _0x3e26fa.monitorRunDependencies(_0xcdd5f4);
    }
    if (_0xcdd5f4 == 0x0) {
      if (_0x3dc8c1 !== null) {
        clearInterval(_0x3dc8c1);
        _0x3dc8c1 = null;
      }
      if (_0x4bf6ce) {
        var _0x531ee4 = _0x4bf6ce;
        _0x4bf6ce = null;
        _0x531ee4();
      }
    }
  }
  _0x3e26fa.preloadedImages = {};
  _0x3e26fa.preloadedAudios = {};
  function _0x23489f(_0x2fcc07) {
    if (_0x3e26fa.onAbort) {
      _0x3e26fa.onAbort(_0x2fcc07);
    }
    _0x2fcc07 += '';
    _0x4f2811(_0x2fcc07);
    _0x4adad0 = true;
    _0x5003ab = 0x1;
    _0x2fcc07 = "abort(" + _0x2fcc07 + "). Build with -s ASSERTIONS=1 for more info.";
    var _0xc535fd = new WebAssembly.RuntimeError(_0x2fcc07);
    throw _0xc535fd;
  }
  var _0x53286b = "build.wasm";
  if (!_0x53286b.startsWith("data:application/octet-stream;base64,")) {
    _0x53286b = _0x3c3001(_0x53286b);
  }
  var _0x1996d9;
  var _0x4b3d6f;
  function _0x163335(_0x582d3e) {
    while (_0x582d3e.length > 0x0) {
      var _0x30c972 = _0x582d3e.shift();
      if (typeof _0x30c972 == "function") {
        _0x30c972(_0x3e26fa);
        continue;
      }
      var _0x10b24f = _0x30c972.func;
      if (typeof _0x10b24f === "number") {
        if (_0x30c972.arg === undefined) {
          (function () {
            _0x58d210.call(null, _0x10b24f);
          })();
        } else {
          (function (_0x12946c) {
            _0x211044.apply(null, [_0x10b24f, _0x12946c]);
          })(_0x30c972.arg);
        }
      } else {
        _0x10b24f(_0x30c972.arg === undefined ? null : _0x30c972.arg);
      }
    }
  }
  function _0x2e218b(_0x352b12) {
    var _0x2c40cc = /\b_Z[\w\d_]+/g;
    return _0x352b12.replace(_0x2c40cc, function (_0x5799c2) {
      return _0x5799c2 === _0x5df6ee ? _0x5799c2 : _0x5df6ee + " [" + _0x5799c2 + "]";
    });
  }
  function _0x2c5ba1() {
    var _0x27cee2 = new Error();
    if (!_0x27cee2.stack) {
      try {
        throw new Error();
      } catch (_0x2e12f2) {
        _0x27cee2 = _0x2e12f2;
      }
      if (!_0x27cee2.stack) {
        return "(no stack trace available)";
      }
    }
    return _0x27cee2.stack.toString();
  }
  function _0x53e70b() {
    var _0x502c12 = _0x2c5ba1();
    if (_0x3e26fa.extraStackTrace) {
      _0x502c12 += "\n" + _0x3e26fa.extraStackTrace();
    }
    return _0x2e218b(_0x502c12);
  }
  function _0x389393(_0xdcf272) {
    if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
      return window.CSS.escape(_0xdcf272);
    }
    return _0xdcf272.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
  }
  function _0xc45a84() {
    var _0x4448d1 = _0x3e26fa.canvas ? _0x3e26fa.canvas.id : "unity-canvas";
    return "#" + _0x389393(_0x4448d1);
  }
  function _0x12e69f(_0x4d5119) {
    var _0xdc2860 = _0x35ce1(_0x4d5119) + 0x1;
    var _0x245a1d = _0x54d388(_0xdc2860);
    _0x58221b(_0x4d5119, _0x443a6b, _0x245a1d, _0xdc2860);
    return _0x245a1d;
  }
  function _0x8db535() {
    var _0x444c3d = _0xc45a84();
    if (_0x8db535.selector != _0x444c3d) {
      _0x14abf4(_0x8db535.ptr);
      _0x8db535.ptr = _0x12e69f(_0x444c3d);
      _0x8db535.selector = _0x444c3d;
    }
    return _0x8db535.ptr;
  }
  var _0x668439 = {
    "numPendingSync": 0x0,
    "syncInternal": 0x3e8,
    "syncInProgress": false,
    "sync": function (_0x5eafb3) {
      if (_0x5eafb3) {
        return;
      } else {}
      _0x668439.syncInProgress = true;
      _0x363740.syncfs(false, function (_0x4da3c6) {
        _0x668439.syncInProgress = false;
      });
      _0x668439.numPendingSync = 0x0;
    }
  };
  function _0x266aad(_0x53d4ed) {
    window.wgUnityInstance = _0x3e26fa;
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
      window[preroll.config.loaderObjectName].ping(_0x53d4ed);
    } catch (_0x395c9b) {
      console.log("WGSDK: No production WGSDK resources found, loading development resources.");
      var _0x2ff2b3 = document.createElement("script");
      _0x2ff2b3.addEventListener("load", function (_0x5ed7a1) {
        var _0x2445bd = document.createElement("script");
        _0x2445bd.addEventListener("load", function (_0x3b3b0a) {
          console.log("WGSDK: Development resources loaded.");
          _0x5458ee(_0x53d4ed, true);
        }.bind(this));
        document.getElementsByTagName("head")[0x0].appendChild(_0x2445bd);
        _0x2445bd.src = "https://afg.wgplayer.com/wgplayer.com/js/RkQDh8KWt62VoH09FPNYqA/2357995679/wgAds.js";
      }.bind(this));
      document.getElementsByTagName("head")[0x0].appendChild(_0x2ff2b3);
      _0x2ff2b3.src = "https://afg.wgplayer.com/wgplayer.com/wgAds.iframe.conf.js";
    }
  }
  function _0x5458ee(_0x2515b5, _0x439e15) {
    var _0x11b6df;
    if (_0x439e15 === true) {
      _0x11b6df = _0x2515b5;
    } else {
      _0x11b6df = _0x10be91(_0x2515b5);
    }
    setTimeout(function () {
      _0x266aad(_0x11b6df);
    }, 0xfa);
  }
  function _0x101cef() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
      window[window.preroll.config.loaderObjectName].registerGameControls(_0x3e26fa);
    } catch (_0x1513f6) {
      console.log("WGSDK: Can not register game controls.");
      setTimeout(function () {
        _0x101cef();
      }, 0xfa);
    }
  }
  function _0x2db440() {
    try {
      window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
      window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
        "onReady": "OnReadyMethod",
        "onSuccess": "OnSuccessMethod",
        "onFail": "OnFailMethod"
      });
    } catch (_0x25744a) {
      console.log("WGSDK: Can not register reward ad callbacks.");
      _0x325fdb();
    }
  }
  function _0x325fdb() {
    setTimeout(function () {
      _0x2db440();
    }, 0xfa);
  }
  var _0x1ccdfe = {
    "requestInstances": {},
    "nextRequestId": 0x1,
    "loglevel": 0x2,
    "SendTextToCSharpSide": function (_0xe38f69, _0x59ae43, _0xf951a3) {
      const _0x38e946 = new TextEncoder();
      const _0x3e5978 = _0x38e946.encode(_0xf951a3);
      const _0x4ecd7a = function (_0x53c2a8, _0xf53a6b) {
        return _0x54b2d3.apply(null, [_0x1ccdfe.onallocbuffer, _0x53c2a8, _0xf53a6b]);
      }(_0xe38f69, _0x3e5978.length);
      _0x443a6b.set(_0x3e5978, _0x4ecd7a);
      (function (_0x97a53a, _0x20b8e9, _0x314e99) {
        _0x1f1dd5.apply(null, [_0x59ae43, _0x97a53a, _0x20b8e9, _0x314e99]);
      })(_0xe38f69, _0x4ecd7a, _0x3e5978.length);
    },
    "GetResponseHeaders": function (_0x783c6b, _0x1b3f68) {
      var _0x53e540 = '';
      if (document && document.cookie) {
        var _0x80d156 = document.cookie.split(";");
        for (var _0x54c6ae = 0x0; _0x54c6ae < _0x80d156.length; ++_0x54c6ae) {
          const _0x515ce3 = _0x80d156[_0x54c6ae].trim();
          if (_0x515ce3.length > 0x0) {
            _0x53e540 += "Set-Cookie:" + _0x515ce3 + "\n";
          }
        }
      }
      const _0x49539e = _0x1ccdfe.requestInstances[_0x783c6b].getAllResponseHeaders().trim().split(/[\r\n]+/);
      _0x49539e.forEach(_0x53891e => {
        const _0xc74bc3 = _0x53891e.split(": ");
        const _0x14e4a2 = _0xc74bc3.shift();
        const _0x514ac0 = _0xc74bc3.join(": ");
        if (_0x14e4a2 !== "content-length") {
          _0x53e540 += _0x14e4a2 + ":" + _0x514ac0 + "\n";
        }
      });
      _0x1ccdfe.SendTextToCSharpSide(_0x783c6b, _0x1b3f68, _0x53e540);
    }
  };
  function _0x538dc1(_0x35c52b, _0x2309ff) {
    var _0x2ab476 = new Date(_0x2ec55e[_0x35c52b >> 0x2] * 0x3e8);
    _0x2ec55e[_0x2309ff >> 0x2] = _0x2ab476.getUTCSeconds();
    _0x2ec55e[_0x2309ff + 0x4 >> 0x2] = _0x2ab476.getUTCMinutes();
    _0x2ec55e[_0x2309ff + 0x8 >> 0x2] = _0x2ab476.getUTCHours();
    _0x2ec55e[_0x2309ff + 0xc >> 0x2] = _0x2ab476.getUTCDate();
    _0x2ec55e[_0x2309ff + 0x10 >> 0x2] = _0x2ab476.getUTCMonth();
    _0x2ec55e[_0x2309ff + 0x14 >> 0x2] = _0x2ab476.getUTCFullYear() - 0x76c;
    _0x2ec55e[_0x2309ff + 0x18 >> 0x2] = _0x2ab476.getUTCDay();
    _0x2ec55e[_0x2309ff + 0x24 >> 0x2] = 0x0;
    _0x2ec55e[_0x2309ff + 0x20 >> 0x2] = 0x0;
    var _0x5579eb = Date.UTC(_0x2ab476.getUTCFullYear(), 0x0, 0x1, 0x0, 0x0, 0x0, 0x0);
    var _0x33f996 = (_0x2ab476.getTime() - _0x5579eb) / 86400000 | 0x0;
    _0x2ec55e[_0x2309ff + 0x1c >> 0x2] = _0x33f996;
    if (!_0x538dc1.GMTString) {
      _0x538dc1.GMTString = _0x47fb56("GMT");
    }
    _0x2ec55e[_0x2309ff + 0x28 >> 0x2] = _0x538dc1.GMTString;
    return _0x2309ff;
  }
  function _0x53ba3e() {
    if (_0x53ba3e.called) {
      return;
    }
    _0x53ba3e.called = true;
    var _0x3bde7d = new Date().getFullYear();
    var _0xe395fc = new Date(_0x3bde7d, 0x0, 0x1);
    var _0x36be4f = new Date(_0x3bde7d, 0x6, 0x1);
    var _0x154948 = _0xe395fc.getTimezoneOffset();
    var _0x5974b5 = _0x36be4f.getTimezoneOffset();
    var _0x4a8067 = Math.max(_0x154948, _0x5974b5);
    _0x2ec55e[_0xc308b() >> 0x2] = _0x4a8067 * 0x3c;
    _0x2ec55e[_0x228a46() >> 0x2] = Number(_0x154948 != _0x5974b5);
    function _0x2fe6d3(_0x387698) {
      var _0x807c16 = _0x387698.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      return _0x807c16 ? _0x807c16[0x1] : "GMT";
    }
    var _0x1cd660 = _0x2fe6d3(_0xe395fc);
    var _0x486919 = _0x2fe6d3(_0x36be4f);
    var _0x463bbb = _0x47fb56(_0x1cd660);
    var _0x2397cc = _0x47fb56(_0x486919);
    if (_0x5974b5 < _0x154948) {
      _0x2ec55e[_0x2f40bb() >> 0x2] = _0x463bbb;
      _0x2ec55e[_0x2f40bb() + 0x4 >> 0x2] = _0x2397cc;
    } else {
      _0x2ec55e[_0x2f40bb() >> 0x2] = _0x2397cc;
      _0x2ec55e[_0x2f40bb() + 0x4 >> 0x2] = _0x463bbb;
    }
  }
  var _0x318011 = {
    "splitPath": function (_0x5798db) {
      var _0x38f681 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return _0x38f681.exec(_0x5798db).slice(0x1);
    },
    "normalizeArray": function (_0x52d1a4, _0x3ddc72) {
      var _0xc731ce = 0x0;
      for (var _0x30574a = _0x52d1a4.length - 0x1; _0x30574a >= 0x0; _0x30574a--) {
        var _0x55e857 = _0x52d1a4[_0x30574a];
        if (_0x55e857 === ".") {
          _0x52d1a4.splice(_0x30574a, 0x1);
        } else {
          if (_0x55e857 === "..") {
            _0x52d1a4.splice(_0x30574a, 0x1);
            _0xc731ce++;
          } else if (_0xc731ce) {
            _0x52d1a4.splice(_0x30574a, 0x1);
            _0xc731ce--;
          }
        }
      }
      if (_0x3ddc72) {
        for (; _0xc731ce; _0xc731ce--) {
          _0x52d1a4.unshift("..");
        }
      }
      return _0x52d1a4;
    },
    "normalize": function (_0x2ea20a) {
      var _0x280659 = _0x2ea20a.charAt(0x0) === "/";
      var _0x16cbde = _0x2ea20a.substr(-0x1) === "/";
      _0x2ea20a = _0x318011.normalizeArray(_0x2ea20a.split("/").filter(function (_0x6c696b) {
        return !!_0x6c696b;
      }), !_0x280659).join("/");
      if (!_0x2ea20a && !_0x280659) {
        _0x2ea20a = ".";
      }
      if (_0x2ea20a && _0x16cbde) {
        _0x2ea20a += "/";
      }
      return (_0x280659 ? "/" : '') + _0x2ea20a;
    },
    "dirname": function (_0x186bcb) {
      var _0x57b2db = _0x318011.splitPath(_0x186bcb);
      var _0x31942a = _0x57b2db[0x0];
      var _0x5842a9 = _0x57b2db[0x1];
      if (!_0x31942a && !_0x5842a9) {
        return ".";
      }
      if (_0x5842a9) {
        _0x5842a9 = _0x5842a9.substr(0x0, _0x5842a9.length - 0x1);
      }
      return _0x31942a + _0x5842a9;
    },
    "basename": function (_0x752dba) {
      if (_0x752dba === "/") {
        return "/";
      }
      _0x752dba = _0x318011.normalize(_0x752dba);
      _0x752dba = _0x752dba.replace(/\/$/, '');
      var _0x2e5555 = _0x752dba.lastIndexOf("/");
      if (_0x2e5555 === -0x1) {
        return _0x752dba;
      }
      return _0x752dba.substr(_0x2e5555 + 0x1);
    },
    "extname": function (_0x40550b) {
      return _0x318011.splitPath(_0x40550b)[0x3];
    },
    "join": function () {
      var _0x4f0904 = Array.prototype.slice.call(arguments, 0x0);
      return _0x318011.normalize(_0x4f0904.join("/"));
    },
    "join2": function (_0x21af83, _0x47d8bd) {
      return _0x318011.normalize(_0x21af83 + "/" + _0x47d8bd);
    }
  };
  function _0x4fa514() {
    if (typeof crypto === "object" && typeof crypto.getRandomValues === "function") {
      var _0x361965 = new Uint8Array(0x1);
      return function () {
        crypto.getRandomValues(_0x361965);
        return _0x361965[0x0];
      };
    } else {
      if (_0x1f12a4) {
        try {
          var _0x26dd42 = require("crypto");
          return function () {
            return _0x26dd42.randomBytes(0x1)[0x0];
          };
        } catch (_0x55e8f0) {}
      }
    }
    return function () {
      _0x23489f("randomDevice");
    };
  }
  var _0x1674fd = {
    "resolve": function () {
      var _0x5c232b = '';
      var _0x5b37df = false;
      for (var _0x16bb9e = arguments.length - 0x1; _0x16bb9e >= -0x1 && !_0x5b37df; _0x16bb9e--) {
        var _0x1ef7a9 = _0x16bb9e >= 0x0 ? arguments[_0x16bb9e] : "/";
        if (typeof _0x1ef7a9 !== "string") {
          throw new TypeError("Arguments to path.resolve must be strings");
        } else {
          if (!_0x1ef7a9) {
            return '';
          }
        }
        _0x5c232b = _0x1ef7a9 + "/" + _0x5c232b;
        _0x5b37df = _0x1ef7a9.charAt(0x0) === "/";
      }
      _0x5c232b = _0x318011.normalizeArray(_0x5c232b.split("/").filter(function (_0x39d84a) {
        return !!_0x39d84a;
      }), !_0x5b37df).join("/");
      return (_0x5b37df ? "/" : '') + _0x5c232b || ".";
    },
    "relative": function (_0x311218, _0x22d49a) {
      _0x311218 = _0x1674fd.resolve(_0x311218).substr(0x1);
      _0x22d49a = _0x1674fd.resolve(_0x22d49a).substr(0x1);
      function _0x4750f2(_0x45a9ed) {
        var _0x41c187 = 0x0;
        for (; _0x41c187 < _0x45a9ed.length; _0x41c187++) {
          if (_0x45a9ed[_0x41c187] !== '') {
            break;
          }
        }
        var _0x439586 = _0x45a9ed.length - 0x1;
        for (; _0x439586 >= 0x0; _0x439586--) {
          if (_0x45a9ed[_0x439586] !== '') {
            break;
          }
        }
        if (_0x41c187 > _0x439586) {
          return [];
        }
        return _0x45a9ed.slice(_0x41c187, _0x439586 - _0x41c187 + 0x1);
      }
      var _0x527bb2 = _0x4750f2(_0x311218.split("/"));
      var _0x4536e7 = _0x4750f2(_0x22d49a.split("/"));
      var _0xa6ce26 = Math.min(_0x527bb2.length, _0x4536e7.length);
      var _0x2c4280 = _0xa6ce26;
      for (var _0x27711c = 0x0; _0x27711c < _0xa6ce26; _0x27711c++) {
        if (_0x527bb2[_0x27711c] !== _0x4536e7[_0x27711c]) {
          _0x2c4280 = _0x27711c;
          break;
        }
      }
      var _0x2898ae = [];
      for (var _0x27711c = _0x2c4280; _0x27711c < _0x527bb2.length; _0x27711c++) {
        _0x2898ae.push("..");
      }
      _0x2898ae = _0x2898ae.concat(_0x4536e7.slice(_0x2c4280));
      return _0x2898ae.join("/");
    }
  };
  var _0x30cb67 = {
    "ttys": [],
    "init": function () {},
    "shutdown": function () {},
    "register": function (_0x25bc6b, _0x6e9343) {
      _0x30cb67.ttys[_0x25bc6b] = {
        "input": [],
        "output": [],
        "ops": _0x6e9343
      };
      _0x363740.registerDevice(_0x25bc6b, _0x30cb67.stream_ops);
    },
    "stream_ops": {
      "open": function (_0x261874) {
        var _0x6eec64 = _0x30cb67.ttys[_0x261874.node.rdev];
        if (!_0x6eec64) {
          throw new null(0x2b);
        }
        _0x261874.tty = _0x6eec64;
        _0x261874.seekable = false;
      },
      "close": function (_0x438d9b) {
        _0x438d9b.tty.ops.flush(_0x438d9b.tty);
      },
      "flush": function (_0x1dc2d7) {
        _0x1dc2d7.tty.ops.flush(_0x1dc2d7.tty);
      },
      "read": function (_0x4cf68f, _0xa1862e, _0x3aeeb5, _0x37b059, _0x1f7aa1) {
        if (!_0x4cf68f.tty || !_0x4cf68f.tty.ops.get_char) {
          throw new null(0x3c);
        }
        var _0x171fd4 = 0x0;
        for (var _0x354752 = 0x0; _0x354752 < _0x37b059; _0x354752++) {
          var _0x48c490;
          try {
            _0x48c490 = _0x4cf68f.tty.ops.get_char(_0x4cf68f.tty);
          } catch (_0x5dd6d1) {
            throw new null(0x1d);
          }
          if (_0x48c490 === undefined && _0x171fd4 === 0x0) {
            throw new null(0x6);
          }
          if (_0x48c490 === null || _0x48c490 === undefined) {
            break;
          }
          _0x171fd4++;
          _0xa1862e[_0x3aeeb5 + _0x354752] = _0x48c490;
        }
        if (_0x171fd4) {
          _0x4cf68f.node.timestamp = Date.now();
        }
        return _0x171fd4;
      },
      "write": function (_0x348cc5, _0x36cea9, _0x2d05a8, _0x9051a0, _0x113e72) {
        if (!_0x348cc5.tty || !_0x348cc5.tty.ops.put_char) {
          throw new null(0x3c);
        }
        try {
          for (var _0x15d499 = 0x0; _0x15d499 < _0x9051a0; _0x15d499++) {
            _0x348cc5.tty.ops.put_char(_0x348cc5.tty, _0x36cea9[_0x2d05a8 + _0x15d499]);
          }
        } catch (_0x767381) {
          throw new null(0x1d);
        }
        if (_0x9051a0) {
          _0x348cc5.node.timestamp = Date.now();
        }
        return _0x15d499;
      }
    },
    "default_tty_ops": {
      "get_char": function (_0x5cd2c1) {
        if (!_0x5cd2c1.input.length) {
          var _0x144202 = null;
          if (_0x1f12a4) {
            var _0x3f70d3 = Buffer.alloc ? Buffer.alloc(0x100) : new Buffer(0x100);
            var _0x2574bd = 0x0;
            try {
              _0x2574bd = _0xcd2e77.readSync(process.stdin.fd, _0x3f70d3, 0x0, 0x100, null);
            } catch (_0x150e7) {
              if (_0x150e7.toString().includes("EOF")) {
                _0x2574bd = 0x0;
              } else {
                throw _0x150e7;
              }
            }
            if (_0x2574bd > 0x0) {
              _0x144202 = _0x3f70d3.slice(0x0, _0x2574bd).toString("utf-8");
            } else {
              _0x144202 = null;
            }
          } else {
            if (typeof window != "undefined" && typeof window.prompt == "function") {
              _0x144202 = window.prompt("Input: ");
              if (_0x144202 !== null) {
                _0x144202 += "\n";
              }
            } else if (typeof readline == "function") {
              _0x144202 = readline();
              if (_0x144202 !== null) {
                _0x144202 += "\n";
              }
            }
          }
          if (!_0x144202) {
            return null;
          }
          _0x5cd2c1.input = _0x279f64(_0x144202, true);
        }
        return _0x5cd2c1.input.shift();
      },
      "put_char": function (_0x4f6eb6, _0x5644a9) {
        if (_0x5644a9 === null || _0x5644a9 === 0xa) {
          _0x20a4ae(_0x30b35d(_0x4f6eb6.output, 0x0));
          _0x4f6eb6.output = [];
        } else {
          if (_0x5644a9 != 0x0) {
            _0x4f6eb6.output.push(_0x5644a9);
          }
        }
      },
      "flush": function (_0x16d017) {
        if (_0x16d017.output && _0x16d017.output.length > 0x0) {
          _0x20a4ae(_0x30b35d(_0x16d017.output, 0x0));
          _0x16d017.output = [];
        }
      }
    },
    "default_tty1_ops": {
      "put_char": function (_0x31bad2, _0x4f41b2) {
        if (_0x4f41b2 === null || _0x4f41b2 === 0xa) {
          _0x4f2811(_0x30b35d(_0x31bad2.output, 0x0));
          _0x31bad2.output = [];
        } else {
          if (_0x4f41b2 != 0x0) {
            _0x31bad2.output.push(_0x4f41b2);
          }
        }
      },
      "flush": function (_0x2f47ce) {
        if (_0x2f47ce.output && _0x2f47ce.output.length > 0x0) {
          _0x4f2811(_0x30b35d(_0x2f47ce.output, 0x0));
          _0x2f47ce.output = [];
        }
      }
    }
  };
  function _0x2080ca(_0x250fb4) {
    var _0x8f9ab4 = _0x22b3fe(_0x250fb4, 0x10000);
    var _0x2e5c12 = _0x54d388(_0x8f9ab4);
    while (_0x250fb4 < _0x8f9ab4) {
      _0x5dcf40[_0x2e5c12 + _0x250fb4++] = 0x0;
    }
    return _0x2e5c12;
  }
  var _0x4a6edd = {
    "ops_table": null,
    "mount": function (_0x25d7e9) {
      return _0x4a6edd.createNode(null, "/", 16895, 0x0);
    },
    "createNode": function (_0x400f04, _0x529e57, _0xb60b21, _0x27567c) {
      if ((_0xb60b21 & 0xf000) === 0x6000 || (_0xb60b21 & 0xf000) === 0x1000) {
        throw new null(0x3f);
      }
      _0x4a6edd.ops_table = {
        "dir": {
          "node": {
            "getattr": _0x4a6edd.node_ops.getattr,
            "setattr": _0x4a6edd.node_ops.setattr,
            "lookup": _0x4a6edd.node_ops.lookup,
            "mknod": _0x4a6edd.node_ops.mknod,
            "rename": _0x4a6edd.node_ops.rename,
            "unlink": _0x4a6edd.node_ops.unlink,
            "rmdir": _0x4a6edd.node_ops.rmdir,
            "readdir": _0x4a6edd.node_ops.readdir,
            "symlink": _0x4a6edd.node_ops.symlink
          },
          "stream": {
            "llseek": _0x4a6edd.stream_ops.llseek
          }
        },
        "file": {
          "node": {
            "getattr": _0x4a6edd.node_ops.getattr,
            "setattr": _0x4a6edd.node_ops.setattr
          },
          "stream": {
            "llseek": _0x4a6edd.stream_ops.llseek,
            "read": _0x4a6edd.stream_ops.read,
            "write": _0x4a6edd.stream_ops.write,
            "allocate": _0x4a6edd.stream_ops.allocate,
            "mmap": _0x4a6edd.stream_ops.mmap,
            "msync": _0x4a6edd.stream_ops.msync
          }
        },
        "link": {
          "node": {
            "getattr": _0x4a6edd.node_ops.getattr,
            "setattr": _0x4a6edd.node_ops.setattr,
            "readlink": _0x4a6edd.node_ops.readlink
          },
          "stream": {}
        },
        "chrdev": {
          "node": {
            "getattr": _0x4a6edd.node_ops.getattr,
            "setattr": _0x4a6edd.node_ops.setattr
          },
          "stream": _0x363740.chrdev_stream_ops
        }
      };
      var _0x3b9754 = _0x363740.createNode(_0x400f04, _0x529e57, _0xb60b21, _0x27567c);
      if ((_0x3b9754.mode & 0xf000) === 0x4000) {
        _0x3b9754.node_ops = null.dir.node;
        _0x3b9754.stream_ops = null.dir.stream;
        _0x3b9754.contents = {};
      } else {
        if ((_0x3b9754.mode & 0xf000) === 0x8000) {
          _0x3b9754.node_ops = null.file.node;
          _0x3b9754.stream_ops = null.file.stream;
          _0x3b9754.usedBytes = 0x0;
          _0x3b9754.contents = null;
        } else {
          if ((_0x3b9754.mode & 0xf000) === 0xa000) {
            _0x3b9754.node_ops = null.link.node;
            _0x3b9754.stream_ops = null.link.stream;
          } else if ((_0x3b9754.mode & 0xf000) === 0x2000) {
            _0x3b9754.node_ops = null.chrdev.node;
            _0x3b9754.stream_ops = null.chrdev.stream;
          }
        }
      }
      _0x3b9754.timestamp = Date.now();
      if (_0x400f04) {
        _0x400f04.contents[_0x529e57] = _0x3b9754;
        _0x400f04.timestamp = _0x3b9754.timestamp;
      }
      return _0x3b9754;
    },
    "getFileDataAsTypedArray": function (_0x1af083) {
      if (!_0x1af083.contents) {
        return new Uint8Array(0x0);
      }
      if (_0x1af083.contents.subarray) {
        return _0x1af083.contents.subarray(0x0, _0x1af083.usedBytes);
      }
      return new Uint8Array(_0x1af083.contents);
    },
    "expandFileStorage": function (_0x8bca3e, _0x5c1ff1) {
      var _0x37554d = _0x8bca3e.contents ? _0x8bca3e.contents.length : 0x0;
      if (_0x37554d >= _0x5c1ff1) {
        return;
      }
      _0x5c1ff1 = Math.max(_0x5c1ff1, _0x37554d * (_0x37554d < 1048576 ? 0x2 : 1.125) >>> 0x0);
      if (_0x37554d != 0x0) {
        _0x5c1ff1 = Math.max(_0x5c1ff1, 0x100);
      }
      var _0x4ea911 = _0x8bca3e.contents;
      _0x8bca3e.contents = new Uint8Array(_0x5c1ff1);
      if (_0x8bca3e.usedBytes > 0x0) {
        _0x8bca3e.contents.set(_0x4ea911.subarray(0x0, _0x8bca3e.usedBytes), 0x0);
      }
    },
    "resizeFileStorage": function (_0x2edac4, _0x6aef69) {
      if (_0x2edac4.usedBytes == _0x6aef69) {
        return;
      }
      if (_0x6aef69 == 0x0) {
        _0x2edac4.contents = null;
        _0x2edac4.usedBytes = 0x0;
      } else {
        var _0x58f2e7 = _0x2edac4.contents;
        _0x2edac4.contents = new Uint8Array(_0x6aef69);
        if (_0x58f2e7) {
          _0x2edac4.contents.set(_0x58f2e7.subarray(0x0, Math.min(_0x6aef69, _0x2edac4.usedBytes)));
        }
        _0x2edac4.usedBytes = _0x6aef69;
      }
    },
    "node_ops": {
      "getattr": function (_0x48b3dc) {
        var _0x11d0e3 = {
          dev: (_0x48b3dc.mode & 0xf000) === 0x2000 ? _0x48b3dc.id : 0x1,
          ino: _0x48b3dc.id,
          mode: _0x48b3dc.mode,
          nlink: 0x1,
          uid: 0x0,
          gid: 0x0,
          rdev: _0x48b3dc.rdev
        };
        if ((_0x48b3dc.mode & 0xf000) === 0x4000) {
          _0x11d0e3.size = 0x1000;
        } else {
          if ((_0x48b3dc.mode & 0xf000) === 0x8000) {
            _0x11d0e3.size = _0x48b3dc.usedBytes;
          } else if ((_0x48b3dc.mode & 0xf000) === 0xa000) {
            _0x11d0e3.size = _0x48b3dc.link.length;
          } else {
            _0x11d0e3.size = 0x0;
          }
        }
        _0x11d0e3.atime = new Date(_0x48b3dc.timestamp);
        _0x11d0e3.mtime = new Date(_0x48b3dc.timestamp);
        _0x11d0e3.ctime = new Date(_0x48b3dc.timestamp);
        _0x11d0e3.blksize = 0x1000;
        _0x11d0e3.blocks = Math.ceil(_0x11d0e3.size / _0x11d0e3.blksize);
        return _0x11d0e3;
      },
      "setattr": function (_0x26f662, _0x1a3f00) {
        if (_0x1a3f00.mode !== undefined) {
          _0x26f662.mode = _0x1a3f00.mode;
        }
        if (_0x1a3f00.timestamp !== undefined) {
          _0x26f662.timestamp = _0x1a3f00.timestamp;
        }
        if (_0x1a3f00.size !== undefined) {
          _0x4a6edd.resizeFileStorage(_0x26f662, _0x1a3f00.size);
        }
      },
      "lookup": function (_0x4e754d, _0x1301d7) {
        throw _0x363740.genericErrors[0x2c];
      },
      "mknod": function (_0x33f0a3, _0x4bf15a, _0x9be548, _0x56cd8d) {
        return _0x4a6edd.createNode(_0x33f0a3, _0x4bf15a, _0x9be548, _0x56cd8d);
      },
      "rename": function (_0x3ec2c4, _0x4cb94c, _0x379306) {
        if ((_0x3ec2c4.mode & 0xf000) === 0x4000) {
          var _0x282e01;
          try {
            _0x282e01 = _0x363740.lookupNode(_0x4cb94c, _0x379306);
          } catch (_0x3f5b8b) {}
          if (_0x282e01) {
            for (var _0x762e8b in _0x282e01.contents) {
              throw new null(0x37);
            }
          }
        }
        delete _0x3ec2c4.parent.contents[_0x3ec2c4.name];
        _0x3ec2c4.parent.timestamp = Date.now();
        _0x3ec2c4.name = _0x379306;
        _0x4cb94c.contents[_0x379306] = _0x3ec2c4;
        _0x4cb94c.timestamp = _0x3ec2c4.parent.timestamp;
        _0x3ec2c4.parent = _0x4cb94c;
      },
      "unlink": function (_0x2cefef, _0x3eff09) {
        delete _0x2cefef.contents[_0x3eff09];
        _0x2cefef.timestamp = Date.now();
      },
      "rmdir": function (_0x481d9b, _0x487c23) {
        var _0x2d95d8 = _0x363740.lookupNode(_0x481d9b, _0x487c23);
        for (var _0x4375bf in _0x2d95d8.contents) {
          throw new null(0x37);
        }
        delete _0x481d9b.contents[_0x487c23];
        _0x481d9b.timestamp = Date.now();
      },
      "readdir": function (_0x15db2a) {
        var _0x48bf17 = [".", ".."];
        for (var _0x1f59fc in _0x15db2a.contents) {
          if (!_0x15db2a.contents.hasOwnProperty(_0x1f59fc)) {
            continue;
          }
          _0x48bf17.push(_0x1f59fc);
        }
        return _0x48bf17;
      },
      "symlink": function (_0x4765f0, _0x4c05d1, _0x4739a6) {
        var _0x3287b8 = _0x4a6edd.createNode(_0x4765f0, _0x4c05d1, 41471, 0x0);
        _0x3287b8.link = _0x4739a6;
        return _0x3287b8;
      },
      "readlink": function (_0x31b8d4) {
        if (!((_0x31b8d4.mode & 0xf000) === 0xa000)) {
          throw new null(0x1c);
        }
        return _0x31b8d4.link;
      }
    },
    "stream_ops": {
      "read": function (_0x1cdfcc, _0x35a52f, _0x501b3f, _0x17af09, _0x4129af) {
        var _0x557625 = _0x1cdfcc.node.contents;
        if (_0x4129af >= _0x1cdfcc.node.usedBytes) {
          return 0x0;
        }
        var _0xdcbc4c = Math.min(_0x1cdfcc.node.usedBytes - _0x4129af, _0x17af09);
        if (_0xdcbc4c > 0x8 && _0x557625.subarray) {
          _0x35a52f.set(_0x557625.subarray(_0x4129af, _0x4129af + _0xdcbc4c), _0x501b3f);
        } else {
          for (var _0x3890c5 = 0x0; _0x3890c5 < _0xdcbc4c; _0x3890c5++) {
            _0x35a52f[_0x501b3f + _0x3890c5] = _0x557625[_0x4129af + _0x3890c5];
          }
        }
        return _0xdcbc4c;
      },
      "write": function (_0x50d36b, _0x3ccf97, _0x3df241, _0x15d377, _0xe44b15, _0x6dfefb) {
        if (_0x3ccf97.buffer === _0x5dcf40.buffer) {
          _0x6dfefb = false;
        }
        if (!_0x15d377) {
          return 0x0;
        }
        var _0x1320cb = _0x50d36b.node;
        _0x1320cb.timestamp = Date.now();
        if (_0x3ccf97.subarray && (!_0x1320cb.contents || _0x1320cb.contents.subarray)) {
          if (_0x6dfefb) {
            _0x1320cb.contents = _0x3ccf97.subarray(_0x3df241, _0x3df241 + _0x15d377);
            _0x1320cb.usedBytes = _0x15d377;
            return _0x15d377;
          } else {
            if (_0x1320cb.usedBytes === 0x0 && _0xe44b15 === 0x0) {
              _0x1320cb.contents = _0x3ccf97.slice(_0x3df241, _0x3df241 + _0x15d377);
              _0x1320cb.usedBytes = _0x15d377;
              return _0x15d377;
            } else {
              if (_0xe44b15 + _0x15d377 <= _0x1320cb.usedBytes) {
                _0x1320cb.contents.set(_0x3ccf97.subarray(_0x3df241, _0x3df241 + _0x15d377), _0xe44b15);
                return _0x15d377;
              }
            }
          }
        }
        _0x4a6edd.expandFileStorage(_0x1320cb, _0xe44b15 + _0x15d377);
        if (_0x1320cb.contents.subarray && _0x3ccf97.subarray) {
          _0x1320cb.contents.set(_0x3ccf97.subarray(_0x3df241, _0x3df241 + _0x15d377), _0xe44b15);
        } else {
          for (var _0x408b44 = 0x0; _0x408b44 < _0x15d377; _0x408b44++) {
            _0x1320cb.contents[_0xe44b15 + _0x408b44] = _0x3ccf97[_0x3df241 + _0x408b44];
          }
        }
        _0x1320cb.usedBytes = Math.max(_0x1320cb.usedBytes, _0xe44b15 + _0x15d377);
        return _0x15d377;
      },
      "llseek": function (_0x1d662e, _0x146f4f, _0x2b808e) {
        var _0x46bb3a = _0x146f4f;
        if (_0x2b808e === 0x1) {
          _0x46bb3a += _0x1d662e.position;
        } else if (_0x2b808e === 0x2) {
          if ((_0x1d662e.node.mode & 0xf000) === 0x8000) {
            _0x46bb3a += _0x1d662e.node.usedBytes;
          }
        }
        if (_0x46bb3a < 0x0) {
          throw new null(0x1c);
        }
        return _0x46bb3a;
      },
      "allocate": function (_0x2ecdb1, _0x3e9593, _0x1077c0) {
        _0x4a6edd.expandFileStorage(_0x2ecdb1.node, _0x3e9593 + _0x1077c0);
        _0x2ecdb1.node.usedBytes = Math.max(_0x2ecdb1.node.usedBytes, _0x3e9593 + _0x1077c0);
      },
      "mmap": function (_0x9fad6, _0x234fea, _0x3ff9dd, _0x169d31, _0x3601a7, _0x8579a0) {
        if (_0x234fea !== 0x0) {
          throw new null(0x1c);
        }
        if (!((_0x9fad6.node.mode & 0xf000) === 0x8000)) {
          throw new null(0x2b);
        }
        var _0x64db45;
        var _0x26b1e1;
        var _0x21dd45 = _0x9fad6.node.contents;
        if (!(_0x8579a0 & 0x2) && _0x21dd45.buffer === _0x47b583) {
          _0x26b1e1 = false;
          _0x64db45 = _0x21dd45.byteOffset;
        } else {
          if (_0x169d31 > 0x0 || _0x169d31 + _0x3ff9dd < _0x21dd45.length) {
            if (_0x21dd45.subarray) {
              _0x21dd45 = _0x21dd45.subarray(_0x169d31, _0x169d31 + _0x3ff9dd);
            } else {
              _0x21dd45 = Array.prototype.slice.call(_0x21dd45, _0x169d31, _0x169d31 + _0x3ff9dd);
            }
          }
          _0x26b1e1 = true;
          _0x64db45 = _0x2080ca(_0x3ff9dd);
          if (!_0x64db45) {
            throw new null(0x30);
          }
          _0x5dcf40.set(_0x21dd45, _0x64db45);
        }
        return {
          "ptr": _0x64db45,
          "allocated": _0x26b1e1
        };
      },
      "msync": function (_0x10fd93, _0x42d56b, _0x141865, _0xdaea2e, _0x14868a) {
        if (!((_0x10fd93.node.mode & 0xf000) === 0x8000)) {
          throw new null(0x2b);
        }
        if (_0x14868a & 0x2) {
          return 0x0;
        }
        return 0x0;
      }
    }
  };
  var _0x4b5758 = {
    "dbs": {},
    "indexedDB": function () {
      if (typeof indexedDB !== "undefined") {
        return indexedDB;
      }
      var _0x54b898 = null;
      if (typeof window === "object") {
        _0x54b898 = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      }
      _0x47fd96(_0x54b898, "IDBFS used, but indexedDB not supported");
      return _0x54b898;
    },
    "DB_VERSION": 0x15,
    "DB_STORE_NAME": "FILE_DATA",
    "mount": function (_0x246e38) {
      return _0x4a6edd.mount.apply(null, arguments);
    },
    "syncfs": function (_0x42ce81, _0x2379ad, _0x2513a7) {
      _0x4b5758.getLocalSet(_0x42ce81, function (_0x1e77dc, _0x3f4036) {
        if (_0x1e77dc) {
          return _0x2513a7(_0x1e77dc);
        }
        _0x4b5758.getRemoteSet(_0x42ce81, function (_0x3aa62f, _0x52b04f) {
          if (_0x3aa62f) {
            return _0x2513a7(_0x3aa62f);
          }
          var _0x49ae88 = _0x2379ad ? _0x52b04f : _0x3f4036;
          var _0x44d6b0 = _0x2379ad ? _0x3f4036 : _0x52b04f;
          _0x4b5758.reconcile(_0x49ae88, _0x44d6b0, _0x2513a7);
        });
      });
    },
    "getDB": function (_0x322581, _0x29d27a) {
      var _0xe9f7c4 = _0x4b5758.dbs[_0x322581];
      if (_0xe9f7c4) {
        return _0x29d27a(null, _0xe9f7c4);
      }
      var _0x538769;
      try {
        _0x538769 = _0x4b5758.indexedDB().open(_0x322581, 0x15);
      } catch (_0x365b6c) {
        return _0x29d27a(_0x365b6c);
      }
      if (!_0x538769) {
        return _0x29d27a("Unable to connect to IndexedDB");
      }
      _0x538769.onupgradeneeded = function (_0x2a6d48) {
        var _0x3b9afb = _0x2a6d48.target.result;
        var _0x392dce = _0x2a6d48.target.transaction;
        var _0x271db5;
        if (_0x3b9afb.objectStoreNames.contains("FILE_DATA")) {
          _0x271db5 = _0x392dce.objectStore("FILE_DATA");
        } else {
          _0x271db5 = _0x3b9afb.createObjectStore("FILE_DATA");
        }
        if (!_0x271db5.indexNames.contains("timestamp")) {
          _0x271db5.createIndex("timestamp", "timestamp", {
            "unique": false
          });
        }
      };
      _0x538769.onsuccess = function () {
        _0xe9f7c4 = _0x538769.result;
        _0x4b5758.dbs[_0x322581] = _0xe9f7c4;
        _0x29d27a(null, _0xe9f7c4);
      };
      _0x538769.onerror = function (_0x45d30c) {
        _0x29d27a(this.error);
        _0x45d30c.preventDefault();
      };
    },
    "getLocalSet": function (_0xb889a, _0x2190d3) {
      var _0x18c7de = {};
      function _0x18fe2f(_0x1989b4) {
        return _0x1989b4 !== "." && _0x1989b4 !== "..";
      }
      function _0x26abc6(_0x157e67) {
        return function (_0x409a32) {
          return _0x318011.normalize(_0x157e67 + "/" + _0x409a32);
        };
      }
      var _0x54bd4f = _0x363740.readdir(_0xb889a.mountpoint).filter(_0x18fe2f).map(_0x26abc6(_0xb889a.mountpoint));
      while (_0x54bd4f.length) {
        var _0x3bfff2 = _0x54bd4f.pop();
        var _0x1deb93;
        try {
          _0x1deb93 = _0x363740.stat(_0x3bfff2);
        } catch (_0x58ee29) {
          return _0x2190d3(_0x58ee29);
        }
        if ((_0x1deb93.mode & 0xf000) === 0x4000) {
          _0x54bd4f.push.apply(_0x54bd4f, _0x363740.readdir(_0x3bfff2).filter(_0x18fe2f).map(_0x26abc6(_0x3bfff2)));
        }
        _0x18c7de[_0x3bfff2] = {
          "timestamp": _0x1deb93.mtime
        };
      }
      return _0x2190d3(null, {
        "type": "local",
        "entries": _0x18c7de
      });
    },
    "getRemoteSet": function (_0x538573, _0x113ec2) {
      var _0x40a512 = {};
      _0x4b5758.getDB(_0x538573.mountpoint, function (_0x1aecf6, _0x42fffe) {
        if (_0x1aecf6) {
          return _0x113ec2(_0x1aecf6);
        }
        try {
          var _0x20ead2 = _0x42fffe.transaction(["FILE_DATA"], "readonly");
          _0x20ead2.onerror = function (_0x43cc90) {
            _0x113ec2(this.error);
            _0x43cc90.preventDefault();
          };
          var _0x5a8bd7 = _0x20ead2.objectStore("FILE_DATA");
          var _0xd4adb6 = _0x5a8bd7.index("timestamp");
          _0xd4adb6.openKeyCursor().onsuccess = function (_0x4514df) {
            var _0x8ee4e3 = _0x4514df.target.result;
            if (!_0x8ee4e3) {
              return _0x113ec2(null, {
                "type": "remote",
                "db": _0x42fffe,
                "entries": _0x40a512
              });
            }
            _0x40a512[_0x8ee4e3.primaryKey] = {
              "timestamp": _0x8ee4e3.key
            };
            _0x8ee4e3["continue"]();
          };
        } catch (_0x4f5136) {
          return _0x113ec2(_0x4f5136);
        }
      });
    },
    "loadLocalEntry": function (_0x182f25, _0x17ed82) {
      var _0x599ca8;
      var _0x55d82c;
      try {
        var _0x5137fe = _0x363740.lookupPath(_0x182f25);
        _0x55d82c = _0x5137fe.node;
        _0x599ca8 = _0x363740.stat(_0x182f25);
      } catch (_0xdac5cc) {
        return _0x17ed82(_0xdac5cc);
      }
      if ((_0x599ca8.mode & 0xf000) === 0x4000) {
        return _0x17ed82(null, {
          "timestamp": _0x599ca8.mtime,
          "mode": _0x599ca8.mode
        });
      } else {
        return (_0x599ca8.mode & 0xf000) === 0x8000 ? (_0x55d82c.contents = _0x4a6edd.getFileDataAsTypedArray(_0x55d82c), _0x17ed82(null, {
          "timestamp": _0x599ca8.mtime,
          "mode": _0x599ca8.mode,
          "contents": _0x55d82c.contents
        })) : _0x17ed82(new Error("node type not supported"));
      }
    },
    "storeLocalEntry": function (_0x2e9003, _0x394667, _0x11c93a) {
      try {
        if ((_0x394667.mode & 0xf000) === 0x4000) {
          _0x363740.mkdirTree(_0x2e9003, _0x394667.mode);
        } else {
          if ((_0x394667.mode & 0xf000) === 0x8000) {
            _0x363740.writeFile(_0x2e9003, _0x394667.contents, {
              "canOwn": true
            });
          } else {
            return _0x11c93a(new Error("node type not supported"));
          }
        }
        _0x363740.chmod(_0x2e9003, _0x394667.mode);
        _0x363740.utime(_0x2e9003, _0x394667.timestamp, _0x394667.timestamp);
      } catch (_0x461f5f) {
        return _0x11c93a(_0x461f5f);
      }
      _0x11c93a(null);
    },
    "removeLocalEntry": function (_0x897618, _0x2ac1a3) {
      try {
        var _0x24bf98 = _0x363740.stat(_0x897618);
        if ((_0x24bf98.mode & 0xf000) === 0x4000) {
          _0x363740.rmdir(_0x897618);
        } else if ((_0x24bf98.mode & 0xf000) === 0x8000) {
          _0x363740.unlink(_0x897618);
        }
      } catch (_0x8e02a8) {
        return _0x2ac1a3(_0x8e02a8);
      }
      _0x2ac1a3(null);
    },
    "loadRemoteEntry": function (_0x1fb76c, _0x5008b5, _0x318515) {
      var _0x4fdb59 = _0x1fb76c.get(_0x5008b5);
      _0x4fdb59.onsuccess = function (_0x55c468) {
        _0x318515(null, _0x55c468.target.result);
      };
      _0x4fdb59.onerror = function (_0x215ec3) {
        _0x318515(this.error);
        _0x215ec3.preventDefault();
      };
    },
    "storeRemoteEntry": function (_0x228adb, _0x4e762f, _0x130805, _0x5d0c75) {
      var _0x5c05bb = _0x228adb.put(_0x130805, _0x4e762f);
      _0x5c05bb.onsuccess = function () {
        _0x5d0c75(null);
      };
      _0x5c05bb.onerror = function (_0x257ed5) {
        _0x5d0c75(this.error);
        _0x257ed5.preventDefault();
      };
    },
    "removeRemoteEntry": function (_0x538e61, _0x2bafa5, _0x3aeb2b) {
      var _0x114875 = _0x538e61["delete"](_0x2bafa5);
      _0x114875.onsuccess = function () {
        _0x3aeb2b(null);
      };
      _0x114875.onerror = function (_0xd8c3f0) {
        _0x3aeb2b(this.error);
        _0xd8c3f0.preventDefault();
      };
    },
    "reconcile": function (_0x7b677, _0x61839, _0x50096f) {
      var _0x39b627 = 0x0;
      var _0x2cd7d8 = [];
      Object.keys(_0x7b677.entries).forEach(function (_0x4f5a4a) {
        var _0x3eefd4 = _0x7b677.entries[_0x4f5a4a];
        var _0x53943f = _0x61839.entries[_0x4f5a4a];
        if (!_0x53943f || _0x3eefd4.timestamp.getTime() != _0x53943f.timestamp.getTime()) {
          _0x2cd7d8.push(_0x4f5a4a);
          _0x39b627++;
        }
      });
      var _0x18e21b = [];
      Object.keys(_0x61839.entries).forEach(function (_0x25df2f) {
        if (!_0x7b677.entries[_0x25df2f]) {
          _0x18e21b.push(_0x25df2f);
          _0x39b627++;
        }
      });
      if (!_0x39b627) {
        return _0x50096f(null);
      }
      var _0x1e8d46 = false;
      var _0x1315a7 = _0x7b677.type === "remote" ? _0x7b677.db : _0x61839.db;
      var _0x54ab34 = _0x1315a7.transaction(["FILE_DATA"], "readwrite");
      var _0x3376fe = _0x54ab34.objectStore("FILE_DATA");
      function _0x4b114b(_0x3be35e) {
        if (_0x3be35e && !_0x1e8d46) {
          _0x1e8d46 = true;
          return _0x50096f(_0x3be35e);
        }
      }
      _0x54ab34.onerror = function (_0x57e14c) {
        _0x4b114b(this.error);
        _0x57e14c.preventDefault();
      };
      _0x54ab34.oncomplete = function (_0x427b21) {
        if (!_0x1e8d46) {
          _0x50096f(null);
        }
      };
      _0x2cd7d8.sort().forEach(function (_0x486fef) {
        if (_0x61839.type === "local") {
          _0x4b5758.loadRemoteEntry(_0x3376fe, _0x486fef, function (_0x5b2f12, _0x226e4f) {
            if (_0x5b2f12) {
              return _0x4b114b(_0x5b2f12);
            }
            _0x4b5758.storeLocalEntry(_0x486fef, _0x226e4f, _0x4b114b);
          });
        } else {
          _0x4b5758.loadLocalEntry(_0x486fef, function (_0x47783b, _0x1c448b) {
            if (_0x47783b) {
              return _0x4b114b(_0x47783b);
            }
            _0x4b5758.storeRemoteEntry(_0x3376fe, _0x486fef, _0x1c448b, _0x4b114b);
          });
        }
      });
      _0x18e21b.sort().reverse().forEach(function (_0x44ca6c) {
        if (_0x61839.type === "local") {
          _0x4b5758.removeLocalEntry(_0x44ca6c, _0x4b114b);
        } else {
          _0x4b5758.removeRemoteEntry(_0x3376fe, _0x44ca6c, _0x4b114b);
        }
      });
    }
  };
  var _0x363740 = {
    "root": null,
    "mounts": [],
    "devices": {},
    "streams": [],
    "nextInode": 0x1,
    "nameTable": null,
    "currentPath": "/",
    "initialized": false,
    "ignorePermissions": true,
    "trackingDelegate": {},
    "tracking": {
      "openFlags": {
        "READ": 0x1,
        "WRITE": 0x2
      }
    },
    "ErrnoError": null,
    "genericErrors": {},
    "filesystems": null,
    "syncFSRequests": 0x0,
    "lookupPath": function (_0x609c0a, _0x461a43) {
      _0x609c0a = _0x1674fd.resolve("/", _0x609c0a);
      _0x461a43 = _0x461a43 || {};
      if (!_0x609c0a) {
        return {
          "path": '',
          "node": null
        };
      }
      var _0x529551 = {
        "follow_mount": true,
        "recurse_count": 0x0
      };
      for (var _0x48950d in _0x529551) {
        if (_0x461a43[_0x48950d] === undefined) {
          _0x461a43[_0x48950d] = _0x529551[_0x48950d];
        }
      }
      if (_0x461a43.recurse_count > 0x8) {
        throw new null(0x20);
      }
      var _0x42c1cc = _0x318011.normalizeArray(_0x609c0a.split("/").filter(function (_0x25ce37) {
        return !!_0x25ce37;
      }), false);
      var _0x270cf5 = null;
      var _0x266cd1 = "/";
      for (var _0x278fa1 = 0x0; _0x278fa1 < _0x42c1cc.length; _0x278fa1++) {
        var _0x5a1078 = _0x278fa1 === _0x42c1cc.length - 0x1;
        if (_0x5a1078 && _0x461a43.parent) {
          break;
        }
        _0x270cf5 = _0x363740.lookupNode(_0x270cf5, _0x42c1cc[_0x278fa1]);
        _0x266cd1 = _0x318011.normalize(_0x266cd1 + "/" + _0x42c1cc[_0x278fa1]);
        if (!!_0x270cf5.mounted) {
          if (!_0x5a1078 || _0x5a1078 && _0x461a43.follow_mount) {
            _0x270cf5 = _0x270cf5.mounted.root;
          }
        }
        if (!_0x5a1078 || _0x461a43.follow) {
          var _0x5b4229 = 0x0;
          while ((_0x270cf5.mode & 0xf000) === 0xa000) {
            var _0x425e48 = _0x363740.readlink(_0x266cd1);
            _0x266cd1 = _0x1674fd.resolve(_0x318011.dirname(_0x266cd1), _0x425e48);
            var _0x4458ae = _0x363740.lookupPath(_0x266cd1, {
              "recurse_count": _0x461a43.recurse_count
            });
            _0x270cf5 = _0x4458ae.node;
            if (_0x5b4229++ > 0x28) {
              throw new null(0x20);
            }
          }
        }
      }
      return {
        "path": _0x266cd1,
        "node": _0x270cf5
      };
    },
    "getPath": function (_0x8eaa7a) {
      var _0x5be95c;
      while (true) {
        if (_0x8eaa7a === _0x8eaa7a.parent) {
          var _0x232c82 = _0x8eaa7a.mount.mountpoint;
          if (!_0x5be95c) {
            return _0x232c82;
          }
          return _0x232c82[_0x232c82.length - 0x1] !== "/" ? _0x232c82 + "/" + _0x5be95c : _0x232c82 + _0x5be95c;
        }
        _0x5be95c = _0x5be95c ? _0x8eaa7a.name + "/" + _0x5be95c : _0x8eaa7a.name;
        _0x8eaa7a = _0x8eaa7a.parent;
      }
    },
    "hashName": function (_0x54f954, _0xa71005) {
      var _0x470da3 = 0x0;
      for (var _0x240685 = 0x0; _0x240685 < _0xa71005.length; _0x240685++) {
        _0x470da3 = (_0x470da3 << 0x5) - _0x470da3 + _0xa71005.charCodeAt(_0x240685) | 0x0;
      }
      return (_0x54f954 + _0x470da3 >>> 0x0) % null.length;
    },
    "hashAddNode": function (_0x174ccb) {
      var _0x2d7585 = _0x363740.hashName(_0x174ccb.parent.id, _0x174ccb.name);
      _0x174ccb.name_next = null[_0x2d7585];
      null[_0x2d7585] = _0x174ccb;
    },
    "hashRemoveNode": function (_0x8c5525) {
      var _0x29a03a = _0x363740.hashName(_0x8c5525.parent.id, _0x8c5525.name);
      if (null[_0x29a03a] === _0x8c5525) {
        null[_0x29a03a] = _0x8c5525.name_next;
      } else {
        var _0x3af0a = null[_0x29a03a];
        while (_0x3af0a) {
          if (_0x3af0a.name_next === _0x8c5525) {
            _0x3af0a.name_next = _0x8c5525.name_next;
            break;
          }
          _0x3af0a = _0x3af0a.name_next;
        }
      }
    },
    "lookupNode": function (_0x327e4f, _0x5f2d5d) {
      var _0x30bfa5 = _0x363740.mayLookup(_0x327e4f);
      if (_0x30bfa5) {
        throw new null(_0x30bfa5, _0x327e4f);
      }
      var _0x2dee4f = _0x363740.hashName(_0x327e4f.id, _0x5f2d5d);
      for (var _0x38a853 = null[_0x2dee4f]; _0x38a853; _0x38a853 = _0x38a853.name_next) {
        var _0x3b868e = _0x38a853.name;
        if (_0x38a853.parent.id === _0x327e4f.id && _0x3b868e === _0x5f2d5d) {
          return _0x38a853;
        }
      }
      return _0x327e4f.node_ops.lookup(_0x327e4f, _0x5f2d5d);
    },
    "createNode": function (_0x25686f, _0x11f69e, _0x2e17e0, _0x4d2297) {
      var _0x2221f1 = new _0x363740.FSNode(_0x25686f, _0x11f69e, _0x2e17e0, _0x4d2297);
      _0x363740.hashAddNode(_0x2221f1);
      return _0x2221f1;
    },
    "destroyNode": function (_0x2b8dfb) {
      _0x363740.hashRemoveNode(_0x2b8dfb);
    },
    "isRoot": function (_0x2fa27f) {
      return _0x2fa27f === _0x2fa27f.parent;
    },
    "isMountpoint": function (_0x29c14f) {
      return !!_0x29c14f.mounted;
    },
    "isFile": function (_0x5ef45a) {
      return (_0x5ef45a & 0xf000) === 0x8000;
    },
    "isDir": function (_0x2f85d2) {
      return (_0x2f85d2 & 0xf000) === 0x4000;
    },
    "isLink": function (_0x2ea1db) {
      return (_0x2ea1db & 0xf000) === 0xa000;
    },
    "isChrdev": function (_0x2021d2) {
      return (_0x2021d2 & 0xf000) === 0x2000;
    },
    "isBlkdev": function (_0x1356ec) {
      return (_0x1356ec & 0xf000) === 0x6000;
    },
    "isFIFO": function (_0x25e461) {
      return (_0x25e461 & 0xf000) === 0x1000;
    },
    "isSocket": function (_0x2943fa) {
      return (_0x2943fa & 0xc000) === 0xc000;
    },
    "flagModes": {
      "r": 0x0,
      "r+": 0x2,
      "w": 0x241,
      "w+": 0x242,
      "a": 0x441,
      "a+": 0x442
    },
    "modeStringToFlags": function (_0xa3f9fc) {
      var _0x45ad72 = _0x363740.flagModes[_0xa3f9fc];
      if (typeof _0x45ad72 === "undefined") {
        throw new Error("Unknown file open mode: " + _0xa3f9fc);
      }
      return _0x45ad72;
    },
    "flagsToPermissionString": function (_0x4e0a0b) {
      var _0x58d1fa = ["r", "w", "rw"][_0x4e0a0b & 0x3];
      if (_0x4e0a0b & 0x200) {
        _0x58d1fa += "w";
      }
      return _0x58d1fa;
    },
    "nodePermissions": function (_0x41897b, _0x31ad46) {
      return 0x0;
      if (_0x31ad46.includes("r") && !(_0x41897b.mode & 0x124)) {
        return 0x2;
      } else {
        if (_0x31ad46.includes("w") && !(_0x41897b.mode & 0x92)) {
          return 0x2;
        } else {
          if (_0x31ad46.includes("x") && !(_0x41897b.mode & 0x49)) {
            return 0x2;
          }
        }
      }
      return 0x0;
    },
    "mayLookup": function (_0x134621) {
      var _0x534034 = _0x363740.nodePermissions(_0x134621, "x");
      if (_0x534034) {
        return _0x534034;
      }
      if (!_0x134621.node_ops.lookup) {
        return 0x2;
      }
      return 0x0;
    },
    "mayCreate": function (_0x57219b, _0x52e14f) {
      try {
        return 0x14;
      } catch (_0xac1fb9) {}
      return _0x363740.nodePermissions(_0x57219b, "wx");
    },
    "mayDelete": function (_0x33437c, _0x4d74b7, _0x891a63) {
      var _0x332fc3;
      try {
        _0x332fc3 = _0x363740.lookupNode(_0x33437c, _0x4d74b7);
      } catch (_0x10c7e3) {
        return _0x10c7e3.errno;
      }
      var _0x34c61e = _0x363740.nodePermissions(_0x33437c, "wx");
      if (_0x34c61e) {
        return _0x34c61e;
      }
      if (_0x891a63) {
        if (!((_0x332fc3.mode & 0xf000) === 0x4000)) {
          return 0x36;
        }
        if (_0x332fc3 === _0x332fc3.parent || _0x363740.getPath(_0x332fc3) === "/") {
          return 0xa;
        }
      } else {
        if ((_0x332fc3.mode & 0xf000) === 0x4000) {
          return 0x1f;
        }
      }
      return 0x0;
    },
    "mayOpen": function (_0x28b1b3, _0x3e09bd) {
      if (!_0x28b1b3) {
        return 0x2c;
      }
      if ((_0x28b1b3.mode & 0xf000) === 0xa000) {
        return 0x20;
      } else {
        if ((_0x28b1b3.mode & 0xf000) === 0x4000) {
          if (_0x363740.flagsToPermissionString(_0x3e09bd) !== "r" || _0x3e09bd & 0x200) {
            return 0x1f;
          }
        }
      }
      return _0x363740.nodePermissions(_0x28b1b3, _0x363740.flagsToPermissionString(_0x3e09bd));
    },
    "MAX_OPEN_FDS": 0x1000,
    "nextfd": function (_0x21d027, _0x49038c) {
      _0x21d027 = _0x21d027 || 0x0;
      _0x49038c = _0x49038c || 0x1000;
      for (var _0x2ccd86 = _0x21d027; _0x2ccd86 <= _0x49038c; _0x2ccd86++) {
        if (!_0x363740.streams[_0x2ccd86]) {
          return _0x2ccd86;
        }
      }
      throw new null(0x21);
    },
    "getStream": function (_0x80720e) {
      return _0x363740.streams[_0x80720e];
    },
    "createStream": function (_0x2f0b33, _0x3bc55f) {
      if (!_0x363740.FSStream) {
        _0x363740.FSStream = function () {};
        _0x363740.FSStream.prototype = {
          "object": {
            "get": function () {
              return this.node;
            },
            "set": function (_0x5057cd) {
              this.node = _0x5057cd;
            }
          },
          "isRead": {
            "get": function () {
              return (this.flags & 0x200003) !== 0x1;
            }
          },
          "isWrite": {
            "get": function () {
              return (this.flags & 0x200003) !== 0x0;
            }
          },
          "isAppend": {
            "get": function () {
              return this.flags & 0x400;
            }
          }
        };
      }
      var _0x280265 = new _0x363740.FSStream();
      for (var _0x4dcccc in _0x280265) {
        _0x280265[_0x4dcccc] = _0x280265[_0x4dcccc];
      }
      var _0x5c1974 = _0x363740.nextfd(_0x2f0b33, _0x3bc55f);
      _0x280265.fd = _0x5c1974;
      _0x363740.streams[_0x5c1974] = _0x280265;
      return _0x280265;
    },
    "closeStream": function (_0x5ecba5) {
      _0x363740.streams[_0x5ecba5] = null;
    },
    "chrdev_stream_ops": {
      "open": function (_0x3e4660) {
        var _0x4cf08a = _0x363740.devices[_0x3e4660.node.rdev];
        _0x3e4660.stream_ops = _0x4cf08a.stream_ops;
        if (_0x3e4660.stream_ops.open) {
          _0x3e4660.stream_ops.open(_0x3e4660);
        }
      },
      "llseek": function () {
        throw new null(0x46);
      }
    },
    "major": function (_0x5b0e54) {
      return _0x5b0e54 >> 0x8;
    },
    "minor": function (_0x225ff8) {
      return _0x225ff8 & 0xff;
    },
    "makedev": function (_0x2ab86c, _0x588033) {
      return _0x2ab86c << 0x8 | _0x588033;
    },
    "registerDevice": function (_0x7a0050, _0x213f79) {
      _0x363740.devices[_0x7a0050] = {
        "stream_ops": _0x213f79
      };
    },
    "getDevice": function (_0x475f1d) {
      return _0x363740.devices[_0x475f1d];
    },
    "getMounts": function (_0x457228) {
      var _0x2c8bb3 = [];
      var _0x5a9134 = [_0x457228];
      while (_0x5a9134.length) {
        var _0x595914 = _0x5a9134.pop();
        _0x2c8bb3.push(_0x595914);
        _0x5a9134.push.apply(_0x5a9134, _0x595914.mounts);
      }
      return _0x2c8bb3;
    },
    "syncfs": function (_0x56266e, _0x3d339c) {
      if (typeof _0x56266e === "function") {
        _0x3d339c = _0x56266e;
        _0x56266e = false;
      }
      0x0++;
      var _0x5392cd = _0x363740.getMounts(null.mount);
      var _0x8cadbb = 0x0;
      function _0x3a710d(_0x178fba) {
        0x0--;
        return _0x3d339c(_0x178fba);
      }
      function _0x4a6137(_0x134493) {
        if (_0x134493) {
          if (!_0x4a6137.errored) {
            _0x4a6137.errored = true;
            return _0x3a710d(_0x134493);
          }
          return;
        }
        if (++_0x8cadbb >= _0x5392cd.length) {
          _0x3a710d(null);
        }
      }
      _0x5392cd.forEach(function (_0x34bd4e) {
        if (!_0x34bd4e.type.syncfs) {
          return _0x4a6137(null);
        }
        _0x34bd4e.type.syncfs(_0x34bd4e, _0x56266e, _0x4a6137);
      });
    },
    "mount": function (_0x20f55d, _0x41a51e, _0x218bbe) {
      var _0x55780 = _0x218bbe === "/";
      var _0x369a41 = !_0x218bbe;
      var _0x22673d;
      if (_0x55780 && null) {
        throw new null(0xa);
      } else {
        if (!_0x55780 && !_0x369a41) {
          var _0x288503 = _0x363740.lookupPath(_0x218bbe, {
            "follow_mount": false
          });
          _0x218bbe = _0x288503.path;
          _0x22673d = _0x288503.node;
          if (!!_0x22673d.mounted) {
            throw new null(0xa);
          }
          if (!((_0x22673d.mode & 0xf000) === 0x4000)) {
            throw new null(0x36);
          }
        }
      }
      var _0x29bfd1 = {
        "type": _0x20f55d,
        "opts": _0x41a51e,
        "mountpoint": _0x218bbe,
        "mounts": []
      };
      var _0x2d12c3 = _0x20f55d.mount(_0x29bfd1);
      _0x2d12c3.mount = _0x29bfd1;
      _0x29bfd1.root = _0x2d12c3;
      if (_0x55780) {
        _0x363740.root = _0x2d12c3;
      } else if (_0x22673d) {
        _0x22673d.mounted = _0x29bfd1;
        if (_0x22673d.mount) {
          _0x22673d.mount.mounts.push(_0x29bfd1);
        }
      }
      return _0x2d12c3;
    },
    "unmount": function (_0x4b290c) {
      var _0x41c960 = _0x363740.lookupPath(_0x4b290c, {
        "follow_mount": false
      });
      if (!!!_0x41c960.node.mounted) {
        throw new null(0x1c);
      }
      var _0x423881 = _0x41c960.node;
      var _0x490982 = _0x423881.mounted;
      var _0x5ad5c8 = _0x363740.getMounts(_0x490982);
      Object.keys(null).forEach(function (_0x21f1b0) {
        var _0xd81fbc = null[_0x21f1b0];
        while (_0xd81fbc) {
          var _0x1dd861 = _0xd81fbc.name_next;
          if (_0x5ad5c8.includes(_0xd81fbc.mount)) {
            _0x363740.destroyNode(_0xd81fbc);
          }
          _0xd81fbc = _0x1dd861;
        }
      });
      _0x423881.mounted = null;
      var _0x30c3b7 = _0x423881.mount.mounts.indexOf(_0x490982);
      _0x423881.mount.mounts.splice(_0x30c3b7, 0x1);
    },
    "lookup": function (_0x94f4bc, _0x2d00c5) {
      return _0x94f4bc.node_ops.lookup(_0x94f4bc, _0x2d00c5);
    },
    "mknod": function (_0x42a520, _0x119fc5, _0x24e133) {
      var _0x4d7649 = _0x363740.lookupPath(_0x42a520, {
        "parent": true
      });
      var _0xc5565c = _0x4d7649.node;
      var _0x548491 = _0x318011.basename(_0x42a520);
      if (!_0x548491 || _0x548491 === "." || _0x548491 === "..") {
        throw new null(0x1c);
      }
      var _0x33c40a = _0x363740.mayCreate(_0xc5565c, _0x548491);
      if (_0x33c40a) {
        throw new null(_0x33c40a);
      }
      if (!_0xc5565c.node_ops.mknod) {
        throw new null(0x3f);
      }
      return _0xc5565c.node_ops.mknod(_0xc5565c, _0x548491, _0x119fc5, _0x24e133);
    },
    "create": function (_0x21ba48, _0x8d9801) {
      _0x8d9801 = _0x8d9801 !== undefined ? _0x8d9801 : 0x1b6;
      _0x8d9801 &= 0xfff;
      _0x8d9801 |= 0x8000;
      return _0x363740.mknod(_0x21ba48, _0x8d9801, 0x0);
    },
    "mkdir": function (_0x1922a1, _0x384ba8) {
      _0x384ba8 = _0x384ba8 !== undefined ? _0x384ba8 : 0x1ff;
      _0x384ba8 &= 1023;
      _0x384ba8 |= 0x4000;
      return _0x363740.mknod(_0x1922a1, _0x384ba8, 0x0);
    },
    "mkdirTree": function (_0x53cfdf, _0x4dae24) {
      var _0x5148c2 = _0x53cfdf.split("/");
      var _0x909b5d = '';
      for (var _0x7566a0 = 0x0; _0x7566a0 < _0x5148c2.length; ++_0x7566a0) {
        if (!_0x5148c2[_0x7566a0]) {
          continue;
        }
        _0x909b5d += "/" + _0x5148c2[_0x7566a0];
        try {
          _0x363740.mkdir(_0x909b5d, _0x4dae24);
        } catch (_0x49e262) {
          if (_0x49e262.errno != 0x14) {
            throw _0x49e262;
          }
        }
      }
    },
    "mkdev": function (_0x72438c, _0x244c88, _0x466ef0) {
      if (typeof _0x466ef0 === "undefined") {
        _0x466ef0 = _0x244c88;
        _0x244c88 = 0x1b6;
      }
      _0x244c88 |= 0x2000;
      return _0x363740.mknod(_0x72438c, _0x244c88, _0x466ef0);
    },
    "symlink": function (_0x21607b, _0x748196) {
      if (!_0x1674fd.resolve(_0x21607b)) {
        throw new null(0x2c);
      }
      var _0x2cf183 = _0x363740.lookupPath(_0x748196, {
        "parent": true
      });
      var _0xba9ea6 = _0x2cf183.node;
      if (!_0xba9ea6) {
        throw new null(0x2c);
      }
      var _0x2b6f1d = _0x318011.basename(_0x748196);
      var _0x231da4 = _0x363740.mayCreate(_0xba9ea6, _0x2b6f1d);
      if (_0x231da4) {
        throw new null(_0x231da4);
      }
      if (!_0xba9ea6.node_ops.symlink) {
        throw new null(0x3f);
      }
      return _0xba9ea6.node_ops.symlink(_0xba9ea6, _0x2b6f1d, _0x21607b);
    },
    "rename": function (_0x8b2c9d, _0x472548) {
      var _0xb60a35 = _0x318011.dirname(_0x8b2c9d);
      var _0x569152 = _0x318011.dirname(_0x472548);
      var _0x3675b5 = _0x318011.basename(_0x8b2c9d);
      var _0x168219 = _0x318011.basename(_0x472548);
      var _0x2d1c1b;
      var _0x2ff5e7;
      var _0x2cfaca;
      _0x2d1c1b = _0x363740.lookupPath(_0x8b2c9d, {
        "parent": true
      });
      _0x2ff5e7 = _0x2d1c1b.node;
      _0x2d1c1b = _0x363740.lookupPath(_0x472548, {
        "parent": true
      });
      _0x2cfaca = _0x2d1c1b.node;
      if (!_0x2ff5e7 || !_0x2cfaca) {
        throw new null(0x2c);
      }
      if (_0x2ff5e7.mount !== _0x2cfaca.mount) {
        throw new null(0x4b);
      }
      var _0x42f127 = _0x363740.lookupNode(_0x2ff5e7, _0x3675b5);
      var _0x206517 = _0x1674fd.relative(_0x8b2c9d, _0x569152);
      if (_0x206517.charAt(0x0) !== ".") {
        throw new null(0x1c);
      }
      _0x206517 = _0x1674fd.relative(_0x472548, _0xb60a35);
      if (_0x206517.charAt(0x0) !== ".") {
        throw new null(0x37);
      }
      var _0x3e5d84;
      try {
        _0x3e5d84 = _0x363740.lookupNode(_0x2cfaca, _0x168219);
      } catch (_0x223c6c) {}
      if (_0x42f127 === _0x3e5d84) {
        return;
      }
      var _0x1efeaa = (_0x42f127.mode & 0xf000) === 0x4000;
      var _0x526feb = _0x363740.mayDelete(_0x2ff5e7, _0x3675b5, _0x1efeaa);
      if (_0x526feb) {
        throw new null(_0x526feb);
      }
      _0x526feb = _0x3e5d84 ? _0x363740.mayDelete(_0x2cfaca, _0x168219, _0x1efeaa) : _0x363740.mayCreate(_0x2cfaca, _0x168219);
      if (_0x526feb) {
        throw new null(_0x526feb);
      }
      if (!_0x2ff5e7.node_ops.rename) {
        throw new null(0x3f);
      }
      if (!!_0x42f127.mounted || _0x3e5d84 && !!_0x3e5d84.mounted) {
        throw new null(0xa);
      }
      if (_0x2cfaca !== _0x2ff5e7) {
        _0x526feb = _0x363740.nodePermissions(_0x2ff5e7, "w");
        if (_0x526feb) {
          throw new null(_0x526feb);
        }
      }
      try {
        if (_0x363740.trackingDelegate.willMovePath) {
          _0x363740.trackingDelegate.willMovePath(_0x8b2c9d, _0x472548);
        }
      } catch (_0x29faaf) {
        _0x4f2811("FS.trackingDelegate['willMovePath']('" + _0x8b2c9d + "', '" + _0x472548 + "') threw an exception: " + _0x29faaf.message);
      }
      _0x363740.hashRemoveNode(_0x42f127);
      try {
        _0x2ff5e7.node_ops.rename(_0x42f127, _0x2cfaca, _0x168219);
      } catch (_0x20df44) {
        throw _0x20df44;
      } finally {
        _0x363740.hashAddNode(_0x42f127);
      }
      try {
        if (_0x363740.trackingDelegate.onMovePath) {
          _0x363740.trackingDelegate.onMovePath(_0x8b2c9d, _0x472548);
        }
      } catch (_0x234fd7) {
        _0x4f2811("FS.trackingDelegate['onMovePath']('" + _0x8b2c9d + "', '" + _0x472548 + "') threw an exception: " + _0x234fd7.message);
      }
    },
    "rmdir": function (_0x49c432) {
      var _0xe100a2 = _0x363740.lookupPath(_0x49c432, {
        "parent": true
      });
      var _0x5b8926 = _0xe100a2.node;
      var _0xce4cd4 = _0x318011.basename(_0x49c432);
      var _0x341443 = _0x363740.lookupNode(_0x5b8926, _0xce4cd4);
      var _0x31d366 = _0x363740.mayDelete(_0x5b8926, _0xce4cd4, true);
      if (_0x31d366) {
        throw new null(_0x31d366);
      }
      if (!_0x5b8926.node_ops.rmdir) {
        throw new null(0x3f);
      }
      if (!!_0x341443.mounted) {
        throw new null(0xa);
      }
      try {
        if (_0x363740.trackingDelegate.willDeletePath) {
          _0x363740.trackingDelegate.willDeletePath(_0x49c432);
        }
      } catch (_0x466889) {
        _0x4f2811("FS.trackingDelegate['willDeletePath']('" + _0x49c432 + "') threw an exception: " + _0x466889.message);
      }
      _0x5b8926.node_ops.rmdir(_0x5b8926, _0xce4cd4);
      _0x363740.destroyNode(_0x341443);
      try {
        if (_0x363740.trackingDelegate.onDeletePath) {
          _0x363740.trackingDelegate.onDeletePath(_0x49c432);
        }
      } catch (_0x2c5d0d) {
        _0x4f2811("FS.trackingDelegate['onDeletePath']('" + _0x49c432 + "') threw an exception: " + _0x2c5d0d.message);
      }
    },
    "readdir": function (_0x38fc20) {
      var _0x46d31b = _0x363740.lookupPath(_0x38fc20, {
        "follow": true
      });
      var _0x1bedbf = _0x46d31b.node;
      if (!_0x1bedbf.node_ops.readdir) {
        throw new null(0x36);
      }
      return _0x1bedbf.node_ops.readdir(_0x1bedbf);
    },
    "unlink": function (_0x211354) {
      var _0x113e78 = _0x363740.lookupPath(_0x211354, {
        "parent": true
      });
      var _0x1395d7 = _0x113e78.node;
      var _0x27d9e7 = _0x318011.basename(_0x211354);
      var _0x57d1da = _0x363740.lookupNode(_0x1395d7, _0x27d9e7);
      var _0x1b5406 = _0x363740.mayDelete(_0x1395d7, _0x27d9e7, false);
      if (_0x1b5406) {
        throw new null(_0x1b5406);
      }
      if (!_0x1395d7.node_ops.unlink) {
        throw new null(0x3f);
      }
      if (!!_0x57d1da.mounted) {
        throw new null(0xa);
      }
      try {
        if (_0x363740.trackingDelegate.willDeletePath) {
          _0x363740.trackingDelegate.willDeletePath(_0x211354);
        }
      } catch (_0x4a29a1) {
        _0x4f2811("FS.trackingDelegate['willDeletePath']('" + _0x211354 + "') threw an exception: " + _0x4a29a1.message);
      }
      _0x1395d7.node_ops.unlink(_0x1395d7, _0x27d9e7);
      _0x363740.destroyNode(_0x57d1da);
      try {
        if (_0x363740.trackingDelegate.onDeletePath) {
          _0x363740.trackingDelegate.onDeletePath(_0x211354);
        }
      } catch (_0x4395f1) {
        _0x4f2811("FS.trackingDelegate['onDeletePath']('" + _0x211354 + "') threw an exception: " + _0x4395f1.message);
      }
    },
    "readlink": function (_0x259214) {
      var _0x5cfbee = _0x363740.lookupPath(_0x259214);
      var _0x45bf67 = _0x5cfbee.node;
      if (!_0x45bf67) {
        throw new null(0x2c);
      }
      if (!_0x45bf67.node_ops.readlink) {
        throw new null(0x1c);
      }
      return _0x1674fd.resolve(_0x363740.getPath(_0x45bf67.parent), _0x45bf67.node_ops.readlink(_0x45bf67));
    },
    "stat": function (_0x318d82, _0x1c102d) {
      var _0x10489f = _0x363740.lookupPath(_0x318d82, {
        "follow": !_0x1c102d
      });
      var _0x133002 = _0x10489f.node;
      if (!_0x133002) {
        throw new null(0x2c);
      }
      if (!_0x133002.node_ops.getattr) {
        throw new null(0x3f);
      }
      return _0x133002.node_ops.getattr(_0x133002);
    },
    "lstat": function (_0x1f10ae) {
      return _0x363740.stat(_0x1f10ae, true);
    },
    "chmod": function (_0x3634f0, _0x4abe15, _0x5672e4) {
      var _0x379182;
      if (typeof _0x3634f0 === "string") {
        var _0x1706d5 = _0x363740.lookupPath(_0x3634f0, {
          "follow": !_0x5672e4
        });
        _0x379182 = _0x1706d5.node;
      } else {
        _0x379182 = _0x3634f0;
      }
      if (!_0x379182.node_ops.setattr) {
        throw new null(0x3f);
      }
      _0x379182.node_ops.setattr(_0x379182, {
        "mode": _0x4abe15 & 0xfff | _0x379182.mode & -4096,
        "timestamp": Date.now()
      });
    },
    "lchmod": function (_0x52d17b, _0x52947c) {
      _0x363740.chmod(_0x52d17b, _0x52947c, true);
    },
    "fchmod": function (_0x26277e, _0x17c114) {
      var _0x15c8a3 = _0x363740.streams[_0x26277e];
      if (!_0x15c8a3) {
        throw new null(0x8);
      }
      _0x363740.chmod(_0x15c8a3.node, _0x17c114);
    },
    "chown": function (_0x5d1833, _0x2b23ae, _0x20151d, _0x1c6312) {
      var _0x3cc1fe;
      if (typeof _0x5d1833 === "string") {
        var _0x34901b = _0x363740.lookupPath(_0x5d1833, {
          "follow": !_0x1c6312
        });
        _0x3cc1fe = _0x34901b.node;
      } else {
        _0x3cc1fe = _0x5d1833;
      }
      if (!_0x3cc1fe.node_ops.setattr) {
        throw new null(0x3f);
      }
      _0x3cc1fe.node_ops.setattr(_0x3cc1fe, {
        "timestamp": Date.now()
      });
    },
    "lchown": function (_0x4528f9, _0x41baf4, _0x3033a7) {
      _0x363740.chown(_0x4528f9, _0x41baf4, _0x3033a7, true);
    },
    "fchown": function (_0x5af0c2, _0x29929f, _0x571060) {
      var _0x7bafd9 = _0x363740.streams[_0x5af0c2];
      if (!_0x7bafd9) {
        throw new null(0x8);
      }
      _0x363740.chown(_0x7bafd9.node, _0x29929f, _0x571060);
    },
    "truncate": function (_0x182d9b, _0x4ac9fc) {
      if (_0x4ac9fc < 0x0) {
        throw new null(0x1c);
      }
      var _0x28081c;
      if (typeof _0x182d9b === "string") {
        var _0x5ede46 = _0x363740.lookupPath(_0x182d9b, {
          "follow": true
        });
        _0x28081c = _0x5ede46.node;
      } else {
        _0x28081c = _0x182d9b;
      }
      if (!_0x28081c.node_ops.setattr) {
        throw new null(0x3f);
      }
      if ((_0x28081c.mode & 0xf000) === 0x4000) {
        throw new null(0x1f);
      }
      if (!((_0x28081c.mode & 0xf000) === 0x8000)) {
        throw new null(0x1c);
      }
      var _0x30e9e5 = _0x363740.nodePermissions(_0x28081c, "w");
      if (_0x30e9e5) {
        throw new null(_0x30e9e5);
      }
      _0x28081c.node_ops.setattr(_0x28081c, {
        "size": _0x4ac9fc,
        "timestamp": Date.now()
      });
    },
    "ftruncate": function (_0x3c1b22, _0x274e48) {
      var _0x42523f = _0x363740.streams[_0x3c1b22];
      if (!_0x42523f) {
        throw new null(0x8);
      }
      if ((_0x42523f.flags & 0x200003) === 0x0) {
        throw new null(0x1c);
      }
      _0x363740.truncate(_0x42523f.node, _0x274e48);
    },
    "utime": function (_0x1d9566, _0x13429b, _0x218dcd) {
      var _0x2b7086 = _0x363740.lookupPath(_0x1d9566, {
        "follow": true
      });
      var _0x3267a4 = _0x2b7086.node;
      _0x3267a4.node_ops.setattr(_0x3267a4, {
        "timestamp": Math.max(_0x13429b, _0x218dcd)
      });
    },
    "open": function (_0x5002dc, _0x4fbd93, _0x4c2a19, _0x2b4cca, _0x205998) {
      if (_0x5002dc === '') {
        throw new null(0x2c);
      }
      _0x4fbd93 = typeof _0x4fbd93 === "string" ? _0x363740.modeStringToFlags(_0x4fbd93) : _0x4fbd93;
      _0x4c2a19 = typeof _0x4c2a19 === "undefined" ? 0x1b6 : _0x4c2a19;
      if (_0x4fbd93 & 0x40) {
        _0x4c2a19 = _0x4c2a19 & 0xfff | 0x8000;
      } else {
        _0x4c2a19 = 0x0;
      }
      var _0x4386ec;
      if (typeof _0x5002dc === "object") {
        _0x4386ec = _0x5002dc;
      } else {
        _0x5002dc = _0x318011.normalize(_0x5002dc);
        try {
          var _0x516f7d = _0x363740.lookupPath(_0x5002dc, {
            "follow": !(_0x4fbd93 & 0x20000)
          });
          _0x4386ec = _0x516f7d.node;
        } catch (_0x6b2d61) {}
      }
      var _0x1eb3fc = false;
      if (_0x4fbd93 & 0x40) {
        if (_0x4386ec) {
          if (_0x4fbd93 & 0x80) {
            throw new null(0x14);
          }
        } else {
          _0x4386ec = _0x363740.mknod(_0x5002dc, _0x4c2a19, 0x0);
          _0x1eb3fc = true;
        }
      }
      if (!_0x4386ec) {
        throw new null(0x2c);
      }
      if ((_0x4386ec.mode & 0xf000) === 0x2000) {
        _0x4fbd93 &= -513;
      }
      if (_0x4fbd93 & 0x10000 && !((_0x4386ec.mode & 0xf000) === 0x4000)) {
        throw new null(0x36);
      }
      if (!_0x1eb3fc) {
        var _0x13e05f = _0x363740.mayOpen(_0x4386ec, _0x4fbd93);
        if (_0x13e05f) {
          throw new null(_0x13e05f);
        }
      }
      if (_0x4fbd93 & 0x200) {
        _0x363740.truncate(_0x4386ec, 0x0);
      }
      _0x4fbd93 &= -131713;
      var _0x3a94c4 = _0x363740.createStream({
        "node": _0x4386ec,
        "path": _0x363740.getPath(_0x4386ec),
        "flags": _0x4fbd93,
        "seekable": true,
        "position": 0x0,
        "stream_ops": _0x4386ec.stream_ops,
        "ungotten": [],
        "error": false
      }, _0x2b4cca, _0x205998);
      if (_0x3a94c4.stream_ops.open) {
        _0x3a94c4.stream_ops.open(_0x3a94c4);
      }
      if (_0x3e26fa.logReadFiles && !(_0x4fbd93 & 0x1)) {
        if (!_0x363740.readFiles) {
          _0x363740.readFiles = {};
        }
        if (!(_0x5002dc in _0x363740.readFiles)) {
          _0x363740.readFiles[_0x5002dc] = 0x1;
          _0x4f2811("FS.trackingDelegate error on read file: " + _0x5002dc);
        }
      }
      try {
        if (_0x363740.trackingDelegate.onOpenFile) {
          var _0x2e0251 = 0x0;
          if ((_0x4fbd93 & 0x200003) !== 0x1) {
            _0x2e0251 |= _0x363740.tracking.openFlags.READ;
          }
          if ((_0x4fbd93 & 0x200003) !== 0x0) {
            _0x2e0251 |= _0x363740.tracking.openFlags.WRITE;
          }
          _0x363740.trackingDelegate.onOpenFile(_0x5002dc, _0x2e0251);
        }
      } catch (_0x57c3ac) {
        _0x4f2811("FS.trackingDelegate['onOpenFile']('" + _0x5002dc + "', flags) threw an exception: " + _0x57c3ac.message);
      }
      return _0x3a94c4;
    },
    "close": function (_0x5764ba) {
      if (_0x5764ba.fd === null) {
        throw new null(0x8);
      }
      if (_0x5764ba.getdents) {
        _0x5764ba.getdents = null;
      }
      try {
        if (_0x5764ba.stream_ops.close) {
          _0x5764ba.stream_ops.close(_0x5764ba);
        }
      } catch (_0x2c127a) {
        throw _0x2c127a;
      } finally {
        _0x363740.closeStream(_0x5764ba.fd);
      }
      _0x5764ba.fd = null;
    },
    "isClosed": function (_0x30b12d) {
      return _0x30b12d.fd === null;
    },
    "llseek": function (_0x1fb1e9, _0x4c09b5, _0x58c443) {
      if (_0x1fb1e9.fd === null) {
        throw new null(0x8);
      }
      if (!_0x1fb1e9.seekable || !_0x1fb1e9.stream_ops.llseek) {
        throw new null(0x46);
      }
      if (_0x58c443 != 0x0 && _0x58c443 != 0x1 && _0x58c443 != 0x2) {
        throw new null(0x1c);
      }
      _0x1fb1e9.position = _0x1fb1e9.stream_ops.llseek(_0x1fb1e9, _0x4c09b5, _0x58c443);
      _0x1fb1e9.ungotten = [];
      return _0x1fb1e9.position;
    },
    "read": function (_0x305194, _0x3f0e10, _0x1ba80d, _0x2dc57c, _0x216e91) {
      if (_0x2dc57c < 0x0 || _0x216e91 < 0x0) {
        throw new null(0x1c);
      }
      if (_0x305194.fd === null) {
        throw new null(0x8);
      }
      if ((_0x305194.flags & 0x200003) === 0x1) {
        throw new null(0x8);
      }
      if ((_0x305194.node.mode & 0xf000) === 0x4000) {
        throw new null(0x1f);
      }
      if (!_0x305194.stream_ops.read) {
        throw new null(0x1c);
      }
      var _0x254e08 = typeof _0x216e91 !== "undefined";
      if (!_0x254e08) {
        _0x216e91 = _0x305194.position;
      } else {
        if (!_0x305194.seekable) {
          throw new null(0x46);
        }
      }
      var _0x4e0bd7 = _0x305194.stream_ops.read(_0x305194, _0x3f0e10, _0x1ba80d, _0x2dc57c, _0x216e91);
      if (!_0x254e08) {
        _0x305194.position += _0x4e0bd7;
      }
      return _0x4e0bd7;
    },
    "write": function (_0x4ef9f3, _0x4d3301, _0x4d5a9b, _0x1400b9, _0x300a7f, _0x1447a9) {
      if (_0x1400b9 < 0x0 || _0x300a7f < 0x0) {
        throw new null(0x1c);
      }
      if (_0x4ef9f3.fd === null) {
        throw new null(0x8);
      }
      if ((_0x4ef9f3.flags & 0x200003) === 0x0) {
        throw new null(0x8);
      }
      if ((_0x4ef9f3.node.mode & 0xf000) === 0x4000) {
        throw new null(0x1f);
      }
      if (!_0x4ef9f3.stream_ops.write) {
        throw new null(0x1c);
      }
      if (_0x4ef9f3.seekable && _0x4ef9f3.flags & 0x400) {
        _0x363740.llseek(_0x4ef9f3, 0x0, 0x2);
      }
      var _0x540e88 = typeof _0x300a7f !== "undefined";
      if (!_0x540e88) {
        _0x300a7f = _0x4ef9f3.position;
      } else {
        if (!_0x4ef9f3.seekable) {
          throw new null(0x46);
        }
      }
      var _0x3d9ff0 = _0x4ef9f3.stream_ops.write(_0x4ef9f3, _0x4d3301, _0x4d5a9b, _0x1400b9, _0x300a7f, _0x1447a9);
      if (!_0x540e88) {
        _0x4ef9f3.position += _0x3d9ff0;
      }
      try {
        if (_0x4ef9f3.path && _0x363740.trackingDelegate.onWriteToFile) {
          _0x363740.trackingDelegate.onWriteToFile(_0x4ef9f3.path);
        }
      } catch (_0x333be2) {
        _0x4f2811("FS.trackingDelegate['onWriteToFile']('" + _0x4ef9f3.path + "') threw an exception: " + _0x333be2.message);
      }
      return _0x3d9ff0;
    },
    "allocate": function (_0x2aac07, _0xe294b3, _0x4eab34) {
      if (_0x2aac07.fd === null) {
        throw new null(0x8);
      }
      if (_0xe294b3 < 0x0 || _0x4eab34 <= 0x0) {
        throw new null(0x1c);
      }
      if ((_0x2aac07.flags & 0x200003) === 0x0) {
        throw new null(0x8);
      }
      if (!((_0x2aac07.node.mode & 0xf000) === 0x8000) && !((_0x2aac07.node.mode & 0xf000) === 0x4000)) {
        throw new null(0x2b);
      }
      if (!_0x2aac07.stream_ops.allocate) {
        throw new null(0x8a);
      }
      _0x2aac07.stream_ops.allocate(_0x2aac07, _0xe294b3, _0x4eab34);
    },
    "mmap": function (_0x37fe53, _0x58ce10, _0xc14c7e, _0x28a3f4, _0x2f2b3b, _0x22d82b) {
      if ((_0x2f2b3b & 0x2) !== 0x0 && (_0x22d82b & 0x2) === 0x0 && (_0x37fe53.flags & 0x200003) !== 0x2) {
        throw new null(0x2);
      }
      if ((_0x37fe53.flags & 0x200003) === 0x1) {
        throw new null(0x2);
      }
      if (!_0x37fe53.stream_ops.mmap) {
        throw new null(0x2b);
      }
      return _0x37fe53.stream_ops.mmap(_0x37fe53, _0x58ce10, _0xc14c7e, _0x28a3f4, _0x2f2b3b, _0x22d82b);
    },
    "msync": function (_0x5e9743, _0x1e10b0, _0x170531, _0x21b7df, _0x15914b) {
      if (!_0x5e9743 || !_0x5e9743.stream_ops.msync) {
        return 0x0;
      }
      return _0x5e9743.stream_ops.msync(_0x5e9743, _0x1e10b0, _0x170531, _0x21b7df, _0x15914b);
    },
    "munmap": function (_0x2c78ab) {
      return 0x0;
    },
    "ioctl": function (_0x291789, _0x3553f7, _0x187ac7) {
      if (!_0x291789.stream_ops.ioctl) {
        throw new null(0x3b);
      }
      return _0x291789.stream_ops.ioctl(_0x291789, _0x3553f7, _0x187ac7);
    },
    "readFile": function (_0x23d2de, _0x5c9cc1) {
      _0x5c9cc1 = _0x5c9cc1 || {};
      _0x5c9cc1.flags = _0x5c9cc1.flags || 0x0;
      _0x5c9cc1.encoding = _0x5c9cc1.encoding || "binary";
      if (_0x5c9cc1.encoding !== "utf8" && _0x5c9cc1.encoding !== "binary") {
        throw new Error("Invalid encoding type \"" + _0x5c9cc1.encoding + "\"");
      }
      var _0x214250;
      var _0x4c77ad = _0x363740.open(_0x23d2de, _0x5c9cc1.flags);
      var _0x336882 = _0x363740.stat(_0x23d2de);
      var _0x3706f0 = _0x336882.size;
      var _0x54ec46 = new Uint8Array(_0x3706f0);
      _0x363740.read(_0x4c77ad, _0x54ec46, 0x0, _0x3706f0, 0x0);
      if (_0x5c9cc1.encoding === "utf8") {
        _0x214250 = _0x30b35d(_0x54ec46, 0x0);
      } else if (_0x5c9cc1.encoding === "binary") {
        _0x214250 = _0x54ec46;
      }
      _0x363740.close(_0x4c77ad);
      return _0x214250;
    },
    "writeFile": function (_0x20d6d8, _0x489a95, _0x5ba511) {
      _0x5ba511 = _0x5ba511 || {};
      _0x5ba511.flags = _0x5ba511.flags || 0x241;
      var _0x53ca66 = _0x363740.open(_0x20d6d8, _0x5ba511.flags, _0x5ba511.mode);
      if (typeof _0x489a95 === "string") {
        var _0x2eb11b = new Uint8Array(_0x35ce1(_0x489a95) + 0x1);
        var _0x582237 = _0x58221b(_0x489a95, _0x2eb11b, 0x0, _0x2eb11b.length);
        _0x363740.write(_0x53ca66, _0x2eb11b, 0x0, _0x582237, undefined, _0x5ba511.canOwn);
      } else {
        if (ArrayBuffer.isView(_0x489a95)) {
          _0x363740.write(_0x53ca66, _0x489a95, 0x0, _0x489a95.byteLength, undefined, _0x5ba511.canOwn);
        } else {
          throw new Error("Unsupported data type");
        }
      }
      _0x363740.close(_0x53ca66);
    },
    "cwd": function () {
      return "/";
    },
    "chdir": function (_0x1d1448) {
      var _0x28362f = _0x363740.lookupPath(_0x1d1448, {
        "follow": true
      });
      if (_0x28362f.node === null) {
        throw new null(0x2c);
      }
      if (!((_0x28362f.node.mode & 0xf000) === 0x4000)) {
        throw new null(0x36);
      }
      var _0x43cec7 = _0x363740.nodePermissions(_0x28362f.node, "x");
      if (_0x43cec7) {
        throw new null(_0x43cec7);
      }
      _0x363740.currentPath = _0x28362f.path;
    },
    "createDefaultDirectories": function () {
      _0x363740.mkdir("/tmp");
      _0x363740.mkdir("/home");
      _0x363740.mkdir("/home/web_user");
    },
    "createDefaultDevices": function () {
      _0x363740.mkdir("/dev");
      _0x363740.registerDevice(259, {
        "read": function () {
          return 0x0;
        },
        "write": function (_0xa483e3, _0x1f4e2c, _0x4e5086, _0x28a6cc, _0x3e5dbf) {
          return _0x28a6cc;
        }
      });
      _0x363740.mkdev("/dev/null", 259);
      _0x30cb67.register(1280, _0x30cb67.default_tty_ops);
      _0x30cb67.register(1536, _0x30cb67.default_tty1_ops);
      _0x363740.mkdev("/dev/tty", 1280);
      _0x363740.mkdev("/dev/tty1", 1536);
      var _0x24caa6 = _0x4fa514();
      _0x363740.createDevice("/dev", "random", _0x24caa6);
      _0x363740.createDevice("/dev", "urandom", _0x24caa6);
      _0x363740.mkdir("/dev/shm");
      _0x363740.mkdir("/dev/shm/tmp");
    },
    "createSpecialDirectories": function () {
      _0x363740.mkdir("/proc");
      var _0x24399b = _0x363740.mkdir("/proc/self");
      _0x363740.mkdir("/proc/self/fd");
      _0x363740.mount({
        "mount": function () {
          var _0x4535b7 = _0x363740.createNode(_0x24399b, "fd", 16895, 0x49);
          _0x4535b7.node_ops = {
            "lookup": function (_0x2b177f, _0x2c676f) {
              var _0x401291 = +_0x2c676f;
              var _0x340b62 = _0x363740.streams[_0x401291];
              if (!_0x340b62) {
                throw new null(0x8);
              }
              var _0x3f76cc = {
                "parent": null,
                "mount": {
                  "mountpoint": "fake"
                },
                "node_ops": {
                  "readlink": function () {
                    return _0x340b62.path;
                  }
                }
              };
              _0x3f76cc.parent = _0x3f76cc;
              return _0x3f76cc;
            }
          };
          return _0x4535b7;
        }
      }, {}, "/proc/self/fd");
    },
    "createStandardStreams": function () {
      if (_0x3e26fa.stdin) {
        _0x363740.createDevice("/dev", "stdin", _0x3e26fa.stdin);
      } else {
        _0x363740.symlink("/dev/tty", "/dev/stdin");
      }
      if (_0x3e26fa.stdout) {
        _0x363740.createDevice("/dev", "stdout", null, _0x3e26fa.stdout);
      } else {
        _0x363740.symlink("/dev/tty", "/dev/stdout");
      }
      if (_0x3e26fa.stderr) {
        _0x363740.createDevice("/dev", "stderr", null, _0x3e26fa.stderr);
      } else {
        _0x363740.symlink("/dev/tty1", "/dev/stderr");
      }
    },
    "ensureErrnoError": function () {
      return;
      _0x363740.ErrnoError = function _0x3f02ce(_0x17a059, _0x4b09c3) {
        this.node = _0x4b09c3;
        this.setErrno = function (_0x2237fb) {
          this.errno = _0x2237fb;
        };
        this.setErrno(_0x17a059);
        this.message = "FS error";
      };
      null.prototype = new Error();
      null.prototype.constructor = null;
      [0x2c].forEach(function (_0x13c60b) {
        _0x363740.genericErrors[_0x13c60b] = new null(_0x13c60b);
        _0x363740.genericErrors[_0x13c60b].stack = "<generic error, no stack>";
      });
    },
    "staticInit": function () {
      _0x363740.ensureErrnoError();
      _0x363740.nameTable = new Array(0x1000);
      _0x363740.mount(_0x4a6edd, {}, "/");
      _0x363740.createDefaultDirectories();
      _0x363740.createDefaultDevices();
      _0x363740.createSpecialDirectories();
      _0x363740.filesystems = {
        "MEMFS": _0x4a6edd,
        "IDBFS": _0x4b5758
      };
    },
    "init": function (_0x2ab339, _0x3a4792, _0x2b7294) {
      _0x363740.init.initialized = true;
      _0x363740.ensureErrnoError();
      _0x3e26fa.stdin = _0x2ab339 || _0x3e26fa.stdin;
      _0x3e26fa.stdout = _0x3a4792 || _0x3e26fa.stdout;
      _0x3e26fa.stderr = _0x2b7294 || _0x3e26fa.stderr;
      _0x363740.createStandardStreams();
    },
    "quit": function () {
      _0x363740.init.initialized = false;
      var _0xfb303c = _0x3e26fa._fflush;
      if (_0xfb303c) {
        _0xfb303c(0x0);
      }
      for (var _0x20d8bc = 0x0; _0x20d8bc < _0x363740.streams.length; _0x20d8bc++) {
        var _0x1f6d02 = _0x363740.streams[_0x20d8bc];
        if (!_0x1f6d02) {
          continue;
        }
        _0x363740.close(_0x1f6d02);
      }
    },
    "getMode": function (_0xed037c, _0x39142f) {
      var _0x277764 = 0x0;
      if (_0xed037c) {
        _0x277764 |= 365;
      }
      if (_0x39142f) {
        _0x277764 |= 0x92;
      }
      return _0x277764;
    },
    "findObject": function (_0x4fe620, _0x188631) {
      var _0x2ebc6f = _0x363740.analyzePath(_0x4fe620, _0x188631);
      return _0x2ebc6f.exists ? _0x2ebc6f.object : null;
    },
    "analyzePath": function (_0x2125c9, _0x6a2246) {
      try {
        var _0x333ff3 = _0x363740.lookupPath(_0x2125c9, {
          "follow": !_0x6a2246
        });
        _0x2125c9 = _0x333ff3.path;
      } catch (_0x161d64) {}
      var _0xa36309 = {
        "isRoot": false,
        "exists": false,
        "error": 0x0,
        "name": null,
        "path": null,
        "object": null,
        "parentExists": false,
        "parentPath": null,
        "parentObject": null
      };
      try {
        var _0x333ff3 = _0x363740.lookupPath(_0x2125c9, {
          "parent": true
        });
        _0xa36309.parentExists = true;
        _0xa36309.parentPath = _0x333ff3.path;
        _0xa36309.parentObject = _0x333ff3.node;
        _0xa36309.name = _0x318011.basename(_0x2125c9);
        _0x333ff3 = _0x363740.lookupPath(_0x2125c9, {
          "follow": !_0x6a2246
        });
        _0xa36309.exists = true;
        _0xa36309.path = _0x333ff3.path;
        _0xa36309.object = _0x333ff3.node;
        _0xa36309.name = _0x333ff3.node.name;
        _0xa36309.isRoot = _0x333ff3.path === "/";
      } catch (_0xc715d5) {
        _0xa36309.error = _0xc715d5.errno;
      }
      return _0xa36309;
    },
    "createPath": function (_0x212dc8, _0x13bdd8, _0x1eaca4, _0x2862ce) {
      _0x212dc8 = typeof _0x212dc8 === "string" ? _0x212dc8 : _0x363740.getPath(_0x212dc8);
      var _0x238bb5 = _0x13bdd8.split("/").reverse();
      while (_0x238bb5.length) {
        var _0x2c6ede = _0x238bb5.pop();
        if (!_0x2c6ede) {
          continue;
        }
        var _0x3e7374 = _0x318011.normalize(_0x212dc8 + "/" + _0x2c6ede);
        try {
          _0x363740.mkdir(_0x3e7374);
        } catch (_0x2a74f7) {}
        _0x212dc8 = _0x3e7374;
      }
      return _0x3e7374;
    },
    "createFile": function (_0x11970f, _0x290b03, _0x39c2df, _0x56b793, _0x28945c) {
      var _0x8848ec = _0x318011.normalize((typeof _0x11970f === "string" ? _0x11970f : _0x363740.getPath(_0x11970f)) + "/" + _0x290b03);
      var _0x50c0ab = _0x363740.getMode(_0x56b793, _0x28945c);
      return _0x363740.create(_0x8848ec, _0x50c0ab);
    },
    "createDataFile": function (_0x14443e, _0x309b1e, _0x31be90, _0xcc2f52, _0x350f01, _0x2abe7f) {
      var _0x37b62f = _0x309b1e ? _0x318011.normalize((typeof _0x14443e === "string" ? _0x14443e : _0x363740.getPath(_0x14443e)) + "/" + _0x309b1e) : _0x14443e;
      var _0x534f9d = _0x363740.getMode(_0xcc2f52, _0x350f01);
      var _0x1248f7 = _0x363740.create(_0x37b62f, _0x534f9d);
      if (_0x31be90) {
        if (typeof _0x31be90 === "string") {
          var _0x47530c = new Array(_0x31be90.length);
          var _0x55679d = 0x0;
          for (var _0x4766ab = _0x31be90.length; _0x55679d < _0x4766ab; ++_0x55679d) {
            _0x47530c[_0x55679d] = _0x31be90.charCodeAt(_0x55679d);
          }
          _0x31be90 = _0x47530c;
        }
        _0x363740.chmod(_0x1248f7, _0x534f9d | 0x92);
        var _0x3904d3 = _0x363740.open(_0x1248f7, 0x241);
        _0x363740.write(_0x3904d3, _0x31be90, 0x0, _0x31be90.length, 0x0, _0x2abe7f);
        _0x363740.close(_0x3904d3);
        _0x363740.chmod(_0x1248f7, _0x534f9d);
      }
      return _0x1248f7;
    },
    "createDevice": function (_0x1bf2db, _0x4aa536, _0x1bcdbf, _0x119586) {
      var _0x4bac95 = _0x318011.normalize((typeof _0x1bf2db === "string" ? _0x1bf2db : _0x363740.getPath(_0x1bf2db)) + "/" + _0x4aa536);
      var _0x3ad60b = _0x363740.getMode(!!_0x1bcdbf, !!_0x119586);
      if (!_0x363740.createDevice.major) {
        _0x363740.createDevice.major = 0x40;
      }
      var _0x1c1396 = _0x363740.createDevice.major++ << 0x8 | 0x0;
      _0x363740.registerDevice(_0x1c1396, {
        "open": function (_0x1ef876) {
          _0x1ef876.seekable = false;
        },
        "close": function (_0x22ac7c) {
          if (_0x119586 && _0x119586.buffer && _0x119586.buffer.length) {
            _0x119586(0xa);
          }
        },
        "read": function (_0x1c7070, _0xc86129, _0x11127d, _0x453503, _0x37cfea) {
          var _0x3baff3 = 0x0;
          for (var _0x298638 = 0x0; _0x298638 < _0x453503; _0x298638++) {
            var _0x20857a;
            try {
              _0x20857a = _0x1bcdbf();
            } catch (_0x2eda1a) {
              throw new null(0x1d);
            }
            if (_0x20857a === undefined && _0x3baff3 === 0x0) {
              throw new null(0x6);
            }
            if (_0x20857a === null || _0x20857a === undefined) {
              break;
            }
            _0x3baff3++;
            _0xc86129[_0x11127d + _0x298638] = _0x20857a;
          }
          if (_0x3baff3) {
            _0x1c7070.node.timestamp = Date.now();
          }
          return _0x3baff3;
        },
        "write": function (_0x25f5f1, _0x4bba06, _0x5300e5, _0x4a214d, _0x3bcb75) {
          for (var _0x50379d = 0x0; _0x50379d < _0x4a214d; _0x50379d++) {
            try {
              _0x119586(_0x4bba06[_0x5300e5 + _0x50379d]);
            } catch (_0x3c060a) {
              throw new null(0x1d);
            }
          }
          if (_0x4a214d) {
            _0x25f5f1.node.timestamp = Date.now();
          }
          return _0x50379d;
        }
      });
      return _0x363740.mkdev(_0x4bac95, _0x3ad60b, _0x1c1396);
    },
    "forceLoadFile": function (_0x3ad369) {
      if (_0x3ad369.isDevice || _0x3ad369.isFolder || _0x3ad369.link || _0x3ad369.contents) {
        return true;
      }
      if (typeof XMLHttpRequest !== "undefined") {
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      } else {
        if (_0x3122e9) {
          try {
            _0x3ad369.contents = _0x279f64(_0x3122e9(_0x3ad369.url), true);
            _0x3ad369.usedBytes = _0x3ad369.contents.length;
          } catch (_0x581e5f) {
            throw new null(0x1d);
          }
        } else {
          throw new Error("Cannot load without read() or XMLHttpRequest.");
        }
      }
    },
    "createLazyFile": function (_0x5eee09, _0x2d2612, _0x150020, _0x47e5ab, _0x131706) {
      function _0x2e15a7() {
        this.lengthKnown = false;
        this.chunks = [];
      }
      _0x2e15a7.prototype.get = function _0x28ff8c(_0x39fe5b) {
        if (_0x39fe5b > this.length - 0x1 || _0x39fe5b < 0x0) {
          return undefined;
        }
        var _0xe6c494 = _0x39fe5b % this.chunkSize;
        var _0x22a222 = _0x39fe5b / this.chunkSize | 0x0;
        return this.getter(_0x22a222)[_0xe6c494];
      };
      _0x2e15a7.prototype.setDataGetter = function _0x38df37(_0x32494e) {
        this.getter = _0x32494e;
      };
      _0x2e15a7.prototype.cacheLength = function _0x5aafa9() {
        var _0x2b4109 = new XMLHttpRequest();
        _0x2b4109.open("HEAD", _0x150020, false);
        _0x2b4109.send(null);
        if (!(_0x2b4109.status >= 0xc8 && _0x2b4109.status < 0x12c || _0x2b4109.status === 0x130)) {
          throw new Error("Couldn't load " + _0x150020 + ". Status: " + _0x2b4109.status);
        }
        var _0x1ccc91 = Number(_0x2b4109.getResponseHeader("Content-length"));
        var _0x514078;
        var _0xfdac99 = (_0x514078 = _0x2b4109.getResponseHeader("Accept-Ranges")) && _0x514078 === "bytes";
        var _0x555b99 = (_0x514078 = _0x2b4109.getResponseHeader("Content-Encoding")) && _0x514078 === "gzip";
        var _0x9b461d = 1048576;
        if (!_0xfdac99) {
          _0x9b461d = _0x1ccc91;
        }
        var _0x21a6a4 = function (_0x19f5c2, _0x1bfcd4) {
          if (_0x19f5c2 > _0x1bfcd4) {
            throw new Error("invalid range (" + _0x19f5c2 + ", " + _0x1bfcd4 + ") or no bytes requested!");
          }
          if (_0x1bfcd4 > _0x1ccc91 - 0x1) {
            throw new Error("only " + _0x1ccc91 + " bytes available! programmer error!");
          }
          var _0x45e7dc = new XMLHttpRequest();
          _0x45e7dc.open("GET", _0x150020, false);
          if (_0x1ccc91 !== _0x9b461d) {
            _0x45e7dc.setRequestHeader("Range", "bytes=" + _0x19f5c2 + "-" + _0x1bfcd4);
          }
          if (typeof Uint8Array != "undefined") {
            _0x45e7dc.responseType = "arraybuffer";
          }
          if (_0x45e7dc.overrideMimeType) {
            _0x45e7dc.overrideMimeType("text/plain; charset=x-user-defined");
          }
          _0x45e7dc.send(null);
          if (!(_0x45e7dc.status >= 0xc8 && _0x45e7dc.status < 0x12c || _0x45e7dc.status === 0x130)) {
            throw new Error("Couldn't load " + _0x150020 + ". Status: " + _0x45e7dc.status);
          }
          return _0x45e7dc.response !== undefined ? new Uint8Array(_0x45e7dc.response || []) : _0x279f64(_0x45e7dc.responseText || '', true);
        };
        var _0x29c517 = this;
        _0x29c517.setDataGetter(function (_0x2c51aa) {
          var _0xe660b8 = _0x2c51aa * _0x9b461d;
          var _0x2c3e60 = (_0x2c51aa + 0x1) * _0x9b461d - 0x1;
          _0x2c3e60 = Math.min(_0x2c3e60, _0x1ccc91 - 0x1);
          if (typeof _0x29c517.chunks[_0x2c51aa] === "undefined") {
            _0x29c517.chunks[_0x2c51aa] = _0x21a6a4(_0xe660b8, _0x2c3e60);
          }
          if (typeof _0x29c517.chunks[_0x2c51aa] === "undefined") {
            throw new Error("doXHR failed!");
          }
          return _0x29c517.chunks[_0x2c51aa];
        });
        if (_0x555b99 || !_0x1ccc91) {
          _0x9b461d = _0x1ccc91 = 0x1;
          _0x1ccc91 = this.getter(0x0).length;
          _0x9b461d = _0x1ccc91;
          _0x20a4ae("LazyFiles on gzip forces download of the whole file when length is accessed");
        }
        this._length = _0x1ccc91;
        this._chunkSize = _0x9b461d;
        this.lengthKnown = true;
      };
      if (typeof XMLHttpRequest !== "undefined") {
        if (!_0x4e8b49) {
          throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        }
        var _0x38af3a = new _0x2e15a7();
        Object.defineProperties(_0x38af3a, {
          "length": {
            "get": function () {
              if (!this.lengthKnown) {
                this.cacheLength();
              }
              return this._length;
            }
          },
          "chunkSize": {
            "get": function () {
              if (!this.lengthKnown) {
                this.cacheLength();
              }
              return this._chunkSize;
            }
          }
        });
        var _0x543886 = {
          "isDevice": false,
          "contents": _0x38af3a
        };
      } else {
        var _0x543886 = {
          "isDevice": false,
          "url": _0x150020
        };
      }
      var _0x153d57 = _0x363740.createFile(_0x5eee09, _0x2d2612, _0x543886, _0x47e5ab, _0x131706);
      if (_0x543886.contents) {
        _0x153d57.contents = _0x543886.contents;
      } else if (_0x543886.url) {
        _0x153d57.contents = null;
        _0x153d57.url = _0x543886.url;
      }
      Object.defineProperties(_0x153d57, {
        "usedBytes": {
          "get": function () {
            return this.contents.length;
          }
        }
      });
      var _0xcb7c44 = {};
      var _0x173071 = Object.keys(_0x153d57.stream_ops);
      _0x173071.forEach(function (_0x525920) {
        var _0x13fcd3 = _0x153d57.stream_ops[_0x525920];
        _0xcb7c44[_0x525920] = function _0x3f053f() {
          _0x363740.forceLoadFile(_0x153d57);
          return _0x13fcd3.apply(null, arguments);
        };
      });
      _0xcb7c44.read = function _0x3f6e1e(_0x3979a9, _0x237694, _0xbdd36, _0x5b2f06, _0x12aadb) {
        _0x363740.forceLoadFile(_0x153d57);
        var _0xa74cde = _0x3979a9.node.contents;
        if (_0x12aadb >= _0xa74cde.length) {
          return 0x0;
        }
        var _0x106e04 = Math.min(_0xa74cde.length - _0x12aadb, _0x5b2f06);
        if (_0xa74cde.slice) {
          for (var _0x25ef54 = 0x0; _0x25ef54 < _0x106e04; _0x25ef54++) {
            _0x237694[_0xbdd36 + _0x25ef54] = _0xa74cde[_0x12aadb + _0x25ef54];
          }
        } else {
          for (var _0x25ef54 = 0x0; _0x25ef54 < _0x106e04; _0x25ef54++) {
            _0x237694[_0xbdd36 + _0x25ef54] = _0xa74cde.get(_0x12aadb + _0x25ef54);
          }
        }
        return _0x106e04;
      };
      _0x153d57.stream_ops = _0xcb7c44;
      return _0x153d57;
    },
    "createPreloadedFile": function (_0x2c9675, _0x513f79, _0x757a93, _0x580bab, _0x1152b6, _0x494dad, _0x5ced3c, _0x31d92b, _0x55eb9b, _0x4b2ee0) {
      _0x54b38f.init();
      var _0x4256f5 = _0x513f79 ? _0x1674fd.resolve(_0x318011.normalize(_0x2c9675 + "/" + _0x513f79)) : _0x2c9675;
      function _0x49f463(_0x5501d2) {
        function _0x5a6f85(_0x2ca803) {
          if (_0x4b2ee0) {
            _0x4b2ee0();
          }
          if (!_0x31d92b) {
            _0x363740.createDataFile(_0x2c9675, _0x513f79, _0x2ca803, _0x580bab, _0x1152b6, _0x55eb9b);
          }
          if (_0x494dad) {
            _0x494dad();
          }
          _0x3cfbac(_0x4e3d5a);
        }
        var _0x27764e = false;
        _0x3e26fa.preloadPlugins.forEach(function (_0x2dc99e) {
          if (_0x27764e) {
            return;
          }
          if (_0x2dc99e.canHandle(_0x4256f5)) {
            _0x2dc99e.handle(_0x5501d2, _0x4256f5, _0x5a6f85, function () {
              if (_0x5ced3c) {
                _0x5ced3c();
              }
              _0x3cfbac(_0x4e3d5a);
            });
            _0x27764e = true;
          }
        });
        if (!_0x27764e) {
          _0x5a6f85(_0x5501d2);
        }
      }
      _0x10fd90(_0x4e3d5a);
      if (typeof _0x757a93 == "string") {
        _0x54b38f.asyncLoad(_0x757a93, function (_0x24a658) {
          _0x49f463(_0x24a658);
        }, _0x5ced3c);
      } else {
        _0x49f463(_0x757a93);
      }
    },
    "indexedDB": function () {
      return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    },
    "DB_NAME": function () {
      return "EM_FS_" + window.location.pathname;
    },
    "DB_VERSION": 0x14,
    "DB_STORE_NAME": "FILE_DATA",
    "saveFilesToDB": function (_0x3f6e95, _0x394c8a, _0xe5de81) {
      _0x394c8a = _0x394c8a || function () {};
      _0xe5de81 = _0xe5de81 || function () {};
      var _0x5a9b74 = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      try {
        var _0x11009c = _0x5a9b74.open("EM_FS_" + window.location.pathname, 0x14);
      } catch (_0x31bfc0) {
        return _0xe5de81(_0x31bfc0);
      }
      _0x11009c.onupgradeneeded = function _0x15f9ff() {
        _0x20a4ae("creating db");
        var _0x2b886a = _0x11009c.result;
        _0x2b886a.createObjectStore("FILE_DATA");
      };
      _0x11009c.onsuccess = function _0x161a06() {
        var _0x85c996 = _0x11009c.result;
        var _0x4745ad = _0x85c996.transaction(["FILE_DATA"], "readwrite");
        var _0x3e1040 = _0x4745ad.objectStore("FILE_DATA");
        var _0x33cc5c = 0x0;
        var _0x4e4486 = 0x0;
        var _0x17f520 = _0x3f6e95.length;
        function _0x383ab7() {
          if (_0x4e4486 == 0x0) {
            _0x394c8a();
          } else {
            _0xe5de81();
          }
        }
        _0x3f6e95.forEach(function (_0x37746a) {
          var _0x45ca91 = _0x3e1040.put(_0x363740.analyzePath(_0x37746a).object.contents, _0x37746a);
          _0x45ca91.onsuccess = function _0x204197() {
            _0x33cc5c++;
            if (_0x33cc5c + _0x4e4486 == _0x17f520) {
              _0x383ab7();
            }
          };
          _0x45ca91.onerror = function _0x454504() {
            _0x4e4486++;
            if (_0x33cc5c + _0x4e4486 == _0x17f520) {
              _0x383ab7();
            }
          };
        });
        _0x4745ad.onerror = _0xe5de81;
      };
      _0x11009c.onerror = _0xe5de81;
    },
    "loadFilesFromDB": function (_0x3ebddd, _0x3f3faa, _0x4d559a) {
      _0x3f3faa = _0x3f3faa || function () {};
      _0x4d559a = _0x4d559a || function () {};
      var _0x1b98df = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      try {
        var _0x4cff68 = _0x1b98df.open("EM_FS_" + window.location.pathname, 0x14);
      } catch (_0x243870) {
        return _0x4d559a(_0x243870);
      }
      _0x4cff68.onupgradeneeded = _0x4d559a;
      _0x4cff68.onsuccess = function _0x4aec96() {
        var _0x1a593d = _0x4cff68.result;
        try {
          var _0x2bc852 = _0x1a593d.transaction(["FILE_DATA"], "readonly");
        } catch (_0x378da1) {
          _0x4d559a(_0x378da1);
          return;
        }
        var _0x12da32 = _0x2bc852.objectStore("FILE_DATA");
        var _0x419712 = 0x0;
        var _0x5ba19f = 0x0;
        var _0x544488 = _0x3ebddd.length;
        function _0x2c6d8e() {
          if (_0x5ba19f == 0x0) {
            _0x3f3faa();
          } else {
            _0x4d559a();
          }
        }
        _0x3ebddd.forEach(function (_0x16fce6) {
          var _0x577b8b = _0x12da32.get(_0x16fce6);
          _0x577b8b.onsuccess = function _0x1a4aed() {
            if (_0x363740.analyzePath(_0x16fce6).exists) {
              _0x363740.unlink(_0x16fce6);
            }
            _0x363740.createDataFile(_0x318011.dirname(_0x16fce6), _0x318011.basename(_0x16fce6), _0x577b8b.result, true, true, true);
            _0x419712++;
            if (_0x419712 + _0x5ba19f == _0x544488) {
              _0x2c6d8e();
            }
          };
          _0x577b8b.onerror = function _0x58fb6a() {
            _0x5ba19f++;
            if (_0x419712 + _0x5ba19f == _0x544488) {
              _0x2c6d8e();
            }
          };
        });
        _0x2bc852.onerror = _0x4d559a;
      };
      _0x4cff68.onerror = _0x4d559a;
    }
  };
  var _0x5506a2 = {
    "mappings": {},
    "DEFAULT_POLLMASK": 0x5,
    "umask": 0x1ff,
    "calculateAt": function (_0x31f89f, _0x4f1bf4, _0x2e9d93) {
      if (_0x4f1bf4[0x0] === "/") {
        return _0x4f1bf4;
      }
      var _0x348c63;
      if (_0x31f89f === -0x64) {
        _0x348c63 = "/";
      } else {
        var _0x16c65c = _0x363740.streams[_0x31f89f];
        if (!_0x16c65c) {
          throw new null(0x8);
        }
        _0x348c63 = _0x16c65c.path;
      }
      if (_0x4f1bf4.length == 0x0) {
        if (!_0x2e9d93) {
          throw new null(0x2c);
        }
        return _0x348c63;
      }
      return _0x318011.normalize(_0x348c63 + "/" + _0x4f1bf4);
    },
    "doStat": function (_0x4b5b0b, _0x206e01, _0x528919) {
      try {
        var _0x2e02e8 = _0x4b5b0b(_0x206e01);
      } catch (_0x52e441) {
        if (_0x52e441 && _0x52e441.node && _0x318011.normalize(_0x206e01) !== _0x318011.normalize(_0x363740.getPath(_0x52e441.node))) {
          return -0x36;
        }
        throw _0x52e441;
      }
      _0x2ec55e[_0x528919 >> 0x2] = _0x2e02e8.dev;
      _0x2ec55e[_0x528919 + 0x4 >> 0x2] = 0x0;
      _0x2ec55e[_0x528919 + 0x8 >> 0x2] = _0x2e02e8.ino;
      _0x2ec55e[_0x528919 + 0xc >> 0x2] = _0x2e02e8.mode;
      _0x2ec55e[_0x528919 + 0x10 >> 0x2] = _0x2e02e8.nlink;
      _0x2ec55e[_0x528919 + 0x14 >> 0x2] = _0x2e02e8.uid;
      _0x2ec55e[_0x528919 + 0x18 >> 0x2] = _0x2e02e8.gid;
      _0x2ec55e[_0x528919 + 0x1c >> 0x2] = _0x2e02e8.rdev;
      _0x2ec55e[_0x528919 + 0x20 >> 0x2] = 0x0;
      _0x1996d9 = _0x2e02e8.size;
      _0x4b3d6f = [_0x2e02e8.size >>> 0x0, +Math.abs(_0x1996d9) >= 0x1 ? _0x1996d9 > 0x0 ? (Math.min(+Math.floor(_0x1996d9 / 0x100000000), 0xffffffff) | 0x0) >>> 0x0 : ~~+Math.ceil((_0x1996d9 - +(~~_0x1996d9 >>> 0x0)) / 0x100000000) >>> 0x0 : 0x0];
      _0x2ec55e[_0x528919 + 0x28 >> 0x2] = _0x4b3d6f[0x0];
      _0x2ec55e[_0x528919 + 0x2c >> 0x2] = _0x4b3d6f[0x1];
      _0x2ec55e[_0x528919 + 0x30 >> 0x2] = 0x1000;
      _0x2ec55e[_0x528919 + 0x34 >> 0x2] = _0x2e02e8.blocks;
      _0x2ec55e[_0x528919 + 0x38 >> 0x2] = _0x2e02e8.atime.getTime() / 0x3e8 | 0x0;
      _0x2ec55e[_0x528919 + 0x3c >> 0x2] = 0x0;
      _0x2ec55e[_0x528919 + 0x40 >> 0x2] = _0x2e02e8.mtime.getTime() / 0x3e8 | 0x0;
      _0x2ec55e[_0x528919 + 0x44 >> 0x2] = 0x0;
      _0x2ec55e[_0x528919 + 0x48 >> 0x2] = _0x2e02e8.ctime.getTime() / 0x3e8 | 0x0;
      _0x2ec55e[_0x528919 + 0x4c >> 0x2] = 0x0;
      _0x1996d9 = _0x2e02e8.ino;
      _0x4b3d6f = [_0x2e02e8.ino >>> 0x0, +Math.abs(_0x1996d9) >= 0x1 ? _0x1996d9 > 0x0 ? (Math.min(+Math.floor(_0x1996d9 / 0x100000000), 0xffffffff) | 0x0) >>> 0x0 : ~~+Math.ceil((_0x1996d9 - +(~~_0x1996d9 >>> 0x0)) / 0x100000000) >>> 0x0 : 0x0];
      _0x2ec55e[_0x528919 + 0x50 >> 0x2] = _0x4b3d6f[0x0];
      _0x2ec55e[_0x528919 + 0x54 >> 0x2] = _0x4b3d6f[0x1];
      return 0x0;
    },
    "doMsync": function (_0x40944c, _0x12d909, _0x3c802a, _0x338f63, _0x317442) {
      var _0x4eeeb7 = _0x443a6b.slice(_0x40944c, _0x40944c + _0x3c802a);
      _0x363740.msync(_0x12d909, _0x4eeeb7, _0x317442, _0x3c802a, _0x338f63);
    },
    "doMkdir": function (_0x5a5ad3, _0x153182) {
      _0x5a5ad3 = _0x318011.normalize(_0x5a5ad3);
      if (_0x5a5ad3[_0x5a5ad3.length - 0x1] === "/") {
        _0x5a5ad3 = _0x5a5ad3.substr(0x0, _0x5a5ad3.length - 0x1);
      }
      _0x363740.mkdir(_0x5a5ad3, _0x153182, 0x0);
      return 0x0;
    },
    "doMknod": function (_0xec4e54, _0x5ac18e, _0x137449) {
      switch (_0x5ac18e & 0xf000) {
        case 0x8000:
        case 0x2000:
        case 0x6000:
        case 0x1000:
        case 0xc000:
          break;
        default:
          return -0x1c;
      }
      _0x363740.mknod(_0xec4e54, _0x5ac18e, _0x137449);
      return 0x0;
    },
    "doReadlink": function (_0x1ca05c, _0x37c949, _0x5dbbc7) {
      if (_0x5dbbc7 <= 0x0) {
        return -0x1c;
      }
      var _0x15be42 = _0x363740.readlink(_0x1ca05c);
      var _0x49aa77 = Math.min(_0x5dbbc7, _0x35ce1(_0x15be42));
      var _0x18663b = _0x5dcf40[_0x37c949 + _0x49aa77];
      _0x58221b(_0x15be42, _0x443a6b, _0x37c949, _0x5dbbc7 + 0x1);
      _0x5dcf40[_0x37c949 + _0x49aa77] = _0x18663b;
      return _0x49aa77;
    },
    "doAccess": function (_0x2a69d1, _0x6027ec) {
      if (_0x6027ec & -8) {
        return -0x1c;
      }
      var _0x2f7095;
      var _0x2c2134 = _0x363740.lookupPath(_0x2a69d1, {
        "follow": true
      });
      _0x2f7095 = _0x2c2134.node;
      if (!_0x2f7095) {
        return -0x2c;
      }
      var _0x228839 = '';
      if (_0x6027ec & 0x4) {
        _0x228839 += "r";
      }
      if (_0x6027ec & 0x2) {
        _0x228839 += "w";
      }
      if (_0x6027ec & 0x1) {
        _0x228839 += "x";
      }
      if (_0x228839 && _0x363740.nodePermissions(_0x2f7095, _0x228839)) {
        return -0x2;
      }
      return 0x0;
    },
    "doDup": function (_0x2c1929, _0xfa03ca, _0xa07c56) {
      var _0x2bd409 = _0x363740.streams[_0xa07c56];
      if (_0x2bd409) {
        _0x363740.close(_0x2bd409);
      }
      return _0x363740.open(_0x2c1929, _0xfa03ca, 0x0, _0xa07c56, _0xa07c56).fd;
    },
    "doReadv": function (_0x5e294a, _0x26c3b6, _0x5a887d, _0x2d8a2b) {
      var _0x26ce9c = 0x0;
      for (var _0x1a116d = 0x0; _0x1a116d < _0x5a887d; _0x1a116d++) {
        var _0x27d84a = _0x2ec55e[_0x26c3b6 + _0x1a116d * 0x8 >> 0x2];
        var _0x23317e = _0x2ec55e[_0x26c3b6 + (_0x1a116d * 0x8 + 0x4) >> 0x2];
        var _0x2d5010 = _0x363740.read(_0x5e294a, _0x5dcf40, _0x27d84a, _0x23317e, _0x2d8a2b);
        if (_0x2d5010 < 0x0) {
          return -0x1;
        }
        _0x26ce9c += _0x2d5010;
        if (_0x2d5010 < _0x23317e) {
          break;
        }
      }
      return _0x26ce9c;
    },
    "doWritev": function (_0x2ac24e, _0x285639, _0x2b6d48, _0x10cd42) {
      var _0xa546ee = 0x0;
      for (var _0x282dea = 0x0; _0x282dea < _0x2b6d48; _0x282dea++) {
        var _0x3153b = _0x2ec55e[_0x285639 + _0x282dea * 0x8 >> 0x2];
        var _0x191b9b = _0x2ec55e[_0x285639 + (_0x282dea * 0x8 + 0x4) >> 0x2];
        var _0x36a9cb = _0x363740.write(_0x2ac24e, _0x5dcf40, _0x3153b, _0x191b9b, _0x10cd42);
        if (_0x36a9cb < 0x0) {
          return -0x1;
        }
        _0xa546ee += _0x36a9cb;
      }
      return _0xa546ee;
    },
    "varargs": undefined,
    "get": function () {
      _0x5506a2.varargs += 0x4;
      var _0x21adc9 = _0x2ec55e[_0x5506a2.varargs - 0x4 >> 0x2];
      return _0x21adc9;
    },
    "getStr": function (_0x4106d8) {
      var _0x4570b0 = _0x4106d8 ? _0x30b35d(_0x443a6b, _0x4106d8, undefined) : '';
      return _0x4570b0;
    },
    "getStreamFromFD": function (_0x3086e9) {
      var _0x12d7c6 = _0x363740.streams[_0x3086e9];
      if (!_0x12d7c6) {
        throw new null(0x8);
      }
      return _0x12d7c6;
    },
    "get64": function (_0x315d6e, _0x9b70e0) {
      return _0x315d6e;
    }
  };
  var _0x3a7c84 = {
    "mount": function (_0x9c35fa) {
      _0x3e26fa.websocket = _0x3e26fa.websocket && "object" === typeof _0x3e26fa.websocket ? _0x3e26fa.websocket : {};
      _0x3e26fa.websocket._callbacks = {};
      _0x3e26fa.websocket.on = function (_0x4c94a1, _0x5055e7) {
        if ("function" === typeof _0x5055e7) {
          this._callbacks[_0x4c94a1] = _0x5055e7;
        }
        return this;
      };
      _0x3e26fa.websocket.emit = function (_0x480b72, _0x5b0bbf) {
        if ("function" === typeof this._callbacks[_0x480b72]) {
          this._callbacks[_0x480b72].call(this, _0x5b0bbf);
        }
      };
      return _0x363740.createNode(null, "/", 16895, 0x0);
    },
    "createSocket": function (_0x451b5f, _0x245366, _0xa913a) {
      _0x245366 &= -526337;
      var _0x10ca27 = _0x245366 == 0x1;
      if (_0xa913a) {
        _0x47fd96(_0x10ca27 == (_0xa913a == 0x6));
      }
      var _0x2d296c = {
        "family": _0x451b5f,
        "type": _0x245366,
        "protocol": _0xa913a,
        "server": null,
        "error": null,
        "peers": {},
        "pending": [],
        "recv_queue": [],
        "sock_ops": _0x3a7c84.websocket_sock_ops
      };
      var _0x25015e = _0x3a7c84.nextname();
      var _0x3e8a94 = _0x363740.createNode(_0x3a7c84.root, _0x25015e, 0xc000, 0x0);
      _0x3e8a94.sock = _0x2d296c;
      var _0x36ef04 = _0x363740.createStream({
        "path": _0x25015e,
        "node": _0x3e8a94,
        "flags": 0x2,
        "seekable": false,
        "stream_ops": _0x3a7c84.stream_ops
      });
      _0x2d296c.stream = _0x36ef04;
      return _0x2d296c;
    },
    "getSocket": function (_0x10fa4c) {
      var _0x1298eb = _0x363740.streams[_0x10fa4c];
      if (!_0x1298eb || !((_0x1298eb.node.mode & 0xc000) === 0xc000)) {
        return null;
      }
      return _0x1298eb.node.sock;
    },
    "stream_ops": {
      "poll": function (_0x525829) {
        var _0x5916b7 = _0x525829.node.sock;
        return _0x5916b7.sock_ops.poll(_0x5916b7);
      },
      "ioctl": function (_0x359ca1, _0x70d6b3, _0x37b494) {
        var _0x4e4913 = _0x359ca1.node.sock;
        return _0x4e4913.sock_ops.ioctl(_0x4e4913, _0x70d6b3, _0x37b494);
      },
      "read": function (_0x4f8e15, _0x1e4206, _0x3d5883, _0xd05ab2, _0x15ae81) {
        var _0xa4eb76 = _0x4f8e15.node.sock;
        var _0x5e46c5 = _0xa4eb76.sock_ops.recvmsg(_0xa4eb76, _0xd05ab2);
        if (!_0x5e46c5) {
          return 0x0;
        }
        _0x1e4206.set(_0x5e46c5.buffer, _0x3d5883);
        return _0x5e46c5.buffer.length;
      },
      "write": function (_0x544756, _0x498194, _0x403b60, _0x53bb6f, _0x2a139b) {
        var _0xe76195 = _0x544756.node.sock;
        return _0xe76195.sock_ops.sendmsg(_0xe76195, _0x498194, _0x403b60, _0x53bb6f);
      },
      "close": function (_0x5be802) {
        var _0x4da420 = _0x5be802.node.sock;
        _0x4da420.sock_ops.close(_0x4da420);
      }
    },
    "nextname": function () {
      if (!_0x3a7c84.nextname.current) {
        _0x3a7c84.nextname.current = 0x0;
      }
      return "socket[" + _0x3a7c84.nextname.current++ + "]";
    },
    "websocket_sock_ops": {
      "createPeer": function (_0x185729, _0x5c2797, _0x364c75) {
        var _0x3ed6e6;
        if (typeof _0x5c2797 === "object") {
          _0x3ed6e6 = _0x5c2797;
          _0x5c2797 = null;
          _0x364c75 = null;
        }
        if (_0x3ed6e6) {
          if (_0x3ed6e6._socket) {
            _0x5c2797 = _0x3ed6e6._socket.remoteAddress;
            _0x364c75 = _0x3ed6e6._socket.remotePort;
          } else {
            var _0x57f669 = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x3ed6e6.url);
            if (!_0x57f669) {
              throw new Error("WebSocket URL must be in the format ws(s)://address:port");
            }
            _0x5c2797 = _0x57f669[0x1];
            _0x364c75 = parseInt(_0x57f669[0x2], 0xa);
          }
        } else {
          try {
            var _0x3234df = _0x3e26fa.websocket && "object" === typeof _0x3e26fa.websocket;
            var _0x5611da = "ws:#".replace("#", "//");
            if (_0x3234df) {
              if ("string" === typeof _0x3e26fa.websocket.url) {
                _0x5611da = _0x3e26fa.websocket.url;
              }
            }
            if (_0x5611da === "ws://" || _0x5611da === "wss://") {
              var _0x50a771 = _0x5c2797.split("/");
              _0x5611da = _0x5611da + _0x50a771[0x0] + ":" + _0x364c75 + "/" + _0x50a771.slice(0x1).join("/");
            }
            var _0x383e4e = "binary";
            if (_0x3234df) {
              if ("string" === typeof _0x3e26fa.websocket.subprotocol) {
                _0x383e4e = _0x3e26fa.websocket.subprotocol;
              }
            }
            var _0x4a4dfe = undefined;
            if (_0x383e4e !== "null") {
              _0x383e4e = _0x383e4e.replace(/^ +| +$/g, '').split(/ *, */);
              _0x4a4dfe = _0x1f12a4 ? {
                "protocol": _0x383e4e.toString()
              } : _0x383e4e;
            }
            if (_0x3234df && null === _0x3e26fa.websocket.subprotocol) {
              _0x383e4e = "null";
              _0x4a4dfe = undefined;
            }
            var _0x4bdffc;
            if (_0x1f12a4) {
              _0x4bdffc = require("ws");
            } else {
              _0x4bdffc = WebSocket;
            }
            _0x3ed6e6 = new _0x4bdffc(_0x5611da, _0x4a4dfe);
            _0x3ed6e6.binaryType = "arraybuffer";
          } catch (_0xb590c9) {
            throw new null(0x17);
          }
        }
        var _0x3d7a98 = {
          "addr": _0x5c2797,
          "port": _0x364c75,
          "socket": _0x3ed6e6,
          "dgram_send_queue": []
        };
        _0x3a7c84.websocket_sock_ops.addPeer(_0x185729, _0x3d7a98);
        _0x3a7c84.websocket_sock_ops.handlePeerEvents(_0x185729, _0x3d7a98);
        if (_0x185729.type === 0x2 && typeof _0x185729.sport !== "undefined") {
          _0x3d7a98.dgram_send_queue.push(new Uint8Array([0xff, 0xff, 0xff, 0xff, "p".charCodeAt(0x0), "o".charCodeAt(0x0), "r".charCodeAt(0x0), "t".charCodeAt(0x0), (_0x185729.sport & 0xff00) >> 0x8, _0x185729.sport & 0xff]));
        }
        return _0x3d7a98;
      },
      "getPeer": function (_0xd16914, _0x3a2660, _0x4f61aa) {
        return _0xd16914.peers[_0x3a2660 + ":" + _0x4f61aa];
      },
      "addPeer": function (_0x2474d7, _0x78650f) {
        _0x2474d7.peers[_0x78650f.addr + ":" + _0x78650f.port] = _0x78650f;
      },
      "removePeer": function (_0x463bc6, _0x3b14b1) {
        delete _0x463bc6.peers[_0x3b14b1.addr + ":" + _0x3b14b1.port];
      },
      "handlePeerEvents": function (_0x548da7, _0x13d57c) {
        var _0x53e240 = true;
        var _0x4c1fe0 = function () {
          _0x3e26fa.websocket.emit("open", _0x548da7.stream.fd);
          try {
            var _0x56eebb = _0x13d57c.dgram_send_queue.shift();
            while (_0x56eebb) {
              _0x13d57c.socket.send(_0x56eebb);
              _0x56eebb = _0x13d57c.dgram_send_queue.shift();
            }
          } catch (_0xf2ee70) {
            _0x13d57c.socket.close();
          }
        };
        function _0x36d9c1(_0x1e92f8) {
          if (typeof _0x1e92f8 === "string") {
            var _0x504f70 = new TextEncoder();
            _0x1e92f8 = _0x504f70.encode(_0x1e92f8);
          } else {
            _0x47fd96(_0x1e92f8.byteLength !== undefined);
            if (_0x1e92f8.byteLength == 0x0) {
              return;
            } else {
              _0x1e92f8 = new Uint8Array(_0x1e92f8);
            }
          }
          var _0x2449f4 = _0x53e240;
          _0x53e240 = false;
          if (_0x2449f4 && _0x1e92f8.length === 0xa && _0x1e92f8[0x0] === 0xff && _0x1e92f8[0x1] === 0xff && _0x1e92f8[0x2] === 0xff && _0x1e92f8[0x3] === 0xff && _0x1e92f8[0x4] === "p".charCodeAt(0x0) && _0x1e92f8[0x5] === "o".charCodeAt(0x0) && _0x1e92f8[0x6] === "r".charCodeAt(0x0) && _0x1e92f8[0x7] === "t".charCodeAt(0x0)) {
            var _0x2595f3 = _0x1e92f8[0x8] << 0x8 | _0x1e92f8[0x9];
            _0x3a7c84.websocket_sock_ops.removePeer(_0x548da7, _0x13d57c);
            _0x13d57c.port = _0x2595f3;
            _0x3a7c84.websocket_sock_ops.addPeer(_0x548da7, _0x13d57c);
            return;
          }
          _0x548da7.recv_queue.push({
            "addr": _0x13d57c.addr,
            "port": _0x13d57c.port,
            "data": _0x1e92f8
          });
          _0x3e26fa.websocket.emit("message", _0x548da7.stream.fd);
        }
        if (_0x1f12a4) {
          _0x13d57c.socket.on("open", _0x4c1fe0);
          _0x13d57c.socket.on("message", function (_0x2fa739, _0x897809) {
            if (!_0x897809.binary) {
              return;
            }
            _0x36d9c1(new Uint8Array(_0x2fa739).buffer);
          });
          _0x13d57c.socket.on("close", function () {
            _0x3e26fa.websocket.emit("close", _0x548da7.stream.fd);
          });
          _0x13d57c.socket.on("error", function (_0x20eee8) {
            _0x548da7.error = 0xe;
            _0x3e26fa.websocket.emit("error", [_0x548da7.stream.fd, _0x548da7.error, "ECONNREFUSED: Connection refused"]);
          });
        } else {
          _0x13d57c.socket.onopen = _0x4c1fe0;
          _0x13d57c.socket.onclose = function () {
            _0x3e26fa.websocket.emit("close", _0x548da7.stream.fd);
          };
          _0x13d57c.socket.onmessage = function _0x45e0e3(_0x3d1201) {
            _0x36d9c1(_0x3d1201.data);
          };
          _0x13d57c.socket.onerror = function (_0x213669) {
            _0x548da7.error = 0xe;
            _0x3e26fa.websocket.emit("error", [_0x548da7.stream.fd, _0x548da7.error, "ECONNREFUSED: Connection refused"]);
          };
        }
      },
      "poll": function (_0x16957b) {
        if (_0x16957b.type === 0x1 && _0x16957b.server) {
          return _0x16957b.pending.length ? 65 : 0x0;
        }
        var _0x804572 = 0x0;
        var _0x8f6178 = _0x16957b.type === 0x1 ? _0x3a7c84.websocket_sock_ops.getPeer(_0x16957b, _0x16957b.daddr, _0x16957b.dport) : null;
        if (_0x16957b.recv_queue.length || !_0x8f6178 || _0x8f6178 && _0x8f6178.socket.readyState === _0x8f6178.socket.CLOSING || _0x8f6178 && _0x8f6178.socket.readyState === _0x8f6178.socket.CLOSED) {
          _0x804572 |= 65;
        }
        if (!_0x8f6178 || _0x8f6178 && _0x8f6178.socket.readyState === _0x8f6178.socket.OPEN) {
          _0x804572 |= 0x4;
        }
        if (_0x8f6178 && _0x8f6178.socket.readyState === _0x8f6178.socket.CLOSING || _0x8f6178 && _0x8f6178.socket.readyState === _0x8f6178.socket.CLOSED) {
          _0x804572 |= 0x10;
        }
        return _0x804572;
      },
      "ioctl": function (_0x169f83, _0x28e126, _0x57cecf) {
        switch (_0x28e126) {
          case 0x541b:
            var _0x16e218 = 0x0;
            if (_0x169f83.recv_queue.length) {
              _0x16e218 = _0x169f83.recv_queue[0x0].data.length;
            }
            _0x2ec55e[_0x57cecf >> 0x2] = _0x16e218;
            return 0x0;
          default:
            return 0x1c;
        }
      },
      "close": function (_0x37928c) {
        if (_0x37928c.server) {
          try {
            _0x37928c.server.close();
          } catch (_0x24da8c) {}
          _0x37928c.server = null;
        }
        var _0x4dd95a = Object.keys(_0x37928c.peers);
        for (var _0x38e89e = 0x0; _0x38e89e < _0x4dd95a.length; _0x38e89e++) {
          var _0x1427a8 = _0x37928c.peers[_0x4dd95a[_0x38e89e]];
          try {
            _0x1427a8.socket.close();
          } catch (_0x1ad05e) {}
          _0x3a7c84.websocket_sock_ops.removePeer(_0x37928c, _0x1427a8);
        }
        return 0x0;
      },
      "bind": function (_0x3b5430, _0x564681, _0x23e8a4) {
        if (typeof _0x3b5430.saddr !== "undefined" || typeof _0x3b5430.sport !== "undefined") {
          throw new null(0x1c);
        }
        _0x3b5430.saddr = _0x564681;
        _0x3b5430.sport = _0x23e8a4;
        if (_0x3b5430.type === 0x2) {
          if (_0x3b5430.server) {
            _0x3b5430.server.close();
            _0x3b5430.server = null;
          }
          try {
            _0x3b5430.sock_ops.listen(_0x3b5430, 0x0);
          } catch (_0x4bd8a4) {
            if (!(_0x4bd8a4 instanceof null)) {
              throw _0x4bd8a4;
            }
            if (_0x4bd8a4.errno !== 0x8a) {
              throw _0x4bd8a4;
            }
          }
        }
      },
      "connect": function (_0xd6080b, _0x1d9df1, _0x4e3734) {
        if (_0xd6080b.server) {
          throw new null(0x8a);
        }
        if (typeof _0xd6080b.daddr !== "undefined" && typeof _0xd6080b.dport !== "undefined") {
          var _0x37759d = _0x3a7c84.websocket_sock_ops.getPeer(_0xd6080b, _0xd6080b.daddr, _0xd6080b.dport);
          if (_0x37759d) {
            if (_0x37759d.socket.readyState === _0x37759d.socket.CONNECTING) {
              throw new null(0x7);
            } else {
              throw new null(0x1e);
            }
          }
        }
        var _0x252749 = _0x3a7c84.websocket_sock_ops.createPeer(_0xd6080b, _0x1d9df1, _0x4e3734);
        _0xd6080b.daddr = _0x252749.addr;
        _0xd6080b.dport = _0x252749.port;
        throw new null(0x1a);
      },
      "listen": function (_0x35286d, _0x33d70b) {
        if (!_0x1f12a4) {
          throw new null(0x8a);
        }
        if (_0x35286d.server) {
          throw new null(0x1c);
        }
        var _0x359ddc = require("ws").Server;
        var _0x5d8ff6 = _0x35286d.saddr;
        _0x35286d.server = new _0x359ddc({
          "host": _0x5d8ff6,
          "port": _0x35286d.sport
        });
        _0x3e26fa.websocket.emit("listen", _0x35286d.stream.fd);
        _0x35286d.server.on("connection", function (_0x1fa50e) {
          if (_0x35286d.type === 0x1) {
            var _0x3fa1d9 = _0x3a7c84.createSocket(_0x35286d.family, _0x35286d.type, _0x35286d.protocol);
            var _0x319e74 = _0x3a7c84.websocket_sock_ops.createPeer(_0x3fa1d9, _0x1fa50e);
            _0x3fa1d9.daddr = _0x319e74.addr;
            _0x3fa1d9.dport = _0x319e74.port;
            _0x35286d.pending.push(_0x3fa1d9);
            _0x3e26fa.websocket.emit("connection", _0x3fa1d9.stream.fd);
          } else {
            _0x3a7c84.websocket_sock_ops.createPeer(_0x35286d, _0x1fa50e);
            _0x3e26fa.websocket.emit("connection", _0x35286d.stream.fd);
          }
        });
        _0x35286d.server.on("closed", function () {
          _0x3e26fa.websocket.emit("close", _0x35286d.stream.fd);
          _0x35286d.server = null;
        });
        _0x35286d.server.on("error", function (_0x3f6bfd) {
          _0x35286d.error = 0x17;
          _0x3e26fa.websocket.emit("error", [_0x35286d.stream.fd, _0x35286d.error, "EHOSTUNREACH: Host is unreachable"]);
        });
      },
      "accept": function (_0x3841b4) {
        if (!_0x3841b4.server) {
          throw new null(0x1c);
        }
        var _0x141fe3 = _0x3841b4.pending.shift();
        _0x141fe3.stream.flags = _0x3841b4.stream.flags;
        return _0x141fe3;
      },
      "getname": function (_0x1beda1, _0x598097) {
        var _0x943748;
        var _0x4e29e0;
        if (_0x598097) {
          if (_0x1beda1.daddr === undefined || _0x1beda1.dport === undefined) {
            throw new null(0x35);
          }
          _0x943748 = _0x1beda1.daddr;
          _0x4e29e0 = _0x1beda1.dport;
        } else {
          _0x943748 = _0x1beda1.saddr || 0x0;
          _0x4e29e0 = _0x1beda1.sport || 0x0;
        }
        return {
          "addr": _0x943748,
          "port": _0x4e29e0
        };
      },
      "sendmsg": function (_0x5e5799, _0x40d81f, _0x58ee34, _0x1a877f, _0x4b2870, _0x287f9f) {
        if (_0x5e5799.type === 0x2) {
          if (_0x4b2870 === undefined || _0x287f9f === undefined) {
            _0x4b2870 = _0x5e5799.daddr;
            _0x287f9f = _0x5e5799.dport;
          }
          if (_0x4b2870 === undefined || _0x287f9f === undefined) {
            throw new null(0x11);
          }
        } else {
          _0x4b2870 = _0x5e5799.daddr;
          _0x287f9f = _0x5e5799.dport;
        }
        var _0x29a0c1 = _0x3a7c84.websocket_sock_ops.getPeer(_0x5e5799, _0x4b2870, _0x287f9f);
        if (_0x5e5799.type === 0x1) {
          if (!_0x29a0c1 || _0x29a0c1.socket.readyState === _0x29a0c1.socket.CLOSING || _0x29a0c1.socket.readyState === _0x29a0c1.socket.CLOSED) {
            throw new null(0x35);
          } else {
            if (_0x29a0c1.socket.readyState === _0x29a0c1.socket.CONNECTING) {
              throw new null(0x6);
            }
          }
        }
        if (ArrayBuffer.isView(_0x40d81f)) {
          _0x58ee34 += _0x40d81f.byteOffset;
          _0x40d81f = _0x40d81f.buffer;
        }
        var _0x165f6b;
        _0x165f6b = _0x40d81f.slice(_0x58ee34, _0x58ee34 + _0x1a877f);
        if (_0x5e5799.type === 0x2) {
          if (!_0x29a0c1 || _0x29a0c1.socket.readyState !== _0x29a0c1.socket.OPEN) {
            if (!_0x29a0c1 || _0x29a0c1.socket.readyState === _0x29a0c1.socket.CLOSING || _0x29a0c1.socket.readyState === _0x29a0c1.socket.CLOSED) {
              _0x29a0c1 = _0x3a7c84.websocket_sock_ops.createPeer(_0x5e5799, _0x4b2870, _0x287f9f);
            }
            _0x29a0c1.dgram_send_queue.push(_0x165f6b);
            return _0x1a877f;
          }
        }
        try {
          _0x29a0c1.socket.send(_0x165f6b);
          return _0x1a877f;
        } catch (_0x5c96f9) {
          throw new null(0x1c);
        }
      },
      "recvmsg": function (_0x202034, _0x53d013) {
        if (_0x202034.type === 0x1 && _0x202034.server) {
          throw new null(0x35);
        }
        var _0x532f3c = _0x202034.recv_queue.shift();
        if (!_0x532f3c) {
          if (_0x202034.type === 0x1) {
            var _0x3c0423 = _0x3a7c84.websocket_sock_ops.getPeer(_0x202034, _0x202034.daddr, _0x202034.dport);
            if (!_0x3c0423) {
              throw new null(0x35);
            } else {
              if (_0x3c0423.socket.readyState === _0x3c0423.socket.CLOSING || _0x3c0423.socket.readyState === _0x3c0423.socket.CLOSED) {
                return null;
              } else {
                throw new null(0x6);
              }
            }
          } else {
            throw new null(0x6);
          }
        }
        var _0x2cb912 = _0x532f3c.data.byteLength || _0x532f3c.data.length;
        var _0x5887c7 = _0x532f3c.data.byteOffset || 0x0;
        var _0x5b29f2 = _0x532f3c.data.buffer || _0x532f3c.data;
        var _0x40c3f8 = Math.min(_0x53d013, _0x2cb912);
        var _0x273259 = {
          "buffer": new Uint8Array(_0x5b29f2, _0x5887c7, _0x40c3f8),
          "addr": _0x532f3c.addr,
          "port": _0x532f3c.port
        };
        if (_0x202034.type === 0x1 && _0x40c3f8 < _0x2cb912) {
          var _0xc87e9e = _0x2cb912 - _0x40c3f8;
          _0x532f3c.data = new Uint8Array(_0x5b29f2, _0x5887c7 + _0x40c3f8, _0xc87e9e);
          _0x202034.recv_queue.unshift(_0x532f3c);
        }
        return _0x273259;
      }
    }
  };
  function _0x58fe42(_0x5a6bf4) {
    var _0x4d3d97 = _0x5a6bf4.split(".");
    for (var _0x4bc33d = 0x0; _0x4bc33d < 0x4; _0x4bc33d++) {
      var _0x433546 = Number(_0x4d3d97[_0x4bc33d]);
      if (isNaN(_0x433546)) {
        return null;
      }
      _0x4d3d97[_0x4bc33d] = _0x433546;
    }
    return (_0x4d3d97[0x0] | _0x4d3d97[0x1] << 0x8 | _0x4d3d97[0x2] << 0x10 | _0x4d3d97[0x3] << 0x18) >>> 0x0;
  }
  function _0x2e4ab5(_0x4b505b) {
    var _0x10a2fe;
    var _0x1bb1f9;
    var _0x5c53e4;
    var _0x296697;
    var _0x344ffd = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    var _0x542987 = [];
    if (!_0x344ffd.test(_0x4b505b)) {
      return null;
    }
    if (_0x4b505b === "::") {
      return [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
    }
    if (_0x4b505b.startsWith("::")) {
      _0x4b505b = _0x4b505b.replace("::", "Z:");
    } else {
      _0x4b505b = _0x4b505b.replace("::", ":Z:");
    }
    if (_0x4b505b.indexOf(".") > 0x0) {
      _0x4b505b = _0x4b505b.replace(new RegExp("[.]", "g"), ":");
      _0x10a2fe = _0x4b505b.split(":");
      _0x10a2fe[_0x10a2fe.length - 0x4] = parseInt(_0x10a2fe[_0x10a2fe.length - 0x4]) + parseInt(_0x10a2fe[_0x10a2fe.length - 0x3]) * 0x100;
      _0x10a2fe[_0x10a2fe.length - 0x3] = parseInt(_0x10a2fe[_0x10a2fe.length - 0x2]) + parseInt(_0x10a2fe[_0x10a2fe.length - 0x1]) * 0x100;
      _0x10a2fe = _0x10a2fe.slice(0x0, _0x10a2fe.length - 0x2);
    } else {
      _0x10a2fe = _0x4b505b.split(":");
    }
    _0x5c53e4 = 0x0;
    _0x296697 = 0x0;
    for (_0x1bb1f9 = 0x0; _0x1bb1f9 < _0x10a2fe.length; _0x1bb1f9++) {
      if (typeof _0x10a2fe[_0x1bb1f9] === "string") {
        if (_0x10a2fe[_0x1bb1f9] === "Z") {
          for (_0x296697 = 0x0; _0x296697 < 0x8 - _0x10a2fe.length + 0x1; _0x296697++) {
            _0x542987[_0x1bb1f9 + _0x296697] = 0x0;
          }
          _0x5c53e4 = _0x296697 - 0x1;
        } else {
          _0x542987[_0x1bb1f9 + _0x5c53e4] = _0x370566(parseInt(_0x10a2fe[_0x1bb1f9], 0x10));
        }
      } else {
        _0x542987[_0x1bb1f9 + _0x5c53e4] = _0x10a2fe[_0x1bb1f9];
      }
    }
    return [_0x542987[0x1] << 0x10 | _0x542987[0x0], _0x542987[0x3] << 0x10 | _0x542987[0x2], _0x542987[0x5] << 0x10 | _0x542987[0x4], _0x542987[0x7] << 0x10 | _0x542987[0x6]];
  }
  var _0x5e5d3d = {
    "address_map": {
      "id": 0x1,
      "addrs": {},
      "names": {}
    },
    "lookup_name": function (_0x2cd66d) {
      var _0x3025b5 = _0x58fe42(_0x2cd66d);
      if (_0x3025b5 !== null) {
        return _0x2cd66d;
      }
      _0x3025b5 = _0x2e4ab5(_0x2cd66d);
      if (_0x3025b5 !== null) {
        return _0x2cd66d;
      }
      var _0x11b6dd;
      if (_0x5e5d3d.address_map.addrs[_0x2cd66d]) {
        _0x11b6dd = _0x5e5d3d.address_map.addrs[_0x2cd66d];
      } else {
        var _0x41acf3 = _0x5e5d3d.address_map.id++;
        _0x47fd96(_0x41acf3 < 0xffff, "exceeded max address mappings of 65535");
        _0x11b6dd = "172.29." + (_0x41acf3 & 0xff) + "." + (_0x41acf3 & 0xff00);
        _0x5e5d3d.address_map.names[_0x11b6dd] = _0x2cd66d;
        _0x5e5d3d.address_map.addrs[_0x2cd66d] = _0x11b6dd;
      }
      return _0x11b6dd;
    },
    "lookup_addr": function (_0x4e2767) {
      if (_0x5e5d3d.address_map.names[_0x4e2767]) {
        return _0x5e5d3d.address_map.names[_0x4e2767];
      }
      return null;
    }
  };
  var _0x5c900e = {
    "BUCKET_BUFFER_SIZE": 0x2000,
    "mount": function (_0x55e063) {
      return _0x363740.createNode(null, "/", 16895, 0x0);
    },
    "createPipe": function () {
      var _0x5c7efb = {
        "buckets": []
      };
      _0x5c7efb.buckets.push({
        "buffer": new Uint8Array(0x2000),
        "offset": 0x0,
        "roffset": 0x0
      });
      var _0x3bbd5f = _0x5c900e.nextname();
      var _0x3173af = _0x5c900e.nextname();
      var _0x28d7a3 = _0x363740.createNode(_0x5c900e.root, _0x3bbd5f, 0x1000, 0x0);
      var _0x316a3a = _0x363740.createNode(_0x5c900e.root, _0x3173af, 0x1000, 0x0);
      _0x28d7a3.pipe = _0x5c7efb;
      _0x316a3a.pipe = _0x5c7efb;
      var _0x2d11c4 = _0x363740.createStream({
        "path": _0x3bbd5f,
        "node": _0x28d7a3,
        "flags": 0x0,
        "seekable": false,
        "stream_ops": _0x5c900e.stream_ops
      });
      _0x28d7a3.stream = _0x2d11c4;
      var _0xa0f59c = _0x363740.createStream({
        "path": _0x3173af,
        "node": _0x316a3a,
        "flags": 0x1,
        "seekable": false,
        "stream_ops": _0x5c900e.stream_ops
      });
      _0x316a3a.stream = _0xa0f59c;
      return {
        "readable_fd": _0x2d11c4.fd,
        "writable_fd": _0xa0f59c.fd
      };
    },
    "stream_ops": {
      "poll": function (_0x316432) {
        var _0x54c0d8 = _0x316432.node.pipe;
        if ((_0x316432.flags & 0x200003) === 0x1) {
          return 260;
        } else {
          if (_0x54c0d8.buckets.length > 0x0) {
            for (var _0x384c35 = 0x0; _0x384c35 < _0x54c0d8.buckets.length; _0x384c35++) {
              var _0x12fed5 = _0x54c0d8.buckets[_0x384c35];
              if (_0x12fed5.offset - _0x12fed5.roffset > 0x0) {
                return 65;
              }
            }
          }
        }
        return 0x0;
      },
      "ioctl": function (_0x3d26c8, _0x28b6e2, _0x5d9b20) {
        return 0x1c;
      },
      "fsync": function (_0x28df15) {
        return 0x1c;
      },
      "read": function (_0x1a4fbf, _0x1962bb, _0x38de11, _0x5755d3, _0x58f17f) {
        var _0x983913 = _0x1a4fbf.node.pipe;
        var _0x216323 = 0x0;
        for (var _0x76115d = 0x0; _0x76115d < _0x983913.buckets.length; _0x76115d++) {
          var _0x54200 = _0x983913.buckets[_0x76115d];
          _0x216323 += _0x54200.offset - _0x54200.roffset;
        }
        _0x47fd96(_0x1962bb instanceof ArrayBuffer || ArrayBuffer.isView(_0x1962bb));
        var _0x305d4c = _0x1962bb.subarray(_0x38de11, _0x38de11 + _0x5755d3);
        if (_0x5755d3 <= 0x0) {
          return 0x0;
        }
        if (_0x216323 == 0x0) {
          throw new null(0x6);
        }
        var _0x2f1bd1 = Math.min(_0x216323, _0x5755d3);
        var _0x4c7f17 = _0x2f1bd1;
        var _0x11d083 = 0x0;
        for (var _0x76115d = 0x0; _0x76115d < _0x983913.buckets.length; _0x76115d++) {
          var _0x12fbdc = _0x983913.buckets[_0x76115d];
          var _0x5a8174 = _0x12fbdc.offset - _0x12fbdc.roffset;
          if (_0x2f1bd1 <= _0x5a8174) {
            var _0x2c0093 = _0x12fbdc.buffer.subarray(_0x12fbdc.roffset, _0x12fbdc.offset);
            if (_0x2f1bd1 < _0x5a8174) {
              _0x2c0093 = _0x2c0093.subarray(0x0, _0x2f1bd1);
              _0x12fbdc.roffset += _0x2f1bd1;
            } else {
              _0x11d083++;
            }
            _0x305d4c.set(_0x2c0093);
            break;
          } else {
            var _0x2c0093 = _0x12fbdc.buffer.subarray(_0x12fbdc.roffset, _0x12fbdc.offset);
            _0x305d4c.set(_0x2c0093);
            _0x305d4c = _0x305d4c.subarray(_0x2c0093.byteLength);
            _0x2f1bd1 -= _0x2c0093.byteLength;
            _0x11d083++;
          }
        }
        if (_0x11d083 && _0x11d083 == _0x983913.buckets.length) {
          _0x11d083--;
          _0x983913.buckets[_0x11d083].offset = 0x0;
          _0x983913.buckets[_0x11d083].roffset = 0x0;
        }
        _0x983913.buckets.splice(0x0, _0x11d083);
        return _0x4c7f17;
      },
      "write": function (_0x3678ce, _0x334412, _0x5bf2ed, _0xc4673a, _0x3a2f83) {
        var _0x5b7665 = _0x3678ce.node.pipe;
        _0x47fd96(_0x334412 instanceof ArrayBuffer || ArrayBuffer.isView(_0x334412));
        var _0x5bebe4 = _0x334412.subarray(_0x5bf2ed, _0x5bf2ed + _0xc4673a);
        var _0x2ef47c = _0x5bebe4.byteLength;
        if (_0x2ef47c <= 0x0) {
          return 0x0;
        }
        var _0x160c65 = null;
        if (_0x5b7665.buckets.length == 0x0) {
          _0x160c65 = {
            "buffer": new Uint8Array(0x2000),
            "offset": 0x0,
            "roffset": 0x0
          };
          _0x5b7665.buckets.push(_0x160c65);
        } else {
          _0x160c65 = _0x5b7665.buckets[_0x5b7665.buckets.length - 0x1];
        }
        _0x47fd96(_0x160c65.offset <= 0x2000);
        var _0xd1fc32 = 0x2000 - _0x160c65.offset;
        if (_0xd1fc32 >= _0x2ef47c) {
          _0x160c65.buffer.set(_0x5bebe4, _0x160c65.offset);
          _0x160c65.offset += _0x2ef47c;
          return _0x2ef47c;
        } else if (_0xd1fc32 > 0x0) {
          _0x160c65.buffer.set(_0x5bebe4.subarray(0x0, _0xd1fc32), _0x160c65.offset);
          _0x160c65.offset += _0xd1fc32;
          _0x5bebe4 = _0x5bebe4.subarray(_0xd1fc32, _0x5bebe4.byteLength);
        }
        var _0x564cf0 = _0x5bebe4.byteLength / 0x2000 | 0x0;
        var _0x182995 = _0x5bebe4.byteLength % 0x2000;
        for (var _0x172ba3 = 0x0; _0x172ba3 < _0x564cf0; _0x172ba3++) {
          var _0xc86dff = {
            "buffer": new Uint8Array(0x2000),
            "offset": 0x2000,
            "roffset": 0x0
          };
          _0x5b7665.buckets.push(_0xc86dff);
          _0xc86dff.buffer.set(_0x5bebe4.subarray(0x0, 0x2000));
          _0x5bebe4 = _0x5bebe4.subarray(0x2000, _0x5bebe4.byteLength);
        }
        if (_0x182995 > 0x0) {
          var _0xc86dff = {
            "buffer": new Uint8Array(0x2000),
            "offset": _0x5bebe4.byteLength,
            "roffset": 0x0
          };
          _0x5b7665.buckets.push(_0xc86dff);
          _0xc86dff.buffer.set(_0x5bebe4);
        }
        return _0x2ef47c;
      },
      "close": function (_0x2c804e) {
        var _0x5e887c = _0x2c804e.node.pipe;
        _0x5e887c.buckets = null;
      }
    },
    "nextname": function () {
      if (!_0x5c900e.nextname.current) {
        _0x5c900e.nextname.current = 0x0;
      }
      return "pipe[" + _0x5c900e.nextname.current++ + "]";
    }
  };
  function _0x525850() {
    if (_0x525850.start === undefined) {
      _0x525850.start = Date.now();
    }
    return (Date.now() - _0x525850.start) * 1000 | 0x0;
  }
  var _0x51c893;
  if (_0x1f12a4) {
    _0x51c893 = function () {
      var _0x593864 = process.hrtime();
      return _0x593864[0x0] * 0x3e8 + _0x593864[0x1] / 0xf4240;
    };
  } else {
    if (typeof dateNow !== "undefined") {
      _0x51c893 = dateNow;
    } else {
      _0x51c893 = function () {
        return performance.now();
      };
    }
  }
  function _0x5e03ff(_0x37460e, _0x21c5df) {
    _0x54b38f.mainLoop.timingMode = _0x37460e;
    _0x54b38f.mainLoop.timingValue = _0x21c5df;
    if (!_0x54b38f.mainLoop.func) {
      return 0x1;
    }
    if (!_0x54b38f.mainLoop.running) {
      _0x54b38f.mainLoop.running = true;
    }
    if (_0x37460e == 0x0) {
      _0x54b38f.mainLoop.scheduler = function _0x4f10bf() {
        var _0x5985a5 = Math.max(0x0, _0x54b38f.mainLoop.tickStartTime + _0x21c5df - _0x51c893()) | 0x0;
        setTimeout(_0x54b38f.mainLoop.runner, _0x5985a5);
      };
      _0x54b38f.mainLoop.method = "timeout";
    } else {
      if (_0x37460e == 0x1) {
        _0x54b38f.mainLoop.scheduler = function _0x3c0773() {
          _0x54b38f.requestAnimationFrame(_0x54b38f.mainLoop.runner);
        };
        _0x54b38f.mainLoop.method = "rAF";
      } else {
        if (_0x37460e == 0x2) {
          if (typeof setImmediate === "undefined") {
            var _0x6d1ae0 = [];
            var _0xe0a99d = function (_0x24c724) {
              if (_0x24c724.data === "setimmediate" || _0x24c724.data.target === "setimmediate") {
                _0x24c724.stopPropagation();
                _0x6d1ae0.shift()();
              }
            };
            addEventListener("message", _0xe0a99d, true);
            setImmediate = function _0x4dc82e(_0x44830a) {
              _0x6d1ae0.push(_0x44830a);
              if (_0x4e8b49) {
                if (_0x3e26fa.setImmediates === undefined) {
                  _0x3e26fa.setImmediates = [];
                }
                _0x3e26fa.setImmediates.push(_0x44830a);
                postMessage({
                  "target": "setimmediate"
                });
              } else {
                postMessage("setimmediate", "*");
              }
            };
          }
          _0x54b38f.mainLoop.scheduler = function _0x43f081() {
            setImmediate(_0x54b38f.mainLoop.runner);
          };
          _0x54b38f.mainLoop.method = "immediate";
        }
      }
    }
    return 0x0;
  }
  function _0xddbcdb(_0x1573af) {
    _0x5b725d(_0x1573af);
  }
  function _0x1cc05e() {
    if (!(_0x1150ad || false)) {
      try {
        _0xddbcdb(_0x5003ab);
      } catch (_0x2eb26d) {
        if (_0x2eb26d instanceof _0x1c904b) {
          return;
        }
        throw _0x2eb26d;
      }
    }
  }
  function _0x1ae34f(_0x5885a7, _0x2c81a8, _0x58cc62, _0x2dc828, _0xb73396) {
    _0x47fd96(!_0x54b38f.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    _0x54b38f.mainLoop.func = _0x5885a7;
    _0x54b38f.mainLoop.arg = _0x2dc828;
    var _0xbdaf2b = _0x54b38f.mainLoop.currentlyRunningMainloop;
    function _0x2f5701() {
      if (_0xbdaf2b < _0x54b38f.mainLoop.currentlyRunningMainloop) {
        _0x1cc05e();
        return false;
      }
      return true;
    }
    _0x54b38f.mainLoop.running = false;
    _0x54b38f.mainLoop.runner = function _0x315c06() {
      if (_0x4adad0) {
        return;
      }
      if (_0x54b38f.mainLoop.queue.length > 0x0) {
        var _0x3a9379 = Date.now();
        var _0x2ddb44 = _0x54b38f.mainLoop.queue.shift();
        _0x2ddb44.func(_0x2ddb44.arg);
        if (_0x54b38f.mainLoop.remainingBlockers) {
          var _0x50ad8b = _0x54b38f.mainLoop.remainingBlockers;
          var _0x440dab = _0x50ad8b % 0x1 == 0x0 ? _0x50ad8b - 0x1 : Math.floor(_0x50ad8b);
          if (_0x2ddb44.counted) {
            _0x54b38f.mainLoop.remainingBlockers = _0x440dab;
          } else {
            _0x440dab = _0x440dab + 0.5;
            _0x54b38f.mainLoop.remainingBlockers = (0x8 * _0x50ad8b + _0x440dab) / 0x9;
          }
        }
        console.log("main loop blocker \"" + _0x2ddb44.name + "\" took " + (Date.now() - _0x3a9379) + " ms");
        _0x54b38f.mainLoop.updateStatus();
        if (!_0x2f5701()) {
          return;
        }
        setTimeout(_0x54b38f.mainLoop.runner, 0x0);
        return;
      }
      if (!_0x2f5701()) {
        return;
      }
      _0x54b38f.mainLoop.currentFrameNumber = _0x54b38f.mainLoop.currentFrameNumber + 0x1 | 0x0;
      if (_0x54b38f.mainLoop.timingMode == 0x1 && _0x54b38f.mainLoop.timingValue > 0x1 && _0x54b38f.mainLoop.currentFrameNumber % _0x54b38f.mainLoop.timingValue != 0x0) {
        _0x54b38f.mainLoop.scheduler();
        return;
      } else if (_0x54b38f.mainLoop.timingMode == 0x0) {
        _0x54b38f.mainLoop.tickStartTime = _0x51c893();
      }
      _0x52acd5.newRenderingFrameStarted();
      _0x54b38f.mainLoop.runIter(_0x5885a7);
      if (!_0x2f5701()) {
        return;
      }
      if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) {
        SDL.audio.queueNewAudioData();
      }
      _0x54b38f.mainLoop.scheduler();
    };
    if (!_0xb73396) {
      if (_0x2c81a8 && _0x2c81a8 > 0x0) {
        _0x5e03ff(0x0, 0x3e8 / _0x2c81a8);
      } else {
        _0x5e03ff(0x1, 0x1);
      }
      _0x54b38f.mainLoop.scheduler();
    }
    if (_0x58cc62) {
      throw "unwind";
    }
  }
  function _0x17a962(_0x5a60a2, _0x1228b3) {
    if (_0x4adad0) {
      return;
    }
    if (_0x1228b3) {
      _0x5a60a2();
      return;
    }
    try {
      _0x5a60a2();
    } catch (_0x5f4f1b) {
      if (_0x5f4f1b instanceof _0x1c904b) {
        return;
      } else {
        if (_0x5f4f1b !== "unwind") {
          if (_0x5f4f1b && typeof _0x5f4f1b === "object" && _0x5f4f1b.stack) {
            _0x4f2811("exception thrown: " + [_0x5f4f1b, _0x5f4f1b.stack]);
          }
          throw _0x5f4f1b;
        }
      }
    }
  }
  var _0x54b38f = {
    "mainLoop": {
      "running": false,
      "scheduler": null,
      "method": '',
      "currentlyRunningMainloop": 0x0,
      "func": null,
      "arg": 0x0,
      "timingMode": 0x0,
      "timingValue": 0x0,
      "currentFrameNumber": 0x0,
      "queue": [],
      "pause": function () {
        _0x54b38f.mainLoop.scheduler = null;
        _0x54b38f.mainLoop.currentlyRunningMainloop++;
      },
      "resume": function () {
        _0x54b38f.mainLoop.currentlyRunningMainloop++;
        var _0x26e3c0 = _0x54b38f.mainLoop.timingMode;
        var _0x8ec131 = _0x54b38f.mainLoop.timingValue;
        var _0x18d48e = _0x54b38f.mainLoop.func;
        _0x54b38f.mainLoop.func = null;
        _0x1ae34f(_0x18d48e, 0x0, false, _0x54b38f.mainLoop.arg, true);
        _0x5e03ff(_0x26e3c0, _0x8ec131);
        _0x54b38f.mainLoop.scheduler();
      },
      "updateStatus": function () {
        if (_0x3e26fa.setStatus) {
          var _0x28744a = _0x3e26fa.statusMessage || "Please wait...";
          var _0x51d67e = _0x54b38f.mainLoop.remainingBlockers;
          var _0x11ef9a = _0x54b38f.mainLoop.expectedBlockers;
          if (_0x51d67e) {
            if (_0x51d67e < _0x11ef9a) {
              _0x3e26fa.setStatus(_0x28744a + " (" + (_0x11ef9a - _0x51d67e) + "/" + _0x11ef9a + ")");
            } else {
              _0x3e26fa.setStatus(_0x28744a);
            }
          } else {
            _0x3e26fa.setStatus('');
          }
        }
      },
      "runIter": function (_0x2c26d2) {
        if (_0x4adad0) {
          return;
        }
        if (_0x3e26fa.preMainLoop) {
          var _0x478160 = _0x3e26fa.preMainLoop();
          if (_0x478160 === false) {
            return;
          }
        }
        _0x17a962(_0x2c26d2);
        if (_0x3e26fa.postMainLoop) {
          _0x3e26fa.postMainLoop();
        }
      }
    },
    "isFullscreen": false,
    "pointerLock": false,
    "moduleContextCreatedCallbacks": [],
    "workers": [],
    "init": function () {
      if (!_0x3e26fa.preloadPlugins) {
        _0x3e26fa.preloadPlugins = [];
      }
      if (_0x54b38f.initted) {
        return;
      }
      _0x54b38f.initted = true;
      try {
        new Blob();
        _0x54b38f.hasBlobConstructor = true;
      } catch (_0x1e27d0) {
        _0x54b38f.hasBlobConstructor = false;
        console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      _0x54b38f.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x54b38f.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;
      _0x54b38f.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
      if (!_0x3e26fa.noImageDecoding && typeof _0x54b38f.URLObject === "undefined") {
        console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
        _0x3e26fa.noImageDecoding = true;
      }
      var _0x534e56 = {
        canHandle: function _0x4b2d08(_0x109235) {
          return !_0x3e26fa.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x109235);
        },
        handle: function _0x2bb708(_0x46cc42, _0x3b4f24, _0x356679, _0x1f5a03) {
          var _0xa0a3e4 = null;
          if (_0x54b38f.hasBlobConstructor) {
            try {
              _0xa0a3e4 = new Blob([_0x46cc42], {
                "type": {
                  "jpg": "image/jpeg",
                  "jpeg": "image/jpeg",
                  "png": "image/png",
                  "bmp": "image/bmp",
                  "ogg": "audio/ogg",
                  "wav": "audio/wav",
                  "mp3": "audio/mpeg"
                }[_0x3b4f24.substr(_0x3b4f24.lastIndexOf(".") + 0x1)]
              });
              if (_0xa0a3e4.size !== _0x46cc42.length) {
                _0xa0a3e4 = new Blob([new Uint8Array(_0x46cc42).buffer], {
                  "type": {
                    "jpg": "image/jpeg",
                    "jpeg": "image/jpeg",
                    "png": "image/png",
                    "bmp": "image/bmp",
                    "ogg": "audio/ogg",
                    "wav": "audio/wav",
                    "mp3": "audio/mpeg"
                  }[_0x3b4f24.substr(_0x3b4f24.lastIndexOf(".") + 0x1)]
                });
              }
            } catch (_0x441fde) {
              _0x3b983d("Blob constructor present but fails: " + _0x441fde + "; falling back to blob builder");
            }
          }
          if (!_0xa0a3e4) {
            var _0x2fda1b = new _0x54b38f.BlobBuilder();
            _0x2fda1b.append(new Uint8Array(_0x46cc42).buffer);
            _0xa0a3e4 = _0x2fda1b.getBlob();
          }
          var _0xfda9b1 = _0x54b38f.URLObject.createObjectURL(_0xa0a3e4);
          var _0x5168b6 = new Image();
          _0x5168b6.onload = function _0x1c7c38() {
            _0x47fd96(_0x5168b6.complete, "Image " + _0x3b4f24 + " could not be decoded");
            var _0x2e265a = document.createElement("canvas");
            _0x2e265a.width = _0x5168b6.width;
            _0x2e265a.height = _0x5168b6.height;
            var _0x26e934 = _0x2e265a.getContext("2d");
            _0x26e934.drawImage(_0x5168b6, 0x0, 0x0);
            _0x3e26fa.preloadedImages[_0x3b4f24] = _0x2e265a;
            _0x54b38f.URLObject.revokeObjectURL(_0xfda9b1);
            if (_0x356679) {
              _0x356679(_0x46cc42);
            }
          };
          _0x5168b6.onerror = function _0x16d87d(_0x8c9bd0) {
            console.log("Image " + _0xfda9b1 + " could not be decoded");
            if (_0x1f5a03) {
              _0x1f5a03();
            }
          };
          _0x5168b6.src = _0xfda9b1;
        }
      };
      _0x3e26fa.preloadPlugins.push(_0x534e56);
      var _0x4b8063 = {
        canHandle: function _0x4c6b96(_0x511335) {
          return !_0x3e26fa.noAudioDecoding && _0x511335.substr(-0x4) in {
            ".ogg": 0x1,
            ".wav": 0x1,
            ".mp3": 0x1
          };
        },
        handle: function _0x3c2859(_0x7ae31d, _0x1bad5c, _0x34a231, _0x5108f8) {
          var _0x44f0ca = false;
          function _0x42b57a(_0x1c6d0d) {
            if (_0x44f0ca) {
              return;
            }
            _0x44f0ca = true;
            _0x3e26fa.preloadedAudios[_0x1bad5c] = _0x1c6d0d;
            if (_0x34a231) {
              _0x34a231(_0x7ae31d);
            }
          }
          function _0x22f774() {
            if (_0x44f0ca) {
              return;
            }
            _0x44f0ca = true;
            _0x3e26fa.preloadedAudios[_0x1bad5c] = new Audio();
            if (_0x5108f8) {
              _0x5108f8();
            }
          }
          if (_0x54b38f.hasBlobConstructor) {
            try {
              var _0x54beeb = new Blob([_0x7ae31d], {
                "type": {
                  "jpg": "image/jpeg",
                  "jpeg": "image/jpeg",
                  "png": "image/png",
                  "bmp": "image/bmp",
                  "ogg": "audio/ogg",
                  "wav": "audio/wav",
                  "mp3": "audio/mpeg"
                }[_0x1bad5c.substr(_0x1bad5c.lastIndexOf(".") + 0x1)]
              });
            } catch (_0x307802) {
              return _0x22f774();
            }
            var _0x105076 = _0x54b38f.URLObject.createObjectURL(_0x54beeb);
            var _0x211290 = new Audio();
            _0x211290.addEventListener("canplaythrough", function () {
              _0x42b57a(_0x211290);
            }, false);
            _0x211290.onerror = function _0xca54d9(_0x428c48) {
              if (_0x44f0ca) {
                return;
              }
              console.log("warning: browser could not fully decode audio " + _0x1bad5c + ", trying slower base64 approach");
              function _0x581e2a(_0x176da2) {
                var _0x39c5e2 = '';
                var _0xc4394f = 0x0;
                var _0x3efb2e = 0x0;
                for (var _0x16d047 = 0x0; _0x16d047 < _0x176da2.length; _0x16d047++) {
                  _0xc4394f = _0xc4394f << 0x8 | _0x176da2[_0x16d047];
                  _0x3efb2e += 0x8;
                  while (_0x3efb2e >= 0x6) {
                    var _0xec09cd = _0xc4394f >> _0x3efb2e - 0x6 & 0x3f;
                    _0x3efb2e -= 0x6;
                    _0x39c5e2 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[_0xec09cd];
                  }
                }
                if (_0x3efb2e == 0x2) {
                  _0x39c5e2 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(_0xc4394f & 0x3) << 0x4];
                  _0x39c5e2 += "==";
                } else if (_0x3efb2e == 0x4) {
                  _0x39c5e2 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(_0xc4394f & 0xf) << 0x2];
                  _0x39c5e2 += "=";
                }
                return _0x39c5e2;
              }
              _0x211290.src = "data:audio/x-" + _0x1bad5c.substr(-0x3) + ";base64," + _0x581e2a(_0x7ae31d);
              _0x42b57a(_0x211290);
            };
            _0x211290.src = _0x105076;
            _0x54b38f.safeSetTimeout(function () {
              _0x42b57a(_0x211290);
            }, 0x2710);
          } else {
            return _0x22f774();
          }
        }
      };
      _0x3e26fa.preloadPlugins.push(_0x4b8063);
      function _0x455537() {
        _0x54b38f.pointerLock = document.pointerLockElement === _0x3e26fa.canvas || document.mozPointerLockElement === _0x3e26fa.canvas || document.webkitPointerLockElement === _0x3e26fa.canvas || document.msPointerLockElement === _0x3e26fa.canvas;
      }
      var _0x50848e = _0x3e26fa.canvas;
      if (_0x50848e) {
        _0x50848e.requestPointerLock = _0x50848e.requestPointerLock || _0x50848e.mozRequestPointerLock || _0x50848e.webkitRequestPointerLock || _0x50848e.msRequestPointerLock || function () {};
        _0x50848e.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
        _0x50848e.exitPointerLock = _0x50848e.exitPointerLock.bind(document);
        document.addEventListener("pointerlockchange", _0x455537, false);
        document.addEventListener("mozpointerlockchange", _0x455537, false);
        document.addEventListener("webkitpointerlockchange", _0x455537, false);
        document.addEventListener("mspointerlockchange", _0x455537, false);
        if (_0x3e26fa.elementPointerLock) {
          _0x50848e.addEventListener("click", function (_0x57dec2) {
            if (true && _0x3e26fa.canvas.requestPointerLock) {
              _0x3e26fa.canvas.requestPointerLock();
              _0x57dec2.preventDefault();
            }
          }, false);
        }
      }
    },
    "createContext": function (_0x49d5f0, _0x593ab3, _0x26cfde, _0xeff7d0) {
      if (_0x593ab3 && _0x3e26fa.ctx && _0x49d5f0 == _0x3e26fa.canvas) {
        return _0x3e26fa.ctx;
      }
      var _0x21411a;
      var _0x57b262;
      if (_0x593ab3) {
        var _0x2644c0 = {
          "antialias": false,
          "alpha": false,
          "majorVersion": typeof WebGL2RenderingContext !== "undefined" ? 0x2 : 0x1
        };
        if (_0xeff7d0) {
          for (var _0x26dcee in _0xeff7d0) {
            _0x2644c0[_0x26dcee] = _0xeff7d0[_0x26dcee];
          }
        }
        if (typeof _0x52acd5 !== "undefined") {
          _0x57b262 = _0x52acd5.createContext(_0x49d5f0, _0x2644c0);
          if (_0x57b262) {
            _0x21411a = _0x52acd5.contexts[_0x57b262].GLctx;
          }
        }
      } else {
        _0x21411a = _0x49d5f0.getContext("2d");
      }
      if (!_0x21411a) {
        return null;
      }
      if (_0x26cfde) {
        if (!_0x593ab3) {
          _0x47fd96(typeof _0x537f82 === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
        }
        _0x3e26fa.ctx = _0x21411a;
        if (_0x593ab3) {
          _0x52acd5.makeContextCurrent(_0x57b262);
        }
        _0x3e26fa.useWebGL = _0x593ab3;
        _0x54b38f.moduleContextCreatedCallbacks.forEach(function (_0x3a3968) {
          _0x3a3968();
        });
        _0x54b38f.init();
      }
      return _0x21411a;
    },
    "destroyContext": function (_0x3a2ee3, _0x4a2e11, _0x4d069d) {},
    "fullscreenHandlersInstalled": false,
    "lockPointer": undefined,
    "resizeCanvas": undefined,
    "requestFullscreen": function (_0x1683b9, _0x108775) {
      _0x54b38f.lockPointer = _0x1683b9;
      _0x54b38f.resizeCanvas = _0x108775;
      if (typeof _0x54b38f.lockPointer === "undefined") {
        _0x54b38f.lockPointer = true;
      }
      if (typeof _0x54b38f.resizeCanvas === "undefined") {
        _0x54b38f.resizeCanvas = false;
      }
      var _0x1023bd = _0x3e26fa.canvas;
      function _0x12396d() {
        _0x54b38f.isFullscreen = false;
        var _0x9f815 = _0x1023bd.parentNode;
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x9f815) {
          _0x1023bd.exitFullscreen = _0x54b38f.exitFullscreen;
          if (_0x54b38f.lockPointer) {
            _0x1023bd.requestPointerLock();
          }
          _0x54b38f.isFullscreen = true;
          if (_0x54b38f.resizeCanvas) {
            _0x54b38f.setFullscreenCanvasSize();
          } else {
            _0x54b38f.updateCanvasDimensions(_0x1023bd);
          }
        } else {
          _0x9f815.parentNode.insertBefore(_0x1023bd, _0x9f815);
          _0x9f815.parentNode.removeChild(_0x9f815);
          if (_0x54b38f.resizeCanvas) {
            _0x54b38f.setWindowedCanvasSize();
          } else {
            _0x54b38f.updateCanvasDimensions(_0x1023bd);
          }
        }
        if (_0x3e26fa.onFullScreen) {
          _0x3e26fa.onFullScreen(false);
        }
        if (_0x3e26fa.onFullscreen) {
          _0x3e26fa.onFullscreen(false);
        }
      }
      _0x54b38f.fullscreenHandlersInstalled = true;
      document.addEventListener("fullscreenchange", _0x12396d, false);
      document.addEventListener("mozfullscreenchange", _0x12396d, false);
      document.addEventListener("webkitfullscreenchange", _0x12396d, false);
      document.addEventListener("MSFullscreenChange", _0x12396d, false);
      var _0x11274f = document.createElement("div");
      _0x1023bd.parentNode.insertBefore(_0x11274f, _0x1023bd);
      _0x11274f.appendChild(_0x1023bd);
      _0x11274f.requestFullscreen = _0x11274f.requestFullscreen || _0x11274f.mozRequestFullScreen || _0x11274f.msRequestFullscreen || (_0x11274f.webkitRequestFullscreen ? function () {
        _0x11274f.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null) || (_0x11274f.webkitRequestFullScreen ? function () {
        _0x11274f.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null);
      _0x11274f.requestFullscreen();
    },
    "exitFullscreen": function () {
      return false;
      var _0xd80d5 = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
      _0xd80d5.apply(document, []);
      return true;
    },
    "nextRAF": 0x0,
    "fakeRequestAnimationFrame": function (_0x4efdfd) {
      var _0x146c90 = Date.now();
      _0x54b38f.nextRAF = _0x146c90 + 16.666666666666668;
      var _0x4c3d3b = Math.max(0x0 - _0x146c90, 0x0);
      setTimeout(_0x4efdfd, _0x4c3d3b);
    },
    "requestAnimationFrame": function (_0x4a9346) {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(_0x4a9346);
        return;
      }
      var _0x38a870 = _0x54b38f.fakeRequestAnimationFrame;
      _0x38a870(_0x4a9346);
    },
    "safeRequestAnimationFrame": function (_0x33577b) {
      return _0x54b38f.requestAnimationFrame(function () {
        _0x17a962(_0x33577b);
      });
    },
    "safeSetTimeout": function (_0x3f844c, _0x1c8c95) {
      return setTimeout(function () {
        _0x17a962(_0x3f844c);
      }, _0x1c8c95);
    },
    "getMimetype": function (_0x15a248) {
      return {
        "jpg": "image/jpeg",
        "jpeg": "image/jpeg",
        "png": "image/png",
        "bmp": "image/bmp",
        "ogg": "audio/ogg",
        "wav": "audio/wav",
        "mp3": "audio/mpeg"
      }[_0x15a248.substr(_0x15a248.lastIndexOf(".") + 0x1)];
    },
    "getUserMedia": function (_0x15f5da) {
      if (!window.getUserMedia) {
        window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
      }
      window.getUserMedia(_0x15f5da);
    },
    "getMovementX": function (_0x655c6b) {
      return _0x655c6b.movementX || _0x655c6b.mozMovementX || _0x655c6b.webkitMovementX || 0x0;
    },
    "getMovementY": function (_0x46b766) {
      return _0x46b766.movementY || _0x46b766.mozMovementY || _0x46b766.webkitMovementY || 0x0;
    },
    "getMouseWheelDelta": function (_0xedc829) {
      var _0x52b87a = 0x0;
      switch (_0xedc829.type) {
        case "DOMMouseScroll":
          _0x52b87a = _0xedc829.detail / 0x3;
          break;
        case "mousewheel":
          _0x52b87a = _0xedc829.wheelDelta / 0x78;
          break;
        case "wheel":
          _0x52b87a = _0xedc829.deltaY;
          switch (_0xedc829.deltaMode) {
            case 0x0:
              _0x52b87a /= 0x64;
              break;
            case 0x1:
              _0x52b87a /= 0x3;
              break;
            case 0x2:
              _0x52b87a *= 0x50;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + _0xedc829.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + _0xedc829.type;
      }
      return _0x52b87a;
    },
    "mouseX": 0x0,
    "mouseY": 0x0,
    "mouseMovementX": 0x0,
    "mouseMovementY": 0x0,
    "touches": {},
    "lastTouches": {},
    "calculateMouseEvent": function (_0x276b4b) {
      var _0x3508bc = _0x3e26fa.canvas.getBoundingClientRect();
      var _0x316d86 = _0x3e26fa.canvas.width;
      var _0x1e5cf6 = _0x3e26fa.canvas.height;
      var _0x4ab70a = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
      var _0x2d01fd = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
      if (_0x276b4b.type === "touchstart" || _0x276b4b.type === "touchend" || _0x276b4b.type === "touchmove") {
        var _0x27511d = _0x276b4b.touch;
        if (_0x27511d === undefined) {
          return;
        }
        var _0x1d469a = _0x27511d.pageX - (_0x4ab70a + _0x3508bc.left);
        var _0x517bd4 = _0x27511d.pageY - (_0x2d01fd + _0x3508bc.top);
        _0x1d469a = _0x1d469a * (_0x316d86 / _0x3508bc.width);
        _0x517bd4 = _0x517bd4 * (_0x1e5cf6 / _0x3508bc.height);
        var _0x4bde98 = {
          "x": _0x1d469a,
          "y": _0x517bd4
        };
        if (_0x276b4b.type === "touchstart") {
          _0x54b38f.lastTouches[_0x27511d.identifier] = _0x4bde98;
          _0x54b38f.touches[_0x27511d.identifier] = _0x4bde98;
        } else {
          if (_0x276b4b.type === "touchend" || _0x276b4b.type === "touchmove") {
            var _0x3fda17 = _0x54b38f.touches[_0x27511d.identifier];
            if (!_0x3fda17) {
              _0x3fda17 = _0x4bde98;
            }
            _0x54b38f.lastTouches[_0x27511d.identifier] = _0x3fda17;
            _0x54b38f.touches[_0x27511d.identifier] = _0x4bde98;
          }
        }
        return;
      }
      var _0x1636c1 = _0x276b4b.pageX - (_0x4ab70a + _0x3508bc.left);
      var _0x191bc2 = _0x276b4b.pageY - (_0x2d01fd + _0x3508bc.top);
      _0x1636c1 = _0x1636c1 * (_0x316d86 / _0x3508bc.width);
      _0x191bc2 = _0x191bc2 * (_0x1e5cf6 / _0x3508bc.height);
      _0x54b38f.mouseMovementX = _0x1636c1 - 0x0;
      _0x54b38f.mouseMovementY = _0x191bc2 - 0x0;
      _0x54b38f.mouseX = _0x1636c1;
      _0x54b38f.mouseY = _0x191bc2;
    },
    "asyncLoad": function (_0x3d0212, _0x163c8a, _0x21cbe9, _0x161e64) {
      var _0x18ed62 = !_0x161e64 ? _0x4e3d5a : '';
      _0x5ef56d(_0x3d0212, function (_0x508d5a) {
        _0x47fd96(_0x508d5a, "Loading data file \"" + _0x3d0212 + "\" failed (no arrayBuffer).");
        _0x163c8a(new Uint8Array(_0x508d5a));
        if (_0x18ed62) {
          _0x3cfbac(_0x18ed62);
        }
      }, function (_0x46dabc) {
        if (_0x21cbe9) {
          _0x21cbe9();
        } else {
          throw "Loading data file \"" + _0x3d0212 + "\" failed.";
        }
      });
      if (_0x18ed62) {
        _0x10fd90(_0x18ed62);
      }
    },
    "resizeListeners": [],
    "updateResizeListeners": function () {
      var _0x4d0cc1 = _0x3e26fa.canvas;
      _0x54b38f.resizeListeners.forEach(function (_0x4ff5ed) {
        _0x4ff5ed(_0x4d0cc1.width, _0x4d0cc1.height);
      });
    },
    "setCanvasSize": function (_0x1c0642, _0x5d0480, _0x39e2e7) {
      var _0x2c917d = _0x3e26fa.canvas;
      _0x54b38f.updateCanvasDimensions(_0x2c917d, _0x1c0642, _0x5d0480);
      if (!_0x39e2e7) {
        _0x54b38f.updateResizeListeners();
      }
    },
    "windowedWidth": 0x0,
    "windowedHeight": 0x0,
    "setFullscreenCanvasSize": function () {
      if (typeof SDL != "undefined") {
        var _0x2c7c62 = _0x471b21[SDL.screen >> 0x2];
        _0x2c7c62 = _0x2c7c62 | 0x800000;
        _0x2ec55e[SDL.screen >> 0x2] = _0x2c7c62;
      }
      _0x54b38f.updateCanvasDimensions(_0x3e26fa.canvas);
      _0x54b38f.updateResizeListeners();
    },
    "setWindowedCanvasSize": function () {
      if (typeof SDL != "undefined") {
        var _0x5f4050 = _0x471b21[SDL.screen >> 0x2];
        _0x5f4050 = _0x5f4050 & -8388609;
        _0x2ec55e[SDL.screen >> 0x2] = _0x5f4050;
      }
      _0x54b38f.updateCanvasDimensions(_0x3e26fa.canvas);
      _0x54b38f.updateResizeListeners();
    },
    "updateCanvasDimensions": function (_0x2b2445, _0x269e32, _0x33c6c7) {
      if (_0x269e32 && _0x33c6c7) {
        _0x2b2445.widthNative = _0x269e32;
        _0x2b2445.heightNative = _0x33c6c7;
      } else {
        _0x269e32 = _0x2b2445.widthNative;
        _0x33c6c7 = _0x2b2445.heightNative;
      }
      var _0x4bd573 = _0x269e32;
      var _0x55719c = _0x33c6c7;
      if (_0x3e26fa.forcedAspectRatio && _0x3e26fa.forcedAspectRatio > 0x0) {
        if (_0x4bd573 / _0x55719c < _0x3e26fa.forcedAspectRatio) {
          _0x4bd573 = Math.round(_0x55719c * _0x3e26fa.forcedAspectRatio);
        } else {
          _0x55719c = Math.round(_0x4bd573 / _0x3e26fa.forcedAspectRatio);
        }
      }
      if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x2b2445.parentNode && typeof screen != "undefined") {
        var _0x235065 = Math.min(screen.width / _0x4bd573, screen.height / _0x55719c);
        _0x4bd573 = Math.round(_0x4bd573 * _0x235065);
        _0x55719c = Math.round(_0x55719c * _0x235065);
      }
      if (_0x54b38f.resizeCanvas) {
        if (_0x2b2445.width != _0x4bd573) {
          _0x2b2445.width = _0x4bd573;
        }
        if (_0x2b2445.height != _0x55719c) {
          _0x2b2445.height = _0x55719c;
        }
        if (typeof _0x2b2445.style != "undefined") {
          _0x2b2445.style.removeProperty("width");
          _0x2b2445.style.removeProperty("height");
        }
      } else {
        if (_0x2b2445.width != _0x269e32) {
          _0x2b2445.width = _0x269e32;
        }
        if (_0x2b2445.height != _0x33c6c7) {
          _0x2b2445.height = _0x33c6c7;
        }
        if (typeof _0x2b2445.style != "undefined") {
          if (_0x4bd573 != _0x269e32 || _0x55719c != _0x33c6c7) {
            _0x2b2445.style.setProperty("width", _0x4bd573 + "px", "important");
            _0x2b2445.style.setProperty("height", _0x55719c + "px", "important");
          } else {
            _0x2b2445.style.removeProperty("width");
            _0x2b2445.style.removeProperty("height");
          }
        }
      }
    },
    "wgetRequests": {},
    "nextWgetRequestHandle": 0x0,
    "getNextWgetRequestHandle": function () {
      0x0++;
      return 0x0;
    }
  };
  var _0x4f59e1 = {
    "inEventHandler": 0x0,
    "removeAllEventListeners": function () {
      for (var _0x2d680c = _0x4f59e1.eventHandlers.length - 0x1; _0x2d680c >= 0x0; --_0x2d680c) {
        _0x4f59e1._removeHandler(_0x2d680c);
      }
      _0x4f59e1.eventHandlers = [];
      _0x4f59e1.deferredCalls = [];
    },
    "registerRemoveEventListeners": function () {
      if (!_0x4f59e1.removeEventListenersRegistered) {
        _0x316a23.push(_0x4f59e1.removeAllEventListeners);
        _0x4f59e1.removeEventListenersRegistered = true;
      }
    },
    "deferredCalls": [],
    "deferCall": function (_0x4bca0a, _0x2138d7, _0xb20bb5) {
      function _0x6da9f7(_0xc13d85, _0x2a9006) {
        if (_0xc13d85.length != _0x2a9006.length) {
          return false;
        }
        for (var _0x477e02 in _0xc13d85) {
          if (_0xc13d85[_0x477e02] != _0x2a9006[_0x477e02]) {
            return false;
          }
        }
        return true;
      }
      for (var _0x1a68de in _0x4f59e1.deferredCalls) {
        var _0x41ab42 = _0x4f59e1.deferredCalls[_0x1a68de];
        if (_0x41ab42.targetFunction == _0x4bca0a && _0x6da9f7(_0x41ab42.argsList, _0xb20bb5)) {
          return;
        }
      }
      _0x4f59e1.deferredCalls.push({
        "targetFunction": _0x4bca0a,
        "precedence": _0x2138d7,
        "argsList": _0xb20bb5
      });
      _0x4f59e1.deferredCalls.sort(function (_0xc39f02, _0xaa16ec) {
        return _0xc39f02.precedence < _0xaa16ec.precedence;
      });
    },
    "removeDeferredCalls": function (_0x530ac5) {
      for (var _0x295f82 = 0x0; _0x295f82 < _0x4f59e1.deferredCalls.length; ++_0x295f82) {
        if (_0x4f59e1.deferredCalls[_0x295f82].targetFunction == _0x530ac5) {
          _0x4f59e1.deferredCalls.splice(_0x295f82, 0x1);
          --_0x295f82;
        }
      }
    },
    "canPerformEventHandlerRequests": function () {
      return 0x0 && _0x4f59e1.currentEventHandler.allowsDeferredCalls;
    },
    "runDeferredCalls": function () {
      if (!(0x0 && _0x4f59e1.currentEventHandler.allowsDeferredCalls)) {
        return;
      }
      for (var _0xd1e524 = 0x0; _0xd1e524 < _0x4f59e1.deferredCalls.length; ++_0xd1e524) {
        var _0x510d99 = _0x4f59e1.deferredCalls[_0xd1e524];
        _0x4f59e1.deferredCalls.splice(_0xd1e524, 0x1);
        --_0xd1e524;
        _0x510d99.targetFunction.apply(null, _0x510d99.argsList);
      }
    },
    "eventHandlers": [],
    "removeAllHandlersOnTarget": function (_0x3b75e4, _0x2e2c22) {
      for (var _0xb39f25 = 0x0; _0xb39f25 < _0x4f59e1.eventHandlers.length; ++_0xb39f25) {
        if (_0x4f59e1.eventHandlers[_0xb39f25].target == _0x3b75e4 && (!_0x2e2c22 || _0x2e2c22 == _0x4f59e1.eventHandlers[_0xb39f25].eventTypeString)) {
          _0x4f59e1._removeHandler(_0xb39f25--);
        }
      }
    },
    "_removeHandler": function (_0x83f4e5) {
      var _0x423b84 = _0x4f59e1.eventHandlers[_0x83f4e5];
      _0x423b84.target.removeEventListener(_0x423b84.eventTypeString, _0x423b84.eventListenerFunc, _0x423b84.useCapture);
      _0x4f59e1.eventHandlers.splice(_0x83f4e5, 0x1);
    },
    "registerOrRemoveHandler": function (_0x4ee9ed) {
      var _0x4becbe = function _0x1ccc34(_0x558c59) {
        ++0x0;
        _0x4f59e1.currentEventHandler = _0x4ee9ed;
        _0x4f59e1.runDeferredCalls();
        _0x4ee9ed.handlerFunc(_0x558c59);
        _0x4f59e1.runDeferredCalls();
        --0x0;
      };
      if (_0x4ee9ed.callbackfunc) {
        _0x4ee9ed.eventListenerFunc = _0x4becbe;
        _0x4ee9ed.target.addEventListener(_0x4ee9ed.eventTypeString, _0x4becbe, _0x4ee9ed.useCapture);
        _0x4f59e1.eventHandlers.push(_0x4ee9ed);
        _0x4f59e1.registerRemoveEventListeners();
      } else {
        for (var _0x588400 = 0x0; _0x588400 < _0x4f59e1.eventHandlers.length; ++_0x588400) {
          if (_0x4f59e1.eventHandlers[_0x588400].target == _0x4ee9ed.target && _0x4f59e1.eventHandlers[_0x588400].eventTypeString == _0x4ee9ed.eventTypeString) {
            _0x4f59e1._removeHandler(_0x588400--);
          }
        }
      }
    },
    "getNodeNameForTarget": function (_0x584de1) {
      if (!_0x584de1) {
        return '';
      }
      if (_0x584de1 == window) {
        return "#window";
      }
      if (_0x584de1 == screen) {
        return "#screen";
      }
      return _0x584de1 && _0x584de1.nodeName ? _0x584de1.nodeName : '';
    },
    "fullscreenEnabled": function () {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled;
    }
  };
  function _0x36da21(_0x15f723) {
    var _0x3b96dd = _0x15f723.getExtension("ANGLE_instanced_arrays");
    if (_0x3b96dd) {
      _0x15f723.vertexAttribDivisor = function (_0x2bd500, _0x33324e) {
        _0x3b96dd.vertexAttribDivisorANGLE(_0x2bd500, _0x33324e);
      };
      _0x15f723.drawArraysInstanced = function (_0x37aff5, _0x45cdd3, _0x4676b6, _0xac103c) {
        _0x3b96dd.drawArraysInstancedANGLE(_0x37aff5, _0x45cdd3, _0x4676b6, _0xac103c);
      };
      _0x15f723.drawElementsInstanced = function (_0x7a957d, _0x11d0ce, _0x3a385a, _0x39deae, _0x2d2e71) {
        _0x3b96dd.drawElementsInstancedANGLE(_0x7a957d, _0x11d0ce, _0x3a385a, _0x39deae, _0x2d2e71);
      };
      return 0x1;
    }
  }
  function _0x31f450(_0x508bcc) {
    var _0x68ba36 = _0x508bcc.getExtension("OES_vertex_array_object");
    if (_0x68ba36) {
      _0x508bcc.createVertexArray = function () {
        return _0x68ba36.createVertexArrayOES();
      };
      _0x508bcc.deleteVertexArray = function (_0x5a982c) {
        _0x68ba36.deleteVertexArrayOES(_0x5a982c);
      };
      _0x508bcc.bindVertexArray = function (_0x202275) {
        _0x68ba36.bindVertexArrayOES(_0x202275);
      };
      _0x508bcc.isVertexArray = function (_0x424505) {
        return _0x68ba36.isVertexArrayOES(_0x424505);
      };
      return 0x1;
    }
  }
  function _0x40bd8c(_0x1815f2) {
    var _0x8922bb = _0x1815f2.getExtension("WEBGL_draw_buffers");
    if (_0x8922bb) {
      _0x1815f2.drawBuffers = function (_0x5dd6fc, _0x5f38f0) {
        _0x8922bb.drawBuffersWEBGL(_0x5dd6fc, _0x5f38f0);
      };
      return 0x1;
    }
  }
  function _0x121533(_0x4d131d) {
    return !!(_0x4d131d.dibvbi = _0x4d131d.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
  }
  function _0x14febf(_0xac8819) {
    return !!(_0xac8819.mdibvbi = _0xac8819.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
  }
  function _0x322bcb(_0x5f31a3) {
    return !!(_0x5f31a3.multiDrawWebgl = _0x5f31a3.getExtension("WEBGL_multi_draw"));
  }
  var _0x52acd5 = {
    "counter": 0x1,
    "buffers": [],
    "mappedBuffers": {},
    "programs": [],
    "framebuffers": [],
    "renderbuffers": [],
    "textures": [],
    "shaders": [],
    "vaos": [],
    "contexts": [],
    "offscreenCanvases": {},
    "queries": [],
    "samplers": [],
    "transformFeedbacks": [],
    "syncs": [],
    "byteSizeByTypeRoot": 0x1400,
    "byteSizeByType": [0x1, 0x1, 0x2, 0x2, 0x4, 0x4, 0x4, 0x2, 0x3, 0x4, 0x8],
    "stringCache": {},
    "stringiCache": {},
    "unpackAlignment": 0x4,
    "recordError": function _0x4f5bb7(_0xb589f7) {
      if (!_0x52acd5.lastError) {
        _0x52acd5.lastError = _0xb589f7;
      }
    },
    "getNewId": function (_0x205356) {
      var _0x5bb00d = 0x1++;
      for (var _0x126774 = _0x205356.length; _0x126774 < _0x5bb00d; _0x126774++) {
        _0x205356[_0x126774] = null;
      }
      return _0x5bb00d;
    },
    "MAX_TEMP_BUFFER_SIZE": 0x200000,
    "numTempVertexBuffersPerSize": 0x40,
    "log2ceilLookup": function (_0x180839) {
      return 0x20 - Math.clz32(_0x180839 === 0x0 ? 0x0 : _0x180839 - 0x1);
    },
    "generateTempBuffers": function (_0x61318d, _0x458bb9) {
      var _0x49ad72 = 0x20 - Math.clz32(2097151);
      _0x458bb9.tempVertexBufferCounters1 = [];
      _0x458bb9.tempVertexBufferCounters2 = [];
      _0x458bb9.tempVertexBufferCounters1.length = _0x458bb9.tempVertexBufferCounters2.length = _0x49ad72 + 0x1;
      _0x458bb9.tempVertexBuffers1 = [];
      _0x458bb9.tempVertexBuffers2 = [];
      _0x458bb9.tempVertexBuffers1.length = _0x458bb9.tempVertexBuffers2.length = _0x49ad72 + 0x1;
      _0x458bb9.tempIndexBuffers = [];
      _0x458bb9.tempIndexBuffers.length = _0x49ad72 + 0x1;
      for (var _0x4c4f18 = 0x0; _0x4c4f18 <= _0x49ad72; ++_0x4c4f18) {
        _0x458bb9.tempIndexBuffers[_0x4c4f18] = null;
        _0x458bb9.tempVertexBufferCounters1[_0x4c4f18] = _0x458bb9.tempVertexBufferCounters2[_0x4c4f18] = 0x0;
        _0x458bb9.tempVertexBuffers1[_0x4c4f18] = [];
        _0x458bb9.tempVertexBuffers2[_0x4c4f18] = [];
        var _0x53968e = _0x458bb9.tempVertexBuffers1[_0x4c4f18];
        var _0x25d99c = _0x458bb9.tempVertexBuffers2[_0x4c4f18];
        _0x53968e.length = _0x25d99c.length = 0x40;
        for (var _0x56ee0c = 0x0; _0x56ee0c < 0x40; ++_0x56ee0c) {
          _0x53968e[_0x56ee0c] = _0x25d99c[_0x56ee0c] = null;
        }
      }
      if (_0x61318d) {
        _0x458bb9.tempQuadIndexBuffer = _0x537f82.createBuffer();
        _0x458bb9.GLctx.bindBuffer(0x8893, _0x458bb9.tempQuadIndexBuffer);
        var _0x48aa5b = new Uint16Array(1048576);
        var _0x4c4f18 = 0x0;
        var _0x1105df = 0x0;
        while (0x1) {
          _0x48aa5b[_0x4c4f18++] = _0x1105df;
          if (_0x4c4f18 >= 1048576) {
            break;
          }
          _0x48aa5b[_0x4c4f18++] = _0x1105df + 0x1;
          if (_0x4c4f18 >= 1048576) {
            break;
          }
          _0x48aa5b[_0x4c4f18++] = _0x1105df + 0x2;
          if (_0x4c4f18 >= 1048576) {
            break;
          }
          _0x48aa5b[_0x4c4f18++] = _0x1105df;
          if (_0x4c4f18 >= 1048576) {
            break;
          }
          _0x48aa5b[_0x4c4f18++] = _0x1105df + 0x2;
          if (_0x4c4f18 >= 1048576) {
            break;
          }
          _0x48aa5b[_0x4c4f18++] = _0x1105df + 0x3;
          if (_0x4c4f18 >= 1048576) {
            break;
          }
          _0x1105df += 0x4;
        }
        _0x458bb9.GLctx.bufferData(0x8893, _0x48aa5b, 0x88e4);
        _0x458bb9.GLctx.bindBuffer(0x8893, null);
      }
    },
    "getTempVertexBuffer": function _0x546b43(_0x54dc1a) {
      var _0x453d71 = 0x20 - Math.clz32(_0x54dc1a === 0x0 ? 0x0 : _0x54dc1a - 0x1);
      var _0x2d364f = _0x52acd5.currentContext.tempVertexBuffers1[_0x453d71];
      var _0x13b73c = _0x52acd5.currentContext.tempVertexBufferCounters1[_0x453d71];
      _0x52acd5.currentContext.tempVertexBufferCounters1[_0x453d71] = _0x52acd5.currentContext.tempVertexBufferCounters1[_0x453d71] + 0x1 & 63;
      var _0x415f40 = _0x2d364f[_0x13b73c];
      if (_0x415f40) {
        return _0x415f40;
      }
      var _0x61a9f1 = _0x537f82.getParameter(0x8894);
      _0x2d364f[_0x13b73c] = _0x537f82.createBuffer();
      _0x537f82.bindBuffer(0x8892, _0x2d364f[_0x13b73c]);
      _0x537f82.bufferData(0x8892, 0x1 << _0x453d71, 0x88e8);
      _0x537f82.bindBuffer(0x8892, _0x61a9f1);
      return _0x2d364f[_0x13b73c];
    },
    "getTempIndexBuffer": function _0x2ef9c3(_0x142931) {
      var _0x5bc19c = 0x20 - Math.clz32(_0x142931 === 0x0 ? 0x0 : _0x142931 - 0x1);
      var _0x16eebc = _0x52acd5.currentContext.tempIndexBuffers[_0x5bc19c];
      if (_0x16eebc) {
        return _0x16eebc;
      }
      var _0xd6d99e = _0x537f82.getParameter(0x8895);
      _0x52acd5.currentContext.tempIndexBuffers[_0x5bc19c] = _0x537f82.createBuffer();
      _0x537f82.bindBuffer(0x8893, _0x52acd5.currentContext.tempIndexBuffers[_0x5bc19c]);
      _0x537f82.bufferData(0x8893, 0x1 << _0x5bc19c, 0x88e8);
      _0x537f82.bindBuffer(0x8893, _0xd6d99e);
      return _0x52acd5.currentContext.tempIndexBuffers[_0x5bc19c];
    },
    "newRenderingFrameStarted": function _0x43cadc() {
      if (!_0x52acd5.currentContext) {
        return;
      }
      var _0x30b7be = _0x52acd5.currentContext.tempVertexBuffers1;
      _0x52acd5.currentContext.tempVertexBuffers1 = _0x52acd5.currentContext.tempVertexBuffers2;
      _0x52acd5.currentContext.tempVertexBuffers2 = _0x30b7be;
      _0x30b7be = _0x52acd5.currentContext.tempVertexBufferCounters1;
      _0x52acd5.currentContext.tempVertexBufferCounters1 = _0x52acd5.currentContext.tempVertexBufferCounters2;
      _0x52acd5.currentContext.tempVertexBufferCounters2 = _0x30b7be;
      var _0xacb7b = 0x20 - Math.clz32(2097151);
      for (var _0x5df18a = 0x0; _0x5df18a <= _0xacb7b; ++_0x5df18a) {
        _0x52acd5.currentContext.tempVertexBufferCounters1[_0x5df18a] = 0x0;
      }
    },
    "getSource": function (_0xd850c3, _0x1abdb2, _0x574b40, _0x2acde7) {
      var _0x319a9c = '';
      for (var _0x42d7e1 = 0x0; _0x42d7e1 < _0x1abdb2; ++_0x42d7e1) {
        var _0x4cf5b7 = _0x2acde7 ? _0x2ec55e[_0x2acde7 + _0x42d7e1 * 0x4 >> 0x2] : -0x1;
        _0x319a9c += _0x2ec55e[_0x574b40 + _0x42d7e1 * 0x4 >> 0x2] ? _0x30b35d(_0x443a6b, _0x2ec55e[_0x574b40 + _0x42d7e1 * 0x4 >> 0x2], _0x4cf5b7 < 0x0 ? undefined : _0x4cf5b7) : '';
      }
      return _0x319a9c;
    },
    "calcBufLength": function _0x382788(_0x1547f9, _0x4b0fa0, _0x32f2ac, _0x200b2c) {
      if (_0x32f2ac > 0x0) {
        return _0x200b2c * _0x32f2ac;
      }
      var _0x2a8d0d = _0x52acd5.byteSizeByType[_0x4b0fa0 - 0x1400];
      return _0x1547f9 * _0x2a8d0d * _0x200b2c;
    },
    "usedTempBuffers": [],
    "preDrawHandleClientVertexAttribBindings": function _0x2c7516(_0x16b0b4) {
      _0x52acd5.resetBufferBinding = false;
      for (var _0x1e7f06 = 0x0; _0x1e7f06 < _0x52acd5.currentContext.maxVertexAttribs; ++_0x1e7f06) {
        var _0x149e7a = _0x52acd5.currentContext.clientBuffers[_0x1e7f06];
        if (!_0x149e7a.clientside || !_0x149e7a.enabled) {
          continue;
        }
        _0x52acd5.resetBufferBinding = true;
        var _0x5e24d0 = _0x52acd5.calcBufLength(_0x149e7a.size, _0x149e7a.type, _0x149e7a.stride, _0x16b0b4);
        var _0x5c06b3 = _0x52acd5.getTempVertexBuffer(_0x5e24d0);
        _0x537f82.bindBuffer(0x8892, _0x5c06b3);
        _0x537f82.bufferSubData(0x8892, 0x0, _0x443a6b.subarray(_0x149e7a.ptr, _0x149e7a.ptr + _0x5e24d0));
        _0x149e7a.vertexAttribPointerAdaptor.call(_0x537f82, _0x1e7f06, _0x149e7a.size, _0x149e7a.type, _0x149e7a.normalized, _0x149e7a.stride, 0x0);
      }
    },
    "postDrawHandleClientVertexAttribBindings": function _0x212d3b() {
      if (_0x52acd5.resetBufferBinding) {
        _0x537f82.bindBuffer(0x8892, _0x52acd5.buffers[_0x537f82.currentArrayBufferBinding]);
      }
    },
    "createContext": function (_0x3a7247, _0x46a0b3) {
      if (!_0x3a7247.getContextSafariWebGL2Fixed) {
        _0x3a7247.getContextSafariWebGL2Fixed = _0x3a7247.getContext;
        _0x3a7247.getContext = function (_0x2ebf3e, _0x2d063d) {
          var _0xbbd679 = _0x3a7247.getContextSafariWebGL2Fixed(_0x2ebf3e, _0x2d063d);
          return _0x2ebf3e == "webgl" == _0xbbd679 instanceof WebGLRenderingContext ? _0xbbd679 : null;
        };
      }
      var _0x27cdb7 = _0x46a0b3.majorVersion > 0x1 ? _0x3a7247.getContext("webgl2", _0x46a0b3) : _0x3a7247.getContext("webgl", _0x46a0b3);
      if (!_0x27cdb7) {
        return 0x0;
      }
      var _0x10ef67 = _0x52acd5.registerContext(_0x27cdb7, _0x46a0b3);
      return _0x10ef67;
    },
    "registerContext": function (_0x34982a, _0xb3bacc) {
      var _0x8de4a1 = _0x52acd5.getNewId(_0x52acd5.contexts);
      var _0x559854 = {
        "handle": _0x8de4a1,
        "attributes": _0xb3bacc,
        "version": _0xb3bacc.majorVersion,
        "GLctx": _0x34982a
      };
      if (_0x34982a.canvas) {
        _0x34982a.canvas.GLctxObject = _0x559854;
      }
      _0x52acd5.contexts[_0x8de4a1] = _0x559854;
      if (typeof _0xb3bacc.enableExtensionsByDefault === "undefined" || _0xb3bacc.enableExtensionsByDefault) {
        _0x52acd5.initExtensions(_0x559854);
      }
      _0x559854.maxVertexAttribs = _0x559854.GLctx.getParameter(0x8869);
      _0x559854.clientBuffers = [];
      for (var _0x382e9a = 0x0; _0x382e9a < _0x559854.maxVertexAttribs; _0x382e9a++) {
        _0x559854.clientBuffers[_0x382e9a] = {
          "enabled": false,
          "clientside": false,
          "size": 0x0,
          "type": 0x0,
          "normalized": 0x0,
          "stride": 0x0,
          "ptr": 0x0,
          "vertexAttribPointerAdaptor": null
        };
      }
      _0x52acd5.generateTempBuffers(false, _0x559854);
      return _0x8de4a1;
    },
    "makeContextCurrent": function (_0x128be7) {
      _0x52acd5.currentContext = _0x52acd5.contexts[_0x128be7];
      _0x3e26fa.ctx = _0x537f82 = _0x52acd5.currentContext && _0x52acd5.currentContext.GLctx;
      return !(_0x128be7 && !_0x537f82);
    },
    "getContext": function (_0x402993) {
      return _0x52acd5.contexts[_0x402993];
    },
    "deleteContext": function (_0x2e3421) {
      if (_0x52acd5.currentContext === _0x52acd5.contexts[_0x2e3421]) {
        _0x52acd5.currentContext = null;
      }
      if (typeof _0x4f59e1 === "object") {
        _0x4f59e1.removeAllHandlersOnTarget(_0x52acd5.contexts[_0x2e3421].GLctx.canvas);
      }
      if (_0x52acd5.contexts[_0x2e3421] && _0x52acd5.contexts[_0x2e3421].GLctx.canvas) {
        _0x52acd5.contexts[_0x2e3421].GLctx.canvas.GLctxObject = undefined;
      }
      _0x52acd5.contexts[_0x2e3421] = null;
    },
    "initExtensions": function (_0x22b9c9) {
      if (!_0x22b9c9) {
        _0x22b9c9 = _0x52acd5.currentContext;
      }
      if (_0x22b9c9.initExtensionsDone) {
        return;
      }
      _0x22b9c9.initExtensionsDone = true;
      var _0x2b1eea = _0x22b9c9.GLctx;
      _0x36da21(_0x2b1eea);
      _0x31f450(_0x2b1eea);
      _0x40bd8c(_0x2b1eea);
      _0x121533(_0x2b1eea);
      _0x14febf(_0x2b1eea);
      if (_0x22b9c9.version >= 0x2) {
        _0x2b1eea.disjointTimerQueryExt = _0x2b1eea.getExtension("EXT_disjoint_timer_query_webgl2");
      }
      if (_0x22b9c9.version < 0x2 || !_0x2b1eea.disjointTimerQueryExt) {
        _0x2b1eea.disjointTimerQueryExt = _0x2b1eea.getExtension("EXT_disjoint_timer_query");
      }
      _0x322bcb(_0x2b1eea);
      var _0x1e5c71 = _0x2b1eea.getSupportedExtensions() || [];
      _0x1e5c71.forEach(function (_0x2a26eb) {
        if (!_0x2a26eb.includes("lose_context") && !_0x2a26eb.includes("debug")) {
          _0x2b1eea.getExtension(_0x2a26eb);
        }
      });
    }
  };
  function _0x346f48() {
    return _0x52acd5.currentContext ? _0x52acd5.currentContext.handle : 0x0;
  }
  _0x3e26fa._emscripten_webgl_get_current_context = _0x346f48;
  function _0xe65d3c(_0x41cdb1) {
    var _0x38e786 = _0x52acd5.makeContextCurrent(_0x41cdb1);
    return _0x38e786 ? 0x0 : -0x5;
  }
  _0x3e26fa._emscripten_webgl_make_context_current = _0xe65d3c;
  var _0xaa023a = {};
  function _0x308ec7() {
    if (!_0x308ec7.strings) {
      var _0xe1e4b5 = (typeof navigator === "object" && navigator.languages && navigator.languages[0x0] || "C").replace("-", "_") + ".UTF-8";
      var _0x4253d4 = {
        "USER": "web_user",
        "LOGNAME": "web_user",
        "PATH": "/",
        "PWD": "/",
        "HOME": "/home/web_user",
        "LANG": _0xe1e4b5,
        "_": _0x19bd65 || "./this.program"
      };
      for (var _0x4c302c in _0xaa023a) {
        _0x4253d4[_0x4c302c] = _0xaa023a[_0x4c302c];
      }
      var _0x9ffa60 = [];
      for (var _0x4c302c in _0x4253d4) {
        _0x9ffa60.push(_0x4c302c + "=" + _0x4253d4[_0x4c302c]);
      }
      _0x308ec7.strings = _0x9ffa60;
    }
    return _0x308ec7.strings;
  }
  var _0x58707f = [];
  var _0xa4bf1d = [];
  var _0x555210 = [];
  var _0x107617 = function (_0x5350aa, _0x410bcf, _0x2c8b6c, _0x3be589) {
    if (!_0x5350aa) {
      _0x5350aa = this;
    }
    this.parent = _0x5350aa;
    this.mount = _0x5350aa.mount;
    this.mounted = null;
    this.id = 0x1++;
    this.name = _0x410bcf;
    this.mode = _0x2c8b6c;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = _0x3be589;
  };
  Object.defineProperties(_0x107617.prototype, {
    "read": {
      "get": function () {
        return (this.mode & 365) === 365;
      },
      "set": function (_0x49c795) {
        if (_0x49c795) {
          this.mode |= 365;
        } else {
          this.mode &= -366;
        }
      }
    },
    "write": {
      "get": function () {
        return (this.mode & 0x92) === 0x92;
      },
      "set": function (_0x530aff) {
        if (_0x530aff) {
          this.mode |= 0x92;
        } else {
          this.mode &= -147;
        }
      }
    },
    "isFolder": {
      "get": function () {
        return (this.mode & 0xf000) === 0x4000;
      }
    },
    "isDevice": {
      "get": function () {
        return (this.mode & 0xf000) === 0x2000;
      }
    }
  });
  _0x363740.FSNode = _0x107617;
  _0x363740.staticInit();
  _0x3e26fa.FS_createPath = _0x363740.createPath;
  _0x3e26fa.FS_createDataFile = _0x363740.createDataFile;
  _0x3e26fa.requestFullscreen = function _0x1e6c15(_0x1b4384, _0x4486ed) {
    _0x54b38f.requestFullscreen(_0x1b4384, _0x4486ed);
  };
  _0x3e26fa.requestAnimationFrame = function _0x295b2e(_0x571628) {
    _0x54b38f.requestAnimationFrame(_0x571628);
  };
  _0x3e26fa.setCanvasSize = function _0x2624b6(_0x15c395, _0x5efa4e, _0x28afc9) {
    _0x54b38f.setCanvasSize(_0x15c395, _0x5efa4e, _0x28afc9);
  };
  _0x3e26fa.pauseMainLoop = function _0x2e2300() {
    _0x54b38f.mainLoop.pause();
  };
  _0x3e26fa.resumeMainLoop = function _0x10df24() {
    _0x54b38f.mainLoop.resume();
  };
  _0x3e26fa.getUserMedia = function _0x183de2() {
    _0x54b38f.getUserMedia();
  };
  _0x3e26fa.createContext = function _0x4d0b08(_0x4d71a2, _0x219ef1, _0x2505a7, _0x30ed76) {
    return _0x54b38f.createContext(_0x4d71a2, _0x219ef1, _0x2505a7, _0x30ed76);
  };
  var _0x537f82;
  for (var _0x1c7158 = 0x0; _0x1c7158 < 0x20; ++_0x1c7158) {
    _0x58707f.push(new Array(_0x1c7158));
  }
  var _0x559b25 = new Float32Array(0x120);
  for (var _0x1c7158 = 0x0; _0x1c7158 < 0x120; ++_0x1c7158) {
    _0xa4bf1d[_0x1c7158] = _0x559b25.subarray(0x0, _0x1c7158 + 0x1);
  }
  var _0x4b3a50 = new Int32Array(0x120);
  for (var _0x1c7158 = 0x0; _0x1c7158 < 0x120; ++_0x1c7158) {
    _0x555210[_0x1c7158] = _0x4b3a50.subarray(0x0, _0x1c7158 + 0x1);
  }
  function _0x279f64(_0x14a013, _0x242f29, _0x2bd98e) {
    var _0x5e2d23 = _0x2bd98e > 0x0 ? _0x2bd98e : _0x35ce1(_0x14a013) + 0x1;
    var _0x2619ae = new Array(_0x5e2d23);
    var _0x90b402 = _0x58221b(_0x14a013, _0x2619ae, 0x0, _0x2619ae.length);
    if (_0x242f29) {
      _0x2619ae.length = _0x90b402;
    }
    return _0x2619ae;
  }
  var _0x34e91f = _0x3e26fa.___wasm_call_ctors = function () {
    return (_0x34e91f = _0x3e26fa.___wasm_call_ctors = _0x3e26fa.asm.uj).apply(null, arguments);
  };
  var _0x3a5b93 = _0x3e26fa._ReleaseKeys = function () {
    return (_0x3a5b93 = _0x3e26fa._ReleaseKeys = _0x3e26fa.asm.vj).apply(null, arguments);
  };
  var _0x328759 = _0x3e26fa._SendMessageFloat = function () {
    return (_0x328759 = _0x3e26fa._SendMessageFloat = _0x3e26fa.asm.wj).apply(null, arguments);
  };
  var _0x351cc8 = _0x3e26fa._SendMessageString = function () {
    return (_0x351cc8 = _0x3e26fa._SendMessageString = _0x3e26fa.asm.xj).apply(null, arguments);
  };
  var _0x3d0b98 = _0x3e26fa._SendMessage = function () {
    return (_0x3d0b98 = _0x3e26fa._SendMessage = _0x3e26fa.asm.yj).apply(null, arguments);
  };
  var _0x23a707 = _0x3e26fa._SetFullscreen = function () {
    return (_0x23a707 = _0x3e26fa._SetFullscreen = _0x3e26fa.asm.zj).apply(null, arguments);
  };
  var _0x424d8d = _0x3e26fa._main = function () {
    return (_0x424d8d = _0x3e26fa._main = _0x3e26fa.asm.Aj).apply(null, arguments);
  };
  var _0x34c1fa = _0x3e26fa.___errno_location = function () {
    return (_0x34c1fa = _0x3e26fa.___errno_location = _0x3e26fa.asm.Bj).apply(null, arguments);
  };
  var _0x3d932d = _0x3e26fa._htonl = function () {
    return (_0x3d932d = _0x3e26fa._htonl = _0x3e26fa.asm.Cj).apply(null, arguments);
  };
  var _0x370566 = _0x3e26fa._htons = function () {
    return (_0x370566 = _0x3e26fa._htons = _0x3e26fa.asm.Dj).apply(null, arguments);
  };
  var _0x54dcca = _0x3e26fa._ntohs = function () {
    return (_0x54dcca = _0x3e26fa._ntohs = _0x3e26fa.asm.Ej).apply(null, arguments);
  };
  var _0x2f40bb = _0x3e26fa.__get_tzname = function () {
    return (_0x2f40bb = _0x3e26fa.__get_tzname = _0x3e26fa.asm.Fj).apply(null, arguments);
  };
  var _0x228a46 = _0x3e26fa.__get_daylight = function () {
    return (_0x228a46 = _0x3e26fa.__get_daylight = _0x3e26fa.asm.Gj).apply(null, arguments);
  };
  var _0xc308b = _0x3e26fa.__get_timezone = function () {
    return (_0xc308b = _0x3e26fa.__get_timezone = _0x3e26fa.asm.Hj).apply(null, arguments);
  };
  var _0x328ef0 = _0x3e26fa.stackSave = function () {
    return (_0x328ef0 = _0x3e26fa.stackSave = _0x3e26fa.asm.Ij).apply(null, arguments);
  };
  var _0x570ce6 = _0x3e26fa.stackRestore = function () {
    return (_0x570ce6 = _0x3e26fa.stackRestore = _0x3e26fa.asm.Jj).apply(null, arguments);
  };
  var _0x1c92f2 = _0x3e26fa.stackAlloc = function () {
    return (_0x1c92f2 = _0x3e26fa.stackAlloc = _0x3e26fa.asm.Kj).apply(null, arguments);
  };
  var _0x459915 = _0x3e26fa._setThrew = function () {
    return (_0x459915 = _0x3e26fa._setThrew = _0x3e26fa.asm.Lj).apply(null, arguments);
  };
  var _0x30eeff = _0x3e26fa.___cxa_can_catch = function () {
    return (_0x30eeff = _0x3e26fa.___cxa_can_catch = _0x3e26fa.asm.Mj).apply(null, arguments);
  };
  var _0xd438bb = _0x3e26fa.___cxa_is_pointer_type = function () {
    return (_0xd438bb = _0x3e26fa.___cxa_is_pointer_type = _0x3e26fa.asm.Nj).apply(null, arguments);
  };
  var _0x54d388 = _0x3e26fa._malloc = function () {
    return (_0x54d388 = _0x3e26fa._malloc = _0x3e26fa.asm.Oj).apply(null, arguments);
  };
  var _0x14abf4 = _0x3e26fa._free = function () {
    return (_0x14abf4 = _0x3e26fa._free = _0x3e26fa.asm.Pj).apply(null, arguments);
  };
  var _0x114e5e = _0x3e26fa._memalign = function () {
    return (_0x114e5e = _0x3e26fa._memalign = _0x3e26fa.asm.Qj).apply(null, arguments);
  };
  var _0x583988 = _0x3e26fa._memset = function () {
    return (_0x583988 = _0x3e26fa._memset = _0x3e26fa.asm.Rj).apply(null, arguments);
  };
  var _0x134557 = _0x3e26fa._strlen = function () {
    return (_0x134557 = _0x3e26fa._strlen = _0x3e26fa.asm.Sj).apply(null, arguments);
  };
  var _0x5562fe = _0x3e26fa.dynCall_iidiiii = function () {
    return (_0x5562fe = _0x3e26fa.dynCall_iidiiii = _0x3e26fa.asm.Uj).apply(null, arguments);
  };
  var _0x2e6d82 = _0x3e26fa.dynCall_vii = function () {
    return (_0x2e6d82 = _0x3e26fa.dynCall_vii = _0x3e26fa.asm.Vj).apply(null, arguments);
  };
  var _0x54b2d3 = _0x3e26fa.dynCall_iii = function () {
    return (_0x54b2d3 = _0x3e26fa.dynCall_iii = _0x3e26fa.asm.Wj).apply(null, arguments);
  };
  var _0x399d3a = _0x3e26fa.dynCall_ii = function () {
    return (_0x399d3a = _0x3e26fa.dynCall_ii = _0x3e26fa.asm.Xj).apply(null, arguments);
  };
  var _0x8dfc06 = _0x3e26fa.dynCall_iiii = function () {
    return (_0x8dfc06 = _0x3e26fa.dynCall_iiii = _0x3e26fa.asm.Yj).apply(null, arguments);
  };
  var _0x291fd0 = _0x3e26fa.dynCall_jiji = function () {
    return (_0x291fd0 = _0x3e26fa.dynCall_jiji = _0x3e26fa.asm.Zj).apply(null, arguments);
  };
  var _0x211044 = _0x3e26fa.dynCall_vi = function () {
    return (_0x211044 = _0x3e26fa.dynCall_vi = _0x3e26fa.asm._j).apply(null, arguments);
  };
  var _0x4f7367 = _0x3e26fa.dynCall_iiiii = function () {
    return (_0x4f7367 = _0x3e26fa.dynCall_iiiii = _0x3e26fa.asm.$j).apply(null, arguments);
  };
  var _0x1f1dd5 = _0x3e26fa.dynCall_viii = function () {
    return (_0x1f1dd5 = _0x3e26fa.dynCall_viii = _0x3e26fa.asm.ak).apply(null, arguments);
  };
  var _0x31d4e9 = _0x3e26fa.dynCall_viiiiii = function () {
    return (_0x31d4e9 = _0x3e26fa.dynCall_viiiiii = _0x3e26fa.asm.bk).apply(null, arguments);
  };
  var _0x4f5157 = _0x3e26fa.dynCall_viiiii = function () {
    return (_0x4f5157 = _0x3e26fa.dynCall_viiiii = _0x3e26fa.asm.ck).apply(null, arguments);
  };
  var _0x31e334 = _0x3e26fa.dynCall_viiii = function () {
    return (_0x31e334 = _0x3e26fa.dynCall_viiii = _0x3e26fa.asm.dk).apply(null, arguments);
  };
  var _0x4d32c7 = _0x3e26fa.dynCall_iiiiii = function () {
    return (_0x4d32c7 = _0x3e26fa.dynCall_iiiiii = _0x3e26fa.asm.ek).apply(null, arguments);
  };
  var _0x45031f = _0x3e26fa.dynCall_iiij = function () {
    return (_0x45031f = _0x3e26fa.dynCall_iiij = _0x3e26fa.asm.fk).apply(null, arguments);
  };
  var _0x58d210 = _0x3e26fa.dynCall_v = function () {
    return (_0x58d210 = _0x3e26fa.dynCall_v = _0x3e26fa.asm.gk).apply(null, arguments);
  };
  var _0x35379c = _0x3e26fa.dynCall_i = function () {
    return (_0x35379c = _0x3e26fa.dynCall_i = _0x3e26fa.asm.hk).apply(null, arguments);
  };
  var _0x16b876 = _0x3e26fa.dynCall_iiiiiiii = function () {
    return (_0x16b876 = _0x3e26fa.dynCall_iiiiiiii = _0x3e26fa.asm.ik).apply(null, arguments);
  };
  var _0x1811fc = _0x3e26fa.dynCall_iiijiii = function () {
    return (_0x1811fc = _0x3e26fa.dynCall_iiijiii = _0x3e26fa.asm.jk).apply(null, arguments);
  };
  var _0x3d4222 = _0x3e26fa.dynCall_iij = function () {
    return (_0x3d4222 = _0x3e26fa.dynCall_iij = _0x3e26fa.asm.kk).apply(null, arguments);
  };
  var _0x33090f = _0x3e26fa.dynCall_iiiiiii = function () {
    return (_0x33090f = _0x3e26fa.dynCall_iiiiiii = _0x3e26fa.asm.lk).apply(null, arguments);
  };
  var _0x28cde1 = _0x3e26fa.dynCall_jii = function () {
    return (_0x28cde1 = _0x3e26fa.dynCall_jii = _0x3e26fa.asm.mk).apply(null, arguments);
  };
  var _0x25b8ad = _0x3e26fa.dynCall_viiiiiii = function () {
    return (_0x25b8ad = _0x3e26fa.dynCall_viiiiiii = _0x3e26fa.asm.nk).apply(null, arguments);
  };
  var _0x4abe47 = _0x3e26fa.dynCall_viiff = function () {
    return (_0x4abe47 = _0x3e26fa.dynCall_viiff = _0x3e26fa.asm.ok).apply(null, arguments);
  };
  var _0x26440 = _0x3e26fa.dynCall_jiii = function () {
    return (_0x26440 = _0x3e26fa.dynCall_jiii = _0x3e26fa.asm.pk).apply(null, arguments);
  };
  var _0x1e3b43 = _0x3e26fa.dynCall_jiiii = function () {
    return (_0x1e3b43 = _0x3e26fa.dynCall_jiiii = _0x3e26fa.asm.qk).apply(null, arguments);
  };
  var _0x4a98d6 = _0x3e26fa.dynCall_fiiii = function () {
    return (_0x4a98d6 = _0x3e26fa.dynCall_fiiii = _0x3e26fa.asm.rk).apply(null, arguments);
  };
  var _0x361624 = _0x3e26fa.dynCall_diiii = function () {
    return (_0x361624 = _0x3e26fa.dynCall_diiii = _0x3e26fa.asm.sk).apply(null, arguments);
  };
  var _0x348130 = _0x3e26fa.dynCall_diii = function () {
    return (_0x348130 = _0x3e26fa.dynCall_diii = _0x3e26fa.asm.tk).apply(null, arguments);
  };
  var _0x36b697 = _0x3e26fa.dynCall_fiii = function () {
    return (_0x36b697 = _0x3e26fa.dynCall_fiii = _0x3e26fa.asm.uk).apply(null, arguments);
  };
  var _0x56ba77 = _0x3e26fa.dynCall_viifi = function () {
    return (_0x56ba77 = _0x3e26fa.dynCall_viifi = _0x3e26fa.asm.vk).apply(null, arguments);
  };
  var _0x6b7265 = _0x3e26fa.dynCall_vijii = function () {
    return (_0x6b7265 = _0x3e26fa.dynCall_vijii = _0x3e26fa.asm.wk).apply(null, arguments);
  };
  var _0x5293a7 = _0x3e26fa.dynCall_iiji = function () {
    return (_0x5293a7 = _0x3e26fa.dynCall_iiji = _0x3e26fa.asm.xk).apply(null, arguments);
  };
  var _0x3fcf45 = _0x3e26fa.dynCall_viiiiiiiii = function () {
    return (_0x3fcf45 = _0x3e26fa.dynCall_viiiiiiiii = _0x3e26fa.asm.yk).apply(null, arguments);
  };
  var _0x18ce17 = _0x3e26fa.dynCall_iiiiiiiiii = function () {
    return (_0x18ce17 = _0x3e26fa.dynCall_iiiiiiiiii = _0x3e26fa.asm.zk).apply(null, arguments);
  };
  var _0xad7bbd = _0x3e26fa.dynCall_iiiiiiiii = function () {
    return (_0xad7bbd = _0x3e26fa.dynCall_iiiiiiiii = _0x3e26fa.asm.Ak).apply(null, arguments);
  };
  var _0xeecbd = _0x3e26fa.dynCall_jjii = function () {
    return (_0xeecbd = _0x3e26fa.dynCall_jjii = _0x3e26fa.asm.Bk).apply(null, arguments);
  };
  var _0x2ce427 = _0x3e26fa.dynCall_viiiiiiii = function () {
    return (_0x2ce427 = _0x3e26fa.dynCall_viiiiiiii = _0x3e26fa.asm.Ck).apply(null, arguments);
  };
  var _0x53ce72 = _0x3e26fa.dynCall_jiiijii = function () {
    return (_0x53ce72 = _0x3e26fa.dynCall_jiiijii = _0x3e26fa.asm.Dk).apply(null, arguments);
  };
  var _0x5c6d1c = _0x3e26fa.dynCall_viiijiii = function () {
    return (_0x5c6d1c = _0x3e26fa.dynCall_viiijiii = _0x3e26fa.asm.Ek).apply(null, arguments);
  };
  var _0x32ee17 = _0x3e26fa.dynCall_ddiii = function () {
    return (_0x32ee17 = _0x3e26fa.dynCall_ddiii = _0x3e26fa.asm.Fk).apply(null, arguments);
  };
  var _0x53395f = _0x3e26fa.dynCall_diiid = function () {
    return (_0x53395f = _0x3e26fa.dynCall_diiid = _0x3e26fa.asm.Gk).apply(null, arguments);
  };
  var _0x1052ff = _0x3e26fa.dynCall_jiiij = function () {
    return (_0x1052ff = _0x3e26fa.dynCall_jiiij = _0x3e26fa.asm.Hk).apply(null, arguments);
  };
  var _0x3679c1 = _0x3e26fa.dynCall_fiiif = function () {
    return (_0x3679c1 = _0x3e26fa.dynCall_fiiif = _0x3e26fa.asm.Ik).apply(null, arguments);
  };
  var _0x5c7790 = _0x3e26fa.dynCall_dii = function () {
    return (_0x5c7790 = _0x3e26fa.dynCall_dii = _0x3e26fa.asm.Jk).apply(null, arguments);
  };
  var _0x334fdf = _0x3e26fa.dynCall_fii = function () {
    return (_0x334fdf = _0x3e26fa.dynCall_fii = _0x3e26fa.asm.Kk).apply(null, arguments);
  };
  var _0x4233b6 = _0x3e26fa.dynCall_ifi = function () {
    return (_0x4233b6 = _0x3e26fa.dynCall_ifi = _0x3e26fa.asm.Lk).apply(null, arguments);
  };
  var _0x301d94 = _0x3e26fa.dynCall_idi = function () {
    return (_0x301d94 = _0x3e26fa.dynCall_idi = _0x3e26fa.asm.Mk).apply(null, arguments);
  };
  var _0x60923d = _0x3e26fa.dynCall_iijji = function () {
    return (_0x60923d = _0x3e26fa.dynCall_iijji = _0x3e26fa.asm.Nk).apply(null, arguments);
  };
  var _0x34fb64 = _0x3e26fa.dynCall_iiddi = function () {
    return (_0x34fb64 = _0x3e26fa.dynCall_iiddi = _0x3e26fa.asm.Ok).apply(null, arguments);
  };
  var _0x39a131 = _0x3e26fa.dynCall_iiffi = function () {
    return (_0x39a131 = _0x3e26fa.dynCall_iiffi = _0x3e26fa.asm.Pk).apply(null, arguments);
  };
  var _0x44053c = _0x3e26fa.dynCall_viiiiiiiiiiii = function () {
    return (_0x44053c = _0x3e26fa.dynCall_viiiiiiiiiiii = _0x3e26fa.asm.Qk).apply(null, arguments);
  };
  var _0x3e0239 = _0x3e26fa.dynCall_iiiiji = function () {
    return (_0x3e0239 = _0x3e26fa.dynCall_iiiiji = _0x3e26fa.asm.Rk).apply(null, arguments);
  };
  var _0x38267e = _0x3e26fa.dynCall_viiiiiiiiiiiii = function () {
    return (_0x38267e = _0x3e26fa.dynCall_viiiiiiiiiiiii = _0x3e26fa.asm.Sk).apply(null, arguments);
  };
  var _0x306d05 = _0x3e26fa.dynCall_viji = function () {
    return (_0x306d05 = _0x3e26fa.dynCall_viji = _0x3e26fa.asm.Tk).apply(null, arguments);
  };
  var _0x528c9b = _0x3e26fa.dynCall_viiij = function () {
    return (_0x528c9b = _0x3e26fa.dynCall_viiij = _0x3e26fa.asm.Uk).apply(null, arguments);
  };
  var _0x38f5e4 = _0x3e26fa.dynCall_vidi = function () {
    return (_0x38f5e4 = _0x3e26fa.dynCall_vidi = _0x3e26fa.asm.Vk).apply(null, arguments);
  };
  var _0x2c059d = _0x3e26fa.dynCall_vifi = function () {
    return (_0x2c059d = _0x3e26fa.dynCall_vifi = _0x3e26fa.asm.Wk).apply(null, arguments);
  };
  var _0x1f50e4 = _0x3e26fa.dynCall_fffi = function () {
    return (_0x1f50e4 = _0x3e26fa.dynCall_fffi = _0x3e26fa.asm.Xk).apply(null, arguments);
  };
  var _0x1c98d1 = _0x3e26fa.dynCall_ijji = function () {
    return (_0x1c98d1 = _0x3e26fa.dynCall_ijji = _0x3e26fa.asm.Yk).apply(null, arguments);
  };
  var _0x4413a0 = _0x3e26fa.dynCall_jji = function () {
    return (_0x4413a0 = _0x3e26fa.dynCall_jji = _0x3e26fa.asm.Zk).apply(null, arguments);
  };
  var _0x563206 = _0x3e26fa.dynCall_jjji = function () {
    return (_0x563206 = _0x3e26fa.dynCall_jjji = _0x3e26fa.asm._k).apply(null, arguments);
  };
  var _0x20acf7 = _0x3e26fa.dynCall_dddi = function () {
    return (_0x20acf7 = _0x3e26fa.dynCall_dddi = _0x3e26fa.asm.$k).apply(null, arguments);
  };
  var _0x17ca3b = _0x3e26fa.dynCall_iidi = function () {
    return (_0x17ca3b = _0x3e26fa.dynCall_iidi = _0x3e26fa.asm.al).apply(null, arguments);
  };
  var _0x1243ce = _0x3e26fa.dynCall_iifi = function () {
    return (_0x1243ce = _0x3e26fa.dynCall_iifi = _0x3e26fa.asm.bl).apply(null, arguments);
  };
  var _0x528850 = _0x3e26fa.dynCall_viiiiiiiiii = function () {
    return (_0x528850 = _0x3e26fa.dynCall_viiiiiiiiii = _0x3e26fa.asm.cl).apply(null, arguments);
  };
  var _0x557b07 = _0x3e26fa.dynCall_vifii = function () {
    return (_0x557b07 = _0x3e26fa.dynCall_vifii = _0x3e26fa.asm.dl).apply(null, arguments);
  };
  var _0x266d50 = _0x3e26fa.dynCall_viijjii = function () {
    return (_0x266d50 = _0x3e26fa.dynCall_viijjii = _0x3e26fa.asm.el).apply(null, arguments);
  };
  var _0x1216f3 = _0x3e26fa.dynCall_iiiji = function () {
    return (_0x1216f3 = _0x3e26fa.dynCall_iiiji = _0x3e26fa.asm.fl).apply(null, arguments);
  };
  var _0x301071 = _0x3e26fa.dynCall_iiidi = function () {
    return (_0x301071 = _0x3e26fa.dynCall_iiidi = _0x3e26fa.asm.gl).apply(null, arguments);
  };
  var _0x74ea8a = _0x3e26fa.dynCall_fifi = function () {
    return (_0x74ea8a = _0x3e26fa.dynCall_fifi = _0x3e26fa.asm.hl).apply(null, arguments);
  };
  var _0x9e8bf0 = _0x3e26fa.dynCall_fi = function () {
    return (_0x9e8bf0 = _0x3e26fa.dynCall_fi = _0x3e26fa.asm.il).apply(null, arguments);
  };
  var _0x7b4fe9 = _0x3e26fa.dynCall_viffffi = function () {
    return (_0x7b4fe9 = _0x3e26fa.dynCall_viffffi = _0x3e26fa.asm.jl).apply(null, arguments);
  };
  var _0x2eb856 = _0x3e26fa.dynCall_viiiifi = function () {
    return (_0x2eb856 = _0x3e26fa.dynCall_viiiifi = _0x3e26fa.asm.kl).apply(null, arguments);
  };
  var _0x38a80c = _0x3e26fa.dynCall_ji = function () {
    return (_0x38a80c = _0x3e26fa.dynCall_ji = _0x3e26fa.asm.ll).apply(null, arguments);
  };
  var _0x5b225b = _0x3e26fa.dynCall_iiiifii = function () {
    return (_0x5b225b = _0x3e26fa.dynCall_iiiifii = _0x3e26fa.asm.ml).apply(null, arguments);
  };
  var _0x1da28c = _0x3e26fa.dynCall_iiifii = function () {
    return (_0x1da28c = _0x3e26fa.dynCall_iiifii = _0x3e26fa.asm.nl).apply(null, arguments);
  };
  var _0xef9c0b = _0x3e26fa.dynCall_viiiifii = function () {
    return (_0xef9c0b = _0x3e26fa.dynCall_viiiifii = _0x3e26fa.asm.ol).apply(null, arguments);
  };
  var _0x538c24 = _0x3e26fa.dynCall_viiffi = function () {
    return (_0x538c24 = _0x3e26fa.dynCall_viiffi = _0x3e26fa.asm.pl).apply(null, arguments);
  };
  var _0x23e4f5 = _0x3e26fa.dynCall_viiiji = function () {
    return (_0x23e4f5 = _0x3e26fa.dynCall_viiiji = _0x3e26fa.asm.ql).apply(null, arguments);
  };
  var _0x58c59f = _0x3e26fa.dynCall_viiiiiiiiifi = function () {
    return (_0x58c59f = _0x3e26fa.dynCall_viiiiiiiiifi = _0x3e26fa.asm.rl).apply(null, arguments);
  };
  var _0x2bfe12 = _0x3e26fa.dynCall_iiiiiiiiiiiii = function () {
    return (_0x2bfe12 = _0x3e26fa.dynCall_iiiiiiiiiiiii = _0x3e26fa.asm.sl).apply(null, arguments);
  };
  var _0x5391b7 = _0x3e26fa.dynCall_iiiifi = function () {
    return (_0x5391b7 = _0x3e26fa.dynCall_iiiifi = _0x3e26fa.asm.tl).apply(null, arguments);
  };
  var _0xc5c1cc = _0x3e26fa.dynCall_iiiiiiiiiiii = function () {
    return (_0xc5c1cc = _0x3e26fa.dynCall_iiiiiiiiiiii = _0x3e26fa.asm.ul).apply(null, arguments);
  };
  var _0x45c0d8 = _0x3e26fa.dynCall_iiiiiiiiiiiiii = function () {
    return (_0x45c0d8 = _0x3e26fa.dynCall_iiiiiiiiiiiiii = _0x3e26fa.asm.vl).apply(null, arguments);
  };
  var _0x5880fb = _0x3e26fa.dynCall_iiiiiiiiiiiiiii = function () {
    return (_0x5880fb = _0x3e26fa.dynCall_iiiiiiiiiiiiiii = _0x3e26fa.asm.wl).apply(null, arguments);
  };
  var _0x7e5181 = _0x3e26fa.dynCall_iiiiiiiiiiiiiiii = function () {
    return (_0x7e5181 = _0x3e26fa.dynCall_iiiiiiiiiiiiiiii = _0x3e26fa.asm.xl).apply(null, arguments);
  };
  var _0x304def = _0x3e26fa.dynCall_iiiiiiiiiiiiiiiii = function () {
    return (_0x304def = _0x3e26fa.dynCall_iiiiiiiiiiiiiiiii = _0x3e26fa.asm.yl).apply(null, arguments);
  };
  var _0x502fc5 = _0x3e26fa.dynCall_iiiiiiiiiiiiiiiiii = function () {
    return (_0x502fc5 = _0x3e26fa.dynCall_iiiiiiiiiiiiiiiiii = _0x3e26fa.asm.zl).apply(null, arguments);
  };
  var _0x1ec32a = _0x3e26fa.dynCall_iiiiiiiiiiiiiiiiiii = function () {
    return (_0x1ec32a = _0x3e26fa.dynCall_iiiiiiiiiiiiiiiiiii = _0x3e26fa.asm.Al).apply(null, arguments);
  };
  var _0x1012a5 = _0x3e26fa.dynCall_jiiji = function () {
    return (_0x1012a5 = _0x3e26fa.dynCall_jiiji = _0x3e26fa.asm.Bl).apply(null, arguments);
  };
  var _0x13e702 = _0x3e26fa.dynCall_viij = function () {
    return (_0x13e702 = _0x3e26fa.dynCall_viij = _0x3e26fa.asm.Cl).apply(null, arguments);
  };
  var _0x1d69f6 = _0x3e26fa.dynCall_iijii = function () {
    return (_0x1d69f6 = _0x3e26fa.dynCall_iijii = _0x3e26fa.asm.Dl).apply(null, arguments);
  };
  var _0x4ab673 = _0x3e26fa.dynCall_viiijj = function () {
    return (_0x4ab673 = _0x3e26fa.dynCall_viiijj = _0x3e26fa.asm.El).apply(null, arguments);
  };
  var _0x5851a7 = _0x3e26fa.dynCall_j = function () {
    return (_0x5851a7 = _0x3e26fa.dynCall_j = _0x3e26fa.asm.Fl).apply(null, arguments);
  };
  var _0x5028e0 = _0x3e26fa.dynCall_jijj = function () {
    return (_0x5028e0 = _0x3e26fa.dynCall_jijj = _0x3e26fa.asm.Gl).apply(null, arguments);
  };
  var _0x451adf = _0x3e26fa.dynCall_iiiiiiiiiji = function () {
    return (_0x451adf = _0x3e26fa.dynCall_iiiiiiiiiji = _0x3e26fa.asm.Hl).apply(null, arguments);
  };
  var _0xb41be0 = _0x3e26fa.dynCall_vji = function () {
    return (_0xb41be0 = _0x3e26fa.dynCall_vji = _0x3e26fa.asm.Il).apply(null, arguments);
  };
  var _0x537cc4 = _0x3e26fa.dynCall_viijji = function () {
    return (_0x537cc4 = _0x3e26fa.dynCall_viijji = _0x3e26fa.asm.Jl).apply(null, arguments);
  };
  var _0x1e6dae = _0x3e26fa.dynCall_jdi = function () {
    return (_0x1e6dae = _0x3e26fa.dynCall_jdi = _0x3e26fa.asm.Kl).apply(null, arguments);
  };
  var _0x1e8a0c = _0x3e26fa.dynCall_vijiii = function () {
    return (_0x1e8a0c = _0x3e26fa.dynCall_vijiii = _0x3e26fa.asm.Ll).apply(null, arguments);
  };
  var _0xb5e54b = _0x3e26fa.dynCall_ijiii = function () {
    return (_0xb5e54b = _0x3e26fa.dynCall_ijiii = _0x3e26fa.asm.Ml).apply(null, arguments);
  };
  var _0x5744c1 = _0x3e26fa.dynCall_viiji = function () {
    return (_0x5744c1 = _0x3e26fa.dynCall_viiji = _0x3e26fa.asm.Nl).apply(null, arguments);
  };
  var _0x12fce0 = _0x3e26fa.dynCall_iiiiiiiiiii = function () {
    return (_0x12fce0 = _0x3e26fa.dynCall_iiiiiiiiiii = _0x3e26fa.asm.Ol).apply(null, arguments);
  };
  var _0x22bb91 = _0x3e26fa.dynCall_fiiffi = function () {
    return (_0x22bb91 = _0x3e26fa.dynCall_fiiffi = _0x3e26fa.asm.Pl).apply(null, arguments);
  };
  var _0x23e8a7 = _0x3e26fa.dynCall_viiififii = function () {
    return (_0x23e8a7 = _0x3e26fa.dynCall_viiififii = _0x3e26fa.asm.Ql).apply(null, arguments);
  };
  var _0x215f60 = _0x3e26fa.dynCall_fiifi = function () {
    return (_0x215f60 = _0x3e26fa.dynCall_fiifi = _0x3e26fa.asm.Rl).apply(null, arguments);
  };
  var _0x43c192 = _0x3e26fa.dynCall_jijiii = function () {
    return (_0x43c192 = _0x3e26fa.dynCall_jijiii = _0x3e26fa.asm.Sl).apply(null, arguments);
  };
  var _0x5694fe = _0x3e26fa.dynCall_dji = function () {
    return (_0x5694fe = _0x3e26fa.dynCall_dji = _0x3e26fa.asm.Tl).apply(null, arguments);
  };
  var _0x19102c = _0x3e26fa.dynCall_iji = function () {
    return (_0x19102c = _0x3e26fa.dynCall_iji = _0x3e26fa.asm.Ul).apply(null, arguments);
  };
  var _0x36c538 = _0x3e26fa.dynCall_viiifi = function () {
    return (_0x36c538 = _0x3e26fa.dynCall_viiifi = _0x3e26fa.asm.Vl).apply(null, arguments);
  };
  var _0x281928 = _0x3e26fa.dynCall_viiiiiiiiiii = function () {
    return (_0x281928 = _0x3e26fa.dynCall_viiiiiiiiiii = _0x3e26fa.asm.Wl).apply(null, arguments);
  };
  var _0x4845e4 = _0x3e26fa.dynCall_iiijii = function () {
    return (_0x4845e4 = _0x3e26fa.dynCall_iiijii = _0x3e26fa.asm.Xl).apply(null, arguments);
  };
  var _0xf92540 = _0x3e26fa.dynCall_iijiiii = function () {
    return (_0xf92540 = _0x3e26fa.dynCall_iijiiii = _0x3e26fa.asm.Yl).apply(null, arguments);
  };
  var _0x4c6c2c = _0x3e26fa.dynCall_viijii = function () {
    return (_0x4c6c2c = _0x3e26fa.dynCall_viijii = _0x3e26fa.asm.Zl).apply(null, arguments);
  };
  var _0x1c77d1 = _0x3e26fa.dynCall_iijiiiiii = function () {
    return (_0x1c77d1 = _0x3e26fa.dynCall_iijiiiiii = _0x3e26fa.asm._l).apply(null, arguments);
  };
  var _0x370c8c = _0x3e26fa.dynCall_iijjiiiiii = function () {
    return (_0x370c8c = _0x3e26fa.dynCall_iijjiiiiii = _0x3e26fa.asm.$l).apply(null, arguments);
  };
  var _0x128970 = _0x3e26fa.dynCall_iiiijjii = function () {
    return (_0x128970 = _0x3e26fa.dynCall_iiiijjii = _0x3e26fa.asm.am).apply(null, arguments);
  };
  var _0x39588e = _0x3e26fa.dynCall_iijiii = function () {
    return (_0x39588e = _0x3e26fa.dynCall_iijiii = _0x3e26fa.asm.bm).apply(null, arguments);
  };
  var _0x331d4b = _0x3e26fa.dynCall_viiiiiiifiifiii = function () {
    return (_0x331d4b = _0x3e26fa.dynCall_viiiiiiifiifiii = _0x3e26fa.asm.cm).apply(null, arguments);
  };
  var _0x5f26d9 = _0x3e26fa.dynCall_viiiiiiifddfiii = function () {
    return (_0x5f26d9 = _0x3e26fa.dynCall_viiiiiiifddfiii = _0x3e26fa.asm.dm).apply(null, arguments);
  };
  var _0x28cac1 = _0x3e26fa.dynCall_viiiiiiifjjfiii = function () {
    return (_0x28cac1 = _0x3e26fa.dynCall_viiiiiiifjjfiii = _0x3e26fa.asm.em).apply(null, arguments);
  };
  var _0x375f44 = _0x3e26fa.dynCall_viiiiiiiffffiii = function () {
    return (_0x375f44 = _0x3e26fa.dynCall_viiiiiiiffffiii = _0x3e26fa.asm.fm).apply(null, arguments);
  };
  var _0x3debfe = _0x3e26fa.dynCall_iiifi = function () {
    return (_0x3debfe = _0x3e26fa.dynCall_iiifi = _0x3e26fa.asm.gm).apply(null, arguments);
  };
  var _0x2201c8 = _0x3e26fa.dynCall_viidi = function () {
    return (_0x2201c8 = _0x3e26fa.dynCall_viidi = _0x3e26fa.asm.hm).apply(null, arguments);
  };
  var _0x1b0bc0 = _0x3e26fa.dynCall_viif = function () {
    return (_0x1b0bc0 = _0x3e26fa.dynCall_viif = _0x3e26fa.asm.im).apply(null, arguments);
  };
  var _0x26bdb5 = _0x3e26fa.dynCall_iiiiij = function () {
    return (_0x26bdb5 = _0x3e26fa.dynCall_iiiiij = _0x3e26fa.asm.jm).apply(null, arguments);
  };
  var _0xb6929d = _0x3e26fa.dynCall_viijiiijiiii = function () {
    return (_0xb6929d = _0x3e26fa.dynCall_viijiiijiiii = _0x3e26fa.asm.km).apply(null, arguments);
  };
  var _0x2704b0 = _0x3e26fa.dynCall_vijjji = function () {
    return (_0x2704b0 = _0x3e26fa.dynCall_vijjji = _0x3e26fa.asm.lm).apply(null, arguments);
  };
  var _0xe8d9ae = _0x3e26fa.dynCall_viiiiiiiiiiiiii = function () {
    return (_0xe8d9ae = _0x3e26fa.dynCall_viiiiiiiiiiiiii = _0x3e26fa.asm.mm).apply(null, arguments);
  };
  var _0x2e50c1 = _0x3e26fa.dynCall_viiiiiiiiiiiiiii = function () {
    return (_0x2e50c1 = _0x3e26fa.dynCall_viiiiiiiiiiiiiii = _0x3e26fa.asm.nm).apply(null, arguments);
  };
  var _0xf75075 = _0x3e26fa.dynCall_viiiiiiiiiiiiiiii = function () {
    return (_0xf75075 = _0x3e26fa.dynCall_viiiiiiiiiiiiiiii = _0x3e26fa.asm.om).apply(null, arguments);
  };
  var _0x3176bd = _0x3e26fa.dynCall_viiiiiiiiiiiiiiiii = function () {
    return (_0x3176bd = _0x3e26fa.dynCall_viiiiiiiiiiiiiiiii = _0x3e26fa.asm.pm).apply(null, arguments);
  };
  var _0x4546a1 = _0x3e26fa.dynCall_viiiiiiiiiiiiiiiiii = function () {
    return (_0x4546a1 = _0x3e26fa.dynCall_viiiiiiiiiiiiiiiiii = _0x3e26fa.asm.qm).apply(null, arguments);
  };
  var _0x40353a = _0x3e26fa.dynCall_viffi = function () {
    return (_0x40353a = _0x3e26fa.dynCall_viffi = _0x3e26fa.asm.rm).apply(null, arguments);
  };
  var _0x1fd6fa = _0x3e26fa.dynCall_viiidi = function () {
    return (_0x1fd6fa = _0x3e26fa.dynCall_viiidi = _0x3e26fa.asm.sm).apply(null, arguments);
  };
  var _0xda3018 = _0x3e26fa.dynCall_vijijii = function () {
    return (_0xda3018 = _0x3e26fa.dynCall_vijijii = _0x3e26fa.asm.tm).apply(null, arguments);
  };
  var _0x2b3606 = _0x3e26fa.dynCall_viijiiiiii = function () {
    return (_0x2b3606 = _0x3e26fa.dynCall_viijiiiiii = _0x3e26fa.asm.um).apply(null, arguments);
  };
  var _0x2e90fe = _0x3e26fa.dynCall_vjjjiiii = function () {
    return (_0x2e90fe = _0x3e26fa.dynCall_vjjjiiii = _0x3e26fa.asm.vm).apply(null, arguments);
  };
  var _0x1ea19f = _0x3e26fa.dynCall_vjiiiii = function () {
    return (_0x1ea19f = _0x3e26fa.dynCall_vjiiiii = _0x3e26fa.asm.wm).apply(null, arguments);
  };
  var _0xa9bcbd = _0x3e26fa.dynCall_jiiiiiiiiii = function () {
    return (_0xa9bcbd = _0x3e26fa.dynCall_jiiiiiiiiii = _0x3e26fa.asm.xm).apply(null, arguments);
  };
  var _0x20e6f2 = _0x3e26fa.dynCall_jiiiii = function () {
    return (_0x20e6f2 = _0x3e26fa.dynCall_jiiiii = _0x3e26fa.asm.ym).apply(null, arguments);
  };
  var _0x1fcc70 = _0x3e26fa.dynCall_fiffffi = function () {
    return (_0x1fcc70 = _0x3e26fa.dynCall_fiffffi = _0x3e26fa.asm.zm).apply(null, arguments);
  };
  var _0x1180ed = _0x3e26fa.dynCall_iiiffi = function () {
    return (_0x1180ed = _0x3e26fa.dynCall_iiiffi = _0x3e26fa.asm.Am).apply(null, arguments);
  };
  var _0x445774 = _0x3e26fa.dynCall_iifii = function () {
    return (_0x445774 = _0x3e26fa.dynCall_iifii = _0x3e26fa.asm.Bm).apply(null, arguments);
  };
  var _0x2d805f = _0x3e26fa.dynCall_iiffii = function () {
    return (_0x2d805f = _0x3e26fa.dynCall_iiffii = _0x3e26fa.asm.Cm).apply(null, arguments);
  };
  var _0x94f9c8 = _0x3e26fa.dynCall_iiifiii = function () {
    return (_0x94f9c8 = _0x3e26fa.dynCall_iiifiii = _0x3e26fa.asm.Dm).apply(null, arguments);
  };
  var _0x2050d6 = _0x3e26fa.dynCall_iiififii = function () {
    return (_0x2050d6 = _0x3e26fa.dynCall_iiififii = _0x3e26fa.asm.Em).apply(null, arguments);
  };
  var _0x1a5672 = _0x3e26fa.dynCall_iiifiiiii = function () {
    return (_0x1a5672 = _0x3e26fa.dynCall_iiifiiiii = _0x3e26fa.asm.Fm).apply(null, arguments);
  };
  var _0x5e0707 = _0x3e26fa.dynCall_iiffifiiii = function () {
    return (_0x5e0707 = _0x3e26fa.dynCall_iiffifiiii = _0x3e26fa.asm.Gm).apply(null, arguments);
  };
  var _0x29ed40 = _0x3e26fa.dynCall_iifiifiiii = function () {
    return (_0x29ed40 = _0x3e26fa.dynCall_iifiifiiii = _0x3e26fa.asm.Hm).apply(null, arguments);
  };
  var _0x320700 = _0x3e26fa.dynCall_iiiifiii = function () {
    return (_0x320700 = _0x3e26fa.dynCall_iiiifiii = _0x3e26fa.asm.Im).apply(null, arguments);
  };
  var _0x4734db = _0x3e26fa.dynCall_iiifiiii = function () {
    return (_0x4734db = _0x3e26fa.dynCall_iiifiiii = _0x3e26fa.asm.Jm).apply(null, arguments);
  };
  var _0x54469d = _0x3e26fa.dynCall_iiiffiii = function () {
    return (_0x54469d = _0x3e26fa.dynCall_iiiffiii = _0x3e26fa.asm.Km).apply(null, arguments);
  };
  var _0x42f329 = _0x3e26fa.dynCall_iiiiifii = function () {
    return (_0x42f329 = _0x3e26fa.dynCall_iiiiifii = _0x3e26fa.asm.Lm).apply(null, arguments);
  };
  var _0x3ba753 = _0x3e26fa.dynCall_iifiifffii = function () {
    return (_0x3ba753 = _0x3e26fa.dynCall_iifiifffii = _0x3e26fa.asm.Mm).apply(null, arguments);
  };
  var _0x173f4c = _0x3e26fa.dynCall_iiiffii = function () {
    return (_0x173f4c = _0x3e26fa.dynCall_iiiffii = _0x3e26fa.asm.Nm).apply(null, arguments);
  };
  var _0x48336e = _0x3e26fa.dynCall_vfi = function () {
    return (_0x48336e = _0x3e26fa.dynCall_vfi = _0x3e26fa.asm.Om).apply(null, arguments);
  };
  var _0x4eda78 = _0x3e26fa.dynCall_viiifffi = function () {
    return (_0x4eda78 = _0x3e26fa.dynCall_viiifffi = _0x3e26fa.asm.Pm).apply(null, arguments);
  };
  var _0x5b5fa1 = _0x3e26fa.dynCall_viifii = function () {
    return (_0x5b5fa1 = _0x3e26fa.dynCall_viifii = _0x3e26fa.asm.Qm).apply(null, arguments);
  };
  var _0x50e272 = _0x3e26fa.dynCall_viifffi = function () {
    return (_0x50e272 = _0x3e26fa.dynCall_viifffi = _0x3e26fa.asm.Rm).apply(null, arguments);
  };
  var _0x40488f = _0x3e26fa.dynCall_iiifffi = function () {
    return (_0x40488f = _0x3e26fa.dynCall_iiifffi = _0x3e26fa.asm.Sm).apply(null, arguments);
  };
  var _0x61f6b4 = _0x3e26fa.dynCall_ifii = function () {
    return (_0x61f6b4 = _0x3e26fa.dynCall_ifii = _0x3e26fa.asm.Tm).apply(null, arguments);
  };
  var _0x2ded41 = _0x3e26fa.dynCall_iifffi = function () {
    return (_0x2ded41 = _0x3e26fa.dynCall_iifffi = _0x3e26fa.asm.Um).apply(null, arguments);
  };
  var _0x1f0cb1 = _0x3e26fa.dynCall_ifffi = function () {
    return (_0x1f0cb1 = _0x3e26fa.dynCall_ifffi = _0x3e26fa.asm.Vm).apply(null, arguments);
  };
  var _0x3c37d2 = _0x3e26fa.dynCall_iiiiifi = function () {
    return (_0x3c37d2 = _0x3e26fa.dynCall_iiiiifi = _0x3e26fa.asm.Wm).apply(null, arguments);
  };
  var _0x184c2f = _0x3e26fa.dynCall_ffffi = function () {
    return (_0x184c2f = _0x3e26fa.dynCall_ffffi = _0x3e26fa.asm.Xm).apply(null, arguments);
  };
  var _0x31862e = _0x3e26fa.dynCall_fffffi = function () {
    return (_0x31862e = _0x3e26fa.dynCall_fffffi = _0x3e26fa.asm.Ym).apply(null, arguments);
  };
  var _0x25f780 = _0x3e26fa.dynCall_ffffffi = function () {
    return (_0x25f780 = _0x3e26fa.dynCall_ffffffi = _0x3e26fa.asm.Zm).apply(null, arguments);
  };
  var _0x4d061a = _0x3e26fa.dynCall_viiiiifi = function () {
    return (_0x4d061a = _0x3e26fa.dynCall_viiiiifi = _0x3e26fa.asm._m).apply(null, arguments);
  };
  var _0x1f476c = _0x3e26fa.dynCall_vifffffi = function () {
    return (_0x1f476c = _0x3e26fa.dynCall_vifffffi = _0x3e26fa.asm.$m).apply(null, arguments);
  };
  var _0x55ea10 = _0x3e26fa.dynCall_viffffffi = function () {
    return (_0x55ea10 = _0x3e26fa.dynCall_viffffffi = _0x3e26fa.asm.an).apply(null, arguments);
  };
  var _0x1b8f81 = _0x3e26fa.dynCall_iiiiddiiii = function () {
    return (_0x1b8f81 = _0x3e26fa.dynCall_iiiiddiiii = _0x3e26fa.asm.bn).apply(null, arguments);
  };
  var _0x52d69d = _0x3e26fa.dynCall_viidiii = function () {
    return (_0x52d69d = _0x3e26fa.dynCall_viidiii = _0x3e26fa.asm.cn).apply(null, arguments);
  };
  var _0xcb764e = _0x3e26fa.dynCall_vifffi = function () {
    return (_0xcb764e = _0x3e26fa.dynCall_vifffi = _0x3e26fa.asm.dn).apply(null, arguments);
  };
  var _0x4cb62b = _0x3e26fa.dynCall_vjii = function () {
    return (_0x4cb62b = _0x3e26fa.dynCall_vjii = _0x3e26fa.asm.en).apply(null, arguments);
  };
  var _0x19a945 = _0x3e26fa.dynCall_vfffffdi = function () {
    return (_0x19a945 = _0x3e26fa.dynCall_vfffffdi = _0x3e26fa.asm.fn).apply(null, arguments);
  };
  var _0x5a327e = _0x3e26fa.dynCall_viiiijii = function () {
    return (_0x5a327e = _0x3e26fa.dynCall_viiiijii = _0x3e26fa.asm.gn).apply(null, arguments);
  };
  var _0x272cdb = _0x3e26fa.dynCall_vifiiii = function () {
    return (_0x272cdb = _0x3e26fa.dynCall_vifiiii = _0x3e26fa.asm.hn).apply(null, arguments);
  };
  var _0x49e342 = _0x3e26fa.dynCall_didi = function () {
    return (_0x49e342 = _0x3e26fa.dynCall_didi = _0x3e26fa.asm.jn).apply(null, arguments);
  };
  var _0x2cc12b = _0x3e26fa.dynCall_viiiiiffi = function () {
    return (_0x2cc12b = _0x3e26fa.dynCall_viiiiiffi = _0x3e26fa.asm.kn).apply(null, arguments);
  };
  var _0x50f813 = _0x3e26fa.dynCall_viifffii = function () {
    return (_0x50f813 = _0x3e26fa.dynCall_viifffii = _0x3e26fa.asm.ln).apply(null, arguments);
  };
  var _0x3b1336 = _0x3e26fa.dynCall_idiifii = function () {
    return (_0x3b1336 = _0x3e26fa.dynCall_idiifii = _0x3e26fa.asm.mn).apply(null, arguments);
  };
  var _0x4aafe5 = _0x3e26fa.dynCall_fiifii = function () {
    return (_0x4aafe5 = _0x3e26fa.dynCall_fiifii = _0x3e26fa.asm.nn).apply(null, arguments);
  };
  var _0x472298 = _0x3e26fa.dynCall_viiiiiifiifiiii = function () {
    return (_0x472298 = _0x3e26fa.dynCall_viiiiiifiifiiii = _0x3e26fa.asm.on).apply(null, arguments);
  };
  var _0x1922f5 = _0x3e26fa.dynCall_iiiififi = function () {
    return (_0x1922f5 = _0x3e26fa.dynCall_iiiififi = _0x3e26fa.asm.pn).apply(null, arguments);
  };
  var _0x9413f5 = _0x3e26fa.dynCall_iiiffifiiii = function () {
    return (_0x9413f5 = _0x3e26fa.dynCall_iiiffifiiii = _0x3e26fa.asm.qn).apply(null, arguments);
  };
  var _0x2ecb5e = _0x3e26fa.dynCall_iiifiifiii = function () {
    return (_0x2ecb5e = _0x3e26fa.dynCall_iiifiifiii = _0x3e26fa.asm.rn).apply(null, arguments);
  };
  var _0x2a9852 = _0x3e26fa.dynCall_iiifiifiiiii = function () {
    return (_0x2a9852 = _0x3e26fa.dynCall_iiifiifiiiii = _0x3e26fa.asm.sn).apply(null, arguments);
  };
  var _0x31869e = _0x3e26fa.dynCall_ffffii = function () {
    return (_0x31869e = _0x3e26fa.dynCall_ffffii = _0x3e26fa.asm.tn).apply(null, arguments);
  };
  var _0x3e66a5 = _0x3e26fa.dynCall_vifiii = function () {
    return (_0x3e66a5 = _0x3e26fa.dynCall_vifiii = _0x3e26fa.asm.un).apply(null, arguments);
  };
  var _0x96085b = _0x3e26fa.dynCall_iifiiiiii = function () {
    return (_0x96085b = _0x3e26fa.dynCall_iifiiiiii = _0x3e26fa.asm.vn).apply(null, arguments);
  };
  var _0x1e69c4 = _0x3e26fa.dynCall_iifiiiii = function () {
    return (_0x1e69c4 = _0x3e26fa.dynCall_iifiiiii = _0x3e26fa.asm.wn).apply(null, arguments);
  };
  var _0xea7d34 = _0x3e26fa.dynCall_iiffiiiii = function () {
    return (_0xea7d34 = _0x3e26fa.dynCall_iiffiiiii = _0x3e26fa.asm.xn).apply(null, arguments);
  };
  var _0x7df348 = _0x3e26fa.dynCall_iiififi = function () {
    return (_0x7df348 = _0x3e26fa.dynCall_iiififi = _0x3e26fa.asm.yn).apply(null, arguments);
  };
  var _0x4ff82d = _0x3e26fa.dynCall_iifiifiii = function () {
    return (_0x4ff82d = _0x3e26fa.dynCall_iifiifiii = _0x3e26fa.asm.zn).apply(null, arguments);
  };
  var _0x3faa7f = _0x3e26fa.dynCall_iifiii = function () {
    return (_0x3faa7f = _0x3e26fa.dynCall_iifiii = _0x3e26fa.asm.An).apply(null, arguments);
  };
  var _0x2122af = _0x3e26fa.dynCall_iiiiifiiii = function () {
    return (_0x2122af = _0x3e26fa.dynCall_iiiiifiiii = _0x3e26fa.asm.Bn).apply(null, arguments);
  };
  var _0x36590b = _0x3e26fa.dynCall_diidi = function () {
    return (_0x36590b = _0x3e26fa.dynCall_diidi = _0x3e26fa.asm.Cn).apply(null, arguments);
  };
  var _0x4f1e3e = _0x3e26fa.dynCall_fiifdi = function () {
    return (_0x4f1e3e = _0x3e26fa.dynCall_fiifdi = _0x3e26fa.asm.Dn).apply(null, arguments);
  };
  var _0x59728b = _0x3e26fa.dynCall_viiiiiifddfiiii = function () {
    return (_0x59728b = _0x3e26fa.dynCall_viiiiiifddfiiii = _0x3e26fa.asm.En).apply(null, arguments);
  };
  var _0x1f7f22 = _0x3e26fa.dynCall_fiifji = function () {
    return (_0x1f7f22 = _0x3e26fa.dynCall_fiifji = _0x3e26fa.asm.Fn).apply(null, arguments);
  };
  var _0x214b95 = _0x3e26fa.dynCall_viiiiiifjjfiiii = function () {
    return (_0x214b95 = _0x3e26fa.dynCall_viiiiiifjjfiiii = _0x3e26fa.asm.Gn).apply(null, arguments);
  };
  var _0x1b7fa3 = _0x3e26fa.dynCall_viiiifiii = function () {
    return (_0x1b7fa3 = _0x3e26fa.dynCall_viiiifiii = _0x3e26fa.asm.Hn).apply(null, arguments);
  };
  var _0x1ae9c2 = _0x3e26fa.dynCall_viiiiiiffffiiii = function () {
    return (_0x1ae9c2 = _0x3e26fa.dynCall_viiiiiiffffiiii = _0x3e26fa.asm.In).apply(null, arguments);
  };
  var _0xfbde7d = _0x3e26fa.dynCall_viifiiii = function () {
    return (_0xfbde7d = _0x3e26fa.dynCall_viifiiii = _0x3e26fa.asm.Jn).apply(null, arguments);
  };
  var _0x3f0753 = _0x3e26fa.dynCall_iiiiifiii = function () {
    return (_0x3f0753 = _0x3e26fa.dynCall_iiiiifiii = _0x3e26fa.asm.Kn).apply(null, arguments);
  };
  var _0x649160 = _0x3e26fa.dynCall_fiiffffi = function () {
    return (_0x649160 = _0x3e26fa.dynCall_fiiffffi = _0x3e26fa.asm.Ln).apply(null, arguments);
  };
  var _0x3959be = _0x3e26fa.dynCall_fffifffi = function () {
    return (_0x3959be = _0x3e26fa.dynCall_fffifffi = _0x3e26fa.asm.Mn).apply(null, arguments);
  };
  var _0x24bcce = _0x3e26fa.dynCall_fifffi = function () {
    return (_0x24bcce = _0x3e26fa.dynCall_fifffi = _0x3e26fa.asm.Nn).apply(null, arguments);
  };
  var _0x48c5c4 = _0x3e26fa.dynCall_iffi = function () {
    return (_0x48c5c4 = _0x3e26fa.dynCall_iffi = _0x3e26fa.asm.On).apply(null, arguments);
  };
  var _0x260a0f = _0x3e26fa.dynCall_viiffffi = function () {
    return (_0x260a0f = _0x3e26fa.dynCall_viiffffi = _0x3e26fa.asm.Pn).apply(null, arguments);
  };
  var _0x5d8d1e = _0x3e26fa.dynCall_viffii = function () {
    return (_0x5d8d1e = _0x3e26fa.dynCall_viffii = _0x3e26fa.asm.Qn).apply(null, arguments);
  };
  var _0x535c61 = _0x3e26fa.dynCall_ffi = function () {
    return (_0x535c61 = _0x3e26fa.dynCall_ffi = _0x3e26fa.asm.Rn).apply(null, arguments);
  };
  var _0x594cdc = _0x3e26fa.dynCall_ifiiii = function () {
    return (_0x594cdc = _0x3e26fa.dynCall_ifiiii = _0x3e26fa.asm.Sn).apply(null, arguments);
  };
  var _0x3ee179 = _0x3e26fa.dynCall_idiiiii = function () {
    return (_0x3ee179 = _0x3e26fa.dynCall_idiiiii = _0x3e26fa.asm.Tn).apply(null, arguments);
  };
  var _0x5edcbd = _0x3e26fa.dynCall_idiiii = function () {
    return (_0x5edcbd = _0x3e26fa.dynCall_idiiii = _0x3e26fa.asm.Un).apply(null, arguments);
  };
  var _0x150a2a = _0x3e26fa.dynCall_idii = function () {
    return (_0x150a2a = _0x3e26fa.dynCall_idii = _0x3e26fa.asm.Vn).apply(null, arguments);
  };
  var _0x3f7e48 = _0x3e26fa.dynCall_vijiiii = function () {
    return (_0x3f7e48 = _0x3e26fa.dynCall_vijiiii = _0x3e26fa.asm.Wn).apply(null, arguments);
  };
  var _0x4714bf = _0x3e26fa.dynCall_iiijiiii = function () {
    return (_0x4714bf = _0x3e26fa.dynCall_iiijiiii = _0x3e26fa.asm.Xn).apply(null, arguments);
  };
  var _0x6fbb48 = _0x3e26fa.dynCall_vjiiii = function () {
    return (_0x6fbb48 = _0x3e26fa.dynCall_vjiiii = _0x3e26fa.asm.Yn).apply(null, arguments);
  };
  var _0x39b865 = _0x3e26fa.dynCall_iddi = function () {
    return (_0x39b865 = _0x3e26fa.dynCall_iddi = _0x3e26fa.asm.Zn).apply(null, arguments);
  };
  var _0x49fd98 = _0x3e26fa.dynCall_viifiifi = function () {
    return (_0x49fd98 = _0x3e26fa.dynCall_viifiifi = _0x3e26fa.asm._n).apply(null, arguments);
  };
  var _0x20f793 = _0x3e26fa.dynCall_vifiifi = function () {
    return (_0x20f793 = _0x3e26fa.dynCall_vifiifi = _0x3e26fa.asm.$n).apply(null, arguments);
  };
  var _0xd9cb33 = _0x3e26fa.dynCall_viifiii = function () {
    return (_0xd9cb33 = _0x3e26fa.dynCall_viifiii = _0x3e26fa.asm.ao).apply(null, arguments);
  };
  var _0x3ac72e = _0x3e26fa.dynCall_viddfffi = function () {
    return (_0x3ac72e = _0x3e26fa.dynCall_viddfffi = _0x3e26fa.asm.bo).apply(null, arguments);
  };
  var _0x987ec5 = _0x3e26fa.dynCall_viidfffi = function () {
    return (_0x987ec5 = _0x3e26fa.dynCall_viidfffi = _0x3e26fa.asm.co).apply(null, arguments);
  };
  var _0x3313e2 = _0x3e26fa.dynCall_vidifffi = function () {
    return (_0x3313e2 = _0x3e26fa.dynCall_vidifffi = _0x3e26fa.asm.eo).apply(null, arguments);
  };
  var _0xe5b032 = _0x3e26fa.dynCall_viddi = function () {
    return (_0xe5b032 = _0x3e26fa.dynCall_viddi = _0x3e26fa.asm.fo).apply(null, arguments);
  };
  var _0x2f9e31 = _0x3e26fa.dynCall_vidii = function () {
    return (_0x2f9e31 = _0x3e26fa.dynCall_vidii = _0x3e26fa.asm.go).apply(null, arguments);
  };
  var _0x4105da = _0x3e26fa.dynCall_viiiiiiifi = function () {
    return (_0x4105da = _0x3e26fa.dynCall_viiiiiiifi = _0x3e26fa.asm.ho).apply(null, arguments);
  };
  var _0x10d536 = _0x3e26fa.dynCall_viidii = function () {
    return (_0x10d536 = _0x3e26fa.dynCall_viidii = _0x3e26fa.asm.io).apply(null, arguments);
  };
  var _0x3aa959 = _0x3e26fa.dynCall_viiffii = function () {
    return (_0x3aa959 = _0x3e26fa.dynCall_viiffii = _0x3e26fa.asm.jo).apply(null, arguments);
  };
  var _0x72b568 = _0x3e26fa.dynCall_viiifii = function () {
    return (_0x72b568 = _0x3e26fa.dynCall_viiifii = _0x3e26fa.asm.ko).apply(null, arguments);
  };
  var _0xcc337b = _0x3e26fa.dynCall_ffii = function () {
    return (_0xcc337b = _0x3e26fa.dynCall_ffii = _0x3e26fa.asm.lo).apply(null, arguments);
  };
  var _0x5318a2 = _0x3e26fa.dynCall_fiiiii = function () {
    return (_0x5318a2 = _0x3e26fa.dynCall_fiiiii = _0x3e26fa.asm.mo).apply(null, arguments);
  };
  var _0x3d6515 = _0x3e26fa.dynCall_ddddi = function () {
    return (_0x3d6515 = _0x3e26fa.dynCall_ddddi = _0x3e26fa.asm.no).apply(null, arguments);
  };
  var _0x265395 = _0x3e26fa.dynCall_ddi = function () {
    return (_0x265395 = _0x3e26fa.dynCall_ddi = _0x3e26fa.asm.oo).apply(null, arguments);
  };
  var _0x11d980 = _0x3e26fa.dynCall_jijii = function () {
    return (_0x11d980 = _0x3e26fa.dynCall_jijii = _0x3e26fa.asm.po).apply(null, arguments);
  };
  var _0x5ae732 = _0x3e26fa.dynCall_iiiiiji = function () {
    return (_0x5ae732 = _0x3e26fa.dynCall_iiiiiji = _0x3e26fa.asm.qo).apply(null, arguments);
  };
  var _0x339a0c = _0x3e26fa.dynCall_viiijii = function () {
    return (_0x339a0c = _0x3e26fa.dynCall_viiijii = _0x3e26fa.asm.ro).apply(null, arguments);
  };
  var _0x4bace7 = _0x3e26fa.dynCall_viijiii = function () {
    return (_0x4bace7 = _0x3e26fa.dynCall_viijiii = _0x3e26fa.asm.so).apply(null, arguments);
  };
  var _0x1f79e2 = _0x3e26fa.dynCall_ijii = function () {
    return (_0x1f79e2 = _0x3e26fa.dynCall_ijii = _0x3e26fa.asm.to).apply(null, arguments);
  };
  var _0x28d9e3 = _0x3e26fa.dynCall_ijjiiii = function () {
    return (_0x28d9e3 = _0x3e26fa.dynCall_ijjiiii = _0x3e26fa.asm.uo).apply(null, arguments);
  };
  var _0x1f2635 = _0x3e26fa.dynCall_vdiiiii = function () {
    return (_0x1f2635 = _0x3e26fa.dynCall_vdiiiii = _0x3e26fa.asm.vo).apply(null, arguments);
  };
  var _0x4880b4 = _0x3e26fa.dynCall_diiji = function () {
    return (_0x4880b4 = _0x3e26fa.dynCall_diiji = _0x3e26fa.asm.wo).apply(null, arguments);
  };
  var _0x2e5748 = _0x3e26fa.dynCall_vjiiiiiiii = function () {
    return (_0x2e5748 = _0x3e26fa.dynCall_vjiiiiiiii = _0x3e26fa.asm.xo).apply(null, arguments);
  };
  var _0x355ee9 = _0x3e26fa.dynCall_vjiiiiiii = function () {
    return (_0x355ee9 = _0x3e26fa.dynCall_vjiiiiiii = _0x3e26fa.asm.yo).apply(null, arguments);
  };
  var _0x4cf299 = _0x3e26fa.dynCall_ijiiii = function () {
    return (_0x4cf299 = _0x3e26fa.dynCall_ijiiii = _0x3e26fa.asm.zo).apply(null, arguments);
  };
  var _0xdf0108 = _0x3e26fa.dynCall_iidii = function () {
    return (_0xdf0108 = _0x3e26fa.dynCall_iidii = _0x3e26fa.asm.Ao).apply(null, arguments);
  };
  var _0x2515fb = _0x3e26fa.dynCall_iidiii = function () {
    return (_0x2515fb = _0x3e26fa.dynCall_iidiii = _0x3e26fa.asm.Bo).apply(null, arguments);
  };
  var _0x244a47 = _0x3e26fa.dynCall_jidi = function () {
    return (_0x244a47 = _0x3e26fa.dynCall_jidi = _0x3e26fa.asm.Co).apply(null, arguments);
  };
  var _0x30b576 = _0x3e26fa.dynCall_diji = function () {
    return (_0x30b576 = _0x3e26fa.dynCall_diji = _0x3e26fa.asm.Do).apply(null, arguments);
  };
  var _0x21e394 = _0x3e26fa.dynCall_fidi = function () {
    return (_0x21e394 = _0x3e26fa.dynCall_fidi = _0x3e26fa.asm.Eo).apply(null, arguments);
  };
  var _0x22cc50 = _0x3e26fa.dynCall_viiffiiii = function () {
    return (_0x22cc50 = _0x3e26fa.dynCall_viiffiiii = _0x3e26fa.asm.Fo).apply(null, arguments);
  };
  var _0x2139cb = _0x3e26fa.dynCall_iffffi = function () {
    return (_0x2139cb = _0x3e26fa.dynCall_iffffi = _0x3e26fa.asm.Go).apply(null, arguments);
  };
  var _0x29b721 = _0x3e26fa.dynCall_vfffi = function () {
    return (_0x29b721 = _0x3e26fa.dynCall_vfffi = _0x3e26fa.asm.Ho).apply(null, arguments);
  };
  var _0x471374 = _0x3e26fa.dynCall_vffi = function () {
    return (_0x471374 = _0x3e26fa.dynCall_vffi = _0x3e26fa.asm.Io).apply(null, arguments);
  };
  var _0x323c8c = _0x3e26fa.dynCall_vffffi = function () {
    return (_0x323c8c = _0x3e26fa.dynCall_vffffi = _0x3e26fa.asm.Jo).apply(null, arguments);
  };
  var _0x3faa71 = _0x3e26fa.dynCall_viiiiffi = function () {
    return (_0x3faa71 = _0x3e26fa.dynCall_viiiiffi = _0x3e26fa.asm.Ko).apply(null, arguments);
  };
  var _0x240a26 = _0x3e26fa.dynCall_viiiffii = function () {
    return (_0x240a26 = _0x3e26fa.dynCall_viiiffii = _0x3e26fa.asm.Lo).apply(null, arguments);
  };
  var _0x4cfe32 = _0x3e26fa.dynCall_vijji = function () {
    return (_0x4cfe32 = _0x3e26fa.dynCall_vijji = _0x3e26fa.asm.Mo).apply(null, arguments);
  };
  var _0x4773f5 = _0x3e26fa.dynCall_vffffffii = function () {
    return (_0x4773f5 = _0x3e26fa.dynCall_vffffffii = _0x3e26fa.asm.No).apply(null, arguments);
  };
  var _0x5d4a0b = _0x3e26fa.dynCall_vfiii = function () {
    return (_0x5d4a0b = _0x3e26fa.dynCall_vfiii = _0x3e26fa.asm.Oo).apply(null, arguments);
  };
  var _0x594046 = _0x3e26fa.dynCall_fffifi = function () {
    return (_0x594046 = _0x3e26fa.dynCall_fffifi = _0x3e26fa.asm.Po).apply(null, arguments);
  };
  var _0x307611 = _0x3e26fa.dynCall_vfii = function () {
    return (_0x307611 = _0x3e26fa.dynCall_vfii = _0x3e26fa.asm.Qo).apply(null, arguments);
  };
  var _0x41ad3f = _0x3e26fa.dynCall_iiiifiiiii = function () {
    return (_0x41ad3f = _0x3e26fa.dynCall_iiiifiiiii = _0x3e26fa.asm.Ro).apply(null, arguments);
  };
  var _0x3ad436 = _0x3e26fa.dynCall_iiiifiiii = function () {
    return (_0x3ad436 = _0x3e26fa.dynCall_iiiifiiii = _0x3e26fa.asm.So).apply(null, arguments);
  };
  var _0x273f3a = _0x3e26fa.dynCall_vijjii = function () {
    return (_0x273f3a = _0x3e26fa.dynCall_vijjii = _0x3e26fa.asm.To).apply(null, arguments);
  };
  var _0x1da97c = _0x3e26fa.dynCall_viiiififfi = function () {
    return (_0x1da97c = _0x3e26fa.dynCall_viiiififfi = _0x3e26fa.asm.Uo).apply(null, arguments);
  };
  var _0x319369 = _0x3e26fa.dynCall_viiiifiifi = function () {
    return (_0x319369 = _0x3e26fa.dynCall_viiiifiifi = _0x3e26fa.asm.Vo).apply(null, arguments);
  };
  var _0x461a89 = _0x3e26fa.dynCall_viiiifiiii = function () {
    return (_0x461a89 = _0x3e26fa.dynCall_viiiifiiii = _0x3e26fa.asm.Wo).apply(null, arguments);
  };
  var _0x365048 = _0x3e26fa.dynCall_viiiifiiiii = function () {
    return (_0x365048 = _0x3e26fa.dynCall_viiiifiiiii = _0x3e26fa.asm.Xo).apply(null, arguments);
  };
  var _0x5e83bf = _0x3e26fa.dynCall_viiiifiiiiiiii = function () {
    return (_0x5e83bf = _0x3e26fa.dynCall_viiiifiiiiiiii = _0x3e26fa.asm.Yo).apply(null, arguments);
  };
  var _0x4ba5ed = _0x3e26fa.dynCall_fifffiii = function () {
    return (_0x4ba5ed = _0x3e26fa.dynCall_fifffiii = _0x3e26fa.asm.Zo).apply(null, arguments);
  };
  var _0x36ba3c = _0x3e26fa.dynCall_fiffffiiiiii = function () {
    return (_0x36ba3c = _0x3e26fa.dynCall_fiffffiiiiii = _0x3e26fa.asm._o).apply(null, arguments);
  };
  var _0x5e6d3a = _0x3e26fa.dynCall_viiiiiffii = function () {
    return (_0x5e6d3a = _0x3e26fa.dynCall_viiiiiffii = _0x3e26fa.asm.$o).apply(null, arguments);
  };
  var _0x55f8ab = _0x3e26fa.dynCall_ffffiiii = function () {
    return (_0x55f8ab = _0x3e26fa.dynCall_ffffiiii = _0x3e26fa.asm.ap).apply(null, arguments);
  };
  var _0xf9c59e = _0x3e26fa.dynCall_viffiii = function () {
    return (_0xf9c59e = _0x3e26fa.dynCall_viffiii = _0x3e26fa.asm.bp).apply(null, arguments);
  };
  var _0x2acdb7 = _0x3e26fa.dynCall_viffffiii = function () {
    return (_0x2acdb7 = _0x3e26fa.dynCall_viffffiii = _0x3e26fa.asm.cp).apply(null, arguments);
  };
  var _0x3152df = _0x3e26fa.dynCall_viffffii = function () {
    return (_0x3152df = _0x3e26fa.dynCall_viffffii = _0x3e26fa.asm.dp).apply(null, arguments);
  };
  var _0x517f0d = _0x3e26fa.dynCall_viiffffiiiiii = function () {
    return (_0x517f0d = _0x3e26fa.dynCall_viiffffiiiiii = _0x3e26fa.asm.ep).apply(null, arguments);
  };
  var _0x1a5cee = _0x3e26fa.dynCall_viiifiii = function () {
    return (_0x1a5cee = _0x3e26fa.dynCall_viiifiii = _0x3e26fa.asm.fp).apply(null, arguments);
  };
  var _0x32cbd0 = _0x3e26fa.dynCall_viiififi = function () {
    return (_0x32cbd0 = _0x3e26fa.dynCall_viiififi = _0x3e26fa.asm.gp).apply(null, arguments);
  };
  var _0x1ed7cb = _0x3e26fa.dynCall_viiififfi = function () {
    return (_0x1ed7cb = _0x3e26fa.dynCall_viiififfi = _0x3e26fa.asm.hp).apply(null, arguments);
  };
  var _0x47ce10 = _0x3e26fa.dynCall_viffiiii = function () {
    return (_0x47ce10 = _0x3e26fa.dynCall_viffiiii = _0x3e26fa.asm.ip).apply(null, arguments);
  };
  var _0x34dfc2 = _0x3e26fa.dynCall_viiiiffffiiii = function () {
    return (_0x34dfc2 = _0x3e26fa.dynCall_viiiiffffiiii = _0x3e26fa.asm.jp).apply(null, arguments);
  };
  var _0x5e391f = _0x3e26fa.dynCall_viifiiiii = function () {
    return (_0x5e391f = _0x3e26fa.dynCall_viifiiiii = _0x3e26fa.asm.kp).apply(null, arguments);
  };
  var _0x2a7b23 = _0x3e26fa.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
    return (_0x2a7b23 = _0x3e26fa.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0x3e26fa.asm.lp).apply(null, arguments);
  };
  var _0x52f688 = _0x3e26fa.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
    return (_0x52f688 = _0x3e26fa.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0x3e26fa.asm.mp).apply(null, arguments);
  };
  var _0x309109 = _0x3e26fa.dynCall_viififii = function () {
    return (_0x309109 = _0x3e26fa.dynCall_viififii = _0x3e26fa.asm.np).apply(null, arguments);
  };
  var _0x44bb14 = _0x3e26fa.dynCall_iiiffiiii = function () {
    return (_0x44bb14 = _0x3e26fa.dynCall_iiiffiiii = _0x3e26fa.asm.op).apply(null, arguments);
  };
  var _0x2410c4 = _0x3e26fa.dynCall_iiiiffiiii = function () {
    return (_0x2410c4 = _0x3e26fa.dynCall_iiiiffiiii = _0x3e26fa.asm.pp).apply(null, arguments);
  };
  var _0x1f5dfb = _0x3e26fa.dynCall_fffffffi = function () {
    return (_0x1f5dfb = _0x3e26fa.dynCall_fffffffi = _0x3e26fa.asm.qp).apply(null, arguments);
  };
  var _0x594b04 = _0x3e26fa.dynCall_viffifi = function () {
    return (_0x594b04 = _0x3e26fa.dynCall_viffifi = _0x3e26fa.asm.rp).apply(null, arguments);
  };
  var _0x470c74 = _0x3e26fa.dynCall_viiffifi = function () {
    return (_0x470c74 = _0x3e26fa.dynCall_viiffifi = _0x3e26fa.asm.sp).apply(null, arguments);
  };
  var _0x1e5460 = _0x3e26fa.dynCall_fiiiffi = function () {
    return (_0x1e5460 = _0x3e26fa.dynCall_fiiiffi = _0x3e26fa.asm.tp).apply(null, arguments);
  };
  var _0x2a4a4e = _0x3e26fa.dynCall_viiififiii = function () {
    return (_0x2a4a4e = _0x3e26fa.dynCall_viiififiii = _0x3e26fa.asm.up).apply(null, arguments);
  };
  var _0x13bf72 = _0x3e26fa.dynCall_viiffiiiiiiiii = function () {
    return (_0x13bf72 = _0x3e26fa.dynCall_viiffiiiiiiiii = _0x3e26fa.asm.vp).apply(null, arguments);
  };
  var _0x26fed9 = _0x3e26fa.dynCall_viiiiiffiii = function () {
    return (_0x26fed9 = _0x3e26fa.dynCall_viiiiiffiii = _0x3e26fa.asm.wp).apply(null, arguments);
  };
  var _0x37f997 = _0x3e26fa.dynCall_viiffiii = function () {
    return (_0x37f997 = _0x3e26fa.dynCall_viiffiii = _0x3e26fa.asm.xp).apply(null, arguments);
  };
  var _0x3b000f = _0x3e26fa.dynCall_viiffiiiiiii = function () {
    return (_0x3b000f = _0x3e26fa.dynCall_viiffiiiiiii = _0x3e26fa.asm.yp).apply(null, arguments);
  };
  var _0x97860e = _0x3e26fa.dynCall_fffffffffi = function () {
    return (_0x97860e = _0x3e26fa.dynCall_fffffffffi = _0x3e26fa.asm.zp).apply(null, arguments);
  };
  var _0x430358 = _0x3e26fa.dynCall_vifiiiiii = function () {
    return (_0x430358 = _0x3e26fa.dynCall_vifiiiiii = _0x3e26fa.asm.Ap).apply(null, arguments);
  };
  var _0x38e7e4 = _0x3e26fa.dynCall_vifiiiii = function () {
    return (_0x38e7e4 = _0x3e26fa.dynCall_vifiiiii = _0x3e26fa.asm.Bp).apply(null, arguments);
  };
  var _0x1f167d = _0x3e26fa.dynCall_viifiiiiiii = function () {
    return (_0x1f167d = _0x3e26fa.dynCall_viifiiiiiii = _0x3e26fa.asm.Cp).apply(null, arguments);
  };
  var _0x33308e = _0x3e26fa.dynCall_viiififfiiiiiii = function () {
    return (_0x33308e = _0x3e26fa.dynCall_viiififfiiiiiii = _0x3e26fa.asm.Dp).apply(null, arguments);
  };
  var _0x4cd10b = _0x3e26fa.dynCall_viiffiifiiiiiii = function () {
    return (_0x4cd10b = _0x3e26fa.dynCall_viiffiifiiiiiii = _0x3e26fa.asm.Ep).apply(null, arguments);
  };
  var _0x21cab8 = _0x3e26fa.dynCall_viifiiiiii = function () {
    return (_0x21cab8 = _0x3e26fa.dynCall_viifiiiiii = _0x3e26fa.asm.Fp).apply(null, arguments);
  };
  var _0x5e06ea = _0x3e26fa.dynCall_viiifiiiiii = function () {
    return (_0x5e06ea = _0x3e26fa.dynCall_viiifiiiiii = _0x3e26fa.asm.Gp).apply(null, arguments);
  };
  var _0x20fd11 = _0x3e26fa.dynCall_viiiifiiiiii = function () {
    return (_0x20fd11 = _0x3e26fa.dynCall_viiiifiiiiii = _0x3e26fa.asm.Hp).apply(null, arguments);
  };
  var _0x3cb76c = _0x3e26fa.dynCall_viififiiiiii = function () {
    return (_0x3cb76c = _0x3e26fa.dynCall_viififiiiiii = _0x3e26fa.asm.Ip).apply(null, arguments);
  };
  var _0x58dad4 = _0x3e26fa.dynCall_viiiffiifiiiiiii = function () {
    return (_0x58dad4 = _0x3e26fa.dynCall_viiiffiifiiiiiii = _0x3e26fa.asm.Jp).apply(null, arguments);
  };
  var _0x2d70e4 = _0x3e26fa.dynCall_viiiiiifiiiiii = function () {
    return (_0x2d70e4 = _0x3e26fa.dynCall_viiiiiifiiiiii = _0x3e26fa.asm.Kp).apply(null, arguments);
  };
  var _0x26b157 = _0x3e26fa.dynCall_vififiii = function () {
    return (_0x26b157 = _0x3e26fa.dynCall_vififiii = _0x3e26fa.asm.Lp).apply(null, arguments);
  };
  var _0x5c6b3d = _0x3e26fa.dynCall_fiffi = function () {
    return (_0x5c6b3d = _0x3e26fa.dynCall_fiffi = _0x3e26fa.asm.Mp).apply(null, arguments);
  };
  var _0x5671fa = _0x3e26fa.dynCall_viiiiiiiijiiii = function () {
    return (_0x5671fa = _0x3e26fa.dynCall_viiiiiiiijiiii = _0x3e26fa.asm.Np).apply(null, arguments);
  };
  var _0x61496e = _0x3e26fa.dynCall_fifii = function () {
    return (_0x61496e = _0x3e26fa.dynCall_fifii = _0x3e26fa.asm.Op).apply(null, arguments);
  };
  var _0x45264f = _0x3e26fa.dynCall_vifffii = function () {
    return (_0x45264f = _0x3e26fa.dynCall_vifffii = _0x3e26fa.asm.Pp).apply(null, arguments);
  };
  var _0x1ae843 = _0x3e26fa.dynCall_viiiffi = function () {
    return (_0x1ae843 = _0x3e26fa.dynCall_viiiffi = _0x3e26fa.asm.Qp).apply(null, arguments);
  };
  var _0x30e0c4 = _0x3e26fa.dynCall_viiidii = function () {
    return (_0x30e0c4 = _0x3e26fa.dynCall_viiidii = _0x3e26fa.asm.Rp).apply(null, arguments);
  };
  var _0x21d051 = _0x3e26fa.dynCall_ijiiiiiiiii = function () {
    return (_0x21d051 = _0x3e26fa.dynCall_ijiiiiiiiii = _0x3e26fa.asm.Sp).apply(null, arguments);
  };
  var _0x32a400 = _0x3e26fa.dynCall_ijjiii = function () {
    return (_0x32a400 = _0x3e26fa.dynCall_ijjiii = _0x3e26fa.asm.Tp).apply(null, arguments);
  };
  var _0x41e41c = _0x3e26fa.dynCall_jjjii = function () {
    return (_0x41e41c = _0x3e26fa.dynCall_jjjii = _0x3e26fa.asm.Up).apply(null, arguments);
  };
  var _0x50bae1 = _0x3e26fa.dynCall_iijjijii = function () {
    return (_0x50bae1 = _0x3e26fa.dynCall_iijjijii = _0x3e26fa.asm.Vp).apply(null, arguments);
  };
  var _0x2702c4 = _0x3e26fa.dynCall_jiijii = function () {
    return (_0x2702c4 = _0x3e26fa.dynCall_jiijii = _0x3e26fa.asm.Wp).apply(null, arguments);
  };
  var _0x8e6331 = _0x3e26fa.dynCall_viifffffi = function () {
    return (_0x8e6331 = _0x3e26fa.dynCall_viifffffi = _0x3e26fa.asm.Xp).apply(null, arguments);
  };
  var _0x3a029d = _0x3e26fa.dynCall_viiffffffi = function () {
    return (_0x3a029d = _0x3e26fa.dynCall_viiffffffi = _0x3e26fa.asm.Yp).apply(null, arguments);
  };
  var _0x428221 = _0x3e26fa.dynCall_viifffffffi = function () {
    return (_0x428221 = _0x3e26fa.dynCall_viifffffffi = _0x3e26fa.asm.Zp).apply(null, arguments);
  };
  var _0x4c3ad6 = _0x3e26fa.dynCall_viiffffffffi = function () {
    return (_0x4c3ad6 = _0x3e26fa.dynCall_viiffffffffi = _0x3e26fa.asm._p).apply(null, arguments);
  };
  var _0x32ccab = _0x3e26fa.dynCall_vidiii = function () {
    return (_0x32ccab = _0x3e26fa.dynCall_vidiii = _0x3e26fa.asm.$p).apply(null, arguments);
  };
  var _0x3e2e9a = _0x3e26fa.dynCall_viiffffffffiii = function () {
    return (_0x3e2e9a = _0x3e26fa.dynCall_viiffffffffiii = _0x3e26fa.asm.aq).apply(null, arguments);
  };
  var _0x588bef = _0x3e26fa.dynCall_viiiiffffii = function () {
    return (_0x588bef = _0x3e26fa.dynCall_viiiiffffii = _0x3e26fa.asm.bq).apply(null, arguments);
  };
  var _0x18efca = _0x3e26fa.dynCall_fiiiiii = function () {
    return (_0x18efca = _0x3e26fa.dynCall_fiiiiii = _0x3e26fa.asm.cq).apply(null, arguments);
  };
  var _0x649daa = _0x3e26fa.dynCall_viiijji = function () {
    return (_0x649daa = _0x3e26fa.dynCall_viiijji = _0x3e26fa.asm.dq).apply(null, arguments);
  };
  var _0x123df3 = _0x3e26fa.dynCall_vijiiiiiii = function () {
    return (_0x123df3 = _0x3e26fa.dynCall_vijiiiiiii = _0x3e26fa.asm.eq).apply(null, arguments);
  };
  var _0x169d28 = _0x3e26fa.dynCall_vijiiiiiiii = function () {
    return (_0x169d28 = _0x3e26fa.dynCall_vijiiiiiiii = _0x3e26fa.asm.fq).apply(null, arguments);
  };
  var _0x25cddb = _0x3e26fa.dynCall_jjiiii = function () {
    return (_0x25cddb = _0x3e26fa.dynCall_jjiiii = _0x3e26fa.asm.gq).apply(null, arguments);
  };
  var _0xd7eb55 = _0x3e26fa.dynCall_jjiiiii = function () {
    return (_0xd7eb55 = _0x3e26fa.dynCall_jjiiiii = _0x3e26fa.asm.hq).apply(null, arguments);
  };
  var _0x9e9858 = _0x3e26fa.dynCall_jijjji = function () {
    return (_0x9e9858 = _0x3e26fa.dynCall_jijjji = _0x3e26fa.asm.iq).apply(null, arguments);
  };
  var _0x4cd935 = _0x3e26fa.dynCall_jijjjii = function () {
    return (_0x4cd935 = _0x3e26fa.dynCall_jijjjii = _0x3e26fa.asm.jq).apply(null, arguments);
  };
  var _0x380cf6 = _0x3e26fa.dynCall_jjiii = function () {
    return (_0x380cf6 = _0x3e26fa.dynCall_jjiii = _0x3e26fa.asm.kq).apply(null, arguments);
  };
  var _0x4e0150 = _0x3e26fa.dynCall_ijijiiiii = function () {
    return (_0x4e0150 = _0x3e26fa.dynCall_ijijiiiii = _0x3e26fa.asm.lq).apply(null, arguments);
  };
  var _0x5695ea = _0x3e26fa.dynCall_ijjjiii = function () {
    return (_0x5695ea = _0x3e26fa.dynCall_ijjjiii = _0x3e26fa.asm.mq).apply(null, arguments);
  };
  var _0x9ad18e = _0x3e26fa.dynCall_vijjjiijii = function () {
    return (_0x9ad18e = _0x3e26fa.dynCall_vijjjiijii = _0x3e26fa.asm.nq).apply(null, arguments);
  };
  var _0x140bee = _0x3e26fa.dynCall_ijjjiijii = function () {
    return (_0x140bee = _0x3e26fa.dynCall_ijjjiijii = _0x3e26fa.asm.oq).apply(null, arguments);
  };
  var _0x5205f4 = _0x3e26fa.dynCall_vijiiiiii = function () {
    return (_0x5205f4 = _0x3e26fa.dynCall_vijiiiiii = _0x3e26fa.asm.pq).apply(null, arguments);
  };
  var _0x294334 = _0x3e26fa.dynCall_jfi = function () {
    return (_0x294334 = _0x3e26fa.dynCall_jfi = _0x3e26fa.asm.qq).apply(null, arguments);
  };
  var _0x5d2a69 = _0x3e26fa.dynCall_fji = function () {
    return (_0x5d2a69 = _0x3e26fa.dynCall_fji = _0x3e26fa.asm.rq).apply(null, arguments);
  };
  var _0x40bc6d = _0x3e26fa.dynCall_fdi = function () {
    return (_0x40bc6d = _0x3e26fa.dynCall_fdi = _0x3e26fa.asm.sq).apply(null, arguments);
  };
  var _0x21bac6 = _0x3e26fa.dynCall_dfi = function () {
    return (_0x21bac6 = _0x3e26fa.dynCall_dfi = _0x3e26fa.asm.tq).apply(null, arguments);
  };
  var _0x1439e2 = _0x3e26fa.dynCall_jidii = function () {
    return (_0x1439e2 = _0x3e26fa.dynCall_jidii = _0x3e26fa.asm.uq).apply(null, arguments);
  };
  var _0x5bfc77 = _0x3e26fa.dynCall_viiiiiiiji = function () {
    return (_0x5bfc77 = _0x3e26fa.dynCall_viiiiiiiji = _0x3e26fa.asm.vq).apply(null, arguments);
  };
  var _0x45c2d3 = _0x3e26fa.dynCall_viiiiiiiiji = function () {
    return (_0x45c2d3 = _0x3e26fa.dynCall_viiiiiiiiji = _0x3e26fa.asm.wq).apply(null, arguments);
  };
  var _0x5daf28 = _0x3e26fa.dynCall_viiiiiiiiiji = function () {
    return (_0x5daf28 = _0x3e26fa.dynCall_viiiiiiiiiji = _0x3e26fa.asm.xq).apply(null, arguments);
  };
  var _0x49810f = _0x3e26fa.dynCall_ijiijii = function () {
    return (_0x49810f = _0x3e26fa.dynCall_ijiijii = _0x3e26fa.asm.yq).apply(null, arguments);
  };
  var _0x4a1672 = _0x3e26fa.dynCall_vjjiiiii = function () {
    return (_0x4a1672 = _0x3e26fa.dynCall_vjjiiiii = _0x3e26fa.asm.zq).apply(null, arguments);
  };
  var _0x49395a = _0x3e26fa.dynCall_vjjii = function () {
    return (_0x49395a = _0x3e26fa.dynCall_vjjii = _0x3e26fa.asm.Aq).apply(null, arguments);
  };
  var _0x45116d = _0x3e26fa.dynCall_ijiiji = function () {
    return (_0x45116d = _0x3e26fa.dynCall_ijiiji = _0x3e26fa.asm.Bq).apply(null, arguments);
  };
  var _0x1ceca8 = _0x3e26fa.dynCall_ijiiiii = function () {
    return (_0x1ceca8 = _0x3e26fa.dynCall_ijiiiii = _0x3e26fa.asm.Cq).apply(null, arguments);
  };
  var _0x5f0df5 = _0x3e26fa.dynCall_ijiiiiji = function () {
    return (_0x5f0df5 = _0x3e26fa.dynCall_ijiiiiji = _0x3e26fa.asm.Dq).apply(null, arguments);
  };
  var _0x138239 = _0x3e26fa.dynCall_jiiiiii = function () {
    return (_0x138239 = _0x3e26fa.dynCall_jiiiiii = _0x3e26fa.asm.Eq).apply(null, arguments);
  };
  var _0x4de779 = _0x3e26fa.dynCall_ddii = function () {
    return (_0x4de779 = _0x3e26fa.dynCall_ddii = _0x3e26fa.asm.Fq).apply(null, arguments);
  };
  var _0x51612a = _0x3e26fa.dynCall_idiii = function () {
    return (_0x51612a = _0x3e26fa.dynCall_idiii = _0x3e26fa.asm.Gq).apply(null, arguments);
  };
  var _0x823ff7 = _0x3e26fa.dynCall_ifiii = function () {
    return (_0x823ff7 = _0x3e26fa.dynCall_ifiii = _0x3e26fa.asm.Hq).apply(null, arguments);
  };
  var _0x2d9280 = _0x3e26fa.dynCall_ifiiiii = function () {
    return (_0x2d9280 = _0x3e26fa.dynCall_ifiiiii = _0x3e26fa.asm.Iq).apply(null, arguments);
  };
  var _0x39b0b5 = _0x3e26fa.dynCall_vdiii = function () {
    return (_0x39b0b5 = _0x3e26fa.dynCall_vdiii = _0x3e26fa.asm.Jq).apply(null, arguments);
  };
  var _0x1b4dd0 = _0x3e26fa.dynCall_jdii = function () {
    return (_0x1b4dd0 = _0x3e26fa.dynCall_jdii = _0x3e26fa.asm.Kq).apply(null, arguments);
  };
  var _0x4cf845 = _0x3e26fa.dynCall_vijijji = function () {
    return (_0x4cf845 = _0x3e26fa.dynCall_vijijji = _0x3e26fa.asm.Lq).apply(null, arguments);
  };
  var _0xd04ff8 = _0x3e26fa.dynCall_iijjji = function () {
    return (_0xd04ff8 = _0x3e26fa.dynCall_iijjji = _0x3e26fa.asm.Mq).apply(null, arguments);
  };
  var _0x50de02 = _0x3e26fa.dynCall_viijjji = function () {
    return (_0x50de02 = _0x3e26fa.dynCall_viijjji = _0x3e26fa.asm.Nq).apply(null, arguments);
  };
  var _0x4a0fd9 = _0x3e26fa.dynCall_vdii = function () {
    return (_0x4a0fd9 = _0x3e26fa.dynCall_vdii = _0x3e26fa.asm.Oq).apply(null, arguments);
  };
  var _0xa8a9bc = _0x3e26fa.dynCall_iiiijii = function () {
    return (_0xa8a9bc = _0x3e26fa.dynCall_iiiijii = _0x3e26fa.asm.Pq).apply(null, arguments);
  };
  var _0x1167fe = _0x3e26fa.dynCall_jijji = function () {
    return (_0x1167fe = _0x3e26fa.dynCall_jijji = _0x3e26fa.asm.Qq).apply(null, arguments);
  };
  var _0x486ecd = _0x3e26fa.dynCall_diddi = function () {
    return (_0x486ecd = _0x3e26fa.dynCall_diddi = _0x3e26fa.asm.Rq).apply(null, arguments);
  };
  var _0x797ed9 = _0x3e26fa.dynCall_iijjii = function () {
    return (_0x797ed9 = _0x3e26fa.dynCall_iijjii = _0x3e26fa.asm.Sq).apply(null, arguments);
  };
  var _0x51d023 = _0x3e26fa.dynCall_jjjji = function () {
    return (_0x51d023 = _0x3e26fa.dynCall_jjjji = _0x3e26fa.asm.Tq).apply(null, arguments);
  };
  var _0x3504b5 = _0x3e26fa.dynCall_viijijii = function () {
    return (_0x3504b5 = _0x3e26fa.dynCall_viijijii = _0x3e26fa.asm.Uq).apply(null, arguments);
  };
  var _0x2798c3 = _0x3e26fa.dynCall_viijijiii = function () {
    return (_0x2798c3 = _0x3e26fa.dynCall_viijijiii = _0x3e26fa.asm.Vq).apply(null, arguments);
  };
  var _0x4fb41a = _0x3e26fa.dynCall_vijiji = function () {
    return (_0x4fb41a = _0x3e26fa.dynCall_vijiji = _0x3e26fa.asm.Wq).apply(null, arguments);
  };
  var _0x24f055 = _0x3e26fa.dynCall_viijiijiii = function () {
    return (_0x24f055 = _0x3e26fa.dynCall_viijiijiii = _0x3e26fa.asm.Xq).apply(null, arguments);
  };
  var _0x171a4c = _0x3e26fa.dynCall_viiiijiiii = function () {
    return (_0x171a4c = _0x3e26fa.dynCall_viiiijiiii = _0x3e26fa.asm.Yq).apply(null, arguments);
  };
  var _0x58b36e = _0x3e26fa.dynCall_di = function () {
    return (_0x58b36e = _0x3e26fa.dynCall_di = _0x3e26fa.asm.Zq).apply(null, arguments);
  };
  var _0x2f81a0 = _0x3e26fa.dynCall_jiiiiiiiii = function () {
    return (_0x2f81a0 = _0x3e26fa.dynCall_jiiiiiiiii = _0x3e26fa.asm._q).apply(null, arguments);
  };
  var _0x8072e1 = _0x3e26fa.dynCall_iiiiijii = function () {
    return (_0x8072e1 = _0x3e26fa.dynCall_iiiiijii = _0x3e26fa.asm.$q).apply(null, arguments);
  };
  var _0x2d36b8 = _0x3e26fa.dynCall_iiiiidii = function () {
    return (_0x2d36b8 = _0x3e26fa.dynCall_iiiiidii = _0x3e26fa.asm.ar).apply(null, arguments);
  };
  var _0x34d5fe = _0x3e26fa.dynCall_iiiidii = function () {
    return (_0x34d5fe = _0x3e26fa.dynCall_iiiidii = _0x3e26fa.asm.br).apply(null, arguments);
  };
  var _0x468b1d = _0x3e26fa.dynCall_iiidiii = function () {
    return (_0x468b1d = _0x3e26fa.dynCall_iiidiii = _0x3e26fa.asm.cr).apply(null, arguments);
  };
  var _0x3bea99 = _0x3e26fa.dynCall_iiiiffiiiji = function () {
    return (_0x3bea99 = _0x3e26fa.dynCall_iiiiffiiiji = _0x3e26fa.asm.dr).apply(null, arguments);
  };
  var _0x41d736 = _0x3e26fa.dynCall_jiiiiiii = function () {
    return (_0x41d736 = _0x3e26fa.dynCall_jiiiiiii = _0x3e26fa.asm.er).apply(null, arguments);
  };
  var _0x4712e0 = _0x3e26fa.dynCall_iiiiffiiiii = function () {
    return (_0x4712e0 = _0x3e26fa.dynCall_iiiiffiiiii = _0x3e26fa.asm.fr).apply(null, arguments);
  };
  var _0xfd888e = _0x3e26fa.dynCall_iidfii = function () {
    return (_0xfd888e = _0x3e26fa.dynCall_iidfii = _0x3e26fa.asm.gr).apply(null, arguments);
  };
  var _0x177cd2 = _0x3e26fa.dynCall_iijfii = function () {
    return (_0x177cd2 = _0x3e26fa.dynCall_iijfii = _0x3e26fa.asm.hr).apply(null, arguments);
  };
  var _0x30da68 = _0x3e26fa.dynCall_iiiiffii = function () {
    return (_0x30da68 = _0x3e26fa.dynCall_iiiiffii = _0x3e26fa.asm.ir).apply(null, arguments);
  };
  var _0x21c21e = _0x3e26fa.dynCall_jiiiiji = function () {
    return (_0x21c21e = _0x3e26fa.dynCall_jiiiiji = _0x3e26fa.asm.jr).apply(null, arguments);
  };
  var _0xfea66f = _0x3e26fa.dynCall_fiiiifi = function () {
    return (_0xfea66f = _0x3e26fa.dynCall_fiiiifi = _0x3e26fa.asm.kr).apply(null, arguments);
  };
  var _0xa886f7 = _0x3e26fa.dynCall_iiijjii = function () {
    return (_0xa886f7 = _0x3e26fa.dynCall_iiijjii = _0x3e26fa.asm.lr).apply(null, arguments);
  };
  var _0x4faae4 = _0x3e26fa.dynCall_vij = function () {
    return (_0x4faae4 = _0x3e26fa.dynCall_vij = _0x3e26fa.asm.mr).apply(null, arguments);
  };
  var _0xc8931 = _0x3e26fa.dynCall_iiiijiii = function () {
    return (_0xc8931 = _0x3e26fa.dynCall_iiiijiii = _0x3e26fa.asm.nr).apply(null, arguments);
  };
  var _0x1ae9ee = _0x3e26fa.dynCall_iiiij = function () {
    return (_0x1ae9ee = _0x3e26fa.dynCall_iiiij = _0x3e26fa.asm.or).apply(null, arguments);
  };
  var _0x2e20d7 = _0x3e26fa.dynCall_ijj = function () {
    return (_0x2e20d7 = _0x3e26fa.dynCall_ijj = _0x3e26fa.asm.pr).apply(null, arguments);
  };
  var _0x209044 = _0x3e26fa.dynCall_vjji = function () {
    return (_0x209044 = _0x3e26fa.dynCall_vjji = _0x3e26fa.asm.qr).apply(null, arguments);
  };
  var _0x2ce4c6 = _0x3e26fa.dynCall_ij = function () {
    return (_0x2ce4c6 = _0x3e26fa.dynCall_ij = _0x3e26fa.asm.rr).apply(null, arguments);
  };
  var _0x21912a = _0x3e26fa.dynCall_vif = function () {
    return (_0x21912a = _0x3e26fa.dynCall_vif = _0x3e26fa.asm.sr).apply(null, arguments);
  };
  var _0x3e7277 = _0x3e26fa.dynCall_vid = function () {
    return (_0x3e7277 = _0x3e26fa.dynCall_vid = _0x3e26fa.asm.tr).apply(null, arguments);
  };
  var _0x4a00bf = _0x3e26fa.dynCall_viiiiif = function () {
    return (_0x4a00bf = _0x3e26fa.dynCall_viiiiif = _0x3e26fa.asm.ur).apply(null, arguments);
  };
  var _0x7e1c2b = _0x3e26fa.dynCall_viiiif = function () {
    return (_0x7e1c2b = _0x3e26fa.dynCall_viiiif = _0x3e26fa.asm.vr).apply(null, arguments);
  };
  var _0x3b7ab1 = _0x3e26fa.dynCall_viiiiiif = function () {
    return (_0x3b7ab1 = _0x3e26fa.dynCall_viiiiiif = _0x3e26fa.asm.wr).apply(null, arguments);
  };
  var _0x3d6176 = _0x3e26fa.dynCall_iiif = function () {
    return (_0x3d6176 = _0x3e26fa.dynCall_iiif = _0x3e26fa.asm.xr).apply(null, arguments);
  };
  var _0x4d84eb = _0x3e26fa.dynCall_fif = function () {
    return (_0x4d84eb = _0x3e26fa.dynCall_fif = _0x3e26fa.asm.yr).apply(null, arguments);
  };
  var _0x3ba96d = _0x3e26fa.dynCall_iiiiiifff = function () {
    return (_0x3ba96d = _0x3e26fa.dynCall_iiiiiifff = _0x3e26fa.asm.zr).apply(null, arguments);
  };
  var _0x1efa2a = _0x3e26fa.dynCall_iiiiiifiif = function () {
    return (_0x1efa2a = _0x3e26fa.dynCall_iiiiiifiif = _0x3e26fa.asm.Ar).apply(null, arguments);
  };
  var _0x544e95 = _0x3e26fa.dynCall_iiiiiifiii = function () {
    return (_0x544e95 = _0x3e26fa.dynCall_iiiiiifiii = _0x3e26fa.asm.Br).apply(null, arguments);
  };
  var _0x17e05d = _0x3e26fa.dynCall_iiiiiiifiif = function () {
    return (_0x17e05d = _0x3e26fa.dynCall_iiiiiiifiif = _0x3e26fa.asm.Cr).apply(null, arguments);
  };
  var _0x26ac61 = _0x3e26fa.dynCall_fiff = function () {
    return (_0x26ac61 = _0x3e26fa.dynCall_fiff = _0x3e26fa.asm.Dr).apply(null, arguments);
  };
  var _0x305f7c = _0x3e26fa.dynCall_fiiiiiifiifif = function () {
    return (_0x305f7c = _0x3e26fa.dynCall_fiiiiiifiifif = _0x3e26fa.asm.Er).apply(null, arguments);
  };
  var _0x18c7d3 = _0x3e26fa.dynCall_fiiiiiifiiiif = function () {
    return (_0x18c7d3 = _0x3e26fa.dynCall_fiiiiiifiiiif = _0x3e26fa.asm.Fr).apply(null, arguments);
  };
  var _0x2d68c6 = _0x3e26fa.dynCall_iifiiiijii = function () {
    return (_0x2d68c6 = _0x3e26fa.dynCall_iifiiiijii = _0x3e26fa.asm.Gr).apply(null, arguments);
  };
  var _0x4b3d1c = _0x3e26fa.dynCall_vifijii = function () {
    return (_0x4b3d1c = _0x3e26fa.dynCall_vifijii = _0x3e26fa.asm.Hr).apply(null, arguments);
  };
  var _0x4abf04 = _0x3e26fa.dynCall_iiiifffiii = function () {
    return (_0x4abf04 = _0x3e26fa.dynCall_iiiifffiii = _0x3e26fa.asm.Ir).apply(null, arguments);
  };
  var _0x4423f8 = _0x3e26fa.dynCall_iiiifffffi = function () {
    return (_0x4423f8 = _0x3e26fa.dynCall_iiiifffffi = _0x3e26fa.asm.Jr).apply(null, arguments);
  };
  var _0x323002 = _0x3e26fa.dynCall_viffiiiif = function () {
    return (_0x323002 = _0x3e26fa.dynCall_viffiiiif = _0x3e26fa.asm.Kr).apply(null, arguments);
  };
  var _0x5da9c7 = _0x3e26fa.dynCall_viffiifffffiii = function () {
    return (_0x5da9c7 = _0x3e26fa.dynCall_viffiifffffiii = _0x3e26fa.asm.Lr).apply(null, arguments);
  };
  var _0x14c17c = _0x3e26fa.dynCall_viffffiifffiiiiif = function () {
    return (_0x14c17c = _0x3e26fa.dynCall_viffffiifffiiiiif = _0x3e26fa.asm.Mr).apply(null, arguments);
  };
  var _0x192231 = _0x3e26fa.dynCall_iiiifffffii = function () {
    return (_0x192231 = _0x3e26fa.dynCall_iiiifffffii = _0x3e26fa.asm.Nr).apply(null, arguments);
  };
  var _0x16d763 = _0x3e26fa.dynCall_viiiiiiiiiiifii = function () {
    return (_0x16d763 = _0x3e26fa.dynCall_viiiiiiiiiiifii = _0x3e26fa.asm.Or).apply(null, arguments);
  };
  var _0x3150be = _0x3e26fa.dynCall_viff = function () {
    return (_0x3150be = _0x3e26fa.dynCall_viff = _0x3e26fa.asm.Pr).apply(null, arguments);
  };
  var _0xbd5c35 = _0x3e26fa.dynCall_iiiiifiiiiif = function () {
    return (_0xbd5c35 = _0x3e26fa.dynCall_iiiiifiiiiif = _0x3e26fa.asm.Qr).apply(null, arguments);
  };
  var _0x16e807 = _0x3e26fa.dynCall_viiifiiiii = function () {
    return (_0x16e807 = _0x3e26fa.dynCall_viiifiiiii = _0x3e26fa.asm.Rr).apply(null, arguments);
  };
  var _0x4f1aed = _0x3e26fa.dynCall_viiiifiiiiif = function () {
    return (_0x4f1aed = _0x3e26fa.dynCall_viiiifiiiiif = _0x3e26fa.asm.Sr).apply(null, arguments);
  };
  var _0x259fc2 = _0x3e26fa.dynCall_iifff = function () {
    return (_0x259fc2 = _0x3e26fa.dynCall_iifff = _0x3e26fa.asm.Tr).apply(null, arguments);
  };
  var _0x8a6bc1 = _0x3e26fa.dynCall_iif = function () {
    return (_0x8a6bc1 = _0x3e26fa.dynCall_iif = _0x3e26fa.asm.Ur).apply(null, arguments);
  };
  var _0x396e5c = _0x3e26fa.dynCall_viijijj = function () {
    return (_0x396e5c = _0x3e26fa.dynCall_viijijj = _0x3e26fa.asm.Vr).apply(null, arguments);
  };
  var _0x220beb = _0x3e26fa.dynCall_viijj = function () {
    return (_0x220beb = _0x3e26fa.dynCall_viijj = _0x3e26fa.asm.Wr).apply(null, arguments);
  };
  var _0x23e8c4 = _0x3e26fa.dynCall_viiiij = function () {
    return (_0x23e8c4 = _0x3e26fa.dynCall_viiiij = _0x3e26fa.asm.Xr).apply(null, arguments);
  };
  var _0x74b0ea = _0x3e26fa.dynCall_iiijji = function () {
    return (_0x74b0ea = _0x3e26fa.dynCall_iiijji = _0x3e26fa.asm.Yr).apply(null, arguments);
  };
  var _0x2abcf8 = _0x3e26fa.dynCall_ijjiiiii = function () {
    return (_0x2abcf8 = _0x3e26fa.dynCall_ijjiiiii = _0x3e26fa.asm.Zr).apply(null, arguments);
  };
  var _0x582beb = _0x3e26fa.dynCall_vidd = function () {
    return (_0x582beb = _0x3e26fa.dynCall_vidd = _0x3e26fa.asm._r).apply(null, arguments);
  };
  var _0x5190c1 = _0x3e26fa.dynCall_iiiiiifffiiifiii = function () {
    return (_0x5190c1 = _0x3e26fa.dynCall_iiiiiifffiiifiii = _0x3e26fa.asm.$r).apply(null, arguments);
  };
  var _0x3d8ed7 = _0x3e26fa.dynCall_viid = function () {
    return (_0x3d8ed7 = _0x3e26fa.dynCall_viid = _0x3e26fa.asm.as).apply(null, arguments);
  };
  var _0x51b6ea = _0x3e26fa.dynCall_viiif = function () {
    return (_0x51b6ea = _0x3e26fa.dynCall_viiif = _0x3e26fa.asm.bs).apply(null, arguments);
  };
  var _0xdffd35 = _0x3e26fa.dynCall_fiiiif = function () {
    return (_0xdffd35 = _0x3e26fa.dynCall_fiiiif = _0x3e26fa.asm.cs).apply(null, arguments);
  };
  var _0x5a5e15 = _0x3e26fa.dynCall_iiiiiff = function () {
    return (_0x5a5e15 = _0x3e26fa.dynCall_iiiiiff = _0x3e26fa.asm.ds).apply(null, arguments);
  };
  var _0x4297ec = _0x3e26fa.dynCall_viffff = function () {
    return (_0x4297ec = _0x3e26fa.dynCall_viffff = _0x3e26fa.asm.es).apply(null, arguments);
  };
  var _0x17fc08 = _0x3e26fa.dynCall_vifff = function () {
    return (_0x17fc08 = _0x3e26fa.dynCall_vifff = _0x3e26fa.asm.fs).apply(null, arguments);
  };
  var _0x4a0872 = _0x3e26fa.dynCall_viifff = function () {
    return (_0x4a0872 = _0x3e26fa.dynCall_viifff = _0x3e26fa.asm.gs).apply(null, arguments);
  };
  var _0x235679 = _0x3e26fa.dynCall_vf = function () {
    return (_0x235679 = _0x3e26fa.dynCall_vf = _0x3e26fa.asm.hs).apply(null, arguments);
  };
  var _0x262b0e = _0x3e26fa.dynCall_vffff = function () {
    return (_0x262b0e = _0x3e26fa.dynCall_vffff = _0x3e26fa.asm.is).apply(null, arguments);
  };
  var _0x7f317d = _0x3e26fa.dynCall_vff = function () {
    return (_0x7f317d = _0x3e26fa.dynCall_vff = _0x3e26fa.asm.js).apply(null, arguments);
  };
  var _0x1e8fcb = _0x3e26fa.dynCall_fff = function () {
    return (_0x1e8fcb = _0x3e26fa.dynCall_fff = _0x3e26fa.asm.ks).apply(null, arguments);
  };
  var _0x41026e = _0x3e26fa.dynCall_f = function () {
    return (_0x41026e = _0x3e26fa.dynCall_f = _0x3e26fa.asm.ls).apply(null, arguments);
  };
  var _0x18ffc8 = _0x3e26fa.dynCall_vfff = function () {
    return (_0x18ffc8 = _0x3e26fa.dynCall_vfff = _0x3e26fa.asm.ms).apply(null, arguments);
  };
  var _0x132482 = _0x3e26fa.dynCall_vffffffi = function () {
    return (_0x132482 = _0x3e26fa.dynCall_vffffffi = _0x3e26fa.asm.ns).apply(null, arguments);
  };
  var _0x569d3d = _0x3e26fa.dynCall_ff = function () {
    return (_0x569d3d = _0x3e26fa.dynCall_ff = _0x3e26fa.asm.os).apply(null, arguments);
  };
  var _0x2c3196 = _0x3e26fa.dynCall_iiid = function () {
    return (_0x2c3196 = _0x3e26fa.dynCall_iiid = _0x3e26fa.asm.ps).apply(null, arguments);
  };
  var _0x14a69f = _0x3e26fa.dynCall_fiif = function () {
    return (_0x14a69f = _0x3e26fa.dynCall_fiif = _0x3e26fa.asm.qs).apply(null, arguments);
  };
  var _0x471ae7 = _0x3e26fa.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
    return (_0x471ae7 = _0x3e26fa.dynCall_iiiiiiffiiiiiiiiiffffiii = _0x3e26fa.asm.rs).apply(null, arguments);
  };
  var _0x189bf9 = _0x3e26fa.dynCall_viififi = function () {
    return (_0x189bf9 = _0x3e26fa.dynCall_viififi = _0x3e26fa.asm.ss).apply(null, arguments);
  };
  var _0x527f2f = _0x3e26fa.dynCall_viiiiiiiijiii = function () {
    return (_0x527f2f = _0x3e26fa.dynCall_viiiiiiiijiii = _0x3e26fa.asm.ts).apply(null, arguments);
  };
  _0x3e26fa.ccall = _0x8f1110;
  _0x3e26fa.cwrap = _0x3bb0c3;
  _0x3e26fa.stackTrace = _0x53e70b;
  _0x3e26fa.addRunDependency = _0x10fd90;
  _0x3e26fa.removeRunDependency = _0x3cfbac;
  _0x3e26fa.FS_createPath = _0x363740.createPath;
  _0x3e26fa.FS_createDataFile = _0x363740.createDataFile;
  _0x3e26fa.stackTrace = _0x53e70b;
  var _0x14f838;
  function _0x1c904b(_0x387f7a) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + _0x387f7a + ")";
    this.status = _0x387f7a;
  }
  var _0xf854cc = false;
  _0x4bf6ce = function _0x4688b2() {
    if (!_0x14f838) {
      _0x4c6714();
    }
    if (!_0x14f838) {
      _0x4bf6ce = _0x4688b2;
    }
  };
  function _0x458dcc(_0xeb4fc2) {
    var _0x556fa9 = _0x3e26fa._main;
    _0xeb4fc2 = _0xeb4fc2 || [];
    var _0xf5afaf = _0xeb4fc2.length + 0x1;
    var _0x2945de = _0x1c92f2((_0xf5afaf + 0x1) * 0x4);
    _0x2ec55e[_0x2945de >> 0x2] = _0x581a23(_0x19bd65);
    for (var _0x2ea0b1 = 0x1; _0x2ea0b1 < _0xf5afaf; _0x2ea0b1++) {
      _0x2ec55e[(_0x2945de >> 0x2) + _0x2ea0b1] = _0x581a23(_0xeb4fc2[_0x2ea0b1 - 0x1]);
    }
    _0x2ec55e[(_0x2945de >> 0x2) + _0xf5afaf] = 0x0;
    try {
      var _0x284296 = _0x556fa9(_0xf5afaf, _0x2945de);
      _0x5b725d(_0x284296, true);
    } catch (_0x24aebe) {
      if (_0x24aebe instanceof _0x1c904b) {
        return;
      } else {
        if (_0x24aebe == "unwind") {
          return;
        } else {
          var _0x16de97 = _0x24aebe;
          if (_0x24aebe && typeof _0x24aebe === "object" && _0x24aebe.stack) {
            _0x16de97 = [_0x24aebe, _0x24aebe.stack];
          }
          _0x4f2811("exception thrown: " + _0x16de97);
          _0x1cff08(0x1, _0x24aebe);
        }
      }
    } finally {
      _0xf854cc = true;
    }
  }
  function _0x4c6714(_0x202567) {
    _0x202567 = _0x202567 || _0x292d79;
    if (_0xcdd5f4 > 0x0) {
      return;
    }
    _0x32f058();
    if (_0xcdd5f4 > 0x0) {
      return;
    }
    function _0x1a7fc6() {
      if (_0x14f838) {
        return;
      }
      _0x14f838 = true;
      _0x3e26fa.calledRun = true;
      if (_0x4adad0) {
        return;
      }
      _0x2d9136();
      _0x565161();
      if (_0x3e26fa.onRuntimeInitialized) {
        _0x3e26fa.onRuntimeInitialized();
      }
      if (_0x4eb020) {
        _0x458dcc(_0x202567);
      }
      _0x4f4611();
    }
    if (_0x3e26fa.setStatus) {
      _0x3e26fa.setStatus("Running...");
      setTimeout(function () {
        setTimeout(function () {
          _0x3e26fa.setStatus('');
        }, 0x1);
        _0x1a7fc6();
      }, 0x1);
    } else {
      _0x1a7fc6();
    }
  }
  _0x3e26fa.run = _0x4c6714;
  function _0x5b725d(_0x3ebb48, _0x46935f) {
    _0x5003ab = _0x3ebb48;
    if (_0x46935f && (_0x1150ad || false) && _0x3ebb48 === 0x0) {
      return;
    }
    if (_0x1150ad || false) {} else {
      _0xc2e486();
      if (_0x3e26fa.onExit) {
        _0x3e26fa.onExit(_0x3ebb48);
      }
      _0x4adad0 = true;
    }
    _0x1cff08(_0x3ebb48, new _0x1c904b(_0x3ebb48));
  }
  if (_0x3e26fa.preInit) {
    if (typeof _0x3e26fa.preInit == "function") {
      _0x3e26fa.preInit = [_0x3e26fa.preInit];
    }
    while (_0x3e26fa.preInit.length > 0x0) {
      _0x3e26fa.preInit.pop()();
    }
  }
  var _0x4eb020 = true;
  if (_0x3e26fa.noInitialRun) {
    _0x4eb020 = false;
  }
  _0x4c6714();
}
window.GMPERFORM = {};
window.GMPERFORM.LOAD = Date.now();
config.referrer = document.referrer;
function gmdebugtime(_0x16ea8a) {
  console.log("_TIME_" + _0x16ea8a + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x33dc89) {
  console.log(_0x33dc89);
}
function gmEvent(_0x3954e8, _0x23f808) {
  loadGMData(_0x3954e8, _0x23f808);
}
let fireFPS = 0x0;
async function loadGMData(_0x8bdbb3, _0x2b317a) {
  try {
    if (!config.buildAPI) {
      return;
    }
    if (!config.eventLog && _0x8bdbb3 != "document-ready" && _0x8bdbb3 != "ban-game" && _0x8bdbb3 != "start-game" && _0x8bdbb3 != "unload-game") {
      return;
    }
    if (_0x8bdbb3 == "fps") {
      try {
        let _0x511ab1 = _0x2b317a.split("|");
        if (_0x511ab1.length >= 0x2) {
          firebaseLogEventParameter("timecounter", _0x511ab1[0x0]);
          if (fireFPS < 0x2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0x511ab1[0x1]);
          }
        }
      } catch (_0x1e719f) {
        console.log("Error extracting time from abc:", _0x1e719f.message);
      }
    }
    let _0x4aba3c = '';
    if (_0x2b317a) {
      _0x4aba3c = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x2b317a));
    }
    _0x4aba3c += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x4aba3c += "&gid=" + config.gameId;
    if (_0x8bdbb3 == "ban-game" || _0x8bdbb3 == "document-ready" || _0x8bdbb3 == "start-game") {
      _0x4aba3c += "&wtop=" + window.top.location.hostname;
      _0x4aba3c += "&hn=" + window.location.hostname;
      _0x4aba3c += "&referrer=" + config.referrer;
    }
    let _0x2bf214 = "&data=" + btoa(_0x4aba3c);
    let _0x1d27d8 = config.buildAPI + "?event=" + _0x8bdbb3 + _0x2bf214;
    let _0x3cffaf = new XMLHttpRequest();
    _0x3cffaf.open("GET", _0x1d27d8);
    _0x3cffaf.onreadystatechange = function () {
      if (_0x3cffaf.readyState !== 0x4) {
        return;
      }
      if (_0x3cffaf.status === 0xc8) {
        console.log(_0x3cffaf.responseText);
      } else {
        console.log("HTTP error", _0x3cffaf.status, _0x3cffaf.statusText);
      }
    };
    _0x3cffaf.send();
  } catch (_0x28b4ac) {}
}
function xorEncryptMsg(_0x1ad068) {
  let _0x5e4df6 = '';
  for (let _0x42eba5 = 0x0; _0x42eba5 < _0x1ad068.length; _0x42eba5++) {
    const _0x31ddd5 = _0x1ad068.charCodeAt(_0x42eba5) ^ "gmdata@&!message@!3!@".charCodeAt(_0x42eba5 % "gmdata@&!message@!3!@".length);
    _0x5e4df6 += String.fromCharCode(_0x31ddd5);
  }
  return btoa(_0x5e4df6);
}
function check_event_log() {
  const _0x32fce1 = window.location.search;
  const _0x3e3bff = new URLSearchParams(_0x32fce1);
  if (_0x3e3bff.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
document.addEventListener("DOMContentLoaded", function () {
  gmEvent("document-ready");
});
window.addEventListener("beforeunload", function (_0xf24155) {
  gmEvent("unload-game");
});
(function (_0x35a799, _0x2b1d18) {
  const _0x17c9d8 = _0x35a799();
  while (true) {
    try {
      const _0x5235a1 = -parseInt(_0x12fa(348, '3T#J')) / 0x1 * (parseInt(_0x12fa(292, ']1r)')) / 0x2) + -parseInt(_0x12fa(340, '^p$f')) / 0x3 + parseInt(_0x12fa(334, 'EYtZ')) / 0x4 * (-parseInt(_0x12fa(359, 'V]v%')) / 0x5) + parseInt(_0x12fa(349, 'DcGT')) / 0x6 * (-parseInt(_0x12fa(375, '1JW@')) / 0x7) + -parseInt(_0x12fa(402, 'G@#!')) / 0x8 + parseInt(_0x12fa(369, ']WfY')) / 0x9 + parseInt(_0x12fa(304, 'wN0Q')) / 0xa * (parseInt(_0x12fa(403, ']WfY')) / 0xb);
      if (_0x5235a1 === _0x2b1d18) {
        break;
      } else {
        _0x17c9d8.push(_0x17c9d8.shift());
      }
    } catch (_0x3ccace) {
      _0x17c9d8.push(_0x17c9d8.shift());
    }
  }
})(_0x35ed, 0x7ca62);
config.sourceHtml = "RHhrUUVRZGJid2xHVUFnV0IwY01HeE1FQ2doS0NCdE9MRTlESGdJZUJ3WUxGUWNCRERJU1ZGb0xNdz09";
function _0x35f8c7(_0x10eb9d, _0x5ebc90, _0x365890, _0x436fbf, _0x595b4f) {
  return _0x12fa(_0x436fbf - 0x0, _0x595b4f);
}
function _0x12fa(_0x53415d, _0x4b5066) {
  const _0x35edca = _0x35ed();
  _0x12fa = function (_0x12fa57, _0x274f03) {
    _0x12fa57 = _0x12fa57 - 0x115;
    let _0x1dcb6a = _0x35edca[_0x12fa57];
    if (_0x12fa.gUdrbO === undefined) {
      var _0x312e8e = function (_0xeae712) {
        let _0x38ede2 = '';
        let _0x5ce917 = '';
        let _0x4b39dd = 0x0;
        let _0x22c21f;
        let _0x5be94f;
        for (let _0x42c83d = 0x0; _0x5be94f = _0xeae712.charAt(_0x42c83d++); ~_0x5be94f && (_0x22c21f = _0x4b39dd % 0x4 ? _0x22c21f * 0x40 + _0x5be94f : _0x5be94f, _0x4b39dd++ % 0x4) ? _0x38ede2 += String.fromCharCode(0xff & _0x22c21f >> (-0x2 * _0x4b39dd & 0x6)) : 0x0) {
          _0x5be94f = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x5be94f);
        }
        let _0x51e2c0 = 0x0;
        for (let _0x1f7281 = _0x38ede2.length; _0x51e2c0 < _0x1f7281; _0x51e2c0++) {
          _0x5ce917 += '%' + ('00' + _0x38ede2.charCodeAt(_0x51e2c0).toString(0x10)).slice(-0x2);
        }
        return decodeURIComponent(_0x5ce917);
      };
      const _0x2d2435 = function (_0x351df5, _0xcb6f4d) {
        let _0x3c3707 = [];
        let _0x43c7a5 = 0x0;
        let _0xae75cc;
        let _0x42313b = '';
        _0x351df5 = _0x312e8e(_0x351df5);
        let _0x5b62d4;
        for (_0x5b62d4 = 0x0; _0x5b62d4 < 0x100; _0x5b62d4++) {
          _0x3c3707[_0x5b62d4] = _0x5b62d4;
        }
        for (_0x5b62d4 = 0x0; _0x5b62d4 < 0x100; _0x5b62d4++) {
          _0x43c7a5 = (_0x43c7a5 + _0x3c3707[_0x5b62d4] + _0xcb6f4d.charCodeAt(_0x5b62d4 % _0xcb6f4d.length)) % 0x100;
          _0xae75cc = _0x3c3707[_0x5b62d4];
          _0x3c3707[_0x5b62d4] = _0x3c3707[_0x43c7a5];
          _0x3c3707[_0x43c7a5] = _0xae75cc;
        }
        _0x5b62d4 = 0x0;
        _0x43c7a5 = 0x0;
        for (let _0x3be541 = 0x0; _0x3be541 < _0x351df5.length; _0x3be541++) {
          _0x5b62d4 = (_0x5b62d4 + 0x1) % 0x100;
          _0x43c7a5 = (_0x43c7a5 + _0x3c3707[_0x5b62d4]) % 0x100;
          _0xae75cc = _0x3c3707[_0x5b62d4];
          _0x3c3707[_0x5b62d4] = _0x3c3707[_0x43c7a5];
          _0x3c3707[_0x43c7a5] = _0xae75cc;
          _0x42313b += String.fromCharCode(_0x351df5.charCodeAt(_0x3be541) ^ _0x3c3707[(_0x3c3707[_0x5b62d4] + _0x3c3707[_0x43c7a5]) % 0x100]);
        }
        return _0x42313b;
      };
      _0x12fa.ZQxXSX = _0x2d2435;
      _0x53415d = arguments;
      _0x12fa.gUdrbO = true;
    }
    const _0x1542c5 = _0x35edca[0x0];
    const _0x3d8ab0 = _0x12fa57 + _0x1542c5;
    const _0x509397 = _0x53415d[_0x3d8ab0];
    if (!_0x509397) {
      if (_0x12fa.KBRkjN === undefined) {
        _0x12fa.KBRkjN = true;
      }
      _0x1dcb6a = _0x12fa.ZQxXSX(_0x1dcb6a, _0x274f03);
      _0x53415d[_0x3d8ab0] = _0x1dcb6a;
    } else {
      _0x1dcb6a = _0x509397;
    }
    return _0x1dcb6a;
  };
  return _0x12fa(_0x53415d, _0x4b5066);
}
document.getElementById("gmsoft-jssdk").addEventListener("load", () => {
  console.log("loaded sdk");
});
(function (_0x2d2435, _0xeae712, _0x58779a) {
  console.log("DOCUMENT_READY");
  let _0x4b39dd = false;
  if (config && config.enableDebug == "yes") {
    _0x4b39dd = true;
  }
  if (!window.GMSOFT_OPTIONS) {
    window.GMSOFT_OPTIONS = config;
    window.GMSOFT_OPTIONS.domainHost = window.location.hostname;
  }
  let _0x5be94f = xorDecrypt("gmdata@&nNhZmRzZGY=", "gmdata@&!1estimate");
  let _0x42c83d = _0x2d2435.getElementById(_0x58779a);
  if (_0x42c83d && _0x42c83d.src == _0x5be94f) {
    _0x42c83d.addEventListener("error", _0x51e2c0 => {
      appendJS(_0x2d2435, _0xeae712, _0x58779a, _0x5be94f);
    });
    return;
  }
  appendJS(_0x2d2435, _0xeae712, _0x58779a, _0x5be94f);
})(document, "script", "gmsoft-jssdk");
function _0x357a60(_0x29565d, _0x3237e8, _0x1dce01, _0x2c51f8, _0x54c164) {
  return _0x12fa(_0x1dce01 - 0x197, _0x29565d);
}
function _0x1cbd66(_0x39d55a, _0x6772f0, _0x24488f, _0x46ea13, _0x33f778) {
  return _0x12fa(_0x33f778 + 0x1cf, _0x24488f);
}
function _0x35ed() {
  const _0x416dfe = ['W7JdVMm2cq', 'wSo7WQe', 'WQL4W5BcKCkl', 'W79NW7FcHmkG', 'W7FcUqNdK8oS', 'w8o5vSo8vq', 'BxSSWRqP', 'EefMW4CR', 'gmkBW5BcP3m', 'dmo2WQ3cQZ4', 'WO5IWQKnWQO', 'v1VcU8k1WOm', 'DmoWW6tcMWydkZLRWRqDWPvyhq', 'WOGuorOi', 'WPrwib0v', 'W4nRW7m8bW', 'W7ZcJxldQGe', 'dN7cUHtdVa', 'svPmW7uk', 'xmkwWOdcTau', 'WOCwoqea', 'ACkwWOFcHau', 'W5hcVWO', 'dCkDW5ZcPfu', 'jmkulCoNWR/cO3VdTapcVg7cHX0', 'W5ZcVqG', 'W5HwW4RcJq', 'WO54WQ0EWP0', 'W7WIW5FdQsGLamk0', 'cmk/WQ/dM1ldUSoDW5RdVhlcJSok', 'WOaHW5esiW', 'W5RcTrNcPmo4', 'z8k1zmkGjq', 'ESkaWPmhWQ8', 'o8o0W5hdV0e', 'W5tdJ0uH', 'W7VdRmoGamku', 't3aX', 'W6tdRCkvW4Dk', 'rCkEDKnJ', 'WQK0bd0', 'es8EW69QWR3cIJW', 'W6SQW544WQW', 'sCoTW6xcHbu', 'WQ7cPIlcLSoR', 'xmowW6pcMCkG', 'FSoaBSkvW6a', 'ACoBwdfmW49KW5e', 'FX3cUmoCEq', 'W4BdKhJcKmkKjeBdIX8JWQtcVW', 'amkqWPFdUW8', 'ugSZW6P1', 'WPxdV33cRH8', 'gSoAWQdcSZy', 'E8kiFZ5t', 'xf3cP8kcWOi', 'W7JcL2K', 'x8o+WR7cTCkg', 'W6LaW7BcM8kV', 'W59VWPW', 'cmo8WR3cOIe', 'pCohWPBcTWm', 'BCopWPurWQC', 'kSkMWRJdR0O', 'r8k8WR3cKG', 'W5aLW5SslG', 'FeuL', 'y1JcKWi1', 'pSkgDtrc', 'W4egW7jfkq', 'BNRdSd1s', 'ACoBrZneW7rgW5S', 'W7RcMhddRwa', 'nmoHBmk8jW', 'nCk8WRJcUfy', 'n8keCt5t', 'W43cUmodfW', 'jCo2ccCfW6hcSmohWR8Tr8oA', 'Cmk1vNeF', 'W4pcRb9lW6y', 'WRWyva', 'CrBcV8o8zW', 'zu7cNIK6', 'WRxdRSo3', 'WQyfwq', 'pCkxWR3cOWmruq', 'W548WQeEWPGMova', 'WQ7cV3pdHmk8W4VcK8ka', 'WPNcNCkYW5G', 'WOpdO3xcSJS', 'g8ouW7hdN2e', 'W4tdSCktW6rr', 'W5q8W7PmW5PQfLlcRCkgeeW', 'WPqRW5qqW5a', 'W7JcNJNcVSog', 'WR/dH0mXWQldU8olW5uahmkqxW', 'W7DBarFcGW8tWP/dH8oUW6W0', 'W5JcUfNdKq', 'fZn/uSoy', 'vNZcOSk5WOy', 'WPXAW6JdSG8', 'D0/cHa', 'WRSKwexdKq', 'WOZdRNRcPWW', 'EmotyCoSDa', 'WRpdGuqZWQFdSSoAW4C+nSkMDa', 'vMK7eCklkCo6b8oBj1rijq', 'k8oHWPdcGW', 'd8o4BmoBu8ofpq', 'rfe3W6L1', 'W5SqW7uvWOO', 'zvNcGWiV', 'WQiEWRRdNCo5WOLtWP0fWPddQmoe', 'jSkrW5LxW7eUWRpdJuq+WO0U', 'W4TDWRC3ka', 'WOzeW5xdHJq', 'W7CYW54O', 'suBdLtW', 'zfifW4Tw', 'aCkEWP7cHxm', 'ESooF8k3W7S', 'WRxcV8kzW6vM', 'zKZcGmkiWRS', 'dmo1WRZcIsm', 'i8o2C8k8iW', 'ltrlW4aB', 'W4LWWRCFka', 'xSklW4JdIg0', 'WQRdQmkjpY8', 'uCoSt8kzW4K', 'WOqXedSS', 'WQ88W68JW6W', 'WR7cGCoqBqG', 'WRhdJSkjgdq', 'xSkTW53dH20', 'sCo8W7q', 'b3BcSr3dVa', 'W7JdPh/dI8k5', 'WRFcG8ouzW', 'W7CKWRlcS2Lgc8kEWQestCoc', 'vw4ZfCkdiSoYDCoBjLf/gSoC', 'WOXRW4NdPa', 'W4WFW4RcNSkv', 'W45dW4BcUSkl'];
  _0x35ed = function () {
    return _0x416dfe;
  };
  return _0x35ed();
}
function appendJS(_0x1f7281, _0x351df5, _0xcb6f4d, _0x3c3707) {
  var _0x43c7a5;
  var _0xae75cc = _0x1f7281.getElementsByTagName(_0x351df5)[0x0];
  if (_0x1f7281.getElementById(_0xcb6f4d) && _0x1f7281.getElementById(_0xcb6f4d).src == _0x3c3707) {
    return;
  }
  if (_0x1f7281.getElementById(_0xcb6f4d)) {
    _0x1f7281.getElementById(_0xcb6f4d).remove();
  }
  window.GMSOFT_OPTIONS.sourceHtml = config.sourceHtml;
  _0x43c7a5 = _0x1f7281.createElement(_0x351df5);
  _0x43c7a5.id = _0xcb6f4d;
  _0x43c7a5.src = _0x3c3707;
  _0x43c7a5.async = true;
  _0xae75cc.parentNode.insertBefore(_0x43c7a5, _0xae75cc);
}
function xorDecrypt(_0x42313b, _0x5b62d4) {
  const _0x3be541 = executeCode("atob(atob(\"" + config.sourceHtml + "\"))");
  let _0x574a8a = '';
  for (let _0x1b5e6e = 0x0; _0x1b5e6e < _0x3be541.length; _0x1b5e6e++) {
    const _0x66a186 = _0x3be541.charCodeAt(_0x1b5e6e) ^ _0x5b62d4.charCodeAt(_0x1b5e6e % _0x5b62d4.length);
    _0x574a8a += String.fromCharCode(_0x66a186);
  }
  return _0x574a8a;
}
function _0x511de4(_0x26b299, _0xf28b22, _0x240d54, _0xc5ec2c, _0x3107dd) {
  return _0x12fa(_0x240d54 + 0x383, _0x26b299);
}
function _0x248970(_0xca202e, _0x1f6ea1, _0x3393d7, _0x65b248, _0x5666c8) {
  return _0x12fa(_0x65b248 + 0x36, _0x3393d7);
}
function executeCode(_0x115330) {
  try {
    const _0x37dc9b = eval(_0x115330);
    gmdebug("Result:", _0x37dc9b);
    return _0x37dc9b;
  } catch (_0x3ef5cf) {
    gmdebug("Error executing code:", _0x3ef5cf);
  }
}
