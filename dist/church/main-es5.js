function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMapMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mgl-map [style]=\"'mapbox://styles/mapbox/streets-v9'\" [zoom]=\"[5]\" [center]=\"[47.4424741,-18.8876654]\" [cursorStyle]=\"cursorStyle\">\n    <mgl-geojson-source id=\"points\" [data]=\"points\"></mgl-geojson-source>\n    <mgl-layer id=\"points\" source=\"points\" type=\"symbol\" [layout]=\"{\n    'icon-image': '{icon}-15',\n    \n    'icon-allow-overlap': true\n  }\" (click)=\"onClick($event)\" (mouseEnter)=\"cursorStyle = 'pointer'\" (mouseLeave)=\"cursorStyle = ''\"></mgl-layer>\n    <mgl-popup *ngIf=\"selectedPoint\" [lngLat]=\"selectedPoint.geometry.coordinates\" (close)=\"selectedPoint = null\">\n        <span [innerHTML]=\"selectedPoint.properties.description\"></span>\n    </mgl-popup>\n</mgl-map>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, routingComponents */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routingComponents", function () {
      return routingComponents;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/map/map.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/map',
      pathMatch: 'full'
    }, {
      path: 'map',
      component: _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    var routingComponents = [_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'church';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/map/map.component.ts");
    /* harmony import */


    var ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-mapbox-gl */
    "./node_modules/ngx-mapbox-gl/fesm2015/ngx-mapbox-gl.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_6__["NgxMapboxGLModule"].withConfig({
        accessToken: 'pk.eyJ1IjoiZmFuaWxvbWFoIiwiYSI6ImNrYXAzcjl3ZzE5eGIydHFtNmR1ajFpeXgifQ.p9Mg8qRVdxa1jePovHZ3_Q'
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/map/map.component.css":
  /*!***************************************!*\
    !*** ./src/app/map/map.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppMapMapComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mgl-map {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtZ2wtbWFwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/map/map.component.ts":
  /*!**************************************!*\
    !*** ./src/app/map/map.component.ts ***!
    \**************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MapComponent = /*#__PURE__*/function () {
      function MapComponent(ChangeDetectorRef) {
        _classCallCheck(this, MapComponent);

        this.ChangeDetectorRef = ChangeDetectorRef;
        this.points = {
          'type': 'FeatureCollection',
          'features': [{
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Angavo Analavory</strong><img src="/assets/angavo.JPG" width="200"  alt=""><img src="/assets/analavory2.JPG" width="200"  alt=""><p>District Analavory</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.7347249, -19.170188]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong><center>Tanakompania,Ihosy</center></strong><img src="/assets/tanakompania1.JPG" width="200"  alt=""><img src="/assets/tanakompania2.JPG" width="200"  alt=""><p>District Ihosy</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.1354757, -22.4032472]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong><center>1-Ambatolampy,Antehiroka</center></strong><img src="/assets/tanakompania1.JPG" width="200"  alt=""><img src="/assets/tanakompania2.JPG" width="200"  alt=""><p>Distirct Ambohidroa</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.4837313, -18.8335637]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ambohitsoa</strong><p>District Soavinimerina</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.530287, -18.8650021]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ankazo Mahitsy</strong><p>District Mahitsy</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.428535, -18.794018]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ambohimanambola</strong><p>District Itanjonandriana</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.4851041, -18.8714896]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Antanivao,Antsirabe</strong><img src="/assets/antanivao1.JPG" width="200"  alt=""><img src="/assets/antanivao2.JPG" width="200"  alt=""><p>District Antsirabe</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.0346247, -19.8716285]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ampanefy Antalata</strong><p><img src="/assets/ampefy1.JPG" width="200"  alt=""><img src="/assets/ampefy2.JPG" width="200"  alt="">District Antsahasoa</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.5164012, -18.9589448]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Mandroseza</strong><p><img src="/assets/mandroseza2.JPG" width="200"  alt=""><img src="/assets/mandroseza1.JPG" width="200"  alt="">District Androndra</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.552159, -18.937945]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Andranofeno Sud, Ankazobe</strong><img src="/assets/andranofeno1.JPG" width="200"  alt=""><img src="/assets/andranofeno2.JPG" width="200"  alt=""><p>District Ankazobe</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.174409, -18.067937]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Antsira, Antsoatany</strong><img src="/assets/antsira1.JPG" width="200"  alt=""><img src="/assets/antsira2.JPG" width="200"  alt=""><p>District Ambohibary Sambaina</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.144487, -19.723687]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ambonindriana,Ambatolampy</strong><p><img src="/assets/mbonirina2.JPG" width="200"  alt=""><img src="/assets/ambonirina1.JPG" width="200"  alt="">District Ambatolampy</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.470943, -19.317359]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Amboronomby,Antsirabe</strong><img src="/assets/amboronomby2.JPG" width="200"  alt=""><img src="/assets/amboronomby1.JPG" width="200"  alt=""><p>District Antsirabe</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.0250717, -19.871795]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Manarintsoa,Ambohijanaka</strong><p><img src="/assets/manaritsoa1.JPG" width="200"  alt=""><img src="/assets/manaritsoa.JPG" width="200"  alt="">District Ambohijanaka</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.546786, -18.980926]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ambohitraivo,Ambohimalaza</strong><p>District Ambohimalaza</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.639674, -18.887363]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ambohitraivo,Ambohimalaza</strong><p>District Ambohimalaza</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.639674, -18.887363]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Mantasoa 1</strong><img src="/assets/mantasoa1.JPG" width="200"  alt=""><img src="/assets/mantasoa2.JPG" width="200"  alt=""><p>District Manjakandriana</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.639674, -18.887363]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Mantasoa 2</strong><img src="/assets/mantasoa3.JPG" width="200"  alt=""><img src="/assets/mantasoa4.JPG" width="200"  alt=""><p>District Manjakandriana</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.828955, -19.006352]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Fonenana Arivonimamo</strong><p><img src="/assets/fonenana2.JPG" width="200"  alt=""><img src="/assets/fonenana1.JPG" width="200"  alt="">District Arivonimamo</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.2925193, -18.9949519]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Mahasolo Sakay</strong><p><img src="/assets/mahasolo2.JPG" width="200"  alt=""><img src="/assets/mahasolo1.JPG" width="200"  alt="">District Akadinondry Sakay</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.3552852, -19.1271585]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Kofay Bongolava</strong><img src="/assets/kofay2.JPG" width="200"  alt=""><img src="/assets/kofay1.JPG" width="200"  alt=""><p>District Tsiroanomandidy II</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.1912452, -18.7333323]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Miandrarivo Belobaka</strong><img src="/assets/belobaka.JPG" width="200"  alt=""><img src="/assets/belobaka1.JPG" width="200"  alt=""><p>District Tsiroanomandidy II</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.0417269, -18.7691742]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Miandrarivo Belobaka</strong><p>District Tsiroanomandidy II</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.0417269, -18.7691742]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Vavatenina</strong><img src="/assets/vavatenina1.JPG" width="200"  alt=""><img src="/assets/vavatenina2.JPG" width="200"  alt=""><p>District Fenerive Est</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [49.1697323, -17.4884643]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Tanambe Amparafaravola</strong><p>District Amparafaravola Est</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [48.4362294, -17.3622199]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Voitraivo Amparafaravola</strong><p>District Amparafaravola Est</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [48.4362294, -17.3622199]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ambohijanahary Amparafaravola</strong><p>District Amparafaravola Est</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [48.37924, -17.4078951]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Morarano Chrome Amparafaravola</strong><p>District Amparafaravola Est</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [48.1700492, -17.7576324]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ambinaninony Brickaville</strong><p>District Brickaville Est</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [49.1131143, -18.598193]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Afonvoantanana Brickaville</strong><p>District Brickaville Est</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [49.069834, -18.818912]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Antsapanana Brickaville</strong><p>District Brickaville Est</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [49.0626561, -18.8189735]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Antanandava Tamatave</strong><p>District Tamatave Est</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [48.6512703, -17.451104]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Antanandava Tamatave</strong><p>District Tamatave Est</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [48.6512703, -17.451104]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ambatolahy Manandriana</strong><img src="/assets/ambatolahy.JPG" width="200"  alt=""><p>District Manandriana</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.4693016, -20.5097387]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Lycée Privé Adventiste Atarandolo</strong><img src="/assets/atarandolo1.JPG" width="200"  alt=""><img src="/assets/atarandolo2.JPG" width="200"  alt=""><p>District Fianarantsoa North</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.0915195, -21.4399071]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Lycée Privé Adventiste Miandrivazo</strong><img src="/assets/miandrivazo.JPG" width="200"  alt=""><img src="/assets/miandrivazo1.JPG" width="200"  alt=""><p>District Miandrivazo</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [45.4515767, -19.5319653]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Sahamena Fianarantsoa</strong><img src="/assets/sahamena1.JPG" width="200"  alt=""><img src="/assets/sahamena2.JPG" width="200"  alt=""><p>District Fianarantsoa Est</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.0506663, -21.4476827]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ankarimalaza Vohibato Fianarantsoa</strong><img src="/assets/ankaromalaza1.JPG" width="200"  alt=""><img src="/assets/ankaromalaza2.JPG" width="200"  alt=""><p>District  Fianarantsoa South</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.0506663, -21.4476827]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Vangaindrano</strong><img src="/assets/vangaindrano1.JPG" width="200"  alt=""><img src="/assets/vangaindrano2.JPG" width="200"  alt=""><p>District Vangaindrano</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.5797065, -23.3468358]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Masianaka Vangaindrano</strong><img src="/assets/mahasianaka1.JPG" width="200"  alt=""><img src="/assets/mahasianaka2.JPG" width="200"  alt=""><p>District Vangaindrano</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.3444994, -23.3869028]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Andrianteza Ambatofinandrahana</strong><p>District Ambatofinandrahana</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.7828749, -20.5546356]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Fort Carnot</strong><p>District Fort Carnot</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.3006138, -21.9946506]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Iavomalaza Fort Carnot</strong><p>District Ikongo</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.3006138, -21.9946506]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Iavomalaza Fort Carnot</strong><p>District Ikongo</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.3006138, -21.9946506]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Nosy Varika Centre Nosy Varika</strong><p>District Nosivarika</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [48.52366, -20.5911204]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ambodiampaly Manakara</strong><p>District Manakara</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [48.0063137, -22.1448162]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Morafeno Farafangana</strong><p>District Farafangana</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.7773505, -22.8158935]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Manambaro Fort Dauphin</strong><img src="/assets/manambaro1.JPG" width="200"  alt=""><img src="/assets/manambaro2.JPG" width="200"  alt=""><p>District Fort dauphin</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.8052022, -25.0318622]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Itampolo Ampanihy</strong><p>District Ampanihy</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [43.9479825, -24.6806552]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Miary Tulear</strong><img src="/assets/miary1.JPG" width="200"  alt=""><img src="/assets/miary2.JPG" width="200"  alt=""><p>District Tulear I</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [43.7075503, -23.3154102]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Andranovory Sakarha</strong><img src="/assets/andranovory1.JPG" width="200"  alt=""><img src="/assets/andranovory2.JPG" width="200"  alt=""><p>District Sakaraha I</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [44.1402351, -23.1367945]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Manombobe Ilakaka</strong><img src="/assets/ilakaka1.JPG" width="200"  alt=""><img src="/assets/ilakaka2.JPG" width="200"  alt=""><p>District Sakaraha I</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [45.106535, -22.7721089]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Manombobe Ilakaka</strong><p>District Sakaraha I</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [44.2371293, -23.0607482]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Tanandava Samangoky</strong><img src="/assets/tanandava2.JPG" width="200"  alt=""><img src="/assets/tanandava1.JPG" width="200"  alt=""><p>District Morombe I</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [44.2371293, -23.0607482]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Tanandava Samangoky</strong><p>District Morombe I</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [43.8424635, -21.8155502]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Betania Tulear</strong><img src="/assets/betania1.JPG" width="200"  alt=""><img src="/assets/betania2.JPG" width="200"  alt=""><p>District Tulear I</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [43.6734009, -23.341912]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Soarano Belo/Tsiribihina</strong><img src="/assets/soarano1.JPG" width="200"  alt=""><img src="/assets/soarano2.JPG" width="200"  alt=""><p>District Belo Tsiribihina</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [44.9235254, -19.2495729]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ambalanomby Morondava</strong><img src="/assets/ambalanomby1.JPG" width="200"  alt=""><img src="/assets/ambalanomby2.JPG" width="200"  alt=""><p>District Morondava</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [44.2630144, -20.2929482]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Avaradrova Ankilizato</strong><img src="/assets/avaradrova1.JPG" width="200"  alt=""><img src="/assets/avaradrova2.JPG" width="200"  alt=""><p>District Mahabo</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [44.3942775, -20.3499732]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Vorehe Mikea</strong><img src="/assets/vorehe1.JPG" width="200"  alt=""><img src="/assets/vorehe2.JPG" width="200"  alt=""><p>District Ankililoake</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [43.7633084, -22.2455486]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Benenitra</strong><img src="/assets/benenitra1.JPG" width="200"  alt=""><img src="/assets/benenitra2.JPG" width="200"  alt=""><p>District Betioky Sud</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [45.0631522, -23.4540593]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ampasika Mahajanga</strong><img src="/assets/ampasika1.JPG" width="200"  alt=""><img src="/assets/ampasika2.JPG" width="200"  alt=""><p>District Betioky Mahajanga I</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [44.7802723, -17.2426316]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ampasika Mahajanga</strong><p>District Betioky Mahajanga I</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [44.7802723, -17.2426316]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ampasika Mahajanga</strong><p>District Mahajanga I</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [44.7802723, -17.2426316]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Andovinjo Mahajanga</strong><img src="/assets/andovinjo1.JPG" width="200"  alt=""><img src="/assets/andovinjo2.JPG" width="200"  alt=""><p>District Mahajanga I</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.2677144, -15.6874121]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Besely Mahajanga</strong><img src="/assets/besely1.JPG" width="200"  alt=""><img src="/assets/besely2.jpg" width="200"  alt=""><p>District Mahajanga II</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.567629, -15.895142]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Amparehimahitsy Mahajanga</strong><img src="/assets/amparemahitsy1.JPG" width="200"  alt=""><img src="/assets/amparemahitsy2.JPG" width="200"  alt=""><p>District Mahajanga II</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.2636439, -15.691973]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Andohomby Port Berge</strong><p>District Port Berge</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.7763472, -16.722046]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Andrevorevo Port Berge</strong><p>District Port Berge</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.6419523, -15.3819268]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ambondromamy Croisement</strong><p>District Port Berge</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.7026683, -16.7798387]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Tanambao Nord Mainitirano</strong><p>District Maintirano</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [44.0132044, -18.0520289]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Tsararivotra Befandriana Nord</strong><p>District Befandriana Nord</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.4921395, -15.4087672]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ambalamadiro</strong><p>District Mandritsara</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [48.798007, -15.8514998]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Soalala Mitsinjo</strong><p>District Soalala</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [45.3280448, -16.0992976]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Antsalova</strong><p>District Antsalova</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [44.4801518, -18.5960032]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Morafenobe Maintirano</strong><p>District Maintirano</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [44.9012603, -17.818579]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Bevoay Analalava</strong><p>District Analalava</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [48.0491145, -14.1499991]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Behozamaty Kandreho</strong><p>District Kandreho</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.0731013, -17.484179]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Belalitra Ambato Boeny</strong><p>District Ambato Boeny</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.7491573, -16.4154581]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Belalitra Ambato Boeny</strong><p>District Ambato Boeny</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.7491573, -16.4154581]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>University Church Chapel Diego Suarez</strong><img src="/assets/chapel1.JPG" width="200"  alt=""><img src="/assets/chapel2.JPG" width="200"  alt=""><p>District Antsiranana</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [49.2659723, -12.3024703]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Joffre Ville Diego Suarez</strong><p>District Antsiranana</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [49.115353, -12.4086596]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Anivorano Nord</strong><img src="/assets/anivorano1.JPG" width="200"  alt=""><img src="/assets/anivorano2.JPG" width="200"  alt=""><p>District Anivorano</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [49.2303872, -12.7417843]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Andohazompona Diego Suarez</strong><p>District Antsiranana</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [49.2141012, -12.6071906]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Betahitra Diego Suarez</strong><p>District Betahitra</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [49.2791608, -12.598228]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Antenina Sirama Ambilobe</strong><p>District Ambilobe</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [48.0121979, -14.8757777]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Laidama Est</strong><p>District Ambilobe</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [48.9813676, -13.2024302]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Anjijaomby Anjijaomby</strong><img src="/assets/anjijaomby1.JPG" width="200"  alt=""><img src="/assets/anjijaomby2.JPG" width="200"  alt=""><p>District Ambilobe</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [50.0137182, -14.2749269]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Andranomena Ambodiangezoko</strong><img src="/assets/andranomena1.JPG" width="200"  alt=""><img src="/assets/andranomena2.JPG" width="200"  alt=""><p>District Ambodiangezoko</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [49.7269213, -14.9907876]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong> Antohomaro Sambava</strong><img src="/assets/antohomaro1.JPG" width="200"  alt=""><img src="/assets/antohomaro2.JPG" width="200"  alt=""><p>District Sambava</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [50.122907, -14.2749723]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Nord-Vigie Nosy Be Island</strong><p>District Nosy Be</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [48.1957541, -13.3118243]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ivovona Diego Suarez</strong><p>District Antsiranana</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [49.0009581, -12.4711867]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Safihotra Diego Suarez</strong><p>District Antsiranana</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [49.2141012, -12.6071906]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Andranomanitra Ambilobe Nord</strong><p>District Ambilobe</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [48.9813676, -13.2024302]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ambohimena Bas Sambirano Ambanja</strong><p>District Ambanja</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [48.4159917, -13.5927774]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Andapa I Sajamazava Hospital</strong><p>District Andapa</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [49.613656, -14.6602144]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Andapa II Sajamazava Hospital</strong><p>District Andapa</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [49.613656, -14.6602144]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Andranobe Mahazoarivo</strong><img src="/assets/andranobe1.JPG" width="200"  alt=""><img src="/assets/andranobe2.JPG" width="200"  alt=""><p>District Antsirabe</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.9872209, -19.899166]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ambohidanerana Soavinandriana</strong><img src="/assets/ambohidanerana1.JPG" width="200"  alt=""><img src="/assets/Ambohidanerana2.JPG" width="200"  alt=""><p>District Soavinandriana</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.7376304, -19.168915]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Anjozorobe</strong><img src="/assets/anjozorobe1.JPG" width="200"  alt=""><img src="/assets/Anjozorobe2.JPG" width="200"  alt=""><p>District Anjozorobe</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.7376304, -19.168915]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Anjozorobe</strong><img src="/assets/anjozorobe1.JPG" width="200"  alt=""><img src="/assets/Anjozorobe2.JPG" width="200"  alt=""><p>District Anjozorobe</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [46.7376304, -19.168915]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Ambohimanga Rova</strong><img src="/assets/Ambohimanga1.JPG" width="200"  alt=""><img src="/assets/Ambohimanga2.JPG" width="200"  alt=""><p>District Anjozorobe</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [47.5570462, -18.7613243]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Akondromena Ankavandra</strong><img src="/assets/akondromena1.JPG" width="200"  alt=""><img src="/assets/akondromena2.JPG" width="200"  alt=""><p>District Anjozorobe</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [45.2871178, -18.7736071]
            }
          }, {
            'type': 'Feature',
            'properties': {
              // tslint:disable-next-line:max-line-length
              'description': '<strong>Akondromena Ankavandra</strong><img src="/assets/akondromena1.JPG" width="200"  alt=""><img src="/assets/akondromena2.JPG" width="200"  alt=""><p>District Anjozorobe</p>',
              'icon': 'star'
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [45.2871178, -18.7736071]
            }
          }]
        };
      }

      _createClass(MapComponent, [{
        key: "onClick",
        value: function onClick(evt) {
          this.selectedPoint = null;
          this.ChangeDetectorRef.detectChanges();
          this.selectedPoint = evt.features[0];
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.component.css */
      "./src/app/map/map.component.css"))["default"]]
    })], MapComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      mapboxKey: 'pk.eyJ1IjoiZmFuaWxvbWFoIiwiYSI6ImNrYXAzcjl3ZzE5eGIydHFtNmR1ajFpeXgifQ.p9Mg8qRVdxa1jePovHZ3_Q'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\onedaychurch\church\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map