module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/listing": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/listing.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/GridCard/GridCard.js":
/*!*****************************************!*\
  !*** ./components/GridCard/GridCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GridCard_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridCard.style */ "./components/GridCard/GridCard.style.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\GridCard\\GridCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const GridCard = ({
  className,
  favorite,
  location,
  title,
  price,
  rating,
  editBtn,
  viewDetailsBtn,
  children
}) => {
  let classes = viewDetailsBtn || editBtn ? `has_btn ${className}` : className;
  return __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: `grid_card ${classes}`.trim(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["ImageWrapper"], {
    className: "media_wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, children), __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["ContentWrapper"], {
    className: "content_wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, location && __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["LocationArea"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 22
    }
  }, location), title && __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["TitleArea"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 19
    }
  }, title), __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["MetaWrapper"], {
    className: "meta_wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, price && __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["PriceArea"], {
    className: "price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, price), rating && __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["RatingArea"], {
    className: "rating",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 22
    }
  }, rating), viewDetailsBtn || editBtn ? __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
    className: "button_group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, viewDetailsBtn, editBtn) : null)), favorite && __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["FavoriteIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 20
    }
  }, favorite));
};

GridCard.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element]),
  price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  rating: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element]),
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element]),
  editBtn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  viewDetailsBtn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (GridCard);

/***/ }),

/***/ "./components/GridCard/GridCard.style.js":
/*!***********************************************!*\
  !*** ./components/GridCard/GridCard.style.js ***!
  \***********************************************/
/*! exports provided: ImageWrapper, FavoriteIcon, ContentWrapper, LocationArea, TitleArea, PriceArea, RatingArea, MetaWrapper, ButtonGroup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteIcon", function() { return FavoriteIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationArea", function() { return LocationArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleArea", function() { return TitleArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceArea", function() { return PriceArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingArea", function() { return RatingArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaWrapper", function() { return MetaWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const GridCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__GridCardWrapper",
  componentId: "sc-6ijidl-0"
})(["position:relative;border-radius:6px;overflow:hidden;margin-bottom:30px;@media only screen and (max-width:480px){margin-bottom:20px;}&.has_btn{.button_group{@media only screen and (min-width:481px){position:absolute;top:5px;padding-top:3px;}}}&:hover{box-shadow:0 6px 12px ", ";.content_wrapper{border-color:transparent;}&.has_btn{.meta_wrapper{.rating{@media only screen and (min-width:481px){opacity:0;visibility:hidden;}}}@media only screen and (min-width:481px){.button_group{top:19px;opacity:1;visibility:visible;}}}.react-multiple-carousel__arrow{opacity:1;visibility:visible;}.react-multi-carousel-dot-list{bottom:0;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('boxShadow.2', 'rgba(0, 0, 0, 0.16)'));
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__ImageWrapper",
  componentId: "sc-6ijidl-1"
})(["> img{max-width:100%;height:auto;}.react-multi-carousel-list{min-height:150px;background-color:#e9e8ec;}.react-multi-carousel-item{height:170px;}.react-multiple-carousel__arrow{top:0;width:22%;height:100%;border-radius:0;padding:0;opacity:0;visibility:hidden;z-index:1;&::before{font-weight:700;}}.react-multiple-carousel__arrow--left{left:0;background:linear-gradient( to left,transparent 0%,rgba(0,0,0,0.25) 100% );&:hover{background:linear-gradient( to left,transparent 0%,rgba(0,0,0,0.25) 100% );}}.react-multiple-carousel__arrow--right{right:0;background:linear-gradient( to right,transparent 0%,rgba(0,0,0,0.25) 100% );&:hover{background:linear-gradient( to right,transparent 0%,rgba(0,0,0,0.25) 100% );}}.react-multi-carousel-dot-list{position:absolute;bottom:-30%;left:0;width:100%;padding-top:10px;padding-bottom:10px;display:flex;justify-content:center;align-items:center;background:linear-gradient( to bottom,transparent 0%,rgba(0,0,0,0.25) 100% );transition:bottom 0.3s ease;}.react-multi-carousel-dot{align-items:center;button{width:6px;height:6px;border:0;background-color:", ";box-shadow:0 2px 2px rgba(0,0,0,0.05);transition:all 0.3s ease;}}.react-multi-carousel-dot--active{button{width:8px;height:8px;background-color:", ";}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.3', '#E9E8E8'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'));
const FavoriteIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__FavoriteIcon",
  componentId: "sc-6ijidl-2"
})(["position:absolute;top:10px;right:8px;z-index:9;"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__ContentWrapper",
  componentId: "sc-6ijidl-3"
})(["padding:15px;border-width:1px;border-style:solid;border-top-width:0;border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-color:", ";transition:border-color 0.2s ease;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'));
const LocationArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__LocationArea",
  componentId: "sc-6ijidl-4"
})(["color:", ";font-size:13px;font-weight:400;white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'));
const TitleArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__TitleArea",
  componentId: "sc-6ijidl-5"
})(["color:", ";font-size:17px;font-weight:700;margin-bottom:2px;white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis;@media only screen and (max-width:480px){font-size:15px;margin:4px 0 5px;}a{color:", ";font-size:17px;font-weight:700;margin-bottom:2px;@media only screen and (max-width:480px){font-size:15px;margin:4px 0 5px;}&:hover{color:", ";}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const PriceArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__PriceArea",
  componentId: "sc-6ijidl-6"
})(["color:", ";font-size:13px;font-weight:400;margin-top:1px;white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const RatingArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__RatingArea",
  componentId: "sc-6ijidl-7"
})(["display:flex;align-items:center;color:", ";font-size:13px;margin-top:4px;span{flex-shrink:0;}i{color:", ";}svg{fill:", ";}strong{margin-top:-2px;font-weight:700;margin-left:8px;}.ant-rate{.ant-rate-star{margin-right:4px;font-size:15px;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const MetaWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__MetaWrapper",
  componentId: "sc-6ijidl-8"
})(["position:relative;transition:all 0.3s ease-out;"]);
const ButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__ButtonGroup",
  componentId: "sc-6ijidl-9"
})(["padding-top:7px;@media only screen and (min-width:481px){opacity:0;visibility:hidden;}> a{display:inline-flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:", ";transition:all 0.3s ease;&:hover,&:focus{outline:0;text-decoration:none;color:", ";}svg{margin-right:5px;width:18px;height:18px;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.1', '#399C9F'));
/* harmony default export */ __webpack_exports__["default"] = (GridCardWrapper);

/***/ }),

/***/ "./components/Loader/Loader.js":
/*!*************************************!*\
  !*** ./components/Loader/Loader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loader_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader.style */ "./components/Loader/Loader.style.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\Loader\\Loader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Loader = ({
  fill,
  className
}) => {
  // default className
  const addAllClasses = ['loader']; // add new class using className prop

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(_Loader_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: addAllClasses.join(' '),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("svg", {
    enableBackground: "new 0 0 0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("circle", {
    fill: fill,
    stroke: "none",
    cx: "6",
    cy: "50",
    r: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    dur: "1s",
    values: "0;1;0",
    repeatCount: "indefinite",
    begin: "0.1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  })), __jsx("circle", {
    fill: fill,
    stroke: "none",
    cx: "26",
    cy: "50",
    r: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    dur: "1s",
    values: "0;1;0",
    repeatCount: "indefinite",
    begin: "0.2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  })), __jsx("circle", {
    fill: fill,
    stroke: "none",
    cx: "46",
    cy: "50",
    r: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    dur: "1s",
    values: "0;1;0",
    repeatCount: "indefinite",
    begin: "0.3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }))));
};

Loader.propTypes = {
  /** ClassName of the Loader component. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Add Loader color using fill prop. */
  fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Loader.defaultProps = {
  fill: '#008489'
};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./components/Loader/Loader.style.js":
/*!*******************************************!*\
  !*** ./components/Loader/Loader.style.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const LoaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Loaderstyle__LoaderWrapper",
  componentId: "xriqg-0"
})(["width:100%;display:flex;align-items:center;justify-content:center;svg{width:52px;height:100px;display:inline-block;}"]);
/* harmony default export */ __webpack_exports__["default"] = (LoaderWrapper);

/***/ }),

/***/ "./components/Map/ListingPageMap.js":
/*!******************************************!*\
  !*** ./components/Map/ListingPageMap.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapInfoWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapInfoWindow */ "./components/Map/MapInfoWindow.js");
/* harmony import */ var _hotelMapMarker_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hotelMapMarker.png */ "./components/Map/hotelMapMarker.png");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\Map\\ListingPageMap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const HotelMapMarkerCluster = ({
  location
}) => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: markerIndex,
    1: setMarkerIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  let hotelData = [];

  const infoWindowToggle = index => {
    setIsOpen(!isOpen);
    setMarkerIndex(index);
  };

  location && location.forEach(item => {
    hotelData.push({
      id: item.id,
      lat: parseFloat(item.location.lat),
      lng: parseFloat(item.location.lng),
      title: item.title,
      thumbUrl: item.image.thumb_url,
      formattedAddress: item.location.formattedAddress,
      price: item.price,
      rating: item.rating,
      ratingCount: item.ratingCount
    });
  });
  return hotelData.map((singlePostLoaction, index) => {
    return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
      key: index,
      icon: _hotelMapMarker_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      position: singlePostLoaction,
      onClick: () => infoWindowToggle(singlePostLoaction.id),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }
    }, isOpen && markerIndex === singlePostLoaction.id ? __jsx(_MapInfoWindow__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: singlePostLoaction,
      onCloseClick: () => infoWindowToggle(singlePostLoaction.id),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }) : '');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (HotelMapMarkerCluster);

/***/ }),

/***/ "./components/Map/Map.js":
/*!*******************************!*\
  !*** ./components/Map/Map.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps_lib_components_addons_MarkerClusterer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps/lib/components/addons/MarkerClusterer */ "react-google-maps/lib/components/addons/MarkerClusterer");
/* harmony import */ var react_google_maps_lib_components_addons_MarkerClusterer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps_lib_components_addons_MarkerClusterer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapWrapper */ "./components/Map/MapWrapper.js");
/* harmony import */ var _ListingPageMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListingPageMap */ "./components/Map/ListingPageMap.js");
/* harmony import */ var _SinglePageMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SinglePageMap */ "./components/Map/SinglePageMap.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\Map\\Map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Map = props => {
  const {
    multiple,
    location
  } = props;

  const handleClustererClick = data => {
    const markerClusterer = data.getMarkers();
    console.log(`Current clicked markers length: ${markerClusterer.length}`);
    console.log(markerClusterer);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, multiple && multiple === true ? __jsx(_MapWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    containerElement: __jsx("div", {
      style: {
        height: '400px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 29
      }
    }),
    mapElement: __jsx("div", {
      style: {
        height: '100%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 23
      }
    }),
    defaultZoom: 7,
    defaultCenter: {
      lat: 41.8858,
      lng: -75.7223
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(react_google_maps_lib_components_addons_MarkerClusterer__WEBPACK_IMPORTED_MODULE_1___default.a, {
    gridSize: 60,
    averageCenter: true,
    defaultEnableRetinaIcons: true,
    onClick: handleClustererClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx(_ListingPageMap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    location: location,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }))) : __jsx(_MapWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    containerElement: __jsx("div", {
      style: {
        height: '400px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 29
      }
    }),
    mapElement: __jsx("div", {
      style: {
        height: '100%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 23
      }
    }),
    defaultZoom: 8,
    defaultCenter: {
      lat: 40.706877,
      lng: -74.011265
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_SinglePageMap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    location: location,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./components/Map/MapInfoWindow.js":
/*!*****************************************!*\
  !*** ./components/Map/MapInfoWindow.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_UI_Rating_Rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/Rating/Rating */ "./components/UI/Rating/Rating.js");
/* harmony import */ var _GridCard_GridCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GridCard/GridCard */ "./components/GridCard/GridCard.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\Map\\MapInfoWindow.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const MapInfoWindow = ({
  data,
  onCloseClick
}) => {
  return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["InfoWindow"], {
    id: data === null || data === void 0 ? void 0 : data.id,
    onCloseClick: onCloseClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_GridCard_GridCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "info_window_card",
    location: data === null || data === void 0 ? void 0 : data.formattedAddress,
    title: data === null || data === void 0 ? void 0 : data.title,
    price: `$${data === null || data === void 0 ? void 0 : data.price}/Night - Free Cancellation`,
    rating: __jsx(components_UI_Rating_Rating__WEBPACK_IMPORTED_MODULE_2__["default"], {
      rating: data === null || data === void 0 ? void 0 : data.rating,
      ratingCount: data === null || data === void 0 ? void 0 : data.ratingCount,
      type: "bulk",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: data === null || data === void 0 ? void 0 : data.thumbUrl,
    alt: data === null || data === void 0 ? void 0 : data.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MapInfoWindow);

/***/ }),

/***/ "./components/Map/MapWrapper.js":
/*!**************************************!*\
  !*** ./components/Map/MapWrapper.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\Map\\MapWrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const Map = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withGoogleMap"])(props => __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], _extends({}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 28
  }
}), props.children)));

const MapWrapper = props => {
  return __jsx(Map, _extends({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&key=YOUR_GOOGLE_MAP_API_KEY&libraries=geometry,drawing,places",
    loadingElement: __jsx("div", {
      style: {
        height: `100%`
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 23
      }
    })
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (MapWrapper);

/***/ }),

/***/ "./components/Map/SinglePageMap.js":
/*!*****************************************!*\
  !*** ./components/Map/SinglePageMap.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapInfoWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapInfoWindow */ "./components/Map/MapInfoWindow.js");
/* harmony import */ var _hotelMapMarker_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hotelMapMarker.png */ "./components/Map/hotelMapMarker.png");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\Map\\SinglePageMap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const SingleMapDisplay = ({
  location
}) => {
  let hotelData = [];
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: markerIndex,
    1: setMarkerIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const infoWindowToggle = index => {
    setIsOpen(!isOpen);
    setMarkerIndex(index);
  };

  hotelData.push({
    lat: location === null || location === void 0 ? void 0 : location.location.lat,
    lng: location === null || location === void 0 ? void 0 : location.location.lng,
    id: location === null || location === void 0 ? void 0 : location.id,
    title: location === null || location === void 0 ? void 0 : location.title,
    thumbUrl: location === null || location === void 0 ? void 0 : location.image.thumb_url,
    formattedAddress: location === null || location === void 0 ? void 0 : location.location.formattedAddress,
    price: location === null || location === void 0 ? void 0 : location.price,
    rating: location === null || location === void 0 ? void 0 : location.rating,
    ratingCount: location === null || location === void 0 ? void 0 : location.ratingCount
  });
  return hotelData.map((singlePostLoaction, index) => {
    return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
      key: index,
      icon: _hotelMapMarker_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      position: singlePostLoaction,
      onClick: () => {
        infoWindowToggle(singlePostLoaction.id);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, isOpen && markerIndex === singlePostLoaction.id ? __jsx(_MapInfoWindow__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: singlePostLoaction,
      onCloseClick: () => {
        infoWindowToggle(singlePostLoaction.id);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }) : '');
  });
};

const HotelMapMarkerSingle = props => {
  return __jsx(SingleMapDisplay, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HotelMapMarkerSingle);

/***/ }),

/***/ "./components/Map/hotelMapMarker.png":
/*!*******************************************!*\
  !*** ./components/Map/hotelMapMarker.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./components/ProductCard/ProductCard.js":
/*!***********************************************!*\
  !*** ./components/ProductCard/ProductCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_UI_Rating_Rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/Rating/Rating */ "./components/UI/Rating/Rating.js");
/* harmony import */ var components_UI_Favorite_Favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/Favorite/Favorite */ "./components/UI/Favorite/Favorite.js");
/* harmony import */ var _GridCard_GridCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../GridCard/GridCard */ "./components/GridCard/GridCard.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\ProductCard\\ProductCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 1,
    paritialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    paritialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
function ProductCard({
  title,
  rating,
  location,
  price,
  ratingCount,
  gallery,
  slug,
  link,
  deviceType
}) {
  return __jsx(_GridCard_GridCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    favorite: __jsx(components_UI_Favorite_Favorite__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onClick: event => {
        console.log(event);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }),
    location: location.formattedAddress,
    title: title,
    price: `$${price}/Night - Free Cancellation`,
    rating: __jsx(components_UI_Rating_Rating__WEBPACK_IMPORTED_MODULE_4__["default"], {
      rating: rating,
      ratingCount: ratingCount,
      type: "bulk",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    }),
    viewDetailsBtn: __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${link}/[slug]`,
      as: `${link}/${slug}`,
      prefetch: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiExternalLink"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }), " View Details")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    ssr: true,
    additionalTransfrom: 0,
    arrows: true,
    autoPlaySpeed: 3000,
    containerClass: "container",
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    renderDotsOutside: false,
    responsive: responsive,
    deviceType: deviceType,
    showDots: true,
    sliderClass: "",
    slidesToSlide: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, gallery.map(({
    url,
    title
  }, index) => __jsx("img", {
    src: url,
    alt: title,
    key: index,
    draggable: false,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'relative'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./components/SectionGrid/SectionGrid.js":
/*!***********************************************!*\
  !*** ./components/SectionGrid/SectionGrid.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionGrid; });
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_UI_Text_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/Text/Text */ "./components/UI/Text/Text.js");
/* harmony import */ var components_UI_Box_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/Box/Box */ "./components/UI/Box/Box.js");
/* harmony import */ var _ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ProductCard/ProductCard */ "./components/ProductCard/ProductCard.js");

var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\SectionGrid\\SectionGrid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const LoadMore = ({
  handleLoadMore,
  showButton,
  buttonText,
  loading,
  loadMoreComponent,
  loadMoreStyle
}) => {
  return !!showButton && __jsx(components_UI_Box_Box__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    className: "loadmore_wrapper"
  }, loadMoreStyle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), loadMoreComponent ? loadMoreComponent : __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
    loading: loading,
    onClick: handleLoadMore,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, buttonText || 'Load More'));
};

function SectionGrid({
  data = [],
  totalItem,
  limit,
  columnWidth,
  paginationComponent,
  handleLoadMore,
  loadMoreComponent,
  placeholder,
  loading,
  buttonText,
  rowStyle,
  columnStyle,
  loadMoreStyle,
  link
}) {
  const n = limit ? Number(limit) : 1;
  const limits = Array(n).fill(0);
  let showButton = data.length < totalItem;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(components_UI_Box_Box__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    className: "grid_wrapper"
  }, rowStyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), data && data.length ? data.map(item => {
    return __jsx(components_UI_Box_Box__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
      className: "grid_column",
      width: columnWidth,
      key: item.id
    }, columnStyle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }), __jsx(_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
      link: link
    }, item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 19
      }
    })));
  }) : null, loading && limits.map((item, i) => __jsx(components_UI_Box_Box__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    className: "grid_column",
    width: columnWidth,
    key: i
  }, columnStyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }), placeholder ? placeholder : __jsx(components_UI_Text_Text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    content: "Loading ...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 44
    }
  })))), showButton && __jsx(LoadMore, {
    showButton: showButton,
    handleLoadMore: handleLoadMore,
    loading: loading,
    buttonText: buttonText,
    loadMoreComponent: loadMoreComponent,
    loadMoreStyle: loadMoreStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), paginationComponent && __jsx(components_UI_Box_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "pagination_wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, paginationComponent));
}
SectionGrid.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  totalItem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  columnWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array]),
  paginationComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element,
  handleLoadMore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  loadMoreComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  buttonText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  rowStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  columnStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  loadMoreStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
SectionGrid.defaultProps = {
  rowStyle: {
    flexBox: true,
    flexWrap: 'wrap',
    mr: ['-10px', '-10px', '-10px', '-10px', '-10px', '-15px'],
    ml: ['-10px', '-10px', '-10px', '-10px', '-10px', '-15px']
  },
  columnStyle: {
    pr: ['10px', '10px', '10px', '10px', '10px', '15px'],
    pl: ['10px', '10px', '10px', '10px', '10px', '15px']
  },
  loadMoreStyle: {
    flexBox: true,
    justifyContent: 'center',
    mt: '1rem'
  }
};

/***/ }),

/***/ "./components/UI/Base.js":
/*!*******************************!*\
  !*** ./components/UI/Base.js ***!
  \*******************************/
/*! exports provided: themed, base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themed", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** This is our base component every components must be extend it. */

const themed = key => props => props.theme[key];
const base = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["compose"])(() => ({
  boxSizing: 'border-box'
}), styled_system__WEBPACK_IMPORTED_MODULE_0__["space"], styled_system__WEBPACK_IMPORTED_MODULE_0__["width"], styled_system__WEBPACK_IMPORTED_MODULE_0__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_0__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_0__["height"], styled_system__WEBPACK_IMPORTED_MODULE_0__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_0__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_0__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_0__["color"], styled_system__WEBPACK_IMPORTED_MODULE_0__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_0__["order"], styled_system__WEBPACK_IMPORTED_MODULE_0__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_0__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_0__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_0__["display"]);
base.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, styled_system__WEBPACK_IMPORTED_MODULE_0__["display"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["space"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["borders"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["borderColor"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["width"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["height"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["fontSize"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["color"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["flex"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["order"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["alignSelf"].propTypes);

/***/ }),

/***/ "./components/UI/Box/Box.js":
/*!**********************************!*\
  !*** ./components/UI/Box/Box.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Base */ "./components/UI/Base.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\UI\\Box\\Box.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('div').withConfig({
  displayName: "Box__BoxWrapper",
  componentId: "sc-1w2buan-0"
})(_Base__WEBPACK_IMPORTED_MODULE_4__["base"], Object(_Base__WEBPACK_IMPORTED_MODULE_4__["themed"])('Box'), props => props.flexBox && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])({
  display: 'flex'
}, styled_system__WEBPACK_IMPORTED_MODULE_3__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_3__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_3__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_3__["justifyContent"], Object(_Base__WEBPACK_IMPORTED_MODULE_4__["themed"])('FlexBox')));

const Box = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(BoxWrapper, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3
    }
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Box);
Box.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,

  /** Using this props we can convert our Box Component to a Flex Container or Component */
  flexBox: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['div', 'article', 'section', 'address', 'header', 'footer', 'nav', 'main']),
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  flex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  order: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  alignSelf: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  display: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  border: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  borderTop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  borderRight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  borderBottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  borderLeft: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))])
};
Box.defaultProps = {
  as: 'div'
};

/***/ }),

/***/ "./components/UI/ContentLoader/ContentLoader.js":
/*!******************************************************!*\
  !*** ./components/UI/ContentLoader/ContentLoader.js ***!
  \******************************************************/
/*! exports provided: SinglePageLoader, PostPlaceholder, ProfilePicLoader, ImageCardLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePageLoader", function() { return SinglePageLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPlaceholder", function() { return PostPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicLoader", function() { return ProfilePicLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCardLoader", function() { return ImageCardLoader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-content-loader */ "react-content-loader");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\UI\\ContentLoader\\ContentLoader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SinglePageLoader = props => {
  return __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    height: 1000,
    width: 800,
    speed: 3,
    primaryColor: "#f3f3f3",
    secondaryColor: "#e9e8ec"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), __jsx("rect", {
    x: "5.02",
    y: "16.7",
    rx: "0",
    ry: "0",
    width: "782.02",
    height: "319.55",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "7.77",
    y: "360.22",
    rx: "0",
    ry: "0",
    width: "82.47",
    height: "39",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "207.77",
    y: "360.22",
    rx: "0",
    ry: "0",
    width: "82.47",
    height: "39",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "104.77",
    y: "362.22",
    rx: "0",
    ry: "0",
    width: "82.47",
    height: "39",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "305.77",
    y: "361.22",
    rx: "0",
    ry: "0",
    width: "82.47",
    height: "39",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "611.78",
    y: "359.22",
    rx: "0",
    ry: "0",
    width: "82.47",
    height: "39",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "709.78",
    y: "360.22",
    rx: "0",
    ry: "0",
    width: "82.47",
    height: "39",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "8.02",
    y: "421.71",
    rx: "0",
    ry: "0",
    width: "522.01",
    height: "120.96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "550.03",
    y: "418.71",
    rx: "0",
    ry: "0",
    width: "240",
    height: "301.56",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "9.04",
    y: "561.71",
    rx: "0",
    ry: "0",
    width: "120.06",
    height: "120.96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "7.06",
    y: "690.71",
    rx: "0",
    ry: "0",
    width: "522.01",
    height: "120.96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "272.25",
    y: "560.71",
    rx: "0",
    ry: "0",
    width: "120.06",
    height: "120.96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "405.04",
    y: "558.71",
    rx: "0",
    ry: "0",
    width: "120.06",
    height: "120.96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "142.04",
    y: "559.71",
    rx: "0",
    ry: "0",
    width: "120.06",
    height: "120.96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "6.06",
    y: "819.71",
    rx: "0",
    ry: "0",
    width: "522.01",
    height: "120.96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }));
};
const PostPlaceholder = props => {
  return __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    height: 400,
    width: 400,
    speed: 2,
    className: "placeholder",
    primaryColor: "#f3f3f3",
    secondaryColor: "#e9e8ec"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }), __jsx("circle", {
    cx: "39.34",
    cy: "17.32",
    r: "0.71",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), __jsx("circle", {
    cx: "751.46",
    cy: "58.81",
    r: "40.21",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "605.25",
    y: "39.6",
    rx: "0",
    ry: "0",
    width: "66",
    height: "41",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "639.25",
    y: "59.6",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "518.25",
    y: "38.6",
    rx: "0",
    ry: "0",
    width: "66",
    height: "41",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "435.25",
    y: "40.6",
    rx: "0",
    ry: "0",
    width: "66",
    height: "41",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "264.25",
    y: "216.6",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "31.25",
    y: "451.94",
    rx: "0",
    ry: "0",
    width: "167.17",
    height: "147.66",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "399.25",
    y: "531.94",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "217.25",
    y: "450.94",
    rx: "0",
    ry: "0",
    width: "176.33",
    height: "147.66",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "415.25",
    y: "449.94",
    rx: "0",
    ry: "0",
    width: "167.17",
    height: "147.66",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "608.17",
    y: "448.94",
    rx: "0",
    ry: "0",
    width: "171.75",
    height: "147.66",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "30.25",
    y: "609.94",
    rx: "0",
    ry: "0",
    width: "167.17",
    height: "147.66",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "417.25",
    y: "612.94",
    rx: "0",
    ry: "0",
    width: "167.17",
    height: "147.66",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "609.25",
    y: "612.94",
    rx: "0",
    ry: "0",
    width: "167.17",
    height: "147.66",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "220.25",
    y: "612.94",
    rx: "0",
    ry: "0",
    width: "174.04",
    height: "147.66",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "9.63",
    y: "18.61",
    rx: "0",
    ry: "0",
    width: "381.03",
    height: "186",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "80.63",
    y: "132.61",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "9.63",
    y: "218.61",
    rx: "0",
    ry: "0",
    width: "183",
    height: "25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "8.63",
    y: "258.61",
    rx: "0",
    ry: "0",
    width: "381",
    height: "43",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "8.63",
    y: "319.61",
    rx: "0",
    ry: "0",
    width: "204",
    height: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "229.63",
    y: "320.61",
    rx: "0",
    ry: "0",
    width: "164.45",
    height: "23",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "336.63",
    y: "328.61",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }), __jsx("circle", {
    cx: "20.56",
    cy: "370.54",
    r: "11.93",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }), __jsx("circle", {
    cx: "53.63",
    cy: "376.61",
    r: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }), __jsx("circle", {
    cx: "52.56",
    cy: "370.54",
    r: "11.93",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }), __jsx("circle", {
    cx: "81.56",
    cy: "370.54",
    r: "11.93",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }), __jsx("circle", {
    cx: "112.56",
    cy: "371.54",
    r: "11.93",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }), __jsx("circle", {
    cx: "141.56",
    cy: "371.54",
    r: "11.93",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "168.63",
    y: "360.61",
    rx: "0",
    ry: "0",
    width: "104",
    height: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "213.63",
    y: "397.61",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }));
};
const ProfilePicLoader = () => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, {
  height: 180,
  width: 180,
  speed: 3,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 3
  }
}, __jsx("circle", {
  cx: "76",
  cy: "60",
  r: "1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 5
  }
}), __jsx("circle", {
  cx: "90",
  cy: "50",
  r: "41",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 151,
    columnNumber: 5
  }
}), __jsx("rect", {
  x: "16",
  y: "94",
  rx: "0",
  ry: "0",
  width: "149",
  height: "80",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 152,
    columnNumber: 5
  }
}));
const ImageCardLoader = () => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, {
  height: 270,
  width: 215,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 157,
    columnNumber: 3
  }
}, __jsx("circle", {
  cx: "138",
  cy: "80",
  r: "1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 164,
    columnNumber: 5
  }
}), __jsx("rect", {
  x: "87",
  y: "24",
  rx: "0",
  ry: "0",
  width: "0",
  height: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 165,
    columnNumber: 5
  }
}), __jsx("rect", {
  x: "87",
  y: "24",
  rx: "0",
  ry: "0",
  width: "0",
  height: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 5
  }
}), __jsx("rect", {
  x: "0",
  y: "0",
  rx: "0",
  ry: "0",
  width: "223",
  height: "277",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 167,
    columnNumber: 5
  }
}));

/***/ }),

/***/ "./components/UI/DatePicker/ReactDates.js":
/*!************************************************!*\
  !*** ./components/UI/DatePicker/ReactDates.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dates/initialize */ "react-dates/initialize");
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dates_initialize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dates */ "react-dates");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ReactDates_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReactDates.style */ "./components/UI/DatePicker/ReactDates.style.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\UI\\DatePicker\\ReactDates.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/*
 * For Localization enable this code [example : French language as "fr"]
 */
// import moment from 'moment';
// import 'moment/locale/fr';

class DateRangePickerBox extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onDateChangeFunc", ({
      startDate,
      endDate
    }) => {
      const {
        dateFormat
      } = this.state;
      this.setState({
        startDate,
        endDate
      });

      if (startDate !== null && endDate !== null) {
        this.props.updateSearchData({
          setStartDate: startDate.format(dateFormat),
          setEndDate: endDate.format(dateFormat)
        });
      }
    });

    _defineProperty(this, "onFocusChangeFunc", focusedInput => {
      return this.setState({
        focusedInput
      });
    });

    const separator = this.props.item && this.props.item.separator ? this.props.item.separator : '/';

    const _dateFormat = this.props.item && this.props.item.format ? this.props.item.format : 'llll';

    this.state = {
      focusedInput: null,
      startDate: this.props.startDate ? this.props.startDate : null,
      endDate: this.props.endDate ? this.props.endDate : null,
      dateFormat: _dateFormat,
      separator
    };
    this.onDateChangeFunc = this.onDateChangeFunc.bind(this);
    this.onFocusChangeFunc = this.onFocusChangeFunc.bind(this);
    /*
     * For Localization enable this code [example : French language as "fr"]
     */
    // moment.locale('fr');
  }

  render() {
    const {
      focusedInput,
      startDate,
      endDate
    } = this.state; // DateRangePickerBox props list

    const {
      className,
      startDateId,
      endDateId,
      startDatePlaceholderText,
      endDatePlaceholderText,
      disabled,
      showClearDates,
      isRTL,
      orientation,
      anchorDirection,
      withPortal,
      withFullScreenPortal,
      small,
      block,
      numberOfMonths,
      regular,
      noBorder
    } = this.props; // Add all classs to an array **************

    const addAllClasses = ['date_picker']; // className prop checking **************

    if (className) {
      addAllClasses.push(className);
    } // React-Dates DateRangePicker Props List


    const defaultCalenderProps = {
      startDateId: startDateId ? startDateId : 'start_unique_id',
      endDateId: endDateId ? endDateId : 'end_date_unique_id',
      startDate,
      endDate,
      focusedInput,
      onFocusChange: this.onFocusChangeFunc,
      onDatesChange: this.onDateChangeFunc,
      startDatePlaceholderText,
      endDatePlaceholderText,
      disabled,
      isRTL,
      showClearDates: showClearDates ? showClearDates : false,
      orientation,
      anchorDirection,
      withPortal,
      withFullScreenPortal,
      small,
      numberOfMonths: numberOfMonths ? numberOfMonths : 2,
      block,
      regular,
      noBorder
    };
    return __jsx(_ReactDates_style__WEBPACK_IMPORTED_MODULE_4__["ReactDatesStyleWrapper"], {
      className: addAllClasses.join(' '),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 7
      }
    }, __jsx(react_dates__WEBPACK_IMPORTED_MODULE_1__["DateRangePicker"], _extends({}, defaultCalenderProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }
    })));
  }

}

DateRangePickerBox.propTypes = {
  /** startDateId of the date-picker field */
  startDateId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,

  /** endDateId of the date-picker field */
  endDateId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  //

  /** startDatePlaceholderText of the date-picker field */
  startDatePlaceholderText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** endDatePlaceholderText of the date-picker field */
  endDatePlaceholderText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** disabled of the date-picker field */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['START_DATE', 'END_DATE'])]),

  /** showClearDates of the date-picker field */
  showClearDates: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** isRTL of the date-picker field */
  isRTL: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** orientation of the date-picker field */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['horizontal', 'vertical']),

  /** anchorDirection of the date-picker field */
  anchorDirection: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right']),

  /** withPortal of the date-picker field */
  withPortal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** withFullScreenPortal of the date-picker field */
  withFullScreenPortal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** small of the date-picker field */
  small: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** numberOfMonths of the date-picker field */
  numberOfMonths: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /** block of the date-picker field */
  block: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** regular of the date-picker field */
  regular: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** noBorder of the date-picker field */
  noBorder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** updateSearchData of the date-picker field to send component data to parent component */
  updateSearchData: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (DateRangePickerBox);

/***/ }),

/***/ "./components/UI/DatePicker/ReactDates.style.js":
/*!******************************************************!*\
  !*** ./components/UI/DatePicker/ReactDates.style.js ***!
  \******************************************************/
/*! exports provided: ReactDatesStyleWrapper, ReactDatesWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactDatesStyleWrapper", function() { return ReactDatesStyleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactDatesWrapper", function() { return ReactDatesWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var library_helpers_rtl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! library/helpers/rtl */ "./library/helpers/rtl.js");


const ReactDatesStyleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ReactDatesstyle__ReactDatesStyleWrapper",
  componentId: "kysuqv-0"
})(["display:flex;flex-wrap:wrap;align-items:center;margin-bottom:40px;.ant-form-item{display:flex;align-items:center;margin-right:30px;margin-bottom:0;margin-left:0;&:last-child{margin-right:0;}.ant-form-item-label{label{font-size:13px;}}}"]);

const ReactDateWrapper = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "ReactDatesstyle__ReactDateWrapper",
  componentId: "kysuqv-1"
})([".isoReactDate{height:100vh;.DateInput__display-text--focused{color:#fff;font-weight:400;}.CalendarDay--selected-start,.CalendarDay--selected-end,.CalendarDay--selected{color:#fff;}.CalendarDay--selected-span{color:#fff;}.CalendarDay--hovered-span,.CalendarDay--after-hovered-start{color:#fff;}.DayPickerKeyboardShortcuts__show--bottom-right{border-top:26px solid transparent;bottom:0;right:0;}.DayPicker--horizontal{.DayPickerNavigation--horizontal{.DayPickerNavigation__prev,.DayPickerNavigation__next{-webkit-transform:", ";-ms-transform:", ";transform:", ";}}}.DateRangePickerInput{.DateRangePickerInput__arrow{-webkit-transform:", ";-ms-transform:", ";transform:", ";}}}"], props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit');

const ReactDatesWrapper = Object(library_helpers_rtl__WEBPACK_IMPORTED_MODULE_1__["default"])(ReactDateWrapper);


/***/ }),

/***/ "./components/UI/Favorite/Favorite.js":
/*!********************************************!*\
  !*** ./components/UI/Favorite/Favorite.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useToggle */ "./components/UI/Favorite/useToggle.js");
/* harmony import */ var _Favorite_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Favorite.style */ "./components/UI/Favorite/Favorite.style.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\UI\\Favorite\\Favorite.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Favorite = ({
  className,
  content,
  onClick
}) => {
  // use toggle hooks
  const [toggleValue, toggleHandler] = Object(_useToggle__WEBPACK_IMPORTED_MODULE_2__["default"])(false); // Add all classs to an array

  const addAllClass = ['favorite']; // className prop checking

  if (className) {
    addAllClass.push(className);
  }

  const handelClick = event => {
    toggleHandler();
    onClick(!toggleValue);
  };

  return __jsx(_Favorite_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handelClick,
    className: `${addAllClass.join(' ')} ${toggleValue ? 'active' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18.64 18.232",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("path", {
    d: "M60.16,56h-.04a4.551,4.551,0,0,0-3.8,2.08A4.551,4.551,0,0,0,52.52,56h-.04A4.522,4.522,0,0,0,48,60.52a9.737,9.737,0,0,0,1.912,5.308A33.506,33.506,0,0,0,56.32,72a33.506,33.506,0,0,0,6.408-6.172A9.737,9.737,0,0,0,64.64,60.52,4.522,4.522,0,0,0,60.16,56Z",
    transform: "translate(-47 -55)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, content));
};

Favorite.propTypes = {
  /** ClassName of the Favorite */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** content of the Favorite */
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Favorite.defaultProps = {
  onClick: () => {}
};
/* harmony default export */ __webpack_exports__["default"] = (Favorite);

/***/ }),

/***/ "./components/UI/Favorite/Favorite.style.js":
/*!**************************************************!*\
  !*** ./components/UI/Favorite/Favorite.style.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const addAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:scale(1) rotate(0deg);}50%{transform:scale(1.34) rotateY(90deg);}"]);
const removeAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:scale(1.34) rotateY(90deg);}50%{transform:scale(1) rotateY(0);}"]);
const AddAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["animation:", " 0.4s cubic-bezier(0.38,0.7,0.6,0.29);"], addAnimation);
const RemoveAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["animation:", " 0.55s cubic-bezier(0.38,0.7,0.6,0.29);"], removeAnimation);
const FavoriteWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Favoritestyle__FavoriteWrapper",
  componentId: "ajvf5h-0"
})(["display:inline-block;cursor:pointer;border:0;padding:10px;background-color:transparent;&:hover,&:focus{border:0;box-shadow:none;outline:none;}svg{width:22px;height:20px;", " path{fill:", ";stroke:", ";stroke-width:2px;transition:fill 1s ease;}}&.active{svg{", ";path{fill:", ";}}}"], RemoveAnimation, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.5', 'rgba(0, 0, 0, 0.25)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), AddAnimation, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.4', '#FC5C63'));
/* harmony default export */ __webpack_exports__["default"] = (FavoriteWrapper);

/***/ }),

/***/ "./components/UI/Favorite/useToggle.js":
/*!*********************************************!*\
  !*** ./components/UI/Favorite/useToggle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useToggle = initialValue => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const toggler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setValue(value => !value), []);
  return [value, toggler];
};

/* harmony default export */ __webpack_exports__["default"] = (useToggle);

/***/ }),

/***/ "./components/UI/InputIncDec/InputIncDec.js":
/*!**************************************************!*\
  !*** ./components/UI/InputIncDec/InputIncDec.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons_lib_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons/lib/icons/PlusOutlined */ "@ant-design/icons/lib/icons/PlusOutlined");
/* harmony import */ var _ant_design_icons_lib_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons_lib_icons_MinusOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons/lib/icons/MinusOutlined */ "@ant-design/icons/lib/icons/MinusOutlined");
/* harmony import */ var _ant_design_icons_lib_icons_MinusOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_MinusOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _InputIncDec_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputIncDec.style */ "./components/UI/InputIncDec/InputIncDec.style.js");



var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\UI\\InputIncDec\\InputIncDec.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const InputIncDec = (_ref) => {
  let {
    className,
    increment,
    decrement
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "increment", "decrement"]);

  const addAllClasses = ['quantity'];

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(_InputIncDec_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: addAllClasses.join(' '),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("button", {
    className: "btn decBtn",
    type: "button",
    onClick: decrement,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_ant_design_icons_lib_icons_MinusOutlined__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    className: "qnt-input",
    type: "number"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  })), __jsx("button", {
    className: "btn incBtn",
    type: "button",
    onClick: increment,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(_ant_design_icons_lib_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (InputIncDec);

/***/ }),

/***/ "./components/UI/InputIncDec/InputIncDec.style.js":
/*!********************************************************!*\
  !*** ./components/UI/InputIncDec/InputIncDec.style.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const InputIncDecWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "InputIncDecstyle__InputIncDecWrapper",
  componentId: "sc-1x9dp7a-0"
})(["width:104px;height:18px;display:flex;align-items:center;position:relative;overflow:hidden;input[type='number']{width:calc(100% - 54px);position:absolute;left:27px;top:0;height:100%;padding:0;border:0;text-align:center;background-color:transparent;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}&:focus{outline:none;box-shadow:none;}}button{border:0;width:27px;height:27px;border-radius:50%;display:inline-flex;align-items:center;position:absolute;top:0;padding:0;background-color:transparent;cursor:pointer;justify-content:center;&.decBtn{left:0;}&.incBtn{right:0;}&:hover,&:focus{outline:0;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (InputIncDecWrapper);

/***/ }),

/***/ "./components/UI/Portal/Portal.js":
/*!****************************************!*\
  !*** ./components/UI/Portal/Portal.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Portal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
// The portal element is inserted in the DOM tree after
// the Modal's children are mounted, meaning that children
// will be mounted on a detached DOM node. If a child
// component requires to be attached to the DOM tree
// immediately when mounted, for example to measure a
// DOM node, or uses 'autoFocus' in a descendant, add
// state to Modal and only render the children when Modal
// is inserted in the DOM tree.


function Portal({
  children,
  rendererId
}) {
  const {
    0: containerEl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(document.createElement('div'));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let portalRoot = document.getElementById(rendererId) || document.body;
    portalRoot.appendChild(containerEl);
    return () => portalRoot.removeChild(containerEl);
  });
  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(children, containerEl);
}

/***/ }),

/***/ "./components/UI/Rating/Rating.js":
/*!****************************************!*\
  !*** ./components/UI/Rating/Rating.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\UI\\Rating\\Rating.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Rating = props => {
  const {
    rating,
    ratingCount,
    type,
    ratingFieldName
  } = props;
  let i, floorValue;
  let ratingView = [];

  if (rating && rating !== 0) {
    floorValue = Math.floor(rating);

    for (i = 0; i < 5; i++) {
      if (i < floorValue) {
        ratingView.push(__jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosStar"], {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 25
          }
        }));
      } else {
        ratingView.push(__jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosStarOutline"], {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }
        }));
      }
    }
  }

  let listingCondition;

  if (rating && rating === 5) {
    listingCondition = 'Awesome';
  } else if (4 <= rating && rating < 5) {
    listingCondition = 'Good';
  } else if (3 <= rating && rating < 4) {
    listingCondition = 'Average';
  } else if (2 <= rating && rating < 3) {
    listingCondition = 'Bad';
  } else if (rating >= 1) {
    listingCondition = 'Terrible';
  } else {
    listingCondition = '';
  }

  let showRatingCount;

  if (ratingCount) {
    showRatingCount = `(` + ratingCount + `)`;
  } else {
    showRatingCount = '';
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, type && type === 'bulk' ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, ratingView), __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, ` ${listingCondition}`, " ", `${showRatingCount}`)) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, ratingFieldName), " ", ratingView));
};

Rating.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  ratingCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  rating: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  ratingFieldName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Rating);

/***/ }),

/***/ "./components/UI/Text/Text.js":
/*!************************************!*\
  !*** ./components/UI/Text/Text.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Base */ "./components/UI/Base.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\UI\\Text\\Text.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('p').withConfig({
  displayName: "Text__TextWrapper",
  componentId: "t69qtu-0"
})(_Base__WEBPACK_IMPORTED_MODULE_4__["base"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["letterSpacing"], Object(_Base__WEBPACK_IMPORTED_MODULE_4__["themed"])('Text'));

const Text = (_ref) => {
  let {
    content
  } = _ref,
      props = _objectWithoutProperties(_ref, ["content"]);

  return __jsx(TextWrapper, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }), content);
};

Text.propTypes = _objectSpread({
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))])
}, _Base__WEBPACK_IMPORTED_MODULE_4__["base"].propTypes);
Text.defaultProps = {
  as: 'p',
  m: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/UI/Toolbar/Toolbar.js":
/*!******************************************!*\
  !*** ./components/UI/Toolbar/Toolbar.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Toolbar_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toolbar.style */ "./components/UI/Toolbar/Toolbar.style.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\UI\\Toolbar\\Toolbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Toolbar({
  left,
  right,
  className,
  children
}) {
  const addAllClasses = ['toolbar'];

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(_Toolbar_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: addAllClasses.join(' '),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_Toolbar_style__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, left && __jsx(_Toolbar_style__WEBPACK_IMPORTED_MODULE_1__["LeftSide"], {
    className: "toolbar_left__side",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 18
    }
  }, left), right && __jsx(_Toolbar_style__WEBPACK_IMPORTED_MODULE_1__["RightSide"], {
    className: "toolbar_right__side",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, right), children && children));
}

/***/ }),

/***/ "./components/UI/Toolbar/Toolbar.style.js":
/*!************************************************!*\
  !*** ./components/UI/Toolbar/Toolbar.style.js ***!
  \************************************************/
/*! exports provided: Container, LeftSide, RightSide, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSide", function() { return LeftSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSide", function() { return RightSide; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Toolbarstyle__Wrapper",
  componentId: "anmfwz-0"
})(["display:flex;align-items:center;min-height:70px;background:", ";"], props => props.bg ? props.bg : '#fff');
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Toolbarstyle__Container",
  componentId: "anmfwz-1"
})(["max-width:1920px;width:100%;margin-left:auto;margin-right:auto;display:flex;align-items:center;justify-content:space-between;"]);
const LeftSide = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Toolbarstyle__LeftSide",
  componentId: "anmfwz-2"
})([""]);
const RightSide = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Toolbarstyle__RightSide",
  componentId: "anmfwz-3"
})([""]);
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./components/UI/ViewWithPopup/ViewWithPopup.js":
/*!******************************************************!*\
  !*** ./components/UI/ViewWithPopup/ViewWithPopup.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewWithPopup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Portal_Portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Portal/Portal */ "./components/UI/Portal/Portal.js");
/* harmony import */ var _ViewWithPopup_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewWithPopup.style */ "./components/UI/ViewWithPopup/ViewWithPopup.style.js");
/* harmony import */ var _useOnClickOutside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useOnClickOutside */ "./components/UI/ViewWithPopup/useOnClickOutside.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\UI\\ViewWithPopup\\ViewWithPopup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ViewWithPopup({
  view,
  popup,
  noView = false,
  style,
  className
}) {
  const {
    0: showPopup,
    1: setShowPopup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(_useOnClickOutside__WEBPACK_IMPORTED_MODULE_3__["useOnClickOutside"])(ref, () => setShowPopup(false)); // Add all classs to an array

  const addAllClasses = ['view_with__popup']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(_ViewWithPopup_style__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    className: `${addAllClasses.join(' ')} ${showPopup ? 'active' : ''}`,
    ref: ref,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, view && noView && __jsx("div", {
    className: "popup_handler",
    onClick: () => setShowPopup(!showPopup),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, view), __jsx(_ViewWithPopup_style__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "popup_container",
    showPopup: showPopup,
    onClick: () => setShowPopup(true),
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, view && !noView && view, showPopup && __jsx("div", {
    id: "popup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(_Portal_Portal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    rendererId: "popup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, popup && popup))));
}

/***/ }),

/***/ "./components/UI/ViewWithPopup/ViewWithPopup.style.js":
/*!************************************************************!*\
  !*** ./components/UI/ViewWithPopup/ViewWithPopup.style.js ***!
  \************************************************************/
/*! exports provided: Container, Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ViewWithPopupstyle__Container",
  componentId: "sc-1m2a7on-0"
})(["border-radius:", "px;", " .ant-checkbox-group{display:flex;flex-direction:column;.ant-checkbox-group-item{margin:9px 0;&:first-child{margin-top:0;}&:last-child{margin-bottom:0;}}}.date_picker{margin-bottom:0;.DateRangePicker{.DateRangePickerInput{border-radius:3px;}}}"], props => props.radius ? props.radius : 3, props => props.showPopup && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["box-shadow:0 2px 20px rgba(0,0,0,0.16);position:absolute;width:100%;z-index:999;min-width:300px;padding:30px;background-color:#ffffff;"]));
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ViewWithPopupstyle__Wrapper",
  componentId: "sc-1m2a7on-1"
})(["position:relative;width:100%;"]);

/***/ }),

/***/ "./components/UI/ViewWithPopup/useOnClickOutside.js":
/*!**********************************************************!*\
  !*** ./components/UI/ViewWithPopup/useOnClickOutside.js ***!
  \**********************************************************/
/*! exports provided: useOnClickOutside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOnClickOutside", function() { return useOnClickOutside; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Hook

function useOnClickOutside(ref, handler) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]); // Empty array ensures that effect is only run on mount and unmount
}

/***/ }),

/***/ "./container/Listing/Listing.style.js":
/*!********************************************!*\
  !*** ./container/Listing/Listing.style.js ***!
  \********************************************/
/*! exports provided: ShowMapCheckbox, PostsWrapper, FixedMap, Label, FilterArea, FilterElementsWrapper, ButtonGroup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowMapCheckbox", function() { return ShowMapCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsWrapper", function() { return PostsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedMap", function() { return FixedMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterArea", function() { return FilterArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterElementsWrapper", function() { return FilterElementsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{opacity:0;}100%{opacity:1;}"]);
const ListingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__ListingWrapper",
  componentId: "sc-1c13aqm-0"
})(["position:relative;.ant-checkbox-group{.ant-checkbox-group-item{.ant-checkbox{.ant-checkbox-inner{border-color:", ";}&.ant-checkbox-checked{.ant-checkbox-inner{border-color:", ";background-color:", ";}&::after{display:none;}}}span{color:", ";font-size:15px;}&:hover{.ant-checkbox{.ant-checkbox-inner{border-color:", ";}}}}}.DateRangePicker{.DateRangePickerInput{.DateInput{.DateInput_input{&.DateInput_input__focused{border-bottom:0;}}.DateInput_fang{top:40px !important;}}}}.ant-slider{.ant-slider-rail{height:5px;border-radius:3px;background-color:", ";}.ant-slider-track{background-color:", ";}.ant-slider-step{.ant-slider-dot{width:5px;height:5px;top:0;border-color:", ";background-color:", ";&:first-child{margin-left:-1px;}&.ant-slider-dot-active{border-color:", ";}}}&:hover{.ant-slider-track{background-color:", ";}.ant-slider-handle:not(.ant-tooltip-open){border-color:", ";}}.ant-slider-handle{margin-top:-8px;width:20px;height:20px;border:6px solid ", ";box-shadow:0 2px 2px ", ";&:focus{box-shadow:none;}}.ant-slider-mark{margin-top:10px;.ant-slider-mark-text{font-size:15px;color:", ";}}}.toolbar{padding-left:30px;padding-right:30px;border-bottom:1px solid ", ";@media only screen and (min-width:1441px){min-height:78px;}}.loadmore_wrapper{margin-top:30px;> button{border:0;min-width:115px;height:40px;display:inline-flex;align-items:center;justify-content:center;padding:0 15px;font-size:15px;font-weight:700;border-radius:3px;color:", ";border-color:", ";background-color:", ";transition:all 0.3s ease;&:hover{outline:none;opacity:0.8;}&:focus{outline:none;}&::after{content:none;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.5', 'rgba(0, 0, 0, 0.25)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const ShowMapCheckbox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__ShowMapCheckbox",
  componentId: "sc-1c13aqm-1"
})([".ant-checkbox-wrapper{display:flex;align-items:center;flex-direction:row-reverse;}.ant-checkbox{top:0;+ span{font-size:14px;font-weight:700;color:", ";}}.ant-checkbox-inner{width:20px;height:20px;border-color:", ";}.ant-checkbox-wrapper{.ant-checkbox-checked{.ant-checkbox-inner{border-color:", ";background-color:", ";&::after{transform:rotate(45deg) scale(1) translate(-50%,-70%);}}}}.ant-checkbox-wrapper:hover .ant-checkbox-inner,.ant-checkbox:hover .ant-checkbox-inner,.ant-checkbox-input:focus + .ant-checkbox-inner{border-color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const PostsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__PostsWrapper",
  componentId: "sc-1c13aqm-2"
})(["max-width:1920px;padding:30px;&.col-24{width:100%;margin-left:auto;margin-right:auto;}&.col-12{width:60%;@media only screen and (min-width:1921px){width:calc(60% - 120px);margin-left:120px;margin-right:auto;}}"]);
const FixedMap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__FixedMap",
  componentId: "sc-1c13aqm-3"
})(["position:fixed;background-color:", ";right:0;width:40%;height:calc(100% - 152px);top:152px;z-index:9;@media only screen and (max-width:767px){width:100%;}> div{position:absolute;width:100%;height:100% !important;> div{height:100% !important;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.2', '#F7F7F7'));
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__Label",
  componentId: "sc-1c13aqm-4"
})(["color:", ";font-size:15px;margin-right:15px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const FilterArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__FilterArea",
  componentId: "sc-1c13aqm-5"
})(["overflow:hidden;button,button.ant-btn{color:", ";font-size:15px;height:38px;border-radius:3px;border:1px solid ", ";&::after{content:none;}&:hover{background-color:", ";}&.active{color:", ";border-color:", ";background-color:", ";}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const FilterElementsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__FilterElementsWrapper",
  componentId: "sc-1c13aqm-6"
})(["position:relative;height:100%;overflow:hidden;.accordion{overflow-y:auto;overflow-x:hidden;padding-right:35px;margin-right:-35px;height:calc(100% - 68px);.accordion__item{border-bottom:1px solid ", ";&:last-child{border-bottom:0;}.accordion__heading{.accordion__button{display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:29px 0;&:hover,&:focus{outline:0;}h4{font-size:15px;color:", ";text-transform:capitalize;}}}.accordion__panel{padding-bottom:29px;animation:0.25s ", " ease;&[hidden]{animation:0.25s ", " ease;}.date_picker{margin-bottom:0;.DateRangePicker{.DateRangePickerInput{border-color:", ";.DateInput__small{width:102px;.DateInput_input__small{padding:12px 10px 10px;font-weight:400;color:", ";}}}.DateRangePicker_picker{left:1px !important;}}}.ant-checkbox-group{display:flex;flex-direction:column;.ant-checkbox-group-item{margin-bottom:15px;.ant-checkbox{.ant-checkbox-inner{border-color:", ";}&.ant-checkbox-checked{.ant-checkbox-inner{border-color:", ";background-color:", ";}&::after{display:none;}}}span{color:", ";font-size:15px;}&:hover{.ant-checkbox{.ant-checkbox-inner{border-color:", ";}}}}}.ant-slider{margin-left:7px;max-width:320px;.ant-slider-rail{height:5px;border-radius:3px;background-color:", ";}.ant-slider-track{background-color:", ";}.ant-slider-step{.ant-slider-dot{width:5px;height:5px;top:0;border-color:", ";background-color:", ";&:first-child{margin-left:-1px;}&.ant-slider-dot-active{border-color:", ";}}}&:hover{.ant-slider-track{background-color:", ";}.ant-slider-handle:not(.ant-tooltip-open){border-color:", ";}}.ant-slider-handle{margin-top:-8px;width:20px;height:20px;border:6px solid ", ";box-shadow:0 2px 2px ", ";&:focus{box-shadow:none;}}.ant-slider-mark{margin-top:10px;.ant-slider-mark-text{font-size:15px;color:", ";}}}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2c2c2c'), fadeIn, fadeIn, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.5', 'rgba(0, 0, 0, 0.25)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const ButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__ButtonGroup",
  componentId: "sc-1c13aqm-7"
})(["position:absolute;bottom:0;right:0;width:100%;display:flex;justify-content:flex-end;align-items:center;button.ant-btn{color:", ";font-size:15px;height:38px;border-radius:3px;border:1px solid ", ";&.ant-btn-primary{color:", ";border-color:", ";background-color:", ";margin-left:10px;}&::after{display:none;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
/* harmony default export */ __webpack_exports__["default"] = (ListingWrapper);

/***/ }),

/***/ "./container/Listing/ListingMap.js":
/*!*****************************************!*\
  !*** ./container/Listing/ListingMap.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Map_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Map/Map */ "./components/Map/Map.js");
/* harmony import */ var components_Loader_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Loader/Loader */ "./components/Loader/Loader.js");
/* harmony import */ var _Listing_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Listing.style */ "./container/Listing/Listing.style.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\container\\Listing\\ListingMap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ListingMap = props => {
  const {
    mapData,
    loading
  } = props;
  return __jsx(_Listing_style__WEBPACK_IMPORTED_MODULE_4__["FixedMap"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(mapData) || loading ? __jsx(components_Loader_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }) : __jsx(components_Map_Map__WEBPACK_IMPORTED_MODULE_2__["default"], {
    location: mapData,
    multiple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ListingMap);

/***/ }),

/***/ "./container/Listing/Search/CategorySearch/CategorySearch.js":
/*!*******************************************************************!*\
  !*** ./container/Listing/Search/CategorySearch/CategorySearch.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/slider */ "antd/lib/slider");
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/checkbox */ "antd/lib/checkbox");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_UI_ViewWithPopup_ViewWithPopup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/UI/ViewWithPopup/ViewWithPopup */ "./components/UI/ViewWithPopup/ViewWithPopup.js");
/* harmony import */ var components_UI_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/UI/InputIncDec/InputIncDec */ "./components/UI/InputIncDec/InputIncDec.js");
/* harmony import */ var components_UI_DatePicker_ReactDates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/UI/DatePicker/ReactDates */ "./components/UI/DatePicker/ReactDates.js");
/* harmony import */ var context_SearchProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! context/SearchProvider */ "./context/SearchProvider.js");
/* harmony import */ var library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! library/helpers/url_handler */ "./library/helpers/url_handler.js");
/* harmony import */ var _SearchParams__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../SearchParams */ "./container/Listing/Search/SearchParams.js");
/* harmony import */ var _CategorySearch_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CategorySearch.style */ "./container/Listing/Search/CategorySearch/CategorySearch.style.js");



var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\container\\Listing\\Search\\CategorySearch\\CategorySearch.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const history = false ? undefined : false;
const location =  false && false;

function serchReducer(state, action) {
  switch (action.type) {
    case 'amenities':
      return _objectSpread(_objectSpread({}, state), {}, {
        amenities: action.payload
      });

    case 'property':
      return _objectSpread(_objectSpread({}, state), {}, {
        property: action.payload
      });

    case 'date_range':
      return _objectSpread(_objectSpread({}, state), {}, {
        setStartDate: action.payload.setStartDate,
        setEndDate: action.payload.setEndDate
      });

    case 'price':
      return _objectSpread(_objectSpread({}, state), {}, {
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice
      });

    case 'roomGuestReset':
      return _objectSpread(_objectSpread({}, state), {}, {
        room: action.payload.room,
        guest: action.payload.guest
      });

    case 'reset':
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      return state;
  }
}

const CategorySearchNext = props => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(context_SearchProvider__WEBPACK_IMPORTED_MODULE_9__["SearchContext"]);
  const initialState = {
    amenities: state.amenities || [],
    property: state.property || [],
    setStartDate: state.setStartDate || null,
    setEndDate: state.setEndDate || null,
    minPrice: parseInt(state.minPrice) || 0,
    maxPrice: parseInt(state.maxPrice) || 100,
    location_lat: state.location_lat || null,
    location_lng: state.location_lng || null,
    room: parseInt(state.room) || 0,
    guest: parseInt(state.guest) || 0
  }; // current component state with dispatching to reducer

  const {
    0: current,
    1: dispatchCurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(serchReducer, initialState); // Room guest state

  const {
    0: countRoom,
    1: setRoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(current.room);
  const {
    0: countGuest,
    1: setGuest
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(current.guest); // data handling

  const onChange = (value, type) => {
    let query = {};
    let modifiedCurrent = current;

    for (const key in modifiedCurrent) {
      if (modifiedCurrent.hasOwnProperty(key)) {
        switch (key) {
          case 'date_range':
            delete modifiedCurrent.date_range;
            break;

          case 'price':
            delete modifiedCurrent.price;
            break;
        }
      }
    }

    if (type === 'date_range') {
      query = _objectSpread(_objectSpread({}, current), {}, {
        setStartDate: value.setStartDate,
        setEndDate: value.setEndDate
      });
      dispatchCurrent({
        type: type,
        payload: value
      });
    } else if (type === 'price') {
      query = _objectSpread(_objectSpread({}, current), {}, {
        minPrice: value ? value[0] : 0,
        maxPrice: value ? value[1] : 100
      });
      dispatchCurrent({
        type: type,
        payload: query
      });
    } else if (type === 'reset') {
      setRoom(0);
      setGuest(0);
      query = _objectSpread(_objectSpread({}, current), {}, {
        setStartDate: null,
        setEndDate: null,
        room: 0,
        guest: 0,
        amenities: [],
        property: [],
        minPrice: 0,
        maxPrice: 100,
        location_lat: null,
        location_lng: null
      });
      dispatchCurrent({
        type: type,
        payload: query
      });
    } else {
      query = _objectSpread(_objectSpread({}, current), {}, {
        [type]: value
      });
      dispatchCurrent({
        type: type,
        payload: value
      });
    }

    const params = Object(library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_10__["setStateToUrl"])(query);
    dispatch({
      type: 'UPDATE',
      payload: _objectSpread(_objectSpread({}, current), query)
    });
    history.push(_objectSpread(_objectSpread({}, location), {}, {
      search: params
    }));
  };

  const handleRoomGuestApply = () => {
    const query = _objectSpread(_objectSpread({}, current), {}, {
      room: countRoom,
      guest: countGuest
    });

    const params = Object(library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_10__["setStateToUrl"])(query);
    history.push(_objectSpread(_objectSpread({}, location), {}, {
      search: params
    }));
  };

  const handleRoomGuestCancel = () => {
    setRoom(0);
    setGuest(0);

    const query = _objectSpread(_objectSpread({}, current), {}, {
      room: 0,
      guest: 0
    });

    dispatchCurrent({
      type: 'roomGuestReset',
      payload: query
    });
    const params = Object(library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_10__["setStateToUrl"])(query);
    history.push(_objectSpread(_objectSpread({}, location), {}, {
      search: params
    }));
  };

  const dateRangeActivateClass = current && current.setStartDate !== undefined && current.setEndDate !== undefined && current.setStartDate !== null && current.setEndDate !== null ? 'activated' : '';
  const priceRangeActivateClass = current && current.minPrice !== undefined && current.maxPrice !== undefined && current.minPrice === 0 && current.maxPrice === 100 ? '' : 'activated';
  let amenitiesLength = 0;
  let propertyLength = 0;
  let amenities = [];
  let property = [];

  if (current && current.amenities && typeof current.amenities === 'string') {
    amenities = current.amenities.split(',');
    amenitiesLength = amenities.length;
  } else if (current && current.amenities && current.amenities.length) {
    amenities = current.amenities;
    amenitiesLength = amenities.length;
  }

  if (current && current.property && typeof current.property === 'string') {
    property = current.property.split(',');
    propertyLength = property.length;
  } else if (current && current.property && current.property.length) {
    property = current.property;
    propertyLength = current.property.length;
  }

  return __jsx(_CategorySearch_style__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }, __jsx(components_UI_ViewWithPopup_ViewWithPopup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: amenitiesLength ? 'activated' : '',
    key: _SearchParams__WEBPACK_IMPORTED_MODULE_11__["getAmenities"].id,
    noView: true,
    view: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "default",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 11
      }
    }, _SearchParams__WEBPACK_IMPORTED_MODULE_11__["getAmenities"].name, amenitiesLength > 0 && `: ${amenitiesLength}`),
    popup: __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
      options: _SearchParams__WEBPACK_IMPORTED_MODULE_11__["getAmenities"].options,
      defaultValue: amenities,
      onChange: value => onChange(value, 'amenities'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 11
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }
  }), __jsx(components_UI_ViewWithPopup_ViewWithPopup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: propertyLength ? 'activated' : '',
    key: _SearchParams__WEBPACK_IMPORTED_MODULE_11__["getPropertyType"].id,
    noView: true,
    view: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "default",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 11
      }
    }, _SearchParams__WEBPACK_IMPORTED_MODULE_11__["getPropertyType"].name, propertyLength > 0 && `: ${propertyLength}`),
    popup: __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
      options: _SearchParams__WEBPACK_IMPORTED_MODULE_11__["getPropertyType"].options,
      defaultValue: property,
      onChange: value => onChange(value, 'property'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 11
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 7
    }
  }), __jsx(components_UI_ViewWithPopup_ViewWithPopup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: dateRangeActivateClass,
    key: 400,
    noView: true,
    view: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "default",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 15
      }
    }, "Choose Date"),
    popup: __jsx(components_UI_DatePicker_ReactDates__WEBPACK_IMPORTED_MODULE_8__["default"], {
      startDateId: "startDate-id-category",
      endDateId: "endDate-id-category",
      startDate: current.setStartDate ? moment__WEBPACK_IMPORTED_MODULE_4___default()(current.setStartDate) : null,
      endDate: current.setEndDate ? moment__WEBPACK_IMPORTED_MODULE_4___default()(current.setEndDate) : null,
      numberOfMonths: 1,
      small: true,
      item: _SearchParams__WEBPACK_IMPORTED_MODULE_11__["calenderItem"],
      updateSearchData: value => onChange(value, 'date_range'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 11
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 7
    }
  }), __jsx(components_UI_ViewWithPopup_ViewWithPopup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: priceRangeActivateClass,
    key: 300,
    noView: true,
    view: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "default",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 11
      }
    }, current.minPrice > 0 || current.maxPrice < 100 ? `Price Range: ${current.minPrice}, ${current.maxPrice}` : `Price per night`),
    popup: __jsx(antd_lib_slider__WEBPACK_IMPORTED_MODULE_0___default.a, {
      range: true,
      marks: _SearchParams__WEBPACK_IMPORTED_MODULE_11__["priceInit"],
      min: 0,
      max: 100,
      defaultValue: [current.minPrice, current.maxPrice],
      onAfterChange: value => onChange(value, 'price'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 11
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 7
    }
  }), __jsx(components_UI_ViewWithPopup_ViewWithPopup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: 200,
    noView: true,
    className: countRoom || countGuest ? 'activated' : '',
    view: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "default",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 11
      }
    }, "Room ", countRoom > 0 && `: ${countRoom}`, ", Guest", countGuest > 0 && `: ${countGuest}`),
    popup: __jsx(_CategorySearch_style__WEBPACK_IMPORTED_MODULE_12__["RoomGuestWrapper"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 11
      }
    }, __jsx(_CategorySearch_style__WEBPACK_IMPORTED_MODULE_12__["ItemWrapper"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 13
      }
    }, __jsx("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 15
      }
    }, "Room"), __jsx(components_UI_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "room",
      increment: () => setRoom(countRoom => countRoom + 1),
      decrement: () => setRoom(countRoom => countRoom > 0 && countRoom - 1),
      onChange: e => setRoom(e.target.value),
      value: countRoom,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 15
      }
    })), __jsx(_CategorySearch_style__WEBPACK_IMPORTED_MODULE_12__["ItemWrapper"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 13
      }
    }, __jsx("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 15
      }
    }, "Guest"), __jsx(components_UI_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "guest",
      increment: () => setGuest(countGuest => countGuest + 1),
      decrement: () => setGuest(countGuest => countGuest > 0 && countGuest - 1),
      onChange: e => setGuest(e.target.value),
      value: countGuest,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 15
      }
    })), __jsx(_CategorySearch_style__WEBPACK_IMPORTED_MODULE_12__["ActionWrapper"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 13
      }
    }, countRoom || countGuest ? __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "default",
      onClick: handleRoomGuestCancel,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 17
      }
    }, "Cancel") : '', __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "primary",
      onClick: handleRoomGuestApply,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 15
      }
    }, "Apply"))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 7
    }
  }), __jsx(components_UI_ViewWithPopup_ViewWithPopup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: 100,
    noView: true,
    view: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "default",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 15
      }
    }, "Reset"),
    popup: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onClick: () => onChange(initialState, 'reset'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 11
      }
    }, "Reset Search Page URL"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CategorySearchNext);

/***/ }),

/***/ "./container/Listing/Search/CategorySearch/CategorySearch.style.js":
/*!*************************************************************************!*\
  !*** ./container/Listing/Search/CategorySearch/CategorySearch.style.js ***!
  \*************************************************************************/
/*! exports provided: RoomGuestWrapper, ItemWrapper, ActionWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomGuestWrapper", function() { return RoomGuestWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemWrapper", function() { return ItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionWrapper", function() { return ActionWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const CategroySearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategorySearchstyle__CategroySearchWrapper",
  componentId: "sc-13yll7z-0"
})(["display:flex;align-items:center;.view_with__popup{margin-right:15px;&:last-child{margin-right:0;}.popup_handler{button,button.ant-btn{height:38px;font-size:15px;border-radius:3px;color:", ";border:1px solid ", ";&:hover{background-color:", ";}&::after{content:none;}}}&.active{.popup_handler{button,button.ant-btn{color:", ";border-color:", ";background-color:", ";}& + .popup_container{margin-top:15px;border:1px solid ", ";}}&::after{content:'';display:block;position:fixed;left:0;top:70px;background-color:rgba(255,255,255,0.9);width:100%;min-height:100vh;pointer-events:none;}}&.activated{.popup_handler{button,button.ant-btn{color:", ";border-color:", ";background-color:", ";&:hover{opacity:0.85;}}}}.popup_container{#popup{> div{> button,> .ant-btn{color:", ";font-size:15px;height:38px;border-radius:3px;border:1px solid ", ";&::after{content:none;}&:hover{color:", ";border-color:", ";}}}}}}.date_picker{.DateRangePicker{display:block;width:100%;.DateRangePickerInput{width:100%;border-color:", ";.DateInput__small{width:102px;.DateInput_input__small{padding:12px 10px 10px;font-weight:400;color:", ";}}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const RoomGuestWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategorySearchstyle__RoomGuestWrapper",
  componentId: "sc-13yll7z-1"
})(["width:100%;strong{font-size:15px;font-weight:400;color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategorySearchstyle__ItemWrapper",
  componentId: "sc-13yll7z-2"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;.quantity{height:30px;input{font-size:15px;}button.btn svg{width:18px;height:18px;}}"]);
const ActionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategorySearchstyle__ActionWrapper",
  componentId: "sc-13yll7z-3"
})(["overflow:hidden;margin-top:27px;.ant-btn{border:0;padding:0;height:auto;box-shadow:none;font-weight:600;border-radius:0;text-shadow:none;color:", ";border-bottom:1px solid transparent;&:hover{color:", ";border-bottom-color:", ";}&:focus{outline:none;}&.ant-btn-primary{float:right;border-color:transparent;background-color:transparent;color:", ";&:hover{color:", ";border-bottom-color:", ";}}&::after{display:none;}&:not([disabled]):hover{text-decoration:underline;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.2', '#777777'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.1', '#399C9F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.1', '#399C9F'));
/* harmony default export */ __webpack_exports__["default"] = (CategroySearchWrapper);

/***/ }),

/***/ "./container/Listing/Search/SearchParams.js":
/*!**************************************************!*\
  !*** ./container/Listing/Search/SearchParams.js ***!
  \**************************************************/
/*! exports provided: priceInit, calenderItem, getAmenities, getPropertyType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "priceInit", function() { return priceInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calenderItem", function() { return calenderItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAmenities", function() { return getAmenities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyType", function() { return getPropertyType; });
// default data for filter elements
const priceInit = {
  0: '$0',
  100: '$100'
};
const calenderItem = {
  separator: '-',
  format: 'MM-DD-YYYY',
  locale: 'en'
};
const getAmenities = {
  id: 1,
  name: 'Amenities',
  identifier: 'amenities',
  options: [{
    label: 'Free Wi-Fi',
    value: 'free-wifi'
  }, {
    label: 'Free Parking',
    value: 'free-parking'
  }, {
    label: 'Breakfast included',
    value: 'breakfast'
  }, {
    label: 'Pool',
    value: 'pool'
  }, {
    label: 'Air Conditioning',
    value: 'air-condition'
  }, {
    label: 'Hot Shower',
    value: 'hot-shower'
  }, {
    label: 'Cable TV',
    value: 'cable-tv'
  }]
};
const getPropertyType = {
  id: 2,
  name: 'Property Type',
  identifier: 'property-type',
  options: [{
    label: 'Villa',
    value: 'villa'
  }, {
    label: 'Hotel',
    value: 'hotel'
  }, {
    label: 'Resort',
    value: 'resort'
  }, {
    label: 'Cottage',
    value: 'cottage'
  }, {
    label: 'Duplex',
    value: 'duplex'
  }, {
    label: 'Landscape',
    value: 'landscape'
  }]
};

/***/ }),

/***/ "./context/SearchProvider.js":
/*!***********************************!*\
  !*** ./context/SearchProvider.js ***!
  \***********************************/
/*! exports provided: SearchContext, SearchProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchContext", function() { return SearchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProvider", function() { return SearchProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\context\\SearchProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const SearchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE':
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      return state;
  }
}

const SearchProvider = ({
  children,
  query
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, query);
  return __jsx(SearchContext.Provider, {
    value: {
      state,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./library/helpers/get_api_data.js":
/*!*****************************************!*\
  !*** ./library/helpers/get_api_data.js ***!
  \*****************************************/
/*! exports provided: ProcessAPIData, SearchedData, SearchStateKeyCheck, Paginator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessAPIData", function() { return ProcessAPIData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchedData", function() { return SearchedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchStateKeyCheck", function() { return SearchStateKeyCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return Paginator; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/shuffle */ "lodash/shuffle");
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_1__);



const FetchAPIData = url => {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(r => r.json()).then(data => {
    return data;
  });
};

const ProcessAPIData = apiData => {
  let fetchData = {};

  if (apiData) {
    apiData.forEach((item, key) => {
      fetchData.data = item.data ? [...item.data] : [];
      fetchData.name = item.name ? item.name : '';
    });
  }

  const data = fetchData ? fetchData.data : [];
  return data;
};
const SearchedData = processedData => {
  const randNumber = Math.floor(Math.random() * 50 + 1);
  const data = lodash_shuffle__WEBPACK_IMPORTED_MODULE_1___default()(processedData.slice(0, randNumber));
  return data;
};
const SearchStateKeyCheck = state => {
  for (var key in state) {
    if (state[key] !== null && state[key] != '' && state[key] != [] && state[key] != 0 && state[key] != 100) {
      return true;
    }
  }

  return false;
};
const Paginator = (posts, processedData, limit) => {
  return [...posts, ...processedData.slice(posts.length, posts.length + limit)];
};

const GetAPIData = async apiUrl => {
  const promises = apiUrl.map(async repo => {
    const apiPath = `${"http://localhost:3001"}/static/data`; // read it from env variable

    const api = `${apiPath}/${repo.endpoint}.json`;
    const response = await FetchAPIData(api);
    return {
      name: repo.name,
      data: response
    };
  });
  const receviedData = await Promise.all(promises);
  return receviedData;
};

/* harmony default export */ __webpack_exports__["default"] = (GetAPIData);

/***/ }),

/***/ "./library/helpers/get_device_type.js":
/*!********************************************!*\
  !*** ./library/helpers/get_device_type.js ***!
  \********************************************/
/*! exports provided: getDeviceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeviceType", function() { return getDeviceType; });
/* harmony import */ var mobile_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobile-detect */ "mobile-detect");
/* harmony import */ var mobile_detect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobile_detect__WEBPACK_IMPORTED_MODULE_0__);

function getDeviceType(req) {
  let userAgent;
  let deviceType;

  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }

  const md = new mobile_detect__WEBPACK_IMPORTED_MODULE_0___default.a(userAgent);

  if (md.tablet()) {
    deviceType = 'tablet';
  } else if (md.mobile()) {
    deviceType = 'mobile';
  } else {
    deviceType = 'desktop';
  }

  return deviceType;
}

/***/ }),

/***/ "./library/helpers/rtl.js":
/*!********************************!*\
  !*** ./library/helpers/rtl.js ***!
  \********************************/
/*! exports provided: default, direction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "direction", function() { return direction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\library\\helpers\\rtl.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


let direction = 'ltr';

if (false) {}

const withDirection = Component => props => {
  return __jsx(Component, _extends({}, props, {
    "data-rtl": direction,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (withDirection);


/***/ }),

/***/ "./library/helpers/url_handler.js":
/*!****************************************!*\
  !*** ./library/helpers/url_handler.js ***!
  \****************************************/
/*! exports provided: createUrl, setStateToUrl, setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUrl", function() { return createUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStateToUrl", function() { return setStateToUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION", function() { return setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION; });
function createUrl(urlData) {
  const keys = Object.keys(urlData);
  let search = '';
  keys.forEach(key => {
    if (urlData[key] && urlData[key] !== null && urlData[key] !== '' && urlData[key] !== ',' && urlData[key] !== undefined && urlData[key].length !== 0) {
      // search[key] = urlData[key];
      search += `${key}=${urlData[key]}&`;
    }
  }); // return search;

  return search.substring(0, search.length - 1);
}
function setStateToUrl(state) {
  let urlData = {};

  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      switch (key) {
        case 'setStartDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'setEndDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'minPrice':
          if (state[key] && state[key] > 0) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'maxPrice':
          if (state[key] && state[key] < 100) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'amenities':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'room':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'guest':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'property':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'location':
          if (state[key] && state[key].location_lat) {
            urlData[`${key}_lat`] = state[key].location_lat;
          }

          if (state[key] && state[key].location_lng) {
            urlData[`${key}_lng`] = state[key].location_lng;
          }

          break;

        case 'reset':
          urlData = state[key];
          break;

        default:
          urlData[key] = state[key];
          break;
      }
    }
  }

  return createUrl(urlData);
}
function setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION(state) {
  let urlData = {};

  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      switch (key) {
        case 'setStartDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'setEndDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'minPrice':
          if (state[key] && state[key] > 0) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'maxPrice':
          if (state[key] && state[key] < 100) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'amenities':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'room':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'guest':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'property':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'location':
          if (state[key] && state[key].location_lat) {
            urlData[`${key}_lat`] = state[key].location_lat;
          }

          if (state[key] && state[key].location_lng) {
            urlData[`${key}_lng`] = state[key].location_lng;
          }

          break;

        case 'reset':
          urlData = state[key];
          break;

        default:
          urlData[key] = state[key];
          break;
      }
    }
  }

  return createUrl(urlData);
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/listing.js":
/*!**************************!*\
  !*** ./pages/listing.js ***!
  \**************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListingPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/checkbox */ "antd/lib/checkbox");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_UI_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/Toolbar/Toolbar */ "./components/UI/Toolbar/Toolbar.js");
/* harmony import */ var container_Listing_Search_CategorySearch_CategorySearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! container/Listing/Search/CategorySearch/CategorySearch */ "./container/Listing/Search/CategorySearch/CategorySearch.js");
/* harmony import */ var components_SectionGrid_SectionGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/SectionGrid/SectionGrid */ "./components/SectionGrid/SectionGrid.js");
/* harmony import */ var components_UI_ContentLoader_ContentLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/UI/ContentLoader/ContentLoader */ "./components/UI/ContentLoader/ContentLoader.js");
/* harmony import */ var container_Listing_ListingMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! container/Listing/ListingMap */ "./container/Listing/ListingMap.js");
/* harmony import */ var context_SearchProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! context/SearchProvider */ "./context/SearchProvider.js");
/* harmony import */ var library_helpers_get_api_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! library/helpers/get_api_data */ "./library/helpers/get_api_data.js");
/* harmony import */ var library_helpers_get_device_type__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! library/helpers/get_device_type */ "./library/helpers/get_device_type.js");
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! settings/constant */ "./settings/constant.js");
/* harmony import */ var settings_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! settings/config */ "./settings/config.js");
/* harmony import */ var container_Listing_Listing_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! container/Listing/Listing.style */ "./container/Listing/Listing.style.js");

var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\pages\\listing.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















const FilterDrawer = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! container/Listing/Search/MobileSearchView */ "./container/Listing/Search/MobileSearchView.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! container/Listing/Search/MobileSearchView */ "./container/Listing/Search/MobileSearchView.js")],
    modules: ['container/Listing/Search/MobileSearchView']
  }
});
function ListingPage({
  processedData,
  deviceType
}) {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(context_SearchProvider__WEBPACK_IMPORTED_MODULE_10__["SearchContext"]);
  const statekey = Object(library_helpers_get_api_data__WEBPACK_IMPORTED_MODULE_11__["SearchStateKeyCheck"])(state);
  const {
    0: posts,
    1: setPosts
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(processedData.slice(0, settings_config__WEBPACK_IMPORTED_MODULE_14__["LISTING_PAGE_POST_LIMIT"]) || []);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: showMap,
    1: setShowMap
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (statekey === true) {
      const newData = Object(library_helpers_get_api_data__WEBPACK_IMPORTED_MODULE_11__["SearchedData"])(processedData);
      setPosts(newData);
    } else {
      setPosts(processedData.slice(0, settings_config__WEBPACK_IMPORTED_MODULE_14__["LISTING_PAGE_POST_LIMIT"]) || []);
    }
  }, [statekey]);

  const handleMapToggle = () => {
    setShowMap(showMap => !showMap);
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const data = Object(library_helpers_get_api_data__WEBPACK_IMPORTED_MODULE_11__["Paginator"])(posts, processedData, settings_config__WEBPACK_IMPORTED_MODULE_14__["LISTING_PAGE_POST_LIMIT"]);
      setPosts(data);
      setLoading(false);
    }, 1000);
  };

  let columnWidth = settings_config__WEBPACK_IMPORTED_MODULE_14__["LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP"];

  if (showMap) {
    columnWidth = settings_config__WEBPACK_IMPORTED_MODULE_14__["LISTING_PAGE_COLUMN_WIDTH_WITH_MAP"];
  }

  let columnCount = 'col-24';

  if (deviceType === 'desktop' && showMap === true) {
    columnCount = 'col-12';
  }

  return __jsx(container_Listing_Listing_style__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, "Listing | A react next listing template")), __jsx(react_stickynode__WEBPACK_IMPORTED_MODULE_4___default.a, {
    top: 82,
    innerZ: 999,
    activeClass: "isHeaderSticky",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx(components_UI_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    left: deviceType === 'desktop' ? __jsx(container_Listing_Search_CategorySearch_CategorySearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 40
      }
    }) : __jsx(FilterDrawer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 61
      }
    }),
    right: __jsx(container_Listing_Listing_style__WEBPACK_IMPORTED_MODULE_15__["ShowMapCheckbox"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0___default.a, {
      defaultChecked: false,
      onChange: handleMapToggle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 15
      }
    }, "Show map")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  })), __jsx(container_Listing_Listing_style__WEBPACK_IMPORTED_MODULE_15__["PostsWrapper"], {
    className: columnCount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx(components_SectionGrid_SectionGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    link: settings_constant__WEBPACK_IMPORTED_MODULE_13__["SINGLE_POST_PAGE"],
    columnWidth: columnWidth,
    deviceType: deviceType,
    data: posts,
    totalItem: processedData.length,
    limit: settings_config__WEBPACK_IMPORTED_MODULE_14__["LISTING_PAGE_POST_LIMIT"],
    loading: loading,
    handleLoadMore: handleLoadMore,
    placeholder: __jsx(components_UI_ContentLoader_ContentLoader__WEBPACK_IMPORTED_MODULE_8__["PostPlaceholder"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 24
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  })), showMap && __jsx(container_Listing_ListingMap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    loading: loading,
    mapData: posts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  }));
}
async function getServerSideProps(context) {
  const {
    req
  } = context;
  const apiUrl = [{
    endpoint: 'hotel',
    name: 'listingHotel'
  }];
  const pageData = await Object(library_helpers_get_api_data__WEBPACK_IMPORTED_MODULE_11__["default"])(apiUrl);
  const processedData = Object(library_helpers_get_api_data__WEBPACK_IMPORTED_MODULE_11__["ProcessAPIData"])(pageData);
  const deviceType = Object(library_helpers_get_device_type__WEBPACK_IMPORTED_MODULE_12__["getDeviceType"])(req);
  return {
    props: {
      processedData,
      deviceType
    }
  };
}

/***/ }),

/***/ "./settings/config.js":
/*!****************************!*\
  !*** ./settings/config.js ***!
  \****************************/
/*! exports provided: HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE, HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE, HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE, HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH, LISTING_PAGE_POST_LIMIT, LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP, LISTING_PAGE_COLUMN_WIDTH_WITH_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE", function() { return HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE", function() { return HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE", function() { return HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH", function() { return HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LISTING_PAGE_POST_LIMIT", function() { return LISTING_PAGE_POST_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP", function() { return LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LISTING_PAGE_COLUMN_WIDTH_WITH_MAP", function() { return LISTING_PAGE_COLUMN_WIDTH_WITH_MAP; });
const HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE = 4;
const HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE = 4;
const HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE = 5;
const HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH = [1 / 1, 1 / 2, 1 / 3, 1 / 4, 1 / 5];
const LISTING_PAGE_POST_LIMIT = 10;
const LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP = [1 / 1, 1 / 2, 1 / 3, 1 / 4, 1 / 5];
const LISTING_PAGE_COLUMN_WIDTH_WITH_MAP = [1 / 1, 1 / 2, 1 / 2, 1 / 2, 1 / 3];

/***/ }),

/***/ "./settings/constant.js":
/*!******************************!*\
  !*** ./settings/constant.js ***!
  \******************************/
/*! exports provided: HOME_PAGE, AGENTS_PAGE, LISTING_POSTS_PAGE, SINGLE_POST_PAGE, AGENT_PROFILE_PAGE, AGENT_ACCOUNT_SETTINGS_PAGE, AGENT_PROFILE_EDIT_PAGE, AGENT_IMAGE_EDIT_PAGE, AGENT_PASSWORD_CHANGE_PAGE, AGENT_PROFILE_DELETE, AGENT_PROFILE_FAVOURITE, AGENT_PROFILE_CONTACT, ADD_HOTEL_PAGE, PRICING_PLAN_PAGE, PRIVACY_PAGE, LOGIN_PAGE, REGISTRATION_PAGE, CHANGE_PASSWORD_PAGE, FORGET_PASSWORD_PAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE", function() { return HOME_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENTS_PAGE", function() { return AGENTS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LISTING_POSTS_PAGE", function() { return LISTING_POSTS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_POST_PAGE", function() { return SINGLE_POST_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_PROFILE_PAGE", function() { return AGENT_PROFILE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_ACCOUNT_SETTINGS_PAGE", function() { return AGENT_ACCOUNT_SETTINGS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_PROFILE_EDIT_PAGE", function() { return AGENT_PROFILE_EDIT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_IMAGE_EDIT_PAGE", function() { return AGENT_IMAGE_EDIT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_PASSWORD_CHANGE_PAGE", function() { return AGENT_PASSWORD_CHANGE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_PROFILE_DELETE", function() { return AGENT_PROFILE_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_PROFILE_FAVOURITE", function() { return AGENT_PROFILE_FAVOURITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_PROFILE_CONTACT", function() { return AGENT_PROFILE_CONTACT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_HOTEL_PAGE", function() { return ADD_HOTEL_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRICING_PLAN_PAGE", function() { return PRICING_PLAN_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIVACY_PAGE", function() { return PRIVACY_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_PAGE", function() { return LOGIN_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRATION_PAGE", function() { return REGISTRATION_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PASSWORD_PAGE", function() { return CHANGE_PASSWORD_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORGET_PASSWORD_PAGE", function() { return FORGET_PASSWORD_PAGE; });
// General Page Section
const HOME_PAGE = '/';
const AGENTS_PAGE = '/agents'; // Listing Single Page Section

const LISTING_POSTS_PAGE = '/listing';
const SINGLE_POST_PAGE = '/post'; // Agent Profile Page Section

const AGENT_PROFILE_PAGE = '/profile';
const AGENT_ACCOUNT_SETTINGS_PAGE = '/account-settings';
const AGENT_PROFILE_EDIT_PAGE = '/edit';
const AGENT_IMAGE_EDIT_PAGE = '/change-image';
const AGENT_PASSWORD_CHANGE_PAGE = '/change-password';
const AGENT_PROFILE_DELETE = '/delete';
const AGENT_PROFILE_FAVOURITE = '/favourite-post';
const AGENT_PROFILE_CONTACT = '/contact';
const ADD_HOTEL_PAGE = '/add-hotel'; // Other Pages

const PRICING_PLAN_PAGE = '/pricing-plan';
const PRIVACY_PAGE = '/privacy'; // Login / Registation Page

const LOGIN_PAGE = '/sign-in';
const REGISTRATION_PAGE = '/sign-up';
const CHANGE_PASSWORD_PAGE = '/change-password';
const FORGET_PASSWORD_PAGE = '/forget-password';

/***/ }),

/***/ "@ant-design/icons/lib/icons/MinusOutlined":
/*!************************************************************!*\
  !*** external "@ant-design/icons/lib/icons/MinusOutlined" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/MinusOutlined");

/***/ }),

/***/ "@ant-design/icons/lib/icons/PlusOutlined":
/*!***********************************************************!*\
  !*** external "@ant-design/icons/lib/icons/PlusOutlined" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/PlusOutlined");

/***/ }),

/***/ "@styled-system/theme-get":
/*!*******************************************!*\
  !*** external "@styled-system/theme-get" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/checkbox":
/*!************************************!*\
  !*** external "antd/lib/checkbox" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox");

/***/ }),

/***/ "antd/lib/drawer":
/*!**********************************!*\
  !*** external "antd/lib/drawer" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/drawer");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/slider":
/*!**********************************!*\
  !*** external "antd/lib/slider" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/slider");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash/isEmpty":
/*!*********************************!*\
  !*** external "lodash/isEmpty" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ "lodash/shuffle":
/*!*********************************!*\
  !*** external "lodash/shuffle" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/shuffle");

/***/ }),

/***/ "mobile-detect":
/*!********************************!*\
  !*** external "mobile-detect" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobile-detect");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-accessible-accordion":
/*!*********************************************!*\
  !*** external "react-accessible-accordion" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-accessible-accordion");

/***/ }),

/***/ "react-content-loader":
/*!***************************************!*\
  !*** external "react-content-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "react-dates":
/*!******************************!*\
  !*** external "react-dates" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dates");

/***/ }),

/***/ "react-dates/initialize":
/*!*****************************************!*\
  !*** external "react-dates/initialize" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dates/initialize");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-google-maps":
/*!************************************!*\
  !*** external "react-google-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "react-google-maps/lib/components/addons/MarkerClusterer":
/*!**************************************************************************!*\
  !*** external "react-google-maps/lib/components/addons/MarkerClusterer" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps/lib/components/addons/MarkerClusterer");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZENhcmQvR3JpZENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HcmlkQ2FyZC9HcmlkQ2FyZC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2FkZXIvTG9hZGVyLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFwL0xpc3RpbmdQYWdlTWFwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFwL01hcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcC9NYXBJbmZvV2luZG93LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFwL01hcFdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXAvU2luZ2xlUGFnZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcC9ob3RlbE1hcE1hcmtlci5wbmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC9Qcm9kdWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3Rpb25HcmlkL1NlY3Rpb25HcmlkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0JveC9Cb3guanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Db250ZW50TG9hZGVyL0NvbnRlbnRMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9EYXRlUGlja2VyL1JlYWN0RGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9EYXRlUGlja2VyL1JlYWN0RGF0ZXMuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9GYXZvcml0ZS9GYXZvcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0Zhdm9yaXRlL0Zhdm9yaXRlLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvRmF2b3JpdGUvdXNlVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvSW5wdXRJbmNEZWMvSW5wdXRJbmNEZWMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9JbnB1dEluY0RlYy9JbnB1dEluY0RlYy5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL1BvcnRhbC9Qb3J0YWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9SYXRpbmcvUmF0aW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvVGV4dC9UZXh0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvVG9vbGJhci9Ub29sYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvVG9vbGJhci9Ub29sYmFyLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvVmlld1dpdGhQb3B1cC9WaWV3V2l0aFBvcHVwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvVmlld1dpdGhQb3B1cC9WaWV3V2l0aFBvcHVwLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvVmlld1dpdGhQb3B1cC91c2VPbkNsaWNrT3V0c2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXIvTGlzdGluZy9MaXN0aW5nLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9MaXN0aW5nL0xpc3RpbmdNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVyL0xpc3RpbmcvU2VhcmNoL0NhdGVnb3J5U2VhcmNoL0NhdGVnb3J5U2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9MaXN0aW5nL1NlYXJjaC9DYXRlZ29yeVNlYXJjaC9DYXRlZ29yeVNlYXJjaC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXIvTGlzdGluZy9TZWFyY2gvU2VhcmNoUGFyYW1zLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvU2VhcmNoUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGlicmFyeS9oZWxwZXJzL2dldF9hcGlfZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9saWJyYXJ5L2hlbHBlcnMvZ2V0X2RldmljZV90eXBlLmpzIiwid2VicGFjazovLy8uL2xpYnJhcnkvaGVscGVycy9ydGwuanMiLCJ3ZWJwYWNrOi8vLy4vbGlicmFyeS9oZWxwZXJzL3VybF9oYW5kbGVyLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2xpc3RpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc2V0dGluZ3MvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NldHRpbmdzL2NvbnN0YW50LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucy9NaW51c091dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL1BsdXNPdXRsaW5lZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzdHlsZWQtc3lzdGVtL3RoZW1lLWdldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2NoZWNrYm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvZHJhd2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvaW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9zbGlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoaXN0b3J5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2lzRW1wdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvc2h1ZmZsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYmlsZS1kZXRlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNvbnRlbnQtbG9hZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZGF0ZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kYXRlcy9pbml0aWFsaXplXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZ29vZ2xlLW1hcHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1nb29nbGUtbWFwcy9saWIvY29tcG9uZW50cy9hZGRvbnMvTWFya2VyQ2x1c3RlcmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9pb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdGlja3lub2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtc3lzdGVtXCIiXSwibmFtZXMiOlsiR3JpZENhcmQiLCJjbGFzc05hbWUiLCJmYXZvcml0ZSIsImxvY2F0aW9uIiwidGl0bGUiLCJwcmljZSIsInJhdGluZyIsImVkaXRCdG4iLCJ2aWV3RGV0YWlsc0J0biIsImNoaWxkcmVuIiwiY2xhc3NlcyIsInRyaW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJlbGVtZW50IiwiR3JpZENhcmRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwidGhlbWVHZXQiLCJJbWFnZVdyYXBwZXIiLCJGYXZvcml0ZUljb24iLCJDb250ZW50V3JhcHBlciIsIkxvY2F0aW9uQXJlYSIsIlRpdGxlQXJlYSIsIlByaWNlQXJlYSIsIlJhdGluZ0FyZWEiLCJNZXRhV3JhcHBlciIsIkJ1dHRvbkdyb3VwIiwiTG9hZGVyIiwiZmlsbCIsImFkZEFsbENsYXNzZXMiLCJwdXNoIiwiam9pbiIsImRlZmF1bHRQcm9wcyIsIkxvYWRlcldyYXBwZXIiLCJIb3RlbE1hcE1hcmtlckNsdXN0ZXIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ1c2VTdGF0ZSIsIm1hcmtlckluZGV4Iiwic2V0TWFya2VySW5kZXgiLCJob3RlbERhdGEiLCJpbmZvV2luZG93VG9nZ2xlIiwiaW5kZXgiLCJmb3JFYWNoIiwiaXRlbSIsImlkIiwibGF0IiwicGFyc2VGbG9hdCIsImxuZyIsInRodW1iVXJsIiwiaW1hZ2UiLCJ0aHVtYl91cmwiLCJmb3JtYXR0ZWRBZGRyZXNzIiwicmF0aW5nQ291bnQiLCJtYXAiLCJzaW5nbGVQb3N0TG9hY3Rpb24iLCJNYWtlckltYWdlIiwiTWFwIiwicHJvcHMiLCJtdWx0aXBsZSIsImhhbmRsZUNsdXN0ZXJlckNsaWNrIiwiZGF0YSIsIm1hcmtlckNsdXN0ZXJlciIsImdldE1hcmtlcnMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiaGVpZ2h0IiwiTWFwSW5mb1dpbmRvdyIsIm9uQ2xvc2VDbGljayIsIndpdGhTY3JpcHRqcyIsIndpdGhHb29nbGVNYXAiLCJNYXBXcmFwcGVyIiwicHJvY2VzcyIsIlNpbmdsZU1hcERpc3BsYXkiLCJIb3RlbE1hcE1hcmtlclNpbmdsZSIsInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwicGFyaXRpYWxWaXNpYmlsaXR5R3V0dGVyIiwibW9iaWxlIiwidGFibGV0IiwiUHJvZHVjdENhcmQiLCJnYWxsZXJ5Iiwic2x1ZyIsImxpbmsiLCJkZXZpY2VUeXBlIiwiZXZlbnQiLCJ1cmwiLCJ3aWR0aCIsIm9iamVjdEZpdCIsInBvc2l0aW9uIiwiTG9hZE1vcmUiLCJoYW5kbGVMb2FkTW9yZSIsInNob3dCdXR0b24iLCJidXR0b25UZXh0IiwibG9hZGluZyIsImxvYWRNb3JlQ29tcG9uZW50IiwibG9hZE1vcmVTdHlsZSIsIlNlY3Rpb25HcmlkIiwidG90YWxJdGVtIiwibGltaXQiLCJjb2x1bW5XaWR0aCIsInBhZ2luYXRpb25Db21wb25lbnQiLCJwbGFjZWhvbGRlciIsInJvd1N0eWxlIiwiY29sdW1uU3R5bGUiLCJuIiwiTnVtYmVyIiwibGltaXRzIiwiQXJyYXkiLCJpIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwiZnVuYyIsImJvb2wiLCJvYmplY3QiLCJmbGV4Qm94IiwiZmxleFdyYXAiLCJtciIsIm1sIiwicHIiLCJwbCIsImp1c3RpZnlDb250ZW50IiwibXQiLCJ0aGVtZWQiLCJrZXkiLCJ0aGVtZSIsImJhc2UiLCJjb21wb3NlIiwiYm94U2l6aW5nIiwic3BhY2UiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsImZsZXgiLCJvcmRlciIsImFsaWduU2VsZiIsImJvcmRlcnMiLCJib3JkZXJDb2xvciIsImRpc3BsYXkiLCJCb3hXcmFwcGVyIiwiY3NzIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJCb3giLCJhbnkiLCJhcyIsIm9uZU9mIiwiYXJyYXlPZiIsImJvcmRlciIsImJvcmRlclRvcCIsImJvcmRlclJpZ2h0IiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyTGVmdCIsIlNpbmdsZVBhZ2VMb2FkZXIiLCJQb3N0UGxhY2Vob2xkZXIiLCJQcm9maWxlUGljTG9hZGVyIiwiSW1hZ2VDYXJkTG9hZGVyIiwiRGF0ZVJhbmdlUGlja2VyQm94IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiZGF0ZUZvcm1hdCIsInN0YXRlIiwic2V0U3RhdGUiLCJ1cGRhdGVTZWFyY2hEYXRhIiwic2V0U3RhcnREYXRlIiwiZm9ybWF0Iiwic2V0RW5kRGF0ZSIsImZvY3VzZWRJbnB1dCIsInNlcGFyYXRvciIsIm9uRGF0ZUNoYW5nZUZ1bmMiLCJiaW5kIiwib25Gb2N1c0NoYW5nZUZ1bmMiLCJyZW5kZXIiLCJzdGFydERhdGVJZCIsImVuZERhdGVJZCIsInN0YXJ0RGF0ZVBsYWNlaG9sZGVyVGV4dCIsImVuZERhdGVQbGFjZWhvbGRlclRleHQiLCJkaXNhYmxlZCIsInNob3dDbGVhckRhdGVzIiwiaXNSVEwiLCJvcmllbnRhdGlvbiIsImFuY2hvckRpcmVjdGlvbiIsIndpdGhQb3J0YWwiLCJ3aXRoRnVsbFNjcmVlblBvcnRhbCIsInNtYWxsIiwiYmxvY2siLCJudW1iZXJPZk1vbnRocyIsInJlZ3VsYXIiLCJub0JvcmRlciIsImRlZmF1bHRDYWxlbmRlclByb3BzIiwib25Gb2N1c0NoYW5nZSIsIm9uRGF0ZXNDaGFuZ2UiLCJSZWFjdERhdGVzU3R5bGVXcmFwcGVyIiwiUmVhY3REYXRlV3JhcHBlciIsIkNvbXBvbmVudE5hbWUiLCJSZWFjdERhdGVzV3JhcHBlciIsIldpdGhEaXJlY3Rpb24iLCJGYXZvcml0ZSIsImNvbnRlbnQiLCJvbkNsaWNrIiwidG9nZ2xlVmFsdWUiLCJ0b2dnbGVIYW5kbGVyIiwidXNlVG9nZ2xlIiwiYWRkQWxsQ2xhc3MiLCJoYW5kZWxDbGljayIsImFkZEFuaW1hdGlvbiIsImtleWZyYW1lcyIsInJlbW92ZUFuaW1hdGlvbiIsIkFkZEFuaW1hdGlvbiIsIlJlbW92ZUFuaW1hdGlvbiIsIkZhdm9yaXRlV3JhcHBlciIsImJ1dHRvbiIsImluaXRpYWxWYWx1ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ0b2dnbGVyIiwidXNlQ2FsbGJhY2siLCJJbnB1dEluY0RlYyIsImluY3JlbWVudCIsImRlY3JlbWVudCIsIklucHV0SW5jRGVjV3JhcHBlciIsIlBvcnRhbCIsInJlbmRlcmVySWQiLCJjb250YWluZXJFbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInVzZUVmZmVjdCIsInBvcnRhbFJvb3QiLCJnZXRFbGVtZW50QnlJZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJSYXRpbmciLCJ0eXBlIiwicmF0aW5nRmllbGROYW1lIiwiZmxvb3JWYWx1ZSIsInJhdGluZ1ZpZXciLCJNYXRoIiwiZmxvb3IiLCJsaXN0aW5nQ29uZGl0aW9uIiwic2hvd1JhdGluZ0NvdW50IiwiVGV4dFdyYXBwZXIiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiVGV4dCIsIm0iLCJUb29sYmFyIiwibGVmdCIsInJpZ2h0IiwiV3JhcHBlciIsImJnIiwiQ29udGFpbmVyIiwiTGVmdFNpZGUiLCJSaWdodFNpZGUiLCJWaWV3V2l0aFBvcHVwIiwidmlldyIsInBvcHVwIiwibm9WaWV3Iiwic3R5bGUiLCJzaG93UG9wdXAiLCJzZXRTaG93UG9wdXAiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VPbkNsaWNrT3V0c2lkZSIsInJhZGl1cyIsImhhbmRsZXIiLCJsaXN0ZW5lciIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmFkZUluIiwiTGlzdGluZ1dyYXBwZXIiLCJTaG93TWFwQ2hlY2tib3giLCJQb3N0c1dyYXBwZXIiLCJGaXhlZE1hcCIsIkxhYmVsIiwiRmlsdGVyQXJlYSIsIkZpbHRlckVsZW1lbnRzV3JhcHBlciIsIkxpc3RpbmdNYXAiLCJtYXBEYXRhIiwiaXNFbXB0eSIsImhpc3RvcnkiLCJjcmVhdGVCcm93c2VySGlzdG9yeSIsIndpbmRvdyIsInNlcmNoUmVkdWNlciIsImFjdGlvbiIsImFtZW5pdGllcyIsInBheWxvYWQiLCJwcm9wZXJ0eSIsIm1pblByaWNlIiwibWF4UHJpY2UiLCJyb29tIiwiZ3Vlc3QiLCJDYXRlZ29yeVNlYXJjaE5leHQiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJTZWFyY2hDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwicGFyc2VJbnQiLCJsb2NhdGlvbl9sYXQiLCJsb2NhdGlvbl9sbmciLCJkaXNwYXRjaEN1cnJlbnQiLCJ1c2VSZWR1Y2VyIiwiY291bnRSb29tIiwic2V0Um9vbSIsImNvdW50R3Vlc3QiLCJzZXRHdWVzdCIsIm9uQ2hhbmdlIiwicXVlcnkiLCJtb2RpZmllZEN1cnJlbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImRhdGVfcmFuZ2UiLCJwYXJhbXMiLCJzZXRTdGF0ZVRvVXJsIiwic2VhcmNoIiwiaGFuZGxlUm9vbUd1ZXN0QXBwbHkiLCJoYW5kbGVSb29tR3Vlc3RDYW5jZWwiLCJkYXRlUmFuZ2VBY3RpdmF0ZUNsYXNzIiwidW5kZWZpbmVkIiwicHJpY2VSYW5nZUFjdGl2YXRlQ2xhc3MiLCJhbWVuaXRpZXNMZW5ndGgiLCJwcm9wZXJ0eUxlbmd0aCIsInNwbGl0IiwiZ2V0QW1lbml0aWVzIiwibmFtZSIsIm9wdGlvbnMiLCJnZXRQcm9wZXJ0eVR5cGUiLCJtb21lbnQiLCJjYWxlbmRlckl0ZW0iLCJwcmljZUluaXQiLCJlIiwiQ2F0ZWdyb3lTZWFyY2hXcmFwcGVyIiwiUm9vbUd1ZXN0V3JhcHBlciIsIkl0ZW1XcmFwcGVyIiwiQWN0aW9uV3JhcHBlciIsImxvY2FsZSIsImlkZW50aWZpZXIiLCJsYWJlbCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInJlZHVjZXIiLCJTZWFyY2hQcm92aWRlciIsIkZldGNoQVBJRGF0YSIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwiUHJvY2Vzc0FQSURhdGEiLCJhcGlEYXRhIiwiZmV0Y2hEYXRhIiwiU2VhcmNoZWREYXRhIiwicHJvY2Vzc2VkRGF0YSIsInJhbmROdW1iZXIiLCJyYW5kb20iLCJzaHVmZmxlIiwic2xpY2UiLCJTZWFyY2hTdGF0ZUtleUNoZWNrIiwiUGFnaW5hdG9yIiwicG9zdHMiLCJHZXRBUElEYXRhIiwiYXBpVXJsIiwicHJvbWlzZXMiLCJyZXBvIiwiYXBpUGF0aCIsImFwaSIsImVuZHBvaW50IiwicmVzcG9uc2UiLCJyZWNldmllZERhdGEiLCJQcm9taXNlIiwiYWxsIiwiZ2V0RGV2aWNlVHlwZSIsInJlcSIsInVzZXJBZ2VudCIsImhlYWRlcnMiLCJuYXZpZ2F0b3IiLCJtZCIsIk1vYmlsZURldGVjdCIsImRpcmVjdGlvbiIsIndpdGhEaXJlY3Rpb24iLCJjcmVhdGVVcmwiLCJ1cmxEYXRhIiwia2V5cyIsIk9iamVjdCIsInN1YnN0cmluZyIsInNldFN0YXRlVG9VcmxfT05fTkVYVF9KU19ST1VURVJfUFVTSF9WRVJTSU9OIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwiZWwiLCJzZXRDaGlsZEVsbSIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm9uIiwib2ZmIiwiZW1pdCIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkZpbHRlckRyYXdlciIsImR5bmFtaWMiLCJMaXN0aW5nUGFnZSIsInN0YXRla2V5Iiwic2V0UG9zdHMiLCJMSVNUSU5HX1BBR0VfUE9TVF9MSU1JVCIsInNldExvYWRpbmciLCJzaG93TWFwIiwic2V0U2hvd01hcCIsIm5ld0RhdGEiLCJoYW5kbGVNYXBUb2dnbGUiLCJzZXRUaW1lb3V0IiwiTElTVElOR19QQUdFX0NPTFVNTl9XSURUSF9XSVRIT1VUX01BUCIsIkxJU1RJTkdfUEFHRV9DT0xVTU5fV0lEVEhfV0lUSF9NQVAiLCJjb2x1bW5Db3VudCIsIlNJTkdMRV9QT1NUX1BBR0UiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicGFnZURhdGEiLCJIT01FX1BBR0VfU0VDVElPTlNfSVRFTV9MSU1JVF9GT1JfTU9CSUxFX0RFVklDRSIsIkhPTUVfUEFHRV9TRUNUSU9OU19JVEVNX0xJTUlUX0ZPUl9UQUJMRVRfREVWSUNFIiwiSE9NRV9QQUdFX1NFQ1RJT05TX0lURU1fTElNSVRfRk9SX0RFU0tUT1BfREVWSUNFIiwiSE9NRV9QQUdFX1NFQ1RJT05TX0NPTFVNTlNfUkVTUE9OU0lWRV9XSURUSCIsIkhPTUVfUEFHRSIsIkFHRU5UU19QQUdFIiwiTElTVElOR19QT1NUU19QQUdFIiwiQUdFTlRfUFJPRklMRV9QQUdFIiwiQUdFTlRfQUNDT1VOVF9TRVRUSU5HU19QQUdFIiwiQUdFTlRfUFJPRklMRV9FRElUX1BBR0UiLCJBR0VOVF9JTUFHRV9FRElUX1BBR0UiLCJBR0VOVF9QQVNTV09SRF9DSEFOR0VfUEFHRSIsIkFHRU5UX1BST0ZJTEVfREVMRVRFIiwiQUdFTlRfUFJPRklMRV9GQVZPVVJJVEUiLCJBR0VOVF9QUk9GSUxFX0NPTlRBQ1QiLCJBRERfSE9URUxfUEFHRSIsIlBSSUNJTkdfUExBTl9QQUdFIiwiUFJJVkFDWV9QQUdFIiwiTE9HSU5fUEFHRSIsIlJFR0lTVFJBVElPTl9QQUdFIiwiQ0hBTkdFX1BBU1NXT1JEX1BBR0UiLCJGT1JHRVRfUEFTU1dPUkRfUEFHRSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0E7UUFDQSxtQ0FBbUM7UUFDbkM7UUFDQTtRQUNBO1FBQ0E7UUFDQSxrQkFBa0IscUJBQXFCO1FBQ3ZDO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLGNBQWM7UUFDZCxJQUFJO1FBQ0o7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3pIQSx3RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7O0FBWUEsTUFB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LDRDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG9GOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InBhZ2VzL2xpc3RpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9saXN0aW5nXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2xpc3RpbmcuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBHcmlkQ2FyZFdyYXBwZXIsIHtcclxuICBJbWFnZVdyYXBwZXIsXHJcbiAgRmF2b3JpdGVJY29uLFxyXG4gIENvbnRlbnRXcmFwcGVyLFxyXG4gIExvY2F0aW9uQXJlYSxcclxuICBUaXRsZUFyZWEsXHJcbiAgUHJpY2VBcmVhLFxyXG4gIFJhdGluZ0FyZWEsXHJcbiAgTWV0YVdyYXBwZXIsXHJcbiAgQnV0dG9uR3JvdXAsXHJcbn0gZnJvbSAnLi9HcmlkQ2FyZC5zdHlsZSc7XHJcblxyXG5jb25zdCBHcmlkQ2FyZCA9ICh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIGZhdm9yaXRlLFxyXG4gIGxvY2F0aW9uLFxyXG4gIHRpdGxlLFxyXG4gIHByaWNlLFxyXG4gIHJhdGluZyxcclxuICBlZGl0QnRuLFxyXG4gIHZpZXdEZXRhaWxzQnRuLFxyXG4gIGNoaWxkcmVuLFxyXG59KSA9PiB7XHJcbiAgbGV0IGNsYXNzZXMgPSB2aWV3RGV0YWlsc0J0biB8fCBlZGl0QnRuID8gYGhhc19idG4gJHtjbGFzc05hbWV9YCA6IGNsYXNzTmFtZTtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRDYXJkV3JhcHBlciBjbGFzc05hbWU9e2BncmlkX2NhcmQgJHtjbGFzc2VzfWAudHJpbSgpfT5cclxuICAgICAgPEltYWdlV3JhcHBlciBjbGFzc05hbWU9XCJtZWRpYV93cmFwcGVyXCI+e2NoaWxkcmVufTwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgICA8Q29udGVudFdyYXBwZXIgY2xhc3NOYW1lPVwiY29udGVudF93cmFwcGVyXCI+XHJcbiAgICAgICAge2xvY2F0aW9uICYmIDxMb2NhdGlvbkFyZWE+e2xvY2F0aW9ufTwvTG9jYXRpb25BcmVhPn1cclxuICAgICAgICB7dGl0bGUgJiYgPFRpdGxlQXJlYT57dGl0bGV9PC9UaXRsZUFyZWE+fVxyXG4gICAgICAgIDxNZXRhV3JhcHBlciBjbGFzc05hbWU9XCJtZXRhX3dyYXBwZXJcIj5cclxuICAgICAgICAgIHtwcmljZSAmJiA8UHJpY2VBcmVhIGNsYXNzTmFtZT1cInByaWNlXCI+e3ByaWNlfTwvUHJpY2VBcmVhPn1cclxuICAgICAgICAgIHtyYXRpbmcgJiYgPFJhdGluZ0FyZWEgY2xhc3NOYW1lPVwicmF0aW5nXCI+e3JhdGluZ308L1JhdGluZ0FyZWE+fVxyXG4gICAgICAgICAge3ZpZXdEZXRhaWxzQnRuIHx8IGVkaXRCdG4gPyAoXHJcbiAgICAgICAgICAgIDxCdXR0b25Hcm91cCBjbGFzc05hbWU9XCJidXR0b25fZ3JvdXBcIj5cclxuICAgICAgICAgICAgICB7dmlld0RldGFpbHNCdG59XHJcbiAgICAgICAgICAgICAge2VkaXRCdG59XHJcbiAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L01ldGFXcmFwcGVyPlxyXG4gICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG5cclxuICAgICAge2Zhdm9yaXRlICYmIDxGYXZvcml0ZUljb24+e2Zhdm9yaXRlfTwvRmF2b3JpdGVJY29uPn1cclxuICAgIDwvR3JpZENhcmRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5HcmlkQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxyXG4gIHByaWNlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHJhdGluZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcclxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcclxuICBlZGl0QnRuOiBQcm9wVHlwZXMuZWxlbWVudCxcclxuICB2aWV3RGV0YWlsc0J0bjogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmlkQ2FyZDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuXHJcbmNvbnN0IEdyaWRDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAmLmhhc19idG4ge1xyXG4gICAgLmJ1dHRvbl9ncm91cCB7XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4ICR7dGhlbWVHZXQoJ2JveFNoYWRvdy4yJywgJ3JnYmEoMCwgMCwgMCwgMC4xNiknKX07XHJcblxyXG4gICAgLmNvbnRlbnRfd3JhcHBlciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5oYXNfYnRuIHtcclxuICAgICAgLm1ldGFfd3JhcHBlciB7XHJcbiAgICAgICAgLnJhdGluZyB7XHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcclxuICAgICAgICAuYnV0dG9uX2dyb3VwIHtcclxuICAgICAgICAgIHRvcDogMTlweDtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3cge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1kb3QtbGlzdCB7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICA+IGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtbGlzdCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU4ZWM7XHJcbiAgfVxyXG5cclxuICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdyB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMjIlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdy0tbGVmdCB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICB0byBsZWZ0LFxyXG4gICAgICB0cmFuc3BhcmVudCAwJSxcclxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjI1KSAxMDAlXHJcbiAgICApO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byBsZWZ0LFxyXG4gICAgICAgIHRyYW5zcGFyZW50IDAlLFxyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4yNSkgMTAwJVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdy0tcmlnaHQge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICB0cmFuc3BhcmVudCAwJSxcclxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjI1KSAxMDAlXHJcbiAgICApO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byByaWdodCxcclxuICAgICAgICB0cmFuc3BhcmVudCAwJSxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMjUpIDEwMCVcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1kb3QtbGlzdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0zMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgdG8gYm90dG9tLFxyXG4gICAgICB0cmFuc3BhcmVudCAwJSxcclxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjI1KSAxMDAlXHJcbiAgICApO1xyXG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuM3MgZWFzZTtcclxuICB9XHJcblxyXG4gIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1kb3Qge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICB3aWR0aDogNnB4O1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4zJywgJyNFOUU4RTgnKX07XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWRvdC0tYWN0aXZlIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZhdm9yaXRlSWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogOHB4O1xyXG4gIHotaW5kZXg6IDk7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItdG9wLXdpZHRoOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xyXG4gIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvY2F0aW9uQXJlYSA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMScsICcjOTA5MDkwJyl9O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZUFyZWEgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogNHB4IDAgNXB4O1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIG1hcmdpbjogNHB4IDAgNXB4O1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJpY2VBcmVhID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSYXRpbmdBcmVhID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cdFx0bWFyZ2luLXRvcDogN3B4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdH0gKi9cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICB9XHJcblxyXG4gIGkge1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xyXG4gIH1cclxuXHJcbiAgc3ZnIHtcclxuICAgIGZpbGw6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xyXG4gIH1cclxuXHJcbiAgc3Ryb25nIHtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIC8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9ICovXHJcbiAgfVxyXG5cclxuICAuYW50LXJhdGUge1xyXG4gICAgLyogbWFyZ2luLXRvcDogLTJweDsgKi9cclxuICAgIC5hbnQtcmF0ZS1zdGFyIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWV0YVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25Hcm91cCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZy10b3A6IDdweDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gID4gYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgJjpob3ZlcixcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjEnLCAnIzM5OUM5RicpfTtcclxuICAgIH1cclxuXHJcbiAgICBzdmcge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgIGhlaWdodDogMThweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmlkQ2FyZFdyYXBwZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMb2FkZXJXcmFwcGVyIGZyb20gJy4vTG9hZGVyLnN0eWxlJztcclxuXHJcbmNvbnN0IExvYWRlciA9ICh7IGZpbGwsIGNsYXNzTmFtZSB9KSA9PiB7XHJcbiAgLy8gZGVmYXVsdCBjbGFzc05hbWVcclxuICBjb25zdCBhZGRBbGxDbGFzc2VzID0gWydsb2FkZXInXTtcclxuXHJcbiAgLy8gYWRkIG5ldyBjbGFzcyB1c2luZyBjbGFzc05hbWUgcHJvcFxyXG4gIGlmIChjbGFzc05hbWUpIHtcclxuICAgIGFkZEFsbENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2FkZXJXcmFwcGVyIGNsYXNzTmFtZT17YWRkQWxsQ2xhc3Nlcy5qb2luKCcgJyl9PlxyXG4gICAgICA8c3ZnIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDAgMFwiPlxyXG4gICAgICAgIDxjaXJjbGUgZmlsbD17ZmlsbH0gc3Ryb2tlPVwibm9uZVwiIGN4PVwiNlwiIGN5PVwiNTBcIiByPVwiNlwiPlxyXG4gICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxyXG4gICAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICAgIHZhbHVlcz1cIjA7MTswXCJcclxuICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgICAgYmVnaW49XCIwLjFcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2NpcmNsZT5cclxuICAgICAgICA8Y2lyY2xlIGZpbGw9e2ZpbGx9IHN0cm9rZT1cIm5vbmVcIiBjeD1cIjI2XCIgY3k9XCI1MFwiIHI9XCI2XCI+XHJcbiAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgICAgdmFsdWVzPVwiMDsxOzBcIlxyXG4gICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgICBiZWdpbj1cIjAuMlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvY2lyY2xlPlxyXG4gICAgICAgIDxjaXJjbGUgZmlsbD17ZmlsbH0gc3Ryb2tlPVwibm9uZVwiIGN4PVwiNDZcIiBjeT1cIjUwXCIgcj1cIjZcIj5cclxuICAgICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgICB2YWx1ZXM9XCIwOzE7MFwiXHJcbiAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICAgIGJlZ2luPVwiMC4zXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9jaXJjbGU+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9Mb2FkZXJXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5Mb2FkZXIucHJvcFR5cGVzID0ge1xyXG4gIC8qKiBDbGFzc05hbWUgb2YgdGhlIExvYWRlciBjb21wb25lbnQuICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAvKiogQWRkIExvYWRlciBjb2xvciB1c2luZyBmaWxsIHByb3AuICovXHJcbiAgZmlsbDogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbkxvYWRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZmlsbDogJyMwMDg0ODknLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IExvYWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBzdmcge1xyXG4gICAgd2lkdGg6IDUycHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcldyYXBwZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWFya2VyIH0gZnJvbSAncmVhY3QtZ29vZ2xlLW1hcHMnO1xyXG5pbXBvcnQgSG90ZWxJbmZvV2luZG93IGZyb20gJy4vTWFwSW5mb1dpbmRvdyc7XHJcbmltcG9ydCBNYWtlckltYWdlIGZyb20gJy4vaG90ZWxNYXBNYXJrZXIucG5nJztcclxuXHJcbmNvbnN0IEhvdGVsTWFwTWFya2VyQ2x1c3RlciA9ICh7IGxvY2F0aW9uIH0pID0+IHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttYXJrZXJJbmRleCwgc2V0TWFya2VySW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgbGV0IGhvdGVsRGF0YSA9IFtdO1xyXG5cclxuICBjb25zdCBpbmZvV2luZG93VG9nZ2xlID0gKGluZGV4KSA9PiB7XHJcbiAgICBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgICBzZXRNYXJrZXJJbmRleChpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgbG9jYXRpb24gJiZcclxuICAgIGxvY2F0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaG90ZWxEYXRhLnB1c2goe1xyXG4gICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgIGxhdDogcGFyc2VGbG9hdChpdGVtLmxvY2F0aW9uLmxhdCksXHJcbiAgICAgICAgbG5nOiBwYXJzZUZsb2F0KGl0ZW0ubG9jYXRpb24ubG5nKSxcclxuICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgICB0aHVtYlVybDogaXRlbS5pbWFnZS50aHVtYl91cmwsXHJcbiAgICAgICAgZm9ybWF0dGVkQWRkcmVzczogaXRlbS5sb2NhdGlvbi5mb3JtYXR0ZWRBZGRyZXNzLFxyXG4gICAgICAgIHByaWNlOiBpdGVtLnByaWNlLFxyXG4gICAgICAgIHJhdGluZzogaXRlbS5yYXRpbmcsXHJcbiAgICAgICAgcmF0aW5nQ291bnQ6IGl0ZW0ucmF0aW5nQ291bnQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiBob3RlbERhdGEubWFwKChzaW5nbGVQb3N0TG9hY3Rpb24sIGluZGV4KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TWFya2VyXHJcbiAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICBpY29uPXtNYWtlckltYWdlfVxyXG4gICAgICAgIHBvc2l0aW9uPXtzaW5nbGVQb3N0TG9hY3Rpb259XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaW5mb1dpbmRvd1RvZ2dsZShzaW5nbGVQb3N0TG9hY3Rpb24uaWQpfVxyXG4gICAgICA+XHJcbiAgICAgICAge2lzT3BlbiAmJiBtYXJrZXJJbmRleCA9PT0gc2luZ2xlUG9zdExvYWN0aW9uLmlkID8gKFxyXG4gICAgICAgICAgPEhvdGVsSW5mb1dpbmRvd1xyXG4gICAgICAgICAgICBkYXRhPXtzaW5nbGVQb3N0TG9hY3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2xvc2VDbGljaz17KCkgPT4gaW5mb1dpbmRvd1RvZ2dsZShzaW5nbGVQb3N0TG9hY3Rpb24uaWQpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgJydcclxuICAgICAgICApfVxyXG4gICAgICA8L01hcmtlcj5cclxuICAgICk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3RlbE1hcE1hcmtlckNsdXN0ZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYXJrZXJDbHVzdGVyZXIgZnJvbSAncmVhY3QtZ29vZ2xlLW1hcHMvbGliL2NvbXBvbmVudHMvYWRkb25zL01hcmtlckNsdXN0ZXJlcic7XHJcbmltcG9ydCBNYXBXcmFwcGVyIGZyb20gJy4vTWFwV3JhcHBlcic7XHJcbmltcG9ydCBIb3RlbE1hcE1hcmtlckNsdXN0ZXIgZnJvbSAnLi9MaXN0aW5nUGFnZU1hcCc7XHJcbmltcG9ydCBIb3RlbE1hcE1hcmtlclNpbmdsZSBmcm9tICcuL1NpbmdsZVBhZ2VNYXAnO1xyXG5cclxuY29uc3QgTWFwID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBtdWx0aXBsZSwgbG9jYXRpb24gfSA9IHByb3BzO1xyXG4gIGNvbnN0IGhhbmRsZUNsdXN0ZXJlckNsaWNrID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IG1hcmtlckNsdXN0ZXJlciA9IGRhdGEuZ2V0TWFya2VycygpO1xyXG4gICAgY29uc29sZS5sb2coYEN1cnJlbnQgY2xpY2tlZCBtYXJrZXJzIGxlbmd0aDogJHttYXJrZXJDbHVzdGVyZXIubGVuZ3RofWApO1xyXG4gICAgY29uc29sZS5sb2cobWFya2VyQ2x1c3RlcmVyKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge211bHRpcGxlICYmIG11bHRpcGxlID09PSB0cnVlID8gKFxyXG4gICAgICAgIDxNYXBXcmFwcGVyXHJcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50PXs8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzQwMHB4JyB9fSAvPn1cclxuICAgICAgICAgIG1hcEVsZW1lbnQ9ezxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX0gLz59XHJcbiAgICAgICAgICBkZWZhdWx0Wm9vbT17N31cclxuICAgICAgICAgIGRlZmF1bHRDZW50ZXI9e3tcclxuICAgICAgICAgICAgbGF0OiA0MS44ODU4LFxyXG4gICAgICAgICAgICBsbmc6IC03NS43MjIzLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWFya2VyQ2x1c3RlcmVyXHJcbiAgICAgICAgICAgIGdyaWRTaXplPXs2MH1cclxuICAgICAgICAgICAgYXZlcmFnZUNlbnRlclxyXG4gICAgICAgICAgICBkZWZhdWx0RW5hYmxlUmV0aW5hSWNvbnM9e3RydWV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsdXN0ZXJlckNsaWNrfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SG90ZWxNYXBNYXJrZXJDbHVzdGVyIGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cclxuICAgICAgICAgIDwvTWFya2VyQ2x1c3RlcmVyPlxyXG4gICAgICAgIDwvTWFwV3JhcHBlcj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TWFwV3JhcHBlclxyXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudD17PGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc0MDBweCcgfX0gLz59XHJcbiAgICAgICAgICBtYXBFbGVtZW50PXs8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19IC8+fVxyXG4gICAgICAgICAgZGVmYXVsdFpvb209ezh9XHJcbiAgICAgICAgICBkZWZhdWx0Q2VudGVyPXt7XHJcbiAgICAgICAgICAgIGxhdDogNDAuNzA2ODc3LFxyXG4gICAgICAgICAgICBsbmc6IC03NC4wMTEyNjUsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxIb3RlbE1hcE1hcmtlclNpbmdsZSBsb2NhdGlvbj17bG9jYXRpb259IC8+XHJcbiAgICAgICAgPC9NYXBXcmFwcGVyPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW5mb1dpbmRvdyB9IGZyb20gJ3JlYWN0LWdvb2dsZS1tYXBzJztcclxuaW1wb3J0IFJhdGluZyBmcm9tICdjb21wb25lbnRzL1VJL1JhdGluZy9SYXRpbmcnO1xyXG5pbXBvcnQgR3JpZENhcmQgZnJvbSAnLi4vR3JpZENhcmQvR3JpZENhcmQnO1xyXG5cclxuY29uc3QgTWFwSW5mb1dpbmRvdyA9ICh7IGRhdGEsIG9uQ2xvc2VDbGljayB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJbmZvV2luZG93IGlkPXtkYXRhPy5pZH0gb25DbG9zZUNsaWNrPXtvbkNsb3NlQ2xpY2t9PlxyXG4gICAgICA8R3JpZENhcmRcclxuICAgICAgICBjbGFzc05hbWU9XCJpbmZvX3dpbmRvd19jYXJkXCJcclxuICAgICAgICBsb2NhdGlvbj17ZGF0YT8uZm9ybWF0dGVkQWRkcmVzc31cclxuICAgICAgICB0aXRsZT17ZGF0YT8udGl0bGV9XHJcbiAgICAgICAgcHJpY2U9e2AkJHtkYXRhPy5wcmljZX0vTmlnaHQgLSBGcmVlIENhbmNlbGxhdGlvbmB9XHJcbiAgICAgICAgcmF0aW5nPXtcclxuICAgICAgICAgIDxSYXRpbmdcclxuICAgICAgICAgICAgcmF0aW5nPXtkYXRhPy5yYXRpbmd9XHJcbiAgICAgICAgICAgIHJhdGluZ0NvdW50PXtkYXRhPy5yYXRpbmdDb3VudH1cclxuICAgICAgICAgICAgdHlwZT1cImJ1bGtcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nIHNyYz17ZGF0YT8udGh1bWJVcmx9IGFsdD17ZGF0YT8udGl0bGV9IC8+XHJcbiAgICAgIDwvR3JpZENhcmQ+XHJcbiAgICA8L0luZm9XaW5kb3c+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcEluZm9XaW5kb3c7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhTY3JpcHRqcywgd2l0aEdvb2dsZU1hcCwgR29vZ2xlTWFwIH0gZnJvbSAncmVhY3QtZ29vZ2xlLW1hcHMnO1xyXG5cclxuY29uc3QgTWFwID0gd2l0aFNjcmlwdGpzKFxyXG4gIHdpdGhHb29nbGVNYXAoKHByb3BzKSA9PiA8R29vZ2xlTWFwIHsuLi5wcm9wc30+e3Byb3BzLmNoaWxkcmVufTwvR29vZ2xlTWFwPilcclxuKTtcclxuXHJcbmNvbnN0IE1hcFdyYXBwZXIgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1hcFxyXG4gICAgICBnb29nbGVNYXBVUkw9e3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9HT09HTEVfTUFQX0FQSV9LRVl9XHJcbiAgICAgIGxvYWRpbmdFbGVtZW50PXs8ZGl2IHN0eWxlPXt7IGhlaWdodDogYDEwMCVgIH19IC8+fVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvTWFwPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBXcmFwcGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1hcmtlciB9IGZyb20gJ3JlYWN0LWdvb2dsZS1tYXBzJztcclxuaW1wb3J0IEhvdGVsSW5mb1dpbmRvdyBmcm9tICcuL01hcEluZm9XaW5kb3cnO1xyXG5pbXBvcnQgTWFrZXJJbWFnZSBmcm9tICcuL2hvdGVsTWFwTWFya2VyLnBuZyc7XHJcblxyXG5jb25zdCBTaW5nbGVNYXBEaXNwbGF5ID0gKHsgbG9jYXRpb24gfSkgPT4ge1xyXG4gIGxldCBob3RlbERhdGEgPSBbXTtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttYXJrZXJJbmRleCwgc2V0TWFya2VySW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGluZm9XaW5kb3dUb2dnbGUgPSAoaW5kZXgpID0+IHtcclxuICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICAgIHNldE1hcmtlckluZGV4KGluZGV4KTtcclxuICB9O1xyXG5cclxuICBob3RlbERhdGEucHVzaCh7XHJcbiAgICBsYXQ6IGxvY2F0aW9uPy5sb2NhdGlvbi5sYXQsXHJcbiAgICBsbmc6IGxvY2F0aW9uPy5sb2NhdGlvbi5sbmcsXHJcbiAgICBpZDogbG9jYXRpb24/LmlkLFxyXG4gICAgdGl0bGU6IGxvY2F0aW9uPy50aXRsZSxcclxuICAgIHRodW1iVXJsOiBsb2NhdGlvbj8uaW1hZ2UudGh1bWJfdXJsLFxyXG4gICAgZm9ybWF0dGVkQWRkcmVzczogbG9jYXRpb24/LmxvY2F0aW9uLmZvcm1hdHRlZEFkZHJlc3MsXHJcbiAgICBwcmljZTogbG9jYXRpb24/LnByaWNlLFxyXG4gICAgcmF0aW5nOiBsb2NhdGlvbj8ucmF0aW5nLFxyXG4gICAgcmF0aW5nQ291bnQ6IGxvY2F0aW9uPy5yYXRpbmdDb3VudCxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGhvdGVsRGF0YS5tYXAoKHNpbmdsZVBvc3RMb2FjdGlvbiwgaW5kZXgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNYXJrZXJcclxuICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgIGljb249e01ha2VySW1hZ2V9XHJcbiAgICAgICAgcG9zaXRpb249e3NpbmdsZVBvc3RMb2FjdGlvbn1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBpbmZvV2luZG93VG9nZ2xlKHNpbmdsZVBvc3RMb2FjdGlvbi5pZCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtpc09wZW4gJiYgbWFya2VySW5kZXggPT09IHNpbmdsZVBvc3RMb2FjdGlvbi5pZCA/IChcclxuICAgICAgICAgIDxIb3RlbEluZm9XaW5kb3dcclxuICAgICAgICAgICAgZGF0YT17c2luZ2xlUG9zdExvYWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNsb3NlQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBpbmZvV2luZG93VG9nZ2xlKHNpbmdsZVBvc3RMb2FjdGlvbi5pZCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAnJ1xyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTWFya2VyPlxyXG4gICAgKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IEhvdGVsTWFwTWFya2VyU2luZ2xlID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIDxTaW5nbGVNYXBEaXNwbGF5IHsuLi5wcm9wc30gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3RlbE1hcE1hcmtlclNpbmdsZTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUU0QUFBQmJDQVlBQUFEZHNiTTFBQUFBQVhOU1IwSUFyczRjNlFBQUQ4VkpSRUZVZUFIdFd3bVVGT1VSL25xR1hYYTVCR0haNVZDNUJKRWJKWUFZUlVBNWxDZ0tpRVNNNXZtZVBveEduejVRSW5JTFVRUmpJaHFTRUoveENCcEE1SHBjQWdLeUhBSUNJckFjQW5Jc3NBZ3MxN0k3MDZuYTNwcjVwNitaMlprZGRwT3Q5M3JxUDZycXIvcW0vdTYvdS84R3lxa2NnWElFeWhINDMwVkF1OHFoeFRxK2ZyWDhqOVh4YVAwT04xNjQvbkJBaGV1UDFsOUgrWENPT2lwRzJXRTNqb1pod3lxanlyVzlvV20zUXRQVHlHWWFkTlNHUmh4YUhlaTZqL3BPRWo5QjlaUFVmaExRajhHbmI0V2V0d0NqUjE4a0hUdXc3TnFpZE5sZDNDNGdkNDNvZXMzMk5RcTJGandWZndXUDlnQ0ZmRGNCa3h5ZHlZQjBIdWt2Qlh4ZjRDSyt3TVFSUDFPUEdUQnpQYUFjYThFY1dLejJSRisxYTVUSFRyeUZRSnBFQWwySmUwUXdUdHhIV2JrQ3ZvS1JHUDNxaGlLYkttaHFPUzVEcWdIR3c2RFpIbVhZaEphbzRCMVBVNjF2UEFZSWIwT2Zod0wveXhnOVloZkptZ0V6MThPYmM1QXdCK29nRmxHemFvc0FtOWdBWG95RjVobE0ybXBmUk1aaUV0SjFQK2wvQXVTL2hwRWpEMUpaQlV3dEYzdVllQVNrMmpES1l5WU9vSFBZQnpRbFU4SjVsbDY1RW5vMGJJQjI2ZW1vVTZVeTZsYXRRcndLNmhGbk9uYitBbzZlUDQranVlZHhKRGNYMzJXZndPTDlCM0R5NHFYQ2Z0Y2ZYYjhNZjhGZ2pIcDFicEdjZ0NiY1ZkMnRVdzNhVGM2cFQ5WG5Fei9ncmZnYVpka29Kd1Z1NzNiRDllamRwQkh1YWRRUXJXdnp4VFE2NHFpM256aUpKUVRnZ3IzN3NQTGdZWGNEdW44TVJyNHl0a2hJQlUwdHU5c3c5YXFCbTdvaXFvcStocGRlU2tYMVdoL1RyTHpmU2JObFdpMjgzN3NudWx4WHowbWtXTzFyRHgvQjA0c1dZOGZKVXk3NitsemtaRCtDcVZQelNFZ0FFKzZpWjk4bGdkdjN1cmVLTG1kYUJpcWtMaWJ4bG5ZcTlhdFd4WVN1djhTUTFpMUw3R1RuMTNYOGEvdjNHUDdWU21SZjRPV2REZW42RnZndTl5Ri9hVjBZRzNnU3ZNMG9qazJxVGxHbXBYMUQwcTN0TkhyU2RQenN3ZnRScldKeGwydDJWcDNienVWZHdjRFpjd3ZQZ3c1U1czSG01TzJZUEpsUGttckdxV1VIMVdCekxPc3BCbEJEdFZvemlWdEE0ODdYZm5rYkZqMHlJR0dnY1ZqOEJ5MGMxQjkvNk5LWnEzYlVGdGVrMFJXM01QblZKTENUZFd6ek92YllkOGhBQm1oako0Mm1xK2VUWnRGcXljbVlPL0JCUE5tMlRZbE5UZk9ZYWwzVE5IUnJjQU51clpPQkwvZnNSYjZmVnljS2FXaUd1N3ByV0xGOEpiV3FNU2xDN2tWUmNwY3lla1hXNEdQR1B3UnYwbWRteGNwSlNjaDhZZ2o0UWxBYWFCdGRmYnQ4OEJITzUrZGIzZkg1QjJIVUs1OFhkY2hVRlc2VlYxb2luYW9DbXFFNllrUWFnZllQeFU1aGtZM05HZEN2MUlER1R2Rnk1ei85SDRCdG9CNXRPbDRjZlcyaDg4R2YwRmlEN1NFbFczc2hFcUVWTnFvaHBlcFk0bFZEdTRESlBicmg3b1lOek0xWHZjNFhxRW5kdWxyOTBMUnF1S2JpT09vdzRySktPTFpFY282VGY4QXdQbnBDYzNpOWZ5OGFMR0I0Y0l2bWVMUEhYWUY2YVN2dzJuSGZ6eitEcDI0SWFWbzczSEg3VEt4Y21VUHRhcXdoWXVaS3RCa0h1bUYvVnhtZzBGNWR1a1dhMGJlUDJYYXBxLy90M2w3Z1d6d1RlZWx1NXkxcUU5Qk0zZmJWY01DSk1lYTAwSDI5SjdFN3pLYkcwK0syb2plUzVEVnJKcmFlVXFFQ0xjUXQ3bE5Jbmo0WU02RXJlV1BFYWJnbHNkczZXY0cyMWFuUnF6MXI3cnE1VmswODNxYVZ1VGxzL2UwTm03QTc1M1JBanUwODIrR1dRTjJ1TUdiMVdoeW5tMzZoWDlTdGd5ZWlISnZsMzF5M0FidFBCOGN1dEtkNVh5UytVbXlINDI3QUNlTEd2L0Q4ODFYcEQrbG1OdmdXWFJCRTBOem5WdWYxMVlxRGh3SWk5elJzRUJhNG1kL3Z3Zzg1T1FHZDNDdFhvZ2JPUTJ1OHlYUXU3dnZacklDZHdvS0c3aGc2TkJYVHBzbGpGMTZXY0dpMnk1TndVelZvdkViNnZlYkgzTmRYcTRwZWpSc0daY3BJNmI0Ykc2UEJOZFZDdmVWSCtPblg5UTF0ZEs2RkE4N0lOa1plMC9xWnpReWlLMmxacGY3Tm0xbGQ1L2Nnd2ZPYzYwUnlBaTVVYWNDQUpMcTFzbHcyK3pWcmFoMjhqTFE4ME5UR2Q0MGU3M09zb1JTS1JWR2ZFM0NocWkxYTk2YUdWTFV4bzNKbGRLeFhWMjBxVStYYmFGMVhNOVh5Z0RvVnpkdjBpQ1FRTitDVWFWcWhyZGxZdjJZM0Z1dWlZTFp6dGVvYzNJTjJNOGJyN1VCZHdkZ2RITFFEemlZMTlReXpmbnQ2OGxEV3FRTXRaNnlrMTdhMldYUEViVGtTMU5jOEZtTTJLL0NnZkRGS3graUZ6RWYwQk5lTnp1YnhVKy80VVczclhRVGxtalZXdXhFakFZNnVxRWczSzZmVE9TNmV0SjNlRnd6NWNrRThUWWExWlJ1REVTdlBPdHYxbXhpMW02cmNKOU8xaUdzbERwdzRsRWh1bTNIUTBvcDhNR0VRNnBrVGNDd2xpbHlxSDZxR3d2ZWY1cmF5VnE5ZHlYTERUeUhvYXBJRU1UQUZGOGxVWlpVcmRJU3NiNjc0ZkVqeXVPRnVHaWxNdFJVOU1SN1d1YU9yMVBDdlZoVytuSFlWaXIwem9xQWlBMDdIY2NxNnhxcFAyUmN1b0ZIMTZtcFRUR1YrZS85b3F4YXVObDVmbXhsWDRJNVRERGFVYmRObWFZb0lYY0Ivd3F5cFBxVXc5NVdWdW4wTSt2RkkvSThNT0IwVzREamp5anJaQXFkcmNjdzQzZm92T0w0dEwwTm8yazlWYTZ4MklVV1djZUN0cEtIMDdiR0lNanBVcVpUVmVPZVRoZng2SERQT1Y3REZQTURjUFZubXBqSlhuN043ajlYbkF0ODJhNk8xeFMzamdpdm56TFZMYUtzb0wwa0N4UHZUTmgrUDZNOEo2SlNtd3Nhang1Qno2WEtvU3h6amh0VkxsY1lnQmtvakY1MkFFd1dETDFtU1Q4QXROK2xpZnRaZWMxT1pxYytuZlhVVzB2V2w0RmdOQ3NYQUpPd0VuQ3BtR1BEN0ZxcU5YSjZmWlRPNFdhaVUxdWZST3c4TEZSVEl6YktBWmhHUkJydGJDbWxqTG9jSFR6OWZGL1hySEJCRjRlc2VmeFNkeXRnRHpmVkhqcUlUN1NleDBLRjlkVEY5T3I4TjRsMDZESjRjTEJvQ3BsM0doUWl3QnBHTzk5OCtCdDF2T1hFT1hiVEVrQ2hEdjAvYithenIzeEpvL003UVBuNVRmSGJBaVlpZ0xZWjA1Ri81aTNRSzMwS1hkTjRKV1Zib2cyM2JzZFZ1R1pLWDl4N0ZFSXpWS0V2ZEVwNGJjS3F3WVdEc3FBL3BJckZWN2VEeXkzVHpuVWMzL2FXZEx0SldyMkhMVjFyZDFQWHZNSDZVekYxSHNGUkZKK0RzbEkyMjg3bS9WdzF3bWJmVFA3V1F0d0NYYm5xTUhwVGFidk0vZC9aWjhwempjNDdiRkpyYmhnKzVTSWlLVVYrNytnaTY5cUJkME5wTjBzR2NWK0ZWa3BOd1cvMTZhbk9wS2IreGJqM2UyYmpaNm8rdllCWW1qUG16MGlFQTJvRVlFSFBLdUlDQVVoQ0RRUGFKNGRRdTY1MkF5SENhQm92MjdRL1VTMHRoNllFZkMwOG5OdjdrNFdqMkswWHR3ZmhzQk0xTmJzQ3BpS3RHZGJ3NzVTRHk4bjVuTnNiWDhJR3o1bUxuS2I2aWx3N2lieC82ZlQ3SGRnNVNETS9ocis4Y0lrOGxWalZPRGtEYUxjRzRUVlVXbHVrcTZ6a3hvT0hyRmR0d1I5ZHE4SGhESHR0ZW9ZM0svTGFxUTkwTU5Lb1J2d2VkTW5BMGZCbGwydDBmejhRRnUvMi9CUVZUTVhia2xDSjdFUU1tNDRjRGp1VUVQTkVKdHUzZHN4enRPN1NqODkyTmFpZGZZVC9ac1JNMVVsS3UydHYrS2VzMzRyRzVDNUJuM25IT2p2cjlDL0hQNlUvaHpCa0J6TXhaeWpIYnVETWE0Q1RyZ2tDZU93ZFVTcG1IK3RmM0lmRFMyYUFRajdwbzN3RWNPbnNPOTlMdUlONWVsUWppZHlHL21iY1Frek0zMmtldTY5dXhlWDFmWkdieU9Wb0FpOXExU0lCam84NVJaMlg1Y0VPVGVhaFJuYjkydHJ5NDVzWG01ei9zS3Z3YXNEbHRIaXhKbXIxckR4NmE5WVh6UjNHOEJ2MHg2MzU4K3VsWjhrTkFNM04ya2R0Y3lSbVFVRFdSVXptWCtlQUxERzNMNjE0WmQzWmZSZWM4eHpjdUhXbkxBVzlFalBkSGNLc09IY1pMeTFaZ2s5dkRWYjl2UHI1YU1vUTJTZk96SkFiRzdYNDBic0RST0lHc000UEh3QmxIV3BvSHo3eXdualpZMzh3S1R0UzhaazMwYmRvWTl6VnBBdDQxNUkxeUd2dm9nN2UxaDM4cWZEckRUMmpVWFpxMll4YjRsdEFYMDd5L1Q4QVNMdG5HYWdLV2NGdFQwaWdnU0QwY0Yzbm1VdWJwem1YbURLQVhJOGZPUlhMeW5UUjFxZXBPTlZJcTBxN09SbWlma1E3ZXZTNGYrdGFuM1o3OFJTRHZLZUdQZlBtRFgvN1FseC9aODFyeExIM3NGcFpJSHdYNUN6Rm01TU1reTJDcGh3REVYQzJITmNzQzRTTUxOYVBLYzVrUFk2b2FuTi9UTW9CZXZEeHlIQ3FsRHFXcFM5V3JRSHcxdlhUeERVd2M5enFOempmU0RGcEJFVmVCa2pKMUJRRGtzaXNWSnlvVlBEWXVkUUhTQUhQTjE2dlFwbDAya2l2ZVF5SzhGZGJWa2JoMStna0hIMTFhVDU5K0FaTW5UU083NWl3VG9KaExtWWRYeTF4M3BlSUFKd1lGQ1pVYm9Fa21abjd6UFc1cXNSK3BxVDNwcVlxbkVMeVNBcENuSlQraDhma3U0cWNqdjhWNzcvQjMrQXdhQXlMZ2NWazlxQm9kWUt6QUZBdHdyTTlBc1NQTTFVTXVHQm8yYmNoQzR5WTdVYlVhWlI3dFAvRlRjQnlrVUhHQkZCdHNqNmNsMS8yK1U4amFNd2dmemxoSDVzMmdTWjFIRmdlRWl6Y1I4M2dBSjRNeGNFd0NvSlE5MkxMNUlHcW5yMFd0Mm4yb01jWDR6em5Rb29BNWFBRkNPQU1xWmVsWDVUbTdDdXM4REpIUGZ4Q2IxZzNFbk5uOHpvOUJJb0hBdVkzckFoenptQ2xXNE5nQk0xRFNKdHdBZE9lT0U2aGVZeFhTTTNyUmxLM0VuUUZTZ1dFdytCQmdwTTZjU1dTTm12SHI4MjNIL1BrUFk4MnFZOVFnZ0FsblJUNDR1OVFNVTh2VUZSM0ZDemluVVJrMGR0QUFkL2NQT1VoT1dZcjY5YnZDNDZsdU9lZHhscmtkTW9vcWsxK3dudTQ3ZjQyczNXZW9XOERpcTZlVTdZQ0xDVFIySXg3QXNSMGpxN2dVU21xN0FlRCt2V2VSZTNZQm1qUzlnOEF6UHFOV2dZaWtMR1BrWFY2SWQ5OStDcWRPWGFRbUJvcnZQd1V3NW5hZ1VYUHNGQy9nMkJNVkpDbEx0cW1lMHFyMjJHV2NPRDRQTjdmcVRPQmx1R2FaRTVBWExzekFIeWNNbzJkcXZCTG1ESk1qSEhBeFp4c0hFMC9nMko0QXhtVWhjVlFGVWFjc3VVTFQ2MHUwYXRzY1NSVWFpWEJZcm1rNlR1ZU13NVEzcHBJc2c2UUNKbE5VTW8wNWo2djZRTlhZS2Q3QXNVZDI0SW1uYWhCQWJtNCtObVl1UUlkT2paQ1UxQ3g4NXRHVzJwK09QSWRwZi9vM0dSVEFoS3VaeHVPVUdHZ2NURWtBeDNiZHdPTitKaU1MQ2dyOFdMMXFFVHAycm9PazVGWkdsOTJ2ZmdsN3M0Wmd4dlRsMUN1WkpaeEJZNkNFeXg5a2pDRmoyWmt0Wmx0SkFjZnUySUVuZ1ZqZFhmTTFQMDMyMFYxR0Ywdm1RYy9COW0yRDhlbEhtMGlSd1ZFQjQ3b0FwbWFaakNYY09tWU1MU1VKSEx0bEI1NjRLd0VGWmRhdDJZQzI3WStqVXFVZUJKNXhmK3VuaGUzbTlmMHhlOVl1VWhTUUJEdzF5eElHR2dkUTBzRHhHRUZndUJhT010ZnVRTXMyZXdtOFhyUVEzbzdGUy9wajJlS2pwS2FDSm1VR1N3NytJOVFqM0VneDlVY1hWUEdIa25HWXl5SDNzL3puY1ptNWxEMTQ4cGxPV0wxc0czYnY1bDNhRElnS2xscm1Qc2syS2dhdW9Gd3VNWktBU213QXhiQ01KY0F4Ri9BRU9MVXVxZ0tNWkJhREptWHBZODRrM0tpVjRHOWtINGpFeHdGelVGSm5Mb2NBSitEeXlOd25HU1dBQ1JjOWtXT2VFRXJFT1M1Y0lKS0pMTWRBTURrQnBiWmZOZERZUWRWcHJpZVNaR3pKTHVhY2NVelNaOVNDR1NsZ0NlZCtBVnRrRThMTkRpWmtVR1VRR1orNVhabEZCUmc3c0tSUE1abVlvamlibU5Ic1IxRjlrTEp3MFJDQXpGejZFODdORGliY0FXWEFTSDBSOEJUVnhCY2pkVGFSbmpuNVZDb0FTeVFRNVdPVkkxQ09RRGtDNVFpVUkvRC9nY0IvQVdURkdPaVhINkVEQUFBQUFFbEZUa1N1UW1DQ1wiIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgRmlFeHRlcm5hbExpbmsgfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCc7XHJcbmltcG9ydCBSYXRpbmcgZnJvbSAnY29tcG9uZW50cy9VSS9SYXRpbmcvUmF0aW5nJztcclxuaW1wb3J0IEZhdm91cml0ZSBmcm9tICdjb21wb25lbnRzL1VJL0Zhdm9yaXRlL0Zhdm9yaXRlJztcclxuXHJcbmltcG9ydCBHcmlkQ2FyZCBmcm9tICcuLi9HcmlkQ2FyZC9HcmlkQ2FyZCc7XHJcblxyXG5jb25zdCByZXNwb25zaXZlID0ge1xyXG4gIGRlc2t0b3A6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHtcclxuICAgICAgbWF4OiAzMDAwLFxyXG4gICAgICBtaW46IDEwMjQsXHJcbiAgICB9LFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBwYXJpdGlhbFZpc2liaWxpdHlHdXR0ZXI6IDQwLFxyXG4gIH0sXHJcbiAgbW9iaWxlOiB7XHJcbiAgICBicmVha3BvaW50OiB7XHJcbiAgICAgIG1heDogNDY0LFxyXG4gICAgICBtaW46IDAsXHJcbiAgICB9LFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBwYXJpdGlhbFZpc2liaWxpdHlHdXR0ZXI6IDMwLFxyXG4gIH0sXHJcbiAgdGFibGV0OiB7XHJcbiAgICBicmVha3BvaW50OiB7XHJcbiAgICAgIG1heDogMTAyNCxcclxuICAgICAgbWluOiA0NjQsXHJcbiAgICB9LFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBwYXJpdGlhbFZpc2liaWxpdHlHdXR0ZXI6IDMwLFxyXG4gIH0sXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RDYXJkKHtcclxuICB0aXRsZSxcclxuICByYXRpbmcsXHJcbiAgbG9jYXRpb24sXHJcbiAgcHJpY2UsXHJcbiAgcmF0aW5nQ291bnQsXHJcbiAgZ2FsbGVyeSxcclxuICBzbHVnLFxyXG4gIGxpbmssXHJcbiAgZGV2aWNlVHlwZSxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZENhcmRcclxuICAgICAgZmF2b3JpdGU9e1xyXG4gICAgICAgIDxGYXZvdXJpdGVcclxuICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIH1cclxuICAgICAgbG9jYXRpb249e2xvY2F0aW9uLmZvcm1hdHRlZEFkZHJlc3N9XHJcbiAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgcHJpY2U9e2AkJHtwcmljZX0vTmlnaHQgLSBGcmVlIENhbmNlbGxhdGlvbmB9XHJcbiAgICAgIHJhdGluZz17PFJhdGluZyByYXRpbmc9e3JhdGluZ30gcmF0aW5nQ291bnQ9e3JhdGluZ0NvdW50fSB0eXBlPVwiYnVsa1wiIC8+fVxyXG4gICAgICB2aWV3RGV0YWlsc0J0bj17XHJcbiAgICAgICAgPExpbmsgaHJlZj17YCR7bGlua30vW3NsdWddYH0gYXM9e2Ake2xpbmt9LyR7c2x1Z31gfSBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxGaUV4dGVybmFsTGluayAvPiBWaWV3IERldGFpbHNcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgc3NyXHJcbiAgICAgICAgYWRkaXRpb25hbFRyYW5zZnJvbT17MH1cclxuICAgICAgICBhcnJvd3NcclxuICAgICAgICBhdXRvUGxheVNwZWVkPXszMDAwfVxyXG4gICAgICAgIGNvbnRhaW5lckNsYXNzPVwiY29udGFpbmVyXCJcclxuICAgICAgICBkb3RMaXN0Q2xhc3M9XCJcIlxyXG4gICAgICAgIGRyYWdnYWJsZVxyXG4gICAgICAgIGZvY3VzT25TZWxlY3Q9e2ZhbHNlfVxyXG4gICAgICAgIGluZmluaXRlXHJcbiAgICAgICAgaXRlbUNsYXNzPVwiXCJcclxuICAgICAgICByZW5kZXJEb3RzT3V0c2lkZT17ZmFsc2V9XHJcbiAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cclxuICAgICAgICBkZXZpY2VUeXBlPXtkZXZpY2VUeXBlfVxyXG4gICAgICAgIHNob3dEb3RzPXt0cnVlfVxyXG4gICAgICAgIHNsaWRlckNsYXNzPVwiXCJcclxuICAgICAgICBzbGlkZXNUb1NsaWRlPXsxfVxyXG4gICAgICA+XHJcbiAgICAgICAge2dhbGxlcnkubWFwKCh7IHVybCwgdGl0bGUgfSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXt1cmx9XHJcbiAgICAgICAgICAgIGFsdD17dGl0bGV9XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG4gICAgPC9HcmlkQ2FyZD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBUZXh0IGZyb20gJ2NvbXBvbmVudHMvVUkvVGV4dC9UZXh0JztcclxuaW1wb3J0IEJveCBmcm9tICdjb21wb25lbnRzL1VJL0JveC9Cb3gnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJy4uL1Byb2R1Y3RDYXJkL1Byb2R1Y3RDYXJkJztcclxuY29uc3QgTG9hZE1vcmUgPSAoe1xyXG4gIGhhbmRsZUxvYWRNb3JlLFxyXG4gIHNob3dCdXR0b24sXHJcbiAgYnV0dG9uVGV4dCxcclxuICBsb2FkaW5nLFxyXG4gIGxvYWRNb3JlQ29tcG9uZW50LFxyXG4gIGxvYWRNb3JlU3R5bGUsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgISFzaG93QnV0dG9uICYmIChcclxuICAgICAgPEJveCBjbGFzc05hbWU9XCJsb2FkbW9yZV93cmFwcGVyXCIgey4uLmxvYWRNb3JlU3R5bGV9PlxyXG4gICAgICAgIHtsb2FkTW9yZUNvbXBvbmVudCA/IChcclxuICAgICAgICAgIGxvYWRNb3JlQ29tcG9uZW50XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17bG9hZGluZ30gb25DbGljaz17aGFuZGxlTG9hZE1vcmV9PlxyXG4gICAgICAgICAgICB7YnV0dG9uVGV4dCB8fCAnTG9hZCBNb3JlJ31cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgKVxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWN0aW9uR3JpZCh7XHJcbiAgZGF0YSA9IFtdLFxyXG4gIHRvdGFsSXRlbSxcclxuICBsaW1pdCxcclxuICBjb2x1bW5XaWR0aCxcclxuICBwYWdpbmF0aW9uQ29tcG9uZW50LFxyXG4gIGhhbmRsZUxvYWRNb3JlLFxyXG4gIGxvYWRNb3JlQ29tcG9uZW50LFxyXG4gIHBsYWNlaG9sZGVyLFxyXG4gIGxvYWRpbmcsXHJcbiAgYnV0dG9uVGV4dCxcclxuICByb3dTdHlsZSxcclxuICBjb2x1bW5TdHlsZSxcclxuICBsb2FkTW9yZVN0eWxlLFxyXG4gIGxpbmssXHJcbn0pIHtcclxuICBjb25zdCBuID0gbGltaXQgPyBOdW1iZXIobGltaXQpIDogMTtcclxuICBjb25zdCBsaW1pdHMgPSBBcnJheShuKS5maWxsKDApO1xyXG5cclxuICBsZXQgc2hvd0J1dHRvbiA9IGRhdGEubGVuZ3RoIDwgdG90YWxJdGVtO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveCBjbGFzc05hbWU9XCJncmlkX3dyYXBwZXJcIiB7Li4ucm93U3R5bGV9PlxyXG4gICAgICAgIHtkYXRhICYmIGRhdGEubGVuZ3RoXHJcbiAgICAgICAgICA/IGRhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZF9jb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17Y29sdW1uV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgey4uLmNvbHVtblN0eWxlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmQgbGluaz17bGlua30gey4uLml0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgIHtsb2FkaW5nICYmXHJcbiAgICAgICAgICBsaW1pdHMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkX2NvbHVtblwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9e2NvbHVtbldpZHRofVxyXG4gICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICB7Li4uY29sdW1uU3R5bGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cGxhY2Vob2xkZXIgPyBwbGFjZWhvbGRlciA6IDxUZXh0IGNvbnRlbnQ9XCJMb2FkaW5nIC4uLlwiIC8+fVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIHtzaG93QnV0dG9uICYmIChcclxuICAgICAgICA8TG9hZE1vcmVcclxuICAgICAgICAgIHNob3dCdXR0b249e3Nob3dCdXR0b259XHJcbiAgICAgICAgICBoYW5kbGVMb2FkTW9yZT17aGFuZGxlTG9hZE1vcmV9XHJcbiAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgYnV0dG9uVGV4dD17YnV0dG9uVGV4dH1cclxuICAgICAgICAgIGxvYWRNb3JlQ29tcG9uZW50PXtsb2FkTW9yZUNvbXBvbmVudH1cclxuICAgICAgICAgIGxvYWRNb3JlU3R5bGU9e2xvYWRNb3JlU3R5bGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge3BhZ2luYXRpb25Db21wb25lbnQgJiYgKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwicGFnaW5hdGlvbl93cmFwcGVyXCI+e3BhZ2luYXRpb25Db21wb25lbnR9PC9Cb3g+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5TZWN0aW9uR3JpZC5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgdG90YWxJdGVtOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGNvbHVtbldpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLmFycmF5LFxyXG4gIF0pLFxyXG4gIHBhZ2luYXRpb25Db21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50LFxyXG4gIGhhbmRsZUxvYWRNb3JlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBsb2FkTW9yZUNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5lbGVtZW50LFxyXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gIGxpbWl0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGJ1dHRvblRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcm93U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY29sdW1uU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgbG9hZE1vcmVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcblNlY3Rpb25HcmlkLmRlZmF1bHRQcm9wcyA9IHtcclxuICByb3dTdHlsZToge1xyXG4gICAgZmxleEJveDogdHJ1ZSxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICBtcjogWyctMTBweCcsICctMTBweCcsICctMTBweCcsICctMTBweCcsICctMTBweCcsICctMTVweCddLFxyXG4gICAgbWw6IFsnLTEwcHgnLCAnLTEwcHgnLCAnLTEwcHgnLCAnLTEwcHgnLCAnLTEwcHgnLCAnLTE1cHgnXSxcclxuICB9LFxyXG4gIGNvbHVtblN0eWxlOiB7XHJcbiAgICBwcjogWycxMHB4JywgJzEwcHgnLCAnMTBweCcsICcxMHB4JywgJzEwcHgnLCAnMTVweCddLFxyXG4gICAgcGw6IFsnMTBweCcsICcxMHB4JywgJzEwcHgnLCAnMTBweCcsICcxMHB4JywgJzE1cHgnXSxcclxuICB9LFxyXG4gIGxvYWRNb3JlU3R5bGU6IHtcclxuICAgIGZsZXhCb3g6IHRydWUsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBtdDogJzFyZW0nLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBUaGlzIGlzIG91ciBiYXNlIGNvbXBvbmVudCBldmVyeSBjb21wb25lbnRzIG11c3QgYmUgZXh0ZW5kIGl0LiAqL1xyXG5pbXBvcnQge1xyXG4gIHNwYWNlLFxyXG4gIGJvcmRlcnMsXHJcbiAgYm9yZGVyQ29sb3IsXHJcbiAgd2lkdGgsXHJcbiAgbWluV2lkdGgsXHJcbiAgbWF4V2lkdGgsXHJcbiAgaGVpZ2h0LFxyXG4gIG1pbkhlaWdodCxcclxuICBtYXhIZWlnaHQsXHJcbiAgZGlzcGxheSxcclxuICBmb250U2l6ZSxcclxuICBmbGV4LFxyXG4gIG9yZGVyLFxyXG4gIGFsaWduU2VsZixcclxuICBjb2xvcixcclxuICBjb21wb3NlLFxyXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRoZW1lZCA9IGtleSA9PiBwcm9wcyA9PiBwcm9wcy50aGVtZVtrZXldO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJhc2UgPSBjb21wb3NlKFxyXG4gICgpID0+ICh7IGJveFNpemluZzogJ2JvcmRlci1ib3gnIH0pLFxyXG4gIHNwYWNlLFxyXG4gIHdpZHRoLFxyXG4gIG1pbldpZHRoLFxyXG4gIG1heFdpZHRoLFxyXG4gIGhlaWdodCxcclxuICBtaW5IZWlnaHQsXHJcbiAgbWF4SGVpZ2h0LFxyXG4gIGZvbnRTaXplLFxyXG4gIGNvbG9yLFxyXG4gIGZsZXgsXHJcbiAgb3JkZXIsXHJcbiAgYWxpZ25TZWxmLFxyXG4gIGJvcmRlcnMsXHJcbiAgYm9yZGVyQ29sb3IsXHJcbiAgZGlzcGxheVxyXG4pO1xyXG5cclxuYmFzZS5wcm9wVHlwZXMgPSB7XHJcbiAgLi4uZGlzcGxheS5wcm9wVHlwZXMsXHJcbiAgLi4uc3BhY2UucHJvcFR5cGVzLFxyXG4gIC4uLmJvcmRlcnMucHJvcFR5cGVzLFxyXG4gIC4uLmJvcmRlckNvbG9yLnByb3BUeXBlcyxcclxuICAuLi53aWR0aC5wcm9wVHlwZXMsXHJcbiAgLi4uaGVpZ2h0LnByb3BUeXBlcyxcclxuICAuLi5mb250U2l6ZS5wcm9wVHlwZXMsXHJcbiAgLi4uY29sb3IucHJvcFR5cGVzLFxyXG4gIC4uLmZsZXgucHJvcFR5cGVzLFxyXG4gIC4uLm9yZGVyLnByb3BUeXBlcyxcclxuICAuLi5hbGlnblNlbGYucHJvcFR5cGVzLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtcclxuICBmbGV4V3JhcCxcclxuICBmbGV4RGlyZWN0aW9uLFxyXG4gIGFsaWduSXRlbXMsXHJcbiAganVzdGlmeUNvbnRlbnQsXHJcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XHJcbmltcG9ydCB7IGJhc2UsIHRoZW1lZCB9IGZyb20gJy4uL0Jhc2UnO1xyXG5cclxuY29uc3QgQm94V3JhcHBlciA9IHN0eWxlZCgnZGl2JykoXHJcbiAgYmFzZSxcclxuICB0aGVtZWQoJ0JveCcpLFxyXG4gIHByb3BzID0+XHJcbiAgICBwcm9wcy5mbGV4Qm94ICYmXHJcbiAgICBjc3MoXHJcbiAgICAgIHsgZGlzcGxheTogJ2ZsZXgnIH0sXHJcbiAgICAgIGZsZXhXcmFwLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uLFxyXG4gICAgICBhbGlnbkl0ZW1zLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudCxcclxuICAgICAgdGhlbWVkKCdGbGV4Qm94JylcclxuICAgIClcclxuKTtcclxuXHJcbmNvbnN0IEJveCA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPEJveFdyYXBwZXIgey4uLnByb3BzfT57Y2hpbGRyZW59PC9Cb3hXcmFwcGVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm94O1xyXG5cclxuQm94LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG4gIC8qKiBVc2luZyB0aGlzIHByb3BzIHdlIGNhbiBjb252ZXJ0IG91ciBCb3ggQ29tcG9uZW50IHRvIGEgRmxleCBDb250YWluZXIgb3IgQ29tcG9uZW50ICovXHJcbiAgZmxleEJveDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgYXM6IFByb3BUeXBlcy5vbmVPZihbXHJcbiAgICAnZGl2JyxcclxuICAgICdhcnRpY2xlJyxcclxuICAgICdzZWN0aW9uJyxcclxuICAgICdhZGRyZXNzJyxcclxuICAgICdoZWFkZXInLFxyXG4gICAgJ2Zvb3RlcicsXHJcbiAgICAnbmF2JyxcclxuICAgICdtYWluJyxcclxuICBdKSxcclxuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcclxuICAgICksXHJcbiAgXSksXHJcbiAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxyXG4gICAgKSxcclxuICBdKSxcclxuICBmb250U2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcclxuICAgICksXHJcbiAgXSksXHJcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcbiAgICApLFxyXG4gIF0pLFxyXG4gIGZsZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcbiAgICApLFxyXG4gIF0pLFxyXG4gIG9yZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxyXG4gICAgKSxcclxuICBdKSxcclxuICBhbGlnblNlbGY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcbiAgICApLFxyXG4gIF0pLFxyXG4gIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcbiAgICApLFxyXG4gIF0pLFxyXG4gIGJvcmRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcclxuICAgICksXHJcbiAgXSksXHJcbiAgYm9yZGVyVG9wOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxyXG4gICAgKSxcclxuICBdKSxcclxuICBib3JkZXJSaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcclxuICAgICksXHJcbiAgXSksXHJcbiAgYm9yZGVyQm90dG9tOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxyXG4gICAgKSxcclxuICBdKSxcclxuICBib3JkZXJMZWZ0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxyXG4gICAgKSxcclxuICBdKSxcclxuICBib3JkZXJDb2xvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcclxuICAgICksXHJcbiAgXSksXHJcbn07XHJcblxyXG5Cb3guZGVmYXVsdFByb3BzID0ge1xyXG4gIGFzOiAnZGl2JyxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRlbnRMb2FkZXIgZnJvbSAncmVhY3QtY29udGVudC1sb2FkZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpbmdsZVBhZ2VMb2FkZXIgPSBwcm9wcyA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZW50TG9hZGVyXHJcbiAgICAgIGhlaWdodD17MTAwMH1cclxuICAgICAgd2lkdGg9ezgwMH1cclxuICAgICAgc3BlZWQ9ezN9XHJcbiAgICAgIHByaW1hcnlDb2xvcj1cIiNmM2YzZjNcIlxyXG4gICAgICBzZWNvbmRhcnlDb2xvcj1cIiNlOWU4ZWNcIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxyZWN0IHg9XCI1LjAyXCIgeT1cIjE2LjdcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjc4Mi4wMlwiIGhlaWdodD1cIjMxOS41NVwiIC8+XHJcbiAgICAgIDxyZWN0IHg9XCI3Ljc3XCIgeT1cIjM2MC4yMlwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiODIuNDdcIiBoZWlnaHQ9XCIzOVwiIC8+XHJcbiAgICAgIDxyZWN0IHg9XCIyMDcuNzdcIiB5PVwiMzYwLjIyXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCI4Mi40N1wiIGhlaWdodD1cIjM5XCIgLz5cclxuICAgICAgPHJlY3QgeD1cIjEwNC43N1wiIHk9XCIzNjIuMjJcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjgyLjQ3XCIgaGVpZ2h0PVwiMzlcIiAvPlxyXG4gICAgICA8cmVjdCB4PVwiMzA1Ljc3XCIgeT1cIjM2MS4yMlwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiODIuNDdcIiBoZWlnaHQ9XCIzOVwiIC8+XHJcbiAgICAgIDxyZWN0IHg9XCI2MTEuNzhcIiB5PVwiMzU5LjIyXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCI4Mi40N1wiIGhlaWdodD1cIjM5XCIgLz5cclxuICAgICAgPHJlY3QgeD1cIjcwOS43OFwiIHk9XCIzNjAuMjJcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjgyLjQ3XCIgaGVpZ2h0PVwiMzlcIiAvPlxyXG4gICAgICA8cmVjdCB4PVwiOC4wMlwiIHk9XCI0MjEuNzFcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjUyMi4wMVwiIGhlaWdodD1cIjEyMC45NlwiIC8+XHJcbiAgICAgIDxyZWN0IHg9XCI1NTAuMDNcIiB5PVwiNDE4LjcxXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyNDBcIiBoZWlnaHQ9XCIzMDEuNTZcIiAvPlxyXG4gICAgICA8cmVjdCB4PVwiOS4wNFwiIHk9XCI1NjEuNzFcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjEyMC4wNlwiIGhlaWdodD1cIjEyMC45NlwiIC8+XHJcbiAgICAgIDxyZWN0IHg9XCI3LjA2XCIgeT1cIjY5MC43MVwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiNTIyLjAxXCIgaGVpZ2h0PVwiMTIwLjk2XCIgLz5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PVwiMjcyLjI1XCJcclxuICAgICAgICB5PVwiNTYwLjcxXCJcclxuICAgICAgICByeD1cIjBcIlxyXG4gICAgICAgIHJ5PVwiMFwiXHJcbiAgICAgICAgd2lkdGg9XCIxMjAuMDZcIlxyXG4gICAgICAgIGhlaWdodD1cIjEyMC45NlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxyZWN0XHJcbiAgICAgICAgeD1cIjQwNS4wNFwiXHJcbiAgICAgICAgeT1cIjU1OC43MVwiXHJcbiAgICAgICAgcng9XCIwXCJcclxuICAgICAgICByeT1cIjBcIlxyXG4gICAgICAgIHdpZHRoPVwiMTIwLjA2XCJcclxuICAgICAgICBoZWlnaHQ9XCIxMjAuOTZcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9XCIxNDIuMDRcIlxyXG4gICAgICAgIHk9XCI1NTkuNzFcIlxyXG4gICAgICAgIHJ4PVwiMFwiXHJcbiAgICAgICAgcnk9XCIwXCJcclxuICAgICAgICB3aWR0aD1cIjEyMC4wNlwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTIwLjk2XCJcclxuICAgICAgLz5cclxuICAgICAgPHJlY3QgeD1cIjYuMDZcIiB5PVwiODE5LjcxXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCI1MjIuMDFcIiBoZWlnaHQ9XCIxMjAuOTZcIiAvPlxyXG4gICAgPC9Db250ZW50TG9hZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdFBsYWNlaG9sZGVyID0gcHJvcHMgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGVudExvYWRlclxyXG4gICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgd2lkdGg9ezQwMH1cclxuICAgICAgc3BlZWQ9ezJ9XHJcbiAgICAgIGNsYXNzTmFtZT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgcHJpbWFyeUNvbG9yPVwiI2YzZjNmM1wiXHJcbiAgICAgIHNlY29uZGFyeUNvbG9yPVwiI2U5ZThlY1wiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPGNpcmNsZSBjeD1cIjM5LjM0XCIgY3k9XCIxNy4zMlwiIHI9XCIwLjcxXCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD1cIjc1MS40NlwiIGN5PVwiNTguODFcIiByPVwiNDAuMjFcIiAvPlxyXG4gICAgICA8cmVjdCB4PVwiNjA1LjI1XCIgeT1cIjM5LjZcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjY2XCIgaGVpZ2h0PVwiNDFcIiAvPlxyXG4gICAgICA8cmVjdCB4PVwiNjM5LjI1XCIgeT1cIjU5LjZcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjBcIiBoZWlnaHQ9XCIwXCIgLz5cclxuICAgICAgPHJlY3QgeD1cIjUxOC4yNVwiIHk9XCIzOC42XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCI2NlwiIGhlaWdodD1cIjQxXCIgLz5cclxuICAgICAgPHJlY3QgeD1cIjQzNS4yNVwiIHk9XCI0MC42XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCI2NlwiIGhlaWdodD1cIjQxXCIgLz5cclxuICAgICAgPHJlY3QgeD1cIjI2NC4yNVwiIHk9XCIyMTYuNlwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMFwiIGhlaWdodD1cIjBcIiAvPlxyXG4gICAgICA8cmVjdCB4PVwiMzEuMjVcIiB5PVwiNDUxLjk0XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIxNjcuMTdcIiBoZWlnaHQ9XCIxNDcuNjZcIiAvPlxyXG4gICAgICA8cmVjdCB4PVwiMzk5LjI1XCIgeT1cIjUzMS45NFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMFwiIGhlaWdodD1cIjBcIiAvPlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9XCIyMTcuMjVcIlxyXG4gICAgICAgIHk9XCI0NTAuOTRcIlxyXG4gICAgICAgIHJ4PVwiMFwiXHJcbiAgICAgICAgcnk9XCIwXCJcclxuICAgICAgICB3aWR0aD1cIjE3Ni4zM1wiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTQ3LjY2XCJcclxuICAgICAgLz5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PVwiNDE1LjI1XCJcclxuICAgICAgICB5PVwiNDQ5Ljk0XCJcclxuICAgICAgICByeD1cIjBcIlxyXG4gICAgICAgIHJ5PVwiMFwiXHJcbiAgICAgICAgd2lkdGg9XCIxNjcuMTdcIlxyXG4gICAgICAgIGhlaWdodD1cIjE0Ny42NlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxyZWN0XHJcbiAgICAgICAgeD1cIjYwOC4xN1wiXHJcbiAgICAgICAgeT1cIjQ0OC45NFwiXHJcbiAgICAgICAgcng9XCIwXCJcclxuICAgICAgICByeT1cIjBcIlxyXG4gICAgICAgIHdpZHRoPVwiMTcxLjc1XCJcclxuICAgICAgICBoZWlnaHQ9XCIxNDcuNjZcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cmVjdCB4PVwiMzAuMjVcIiB5PVwiNjA5Ljk0XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIxNjcuMTdcIiBoZWlnaHQ9XCIxNDcuNjZcIiAvPlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9XCI0MTcuMjVcIlxyXG4gICAgICAgIHk9XCI2MTIuOTRcIlxyXG4gICAgICAgIHJ4PVwiMFwiXHJcbiAgICAgICAgcnk9XCIwXCJcclxuICAgICAgICB3aWR0aD1cIjE2Ny4xN1wiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTQ3LjY2XCJcclxuICAgICAgLz5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PVwiNjA5LjI1XCJcclxuICAgICAgICB5PVwiNjEyLjk0XCJcclxuICAgICAgICByeD1cIjBcIlxyXG4gICAgICAgIHJ5PVwiMFwiXHJcbiAgICAgICAgd2lkdGg9XCIxNjcuMTdcIlxyXG4gICAgICAgIGhlaWdodD1cIjE0Ny42NlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxyZWN0XHJcbiAgICAgICAgeD1cIjIyMC4yNVwiXHJcbiAgICAgICAgeT1cIjYxMi45NFwiXHJcbiAgICAgICAgcng9XCIwXCJcclxuICAgICAgICByeT1cIjBcIlxyXG4gICAgICAgIHdpZHRoPVwiMTc0LjA0XCJcclxuICAgICAgICBoZWlnaHQ9XCIxNDcuNjZcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cmVjdCB4PVwiOS42M1wiIHk9XCIxOC42MVwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMzgxLjAzXCIgaGVpZ2h0PVwiMTg2XCIgLz5cclxuICAgICAgPHJlY3QgeD1cIjgwLjYzXCIgeT1cIjEzMi42MVwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMFwiIGhlaWdodD1cIjBcIiAvPlxyXG4gICAgICA8cmVjdCB4PVwiOS42M1wiIHk9XCIyMTguNjFcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjE4M1wiIGhlaWdodD1cIjI1XCIgLz5cclxuICAgICAgPHJlY3QgeD1cIjguNjNcIiB5PVwiMjU4LjYxXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIzODFcIiBoZWlnaHQ9XCI0M1wiIC8+XHJcbiAgICAgIDxyZWN0IHg9XCI4LjYzXCIgeT1cIjMxOS42MVwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMjA0XCIgaGVpZ2h0PVwiMjRcIiAvPlxyXG4gICAgICA8cmVjdCB4PVwiMjI5LjYzXCIgeT1cIjMyMC42MVwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMTY0LjQ1XCIgaGVpZ2h0PVwiMjNcIiAvPlxyXG4gICAgICA8cmVjdCB4PVwiMzM2LjYzXCIgeT1cIjMyOC42MVwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMFwiIGhlaWdodD1cIjBcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PVwiMjAuNTZcIiBjeT1cIjM3MC41NFwiIHI9XCIxMS45M1wiIC8+XHJcbiAgICAgIDxjaXJjbGUgY3g9XCI1My42M1wiIGN5PVwiMzc2LjYxXCIgcj1cIjFcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PVwiNTIuNTZcIiBjeT1cIjM3MC41NFwiIHI9XCIxMS45M1wiIC8+XHJcbiAgICAgIDxjaXJjbGUgY3g9XCI4MS41NlwiIGN5PVwiMzcwLjU0XCIgcj1cIjExLjkzXCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD1cIjExMi41NlwiIGN5PVwiMzcxLjU0XCIgcj1cIjExLjkzXCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD1cIjE0MS41NlwiIGN5PVwiMzcxLjU0XCIgcj1cIjExLjkzXCIgLz5cclxuICAgICAgPHJlY3QgeD1cIjE2OC42M1wiIHk9XCIzNjAuNjFcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjEwNFwiIGhlaWdodD1cIjI0XCIgLz5cclxuICAgICAgPHJlY3QgeD1cIjIxMy42M1wiIHk9XCIzOTcuNjFcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjBcIiBoZWlnaHQ9XCIwXCIgLz5cclxuICAgIDwvQ29udGVudExvYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVQaWNMb2FkZXIgPSAoKSA9PiAoXHJcbiAgPENvbnRlbnRMb2FkZXJcclxuICAgIGhlaWdodD17MTgwfVxyXG4gICAgd2lkdGg9ezE4MH1cclxuICAgIHNwZWVkPXszfVxyXG4gICAgcHJpbWFyeUNvbG9yPVwiI2YzZjNmM1wiXHJcbiAgICBzZWNvbmRhcnlDb2xvcj1cIiNlY2ViZWJcIlxyXG4gID5cclxuICAgIDxjaXJjbGUgY3g9XCI3NlwiIGN5PVwiNjBcIiByPVwiMVwiIC8+XHJcbiAgICA8Y2lyY2xlIGN4PVwiOTBcIiBjeT1cIjUwXCIgcj1cIjQxXCIgLz5cclxuICAgIDxyZWN0IHg9XCIxNlwiIHk9XCI5NFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMTQ5XCIgaGVpZ2h0PVwiODBcIiAvPlxyXG4gIDwvQ29udGVudExvYWRlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZUNhcmRMb2FkZXIgPSAoKSA9PiAoXHJcbiAgPENvbnRlbnRMb2FkZXJcclxuICAgIGhlaWdodD17MjcwfVxyXG4gICAgd2lkdGg9ezIxNX1cclxuICAgIHNwZWVkPXsyfVxyXG4gICAgcHJpbWFyeUNvbG9yPVwiI2YzZjNmM1wiXHJcbiAgICBzZWNvbmRhcnlDb2xvcj1cIiNlY2ViZWJcIlxyXG4gID5cclxuICAgIDxjaXJjbGUgY3g9XCIxMzhcIiBjeT1cIjgwXCIgcj1cIjFcIiAvPlxyXG4gICAgPHJlY3QgeD1cIjg3XCIgeT1cIjI0XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIwXCIgaGVpZ2h0PVwiMFwiIC8+XHJcbiAgICA8cmVjdCB4PVwiODdcIiB5PVwiMjRcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjBcIiBoZWlnaHQ9XCIwXCIgLz5cclxuICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjIyM1wiIGhlaWdodD1cIjI3N1wiIC8+XHJcbiAgPC9Db250ZW50TG9hZGVyPlxyXG4pO1xyXG4iLCJpbXBvcnQgJ3JlYWN0LWRhdGVzL2luaXRpYWxpemUnO1xyXG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXIgfSBmcm9tICdyZWFjdC1kYXRlcyc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFJlYWN0RGF0ZXNTdHlsZVdyYXBwZXIgfSBmcm9tICcuL1JlYWN0RGF0ZXMuc3R5bGUnO1xyXG4vKlxyXG4gKiBGb3IgTG9jYWxpemF0aW9uIGVuYWJsZSB0aGlzIGNvZGUgW2V4YW1wbGUgOiBGcmVuY2ggbGFuZ3VhZ2UgYXMgXCJmclwiXVxyXG4gKi9cclxuLy8gaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG4vLyBpbXBvcnQgJ21vbWVudC9sb2NhbGUvZnInO1xyXG5cclxuY2xhc3MgRGF0ZVJhbmdlUGlja2VyQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgY29uc3Qgc2VwYXJhdG9yID1cclxuICAgICAgdGhpcy5wcm9wcy5pdGVtICYmIHRoaXMucHJvcHMuaXRlbS5zZXBhcmF0b3JcclxuICAgICAgICA/IHRoaXMucHJvcHMuaXRlbS5zZXBhcmF0b3JcclxuICAgICAgICA6ICcvJztcclxuICAgIGNvbnN0IGRhdGVGb3JtYXQgPVxyXG4gICAgICB0aGlzLnByb3BzLml0ZW0gJiYgdGhpcy5wcm9wcy5pdGVtLmZvcm1hdFxyXG4gICAgICAgID8gdGhpcy5wcm9wcy5pdGVtLmZvcm1hdFxyXG4gICAgICAgIDogJ2xsbGwnO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZm9jdXNlZElucHV0OiBudWxsLFxyXG4gICAgICBzdGFydERhdGU6IHRoaXMucHJvcHMuc3RhcnREYXRlID8gdGhpcy5wcm9wcy5zdGFydERhdGUgOiBudWxsLFxyXG4gICAgICBlbmREYXRlOiB0aGlzLnByb3BzLmVuZERhdGUgPyB0aGlzLnByb3BzLmVuZERhdGUgOiBudWxsLFxyXG4gICAgICBkYXRlRm9ybWF0LFxyXG4gICAgICBzZXBhcmF0b3IsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5vbkRhdGVDaGFuZ2VGdW5jID0gdGhpcy5vbkRhdGVDaGFuZ2VGdW5jLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uRm9jdXNDaGFuZ2VGdW5jID0gdGhpcy5vbkZvY3VzQ2hhbmdlRnVuYy5iaW5kKHRoaXMpO1xyXG4gICAgLypcclxuICAgICAqIEZvciBMb2NhbGl6YXRpb24gZW5hYmxlIHRoaXMgY29kZSBbZXhhbXBsZSA6IEZyZW5jaCBsYW5ndWFnZSBhcyBcImZyXCJdXHJcbiAgICAgKi9cclxuICAgIC8vIG1vbWVudC5sb2NhbGUoJ2ZyJyk7XHJcbiAgfVxyXG5cclxuICBvbkRhdGVDaGFuZ2VGdW5jID0gKHsgc3RhcnREYXRlLCBlbmREYXRlIH0pID0+IHtcclxuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGUsIGVuZERhdGUgfSk7XHJcbiAgICBpZiAoc3RhcnREYXRlICE9PSBudWxsICYmIGVuZERhdGUgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5wcm9wcy51cGRhdGVTZWFyY2hEYXRhKHtcclxuICAgICAgICBzZXRTdGFydERhdGU6IHN0YXJ0RGF0ZS5mb3JtYXQoZGF0ZUZvcm1hdCksXHJcbiAgICAgICAgc2V0RW5kRGF0ZTogZW5kRGF0ZS5mb3JtYXQoZGF0ZUZvcm1hdCksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uRm9jdXNDaGFuZ2VGdW5jID0gKGZvY3VzZWRJbnB1dCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkSW5wdXQgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBmb2N1c2VkSW5wdXQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIC8vIERhdGVSYW5nZVBpY2tlckJveCBwcm9wcyBsaXN0XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgc3RhcnREYXRlSWQsXHJcbiAgICAgIGVuZERhdGVJZCxcclxuICAgICAgc3RhcnREYXRlUGxhY2Vob2xkZXJUZXh0LFxyXG4gICAgICBlbmREYXRlUGxhY2Vob2xkZXJUZXh0LFxyXG4gICAgICBkaXNhYmxlZCxcclxuICAgICAgc2hvd0NsZWFyRGF0ZXMsXHJcbiAgICAgIGlzUlRMLFxyXG4gICAgICBvcmllbnRhdGlvbixcclxuICAgICAgYW5jaG9yRGlyZWN0aW9uLFxyXG4gICAgICB3aXRoUG9ydGFsLFxyXG4gICAgICB3aXRoRnVsbFNjcmVlblBvcnRhbCxcclxuICAgICAgc21hbGwsXHJcbiAgICAgIGJsb2NrLFxyXG4gICAgICBudW1iZXJPZk1vbnRocyxcclxuICAgICAgcmVndWxhcixcclxuICAgICAgbm9Cb3JkZXIsXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAvLyBBZGQgYWxsIGNsYXNzcyB0byBhbiBhcnJheSAqKioqKioqKioqKioqKlxyXG4gICAgY29uc3QgYWRkQWxsQ2xhc3NlcyA9IFsnZGF0ZV9waWNrZXInXTtcclxuICAgIC8vIGNsYXNzTmFtZSBwcm9wIGNoZWNraW5nICoqKioqKioqKioqKioqXHJcbiAgICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgIGFkZEFsbENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlYWN0LURhdGVzIERhdGVSYW5nZVBpY2tlciBQcm9wcyBMaXN0XHJcbiAgICBjb25zdCBkZWZhdWx0Q2FsZW5kZXJQcm9wcyA9IHtcclxuICAgICAgc3RhcnREYXRlSWQ6IHN0YXJ0RGF0ZUlkID8gc3RhcnREYXRlSWQgOiAnc3RhcnRfdW5pcXVlX2lkJyxcclxuICAgICAgZW5kRGF0ZUlkOiBlbmREYXRlSWQgPyBlbmREYXRlSWQgOiAnZW5kX2RhdGVfdW5pcXVlX2lkJyxcclxuICAgICAgc3RhcnREYXRlLFxyXG4gICAgICBlbmREYXRlLFxyXG4gICAgICBmb2N1c2VkSW5wdXQsXHJcbiAgICAgIG9uRm9jdXNDaGFuZ2U6IHRoaXMub25Gb2N1c0NoYW5nZUZ1bmMsXHJcbiAgICAgIG9uRGF0ZXNDaGFuZ2U6IHRoaXMub25EYXRlQ2hhbmdlRnVuYyxcclxuICAgICAgc3RhcnREYXRlUGxhY2Vob2xkZXJUZXh0LFxyXG4gICAgICBlbmREYXRlUGxhY2Vob2xkZXJUZXh0LFxyXG4gICAgICBkaXNhYmxlZCxcclxuICAgICAgaXNSVEwsXHJcbiAgICAgIHNob3dDbGVhckRhdGVzOiBzaG93Q2xlYXJEYXRlcyA/IHNob3dDbGVhckRhdGVzIDogZmFsc2UsXHJcbiAgICAgIG9yaWVudGF0aW9uLFxyXG4gICAgICBhbmNob3JEaXJlY3Rpb24sXHJcbiAgICAgIHdpdGhQb3J0YWwsXHJcbiAgICAgIHdpdGhGdWxsU2NyZWVuUG9ydGFsLFxyXG4gICAgICBzbWFsbCxcclxuICAgICAgbnVtYmVyT2ZNb250aHM6IG51bWJlck9mTW9udGhzID8gbnVtYmVyT2ZNb250aHMgOiAyLFxyXG4gICAgICBibG9jayxcclxuICAgICAgcmVndWxhcixcclxuICAgICAgbm9Cb3JkZXIsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdERhdGVzU3R5bGVXcmFwcGVyIGNsYXNzTmFtZT17YWRkQWxsQ2xhc3Nlcy5qb2luKCcgJyl9PlxyXG4gICAgICAgIDxEYXRlUmFuZ2VQaWNrZXIgey4uLmRlZmF1bHRDYWxlbmRlclByb3BzfSAvPlxyXG4gICAgICA8L1JlYWN0RGF0ZXNTdHlsZVdyYXBwZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuRGF0ZVJhbmdlUGlja2VyQm94LnByb3BUeXBlcyA9IHtcclxuICAvKiogc3RhcnREYXRlSWQgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXHJcbiAgc3RhcnREYXRlSWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKiogZW5kRGF0ZUlkIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xyXG4gIGVuZERhdGVJZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLCAvL1xyXG4gIC8qKiBzdGFydERhdGVQbGFjZWhvbGRlclRleHQgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXHJcbiAgc3RhcnREYXRlUGxhY2Vob2xkZXJUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKiBlbmREYXRlUGxhY2Vob2xkZXJUZXh0IG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xyXG4gIGVuZERhdGVQbGFjZWhvbGRlclRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqIGRpc2FibGVkIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xyXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5ib29sLFxyXG4gICAgUHJvcFR5cGVzLm9uZU9mKFsnU1RBUlRfREFURScsICdFTkRfREFURSddKSxcclxuICBdKSxcclxuXHJcbiAgLyoqIHNob3dDbGVhckRhdGVzIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xyXG4gIHNob3dDbGVhckRhdGVzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKiogaXNSVEwgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXHJcbiAgaXNSVEw6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKiBvcmllbnRhdGlvbiBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cclxuICBvcmllbnRhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddKSxcclxuICAvKiogYW5jaG9yRGlyZWN0aW9uIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xyXG4gIGFuY2hvckRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCddKSxcclxuICAvKiogd2l0aFBvcnRhbCBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cclxuICB3aXRoUG9ydGFsOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKiogd2l0aEZ1bGxTY3JlZW5Qb3J0YWwgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXHJcbiAgd2l0aEZ1bGxTY3JlZW5Qb3J0YWw6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKiBzbWFsbCBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cclxuICBzbWFsbDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqIG51bWJlck9mTW9udGhzIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xyXG4gIG51bWJlck9mTW9udGhzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIC8qKiBibG9jayBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cclxuICBibG9jazogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqIHJlZ3VsYXIgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXHJcbiAgcmVndWxhcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqIG5vQm9yZGVyIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xyXG4gIG5vQm9yZGVyOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKiogdXBkYXRlU2VhcmNoRGF0YSBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgdG8gc2VuZCBjb21wb25lbnQgZGF0YSB0byBwYXJlbnQgY29tcG9uZW50ICovXHJcbiAgdXBkYXRlU2VhcmNoRGF0YTogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlUmFuZ2VQaWNrZXJCb3g7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgV2l0aERpcmVjdGlvbiBmcm9tICdsaWJyYXJ5L2hlbHBlcnMvcnRsJztcclxuXHJcbmNvbnN0IFJlYWN0RGF0ZXNTdHlsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHJcbiAgLmFudC1mb3JtLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbnQtZm9ybS1pdGVtLWxhYmVsIHtcclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFJlYWN0RGF0ZVdyYXBwZXIgPSBDb21wb25lbnROYW1lID0+IHN0eWxlZChDb21wb25lbnROYW1lKWBcclxuICAuaXNvUmVhY3REYXRlIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgLkRhdGVJbnB1dF9fZGlzcGxheS10ZXh0LS1mb2N1c2VkIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLkNhbGVuZGFyRGF5LS1zZWxlY3RlZC1zdGFydCxcclxuICAgIC5DYWxlbmRhckRheS0tc2VsZWN0ZWQtZW5kLFxyXG4gICAgLkNhbGVuZGFyRGF5LS1zZWxlY3RlZCB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5DYWxlbmRhckRheS0tc2VsZWN0ZWQtc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5DYWxlbmRhckRheS0taG92ZXJlZC1zcGFuLFxyXG4gICAgLkNhbGVuZGFyRGF5LS1hZnRlci1ob3ZlcmVkLXN0YXJ0IHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLkRheVBpY2tlcktleWJvYXJkU2hvcnRjdXRzX19zaG93LS1ib3R0b20tcmlnaHQge1xyXG4gICAgICBib3JkZXItdG9wOiAyNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5EYXlQaWNrZXItLWhvcml6b250YWwge1xyXG4gICAgICAuRGF5UGlja2VyTmF2aWdhdGlvbi0taG9yaXpvbnRhbCB7XHJcbiAgICAgICAgLkRheVBpY2tlck5hdmlnYXRpb25fX3ByZXYsXHJcbiAgICAgICAgLkRheVBpY2tlck5hdmlnYXRpb25fX25leHQge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06ICR7cHJvcHMgPT5cclxuICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ3JvdGF0ZSgxODBkZWcpJyA6ICdpbmhlcml0J307XHJcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiAke3Byb3BzID0+XHJcbiAgICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyb3RhdGUoMTgwZGVnKScgOiAnaW5oZXJpdCd9O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiAke3Byb3BzID0+XHJcbiAgICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyb3RhdGUoMTgwZGVnKScgOiAnaW5oZXJpdCd9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5EYXRlUmFuZ2VQaWNrZXJJbnB1dCB7XHJcbiAgICAgIC5EYXRlUmFuZ2VQaWNrZXJJbnB1dF9fYXJyb3cge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiAke3Byb3BzID0+XHJcbiAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAncm90YXRlKDE4MGRlZyknIDogJ2luaGVyaXQnfTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiAke3Byb3BzID0+XHJcbiAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAncm90YXRlKDE4MGRlZyknIDogJ2luaGVyaXQnfTtcclxuICAgICAgICB0cmFuc2Zvcm06ICR7cHJvcHMgPT5cclxuICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyb3RhdGUoMTgwZGVnKScgOiAnaW5oZXJpdCd9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUmVhY3REYXRlc1dyYXBwZXIgPSBXaXRoRGlyZWN0aW9uKFJlYWN0RGF0ZVdyYXBwZXIpO1xyXG5cclxuZXhwb3J0IHsgUmVhY3REYXRlc1N0eWxlV3JhcHBlciwgUmVhY3REYXRlc1dyYXBwZXIgfTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHVzZVRvZ2dsZSBmcm9tICcuL3VzZVRvZ2dsZSc7XHJcbmltcG9ydCBGYXZvcml0ZVdyYXBwZXIgZnJvbSAnLi9GYXZvcml0ZS5zdHlsZSc7XHJcblxyXG5jb25zdCBGYXZvcml0ZSA9ICh7IGNsYXNzTmFtZSwgY29udGVudCwgb25DbGljayB9KSA9PiB7XHJcbiAgLy8gdXNlIHRvZ2dsZSBob29rc1xyXG4gIGNvbnN0IFt0b2dnbGVWYWx1ZSwgdG9nZ2xlSGFuZGxlcl0gPSB1c2VUb2dnbGUoZmFsc2UpO1xyXG5cclxuICAvLyBBZGQgYWxsIGNsYXNzcyB0byBhbiBhcnJheVxyXG4gIGNvbnN0IGFkZEFsbENsYXNzID0gWydmYXZvcml0ZSddO1xyXG5cclxuICAvLyBjbGFzc05hbWUgcHJvcCBjaGVja2luZ1xyXG4gIGlmIChjbGFzc05hbWUpIHtcclxuICAgIGFkZEFsbENsYXNzLnB1c2goY2xhc3NOYW1lKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRlbENsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgdG9nZ2xlSGFuZGxlcigpO1xyXG4gICAgb25DbGljayghdG9nZ2xlVmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmF2b3JpdGVXcmFwcGVyXHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRlbENsaWNrfVxyXG4gICAgICBjbGFzc05hbWU9e2Ake2FkZEFsbENsYXNzLmpvaW4oJyAnKX0gJHt0b2dnbGVWYWx1ZSA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgID5cclxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxOC42NCAxOC4yMzJcIj5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk02MC4xNiw1NmgtLjA0YTQuNTUxLDQuNTUxLDAsMCwwLTMuOCwyLjA4QTQuNTUxLDQuNTUxLDAsMCwwLDUyLjUyLDU2aC0uMDRBNC41MjIsNC41MjIsMCwwLDAsNDgsNjAuNTJhOS43MzcsOS43MzcsMCwwLDAsMS45MTIsNS4zMDhBMzMuNTA2LDMzLjUwNiwwLDAsMCw1Ni4zMiw3MmEzMy41MDYsMzMuNTA2LDAsMCwwLDYuNDA4LTYuMTcyQTkuNzM3LDkuNzM3LDAsMCwwLDY0LjY0LDYwLjUyLDQuNTIyLDQuNTIyLDAsMCwwLDYwLjE2LDU2WlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTQ3IC01NSlcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgICA8c3Bhbj57Y29udGVudH08L3NwYW4+XHJcbiAgICA8L0Zhdm9yaXRlV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuRmF2b3JpdGUucHJvcFR5cGVzID0ge1xyXG4gIC8qKiBDbGFzc05hbWUgb2YgdGhlIEZhdm9yaXRlICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKiBjb250ZW50IG9mIHRoZSBGYXZvcml0ZSAqL1xyXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cclxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgLlxyXG4gICAqL1xyXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuRmF2b3JpdGUuZGVmYXVsdFByb3BzID0ge1xyXG4gIG9uQ2xpY2s6ICgpID0+IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGU7XHJcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuY29uc3QgYWRkQW5pbWF0aW9uID0ga2V5ZnJhbWVzYFxyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjM0KSByb3RhdGVZKDkwZGVnKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCByZW1vdmVBbmltYXRpb24gPSBrZXlmcmFtZXNgXHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjM0KSByb3RhdGVZKDkwZGVnKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWSgwKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBBZGRBbmltYXRpb24gPSBjc3NgXHJcbiAgYW5pbWF0aW9uOiAke2FkZEFuaW1hdGlvbn0gMC40cyBjdWJpYy1iZXppZXIoMC4zOCwgMC43LCAwLjYsIDAuMjkpO1xyXG5gO1xyXG5cclxuY29uc3QgUmVtb3ZlQW5pbWF0aW9uID0gY3NzYFxyXG4gIGFuaW1hdGlvbjogJHtyZW1vdmVBbmltYXRpb259IDAuNTVzIGN1YmljLWJlemllcigwLjM4LCAwLjcsIDAuNiwgMC4yOSk7XHJcbmA7XHJcblxyXG5jb25zdCBGYXZvcml0ZVdyYXBwZXIgPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgc3ZnIHtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgJHtSZW1vdmVBbmltYXRpb259XHJcbiAgICBwYXRoIHtcclxuICAgICAgZmlsbDogJHt0aGVtZUdldCgnY29sb3IuNScsICdyZ2JhKDAsIDAsIDAsIDAuMjUpJyl9O1xyXG4gICAgICBzdHJva2U6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcclxuICAgICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGZpbGwgMXMgZWFzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuYWN0aXZlIHtcclxuICAgIHN2ZyB7XHJcbiAgICAgICR7QWRkQW5pbWF0aW9ufTtcclxuICAgICAgcGF0aCB7XHJcbiAgICAgICAgZmlsbDogJHt0aGVtZUdldCgnY29sb3IuNCcsICcjRkM1QzYzJyl9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVXcmFwcGVyO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VUb2dnbGUgPSBpbml0aWFsVmFsdWUgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcclxuICBjb25zdCB0b2dnbGVyID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0VmFsdWUodmFsdWUgPT4gIXZhbHVlKSwgW10pO1xyXG4gIHJldHVybiBbdmFsdWUsIHRvZ2dsZXJdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlVG9nZ2xlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQsIE1pbnVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBJbnB1dEluY0RlY1dyYXBwZXIgZnJvbSAnLi9JbnB1dEluY0RlYy5zdHlsZSc7XHJcblxyXG5jb25zdCBJbnB1dEluY0RlYyA9ICh7IGNsYXNzTmFtZSwgaW5jcmVtZW50LCBkZWNyZW1lbnQsIC4uLnByb3BzIH0pID0+IHtcclxuICBjb25zdCBhZGRBbGxDbGFzc2VzID0gWydxdWFudGl0eSddO1xyXG4gIGlmIChjbGFzc05hbWUpIHtcclxuICAgIGFkZEFsbENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbnB1dEluY0RlY1dyYXBwZXIgY2xhc3NOYW1lPXthZGRBbGxDbGFzc2VzLmpvaW4oJyAnKX0+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGRlY0J0blwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtkZWNyZW1lbnR9PlxyXG4gICAgICAgIDxNaW51c091dGxpbmVkIC8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8SW5wdXQgY2xhc3NOYW1lPVwicW50LWlucHV0XCIgdHlwZT1cIm51bWJlclwiIHsuLi5wcm9wc30gLz5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaW5jQnRuXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2luY3JlbWVudH0+XHJcbiAgICAgICAgPFBsdXNPdXRsaW5lZCAvPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvSW5wdXRJbmNEZWNXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dEluY0RlYztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBJbnB1dEluY0RlY1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDRweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICBpbnB1dFt0eXBlPSdudW1iZXInXSB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTRweCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyN3B4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbiAgICAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAmLmRlY0J0biB7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAmLmluY0J0biB7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIsXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dEluY0RlY1dyYXBwZXI7XHJcbiIsIi8vIFRoZSBwb3J0YWwgZWxlbWVudCBpcyBpbnNlcnRlZCBpbiB0aGUgRE9NIHRyZWUgYWZ0ZXJcclxuLy8gdGhlIE1vZGFsJ3MgY2hpbGRyZW4gYXJlIG1vdW50ZWQsIG1lYW5pbmcgdGhhdCBjaGlsZHJlblxyXG4vLyB3aWxsIGJlIG1vdW50ZWQgb24gYSBkZXRhY2hlZCBET00gbm9kZS4gSWYgYSBjaGlsZFxyXG4vLyBjb21wb25lbnQgcmVxdWlyZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIERPTSB0cmVlXHJcbi8vIGltbWVkaWF0ZWx5IHdoZW4gbW91bnRlZCwgZm9yIGV4YW1wbGUgdG8gbWVhc3VyZSBhXHJcbi8vIERPTSBub2RlLCBvciB1c2VzICdhdXRvRm9jdXMnIGluIGEgZGVzY2VuZGFudCwgYWRkXHJcbi8vIHN0YXRlIHRvIE1vZGFsIGFuZCBvbmx5IHJlbmRlciB0aGUgY2hpbGRyZW4gd2hlbiBNb2RhbFxyXG4vLyBpcyBpbnNlcnRlZCBpbiB0aGUgRE9NIHRyZWUuXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRhbCh7IGNoaWxkcmVuLCByZW5kZXJlcklkIH0pIHtcclxuICBjb25zdCBbY29udGFpbmVyRWxdID0gdXNlU3RhdGUoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgcG9ydGFsUm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJlbmRlcmVySWQpIHx8IGRvY3VtZW50LmJvZHk7XHJcbiAgICBwb3J0YWxSb290LmFwcGVuZENoaWxkKGNvbnRhaW5lckVsKTtcclxuICAgIHJldHVybiAoKSA9PiBwb3J0YWxSb290LnJlbW92ZUNoaWxkKGNvbnRhaW5lckVsKTtcclxuICB9KTtcclxuICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKGNoaWxkcmVuLCBjb250YWluZXJFbCk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgSW9Jb3NTdGFyLCBJb0lvc1N0YXJPdXRsaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5cclxuY29uc3QgUmF0aW5nID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgcmF0aW5nLCByYXRpbmdDb3VudCwgdHlwZSwgcmF0aW5nRmllbGROYW1lIH0gPSBwcm9wcztcclxuICBsZXQgaSwgZmxvb3JWYWx1ZTtcclxuICBsZXQgcmF0aW5nVmlldyA9IFtdO1xyXG4gIGlmIChyYXRpbmcgJiYgcmF0aW5nICE9PSAwKSB7XHJcbiAgICBmbG9vclZhbHVlID0gTWF0aC5mbG9vcihyYXRpbmcpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICBpZiAoaSA8IGZsb29yVmFsdWUpIHtcclxuICAgICAgICByYXRpbmdWaWV3LnB1c2goPElvSW9zU3RhciBrZXk9e2l9IC8+KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByYXRpbmdWaWV3LnB1c2goPElvSW9zU3Rhck91dGxpbmUga2V5PXtpfSAvPik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IGxpc3RpbmdDb25kaXRpb247XHJcbiAgaWYgKHJhdGluZyAmJiByYXRpbmcgPT09IDUpIHtcclxuICAgIGxpc3RpbmdDb25kaXRpb24gPSAnQXdlc29tZSc7XHJcbiAgfSBlbHNlIGlmICg0IDw9IHJhdGluZyAmJiByYXRpbmcgPCA1KSB7XHJcbiAgICBsaXN0aW5nQ29uZGl0aW9uID0gJ0dvb2QnO1xyXG4gIH0gZWxzZSBpZiAoMyA8PSByYXRpbmcgJiYgcmF0aW5nIDwgNCkge1xyXG4gICAgbGlzdGluZ0NvbmRpdGlvbiA9ICdBdmVyYWdlJztcclxuICB9IGVsc2UgaWYgKDIgPD0gcmF0aW5nICYmIHJhdGluZyA8IDMpIHtcclxuICAgIGxpc3RpbmdDb25kaXRpb24gPSAnQmFkJztcclxuICB9IGVsc2UgaWYgKHJhdGluZyA+PSAxKSB7XHJcbiAgICBsaXN0aW5nQ29uZGl0aW9uID0gJ1RlcnJpYmxlJztcclxuICB9IGVsc2Uge1xyXG4gICAgbGlzdGluZ0NvbmRpdGlvbiA9ICcnO1xyXG4gIH1cclxuXHJcbiAgbGV0IHNob3dSYXRpbmdDb3VudDtcclxuICBpZiAocmF0aW5nQ291bnQpIHtcclxuICAgIHNob3dSYXRpbmdDb3VudCA9IGAoYCArIHJhdGluZ0NvdW50ICsgYClgO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzaG93UmF0aW5nQ291bnQgPSAnJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7dHlwZSAmJiB0eXBlID09PSAnYnVsaycgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxzcGFuPntyYXRpbmdWaWV3fTwvc3Bhbj5cclxuICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgIHtgICR7bGlzdGluZ0NvbmRpdGlvbn1gfSB7YCR7c2hvd1JhdGluZ0NvdW50fWB9XHJcbiAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPHNwYW4+e3JhdGluZ0ZpZWxkTmFtZX08L3NwYW4+IHtyYXRpbmdWaWV3fVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcblJhdGluZy5wcm9wVHlwZXMgPSB7XHJcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHJhdGluZ0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHJhdGluZzogUHJvcFR5cGVzLm51bWJlcixcclxuICByYXRpbmdGaWVsZE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYXRpbmc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1xyXG4gIGZvbnRGYW1pbHksXHJcbiAgZm9udFdlaWdodCxcclxuICB0ZXh0QWxpZ24sXHJcbiAgbGluZUhlaWdodCxcclxuICBsZXR0ZXJTcGFjaW5nLFxyXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xyXG5pbXBvcnQgeyBiYXNlLCB0aGVtZWQgfSBmcm9tICcuLi9CYXNlJztcclxuXHJcbmNvbnN0IFRleHRXcmFwcGVyID0gc3R5bGVkKCdwJykoXHJcbiAgYmFzZSxcclxuICBmb250RmFtaWx5LFxyXG4gIGZvbnRXZWlnaHQsXHJcbiAgdGV4dEFsaWduLFxyXG4gIGxpbmVIZWlnaHQsXHJcbiAgbGV0dGVyU3BhY2luZyxcclxuICB0aGVtZWQoJ1RleHQnKVxyXG4pO1xyXG5cclxuY29uc3QgVGV4dCA9ICh7IGNvbnRlbnQsIC4uLnByb3BzIH0pID0+IChcclxuICA8VGV4dFdyYXBwZXIgey4uLnByb3BzfT57Y29udGVudH08L1RleHRXcmFwcGVyPlxyXG4pO1xyXG5cclxuVGV4dC5wcm9wVHlwZXMgPSB7XHJcbiAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBhczogUHJvcFR5cGVzLnN0cmluZyxcclxuICBmb250RmFtaWx5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxyXG4gICAgKSxcclxuICBdKSxcclxuICBmb250V2VpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxyXG4gICAgKSxcclxuICBdKSxcclxuICB0ZXh0QWxpZ246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcbiAgICApLFxyXG4gIF0pLFxyXG4gIGxpbmVIZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcbiAgICApLFxyXG4gIF0pLFxyXG4gIGxldHRlclNwYWNpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcbiAgICApLFxyXG4gIF0pLFxyXG4gIC4uLmJhc2UucHJvcFR5cGVzLFxyXG59O1xyXG5cclxuVGV4dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYXM6ICdwJyxcclxuICBtOiAwLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFdyYXBwZXIsIHsgQ29udGFpbmVyLCBMZWZ0U2lkZSwgUmlnaHRTaWRlIH0gZnJvbSAnLi9Ub29sYmFyLnN0eWxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvb2xiYXIoeyBsZWZ0LCByaWdodCwgY2xhc3NOYW1lLCBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgYWRkQWxsQ2xhc3NlcyA9IFsndG9vbGJhciddO1xyXG4gIGlmIChjbGFzc05hbWUpIHtcclxuICAgIGFkZEFsbENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyIGNsYXNzTmFtZT17YWRkQWxsQ2xhc3Nlcy5qb2luKCcgJyl9PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIHtsZWZ0ICYmIDxMZWZ0U2lkZSBjbGFzc05hbWU9XCJ0b29sYmFyX2xlZnRfX3NpZGVcIj57bGVmdH08L0xlZnRTaWRlPn1cclxuICAgICAgICB7cmlnaHQgJiYgKFxyXG4gICAgICAgICAgPFJpZ2h0U2lkZSBjbGFzc05hbWU9XCJ0b29sYmFyX3JpZ2h0X19zaWRlXCI+e3JpZ2h0fTwvUmlnaHRTaWRlPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2NoaWxkcmVuICYmIGNoaWxkcmVufVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDcwcHg7XHJcbiAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IChwcm9wcy5iZyA/IHByb3BzLmJnIDogJyNmZmYnKX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDE5MjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMZWZ0U2lkZSA9IHN0eWxlZC5kaXZgYDtcclxuZXhwb3J0IGNvbnN0IFJpZ2h0U2lkZSA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUG9ydGFsIGZyb20gJy4uL1BvcnRhbC9Qb3J0YWwnO1xyXG5pbXBvcnQgeyBXcmFwcGVyLCBDb250YWluZXIgfSBmcm9tICcuL1ZpZXdXaXRoUG9wdXAuc3R5bGUnO1xyXG5pbXBvcnQgeyB1c2VPbkNsaWNrT3V0c2lkZSB9IGZyb20gJy4vdXNlT25DbGlja091dHNpZGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld1dpdGhQb3B1cCh7XHJcbiAgdmlldyxcclxuICBwb3B1cCxcclxuICBub1ZpZXcgPSBmYWxzZSxcclxuICBzdHlsZSxcclxuICBjbGFzc05hbWUsXHJcbn0pIHtcclxuICBjb25zdCBbc2hvd1BvcHVwLCBzZXRTaG93UG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG4gIHVzZU9uQ2xpY2tPdXRzaWRlKHJlZiwgKCkgPT4gc2V0U2hvd1BvcHVwKGZhbHNlKSk7XHJcbiAgLy8gQWRkIGFsbCBjbGFzc3MgdG8gYW4gYXJyYXlcclxuICBjb25zdCBhZGRBbGxDbGFzc2VzID0gWyd2aWV3X3dpdGhfX3BvcHVwJ107XHJcblxyXG4gIC8vIGNsYXNzTmFtZSBwcm9wIGNoZWNraW5nXHJcbiAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgYWRkQWxsQ2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlclxyXG4gICAgICBjbGFzc05hbWU9e2Ake2FkZEFsbENsYXNzZXMuam9pbignICcpfSAke3Nob3dQb3B1cCA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICA+XHJcbiAgICAgIHt2aWV3ICYmIG5vVmlldyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cF9oYW5kbGVyXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd1BvcHVwKCFzaG93UG9wdXApfT5cclxuICAgICAgICAgIHt2aWV3fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgY2xhc3NOYW1lPVwicG9wdXBfY29udGFpbmVyXCJcclxuICAgICAgICBzaG93UG9wdXA9e3Nob3dQb3B1cH1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UG9wdXAodHJ1ZSl9XHJcbiAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICA+XHJcbiAgICAgICAge3ZpZXcgJiYgIW5vVmlldyAmJiB2aWV3fVxyXG4gICAgICAgIHtzaG93UG9wdXAgJiYgKFxyXG4gICAgICAgICAgPGRpdiBpZD1cInBvcHVwXCI+XHJcbiAgICAgICAgICAgIDxQb3J0YWwgcmVuZGVyZXJJZD1cInBvcHVwXCI+e3BvcHVwICYmIHBvcHVwfTwvUG9ydGFsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gKHByb3BzLnJhZGl1cyA/IHByb3BzLnJhZGl1cyA6IDMpfXB4O1xyXG4gICR7cHJvcHMgPT5cclxuICAgIHByb3BzLnNob3dQb3B1cCAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGB9XHJcblxyXG4gIC5hbnQtY2hlY2tib3gtZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAuYW50LWNoZWNrYm94LWdyb3VwLWl0ZW0ge1xyXG4gICAgICBtYXJnaW46IDlweCAwO1xyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRhdGVfcGlja2VyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICAgLkRhdGVSYW5nZVBpY2tlciB7XHJcbiAgICAgIC5EYXRlUmFuZ2VQaWNrZXJJbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuIiwiLy8gSG9va1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VPbkNsaWNrT3V0c2lkZShyZWYsIGhhbmRsZXIpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbGlzdGVuZXIgPSBldmVudCA9PiB7XHJcbiAgICAgIC8vIERvIG5vdGhpbmcgaWYgY2xpY2tpbmcgcmVmJ3MgZWxlbWVudCBvciBkZXNjZW5kZW50IGVsZW1lbnRzXHJcbiAgICAgIGlmICghcmVmLmN1cnJlbnQgfHwgcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaGFuZGxlcihldmVudCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGxpc3RlbmVyKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICB9LCBbcmVmLCBoYW5kbGVyXSk7IC8vIEVtcHR5IGFycmF5IGVuc3VyZXMgdGhhdCBlZmZlY3QgaXMgb25seSBydW4gb24gbW91bnQgYW5kIHVubW91bnRcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5cclxuY29uc3QgZmFkZUluID0ga2V5ZnJhbWVzYFxyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBMaXN0aW5nV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAvKiBjaGVja2JveCBncm91cCBjb21wb25lbnQgc3R5bGUgKi9cclxuICAuYW50LWNoZWNrYm94LWdyb3VwIHtcclxuICAgIC5hbnQtY2hlY2tib3gtZ3JvdXAtaXRlbSB7XHJcbiAgICAgIC5hbnQtY2hlY2tib3gge1xyXG4gICAgICAgIC5hbnQtY2hlY2tib3gtaW5uZXIge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjEnLCAnIzkwOTA5MCcpfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5hbnQtY2hlY2tib3gtY2hlY2tlZCB7XHJcbiAgICAgICAgICAuYW50LWNoZWNrYm94LWlubmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLmFudC1jaGVja2JveCB7XHJcbiAgICAgICAgICAuYW50LWNoZWNrYm94LWlubmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIGRhdGUgcGlja2VyIGNvbXBvbmVudCBzdHlsZSAqL1xyXG4gIC5EYXRlUmFuZ2VQaWNrZXIge1xyXG4gICAgLkRhdGVSYW5nZVBpY2tlcklucHV0IHtcclxuICAgICAgLkRhdGVJbnB1dCB7XHJcbiAgICAgICAgLkRhdGVJbnB1dF9pbnB1dCB7XHJcbiAgICAgICAgICAmLkRhdGVJbnB1dF9pbnB1dF9fZm9jdXNlZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5EYXRlSW5wdXRfZmFuZyB7XHJcbiAgICAgICAgICB0b3A6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIHByaWNlIHJhbmdlIGNvbXBvbmVudCBzdHlsZSAqL1xyXG4gIC5hbnQtc2xpZGVyIHtcclxuICAgIC5hbnQtc2xpZGVyLXJhaWwge1xyXG4gICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xMycsICcjRTJFMkUyJyl9O1xyXG4gICAgfVxyXG4gICAgLmFudC1zbGlkZXItdHJhY2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcclxuICAgIH1cclxuICAgIC5hbnQtc2xpZGVyLXN0ZXAge1xyXG4gICAgICAuYW50LXNsaWRlci1kb3Qge1xyXG4gICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMTMnLCAnI0UyRTJFMicpfTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xMycsICcjRTJFMkUyJyl9O1xyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYW50LXNsaWRlci1kb3QtYWN0aXZlIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgLmFudC1zbGlkZXItdHJhY2sge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xyXG4gICAgICB9XHJcbiAgICAgIC5hbnQtc2xpZGVyLWhhbmRsZTpub3QoLmFudC10b29sdGlwLW9wZW4pIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYW50LXNsaWRlci1oYW5kbGUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBib3JkZXI6IDZweCBzb2xpZCAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcclxuICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4ICR7dGhlbWVHZXQoJ2NvbG9yLjUnLCAncmdiYSgwLCAwLCAwLCAwLjI1KScpfTtcclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFudC1zbGlkZXItbWFyayB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIC5hbnQtc2xpZGVyLW1hcmstdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogdG9vbGJhciBhcmVhIHN0eWxlICovXHJcbiAgLnRvb2xiYXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQxcHgpIHtcclxuICAgICAgbWluLWhlaWdodDogNzhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIGxvYWQgbW9yZSB3cmFwcGVyIHN0eWxlICovXHJcbiAgLmxvYWRtb3JlX3dyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgID4gYnV0dG9uIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBtaW4td2lkdGg6IDExNXB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICB9XHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2hvd01hcENoZWNrYm94ID0gc3R5bGVkLmRpdmBcclxuICAuYW50LWNoZWNrYm94LXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgfVxyXG5cclxuICAuYW50LWNoZWNrYm94IHtcclxuICAgIHRvcDogMDtcclxuICAgICsgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFudC1jaGVja2JveC1pbm5lciB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcclxuICB9XHJcblxyXG4gIC5hbnQtY2hlY2tib3gtd3JhcHBlciB7XHJcbiAgICAuYW50LWNoZWNrYm94LWNoZWNrZWQge1xyXG4gICAgICAuYW50LWNoZWNrYm94LWlubmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgxKSB0cmFuc2xhdGUoLTUwJSwgLTcwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYW50LWNoZWNrYm94LXdyYXBwZXI6aG92ZXIgLmFudC1jaGVja2JveC1pbm5lcixcclxuICAuYW50LWNoZWNrYm94OmhvdmVyIC5hbnQtY2hlY2tib3gtaW5uZXIsXHJcbiAgLmFudC1jaGVja2JveC1pbnB1dDpmb2N1cyArIC5hbnQtY2hlY2tib3gtaW5uZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdHNXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDE5MjBweDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gICYuY29sLTI0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gICYuY29sLTEyIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjFweCkge1xyXG4gICAgICB3aWR0aDogY2FsYyg2MCUgLSAxMjBweCk7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGaXhlZE1hcCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjInLCAnI0Y3RjdGNycpfTtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTUycHgpO1xyXG4gIHRvcDogMTUycHg7XHJcbiAgei1pbmRleDogOTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gID4gZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICA+IGRpdiB7XHJcbiAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRmlsdGVyQXJlYSA9IHN0eWxlZC5kaXZgXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBidXR0b24sXHJcbiAgYnV0dG9uLmFudC1idG4ge1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2JvcmRlci4zJywgJyNFNkU2RTYnKX07XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xyXG4gICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRmlsdGVyRWxlbWVudHNXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5hY2NvcmRpb24ge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0zNXB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OHB4KTtcclxuXHJcbiAgICAvKiBhY2NvcmRpb24gaXRlbSBzdHlsZSAqL1xyXG4gICAgLmFjY29yZGlvbl9faXRlbSB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIGFjY29yZGlvbiBoZWFkaW5nIGFyZWEgc3R5bGUgKi9cclxuICAgICAgLmFjY29yZGlvbl9faGVhZGluZyB7XHJcbiAgICAgICAgLmFjY29yZGlvbl9fYnV0dG9uIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMjlweCAwO1xyXG4gICAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJjMmMyYycpfTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBhY2NvcmRpb24gcGFuZWwgYXJlYSBzdHlsZSAqL1xyXG4gICAgICAuYWNjb3JkaW9uX19wYW5lbCB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI5cHg7XHJcbiAgICAgICAgYW5pbWF0aW9uOiAwLjI1cyAke2ZhZGVJbn0gZWFzZTtcclxuICAgICAgICAmW2hpZGRlbl0ge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiAwLjI1cyAke2ZhZGVJbn0gZWFzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIGRhdGUgcGlja2VyIGNvbXBvbmVudCBzdHlsZSAqL1xyXG4gICAgICAgIC5kYXRlX3BpY2tlciB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgLkRhdGVSYW5nZVBpY2tlciB7XHJcbiAgICAgICAgICAgIC5EYXRlUmFuZ2VQaWNrZXJJbnB1dCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xyXG4gICAgICAgICAgICAgIC5EYXRlSW5wdXRfX3NtYWxsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDJweDtcclxuICAgICAgICAgICAgICAgIC5EYXRlSW5wdXRfaW5wdXRfX3NtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLkRhdGVSYW5nZVBpY2tlcl9waWNrZXIge1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBjaGVja2JveCBncm91cCBzdHlsZSAqL1xyXG4gICAgICAgIC5hbnQtY2hlY2tib3gtZ3JvdXAge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAuYW50LWNoZWNrYm94LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAuYW50LWNoZWNrYm94IHtcclxuICAgICAgICAgICAgICAuYW50LWNoZWNrYm94LWlubmVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgndGV4dC4xJywgJyM5MDkwOTAnKX07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICYuYW50LWNoZWNrYm94LWNoZWNrZWQge1xyXG4gICAgICAgICAgICAgICAgLmFudC1jaGVja2JveC1pbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIC5hbnQtY2hlY2tib3gge1xyXG4gICAgICAgICAgICAgICAgLmFudC1jaGVja2JveC1pbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBwcmljZSByYW5nZSBjb21wb25lbnQgc3R5bGUgKi9cclxuICAgICAgICAuYW50LXNsaWRlciB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAzMjBweDtcclxuICAgICAgICAgIC5hbnQtc2xpZGVyLXJhaWwge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xMycsICcjRTJFMkUyJyl9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFudC1zbGlkZXItdHJhY2sge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hbnQtc2xpZGVyLXN0ZXAge1xyXG4gICAgICAgICAgICAuYW50LXNsaWRlci1kb3Qge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMTMnLCAnI0UyRTJFMicpfTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xMycsICcjRTJFMkUyJyl9O1xyXG4gICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICYuYW50LXNsaWRlci1kb3QtYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgLmFudC1zbGlkZXItdHJhY2sge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hbnQtc2xpZGVyLWhhbmRsZTpub3QoLmFudC10b29sdGlwLW9wZW4pIHtcclxuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYW50LXNsaWRlci1oYW5kbGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDZweCBzb2xpZCAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4ICR7dGhlbWVHZXQoJ2NvbG9yLjUnLCAncmdiYSgwLCAwLCAwLCAwLjI1KScpfTtcclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFudC1zbGlkZXItbWFyayB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIC5hbnQtc2xpZGVyLW1hcmstdGV4dCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25Hcm91cCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgYnV0dG9uLmFudC1idG4ge1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcclxuICAgICYuYW50LWJ0bi1wcmltYXJ5IHtcclxuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RpbmdXcmFwcGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XHJcbmltcG9ydCBNYXAgZnJvbSAnY29tcG9uZW50cy9NYXAvTWFwJztcclxuaW1wb3J0IExvYWRlciBmcm9tICdjb21wb25lbnRzL0xvYWRlci9Mb2FkZXInO1xyXG5pbXBvcnQgeyBGaXhlZE1hcCB9IGZyb20gJy4vTGlzdGluZy5zdHlsZSc7XHJcblxyXG5jb25zdCBMaXN0aW5nTWFwID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBtYXBEYXRhLCBsb2FkaW5nIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPEZpeGVkTWFwPlxyXG4gICAgICB7aXNFbXB0eShtYXBEYXRhKSB8fCBsb2FkaW5nID8gKFxyXG4gICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TWFwIGxvY2F0aW9uPXttYXBEYXRhfSBtdWx0aXBsZT17dHJ1ZX0gLz5cclxuICAgICAgKX1cclxuICAgIDwvRml4ZWRNYXA+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RpbmdNYXA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5pbXBvcnQgVmlld1dpdGhQb3B1cCBmcm9tICdjb21wb25lbnRzL1VJL1ZpZXdXaXRoUG9wdXAvVmlld1dpdGhQb3B1cCc7XHJcbmltcG9ydCB7IFNsaWRlciwgQnV0dG9uLCBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgSW5wdXRJbmNEZWMgZnJvbSAnY29tcG9uZW50cy9VSS9JbnB1dEluY0RlYy9JbnB1dEluY0RlYyc7XHJcbmltcG9ydCBEYXRlUmFuZ2VQaWNrZXJCb3ggZnJvbSAnY29tcG9uZW50cy9VSS9EYXRlUGlja2VyL1JlYWN0RGF0ZXMnO1xyXG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSAnY29udGV4dC9TZWFyY2hQcm92aWRlcic7XHJcbmltcG9ydCB7IHNldFN0YXRlVG9VcmwgfSBmcm9tICdsaWJyYXJ5L2hlbHBlcnMvdXJsX2hhbmRsZXInO1xyXG5pbXBvcnQge1xyXG4gIHByaWNlSW5pdCxcclxuICBjYWxlbmRlckl0ZW0sXHJcbiAgZ2V0QW1lbml0aWVzLFxyXG4gIGdldFByb3BlcnR5VHlwZSxcclxufSBmcm9tICcuLi9TZWFyY2hQYXJhbXMnO1xyXG5pbXBvcnQgQ2F0ZWdyb3lTZWFyY2hXcmFwcGVyLCB7XHJcbiAgUm9vbUd1ZXN0V3JhcHBlcixcclxuICBJdGVtV3JhcHBlcixcclxuICBBY3Rpb25XcmFwcGVyLFxyXG59IGZyb20gJy4vQ2F0ZWdvcnlTZWFyY2guc3R5bGUnO1xyXG5cclxuY29uc3QgaGlzdG9yeSA9IHByb2Nlc3MuYnJvd3NlciA/IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCkgOiBmYWxzZTtcclxuY29uc3QgbG9jYXRpb24gPSBwcm9jZXNzLmJyb3dzZXIgJiYgd2luZG93LmxvY2F0aW9uO1xyXG5cclxuZnVuY3Rpb24gc2VyY2hSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdhbWVuaXRpZXMnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYW1lbml0aWVzOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSAncHJvcGVydHknOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvcGVydHk6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlICdkYXRlX3JhbmdlJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzZXRTdGFydERhdGU6IGFjdGlvbi5wYXlsb2FkLnNldFN0YXJ0RGF0ZSxcclxuICAgICAgICBzZXRFbmREYXRlOiBhY3Rpb24ucGF5bG9hZC5zZXRFbmREYXRlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSAncHJpY2UnOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1pblByaWNlOiBhY3Rpb24ucGF5bG9hZC5taW5QcmljZSxcclxuICAgICAgICBtYXhQcmljZTogYWN0aW9uLnBheWxvYWQubWF4UHJpY2UsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlICdyb29tR3Vlc3RSZXNldCc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcm9vbTogYWN0aW9uLnBheWxvYWQucm9vbSxcclxuICAgICAgICBndWVzdDogYWN0aW9uLnBheWxvYWQuZ3Vlc3QsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlICdyZXNldCc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgQ2F0ZWdvcnlTZWFyY2hOZXh0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoU2VhcmNoQ29udGV4dCk7XHJcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgYW1lbml0aWVzOiBzdGF0ZS5hbWVuaXRpZXMgfHwgW10sXHJcbiAgICBwcm9wZXJ0eTogc3RhdGUucHJvcGVydHkgfHwgW10sXHJcbiAgICBzZXRTdGFydERhdGU6IHN0YXRlLnNldFN0YXJ0RGF0ZSB8fCBudWxsLFxyXG4gICAgc2V0RW5kRGF0ZTogc3RhdGUuc2V0RW5kRGF0ZSB8fCBudWxsLFxyXG4gICAgbWluUHJpY2U6IHBhcnNlSW50KHN0YXRlLm1pblByaWNlKSB8fCAwLFxyXG4gICAgbWF4UHJpY2U6IHBhcnNlSW50KHN0YXRlLm1heFByaWNlKSB8fCAxMDAsXHJcbiAgICBsb2NhdGlvbl9sYXQ6IHN0YXRlLmxvY2F0aW9uX2xhdCB8fCBudWxsLFxyXG4gICAgbG9jYXRpb25fbG5nOiBzdGF0ZS5sb2NhdGlvbl9sbmcgfHwgbnVsbCxcclxuICAgIHJvb206IHBhcnNlSW50KHN0YXRlLnJvb20pIHx8IDAsXHJcbiAgICBndWVzdDogcGFyc2VJbnQoc3RhdGUuZ3Vlc3QpIHx8IDAsXHJcbiAgfTtcclxuXHJcbiAgLy8gY3VycmVudCBjb21wb25lbnQgc3RhdGUgd2l0aCBkaXNwYXRjaGluZyB0byByZWR1Y2VyXHJcbiAgY29uc3QgW2N1cnJlbnQsIGRpc3BhdGNoQ3VycmVudF0gPSB1c2VSZWR1Y2VyKHNlcmNoUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuICAvLyBSb29tIGd1ZXN0IHN0YXRlXHJcbiAgY29uc3QgW2NvdW50Um9vbSwgc2V0Um9vbV0gPSB1c2VTdGF0ZShjdXJyZW50LnJvb20pO1xyXG4gIGNvbnN0IFtjb3VudEd1ZXN0LCBzZXRHdWVzdF0gPSB1c2VTdGF0ZShjdXJyZW50Lmd1ZXN0KTtcclxuXHJcbiAgLy8gZGF0YSBoYW5kbGluZ1xyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKHZhbHVlLCB0eXBlKSA9PiB7XHJcbiAgICBsZXQgcXVlcnkgPSB7fTtcclxuICAgIGxldCBtb2RpZmllZEN1cnJlbnQgPSBjdXJyZW50O1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIG1vZGlmaWVkQ3VycmVudCkge1xyXG4gICAgICBpZiAobW9kaWZpZWRDdXJyZW50Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgICAgY2FzZSAnZGF0ZV9yYW5nZSc6XHJcbiAgICAgICAgICAgIGRlbGV0ZSBtb2RpZmllZEN1cnJlbnQuZGF0ZV9yYW5nZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdwcmljZSc6XHJcbiAgICAgICAgICAgIGRlbGV0ZSBtb2RpZmllZEN1cnJlbnQucHJpY2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09PSAnZGF0ZV9yYW5nZScpIHtcclxuICAgICAgcXVlcnkgPSB7XHJcbiAgICAgICAgLi4uY3VycmVudCxcclxuICAgICAgICBzZXRTdGFydERhdGU6IHZhbHVlLnNldFN0YXJ0RGF0ZSxcclxuICAgICAgICBzZXRFbmREYXRlOiB2YWx1ZS5zZXRFbmREYXRlLFxyXG4gICAgICB9O1xyXG4gICAgICBkaXNwYXRjaEN1cnJlbnQoeyB0eXBlOiB0eXBlLCBwYXlsb2FkOiB2YWx1ZSB9KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3ByaWNlJykge1xyXG4gICAgICBxdWVyeSA9IHtcclxuICAgICAgICAuLi5jdXJyZW50LFxyXG4gICAgICAgIG1pblByaWNlOiB2YWx1ZSA/IHZhbHVlWzBdIDogMCxcclxuICAgICAgICBtYXhQcmljZTogdmFsdWUgPyB2YWx1ZVsxXSA6IDEwMCxcclxuICAgICAgfTtcclxuICAgICAgZGlzcGF0Y2hDdXJyZW50KHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcXVlcnkgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyZXNldCcpIHtcclxuICAgICAgc2V0Um9vbSgwKTtcclxuICAgICAgc2V0R3Vlc3QoMCk7XHJcbiAgICAgIHF1ZXJ5ID0ge1xyXG4gICAgICAgIC4uLmN1cnJlbnQsXHJcbiAgICAgICAgc2V0U3RhcnREYXRlOiBudWxsLFxyXG4gICAgICAgIHNldEVuZERhdGU6IG51bGwsXHJcbiAgICAgICAgcm9vbTogMCxcclxuICAgICAgICBndWVzdDogMCxcclxuICAgICAgICBhbWVuaXRpZXM6IFtdLFxyXG4gICAgICAgIHByb3BlcnR5OiBbXSxcclxuICAgICAgICBtaW5QcmljZTogMCxcclxuICAgICAgICBtYXhQcmljZTogMTAwLFxyXG4gICAgICAgIGxvY2F0aW9uX2xhdDogbnVsbCxcclxuICAgICAgICBsb2NhdGlvbl9sbmc6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICAgIGRpc3BhdGNoQ3VycmVudCh7IHR5cGU6IHR5cGUsIHBheWxvYWQ6IHF1ZXJ5IH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcXVlcnkgPSB7XHJcbiAgICAgICAgLi4uY3VycmVudCxcclxuICAgICAgICBbdHlwZV06IHZhbHVlLFxyXG4gICAgICB9O1xyXG4gICAgICBkaXNwYXRjaEN1cnJlbnQoeyB0eXBlOiB0eXBlLCBwYXlsb2FkOiB2YWx1ZSB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBhcmFtcyA9IHNldFN0YXRlVG9VcmwocXVlcnkpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnVVBEQVRFJyxcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIC4uLmN1cnJlbnQsXHJcbiAgICAgICAgLi4ucXVlcnksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGhpc3RvcnkucHVzaCh7XHJcbiAgICAgIC4uLmxvY2F0aW9uLFxyXG4gICAgICBzZWFyY2g6IHBhcmFtcyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJvb21HdWVzdEFwcGx5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcXVlcnkgPSB7XHJcbiAgICAgIC4uLmN1cnJlbnQsXHJcbiAgICAgIHJvb206IGNvdW50Um9vbSxcclxuICAgICAgZ3Vlc3Q6IGNvdW50R3Vlc3QsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcGFyYW1zID0gc2V0U3RhdGVUb1VybChxdWVyeSk7XHJcbiAgICBoaXN0b3J5LnB1c2goe1xyXG4gICAgICAuLi5sb2NhdGlvbixcclxuICAgICAgc2VhcmNoOiBwYXJhbXMsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSb29tR3Vlc3RDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBzZXRSb29tKDApO1xyXG4gICAgc2V0R3Vlc3QoMCk7XHJcbiAgICBjb25zdCBxdWVyeSA9IHtcclxuICAgICAgLi4uY3VycmVudCxcclxuICAgICAgcm9vbTogMCxcclxuICAgICAgZ3Vlc3Q6IDAsXHJcbiAgICB9O1xyXG4gICAgZGlzcGF0Y2hDdXJyZW50KHsgdHlwZTogJ3Jvb21HdWVzdFJlc2V0JywgcGF5bG9hZDogcXVlcnkgfSk7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBzZXRTdGF0ZVRvVXJsKHF1ZXJ5KTtcclxuICAgIGhpc3RvcnkucHVzaCh7XHJcbiAgICAgIC4uLmxvY2F0aW9uLFxyXG4gICAgICBzZWFyY2g6IHBhcmFtcyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRhdGVSYW5nZUFjdGl2YXRlQ2xhc3MgPVxyXG4gICAgY3VycmVudCAmJlxyXG4gICAgY3VycmVudC5zZXRTdGFydERhdGUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgY3VycmVudC5zZXRFbmREYXRlICE9PSB1bmRlZmluZWQgJiZcclxuICAgIGN1cnJlbnQuc2V0U3RhcnREYXRlICE9PSBudWxsICYmXHJcbiAgICBjdXJyZW50LnNldEVuZERhdGUgIT09IG51bGxcclxuICAgICAgPyAnYWN0aXZhdGVkJ1xyXG4gICAgICA6ICcnO1xyXG5cclxuICBjb25zdCBwcmljZVJhbmdlQWN0aXZhdGVDbGFzcyA9XHJcbiAgICBjdXJyZW50ICYmXHJcbiAgICBjdXJyZW50Lm1pblByaWNlICE9PSB1bmRlZmluZWQgJiZcclxuICAgIGN1cnJlbnQubWF4UHJpY2UgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgY3VycmVudC5taW5QcmljZSA9PT0gMCAmJlxyXG4gICAgY3VycmVudC5tYXhQcmljZSA9PT0gMTAwXHJcbiAgICAgID8gJydcclxuICAgICAgOiAnYWN0aXZhdGVkJztcclxuXHJcbiAgbGV0IGFtZW5pdGllc0xlbmd0aCA9IDA7XHJcbiAgbGV0IHByb3BlcnR5TGVuZ3RoID0gMDtcclxuICBsZXQgYW1lbml0aWVzID0gW107XHJcbiAgbGV0IHByb3BlcnR5ID0gW107XHJcblxyXG4gIGlmIChjdXJyZW50ICYmIGN1cnJlbnQuYW1lbml0aWVzICYmIHR5cGVvZiBjdXJyZW50LmFtZW5pdGllcyA9PT0gJ3N0cmluZycpIHtcclxuICAgIGFtZW5pdGllcyA9IGN1cnJlbnQuYW1lbml0aWVzLnNwbGl0KCcsJyk7XHJcbiAgICBhbWVuaXRpZXNMZW5ndGggPSBhbWVuaXRpZXMubGVuZ3RoO1xyXG4gIH0gZWxzZSBpZiAoY3VycmVudCAmJiBjdXJyZW50LmFtZW5pdGllcyAmJiBjdXJyZW50LmFtZW5pdGllcy5sZW5ndGgpIHtcclxuICAgIGFtZW5pdGllcyA9IGN1cnJlbnQuYW1lbml0aWVzO1xyXG4gICAgYW1lbml0aWVzTGVuZ3RoID0gYW1lbml0aWVzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50ICYmIGN1cnJlbnQucHJvcGVydHkgJiYgdHlwZW9mIGN1cnJlbnQucHJvcGVydHkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICBwcm9wZXJ0eSA9IGN1cnJlbnQucHJvcGVydHkuc3BsaXQoJywnKTtcclxuICAgIHByb3BlcnR5TGVuZ3RoID0gcHJvcGVydHkubGVuZ3RoO1xyXG4gIH0gZWxzZSBpZiAoY3VycmVudCAmJiBjdXJyZW50LnByb3BlcnR5ICYmIGN1cnJlbnQucHJvcGVydHkubGVuZ3RoKSB7XHJcbiAgICBwcm9wZXJ0eSA9IGN1cnJlbnQucHJvcGVydHk7XHJcbiAgICBwcm9wZXJ0eUxlbmd0aCA9IGN1cnJlbnQucHJvcGVydHkubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXRlZ3JveVNlYXJjaFdyYXBwZXI+XHJcbiAgICAgIDxWaWV3V2l0aFBvcHVwXHJcbiAgICAgICAgY2xhc3NOYW1lPXthbWVuaXRpZXNMZW5ndGggPyAnYWN0aXZhdGVkJyA6ICcnfVxyXG4gICAgICAgIGtleT17Z2V0QW1lbml0aWVzLmlkfVxyXG4gICAgICAgIG5vVmlldz17dHJ1ZX1cclxuICAgICAgICB2aWV3PXtcclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRlZmF1bHRcIj5cclxuICAgICAgICAgICAge2dldEFtZW5pdGllcy5uYW1lfVxyXG4gICAgICAgICAgICB7YW1lbml0aWVzTGVuZ3RoID4gMCAmJiBgOiAke2FtZW5pdGllc0xlbmd0aH1gfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBvcHVwPXtcclxuICAgICAgICAgIDxDaGVja2JveC5Hcm91cFxyXG4gICAgICAgICAgICBvcHRpb25zPXtnZXRBbWVuaXRpZXMub3B0aW9uc31cclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthbWVuaXRpZXN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKHZhbHVlLCAnYW1lbml0aWVzJyl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxWaWV3V2l0aFBvcHVwXHJcbiAgICAgICAgY2xhc3NOYW1lPXtwcm9wZXJ0eUxlbmd0aCA/ICdhY3RpdmF0ZWQnIDogJyd9XHJcbiAgICAgICAga2V5PXtnZXRQcm9wZXJ0eVR5cGUuaWR9XHJcbiAgICAgICAgbm9WaWV3PXt0cnVlfVxyXG4gICAgICAgIHZpZXc9e1xyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICB7Z2V0UHJvcGVydHlUeXBlLm5hbWV9XHJcbiAgICAgICAgICAgIHtwcm9wZXJ0eUxlbmd0aCA+IDAgJiYgYDogJHtwcm9wZXJ0eUxlbmd0aH1gfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBvcHVwPXtcclxuICAgICAgICAgIDxDaGVja2JveC5Hcm91cFxyXG4gICAgICAgICAgICBvcHRpb25zPXtnZXRQcm9wZXJ0eVR5cGUub3B0aW9uc31cclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9wZXJ0eX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2UodmFsdWUsICdwcm9wZXJ0eScpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8Vmlld1dpdGhQb3B1cFxyXG4gICAgICAgIGNsYXNzTmFtZT17ZGF0ZVJhbmdlQWN0aXZhdGVDbGFzc31cclxuICAgICAgICBrZXk9ezQwMH1cclxuICAgICAgICBub1ZpZXc9e3RydWV9XHJcbiAgICAgICAgdmlldz17PEJ1dHRvbiB0eXBlPVwiZGVmYXVsdFwiPkNob29zZSBEYXRlPC9CdXR0b24+fVxyXG4gICAgICAgIHBvcHVwPXtcclxuICAgICAgICAgIDxEYXRlUmFuZ2VQaWNrZXJCb3hcclxuICAgICAgICAgICAgc3RhcnREYXRlSWQ9XCJzdGFydERhdGUtaWQtY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICBlbmREYXRlSWQ9XCJlbmREYXRlLWlkLWNhdGVnb3J5XCJcclxuICAgICAgICAgICAgc3RhcnREYXRlPXtcclxuICAgICAgICAgICAgICBjdXJyZW50LnNldFN0YXJ0RGF0ZSA/IG1vbWVudChjdXJyZW50LnNldFN0YXJ0RGF0ZSkgOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZW5kRGF0ZT17Y3VycmVudC5zZXRFbmREYXRlID8gbW9tZW50KGN1cnJlbnQuc2V0RW5kRGF0ZSkgOiBudWxsfVxyXG4gICAgICAgICAgICBudW1iZXJPZk1vbnRocz17MX1cclxuICAgICAgICAgICAgc21hbGw9e3RydWV9XHJcbiAgICAgICAgICAgIGl0ZW09e2NhbGVuZGVySXRlbX1cclxuICAgICAgICAgICAgdXBkYXRlU2VhcmNoRGF0YT17KHZhbHVlKSA9PiBvbkNoYW5nZSh2YWx1ZSwgJ2RhdGVfcmFuZ2UnKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPFZpZXdXaXRoUG9wdXBcclxuICAgICAgICBjbGFzc05hbWU9e3ByaWNlUmFuZ2VBY3RpdmF0ZUNsYXNzfVxyXG4gICAgICAgIGtleT17MzAwfVxyXG4gICAgICAgIG5vVmlldz17dHJ1ZX1cclxuICAgICAgICB2aWV3PXtcclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRlZmF1bHRcIj5cclxuICAgICAgICAgICAge2N1cnJlbnQubWluUHJpY2UgPiAwIHx8IGN1cnJlbnQubWF4UHJpY2UgPCAxMDBcclxuICAgICAgICAgICAgICA/IGBQcmljZSBSYW5nZTogJHtjdXJyZW50Lm1pblByaWNlfSwgJHtjdXJyZW50Lm1heFByaWNlfWBcclxuICAgICAgICAgICAgICA6IGBQcmljZSBwZXIgbmlnaHRgfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBvcHVwPXtcclxuICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgcmFuZ2VcclxuICAgICAgICAgICAgbWFya3M9e3ByaWNlSW5pdH1cclxuICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICBtYXg9ezEwMH1cclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtbY3VycmVudC5taW5QcmljZSwgY3VycmVudC5tYXhQcmljZV19XHJcbiAgICAgICAgICAgIG9uQWZ0ZXJDaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2UodmFsdWUsICdwcmljZScpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8Vmlld1dpdGhQb3B1cFxyXG4gICAgICAgIGtleT17MjAwfVxyXG4gICAgICAgIG5vVmlldz17dHJ1ZX1cclxuICAgICAgICBjbGFzc05hbWU9e2NvdW50Um9vbSB8fCBjb3VudEd1ZXN0ID8gJ2FjdGl2YXRlZCcgOiAnJ31cclxuICAgICAgICB2aWV3PXtcclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRlZmF1bHRcIj5cclxuICAgICAgICAgICAgUm9vbSB7Y291bnRSb29tID4gMCAmJiBgOiAke2NvdW50Um9vbX1gfSwgR3Vlc3RcclxuICAgICAgICAgICAge2NvdW50R3Vlc3QgPiAwICYmIGA6ICR7Y291bnRHdWVzdH1gfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBvcHVwPXtcclxuICAgICAgICAgIDxSb29tR3Vlc3RXcmFwcGVyPlxyXG4gICAgICAgICAgICA8SXRlbVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5Sb29tPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPElucHV0SW5jRGVjXHJcbiAgICAgICAgICAgICAgICBpZD1cInJvb21cIlxyXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50PXsoKSA9PiBzZXRSb29tKChjb3VudFJvb20pID0+IGNvdW50Um9vbSArIDEpfVxyXG4gICAgICAgICAgICAgICAgZGVjcmVtZW50PXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICBzZXRSb29tKChjb3VudFJvb20pID0+IGNvdW50Um9vbSA+IDAgJiYgY291bnRSb29tIC0gMSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Um9vbShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y291bnRSb29tfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvSXRlbVdyYXBwZXI+XHJcblxyXG4gICAgICAgICAgICA8SXRlbVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5HdWVzdDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxJbnB1dEluY0RlY1xyXG4gICAgICAgICAgICAgICAgaWQ9XCJndWVzdFwiXHJcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnQ9eygpID0+IHNldEd1ZXN0KChjb3VudEd1ZXN0KSA9PiBjb3VudEd1ZXN0ICsgMSl9XHJcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQ9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIHNldEd1ZXN0KChjb3VudEd1ZXN0KSA9PiBjb3VudEd1ZXN0ID4gMCAmJiBjb3VudEd1ZXN0IC0gMSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0R3Vlc3QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvdW50R3Vlc3R9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9JdGVtV3JhcHBlcj5cclxuXHJcbiAgICAgICAgICAgIDxBY3Rpb25XcmFwcGVyPlxyXG4gICAgICAgICAgICAgIHtjb3VudFJvb20gfHwgY291bnRHdWVzdCA/IChcclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRlZmF1bHRcIiBvbkNsaWNrPXtoYW5kbGVSb29tR3Vlc3RDYW5jZWx9PlxyXG4gICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVJvb21HdWVzdEFwcGx5fT5cclxuICAgICAgICAgICAgICAgIEFwcGx5XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQWN0aW9uV3JhcHBlcj5cclxuICAgICAgICAgIDwvUm9vbUd1ZXN0V3JhcHBlcj5cclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8Vmlld1dpdGhQb3B1cFxyXG4gICAgICAgIGtleT17MTAwfVxyXG4gICAgICAgIG5vVmlldz17dHJ1ZX1cclxuICAgICAgICB2aWV3PXs8QnV0dG9uIHR5cGU9XCJkZWZhdWx0XCI+UmVzZXQ8L0J1dHRvbj59XHJcbiAgICAgICAgcG9wdXA9e1xyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZShpbml0aWFsU3RhdGUsICdyZXNldCcpfT5cclxuICAgICAgICAgICAgUmVzZXQgU2VhcmNoIFBhZ2UgVVJMXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICA8L0NhdGVncm95U2VhcmNoV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlTZWFyY2hOZXh0O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5cclxuY29uc3QgQ2F0ZWdyb3lTZWFyY2hXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC52aWV3X3dpdGhfX3BvcHVwIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAucG9wdXBfaGFuZGxlciB7XHJcbiAgICAgIGJ1dHRvbixcclxuICAgICAgYnV0dG9uLmFudC1idG4ge1xyXG4gICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIC5wb3B1cF9oYW5kbGVyIHtcclxuICAgICAgICBidXR0b24sXHJcbiAgICAgICAgYnV0dG9uLmFudC1idG4ge1xyXG4gICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgKyAucG9wdXBfY29udGFpbmVyIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogNzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2YXRlZCB7XHJcbiAgICAgIC5wb3B1cF9oYW5kbGVyIHtcclxuICAgICAgICBidXR0b24sXHJcbiAgICAgICAgYnV0dG9uLmFudC1idG4ge1xyXG4gICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg1O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wb3B1cF9jb250YWluZXIge1xyXG4gICAgICAjcG9wdXAge1xyXG4gICAgICAgID4gZGl2IHtcclxuICAgICAgICAgID4gYnV0dG9uLFxyXG4gICAgICAgICAgPiAuYW50LWJ0biB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kYXRlX3BpY2tlciB7XHJcbiAgICAuRGF0ZVJhbmdlUGlja2VyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAuRGF0ZVJhbmdlUGlja2VySW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcclxuICAgICAgICAuRGF0ZUlucHV0X19zbWFsbCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAycHg7XHJcbiAgICAgICAgICAuRGF0ZUlucHV0X2lucHV0X19zbWFsbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvb21HdWVzdFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAucXVhbnRpdHkge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgaW5wdXQge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBidXR0b24uYnRuIHN2ZyB7XHJcbiAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLXRvcDogMjdweDtcclxuXHJcbiAgLmFudC1idG4ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMicsICcjNzc3Nzc3Jyl9O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjEnLCAnIzkwOTA5MCcpfTtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHt0aGVtZUdldCgndGV4dC4xJywgJyM5MDkwOTAnKX07XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFudC1idG4tcHJpbWFyeSB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMScsICcjMzk5QzlGJyl9O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMScsICcjMzk5QzlGJyl9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmOm5vdChbZGlzYWJsZWRdKTpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVncm95U2VhcmNoV3JhcHBlcjtcclxuIiwiLy8gZGVmYXVsdCBkYXRhIGZvciBmaWx0ZXIgZWxlbWVudHNcclxuZXhwb3J0IGNvbnN0IHByaWNlSW5pdCA9IHtcclxuICAwOiAnJDAnLFxyXG4gIDEwMDogJyQxMDAnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbGVuZGVySXRlbSA9IHtcclxuICBzZXBhcmF0b3I6ICctJyxcclxuICBmb3JtYXQ6ICdNTS1ERC1ZWVlZJyxcclxuICBsb2NhbGU6ICdlbicsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QW1lbml0aWVzID0ge1xyXG4gIGlkOiAxLFxyXG4gIG5hbWU6ICdBbWVuaXRpZXMnLFxyXG4gIGlkZW50aWZpZXI6ICdhbWVuaXRpZXMnLFxyXG4gIG9wdGlvbnM6IFtcclxuICAgIHsgbGFiZWw6ICdGcmVlIFdpLUZpJywgdmFsdWU6ICdmcmVlLXdpZmknIH0sXHJcbiAgICB7IGxhYmVsOiAnRnJlZSBQYXJraW5nJywgdmFsdWU6ICdmcmVlLXBhcmtpbmcnIH0sXHJcbiAgICB7IGxhYmVsOiAnQnJlYWtmYXN0IGluY2x1ZGVkJywgdmFsdWU6ICdicmVha2Zhc3QnIH0sXHJcbiAgICB7IGxhYmVsOiAnUG9vbCcsIHZhbHVlOiAncG9vbCcgfSxcclxuICAgIHsgbGFiZWw6ICdBaXIgQ29uZGl0aW9uaW5nJywgdmFsdWU6ICdhaXItY29uZGl0aW9uJyB9LFxyXG4gICAgeyBsYWJlbDogJ0hvdCBTaG93ZXInLCB2YWx1ZTogJ2hvdC1zaG93ZXInIH0sXHJcbiAgICB7IGxhYmVsOiAnQ2FibGUgVFYnLCB2YWx1ZTogJ2NhYmxlLXR2JyB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvcGVydHlUeXBlID0ge1xyXG4gIGlkOiAyLFxyXG4gIG5hbWU6ICdQcm9wZXJ0eSBUeXBlJyxcclxuICBpZGVudGlmaWVyOiAncHJvcGVydHktdHlwZScsXHJcbiAgb3B0aW9uczogW1xyXG4gICAgeyBsYWJlbDogJ1ZpbGxhJywgdmFsdWU6ICd2aWxsYScgfSxcclxuICAgIHsgbGFiZWw6ICdIb3RlbCcsIHZhbHVlOiAnaG90ZWwnIH0sXHJcbiAgICB7IGxhYmVsOiAnUmVzb3J0JywgdmFsdWU6ICdyZXNvcnQnIH0sXHJcbiAgICB7IGxhYmVsOiAnQ290dGFnZScsIHZhbHVlOiAnY290dGFnZScgfSxcclxuICAgIHsgbGFiZWw6ICdEdXBsZXgnLCB2YWx1ZTogJ2R1cGxleCcgfSxcclxuICAgIHsgbGFiZWw6ICdMYW5kc2NhcGUnLCB2YWx1ZTogJ2xhbmRzY2FwZScgfSxcclxuICBdLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnVVBEQVRFJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgcXVlcnkgfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBxdWVyeSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWFyY2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TZWFyY2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgc2h1ZmZsZSBmcm9tICdsb2Rhc2gvc2h1ZmZsZSc7XHJcblxyXG5jb25zdCBGZXRjaEFQSURhdGEgPSAodXJsKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyKSA9PiByLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0FQSURhdGEgPSAoYXBpRGF0YSkgPT4ge1xyXG4gIGxldCBmZXRjaERhdGEgPSB7fTtcclxuICBpZiAoYXBpRGF0YSkge1xyXG4gICAgYXBpRGF0YS5mb3JFYWNoKChpdGVtLCBrZXkpID0+IHtcclxuICAgICAgZmV0Y2hEYXRhLmRhdGEgPSBpdGVtLmRhdGEgPyBbLi4uaXRlbS5kYXRhXSA6IFtdO1xyXG4gICAgICBmZXRjaERhdGEubmFtZSA9IGl0ZW0ubmFtZSA/IGl0ZW0ubmFtZSA6ICcnO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRhdGEgPSBmZXRjaERhdGEgPyBmZXRjaERhdGEuZGF0YSA6IFtdO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaGVkRGF0YSA9IChwcm9jZXNzZWREYXRhKSA9PiB7XHJcbiAgY29uc3QgcmFuZE51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwICsgMSk7XHJcbiAgY29uc3QgZGF0YSA9IHNodWZmbGUocHJvY2Vzc2VkRGF0YS5zbGljZSgwLCByYW5kTnVtYmVyKSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoU3RhdGVLZXlDaGVjayA9IChzdGF0ZSkgPT4ge1xyXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xyXG4gICAgaWYgKFxyXG4gICAgICBzdGF0ZVtrZXldICE9PSBudWxsICYmXHJcbiAgICAgIHN0YXRlW2tleV0gIT0gJycgJiZcclxuICAgICAgc3RhdGVba2V5XSAhPSBbXSAmJlxyXG4gICAgICBzdGF0ZVtrZXldICE9IDAgJiZcclxuICAgICAgc3RhdGVba2V5XSAhPSAxMDBcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2luYXRvciA9IChwb3N0cywgcHJvY2Vzc2VkRGF0YSwgbGltaXQpID0+IHtcclxuICByZXR1cm4gWy4uLnBvc3RzLCAuLi5wcm9jZXNzZWREYXRhLnNsaWNlKHBvc3RzLmxlbmd0aCwgcG9zdHMubGVuZ3RoICsgbGltaXQpXTtcclxufTtcclxuXHJcbmNvbnN0IEdldEFQSURhdGEgPSBhc3luYyAoYXBpVXJsKSA9PiB7XHJcbiAgY29uc3QgcHJvbWlzZXMgPSBhcGlVcmwubWFwKGFzeW5jIChyZXBvKSA9PiB7XHJcbiAgICBjb25zdCBhcGlQYXRoID0gYCR7cHJvY2Vzcy5lbnYuU0VSVkVSX0FQSX0vc3RhdGljL2RhdGFgOyAvLyByZWFkIGl0IGZyb20gZW52IHZhcmlhYmxlXHJcbiAgICBjb25zdCBhcGkgPSBgJHthcGlQYXRofS8ke3JlcG8uZW5kcG9pbnR9Lmpzb25gO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBGZXRjaEFQSURhdGEoYXBpKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWU6IHJlcG8ubmFtZSxcclxuICAgICAgZGF0YTogcmVzcG9uc2UsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIGNvbnN0IHJlY2V2aWVkRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICByZXR1cm4gcmVjZXZpZWREYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2V0QVBJRGF0YTtcclxuIiwiaW1wb3J0IE1vYmlsZURldGVjdCBmcm9tICdtb2JpbGUtZGV0ZWN0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZXZpY2VUeXBlKHJlcSkge1xyXG4gIGxldCB1c2VyQWdlbnQ7XHJcbiAgbGV0IGRldmljZVR5cGU7XHJcbiAgaWYgKHJlcSkge1xyXG4gICAgdXNlckFnZW50ID0gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXTtcclxuICB9IGVsc2Uge1xyXG4gICAgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICB9XHJcbiAgY29uc3QgbWQgPSBuZXcgTW9iaWxlRGV0ZWN0KHVzZXJBZ2VudCk7XHJcbiAgaWYgKG1kLnRhYmxldCgpKSB7XHJcbiAgICBkZXZpY2VUeXBlID0gJ3RhYmxldCc7XHJcbiAgfSBlbHNlIGlmIChtZC5tb2JpbGUoKSkge1xyXG4gICAgZGV2aWNlVHlwZSA9ICdtb2JpbGUnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkZXZpY2VUeXBlID0gJ2Rlc2t0b3AnO1xyXG4gIH1cclxuICByZXR1cm4gZGV2aWNlVHlwZTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxubGV0IGRpcmVjdGlvbiA9ICdsdHInO1xyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBkaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdLmdldEF0dHJpYnV0ZSgnZGlyJyk7XHJcbn1cclxuY29uc3Qgd2l0aERpcmVjdGlvbiA9IENvbXBvbmVudCA9PiBwcm9wcyA9PiB7XHJcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSBkYXRhLXJ0bD17ZGlyZWN0aW9ufSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhEaXJlY3Rpb247XHJcbmV4cG9ydCB7IGRpcmVjdGlvbiB9O1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHVybERhdGEpIHtcclxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModXJsRGF0YSk7XHJcbiAgbGV0IHNlYXJjaCA9ICcnO1xyXG4gIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICB1cmxEYXRhW2tleV0gJiZcclxuICAgICAgdXJsRGF0YVtrZXldICE9PSBudWxsICYmXHJcbiAgICAgIHVybERhdGFba2V5XSAhPT0gJycgJiZcclxuICAgICAgdXJsRGF0YVtrZXldICE9PSAnLCcgJiZcclxuICAgICAgdXJsRGF0YVtrZXldICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgdXJsRGF0YVtrZXldLmxlbmd0aCAhPT0gMFxyXG4gICAgKSB7XHJcbiAgICAgIC8vIHNlYXJjaFtrZXldID0gdXJsRGF0YVtrZXldO1xyXG4gICAgICBzZWFyY2ggKz0gYCR7a2V5fT0ke3VybERhdGFba2V5XX0mYDtcclxuICAgIH1cclxuICB9KTtcclxuICAvLyByZXR1cm4gc2VhcmNoO1xyXG4gIHJldHVybiBzZWFyY2guc3Vic3RyaW5nKDAsIHNlYXJjaC5sZW5ndGggLSAxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0YXRlVG9Vcmwoc3RhdGUpIHtcclxuICBsZXQgdXJsRGF0YSA9IHt9O1xyXG4gIGZvciAoY29uc3Qga2V5IGluIHN0YXRlKSB7XHJcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2UgJ3NldFN0YXJ0RGF0ZSc6XHJcbiAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldID8gc3RhdGVba2V5XSA6ICcnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc2V0RW5kRGF0ZSc6XHJcbiAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldID8gc3RhdGVba2V5XSA6ICcnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbWluUHJpY2UnOlxyXG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0gJiYgc3RhdGVba2V5XSA+IDApIHtcclxuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9ICcnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbWF4UHJpY2UnOlxyXG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0gJiYgc3RhdGVba2V5XSA8IDEwMCkge1xyXG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gJyc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhbWVuaXRpZXMnOlxyXG4gICAgICAgICAgdXJsRGF0YVtrZXldID1cclxuICAgICAgICAgICAgc3RhdGVba2V5XSAmJiB0eXBlb2Ygc3RhdGVba2V5XSAhPT0gJ3N0cmluZycgJiYgc3RhdGVba2V5XS5sZW5ndGhcclxuICAgICAgICAgICAgICA/IHN0YXRlW2tleV0uam9pbigpXHJcbiAgICAgICAgICAgICAgOiBzdGF0ZVtrZXldO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncm9vbSc6XHJcbiAgICAgICAgICBpZiAoc3RhdGVba2V5XSkge1xyXG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldID8gc3RhdGVba2V5XSA6IDA7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSAnJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2d1ZXN0JzpcclxuICAgICAgICAgIGlmIChzdGF0ZVtrZXldKSB7XHJcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9IHN0YXRlW2tleV0gPyBzdGF0ZVtrZXldIDogMDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9ICcnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncHJvcGVydHknOlxyXG4gICAgICAgICAgdXJsRGF0YVtrZXldID1cclxuICAgICAgICAgICAgc3RhdGVba2V5XSAmJiB0eXBlb2Ygc3RhdGVba2V5XSAhPT0gJ3N0cmluZycgJiYgc3RhdGVba2V5XS5sZW5ndGhcclxuICAgICAgICAgICAgICA/IHN0YXRlW2tleV0uam9pbigpXHJcbiAgICAgICAgICAgICAgOiBzdGF0ZVtrZXldO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbG9jYXRpb24nOlxyXG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0gJiYgc3RhdGVba2V5XS5sb2NhdGlvbl9sYXQpIHtcclxuICAgICAgICAgICAgdXJsRGF0YVtgJHtrZXl9X2xhdGBdID0gc3RhdGVba2V5XS5sb2NhdGlvbl9sYXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc3RhdGVba2V5XSAmJiBzdGF0ZVtrZXldLmxvY2F0aW9uX2xuZykge1xyXG4gICAgICAgICAgICB1cmxEYXRhW2Ake2tleX1fbG5nYF0gPSBzdGF0ZVtrZXldLmxvY2F0aW9uX2xuZztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3Jlc2V0JzpcclxuICAgICAgICAgIHVybERhdGEgPSBzdGF0ZVtrZXldO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGNyZWF0ZVVybCh1cmxEYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0YXRlVG9VcmxfT05fTkVYVF9KU19ST1VURVJfUFVTSF9WRVJTSU9OKHN0YXRlKSB7XHJcbiAgbGV0IHVybERhdGEgPSB7fTtcclxuICBmb3IgKGNvbnN0IGtleSBpbiBzdGF0ZSkge1xyXG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlICdzZXRTdGFydERhdGUnOlxyXG4gICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XSA/IHN0YXRlW2tleV0gOiAnJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NldEVuZERhdGUnOlxyXG4gICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XSA/IHN0YXRlW2tleV0gOiAnJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21pblByaWNlJzpcclxuICAgICAgICAgIGlmIChzdGF0ZVtrZXldICYmIHN0YXRlW2tleV0gPiAwKSB7XHJcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9IHN0YXRlW2tleV07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSAnJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21heFByaWNlJzpcclxuICAgICAgICAgIGlmIChzdGF0ZVtrZXldICYmIHN0YXRlW2tleV0gPCAxMDApIHtcclxuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9ICcnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYW1lbml0aWVzJzpcclxuICAgICAgICAgIHVybERhdGFba2V5XSA9XHJcbiAgICAgICAgICAgIHN0YXRlW2tleV0gJiYgdHlwZW9mIHN0YXRlW2tleV0gIT09ICdzdHJpbmcnICYmIHN0YXRlW2tleV0ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgPyBzdGF0ZVtrZXldLmpvaW4oKVxyXG4gICAgICAgICAgICAgIDogc3RhdGVba2V5XTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3Jvb20nOlxyXG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0pIHtcclxuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XSA/IHN0YXRlW2tleV0gOiAwO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gJyc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdndWVzdCc6XHJcbiAgICAgICAgICBpZiAoc3RhdGVba2V5XSkge1xyXG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldID8gc3RhdGVba2V5XSA6IDA7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSAnJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3Byb3BlcnR5JzpcclxuICAgICAgICAgIHVybERhdGFba2V5XSA9XHJcbiAgICAgICAgICAgIHN0YXRlW2tleV0gJiYgdHlwZW9mIHN0YXRlW2tleV0gIT09ICdzdHJpbmcnICYmIHN0YXRlW2tleV0ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgPyBzdGF0ZVtrZXldLmpvaW4oKVxyXG4gICAgICAgICAgICAgIDogc3RhdGVba2V5XTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xvY2F0aW9uJzpcclxuICAgICAgICAgIGlmIChzdGF0ZVtrZXldICYmIHN0YXRlW2tleV0ubG9jYXRpb25fbGF0KSB7XHJcbiAgICAgICAgICAgIHVybERhdGFbYCR7a2V5fV9sYXRgXSA9IHN0YXRlW2tleV0ubG9jYXRpb25fbGF0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0gJiYgc3RhdGVba2V5XS5sb2NhdGlvbl9sbmcpIHtcclxuICAgICAgICAgICAgdXJsRGF0YVtgJHtrZXl9X2xuZ2BdID0gc3RhdGVba2V5XS5sb2NhdGlvbl9sbmc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdyZXNldCc6XHJcbiAgICAgICAgICB1cmxEYXRhID0gc3RhdGVba2V5XTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjcmVhdGVVcmwodXJsRGF0YSk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBTdGlja3kgZnJvbSAncmVhY3Qtc3RpY2t5bm9kZSc7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ2NvbXBvbmVudHMvVUkvVG9vbGJhci9Ub29sYmFyJztcclxuaW1wb3J0IENhdGVnb3J5U2VhcmNoIGZyb20gJ2NvbnRhaW5lci9MaXN0aW5nL1NlYXJjaC9DYXRlZ29yeVNlYXJjaC9DYXRlZ29yeVNlYXJjaCc7XHJcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBTZWN0aW9uR3JpZCBmcm9tICdjb21wb25lbnRzL1NlY3Rpb25HcmlkL1NlY3Rpb25HcmlkJztcclxuaW1wb3J0IHsgUG9zdFBsYWNlaG9sZGVyIH0gZnJvbSAnY29tcG9uZW50cy9VSS9Db250ZW50TG9hZGVyL0NvbnRlbnRMb2FkZXInO1xyXG5pbXBvcnQgTGlzdGluZ01hcCBmcm9tICdjb250YWluZXIvTGlzdGluZy9MaXN0aW5nTWFwJztcclxuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gJ2NvbnRleHQvU2VhcmNoUHJvdmlkZXInO1xyXG5pbXBvcnQgR2V0QVBJRGF0YSwge1xyXG4gIFBhZ2luYXRvcixcclxuICBTZWFyY2hlZERhdGEsXHJcbiAgU2VhcmNoU3RhdGVLZXlDaGVjayxcclxuICBQcm9jZXNzQVBJRGF0YSxcclxufSBmcm9tICdsaWJyYXJ5L2hlbHBlcnMvZ2V0X2FwaV9kYXRhJztcclxuaW1wb3J0IHsgZ2V0RGV2aWNlVHlwZSB9IGZyb20gJ2xpYnJhcnkvaGVscGVycy9nZXRfZGV2aWNlX3R5cGUnO1xyXG5pbXBvcnQgeyBTSU5HTEVfUE9TVF9QQUdFIH0gZnJvbSAnc2V0dGluZ3MvY29uc3RhbnQnO1xyXG5pbXBvcnQge1xyXG4gIExJU1RJTkdfUEFHRV9QT1NUX0xJTUlULFxyXG4gIExJU1RJTkdfUEFHRV9DT0xVTU5fV0lEVEhfV0lUSE9VVF9NQVAsXHJcbiAgTElTVElOR19QQUdFX0NPTFVNTl9XSURUSF9XSVRIX01BUCxcclxufSBmcm9tICdzZXR0aW5ncy9jb25maWcnO1xyXG5pbXBvcnQgTGlzdGluZ1dyYXBwZXIsIHtcclxuICBQb3N0c1dyYXBwZXIsXHJcbiAgU2hvd01hcENoZWNrYm94LFxyXG59IGZyb20gJ2NvbnRhaW5lci9MaXN0aW5nL0xpc3Rpbmcuc3R5bGUnO1xyXG5cclxuY29uc3QgRmlsdGVyRHJhd2VyID0gZHluYW1pYygoKSA9PlxyXG4gIGltcG9ydCgnY29udGFpbmVyL0xpc3RpbmcvU2VhcmNoL01vYmlsZVNlYXJjaFZpZXcnKVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdGluZ1BhZ2UoeyBwcm9jZXNzZWREYXRhLCBkZXZpY2VUeXBlIH0pIHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChTZWFyY2hDb250ZXh0KTtcclxuICBjb25zdCBzdGF0ZWtleSA9IFNlYXJjaFN0YXRlS2V5Q2hlY2soc3RhdGUpO1xyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoXHJcbiAgICBwcm9jZXNzZWREYXRhLnNsaWNlKDAsIExJU1RJTkdfUEFHRV9QT1NUX0xJTUlUKSB8fCBbXVxyXG4gICk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93TWFwLCBzZXRTaG93TWFwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdGF0ZWtleSA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb25zdCBuZXdEYXRhID0gU2VhcmNoZWREYXRhKHByb2Nlc3NlZERhdGEpO1xyXG4gICAgICBzZXRQb3N0cyhuZXdEYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFBvc3RzKHByb2Nlc3NlZERhdGEuc2xpY2UoMCwgTElTVElOR19QQUdFX1BPU1RfTElNSVQpIHx8IFtdKTtcclxuICAgIH1cclxuICB9LCBbc3RhdGVrZXldKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWFwVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd01hcCgoc2hvd01hcCkgPT4gIXNob3dNYXApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvYWRNb3JlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gUGFnaW5hdG9yKHBvc3RzLCBwcm9jZXNzZWREYXRhLCBMSVNUSU5HX1BBR0VfUE9TVF9MSU1JVCk7XHJcbiAgICAgIHNldFBvc3RzKGRhdGEpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH07XHJcblxyXG4gIGxldCBjb2x1bW5XaWR0aCA9IExJU1RJTkdfUEFHRV9DT0xVTU5fV0lEVEhfV0lUSE9VVF9NQVA7XHJcbiAgaWYgKHNob3dNYXApIHtcclxuICAgIGNvbHVtbldpZHRoID0gTElTVElOR19QQUdFX0NPTFVNTl9XSURUSF9XSVRIX01BUDtcclxuICB9XHJcblxyXG4gIGxldCBjb2x1bW5Db3VudCA9ICdjb2wtMjQnO1xyXG4gIGlmIChkZXZpY2VUeXBlID09PSAnZGVza3RvcCcgJiYgc2hvd01hcCA9PT0gdHJ1ZSkge1xyXG4gICAgY29sdW1uQ291bnQgPSAnY29sLTEyJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdGluZ1dyYXBwZXI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5MaXN0aW5nIHwgQSByZWFjdCBuZXh0IGxpc3RpbmcgdGVtcGxhdGU8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8U3RpY2t5IHRvcD17ODJ9IGlubmVyWj17OTk5fSBhY3RpdmVDbGFzcz1cImlzSGVhZGVyU3RpY2t5XCI+XHJcbiAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgIGxlZnQ9e1xyXG4gICAgICAgICAgICBkZXZpY2VUeXBlID09PSAnZGVza3RvcCcgPyA8Q2F0ZWdvcnlTZWFyY2ggLz4gOiA8RmlsdGVyRHJhd2VyIC8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByaWdodD17XHJcbiAgICAgICAgICAgIDxTaG93TWFwQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94IGRlZmF1bHRDaGVja2VkPXtmYWxzZX0gb25DaGFuZ2U9e2hhbmRsZU1hcFRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICBTaG93IG1hcFxyXG4gICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvU2hvd01hcENoZWNrYm94PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvU3RpY2t5PlxyXG5cclxuICAgICAgPFBvc3RzV3JhcHBlciBjbGFzc05hbWU9e2NvbHVtbkNvdW50fT5cclxuICAgICAgICA8U2VjdGlvbkdyaWRcclxuICAgICAgICAgIGxpbms9e1NJTkdMRV9QT1NUX1BBR0V9XHJcbiAgICAgICAgICBjb2x1bW5XaWR0aD17Y29sdW1uV2lkdGh9XHJcbiAgICAgICAgICBkZXZpY2VUeXBlPXtkZXZpY2VUeXBlfVxyXG4gICAgICAgICAgZGF0YT17cG9zdHN9XHJcbiAgICAgICAgICB0b3RhbEl0ZW09e3Byb2Nlc3NlZERhdGEubGVuZ3RofVxyXG4gICAgICAgICAgbGltaXQ9e0xJU1RJTkdfUEFHRV9QT1NUX0xJTUlUfVxyXG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgIGhhbmRsZUxvYWRNb3JlPXtoYW5kbGVMb2FkTW9yZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXs8UG9zdFBsYWNlaG9sZGVyIC8+fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvUG9zdHNXcmFwcGVyPlxyXG4gICAgICB7c2hvd01hcCAmJiA8TGlzdGluZ01hcCBsb2FkaW5nPXtsb2FkaW5nfSBtYXBEYXRhPXtwb3N0c30gLz59XHJcbiAgICA8L0xpc3RpbmdXcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IGFwaVVybCA9IFtcclxuICAgIHtcclxuICAgICAgZW5kcG9pbnQ6ICdob3RlbCcsXHJcbiAgICAgIG5hbWU6ICdsaXN0aW5nSG90ZWwnLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIGNvbnN0IHBhZ2VEYXRhID0gYXdhaXQgR2V0QVBJRGF0YShhcGlVcmwpO1xyXG4gIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBQcm9jZXNzQVBJRGF0YShwYWdlRGF0YSk7XHJcbiAgY29uc3QgZGV2aWNlVHlwZSA9IGdldERldmljZVR5cGUocmVxKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcHJvY2Vzc2VkRGF0YSwgZGV2aWNlVHlwZSB9LFxyXG4gIH07XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEhPTUVfUEFHRV9TRUNUSU9OU19JVEVNX0xJTUlUX0ZPUl9NT0JJTEVfREVWSUNFID0gNDtcclxuZXhwb3J0IGNvbnN0IEhPTUVfUEFHRV9TRUNUSU9OU19JVEVNX0xJTUlUX0ZPUl9UQUJMRVRfREVWSUNFID0gNDtcclxuZXhwb3J0IGNvbnN0IEhPTUVfUEFHRV9TRUNUSU9OU19JVEVNX0xJTUlUX0ZPUl9ERVNLVE9QX0RFVklDRSA9IDU7XHJcbmV4cG9ydCBjb25zdCBIT01FX1BBR0VfU0VDVElPTlNfQ09MVU1OU19SRVNQT05TSVZFX1dJRFRIID0gW1xyXG4gIDEgLyAxLFxyXG4gIDEgLyAyLFxyXG4gIDEgLyAzLFxyXG4gIDEgLyA0LFxyXG4gIDEgLyA1LFxyXG5dO1xyXG5leHBvcnQgY29uc3QgTElTVElOR19QQUdFX1BPU1RfTElNSVQgPSAxMDtcclxuXHJcbmV4cG9ydCBjb25zdCBMSVNUSU5HX1BBR0VfQ09MVU1OX1dJRFRIX1dJVEhPVVRfTUFQID0gW1xyXG4gIDEgLyAxLFxyXG4gIDEgLyAyLFxyXG4gIDEgLyAzLFxyXG4gIDEgLyA0LFxyXG4gIDEgLyA1LFxyXG5dO1xyXG5leHBvcnQgY29uc3QgTElTVElOR19QQUdFX0NPTFVNTl9XSURUSF9XSVRIX01BUCA9IFtcclxuICAxIC8gMSxcclxuICAxIC8gMixcclxuICAxIC8gMixcclxuICAxIC8gMixcclxuICAxIC8gMyxcclxuXTtcclxuIiwiLy8gR2VuZXJhbCBQYWdlIFNlY3Rpb25cclxuZXhwb3J0IGNvbnN0IEhPTUVfUEFHRSA9ICcvJztcclxuZXhwb3J0IGNvbnN0IEFHRU5UU19QQUdFID0gJy9hZ2VudHMnO1xyXG5cclxuLy8gTGlzdGluZyBTaW5nbGUgUGFnZSBTZWN0aW9uXHJcbmV4cG9ydCBjb25zdCBMSVNUSU5HX1BPU1RTX1BBR0UgPSAnL2xpc3RpbmcnO1xyXG5leHBvcnQgY29uc3QgU0lOR0xFX1BPU1RfUEFHRSA9ICcvcG9zdCc7XHJcblxyXG4vLyBBZ2VudCBQcm9maWxlIFBhZ2UgU2VjdGlvblxyXG5leHBvcnQgY29uc3QgQUdFTlRfUFJPRklMRV9QQUdFID0gJy9wcm9maWxlJztcclxuZXhwb3J0IGNvbnN0IEFHRU5UX0FDQ09VTlRfU0VUVElOR1NfUEFHRSA9ICcvYWNjb3VudC1zZXR0aW5ncyc7XHJcbmV4cG9ydCBjb25zdCBBR0VOVF9QUk9GSUxFX0VESVRfUEFHRSA9ICcvZWRpdCc7XHJcbmV4cG9ydCBjb25zdCBBR0VOVF9JTUFHRV9FRElUX1BBR0UgPSAnL2NoYW5nZS1pbWFnZSc7XHJcbmV4cG9ydCBjb25zdCBBR0VOVF9QQVNTV09SRF9DSEFOR0VfUEFHRSA9ICcvY2hhbmdlLXBhc3N3b3JkJztcclxuZXhwb3J0IGNvbnN0IEFHRU5UX1BST0ZJTEVfREVMRVRFID0gJy9kZWxldGUnO1xyXG5leHBvcnQgY29uc3QgQUdFTlRfUFJPRklMRV9GQVZPVVJJVEUgPSAnL2Zhdm91cml0ZS1wb3N0JztcclxuZXhwb3J0IGNvbnN0IEFHRU5UX1BST0ZJTEVfQ09OVEFDVCA9ICcvY29udGFjdCc7XHJcbmV4cG9ydCBjb25zdCBBRERfSE9URUxfUEFHRSA9ICcvYWRkLWhvdGVsJztcclxuXHJcbi8vIE90aGVyIFBhZ2VzXHJcbmV4cG9ydCBjb25zdCBQUklDSU5HX1BMQU5fUEFHRSA9ICcvcHJpY2luZy1wbGFuJztcclxuZXhwb3J0IGNvbnN0IFBSSVZBQ1lfUEFHRSA9ICcvcHJpdmFjeSc7XHJcblxyXG4vLyBMb2dpbiAvIFJlZ2lzdGF0aW9uIFBhZ2VcclxuZXhwb3J0IGNvbnN0IExPR0lOX1BBR0UgPSAnL3NpZ24taW4nO1xyXG5leHBvcnQgY29uc3QgUkVHSVNUUkFUSU9OX1BBR0UgPSAnL3NpZ24tdXAnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX1BBU1NXT1JEX1BBR0UgPSAnL2NoYW5nZS1wYXNzd29yZCc7XHJcbmV4cG9ydCBjb25zdCBGT1JHRVRfUEFTU1dPUkRfUEFHRSA9ICcvZm9yZ2V0LXBhc3N3b3JkJztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL01pbnVzT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL1BsdXNPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2NoZWNrYm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2RyYXdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9pbnB1dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9zbGlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlzdG9yeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL2lzRW1wdHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL3NodWZmbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9iaWxlLWRldGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFjY2Vzc2libGUtYWNjb3JkaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvbnRlbnQtbG9hZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRhdGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRhdGVzL2luaXRpYWxpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1tYXBzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1tYXBzL2xpYi9jb21wb25lbnRzL2FkZG9ucy9NYXJrZXJDbHVzdGVyZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RpY2t5bm9kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtc3lzdGVtXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=