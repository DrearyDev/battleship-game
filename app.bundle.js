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

  --MISS_CROSS_COLOR: black;
  --HIT_CROSS_COLOR: red;
}

* {
  user-select: none;
}

body {
  padding: 100px 0px 100px 0px;
  flex-direction: column;
  gap: 50px;
}

.grid,
.mini-grid {
  width: var(--GRID_WIDTH);
  height: var(--GRID_WIDTH);
  grid-template-columns: repeat(10, 50px);
  grid-template-rows: repeat(10, 50px);
  display: grid;
  border: var(--GRID_BORDER);
  overflow: hidden;
}
.square,
.mini-square {
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

.miss,
.hit {
  width: var(--SQUARE_WIDTH);
  height: var(--SQUARE_HEIGHT);
  background-color: var(--GRID_BG_COLOR);
  border: var(--GRID_BORDER);
  position: relative;
}
.miss:before, .miss:after,
.hit:before, .hit:after {
  width: 100%;
  height: 10px;
  content: '';
  margin: auto;
  background-color: var(--MISS_CROSS_COLOR);

  transform: rotate(-45deg);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.miss:after,
.hit:after {
  transform: rotate(45deg);
}

.hit:before, .hit:after {
  background-color: var(--HIT_CROSS_COLOR);
}

.mini-grid {
  width: calc(var(--GRID_WIDTH) / 2 + 1px);
  height: calc(var(--GRID_WIDTH) / 2 + 1px);
  grid-template-columns: repeat(10, 25px);
  grid-template-rows: repeat(10, 25px);
}
.mini-square {
  width: calc(var(--SQUARE_HEIGHT) / 2);
  height: calc(var(--SQUARE_HEIGHT) / 2);
}

.mini-ship {
  background-color: var(--SHIP_BG_COLOR);
  border: var(--GRID_BORDER);
}

.mini-grid > .miss,
.mini-grid > .hit {
  width: calc(var(--SQUARE_HEIGHT) / 2);
  height: calc(var(--SQUARE_HEIGHT) / 2);
}
.mini-grid > .miss:before,
.mini-grid > .hit:before,
.mini-grid > .miss:after,
.mini-grid > .hit:after {
  height: 5px;
}
.mini-grid > .hit {
  background-color: transparent;
}

.winner-msg {
  width: 500px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background-color: white;
  border: var(--GRID_BORDER);
}

.game-over-options {
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/game.css"],"names":[],"mappings":";AACA;EACE,mBAAmB;EACnB,0BAA0B;EAC1B,8BAA8B;;EAE9B,oBAAoB;EACpB,qBAAqB;;EAErB,qBAAqB;EACrB,2BAA2B;EAC3B,6BAA6B;;EAE7B,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,4BAA4B;EAC5B,sBAAsB;EACtB,SAAS;AACX;;AAEA;;EAEE,wBAAwB;EACxB,yBAAyB;EACzB,uCAAuC;EACvC,oCAAoC;EACpC,aAAa;EACb,0BAA0B;EAC1B,gBAAgB;AAClB;AACA;;EAEE,0BAA0B;EAC1B,4BAA4B;EAC5B,0BAA0B;EAC1B,sCAAsC;EACtC,WAAW;AACb;;AAEA;EACE,wBAAwB;EACxB,eAAe;EACf,aAAa;EACb,SAAS;AACX;AACA;EACE,sCAAsC;EACtC,0BAA0B;EAC1B,YAAY;AACd;AACA;EACE,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;EAEE,0BAA0B;EAC1B,4BAA4B;EAC5B,sCAAsC;EACtC,0BAA0B;EAC1B,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,yCAAyC;;EAEzC,yBAAyB;EACzB,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,MAAM;EACN,SAAS;AACX;AACA;;EAEE,wBAAwB;AAC1B;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,wCAAwC;EACxC,yCAAyC;EACzC,uCAAuC;EACvC,oCAAoC;AACtC;AACA;EACE,qCAAqC;EACrC,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;EACtC,0BAA0B;AAC5B;;AAEA;;EAEE,qCAAqC;EACrC,sCAAsC;AACxC;AACA;;;;EAIE,WAAW;AACb;AACA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,aAAa;;EAEb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;;EAET,uBAAuB;EACvB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;;EAEb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX","sourcesContent":["\n:root {\n  --GRID_WIDTH: 502px;\n  --GRID_BG_COLOR: lightblue;\n  --GRID_BORDER: 1px solid black;\n\n  --SQUARE_WIDTH: 50px;\n  --SQUARE_HEIGHT: 50px;\n\n  --SHIP_BG_COLOR: #aaa;\n  --SHIP_DRAGGING_COLOR: #ccc;\n  --SHIP_BORDER: 2px solid navy;\n\n  --MISS_CROSS_COLOR: black;\n  --HIT_CROSS_COLOR: red;\n}\n\n* {\n  user-select: none;\n}\n\nbody {\n  padding: 100px 0px 100px 0px;\n  flex-direction: column;\n  gap: 50px;\n}\n\n.grid,\n.mini-grid {\n  width: var(--GRID_WIDTH);\n  height: var(--GRID_WIDTH);\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n  display: grid;\n  border: var(--GRID_BORDER);\n  overflow: hidden;\n}\n.square,\n.mini-square {\n  width: var(--SQUARE_WIDTH);\n  height: var(--SQUARE_HEIGHT);\n  border: var(--GRID_BORDER);\n  background-color: var(--GRID_BG_COLOR);\n  z-index: -1;\n}\n\n.ships {\n  width: var(--GRID_WIDTH);\n  flex-wrap: wrap;\n  display: flex;\n  gap: 10px;\n}\n.ship {\n  background-color: var(--SHIP_BG_COLOR);\n  border: var(--SHIP_BORDER);\n  cursor: move;\n}\n.ship.dragging {\n  background-color: var(--SHIP_DRAGGING_COLOR);\n}\n\n.buttons-container {\n  display: flex;\n  gap: 10px;\n}\n\n.miss,\n.hit {\n  width: var(--SQUARE_WIDTH);\n  height: var(--SQUARE_HEIGHT);\n  background-color: var(--GRID_BG_COLOR);\n  border: var(--GRID_BORDER);\n  position: relative;\n}\n.miss:before, .miss:after,\n.hit:before, .hit:after {\n  width: 100%;\n  height: 10px;\n  content: '';\n  margin: auto;\n  background-color: var(--MISS_CROSS_COLOR);\n\n  transform: rotate(-45deg);\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.miss:after,\n.hit:after {\n  transform: rotate(45deg);\n}\n\n.hit:before, .hit:after {\n  background-color: var(--HIT_CROSS_COLOR);\n}\n\n.mini-grid {\n  width: calc(var(--GRID_WIDTH) / 2 + 1px);\n  height: calc(var(--GRID_WIDTH) / 2 + 1px);\n  grid-template-columns: repeat(10, 25px);\n  grid-template-rows: repeat(10, 25px);\n}\n.mini-square {\n  width: calc(var(--SQUARE_HEIGHT) / 2);\n  height: calc(var(--SQUARE_HEIGHT) / 2);\n}\n\n.mini-ship {\n  background-color: var(--SHIP_BG_COLOR);\n  border: var(--GRID_BORDER);\n}\n\n.mini-grid > .miss,\n.mini-grid > .hit {\n  width: calc(var(--SQUARE_HEIGHT) / 2);\n  height: calc(var(--SQUARE_HEIGHT) / 2);\n}\n.mini-grid > .miss:before,\n.mini-grid > .hit:before,\n.mini-grid > .miss:after,\n.mini-grid > .hit:after {\n  height: 5px;\n}\n.mini-grid > .hit {\n  background-color: transparent;\n}\n\n.winner-msg {\n  width: 500px;\n  padding: 10px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n\n  background-color: white;\n  border: var(--GRID_BORDER);\n}\n\n.game-over-options {\n  padding: 10px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n"],"sourceRoot":""}]);
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
    const hits = [];
    const shipCords = new Set();
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
            shipCords.add(coord.toString());
        };
    };

    const placeRandomShips = () => {
        const pieces = [4,3,3,2,2,2,1,1,1,1];
        
        while (pieces[0]) {
            let selected = null;
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

                    if (shipCords.has(coord.toString())) {
                        options[option] = [];
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
            hits.push([x,y]);
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
        let duplicate = null;

        for (let i = 0; i < misses.length; i++) {
            if (misses[i][0] === x && misses[i][1] === y) {
                duplicate = true;
            };
        };

        for (let i = 0; i < hits.length; i++) {
            if (hits[i][0] === x && hits[i][1] === y) {
                duplicate = true;
            };
        };

        if (duplicate) { recieveRandomAttack() }
        else { return recieveAttack(x,y) };
    };

    const recieveSmartAttack = () => {
      let selected = null;

      for (const hit of hits) {
        const options = {
          up: [hit[0] - 1, hit[1]],
          down: [hit[0] + 1, hit[1]],
          left: [hit[0], hit[1] - 1],
          right: [hit[0], hit[1] + 1]
        };

        for (const option in options) {
          if (options[option][0] < 0 || options[option][0] > 9 ||
              options[option][1] < 0 || options[option][1] > 9) {

            delete options[option];
          };
        };

        for (const option in options) {
          for (const miss of misses) {
            if (miss[0] === options[option][0] && miss[1] === options[option][1]) {
              options[option] = [];
            };
          };

          for (const hit of hits) {
            if (hit[0] === options[option][0] && hit[1] === options[option][1]) {
              options[option] = [];
            };
          };

          if (options[option].length > 0) {
            selected = options[option];
          };
        };
      };

      if (selected) { recieveAttack(selected[0], selected[1]) }
      else { recieveRandomAttack() };
    };

    return { placeShip, placeRandomShips, shipCords, recieveAttack, allShipsSunk, misses, recieveRandomAttack, hits, recieveSmartAttack };
};




/***/ }),

/***/ "./src/handleDOM.js":
/*!**************************!*\
  !*** ./src/handleDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attackPhase: () => (/* binding */ attackPhase),
/* harmony export */   displayWinner: () => (/* binding */ displayWinner),
/* harmony export */   setupShips: () => (/* binding */ setupShips),
/* harmony export */   updateMiniGrid: () => (/* binding */ updateMiniGrid)
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

function createMiniGrid() {
  const miniGrid = document.createElement('div');
  miniGrid.classList.add('mini-grid');

  for (let i = 0; i < 10; i++) {
    for (let k = 0; k < 10; k++) {
      const div = document.createElement('div');
      div.classList.add('mini-square');

      miniGrid.appendChild(div);
    };
  };

  body.appendChild(miniGrid);
};

function updateMiniGrid(playerBoard) {
  let shipCordsArr = [];

  for (const entry of playerBoard.shipCords.entries()) {
    shipCordsArr.push(entry[0].split(',').map(Number))
  };

  const miniGrid = document.querySelector('.mini-grid');
  const gridCords = shipCordsArr.map(coords => [coords[0] + 1, coords[1] + 1]);
  const misses = playerBoard.misses.map(coords => [coords[0] + 1, coords[1] + 1]);
  const hits = playerBoard.hits.map(coords => [coords[0] + 1, coords[1] + 1]);

  for (let i = 0; i < gridCords.length; i++) {
    const div = document.createElement('div');
    div.classList.add('mini-ship');

    div.style.gridRow = [gridCords[i][0]];
    div.style.gridColumn = [gridCords[i][1]];

    miniGrid.appendChild(div);
  };

  for (let i = 0; i < misses.length; i++) {
    const div = document.createElement('div');
    div.classList.add('miss');

    div.style.gridRow = [misses[i][0]];
    div.style.gridColumn = [misses[i][1]];

    miniGrid.appendChild(div);
  };

  for (let i = 0; i < hits.length; i++) {
    const div = document.createElement('div');
    div.classList.add('hit');

    div.style.gridRow = [hits[i][0]];
    div.style.gridColumn = [hits[i][1]];

    miniGrid.appendChild(div);
  };
  
};

function attackPhase(player) {
  resetBody();
  createGrid();
  createMiniGrid();
  updateMiniGrid(player.playerBoard);

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

function displayWinner(winner) {
  const winnerMsg = document.createElement('div');
  winnerMsg.classList.add('winner-msg');
  const h2 = document.createElement('h2');
  h2.innerText = 'Winner is:';
  const h1 = document.createElement('h1');
  h1.innerText = `${winner.name}!`;
  winnerMsg.appendChild(h2);
  winnerMsg.appendChild(h1);

  const options = document.createElement('div');
  options.classList.add('game-over-options');
  const changeModeBtn = document.createElement('button');
  changeModeBtn.classList.add('change-mode');
  changeModeBtn.innerText = 'Change Mode';
  const playAgainBtn = document.createElement('button');
  playAgainBtn.classList.add('play-again');
  playAgainBtn.innerText = 'Play Again';
  options.appendChild(changeModeBtn);
  options.appendChild(playAgainBtn);

  winnerMsg.appendChild(options);

  body.insertBefore(winnerMsg, body.children[0]);
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













let gamemode = null;
let activePlayer = null;
const singleBtn = document.querySelector('#single');
const doubleBtn = document.querySelector('#double');

function playerAttack(e, defendingPlayer) {
  const grid = document.querySelector('.grid');
  const div = document.createElement('div');
  const rect = e.target.getBoundingClientRect();

  const row = Math.ceil((e.clientY - rect.top) / 50);
  const column = Math.ceil((e.clientX - rect.left) / 50);

  div.style.gridRow = row;
  div.style.gridColumn = column;

  if (defendingPlayer.playerBoard.recieveAttack(row-1, column-1)) {
    div.classList.add('hit');
  } else {
    div.classList.add('miss');
  };

  grid.appendChild(div);
};

function cpuAttack(player) {
  player.playerBoard.recieveSmartAttack();
  (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.updateMiniGrid)(player.playerBoard);
};

function changeMode() {
  const body = document.querySelector('body');
  const header = document.querySelector('.header');
  body.innerHTML = ''
  body.appendChild(header);

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');
  const singleBtn = document.createElement('button');
  singleBtn.id = 'single';
  singleBtn.innerText = 'Single Player (vs CPU)';
  const doubleBtn = document.createElement('button');
  doubleBtn.id = 'double';
  doubleBtn.innerText = 'Double Player (Local play)';

  btnContainer.appendChild(singleBtn);
  btnContainer.appendChild(doubleBtn);

  body.appendChild(btnContainer);

  singleBtn.addEventListener('click', singlePlayer);
  doubleBtn.addEventListener('click', doublePlayer);
};

function playAgain(gamemode) {
  const body = document.querySelector('body');
  const header = document.querySelector('.header');
  body.innerHTML = '';
  body.appendChild(header);

  if (gamemode === 'single') {
    singlePlayer();
  } else {
    doublePlayer();
  };
};

function checkForWinners(playerOne, playerTwo) {
  let winner = null;

  if (playerTwo.playerBoard.allShipsSunk()) {
    winner = playerOne;
  } else if (playerOne.playerBoard.allShipsSunk()) {
    winner = playerTwo;
  };

  if (winner) {
    (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.displayWinner)(winner);
    const changeModeBtn = document.querySelector('.change-mode');
    changeModeBtn.addEventListener('click', changeMode);
    const playAgainBtn = document.querySelector('.play-again');
    playAgainBtn.addEventListener('click', () => {
      playAgain(gamemode);
    });

    const grid = document.querySelector('.grid');
    grid.removeEventListener('click', gridClicked);
  };
};

function gridClicked(e, playerOne, playerTwo) {
  const grid = document.querySelector('.grid');

  if (e.target === grid) {
    playerAttack(e, grid.playerTwo);
    cpuAttack(grid.playerOne);
    checkForWinners(grid.playerOne, grid.playerTwo);
  };
};

function singleGameLoop(playerOne, playerTwo) {
  (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.attackPhase)(playerOne);

  const grid = document.querySelector('.grid');
  grid.playerOne = playerOne;
  grid.playerTwo = playerTwo;
  grid.addEventListener('click', gridClicked);
};

function singlePlayer() {
  gamemode = 'single';
  (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.setupShips)();
  (0,_setupBoardPhase_js__WEBPACK_IMPORTED_MODULE_10__.setupBoardPhase)();

  const resetBtn = document.querySelector('.reset');
  const placeRandomlyBtn = document.querySelector('.place-randomly');
  const submitBtn = document.querySelector('.submit');

  const playerOne = (0,_player_js__WEBPACK_IMPORTED_MODULE_5__.player)();
  playerOne.name = 'player';
  const cpu = (0,_player_js__WEBPACK_IMPORTED_MODULE_5__.player)();
  cpu.name = 'computer';

  resetBtn.addEventListener('click', _resetBtn_js__WEBPACK_IMPORTED_MODULE_7__.resetBoard);
  placeRandomlyBtn.addEventListener('click', _placeRandomlyBtn_js__WEBPACK_IMPORTED_MODULE_8__.placeRandomly);
  submitBtn.addEventListener('click', () => {
    (0,_submitBtn_js__WEBPACK_IMPORTED_MODULE_9__.submitCoords)(playerOne);
    cpu.playerBoard.placeRandomShips();
    singleGameLoop(playerOne, cpu);
  });
};

function doublePlayer() {
  gamemode = 'double';
  (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.setupShips)();
  (0,_setupBoardPhase_js__WEBPACK_IMPORTED_MODULE_10__.setupBoardPhase)();

  const resetBtn = document.querySelector('.reset');
  const placeRandomlyBtn = document.querySelector('.place-randomly');
  const submitBtn = document.querySelector('.submit');

  const playerOne = (0,_player_js__WEBPACK_IMPORTED_MODULE_5__.player)();
  playerOne.name = 'Player One';
  const playerTwo = (0,_player_js__WEBPACK_IMPORTED_MODULE_5__.player)();
  playerTwo.name = 'Player Two';

  activePlayer = playerOne;

  resetBtn.addEventListener('click', _resetBtn_js__WEBPACK_IMPORTED_MODULE_7__.resetBoard);
  placeRandomlyBtn.addEventListener('click', _placeRandomlyBtn_js__WEBPACK_IMPORTED_MODULE_8__.placeRandomly);
  submitBtn.addEventListener('click', () => {
    (0,_submitBtn_js__WEBPACK_IMPORTED_MODULE_9__.submitCoords)(activePlayer);

    if (activePlayer === playerOne) {
      (0,_resetBtn_js__WEBPACK_IMPORTED_MODULE_7__.resetBoard)();
      activePlayer = playerTwo;
    } else {
      activePlayer = playerOne;
      doubleGameLoop(playerOne, playerTwo);
    };
  });
};

function doubleGameLoop(playerOne, playerTwo) {
  console.log('start game (double player)');
};

singleBtn.addEventListener('click', singlePlayer);
doubleBtn.addEventListener('click', doublePlayer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dGxlc2hpcC1nYW1lLy4vc3JjL2hvbWUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2FtZS5jc3M/NDc4NiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvaG9tZS5jc3M/N2Y5YyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY3JlYXRlU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9oYW5kbGVET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3BsYWNlUmFuZG9tbHlCdG4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvcmVzZXRCdG4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3NldHVwQm9hcmRQaGFzZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3VibWl0QnRuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG46cm9vdCB7XG4gIC0tR1JJRF9XSURUSDogNTAycHg7XG4gIC0tR1JJRF9CR19DT0xPUjogbGlnaHRibHVlO1xuICAtLUdSSURfQk9SREVSOiAxcHggc29saWQgYmxhY2s7XG5cbiAgLS1TUVVBUkVfV0lEVEg6IDUwcHg7XG4gIC0tU1FVQVJFX0hFSUdIVDogNTBweDtcblxuICAtLVNISVBfQkdfQ09MT1I6ICNhYWE7XG4gIC0tU0hJUF9EUkFHR0lOR19DT0xPUjogI2NjYztcbiAgLS1TSElQX0JPUkRFUjogMnB4IHNvbGlkIG5hdnk7XG5cbiAgLS1NSVNTX0NST1NTX0NPTE9SOiBibGFjaztcbiAgLS1ISVRfQ1JPU1NfQ09MT1I6IHJlZDtcbn1cblxuKiB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5ib2R5IHtcbiAgcGFkZGluZzogMTAwcHggMHB4IDEwMHB4IDBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1MHB4O1xufVxuXG4uZ3JpZCxcbi5taW5pLWdyaWQge1xuICB3aWR0aDogdmFyKC0tR1JJRF9XSURUSCk7XG4gIGhlaWdodDogdmFyKC0tR1JJRF9XSURUSCk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xuICBkaXNwbGF5OiBncmlkO1xuICBib3JkZXI6IHZhcigtLUdSSURfQk9SREVSKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zcXVhcmUsXG4ubWluaS1zcXVhcmUge1xuICB3aWR0aDogdmFyKC0tU1FVQVJFX1dJRFRIKTtcbiAgaGVpZ2h0OiB2YXIoLS1TUVVBUkVfSEVJR0hUKTtcbiAgYm9yZGVyOiB2YXIoLS1HUklEX0JPUkRFUik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUdSSURfQkdfQ09MT1IpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnNoaXBzIHtcbiAgd2lkdGg6IHZhcigtLUdSSURfV0lEVEgpO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbn1cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tU0hJUF9CR19DT0xPUik7XG4gIGJvcmRlcjogdmFyKC0tU0hJUF9CT1JERVIpO1xuICBjdXJzb3I6IG1vdmU7XG59XG4uc2hpcC5kcmFnZ2luZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVNISVBfRFJBR0dJTkdfQ09MT1IpO1xufVxuXG4uYnV0dG9ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG59XG5cbi5taXNzLFxuLmhpdCB7XG4gIHdpZHRoOiB2YXIoLS1TUVVBUkVfV0lEVEgpO1xuICBoZWlnaHQ6IHZhcigtLVNRVUFSRV9IRUlHSFQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1HUklEX0JHX0NPTE9SKTtcbiAgYm9yZGVyOiB2YXIoLS1HUklEX0JPUkRFUik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5taXNzOmJlZm9yZSwgLm1pc3M6YWZ0ZXIsXG4uaGl0OmJlZm9yZSwgLmhpdDphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwcHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU1JU1NfQ1JPU1NfQ09MT1IpO1xuXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xufVxuLm1pc3M6YWZ0ZXIsXG4uaGl0OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uaGl0OmJlZm9yZSwgLmhpdDphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhJVF9DUk9TU19DT0xPUik7XG59XG5cbi5taW5pLWdyaWQge1xuICB3aWR0aDogY2FsYyh2YXIoLS1HUklEX1dJRFRIKSAvIDIgKyAxcHgpO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tR1JJRF9XSURUSCkgLyAyICsgMXB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDI1cHgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjVweCk7XG59XG4ubWluaS1zcXVhcmUge1xuICB3aWR0aDogY2FsYyh2YXIoLS1TUVVBUkVfSEVJR0hUKSAvIDIpO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tU1FVQVJFX0hFSUdIVCkgLyAyKTtcbn1cblxuLm1pbmktc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVNISVBfQkdfQ09MT1IpO1xuICBib3JkZXI6IHZhcigtLUdSSURfQk9SREVSKTtcbn1cblxuLm1pbmktZ3JpZCA+IC5taXNzLFxuLm1pbmktZ3JpZCA+IC5oaXQge1xuICB3aWR0aDogY2FsYyh2YXIoLS1TUVVBUkVfSEVJR0hUKSAvIDIpO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tU1FVQVJFX0hFSUdIVCkgLyAyKTtcbn1cbi5taW5pLWdyaWQgPiAubWlzczpiZWZvcmUsXG4ubWluaS1ncmlkID4gLmhpdDpiZWZvcmUsXG4ubWluaS1ncmlkID4gLm1pc3M6YWZ0ZXIsXG4ubWluaS1ncmlkID4gLmhpdDphZnRlciB7XG4gIGhlaWdodDogNXB4O1xufVxuLm1pbmktZ3JpZCA+IC5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLndpbm5lci1tc2cge1xuICB3aWR0aDogNTAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiB2YXIoLS1HUklEX0JPUkRFUik7XG59XG5cbi5nYW1lLW92ZXItb3B0aW9ucyB7XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2dhbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsOEJBQThCOztFQUU5QixvQkFBb0I7RUFDcEIscUJBQXFCOztFQUVyQixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLDZCQUE2Qjs7RUFFN0IseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsdUNBQXVDO0VBQ3ZDLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLHNDQUFzQztFQUN0QyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGFBQWE7RUFDYixTQUFTO0FBQ1g7QUFDQTtFQUNFLHNDQUFzQztFQUN0QywwQkFBMEI7RUFDMUIsWUFBWTtBQUNkO0FBQ0E7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBOztFQUVFLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsc0NBQXNDO0VBQ3RDLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUNBQXlDOztFQUV6Qyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtFQUNOLFNBQVM7QUFDWDtBQUNBOztFQUVFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHdDQUF3QztFQUN4Qyx5Q0FBeUM7RUFDekMsdUNBQXVDO0VBQ3ZDLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QywwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUscUNBQXFDO0VBQ3JDLHNDQUFzQztBQUN4QztBQUNBOzs7O0VBSUUsV0FBVztBQUNiO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTs7RUFFYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUzs7RUFFVCx1QkFBdUI7RUFDdkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTs7RUFFYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuOnJvb3Qge1xcbiAgLS1HUklEX1dJRFRIOiA1MDJweDtcXG4gIC0tR1JJRF9CR19DT0xPUjogbGlnaHRibHVlO1xcbiAgLS1HUklEX0JPUkRFUjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgLS1TUVVBUkVfV0lEVEg6IDUwcHg7XFxuICAtLVNRVUFSRV9IRUlHSFQ6IDUwcHg7XFxuXFxuICAtLVNISVBfQkdfQ09MT1I6ICNhYWE7XFxuICAtLVNISVBfRFJBR0dJTkdfQ09MT1I6ICNjY2M7XFxuICAtLVNISVBfQk9SREVSOiAycHggc29saWQgbmF2eTtcXG5cXG4gIC0tTUlTU19DUk9TU19DT0xPUjogYmxhY2s7XFxuICAtLUhJVF9DUk9TU19DT0xPUjogcmVkO1xcbn1cXG5cXG4qIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDEwMHB4IDBweCAxMDBweCAwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uZ3JpZCxcXG4ubWluaS1ncmlkIHtcXG4gIHdpZHRoOiB2YXIoLS1HUklEX1dJRFRIKTtcXG4gIGhlaWdodDogdmFyKC0tR1JJRF9XSURUSCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYm9yZGVyOiB2YXIoLS1HUklEX0JPUkRFUik7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc3F1YXJlLFxcbi5taW5pLXNxdWFyZSB7XFxuICB3aWR0aDogdmFyKC0tU1FVQVJFX1dJRFRIKTtcXG4gIGhlaWdodDogdmFyKC0tU1FVQVJFX0hFSUdIVCk7XFxuICBib3JkZXI6IHZhcigtLUdSSURfQk9SREVSKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUdSSURfQkdfQ09MT1IpO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5zaGlwcyB7XFxuICB3aWR0aDogdmFyKC0tR1JJRF9XSURUSCk7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1TSElQX0JHX0NPTE9SKTtcXG4gIGJvcmRlcjogdmFyKC0tU0hJUF9CT1JERVIpO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG4uc2hpcC5kcmFnZ2luZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1TSElQX0RSQUdHSU5HX0NPTE9SKTtcXG59XFxuXFxuLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5taXNzLFxcbi5oaXQge1xcbiAgd2lkdGg6IHZhcigtLVNRVUFSRV9XSURUSCk7XFxuICBoZWlnaHQ6IHZhcigtLVNRVUFSRV9IRUlHSFQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tR1JJRF9CR19DT0xPUik7XFxuICBib3JkZXI6IHZhcigtLUdSSURfQk9SREVSKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1pc3M6YmVmb3JlLCAubWlzczphZnRlcixcXG4uaGl0OmJlZm9yZSwgLmhpdDphZnRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTBweDtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTUlTU19DUk9TU19DT0xPUik7XFxuXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG4ubWlzczphZnRlcixcXG4uaGl0OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmhpdDpiZWZvcmUsIC5oaXQ6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSElUX0NST1NTX0NPTE9SKTtcXG59XFxuXFxuLm1pbmktZ3JpZCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1HUklEX1dJRFRIKSAvIDIgKyAxcHgpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLUdSSURfV0lEVEgpIC8gMiArIDFweCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjVweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjVweCk7XFxufVxcbi5taW5pLXNxdWFyZSB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1TUVVBUkVfSEVJR0hUKSAvIDIpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLVNRVUFSRV9IRUlHSFQpIC8gMik7XFxufVxcblxcbi5taW5pLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tU0hJUF9CR19DT0xPUik7XFxuICBib3JkZXI6IHZhcigtLUdSSURfQk9SREVSKTtcXG59XFxuXFxuLm1pbmktZ3JpZCA+IC5taXNzLFxcbi5taW5pLWdyaWQgPiAuaGl0IHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLVNRVUFSRV9IRUlHSFQpIC8gMik7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tU1FVQVJFX0hFSUdIVCkgLyAyKTtcXG59XFxuLm1pbmktZ3JpZCA+IC5taXNzOmJlZm9yZSxcXG4ubWluaS1ncmlkID4gLmhpdDpiZWZvcmUsXFxuLm1pbmktZ3JpZCA+IC5taXNzOmFmdGVyLFxcbi5taW5pLWdyaWQgPiAuaGl0OmFmdGVyIHtcXG4gIGhlaWdodDogNXB4O1xcbn1cXG4ubWluaS1ncmlkID4gLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLndpbm5lci1tc2cge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHZhcigtLUdSSURfQk9SREVSKTtcXG59XFxuXFxuLmdhbWUtb3Zlci1vcHRpb25zIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4uYnRuLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsbUpBQW1KO0FBQ3ZKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7O0lBRWIsa0JBQWtCO0lBQ2xCLFFBQVE7O0lBRVIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDBweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5mdW5jdGlvbiBjcmVhdGVTaGlwKGxlbikge1xuICAgIGxldCB0aW1lc0hpdCA9IDA7XG5cbiAgICBjb25zdCBsZW5ndGggPSAoKSA9PiB7IHJldHVybiBsZW4gfTtcblxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHsgcmV0dXJuICsrdGltZXNIaXQgfTtcblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHsgcmV0dXJuIChsZW5ndGgoKSAtIHRpbWVzSGl0ID09PSAwKSB9O1xuXG4gICAgcmV0dXJuIHsgbGVuZ3RoLCBoaXQsIGlzU3VuayB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlU2hpcCB9OyIsIlxuaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gXCIuL2NyZWF0ZVNoaXAuanNcIjtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5ib2FyZCA9IFtcbiAgICAwIGluIGJvYXJkID0+IGVtcHR5IHNwb3RcbiAgICB4IGluIGJvYXJkID0+IHJlY2lldmVkIGF0dGFjayBidXQgd2FzIG1pc3NcbiAgICB7fSBpbiBib2FyZCA9PiBpcyB0aGUgc2hpcFxuXTtcblxubWlzc2VzID0gW1xuICAgIC0gQXJyYXkgb2Ygc3BvdHMgdGhhdCByZWNpZXZlZCBhdHRhY2sgYnV0IGRpZG50IGhpdCBhIHNoaXBcbiAgICAtIGluIG9yZGVyIG9mIGF0dGVtcHRzXG5dO1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmZ1bmN0aW9uIGdhbWVib2FyZCgpIHtcbiAgICBjb25zdCBoaXRzID0gW107XG4gICAgY29uc3Qgc2hpcENvcmRzID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IG1pc3NlcyA9IFtdO1xuICAgIGNvbnN0IGJvYXJkID0gW1xuICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF1cbiAgICBdO1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKGNvb3JkcykgPT4ge1xuICAgICAgICBjb25zdCBzaGlwID0gY3JlYXRlU2hpcChjb29yZHMubGVuZ3RoKTtcblxuICAgICAgICBmb3IgKGxldCBjb29yZCBvZiBjb29yZHMpIHtcbiAgICAgICAgICAgIGJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0gPSBzaGlwO1xuICAgICAgICAgICAgc2hpcENvcmRzLmFkZChjb29yZC50b1N0cmluZygpKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2VSYW5kb21TaGlwcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGllY2VzID0gWzQsMywzLDIsMiwyLDEsMSwxLDFdO1xuICAgICAgICBcbiAgICAgICAgd2hpbGUgKHBpZWNlc1swXSkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkLmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5sZW5ndGgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHVwOiBbXSxcbiAgICAgICAgICAgICAgICByaWdodDogW10sXG4gICAgICAgICAgICAgICAgZG93bjogW10sXG4gICAgICAgICAgICAgICAgbGVmdDogW11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGllY2VzWzBdOyBpKyspIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnVwLnB1c2goW3Jvdy1pLCBjb2x1bW5dKTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnJpZ2h0LnB1c2goW3JvdywgY29sdW1uK2ldKTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmRvd24ucHVzaChbcm93K2ksIGNvbHVtbl0pO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubGVmdC5wdXNoKFtyb3csIGNvbHVtbi1pXSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjb29yZCBvZiBvcHRpb25zW29wdGlvbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvb3JkWzBdIDwgMCB8fCBjb29yZFswXSA+IDkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkWzFdIDwgMCB8fCBjb29yZFsxXSA+IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbb3B0aW9uXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwQ29yZHMuaGFzKGNvb3JkLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zW29wdGlvbl0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNbb3B0aW9uXS5sZW5ndGggPT09IHBpZWNlc1swXSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IG9wdGlvbnNbb3B0aW9uXTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgcGllY2VzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKHNlbGVjdGVkKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAoeCx5KSA9PiB7XG4gICAgICAgIGlmIChib2FyZFt4XVt5XSA9PT0gMCAmJiAhbWlzc2VzLmluY2x1ZGVzKFt4LHldKSkge1xuICAgICAgICAgICAgbWlzc2VzLnB1c2goW3gseV0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkW3hdW3ldLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgIGJvYXJkW3hdW3ldLmhpdCgpO1xuICAgICAgICAgICAgaGl0cy5wdXNoKFt4LHldKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IHJvdyBvZiBib2FyZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSBvZiByb3cpIHtcbiAgICAgICAgICAgICAgICBpZiAoaS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmICFpLmlzU3VuaygpKSB7IHJldHVybiBmYWxzZSB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVjaWV2ZVJhbmRvbUF0dGFjayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5sZW5ndGgpO1xuICAgICAgICBsZXQgZHVwbGljYXRlID0gbnVsbDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG1pc3Nlc1tpXVswXSA9PT0geCAmJiBtaXNzZXNbaV1bMV0gPT09IHkpIHtcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChoaXRzW2ldWzBdID09PSB4ICYmIGhpdHNbaV1bMV0gPT09IHkpIHtcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZHVwbGljYXRlKSB7IHJlY2lldmVSYW5kb21BdHRhY2soKSB9XG4gICAgICAgIGVsc2UgeyByZXR1cm4gcmVjaWV2ZUF0dGFjayh4LHkpIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHJlY2lldmVTbWFydEF0dGFjayA9ICgpID0+IHtcbiAgICAgIGxldCBzZWxlY3RlZCA9IG51bGw7XG5cbiAgICAgIGZvciAoY29uc3QgaGl0IG9mIGhpdHMpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICB1cDogW2hpdFswXSAtIDEsIGhpdFsxXV0sXG4gICAgICAgICAgZG93bjogW2hpdFswXSArIDEsIGhpdFsxXV0sXG4gICAgICAgICAgbGVmdDogW2hpdFswXSwgaGl0WzFdIC0gMV0sXG4gICAgICAgICAgcmlnaHQ6IFtoaXRbMF0sIGhpdFsxXSArIDFdXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChjb25zdCBvcHRpb24gaW4gb3B0aW9ucykge1xuICAgICAgICAgIGlmIChvcHRpb25zW29wdGlvbl1bMF0gPCAwIHx8IG9wdGlvbnNbb3B0aW9uXVswXSA+IDkgfHxcbiAgICAgICAgICAgICAgb3B0aW9uc1tvcHRpb25dWzFdIDwgMCB8fCBvcHRpb25zW29wdGlvbl1bMV0gPiA5KSB7XG5cbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zW29wdGlvbl07XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBtaXNzIG9mIG1pc3Nlcykge1xuICAgICAgICAgICAgaWYgKG1pc3NbMF0gPT09IG9wdGlvbnNbb3B0aW9uXVswXSAmJiBtaXNzWzFdID09PSBvcHRpb25zW29wdGlvbl1bMV0pIHtcbiAgICAgICAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gW107XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBmb3IgKGNvbnN0IGhpdCBvZiBoaXRzKSB7XG4gICAgICAgICAgICBpZiAoaGl0WzBdID09PSBvcHRpb25zW29wdGlvbl1bMF0gJiYgaGl0WzFdID09PSBvcHRpb25zW29wdGlvbl1bMV0pIHtcbiAgICAgICAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gW107XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAob3B0aW9uc1tvcHRpb25dLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNlbGVjdGVkID0gb3B0aW9uc1tvcHRpb25dO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBpZiAoc2VsZWN0ZWQpIHsgcmVjaWV2ZUF0dGFjayhzZWxlY3RlZFswXSwgc2VsZWN0ZWRbMV0pIH1cbiAgICAgIGVsc2UgeyByZWNpZXZlUmFuZG9tQXR0YWNrKCkgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgcGxhY2VTaGlwLCBwbGFjZVJhbmRvbVNoaXBzLCBzaGlwQ29yZHMsIHJlY2lldmVBdHRhY2ssIGFsbFNoaXBzU3VuaywgbWlzc2VzLCByZWNpZXZlUmFuZG9tQXR0YWNrLCBoaXRzLCByZWNpZXZlU21hcnRBdHRhY2sgfTtcbn07XG5cbmV4cG9ydCB7IGdhbWVib2FyZCB9O1xuIiwiXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuXG5mdW5jdGlvbiBjcmVhdGVHcmlkKCkge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuXG4gICAgICAgICAgICBkaXYucm93ID0gaTtcbiAgICAgICAgICAgIGRpdi5jb2x1bW4gPSBqO1xuICAgICAgICAgICAgZGl2LmNvb3JkID0gW2ksal07XG5cbiAgICAgICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ3JpZCk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVTaGlwcygpIHtcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3F1YXJlJyk7XG4gICAgY29uc3Qgc3F1YXJlV2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKHNxdWFyZSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1TUVVBUkVfV0lEVEgnKS5zbGljZSgwLC0yKTtcblxuICAgIGNvbnN0IHdpZHRocyA9IFs0LDMsMywyLDIsMiwxLDEsMSwxXTtcbiAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBzLmNsYXNzTGlzdC5hZGQoJ3NoaXBzJyk7XG5cbiAgICBmb3IgKGxldCBwaWVjZSBpbiB3aWR0aHMpIHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgICAgICBzaGlwLnN0eWxlLndpZHRoID0gYCR7d2lkdGhzW3BpZWNlXSAqIHNxdWFyZVdpZHRofXB4YDtcbiAgICAgICAgc2hpcC5zdHlsZS5oZWlnaHQgPSBgJHtzcXVhcmVXaWR0aH1weGA7XG5cbiAgICAgICAgc2hpcHMuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gICAgfTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2hpcHMpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uc0J1dHRvbnMoKSB7XG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25zLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHN1Ym1pdFNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdFNoaXBzLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdCcpO1xuICBzdWJtaXRTaGlwcy5pbm5lclRleHQgPSAnU3VibWl0IFNoaXBzJztcblxuICBjb25zdCByZXNldFNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJlc2V0U2hpcHMuY2xhc3NMaXN0LmFkZCgncmVzZXQnKTtcbiAgcmVzZXRTaGlwcy5pbm5lclRleHQgPSAnUmVzZXQgU2hpcHMnO1xuXG4gIGNvbnN0IHBsYWNlUmFuZG9tbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcGxhY2VSYW5kb21seS5jbGFzc0xpc3QuYWRkKCdwbGFjZS1yYW5kb21seScpO1xuICBwbGFjZVJhbmRvbWx5LmlubmVyVGV4dCA9ICdQbGFjZSBTaGlwcyBSYW5kb21seSc7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRTaGlwcyk7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzZXRTaGlwcyk7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocGxhY2VSYW5kb21seSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVNaW5pR3JpZCgpIHtcbiAgY29uc3QgbWluaUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWluaUdyaWQuY2xhc3NMaXN0LmFkZCgnbWluaS1ncmlkJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAxMDsgaysrKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtaW5pLXNxdWFyZScpO1xuXG4gICAgICBtaW5pR3JpZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH07XG4gIH07XG5cbiAgYm9keS5hcHBlbmRDaGlsZChtaW5pR3JpZCk7XG59O1xuXG5mdW5jdGlvbiB1cGRhdGVNaW5pR3JpZChwbGF5ZXJCb2FyZCkge1xuICBsZXQgc2hpcENvcmRzQXJyID0gW107XG5cbiAgZm9yIChjb25zdCBlbnRyeSBvZiBwbGF5ZXJCb2FyZC5zaGlwQ29yZHMuZW50cmllcygpKSB7XG4gICAgc2hpcENvcmRzQXJyLnB1c2goZW50cnlbMF0uc3BsaXQoJywnKS5tYXAoTnVtYmVyKSlcbiAgfTtcblxuICBjb25zdCBtaW5pR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW5pLWdyaWQnKTtcbiAgY29uc3QgZ3JpZENvcmRzID0gc2hpcENvcmRzQXJyLm1hcChjb29yZHMgPT4gW2Nvb3Jkc1swXSArIDEsIGNvb3Jkc1sxXSArIDFdKTtcbiAgY29uc3QgbWlzc2VzID0gcGxheWVyQm9hcmQubWlzc2VzLm1hcChjb29yZHMgPT4gW2Nvb3Jkc1swXSArIDEsIGNvb3Jkc1sxXSArIDFdKTtcbiAgY29uc3QgaGl0cyA9IHBsYXllckJvYXJkLmhpdHMubWFwKGNvb3JkcyA9PiBbY29vcmRzWzBdICsgMSwgY29vcmRzWzFdICsgMV0pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZENvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21pbmktc2hpcCcpO1xuXG4gICAgZGl2LnN0eWxlLmdyaWRSb3cgPSBbZ3JpZENvcmRzW2ldWzBdXTtcbiAgICBkaXYuc3R5bGUuZ3JpZENvbHVtbiA9IFtncmlkQ29yZHNbaV1bMV1dO1xuXG4gICAgbWluaUdyaWQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1pc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG5cbiAgICBkaXYuc3R5bGUuZ3JpZFJvdyA9IFttaXNzZXNbaV1bMF1dO1xuICAgIGRpdi5zdHlsZS5ncmlkQ29sdW1uID0gW21pc3Nlc1tpXVsxXV07XG5cbiAgICBtaW5pR3JpZC5hcHBlbmRDaGlsZChkaXYpO1xuICB9O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaGl0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcblxuICAgIGRpdi5zdHlsZS5ncmlkUm93ID0gW2hpdHNbaV1bMF1dO1xuICAgIGRpdi5zdHlsZS5ncmlkQ29sdW1uID0gW2hpdHNbaV1bMV1dO1xuXG4gICAgbWluaUdyaWQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfTtcbiAgXG59O1xuXG5mdW5jdGlvbiBhdHRhY2tQaGFzZShwbGF5ZXIpIHtcbiAgcmVzZXRCb2R5KCk7XG4gIGNyZWF0ZUdyaWQoKTtcbiAgY3JlYXRlTWluaUdyaWQoKTtcbiAgdXBkYXRlTWluaUdyaWQocGxheWVyLnBsYXllckJvYXJkKTtcblxufTtcblxuZnVuY3Rpb24gcmVzZXRCb2R5KCkge1xuICBib2R5LmlubmVySFRNTCA9ICcnO1xuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59O1xuXG5mdW5jdGlvbiBzZXR1cFNoaXBzKCkge1xuICAgIHJlc2V0Qm9keSgpO1xuICAgIGNyZWF0ZUdyaWQoKTtcbiAgICBjcmVhdGVTaGlwcygpO1xuICAgIGNyZWF0ZU9wdGlvbnNCdXR0b25zKCk7XG59O1xuXG5mdW5jdGlvbiBkaXNwbGF5V2lubmVyKHdpbm5lcikge1xuICBjb25zdCB3aW5uZXJNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2lubmVyTXNnLmNsYXNzTGlzdC5hZGQoJ3dpbm5lci1tc2cnKTtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi5pbm5lclRleHQgPSAnV2lubmVyIGlzOic7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEuaW5uZXJUZXh0ID0gYCR7d2lubmVyLm5hbWV9IWA7XG4gIHdpbm5lck1zZy5hcHBlbmRDaGlsZChoMik7XG4gIHdpbm5lck1zZy5hcHBlbmRDaGlsZChoMSk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoJ2dhbWUtb3Zlci1vcHRpb25zJyk7XG4gIGNvbnN0IGNoYW5nZU1vZGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2hhbmdlTW9kZUJ0bi5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UtbW9kZScpO1xuICBjaGFuZ2VNb2RlQnRuLmlubmVyVGV4dCA9ICdDaGFuZ2UgTW9kZSc7XG4gIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwbGF5QWdhaW5CdG4uY2xhc3NMaXN0LmFkZCgncGxheS1hZ2FpbicpO1xuICBwbGF5QWdhaW5CdG4uaW5uZXJUZXh0ID0gJ1BsYXkgQWdhaW4nO1xuICBvcHRpb25zLmFwcGVuZENoaWxkKGNoYW5nZU1vZGVCdG4pO1xuICBvcHRpb25zLmFwcGVuZENoaWxkKHBsYXlBZ2FpbkJ0bik7XG5cbiAgd2lubmVyTXNnLmFwcGVuZENoaWxkKG9wdGlvbnMpO1xuXG4gIGJvZHkuaW5zZXJ0QmVmb3JlKHdpbm5lck1zZywgYm9keS5jaGlsZHJlblswXSk7XG59O1xuXG5leHBvcnQgeyBzZXR1cFNoaXBzLCBhdHRhY2tQaGFzZSwgdXBkYXRlTWluaUdyaWQsIGRpc3BsYXlXaW5uZXIgfTtcbiIsImltcG9ydCB7IHJlc2V0Qm9hcmQgfSBmcm9tICcuL3Jlc2V0QnRuLmpzJztcblxuZnVuY3Rpb24gZ2VuQ29vcmRzKHNxdWFyZXNUYWtlblVwKSB7Ly9nZW5lcmF0ZXMgY29vcmRzIGZvciBwbGFjZS1yYW5kb21seSBidG5cbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyk7XG5cbiAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuICBjb25zdCBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB1cDogW10sXG4gICAgcmlnaHQ6IFtdLFxuICAgIGRvd246IFtdLFxuICAgIGxlZnQ6IFtdXG4gIH07XG5cbiAgbGV0IHNlbGVjdGVkID0gbnVsbDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZXNUYWtlblVwOyBpKyspIHtcbiAgICBvcHRpb25zLnVwLnB1c2goW3Jvdy1pLCBjb2x1bW5dKTtcbiAgICBvcHRpb25zLnJpZ2h0LnB1c2goW3JvdywgY29sdW1uK2ldKTtcbiAgICBvcHRpb25zLmRvd24ucHVzaChbcm93K2ksIGNvbHVtbl0pO1xuICAgIG9wdGlvbnMubGVmdC5wdXNoKFtyb3csIGNvbHVtbi1pXSk7XG4gIH07XG5cbiAgZm9yIChjb25zdCBvcHRpb24gaW4gb3B0aW9ucykge1xuXG4gICAgZm9yIChjb25zdCBjb29yZCBvZiBvcHRpb25zW29wdGlvbl0pIHtcbiAgICAgIGlmIChjb29yZFswXSA+IDEwIHx8IGNvb3JkWzBdIDwgMSB8fFxuICAgICAgICBjb29yZFsxXSA+IDEwIHx8IGNvb3JkWzFdIDwgMSkge1xuICAgICAgICBvcHRpb25zW29wdGlvbl0gPSBbXTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChncmlkLnNoaXBzLmhhcyhjb29yZC50b1N0cmluZygpKSkge1xuICAgICAgICBvcHRpb25zW29wdGlvbl0gPSBbXTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zW29wdGlvbl0ubGVuZ3RoID09PSBzcXVhcmVzVGFrZW5VcCkge1xuICAgICAgc2VsZWN0ZWQgPSB7W29wdGlvbl06IG9wdGlvbnNbb3B0aW9uXX07XG4gICAgfTtcbiAgfTtcblxuICBpZiAoc2VsZWN0ZWQpIHsgcmV0dXJuIHNlbGVjdGVkIH1cbiAgZWxzZSB7IHJldHVybiBnZW5Db29yZHMoc3F1YXJlc1Rha2VuVXApIH07XG59O1xuXG5mdW5jdGlvbiBwbGFjZVJhbmRvbWx5KCkge1xuICByZXNldEJvYXJkKCk7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpO1xuICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwcycpO1xuICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3F1YXJlJyk7XG4gIGNvbnN0IHNxdWFyZVdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShzcXVhcmUpLmdldFByb3BlcnR5VmFsdWUoJy0tU1FVQVJFX1dJRFRIJykuc2xpY2UoMCwtMik7XG5cbiAgWy4uLnNoaXBzQ29udGFpbmVyLmNoaWxkcmVuXS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgIGNvbnN0IHNxdWFyZXNUYWtlblVwID0gc2hpcC5zdHlsZS53aWR0aC5zbGljZSgwLC0yKSAvIHNxdWFyZVdpZHRoO1xuICAgIGNvbnN0IGNvb3JkcyA9IGdlbkNvb3JkcyhzcXVhcmVzVGFrZW5VcCk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gT2JqZWN0LmtleXMoY29vcmRzKVswXTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJyB8fCBkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHNoaXAuY29vcmRzID0gY29vcmRzW2RpcmVjdGlvbl07XG4gICAgICBzaGlwLnN0eWxlLmdyaWRSb3cgPSBjb29yZHNbZGlyZWN0aW9uXVswXVswXTtcbiAgICAgIHNoaXAuc3R5bGUuZ3JpZENvbHVtbiA9IGNvb3Jkc1tkaXJlY3Rpb25dWzBdWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb29yZHNbZGlyZWN0aW9uXSA9IGNvb3Jkc1tkaXJlY3Rpb25dLnJldmVyc2UoKTtcbiAgICAgIHNoaXAuY29vcmRzID0gY29vcmRzW2RpcmVjdGlvbl07XG5cbiAgICAgIHNoaXAuc3R5bGUuZ3JpZFJvdyA9IGNvb3Jkc1tkaXJlY3Rpb25dWzBdWzBdO1xuICAgICAgc2hpcC5zdHlsZS5ncmlkQ29sdW1uID0gY29vcmRzW2RpcmVjdGlvbl1bMF1bMV07XG4gICAgfTtcblxuICAgIGNvbnN0IGhlaWdodCA9IHNoaXAuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsLTIpO1xuICAgIGNvbnN0IHdpZHRoID0gc2hpcC5zdHlsZS53aWR0aC5zbGljZSgwLC0yKTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICd1cCcgfHwgZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgIHNoaXAuc3R5bGUud2lkdGggPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgc2hpcC5zdHlsZS5oZWlnaHQgPSBgJHt3aWR0aH1weGA7XG4gICAgfTtcblxuICAgIGdyaWQuYXBwZW5kQ2hpbGQoc2hpcCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3Jkc1tkaXJlY3Rpb25dLmxlbmd0aDsgaSsrKSB7XG4gICAgICBncmlkLnNoaXBzLmFkZChjb29yZHNbZGlyZWN0aW9uXVtpXS50b1N0cmluZygpKTtcbiAgICB9O1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IHBsYWNlUmFuZG9tbHkgfTtcbiIsImltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZC5qc1wiO1xuXG5mdW5jdGlvbiBwbGF5ZXIoKSB7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBnYW1lYm9hcmQoKTtcblxuICAgIHJldHVybiB7IHBsYXllckJvYXJkIH07XG59O1xuXG5leHBvcnQgeyBwbGF5ZXIgfTsiLCJcbmZ1bmN0aW9uIHJlc2V0Qm9hcmQoKSB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpO1xuICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwcycpO1xuICBjb25zdCBzaGlwcyA9IFsuLi5ncmlkLmNoaWxkcmVuXS5maWx0ZXIoc2hpcCA9PiBzaGlwLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpKTtcbiAgZ3JpZC5zaGlwcyA9IG5ldyBTZXQoKTtcblxuICBbLi4uc2hpcHNdLmZvckVhY2goc2hpcCA9PiB7XG4gICAgY29uc3QgaGVpZ2h0ID0gc2hpcC5zdHlsZS5oZWlnaHQuc2xpY2UoMCwtMik7XG4gICAgY29uc3Qgd2lkdGggPSBzaGlwLnN0eWxlLndpZHRoLnNsaWNlKDAsLTIpO1xuXG4gICAgaWYgKCtoZWlnaHQgPiArd2lkdGgpIHtcbiAgICAgIHNoaXAuc3R5bGUuaGVpZ2h0ID0gYCR7d2lkdGh9cHhgO1xuICAgICAgc2hpcC5zdHlsZS53aWR0aCA9IGAke2hlaWdodH1weGA7XG4gICAgfTtcblxuICAgIHNoaXAuY29vcmRzID0gW107XG4gICAgc2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gIH0pOyAgICBcbn07XG5cbmV4cG9ydCB7IHJlc2V0Qm9hcmQgfTtcbiIsIlxuZnVuY3Rpb24gc2V0dXBCb2FyZFBoYXNlKCkge1xuICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJyk7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpO1xuICBncmlkLnNoaXBzID0gbmV3IFNldCgpO1xuXG4gIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7XG4gICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG5cbiAgICAgIGlmIChzaGlwLmNvb3Jkcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZ3JpZC5zaGlwcy5kZWxldGUoc2hpcC5jb29yZHNbaV0udG9TdHJpbmcoKSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xuICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICAgIH0pO1xuXG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHdpZHRoID0gc2hpcC5zdHlsZS53aWR0aC5zbGljZSgwLC0yKTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHNoaXAuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsLTIpO1xuXG4gICAgICBpZiAod2lkdGggPiA1MCB8fCBoZWlnaHQgPiA1MCkge1xuICAgICAgICBzaGlwLnN0eWxlLmhlaWdodCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgc2hpcC5zdHlsZS53aWR0aCA9IGAke2hlaWdodH1weGA7XG4gICAgICB9O1xuXG4gICAgICBpZiAoc2hpcC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZ3JpZCcpKSB7XG4gICAgICAgIGlmICgrd2lkdGggPiAraGVpZ2h0KSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwLmNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZ3JpZC5zaGlwcy5kZWxldGUoc2hpcC5jb29yZHNbaV0udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBzaGlwLmNvb3Jkc1tpXVsxXSA9IHNoaXAuY29vcmRzWzBdWzFdO1xuICAgICAgICAgICAgc2hpcC5jb29yZHNbaV1bMF0gPSBzaGlwLmNvb3Jkc1tpXVswXSArIGk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXAuY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBncmlkLnNoaXBzLmRlbGV0ZShzaGlwLmNvb3Jkc1tpXS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHNoaXAuY29vcmRzW2ldWzBdID0gc2hpcC5jb29yZHNbMF1bMF07XG4gICAgICAgICAgICBzaGlwLmNvb3Jkc1tpXVsxXSA9IHNoaXAuY29vcmRzW2ldWzFdICsgaTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5jb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZ3JpZC5zaGlwcy5oYXMoc2hpcC5jb29yZHNbaV0udG9TdHJpbmcoKSkpIHsgc2hpcC5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZWQnIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgY2FsY3VsYXRlR3JpZFNldCgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7Ly9ncmlkIGlzbnQgemVybyBpbmRleGVkXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGUudGFyZ2V0ID09PSBncmlkKSB7XG4gICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJyk7XG4gICAgICBjb25zdCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGNvbnN0IHJvdyA9IE1hdGgucm91bmQoKGUuY2xpZW50WSAtIHJlY3QudG9wKSAvIDUwKTtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IE1hdGgucm91bmQoKGUuY2xpZW50WCAtIHJlY3QubGVmdCkgLyA1MCk7XG4gICAgICBzaGlwLnN0eWxlLmdyaWRSb3cgPSByb3c7XG4gICAgICBzaGlwLnN0eWxlLmdyaWRDb2x1bW4gPSBjb2x1bW47XG5cbiAgICAgIGNvbnN0IHNoaXBIZWlnaHQgPSBzaGlwLnN0eWxlLmhlaWdodC5zbGljZSgwLC0yKTtcbiAgICAgIGNvbnN0IHNoaXBXaWR0aCA9IHNoaXAuc3R5bGUud2lkdGguc2xpY2UoMCwtMik7XG5cbiAgICAgIHNoaXAuY29vcmRzID0gW107XG5cbiAgICAgIGlmICgrc2hpcEhlaWdodCA+ICtzaGlwV2lkdGgpIHtcbiAgICAgICAgbGV0IHNxdWFyZXNTaGlwVGFrZXNVcCA9ICtzaGlwSGVpZ2h0IC8gNTA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzU2hpcFRha2VzVXA7IGkrKykge1xuICAgICAgICAgIHNoaXAuY29vcmRzLnB1c2goW3JvdytpLCBjb2x1bW5dKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBzcXVhcmVzU2hpcFRha2VzVXAgPSBzaGlwV2lkdGggLyA1MDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZXNTaGlwVGFrZXNVcDsgaSsrKSB7XG4gICAgICAgICAgc2hpcC5jb29yZHMucHVzaChbcm93LCBjb2x1bW4raV0pO1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgc2hpcC5zdHlsZS5ib3JkZXJDb2xvciA9ICduYXZ5JztcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2hpcC5jb29yZHNbaV1bMF0gPiAxMCB8fFxuICAgICAgICAgICAgc2hpcC5jb29yZHNbaV1bMF0gPCAxIHx8XG4gICAgICAgICAgICBzaGlwLmNvb3Jkc1tpXVsxXSA+IDEwIHx8XG4gICAgICAgICAgICBzaGlwLmNvb3Jkc1tpXVsxXSA8IDEpIHtcbiAgICAgICAgICBzaGlwLnN0eWxlLmJvcmRlckNvbG9yID0gJ3JlZCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZ3JpZC5zaGlwcy5oYXMoc2hpcC5jb29yZHNbaV0udG9TdHJpbmcoKSkpIHsgc2hpcC5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZWQnIH1cbiAgICAgIH07XG5cbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2FsY3VsYXRlR3JpZFNldCgpIHtcbiAgICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwcycpO1xuICAgIGNvbnN0IHNoaXBzID0gWy4uLmdyaWQuY2hpbGRyZW5dLmZpbHRlcihzaGlwID0+IHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpO1xuICAgIGdyaWQuc2hpcHMgPSBuZXcgU2V0KCk7XG5cbiAgICBbLi4uc2hpcHNdLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICBpZiAoc2hpcC5zdHlsZS5ib3JkZXJDb2xvciA9PT0gJ3JlZCcpIHtcbiAgICAgICAgc2hpcC5jb29yZHMgPSBbXTtcbiAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXJDb2xvciA9ICduYXZ5JztcbiAgICAgICAgc2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZ3JpZC5zaGlwcy5hZGQoc2hpcC5jb29yZHNbaV0udG9TdHJpbmcoKSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBjYWxjdWxhdGVHcmlkU2V0KTtcbn07XG5cbmV4cG9ydCB7IHNldHVwQm9hcmRQaGFzZSB9O1xuIiwiXG5mdW5jdGlvbiBnZXRTdWJtaXRlZENvb3JkcygpIHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyk7XG4gIGNvbnN0IHBsYWNlZFNoaXBzID0gWy4uLmdyaWQuY2hpbGRyZW5dLmZpbHRlcihzaGlwID0+IHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpO1xuICBjb25zdCBhbGxDb29yZHMgPSBbXTtcblxuICBpZiAocGxhY2VkU2hpcHMubGVuZ3RoID09PSAxMCkge1xuICAgIHBsYWNlZFNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICBhbGxDb29yZHMucHVzaChzaGlwLmNvb3Jkcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWxsQ29vcmRzO1xuICB9O1xufTtcblxuZnVuY3Rpb24gc3VibWl0Q29vcmRzKHBsYXllcikge1xuICBjb25zdCBzdWJtaXRlZENvb3JkcyA9IGdldFN1Ym1pdGVkQ29vcmRzKCk7XG5cbiAgaWYgKHN1Ym1pdGVkQ29vcmRzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJtaXRlZENvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgc3VibWl0ZWRDb29yZHNbaV0gPSBzdWJtaXRlZENvb3Jkc1tpXS5tYXAoY29vcmQgPT4gW2Nvb3JkWzBdLTEsIGNvb3JkWzFdLTFdKTtcbiAgICAgIHBsYXllci5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoc3VibWl0ZWRDb29yZHNbaV0pO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ25vdCBhbGwgc2hpcHMgcGxhY2VkIHZhbGlkbHknKTtcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHN1Ym1pdENvb3JkcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiJ3VzZSBzdHJpY3QnO1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblV0aWxpdHkgc3R5bGVzID0+IHN0eWxlLmNzc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2hvbWUuY3NzJztcbmltcG9ydCAnLi9nYW1lLmNzcyc7XG5cbmltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tICcuL2NyZWF0ZVNoaXAuanMnO1xuaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSAnLi9wbGF5ZXIuanMnO1xuaW1wb3J0IHsgc2V0dXBTaGlwcywgYXR0YWNrUGhhc2UsIHVwZGF0ZU1pbmlHcmlkLCBkaXNwbGF5V2lubmVyIH0gZnJvbSAnLi9oYW5kbGVET00uanMnO1xuaW1wb3J0IHsgcmVzZXRCb2FyZCB9IGZyb20gJy4vcmVzZXRCdG4uanMnO1xuaW1wb3J0IHsgcGxhY2VSYW5kb21seSB9IGZyb20gJy4vcGxhY2VSYW5kb21seUJ0bi5qcyc7XG5pbXBvcnQgeyBzdWJtaXRDb29yZHMgfSBmcm9tICcuL3N1Ym1pdEJ0bi5qcyc7XG5pbXBvcnQgeyBzZXR1cEJvYXJkUGhhc2UgfSBmcm9tIFwiLi9zZXR1cEJvYXJkUGhhc2UuanNcIjtcblxubGV0IGdhbWVtb2RlID0gbnVsbDtcbmxldCBhY3RpdmVQbGF5ZXIgPSBudWxsO1xuY29uc3Qgc2luZ2xlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpbmdsZScpO1xuY29uc3QgZG91YmxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvdWJsZScpO1xuXG5mdW5jdGlvbiBwbGF5ZXJBdHRhY2soZSwgZGVmZW5kaW5nUGxheWVyKSB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIGNvbnN0IHJvdyA9IE1hdGguY2VpbCgoZS5jbGllbnRZIC0gcmVjdC50b3ApIC8gNTApO1xuICBjb25zdCBjb2x1bW4gPSBNYXRoLmNlaWwoKGUuY2xpZW50WCAtIHJlY3QubGVmdCkgLyA1MCk7XG5cbiAgZGl2LnN0eWxlLmdyaWRSb3cgPSByb3c7XG4gIGRpdi5zdHlsZS5ncmlkQ29sdW1uID0gY29sdW1uO1xuXG4gIGlmIChkZWZlbmRpbmdQbGF5ZXIucGxheWVyQm9hcmQucmVjaWV2ZUF0dGFjayhyb3ctMSwgY29sdW1uLTEpKSB7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICB9IGVsc2Uge1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gIH07XG5cbiAgZ3JpZC5hcHBlbmRDaGlsZChkaXYpO1xufTtcblxuZnVuY3Rpb24gY3B1QXR0YWNrKHBsYXllcikge1xuICBwbGF5ZXIucGxheWVyQm9hcmQucmVjaWV2ZVNtYXJ0QXR0YWNrKCk7XG4gIHVwZGF0ZU1pbmlHcmlkKHBsYXllci5wbGF5ZXJCb2FyZCk7XG59O1xuXG5mdW5jdGlvbiBjaGFuZ2VNb2RlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gIGJvZHkuaW5uZXJIVE1MID0gJydcbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRuLWNvbnRhaW5lcicpO1xuICBjb25zdCBzaW5nbGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc2luZ2xlQnRuLmlkID0gJ3NpbmdsZSc7XG4gIHNpbmdsZUJ0bi5pbm5lclRleHQgPSAnU2luZ2xlIFBsYXllciAodnMgQ1BVKSc7XG4gIGNvbnN0IGRvdWJsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkb3VibGVCdG4uaWQgPSAnZG91YmxlJztcbiAgZG91YmxlQnRuLmlubmVyVGV4dCA9ICdEb3VibGUgUGxheWVyIChMb2NhbCBwbGF5KSc7XG5cbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpbmdsZUJ0bik7XG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChkb3VibGVCdG4pO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcblxuICBzaW5nbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaW5nbGVQbGF5ZXIpO1xuICBkb3VibGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb3VibGVQbGF5ZXIpO1xufTtcblxuZnVuY3Rpb24gcGxheUFnYWluKGdhbWVtb2RlKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGlmIChnYW1lbW9kZSA9PT0gJ3NpbmdsZScpIHtcbiAgICBzaW5nbGVQbGF5ZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBkb3VibGVQbGF5ZXIoKTtcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGNoZWNrRm9yV2lubmVycyhwbGF5ZXJPbmUsIHBsYXllclR3bykge1xuICBsZXQgd2lubmVyID0gbnVsbDtcblxuICBpZiAocGxheWVyVHdvLnBsYXllckJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgd2lubmVyID0gcGxheWVyT25lO1xuICB9IGVsc2UgaWYgKHBsYXllck9uZS5wbGF5ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgIHdpbm5lciA9IHBsYXllclR3bztcbiAgfTtcblxuICBpZiAod2lubmVyKSB7XG4gICAgZGlzcGxheVdpbm5lcih3aW5uZXIpO1xuICAgIGNvbnN0IGNoYW5nZU1vZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLW1vZGUnKTtcbiAgICBjaGFuZ2VNb2RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlTW9kZSk7XG4gICAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXktYWdhaW4nKTtcbiAgICBwbGF5QWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwbGF5QWdhaW4oZ2FtZW1vZGUpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyk7XG4gICAgZ3JpZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGdyaWRDbGlja2VkKTtcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGdyaWRDbGlja2VkKGUsIHBsYXllck9uZSwgcGxheWVyVHdvKSB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpO1xuXG4gIGlmIChlLnRhcmdldCA9PT0gZ3JpZCkge1xuICAgIHBsYXllckF0dGFjayhlLCBncmlkLnBsYXllclR3byk7XG4gICAgY3B1QXR0YWNrKGdyaWQucGxheWVyT25lKTtcbiAgICBjaGVja0Zvcldpbm5lcnMoZ3JpZC5wbGF5ZXJPbmUsIGdyaWQucGxheWVyVHdvKTtcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIHNpbmdsZUdhbWVMb29wKHBsYXllck9uZSwgcGxheWVyVHdvKSB7XG4gIGF0dGFja1BoYXNlKHBsYXllck9uZSk7XG5cbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyk7XG4gIGdyaWQucGxheWVyT25lID0gcGxheWVyT25lO1xuICBncmlkLnBsYXllclR3byA9IHBsYXllclR3bztcbiAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdyaWRDbGlja2VkKTtcbn07XG5cbmZ1bmN0aW9uIHNpbmdsZVBsYXllcigpIHtcbiAgZ2FtZW1vZGUgPSAnc2luZ2xlJztcbiAgc2V0dXBTaGlwcygpO1xuICBzZXR1cEJvYXJkUGhhc2UoKTtcblxuICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldCcpO1xuICBjb25zdCBwbGFjZVJhbmRvbWx5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlLXJhbmRvbWx5Jyk7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcblxuICBjb25zdCBwbGF5ZXJPbmUgPSBwbGF5ZXIoKTtcbiAgcGxheWVyT25lLm5hbWUgPSAncGxheWVyJztcbiAgY29uc3QgY3B1ID0gcGxheWVyKCk7XG4gIGNwdS5uYW1lID0gJ2NvbXB1dGVyJztcblxuICByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0Qm9hcmQpO1xuICBwbGFjZVJhbmRvbWx5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VSYW5kb21seSk7XG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzdWJtaXRDb29yZHMocGxheWVyT25lKTtcbiAgICBjcHUucGxheWVyQm9hcmQucGxhY2VSYW5kb21TaGlwcygpO1xuICAgIHNpbmdsZUdhbWVMb29wKHBsYXllck9uZSwgY3B1KTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBkb3VibGVQbGF5ZXIoKSB7XG4gIGdhbWVtb2RlID0gJ2RvdWJsZSc7XG4gIHNldHVwU2hpcHMoKTtcbiAgc2V0dXBCb2FyZFBoYXNlKCk7XG5cbiAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKTtcbiAgY29uc3QgcGxhY2VSYW5kb21seUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZS1yYW5kb21seScpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG5cbiAgY29uc3QgcGxheWVyT25lID0gcGxheWVyKCk7XG4gIHBsYXllck9uZS5uYW1lID0gJ1BsYXllciBPbmUnO1xuICBjb25zdCBwbGF5ZXJUd28gPSBwbGF5ZXIoKTtcbiAgcGxheWVyVHdvLm5hbWUgPSAnUGxheWVyIFR3byc7XG5cbiAgYWN0aXZlUGxheWVyID0gcGxheWVyT25lO1xuXG4gIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRCb2FyZCk7XG4gIHBsYWNlUmFuZG9tbHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVJhbmRvbWx5KTtcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHN1Ym1pdENvb3JkcyhhY3RpdmVQbGF5ZXIpO1xuXG4gICAgaWYgKGFjdGl2ZVBsYXllciA9PT0gcGxheWVyT25lKSB7XG4gICAgICByZXNldEJvYXJkKCk7XG4gICAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJUd287XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2ZVBsYXllciA9IHBsYXllck9uZTtcbiAgICAgIGRvdWJsZUdhbWVMb29wKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbiAgICB9O1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGRvdWJsZUdhbWVMb29wKHBsYXllck9uZSwgcGxheWVyVHdvKSB7XG4gIGNvbnNvbGUubG9nKCdzdGFydCBnYW1lIChkb3VibGUgcGxheWVyKScpO1xufTtcblxuc2luZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2luZ2xlUGxheWVyKTtcbmRvdWJsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvdWJsZVBsYXllcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=