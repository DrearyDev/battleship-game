/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/game.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/game.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
:root {
  --GRID_WIDTH: 502px;
  --GRID_BG_COLOR: lightblue;
  --GRID_BORDER: 1px solid black;

  --SQUARE_WIDTH: 50px;
  --SQUARE_HEIGHT: 50px;

  --SHIP_BG_COLOR: #aaa;
  --SHIP_DRAGGING_COLOR: #ccc;
  --SHIP_BORDER: 2px solid navy;
}

* {
  user-select: none;
}

body {
  padding-top: 100px;
  flex-direction: column;
  gap: 50px;
}

.grid {
  width: var(--GRID_WIDTH);
  height: var(--GRID_WIDTH);
  grid-template-columns: repeat(10, 50px);
  grid-template-rows: repeat(10, 50px);
  display: grid;
  border: var(--GRID_BORDER);
  overflow: hidden;
}
.square {
  width: var(--SQUARE_WIDTH);
  height: var(--SQUARE_HEIGHT);
  border: var(--GRID_BORDER);
  background-color: var(--GRID_BG_COLOR);
  z-index: -1;
}

.ships {
  width: var(--GRID_WIDTH);
  flex-wrap: wrap;
  display: flex;
  gap: 10px;
}
.ship {
  background-color: var(--SHIP_BG_COLOR);
  border: var(--SHIP_BORDER);
  cursor: move;
}
.ship.dragging {
  background-color: var(--SHIP_DRAGGING_COLOR);
}

.buttons-container {
  display: flex;
  gap: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/game.css"],"names":[],"mappings":";AACA;EACE,mBAAmB;EACnB,0BAA0B;EAC1B,8BAA8B;;EAE9B,oBAAoB;EACpB,qBAAqB;;EAErB,qBAAqB;EACrB,2BAA2B;EAC3B,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,uCAAuC;EACvC,oCAAoC;EACpC,aAAa;EACb,0BAA0B;EAC1B,gBAAgB;AAClB;AACA;EACE,0BAA0B;EAC1B,4BAA4B;EAC5B,0BAA0B;EAC1B,sCAAsC;EACtC,WAAW;AACb;;AAEA;EACE,wBAAwB;EACxB,eAAe;EACf,aAAa;EACb,SAAS;AACX;AACA;EACE,sCAAsC;EACtC,0BAA0B;EAC1B,YAAY;AACd;AACA;EACE,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,SAAS;AACX","sourcesContent":["\n:root {\n  --GRID_WIDTH: 502px;\n  --GRID_BG_COLOR: lightblue;\n  --GRID_BORDER: 1px solid black;\n\n  --SQUARE_WIDTH: 50px;\n  --SQUARE_HEIGHT: 50px;\n\n  --SHIP_BG_COLOR: #aaa;\n  --SHIP_DRAGGING_COLOR: #ccc;\n  --SHIP_BORDER: 2px solid navy;\n}\n\n* {\n  user-select: none;\n}\n\nbody {\n  padding-top: 100px;\n  flex-direction: column;\n  gap: 50px;\n}\n\n.grid {\n  width: var(--GRID_WIDTH);\n  height: var(--GRID_WIDTH);\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n  display: grid;\n  border: var(--GRID_BORDER);\n  overflow: hidden;\n}\n.square {\n  width: var(--SQUARE_WIDTH);\n  height: var(--SQUARE_HEIGHT);\n  border: var(--GRID_BORDER);\n  background-color: var(--GRID_BG_COLOR);\n  z-index: -1;\n}\n\n.ships {\n  width: var(--GRID_WIDTH);\n  flex-wrap: wrap;\n  display: flex;\n  gap: 10px;\n}\n.ship {\n  background-color: var(--SHIP_BG_COLOR);\n  border: var(--SHIP_BORDER);\n  cursor: move;\n}\n.ship.dragging {\n  background-color: var(--SHIP_DRAGGING_COLOR);\n}\n\n.buttons-container {\n  display: flex;\n  gap: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
body {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #ddd;
}

.btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
`, "",{"version":3,"sources":["webpack://./src/home.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb","sourcesContent":["\nbody {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    background-color: #ddd;\n}\n\n.btn-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.header {
    width: 100%;
    padding: 20px;

    position: absolute;
    top: 0px;

    background-color: #fff;
    border-bottom: 1px solid black;
}

button {
    padding: 5px 10px;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,mJAAmJ;AACvJ;;AAEA;IACI,WAAW;IACX,aAAa;;IAEb,kBAAkB;IAClB,QAAQ;;IAER,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.header {\n    width: 100%;\n    padding: 20px;\n\n    position: absolute;\n    top: 0px;\n\n    background-color: #fff;\n    border-bottom: 1px solid black;\n}\n\nbutton {\n    padding: 5px 10px;\n}\n\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/game.css":
/*!**********************!*\
  !*** ./src/game.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./game.css */ "./node_modules/css-loader/dist/cjs.js!./src/game.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/home.css":
/*!**********************!*\
  !*** ./src/home.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/createShip.js":
/*!***************************!*\
  !*** ./src/createShip.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createShip: () => (/* binding */ createShip)
/* harmony export */ });

function createShip(len) {
    let timesHit = 0;

    const length = () => { return len };

    const hit = () => { return ++timesHit };

    const isSunk = () => { return (length() - timesHit === 0) };

    return { length, hit, isSunk };
};



/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameboard: () => (/* binding */ gameboard)
/* harmony export */ });
/* harmony import */ var _createShip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createShip.js */ "./src/createShip.js");



/*--------------------------------------------

board = [
    0 in board => empty spot
    x in board => recieved attack but was miss
    {} in board => is the ship
];

misses = [
    - Array of spots that recieved attack but didnt hit a ship
    - in order of attempts
];

--------------------------------------------*/

function gameboard() {
    const shipCords = [];
    const misses = [];
    const board = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ];

    const placeShip = (coords) => {
        const ship = (0,_createShip_js__WEBPACK_IMPORTED_MODULE_0__.createShip)(coords.length);

        for (let coord of coords) {
            board[coord[0]][coord[1]] = ship;
            shipCords.push(coord);
        };
    };

    const placeRandomShips = () => {
        const pieces = [4,3,3,2,2,2,1,1,1,1];
        const piecesAmmount = 20;
        let selected = null;
        
        while (shipCords.length !== piecesAmmount) {
            const row = Math.floor(Math.random() * board.length);
            const column = Math.floor(Math.random() * board.length);
            
            const options = {
                up: [],
                right: [],
                down: [],
                left: []
            };

            for (let i = 0; i < pieces[0]; i++) {
                options.up.push([row-i, column]);
                options.right.push([row, column+i]);
                options.down.push([row+i, column]);
                options.left.push([row, column-i]);
            };

            for (const option in options) {
                for (const coord of options[option]) {
                    if (coord[0] < 0 || coord[0] > 9 ||
                        coord[1] < 0 || coord[1] > 9) {
                        options[option] = [];
                    };

                    for (let shipCord of shipCords) {
                        if (shipCord[0] === coord[0] &&
                            shipCord[1] === coord[1]) {
                            options[option] = []
                        };
                    };
                };

                if (options[option].length === pieces[0]) {
                    selected = options[option];
                };
            };

            if (selected) {
                pieces.shift();
                placeShip(selected);
            };
        };
    };

    const recieveAttack = (x,y) => {
        if (board[x][y] === 0 && !misses.includes([x,y])) {
            misses.push([x,y]);
            return false;
        } else if (board[x][y].constructor === Object) {
            board[x][y].hit();
            return true;
        };
    };

    const allShipsSunk = () => {
        for (let row of board) {
            for (let i of row) {
                if (i.constructor === Object && !i.isSunk()) { return false };
            };
        };

        return true;
    };

    const recieveRandomAttack = () => {
        const x = Math.floor(Math.random() * board.length);
        const y = Math.floor(Math.random() * board.length);

        while (misses.includes([x,y])) {
            recieveRandomAttack()
        };

        return recieveAttack(x,y);
    };

    return { placeShip, placeRandomShips, shipCords, recieveAttack, allShipsSunk, misses, recieveRandomAttack };
};




/***/ }),

/***/ "./src/handleDOM.js":
/*!**************************!*\
  !*** ./src/handleDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   doublePlayer: () => (/* binding */ doublePlayer),
/* harmony export */   setupShips: () => (/* binding */ setupShips)
/* harmony export */ });

const body = document.querySelector('body');
const header = document.querySelector('.header');

function createGrid() {
    const grid = document.createElement('div');
    grid.classList.add('grid');

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const div = document.createElement('div');
            div.classList.add('square');

            div.row = i;
            div.column = j;
            div.coord = [i,j];

            grid.appendChild(div);
        };
    };
    
    body.appendChild(grid);
};

function createShips() {
    const square = document.querySelector('.square');
    const squareWidth = getComputedStyle(square).getPropertyValue('--SQUARE_WIDTH').slice(0,-2);

    const widths = [4,3,3,2,2,2,1,1,1,1];
    const ships = document.createElement('div');
    ships.classList.add('ships');

    for (let piece in widths) {
        const ship = document.createElement('div');
        ship.classList.add('ship');
        ship.setAttribute('draggable', true);
        ship.style.width = `${widths[piece] * squareWidth}px`;
        ship.style.height = `${squareWidth}px`;

        ships.appendChild(ship);
    };

    body.appendChild(ships);
};

function createOptionsButtons() {
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');

  const submitShips = document.createElement('button');
  submitShips.classList.add('submit');
  submitShips.innerText = 'Submit Ships';

  const resetShips = document.createElement('button');
  resetShips.classList.add('reset');
  resetShips.innerText = 'Reset Ships';

  const placeRandomly = document.createElement('button');
  placeRandomly.classList.add('place-randomly');
  placeRandomly.innerText = 'Place Ships Randomly';

  body.appendChild(buttonsContainer);
  buttonsContainer.appendChild(submitShips);
  buttonsContainer.appendChild(resetShips);
  buttonsContainer.appendChild(placeRandomly);
};

function resetBody() {
  body.innerHTML = '';
  body.appendChild(header);
};

function setupShips() {
    resetBody();
    createGrid();
    createShips();
    createOptionsButtons();
};

function doublePlayer() { // will work on this later
    body.style.backgroundColor = 'lightblue';
    // body.innerHTML = '';
    // body.appendChild(header);
};




/***/ }),

/***/ "./src/placeRandomlyBtn.js":
/*!*********************************!*\
  !*** ./src/placeRandomlyBtn.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeRandomly: () => (/* binding */ placeRandomly)
/* harmony export */ });
/* harmony import */ var _resetBtn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetBtn.js */ "./src/resetBtn.js");


function genCoords(squaresTakenUp) {//generates coords for place-randomly btn
  const grid = document.querySelector('.grid');

  const row = Math.floor(Math.random() * 11);
  const column = Math.floor(Math.random() * 11);

  const options = {
    up: [],
    right: [],
    down: [],
    left: []
  };

  let selected = null;

  for (let i = 0; i < squaresTakenUp; i++) {
    options.up.push([row-i, column]);
    options.right.push([row, column+i]);
    options.down.push([row+i, column]);
    options.left.push([row, column-i]);
  };

  for (const option in options) {

    for (const coord of options[option]) {
      if (coord[0] > 10 || coord[0] < 1 ||
        coord[1] > 10 || coord[1] < 1) {
        options[option] = [];
      };

      if (grid.ships.has(coord.toString())) {
        options[option] = [];
      };
    };

    if (options[option].length === squaresTakenUp) {
      selected = {[option]: options[option]};
    };
  };

  if (selected) { return selected }
  else { return genCoords(squaresTakenUp) };
};

function placeRandomly() {
  (0,_resetBtn_js__WEBPACK_IMPORTED_MODULE_0__.resetBoard)();
  const grid = document.querySelector('.grid');
  const shipsContainer = document.querySelector('.ships');
  const square = document.querySelector('.square');
  const squareWidth = getComputedStyle(square).getPropertyValue('--SQUARE_WIDTH').slice(0,-2);

  [...shipsContainer.children].forEach(ship => {
    const squaresTakenUp = ship.style.width.slice(0,-2) / squareWidth;
    const coords = genCoords(squaresTakenUp);
    const direction = Object.keys(coords)[0];

    if (direction === 'down' || direction === 'right') {
      ship.coords = coords[direction];
      ship.style.gridRow = coords[direction][0][0];
      ship.style.gridColumn = coords[direction][0][1];
    } else {
      coords[direction] = coords[direction].reverse();
      ship.coords = coords[direction];

      ship.style.gridRow = coords[direction][0][0];
      ship.style.gridColumn = coords[direction][0][1];
    };

    const height = ship.style.height.slice(0,-2);
    const width = ship.style.width.slice(0,-2);

    if (direction === 'up' || direction === 'down') {
      ship.style.width = `${height}px`;
      ship.style.height = `${width}px`;
    };

    grid.appendChild(ship);

    for (let i = 0; i < coords[direction].length; i++) {
      grid.ships.add(coords[direction][i].toString());
    };
  });
};




/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   player: () => (/* binding */ player)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");


function player() {
    const playerBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameboard)();

    return { playerBoard };
};



/***/ }),

/***/ "./src/resetBtn.js":
/*!*************************!*\
  !*** ./src/resetBtn.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resetBoard: () => (/* binding */ resetBoard)
/* harmony export */ });

function resetBoard() {
  const grid = document.querySelector('.grid');
  const shipsContainer = document.querySelector('.ships');
  const ships = [...grid.children].filter(ship => ship.classList.contains('ship'));
  grid.ships = new Set();

  [...ships].forEach(ship => {
    const height = ship.style.height.slice(0,-2);
    const width = ship.style.width.slice(0,-2);

    if (+height > +width) {
      ship.style.height = `${width}px`;
      ship.style.width = `${height}px`;
    };

    ship.coords = [];
    shipsContainer.appendChild(ship);
  });    
};




/***/ }),

/***/ "./src/setupBoardPhase.js":
/*!********************************!*\
  !*** ./src/setupBoardPhase.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupBoardPhase: () => (/* binding */ setupBoardPhase)
/* harmony export */ });

function setupBoardPhase() {
  const ships = document.querySelectorAll('.ship');
  const grid = document.querySelector('.grid');
  grid.ships = new Set();

  ships.forEach(ship => {
    ship.addEventListener('dragstart', () => {
      ship.classList.add('dragging');

      if (ship.coords) {
        for (let i = 0; i < ship.coords.length; i++) {
          grid.ships.delete(ship.coords[i].toString());
        };
      };
    });

    ship.addEventListener('dragend', () => {
      ship.classList.remove('dragging');
    });

    ship.addEventListener('click', () => {
      const width = ship.style.width.slice(0,-2);
      const height = ship.style.height.slice(0,-2);

      if (width > 50 || height > 50) {
        ship.style.height = `${width}px`;
        ship.style.width = `${height}px`;
      };

      if (ship.parentElement.classList.contains('grid')) {
        if (+width > +height) {
          for (let i = 1; i < ship.coords.length; i++) {
            grid.ships.delete(ship.coords[i].toString());
            ship.coords[i][1] = ship.coords[0][1];
            ship.coords[i][0] = ship.coords[i][0] + i;
          };
        } else {
          for (let i = 1; i < ship.coords.length; i++) {
            grid.ships.delete(ship.coords[i].toString());
            ship.coords[i][0] = ship.coords[0][0];
            ship.coords[i][1] = ship.coords[i][1] + i;
          };
        };

        for (let i = 1; i < ship.coords.length; i++) {
          if (grid.ships.has(ship.coords[i].toString())) { ship.style.borderColor = 'red' };
        };

        calculateGridSet();
      };
    });
  });

  grid.addEventListener('dragover', (e) => {//grid isnt zero indexed
    e.preventDefault();

    if (e.target === grid) {
      const ship = document.querySelector('.dragging');
      const rect = e.target.getBoundingClientRect();

      const row = Math.round((e.clientY - rect.top) / 50);
      const column = Math.round((e.clientX - rect.left) / 50);
      ship.style.gridRow = row;
      ship.style.gridColumn = column;

      const shipHeight = ship.style.height.slice(0,-2);
      const shipWidth = ship.style.width.slice(0,-2);

      ship.coords = [];

      if (+shipHeight > +shipWidth) {
        let squaresShipTakesUp = +shipHeight / 50;

        for (let i = 0; i < squaresShipTakesUp; i++) {
          ship.coords.push([row+i, column]);
        };
      } else {
        let squaresShipTakesUp = shipWidth / 50;

        for (let i = 0; i < squaresShipTakesUp; i++) {
          ship.coords.push([row, column+i]);
        };
      };

      ship.style.borderColor = 'navy';

      for (let i = 0; i < ship.coords.length; i++) {
        if (ship.coords[i][0] > 10 ||
            ship.coords[i][0] < 1 ||
            ship.coords[i][1] > 10 ||
            ship.coords[i][1] < 1) {
          ship.style.borderColor = 'red';
        }
        else if (grid.ships.has(ship.coords[i].toString())) { ship.style.borderColor = 'red' }
      };

      grid.appendChild(ship);
    };
  });

  function calculateGridSet() {
    const shipsContainer = document.querySelector('.ships');
    const ships = [...grid.children].filter(ship => ship.classList.contains('ship'));
    grid.ships = new Set();

    [...ships].forEach(ship => {
      if (ship.style.borderColor === 'red') {
        ship.coords = [];
        ship.style.borderColor = 'navy';
        shipsContainer.appendChild(ship);
      } else {
        for (let i = 0; i < ship.coords.length; i++) {
          grid.ships.add(ship.coords[i].toString());
        };
      };
    });
  };
  grid.addEventListener('dragend', calculateGridSet);
};




/***/ }),

/***/ "./src/submitBtn.js":
/*!**************************!*\
  !*** ./src/submitBtn.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   submitCoords: () => (/* binding */ submitCoords)
/* harmony export */ });

function getSubmitedCoords() {
  const grid = document.querySelector('.grid');
  const placedShips = [...grid.children].filter(ship => ship.classList.contains('ship'));
  const allCoords = [];

  if (placedShips.length === 10) {
    placedShips.forEach(ship => {
      allCoords.push(ship.coords);
    });

    return allCoords;
  };
};

function submitCoords(player) {
  const submitedCoords = getSubmitedCoords();

  if (submitedCoords) {
    for (let i = 0; i < submitedCoords.length; i++) {
      submitedCoords[i] = submitedCoords[i].map(coord => [coord[0]-1, coord[1]-1]);
      player.playerBoard.placeShip(submitedCoords[i]);
    };
  } else {
    console.log('not all ships placed validly');
  };
};




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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.css */ "./src/home.css");
/* harmony import */ var _game_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.css */ "./src/game.css");
/* harmony import */ var _createShip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createShip.js */ "./src/createShip.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _handleDOM_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handleDOM.js */ "./src/handleDOM.js");
/* harmony import */ var _resetBtn_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resetBtn.js */ "./src/resetBtn.js");
/* harmony import */ var _placeRandomlyBtn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./placeRandomlyBtn.js */ "./src/placeRandomlyBtn.js");
/* harmony import */ var _submitBtn_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./submitBtn.js */ "./src/submitBtn.js");
/* harmony import */ var _setupBoardPhase_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setupBoardPhase.js */ "./src/setupBoardPhase.js");

/*---------------------------
Utility styles => style.css
---------------------------*/













const singleBtn = document.querySelector('#single');
const doubleBtn = document.querySelector('#double');

singleBtn.addEventListener('click', () => {
  (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.setupShips)();
  (0,_setupBoardPhase_js__WEBPACK_IMPORTED_MODULE_10__.setupBoardPhase)();

  const resetBtn = document.querySelector('.reset');
  const placeRandomlyBtn = document.querySelector('.place-randomly');
  const submitBtn = document.querySelector('.submit');

  const playerOne = (0,_player_js__WEBPACK_IMPORTED_MODULE_5__.player)();
  const cpu = (0,_player_js__WEBPACK_IMPORTED_MODULE_5__.player)();
  cpu.playerBoard.placeRandomShips();


  resetBtn.addEventListener('click', _resetBtn_js__WEBPACK_IMPORTED_MODULE_7__.resetBoard);
  placeRandomlyBtn.addEventListener('click', _placeRandomlyBtn_js__WEBPACK_IMPORTED_MODULE_8__.placeRandomly);
  submitBtn.addEventListener('click', () => (0,_submitBtn_js__WEBPACK_IMPORTED_MODULE_9__.submitCoords)(playerOne));

  console.log(cpu.playerBoard.shipCords);

});
doubleBtn.addEventListener('click', _handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.doublePlayer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qix3QkFBd0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFMkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SDNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRXdCOzs7Ozs7O1VDNUJ4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FhO0FBQ2I7QUFDQTtBQUNBO0FBQ3FCO0FBQ0Q7QUFDQTs7QUFFeUI7QUFDRjtBQUNOO0FBQ3FCO0FBQ2Y7QUFDVztBQUNSO0FBQ1M7O0FBRXZEO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHlEQUFVO0FBQ1osRUFBRSxxRUFBZTs7QUFFakI7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixrREFBTTtBQUMxQixjQUFjLGtEQUFNO0FBQ3BCOzs7QUFHQSxxQ0FBcUMsb0RBQVU7QUFDL0MsNkNBQTZDLCtEQUFhO0FBQzFELDRDQUE0QywyREFBWTs7QUFFeEQ7O0FBRUEsQ0FBQztBQUNELG9DQUFvQyx1REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nYW1lLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nYW1lLmNzcz80Nzg2Iiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9ob21lLmNzcz83ZjljIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9jcmVhdGVTaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2hhbmRsZURPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvcGxhY2VSYW5kb21seUJ0bi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9yZXNldEJ0bi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc2V0dXBCb2FyZFBoYXNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdWJtaXRCdG4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbjpyb290IHtcbiAgLS1HUklEX1dJRFRIOiA1MDJweDtcbiAgLS1HUklEX0JHX0NPTE9SOiBsaWdodGJsdWU7XG4gIC0tR1JJRF9CT1JERVI6IDFweCBzb2xpZCBibGFjaztcblxuICAtLVNRVUFSRV9XSURUSDogNTBweDtcbiAgLS1TUVVBUkVfSEVJR0hUOiA1MHB4O1xuXG4gIC0tU0hJUF9CR19DT0xPUjogI2FhYTtcbiAgLS1TSElQX0RSQUdHSU5HX0NPTE9SOiAjY2NjO1xuICAtLVNISVBfQk9SREVSOiAycHggc29saWQgbmF2eTtcbn1cblxuKiB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5ib2R5IHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDUwcHg7XG59XG5cbi5ncmlkIHtcbiAgd2lkdGg6IHZhcigtLUdSSURfV0lEVEgpO1xuICBoZWlnaHQ6IHZhcigtLUdSSURfV0lEVEgpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYm9yZGVyOiB2YXIoLS1HUklEX0JPUkRFUik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc3F1YXJlIHtcbiAgd2lkdGg6IHZhcigtLVNRVUFSRV9XSURUSCk7XG4gIGhlaWdodDogdmFyKC0tU1FVQVJFX0hFSUdIVCk7XG4gIGJvcmRlcjogdmFyKC0tR1JJRF9CT1JERVIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1HUklEX0JHX0NPTE9SKTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5zaGlwcyB7XG4gIHdpZHRoOiB2YXIoLS1HUklEX1dJRFRIKTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG59XG4uc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVNISVBfQkdfQ09MT1IpO1xuICBib3JkZXI6IHZhcigtLVNISVBfQk9SREVSKTtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuLnNoaXAuZHJhZ2dpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1TSElQX0RSQUdHSU5HX0NPTE9SKTtcbn1cblxuLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZ2FtZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQiw4QkFBOEI7O0VBRTlCLG9CQUFvQjtFQUNwQixxQkFBcUI7O0VBRXJCLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLHVDQUF1QztFQUN2QyxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLHNDQUFzQztFQUN0QyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGFBQWE7RUFDYixTQUFTO0FBQ1g7QUFDQTtFQUNFLHNDQUFzQztFQUN0QywwQkFBMEI7RUFDMUIsWUFBWTtBQUNkO0FBQ0E7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbjpyb290IHtcXG4gIC0tR1JJRF9XSURUSDogNTAycHg7XFxuICAtLUdSSURfQkdfQ09MT1I6IGxpZ2h0Ymx1ZTtcXG4gIC0tR1JJRF9CT1JERVI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gIC0tU1FVQVJFX1dJRFRIOiA1MHB4O1xcbiAgLS1TUVVBUkVfSEVJR0hUOiA1MHB4O1xcblxcbiAgLS1TSElQX0JHX0NPTE9SOiAjYWFhO1xcbiAgLS1TSElQX0RSQUdHSU5HX0NPTE9SOiAjY2NjO1xcbiAgLS1TSElQX0JPUkRFUjogMnB4IHNvbGlkIG5hdnk7XFxufVxcblxcbioge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLmdyaWQge1xcbiAgd2lkdGg6IHZhcigtLUdSSURfV0lEVEgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1HUklEX1dJRFRIKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBib3JkZXI6IHZhcigtLUdSSURfQk9SREVSKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5zcXVhcmUge1xcbiAgd2lkdGg6IHZhcigtLVNRVUFSRV9XSURUSCk7XFxuICBoZWlnaHQ6IHZhcigtLVNRVUFSRV9IRUlHSFQpO1xcbiAgYm9yZGVyOiB2YXIoLS1HUklEX0JPUkRFUik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1HUklEX0JHX0NPTE9SKTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uc2hpcHMge1xcbiAgd2lkdGg6IHZhcigtLUdSSURfV0lEVEgpO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tU0hJUF9CR19DT0xPUik7XFxuICBib3JkZXI6IHZhcigtLVNISVBfQk9SREVSKTtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuLnNoaXAuZHJhZ2dpbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tU0hJUF9EUkFHR0lOR19DT0xPUik7XFxufVxcblxcbi5idXR0b25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4uYnRuLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsbUpBQW1KO0FBQ3ZKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7O0lBRWIsa0JBQWtCO0lBQ2xCLFFBQVE7O0lBRVIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDBweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5mdW5jdGlvbiBjcmVhdGVTaGlwKGxlbikge1xuICAgIGxldCB0aW1lc0hpdCA9IDA7XG5cbiAgICBjb25zdCBsZW5ndGggPSAoKSA9PiB7IHJldHVybiBsZW4gfTtcblxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHsgcmV0dXJuICsrdGltZXNIaXQgfTtcblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHsgcmV0dXJuIChsZW5ndGgoKSAtIHRpbWVzSGl0ID09PSAwKSB9O1xuXG4gICAgcmV0dXJuIHsgbGVuZ3RoLCBoaXQsIGlzU3VuayB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlU2hpcCB9OyIsIlxuaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gXCIuL2NyZWF0ZVNoaXAuanNcIjtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5ib2FyZCA9IFtcbiAgICAwIGluIGJvYXJkID0+IGVtcHR5IHNwb3RcbiAgICB4IGluIGJvYXJkID0+IHJlY2lldmVkIGF0dGFjayBidXQgd2FzIG1pc3NcbiAgICB7fSBpbiBib2FyZCA9PiBpcyB0aGUgc2hpcFxuXTtcblxubWlzc2VzID0gW1xuICAgIC0gQXJyYXkgb2Ygc3BvdHMgdGhhdCByZWNpZXZlZCBhdHRhY2sgYnV0IGRpZG50IGhpdCBhIHNoaXBcbiAgICAtIGluIG9yZGVyIG9mIGF0dGVtcHRzXG5dO1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmZ1bmN0aW9uIGdhbWVib2FyZCgpIHtcbiAgICBjb25zdCBzaGlwQ29yZHMgPSBbXTtcbiAgICBjb25zdCBtaXNzZXMgPSBbXTtcbiAgICBjb25zdCBib2FyZCA9IFtcbiAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdXG4gICAgXTtcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZHMpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGNyZWF0ZVNoaXAoY29vcmRzLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yIChsZXQgY29vcmQgb2YgY29vcmRzKSB7XG4gICAgICAgICAgICBib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID0gc2hpcDtcbiAgICAgICAgICAgIHNoaXBDb3Jkcy5wdXNoKGNvb3JkKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2VSYW5kb21TaGlwcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGllY2VzID0gWzQsMywzLDIsMiwyLDEsMSwxLDFdO1xuICAgICAgICBjb25zdCBwaWVjZXNBbW1vdW50ID0gMjA7XG4gICAgICAgIGxldCBzZWxlY3RlZCA9IG51bGw7XG4gICAgICAgIFxuICAgICAgICB3aGlsZSAoc2hpcENvcmRzLmxlbmd0aCAhPT0gcGllY2VzQW1tb3VudCkge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmQubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkLmxlbmd0aCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdXA6IFtdLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXSxcbiAgICAgICAgICAgICAgICBkb3duOiBbXSxcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwaWVjZXNbMF07IGkrKykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMudXAucHVzaChbcm93LWksIGNvbHVtbl0pO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMucmlnaHQucHVzaChbcm93LCBjb2x1bW4raV0pO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZG93bi5wdXNoKFtyb3craSwgY29sdW1uXSk7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sZWZ0LnB1c2goW3JvdywgY29sdW1uLWldKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvb3JkIG9mIG9wdGlvbnNbb3B0aW9uXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRbMF0gPCAwIHx8IGNvb3JkWzBdID4gOSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRbMV0gPCAwIHx8IGNvb3JkWzFdID4gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gW107XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgc2hpcENvcmQgb2Ygc2hpcENvcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcENvcmRbMF0gPT09IGNvb3JkWzBdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcENvcmRbMV0gPT09IGNvb3JkWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gW11cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zW29wdGlvbl0ubGVuZ3RoID09PSBwaWVjZXNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSBvcHRpb25zW29wdGlvbl07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHBpZWNlcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHBsYWNlU2hpcChzZWxlY3RlZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCByZWNpZXZlQXR0YWNrID0gKHgseSkgPT4ge1xuICAgICAgICBpZiAoYm9hcmRbeF1beV0gPT09IDAgJiYgIW1pc3Nlcy5pbmNsdWRlcyhbeCx5XSkpIHtcbiAgICAgICAgICAgIG1pc3Nlcy5wdXNoKFt4LHldKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChib2FyZFt4XVt5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBib2FyZFt4XVt5XS5oaXQoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IHJvdyBvZiBib2FyZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSBvZiByb3cpIHtcbiAgICAgICAgICAgICAgICBpZiAoaS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmICFpLmlzU3VuaygpKSB7IHJldHVybiBmYWxzZSB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVjaWV2ZVJhbmRvbUF0dGFjayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5sZW5ndGgpO1xuXG4gICAgICAgIHdoaWxlIChtaXNzZXMuaW5jbHVkZXMoW3gseV0pKSB7XG4gICAgICAgICAgICByZWNpZXZlUmFuZG9tQXR0YWNrKClcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcmVjaWV2ZUF0dGFjayh4LHkpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBwbGFjZVNoaXAsIHBsYWNlUmFuZG9tU2hpcHMsIHNoaXBDb3JkcywgcmVjaWV2ZUF0dGFjaywgYWxsU2hpcHNTdW5rLCBtaXNzZXMsIHJlY2lldmVSYW5kb21BdHRhY2sgfTtcbn07XG5cbmV4cG9ydCB7IGdhbWVib2FyZCB9O1xuIiwiXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuXG5mdW5jdGlvbiBjcmVhdGVHcmlkKCkge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuXG4gICAgICAgICAgICBkaXYucm93ID0gaTtcbiAgICAgICAgICAgIGRpdi5jb2x1bW4gPSBqO1xuICAgICAgICAgICAgZGl2LmNvb3JkID0gW2ksal07XG5cbiAgICAgICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ3JpZCk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVTaGlwcygpIHtcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3F1YXJlJyk7XG4gICAgY29uc3Qgc3F1YXJlV2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKHNxdWFyZSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1TUVVBUkVfV0lEVEgnKS5zbGljZSgwLC0yKTtcblxuICAgIGNvbnN0IHdpZHRocyA9IFs0LDMsMywyLDIsMiwxLDEsMSwxXTtcbiAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBzLmNsYXNzTGlzdC5hZGQoJ3NoaXBzJyk7XG5cbiAgICBmb3IgKGxldCBwaWVjZSBpbiB3aWR0aHMpIHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgICAgICBzaGlwLnN0eWxlLndpZHRoID0gYCR7d2lkdGhzW3BpZWNlXSAqIHNxdWFyZVdpZHRofXB4YDtcbiAgICAgICAgc2hpcC5zdHlsZS5oZWlnaHQgPSBgJHtzcXVhcmVXaWR0aH1weGA7XG5cbiAgICAgICAgc2hpcHMuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gICAgfTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2hpcHMpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uc0J1dHRvbnMoKSB7XG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25zLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHN1Ym1pdFNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdFNoaXBzLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdCcpO1xuICBzdWJtaXRTaGlwcy5pbm5lclRleHQgPSAnU3VibWl0IFNoaXBzJztcblxuICBjb25zdCByZXNldFNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJlc2V0U2hpcHMuY2xhc3NMaXN0LmFkZCgncmVzZXQnKTtcbiAgcmVzZXRTaGlwcy5pbm5lclRleHQgPSAnUmVzZXQgU2hpcHMnO1xuXG4gIGNvbnN0IHBsYWNlUmFuZG9tbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcGxhY2VSYW5kb21seS5jbGFzc0xpc3QuYWRkKCdwbGFjZS1yYW5kb21seScpO1xuICBwbGFjZVJhbmRvbWx5LmlubmVyVGV4dCA9ICdQbGFjZSBTaGlwcyBSYW5kb21seSc7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRTaGlwcyk7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzZXRTaGlwcyk7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocGxhY2VSYW5kb21seSk7XG59O1xuXG5mdW5jdGlvbiByZXNldEJvZHkoKSB7XG4gIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn07XG5cbmZ1bmN0aW9uIHNldHVwU2hpcHMoKSB7XG4gICAgcmVzZXRCb2R5KCk7XG4gICAgY3JlYXRlR3JpZCgpO1xuICAgIGNyZWF0ZVNoaXBzKCk7XG4gICAgY3JlYXRlT3B0aW9uc0J1dHRvbnMoKTtcbn07XG5cbmZ1bmN0aW9uIGRvdWJsZVBsYXllcigpIHsgLy8gd2lsbCB3b3JrIG9uIHRoaXMgbGF0ZXJcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGJsdWUnO1xuICAgIC8vIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgLy8gYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufTtcblxuZXhwb3J0IHsgc2V0dXBTaGlwcywgZG91YmxlUGxheWVyIH07XG4iLCJpbXBvcnQgeyByZXNldEJvYXJkIH0gZnJvbSAnLi9yZXNldEJ0bi5qcyc7XG5cbmZ1bmN0aW9uIGdlbkNvb3JkcyhzcXVhcmVzVGFrZW5VcCkgey8vZ2VuZXJhdGVzIGNvb3JkcyBmb3IgcGxhY2UtcmFuZG9tbHkgYnRuXG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpO1xuXG4gIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKTtcbiAgY29uc3QgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgdXA6IFtdLFxuICAgIHJpZ2h0OiBbXSxcbiAgICBkb3duOiBbXSxcbiAgICBsZWZ0OiBbXVxuICB9O1xuXG4gIGxldCBzZWxlY3RlZCA9IG51bGw7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzVGFrZW5VcDsgaSsrKSB7XG4gICAgb3B0aW9ucy51cC5wdXNoKFtyb3ctaSwgY29sdW1uXSk7XG4gICAgb3B0aW9ucy5yaWdodC5wdXNoKFtyb3csIGNvbHVtbitpXSk7XG4gICAgb3B0aW9ucy5kb3duLnB1c2goW3JvdytpLCBjb2x1bW5dKTtcbiAgICBvcHRpb25zLmxlZnQucHVzaChbcm93LCBjb2x1bW4taV0pO1xuICB9O1xuXG4gIGZvciAoY29uc3Qgb3B0aW9uIGluIG9wdGlvbnMpIHtcblxuICAgIGZvciAoY29uc3QgY29vcmQgb2Ygb3B0aW9uc1tvcHRpb25dKSB7XG4gICAgICBpZiAoY29vcmRbMF0gPiAxMCB8fCBjb29yZFswXSA8IDEgfHxcbiAgICAgICAgY29vcmRbMV0gPiAxMCB8fCBjb29yZFsxXSA8IDEpIHtcbiAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gW107XG4gICAgICB9O1xuXG4gICAgICBpZiAoZ3JpZC5zaGlwcy5oYXMoY29vcmQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gW107XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBpZiAob3B0aW9uc1tvcHRpb25dLmxlbmd0aCA9PT0gc3F1YXJlc1Rha2VuVXApIHtcbiAgICAgIHNlbGVjdGVkID0ge1tvcHRpb25dOiBvcHRpb25zW29wdGlvbl19O1xuICAgIH07XG4gIH07XG5cbiAgaWYgKHNlbGVjdGVkKSB7IHJldHVybiBzZWxlY3RlZCB9XG4gIGVsc2UgeyByZXR1cm4gZ2VuQ29vcmRzKHNxdWFyZXNUYWtlblVwKSB9O1xufTtcblxuZnVuY3Rpb24gcGxhY2VSYW5kb21seSgpIHtcbiAgcmVzZXRCb2FyZCgpO1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKTtcbiAgY29uc3Qgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHMnKTtcbiAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNxdWFyZScpO1xuICBjb25zdCBzcXVhcmVXaWR0aCA9IGdldENvbXB1dGVkU3R5bGUoc3F1YXJlKS5nZXRQcm9wZXJ0eVZhbHVlKCctLVNRVUFSRV9XSURUSCcpLnNsaWNlKDAsLTIpO1xuXG4gIFsuLi5zaGlwc0NvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaChzaGlwID0+IHtcbiAgICBjb25zdCBzcXVhcmVzVGFrZW5VcCA9IHNoaXAuc3R5bGUud2lkdGguc2xpY2UoMCwtMikgLyBzcXVhcmVXaWR0aDtcbiAgICBjb25zdCBjb29yZHMgPSBnZW5Db29yZHMoc3F1YXJlc1Rha2VuVXApO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IE9iamVjdC5rZXlzKGNvb3JkcylbMF07XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAnZG93bicgfHwgZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICBzaGlwLmNvb3JkcyA9IGNvb3Jkc1tkaXJlY3Rpb25dO1xuICAgICAgc2hpcC5zdHlsZS5ncmlkUm93ID0gY29vcmRzW2RpcmVjdGlvbl1bMF1bMF07XG4gICAgICBzaGlwLnN0eWxlLmdyaWRDb2x1bW4gPSBjb29yZHNbZGlyZWN0aW9uXVswXVsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29vcmRzW2RpcmVjdGlvbl0gPSBjb29yZHNbZGlyZWN0aW9uXS5yZXZlcnNlKCk7XG4gICAgICBzaGlwLmNvb3JkcyA9IGNvb3Jkc1tkaXJlY3Rpb25dO1xuXG4gICAgICBzaGlwLnN0eWxlLmdyaWRSb3cgPSBjb29yZHNbZGlyZWN0aW9uXVswXVswXTtcbiAgICAgIHNoaXAuc3R5bGUuZ3JpZENvbHVtbiA9IGNvb3Jkc1tkaXJlY3Rpb25dWzBdWzFdO1xuICAgIH07XG5cbiAgICBjb25zdCBoZWlnaHQgPSBzaGlwLnN0eWxlLmhlaWdodC5zbGljZSgwLC0yKTtcbiAgICBjb25zdCB3aWR0aCA9IHNoaXAuc3R5bGUud2lkdGguc2xpY2UoMCwtMik7XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAndXAnIHx8IGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICBzaGlwLnN0eWxlLndpZHRoID0gYCR7aGVpZ2h0fXB4YDtcbiAgICAgIHNoaXAuc3R5bGUuaGVpZ2h0ID0gYCR7d2lkdGh9cHhgO1xuICAgIH07XG5cbiAgICBncmlkLmFwcGVuZENoaWxkKHNoaXApO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZHNbZGlyZWN0aW9uXS5sZW5ndGg7IGkrKykge1xuICAgICAgZ3JpZC5zaGlwcy5hZGQoY29vcmRzW2RpcmVjdGlvbl1baV0udG9TdHJpbmcoKSk7XG4gICAgfTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBwbGFjZVJhbmRvbWx5IH07XG4iLCJpbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmQuanNcIjtcblxuZnVuY3Rpb24gcGxheWVyKCkge1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZ2FtZWJvYXJkKCk7XG5cbiAgICByZXR1cm4geyBwbGF5ZXJCb2FyZCB9O1xufTtcblxuZXhwb3J0IHsgcGxheWVyIH07IiwiXG5mdW5jdGlvbiByZXNldEJvYXJkKCkge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKTtcbiAgY29uc3Qgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHMnKTtcbiAgY29uc3Qgc2hpcHMgPSBbLi4uZ3JpZC5jaGlsZHJlbl0uZmlsdGVyKHNoaXAgPT4gc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSk7XG4gIGdyaWQuc2hpcHMgPSBuZXcgU2V0KCk7XG5cbiAgWy4uLnNoaXBzXS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgIGNvbnN0IGhlaWdodCA9IHNoaXAuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsLTIpO1xuICAgIGNvbnN0IHdpZHRoID0gc2hpcC5zdHlsZS53aWR0aC5zbGljZSgwLC0yKTtcblxuICAgIGlmICgraGVpZ2h0ID4gK3dpZHRoKSB7XG4gICAgICBzaGlwLnN0eWxlLmhlaWdodCA9IGAke3dpZHRofXB4YDtcbiAgICAgIHNoaXAuc3R5bGUud2lkdGggPSBgJHtoZWlnaHR9cHhgO1xuICAgIH07XG5cbiAgICBzaGlwLmNvb3JkcyA9IFtdO1xuICAgIHNoaXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXApO1xuICB9KTsgICAgXG59O1xuXG5leHBvcnQgeyByZXNldEJvYXJkIH07XG4iLCJcbmZ1bmN0aW9uIHNldHVwQm9hcmRQaGFzZSgpIHtcbiAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKTtcbiAgZ3JpZC5zaGlwcyA9IG5ldyBTZXQoKTtcblxuICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4ge1xuICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuXG4gICAgICBpZiAoc2hpcC5jb29yZHMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGdyaWQuc2hpcHMuZGVsZXRlKHNoaXAuY29vcmRzW2ldLnRvU3RyaW5nKCkpO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHtcbiAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICB9KTtcblxuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCB3aWR0aCA9IHNoaXAuc3R5bGUud2lkdGguc2xpY2UoMCwtMik7XG4gICAgICBjb25zdCBoZWlnaHQgPSBzaGlwLnN0eWxlLmhlaWdodC5zbGljZSgwLC0yKTtcblxuICAgICAgaWYgKHdpZHRoID4gNTAgfHwgaGVpZ2h0ID4gNTApIHtcbiAgICAgICAgc2hpcC5zdHlsZS5oZWlnaHQgPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHNoaXAuc3R5bGUud2lkdGggPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgfTtcblxuICAgICAgaWYgKHNoaXAucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2dyaWQnKSkge1xuICAgICAgICBpZiAoK3dpZHRoID4gK2hlaWdodCkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5jb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGdyaWQuc2hpcHMuZGVsZXRlKHNoaXAuY29vcmRzW2ldLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgc2hpcC5jb29yZHNbaV1bMV0gPSBzaGlwLmNvb3Jkc1swXVsxXTtcbiAgICAgICAgICAgIHNoaXAuY29vcmRzW2ldWzBdID0gc2hpcC5jb29yZHNbaV1bMF0gKyBpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwLmNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZ3JpZC5zaGlwcy5kZWxldGUoc2hpcC5jb29yZHNbaV0udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBzaGlwLmNvb3Jkc1tpXVswXSA9IHNoaXAuY29vcmRzWzBdWzBdO1xuICAgICAgICAgICAgc2hpcC5jb29yZHNbaV1bMV0gPSBzaGlwLmNvb3Jkc1tpXVsxXSArIGk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXAuY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGdyaWQuc2hpcHMuaGFzKHNoaXAuY29vcmRzW2ldLnRvU3RyaW5nKCkpKSB7IHNoaXAuc3R5bGUuYm9yZGVyQ29sb3IgPSAncmVkJyB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNhbGN1bGF0ZUdyaWRTZXQoKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0pO1xuXG4gIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4gey8vZ3JpZCBpc250IHplcm8gaW5kZXhlZFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChlLnRhcmdldCA9PT0gZ3JpZCkge1xuICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpO1xuICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBjb25zdCByb3cgPSBNYXRoLnJvdW5kKChlLmNsaWVudFkgLSByZWN0LnRvcCkgLyA1MCk7XG4gICAgICBjb25zdCBjb2x1bW4gPSBNYXRoLnJvdW5kKChlLmNsaWVudFggLSByZWN0LmxlZnQpIC8gNTApO1xuICAgICAgc2hpcC5zdHlsZS5ncmlkUm93ID0gcm93O1xuICAgICAgc2hpcC5zdHlsZS5ncmlkQ29sdW1uID0gY29sdW1uO1xuXG4gICAgICBjb25zdCBzaGlwSGVpZ2h0ID0gc2hpcC5zdHlsZS5oZWlnaHQuc2xpY2UoMCwtMik7XG4gICAgICBjb25zdCBzaGlwV2lkdGggPSBzaGlwLnN0eWxlLndpZHRoLnNsaWNlKDAsLTIpO1xuXG4gICAgICBzaGlwLmNvb3JkcyA9IFtdO1xuXG4gICAgICBpZiAoK3NoaXBIZWlnaHQgPiArc2hpcFdpZHRoKSB7XG4gICAgICAgIGxldCBzcXVhcmVzU2hpcFRha2VzVXAgPSArc2hpcEhlaWdodCAvIDUwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlc1NoaXBUYWtlc1VwOyBpKyspIHtcbiAgICAgICAgICBzaGlwLmNvb3Jkcy5wdXNoKFtyb3craSwgY29sdW1uXSk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgc3F1YXJlc1NoaXBUYWtlc1VwID0gc2hpcFdpZHRoIC8gNTA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzU2hpcFRha2VzVXA7IGkrKykge1xuICAgICAgICAgIHNoaXAuY29vcmRzLnB1c2goW3JvdywgY29sdW1uK2ldKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIHNoaXAuc3R5bGUuYm9yZGVyQ29sb3IgPSAnbmF2eSc7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5jb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNoaXAuY29vcmRzW2ldWzBdID4gMTAgfHxcbiAgICAgICAgICAgIHNoaXAuY29vcmRzW2ldWzBdIDwgMSB8fFxuICAgICAgICAgICAgc2hpcC5jb29yZHNbaV1bMV0gPiAxMCB8fFxuICAgICAgICAgICAgc2hpcC5jb29yZHNbaV1bMV0gPCAxKSB7XG4gICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZWQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdyaWQuc2hpcHMuaGFzKHNoaXAuY29vcmRzW2ldLnRvU3RyaW5nKCkpKSB7IHNoaXAuc3R5bGUuYm9yZGVyQ29sb3IgPSAncmVkJyB9XG4gICAgICB9O1xuXG4gICAgICBncmlkLmFwcGVuZENoaWxkKHNoaXApO1xuICAgIH07XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZUdyaWRTZXQoKSB7XG4gICAgY29uc3Qgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHMnKTtcbiAgICBjb25zdCBzaGlwcyA9IFsuLi5ncmlkLmNoaWxkcmVuXS5maWx0ZXIoc2hpcCA9PiBzaGlwLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpKTtcbiAgICBncmlkLnNoaXBzID0gbmV3IFNldCgpO1xuXG4gICAgWy4uLnNoaXBzXS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgaWYgKHNoaXAuc3R5bGUuYm9yZGVyQ29sb3IgPT09ICdyZWQnKSB7XG4gICAgICAgIHNoaXAuY29vcmRzID0gW107XG4gICAgICAgIHNoaXAuc3R5bGUuYm9yZGVyQ29sb3IgPSAnbmF2eSc7XG4gICAgICAgIHNoaXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGdyaWQuc2hpcHMuYWRkKHNoaXAuY29vcmRzW2ldLnRvU3RyaW5nKCkpO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcbiAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgY2FsY3VsYXRlR3JpZFNldCk7XG59O1xuXG5leHBvcnQgeyBzZXR1cEJvYXJkUGhhc2UgfTtcbiIsIlxuZnVuY3Rpb24gZ2V0U3VibWl0ZWRDb29yZHMoKSB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpO1xuICBjb25zdCBwbGFjZWRTaGlwcyA9IFsuLi5ncmlkLmNoaWxkcmVuXS5maWx0ZXIoc2hpcCA9PiBzaGlwLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpKTtcbiAgY29uc3QgYWxsQ29vcmRzID0gW107XG5cbiAgaWYgKHBsYWNlZFNoaXBzLmxlbmd0aCA9PT0gMTApIHtcbiAgICBwbGFjZWRTaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgYWxsQ29vcmRzLnB1c2goc2hpcC5jb29yZHMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFsbENvb3JkcztcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIHN1Ym1pdENvb3JkcyhwbGF5ZXIpIHtcbiAgY29uc3Qgc3VibWl0ZWRDb29yZHMgPSBnZXRTdWJtaXRlZENvb3JkcygpO1xuXG4gIGlmIChzdWJtaXRlZENvb3Jkcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3VibWl0ZWRDb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN1Ym1pdGVkQ29vcmRzW2ldID0gc3VibWl0ZWRDb29yZHNbaV0ubWFwKGNvb3JkID0+IFtjb29yZFswXS0xLCBjb29yZFsxXS0xXSk7XG4gICAgICBwbGF5ZXIucGxheWVyQm9hcmQucGxhY2VTaGlwKHN1Ym1pdGVkQ29vcmRzW2ldKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdub3QgYWxsIHNoaXBzIHBsYWNlZCB2YWxpZGx5Jyk7XG4gIH07XG59O1xuXG5leHBvcnQgeyBzdWJtaXRDb29yZHMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIid1c2Ugc3RyaWN0Jztcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5VdGlsaXR5IHN0eWxlcyA9PiBzdHlsZS5jc3Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9ob21lLmNzcyc7XG5pbXBvcnQgJy4vZ2FtZS5jc3MnO1xuXG5pbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSAnLi9jcmVhdGVTaGlwLmpzJztcbmltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCB7IHBsYXllciB9IGZyb20gJy4vcGxheWVyLmpzJztcbmltcG9ydCB7IHNldHVwU2hpcHMsIGRvdWJsZVBsYXllciB9IGZyb20gJy4vaGFuZGxlRE9NLmpzJztcbmltcG9ydCB7IHJlc2V0Qm9hcmQgfSBmcm9tICcuL3Jlc2V0QnRuLmpzJztcbmltcG9ydCB7IHBsYWNlUmFuZG9tbHkgfSBmcm9tICcuL3BsYWNlUmFuZG9tbHlCdG4uanMnO1xuaW1wb3J0IHsgc3VibWl0Q29vcmRzIH0gZnJvbSAnLi9zdWJtaXRCdG4uanMnO1xuaW1wb3J0IHsgc2V0dXBCb2FyZFBoYXNlIH0gZnJvbSBcIi4vc2V0dXBCb2FyZFBoYXNlLmpzXCI7XG5cbmNvbnN0IHNpbmdsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaW5nbGUnKTtcbmNvbnN0IGRvdWJsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb3VibGUnKTtcblxuc2luZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBzZXR1cFNoaXBzKCk7XG4gIHNldHVwQm9hcmRQaGFzZSgpO1xuXG4gIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0Jyk7XG4gIGNvbnN0IHBsYWNlUmFuZG9tbHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2UtcmFuZG9tbHknKTtcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xuXG4gIGNvbnN0IHBsYXllck9uZSA9IHBsYXllcigpO1xuICBjb25zdCBjcHUgPSBwbGF5ZXIoKTtcbiAgY3B1LnBsYXllckJvYXJkLnBsYWNlUmFuZG9tU2hpcHMoKTtcblxuXG4gIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRCb2FyZCk7XG4gIHBsYWNlUmFuZG9tbHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVJhbmRvbWx5KTtcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3VibWl0Q29vcmRzKHBsYXllck9uZSkpO1xuXG4gIGNvbnNvbGUubG9nKGNwdS5wbGF5ZXJCb2FyZC5zaGlwQ29yZHMpO1xuXG59KTtcbmRvdWJsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvdWJsZVBsYXllcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=