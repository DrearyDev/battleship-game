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

  --SIZE_MODIFIER: 1.6;
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

@media only screen and (max-width: 500px) {
  :root {
    --SIZE_MODIFIER: 1.6;
  }

  .grid {
    width: calc(var(--GRID_WIDTH) / var(--SIZE_MODIFIER) + 1px);
    height: calc(var(--GRID_WIDTH) / var(--SIZE_MODIFIER) + 1px);
    grid-template-columns: repeat(10, calc(var(--SQUARE_WIDTH) / var(--SIZE_MODIFIER)));
    grid-template-rows: repeat(10, calc(var(--SQUARE_WIDTH) / var(--SIZE_MODIFIER)));
  }

  .square {
    width: calc(var(--SQUARE_WIDTH) / var(--SIZE_MODIFIER));
    height: calc(var(--SQUARE_WIDTH) / var(--SIZE_MODIFIER));
  }

  .ships {
    width: calc(var(--GRID_WIDTH) / var(--SIZE_MODIFIER));
  }

  .buttons-container {
    flex-direction: column;
  }

  .miss, .hit {
    width: calc(var(--SQUARE_WIDTH) / var(--SIZE_MODIFIER));
    height: calc(var(--SQUARE_WIDTH) / var(--SIZE_MODIFIER));
  }
  .miss:before, .miss:after,
  .hit:before, .hit:after {
    height: 7px;
  }

  .winner-msg {
    width: calc(var(--GRID_WIDTH) / var(--SIZE_MODIFIER) + 1px);
  }

  .pass-device {
    width: calc(var(--GRID_WIDTH) / var(--SIZE_MODIFIER) + 1px);
    height: calc(var(--GRID_WIDTH) / var(--SIZE_MODIFIER) + 1px);
  }
}
`, "",{"version":3,"sources":["webpack://./src/game.css"],"names":[],"mappings":";AACA;EACE,mBAAmB;EACnB,0BAA0B;EAC1B,8BAA8B;;EAE9B,oBAAoB;EACpB,qBAAqB;;EAErB,qBAAqB;EACrB,2BAA2B;EAC3B,6BAA6B;;EAE7B,yBAAyB;EACzB,sBAAsB;;EAEtB,wBAAwB;;EAExB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,4BAA4B;EAC5B,sBAAsB;EACtB,SAAS;AACX;;AAEA;;EAEE,wBAAwB;EACxB,yBAAyB;EACzB,uCAAuC;EACvC,oCAAoC;EACpC,aAAa;EACb,0BAA0B;EAC1B,gBAAgB;AAClB;AACA;;EAEE,0BAA0B;EAC1B,4BAA4B;EAC5B,0BAA0B;EAC1B,sCAAsC;EACtC,WAAW;AACb;;AAEA;EACE,wBAAwB;EACxB,eAAe;EACf,aAAa;EACb,SAAS;AACX;AACA;EACE,sCAAsC;EACtC,0BAA0B;EAC1B,YAAY;AACd;AACA;EACE,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;EAEE,0BAA0B;EAC1B,4BAA4B;EAC5B,sCAAsC;EACtC,0BAA0B;EAC1B,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,yCAAyC;;EAEzC,yBAAyB;EACzB,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,MAAM;EACN,SAAS;AACX;AACA;;EAEE,wBAAwB;AAC1B;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,wCAAwC;EACxC,yCAAyC;EACzC,uCAAuC;EACvC,oCAAoC;AACtC;AACA;EACE,qCAAqC;EACrC,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;EACtC,0BAA0B;AAC5B;;AAEA;;EAEE,qCAAqC;EACrC,sCAAsC;AACxC;AACA;;;;EAIE,WAAW;AACb;AACA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,aAAa;;EAEb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;;EAET,yCAAyC;EACzC,0BAA0B;AAC5B;;AAEA;EACE,aAAa;;EAEb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;;EAEb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;;EAET,kBAAkB;;EAElB,yCAAyC;EACzC,0BAA0B;AAC5B;;AAEA;EACE;IACE,oBAAoB;EACtB;;EAEA;IACE,2DAA2D;IAC3D,4DAA4D;IAC5D,mFAAmF;IACnF,gFAAgF;EAClF;;EAEA;IACE,uDAAuD;IACvD,wDAAwD;EAC1D;;EAEA;IACE,qDAAqD;EACvD;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,uDAAuD;IACvD,wDAAwD;EAC1D;EACA;;IAEE,WAAW;EACb;;EAEA;IACE,2DAA2D;EAC7D;;EAEA;IACE,2DAA2D;IAC3D,4DAA4D;EAC9D;AACF","sourcesContent":["\n:root {\n  --GRID_WIDTH: 502px;\n  --GRID_BG_COLOR: lightblue;\n  --GRID_BORDER: 1px solid black;\n\n  --SQUARE_WIDTH: 50px;\n  --SQUARE_HEIGHT: 50px;\n\n  --SHIP_BG_COLOR: #aaa;\n  --SHIP_DRAGGING_COLOR: #ccc;\n  --SHIP_BORDER: 2px solid navy;\n\n  --MISS_CROSS_COLOR: black;\n  --HIT_CROSS_COLOR: red;\n\n  --MESSAGE_BG_COLOR: #fff;\n\n  --SIZE_MODIFIER: 1.6;\n}\n\n* {\n  user-select: none;\n}\n\nbody {\n  padding: 100px 0px 100px 0px;\n  flex-direction: column;\n  gap: 25px;\n}\n\n.grid,\n.mini-grid {\n  width: var(--GRID_WIDTH);\n  height: var(--GRID_WIDTH);\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n  display: grid;\n  border: var(--GRID_BORDER);\n  overflow: hidden;\n}\n.square,\n.mini-square {\n  width: var(--SQUARE_WIDTH);\n  height: var(--SQUARE_HEIGHT);\n  border: var(--GRID_BORDER);\n  background-color: var(--GRID_BG_COLOR);\n  z-index: -1;\n}\n\n.ships {\n  width: var(--GRID_WIDTH);\n  flex-wrap: wrap;\n  display: flex;\n  gap: 10px;\n}\n.ship {\n  background-color: var(--SHIP_BG_COLOR);\n  border: var(--SHIP_BORDER);\n  cursor: move;\n}\n.ship.dragging {\n  background-color: var(--SHIP_DRAGGING_COLOR);\n}\n\n.buttons-container {\n  display: flex;\n  gap: 10px;\n}\n\n.miss,\n.hit {\n  width: var(--SQUARE_WIDTH);\n  height: var(--SQUARE_HEIGHT);\n  background-color: var(--GRID_BG_COLOR);\n  border: var(--GRID_BORDER);\n  position: relative;\n}\n.miss:before, .miss:after,\n.hit:before, .hit:after {\n  width: 100%;\n  height: 10px;\n  content: '';\n  margin: auto;\n  background-color: var(--MISS_CROSS_COLOR);\n\n  transform: rotate(-45deg);\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.miss:after,\n.hit:after {\n  transform: rotate(45deg);\n}\n\n.hit:before, .hit:after {\n  background-color: var(--HIT_CROSS_COLOR);\n}\n\n.mini-grid {\n  width: calc(var(--GRID_WIDTH) / 2 + 1px);\n  height: calc(var(--GRID_WIDTH) / 2 + 1px);\n  grid-template-columns: repeat(10, 25px);\n  grid-template-rows: repeat(10, 25px);\n}\n.mini-square {\n  width: calc(var(--SQUARE_HEIGHT) / 2);\n  height: calc(var(--SQUARE_HEIGHT) / 2);\n}\n\n.mini-ship {\n  background-color: var(--SHIP_BG_COLOR);\n  border: var(--GRID_BORDER);\n}\n\n.mini-grid > .miss,\n.mini-grid > .hit {\n  width: calc(var(--SQUARE_HEIGHT) / 2);\n  height: calc(var(--SQUARE_HEIGHT) / 2);\n}\n.mini-grid > .miss:before,\n.mini-grid > .hit:before,\n.mini-grid > .miss:after,\n.mini-grid > .hit:after {\n  height: 5px;\n}\n.mini-grid > .hit {\n  background-color: transparent;\n}\n\n.winner-msg {\n  width: 500px;\n  padding: 10px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n\n  background-color: var(--MESSAGE_BG_COLOR);\n  border: var(--GRID_BORDER);\n}\n\n.game-over-options {\n  padding: 10px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.pass-device {\n  width: 450px;\n  height: 450px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n\n  position: absolute;\n\n  background-color: var(--MESSAGE_BG_COLOR);\n  border: var(--GRID_BORDER);\n}\n\n@media only screen and (max-width: 500px) {\n  :root {\n    --SIZE_MODIFIER: 1.6;\n  }\n\n  .grid {\n    width: calc(var(--GRID_WIDTH) / var(--SIZE_MODIFIER) + 1px);\n    height: calc(var(--GRID_WIDTH) / var(--SIZE_MODIFIER) + 1px);\n    grid-template-columns: repeat(10, calc(var(--SQUARE_WIDTH) / var(--SIZE_MODIFIER)));\n    grid-template-rows: repeat(10, calc(var(--SQUARE_WIDTH) / var(--SIZE_MODIFIER)));\n  }\n\n  .square {\n    width: calc(var(--SQUARE_WIDTH) / var(--SIZE_MODIFIER));\n    height: calc(var(--SQUARE_WIDTH) / var(--SIZE_MODIFIER));\n  }\n\n  .ships {\n    width: calc(var(--GRID_WIDTH) / var(--SIZE_MODIFIER));\n  }\n\n  .buttons-container {\n    flex-direction: column;\n  }\n\n  .miss, .hit {\n    width: calc(var(--SQUARE_WIDTH) / var(--SIZE_MODIFIER));\n    height: calc(var(--SQUARE_WIDTH) / var(--SIZE_MODIFIER));\n  }\n  .miss:before, .miss:after,\n  .hit:before, .hit:after {\n    height: 7px;\n  }\n\n  .winner-msg {\n    width: calc(var(--GRID_WIDTH) / var(--SIZE_MODIFIER) + 1px);\n  }\n\n  .pass-device {\n    width: calc(var(--GRID_WIDTH) / var(--SIZE_MODIFIER) + 1px);\n    height: calc(var(--GRID_WIDTH) / var(--SIZE_MODIFIER) + 1px);\n  }\n}\n"],"sourceRoot":""}]);
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
    const squareWidth = getComputedStyle(square).getPropertyValue('width').slice(0,-2);

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
  playerOneH2.innerText = `${playerOne.name}'s Board:`;

  const playerTwoH2 = document.createElement('h2');
  playerTwoH2.innerText = `${playerTwo.name}'s Board:`;

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
  const squareWidth = getComputedStyle(square).getPropertyValue('width').slice(0,-2);

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
      const square = document.querySelector('.square');
      const squareWidth = getComputedStyle(square).getPropertyValue('width').slice(0,-2);
      const width = ship.style.width.slice(0,-2);
      const height = ship.style.height.slice(0,-2);

      if (+width > +squareWidth || +height > +squareWidth) {
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
      const square = document.querySelector('.square');
      const squareWidth = getComputedStyle(square).getPropertyValue('width').slice(0,-2);
      const ship = document.querySelector('.dragging');
      const rect = e.target.getBoundingClientRect();

      let row = Math.ceil((e.clientY - rect.top) / squareWidth);
      let column = Math.ceil((e.clientX - rect.left) / squareWidth);

      if (row > 10) { row = 10 };
      if (column > 10) { column = 10 };

      ship.style.gridRow = row;
      ship.style.gridColumn = column;

      const shipHeight = ship.style.height.slice(0,-2);
      const shipWidth = ship.style.width.slice(0,-2);

      ship.coords = [];

      if (+shipHeight > +shipWidth) {
        let squaresShipTakesUp = +shipHeight / squareWidth;

        for (let i = 0; i < squaresShipTakesUp; i++) {
          ship.coords.push([row+i, column]);
        };
      } else {
        let squaresShipTakesUp = shipWidth / squareWidth;

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
    return true;
  } else {
    console.log('not all ships placed validly');
    return false;
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
  const square = document.querySelector('.square');
  const squareWidth = getComputedStyle(square).getPropertyValue('width').slice(0,-2);
  const grid = document.querySelector('.grid');
  const div = document.createElement('div');
  const rect = e.target.getBoundingClientRect();

  const row = Math.ceil((e.clientY - rect.top) / squareWidth);
  const column = Math.ceil((e.clientX - rect.left) / squareWidth);

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
      (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.displayBothBoards)(grid.playerOne, grid.playerTwo);
      checkForWinners(grid.playerOne, grid.playerTwo);
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
  playerOne.name = 'Player';
  const cpu = (0,_player_js__WEBPACK_IMPORTED_MODULE_5__.player)();
  cpu.name = 'Computer';

  resetBtn.addEventListener('click', _resetBtn_js__WEBPACK_IMPORTED_MODULE_7__.resetBoard);
  placeRandomlyBtn.addEventListener('click', _placeRandomlyBtn_js__WEBPACK_IMPORTED_MODULE_8__.placeRandomly);
  submitBtn.addEventListener('click', () => {
    if ((0,_submitBtn_js__WEBPACK_IMPORTED_MODULE_9__.submitCoords)(playerOne)) {
      cpu.playerBoard.placeRandomShips();
      singleGameLoop(playerOne, cpu);
    }
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
    if ((0,_submitBtn_js__WEBPACK_IMPORTED_MODULE_9__.submitCoords)(activePlayer)) {
      if (activePlayer === playerOne) {
        (0,_resetBtn_js__WEBPACK_IMPORTED_MODULE_7__.resetBoard)();
        activePlayer = playerTwo;
        (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_6__.displayActivePlayer)(activePlayer);
      } else {
        activePlayer = playerOne;
        doubleGameLoop(playerOne, playerTwo);
      };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMkVBQTJFLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLGFBQWEsY0FBYyxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sUUFBUSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFh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dGxlc2hpcC1nYW1lLy4vc3JjL2dhbWUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9ob21lLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2dhbWUuY3NzPzQ3ODYiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2hvbWUuY3NzPzdmOWMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2NyZWF0ZVNoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvaGFuZGxlRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9wbGFjZVJhbmRvbWx5QnRuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3Jlc2V0QnRuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zZXR1cEJvYXJkUGhhc2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N1Ym1pdEJ0bi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuOnJvb3Qge1xuICAtLUdSSURfV0lEVEg6IDUwMnB4O1xuICAtLUdSSURfQkdfQ09MT1I6IGxpZ2h0Ymx1ZTtcbiAgLS1HUklEX0JPUkRFUjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gIC0tU1FVQVJFX1dJRFRIOiA1MHB4O1xuICAtLVNRVUFSRV9IRUlHSFQ6IDUwcHg7XG5cbiAgLS1TSElQX0JHX0NPTE9SOiAjYWFhO1xuICAtLVNISVBfRFJBR0dJTkdfQ09MT1I6ICNjY2M7XG4gIC0tU0hJUF9CT1JERVI6IDJweCBzb2xpZCBuYXZ5O1xuXG4gIC0tTUlTU19DUk9TU19DT0xPUjogYmxhY2s7XG4gIC0tSElUX0NST1NTX0NPTE9SOiByZWQ7XG5cbiAgLS1NRVNTQUdFX0JHX0NPTE9SOiAjZmZmO1xuXG4gIC0tU0laRV9NT0RJRklFUjogMS42O1xufVxuXG4qIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmJvZHkge1xuICBwYWRkaW5nOiAxMDBweCAwcHggMTAwcHggMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI1cHg7XG59XG5cbi5ncmlkLFxuLm1pbmktZ3JpZCB7XG4gIHdpZHRoOiB2YXIoLS1HUklEX1dJRFRIKTtcbiAgaGVpZ2h0OiB2YXIoLS1HUklEX1dJRFRIKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDUwcHgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJvcmRlcjogdmFyKC0tR1JJRF9CT1JERVIpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNxdWFyZSxcbi5taW5pLXNxdWFyZSB7XG4gIHdpZHRoOiB2YXIoLS1TUVVBUkVfV0lEVEgpO1xuICBoZWlnaHQ6IHZhcigtLVNRVUFSRV9IRUlHSFQpO1xuICBib3JkZXI6IHZhcigtLUdSSURfQk9SREVSKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tR1JJRF9CR19DT0xPUik7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uc2hpcHMge1xuICB3aWR0aDogdmFyKC0tR1JJRF9XSURUSCk7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xufVxuLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1TSElQX0JHX0NPTE9SKTtcbiAgYm9yZGVyOiB2YXIoLS1TSElQX0JPUkRFUik7XG4gIGN1cnNvcjogbW92ZTtcbn1cbi5zaGlwLmRyYWdnaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tU0hJUF9EUkFHR0lOR19DT0xPUik7XG59XG5cbi5idXR0b25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbn1cblxuLm1pc3MsXG4uaGl0IHtcbiAgd2lkdGg6IHZhcigtLVNRVUFSRV9XSURUSCk7XG4gIGhlaWdodDogdmFyKC0tU1FVQVJFX0hFSUdIVCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUdSSURfQkdfQ09MT1IpO1xuICBib3JkZXI6IHZhcigtLUdSSURfQk9SREVSKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1pc3M6YmVmb3JlLCAubWlzczphZnRlcixcbi5oaXQ6YmVmb3JlLCAuaGl0OmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTBweDtcbiAgY29udGVudDogJyc7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTUlTU19DUk9TU19DT0xPUik7XG5cbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG4ubWlzczphZnRlcixcbi5oaXQ6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5oaXQ6YmVmb3JlLCAuaGl0OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSElUX0NST1NTX0NPTE9SKTtcbn1cblxuLm1pbmktZ3JpZCB7XG4gIHdpZHRoOiBjYWxjKHZhcigtLUdSSURfV0lEVEgpIC8gMiArIDFweCk7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1HUklEX1dJRFRIKSAvIDIgKyAxcHgpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjVweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyNXB4KTtcbn1cbi5taW5pLXNxdWFyZSB7XG4gIHdpZHRoOiBjYWxjKHZhcigtLVNRVUFSRV9IRUlHSFQpIC8gMik7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1TUVVBUkVfSEVJR0hUKSAvIDIpO1xufVxuXG4ubWluaS1zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tU0hJUF9CR19DT0xPUik7XG4gIGJvcmRlcjogdmFyKC0tR1JJRF9CT1JERVIpO1xufVxuXG4ubWluaS1ncmlkID4gLm1pc3MsXG4ubWluaS1ncmlkID4gLmhpdCB7XG4gIHdpZHRoOiBjYWxjKHZhcigtLVNRVUFSRV9IRUlHSFQpIC8gMik7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1TUVVBUkVfSEVJR0hUKSAvIDIpO1xufVxuLm1pbmktZ3JpZCA+IC5taXNzOmJlZm9yZSxcbi5taW5pLWdyaWQgPiAuaGl0OmJlZm9yZSxcbi5taW5pLWdyaWQgPiAubWlzczphZnRlcixcbi5taW5pLWdyaWQgPiAuaGl0OmFmdGVyIHtcbiAgaGVpZ2h0OiA1cHg7XG59XG4ubWluaS1ncmlkID4gLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ud2lubmVyLW1zZyB7XG4gIHdpZHRoOiA1MDBweDtcbiAgcGFkZGluZzogMTBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU1FU1NBR0VfQkdfQ09MT1IpO1xuICBib3JkZXI6IHZhcigtLUdSSURfQk9SREVSKTtcbn1cblxuLmdhbWUtb3Zlci1vcHRpb25zIHtcbiAgcGFkZGluZzogMTBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ucGFzcy1kZXZpY2Uge1xuICB3aWR0aDogNDUwcHg7XG4gIGhlaWdodDogNDUwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjBweDtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTUVTU0FHRV9CR19DT0xPUik7XG4gIGJvcmRlcjogdmFyKC0tR1JJRF9CT1JERVIpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLVNJWkVfTU9ESUZJRVI6IDEuNjtcbiAgfVxuXG4gIC5ncmlkIHtcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1HUklEX1dJRFRIKSAvIHZhcigtLVNJWkVfTU9ESUZJRVIpICsgMXB4KTtcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tR1JJRF9XSURUSCkgLyB2YXIoLS1TSVpFX01PRElGSUVSKSArIDFweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIGNhbGModmFyKC0tU1FVQVJFX1dJRFRIKSAvIHZhcigtLVNJWkVfTU9ESUZJRVIpKSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIGNhbGModmFyKC0tU1FVQVJFX1dJRFRIKSAvIHZhcigtLVNJWkVfTU9ESUZJRVIpKSk7XG4gIH1cblxuICAuc3F1YXJlIHtcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1TUVVBUkVfV0lEVEgpIC8gdmFyKC0tU0laRV9NT0RJRklFUikpO1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS1TUVVBUkVfV0lEVEgpIC8gdmFyKC0tU0laRV9NT0RJRklFUikpO1xuICB9XG5cbiAgLnNoaXBzIHtcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1HUklEX1dJRFRIKSAvIHZhcigtLVNJWkVfTU9ESUZJRVIpKTtcbiAgfVxuXG4gIC5idXR0b25zLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5taXNzLCAuaGl0IHtcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1TUVVBUkVfV0lEVEgpIC8gdmFyKC0tU0laRV9NT0RJRklFUikpO1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS1TUVVBUkVfV0lEVEgpIC8gdmFyKC0tU0laRV9NT0RJRklFUikpO1xuICB9XG4gIC5taXNzOmJlZm9yZSwgLm1pc3M6YWZ0ZXIsXG4gIC5oaXQ6YmVmb3JlLCAuaGl0OmFmdGVyIHtcbiAgICBoZWlnaHQ6IDdweDtcbiAgfVxuXG4gIC53aW5uZXItbXNnIHtcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1HUklEX1dJRFRIKSAvIHZhcigtLVNJWkVfTU9ESUZJRVIpICsgMXB4KTtcbiAgfVxuXG4gIC5wYXNzLWRldmljZSB7XG4gICAgd2lkdGg6IGNhbGModmFyKC0tR1JJRF9XSURUSCkgLyB2YXIoLS1TSVpFX01PRElGSUVSKSArIDFweCk7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLUdSSURfV0lEVEgpIC8gdmFyKC0tU0laRV9NT0RJRklFUikgKyAxcHgpO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9nYW1lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLDhCQUE4Qjs7RUFFOUIsb0JBQW9CO0VBQ3BCLHFCQUFxQjs7RUFFckIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQiw2QkFBNkI7O0VBRTdCLHlCQUF5QjtFQUN6QixzQkFBc0I7O0VBRXRCLHdCQUF3Qjs7RUFFeEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6Qix1Q0FBdUM7RUFDdkMsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsc0NBQXNDO0VBQ3RDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsYUFBYTtFQUNiLFNBQVM7QUFDWDtBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixzQ0FBc0M7RUFDdEMsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWix5Q0FBeUM7O0VBRXpDLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztBQUNYO0FBQ0E7O0VBRUUsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHlDQUF5QztFQUN6Qyx1Q0FBdUM7RUFDdkMsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSxxQ0FBcUM7RUFDckMsc0NBQXNDO0FBQ3hDO0FBQ0E7Ozs7RUFJRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhOztFQUViLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTOztFQUVULHlDQUF5QztFQUN6QywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhOztFQUViLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhOztFQUViLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTOztFQUVULGtCQUFrQjs7RUFFbEIseUNBQXlDO0VBQ3pDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsMkRBQTJEO0lBQzNELDREQUE0RDtJQUM1RCxtRkFBbUY7SUFDbkYsZ0ZBQWdGO0VBQ2xGOztFQUVBO0lBQ0UsdURBQXVEO0lBQ3ZELHdEQUF3RDtFQUMxRDs7RUFFQTtJQUNFLHFEQUFxRDtFQUN2RDs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHVEQUF1RDtJQUN2RCx3REFBd0Q7RUFDMUQ7RUFDQTs7SUFFRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSwyREFBMkQ7RUFDN0Q7O0VBRUE7SUFDRSwyREFBMkQ7SUFDM0QsNERBQTREO0VBQzlEO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuOnJvb3Qge1xcbiAgLS1HUklEX1dJRFRIOiA1MDJweDtcXG4gIC0tR1JJRF9CR19DT0xPUjogbGlnaHRibHVlO1xcbiAgLS1HUklEX0JPUkRFUjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgLS1TUVVBUkVfV0lEVEg6IDUwcHg7XFxuICAtLVNRVUFSRV9IRUlHSFQ6IDUwcHg7XFxuXFxuICAtLVNISVBfQkdfQ09MT1I6ICNhYWE7XFxuICAtLVNISVBfRFJBR0dJTkdfQ09MT1I6ICNjY2M7XFxuICAtLVNISVBfQk9SREVSOiAycHggc29saWQgbmF2eTtcXG5cXG4gIC0tTUlTU19DUk9TU19DT0xPUjogYmxhY2s7XFxuICAtLUhJVF9DUk9TU19DT0xPUjogcmVkO1xcblxcbiAgLS1NRVNTQUdFX0JHX0NPTE9SOiAjZmZmO1xcblxcbiAgLS1TSVpFX01PRElGSUVSOiAxLjY7XFxufVxcblxcbioge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZzogMTAwcHggMHB4IDEwMHB4IDBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI1cHg7XFxufVxcblxcbi5ncmlkLFxcbi5taW5pLWdyaWQge1xcbiAgd2lkdGg6IHZhcigtLUdSSURfV0lEVEgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1HUklEX1dJRFRIKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBib3JkZXI6IHZhcigtLUdSSURfQk9SREVSKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5zcXVhcmUsXFxuLm1pbmktc3F1YXJlIHtcXG4gIHdpZHRoOiB2YXIoLS1TUVVBUkVfV0lEVEgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1TUVVBUkVfSEVJR0hUKTtcXG4gIGJvcmRlcjogdmFyKC0tR1JJRF9CT1JERVIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tR1JJRF9CR19DT0xPUik7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLnNoaXBzIHtcXG4gIHdpZHRoOiB2YXIoLS1HUklEX1dJRFRIKTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVNISVBfQkdfQ09MT1IpO1xcbiAgYm9yZGVyOiB2YXIoLS1TSElQX0JPUkRFUik7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcbi5zaGlwLmRyYWdnaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVNISVBfRFJBR0dJTkdfQ09MT1IpO1xcbn1cXG5cXG4uYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLm1pc3MsXFxuLmhpdCB7XFxuICB3aWR0aDogdmFyKC0tU1FVQVJFX1dJRFRIKTtcXG4gIGhlaWdodDogdmFyKC0tU1FVQVJFX0hFSUdIVCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1HUklEX0JHX0NPTE9SKTtcXG4gIGJvcmRlcjogdmFyKC0tR1JJRF9CT1JERVIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWlzczpiZWZvcmUsIC5taXNzOmFmdGVyLFxcbi5oaXQ6YmVmb3JlLCAuaGl0OmFmdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgY29udGVudDogJyc7XFxuICBtYXJnaW46IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1NSVNTX0NST1NTX0NPTE9SKTtcXG5cXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxufVxcbi5taXNzOmFmdGVyLFxcbi5oaXQ6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uaGl0OmJlZm9yZSwgLmhpdDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ISVRfQ1JPU1NfQ09MT1IpO1xcbn1cXG5cXG4ubWluaS1ncmlkIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLUdSSURfV0lEVEgpIC8gMiArIDFweCk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tR1JJRF9XSURUSCkgLyAyICsgMXB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyNXB4KTtcXG59XFxuLm1pbmktc3F1YXJlIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLVNRVUFSRV9IRUlHSFQpIC8gMik7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tU1FVQVJFX0hFSUdIVCkgLyAyKTtcXG59XFxuXFxuLm1pbmktc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1TSElQX0JHX0NPTE9SKTtcXG4gIGJvcmRlcjogdmFyKC0tR1JJRF9CT1JERVIpO1xcbn1cXG5cXG4ubWluaS1ncmlkID4gLm1pc3MsXFxuLm1pbmktZ3JpZCA+IC5oaXQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tU1FVQVJFX0hFSUdIVCkgLyAyKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1TUVVBUkVfSEVJR0hUKSAvIDIpO1xcbn1cXG4ubWluaS1ncmlkID4gLm1pc3M6YmVmb3JlLFxcbi5taW5pLWdyaWQgPiAuaGl0OmJlZm9yZSxcXG4ubWluaS1ncmlkID4gLm1pc3M6YWZ0ZXIsXFxuLm1pbmktZ3JpZCA+IC5oaXQ6YWZ0ZXIge1xcbiAgaGVpZ2h0OiA1cHg7XFxufVxcbi5taW5pLWdyaWQgPiAuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ud2lubmVyLW1zZyB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1NRVNTQUdFX0JHX0NPTE9SKTtcXG4gIGJvcmRlcjogdmFyKC0tR1JJRF9CT1JERVIpO1xcbn1cXG5cXG4uZ2FtZS1vdmVyLW9wdGlvbnMge1xcbiAgcGFkZGluZzogMTBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5wYXNzLWRldmljZSB7XFxuICB3aWR0aDogNDUwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1NRVNTQUdFX0JHX0NPTE9SKTtcXG4gIGJvcmRlcjogdmFyKC0tR1JJRF9CT1JERVIpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICA6cm9vdCB7XFxuICAgIC0tU0laRV9NT0RJRklFUjogMS42O1xcbiAgfVxcblxcbiAgLmdyaWQge1xcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1HUklEX1dJRFRIKSAvIHZhcigtLVNJWkVfTU9ESUZJRVIpICsgMXB4KTtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLUdSSURfV0lEVEgpIC8gdmFyKC0tU0laRV9NT0RJRklFUikgKyAxcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgY2FsYyh2YXIoLS1TUVVBUkVfV0lEVEgpIC8gdmFyKC0tU0laRV9NT0RJRklFUikpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIGNhbGModmFyKC0tU1FVQVJFX1dJRFRIKSAvIHZhcigtLVNJWkVfTU9ESUZJRVIpKSk7XFxuICB9XFxuXFxuICAuc3F1YXJlIHtcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tU1FVQVJFX1dJRFRIKSAvIHZhcigtLVNJWkVfTU9ESUZJRVIpKTtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLVNRVUFSRV9XSURUSCkgLyB2YXIoLS1TSVpFX01PRElGSUVSKSk7XFxuICB9XFxuXFxuICAuc2hpcHMge1xcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1HUklEX1dJRFRIKSAvIHZhcigtLVNJWkVfTU9ESUZJRVIpKTtcXG4gIH1cXG5cXG4gIC5idXR0b25zLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAubWlzcywgLmhpdCB7XFxuICAgIHdpZHRoOiBjYWxjKHZhcigtLVNRVUFSRV9XSURUSCkgLyB2YXIoLS1TSVpFX01PRElGSUVSKSk7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1TUVVBUkVfV0lEVEgpIC8gdmFyKC0tU0laRV9NT0RJRklFUikpO1xcbiAgfVxcbiAgLm1pc3M6YmVmb3JlLCAubWlzczphZnRlcixcXG4gIC5oaXQ6YmVmb3JlLCAuaGl0OmFmdGVyIHtcXG4gICAgaGVpZ2h0OiA3cHg7XFxuICB9XFxuXFxuICAud2lubmVyLW1zZyB7XFxuICAgIHdpZHRoOiBjYWxjKHZhcigtLUdSSURfV0lEVEgpIC8gdmFyKC0tU0laRV9NT0RJRklFUikgKyAxcHgpO1xcbiAgfVxcblxcbiAgLnBhc3MtZGV2aWNlIHtcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tR1JJRF9XSURUSCkgLyB2YXIoLS1TSVpFX01PRElGSUVSKSArIDFweCk7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1HUklEX1dJRFRIKSAvIHZhcigtLVNJWkVfTU9ESUZJRVIpICsgMXB4KTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLmJ0bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG4uaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG5cbmJ1dHRvbiB7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1KQUFtSjtBQUN2Sjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhOztJQUViLGtCQUFrQjtJQUNsQixRQUFROztJQUVSLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuZnVuY3Rpb24gY3JlYXRlU2hpcChsZW4pIHtcbiAgICBsZXQgdGltZXNIaXQgPSAwO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gKCkgPT4geyByZXR1cm4gbGVuIH07XG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7IHJldHVybiArK3RpbWVzSGl0IH07XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7IHJldHVybiAobGVuZ3RoKCkgLSB0aW1lc0hpdCA9PT0gMCkgfTtcblxuICAgIHJldHVybiB7IGxlbmd0aCwgaGl0LCBpc1N1bmsgfTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVNoaXAgfTsiLCJcbmltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tIFwiLi9jcmVhdGVTaGlwLmpzXCI7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuYm9hcmQgPSBbXG4gICAgMCBpbiBib2FyZCA9PiBlbXB0eSBzcG90XG4gICAgeCBpbiBib2FyZCA9PiByZWNpZXZlZCBhdHRhY2sgYnV0IHdhcyBtaXNzXG4gICAge30gaW4gYm9hcmQgPT4gaXMgdGhlIHNoaXBcbl07XG5cbm1pc3NlcyA9IFtcbiAgICAtIEFycmF5IG9mIHNwb3RzIHRoYXQgcmVjaWV2ZWQgYXR0YWNrIGJ1dCBkaWRudCBoaXQgYSBzaGlwXG4gICAgLSBpbiBvcmRlciBvZiBhdHRlbXB0c1xuXTtcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5mdW5jdGlvbiBnYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgaGl0cyA9IFtdO1xuICAgIGNvbnN0IHNoaXBDb3JkcyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBtaXNzZXMgPSBbXTtcbiAgICBjb25zdCBib2FyZCA9IFtcbiAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdXG4gICAgXTtcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZHMpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGNyZWF0ZVNoaXAoY29vcmRzLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yIChsZXQgY29vcmQgb2YgY29vcmRzKSB7XG4gICAgICAgICAgICBib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID0gc2hpcDtcbiAgICAgICAgICAgIHNoaXBDb3Jkcy5hZGQoY29vcmQudG9TdHJpbmcoKSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYWNlUmFuZG9tU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBpZWNlcyA9IFs0LDMsMywyLDIsMiwxLDEsMSwxXTtcbiAgICAgICAgXG4gICAgICAgIHdoaWxlIChwaWVjZXNbMF0pIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IG51bGw7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmQubGVuZ3RoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB1cDogW10sXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFtdLFxuICAgICAgICAgICAgICAgIGRvd246IFtdLFxuICAgICAgICAgICAgICAgIGxlZnQ6IFtdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBpZWNlc1swXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy51cC5wdXNoKFtyb3ctaSwgY29sdW1uXSk7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5yaWdodC5wdXNoKFtyb3csIGNvbHVtbitpXSk7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5kb3duLnB1c2goW3JvdytpLCBjb2x1bW5dKTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxlZnQucHVzaChbcm93LCBjb2x1bW4taV0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY29vcmQgb2Ygb3B0aW9uc1tvcHRpb25dKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb29yZFswXSA8IDAgfHwgY29vcmRbMF0gPiA5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZFsxXSA8IDAgfHwgY29vcmRbMV0gPiA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zW29wdGlvbl0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcENvcmRzLmhhcyhjb29yZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gW107XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zW29wdGlvbl0ubGVuZ3RoID09PSBwaWVjZXNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSBvcHRpb25zW29wdGlvbl07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHBpZWNlcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHBsYWNlU2hpcChzZWxlY3RlZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCByZWNpZXZlQXR0YWNrID0gKHgseSkgPT4ge1xuICAgICAgICBpZiAoYm9hcmRbeF1beV0gPT09IDAgJiYgIW1pc3Nlcy5pbmNsdWRlcyhbeCx5XSkpIHtcbiAgICAgICAgICAgIG1pc3Nlcy5wdXNoKFt4LHldKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChib2FyZFt4XVt5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBib2FyZFt4XVt5XS5oaXQoKTtcbiAgICAgICAgICAgIGhpdHMucHVzaChbeCx5XSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCByb3cgb2YgYm9hcmQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgb2Ygcm93KSB7XG4gICAgICAgICAgICAgICAgaWYgKGkuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJiAhaS5pc1N1bmsoKSkgeyByZXR1cm4gZmFsc2UgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlY2lldmVSYW5kb21BdHRhY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5sZW5ndGgpO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmQubGVuZ3RoKTtcbiAgICAgICAgbGV0IGR1cGxpY2F0ZSA9IG51bGw7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChtaXNzZXNbaV1bMF0gPT09IHggJiYgbWlzc2VzW2ldWzFdID09PSB5KSB7XG4gICAgICAgICAgICAgICAgZHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaGl0c1tpXVswXSA9PT0geCAmJiBoaXRzW2ldWzFdID09PSB5KSB7XG4gICAgICAgICAgICAgICAgZHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGR1cGxpY2F0ZSkgeyByZWNpZXZlUmFuZG9tQXR0YWNrKCkgfVxuICAgICAgICBlbHNlIHsgcmV0dXJuIHJlY2lldmVBdHRhY2soeCx5KSB9O1xuICAgIH07XG5cbiAgICBjb25zdCByZWNpZXZlU21hcnRBdHRhY2sgPSAoKSA9PiB7XG4gICAgICBsZXQgc2VsZWN0ZWQgPSBudWxsO1xuXG4gICAgICBmb3IgKGNvbnN0IGhpdCBvZiBoaXRzKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgdXA6IFtoaXRbMF0gLSAxLCBoaXRbMV1dLFxuICAgICAgICAgIGRvd246IFtoaXRbMF0gKyAxLCBoaXRbMV1dLFxuICAgICAgICAgIGxlZnQ6IFtoaXRbMF0sIGhpdFsxXSAtIDFdLFxuICAgICAgICAgIHJpZ2h0OiBbaGl0WzBdLCBoaXRbMV0gKyAxXVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICBpZiAob3B0aW9uc1tvcHRpb25dWzBdIDwgMCB8fCBvcHRpb25zW29wdGlvbl1bMF0gPiA5IHx8XG4gICAgICAgICAgICAgIG9wdGlvbnNbb3B0aW9uXVsxXSA8IDAgfHwgb3B0aW9uc1tvcHRpb25dWzFdID4gOSkge1xuXG4gICAgICAgICAgICBkZWxldGUgb3B0aW9uc1tvcHRpb25dO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChjb25zdCBvcHRpb24gaW4gb3B0aW9ucykge1xuICAgICAgICAgIGZvciAoY29uc3QgbWlzcyBvZiBtaXNzZXMpIHtcbiAgICAgICAgICAgIGlmIChtaXNzWzBdID09PSBvcHRpb25zW29wdGlvbl1bMF0gJiYgbWlzc1sxXSA9PT0gb3B0aW9uc1tvcHRpb25dWzFdKSB7XG4gICAgICAgICAgICAgIG9wdGlvbnNbb3B0aW9uXSA9IFtdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZm9yIChjb25zdCBoaXQgb2YgaGl0cykge1xuICAgICAgICAgICAgaWYgKGhpdFswXSA9PT0gb3B0aW9uc1tvcHRpb25dWzBdICYmIGhpdFsxXSA9PT0gb3B0aW9uc1tvcHRpb25dWzFdKSB7XG4gICAgICAgICAgICAgIG9wdGlvbnNbb3B0aW9uXSA9IFtdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKG9wdGlvbnNbb3B0aW9uXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZWxlY3RlZCA9IG9wdGlvbnNbb3B0aW9uXTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgaWYgKHNlbGVjdGVkKSB7IHJlY2lldmVBdHRhY2soc2VsZWN0ZWRbMF0sIHNlbGVjdGVkWzFdKSB9XG4gICAgICBlbHNlIHsgcmVjaWV2ZVJhbmRvbUF0dGFjaygpIH07XG4gICAgfTtcblxuICAgIHJldHVybiB7IHBsYWNlU2hpcCwgcGxhY2VSYW5kb21TaGlwcywgc2hpcENvcmRzLCByZWNpZXZlQXR0YWNrLCBhbGxTaGlwc1N1bmssIG1pc3NlcywgcmVjaWV2ZVJhbmRvbUF0dGFjaywgaGl0cywgcmVjaWV2ZVNtYXJ0QXR0YWNrIH07XG59O1xuXG5leHBvcnQgeyBnYW1lYm9hcmQgfTtcbiIsIlxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcblxuZnVuY3Rpb24gY3JlYXRlR3JpZCgpIHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcblxuICAgICAgICAgICAgZGl2LnJvdyA9IGk7XG4gICAgICAgICAgICBkaXYuY29sdW1uID0gajtcbiAgICAgICAgICAgIGRpdi5jb29yZCA9IFtpLGpdO1xuXG4gICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBcbiAgICBib2R5LmFwcGVuZENoaWxkKGdyaWQpO1xufTtcblxuZnVuY3Rpb24gdXBkYXRlR3JpZChwbGF5ZXJCb2FyZCkge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKTtcbiAgY29uc3QgbWlzc2VzID0gcGxheWVyQm9hcmQubWlzc2VzLm1hcChjb29yZHMgPT4gW2Nvb3Jkc1swXSArIDEsIGNvb3Jkc1sxXSArIDFdKTtcbiAgY29uc3QgaGl0cyA9IHBsYXllckJvYXJkLmhpdHMubWFwKGNvb3JkcyA9PiBbY29vcmRzWzBdICsgMSwgY29vcmRzWzFdICsgMV0pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWlzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcblxuICAgIGRpdi5zdHlsZS5ncmlkUm93ID0gW21pc3Nlc1tpXVswXV07XG4gICAgZGl2LnN0eWxlLmdyaWRDb2x1bW4gPSBbbWlzc2VzW2ldWzFdXTtcblxuICAgIGdyaWQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhpdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG5cbiAgICBkaXYuc3R5bGUuZ3JpZFJvdyA9IFtoaXRzW2ldWzBdXTtcbiAgICBkaXYuc3R5bGUuZ3JpZENvbHVtbiA9IFtoaXRzW2ldWzFdXTtcblxuICAgIGdyaWQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoaXBzKCkge1xuICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcXVhcmUnKTtcbiAgICBjb25zdCBzcXVhcmVXaWR0aCA9IGdldENvbXB1dGVkU3R5bGUoc3F1YXJlKS5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpLnNsaWNlKDAsLTIpO1xuXG4gICAgY29uc3Qgd2lkdGhzID0gWzQsMywzLDIsMiwyLDEsMSwxLDFdO1xuICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcHMuY2xhc3NMaXN0LmFkZCgnc2hpcHMnKTtcblxuICAgIGZvciAobGV0IHBpZWNlIGluIHdpZHRocykge1xuICAgICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gICAgICAgIHNoaXAuc3R5bGUud2lkdGggPSBgJHt3aWR0aHNbcGllY2VdICogc3F1YXJlV2lkdGh9cHhgO1xuICAgICAgICBzaGlwLnN0eWxlLmhlaWdodCA9IGAke3NxdWFyZVdpZHRofXB4YDtcblxuICAgICAgICBzaGlwcy5hcHBlbmRDaGlsZChzaGlwKTtcbiAgICB9O1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChzaGlwcyk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVPcHRpb25zQnV0dG9ucygpIHtcbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMtY29udGFpbmVyJyk7XG5cbiAgY29uc3Qgc3VibWl0U2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0U2hpcHMuY2xhc3NMaXN0LmFkZCgnc3VibWl0Jyk7XG4gIHN1Ym1pdFNoaXBzLmlubmVyVGV4dCA9ICdTdWJtaXQgU2hpcHMnO1xuXG4gIGNvbnN0IHJlc2V0U2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmVzZXRTaGlwcy5jbGFzc0xpc3QuYWRkKCdyZXNldCcpO1xuICByZXNldFNoaXBzLmlubmVyVGV4dCA9ICdSZXNldCBTaGlwcyc7XG5cbiAgY29uc3QgcGxhY2VSYW5kb21seSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwbGFjZVJhbmRvbWx5LmNsYXNzTGlzdC5hZGQoJ3BsYWNlLXJhbmRvbWx5Jyk7XG4gIHBsYWNlUmFuZG9tbHkuaW5uZXJUZXh0ID0gJ1BsYWNlIFNoaXBzIFJhbmRvbWx5JztcblxuICBib2R5LmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdFNoaXBzKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNldFNoaXBzKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZVJhbmRvbWx5KTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU1pbmlHcmlkKCkge1xuICBjb25zdCBtaW5pR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtaW5pR3JpZC5jbGFzc0xpc3QuYWRkKCdtaW5pLWdyaWQnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDEwOyBrKyspIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21pbmktc3F1YXJlJyk7XG5cbiAgICAgIG1pbmlHcmlkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfTtcbiAgfTtcblxuICBib2R5LmFwcGVuZENoaWxkKG1pbmlHcmlkKTtcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZU1pbmlHcmlkKHBsYXllckJvYXJkLCBtaW5pR3JpZCkge1xuICBsZXQgc2hpcENvcmRzQXJyID0gW107XG5cbiAgZm9yIChjb25zdCBlbnRyeSBvZiBwbGF5ZXJCb2FyZC5zaGlwQ29yZHMuZW50cmllcygpKSB7XG4gICAgc2hpcENvcmRzQXJyLnB1c2goZW50cnlbMF0uc3BsaXQoJywnKS5tYXAoTnVtYmVyKSlcbiAgfTtcblxuICBjb25zdCBncmlkQ29yZHMgPSBzaGlwQ29yZHNBcnIubWFwKGNvb3JkcyA9PiBbY29vcmRzWzBdICsgMSwgY29vcmRzWzFdICsgMV0pO1xuICBjb25zdCBtaXNzZXMgPSBwbGF5ZXJCb2FyZC5taXNzZXMubWFwKGNvb3JkcyA9PiBbY29vcmRzWzBdICsgMSwgY29vcmRzWzFdICsgMV0pO1xuICBjb25zdCBoaXRzID0gcGxheWVyQm9hcmQuaGl0cy5tYXAoY29vcmRzID0+IFtjb29yZHNbMF0gKyAxLCBjb29yZHNbMV0gKyAxXSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkQ29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWluaS1zaGlwJyk7XG5cbiAgICBkaXYuc3R5bGUuZ3JpZFJvdyA9IFtncmlkQ29yZHNbaV1bMF1dO1xuICAgIGRpdi5zdHlsZS5ncmlkQ29sdW1uID0gW2dyaWRDb3Jkc1tpXVsxXV07XG5cbiAgICBtaW5pR3JpZC5hcHBlbmRDaGlsZChkaXYpO1xuICB9O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWlzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcblxuICAgIGRpdi5zdHlsZS5ncmlkUm93ID0gW21pc3Nlc1tpXVswXV07XG4gICAgZGl2LnN0eWxlLmdyaWRDb2x1bW4gPSBbbWlzc2VzW2ldWzFdXTtcblxuICAgIG1pbmlHcmlkLmFwcGVuZENoaWxkKGRpdik7XG4gIH07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuXG4gICAgZGl2LnN0eWxlLmdyaWRSb3cgPSBbaGl0c1tpXVswXV07XG4gICAgZGl2LnN0eWxlLmdyaWRDb2x1bW4gPSBbaGl0c1tpXVsxXV07XG5cbiAgICBtaW5pR3JpZC5hcHBlbmRDaGlsZChkaXYpO1xuICB9O1xuICBcbn07XG5cbmZ1bmN0aW9uIGNsZWFyTWluaUdyaWQoKSB7XG4gIGNvbnN0IG1pbmlHcmlkQ2hpbGRyZW4gPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbmktZ3JpZCcpLmNoaWxkcmVuXTtcblxuICBtaW5pR3JpZENoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgIGlmICghY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaW5pLXNxdWFyZScpKSB7XG4gICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICB9O1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGF0dGFja1BoYXNlKHBsYXllcikge1xuICByZXNldEJvZHkoKTtcbiAgY3JlYXRlR3JpZCgpO1xuICBjcmVhdGVNaW5pR3JpZCgpO1xuICBjb25zdCBtaW5pR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW5pLWdyaWQnKTtcbiAgdXBkYXRlTWluaUdyaWQocGxheWVyLnBsYXllckJvYXJkLCBtaW5pR3JpZCk7XG5cbn07XG5cbmZ1bmN0aW9uIGNsZWFyR3JpZCgpIHtcbiAgY29uc3QgZ3JpZENoaWxkcmVuID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJykuY2hpbGRyZW5dO1xuXG4gIGdyaWRDaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICBpZiAoIWNoaWxkLmNsYXNzTGlzdC5jb250YWlucygnc3F1YXJlJykpIHtcbiAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgIH07XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gcGFzc0RldmljZShhY3RpdmVQbGF5ZXIsIGxhc3RUdXJuU3RhdHVzKSB7XG4gIFxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Bhc3MtZGV2aWNlJyk7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEuaW5uZXJUZXh0ID0gYFRoYXQgd2FzIGEgJHtsYXN0VHVyblN0YXR1c30hYDtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi5pbm5lclRleHQgPSBgSXRzICR7YWN0aXZlUGxheWVyLm5hbWV9J3MgVHVybiFgO1xuXG4gIGNvbnN0IHN0YXJ0VHVybkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdGFydFR1cm5CdG4uY2xhc3NMaXN0LmFkZCgnc3RhcnQtdHVybicpO1xuICBzdGFydFR1cm5CdG4uaW5uZXJUZXh0ID0gJ1N0YXJ0IFR1cm4nO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChoMSk7XG4gIGRpdi5hcHBlbmRDaGlsZChoMik7XG4gIGRpdi5hcHBlbmRDaGlsZChzdGFydFR1cm5CdG4pO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmZ1bmN0aW9uIHJlc2V0Qm9keSgpIHtcbiAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufTtcblxuZnVuY3Rpb24gc2V0dXBTaGlwcygpIHtcbiAgICByZXNldEJvZHkoKTtcbiAgICBjcmVhdGVHcmlkKCk7XG4gICAgY3JlYXRlU2hpcHMoKTtcbiAgICBjcmVhdGVPcHRpb25zQnV0dG9ucygpO1xufTtcblxuZnVuY3Rpb24gZGlzcGxheVdpbm5lcih3aW5uZXIpIHtcbiAgY29uc3Qgd2lubmVyTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdpbm5lck1zZy5jbGFzc0xpc3QuYWRkKCd3aW5uZXItbXNnJyk7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIuaW5uZXJUZXh0ID0gJ1dpbm5lciBpczonO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLmlubmVyVGV4dCA9IGAke3dpbm5lci5uYW1lfSFgO1xuICB3aW5uZXJNc2cuYXBwZW5kQ2hpbGQoaDIpO1xuICB3aW5uZXJNc2cuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdnYW1lLW92ZXItb3B0aW9ucycpO1xuICBjb25zdCBjaGFuZ2VNb2RlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNoYW5nZU1vZGVCdG4uY2xhc3NMaXN0LmFkZCgnY2hhbmdlLW1vZGUnKTtcbiAgY2hhbmdlTW9kZUJ0bi5pbm5lclRleHQgPSAnQ2hhbmdlIE1vZGUnO1xuICBjb25zdCBwbGF5QWdhaW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcGxheUFnYWluQnRuLmNsYXNzTGlzdC5hZGQoJ3BsYXktYWdhaW4nKTtcbiAgcGxheUFnYWluQnRuLmlubmVyVGV4dCA9ICdQbGF5IEFnYWluJztcbiAgb3B0aW9ucy5hcHBlbmRDaGlsZChjaGFuZ2VNb2RlQnRuKTtcbiAgb3B0aW9ucy5hcHBlbmRDaGlsZChwbGF5QWdhaW5CdG4pO1xuXG4gIHdpbm5lck1zZy5hcHBlbmRDaGlsZChvcHRpb25zKTtcblxuICBib2R5Lmluc2VydEJlZm9yZSh3aW5uZXJNc2csIGJvZHkuY2hpbGRyZW5bMF0pO1xufTtcblxuZnVuY3Rpb24gZGlzcGxheUFjdGl2ZVBsYXllcihhY3RpdmVQbGF5ZXIpIHtcbiAgY29uc3QgYWN0aXZlUGxheWVySDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLXBsYXllcicpO1xuXG4gIGlmIChhY3RpdmVQbGF5ZXJIMikge1xuICAgIGFjdGl2ZVBsYXllckgyLmlubmVyVGV4dCA9IGAke2FjdGl2ZVBsYXllci5uYW1lfWA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wbGF5ZXInKTtcbiAgICBoMi5pbm5lclRleHQgPSBgJHthY3RpdmVQbGF5ZXIubmFtZX1gO1xuICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGgyLCBib2R5LmNoaWxkcmVuWzBdKTtcbiAgfTtcbiAgXG59O1xuXG5mdW5jdGlvbiBkaXNwbGF5Qm90aEJvYXJkcyhwbGF5ZXJPbmUsIHBsYXllclR3bykge1xuICByZXNldEJvZHkoKTtcbiAgY3JlYXRlTWluaUdyaWQoKTtcbiAgY3JlYXRlTWluaUdyaWQoKTtcblxuICBjb25zdCBwbGF5ZXJPbmVIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHBsYXllck9uZUgyLmlubmVyVGV4dCA9IGAke3BsYXllck9uZS5uYW1lfSdzIEJvYXJkOmA7XG5cbiAgY29uc3QgcGxheWVyVHdvSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBwbGF5ZXJUd29IMi5pbm5lclRleHQgPSBgJHtwbGF5ZXJUd28ubmFtZX0ncyBCb2FyZDpgO1xuXG4gIGNvbnN0IG1pbmlHcmlkcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWluaS1ncmlkJyldXG5cbiAgdXBkYXRlTWluaUdyaWQocGxheWVyT25lLnBsYXllckJvYXJkLCBtaW5pR3JpZHNbMF0pO1xuICB1cGRhdGVNaW5pR3JpZChwbGF5ZXJUd28ucGxheWVyQm9hcmQsIG1pbmlHcmlkc1sxXSk7XG5cbiAgYm9keS5pbnNlcnRCZWZvcmUocGxheWVyT25lSDIsIG1pbmlHcmlkc1swXSk7XG4gIGJvZHkuaW5zZXJ0QmVmb3JlKHBsYXllclR3b0gyLCBtaW5pR3JpZHNbMV0pO1xufTtcblxuZXhwb3J0IHsgc2V0dXBTaGlwcywgYXR0YWNrUGhhc2UsIHVwZGF0ZU1pbmlHcmlkLCBkaXNwbGF5V2lubmVyLCBkaXNwbGF5QWN0aXZlUGxheWVyLCBjbGVhckdyaWQsIGNsZWFyTWluaUdyaWQsIHBhc3NEZXZpY2UsIHVwZGF0ZUdyaWQsIGRpc3BsYXlCb3RoQm9hcmRzIH07XG4iLCJpbXBvcnQgeyByZXNldEJvYXJkIH0gZnJvbSAnLi9yZXNldEJ0bi5qcyc7XG5cbmZ1bmN0aW9uIGdlbkNvb3JkcyhzcXVhcmVzVGFrZW5VcCkgey8vZ2VuZXJhdGVzIGNvb3JkcyBmb3IgcGxhY2UtcmFuZG9tbHkgYnRuXG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpO1xuXG4gIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKTtcbiAgY29uc3QgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgdXA6IFtdLFxuICAgIHJpZ2h0OiBbXSxcbiAgICBkb3duOiBbXSxcbiAgICBsZWZ0OiBbXVxuICB9O1xuXG4gIGxldCBzZWxlY3RlZCA9IG51bGw7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzVGFrZW5VcDsgaSsrKSB7XG4gICAgb3B0aW9ucy51cC5wdXNoKFtyb3ctaSwgY29sdW1uXSk7XG4gICAgb3B0aW9ucy5yaWdodC5wdXNoKFtyb3csIGNvbHVtbitpXSk7XG4gICAgb3B0aW9ucy5kb3duLnB1c2goW3JvdytpLCBjb2x1bW5dKTtcbiAgICBvcHRpb25zLmxlZnQucHVzaChbcm93LCBjb2x1bW4taV0pO1xuICB9O1xuXG4gIGZvciAoY29uc3Qgb3B0aW9uIGluIG9wdGlvbnMpIHtcblxuICAgIGZvciAoY29uc3QgY29vcmQgb2Ygb3B0aW9uc1tvcHRpb25dKSB7XG4gICAgICBpZiAoY29vcmRbMF0gPiAxMCB8fCBjb29yZFswXSA8IDEgfHxcbiAgICAgICAgY29vcmRbMV0gPiAxMCB8fCBjb29yZFsxXSA8IDEpIHtcbiAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gW107XG4gICAgICB9O1xuXG4gICAgICBpZiAoZ3JpZC5zaGlwcy5oYXMoY29vcmQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gW107XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBpZiAob3B0aW9uc1tvcHRpb25dLmxlbmd0aCA9PT0gc3F1YXJlc1Rha2VuVXApIHtcbiAgICAgIHNlbGVjdGVkID0ge1tvcHRpb25dOiBvcHRpb25zW29wdGlvbl19O1xuICAgIH07XG4gIH07XG5cbiAgaWYgKHNlbGVjdGVkKSB7IHJldHVybiBzZWxlY3RlZCB9XG4gIGVsc2UgeyByZXR1cm4gZ2VuQ29vcmRzKHNxdWFyZXNUYWtlblVwKSB9O1xufTtcblxuZnVuY3Rpb24gcGxhY2VSYW5kb21seSgpIHtcbiAgcmVzZXRCb2FyZCgpO1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKTtcbiAgY29uc3Qgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHMnKTtcbiAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNxdWFyZScpO1xuICBjb25zdCBzcXVhcmVXaWR0aCA9IGdldENvbXB1dGVkU3R5bGUoc3F1YXJlKS5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpLnNsaWNlKDAsLTIpO1xuXG4gIFsuLi5zaGlwc0NvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaChzaGlwID0+IHtcbiAgICBjb25zdCBzcXVhcmVzVGFrZW5VcCA9IHNoaXAuc3R5bGUud2lkdGguc2xpY2UoMCwtMikgLyBzcXVhcmVXaWR0aDtcbiAgICBjb25zdCBjb29yZHMgPSBnZW5Db29yZHMoc3F1YXJlc1Rha2VuVXApO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IE9iamVjdC5rZXlzKGNvb3JkcylbMF07XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAnZG93bicgfHwgZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICBzaGlwLmNvb3JkcyA9IGNvb3Jkc1tkaXJlY3Rpb25dO1xuICAgICAgc2hpcC5zdHlsZS5ncmlkUm93ID0gY29vcmRzW2RpcmVjdGlvbl1bMF1bMF07XG4gICAgICBzaGlwLnN0eWxlLmdyaWRDb2x1bW4gPSBjb29yZHNbZGlyZWN0aW9uXVswXVsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29vcmRzW2RpcmVjdGlvbl0gPSBjb29yZHNbZGlyZWN0aW9uXS5yZXZlcnNlKCk7XG4gICAgICBzaGlwLmNvb3JkcyA9IGNvb3Jkc1tkaXJlY3Rpb25dO1xuXG4gICAgICBzaGlwLnN0eWxlLmdyaWRSb3cgPSBjb29yZHNbZGlyZWN0aW9uXVswXVswXTtcbiAgICAgIHNoaXAuc3R5bGUuZ3JpZENvbHVtbiA9IGNvb3Jkc1tkaXJlY3Rpb25dWzBdWzFdO1xuICAgIH07XG5cbiAgICBjb25zdCBoZWlnaHQgPSBzaGlwLnN0eWxlLmhlaWdodC5zbGljZSgwLC0yKTtcbiAgICBjb25zdCB3aWR0aCA9IHNoaXAuc3R5bGUud2lkdGguc2xpY2UoMCwtMik7XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAndXAnIHx8IGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICBzaGlwLnN0eWxlLndpZHRoID0gYCR7aGVpZ2h0fXB4YDtcbiAgICAgIHNoaXAuc3R5bGUuaGVpZ2h0ID0gYCR7d2lkdGh9cHhgO1xuICAgIH07XG5cbiAgICBncmlkLmFwcGVuZENoaWxkKHNoaXApO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZHNbZGlyZWN0aW9uXS5sZW5ndGg7IGkrKykge1xuICAgICAgZ3JpZC5zaGlwcy5hZGQoY29vcmRzW2RpcmVjdGlvbl1baV0udG9TdHJpbmcoKSk7XG4gICAgfTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBwbGFjZVJhbmRvbWx5IH07XG4iLCJpbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmQuanNcIjtcblxuZnVuY3Rpb24gcGxheWVyKCkge1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZ2FtZWJvYXJkKCk7XG5cbiAgICByZXR1cm4geyBwbGF5ZXJCb2FyZCB9O1xufTtcblxuZXhwb3J0IHsgcGxheWVyIH07IiwiXG5mdW5jdGlvbiByZXNldEJvYXJkKCkge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKTtcbiAgY29uc3Qgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHMnKTtcbiAgY29uc3Qgc2hpcHMgPSBbLi4uZ3JpZC5jaGlsZHJlbl0uZmlsdGVyKHNoaXAgPT4gc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSk7XG4gIGdyaWQuc2hpcHMgPSBuZXcgU2V0KCk7XG5cbiAgWy4uLnNoaXBzXS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgIGNvbnN0IGhlaWdodCA9IHNoaXAuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsLTIpO1xuICAgIGNvbnN0IHdpZHRoID0gc2hpcC5zdHlsZS53aWR0aC5zbGljZSgwLC0yKTtcblxuICAgIGlmICgraGVpZ2h0ID4gK3dpZHRoKSB7XG4gICAgICBzaGlwLnN0eWxlLmhlaWdodCA9IGAke3dpZHRofXB4YDtcbiAgICAgIHNoaXAuc3R5bGUud2lkdGggPSBgJHtoZWlnaHR9cHhgO1xuICAgIH07XG5cbiAgICBzaGlwLmNvb3JkcyA9IFtdO1xuICAgIHNoaXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXApO1xuICB9KTsgICAgXG59O1xuXG5leHBvcnQgeyByZXNldEJvYXJkIH07XG4iLCJcbmZ1bmN0aW9uIHNldHVwQm9hcmRQaGFzZSgpIHtcbiAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKTtcbiAgZ3JpZC5zaGlwcyA9IG5ldyBTZXQoKTtcblxuICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4ge1xuICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuXG4gICAgICBpZiAoc2hpcC5jb29yZHMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGdyaWQuc2hpcHMuZGVsZXRlKHNoaXAuY29vcmRzW2ldLnRvU3RyaW5nKCkpO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHtcbiAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICB9KTtcblxuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3F1YXJlJyk7XG4gICAgICBjb25zdCBzcXVhcmVXaWR0aCA9IGdldENvbXB1dGVkU3R5bGUoc3F1YXJlKS5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpLnNsaWNlKDAsLTIpO1xuICAgICAgY29uc3Qgd2lkdGggPSBzaGlwLnN0eWxlLndpZHRoLnNsaWNlKDAsLTIpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gc2hpcC5zdHlsZS5oZWlnaHQuc2xpY2UoMCwtMik7XG5cbiAgICAgIGlmICgrd2lkdGggPiArc3F1YXJlV2lkdGggfHwgK2hlaWdodCA+ICtzcXVhcmVXaWR0aCkge1xuICAgICAgICBzaGlwLnN0eWxlLmhlaWdodCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgc2hpcC5zdHlsZS53aWR0aCA9IGAke2hlaWdodH1weGA7XG4gICAgICB9O1xuXG4gICAgICBpZiAoc2hpcC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZ3JpZCcpKSB7XG4gICAgICAgIGlmICgrd2lkdGggPiAraGVpZ2h0KSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwLmNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZ3JpZC5zaGlwcy5kZWxldGUoc2hpcC5jb29yZHNbaV0udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBzaGlwLmNvb3Jkc1tpXVsxXSA9IHNoaXAuY29vcmRzWzBdWzFdO1xuICAgICAgICAgICAgc2hpcC5jb29yZHNbaV1bMF0gPSBzaGlwLmNvb3Jkc1tpXVswXSArIGk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXAuY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBncmlkLnNoaXBzLmRlbGV0ZShzaGlwLmNvb3Jkc1tpXS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHNoaXAuY29vcmRzW2ldWzBdID0gc2hpcC5jb29yZHNbMF1bMF07XG4gICAgICAgICAgICBzaGlwLmNvb3Jkc1tpXVsxXSA9IHNoaXAuY29vcmRzW2ldWzFdICsgaTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5jb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZ3JpZC5zaGlwcy5oYXMoc2hpcC5jb29yZHNbaV0udG9TdHJpbmcoKSkpIHsgc2hpcC5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZWQnIH1cbiAgICAgICAgICBlbHNlIGlmIChzaGlwLmNvb3Jkc1tpXVswXSA+IDEwIHx8IHNoaXAuY29vcmRzW2ldWzFdID4gMTApe1xuICAgICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZWQnO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgY2FsY3VsYXRlR3JpZFNldCgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7Ly9ncmlkIGlzbnQgemVybyBpbmRleGVkXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGUudGFyZ2V0ID09PSBncmlkKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3F1YXJlJyk7XG4gICAgICBjb25zdCBzcXVhcmVXaWR0aCA9IGdldENvbXB1dGVkU3R5bGUoc3F1YXJlKS5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpLnNsaWNlKDAsLTIpO1xuICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpO1xuICAgICAgY29uc3QgcmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBsZXQgcm93ID0gTWF0aC5jZWlsKChlLmNsaWVudFkgLSByZWN0LnRvcCkgLyBzcXVhcmVXaWR0aCk7XG4gICAgICBsZXQgY29sdW1uID0gTWF0aC5jZWlsKChlLmNsaWVudFggLSByZWN0LmxlZnQpIC8gc3F1YXJlV2lkdGgpO1xuXG4gICAgICBpZiAocm93ID4gMTApIHsgcm93ID0gMTAgfTtcbiAgICAgIGlmIChjb2x1bW4gPiAxMCkgeyBjb2x1bW4gPSAxMCB9O1xuXG4gICAgICBzaGlwLnN0eWxlLmdyaWRSb3cgPSByb3c7XG4gICAgICBzaGlwLnN0eWxlLmdyaWRDb2x1bW4gPSBjb2x1bW47XG5cbiAgICAgIGNvbnN0IHNoaXBIZWlnaHQgPSBzaGlwLnN0eWxlLmhlaWdodC5zbGljZSgwLC0yKTtcbiAgICAgIGNvbnN0IHNoaXBXaWR0aCA9IHNoaXAuc3R5bGUud2lkdGguc2xpY2UoMCwtMik7XG5cbiAgICAgIHNoaXAuY29vcmRzID0gW107XG5cbiAgICAgIGlmICgrc2hpcEhlaWdodCA+ICtzaGlwV2lkdGgpIHtcbiAgICAgICAgbGV0IHNxdWFyZXNTaGlwVGFrZXNVcCA9ICtzaGlwSGVpZ2h0IC8gc3F1YXJlV2lkdGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzU2hpcFRha2VzVXA7IGkrKykge1xuICAgICAgICAgIHNoaXAuY29vcmRzLnB1c2goW3JvdytpLCBjb2x1bW5dKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBzcXVhcmVzU2hpcFRha2VzVXAgPSBzaGlwV2lkdGggLyBzcXVhcmVXaWR0aDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZXNTaGlwVGFrZXNVcDsgaSsrKSB7XG4gICAgICAgICAgc2hpcC5jb29yZHMucHVzaChbcm93LCBjb2x1bW4raV0pO1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgc2hpcC5zdHlsZS5ib3JkZXJDb2xvciA9ICduYXZ5JztcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2hpcC5jb29yZHNbaV1bMF0gPiAxMCB8fFxuICAgICAgICAgICAgc2hpcC5jb29yZHNbaV1bMF0gPCAxIHx8XG4gICAgICAgICAgICBzaGlwLmNvb3Jkc1tpXVsxXSA+IDEwIHx8XG4gICAgICAgICAgICBzaGlwLmNvb3Jkc1tpXVsxXSA8IDEpIHtcbiAgICAgICAgICBzaGlwLnN0eWxlLmJvcmRlckNvbG9yID0gJ3JlZCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZ3JpZC5zaGlwcy5oYXMoc2hpcC5jb29yZHNbaV0udG9TdHJpbmcoKSkpIHsgc2hpcC5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZWQnIH1cbiAgICAgIH07XG5cbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2FsY3VsYXRlR3JpZFNldCgpIHtcbiAgICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwcycpO1xuICAgIGNvbnN0IHNoaXBzID0gWy4uLmdyaWQuY2hpbGRyZW5dLmZpbHRlcihzaGlwID0+IHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpO1xuICAgIGdyaWQuc2hpcHMgPSBuZXcgU2V0KCk7XG5cbiAgICBbLi4uc2hpcHNdLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICBpZiAoc2hpcC5zdHlsZS5ib3JkZXJDb2xvciA9PT0gJ3JlZCcpIHtcbiAgICAgICAgc2hpcC5jb29yZHMgPSBbXTtcbiAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXJDb2xvciA9ICduYXZ5JztcbiAgICAgICAgc2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZ3JpZC5zaGlwcy5hZGQoc2hpcC5jb29yZHNbaV0udG9TdHJpbmcoKSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBjYWxjdWxhdGVHcmlkU2V0KTtcbn07XG5cbmV4cG9ydCB7IHNldHVwQm9hcmRQaGFzZSB9O1xuIiwiXG5mdW5jdGlvbiBnZXRTdWJtaXRlZENvb3JkcygpIHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyk7XG4gIGNvbnN0IHBsYWNlZFNoaXBzID0gWy4uLmdyaWQuY2hpbGRyZW5dLmZpbHRlcihzaGlwID0+IHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpO1xuICBjb25zdCBhbGxDb29yZHMgPSBbXTtcblxuICBpZiAocGxhY2VkU2hpcHMubGVuZ3RoID09PSAxMCkge1xuICAgIHBsYWNlZFNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICBhbGxDb29yZHMucHVzaChzaGlwLmNvb3Jkcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWxsQ29vcmRzO1xuICB9O1xufTtcblxuZnVuY3Rpb24gc3VibWl0Q29vcmRzKHBsYXllcikge1xuICBjb25zdCBzdWJtaXRlZENvb3JkcyA9IGdldFN1Ym1pdGVkQ29vcmRzKCk7XG5cbiAgaWYgKHN1Ym1pdGVkQ29vcmRzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJtaXRlZENvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgc3VibWl0ZWRDb29yZHNbaV0gPSBzdWJtaXRlZENvb3Jkc1tpXS5tYXAoY29vcmQgPT4gW2Nvb3JkWzBdLTEsIGNvb3JkWzFdLTFdKTtcbiAgICAgIHBsYXllci5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoc3VibWl0ZWRDb29yZHNbaV0pO1xuICAgIH07XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ25vdCBhbGwgc2hpcHMgcGxhY2VkIHZhbGlkbHknKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG59O1xuXG5leHBvcnQgeyBzdWJtaXRDb29yZHMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIid1c2Ugc3RyaWN0Jztcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5VdGlsaXR5IHN0eWxlcyA9PiBzdHlsZS5jc3Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9ob21lLmNzcyc7XG5pbXBvcnQgJy4vZ2FtZS5jc3MnO1xuXG5pbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSAnLi9jcmVhdGVTaGlwLmpzJztcbmltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCB7IHBsYXllciB9IGZyb20gJy4vcGxheWVyLmpzJztcbmltcG9ydCB7IHNldHVwU2hpcHMsIGF0dGFja1BoYXNlLCB1cGRhdGVNaW5pR3JpZCwgZGlzcGxheVdpbm5lciwgY2xlYXJHcmlkLCBjbGVhck1pbmlHcmlkLCBwYXNzRGV2aWNlLCB1cGRhdGVHcmlkLCBkaXNwbGF5Qm90aEJvYXJkcyB9IGZyb20gJy4vaGFuZGxlRE9NLmpzJztcbmltcG9ydCB7IGRpc3BsYXlBY3RpdmVQbGF5ZXIgfSBmcm9tICcuL2hhbmRsZURPTS5qcyc7XG5pbXBvcnQgeyByZXNldEJvYXJkIH0gZnJvbSAnLi9yZXNldEJ0bi5qcyc7XG5pbXBvcnQgeyBwbGFjZVJhbmRvbWx5IH0gZnJvbSAnLi9wbGFjZVJhbmRvbWx5QnRuLmpzJztcbmltcG9ydCB7IHN1Ym1pdENvb3JkcyB9IGZyb20gJy4vc3VibWl0QnRuLmpzJztcbmltcG9ydCB7IHNldHVwQm9hcmRQaGFzZSB9IGZyb20gXCIuL3NldHVwQm9hcmRQaGFzZS5qc1wiO1xuXG5sZXQgZ2FtZW1vZGUgPSBudWxsO1xubGV0IGFjdGl2ZVBsYXllciA9IG51bGw7XG5jb25zdCBzaW5nbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2luZ2xlJyk7XG5jb25zdCBkb3VibGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG91YmxlJyk7XG5cbmZ1bmN0aW9uIHBsYXllckF0dGFjayhlLCBkZWZlbmRpbmdQbGF5ZXIpIHtcbiAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNxdWFyZScpO1xuICBjb25zdCBzcXVhcmVXaWR0aCA9IGdldENvbXB1dGVkU3R5bGUoc3F1YXJlKS5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpLnNsaWNlKDAsLTIpO1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICBjb25zdCByb3cgPSBNYXRoLmNlaWwoKGUuY2xpZW50WSAtIHJlY3QudG9wKSAvIHNxdWFyZVdpZHRoKTtcbiAgY29uc3QgY29sdW1uID0gTWF0aC5jZWlsKChlLmNsaWVudFggLSByZWN0LmxlZnQpIC8gc3F1YXJlV2lkdGgpO1xuXG4gIGRpdi5zdHlsZS5ncmlkUm93ID0gcm93O1xuICBkaXYuc3R5bGUuZ3JpZENvbHVtbiA9IGNvbHVtbjtcblxuICBpZiAoZGVmZW5kaW5nUGxheWVyLnBsYXllckJvYXJkLnJlY2lldmVBdHRhY2socm93LTEsIGNvbHVtbi0xKSkge1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgfSBlbHNlIHtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICB9O1xuXG4gIGdyaWQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgcmV0dXJuIGRpdi5jbGFzc0xpc3RbMF07XG59O1xuXG5mdW5jdGlvbiBjcHVBdHRhY2socGxheWVyKSB7XG4gIHBsYXllci5wbGF5ZXJCb2FyZC5yZWNpZXZlU21hcnRBdHRhY2soKTtcbiAgY29uc3QgbWluaUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWluaS1ncmlkJyk7XG4gIHVwZGF0ZU1pbmlHcmlkKHBsYXllci5wbGF5ZXJCb2FyZCwgbWluaUdyaWQpO1xufTtcblxuZnVuY3Rpb24gY2hhbmdlTW9kZSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICBib2R5LmlubmVySFRNTCA9ICcnXG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J0bi1jb250YWluZXInKTtcbiAgY29uc3Qgc2luZ2xlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNpbmdsZUJ0bi5pZCA9ICdzaW5nbGUnO1xuICBzaW5nbGVCdG4uaW5uZXJUZXh0ID0gJ1NpbmdsZSBQbGF5ZXIgKHZzIENQVSknO1xuICBjb25zdCBkb3VibGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZG91YmxlQnRuLmlkID0gJ2RvdWJsZSc7XG4gIGRvdWJsZUJ0bi5pbm5lclRleHQgPSAnRG91YmxlIFBsYXllciAoTG9jYWwgcGxheSknO1xuXG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaW5nbGVCdG4pO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZG91YmxlQnRuKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG5cbiAgc2luZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2luZ2xlUGxheWVyKTtcbiAgZG91YmxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG91YmxlUGxheWVyKTtcbn07XG5cbmZ1bmN0aW9uIHBsYXlBZ2FpbihnYW1lbW9kZSkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBpZiAoZ2FtZW1vZGUgPT09ICdzaW5nbGUnKSB7XG4gICAgc2luZ2xlUGxheWVyKCk7XG4gIH0gZWxzZSB7XG4gICAgZG91YmxlUGxheWVyKCk7XG4gIH07XG59O1xuXG5mdW5jdGlvbiBjaGVja0Zvcldpbm5lcnMocGxheWVyT25lLCBwbGF5ZXJUd28pIHtcbiAgbGV0IHdpbm5lciA9IG51bGw7XG5cbiAgaWYgKHBsYXllclR3by5wbGF5ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgIHdpbm5lciA9IHBsYXllck9uZTtcbiAgfSBlbHNlIGlmIChwbGF5ZXJPbmUucGxheWVyQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICB3aW5uZXIgPSBwbGF5ZXJUd287XG4gIH07XG5cbiAgaWYgKHdpbm5lcikge1xuICAgIGRpc3BsYXlXaW5uZXIod2lubmVyKTtcbiAgICBjb25zdCBjaGFuZ2VNb2RlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS1tb2RlJyk7XG4gICAgY2hhbmdlTW9kZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZU1vZGUpO1xuICAgIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWFnYWluJyk7XG4gICAgcGxheUFnYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcGxheUFnYWluKGdhbWVtb2RlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGdyaWRDbGlja2VkU2luZ2xlKGUpIHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyk7XG5cbiAgaWYgKGUudGFyZ2V0ID09PSBncmlkKSB7XG4gICAgcGxheWVyQXR0YWNrKGUsIGdyaWQucGxheWVyVHdvKTtcbiAgICBjcHVBdHRhY2soZ3JpZC5wbGF5ZXJPbmUpO1xuXG4gICAgaWYgKGNoZWNrRm9yV2lubmVycyhncmlkLnBsYXllck9uZSwgZ3JpZC5wbGF5ZXJUd28pKSB7XG4gICAgICBncmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ3JpZENsaWNrZWRTaW5nbGUpO1xuICAgICAgZGlzcGxheUJvdGhCb2FyZHMoZ3JpZC5wbGF5ZXJPbmUsIGdyaWQucGxheWVyVHdvKTtcbiAgICAgIGNoZWNrRm9yV2lubmVycyhncmlkLnBsYXllck9uZSwgZ3JpZC5wbGF5ZXJUd28pO1xuICAgIH07XG4gIH07XG59O1xuXG5mdW5jdGlvbiBzaW5nbGVHYW1lTG9vcChwbGF5ZXJPbmUsIHBsYXllclR3bykge1xuICBhdHRhY2tQaGFzZShwbGF5ZXJPbmUpO1xuXG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpO1xuICBncmlkLnBsYXllck9uZSA9IHBsYXllck9uZTtcbiAgZ3JpZC5wbGF5ZXJUd28gPSBwbGF5ZXJUd287XG4gIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBncmlkQ2xpY2tlZFNpbmdsZSk7XG59O1xuXG5mdW5jdGlvbiBzaW5nbGVQbGF5ZXIoKSB7XG4gIGdhbWVtb2RlID0gJ3NpbmdsZSc7XG4gIHNldHVwU2hpcHMoKTtcbiAgc2V0dXBCb2FyZFBoYXNlKCk7XG5cbiAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKTtcbiAgY29uc3QgcGxhY2VSYW5kb21seUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZS1yYW5kb21seScpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG5cbiAgY29uc3QgcGxheWVyT25lID0gcGxheWVyKCk7XG4gIHBsYXllck9uZS5uYW1lID0gJ1BsYXllcic7XG4gIGNvbnN0IGNwdSA9IHBsYXllcigpO1xuICBjcHUubmFtZSA9ICdDb21wdXRlcic7XG5cbiAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEJvYXJkKTtcbiAgcGxhY2VSYW5kb21seUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUmFuZG9tbHkpO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHN1Ym1pdENvb3JkcyhwbGF5ZXJPbmUpKSB7XG4gICAgICBjcHUucGxheWVyQm9hcmQucGxhY2VSYW5kb21TaGlwcygpO1xuICAgICAgc2luZ2xlR2FtZUxvb3AocGxheWVyT25lLCBjcHUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBkb3VibGVQbGF5ZXIoKSB7XG4gIGdhbWVtb2RlID0gJ2RvdWJsZSc7XG4gIHNldHVwU2hpcHMoKTtcbiAgc2V0dXBCb2FyZFBoYXNlKCk7XG5cbiAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKTtcbiAgY29uc3QgcGxhY2VSYW5kb21seUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZS1yYW5kb21seScpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG5cbiAgY29uc3QgcGxheWVyT25lID0gcGxheWVyKCk7XG4gIHBsYXllck9uZS5uYW1lID0gJ1BsYXllciBPbmUnO1xuICBjb25zdCBwbGF5ZXJUd28gPSBwbGF5ZXIoKTtcbiAgcGxheWVyVHdvLm5hbWUgPSAnUGxheWVyIFR3byc7XG5cbiAgYWN0aXZlUGxheWVyID0gcGxheWVyT25lO1xuICBkaXNwbGF5QWN0aXZlUGxheWVyKGFjdGl2ZVBsYXllcik7XG5cbiAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEJvYXJkKTtcbiAgcGxhY2VSYW5kb21seUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlUmFuZG9tbHkpO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHN1Ym1pdENvb3JkcyhhY3RpdmVQbGF5ZXIpKSB7XG4gICAgICBpZiAoYWN0aXZlUGxheWVyID09PSBwbGF5ZXJPbmUpIHtcbiAgICAgICAgcmVzZXRCb2FyZCgpO1xuICAgICAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJUd287XG4gICAgICAgIGRpc3BsYXlBY3RpdmVQbGF5ZXIoYWN0aXZlUGxheWVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGl2ZVBsYXllciA9IHBsYXllck9uZTtcbiAgICAgICAgZG91YmxlR2FtZUxvb3AocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuICAgICAgfTtcbiAgICB9O1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGRvdWJsZUdhbWVMb29wKHBsYXllck9uZSwgcGxheWVyVHdvKSB7XG4gIGF0dGFja1BoYXNlKGFjdGl2ZVBsYXllcik7XG4gIGRpc3BsYXlBY3RpdmVQbGF5ZXIoYWN0aXZlUGxheWVyKTtcblxuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKTtcbiAgZ3JpZC5wbGF5ZXJPbmUgPSBwbGF5ZXJPbmU7XG4gIGdyaWQucGxheWVyVHdvID0gcGxheWVyVHdvO1xuICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ3JpZENsaWNrZWREb3VibGUpO1xufTtcblxuZnVuY3Rpb24gZ3JpZENsaWNrZWREb3VibGUoZSkge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKTtcbiAgY29uc3QgcGxheWVyT25lID0gZ3JpZC5wbGF5ZXJPbmU7XG4gIGNvbnN0IHBsYXllclR3byA9IGdyaWQucGxheWVyVHdvO1xuICBsZXQgbGFzdFBsYXllcjtcbiAgbGV0IGxhc3RUdXJuU3RhdHVzO1xuXG4gIGlmIChlLnRhcmdldCA9PT0gZ3JpZCkge1xuICAgIGxhc3RQbGF5ZXIgPSBhY3RpdmVQbGF5ZXI7XG4gICAgYWN0aXZlUGxheWVyID09PSBwbGF5ZXJPbmUgPyBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJUd28gOiBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJPbmU7XG4gICAgbGFzdFR1cm5TdGF0dXMgPSBwbGF5ZXJBdHRhY2soZSwgYWN0aXZlUGxheWVyKTtcbiAgICBjbGVhckdyaWQoKTtcbiAgICBjbGVhck1pbmlHcmlkKCk7XG5cbiAgICBpZiAoIWNoZWNrRm9yV2lubmVycyhwbGF5ZXJPbmUsIHBsYXllclR3bykpIHtcbiAgICAgIHBhc3NEZXZpY2UoYWN0aXZlUGxheWVyLCBsYXN0VHVyblN0YXR1cyk7XG4gICAgICBjb25zdCBuZXh0VHVybkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC10dXJuJyk7XG4gICAgICBuZXh0VHVybkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIHVwZGF0ZUdyaWQobGFzdFBsYXllci5wbGF5ZXJCb2FyZCk7XG4gICAgICAgIGNvbnN0IG1pbmlHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbmktZ3JpZCcpO1xuICAgICAgICB1cGRhdGVNaW5pR3JpZChhY3RpdmVQbGF5ZXIucGxheWVyQm9hcmQsIG1pbmlHcmlkKTtcbiAgICAgICAgZGlzcGxheUFjdGl2ZVBsYXllcihhY3RpdmVQbGF5ZXIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdyaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBncmlkQ2xpY2tlZERvdWJsZSk7XG4gICAgICBkaXNwbGF5Qm90aEJvYXJkcyhwbGF5ZXJPbmUsIHBsYXllclR3byk7XG4gICAgICBjaGVja0Zvcldpbm5lcnMocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuICAgIH07XG4gIH07XG59O1xuXG5zaW5nbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaW5nbGVQbGF5ZXIpO1xuZG91YmxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG91YmxlUGxheWVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==