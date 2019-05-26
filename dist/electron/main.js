(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("redux"), require("reselect"), require("csstips"), require("csx"), require("domain"), require("react"), require("react-redux"), require("typesstyle"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "redux", "reselect", "csstips", "csx", "domain", "react", "react-redux", "typesstyle"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("lodash"), require("redux"), require("reselect"), require("csstips"), require("csx"), require("domain"), require("react"), require("react-redux"), require("typesstyle")) : factory(root["lodash"], root["redux"], root["reselect"], root["csstips"], root["csx"], root["domain"], root["react"], root["react-redux"], root["typesstyle"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_40__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseAction__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__baseAction__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__baseAction__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__baseAction__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__baseAction__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__baseAction__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__baseAction__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseReducer__ = __webpack_require__(27);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__baseReducer__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__baseReducer__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__baseReducer__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(8);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__template__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_2__template__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_2__template__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templateProperty__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_3__templateProperty__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_3__templateProperty__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_3__templateProperty__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_3__templateProperty__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_3__templateProperty__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_3__templateProperty__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_3__templateProperty__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_3__templateProperty__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_3__templateProperty__["i"]; });
/** @module Model:index */






/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsUiErrorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BsUiError; });
/* harmony export (immutable) */ __webpack_exports__["c"] = isBsUiError;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BsUiErrorType;
(function (BsUiErrorType) {
    BsUiErrorType[BsUiErrorType["unknownError"] = 0] = "unknownError";
    BsUiErrorType[BsUiErrorType["unexpectedError"] = 1] = "unexpectedError";
    BsUiErrorType[BsUiErrorType["invalidParameters"] = 2] = "invalidParameters";
    BsUiErrorType[BsUiErrorType["invalidOperation"] = 3] = "invalidOperation";
    BsUiErrorType[BsUiErrorType["apiError"] = 4] = "apiError";
    BsUiErrorType[BsUiErrorType["invalidModel"] = 5] = "invalidModel";
})(BsUiErrorType = BsUiErrorType || (BsUiErrorType = {}));
var bsUiErrorMessage = (_a = {},
    _a[BsUiErrorType.unknownError] = 'Unknown error',
    _a[BsUiErrorType.unexpectedError] = 'Unexpected error',
    _a[BsUiErrorType.invalidParameters] = 'Invalid parameters',
    _a[BsUiErrorType.invalidOperation] = 'Invalid operation attempt',
    _a[BsUiErrorType.apiError] = 'API error',
    _a[BsUiErrorType.invalidModel] = 'Invalid model',
    _a);
var BsUiError = /** @class */ (function (_super) {
    __extends(BsUiError, _super);
    function BsUiError(type, reason) {
        var _this = _super.call(this) || this;
        _this.name = 'BsUiError';
        _this.type = type;
        if (reason) {
            _this.message = bsUiErrorMessage[type] + ': ' + reason;
        }
        else {
            _this.message = bsUiErrorMessage[type];
        }
        Object.setPrototypeOf(_this, BsUiError.prototype);
        return _this;
    }
    return BsUiError;
}(Error));

function isBsUiError(error) {
    return error instanceof BsUiError;
}
var _a;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BSUIMODEL_BATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BSUIMODEL_REHYDRATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BSUIMODEL_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return bsUiModelBatchAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return bsUiModelRehydrateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return bsUiModelResetModel; });
/** @module Model:base */
// -----------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------
/** @internal */
/** @private */
var BSUIMODEL_BATCH = 'BSUIMODEL_BATCH';
/** @internal */
/** @private */
var BSUIMODEL_REHYDRATE = 'BSUIMODEL_REHYDRATE';
/** @internal */
/** @private */
var BSUIMODEL_RESET = 'BSUIMODEL_RESET';
/** @internal */
/** @private */
var bsUiModelBatchAction = function (action) {
    return { type: BSUIMODEL_BATCH, payload: action };
};
var bsUiModelRehydrateModel = function (bsUiModelState) {
    return {
        type: BSUIMODEL_REHYDRATE,
        payload: {
            newBsUiModelState: bsUiModelState,
        },
    };
};
var bsUiModelResetModel = function () {
    return {
        type: BSUIMODEL_RESET,
        payload: null,
    };
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(29);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__base__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template__ = __webpack_require__(30);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__template__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templateProperty__ = __webpack_require__(31);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__templateProperty__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__templateProperty__["b"]; });
/** @module Types:index */





/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asap = __webpack_require__(16);

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._75 = 0;
  this._83 = 0;
  this._18 = null;
  this._38 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._47 = null;
Promise._71 = null;
Promise._44 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}
function handle(self, deferred) {
  while (self._83 === 3) {
    self = self._18;
  }
  if (Promise._47) {
    Promise._47(self);
  }
  if (self._83 === 0) {
    if (self._75 === 0) {
      self._75 = 1;
      self._38 = deferred;
      return;
    }
    if (self._75 === 1) {
      self._75 = 2;
      self._38 = [self._38, deferred];
      return;
    }
    self._38.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._83 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._83 === 1) {
        resolve(deferred.promise, self._18);
      } else {
        reject(deferred.promise, self._18);
      }
      return;
    }
    var ret = tryCallOne(cb, self._18);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._83 = 3;
      self._18 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._83 = 1;
  self._18 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._83 = 2;
  self._18 = newValue;
  if (Promise._71) {
    Promise._71(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._75 === 1) {
    handle(self, self._38);
    self._38 = null;
  }
  if (self._75 === 2) {
    for (var i = 0; i < self._38.length; i++) {
      handle(self, self._38[i]);
    }
    self._38 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__base__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__base__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template__ = __webpack_require__(26);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__template__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__template__["b"]; });
/** @module Controller:index */




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return templateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isValidTemplateState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isValidTemplateStateShallow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templateProperty__ = __webpack_require__(9);
/** @module Model:template */



// -----------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------
// none
// -----------------------------------------------------------------------
// Defaults
// -----------------------------------------------------------------------
// none
// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------
/** @internal */
/** @private */
var templateReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    property: __WEBPACK_IMPORTED_MODULE_2__templateProperty__["f" /* templatePropertyReducer */],
});
// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------
/** @internal */
/** @private */
var isValidTemplateState = function (state) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["isObject"])(state)
        && state.hasOwnProperty('property') && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__templateProperty__["h" /* isValidTemplatePropertyState */])(state.property);
};
/** @internal */
/** @private */
var isValidTemplateStateShallow = function (state) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["isObject"])(state)
        && state.hasOwnProperty('property');
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BSUIMODEL_UPDATE_TEMPLATE_PROPERTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BSUIMODEL_RESET_TEMPLATE_PROPERTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return bsUiModelResetTemplateProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return bsUiModelUpdateTemplateColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return templatePropertyDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return templatePropertyReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isValidColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isValidTemplatePropertyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isValidTemplatePropertyStateShallow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility_BsUiError__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseAction__ = __webpack_require__(2);
/** @module Model:templateProperty */



// -----------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------
/** @internal */
/** @private */
var BSUIMODEL_UPDATE_TEMPLATE_PROPERTY = 'BSUIMODEL_UPDATE_TEMPLATE_PROPERTY';
/** @internal */
/** @private */
var BSUIMODEL_RESET_TEMPLATE_PROPERTY = 'BSUIMODEL_RESET_TEMPLATE_PROPERTY';
/** @internal */
/** @private */
var bsUiModelResetTemplateProperty = function () {
    return {
        type: BSUIMODEL_RESET_TEMPLATE_PROPERTY,
        payload: null,
    };
};
/** @internal */
/** @private */
var bsUiModelUpdateTemplateColor = function (color) {
    if (!isValidColor(color)) {
        var errorMessage = "invalid color " + JSON.stringify(color);
        throw new __WEBPACK_IMPORTED_MODULE_1__utility_BsUiError__["b" /* BsUiError */](__WEBPACK_IMPORTED_MODULE_1__utility_BsUiError__["a" /* BsUiErrorType */].invalidParameters, errorMessage);
    }
    return {
        type: BSUIMODEL_UPDATE_TEMPLATE_PROPERTY,
        payload: {
            color: color,
        },
    };
};
// -----------------------------------------------------------------------
// Defaults
// -----------------------------------------------------------------------
/** @internal */
/** @private */
var templatePropertyDefault = {
    color: { a: 255, r: 0, g: 0, b: 0 }
};
Object.freeze(templatePropertyDefault);
// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------
/** @internal */
/** @private */
var templatePropertyReducer = function (state, _a) {
    if (state === void 0) { state = templatePropertyDefault; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_2__baseAction__["b" /* BSUIMODEL_REHYDRATE */]:
        case __WEBPACK_IMPORTED_MODULE_2__baseAction__["c" /* BSUIMODEL_RESET */]:
        case BSUIMODEL_RESET_TEMPLATE_PROPERTY: {
            return templatePropertyDefault;
        }
        case BSUIMODEL_UPDATE_TEMPLATE_PROPERTY: {
            return Object.assign({}, state, payload);
        }
        default:
            return state;
    }
};
// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------
/** @internal */
/** @private */
var isValidColor = function (state) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["isObject"])(state)
        && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["isNumber"])(state.r) && state.r >= 0 && state.r <= 255
        && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["isNumber"])(state.g) && state.g >= 0 && state.g <= 255
        && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["isNumber"])(state.b) && state.b >= 0 && state.b <= 255
        && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["isNumber"])(state.a) && state.a >= 0 && state.a <= 255;
};
/** @internal */
/** @private */
var isValidTemplatePropertyState = function (state) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["isObject"])(state)
        && state.hasOwnProperty('color') && isValidColor(state.color);
};
/** @internal */
/** @private */
var isValidTemplatePropertyStateShallow = function (state) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["isObject"])(state)
        && state.hasOwnProperty('color');
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bsUiModelFilterBaseState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bsUiModelGetBaseState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility_BsUiError__ = __webpack_require__(1);
/** @module Selector:base */


/** @internal */
/** @private */
var bsUiModelFilterBaseState = function (state) {
    if (state.hasOwnProperty('bsuimodel') && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__model__["i" /* isValidBsUiModelStateShallow */])(state.bsuimodel)) {
        return state.bsuimodel;
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__model__["i" /* isValidBsUiModelStateShallow */])(state)) {
        return state;
    }
    else {
        var exceptionMessage = "state must be of type BsUiModelState or have a field bsuimodel\n      of type BsUiModelState. invalid state " + JSON.stringify(state);
        throw new __WEBPACK_IMPORTED_MODULE_1__utility_BsUiError__["b" /* BsUiError */](__WEBPACK_IMPORTED_MODULE_1__utility_BsUiError__["a" /* BsUiErrorType */].invalidParameters, exceptionMessage);
    }
};
/** @internal */
/** @private */
var bsUiModelGetBaseState = function (state) {
    return bsUiModelFilterBaseState(state);
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__base__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__base__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__template__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templateProperty__ = __webpack_require__(28);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__templateProperty__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__templateProperty__["b"]; });
/** @module Selector:index */





/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bsUiModelGetTemplateState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility_BsUiError__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(10);
/** @module Selector:template */




/** @internal */
/** @private */
var bsUiModelGetTemplateState = function (state) {
    return getTemplateState(state);
};
var getTemplateState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(__WEBPACK_IMPORTED_MODULE_3__base__["b" /* bsUiModelGetBaseState */], function (state) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__model__["l" /* isValidTemplateStateShallow */])(state.template)) {
        return state.template;
    }
    else {
        var exceptionMessage = "state must be of type BsUiModelState or\n        have a field bsuimodel of type BsUiModelState. invalid state.template\n        " + JSON.stringify(state.template);
        throw new __WEBPACK_IMPORTED_MODULE_1__utility_BsUiError__["b" /* BsUiError */](__WEBPACK_IMPORTED_MODULE_1__utility_BsUiError__["a" /* BsUiErrorType */].invalidParameters, exceptionMessage);
    }
});


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  __webpack_require__(20).enable();
  window.Promise = __webpack_require__(19);
}

// fetch() polyfill for making API calls.
__webpack_require__(34);
__webpack_require__(22);

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = __webpack_require__(17);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(24);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controller__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "initModel", function() { return __WEBPACK_IMPORTED_MODULE_1__controller__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "resetModel", function() { return __WEBPACK_IMPORTED_MODULE_1__controller__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "updateTemplateColorAsync", function() { return __WEBPACK_IMPORTED_MODULE_1__controller__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "updateTemplateColorBatch", function() { return __WEBPACK_IMPORTED_MODULE_1__controller__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BSUIMODEL_BATCH", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BSUIMODEL_REHYDRATE", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BSUIMODEL_RESET", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bsUiModelBatchAction", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bsUiModelRehydrateModel", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bsUiModelResetModel", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bsUiModelReducer", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isValidBsUiModelState", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isValidBsUiModelStateShallow", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "templateReducer", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isValidTemplateState", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isValidTemplateStateShallow", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BSUIMODEL_UPDATE_TEMPLATE_PROPERTY", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BSUIMODEL_RESET_TEMPLATE_PROPERTY", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bsUiModelResetTemplateProperty", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bsUiModelUpdateTemplateColor", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "templatePropertyDefault", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "templatePropertyReducer", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isValidColor", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isValidTemplatePropertyState", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isValidTemplatePropertyStateShallow", function() { return __WEBPACK_IMPORTED_MODULE_2__model__["u"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selector__ = __webpack_require__(11);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bsUiModelFilterBaseState", function() { return __WEBPACK_IMPORTED_MODULE_3__selector__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bsUiModelGetBaseState", function() { return __WEBPACK_IMPORTED_MODULE_3__selector__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bsUiModelGetTemplateState", function() { return __WEBPACK_IMPORTED_MODULE_3__selector__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bsUiModelGetTemplatePropertyState", function() { return __WEBPACK_IMPORTED_MODULE_3__selector__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bsUiModelGetTemplatePropertyColorState", function() { return __WEBPACK_IMPORTED_MODULE_3__selector__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__type__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createModel", function() { return __WEBPACK_IMPORTED_MODULE_4__type__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createTemplate", function() { return __WEBPACK_IMPORTED_MODULE_4__type__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createTemplateProperty", function() { return __WEBPACK_IMPORTED_MODULE_4__type__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createBsColor", function() { return __WEBPACK_IMPORTED_MODULE_4__type__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utility__ = __webpack_require__(32);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BsUiErrorType", function() { return __WEBPACK_IMPORTED_MODULE_5__utility__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BsUiError", function() { return __WEBPACK_IMPORTED_MODULE_5__utility__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isBsUiError", function() { return __WEBPACK_IMPORTED_MODULE_5__utility__["c"]; });








/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var domain; // The domain module is executed on demand
var hasSetImmediate = typeof setImmediate === "function";

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including network IO events in Node.js.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Avoids a function call
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory excaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

rawAsap.requestFlush = requestFlush;
function requestFlush() {
    // Ensure flushing is not bound to any domain.
    // It is not sufficient to exit the domain, because domains exist on a stack.
    // To execute code outside of any domain, the following dance is necessary.
    var parentDomain = process.domain;
    if (parentDomain) {
        if (!domain) {
            // Lazy execute the domain module.
            // Only employed if the user elects to use domains.
            domain = __webpack_require__(37);
        }
        domain.active = process.domain = null;
    }

    // `setImmediate` is slower that `process.nextTick`, but `process.nextTick`
    // cannot handle recursion.
    // `requestFlush` will only be called recursively from `asap.js`, to resume
    // flushing after an error is thrown into a domain.
    // Conveniently, `setImmediate` was introduced in the same version
    // `process.nextTick` started throwing recursion errors.
    if (flushing && hasSetImmediate) {
        setImmediate(flush);
    } else {
        process.nextTick(flush);
    }

    if (parentDomain) {
        domain.active = process.domain = parentDomain;
    }
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = __webpack_require__(6);

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._44);
  p._83 = 1;
  p._18 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._83 === 3) {
            val = val._18;
          }
          if (val._83 === 1) return res(i, val._18);
          if (val._83 === 2) reject(val._18);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(6);

var DEFAULT_WHITELIST = [
  ReferenceError,
  TypeError,
  RangeError
];

var enabled = false;
exports.disable = disable;
function disable() {
  enabled = false;
  Promise._47 = null;
  Promise._71 = null;
}

exports.enable = enable;
function enable(options) {
  options = options || {};
  if (enabled) disable();
  enabled = true;
  var id = 0;
  var displayId = 0;
  var rejections = {};
  Promise._47 = function (promise) {
    if (
      promise._83 === 2 && // IS REJECTED
      rejections[promise._56]
    ) {
      if (rejections[promise._56].logged) {
        onHandled(promise._56);
      } else {
        clearTimeout(rejections[promise._56].timeout);
      }
      delete rejections[promise._56];
    }
  };
  Promise._71 = function (promise, err) {
    if (promise._75 === 0) { // not yet handled
      promise._56 = id++;
      rejections[promise._56] = {
        displayId: null,
        error: err,
        timeout: setTimeout(
          onUnhandled.bind(null, promise._56),
          // For reference errors and type errors, this almost always
          // means the programmer made a mistake, so log them after just
          // 100ms
          // otherwise, wait 2 seconds to see if they get handled
          matchWhitelist(err, DEFAULT_WHITELIST)
            ? 100
            : 2000
        ),
        logged: false
      };
    }
  };
  function onUnhandled(id) {
    if (
      options.allRejections ||
      matchWhitelist(
        rejections[id].error,
        options.whitelist || DEFAULT_WHITELIST
      )
    ) {
      rejections[id].displayId = displayId++;
      if (options.onUnhandled) {
        rejections[id].logged = true;
        options.onUnhandled(
          rejections[id].displayId,
          rejections[id].error
        );
      } else {
        rejections[id].logged = true;
        logError(
          rejections[id].displayId,
          rejections[id].error
        );
      }
    }
  }
  function onHandled(id) {
    if (rejections[id].logged) {
      if (options.onHandled) {
        options.onHandled(rejections[id].displayId, rejections[id].error);
      } else if (!rejections[id].onUnhandled) {
        console.warn(
          'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
        );
        console.warn(
          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
          rejections[id].displayId + '.'
        );
      }
    }
  }
}

function logError(id, error) {
  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
  var errStr = (error && (error.stack || error)) + '';
  errStr.split('\n').forEach(function (line) {
    console.warn('  ' + line);
  });
}

function matchWhitelist(error, list) {
  return list.some(function (cls) {
    return error instanceof cls;
  });
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var now = __webpack_require__(18)
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(21).polyfill()


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TemplateComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Template; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_typestyle__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_typestyle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_typestyle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_csstips__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_csstips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_csstips__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_csx__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_csx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_csx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controller__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selector__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var TemplateAsset = __webpack_require__(33);
// -----------------------------------------------------------------------
// Styles
// -----------------------------------------------------------------------
var containerStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_typestyle__["style"])(__WEBPACK_IMPORTED_MODULE_4_csstips__["fillParent"], __WEBPACK_IMPORTED_MODULE_4_csstips__["vertical"]);
var headerContainerStyle = function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_typestyle__["style"])({
    backgroundColor: 'black',
    color: 'white',
}, __WEBPACK_IMPORTED_MODULE_4_csstips__["centerCenter"], __WEBPACK_IMPORTED_MODULE_4_csstips__["padding"](10, 0, 35, 0), __WEBPACK_IMPORTED_MODULE_4_csstips__["content"], __WEBPACK_IMPORTED_MODULE_4_csstips__["vertical"], __WEBPACK_IMPORTED_MODULE_4_csstips__["verticallySpaced"](10)); };
var bodyContainerStyle = function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_typestyle__["style"])(__WEBPACK_IMPORTED_MODULE_4_csstips__["padding"](30, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_csx__["percent"])(20), 30, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_csx__["percent"])(20)), __WEBPACK_IMPORTED_MODULE_4_csstips__["content"], __WEBPACK_IMPORTED_MODULE_4_csstips__["vertical"]); };
var bodySectionContainerStyle = function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_typestyle__["style"])(__WEBPACK_IMPORTED_MODULE_4_csstips__["content"], __WEBPACK_IMPORTED_MODULE_4_csstips__["vertical"]); };
var subHeaderContainerStyle = function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_typestyle__["style"])({
    margin: '50px 0 0 0',
}, __WEBPACK_IMPORTED_MODULE_4_csstips__["centerCenter"], __WEBPACK_IMPORTED_MODULE_4_csstips__["content"], __WEBPACK_IMPORTED_MODULE_4_csstips__["vertical"]); };
var paragraphContainerStyle = function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_typestyle__["style"])({
    margin: '0 20px 0 20px',
    '-webkit-overflow-scrolling': 'touch',
    overflow: 'auto',
}, __WEBPACK_IMPORTED_MODULE_4_csstips__["startJustified"]); };
var indentedParagraphContainerStyle = function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_typestyle__["style"])({
    margin: '10px 50px 10px 50px',
    '-webkit-overflow-scrolling': 'touch',
    overflow: 'auto',
}, __WEBPACK_IMPORTED_MODULE_4_csstips__["startJustified"], __WEBPACK_IMPORTED_MODULE_4_csstips__["content"], __WEBPACK_IMPORTED_MODULE_4_csstips__["vertical"]); };
var codeContainerStyle = function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_typestyle__["style"])({
    margin: '10px 20px 10px 20px',
    padding: '20px 20px 20px 20px',
    '-webkit-overflow-scrolling': 'touch',
    overflow: 'auto',
    backgroundColor: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_csx__["color"])('#eee').toString(),
    border: "1px solid " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_csx__["color"])('#999').toString(),
    fontFamily: 'monospace, monospace',
    fontSize: '16px',
}); };
var imageContainerStyle = function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_typestyle__["style"])({
    margin: '30px auto',
}, __WEBPACK_IMPORTED_MODULE_4_csstips__["centerCenter"], __WEBPACK_IMPORTED_MODULE_4_csstips__["height"](70), __WEBPACK_IMPORTED_MODULE_4_csstips__["width"](70)); };
var linkStyle = function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_typestyle__["style"])({
    display: 'inline',
}); };
var buttonStyle = function (templateColor) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_typestyle__["style"])({
    margin: '0 auto',
    cursor: 'pointer',
    backgroundColor: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_csx__["rgba"])(templateColor.r, templateColor.g, templateColor.b, templateColor.a).toString(),
    color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_csx__["rgba"])(templateColor.r, templateColor.g, templateColor.b, templateColor.a).invert().toString(),
}, __WEBPACK_IMPORTED_MODULE_4_csstips__["height"](50), __WEBPACK_IMPORTED_MODULE_4_csstips__["width"](200)); };
// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------
var TemplateComponent = /** @class */ (function (_super) {
    __extends(TemplateComponent, _super);
    function TemplateComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateComponent.prototype.componentDidMount = function () {
        this.props.onInitModel();
    };
    TemplateComponent.prototype.componentWillUnmount = function () {
        this.props.onResetModel();
    };
    TemplateComponent.prototype.renderComponent = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: bodySectionContainerStyle() },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", { className: subHeaderContainerStyle() }, "Component"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Asset"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: paragraphContainerStyle() }, "Add asset to ~/src/asset and load via component using require syntax:"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/component/Template.tsx",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                "const TemplateAsset = require('../asset/TemplateAsset');",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                "...",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                "<img className=",
                imageContainerStyle(),
                " src=",
                TemplateAsset,
                " />"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: imageContainerStyle(), src: TemplateAsset }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Style"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: paragraphContainerStyle() }, "Components should be styled using the included inline, optimized, type safe style APIs:"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("b", { className: indentedParagraphContainerStyle() }, "1. typestyle"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("b", { className: indentedParagraphContainerStyle() }, "2. csstips"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("b", { className: indentedParagraphContainerStyle() }, "3. csx"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/component/Template.tsx",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: paragraphContainerStyle() },
                "See\u00A0",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: linkStyle(), href: 'https://typestyle.github.io' }, "https://typestyle.github.io"),
                "\u00A0for more info"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Test"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/component/Template.test.tsx",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null))));
    };
    TemplateComponent.prototype.renderModel = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: bodySectionContainerStyle() },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", { className: subHeaderContainerStyle() }, "Model"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Simple Action Creator"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/model/templateProperty.ts",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Simple Action Creator Test"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/model/templateProperty.test.ts",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Reducer"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/model/templateProperty.ts",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Reducer Test"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/model/templateProperty.test.ts",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Validator"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/model/templateProperty.ts",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Validator Test"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/model/templateProperty.test.ts",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Component Integration"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/component/Template.ts",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Selector"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/selector/templateProperty.ts",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Selector Test"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/selector/templateProperty.test.ts",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null))));
    };
    TemplateComponent.prototype.renderController = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: bodySectionContainerStyle() },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", { className: subHeaderContainerStyle() }, "Controller"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Batch Action"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/controller/template.ts",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: buttonStyle(this.props.color), type: 'button', value: 'Update Color Batch', onClick: this.props.onUpdateTemplateColorBatch }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Batch Action Test"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/controller/template.test.ts",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Async Action"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/controller/template.ts",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: buttonStyle(this.props.color), type: 'button', value: 'Update Color Async', onClick: this.props.onUpdateTemplateColorAsync }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Async Action Test"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/controller/template.test.ts",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null))));
    };
    TemplateComponent.prototype.renderType = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: bodySectionContainerStyle() },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", { className: subHeaderContainerStyle() }, "Type"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Definition"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/type/templateProperty.ts",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Helper Function"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/type/templateProperty.ts",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Helper Function Test"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/type/templateProperty.test.ts",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null))));
    };
    TemplateComponent.prototype.renderError = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: bodySectionContainerStyle() },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "Error"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: codeContainerStyle() },
                "~/src/utility/BsUiError.ts",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null))));
    };
    TemplateComponent.prototype.renderHeader = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: headerContainerStyle() },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "# BrightSign"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "UI Template Project")));
    };
    TemplateComponent.prototype.renderBody = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: bodyContainerStyle() },
            this.renderComponent(),
            this.renderModel(),
            this.renderController(),
            this.renderType(),
            this.renderError()));
    };
    TemplateComponent.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: containerStyle },
            this.renderHeader(),
            this.renderBody()));
    };
    return TemplateComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));

// -----------------------------------------------------------------------
// Container
// -----------------------------------------------------------------------
var mapDispatchToProps = function (dispatch) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])({
        onInitModel: __WEBPACK_IMPORTED_MODULE_6__controller__["a" /* initModel */],
        onResetModel: __WEBPACK_IMPORTED_MODULE_6__controller__["b" /* resetModel */],
        onUpdateTemplateColorAsync: __WEBPACK_IMPORTED_MODULE_6__controller__["c" /* updateTemplateColorAsync */],
        onUpdateTemplateColorBatch: __WEBPACK_IMPORTED_MODULE_6__controller__["d" /* updateTemplateColorBatch */],
    }, dispatch);
};
var mapStateToProps = function (state, ownProps) {
    return {
        color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__selector__["e" /* bsUiModelGetTemplatePropertyColorState */])(state)
    };
};
var Template = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(TemplateComponent);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Template__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Template__["a"]; });



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resetModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(0);


// -----------------------------------------------------------------------
// Utilities
// -----------------------------------------------------------------------
var fetchModelAsync = function () {
    return new Promise(function (resolve) {
        var color = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__type__["d" /* createBsColor */])(255, 0, 0, 0);
        var templateProperty = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__type__["c" /* createTemplateProperty */])(color);
        var template = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__type__["b" /* createTemplate */])(templateProperty);
        var model = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__type__["a" /* createModel */])(template);
        resolve(model);
    });
};
// -----------------------------------------------------------------------
// Controller Methods
// -----------------------------------------------------------------------
var initModel = function () {
    return function (dispatch, getState) {
        return fetchModelAsync()
            .then(function (model) { return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__model__["e" /* bsUiModelRehydrateModel */])(model)); });
    };
};
var resetModel = function () {
    return function (dispatch, getState) {
        return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__model__["f" /* bsUiModelResetModel */])());
    };
};


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateTemplateColorAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return updateTemplateColorBatch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(0);


// -----------------------------------------------------------------------
// Utilities
// -----------------------------------------------------------------------
var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var doAsync = function () {
    return new Promise(function (resolve) { return setTimeout(resolve, 1000); });
};
// -----------------------------------------------------------------------
// Controller Methods
// -----------------------------------------------------------------------
/** @internal */
/** @private */
var updateTemplateColorAsync = function () {
    return function (dispatch, getState) {
        return doAsync()
            .then(function () {
            var r = getRandomInt(0, 255);
            var g = getRandomInt(0, 255);
            var b = getRandomInt(0, 255);
            var a = getRandomInt(0, 255);
            var color = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__type__["d" /* createBsColor */])(r, g, b, a);
            return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__model__["p" /* bsUiModelUpdateTemplateColor */])(color));
        });
    };
};
/** @internal */
/** @private */
var updateTemplateColorBatch = function () {
    return function (dispatch, getState) {
        var batchActions = [];
        var r = getRandomInt(0, 255);
        var g = getRandomInt(0, 255);
        var b = getRandomInt(0, 255);
        var a = getRandomInt(0, 255);
        var color = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__type__["d" /* createBsColor */])(r, g, b, a);
        batchActions.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__model__["p" /* bsUiModelUpdateTemplateColor */])(color));
        return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__model__["d" /* bsUiModelBatchAction */])(batchActions));
    };
};


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bsUiModelReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isValidBsUiModelState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isValidBsUiModelStateShallow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseAction__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template__ = __webpack_require__(8);
/** @module Model:base */




var enableBatching = function (reduce) {
    return function batchingReducer(state, action) {
        switch (action.type) {
            case __WEBPACK_IMPORTED_MODULE_2__baseAction__["a" /* BSUIMODEL_BATCH */]:
                return action.payload.reduce(batchingReducer, state);
            default:
                return reduce(state, action);
        }
    };
};
var bsUiModelReducer = enableBatching(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    template: __WEBPACK_IMPORTED_MODULE_3__template__["a" /* templateReducer */],
}));
// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------
var isValidBsUiModelState = function (state) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["isObject"])(state)
        && state.hasOwnProperty('template') && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__template__["b" /* isValidTemplateState */])(state.template);
};
var isValidBsUiModelStateShallow = function (state) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["isObject"])(state)
        && state.hasOwnProperty('template');
};


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bsUiModelGetTemplatePropertyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bsUiModelGetTemplatePropertyColorState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility_BsUiError__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template__ = __webpack_require__(12);
/** @module Selector:templateProperty */




/** @internal */
/** @private */
var bsUiModelGetTemplatePropertyState = function (state) {
    return getTemplatePropertyState(state);
};
var getTemplatePropertyState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(__WEBPACK_IMPORTED_MODULE_3__template__["a" /* bsUiModelGetTemplateState */], function (state) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__model__["u" /* isValidTemplatePropertyStateShallow */])(state.property)) {
        return state.property;
    }
    else {
        var exceptionMessage = "state must be of type BsUiModelState or\n        have a field bsuimodel of type BsUiModelState. invalid state.template.property\n        " + JSON.stringify(state.property);
        throw new __WEBPACK_IMPORTED_MODULE_1__utility_BsUiError__["b" /* BsUiError */](__WEBPACK_IMPORTED_MODULE_1__utility_BsUiError__["a" /* BsUiErrorType */].invalidParameters, exceptionMessage);
    }
});
/** @internal */
/** @private */
var bsUiModelGetTemplatePropertyColorState = function (state) {
    return getTemplatePropertyColor(state);
};
var getTemplatePropertyColor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(bsUiModelGetTemplatePropertyState, function (state) {
    return state.color;
});


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createModel; });
/** @module Types:base */
/** @internal */
/** @private */
var createModel = function (template) {
    return {
        template: template
    };
};


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createTemplate; });
/** @module Types:template */
/** @internal */
/** @private */
var createTemplate = function (property) {
    return {
        property: property
    };
};


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createTemplateProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createBsColor; });
/** @module Types:templateProperties */
/** @internal */
/** @private */
var createTemplateProperty = function (color) {
    return {
        color: color
    };
};
/** @internal */
/** @private */
var createBsColor = function (r, g, b, a) {
    return {
        r: r,
        g: g,
        b: b,
        a: a
    };
};


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BsUiError__ = __webpack_require__(1);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__BsUiError__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__BsUiError__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__BsUiError__["c"]; });



/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICAgICAgPHBhdGggZD0iTTMwLDc2cTYtMTQsMTMtMjZxNi0xMiwxNC0yM3E4LTEyLDEzLTE3cTMtNCw2LTZxMS0xLDUtMnE4LTEsMTItMXExLDAsMSwxcTAsMS0xLDJxLTEzLDExLTI3LDMzcS0xNCwyMS0yNCw0NHEtNCw5LTUsMTFxLTEsMi05LDJxLTUsMC02LTFxLTEtMS01LTZxLTUtOC0xMi0xNXEtMy00LTMtNnEwLTIsNC01cTMtMiw2LTJxMywwLDgsM3E1LDQsMTAsMTR6IiBmaWxsPSJncmVlbiIgLz4KPC9zdmc+Cg=="

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.WHATWGFetch = {})));
}(this, (function (exports) { 'use strict';

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("csstips");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("csx");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("domain");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("typesstyle");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(14);
module.exports = __webpack_require__(15);


/***/ })
/******/ ]);
});
//# sourceMappingURL=main.js.map