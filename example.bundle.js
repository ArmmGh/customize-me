/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./index.scss":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./index.scss ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat&family=Montserrat+Alternates:ital,wght@0,200;0,400;0,600;1,100&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  height: 100vh;\n  font-family: 'Montserrat Alternates', sans-serif;\n  margin: 0;\n  box-sizing: border-box;\n  background: #556270;\n  background: -webkit-linear-gradient(to bottom, #ff6b6b, #282c34);\n  background: linear-gradient(to bottom, #ff6b6b, #282c34); }\n  body > flex-box {\n    max-width: 1280px;\n    margin: auto; }\n  @media screen and (min-width: 320px) and (max-width: 768px) {\n    body flex-box.main {\n      flex-direction: column !important; } }\n", "",{"version":3,"sources":["webpack://./index.scss"],"names":[],"mappings":"AACA;EACI,aAAa;EACb,gDAAgD;EAChD,SAAS;EACT,sBAAsB;EACtB,mBAAmB;EACnB,gEAAgE;EAChE,wDAAwD,EAAA;EAP5D;IASQ,iBAAiB;IACjB,YAAY,EAAA;EAEhB;IAZJ;MAcY,iCAAiC,EAAA,EACpC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Montserrat+Alternates:ital,wght@0,200;0,400;0,600;1,100&display=swap');\r\nbody {\r\n    height: 100vh;\r\n    font-family: 'Montserrat Alternates', sans-serif;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    background: #556270;\r\n    background: -webkit-linear-gradient(to bottom, #ff6b6b, #282c34);\r\n    background: linear-gradient(to bottom, #ff6b6b, #282c34);\r\n    & > flex-box {\r\n        max-width: 1280px;\r\n        margin: auto;\r\n    }\r\n    @media screen and (min-width: 320px) and (max-width: 768px) {\r\n        flex-box.main {\r\n            flex-direction: column !important;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./components/action-button/index.ts":
/*!*******************************************!*\
  !*** ./components/action-button/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionButton = void 0;
const src_1 = __webpack_require__(/*! ../../../src */ "../src/index.ts");
let ActionButton = class ActionButton extends HTMLElement {
    constructor() {
        super();
    }
    onButtonClick() {
        this.onInstall.emit();
    }
};
__decorate([
    (0, src_1.Listen)('click')
], ActionButton.prototype, "onButtonClick", null);
__decorate([
    (0, src_1.Dispatch)('onInstall', document.getElementById('info-box'))
], ActionButton.prototype, "onInstall", void 0);
ActionButton = __decorate([
    (0, src_1.CustomizeMe)({
        selector: 'action-button',
        template: '<button>npm install</button>',
        style: `
    :host {
        width: 250px;
        margin: 0 auto;
        margin-top: 25px;
    }
    button,
    button:after {
        font-family: 'Montserrat Alternates', sans-serif;
        cursor: pointer;
        width: 250px;
        height: 45px;
        line-height: 45px;
        font-size: 20px;
        background: linear-gradient(45deg, transparent 5%, #5d6270 5%);
        border: 0;
        color: #e2696c;
        letter-spacing: 3px;
        box-shadow: 6px 0px 0px #fd6b6b;
        text-shadow: 0px 5px 4px #282c34;
        outline: transparent;
        position: relative;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        }
        button:after {
        --slice-0: inset(50% 50% 50% 50%);
        --slice-1: inset(80% -6px 0 0);
        --slice-2: inset(50% -6px 30% 0);
        --slice-3: inset(10% -6px 85% 0);
        --slice-4: inset(40% -6px 43% 0);
        --slice-5: inset(80% -6px 5% 0);
        
        content: 'CUSTOMIZE ME';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: #fff;
        background: linear-gradient(45deg, transparent 3%, #fd6b6b 3%, #fd6b6b 5%, #5d6270 5%);
        text-shadow: -3px -3px 0px #5d6270, 3px 3px 0px #fd6b6b;
        clip-path: var(--slice-0);
        }

        button:hover:after {
        animation: 2s glitch infinite;
        animation-timing-function: steps(2, end);
        }

        @keyframes glitch {
        0% {
            clip-path: var(--slice-1);
            transform: translate(-20px, -10px);
        }
        10% {
            clip-path: var(--slice-3);
            transform: translate(10px, 10px);
        }
        20% {
            clip-path: var(--slice-1);
            transform: translate(-10px, 10px);
        }
        30% {
            clip-path: var(--slice-3);
            transform: translate(0px, 5px);
        }
        40% {
            clip-path: var(--slice-2);
            transform: translate(-5px, 0px);
        }
        50% {
            clip-path: var(--slice-3);
            transform: translate(5px, 0px);
        }
        60% {
            clip-path: var(--slice-4);
            transform: translate(5px, 10px);
        }
        70% {
            clip-path: var(--slice-2);
            transform: translate(-10px, 10px);
        }
        80% {
            clip-path: var(--slice-5);
            transform: translate(20px, -10px);
        }
        90% {
            clip-path: var(--slice-1);
            transform: translate(-10px, 0px);
        }
        100% {
            clip-path: var(--slice-1);
            transform: translate(0);
        }
        }
    }
	`,
        useShadow: true
    })
], ActionButton);
exports.ActionButton = ActionButton;


/***/ }),

/***/ "./components/code-mirror/index.ts":
/*!*****************************************!*\
  !*** ./components/code-mirror/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodeMirror = void 0;
const src_1 = __webpack_require__(/*! ../../../src */ "../src/index.ts");
let CodeMirror = class CodeMirror extends HTMLElement {
    constructor() {
        super();
    }
};
CodeMirror = __decorate([
    (0, src_1.CustomizeMe)({
        selector: 'code-mirror',
        template: `<pre>
<span class='reserved'>import</span> { <span class='keyword'>CustomizeMe</span> } <span class='reserved'>from</span> <span class='string'>'customize-me'</span>;

@<span class='function'>CustomizeMe</span>({
  <span class='keyword'>selector</span>: <span class='string'>'action-button'</span>,
  <span class='keyword'>template</span>: <span class='string'>''</span>, <span class='comment'>// HTML here</span>
  <span class='keyword'>style</span>: <span class='string'>''</span>, <span class='comment'>// styles here</span>
  <span class='keyword'>useShadow</span>: <span class='value'>true</span>
})
<span class='reserved'>export</span> <span class='reserved'>class</span> <span class='classname'>FlexBox</span> <span class='reserved'>extends</span> <span class='classname'>HTMLElement</span> {
  <span class='reserved'>constructor</span>() {
    <span class='classname'>super</span>();
  }

  @<span class='function'>Listen</span>(<span class='string'>'click'</span>)
  <span class='classname'>onSubmitClick</span>(event: Event) {}
}</pre>`,
        style: `
		:host {
            padding: 30px;
			--reserved: rgb(198, 120, 221);
			--keyword: rgb(224, 108, 117);
			--string: rgb(152, 195, 121);
			--function: rgb(97 175 239);
			--classname: rgb(229, 192, 123);
			--comment: rgb(127 132 142);
			--value: rgb(209 154 102);
			background-color: rgb(40, 44, 52);
            border-radius: 8px;
            overflow: auto;
            flex: 45;
		}
		:host pre {
			font-size: 17px;
			color: rgb(171, 178, 191);
		}
		:host .token {}
		:host .reserved {
			color: var(--reserved);
		}
		:host .keyword {
			color: var(--keyword);
		}
		:host .string {
			color: var(--string);
		}
		:host .comment {
			color: var(--comment);
		}
		:host .classname {
			color: var(--classname);
		}
		:host .function {
			color: var(--function);
		}
		:host .value {
			color: var(--value);
		}
	`,
        useShadow: true
    })
], CodeMirror);
exports.CodeMirror = CodeMirror;


/***/ }),

/***/ "./components/flex-box/index.ts":
/*!**************************************!*\
  !*** ./components/flex-box/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FlexBox_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FlexBox = void 0;
const src_1 = __webpack_require__(/*! ../../../src */ "../src/index.ts");
let FlexBox = FlexBox_1 = class FlexBox extends HTMLElement {
    constructor() {
        super();
    }
    attributeChangedCallback(attrName) {
        switch (attrName) {
            case FlexBox_1.column:
                this.style.flexDirection = 'column';
                break;
            case FlexBox_1.row:
                this.style.flexDirection = 'row';
                break;
            default:
                break;
        }
    }
    static get observedAttributes() {
        return [FlexBox_1.column, FlexBox_1.row];
    }
};
FlexBox.row = 'row';
FlexBox.column = 'column';
FlexBox = FlexBox_1 = __decorate([
    (0, src_1.CustomizeMe)({
        selector: 'flex-box',
        template: '<slot></slot>',
        style: `
        :host {
            display: flex;
            align-items: stretch;
            justify-content: center;
        }
    `,
        useShadow: true
    })
], FlexBox);
exports.FlexBox = FlexBox;


/***/ }),

/***/ "./components/header-box/index.ts":
/*!****************************************!*\
  !*** ./components/header-box/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeaderBox = void 0;
const src_1 = __webpack_require__(/*! ../../../src */ "../src/index.ts");
let HeaderBox = class HeaderBox extends HTMLElement {
    constructor() {
        super();
        this.message = 'Hola';
    }
    onMessageChange(value) {
        console.log('Message changed ->', value);
    }
};
__decorate([
    (0, src_1.Watch)('message')
], HeaderBox.prototype, "onMessageChange", null);
__decorate([
    (0, src_1.Prop)()
], HeaderBox.prototype, "message", void 0);
HeaderBox = __decorate([
    (0, src_1.CustomizeMe)({
        selector: 'header-box',
        template: `
        <h1>Customize me</h1>
   `,
        style: `
        h1 {
            margin: 40px;
            color: rgb(40, 44, 52);
            font-weight: 500;
            letter-spacing: .2rem;
            font-size: 45px;
            text-shadow: 0px -2px 2px #282c3496;
            text-align: center;
        }
   `,
        useShadow: true
    })
], HeaderBox);
exports.HeaderBox = HeaderBox;


/***/ }),

/***/ "./components/info-box/index.ts":
/*!**************************************!*\
  !*** ./components/info-box/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InfoBox = void 0;
const src_1 = __webpack_require__(/*! ../../../src */ "../src/index.ts");
let InfoBox = class InfoBox extends HTMLElement {
    constructor() {
        super();
    }
    handleInstallEvent() {
        window.open('https://github.com/ArmmGh/customize-me', '_blank');
    }
};
__decorate([
    (0, src_1.Listen)('onInstall')
], InfoBox.prototype, "handleInstallEvent", null);
InfoBox = __decorate([
    (0, src_1.CustomizeMe)({
        selector: 'info-box',
        template: `
        <p>Create native custom elements using Typescript</p>
        <p>without any third party libraries</p>
        <slot></slot>
    `,
        style: `
        :host {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 25px;
            background: #ccc;
            flex: 55;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.15);
            text-align: center;
            margin-left: 15px;
        }
        p {
            color: rgb(40, 44, 52);
            font-weight: 600;
            font-size: 22px;
            margin: 0;
            margin-bottom: 15px;
        }
        @media screen and (max-width: 768px) {
            :host {
                margin: 0;
                margin-top: 10px;
            }
            p {
                font-size: 18px;
            }
        }
   `,
        useShadow: true
    })
], InfoBox);
exports.InfoBox = InfoBox;


/***/ }),

/***/ "../src/customize-me.ts":
/*!******************************!*\
  !*** ../src/customize-me.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const validators_1 = __webpack_require__(/*! ./global/validators */ "../src/global/validators.ts");
const CustomizeMe = ({ selector, template, useShadow, style }) => {
    return (target) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const customElement = class extends target {
            constructor() {
                super();
            }
            connectedCallback() {
                this.validateMetadata(selector, template);
                this.attachListeners();
                this.render();
                super.connectedCallback && super.connectedCallback();
            }
            createTemplateWithStyles(template, style) {
                const templateElement = document.createElement('template');
                const styles = `<style>${style || ''}</style>`;
                templateElement.innerHTML = `${styles}${template}`;
                return templateElement;
            }
            validateMetadata(selector, template) {
                (0, validators_1.selectorValidator)(selector);
                (0, validators_1.templateValidator)(template);
            }
            attachListeners() {
                const target = this;
                if (target.constructor.getListeners) {
                    const listeners = target.constructor.getListeners() || [];
                    const root = target.shadowRoot || target;
                    for (const listener of listeners) {
                        const eventTarget = listener.selector ? root.querySelector(listener.selector) : root;
                        eventTarget === null || eventTarget === void 0 ? void 0 : eventTarget.addEventListener(listener.eventName, (event) => {
                            listener.handler.call(target, event);
                        });
                    }
                }
            }
            render() {
                const templateElement = this.createTemplateWithStyles(template, style);
                const copyOfTemplate = document.importNode(templateElement.content, true);
                const context = useShadow ? this.attachShadow({ mode: 'open' }) : this;
                context.appendChild(copyOfTemplate);
            }
        };
        if (!customElements.get(selector)) {
            customElements.define(selector, customElement);
        }
    };
};
exports["default"] = CustomizeMe;


/***/ }),

/***/ "../src/dispatch.ts":
/*!**************************!*\
  !*** ../src/dispatch.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Dispatch = (event, eventTarget) => {
    return (target, propertyName) => {
        if (!event) {
            event = String(propertyName);
        }
        Object.defineProperty(target, propertyName, {
            get() {
                const mainTarget = eventTarget || this;
                return {
                    emit(options) {
                        var _a;
                        (_a = mainTarget.dispatchEvent) === null || _a === void 0 ? void 0 : _a.call(mainTarget, new CustomEvent(event, Object.assign({ bubbles: true }, options)));
                    }
                };
            }
        });
    };
};
exports["default"] = Dispatch;


/***/ }),

/***/ "../src/global/validators.ts":
/*!***********************************!*\
  !*** ../src/global/validators.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.propertyValidator = exports.templateValidator = exports.selectorValidator = void 0;
const selectorValidator = (selector) => {
    const splitted = selector.split('-');
    const isValidPosition = splitted.every((word) => word.length);
    if (splitted.length > 1 && isValidPosition) {
        return true;
    }
    throw new Error(`Invalid selector <${selector}>, should be kebab-case like 'my-element'`);
};
exports.selectorValidator = selectorValidator;
const templateValidator = (template) => {
    if (template) {
        return true;
    }
    throw new Error('Template does not exists, please define in CustomizeMe function');
};
exports.templateValidator = templateValidator;
const propertyValidator = (property) => {
    if (!property) {
        return true;
    }
    throw new Error(`Property with name ${property.name} already exists!`);
};
exports.propertyValidator = propertyValidator;


/***/ }),

/***/ "../src/index.ts":
/*!***********************!*\
  !*** ../src/index.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Watch = exports.Prop = exports.Dispatch = exports.Listen = exports.CustomizeMe = void 0;
const customize_me_1 = __importDefault(__webpack_require__(/*! ./customize-me */ "../src/customize-me.ts"));
exports.CustomizeMe = customize_me_1.default;
const listen_1 = __importDefault(__webpack_require__(/*! ./listen */ "../src/listen.ts"));
exports.Listen = listen_1.default;
const dispatch_1 = __importDefault(__webpack_require__(/*! ./dispatch */ "../src/dispatch.ts"));
exports.Dispatch = dispatch_1.default;
const prop_1 = __importDefault(__webpack_require__(/*! ./prop */ "../src/prop.ts"));
exports.Prop = prop_1.default;
const watch_1 = __importDefault(__webpack_require__(/*! ./watch */ "../src/watch.ts"));
exports.Watch = watch_1.default;


/***/ }),

/***/ "../src/listen.ts":
/*!************************!*\
  !*** ../src/listen.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Listen = (eventName, selector) => {
    return (target, _propertyName, descriptor) => {
        if (!target.constructor.getListeners) {
            Object.defineProperties(target.constructor, {
                _listeners: {
                    writable: true,
                    value: []
                },
                getListeners: {
                    value: function () {
                        return this._listeners;
                    }
                },
                setListener: {
                    value: function (listener) {
                        this._listeners.push(listener);
                    }
                }
            });
        }
        target.constructor.setListener({ eventName, handler: descriptor.value, selector });
    };
};
exports["default"] = Listen;


/***/ }),

/***/ "../src/prop.ts":
/*!**********************!*\
  !*** ../src/prop.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const validators_1 = __webpack_require__(/*! ./global/validators */ "../src/global/validators.ts");
const Prop = () => {
    return (target, propertyKey) => {
        if (!target.constructor.$props) {
            target.constructor.$props = [];
        }
        const prop = target.constructor.$props.find((prop) => prop.name === propertyKey);
        (0, validators_1.propertyValidator)(prop);
        target.constructor.$props.push({ name: propertyKey, value: target.constructor[propertyKey] });
        Object.defineProperty(target, propertyKey, {
            set(value) {
                const watcher = target.constructor.watchers.find((watcher) => watcher.name === propertyKey);
                target[`{{${propertyKey}}}`] = value;
                watcher && watcher.effect.call(target, value);
            },
            get() {
                return target[`{{${propertyKey}}}`];
            }
        });
    };
};
exports["default"] = Prop;


/***/ }),

/***/ "../src/watch.ts":
/*!***********************!*\
  !*** ../src/watch.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Watch = (Prop) => {
    return (target, _property, descriptor) => {
        var _a;
        if (!((_a = target.constructor.watchers) === null || _a === void 0 ? void 0 : _a.length)) {
            target.constructor.watchers = [];
        }
        target.constructor.watchers.push({ name: Prop, effect: descriptor.value });
    };
};
exports["default"] = Watch;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./index.scss */ "./index.scss");
__webpack_require__(/*! ./components/flex-box */ "./components/flex-box/index.ts");
__webpack_require__(/*! ./components/code-mirror */ "./components/code-mirror/index.ts");
__webpack_require__(/*! ./components/action-button */ "./components/action-button/index.ts");
__webpack_require__(/*! ./components/header-box */ "./components/header-box/index.ts");
__webpack_require__(/*! ./components/info-box */ "./components/info-box/index.ts");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FBQyw2REFBdUI7QUFDL0IsbUJBQU8sQ0FBQyxtRUFBMEI7QUFDbEMsbUJBQU8sQ0FBQyx1RUFBNEI7QUFDcEMsbUJBQU8sQ0FBQyxpRUFBeUI7QUFDakMsbUJBQU8sQ0FBQyw2REFBdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vLWN1c3RvbWl6ZS1tZS8uL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vZGVtby1jdXN0b21pemUtbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RlbW8tY3VzdG9taXplLW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGVtby1jdXN0b21pemUtbWUvLi9pbmRleC5zY3NzPzMwYjMiLCJ3ZWJwYWNrOi8vZGVtby1jdXN0b21pemUtbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZGVtby1jdXN0b21pemUtbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2RlbW8tY3VzdG9taXplLW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2RlbW8tY3VzdG9taXplLW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2RlbW8tY3VzdG9taXplLW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGVtby1jdXN0b21pemUtbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kZW1vLWN1c3RvbWl6ZS1tZS8uL2NvbXBvbmVudHMvYWN0aW9uLWJ1dHRvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9kZW1vLWN1c3RvbWl6ZS1tZS8uL2NvbXBvbmVudHMvY29kZS1taXJyb3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZGVtby1jdXN0b21pemUtbWUvLi9jb21wb25lbnRzL2ZsZXgtYm94L2luZGV4LnRzIiwid2VicGFjazovL2RlbW8tY3VzdG9taXplLW1lLy4vY29tcG9uZW50cy9oZWFkZXItYm94L2luZGV4LnRzIiwid2VicGFjazovL2RlbW8tY3VzdG9taXplLW1lLy4vY29tcG9uZW50cy9pbmZvLWJveC9pbmRleC50cyIsIndlYnBhY2s6Ly9kZW1vLWN1c3RvbWl6ZS1tZS8uLi9zcmMvY3VzdG9taXplLW1lLnRzIiwid2VicGFjazovL2RlbW8tY3VzdG9taXplLW1lLy4uL3NyYy9kaXNwYXRjaC50cyIsIndlYnBhY2s6Ly9kZW1vLWN1c3RvbWl6ZS1tZS8uLi9zcmMvZ2xvYmFsL3ZhbGlkYXRvcnMudHMiLCJ3ZWJwYWNrOi8vZGVtby1jdXN0b21pemUtbWUvLi4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2RlbW8tY3VzdG9taXplLW1lLy4uL3NyYy9saXN0ZW4udHMiLCJ3ZWJwYWNrOi8vZGVtby1jdXN0b21pemUtbWUvLi4vc3JjL3Byb3AudHMiLCJ3ZWJwYWNrOi8vZGVtby1jdXN0b21pemUtbWUvLi4vc3JjL3dhdGNoLnRzIiwid2VicGFjazovL2RlbW8tY3VzdG9taXplLW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RlbW8tY3VzdG9taXplLW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RlbW8tY3VzdG9taXplLW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZW1vLWN1c3RvbWl6ZS1tZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RlbW8tY3VzdG9taXplLW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVtby1jdXN0b21pemUtbWUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2RlbW8tY3VzdG9taXplLW1lLy4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZmYW1pbHk9TW9udHNlcnJhdCtBbHRlcm5hdGVzOml0YWwsd2dodEAwLDIwMDswLDQwMDswLDYwMDsxLDEwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQgQWx0ZXJuYXRlcycsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogIzU1NjI3MDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmNmI2YiwgIzI4MmMzNCk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmY2YjZiLCAjMjgyYzM0KTsgfVxcbiAgYm9keSA+IGZsZXgtYm94IHtcXG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7XFxuICAgIG1hcmdpbjogYXV0bzsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICBib2R5IGZsZXgtYm94Lm1haW4ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGFBQWE7RUFDYixnREFBZ0Q7RUFDaEQsU0FBUztFQUNULHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0VBQWdFO0VBQ2hFLHdEQUF3RCxFQUFBO0VBUDVEO0lBU1EsaUJBQWlCO0lBQ2pCLFlBQVksRUFBQTtFQUVoQjtJQVpKO01BY1ksaUNBQWlDLEVBQUEsRUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZmYW1pbHk9TW9udHNlcnJhdCtBbHRlcm5hdGVzOml0YWwsd2dodEAwLDIwMDswLDQwMDswLDYwMDsxLDEwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0IEFsdGVybmF0ZXMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM1NTYyNzA7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmNmI2YiwgIzI4MmMzNCk7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZjZiNmIsICMyODJjMzQpO1xcclxcbiAgICAmID4gZmxleC1ib3gge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMjgwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAgICAgZmxleC1ib3gubWFpbiB7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BY3Rpb25CdXR0b24gPSB2b2lkIDA7XHJcbmNvbnN0IHNyY18xID0gcmVxdWlyZShcIi4uLy4uLy4uL3NyY1wiKTtcclxubGV0IEFjdGlvbkJ1dHRvbiA9IGNsYXNzIEFjdGlvbkJ1dHRvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBvbkJ1dHRvbkNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMub25JbnN0YWxsLmVtaXQoKTtcclxuICAgIH1cclxufTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICAoMCwgc3JjXzEuTGlzdGVuKSgnY2xpY2snKVxyXG5dLCBBY3Rpb25CdXR0b24ucHJvdG90eXBlLCBcIm9uQnV0dG9uQ2xpY2tcIiwgbnVsbCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgKDAsIHNyY18xLkRpc3BhdGNoKSgnb25JbnN0YWxsJywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tYm94JykpXHJcbl0sIEFjdGlvbkJ1dHRvbi5wcm90b3R5cGUsIFwib25JbnN0YWxsXCIsIHZvaWQgMCk7XHJcbkFjdGlvbkJ1dHRvbiA9IF9fZGVjb3JhdGUoW1xyXG4gICAgKDAsIHNyY18xLkN1c3RvbWl6ZU1lKSh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhY3Rpb24tYnV0dG9uJyxcclxuICAgICAgICB0ZW1wbGF0ZTogJzxidXR0b24+bnBtIGluc3RhbGw8L2J1dHRvbj4nLFxyXG4gICAgICAgIHN0eWxlOiBgXG4gICAgOmhvc3Qge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIH1cbiAgICBidXR0b24sXG4gICAgYnV0dG9uOmFmdGVyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0IEFsdGVybmF0ZXMnLCBzYW5zLXNlcmlmO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUlLCAjNWQ2MjcwIDUlKTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBjb2xvcjogI2UyNjk2YztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgYm94LXNoYWRvdzogNnB4IDBweCAwcHggI2ZkNmI2YjtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCA1cHggNHB4ICMyODJjMzQ7XG4gICAgICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246YWZ0ZXIge1xuICAgICAgICAtLXNsaWNlLTA6IGluc2V0KDUwJSA1MCUgNTAlIDUwJSk7XG4gICAgICAgIC0tc2xpY2UtMTogaW5zZXQoODAlIC02cHggMCAwKTtcbiAgICAgICAgLS1zbGljZS0yOiBpbnNldCg1MCUgLTZweCAzMCUgMCk7XG4gICAgICAgIC0tc2xpY2UtMzogaW5zZXQoMTAlIC02cHggODUlIDApO1xuICAgICAgICAtLXNsaWNlLTQ6IGluc2V0KDQwJSAtNnB4IDQzJSAwKTtcbiAgICAgICAgLS1zbGljZS01OiBpbnNldCg4MCUgLTZweCA1JSAwKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnRlbnQ6ICdDVVNUT01JWkUgTUUnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDMlLCAjZmQ2YjZiIDMlLCAjZmQ2YjZiIDUlLCAjNWQ2MjcwIDUlKTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IC0zcHggLTNweCAwcHggIzVkNjI3MCwgM3B4IDNweCAwcHggI2ZkNmI2YjtcbiAgICAgICAgY2xpcC1wYXRoOiB2YXIoLS1zbGljZS0wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjpob3ZlcjphZnRlciB7XG4gICAgICAgIGFuaW1hdGlvbjogMnMgZ2xpdGNoIGluZmluaXRlO1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBzdGVwcygyLCBlbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgQGtleWZyYW1lcyBnbGl0Y2gge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHZhcigtLXNsaWNlLTEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwcHgsIC0xMHB4KTtcbiAgICAgICAgfVxuICAgICAgICAxMCUge1xuICAgICAgICAgICAgY2xpcC1wYXRoOiB2YXIoLS1zbGljZS0zKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDEwcHgpO1xuICAgICAgICB9XG4gICAgICAgIDIwJSB7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHZhcigtLXNsaWNlLTEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIDEwcHgpO1xuICAgICAgICB9XG4gICAgICAgIDMwJSB7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHZhcigtLXNsaWNlLTMpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCA1cHgpO1xuICAgICAgICB9XG4gICAgICAgIDQwJSB7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHZhcigtLXNsaWNlLTIpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgMHB4KTtcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgICAgY2xpcC1wYXRoOiB2YXIoLS1zbGljZS0zKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgMHB4KTtcbiAgICAgICAgfVxuICAgICAgICA2MCUge1xuICAgICAgICAgICAgY2xpcC1wYXRoOiB2YXIoLS1zbGljZS00KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgMTBweCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogdmFyKC0tc2xpY2UtMik7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCwgMTBweCk7XG4gICAgICAgIH1cbiAgICAgICAgODAlIHtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogdmFyKC0tc2xpY2UtNSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAtMTBweCk7XG4gICAgICAgIH1cbiAgICAgICAgOTAlIHtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogdmFyKC0tc2xpY2UtMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCwgMHB4KTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogdmFyKC0tc2xpY2UtMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXHRgLFxyXG4gICAgICAgIHVzZVNoYWRvdzogdHJ1ZVxyXG4gICAgfSlcclxuXSwgQWN0aW9uQnV0dG9uKTtcclxuZXhwb3J0cy5BY3Rpb25CdXR0b24gPSBBY3Rpb25CdXR0b247XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ29kZU1pcnJvciA9IHZvaWQgMDtcclxuY29uc3Qgc3JjXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc3JjXCIpO1xyXG5sZXQgQ29kZU1pcnJvciA9IGNsYXNzIENvZGVNaXJyb3IgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG59O1xyXG5Db2RlTWlycm9yID0gX19kZWNvcmF0ZShbXHJcbiAgICAoMCwgc3JjXzEuQ3VzdG9taXplTWUpKHtcclxuICAgICAgICBzZWxlY3RvcjogJ2NvZGUtbWlycm9yJyxcclxuICAgICAgICB0ZW1wbGF0ZTogYDxwcmU+XG48c3BhbiBjbGFzcz0ncmVzZXJ2ZWQnPmltcG9ydDwvc3Bhbj4geyA8c3BhbiBjbGFzcz0na2V5d29yZCc+Q3VzdG9taXplTWU8L3NwYW4+IH0gPHNwYW4gY2xhc3M9J3Jlc2VydmVkJz5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz0nc3RyaW5nJz4nY3VzdG9taXplLW1lJzwvc3Bhbj47XG5cbkA8c3BhbiBjbGFzcz0nZnVuY3Rpb24nPkN1c3RvbWl6ZU1lPC9zcGFuPih7XG4gIDxzcGFuIGNsYXNzPSdrZXl3b3JkJz5zZWxlY3Rvcjwvc3Bhbj46IDxzcGFuIGNsYXNzPSdzdHJpbmcnPidhY3Rpb24tYnV0dG9uJzwvc3Bhbj4sXG4gIDxzcGFuIGNsYXNzPSdrZXl3b3JkJz50ZW1wbGF0ZTwvc3Bhbj46IDxzcGFuIGNsYXNzPSdzdHJpbmcnPicnPC9zcGFuPiwgPHNwYW4gY2xhc3M9J2NvbW1lbnQnPi8vIEhUTUwgaGVyZTwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9J2tleXdvcmQnPnN0eWxlPC9zcGFuPjogPHNwYW4gY2xhc3M9J3N0cmluZyc+Jyc8L3NwYW4+LCA8c3BhbiBjbGFzcz0nY29tbWVudCc+Ly8gc3R5bGVzIGhlcmU8L3NwYW4+XG4gIDxzcGFuIGNsYXNzPSdrZXl3b3JkJz51c2VTaGFkb3c8L3NwYW4+OiA8c3BhbiBjbGFzcz0ndmFsdWUnPnRydWU8L3NwYW4+XG59KVxuPHNwYW4gY2xhc3M9J3Jlc2VydmVkJz5leHBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPSdyZXNlcnZlZCc+Y2xhc3M8L3NwYW4+IDxzcGFuIGNsYXNzPSdjbGFzc25hbWUnPkZsZXhCb3g8L3NwYW4+IDxzcGFuIGNsYXNzPSdyZXNlcnZlZCc+ZXh0ZW5kczwvc3Bhbj4gPHNwYW4gY2xhc3M9J2NsYXNzbmFtZSc+SFRNTEVsZW1lbnQ8L3NwYW4+IHtcbiAgPHNwYW4gY2xhc3M9J3Jlc2VydmVkJz5jb25zdHJ1Y3Rvcjwvc3Bhbj4oKSB7XG4gICAgPHNwYW4gY2xhc3M9J2NsYXNzbmFtZSc+c3VwZXI8L3NwYW4+KCk7XG4gIH1cblxuICBAPHNwYW4gY2xhc3M9J2Z1bmN0aW9uJz5MaXN0ZW48L3NwYW4+KDxzcGFuIGNsYXNzPSdzdHJpbmcnPidjbGljayc8L3NwYW4+KVxuICA8c3BhbiBjbGFzcz0nY2xhc3NuYW1lJz5vblN1Ym1pdENsaWNrPC9zcGFuPihldmVudDogRXZlbnQpIHt9XG59PC9wcmU+YCxcclxuICAgICAgICBzdHlsZTogYFxuXHRcdDpob3N0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG5cdFx0XHQtLXJlc2VydmVkOiByZ2IoMTk4LCAxMjAsIDIyMSk7XG5cdFx0XHQtLWtleXdvcmQ6IHJnYigyMjQsIDEwOCwgMTE3KTtcblx0XHRcdC0tc3RyaW5nOiByZ2IoMTUyLCAxOTUsIDEyMSk7XG5cdFx0XHQtLWZ1bmN0aW9uOiByZ2IoOTcgMTc1IDIzOSk7XG5cdFx0XHQtLWNsYXNzbmFtZTogcmdiKDIyOSwgMTkyLCAxMjMpO1xuXHRcdFx0LS1jb21tZW50OiByZ2IoMTI3IDEzMiAxNDIpO1xuXHRcdFx0LS12YWx1ZTogcmdiKDIwOSAxNTQgMTAyKTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgNDQsIDUyKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgZmxleDogNDU7XG5cdFx0fVxuXHRcdDpob3N0IHByZSB7XG5cdFx0XHRmb250LXNpemU6IDE3cHg7XG5cdFx0XHRjb2xvcjogcmdiKDE3MSwgMTc4LCAxOTEpO1xuXHRcdH1cblx0XHQ6aG9zdCAudG9rZW4ge31cblx0XHQ6aG9zdCAucmVzZXJ2ZWQge1xuXHRcdFx0Y29sb3I6IHZhcigtLXJlc2VydmVkKTtcblx0XHR9XG5cdFx0Omhvc3QgLmtleXdvcmQge1xuXHRcdFx0Y29sb3I6IHZhcigtLWtleXdvcmQpO1xuXHRcdH1cblx0XHQ6aG9zdCAuc3RyaW5nIHtcblx0XHRcdGNvbG9yOiB2YXIoLS1zdHJpbmcpO1xuXHRcdH1cblx0XHQ6aG9zdCAuY29tbWVudCB7XG5cdFx0XHRjb2xvcjogdmFyKC0tY29tbWVudCk7XG5cdFx0fVxuXHRcdDpob3N0IC5jbGFzc25hbWUge1xuXHRcdFx0Y29sb3I6IHZhcigtLWNsYXNzbmFtZSk7XG5cdFx0fVxuXHRcdDpob3N0IC5mdW5jdGlvbiB7XG5cdFx0XHRjb2xvcjogdmFyKC0tZnVuY3Rpb24pO1xuXHRcdH1cblx0XHQ6aG9zdCAudmFsdWUge1xuXHRcdFx0Y29sb3I6IHZhcigtLXZhbHVlKTtcblx0XHR9XG5cdGAsXHJcbiAgICAgICAgdXNlU2hhZG93OiB0cnVlXHJcbiAgICB9KVxyXG5dLCBDb2RlTWlycm9yKTtcclxuZXhwb3J0cy5Db2RlTWlycm9yID0gQ29kZU1pcnJvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBGbGV4Qm94XzE7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5GbGV4Qm94ID0gdm9pZCAwO1xyXG5jb25zdCBzcmNfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zcmNcIik7XHJcbmxldCBGbGV4Qm94ID0gRmxleEJveF8xID0gY2xhc3MgRmxleEJveCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0ck5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKGF0dHJOYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRmxleEJveF8xLmNvbHVtbjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRmxleEJveF8xLnJvdzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdyb3cnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuICAgICAgICByZXR1cm4gW0ZsZXhCb3hfMS5jb2x1bW4sIEZsZXhCb3hfMS5yb3ddO1xyXG4gICAgfVxyXG59O1xyXG5GbGV4Qm94LnJvdyA9ICdyb3cnO1xyXG5GbGV4Qm94LmNvbHVtbiA9ICdjb2x1bW4nO1xyXG5GbGV4Qm94ID0gRmxleEJveF8xID0gX19kZWNvcmF0ZShbXHJcbiAgICAoMCwgc3JjXzEuQ3VzdG9taXplTWUpKHtcclxuICAgICAgICBzZWxlY3RvcjogJ2ZsZXgtYm94JyxcclxuICAgICAgICB0ZW1wbGF0ZTogJzxzbG90Pjwvc2xvdD4nLFxyXG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgYCxcclxuICAgICAgICB1c2VTaGFkb3c6IHRydWVcclxuICAgIH0pXHJcbl0sIEZsZXhCb3gpO1xyXG5leHBvcnRzLkZsZXhCb3ggPSBGbGV4Qm94O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkhlYWRlckJveCA9IHZvaWQgMDtcclxuY29uc3Qgc3JjXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc3JjXCIpO1xyXG5sZXQgSGVhZGVyQm94ID0gY2xhc3MgSGVhZGVyQm94IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnSG9sYSc7XHJcbiAgICB9XHJcbiAgICBvbk1lc3NhZ2VDaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTWVzc2FnZSBjaGFuZ2VkIC0+JywgdmFsdWUpO1xyXG4gICAgfVxyXG59O1xyXG5fX2RlY29yYXRlKFtcclxuICAgICgwLCBzcmNfMS5XYXRjaCkoJ21lc3NhZ2UnKVxyXG5dLCBIZWFkZXJCb3gucHJvdG90eXBlLCBcIm9uTWVzc2FnZUNoYW5nZVwiLCBudWxsKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICAoMCwgc3JjXzEuUHJvcCkoKVxyXG5dLCBIZWFkZXJCb3gucHJvdG90eXBlLCBcIm1lc3NhZ2VcIiwgdm9pZCAwKTtcclxuSGVhZGVyQm94ID0gX19kZWNvcmF0ZShbXHJcbiAgICAoMCwgc3JjXzEuQ3VzdG9taXplTWUpKHtcclxuICAgICAgICBzZWxlY3RvcjogJ2hlYWRlci1ib3gnLFxyXG4gICAgICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMT5DdXN0b21pemUgbWU8L2gxPlxuICAgYCxcclxuICAgICAgICBzdHlsZTogYFxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBtYXJnaW46IDQwcHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDQwLCA0NCwgNTIpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggLTJweCAycHggIzI4MmMzNDk2O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICBgLFxyXG4gICAgICAgIHVzZVNoYWRvdzogdHJ1ZVxyXG4gICAgfSlcclxuXSwgSGVhZGVyQm94KTtcclxuZXhwb3J0cy5IZWFkZXJCb3ggPSBIZWFkZXJCb3g7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuSW5mb0JveCA9IHZvaWQgMDtcclxuY29uc3Qgc3JjXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc3JjXCIpO1xyXG5sZXQgSW5mb0JveCA9IGNsYXNzIEluZm9Cb3ggZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlSW5zdGFsbEV2ZW50KCkge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovL2dpdGh1Yi5jb20vQXJtbUdoL2N1c3RvbWl6ZS1tZScsICdfYmxhbmsnKTtcclxuICAgIH1cclxufTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICAoMCwgc3JjXzEuTGlzdGVuKSgnb25JbnN0YWxsJylcclxuXSwgSW5mb0JveC5wcm90b3R5cGUsIFwiaGFuZGxlSW5zdGFsbEV2ZW50XCIsIG51bGwpO1xyXG5JbmZvQm94ID0gX19kZWNvcmF0ZShbXHJcbiAgICAoMCwgc3JjXzEuQ3VzdG9taXplTWUpKHtcclxuICAgICAgICBzZWxlY3RvcjogJ2luZm8tYm94JyxcclxuICAgICAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8cD5DcmVhdGUgbmF0aXZlIGN1c3RvbSBlbGVtZW50cyB1c2luZyBUeXBlc2NyaXB0PC9wPlxuICAgICAgICA8cD53aXRob3V0IGFueSB0aGlyZCBwYXJ0eSBsaWJyYXJpZXM8L3A+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICBgLFxyXG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2NjYztcbiAgICAgICAgICAgIGZsZXg6IDU1O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNDAsIDQ0LCA1Mik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICBgLFxyXG4gICAgICAgIHVzZVNoYWRvdzogdHJ1ZVxyXG4gICAgfSlcclxuXSwgSW5mb0JveCk7XHJcbmV4cG9ydHMuSW5mb0JveCA9IEluZm9Cb3g7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHZhbGlkYXRvcnNfMSA9IHJlcXVpcmUoXCIuL2dsb2JhbC92YWxpZGF0b3JzXCIpO1xyXG5jb25zdCBDdXN0b21pemVNZSA9ICh7IHNlbGVjdG9yLCB0ZW1wbGF0ZSwgdXNlU2hhZG93LCBzdHlsZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKHRhcmdldCkgPT4ge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgY29uc3QgY3VzdG9tRWxlbWVudCA9IGNsYXNzIGV4dGVuZHMgdGFyZ2V0IHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZU1ldGFkYXRhKHNlbGVjdG9yLCB0ZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFjaExpc3RlbmVycygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrICYmIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3JlYXRlVGVtcGxhdGVXaXRoU3R5bGVzKHRlbXBsYXRlLCBzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IGA8c3R5bGU+JHtzdHlsZSB8fCAnJ308L3N0eWxlPmA7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUVsZW1lbnQuaW5uZXJIVE1MID0gYCR7c3R5bGVzfSR7dGVtcGxhdGV9YDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFsaWRhdGVNZXRhZGF0YShzZWxlY3RvciwgdGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgICAgICgwLCB2YWxpZGF0b3JzXzEuc2VsZWN0b3JWYWxpZGF0b3IpKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgICgwLCB2YWxpZGF0b3JzXzEudGVtcGxhdGVWYWxpZGF0b3IpKHRlbXBsYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdHRhY2hMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jb25zdHJ1Y3Rvci5nZXRMaXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0YXJnZXQuY29uc3RydWN0b3IuZ2V0TGlzdGVuZXJzKCkgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm9vdCA9IHRhcmdldC5zaGFkb3dSb290IHx8IHRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIGxpc3RlbmVycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudFRhcmdldCA9IGxpc3RlbmVyLnNlbGVjdG9yID8gcm9vdC5xdWVyeVNlbGVjdG9yKGxpc3RlbmVyLnNlbGVjdG9yKSA6IHJvb3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0ID09PSBudWxsIHx8IGV2ZW50VGFyZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKGxpc3RlbmVyLmV2ZW50TmFtZSwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVyLmNhbGwodGFyZ2V0LCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZUVsZW1lbnQgPSB0aGlzLmNyZWF0ZVRlbXBsYXRlV2l0aFN0eWxlcyh0ZW1wbGF0ZSwgc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29weU9mVGVtcGxhdGUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlRWxlbWVudC5jb250ZW50LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB1c2VTaGFkb3cgPyB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KSA6IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFwcGVuZENoaWxkKGNvcHlPZlRlbXBsYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZShzZWxlY3RvciwgY3VzdG9tRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ3VzdG9taXplTWU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IERpc3BhdGNoID0gKGV2ZW50LCBldmVudFRhcmdldCkgPT4ge1xyXG4gICAgcmV0dXJuICh0YXJnZXQsIHByb3BlcnR5TmFtZSkgPT4ge1xyXG4gICAgICAgIGlmICghZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQgPSBTdHJpbmcocHJvcGVydHlOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlOYW1lLCB7XHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1haW5UYXJnZXQgPSBldmVudFRhcmdldCB8fCB0aGlzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBlbWl0KG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoX2EgPSBtYWluVGFyZ2V0LmRpc3BhdGNoRXZlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKG1haW5UYXJnZXQsIG5ldyBDdXN0b21FdmVudChldmVudCwgT2JqZWN0LmFzc2lnbih7IGJ1YmJsZXM6IHRydWUgfSwgb3B0aW9ucykpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBEaXNwYXRjaDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5wcm9wZXJ0eVZhbGlkYXRvciA9IGV4cG9ydHMudGVtcGxhdGVWYWxpZGF0b3IgPSBleHBvcnRzLnNlbGVjdG9yVmFsaWRhdG9yID0gdm9pZCAwO1xyXG5jb25zdCBzZWxlY3RvclZhbGlkYXRvciA9IChzZWxlY3RvcikgPT4ge1xyXG4gICAgY29uc3Qgc3BsaXR0ZWQgPSBzZWxlY3Rvci5zcGxpdCgnLScpO1xyXG4gICAgY29uc3QgaXNWYWxpZFBvc2l0aW9uID0gc3BsaXR0ZWQuZXZlcnkoKHdvcmQpID0+IHdvcmQubGVuZ3RoKTtcclxuICAgIGlmIChzcGxpdHRlZC5sZW5ndGggPiAxICYmIGlzVmFsaWRQb3NpdGlvbikge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNlbGVjdG9yIDwke3NlbGVjdG9yfT4sIHNob3VsZCBiZSBrZWJhYi1jYXNlIGxpa2UgJ215LWVsZW1lbnQnYCk7XHJcbn07XHJcbmV4cG9ydHMuc2VsZWN0b3JWYWxpZGF0b3IgPSBzZWxlY3RvclZhbGlkYXRvcjtcclxuY29uc3QgdGVtcGxhdGVWYWxpZGF0b3IgPSAodGVtcGxhdGUpID0+IHtcclxuICAgIGlmICh0ZW1wbGF0ZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdUZW1wbGF0ZSBkb2VzIG5vdCBleGlzdHMsIHBsZWFzZSBkZWZpbmUgaW4gQ3VzdG9taXplTWUgZnVuY3Rpb24nKTtcclxufTtcclxuZXhwb3J0cy50ZW1wbGF0ZVZhbGlkYXRvciA9IHRlbXBsYXRlVmFsaWRhdG9yO1xyXG5jb25zdCBwcm9wZXJ0eVZhbGlkYXRvciA9IChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgaWYgKCFwcm9wZXJ0eSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBQcm9wZXJ0eSB3aXRoIG5hbWUgJHtwcm9wZXJ0eS5uYW1lfSBhbHJlYWR5IGV4aXN0cyFgKTtcclxufTtcclxuZXhwb3J0cy5wcm9wZXJ0eVZhbGlkYXRvciA9IHByb3BlcnR5VmFsaWRhdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLldhdGNoID0gZXhwb3J0cy5Qcm9wID0gZXhwb3J0cy5EaXNwYXRjaCA9IGV4cG9ydHMuTGlzdGVuID0gZXhwb3J0cy5DdXN0b21pemVNZSA9IHZvaWQgMDtcclxuY29uc3QgY3VzdG9taXplX21lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY3VzdG9taXplLW1lXCIpKTtcclxuZXhwb3J0cy5DdXN0b21pemVNZSA9IGN1c3RvbWl6ZV9tZV8xLmRlZmF1bHQ7XHJcbmNvbnN0IGxpc3Rlbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2xpc3RlblwiKSk7XHJcbmV4cG9ydHMuTGlzdGVuID0gbGlzdGVuXzEuZGVmYXVsdDtcclxuY29uc3QgZGlzcGF0Y2hfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9kaXNwYXRjaFwiKSk7XHJcbmV4cG9ydHMuRGlzcGF0Y2ggPSBkaXNwYXRjaF8xLmRlZmF1bHQ7XHJcbmNvbnN0IHByb3BfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wcm9wXCIpKTtcclxuZXhwb3J0cy5Qcm9wID0gcHJvcF8xLmRlZmF1bHQ7XHJcbmNvbnN0IHdhdGNoXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vd2F0Y2hcIikpO1xyXG5leHBvcnRzLldhdGNoID0gd2F0Y2hfMS5kZWZhdWx0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBMaXN0ZW4gPSAoZXZlbnROYW1lLCBzZWxlY3RvcikgPT4ge1xyXG4gICAgcmV0dXJuICh0YXJnZXQsIF9wcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IpID0+IHtcclxuICAgICAgICBpZiAoIXRhcmdldC5jb25zdHJ1Y3Rvci5nZXRMaXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LmNvbnN0cnVjdG9yLCB7XHJcbiAgICAgICAgICAgICAgICBfbGlzdGVuZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0TGlzdGVuZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3RlbmVycztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdGVuZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YXJnZXQuY29uc3RydWN0b3Iuc2V0TGlzdGVuZXIoeyBldmVudE5hbWUsIGhhbmRsZXI6IGRlc2NyaXB0b3IudmFsdWUsIHNlbGVjdG9yIH0pO1xyXG4gICAgfTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gTGlzdGVuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB2YWxpZGF0b3JzXzEgPSByZXF1aXJlKFwiLi9nbG9iYWwvdmFsaWRhdG9yc1wiKTtcclxuY29uc3QgUHJvcCA9ICgpID0+IHtcclxuICAgIHJldHVybiAodGFyZ2V0LCBwcm9wZXJ0eUtleSkgPT4ge1xyXG4gICAgICAgIGlmICghdGFyZ2V0LmNvbnN0cnVjdG9yLiRwcm9wcykge1xyXG4gICAgICAgICAgICB0YXJnZXQuY29uc3RydWN0b3IuJHByb3BzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHByb3AgPSB0YXJnZXQuY29uc3RydWN0b3IuJHByb3BzLmZpbmQoKHByb3ApID0+IHByb3AubmFtZSA9PT0gcHJvcGVydHlLZXkpO1xyXG4gICAgICAgICgwLCB2YWxpZGF0b3JzXzEucHJvcGVydHlWYWxpZGF0b3IpKHByb3ApO1xyXG4gICAgICAgIHRhcmdldC5jb25zdHJ1Y3Rvci4kcHJvcHMucHVzaCh7IG5hbWU6IHByb3BlcnR5S2V5LCB2YWx1ZTogdGFyZ2V0LmNvbnN0cnVjdG9yW3Byb3BlcnR5S2V5XSB9KTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwge1xyXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdhdGNoZXIgPSB0YXJnZXQuY29uc3RydWN0b3Iud2F0Y2hlcnMuZmluZCgod2F0Y2hlcikgPT4gd2F0Y2hlci5uYW1lID09PSBwcm9wZXJ0eUtleSk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbYHt7JHtwcm9wZXJ0eUtleX19fWBdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB3YXRjaGVyICYmIHdhdGNoZXIuZWZmZWN0LmNhbGwodGFyZ2V0LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbYHt7JHtwcm9wZXJ0eUtleX19fWBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBQcm9wO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBXYXRjaCA9IChQcm9wKSA9PiB7XHJcbiAgICByZXR1cm4gKHRhcmdldCwgX3Byb3BlcnR5LCBkZXNjcmlwdG9yKSA9PiB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGlmICghKChfYSA9IHRhcmdldC5jb25zdHJ1Y3Rvci53YXRjaGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkpIHtcclxuICAgICAgICAgICAgdGFyZ2V0LmNvbnN0cnVjdG9yLndhdGNoZXJzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhcmdldC5jb25zdHJ1Y3Rvci53YXRjaGVycy5wdXNoKHsgbmFtZTogUHJvcCwgZWZmZWN0OiBkZXNjcmlwdG9yLnZhbHVlIH0pO1xyXG4gICAgfTtcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gV2F0Y2g7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL2luZGV4LnNjc3NcIik7XHJcbnJlcXVpcmUoXCIuL2NvbXBvbmVudHMvZmxleC1ib3hcIik7XHJcbnJlcXVpcmUoXCIuL2NvbXBvbmVudHMvY29kZS1taXJyb3JcIik7XHJcbnJlcXVpcmUoXCIuL2NvbXBvbmVudHMvYWN0aW9uLWJ1dHRvblwiKTtcclxucmVxdWlyZShcIi4vY29tcG9uZW50cy9oZWFkZXItYm94XCIpO1xyXG5yZXF1aXJlKFwiLi9jb21wb25lbnRzL2luZm8tYm94XCIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=