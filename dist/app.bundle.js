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

  --MESSAGE_BG_COLOR: #fff;
}

* {
  user-select: none;
}

body {
  padding: 100px 0px 100px 0px;
  flex-direction: column;
  gap: 25px;
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

  background-color: var(--MESSAGE_BG_COLOR);
  border: var(--GRID_BORDER);
}

.game-over-options {
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.pass-device {
  width: 450px;
  height: 450px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  position: absolute;

  background-color: var(--MESSAGE_BG_COLOR);
  border: var(--GRID_BORDER);
}
`, "",{"version":3,"sources":["webpack://./src/game.css"],"names":[],"mappings":";AACA;EACE,mBAAmB;EACnB,0BAA0B;EAC1B,8BAA8B;;EAE9B,oBAAoB;EACpB,qBAAqB;;EAErB,qBAAqB;EACrB,2BAA2B;EAC3B,6BAA6B;;EAE7B,yBAAyB;EACzB,sBAAsB;;EAEtB,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,4BAA4B;EAC5B,sBAAsB;EACtB,SAAS;AACX;;AAEA;;EAEE,wBAAwB;EACxB,yBAAyB;EACzB,uCAAuC;EACvC,oCAAoC;EACpC,aAAa;EACb,0BAA0B;EAC1B,gBAAgB;AAClB;AACA;;EAEE,0BAA0B;EAC1B,4BAA4B;EAC5B,0BAA0B;EAC1B,sCAAsC;EACtC,WAAW;AACb;;AAEA;EACE,wBAAwB;EACxB,eAAe;EACf,aAAa;EACb,SAAS;AACX;AACA;EACE,sCAAsC;EACtC,0BAA0B;EAC1B,YAAY;AACd;AACA;EACE,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;EAEE,0BAA0B;EAC1B,4BAA4B;EAC5B,sCAAsC;EACtC,0BAA0B;EAC1B,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,yCAAyC;;EAEzC,yBAAyB;EACzB,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,MAAM;EACN,SAAS;AACX;AACA;;EAEE,wBAAwB;AAC1B;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,wCAAwC;EACxC,yCAAyC;EACzC,uCAAuC;EACvC,oCAAoC;AACtC;AACA;EACE,qCAAqC;EACrC,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;EACtC,0BAA0B;AAC5B;;AAEA;;EAEE,qCAAqC;EACrC,sCAAsC;AACxC;AACA;;;;EAIE,WAAW;AACb;AACA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,aAAa;;EAEb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;;EAET,yCAAyC;EACzC,0BAA0B;AAC5B;;AAEA;EACE,aAAa;;EAEb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;;EAEb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;;EAET,kBAAkB;;EAElB,yCAAyC;EACzC,0BAA0B;AAC5B","sourcesContent":["\n:root {\n  --GRID_WIDTH: 502px;\n  --GRID_BG_COLOR: lightblue;\n  --GRID_BORDER: 1px solid black;\n\n  --SQUARE_WIDTH: 50px;\n  --SQUARE_HEIGHT: 50px;\n\n  --SHIP_BG_COLOR: #aaa;\n  --SHIP_DRAGGING_COLOR: #ccc;\n  --SHIP_BORDER: 2px solid navy;\n\n  --MISS_CROSS_COLOR: black;\n  --HIT_CROSS_COLOR: red;\n\n  --MESSAGE_BG_COLOR: #fff;\n}\n\n* {\n  user-select: none;\n}\n\nbody {\n  padding: 100px 0px 100px 0px;\n  flex-direction: column;\n  gap: 25px;\n}\n\n.grid,\n.mini-grid {\n  width: var(--GRID_WIDTH);\n  height: var(--GRID_WIDTH);\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n  display: grid;\n  border: var(--GRID_BORDER);\n  overflow: hidden;\n}\n.square,\n.mini-square {\n  width: var(--SQUARE_WIDTH);\n  height: var(--SQUARE_HEIGHT);\n  border: var(--GRID_BORDER);\n  background-color: var(--GRID_BG_COLOR);\n  z-index: -1;\n}\n\n.ships {\n  width: var(--GRID_WIDTH);\n  flex-wrap: wrap;\n  display: flex;\n  gap: 10px;\n}\n.ship {\n  background-color: var(--SHIP_BG_COLOR);\n  border: var(--SHIP_BORDER);\n  cursor: move;\n}\n.ship.dragging {\n  background-color: var(--SHIP_DRAGGING_COLOR);\n}\n\n.buttons-container {\n  display: flex;\n  gap: 10px;\n}\n\n.miss,\n.hit {\n  width: var(--SQUARE_WIDTH);\n  height: var(--SQUARE_HEIGHT);\n  background-color: var(--GRID_BG_COLOR);\n  border: var(--GRID_BORDER);\n  position: relative;\n}\n.miss:before, .miss:after,\n.hit:before, .hit:after {\n  width: 100%;\n  height: 10px;\n  content: '';\n  margin: auto;\n  background-color: var(--MISS_CROSS_COLOR);\n\n  transform: rotate(-45deg);\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.miss:after,\n.hit:after {\n  transform: rotate(45deg);\n}\n\n.hit:before, .hit:after {\n  background-color: var(--HIT_CROSS_COLOR);\n}\n\n.mini-grid {\n  width: calc(var(--GRID_WIDTH) / 2 + 1px);\n  height: calc(var(--GRID_WIDTH) / 2 + 1px);\n  grid-template-columns: repeat(10, 25px);\n  grid-template-rows: repeat(10, 25px);\n}\n.mini-square {\n  width: calc(var(--SQUARE_HEIGHT) / 2);\n  height: calc(var(--SQUARE_HEIGHT) / 2);\n}\n\n.mini-ship {\n  background-color: var(--SHIP_BG_COLOR);\n  border: var(--GRID_BORDER);\n}\n\n.mini-grid > .miss,\n.mini-grid > .hit {\n  width: calc(var(--SQUARE_HEIGHT) / 2);\n  height: calc(var(--SQUARE_HEIGHT) / 2);\n}\n.mini-grid > .miss:before,\n.mini-grid > .hit:before,\n.mini-grid > .miss:after,\n.mini-grid > .hit:after {\n  height: 5px;\n}\n.mini-grid > .hit {\n  background-color: transparent;\n}\n\n.winner-msg {\n  width: 500px;\n  padding: 10px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n\n  background-color: var(--MESSAGE_BG_COLOR);\n  border: var(--GRID_BORDER);\n}\n\n.game-over-options {\n  padding: 10px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.pass-device {\n  width: 450px;\n  height: 450px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n\n  position: absolute;\n\n  background-color: var(--MESSAGE_BG_COLOR);\n  border: var(--GRID_BORDER);\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   clearGrid: () => (/* binding */ clearGrid),
/* harmony export */   clearMiniGrid: () => (/* binding */ clearMiniGrid),
/* harmony export */   displayActivePlayer: () => (/* binding */ displayActivePlayer),
/* harmony export */   displayBothBoards: () => (/* binding */ displayBothBoards),
/* harmony export */   displayWinner: () => (/* binding */ displayWinner),
/* harmony export */   passDevice: () => (/* binding */ passDevice),
/* harmony export */   setupShips: () => (/* binding */ setupShips),
/* harmony export */   updateGrid: () => (/* binding */ updateGrid),
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

function updateGrid(playerBoard) {
  const grid = document.querySelector('.grid');
  const misses = playerBoard.misses.map(coords => [coords[0] + 1, coords[1] + 1]);
  const hits = playerBoard.hits.map(coords => [coords[0] + 1, coords[1] + 1]);

  for (let i = 0; i < misses.length; i++) {
    const div = document.createElement('div');
    div.classList.add('miss');

    div.style.gridRow = [misses[i][0]];
    div.style.gridColumn = [misses[i][1]];

    grid.appendChild(div);
  };

  for (let i = 0; i < hits.length; i++) {
    const div = document.createElement('div');
    div.classList.add('hit');

    div.style.gridRow = [hits[i][0]];
    div.style.gridColumn = [hits[i][1]];

    grid.appendChild(div);
  };
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

function updateMiniGrid(playerBoard, miniGrid) {
  let shipCordsArr = [];

  for (const entry of playerBoard.shipCords.entries()) {
    shipCordsArr.push(entry[0].split(',').map(Number))
  };

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

function clearMiniGrid() {
  const miniGridChildren = [...document.querySelector('.mini-grid').children];

  miniGridChildren.forEach(child => {
    if (!child.classList.contains('mini-square')) {
      child.remove();
    };
  });
};

function attackPhase(player) {
  resetBody();
  createGrid();
  createMiniGrid();
  const miniGrid = document.querySelector('.mini-grid');
  updateMiniGrid(player.playerBoard, miniGrid);

};

function clearGrid() {
  const gridChildren = [...document.querySelector('.grid').children];

  gridChildren.forEach(child => {
    if (!child.classList.contains('square')) {
      child.remove();
    };
  });
};

function passDevice(activePlayer, lastTurnStatus) {
  
  const div = document.createElement('div');
  div.classList.add('pass-device');
  const h1 = document.createElement('h1');
  h1.innerText = `That was a ${lastTurnStatus}!`;
  const h2 = document.createElement('h2');
  h2.innerText = `Its ${activePlayer.name}'s Turn!`;

  const startTurnBtn = document.createElement('button');
  startTurnBtn.classList.add('start-turn');
  startTurnBtn.innerText = 'Start Turn';

  div.appendChild(h1);
  div.appendChild(h2);
  div.appendChild(startTurnBtn);

  body.appendChild(div);
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

function displayActivePlayer(activePlayer) {
  const activePlayerH2 = document.querySelector('.active-player');

  if (activePlayerH2) {
    activePlayerH2.innerText = `${activePlayer.name}`;
  } else {
    const h2 = document.createElement('h2');
    h2.classList.add('active-player');
    h2.innerText = `${activePlayer.name}`;
    body.insertBefore(h2, body.children[0]);
  };
  
};

function displayBothBoards(playerOne, playerTwo) {
  resetBody();
  createMiniGrid();
  createMiniGrid();

  const playerOneH2 = document.createElement('h2');
  playerOneH2.innerText = "Player One's Board:";

  const playerTwoH2 = document.createElement('h2');
  playerTwoH2.innerText = "Player Two's Board:";

  const miniGrids = [...document.querySelectorAll('.mini-grid')]

  updateMiniGrid(playerOne.playerBoard, miniGrids[0]);
  updateMiniGrid(playerTwo.playerBoard, miniGrids[1]);

  body.insertBefore(playerOneH2, miniGrids[0]);
  body.insertBefore(playerTwoH2, miniGrids[1]);
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
          if (grid.ships.has(ship.coords[i].toString())) { ship.style.borderColor = 'red' }
          else if (ship.coords[i][0] > 10 || ship.coords[i][1] > 10){
            ship.style.borderColor = 'red';
          };
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
  return div.classList[0];
};

function cpuAttack(player) {
  player.playerBoard.recieveSmartAttack();
  const miniGrid = document.querySelector('.mini-grid');
  (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.updateMiniGrid)(player.playerBoard, miniGrid);
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

    return true;
  } else {
    return false;
  };
};

function gridClickedSingle(e) {
  const grid = document.querySelector('.grid');

  if (e.target === grid) {
    playerAttack(e, grid.playerTwo);
    cpuAttack(grid.playerOne);

    if (checkForWinners(grid.playerOne, grid.playerTwo)) {
      grid.removeEventListener('click', gridClickedSingle);
    };
  };
};

function singleGameLoop(playerOne, playerTwo) {
  (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.attackPhase)(playerOne);

  const grid = document.querySelector('.grid');
  grid.playerOne = playerOne;
  grid.playerTwo = playerTwo;
  grid.addEventListener('click', gridClickedSingle);
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
  (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.displayActivePlayer)(activePlayer);

  resetBtn.addEventListener('click', _resetBtn_js__WEBPACK_IMPORTED_MODULE_7__.resetBoard);
  placeRandomlyBtn.addEventListener('click', _placeRandomlyBtn_js__WEBPACK_IMPORTED_MODULE_8__.placeRandomly);
  submitBtn.addEventListener('click', () => {
    (0,_submitBtn_js__WEBPACK_IMPORTED_MODULE_9__.submitCoords)(activePlayer);

    if (activePlayer === playerOne) {
      (0,_resetBtn_js__WEBPACK_IMPORTED_MODULE_7__.resetBoard)();
      activePlayer = playerTwo;
      (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.displayActivePlayer)(activePlayer);
    } else {
      activePlayer = playerOne;
      doubleGameLoop(playerOne, playerTwo);
    };
  });
};

function doubleGameLoop(playerOne, playerTwo) {
  (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.attackPhase)(activePlayer);
  (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.displayActivePlayer)(activePlayer);

  const grid = document.querySelector('.grid');
  grid.playerOne = playerOne;
  grid.playerTwo = playerTwo;
  grid.addEventListener('click', gridClickedDouble);
};

function gridClickedDouble(e) {
  const grid = document.querySelector('.grid');
  const playerOne = grid.playerOne;
  const playerTwo = grid.playerTwo;
  let lastPlayer;
  let lastTurnStatus;

  if (e.target === grid) {
    lastPlayer = activePlayer;
    activePlayer === playerOne ? activePlayer = playerTwo : activePlayer = playerOne;
    lastTurnStatus = playerAttack(e, activePlayer);
    (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.clearGrid)();
    (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.clearMiniGrid)();

    if (!checkForWinners(playerOne, playerTwo)) {
      (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.passDevice)(activePlayer, lastTurnStatus);
      const nextTurnBtn = document.querySelector('.start-turn');
      nextTurnBtn.addEventListener('click', (e) => {
        e.target.parentElement.remove();
        (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.updateGrid)(lastPlayer.playerBoard);
        const miniGrid = document.querySelector('.mini-grid');
        (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.updateMiniGrid)(activePlayer.playerBoard, miniGrid);
        (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.displayActivePlayer)(activePlayer);
      });
    } else {
      grid.removeEventListener('click', gridClickedDouble);
      (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.displayBothBoards)(playerOne, playerTwo);
      checkForWinners(playerOne, playerTwo);
    };
  };
};

singleBtn.addEventListener('click', singlePlayer);
doubleBtn.addEventListener('click', doublePlayer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBVTtBQUNsQjtBQUNBLFFBQVEsNkRBQWM7QUFDdEIsUUFBUSxrRUFBbUI7QUFDM0IsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBLE1BQU0sZ0VBQWlCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2FtZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2hvbWUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2FtZS5jc3M/NDc4NiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvaG9tZS5jc3M/N2Y5YyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvY3JlYXRlU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9oYW5kbGVET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3BsYWNlUmFuZG9tbHlCdG4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvcmVzZXRCdG4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3NldHVwQm9hcmRQaGFzZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3VibWl0QnRuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG46cm9vdCB7XG4gIC0tR1JJRF9XSURUSDogNTAycHg7XG4gIC0tR1JJRF9CR19DT0xPUjogbGlnaHRibHVlO1xuICAtLUdSSURfQk9SREVSOiAxcHggc29saWQgYmxhY2s7XG5cbiAgLS1TUVVBUkVfV0lEVEg6IDUwcHg7XG4gIC0tU1FVQVJFX0hFSUdIVDogNTBweDtcblxuICAtLVNISVBfQkdfQ09MT1I6ICNhYWE7XG4gIC0tU0hJUF9EUkFHR0lOR19DT0xPUjogI2NjYztcbiAgLS1TSElQX0JPUkRFUjogMnB4IHNvbGlkIG5hdnk7XG5cbiAgLS1NSVNTX0NST1NTX0NPTE9SOiBibGFjaztcbiAgLS1ISVRfQ1JPU1NfQ09MT1I6IHJlZDtcblxuICAtLU1FU1NBR0VfQkdfQ09MT1I6ICNmZmY7XG59XG5cbioge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuYm9keSB7XG4gIHBhZGRpbmc6IDEwMHB4IDBweCAxMDBweCAwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjVweDtcbn1cblxuLmdyaWQsXG4ubWluaS1ncmlkIHtcbiAgd2lkdGg6IHZhcigtLUdSSURfV0lEVEgpO1xuICBoZWlnaHQ6IHZhcigtLUdSSURfV0lEVEgpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYm9yZGVyOiB2YXIoLS1HUklEX0JPUkRFUik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc3F1YXJlLFxuLm1pbmktc3F1YXJlIHtcbiAgd2lkdGg6IHZhcigtLVNRVUFSRV9XSURUSCk7XG4gIGhlaWdodDogdmFyKC0tU1FVQVJFX0hFSUdIVCk7XG4gIGJvcmRlcjogdmFyKC0tR1JJRF9CT1JERVIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1HUklEX0JHX0NPTE9SKTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5zaGlwcyB7XG4gIHdpZHRoOiB2YXIoLS1HUklEX1dJRFRIKTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG59XG4uc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVNISVBfQkdfQ09MT1IpO1xuICBib3JkZXI6IHZhcigtLVNISVBfQk9SREVSKTtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuLnNoaXAuZHJhZ2dpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1TSElQX0RSQUdHSU5HX0NPTE9SKTtcbn1cblxuLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ubWlzcyxcbi5oaXQge1xuICB3aWR0aDogdmFyKC0tU1FVQVJFX1dJRFRIKTtcbiAgaGVpZ2h0OiB2YXIoLS1TUVVBUkVfSEVJR0hUKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tR1JJRF9CR19DT0xPUik7XG4gIGJvcmRlcjogdmFyKC0tR1JJRF9CT1JERVIpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWlzczpiZWZvcmUsIC5taXNzOmFmdGVyLFxuLmhpdDpiZWZvcmUsIC5oaXQ6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMHB4O1xuICBjb250ZW50OiAnJztcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1NSVNTX0NST1NTX0NPTE9SKTtcblxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi5taXNzOmFmdGVyLFxuLmhpdDphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmhpdDpiZWZvcmUsIC5oaXQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ISVRfQ1JPU1NfQ09MT1IpO1xufVxuXG4ubWluaS1ncmlkIHtcbiAgd2lkdGg6IGNhbGModmFyKC0tR1JJRF9XSURUSCkgLyAyICsgMXB4KTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLUdSSURfV0lEVEgpIC8gMiArIDFweCk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDI1cHgpO1xufVxuLm1pbmktc3F1YXJlIHtcbiAgd2lkdGg6IGNhbGModmFyKC0tU1FVQVJFX0hFSUdIVCkgLyAyKTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLVNRVUFSRV9IRUlHSFQpIC8gMik7XG59XG5cbi5taW5pLXNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1TSElQX0JHX0NPTE9SKTtcbiAgYm9yZGVyOiB2YXIoLS1HUklEX0JPUkRFUik7XG59XG5cbi5taW5pLWdyaWQgPiAubWlzcyxcbi5taW5pLWdyaWQgPiAuaGl0IHtcbiAgd2lkdGg6IGNhbGModmFyKC0tU1FVQVJFX0hFSUdIVCkgLyAyKTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLVNRVUFSRV9IRUlHSFQpIC8gMik7XG59XG4ubWluaS1ncmlkID4gLm1pc3M6YmVmb3JlLFxuLm1pbmktZ3JpZCA+IC5oaXQ6YmVmb3JlLFxuLm1pbmktZ3JpZCA+IC5taXNzOmFmdGVyLFxuLm1pbmktZ3JpZCA+IC5oaXQ6YWZ0ZXIge1xuICBoZWlnaHQ6IDVweDtcbn1cbi5taW5pLWdyaWQgPiAuaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi53aW5uZXItbXNnIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTUVTU0FHRV9CR19DT0xPUik7XG4gIGJvcmRlcjogdmFyKC0tR1JJRF9CT1JERVIpO1xufVxuXG4uZ2FtZS1vdmVyLW9wdGlvbnMge1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5wYXNzLWRldmljZSB7XG4gIHdpZHRoOiA0NTBweDtcbiAgaGVpZ2h0OiA0NTBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1NRVNTQUdFX0JHX0NPTE9SKTtcbiAgYm9yZGVyOiB2YXIoLS1HUklEX0JPUkRFUik7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9nYW1lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLDhCQUE4Qjs7RUFFOUIsb0JBQW9CO0VBQ3BCLHFCQUFxQjs7RUFFckIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQiw2QkFBNkI7O0VBRTdCLHlCQUF5QjtFQUN6QixzQkFBc0I7O0VBRXRCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsdUNBQXVDO0VBQ3ZDLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLHNDQUFzQztFQUN0QyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGFBQWE7RUFDYixTQUFTO0FBQ1g7QUFDQTtFQUNFLHNDQUFzQztFQUN0QywwQkFBMEI7RUFDMUIsWUFBWTtBQUNkO0FBQ0E7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBOztFQUVFLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsc0NBQXNDO0VBQ3RDLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUNBQXlDOztFQUV6Qyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtFQUNOLFNBQVM7QUFDWDtBQUNBOztFQUVFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHdDQUF3QztFQUN4Qyx5Q0FBeUM7RUFDekMsdUNBQXVDO0VBQ3ZDLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QywwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUscUNBQXFDO0VBQ3JDLHNDQUFzQztBQUN4QztBQUNBOzs7O0VBSUUsV0FBVztBQUNiO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTs7RUFFYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUzs7RUFFVCx5Q0FBeUM7RUFDekMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTs7RUFFYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTs7RUFFYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUzs7RUFFVCxrQkFBa0I7O0VBRWxCLHlDQUF5QztFQUN6QywwQkFBMEI7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuOnJvb3Qge1xcbiAgLS1HUklEX1dJRFRIOiA1MDJweDtcXG4gIC0tR1JJRF9CR19DT0xPUjogbGlnaHRibHVlO1xcbiAgLS1HUklEX0JPUkRFUjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgLS1TUVVBUkVfV0lEVEg6IDUwcHg7XFxuICAtLVNRVUFSRV9IRUlHSFQ6IDUwcHg7XFxuXFxuICAtLVNISVBfQkdfQ09MT1I6ICNhYWE7XFxuICAtLVNISVBfRFJBR0dJTkdfQ09MT1I6ICNjY2M7XFxuICAtLVNISVBfQk9SREVSOiAycHggc29saWQgbmF2eTtcXG5cXG4gIC0tTUlTU19DUk9TU19DT0xPUjogYmxhY2s7XFxuICAtLUhJVF9DUk9TU19DT0xPUjogcmVkO1xcblxcbiAgLS1NRVNTQUdFX0JHX0NPTE9SOiAjZmZmO1xcbn1cXG5cXG4qIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDEwMHB4IDBweCAxMDBweCAwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4uZ3JpZCxcXG4ubWluaS1ncmlkIHtcXG4gIHdpZHRoOiB2YXIoLS1HUklEX1dJRFRIKTtcXG4gIGhlaWdodDogdmFyKC0tR1JJRF9XSURUSCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYm9yZGVyOiB2YXIoLS1HUklEX0JPUkRFUik7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc3F1YXJlLFxcbi5taW5pLXNxdWFyZSB7XFxuICB3aWR0aDogdmFyKC0tU1FVQVJFX1dJRFRIKTtcXG4gIGhlaWdodDogdmFyKC0tU1FVQVJFX0hFSUdIVCk7XFxuICBib3JkZXI6IHZhcigtLUdSSURfQk9SREVSKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUdSSURfQkdfQ09MT1IpO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5zaGlwcyB7XFxuICB3aWR0aDogdmFyKC0tR1JJRF9XSURUSCk7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1TSElQX0JHX0NPTE9SKTtcXG4gIGJvcmRlcjogdmFyKC0tU0hJUF9CT1JERVIpO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG4uc2hpcC5kcmFnZ2luZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1TSElQX0RSQUdHSU5HX0NPTE9SKTtcXG59XFxuXFxuLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5taXNzLFxcbi5oaXQge1xcbiAgd2lkdGg6IHZhcigtLVNRVUFSRV9XSURUSCk7XFxuICBoZWlnaHQ6IHZhcigtLVNRVUFSRV9IRUlHSFQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tR1JJRF9CR19DT0xPUik7XFxuICBib3JkZXI6IHZhcigtLUdSSURfQk9SREVSKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1pc3M6YmVmb3JlLCAubWlzczphZnRlcixcXG4uaGl0OmJlZm9yZSwgLmhpdDphZnRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTBweDtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTUlTU19DUk9TU19DT0xPUik7XFxuXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG4ubWlzczphZnRlcixcXG4uaGl0OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmhpdDpiZWZvcmUsIC5oaXQ6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSElUX0NST1NTX0NPTE9SKTtcXG59XFxuXFxuLm1pbmktZ3JpZCB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1HUklEX1dJRFRIKSAvIDIgKyAxcHgpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLUdSSURfV0lEVEgpIC8gMiArIDFweCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjVweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjVweCk7XFxufVxcbi5taW5pLXNxdWFyZSB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1TUVVBUkVfSEVJR0hUKSAvIDIpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLVNRVUFSRV9IRUlHSFQpIC8gMik7XFxufVxcblxcbi5taW5pLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tU0hJUF9CR19DT0xPUik7XFxuICBib3JkZXI6IHZhcigtLUdSSURfQk9SREVSKTtcXG59XFxuXFxuLm1pbmktZ3JpZCA+IC5taXNzLFxcbi5taW5pLWdyaWQgPiAuaGl0IHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLVNRVUFSRV9IRUlHSFQpIC8gMik7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tU1FVQVJFX0hFSUdIVCkgLyAyKTtcXG59XFxuLm1pbmktZ3JpZCA+IC5taXNzOmJlZm9yZSxcXG4ubWluaS1ncmlkID4gLmhpdDpiZWZvcmUsXFxuLm1pbmktZ3JpZCA+IC5taXNzOmFmdGVyLFxcbi5taW5pLWdyaWQgPiAuaGl0OmFmdGVyIHtcXG4gIGhlaWdodDogNXB4O1xcbn1cXG4ubWluaS1ncmlkID4gLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLndpbm5lci1tc2cge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTUVTU0FHRV9CR19DT0xPUik7XFxuICBib3JkZXI6IHZhcigtLUdSSURfQk9SREVSKTtcXG59XFxuXFxuLmdhbWUtb3Zlci1vcHRpb25zIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucGFzcy1kZXZpY2Uge1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTUVTU0FHRV9CR19DT0xPUik7XFxuICBib3JkZXI6IHZhcigtLUdSSURfQk9SREVSKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLmJ0bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG4uaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG5cbmJ1dHRvbiB7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1KQUFtSjtBQUN2Sjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhOztJQUViLGtCQUFrQjtJQUNsQixRQUFROztJQUVSLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuZnVuY3Rpb24gY3JlYXRlU2hpcChsZW4pIHtcbiAgICBsZXQgdGltZXNIaXQgPSAwO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gKCkgPT4geyByZXR1cm4gbGVuIH07XG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7IHJldHVybiArK3RpbWVzSGl0IH07XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7IHJldHVybiAobGVuZ3RoKCkgLSB0aW1lc0hpdCA9PT0gMCkgfTtcblxuICAgIHJldHVybiB7IGxlbmd0aCwgaGl0LCBpc1N1bmsgfTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVNoaXAgfTsiLCJcbmltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tIFwiLi9jcmVhdGVTaGlwLmpzXCI7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuYm9hcmQgPSBbXG4gICAgMCBpbiBib2FyZCA9PiBlbXB0eSBzcG90XG4gICAgeCBpbiBib2FyZCA9PiByZWNpZXZlZCBhdHRhY2sgYnV0IHdhcyBtaXNzXG4gICAge30gaW4gYm9hcmQgPT4gaXMgdGhlIHNoaXBcbl07XG5cbm1pc3NlcyA9IFtcbiAgICAtIEFycmF5IG9mIHNwb3RzIHRoYXQgcmVjaWV2ZWQgYXR0YWNrIGJ1dCBkaWRudCBoaXQgYSBzaGlwXG4gICAgLSBpbiBvcmRlciBvZiBhdHRlbXB0c1xuXTtcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5mdW5jdGlvbiBnYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgaGl0cyA9IFtdO1xuICAgIGNvbnN0IHNoaXBDb3JkcyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBtaXNzZXMgPSBbXTtcbiAgICBjb25zdCBib2FyZCA9IFtcbiAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdXG4gICAgXTtcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZHMpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGNyZWF0ZVNoaXAoY29vcmRzLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yIChsZXQgY29vcmQgb2YgY29vcmRzKSB7XG4gICAgICAgICAgICBib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID0gc2hpcDtcbiAgICAgICAgICAgIHNoaXBDb3Jkcy5hZGQoY29vcmQudG9TdHJpbmcoKSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYWNlUmFuZG9tU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBpZWNlcyA9IFs0LDMsMywyLDIsMiwxLDEsMSwxXTtcbiAgICAgICAgXG4gICAgICAgIHdoaWxlIChwaWVjZXNbMF0pIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IG51bGw7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmQubGVuZ3RoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB1cDogW10sXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtdLFxuICAgICAgICAgICAgICAgIGRvd246IFtdLFxuICAgICAgICAgICAgICAgIGxlZnQ6IFtdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBpZWNlc1swXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy51cC5wdXNoKFtyb3ctaSwgY29sdW1uXSk7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5yaWdodC5wdXNoKFtyb3csIGNvbHVtbitpXSk7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5kb3duLnB1c2goW3JvdytpLCBjb2x1bW5dKTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxlZnQucHVzaChbcm93LCBjb2x1bW4taV0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY29vcmQgb2Ygb3B0aW9uc1tvcHRpb25dKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb29yZFswXSA8IDAgfHwgY29vcmRbMF0gPiA5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZFsxXSA8IDAgfHwgY29vcmRbMV0gPiA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zW29wdGlvbl0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcENvcmRzLmhhcyhjb29yZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gW107XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zW29wdGlvbl0ubGVuZ3RoID09PSBwaWVjZXNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSBvcHRpb25zW29wdGlvbl07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHBpZWNlcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHBsYWNlU2hpcChzZWxlY3RlZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCByZWNpZXZlQXR0YWNrID0gKHgseSkgPT4ge1xuICAgICAgICBpZiAoYm9hcmRbeF1beV0gPT09IDAgJiYgIW1pc3Nlcy5pbmNsdWRlcyhbeCx5XSkpIHtcbiAgICAgICAgICAgIG1pc3Nlcy5wdXNoKFt4LHldKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChib2FyZFt4XVt5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBib2FyZFt4XVt5XS5oaXQoKTtcbiAgICAgICAgICAgIGhpdHMucHVzaChbeCx5XSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCByb3cgb2YgYm9hcmQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgb2Ygcm93KSB7XG4gICAgICAgICAgICAgICAgaWYgKGkuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJiAhaS5pc1N1bmsoKSkgeyByZXR1cm4gZmFsc2UgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlY2lldmVSYW5kb21BdHRhY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5sZW5ndGgpO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmQubGVuZ3RoKTtcbiAgICAgICAgbGV0IGR1cGxpY2F0ZSA9IG51bGw7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChtaXNzZXNbaV1bMF0gPT09IHggJiYgbWlzc2VzW2ldWzFdID09PSB5KSB7XG4gICAgICAgICAgICAgICAgZHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaGl0c1tpXVswXSA9PT0geCAmJiBoaXRzW2ldWzFdID09PSB5KSB7XG4gICAgICAgICAgICAgICAgZHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGR1cGxpY2F0ZSkgeyByZWNpZXZlUmFuZG9tQXR0YWNrKCkgfVxuICAgICAgICBlbHNlIHsgcmV0dXJuIHJlY2lldmVBdHRhY2soeCx5KSB9O1xuICAgIH07XG5cbiAgICBjb25zdCByZWNpZXZlU21hcnRBdHRhY2sgPSAoKSA9PiB7XG4gICAgICBsZXQgc2VsZWN0ZWQgPSBudWxsO1xuXG4gICAgICBmb3IgKGNvbnN0IGhpdCBvZiBoaXRzKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgdXA6IFtoaXRbMF0gLSAxLCBoaXRbMV1dLFxuICAgICAgICAgIGRvd246IFtoaXRbMF0gKyAxLCBoaXRbMV1dLFxuICAgICAgICAgIGxlZnQ6IFtoaXRbMF0sIGhpdFsxXSAtIDFdLFxuICAgICAgICAgIHJpZ2h0OiBbaGl0WzBdLCBoaXRbMV0gKyAxXVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICBpZiAob3B0aW9uc1tvcHRpb25dWzBdIDwgMCB8fCBvcHRpb25zW29wdGlvbl1bMF0gPiA5IHx8XG4gICAgICAgICAgICAgIG9wdGlvbnNbb3B0aW9uXVsxXSA8IDAgfHwgb3B0aW9uc1tvcHRpb25dWzFdID4gOSkge1xuXG4gICAgICAgICAgICBkZWxldGUgb3B0aW9uc1tvcHRpb25dO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChjb25zdCBvcHRpb24gaW4gb3B0aW9ucykge1xuICAgICAgICAgIGZvciAoY29uc3QgbWlzcyBvZiBtaXNzZXMpIHtcbiAgICAgICAgICAgIGlmIChtaXNzWzBdID09PSBvcHRpb25zW29wdGlvbl1bMF0gJiYgbWlzc1sxXSA9PT0gb3B0aW9uc1tvcHRpb25dWzFdKSB7XG4gICAgICAgICAgICAgIG9wdGlvbnNbb3B0aW9uXSA9IFtdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZm9yIChjb25zdCBoaXQgb2YgaGl0cykge1xuICAgICAgICAgICAgaWYgKGhpdFswXSA9PT0gb3B0aW9uc1tvcHRpb25dWzBdICYmIGhpdFsxXSA9PT0gb3B0aW9uc1tvcHRpb25dWzFdKSB7XG4gICAgICAgICAgICAgIG9wdGlvbnNbb3B0aW9uXSA9IFtdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKG9wdGlvbnNbb3B0aW9uXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZWxlY3RlZCA9IG9wdGlvbnNbb3B0aW9uXTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgaWYgKHNlbGVjdGVkKSB7IHJlY2lldmVBdHRhY2soc2VsZWN0ZWRbMF0sIHNlbGVjdGVkWzFdKSB9XG4gICAgICBlbHNlIHsgcmVjaWV2ZVJhbmRvbUF0dGFjaygpIH07XG4gICAgfTtcblxuICAgIHJldHVybiB7IHBsYWNlU2hpcCwgcGxhY2VSYW5kb21TaGlwcywgc2hpcENvcmRzLCByZWNpZXZlQXR0YWNrLCBhbGxTaGlwc1N1bmssIG1pc3NlcywgcmVjaWV2ZVJhbmRvbUF0dGFjaywgaGl0cywgcmVjaWV2ZVNtYXJ0QXR0YWNrIH07XG59O1xuXG5leHBvcnQgeyBnYW1lYm9hcmQgfTtcbiIsIlxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcblxuZnVuY3Rpb24gY3JlYXRlR3JpZCgpIHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcblxuICAgICAgICAgICAgZGl2LnJvdyA9IGk7XG4gICAgICAgICAgICBkaXYuY29sdW1uID0gajtcbiAgICAgICAgICAgIGRpdi5jb29yZCA9IFtpLGpdO1xuXG4gICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBcbiAgICBib2R5LmFwcGVuZENoaWxkKGdyaWQpO1xufTtcblxuZnVuY3Rpb24gdXBkYXRlR3JpZChwbGF5ZXJCb2FyZCkge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKTtcbiAgY29uc3QgbWlzc2VzID0gcGxheWVyQm9hcmQubWlzc2VzLm1hcChjb29yZHMgPT4gW2Nvb3Jkc1swXSArIDEsIGNvb3Jkc1sxXSArIDFdKTtcbiAgY29uc3QgaGl0cyA9IHBsYXllckJvYXJkLmhpdHMubWFwKGNvb3JkcyA9PiBbY29vcmRzWzBdICsgMSwgY29vcmRzWzFdICsgMV0pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWlzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcblxuICAgIGRpdi5zdHlsZS5ncmlkUm93ID0gW21pc3Nlc1tpXVswXV07XG4gICAgZGl2LnN0eWxlLmdyaWRDb2x1bW4gPSBbbWlzc2VzW2ldWzFdXTtcblxuICAgIGdyaWQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhpdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG5cbiAgICBkaXYuc3R5bGUuZ3JpZFJvdyA9IFtoaXRzW2ldWzBdXTtcbiAgICBkaXYuc3R5bGUuZ3JpZENvbHVtbiA9IFtoaXRzW2ldWzFdXTtcblxuICAgIGdyaWQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoaXBzKCkge1xuICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcXVhcmUnKTtcbiAgICBjb25zdCBzcXVhcmVXaWR0aCA9IGdldENvbXB1dGVkU3R5bGUoc3F1YXJlKS5nZXRQcm9wZXJ0eVZhbHVlKCctLVNRVUFSRV9XSURUSCcpLnNsaWNlKDAsLTIpO1xuXG4gICAgY29uc3Qgd2lkdGhzID0gWzQsMywzLDIsMiwyLDEsMSwxLDFdO1xuICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcHMuY2xhc3NMaXN0LmFkZCgnc2hpcHMnKTtcblxuICAgIGZvciAobGV0IHBpZWNlIGluIHdpZHRocykge1xuICAgICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gICAgICAgIHNoaXAuc3R5bGUud2lkdGggPSBgJHt3aWR0aHNbcGllY2VdICogc3F1YXJlV2lkdGh9cHhgO1xuICAgICAgICBzaGlwLnN0eWxlLmhlaWdodCA9IGAke3NxdWFyZVdpZHRofXB4YDtcblxuICAgICAgICBzaGlwcy5hcHBlbmRDaGlsZChzaGlwKTtcbiAgICB9O1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChzaGlwcyk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVPcHRpb25zQnV0dG9ucygpIHtcbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMtY29udGFpbmVyJyk7XG5cbiAgY29uc3Qgc3VibWl0U2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0U2hpcHMuY2xhc3NMaXN0LmFkZCgnc3VibWl0Jyk7XG4gIHN1Ym1pdFNoaXBzLmlubmVyVGV4dCA9ICdTdWJtaXQgU2hpcHMnO1xuXG4gIGNvbnN0IHJlc2V0U2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVzZXRTaGlwcy5jbGFzc0xpc3QuYWRkKCdyZXNldCcpO1xuICByZXNldFNoaXBzLmlubmVyVGV4dCA9ICdSZXNldCBTaGlwcyc7XG5cbiAgY29uc3QgcGxhY2VSYW5kb21seSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwbGFjZVJhbmRvbWx5LmNsYXNzTGlzdC5hZGQoJ3BsYWNlLXJhbmRvbWx5Jyk7XG4gIHBsYWNlUmFuZG9tbHkuaW5uZXJUZXh0ID0gJ1BsYWNlIFNoaXBzIFJhbmRvbWx5JztcblxuICBib2R5LmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdFNoaXBzKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNldFNoaXBzKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZVJhbmRvbWx5KTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU1pbmlHcmlkKCkge1xuICBjb25zdCBtaW5pR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtaW5pR3JpZC5jbGFzc0xpc3QuYWRkKCdtaW5pLWdyaWQnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDEwOyBrKyspIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21pbmktc3F1YXJlJyk7XG5cbiAgICAgIG1pbmlHcmlkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfTtcbiAgfTtcblxuICBib2R5LmFwcGVuZENoaWxkKG1pbmlHcmlkKTtcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZU1pbmlHcmlkKHBsYXllckJvYXJkLCBtaW5pR3JpZCkge1xuICBsZXQgc2hpcENvcmRzQXJyID0gW107XG5cbiAgZm9yIChjb25zdCBlbnRyeSBvZiBwbGF5ZXJCb2FyZC5zaGlwQ29yZHMuZW50cmllcygpKSB7XG4gICAgc2hpcENvcmRzQXJyLnB1c2goZW50cnlbMF0uc3BsaXQoJywnKS5tYXAoTnVtYmVyKSlcbiAgfTtcblxuICBjb25zdCBncmlkQ29yZHMgPSBzaGlwQ29yZHNBcnIubWFwKGNvb3JkcyA9PiBbY29vcmRzWzBdICsgMSwgY29vcmRzWzFdICsgMV0pO1xuICBjb25zdCBtaXNzZXMgPSBwbGF5ZXJCb2FyZC5taXNzZXMubWFwKGNvb3JkcyA9PiBbY29vcmRzWzBdICsgMSwgY29vcmRzWzFdICsgMV0pO1xuICBjb25zdCBoaXRzID0gcGxheWVyQm9hcmQuaGl0cy5tYXAoY29vcmRzID0+IFtjb29yZHNbMF0gKyAxLCBjb29yZHNbMV0gKyAxXSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkQ29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWluaS1zaGlwJyk7XG5cbiAgICBkaXYuc3R5bGUuZ3JpZFJvdyA9IFtncmlkQ29yZHNbaV1bMF1dO1xuICAgIGRpdi5zdHlsZS5ncmlkQ29sdW1uID0gW2dyaWRDb3Jkc1tpXVsxXV07XG5cbiAgICBtaW5pR3JpZC5hcHBlbmRDaGlsZChkaXYpO1xuICB9O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWlzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcblxuICAgIGRpdi5zdHlsZS5ncmlkUm93ID0gW21pc3Nlc1tpXVswXV07XG4gICAgZGl2LnN0eWxlLmdyaWRDb2x1bW4gPSBbbWlzc2VzW2ldWzFdXTtcblxuICAgIG1pbmlHcmlkLmFwcGVuZENoaWxkKGRpdik7XG4gIH07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuXG4gICAgZGl2LnN0eWxlLmdyaWRSb3cgPSBbaGl0c1tpXVswXV07XG4gICAgZGl2LnN0eWxlLmdyaWRDb2x1bW4gPSBbaGl0c1tpXVsxXV07XG5cbiAgICBtaW5pR3JpZC5hcHBlbmRDaGlsZChkaXYpO1xuICB9O1xuICBcbn07XG5cbmZ1bmN0aW9uIGNsZWFyTWluaUdyaWQoKSB7XG4gIGNvbnN0IG1pbmlHcmlkQ2hpbGRyZW4gPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbmktZ3JpZCcpLmNoaWxkcmVuXTtcblxuICBtaW5pR3JpZENoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgIGlmICghY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaW5pLXNxdWFyZScpKSB7XG4gICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICB9O1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGF0dGFja1BoYXNlKHBsYXllcikge1xuICByZXNldEJvZHkoKTtcbiAgY3JlYXRlR3JpZCgpO1xuICBjcmVhdGVNaW5pR3JpZCgpO1xuICBjb25zdCBtaW5pR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW5pLWdyaWQnKTtcbiAgdXBkYXRlTWluaUdyaWQocGxheWVyLnBsYXllckJvYXJkLCBtaW5pR3JpZCk7XG5cbn07XG5cbmZ1bmN0aW9uIGNsZWFyR3JpZCgpIHtcbiAgY29uc3QgZ3JpZENoaWxkcmVuID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJykuY2hpbGRyZW5dO1xuXG4gIGdyaWRDaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICBpZiAoIWNoaWxkLmNsYXNzTGlzdC5jb250YWlucygnc3F1YXJlJykpIHtcbiAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgIH07XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gcGFzc0RldmljZShhY3RpdmVQbGF5ZXIsIGxhc3RUdXJuU3RhdHVzKSB7XG4gIFxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Bhc3MtZGV2aWNlJyk7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEuaW5uZXJUZXh0ID0gYFRoYXQgd2FzIGEgJHtsYXN0VHVyblN0YXR1c30hYDtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi5pbm5lclRleHQgPSBgSXRzICR7YWN0aXZlUGxheWVyLm5hbWV9J3MgVHVybiFgO1xuXG4gIGNvbnN0IHN0YXJ0VHVybkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdGFydFR1cm5CdG4uY2xhc3NMaXN0LmFkZCgnc3RhcnQtdHVybicpO1xuICBzdGFydFR1cm5CdG4uaW5uZXJUZXh0ID0gJ1N0YXJ0IFR1cm4nO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChoMSk7XG4gIGRpdi5hcHBlbmRDaGlsZChoMik7XG4gIGRpdi5hcHBlbmRDaGlsZChzdGFydFR1cm5CdG4pO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmZ1bmN0aW9uIHJlc2V0Qm9keSgpIHtcbiAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufTtcblxuZnVuY3Rpb24gc2V0dXBTaGlwcygpIHtcbiAgICByZXNldEJvZHkoKTtcbiAgICBjcmVhdGVHcmlkKCk7XG4gICAgY3JlYXRlU2hpcHMoKTtcbiAgICBjcmVhdGVPcHRpb25zQnV0dG9ucygpO1xufTtcblxuZnVuY3Rpb24gZGlzcGxheVdpbm5lcih3aW5uZXIpIHtcbiAgY29uc3Qgd2lubmVyTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdpbm5lck1zZy5jbGFzc0xpc3QuYWRkKCd3aW5uZXItbXNnJyk7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIuaW5uZXJUZXh0ID0gJ1dpbm5lciBpczonO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLmlubmVyVGV4dCA9IGAke3dpbm5lci5uYW1lfSFgO1xuICB3aW5uZXJNc2cuYXBwZW5kQ2hpbGQoaDIpO1xuICB3aW5uZXJNc2cuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdnYW1lLW92ZXItb3B0aW9ucycpO1xuICBjb25zdCBjaGFuZ2VNb2RlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNoYW5nZU1vZGVCdG4uY2xhc3NMaXN0LmFkZCgnY2hhbmdlLW1vZGUnKTtcbiAgY2hhbmdlTW9kZUJ0bi5pbm5lclRleHQgPSAnQ2hhbmdlIE1vZGUnO1xuICBjb25zdCBwbGF5QWdhaW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcGxheUFnYWluQnRuLmNsYXNzTGlzdC5hZGQoJ3BsYXktYWdhaW4nKTtcbiAgcGxheUFnYWluQnRuLmlubmVyVGV4dCA9ICdQbGF5IEFnYWluJztcbiAgb3B0aW9ucy5hcHBlbmRDaGlsZChjaGFuZ2VNb2RlQnRuKTtcbiAgb3B0aW9ucy5hcHBlbmRDaGlsZChwbGF5QWdhaW5CdG4pO1xuXG4gIHdpbm5lck1zZy5hcHBlbmRDaGlsZChvcHRpb25zKTtcblxuICBib2R5Lmluc2VydEJlZm9yZSh3aW5uZXJNc2csIGJvZHkuY2hpbGRyZW5bMF0pO1xufTtcblxuZnVuY3Rpb24gZGlzcGxheUFjdGl2ZVBsYXllcihhY3RpdmVQbGF5ZXIpIHtcbiAgY29uc3QgYWN0aXZlUGxheWVySDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLXBsYXllcicpO1xuXG4gIGlmIChhY3RpdmVQbGF5ZXJIMikge1xuICAgIGFjdGl2ZVBsYXllckgyLmlubmVyVGV4dCA9IGAke2FjdGl2ZVBsYXllci5uYW1lfWA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wbGF5ZXInKTtcbiAgICBoMi5pbm5lclRleHQgPSBgJHthY3RpdmVQbGF5ZXIubmFtZX1gO1xuICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGgyLCBib2R5LmNoaWxkcmVuWzBdKTtcbiAgfTtcbiAgXG59O1xuXG5mdW5jdGlvbiBkaXNwbGF5Qm90aEJvYXJkcyhwbGF5ZXJPbmUsIHBsYXllclR3bykge1xuICByZXNldEJvZHkoKTtcbiAgY3JlYXRlTWluaUdyaWQoKTtcbiAgY3JlYXRlTWluaUdyaWQoKTtcblxuICBjb25zdCBwbGF5ZXJPbmVIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHBsYXllck9uZUgyLmlubmVyVGV4dCA9IFwiUGxheWVyIE9uZSdzIEJvYXJkOlwiO1xuXG4gIGNvbnN0IHBsYXllclR3b0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgcGxheWVyVHdvSDIuaW5uZXJUZXh0ID0gXCJQbGF5ZXIgVHdvJ3MgQm9hcmQ6XCI7XG5cbiAgY29uc3QgbWluaUdyaWRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5taW5pLWdyaWQnKV1cblxuICB1cGRhdGVNaW5pR3JpZChwbGF5ZXJPbmUucGxheWVyQm9hcmQsIG1pbmlHcmlkc1swXSk7XG4gIHVwZGF0ZU1pbmlHcmlkKHBsYXllclR3by5wbGF5ZXJCb2FyZCwgbWluaUdyaWRzWzFdKTtcblxuICBib2R5Lmluc2VydEJlZm9yZShwbGF5ZXJPbmVIMiwgbWluaUdyaWRzWzBdKTtcbiAgYm9keS5pbnNlcnRCZWZvcmUocGxheWVyVHdvSDIsIG1pbmlHcmlkc1sxXSk7XG59O1xuXG5leHBvcnQgeyBzZXR1cFNoaXBzLCBhdHRhY2tQaGFzZSwgdXBkYXRlTWluaUdyaWQsIGRpc3BsYXlXaW5uZXIsIGRpc3BsYXlBY3RpdmVQbGF5ZXIsIGNsZWFyR3JpZCwgY2xlYXJNaW5pR3JpZCwgcGFzc0RldmljZSwgdXBkYXRlR3JpZCwgZGlzcGxheUJvdGhCb2FyZHMgfTtcbiIsImltcG9ydCB7IHJlc2V0Qm9hcmQgfSBmcm9tICcuL3Jlc2V0QnRuLmpzJztcblxuZnVuY3Rpb24gZ2VuQ29vcmRzKHNxdWFyZXNUYWtlblVwKSB7Ly9nZW5lcmF0ZXMgY29vcmRzIGZvciBwbGFjZS1yYW5kb21seSBidG5cbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyk7XG5cbiAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuICBjb25zdCBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB1cDogW10sXG4gICAgcmlnaHQ6IFtdLFxuICAgIGRvd246IFtdLFxuICAgIGxlZnQ6IFtdXG4gIH07XG5cbiAgbGV0IHNlbGVjdGVkID0gbnVsbDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZXNUYWtlblVwOyBpKyspIHtcbiAgICBvcHRpb25zLnVwLnB1c2goW3Jvdy1pLCBjb2x1bW5dKTtcbiAgICBvcHRpb25zLnJpZ2h0LnB1c2goW3JvdywgY29sdW1uK2ldKTtcbiAgICBvcHRpb25zLmRvd24ucHVzaChbcm93K2ksIGNvbHVtbl0pO1xuICAgIG9wdGlvbnMubGVmdC5wdXNoKFtyb3csIGNvbHVtbi1pXSk7XG4gIH07XG5cbiAgZm9yIChjb25zdCBvcHRpb24gaW4gb3B0aW9ucykge1xuXG4gICAgZm9yIChjb25zdCBjb29yZCBvZiBvcHRpb25zW29wdGlvbl0pIHtcbiAgICAgIGlmIChjb29yZFswXSA+IDEwIHx8IGNvb3JkWzBdIDwgMSB8fFxuICAgICAgICBjb29yZFsxXSA+IDEwIHx8IGNvb3JkWzFdIDwgMSkge1xuICAgICAgICBvcHRpb25zW29wdGlvbl0gPSBbXTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChncmlkLnNoaXBzLmhhcyhjb29yZC50b1N0cmluZygpKSkge1xuICAgICAgICBvcHRpb25zW29wdGlvbl0gPSBbXTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zW29wdGlvbl0ubGVuZ3RoID09PSBzcXVhcmVzVGFrZW5VcCkge1xuICAgICAgc2VsZWN0ZWQgPSB7W29wdGlvbl06IG9wdGlvbnNbb3B0aW9uXX07XG4gICAgfTtcbiAgfTtcblxuICBpZiAoc2VsZWN0ZWQpIHsgcmV0dXJuIHNlbGVjdGVkIH1cbiAgZWxzZSB7IHJldHVybiBnZW5Db29yZHMoc3F1YXJlc1Rha2VuVXApIH07XG59O1xuXG5mdW5jdGlvbiBwbGFjZVJhbmRvbWx5KCkge1xuICByZXNldEJvYXJkKCk7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpO1xuICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwcycpO1xuICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3F1YXJlJyk7XG4gIGNvbnN0IHNxdWFyZVdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShzcXVhcmUpLmdldFByb3BlcnR5VmFsdWUoJy0tU1FVQVJFX1dJRFRIJykuc2xpY2UoMCwtMik7XG5cbiAgWy4uLnNoaXBzQ29udGFpbmVyLmNoaWxkcmVuXS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgIGNvbnN0IHNxdWFyZXNUYWtlblVwID0gc2hpcC5zdHlsZS53aWR0aC5zbGljZSgwLC0yKSAvIHNxdWFyZVdpZHRoO1xuICAgIGNvbnN0IGNvb3JkcyA9IGdlbkNvb3JkcyhzcXVhcmVzVGFrZW5VcCk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gT2JqZWN0LmtleXMoY29vcmRzKVswXTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJyB8fCBkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHNoaXAuY29vcmRzID0gY29vcmRzW2RpcmVjdGlvbl07XG4gICAgICBzaGlwLnN0eWxlLmdyaWRSb3cgPSBjb29yZHNbZGlyZWN0aW9uXVswXVswXTtcbiAgICAgIHNoaXAuc3R5bGUuZ3JpZENvbHVtbiA9IGNvb3Jkc1tkaXJlY3Rpb25dWzBdWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb29yZHNbZGlyZWN0aW9uXSA9IGNvb3Jkc1tkaXJlY3Rpb25dLnJldmVyc2UoKTtcbiAgICAgIHNoaXAuY29vcmRzID0gY29vcmRzW2RpcmVjdGlvbl07XG5cbiAgICAgIHNoaXAuc3R5bGUuZ3JpZFJvdyA9IGNvb3Jkc1tkaXJlY3Rpb25dWzBdWzBdO1xuICAgICAgc2hpcC5zdHlsZS5ncmlkQ29sdW1uID0gY29vcmRzW2RpcmVjdGlvbl1bMF1bMV07XG4gICAgfTtcblxuICAgIGNvbnN0IGhlaWdodCA9IHNoaXAuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsLTIpO1xuICAgIGNvbnN0IHdpZHRoID0gc2hpcC5zdHlsZS53aWR0aC5zbGljZSgwLC0yKTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICd1cCcgfHwgZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgIHNoaXAuc3R5bGUud2lkdGggPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgc2hpcC5zdHlsZS5oZWlnaHQgPSBgJHt3aWR0aH1weGA7XG4gICAgfTtcblxuICAgIGdyaWQuYXBwZW5kQ2hpbGQoc2hpcCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3Jkc1tkaXJlY3Rpb25dLmxlbmd0aDsgaSsrKSB7XG4gICAgICBncmlkLnNoaXBzLmFkZChjb29yZHNbZGlyZWN0aW9uXVtpXS50b1N0cmluZygpKTtcbiAgICB9O1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IHBsYWNlUmFuZG9tbHkgfTtcbiIsImltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZC5qc1wiO1xuXG5mdW5jdGlvbiBwbGF5ZXIoKSB7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBnYW1lYm9hcmQoKTtcblxuICAgIHJldHVybiB7IHBsYXllckJvYXJkIH07XG59O1xuXG5leHBvcnQgeyBwbGF5ZXIgfTsiLCJcbmZ1bmN0aW9uIHJlc2V0Qm9hcmQoKSB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpO1xuICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwcycpO1xuICBjb25zdCBzaGlwcyA9IFsuLi5ncmlkLmNoaWxkcmVuXS5maWx0ZXIoc2hpcCA9PiBzaGlwLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpKTtcbiAgZ3JpZC5zaGlwcyA9IG5ldyBTZXQoKTtcblxuICBbLi4uc2hpcHNdLmZvckVhY2goc2hpcCA9PiB7XG4gICAgY29uc3QgaGVpZ2h0ID0gc2hpcC5zdHlsZS5oZWlnaHQuc2xpY2UoMCwtMik7XG4gICAgY29uc3Qgd2lkdGggPSBzaGlwLnN0eWxlLndpZHRoLnNsaWNlKDAsLTIpO1xuXG4gICAgaWYgKCtoZWlnaHQgPiArd2lkdGgpIHtcbiAgICAgIHNoaXAuc3R5bGUuaGVpZ2h0ID0gYCR7d2lkdGh9cHhgO1xuICAgICAgc2hpcC5zdHlsZS53aWR0aCA9IGAke2hlaWdodH1weGA7XG4gICAgfTtcblxuICAgIHNoaXAuY29vcmRzID0gW107XG4gICAgc2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gIH0pOyAgICBcbn07XG5cbmV4cG9ydCB7IHJlc2V0Qm9hcmQgfTtcbiIsIlxuZnVuY3Rpb24gc2V0dXBCb2FyZFBoYXNlKCkge1xuICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJyk7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpO1xuICBncmlkLnNoaXBzID0gbmV3IFNldCgpO1xuXG4gIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7XG4gICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG5cbiAgICAgIGlmIChzaGlwLmNvb3Jkcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZ3JpZC5zaGlwcy5kZWxldGUoc2hpcC5jb29yZHNbaV0udG9TdHJpbmcoKSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xuICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICAgIH0pO1xuXG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHdpZHRoID0gc2hpcC5zdHlsZS53aWR0aC5zbGljZSgwLC0yKTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHNoaXAuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsLTIpO1xuXG4gICAgICBpZiAod2lkdGggPiA1MCB8fCBoZWlnaHQgPiA1MCkge1xuICAgICAgICBzaGlwLnN0eWxlLmhlaWdodCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgc2hpcC5zdHlsZS53aWR0aCA9IGAke2hlaWdodH1weGA7XG4gICAgICB9O1xuXG4gICAgICBpZiAoc2hpcC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZ3JpZCcpKSB7XG4gICAgICAgIGlmICgrd2lkdGggPiAraGVpZ2h0KSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwLmNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZ3JpZC5zaGlwcy5kZWxldGUoc2hpcC5jb29yZHNbaV0udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBzaGlwLmNvb3Jkc1tpXVsxXSA9IHNoaXAuY29vcmRzWzBdWzFdO1xuICAgICAgICAgICAgc2hpcC5jb29yZHNbaV1bMF0gPSBzaGlwLmNvb3Jkc1tpXVswXSArIGk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXAuY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBncmlkLnNoaXBzLmRlbGV0ZShzaGlwLmNvb3Jkc1tpXS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHNoaXAuY29vcmRzW2ldWzBdID0gc2hpcC5jb29yZHNbMF1bMF07XG4gICAgICAgICAgICBzaGlwLmNvb3Jkc1tpXVsxXSA9IHNoaXAuY29vcmRzW2ldWzFdICsgaTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5jb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZ3JpZC5zaGlwcy5oYXMoc2hpcC5jb29yZHNbaV0udG9TdHJpbmcoKSkpIHsgc2hpcC5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZWQnIH1cbiAgICAgICAgICBlbHNlIGlmIChzaGlwLmNvb3Jkc1tpXVswXSA+IDEwIHx8IHNoaXAuY29vcmRzW2ldWzFdID4gMTApe1xuICAgICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZWQnO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgY2FsY3VsYXRlR3JpZFNldCgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7Ly9ncmlkIGlzbnQgemVybyBpbmRleGVkXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGUudGFyZ2V0ID09PSBncmlkKSB7XG4gICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJyk7XG4gICAgICBjb25zdCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGNvbnN0IHJvdyA9IE1hdGgucm91bmQoKGUuY2xpZW50WSAtIHJlY3QudG9wKSAvIDUwKTtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IE1hdGgucm91bmQoKGUuY2xpZW50WCAtIHJlY3QubGVmdCkgLyA1MCk7XG4gICAgICBzaGlwLnN0eWxlLmdyaWRSb3cgPSByb3c7XG4gICAgICBzaGlwLnN0eWxlLmdyaWRDb2x1bW4gPSBjb2x1bW47XG5cbiAgICAgIGNvbnN0IHNoaXBIZWlnaHQgPSBzaGlwLnN0eWxlLmhlaWdodC5zbGljZSgwLC0yKTtcbiAgICAgIGNvbnN0IHNoaXBXaWR0aCA9IHNoaXAuc3R5bGUud2lkdGguc2xpY2UoMCwtMik7XG5cbiAgICAgIHNoaXAuY29vcmRzID0gW107XG5cbiAgICAgIGlmICgrc2hpcEhlaWdodCA+ICtzaGlwV2lkdGgpIHtcbiAgICAgICAgbGV0IHNxdWFyZXNTaGlwVGFrZXNVcCA9ICtzaGlwSGVpZ2h0IC8gNTA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzU2hpcFRha2VzVXA7IGkrKykge1xuICAgICAgICAgIHNoaXAuY29vcmRzLnB1c2goW3JvdytpLCBjb2x1bW5dKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBzcXVhcmVzU2hpcFRha2VzVXAgPSBzaGlwV2lkdGggLyA1MDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZXNTaGlwVGFrZXNVcDsgaSsrKSB7XG4gICAgICAgICAgc2hpcC5jb29yZHMucHVzaChbcm93LCBjb2x1bW4raV0pO1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgc2hpcC5zdHlsZS5ib3JkZXJDb2xvciA9ICduYXZ5JztcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2hpcC5jb29yZHNbaV1bMF0gPiAxMCB8fFxuICAgICAgICAgICAgc2hpcC5jb29yZHNbaV1bMF0gPCAxIHx8XG4gICAgICAgICAgICBzaGlwLmNvb3Jkc1tpXVsxXSA+IDEwIHx8XG4gICAgICAgICAgICBzaGlwLmNvb3Jkc1tpXVsxXSA8IDEpIHtcbiAgICAgICAgICBzaGlwLnN0eWxlLmJvcmRlckNvbG9yID0gJ3JlZCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZ3JpZC5zaGlwcy5oYXMoc2hpcC5jb29yZHNbaV0udG9TdHJpbmcoKSkpIHsgc2hpcC5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZWQnIH1cbiAgICAgIH07XG5cbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2FsY3VsYXRlR3JpZFNldCgpIHtcbiAgICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwcycpO1xuICAgIGNvbnN0IHNoaXBzID0gWy4uLmdyaWQuY2hpbGRyZW5dLmZpbHRlcihzaGlwID0+IHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpO1xuICAgIGdyaWQuc2hpcHMgPSBuZXcgU2V0KCk7XG5cbiAgICBbLi4uc2hpcHNdLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICBpZiAoc2hpcC5zdHlsZS5ib3JkZXJDb2xvciA9PT0gJ3JlZCcpIHtcbiAgICAgICAgc2hpcC5jb29yZHMgPSBbXTtcbiAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXJDb2xvciA9ICduYXZ5JztcbiAgICAgICAgc2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZ3JpZC5zaGlwcy5hZGQoc2hpcC5jb29yZHNbaV0udG9TdHJpbmcoKSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBjYWxjdWxhdGVHcmlkU2V0KTtcbn07XG5cbmV4cG9ydCB7IHNldHVwQm9hcmRQaGFzZSB9O1xuIiwiXG5mdW5jdGlvbiBnZXRTdWJtaXRlZENvb3JkcygpIHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyk7XG4gIGNvbnN0IHBsYWNlZFNoaXBzID0gWy4uLmdyaWQuY2hpbGRyZW5dLmZpbHRlcihzaGlwID0+IHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpO1xuICBjb25zdCBhbGxDb29yZHMgPSBbXTtcblxuICBpZiAocGxhY2VkU2hpcHMubGVuZ3RoID09PSAxMCkge1xuICAgIHBsYWNlZFNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICBhbGxDb29yZHMucHVzaChzaGlwLmNvb3Jkcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWxsQ29vcmRzO1xuICB9O1xufTtcblxuZnVuY3Rpb24gc3VibWl0Q29vcmRzKHBsYXllcikge1xuICBjb25zdCBzdWJtaXRlZENvb3JkcyA9IGdldFN1Ym1pdGVkQ29vcmRzKCk7XG5cbiAgaWYgKHN1Ym1pdGVkQ29vcmRzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJtaXRlZENvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgc3VibWl0ZWRDb29yZHNbaV0gPSBzdWJtaXRlZENvb3Jkc1tpXS5tYXAoY29vcmQgPT4gW2Nvb3JkWzBdLTEsIGNvb3JkWzFdLTFdKTtcbiAgICAgIHBsYXllci5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoc3VibWl0ZWRDb29yZHNbaV0pO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ25vdCBhbGwgc2hpcHMgcGxhY2VkIHZhbGlkbHknKTtcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHN1Ym1pdENvb3JkcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiJ3VzZSBzdHJpY3QnO1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblV0aWxpdHkgc3R5bGVzID0+IHN0eWxlLmNzc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2hvbWUuY3NzJztcbmltcG9ydCAnLi9nYW1lLmNzcyc7XG5cbmltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tICcuL2NyZWF0ZVNoaXAuanMnO1xuaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSAnLi9wbGF5ZXIuanMnO1xuaW1wb3J0IHsgc2V0dXBTaGlwcywgYXR0YWNrUGhhc2UsIHVwZGF0ZU1pbmlHcmlkLCBkaXNwbGF5V2lubmVyLCBjbGVhckdyaWQsIGNsZWFyTWluaUdyaWQsIHBhc3NEZXZpY2UsIHVwZGF0ZUdyaWQsIGRpc3BsYXlCb3RoQm9hcmRzIH0gZnJvbSAnLi9oYW5kbGVET00uanMnO1xuaW1wb3J0IHsgZGlzcGxheUFjdGl2ZVBsYXllciB9IGZyb20gJy4vaGFuZGxlRE9NLmpzJztcbmltcG9ydCB7IHJlc2V0Qm9hcmQgfSBmcm9tICcuL3Jlc2V0QnRuLmpzJztcbmltcG9ydCB7IHBsYWNlUmFuZG9tbHkgfSBmcm9tICcuL3BsYWNlUmFuZG9tbHlCdG4uanMnO1xuaW1wb3J0IHsgc3VibWl0Q29vcmRzIH0gZnJvbSAnLi9zdWJtaXRCdG4uanMnO1xuaW1wb3J0IHsgc2V0dXBCb2FyZFBoYXNlIH0gZnJvbSBcIi4vc2V0dXBCb2FyZFBoYXNlLmpzXCI7XG5cbmxldCBnYW1lbW9kZSA9IG51bGw7XG5sZXQgYWN0aXZlUGxheWVyID0gbnVsbDtcbmNvbnN0IHNpbmdsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaW5nbGUnKTtcbmNvbnN0IGRvdWJsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb3VibGUnKTtcblxuZnVuY3Rpb24gcGxheWVyQXR0YWNrKGUsIGRlZmVuZGluZ1BsYXllcikge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICBjb25zdCByb3cgPSBNYXRoLmNlaWwoKGUuY2xpZW50WSAtIHJlY3QudG9wKSAvIDUwKTtcbiAgY29uc3QgY29sdW1uID0gTWF0aC5jZWlsKChlLmNsaWVudFggLSByZWN0LmxlZnQpIC8gNTApO1xuXG4gIGRpdi5zdHlsZS5ncmlkUm93ID0gcm93O1xuICBkaXYuc3R5bGUuZ3JpZENvbHVtbiA9IGNvbHVtbjtcblxuICBpZiAoZGVmZW5kaW5nUGxheWVyLnBsYXllckJvYXJkLnJlY2lldmVBdHRhY2socm93LTEsIGNvbHVtbi0xKSkge1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgfSBlbHNlIHtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICB9O1xuXG4gIGdyaWQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgcmV0dXJuIGRpdi5jbGFzc0xpc3RbMF07XG59O1xuXG5mdW5jdGlvbiBjcHVBdHRhY2socGxheWVyKSB7XG4gIHBsYXllci5wbGF5ZXJCb2FyZC5yZWNpZXZlU21hcnRBdHRhY2soKTtcbiAgY29uc3QgbWluaUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWluaS1ncmlkJyk7XG4gIHVwZGF0ZU1pbmlHcmlkKHBsYXllci5wbGF5ZXJCb2FyZCwgbWluaUdyaWQpO1xufTtcblxuZnVuY3Rpb24gY2hhbmdlTW9kZSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICBib2R5LmlubmVySFRNTCA9ICcnXG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J0bi1jb250YWluZXInKTtcbiAgY29uc3Qgc2luZ2xlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNpbmdsZUJ0bi5pZCA9ICdzaW5nbGUnO1xuICBzaW5nbGVCdG4uaW5uZXJUZXh0ID0gJ1NpbmdsZSBQbGF5ZXIgKHZzIENQVSknO1xuICBjb25zdCBkb3VibGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZG91YmxlQnRuLmlkID0gJ2RvdWJsZSc7XG4gIGRvdWJsZUJ0bi5pbm5lclRleHQgPSAnRG91YmxlIFBsYXllciAoTG9jYWwgcGxheSknO1xuXG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaW5nbGVCdG4pO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZG91YmxlQnRuKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG5cbiAgc2luZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2luZ2xlUGxheWVyKTtcbiAgZG91YmxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG91YmxlUGxheWVyKTtcbn07XG5cbmZ1bmN0aW9uIHBsYXlBZ2FpbihnYW1lbW9kZSkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBpZiAoZ2FtZW1vZGUgPT09ICdzaW5nbGUnKSB7XG4gICAgc2luZ2xlUGxheWVyKCk7XG4gIH0gZWxzZSB7XG4gICAgZG91YmxlUGxheWVyKCk7XG4gIH07XG59O1xuXG5mdW5jdGlvbiBjaGVja0Zvcldpbm5lcnMocGxheWVyT25lLCBwbGF5ZXJUd28pIHtcbiAgbGV0IHdpbm5lciA9IG51bGw7XG5cbiAgaWYgKHBsYXllclR3by5wbGF5ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgIHdpbm5lciA9IHBsYXllck9uZTtcbiAgfSBlbHNlIGlmIChwbGF5ZXJPbmUucGxheWVyQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICB3aW5uZXIgPSBwbGF5ZXJUd287XG4gIH07XG5cbiAgaWYgKHdpbm5lcikge1xuICAgIGRpc3BsYXlXaW5uZXIod2lubmVyKTtcbiAgICBjb25zdCBjaGFuZ2VNb2RlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS1tb2RlJyk7XG4gICAgY2hhbmdlTW9kZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZU1vZGUpO1xuICAgIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWFnYWluJyk7XG4gICAgcGxheUFnYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcGxheUFnYWluKGdhbWVtb2RlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGdyaWRDbGlja2VkU2luZ2xlKGUpIHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyk7XG5cbiAgaWYgKGUudGFyZ2V0ID09PSBncmlkKSB7XG4gICAgcGxheWVyQXR0YWNrKGUsIGdyaWQucGxheWVyVHdvKTtcbiAgICBjcHVBdHRhY2soZ3JpZC5wbGF5ZXJPbmUpO1xuXG4gICAgaWYgKGNoZWNrRm9yV2lubmVycyhncmlkLnBsYXllck9uZSwgZ3JpZC5wbGF5ZXJUd28pKSB7XG4gICAgICBncmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ3JpZENsaWNrZWRTaW5nbGUpO1xuICAgIH07XG4gIH07XG59O1xuXG5mdW5jdGlvbiBzaW5nbGVHYW1lTG9vcChwbGF5ZXJPbmUsIHBsYXllclR3bykge1xuICBhdHRhY2tQaGFzZShwbGF5ZXJPbmUpO1xuXG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpO1xuICBncmlkLnBsYXllck9uZSA9IHBsYXllck9uZTtcbiAgZ3JpZC5wbGF5ZXJUd28gPSBwbGF5ZXJUd287XG4gIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBncmlkQ2xpY2tlZFNpbmdsZSk7XG59O1xuXG5mdW5jdGlvbiBzaW5nbGVQbGF5ZXIoKSB7XG4gIGdhbWVtb2RlID0gJ3NpbmdsZSc7XG4gIHNldHVwU2hpcHMoKTtcbiAgc2V0dXBCb2FyZFBoYXNlKCk7XG5cbiAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKTtcbiAgY29uc3QgcGxhY2VSYW5kb21seUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZS1yYW5kb21seScpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG5cbiAgY29uc3QgcGxheWVyT25lID0gcGxheWVyKCk7XG4gIHBsYXllck9uZS5uYW1lID0gJ3BsYXllcic7XG4gIGNvbnN0IGNwdSA9IHBsYXllcigpO1xuICBjcHUubmFtZSA9ICdjb21wdXRlcic7XG5cbiAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEJvYXJkKTtcbiAgcGxhY2VSYW5kb21seUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUmFuZG9tbHkpO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc3VibWl0Q29vcmRzKHBsYXllck9uZSk7XG4gICAgY3B1LnBsYXllckJvYXJkLnBsYWNlUmFuZG9tU2hpcHMoKTtcbiAgICBzaW5nbGVHYW1lTG9vcChwbGF5ZXJPbmUsIGNwdSk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gZG91YmxlUGxheWVyKCkge1xuICBnYW1lbW9kZSA9ICdkb3VibGUnO1xuICBzZXR1cFNoaXBzKCk7XG4gIHNldHVwQm9hcmRQaGFzZSgpO1xuXG4gIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0Jyk7XG4gIGNvbnN0IHBsYWNlUmFuZG9tbHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2UtcmFuZG9tbHknKTtcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xuXG4gIGNvbnN0IHBsYXllck9uZSA9IHBsYXllcigpO1xuICBwbGF5ZXJPbmUubmFtZSA9ICdQbGF5ZXIgT25lJztcbiAgY29uc3QgcGxheWVyVHdvID0gcGxheWVyKCk7XG4gIHBsYXllclR3by5uYW1lID0gJ1BsYXllciBUd28nO1xuXG4gIGFjdGl2ZVBsYXllciA9IHBsYXllck9uZTtcbiAgZGlzcGxheUFjdGl2ZVBsYXllcihhY3RpdmVQbGF5ZXIpO1xuXG4gIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRCb2FyZCk7XG4gIHBsYWNlUmFuZG9tbHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGFjZVJhbmRvbWx5KTtcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHN1Ym1pdENvb3JkcyhhY3RpdmVQbGF5ZXIpO1xuXG4gICAgaWYgKGFjdGl2ZVBsYXllciA9PT0gcGxheWVyT25lKSB7XG4gICAgICByZXNldEJvYXJkKCk7XG4gICAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJUd287XG4gICAgICBkaXNwbGF5QWN0aXZlUGxheWVyKGFjdGl2ZVBsYXllcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2ZVBsYXllciA9IHBsYXllck9uZTtcbiAgICAgIGRvdWJsZUdhbWVMb29wKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbiAgICB9O1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGRvdWJsZUdhbWVMb29wKHBsYXllck9uZSwgcGxheWVyVHdvKSB7XG4gIGF0dGFja1BoYXNlKGFjdGl2ZVBsYXllcik7XG4gIGRpc3BsYXlBY3RpdmVQbGF5ZXIoYWN0aXZlUGxheWVyKTtcblxuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKTtcbiAgZ3JpZC5wbGF5ZXJPbmUgPSBwbGF5ZXJPbmU7XG4gIGdyaWQucGxheWVyVHdvID0gcGxheWVyVHdvO1xuICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ3JpZENsaWNrZWREb3VibGUpO1xufTtcblxuZnVuY3Rpb24gZ3JpZENsaWNrZWREb3VibGUoZSkge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKTtcbiAgY29uc3QgcGxheWVyT25lID0gZ3JpZC5wbGF5ZXJPbmU7XG4gIGNvbnN0IHBsYXllclR3byA9IGdyaWQucGxheWVyVHdvO1xuICBsZXQgbGFzdFBsYXllcjtcbiAgbGV0IGxhc3RUdXJuU3RhdHVzO1xuXG4gIGlmIChlLnRhcmdldCA9PT0gZ3JpZCkge1xuICAgIGxhc3RQbGF5ZXIgPSBhY3RpdmVQbGF5ZXI7XG4gICAgYWN0aXZlUGxheWVyID09PSBwbGF5ZXJPbmUgPyBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJUd28gOiBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJPbmU7XG4gICAgbGFzdFR1cm5TdGF0dXMgPSBwbGF5ZXJBdHRhY2soZSwgYWN0aXZlUGxheWVyKTtcbiAgICBjbGVhckdyaWQoKTtcbiAgICBjbGVhck1pbmlHcmlkKCk7XG5cbiAgICBpZiAoIWNoZWNrRm9yV2lubmVycyhwbGF5ZXJPbmUsIHBsYXllclR3bykpIHtcbiAgICAgIHBhc3NEZXZpY2UoYWN0aXZlUGxheWVyLCBsYXN0VHVyblN0YXR1cyk7XG4gICAgICBjb25zdCBuZXh0VHVybkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC10dXJuJyk7XG4gICAgICBuZXh0VHVybkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIHVwZGF0ZUdyaWQobGFzdFBsYXllci5wbGF5ZXJCb2FyZCk7XG4gICAgICAgIGNvbnN0IG1pbmlHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbmktZ3JpZCcpO1xuICAgICAgICB1cGRhdGVNaW5pR3JpZChhY3RpdmVQbGF5ZXIucGxheWVyQm9hcmQsIG1pbmlHcmlkKTtcbiAgICAgICAgZGlzcGxheUFjdGl2ZVBsYXllcihhY3RpdmVQbGF5ZXIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdyaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBncmlkQ2xpY2tlZERvdWJsZSk7XG4gICAgICBkaXNwbGF5Qm90aEJvYXJkcyhwbGF5ZXJPbmUsIHBsYXllclR3byk7XG4gICAgICBjaGVja0Zvcldpbm5lcnMocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuICAgIH07XG4gIH07XG59O1xuXG5zaW5nbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaW5nbGVQbGF5ZXIpO1xuZG91YmxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG91YmxlUGxheWVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==